import type { ColorPaletteKey } from '../store/useAppStore'
import { PALETTE_ORDER } from './colorPalettes'

type PinchState = 'idle' | 'pinched1' | 'waiting' | 'cooldown'

export class GestureDetector {
  private state: PinchState = 'idle'
  private pinch1Time = 0
  private readonly PINCH_THRESHOLD = 0.06     // normalized distance
  private readonly DOUBLE_PINCH_WINDOW = 700   // ms
  private readonly COOLDOWN_MS = 800
  private lastTriggerTime = 0
  private currentColorIndex = 0

  private onColorChange: (key: ColorPaletteKey) => void
  private onFlash: () => void

  constructor(
    onColorChange: (key: ColorPaletteKey) => void,
    onFlash: () => void
  ) {
    this.onColorChange = onColorChange
    this.onFlash = onFlash
  }

  /**
   * Feed normalized hand landmark data for the RIGHT hand.
   * thumbTip = landmark 4, indexTip = landmark 8
   */
  update(thumbTip: { x: number; y: number } | null, indexTip: { x: number; y: number } | null) {
    if (!thumbTip || !indexTip) {
      this.state = 'idle'
      return
    }

    const dx = thumbTip.x - indexTip.x
    const dy = thumbTip.y - indexTip.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    const isPinching = dist < this.PINCH_THRESHOLD
    const now = performance.now()

    if (now - this.lastTriggerTime < this.COOLDOWN_MS) return

    switch (this.state) {
      case 'idle':
        if (isPinching) {
          this.state = 'pinched1'
          this.pinch1Time = now
        }
        break

      case 'pinched1':
        if (!isPinching) {
          this.state = 'waiting'
        } else if (now - this.pinch1Time > 600) {
          // held too long — reset (treat as hold, not tap)
          this.state = 'idle'
        }
        break

      case 'waiting':
        if (isPinching) {
          const elapsed = now - this.pinch1Time
          if (elapsed < this.DOUBLE_PINCH_WINDOW) {
            // Double pinch detected!
            this.triggerColorChange()
            this.state = 'cooldown'
            this.lastTriggerTime = now
          } else {
            // Too slow, restart
            this.state = 'pinched1'
            this.pinch1Time = now
          }
        }
        break

      case 'cooldown':
        if (!isPinching) {
          this.state = 'idle'
        }
        break
    }
  }

  private triggerColorChange() {
    this.currentColorIndex = (this.currentColorIndex + 1) % PALETTE_ORDER.length
    const nextColor = PALETTE_ORDER[this.currentColorIndex]
    this.onColorChange(nextColor)
    this.onFlash()
  }

  reset() {
    this.state = 'idle'
  }
}
