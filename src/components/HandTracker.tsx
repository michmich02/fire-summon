import { useEffect, useRef } from 'react'
import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision'
import type { HandData } from '../store/useAppStore'

interface HandTrackerProps {
  videoRef: React.RefObject<HTMLVideoElement | null>
  isVideoReady: boolean
  onHandsUpdate: (hands: HandData[]) => void
}

export default function HandTracker({ videoRef, isVideoReady, onHandsUpdate }: HandTrackerProps) {
  const landmarkerRef = useRef<HandLandmarker | null>(null)
  const rafRef = useRef<number>(0)
  const lastVideoTime = useRef(-1)

  useEffect(() => {
    if (!isVideoReady) return

    let running = true

    async function initLandmarker() {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
        )
        landmarkerRef.current = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
            delegate: 'GPU',
          },
          runningMode: 'VIDEO',
          numHands: 2,
          minHandDetectionConfidence: 0.5,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5,
        })

        if (running) detect()
      } catch (err) {
        console.warn('HandLandmarker init failed, retrying with CPU:', err)
        // Fallback to CPU
        try {
          const vision = await FilesetResolver.forVisionTasks(
            'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
          )
          landmarkerRef.current = await HandLandmarker.createFromOptions(vision, {
            baseOptions: {
              modelAssetPath:
                'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
              delegate: 'CPU',
            },
            runningMode: 'VIDEO',
            numHands: 2,
          })
          if (running) detect()
        } catch (e2) {
          console.error('HandLandmarker completely failed:', e2)
        }
      }
    }

    function detect() {
      if (!running) return

      const video = videoRef.current
      const landmarker = landmarkerRef.current

      if (!video || !landmarker || video.readyState < 2) {
        rafRef.current = requestAnimationFrame(detect)
        return
      }

      const currentTime = video.currentTime
      if (currentTime !== lastVideoTime.current) {
        lastVideoTime.current = currentTime

        try {
          const results = landmarker.detectForVideo(video, performance.now())

          const hands: HandData[] = []

          for (let h = 0; h < results.landmarks.length; h++) {
            const landmarks = results.landmarks[h]
            const handedness = results.handedness[h]?.[0]?.categoryName as 'Left' | 'Right'

            // MediaPipe returns mirrored coords for front camera
            // We mirror x: finalX = 1 - landmark.x to match our mirrored video feed
            const mapX = (lm: { x: number }) => (1 - lm.x) * window.innerWidth
            const mapY = (lm: { y: number }) => lm.y * window.innerHeight

            hands.push({
              indexTip: { x: mapX(landmarks[8]), y: mapY(landmarks[8]) },
              thumbTip: { x: mapX(landmarks[4]), y: mapY(landmarks[4]) },
              palmBase: { x: mapX(landmarks[0]), y: mapY(landmarks[0]) },
              handedness,
              landmarks: landmarks.map((lm) => ({
                x: mapX(lm),
                y: mapY(lm),
                z: lm.z * window.innerWidth,
              })),
            })
          }

          onHandsUpdate(hands)
        } catch (e) {
          // Silently skip frame on error
        }
      }

      rafRef.current = requestAnimationFrame(detect)
    }

    initLandmarker()

    return () => {
      running = false
      cancelAnimationFrame(rafRef.current)
      landmarkerRef.current?.close()
    }
  }, [isVideoReady, videoRef, onHandsUpdate])

  return null // No DOM output — pure logic component
}
