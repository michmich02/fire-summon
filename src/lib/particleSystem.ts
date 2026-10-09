import * as THREE from 'three'
import { vertexShader, fragmentShader } from '../shaders/particleShaders'
import type { FlameSlot } from './flameSystem'
import type { ColorPalette } from './colorPalettes'

const COUNT          = 2000
const NOISE_STR      = 0.005   // float noise per frame (slow dust: ~0.25 px/frame steady-state)
const FLOAT_DAMP     = 0.980   // float damping
const INIT_SPEED     = 0.04
const ATTRACT_R      = 270     // attraction radius (px)
const ATTRACT_POW    = 0.14    // quadratic force multiplier
const ATTRACT_DAMP   = 0.86    // heavy damp while attracting
const ORBIT_R        = 32      // px — orbit ring radius
const ORBIT_PULL     = 0.09    // how fast a particle reaches orbit position
const ORBIT_SPEED    = 0.0016  // angular velocity
const BASE_SZ        = 4.2

// States: 0=floating  1=pulling  2=orbiting  3=in-flame
export type PState = 0 | 1 | 2 | 3

export class ParticleSystem {
  private geo!: THREE.BufferGeometry
  private mat!: THREE.ShaderMaterial
  public  pts!: THREE.Points

  private pos!: Float32Array
  private vel!: Float32Array
  private ph!:  Float32Array   // noise phase
  private ang!: Float32Array   // orbit angle
  private sz!:  Float32Array
  private al!:  Float32Array
  private ly!:  Float32Array
  private st!:  PState[]
  private ftgt!: Array<FlameSlot | null>
  private flt!:  Float32Array  // flame lerp T

  private W: number
  private H: number

  constructor(W: number, H: number, pal: ColorPalette) {
    this.W = W; this.H = H
    this._init(pal)
  }

