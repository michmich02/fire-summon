import * as THREE from 'three'
import type { ColorPalette } from './colorPalettes'

const CW = 256, CH = 512  // canvas texture resolution

type C4 = [string,string,string,string]  // 4-stop gradient colors

export class FlameCanvas {
  private cvs: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  public  texture: THREE.CanvasTexture
  public  mesh: THREE.Mesh
  private mat: THREE.MeshBasicMaterial
  private smoothE = 0
  private W: number; private H: number

  constructor(W: number, H: number) {
    this.W = W; this.H = H
    this.cvs = document.createElement('canvas')
    this.cvs.width = CW; this.cvs.height = CH
    this.ctx = this.cvs.getContext('2d')!
    this.texture = new THREE.CanvasTexture(this.cvs)
    this.mat = new THREE.MeshBasicMaterial({
      map: this.texture, transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false, depthTest: false,
    })
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(1,1), this.mat)
    this.mesh.renderOrder = 5
    this.mesh.visible = false
  }

  update(cx: number, cy: number, energy: number, time: number, pal: ColorPalette) {
    this.smoothE += (energy - this.smoothE) * 0.05
    const se = this.smoothE
    this.mesh.visible = se > 0.04
    if (!this.mesh.visible) return

    const growT = Math.max(0, (se - 0.04) / 0.96)
    const fw = 18 + growT * 120   // flame width  px
    const fh = 25 + growT * 240   // flame height px

    // Position: base at fingertip, flame rises above
    this.mesh.position.set(cx - this.W/2, -(cy - this.H/2) + fh*0.5, 2)
    this.mesh.scale.set(fw, fh, 1)

    this._draw(time, se, pal)
    this.texture.needsUpdate = true
  }

  private _draw(time: number, energy: number, pal: ColorPalette) {
    const { ctx } = this
    ctx.clearRect(0, 0, CW, CH)
    if (energy < 0.04) return

    const growT = Math.max(0, (energy - 0.04) / 0.96)
    const cx = CW / 2
    const base = CH - 10               // flame base Y in canvas space
    const fH = 20 + growT * (CH - 40) // flame height in canvas px

    // Whole-flame sway (S-curve lean)
    const sway  = (Math.sin(time * 1.7) * 22 + Math.sin(time * 2.9 + 1.2) * 12) * growT
    const tipX  = cx + sway
    const tipY  = base - fH

    // CSS color helpers
    const c = (rgb: [number,number,number], a: number) =>
      `rgba(${Math.round(rgb[0]*255)},${Math.round(rgb[1]*255)},${Math.round(rgb[2]*255)},${a})`

    const CORE  = pal.coreColor
    const INNER = pal.innerColor
    const MID   = pal.midColor
    const OUTER = pal.outerColor

    // ── Outer ambient glow (very soft, barely visible) ───────────────
    const glow = ctx.createRadialGradient(cx, base - fH*0.25, 0, cx, base - fH*0.25, fH*0.55)
    glow.addColorStop(0, c(MID, 0.12))
    glow.addColorStop(1, c(MID, 0))
    ctx.fillStyle = glow; ctx.fillRect(0, 0, CW, CH)

    // ── Outer flame tongues (3 separate, each with own flicker) ──────
    const ow = fH * 0.30
    // Main outer tongue
    this._tongue(ctx, cx,         base, tipX,           tipY,           ow,      fH*0.20, time, 0.0,
      [c(OUTER,0.70), c(MID,0.55), c(OUTER,0.20), c(OUTER,0)], 0.80)
    // Left tongue — shorter, offset
    this._tongue(ctx, cx-fH*0.06, base, tipX-fH*0.09, tipY+fH*0.14, ow*0.60, fH*0.16, time, 1.4,
      [c(OUTER,0.55), c(MID,0.40), c(OUTER,0.12), c(OUTER,0)], 0.55)
    // Right tongue — shorter, offset
    this._tongue(ctx, cx+fH*0.05, base, tipX+fH*0.07, tipY+fH*0.12, ow*0.55, fH*0.14, time, 2.8,
      [c(OUTER,0.50), c(MID,0.35), c(OUTER,0.10), c(OUTER,0)], 0.50)

    // ── Mid flame tongues (2) ─────────────────────────────────────────
    const mw = fH * 0.20
    this._tongue(ctx, cx,         base, tipX*0.75+cx*0.25, tipY+fH*0.10, mw,      fH*0.15, time, 0.8,
      [c(INNER,0.90), c(MID,0.75), c(OUTER,0.30), c(OUTER,0)], 0.90)
    this._tongue(ctx, cx+fH*0.03, base, tipX+fH*0.06,      tipY+fH*0.18, mw*0.60, fH*0.12, time, 2.0,
      [c(INNER,0.75), c(MID,0.55), c(OUTER,0.15), c(OUTER,0)], 0.65)

    // ── Inner bright core tongue ──────────────────────────────────────
    const iw = fH * 0.11
    this._tongue(ctx, cx, base, tipX*0.5+cx*0.5, tipY+fH*0.25, iw, fH*0.09, time, 1.5,
      [c(CORE,1.0), c(INNER,0.90), c(MID,0.50), c(OUTER,0)], 1.0)

    // ── White-hot core glow at base ───────────────────────────────────
    const cr = Math.max(5, fH * 0.07)
    const cg = ctx.createRadialGradient(cx, base-cr*0.8, 0, cx, base-cr, cr*3.0)
    cg.addColorStop(0,   c(CORE,  1.0))
    cg.addColorStop(0.3, c(INNER, 0.95))
    cg.addColorStop(0.6, c(MID,   0.55))
    cg.addColorStop(1.0, c(OUTER, 0))
    ctx.fillStyle = cg
    ctx.beginPath()
    ctx.ellipse(cx, base-cr, cr*1.3, cr*2.2, 0, 0, Math.PI*2)
    ctx.fill()

    // ── Ignition point (tiny bright dot) ─────────────────────────────
    const ir = Math.max(2, fH*0.025)
    const ig = ctx.createRadialGradient(cx, base-ir, 0, cx, base, ir*2)
    ig.addColorStop(0, c(CORE, 1.0))
    ig.addColorStop(1, c(CORE, 0))
    ctx.fillStyle = ig
    ctx.beginPath(); ctx.arc(cx, base-ir, ir*2.5, 0, Math.PI*2); ctx.fill()
  }

  // Draw one flame tongue as a closed bezier-curve path with a linear gradient fill
  private _tongue(
    ctx: CanvasRenderingContext2D,
    bx: number, by: number,      // base center
    tipX: number, tipY: number,  // tip target
    hw: number,                  // base half-width
    ns: number,                  // noise/flicker scale
    time: number, phase: number, // animation
    colors: C4, alpha: number
  ) {
    const h = by - tipY
    // Independent left/right edge noise for organic shape
    const ln = Math.sin(time*2.2+phase)*ns + Math.sin(time*3.8+phase*1.7)*ns*0.4
    const rn = Math.sin(time*2.5+phase+1.1)*ns + Math.cos(time*4.1+phase*1.3)*ns*0.35
    const mn = Math.sin(time*1.9+phase+2.3)*ns*0.25

    ctx.save()
    ctx.globalAlpha = alpha
    ctx.beginPath()
    ctx.moveTo(bx-hw, by)
    // Left edge → tip
    ctx.bezierCurveTo(
      bx-hw*1.20+ln,    by-h*0.28,
      tipX-hw*0.30+mn,  tipY+h*0.22,
      tipX, tipY
    )
    // Right edge → base
    ctx.bezierCurveTo(
      tipX+hw*0.30+mn,  tipY+h*0.22,
      bx+hw*1.20+rn,    by-h*0.28,
      bx+hw, by
    )
    ctx.closePath()

    const grad = ctx.createLinearGradient(bx, by, tipX, tipY)
    grad.addColorStop(0.00, colors[0])
    grad.addColorStop(0.35, colors[1])
    grad.addColorStop(0.70, colors[2])
    grad.addColorStop(1.00, colors[3])
    ctx.fillStyle = grad
    ctx.fill()
    ctx.restore()
  }

  resize(W: number, H: number) { this.W=W; this.H=H }

  dispose() {
    this.mesh.geometry.dispose()
    this.mat.dispose()
    this.texture.dispose()
  }
}
