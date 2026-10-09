export const flameVert = /* glsl */`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

export const flameFrag = /* glsl */`
uniform float uTime;
uniform float uEnergy;
uniform vec3  uColorCore;   // white-hot center
uniform vec3  uColorInner;  // bright inner (yellow-gold)
uniform vec3  uColorMid;    // mid flame (orange)
uniform vec3  uColorOuter;  // outer edge (red-orange / dark)
varying vec2  vUv;

// ── Noise utilities ─────────────────────────────────────────────────────────
float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }

float vnoise(vec2 p){
  vec2 i=floor(p), f=fract(p);
  f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),
             mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
}

float fbm(vec2 p){
  float v=0.0, a=0.5;
  for(int i=0;i<5;i++){ v+=a*vnoise(p); p=p*2.05+vec2(0.85,1.15); a*=0.5; }
  return v;
}
// ────────────────────────────────────────────────────────────────────────────

void main(){
  float x = vUv.x - 0.5;   // -0.5..0.5 (centered)
  float y = vUv.y;          //  0=base, 1=tip
  float t = uTime;

  // ── Domain-warped coordinates ──────────────────────────────────────────
  float flow = t * 1.35;
  // Warp x and y independently for a more organic distortion
  float wx = fbm(vec2(x*2.2+0.5, y*3.5 - flow*0.75)) - 0.5;
  float wy = fbm(vec2(x*2.2+2.0, y*3.5 - flow*0.60)) - 0.5;
  float warpedX = x + wx * 0.13 * (0.4 + y * 0.6);   // warp grows toward tip
  float warpedY = y + wy * 0.04;

  // ── Flame profile ──────────────────────────────────────────────────────
  // Wide at base, narrows to tip. pow < 1 → wider lower section.
  float profile = 0.44 * pow(max(0.0, 1.0 - warpedY), 0.58);
  // Small additional bulge at the "belly" of the flame
  profile *= 1.0 + sin(3.14159 * clamp(y, 0.0, 1.0) * 0.7) * 0.18;

  // ── Whole-flame sway (natural wind-like lean) ──────────────────────────
  float sway = sin(t*1.65)*0.032 + sin(t*2.9+1.2)*0.020 + sin(t*4.5+2.7)*0.011;
  float ax = warpedX - sway * y * y;   // more sway at the top

  // ── Radial distance from flame axis ───────────────────────────────────
  float r = abs(ax) / (profile + 0.001);

  // ── Flame body: sharp bright core, soft wispy edge ────────────────────
  // Inner core: tight bright column
  float core    = pow(max(0.0, 1.0 - smoothstep(0.0, 0.55, r)), 2.0);
  // Outer body: softer falloff extends further
  float body    = max(0.0, 1.0 - smoothstep(0.50, 1.05, r));

  // Height fade: flame is bright at base, fades naturally toward tip
  // pow < 1 keeps mid-flame bright; large pow kills the very tip
  float hfade   = pow(max(0.0, 1.0 - y), 0.70);
  float tipKill = 1.0 - smoothstep(0.80, 1.00, y);   // clean tip edge

  // ── Internal turbulence texture ────────────────────────────────────────
  // Higher frequency, scrolls faster → looks like internal flame convection
  float turb = fbm(vec2(ax*3.8+0.5, y*7.0 - flow*1.3));

  // ── Primary intensity ──────────────────────────────────────────────────
  float intensity = body * hfade * tipKill * (0.45 + turb * 0.80);
  intensity += core * hfade * tipKill * 0.30;   // extra brightness at core
  intensity = pow(max(0.0, intensity), 1.05);

  // ── Flame tongues: secondary dancing tips ─────────────────────────────
  // Each tongue is a narrow warped column slightly off-center
  float tw1 = sin(t*2.20+0.60)*0.060 + sin(t*4.10+1.90)*0.028;
  float tw2 = sin(t*3.30+1.80)*0.050 + sin(t*5.20+0.35)*0.022;
  float tw3 = sin(t*2.70+3.10)*0.038;

  float tip  = 1.0 - smoothstep(0.55, 1.0, y);  // tongues visible in upper half
  float tg1  = (1.0 - smoothstep(0.0, 0.85, abs(ax-tw1)/(profile*0.45+0.001))) * tip * turb * 0.55;
  float tg2  = (1.0 - smoothstep(0.0, 0.85, abs(ax-tw2)/(profile*0.35+0.001))) * tip * turb * 0.45;
  float tg3  = (1.0 - smoothstep(0.0, 0.80, abs(ax-tw3)/(profile*0.30+0.001))) * tip * turb * 0.38;
  intensity  = max(intensity, max(tg1, max(tg2, tg3)));

  // ── Soft corona / glow outside flame body ─────────────────────────────
  float corona = exp(-r*r*2.2) * hfade * 0.30;

  // ── Color mapping (intensity → temperature) ───────────────────────────
  // Mimics real fire: white-yellow core, orange body, red-dark outer edge
  vec3 col;
  col  = mix(uColorOuter, uColorMid,   smoothstep(0.00, 0.28, intensity));
  col  = mix(col,         uColorInner, smoothstep(0.24, 0.58, intensity));
  col  = mix(col,         uColorCore,  smoothstep(0.54, 0.88, intensity));
  // Faint corona tint (matches mid-range flame color)
  col += uColorMid * corona * 0.45;

  // ── Alpha ──────────────────────────────────────────────────────────────
  float alpha = smoothstep(0.0, 0.09, intensity) * uEnergy;
  alpha       = max(alpha, corona * uEnergy * 0.55);
  if (alpha < 0.005) discard;

  gl_FragColor = vec4(col * (intensity + corona * 0.35), alpha * 0.96);
}
`

// ── Simple sprite shader for spark embers ───────────────────────────────────
export const sparkVert = /* glsl */`
attribute float aSize;
attribute float aAlpha;
varying  float vAlpha;
void main(){
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position  = projectionMatrix * mv;
  gl_PointSize = aSize;
}
`
export const sparkFrag = /* glsl */`
uniform vec3  uColor;
varying float vAlpha;
void main(){
  vec2  c = gl_PointCoord*2.0-1.0;
  float d = dot(c,c);
  if(d > 1.0) discard;
  float g = 1.0 - smoothstep(0.0, 1.0, d);
  gl_FragColor = vec4(uColor * g, g * vAlpha * 0.9);
}
`
