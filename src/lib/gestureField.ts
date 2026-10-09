// Gesture interpretation — converts MediaPipe landmarks into force field descriptors
import type { HandData } from '../store/useAppStore'

export interface HandGesture {
  palmCenter:  { x: number; y: number }  // screen pixels
  openness:    number                     // 0=fist, 1=open palm
  velocity:    { x: number; y: number }  // px/frame, smoothed
  isOpen:      boolean
  isFist:      boolean
  isSweeping:  boolean
  handedness:  'Left' | 'Right'
}

export interface FieldState {
  hands:            HandGesture[]
  compression:      number   // 0-1 (1 = hands fully together)
  compressionMidX:  number   // midpoint between hands (screen px)
  compressionMidY:  number
  compressionAngle: number   // angle of the band
}

const PREV_PALM: Record<string, { x: number; y: number }> = {}
const SMOOTH_VEL: Record<string, { x: number; y: number }> = {}

export function interpretHands(handsData: HandData[]): FieldState {
  const gestures: HandGesture[] = []

  for (const h of handsData) {
    if (!h.landmarks || h.landmarks.length < 21) continue

    const lm = h.landmarks
    const key = h.handedness

    // Palm center = average of wrist (0) + mcp knuckles (5,9,13,17)
    const palmX = (lm[0].x + lm[5].x + lm[9].x + lm[13].x + lm[17].x) / 5
    const palmY = (lm[0].y + lm[5].y + lm[9].y + lm[13].y + lm[17].y) / 5

    // Openness: count extended fingers
    // Finger extended = tip farther from wrist than pip
    const wrist = lm[0]
    const fingerTips  = [4, 8, 12, 16, 20]
    const fingerPips  = [3, 6, 10, 14, 18]
    let extended = 0
    for (let f = 0; f < 5; f++) {
      const tip = lm[fingerTips[f]]
      const pip = lm[fingerPips[f]]
      const tipD = Math.hypot(tip.x - wrist.x, tip.y - wrist.y)
      const pipD = Math.hypot(pip.x - wrist.x, pip.y - wrist.y)
      if (tipD > pipD * 1.1) extended++
    }
    const openness = extended / 5

    // Velocity: smoothed delta from previous frame
    const prev = PREV_PALM[key] ?? { x: palmX, y: palmY }
    const rawVx = palmX - prev.x
    const rawVy = palmY - prev.y
    PREV_PALM[key] = { x: palmX, y: palmY }

    const sv = SMOOTH_VEL[key] ?? { x: 0, y: 0 }
    sv.x = sv.x * 0.6 + rawVx * 0.4
    sv.y = sv.y * 0.6 + rawVy * 0.4
    SMOOTH_VEL[key] = sv

    const speed = Math.hypot(sv.x, sv.y)

    gestures.push({
      palmCenter: { x: palmX, y: palmY },
      openness,
      velocity:   { x: sv.x, y: sv.y },
      isOpen:     openness > 0.55,
      isFist:     openness < 0.30,
      isSweeping: speed > 3.5,
      handedness: h.handedness,
    })
  }

  // Two-hand compression
  let compression = 0, midX = 0, midY = 0, angle = 0
  const COMP_THRESHOLD = 360  // px

  if (gestures.length >= 2) {
    const a = gestures[0].palmCenter
    const b = gestures[1].palmCenter
    const dist = Math.hypot(a.x - b.x, a.y - b.y)
    compression = Math.max(0, 1 - dist / COMP_THRESHOLD)
    midX  = (a.x + b.x) / 2
    midY  = (a.y + b.y) / 2
    angle = Math.atan2(b.y - a.y, b.x - a.x)
  }

  return { hands: gestures, compression, compressionMidX: midX, compressionMidY: midY, compressionAngle: angle }
}
