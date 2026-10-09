export interface FlameSlot {
  x: number; y: number; z: number
  layer: 0 | 1 | 2
  targetSize: number
  targetAlpha: number
}

export type FlameStage = 1 | 2 | 3 | 4 | 5

const S3 = 0.20  // core appears
const S4 = 0.42  // stretches into tiny flame
const S5 = 0.65  // growing flame
const GA = 2.39996  // golden angle
const BSZ = 4.2

function lerp(a: number, b: number, t: number) { return a + (b - a) * Math.max(0, Math.min(1, t)) }
function ss(a: number, b: number, x: number) { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t) }

export class FlameSystem {
  energy       = 0
  smoothEnergy = 0
  stage: FlameStage = 1

  static MAX_FLAME = 300

  update(orbitCount: number) {
    if (orbitCount >= 5) {
      const rate = 0.0020 + Math.min(35, orbitCount - 5) * 0.00018
      this.energy = Math.min(1, this.energy + rate)
    } else {
      this.energy = Math.max(0, this.energy - 0.0030)
    }
    this.smoothEnergy += (this.energy - this.smoothEnergy) * 0.035

    if      (this.energy < 0.05) this.stage = 1
    else if (this.energy < S3)   this.stage = 2
    else if (this.energy < S4)   this.stage = 3
    else if (this.energy < S5)   this.stage = 4
    else                         this.stage = 5
  }

  get activeFlameCount(): number {
    if (this.energy < S3) return 0
    const t = (this.energy - S3) / (1 - S3)
    return Math.floor(Math.pow(t, 1.3) * FlameSystem.MAX_FLAME)
  }

  get progress() { return this.energy }

  getSlots(cx: number, cy: number, count: number, time: number): FlameSlot[] {
    if (count === 0) return []
    const e = this.smoothEnergy
    const slots: FlameSlot[] = []

    for (let i = 0; i < count; i++) {
      if (e < S4) {
        slots.push(this._sphere(cx, cy, i, count, e, time))
      } else if (e < S5) {
        const mt = ss(S4, S5, e)
        const sp = this._sphere(cx, cy, i, count, e, time)
        const fl = this._tinyFlame(cx, cy, i, count, mt, time)
        slots.push({
          x: lerp(sp.x, fl.x, mt), y: lerp(sp.y, fl.y, mt), z: 0,
          layer: fl.layer,
          targetSize:  lerp(sp.targetSize,  fl.targetSize,  mt),
          targetAlpha: lerp(sp.targetAlpha, fl.targetAlpha, mt),
        })
      } else {
        slots.push(this._growingFlame(cx, cy, i, count, e, time))
      }
    }
    return slots
  }

  private _sphere(cx: number, cy: number, i: number, count: number, e: number, time: number): FlameSlot {
    const ratio = i / count
    const r = (14 + ss(S3, S4, e) * 18) * Math.pow(ratio, 0.5)
    const a = i * GA + time * 0.25
    const pulse = 1 + Math.sin(time * 3.5 + i * 0.5) * 0.10
    const layer = ratio < 0.25 ? 0 : ratio < 0.65 ? 1 : 2
    return {
      x: cx + Math.cos(a) * r * pulse,
      y: cy + Math.sin(a) * r * 0.6 * pulse,
      z: 0, layer,
      targetSize:  BSZ * (layer === 0 ? 0.65 : layer === 1 ? 1.0 : 1.5),
      targetAlpha: layer === 0 ? 0.95 : layer === 1 ? 0.78 : 0.50,
    }
  }

  private _tinyFlame(cx: number, cy: number, i: number, count: number, mt: number, time: number): FlameSlot {
    const ft = i / count
    const h = lerp(0, 60, mt)
    const w = lerp(0, 20, mt)
    const profile = Math.sin(Math.PI * ft) * (1 - ft * 0.3)
    const a = i * GA
    const turbX = Math.sin(time * 3.0 + i * 0.7) * 4 * ft * mt
    const turbY = Math.cos(time * 2.5 + i * 0.4) * 3 * ft * mt
    const layer: 0|1|2 = ft < 0.25 ? 0 : ft < 0.65 ? 1 : 2
    return {
      x: cx + Math.cos(a) * profile * w + turbX,
      y: cy - ft * h + turbY,
      z: 0, layer,
      targetSize:  BSZ * (layer === 0 ? 0.7 : layer === 1 ? 1.1 : 1.7),
      targetAlpha: layer === 0 ? 0.95 : layer === 1 ? 0.80 : 0.55,
    }
  }

  private _growingFlame(cx: number, cy: number, i: number, count: number, e: number, time: number): FlameSlot {
    const growT = ss(S5, 1.0, e)
    const h  = lerp(60, 240, growT)
    const w  = lerp(20, 85, growT)
    const ft = i / count
    const ring = i % 3 as 0|1|2
    const rr = [0.22, 0.60, 1.0][ring]
    const angSpeed = [0.9, -0.45, 0.22][ring]
    const a = i * GA + time * angSpeed
    const profile = Math.sin(Math.PI * ft) * (1 - ft * 0.25)
    const flickerAmp = lerp(3, 10, growT)
    const tx = Math.sin(time * 2.2 + i * 0.6) * flickerAmp * ft
    const ty = Math.cos(time * 1.8 + i * 0.4) * flickerAmp * 0.6 * ft
    const riseBoost = Math.abs(Math.sin(time * 2.8 + i * 0.3)) * h * 0.08 * ft
    return {
      x: cx + Math.cos(a) * profile * w * rr + tx,
      y: cy - ft * h - riseBoost + ty,
      z: Math.sin(a) * 10,
      layer: ring,
      targetSize:  BSZ * (ring === 0 ? 0.6 : ring === 1 ? 1.1 : 2.0) * (1 + growT * 0.4),
      targetAlpha: ring === 0 ? 0.95 : ring === 1 ? 0.80 : lerp(0.45, 0.65, growT),
    }
  }
}
