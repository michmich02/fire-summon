import * as THREE from 'three'
import type { GestureState } from './gestureRecognizer'

const N           = 3000
const FLOAT_NOISE = 0.006
const DAMPING     = 0.91
const RESTORE     = 0.00055
const MAX_SPD     = 16
const SHOCK_MAX_R = 700   // shockwave max radius px
const SHOCK_LIFE  = 40    // frames
const WAVE_SPD    = 10    // sweep wave propagation px/frame
const WAVE_LIFE   = 60
const MAX_WAVES   = 6

interface Wave { ox:number; oy:number; nx:number; ny:number; fx:number; fy:number; str:number; age:number }
interface Shock { active:boolean; ox:number; oy:number; age:number }

// Intro activation phases
// 0 = materializing (particles fade in slowly, ~2s)
// 1 = ready (waiting for first hand, particles visible, gentle drift)
// 2 = flash (brief bright flash when first hand detected)
// 3 = active (normal interaction)
type IntroPhase = 0 | 1 | 2 | 3

const VERT = /* glsl */`
attribute float aEnergy;
attribute float aSize;
attribute float aFrozen;
varying float vEnergy;
varying float vFrozen;
void main(){
  vEnergy=aEnergy; vFrozen=aFrozen;
  vec4 mv=modelViewMatrix*vec4(position,1.0);
  gl_Position=projectionMatrix*mv;
  gl_PointSize=max(0.5,aSize*(1.0+aFrozen*0.5));
}
`
const FRAG = /* glsl */`
varying float vEnergy;
varying float vFrozen;
uniform float uComp;
uniform float uStr;
void main(){
  vec2  c=gl_PointCoord*2.0-1.0;
  float d=dot(c,c);
  if(d>1.0)discard;
  float g=1.0-smoothstep(0.0,1.0,sqrt(d));

  vec3 rest  =vec3(0.40,0.25,1.00);   // brighter purple-blue at rest
  vec3 cyan  =vec3(0.10,0.90,1.00);
  vec3 white =vec3(1.00,1.00,1.00);
  vec3 gold  =vec3(1.00,0.85,0.20);
  vec3 ice   =vec3(0.70,0.92,1.00);
  vec3 teal  =vec3(0.20,1.00,0.75);

  vec3 col;
  if(vEnergy<0.5) col=mix(rest,cyan,vEnergy*2.0);
  else            col=mix(cyan,white,(vEnergy-0.5)*2.0);

  // Frozen: shift to ice blue
  col=mix(col,ice,vFrozen*0.85);
  // Compression: gold tint
  col=mix(col,gold,uComp*vEnergy*0.70);
  // Stretch strands: teal tint on energized particles
  col=mix(col,teal,uStr*(vEnergy>0.3?0.60:0.0));

  float alpha=g*(0.85+vEnergy*0.15);   // high base alpha, visible at rest
  gl_FragColor=vec4(col*alpha,alpha*0.93);
}
`

export class FieldParticles {
  private geo: THREE.BufferGeometry
  private mat: THREE.ShaderMaterial
  public  pts: THREE.Points

  private hx: Float32Array; private hy: Float32Array
  private px: Float32Array; private py: Float32Array
  private vx: Float32Array; private vy: Float32Array
  private ph: Float32Array   // noise phase
  private en: Float32Array   // energy (smoothed)
  private fr: Float32Array   // frozen T per particle [0,1]
  private sz: Float32Array

  private pos3:  Float32Array
  private enBuf: Float32Array
  private frBuf: Float32Array
  private szBuf: Float32Array

  private waves: Wave[] = []
  private shock: Shock = { active:false, ox:0, oy:0, age:0 }
  // Activation sequence
  private introPhase: IntroPhase = 0
  private introTimer  = 0    // frames elapsed in current phase
  private globalAlpha = 0    // 0→1 particle visibility ramp
  private flashT      = 0    // 0→1→0 flash brightness
  private actPulse: Shock = { active:false, ox:0, oy:0, age:0 }  // awakening pulse
  private W: number; private H: number

