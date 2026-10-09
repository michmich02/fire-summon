var GS=Object.defineProperty;var WS=(t,e,n)=>e in t?GS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var hn=(t,e,n)=>WS(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ov(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kv={exports:{}},yf={},Bv={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jl=Symbol.for("react.element"),XS=Symbol.for("react.portal"),$S=Symbol.for("react.fragment"),jS=Symbol.for("react.strict_mode"),YS=Symbol.for("react.profiler"),qS=Symbol.for("react.provider"),KS=Symbol.for("react.context"),ZS=Symbol.for("react.forward_ref"),QS=Symbol.for("react.suspense"),JS=Symbol.for("react.memo"),eM=Symbol.for("react.lazy"),y0=Symbol.iterator;function tM(t){return t===null||typeof t!="object"?null:(t=y0&&t[y0]||t["@@iterator"],typeof t=="function"?t:null)}var zv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vv=Object.assign,Hv={};function Da(t,e,n){this.props=t,this.context=e,this.refs=Hv,this.updater=n||zv}Da.prototype.isReactComponent={};Da.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Da.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gv(){}Gv.prototype=Da.prototype;function pm(t,e,n){this.props=t,this.context=e,this.refs=Hv,this.updater=n||zv}var mm=pm.prototype=new Gv;mm.constructor=pm;Vv(mm,Da.prototype);mm.isPureReactComponent=!0;var x0=Array.isArray,Wv=Object.prototype.hasOwnProperty,gm={current:null},Xv={key:!0,ref:!0,__self:!0,__source:!0};function $v(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wv.call(e,i)&&!Xv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Jl,type:t,key:s,ref:o,props:r,_owner:gm.current}}function nM(t,e){return{$$typeof:Jl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _m(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jl}function iM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var S0=/\/+/g;function hd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iM(""+t.key):e.toString(36)}function pc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Jl:case XS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+hd(o,0):i,x0(r)?(n="",t!=null&&(n=t.replace(S0,"$&/")+"/"),pc(r,e,n,"",function(u){return u})):r!=null&&(_m(r)&&(r=nM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(S0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",x0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+hd(s,a);o+=pc(s,e,n,l,r)}else if(l=tM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+hd(s,a++),o+=pc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xu(t,e,n){if(t==null)return t;var i=[],r=0;return pc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function rM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rn={current:null},mc={transition:null},sM={ReactCurrentDispatcher:Rn,ReactCurrentBatchConfig:mc,ReactCurrentOwner:gm};function jv(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:xu,forEach:function(t,e,n){xu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xu(t,function(){e++}),e},toArray:function(t){return xu(t,function(e){return e})||[]},only:function(t){if(!_m(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Da;Xe.Fragment=$S;Xe.Profiler=YS;Xe.PureComponent=pm;Xe.StrictMode=jS;Xe.Suspense=QS;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sM;Xe.act=jv;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gm.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Wv.call(e,l)&&!Xv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Jl,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:KS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qS,_context:t},t.Consumer=t};Xe.createElement=$v;Xe.createFactory=function(t){var e=$v.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:ZS,render:t}};Xe.isValidElement=_m;Xe.lazy=function(t){return{$$typeof:eM,_payload:{_status:-1,_result:t},_init:rM}};Xe.memo=function(t,e){return{$$typeof:JS,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=mc.transition;mc.transition={};try{t()}finally{mc.transition=e}};Xe.unstable_act=jv;Xe.useCallback=function(t,e){return Rn.current.useCallback(t,e)};Xe.useContext=function(t){return Rn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Rn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Rn.current.useEffect(t,e)};Xe.useId=function(){return Rn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Rn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Rn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Rn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Rn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Rn.current.useReducer(t,e,n)};Xe.useRef=function(t){return Rn.current.useRef(t)};Xe.useState=function(t){return Rn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Rn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Rn.current.useTransition()};Xe.version="18.3.1";Bv.exports=Xe;var pt=Bv.exports;const oM=Ov(pt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aM=pt,lM=Symbol.for("react.element"),uM=Symbol.for("react.fragment"),cM=Object.prototype.hasOwnProperty,fM=aM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dM={key:!0,ref:!0,__self:!0,__source:!0};function Yv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)cM.call(e,i)&&!dM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lM,type:t,key:s,ref:o,props:r,_owner:fM.current}}yf.Fragment=uM;yf.jsx=Yv;yf.jsxs=Yv;kv.exports=yf;var tn=kv.exports,qv={exports:{}},oi={},Kv={exports:{}},Zv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,X){var K=D.length;D.push(X);e:for(;0<K;){var oe=K-1>>>1,ne=D[oe];if(0<r(ne,X))D[oe]=X,D[K]=ne,K=oe;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var X=D[0],K=D.pop();if(K!==X){D[0]=K;e:for(var oe=0,ne=D.length,Pe=ne>>>1;oe<Pe;){var V=2*(oe+1)-1,Q=D[V],le=V+1,ue=D[le];if(0>r(Q,K))le<ne&&0>r(ue,Q)?(D[oe]=ue,D[le]=K,oe=le):(D[oe]=Q,D[V]=K,oe=V);else if(le<ne&&0>r(ue,K))D[oe]=ue,D[le]=K,oe=le;else break e}}return X}function r(D,X){var K=D.sortIndex-X.sortIndex;return K!==0?K:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=D)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function M(D){if(y=!1,g(D),!v)if(n(l)!==null)v=!0,G(P);else{var X=n(u);X!==null&&Y(M,X.startTime-D)}}function P(D,X){v=!1,y&&(y=!1,f(L),L=-1),p=!0;var K=h;try{for(g(X),d=n(l);d!==null&&(!(d.expirationTime>X)||D&&!b());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var ne=oe(d.expirationTime<=X);X=t.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(l)&&i(l),g(X)}else i(l);d=n(l)}if(d!==null)var Pe=!0;else{var V=n(u);V!==null&&Y(M,V.startTime-X),Pe=!1}return Pe}finally{d=null,h=K,p=!1}}var A=!1,w=null,L=-1,T=5,x=-1;function b(){return!(t.unstable_now()-x<T)}function H(){if(w!==null){var D=t.unstable_now();x=D;var X=!0;try{X=w(!0,D)}finally{X?F():(A=!1,w=null)}}else A=!1}var F;if(typeof _=="function")F=function(){_(H)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,$=W.port2;W.port1.onmessage=H,F=function(){$.postMessage(null)}}else F=function(){m(H,0)};function G(D){w=D,A||(A=!0,F())}function Y(D,X){L=m(function(){D(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,G(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var K=h;h=X;try{return D()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=h;h=D;try{return X()}finally{h=K}},t.unstable_scheduleCallback=function(D,X,K){var oe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?oe+K:oe):K=oe,D){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=K+ne,D={id:c++,callback:X,priorityLevel:D,startTime:K,expirationTime:ne,sortIndex:-1},K>oe?(D.sortIndex=K,e(u,D),n(l)===null&&D===n(u)&&(y?(f(L),L=-1):y=!0,Y(M,K-oe))):(D.sortIndex=ne,e(l,D),v||p||(v=!0,G(P))),D},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(D){var X=h;return function(){var K=h;h=X;try{return D.apply(this,arguments)}finally{h=K}}}})(Zv);Kv.exports=Zv;var hM=Kv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pM=pt,ni=hM;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qv=new Set,Ll={};function fo(t,e){la(t,e),la(t+"Capture",e)}function la(t,e){for(Ll[t]=e,t=0;t<e.length;t++)Qv.add(e[t])}var Cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,mM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,M0={},E0={};function gM(t){return Eh.call(E0,t)?!0:Eh.call(M0,t)?!1:mM.test(t)?E0[t]=!0:(M0[t]=!0,!1)}function _M(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vM(t,e,n,i){if(e===null||typeof e>"u"||_M(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dn[t]=new Pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dn[e]=new Pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dn[t]=new Pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dn[t]=new Pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dn[t]=new Pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dn[t]=new Pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dn[t]=new Pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dn[t]=new Pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dn[t]=new Pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var vm=/[\-:]([a-z])/g;function ym(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vm,ym);dn[e]=new Pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vm,ym);dn[e]=new Pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vm,ym);dn[e]=new Pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dn[t]=new Pn(t,1,!1,t.toLowerCase(),null,!1,!1)});dn.xlinkHref=new Pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dn[t]=new Pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function xm(t,e,n,i){var r=dn.hasOwnProperty(e)?dn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vM(e,n,r,i)&&(n=null),i||r===null?gM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Or=pM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Su=Symbol.for("react.element"),ko=Symbol.for("react.portal"),Bo=Symbol.for("react.fragment"),Sm=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),Jv=Symbol.for("react.provider"),e2=Symbol.for("react.context"),Mm=Symbol.for("react.forward_ref"),wh=Symbol.for("react.suspense"),Ah=Symbol.for("react.suspense_list"),Em=Symbol.for("react.memo"),Yr=Symbol.for("react.lazy"),t2=Symbol.for("react.offscreen"),T0=Symbol.iterator;function Ka(t){return t===null||typeof t!="object"?null:(t=T0&&t[T0]||t["@@iterator"],typeof t=="function"?t:null)}var Pt=Object.assign,pd;function fl(t){if(pd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pd=e&&e[1]||""}return`
`+pd+t}var md=!1;function gd(t,e){if(!t||md)return"";md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{md=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fl(t):""}function yM(t){switch(t.tag){case 5:return fl(t.type);case 16:return fl("Lazy");case 13:return fl("Suspense");case 19:return fl("SuspenseList");case 0:case 2:case 15:return t=gd(t.type,!1),t;case 11:return t=gd(t.type.render,!1),t;case 1:return t=gd(t.type,!0),t;default:return""}}function Ch(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bo:return"Fragment";case ko:return"Portal";case Th:return"Profiler";case Sm:return"StrictMode";case wh:return"Suspense";case Ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e2:return(t.displayName||"Context")+".Consumer";case Jv:return(t._context.displayName||"Context")+".Provider";case Mm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Em:return e=t.displayName||null,e!==null?e:Ch(t.type)||"Memo";case Yr:e=t._payload,t=t._init;try{return Ch(t(e))}catch{}}return null}function xM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ch(e);case 8:return e===Sm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ps(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n2(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SM(t){var e=n2(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mu(t){t._valueTracker||(t._valueTracker=SM(t))}function i2(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=n2(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rh(t,e){var n=e.checked;return Pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function w0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ps(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r2(t,e){e=e.checked,e!=null&&xm(t,"checked",e,!1)}function Ph(t,e){r2(t,e);var n=ps(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bh(t,e.type,n):e.hasOwnProperty("defaultValue")&&bh(t,e.type,ps(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function A0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bh(t,e,n){(e!=="number"||Uc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var dl=Array.isArray;function Qo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ps(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return Pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function C0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(dl(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ps(n)}}function s2(t,e){var n=ps(e.value),i=ps(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function R0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function o2(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?o2(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Eu,a2=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Eu=Eu||document.createElement("div"),Eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Eu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Dl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MM=["Webkit","ms","Moz","O"];Object.keys(vl).forEach(function(t){MM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vl[e]=vl[t]})});function l2(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vl.hasOwnProperty(t)&&vl[t]?(""+e).trim():e+"px"}function u2(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=l2(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var EM=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ih(t,e){if(e){if(EM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nh=null;function Tm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fh=null,Jo=null,ea=null;function P0(t){if(t=nu(t)){if(typeof Fh!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Tf(e),Fh(t.stateNode,t.type,e))}}function c2(t){Jo?ea?ea.push(t):ea=[t]:Jo=t}function f2(){if(Jo){var t=Jo,e=ea;if(ea=Jo=null,P0(t),e)for(t=0;t<e.length;t++)P0(e[t])}}function d2(t,e){return t(e)}function h2(){}var _d=!1;function p2(t,e,n){if(_d)return t(e,n);_d=!0;try{return d2(t,e,n)}finally{_d=!1,(Jo!==null||ea!==null)&&(h2(),f2())}}function Il(t,e){var n=t.stateNode;if(n===null)return null;var i=Tf(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Oh=!1;if(Cr)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){Oh=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{Oh=!1}function TM(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var yl=!1,Nc=null,Fc=!1,kh=null,wM={onError:function(t){yl=!0,Nc=t}};function AM(t,e,n,i,r,s,o,a,l){yl=!1,Nc=null,TM.apply(wM,arguments)}function CM(t,e,n,i,r,s,o,a,l){if(AM.apply(this,arguments),yl){if(yl){var u=Nc;yl=!1,Nc=null}else throw Error(ee(198));Fc||(Fc=!0,kh=u)}}function ho(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m2(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function b0(t){if(ho(t)!==t)throw Error(ee(188))}function RM(t){var e=t.alternate;if(!e){if(e=ho(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return b0(r),t;if(s===i)return b0(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function g2(t){return t=RM(t),t!==null?_2(t):null}function _2(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_2(t);if(e!==null)return e;t=t.sibling}return null}var v2=ni.unstable_scheduleCallback,L0=ni.unstable_cancelCallback,PM=ni.unstable_shouldYield,bM=ni.unstable_requestPaint,Ft=ni.unstable_now,LM=ni.unstable_getCurrentPriorityLevel,wm=ni.unstable_ImmediatePriority,y2=ni.unstable_UserBlockingPriority,Oc=ni.unstable_NormalPriority,DM=ni.unstable_LowPriority,x2=ni.unstable_IdlePriority,xf=null,er=null;function IM(t){if(er&&typeof er.onCommitFiberRoot=="function")try{er.onCommitFiberRoot(xf,t,void 0,(t.current.flags&128)===128)}catch{}}var Ni=Math.clz32?Math.clz32:FM,UM=Math.log,NM=Math.LN2;function FM(t){return t>>>=0,t===0?32:31-(UM(t)/NM|0)|0}var Tu=64,wu=4194304;function hl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=hl(a):(s&=o,s!==0&&(i=hl(s)))}else o=n&~r,o!==0?i=hl(o):s!==0&&(i=hl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ni(e),r=1<<n,i|=t[n],e&=~r;return i}function OM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ni(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=OM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S2(){var t=Tu;return Tu<<=1,!(Tu&4194240)&&(Tu=64),t}function vd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ni(e),t[e]=n}function BM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Am(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function M2(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E2,Cm,T2,w2,A2,zh=!1,Au=[],is=null,rs=null,ss=null,Ul=new Map,Nl=new Map,Zr=[],zM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function D0(t,e){switch(t){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":rs=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":Ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(e.pointerId)}}function Qa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=nu(e),e!==null&&Cm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function VM(t,e,n,i,r){switch(e){case"focusin":return is=Qa(is,t,e,n,i,r),!0;case"dragenter":return rs=Qa(rs,t,e,n,i,r),!0;case"mouseover":return ss=Qa(ss,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ul.set(s,Qa(Ul.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Nl.set(s,Qa(Nl.get(s)||null,t,e,n,i,r)),!0}return!1}function C2(t){var e=zs(t.target);if(e!==null){var n=ho(e);if(n!==null){if(e=n.tag,e===13){if(e=m2(n),e!==null){t.blockedOn=e,A2(t.priority,function(){T2(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nh=i,n.target.dispatchEvent(i),Nh=null}else return e=nu(n),e!==null&&Cm(e),t.blockedOn=n,!1;e.shift()}return!0}function I0(t,e,n){gc(t)&&n.delete(e)}function HM(){zh=!1,is!==null&&gc(is)&&(is=null),rs!==null&&gc(rs)&&(rs=null),ss!==null&&gc(ss)&&(ss=null),Ul.forEach(I0),Nl.forEach(I0)}function Ja(t,e){t.blockedOn===e&&(t.blockedOn=null,zh||(zh=!0,ni.unstable_scheduleCallback(ni.unstable_NormalPriority,HM)))}function Fl(t){function e(r){return Ja(r,t)}if(0<Au.length){Ja(Au[0],t);for(var n=1;n<Au.length;n++){var i=Au[n];i.blockedOn===t&&(i.blockedOn=null)}}for(is!==null&&Ja(is,t),rs!==null&&Ja(rs,t),ss!==null&&Ja(ss,t),Ul.forEach(e),Nl.forEach(e),n=0;n<Zr.length;n++)i=Zr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Zr.length&&(n=Zr[0],n.blockedOn===null);)C2(n),n.blockedOn===null&&Zr.shift()}var ta=Or.ReactCurrentBatchConfig,Bc=!0;function GM(t,e,n,i){var r=lt,s=ta.transition;ta.transition=null;try{lt=1,Rm(t,e,n,i)}finally{lt=r,ta.transition=s}}function WM(t,e,n,i){var r=lt,s=ta.transition;ta.transition=null;try{lt=4,Rm(t,e,n,i)}finally{lt=r,ta.transition=s}}function Rm(t,e,n,i){if(Bc){var r=Vh(t,e,n,i);if(r===null)Rd(t,e,i,zc,n),D0(t,i);else if(VM(r,t,e,n,i))i.stopPropagation();else if(D0(t,i),e&4&&-1<zM.indexOf(t)){for(;r!==null;){var s=nu(r);if(s!==null&&E2(s),s=Vh(t,e,n,i),s===null&&Rd(t,e,i,zc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Rd(t,e,i,null,n)}}var zc=null;function Vh(t,e,n,i){if(zc=null,t=Tm(i),t=zs(t),t!==null)if(e=ho(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m2(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zc=t,null}function R2(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LM()){case wm:return 1;case y2:return 4;case Oc:case DM:return 16;case x2:return 536870912;default:return 16}default:return 16}}var ts=null,Pm=null,_c=null;function P2(){if(_c)return _c;var t,e=Pm,n=e.length,i,r="value"in ts?ts.value:ts.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return _c=r.slice(t,1<i?1-i:void 0)}function vc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cu(){return!0}function U0(){return!1}function ai(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cu:U0,this.isPropagationStopped=U0,this}return Pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cu)},persist:function(){},isPersistent:Cu}),e}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bm=ai(Ia),tu=Pt({},Ia,{view:0,detail:0}),XM=ai(tu),yd,xd,el,Sf=Pt({},tu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==el&&(el&&t.type==="mousemove"?(yd=t.screenX-el.screenX,xd=t.screenY-el.screenY):xd=yd=0,el=t),yd)},movementY:function(t){return"movementY"in t?t.movementY:xd}}),N0=ai(Sf),$M=Pt({},Sf,{dataTransfer:0}),jM=ai($M),YM=Pt({},tu,{relatedTarget:0}),Sd=ai(YM),qM=Pt({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),KM=ai(qM),ZM=Pt({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),QM=ai(ZM),JM=Pt({},Ia,{data:0}),F0=ai(JM),eE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nE[t])?!!e[t]:!1}function Lm(){return iE}var rE=Pt({},tu,{key:function(t){if(t.key){var e=eE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lm,charCode:function(t){return t.type==="keypress"?vc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sE=ai(rE),oE=Pt({},Sf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O0=ai(oE),aE=Pt({},tu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lm}),lE=ai(aE),uE=Pt({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),cE=ai(uE),fE=Pt({},Sf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dE=ai(fE),hE=[9,13,27,32],Dm=Cr&&"CompositionEvent"in window,xl=null;Cr&&"documentMode"in document&&(xl=document.documentMode);var pE=Cr&&"TextEvent"in window&&!xl,b2=Cr&&(!Dm||xl&&8<xl&&11>=xl),k0=" ",B0=!1;function L2(t,e){switch(t){case"keyup":return hE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D2(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zo=!1;function mE(t,e){switch(t){case"compositionend":return D2(e);case"keypress":return e.which!==32?null:(B0=!0,k0);case"textInput":return t=e.data,t===k0&&B0?null:t;default:return null}}function gE(t,e){if(zo)return t==="compositionend"||!Dm&&L2(t,e)?(t=P2(),_c=Pm=ts=null,zo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b2&&e.locale!=="ko"?null:e.data;default:return null}}var _E={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function z0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_E[t.type]:e==="textarea"}function I2(t,e,n,i){c2(i),e=Vc(e,"onChange"),0<e.length&&(n=new bm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Sl=null,Ol=null;function vE(t){W2(t,0)}function Mf(t){var e=Go(t);if(i2(e))return t}function yE(t,e){if(t==="change")return e}var U2=!1;if(Cr){var Md;if(Cr){var Ed="oninput"in document;if(!Ed){var V0=document.createElement("div");V0.setAttribute("oninput","return;"),Ed=typeof V0.oninput=="function"}Md=Ed}else Md=!1;U2=Md&&(!document.documentMode||9<document.documentMode)}function H0(){Sl&&(Sl.detachEvent("onpropertychange",N2),Ol=Sl=null)}function N2(t){if(t.propertyName==="value"&&Mf(Ol)){var e=[];I2(e,Ol,t,Tm(t)),p2(vE,e)}}function xE(t,e,n){t==="focusin"?(H0(),Sl=e,Ol=n,Sl.attachEvent("onpropertychange",N2)):t==="focusout"&&H0()}function SE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mf(Ol)}function ME(t,e){if(t==="click")return Mf(e)}function EE(t,e){if(t==="input"||t==="change")return Mf(e)}function TE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bi=typeof Object.is=="function"?Object.is:TE;function kl(t,e){if(Bi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Eh.call(e,r)||!Bi(t[r],e[r]))return!1}return!0}function G0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function W0(t,e){var n=G0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=G0(n)}}function F2(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?F2(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O2(){for(var t=window,e=Uc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uc(t.document)}return e}function Im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wE(t){var e=O2(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&F2(n.ownerDocument.documentElement,n)){if(i!==null&&Im(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=W0(n,s);var o=W0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AE=Cr&&"documentMode"in document&&11>=document.documentMode,Vo=null,Hh=null,Ml=null,Gh=!1;function X0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gh||Vo==null||Vo!==Uc(i)||(i=Vo,"selectionStart"in i&&Im(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ml&&kl(Ml,i)||(Ml=i,i=Vc(Hh,"onSelect"),0<i.length&&(e=new bm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vo)))}function Ru(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ho={animationend:Ru("Animation","AnimationEnd"),animationiteration:Ru("Animation","AnimationIteration"),animationstart:Ru("Animation","AnimationStart"),transitionend:Ru("Transition","TransitionEnd")},Td={},k2={};Cr&&(k2=document.createElement("div").style,"AnimationEvent"in window||(delete Ho.animationend.animation,delete Ho.animationiteration.animation,delete Ho.animationstart.animation),"TransitionEvent"in window||delete Ho.transitionend.transition);function Ef(t){if(Td[t])return Td[t];if(!Ho[t])return t;var e=Ho[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k2)return Td[t]=e[n];return t}var B2=Ef("animationend"),z2=Ef("animationiteration"),V2=Ef("animationstart"),H2=Ef("transitionend"),G2=new Map,$0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xs(t,e){G2.set(t,e),fo(e,[t])}for(var wd=0;wd<$0.length;wd++){var Ad=$0[wd],CE=Ad.toLowerCase(),RE=Ad[0].toUpperCase()+Ad.slice(1);xs(CE,"on"+RE)}xs(B2,"onAnimationEnd");xs(z2,"onAnimationIteration");xs(V2,"onAnimationStart");xs("dblclick","onDoubleClick");xs("focusin","onFocus");xs("focusout","onBlur");xs(H2,"onTransitionEnd");la("onMouseEnter",["mouseout","mouseover"]);la("onMouseLeave",["mouseout","mouseover"]);la("onPointerEnter",["pointerout","pointerover"]);la("onPointerLeave",["pointerout","pointerover"]);fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PE=new Set("cancel close invalid load scroll toggle".split(" ").concat(pl));function j0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,CM(i,e,void 0,t),t.currentTarget=null}function W2(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;j0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;j0(r,a,u),s=l}}}if(Fc)throw t=kh,Fc=!1,kh=null,t}function dt(t,e){var n=e[Yh];n===void 0&&(n=e[Yh]=new Set);var i=t+"__bubble";n.has(i)||(X2(e,t,2,!1),n.add(i))}function Cd(t,e,n){var i=0;e&&(i|=4),X2(n,t,i,e)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function Bl(t){if(!t[Pu]){t[Pu]=!0,Qv.forEach(function(n){n!=="selectionchange"&&(PE.has(n)||Cd(n,!1,t),Cd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pu]||(e[Pu]=!0,Cd("selectionchange",!1,e))}}function X2(t,e,n,i){switch(R2(e)){case 1:var r=GM;break;case 4:r=WM;break;default:r=Rm}n=r.bind(null,e,n,t),r=void 0,!Oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=zs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}p2(function(){var u=s,c=Tm(n),d=[];e:{var h=G2.get(t);if(h!==void 0){var p=bm,v=t;switch(t){case"keypress":if(vc(n)===0)break e;case"keydown":case"keyup":p=sE;break;case"focusin":v="focus",p=Sd;break;case"focusout":v="blur",p=Sd;break;case"beforeblur":case"afterblur":p=Sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=N0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=jM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=lE;break;case B2:case z2:case V2:p=KM;break;case H2:p=cE;break;case"scroll":p=XM;break;case"wheel":p=dE;break;case"copy":case"cut":case"paste":p=QM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=O0}var y=(e&4)!==0,m=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var _=u,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,f!==null&&(M=Il(_,f),M!=null&&y.push(zl(_,M,g)))),m)break;_=_.return}0<y.length&&(h=new p(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Nh&&(v=n.relatedTarget||n.fromElement)&&(zs(v)||v[Rr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?zs(v):null,v!==null&&(m=ho(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(y=N0,M="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=O0,M="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:Go(p),g=v==null?h:Go(v),h=new y(M,_+"leave",p,n,c),h.target=m,h.relatedTarget=g,M=null,zs(c)===u&&(y=new y(f,_+"enter",v,n,c),y.target=g,y.relatedTarget=m,M=y),m=M,p&&v)t:{for(y=p,f=v,_=0,g=y;g;g=vo(g))_++;for(g=0,M=f;M;M=vo(M))g++;for(;0<_-g;)y=vo(y),_--;for(;0<g-_;)f=vo(f),g--;for(;_--;){if(y===f||f!==null&&y===f.alternate)break t;y=vo(y),f=vo(f)}y=null}else y=null;p!==null&&Y0(d,h,p,y,!1),v!==null&&m!==null&&Y0(d,m,v,y,!0)}}e:{if(h=u?Go(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=yE;else if(z0(h))if(U2)P=EE;else{P=SE;var A=xE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=ME);if(P&&(P=P(t,u))){I2(d,P,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&bh(h,"number",h.value)}switch(A=u?Go(u):window,t){case"focusin":(z0(A)||A.contentEditable==="true")&&(Vo=A,Hh=u,Ml=null);break;case"focusout":Ml=Hh=Vo=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,X0(d,n,c);break;case"selectionchange":if(AE)break;case"keydown":case"keyup":X0(d,n,c)}var w;if(Dm)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else zo?L2(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(b2&&n.locale!=="ko"&&(zo||L!=="onCompositionStart"?L==="onCompositionEnd"&&zo&&(w=P2()):(ts=c,Pm="value"in ts?ts.value:ts.textContent,zo=!0)),A=Vc(u,L),0<A.length&&(L=new F0(L,t,null,n,c),d.push({event:L,listeners:A}),w?L.data=w:(w=D2(n),w!==null&&(L.data=w)))),(w=pE?mE(t,n):gE(t,n))&&(u=Vc(u,"onBeforeInput"),0<u.length&&(c=new F0("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=w))}W2(d,e)})}function zl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Il(t,n),s!=null&&i.unshift(zl(t,s,r)),s=Il(t,e),s!=null&&i.push(zl(t,s,r))),t=t.return}return i}function vo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Y0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Il(n,s),l!=null&&o.unshift(zl(n,l,a))):r||(l=Il(n,s),l!=null&&o.push(zl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bE=/\r\n?/g,LE=/\u0000|\uFFFD/g;function q0(t){return(typeof t=="string"?t:""+t).replace(bE,`
`).replace(LE,"")}function bu(t,e,n){if(e=q0(e),q0(t)!==e&&n)throw Error(ee(425))}function Hc(){}var Wh=null,Xh=null;function $h(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,DE=typeof clearTimeout=="function"?clearTimeout:void 0,K0=typeof Promise=="function"?Promise:void 0,IE=typeof queueMicrotask=="function"?queueMicrotask:typeof K0<"u"?function(t){return K0.resolve(null).then(t).catch(UE)}:jh;function UE(t){setTimeout(function(){throw t})}function Pd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Fl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Fl(e)}function os(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Z0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ua=Math.random().toString(36).slice(2),Ki="__reactFiber$"+Ua,Vl="__reactProps$"+Ua,Rr="__reactContainer$"+Ua,Yh="__reactEvents$"+Ua,NE="__reactListeners$"+Ua,FE="__reactHandles$"+Ua;function zs(t){var e=t[Ki];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rr]||n[Ki]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Z0(t);t!==null;){if(n=t[Ki])return n;t=Z0(t)}return e}t=n,n=t.parentNode}return null}function nu(t){return t=t[Ki]||t[Rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Go(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Tf(t){return t[Vl]||null}var qh=[],Wo=-1;function Ss(t){return{current:t}}function mt(t){0>Wo||(t.current=qh[Wo],qh[Wo]=null,Wo--)}function ft(t,e){Wo++,qh[Wo]=t.current,t.current=e}var ms={},Sn=Ss(ms),Fn=Ss(!1),no=ms;function ua(t,e){var n=t.type.contextTypes;if(!n)return ms;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function On(t){return t=t.childContextTypes,t!=null}function Gc(){mt(Fn),mt(Sn)}function Q0(t,e,n){if(Sn.current!==ms)throw Error(ee(168));ft(Sn,e),ft(Fn,n)}function $2(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,xM(t)||"Unknown",r));return Pt({},n,i)}function Wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ms,no=Sn.current,ft(Sn,t),ft(Fn,Fn.current),!0}function J0(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=$2(t,e,no),i.__reactInternalMemoizedMergedChildContext=t,mt(Fn),mt(Sn),ft(Sn,t)):mt(Fn),ft(Fn,n)}var yr=null,wf=!1,bd=!1;function j2(t){yr===null?yr=[t]:yr.push(t)}function OE(t){wf=!0,j2(t)}function Ms(){if(!bd&&yr!==null){bd=!0;var t=0,e=lt;try{var n=yr;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yr=null,wf=!1}catch(r){throw yr!==null&&(yr=yr.slice(t+1)),v2(wm,Ms),r}finally{lt=e,bd=!1}}return null}var Xo=[],$o=0,Xc=null,$c=0,mi=[],gi=0,io=null,Mr=1,Er="";function Is(t,e){Xo[$o++]=$c,Xo[$o++]=Xc,Xc=t,$c=e}function Y2(t,e,n){mi[gi++]=Mr,mi[gi++]=Er,mi[gi++]=io,io=t;var i=Mr;t=Er;var r=32-Ni(i)-1;i&=~(1<<r),n+=1;var s=32-Ni(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mr=1<<32-Ni(e)+r|n<<r|i,Er=s+t}else Mr=1<<s|n<<r|i,Er=t}function Um(t){t.return!==null&&(Is(t,1),Y2(t,1,0))}function Nm(t){for(;t===Xc;)Xc=Xo[--$o],Xo[$o]=null,$c=Xo[--$o],Xo[$o]=null;for(;t===io;)io=mi[--gi],mi[gi]=null,Er=mi[--gi],mi[gi]=null,Mr=mi[--gi],mi[gi]=null}var Jn=null,Qn=null,vt=!1,Ii=null;function q2(t,e){var n=_i(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function e_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jn=t,Qn=os(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jn=t,Qn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=io!==null?{id:Mr,overflow:Er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_i(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jn=t,Qn=null,!0):!1;default:return!1}}function Kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zh(t){if(vt){var e=Qn;if(e){var n=e;if(!e_(t,e)){if(Kh(t))throw Error(ee(418));e=os(n.nextSibling);var i=Jn;e&&e_(t,e)?q2(i,n):(t.flags=t.flags&-4097|2,vt=!1,Jn=t)}}else{if(Kh(t))throw Error(ee(418));t.flags=t.flags&-4097|2,vt=!1,Jn=t}}}function t_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jn=t}function Lu(t){if(t!==Jn)return!1;if(!vt)return t_(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$h(t.type,t.memoizedProps)),e&&(e=Qn)){if(Kh(t))throw K2(),Error(ee(418));for(;e;)q2(t,e),e=os(e.nextSibling)}if(t_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qn=os(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qn=null}}else Qn=Jn?os(t.stateNode.nextSibling):null;return!0}function K2(){for(var t=Qn;t;)t=os(t.nextSibling)}function ca(){Qn=Jn=null,vt=!1}function Fm(t){Ii===null?Ii=[t]:Ii.push(t)}var kE=Or.ReactCurrentBatchConfig;function tl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Du(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function n_(t){var e=t._init;return e(t._payload)}function Z2(t){function e(f,_){if(t){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=cs(f,_),f.index=0,f.sibling=null,f}function s(f,_,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,g,M){return _===null||_.tag!==6?(_=Od(g,f.mode,M),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,M){var P=g.type;return P===Bo?c(f,_,g.props.children,M,g.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Yr&&n_(P)===_.type)?(M=r(_,g.props),M.ref=tl(f,_,g),M.return=f,M):(M=wc(g.type,g.key,g.props,null,f.mode,M),M.ref=tl(f,_,g),M.return=f,M)}function u(f,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=kd(g,f.mode,M),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function c(f,_,g,M,P){return _===null||_.tag!==7?(_=Ys(g,f.mode,M,P),_.return=f,_):(_=r(_,g),_.return=f,_)}function d(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Od(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Su:return g=wc(_.type,_.key,_.props,null,f.mode,g),g.ref=tl(f,null,_),g.return=f,g;case ko:return _=kd(_,f.mode,g),_.return=f,_;case Yr:var M=_._init;return d(f,M(_._payload),g)}if(dl(_)||Ka(_))return _=Ys(_,f.mode,g,null),_.return=f,_;Du(f,_)}return null}function h(f,_,g,M){var P=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(f,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Su:return g.key===P?l(f,_,g,M):null;case ko:return g.key===P?u(f,_,g,M):null;case Yr:return P=g._init,h(f,_,P(g._payload),M)}if(dl(g)||Ka(g))return P!==null?null:c(f,_,g,M,null);Du(f,g)}return null}function p(f,_,g,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(g)||null,a(_,f,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Su:return f=f.get(M.key===null?g:M.key)||null,l(_,f,M,P);case ko:return f=f.get(M.key===null?g:M.key)||null,u(_,f,M,P);case Yr:var A=M._init;return p(f,_,g,A(M._payload),P)}if(dl(M)||Ka(M))return f=f.get(g)||null,c(_,f,M,P,null);Du(_,M)}return null}function v(f,_,g,M){for(var P=null,A=null,w=_,L=_=0,T=null;w!==null&&L<g.length;L++){w.index>L?(T=w,w=null):T=w.sibling;var x=h(f,w,g[L],M);if(x===null){w===null&&(w=T);break}t&&w&&x.alternate===null&&e(f,w),_=s(x,_,L),A===null?P=x:A.sibling=x,A=x,w=T}if(L===g.length)return n(f,w),vt&&Is(f,L),P;if(w===null){for(;L<g.length;L++)w=d(f,g[L],M),w!==null&&(_=s(w,_,L),A===null?P=w:A.sibling=w,A=w);return vt&&Is(f,L),P}for(w=i(f,w);L<g.length;L++)T=p(w,f,L,g[L],M),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?L:T.key),_=s(T,_,L),A===null?P=T:A.sibling=T,A=T);return t&&w.forEach(function(b){return e(f,b)}),vt&&Is(f,L),P}function y(f,_,g,M){var P=Ka(g);if(typeof P!="function")throw Error(ee(150));if(g=P.call(g),g==null)throw Error(ee(151));for(var A=P=null,w=_,L=_=0,T=null,x=g.next();w!==null&&!x.done;L++,x=g.next()){w.index>L?(T=w,w=null):T=w.sibling;var b=h(f,w,x.value,M);if(b===null){w===null&&(w=T);break}t&&w&&b.alternate===null&&e(f,w),_=s(b,_,L),A===null?P=b:A.sibling=b,A=b,w=T}if(x.done)return n(f,w),vt&&Is(f,L),P;if(w===null){for(;!x.done;L++,x=g.next())x=d(f,x.value,M),x!==null&&(_=s(x,_,L),A===null?P=x:A.sibling=x,A=x);return vt&&Is(f,L),P}for(w=i(f,w);!x.done;L++,x=g.next())x=p(w,f,L,x.value,M),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?L:x.key),_=s(x,_,L),A===null?P=x:A.sibling=x,A=x);return t&&w.forEach(function(H){return e(f,H)}),vt&&Is(f,L),P}function m(f,_,g,M){if(typeof g=="object"&&g!==null&&g.type===Bo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Su:e:{for(var P=g.key,A=_;A!==null;){if(A.key===P){if(P=g.type,P===Bo){if(A.tag===7){n(f,A.sibling),_=r(A,g.props.children),_.return=f,f=_;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Yr&&n_(P)===A.type){n(f,A.sibling),_=r(A,g.props),_.ref=tl(f,A,g),_.return=f,f=_;break e}n(f,A);break}else e(f,A);A=A.sibling}g.type===Bo?(_=Ys(g.props.children,f.mode,M,g.key),_.return=f,f=_):(M=wc(g.type,g.key,g.props,null,f.mode,M),M.ref=tl(f,_,g),M.return=f,f=M)}return o(f);case ko:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=kd(g,f.mode,M),_.return=f,f=_}return o(f);case Yr:return A=g._init,m(f,_,A(g._payload),M)}if(dl(g))return v(f,_,g,M);if(Ka(g))return y(f,_,g,M);Du(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,g),_.return=f,f=_):(n(f,_),_=Od(g,f.mode,M),_.return=f,f=_),o(f)):n(f,_)}return m}var fa=Z2(!0),Q2=Z2(!1),jc=Ss(null),Yc=null,jo=null,Om=null;function km(){Om=jo=Yc=null}function Bm(t){var e=jc.current;mt(jc),t._currentValue=e}function Qh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function na(t,e){Yc=t,Om=jo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Un=!0),t.firstContext=null)}function Mi(t){var e=t._currentValue;if(Om!==t)if(t={context:t,memoizedValue:e,next:null},jo===null){if(Yc===null)throw Error(ee(308));jo=t,Yc.dependencies={lanes:0,firstContext:t}}else jo=jo.next=t;return e}var Vs=null;function zm(t){Vs===null?Vs=[t]:Vs.push(t)}function J2(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,zm(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pr(t,i)}function Pr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qr=!1;function Vm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ey(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function as(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pr(t,n)}return r=i.interleaved,r===null?(e.next=e,zm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pr(t,n)}function yc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Am(t,n)}}function i_(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qc(t,e,n,i){var r=t.updateQueue;qr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=Pt({},d,h);break e;case 2:qr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);so|=o,t.lanes=o,t.memoizedState=d}}function r_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var iu={},tr=Ss(iu),Hl=Ss(iu),Gl=Ss(iu);function Hs(t){if(t===iu)throw Error(ee(174));return t}function Hm(t,e){switch(ft(Gl,e),ft(Hl,t),ft(tr,iu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Dh(e,t)}mt(tr),ft(tr,e)}function da(){mt(tr),mt(Hl),mt(Gl)}function ty(t){Hs(Gl.current);var e=Hs(tr.current),n=Dh(e,t.type);e!==n&&(ft(Hl,t),ft(tr,n))}function Gm(t){Hl.current===t&&(mt(tr),mt(Hl))}var Tt=Ss(0);function Kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ld=[];function Wm(){for(var t=0;t<Ld.length;t++)Ld[t]._workInProgressVersionPrimary=null;Ld.length=0}var xc=Or.ReactCurrentDispatcher,Dd=Or.ReactCurrentBatchConfig,ro=0,Ct=null,Xt=null,nn=null,Zc=!1,El=!1,Wl=0,BE=0;function pn(){throw Error(ee(321))}function Xm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bi(t[n],e[n]))return!1;return!0}function $m(t,e,n,i,r,s){if(ro=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xc.current=t===null||t.memoizedState===null?GE:WE,t=n(i,r),El){s=0;do{if(El=!1,Wl=0,25<=s)throw Error(ee(301));s+=1,nn=Xt=null,e.updateQueue=null,xc.current=XE,t=n(i,r)}while(El)}if(xc.current=Qc,e=Xt!==null&&Xt.next!==null,ro=0,nn=Xt=Ct=null,Zc=!1,e)throw Error(ee(300));return t}function jm(){var t=Wl!==0;return Wl=0,t}function ji(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Ct.memoizedState=nn=t:nn=nn.next=t,nn}function Ei(){if(Xt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var e=nn===null?Ct.memoizedState:nn.next;if(e!==null)nn=e,Xt=t;else{if(t===null)throw Error(ee(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},nn===null?Ct.memoizedState=nn=t:nn=nn.next=t}return nn}function Xl(t,e){return typeof e=="function"?e(t):e}function Id(t){var e=Ei(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=Xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ro&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ct.lanes|=c,so|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Bi(i,e.memoizedState)||(Un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,so|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ud(t){var e=Ei(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Bi(s,e.memoizedState)||(Un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ny(){}function iy(t,e){var n=Ct,i=Ei(),r=e(),s=!Bi(i.memoizedState,r);if(s&&(i.memoizedState=r,Un=!0),i=i.queue,Ym(oy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||nn!==null&&nn.memoizedState.tag&1){if(n.flags|=2048,$l(9,sy.bind(null,n,i,r,e),void 0,null),on===null)throw Error(ee(349));ro&30||ry(n,e,r)}return r}function ry(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sy(t,e,n,i){e.value=n,e.getSnapshot=i,ay(e)&&ly(t)}function oy(t,e,n){return n(function(){ay(e)&&ly(t)})}function ay(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bi(t,n)}catch{return!0}}function ly(t){var e=Pr(t,1);e!==null&&Fi(e,t,1,-1)}function s_(t){var e=ji();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xl,lastRenderedState:t},e.queue=t,t=t.dispatch=HE.bind(null,Ct,t),[e.memoizedState,t]}function $l(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function uy(){return Ei().memoizedState}function Sc(t,e,n,i){var r=ji();Ct.flags|=t,r.memoizedState=$l(1|e,n,void 0,i===void 0?null:i)}function Af(t,e,n,i){var r=Ei();i=i===void 0?null:i;var s=void 0;if(Xt!==null){var o=Xt.memoizedState;if(s=o.destroy,i!==null&&Xm(i,o.deps)){r.memoizedState=$l(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=$l(1|e,n,s,i)}function o_(t,e){return Sc(8390656,8,t,e)}function Ym(t,e){return Af(2048,8,t,e)}function cy(t,e){return Af(4,2,t,e)}function fy(t,e){return Af(4,4,t,e)}function dy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hy(t,e,n){return n=n!=null?n.concat([t]):null,Af(4,4,dy.bind(null,e,t),n)}function qm(){}function py(t,e){var n=Ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function my(t,e){var n=Ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function gy(t,e,n){return ro&21?(Bi(n,e)||(n=S2(),Ct.lanes|=n,so|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Un=!0),t.memoizedState=n)}function zE(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Dd.transition;Dd.transition={};try{t(!1),e()}finally{lt=n,Dd.transition=i}}function _y(){return Ei().memoizedState}function VE(t,e,n){var i=us(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vy(t))yy(e,n);else if(n=J2(t,e,n,i),n!==null){var r=Cn();Fi(n,t,i,r),xy(n,e,i)}}function HE(t,e,n){var i=us(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vy(t))yy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Bi(a,o)){var l=e.interleaved;l===null?(r.next=r,zm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=J2(t,e,r,i),n!==null&&(r=Cn(),Fi(n,t,i,r),xy(n,e,i))}}function vy(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function yy(t,e){El=Zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Am(t,n)}}var Qc={readContext:Mi,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},GE={readContext:Mi,useCallback:function(t,e){return ji().memoizedState=[t,e===void 0?null:e],t},useContext:Mi,useEffect:o_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4194308,4,dy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sc(4,2,t,e)},useMemo:function(t,e){var n=ji();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ji();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=VE.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=ji();return t={current:t},e.memoizedState=t},useState:s_,useDebugValue:qm,useDeferredValue:function(t){return ji().memoizedState=t},useTransition:function(){var t=s_(!1),e=t[0];return t=zE.bind(null,t[1]),ji().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=ji();if(vt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),on===null)throw Error(ee(349));ro&30||ry(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,o_(oy.bind(null,i,s,t),[t]),i.flags|=2048,$l(9,sy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ji(),e=on.identifierPrefix;if(vt){var n=Er,i=Mr;n=(i&~(1<<32-Ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WE={readContext:Mi,useCallback:py,useContext:Mi,useEffect:Ym,useImperativeHandle:hy,useInsertionEffect:cy,useLayoutEffect:fy,useMemo:my,useReducer:Id,useRef:uy,useState:function(){return Id(Xl)},useDebugValue:qm,useDeferredValue:function(t){var e=Ei();return gy(e,Xt.memoizedState,t)},useTransition:function(){var t=Id(Xl)[0],e=Ei().memoizedState;return[t,e]},useMutableSource:ny,useSyncExternalStore:iy,useId:_y,unstable_isNewReconciler:!1},XE={readContext:Mi,useCallback:py,useContext:Mi,useEffect:Ym,useImperativeHandle:hy,useInsertionEffect:cy,useLayoutEffect:fy,useMemo:my,useReducer:Ud,useRef:uy,useState:function(){return Ud(Xl)},useDebugValue:qm,useDeferredValue:function(t){var e=Ei();return Xt===null?e.memoizedState=t:gy(e,Xt.memoizedState,t)},useTransition:function(){var t=Ud(Xl)[0],e=Ei().memoizedState;return[t,e]},useMutableSource:ny,useSyncExternalStore:iy,useId:_y,unstable_isNewReconciler:!1};function Li(t,e){if(t&&t.defaultProps){e=Pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cf={isMounted:function(t){return(t=t._reactInternals)?ho(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Cn(),r=us(t),s=Ar(i,r);s.payload=e,n!=null&&(s.callback=n),e=as(t,s,r),e!==null&&(Fi(e,t,r,i),yc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Cn(),r=us(t),s=Ar(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=as(t,s,r),e!==null&&(Fi(e,t,r,i),yc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Cn(),i=us(t),r=Ar(n,i);r.tag=2,e!=null&&(r.callback=e),e=as(t,r,i),e!==null&&(Fi(e,t,i,n),yc(e,t,i))}};function a_(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!kl(n,i)||!kl(r,s):!0}function Sy(t,e,n){var i=!1,r=ms,s=e.contextType;return typeof s=="object"&&s!==null?s=Mi(s):(r=On(e)?no:Sn.current,i=e.contextTypes,s=(i=i!=null)?ua(t,r):ms),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cf,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function l_(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cf.enqueueReplaceState(e,e.state,null)}function ep(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Mi(s):(s=On(e)?no:Sn.current,r.context=ua(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cf.enqueueReplaceState(r,r.state,null),qc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ha(t,e){try{var n="",i=e;do n+=yM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Nd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $E=typeof WeakMap=="function"?WeakMap:Map;function My(t,e,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ef||(ef=!0,fp=i),tp(t,e)},n}function Ey(t,e,n){n=Ar(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){tp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){tp(t,e),typeof i!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function u_(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $E;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oT.bind(null,t,e,n),e.then(t,t))}function c_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function f_(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ar(-1,1),e.tag=2,as(n,e,1))),n.lanes|=1),t)}var jE=Or.ReactCurrentOwner,Un=!1;function An(t,e,n,i){e.child=t===null?Q2(e,null,n,i):fa(e,t.child,n,i)}function d_(t,e,n,i,r){n=n.render;var s=e.ref;return na(e,r),i=$m(t,e,n,i,s,r),n=jm(),t!==null&&!Un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,br(t,e,r)):(vt&&n&&Um(e),e.flags|=1,An(t,e,i,r),e.child)}function h_(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ig(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ty(t,e,s,i,r)):(t=wc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:kl,n(o,i)&&t.ref===e.ref)return br(t,e,r)}return e.flags|=1,t=cs(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ty(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(kl(s,i)&&t.ref===e.ref)if(Un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Un=!0);else return e.lanes=t.lanes,br(t,e,r)}return np(t,e,n,i,r)}function wy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(qo,Kn),Kn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(qo,Kn),Kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(qo,Kn),Kn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(qo,Kn),Kn|=i;return An(t,e,r,n),e.child}function Ay(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function np(t,e,n,i,r){var s=On(n)?no:Sn.current;return s=ua(e,s),na(e,r),n=$m(t,e,n,i,s,r),i=jm(),t!==null&&!Un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,br(t,e,r)):(vt&&i&&Um(e),e.flags|=1,An(t,e,n,r),e.child)}function p_(t,e,n,i,r){if(On(n)){var s=!0;Wc(e)}else s=!1;if(na(e,r),e.stateNode===null)Mc(t,e),Sy(e,n,i),ep(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mi(u):(u=On(n)?no:Sn.current,u=ua(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&l_(e,o,i,u),qr=!1;var h=e.memoizedState;o.state=h,qc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Fn.current||qr?(typeof c=="function"&&(Jh(e,n,c,i),l=e.memoizedState),(a=qr||a_(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ey(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Li(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mi(l):(l=On(n)?no:Sn.current,l=ua(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&l_(e,o,i,l),qr=!1,h=e.memoizedState,o.state=h,qc(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||Fn.current||qr?(typeof p=="function"&&(Jh(e,n,p,i),v=e.memoizedState),(u=qr||a_(e,n,u,i,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return ip(t,e,n,i,s,r)}function ip(t,e,n,i,r,s){Ay(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&J0(e,n,!1),br(t,e,s);i=e.stateNode,jE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=fa(e,t.child,null,s),e.child=fa(e,null,a,s)):An(t,e,a,s),e.memoizedState=i.state,r&&J0(e,n,!0),e.child}function Cy(t){var e=t.stateNode;e.pendingContext?Q0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Q0(t,e.context,!1),Hm(t,e.containerInfo)}function m_(t,e,n,i,r){return ca(),Fm(r),e.flags|=256,An(t,e,n,i),e.child}var rp={dehydrated:null,treeContext:null,retryLane:0};function sp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ry(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(Tt,r&1),t===null)return Zh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bf(o,i,0,null),t=Ys(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sp(n),e.memoizedState=rp,t):Km(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return YE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=cs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=cs(a,s):(s=Ys(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?sp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rp,i}return s=t.child,t=s.sibling,i=cs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Km(t,e){return e=bf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Iu(t,e,n,i){return i!==null&&Fm(i),fa(e,t.child,null,n),t=Km(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Nd(Error(ee(422))),Iu(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=bf({mode:"visible",children:i.children},r,0,null),s=Ys(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fa(e,t.child,null,o),e.child.memoizedState=sp(o),e.memoizedState=rp,s);if(!(e.mode&1))return Iu(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Nd(s,i,void 0),Iu(t,e,o,i)}if(a=(o&t.childLanes)!==0,Un||a){if(i=on,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pr(t,r),Fi(i,t,r,-1))}return ng(),i=Nd(Error(ee(421))),Iu(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=aT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Qn=os(r.nextSibling),Jn=e,vt=!0,Ii=null,t!==null&&(mi[gi++]=Mr,mi[gi++]=Er,mi[gi++]=io,Mr=t.id,Er=t.overflow,io=e),e=Km(e,i.children),e.flags|=4096,e)}function g_(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Qh(t.return,e,n)}function Fd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Py(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(An(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&g_(t,n,e);else if(t.tag===19)g_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fd(e,!0,n,null,s);break;case"together":Fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),so|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=cs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qE(t,e,n){switch(e.tag){case 3:Cy(e),ca();break;case 5:ty(e);break;case 1:On(e.type)&&Wc(e);break;case 4:Hm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?Ry(t,e,n):(ft(Tt,Tt.current&1),t=br(t,e,n),t!==null?t.sibling:null);ft(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Py(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,wy(t,e,n)}return br(t,e,n)}var by,op,Ly,Dy;by=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};op=function(){};Ly=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hs(tr.current);var s=null;switch(n){case"input":r=Rh(t,r),i=Rh(t,i),s=[];break;case"select":r=Pt({},r,{value:void 0}),i=Pt({},i,{value:void 0}),s=[];break;case"textarea":r=Lh(t,r),i=Lh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hc)}Ih(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ll.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ll.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&dt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Dy=function(t,e,n,i){n!==i&&(e.flags|=4)};function nl(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function mn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function KE(t,e,n){var i=e.pendingProps;switch(Nm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(e),null;case 1:return On(e.type)&&Gc(),mn(e),null;case 3:return i=e.stateNode,da(),mt(Fn),mt(Sn),Wm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Lu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ii!==null&&(pp(Ii),Ii=null))),op(t,e),mn(e),null;case 5:Gm(e);var r=Hs(Gl.current);if(n=e.type,t!==null&&e.stateNode!=null)Ly(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return mn(e),null}if(t=Hs(tr.current),Lu(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ki]=e,i[Vl]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<pl.length;r++)dt(pl[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":w0(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":C0(i,s),dt("invalid",i)}Ih(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&bu(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&bu(i.textContent,a,t),r=["children",""+a]):Ll.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(n){case"input":Mu(i),A0(i,s,!0);break;case"textarea":Mu(i),R0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=o2(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ki]=e,t[Vl]=i,by(t,e,!1,!1),e.stateNode=t;e:{switch(o=Uh(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<pl.length;r++)dt(pl[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":w0(t,i),r=Rh(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Pt({},i,{value:void 0}),dt("invalid",t);break;case"textarea":C0(t,i),r=Lh(t,i),dt("invalid",t);break;default:r=i}Ih(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?u2(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&a2(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Dl(t,l):typeof l=="number"&&Dl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ll.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&xm(t,s,l,o))}switch(n){case"input":Mu(t),A0(t,i,!1);break;case"textarea":Mu(t),R0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ps(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Qo(t,!!i.multiple,s,!1):i.defaultValue!=null&&Qo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mn(e),null;case 6:if(t&&e.stateNode!=null)Dy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Hs(Gl.current),Hs(tr.current),Lu(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ki]=e,(s=i.nodeValue!==n)&&(t=Jn,t!==null))switch(t.tag){case 3:bu(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bu(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ki]=e,e.stateNode=i}return mn(e),null;case 13:if(mt(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Qn!==null&&e.mode&1&&!(e.flags&128))K2(),ca(),e.flags|=98560,s=!1;else if(s=Lu(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Ki]=e}else ca(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mn(e),s=!1}else Ii!==null&&(pp(Ii),Ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?$t===0&&($t=3):ng())),e.updateQueue!==null&&(e.flags|=4),mn(e),null);case 4:return da(),op(t,e),t===null&&Bl(e.stateNode.containerInfo),mn(e),null;case 10:return Bm(e.type._context),mn(e),null;case 17:return On(e.type)&&Gc(),mn(e),null;case 19:if(mt(Tt),s=e.memoizedState,s===null)return mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)nl(s,!1);else{if($t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kc(t),o!==null){for(e.flags|=128,nl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ft()>pa&&(e.flags|=128,i=!0,nl(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),nl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return mn(e),null}else 2*Ft()-s.renderingStartTime>pa&&n!==1073741824&&(e.flags|=128,i=!0,nl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,n=Tt.current,ft(Tt,i?n&1|2:n&1),e):(mn(e),null);case 22:case 23:return tg(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Kn&1073741824&&(mn(e),e.subtreeFlags&6&&(e.flags|=8192)):mn(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function ZE(t,e){switch(Nm(e),e.tag){case 1:return On(e.type)&&Gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return da(),mt(Fn),mt(Sn),Wm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gm(e),null;case 13:if(mt(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ca()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(Tt),null;case 4:return da(),null;case 10:return Bm(e.type._context),null;case 22:case 23:return tg(),null;case 24:return null;default:return null}}var Uu=!1,yn=!1,QE=typeof WeakSet=="function"?WeakSet:Set,he=null;function Yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){It(t,e,i)}else n.current=null}function ap(t,e,n){try{n()}catch(i){It(t,e,i)}}var __=!1;function JE(t,e){if(Wh=Bc,t=O2(),Im(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xh={focusedElem:t,selectionRange:n},Bc=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Li(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){It(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return v=__,__=!1,v}function Tl(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ap(e,n,s)}r=r.next}while(r!==i)}}function Rf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function lp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Iy(t){var e=t.alternate;e!==null&&(t.alternate=null,Iy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ki],delete e[Vl],delete e[Yh],delete e[NE],delete e[FE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Uy(t){return t.tag===5||t.tag===3||t.tag===4}function v_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Uy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function up(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hc));else if(i!==4&&(t=t.child,t!==null))for(up(t,e,n),t=t.sibling;t!==null;)up(t,e,n),t=t.sibling}function cp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(cp(t,e,n),t=t.sibling;t!==null;)cp(t,e,n),t=t.sibling}var un=null,Di=!1;function Br(t,e,n){for(n=n.child;n!==null;)Ny(t,e,n),n=n.sibling}function Ny(t,e,n){if(er&&typeof er.onCommitFiberUnmount=="function")try{er.onCommitFiberUnmount(xf,n)}catch{}switch(n.tag){case 5:yn||Yo(n,e);case 6:var i=un,r=Di;un=null,Br(t,e,n),un=i,Di=r,un!==null&&(Di?(t=un,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):un.removeChild(n.stateNode));break;case 18:un!==null&&(Di?(t=un,n=n.stateNode,t.nodeType===8?Pd(t.parentNode,n):t.nodeType===1&&Pd(t,n),Fl(t)):Pd(un,n.stateNode));break;case 4:i=un,r=Di,un=n.stateNode.containerInfo,Di=!0,Br(t,e,n),un=i,Di=r;break;case 0:case 11:case 14:case 15:if(!yn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ap(n,e,o),r=r.next}while(r!==i)}Br(t,e,n);break;case 1:if(!yn&&(Yo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){It(n,e,a)}Br(t,e,n);break;case 21:Br(t,e,n);break;case 22:n.mode&1?(yn=(i=yn)||n.memoizedState!==null,Br(t,e,n),yn=i):Br(t,e,n);break;default:Br(t,e,n)}}function y_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new QE),e.forEach(function(i){var r=lT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ci(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:un=a.stateNode,Di=!1;break e;case 3:un=a.stateNode.containerInfo,Di=!0;break e;case 4:un=a.stateNode.containerInfo,Di=!0;break e}a=a.return}if(un===null)throw Error(ee(160));Ny(s,o,r),un=null,Di=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){It(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fy(e,t),e=e.sibling}function Fy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ci(e,t),Wi(t),i&4){try{Tl(3,t,t.return),Rf(3,t)}catch(y){It(t,t.return,y)}try{Tl(5,t,t.return)}catch(y){It(t,t.return,y)}}break;case 1:Ci(e,t),Wi(t),i&512&&n!==null&&Yo(n,n.return);break;case 5:if(Ci(e,t),Wi(t),i&512&&n!==null&&Yo(n,n.return),t.flags&32){var r=t.stateNode;try{Dl(r,"")}catch(y){It(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&r2(r,s),Uh(a,o);var u=Uh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?u2(r,d):c==="dangerouslySetInnerHTML"?a2(r,d):c==="children"?Dl(r,d):xm(r,c,d,u)}switch(a){case"input":Ph(r,s);break;case"textarea":s2(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Qo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Qo(r,!!s.multiple,s.defaultValue,!0):Qo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Vl]=s}catch(y){It(t,t.return,y)}}break;case 6:if(Ci(e,t),Wi(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){It(t,t.return,y)}}break;case 3:if(Ci(e,t),Wi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fl(e.containerInfo)}catch(y){It(t,t.return,y)}break;case 4:Ci(e,t),Wi(t);break;case 13:Ci(e,t),Wi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Jm=Ft())),i&4&&y_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(yn=(u=yn)||c,Ci(e,t),yn=u):Ci(e,t),Wi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(he=t,c=t.child;c!==null;){for(d=he=c;he!==null;){switch(h=he,p=h.child,h.tag){case 0:case 11:case 14:case 15:Tl(4,h,h.return);break;case 1:Yo(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){It(i,n,y)}}break;case 5:Yo(h,h.return);break;case 22:if(h.memoizedState!==null){S_(d);continue}}p!==null?(p.return=h,he=p):S_(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=l2("display",o))}catch(y){It(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){It(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ci(e,t),Wi(t),i&4&&y_(t);break;case 21:break;default:Ci(e,t),Wi(t)}}function Wi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Uy(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Dl(r,""),i.flags&=-33);var s=v_(t);cp(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=v_(t);up(t,a,o);break;default:throw Error(ee(161))}}catch(l){It(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eT(t,e,n){he=t,Oy(t)}function Oy(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Uu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||yn;a=Uu;var u=yn;if(Uu=o,(yn=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?M_(r):l!==null?(l.return=o,he=l):M_(r);for(;s!==null;)he=s,Oy(s),s=s.sibling;he=r,Uu=a,yn=u}x_(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):x_(t)}}function x_(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yn||Rf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!yn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Li(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&r_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}r_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Fl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}yn||e.flags&512&&lp(e)}catch(h){It(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function S_(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function M_(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rf(4,e)}catch(l){It(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){It(e,r,l)}}var s=e.return;try{lp(e)}catch(l){It(e,s,l)}break;case 5:var o=e.return;try{lp(e)}catch(l){It(e,o,l)}}}catch(l){It(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var tT=Math.ceil,Jc=Or.ReactCurrentDispatcher,Zm=Or.ReactCurrentOwner,Si=Or.ReactCurrentBatchConfig,qe=0,on=null,Vt=null,cn=0,Kn=0,qo=Ss(0),$t=0,jl=null,so=0,Pf=0,Qm=0,wl=null,Dn=null,Jm=0,pa=1/0,vr=null,ef=!1,fp=null,ls=null,Nu=!1,ns=null,tf=0,Al=0,dp=null,Ec=-1,Tc=0;function Cn(){return qe&6?Ft():Ec!==-1?Ec:Ec=Ft()}function us(t){return t.mode&1?qe&2&&cn!==0?cn&-cn:kE.transition!==null?(Tc===0&&(Tc=S2()),Tc):(t=lt,t!==0||(t=window.event,t=t===void 0?16:R2(t.type)),t):1}function Fi(t,e,n,i){if(50<Al)throw Al=0,dp=null,Error(ee(185));eu(t,n,i),(!(qe&2)||t!==on)&&(t===on&&(!(qe&2)&&(Pf|=n),$t===4&&Qr(t,cn)),kn(t,i),n===1&&qe===0&&!(e.mode&1)&&(pa=Ft()+500,wf&&Ms()))}function kn(t,e){var n=t.callbackNode;kM(t,e);var i=kc(t,t===on?cn:0);if(i===0)n!==null&&L0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&L0(n),e===1)t.tag===0?OE(E_.bind(null,t)):j2(E_.bind(null,t)),IE(function(){!(qe&6)&&Ms()}),n=null;else{switch(M2(i)){case 1:n=wm;break;case 4:n=y2;break;case 16:n=Oc;break;case 536870912:n=x2;break;default:n=Oc}n=Xy(n,ky.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ky(t,e){if(Ec=-1,Tc=0,qe&6)throw Error(ee(327));var n=t.callbackNode;if(ia()&&t.callbackNode!==n)return null;var i=kc(t,t===on?cn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=nf(t,i);else{e=i;var r=qe;qe|=2;var s=zy();(on!==t||cn!==e)&&(vr=null,pa=Ft()+500,js(t,e));do try{rT();break}catch(a){By(t,a)}while(!0);km(),Jc.current=s,qe=r,Vt!==null?e=0:(on=null,cn=0,e=$t)}if(e!==0){if(e===2&&(r=Bh(t),r!==0&&(i=r,e=hp(t,r))),e===1)throw n=jl,js(t,0),Qr(t,i),kn(t,Ft()),n;if(e===6)Qr(t,i);else{if(r=t.current.alternate,!(i&30)&&!nT(r)&&(e=nf(t,i),e===2&&(s=Bh(t),s!==0&&(i=s,e=hp(t,s))),e===1))throw n=jl,js(t,0),Qr(t,i),kn(t,Ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Us(t,Dn,vr);break;case 3:if(Qr(t,i),(i&130023424)===i&&(e=Jm+500-Ft(),10<e)){if(kc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=jh(Us.bind(null,t,Dn,vr),e);break}Us(t,Dn,vr);break;case 4:if(Qr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ni(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tT(i/1960))-i,10<i){t.timeoutHandle=jh(Us.bind(null,t,Dn,vr),i);break}Us(t,Dn,vr);break;case 5:Us(t,Dn,vr);break;default:throw Error(ee(329))}}}return kn(t,Ft()),t.callbackNode===n?ky.bind(null,t):null}function hp(t,e){var n=wl;return t.current.memoizedState.isDehydrated&&(js(t,e).flags|=256),t=nf(t,e),t!==2&&(e=Dn,Dn=n,e!==null&&pp(e)),t}function pp(t){Dn===null?Dn=t:Dn.push.apply(Dn,t)}function nT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qr(t,e){for(e&=~Qm,e&=~Pf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ni(e),i=1<<n;t[n]=-1,e&=~i}}function E_(t){if(qe&6)throw Error(ee(327));ia();var e=kc(t,0);if(!(e&1))return kn(t,Ft()),null;var n=nf(t,e);if(t.tag!==0&&n===2){var i=Bh(t);i!==0&&(e=i,n=hp(t,i))}if(n===1)throw n=jl,js(t,0),Qr(t,e),kn(t,Ft()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Us(t,Dn,vr),kn(t,Ft()),null}function eg(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(pa=Ft()+500,wf&&Ms())}}function oo(t){ns!==null&&ns.tag===0&&!(qe&6)&&ia();var e=qe;qe|=1;var n=Si.transition,i=lt;try{if(Si.transition=null,lt=1,t)return t()}finally{lt=i,Si.transition=n,qe=e,!(qe&6)&&Ms()}}function tg(){Kn=qo.current,mt(qo)}function js(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DE(n)),Vt!==null)for(n=Vt.return;n!==null;){var i=n;switch(Nm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gc();break;case 3:da(),mt(Fn),mt(Sn),Wm();break;case 5:Gm(i);break;case 4:da();break;case 13:mt(Tt);break;case 19:mt(Tt);break;case 10:Bm(i.type._context);break;case 22:case 23:tg()}n=n.return}if(on=t,Vt=t=cs(t.current,null),cn=Kn=e,$t=0,jl=null,Qm=Pf=so=0,Dn=wl=null,Vs!==null){for(e=0;e<Vs.length;e++)if(n=Vs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vs=null}return t}function By(t,e){do{var n=Vt;try{if(km(),xc.current=Qc,Zc){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zc=!1}if(ro=0,nn=Xt=Ct=null,El=!1,Wl=0,Zm.current=null,n===null||n.return===null){$t=1,jl=e,Vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=cn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=c_(o);if(p!==null){p.flags&=-257,f_(p,o,a,s,e),p.mode&1&&u_(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){u_(s,u,e),ng();break e}l=Error(ee(426))}}else if(vt&&a.mode&1){var m=c_(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),f_(m,o,a,s,e),Fm(ha(l,a));break e}}s=l=ha(l,a),$t!==4&&($t=2),wl===null?wl=[s]:wl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=My(s,l,e);i_(s,f);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ls===null||!ls.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Ey(s,a,e);i_(s,M);break e}}s=s.return}while(s!==null)}Hy(n)}catch(P){e=P,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function zy(){var t=Jc.current;return Jc.current=Qc,t===null?Qc:t}function ng(){($t===0||$t===3||$t===2)&&($t=4),on===null||!(so&268435455)&&!(Pf&268435455)||Qr(on,cn)}function nf(t,e){var n=qe;qe|=2;var i=zy();(on!==t||cn!==e)&&(vr=null,js(t,e));do try{iT();break}catch(r){By(t,r)}while(!0);if(km(),qe=n,Jc.current=i,Vt!==null)throw Error(ee(261));return on=null,cn=0,$t}function iT(){for(;Vt!==null;)Vy(Vt)}function rT(){for(;Vt!==null&&!PM();)Vy(Vt)}function Vy(t){var e=Wy(t.alternate,t,Kn);t.memoizedProps=t.pendingProps,e===null?Hy(t):Vt=e,Zm.current=null}function Hy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZE(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Vt=null;return}}else if(n=KE(n,e,Kn),n!==null){Vt=n;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);$t===0&&($t=5)}function Us(t,e,n){var i=lt,r=Si.transition;try{Si.transition=null,lt=1,sT(t,e,n,i)}finally{Si.transition=r,lt=i}return null}function sT(t,e,n,i){do ia();while(ns!==null);if(qe&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BM(t,s),t===on&&(Vt=on=null,cn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nu||(Nu=!0,Xy(Oc,function(){return ia(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Si.transition,Si.transition=null;var o=lt;lt=1;var a=qe;qe|=4,Zm.current=null,JE(t,n),Fy(n,t),wE(Xh),Bc=!!Wh,Xh=Wh=null,t.current=n,eT(n),bM(),qe=a,lt=o,Si.transition=s}else t.current=n;if(Nu&&(Nu=!1,ns=t,tf=r),s=t.pendingLanes,s===0&&(ls=null),IM(n.stateNode),kn(t,Ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ef)throw ef=!1,t=fp,fp=null,t;return tf&1&&t.tag!==0&&ia(),s=t.pendingLanes,s&1?t===dp?Al++:(Al=0,dp=t):Al=0,Ms(),null}function ia(){if(ns!==null){var t=M2(tf),e=Si.transition,n=lt;try{if(Si.transition=null,lt=16>t?16:t,ns===null)var i=!1;else{if(t=ns,ns=null,tf=0,qe&6)throw Error(ee(331));var r=qe;for(qe|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var c=he;switch(c.tag){case 0:case 11:case 15:Tl(8,c,s)}var d=c.child;if(d!==null)d.return=c,he=d;else for(;he!==null;){c=he;var h=c.sibling,p=c.return;if(Iy(c),c===u){he=null;break}if(h!==null){h.return=p,he=h;break}he=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Tl(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,he=f;break e}he=s.return}}var _=t.current;for(he=_;he!==null;){o=he;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,he=g;else e:for(o=_;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rf(9,a)}}catch(P){It(a,a.return,P)}if(a===o){he=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,he=M;break e}he=a.return}}if(qe=r,Ms(),er&&typeof er.onPostCommitFiberRoot=="function")try{er.onPostCommitFiberRoot(xf,t)}catch{}i=!0}return i}finally{lt=n,Si.transition=e}}return!1}function T_(t,e,n){e=ha(n,e),e=My(t,e,1),t=as(t,e,1),e=Cn(),t!==null&&(eu(t,1,e),kn(t,e))}function It(t,e,n){if(t.tag===3)T_(t,t,n);else for(;e!==null;){if(e.tag===3){T_(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ls===null||!ls.has(i))){t=ha(n,t),t=Ey(e,t,1),e=as(e,t,1),t=Cn(),e!==null&&(eu(e,1,t),kn(e,t));break}}e=e.return}}function oT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Cn(),t.pingedLanes|=t.suspendedLanes&n,on===t&&(cn&n)===n&&($t===4||$t===3&&(cn&130023424)===cn&&500>Ft()-Jm?js(t,0):Qm|=n),kn(t,e)}function Gy(t,e){e===0&&(t.mode&1?(e=wu,wu<<=1,!(wu&130023424)&&(wu=4194304)):e=1);var n=Cn();t=Pr(t,e),t!==null&&(eu(t,e,n),kn(t,n))}function aT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gy(t,n)}function lT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Gy(t,n)}var Wy;Wy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fn.current)Un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Un=!1,qE(t,e,n);Un=!!(t.flags&131072)}else Un=!1,vt&&e.flags&1048576&&Y2(e,$c,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Mc(t,e),t=e.pendingProps;var r=ua(e,Sn.current);na(e,n),r=$m(null,e,i,t,r,n);var s=jm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,On(i)?(s=!0,Wc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vm(e),r.updater=Cf,e.stateNode=r,r._reactInternals=e,ep(e,i,t,n),e=ip(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&Um(e),An(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Mc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cT(i),t=Li(i,t),r){case 0:e=np(null,e,i,t,n);break e;case 1:e=p_(null,e,i,t,n);break e;case 11:e=d_(null,e,i,t,n);break e;case 14:e=h_(null,e,i,Li(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Li(i,r),np(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Li(i,r),p_(t,e,i,r,n);case 3:e:{if(Cy(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ey(t,e),qc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ha(Error(ee(423)),e),e=m_(t,e,i,n,r);break e}else if(i!==r){r=ha(Error(ee(424)),e),e=m_(t,e,i,n,r);break e}else for(Qn=os(e.stateNode.containerInfo.firstChild),Jn=e,vt=!0,Ii=null,n=Q2(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ca(),i===r){e=br(t,e,n);break e}An(t,e,i,n)}e=e.child}return e;case 5:return ty(e),t===null&&Zh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,$h(i,r)?o=null:s!==null&&$h(i,s)&&(e.flags|=32),Ay(t,e),An(t,e,o,n),e.child;case 6:return t===null&&Zh(e),null;case 13:return Ry(t,e,n);case 4:return Hm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fa(e,null,i,n):An(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Li(i,r),d_(t,e,i,r,n);case 7:return An(t,e,e.pendingProps,n),e.child;case 8:return An(t,e,e.pendingProps.children,n),e.child;case 12:return An(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(jc,i._currentValue),i._currentValue=o,s!==null)if(Bi(s.value,o)){if(s.children===r.children&&!Fn.current){e=br(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ar(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}An(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,na(e,n),r=Mi(r),i=i(r),e.flags|=1,An(t,e,i,n),e.child;case 14:return i=e.type,r=Li(i,e.pendingProps),r=Li(i.type,r),h_(t,e,i,r,n);case 15:return Ty(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Li(i,r),Mc(t,e),e.tag=1,On(i)?(t=!0,Wc(e)):t=!1,na(e,n),Sy(e,i,r),ep(e,i,r,n),ip(null,e,i,!0,t,n);case 19:return Py(t,e,n);case 22:return wy(t,e,n)}throw Error(ee(156,e.tag))};function Xy(t,e){return v2(t,e)}function uT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(t,e,n,i){return new uT(t,e,n,i)}function ig(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cT(t){if(typeof t=="function")return ig(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mm)return 11;if(t===Em)return 14}return 2}function cs(t,e){var n=t.alternate;return n===null?(n=_i(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ig(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bo:return Ys(n.children,r,s,e);case Sm:o=8,r|=8;break;case Th:return t=_i(12,n,e,r|2),t.elementType=Th,t.lanes=s,t;case wh:return t=_i(13,n,e,r),t.elementType=wh,t.lanes=s,t;case Ah:return t=_i(19,n,e,r),t.elementType=Ah,t.lanes=s,t;case t2:return bf(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jv:o=10;break e;case e2:o=9;break e;case Mm:o=11;break e;case Em:o=14;break e;case Yr:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=_i(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ys(t,e,n,i){return t=_i(7,t,i,e),t.lanes=n,t}function bf(t,e,n,i){return t=_i(22,t,i,e),t.elementType=t2,t.lanes=n,t.stateNode={isHidden:!1},t}function Od(t,e,n){return t=_i(6,t,null,e),t.lanes=n,t}function kd(t,e,n){return e=_i(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vd(0),this.expirationTimes=vd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rg(t,e,n,i,r,s,o,a,l){return t=new fT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_i(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vm(s),t}function dT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ko,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $y(t){if(!t)return ms;t=t._reactInternals;e:{if(ho(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(On(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(On(n))return $2(t,n,e)}return e}function jy(t,e,n,i,r,s,o,a,l){return t=rg(n,i,!0,t,r,s,o,a,l),t.context=$y(null),n=t.current,i=Cn(),r=us(n),s=Ar(i,r),s.callback=e??null,as(n,s,r),t.current.lanes=r,eu(t,r,i),kn(t,i),t}function Lf(t,e,n,i){var r=e.current,s=Cn(),o=us(r);return n=$y(n),e.context===null?e.context=n:e.pendingContext=n,e=Ar(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=as(r,e,o),t!==null&&(Fi(t,r,o,s),yc(t,r,o)),o}function rf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function w_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sg(t,e){w_(t,e),(t=t.alternate)&&w_(t,e)}function hT(){return null}var Yy=typeof reportError=="function"?reportError:function(t){console.error(t)};function og(t){this._internalRoot=t}Df.prototype.render=og.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Lf(t,e,null,null)};Df.prototype.unmount=og.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;oo(function(){Lf(null,t,null,null)}),e[Rr]=null}};function Df(t){this._internalRoot=t}Df.prototype.unstable_scheduleHydration=function(t){if(t){var e=w2();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zr.length&&e!==0&&e<Zr[n].priority;n++);Zr.splice(n,0,t),n===0&&C2(t)}};function ag(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function If(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function A_(){}function pT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=rf(o);s.call(u)}}var o=jy(e,i,t,0,null,!1,!1,"",A_);return t._reactRootContainer=o,t[Rr]=o.current,Bl(t.nodeType===8?t.parentNode:t),oo(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=rf(l);a.call(u)}}var l=rg(t,0,!1,null,null,!1,!1,"",A_);return t._reactRootContainer=l,t[Rr]=l.current,Bl(t.nodeType===8?t.parentNode:t),oo(function(){Lf(e,l,n,i)}),l}function Uf(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=rf(o);a.call(l)}}Lf(e,o,t,r)}else o=pT(n,e,t,r,i);return rf(o)}E2=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=hl(e.pendingLanes);n!==0&&(Am(e,n|1),kn(e,Ft()),!(qe&6)&&(pa=Ft()+500,Ms()))}break;case 13:oo(function(){var i=Pr(t,1);if(i!==null){var r=Cn();Fi(i,t,1,r)}}),sg(t,1)}};Cm=function(t){if(t.tag===13){var e=Pr(t,134217728);if(e!==null){var n=Cn();Fi(e,t,134217728,n)}sg(t,134217728)}};T2=function(t){if(t.tag===13){var e=us(t),n=Pr(t,e);if(n!==null){var i=Cn();Fi(n,t,e,i)}sg(t,e)}};w2=function(){return lt};A2=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Fh=function(t,e,n){switch(e){case"input":if(Ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Tf(i);if(!r)throw Error(ee(90));i2(i),Ph(i,r)}}}break;case"textarea":s2(t,n);break;case"select":e=n.value,e!=null&&Qo(t,!!n.multiple,e,!1)}};d2=eg;h2=oo;var mT={usingClientEntryPoint:!1,Events:[nu,Go,Tf,c2,f2,eg]},il={findFiberByHostInstance:zs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gT={bundleType:il.bundleType,version:il.version,rendererPackageName:il.rendererPackageName,rendererConfig:il.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g2(t),t===null?null:t.stateNode},findFiberByHostInstance:il.findFiberByHostInstance||hT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fu.isDisabled&&Fu.supportsFiber)try{xf=Fu.inject(gT),er=Fu}catch{}}oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mT;oi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ag(e))throw Error(ee(200));return dT(t,e,null,n)};oi.createRoot=function(t,e){if(!ag(t))throw Error(ee(299));var n=!1,i="",r=Yy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rg(t,1,!1,null,null,n,!1,i,r),t[Rr]=e.current,Bl(t.nodeType===8?t.parentNode:t),new og(e)};oi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=g2(e),t=t===null?null:t.stateNode,t};oi.flushSync=function(t){return oo(t)};oi.hydrate=function(t,e,n){if(!If(e))throw Error(ee(200));return Uf(null,t,e,!0,n)};oi.hydrateRoot=function(t,e,n){if(!ag(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Yy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jy(e,null,t,1,n??null,r,!1,s,o),t[Rr]=e.current,Bl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Df(e)};oi.render=function(t,e,n){if(!If(e))throw Error(ee(200));return Uf(null,t,e,!1,n)};oi.unmountComponentAtNode=function(t){if(!If(t))throw Error(ee(40));return t._reactRootContainer?(oo(function(){Uf(null,null,t,!1,function(){t._reactRootContainer=null,t[Rr]=null})}),!0):!1};oi.unstable_batchedUpdates=eg;oi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!If(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Uf(t,e,n,!1,i)};oi.version="18.3.1-next-f1338f8080-20240426";function qy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qy)}catch(t){console.error(t)}}qy(),qv.exports=oi;var _T=qv.exports,Ky,C_=_T;Ky=C_.createRoot,C_.hydrateRoot;function vT({videoRef:t,onReady:e}){const n=pt.useRef(null),i=pt.useRef(0);return pt.useEffect(()=>{let r=null;async function s(){try{r=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:1280},height:{ideal:720}},audio:!1}),t.current&&(t.current.srcObject=r,t.current.onloadedmetadata=()=>{var a;(a=t.current)==null||a.play(),e(),o()})}catch(a){console.error("Webcam access denied:",a),e()}}function o(){const a=n.current,l=t.current;if(!a||!l||l.readyState<2){i.current=requestAnimationFrame(o);return}const u=a.getContext("2d");if(!u)return;(a.width!==window.innerWidth||a.height!==window.innerHeight)&&(a.width=window.innerWidth,a.height=window.innerHeight);const c=l.videoWidth,d=l.videoHeight;if(c===0||d===0){i.current=requestAnimationFrame(o);return}const h=a.width/c,p=a.height/d,v=Math.max(h,p),y=c*v,m=d*v,f=(a.width-y)/2,_=(a.height-m)/2;u.drawImage(l,f,_,y,m),i.current=requestAnimationFrame(o)}return s(),()=>{cancelAnimationFrame(i.current),r&&r.getTracks().forEach(a=>a.stop())}},[t,e]),tn.jsxs(tn.Fragment,{children:[tn.jsx("video",{ref:t,style:{display:"none"},playsInline:!0,muted:!0}),tn.jsx("canvas",{ref:n,className:"webcam-canvas",id:"webcam-canvas"})]})}function yT(){return tn.jsx("div",{id:"dark-overlay",style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.50)",zIndex:2,pointerEvents:"none"}})}var ma=typeof self<"u"?self:{};function Zy(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=ma,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function As(){throw Error("Invalid UTF8")}function R_(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Ou,Bd;const xT=typeof TextDecoder<"u";let ST;const MT=typeof TextEncoder<"u";function Qy(t){if(MT)t=(ST||(ST=new TextEncoder)).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function Jy(t){ma.setTimeout(()=>{throw t},0)}var mp,ET=Zy(610401301,!1),P_=Zy(748402147,!0);function b_(){var t=ma.navigator;return t&&(t=t.userAgent)?t:""}const L_=ma.navigator;function Nf(t){return Nf[" "](t),t}mp=L_&&L_.userAgentData||null,Nf[" "]=function(){};const ex={};let ml=null;function TT(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return function(s,o){function a(u){for(;l<s.length;){const c=s.charAt(l++),d=ml[c];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c)}return u}tx();let l=0;for(;;){const u=a(-1),c=a(0),d=a(64),h=a(64);if(h===64&&u===-1)break;o(u<<2|c>>4),d!=64&&(o(c<<4&240|d>>2),h!=64&&o(d<<6&192|h))}}(t,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function tx(){if(!ml){ml={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));ex[n]=i;for(let r=0;r<i.length;r++){const s=i[r];ml[s]===void 0&&(ml[s]=r)}}}}var wT=typeof Uint8Array<"u",nx=!(!(ET&&mp&&mp.brands.length>0)&&(b_().indexOf("Trident")!=-1||b_().indexOf("MSIE")!=-1))&&typeof btoa=="function";const D_=/[-_.]/g,AT={"-":"+",_:"/",".":"="};function CT(t){return AT[t]||""}function ix(t){if(!nx)return TT(t);t=D_.test(t)?t.replace(D_,CT):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function lg(t){return wT&&t!=null&&t instanceof Uint8Array}var ga={};function ao(){return RT||(RT=new nr(null,ga))}function ug(t){rx(ga);var e=t.g;return(e=e==null||lg(e)?e:typeof e=="string"?ix(e):null)==null?e:t.g=e}var nr=class{h(){return new Uint8Array(ug(this)||0)}constructor(t,e){if(rx(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let RT,PT;function rx(t){if(t!==ga)throw Error("illegal external caller")}function sx(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function gp(t){return sx(t=Error(t),"warning"),t}function _a(t,e){if(t!=null){var n=PT??(PT={}),i=n[t]||0;i>=e||(n[t]=i+1,sx(t=Error(),"incident"),Jy(t))}}function Na(){return typeof BigInt=="function"}var Fa=typeof Symbol=="function"&&typeof Symbol()=="symbol";function sr(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var bT=sr("jas",void 0,!0),I_=sr(void 0,"0di"),rl=sr(void 0,"1oa"),ei=sr(void 0,Symbol()),LT=sr(void 0,"0ub"),DT=sr(void 0,"0ubs"),_p=sr(void 0,"0ubsb"),IT=sr(void 0,"0actk"),va=sr("m_m","Pa",!0),U_=sr();const ox={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},ax=Object.defineProperties,xe=Fa?bT:"Ga";var po;const N_=[];function ru(t,e){Fa||xe in t||ax(t,ox),t[xe]|=e}function Kt(t,e){Fa||xe in t||ax(t,ox),t[xe]=e}function su(t){return ru(t,34),t}function Yl(t){return ru(t,8192),t}Kt(N_,7),po=Object.freeze(N_);var ya={};function ii(t,e){return e===void 0?t.h!==lo&&!!(2&(0|t.v[xe])):!!(2&e)&&t.h!==lo}const lo={};function cg(t,e){if(t!=null){if(typeof t=="string")t=t?new nr(t,ga):ao();else if(t.constructor!==nr)if(lg(t))t=t.length?new nr(new Uint8Array(t),ga):ao();else{if(!e)throw Error();t=void 0}}return t}class F_{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var UT=Object.freeze({});function lx(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const o=r+(s?-1:0);for(e=128&e?1:0;e<o;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const a in t)!isNaN(a)&&n(+a,t[a])}}var ux={};function Oa(t){return 128&t?ux:void 0}function Ff(t){return t.Na=!0,t}var NT=Ff(t=>typeof t=="number"),O_=Ff(t=>typeof t=="string"),FT=Ff(t=>typeof t=="boolean"),Of=typeof ma.BigInt=="function"&&typeof ma.BigInt(0)=="bigint";function ti(t){var e=t;if(O_(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(NT(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Of?BigInt(t):t=FT(t)?t?"1":"0":O_(t)?t.trim()||"0":String(t)}var vp=Ff(t=>Of?t>=kT&&t<=zT:t[0]==="-"?k_(t,OT):k_(t,BT));const OT=Number.MIN_SAFE_INTEGER.toString(),kT=Of?BigInt(Number.MIN_SAFE_INTEGER):void 0,BT=Number.MAX_SAFE_INTEGER.toString(),zT=Of?BigInt(Number.MAX_SAFE_INTEGER):void 0;function k_(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const VT=typeof Uint8Array.prototype.slice=="function";let HT,Et=0,zt=0;function B_(t){const e=t>>>0;Et=e,zt=(t-e)/4294967296>>>0}function xa(t){if(t<0){B_(-t);const[e,n]=hg(Et,zt);Et=e>>>0,zt=n>>>0}else B_(t)}function fg(t){const e=HT||(HT=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),zt=0,Et=e.getUint32(0,!0)}function cx(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:ql(t,e)}function GT(t,e){return ti(Na()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):ql(t,e))}function fx(t,e){return Na()?ti(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):ti(dg(t,e))}function ql(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Na()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+z_(n)+z_(t));return n}function z_(t){return t=String(t),"0000000".slice(t.length)+t}function dg(t,e){if(2147483648&e)if(Na())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=hg(t,e);t="-"+ql(n,i)}else t=ql(t,e);return t}function kf(t){if(t.length<16)xa(Number(t));else if(Na())t=BigInt(t),Et=Number(t&BigInt(4294967295))>>>0,zt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");zt=Et=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));zt*=1e6,Et=1e6*Et+s,Et>=4294967296&&(zt+=Math.trunc(Et/4294967296),zt>>>=0,Et>>>=0)}if(e){const[i,r]=hg(Et,zt);Et=i,zt=r}}}function hg(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Oi(t){return Array.prototype.slice.call(t)}const ou=typeof BigInt=="function"?BigInt.asIntN:void 0,WT=typeof BigInt=="function"?BigInt.asUintN:void 0,uo=Number.isSafeInteger,Bf=Number.isFinite,Sa=Math.trunc,XT=ti(0);function gl(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function Qi(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Kl(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function dx(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const $T=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function au(t){switch(typeof t){case"bigint":return!0;case"number":return Bf(t);case"string":return $T.test(t);default:return!1}}function ka(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Bf(t)?0|t:void 0}function hx(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Bf(t)?t>>>0:void 0}function px(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(kf(t),dg(Et,zt))}function pg(t){if(t=Sa(t),!uo(t)){xa(t);var e=Et,n=zt;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=cx(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function mx(t){var e=Sa(Number(t));return uo(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),px(t))}function gx(t){var e=Sa(Number(t));return uo(e)?ti(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Na()?ti(ou(64,BigInt(t))):ti(px(t)))}function _x(t){return uo(t)?t=ti(pg(t)):(t=Sa(t),uo(t)?t=String(t):(xa(t),t=dg(Et,zt)),t=ti(t)),t}function sf(t){const e=typeof t;return t==null?t:e==="bigint"?ti(ou(64,t)):au(t)?e==="string"?gx(t):_x(t):void 0}function vx(t){if(typeof t!="string")throw Error();return t}function lu(t){if(t!=null&&typeof t!="string")throw Error();return t}function fn(t){return t==null||typeof t=="string"?t:void 0}function mg(t,e,n,i){return t!=null&&t[va]===ya?t:Array.isArray(t)?((i=(n=0|t[xe])|32&i|2&i)!==n&&Kt(t,i),new e(t)):(n?2&i?((t=e[I_])||(su((t=new e).v),t=e[I_]=t),e=t):e=new e:e=void 0,e)}function jT(t,e,n){if(e)e:{if(!au(e=t))throw gp("int64");switch(typeof e){case"string":e=gx(e);break e;case"bigint":e=ti(ou(64,e));break e;default:e=_x(e)}}else e=sf(t);return(t=e)==null?n?XT:void 0:t}const YT={};let qT=function(){try{return Nf(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class zd{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const KT=qT?(Object.setPrototypeOf(zd.prototype,Map.prototype),Object.defineProperties(zd.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),zd):class extends Map{constructor(){super()}};function V_(t){return t}function Vd(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var Lr=class extends KT{constructor(t,e,n=V_,i=V_){super(),this.J=0|t[xe],this.K=e,this.S=n,this.fa=this.K?ZT:i;for(let r=0;r<t.length;r++){const s=t[r],o=n(s[0],!1,!0);let a=s[1];e?a===void 0&&(a=null):a=i(s[1],!1,!0,void 0,void 0,this.J),super.set(o,a)}}V(t){return Yl(Array.from(super.entries(),t))}clear(){Vd(this),super.clear()}delete(t){return Vd(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new F_(t,QT,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new F_(t,Lr.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach((n,i,r)=>{t.call(e,r.get(i),i,r)}):super.forEach(t,e)}set(t,e){return Vd(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function ZT(t,e,n,i,r,s){return t=mg(t,i,n,s),r&&(t=_g(t)),t}function QT(t){return[t,this.get(t)]}let JT;function H_(){return JT||(JT=new Lr(su([]),void 0,void 0,void 0,YT))}function zf(t){return ei?t[ei]:void 0}function of(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}Lr.prototype.toJSON=void 0;var yp=class{};const e4={Ka:!0};function t4(t,e){e<100||_a(DT,1)}function Vf(t,e,n,i){const r=i!==void 0;i=!!i;var s,o=ei;!r&&Fa&&o&&(s=t[o])&&of(s,t4),o=[];var a=t.length;let l;s=4294967295;let u=!1;const c=!!(64&e),d=c?128&e?0:-1:void 0;1&e||(l=a&&t[a-1],l!=null&&typeof l=="object"&&l.constructor===Object?s=--a:l=void 0,!c||128&e||r||(u=!0,s=s-d+d)),e=void 0;for(var h=0;h<a;h++){let p=t[h];if(p!=null&&(p=n(p,i))!=null)if(c&&h>=s){const v=h-d;(e??(e={}))[v]=p}else o[h]=p}if(l)for(let p in l){if((a=l[p])==null||(a=n(a,i))==null)continue;let v;h=+p,c&&!Number.isNaN(h)&&(v=h+d)<s?o[v]=a:(e??(e={}))[p]=a}return e&&(u?o.push(e):o[s]=e),r&&ei&&(t=zf(t))&&t instanceof yp&&(o[ei]=function(p){const v=new yp;return of(p,(y,m,f)=>{v[m]=Oi(f)}),v.da=p.da,v}(t)),o}function n4(t){return t[0]=Zl(t[0]),t[1]=Zl(t[1]),t}function Zl(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return vp(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[xe];return t.length===0&&1&e?void 0:Vf(t,e,Zl)}if(t!=null&&t[va]===ya)return yx(t);if(t instanceof nr){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(nx){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),tx(),n=ex[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let u=0,c=0;for(;u<e.length-2;u+=3){var s=e[u],o=e[u+1],a=e[u+2],l=n[s>>2];s=n[(3&s)<<4|o>>4],o=n[(15&o)<<2|a>>6],a=n[63&a],i[c++]=l+s+o+a}switch(l=0,a=r,e.length-u){case 2:a=n[(15&(l=e[u+1]))<<2]||r;case 1:e=e[u],i[c]=n[e>>2]+n[(3&e)<<4|l>>4]+a+r}e=i.join("")}t=t.g=e}return t}return t instanceof Lr?t=t.size!==0?t.V(n4):void 0:void 0}return t}let i4,r4;function yx(t){return Vf(t=t.v,0|t[xe],Zl)}function qs(t,e){return xx(t,e[0],e[1])}function xx(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[xe],P_&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&function(){if(P_)throw Error("carr");_a(IT,5)}(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&Kt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var o=s-1;const l=n[o];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((o-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var a in l)(s=+a)<o&&(n[s+e]=l[a],delete l[a]);r=-16760833&r|(1023&o)<<14;break e}}if(e){if((a=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&a)<<14}}}return Kt(t,64|r|i),t}function s4(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[xe];return t.length===0&&1&n?void 0:G_(t,n,e)}if(t!=null&&t[va]===ya)return W_(t);if(t instanceof Lr){if(2&(e=t.J))return t;if(!t.size)return;if(n=su(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[va]===ya?W_(r):Array.isArray(r)?G_(r,0|r[xe],!!(32&e)):void 0,i[1]=r}return n}return t instanceof nr?t:void 0}function G_(t,e,n){return 2&e||(!n||4096&e||16&e?t=Ba(t,e,!1,n&&!(16&e)):(ru(t,34),4&e&&Object.freeze(t))),t}function gg(t,e,n){return t=new t.constructor(e),n&&(t.h=lo),t.m=lo,t}function W_(t){const e=t.v,n=0|e[xe];return ii(t,n)?t:vg(t,e,n)?gg(t,e):Ba(e,n)}function Ba(t,e,n,i){return i??(i=!!(34&e)),t=Vf(t,e,s4,i),i=32,n&&(i|=2),Kt(t,e=16769217&e|i),t}function _g(t){const e=t.v,n=0|e[xe];return ii(t,n)?vg(t,e,n)?gg(t,e,!0):new t.constructor(Ba(e,n,!1)):t}function za(t){if(t.h!==lo)return!1;var e=t.v;return ru(e=Ba(e,0|e[xe]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function Va(t){if(!za(t)&&ii(t,0|t.v[xe]))throw Error()}function mo(t,e){e===void 0&&(e=0|t[xe]),32&e&&!(4096&e)&&Kt(t,4096|e)}function vg(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Kt(e,2|n),t.h=lo,!0)}const Sx=ti(0),zr={};function wt(t,e,n,i,r){if((e=Dr(t.v,e,n,r))!==null||i&&t.m!==lo)return e}function Dr(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let o,a;if(!(s<1+(n?0:-1))){if(r>=s)if(o=t[s],o!=null&&typeof o=="object"&&o.constructor===Object)n=o[e],a=!0;else{if(r!==s)return;n=o}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return a?o[e]=i:t[r]=i,i}return n}}function ut(t,e,n,i){Va(t),Yt(t=t.v,0|t[xe],e,n,i)}function Yt(t,e,n,i,r){const s=n+(r?0:-1);var o=t.length-1;if(o>=1+(r?0:-1)&&s>=o){const a=t[o];if(a!=null&&typeof a=="object"&&a.constructor===Object)return a[n]=i,e}return s<=o?(t[s]=i,e):(i!==void 0&&(n>=(o=(e??(e=0|t[xe]))>>14&1023||536870912)?i!=null&&(t[o+(r?0:-1)]={[n]:i}):t[s]=i),e)}function Gs(){return UT===void 0?2:4}function Ws(t,e,n,i,r){let s=t.v,o=0|s[xe];i=ii(t,o)?1:i,r=!!r||i===3,i===2&&za(t)&&(s=t.v,o=0|s[xe]);let a=(t=yg(s,e))===po?7:0|t[xe],l=xg(a,o);var u=!(4&l);if(u){4&l&&(t=Oi(t),a=0,l=Zs(l,o),o=Yt(s,o,e,t));let c=0,d=0;for(;c<t.length;c++){const h=n(t[c]);h!=null&&(t[d++]=h)}d<c&&(t.length=d),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==a&&(Kt(t,l),2&l&&Object.freeze(t)),Mx(t,l,s,o,e,i,u,r)}function Mx(t,e,n,i,r,s,o,a){let l=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?Ks(e)||((e|=!t.length||o&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&Kt(t,e),Object.freeze(t)):(s===2&&Ks(e)&&(t=Oi(t),l=0,e=Zs(e,i),i=Yt(n,i,r,t)),Ks(e)||(a||(e|=16),e!==l&&Kt(t,e))),2&e||!(4096&e||16&e)||mo(n,i),t}function yg(t,e,n){return t=Dr(t,e,n),Array.isArray(t)?t:po}function xg(t,e){return 2&e&&(t|=2),1|t}function Ks(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Ex(t){return cg(t,!0)}function Tx(t){t=Oi(t);for(let e=0;e<t.length;e++){const n=t[e]=Oi(t[e]);Array.isArray(n[1])&&(n[1]=su(n[1]))}return Yl(t)}function Kr(t,e,n,i){Va(t),Yt(t=t.v,0|t[xe],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Ha(t,e,n){if(2&e)throw Error();const i=Oa(e);let r=yg(t,n,i),s=r===po?7:0|r[xe],o=xg(s,e);return(2&o||Ks(o)||16&o)&&(o===s||Ks(o)||Kt(r,o),r=Oi(r),s=0,o=Zs(o,e),Yt(t,e,n,r,i)),o&=-13,o!==s&&Kt(r,o),r}function Hd(t,e){var n=m3;return Mg(Sg(t=t.v),t,void 0,n)===e?e:-1}function Sg(t){if(Fa)return t[rl]??(t[rl]=new Map);if(rl in t)return t[rl];const e=new Map;return Object.defineProperty(t,rl,{value:e}),e}function wx(t,e,n,i,r){const s=Sg(t),o=Mg(s,t,e,n,r);return o!==i&&(o&&(e=Yt(t,e,o,void 0,r)),s.set(n,i)),e}function Mg(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let o=0;o<i.length;o++){const a=i[o];Dr(e,a,r)!=null&&(s!==0&&(n=Yt(e,n,s,void 0,r)),s=a)}return t.set(i,s),s}function Eg(t,e,n){let i=0|t[xe];const r=Oa(i),s=Dr(t,n,r);let o;if(s!=null&&s[va]===ya){if(!ii(s))return za(s),s.v;o=s.v}else Array.isArray(s)&&(o=s);if(o){const a=0|o[xe];2&a&&(o=Ba(o,a))}return o=qs(o,e),o!==s&&Yt(t,i,n,o,r),o}function Ax(t,e,n,i,r){let s=!1;if((i=Dr(t,i,r,o=>{const a=mg(o,n,!1,e);return s=a!==o&&a!=null,a}))!=null)return s&&!ii(i)&&mo(t,e),i}function Qe(t,e,n,i){let r=t.v,s=0|r[xe];if((e=Ax(r,s,e,n,i))==null)return e;if(s=0|r[xe],!ii(t,s)){const o=_g(e);o!==e&&(za(t)&&(r=t.v,s=0|r[xe]),s=Yt(r,s,n,e=o,i),mo(r,s))}return e}function Cx(t,e,n,i,r,s,o,a){var l=ii(t,n);s=l?1:s,o=!!o||s===3,l=a&&!l,(s===2||l)&&za(t)&&(n=0|(e=t.v)[xe]);var u=(t=yg(e,r))===po?7:0|t[xe],c=xg(u,n);if(a=!(4&c)){var d=t,h=n;const p=!!(2&c);p&&(h|=2);let v=!p,y=!0,m=0,f=0;for(;m<d.length;m++){const _=mg(d[m],i,!1,h);if(_ instanceof i){if(!p){const g=ii(_);v&&(v=!g),y&&(y=g)}d[f++]=_}}f<m&&(d.length=f),c|=4,c=y?-4097&c:4096|c,c=v?8|c:-9&c}if(c!==u&&(Kt(t,c),2&c&&Object.freeze(t)),l&&!(8&c||!t.length&&(s===1||s===4&&(2&c||!(16&c)&&32&n)))){for(Ks(c)&&(t=Oi(t),c=Zs(c,n),n=Yt(e,n,r,t)),i=t,l=c,u=0;u<i.length;u++)(d=i[u])!==(c=_g(d))&&(i[u]=c);l|=8,Kt(t,c=l=i.length?4096|l:-4097&l)}return Mx(t,c,e,n,r,s,a,o)}function Ir(t,e,n){const i=t.v;return Cx(t,i,0|i[xe],e,n,Gs(),!1,!0)}function Rx(t){return t==null&&(t=void 0),t}function Ae(t,e,n,i,r){return ut(t,n,i=Rx(i),r),i&&!ii(i)&&mo(t.v),t}function Cl(t,e,n,i){e:{var r=i=Rx(i);Va(t);const s=t.v;let o=0|s[xe];if(r==null){const a=Sg(s);if(Mg(a,s,o,n)!==e)break e;a.set(n,0)}else o=wx(s,o,n,e);Yt(s,o,e,r)}i&&!ii(i)&&mo(t.v)}function Zs(t,e){return-273&(2&e?2|t:-3&t)}function Tg(t,e,n,i){var r=i;Va(t),t=Cx(t,i=t.v,0|i[xe],n,e,2,!0),r=r??new n,t.push(r),e=n=t===po?7:0|t[xe],(r=ii(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Kt(t,n),r||mo(i)}function vi(t,e,n){return ka(wt(t,e,void 0,n))}function Nt(t,e){return wt(t,e,void 0,void 0,Qi)??0}function Ur(t,e,n){if(n!=null){if(typeof n!="number"||!Bf(n))throw gp("int32");n|=0}ut(t,e,n)}function we(t,e,n){ut(t,e,gl(n))}function ri(t,e,n){Kr(t,e,lu(n),"")}function af(t,e,n){{Va(t);const o=t.v;let a=0|o[xe];if(n==null)Yt(o,a,e);else{var i=t=n===po?7:0|n[xe],r=Ks(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=Oi(n),i=0,t=Zs(t,a),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){const l=n[r],u=vx(l);Object.is(l,u)||(s&&(n=Oi(n),i=0,t=Zs(t,a),s=!1),n[r]=u)}t!==i&&(s&&(n=Oi(n),t=Zs(t,a)),Kt(n,t)),Yt(o,a,e,n)}}}function Hf(t,e,n){Va(t),Ws(t,e,fn,2,!0).push(vx(n))}var yo=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function wg(t,e){if(typeof t=="string")return new yo(ix(t),e);if(Array.isArray(t))return new yo(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new yo(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new yo(t,!1);if(t.constructor===nr)return e=ug(t)||new Uint8Array(0),new yo(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new yo(t,!1);throw Error()}function Ag(t,e){let n,i=0,r=0,s=0;const o=t.h;let a=t.g;do n=o[a++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=o[a++],r|=(127&n)<<s;if(Qs(t,a),!(128&n))return e(i>>>0,r>>>0);throw Error()}function Cg(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Qs(t,n),!!(127&e)}throw Error()}function gs(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Qs(t,n),r}function ir(t){return gs(t)>>>0}function lf(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],Qs(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function o4(t){return gs(t)}function Qs(t,e){if(t.g=e,e>t.l)throw Error()}function Px(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function bx(t,e){if(e==0)return ao();var n=Px(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):VT?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?ao():new nr(n,ga)}var X_=[];function Lx(t,e,n,i){if(uf.length){const r=uf.pop();return r.o(i),r.g.init(t,e,n,i),r}return new a4(t,e,n,i)}function Dx(t){t.g.clear(),t.l=-1,t.h=-1,uf.length<100&&uf.push(t)}function Ix(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=ir(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function Ac(t){switch(t.h){case 0:t.h!=0?Ac(t):Cg(t.g);break;case 1:Qs(t=t.g,t.g+8);break;case 2:if(t.h!=2)Ac(t);else{var e=ir(t.g);Qs(t=t.g,t.g+e)}break;case 5:Qs(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!Ix(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}Ac(t)}break;default:throw Error()}}function uu(t,e,n){const i=t.g.l;var r=ir(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function Rg(t){var e=ir(t.g),n=Px(t=t.g,e);if(t=t.h,xT){var i,r=t;(i=Bd)||(i=Bd=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(a){if(Ou===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Ou=!0}catch{Ou=!1}}throw!Ou&&(Bd=void 0),a}}else{e=(s=n)+e,n=[];let a,l=null;for(;s<e;){var o=t[s++];o<128?n.push(o):o<224?s>=e?As():(a=t[s++],o<194||(192&a)!=128?(s--,As()):n.push((31&o)<<6|63&a)):o<240?s>=e-1?As():(a=t[s++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=t[s++]))!=128?(s--,As()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?s>=e-2?As():(a=t[s++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,As()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&r,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):As(),n.length>=8192&&(l=R_(l,n),n.length=0)}s=R_(l,n)}return s}function Ux(t){const e=ir(t.g);return bx(t.g,e)}function Gf(t,e,n){var i=ir(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var a4=class{constructor(t,e,n,i){if(X_.length){const r=X_.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,o,a){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,o,a)}init(r,s,o,{Y:a=!1,ea:l=!1}={}){this.Y=a,this.ea=l,r&&(r=wg(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=o!==void 0?this.m+o:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},uf=[];function $_(t){return t?/^\d+$/.test(t)?(kf(t),new xp(Et,zt)):null:l4||(l4=new xp(0,0))}var xp=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let l4;function j_(t){return t?/^-?\d+$/.test(t)?(kf(t),new Sp(Et,zt)):null:u4||(u4=new Sp(0,0))}var Sp=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let u4;function ra(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Ga(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Wf(t,e){if(e>=0)Ga(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Pg(t){var e=Et;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Ma(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Ti(t,e,n){Ga(t.g,8*e+n)}function bg(t,e){return Ti(t,e,2),e=t.g.end(),Ma(t,e),e.push(t.h),e}function Lg(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Xf(t,e,n){Ti(t,e,2),Ga(t.g,n.length),Ma(t,t.g.end()),Ma(t,n)}function cf(t,e,n,i){n!=null&&(e=bg(t,e),i(n,t),Lg(t,e))}function or(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Dg=or(),Nx=or(),Ig=or(),Ug=or(),Ng=or(),Fx=or(),c4=or(),$f=or(),Ox=or(),kx=or();function ar(t,e,n){var i=t.v;ei&&ei in i&&(i=i[ei])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var Se=class{constructor(t,e){this.v=xx(t,e,void 0,2048)}toJSON(){return yx(this)}j(){var r;var t=X4,e=this.v,n=t.g,i=ei;if(Fa&&i&&((r=e[i])==null?void 0:r[n])!=null&&_a(LT,3),e=t.g,U_&&ei&&U_===void 0&&(i=(n=this.v)[ei])&&(i=i.da))try{i(n,e,e4)}catch(s){Jy(s)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[xe];return vg(this,t,e)?gg(this,t,!0):new this.constructor(Ba(t,e,!1))}};Se.prototype[va]=ya,Se.prototype.toString=function(){return this.v.toString()};var Wa=class{constructor(t,e,n){this.g=t,this.h=e,t=Dg,this.l=!!t&&n===t||!1}};function jf(t,e){return new Wa(t,e,Dg)}function Bx(t,e,n,i,r){cf(t,n,Gx(e,i),r)}const f4=jf(function(t,e,n,i,r){return t.h===2&&(uu(t,Eg(e,i,n),r),!0)},Bx),d4=jf(function(t,e,n,i,r){return t.h===2&&(uu(t,Eg(e,i,n),r),!0)},Bx);var Yf=Symbol(),qf=Symbol(),Mp=Symbol(),Y_=Symbol(),q_=Symbol();let zx,Vx;function go(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=function(d){switch(typeof d){case"boolean":return i4||(i4=[0,void 0,!0]);case"number":return d>0?void 0:d===0?r4||(r4=[0,void 0]):[-d,void 0];case"string":return[0,d];case"object":return d}}(i[0]);var s=i[1];let o=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++o])=="function"&&(r.ma=!0,zx??(zx=s),Vx??(Vx=i[o+1]),s=i[o+=2]));const a={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)a[s[l]]=s;s=i[++o]}for(l=1;s!==void 0;){let d;typeof s=="number"&&(l+=s,s=i[++o]);var u=void 0;if(s instanceof Wa?d=s:(d=f4,o--),d==null?void 0:d.l){s=i[++o],u=i;var c=o;typeof s=="function"&&(s=s(),u[c]=s),u=s}for(c=l+1,typeof(s=i[++o])=="number"&&s<0&&(c-=s,s=i[++o]);l<c;l++){const h=a[l];u?n(r,l,d,u,h):e(r,l,d,h)}}return i[t]=r}function Hx(t){return Array.isArray(t)?t[0]instanceof Wa?t:[d4,t]:[t,void 0]}function Gx(t,e){return t instanceof Se?t.v:Array.isArray(t)?qs(t,e):void 0}function Fg(t,e,n,i){const r=n.g;t[e]=i?(s,o,a)=>r(s,o,a,i):r}function Og(t,e,n,i,r){const s=n.g;let o,a;t[e]=(l,u,c)=>s(l,u,c,a||(a=go(qf,Fg,Og,i).T),o||(o=kg(i)),r)}function kg(t){let e=t[Mp];if(e!=null)return e;const n=go(qf,Fg,Og,t);return e=n.ma?(i,r)=>zx(i,r,n):(i,r)=>{for(;Ix(r)&&r.h!=4;){var s=r.l,o=n[s];if(o==null){var a=n.ba;a&&(a=a[s])&&(a=p4(a))!=null&&(o=n[s]=a)}if(o==null||!o(r,i,s)){if(o=(a=r).m,Ac(a),a.ha)var l=void 0;else l=a.g.g-o,a.g.g=o,l=bx(a.g,l);o=void 0,a=i,l&&((o=a[ei]??(a[ei]=new yp))[s]??(o[s]=[])).push(l)}}return(i=zf(i))&&(i.da=n.qa[q_]),!0},t[Mp]=e,t[q_]=h4.bind(t),e}function h4(t,e,n,i){var r=this[qf];const s=this[Mp],o=qs(void 0,r.T),a=zf(t);if(a){var l=!1,u=r.ba;if(u){if(r=(c,d,h)=>{if(h.length!==0)if(u[d])for(const p of h){c=Lx(p);try{l=!0,s(o,c)}finally{Dx(c)}}else i==null||i(t,d,h)},e==null)of(a,r);else if(a!=null){const c=a[e];c&&r(a,e,c)}if(l){let c=0|t[xe];if(2&c&&2048&c&&!(n!=null&&n.Ka))throw Error();const d=Oa(c),h=(p,v)=>{if(Dr(t,p,d)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}v!=null&&(c=Yt(t,c,p,v,d)),delete a[p]};e==null?lx(o,0|o[xe],(p,v)=>{h(p,v)}):h(e,Dr(o,e,d))}}}}function p4(t){const e=(t=Hx(t))[0].g;if(t=t[1]){const n=kg(t),i=go(qf,Fg,Og,t).T;return(r,s,o)=>e(r,s,o,i,n)}return e}function Kf(t,e,n){t[e]=n.h}function Zf(t,e,n,i){let r,s;const o=n.h;t[e]=(a,l,u)=>o(a,l,u,s||(s=go(Yf,Kf,Zf,i).T),r||(r=Wx(i)))}function Wx(t){let e=t[Y_];if(!e){const n=go(Yf,Kf,Zf,t);e=(i,r)=>Xx(i,r,n),t[Y_]=e}return e}function Xx(t,e,n){lx(t,0|t[xe],(i,r)=>{if(r!=null){var s=function(o,a){var l=o[a];if(l)return l;if((l=o.ba)&&(l=l[a])){var u=(l=Hx(l))[0].h;if(l=l[1]){const c=Wx(l),d=go(Yf,Kf,Zf,l).T;l=o.ma?Vx(d,c):(h,p,v)=>u(h,p,v,d,c)}else l=u;return o[a]=l}}(n,i);s?s(e,r,i):i<500||_a(_p,3)}}),(t=zf(t))&&of(t,(i,r,s)=>{for(Ma(e,e.g.end()),i=0;i<s.length;i++)Ma(e,ug(s[i])||new Uint8Array(0))})}const m4=ti(0);function Xa(t,e){if(Array.isArray(e)){var n=0|e[xe];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&Kt(e,t),2&t&&Object.freeze(e),e}}function Mn(t,e,n){return new Wa(t,e,n)}function $a(t,e,n){return new Wa(t,e,n)}function En(t,e,n){Yt(t,0|t[xe],e,n,Oa(0|t[xe]))}var g4=jf(function(t,e,n,i,r){if(t.h!==2)return!1;if(t=Oi(t=uu(t,qs([void 0,void 0],i),r)),r=Oa(i=0|e[xe]),2&i)throw Error();let s=Dr(e,n,r);if(s instanceof Lr)2&s.J?(s=s.V(),s.push(t),Yt(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var o=0|s[xe];8192&o||Kt(s,o|=8192),2&o&&(s=Tx(s),Yt(e,i,n,s,r)),s.push(t)}else Yt(e,i,n,Yl([t]),r);return!0},function(t,e,n,i,r){if(e instanceof Lr)e.forEach((s,o)=>{cf(t,n,qs([o,s],i),r)});else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const o=e[s];Array.isArray(o)&&cf(t,n,qs(o,i),r)}Yl(e)}});function $x(t,e,n){(e=Qi(e))!=null&&(Ti(t,n,5),t=t.g,fg(e),Pg(t))}function jx(t,e,n){if(e=function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(ou(64,i));if(au(i)){if(r==="string")return mx(i);if(r==="number")return pg(i)}}(e),e!=null&&(typeof e=="string"&&j_(e),e!=null))switch(Ti(t,n,0),typeof e){case"number":t=t.g,xa(e),ra(t,Et,zt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Sp(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),ra(t.g,n.h,n.g);break;default:n=j_(e),ra(t.g,n.h,n.g)}}function Yx(t,e,n){(e=ka(e))!=null&&e!=null&&(Ti(t,n,0),Wf(t.g,e))}function qx(t,e,n){(e=dx(e))!=null&&(Ti(t,n,0),t.g.g.push(e?1:0))}function Kx(t,e,n){(e=fn(e))!=null&&Xf(t,n,Qy(e))}function Zx(t,e,n,i,r){cf(t,n,Gx(e,i),r)}function Qx(t,e,n){(e=e==null||typeof e=="string"||e instanceof nr?e:void 0)!=null&&Xf(t,n,wg(e,!0).buffer)}function Jx(t,e,n){(e=hx(e))!=null&&e!=null&&(Ti(t,n,0),Ga(t.g,e))}function e3(t,e,n){return(t.h===5||t.h===2)&&(e=Ha(e,0|e[xe],n),t.h==2?Gf(t,lf,e):e.push(lf(t.g)),!0)}var Ht=Mn(function(t,e,n){return t.h===5&&(En(e,n,lf(t.g)),!0)},$x,$f),_4=$a(e3,function(t,e,n){if((e=Xa(Qi,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(Ti(i,r,5),i=i.g,fg(s),Pg(i))}},$f),Bg=$a(e3,function(t,e,n){if((e=Xa(Qi,e))!=null&&e.length){Ti(t,n,2),Ga(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,fg(e[i]),Pg(n)}},$f),v4=Mn(function(t,e,n){return t.h===5&&(En(e,n,(t=lf(t.g))===0?void 0:t),!0)},$x,$f),_s=Mn(function(t,e,n){return t.h!==0?t=!1:(En(e,n,Ag(t.g,fx)),t=!0),t},jx,Fx),Gd=Mn(function(t,e,n){return t.h!==0?e=!1:(En(e,n,(t=Ag(t.g,fx))===m4?void 0:t),e=!0),e},jx,Fx),y4=Mn(function(t,e,n){return t.h!==0?t=!1:(En(e,n,Ag(t.g,GT)),t=!0),t},function(t,e,n){if(e=function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(WT(64,i));if(au(i)){if(r==="string")return r=Sa(Number(i)),uo(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(kf(i),i=ql(Et,zt))),i;if(r==="number")return(i=Sa(i))>=0&&uo(i)||(xa(i),i=cx(Et,zt)),i}}(e),e!=null&&(typeof e=="string"&&$_(e),e!=null))switch(Ti(t,n,0),typeof e){case"number":t=t.g,xa(e),ra(t,Et,zt);break;case"bigint":n=BigInt.asUintN(64,e),n=new xp(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),ra(t.g,n.h,n.g);break;default:n=$_(e),ra(t.g,n.h,n.g)}},c4),jt=Mn(function(t,e,n){return t.h===0&&(En(e,n,gs(t.g)),!0)},Yx,Ug),cu=$a(function(t,e,n){return(t.h===0||t.h===2)&&(e=Ha(e,0|e[xe],n),t.h==2?Gf(t,gs,e):e.push(gs(t.g)),!0)},function(t,e,n){if((e=Xa(ka,e))!=null&&e.length){n=bg(t,n);for(let i=0;i<e.length;i++)Wf(t.g,e[i]);Lg(t,n)}},Ug),Ko=Mn(function(t,e,n){return t.h===0&&(En(e,n,(t=gs(t.g))===0?void 0:t),!0)},Yx,Ug),At=Mn(function(t,e,n){return t.h===0&&(En(e,n,Cg(t.g)),!0)},qx,Nx),Js=Mn(function(t,e,n){return t.h===0&&(En(e,n,(t=Cg(t.g))===!1?void 0:t),!0)},qx,Nx),vn=$a(function(t,e,n){return t.h===2&&(t=Rg(t),Ha(e,0|e[xe],n).push(t),!0)},function(t,e,n){if((e=Xa(fn,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&Xf(i,r,Qy(s))}},Ig),Jr=Mn(function(t,e,n){return t.h===2&&(En(e,n,(t=Rg(t))===""?void 0:t),!0)},Kx,Ig),ct=Mn(function(t,e,n){return t.h===2&&(En(e,n,Rg(t)),!0)},Kx,Ig),rn=function(t,e,n=Dg){return new Wa(t,e,n)}(function(t,e,n,i,r){return t.h===2&&(i=qs(void 0,i),Ha(e,0|e[xe],n).push(i),uu(t,i,r),!0)},function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)Zx(t,e[s],n,i,r);1&(t=0|e[xe])||Kt(e,1|t)}}),_t=jf(function(t,e,n,i,r,s){if(t.h!==2)return!1;let o=0|e[xe];return wx(e,o,s,n,Oa(o)),uu(t,e=Eg(e,i,n),r),!0},Zx),t3=Mn(function(t,e,n){return t.h===2&&(En(e,n,Ux(t)),!0)},Qx,Ox),x4=$a(function(t,e,n){return(t.h===0||t.h===2)&&(e=Ha(e,0|e[xe],n),t.h==2?Gf(t,ir,e):e.push(ir(t.g)),!0)},function(t,e,n){if((e=Xa(hx,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(Ti(i,r,0),Ga(i.g,s))}},Ng),S4=Mn(function(t,e,n){return t.h===0&&(En(e,n,(t=ir(t.g))===0?void 0:t),!0)},Jx,Ng),xn=Mn(function(t,e,n){return t.h===0&&(En(e,n,gs(t.g)),!0)},function(t,e,n){(e=ka(e))!=null&&(e=parseInt(e,10),Ti(t,n,0),Wf(t.g,e))},kx);class M4{constructor(e,n){var i=li;this.g=e,this.h=n,this.m=Qe,this.j=Ae,this.defaultValue=void 0,this.l=i.Oa!=null?ux:void 0}register(){Nf(this)}}function lr(t,e){return new M4(t,e)}function Es(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=Lx(n,void 0,void 0,s);try{const o=new t,a=o.v;kg(e)(a,n);var r=o}finally{Dx(n)}}return r}}function Qf(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};Xx(this.v,e,go(Yf,Kf,Zf,t)),Ma(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];n.set(a,s),s+=a.length}return e.l=[n],n}}var K_=class extends Se{constructor(t){super(t)}},Z_=[0,Jr,Mn(function(t,e,n){return t.h===2&&(En(e,n,(t=Ux(t))===ao()?void 0:t),!0)},function(t,e,n){if(e!=null){if(e instanceof Se){const i=e.Ra;return void(i?(e=i(e),e!=null&&Xf(t,n,wg(e,!0).buffer)):_a(_p,3))}if(Array.isArray(e))return void _a(_p,3)}Qx(t,e,n)},Ox)];let Wd,Q_=globalThis.trustedTypes;function J_(t){var e;return Wd===void 0&&(Wd=function(){let n=null;if(!Q_)return n;try{const i=r=>r;n=Q_.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n}()),t=(e=Wd)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function ku(t,...e){if(e.length===0)return J_(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return J_(n)}var n3=[0,jt,xn,At,-1,cu,xn,-1,At],E4=class extends Se{constructor(t){super(t)}},i3=[0,At,ct,At,xn,-1,$a(function(t,e,n){return(t.h===0||t.h===2)&&(e=Ha(e,0|e[xe],n),t.h==2?Gf(t,o4,e):e.push(gs(t.g)),!0)},function(t,e,n){if((e=Xa(ka,e))!=null&&e.length){n=bg(t,n);for(let i=0;i<e.length;i++)Wf(t.g,e[i]);Lg(t,n)}},kx),ct,-1,[0,At,-1],xn,At,-1],r3=[0,3,At,-1,2,[0,[2],jt,_t,[0,Mn(function(t,e,n){return t.h===0&&(En(e,n,ir(t.g)),!0)},Jx,Ng)]],[0,xn,At,xn,At,xn,At,ct,-1],[0,[3,4],ct,-1,_t,[0,jt],_t,[0,xn]],[0]],s3=[0,ct,-2],e1=class extends Se{constructor(t){super(t)}},o3=[0],a3=[0,jt,At,1,At,-4],li=class extends Se{constructor(t){super(t,2)}},qt={};qt[336783863]=[0,ct,At,-1,jt,[0,[1,2,3,4,5,6,7,8,9],_t,o3,_t,i3,_t,s3,_t,a3,_t,n3,_t,[0,ct,-2],_t,[0,ct,xn],_t,r3,_t,[0,xn,-1,At]],[0,ct],At,[0,[1,3],[2,4],_t,[0,cu],-1,_t,[0,vn],-1,rn,[0,ct,-1]],ct];var t1=[0,Gd,-1,Js,-3,Gd,cu,Jr,Ko,Gd,-1,Js,Ko,Js,-2,Jr];function yt(t,e){Hf(t,3,e)}function je(t,e){Hf(t,4,e)}var Hn=class extends Se{constructor(e){super(e,500)}o(e){return Ae(this,0,7,e)}},Rl=[-1,{}],n1=[0,ct,1,Rl],i1=[0,ct,vn,Rl];function wi(t,e){Tg(t,1,Hn,e)}function Rt(t,e){Hf(t,10,e)}function et(t,e){Hf(t,15,e)}var ui=class extends Se{constructor(t){super(t,500)}o(t){return Ae(this,0,1001,t)}},l3=[-500,rn,[-500,Jr,-1,vn,-3,[-2,qt,At],rn,Z_,Ko,-1,n1,i1,rn,[0,Jr,Js],Jr,t1,Ko,vn,987,vn],4,rn,[-500,ct,-1,[-1,{}],998,ct],rn,[-500,ct,vn,-1,[-2,{},At],997,vn,-1],Ko,rn,[-500,ct,vn,Rl,998,vn],vn,Ko,n1,i1,rn,[0,Jr,-1,Rl],vn,-2,t1,Jr,-1,Js,[0,Js,S4],978,Rl,rn,Z_];ui.prototype.g=Qf(l3);var T4=Es(ui,l3),w4=class extends Se{constructor(t){super(t)}},u3=class extends Se{constructor(t){super(t)}g(){return Ir(this,w4,1)}},c3=[0,rn,[0,jt,Ht,ct,-1]],Jf=Es(u3,c3),A4=class extends Se{constructor(t){super(t)}},C4=class extends Se{constructor(t){super(t)}},Xd=class extends Se{constructor(t){super(t)}l(){return Qe(this,A4,2)}g(){return Ir(this,C4,5)}},f3=Es(class extends Se{constructor(t){super(t)}},[0,vn,cu,Bg,[0,xn,[0,jt,-3],[0,Ht,-3],[0,jt,-1,[0,rn,[0,jt,-2]]],rn,[0,Ht,-1,ct,Ht]],ct,-1,_s,rn,[0,jt,Ht],vn,_s]),d3=class extends Se{constructor(t){super(t)}},sa=Es(class extends Se{constructor(t){super(t)}},[0,rn,[0,Ht,-4]]),h3=class extends Se{constructor(t){super(t)}},fu=Es(class extends Se{constructor(t){super(t)}},[0,rn,[0,Ht,-4]]),R4=class extends Se{constructor(t){super(t)}},P4=[0,jt,-1,Bg,xn],p3=class extends Se{constructor(t){super(t)}};p3.prototype.g=Qf([0,Ht,-4,_s]);var b4=class extends Se{constructor(t){super(t)}},L4=Es(class extends Se{constructor(t){super(t)}},[0,rn,[0,1,jt,ct,c3],_s]),r1=class extends Se{constructor(t){super(t)}},D4=class extends Se{constructor(t){super(t)}na(){const t=wt(this,1,void 0,void 0,Ex);return t??ao()}},I4=class extends Se{constructor(t){super(t)}},m3=[1,2],U4=Es(class extends Se{constructor(t){super(t)}},[0,rn,[0,m3,_t,[0,Bg],_t,[0,t3],jt,ct],_s]),zg=class extends Se{constructor(t){super(t)}},g3=[0,ct,jt,Ht,vn,-1],s1=class extends Se{constructor(t){super(t)}},N4=[0,At,-1],o1=class extends Se{constructor(t){super(t)}},Cc=[1,2,3,4,5,6],ff=class extends Se{constructor(t){super(t)}g(){return wt(this,1,void 0,void 0,Ex)!=null}l(){return fn(wt(this,2))!=null}},Ut=class extends Se{constructor(t){super(t)}g(){return dx(wt(this,2))??!1}},_3=[0,t3,ct,[0,jt,_s,-1],[0,y4,_s]],Wt=[0,_3,At,[0,Cc,_t,a3,_t,i3,_t,n3,_t,o3,_t,s3,_t,r3],xn],ed=class extends Se{constructor(t){super(t)}},Vg=[0,Wt,Ht,-1,jt],F4=lr(502141897,ed);qt[502141897]=Vg;var O4=Es(class extends Se{constructor(t){super(t)}},[0,[0,xn,-1,_4,x4],P4]),v3=class extends Se{constructor(t){super(t)}},y3=class extends Se{constructor(t){super(t)}},Ep=[0,Wt,Ht,[0,Wt],At],k4=lr(508968150,y3);qt[508968150]=[0,Wt,Vg,Ep,Ht,[0,[0,_3]]],qt[508968149]=Ep;var xo=class extends Se{constructor(t){super(t)}l(){return Qe(this,zg,2)}g(){ut(this,2)}},x3=[0,Wt,g3];qt[478825465]=x3;var B4=class extends Se{constructor(t){super(t)}},S3=class extends Se{constructor(t){super(t)}},Hg=class extends Se{constructor(t){super(t)}},Gg=class extends Se{constructor(t){super(t)}},M3=class extends Se{constructor(t){super(t)}},a1=[0,Wt,[0,Wt],x3,-1],E3=[0,Wt,Ht,jt],Wg=[0,Wt,Ht],T3=[0,Wt,E3,Wg,Ht],z4=lr(479097054,M3);qt[479097054]=[0,Wt,T3,a1],qt[463370452]=a1,qt[464864288]=E3;var V4=lr(462713202,Gg);qt[462713202]=T3,qt[474472470]=Wg;var H4=class extends Se{constructor(t){super(t)}},w3=class extends Se{constructor(t){super(t)}},A3=class extends Se{constructor(t){super(t)}},C3=class extends Se{constructor(t){super(t)}},Xg=[0,Wt,Ht,-1,jt],Tp=[0,Wt,Ht,At];C3.prototype.g=Qf([0,Wt,Wg,[0,Wt],Vg,Ep,Xg,Tp]);var R3=class extends Se{constructor(t){super(t)}},G4=lr(456383383,R3);qt[456383383]=[0,Wt,g3];var P3=class extends Se{constructor(t){super(t)}},W4=lr(476348187,P3);qt[476348187]=[0,Wt,N4];var b3=class extends Se{constructor(t){super(t)}},l1=class extends Se{constructor(t){super(t)}},L3=[0,xn,-1],X4=lr(458105876,class extends Se{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[xe];return t=ii(this,n),e=function(i,r,s,o){var a=l1;!o&&za(i)&&(s=0|(r=i.v)[xe]);var l=Dr(r,2);if(i=!1,l==null){if(o)return H_();l=[]}else if(l.constructor===Lr){if(!(2&l.J)||o)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[xe])):l=[];if(o){if(!l.length)return H_();i||(i=!0,su(l))}else i&&(i=!1,Yl(l),l=Tx(l));return!i&&32&s&&ru(l,32),s=Yt(r,s,2,o=new Lr(l,a,jT,void 0)),i||mo(r,s),o}(this,e,n,t),!t&&l1&&(e.ra=!0),e}});qt[458105876]=[0,L3,g4,[!0,_s,[0,ct,-1,vn]],[0,cu,At,xn]];var $g=class extends Se{constructor(t){super(t)}},D3=lr(458105758,$g);qt[458105758]=[0,Wt,ct,L3];var $d=class extends Se{constructor(t){super(t)}},u1=[0,v4,-1,Js],$4=class extends Se{constructor(t){super(t)}},I3=class extends Se{constructor(t){super(t)}},wp=[1,2];I3.prototype.g=Qf([0,wp,_t,u1,_t,[0,rn,u1]]);var U3=class extends Se{constructor(t){super(t)}},j4=lr(443442058,U3);qt[443442058]=[0,Wt,ct,jt,Ht,vn,-1,At,Ht],qt[514774813]=Xg;var N3=class extends Se{constructor(t){super(t)}},Y4=lr(516587230,N3);function Ap(t,e){return e=e?e.clone():new zg,t.displayNamesLocale!==void 0?ut(e,1,lu(t.displayNamesLocale)):t.displayNamesLocale===void 0&&ut(e,1),t.maxResults!==void 0?Ur(e,2,t.maxResults):"maxResults"in t&&ut(e,2),t.scoreThreshold!==void 0?we(e,3,t.scoreThreshold):"scoreThreshold"in t&&ut(e,3),t.categoryAllowlist!==void 0?af(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&ut(e,4),t.categoryDenylist!==void 0?af(e,5,t.categoryDenylist):"categoryDenylist"in t&&ut(e,5),e}function F3(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function jg(t,e=-1,n=""){return{categories:t.map(i=>({index:vi(i,1)??0??-1,score:Nt(i,2)??0,categoryName:fn(wt(i,3))??""??"",displayName:fn(wt(i,4))??""??""})),headIndex:e,headName:n}}function q4(t){const e={classifications:Ir(t,b4,1).map(n=>{var i;return jg(((i=Qe(n,u3,4))==null?void 0:i.g())??[],vi(n,2)??0,fn(wt(n,3))??"")})};return function(n){return n==null?n:typeof n=="bigint"?(vp(n)?n=Number(n):(n=ou(64,n),n=vp(n)?Number(n):String(n)),n):au(n)?typeof n=="number"?pg(n):mx(n):void 0}(wt(t,2,void 0,void 0,sf))!=null&&(e.timestampMs=F3(wt(t,2,void 0,void 0,sf)??Sx)),e}function O3(t){var o,a;var e=Ws(t,3,Qi,Gs()),n=Ws(t,2,ka,Gs()),i=Ws(t,1,fn,Gs()),r=Ws(t,9,fn,Gs());const s={categories:[],keypoints:[]};for(let l=0;l<e.length;l++)s.categories.push({score:e[l],index:n[l]??-1,categoryName:i[l]??"",displayName:r[l]??""});if((e=(o=Qe(t,Xd,4))==null?void 0:o.l())&&(s.boundingBox={originX:vi(e,1,zr)??0,originY:vi(e,2,zr)??0,width:vi(e,3,zr)??0,height:vi(e,4,zr)??0,angle:0}),(a=Qe(t,Xd,4))==null?void 0:a.g().length)for(const l of Qe(t,Xd,4).g())s.keypoints.push({x:wt(l,1,void 0,zr,Qi)??0,y:wt(l,2,void 0,zr,Qi)??0,score:wt(l,4,void 0,zr,Qi)??0,label:fn(wt(l,3,void 0,zr))??""});return s}function td(t){const e=[];for(const n of Ir(t,h3,1))e.push({x:Nt(n,1)??0,y:Nt(n,2)??0,z:Nt(n,3)??0,visibility:Nt(n,4)??0});return e}function Pl(t){const e=[];for(const n of Ir(t,d3,1))e.push({x:Nt(n,1)??0,y:Nt(n,2)??0,z:Nt(n,3)??0,visibility:Nt(n,4)??0});return e}function c1(t){return Array.from(t,e=>e>127?e-256:e)}function f1(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let Bu;qt[516587230]=[0,Wt,Xg,Tp,Ht],qt[518928384]=Tp;const K4=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function k3(t){if(t)return!0;if(Bu===void 0)try{await WebAssembly.instantiate(K4),Bu=!0}catch{Bu=!1}return Bu}async function zu(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await k3(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Os=class{};function B3(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function d1(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function z3(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Me(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function h1(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=z3(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function p1(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function Xi(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Vr(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,o)=>{s?(n(i,o),i=[]):i.push(r)}}Os.forVisionTasks=function(t,e=!1){return zu("vision",t??ku``,e)},Os.forTextTasks=function(t,e=!1){return zu("text",t??ku``,e)},Os.forGenAiTasks=function(t,e=!1){return zu("genai",t??ku``,e)},Os.forAudioTasks=function(t,e=!1){return zu("audio",t??ku``,e)},Os.isSimdSupported=function(t=!1){return k3(t)};async function Z4(t,e,n,i){return t=await(async(r,s,o,a,l)=>{if(s&&await d1(s),!self.ModuleFactory||o&&(await d1(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,a)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function jd(t,e){const n=Qe(t.baseOptions,ff,1)||new ff;typeof e=="string"?(ut(n,2,lu(e)),ut(n,1)):e instanceof Uint8Array&&(ut(n,1,cg(e,!1)),ut(n,2)),Ae(t.baseOptions,0,1,n)}function m1(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map(n=>n.message).join(", "))}finally{t.H=[]}}function ge(t,e){t.C=Math.max(t.C,e)}function nd(t,e){t.B=new Hn,ri(t.B,2,"PassThroughCalculator"),yt(t.B,"free_memory"),je(t.B,"free_memory_unused_out"),Rt(e,"free_memory"),wi(e,t.B)}function Ea(t,e){yt(t.B,e),je(t.B,e+"_unused_out")}function id(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var Cp=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,i,r,s,o,a;if(e){const l=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=Qe(this.baseOptions,ff,1))!=null&&r.g()||(s=Qe(this.baseOptions,ff,1))!=null&&s.l()||(o=t.baseOptions)!=null&&o.modelAssetBuffer||(a=t.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(u,c){let d=Qe(u.baseOptions,o1,3);if(!d){var h=d=new o1,p=new e1;Cl(h,4,Cc,p)}"delegate"in c&&(c.delegate==="GPU"?(c=d,h=new E4,Cl(c,2,Cc,h)):(c=d,h=new e1,Cl(c,4,Cc,h))),Ae(u.baseOptions,0,3,d)}(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then(u=>{if(u.ok)return u.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${u.status})`)}).then(u=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(u),!0,!1,!1),jd(this,"/model.dat"),this.m(),this.L()});if(l.modelAssetBuffer instanceof Uint8Array)jd(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return async function(u){const c=[];for(var d=0;;){const{done:h,value:p}=await u.read();if(h)break;c.push(p),d+=p.length}if(c.length===0)return new Uint8Array(0);if(c.length===1)return c[0];u=new Uint8Array(d),d=0;for(const h of c)u.set(h,d),d+=h.length;return u}(l.modelAssetBuffer).then(u=>{jd(this,u),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca(e=>{t=T4(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener((n,i)=>{this.H.push(Error(i))}),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,m1(this)}finishProcessing(){this.g.finishProcessing(),m1(this)}close(){this.B=void 0,this.g.closeGraph()}};function fs(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Cp.prototype.close=Cp.prototype.close;class Q4{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function g1(t,e,n){const i=t.g;if(n=fs(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function _1(t,e){const n=t.g,i=fs(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=fs(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=fs(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new Q4(n,i,r,s)}function Yg(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function J4(t,e,n,i){return Yg(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=_1(t,!0)),n=t.u):(t.A||(t.A=_1(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function V3(t,e,n){return Yg(t,e),t=fs(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function H3(t,e,n){Yg(t,e),t.B||(t.B=fs(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function ew(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var G3=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=fs(t.createProgram(),"Failed to create WebGL program"),this.X=g1(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=g1(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function xr(t,e){switch(e){case 0:return t.g.find(n=>n instanceof Uint8Array);case 1:return t.g.find(n=>n instanceof Float32Array);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Rp(t){var e=xr(t,1);if(!e){if(e=xr(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);const i=Ta(t);var n=qg(t);if(H3(n,i,W3(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function W3(t){let e=xr(t,2);if(!e){const n=Ta(t);e=$3(t);const i=Rp(t),r=X3(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Pp(t)}return e}function Ta(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=fs(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function X3(t){if(t=Ta(t),!Vu)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Vu=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Vu=t.R16F}return Vu}function qg(t){return t.l||(t.l=new G3),t.l}function $3(t){const e=Ta(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=xr(t,2);return n||(n=V3(qg(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Pp(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Vu,en=class{constructor(t,e,n,i,r,s,o){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=o,this.j&&--v1===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!xr(this,0)}ka(){return!!xr(this,1)}R(){return!!xr(this,2)}ja(){return(e=xr(t=this,0))||(e=Rp(t),e=new Uint8Array(e.map(n=>Math.round(255*n))),t.g.push(e)),e;var t,e}ia(){return Rp(this)}N(){return W3(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Ta(this),r=qg(this);i.activeTexture(i.TEXTURE1),n=V3(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=X3(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),H3(r,i,n),J4(r,i,!1,()=>{$3(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Pp(this)}),ew(r),Pp(this)}}t.push(n)}return new en(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ta(this).deleteTexture(xr(this,2)),v1=-1}};en.prototype.close=en.prototype.close,en.prototype.clone=en.prototype.clone,en.prototype.getAsWebGLTexture=en.prototype.N,en.prototype.getAsFloat32Array=en.prototype.ia,en.prototype.getAsUint8Array=en.prototype.ja,en.prototype.hasWebGLTexture=en.prototype.R,en.prototype.hasFloat32Array=en.prototype.ka,en.prototype.hasUint8Array=en.prototype.Fa;var v1=250;function zi(...t){return t.map(([e,n])=>({start:e,end:n}))}const tw=function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}}((y1=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:B3()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Me(this,i||"input_audio",s=>{Me(this,r=r||"audio_header",o=>{this.i._configureAudio(s,o,t,e??0,n)})})}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){Xi(this,"__graph_config__",e=>{t(e)}),Me(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Me(this,i,o=>{this.i._addAudioToInputStream(this.g,e,n,o,r)})}addGpuBufferToStream(t,e,n){Me(this,e,i=>{const[r,s]=h1(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(t,e,n){Me(this,e,i=>{this.i._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){Me(this,e,i=>{this.i._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){Me(this,e,i=>{this.i._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){Me(this,e,i=>{this.i._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){Me(this,e,i=>{this.i._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){Me(this,e,i=>{Me(this,t,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(t,e,n){Me(this,e,i=>{p1(this,Object.keys(t),r=>{p1(this,Object.values(t),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){Me(this,n,r=>{Me(this,e,s=>{const o=this.i._malloc(t.length);this.i.HEAPU8.set(t,o),this.i._addProtoToInputStream(o,t.length,s,r,i),this.i._free(o)})})}addEmptyPacketToStream(t,e){Me(this,t,n=>{this.i._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){Me(this,e,i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(t,e,n){Me(this,e,i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(t,e,n){Me(this,e,i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(t,e,n){Me(this,e,i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(t,e,n){Me(this,e,i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(t,e,n){Me(this,e,i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Me(this,s,o=>{this.i._addStringVectorEntry(r,o)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(t,e){Me(this,e,n=>{this.i._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){Me(this,e,n=>{this.i._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){Me(this,e,n=>{this.i._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){Me(this,e,n=>{this.i._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){Me(this,e,n=>{this.i._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){Me(this,e,n=>{Me(this,t,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){Me(this,n,i=>{Me(this,e,r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(t,e){Me(this,e,n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){Me(this,e,n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){Me(this,e,n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){Me(this,e,n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){Me(this,e,n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){Me(this,e,n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Me(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){Xi(this,t,e),Me(this,t,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(t,e){Vr(this,t,e),Me(this,t,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(t,e){Xi(this,t,e),Me(this,t,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(t,e){Vr(this,t,e),Me(this,t,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(t,e){Xi(this,t,e),Me(this,t,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(t,e){Vr(this,t,e),Me(this,t,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(t,e){Xi(this,t,e),Me(this,t,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){Vr(this,t,e),Me(this,t,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(t,e){Xi(this,t,e),Me(this,t,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(t,e){Vr(this,t,e),Me(this,t,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(t,e){Xi(this,t,e),Me(this,t,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(t,e){Vr(this,t,e),Me(this,t,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(t,e,n){Xi(this,t,e),Me(this,t,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){Vr(this,t,e),Me(this,t,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Xi(this,t,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),Me(this,t,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends y1{get ga(){return this.i}pa(t,e,n){Me(this,e,i=>{const[r,s]=h1(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)})}Z(t,e){Xi(this,t,e),Me(this,t,n=>{this.ga._attachImageListener(n)})}aa(t,e){Vr(this,t,e),Me(this,t,n=>{this.ga._attachImageVectorListener(n)})}}));var y1,Vi=class extends tw{};async function Ke(t,e,n){return async function(i,r,s,o){return Z4(i,r,s,o)}(t,n.canvas??(B3()?void 0:document.createElement("canvas")),e,n)}function j3(t,e,n,i){if(t.U){const s=new p3;if(n!=null&&n.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");we(s,1,(r.left+r.right)/2),we(s,2,(r.top+r.bottom)/2),we(s,4,r.right-r.left),we(s,3,r.bottom-r.top)}else we(s,1,.5),we(s,2,.5),we(s,4,1),we(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(we(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[o,a]=z3(e);n=Nt(s,3)*a/o,r=Nt(s,4)*o/a,we(s,4,n),we(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function Hi(t,e,n){var i;if((i=t.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");j3(t,e,n,t.C+1)}function ur(t,e,n,i){var r;if(!((r=t.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");j3(t,e,n,i)}function wa(t,e,n,i){var r=e.data;const s=e.width,o=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==o)throw Error("Unsupported channel count: "+r.length/o);return t=new en([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var si=class extends Cp{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new G3}l(t,e=!0){if("runningMode"in t&&ut(this.baseOptions,2,Kl(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};si.prototype.close=si.prototype.close;var fi=class extends si{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Ae(t=this.h=new ed,0,1,e=new Ut),we(this.h,2,.5),we(this.h,3,.3)}get baseOptions(){return Qe(this.h,Ut,1)}set baseOptions(t){Ae(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&we(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&we(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},Hi(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},ur(this,t,n,e),this.j}m(){var t=new ui;Rt(t,"image_in"),Rt(t,"norm_rect_in"),et(t,"detections");const e=new li;ar(e,F4,this.h);const n=new Hn;ri(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect_in"),je(n,"DETECTIONS:detections"),n.o(e),wi(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=f3(s),this.j.detections.push(O3(i));ge(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};fi.prototype.detectForVideo=fi.prototype.G,fi.prototype.detect=fi.prototype.F,fi.prototype.setOptions=fi.prototype.o,fi.createFromModelPath=async function(t,e){return Ke(fi,t,{baseOptions:{modelAssetPath:e}})},fi.createFromModelBuffer=function(t,e){return Ke(fi,t,{baseOptions:{modelAssetBuffer:e}})},fi.createFromOptions=function(t,e){return Ke(fi,t,e)};var Kg=zi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Zg=zi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Qg=zi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Y3=zi([474,475],[475,476],[476,477],[477,474]),Jg=zi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),e0=zi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),q3=zi([469,470],[470,471],[471,472],[472,469]),t0=zi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),K3=[...Kg,...Zg,...Qg,...Jg,...e0,...t0],Z3=zi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function x1(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Dt=class extends si{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ae(t=this.h=new y3,0,1,e=new Ut),this.A=new v3,Ae(this.h,0,3,this.A),this.u=new ed,Ae(this.h,0,2,this.u),Ur(this.u,4,1),we(this.u,2,.5),we(this.A,2,.5),we(this.h,4,.5)}get baseOptions(){return Qe(this.h,Ut,1)}set baseOptions(t){Ae(this.h,0,1,t)}o(t){return"numFaces"in t&&Ur(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&we(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&we(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&we(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return x1(this),Hi(this,t,e),this.j}G(t,e,n){return x1(this),ur(this,t,n,e),this.j}m(){var t=new ui;Rt(t,"image_in"),Rt(t,"norm_rect"),et(t,"face_landmarks");const e=new li;ar(e,k4,this.h);const n=new Hn;ri(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),je(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),wi(t,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=fu(s),this.j.faceLandmarks.push(td(i));ge(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{ge(this,i)}),this.outputFaceBlendshapes&&(et(t,"blendshapes"),je(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Jf(s),this.j.faceBlendshapes.push(jg(i.g()??[]));ge(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{ge(this,i)})),this.outputFacialTransformationMatrixes&&(et(t,"face_geometry"),je(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Qe(i=O4(s),R4,2))&&this.j.facialTransformationMatrixes.push({rows:vi(i,1)??0??0,columns:vi(i,2)??0??0,data:Ws(i,3,Qi,Gs()).slice()??[]});ge(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{ge(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Dt.prototype.detectForVideo=Dt.prototype.G,Dt.prototype.detect=Dt.prototype.F,Dt.prototype.setOptions=Dt.prototype.o,Dt.createFromModelPath=function(t,e){return Ke(Dt,t,{baseOptions:{modelAssetPath:e}})},Dt.createFromModelBuffer=function(t,e){return Ke(Dt,t,{baseOptions:{modelAssetBuffer:e}})},Dt.createFromOptions=function(t,e){return Ke(Dt,t,e)},Dt.FACE_LANDMARKS_LIPS=Kg,Dt.FACE_LANDMARKS_LEFT_EYE=Zg,Dt.FACE_LANDMARKS_LEFT_EYEBROW=Qg,Dt.FACE_LANDMARKS_LEFT_IRIS=Y3,Dt.FACE_LANDMARKS_RIGHT_EYE=Jg,Dt.FACE_LANDMARKS_RIGHT_EYEBROW=e0,Dt.FACE_LANDMARKS_RIGHT_IRIS=q3,Dt.FACE_LANDMARKS_FACE_OVAL=t0,Dt.FACE_LANDMARKS_CONTOURS=K3,Dt.FACE_LANDMARKS_TESSELATION=Z3;var n0=zi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function S1(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function M1(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function E1(t,e=!0){const n=[];for(const r of t){var i=Jf(r);t=[];for(const s of i.g())i=e&&vi(s,1)!=null?vi(s,1)??0:-1,t.push({score:Nt(s,2)??0,index:i,categoryName:fn(wt(s,3))??""??"",displayName:fn(wt(s,4))??""??""});n.push(t)}return n}var Xn=class extends si{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ae(t=this.j=new M3,0,1,e=new Ut),this.u=new Gg,Ae(this.j,0,2,this.u),this.D=new Hg,Ae(this.u,0,3,this.D),this.A=new S3,Ae(this.u,0,2,this.A),this.h=new B4,Ae(this.j,0,3,this.h),we(this.A,2,.5),we(this.u,4,.5),we(this.D,2,.5)}get baseOptions(){return Qe(this.j,Ut,1)}set baseOptions(t){Ae(this.j,0,1,t)}o(t){var r,s,o,a;if(Ur(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&we(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&we(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&we(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new xo,n=e,i=Ap(t.cannedGesturesClassifierOptions,(r=Qe(this.h,xo,3))==null?void 0:r.l());Ae(n,0,2,i),Ae(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=Qe(this.h,xo,3))==null||s.g());return t.customGesturesClassifierOptions?(Ae(n=e=new xo,0,2,i=Ap(t.customGesturesClassifierOptions,(o=Qe(this.h,xo,4))==null?void 0:o.l())),Ae(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&((a=Qe(this.h,xo,4))==null||a.g()),this.l(t)}Ha(t,e){return S1(this),Hi(this,t,e),M1(this)}Ia(t,e,n){return S1(this),ur(this,t,n,e),M1(this)}m(){var t=new ui;Rt(t,"image_in"),Rt(t,"norm_rect"),et(t,"hand_gestures"),et(t,"hand_landmarks"),et(t,"world_hand_landmarks"),et(t,"handedness");const e=new li;ar(e,z4,this.j);const n=new Hn;ri(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),je(n,"HAND_GESTURES:hand_gestures"),je(n,"LANDMARKS:hand_landmarks"),je(n,"WORLD_LANDMARKS:world_hand_landmarks"),je(n,"HANDEDNESS:handedness"),n.o(e),wi(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=fu(s);const o=[];for(const a of Ir(i,h3,1))o.push({x:Nt(a,1)??0,y:Nt(a,2)??0,z:Nt(a,3)??0,visibility:Nt(a,4)??0});this.landmarks.push(o)}ge(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ge(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=sa(s);const o=[];for(const a of Ir(i,d3,1))o.push({x:Nt(a,1)??0,y:Nt(a,2)??0,z:Nt(a,3)??0,visibility:Nt(a,4)??0});this.worldLandmarks.push(o)}ge(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ge(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...E1(i,!1)),ge(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{ge(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...E1(i)),ge(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function T1(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Xn.prototype.recognizeForVideo=Xn.prototype.Ia,Xn.prototype.recognize=Xn.prototype.Ha,Xn.prototype.setOptions=Xn.prototype.o,Xn.createFromModelPath=function(t,e){return Ke(Xn,t,{baseOptions:{modelAssetPath:e}})},Xn.createFromModelBuffer=function(t,e){return Ke(Xn,t,{baseOptions:{modelAssetBuffer:e}})},Xn.createFromOptions=function(t,e){return Ke(Xn,t,e)},Xn.HAND_CONNECTIONS=n0;var Tn=class extends si{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ae(t=this.h=new Gg,0,1,e=new Ut),this.u=new Hg,Ae(this.h,0,3,this.u),this.j=new S3,Ae(this.h,0,2,this.j),Ur(this.j,3,1),we(this.j,2,.5),we(this.u,2,.5),we(this.h,4,.5)}get baseOptions(){return Qe(this.h,Ut,1)}set baseOptions(t){Ae(this.h,0,1,t)}o(t){return"numHands"in t&&Ur(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&we(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&we(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&we(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Hi(this,t,e),T1(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ur(this,t,n,e),T1(this)}m(){var t=new ui;Rt(t,"image_in"),Rt(t,"norm_rect"),et(t,"hand_landmarks"),et(t,"world_hand_landmarks"),et(t,"handedness");const e=new li;ar(e,V4,this.h);const n=new Hn;ri(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),je(n,"LANDMARKS:hand_landmarks"),je(n,"WORLD_LANDMARKS:world_hand_landmarks"),je(n,"HANDEDNESS:handedness"),n.o(e),wi(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=fu(s),this.landmarks.push(td(i));ge(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ge(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=sa(s),this.worldLandmarks.push(Pl(i));ge(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ge(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const l of i){i=Jf(l);const u=[];for(const c of i.g())u.push({score:Nt(c,2)??0,index:vi(c,1)??0??-1,categoryName:fn(wt(c,3))??""??"",displayName:fn(wt(c,4))??""??""});a.push(u)}o.call(s,...a),ge(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Tn.prototype.detectForVideo=Tn.prototype.G,Tn.prototype.detect=Tn.prototype.F,Tn.prototype.setOptions=Tn.prototype.o,Tn.createFromModelPath=function(t,e){return Ke(Tn,t,{baseOptions:{modelAssetPath:e}})},Tn.createFromModelBuffer=function(t,e){return Ke(Tn,t,{baseOptions:{modelAssetBuffer:e}})},Tn.createFromOptions=function(t,e){return Ke(Tn,t,e)},Tn.HAND_CONNECTIONS=n0;var Q3=zi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function w1(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function A1(t){try{if(!t.D)return t.h;t.D(t.h)}finally{id(t)}}function Hu(t,e){t=fu(t),e.push(td(t))}var gt=class extends si{constructor(t,e){super(new Vi(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ae(t=this.j=new C3,0,1,e=new Ut),this.I=new Hg,Ae(this.j,0,2,this.I),this.W=new H4,Ae(this.j,0,3,this.W),this.u=new ed,Ae(this.j,0,4,this.u),this.O=new v3,Ae(this.j,0,5,this.O),this.A=new w3,Ae(this.j,0,6,this.A),this.M=new A3,Ae(this.j,0,7,this.M),we(this.u,2,.5),we(this.u,3,.3),we(this.O,2,.5),we(this.A,2,.5),we(this.A,3,.3),we(this.M,2,.5),we(this.I,2,.5)}get baseOptions(){return Qe(this.j,Ut,1)}set baseOptions(t){Ae(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&we(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&we(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&we(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&we(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&we(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&we(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&we(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,w1(this),Hi(this,t,i),A1(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,w1(this),ur(this,t,r,e),A1(this)}m(){var t=new ui;Rt(t,"input_frames_image"),et(t,"pose_landmarks"),et(t,"pose_world_landmarks"),et(t,"face_landmarks"),et(t,"left_hand_landmarks"),et(t,"left_hand_world_landmarks"),et(t,"right_hand_landmarks"),et(t,"right_hand_world_landmarks");const e=new li,n=new K_;ri(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),function(r,s){if(s!=null)if(Array.isArray(s))ut(r,2,Vf(s,0,Zl));else{if(!(typeof s=="string"||s instanceof nr||lg(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Kr(r,2,cg(s,!1),ao())}}(n,this.j.g());const i=new Hn;ri(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Tg(i,8,K_,n),yt(i,"IMAGE:input_frames_image"),je(i,"POSE_LANDMARKS:pose_landmarks"),je(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),je(i,"FACE_LANDMARKS:face_landmarks"),je(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),je(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),je(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),je(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),wi(t,i),nd(this,t),this.g.attachProtoListener("pose_landmarks",(r,s)=>{Hu(r,this.h.poseLandmarks),ge(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{ge(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var o=this.h.poseWorldLandmarks;r=sa(r),o.push(Pl(r)),ge(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{ge(this,r)}),this.outputPoseSegmentationMasks&&(je(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ea(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[wa(this,r,!0,!this.D)],ge(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],ge(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{Hu(r,this.h.faceLandmarks),ge(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{ge(this,r)}),this.outputFaceBlendshapes&&(et(t,"extra_blendshapes"),je(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Jf(r),o.push(jg(r.g()??[]))),ge(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{ge(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{Hu(r,this.h.leftHandLandmarks),ge(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{ge(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var o=this.h.leftHandWorldLandmarks;r=sa(r),o.push(Pl(r)),ge(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{ge(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{Hu(r,this.h.rightHandLandmarks),ge(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{ge(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var o=this.h.rightHandWorldLandmarks;r=sa(r),o.push(Pl(r)),ge(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{ge(this,r)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};gt.prototype.detectForVideo=gt.prototype.G,gt.prototype.detect=gt.prototype.F,gt.prototype.setOptions=gt.prototype.o,gt.createFromModelPath=function(t,e){return Ke(gt,t,{baseOptions:{modelAssetPath:e}})},gt.createFromModelBuffer=function(t,e){return Ke(gt,t,{baseOptions:{modelAssetBuffer:e}})},gt.createFromOptions=function(t,e){return Ke(gt,t,e)},gt.HAND_CONNECTIONS=n0,gt.POSE_CONNECTIONS=Q3,gt.FACE_LANDMARKS_LIPS=Kg,gt.FACE_LANDMARKS_LEFT_EYE=Zg,gt.FACE_LANDMARKS_LEFT_EYEBROW=Qg,gt.FACE_LANDMARKS_LEFT_IRIS=Y3,gt.FACE_LANDMARKS_RIGHT_EYE=Jg,gt.FACE_LANDMARKS_RIGHT_EYEBROW=e0,gt.FACE_LANDMARKS_RIGHT_IRIS=q3,gt.FACE_LANDMARKS_FACE_OVAL=t0,gt.FACE_LANDMARKS_CONTOURS=K3,gt.FACE_LANDMARKS_TESSELATION=Z3;var di=class extends si{constructor(t,e){super(new Vi(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Ae(t=this.h=new R3,0,1,e=new Ut)}get baseOptions(){return Qe(this.h,Ut,1)}set baseOptions(t){Ae(this.h,0,1,t)}o(t){return Ae(this.h,0,2,Ap(t,Qe(this.h,zg,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},Hi(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},ur(this,t,n,e),this.j}m(){var t=new ui;Rt(t,"input_image"),Rt(t,"norm_rect"),et(t,"classifications");const e=new li;ar(e,G4,this.h);const n=new Hn;ri(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),yt(n,"IMAGE:input_image"),yt(n,"NORM_RECT:norm_rect"),je(n,"CLASSIFICATIONS:classifications"),n.o(e),wi(t,n),this.g.attachProtoListener("classifications",(i,r)=>{this.j=q4(L4(i)),ge(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};di.prototype.classifyForVideo=di.prototype.ta,di.prototype.classify=di.prototype.sa,di.prototype.setOptions=di.prototype.o,di.createFromModelPath=function(t,e){return Ke(di,t,{baseOptions:{modelAssetPath:e}})},di.createFromModelBuffer=function(t,e){return Ke(di,t,{baseOptions:{modelAssetBuffer:e}})},di.createFromOptions=function(t,e){return Ke(di,t,e)};var $n=class extends si{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect",!0),this.h=new P3,this.embeddings={embeddings:[]},Ae(t=this.h,0,1,e=new Ut)}get baseOptions(){return Qe(this.h,Ut,1)}set baseOptions(t){Ae(this.h,0,1,t)}o(t){var e=this.h,n=Qe(this.h,s1,2);return n=n?n.clone():new s1,t.l2Normalize!==void 0?ut(n,1,Kl(t.l2Normalize)):"l2Normalize"in t&&ut(n,1),t.quantize!==void 0?ut(n,2,Kl(t.quantize)):"quantize"in t&&ut(n,2),Ae(e,0,2,n),this.l(t)}za(t,e){return Hi(this,t,e),this.embeddings}Aa(t,e,n){return ur(this,t,n,e),this.embeddings}m(){var t=new ui;Rt(t,"image_in"),Rt(t,"norm_rect"),et(t,"embeddings_out");const e=new li;ar(e,W4,this.h);const n=new Hn;ri(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),je(n,"EMBEDDINGS:embeddings_out"),n.o(e),wi(t,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=U4(i),this.embeddings=function(s){return{embeddings:Ir(s,I4,1).map(o=>{var u,c;const a={headIndex:vi(o,3)??0??-1,headName:fn(wt(o,4))??""??""};var l=o.v;return Ax(l,0|l[xe],r1,Hd(o,1))!==void 0?(o=Ws(o=Qe(o,r1,Hd(o,1),void 0),1,Qi,Gs()),a.floatEmbedding=o.slice()):(l=new Uint8Array(0),a.quantizedEmbedding=((c=(u=Qe(o,D4,Hd(o,2),void 0))==null?void 0:u.na())==null?void 0:c.h())??l),a}),timestampMs:F3(wt(s,2,void 0,void 0,sf)??Sx)}}(i),ge(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};$n.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=f1(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=f1(c1(t.quantizedEmbedding),c1(e.quantizedEmbedding))}return t},$n.prototype.embedForVideo=$n.prototype.Aa,$n.prototype.embed=$n.prototype.za,$n.prototype.setOptions=$n.prototype.o,$n.createFromModelPath=function(t,e){return Ke($n,t,{baseOptions:{modelAssetPath:e}})},$n.createFromModelBuffer=function(t,e){return Ke($n,t,{baseOptions:{modelAssetBuffer:e}})},$n.createFromOptions=function(t,e){return Ke($n,t,e)};var bp=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};function nw(t){var n,i;const e=function(r){return Ir(r,Hn,1)}(t.ca()).filter(r=>(fn(wt(r,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=Qe(e[0],li,7))==null?void 0:n.j())==null?void 0:i.g())??new Map).forEach((r,s)=>{t.u[Number(s)]=fn(wt(r,1))??""})}function C1(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function R1(t){try{const e=new bp(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{id(t)}}bp.prototype.close=bp.prototype.close;var bn=class extends si{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new $g,this.A=new b3,Ae(this.h,0,3,this.A),Ae(t=this.h,0,1,e=new Ut)}get baseOptions(){return Qe(this.h,Ut,1)}set baseOptions(t){Ae(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ut(this.h,2,lu(t.displayNamesLocale)):"displayNamesLocale"in t&&ut(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){nw(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,C1(this),Hi(this,t,i),R1(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,C1(this),ur(this,t,r,e),R1(this)}Da(){return this.u}m(){var t=new ui;Rt(t,"image_in"),Rt(t,"norm_rect");const e=new li;ar(e,D3,this.h);const n=new Hn;ri(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),n.o(e),wi(t,n),nd(this,t),this.outputConfidenceMasks&&(et(t,"confidence_masks"),je(n,"CONFIDENCE_MASKS:confidence_masks"),Ea(this,"confidence_masks"),this.g.aa("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>wa(this,s,!0,!this.j)),ge(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ge(this,i)})),this.outputCategoryMask&&(et(t,"category_mask"),je(n,"CATEGORY_MASK:category_mask"),Ea(this,"category_mask"),this.g.Z("category_mask",(i,r)=>{this.categoryMask=wa(this,i,!1,!this.j),ge(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ge(this,i)})),et(t,"quality_scores"),je(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ge(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};bn.prototype.getLabels=bn.prototype.Da,bn.prototype.segmentForVideo=bn.prototype.La,bn.prototype.segment=bn.prototype.segment,bn.prototype.setOptions=bn.prototype.o,bn.createFromModelPath=function(t,e){return Ke(bn,t,{baseOptions:{modelAssetPath:e}})},bn.createFromModelBuffer=function(t,e){return Ke(bn,t,{baseOptions:{modelAssetBuffer:e}})},bn.createFromOptions=function(t,e){return Ke(bn,t,e)};var Lp=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};Lp.prototype.close=Lp.prototype.close;var $i=class extends si{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new $g,this.u=new b3,Ae(this.h,0,3,this.u),Ae(t=this.h,0,1,e=new Ut)}get baseOptions(){return Qe(this.h,Ut,1)}set baseOptions(t){Ae(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new I3,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new $d;Kr(s,3,Kl(!0),!1),Kr(s,1,gl(e.keypoint.x),0),Kr(s,2,gl(e.keypoint.y),0),Cl(i,1,wp,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const a=new $4;for(s of e.scribble)Kr(e=new $d,3,Kl(!0),!1),Kr(e,1,gl(s.x),0),Kr(e,2,gl(s.y),0),Tg(a,1,$d,e);Cl(i,2,wp,a)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Hi(this,t,r);e:{try{const a=new Lp(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=a;break e}this.j(a)}finally{id(this)}o=void 0}return o}m(){var t=new ui;Rt(t,"image_in"),Rt(t,"roi_in"),Rt(t,"norm_rect_in");const e=new li;ar(e,D3,this.h);const n=new Hn;ri(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),yt(n,"IMAGE:image_in"),yt(n,"ROI:roi_in"),yt(n,"NORM_RECT:norm_rect_in"),n.o(e),wi(t,n),nd(this,t),this.outputConfidenceMasks&&(et(t,"confidence_masks"),je(n,"CONFIDENCE_MASKS:confidence_masks"),Ea(this,"confidence_masks"),this.g.aa("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>wa(this,s,!0,!this.j)),ge(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ge(this,i)})),this.outputCategoryMask&&(et(t,"category_mask"),je(n,"CATEGORY_MASK:category_mask"),Ea(this,"category_mask"),this.g.Z("category_mask",(i,r)=>{this.categoryMask=wa(this,i,!1,!this.j),ge(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ge(this,i)})),et(t,"quality_scores"),je(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ge(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};$i.prototype.segment=$i.prototype.segment,$i.prototype.setOptions=$i.prototype.o,$i.createFromModelPath=function(t,e){return Ke($i,t,{baseOptions:{modelAssetPath:e}})},$i.createFromModelBuffer=function(t,e){return Ke($i,t,{baseOptions:{modelAssetBuffer:e}})},$i.createFromOptions=function(t,e){return Ke($i,t,e)};var hi=class extends si{constructor(t,e){super(new Vi(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ae(t=this.h=new U3,0,1,e=new Ut)}get baseOptions(){return Qe(this.h,Ut,1)}set baseOptions(t){Ae(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ut(this.h,2,lu(t.displayNamesLocale)):"displayNamesLocale"in t&&ut(this.h,2),t.maxResults!==void 0?Ur(this.h,3,t.maxResults):"maxResults"in t&&ut(this.h,3),t.scoreThreshold!==void 0?we(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&ut(this.h,4),t.categoryAllowlist!==void 0?af(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&ut(this.h,5),t.categoryDenylist!==void 0?af(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&ut(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},Hi(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},ur(this,t,n,e),this.j}m(){var t=new ui;Rt(t,"input_frame_gpu"),Rt(t,"norm_rect"),et(t,"detections");const e=new li;ar(e,j4,this.h);const n=new Hn;ri(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),yt(n,"IMAGE:input_frame_gpu"),yt(n,"NORM_RECT:norm_rect"),je(n,"DETECTIONS:detections"),n.o(e),wi(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=f3(s),this.j.detections.push(O3(i));ge(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ge(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};hi.prototype.detectForVideo=hi.prototype.G,hi.prototype.detect=hi.prototype.F,hi.prototype.setOptions=hi.prototype.o,hi.createFromModelPath=async function(t,e){return Ke(hi,t,{baseOptions:{modelAssetPath:e}})},hi.createFromModelBuffer=function(t,e){return Ke(hi,t,{baseOptions:{modelAssetBuffer:e}})},hi.createFromOptions=function(t,e){return Ke(hi,t,e)};var Dp=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach(e=>{e.close()})}};function P1(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function b1(t){try{const e=new Dp(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{id(t)}}Dp.prototype.close=Dp.prototype.close;var jn=class extends si{constructor(t,e){super(new Vi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ae(t=this.h=new N3,0,1,e=new Ut),this.A=new A3,Ae(this.h,0,3,this.A),this.j=new w3,Ae(this.h,0,2,this.j),Ur(this.j,4,1),we(this.j,2,.5),we(this.A,2,.5),we(this.h,4,.5)}get baseOptions(){return Qe(this.h,Ut,1)}set baseOptions(t){Ae(this.h,0,1,t)}o(t){return"numPoses"in t&&Ur(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&we(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&we(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&we(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,P1(this),Hi(this,t,i),b1(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,P1(this),ur(this,t,r,e),b1(this)}m(){var t=new ui;Rt(t,"image_in"),Rt(t,"norm_rect"),et(t,"normalized_landmarks"),et(t,"world_landmarks"),et(t,"segmentation_masks");const e=new li;ar(e,Y4,this.h);const n=new Hn;ri(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),yt(n,"IMAGE:image_in"),yt(n,"NORM_RECT:norm_rect"),je(n,"NORM_LANDMARKS:normalized_landmarks"),je(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),wi(t,n),nd(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=fu(s),this.landmarks.push(td(i));ge(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],ge(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=sa(s),this.worldLandmarks.push(Pl(i));ge(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],ge(this,i)}),this.outputSegmentationMasks&&(je(n,"SEGMENTATION_MASK:segmentation_masks"),Ea(this,"segmentation_masks"),this.g.aa("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>wa(this,s,!0,!this.u)),ge(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],ge(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};jn.prototype.detectForVideo=jn.prototype.G,jn.prototype.detect=jn.prototype.F,jn.prototype.setOptions=jn.prototype.o,jn.createFromModelPath=function(t,e){return Ke(jn,t,{baseOptions:{modelAssetPath:e}})},jn.createFromModelBuffer=function(t,e){return Ke(jn,t,{baseOptions:{modelAssetBuffer:e}})},jn.createFromOptions=function(t,e){return Ke(jn,t,e)},jn.POSE_CONNECTIONS=Q3;function iw({videoRef:t,isVideoReady:e,onHandsUpdate:n}){const i=pt.useRef(null),r=pt.useRef(0),s=pt.useRef(-1);return pt.useEffect(()=>{if(!e)return;let o=!0;async function a(){try{const u=await Os.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");i.current=await Tn.createFromOptions(u,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5}),o&&l()}catch(u){console.warn("HandLandmarker init failed, retrying with CPU:",u);try{const c=await Os.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");i.current=await Tn.createFromOptions(c,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"CPU"},runningMode:"VIDEO",numHands:2}),o&&l()}catch(c){console.error("HandLandmarker completely failed:",c)}}}function l(){var h,p;if(!o)return;const u=t.current,c=i.current;if(!u||!c||u.readyState<2){r.current=requestAnimationFrame(l);return}const d=u.currentTime;if(d!==s.current){s.current=d;try{const v=c.detectForVideo(u,performance.now()),y=[];for(let m=0;m<v.landmarks.length;m++){const f=v.landmarks[m],_=(p=(h=v.handedness[m])==null?void 0:h[0])==null?void 0:p.categoryName,g=P=>(1-P.x)*window.innerWidth,M=P=>P.y*window.innerHeight;y.push({indexTip:{x:g(f[8]),y:M(f[8])},thumbTip:{x:g(f[4]),y:M(f[4])},palmBase:{x:g(f[0]),y:M(f[0])},handedness:_,landmarks:f.map(P=>({x:g(P),y:M(P),z:P.z*window.innerWidth}))})}n(y)}catch{}}r.current=requestAnimationFrame(l)}return a(),()=>{var u;o=!1,cancelAnimationFrame(r.current),(u=i.current)==null||u.close()}},[e,t,n]),null}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const i0="167",rw=0,L1=1,sw=2,J3=1,ow=2,_r=3,vs=0,Bn=1,Sr=2,ds=0,eo=1,df=2,D1=3,I1=4,aw=5,ks=100,lw=101,uw=102,cw=103,fw=104,dw=200,hw=201,pw=202,mw=203,Ip=204,Up=205,gw=206,_w=207,vw=208,yw=209,xw=210,Sw=211,Mw=212,Ew=213,Tw=214,ww=0,Aw=1,Cw=2,hf=3,Rw=4,Pw=5,bw=6,Lw=7,eS=0,Dw=1,Iw=2,hs=0,Uw=1,Nw=2,Fw=3,Ow=4,kw=5,Bw=6,zw=7,tS=300,Aa=301,Ca=302,Np=303,Fp=304,rd=306,Op=1e3,Xs=1001,kp=1002,yi=1003,Vw=1004,Gu=1005,Zn=1006,Yd=1007,$s=1008,Nr=1009,nS=1010,iS=1011,Ql=1012,r0=1013,co=1014,Tr=1015,ja=1016,s0=1017,o0=1018,Ra=1020,rS=35902,sS=1021,oS=1022,xi=1023,aS=1024,lS=1025,oa=1026,Pa=1027,uS=1028,a0=1029,cS=1030,l0=1031,u0=1033,Rc=33776,Pc=33777,bc=33778,Lc=33779,Bp=35840,zp=35841,Vp=35842,Hp=35843,Gp=36196,Wp=37492,Xp=37496,$p=37808,jp=37809,Yp=37810,qp=37811,Kp=37812,Zp=37813,Qp=37814,Jp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,Dc=36492,om=36494,am=36495,fS=36283,lm=36284,um=36285,cm=36286,Hw=3200,Gw=3201,Ww=0,Xw=1,es="",Yi="srgb",Ts="srgb-linear",c0="display-p3",sd="display-p3-linear",pf="linear",ht="srgb",mf="rec709",gf="p3",So=7680,U1=519,$w=512,jw=513,Yw=514,dS=515,qw=516,Kw=517,Zw=518,Qw=519,N1=35044,F1="300 es",wr=2e3,_f=2001;class Ya{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qd=Math.PI/180,fm=180/Math.PI;function du(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[t&255]+gn[t>>8&255]+gn[t>>16&255]+gn[t>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function In(t,e,n){return Math.max(e,Math.min(n,t))}function Jw(t,e){return(t%e+e)%e}function Kd(t,e,n){return(1-n)*t+n*e}function sl(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(In(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],v=i[8],y=r[0],m=r[3],f=r[6],_=r[1],g=r[4],M=r[7],P=r[2],A=r[5],w=r[8];return s[0]=o*y+a*_+l*P,s[3]=o*m+a*g+l*A,s[6]=o*f+a*M+l*w,s[1]=u*y+c*_+d*P,s[4]=u*m+c*g+d*A,s[7]=u*f+c*M+d*w,s[2]=h*y+p*_+v*P,s[5]=h*m+p*g+v*A,s[8]=h*f+p*M+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Zd.makeScale(e,n)),this}rotate(e){return this.premultiply(Zd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Zd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zd=new He;function hS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function vf(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eA(){const t=vf("canvas");return t.style.display="block",t}const O1={};function bl(t){t in O1||(O1[t]=!0,console.warn(t))}function tA(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const k1=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),B1=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ol={[Ts]:{transfer:pf,primaries:mf,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Yi]:{transfer:ht,primaries:mf,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[sd]:{transfer:pf,primaries:gf,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(B1),fromReference:t=>t.applyMatrix3(k1)},[c0]:{transfer:ht,primaries:gf,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(B1),fromReference:t=>t.applyMatrix3(k1).convertLinearToSRGB()}},nA=new Set([Ts,sd]),st={enabled:!0,_workingColorSpace:Ts,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!nA.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ol[e].toReference,r=ol[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ol[t].primaries},getTransfer:function(t){return t===es?pf:ol[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ol[e].luminanceCoefficients)}};function aa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Qd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Mo;class iA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mo===void 0&&(Mo=vf("canvas")),Mo.width=e.width,Mo.height=e.height;const i=Mo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Mo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vf("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=aa(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(aa(n[i]/255)*255):n[i]=aa(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rA=0;class pS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=du(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jd(r[o].image)):s.push(Jd(r[o]))}else s=Jd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Jd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?iA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sA=0;class zn extends Ya{constructor(e=zn.DEFAULT_IMAGE,n=zn.DEFAULT_MAPPING,i=Xs,r=Xs,s=Zn,o=$s,a=xi,l=Nr,u=zn.DEFAULT_ANISOTROPY,c=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sA++}),this.uuid=du(),this.name="",this.source=new pS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Op:e.x=e.x-Math.floor(e.x);break;case Xs:e.x=e.x<0?0:1;break;case kp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Op:e.y=e.y-Math.floor(e.y);break;case Xs:e.y=e.y<0?0:1;break;case kp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=tS;zn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,n=0,i=0,r=1){sn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],v=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,M=(p+1)/2,P=(f+1)/2,A=(c+h)/4,w=(d+y)/4,L=(v+m)/4;return g>M&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=w/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=L/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-y)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oA extends Ya{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new sn(0,0,e,n),this.scissorTest=!1,this.viewport=new sn(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new zn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new pS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends oA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mS extends zn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yi,this.minFilter=yi,this.wrapR=Xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aA extends zn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yi,this.minFilter=yi,this.wrapR=Xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hu{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(d!==y||l!==h||u!==p||c!==v){let m=1-a;const f=l*h+u*p+c*v+d*y,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const P=Math.sqrt(g),A=Math.atan2(P,f*_);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const M=a*_;if(l=l*m+h*M,u=u*m+p*M,c=c*m+v*M,d=d*m+y*M,m===1-a){const P=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=P,u*=P,c*=P,d*=P}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+c*d+l*p-u*h,e[n+1]=l*v+c*h+u*d-a*p,e[n+2]=u*v+c*p+a*h-l*d,e[n+3]=c*v-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"YXZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"ZXY":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"ZYX":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"YZX":this._x=h*c*d+u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d-h*p*v;break;case"XZY":this._x=h*c*d-u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(z1.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(z1.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(In(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eh=new B,z1=new hu;class pu{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ri):Ri.fromBufferAttribute(s,o),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wu.copy(i.boundingBox)),Wu.applyMatrix4(e.matrixWorld),this.union(Wu)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(al),Xu.subVectors(this.max,al),Eo.subVectors(e.a,al),To.subVectors(e.b,al),wo.subVectors(e.c,al),Hr.subVectors(To,Eo),Gr.subVectors(wo,To),Cs.subVectors(Eo,wo);let n=[0,-Hr.z,Hr.y,0,-Gr.z,Gr.y,0,-Cs.z,Cs.y,Hr.z,0,-Hr.x,Gr.z,0,-Gr.x,Cs.z,0,-Cs.x,-Hr.y,Hr.x,0,-Gr.y,Gr.x,0,-Cs.y,Cs.x,0];return!th(n,Eo,To,wo,Xu)||(n=[1,0,0,0,1,0,0,0,1],!th(n,Eo,To,wo,Xu))?!1:($u.crossVectors(Hr,Gr),n=[$u.x,$u.y,$u.z],th(n,Eo,To,wo,Xu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fr=[new B,new B,new B,new B,new B,new B,new B,new B],Ri=new B,Wu=new pu,Eo=new B,To=new B,wo=new B,Hr=new B,Gr=new B,Cs=new B,al=new B,Xu=new B,$u=new B,Rs=new B;function th(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Rs.fromArray(t,s);const a=r.x*Math.abs(Rs.x)+r.y*Math.abs(Rs.y)+r.z*Math.abs(Rs.z),l=e.dot(Rs),u=n.dot(Rs),c=i.dot(Rs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const lA=new pu,ll=new B,nh=new B;class od{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ll.subVectors(e,this.center);const n=ll.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ll,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ll.copy(e.center).add(nh)),this.expandByPoint(ll.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dr=new B,ih=new B,ju=new B,Wr=new B,rh=new B,Yu=new B,sh=new B;class gS{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=dr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,n),dr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ih.copy(e).add(n).multiplyScalar(.5),ju.copy(n).sub(e).normalize(),Wr.copy(this.origin).sub(ih);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ju),a=Wr.dot(this.direction),l=-Wr.dot(ju),u=Wr.lengthSq(),c=Math.abs(1-o*o);let d,h,p,v;if(c>0)if(d=o*l-a,h=o*a-l,v=s*c,d>=0)if(h>=-v)if(h<=v){const y=1/c;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ih).addScaledVector(ju,h),p}intersectSphere(e,n){dr.subVectors(e.center,this.origin);const i=dr.dot(this.direction),r=dr.dot(dr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,n,i,r,s){rh.subVectors(n,e),Yu.subVectors(i,e),sh.crossVectors(rh,Yu);let o=this.direction.dot(sh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wr.subVectors(this.origin,e);const l=a*this.direction.dot(Yu.crossVectors(Wr,Yu));if(l<0)return null;const u=a*this.direction.dot(rh.cross(Wr));if(u<0||l+u>o)return null;const c=-a*Wr.dot(sh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,i,r,s,o,a,l,u,c,d,h,p,v,y,m){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,d,h,p,v,y,m)}set(e,n,i,r,s,o,a,l,u,c,d,h,p,v,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ao.setFromMatrixColumn(e,0).length(),s=1/Ao.setFromMatrixColumn(e,1).length(),o=1/Ao.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,v=a*c,y=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+v*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,v=u*c,y=u*d;n[0]=h+y*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=p*a-v,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,v=u*c,y=u*d;n[0]=h-y*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*c,n[9]=y-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,v=a*c,y=a*d;n[0]=l*c,n[4]=v*u-p,n[8]=h*u+y,n[1]=l*d,n[5]=y*u+h,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,y=a*u;n[0]=l*c,n[4]=y-h*d,n[8]=v*d+p,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+v,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,y=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+y,n[5]=o*c,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*c,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uA,e,cA)}lookAt(e,n,i){const r=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Xr.crossVectors(i,Yn),Xr.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Xr.crossVectors(i,Yn)),Xr.normalize(),qu.crossVectors(Yn,Xr),r[0]=Xr.x,r[4]=qu.x,r[8]=Yn.x,r[1]=Xr.y,r[5]=qu.y,r[9]=Yn.y,r[2]=Xr.z,r[6]=qu.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],v=i[2],y=i[6],m=i[10],f=i[14],_=i[3],g=i[7],M=i[11],P=i[15],A=r[0],w=r[4],L=r[8],T=r[12],x=r[1],b=r[5],H=r[9],F=r[13],W=r[2],$=r[6],G=r[10],Y=r[14],D=r[3],X=r[7],K=r[11],oe=r[15];return s[0]=o*A+a*x+l*W+u*D,s[4]=o*w+a*b+l*$+u*X,s[8]=o*L+a*H+l*G+u*K,s[12]=o*T+a*F+l*Y+u*oe,s[1]=c*A+d*x+h*W+p*D,s[5]=c*w+d*b+h*$+p*X,s[9]=c*L+d*H+h*G+p*K,s[13]=c*T+d*F+h*Y+p*oe,s[2]=v*A+y*x+m*W+f*D,s[6]=v*w+y*b+m*$+f*X,s[10]=v*L+y*H+m*G+f*K,s[14]=v*T+y*F+m*Y+f*oe,s[3]=_*A+g*x+M*W+P*D,s[7]=_*w+g*b+M*$+P*X,s[11]=_*L+g*H+M*G+P*K,s[15]=_*T+g*F+M*Y+P*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],v=e[3],y=e[7],m=e[11],f=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+y*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],v=e[12],y=e[13],m=e[14],f=e[15],_=d*m*u-y*h*u+y*l*p-a*m*p-d*l*f+a*h*f,g=v*h*u-c*m*u-v*l*p+o*m*p+c*l*f-o*h*f,M=c*y*u-v*d*u+v*a*p-o*y*p-c*a*f+o*d*f,P=v*d*l-c*y*l-v*a*h+o*y*h+c*a*m-o*d*m,A=n*_+i*g+r*M+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=_*w,e[1]=(y*h*s-d*m*s-y*r*p+i*m*p+d*r*f-i*h*f)*w,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*f+i*l*f)*w,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*w,e[4]=g*w,e[5]=(c*m*s-v*h*s+v*r*p-n*m*p-c*r*f+n*h*f)*w,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*f-n*l*f)*w,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*p+n*l*p)*w,e[8]=M*w,e[9]=(v*d*s-c*y*s-v*i*p+n*y*p+c*i*f-n*d*f)*w,e[10]=(o*y*s-v*a*s+v*i*u-n*y*u-o*i*f+n*a*f)*w,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*p-n*a*p)*w,e[12]=P*w,e[13]=(c*y*r-v*d*r+v*i*h-n*y*h-c*i*m+n*d*m)*w,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*m-n*a*m)*w,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,v=s*d,y=o*c,m=o*d,f=a*d,_=l*u,g=l*c,M=l*d,P=i.x,A=i.y,w=i.z;return r[0]=(1-(y+f))*P,r[1]=(p+M)*P,r[2]=(v-g)*P,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(h+f))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(v+g)*w,r[9]=(m-_)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ao.set(r[0],r[1],r[2]).length();const o=Ao.set(r[4],r[5],r[6]).length(),a=Ao.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pi.copy(this);const u=1/s,c=1/o,d=1/a;return Pi.elements[0]*=u,Pi.elements[1]*=u,Pi.elements[2]*=u,Pi.elements[4]*=c,Pi.elements[5]*=c,Pi.elements[6]*=c,Pi.elements[8]*=d,Pi.elements[9]*=d,Pi.elements[10]*=d,n.setFromRotationMatrix(Pi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=wr){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===wr)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===_f)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=wr){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(o-s),h=(n+e)*u,p=(i+r)*c;let v,y;if(a===wr)v=(o+s)*d,y=-2*d;else if(a===_f)v=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ao=new B,Pi=new Gt,uA=new B(0,0,0),cA=new B(1,1,1),Xr=new B,qu=new B,Yn=new B,V1=new Gt,H1=new hu;class Fr{constructor(e=0,n=0,i=0,r=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(In(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-In(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(In(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-In(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(In(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-In(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return V1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(V1,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return H1.setFromEuler(this),this.setFromQuaternion(H1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class _S{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fA=0;const G1=new B,Co=new hu,hr=new Gt,Ku=new B,ul=new B,dA=new B,hA=new hu,W1=new B(1,0,0),X1=new B(0,1,0),$1=new B(0,0,1),j1={type:"added"},pA={type:"removed"},Ro={type:"childadded",child:null},oh={type:"childremoved",child:null};class Vn extends Ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fA++}),this.uuid=du(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new B,n=new Fr,i=new hu,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new He}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _S,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Co.setFromAxisAngle(e,n),this.quaternion.multiply(Co),this}rotateOnWorldAxis(e,n){return Co.setFromAxisAngle(e,n),this.quaternion.premultiply(Co),this}rotateX(e){return this.rotateOnAxis(W1,e)}rotateY(e){return this.rotateOnAxis(X1,e)}rotateZ(e){return this.rotateOnAxis($1,e)}translateOnAxis(e,n){return G1.copy(e).applyQuaternion(this.quaternion),this.position.add(G1.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(W1,e)}translateY(e){return this.translateOnAxis(X1,e)}translateZ(e){return this.translateOnAxis($1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ku.copy(e):Ku.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(ul,Ku,this.up):hr.lookAt(Ku,ul,this.up),this.quaternion.setFromRotationMatrix(hr),r&&(hr.extractRotation(r.matrixWorld),Co.setFromRotationMatrix(hr),this.quaternion.premultiply(Co.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j1),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pA),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j1),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,e,dA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,hA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vn.DEFAULT_UP=new B(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new B,pr=new B,ah=new B,mr=new B,Po=new B,bo=new B,Y1=new B,lh=new B,uh=new B,ch=new B;class Zi{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bi.subVectors(e,n),r.cross(bi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bi.subVectors(r,n),pr.subVectors(i,n),ah.subVectors(e,n);const o=bi.dot(bi),a=bi.dot(pr),l=bi.dot(ah),u=pr.dot(pr),c=pr.dot(ah),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mr.x),l.addScaledVector(o,mr.y),l.addScaledVector(a,mr.z),l)}static isFrontFacing(e,n,i,r){return bi.subVectors(i,n),pr.subVectors(e,n),bi.cross(pr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),bi.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Zi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Po.subVectors(r,i),bo.subVectors(s,i),lh.subVectors(e,i);const l=Po.dot(lh),u=bo.dot(lh);if(l<=0&&u<=0)return n.copy(i);uh.subVectors(e,r);const c=Po.dot(uh),d=bo.dot(uh);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Po,o);ch.subVectors(e,s);const p=Po.dot(ch),v=bo.dot(ch);if(v>=0&&p<=v)return n.copy(s);const y=p*u-l*v;if(y<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(bo,a);const m=c*v-p*d;if(m<=0&&d-c>=0&&p-v>=0)return Y1.subVectors(s,r),a=(d-c)/(d-c+(p-v)),n.copy(r).addScaledVector(Y1,a);const f=1/(m+y+h);return o=y*f,a=h*f,n.copy(i).addScaledVector(Po,o).addScaledVector(bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},Zu={h:0,s:0,l:0};function fh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=Jw(e,1),n=In(n,0,1),i=In(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=fh(o,s,e+1/3),this.g=fh(o,s,e),this.b=fh(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=Yi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yi){const i=vS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}copyLinearToSRGB(e){return this.r=Qd(e.r),this.g=Qd(e.g),this.b=Qd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yi){return st.fromWorkingColorSpace(_n.copy(this),e),Math.round(In(_n.r*255,0,255))*65536+Math.round(In(_n.g*255,0,255))*256+Math.round(In(_n.b*255,0,255))}getHexString(e=Yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(_n.copy(this),n);const i=_n.r,r=_n.g,s=_n.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Yi){st.fromWorkingColorSpace(_n.copy(this),e);const n=_n.r,i=_n.g,r=_n.b;return e!==Yi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($r),this.setHSL($r.h+e,$r.s+n,$r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($r),e.getHSL(Zu);const i=Kd($r.h,Zu.h,n),r=Kd($r.s,Zu.s,n),s=Kd($r.l,Zu.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new at;at.NAMES=vS;let mA=0;class mu extends Ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mA++}),this.uuid=du(),this.name="",this.type="Material",this.blending=eo,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ip,this.blendDst=Up,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=hf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(i.blending=this.blending),this.side!==vs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ip&&(i.blendSrc=this.blendSrc),this.blendDst!==Up&&(i.blendDst=this.blendDst),this.blendEquation!==ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U1&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==So&&(i.stencilFail=this.stencilFail),this.stencilZFail!==So&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==So&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class yS extends mu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=eS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new B,Qu=new Je;class Nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=N1,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return bl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qu.fromBufferAttribute(this,n),Qu.applyMatrix3(e),this.setXY(n,Qu.x,Qu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=sl(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=sl(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=sl(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=sl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=sl(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array),r=Ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array),r=Ln(r,this.array),s=Ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==N1&&(e.usage=this.usage),e}}class xS extends Nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class SS extends Nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class to extends Nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gA=0;const pi=new Gt,dh=new Vn,Lo=new B,qn=new pu,cl=new pu,Jt=new B;class rr extends Ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=du(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hS(e)?SS:xS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,n,i){return pi.makeTranslation(e,n,i),this.applyMatrix4(pi),this}scale(e,n,i){return pi.makeScale(e,n,i),this.applyMatrix4(pi),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new to(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new od);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];cl.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(qn.min,cl.min),qn.expandByPoint(Jt),Jt.addVectors(qn.max,cl.max),qn.expandByPoint(Jt)):(qn.expandByPoint(cl.min),qn.expandByPoint(cl.max))}qn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Jt.fromBufferAttribute(a,u),l&&(Lo.fromBufferAttribute(e,u),Jt.add(Lo)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new B,l[L]=new B;const u=new B,c=new B,d=new B,h=new Je,p=new Je,v=new Je,y=new B,m=new B;function f(L,T,x){u.fromBufferAttribute(i,L),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,x),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,x),c.sub(u),d.sub(u),p.sub(h),v.sub(h);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(y.copy(c).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(b),a[L].add(y),a[T].add(y),a[x].add(y),l[L].add(m),l[T].add(m),l[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,T=_.length;L<T;++L){const x=_[L],b=x.start,H=x.count;for(let F=b,W=b+H;F<W;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const g=new B,M=new B,P=new B,A=new B;function w(L){P.fromBufferAttribute(r,L),A.copy(P);const T=a[L];g.copy(T),g.sub(P.multiplyScalar(P.dot(T))).normalize(),M.crossVectors(A,T);const b=M.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,b)}for(let L=0,T=_.length;L<T;++L){const x=_[L],b=x.start,H=x.count;for(let F=b,W=b+H;F<W;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,d=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let f=0;f<c;f++)h[v++]=u[p++]}return new Nn(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const q1=new Gt,Ps=new gS,Ju=new od,K1=new B,Do=new B,Io=new B,Uo=new B,hh=new B,ec=new B,tc=new Je,nc=new Je,ic=new Je,Z1=new B,Q1=new B,J1=new B,rc=new B,sc=new B;class Ji extends Vn{constructor(e=new rr,n=new yS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ec.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(hh.fromBufferAttribute(d,e),o?ec.addScaledVector(hh,c):ec.addScaledVector(hh.sub(n),c))}n.add(ec)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ju.copy(i.boundingSphere),Ju.applyMatrix4(s),Ps.copy(e.ray).recast(e.near),!(Ju.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Ju,K1)===null||Ps.origin.distanceToSquared(K1)>(e.far-e.near)**2))&&(q1.copy(s).invert(),Ps.copy(e.ray).applyMatrix4(q1),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ps)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const m=h[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,P=g;M<P;M+=3){const A=a.getX(M),w=a.getX(M+1),L=a.getX(M+2);r=oc(this,f,e,i,u,c,d,A,w,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const _=a.getX(m),g=a.getX(m+1),M=a.getX(m+2);r=oc(this,o,e,i,u,c,d,_,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const m=h[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,P=g;M<P;M+=3){const A=M,w=M+1,L=M+2;r=oc(this,f,e,i,u,c,d,A,w,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const _=m,g=m+1,M=m+2;r=oc(this,o,e,i,u,c,d,_,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function _A(t,e,n,i,r,s,o,a){let l;if(e.side===Bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===vs,a),l===null)return null;sc.copy(a),sc.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(sc);return u<n.near||u>n.far?null:{distance:u,point:sc.clone(),object:t}}function oc(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Do),t.getVertexPosition(l,Io),t.getVertexPosition(u,Uo);const c=_A(t,e,n,i,Do,Io,Uo,rc);if(c){r&&(tc.fromBufferAttribute(r,a),nc.fromBufferAttribute(r,l),ic.fromBufferAttribute(r,u),c.uv=Zi.getInterpolation(rc,Do,Io,Uo,tc,nc,ic,new Je)),s&&(tc.fromBufferAttribute(s,a),nc.fromBufferAttribute(s,l),ic.fromBufferAttribute(s,u),c.uv1=Zi.getInterpolation(rc,Do,Io,Uo,tc,nc,ic,new Je)),o&&(Z1.fromBufferAttribute(o,a),Q1.fromBufferAttribute(o,l),J1.fromBufferAttribute(o,u),c.normal=Zi.getInterpolation(rc,Do,Io,Uo,Z1,Q1,J1,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new B,materialIndex:0};Zi.getNormal(Do,Io,Uo,d.normal),c.face=d}return c}class gu extends rr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new to(u,3)),this.setAttribute("normal",new to(c,3)),this.setAttribute("uv",new to(d,2));function v(y,m,f,_,g,M,P,A,w,L,T){const x=M/w,b=P/L,H=M/2,F=P/2,W=A/2,$=w+1,G=L+1;let Y=0,D=0;const X=new B;for(let K=0;K<G;K++){const oe=K*b-F;for(let ne=0;ne<$;ne++){const Pe=ne*x-H;X[y]=Pe*_,X[m]=oe*g,X[f]=W,u.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[f]=A>0?1:-1,c.push(X.x,X.y,X.z),d.push(ne/w),d.push(1-K/L),Y+=1}}for(let K=0;K<L;K++)for(let oe=0;oe<w;oe++){const ne=h+oe+$*K,Pe=h+oe+$*(K+1),V=h+(oe+1)+$*(K+1),Q=h+(oe+1)+$*K;l.push(ne,Pe,Q),l.push(Pe,V,Q),D+=6}a.addGroup(p,D,T),p+=D,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ba(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function wn(t){const e={};for(let n=0;n<t.length;n++){const i=ba(t[n]);for(const r in i)e[r]=i[r]}return e}function vA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function MS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const yA={clone:ba,merge:wn};var xA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends mu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xA,this.fragmentShader=SA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ba(e.uniforms),this.uniformsGroups=vA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ES extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=wr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jr=new B,ev=new Je,tv=new Je;class Ui extends ES{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fm*2*Math.atan(Math.tan(qd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,n){return this.getViewBounds(e,ev,tv),n.subVectors(tv,ev)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(qd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const No=-90,Fo=1;class MA extends Vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ui(No,Fo,e,n);r.layers=this.layers,this.add(r);const s=new Ui(No,Fo,e,n);s.layers=this.layers,this.add(s);const o=new Ui(No,Fo,e,n);o.layers=this.layers,this.add(o);const a=new Ui(No,Fo,e,n);a.layers=this.layers,this.add(a);const l=new Ui(No,Fo,e,n);l.layers=this.layers,this.add(l);const u=new Ui(No,Fo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===wr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_f)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class TS extends zn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Aa,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EA extends ys{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new TS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new gu(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:ba(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:ds});s.uniforms.tEquirect.value=n;const o=new Ji(r,s),a=n.minFilter;return n.minFilter===$s&&(n.minFilter=Zn),new MA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ph=new B,TA=new B,wA=new He;class Ns{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ph.subVectors(i,n).cross(TA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ph),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wA.getNormalMatrix(e),r=this.coplanarPoint(ph).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new od,ac=new B;class wS{constructor(e=new Ns,n=new Ns,i=new Ns,r=new Ns,s=new Ns,o=new Ns){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],v=r[9],y=r[10],m=r[11],f=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,h-u,m-p,M-f).normalize(),i[1].setComponents(l+s,h+u,m+p,M+f).normalize(),i[2].setComponents(l+o,h+c,m+v,M+_).normalize(),i[3].setComponents(l-o,h-c,m-v,M-_).normalize(),i[4].setComponents(l-a,h-d,m-y,M-g).normalize(),n===wr)i[5].setComponents(l+a,h+d,m+y,M+g).normalize();else if(n===_f)i[5].setComponents(a,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ac.x=r.normal.x>0?e.max.x:e.min.x,ac.y=r.normal.y>0?e.max.y:e.min.y,ac.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function AS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function AA(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,a),d.count===-1&&h.length===0&&t.bufferSubData(u,0,c),h.length!==0){for(let p=0,v=h.length;p<v;p++){const y=h[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class _u extends rr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,p=[],v=[],y=[],m=[];for(let f=0;f<c;f++){const _=f*h-o;for(let g=0;g<u;g++){const M=g*d-s;v.push(M,-_,0),y.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const g=_+u*f,M=_+u*(f+1),P=_+1+u*(f+1),A=_+1+u*f;p.push(g,M,A),p.push(M,P,A)}this.setIndex(p),this.setAttribute("position",new to(v,3)),this.setAttribute("normal",new to(y,3)),this.setAttribute("uv",new to(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.width,e.height,e.widthSegments,e.heightSegments)}}var CA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$A=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iC="gl_FragColor = linearToOutputTexel( gl_FragColor );",rC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_C=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$C=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_R=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ER=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$R=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:CA,alphahash_pars_fragment:RA,alphamap_fragment:PA,alphamap_pars_fragment:bA,alphatest_fragment:LA,alphatest_pars_fragment:DA,aomap_fragment:IA,aomap_pars_fragment:UA,batching_pars_vertex:NA,batching_vertex:FA,begin_vertex:OA,beginnormal_vertex:kA,bsdfs:BA,iridescence_fragment:zA,bumpmap_pars_fragment:VA,clipping_planes_fragment:HA,clipping_planes_pars_fragment:GA,clipping_planes_pars_vertex:WA,clipping_planes_vertex:XA,color_fragment:$A,color_pars_fragment:jA,color_pars_vertex:YA,color_vertex:qA,common:KA,cube_uv_reflection_fragment:ZA,defaultnormal_vertex:QA,displacementmap_pars_vertex:JA,displacementmap_vertex:eC,emissivemap_fragment:tC,emissivemap_pars_fragment:nC,colorspace_fragment:iC,colorspace_pars_fragment:rC,envmap_fragment:sC,envmap_common_pars_fragment:oC,envmap_pars_fragment:aC,envmap_pars_vertex:lC,envmap_physical_pars_fragment:yC,envmap_vertex:uC,fog_vertex:cC,fog_pars_vertex:fC,fog_fragment:dC,fog_pars_fragment:hC,gradientmap_pars_fragment:pC,lightmap_pars_fragment:mC,lights_lambert_fragment:gC,lights_lambert_pars_fragment:_C,lights_pars_begin:vC,lights_toon_fragment:xC,lights_toon_pars_fragment:SC,lights_phong_fragment:MC,lights_phong_pars_fragment:EC,lights_physical_fragment:TC,lights_physical_pars_fragment:wC,lights_fragment_begin:AC,lights_fragment_maps:CC,lights_fragment_end:RC,logdepthbuf_fragment:PC,logdepthbuf_pars_fragment:bC,logdepthbuf_pars_vertex:LC,logdepthbuf_vertex:DC,map_fragment:IC,map_pars_fragment:UC,map_particle_fragment:NC,map_particle_pars_fragment:FC,metalnessmap_fragment:OC,metalnessmap_pars_fragment:kC,morphinstance_vertex:BC,morphcolor_vertex:zC,morphnormal_vertex:VC,morphtarget_pars_vertex:HC,morphtarget_vertex:GC,normal_fragment_begin:WC,normal_fragment_maps:XC,normal_pars_fragment:$C,normal_pars_vertex:jC,normal_vertex:YC,normalmap_pars_fragment:qC,clearcoat_normal_fragment_begin:KC,clearcoat_normal_fragment_maps:ZC,clearcoat_pars_fragment:QC,iridescence_pars_fragment:JC,opaque_fragment:eR,packing:tR,premultiplied_alpha_fragment:nR,project_vertex:iR,dithering_fragment:rR,dithering_pars_fragment:sR,roughnessmap_fragment:oR,roughnessmap_pars_fragment:aR,shadowmap_pars_fragment:lR,shadowmap_pars_vertex:uR,shadowmap_vertex:cR,shadowmask_pars_fragment:fR,skinbase_vertex:dR,skinning_pars_vertex:hR,skinning_vertex:pR,skinnormal_vertex:mR,specularmap_fragment:gR,specularmap_pars_fragment:_R,tonemapping_fragment:vR,tonemapping_pars_fragment:yR,transmission_fragment:xR,transmission_pars_fragment:SR,uv_pars_fragment:MR,uv_pars_vertex:ER,uv_vertex:TR,worldpos_vertex:wR,background_vert:AR,background_frag:CR,backgroundCube_vert:RR,backgroundCube_frag:PR,cube_vert:bR,cube_frag:LR,depth_vert:DR,depth_frag:IR,distanceRGBA_vert:UR,distanceRGBA_frag:NR,equirect_vert:FR,equirect_frag:OR,linedashed_vert:kR,linedashed_frag:BR,meshbasic_vert:zR,meshbasic_frag:VR,meshlambert_vert:HR,meshlambert_frag:GR,meshmatcap_vert:WR,meshmatcap_frag:XR,meshnormal_vert:$R,meshnormal_frag:jR,meshphong_vert:YR,meshphong_frag:qR,meshphysical_vert:KR,meshphysical_frag:ZR,meshtoon_vert:QR,meshtoon_frag:JR,points_vert:eP,points_frag:tP,shadow_vert:nP,shadow_frag:iP,sprite_vert:rP,sprite_frag:sP},ce={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},qi={basic:{uniforms:wn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:wn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new at(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:wn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:wn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:wn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new at(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:wn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:wn([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:wn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:wn([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:wn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:wn([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:wn([ce.common,ce.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:wn([ce.lights,ce.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};qi.physical={uniforms:wn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const lc={r:0,b:0,g:0},Ls=new Fr,oP=new Gt;function aP(t,e,n,i,r,s,o){const a=new at(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function y(_){let g=!1;const M=v(_);M===null?f(a,l):M&&M.isColor&&(f(M,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const M=v(g);M&&(M.isCubeTexture||M.mapping===rd)?(c===void 0&&(c=new Ji(new gu(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:ba(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ls.copy(g.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(oP.makeRotationFromEuler(Ls)),c.material.toneMapped=st.getTransfer(M.colorSpace)!==ht,(d!==M||h!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new Ji(new _u(2,2),new ki({name:"BackgroundMaterial",uniforms:ba(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=st.getTransfer(M.colorSpace)!==ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function f(_,g){_.getRGB(lc,MS(t)),i.buffers.color.setClear(lc.r,lc.g,lc.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:y,addToRenderList:m}}function lP(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,b,H,F,W){let $=!1;const G=d(F,H,b);s!==G&&(s=G,u(s.object)),$=p(x,F,H,W),$&&v(x,F,H,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(x,b,H,F),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function u(x){return t.bindVertexArray(x)}function c(x){return t.deleteVertexArray(x)}function d(x,b,H){const F=H.wireframe===!0;let W=i[x.id];W===void 0&&(W={},i[x.id]=W);let $=W[b.id];$===void 0&&($={},W[b.id]=$);let G=$[F];return G===void 0&&(G=h(l()),$[F]=G),G}function h(x){const b=[],H=[],F=[];for(let W=0;W<n;W++)b[W]=0,H[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:H,attributeDivisors:F,object:x,attributes:{},index:null}}function p(x,b,H,F){const W=s.attributes,$=b.attributes;let G=0;const Y=H.getAttributes();for(const D in Y)if(Y[D].location>=0){const K=W[D];let oe=$[D];if(oe===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function v(x,b,H,F){const W={},$=b.attributes;let G=0;const Y=H.getAttributes();for(const D in Y)if(Y[D].location>=0){let K=$[D];K===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(K=x.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),W[D]=oe,G++}s.attributes=W,s.attributesNum=G,s.index=F}function y(){const x=s.newAttributes;for(let b=0,H=x.length;b<H;b++)x[b]=0}function m(x){f(x,0)}function f(x,b){const H=s.newAttributes,F=s.enabledAttributes,W=s.attributeDivisors;H[x]=1,F[x]===0&&(t.enableVertexAttribArray(x),F[x]=1),W[x]!==b&&(t.vertexAttribDivisor(x,b),W[x]=b)}function _(){const x=s.newAttributes,b=s.enabledAttributes;for(let H=0,F=b.length;H<F;H++)b[H]!==x[H]&&(t.disableVertexAttribArray(H),b[H]=0)}function g(x,b,H,F,W,$,G){G===!0?t.vertexAttribIPointer(x,b,H,W,$):t.vertexAttribPointer(x,b,H,F,W,$)}function M(x,b,H,F){y();const W=F.attributes,$=H.getAttributes(),G=b.defaultAttributeValues;for(const Y in $){const D=$[Y];if(D.location>=0){let X=W[Y];if(X===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(X=x.instanceColor)),X!==void 0){const K=X.normalized,oe=X.itemSize,ne=e.get(X);if(ne===void 0)continue;const Pe=ne.buffer,V=ne.type,Q=ne.bytesPerElement,le=V===t.INT||V===t.UNSIGNED_INT||X.gpuType===r0;if(X.isInterleavedBufferAttribute){const ue=X.data,Ie=ue.stride,Oe=X.offset;if(ue.isInstancedInterleavedBuffer){for(let Be=0;Be<D.locationSize;Be++)f(D.location+Be,ue.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Be=0;Be<D.locationSize;Be++)m(D.location+Be);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let Be=0;Be<D.locationSize;Be++)g(D.location+Be,oe/D.locationSize,V,K,Ie*Q,(Oe+oe/D.locationSize*Be)*Q,le)}else{if(X.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)f(D.location+ue,X.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ue=0;ue<D.locationSize;ue++)m(D.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let ue=0;ue<D.locationSize;ue++)g(D.location+ue,oe/D.locationSize,V,K,oe*Q,oe/D.locationSize*ue*Q,le)}}else if(G!==void 0){const K=G[Y];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(D.location,K);break;case 3:t.vertexAttrib3fv(D.location,K);break;case 4:t.vertexAttrib4fv(D.location,K);break;default:t.vertexAttrib1fv(D.location,K)}}}}_()}function P(){L();for(const x in i){const b=i[x];for(const H in b){const F=b[H];for(const W in F)c(F[W].object),delete F[W];delete b[H]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const b=i[x.id];for(const H in b){const F=b[H];for(const W in F)c(F[W].object),delete F[W];delete b[H]}delete i[x.id]}function w(x){for(const b in i){const H=i[b];if(H[x.id]===void 0)continue;const F=H[x.id];for(const W in F)c(F[W].object),delete F[W];delete H[x.id]}}function L(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function uP(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,d){d!==0&&(t.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let v=0;v<d;v++)p+=c[v];n.update(p,i,1)}function l(u,c,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],c[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,d);let v=0;for(let y=0;y<d;y++)v+=c[y];for(let y=0;y<h.length;y++)n.update(v,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cP(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==xi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Nr&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tr&&!w)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:M,maxSamples:P}}function fP(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ns,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,g=_*4;let M=f.clippingState||null;l.value=M,M=c(v,h,g,p);for(let P=0;P!==g;++P)M[P]=n[P];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const f=p+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,M=p;g!==y;++g,M+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function dP(t){let e=new WeakMap;function n(o,a){return a===Np?o.mapping=Aa:a===Fp&&(o.mapping=Ca),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Np||a===Fp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new EA(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class CS extends ES{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zo=4,nv=[.125,.215,.35,.446,.526,.582],Bs=20,mh=new CS,iv=new at;let gh=null,_h=0,vh=0,yh=!1;const Fs=(1+Math.sqrt(5))/2,Oo=1/Fs,rv=[new B(-Fs,Oo,0),new B(Fs,Oo,0),new B(-Oo,0,Fs),new B(Oo,0,Fs),new B(0,Fs,-Oo),new B(0,Fs,Oo),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class sv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gh,_h,vh),this._renderer.xr.enabled=yh,e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Aa||e.mapping===Ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:ja,format:xi,colorSpace:Ts,depthBuffer:!1},r=ov(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ov(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hP(s)),this._blurMaterial=pP(s,e,n)}return r}_compileMaterial(e){const n=new Ji(this._lodPlanes[0],e);this._renderer.compile(n,mh)}_sceneToCubeUV(e,n,i,r){const a=new Ui(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(iv),c.toneMapping=hs,c.autoClear=!1;const p=new yS({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),v=new Ji(new gu,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(iv),y=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;uc(r,_*g,f>2?g:0,g,g),c.setRenderTarget(r),y&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Aa||e.mapping===Ca;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ji(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;uc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,mh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=rv[(r-s-1)%rv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Ji(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Bs-1),y=s/v,m=isFinite(s)?1+Math.floor(c*y):Bs;m>Bs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bs}`);const f=[];let _=0;for(let w=0;w<Bs;++w){const L=w/y,T=Math.exp(-L*L/2);f.push(T),w===0?_+=T:w<m&&(_+=2*T)}for(let w=0;w<f.length;w++)f[w]=f[w]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const M=this._sizeLods[r],P=3*M*(r>g-Zo?r-g+Zo:0),A=4*(this._cubeSize-M);uc(n,P,A,3*M,2*M),l.setRenderTarget(n),l.render(d,mh)}}function hP(t){const e=[],n=[],i=[];let r=t;const s=t-Zo+1+nv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Zo?l=nv[o-t+Zo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,v=6,y=3,m=2,f=1,_=new Float32Array(y*v*p),g=new Float32Array(m*v*p),M=new Float32Array(f*v*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,L=A>2?0:-1,T=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];_.set(T,y*v*A),g.set(h,m*v*A);const x=[A,A,A,A,A,A];M.set(x,f*v*A)}const P=new rr;P.setAttribute("position",new Nn(_,y)),P.setAttribute("uv",new Nn(g,m)),P.setAttribute("faceIndex",new Nn(M,f)),e.push(P),r>Zo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ov(t,e,n){const i=new ys(t,e,n);return i.texture.mapping=rd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pP(t,e,n){const i=new Float32Array(Bs),r=new B(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:f0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function av(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:f0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function lv(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:f0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function f0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Np||l===Fp,c=l===Aa||l===Ca;if(u||c){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new sv(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new sv(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function gP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&bl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _P(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const y=h.morphAttributes[v];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const y=p[v];for(let m=0,f=y.length;m<f;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,v=d.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let g=0,M=_.length;g<M;g+=3){const P=_[g+0],A=_[g+1],w=_[g+2];h.push(P,A,A,w,w,P)}}else if(v!==void 0){const _=v.array;y=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const P=g+0,A=g+1,w=g+2;h.push(P,A,A,w,w,P)}}else return;const m=new(hS(h)?SS:xS)(h,1);m.version=y;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function vP(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function c(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];n.update(m,i,1)}function d(h,p,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)u(h[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,v);let f=0;for(let _=0;_<v;_++)f+=p[_];for(let _=0;_<y.length;_++)n.update(f,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function yP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xP(t,e,n){const i=new WeakMap,r=new sn;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let P=a.attributes.position.count*M,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*A*4*d),L=new mS(w,P,A,d);L.type=Tr,L.needsUpdate=!0;const T=M*4;for(let b=0;b<d;b++){const H=f[b],F=_[b],W=g[b],$=P*A*4*b;for(let G=0;G<H.count;G++){const Y=G*T;v===!0&&(r.fromBufferAttribute(H,G),w[$+Y+0]=r.x,w[$+Y+1]=r.y,w[$+Y+2]=r.z,w[$+Y+3]=0),y===!0&&(r.fromBufferAttribute(F,G),w[$+Y+4]=r.x,w[$+Y+5]=r.y,w[$+Y+6]=r.z,w[$+Y+7]=0),m===!0&&(r.fromBufferAttribute(W,G),w[$+Y+8]=r.x,w[$+Y+9]=r.y,w[$+Y+10]=r.z,w[$+Y+11]=W.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new Je(P,A)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function SP(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class RS extends zn{constructor(e,n,i,r,s,o,a,l,u,c=oa){if(c!==oa&&c!==Pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===oa&&(i=co),i===void 0&&c===Pa&&(i=Ra),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:yi,this.minFilter=l!==void 0?l:yi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const PS=new zn,uv=new RS(1,1),bS=new mS,LS=new aA,DS=new TS,cv=[],fv=[],dv=new Float32Array(16),hv=new Float32Array(9),pv=new Float32Array(4);function qa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cv[r];if(s===void 0&&(s=new Float32Array(r),cv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ad(t,e){let n=fv[e];n===void 0&&(n=new Int32Array(e),fv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function MP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function EP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2fv(this.addr,e),Qt(n,e)}}function TP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;t.uniform3fv(this.addr,e),Qt(n,e)}}function wP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4fv(this.addr,e),Qt(n,e)}}function AP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,i))return;pv.set(i),t.uniformMatrix2fv(this.addr,!1,pv),Qt(n,i)}}function CP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,i))return;hv.set(i),t.uniformMatrix3fv(this.addr,!1,hv),Qt(n,i)}}function RP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,i))return;dv.set(i),t.uniformMatrix4fv(this.addr,!1,dv),Qt(n,i)}}function PP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2iv(this.addr,e),Qt(n,e)}}function LP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3iv(this.addr,e),Qt(n,e)}}function DP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4iv(this.addr,e),Qt(n,e)}}function IP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function UP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2uiv(this.addr,e),Qt(n,e)}}function NP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3uiv(this.addr,e),Qt(n,e)}}function FP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4uiv(this.addr,e),Qt(n,e)}}function OP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(uv.compareFunction=dS,s=uv):s=PS,n.setTexture2D(e||s,r)}function kP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||LS,r)}function BP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||DS,r)}function zP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||bS,r)}function VP(t){switch(t){case 5126:return MP;case 35664:return EP;case 35665:return TP;case 35666:return wP;case 35674:return AP;case 35675:return CP;case 35676:return RP;case 5124:case 35670:return PP;case 35667:case 35671:return bP;case 35668:case 35672:return LP;case 35669:case 35673:return DP;case 5125:return IP;case 36294:return UP;case 36295:return NP;case 36296:return FP;case 35678:case 36198:case 36298:case 36306:case 35682:return OP;case 35679:case 36299:case 36307:return kP;case 35680:case 36300:case 36308:case 36293:return BP;case 36289:case 36303:case 36311:case 36292:return zP}}function HP(t,e){t.uniform1fv(this.addr,e)}function GP(t,e){const n=qa(e,this.size,2);t.uniform2fv(this.addr,n)}function WP(t,e){const n=qa(e,this.size,3);t.uniform3fv(this.addr,n)}function XP(t,e){const n=qa(e,this.size,4);t.uniform4fv(this.addr,n)}function $P(t,e){const n=qa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jP(t,e){const n=qa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function YP(t,e){const n=qa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qP(t,e){t.uniform1iv(this.addr,e)}function KP(t,e){t.uniform2iv(this.addr,e)}function ZP(t,e){t.uniform3iv(this.addr,e)}function QP(t,e){t.uniform4iv(this.addr,e)}function JP(t,e){t.uniform1uiv(this.addr,e)}function eb(t,e){t.uniform2uiv(this.addr,e)}function tb(t,e){t.uniform3uiv(this.addr,e)}function nb(t,e){t.uniform4uiv(this.addr,e)}function ib(t,e,n){const i=this.cache,r=e.length,s=ad(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||PS,s[o])}function rb(t,e,n){const i=this.cache,r=e.length,s=ad(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||LS,s[o])}function sb(t,e,n){const i=this.cache,r=e.length,s=ad(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||DS,s[o])}function ob(t,e,n){const i=this.cache,r=e.length,s=ad(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||bS,s[o])}function ab(t){switch(t){case 5126:return HP;case 35664:return GP;case 35665:return WP;case 35666:return XP;case 35674:return $P;case 35675:return jP;case 35676:return YP;case 5124:case 35670:return qP;case 35667:case 35671:return KP;case 35668:case 35672:return ZP;case 35669:case 35673:return QP;case 5125:return JP;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return ob}}class lb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VP(n.type)}}class ub{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ab(n.type)}}class cb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function mv(t,e){t.seq.push(e),t.map[e.id]=e}function fb(t,e,n){const i=t.name,r=i.length;for(xh.lastIndex=0;;){const s=xh.exec(i),o=xh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){mv(n,u===void 0?new lb(a,t,e):new ub(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new cb(a),mv(n,d)),n=d}}}class Ic{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);fb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function gv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const db=37297;let hb=0;function pb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function mb(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===gf&&n===mf?i="LinearDisplayP3ToLinearSRGB":e===mf&&n===gf&&(i="LinearSRGBToLinearDisplayP3"),t){case Ts:case sd:return[i,"LinearTransferOETF"];case Yi:case c0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function _v(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+pb(t.getShaderSource(e),o)}else return r}function gb(t,e){const n=mb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function _b(t,e){let n;switch(e){case Uw:n="Linear";break;case Nw:n="Reinhard";break;case Fw:n="OptimizedCineon";break;case Ow:n="ACESFilmic";break;case Bw:n="AgX";break;case zw:n="Neutral";break;case kw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const cc=new B;function vb(){st.getLuminanceCoefficients(cc);const t=cc.x.toFixed(4),e=cc.y.toFixed(4),n=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function xb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Sb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function _l(t){return t!==""}function vv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function dm(t){return t.replace(Mb,Tb)}const Eb=new Map;function Tb(t,e){let n=Ve[e];if(n===void 0){const i=Eb.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dm(n)}const wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xv(t){return t.replace(wb,Ab)}function Ab(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===J3?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ow?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_r&&(e="SHADOWMAP_TYPE_VSM"),e}function Rb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Aa:case Ca:e="ENVMAP_TYPE_CUBE";break;case rd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ca:e="ENVMAP_MODE_REFRACTION";break}return e}function bb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case eS:e="ENVMAP_BLENDING_MULTIPLY";break;case Dw:e="ENVMAP_BLENDING_MIX";break;case Iw:e="ENVMAP_BLENDING_ADD";break}return e}function Lb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Db(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Cb(n),u=Rb(n),c=Pb(n),d=bb(n),h=Lb(n),p=yb(n),v=xb(s),y=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(_l).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(_l).join(`
`),f.length>0&&(f+=`
`)):(m=[Sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),f=[Sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hs?"#define TONE_MAPPING":"",n.toneMapping!==hs?Ve.tonemapping_pars_fragment:"",n.toneMapping!==hs?_b("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,gb("linearToOutputTexel",n.outputColorSpace),vb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_l).join(`
`)),o=dm(o),o=vv(o,n),o=yv(o,n),a=dm(a),a=vv(a,n),a=yv(a,n),o=xv(o),a=xv(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===F1?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===F1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=_+m+o,M=_+f+a,P=gv(r,r.VERTEX_SHADER,g),A=gv(r,r.FRAGMENT_SHADER,M);r.attachShader(y,P),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(b){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),F=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(A).trim();let $=!0,G=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,A);else{const Y=_v(r,P,"vertex"),D=_v(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+H+`
`+Y+`
`+D)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||W==="")&&(G=!1);G&&(b.diagnostics={runnable:$,programLog:H,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(P),r.deleteShader(A),L=new Ic(r,y),T=Sb(r,y)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,db)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=A,this}let Ib=0;class Ub{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Nb(e),n.set(e,i)),i}}class Nb{constructor(e){this.id=Ib++,this.code=e,this.usedTimes=0}}function Fb(t,e,n,i,r,s,o){const a=new _S,l=new Ub,u=new Set,c=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,x,b,H,F){const W=H.fog,$=F.geometry,G=T.isMeshStandardMaterial?H.environment:null,Y=(T.isMeshStandardMaterial?n:e).get(T.envMap||G),D=Y&&Y.mapping===rd?Y.image.height:null,X=v[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const K=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=K!==void 0?K.length:0;let ne=0;$.morphAttributes.position!==void 0&&(ne=1),$.morphAttributes.normal!==void 0&&(ne=2),$.morphAttributes.color!==void 0&&(ne=3);let Pe,V,Q,le;if(X){const tt=qi[X];Pe=tt.vertexShader,V=tt.fragmentShader}else Pe=T.vertexShader,V=T.fragmentShader,l.update(T),Q=l.getVertexShaderID(T),le=l.getFragmentShaderID(T);const ue=t.getRenderTarget(),Ie=F.isInstancedMesh===!0,Oe=F.isBatchedMesh===!0,Be=!!T.map,ot=!!T.matcap,R=!!Y,xt=!!T.aoMap,Ze=!!T.lightMap,We=!!T.bumpMap,Ee=!!T.normalMap,St=!!T.displacementMap,be=!!T.emissiveMap,Fe=!!T.metalnessMap,C=!!T.roughnessMap,S=T.anisotropy>0,z=T.clearcoat>0,J=T.dispersion>0,te=T.iridescence>0,Z=T.sheen>0,Ce=T.transmission>0,fe=S&&!!T.anisotropyMap,me=z&&!!T.clearcoatMap,ze=z&&!!T.clearcoatNormalMap,ie=z&&!!T.clearcoatRoughnessMap,pe=te&&!!T.iridescenceMap,$e=te&&!!T.iridescenceThicknessMap,Ne=Z&&!!T.sheenColorMap,_e=Z&&!!T.sheenRoughnessMap,ke=!!T.specularMap,Ge=!!T.specularColorMap,Mt=!!T.specularIntensityMap,I=Ce&&!!T.transmissionMap,re=Ce&&!!T.thicknessMap,j=!!T.gradientMap,q=!!T.alphaMap,ae=T.alphaTest>0,Le=!!T.alphaHash,Ye=!!T.extensions;let Ot=hs;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ot=t.toneMapping);const an={shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:Pe,fragmentShader:V,defines:T.defines,customVertexShaderID:Q,customFragmentShaderID:le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ts,alphaToCoverage:!!T.alphaToCoverage,map:Be,matcap:ot,envMap:R,envMapMode:R&&Y.mapping,envMapCubeUVHeight:D,aoMap:xt,lightMap:Ze,bumpMap:We,normalMap:Ee,displacementMap:h&&St,emissiveMap:be,normalMapObjectSpace:Ee&&T.normalMapType===Xw,normalMapTangentSpace:Ee&&T.normalMapType===Ww,metalnessMap:Fe,roughnessMap:C,anisotropy:S,anisotropyMap:fe,clearcoat:z,clearcoatMap:me,clearcoatNormalMap:ze,clearcoatRoughnessMap:ie,dispersion:J,iridescence:te,iridescenceMap:pe,iridescenceThicknessMap:$e,sheen:Z,sheenColorMap:Ne,sheenRoughnessMap:_e,specularMap:ke,specularColorMap:Ge,specularIntensityMap:Mt,transmission:Ce,transmissionMap:I,thicknessMap:re,gradientMap:j,opaque:T.transparent===!1&&T.blending===eo&&T.alphaToCoverage===!1,alphaMap:q,alphaTest:ae,alphaHash:Le,combine:T.combine,mapUv:Be&&y(T.map.channel),aoMapUv:xt&&y(T.aoMap.channel),lightMapUv:Ze&&y(T.lightMap.channel),bumpMapUv:We&&y(T.bumpMap.channel),normalMapUv:Ee&&y(T.normalMap.channel),displacementMapUv:St&&y(T.displacementMap.channel),emissiveMapUv:be&&y(T.emissiveMap.channel),metalnessMapUv:Fe&&y(T.metalnessMap.channel),roughnessMapUv:C&&y(T.roughnessMap.channel),anisotropyMapUv:fe&&y(T.anisotropyMap.channel),clearcoatMapUv:me&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:ze&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(T.sheenRoughnessMap.channel),specularMapUv:ke&&y(T.specularMap.channel),specularColorMapUv:Ge&&y(T.specularColorMap.channel),specularIntensityMapUv:Mt&&y(T.specularIntensityMap.channel),transmissionMapUv:I&&y(T.transmissionMap.channel),thicknessMapUv:re&&y(T.thicknessMap.channel),alphaMapUv:q&&y(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ee||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(Be||q),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Be&&T.map.isVideoTexture===!0&&st.getTransfer(T.map.colorSpace)===ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Sr,flipSided:T.side===Bn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ye&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&T.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return an.vertexUv1s=u.has(1),an.vertexUv2s=u.has(2),an.vertexUv3s=u.has(3),u.clear(),an}function f(T){const x=[];if(T.shaderID?x.push(T.shaderID):(x.push(T.customVertexShaderID),x.push(T.customFragmentShaderID)),T.defines!==void 0)for(const b in T.defines)x.push(b),x.push(T.defines[b]);return T.isRawShaderMaterial===!1&&(_(x,T),g(x,T),x.push(t.outputColorSpace)),x.push(T.customProgramCacheKey),x.join()}function _(T,x){T.push(x.precision),T.push(x.outputColorSpace),T.push(x.envMapMode),T.push(x.envMapCubeUVHeight),T.push(x.mapUv),T.push(x.alphaMapUv),T.push(x.lightMapUv),T.push(x.aoMapUv),T.push(x.bumpMapUv),T.push(x.normalMapUv),T.push(x.displacementMapUv),T.push(x.emissiveMapUv),T.push(x.metalnessMapUv),T.push(x.roughnessMapUv),T.push(x.anisotropyMapUv),T.push(x.clearcoatMapUv),T.push(x.clearcoatNormalMapUv),T.push(x.clearcoatRoughnessMapUv),T.push(x.iridescenceMapUv),T.push(x.iridescenceThicknessMapUv),T.push(x.sheenColorMapUv),T.push(x.sheenRoughnessMapUv),T.push(x.specularMapUv),T.push(x.specularColorMapUv),T.push(x.specularIntensityMapUv),T.push(x.transmissionMapUv),T.push(x.thicknessMapUv),T.push(x.combine),T.push(x.fogExp2),T.push(x.sizeAttenuation),T.push(x.morphTargetsCount),T.push(x.morphAttributeCount),T.push(x.numDirLights),T.push(x.numPointLights),T.push(x.numSpotLights),T.push(x.numSpotLightMaps),T.push(x.numHemiLights),T.push(x.numRectAreaLights),T.push(x.numDirLightShadows),T.push(x.numPointLightShadows),T.push(x.numSpotLightShadows),T.push(x.numSpotLightShadowsWithMaps),T.push(x.numLightProbes),T.push(x.shadowMapType),T.push(x.toneMapping),T.push(x.numClippingPlanes),T.push(x.numClipIntersection),T.push(x.depthPacking)}function g(T,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),T.push(a.mask)}function M(T){const x=v[T.type];let b;if(x){const H=qi[x];b=yA.clone(H.uniforms)}else b=T.uniforms;return b}function P(T,x){let b;for(let H=0,F=c.length;H<F;H++){const W=c[H];if(W.cacheKey===x){b=W,++b.usedTimes;break}}return b===void 0&&(b=new Db(t,x,T,s),c.push(b)),b}function A(T){if(--T.usedTimes===0){const x=c.indexOf(T);c[x]=c[c.length-1],c.pop(),T.destroy()}}function w(T){l.remove(T)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:P,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:L}}function Ob(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function kb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Mv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ev(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,v,y,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:y,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=y,f.group=m),e++,f}function a(d,h,p,v,y,m){const f=o(d,h,p,v,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,v,y,m){const f=o(d,h,p,v,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||kb),i.length>1&&i.sort(h||Mv),r.length>1&&r.sort(h||Mv)}function c(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Bb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ev,t.set(i,[o])):r>=s.length?(o=new Ev,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new at};break;case"SpotLight":n={position:new B,direction:new B,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function Vb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Hb=0;function Gb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Wb(t){const e=new zb,n=Vb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new Gt,o=new Gt;function a(u){let c=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,y=0,m=0,f=0,_=0,g=0,M=0,P=0,A=0,w=0;u.sort(Gb);for(let T=0,x=u.length;T<x;T++){const b=u[T],H=b.color,F=b.intensity,W=b.distance,$=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)c+=H.r*F,d+=H.g*F,h+=H.b*F;else if(b.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(b.sh.coefficients[G],F);w++}else if(b.isDirectionalLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Y=b.shadow,D=n.get(b);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=b.shadow.matrix,_++}i.directional[p]=G,p++}else if(b.isSpotLight){const G=e.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(H).multiplyScalar(F),G.distance=W,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,i.spot[y]=G;const Y=b.shadow;if(b.map&&(i.spotLightMap[P]=b.map,P++,Y.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[y]=Y.matrix,b.castShadow){const D=n.get(b);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=$,M++}y++}else if(b.isRectAreaLight){const G=e.get(b);G.color.copy(H).multiplyScalar(F),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=G,m++}else if(b.isPointLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const Y=b.shadow,D=n.get(b);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,D.shadowCameraNear=Y.camera.near,D.shadowCameraFar=Y.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=b.shadow.matrix,g++}i.point[v]=G,v++}else if(b.isHemisphereLight){const G=e.get(b);G.skyColor.copy(b.color).multiplyScalar(F),G.groundColor.copy(b.groundColor).multiplyScalar(F),i.hemi[f]=G,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==_||L.numPointShadows!==g||L.numSpotShadows!==M||L.numSpotMaps!==P||L.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,L.directionalLength=p,L.pointLength=v,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=_,L.numPointShadows=g,L.numSpotShadows=M,L.numSpotMaps=P,L.numLightProbes=w,i.version=Hb++)}function l(u,c){let d=0,h=0,p=0,v=0,y=0;const m=c.matrixWorldInverse;for(let f=0,_=u.length;f<_;f++){const g=u[f];if(g.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(g.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Tv(t){const e=new Wb(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Xb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Tv(t),e.set(r,[a])):s>=o.length?(a=new Tv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class $b extends mu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jb extends mu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kb(t,e,n){let i=new wS;const r=new Je,s=new Je,o=new sn,a=new $b({depthPacking:Gw}),l=new jb,u={},c=n.maxTextureSize,d={[vs]:Bn,[Bn]:vs,[Sr]:Sr},h=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Yb,fragmentShader:qb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new rr;v.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ji(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J3;let f=this.type;this.render=function(A,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),x=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),H=t.state;H.setBlending(ds),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=f!==_r&&this.type===_r,W=f===_r&&this.type!==_r;for(let $=0,G=A.length;$<G;$++){const Y=A[$],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const X=D.getFrameExtents();if(r.multiply(X),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,D.mapSize.y=s.y)),D.map===null||F===!0||W===!0){const oe=this.type!==_r?{minFilter:yi,magFilter:yi}:{};D.map!==null&&D.map.dispose(),D.map=new ys(r.x,r.y,oe),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const K=D.getViewportCount();for(let oe=0;oe<K;oe++){const ne=D.getViewport(oe);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),H.viewport(o),D.updateMatrices(Y,oe),i=D.getFrustum(),M(w,L,D.camera,Y,this.type)}D.isPointLightShadow!==!0&&this.type===_r&&_(D,L),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(T,x,b)};function _(A,w){const L=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ys(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,L,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,L,p,y,null)}function g(A,w,L,T){let x=null;const b=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)x=b;else if(x=L.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=x.uuid,F=w.uuid;let W=u[H];W===void 0&&(W={},u[H]=W);let $=W[F];$===void 0&&($=x.clone(),W[F]=$,w.addEventListener("dispose",P)),x=$}if(x.visible=w.visible,x.wireframe=w.wireframe,T===_r?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=t.properties.get(x);H.light=L}return x}function M(A,w,L,T,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===_r)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const F=e.update(A),W=A.material;if(Array.isArray(W)){const $=F.groups;for(let G=0,Y=$.length;G<Y;G++){const D=$[G],X=W[D.materialIndex];if(X&&X.visible){const K=g(A,X,T,x);A.onBeforeShadow(t,A,w,L,F,K,D),t.renderBufferDirect(L,null,F,K,A,D),A.onAfterShadow(t,A,w,L,F,K,D)}}}else if(W.visible){const $=g(A,W,T,x);A.onBeforeShadow(t,A,w,L,F,$,null),t.renderBufferDirect(L,null,F,$,A,null),A.onAfterShadow(t,A,w,L,F,$,null)}}const H=A.children;for(let F=0,W=H.length;F<W;F++)M(H[F],w,L,T,x)}function P(A){A.target.removeEventListener("dispose",P);for(const L in u){const T=u[L],x=A.target.uuid;x in T&&(T[x].dispose(),delete T[x])}}}function Zb(t){function e(){let I=!1;const re=new sn;let j=null;const q=new sn(0,0,0,0);return{setMask:function(ae){j!==ae&&!I&&(t.colorMask(ae,ae,ae,ae),j=ae)},setLocked:function(ae){I=ae},setClear:function(ae,Le,Ye,Ot,an){an===!0&&(ae*=Ot,Le*=Ot,Ye*=Ot),re.set(ae,Le,Ye,Ot),q.equals(re)===!1&&(t.clearColor(ae,Le,Ye,Ot),q.copy(re))},reset:function(){I=!1,j=null,q.set(-1,0,0,0)}}}function n(){let I=!1,re=null,j=null,q=null;return{setTest:function(ae){ae?le(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(ae){re!==ae&&!I&&(t.depthMask(ae),re=ae)},setFunc:function(ae){if(j!==ae){switch(ae){case ww:t.depthFunc(t.NEVER);break;case Aw:t.depthFunc(t.ALWAYS);break;case Cw:t.depthFunc(t.LESS);break;case hf:t.depthFunc(t.LEQUAL);break;case Rw:t.depthFunc(t.EQUAL);break;case Pw:t.depthFunc(t.GEQUAL);break;case bw:t.depthFunc(t.GREATER);break;case Lw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}j=ae}},setLocked:function(ae){I=ae},setClear:function(ae){q!==ae&&(t.clearDepth(ae),q=ae)},reset:function(){I=!1,re=null,j=null,q=null}}}function i(){let I=!1,re=null,j=null,q=null,ae=null,Le=null,Ye=null,Ot=null,an=null;return{setTest:function(tt){I||(tt?le(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(tt){re!==tt&&!I&&(t.stencilMask(tt),re=tt)},setFunc:function(tt,cr,Gi){(j!==tt||q!==cr||ae!==Gi)&&(t.stencilFunc(tt,cr,Gi),j=tt,q=cr,ae=Gi)},setOp:function(tt,cr,Gi){(Le!==tt||Ye!==cr||Ot!==Gi)&&(t.stencilOp(tt,cr,Gi),Le=tt,Ye=cr,Ot=Gi)},setLocked:function(tt){I=tt},setClear:function(tt){an!==tt&&(t.clearStencil(tt),an=tt)},reset:function(){I=!1,re=null,j=null,q=null,ae=null,Le=null,Ye=null,Ot=null,an=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,h=[],p=null,v=!1,y=null,m=null,f=null,_=null,g=null,M=null,P=null,A=new at(0,0,0),w=0,L=!1,T=null,x=null,b=null,H=null,F=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=G>=1):Y.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=G>=2);let D=null,X={};const K=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ne=new sn().fromArray(K),Pe=new sn().fromArray(oe);function V(I,re,j,q){const ae=new Uint8Array(4),Le=t.createTexture();t.bindTexture(I,Le),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<j;Ye++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,q,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(re+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Le}const Q={};Q[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(hf),We(!1),Ee(L1),le(t.CULL_FACE),xt(ds);function le(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function ue(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Ie(I,re){return c[I]!==re?(t.bindFramebuffer(I,re),c[I]=re,I===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=re),I===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Oe(I,re){let j=h,q=!1;if(I){j=d.get(re),j===void 0&&(j=[],d.set(re,j));const ae=I.textures;if(j.length!==ae.length||j[0]!==t.COLOR_ATTACHMENT0){for(let Le=0,Ye=ae.length;Le<Ye;Le++)j[Le]=t.COLOR_ATTACHMENT0+Le;j.length=ae.length,q=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,q=!0);q&&t.drawBuffers(j)}function Be(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const ot={[ks]:t.FUNC_ADD,[lw]:t.FUNC_SUBTRACT,[uw]:t.FUNC_REVERSE_SUBTRACT};ot[cw]=t.MIN,ot[fw]=t.MAX;const R={[dw]:t.ZERO,[hw]:t.ONE,[pw]:t.SRC_COLOR,[Ip]:t.SRC_ALPHA,[xw]:t.SRC_ALPHA_SATURATE,[vw]:t.DST_COLOR,[gw]:t.DST_ALPHA,[mw]:t.ONE_MINUS_SRC_COLOR,[Up]:t.ONE_MINUS_SRC_ALPHA,[yw]:t.ONE_MINUS_DST_COLOR,[_w]:t.ONE_MINUS_DST_ALPHA,[Sw]:t.CONSTANT_COLOR,[Mw]:t.ONE_MINUS_CONSTANT_COLOR,[Ew]:t.CONSTANT_ALPHA,[Tw]:t.ONE_MINUS_CONSTANT_ALPHA};function xt(I,re,j,q,ae,Le,Ye,Ot,an,tt){if(I===ds){v===!0&&(ue(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),I!==aw){if(I!==y||tt!==L){if((m!==ks||g!==ks)&&(t.blendEquation(t.FUNC_ADD),m=ks,g=ks),tt)switch(I){case eo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case df:t.blendFunc(t.ONE,t.ONE);break;case D1:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case I1:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case eo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case df:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case D1:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case I1:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,_=null,M=null,P=null,A.set(0,0,0),w=0,y=I,L=tt}return}ae=ae||re,Le=Le||j,Ye=Ye||q,(re!==m||ae!==g)&&(t.blendEquationSeparate(ot[re],ot[ae]),m=re,g=ae),(j!==f||q!==_||Le!==M||Ye!==P)&&(t.blendFuncSeparate(R[j],R[q],R[Le],R[Ye]),f=j,_=q,M=Le,P=Ye),(Ot.equals(A)===!1||an!==w)&&(t.blendColor(Ot.r,Ot.g,Ot.b,an),A.copy(Ot),w=an),y=I,L=!1}function Ze(I,re){I.side===Sr?ue(t.CULL_FACE):le(t.CULL_FACE);let j=I.side===Bn;re&&(j=!j),We(j),I.blending===eo&&I.transparent===!1?xt(ds):xt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const q=I.stencilWrite;o.setTest(q),q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),be(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(I){T!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),T=I)}function Ee(I){I!==rw?(le(t.CULL_FACE),I!==x&&(I===L1?t.cullFace(t.BACK):I===sw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),x=I}function St(I){I!==b&&($&&t.lineWidth(I),b=I)}function be(I,re,j){I?(le(t.POLYGON_OFFSET_FILL),(H!==re||F!==j)&&(t.polygonOffset(re,j),H=re,F=j)):ue(t.POLYGON_OFFSET_FILL)}function Fe(I){I?le(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function C(I){I===void 0&&(I=t.TEXTURE0+W-1),D!==I&&(t.activeTexture(I),D=I)}function S(I,re,j){j===void 0&&(D===null?j=t.TEXTURE0+W-1:j=D);let q=X[j];q===void 0&&(q={type:void 0,texture:void 0},X[j]=q),(q.type!==I||q.texture!==re)&&(D!==j&&(t.activeTexture(j),D=j),t.bindTexture(I,re||Q[I]),q.type=I,q.texture=re)}function z(){const I=X[D];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){ne.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function _e(I){Pe.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Pe.copy(I))}function ke(I,re){let j=l.get(re);j===void 0&&(j=new WeakMap,l.set(re,j));let q=j.get(I);q===void 0&&(q=t.getUniformBlockIndex(re,I.name),j.set(I,q))}function Ge(I,re){const q=l.get(re).get(I);a.get(re)!==q&&(t.uniformBlockBinding(re,q,I.__bindingPointIndex),a.set(re,q))}function Mt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,X={},c={},d=new WeakMap,h=[],p=null,v=!1,y=null,m=null,f=null,_=null,g=null,M=null,P=null,A=new at(0,0,0),w=0,L=!1,T=null,x=null,b=null,H=null,F=null,ne.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:ue,bindFramebuffer:Ie,drawBuffers:Oe,useProgram:Be,setBlending:xt,setMaterial:Ze,setFlipSided:We,setCullFace:Ee,setLineWidth:St,setPolygonOffset:be,setScissorTest:Fe,activeTexture:C,bindTexture:S,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:pe,texImage3D:$e,updateUBOMapping:ke,uniformBlockBinding:Ge,texStorage2D:ze,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:Ne,viewport:_e,reset:Mt}}function wv(t,e,n,i){const r=Qb(i);switch(n){case sS:return t*e;case aS:return t*e;case lS:return t*e*2;case uS:return t*e/r.components*r.byteLength;case a0:return t*e/r.components*r.byteLength;case cS:return t*e*2/r.components*r.byteLength;case l0:return t*e*2/r.components*r.byteLength;case oS:return t*e*3/r.components*r.byteLength;case xi:return t*e*4/r.components*r.byteLength;case u0:return t*e*4/r.components*r.byteLength;case Rc:case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bc:case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zp:case Hp:return Math.max(t,16)*Math.max(e,8)/4;case Bp:case Vp:return Math.max(t,8)*Math.max(e,8)/2;case Gp:case Wp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $p:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case qp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Jp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case em:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case tm:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case nm:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case im:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case rm:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case sm:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Dc:case om:case am:return Math.ceil(t/4)*Math.ceil(e/4)*16;case fS:case lm:return Math.ceil(t/4)*Math.ceil(e/4)*8;case um:case cm:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Qb(t){switch(t){case Nr:case nS:return{byteLength:1,components:1};case Ql:case iS:case ja:return{byteLength:2,components:1};case s0:case o0:return{byteLength:2,components:4};case co:case r0:case Tr:return{byteLength:4,components:1};case rS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Jb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return p?new OffscreenCanvas(C,S):vf("canvas")}function y(C,S,z){let J=1;const te=Fe(C);if((te.width>z||te.height>z)&&(J=z/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(J*te.width),Ce=Math.floor(J*te.height);d===void 0&&(d=v(Z,Ce));const fe=S?v(Z,Ce):d;return fe.width=Z,fe.height=Ce,fe.getContext("2d").drawImage(C,0,0,Z,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Ce+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==yi&&C.minFilter!==Zn}function f(C){t.generateMipmap(C)}function _(C,S,z,J,te=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=S;if(S===t.RED&&(z===t.FLOAT&&(Z=t.R32F),z===t.HALF_FLOAT&&(Z=t.R16F),z===t.UNSIGNED_BYTE&&(Z=t.R8)),S===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.R8UI),z===t.UNSIGNED_SHORT&&(Z=t.R16UI),z===t.UNSIGNED_INT&&(Z=t.R32UI),z===t.BYTE&&(Z=t.R8I),z===t.SHORT&&(Z=t.R16I),z===t.INT&&(Z=t.R32I)),S===t.RG&&(z===t.FLOAT&&(Z=t.RG32F),z===t.HALF_FLOAT&&(Z=t.RG16F),z===t.UNSIGNED_BYTE&&(Z=t.RG8)),S===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.RG8UI),z===t.UNSIGNED_SHORT&&(Z=t.RG16UI),z===t.UNSIGNED_INT&&(Z=t.RG32UI),z===t.BYTE&&(Z=t.RG8I),z===t.SHORT&&(Z=t.RG16I),z===t.INT&&(Z=t.RG32I)),S===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),S===t.RGBA){const Ce=te?pf:st.getTransfer(J);z===t.FLOAT&&(Z=t.RGBA32F),z===t.HALF_FLOAT&&(Z=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Z=Ce===ht?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(C,S){let z;return C?S===null||S===co||S===Ra?z=t.DEPTH24_STENCIL8:S===Tr?z=t.DEPTH32F_STENCIL8:S===Ql&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===co||S===Ra?z=t.DEPTH_COMPONENT24:S===Tr?z=t.DEPTH_COMPONENT32F:S===Ql&&(z=t.DEPTH_COMPONENT16),z}function M(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==yi&&C.minFilter!==Zn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){const S=C.target;S.removeEventListener("dispose",P),w(S),S.isVideoTexture&&c.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),T(S)}function w(C){const S=i.get(C);if(S.__webglInit===void 0)return;const z=C.source,J=h.get(z);if(J){const te=J[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&L(C),Object.keys(J).length===0&&h.delete(z)}i.remove(C)}function L(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const z=C.source,J=h.get(z);delete J[S.__cacheKey],o.memory.textures--}function T(C){const S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let te=0;te<S.__webglFramebuffer[J].length;te++)t.deleteFramebuffer(S.__webglFramebuffer[J][te]);else t.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)t.deleteFramebuffer(S.__webglFramebuffer[J]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let J=0,te=z.length;J<te;J++){const Z=i.get(z[J]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(z[J])}i.remove(C)}let x=0;function b(){x=0}function H(){const C=x;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),x+=1,C}function F(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function W(C,S){const z=i.get(C);if(C.isVideoTexture&&St(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(z,C,S);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+S)}function $(C,S){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Pe(z,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+S)}function G(C,S){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Pe(z,C,S);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+S)}function Y(C,S){const z=i.get(C);if(C.version>0&&z.__version!==C.version){V(z,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+S)}const D={[Op]:t.REPEAT,[Xs]:t.CLAMP_TO_EDGE,[kp]:t.MIRRORED_REPEAT},X={[yi]:t.NEAREST,[Vw]:t.NEAREST_MIPMAP_NEAREST,[Gu]:t.NEAREST_MIPMAP_LINEAR,[Zn]:t.LINEAR,[Yd]:t.LINEAR_MIPMAP_NEAREST,[$s]:t.LINEAR_MIPMAP_LINEAR},K={[$w]:t.NEVER,[Qw]:t.ALWAYS,[jw]:t.LESS,[dS]:t.LEQUAL,[Yw]:t.EQUAL,[Zw]:t.GEQUAL,[qw]:t.GREATER,[Kw]:t.NOTEQUAL};function oe(C,S){if(S.type===Tr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Zn||S.magFilter===Yd||S.magFilter===Gu||S.magFilter===$s||S.minFilter===Zn||S.minFilter===Yd||S.minFilter===Gu||S.minFilter===$s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,D[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,D[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,D[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,X[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,X[S.minFilter]),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yi||S.minFilter!==Gu&&S.minFilter!==$s||S.type===Tr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ne(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));const J=S.source;let te=h.get(J);te===void 0&&(te={},h.set(J,te));const Z=F(S);if(Z!==C.__cacheKey){te[Z]===void 0&&(te[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[Z].usedTimes++;const Ce=te[C.__cacheKey];Ce!==void 0&&(te[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&L(S)),C.__cacheKey=Z,C.__webglTexture=te[Z].texture}return z}function Pe(C,S,z){let J=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=t.TEXTURE_3D);const te=ne(C,S),Z=S.source;n.bindTexture(J,C.__webglTexture,t.TEXTURE0+z);const Ce=i.get(Z);if(Z.version!==Ce.__version||te===!0){n.activeTexture(t.TEXTURE0+z);const fe=st.getPrimaries(st.workingColorSpace),me=S.colorSpace===es?null:st.getPrimaries(S.colorSpace),ze=S.colorSpace===es||fe===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ie=y(S.image,!1,r.maxTextureSize);ie=be(S,ie);const pe=s.convert(S.format,S.colorSpace),$e=s.convert(S.type);let Ne=_(S.internalFormat,pe,$e,S.colorSpace,S.isVideoTexture);oe(J,S);let _e;const ke=S.mipmaps,Ge=S.isVideoTexture!==!0,Mt=Ce.__version===void 0||te===!0,I=Z.dataReady,re=M(S,ie);if(S.isDepthTexture)Ne=g(S.format===Pa,S.type),Mt&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,Ne,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ne,ie.width,ie.height,0,pe,$e,null));else if(S.isDataTexture)if(ke.length>0){Ge&&Mt&&n.texStorage2D(t.TEXTURE_2D,re,Ne,ke[0].width,ke[0].height);for(let j=0,q=ke.length;j<q;j++)_e=ke[j],Ge?I&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,pe,$e,_e.data):n.texImage2D(t.TEXTURE_2D,j,Ne,_e.width,_e.height,0,pe,$e,_e.data);S.generateMipmaps=!1}else Ge?(Mt&&n.texStorage2D(t.TEXTURE_2D,re,Ne,ie.width,ie.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,pe,$e,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,ie.width,ie.height,0,pe,$e,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&Mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Ne,ke[0].width,ke[0].height,ie.depth);for(let j=0,q=ke.length;j<q;j++)if(_e=ke[j],S.format!==xi)if(pe!==null)if(Ge){if(I)if(S.layerUpdates.size>0){const ae=wv(_e.width,_e.height,S.format,S.type);for(const Le of S.layerUpdates){const Ye=_e.data.subarray(Le*ae/_e.data.BYTES_PER_ELEMENT,(Le+1)*ae/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,Le,_e.width,_e.height,1,pe,Ye,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,ie.depth,pe,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Ne,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,ie.depth,pe,$e,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Ne,_e.width,_e.height,ie.depth,0,pe,$e,_e.data)}else{Ge&&Mt&&n.texStorage2D(t.TEXTURE_2D,re,Ne,ke[0].width,ke[0].height);for(let j=0,q=ke.length;j<q;j++)_e=ke[j],S.format!==xi?pe!==null?Ge?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,pe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?I&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,pe,$e,_e.data):n.texImage2D(t.TEXTURE_2D,j,Ne,_e.width,_e.height,0,pe,$e,_e.data)}else if(S.isDataArrayTexture)if(Ge){if(Mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Ne,ie.width,ie.height,ie.depth),I)if(S.layerUpdates.size>0){const j=wv(ie.width,ie.height,S.format,S.type);for(const q of S.layerUpdates){const ae=ie.data.subarray(q*j/ie.data.BYTES_PER_ELEMENT,(q+1)*j/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,ie.width,ie.height,1,pe,$e,ae)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,$e,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,ie.width,ie.height,ie.depth,0,pe,$e,ie.data);else if(S.isData3DTexture)Ge?(Mt&&n.texStorage3D(t.TEXTURE_3D,re,Ne,ie.width,ie.height,ie.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,$e,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,ie.width,ie.height,ie.depth,0,pe,$e,ie.data);else if(S.isFramebufferTexture){if(Mt)if(Ge)n.texStorage2D(t.TEXTURE_2D,re,Ne,ie.width,ie.height);else{let j=ie.width,q=ie.height;for(let ae=0;ae<re;ae++)n.texImage2D(t.TEXTURE_2D,ae,Ne,j,q,0,pe,$e,null),j>>=1,q>>=1}}else if(ke.length>0){if(Ge&&Mt){const j=Fe(ke[0]);n.texStorage2D(t.TEXTURE_2D,re,Ne,j.width,j.height)}for(let j=0,q=ke.length;j<q;j++)_e=ke[j],Ge?I&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,pe,$e,_e):n.texImage2D(t.TEXTURE_2D,j,Ne,pe,$e,_e);S.generateMipmaps=!1}else if(Ge){if(Mt){const j=Fe(ie);n.texStorage2D(t.TEXTURE_2D,re,Ne,j.width,j.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,$e,ie)}else n.texImage2D(t.TEXTURE_2D,0,Ne,pe,$e,ie);m(S)&&f(J),Ce.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function V(C,S,z){if(S.image.length!==6)return;const J=ne(C,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+z);const Z=i.get(te);if(te.version!==Z.__version||J===!0){n.activeTexture(t.TEXTURE0+z);const Ce=st.getPrimaries(st.workingColorSpace),fe=S.colorSpace===es?null:st.getPrimaries(S.colorSpace),me=S.colorSpace===es||Ce===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const ze=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let q=0;q<6;q++)!ze&&!ie?pe[q]=y(S.image[q],!0,r.maxCubemapSize):pe[q]=ie?S.image[q].image:S.image[q],pe[q]=be(S,pe[q]);const $e=pe[0],Ne=s.convert(S.format,S.colorSpace),_e=s.convert(S.type),ke=_(S.internalFormat,Ne,_e,S.colorSpace),Ge=S.isVideoTexture!==!0,Mt=Z.__version===void 0||J===!0,I=te.dataReady;let re=M(S,$e);oe(t.TEXTURE_CUBE_MAP,S);let j;if(ze){Ge&&Mt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,re,ke,$e.width,$e.height);for(let q=0;q<6;q++){j=pe[q].mipmaps;for(let ae=0;ae<j.length;ae++){const Le=j[ae];S.format!==xi?Ne!==null?Ge?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,Le.width,Le.height,Ne,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,ke,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,Le.width,Le.height,Ne,_e,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,ke,Le.width,Le.height,0,Ne,_e,Le.data)}}}else{if(j=S.mipmaps,Ge&&Mt){j.length>0&&re++;const q=Fe(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,re,ke,q.width,q.height)}for(let q=0;q<6;q++)if(ie){Ge?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,pe[q].width,pe[q].height,Ne,_e,pe[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ke,pe[q].width,pe[q].height,0,Ne,_e,pe[q].data);for(let ae=0;ae<j.length;ae++){const Ye=j[ae].image[q].image;Ge?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,Ye.width,Ye.height,Ne,_e,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,ke,Ye.width,Ye.height,0,Ne,_e,Ye.data)}}else{Ge?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ne,_e,pe[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ke,Ne,_e,pe[q]);for(let ae=0;ae<j.length;ae++){const Le=j[ae];Ge?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,Ne,_e,Le.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,ke,Ne,_e,Le.image[q])}}}m(S)&&f(t.TEXTURE_CUBE_MAP),Z.__version=te.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,z,J,te,Z){const Ce=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),me=_(z.internalFormat,Ce,fe,z.colorSpace);if(!i.get(S).__hasExternalTextures){const ie=Math.max(1,S.width>>Z),pe=Math.max(1,S.height>>Z);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Z,me,ie,pe,S.depth,0,Ce,fe,null):n.texImage2D(te,Z,me,ie,pe,0,Ce,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ee(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,te,i.get(z).__webglTexture,0,We(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,te,i.get(z).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(C,S,z){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer){const J=S.depthTexture,te=J&&J.isDepthTexture?J.type:null,Z=g(S.stencilBuffer,te),Ce=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=We(S);Ee(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,Z,S.width,S.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,Z,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Z,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,C)}else{const J=S.textures;for(let te=0;te<J.length;te++){const Z=J[te],Ce=s.convert(Z.format,Z.colorSpace),fe=s.convert(Z.type),me=_(Z.internalFormat,Ce,fe,Z.colorSpace),ze=We(S);z&&Ee(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,me,S.width,S.height):Ee(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze,me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,me,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const J=i.get(S.depthTexture).__webglTexture,te=We(S);if(S.depthTexture.format===oa)Ee(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(S.depthTexture.format===Pa)Ee(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ie(C){const S=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ue(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=t.createRenderbuffer(),le(S.__webglDepthbuffer[J],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),le(S.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(C,S,z){const J=i.get(C);S!==void 0&&Q(J.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Ie(C)}function Be(C){const S=C.texture,z=i.get(C),J=i.get(S);C.addEventListener("dispose",A);const te=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Ce=te.length>1;if(Ce||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=S.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let me=0;me<S.mipmaps.length;me++)z.__webglFramebuffer[fe][me]=t.createFramebuffer()}else z.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)z.__webglFramebuffer[fe]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let fe=0,me=te.length;fe<me;fe++){const ze=i.get(te[fe]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Ee(C)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const me=te[fe];z.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const ze=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),pe=_(me.internalFormat,ze,ie,me.colorSpace,C.isXRRenderTarget===!0),$e=We(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,pe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),le(z.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),oe(t.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)Q(z.__webglFramebuffer[fe][me],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else Q(z.__webglFramebuffer[fe],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(S)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let fe=0,me=te.length;fe<me;fe++){const ze=te[fe],ie=i.get(ze);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),oe(t.TEXTURE_2D,ze),Q(z.__webglFramebuffer,C,ze,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(ze)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,J.__webglTexture),oe(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)Q(z.__webglFramebuffer[me],C,S,t.COLOR_ATTACHMENT0,fe,me);else Q(z.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,fe,0);m(S)&&f(fe),n.unbindTexture()}C.depthBuffer&&Ie(C)}function ot(C){const S=C.textures;for(let z=0,J=S.length;z<J;z++){const te=S[z];if(m(te)){const Z=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(te).__webglTexture;n.bindTexture(Z,Ce),f(Z),n.unbindTexture()}}}const R=[],xt=[];function Ze(C){if(C.samples>0){if(Ee(C)===!1){const S=C.textures,z=C.width,J=C.height;let te=t.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(C),fe=S.length>1;if(fe)for(let me=0;me<S.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let me=0;me<S.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[me]);const ze=i.get(S[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,z,J,0,0,z,J,te,t.NEAREST),l===!0&&(R.length=0,xt.length=0,R.push(t.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(R.push(Z),xt.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,xt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,R))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let me=0;me<S.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[me]);const ze=i.get(S[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function We(C){return Math.min(r.maxSamples,C.samples)}function Ee(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function St(C){const S=o.render.frame;c.get(C)!==S&&(c.set(C,S),C.update())}function be(C,S){const z=C.colorSpace,J=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Ts&&z!==es&&(st.getTransfer(z)===ht?(J!==xi||te!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=b,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=Oe,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ee}function eL(t,e){function n(i,r=es){let s;const o=st.getTransfer(r);if(i===Nr)return t.UNSIGNED_BYTE;if(i===s0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===o0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===nS)return t.BYTE;if(i===iS)return t.SHORT;if(i===Ql)return t.UNSIGNED_SHORT;if(i===r0)return t.INT;if(i===co)return t.UNSIGNED_INT;if(i===Tr)return t.FLOAT;if(i===ja)return t.HALF_FLOAT;if(i===sS)return t.ALPHA;if(i===oS)return t.RGB;if(i===xi)return t.RGBA;if(i===aS)return t.LUMINANCE;if(i===lS)return t.LUMINANCE_ALPHA;if(i===oa)return t.DEPTH_COMPONENT;if(i===Pa)return t.DEPTH_STENCIL;if(i===uS)return t.RED;if(i===a0)return t.RED_INTEGER;if(i===cS)return t.RG;if(i===l0)return t.RG_INTEGER;if(i===u0)return t.RGBA_INTEGER;if(i===Rc||i===Pc||i===bc||i===Lc)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Rc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Rc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bp||i===zp||i===Vp||i===Hp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gp||i===Wp||i===Xp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gp||i===Wp)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$p||i===jp||i===Yp||i===qp||i===Kp||i===Zp||i===Qp||i===Jp||i===em||i===tm||i===nm||i===im||i===rm||i===sm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$p)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===em)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tm)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nm)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===im)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rm)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sm)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dc||i===om||i===am)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Dc)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===om)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===am)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fS||i===lm||i===um||i===cm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Dc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===um)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ra?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class tL extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fc extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nL={type:"move"};class Sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(u,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const iL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new zn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ki({vertexShader:iL,fragmentShader:rL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ji(new _u(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oL extends Ya{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,v=null;const y=new sL,m=n.getContextAttributes();let f=null,_=null;const g=[],M=[],P=new Je;let A=null;const w=new Ui;w.layers.enable(1),w.viewport=new sn;const L=new Ui;L.layers.enable(2),L.viewport=new sn;const T=[w,L],x=new tL;x.layers.enable(1),x.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=g[V];return Q===void 0&&(Q=new Sh,g[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=g[V];return Q===void 0&&(Q=new Sh,g[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=g[V];return Q===void 0&&(Q=new Sh,g[V]=Q),Q.getHandSpace()};function F(V){const Q=M.indexOf(V.inputSource);if(Q===-1)return;const le=g[Q];le!==void 0&&(le.update(V.inputSource,V.frame,u||o),le.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let V=0;V<g.length;V++){const Q=M[V];Q!==null&&(M[V]=null,g[V].disconnect(Q))}b=null,H=null,y.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,_=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ys(p.framebufferWidth,p.framebufferHeight,{format:xi,type:Nr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,le=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=m.stencil?Pa:oa,le=m.stencil?Ra:co);const Ie={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ys(h.textureWidth,h.textureHeight,{format:xi,type:Nr,depthTexture:new RS(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(V){for(let Q=0;Q<V.removed.length;Q++){const le=V.removed[Q],ue=M.indexOf(le);ue>=0&&(M[ue]=null,g[ue].disconnect(le))}for(let Q=0;Q<V.added.length;Q++){const le=V.added[Q];let ue=M.indexOf(le);if(ue===-1){for(let Oe=0;Oe<g.length;Oe++)if(Oe>=M.length){M.push(le),ue=Oe;break}else if(M[Oe]===null){M[Oe]=le,ue=Oe;break}if(ue===-1)break}const Ie=g[ue];Ie&&Ie.connect(le)}}const G=new B,Y=new B;function D(V,Q,le){G.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const ue=G.distanceTo(Y),Ie=Q.projectionMatrix.elements,Oe=le.projectionMatrix.elements,Be=Ie[14]/(Ie[10]-1),ot=Ie[14]/(Ie[10]+1),R=(Ie[9]+1)/Ie[5],xt=(Ie[9]-1)/Ie[5],Ze=(Ie[8]-1)/Ie[0],We=(Oe[8]+1)/Oe[0],Ee=Be*Ze,St=Be*We,be=ue/(-Ze+We),Fe=be*-Ze;Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Fe),V.translateZ(be),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const C=Be+be,S=ot+be,z=Ee-Fe,J=St+(ue-Fe),te=R*ot/S*C,Z=xt*ot/S*C;V.projectionMatrix.makePerspective(z,J,te,Z,C,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;y.texture!==null&&(V.near=y.depthNear,V.far=y.depthFar),x.near=L.near=w.near=V.near,x.far=L.far=w.far=V.far,(b!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,H=x.far,w.near=b,w.far=H,L.near=b,L.far=H,w.updateProjectionMatrix(),L.updateProjectionMatrix(),V.updateProjectionMatrix());const Q=V.parent,le=x.cameras;X(x,Q);for(let ue=0;ue<le.length;ue++)X(le[ue],Q);le.length===2?D(x,w,L):x.projectionMatrix.copy(w.projectionMatrix),K(V,x,Q)};function K(V,Q,le){le===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=fm*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let oe=null;function ne(V,Q){if(c=Q.getViewerPose(u||o),v=Q,c!==null){const le=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;le.length!==x.cameras.length&&(x.cameras.length=0,ue=!0);for(let Oe=0;Oe<le.length;Oe++){const Be=le[Oe];let ot=null;if(p!==null)ot=p.getViewport(Be);else{const xt=d.getViewSubImage(h,Be);ot=xt.viewport,Oe===0&&(e.setRenderTargetTextures(_,xt.colorTexture,h.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(_))}let R=T[Oe];R===void 0&&(R=new Ui,R.layers.enable(Oe),R.viewport=new sn,T[Oe]=R),R.matrix.fromArray(Be.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Be.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(ot.x,ot.y,ot.width,ot.height),Oe===0&&(x.matrix.copy(R.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ue===!0&&x.cameras.push(R)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Oe=d.getDepthInformation(le[0]);Oe&&Oe.isValid&&Oe.texture&&y.init(e,Oe,r.renderState)}}for(let le=0;le<g.length;le++){const ue=M[le],Ie=g[le];ue!==null&&Ie!==void 0&&Ie.update(ue,Q,u||o)}oe&&oe(V,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),v=null}const Pe=new AS;Pe.setAnimationLoop(ne),this.setAnimationLoop=function(V){oe=V},this.dispose=function(){}}}const Ds=new Fr,aL=new Gt;function lL(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,MS(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,g,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,g):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),g=_.envMap,M=_.envMapRotation;g&&(m.envMap.value=g,Ds.copy(M),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),m.envMapRotation.value.setFromMatrix4(aL.makeRotationFromEuler(Ds)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uL(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function u(_,g){let M=r[_.id];M===void 0&&(v(_),M=c(_),r[_.id]=M,_.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(_,P);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function c(_){const g=d();_.__bindingPointIndex=g;const M=t.createBuffer(),P=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],M=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,w=M.length;A<w;A++){const L=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,x=L.length;T<x;T++){const b=L[T];if(p(b,A,T,P)===!0){const H=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let $=0;$<F.length;$++){const G=F[$],Y=y(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,H+W,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):(G.toArray(b.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,M,P){const A=_.value,w=g+"_"+M;if(P[w]===void 0)return typeof A=="number"||typeof A=="boolean"?P[w]=A:P[w]=A.clone(),!0;{const L=P[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return P[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function v(_){const g=_.uniforms;let M=0;const P=16;for(let w=0,L=g.length;w<L;w++){const T=Array.isArray(g[w])?g[w]:[g[w]];for(let x=0,b=T.length;x<b;x++){const H=T[x],F=Array.isArray(H.value)?H.value:[H.value];for(let W=0,$=F.length;W<$;W++){const G=F[W],Y=y(G),D=M%P,X=D%Y.boundary,K=D+X;M+=X,K!==0&&P-K<Y.storage&&(M+=P-K),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=Y.storage}}}const A=M%P;return A>0&&(M+=P-A),_.__size=M,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class cL{constructor(e={}){const{canvas:n=eA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yi,this.toneMapping=hs,this.toneMappingExposure=1;const g=this;let M=!1,P=0,A=0,w=null,L=-1,T=null;const x=new sn,b=new sn;let H=null;const F=new at(0);let W=0,$=n.width,G=n.height,Y=1,D=null,X=null;const K=new sn(0,0,$,G),oe=new sn(0,0,$,G);let ne=!1;const Pe=new wS;let V=!1,Q=!1;const le=new Gt,ue=new B,Ie=new sn,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ot(){return w===null?Y:1}let R=i;function xt(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${i0}`),n.addEventListener("webglcontextlost",j,!1),n.addEventListener("webglcontextrestored",q,!1),n.addEventListener("webglcontextcreationerror",ae,!1),R===null){const U="webgl2";if(R=xt(U,E),R===null)throw xt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ze,We,Ee,St,be,Fe,C,S,z,J,te,Z,Ce,fe,me,ze,ie,pe,$e,Ne,_e,ke,Ge,Mt;function I(){Ze=new gP(R),Ze.init(),ke=new eL(R,Ze),We=new cP(R,Ze,e,ke),Ee=new Zb(R),St=new yP(R),be=new Ob,Fe=new Jb(R,Ze,Ee,be,We,ke,St),C=new dP(g),S=new mP(g),z=new AA(R),Ge=new lP(R,z),J=new _P(R,z,St,Ge),te=new SP(R,J,z,St),$e=new xP(R,We,Fe),ze=new fP(be),Z=new Fb(g,C,S,Ze,We,Ge,ze),Ce=new lL(g,be),fe=new Bb,me=new Xb(Ze),pe=new aP(g,C,S,Ee,te,h,l),ie=new Kb(g,te,We),Mt=new uL(R,St,We,Ee),Ne=new uP(R,Ze,St),_e=new vP(R,Ze,St),St.programs=Z.programs,g.capabilities=We,g.extensions=Ze,g.properties=be,g.renderLists=fe,g.shadowMap=ie,g.state=Ee,g.info=St}I();const re=new oL(g,R);this.xr=re,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize($,G,!1))},this.getSize=function(E){return E.set($,G)},this.setSize=function(E,U,O=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,G=U,n.width=Math.floor(E*Y),n.height=Math.floor(U*Y),O===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set($*Y,G*Y).floor()},this.setDrawingBufferSize=function(E,U,O){$=E,G=U,Y=O,n.width=Math.floor(E*O),n.height=Math.floor(U*O),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,U,O,k){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,U,O,k),Ee.viewport(x.copy(K).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,U,O,k){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,U,O,k),Ee.scissor(b.copy(oe).multiplyScalar(Y).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){Ee.setScissorTest(ne=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(E=!0,U=!0,O=!0){let k=0;if(E){let N=!1;if(w!==null){const se=w.texture.format;N=se===u0||se===l0||se===a0}if(N){const se=w.texture.type,de=se===Nr||se===co||se===Ql||se===Ra||se===s0||se===o0,ve=pe.getClearColor(),ye=pe.getClearAlpha(),De=ve.r,Ue=ve.g,Re=ve.b;de?(p[0]=De,p[1]=Ue,p[2]=Re,p[3]=ye,R.clearBufferuiv(R.COLOR,0,p)):(v[0]=De,v[1]=Ue,v[2]=Re,v[3]=ye,R.clearBufferiv(R.COLOR,0,v))}else k|=R.COLOR_BUFFER_BIT}U&&(k|=R.DEPTH_BUFFER_BIT),O&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",j,!1),n.removeEventListener("webglcontextrestored",q,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),fe.dispose(),me.dispose(),be.dispose(),C.dispose(),S.dispose(),te.dispose(),Ge.dispose(),Mt.dispose(),Z.dispose(),re.dispose(),re.removeEventListener("sessionstart",Gi),re.removeEventListener("sessionend",d0),ws.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=St.autoReset,U=ie.enabled,O=ie.autoUpdate,k=ie.needsUpdate,N=ie.type;I(),St.autoReset=E,ie.enabled=U,ie.autoUpdate=O,ie.needsUpdate=k,ie.type=N}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Le(E){const U=E.target;U.removeEventListener("dispose",Le),Ye(U)}function Ye(E){Ot(E),be.remove(E)}function Ot(E){const U=be.get(E).programs;U!==void 0&&(U.forEach(function(O){Z.releaseProgram(O)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,O,k,N,se){U===null&&(U=Oe);const de=N.isMesh&&N.matrixWorld.determinant()<0,ve=BS(E,U,O,k,N);Ee.setMaterial(k,de);let ye=O.index,De=1;if(k.wireframe===!0){if(ye=J.getWireframeAttribute(O),ye===void 0)return;De=2}const Ue=O.drawRange,Re=O.attributes.position;let nt=Ue.start*De,bt=(Ue.start+Ue.count)*De;se!==null&&(nt=Math.max(nt,se.start*De),bt=Math.min(bt,(se.start+se.count)*De)),ye!==null?(nt=Math.max(nt,0),bt=Math.min(bt,ye.count)):Re!=null&&(nt=Math.max(nt,0),bt=Math.min(bt,Re.count));const Lt=bt-nt;if(Lt<0||Lt===1/0)return;Ge.setup(N,k,ve,O,ye);let Gn,it=Ne;if(ye!==null&&(Gn=z.get(ye),it=_e,it.setIndex(Gn)),N.isMesh)k.wireframe===!0?(Ee.setLineWidth(k.wireframeLinewidth*ot()),it.setMode(R.LINES)):it.setMode(R.TRIANGLES);else if(N.isLine){let Te=k.linewidth;Te===void 0&&(Te=1),Ee.setLineWidth(Te*ot()),N.isLineSegments?it.setMode(R.LINES):N.isLineLoop?it.setMode(R.LINE_LOOP):it.setMode(R.LINE_STRIP)}else N.isPoints?it.setMode(R.POINTS):N.isSprite&&it.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Te=N._multiDrawStarts,ln=N._multiDrawCounts,rt=N._multiDrawCount,Ai=ye?z.get(ye).bytesPerElement:1,_o=be.get(k).currentProgram.getUniforms();for(let Wn=0;Wn<rt;Wn++)_o.setValue(R,"_gl_DrawID",Wn),it.render(Te[Wn]/Ai,ln[Wn])}else if(N.isInstancedMesh)it.renderInstances(nt,Lt,N.count);else if(O.isInstancedBufferGeometry){const Te=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ln=Math.min(O.instanceCount,Te);it.renderInstances(nt,Lt,ln)}else it.render(nt,Lt)};function an(E,U,O){E.transparent===!0&&E.side===Sr&&E.forceSinglePass===!1?(E.side=Bn,E.needsUpdate=!0,yu(E,U,O),E.side=vs,E.needsUpdate=!0,yu(E,U,O),E.side=Sr):yu(E,U,O)}this.compile=function(E,U,O=null){O===null&&(O=E),m=me.get(O),m.init(U),_.push(m),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),E!==O&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const k=new Set;return E.traverse(function(N){const se=N.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const ve=se[de];an(ve,O,N),k.add(ve)}else an(se,O,N),k.add(se)}),_.pop(),m=null,k},this.compileAsync=function(E,U,O=null){const k=this.compile(E,U,O);return new Promise(N=>{function se(){if(k.forEach(function(de){be.get(de).currentProgram.isReady()&&k.delete(de)}),k.size===0){N(E);return}setTimeout(se,10)}Ze.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let tt=null;function cr(E){tt&&tt(E)}function Gi(){ws.stop()}function d0(){ws.start()}const ws=new AS;ws.setAnimationLoop(cr),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(E){tt=E,re.setAnimationLoop(E),E===null?ws.stop():ws.start()},re.addEventListener("sessionstart",Gi),re.addEventListener("sessionend",d0),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,U,w),m=me.get(E,_.length),m.init(U),_.push(m),le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pe.setFromProjectionMatrix(le),Q=this.localClippingEnabled,V=ze.init(this.clippingPlanes,Q),y=fe.get(E,f.length),y.init(),f.push(y),re.enabled===!0&&re.isPresenting===!0){const se=g.xr.getDepthSensingMesh();se!==null&&ud(se,U,-1/0,g.sortObjects)}ud(E,U,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(D,X),Be=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Be&&pe.addToRenderList(y,E),this.info.render.frame++,V===!0&&ze.beginShadows();const O=m.state.shadowsArray;ie.render(O,E,U),V===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=y.opaque,N=y.transmissive;if(m.setupLights(),U.isArrayCamera){const se=U.cameras;if(N.length>0)for(let de=0,ve=se.length;de<ve;de++){const ye=se[de];p0(k,N,E,ye)}Be&&pe.render(E);for(let de=0,ve=se.length;de<ve;de++){const ye=se[de];h0(y,E,ye,ye.viewport)}}else N.length>0&&p0(k,N,E,U),Be&&pe.render(E),h0(y,E,U);w!==null&&(Fe.updateMultisampleRenderTarget(w),Fe.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(g,E,U),Ge.resetDefaultState(),L=-1,T=null,_.pop(),_.length>0?(m=_[_.length-1],V===!0&&ze.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function ud(E,U,O,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pe.intersectsSprite(E)){k&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const de=te.update(E),ve=E.material;ve.visible&&y.push(E,de,ve,O,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pe.intersectsObject(E))){const de=te.update(E),ve=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ie.copy(de.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(le)),Array.isArray(ve)){const ye=de.groups;for(let De=0,Ue=ye.length;De<Ue;De++){const Re=ye[De],nt=ve[Re.materialIndex];nt&&nt.visible&&y.push(E,de,nt,O,Ie.z,Re)}}else ve.visible&&y.push(E,de,ve,O,Ie.z,null)}}const se=E.children;for(let de=0,ve=se.length;de<ve;de++)ud(se[de],U,O,k)}function h0(E,U,O,k){const N=E.opaque,se=E.transmissive,de=E.transparent;m.setupLightsView(O),V===!0&&ze.setGlobalState(g.clippingPlanes,O),k&&Ee.viewport(x.copy(k)),N.length>0&&vu(N,U,O),se.length>0&&vu(se,U,O),de.length>0&&vu(de,U,O),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function p0(E,U,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new ys(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?ja:Nr,minFilter:$s,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const se=m.state.transmissionRenderTarget[k.id],de=k.viewport||x;se.setSize(de.z,de.w);const ve=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(F),W=g.getClearAlpha(),W<1&&g.setClearColor(16777215,.5),g.clear(),Be&&pe.render(O);const ye=g.toneMapping;g.toneMapping=hs;const De=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),V===!0&&ze.setGlobalState(g.clippingPlanes,k),vu(E,O,k),Fe.updateMultisampleRenderTarget(se),Fe.updateRenderTargetMipmap(se),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Re=0,nt=U.length;Re<nt;Re++){const bt=U[Re],Lt=bt.object,Gn=bt.geometry,it=bt.material,Te=bt.group;if(it.side===Sr&&Lt.layers.test(k.layers)){const ln=it.side;it.side=Bn,it.needsUpdate=!0,m0(Lt,O,k,Gn,it,Te),it.side=ln,it.needsUpdate=!0,Ue=!0}}Ue===!0&&(Fe.updateMultisampleRenderTarget(se),Fe.updateRenderTargetMipmap(se))}g.setRenderTarget(ve),g.setClearColor(F,W),De!==void 0&&(k.viewport=De),g.toneMapping=ye}function vu(E,U,O){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,se=E.length;N<se;N++){const de=E[N],ve=de.object,ye=de.geometry,De=k===null?de.material:k,Ue=de.group;ve.layers.test(O.layers)&&m0(ve,U,O,ye,De,Ue)}}function m0(E,U,O,k,N,se){E.onBeforeRender(g,U,O,k,N,se),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.transparent===!0&&N.side===Sr&&N.forceSinglePass===!1?(N.side=Bn,N.needsUpdate=!0,g.renderBufferDirect(O,U,k,N,E,se),N.side=vs,N.needsUpdate=!0,g.renderBufferDirect(O,U,k,N,E,se),N.side=Sr):g.renderBufferDirect(O,U,k,N,E,se),E.onAfterRender(g,U,O,k,N,se)}function yu(E,U,O){U.isScene!==!0&&(U=Oe);const k=be.get(E),N=m.state.lights,se=m.state.shadowsArray,de=N.state.version,ve=Z.getParameters(E,N.state,se,U,O),ye=Z.getProgramCacheKey(ve);let De=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?S:C).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Le),De=new Map,k.programs=De);let Ue=De.get(ye);if(Ue!==void 0){if(k.currentProgram===Ue&&k.lightsStateVersion===de)return _0(E,ve),Ue}else ve.uniforms=Z.getUniforms(E),E.onBeforeCompile(ve,g),Ue=Z.acquireProgram(ve,ye),De.set(ye,Ue),k.uniforms=ve.uniforms;const Re=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=ze.uniform),_0(E,ve),k.needsLights=VS(E),k.lightsStateVersion=de,k.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Ue,k.uniformsList=null,Ue}function g0(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ic.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function _0(E,U){const O=be.get(E);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function BS(E,U,O,k,N){U.isScene!==!0&&(U=Oe),Fe.resetTextureUnits();const se=U.fog,de=k.isMeshStandardMaterial?U.environment:null,ve=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ts,ye=(k.isMeshStandardMaterial?S:C).get(k.envMap||de),De=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ue=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!O.morphAttributes.position,nt=!!O.morphAttributes.normal,bt=!!O.morphAttributes.color;let Lt=hs;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Lt=g.toneMapping);const Gn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,it=Gn!==void 0?Gn.length:0,Te=be.get(k),ln=m.state.lights;if(V===!0&&(Q===!0||E!==T)){const ci=E===T&&k.id===L;ze.setState(k,E,ci)}let rt=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ln.state.version||Te.outputColorSpace!==ve||N.isBatchedMesh&&Te.batching===!1||!N.isBatchedMesh&&Te.batching===!0||N.isBatchedMesh&&Te.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Te.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Te.instancing===!1||!N.isInstancedMesh&&Te.instancing===!0||N.isSkinnedMesh&&Te.skinning===!1||!N.isSkinnedMesh&&Te.skinning===!0||N.isInstancedMesh&&Te.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Te.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Te.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Te.instancingMorph===!1&&N.morphTexture!==null||Te.envMap!==ye||k.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ze.numPlanes||Te.numIntersection!==ze.numIntersection)||Te.vertexAlphas!==De||Te.vertexTangents!==Ue||Te.morphTargets!==Re||Te.morphNormals!==nt||Te.morphColors!==bt||Te.toneMapping!==Lt||Te.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Te.__version=k.version);let Ai=Te.currentProgram;rt===!0&&(Ai=yu(k,U,N));let _o=!1,Wn=!1,cd=!1;const kt=Ai.getUniforms(),kr=Te.uniforms;if(Ee.useProgram(Ai.program)&&(_o=!0,Wn=!0,cd=!0),k.id!==L&&(L=k.id,Wn=!0),_o||T!==E){kt.setValue(R,"projectionMatrix",E.projectionMatrix),kt.setValue(R,"viewMatrix",E.matrixWorldInverse);const ci=kt.map.cameraPosition;ci!==void 0&&ci.setValue(R,ue.setFromMatrixPosition(E.matrixWorld)),We.logarithmicDepthBuffer&&kt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&kt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,Wn=!0,cd=!0)}if(N.isSkinnedMesh){kt.setOptional(R,N,"bindMatrix"),kt.setOptional(R,N,"bindMatrixInverse");const ci=N.skeleton;ci&&(ci.boneTexture===null&&ci.computeBoneTexture(),kt.setValue(R,"boneTexture",ci.boneTexture,Fe))}N.isBatchedMesh&&(kt.setOptional(R,N,"batchingTexture"),kt.setValue(R,"batchingTexture",N._matricesTexture,Fe),kt.setOptional(R,N,"batchingIdTexture"),kt.setValue(R,"batchingIdTexture",N._indirectTexture,Fe),kt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&kt.setValue(R,"batchingColorTexture",N._colorsTexture,Fe));const fd=O.morphAttributes;if((fd.position!==void 0||fd.normal!==void 0||fd.color!==void 0)&&$e.update(N,O,Ai),(Wn||Te.receiveShadow!==N.receiveShadow)&&(Te.receiveShadow=N.receiveShadow,kt.setValue(R,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(kr.envMap.value=ye,kr.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(kr.envMapIntensity.value=U.environmentIntensity),Wn&&(kt.setValue(R,"toneMappingExposure",g.toneMappingExposure),Te.needsLights&&zS(kr,cd),se&&k.fog===!0&&Ce.refreshFogUniforms(kr,se),Ce.refreshMaterialUniforms(kr,k,Y,G,m.state.transmissionRenderTarget[E.id]),Ic.upload(R,g0(Te),kr,Fe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ic.upload(R,g0(Te),kr,Fe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&kt.setValue(R,"center",N.center),kt.setValue(R,"modelViewMatrix",N.modelViewMatrix),kt.setValue(R,"normalMatrix",N.normalMatrix),kt.setValue(R,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const ci=k.uniformsGroups;for(let dd=0,HS=ci.length;dd<HS;dd++){const v0=ci[dd];Mt.update(v0,Ai),Mt.bind(v0,Ai)}}return Ai}function zS(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function VS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,O){be.get(E.texture).__webglTexture=U,be.get(E.depthTexture).__webglTexture=O;const k=be.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const O=be.get(E);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,O=0){w=E,P=U,A=O;let k=!0,N=null,se=!1,de=!1;if(E){const ye=be.get(E);ye.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(R.FRAMEBUFFER,null),k=!1):ye.__webglFramebuffer===void 0?Fe.setupRenderTarget(E):ye.__hasExternalTextures&&Fe.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);const De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(de=!0);const Ue=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?N=Ue[U][O]:N=Ue[U],se=!0):E.samples>0&&Fe.useMultisampledRTT(E)===!1?N=be.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?N=Ue[O]:N=Ue,x.copy(E.viewport),b.copy(E.scissor),H=E.scissorTest}else x.copy(K).multiplyScalar(Y).floor(),b.copy(oe).multiplyScalar(Y).floor(),H=ne;if(Ee.bindFramebuffer(R.FRAMEBUFFER,N)&&k&&Ee.drawBuffers(E,N),Ee.viewport(x),Ee.scissor(b),Ee.setScissorTest(H),se){const ye=be.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,O)}else if(de){const ye=be.get(E.texture),De=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.__webglTexture,O||0,De)}L=-1},this.readRenderTargetPixels=function(E,U,O,k,N,se,de){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){Ee.bindFramebuffer(R.FRAMEBUFFER,ve);try{const ye=E.texture,De=ye.format,Ue=ye.type;if(!We.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&O>=0&&O<=E.height-N&&R.readPixels(U,O,k,N,ke.convert(De),ke.convert(Ue),se)}finally{const ye=w!==null?be.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,U,O,k,N,se,de){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){Ee.bindFramebuffer(R.FRAMEBUFFER,ve);try{const ye=E.texture,De=ye.format,Ue=ye.type;if(!We.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-k&&O>=0&&O<=E.height-N){const Re=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Re),R.bufferData(R.PIXEL_PACK_BUFFER,se.byteLength,R.STREAM_READ),R.readPixels(U,O,k,N,ke.convert(De),ke.convert(Ue),0),R.flush();const nt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await tA(R,nt,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,Re),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,se)}finally{R.deleteBuffer(Re),R.deleteSync(nt)}return se}}finally{const ye=w!==null?be.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(E,U=null,O=0){E.isTexture!==!0&&(bl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-O),N=Math.floor(E.image.width*k),se=Math.floor(E.image.height*k),de=U!==null?U.x:0,ve=U!==null?U.y:0;Fe.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,de,ve,N,se),Ee.unbindTexture()},this.copyTextureToTexture=function(E,U,O=null,k=null,N=0){E.isTexture!==!0&&(bl("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,O=null);let se,de,ve,ye,De,Ue;O!==null?(se=O.max.x-O.min.x,de=O.max.y-O.min.y,ve=O.min.x,ye=O.min.y):(se=E.image.width,de=E.image.height,ve=0,ye=0),k!==null?(De=k.x,Ue=k.y):(De=0,Ue=0);const Re=ke.convert(U.format),nt=ke.convert(U.type);Fe.setTexture2D(U,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const bt=R.getParameter(R.UNPACK_ROW_LENGTH),Lt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Gn=R.getParameter(R.UNPACK_SKIP_PIXELS),it=R.getParameter(R.UNPACK_SKIP_ROWS),Te=R.getParameter(R.UNPACK_SKIP_IMAGES),ln=E.isCompressedTexture?E.mipmaps[N]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ln.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ln.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,ye),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,De,Ue,se,de,Re,nt,ln.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,De,Ue,ln.width,ln.height,Re,ln.data):R.texSubImage2D(R.TEXTURE_2D,N,De,Ue,se,de,Re,nt,ln),R.pixelStorei(R.UNPACK_ROW_LENGTH,bt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Lt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Gn),R.pixelStorei(R.UNPACK_SKIP_ROWS,it),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Te),N===0&&U.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,U,O=null,k=null,N=0){E.isTexture!==!0&&(bl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0);let se,de,ve,ye,De,Ue,Re,nt,bt;const Lt=E.isCompressedTexture?E.mipmaps[N]:E.image;O!==null?(se=O.max.x-O.min.x,de=O.max.y-O.min.y,ve=O.max.z-O.min.z,ye=O.min.x,De=O.min.y,Ue=O.min.z):(se=Lt.width,de=Lt.height,ve=Lt.depth,ye=0,De=0,Ue=0),k!==null?(Re=k.x,nt=k.y,bt=k.z):(Re=0,nt=0,bt=0);const Gn=ke.convert(U.format),it=ke.convert(U.type);let Te;if(U.isData3DTexture)Fe.setTexture3D(U,0),Te=R.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Fe.setTexture2DArray(U,0),Te=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const ln=R.getParameter(R.UNPACK_ROW_LENGTH),rt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ai=R.getParameter(R.UNPACK_SKIP_PIXELS),_o=R.getParameter(R.UNPACK_SKIP_ROWS),Wn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Lt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Lt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ye),R.pixelStorei(R.UNPACK_SKIP_ROWS,De),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ue),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Te,N,Re,nt,bt,se,de,ve,Gn,it,Lt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Te,N,Re,nt,bt,se,de,ve,Gn,Lt.data):R.texSubImage3D(Te,N,Re,nt,bt,se,de,ve,Gn,it,Lt),R.pixelStorei(R.UNPACK_ROW_LENGTH,ln),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,rt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ai),R.pixelStorei(R.UNPACK_SKIP_ROWS,_o),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Wn),N===0&&U.generateMipmaps&&R.generateMipmap(Te),Ee.unbindTexture()},this.initRenderTarget=function(E){be.get(E).__webglFramebuffer===void 0&&Fe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Fe.setTextureCube(E,0):E.isData3DTexture?Fe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Fe.setTexture2DArray(E,0):Fe.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){P=0,A=0,w=null,Ee.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===c0?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===sd?"display-p3":"srgb"}}class Av extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class fL extends mu{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cv=new Gt,hm=new gS,dc=new od,hc=new B;class Rv extends Vn{constructor(e=new rr,n=new fL){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dc.copy(i.boundingSphere),dc.applyMatrix4(r),dc.radius+=s,e.ray.intersectsSphere(dc)===!1)return;Cv.copy(r).invert(),hm.copy(e.ray).applyMatrix4(Cv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=h,y=p;v<y;v++){const m=u.getX(v);hc.fromBufferAttribute(d,m),Pv(hc,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=h,y=p;v<y;v++)hc.fromBufferAttribute(d,v),Pv(hc,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Pv(t,e,n,i,r,s,o){const a=hm.distanceSqToPoint(t);if(a<n){const l=new B;hm.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class dL{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=bv();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function bv(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:i0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=i0);const Lv=1200,hL=.025,pL=.1,Dv=.94,mL=.022,Iv=24;class gL{constructor(e,n,i){hn(this,"xs");hn(this,"ys");hn(this,"vxs");hn(this,"vys");hn(this,"oxs");hn(this,"oys");hn(this,"count");hn(this,"spA");hn(this,"spB");hn(this,"spR");hn(this,"spN");hn(this,"pR",10);hn(this,"restR");hn(this,"hCx");hn(this,"hCy");this.restR=i,this.hCx=e,this.hCy=n;const r=[];let s=0;for(;r.length<Lv&&s<Lv*25;){s++;const u=Math.random()*Math.PI*2,c=Math.sqrt(Math.random())*i,d=Math.cos(u)*c,h=Math.sin(u)*c,p=i*(.88+.12*Math.sin(u*3+.7)+.08*Math.sin(u*7+2.1));Math.sqrt(d*d+h*h)<p*.94&&r.push([d+e,h+n])}this.count=r.length,this.xs=new Float32Array(this.count),this.ys=new Float32Array(this.count),this.vxs=new Float32Array(this.count),this.vys=new Float32Array(this.count),this.oxs=new Float32Array(this.count),this.oys=new Float32Array(this.count);for(let u=0;u<this.count;u++)this.xs[u]=r[u][0],this.ys[u]=r[u][1],this.oxs[u]=r[u][0]-e,this.oys[u]=r[u][1]-n;const o=Iv,a=new Map;for(let u=0;u<this.count;u++){const c=Math.floor(this.xs[u]/o),d=Math.floor(this.ys[u]/o),h=c*1e5+d;a.has(h)||a.set(h,[]),a.get(h).push(u)}const l=this.count*10;this.spA=new Int32Array(l),this.spB=new Int32Array(l),this.spR=new Float32Array(l),this.spN=0;for(let u=0;u<this.count;u++){const c=Math.floor(this.xs[u]/o),d=Math.floor(this.ys[u]/o);for(let h=-1;h<=1;h++)for(let p=-1;p<=1;p++)for(const v of a.get((c+h)*1e5+(d+p))??[]){if(v<=u)continue;const y=this.xs[u]-this.xs[v],m=this.ys[u]-this.ys[v],f=Math.sqrt(y*y+m*m);f<Iv&&this.spN<l-1&&(this.spA[this.spN]=u,this.spB[this.spN]=v,this.spR[this.spN]=f,this.spN++)}}}get cx(){let e=0;for(let n=0;n<this.count;n++)e+=this.xs[n];return e/this.count}get cy(){let e=0;for(let n=0;n<this.count;n++)e+=this.ys[n];return e/this.count}applyForce(e,n,i,r){for(let s=0;s<this.count;s++){const o=e-this.xs[s],a=n-this.ys[s],l=Math.sqrt(o*o+a*a)+.01;if(l<r){const u=(1-l/r)*i;this.vxs[s]+=o/l*u,this.vys[s]+=a/l*u}}}update(){for(let e=0;e<this.spN;e++){const n=this.spA[e],i=this.spB[e],r=this.xs[i]-this.xs[n],s=this.ys[i]-this.ys[n],o=Math.sqrt(r*r+s*s)+.01;this.spR[e]+=(o-this.spR[e])*pL;const a=(o-this.spR[e])*hL,l=r/o,u=s/o;this.vxs[n]+=l*a,this.vys[n]+=u*a,this.vxs[i]-=l*a,this.vys[i]-=u*a}for(let e=0;e<this.count;e++)this.vys[e]+=mL,this.vxs[e]*=Dv,this.vys[e]*=Dv,this.xs[e]+=this.vxs[e],this.ys[e]+=this.vys[e]}}const _L="void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);gl_PointSize=60.0;}",vL="void main(){vec2 c=gl_PointCoord-0.5;float d=length(c)*60.0+0.01;float v=min(100.0/(d*d),8.0);if(v<0.04)discard;gl_FragColor=vec4(v,0.0,0.0,1.0);}",yL="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",xL=`
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
`,SL="attribute float aAlpha;attribute float aSize;varying float vAlpha;void main(){vAlpha=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);gl_PointSize=aSize;}",ML="varying float vAlpha;void main(){vec2 c=gl_PointCoord*2.0-1.0;if(dot(c,c)>1.0)discard;float g=1.0-sqrt(dot(c,c));gl_FragColor=vec4(mix(vec3(0.75,0.45,1.0),vec3(1.0,0.82,1.0),g)*g,g*vAlpha*0.9);}",EL={},Uv=t=>{let e;const n=new Set,i=(c,d)=>{const h=typeof c=="function"?c(e):c;if(!Object.is(h,e)){const p=e;e=d??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(v=>v(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>u,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{(EL?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=e=t(i,r,l);return l},TL=t=>t?Uv(t):Uv;var IS={exports:{}},US={},NS={exports:{}},FS={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=pt;function wL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var AL=typeof Object.is=="function"?Object.is:wL,CL=La.useState,RL=La.useEffect,PL=La.useLayoutEffect,bL=La.useDebugValue;function LL(t,e){var n=e(),i=CL({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return PL(function(){r.value=n,r.getSnapshot=e,Mh(r)&&s({inst:r})},[t,n,e]),RL(function(){return Mh(r)&&s({inst:r}),t(function(){Mh(r)&&s({inst:r})})},[t]),bL(n),n}function Mh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!AL(t,n)}catch{return!0}}function DL(t,e){return e()}var IL=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?DL:LL;FS.useSyncExternalStore=La.useSyncExternalStore!==void 0?La.useSyncExternalStore:IL;NS.exports=FS;var UL=NS.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=pt,NL=UL;function FL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var OL=typeof Object.is=="function"?Object.is:FL,kL=NL.useSyncExternalStore,BL=ld.useRef,zL=ld.useEffect,VL=ld.useMemo,HL=ld.useDebugValue;US.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=BL(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=VL(function(){function l(p){if(!u){if(u=!0,c=p,p=i(p),r!==void 0&&o.hasValue){var v=o.value;if(r(v,p))return d=v}return d=p}if(v=d,OL(c,p))return v;var y=i(p);return r!==void 0&&r(v,y)?(c=p,v):(c=p,d=y)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,i,r]);var a=kL(t,s[0],s[1]);return zL(function(){o.hasValue=!0,o.value=a},[a]),HL(a),a};IS.exports=US;var GL=IS.exports;const WL=Ov(GL),OS={},{useDebugValue:XL}=oM,{useSyncExternalStoreWithSelector:$L}=WL;let Nv=!1;const jL=t=>t;function YL(t,e=jL,n){(OS?"production":void 0)!=="production"&&n&&!Nv&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Nv=!0);const i=$L(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return XL(i),i}const Fv=t=>{(OS?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?TL(t):t,n=(i,r)=>YL(e,i,r);return Object.assign(n,e),n},qL=t=>t?Fv(t):Fv,kS=qL(t=>({handsData:[],setHandsData:e=>t({handsData:e}),flameState:"floating",setFlameState:e=>t({flameState:e}),collectionProgress:0,setCollectionProgress:e=>t({collectionProgress:e}),activeColor:"orange",colorTransitionT:1,setActiveColor:e=>t({activeColor:e,colorTransitionT:0}),setColorTransitionT:e=>t({colorTransitionT:e}),pinchFlash:!1,setPinchFlash:e=>t({pinchFlash:e}),isLoaded:!1,setIsLoaded:e=>t({isLoaded:e})})),gr=50;function KL(t){return{x:(t[0].x+t[5].x+t[9].x+t[13].x+t[17].x)/5,y:(t[0].y+t[5].y+t[9].y+t[13].y+t[17].y)/5}}function ZL(t){const e=[4,8,12,16,20],n=[3,6,10,14,18];let i=0;for(let r=0;r<5;r++)Math.hypot(t[e[r]].x-t[0].x,t[e[r]].y-t[0].y)>Math.hypot(t[n[r]].x-t[0].x,t[n[r]].y-t[0].y)*1.08&&i++;return i/5}function QL(t,e,n,i){return{x:t-n/2,y:i/2-e}}function JL({handsData:t}){const e=pt.useRef(null),n=pt.useRef(0),i=pt.useRef(new dL),r=pt.useRef([]),s=kS(o=>o.setIsLoaded);return pt.useEffect(()=>{r.current=t},[t]),pt.useEffect(()=>{const o=e.current;if(!o)return;const a=window.innerWidth,l=window.innerHeight,u=new cL({canvas:o,alpha:!0,antialias:!0});u.setSize(a,l),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setClearColor(0,0);const c=new CS(-a/2,a/2,l/2,-l/2,-100,100);c.position.z=10;const d=new gL(a/2,l/2,Math.min(a,l)*.19),h=new ys(a,l,{minFilter:Zn,magFilter:Zn,format:xi,type:ja,depthBuffer:!1}),p=new rr,v=new Float32Array(d.count*3);p.setAttribute("position",new Nn(v,3));const y=new ki({vertexShader:_L,fragmentShader:vL,transparent:!0,blending:df,depthWrite:!1,depthTest:!1}),m=new Av;m.add(new Rv(p,y));const f=new ki({vertexShader:yL,fragmentShader:xL,uniforms:{uAccum:{value:h.texture},uRes:{value:new Je(a,l)},uTime:{value:0},uMass:{value:new Je(0,0)}},transparent:!0,blending:eo,depthWrite:!1}),_=new Av;_.add(new Ji(new _u(a,l),f));const g=new Float32Array(gr*3),M=new Float32Array(gr),P=new Float32Array(gr),A=new Float32Array(gr),w=new Float32Array(gr),L=new Float32Array(gr),T=new Float32Array(gr);for(let F=0;F<gr;F++){const W=Math.random()*Math.PI*2,$=90+Math.random()*150;g[F*3]=Math.cos(W)*$,g[F*3+1]=Math.sin(W)*$,M[F]=-Math.cos(W)*.55,P[F]=Math.sin(W)*.55,L[F]=3+Math.random()*5,T[F]=Math.random()*Math.PI*2}const x=new rr;x.setAttribute("position",new Nn(g,3)),x.setAttribute("aAlpha",new Nn(A,1)),x.setAttribute("aSize",new Nn(w,1)),_.add(new Rv(x,new ki({vertexShader:SL,fragmentShader:ML,transparent:!0,blending:df,depthWrite:!1}))),s(!0);function b(){n.current=requestAnimationFrame(b);const F=i.current.getElapsedTime(),W=r.current,$=Math.min(1,F/2.5);if($<1){for(let ne=0;ne<gr;ne++){const Pe=ne*3;M[ne]*=.96,P[ne]*=.96,g[Pe]+=M[ne],g[Pe+1]+=P[ne],A[ne]=Math.min(1,F/1.1)*(1-$*$)*(.6+Math.sin(F*3+T[ne])*.3),w[ne]=L[ne]*(1-$*.6)}x.getAttribute("position").needsUpdate=!0,x.getAttribute("aAlpha").needsUpdate=!0,x.getAttribute("aSize").needsUpdate=!0}const G=d.restR,Y=[...W].sort((ne,Pe)=>{var V,Q;return(((V=ne.landmarks)==null?void 0:V[0].x)??a/2)-(((Q=Pe.landmarks)==null?void 0:Q[0].x)??a/2)});let D=null,X=null;for(let ne=0;ne<Y.length&&ne<2;ne++){const Pe=Y[ne].landmarks;if(!Pe||Pe.length<21)continue;const V=KL(Pe),Q=ZL(Pe),le=Pe[8].x,ue=Pe[8].y,Ie=Pe[4].x,Oe=Pe[4].y,Be=Math.hypot(le-Ie,ue-Oe)<42;if(ne===0?D=V:X=V,Be){const ot=(le+Ie)/2,R=(ue+Oe)/2;d.applyForce(ot,R,.55,110)}else Math.hypot(V.x-d.cx,V.y-d.cy)<G*2.5&&(Q>.7?d.applyForce(V.x,V.y,-.3,130):Q<.4?d.applyForce(V.x,V.y,.45,120):d.applyForce(le,ue,-.28,80))}if(D&&X){const ne=Math.hypot(D.x-X.x,D.y-X.y),Pe=G*2,V=ne/Pe,Q=ne,le=G*2/Math.sqrt(Math.max(1,V)),ue=.2*ne,Ie=(D.x+X.x)/2,Oe=(D.y+X.y)/2,Be=(X.x-D.x)/(ne+.01),ot=(X.y-D.y)/(ne+.01),R=-ot,xt=Be,Ze=.08;for(let We=0;We<d.count;We++){const Ee=d.oxs[We],St=d.oys[We],be=(Ee*Be+St*ot)/G,Fe=(Ee*R+St*xt)/G,C=ue*(1-be*be)*.5,S=Ie+be*(Q/2)*Be+Fe*(le/2)*R,z=Oe+be*(Q/2)*ot+Fe*(le/2)*xt+C;d.vxs[We]+=(S-d.xs[We])*Ze,d.vys[We]+=(z-d.ys[We])*Ze}}d.update();const K=p.getAttribute("position");for(let ne=0;ne<d.count;ne++)K.setXYZ(ne,d.xs[ne]-a/2,l/2-d.ys[ne],0);K.needsUpdate=!0,p.setDrawRange(0,Math.floor(d.count*(.15+$*.85))),u.setRenderTarget(h),u.setClearColor(0,0),u.clear(),u.render(m,c),u.setRenderTarget(null),u.setClearColor(0,0),u.clear();const oe=QL(d.cx,d.cy,a,l);f.uniforms.uMass.value.set(oe.x,oe.y),f.uniforms.uTime.value=F,u.render(_,c)}b();function H(){const F=window.innerWidth,W=window.innerHeight;u.setSize(F,W),c.left=-F/2,c.right=F/2,c.top=W/2,c.bottom=-W/2,c.updateProjectionMatrix(),f.uniforms.uRes.value.set(F,W),h.setSize(F,W)}return window.addEventListener("resize",H),()=>{cancelAnimationFrame(n.current),window.removeEventListener("resize",H),u.dispose(),h.dispose()}},[s]),tn.jsx("canvas",{ref:e,id:"slime-canvas",style:{position:"absolute",inset:0,zIndex:3}})}function eD(){const t=pt.useRef(null),[e,n]=pt.useState(!1),[i,r]=pt.useState([]),[s,o]=pt.useState(!1),a=kS(c=>c.isLoaded),l=pt.useCallback(()=>{n(!0),setTimeout(()=>o(!0),900)},[]),u=pt.useCallback(c=>r(c),[]);return tn.jsxs("div",{className:"app-container",id:"app-container",children:[!s&&tn.jsxs("div",{className:`loading-overlay${a?" fade-out":""}`,id:"loading-overlay",children:[tn.jsx("div",{className:"loading-title",style:{background:"linear-gradient(135deg,#c084fc,#f472b6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Living Slime"}),tn.jsx("div",{className:"loading-spinner",style:{borderTopColor:"#c084fc"}}),tn.jsx("div",{className:"loading-subtitle",children:e?"Waking up the slime...":"Requesting camera access..."})]}),tn.jsx(vT,{videoRef:t,onReady:l}),tn.jsx(yT,{}),tn.jsx(iw,{videoRef:t,isVideoReady:e,onHandsUpdate:u}),tn.jsx(JL,{handsData:i}),s&&tn.jsx("div",{className:"slime-hint",id:"slime-hint",children:"Poke · Pinch · Squeeze · Swirl"})]})}Ky(document.getElementById("root")).render(tn.jsx(pt.StrictMode,{children:tn.jsx(eD,{})}));
