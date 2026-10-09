import { COLOR_PALETTES, PALETTE_ORDER } from '../../lib/colorPalettes'
import { useAppStore } from '../../store/useAppStore'

export default function ColorIndicator() {
  const activeColor = useAppStore((s) => s.activeColor)
  const flameState = useAppStore((s) => s.flameState)
  const collectionProgress = useAppStore((s) => s.collectionProgress)

  const palette = COLOR_PALETTES[activeColor]
  const progressPercent = Math.round(collectionProgress * 100)

  const stateLabel: Record<string, string> = {
    floating: 'Reach out...',
    attracting: 'Gathering...',
    forming: 'Forming...',
    burning: 'Burning',
  }

  const progressColor = `hsl(${
    activeColor === 'orange' ? 25 :
    activeColor === 'blue' ? 210 :
    activeColor === 'purple' ? 280 :
    activeColor === 'green' ? 140 : 50
  }, 90%, 60%)`

  return (
    <>
      {/* Top status bar */}
      <div className="status-hud" id="status-hud">
        <div className="status-text">{stateLabel[flameState]}</div>
        <div className="status-bar">
          <div
            className="status-bar-fill"
            style={{
              width: `${progressPercent}%`,
              background: `linear-gradient(90deg, ${progressColor}88, ${progressColor})`,
            }}
          />
        </div>
      </div>

      {/* Bottom color palette picker */}
      <div className="color-indicator" id="color-indicator">
        <div className="color-dots">
          {PALETTE_ORDER.map((key) => {
            const p = COLOR_PALETTES[key]
            return (
              <div
                key={key}
                className={`color-dot ${key === activeColor ? 'active' : ''}`}
                style={{ background: p.dotColor, color: p.dotColor }}
              />
            )
          })}
        </div>
        <div className="color-label">{palette.label} · Double Pinch to Switch</div>
      </div>
    </>
  )
}