  constructor(W: number, H: number) {
    this.W=W; this.H=H
    this.hx=new Float32Array(N); this.hy=new Float32Array(N)
    this.px=new Float32Array(N); this.py=new Float32Array(N)
    this.vx=new Float32Array(N); this.vy=new Float32Array(N)
    this.ph=new Float32Array(N); this.en=new Float32Array(N)
    this.fr=new Float32Array(N); this.sz=new Float32Array(N)
    this.pos3 =new Float32Array(N*3); this.enBuf=new Float32Array(N)
    this.frBuf=new Float32Array(N);   this.szBuf=new Float32Array(N)

    for (let i=0;i<N;i++){
      const x=(Math.random()-0.5)*W*0.92, y=(Math.random()-0.5)*H*0.88
      this.hx[i]=x; this.hy[i]=y; this.px[i]=x; this.py[i]=y
      this.ph[i]=Math.random()*Math.PI*2
      this.sz[i]=5.0+Math.random()*5.5
    }

    this.geo=new THREE.BufferGeometry()
    this.geo.setAttribute('position',new THREE.BufferAttribute(this.pos3, 3))
    this.geo.setAttribute('aEnergy', new THREE.BufferAttribute(this.enBuf,1))
    this.geo.setAttribute('aFrozen', new THREE.BufferAttribute(this.frBuf,1))
    this.geo.setAttribute('aSize',   new THREE.BufferAttribute(this.szBuf,1))

    this.mat=new THREE.ShaderMaterial({
      vertexShader:VERT, fragmentShader:FRAG,
      uniforms:{ uComp:{value:0}, uStr:{value:0} },
      transparent:true, blending:THREE.AdditiveBlending,
      depthWrite:false, depthTest:false,
    })
    this.pts=new THREE.Points(this.geo,this.mat)
    this.pts.renderOrder=4
  }

  /** Call once when the first hand is detected */
  triggerActivation() {
    if (this.introPhase >= 2) return   // already activated
    this.introPhase = 2
    this.introTimer = 0
    // Pulse radiates from lower-center of screen (body center)
    this.actPulse = { active:true, ox:0, oy: -this.H*0.10, age:0 }
  }

