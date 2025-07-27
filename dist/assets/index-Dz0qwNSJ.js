const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DashboardPage-C1VQJKCU.js","assets/charts-BYcMWlQw.js","assets/vendor-CWc6w16D.js","assets/Card-oxLIkYBN.js","assets/TransactionsPage-DzpMCDeo.js","assets/InventoryPage-XCAQWKgW.js","assets/SettingsPage-DIxwvQEz.js"])))=>i.map(i=>d[i]);
import{r as Qf,a as Xf,g as Jf}from"./vendor-CWc6w16D.js";import{r as H,R as _o}from"./charts-BYcMWlQw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();var ro={exports:{}},ar={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uu;function Yf(){if(Uu)return ar;Uu=1;var r=Qf(),t=Symbol.for("react.element"),e=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(u,l,d){var f,p={},_=null,S=null;d!==void 0&&(_=""+d),l.key!==void 0&&(_=""+l.key),l.ref!==void 0&&(S=l.ref);for(f in l)n.call(l,f)&&!i.hasOwnProperty(f)&&(p[f]=l[f]);if(u&&u.defaultProps)for(f in l=u.defaultProps,l)p[f]===void 0&&(p[f]=l[f]);return{$$typeof:t,type:u,key:_,ref:S,props:p,_owner:s.current}}return ar.Fragment=e,ar.jsx=a,ar.jsxs=a,ar}var qu;function Zf(){return qu||(qu=1,ro.exports=Yf()),ro.exports}var A=Zf(),As={},zu;function tm(){if(zu)return As;zu=1;var r=Xf();return As.createRoot=r.createRoot,As.hydrateRoot=r.hydrateRoot,As}var em=tm();const nm=Jf(em),rm="modulepreload",sm=function(r){return"/"+r},$u={},ci=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),l=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));s=a(e.map(d=>{if(d=sm(d),d in $u)return;$u[d]=!0;const f=d.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":rm,f||(_.as="script"),_.crossOrigin="",_.href=d,l&&_.setAttribute("nonce",l),document.head.appendChild(_),f)return new Promise((S,C)=>{_.addEventListener("load",S),_.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a}return s.then(a=>{for(const u of a||[])u.status==="rejected"&&i(u.reason);return t().catch(i)})},im=()=>{};var Gu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},om=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],u=r[e++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Dl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|u>>4;let _=(u&15)<<2|d>>6,S=d&63;l||(S=64,a||(_=64)),n.push(e[f],e[p],e[_],e[S])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Cl(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):om(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],u=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const p=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||u==null||d==null||p==null)throw new am;const _=i<<2|u>>4;if(n.push(_),d!==64){const S=u<<4&240|d>>2;if(n.push(S),p!==64){const C=d<<6&192|p;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class am extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const um=function(r){const t=Cl(r);return Dl.encodeByteArray(t,!0)},$s=function(r){return um(r).replace(/\./g,"")},cm=function(r){try{return Dl.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=()=>Nl().__FIREBASE_DEFAULTS__,hm=()=>{if(typeof process>"u"||typeof Gu>"u")return;const r=Gu.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},dm=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&cm(r[1]);return t&&JSON.parse(t)},Qo=()=>{try{return im()||lm()||hm()||dm()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},fm=r=>{var t,e;return(e=(t=Qo())==null?void 0:t.emulatorHosts)==null?void 0:e[r]},mm=r=>{const t=fm(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},kl=()=>{var r;return(r=Qo())==null?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ml(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[$s(JSON.stringify(e)),$s(JSON.stringify(a)),""].join(".")}const Ir={};function _m(){const r={prod:[],emulator:[]};for(const t of Object.keys(Ir))Ir[t]?r.emulator.push(t):r.prod.push(t);return r}function ym(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let Ku=!1;function Im(r,t){if(typeof window>"u"||typeof document>"u"||!li(window.location.host)||Ir[r]===t||Ir[r]||Ku)return;Ir[r]=t;function e(_){return`__firebase__banner__${_}`}const n="__firebase__banner",i=_m().prod.length>0;function a(){const _=document.getElementById(n);_&&_.remove()}function u(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,S){_.setAttribute("width","24"),_.setAttribute("id",S),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function d(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Ku=!0,a()},_}function f(_,S){_.setAttribute("id",S),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=ym(n),S=e("text"),C=document.getElementById(S)||document.createElement("span"),D=e("learnmore"),V=document.getElementById(D)||document.createElement("a"),B=e("preprendIcon"),L=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const F=_.element;u(F),f(V,D);const z=d();l(L,B),F.append(L,C,V,z),document.body.appendChild(F)}i?(C.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ol(){var t;const r=(t=Qo())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ll(){return!Ol()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fl(){return!Ol()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function jl(){try{return typeof indexedDB=="object"}catch{return!1}}function Em(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="FirebaseError";class jn extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Tm,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bl.prototype.create)}}class Bl{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?vm(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new jn(s,u,n)}}function vm(r,t){return r.replace(wm,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const wm=/\{\$([^}]+)}/g;function xr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(Hu(i)&&Hu(a)){if(!xr(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function Hu(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(r){return r&&r._delegate?r._delegate:r}class Pr{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new pm;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Rm(t))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=Le){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Le){return this.instances.has(t)}getOptions(t=Le){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&t(i,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:bm(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Le){return this.component?this.component.multipleInstances?t:Le:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bm(r){return r===Le?void 0:r}function Rm(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Am(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Y||(Y={}));const xm={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Pm=Y.INFO,Vm={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Cm=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Vm[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ul{constructor(t){this.name=t,this._logLevel=Pm,this._logHandler=Cm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Dm=(r,t)=>t.some(e=>r instanceof e);let Wu,Qu;function Nm(){return Wu||(Wu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function km(){return Qu||(Qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ql=new WeakMap,yo=new WeakMap,zl=new WeakMap,so=new WeakMap,Xo=new WeakMap;function Mm(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(Ie(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ql.set(e,r)}).catch(()=>{}),Xo.set(t,r),t}function Om(r){if(yo.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});yo.set(r,t)}let Io={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return yo.get(r);if(t==="objectStoreNames")return r.objectStoreNames||zl.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ie(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Lm(r){Io=r(Io)}function Fm(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(io(this),t,...e);return zl.set(n,t.sort?t.sort():[t]),Ie(n)}:km().includes(r)?function(...t){return r.apply(io(this),t),Ie(ql.get(this))}:function(...t){return Ie(r.apply(io(this),t))}}function jm(r){return typeof r=="function"?Fm(r):(r instanceof IDBTransaction&&Om(r),Dm(r,Nm())?new Proxy(r,Io):r)}function Ie(r){if(r instanceof IDBRequest)return Mm(r);if(so.has(r))return so.get(r);const t=jm(r);return t!==r&&(so.set(r,t),Xo.set(t,r)),t}const io=r=>Xo.get(r);function Bm(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),u=Ie(a);return n&&a.addEventListener("upgradeneeded",l=>{n(Ie(a.result),l.oldVersion,l.newVersion,Ie(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Um=["get","getKey","getAll","getAllKeys","count"],qm=["put","add","delete","clear"],oo=new Map;function Xu(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(oo.get(t))return oo.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=qm.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Um.includes(e)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&l.done]))[0]};return oo.set(t,i),i}Lm(r=>({...r,get:(t,e,n)=>Xu(t,e)||r.get(t,e,n),has:(t,e)=>!!Xu(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if($m(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function $m(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Eo="@firebase/app",Ju="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Ul("@firebase/app"),Gm="@firebase/app-compat",Km="@firebase/analytics-compat",Hm="@firebase/analytics",Wm="@firebase/app-check-compat",Qm="@firebase/app-check",Xm="@firebase/auth",Jm="@firebase/auth-compat",Ym="@firebase/database",Zm="@firebase/data-connect",tp="@firebase/database-compat",ep="@firebase/functions",np="@firebase/functions-compat",rp="@firebase/installations",sp="@firebase/installations-compat",ip="@firebase/messaging",op="@firebase/messaging-compat",ap="@firebase/performance",up="@firebase/performance-compat",cp="@firebase/remote-config",lp="@firebase/remote-config-compat",hp="@firebase/storage",dp="@firebase/storage-compat",fp="@firebase/firestore",mp="@firebase/ai",pp="@firebase/firestore-compat",gp="firebase",_p="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="[DEFAULT]",yp={[Eo]:"fire-core",[Gm]:"fire-core-compat",[Hm]:"fire-analytics",[Km]:"fire-analytics-compat",[Qm]:"fire-app-check",[Wm]:"fire-app-check-compat",[Xm]:"fire-auth",[Jm]:"fire-auth-compat",[Ym]:"fire-rtdb",[Zm]:"fire-data-connect",[tp]:"fire-rtdb-compat",[ep]:"fire-fn",[np]:"fire-fn-compat",[rp]:"fire-iid",[sp]:"fire-iid-compat",[ip]:"fire-fcm",[op]:"fire-fcm-compat",[ap]:"fire-perf",[up]:"fire-perf-compat",[cp]:"fire-rc",[lp]:"fire-rc-compat",[hp]:"fire-gcs",[dp]:"fire-gcs-compat",[fp]:"fire-fst",[pp]:"fire-fst-compat",[mp]:"fire-vertex","fire-js":"fire-js",[gp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new Map,Ip=new Map,vo=new Map;function Yu(r,t){try{r.container.addComponent(t)}catch(e){ie.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Hs(r){const t=r.name;if(vo.has(t))return ie.debug(`There were multiple attempts to register component ${t}.`),!1;vo.set(t,r);for(const e of Ks.values())Yu(e,r);for(const e of Ip.values())Yu(e,r);return!0}function $l(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Ep(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ee=new Bl("app","Firebase",Tp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=_p;function Gl(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:To,automaticDataCollectionEnabled:!0,...t},s=n.name;if(typeof s!="string"||!s)throw Ee.create("bad-app-name",{appName:String(s)});if(e||(e=kl()),!e)throw Ee.create("no-options");const i=Ks.get(s);if(i){if(xr(e,i.options)&&xr(n,i.config))return i;throw Ee.create("duplicate-app",{appName:s})}const a=new Sm(s);for(const l of vo.values())a.addComponent(l);const u=new vp(e,n,a);return Ks.set(s,u),u}function Ap(r=To){const t=Ks.get(r);if(!t&&r===To&&kl())return Gl();if(!t)throw Ee.create("no-app",{appName:r});return t}function vn(r,t,e){let n=yp[r]??r;e&&(n+=`-${e}`);const s=n.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${n}" with version "${t}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ie.warn(a.join(" "));return}Hs(new Pr(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="firebase-heartbeat-database",Rp=1,Vr="firebase-heartbeat-store";let ao=null;function Kl(){return ao||(ao=Bm(bp,Rp,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Vr)}catch(e){console.warn(e)}}}}).catch(r=>{throw Ee.create("idb-open",{originalErrorMessage:r.message})})),ao}async function Sp(r){try{const e=(await Kl()).transaction(Vr),n=await e.objectStore(Vr).get(Hl(r));return await e.done,n}catch(t){if(t instanceof jn)ie.warn(t.message);else{const e=Ee.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ie.warn(e.message)}}}async function Zu(r,t){try{const n=(await Kl()).transaction(Vr,"readwrite");await n.objectStore(Vr).put(t,Hl(r)),await n.done}catch(e){if(e instanceof jn)ie.warn(e.message);else{const n=Ee.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ie.warn(n.message)}}}function Hl(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=1024,Pp=30;class Vp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dp(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tc();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Pp){const a=Np(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ie.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tc(),{heartbeatsToSend:n,unsentEntries:s}=Cp(this._heartbeatsCache.heartbeats),i=$s(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ie.warn(e),""}}}function tc(){return new Date().toISOString().substring(0,10)}function Cp(r,t=xp){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ec(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ec(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Dp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jl()?Em().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Sp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return Zu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return Zu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function ec(r){return $s(JSON.stringify({version:2,heartbeats:r})).length}function Np(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(r){Hs(new Pr("platform-logger",t=>new zm(t),"PRIVATE")),Hs(new Pr("heartbeat",t=>new Vp(t),"PRIVATE")),vn(Eo,Ju,r),vn(Eo,Ju,"esm2020"),vn("fire-js","")}kp("");var Mp="firebase",Op="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(Mp,Op,"app");var nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Te,Wl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,y){function I(){}I.prototype=y.prototype,v.D=y.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(T,w,E){for(var g=Array(arguments.length-2),K=2;K<arguments.length;K++)g[K-2]=arguments[K];return y.prototype[w].apply(T,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,y,I){I||(I=0);var T=Array(16);if(typeof y=="string")for(var w=0;16>w;++w)T[w]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(w=0;16>w;++w)T[w]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=v.g[0],I=v.g[1],w=v.g[2];var E=v.g[3],g=y+(E^I&(w^E))+T[0]+3614090360&4294967295;y=I+(g<<7&4294967295|g>>>25),g=E+(w^y&(I^w))+T[1]+3905402710&4294967295,E=y+(g<<12&4294967295|g>>>20),g=w+(I^E&(y^I))+T[2]+606105819&4294967295,w=E+(g<<17&4294967295|g>>>15),g=I+(y^w&(E^y))+T[3]+3250441966&4294967295,I=w+(g<<22&4294967295|g>>>10),g=y+(E^I&(w^E))+T[4]+4118548399&4294967295,y=I+(g<<7&4294967295|g>>>25),g=E+(w^y&(I^w))+T[5]+1200080426&4294967295,E=y+(g<<12&4294967295|g>>>20),g=w+(I^E&(y^I))+T[6]+2821735955&4294967295,w=E+(g<<17&4294967295|g>>>15),g=I+(y^w&(E^y))+T[7]+4249261313&4294967295,I=w+(g<<22&4294967295|g>>>10),g=y+(E^I&(w^E))+T[8]+1770035416&4294967295,y=I+(g<<7&4294967295|g>>>25),g=E+(w^y&(I^w))+T[9]+2336552879&4294967295,E=y+(g<<12&4294967295|g>>>20),g=w+(I^E&(y^I))+T[10]+4294925233&4294967295,w=E+(g<<17&4294967295|g>>>15),g=I+(y^w&(E^y))+T[11]+2304563134&4294967295,I=w+(g<<22&4294967295|g>>>10),g=y+(E^I&(w^E))+T[12]+1804603682&4294967295,y=I+(g<<7&4294967295|g>>>25),g=E+(w^y&(I^w))+T[13]+4254626195&4294967295,E=y+(g<<12&4294967295|g>>>20),g=w+(I^E&(y^I))+T[14]+2792965006&4294967295,w=E+(g<<17&4294967295|g>>>15),g=I+(y^w&(E^y))+T[15]+1236535329&4294967295,I=w+(g<<22&4294967295|g>>>10),g=y+(w^E&(I^w))+T[1]+4129170786&4294967295,y=I+(g<<5&4294967295|g>>>27),g=E+(I^w&(y^I))+T[6]+3225465664&4294967295,E=y+(g<<9&4294967295|g>>>23),g=w+(y^I&(E^y))+T[11]+643717713&4294967295,w=E+(g<<14&4294967295|g>>>18),g=I+(E^y&(w^E))+T[0]+3921069994&4294967295,I=w+(g<<20&4294967295|g>>>12),g=y+(w^E&(I^w))+T[5]+3593408605&4294967295,y=I+(g<<5&4294967295|g>>>27),g=E+(I^w&(y^I))+T[10]+38016083&4294967295,E=y+(g<<9&4294967295|g>>>23),g=w+(y^I&(E^y))+T[15]+3634488961&4294967295,w=E+(g<<14&4294967295|g>>>18),g=I+(E^y&(w^E))+T[4]+3889429448&4294967295,I=w+(g<<20&4294967295|g>>>12),g=y+(w^E&(I^w))+T[9]+568446438&4294967295,y=I+(g<<5&4294967295|g>>>27),g=E+(I^w&(y^I))+T[14]+3275163606&4294967295,E=y+(g<<9&4294967295|g>>>23),g=w+(y^I&(E^y))+T[3]+4107603335&4294967295,w=E+(g<<14&4294967295|g>>>18),g=I+(E^y&(w^E))+T[8]+1163531501&4294967295,I=w+(g<<20&4294967295|g>>>12),g=y+(w^E&(I^w))+T[13]+2850285829&4294967295,y=I+(g<<5&4294967295|g>>>27),g=E+(I^w&(y^I))+T[2]+4243563512&4294967295,E=y+(g<<9&4294967295|g>>>23),g=w+(y^I&(E^y))+T[7]+1735328473&4294967295,w=E+(g<<14&4294967295|g>>>18),g=I+(E^y&(w^E))+T[12]+2368359562&4294967295,I=w+(g<<20&4294967295|g>>>12),g=y+(I^w^E)+T[5]+4294588738&4294967295,y=I+(g<<4&4294967295|g>>>28),g=E+(y^I^w)+T[8]+2272392833&4294967295,E=y+(g<<11&4294967295|g>>>21),g=w+(E^y^I)+T[11]+1839030562&4294967295,w=E+(g<<16&4294967295|g>>>16),g=I+(w^E^y)+T[14]+4259657740&4294967295,I=w+(g<<23&4294967295|g>>>9),g=y+(I^w^E)+T[1]+2763975236&4294967295,y=I+(g<<4&4294967295|g>>>28),g=E+(y^I^w)+T[4]+1272893353&4294967295,E=y+(g<<11&4294967295|g>>>21),g=w+(E^y^I)+T[7]+4139469664&4294967295,w=E+(g<<16&4294967295|g>>>16),g=I+(w^E^y)+T[10]+3200236656&4294967295,I=w+(g<<23&4294967295|g>>>9),g=y+(I^w^E)+T[13]+681279174&4294967295,y=I+(g<<4&4294967295|g>>>28),g=E+(y^I^w)+T[0]+3936430074&4294967295,E=y+(g<<11&4294967295|g>>>21),g=w+(E^y^I)+T[3]+3572445317&4294967295,w=E+(g<<16&4294967295|g>>>16),g=I+(w^E^y)+T[6]+76029189&4294967295,I=w+(g<<23&4294967295|g>>>9),g=y+(I^w^E)+T[9]+3654602809&4294967295,y=I+(g<<4&4294967295|g>>>28),g=E+(y^I^w)+T[12]+3873151461&4294967295,E=y+(g<<11&4294967295|g>>>21),g=w+(E^y^I)+T[15]+530742520&4294967295,w=E+(g<<16&4294967295|g>>>16),g=I+(w^E^y)+T[2]+3299628645&4294967295,I=w+(g<<23&4294967295|g>>>9),g=y+(w^(I|~E))+T[0]+4096336452&4294967295,y=I+(g<<6&4294967295|g>>>26),g=E+(I^(y|~w))+T[7]+1126891415&4294967295,E=y+(g<<10&4294967295|g>>>22),g=w+(y^(E|~I))+T[14]+2878612391&4294967295,w=E+(g<<15&4294967295|g>>>17),g=I+(E^(w|~y))+T[5]+4237533241&4294967295,I=w+(g<<21&4294967295|g>>>11),g=y+(w^(I|~E))+T[12]+1700485571&4294967295,y=I+(g<<6&4294967295|g>>>26),g=E+(I^(y|~w))+T[3]+2399980690&4294967295,E=y+(g<<10&4294967295|g>>>22),g=w+(y^(E|~I))+T[10]+4293915773&4294967295,w=E+(g<<15&4294967295|g>>>17),g=I+(E^(w|~y))+T[1]+2240044497&4294967295,I=w+(g<<21&4294967295|g>>>11),g=y+(w^(I|~E))+T[8]+1873313359&4294967295,y=I+(g<<6&4294967295|g>>>26),g=E+(I^(y|~w))+T[15]+4264355552&4294967295,E=y+(g<<10&4294967295|g>>>22),g=w+(y^(E|~I))+T[6]+2734768916&4294967295,w=E+(g<<15&4294967295|g>>>17),g=I+(E^(w|~y))+T[13]+1309151649&4294967295,I=w+(g<<21&4294967295|g>>>11),g=y+(w^(I|~E))+T[4]+4149444226&4294967295,y=I+(g<<6&4294967295|g>>>26),g=E+(I^(y|~w))+T[11]+3174756917&4294967295,E=y+(g<<10&4294967295|g>>>22),g=w+(y^(E|~I))+T[2]+718787259&4294967295,w=E+(g<<15&4294967295|g>>>17),g=I+(E^(w|~y))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(w+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+w&4294967295,v.g[3]=v.g[3]+E&4294967295}n.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var I=y-this.blockSize,T=this.B,w=this.h,E=0;E<y;){if(w==0)for(;E<=I;)s(this,v,E),E+=this.blockSize;if(typeof v=="string"){for(;E<y;)if(T[w++]=v.charCodeAt(E++),w==this.blockSize){s(this,T),w=0;break}}else for(;E<y;)if(T[w++]=v[E++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=y},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var I=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=I&255,I/=256;for(this.u(v),v=Array(16),y=I=0;4>y;++y)for(var T=0;32>T;T+=8)v[I++]=this.g[y]>>>T&255;return v};function i(v,y){var I=u;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=y(v)}function a(v,y){this.h=y;for(var I=[],T=!0,w=v.length-1;0<=w;w--){var E=v[w]|0;T&&E==y||(I[w]=E,T=!1)}this.g=I}var u={};function l(v){return-128<=v&&128>v?i(v,function(y){return new a([y|0],0>y?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return V(d(-v));for(var y=[],I=1,T=0;v>=I;T++)y[T]=v/I|0,I*=4294967296;return new a(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return V(f(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(y,8)),T=p,w=0;w<v.length;w+=8){var E=Math.min(8,v.length-w),g=parseInt(v.substring(w,w+E),y);8>E?(E=d(Math.pow(y,E)),T=T.j(E).add(d(g))):(T=T.j(I),T=T.add(d(g)))}return T}var p=l(0),_=l(1),S=l(16777216);r=a.prototype,r.m=function(){if(D(this))return-V(this).m();for(var v=0,y=1,I=0;I<this.g.length;I++){var T=this.i(I);v+=(0<=T?T:4294967296+T)*y,y*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(D(this))return"-"+V(this).toString(v);for(var y=d(Math.pow(v,6)),I=this,T="";;){var w=z(I,y).g;I=B(I,w.j(y));var E=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=w,C(I))return E+T;for(;6>E.length;)E="0"+E;T=E+T}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function D(v){return v.h==-1}r.l=function(v){return v=B(this,v),D(v)?-1:C(v)?0:1};function V(v){for(var y=v.g.length,I=[],T=0;T<y;T++)I[T]=~v.g[T];return new a(I,~v.h).add(_)}r.abs=function(){return D(this)?V(this):this},r.add=function(v){for(var y=Math.max(this.g.length,v.g.length),I=[],T=0,w=0;w<=y;w++){var E=T+(this.i(w)&65535)+(v.i(w)&65535),g=(E>>>16)+(this.i(w)>>>16)+(v.i(w)>>>16);T=g>>>16,E&=65535,g&=65535,I[w]=g<<16|E}return new a(I,I[I.length-1]&-2147483648?-1:0)};function B(v,y){return v.add(V(y))}r.j=function(v){if(C(this)||C(v))return p;if(D(this))return D(v)?V(this).j(V(v)):V(V(this).j(v));if(D(v))return V(this.j(V(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var y=this.g.length+v.g.length,I=[],T=0;T<2*y;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<v.g.length;w++){var E=this.i(T)>>>16,g=this.i(T)&65535,K=v.i(w)>>>16,yt=v.i(w)&65535;I[2*T+2*w]+=g*yt,L(I,2*T+2*w),I[2*T+2*w+1]+=E*yt,L(I,2*T+2*w+1),I[2*T+2*w+1]+=g*K,L(I,2*T+2*w+1),I[2*T+2*w+2]+=E*K,L(I,2*T+2*w+2)}for(T=0;T<y;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=y;T<2*y;T++)I[T]=0;return new a(I,0)};function L(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function F(v,y){this.g=v,this.h=y}function z(v,y){if(C(y))throw Error("division by zero");if(C(v))return new F(p,p);if(D(v))return y=z(V(v),y),new F(V(y.g),V(y.h));if(D(y))return y=z(v,V(y)),new F(V(y.g),y.h);if(30<v.g.length){if(D(v)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var I=_,T=y;0>=T.l(v);)I=Z(I),T=Z(T);var w=W(I,1),E=W(T,1);for(T=W(T,2),I=W(I,2);!C(T);){var g=E.add(T);0>=g.l(v)&&(w=w.add(I),E=g),T=W(T,1),I=W(I,1)}return y=B(v,w.j(y)),new F(w,y)}for(w=p;0<=v.l(y);){for(I=Math.max(1,Math.floor(v.m()/y.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),E=d(I),g=E.j(y);D(g)||0<g.l(v);)I-=T,E=d(I),g=E.j(y);C(E)&&(E=_),w=w.add(E),v=B(v,g)}return new F(w,v)}r.A=function(v){return z(this,v).h},r.and=function(v){for(var y=Math.max(this.g.length,v.g.length),I=[],T=0;T<y;T++)I[T]=this.i(T)&v.i(T);return new a(I,this.h&v.h)},r.or=function(v){for(var y=Math.max(this.g.length,v.g.length),I=[],T=0;T<y;T++)I[T]=this.i(T)|v.i(T);return new a(I,this.h|v.h)},r.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),I=[],T=0;T<y;T++)I[T]=this.i(T)^v.i(T);return new a(I,this.h^v.h)};function Z(v){for(var y=v.g.length+1,I=[],T=0;T<y;T++)I[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(I,v.h)}function W(v,y){var I=y>>5;y%=32;for(var T=v.g.length-I,w=[],E=0;E<T;E++)w[E]=0<y?v.i(E+I)>>>y|v.i(E+I+1)<<32-y:v.i(E+I);return new a(w,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Wl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Te=a}).apply(typeof nc<"u"?nc:typeof self<"u"?self:typeof window<"u"?window:{});var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ql,mr,Xl,Ds,wo,Jl,Yl,Zl;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof bs=="object"&&bs];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var R=o[m];if(!(R in h))break t;h=h[R]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,m=!1,R={next:function(){if(!m&&h<o.length){var x=h++;return{value:c(x,o[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function p(o,c,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function _(o,c,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function S(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,R,x){for(var M=Array(arguments.length-2),it=2;it<arguments.length;it++)M[it-2]=arguments[it];return c.prototype[R].apply(m,M)}}function D(o){const c=o.length;if(0<c){const h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function V(o,c){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(l(m)){const R=o.length||0,x=m.length||0;o.length=R+x;for(let M=0;M<x;M++)o[R+M]=m[M]}else o.push(m)}}class B{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var Z=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function W(o,c,h){for(const m in o)c.call(h,o[m],m,o)}function v(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function y(o){const c={};for(const h in o)c[h]=o[h];return c}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(h in m)o[h]=m[h];for(let x=0;x<I.length;x++)h=I[x],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function w(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function E(o){u.setTimeout(()=>{throw o},0)}function g(){var o=Ni;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class K{constructor(){this.h=this.g=null}add(c,h){const m=yt.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var yt=new B(()=>new $n,o=>o.reset());class $n{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Gn,Kn=!1,Ni=new K,Ua=()=>{const o=u.Promise.resolve(void 0);Gn=()=>{o.then(pf)}};var pf=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(h){E(h)}var c=yt;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Kn=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function At(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};var gf=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function Hn(o,c){if(At.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(Z){t:{try{z(c.nodeName);var R=!0;break t}catch{}R=!1}R||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_f[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Hn.aa.h.call(this)}}C(Hn,At);var _f={2:"touch",3:"pen",4:"mouse"};Hn.prototype.h=function(){Hn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var is="closure_listenable_"+(1e6*Math.random()|0),yf=0;function If(o,c,h,m,R){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=R,this.key=++yf,this.da=this.fa=!1}function os(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function as(o){this.src=o,this.g={},this.h=0}as.prototype.add=function(o,c,h,m,R){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var M=Mi(o,c,m,R);return-1<M?(c=o[M],h||(c.fa=!1)):(c=new If(c,this.src,x,!!m,R),c.fa=h,o.push(c)),c};function ki(o,c){var h=c.type;if(h in o.g){var m=o.g[h],R=Array.prototype.indexOf.call(m,c,void 0),x;(x=0<=R)&&Array.prototype.splice.call(m,R,1),x&&(os(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Mi(o,c,h,m){for(var R=0;R<o.length;++R){var x=o[R];if(!x.da&&x.listener==c&&x.capture==!!h&&x.ha==m)return R}return-1}var Oi="closure_lm_"+(1e6*Math.random()|0),Li={};function qa(o,c,h,m,R){if(Array.isArray(c)){for(var x=0;x<c.length;x++)qa(o,c[x],h,m,R);return null}return h=Ga(h),o&&o[is]?o.K(c,h,d(m)?!!m.capture:!1,R):Ef(o,c,h,!1,m,R)}function Ef(o,c,h,m,R,x){if(!c)throw Error("Invalid event type");var M=d(R)?!!R.capture:!!R,it=ji(o);if(it||(o[Oi]=it=new as(o)),h=it.add(c,h,m,M,x),h.proxy)return h;if(m=Tf(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)gf||(R=M),R===void 0&&(R=!1),o.addEventListener(c.toString(),m,R);else if(o.attachEvent)o.attachEvent($a(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Tf(){function o(h){return c.call(o.src,o.listener,h)}const c=vf;return o}function za(o,c,h,m,R){if(Array.isArray(c))for(var x=0;x<c.length;x++)za(o,c[x],h,m,R);else m=d(m)?!!m.capture:!!m,h=Ga(h),o&&o[is]?(o=o.i,c=String(c).toString(),c in o.g&&(x=o.g[c],h=Mi(x,h,m,R),-1<h&&(os(x[h]),Array.prototype.splice.call(x,h,1),x.length==0&&(delete o.g[c],o.h--)))):o&&(o=ji(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Mi(c,h,m,R)),(h=-1<o?c[o]:null)&&Fi(h))}function Fi(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[is])ki(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent($a(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=ji(c))?(ki(h,o),h.h==0&&(h.src=null,c[Oi]=null)):os(o)}}}function $a(o){return o in Li?Li[o]:Li[o]="on"+o}function vf(o,c){if(o.da)o=!0;else{c=new Hn(c,this);var h=o.listener,m=o.ha||o.src;o.fa&&Fi(o),o=h.call(m,c)}return o}function ji(o){return o=o[Oi],o instanceof as?o:null}var Bi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ga(o){return typeof o=="function"?o:(o[Bi]||(o[Bi]=function(c){return o.handleEvent(c)}),o[Bi])}function bt(){le.call(this),this.i=new as(this),this.M=this,this.F=null}C(bt,le),bt.prototype[is]=!0,bt.prototype.removeEventListener=function(o,c,h,m){za(this,o,c,h,m)};function Dt(o,c){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new At(c,o);else if(c instanceof At)c.target=c.target||o;else{var R=c;c=new At(m,o),T(c,R)}if(R=!0,h)for(var x=h.length-1;0<=x;x--){var M=c.g=h[x];R=us(M,m,!0,c)&&R}if(M=c.g=o,R=us(M,m,!0,c)&&R,R=us(M,m,!1,c)&&R,h)for(x=0;x<h.length;x++)M=c.g=h[x],R=us(M,m,!1,c)&&R}bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],m=0;m<h.length;m++)os(h[m]);delete o.g[c],o.h--}}this.F=null},bt.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},bt.prototype.L=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function us(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,x=0;x<c.length;++x){var M=c[x];if(M&&!M.da&&M.capture==h){var it=M.listener,Tt=M.ha||M.src;M.fa&&ki(o.i,M),R=it.call(Tt,m)!==!1&&R}}return R&&!m.defaultPrevented}function Ka(o,c,h){if(typeof o=="function")h&&(o=_(o,h));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Ha(o){o.g=Ka(()=>{o.g=null,o.i&&(o.i=!1,Ha(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class wf extends le{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ha(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wn(o){le.call(this),this.h=o,this.g={}}C(Wn,le);var Wa=[];function Qa(o){W(o.g,function(c,h){this.g.hasOwnProperty(h)&&Fi(c)},o),o.g={}}Wn.prototype.N=function(){Wn.aa.N.call(this),Qa(this)},Wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ui=u.JSON.stringify,Af=u.JSON.parse,bf=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function qi(){}qi.prototype.h=null;function Xa(o){return o.h||(o.h=o.i())}function Ja(){}var Qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zi(){At.call(this,"d")}C(zi,At);function $i(){At.call(this,"c")}C($i,At);var De={},Ya=null;function cs(){return Ya=Ya||new bt}De.La="serverreachability";function Za(o){At.call(this,De.La,o)}C(Za,At);function Xn(o){const c=cs();Dt(c,new Za(c))}De.STAT_EVENT="statevent";function tu(o,c){At.call(this,De.STAT_EVENT,o),this.stat=c}C(tu,At);function Nt(o){const c=cs();Dt(c,new tu(c,o))}De.Ma="timingevent";function eu(o,c){At.call(this,De.Ma,o),this.size=c}C(eu,At);function Jn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Yn(){this.g=!0}Yn.prototype.xa=function(){this.g=!1};function Rf(o,c,h,m,R,x){o.info(function(){if(o.g)if(x)for(var M="",it=x.split("&"),Tt=0;Tt<it.length;Tt++){var tt=it[Tt].split("=");if(1<tt.length){var Rt=tt[0];tt=tt[1];var St=Rt.split("_");M=2<=St.length&&St[1]=="type"?M+(Rt+"="+tt+"&"):M+(Rt+"=redacted&")}}else M=null;else M=x;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+c+`
`+h+`
`+M})}function Sf(o,c,h,m,R,x,M){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+c+`
`+h+`
`+x+" "+M})}function an(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Pf(o,h)+(m?" "+m:"")})}function xf(o,c){o.info(function(){return"TIMEOUT: "+c})}Yn.prototype.info=function(){};function Pf(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var x=R[0];if(x!="noop"&&x!="stop"&&x!="close")for(var M=1;M<R.length;M++)R[M]=""}}}}return Ui(h)}catch{return c}}var ls={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gi;function hs(){}C(hs,qi),hs.prototype.g=function(){return new XMLHttpRequest},hs.prototype.i=function(){return{}},Gi=new hs;function he(o,c,h,m){this.j=o,this.i=c,this.l=h,this.R=m||1,this.U=new Wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ru}function ru(){this.i=null,this.g="",this.h=!1}var su={},Ki={};function Hi(o,c,h){o.L=1,o.v=ps(ne(c)),o.m=h,o.P=!0,iu(o,null)}function iu(o,c){o.F=Date.now(),ds(o),o.A=ne(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Iu(h.i,"t",m),o.C=0,h=o.j.J,o.h=new ru,o.g=Lu(o.j,h?c:null,!o.m),0<o.O&&(o.M=new wf(_(o.Y,o,o.g),o.O)),c=o.U,h=o.g,m=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Wa[0]=R.toString()),R=Wa);for(var x=0;x<R.length;x++){var M=qa(h,R[x],m||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Xn(),Rf(o.i,o.u,o.A,o.l,o.R,o.m)}he.prototype.ca=function(o){o=o.target;const c=this.M;c&&re(o)==3?c.j():this.Y(o)},he.prototype.Y=function(o){try{if(o==this.g)t:{const St=re(this.g);var c=this.g.Ba();const ln=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||Ru(this.g)))){this.J||St!=4||c==7||(c==8||0>=ln?Xn(3):Xn(2)),Wi(this);var h=this.g.Z();this.X=h;e:if(ou(this)){var m=Ru(this.g);o="";var R=m.length,x=re(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ne(this),Zn(this);var M="";break e}this.h.i=new u.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(x&&c==R-1)});m.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,Sf(this.i,this.u,this.A,this.l,this.R,St,h),this.o){if(this.T&&!this.K){e:{if(this.g){var it,Tt=this.g;if((it=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(it)){var tt=it;break e}}tt=null}if(h=tt)an(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qi(this,h);else{this.o=!1,this.s=3,Nt(12),Ne(this),Zn(this);break t}}if(this.P){h=!0;let Kt;for(;!this.J&&this.C<M.length;)if(Kt=Vf(this,M),Kt==Ki){St==4&&(this.s=4,Nt(14),h=!1),an(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==su){this.s=4,Nt(15),an(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else an(this.i,this.l,Kt,null),Qi(this,Kt);if(ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||M.length!=0||this.h.h||(this.s=1,Nt(16),h=!1),this.o=this.o&&h,!h)an(this.i,this.l,M,"[Invalid Chunked Response]"),Ne(this),Zn(this);else if(0<M.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),eo(Rt),Rt.M=!0,Nt(11))}}else an(this.i,this.l,M,null),Qi(this,M);St==4&&Ne(this),this.o&&!this.J&&(St==4?Nu(this.j,this):(this.o=!1,ds(this)))}else Hf(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),Ne(this),Zn(this)}}}catch{}finally{}};function ou(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Vf(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?Ki:(h=Number(c.substring(h,m)),isNaN(h)?su:(m+=1,m+h>c.length?Ki:(c=c.slice(m,m+h),o.C=m+h,c)))}he.prototype.cancel=function(){this.J=!0,Ne(this)};function ds(o){o.S=Date.now()+o.I,au(o,o.I)}function au(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Jn(_(o.ba,o),c)}function Wi(o){o.B&&(u.clearTimeout(o.B),o.B=null)}he.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(xf(this.i,this.A),this.L!=2&&(Xn(),Nt(17)),Ne(this),this.s=2,Zn(this)):au(this,this.S-o)};function Zn(o){o.j.G==0||o.J||Nu(o.j,o)}function Ne(o){Wi(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Qa(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Qi(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Xi(h.h,o))){if(!o.K&&Xi(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ts(h),Is(h);else break t;to(h),Nt(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=Jn(_(h.Za,h),6e3));if(1>=lu(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Me(h,11)}else if((o.K||h.g==o)&&Ts(h),!L(c))for(R=h.Da.g.parse(c),c=0;c<R.length;c++){let tt=R[c];if(h.T=tt[0],tt=tt[1],h.G==2)if(tt[0]=="c"){h.K=tt[1],h.ia=tt[2];const Rt=tt[3];Rt!=null&&(h.la=Rt,h.j.info("VER="+h.la));const St=tt[4];St!=null&&(h.Aa=St,h.j.info("SVER="+h.Aa));const ln=tt[5];ln!=null&&typeof ln=="number"&&0<ln&&(m=1.5*ln,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Kt=o.g;if(Kt){const ws=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ws){var x=m.h;x.g||ws.indexOf("spdy")==-1&&ws.indexOf("quic")==-1&&ws.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Ji(x,x.h),x.h=null))}if(m.D){const no=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;no&&(m.ya=no,ot(m.I,m.D,no))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var M=o;if(m.qa=Ou(m,m.J?m.ia:null,m.W),M.K){hu(m.h,M);var it=M,Tt=m.L;Tt&&(it.I=Tt),it.B&&(Wi(it),ds(it)),m.g=M}else Cu(m);0<h.i.length&&Es(h)}else tt[0]!="stop"&&tt[0]!="close"||Me(h,7);else h.G==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?Me(h,7):Zi(h):tt[0]!="noop"&&h.l&&h.l.ta(tt),h.v=0)}}Xn(4)}catch{}}var Cf=class{constructor(o,c){this.g=o,this.map=c}};function uu(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function lu(o){return o.h?1:o.g?o.g.size:0}function Xi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ji(o,c){o.g?o.g.add(c):o.h=c}function hu(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}uu.prototype.cancel=function(){if(this.i=du(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function du(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return D(o.i)}function Df(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,m=0;m<h;m++)c.push(o[m]);return c}c=[],h=0;for(m in o)c[h++]=o[m];return c}function Nf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const m in o)c[h++]=m;return c}}}function fu(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Nf(o),m=Df(o),R=m.length,x=0;x<R;x++)c.call(void 0,m[x],h&&h[x],o)}var mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kf(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),R=null;if(0<=m){var x=o[h].substring(0,m);R=o[h].substring(m+1)}else x=o[h];c(x,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ke(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ke){this.h=o.h,fs(this,o.j),this.o=o.o,this.g=o.g,ms(this,o.s),this.l=o.l;var c=o.i,h=new nr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),pu(this,h),this.m=o.m}else o&&(c=String(o).match(mu))?(this.h=!1,fs(this,c[1]||"",!0),this.o=tr(c[2]||""),this.g=tr(c[3]||"",!0),ms(this,c[4]),this.l=tr(c[5]||"",!0),pu(this,c[6]||"",!0),this.m=tr(c[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}ke.prototype.toString=function(){var o=[],c=this.j;c&&o.push(er(c,gu,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(er(c,gu,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(er(h,h.charAt(0)=="/"?Lf:Of,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",er(h,jf)),o.join("")};function ne(o){return new ke(o)}function fs(o,c,h){o.j=h?tr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ms(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function pu(o,c,h){c instanceof nr?(o.i=c,Bf(o.i,o.h)):(h||(c=er(c,Ff)),o.i=new nr(c,o.h))}function ot(o,c,h){o.i.set(c,h)}function ps(o){return ot(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function tr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function er(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Mf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Mf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var gu=/[#\/\?@]/g,Of=/[#\?:]/g,Lf=/[#\?]/g,Ff=/[#\?@]/g,jf=/#/g;function nr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function de(o){o.g||(o.g=new Map,o.h=0,o.i&&kf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=nr.prototype,r.add=function(o,c){de(this),this.i=null,o=un(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function _u(o,c){de(o),c=un(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function yu(o,c){return de(o),c=un(o,c),o.g.has(c)}r.forEach=function(o,c){de(this),this.g.forEach(function(h,m){h.forEach(function(R){o.call(c,R,m,this)},this)},this)},r.na=function(){de(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let m=0;m<c.length;m++){const R=o[m];for(let x=0;x<R.length;x++)h.push(c[m])}return h},r.V=function(o){de(this);let c=[];if(typeof o=="string")yu(this,o)&&(c=c.concat(this.g.get(un(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return de(this),this.i=null,o=un(this,o),yu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Iu(o,c,h){_u(o,c),0<h.length&&(o.i=null,o.g.set(un(o,c),D(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var m=c[h];const x=encodeURIComponent(String(m)),M=this.V(m);for(m=0;m<M.length;m++){var R=x;M[m]!==""&&(R+="="+encodeURIComponent(String(M[m]))),o.push(R)}}return this.i=o.join("&")};function un(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Bf(o,c){c&&!o.j&&(de(o),o.i=null,o.g.forEach(function(h,m){var R=m.toLowerCase();m!=R&&(_u(this,m),Iu(this,R,h))},o)),o.j=c}function Uf(o,c){const h=new Yn;if(u.Image){const m=new Image;m.onload=S(fe,h,"TestLoadImage: loaded",!0,c,m),m.onerror=S(fe,h,"TestLoadImage: error",!1,c,m),m.onabort=S(fe,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=S(fe,h,"TestLoadImage: timeout",!1,c,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function qf(o,c){const h=new Yn,m=new AbortController,R=setTimeout(()=>{m.abort(),fe(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(x=>{clearTimeout(R),x.ok?fe(h,"TestPingServer: ok",!0,c):fe(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),fe(h,"TestPingServer: error",!1,c)})}function fe(o,c,h,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(h)}catch{}}function zf(){this.g=new bf}function $f(o,c,h){const m=h||"";try{fu(o,function(R,x){let M=R;d(R)&&(M=Ui(R)),c.push(m+x+"="+encodeURIComponent(M))})}catch(R){throw c.push(m+"type="+encodeURIComponent("_badmap")),R}}function gs(o){this.l=o.Ub||null,this.j=o.eb||!1}C(gs,qi),gs.prototype.g=function(){return new _s(this.l,this.j)},gs.prototype.i=function(o){return function(){return o}}({});function _s(o,c){bt.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(_s,bt),r=_s.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,sr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Eu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Eu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?rr(this):sr(this),this.readyState==3&&Eu(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,rr(this))},r.Qa=function(o){this.g&&(this.response=o,rr(this))},r.ga=function(){this.g&&rr(this)};function rr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,sr(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function sr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Tu(o){let c="";return W(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function Yi(o,c,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=Tu(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ot(o,c,h))}function lt(o){bt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(lt,bt);var Gf=/^https?$/i,Kf=["POST","PUT"];r=lt.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gi.g(),this.v=this.o?Xa(this.o):Xa(Gi),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(x){vu(this,x);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)h.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())h.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(x=>x.toLowerCase()=="content-type"),R=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Kf,c,void 0))||m||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,M]of h)this.g.setRequestHeader(x,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bu(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){vu(this,x)}};function vu(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,wu(o),ys(o)}function wu(o){o.A||(o.A=!0,Dt(o,"complete"),Dt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Dt(this,"complete"),Dt(this,"abort"),ys(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ys(this,!0)),lt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Au(this):this.bb())},r.bb=function(){Au(this)};function Au(o){if(o.h&&typeof a<"u"&&(!o.v[1]||re(o)!=4||o.Z()!=2)){if(o.u&&re(o)==4)Ka(o.Ea,0,o);else if(Dt(o,"readystatechange"),re(o)==4){o.h=!1;try{const M=o.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var m;if(m=M===0){var R=String(o.D).match(mu)[1]||null;!R&&u.self&&u.self.location&&(R=u.self.location.protocol.slice(0,-1)),m=!Gf.test(R?R.toLowerCase():"")}h=m}if(h)Dt(o,"complete"),Dt(o,"success");else{o.m=6;try{var x=2<re(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",wu(o)}}finally{ys(o)}}}}function ys(o,c){if(o.g){bu(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Dt(o,"ready");try{h.onreadystatechange=m}catch{}}}function bu(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function re(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<re(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Af(c)}};function Ru(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Hf(o){const c={};o=(o.g&&2<=re(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(L(o[m]))continue;var h=w(o[m]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const x=c[R]||[];c[R]=x,x.push(h)}v(c,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Su(o){this.Aa=0,this.i=[],this.j=new Yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ir("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ir("baseRetryDelayMs",5e3,o),this.cb=ir("retryDelaySeedMs",1e4,o),this.Wa=ir("forwardChannelMaxRetries",2,o),this.wa=ir("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new uu(o&&o.concurrentRequestLimit),this.Da=new zf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Su.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,m){Nt(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Ou(this,null,this.W),Es(this)};function Zi(o){if(xu(o),o.G==3){var c=o.U++,h=ne(o.I);if(ot(h,"SID",o.K),ot(h,"RID",c),ot(h,"TYPE","terminate"),or(o,h),c=new he(o,o.j,c),c.L=2,c.v=ps(ne(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Lu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ds(c)}Mu(o)}function Is(o){o.g&&(eo(o),o.g.cancel(),o.g=null)}function xu(o){Is(o),o.u&&(u.clearTimeout(o.u),o.u=null),Ts(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Es(o){if(!cu(o.h)&&!o.s){o.s=!0;var c=o.Ga;Gn||Ua(),Kn||(Gn(),Kn=!0),Ni.add(c,o),o.B=0}}function Wf(o,c){return lu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Jn(_(o.Ga,o,c),ku(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new he(this,this.j,o);let x=this.o;if(this.S&&(x?(x=y(x),T(x,this.S)):x=this.S),this.m!==null||this.O||(R.H=x,x=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Vu(this,R,c),h=ne(this.I),ot(h,"RID",o),ot(h,"CVER",22),this.D&&ot(h,"X-HTTP-Session-Id",this.D),or(this,h),x&&(this.O?c="headers="+encodeURIComponent(String(Tu(x)))+"&"+c:this.m&&Yi(h,this.m,x)),Ji(this.h,R),this.Ua&&ot(h,"TYPE","init"),this.P?(ot(h,"$req",c),ot(h,"SID","null"),R.T=!0,Hi(R,h,null)):Hi(R,h,c),this.G=2}}else this.G==3&&(o?Pu(this,o):this.i.length==0||cu(this.h)||Pu(this))};function Pu(o,c){var h;c?h=c.l:h=o.U++;const m=ne(o.I);ot(m,"SID",o.K),ot(m,"RID",h),ot(m,"AID",o.T),or(o,m),o.m&&o.o&&Yi(m,o.m,o.o),h=new he(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Vu(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ji(o.h,h),Hi(h,m,c)}function or(o,c){o.H&&W(o.H,function(h,m){ot(c,m,h)}),o.l&&fu({},function(h,m){ot(c,m,h)})}function Vu(o,c,h){h=Math.min(o.i.length,h);var m=o.l?_(o.l.Na,o.l,o):null;t:{var R=o.i;let x=-1;for(;;){const M=["count="+h];x==-1?0<h?(x=R[0].g,M.push("ofs="+x)):x=0:M.push("ofs="+x);let it=!0;for(let Tt=0;Tt<h;Tt++){let tt=R[Tt].g;const Rt=R[Tt].map;if(tt-=x,0>tt)x=Math.max(0,R[Tt].g-100),it=!1;else try{$f(Rt,M,"req"+tt+"_")}catch{m&&m(Rt)}}if(it){m=M.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,m}function Cu(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Gn||Ua(),Kn||(Gn(),Kn=!0),Ni.add(c,o),o.v=0}}function to(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Jn(_(o.Fa,o),ku(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Du(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Jn(_(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),Is(this),Du(this))};function eo(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Du(o){o.g=new he(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ne(o.qa);ot(c,"RID","rpc"),ot(c,"SID",o.K),ot(c,"AID",o.T),ot(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ot(c,"TO",o.ja),ot(c,"TYPE","xmlhttp"),or(o,c),o.m&&o.o&&Yi(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ps(ne(c)),h.m=null,h.P=!0,iu(h,o)}r.Za=function(){this.C!=null&&(this.C=null,Is(this),to(this),Nt(19))};function Ts(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Nu(o,c){var h=null;if(o.g==c){Ts(o),eo(o),o.g=null;var m=2}else if(Xi(o.h,c))h=c.D,hu(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;m=cs(),Dt(m,new eu(m,h)),Es(o)}else Cu(o);else if(R=c.s,R==3||R==0&&0<c.X||!(m==1&&Wf(o,c)||m==2&&to(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),R){case 1:Me(o,5);break;case 4:Me(o,10);break;case 3:Me(o,6);break;default:Me(o,2)}}}function ku(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Me(o,c){if(o.j.info("Error code "+c),c==2){var h=_(o.fb,o),m=o.Xa;const R=!m;m=new ke(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||fs(m,"https"),ps(m),R?Uf(m.toString(),h):qf(m.toString(),h)}else Nt(2);o.G=0,o.l&&o.l.sa(c),Mu(o),xu(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function Mu(o){if(o.G=0,o.ka=[],o.l){const c=du(o.h);(c.length!=0||o.i.length!=0)&&(V(o.ka,c),V(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Ou(o,c,h){var m=h instanceof ke?ne(h):new ke(h);if(m.g!="")c&&(m.g=c+"."+m.g),ms(m,m.s);else{var R=u.location;m=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var x=new ke(null);m&&fs(x,m),c&&(x.g=c),R&&ms(x,R),h&&(x.l=h),m=x}return h=o.D,c=o.ya,h&&c&&ot(m,h,c),ot(m,"VER",o.la),or(o,m),m}function Lu(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new lt(new gs({eb:h})):new lt(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fu(){}r=Fu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function vs(){}vs.prototype.g=function(o,c){return new Lt(o,c)};function Lt(o,c){bt.call(this),this.g=new Su(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!L(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!L(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new cn(this)}C(Lt,bt),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Zi(this.g)},Lt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ui(o),o=h);c.i.push(new Cf(c.Ya++,o)),c.G==3&&Es(c)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Zi(this.g),delete this.g,Lt.aa.N.call(this)};function ju(o){zi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(ju,zi);function Bu(){$i.call(this),this.status=1}C(Bu,$i);function cn(o){this.g=o}C(cn,Fu),cn.prototype.ua=function(){Dt(this.g,"a")},cn.prototype.ta=function(o){Dt(this.g,new ju(o))},cn.prototype.sa=function(o){Dt(this.g,new Bu)},cn.prototype.ra=function(){Dt(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,Zl=function(){return new vs},Yl=function(){return cs()},Jl=De,wo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ls.NO_ERROR=0,ls.TIMEOUT=8,ls.HTTP_ERROR=6,Ds=ls,nu.COMPLETE="complete",Xl=nu,Ja.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",bt.prototype.listen=bt.prototype.K,mr=Ja,lt.prototype.listenOnce=lt.prototype.L,lt.prototype.getLastError=lt.prototype.Ka,lt.prototype.getLastErrorCode=lt.prototype.Ba,lt.prototype.getStatus=lt.prototype.Z,lt.prototype.getResponseJson=lt.prototype.Oa,lt.prototype.getResponseText=lt.prototype.oa,lt.prototype.send=lt.prototype.ea,lt.prototype.setWithCredentials=lt.prototype.Ha,Ql=lt}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});const rc="@firebase/firestore",sc="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Ul("@firebase/firestore");function _n(){return Xe.logLevel}function N(r,...t){if(Xe.logLevel<=Y.DEBUG){const e=t.map(Jo);Xe.debug(`Firestore (${Bn}): ${r}`,...e)}}function kt(r,...t){if(Xe.logLevel<=Y.ERROR){const e=t.map(Jo);Xe.error(`Firestore (${Bn}): ${r}`,...e)}}function bn(r,...t){if(Xe.logLevel<=Y.WARN){const e=t.map(Jo);Xe.warn(`Firestore (${Bn}): ${r}`,...e)}}function Jo(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,th(r,n,e)}function th(r,t,e){let n=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw kt(n),new Error(n)}function U(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||th(t,s,n)}function G(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends jn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Lp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(vt.UNAUTHENTICATED))}shutdown(){}}class Fp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class jp{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){U(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new ve;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ve,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ve)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(U(typeof n.accessToken=="string",31837,{l:n}),new eh(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string",2055,{h:t}),new vt(t)}}class Bp{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Up{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Bp(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ic{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qp{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ep(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){U(this.o===void 0,3512);const n=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ic(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(U(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ic(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=zp(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function $(r,t){return r<t?-1:r>t?1:0}function Ao(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),i=t.charAt(n);if(s!==i)return uo(s)===uo(i)?$(s,i):uo(s)?1:-1}return $(r.length,t.length)}const $p=55296,Gp=57343;function uo(r){const t=r.charCodeAt(0);return t>=$p&&t<=Gp}function Rn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function nh(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="__name__";class Xt{constructor(t,e,n){e===void 0?e=0:e>t.length&&j(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&j(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Xt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Xt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=Xt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return $(t.length,e.length)}static compareSegments(t,e){const n=Xt.isNumericId(t),s=Xt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Xt.extractNumericId(t).compare(Xt.extractNumericId(e)):Ao(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Te.fromString(t.substring(4,t.length-2))}}class et extends Xt{construct(t,e,n){return new et(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new et(e)}static emptyPath(){return new et([])}}const Kp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Xt{construct(t,e,n){return new ct(t,e,n)}static isValidIdentifier(t){return Kp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===oc}static keyField(){return new ct([oc])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(et.fromString(t))}static fromName(t){return new O(et.fromString(t).popFirst(5))}static empty(){return new O(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new et(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(r,t,e){if(!e)throw new k(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Hp(r,t,e,n){if(t===!0&&n===!0)throw new k(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function ac(r){if(!O.isDocumentKey(r))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function uc(r){if(O.isDocumentKey(r))throw new k(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function sh(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function hi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":j(12329,{type:typeof r})}function Qt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=hi(r);throw new k(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(r,t){const e={typeString:r};return t&&(e.value=t),e}function Kr(r,t){if(!sh(r))throw new k(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new k(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=-62135596800,lc=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*lc);return new nt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<cc)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lc}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Kr(t,nt._jsonSchema))return new nt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-cc;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:mt("string",nt._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(t){return new q(t)}static min(){return new q(new nt(0,0))}static max(){return new q(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=-1;class Ws{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function bo(r){return r.fields.find(t=>t.kind===2)}function Fe(r){return r.fields.filter(t=>t.kind!==2)}Ws.UNKNOWN_ID=-1;class Ns{constructor(t,e){this.fieldPath=t,this.kind=e}}class Dr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Dr(0,Ut.min())}}function Wp(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=q.fromTimestamp(n===1e9?new nt(e+1,0):new nt(e,n));return new Ut(s,O.empty(),t)}function ih(r){return new Ut(r.readTime,r.key,Cr)}class Ut{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ut(q.min(),O.empty(),Cr)}static max(){return new Ut(q.max(),O.empty(),Cr)}}function Zo(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:$(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ah{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==oh)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,n)=>{e(t)})}static reject(t){return new b((e,n)=>{n(t)})}static waitFor(t){return new b((e,n)=>{let s=0,i=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&e()},l=>n(l))}),a=!0,i===s&&e()})}static or(t){let e=b.resolve(!1);for(const n of t)e=e.next(s=>s?b.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new b((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next(f=>{a[d]=f,++u,u===i&&n(a)},f=>s(f))}})}static doWhile(t,e){return new b((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="SimpleDb";class di{static open(t,e,n,s){try{return new di(e,t.transaction(s,n))}catch(i){throw new Er(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new ve,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new Er(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=ta(n.target.error);this.S.reject(new Er(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(N(jt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Xp(e)}}class we{static delete(t){return N(jt,"Removing database:",t),Be(Nl().indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!jl())return!1;if(we.F())return!0;const t=Gs(),e=we.M(t),n=0<e&&e<10,s=uh(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)==null?void 0:t.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.N=n,this.B=null,we.M(Gs())===12.2&&kt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(t){return this.db||(N(jt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new Er(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new k(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new k(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Er(t,a))},s.onupgradeneeded=i=>{N(jt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.N.k(a,s.transaction,i.oldVersion,this.version).next(()=>{N(jt,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}$(t){this.q=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.L(t);const u=di.open(this.db,t,i?"readonly":"readwrite",n),l=s(u).next(d=>(u.C(),d)).catch(d=>(u.abort(d),b.reject(d))).toPromise();return l.catch(()=>{}),await u.D,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(N(jt,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function uh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Qp{constructor(t){this.U=t,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(t){this.U=t}done(){this.K=!0}j(t){this.W=t}delete(){return Be(this.U.delete())}}class Er extends k{constructor(t,e){super(P.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ve(r){return r.name==="IndexedDbTransactionError"}class Xp{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(N(jt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(N(jt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Be(n)}add(t){return N(jt,"ADD",this.store.name,t,t),Be(this.store.add(t))}get(t){return Be(this.store.get(t)).next(e=>(e===void 0&&(e=null),N(jt,"GET",this.store.name,t,e),e))}delete(t){return N(jt,"DELETE",this.store.name,t),Be(this.store.delete(t))}count(){return N(jt,"COUNT",this.store.name),Be(this.store.count())}J(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new b((a,u)=>{i.onerror=l=>{u(l.target.error)},i.onsuccess=l=>{a(l.target.result)}})}{const i=this.cursor(n),a=[];return this.H(i,(u,l)=>{a.push(l)}).next(()=>a)}}Y(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new b((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}Z(t,e){N(jt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.X=!1;const s=this.cursor(n);return this.H(s,(i,a,u)=>u.delete())}ee(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.H(s,e)}te(t){const e=this.cursor({});return new b((n,s)=>{e.onerror=i=>{const a=ta(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}H(t,e){const n=[];return new b((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const l=new Qp(u),d=e(u.primaryKey,u.value,l);if(d instanceof b){const f=d.catch(p=>(l.done(),b.reject(p)));n.push(f)}l.isDone?s():l.G===null?u.continue():u.continue(l.G)}}).next(()=>b.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.X?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Be(r){return new b((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=ta(n.target.error);e(s)}})}let hc=!1;function ta(r){const t=we.M(Gs());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return hc||(hc=!0,setTimeout(()=>{throw n},0)),n}}return r}const Tr="IndexBackfiller";class Jp{constructor(t,e){this.asyncQueue=t,this.ne=e,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(t){N(Tr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.ne.ie();N(Tr,`Documents written: ${e}`)}catch(e){Ve(e)?N(Tr,"Ignoring IndexedDB error during index backfill: ",e):await rn(e)}await this.re(6e4)})}}class Yp{constructor(t,e){this.localStore=t,this.persistence=e}async ie(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.se(e,t))}se(t,e){const n=new Set;let s=e,i=!0;return b.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return N(Tr,`Processing collection: ${a}`),this.oe(t,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>e-s)}oe(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this._e(s,i)).next(u=>(N(Tr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}_e(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=ih(i);Zo(a,n)>0&&(n=a)}),new Ut(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}zt.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=-1;function fi(r){return r==null}function Nr(r){return r===0&&1/r==-1/0}function Zp(r){return typeof r=="number"&&Number.isInteger(r)&&!Nr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="";function Ct(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=dc(t)),t=tg(r.get(e),t);return dc(t)}function tg(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case Qs:e+="";break;default:e+=i}}return e}function dc(r){return r+Qs+""}function Jt(r){const t=r.length;if(U(t>=2,64408,{path:r}),t===2)return U(r.charAt(0)===Qs&&r.charAt(1)==="",56145,{path:r}),et.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(Qs,i);switch((a<0||a>e)&&j(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(i,a);let l;s.length===0?l=u:(s+=u,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:j(61167,{path:r})}i=a+2}return new et(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="remoteDocuments",Hr="owner",hn="owner",kr="mutationQueues",eg="userId",Ht="mutations",fc="batchId",$e="userMutationsIndex",mc=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(r,t){return[r,Ct(t)]}function ch(r,t,e){return[r,Ct(t),e]}const ng={},Sn="documentMutations",Xs="remoteDocumentsV14",rg=["prefixPath","collectionGroup","readTime","documentId"],Ms="documentKeyIndex",sg=["prefixPath","collectionGroup","documentId"],lh="collectionGroupIndex",ig=["collectionGroup","readTime","prefixPath","documentId"],Mr="remoteDocumentGlobal",Ro="remoteDocumentGlobalKey",xn="targets",hh="queryTargetsIndex",og=["canonicalId","targetId"],Pn="targetDocuments",ag=["targetId","path"],ea="documentTargetsIndex",ug=["path","targetId"],Js="targetGlobalKey",Ke="targetGlobal",Or="collectionParents",cg=["collectionId","parent"],Vn="clientMetadata",lg="clientId",mi="bundles",hg="bundleId",pi="namedQueries",dg="name",na="indexConfiguration",fg="indexId",So="collectionGroupIndex",mg="collectionGroup",vr="indexState",pg=["indexId","uid"],dh="sequenceNumberIndex",gg=["uid","sequenceNumber"],wr="indexEntries",_g=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],fh="documentKeyIndex",yg=["indexId","uid","orderedDocumentKey"],gi="documentOverlays",Ig=["userId","collectionPath","documentId"],xo="collectionPathOverlayIndex",Eg=["userId","collectionPath","largestBatchId"],mh="collectionGroupOverlayIndex",Tg=["userId","collectionGroup","largestBatchId"],ra="globals",vg="name",ph=[kr,Ht,Sn,je,xn,Hr,Ke,Pn,Vn,Mr,Or,mi,pi],wg=[...ph,gi],gh=[kr,Ht,Sn,Xs,xn,Hr,Ke,Pn,Vn,Mr,Or,mi,pi,gi],_h=gh,sa=[..._h,na,vr,wr],Ag=sa,yh=[...sa,ra],bg=yh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends ah{constructor(t,e){super(),this.le=t,this.currentSequenceNumber=e}}function _t(r,t){const e=G(r);return we.O(e.le,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Ce(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Ih(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e){this.comparator=t,this.root=e||wt.EMPTY}insert(t,e){return new ut(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(t){return new ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,wt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Rs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Rs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Rs(this.root,t,this.comparator,!0)}}class Rs{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class wt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??wt.RED,this.left=s??wt.EMPTY,this.right=i??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new wt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return wt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw j(27949);return t+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.comparator=t,this.data=new ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new gc(this.data.getIterator())}getIteratorFrom(t){return new gc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class gc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function dn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new st(ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Rn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Eh("Invalid base64 string: "+i):i}}(t);return new pt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Rg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oe(r){if(U(!!r,39018),typeof r=="string"){let t=0;const e=Rg.exec(r);if(U(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ae(r){return typeof r=="string"?pt.fromBase64String(r):pt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="server_timestamp",vh="__type__",wh="__previous_value__",Ah="__local_write_time__";function ia(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[vh])==null?void 0:n.stringValue)===Th}function _i(r){const t=r.mapValue.fields[wh];return ia(t)?_i(t):t}function Lr(r){const t=oe(r.mapValue.fields[Ah].timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t,e,n,s,i,a,u,l,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=f}}const Fr="(default)";class Je{constructor(t,e){this.projectId=t,this.database=e||Fr}static empty(){return new Je("","")}get isDefaultDatabase(){return this.database===Fr}isEqual(t){return t instanceof Je&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="__type__",bh="__max__",ye={mapValue:{fields:{__type__:{stringValue:bh}}}},aa="__vector__",Cn="value",Os={nullValue:"NULL_VALUE"};function be(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ia(r)?4:Rh(r)?9007199254740991:yi(r)?10:11:j(28295,{value:r})}function ee(r,t){if(r===t)return!0;const e=be(r);if(e!==be(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Lr(r).isEqual(Lr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=oe(s.timestampValue),u=oe(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ae(s.bytesValue).isEqual(ae(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return at(s.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return at(s.integerValue)===at(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=at(s.doubleValue),u=at(i.doubleValue);return a===u?Nr(a)===Nr(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return Rn(r.arrayValue.values||[],t.arrayValue.values||[],ee);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(pc(a)!==pc(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!ee(a[l],u[l])))return!1;return!0}(r,t);default:return j(52216,{left:r})}}function jr(r,t){return(r.values||[]).find(e=>ee(e,t))!==void 0}function Re(r,t){if(r===t)return 0;const e=be(r),n=be(t);if(e!==n)return $(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,t.booleanValue);case 2:return function(i,a){const u=at(i.integerValue||i.doubleValue),l=at(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(r,t);case 3:return _c(r.timestampValue,t.timestampValue);case 4:return _c(Lr(r),Lr(t));case 5:return Ao(r.stringValue,t.stringValue);case 6:return function(i,a){const u=ae(i),l=ae(a);return u.compareTo(l)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const f=$(u[d],l[d]);if(f!==0)return f}return $(u.length,l.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const u=$(at(i.latitude),at(a.latitude));return u!==0?u:$(at(i.longitude),at(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return yc(r.arrayValue,t.arrayValue);case 10:return function(i,a){var _,S,C,D;const u=i.fields||{},l=a.fields||{},d=(_=u[Cn])==null?void 0:_.arrayValue,f=(S=l[Cn])==null?void 0:S.arrayValue,p=$(((C=d==null?void 0:d.values)==null?void 0:C.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return p!==0?p:yc(d,f)}(r.mapValue,t.mapValue);case 11:return function(i,a){if(i===ye.mapValue&&a===ye.mapValue)return 0;if(i===ye.mapValue)return 1;if(a===ye.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const _=Ao(l[p],f[p]);if(_!==0)return _;const S=Re(u[l[p]],d[f[p]]);if(S!==0)return S}return $(l.length,f.length)}(r.mapValue,t.mapValue);default:throw j(23264,{he:e})}}function _c(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return $(r,t);const e=oe(r),n=oe(t),s=$(e.seconds,n.seconds);return s!==0?s:$(e.nanos,n.nanos)}function yc(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=Re(e[s],n[s]);if(i)return i}return $(e.length,n.length)}function Dn(r){return Vo(r)}function Vo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=oe(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ae(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=Vo(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${Vo(e.fields[a])}`;return s+"}"}(r.mapValue):j(61005,{value:r})}function Ls(r){switch(be(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=_i(r);return t?16+Ls(t):16;case 5:return 2*r.stringValue.length;case 6:return ae(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Ls(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Ce(n.fields,(i,a)=>{s+=i.length+Ls(a)}),s}(r.mapValue);default:throw j(13486,{value:r})}}function Br(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Co(r){return!!r&&"integerValue"in r}function Ur(r){return!!r&&"arrayValue"in r}function Ic(r){return!!r&&"nullValue"in r}function Ec(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Fs(r){return!!r&&"mapValue"in r}function yi(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[oa])==null?void 0:n.stringValue)===aa}function Ar(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Ce(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ar(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ar(r.arrayValue.values[e]);return t}return{...r}}function Rh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===bh}const Sh={mapValue:{fields:{[oa]:{stringValue:aa},[Cn]:{arrayValue:{}}}}};function xg(r){return"nullValue"in r?Os:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Br(Je.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?yi(r)?Sh:{mapValue:{}}:j(35942,{value:r})}function Pg(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Br(Je.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Sh:"mapValue"in r?yi(r)?{mapValue:{}}:ye:j(61959,{value:r})}function Tc(r,t){const e=Re(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function vc(r,t){const e=Re(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Fs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ar(e)}setAll(t){let e=ct.emptyPath(),n={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=Ar(a):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Fs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ee(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Fs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ce(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new Vt(Ar(this.value))}}function xh(r){const t=[];return Ce(r.fields,(e,n)=>{const s=new ct([e]);if(Fs(n)){const i=xh(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new ht(t,0,q.min(),q.min(),q.min(),Vt.empty(),0)}static newFoundDocument(t,e,n,s){return new ht(t,1,e,q.min(),n,s,0)}static newNoDocument(t,e){return new ht(t,2,e,q.min(),q.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new ht(t,3,e,q.min(),q.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,e){this.position=t,this.inclusive=e}}function wc(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),e.key):n=Re(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ac(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!ee(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vg(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{}class X extends Ph{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Cg(t,e,n):e==="array-contains"?new kg(t,n):e==="in"?new Mh(t,n):e==="not-in"?new Mg(t,n):e==="array-contains-any"?new Og(t,n):new X(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Dg(t,n):new Ng(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Re(e,this.value)):e!==null&&be(this.value)===be(e)&&this.matchesComparison(Re(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rt extends Ph{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new rt(t,e)}matches(t){return kn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function kn(r){return r.op==="and"}function Do(r){return r.op==="or"}function ua(r){return Vh(r)&&kn(r)}function Vh(r){for(const t of r.filters)if(t instanceof rt)return!1;return!0}function No(r){if(r instanceof X)return r.field.canonicalString()+r.op.toString()+Dn(r.value);if(ua(r))return r.filters.map(t=>No(t)).join(",");{const t=r.filters.map(e=>No(e)).join(",");return`${r.op}(${t})`}}function Ch(r,t){return r instanceof X?function(n,s){return s instanceof X&&n.op===s.op&&n.field.isEqual(s.field)&&ee(n.value,s.value)}(r,t):r instanceof rt?function(n,s){return s instanceof rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&Ch(a,s.filters[u]),!0):!1}(r,t):void j(19439)}function Dh(r,t){const e=r.filters.concat(t);return rt.create(e,r.op)}function Nh(r){return r instanceof X?function(e){return`${e.field.canonicalString()} ${e.op} ${Dn(e.value)}`}(r):r instanceof rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Nh).join(" ,")+"}"}(r):"Filter"}class Cg extends X{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Dg extends X{constructor(t,e){super(t,"in",e),this.keys=kh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ng extends X{constructor(t,e){super(t,"not-in",e),this.keys=kh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function kh(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>O.fromName(n.referenceValue))}class kg extends X{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ur(e)&&jr(e.arrayValue,this.value)}}class Mh extends X{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&jr(this.value.arrayValue,e)}}class Mg extends X{constructor(t,e){super(t,"not-in",e)}matches(t){if(jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!jr(this.value.arrayValue,e)}}class Og extends X{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ur(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>jr(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Te=null}}function ko(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Lg(r,t,e,n,s,i,a)}function Ye(r){const t=G(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>No(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),fi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Dn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Dn(n)).join(",")),t.Te=e}return t.Te}function Wr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Vg(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ch(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ac(r.startAt,t.startAt)&&Ac(r.endAt,t.endAt)}function Ys(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Zs(r,t){return r.filters.filter(e=>e instanceof X&&e.field.isEqual(t))}function bc(r,t,e){let n=Os,s=!0;for(const i of Zs(r,t)){let a=Os,u=!0;switch(i.op){case"<":case"<=":a=xg(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=Os}Tc({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Tc({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function Rc(r,t,e){let n=ye,s=!0;for(const i of Zs(r,t)){let a=ye,u=!0;switch(i.op){case">=":case">":a=Pg(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=ye}vc({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];vc({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Fg(r,t,e,n,s,i,a,u){return new Un(r,t,e,n,s,i,a,u)}function Ii(r){return new Un(r)}function Sc(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Oh(r){return r.collectionGroup!==null}function br(r){const t=G(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new st(ct.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new qr(i,n))}),e.has(ct.keyField().canonicalString())||t.Ie.push(new qr(ct.keyField(),n))}return t.Ie}function $t(r){const t=G(r);return t.Ee||(t.Ee=jg(t,br(r))),t.Ee}function jg(r,t){if(r.limitType==="F")return ko(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new qr(s.field,i)});const e=r.endAt?new Nn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Nn(r.startAt.position,r.startAt.inclusive):null;return ko(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Mo(r,t){const e=r.filters.concat([t]);return new Un(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Oo(r,t,e){return new Un(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Ei(r,t){return Wr($t(r),$t(t))&&r.limitType===t.limitType}function Lh(r){return`${Ye($t(r))}|lt:${r.limitType}`}function yn(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Nh(s)).join(", ")}]`),fi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Dn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Dn(s)).join(",")),`Target(${n})`}($t(r))}; limitType=${r.limitType})`}function Qr(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of br(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,u,l){const d=wc(a,u,l);return a.inclusive?d<=0:d<0}(n.startAt,br(n),s)||n.endAt&&!function(a,u,l){const d=wc(a,u,l);return a.inclusive?d>=0:d>0}(n.endAt,br(n),s))}(r,t)}function Bg(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Fh(r){return(t,e)=>{let n=!1;for(const s of br(r)){const i=Ug(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Ug(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?Re(l,d):j(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return j(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ce(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return Ih(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new ut(O.comparator);function Bt(){return qg}const jh=new ut(O.comparator);function pr(...r){let t=jh;for(const e of r)t=t.insert(e.key,e);return t}function Bh(r){let t=jh;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Yt(){return Rr()}function Uh(){return Rr()}function Rr(){return new ue(r=>r.toString(),(r,t)=>r.isEqual(t))}const zg=new ut(O.comparator),$g=new st(O.comparator);function Q(...r){let t=$g;for(const e of r)t=t.add(e);return t}const Gg=new st($);function Kg(){return Gg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nr(t)?"-0":t}}function qh(r){return{integerValue:""+r}}function Hg(r,t){return Zp(t)?qh(t):ca(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this._=void 0}}function Wg(r,t,e){return r instanceof zr?function(s,i){const a={fields:{[vh]:{stringValue:Th},[Ah]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ia(i)&&(i=_i(i)),i&&(a.fields[wh]=i),{mapValue:a}}(e,t):r instanceof Mn?$h(r,t):r instanceof On?Gh(r,t):function(s,i){const a=zh(s,i),u=xc(a)+xc(s.Ae);return Co(a)&&Co(s.Ae)?qh(u):ca(s.serializer,u)}(r,t)}function Qg(r,t,e){return r instanceof Mn?$h(r,t):r instanceof On?Gh(r,t):e}function zh(r,t){return r instanceof $r?function(n){return Co(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class zr extends Ti{}class Mn extends Ti{constructor(t){super(),this.elements=t}}function $h(r,t){const e=Kh(t);for(const n of r.elements)e.some(s=>ee(s,n))||e.push(n);return{arrayValue:{values:e}}}class On extends Ti{constructor(t){super(),this.elements=t}}function Gh(r,t){let e=Kh(t);for(const n of r.elements)e=e.filter(s=>!ee(s,n));return{arrayValue:{values:e}}}class $r extends Ti{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function xc(r){return at(r.integerValue||r.doubleValue)}function Kh(r){return Ur(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(t,e){this.field=t,this.transform=e}}function Jg(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Mn&&s instanceof Mn||n instanceof On&&s instanceof On?Rn(n.elements,s.elements,ee):n instanceof $r&&s instanceof $r?ee(n.Ae,s.Ae):n instanceof zr&&s instanceof zr}(r.transform,t.transform)}class Yg{constructor(t,e){this.version=t,this.transformResults=e}}class gt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new gt}static exists(t){return new gt(void 0,t)}static updateTime(t){return new gt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function js(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class vi{}function Hh(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Xr(r.key,gt.none()):new qn(r.key,r.data,gt.none());{const e=r.data,n=Vt.empty();let s=new st(ct.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new ce(r.key,n,new Ot(s.toArray()),gt.none())}}function Zg(r,t,e){r instanceof qn?function(s,i,a){const u=s.value.clone(),l=Vc(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof ce?function(s,i,a){if(!js(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Vc(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Wh(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Sr(r,t,e,n){return r instanceof qn?function(i,a,u,l){if(!js(i.precondition,a))return u;const d=i.value.clone(),f=Cc(i.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof ce?function(i,a,u,l){if(!js(i.precondition,a))return u;const d=Cc(i.fieldTransforms,l,a),f=a.data;return f.setAll(Wh(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,t,e,n):function(i,a,u){return js(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function t_(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=zh(n.transform,s||null);i!=null&&(e===null&&(e=Vt.empty()),e.set(n.field,i))}return e||null}function Pc(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Rn(n,s,(i,a)=>Jg(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class qn extends vi{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ce extends vi{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wh(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Vc(r,t,e){const n=new Map;U(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,Qg(a,u,e[s]))}return n}function Cc(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Wg(i,a,t))}return n}class Xr extends vi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qh extends vi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Zg(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Sr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Sr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Uh();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const l=Hh(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Q())}isEqual(t){return this.batchId===t.batchId&&Rn(this.mutations,t.mutations,(e,n)=>Pc(e,n))&&Rn(this.baseMutations,t.baseMutations,(e,n)=>Pc(e,n))}}class ha{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){U(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=function(){return zg}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new ha(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,J;function n_(r){switch(r){case P.OK:return j(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return j(15467,{code:r})}}function Xh(r){if(r===void 0)return kt("GRPC error has no .code"),P.UNKNOWN;switch(r){case ft.OK:return P.OK;case ft.CANCELLED:return P.CANCELLED;case ft.UNKNOWN:return P.UNKNOWN;case ft.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ft.INTERNAL:return P.INTERNAL;case ft.UNAVAILABLE:return P.UNAVAILABLE;case ft.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ft.NOT_FOUND:return P.NOT_FOUND;case ft.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ft.ABORTED:return P.ABORTED;case ft.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ft.DATA_LOSS:return P.DATA_LOSS;default:return j(39323,{code:r})}}(J=ft||(ft={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=new Te([4294967295,4294967295],0);function Dc(r){const t=r_().encode(r),e=new Wl;return e.update(t),new Uint8Array(e.digest())}function Nc(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Te([e,n],0),new Te([s,i],0)]}class fa{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new gr(`Invalid padding: ${e}`);if(n<0)throw new gr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new gr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new gr(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Te.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(Te.fromNumber(n)));return s.compare(s_)===1&&(s=new Te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Dc(t),[n,s]=Nc(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);if(!this.we(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new fa(i,s,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.ge===0)return;const e=Dc(t),[n,s]=Nc(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class gr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Jr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new wi(q.min(),s,new ut($),Bt(),Q())}}class Jr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Jr(n,e,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class Jh{constructor(t,e){this.targetId=t,this.Ce=e}}class Yh{constructor(t,e,n=pt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class kc{constructor(){this.ve=0,this.Fe=Mc(),this.Me=pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Q(),e=Q(),n=Q();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:j(38017,{changeType:i})}}),new Jr(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=Mc()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,U(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class i_{constructor(t){this.Ge=t,this.ze=new Map,this.je=Bt(),this.Je=Ss(),this.He=Ss(),this.Ye=new ut($)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:j(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(Ys(i))if(n===0){const a=new O(i.path);this.et(e,a,ht.newNoDocument(a,q.min()))}else U(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const u=this.ut(t),l=u?this.ct(u,t,a):1;if(l!==0){this.it(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=ae(n).toUint8Array()}catch(l){if(l instanceof Eh)return bn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new fa(a,s,i)}catch(l){return bn(l instanceof gr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.ge===0?null:u}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.et(e,i,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((i,a)=>{const u=this.ot(a);if(u){if(i.current&&Ys(u.target)){const l=new O(u.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ht.newNoDocument(l,t))}i.Be&&(e.set(a,i.ke()),i.qe())}});let n=Q();this.He.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.je.forEach((i,a)=>a.setReadTime(t));const s=new wi(t,e,this.Ye,this.je,n);return this.je=Bt(),this.Je=Ss(),this.He=Ss(),this.Ye=new ut($),s}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new kc,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new st($),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new st($),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new kc),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Ss(){return new ut(O.comparator)}function Mc(){return new ut(O.comparator)}const o_={asc:"ASCENDING",desc:"DESCENDING"},a_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},u_={and:"AND",or:"OR"};class c_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Lo(r,t){return r.useProto3Json||fi(t)?t:{value:t}}function Ln(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function l_(r,t){return Ln(r,t.toTimestamp())}function Mt(r){return U(!!r,49232),q.fromTimestamp(function(e){const n=oe(e);return new nt(n.seconds,n.nanos)}(r))}function ma(r,t){return Fo(r,t).canonicalString()}function Fo(r,t){const e=function(s){return new et(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function td(r){const t=et.fromString(r);return U(cd(t),10190,{key:t.toString()}),t}function ti(r,t){return ma(r.databaseId,t.path)}function He(r,t){const e=td(t);if(e.get(1)!==r.databaseId.projectId)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(rd(e))}function ed(r,t){return ma(r.databaseId,t)}function nd(r){const t=td(r);return t.length===4?et.emptyPath():rd(t)}function jo(r){return new et(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function rd(r){return U(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Oc(r,t,e){return{name:ti(r,t),fields:e.value.mapValue.fields}}function h_(r,t,e){const n=He(r,t.name),s=Mt(t.updateTime),i=t.createTime?Mt(t.createTime):q.min(),a=new Vt({mapValue:{fields:t.fields}}),u=ht.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function d_(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(U(f===void 0||typeof f=="string",58123),pt.fromBase64String(f||"")):(U(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),pt.fromUint8Array(f||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const f=d.code===void 0?P.UNKNOWN:Xh(d.code);return new k(f,d.message||"")}(a);e=new Yh(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=He(r,n.document.name),i=Mt(n.document.updateTime),a=n.document.createTime?Mt(n.document.createTime):q.min(),u=new Vt({mapValue:{fields:n.document.fields}}),l=ht.newFoundDocument(s,i,a,u),d=n.targetIds||[],f=n.removedTargetIds||[];e=new Bs(d,f,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=He(r,n.document),i=n.readTime?Mt(n.readTime):q.min(),a=ht.newNoDocument(s,i),u=n.removedTargetIds||[];e=new Bs([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=He(r,n.document),i=n.removedTargetIds||[];e=new Bs([],i,s,null)}else{if(!("filter"in t))return j(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new e_(s,i),u=n.targetId;e=new Jh(u,a)}}return e}function ei(r,t){let e;if(t instanceof qn)e={update:Oc(r,t.key,t.value)};else if(t instanceof Xr)e={delete:ti(r,t.key)};else if(t instanceof ce)e={update:Oc(r,t.key,t.data),updateMask:y_(t.fieldMask)};else{if(!(t instanceof Qh))return j(16599,{Vt:t.type});e={verify:ti(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof zr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Mn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof On)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof $r)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw j(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:l_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j(27497)}(r,t.precondition)),e}function Bo(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?gt.updateTime(Mt(i.updateTime)):i.exists!==void 0?gt.exists(i.exists):gt.none()}(t.currentDocument):gt.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,u){let l=null;if("setToServerValue"in u)U(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),l=new zr;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];l=new Mn(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];l=new On(f)}else"increment"in u?l=new $r(a,u.increment):j(16584,{proto:u});const d=ct.fromServerFormat(u.fieldPath);return new Xg(d,l)}(r,s)):[];if(t.update){t.update.name;const s=He(r,t.update.name),i=new Vt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(l){const d=l.fieldPaths||[];return new Ot(d.map(f=>ct.fromServerFormat(f)))}(t.updateMask);return new ce(s,i,a,e,n)}return new qn(s,i,e,n)}if(t.delete){const s=He(r,t.delete);return new Xr(s,e)}if(t.verify){const s=He(r,t.verify);return new Qh(s,e)}return j(1463,{proto:t})}function f_(r,t){return r&&r.length>0?(U(t!==void 0,14353),r.map(e=>function(s,i){let a=s.updateTime?Mt(s.updateTime):Mt(i);return a.isEqual(q.min())&&(a=Mt(i)),new Yg(a,s.transformResults||[])}(e,t))):[]}function sd(r,t){return{documents:[ed(r,t.path)]}}function id(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=ed(r,s);const i=function(d){if(d.length!==0)return ud(rt.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:In(_.field),direction:p_(_.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Lo(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function od(r){let t=nd(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){U(n===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(p){const _=ad(p);return _ instanceof rt&&ua(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(p){return p.map(_=>function(C){return new qr(En(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(_))}(e.orderBy));let u=null;e.limit&&(u=function(p){let _;return _=typeof p=="object"?p.value:p,fi(_)?null:_}(e.limit));let l=null;e.startAt&&(l=function(p){const _=!!p.before,S=p.values||[];return new Nn(S,_)}(e.startAt));let d=null;return e.endAt&&(d=function(p){const _=!p.before,S=p.values||[];return new Nn(S,_)}(e.endAt)),Fg(t,s,a,i,u,"F",l,d)}function m_(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ad(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=En(e.unaryFilter.field);return X.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=En(e.unaryFilter.field);return X.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=En(e.unaryFilter.field);return X.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=En(e.unaryFilter.field);return X.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(r):r.fieldFilter!==void 0?function(e){return X.create(En(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return rt.create(e.compositeFilter.filters.map(n=>ad(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(e.compositeFilter.op))}(r):j(30097,{filter:r})}function p_(r){return o_[r]}function g_(r){return a_[r]}function __(r){return u_[r]}function In(r){return{fieldPath:r.canonicalString()}}function En(r){return ct.fromServerFormat(r.fieldPath)}function ud(r){return r instanceof X?function(e){if(e.op==="=="){if(Ec(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NAN"}};if(Ic(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ec(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NOT_NAN"}};if(Ic(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:In(e.field),op:g_(e.op),value:e.value}}}(r):r instanceof rt?function(e){const n=e.getFilters().map(s=>ud(s));return n.length===1?n[0]:{compositeFilter:{op:__(e.op),filters:n}}}(r):j(54877,{filter:r})}function y_(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function cd(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,e,n,s,i=q.min(),a=q.min(),u=pt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new se(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t){this.yt=t}}function I_(r,t){let e;if(t.document)e=h_(r.yt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=O.fromSegments(t.noDocument.path),s=tn(t.noDocument.readTime);e=ht.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return j(56709);{const n=O.fromSegments(t.unknownDocument.path),s=tn(t.unknownDocument.version);e=ht.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new nt(s[0],s[1]);return q.fromTimestamp(i)}(t.readTime)),e}function Lc(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:ni(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:ti(i,a.key),fields:a.data.value.mapValue.fields,updateTime:Ln(i,a.version.toTimestamp()),createTime:Ln(i,a.createTime.toTimestamp())}}(r.yt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:Ze(t.version)};else{if(!t.isUnknownDocument())return j(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:Ze(t.version)}}return n}function ni(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function Ze(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function tn(r){const t=new nt(r.seconds,r.nanoseconds);return q.fromTimestamp(t)}function Ue(r,t){const e=(t.baseMutations||[]).map(i=>Bo(r.yt,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>Bo(r.yt,i)),s=nt.fromMillis(t.localWriteTimeMs);return new la(t.batchId,s,e,n)}function _r(r){const t=tn(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?tn(r.lastLimboFreeSnapshotVersion):q.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const a=i.documents.length;return U(a===1,1966,{count:a}),$t(Ii(nd(i.documents[0])))}(r.query):function(i){return $t(od(i))}(r.query),new se(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,pt.fromBase64String(r.resumeToken))}function hd(r,t){const e=Ze(t.snapshotVersion),n=Ze(t.lastLimboFreeSnapshotVersion);let s;s=Ys(t.target)?sd(r.yt,t.target):id(r.yt,t.target).ft;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ye(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function dd(r){const t=od({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Oo(t,t.limit,"L"):t}function co(r,t){return new da(t.largestBatchId,Bo(r.yt,t.overlayMutation))}function Fc(r,t){const e=t.path.lastSegment();return[r,Ct(t.path.popLast()),e]}function jc(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:Ze(n.readTime),documentKey:Ct(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{getBundleMetadata(t,e){return Bc(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:tn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return Bc(t).put(function(s){return{bundleId:s.id,createTime:Ze(Mt(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return Uc(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:dd(i.bundledQuery),readTime:tn(i.readTime)}}(n)})}saveNamedQuery(t,e){return Uc(t).put(function(s){return{name:s.name,readTime:Ze(Mt(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function Bc(r){return _t(r,mi)}function Uc(r){return _t(r,pi)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e){this.serializer=t,this.userId=e}static wt(t,e){const n=e.uid||"";return new Ai(t,n)}getOverlay(t,e){return ur(t).get(Fc(this.userId,e)).next(n=>n?co(this.serializer,n):null)}getOverlays(t,e){const n=Yt();return b.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const u=new da(e,a);s.push(this.St(t,u))}),b.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(Ct(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(ur(t).Z(xo,u))}),b.waitFor(i)}getOverlaysForCollection(t,e,n){const s=Yt(),i=Ct(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ur(t).J(xo,a).next(u=>{for(const l of u){const d=co(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=Yt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return ur(t).ee({index:mh,range:u},(l,d,f)=>{const p=co(this.serializer,d);i.size()<s||p.largestBatchId===a?(i.set(p.getKey(),p),a=p.largestBatchId):f.done()}).next(()=>i)}St(t,e){return ur(t).put(function(s,i,a){const[u,l,d]=Fc(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:ei(s.yt,a.mutation)}}(this.serializer,this.userId,e))}}function ur(r){return _t(r,gi)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{bt(t){return _t(t,ra)}getSessionToken(t){return this.bt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?pt.fromUint8Array(n):pt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.bt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(at(t.integerValue));else if("doubleValue"in t){const n=at(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),Nr(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),typeof n=="string"&&(n=oe(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(ae(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?Rh(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):yi(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Qt(t.arrayValue,e),this.Nt(e)):j(19022,{$t:t})}Ot(t,e){this.Ft(e,25),this.Ut(t,e)}Ut(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const s of Object.keys(n))this.Ot(s,e),this.Ct(n[s],e)}kt(t,e){var a,u;const n=t.fields||{};this.Ft(e,53);const s=Cn,i=((u=(a=n[s].arrayValue)==null?void 0:a.values)==null?void 0:u.length)||0;this.Ft(e,15),e.Mt(at(i)),this.Ot(s,e),this.Ct(n[s],e)}Qt(t,e){const n=t.values||[];this.Ft(e,50);for(const s of n)this.Ct(s,e)}Lt(t,e){this.Ft(e,37),O.fromName(t).path.forEach(n=>{this.Ft(e,60),this.Ut(n,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}qe.Kt=new qe;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=255;function v_(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function qc(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=v_(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class w_{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Gt(n.value),n=e.next();this.zt()}jt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Jt(n.value),n=e.next();this.Ht()}Yt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=e.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=e.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(t){const e=this.en(t),n=qc(e);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}nn(t){const e=this.en(t),n=qc(e);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}rn(){this.sn(fn),this.sn(255)}_n(){this.an(fn),this.an(255)}reset(){this.position=0}seed(t){this.tn(t.length),this.buffer.set(t,this.position),this.position+=t.length}un(){return this.buffer.slice(0,this.position)}en(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Gt(t){const e=255&t;e===0?(this.sn(0),this.sn(255)):e===fn?(this.sn(fn),this.sn(0)):this.sn(e)}Jt(t){const e=255&t;e===0?(this.an(0),this.an(255)):e===fn?(this.an(fn),this.an(0)):this.an(t)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(t){this.tn(1),this.buffer[this.position++]=t}an(t){this.tn(1),this.buffer[this.position++]=~t}tn(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class A_{constructor(t){this.cn=t}Bt(t){this.cn.Wt(t)}xt(t){this.cn.Yt(t)}Mt(t){this.cn.Xt(t)}vt(){this.cn.rn()}}class b_{constructor(t){this.cn=t}Bt(t){this.cn.jt(t)}xt(t){this.cn.Zt(t)}Mt(t){this.cn.nn(t)}vt(){this.cn._n()}}class cr{constructor(){this.cn=new w_,this.ln=new A_(this.cn),this.hn=new b_(this.cn)}seed(t){this.cn.seed(t)}Pn(t){return t===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e,n,s){this.Tn=t,this.In=e,this.En=n,this.dn=s}An(){const t=this.dn.length,e=t===0||this.dn[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.dn,0),e!==t?n.set([0],this.dn.length):++n[n.length-1],new ze(this.Tn,this.In,this.En,n)}Rn(t,e,n){return{indexId:this.Tn,uid:t,arrayValue:Us(this.En),directionalValue:Us(this.dn),orderedDocumentKey:Us(e),documentKey:n.path.toArray()}}Vn(t,e,n){const s=this.Rn(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function me(r,t){let e=r.Tn-t.Tn;return e!==0?e:(e=zc(r.En,t.En),e!==0?e:(e=zc(r.dn,t.dn),e!==0?e:O.comparator(r.In,t.In)))}function zc(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function Us(r){return Fl()?function(e){let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n}(r):r}function $c(r){return typeof r!="string"?r:function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(r)}class Gc{constructor(t){this.mn=new st((e,n)=>ct.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.fn=t.orderBy,this.gn=[];for(const e of t.filters){const n=e;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(t){if(U(t.collectionGroup===this.collectionId,49279),this.pn)return!1;const e=bo(t);if(e!==void 0&&!this.wn(e))return!1;const n=Fe(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.wn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.mn.size>0){const u=this.mn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const l=n[i];if(!this.Sn(u,l)||!this.bn(this.fn[a++],l))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.fn.length||!this.bn(this.fn[a++],u))return!1}return!0}Dn(){if(this.pn)return null;let t=new st(ct.comparator);const e=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new Ns(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new Ns(n.field,0))}for(const n of this.fn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new Ns(n.field,n.dir==="asc"?0:1)));return new Ws(Ws.UNKNOWN_ID,this.collectionId,e,Dr.empty())}wn(t){for(const e of this.gn)if(this.Sn(e,t))return!0;return!1}Sn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}bn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(r){var e,n;if(U(r instanceof X||r instanceof rt,20012),r instanceof X){if(r instanceof Mh){const s=((n=(e=r.value.arrayValue)==null?void 0:e.values)==null?void 0:n.map(i=>X.create(r.field,"==",i)))||[];return rt.create(s,"or")}return r}const t=r.filters.map(s=>fd(s));return rt.create(t,r.op)}function R_(r){if(r.getFilters().length===0)return[];const t=zo(fd(r));return U(md(t),7391),Uo(t)||qo(t)?[t]:t.getFilters()}function Uo(r){return r instanceof X}function qo(r){return r instanceof rt&&ua(r)}function md(r){return Uo(r)||qo(r)||function(e){if(e instanceof rt&&Do(e)){for(const n of e.getFilters())if(!Uo(n)&&!qo(n))return!1;return!0}return!1}(r)}function zo(r){if(U(r instanceof X||r instanceof rt,34018),r instanceof X)return r;if(r.filters.length===1)return zo(r.filters[0]);const t=r.filters.map(n=>zo(n));let e=rt.create(t,r.op);return e=ri(e),md(e)?e:(U(e instanceof rt,64498),U(kn(e),40251),U(e.filters.length>1,57927),e.filters.reduce((n,s)=>pa(n,s)))}function pa(r,t){let e;return U(r instanceof X||r instanceof rt,38388),U(t instanceof X||t instanceof rt,25473),e=r instanceof X?t instanceof X?function(s,i){return rt.create([s,i],"and")}(r,t):Kc(r,t):t instanceof X?Kc(t,r):function(s,i){if(U(s.filters.length>0&&i.filters.length>0,48005),kn(s)&&kn(i))return Dh(s,i.getFilters());const a=Do(s)?s:i,u=Do(s)?i:s,l=a.filters.map(d=>pa(d,u));return rt.create(l,"or")}(r,t),ri(e)}function Kc(r,t){if(kn(t))return Dh(t,r.getFilters());{const e=t.filters.map(n=>pa(r,n));return rt.create(e,"or")}}function ri(r){if(U(r instanceof X||r instanceof rt,11850),r instanceof X)return r;const t=r.getFilters();if(t.length===1)return ri(t[0]);if(Vh(r))return r;const e=t.map(s=>ri(s)),n=[];return e.forEach(s=>{s instanceof X?n.push(s):s instanceof rt&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:rt.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.Cn=new ga}addToCollectionParentIndex(t,e){return this.Cn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(Ut.min())}updateCollectionGroup(t,e,n){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class ga{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new st(et.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new st(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="IndexedDbIndexManager",xs=new Uint8Array(0);class x_{constructor(t,e){this.databaseId=e,this.vn=new ga,this.Fn=new ue(n=>Ye(n),(n,s)=>Wr(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.vn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.vn.add(e)});const i={collectionId:n,parent:Ct(s)};return Wc(t).put(i)}return b.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[nh(e),""],!1,!0);return Wc(t).J(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(Jt(a.parent))}return n})}addFieldIndex(t,e){const n=lr(t),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=pn(t);return i.next(u=>{a.put(jc(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=lr(t),s=pn(t),i=mn(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=lr(t),n=mn(t),s=pn(t);return e.Z().next(()=>n.Z()).next(()=>s.Z())}createTargetIndexes(t,e){return b.forEach(this.Mn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new Gc(n).Dn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=mn(t);let s=!0;const i=new Map;return b.forEach(this.Mn(e),a=>this.xn(t,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=Q();const u=[];return b.forEach(i,(l,d)=>{N(Hc,`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(z=>`${z.fieldPath}:${z.kind}`).join(",")}`}(l)} to execute ${Ye(e)}`);const f=function(F,z){const Z=bo(z);if(Z===void 0)return null;for(const W of Zs(F,Z.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null}(d,l),p=function(F,z){const Z=new Map;for(const W of Fe(z))for(const v of Zs(F,W.fieldPath))switch(v.op){case"==":case"in":Z.set(W.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return Z.set(W.fieldPath.canonicalString(),v.value),Array.from(Z.values())}return null}(d,l),_=function(F,z){const Z=[];let W=!0;for(const v of Fe(z)){const y=v.kind===0?bc(F,v.fieldPath,F.startAt):Rc(F,v.fieldPath,F.startAt);Z.push(y.value),W&&(W=y.inclusive)}return new Nn(Z,W)}(d,l),S=function(F,z){const Z=[];let W=!0;for(const v of Fe(z)){const y=v.kind===0?Rc(F,v.fieldPath,F.endAt):bc(F,v.fieldPath,F.endAt);Z.push(y.value),W&&(W=y.inclusive)}return new Nn(Z,W)}(d,l),C=this.On(l,d,_),D=this.On(l,d,S),V=this.Nn(l,d,p),B=this.Bn(l.indexId,f,C,_.inclusive,D,S.inclusive,V);return b.forEach(B,L=>n.Y(L,e.limit).next(F=>{F.forEach(z=>{const Z=O.fromSegments(z.documentKey);a.has(Z)||(a=a.add(Z),u.push(Z))})}))}).next(()=>u)}return b.resolve(null)})}Mn(t){let e=this.Fn.get(t);return e||(t.filters.length===0?e=[t]:e=R_(rt.create(t.filters,"and")).map(n=>ko(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.Fn.set(t,e),e)}Bn(t,e,n,s,i,a,u){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),f=[];for(let p=0;p<l;++p){const _=e?this.Ln(e[p/d]):xs,S=this.kn(t,_,n[p%d],s),C=this.qn(t,_,i[p%d],a),D=u.map(V=>this.kn(t,_,V,!0));f.push(...this.createRange(S,C,D))}return f}kn(t,e,n,s){const i=new ze(t,O.empty(),e,n);return s?i:i.An()}qn(t,e,n,s){const i=new ze(t,O.empty(),e,n);return s?i.An():i}xn(t,e){const n=new Gc(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const u of i)n.yn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const s=this.Mn(e);return b.forEach(s,i=>this.xn(t,i).next(a=>{a?n!==0&&a.fields.length<function(l){let d=new st(ct.comparator),f=!1;for(const p of l.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:d=d.add(_.field));for(const p of l.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}Qn(t,e){const n=new cr;for(const s of Fe(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Pn(s.kind);qe.Kt.Dt(i,a)}return n.un()}Ln(t){const e=new cr;return qe.Kt.Dt(t,e.Pn(0)),e.un()}$n(t,e){const n=new cr;return qe.Kt.Dt(Br(this.databaseId,e),n.Pn(function(i){const a=Fe(i);return a.length===0?0:a[a.length-1].kind}(t))),n.un()}Nn(t,e,n){if(n===null)return[];let s=[];s.push(new cr);let i=0;for(const a of Fe(t)){const u=n[i++];for(const l of s)if(this.Un(e,a.fieldPath)&&Ur(u))s=this.Kn(s,a,u);else{const d=l.Pn(a.kind);qe.Kt.Dt(u,d)}}return this.Wn(s)}On(t,e,n){return this.Nn(t,e,n.position)}Wn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].un();return e}Kn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const l=new cr;l.seed(u.un()),qe.Kt.Dt(a,l.Pn(e.kind)),i.push(l)}return i}Un(t,e){return!!t.filters.find(n=>n instanceof X&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=lr(t),s=pn(t);return(e?n.J(So,IDBKeyRange.bound(e,e)):n.J()).next(i=>{const a=[];return b.forEach(i,u=>s.get([u.indexId,this.uid]).next(l=>{a.push(function(f,p){const _=p?new Dr(p.sequenceNumber,new Ut(tn(p.readTime),new O(Jt(p.documentKey)),p.largestBatchId)):Dr.empty(),S=f.fields.map(([C,D])=>new Ns(ct.fromServerFormat(C),D));return new Ws(f.indexId,f.collectionGroup,S,_)}(u,l))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:$(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=lr(t),i=pn(t);return this.Gn(t).next(a=>s.J(So,IDBKeyRange.bound(e,e)).next(u=>b.forEach(u,l=>i.put(jc(l.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return b.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?b.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),b.forEach(u,l=>this.zn(t,s,l).next(d=>{const f=this.jn(i,l);return d.isEqual(f)?b.resolve():this.Jn(t,i,l,d,f)}))))})}Hn(t,e,n,s){return mn(t).put(s.Rn(this.uid,this.$n(n,e.key),e.key))}Yn(t,e,n,s){return mn(t).delete(s.Vn(this.uid,this.$n(n,e.key),e.key))}zn(t,e,n){const s=mn(t);let i=new st(me);return s.ee({index:fh,range:IDBKeyRange.only([n.indexId,this.uid,Us(this.$n(n,e))])},(a,u)=>{i=i.add(new ze(n.indexId,e,$c(u.arrayValue),$c(u.directionalValue)))}).next(()=>i)}jn(t,e){let n=new st(me);const s=this.Qn(e,t);if(s==null)return n;const i=bo(e);if(i!=null){const a=t.data.field(i.fieldPath);if(Ur(a))for(const u of a.arrayValue.values||[])n=n.add(new ze(e.indexId,t.key,this.Ln(u),s))}else n=n.add(new ze(e.indexId,t.key,xs,s));return n}Jn(t,e,n,s,i){N(Hc,"Updating index entries for document '%s'",e.key);const a=[];return function(l,d,f,p,_){const S=l.getIterator(),C=d.getIterator();let D=dn(S),V=dn(C);for(;D||V;){let B=!1,L=!1;if(D&&V){const F=f(D,V);F<0?L=!0:F>0&&(B=!0)}else D!=null?L=!0:B=!0;B?(p(V),V=dn(C)):L?(_(D),D=dn(S)):(D=dn(S),V=dn(C))}}(s,i,me,u=>{a.push(this.Hn(t,e,n,u))},u=>{a.push(this.Yn(t,e,n,u))}),b.waitFor(a)}Gn(t){let e=1;return pn(t).ee({index:dh,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>me(a,u)).filter((a,u,l)=>!u||me(a,l[u-1])!==0);const s=[];s.push(t);for(const a of n){const u=me(a,t),l=me(a,e);if(u===0)s[0]=t.An();else if(u>0&&l<0)s.push(a),s.push(a.An());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Zn(s[a],s[a+1]))return[];const u=s[a].Vn(this.uid,xs,O.empty()),l=s[a+1].Vn(this.uid,xs,O.empty());i.push(IDBKeyRange.bound(u,l))}return i}Zn(t,e){return me(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Qc)}getMinOffset(t,e){return b.mapArray(this.Mn(e),n=>this.xn(t,n).next(s=>s||j(44426))).next(Qc)}}function Wc(r){return _t(r,Or)}function mn(r){return _t(r,wr)}function lr(r){return _t(r,na)}function pn(r){return _t(r,vr)}function Qc(r){U(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Zo(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Ut(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pd=41943040;class Pt{static withCacheSize(t){return new Pt(t,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(r,t,e){const n=r.store(Ht),s=r.store(Sn),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const l=n.ee({range:a},(f,p,_)=>(u++,_.delete()));i.push(l.next(()=>{U(u===1,47070,{batchId:e.batchId})}));const d=[];for(const f of e.mutations){const p=ch(t,f.key.path,e.batchId);i.push(s.delete(p)),d.push(f.key)}return b.waitFor(i).next(()=>d)}function si(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw j(14731);t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(pd,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);class bi{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Xn={}}static wt(t,e,n,s){U(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new bi(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return pe(t).ee({index:$e,range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=Tn(t),a=pe(t);return a.add({}).next(u=>{U(typeof u=="number",49019);const l=new la(u,e,n,s),d=function(S,C,D){const V=D.baseMutations.map(L=>ei(S.yt,L)),B=D.mutations.map(L=>ei(S.yt,L));return{userId:C,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:V,mutations:B}}(this.serializer,this.userId,l),f=[];let p=new st((_,S)=>$(_.canonicalString(),S.canonicalString()));for(const _ of s){const S=ch(this.userId,_.key.path,u);p=p.add(_.key.path.popLast()),f.push(a.put(d)),f.push(i.put(S,ng))}return p.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(t,_))}),t.addOnCommittedListener(()=>{this.Xn[u]=l.keys()}),b.waitFor(f).next(()=>l)})}lookupMutationBatch(t,e){return pe(t).get(e).next(n=>n?(U(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),Ue(this.serializer,n)):null)}er(t,e){return this.Xn[e]?b.resolve(this.Xn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.Xn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return pe(t).ee({index:$e,range:s},(a,u,l)=>{u.userId===this.userId&&(U(u.batchId>=n,47524,{tr:n}),i=Ue(this.serializer,u)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Ge;return pe(t).ee({index:$e,range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,Ge],[this.userId,Number.POSITIVE_INFINITY]);return pe(t).J($e,e).next(n=>n.map(s=>Ue(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=ks(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return Tn(t).ee({range:s},(a,u,l)=>{const[d,f,p]=a,_=Jt(f);if(d===this.userId&&e.path.isEqual(_))return pe(t).get(p).next(S=>{if(!S)throw j(61480,{nr:a,batchId:p});U(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:p}),i.push(Ue(this.serializer,S))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st($);const s=[];return e.forEach(i=>{const a=ks(this.userId,i.path),u=IDBKeyRange.lowerBound(a),l=Tn(t).ee({range:u},(d,f,p)=>{const[_,S,C]=d,D=Jt(S);_===this.userId&&i.path.isEqual(D)?n=n.add(C):p.done()});s.push(l)}),b.waitFor(s).next(()=>this.rr(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=ks(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new st($);return Tn(t).ee({range:a},(l,d,f)=>{const[p,_,S]=l,C=Jt(_);p===this.userId&&n.isPrefixOf(C)?C.length===s&&(u=u.add(S)):f.done()}).next(()=>this.rr(t,u))}rr(t,e){const n=[],s=[];return e.forEach(i=>{s.push(pe(t).get(i).next(a=>{if(a===null)throw j(35274,{batchId:i});U(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(Ue(this.serializer,a))}))}),b.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return gd(t.le,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.ir(e.batchId)}),b.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}ir(t){delete this.Xn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return b.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return Tn(t).ee({range:n},(i,a,u)=>{if(i[0]===this.userId){const l=Jt(i[1]);s.push(l)}else u.done()}).next(()=>{U(s.length===0,56720,{sr:s.map(i=>i.canonicalString())})})})}containsKey(t,e){return _d(t,this.userId,e)}_r(t){return yd(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Ge,lastStreamToken:""})}}function _d(r,t,e){const n=ks(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return Tn(r).ee({range:i,X:!0},(u,l,d)=>{const[f,p,_]=u;f===t&&p===s&&(a=!0),d.done()}).next(()=>a)}function pe(r){return _t(r,Ht)}function Tn(r){return _t(r,Sn)}function yd(r){return _t(r,kr)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new en(0)}static cr(){return new en(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.lr(t).next(e=>{const n=new en(e.highestTargetId);return e.highestTargetId=n.next(),this.hr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.lr(t).next(e=>q.fromTimestamp(new nt(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.lr(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.lr(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.hr(t,s)))}addTargetData(t,e){return this.Pr(t,e).next(()=>this.lr(t).next(n=>(n.targetCount+=1,this.Tr(e,n),this.hr(t,n))))}updateTargetData(t,e){return this.Pr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>gn(t).delete(e.targetId)).next(()=>this.lr(t)).next(n=>(U(n.targetCount>0,8065),n.targetCount-=1,this.hr(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return gn(t).ee((a,u)=>{const l=_r(u);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))}).next(()=>b.waitFor(i)).next(()=>s)}forEachTarget(t,e){return gn(t).ee((n,s)=>{const i=_r(s);e(i)})}lr(t){return Jc(t).get(Js).next(e=>(U(e!==null,2888),e))}hr(t,e){return Jc(t).put(Js,e)}Pr(t,e){return gn(t).put(hd(this.serializer,e))}Tr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.lr(t).next(e=>e.targetCount)}getTargetData(t,e){const n=Ye(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return gn(t).ee({range:s,index:hh},(a,u,l)=>{const d=_r(u);Wr(e,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=_e(t);return e.forEach(a=>{const u=Ct(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))}),b.waitFor(s)}removeMatchingKeys(t,e,n){const s=_e(t);return b.forEach(e,i=>{const a=Ct(i.path);return b.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=_e(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=_e(t);let i=Q();return s.ee({range:n,X:!0},(a,u,l)=>{const d=Jt(a[1]),f=new O(d);i=i.add(f)}).next(()=>i)}containsKey(t,e){const n=Ct(e.path),s=IDBKeyRange.bound([n],[nh(n)],!1,!0);let i=0;return _e(t).ee({index:ea,X:!0,range:s},([a,u],l,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}At(t,e){return gn(t).get(e).next(n=>n?_r(n):null)}}function gn(r){return _t(r,xn)}function Jc(r){return _t(r,Ke)}function _e(r){return _t(r,Pn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="LruGarbageCollector",Id=1048576;function Zc([r,t],[e,n]){const s=$(r,e);return s===0?$(t,n):s}class V_{constructor(t){this.Ir=t,this.buffer=new st(Zc),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Zc(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ed{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){N(Yc,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ve(e)?N(Yc,"Ignoring IndexedDB error during garbage collection: ",e):await rn(e)}await this.Vr(3e5)})}}class C_{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return b.resolve(zt.ce);const n=new V_(e);return this.mr.forEachTarget(t,s=>n.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>n.Ar(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Xc)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xc):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,s,i,a,u,l,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(n=p,u=Date.now(),this.removeTargets(t,n,e))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(t,n))).next(p=>(d=Date.now(),_n()<=Y.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${p} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Td(r,t){return new C_(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(t,e){this.db=t,this.garbageCollector=Td(this,e)}gr(t){const e=this.wr(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pr(t,e){return this.Sr(t,(n,s)=>e(s))}addReference(t,e,n){return Ps(t,n)}removeReference(t,e,n){return Ps(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Ps(t,e)}br(t,e){return function(s,i){let a=!1;return yd(s).te(u=>_d(s,u,i).next(l=>(l&&(a=!0),b.resolve(!l)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(t,(a,u)=>{if(u<=e){const l=this.br(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,q.min()),_e(t).delete(function(p){return[0,Ct(p.path)]}(a))))});s.push(l)}}).next(()=>b.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Ps(t,e)}Sr(t,e){const n=_e(t);let s,i=zt.ce;return n.ee({index:ea},([a,u],{path:l,sequenceNumber:d})=>{a===0?(i!==zt.ce&&e(new O(Jt(s)),i),i=d,s=l):i=zt.ce}).next(()=>{i!==zt.ce&&e(new O(Jt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Ps(r,t){return _e(r).put(function(n,s){return{targetId:0,path:Ct(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.changes=new ue(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ht.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?b.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Oe(t).put(n)}removeEntry(t,e,n){return Oe(t).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],ni(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Dr(t,n)))}getEntry(t,e){let n=ht.newInvalidDocument(e);return Oe(t).ee({index:Ms,range:IDBKeyRange.only(hr(e))},(s,i)=>{n=this.Cr(e,i)}).next(()=>n)}vr(t,e){let n={size:0,document:ht.newInvalidDocument(e)};return Oe(t).ee({index:Ms,range:IDBKeyRange.only(hr(e))},(s,i)=>{n={document:this.Cr(e,i),size:si(i)}}).next(()=>n)}getEntries(t,e){let n=Bt();return this.Fr(t,e,(s,i)=>{const a=this.Cr(s,i);n=n.insert(s,a)}).next(()=>n)}Mr(t,e){let n=Bt(),s=new ut(O.comparator);return this.Fr(t,e,(i,a)=>{const u=this.Cr(i,a);n=n.insert(i,u),s=s.insert(i,si(a))}).next(()=>({documents:n,Or:s}))}Fr(t,e,n){if(e.isEmpty())return b.resolve();let s=new st(nl);e.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(hr(s.first()),hr(s.last())),a=s.getIterator();let u=a.getNext();return Oe(t).ee({index:Ms,range:i},(l,d,f)=>{const p=O.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&nl(u,p)<0;)n(u,null),u=a.getNext();u&&u.isEqual(p)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?f.j(hr(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),ni(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Oe(t).J(IDBKeyRange.bound(u,l,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let f=Bt();for(const p of d){const _=this.Cr(O.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);_.isFoundDocument()&&(Qr(e,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(t,e,n,s){let i=Bt();const a=el(e,n),u=el(e,Ut.max());return Oe(t).ee({index:lh,range:IDBKeyRange.bound(a,u,!0)},(l,d,f)=>{const p=this.Cr(O.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(t){return new k_(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return tl(t).get(Ro).next(e=>(U(!!e,20021),e))}Dr(t,e){return tl(t).put(Ro,e)}Cr(t,e){if(e){const n=I_(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(q.min())))return n}return ht.newInvalidDocument(t)}}function wd(r){return new N_(r)}class k_ extends vd{constructor(t,e){super(),this.Nr=t,this.trackRemovals=e,this.Br=new ue(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new st((i,a)=>$(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.Br.get(i);if(e.push(this.Nr.removeEntry(t,i,u.readTime)),a.isValidDocument()){const l=Lc(this.Nr.serializer,a);s=s.add(i.path.popLast());const d=si(l);n+=d-u.size,e.push(this.Nr.addEntry(t,i,l))}else if(n-=u.size,this.trackRemovals){const l=Lc(this.Nr.serializer,a.convertToNoDocument(q.min()));e.push(this.Nr.addEntry(t,i,l))}}),s.forEach(i=>{e.push(this.Nr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.Nr.updateMetadata(t,n)),b.waitFor(e)}getFromCache(t,e){return this.Nr.vr(t,e).next(n=>(this.Br.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.Nr.Mr(t,e).next(({documents:n,Or:s})=>(s.forEach((i,a)=>{this.Br.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function tl(r){return _t(r,Mr)}function Oe(r){return _t(r,Xs)}function hr(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function el(r,t){const e=t.documentKey.path.toArray();return[r,ni(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function nl(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=$(e[i],n[i]),s)return s;return s=$(e.length,n.length),s||(s=$(e[e.length-2],n[n.length-2]),s||$(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&Sr(n.mutation,s,Ot.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,Q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=Q()){const s=Yt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=pr();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=Yt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Q()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,s){let i=Bt();const a=Rr(),u=function(){return Rr()}();return e.forEach((l,d)=>{const f=n.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof ce)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Sr(f.mutation,d,f.mutation.getFieldMask(),nt.now())):a.set(d.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>u.set(d,new M_(f,a.get(d)??null))),u))}recalculateAndSaveOverlays(t,e){const n=Rr();let s=new ut((a,u)=>a-u),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=e.get(l);if(d===null)return;let f=n.get(l)||Ot.empty();f=u.applyToLocalView(d,f),n.set(l,f);const p=(s.get(u.batchId)||Q()).add(l);s=s.insert(u.batchId,p)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,f=l.value,p=Uh();f.forEach(_=>{if(!i.has(_)){const S=Hh(e.get(_),n.get(_));S!==null&&p.set(_,S),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,p))}return b.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Oh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):b.resolve(Yt());let u=Cr,l=i;return a.next(d=>b.forEach(d,(f,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),i.get(f)?b.resolve():this.remoteDocumentCache.getEntry(t,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,l,d,Q())).next(f=>({batchId:u,changes:Bh(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(n=>{let s=pr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=pr();return this.indexManager.getCollectionParents(t,i).next(u=>b.forEach(u,l=>{const d=function(p,_){return new Un(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(f=>{f.forEach((p,_)=>{a=a.insert(p,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,ht.newInvalidDocument(f)))});let u=pr();return a.forEach((l,d)=>{const f=i.get(l);f!==void 0&&Sr(f.mutation,d,Ot.empty(),nt.now()),Qr(e,d)&&(u=u.insert(l,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return b.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Mt(s.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(s){return{name:s.name,query:dd(s.bundledQuery),readTime:Mt(s.readTime)}}(e)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.overlays=new ut(O.comparator),this.qr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Yt();return b.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.St(t,e,i)}),b.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(n)),b.resolve()}getOverlaysForCollection(t,e,n){const s=Yt(),i=e.length+1,a=new O(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return b.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new ut((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let f=i.get(d.largestBatchId);f===null&&(f=Yt(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=Yt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>u.set(d,f)),!(u.size()>=s)););return b.resolve(u)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new da(e,n));let i=this.qr.get(e);i===void 0&&(i=Q(),this.qr.set(e,i)),this.qr.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.Qr=new st(Et.$r),this.Ur=new st(Et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new Et(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Gr(new Et(t,e))}zr(t,e){t.forEach(n=>this.removeReference(n,e))}jr(t){const e=new O(new et([])),n=new Et(e,t),s=new Et(e,t+1),i=[];return this.Ur.forEachInRange([n,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new O(new et([])),n=new Et(e,t),s=new Et(e,t+1);let i=Q();return this.Ur.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new Et(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class Et{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return O.comparator(t.key,e.key)||$(t.Yr,e.Yr)}static Kr(t,e){return $(t.Yr,e.Yr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new st(Et.$r)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new la(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Zr=this.Zr.add(new Et(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ei(n),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Ge:this.tr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Et(e,0),s=new Et(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,s],a=>{const u=this.Xr(a.Yr);i.push(u)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st($);return e.forEach(s=>{const i=new Et(s,0),a=new Et(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],u=>{n=n.add(u.Yr)})}),b.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;O.isDocumentKey(i)||(i=i.child(""));const a=new Et(new O(i),0);let u=new st($);return this.Zr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Yr)),!0)},a),b.resolve(this.ti(u))}ti(t){const e=[];return t.forEach(n=>{const s=this.Xr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){U(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return b.forEach(e.mutations,s=>{const i=new Et(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new Et(e,0),s=this.Zr.firstAfterOrEqual(n);return b.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(t){this.ri=t,this.docs=function(){return new ut(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return b.resolve(n?n.document.mutableCopy():ht.newInvalidDocument(e))}getEntries(t,e){let n=Bt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),b.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Bt();const a=e.path,u=new O(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Zo(ih(f),n)<=0||(s.has(f.key)||Qr(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(t,e,n,s){j(9500)}ii(t,e){return b.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new U_(this)}getSize(t){return b.resolve(this.size)}}class U_ extends vd{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(n)}),b.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(t){this.persistence=t,this.si=new ue(e=>Ye(e),Wr),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.oi=0,this._i=new _a,this.targetCount=0,this.ai=en.ur()}forEachTarget(t,e){return this.si.forEach((n,s)=>e(s)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),b.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new en(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Pr(e),b.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.si.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return b.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),b.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),b.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return b.resolve(n)}containsKey(t,e){return b.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t,e){this.ui={},this.overlays={},this.ci=new zt(0),this.li=!1,this.li=!0,this.hi=new F_,this.referenceDelegate=t(this),this.Pi=new q_(this),this.indexManager=new S_,this.remoteDocumentCache=function(s){return new B_(s)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new ld(e),this.Ii=new O_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new L_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new j_(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const s=new z_(this.ci.next());return this.referenceDelegate.Ei(),n(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(t,e){return b.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class z_ extends ah{constructor(t){super(),this.currentSequenceNumber=t}}class Ri{constructor(t){this.persistence=t,this.Ri=new _a,this.Vi=null}static mi(t){return new Ri(t)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),b.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),b.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,n=>{const s=O.fromPath(n);return this.gi(t,s).next(i=>{i||e.removeEntry(s,q.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return b.or([()=>b.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class ii{constructor(t,e){this.persistence=t,this.pi=new ue(n=>Ct(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Td(this,e)}static mi(t,e){return new ii(t,e)}Ei(){}di(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}pr(t,e){return b.forEach(this.pi,(n,s)=>this.br(t,n,s).next(i=>i?b.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(u=>{u||(n++,i.removeEntry(a,q.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ls(t.data.value)),e}br(t,e,n){return b.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return b.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t){this.serializer=t}k(t,e,n,s){const i=new di("createOrUpgrade",e);n<1&&s>=1&&(function(l){l.createObjectStore(Hr)}(t),function(l){l.createObjectStore(kr,{keyPath:eg}),l.createObjectStore(Ht,{keyPath:fc,autoIncrement:!0}).createIndex($e,mc,{unique:!0}),l.createObjectStore(Sn)}(t),rl(t),function(l){l.createObjectStore(je)}(t));let a=b.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(Pn),l.deleteObjectStore(xn),l.deleteObjectStore(Ke)}(t),rl(t)),a=a.next(()=>function(l){const d=l.store(Ke),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return d.put(Js,f)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(l,d){return d.store(Ht).J().next(p=>{l.deleteObjectStore(Ht),l.createObjectStore(Ht,{keyPath:fc,autoIncrement:!0}).createIndex($e,mc,{unique:!0});const _=d.store(Ht),S=p.map(C=>_.put(C));return b.waitFor(S)})}(t,i))),a=a.next(()=>{(function(l){l.createObjectStore(Vn,{keyPath:lg})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.yi(i))),n<6&&s>=6&&(a=a.next(()=>(function(l){l.createObjectStore(Mr)}(t),this.wi(i)))),n<7&&s>=7&&(a=a.next(()=>this.Si(i))),n<8&&s>=8&&(a=a.next(()=>this.bi(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.Di(i))),n<11&&s>=11&&(a=a.next(()=>{(function(l){l.createObjectStore(mi,{keyPath:hg})})(t),function(l){l.createObjectStore(pi,{keyPath:dg})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(l){const d=l.createObjectStore(gi,{keyPath:Ig});d.createIndex(xo,Eg,{unique:!1}),d.createIndex(mh,Tg,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(l){const d=l.createObjectStore(Xs,{keyPath:rg});d.createIndex(Ms,sg),d.createIndex(lh,ig)}(t)).next(()=>this.Ci(t,i)).next(()=>t.deleteObjectStore(je))),n<14&&s>=14&&(a=a.next(()=>this.Fi(t,i))),n<15&&s>=15&&(a=a.next(()=>function(l){l.createObjectStore(na,{keyPath:fg,autoIncrement:!0}).createIndex(So,mg,{unique:!1}),l.createObjectStore(vr,{keyPath:pg}).createIndex(dh,gg,{unique:!1}),l.createObjectStore(wr,{keyPath:_g}).createIndex(fh,yg,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore(vr).clear()}).next(()=>{e.objectStore(wr).clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(l){l.createObjectStore(ra,{keyPath:vg})})(t)})),n<18&&s>=18&&Fl()&&(a=a.next(()=>{e.objectStore(vr).clear()}).next(()=>{e.objectStore(wr).clear()})),a}wi(t){let e=0;return t.store(je).ee((n,s)=>{e+=si(s)}).next(()=>{const n={byteSize:e};return t.store(Mr).put(Ro,n)})}yi(t){const e=t.store(kr),n=t.store(Ht);return e.J().next(s=>b.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,Ge],[i.userId,i.lastAcknowledgedBatchId]);return n.J($e,a).next(u=>b.forEach(u,l=>{U(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const d=Ue(this.serializer,l);return gd(t,i.userId,d).next(()=>{})}))}))}Si(t){const e=t.store(Pn),n=t.store(je);return t.store(Ke).get(Js).next(s=>{const i=[];return n.ee((a,u)=>{const l=new et(a),d=function(p){return[0,Ct(p)]}(l);i.push(e.get(d).next(f=>f?b.resolve():(p=>e.put({targetId:0,path:Ct(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>b.waitFor(i))})}bi(t,e){t.createObjectStore(Or,{keyPath:cg});const n=e.store(Or),s=new ga,i=a=>{if(s.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:Ct(l)})}};return e.store(je).ee({X:!0},(a,u)=>{const l=new et(a);return i(l.popLast())}).next(()=>e.store(Sn).ee({X:!0},([a,u,l],d)=>{const f=Jt(u);return i(f.popLast())}))}Di(t){const e=t.store(xn);return e.ee((n,s)=>{const i=_r(s),a=hd(this.serializer,i);return e.put(a)})}Ci(t,e){const n=e.store(je),s=[];return n.ee((i,a)=>{const u=e.store(Xs),l=function(p){return p.document?new O(et.fromString(p.document.name).popFirst(5)):p.noDocument?O.fromSegments(p.noDocument.path):p.unknownDocument?O.fromSegments(p.unknownDocument.path):j(36783)}(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))}).next(()=>b.waitFor(s))}Fi(t,e){const n=e.store(Ht),s=wd(this.serializer),i=new ya(Ri.mi,this.serializer.yt);return n.J().next(a=>{const u=new Map;return a.forEach(l=>{let d=u.get(l.userId)??Q();Ue(this.serializer,l).keys().forEach(f=>d=d.add(f)),u.set(l.userId,d)}),b.forEach(u,(l,d)=>{const f=new vt(d),p=Ai.wt(this.serializer,f),_=i.getIndexManager(f),S=bi.wt(f,this.serializer,_,i.referenceDelegate);return new Ad(s,S,p,_).recalculateAndSaveOverlaysForDocumentKeys(new Po(e,zt.ce),l).next()})})}}function rl(r){r.createObjectStore(Pn,{keyPath:ag}).createIndex(ea,ug,{unique:!0}),r.createObjectStore(xn,{keyPath:"targetId"}).createIndex(hh,og,{unique:!0}),r.createObjectStore(Ke)}const ge="IndexedDbPersistence",lo=18e5,ho=5e3,fo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",G_="main";class Ia{constructor(t,e,n,s,i,a,u,l,d,f,p=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Mi=i,this.window=a,this.document=u,this.xi=d,this.Oi=f,this.Ni=p,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=_=>Promise.resolve(),!Ia.v())throw new k(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new D_(this,s),this.$i=e+G_,this.serializer=new ld(l),this.Ui=new we(this.$i,this.Ni,new $_(this.serializer)),this.hi=new T_,this.Pi=new P_(this.referenceDelegate,this.serializer),this.remoteDocumentCache=wd(this.serializer),this.Ii=new E_,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,f===!1&&kt(ge,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(P.FAILED_PRECONDITION,fo);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Pi.getHighestSequenceNumber(t))}).then(t=>{this.ci=new zt(t,this.xi)}).then(()=>{this.li=!0}).catch(t=>(this.Ui&&this.Ui.close(),Promise.reject(t)))}Ji(t){return this.Qi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ui.$(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Vs(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(t).next(e=>{e||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(t)).next(e=>this.isPrimary&&!e?this.Zi(t).next(()=>!1):!!e&&this.Xi(t).next(()=>!0))).catch(t=>{if(Ve(t))return N(ge,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return N(ge,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Mi.enqueueRetryable(()=>this.Qi(t)),this.isPrimary=t})}Hi(t){return dr(t).get(hn).next(e=>b.resolve(this.es(e)))}ts(t){return Vs(t).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,lo)){this.qi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=_t(e,Vn);return n.J().next(s=>{const i=this.ss(s,lo),a=s.filter(u=>i.indexOf(u)===-1);return b.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Ki)for(const e of t)this.Ki.removeItem(this._s(e.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(t){return!!t&&t.ownerId===this.clientId}Yi(t){return this.Oi?b.resolve(!0):dr(t).get(hn).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,ho)&&!this.us(e.ownerId)){if(this.es(e)&&this.networkEnabled)return!0;if(!this.es(e)){if(!e.allowTabSynchronization)throw new k(P.FAILED_PRECONDITION,fo);return!1}}return!(!this.networkEnabled||!this.inForeground)||Vs(t).J().next(n=>this.ss(n,ho).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&N(ge,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Hr,Vn],t=>{const e=new Po(t,zt.ce);return this.Zi(e).next(()=>this.ts(e))}),this.Ui.close(),this.Ps()}ss(t,e){return t.filter(n=>this.rs(n.updateTimeMs,e)&&!this.us(n.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",t=>Vs(t).J().next(e=>this.ss(e,lo).map(n=>n.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(t,e){return bi.wt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new x_(t,this.serializer.yt.databaseId)}getDocumentOverlayCache(t){return Ai.wt(this.serializer,t)}getBundleCache(){return this.Ii}runTransaction(t,e,n){N(ge,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(l){return l===18?bg:l===17?yh:l===16?Ag:l===15?sa:l===14?_h:l===13?gh:l===12?wg:l===11?ph:void j(60245)}(this.Ni);let a;return this.Ui.runTransaction(t,s,i,u=>(a=new Po(u,this.ci?this.ci.next():zt.ce),e==="readwrite-primary"?this.Hi(a).next(l=>!!l||this.Yi(a)).next(l=>{if(!l)throw kt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new k(P.FAILED_PRECONDITION,oh);return n(a)}).next(l=>this.Xi(a).next(()=>l)):this.Is(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Is(t){return dr(t).get(hn).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,ho)&&!this.us(e.ownerId)&&!this.es(e)&&!(this.Oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new k(P.FAILED_PRECONDITION,fo)})}Xi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return dr(t).put(hn,e)}static v(){return we.v()}Zi(t){const e=dr(t);return e.get(hn).next(n=>this.es(n)?(N(ge,"Releasing primary lease."),e.delete(hn)):b.resolve())}rs(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(kt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var t;typeof((t=this.window)==null?void 0:t.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;Ll()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(t){var e;try{const n=((e=this.Ki)==null?void 0:e.getItem(this._s(t)))!==null;return N(ge,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return kt(ge,"Failed to get zombied client id.",n),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(t){kt("Failed to set zombie client id.",t)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function dr(r){return _t(r,Hr)}function Vs(r){return _t(r,Vn)}function K_(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=s}static As(t,e){let n=Q(),s=Q();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ea(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Ll()?8:uh(Gs())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ys(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new H_;return this.Ss(t,e,a).next(u=>{if(i.result=u,this.Vs)return this.bs(t,e,a,u.size)})}).next(()=>i.result)}bs(t,e,n,s){return n.documentReadCount<this.fs?(_n()<=Y.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",yn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(_n()<=Y.DEBUG&&N("QueryEngine","Query:",yn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(_n()<=Y.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",yn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,$t(e))):b.resolve())}ys(t,e){if(Sc(e))return b.resolve(null);let n=$t(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Oo(e,null,"F"),n=$t(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=Q(...i);return this.ps.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(l=>{const d=this.Ds(e,u);return this.Cs(e,d,a,l.readTime)?this.ys(t,Oo(e,null,"F")):this.vs(t,d,e,l)}))})))}ws(t,e,n,s){return Sc(e)||s.isEqual(q.min())?b.resolve(null):this.ps.getDocuments(t,n).next(i=>{const a=this.Ds(e,i);return this.Cs(e,a,n,s)?b.resolve(null):(_n()<=Y.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),yn(e)),this.vs(t,a,e,Wp(s,Cr)).next(u=>u))})}Ds(t,e){let n=new st(Fh(t));return e.forEach((s,i)=>{Qr(t,i)&&(n=n.add(i))}),n}Cs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,n){return _n()<=Y.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",yn(e)),this.ps.getDocumentsMatchingQuery(t,e,Ut.min(),n)}vs(t,e,n,s){return this.ps.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="LocalStore",W_=3e8;class Q_{constructor(t,e,n,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new ut($),this.xs=new ue(i=>Ye(i),Wr),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ad(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function Rd(r,t,e,n){return new Q_(r,t,e,n)}async function Sd(r,t){const e=G(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let l=Q();for(const d of s){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){u.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return e.localDocuments.getDocuments(n,l).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:u}))})})}function X_(r,t){const e=G(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return function(u,l,d,f){const p=d.batch,_=p.keys();let S=b.resolve();return _.forEach(C=>{S=S.next(()=>f.getEntry(l,C)).next(D=>{const V=d.docVersions.get(C);U(V!==null,48541),D.version.compareTo(V)<0&&(p.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(l,p))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let l=Q();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function xd(r){const t=G(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function J_(r,t){const e=G(r),n=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const u=[];t.targetChanges.forEach((f,p)=>{const _=s.get(p);if(!_)return;u.push(e.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>e.Pi.addMatchingKeys(i,f.addedDocuments,p)));let S=_.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?S=S.withResumeToken(pt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,n)),s=s.insert(p,S),function(D,V,B){return D.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=W_?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(_,S,f)&&u.push(e.Pi.updateTargetData(i,S))});let l=Bt(),d=Q();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push(Y_(i,a,t.documentUpdates).next(f=>{l=f.ks,d=f.qs})),!n.isEqual(q.min())){const f=e.Pi.getLastRemoteSnapshotVersion(i).next(p=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(f)}return b.waitFor(u).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(e.Ms=s,i))}function Y_(r,t,e){let n=Q(),s=Q();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Bt();return e.forEach((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(q.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):N(Ta,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{ks:a,qs:s}})}function Z_(r,t){const e=G(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Ge),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function ty(r,t){const e=G(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Pi.getTargetData(n,t).next(i=>i?(s=i,b.resolve(s)):e.Pi.allocateTargetId(n).next(a=>(s=new se(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n})}async function $o(r,t,e){const n=G(r),s=n.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ve(a))throw a;N(Ta,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ms=n.Ms.remove(t),n.xs.delete(s.target)}function sl(r,t,e){const n=G(r);let s=q.min(),i=Q();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){const p=G(l),_=p.xs.get(f);return _!==void 0?b.resolve(p.Ms.get(_)):p.Pi.getTargetData(d,f)}(n,a,$t(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>n.Fs.getDocumentsMatchingQuery(a,t,e?s:q.min(),e?i:Q())).next(u=>(ey(n,Bg(t),u),{documents:u,Qs:i})))}function ey(r,t,e){let n=r.Os.get(t)||q.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Os.set(t,n)}class il{constructor(){this.activeTargetIds=Kg()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Pd{constructor(){this.Mo=new il,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new il,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="ConnectivityMonitor";class al{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){N(ol,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){N(ol,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs=null;function Go(){return Cs===null?Cs=function(){return 268435456+Math.round(2147483648*Math.random())}():Cs++,"0x"+Cs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="RestConnection",ry={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sy{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===Fr?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(t,e,n,s,i){const a=Go(),u=this.zo(t,e.toUriEncodedString());N(mo,`Sending RPC '${t}' ${a}:`,u,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:d}=new URL(u),f=li(d);return this.Jo(t,u,l,n,f).then(p=>(N(mo,`Received RPC '${t}' ${a}: `,p),p),p=>{throw bn(mo,`RPC '${t}' ${a} failed with error: `,p,"url: ",u,"request:",n),p})}Ho(t,e,n,s,i,a){return this.Go(t,e,n,s,i)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),n&&n.headers.forEach((s,i)=>t[i]=s)}zo(t,e){const n=ry[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class oy extends sy{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,s,i){const a=Go();return new Promise((u,l)=>{const d=new Ql;d.setWithCredentials(!0),d.listenOnce(Xl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ds.NO_ERROR:const p=d.getResponseJson();N(xt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),u(p);break;case Ds.TIMEOUT:N(xt,`RPC '${t}' ${a} timed out`),l(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ds.HTTP_ERROR:const _=d.getStatus();if(N(xt,`RPC '${t}' ${a} failed with status:`,_,"response text:",d.getResponseText()),_>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const D=function(B){const L=B.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(L)>=0?L:P.UNKNOWN}(C.status);l(new k(D,C.message))}else l(new k(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new k(P.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(xt,`RPC '${t}' ${a} completed.`)}});const f=JSON.stringify(s);N(xt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",f,n,15)})}T_(t,e,n){const s=Go(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Zl(),u=Yl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const f=i.join("");N(xt,`Creating RPC '${t}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);this.I_(p);let _=!1,S=!1;const C=new iy({Yo:V=>{S?N(xt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(_||(N(xt,`Opening RPC '${t}' stream ${s} transport.`),p.open(),_=!0),N(xt,`RPC '${t}' stream ${s} sending:`,V),p.send(V))},Zo:()=>p.close()}),D=(V,B,L)=>{V.listen(B,F=>{try{L(F)}catch(z){setTimeout(()=>{throw z},0)}})};return D(p,mr.EventType.OPEN,()=>{S||(N(xt,`RPC '${t}' stream ${s} transport opened.`),C.o_())}),D(p,mr.EventType.CLOSE,()=>{S||(S=!0,N(xt,`RPC '${t}' stream ${s} transport closed`),C.a_(),this.E_(p))}),D(p,mr.EventType.ERROR,V=>{S||(S=!0,bn(xt,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),C.a_(new k(P.UNAVAILABLE,"The operation could not be completed")))}),D(p,mr.EventType.MESSAGE,V=>{var B;if(!S){const L=V.data[0];U(!!L,16349);const F=L,z=(F==null?void 0:F.error)||((B=F[0])==null?void 0:B.error);if(z){N(xt,`RPC '${t}' stream ${s} received error:`,z);const Z=z.status;let W=function(I){const T=ft[I];if(T!==void 0)return Xh(T)}(Z),v=z.message;W===void 0&&(W=P.INTERNAL,v="Unknown error status: "+Z+" with message "+z.message),S=!0,C.a_(new k(W,v)),p.close()}else N(xt,`RPC '${t}' stream ${s} received:`,L),C.u_(L)}}),D(u,Jl.STAT_EVENT,V=>{V.stat===wo.PROXY?N(xt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===wo.NOPROXY&&N(xt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(){return typeof window<"u"?window:null}function qs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(r){return new c_(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="PersistentStream";class Cd{constructor(t,e,n,s,i,a,u,l){this.Mi=t,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vd(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(kt(e.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===e&&this.G_(n,s)},n=>{t(()=>{const s=new k(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return N(ul,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(N(ul,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uy extends Cd{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=d_(this.serializer,t),n=function(i){if(!("targetChange"in i))return q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Mt(a.readTime):q.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=jo(this.serializer),e.addTarget=function(i,a){let u;const l=a.target;if(u=Ys(l)?{documents:sd(i,l)}:{query:id(i,l).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Zh(i,a.resumeToken);const d=Lo(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){u.readTime=Ln(i,a.snapshotVersion.toTimestamp());const d=Lo(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=m_(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=jo(this.serializer),e.removeTarget=t,this.q_(e)}}class cy extends Cd{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return U(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,U(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){U(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=f_(t.writeResults,t.commitTime),n=Mt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=jo(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>ei(this.serializer,n))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{}class hy extends ly{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(t,Fo(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(P.UNKNOWN,i.toString())})}Ho(t,e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Ho(t,Fo(e,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(P.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class dy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(kt(e),this.aa=!1):N("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="RemoteStore";class fy{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{n.enqueueAndForget(async()=>{sn(this)&&(N(nn,"Restarting streams for network reachability change."),await async function(l){const d=G(l);d.Ea.add(4),await Yr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await xi(d)}(this))})}),this.Ra=new dy(n,s)}}async function xi(r){if(sn(r))for(const t of r.da)await t(!0)}async function Yr(r){for(const t of r.da)await t(!1)}function Dd(r,t){const e=G(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),ba(e)?Aa(e):zn(e).O_()&&wa(e,t))}function va(r,t){const e=G(r),n=zn(e);e.Ia.delete(t),n.O_()&&Nd(e,t),e.Ia.size===0&&(n.O_()?n.L_():sn(e)&&e.Ra.set("Unknown"))}function wa(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}zn(r).Y_(t)}function Nd(r,t){r.Va.Ue(t),zn(r).Z_(t)}function Aa(r){r.Va=new i_({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),zn(r).start(),r.Ra.ua()}function ba(r){return sn(r)&&!zn(r).x_()&&r.Ia.size>0}function sn(r){return G(r).Ea.size===0}function kd(r){r.Va=void 0}async function my(r){r.Ra.set("Online")}async function py(r){r.Ia.forEach((t,e)=>{wa(r,t)})}async function gy(r,t){kd(r),ba(r)?(r.Ra.ha(t),Aa(r)):r.Ra.set("Unknown")}async function _y(r,t,e){if(r.Ra.set("Online"),t instanceof Yh&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.Va.removeTarget(u))}(r,t)}catch(n){N(nn,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await oi(r,n)}else if(t instanceof Bs?r.Va.Ze(t):t instanceof Jh?r.Va.st(t):r.Va.tt(t),!e.isEqual(q.min()))try{const n=await xd(r.localStore);e.compareTo(n)>=0&&await function(i,a){const u=i.Va.Tt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(pt.EMPTY_BYTE_STRING,f.snapshotVersion)),Nd(i,l);const p=new se(f.target,l,d,f.sequenceNumber);wa(i,p)}),i.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){N(nn,"Failed to raise snapshot:",n),await oi(r,n)}}async function oi(r,t,e){if(!Ve(t))throw t;r.Ea.add(1),await Yr(r),r.Ra.set("Offline"),e||(e=()=>xd(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(nn,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await xi(r)})}function Md(r,t){return t().catch(e=>oi(r,e,t))}async function Zr(r){const t=G(r),e=Se(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ge;for(;yy(t);)try{const s=await Z_(t.localStore,n);if(s===null){t.Ta.length===0&&e.L_();break}n=s.batchId,Iy(t,s)}catch(s){await oi(t,s)}Od(t)&&Ld(t)}function yy(r){return sn(r)&&r.Ta.length<10}function Iy(r,t){r.Ta.push(t);const e=Se(r);e.O_()&&e.X_&&e.ea(t.mutations)}function Od(r){return sn(r)&&!Se(r).x_()&&r.Ta.length>0}function Ld(r){Se(r).start()}async function Ey(r){Se(r).ra()}async function Ty(r){const t=Se(r);for(const e of r.Ta)t.ea(e.mutations)}async function vy(r,t,e){const n=r.Ta.shift(),s=ha.from(n,t,e);await Md(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Zr(r)}async function wy(r,t){t&&Se(r).X_&&await async function(n,s){if(function(a){return n_(a)&&a!==P.ABORTED}(s.code)){const i=n.Ta.shift();Se(n).B_(),await Md(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zr(n)}}(r,t),Od(r)&&Ld(r)}async function cl(r,t){const e=G(r);e.asyncQueue.verifyOperationInProgress(),N(nn,"RemoteStore received new credentials");const n=sn(e);e.Ea.add(3),await Yr(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await xi(e)}async function Ay(r,t){const e=G(r);t?(e.Ea.delete(2),await xi(e)):t||(e.Ea.add(2),await Yr(e),e.Ra.set("Unknown"))}function zn(r){return r.ma||(r.ma=function(e,n,s){const i=G(e);return i.sa(),new uy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:my.bind(null,r),t_:py.bind(null,r),r_:gy.bind(null,r),H_:_y.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),ba(r)?Aa(r):r.Ra.set("Unknown")):(await r.ma.stop(),kd(r))})),r.ma}function Se(r){return r.fa||(r.fa=function(e,n,s){const i=G(e);return i.sa(),new cy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ey.bind(null,r),r_:wy.bind(null,r),ta:Ty.bind(null,r),na:vy.bind(null,r)}),r.da.push(async t=>{t?(r.fa.B_(),await Zr(r)):(await r.fa.stop(),r.Ta.length>0&&(N(nn,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ve,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new Ra(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sa(r,t){if(kt("AsyncQueue",`${t}: ${r}`),Ve(r))return new k(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{static emptySet(t){return new wn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=pr(),this.sortedSet=new ut(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof wn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new wn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.ga=new ut(O.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):j(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class Fn{constructor(t,e,n,s,i,a,u,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Fn(t,e,wn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ei(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Ry{constructor(){this.queries=hl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=G(e),i=s.queries;s.queries=hl(),i.forEach((a,u)=>{for(const l of u.Sa)l.onError(n)})})(this,new k(P.ABORTED,"Firestore shutting down"))}}function hl(){return new ue(r=>Lh(r),Ei)}async function Sy(r,t){const e=G(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(n=2):(i=new by,n=t.Da()?0:1);try{switch(n){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Sa(a,`Initialization of query '${yn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&xa(e)}async function xy(r,t){const e=G(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Py(r,t){const e=G(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.Sa)u.Fa(s)&&(n=!0);a.wa=s}}n&&xa(e)}function Vy(r,t,e){const n=G(r),s=n.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);n.queries.delete(t)}function xa(r){r.Ca.forEach(t=>{t.next()})}var Ko,dl;(dl=Ko||(Ko={})).Ma="default",dl.Cache="cache";class Cy{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Fn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Fn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Ko.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.key=t}}class jd{constructor(t){this.key=t}}class Dy{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Q(),this.mutatedKeys=Q(),this.eu=Fh(t),this.tu=new wn(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new ll,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,p)=>{const _=s.get(f),S=Qr(this.query,p)?p:null,C=!!_&&this.mutatedKeys.has(_.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;_&&S?_.data.isEqual(S.data)?C!==D&&(n.track({type:3,doc:S}),V=!0):this.su(_,S)||(n.track({type:2,doc:S}),V=!0,(l&&this.eu(S,l)>0||d&&this.eu(S,d)<0)&&(u=!0)):!_&&S?(n.track({type:0,doc:S}),V=!0):_&&!S&&(n.track({type:1,doc:_}),V=!0,(l||d)&&(u=!0)),V&&(S?(a=a.add(S),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{tu:a,iu:n,Cs:u,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((f,p)=>function(S,C){const D=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Rt:V})}};return D(S)-D(C)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(n),s=s??!1;const u=e&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,d=l!==this.Za;return this.Za=l,a.length!==0||d?{snapshot:new Fn(this.query,t.tu,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ll,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Q(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const e=[];return t.forEach(n=>{this.Xa.has(n)||e.push(new jd(n))}),this.Xa.forEach(n=>{t.has(n)||e.push(new Fd(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=Q();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Fn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Pa="SyncEngine";class Ny{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ky{constructor(t){this.key=t,this.hu=!1}}class My{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new ue(u=>Lh(u),Ei),this.Iu=new Map,this.Eu=new Set,this.du=new ut(O.comparator),this.Au=new Map,this.Ru=new _a,this.Vu={},this.mu=new Map,this.fu=en.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Oy(r,t,e=!0){const n=Gd(r);let s;const i=n.Tu.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Bd(n,t,e,!0),s}async function Ly(r,t){const e=Gd(r);await Bd(e,t,!0,!1)}async function Bd(r,t,e,n){const s=await ty(r.localStore,$t(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await Fy(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Dd(r.remoteStore,s),u}async function Fy(r,t,e,n,s){r.pu=(p,_,S)=>async function(D,V,B,L){let F=V.view.ru(B);F.Cs&&(F=await sl(D.localStore,V.query,!1).then(({documents:v})=>V.view.ru(v,F)));const z=L&&L.targetChanges.get(V.targetId),Z=L&&L.targetMismatches.get(V.targetId)!=null,W=V.view.applyChanges(F,D.isPrimaryClient,z,Z);return ml(D,V.targetId,W.au),W.snapshot}(r,p,_,S);const i=await sl(r.localStore,t,!0),a=new Dy(t,i.Qs),u=a.ru(i.documents),l=Jr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);ml(r,e,d.au);const f=new Ny(t,e,a);return r.Tu.set(t,f),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),d.snapshot}async function jy(r,t,e){const n=G(r),s=n.Tu.get(t),i=n.Iu.get(s.targetId);if(i.length>1)return n.Iu.set(s.targetId,i.filter(a=>!Ei(a,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await $o(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&va(n.remoteStore,s.targetId),Ho(n,s.targetId)}).catch(rn)):(Ho(n,s.targetId),await $o(n.localStore,s.targetId,!0))}async function By(r,t){const e=G(r),n=e.Tu.get(t),s=e.Iu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),va(e.remoteStore,n.targetId))}async function Uy(r,t,e){const n=Kd(r);try{const s=await function(a,u){const l=G(a),d=nt.now(),f=u.reduce((S,C)=>S.add(C.key),Q());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=Bt(),D=Q();return l.Ns.getEntries(S,f).next(V=>{C=V,C.forEach((B,L)=>{L.isValidDocument()||(D=D.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,C)).next(V=>{p=V;const B=[];for(const L of u){const F=t_(L,p.get(L.key).overlayedDocument);F!=null&&B.push(new ce(L.key,F,xh(F.value.mapValue),gt.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,B,u)}).next(V=>{_=V;const B=V.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(S,V.batchId,B)})}).then(()=>({batchId:_.batchId,changes:Bh(p)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.Vu[a.currentUser.toKey()];d||(d=new ut($)),d=d.insert(u,l),a.Vu[a.currentUser.toKey()]=d}(n,s.batchId,e),await ts(n,s.changes),await Zr(n.remoteStore)}catch(s){const i=Sa(s,"Failed to persist write");e.reject(i)}}async function Ud(r,t){const e=G(r);try{const n=await J_(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Au.get(i);a&&(U(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?U(a.hu,14607):s.removedDocuments.size>0&&(U(a.hu,42227),a.hu=!1))}),await ts(e,n,t)}catch(n){await rn(n)}}function fl(r,t,e){const n=G(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Tu.forEach((i,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=G(a);l.onlineState=u;let d=!1;l.queries.forEach((f,p)=>{for(const _ of p.Sa)_.va(u)&&(d=!0)}),d&&xa(l)}(n.eventManager,t),s.length&&n.Pu.H_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function qy(r,t,e){const n=G(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Au.get(t),i=s&&s.key;if(i){let a=new ut(O.comparator);a=a.insert(i,ht.newNoDocument(i,q.min()));const u=Q().add(i),l=new wi(q.min(),new Map,new ut($),a,u);await Ud(n,l),n.du=n.du.remove(i),n.Au.delete(t),Va(n)}else await $o(n.localStore,t,!1).then(()=>Ho(n,t,e)).catch(rn)}async function zy(r,t){const e=G(r),n=t.batch.batchId;try{const s=await X_(e.localStore,t);zd(e,n,null),qd(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ts(e,s)}catch(s){await rn(s)}}async function $y(r,t,e){const n=G(r);try{const s=await function(a,u){const l=G(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,u).next(p=>(U(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(d,p))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(n.localStore,t);zd(n,t,e),qd(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ts(n,s)}catch(s){await rn(s)}}function qd(r,t){(r.mu.get(t)||[]).forEach(e=>{e.resolve()}),r.mu.delete(t)}function zd(r,t,e){const n=G(r);let s=n.Vu[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Vu[n.currentUser.toKey()]=s}}function Ho(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(n=>{r.Ru.containsKey(n)||$d(r,n)})}function $d(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(va(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),Va(r))}function ml(r,t,e){for(const n of e)n instanceof Fd?(r.Ru.addReference(n.key,t),Gy(r,n)):n instanceof jd?(N(Pa,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||$d(r,n.key)):j(19791,{wu:n})}function Gy(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(N(Pa,"New document in limbo: "+e),r.Eu.add(n),Va(r))}function Va(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new O(et.fromString(t)),n=r.fu.next();r.Au.set(n,new ky(e)),r.du=r.du.insert(e,n),Dd(r.remoteStore,new se($t(Ii(e.path)),n,"TargetPurposeLimboResolution",zt.ce))}}async function ts(r,t,e){const n=G(r),s=[],i=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((u,l)=>{a.push(n.pu(l,t,e).then(d=>{var f;if((d||e)&&n.isPrimaryClient){const p=d?!d.fromCache:(f=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){s.push(d);const p=Ea.As(l.targetId,d);i.push(p)}}))}),await Promise.all(a),n.Pu.H_(s),await async function(l,d){const f=G(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(d,_=>b.forEach(_.Es,S=>f.persistence.referenceDelegate.addReference(p,_.targetId,S)).next(()=>b.forEach(_.ds,S=>f.persistence.referenceDelegate.removeReference(p,_.targetId,S)))))}catch(p){if(!Ve(p))throw p;N(Ta,"Failed to update sequence numbers: "+p)}for(const p of d){const _=p.targetId;if(!p.fromCache){const S=f.Ms.get(_),C=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(_,D)}}}(n.localStore,i))}async function Ky(r,t){const e=G(r);if(!e.currentUser.isEqual(t)){N(Pa,"User change. New user:",t.toKey());const n=await Sd(e.localStore,t);e.currentUser=t,function(i,a){i.mu.forEach(u=>{u.forEach(l=>{l.reject(new k(P.CANCELLED,a))})}),i.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ts(e,n.Ls)}}function Hy(r,t){const e=G(r),n=e.Au.get(t);if(n&&n.hu)return Q().add(n.key);{let s=Q();const i=e.Iu.get(t);if(!i)return s;for(const a of i){const u=e.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function Gd(r){const t=G(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ud.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=qy.bind(null,t),t.Pu.H_=Py.bind(null,t.eventManager),t.Pu.yu=Vy.bind(null,t.eventManager),t}function Kd(r){const t=G(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=zy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$y.bind(null,t),t}class Gr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Si(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Rd(this.persistence,new bd,t.initialUser,this.serializer)}Cu(t){return new ya(Ri.mi,this.serializer)}Du(t){return new Pd}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gr.provider={build:()=>new Gr};class Wy extends Gr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){U(this.persistence.referenceDelegate instanceof ii,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ed(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new ya(n=>ii.mi(n,e),this.serializer)}}class Qy extends Gr{constructor(t,e,n){super(),this.xu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xu.initialize(this,t),await Kd(this.xu.syncEngine),await Zr(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(t){return Rd(this.persistence,new bd,t.initialUser,this.serializer)}Fu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Ed(n,t.asyncQueue,e)}Mu(t,e){const n=new Yp(e,this.persistence);return new Jp(t.asyncQueue,n)}Cu(t){const e=K_(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new Ia(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,ay(),qs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(t){return new Pd}}class ai{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>fl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ky.bind(null,this.syncEngine),await Ay(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ry}()}createDatastore(t){const e=Si(t.databaseInfo.databaseId),n=function(i){return new oy(i)}(t.databaseInfo);return function(i,a,u,l){return new hy(i,a,u,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,u){return new fy(n,s,i,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>fl(this.syncEngine,e,0),function(){return al.v()?new al:new ny}())}createSyncEngine(t,e){return function(s,i,a,u,l,d,f){const p=new My(s,i,a,u,l,d);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=G(s);N(nn,"RemoteStore shutting down."),i.Ea.add(5),await Yr(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ai.provider={build:()=>new ai};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):kt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="FirestoreClient";class Jy{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=Yo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{N(xe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(N(xe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ve;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Sa(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function po(r,t){r.asyncQueue.verifyOperationInProgress(),N(xe,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Sd(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function pl(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Yy(r);N(xe,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>cl(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>cl(t.remoteStore,s)),r._onlineComponents=t}async function Yy(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(xe,"Using user provided OfflineComponentProvider");try{await po(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;bn("Error using user provided cache. Falling back to memory cache: "+e),await po(r,new Gr)}}else N(xe,"Using default OfflineComponentProvider"),await po(r,new Wy(void 0));return r._offlineComponents}async function Hd(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(xe,"Using user provided OnlineComponentProvider"),await pl(r,r._uninitializedComponentsProvider._online)):(N(xe,"Using default OnlineComponentProvider"),await pl(r,new ai))),r._onlineComponents}function Zy(r){return Hd(r).then(t=>t.syncEngine)}async function gl(r){const t=await Hd(r),e=t.eventManager;return e.onListen=Oy.bind(null,t.syncEngine),e.onUnlisten=jy.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Ly.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=By.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="firestore.googleapis.com",yl=!0;class Il{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qd,this.ssl=yl}else this.host=t.host,this.ssl=t.ssl??yl;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=pd;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Id)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wd(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Pi{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Il({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Il(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Lp;switch(n.type){case"firstParty":return new Up(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=_l.get(e);n&&(N("ComponentProvider","Removing Datastore"),_l.delete(e),n.terminate())}(this),Promise.resolve()}}function tI(r,t,e,n={}){var d;r=Qt(r,Pi);const s=li(t),i=r._getSettings(),a={...i,emulatorOptions:r._getEmulatorOptions()},u=`${t}:${e}`;s&&(Ml(`https://${u}`),Im("Firestore",!0)),i.host!==Qd&&i.host!==u&&bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:u,ssl:s,emulatorOptions:n};if(!xr(l,a)&&(r._setSettings(l),n.mockUserToken)){let f,p;if(typeof n.mockUserToken=="string")f=n.mockUserToken,p=vt.MOCK_USER;else{f=gm(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const _=n.mockUserToken.sub||n.mockUserToken.user_id;if(!_)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new vt(_)}r._authCredentials=new Fp(new eh(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new on(this.firestore,t,this._query)}}class dt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dt(this.firestore,t,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Kr(e,dt._jsonSchema))return new dt(t,n||null,new O(et.fromString(e.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:mt("string",dt._jsonSchemaVersion),referencePath:mt("string")};class Ae extends on{constructor(t,e,n){super(t,e,Ii(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dt(this.firestore,null,new O(t))}withConverter(t){return new Ae(this.firestore,t,this._path)}}function El(r,t,...e){if(r=Gt(r),rh("collection","path",t),r instanceof Pi){const n=et.fromString(t,...e);return uc(n),new Ae(r,null,n)}{if(!(r instanceof dt||r instanceof Ae))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(et.fromString(t,...e));return uc(n),new Ae(r.firestore,null,n)}}function We(r,t,...e){if(r=Gt(r),arguments.length===1&&(t=Yo.newId()),rh("doc","path",t),r instanceof Pi){const n=et.fromString(t,...e);return ac(n),new dt(r,null,new O(n))}{if(!(r instanceof dt||r instanceof Ae))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(et.fromString(t,...e));return ac(n),new dt(r.firestore,r instanceof Ae?r.converter:null,new O(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="AsyncQueue";class vl{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Vd(this,"async_queue_retry"),this._c=()=>{const n=qs();n&&N(Tl,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=qs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=qs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new ve;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Ve(t))throw t;N(Tl,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,kt("INTERNAL UNHANDLED ERROR: ",wl(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Ra.createAndSchedule(this,t,e,n,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&j(47125,{Pc:wl(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function wl(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class Pe extends Pi{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new vl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new vl(t),this._firestoreClient=void 0,await t}}}function eI(r,t,e){e||(e=Fr);const n=$l(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(xr(i,t))return s;throw new k(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new k(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Id)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&li(t.host)&&Ml(t.host),n.initialize({options:t,instanceIdentifier:e})}function nI(r,t){const e=typeof r=="object"?r:Ap(),n=typeof r=="string"?r:Fr,s=$l(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=mm("firestore");i&&tI(s,...i)}return s}function Ca(r){if(r._terminated)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||rI(r),r._firestoreClient}function rI(r){var n,s,i;const t=r._freezeSettings(),e=function(u,l,d,f){return new Sg(u,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Wd(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((i=t.localCache)!=null&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new Jy(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qt(pt.fromBase64String(t))}catch(e){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new qt(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Kr(t,qt._jsonSchema))return qt.fromBase64String(t.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:mt("string",qt._jsonSchemaVersion),bytes:mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(t){if(Kr(t,Zt._jsonSchema))return new Zt(t.latitude,t.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:mt("string",Zt._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:te._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Kr(t,te._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new te(t.vectorValues);throw new k(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}te._jsonSchemaVersion="firestore/vectorValue/1.0",te._jsonSchema={type:mt("string",te._jsonSchemaVersion),vectorValues:mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=/^__.*__$/;class iI{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new qn(t,this.data,e,this.fieldTransforms)}}class Xd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ce(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Jd(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:r})}}class Na{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Na({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ui(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Jd(this.Ac)&&sI.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class oI{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Si(t)}Cc(t,e,n,s=!1){return new Na({Ac:t,methodName:e,Dc:n,path:ct.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ns(r){const t=r._freezeSettings(),e=Si(r._databaseId);return new oI(r._databaseId,!!t.ignoreUndefinedProperties,e)}function ka(r,t,e,n,s,i={}){const a=r.Cc(i.merge||i.mergeFields?2:0,t,e,s);Ma("Data must be an object, but it was:",a,n);const u=tf(n,a);let l,d;if(i.merge)l=new Ot(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const _=Wo(t,p,e);if(!a.contains(_))throw new k(P.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);nf(f,_)||f.push(_)}l=new Ot(f),d=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,d=a.fieldTransforms;return new iI(new Vt(u),l,d)}class Vi extends Da{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Vi}}function Yd(r,t,e,n){const s=r.Cc(1,t,e);Ma("Data must be an object, but it was:",s,n);const i=[],a=Vt.empty();Ce(n,(l,d)=>{const f=Oa(t,l,e);d=Gt(d);const p=s.yc(f);if(d instanceof Vi)i.push(f);else{const _=rs(d,p);_!=null&&(i.push(f),a.set(f,_))}});const u=new Ot(i);return new Xd(a,u,s.fieldTransforms)}function Zd(r,t,e,n,s,i){const a=r.Cc(1,t,e),u=[Wo(t,n,e)],l=[s];if(i.length%2!=0)throw new k(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)u.push(Wo(t,i[_])),l.push(i[_+1]);const d=[],f=Vt.empty();for(let _=u.length-1;_>=0;--_)if(!nf(d,u[_])){const S=u[_];let C=l[_];C=Gt(C);const D=a.yc(S);if(C instanceof Vi)d.push(S);else{const V=rs(C,D);V!=null&&(d.push(S),f.set(S,V))}}const p=new Ot(d);return new Xd(f,p,a.fieldTransforms)}function aI(r,t,e,n=!1){return rs(e,r.Cc(n?4:3,t))}function rs(r,t){if(ef(r=Gt(r)))return Ma("Unsupported field value:",t,r),tf(r,t);if(r instanceof Da)return function(n,s){if(!Jd(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let l=rs(u,s.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Gt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Hg(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=nt.fromDate(n);return{timestampValue:Ln(s.serializer,i)}}if(n instanceof nt){const i=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ln(s.serializer,i)}}if(n instanceof Zt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qt)return{bytesValue:Zh(s.serializer,n._byteString)};if(n instanceof dt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ma(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof te)return function(a,u){return{mapValue:{fields:{[oa]:{stringValue:aa},[Cn]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return ca(u.serializer,d)})}}}}}}(n,s);throw s.Sc(`Unsupported field value: ${hi(n)}`)}(r,t)}function tf(r,t){const e={};return Ih(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ce(r,(n,s)=>{const i=rs(s,t.mc(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function ef(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof Zt||r instanceof qt||r instanceof dt||r instanceof Da||r instanceof te)}function Ma(r,t,e){if(!ef(e)||!sh(e)){const n=hi(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}function Wo(r,t,e){if((t=Gt(t))instanceof es)return t._internalPath;if(typeof t=="string")return Oa(r,t);throw ui("Field path arguments must be of type string or ",r,!1,void 0,e)}const uI=new RegExp("[~\\*/\\[\\]]");function Oa(r,t,e){if(t.search(uI)>=0)throw ui(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new es(...t.split("."))._internalPath}catch{throw ui(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ui(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new k(P.INVALID_ARGUMENT,u+r+l)}function nf(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ci("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class cI extends rf{data(){return super.data()}}function Ci(r,t){return typeof t=="string"?Oa(r,t):t instanceof es?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class La{}class sf extends La{}function hI(r,t,...e){let n=[];t instanceof La&&n.push(t),n=n.concat(e),function(i){const a=i.filter(l=>l instanceof Fa).length,u=i.filter(l=>l instanceof Di).length;if(a>1||a>0&&u>0)throw new k(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Di extends sf{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Di(t,e,n)}_apply(t){const e=this._parse(t);return of(t._query,e),new on(t.firestore,t.converter,Mo(t._query,e))}_parse(t){const e=ns(t.firestore);return function(i,a,u,l,d,f,p){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new k(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Rl(p,f);const C=[];for(const D of p)C.push(bl(l,i,D));_={arrayValue:{values:C}}}else _=bl(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Rl(p,f),_=aI(u,a,p,f==="in"||f==="not-in");return X.create(d,f,_)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function dI(r,t,e){const n=t,s=Ci("where",r);return Di._create(s,n,e)}class Fa extends La{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Fa(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:rt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)of(a,l),a=Mo(a,l)}(t._query,e),new on(t.firestore,t.converter,Mo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ja extends sf{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ja(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new k(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qr(i,a)}(t._query,this._field,this._direction);return new on(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Un(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function fI(r,t="asc"){const e=t,n=Ci("orderBy",r);return ja._create(n,e)}function bl(r,t,e){if(typeof(e=Gt(e))=="string"){if(e==="")throw new k(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Oh(t)&&e.indexOf("/")!==-1)throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(et.fromString(e));if(!O.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Br(r,new O(n))}if(e instanceof dt)return Br(r,e._key);throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hi(e)}.`)}function Rl(r,t){if(!Array.isArray(r)||r.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function of(r,t){const e=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class mI{convertValue(t,e="none"){switch(be(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ae(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw j(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ce(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var n,s,i;const e=(i=(s=(n=t.fields)==null?void 0:n[Cn].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>at(a.doubleValue));return new te(e)}convertGeoPoint(t){return new Zt(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=_i(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Lr(t));default:return null}}convertTimestamp(t){const e=oe(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=et.fromString(t);U(cd(n),9688,{name:t});const s=new Je(n.get(1),n.get(3)),i=new O(n.popFirst(5));return s.isEqual(e)||kt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class yr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qe extends rf{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ci("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Qe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Qe._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qe._jsonSchema={type:mt("string",Qe._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class zs extends Qe{data(t={}){return super.data(t)}}class An{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new yr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new zs(this._firestore,this._userDataWriter,n.key,n,new yr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new zs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new yr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new zs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new yr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:pI(u.type),doc:l,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=An._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Yo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(e.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function pI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:r})}}An._jsonSchemaVersion="firestore/querySnapshot/1.0",An._jsonSchema={type:mt("string",An._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class af extends mI{constructor(t){super(),this.firestore=t}convertBytes(t){return new qt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new dt(this.firestore,null,e)}}function Sl(r,t,e){r=Qt(r,dt);const n=Qt(r.firestore,Pe),s=Ba(r.converter,t,e);return ss(n,[ka(ns(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,gt.none())])}function uf(r,t,e,...n){r=Qt(r,dt);const s=Qt(r.firestore,Pe),i=ns(s);let a;return a=typeof(t=Gt(t))=="string"||t instanceof es?Zd(i,"updateDoc",r._key,t,e,n):Yd(i,"updateDoc",r._key,t),ss(s,[a.toMutation(r._key,gt.exists(!0))])}function gI(r){return ss(Qt(r.firestore,Pe),[new Xr(r._key,gt.none())])}function _I(r,t){const e=Qt(r.firestore,Pe),n=We(r),s=Ba(r.converter,t);return ss(e,[ka(ns(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,gt.exists(!1))]).then(()=>n)}function cf(r,...t){var l,d,f;r=Gt(r);let e={includeMetadataChanges:!1,source:"default"},n=0;typeof t[n]!="object"||Al(t[n])||(e=t[n++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Al(t[n])){const p=t[n];t[n]=(l=p.next)==null?void 0:l.bind(p),t[n+1]=(d=p.error)==null?void 0:d.bind(p),t[n+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,a,u;if(r instanceof dt)a=Qt(r.firestore,Pe),u=Ii(r._key.path),i={next:p=>{t[n]&&t[n](yI(a,r,p))},error:t[n+1],complete:t[n+2]};else{const p=Qt(r,on);a=Qt(p.firestore,Pe),u=p._query;const _=new af(a);i={next:S=>{t[n]&&t[n](new An(a,_,p,S))},error:t[n+1],complete:t[n+2]},lI(r._query)}return function(_,S,C,D){const V=new Xy(D),B=new Cy(S,V,C);return _.asyncQueue.enqueueAndForget(async()=>Sy(await gl(_),B)),()=>{V.Nu(),_.asyncQueue.enqueueAndForget(async()=>xy(await gl(_),B))}}(Ca(a),u,s,i)}function ss(r,t){return function(n,s){const i=new ve;return n.asyncQueue.enqueueAndForget(async()=>Uy(await Zy(n),s,i)),i.promise}(Ca(r),t)}function yI(r,t,e){const n=e.docs.get(t._key),s=new af(r);return new Qe(r,s,t._key,n,new yr(e.hasPendingWrites,e.fromCache),t.converter)}class II{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=vI(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function EI(r){return new II(r)}class TI{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=ai.provider,this._offlineComponentProvider={build:e=>new Qy(e,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}}function vI(r){return new TI(r==null?void 0:r.forceOwnership)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=ns(t)}set(t,e,n){this._verifyNotCommitted();const s=go(t,this._firestore),i=Ba(s.converter,e,n),a=ka(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,gt.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=go(t,this._firestore);let a;return a=typeof(e=Gt(e))=="string"||e instanceof es?Zd(this._dataReader,"WriteBatch.update",i._key,e,n,s):Yd(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,gt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=go(t,this._firestore);return this._mutations=this._mutations.concat(new Xr(e._key,gt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function go(r,t){if((r=Gt(r)).firestore!==t)throw new k(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(r){return Ca(r=Qt(r,Pe)),new wI(r,t=>ss(r,t))}(function(t,e=!0){(function(s){Bn=s})(wp),Hs(new Pr("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new Pe(new jp(n.getProvider("auth-internal")),new qp(a,n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Je(d.options.projectId,f)}(a,s),a);return i={useFetchStreams:e,...i},u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),vn(rc,sc,t),vn(rc,sc,"esm2020")})();const bI={apiKey:"AIzaSyBFOBEGWvfdQ_-8TgBtpG1-ccViyTQevSc",authDomain:"olsc-agrifeeds-trading.firebaseapp.com",projectId:"olsc-agrifeeds-trading",storageBucket:"olsc-agrifeeds-trading.firebasestorage.app",messagingSenderId:"188615089972",appId:"1:188615089972:web:e1311c138055bbddfccf61",measurementId:"G-ESY5FJM316"},xl=Gl(bI);let Wt;try{Wt=eI(xl,{localCache:EI({})})}catch(r){r.code==="failed-precondition"?console.warn("Firebase persistence failed: This can happen if multiple tabs are open. Falling back to memory-only cache."):r.code==="unimplemented"?console.error("Firebase persistence is not supported in this browser. Falling back to memory-only cache."):console.error(`An error occurred while initializing Firestore with persistence: ${r.message}`),Wt=nI(xl)}function Pl(r,t,e="asc",n=[]){const[s,i]=H.useState([]),[a,u]=H.useState(!0),[l,d]=H.useState(null),[f,p]=H.useState("syncing");H.useEffect(()=>{u(!0);const V=El(Wt,r),B=n.map(z=>dI(z.field,z.operator,z.value));t&&B.push(fI(t,e));const L=hI(V,...B),F=cf(L,z=>{const Z=[];z.forEach(W=>{Z.push({id:W.id,...W.data()})}),i(Z),u(!1),z.metadata.hasPendingWrites?p("syncing"):z.metadata.fromCache?p("offline"):p("synced")},z=>{console.error(z),d(z),u(!1),p("offline")});return()=>F()},[r,t,e,JSON.stringify(n)]);const _=H.useCallback(async V=>{try{await _I(El(Wt,r),V)}catch(B){throw console.error("Error adding document: ",B),B}},[r]),S=H.useCallback(async(V,B)=>{const L=We(Wt,r,V);try{await uf(L,B)}catch(F){throw console.error("Error updating document: ",F),F}},[r]),C=H.useCallback(async V=>{const B=We(Wt,r,V);try{await gI(B)}catch(L){throw console.error("Error deleting document: ",L),L}},[r]),D=H.useCallback(async V=>{const B=AI(Wt);V.forEach(L=>{const F=We(Wt,r,L.id);B.update(F,L.data)});try{await B.commit()}catch(L){throw console.error("Error batch updating documents: ",L),L}},[r]);return{data:s,loading:a,error:l,syncStatus:f,addItem:_,updateItem:S,deleteItem:C,updateMultipleItems:D}}function RI(r,t,e){const[n,s]=H.useState(e),[i,a]=H.useState(!0),[u,l]=H.useState(null),[d,f]=H.useState("syncing"),p=H.useRef(e);H.useEffect(()=>{p.current=e},[e]),H.useEffect(()=>{a(!0);const C=We(Wt,r,t),D=cf(C,V=>{V.exists()?s(V.data()):(console.log(`Document ${r}/${t} not found, creating with initial data.`),Sl(C,p.current).catch(B=>console.error("Error creating document:",B)),s(p.current)),a(!1),V.metadata.hasPendingWrites?f("syncing"):V.metadata.fromCache?f("offline"):f("synced")},V=>{console.error(V),l(V),a(!1),f("offline")});return()=>D()},[r,t]);const _=H.useCallback(async C=>{const D=We(Wt,r,t);try{await uf(D,C)}catch(V){throw console.error("Error updating document: ",V),V}},[r,t]),S=H.useCallback(async C=>{const D=We(Wt,r,t);try{await Sl(D,C)}catch(V){throw console.error("Error setting document: ",V),V}},[r,t]);return{data:n,loading:i,error:u,syncStatus:d,updateData:_,setData:S}}var It=(r=>(r.Dashboard="DASHBOARD",r.Transactions="TRANSACTIONS",r.Inventory="INVENTORY",r.Settings="SETTINGS",r))(It||{}),Ft=(r=>(r.Income="INCOME",r.Expense="EXPENSE",r))(Ft||{});const lf=({className:r})=>A.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:[A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"}),A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"})]}),hf=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),df=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})}),ff=({className:r})=>A.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:[A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),SI=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"})}),xI=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v16m8-8H4"})}),PI=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),QI=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),XI=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),JI=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),YI=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"})}),ZI=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"})}),tE=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"})}),eE=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})}),nE=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})}),VI=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),rE=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}),sE=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}),CI=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})}),DI=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),NI=({className:r})=>A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"})}),kI=({isOpen:r,onClose:t,onAddTransaction:e,inventory:n})=>{const[s,i]=H.useState(Ft.Income),[a,u]=H.useState(""),[l,d]=H.useState(""),[f,p]=H.useState(""),[_,S]=H.useState([]),[C,D]=H.useState(null),[V,B]=H.useState(1);H.useEffect(()=>{r&&(i(Ft.Income),u(""),d(""),p(new Date().toISOString().split("T")[0]),S([]),D(null),B(1))},[r]);const{totalAmount:L,autoDescription:F}=H.useMemo(()=>{if(s!==Ft.Income)return{totalAmount:0,autoDescription:""};let E=0;const g=[];return _.forEach(K=>{const yt=n.find($n=>$n.id===K.itemId);yt&&(E+=yt.price*K.quantity,g.push(`${yt.name} (x${K.quantity})`))}),{totalAmount:E,autoDescription:g.join(", ")||"Point of Sale Transaction"}},[_,n,s]);if(!r)return null;const z=E=>{i(E)},Z=E=>{E.stock<=0||(C===E.id?D(null):(D(E.id),B(1)))},W=()=>{!C||V<=0||(S(E=>{const g=E.findIndex(K=>K.itemId===C);if(g>-1){const K=[...E];return K[g].quantity+=V,K}return[...E,{itemId:C,quantity:V}]}),D(null))},v=E=>{S(g=>g.filter(K=>K.itemId!==E))},y=E=>{E.preventDefault();const g=f?new Date(f).toISOString():new Date().toISOString();if(s===Ft.Income)_.length>0&&(e({type:s,amount:L,description:F,date:g,items:_.map(K=>({inventoryItemId:K.itemId,quantity:K.quantity}))}),t());else{const K=parseFloat(a);l&&!isNaN(K)&&K>0&&(e({type:s,amount:K,description:l,date:g}),t())}},I=E=>E.toLocaleString("en-PH",{style:"currency",currency:"PHP"}),T=()=>{const E=[];return n.forEach(g=>{const K=C===g.id,yt=g.stock<=0&&!K;E.push(A.jsxs("button",{type:"button",onClick:()=>Z(g),disabled:yt,className:`relative p-3 rounded-lg text-left transition-all duration-200 shadow-sm border ${K?"ring-2 ring-primary ring-offset-2 ring-offset-muted bg-accent":"bg-background hover:bg-accent"} ${yt?"opacity-50 cursor-not-allowed":""}`,children:[A.jsx("p",{className:"font-bold text-foreground",children:g.name}),A.jsxs("p",{className:"text-xs text-muted-foreground",children:["(",g.unit,")"]}),A.jsx("p",{className:"text-lg font-semibold text-success mt-1",children:g.price.toLocaleString("en-PH",{style:"currency",currency:"PHP",maximumFractionDigits:0})}),g.stock<=0&&A.jsx("span",{className:"absolute top-1 right-1 text-xs bg-destructive text-destructive-foreground font-bold px-2 py-0.5 rounded-full",children:"Out"})]},g.id)),K&&E.push(A.jsx(MI,{item:g,quantity:V,setQuantity:B,onAddToCart:W},`${g.id}-editor`))}),A.jsx(A.Fragment,{children:A.jsxs("div",{className:"space-y-3",children:[A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-medium text-muted-foreground mb-2",children:"Select Products"}),A.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-64 overflow-y-auto bg-muted p-3 rounded-lg",children:n.length>0?E:A.jsx("p",{className:"col-span-full text-center text-muted-foreground py-4",children:"Add items to inventory first."})})]}),A.jsxs("div",{children:[A.jsx("h3",{className:"text-lg font-bold text-card-foreground mb-2",children:"Current Order"}),A.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto pr-2",children:_.length===0?A.jsx("p",{className:"text-center text-muted-foreground py-4",children:"Select a product to start."}):_.map(g=>{const K=n.find(yt=>yt.id===g.itemId);return K?A.jsxs("div",{className:"flex justify-between items-center bg-background border border-border p-2 rounded-md shadow-sm",children:[A.jsxs("div",{children:[A.jsx("p",{className:"font-semibold text-foreground",children:K.name}),A.jsxs("p",{className:"text-sm text-muted-foreground",children:[g.quantity," ",K.unit," x ",I(K.price)]})]}),A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("p",{className:"font-bold text-foreground",children:I(g.quantity*K.price)}),A.jsx("button",{type:"button",onClick:()=>v(g.itemId),className:"text-muted-foreground hover:text-destructive",children:A.jsx(PI,{className:"w-5 h-5"})})]})]},g.itemId):null})})]}),A.jsxs("div",{className:"p-3 bg-info/10 rounded-lg text-right",children:[A.jsx("span",{className:"text-sm text-info",children:"Total Amount"}),A.jsx("p",{className:"text-2xl font-bold text-info",children:I(L)})]})]})})},w=()=>A.jsxs(A.Fragment,{children:[A.jsxs("div",{children:[A.jsx("label",{htmlFor:"amount",className:"block text-sm font-medium text-muted-foreground mb-1",children:"Amount"}),A.jsx("input",{type:"number",id:"amount",value:a,onChange:E=>u(E.target.value),required:!0,min:"0.01",step:"0.01",placeholder:"0.00",className:"w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"})]}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"expense_description",className:"block text-sm font-medium text-muted-foreground mb-1",children:"Description"}),A.jsx("input",{type:"text",id:"expense_description",value:l,onChange:E=>d(E.target.value),required:!0,placeholder:"e.g., Rent, Utilities",className:"w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"})]})]});return A.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in p-4",children:A.jsxs("div",{className:"bg-card border border-border rounded-lg shadow-xl w-full max-w-lg animate-slide-in-up max-h-[90vh] flex flex-col",role:"dialog","aria-modal":"true",children:[A.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-border",children:[A.jsx("h2",{className:"text-xl font-bold text-card-foreground",children:"Add Transaction"}),A.jsx("button",{onClick:t,className:"text-muted-foreground hover:text-foreground",children:A.jsx(xI,{className:"w-6 h-6 rotate-45"})})]}),A.jsxs("form",{onSubmit:y,className:"p-4 sm:p-6 space-y-4 overflow-y-auto",children:[A.jsxs("div",{className:"grid grid-cols-2 gap-2 rounded-lg p-1 bg-muted",children:[A.jsx("button",{type:"button",onClick:()=>z(Ft.Income),className:`py-2 rounded-md font-semibold transition-colors ${s===Ft.Income?"bg-success text-success-foreground shadow":"text-muted-foreground"}`,children:"Income"}),A.jsx("button",{type:"button",onClick:()=>z(Ft.Expense),className:`py-2 rounded-md font-semibold transition-colors ${s===Ft.Expense?"bg-error text-error-foreground shadow":"text-muted-foreground"}`,children:"Expense"})]}),s===Ft.Income?T():w(),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"date",className:"block text-sm font-medium text-muted-foreground mb-1",children:"Date"}),A.jsx("input",{type:"date",id:"date",value:f,onChange:E=>p(E.target.value),required:!0,className:"w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"})]})]}),A.jsx("div",{className:"p-4 sm:p-6 border-t border-border mt-auto",children:A.jsx("button",{type:"submit",form:"add-transaction-form",onClick:y,className:"w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-md disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed",disabled:s===Ft.Income&&_.length===0||s===Ft.Expense&&(!l||!a),children:"Add Transaction"})})]})})},MI=({item:r,quantity:t,setQuantity:e,onAddToCart:n})=>{const s=a=>{const u=Math.floor(t);e(u+a)},i=["Kilo","kg","L","Litre"].some(a=>r.unit.toLowerCase().includes(a.toLowerCase()));return A.jsxs("div",{className:"col-span-2 sm:col-span-3 p-3 bg-accent rounded-b-lg -mt-1 mb-2 animate-fade-in border-t-2 border-dashed border-border",children:[A.jsxs("p",{className:"font-semibold mb-2 text-sm text-center text-accent-foreground",children:["Enter Quantity (",r.unit,")"]}),i&&A.jsx("div",{className:"flex justify-center gap-2 mb-3",children:[.25,.5,.75].map(a=>A.jsx("button",{type:"button",onClick:()=>s(a),className:"w-10 h-8 text-sm font-bold bg-background border border-border rounded-md hover:bg-muted transition",children:a===.25?"¼":a===.5?"½":"¾"},a))}),A.jsxs("div",{className:"flex items-center gap-2 mb-3 justify-center",children:[A.jsx("button",{type:"button",onClick:()=>e(a=>Math.max(i?.25:1,a-1)),className:"w-10 h-10 text-2xl font-bold bg-background border border-border rounded-md hover:bg-muted transition",children:"-"}),A.jsx("input",{type:"number",value:t,onChange:a=>e(Number(a.target.value)),step:i?"0.01":"1",className:"w-20 h-10 text-center font-bold text-lg bg-background border border-input rounded-md focus:ring-ring focus:border-ring"}),A.jsx("button",{type:"button",onClick:()=>e(a=>a+1),className:"w-10 h-10 text-2xl font-bold bg-background border border-border rounded-md hover:bg-muted transition",children:"+"})]}),A.jsx("button",{onClick:n,className:"w-full bg-primary/80 text-primary-foreground font-bold py-2 px-4 rounded-lg hover:bg-primary transition-colors",children:"Add to Cart"})]})},OI=({label:r,icon:t,isActive:e,onClick:n})=>A.jsxs("button",{onClick:n,className:`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${e?"text-primary":"text-muted-foreground hover:text-foreground"}`,children:[t,A.jsx("span",{className:"text-xs font-medium",children:r}),e&&A.jsx("div",{className:"h-1 w-8 bg-primary rounded-full mt-1"})]}),LI=({currentPage:r,setCurrentPage:t})=>{const e=[{page:It.Dashboard,label:"Dashboard",icon:A.jsx(lf,{className:"w-6 h-6 mb-1"})},{page:It.Transactions,label:"Transactions",icon:A.jsx(hf,{className:"w-6 h-6 mb-1"})},{page:It.Inventory,label:"Inventory",icon:A.jsx(df,{className:"w-6 h-6 mb-1"})},{page:It.Settings,label:"Settings",icon:A.jsx(ff,{className:"w-6 h-6 mb-1"})}];return A.jsx("div",{className:"fixed bottom-0 left-0 right-0 h-16 bg-card shadow-[0_-2px_10px_rgba(0,0,0,0.2)] flex md:hidden border-t border-border",children:e.map(n=>A.jsx(OI,{label:n.label,icon:n.icon,isActive:r===n.page,onClick:()=>t(n.page)},n.page))})},FI=({status:r})=>{const t={synced:{Icon:CI,text:"Synced",color:"text-success",animation:""},syncing:{Icon:DI,text:"Syncing...",color:"text-info",animation:"animate-spin"},offline:{Icon:NI,text:"Offline",color:"text-warning",animation:""}},{Icon:e,text:n,color:s,animation:i}=t[r];return A.jsxs("div",{className:`flex items-center gap-2 text-sm font-semibold ${s}`,children:[A.jsx(e,{className:`w-5 h-5 ${i}`}),A.jsx("span",{className:"hidden sm:inline",children:n})]})};class jI extends H.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,e){console.error("Error caught by boundary:",t,e)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:A.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen p-4 bg-background",children:A.jsxs("div",{className:"text-center max-w-md",children:[A.jsx("div",{className:"mb-4 text-6xl",children:"⚠️"}),A.jsx("h1",{className:"text-2xl font-bold text-foreground mb-2",children:"Something went wrong"}),A.jsx("p",{className:"text-muted-foreground mb-4",children:"We encountered an unexpected error. Please try refreshing the page."}),A.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",children:"Refresh Page"}),!1]})}):this.props.children}}const Vl=H.lazy(()=>ci(()=>import("./DashboardPage-C1VQJKCU.js"),__vite__mapDeps([0,1,2,3]))),BI=H.lazy(()=>ci(()=>import("./TransactionsPage-DzpMCDeo.js"),__vite__mapDeps([4,1,2]))),UI=H.lazy(()=>ci(()=>import("./InventoryPage-XCAQWKgW.js"),__vite__mapDeps([5,1,2]))),qI=H.lazy(()=>ci(()=>import("./SettingsPage-DIxwvQEz.js"),__vite__mapDeps([6,1,2,3]))),fr=()=>A.jsx("div",{className:"flex items-center justify-center h-64",children:A.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"})}),zI=()=>{const[r,t]=H.useState(It.Dashboard),[e,n]=H.useState(!1),{data:s,updateData:i,syncStatus:a}=RI("config","settings",{storeName:"Olesco Agrivet Trading",storeLogo:"",profitMarginDivisor:.83,theme:"dark"}),{data:u,addItem:l,deleteItem:d,syncStatus:f}=Pl("transactions","date","desc"),{data:p,addItem:_,updateItem:S,deleteItem:C,updateMultipleItems:D,syncStatus:V}=Pl("inventory","name","asc");H.useEffect(()=>{const E=window.document.documentElement;E.classList.remove("light","dark"),E.classList.add(s.theme)},[s.theme]);const B=async E=>{if(await l(E),E.type===Ft.Income&&E.items){const g=E.items.map(K=>{const yt=p.find($n=>$n.id===K.inventoryItemId);return yt?{id:yt.id,data:{stock:Math.max(0,yt.stock-K.quantity)}}:null}).filter(K=>K!==null);g.length>0&&await D(g)}},L=async E=>{window.confirm("Are you sure you want to delete this transaction? This action will not restock items.")&&await d(E.id)},F=async E=>{if("id"in E){const{id:g,...K}=E;await S(g,K)}else await _(E)},z=async E=>{window.confirm("Are you sure you want to delete this item? This cannot be undone.")&&await C(E)},Z=async E=>{await i(E)},W=E=>{i({theme:E})},v=H.useMemo(()=>{const E=[a,f,V];return E.includes("syncing")?"syncing":E.includes("offline")?"offline":"synced"},[a,f,V]),y={[It.Dashboard]:{title:"Dashboard"},[It.Transactions]:{title:"Transaction History",subtitle:"Review past sales and expenses."},[It.Inventory]:{title:"Inventory Management"},[It.Settings]:{title:"Settings",subtitle:"Configure your application and store details."}},I=()=>{switch(r){case It.Dashboard:return A.jsx(H.Suspense,{fallback:A.jsx(fr,{}),children:A.jsx(Vl,{transactions:u,inventory:p,onNavigate:t})});case It.Transactions:return A.jsx(H.Suspense,{fallback:A.jsx(fr,{}),children:A.jsx(BI,{transactions:u,inventory:p,onDeleteTransaction:L})});case It.Inventory:return A.jsx(H.Suspense,{fallback:A.jsx(fr,{}),children:A.jsx(UI,{inventory:p,onSaveItem:F,onDeleteItem:z,profitMarginDivisor:s.profitMarginDivisor})});case It.Settings:return A.jsx(H.Suspense,{fallback:A.jsx(fr,{}),children:A.jsx(qI,{settings:s,onSaveSettings:Z,transactions:u,inventory:p,theme:s.theme,setTheme:W})});default:return A.jsx(H.Suspense,{fallback:A.jsx(fr,{}),children:A.jsx(Vl,{transactions:u,inventory:p,onNavigate:t})})}},T=_o.memo(()=>A.jsxs("div",{className:"flex items-center justify-between gap-4 p-4",children:[A.jsxs("div",{className:"flex items-center gap-4",children:[s.storeLogo?A.jsx("img",{src:s.storeLogo,alt:"Store Logo",className:"w-12 h-12 rounded-md object-cover flex-shrink-0 bg-secondary"}):A.jsx("div",{className:"w-12 h-12 rounded-md flex-shrink-0 bg-secondary flex items-center justify-center text-muted-foreground",children:A.jsx(VI,{className:"w-full h-full p-1 opacity-50"})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-sm text-muted-foreground",children:"Welcome to"}),A.jsx("h1",{className:"text-xl font-bold text-foreground",children:s.storeName})]})]}),A.jsx("div",{className:"flex-shrink-0",children:A.jsx(FI,{status:v})})]})),w=_o.memo(()=>A.jsxs("aside",{className:"w-64 bg-card shadow-lg hidden md:flex flex-col border-r border-border",children:[A.jsx("div",{className:"border-b border-border",children:A.jsx(T,{})}),A.jsx("nav",{className:"flex flex-col gap-2 p-4",children:[{page:It.Dashboard,label:"Dashboard",icon:A.jsx(lf,{className:"w-5 h-5"})},{page:It.Transactions,label:"Transactions",icon:A.jsx(hf,{className:"w-5 h-5"})},{page:It.Inventory,label:"Inventory",icon:A.jsx(df,{className:"w-5 h-5"})},{page:It.Settings,label:"Settings",icon:A.jsx(ff,{className:"w-5 h-5"})}].map(E=>A.jsxs("button",{onClick:()=>t(E.page),className:`flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${r===E.page?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"}`,children:[E.icon,A.jsx("span",{className:"font-semibold",children:E.label})]},E.page))})]}));return A.jsxs("div",{className:"flex min-h-screen bg-background",children:[A.jsx(w,{}),A.jsxs("div",{className:"flex-1 flex flex-col max-w-full overflow-hidden",children:[A.jsx("div",{className:"md:hidden border-b border-border bg-card",children:A.jsx(T,{})}),A.jsxs("main",{className:"flex-1 p-4 md:p-8 pb-20 md:pb-8 overflow-y-auto",children:[A.jsxs("div",{className:"mb-6",children:[A.jsx("h2",{className:"text-3xl font-bold text-foreground",children:y[r].title}),y[r].subtitle&&A.jsx("p",{className:"text-muted-foreground mt-1",children:y[r].subtitle})]}),I()]})]}),A.jsx("button",{onClick:()=>n(!0),className:"fixed bottom-20 right-4 md:bottom-8 md:right-8 w-16 h-16 bg-primary rounded-full text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-transform transform hover:scale-110 z-40","aria-label":"Add Transaction",children:A.jsx(SI,{className:"w-8 h-8"})}),A.jsx(kI,{isOpen:e,onClose:()=>n(!1),onAddTransaction:B,inventory:p}),A.jsx(LI,{currentPage:r,setCurrentPage:t})]})},$I=()=>A.jsx(jI,{children:A.jsx(zI,{})}),mf=document.getElementById("root");if(!mf)throw new Error("Could not find root element to mount to");const GI=nm.createRoot(mf);GI.render(A.jsx(_o.StrictMode,{children:A.jsx($I,{})}));export{nE as C,eE as L,sE as M,VI as O,It as P,XI as S,Ft as T,ZI as W,JI as a,YI as b,tE as c,PI as d,xI as e,QI as f,rE as g,A as j};
