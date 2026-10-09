import type { HandData } from '../store/useAppStore'

export interface HandGesture {
  px: number; py: number          // palm center (screen px, already mapped)
  itx: number; ity: number        // index tip (screen px)
  openness: number                // 0=fist … 1=open
  isOpen: boolean; isFist: boolean; isPointing: boolean
  velX: number; velY: number; velMag: number
  isSweeping: boolean
  rotDelta: number                // wrist rotation Δ rad/frame
  stillFrames: number
  isFreezing: boolean
  isHovering: boolean
  handedness: 'Left' | 'Right'
}

export interface GestureState {
  hands: HandGesture[]
  bothPresent: boolean
  dist: number; prevDist: number; distDelta: number
  midX: number; midY: number
  bandAngle: number
  compression: number
  stretchT: number
  isCompressing: boolean; isStretching: boolean
  shockwaveNow: boolean
  shockwaveMX: number; shockwaveMY: number
}

// Persistent per-hand state (across frames)
const HS: Record<string, {
  ppx: number; ppy: number
  vx: number;  vy: number
  pAng: number
  still: number
  pDist: number
}> = {}

const FREEZE_F  = 90   // ~1.5 s @ 60 fps
const SWEEP_V   = 6    // px/frame
const SHOCK_V   = 14   // px/frame
const COMP_THR  = 380  // px

export function recognize(hands: HandData[]): GestureState {
  const gestures: HandGesture[] = []

  for (const hand of hands) {
    const lm = hand.landmarks
    // landmarks are already in screen-pixel space (mapped by HandTracker)
    if (!lm || lm.length < 21) continue
    const key = hand.handedness

    // Palm center = average of wrist + 4 MCP knuckles (already px)
    const px = (lm[0].x + lm[5].x + lm[9].x + lm[13].x + lm[17].x) / 5
    const py = (lm[0].y + lm[5].y + lm[9].y + lm[13].y + lm[17].y) / 5

    // Index tip (already px)
    const itx = lm[8].x, ity = lm[8].y

    // Openness: extended finger count
    // Tip farther from wrist than PIP → extended
    const TIPS = [4,8,12,16,20], PIPS = [3,6,10,14,18]
    let ext = 0
    for (let f = 0; f < 5; f++) {
      const td = Math.hypot(lm[TIPS[f]].x-lm[0].x, lm[TIPS[f]].y-lm[0].y)
      const pd = Math.hypot(lm[PIPS[f]].x-lm[0].x, lm[PIPS[f]].y-lm[0].y)
      if (td > pd * 1.08) ext++
    }
    const openness = ext / 5

    // Pointing: only index extended
    const idxD = Math.hypot(lm[8].x-lm[0].x, lm[8].y-lm[0].y)
    const midD = Math.hypot(lm[12].x-lm[0].x, lm[12].y-lm[0].y)
    const idxP = Math.hypot(lm[6].x-lm[0].x, lm[6].y-lm[0].y)
    const midP = Math.hypot(lm[10].x-lm[0].x, lm[10].y-lm[0].y)
    const isPointing = idxD > idxP*1.1 && midD < midP*1.1

    // Smoothed velocity
    const s = HS[key] ?? { ppx:px, ppy:py, vx:0, vy:0, pAng:0, still:0, pDist:400 }
    s.vx = s.vx*0.55 + (px-s.ppx)*0.45
    s.vy = s.vy*0.55 + (py-s.ppy)*0.45
    s.ppx = px; s.ppy = py
    const velMag = Math.hypot(s.vx, s.vy)

    // Wrist rotation (wrist→middle-MCP angle, in px space)
    const ang = Math.atan2(lm[9].y-lm[0].y, lm[9].x-lm[0].x)
    let rd = ang - s.pAng
    if (rd >  Math.PI) rd -= Math.PI*2
    if (rd < -Math.PI) rd += Math.PI*2
    s.pAng = ang

    // Freeze counter
    if (velMag < 3 && openness > 0.5) s.still = Math.min(FREEZE_F+30, s.still+1)
    else                               s.still = Math.max(0, s.still-4)

    HS[key] = s

    gestures.push({
      px, py, itx, ity, openness,
      isOpen:     openness > 0.55,
      isFist:     openness < 0.28,
      isPointing,
      velX: s.vx, velY: s.vy, velMag,
      isSweeping: velMag > SWEEP_V,
      rotDelta:   rd,
      stillFrames: s.still,
      isFreezing:  s.still >= FREEZE_F,
      isHovering:  velMag < 4 && openness > 0.2 && openness < 0.75 && s.still < FREEZE_F,
      handedness: hand.handedness,
    })
  }

  // ── Two-hand combined state ──────────────────────────────────────────
  const bp = gestures.length >= 2
  let dist=400, prevDist=400, distDelta=0, midX=0, midY=0, bandAngle=0
  let compression=0, stretchT=0, isComp=false, isStr=false
  let shockNow=false, sMX=0, sMY=0

  if (bp) {
    const a=gestures[0], b=gestures[1]
    dist      = Math.hypot(a.px-b.px, a.py-b.py)
    midX      = (a.px+b.px)/2; midY=(a.py+b.py)/2
    bandAngle = Math.atan2(b.py-a.py, b.px-a.px)

    const ts = HS['_two'] ?? { ppx:0,ppy:0,vx:0,vy:0,pAng:0,still:0, pDist:dist }
    prevDist = ts.pDist; distDelta=dist-prevDist; ts.pDist=dist
    HS['_two']=ts

    compression = Math.max(0, 1-dist/COMP_THR)
    stretchT    = distDelta>0.5 ? Math.max(0,Math.min(1,(dist-COMP_THR*0.9)/(COMP_THR*1.0))) : 0
    isComp = distDelta < -1   && dist < COMP_THR
    isStr  = distDelta >  1   && dist < COMP_THR*1.8

    // Shockwave: both hands rushing toward each other
    const dx=b.px-a.px, dy=b.py-a.py, dm=Math.hypot(dx,dy)+0.01
    const aTow = ( a.velX*dx + a.velY*dy)/dm
    const bTow = (-b.velX*dx - b.velY*dy)/dm
    if (aTow>SHOCK_V && bTow>SHOCK_V) { shockNow=true; sMX=midX; sMY=midY }
  }

  return {
    hands:gestures, bothPresent:bp,
    dist, prevDist, distDelta, midX, midY, bandAngle,
    compression, stretchT, isCompressing:isComp, isStretching:isStr,
    shockwaveNow:shockNow, shockwaveMX:sMX, shockwaveMY:sMY,
  }
}