  update(gs: GestureState, time: number) {
    const W=this.W, H=this.H

    // ── Intro / activation state machine ─────────────────────────────
    this.introTimer++
    if (this.introPhase === 0) {
      // Phase 0: particles slowly materialize over 120 frames (~2s)
      this.globalAlpha = Math.min(1, this.introTimer / 120)
      if (this.introTimer >= 120) { this.introPhase = 1; this.introTimer = 0 }
    } else if (this.introPhase === 1) {
      this.globalAlpha = 1
      // Waiting for first hand — triggerActivation() moves us to phase 2
    } else if (this.introPhase === 2) {
      // Flash: 0→peak→fade over 40 frames
      this.flashT = this.introTimer < 15
        ? this.introTimer / 15            // ramp up
        : Math.max(0, 1-(this.introTimer-15)/25)  // ramp down
      if (this.introTimer >= 40) { this.introPhase = 3; this.flashT=0; this.introTimer=0 }
    } else {
      this.globalAlpha = 1; this.flashT = 0
    }

    // Tick activation pulse
    if (this.actPulse.active) {
      this.actPulse.age++
      if (this.actPulse.age > 80) this.actPulse.active=false
    }

    // Trigger shockwave
    if (gs.shockwaveNow && !this.shock.active) {
      this.shock = { active:true, ox:gs.shockwaveMX-W/2, oy:-(gs.shockwaveMY-H/2), age:0 }
    }
    if (this.shock.active) this.shock.age++
    if (this.shock.age > SHOCK_LIFE) this.shock.active=false

    // Register sweep waves from sweeping hands
    for (const h of gs.hands) {
      if (h.isSweeping && this.waves.length < MAX_WAVES) {
        const vmag = Math.hypot(h.velX, h.velY)+0.01
        this.waves.push({
          ox: h.px-W/2, oy: -(h.py-H/2),
          nx: h.velX/vmag, ny: -h.velY/vmag,  // wave propagation direction
          fx: h.velX*0.18, fy: -h.velY*0.18,   // force to apply on particles
          str: Math.min(vmag/20, 1.0),
          age: 0,
        })
      }
    }
    // Tick waves
    this.waves = this.waves.filter(w => { w.age++; return w.age < WAVE_LIFE })

    this.mat.uniforms.uComp.value = gs.compression
    this.mat.uniforms.uStr.value  = gs.stretchT

    // Compute compression mid in THREE space
    const cmx = gs.midX-W/2, cmy = -(gs.midY-H/2)

    for (let i=0;i<N;i++){
      let px=this.px[i], py=this.py[i]
      let vx=this.vx[i], vy=this.vy[i]
      const frozen = this.fr[i]

      // ── Idle float (always on) ─────────────────────────────────────
      const ph=this.ph[i]
      if (frozen < 0.9) {
        vx += Math.sin(time*0.30+ph*3.7)*FLOAT_NOISE
        vy += Math.cos(time*0.24+ph*2.9)*FLOAT_NOISE
      }

      // ── Restore toward home ────────────────────────────────────────
      if (frozen < 0.5) {
        vx += (this.hx[i]-px)*RESTORE
        vy += (this.hy[i]-py)*RESTORE
      }

      // ── Per-hand forces ────────────────────────────────────────────
      let freezeTarget = 0
      let hoverPulse = 0

      for (const h of gs.hands) {
        const hx = h.px-W/2, hy = -(h.py-H/2)
        const dx=px-hx, dy=py-hy
        const d=Math.sqrt(dx*dx+dy*dy)+0.001
        const nx=dx/d, ny=dy/d

        // 1. REPULSION — open palm
        if (h.isOpen && d<170) {
          const t=1-d/170
          vx+=nx*t*t*0.30*h.openness*12
          vy+=ny*t*t*0.30*h.openness*12
        }

        // 2. ATTRACTION — fist
        if (h.isFist && d<220) {
          const t=1-d/220
          vx-=nx*t*t*0.32*(1-h.openness)*16
          vy-=ny*t*t*0.32*(1-h.openness)*16
        }

        // 3. TWIST — wrist rotation
        if (Math.abs(h.rotDelta) > 0.04 && d<200) {
          const t=1-d/200
          // Tangential force (perpendicular to radial direction, in rotation direction)
          const sign = h.rotDelta > 0 ? 1 : -1
          vx += (-ny)*sign*t*Math.abs(h.rotDelta)*30
          vy += ( nx)*sign*t*Math.abs(h.rotDelta)*30
        }

        // 4. INDEX FINGER GAP — pointing gesture
        if (h.isPointing) {
          const itx=h.itx-W/2, ity=-(h.ity-H/2)
          const fdx=px-itx, fdy=py-ity
          const fd=Math.sqrt(fdx*fdx+fdy*fdy)+0.001
          if (fd < 70) {
            const ft=1-fd/70
            vx+=fdx/fd*ft*ft*22
            vy+=fdy/fd*ft*ft*22
          }
        }

        // 5. FREEZE — open palm held still
        if (h.isFreezing && d<200) {
          const t=1-d/200
          freezeTarget=Math.max(freezeTarget,t)
        }

        // 6. HOVER PULSE — breathing effect
        if (h.isHovering && d<220) {
          const t=1-d/220
          hoverPulse=Math.max(hoverPulse,Math.sin(time*3.5+ph)*t*0.018)
        }
      }

      // Apply hover pulse (radial breathing)
      if (Math.abs(hoverPulse)>0.001){
        for (const h of gs.hands){
          const hx=h.px-W/2, hy=-(h.py-H/2)
          const dx=px-hx, dy=py-hy
          const d=Math.sqrt(dx*dx+dy*dy)+0.001
          vx+=dx/d*hoverPulse; vy+=dy/d*hoverPulse
        }
      }

      // Freeze state update
      this.fr[i] = Math.max(0, Math.min(1, this.fr[i] + (freezeTarget-this.fr[i])*0.05))
      if (this.fr[i]>0.7){ vx*=0.3; vy*=0.3 }  // dampen frozen particles

      // ── Sweep wave propagation ─────────────────────────────────────
      for (const w of this.waves) {
        const waveFrontDist = w.age * WAVE_SPD    // current wave front position along normal
        // Particle's projection onto wave normal
        const dp = (px-w.ox)*w.nx + (py-w.oy)*w.ny
        const distToFront = Math.abs(dp - waveFrontDist)
        if (distToFront < 50) {
          // Lateral distance from wave center line
          const lx = (px-w.ox)-w.nx*dp, ly = (py-w.oy)-w.ny*dp
          const latD = Math.sqrt(lx*lx+ly*ly)
          if (latD < 200) {
            const fade = (1-distToFront/50)*(1-latD/200)*w.str*(1-w.age/WAVE_LIFE)
            vx += w.fx*fade*8
            vy += w.fy*fade*8
          }
        }
      }

      // ── Compression band ─────────────────────────────────────────
      if (gs.compression>0.05) {
        const dx=px-cmx, dy=py-cmy
        const d=Math.sqrt(dx*dx+dy*dy)
        if (d<300) {
          const ca=gs.bandAngle
          const bnx=-Math.sin(ca), bny=Math.cos(ca)
          const perp=dx*bnx+dy*bny
          const pullStr=gs.compression*gs.compression*0.28*(1-d/300)
          vx-=bnx*perp*pullStr; vy-=bny*perp*pullStr
        }
      }

      // ── Energy strands — stretch pulls particles toward band ──────
      if (gs.stretchT>0.05 && gs.bothPresent) {
        const dx=px-cmx, dy=py-cmy
        const d=Math.sqrt(dx*dx+dy*dy)
        const ca=gs.bandAngle
        const bnx=-Math.sin(ca), bny=Math.cos(ca)
        const perp=dx*bnx+dy*bny
        const along=(px-cmx)*Math.cos(ca)+(py-cmy)*Math.sin(ca)
        const halfDist=gs.dist/2
        if (Math.abs(perp)<80 && Math.abs(along)<halfDist+40) {
          // Pull lateral particles toward band line
          const str=gs.stretchT*(1-Math.abs(perp)/80)*0.18
          vx-=bnx*perp*str; vy-=bny*perp*str
        }
      }

      // ── Shockwave ─────────────────────────────────────────────────
      if (this.shock.active) {
        const dx=px-this.shock.ox, dy=py-this.shock.oy
        const d=Math.sqrt(dx*dx+dy*dy)+0.001
        const waveR=this.shock.age/SHOCK_LIFE*SHOCK_MAX_R
        const distToRing=Math.abs(d-waveR)
        if (distToRing<60) {
          const fade=(1-distToRing/60)*(1-this.shock.age/SHOCK_LIFE)
          vx+=dx/d*fade*22; vy+=dy/d*fade*22
        }
      }

      // ── Activation pulse (body-center awakening wave) ──────────────
      if (this.actPulse.active) {
        const dx=px-this.actPulse.ox, dy=py-this.actPulse.oy
        const d=Math.sqrt(dx*dx+dy*dy)+0.001
        const waveR=this.actPulse.age/80*SHOCK_MAX_R*1.2
        const distToRing=Math.abs(d-waveR)
        if (distToRing<80) {
          const fade=(1-distToRing/80)*(1-this.actPulse.age/80)
          vx+=dx/d*fade*20; vy+=dy/d*fade*20
        }
      }


      const dampF = this.fr[i]>0.7 ? 0.5 : DAMPING
      vx*=dampF; vy*=dampF
      const spd=Math.sqrt(vx*vx+vy*vy)
      if (spd>MAX_SPD){vx=vx/spd*MAX_SPD;vy=vy/spd*MAX_SPD}

      px+=vx; py+=vy
      this.px[i]=px; this.py[i]=py
      this.vx[i]=vx; this.vy[i]=vy

      // Energy = speed normalized + frozen boost
      const rawE=Math.min(1,spd/(MAX_SPD*0.6))
      this.en[i]=this.en[i]*0.85+rawE*0.15
      // Apply globalAlpha (fade-in during intro) and flashT (activation flash)
      const baseE = Math.min(1, this.en[i] + (this.fr[i]>0.5?0.3:0) + this.flashT*0.8)
      this.enBuf[i] = baseE * this.globalAlpha
      this.frBuf[i] = this.fr[i]
      // During fade-in, size also scales up; flash makes particles bigger
      this.szBuf[i] = this.sz[i]*(1+this.en[i]*1.8)*(0.4+this.globalAlpha*0.6)*(1+this.flashT*0.5)

      const ix=i*3
      this.pos3[ix]=px; this.pos3[ix+1]=py; this.pos3[ix+2]=0
    }

    ;(this.geo.getAttribute('position') as THREE.BufferAttribute).needsUpdate=true
    ;(this.geo.getAttribute('aEnergy')  as THREE.BufferAttribute).needsUpdate=true
    ;(this.geo.getAttribute('aFrozen')  as THREE.BufferAttribute).needsUpdate=true
    ;(this.geo.getAttribute('aSize')    as THREE.BufferAttribute).needsUpdate=true
  }

  resize(W: number, H: number){ this.W=W; this.H=H }
  dispose(){ this.geo.dispose(); this.mat.dispose() }
}