  private _init(pal: ColorPalette) {
    this.pos  = new Float32Array(COUNT * 3)
    this.vel  = new Float32Array(COUNT * 3)
    this.ph   = new Float32Array(COUNT)
    this.ang  = new Float32Array(COUNT)
    this.sz   = new Float32Array(COUNT)
    this.al   = new Float32Array(COUNT)
    this.ly   = new Float32Array(COUNT)
    this.flt  = new Float32Array(COUNT)
    this.st   = new Array(COUNT).fill(0)
    this.ftgt = new Array(COUNT).fill(null)

    for (let i = 0; i < COUNT; i++) {
      this.pos[i*3]   = (Math.random()-0.5) * this.W * 0.9
      this.pos[i*3+1] = (Math.random()-0.5) * this.H * 0.65 + this.H * 0.05
      this.pos[i*3+2] = (Math.random()-0.5) * 60
      this.vel[i*3]   = (Math.random()-0.5) * INIT_SPEED
      this.vel[i*3+1] = (Math.random()-0.5) * INIT_SPEED
      this.ph[i]  = Math.random() * Math.PI * 2
      this.ang[i] = Math.random() * Math.PI * 2
      this.sz[i]  = BASE_SZ * (0.45 + Math.random() * 1.1)
      this.al[i]  = 0.12 + Math.random() * 0.55
      this.ly[i]  = Math.floor(Math.random() * 3)
    }

    this.geo = new THREE.BufferGeometry()
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3))
    this.geo.setAttribute('aSize',    new THREE.BufferAttribute(this.sz,  1))
    this.geo.setAttribute('aAlpha',   new THREE.BufferAttribute(this.al,  1))
    this.geo.setAttribute('aPhase',   new THREE.BufferAttribute(this.ph,  1))
    this.geo.setAttribute('aLayer',   new THREE.BufferAttribute(this.ly,  1))

    this.mat = new THREE.ShaderMaterial({
      vertexShader, fragmentShader,
      uniforms: {
        uTime:       { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uInnerColor: { value: new THREE.Vector3(...pal.innerColor) },
        uOuterColor: { value: new THREE.Vector3(...pal.outerColor) },
        uCoreColor:  { value: new THREE.Vector3(...pal.coreColor) },
      },
      transparent: true,
      blending:    THREE.AdditiveBlending,
      depthWrite:  false,
      depthTest:   false,
    })
    this.pts = new THREE.Points(this.geo, this.mat)
  }

  update(
    time: number,
    finger: { x: number; y: number } | null,
    flameSlots: FlameSlot[],           // target positions for flame particles
    flameParticleIndices: number[],    // which particles are in the flame
    pal: ColorPalette,
    colorT: number,
    prevPal: ColorPalette
  ): { orbitCount: number } {
    this.mat.uniforms.uTime.value = time
    this._setColor(pal, colorT, prevPal)

    // finger in THREE ortho space
    const fx = finger ? finger.x - this.W/2 : null
    const fy = finger ? -(finger.y - this.H/2) : null
    const hasF = fx !== null && fy !== null

    // Build a set of flame particle indices for O(1) lookup
    const flameSet = new Set(flameParticleIndices)

    let orbitCount = 0

    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3
      let px = this.pos[ix], py = this.pos[ix+1], pz = this.pos[ix+2]
      let vx = this.vel[ix], vy = this.vel[ix+1]
      const s = this.st[i]

      // ── FLAME STATE ─────────────────────────────────────────────────
      if (s === 3) {
        const tgt = this.ftgt[i]
        if (tgt) {
          const tx = tgt.x - this.W/2
          const ty = -(tgt.y - this.H/2)
          const spd = 0.025 + this.flt[i] * 0.055
          px += (tx - px) * spd
          py += (ty - py) * spd
          pz += (tgt.z - pz) * 0.04
          this.flt[i] = Math.min(1, this.flt[i] + 0.015)
          this.ly[i]  = tgt.layer
          this.al[i]  = Math.min(tgt.targetAlpha, this.al[i] + 0.007)
          this.sz[i]  = this.sz[i] + (tgt.targetSize - this.sz[i]) * 0.04
        }

      // ── ORBIT STATE ─────────────────────────────────────────────────
      } else if (s === 2) {
        if (!hasF) {
          this.st[i] = 0
          vx = (Math.random()-0.5) * INIT_SPEED
          vy = (Math.random()-0.5) * INIT_SPEED
        } else {
          this.ang[i] += ORBIT_SPEED * (1 + (i % 7) * 0.08)
          const or = ORBIT_R + Math.sin(this.ph[i] + time) * 9
          const tx = fx! + Math.cos(this.ang[i]) * or
          const ty = fy! + Math.sin(this.ang[i]) * or * 0.5
          px += (tx - px) * ORBIT_PULL
          py += (ty - py) * ORBIT_PULL
          pz += (0 - pz) * 0.05
          vx *= 0.5; vy *= 0.5
          this.al[i] = Math.min(0.88, this.al[i] + 0.010)
          this.sz[i] = Math.min(BASE_SZ * 1.4, this.sz[i] + 0.018)
          orbitCount++
        }

      // ── FLOAT / PULL STATES ─────────────────────────────────────────
      } else {
        // Slow organic drift
        const ph = this.ph[i]
        vx += Math.sin(time * 0.32 + ph * 3.7) * NOISE_STR
        vy += Math.cos(time * 0.27 + ph * 2.9) * NOISE_STR

        if (hasF) {
          const dx = fx! - px, dy = fy! - py
          const d  = Math.sqrt(dx*dx + dy*dy)

          if (d < ATTRACT_R) {
            const t  = 1 - d / ATTRACT_R
            const f  = t * t * ATTRACT_POW    // quadratic falloff
            const nx = dx / (d + 0.001), ny = dy / (d + 0.001)
            vx += nx * f * d * 0.007
            vy += ny * f * d * 0.007
            vx *= ATTRACT_DAMP; vy *= ATTRACT_DAMP
            pz += (0 - pz) * 0.04
            this.st[i] = 1
            if (d < ORBIT_R * 2.8) {
              this.st[i]  = 2
              this.ang[i] = Math.atan2(py - fy!, px - fx!)
            }
          } else {
            if (s === 1 && d > ATTRACT_R * 1.8) this.st[i] = 0
            vx *= FLOAT_DAMP; vy *= FLOAT_DAMP
          }
        } else {
          this.st[i] = 0
          vx *= FLOAT_DAMP; vy *= FLOAT_DAMP
        }

        pz *= 0.92
        if (Math.abs(px) > this.W  * 0.47) vx -= px * 0.004
        if (Math.abs(py) > this.H  * 0.47) vy -= py * 0.004
        px += vx; py += vy

        this.vel[ix]   = vx
        this.vel[ix+1] = vy
      }

      this.pos[ix]   = px
      this.pos[ix+1] = py
      this.pos[ix+2] = pz
    }

    // Apply flame slot assignments
    for (let j = 0; j < flameParticleIndices.length; j++) {
      const i = flameParticleIndices[j]
      const prevState = this.st[i]
      this.st[i]   = 3
      this.ftgt[i] = flameSlots[j] ?? null
      if (prevState !== 3) this.flt[i] = 0  // reset lerp on new entry
    }

    // Release particles no longer in flame
    for (let i = 0; i < COUNT; i++) {
      if (this.st[i] === 3 && !flameSet.has(i)) {
        this.st[i]   = hasF ? 2 : 0
        this.ftgt[i] = null
        this.flt[i]  = 0
        this.al[i]   = Math.max(0.12, this.al[i] - 0.004)
        this.sz[i]   = Math.max(BASE_SZ * 0.45, this.sz[i] - 0.03)
        this.ly[i]   = Math.floor(Math.random() * 3)
      }
    }

    ;(this.geo.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true
    ;(this.geo.getAttribute('aAlpha')   as THREE.BufferAttribute).needsUpdate = true
    ;(this.geo.getAttribute('aSize')    as THREE.BufferAttribute).needsUpdate = true
    ;(this.geo.getAttribute('aLayer')   as THREE.BufferAttribute).needsUpdate = true

    return { orbitCount }
  }

  /** Pick `n` orbit-state particles to promote into the flame */
  pickFlameParticles(n: number): number[] {
    const result: number[] = []
    // First reuse already-in-flame particles
    for (let i = 0; i < COUNT && result.length < n; i++) {
      if (this.st[i] === 3) result.push(i)
    }
    // Then pull from orbiting
    for (let i = 0; i < COUNT && result.length < n; i++) {
      if (this.st[i] === 2) result.push(i)
    }
    return result
  }

  private _setColor(pal: ColorPalette, t: number, prev: ColorPalette) {
    this.mat.uniforms.uInnerColor.value.set(...lv3(prev.innerColor, pal.innerColor, t))
    this.mat.uniforms.uOuterColor.value.set(...lv3(prev.outerColor, pal.outerColor, t))
    this.mat.uniforms.uCoreColor.value.set( ...lv3(prev.coreColor,  pal.coreColor,  t))
  }

  resize(W: number, H: number) { this.W = W; this.H = H }
  dispose() { this.geo.dispose(); this.mat.dispose() }
}

function lv3(a: [number,number,number], b: [number,number,number], t: number): [number,number,number] {
  const c = Math.max(0, Math.min(1, t))
  return [a[0]+(b[0]-a[0])*c, a[1]+(b[1]-a[1])*c, a[2]+(b[2]-a[2])*c]
}
