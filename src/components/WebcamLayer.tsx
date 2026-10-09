import { useEffect, useRef, type RefObject } from 'react'

interface WebcamLayerProps {
  videoRef: RefObject<HTMLVideoElement>
  onReady: () => void
}

export default function WebcamLayer({ videoRef, onReady }: WebcamLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    let stream: MediaStream | null = null

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        })

        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play()
            onReady()
            drawLoop()
          }
        }
      } catch (err) {
        console.error('Webcam access denied:', err)
        onReady() // Still allow app to run without webcam
      }
    }

    function drawLoop() {
      const canvas = canvasRef.current
      const video = videoRef.current
      if (!canvas || !video || video.readyState < 2) {
        rafRef.current = requestAnimationFrame(drawLoop)
        return
      }

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // Match canvas to window size
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }

      const vw = video.videoWidth
      const vh = video.videoHeight
      if (vw === 0 || vh === 0) {
        rafRef.current = requestAnimationFrame(drawLoop)
        return
      }

      // Cover-fit the video into canvas (mirrored via CSS transform)
      const scaleX = canvas.width / vw
      const scaleY = canvas.height / vh
      const scale = Math.max(scaleX, scaleY)
      const dw = vw * scale
      const dh = vh * scale
      const dx = (canvas.width - dw) / 2
      const dy = (canvas.height - dh) / 2

      ctx.drawImage(video, dx, dy, dw, dh)

      rafRef.current = requestAnimationFrame(drawLoop)
    }

    startCamera()

    return () => {
      cancelAnimationFrame(rafRef.current)
      if (stream) {
        stream.getTracks().forEach((t) => t.stop())
      }
    }
  }, [videoRef, onReady])

  return (
    <>
      {/* Hidden video element — used as source for canvas + MediaPipe */}
      <video
        ref={videoRef}
        style={{ display: 'none' }}
        playsInline
        muted
      />
      {/* Visible mirrored canvas */}
      <canvas
        ref={canvasRef}
        className="webcam-canvas"
        id="webcam-canvas"
      />
    </>
  )
}
