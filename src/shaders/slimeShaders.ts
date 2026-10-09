// Pass 1: particle gaussian splat → accumulation FBO
export const splatVert=/*glsl*/`void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);gl_PointSize=60.0;}`
export const splatFrag=/*glsl*/`void main(){vec2 c=gl_PointCoord-0.5;float d=length(c)*60.0+0.01;float v=min(100.0/(d*d),8.0);if(v<0.04)discard;gl_FragColor=vec4(v,0.0,0.0,1.0);}`

// Pass 2: threshold + slime shading
export const threshVert=/*glsl*/`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`
export const threshFrag=/*glsl*/`
uniform sampler2D uAccum;
uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMass;
varying vec2 vUv;
void main(){
  float f=texture2D(uAccum,vUv).r;
  float soft=smoothstep(0.80,1.20,f);
  if(soft<0.006) discard;
  float depth=clamp((f-1.0)/2.0,0.0,1.0);

  // Surface normal from field gradient (for lighting)
  vec2 px=1.0/uRes;
  float dx=texture2D(uAccum,vUv+vec2(px.x,0)).r-texture2D(uAccum,vUv-vec2(px.x,0)).r;
  float dy=texture2D(uAccum,vUv+vec2(0,px.y)).r-texture2D(uAccum,vUv-vec2(0,px.y)).r;
  vec2 grad=vec2(dx,dy);float gl=length(grad);
  vec2 norm=gl>0.001?-grad/gl:vec2(0.0,1.0);

  // Lighting
  vec2 light=normalize(vec2(-0.6,-0.75));
  float diff=max(dot(norm,light),0.0)*0.55+0.45;
  float spec=pow(max(dot(norm,light),0.0),6.0)*0.7;

  // Slime color
  vec3 base=vec3(0.58,0.30,0.90);
  vec3 col=mix(base,vec3(0.78,0.44,0.97),depth*0.28)*diff;

  // Gravity sag tint
  vec2 toMass=(vUv*uRes-uMass)/max(uRes.y*0.25,1.0);
  col=mix(col,col*0.75,smoothstep(-1.0,1.0,toMass.y)*0.22);

  // Rim + spec
  col+=vec3(0.20,0.08,0.30)*(1.0-smoothstep(0.0,0.25,depth))*0.5;
  col=min(col+vec3(spec),vec3(1.0));

  // Shimmer
  col+=vec3(0.04,0.01,0.08)*sin(uTime*1.2+f*0.8);

  float alpha=mix(0.84,0.95,depth)*soft;
  gl_FragColor=vec4(col,alpha);
}
`
export const sparkVert=/*glsl*/`attribute float aAlpha;attribute float aSize;varying float vAlpha;void main(){vAlpha=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);gl_PointSize=aSize;}`
export const sparkFrag=/*glsl*/`varying float vAlpha;void main(){vec2 c=gl_PointCoord*2.0-1.0;if(dot(c,c)>1.0)discard;float g=1.0-sqrt(dot(c,c));gl_FragColor=vec4(mix(vec3(0.75,0.45,1.0),vec3(1.0,0.82,1.0),g)*g,g*vAlpha*0.9);}`
