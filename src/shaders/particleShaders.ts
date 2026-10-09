// GLSL Vertex Shader for particle sprites
const vertexShader = /* glsl */`
  uniform float uTime;
  uniform float uPixelRatio;

  attribute float aSize;
  attribute float aAlpha;
  attribute float aPhase;
  attribute float aLayer;

  varying float vAlpha;
  varying float vLayer;
  varying float vDist;

  void main() {
    vAlpha = aAlpha;
    vLayer = aLayer;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Pulsing size based on phase and time
    float pulse = 1.0 + 0.25 * sin(uTime * 2.5 + aPhase * 6.28);
    gl_PointSize = aSize * pulse * uPixelRatio;

    // Distance-based size attenuation (soft)
    float dist = -mvPosition.z;
    vDist = dist;
  }
`

// GLSL Fragment Shader — glowing soft sprite
const fragmentShader = /* glsl */`
  uniform vec3 uInnerColor;
  uniform vec3 uOuterColor;
  uniform vec3 uCoreColor;
  uniform float uTime;

  varying float vAlpha;
  varying float vLayer;
  varying float vDist;

  void main() {
    // Distance from center of sprite
    vec2 uv = gl_PointCoord * 2.0 - 1.0;
    float d = length(uv);

    if (d > 1.0) discard;

    // Soft glow disc
    float glow = 1.0 - smoothstep(0.0, 1.0, d);
    float core = 1.0 - smoothstep(0.0, 0.3, d);

    // Layer-based coloring: 0=core(bright), 1=mid, 2=outer(dim)
    vec3 color;
    if (vLayer < 0.5) {
      // Core — brightest, mix toward white
      color = mix(uInnerColor, uCoreColor, core * 0.7);
    } else if (vLayer < 1.5) {
      // Mid
      color = mix(uOuterColor, uInnerColor, glow * 0.6);
    } else {
      // Outer
      color = mix(uOuterColor * 0.7, uInnerColor * 0.5, glow * 0.3);
    }

    // Slight flicker
    float flicker = 1.0 - 0.1 * sin(uTime * 8.0 + vDist);

    float alpha = glow * vAlpha * flicker;
    
    // Additive blending — multiply alpha into color for HDR bloom look
    gl_FragColor = vec4(color * alpha, alpha * 0.9);
  }
`

export { vertexShader, fragmentShader }
