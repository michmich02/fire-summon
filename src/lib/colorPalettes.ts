import type { ColorPaletteKey } from '../store/useAppStore'

export interface ColorPalette {
  name: string
  // Flame shader color layers (temperature from hot→cold)
  coreColor:  [number, number, number]   // white-hot center
  innerColor: [number, number, number]   // bright inner
  midColor:   [number, number, number]   // mid flame body
  outerColor: [number, number, number]   // outer edge / dark
  // Ember / spark color
  sparkColor: [number, number, number]
  // HUD dot
  dotColor: string
  label: string
}

export const COLOR_PALETTES: Record<ColorPaletteKey, ColorPalette> = {
  orange: {
    name:       'Inferno',
    coreColor:  [1.00, 1.00, 0.85],   // white-yellow
    innerColor: [1.00, 0.82, 0.10],   // bright golden yellow
    midColor:   [1.00, 0.42, 0.02],   // vivid orange
    outerColor: [0.70, 0.08, 0.00],   // red-orange / dark
    sparkColor: [1.00, 0.70, 0.20],
    dotColor:   '#ff6600',
    label:      'Inferno',
  },
  blue: {
    name:       'Azure',
    coreColor:  [0.90, 0.97, 1.00],   // cold white
    innerColor: [0.40, 0.85, 1.00],   // bright cyan-blue
    midColor:   [0.05, 0.35, 1.00],   // vivid blue
    outerColor: [0.00, 0.08, 0.55],   // deep navy
    sparkColor: [0.60, 0.90, 1.00],
    dotColor:   '#00aaff',
    label:      'Azure',
  },
  purple: {
    name:       'Arcane',
    coreColor:  [1.00, 0.90, 1.00],   // pink-white
    innerColor: [1.00, 0.28, 0.88],   // hot magenta
    midColor:   [0.62, 0.00, 0.95],   // vivid violet
    outerColor: [0.18, 0.00, 0.40],   // deep purple
    sparkColor: [1.00, 0.50, 1.00],
    dotColor:   '#cc44ff',
    label:      'Arcane',
  },
  green: {
    name:       'Verdant',
    coreColor:  [0.90, 1.00, 0.85],   // pale green-white
    innerColor: [0.40, 1.00, 0.30],   // bright lime
    midColor:   [0.05, 0.75, 0.15],   // vivid green
    outerColor: [0.00, 0.28, 0.05],   // dark forest
    sparkColor: [0.60, 1.00, 0.40],
    dotColor:   '#00ff88',
    label:      'Verdant',
  },
  gold: {
    name:       'Celestial',
    coreColor:  [1.00, 1.00, 1.00],   // pure white
    innerColor: [1.00, 0.95, 0.55],   // warm white-gold
    midColor:   [1.00, 0.75, 0.05],   // gold
    outerColor: [0.70, 0.35, 0.00],   // amber-brown
    sparkColor: [1.00, 0.90, 0.60],
    dotColor:   '#ffd700',
    label:      'Celestial',
  },
}

export const PALETTE_ORDER: ColorPaletteKey[] = ['orange', 'blue', 'purple', 'green', 'gold']

export function lerpColor(
  a: [number, number, number],
  b: [number, number, number],
  t: number
): [number, number, number] {
  const c = Math.max(0, Math.min(1, t))
  return [a[0]+(b[0]-a[0])*c, a[1]+(b[1]-a[1])*c, a[2]+(b[2]-a[2])*c]
}
