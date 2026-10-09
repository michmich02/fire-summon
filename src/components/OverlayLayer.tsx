export default function OverlayLayer() {
  return (
    <div
      id="dark-overlay"
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.50)',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  )
}
