import * as THREE from 'three'
import type { ColorPalette } from './colorPalettes'

const N = 900  // fire particle count

const VERT = /* glsl */`
attribute float aSize;
attribute float aAlpha;
attribute float aAge;
varying float vAge;
varying float vAlpha;
void main(){
  vAge   = aAge;
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position  = projectionMatrix * mv;
  gl_PointSize = max(0.5, aSize * (1.2 - aAge * 0.7));
}
`

const FRAG = /* glsl */`
uniform vec3 uC1;   // bright / hot
uniform vec3 uC2;   // mid
uniform vec3 uC3;   // outer / fading
varying float vAge;
varying float vAlpha;
void main(){
  vec2  c = gl_PointCoord*2.0-1.0;
  float d = dot(c,c);
  if(d>1.0) discard;
  // Slightly crisper than pure gaussian — feels more like a spark
  float g = 1.0 - smoothstep(0.1, 1.0, sqrt(d));

  // Color: bright when born → orange mid → dark red dying
  vec3 col;
  if(vAge < 0.30)      col = mix(uC1, uC2, vAge/0.30);
  else if(vAge < 0.70) col = mix(uC2, uC3, (vAge-0.30)/0.40);
  else                 col = uC3 * (1.0 - (vAge-0.70)/0.30);

  float alpha = g * vAlpha;
  gl_FragColor = vec4(col * alpha, alpha * 0.95);
}
`

export class FireParticles {
  private geo: THREE.BufferGeometry
  private mat: THREE.ShaderMaterial
  public  pts: THREE.Points

  // Per-particle CPU state
  private px:    Float32Array  // THREE.js world x
  private py:    Float32Array  // THREE.js world y
  private pz:    Float32Array
  private vx:    Float32Array
  private vy:    Float32Array
  private age:   Float32Array  // current frame age
  private life:  Float32Array  // max lifetime frames
  private phase: Float32Array  // noise phase offset
  // GPU attributes
  private pos3:  Float32Array  // interleaved xyz
  private ageN:  Float32Array  // normalized age [0,1]
  private sz:    Float32Array
  private al:    Float32Array

  private smoothE = 0
  private W: number; private H: number

