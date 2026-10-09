import * as THREE from 'three'
import { flameVert, flameFrag, sparkVert, sparkFrag } from '../shaders/flameShaders'
import type { ColorPalette } from './colorPalettes'

const SK = 180  // ember/spark count

export class FlameMesh {
  public mesh:   THREE.Mesh
  public sparks: THREE.Points

  private mat:  THREE.ShaderMaterial
  private sMat: THREE.ShaderMaterial
  private sGeo: THREE.BufferGeometry

  private sPos:  Float32Array
  private sVel:  Float32Array
  private sAge:  Float32Array
  private sLife: Float32Array
  private sSz:   Float32Array
  private sAl:   Float32Array

  // Smooth energy for gentle fade-in
  private smoothEnergy = 0

  private W: number
  private H: number

  constructor(W: number, H: number) {
    this.W = W; this.H = H

    // ── Flame shader plane ───────────────────────────────────────────────
    this.mat = new THREE.ShaderMaterial({
      vertexShader:   flameVert,
      fragmentShader: flameFrag,
      uniforms: {
        uTime:       { value: 0 },
        uEnergy:     { value: 0 },
        uColorCore:  { value: new THREE.Vector3(1, 1, 0.85) },
        uColorInner: { value: new THREE.Vector3(1, 0.82, 0.1) },
        uColorMid:   { value: new THREE.Vector3(1, 0.42, 0.02) },
        uColorOuter: { value: new THREE.Vector3(0.7, 0.08, 0) },
      },
      transparent: true,
      blending:    THREE.AdditiveBlending,
      depthWrite:  false,
      depthTest:   false,
      side:        THREE.DoubleSide,
    })

    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.mat)
    this.mesh.renderOrder = 2
    this.mesh.visible = false

    // ── Spark embers ────────────────────────────────────────────────────
    this.sPos  = new Float32Array(SK * 3)
    this.sVel  = new Float32Array(SK * 3)
    this.sAge  = new Float32Array(SK).fill(999)   // start "dead"
    this.sLife = new Float32Array(SK).fill(60)
    this.sSz   = new Float32Array(SK)
    this.sAl   = new Float32Array(SK)

    this.sGeo = new THREE.BufferGeometry()
    this.sGeo.setAttribute('position', new THREE.BufferAttribute(this.sPos, 3))
    this.sGeo.setAttribute('aSize',    new THREE.BufferAttribute(this.sSz, 1))
    this.sGeo.setAttribute('aAlpha',   new THREE.BufferAttribute(this.sAl, 1))

    this.sMat = new THREE.ShaderMaterial({
      vertexShader:   sparkVert,
      fragmentShader: sparkFrag,
      uniforms: { uColor: { value: new THREE.Vector3(1, 0.7, 0.2) } },
      transparent: true,
      blending:    THREE.AdditiveBlending,
      depthWrite:  false,
      depthTest:   false,
    })
    this.sparks = new THREE.Points(this.sGeo, this.sMat)
    this.sparks.renderOrder = 3
  }

  /**
   * cx, cy = fingertip in screen-pixel coords (flame base position)
   */
  update(cx: number, cy: number, energy: number, time: number, palette: ColorPalette) {
    // Smooth energy for gradual fade-in / fade-out
    this.smoothEnergy += (energy - this.smoothEnergy) * 0.040
    const se = this.smoothEnergy

    const visible = se > 0.05
    this.mesh.visible   = visible
    this.sparks.visible = visible

    if (!visible) return

    // ── Flame plane size grows continuously with energy ─────────────────
    // At energy=0.05: very tiny (ignition point)
    // At energy=1.00: full flame
    const growT  = Math.max(0, (se - 0.05) / 0.95)   // 0→1
    const flameW = 20  + growT * 190    // 20→210 px wide
    const flameH = 30  + growT * 340    // 30→370 px tall

    // THREE ortho: origin at screen center, y-up
    const threeX =  cx - this.W / 2
    // Base of flame is at fingertip; plane center is flameH/2 above base
    const threeY = -(cy - this.H / 2) + flameH * 0.5

    this.mesh.position.set(threeX, threeY, 1)
    this.mesh.scale.set(flameW, flameH, 1)

    // Update shader uniforms
    this.mat.uniforms.uTime.value       = time
    this.mat.uniforms.uEnergy.value     = Math.min(1, se * 1.1)
    this.mat.uniforms.uColorCore.value.set( ...palette.coreColor)
    this.mat.uniforms.uColorInner.value.set(...palette.innerColor)
    this.mat.uniforms.uColorMid.value.set(  ...palette.midColor)
    this.mat.uniforms.uColorOuter.value.set(...palette.outerColor)

    // Spark color = inner bright color (lively embers)
    this.sMat.uniforms.uColor.value.set(...palette.sparkColor)

    // ── Emit sparks ──────────────────────────────────────────────────────
    const emitRate = Math.floor(se * 3.5)
    let emitted = 0
    for (let i = 0; i < SK && emitted < emitRate; i++) {
      if (this.sAge[i] >= this.sLife[i]) {
        const spread = flameW * 0.28
        const ix = i * 3
        // Spawn near flame base (lower third of flame)
        this.sPos[ix]   = threeX + (Math.random() - 0.5) * spread
        this.sPos[ix+1] = threeY - flameH * 0.5 + Math.random() * flameH * 0.30
        this.sPos[ix+2] = (Math.random() - 0.5) * 8

        // Initial velocity: mostly upward, slight random horizontal
        this.sVel[ix]   = (Math.random() - 0.5) * 0.50
        this.sVel[ix+1] = 0.50 + Math.random() * 1.30   // upward
        this.sVel[ix+2] = 0

        this.sAge[i]  = 0
        this.sLife[i] = 35 + Math.random() * 55
        this.sSz[i]   = 1.2 + Math.random() * 2.8
        this.sAl[i]   = 0.75 + Math.random() * 0.25
        emitted++
      }
    }

    // ── Tick sparks ──────────────────────────────────────────────────────
    for (let i = 0; i < SK; i++) {
      if (this.sAge[i] >= this.sLife[i]) continue
      const ix = i * 3
      this.sAge[i]++
      const life = this.sAge[i] / this.sLife[i]

      // Upward drift + slight curl
      this.sPos[ix]   += this.sVel[ix]
      this.sPos[ix+1] += this.sVel[ix+1]
      this.sVel[ix]   *= 0.975   // horizontal drag
      this.sVel[ix+1] += 0.018   // gentle upward acceleration

      // Fade out quadratically
      this.sAl[i] = Math.pow(1 - life, 1.8) * 0.9
      // Slowly shrink
      this.sSz[i] = Math.max(0.3, this.sSz[i] * 0.994)
    }

    ;(this.sGeo.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true
    ;(this.sGeo.getAttribute('aAlpha')   as THREE.BufferAttribute).needsUpdate = true
    ;(this.sGeo.getAttribute('aSize')    as THREE.BufferAttribute).needsUpdate = true
  }

  resize(W: number, H: number) { this.W = W; this.H = H }

  dispose() {
    this.mesh.geometry.dispose()
    this.mat.dispose()
    this.sGeo.dispose()
    this.sMat.dispose()
  }
}
