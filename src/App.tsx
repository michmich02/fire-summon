import { useRef, useState, useCallback } from 'react'
import WebcamLayer from './components/WebcamLayer'
import OverlayLayer from './components/OverlayLayer'
import HandTracker from './components/HandTracker'
import SlimeCanvas from './components/SlimeCanvas'
import { useAppStore } from './store/useAppStore'
import type { HandData } from './store/useAppStore'

export default function App() {
  const videoRef  = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [handsData, setHandsData]   = useState<HandData[]>([])
  const [fadedOut, setFadedOut]     = useState(false)
  const isLoaded = useAppStore(s => s.isLoaded)

  const onVideoReady  = useCallback(() => { setVideoReady(true); setTimeout(() => setFadedOut(true), 900) }, [])
  const onHandsUpdate = useCallback((h: HandData[]) => setHandsData(h), [])

  return (
    <div className="app-container" id="app-container">
      {!fadedOut && (
        <div className={`loading-overlay${isLoaded ? ' fade-out' : ''}`} id="loading-overlay">
          <div className="loading-title" style={{ background:'linear-gradient(135deg,#c084fc,#f472b6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
            Living Slime
          </div>
          <div className="loading-spinner" style={{ borderTopColor:'#c084fc' }} />
          <div className="loading-subtitle">
            {videoReady ? 'Waking up the slime...' : 'Requesting camera access...'}
          </div>
        </div>
      )}

      <WebcamLayer videoRef={videoRef} onReady={onVideoReady} />
      <OverlayLayer />
      <HandTracker videoRef={videoRef} isVideoReady={videoReady} onHandsUpdate={onHandsUpdate} />
      <SlimeCanvas handsData={handsData} />

      {fadedOut && (
        <div className="slime-hint" id="slime-hint">
          Poke · Pinch · Squeeze · Swirl
        </div>
      )}
    </div>
  )
}
