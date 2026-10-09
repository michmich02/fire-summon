import { create } from 'zustand'

export type FlameState = 'floating' | 'attracting' | 'forming' | 'burning'

export type ColorPaletteKey = 'orange' | 'blue' | 'purple' | 'green' | 'gold'

export interface HandLandmark {
  x: number
  y: number
  z: number
}

export interface HandData {
  indexTip: { x: number; y: number } | null
  thumbTip: { x: number; y: number } | null
  palmBase: { x: number; y: number } | null
  handedness: 'Left' | 'Right'
  landmarks: HandLandmark[]
}

interface AppState {
  // Hand tracking
  handsData: HandData[]
  setHandsData: (data: HandData[]) => void

  // Flame state
  flameState: FlameState
  setFlameState: (state: FlameState) => void

  // Particle collection progress (0-1)
  collectionProgress: number
  setCollectionProgress: (p: number) => void

  // Active color
  activeColor: ColorPaletteKey
  colorTransitionT: number // 0 = prev, 1 = current
  setActiveColor: (key: ColorPaletteKey) => void
  setColorTransitionT: (t: number) => void

  // Gesture feedback
  pinchFlash: boolean
  setPinchFlash: (v: boolean) => void

  // Loading
  isLoaded: boolean
  setIsLoaded: (v: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  handsData: [],
  setHandsData: (data) => set({ handsData: data }),

  flameState: 'floating',
  setFlameState: (state) => set({ flameState: state }),

  collectionProgress: 0,
  setCollectionProgress: (p) => set({ collectionProgress: p }),

  activeColor: 'orange',
  colorTransitionT: 1,
  setActiveColor: (key) => set({ activeColor: key, colorTransitionT: 0 }),
  setColorTransitionT: (t) => set({ colorTransitionT: t }),

  pinchFlash: false,
  setPinchFlash: (v) => set({ pinchFlash: v }),

  isLoaded: false,
  setIsLoaded: (v) => set({ isLoaded: v }),
}))