  constructor(W: number, H: number) {
    this.W = W; this.H = H

    this.px    = new Float32Array(N)
    this.py    = new Float32Array(N)
    this.pz    = new Float32Array(N)
    this.vx    = new Float32Array(N)
    this.vy    = new Float32Array(N)
    this.age   = new Float32Array(N).fill(999)  // start "dead"
    this.life  = new Float32Array(N).fill(1)
    this.phase = new Float32Array(N)
    this.pos3  = new Float32Array(N * 3)
    this.ageN  = new Float32Array(N)
    this.sz    = new Float32Array(N)
    this.al    = new Float32Array(N)

    for (let i = 0; i < N; i++) this.phase[i] = Math.random() * Math.PI * 2

    this.geo = new THREE.BufferGeometry()
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos3, 3))
    this.geo.setAttribute('aAge',     new THREE.BufferAttribute(this.ageN, 1))
    this.geo.setAttribute('aSize',    new THREE.BufferAttribute(this.sz,   1))
    this.geo.setAttribute('aAlpha',   new THREE.BufferAttribute(this.al,   1))

    this.mat = new THREE.ShaderMaterial({
      vertexShader:   VERT,
      fragmentShader: FRAG,
      uniforms: {
        uC1: { value: new THREE.Vector3(1, 1, 0.85) },
        uC2: { value: new THREE.Vector3(1, 0.45, 0.02) },
        uC3: { value: new THREE.Vector3(0.65, 0.05, 0) },
      },
      transparent: true,
      blending:    THREE.AdditiveBlending,
      depthWrite:  false,
      depthTest:   false,
    })

    this.pts = new THREE.Points(this.geo, this.mat)
    this.pts.renderOrder = 5
    this.pts.visible = false
  }

  update(
    cx: number, cy: number,   // fingertip in screen pixels
    energy: number,
    time: number,
    palette: ColorPalette
  ) {
    this.smoothE += (energy - this.smoothE) * 0.055
    const se = this.smoothE

    this.pts.visible = se > 0.03
    if (!this.pts.visible) return

    // Flame size in screen pixels — scales with energy
    const growT  = Math.max(0, (se - 0.03) / 0.97)
    const flameH = 30  + growT * 210   // max ~240 px tall
    const flameW = 8   + growT * 55    // max ~63 px wide

    // Fingertip in THREE ortho space
    const bx = cx - this.W / 2
    const by = -(cy - this.H / 2)

    // ── Emit new particles ─────────────────────────────────────────────
    const emitRate = Math.max(2, Math.floor(se * 28))
    let emitted = 0

    for (let i = 0; i < N && emitted < emitRate; i++) {
      if (this.age[i] < this.life[i]) continue

      // Spawn in small oval at base (slightly offset upward so they don't hug finger)
      const sx = (Math.random() - 0.5) * flameW * 0.45
      const sy = Math.random() * flameH * 0.06

      this.px[i] = bx + sx
      this.py[i] = by + sy          // positive y = upward in THREE
      this.pz[i] = (Math.random() - 0.5) * 6

      // Velocity: mostly upward, slight horizontal spread
      const spd  = (0.6 + Math.random() * 1.8) * (flameH / 100)
      this.vx[i] = sx * 0.08 + (Math.random() - 0.5) * 0.5  // diverge from center
      this.vy[i] = spd

      this.age[i]  = 0
      this.life[i] = 22 + Math.random() * 38    // 22-60 frames ≈ 0.37-1.0s @ 60fps
      this.sz[i]   = (2.5 + Math.random() * 5.0) * Math.min(window.devicePixelRatio, 2)
      emitted++
    }

    // ── Tick all alive particles ───────────────────────────────────────
    for (let i = 0; i < N; i++) {
      if (this.age[i] >= this.life[i]) {
        // Dead → hide by zeroing alpha and moving to back
        this.al[i]  = 0
        this.sz[i]  = 0
        this.pos3[i*3] = this.pos3[i*3+1] = this.pos3[i*3+2] = -9999
        continue
      }

      this.age[i]++
      const an = this.age[i] / this.life[i]   // 0→1
      this.ageN[i] = an

      // Turbulence grows as particle rises (heat convection spreading)
      const turb = (0.025 + an * 0.10)
      this.vx[i] += Math.sin(time * 3.8 + this.phase[i]         ) * turb
      this.vx[i] += Math.sin(time * 5.2 + this.phase[i] * 1.618 ) * turb * 0.4
      // Slight upward acceleration (hot air rises faster)
      this.vy[i] += 0.012
      // Horizontal damping keeps it from flying sideways too much
      this.vx[i] *= 0.94

      this.px[i] += this.vx[i]
      this.py[i] += this.vy[i]
      this.pz[i] *= 0.98

      // Alpha: full brightness first 15%, then quadratic fade
      this.al[i] = an < 0.15
        ? 0.90 + an / 0.15 * 0.10          // ramp up briefly
        : Math.pow(1 - (an - 0.15) / 0.85, 1.6) * 0.95

      const ix = i * 3
      this.pos3[ix]   = this.px[i]
      this.pos3[ix+1] = this.py[i]
      this.pos3[ix+2] = this.pz[i]
    }

    // Palette colors
    this.mat.uniforms.uC1.value.set(...palette.coreColor)
    this.mat.uniforms.uC2.value.set(...palette.midColor)
    this.mat.uniforms.uC3.value.set(...palette.outerColor)

    ;(this.geo.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true
    ;(this.geo.getAttribute('aAge')     as THREE.BufferAttribute).needsUpdate = true
    ;(this.geo.getAttribute('aSize')    as THREE.BufferAttribute).needsUpdate = true
    ;(this.geo.getAttribute('aAlpha')   as THREE.BufferAttribute).needsUpdate = true
  }

  resize(W: number, H: number) { this.W = W; this.H = H }

  dispose() {
    this.geo.dispose()
    this.mat.dispose()
  }
}
