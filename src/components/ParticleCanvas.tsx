import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { FieldParticles } from '../lib/fieldParticles'
import { recognize } from '../lib/gestureRecognizer'
import { useAppStore } from '../store/useAppStore'
import type { HandData } from '../store/useAppStore'

interface Props { handsData: HandData[] }

export default function ParticleCanvas({ handsData }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef     = useRef<number>(0)
  const clockRef   = useRef(new THREE.Clock())
  const handsRef   = useRef<HandData[]>([])
  const activatedRef = useRef(false)   // tracks if activation has fired
  const setLoaded  = useAppStore(s => s.setIsLoaded)

  useEffect(() => { handsRef.current = handsData }, [handsData])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const W = window.innerWidth, H = window.innerHeight
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'high-performance' })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    const scene  = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-W/2, W/2, H/2, -H/2, -500, 500)
    camera.position.z = 100

    const fp = new FieldParticles(W, H)
    scene.add(fp.pts)
    setLoaded(true)

    function animate() {
      rafRef.current = requestAnimationFrame(animate)
      const time = clockRef.current.getElapsedTime()
      const gs   = recognize(handsRef.current)
      // Fire activation exactly once on first hand detection
      if (!activatedRef.current && gs.hands.length > 0) {
        activatedRef.current = true
        fp.triggerActivation()
      }
      fp.update(gs, time)
      renderer.render(scene, camera)
    }
    animate()

    function onResize() {
      const nW = window.innerWidth, nH = window.innerHeight
      renderer.setSize(nW, nH)
      camera.left=-nW/2; camera.right=nW/2; camera.top=nH/2; camera.bottom=-nH/2
      camera.updateProjectionMatrix()
      fp.resize(nW, nH)
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener('resize', onResize); fp.dispose(); renderer.dispose() }
  }, [setLoaded])

  return <canvas ref={canvasRef} id="particle-canvas" className="particle-canvas" style={{ zIndex: 3 }} />
}
