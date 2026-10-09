/**
 * Flame formation — generates target slot positions for a particle-based flame.
 * Returns positions in screen-pixel space relative to a given center point.
 */

export interface FlameSlot {
  x: number
  y: number
  z: number
  layer: number  // 0=core, 1=mid, 2=outer — controls brightness
}

/**
 * Generate N flame slot positions around a center point.
 * The flame shape is a parametric teardrop / elongated oval with turbulence.
 *
 * @param cx          Center X in pixels
 * @param cy          Center Y in pixels (base of flame)
 * @param count       Number of slots
 * @param scale       Scale factor (1.0 = default size ~120px tall)
 * @param time        Elapsed time in seconds for animation
 */
export function generateFlameSlots(
  cx: number,
  cy: number,
  count: number,
  scale: number,
  time: number
): FlameSlot[] {
  const slots: FlameSlot[] = []

  for (let i = 0; i < count; i++) {
    const t = i / count  // 0 = base, 1 = tip
    
    // Parametric flame profile: wide at base, narrow at tip
    const profile = Math.sin(Math.PI * t) * (1 - t * 0.3)
    
    // Angle distribution — more particles at different radii
    const ring = Math.floor(i % 3)            // 0=core, 1=mid, 2=outer
    const ringRadius = [0.25, 0.6, 1.0][ring]
    const angleOffset = (i * 2.399963)        // golden angle spread
    const angle = angleOffset + time * (ring === 0 ? 0.8 : ring === 1 ? -0.4 : 0.2)
    
    // Flame turbulence
    const turbX = Math.sin(time * 2.1 + i * 0.7) * 8 * (1 - t)
    const turbY = Math.cos(time * 1.7 + i * 0.5) * 5 * t
    
    const flameWidth = 80 * scale
    const flameHeight = 160 * scale
    
    // Slot position
    const x = cx + Math.cos(angle) * profile * flameWidth * ringRadius + turbX
    const y = cy - t * flameHeight - Math.abs(Math.sin(time * 3.0 + i)) * 15 * t + turbY
    const z = (Math.sin(angle) * 10)
    
    slots.push({ x, y, z, layer: ring })
  }

  return slots
}

/**
 * Given a set of attracted particles and their current count, returns
 * the target world position for each particle to move toward.
 */
export function assignFlameSlots(
  attractedIndices: number[],
  flameCx: number,
  flameCy: number,
  scale: number,
  time: number
): Map<number, FlameSlot> {
  const count = attractedIndices.length
  const slots = generateFlameSlots(flameCx, flameCy, count, scale, time)
  const map = new Map<number, FlameSlot>()
  for (let i = 0; i < count; i++) {
    map.set(attractedIndices[i], slots[i])
  }
  return map
}
