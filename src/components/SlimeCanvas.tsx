import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { SlimeBody } from '../lib/slimeBody'
import { splatVert, splatFrag, threshVert, threshFrag, sparkVert, sparkFrag } from '../shaders/slimeShaders'
import { useAppStore } from '../store/useAppStore'
import type { HandData } from '../store/useAppStore'

interface Props { handsData: HandData[] }
const NS=50

function palmCtr(lm:{x:number;y:number}[]){return{x:(lm[0].x+lm[5].x+lm[9].x+lm[13].x+lm[17].x)/5,y:(lm[0].y+lm[5].y+lm[9].y+lm[13].y+lm[17].y)/5}}
function openness(lm:{x:number;y:number}[]){const T=[4,8,12,16,20],P=[3,6,10,14,18];let e=0;for(let f=0;f<5;f++){if(Math.hypot(lm[T[f]].x-lm[0].x,lm[T[f]].y-lm[0].y)>Math.hypot(lm[P[f]].x-lm[0].x,lm[P[f]].y-lm[0].y)*1.08)e++}return e/5}
function toWorld(px:number,py:number,W:number,H:number){return{x:px-W/2,y:H/2-py}}

export default function SlimeCanvas({handsData}:Props){
  const canvasRef=useRef<HTMLCanvasElement>(null)
  const rafRef=useRef<number>(0)
  const clockRef=useRef(new THREE.Clock())
  const handsRef=useRef<HandData[]>([])
  const setLoaded=useAppStore(s=>s.setIsLoaded)
  useEffect(()=>{handsRef.current=handsData},[handsData])

  useEffect(()=>{
    const canvas=canvasRef.current;if(!canvas)return
    const W=window.innerWidth,H=window.innerHeight
    const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true})
    renderer.setSize(W,H);renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));renderer.setClearColor(0,0)
    const camera=new THREE.OrthographicCamera(-W/2,W/2,H/2,-H/2,-100,100);camera.position.z=10
    const slime=new SlimeBody(W/2,H/2,Math.min(W,H)*0.19)

    const accumTarget=new THREE.WebGLRenderTarget(W,H,{
      minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,
      format:THREE.RGBAFormat,type:THREE.HalfFloatType,depthBuffer:false,
    })

    const splatGeo=new THREE.BufferGeometry()
    const splatPos=new Float32Array(slime.count*3)
    splatGeo.setAttribute('position',new THREE.BufferAttribute(splatPos,3))
    const splatMat=new THREE.ShaderMaterial({
      vertexShader:splatVert,fragmentShader:splatFrag,
      transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,depthTest:false,
    })
    const splatScene=new THREE.Scene();splatScene.add(new THREE.Points(splatGeo,splatMat))

    const threshMat=new THREE.ShaderMaterial({
      vertexShader:threshVert,fragmentShader:threshFrag,
      uniforms:{
        uAccum:{value:accumTarget.texture},
        uRes:{value:new THREE.Vector2(W,H)},
        uTime:{value:0},uMass:{value:new THREE.Vector2(0,0)},
      },
      transparent:true,blending:THREE.NormalBlending,depthWrite:false,
    })
    const threshScene=new THREE.Scene()
    threshScene.add(new THREE.Mesh(new THREE.PlaneGeometry(W,H),threshMat))

    // Birth sparkles
    const sPx=new Float32Array(NS*3),sVx=new Float32Array(NS),sVy=new Float32Array(NS),sAl=new Float32Array(NS),sSzB=new Float32Array(NS),sSz=new Float32Array(NS),sPh=new Float32Array(NS)
    for(let i=0;i<NS;i++){const a=Math.random()*Math.PI*2,r=90+Math.random()*150;sPx[i*3]=Math.cos(a)*r;sPx[i*3+1]=Math.sin(a)*r;sVx[i]=-Math.cos(a)*0.55;sVy[i]=Math.sin(a)*0.55;sSz[i]=3+Math.random()*5;sPh[i]=Math.random()*Math.PI*2}
    const sGeo=new THREE.BufferGeometry()
    sGeo.setAttribute('position',new THREE.BufferAttribute(sPx,3))
    sGeo.setAttribute('aAlpha',new THREE.BufferAttribute(sAl,1))
    sGeo.setAttribute('aSize',new THREE.BufferAttribute(sSzB,1))
    threshScene.add(new THREE.Points(sGeo,new THREE.ShaderMaterial({vertexShader:sparkVert,fragmentShader:sparkFrag,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false})))
    setLoaded(true)

    function animate(){
      rafRef.current=requestAnimationFrame(animate)
      const time=clockRef.current.getElapsedTime()
      const hands=handsRef.current
      const birthT=Math.min(1,time/2.5)

      if(birthT<1){
        for(let i=0;i<NS;i++){const ix=i*3;sVx[i]*=0.96;sVy[i]*=0.96;sPx[ix]+=sVx[i];sPx[ix+1]+=sVy[i];sAl[i]=Math.min(1,time/1.1)*(1-birthT*birthT)*(0.6+Math.sin(time*3+sPh[i])*0.3);sSzB[i]=sSz[i]*(1-birthT*0.6)}
        ;(sGeo.getAttribute('position') as THREE.BufferAttribute).needsUpdate=true
        ;(sGeo.getAttribute('aAlpha') as THREE.BufferAttribute).needsUpdate=true
        ;(sGeo.getAttribute('aSize') as THREE.BufferAttribute).needsUpdate=true
      }

      // ── HAND INTERACTION ────────────────────────────────────────────
      const R=slime.restR
      const sh=[...hands].sort((a,b)=>(a.landmarks?.[0].x??W/2)-(b.landmarks?.[0].x??W/2))

      let a0Pos:{x:number,y:number}|null=null
      let a1Pos:{x:number,y:number}|null=null

      for(let hi=0;hi<sh.length&&hi<2;hi++){
        const lm=sh[hi].landmarks;if(!lm||lm.length<21)continue
        const pc=palmCtr(lm)
        const op=openness(lm)
        const itx=lm[8].x,ity=lm[8].y
        const ttx=lm[4].x,tty=lm[4].y
        const isPinch=Math.hypot(itx-ttx,ity-tty)<42
        if(hi===0) a0Pos=pc; else a1Pos=pc

        if(isPinch){
          const mpx=(itx+ttx)/2,mpy=(ity+tty)/2
          slime.applyForce(mpx,mpy,0.55,110)
        } else {
          const distToSlime=Math.hypot(pc.x-slime.cx,pc.y-slime.cy)
          if(distToSlime<R*2.5){
            if(op>0.70)      slime.applyForce(pc.x,pc.y,-0.30,130)
            else if(op<0.40) slime.applyForce(pc.x,pc.y, 0.45,120)
            else             slime.applyForce(itx,ity,-0.28,80)
          }
        }
      }

      // ── TWO-HAND ANCHOR DRIVE ───────────────────────────────────────
      // anchorDistance drives slimeLength, middleThickness, sagAmount
      // Each particle is driven to its target on the stretched ellipse
      if(a0Pos&&a1Pos){
        const anchorDist=Math.hypot(a0Pos.x-a1Pos.x,a0Pos.y-a1Pos.y)
        const restDist=R*2
        const stretchR=anchorDist/restDist

        // Shape parameters from anchorDistance
        const slimeLen  =anchorDist
        const midThick  =R*2/Math.sqrt(Math.max(1,stretchR))   // thinner middle as distance grows
        const sagAmt    =0.20*anchorDist                        // more sag as hands pull apart

        const midX=(a0Pos.x+a1Pos.x)/2, midY=(a0Pos.y+a1Pos.y)/2
        const axX=(a1Pos.x-a0Pos.x)/(anchorDist+0.01)         // unit vec along stretch axis
        const axY=(a1Pos.y-a0Pos.y)/(anchorDist+0.01)
        const pxX=-axY, pxY=axX                                // perpendicular

        // Drive force: how quickly particles follow target (viscous lag via DAMP)
        const DRIVE_K=0.08

        for(let i=0;i<slime.count;i++){
          // Particle's normalized position in original blob (home offset)
          const ox=slime.oxs[i], oy=slime.oys[i]
          const t=(ox*axX+oy*axY)/R   // along axis  [-1..1]
          const u=(ox*pxX+oy*pxY)/R   // perp        [-1..1]

          // Target on stretched ellipse + catenary sag (max at center, zero at ends)
          const sagOffset=sagAmt*(1-t*t)*0.5
          const tx=midX + t*(slimeLen/2)*axX + u*(midThick/2)*pxX
          const ty=midY + t*(slimeLen/2)*axY + u*(midThick/2)*pxY + sagOffset

          slime.vxs[i]+=(tx-slime.xs[i])*DRIVE_K
          slime.vys[i]+=(ty-slime.ys[i])*DRIVE_K
        }
      }

      slime.update()

      // Update splat buffer
      const posArr=splatGeo.getAttribute('position') as THREE.BufferAttribute
      for(let i=0;i<slime.count;i++) posArr.setXYZ(i,slime.xs[i]-W/2,H/2-slime.ys[i],0)
      posArr.needsUpdate=true
      splatGeo.setDrawRange(0,Math.floor(slime.count*(0.15+birthT*0.85)))

      // Pass 1: splats → FBO
      renderer.setRenderTarget(accumTarget);renderer.setClearColor(0,0);renderer.clear()
      renderer.render(splatScene,camera)

      // Pass 2: threshold + shade
      renderer.setRenderTarget(null);renderer.setClearColor(0,0);renderer.clear()
      const cm=toWorld(slime.cx,slime.cy,W,H)
      ;(threshMat.uniforms.uMass.value as THREE.Vector2).set(cm.x,cm.y)
      threshMat.uniforms.uTime.value=time
      renderer.render(threshScene,camera)
    }
    animate()

    function onResize(){const nW=window.innerWidth,nH=window.innerHeight;renderer.setSize(nW,nH);camera.left=-nW/2;camera.right=nW/2;camera.top=nH/2;camera.bottom=-nH/2;camera.updateProjectionMatrix();threshMat.uniforms.uRes.value.set(nW,nH);accumTarget.setSize(nW,nH)}
    window.addEventListener('resize',onResize)
    return()=>{cancelAnimationFrame(rafRef.current);window.removeEventListener('resize',onResize);renderer.dispose();accumTarget.dispose()}
  },[setLoaded])

  return <canvas ref={canvasRef} id="slime-canvas" style={{position:'absolute',inset:0,zIndex:3}}/>
}
