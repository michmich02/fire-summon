const NP       = 1200
const SPRING_K  = 0.025   // weaker springs = less elastic snap-back
const PLASTICITY= 0.10    // how fast rest length adapts (1=instant, 0=elastic)
const DAMP      = 0.94    // high damping = viscous, slow
const GRAVITY   = 0.022   // subtle
const COHESION  = 24      // spring connect radius (px)


export class SlimeBody {
  xs:Float32Array; ys:Float32Array
  vxs:Float32Array; vys:Float32Array
  oxs:Float32Array; oys:Float32Array  // home offsets from center
  count:number
  spA:Int32Array; spB:Int32Array; spR:Float32Array; spN:number
  pR=10; restR:number
  private hCx:number; private hCy:number

  get cx(){let s=0;for(let i=0;i<this.count;i++)s+=this.xs[i];return s/this.count}
  get cy(){let s=0;for(let i=0;i<this.count;i++)s+=this.ys[i];return s/this.count}

  constructor(cx:number,cy:number,radius:number){
    this.restR=radius; this.hCx=cx; this.hCy=cy

    // Organic random distribution (not grid — avoids dot-mat look)
    const pts:[number,number][]=[]
    let tries=0
    while(pts.length<NP&&tries<NP*25){
      tries++
      const a=Math.random()*Math.PI*2
      const r=Math.sqrt(Math.random())*radius
      const x=Math.cos(a)*r, y=Math.sin(a)*r
      // Slightly irregular blob boundary
      const bR=radius*(0.88+0.12*Math.sin(a*3+0.7)+0.08*Math.sin(a*7+2.1))
      if(Math.sqrt(x*x+y*y)<bR*0.94) pts.push([x+cx,y+cy])
    }
    this.count=pts.length

    this.xs=new Float32Array(this.count); this.ys=new Float32Array(this.count)
    this.vxs=new Float32Array(this.count); this.vys=new Float32Array(this.count)
    this.oxs=new Float32Array(this.count); this.oys=new Float32Array(this.count)
    for(let i=0;i<this.count;i++){
      this.xs[i]=pts[i][0]; this.ys[i]=pts[i][1]
      this.oxs[i]=pts[i][0]-cx; this.oys[i]=pts[i][1]-cy
    }

    // Build springs using spatial grid (O(N) instead of O(N²))
    const cell=COHESION
    const grid=new Map<number,number[]>()
    for(let i=0;i<this.count;i++){
      const gx=Math.floor(this.xs[i]/cell),gy=Math.floor(this.ys[i]/cell)
      const k=gx*100000+gy;if(!grid.has(k))grid.set(k,[]);grid.get(k)!.push(i)
    }
    const maxSp=this.count*10
    this.spA=new Int32Array(maxSp); this.spB=new Int32Array(maxSp)
    this.spR=new Float32Array(maxSp); this.spN=0
    for(let i=0;i<this.count;i++){
      const gx=Math.floor(this.xs[i]/cell),gy=Math.floor(this.ys[i]/cell)
      for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++){
        for(const j of grid.get((gx+dx)*100000+(gy+dy))??[]){
          if(j<=i)continue
          const ddx=this.xs[i]-this.xs[j],ddy=this.ys[i]-this.ys[j]
          const d=Math.sqrt(ddx*ddx+ddy*ddy)
          if(d<COHESION&&this.spN<maxSp-1){this.spA[this.spN]=i;this.spB[this.spN]=j;this.spR[this.spN]=d;this.spN++}
        }
      }
    }
  }

  // force>0=attract, force<0=repel. Radius=influence px
  applyForce(hx:number,hy:number,force:number,radius:number){
    for(let i=0;i<this.count;i++){
      const dx=hx-this.xs[i],dy=hy-this.ys[i]
      const d=Math.sqrt(dx*dx+dy*dy)+0.01
      if(d<radius){const t=(1-d/radius)*force;this.vxs[i]+=dx/d*t;this.vys[i]+=dy/d*t}
    }
  }

  update(){
    // Spring forces + plastic rest length update
    for(let s=0;s<this.spN;s++){
      const a=this.spA[s],b=this.spB[s]
      const dx=this.xs[b]-this.xs[a],dy=this.ys[b]-this.ys[a]
      const d=Math.sqrt(dx*dx+dy*dy)+0.01
      // Plastic adaptation: rest length slowly follows actual length
      // → deformation persists; springs no longer fight the hand
      this.spR[s]+=(d-this.spR[s])*PLASTICITY
      const f=(d-this.spR[s])*SPRING_K
      const nx=dx/d,ny=dy/d
      this.vxs[a]+=nx*f;this.vys[a]+=ny*f
      this.vxs[b]-=nx*f;this.vys[b]-=ny*f
    }
    for(let i=0;i<this.count;i++){
      // Gravity only — no per-particle home restore
      this.vys[i]+=GRAVITY
      // High damping
      this.vxs[i]*=DAMP; this.vys[i]*=DAMP
      this.xs[i]+=this.vxs[i]; this.ys[i]+=this.vys[i]
    }
  }
}
