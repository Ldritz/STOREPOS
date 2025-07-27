const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DashboardPage-NPgtiF5K.js","assets/charts-BYcMWlQw.js","assets/vendor-CWc6w16D.js","assets/Card-DM3-g5-z.js","assets/TransactionsPage-CslZnfTT.js","assets/InventoryPage-BWNTIYAa.js","assets/SettingsPage-DzpoIiao.js"])))=>i.map(i=>d[i]);
import{r as Xf,a as Jf,g as Yf}from"./vendor-CWc6w16D.js";import{r as H,R as Sr}from"./charts-BYcMWlQw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();var so={exports:{}},ar={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu;function Zf(){if(Gu)return ar;Gu=1;var r=Xf(),t=Symbol.for("react.element"),e=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(u,l,d){var f,p={},_=null,R=null;d!==void 0&&(_=""+d),l.key!==void 0&&(_=""+l.key),l.ref!==void 0&&(R=l.ref);for(f in l)n.call(l,f)&&!i.hasOwnProperty(f)&&(p[f]=l[f]);if(u&&u.defaultProps)for(f in l=u.defaultProps,l)p[f]===void 0&&(p[f]=l[f]);return{$$typeof:t,type:u,key:_,ref:R,props:p,_owner:s.current}}return ar.Fragment=e,ar.jsx=a,ar.jsxs=a,ar}var Ku;function tm(){return Ku||(Ku=1,so.exports=Zf()),so.exports}var v=tm(),bs={},Hu;function em(){if(Hu)return bs;Hu=1;var r=Jf();return bs.createRoot=r.createRoot,bs.hydrateRoot=r.hydrateRoot,bs}var nm=em();const rm=Yf(nm),sm="modulepreload",im=function(r){return"/"+r},Wu={},li=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),l=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));s=a(e.map(d=>{if(d=im(d),d in Wu)return;Wu[d]=!0;const f=d.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":sm,f||(_.as="script"),_.crossOrigin="",_.href=d,l&&_.setAttribute("nonce",l),document.head.appendChild(_),f)return new Promise((R,C)=>{_.addEventListener("load",R),_.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a}return s.then(a=>{for(const u of a||[])u.status==="rejected"&&i(u.reason);return t().catch(i)})},om=()=>{};var Qu={};/**
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
 */const Ol=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},am=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],u=r[e++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|u>>4;let _=(u&15)<<2|d>>6,R=d&63;l||(R=64,a||(_=64)),n.push(e[f],e[p],e[_],e[R])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Ol(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):am(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],u=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const p=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||u==null||d==null||p==null)throw new um;const _=i<<2|u>>4;if(n.push(_),d!==64){const R=u<<4&240|d>>2;if(n.push(R),p!==64){const C=d<<6&192|p;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class um extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cm=function(r){const t=Ol(r);return Ll.encodeByteArray(t,!0)},Gs=function(r){return cm(r).replace(/\./g,"")},lm=function(r){try{return Ll.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Fl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hm=()=>Fl().__FIREBASE_DEFAULTS__,dm=()=>{if(typeof process>"u"||typeof Qu>"u")return;const r=Qu.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},fm=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&lm(r[1]);return t&&JSON.parse(t)},Zo=()=>{try{return om()||hm()||dm()||fm()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},mm=r=>{var t,e;return(e=(t=Zo())==null?void 0:t.emulatorHosts)==null?void 0:e[r]},pm=r=>{const t=mm(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},jl=()=>{var r;return(r=Zo())==null?void 0:r.config};/**
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
 */class gm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function hi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bl(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function _m(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Gs(JSON.stringify(e)),Gs(JSON.stringify(a)),""].join(".")}const Ir={};function ym(){const r={prod:[],emulator:[]};for(const t of Object.keys(Ir))Ir[t]?r.emulator.push(t):r.prod.push(t);return r}function Im(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let Xu=!1;function Em(r,t){if(typeof window>"u"||typeof document>"u"||!hi(window.location.host)||Ir[r]===t||Ir[r]||Xu)return;Ir[r]=t;function e(_){return`__firebase__banner__${_}`}const n="__firebase__banner",i=ym().prod.length>0;function a(){const _=document.getElementById(n);_&&_.remove()}function u(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,R){_.setAttribute("width","24"),_.setAttribute("id",R),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function d(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Xu=!0,a()},_}function f(_,R){_.setAttribute("id",R),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=Im(n),R=e("text"),C=document.getElementById(R)||document.createElement("span"),D=e("learnmore"),V=document.getElementById(D)||document.createElement("a"),B=e("preprendIcon"),L=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const F=_.element;u(F),f(V,D);const z=d();l(L,B),F.append(L,C,V,z),document.body.appendChild(F)}i?(C.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Ks(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ul(){var t;const r=(t=Zo())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ql(){return!Ul()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zl(){return!Ul()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function $l(){try{return typeof indexedDB=="object"}catch{return!1}}function vm(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const Tm="FirebaseError";class jn extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Tm,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gl.prototype.create)}}class Gl{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?wm(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new jn(s,u,n)}}function wm(r,t){return r.replace(Am,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Am=/\{\$([^}]+)}/g;function Pr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(Ju(i)&&Ju(a)){if(!Pr(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function Ju(r){return r!==null&&typeof r=="object"}/**
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
 */function Gt(r){return r&&r._delegate?r._delegate:r}class Vr{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class bm{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new gm;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Rm(t))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=Le){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Le){return this.instances.has(t)}getOptions(t=Le){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&t(i,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:xm(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Le){return this.component?this.component.multipleInstances?t:Le:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xm(r){return r===Le?void 0:r}function Rm(r){return r.instantiationMode==="EAGER"}/**
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
 */class Sm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new bm(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Y||(Y={}));const Pm={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Vm=Y.INFO,Cm={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Dm=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Cm[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Kl{constructor(t){this.name=t,this._logLevel=Vm,this._logHandler=Dm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Pm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Nm=(r,t)=>t.some(e=>r instanceof e);let Yu,Zu;function km(){return Yu||(Yu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mm(){return Zu||(Zu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hl=new WeakMap,yo=new WeakMap,Wl=new WeakMap,io=new WeakMap,ta=new WeakMap;function Om(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(Ie(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Hl.set(e,r)}).catch(()=>{}),ta.set(t,r),t}function Lm(r){if(yo.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});yo.set(r,t)}let Io={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return yo.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Wl.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ie(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Fm(r){Io=r(Io)}function jm(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(oo(this),t,...e);return Wl.set(n,t.sort?t.sort():[t]),Ie(n)}:Mm().includes(r)?function(...t){return r.apply(oo(this),t),Ie(Hl.get(this))}:function(...t){return Ie(r.apply(oo(this),t))}}function Bm(r){return typeof r=="function"?jm(r):(r instanceof IDBTransaction&&Lm(r),Nm(r,km())?new Proxy(r,Io):r)}function Ie(r){if(r instanceof IDBRequest)return Om(r);if(io.has(r))return io.get(r);const t=Bm(r);return t!==r&&(io.set(r,t),ta.set(t,r)),t}const oo=r=>ta.get(r);function Um(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),u=Ie(a);return n&&a.addEventListener("upgradeneeded",l=>{n(Ie(a.result),l.oldVersion,l.newVersion,Ie(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const qm=["get","getKey","getAll","getAllKeys","count"],zm=["put","add","delete","clear"],ao=new Map;function tc(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(ao.get(t))return ao.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=zm.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||qm.includes(e)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&l.done]))[0]};return ao.set(t,i),i}Fm(r=>({...r,get:(t,e,n)=>tc(t,e)||r.get(t,e,n),has:(t,e)=>!!tc(t,e)||r.has(t,e)}));/**
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
 */class $m{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Gm(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Gm(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Eo="@firebase/app",ec="0.14.0";/**
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
 */const ie=new Kl("@firebase/app"),Km="@firebase/app-compat",Hm="@firebase/analytics-compat",Wm="@firebase/analytics",Qm="@firebase/app-check-compat",Xm="@firebase/app-check",Jm="@firebase/auth",Ym="@firebase/auth-compat",Zm="@firebase/database",tp="@firebase/data-connect",ep="@firebase/database-compat",np="@firebase/functions",rp="@firebase/functions-compat",sp="@firebase/installations",ip="@firebase/installations-compat",op="@firebase/messaging",ap="@firebase/messaging-compat",up="@firebase/performance",cp="@firebase/performance-compat",lp="@firebase/remote-config",hp="@firebase/remote-config-compat",dp="@firebase/storage",fp="@firebase/storage-compat",mp="@firebase/firestore",pp="@firebase/ai",gp="@firebase/firestore-compat",_p="firebase",yp="12.0.0";/**
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
 */const vo="[DEFAULT]",Ip={[Eo]:"fire-core",[Km]:"fire-core-compat",[Wm]:"fire-analytics",[Hm]:"fire-analytics-compat",[Xm]:"fire-app-check",[Qm]:"fire-app-check-compat",[Jm]:"fire-auth",[Ym]:"fire-auth-compat",[Zm]:"fire-rtdb",[tp]:"fire-data-connect",[ep]:"fire-rtdb-compat",[np]:"fire-fn",[rp]:"fire-fn-compat",[sp]:"fire-iid",[ip]:"fire-iid-compat",[op]:"fire-fcm",[ap]:"fire-fcm-compat",[up]:"fire-perf",[cp]:"fire-perf-compat",[lp]:"fire-rc",[hp]:"fire-rc-compat",[dp]:"fire-gcs",[fp]:"fire-gcs-compat",[mp]:"fire-fst",[gp]:"fire-fst-compat",[pp]:"fire-vertex","fire-js":"fire-js",[_p]:"fire-js-all"};/**
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
 */const Hs=new Map,Ep=new Map,To=new Map;function nc(r,t){try{r.container.addComponent(t)}catch(e){ie.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Ws(r){const t=r.name;if(To.has(t))return ie.debug(`There were multiple attempts to register component ${t}.`),!1;To.set(t,r);for(const e of Hs.values())nc(e,r);for(const e of Ep.values())nc(e,r);return!0}function Ql(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function vp(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Tp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ee=new Gl("app","Firebase",Tp);/**
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
 */class wp{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
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
 */const Ap=yp;function Xl(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:vo,automaticDataCollectionEnabled:!0,...t},s=n.name;if(typeof s!="string"||!s)throw Ee.create("bad-app-name",{appName:String(s)});if(e||(e=jl()),!e)throw Ee.create("no-options");const i=Hs.get(s);if(i){if(Pr(e,i.options)&&Pr(n,i.config))return i;throw Ee.create("duplicate-app",{appName:s})}const a=new Sm(s);for(const l of To.values())a.addComponent(l);const u=new wp(e,n,a);return Hs.set(s,u),u}function bp(r=vo){const t=Hs.get(r);if(!t&&r===vo&&jl())return Xl();if(!t)throw Ee.create("no-app",{appName:r});return t}function Tn(r,t,e){let n=Ip[r]??r;e&&(n+=`-${e}`);const s=n.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${n}" with version "${t}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ie.warn(a.join(" "));return}Ws(new Vr(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
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
 */const xp="firebase-heartbeat-database",Rp=1,Cr="firebase-heartbeat-store";let uo=null;function Jl(){return uo||(uo=Um(xp,Rp,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Cr)}catch(e){console.warn(e)}}}}).catch(r=>{throw Ee.create("idb-open",{originalErrorMessage:r.message})})),uo}async function Sp(r){try{const e=(await Jl()).transaction(Cr),n=await e.objectStore(Cr).get(Yl(r));return await e.done,n}catch(t){if(t instanceof jn)ie.warn(t.message);else{const e=Ee.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ie.warn(e.message)}}}async function rc(r,t){try{const n=(await Jl()).transaction(Cr,"readwrite");await n.objectStore(Cr).put(t,Yl(r)),await n.done}catch(e){if(e instanceof jn)ie.warn(e.message);else{const n=Ee.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ie.warn(n.message)}}}function Yl(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Pp=1024,Vp=30;class Cp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Np(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sc();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Vp){const a=kp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ie.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sc(),{heartbeatsToSend:n,unsentEntries:s}=Dp(this._heartbeatsCache.heartbeats),i=Gs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ie.warn(e),""}}}function sc(){return new Date().toISOString().substring(0,10)}function Dp(r,t=Pp){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ic(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ic(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Np{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $l()?vm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Sp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return rc(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return rc(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function ic(r){return Gs(JSON.stringify({version:2,heartbeats:r})).length}function kp(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
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
 */function Mp(r){Ws(new Vr("platform-logger",t=>new $m(t),"PRIVATE")),Ws(new Vr("heartbeat",t=>new Cp(t),"PRIVATE")),Tn(Eo,ec,r),Tn(Eo,ec,"esm2020"),Tn("fire-js","")}Mp("");var Op="firebase",Lp="12.0.0";/**
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
 */Tn(Op,Lp,"app");var oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ve,Zl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,y){function E(){}E.prototype=y.prototype,w.D=y.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(T,A,I){for(var g=Array(arguments.length-2),K=2;K<arguments.length;K++)g[K-2]=arguments[K];return y.prototype[A].apply(T,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,E){E||(E=0);var T=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)T[A]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(A=0;16>A;++A)T[A]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=w.g[0],E=w.g[1],A=w.g[2];var I=w.g[3],g=y+(I^E&(A^I))+T[0]+3614090360&4294967295;y=E+(g<<7&4294967295|g>>>25),g=I+(A^y&(E^A))+T[1]+3905402710&4294967295,I=y+(g<<12&4294967295|g>>>20),g=A+(E^I&(y^E))+T[2]+606105819&4294967295,A=I+(g<<17&4294967295|g>>>15),g=E+(y^A&(I^y))+T[3]+3250441966&4294967295,E=A+(g<<22&4294967295|g>>>10),g=y+(I^E&(A^I))+T[4]+4118548399&4294967295,y=E+(g<<7&4294967295|g>>>25),g=I+(A^y&(E^A))+T[5]+1200080426&4294967295,I=y+(g<<12&4294967295|g>>>20),g=A+(E^I&(y^E))+T[6]+2821735955&4294967295,A=I+(g<<17&4294967295|g>>>15),g=E+(y^A&(I^y))+T[7]+4249261313&4294967295,E=A+(g<<22&4294967295|g>>>10),g=y+(I^E&(A^I))+T[8]+1770035416&4294967295,y=E+(g<<7&4294967295|g>>>25),g=I+(A^y&(E^A))+T[9]+2336552879&4294967295,I=y+(g<<12&4294967295|g>>>20),g=A+(E^I&(y^E))+T[10]+4294925233&4294967295,A=I+(g<<17&4294967295|g>>>15),g=E+(y^A&(I^y))+T[11]+2304563134&4294967295,E=A+(g<<22&4294967295|g>>>10),g=y+(I^E&(A^I))+T[12]+1804603682&4294967295,y=E+(g<<7&4294967295|g>>>25),g=I+(A^y&(E^A))+T[13]+4254626195&4294967295,I=y+(g<<12&4294967295|g>>>20),g=A+(E^I&(y^E))+T[14]+2792965006&4294967295,A=I+(g<<17&4294967295|g>>>15),g=E+(y^A&(I^y))+T[15]+1236535329&4294967295,E=A+(g<<22&4294967295|g>>>10),g=y+(A^I&(E^A))+T[1]+4129170786&4294967295,y=E+(g<<5&4294967295|g>>>27),g=I+(E^A&(y^E))+T[6]+3225465664&4294967295,I=y+(g<<9&4294967295|g>>>23),g=A+(y^E&(I^y))+T[11]+643717713&4294967295,A=I+(g<<14&4294967295|g>>>18),g=E+(I^y&(A^I))+T[0]+3921069994&4294967295,E=A+(g<<20&4294967295|g>>>12),g=y+(A^I&(E^A))+T[5]+3593408605&4294967295,y=E+(g<<5&4294967295|g>>>27),g=I+(E^A&(y^E))+T[10]+38016083&4294967295,I=y+(g<<9&4294967295|g>>>23),g=A+(y^E&(I^y))+T[15]+3634488961&4294967295,A=I+(g<<14&4294967295|g>>>18),g=E+(I^y&(A^I))+T[4]+3889429448&4294967295,E=A+(g<<20&4294967295|g>>>12),g=y+(A^I&(E^A))+T[9]+568446438&4294967295,y=E+(g<<5&4294967295|g>>>27),g=I+(E^A&(y^E))+T[14]+3275163606&4294967295,I=y+(g<<9&4294967295|g>>>23),g=A+(y^E&(I^y))+T[3]+4107603335&4294967295,A=I+(g<<14&4294967295|g>>>18),g=E+(I^y&(A^I))+T[8]+1163531501&4294967295,E=A+(g<<20&4294967295|g>>>12),g=y+(A^I&(E^A))+T[13]+2850285829&4294967295,y=E+(g<<5&4294967295|g>>>27),g=I+(E^A&(y^E))+T[2]+4243563512&4294967295,I=y+(g<<9&4294967295|g>>>23),g=A+(y^E&(I^y))+T[7]+1735328473&4294967295,A=I+(g<<14&4294967295|g>>>18),g=E+(I^y&(A^I))+T[12]+2368359562&4294967295,E=A+(g<<20&4294967295|g>>>12),g=y+(E^A^I)+T[5]+4294588738&4294967295,y=E+(g<<4&4294967295|g>>>28),g=I+(y^E^A)+T[8]+2272392833&4294967295,I=y+(g<<11&4294967295|g>>>21),g=A+(I^y^E)+T[11]+1839030562&4294967295,A=I+(g<<16&4294967295|g>>>16),g=E+(A^I^y)+T[14]+4259657740&4294967295,E=A+(g<<23&4294967295|g>>>9),g=y+(E^A^I)+T[1]+2763975236&4294967295,y=E+(g<<4&4294967295|g>>>28),g=I+(y^E^A)+T[4]+1272893353&4294967295,I=y+(g<<11&4294967295|g>>>21),g=A+(I^y^E)+T[7]+4139469664&4294967295,A=I+(g<<16&4294967295|g>>>16),g=E+(A^I^y)+T[10]+3200236656&4294967295,E=A+(g<<23&4294967295|g>>>9),g=y+(E^A^I)+T[13]+681279174&4294967295,y=E+(g<<4&4294967295|g>>>28),g=I+(y^E^A)+T[0]+3936430074&4294967295,I=y+(g<<11&4294967295|g>>>21),g=A+(I^y^E)+T[3]+3572445317&4294967295,A=I+(g<<16&4294967295|g>>>16),g=E+(A^I^y)+T[6]+76029189&4294967295,E=A+(g<<23&4294967295|g>>>9),g=y+(E^A^I)+T[9]+3654602809&4294967295,y=E+(g<<4&4294967295|g>>>28),g=I+(y^E^A)+T[12]+3873151461&4294967295,I=y+(g<<11&4294967295|g>>>21),g=A+(I^y^E)+T[15]+530742520&4294967295,A=I+(g<<16&4294967295|g>>>16),g=E+(A^I^y)+T[2]+3299628645&4294967295,E=A+(g<<23&4294967295|g>>>9),g=y+(A^(E|~I))+T[0]+4096336452&4294967295,y=E+(g<<6&4294967295|g>>>26),g=I+(E^(y|~A))+T[7]+1126891415&4294967295,I=y+(g<<10&4294967295|g>>>22),g=A+(y^(I|~E))+T[14]+2878612391&4294967295,A=I+(g<<15&4294967295|g>>>17),g=E+(I^(A|~y))+T[5]+4237533241&4294967295,E=A+(g<<21&4294967295|g>>>11),g=y+(A^(E|~I))+T[12]+1700485571&4294967295,y=E+(g<<6&4294967295|g>>>26),g=I+(E^(y|~A))+T[3]+2399980690&4294967295,I=y+(g<<10&4294967295|g>>>22),g=A+(y^(I|~E))+T[10]+4293915773&4294967295,A=I+(g<<15&4294967295|g>>>17),g=E+(I^(A|~y))+T[1]+2240044497&4294967295,E=A+(g<<21&4294967295|g>>>11),g=y+(A^(E|~I))+T[8]+1873313359&4294967295,y=E+(g<<6&4294967295|g>>>26),g=I+(E^(y|~A))+T[15]+4264355552&4294967295,I=y+(g<<10&4294967295|g>>>22),g=A+(y^(I|~E))+T[6]+2734768916&4294967295,A=I+(g<<15&4294967295|g>>>17),g=E+(I^(A|~y))+T[13]+1309151649&4294967295,E=A+(g<<21&4294967295|g>>>11),g=y+(A^(E|~I))+T[4]+4149444226&4294967295,y=E+(g<<6&4294967295|g>>>26),g=I+(E^(y|~A))+T[11]+3174756917&4294967295,I=y+(g<<10&4294967295|g>>>22),g=A+(y^(I|~E))+T[2]+718787259&4294967295,A=I+(g<<15&4294967295|g>>>17),g=E+(I^(A|~y))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(A+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+I&4294967295}n.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var E=y-this.blockSize,T=this.B,A=this.h,I=0;I<y;){if(A==0)for(;I<=E;)s(this,w,I),I+=this.blockSize;if(typeof w=="string"){for(;I<y;)if(T[A++]=w.charCodeAt(I++),A==this.blockSize){s(this,T),A=0;break}}else for(;I<y;)if(T[A++]=w[I++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=y},n.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var E=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=E&255,E/=256;for(this.u(w),w=Array(16),y=E=0;4>y;++y)for(var T=0;32>T;T+=8)w[E++]=this.g[y]>>>T&255;return w};function i(w,y){var E=u;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=y(w)}function a(w,y){this.h=y;for(var E=[],T=!0,A=w.length-1;0<=A;A--){var I=w[A]|0;T&&I==y||(E[A]=I,T=!1)}this.g=E}var u={};function l(w){return-128<=w&&128>w?i(w,function(y){return new a([y|0],0>y?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return V(d(-w));for(var y=[],E=1,T=0;w>=E;T++)y[T]=w/E|0,E*=4294967296;return new a(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return V(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=d(Math.pow(y,8)),T=p,A=0;A<w.length;A+=8){var I=Math.min(8,w.length-A),g=parseInt(w.substring(A,A+I),y);8>I?(I=d(Math.pow(y,I)),T=T.j(I).add(d(g))):(T=T.j(E),T=T.add(d(g)))}return T}var p=l(0),_=l(1),R=l(16777216);r=a.prototype,r.m=function(){if(D(this))return-V(this).m();for(var w=0,y=1,E=0;E<this.g.length;E++){var T=this.i(E);w+=(0<=T?T:4294967296+T)*y,y*=4294967296}return w},r.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(D(this))return"-"+V(this).toString(w);for(var y=d(Math.pow(w,6)),E=this,T="";;){var A=z(E,y).g;E=B(E,A.j(y));var I=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=A,C(E))return I+T;for(;6>I.length;)I="0"+I;T=I+T}},r.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function D(w){return w.h==-1}r.l=function(w){return w=B(this,w),D(w)?-1:C(w)?0:1};function V(w){for(var y=w.g.length,E=[],T=0;T<y;T++)E[T]=~w.g[T];return new a(E,~w.h).add(_)}r.abs=function(){return D(this)?V(this):this},r.add=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],T=0,A=0;A<=y;A++){var I=T+(this.i(A)&65535)+(w.i(A)&65535),g=(I>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);T=g>>>16,I&=65535,g&=65535,E[A]=g<<16|I}return new a(E,E[E.length-1]&-2147483648?-1:0)};function B(w,y){return w.add(V(y))}r.j=function(w){if(C(this)||C(w))return p;if(D(this))return D(w)?V(this).j(V(w)):V(V(this).j(w));if(D(w))return V(this.j(V(w)));if(0>this.l(R)&&0>w.l(R))return d(this.m()*w.m());for(var y=this.g.length+w.g.length,E=[],T=0;T<2*y;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<w.g.length;A++){var I=this.i(T)>>>16,g=this.i(T)&65535,K=w.i(A)>>>16,It=w.i(A)&65535;E[2*T+2*A]+=g*It,L(E,2*T+2*A),E[2*T+2*A+1]+=I*It,L(E,2*T+2*A+1),E[2*T+2*A+1]+=g*K,L(E,2*T+2*A+1),E[2*T+2*A+2]+=I*K,L(E,2*T+2*A+2)}for(T=0;T<y;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=y;T<2*y;T++)E[T]=0;return new a(E,0)};function L(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function F(w,y){this.g=w,this.h=y}function z(w,y){if(C(y))throw Error("division by zero");if(C(w))return new F(p,p);if(D(w))return y=z(V(w),y),new F(V(y.g),V(y.h));if(D(y))return y=z(w,V(y)),new F(V(y.g),y.h);if(30<w.g.length){if(D(w)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var E=_,T=y;0>=T.l(w);)E=Z(E),T=Z(T);var A=W(E,1),I=W(T,1);for(T=W(T,2),E=W(E,2);!C(T);){var g=I.add(T);0>=g.l(w)&&(A=A.add(E),I=g),T=W(T,1),E=W(E,1)}return y=B(w,A.j(y)),new F(A,y)}for(A=p;0<=w.l(y);){for(E=Math.max(1,Math.floor(w.m()/y.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),I=d(E),g=I.j(y);D(g)||0<g.l(w);)E-=T,I=d(E),g=I.j(y);C(I)&&(I=_),A=A.add(I),w=B(w,g)}return new F(A,w)}r.A=function(w){return z(this,w).h},r.and=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],T=0;T<y;T++)E[T]=this.i(T)&w.i(T);return new a(E,this.h&w.h)},r.or=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],T=0;T<y;T++)E[T]=this.i(T)|w.i(T);return new a(E,this.h|w.h)},r.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],T=0;T<y;T++)E[T]=this.i(T)^w.i(T);return new a(E,this.h^w.h)};function Z(w){for(var y=w.g.length+1,E=[],T=0;T<y;T++)E[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(E,w.h)}function W(w,y){var E=y>>5;y%=32;for(var T=w.g.length-E,A=[],I=0;I<T;I++)A[I]=0<y?w.i(I+E)>>>y|w.i(I+E+1)<<32-y:w.i(I+E);return new a(A,w.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Zl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,ve=a}).apply(typeof oc<"u"?oc:typeof self<"u"?self:typeof window<"u"?window:{});var xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var th,mr,eh,Ns,wo,nh,rh,sh;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof xs=="object"&&xs];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var x=o[m];if(!(x in h))break t;h=h[x]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,m=!1,x={next:function(){if(!m&&h<o.length){var S=h++;return{value:c(S,o[S]),done:!1}}return m=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function p(o,c,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,m),o.apply(c,x)}}return function(){return o.apply(c,arguments)}}function _(o,c,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,x,S){for(var M=Array(arguments.length-2),it=2;it<arguments.length;it++)M[it-2]=arguments[it];return c.prototype[x].apply(m,M)}}function D(o){const c=o.length;if(0<c){const h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function V(o,c){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(l(m)){const x=o.length||0,S=m.length||0;o.length=x+S;for(let M=0;M<S;M++)o[x+M]=m[M]}else o.push(m)}}class B{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var Z=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function W(o,c,h){for(const m in o)c.call(h,o[m],m,o)}function w(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function y(o){const c={};for(const h in o)c[h]=o[h];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,m;for(let x=1;x<arguments.length;x++){m=arguments[x];for(h in m)o[h]=m[h];for(let S=0;S<E.length;S++)h=E[S],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function A(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function I(o){u.setTimeout(()=>{throw o},0)}function g(){var o=ki;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class K{constructor(){this.h=this.g=null}add(c,h){const m=It.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var It=new B(()=>new $n,o=>o.reset());class $n{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Gn,Kn=!1,ki=new K,Ga=()=>{const o=u.Promise.resolve(void 0);Gn=()=>{o.then(gf)}};var gf=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(h){I(h)}var c=It;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Kn=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function At(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};var _f=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function Hn(o,c){if(At.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(Z){t:{try{z(c.nodeName);var x=!0;break t}catch{}x=!1}x||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:yf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Hn.aa.h.call(this)}}C(Hn,At);var yf={2:"touch",3:"pen",4:"mouse"};Hn.prototype.h=function(){Hn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var os="closure_listenable_"+(1e6*Math.random()|0),If=0;function Ef(o,c,h,m,x){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=x,this.key=++If,this.da=this.fa=!1}function as(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function us(o){this.src=o,this.g={},this.h=0}us.prototype.add=function(o,c,h,m,x){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var M=Oi(o,c,m,x);return-1<M?(c=o[M],h||(c.fa=!1)):(c=new Ef(c,this.src,S,!!m,x),c.fa=h,o.push(c)),c};function Mi(o,c){var h=c.type;if(h in o.g){var m=o.g[h],x=Array.prototype.indexOf.call(m,c,void 0),S;(S=0<=x)&&Array.prototype.splice.call(m,x,1),S&&(as(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Oi(o,c,h,m){for(var x=0;x<o.length;++x){var S=o[x];if(!S.da&&S.listener==c&&S.capture==!!h&&S.ha==m)return x}return-1}var Li="closure_lm_"+(1e6*Math.random()|0),Fi={};function Ka(o,c,h,m,x){if(Array.isArray(c)){for(var S=0;S<c.length;S++)Ka(o,c[S],h,m,x);return null}return h=Qa(h),o&&o[os]?o.K(c,h,d(m)?!!m.capture:!1,x):vf(o,c,h,!1,m,x)}function vf(o,c,h,m,x,S){if(!c)throw Error("Invalid event type");var M=d(x)?!!x.capture:!!x,it=Bi(o);if(it||(o[Li]=it=new us(o)),h=it.add(c,h,m,M,S),h.proxy)return h;if(m=Tf(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)_f||(x=M),x===void 0&&(x=!1),o.addEventListener(c.toString(),m,x);else if(o.attachEvent)o.attachEvent(Wa(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Tf(){function o(h){return c.call(o.src,o.listener,h)}const c=wf;return o}function Ha(o,c,h,m,x){if(Array.isArray(c))for(var S=0;S<c.length;S++)Ha(o,c[S],h,m,x);else m=d(m)?!!m.capture:!!m,h=Qa(h),o&&o[os]?(o=o.i,c=String(c).toString(),c in o.g&&(S=o.g[c],h=Oi(S,h,m,x),-1<h&&(as(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[c],o.h--)))):o&&(o=Bi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Oi(c,h,m,x)),(h=-1<o?c[o]:null)&&ji(h))}function ji(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[os])Mi(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent(Wa(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=Bi(c))?(Mi(h,o),h.h==0&&(h.src=null,c[Li]=null)):as(o)}}}function Wa(o){return o in Fi?Fi[o]:Fi[o]="on"+o}function wf(o,c){if(o.da)o=!0;else{c=new Hn(c,this);var h=o.listener,m=o.ha||o.src;o.fa&&ji(o),o=h.call(m,c)}return o}function Bi(o){return o=o[Li],o instanceof us?o:null}var Ui="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qa(o){return typeof o=="function"?o:(o[Ui]||(o[Ui]=function(c){return o.handleEvent(c)}),o[Ui])}function bt(){le.call(this),this.i=new us(this),this.M=this,this.F=null}C(bt,le),bt.prototype[os]=!0,bt.prototype.removeEventListener=function(o,c,h,m){Ha(this,o,c,h,m)};function Dt(o,c){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new At(c,o);else if(c instanceof At)c.target=c.target||o;else{var x=c;c=new At(m,o),T(c,x)}if(x=!0,h)for(var S=h.length-1;0<=S;S--){var M=c.g=h[S];x=cs(M,m,!0,c)&&x}if(M=c.g=o,x=cs(M,m,!0,c)&&x,x=cs(M,m,!1,c)&&x,h)for(S=0;S<h.length;S++)M=c.g=h[S],x=cs(M,m,!1,c)&&x}bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],m=0;m<h.length;m++)as(h[m]);delete o.g[c],o.h--}}this.F=null},bt.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},bt.prototype.L=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function cs(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,S=0;S<c.length;++S){var M=c[S];if(M&&!M.da&&M.capture==h){var it=M.listener,vt=M.ha||M.src;M.fa&&Mi(o.i,M),x=it.call(vt,m)!==!1&&x}}return x&&!m.defaultPrevented}function Xa(o,c,h){if(typeof o=="function")h&&(o=_(o,h));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Ja(o){o.g=Xa(()=>{o.g=null,o.i&&(o.i=!1,Ja(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Af extends le{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ja(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wn(o){le.call(this),this.h=o,this.g={}}C(Wn,le);var Ya=[];function Za(o){W(o.g,function(c,h){this.g.hasOwnProperty(h)&&ji(c)},o),o.g={}}Wn.prototype.N=function(){Wn.aa.N.call(this),Za(this)},Wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qi=u.JSON.stringify,bf=u.JSON.parse,xf=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function zi(){}zi.prototype.h=null;function tu(o){return o.h||(o.h=o.i())}function eu(){}var Qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $i(){At.call(this,"d")}C($i,At);function Gi(){At.call(this,"c")}C(Gi,At);var De={},nu=null;function ls(){return nu=nu||new bt}De.La="serverreachability";function ru(o){At.call(this,De.La,o)}C(ru,At);function Xn(o){const c=ls();Dt(c,new ru(c))}De.STAT_EVENT="statevent";function su(o,c){At.call(this,De.STAT_EVENT,o),this.stat=c}C(su,At);function Nt(o){const c=ls();Dt(c,new su(c,o))}De.Ma="timingevent";function iu(o,c){At.call(this,De.Ma,o),this.size=c}C(iu,At);function Jn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Yn(){this.g=!0}Yn.prototype.xa=function(){this.g=!1};function Rf(o,c,h,m,x,S){o.info(function(){if(o.g)if(S)for(var M="",it=S.split("&"),vt=0;vt<it.length;vt++){var tt=it[vt].split("=");if(1<tt.length){var xt=tt[0];tt=tt[1];var Rt=xt.split("_");M=2<=Rt.length&&Rt[1]=="type"?M+(xt+"="+tt+"&"):M+(xt+"=redacted&")}}else M=null;else M=S;return"XMLHTTP REQ ("+m+") [attempt "+x+"]: "+c+`
`+h+`
`+M})}function Sf(o,c,h,m,x,S,M){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+x+"]: "+c+`
`+h+`
`+S+" "+M})}function an(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Vf(o,h)+(m?" "+m:"")})}function Pf(o,c){o.info(function(){return"TIMEOUT: "+c})}Yn.prototype.info=function(){};function Vf(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var x=m[1];if(Array.isArray(x)&&!(1>x.length)){var S=x[0];if(S!="noop"&&S!="stop"&&S!="close")for(var M=1;M<x.length;M++)x[M]=""}}}}return qi(h)}catch{return c}}var hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ou={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ki;function ds(){}C(ds,zi),ds.prototype.g=function(){return new XMLHttpRequest},ds.prototype.i=function(){return{}},Ki=new ds;function he(o,c,h,m){this.j=o,this.i=c,this.l=h,this.R=m||1,this.U=new Wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new au}function au(){this.i=null,this.g="",this.h=!1}var uu={},Hi={};function Wi(o,c,h){o.L=1,o.v=gs(ne(c)),o.m=h,o.P=!0,cu(o,null)}function cu(o,c){o.F=Date.now(),fs(o),o.A=ne(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),wu(h.i,"t",m),o.C=0,h=o.j.J,o.h=new au,o.g=Uu(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Af(_(o.Y,o,o.g),o.O)),c=o.U,h=o.g,m=o.ca;var x="readystatechange";Array.isArray(x)||(x&&(Ya[0]=x.toString()),x=Ya);for(var S=0;S<x.length;S++){var M=Ka(h,x[S],m||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Xn(),Rf(o.i,o.u,o.A,o.l,o.R,o.m)}he.prototype.ca=function(o){o=o.target;const c=this.M;c&&re(o)==3?c.j():this.Y(o)},he.prototype.Y=function(o){try{if(o==this.g)t:{const Rt=re(this.g);var c=this.g.Ba();const ln=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Vu(this.g)))){this.J||Rt!=4||c==7||(c==8||0>=ln?Xn(3):Xn(2)),Qi(this);var h=this.g.Z();this.X=h;e:if(lu(this)){var m=Vu(this.g);o="";var x=m.length,S=re(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ne(this),Zn(this);var M="";break e}this.h.i=new u.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(S&&c==x-1)});m.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,Sf(this.i,this.u,this.A,this.l,this.R,Rt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var it,vt=this.g;if((it=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(it)){var tt=it;break e}}tt=null}if(h=tt)an(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xi(this,h);else{this.o=!1,this.s=3,Nt(12),Ne(this),Zn(this);break t}}if(this.P){h=!0;let Kt;for(;!this.J&&this.C<M.length;)if(Kt=Cf(this,M),Kt==Hi){Rt==4&&(this.s=4,Nt(14),h=!1),an(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==uu){this.s=4,Nt(15),an(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else an(this.i,this.l,Kt,null),Xi(this,Kt);if(lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||M.length!=0||this.h.h||(this.s=1,Nt(16),h=!1),this.o=this.o&&h,!h)an(this.i,this.l,M,"[Invalid Chunked Response]"),Ne(this),Zn(this);else if(0<M.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),no(xt),xt.M=!0,Nt(11))}}else an(this.i,this.l,M,null),Xi(this,M);Rt==4&&Ne(this),this.o&&!this.J&&(Rt==4?Lu(this.j,this):(this.o=!1,fs(this)))}else Wf(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),Ne(this),Zn(this)}}}catch{}finally{}};function lu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Cf(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?Hi:(h=Number(c.substring(h,m)),isNaN(h)?uu:(m+=1,m+h>c.length?Hi:(c=c.slice(m,m+h),o.C=m+h,c)))}he.prototype.cancel=function(){this.J=!0,Ne(this)};function fs(o){o.S=Date.now()+o.I,hu(o,o.I)}function hu(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Jn(_(o.ba,o),c)}function Qi(o){o.B&&(u.clearTimeout(o.B),o.B=null)}he.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Pf(this.i,this.A),this.L!=2&&(Xn(),Nt(17)),Ne(this),this.s=2,Zn(this)):hu(this,this.S-o)};function Zn(o){o.j.G==0||o.J||Lu(o.j,o)}function Ne(o){Qi(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Za(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Xi(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Ji(h.h,o))){if(!o.K&&Ji(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var x=m;if(x[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ts(h),Es(h);else break t;eo(h),Nt(18)}}else h.za=x[1],0<h.za-h.T&&37500>x[2]&&h.F&&h.v==0&&!h.C&&(h.C=Jn(_(h.Za,h),6e3));if(1>=mu(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Me(h,11)}else if((o.K||h.g==o)&&Ts(h),!L(c))for(x=h.Da.g.parse(c),c=0;c<x.length;c++){let tt=x[c];if(h.T=tt[0],tt=tt[1],h.G==2)if(tt[0]=="c"){h.K=tt[1],h.ia=tt[2];const xt=tt[3];xt!=null&&(h.la=xt,h.j.info("VER="+h.la));const Rt=tt[4];Rt!=null&&(h.Aa=Rt,h.j.info("SVER="+h.Aa));const ln=tt[5];ln!=null&&typeof ln=="number"&&0<ln&&(m=1.5*ln,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Kt=o.g;if(Kt){const As=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(As){var S=m.h;S.g||As.indexOf("spdy")==-1&&As.indexOf("quic")==-1&&As.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Yi(S,S.h),S.h=null))}if(m.D){const ro=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(m.ya=ro,ot(m.I,m.D,ro))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var M=o;if(m.qa=Bu(m,m.J?m.ia:null,m.W),M.K){pu(m.h,M);var it=M,vt=m.L;vt&&(it.I=vt),it.B&&(Qi(it),fs(it)),m.g=M}else Mu(m);0<h.i.length&&vs(h)}else tt[0]!="stop"&&tt[0]!="close"||Me(h,7);else h.G==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?Me(h,7):to(h):tt[0]!="noop"&&h.l&&h.l.ta(tt),h.v=0)}}Xn(4)}catch{}}var Df=class{constructor(o,c){this.g=o,this.map=c}};function du(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function mu(o){return o.h?1:o.g?o.g.size:0}function Ji(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Yi(o,c){o.g?o.g.add(c):o.h=c}function pu(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}du.prototype.cancel=function(){if(this.i=gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function gu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return D(o.i)}function Nf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,m=0;m<h;m++)c.push(o[m]);return c}c=[],h=0;for(m in o)c[h++]=o[m];return c}function kf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const m in o)c[h++]=m;return c}}}function _u(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=kf(o),m=Nf(o),x=m.length,S=0;S<x;S++)c.call(void 0,m[S],h&&h[S],o)}var yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mf(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),x=null;if(0<=m){var S=o[h].substring(0,m);x=o[h].substring(m+1)}else S=o[h];c(S,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function ke(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ke){this.h=o.h,ms(this,o.j),this.o=o.o,this.g=o.g,ps(this,o.s),this.l=o.l;var c=o.i,h=new nr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Iu(this,h),this.m=o.m}else o&&(c=String(o).match(yu))?(this.h=!1,ms(this,c[1]||"",!0),this.o=tr(c[2]||""),this.g=tr(c[3]||"",!0),ps(this,c[4]),this.l=tr(c[5]||"",!0),Iu(this,c[6]||"",!0),this.m=tr(c[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}ke.prototype.toString=function(){var o=[],c=this.j;c&&o.push(er(c,Eu,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(er(c,Eu,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(er(h,h.charAt(0)=="/"?Ff:Lf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",er(h,Bf)),o.join("")};function ne(o){return new ke(o)}function ms(o,c,h){o.j=h?tr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ps(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Iu(o,c,h){c instanceof nr?(o.i=c,Uf(o.i,o.h)):(h||(c=er(c,jf)),o.i=new nr(c,o.h))}function ot(o,c,h){o.i.set(c,h)}function gs(o){return ot(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function tr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function er(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Of),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Of(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Eu=/[#\/\?@]/g,Lf=/[#\?:]/g,Ff=/[#\?]/g,jf=/[#\?@]/g,Bf=/#/g;function nr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function de(o){o.g||(o.g=new Map,o.h=0,o.i&&Mf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=nr.prototype,r.add=function(o,c){de(this),this.i=null,o=un(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function vu(o,c){de(o),c=un(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Tu(o,c){return de(o),c=un(o,c),o.g.has(c)}r.forEach=function(o,c){de(this),this.g.forEach(function(h,m){h.forEach(function(x){o.call(c,x,m,this)},this)},this)},r.na=function(){de(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let m=0;m<c.length;m++){const x=o[m];for(let S=0;S<x.length;S++)h.push(c[m])}return h},r.V=function(o){de(this);let c=[];if(typeof o=="string")Tu(this,o)&&(c=c.concat(this.g.get(un(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return de(this),this.i=null,o=un(this,o),Tu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function wu(o,c,h){vu(o,c),0<h.length&&(o.i=null,o.g.set(un(o,c),D(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var m=c[h];const S=encodeURIComponent(String(m)),M=this.V(m);for(m=0;m<M.length;m++){var x=S;M[m]!==""&&(x+="="+encodeURIComponent(String(M[m]))),o.push(x)}}return this.i=o.join("&")};function un(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Uf(o,c){c&&!o.j&&(de(o),o.i=null,o.g.forEach(function(h,m){var x=m.toLowerCase();m!=x&&(vu(this,m),wu(this,x,h))},o)),o.j=c}function qf(o,c){const h=new Yn;if(u.Image){const m=new Image;m.onload=R(fe,h,"TestLoadImage: loaded",!0,c,m),m.onerror=R(fe,h,"TestLoadImage: error",!1,c,m),m.onabort=R(fe,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=R(fe,h,"TestLoadImage: timeout",!1,c,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function zf(o,c){const h=new Yn,m=new AbortController,x=setTimeout(()=>{m.abort(),fe(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(S=>{clearTimeout(x),S.ok?fe(h,"TestPingServer: ok",!0,c):fe(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),fe(h,"TestPingServer: error",!1,c)})}function fe(o,c,h,m,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),m(h)}catch{}}function $f(){this.g=new xf}function Gf(o,c,h){const m=h||"";try{_u(o,function(x,S){let M=x;d(x)&&(M=qi(x)),c.push(m+S+"="+encodeURIComponent(M))})}catch(x){throw c.push(m+"type="+encodeURIComponent("_badmap")),x}}function _s(o){this.l=o.Ub||null,this.j=o.eb||!1}C(_s,zi),_s.prototype.g=function(){return new ys(this.l,this.j)},_s.prototype.i=function(o){return function(){return o}}({});function ys(o,c){bt.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ys,bt),r=ys.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,sr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Au(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Au(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?rr(this):sr(this),this.readyState==3&&Au(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,rr(this))},r.Qa=function(o){this.g&&(this.response=o,rr(this))},r.ga=function(){this.g&&rr(this)};function rr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,sr(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function sr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ys.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function bu(o){let c="";return W(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function Zi(o,c,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=bu(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ot(o,c,h))}function lt(o){bt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(lt,bt);var Kf=/^https?$/i,Hf=["POST","PUT"];r=lt.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ki.g(),this.v=this.o?tu(this.o):tu(Ki),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){xu(this,S);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var x in m)h.set(x,m[x]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())h.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),x=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Hf,c,void 0))||m||x||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of h)this.g.setRequestHeader(S,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pu(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){xu(this,S)}};function xu(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Ru(o),Is(o)}function Ru(o){o.A||(o.A=!0,Dt(o,"complete"),Dt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Dt(this,"complete"),Dt(this,"abort"),Is(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Is(this,!0)),lt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Su(this):this.bb())},r.bb=function(){Su(this)};function Su(o){if(o.h&&typeof a<"u"&&(!o.v[1]||re(o)!=4||o.Z()!=2)){if(o.u&&re(o)==4)Xa(o.Ea,0,o);else if(Dt(o,"readystatechange"),re(o)==4){o.h=!1;try{const M=o.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var m;if(m=M===0){var x=String(o.D).match(yu)[1]||null;!x&&u.self&&u.self.location&&(x=u.self.location.protocol.slice(0,-1)),m=!Kf.test(x?x.toLowerCase():"")}h=m}if(h)Dt(o,"complete"),Dt(o,"success");else{o.m=6;try{var S=2<re(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",Ru(o)}}finally{Is(o)}}}}function Is(o,c){if(o.g){Pu(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Dt(o,"ready");try{h.onreadystatechange=m}catch{}}}function Pu(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function re(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<re(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),bf(c)}};function Vu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Wf(o){const c={};o=(o.g&&2<=re(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(L(o[m]))continue;var h=A(o[m]);const x=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=c[x]||[];c[x]=S,S.push(h)}w(c,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Cu(o){this.Aa=0,this.i=[],this.j=new Yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ir("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ir("baseRetryDelayMs",5e3,o),this.cb=ir("retryDelaySeedMs",1e4,o),this.Wa=ir("forwardChannelMaxRetries",2,o),this.wa=ir("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new du(o&&o.concurrentRequestLimit),this.Da=new $f,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Cu.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,m){Nt(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Bu(this,null,this.W),vs(this)};function to(o){if(Du(o),o.G==3){var c=o.U++,h=ne(o.I);if(ot(h,"SID",o.K),ot(h,"RID",c),ot(h,"TYPE","terminate"),or(o,h),c=new he(o,o.j,c),c.L=2,c.v=gs(ne(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Uu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),fs(c)}ju(o)}function Es(o){o.g&&(no(o),o.g.cancel(),o.g=null)}function Du(o){Es(o),o.u&&(u.clearTimeout(o.u),o.u=null),Ts(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function vs(o){if(!fu(o.h)&&!o.s){o.s=!0;var c=o.Ga;Gn||Ga(),Kn||(Gn(),Kn=!0),ki.add(c,o),o.B=0}}function Qf(o,c){return mu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Jn(_(o.Ga,o,c),Fu(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const x=new he(this,this.j,o);let S=this.o;if(this.S&&(S?(S=y(S),T(S,this.S)):S=this.S),this.m!==null||this.O||(x.H=S,S=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=ku(this,x,c),h=ne(this.I),ot(h,"RID",o),ot(h,"CVER",22),this.D&&ot(h,"X-HTTP-Session-Id",this.D),or(this,h),S&&(this.O?c="headers="+encodeURIComponent(String(bu(S)))+"&"+c:this.m&&Zi(h,this.m,S)),Yi(this.h,x),this.Ua&&ot(h,"TYPE","init"),this.P?(ot(h,"$req",c),ot(h,"SID","null"),x.T=!0,Wi(x,h,null)):Wi(x,h,c),this.G=2}}else this.G==3&&(o?Nu(this,o):this.i.length==0||fu(this.h)||Nu(this))};function Nu(o,c){var h;c?h=c.l:h=o.U++;const m=ne(o.I);ot(m,"SID",o.K),ot(m,"RID",h),ot(m,"AID",o.T),or(o,m),o.m&&o.o&&Zi(m,o.m,o.o),h=new he(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=ku(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Yi(o.h,h),Wi(h,m,c)}function or(o,c){o.H&&W(o.H,function(h,m){ot(c,m,h)}),o.l&&_u({},function(h,m){ot(c,m,h)})}function ku(o,c,h){h=Math.min(o.i.length,h);var m=o.l?_(o.l.Na,o.l,o):null;t:{var x=o.i;let S=-1;for(;;){const M=["count="+h];S==-1?0<h?(S=x[0].g,M.push("ofs="+S)):S=0:M.push("ofs="+S);let it=!0;for(let vt=0;vt<h;vt++){let tt=x[vt].g;const xt=x[vt].map;if(tt-=S,0>tt)S=Math.max(0,x[vt].g-100),it=!1;else try{Gf(xt,M,"req"+tt+"_")}catch{m&&m(xt)}}if(it){m=M.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,m}function Mu(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Gn||Ga(),Kn||(Gn(),Kn=!0),ki.add(c,o),o.v=0}}function eo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Jn(_(o.Fa,o),Fu(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Ou(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Jn(_(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),Es(this),Ou(this))};function no(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Ou(o){o.g=new he(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ne(o.qa);ot(c,"RID","rpc"),ot(c,"SID",o.K),ot(c,"AID",o.T),ot(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ot(c,"TO",o.ja),ot(c,"TYPE","xmlhttp"),or(o,c),o.m&&o.o&&Zi(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=gs(ne(c)),h.m=null,h.P=!0,cu(h,o)}r.Za=function(){this.C!=null&&(this.C=null,Es(this),eo(this),Nt(19))};function Ts(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Lu(o,c){var h=null;if(o.g==c){Ts(o),no(o),o.g=null;var m=2}else if(Ji(o.h,c))h=c.D,pu(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var x=o.B;m=ls(),Dt(m,new iu(m,h)),vs(o)}else Mu(o);else if(x=c.s,x==3||x==0&&0<c.X||!(m==1&&Qf(o,c)||m==2&&eo(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),x){case 1:Me(o,5);break;case 4:Me(o,10);break;case 3:Me(o,6);break;default:Me(o,2)}}}function Fu(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Me(o,c){if(o.j.info("Error code "+c),c==2){var h=_(o.fb,o),m=o.Xa;const x=!m;m=new ke(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ms(m,"https"),gs(m),x?qf(m.toString(),h):zf(m.toString(),h)}else Nt(2);o.G=0,o.l&&o.l.sa(c),ju(o),Du(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function ju(o){if(o.G=0,o.ka=[],o.l){const c=gu(o.h);(c.length!=0||o.i.length!=0)&&(V(o.ka,c),V(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Bu(o,c,h){var m=h instanceof ke?ne(h):new ke(h);if(m.g!="")c&&(m.g=c+"."+m.g),ps(m,m.s);else{var x=u.location;m=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var S=new ke(null);m&&ms(S,m),c&&(S.g=c),x&&ps(S,x),h&&(S.l=h),m=S}return h=o.D,c=o.ya,h&&c&&ot(m,h,c),ot(m,"VER",o.la),or(o,m),m}function Uu(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new lt(new _s({eb:h})):new lt(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function qu(){}r=qu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ws(){}ws.prototype.g=function(o,c){return new Lt(o,c)};function Lt(o,c){bt.call(this),this.g=new Cu(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!L(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!L(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new cn(this)}C(Lt,bt),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){to(this.g)},Lt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=qi(o),o=h);c.i.push(new Df(c.Ya++,o)),c.G==3&&vs(c)},Lt.prototype.N=function(){this.g.l=null,delete this.j,to(this.g),delete this.g,Lt.aa.N.call(this)};function zu(o){$i.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(zu,$i);function $u(){Gi.call(this),this.status=1}C($u,Gi);function cn(o){this.g=o}C(cn,qu),cn.prototype.ua=function(){Dt(this.g,"a")},cn.prototype.ta=function(o){Dt(this.g,new zu(o))},cn.prototype.sa=function(o){Dt(this.g,new $u)},cn.prototype.ra=function(){Dt(this.g,"b")},ws.prototype.createWebChannel=ws.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,sh=function(){return new ws},rh=function(){return ls()},nh=De,wo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,Ns=hs,ou.COMPLETE="complete",eh=ou,eu.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",bt.prototype.listen=bt.prototype.K,mr=eu,lt.prototype.listenOnce=lt.prototype.L,lt.prototype.getLastError=lt.prototype.Ka,lt.prototype.getLastErrorCode=lt.prototype.Ba,lt.prototype.getStatus=lt.prototype.Z,lt.prototype.getResponseJson=lt.prototype.Oa,lt.prototype.getResponseText=lt.prototype.oa,lt.prototype.send=lt.prototype.ea,lt.prototype.setWithCredentials=lt.prototype.Ha,th=lt}).apply(typeof xs<"u"?xs:typeof self<"u"?self:typeof window<"u"?window:{});const ac="@firebase/firestore",uc="4.9.0";/**
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
 */class Tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
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
 */const Xe=new Kl("@firebase/firestore");function _n(){return Xe.logLevel}function N(r,...t){if(Xe.logLevel<=Y.DEBUG){const e=t.map(ea);Xe.debug(`Firestore (${Bn}): ${r}`,...e)}}function kt(r,...t){if(Xe.logLevel<=Y.ERROR){const e=t.map(ea);Xe.error(`Firestore (${Bn}): ${r}`,...e)}}function bn(r,...t){if(Xe.logLevel<=Y.WARN){const e=t.map(ea);Xe.warn(`Firestore (${Bn}): ${r}`,...e)}}function ea(r){if(typeof r=="string")return r;try{/**
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
 */function j(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,ih(r,n,e)}function ih(r,t,e){let n=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw kt(n),new Error(n)}function U(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||ih(t,s,n)}function G(r,t){return r}/**
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
 */class Te{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class oh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Fp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Tt.UNAUTHENTICATED))}shutdown(){}}class jp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Bp{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){U(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new Te;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Te,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Te)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(U(typeof n.accessToken=="string",31837,{l:n}),new oh(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string",2055,{h:t}),new Tt(t)}}class Up{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class qp{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Up(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zp{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vp(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){U(this.o===void 0,3512);const n=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cc(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(U(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new cc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function $p(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class na{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=$p(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function $(r,t){return r<t?-1:r>t?1:0}function Ao(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),i=t.charAt(n);if(s!==i)return co(s)===co(i)?$(s,i):co(s)?1:-1}return $(r.length,t.length)}const Gp=55296,Kp=57343;function co(r){const t=r.charCodeAt(0);return t>=Gp&&t<=Kp}function xn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function ah(r){return r+"\0"}/**
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
 */const lc="__name__";class Xt{constructor(t,e,n){e===void 0?e=0:e>t.length&&j(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&j(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Xt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Xt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=Xt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return $(t.length,e.length)}static compareSegments(t,e){const n=Xt.isNumericId(t),s=Xt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Xt.extractNumericId(t).compare(Xt.extractNumericId(e)):Ao(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ve.fromString(t.substring(4,t.length-2))}}class et extends Xt{construct(t,e,n){return new et(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new et(e)}static emptyPath(){return new et([])}}const Hp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Xt{construct(t,e,n){return new ct(t,e,n)}static isValidIdentifier(t){return Hp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lc}static keyField(){return new ct([lc])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
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
 */function uh(r,t,e){if(!e)throw new k(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Wp(r,t,e,n){if(t===!0&&n===!0)throw new k(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function hc(r){if(!O.isDocumentKey(r))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function dc(r){if(O.isDocumentKey(r))throw new k(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ch(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function di(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":j(12329,{type:typeof r})}function Qt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=di(r);throw new k(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */function pt(r,t){const e={typeString:r};return t&&(e.value=t),e}function Hr(r,t){if(!ch(r))throw new k(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new k(P.INVALID_ARGUMENT,e);return!0}/**
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
 */const fc=-62135596800,mc=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*mc);return new nt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<fc)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mc}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Hr(t,nt._jsonSchema))return new nt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-fc;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:pt("string",nt._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
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
 */const Dr=-1;class Qs{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function bo(r){return r.fields.find(t=>t.kind===2)}function Fe(r){return r.fields.filter(t=>t.kind!==2)}Qs.UNKNOWN_ID=-1;class ks{constructor(t,e){this.fieldPath=t,this.kind=e}}class Nr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Nr(0,Ut.min())}}function Qp(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=q.fromTimestamp(n===1e9?new nt(e+1,0):new nt(e,n));return new Ut(s,O.empty(),t)}function lh(r){return new Ut(r.readTime,r.key,Dr)}class Ut{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ut(q.min(),O.empty(),Dr)}static max(){return new Ut(q.max(),O.empty(),Dr)}}function ra(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:$(r.largestBatchId,t.largestBatchId))}/**
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
 */const hh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function rn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==hh)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */const jt="SimpleDb";class fi{static open(t,e,n,s){try{return new fi(e,t.transaction(s,n))}catch(i){throw new Er(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new Te,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new Er(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=sa(n.target.error);this.S.reject(new Er(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(N(jt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Jp(e)}}class we{static delete(t){return N(jt,"Removing database:",t),Be(Fl().indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!$l())return!1;if(we.F())return!0;const t=Ks(),e=we.M(t),n=0<e&&e<10,s=fh(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)==null?void 0:t.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.N=n,this.B=null,we.M(Ks())===12.2&&kt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(t){return this.db||(N(jt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new Er(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new k(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new k(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Er(t,a))},s.onupgradeneeded=i=>{N(jt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.N.k(a,s.transaction,i.oldVersion,this.version).next(()=>{N(jt,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}$(t){this.q=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.L(t);const u=fi.open(this.db,t,i?"readonly":"readwrite",n),l=s(u).next(d=>(u.C(),d)).catch(d=>(u.abort(d),b.reject(d))).toPromise();return l.catch(()=>{}),await u.D,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(N(jt,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function fh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Xp{constructor(t){this.U=t,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(t){this.U=t}done(){this.K=!0}j(t){this.W=t}delete(){return Be(this.U.delete())}}class Er extends k{constructor(t,e){super(P.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ve(r){return r.name==="IndexedDbTransactionError"}class Jp{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(N(jt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(N(jt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Be(n)}add(t){return N(jt,"ADD",this.store.name,t,t),Be(this.store.add(t))}get(t){return Be(this.store.get(t)).next(e=>(e===void 0&&(e=null),N(jt,"GET",this.store.name,t,e),e))}delete(t){return N(jt,"DELETE",this.store.name,t),Be(this.store.delete(t))}count(){return N(jt,"COUNT",this.store.name),Be(this.store.count())}J(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new b((a,u)=>{i.onerror=l=>{u(l.target.error)},i.onsuccess=l=>{a(l.target.result)}})}{const i=this.cursor(n),a=[];return this.H(i,(u,l)=>{a.push(l)}).next(()=>a)}}Y(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new b((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}Z(t,e){N(jt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.X=!1;const s=this.cursor(n);return this.H(s,(i,a,u)=>u.delete())}ee(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.H(s,e)}te(t){const e=this.cursor({});return new b((n,s)=>{e.onerror=i=>{const a=sa(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}H(t,e){const n=[];return new b((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const l=new Xp(u),d=e(u.primaryKey,u.value,l);if(d instanceof b){const f=d.catch(p=>(l.done(),b.reject(p)));n.push(f)}l.isDone?s():l.G===null?u.continue():u.continue(l.G)}}).next(()=>b.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.X?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Be(r){return new b((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=sa(n.target.error);e(s)}})}let pc=!1;function sa(r){const t=we.M(Ks());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return pc||(pc=!0,setTimeout(()=>{throw n},0)),n}}return r}const vr="IndexBackfiller";class Yp{constructor(t,e){this.asyncQueue=t,this.ne=e,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(t){N(vr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.ne.ie();N(vr,`Documents written: ${e}`)}catch(e){Ve(e)?N(vr,"Ignoring IndexedDB error during index backfill: ",e):await rn(e)}await this.re(6e4)})}}class Zp{constructor(t,e){this.localStore=t,this.persistence=e}async ie(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.se(e,t))}se(t,e){const n=new Set;let s=e,i=!0;return b.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return N(vr,`Processing collection: ${a}`),this.oe(t,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>e-s)}oe(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this._e(s,i)).next(u=>(N(vr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}_e(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=lh(i);ra(a,n)>0&&(n=a)}),new Ut(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
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
 */const Ge=-1;function mi(r){return r==null}function kr(r){return r===0&&1/r==-1/0}function tg(r){return typeof r=="number"&&Number.isInteger(r)&&!kr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Xs="";function Ct(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=gc(t)),t=eg(r.get(e),t);return gc(t)}function eg(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case Xs:e+="";break;default:e+=i}}return e}function gc(r){return r+Xs+""}function Jt(r){const t=r.length;if(U(t>=2,64408,{path:r}),t===2)return U(r.charAt(0)===Xs&&r.charAt(1)==="",56145,{path:r}),et.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(Xs,i);switch((a<0||a>e)&&j(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(i,a);let l;s.length===0?l=u:(s+=u,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:j(61167,{path:r})}i=a+2}return new et(n)}/**
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
 */const je="remoteDocuments",Wr="owner",hn="owner",Mr="mutationQueues",ng="userId",Ht="mutations",_c="batchId",$e="userMutationsIndex",yc=["userId","batchId"];/**
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
 */function Ms(r,t){return[r,Ct(t)]}function mh(r,t,e){return[r,Ct(t),e]}const rg={},Rn="documentMutations",Js="remoteDocumentsV14",sg=["prefixPath","collectionGroup","readTime","documentId"],Os="documentKeyIndex",ig=["prefixPath","collectionGroup","documentId"],ph="collectionGroupIndex",og=["collectionGroup","readTime","prefixPath","documentId"],Or="remoteDocumentGlobal",xo="remoteDocumentGlobalKey",Sn="targets",gh="queryTargetsIndex",ag=["canonicalId","targetId"],Pn="targetDocuments",ug=["targetId","path"],ia="documentTargetsIndex",cg=["path","targetId"],Ys="targetGlobalKey",Ke="targetGlobal",Lr="collectionParents",lg=["collectionId","parent"],Vn="clientMetadata",hg="clientId",pi="bundles",dg="bundleId",gi="namedQueries",fg="name",oa="indexConfiguration",mg="indexId",Ro="collectionGroupIndex",pg="collectionGroup",Tr="indexState",gg=["indexId","uid"],_h="sequenceNumberIndex",_g=["uid","sequenceNumber"],wr="indexEntries",yg=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],yh="documentKeyIndex",Ig=["indexId","uid","orderedDocumentKey"],_i="documentOverlays",Eg=["userId","collectionPath","documentId"],So="collectionPathOverlayIndex",vg=["userId","collectionPath","largestBatchId"],Ih="collectionGroupOverlayIndex",Tg=["userId","collectionGroup","largestBatchId"],aa="globals",wg="name",Eh=[Mr,Ht,Rn,je,Sn,Wr,Ke,Pn,Vn,Or,Lr,pi,gi],Ag=[...Eh,_i],vh=[Mr,Ht,Rn,Js,Sn,Wr,Ke,Pn,Vn,Or,Lr,pi,gi,_i],Th=vh,ua=[...Th,oa,Tr,wr],bg=ua,wh=[...ua,aa],xg=wh;/**
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
 */class Po extends dh{constructor(t,e){super(),this.le=t,this.currentSequenceNumber=e}}function yt(r,t){const e=G(r);return we.O(e.le,t)}/**
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
 */function Ic(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Ce(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Ah(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class st{constructor(t){this.comparator=t,this.data=new ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ec(this.data.getIterator())}getIteratorFrom(t){return new Ec(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class Ec{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function dn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ot{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new st(ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return xn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class bh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bh("Invalid base64 string: "+i):i}}(t);return new gt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const Rg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oe(r){if(U(!!r,39018),typeof r=="string"){let t=0;const e=Rg.exec(r);if(U(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ae(r){return typeof r=="string"?gt.fromBase64String(r):gt.fromUint8Array(r)}/**
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
 */const xh="server_timestamp",Rh="__type__",Sh="__previous_value__",Ph="__local_write_time__";function ca(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Rh])==null?void 0:n.stringValue)===xh}function yi(r){const t=r.mapValue.fields[Sh];return ca(t)?yi(t):t}function Fr(r){const t=oe(r.mapValue.fields[Ph].timestampValue);return new nt(t.seconds,t.nanos)}/**
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
 */class Sg{constructor(t,e,n,s,i,a,u,l,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=f}}const jr="(default)";class Je{constructor(t,e){this.projectId=t,this.database=e||jr}static empty(){return new Je("","")}get isDefaultDatabase(){return this.database===jr}isEqual(t){return t instanceof Je&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const la="__type__",Vh="__max__",ye={mapValue:{fields:{__type__:{stringValue:Vh}}}},ha="__vector__",Cn="value",Ls={nullValue:"NULL_VALUE"};function be(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ca(r)?4:Ch(r)?9007199254740991:Ii(r)?10:11:j(28295,{value:r})}function ee(r,t){if(r===t)return!0;const e=be(r);if(e!==be(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Fr(r).isEqual(Fr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=oe(s.timestampValue),u=oe(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ae(s.bytesValue).isEqual(ae(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return at(s.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return at(s.integerValue)===at(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=at(s.doubleValue),u=at(i.doubleValue);return a===u?kr(a)===kr(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return xn(r.arrayValue.values||[],t.arrayValue.values||[],ee);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Ic(a)!==Ic(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!ee(a[l],u[l])))return!1;return!0}(r,t);default:return j(52216,{left:r})}}function Br(r,t){return(r.values||[]).find(e=>ee(e,t))!==void 0}function xe(r,t){if(r===t)return 0;const e=be(r),n=be(t);if(e!==n)return $(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,t.booleanValue);case 2:return function(i,a){const u=at(i.integerValue||i.doubleValue),l=at(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(r,t);case 3:return vc(r.timestampValue,t.timestampValue);case 4:return vc(Fr(r),Fr(t));case 5:return Ao(r.stringValue,t.stringValue);case 6:return function(i,a){const u=ae(i),l=ae(a);return u.compareTo(l)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const f=$(u[d],l[d]);if(f!==0)return f}return $(u.length,l.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const u=$(at(i.latitude),at(a.latitude));return u!==0?u:$(at(i.longitude),at(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Tc(r.arrayValue,t.arrayValue);case 10:return function(i,a){var _,R,C,D;const u=i.fields||{},l=a.fields||{},d=(_=u[Cn])==null?void 0:_.arrayValue,f=(R=l[Cn])==null?void 0:R.arrayValue,p=$(((C=d==null?void 0:d.values)==null?void 0:C.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return p!==0?p:Tc(d,f)}(r.mapValue,t.mapValue);case 11:return function(i,a){if(i===ye.mapValue&&a===ye.mapValue)return 0;if(i===ye.mapValue)return 1;if(a===ye.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const _=Ao(l[p],f[p]);if(_!==0)return _;const R=xe(u[l[p]],d[f[p]]);if(R!==0)return R}return $(l.length,f.length)}(r.mapValue,t.mapValue);default:throw j(23264,{he:e})}}function vc(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return $(r,t);const e=oe(r),n=oe(t),s=$(e.seconds,n.seconds);return s!==0?s:$(e.nanos,n.nanos)}function Tc(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=xe(e[s],n[s]);if(i)return i}return $(e.length,n.length)}function Dn(r){return Vo(r)}function Vo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=oe(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ae(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=Vo(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${Vo(e.fields[a])}`;return s+"}"}(r.mapValue):j(61005,{value:r})}function Fs(r){switch(be(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=yi(r);return t?16+Fs(t):16;case 5:return 2*r.stringValue.length;case 6:return ae(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Fs(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Ce(n.fields,(i,a)=>{s+=i.length+Fs(a)}),s}(r.mapValue);default:throw j(13486,{value:r})}}function Ur(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Co(r){return!!r&&"integerValue"in r}function qr(r){return!!r&&"arrayValue"in r}function wc(r){return!!r&&"nullValue"in r}function Ac(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function js(r){return!!r&&"mapValue"in r}function Ii(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[la])==null?void 0:n.stringValue)===ha}function Ar(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Ce(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ar(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ar(r.arrayValue.values[e]);return t}return{...r}}function Ch(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Vh}const Dh={mapValue:{fields:{[la]:{stringValue:ha},[Cn]:{arrayValue:{}}}}};function Pg(r){return"nullValue"in r?Ls:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Ur(Je.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Ii(r)?Dh:{mapValue:{}}:j(35942,{value:r})}function Vg(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Ur(Je.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Dh:"mapValue"in r?Ii(r)?{mapValue:{}}:ye:j(61959,{value:r})}function bc(r,t){const e=xe(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function xc(r,t){const e=xe(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
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
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!js(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ar(e)}setAll(t){let e=ct.emptyPath(),n={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=Ar(a):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());js(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ee(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];js(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ce(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new Vt(Ar(this.value))}}function Nh(r){const t=[];return Ce(r.fields,(e,n)=>{const s=new ct([e]);if(js(n)){const i=Nh(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ot(t)}/**
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
 */class Nn{constructor(t,e){this.position=t,this.inclusive=e}}function Rc(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),e.key):n=xe(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Sc(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!ee(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class zr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Cg(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class kh{}class X extends kh{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Dg(t,e,n):e==="array-contains"?new Mg(t,n):e==="in"?new Bh(t,n):e==="not-in"?new Og(t,n):e==="array-contains-any"?new Lg(t,n):new X(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Ng(t,n):new kg(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(xe(e,this.value)):e!==null&&be(this.value)===be(e)&&this.matchesComparison(xe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rt extends kh{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new rt(t,e)}matches(t){return kn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function kn(r){return r.op==="and"}function Do(r){return r.op==="or"}function da(r){return Mh(r)&&kn(r)}function Mh(r){for(const t of r.filters)if(t instanceof rt)return!1;return!0}function No(r){if(r instanceof X)return r.field.canonicalString()+r.op.toString()+Dn(r.value);if(da(r))return r.filters.map(t=>No(t)).join(",");{const t=r.filters.map(e=>No(e)).join(",");return`${r.op}(${t})`}}function Oh(r,t){return r instanceof X?function(n,s){return s instanceof X&&n.op===s.op&&n.field.isEqual(s.field)&&ee(n.value,s.value)}(r,t):r instanceof rt?function(n,s){return s instanceof rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&Oh(a,s.filters[u]),!0):!1}(r,t):void j(19439)}function Lh(r,t){const e=r.filters.concat(t);return rt.create(e,r.op)}function Fh(r){return r instanceof X?function(e){return`${e.field.canonicalString()} ${e.op} ${Dn(e.value)}`}(r):r instanceof rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Fh).join(" ,")+"}"}(r):"Filter"}class Dg extends X{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ng extends X{constructor(t,e){super(t,"in",e),this.keys=jh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kg extends X{constructor(t,e){super(t,"not-in",e),this.keys=jh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function jh(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>O.fromName(n.referenceValue))}class Mg extends X{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return qr(e)&&Br(e.arrayValue,this.value)}}class Bh extends X{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Br(this.value.arrayValue,e)}}class Og extends X{constructor(t,e){super(t,"not-in",e)}matches(t){if(Br(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Br(this.value.arrayValue,e)}}class Lg extends X{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!qr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Br(this.value.arrayValue,n))}}/**
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
 */class Fg{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Te=null}}function ko(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Fg(r,t,e,n,s,i,a)}function Ye(r){const t=G(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>No(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),mi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Dn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Dn(n)).join(",")),t.Te=e}return t.Te}function Qr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Cg(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Oh(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Sc(r.startAt,t.startAt)&&Sc(r.endAt,t.endAt)}function Zs(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function ti(r,t){return r.filters.filter(e=>e instanceof X&&e.field.isEqual(t))}function Pc(r,t,e){let n=Ls,s=!0;for(const i of ti(r,t)){let a=Ls,u=!0;switch(i.op){case"<":case"<=":a=Pg(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=Ls}bc({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];bc({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function Vc(r,t,e){let n=ye,s=!0;for(const i of ti(r,t)){let a=ye,u=!0;switch(i.op){case">=":case">":a=Vg(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=ye}xc({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];xc({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class Un{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function jg(r,t,e,n,s,i,a,u){return new Un(r,t,e,n,s,i,a,u)}function Ei(r){return new Un(r)}function Cc(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Uh(r){return r.collectionGroup!==null}function br(r){const t=G(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new st(ct.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new zr(i,n))}),e.has(ct.keyField().canonicalString())||t.Ie.push(new zr(ct.keyField(),n))}return t.Ie}function $t(r){const t=G(r);return t.Ee||(t.Ee=Bg(t,br(r))),t.Ee}function Bg(r,t){if(r.limitType==="F")return ko(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zr(s.field,i)});const e=r.endAt?new Nn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Nn(r.startAt.position,r.startAt.inclusive):null;return ko(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Mo(r,t){const e=r.filters.concat([t]);return new Un(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Oo(r,t,e){return new Un(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function vi(r,t){return Qr($t(r),$t(t))&&r.limitType===t.limitType}function qh(r){return`${Ye($t(r))}|lt:${r.limitType}`}function yn(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Fh(s)).join(", ")}]`),mi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Dn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Dn(s)).join(",")),`Target(${n})`}($t(r))}; limitType=${r.limitType})`}function Xr(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of br(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,u,l){const d=Rc(a,u,l);return a.inclusive?d<=0:d<0}(n.startAt,br(n),s)||n.endAt&&!function(a,u,l){const d=Rc(a,u,l);return a.inclusive?d>=0:d>0}(n.endAt,br(n),s))}(r,t)}function Ug(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function zh(r){return(t,e)=>{let n=!1;for(const s of br(r)){const i=qg(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function qg(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?xe(l,d):j(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return j(19790,{direction:r.dir})}}/**
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
 */class ue{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ce(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return Ah(this.inner)}size(){return this.innerSize}}/**
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
 */const zg=new ut(O.comparator);function Bt(){return zg}const $h=new ut(O.comparator);function pr(...r){let t=$h;for(const e of r)t=t.insert(e.key,e);return t}function Gh(r){let t=$h;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Yt(){return xr()}function Kh(){return xr()}function xr(){return new ue(r=>r.toString(),(r,t)=>r.isEqual(t))}const $g=new ut(O.comparator),Gg=new st(O.comparator);function Q(...r){let t=Gg;for(const e of r)t=t.add(e);return t}const Kg=new st($);function Hg(){return Kg}/**
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
 */function fa(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kr(t)?"-0":t}}function Hh(r){return{integerValue:""+r}}function Wg(r,t){return tg(t)?Hh(t):fa(r,t)}/**
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
 */class Ti{constructor(){this._=void 0}}function Qg(r,t,e){return r instanceof $r?function(s,i){const a={fields:{[Rh]:{stringValue:xh},[Ph]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ca(i)&&(i=yi(i)),i&&(a.fields[Sh]=i),{mapValue:a}}(e,t):r instanceof Mn?Qh(r,t):r instanceof On?Xh(r,t):function(s,i){const a=Wh(s,i),u=Dc(a)+Dc(s.Ae);return Co(a)&&Co(s.Ae)?Hh(u):fa(s.serializer,u)}(r,t)}function Xg(r,t,e){return r instanceof Mn?Qh(r,t):r instanceof On?Xh(r,t):e}function Wh(r,t){return r instanceof Gr?function(n){return Co(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class $r extends Ti{}class Mn extends Ti{constructor(t){super(),this.elements=t}}function Qh(r,t){const e=Jh(t);for(const n of r.elements)e.some(s=>ee(s,n))||e.push(n);return{arrayValue:{values:e}}}class On extends Ti{constructor(t){super(),this.elements=t}}function Xh(r,t){let e=Jh(t);for(const n of r.elements)e=e.filter(s=>!ee(s,n));return{arrayValue:{values:e}}}class Gr extends Ti{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Dc(r){return at(r.integerValue||r.doubleValue)}function Jh(r){return qr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Jg{constructor(t,e){this.field=t,this.transform=e}}function Yg(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Mn&&s instanceof Mn||n instanceof On&&s instanceof On?xn(n.elements,s.elements,ee):n instanceof Gr&&s instanceof Gr?ee(n.Ae,s.Ae):n instanceof $r&&s instanceof $r}(r.transform,t.transform)}class Zg{constructor(t,e){this.version=t,this.transformResults=e}}class _t{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new _t}static exists(t){return new _t(void 0,t)}static updateTime(t){return new _t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Bs(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class wi{}function Yh(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Jr(r.key,_t.none()):new qn(r.key,r.data,_t.none());{const e=r.data,n=Vt.empty();let s=new st(ct.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new ce(r.key,n,new Ot(s.toArray()),_t.none())}}function t_(r,t,e){r instanceof qn?function(s,i,a){const u=s.value.clone(),l=kc(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof ce?function(s,i,a){if(!Bs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=kc(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Zh(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Rr(r,t,e,n){return r instanceof qn?function(i,a,u,l){if(!Bs(i.precondition,a))return u;const d=i.value.clone(),f=Mc(i.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof ce?function(i,a,u,l){if(!Bs(i.precondition,a))return u;const d=Mc(i.fieldTransforms,l,a),f=a.data;return f.setAll(Zh(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,t,e,n):function(i,a,u){return Bs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function e_(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=Wh(n.transform,s||null);i!=null&&(e===null&&(e=Vt.empty()),e.set(n.field,i))}return e||null}function Nc(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&xn(n,s,(i,a)=>Yg(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class qn extends wi{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ce extends wi{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zh(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function kc(r,t,e){const n=new Map;U(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,Xg(a,u,e[s]))}return n}function Mc(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Qg(i,a,t))}return n}class Jr extends wi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class td extends wi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ma{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&t_(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Rr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Rr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Kh();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const l=Yh(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Q())}isEqual(t){return this.batchId===t.batchId&&xn(this.mutations,t.mutations,(e,n)=>Nc(e,n))&&xn(this.baseMutations,t.baseMutations,(e,n)=>Nc(e,n))}}class pa{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){U(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=function(){return $g}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new pa(t,e,n,s)}}/**
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
 */class ga{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class n_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var mt,J;function r_(r){switch(r){case P.OK:return j(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return j(15467,{code:r})}}function ed(r){if(r===void 0)return kt("GRPC error has no .code"),P.UNKNOWN;switch(r){case mt.OK:return P.OK;case mt.CANCELLED:return P.CANCELLED;case mt.UNKNOWN:return P.UNKNOWN;case mt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case mt.INTERNAL:return P.INTERNAL;case mt.UNAVAILABLE:return P.UNAVAILABLE;case mt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case mt.NOT_FOUND:return P.NOT_FOUND;case mt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case mt.ABORTED:return P.ABORTED;case mt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case mt.DATA_LOSS:return P.DATA_LOSS;default:return j(39323,{code:r})}}(J=mt||(mt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function s_(){return new TextEncoder}/**
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
 */const i_=new ve([4294967295,4294967295],0);function Oc(r){const t=s_().encode(r),e=new Zl;return e.update(t),new Uint8Array(e.digest())}function Lc(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ve([e,n],0),new ve([s,i],0)]}class _a{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new gr(`Invalid padding: ${e}`);if(n<0)throw new gr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new gr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new gr(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ve.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(ve.fromNumber(n)));return s.compare(i_)===1&&(s=new ve([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Oc(t),[n,s]=Lc(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);if(!this.we(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new _a(i,s,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.ge===0)return;const e=Oc(t),[n,s]=Lc(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class gr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ai{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Yr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ai(q.min(),s,new ut($),Bt(),Q())}}class Yr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Yr(n,e,Q(),Q(),Q())}}/**
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
 */class Us{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class nd{constructor(t,e){this.targetId=t,this.Ce=e}}class rd{constructor(t,e,n=gt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Fc{constructor(){this.ve=0,this.Fe=jc(),this.Me=gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Q(),e=Q(),n=Q();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:j(38017,{changeType:i})}}),new Yr(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=jc()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,U(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class o_{constructor(t){this.Ge=t,this.ze=new Map,this.je=Bt(),this.Je=Ss(),this.He=Ss(),this.Ye=new ut($)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:j(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(Zs(i))if(n===0){const a=new O(i.path);this.et(e,a,ht.newNoDocument(a,q.min()))}else U(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const u=this.ut(t),l=u?this.ct(u,t,a):1;if(l!==0){this.it(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=ae(n).toUint8Array()}catch(l){if(l instanceof bh)return bn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new _a(a,s,i)}catch(l){return bn(l instanceof gr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.ge===0?null:u}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.et(e,i,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((i,a)=>{const u=this.ot(a);if(u){if(i.current&&Zs(u.target)){const l=new O(u.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ht.newNoDocument(l,t))}i.Be&&(e.set(a,i.ke()),i.qe())}});let n=Q();this.He.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.je.forEach((i,a)=>a.setReadTime(t));const s=new Ai(t,e,this.Ye,this.je,n);return this.je=Bt(),this.Je=Ss(),this.He=Ss(),this.Ye=new ut($),s}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Fc,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new st($),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new st($),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Fc),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Ss(){return new ut(O.comparator)}function jc(){return new ut(O.comparator)}const a_={asc:"ASCENDING",desc:"DESCENDING"},u_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},c_={and:"AND",or:"OR"};class l_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Lo(r,t){return r.useProto3Json||mi(t)?t:{value:t}}function Ln(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sd(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function h_(r,t){return Ln(r,t.toTimestamp())}function Mt(r){return U(!!r,49232),q.fromTimestamp(function(e){const n=oe(e);return new nt(n.seconds,n.nanos)}(r))}function ya(r,t){return Fo(r,t).canonicalString()}function Fo(r,t){const e=function(s){return new et(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function id(r){const t=et.fromString(r);return U(md(t),10190,{key:t.toString()}),t}function ei(r,t){return ya(r.databaseId,t.path)}function He(r,t){const e=id(t);if(e.get(1)!==r.databaseId.projectId)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(ud(e))}function od(r,t){return ya(r.databaseId,t)}function ad(r){const t=id(r);return t.length===4?et.emptyPath():ud(t)}function jo(r){return new et(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ud(r){return U(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Bc(r,t,e){return{name:ei(r,t),fields:e.value.mapValue.fields}}function d_(r,t,e){const n=He(r,t.name),s=Mt(t.updateTime),i=t.createTime?Mt(t.createTime):q.min(),a=new Vt({mapValue:{fields:t.fields}}),u=ht.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function f_(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(U(f===void 0||typeof f=="string",58123),gt.fromBase64String(f||"")):(U(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),gt.fromUint8Array(f||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const f=d.code===void 0?P.UNKNOWN:ed(d.code);return new k(f,d.message||"")}(a);e=new rd(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=He(r,n.document.name),i=Mt(n.document.updateTime),a=n.document.createTime?Mt(n.document.createTime):q.min(),u=new Vt({mapValue:{fields:n.document.fields}}),l=ht.newFoundDocument(s,i,a,u),d=n.targetIds||[],f=n.removedTargetIds||[];e=new Us(d,f,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=He(r,n.document),i=n.readTime?Mt(n.readTime):q.min(),a=ht.newNoDocument(s,i),u=n.removedTargetIds||[];e=new Us([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=He(r,n.document),i=n.removedTargetIds||[];e=new Us([],i,s,null)}else{if(!("filter"in t))return j(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new n_(s,i),u=n.targetId;e=new nd(u,a)}}return e}function ni(r,t){let e;if(t instanceof qn)e={update:Bc(r,t.key,t.value)};else if(t instanceof Jr)e={delete:ei(r,t.key)};else if(t instanceof ce)e={update:Bc(r,t.key,t.data),updateMask:I_(t.fieldMask)};else{if(!(t instanceof td))return j(16599,{Vt:t.type});e={verify:ei(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof $r)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Mn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof On)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Gr)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw j(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:h_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j(27497)}(r,t.precondition)),e}function Bo(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?_t.updateTime(Mt(i.updateTime)):i.exists!==void 0?_t.exists(i.exists):_t.none()}(t.currentDocument):_t.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,u){let l=null;if("setToServerValue"in u)U(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),l=new $r;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];l=new Mn(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];l=new On(f)}else"increment"in u?l=new Gr(a,u.increment):j(16584,{proto:u});const d=ct.fromServerFormat(u.fieldPath);return new Jg(d,l)}(r,s)):[];if(t.update){t.update.name;const s=He(r,t.update.name),i=new Vt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(l){const d=l.fieldPaths||[];return new Ot(d.map(f=>ct.fromServerFormat(f)))}(t.updateMask);return new ce(s,i,a,e,n)}return new qn(s,i,e,n)}if(t.delete){const s=He(r,t.delete);return new Jr(s,e)}if(t.verify){const s=He(r,t.verify);return new td(s,e)}return j(1463,{proto:t})}function m_(r,t){return r&&r.length>0?(U(t!==void 0,14353),r.map(e=>function(s,i){let a=s.updateTime?Mt(s.updateTime):Mt(i);return a.isEqual(q.min())&&(a=Mt(i)),new Zg(a,s.transformResults||[])}(e,t))):[]}function cd(r,t){return{documents:[od(r,t.path)]}}function ld(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=od(r,s);const i=function(d){if(d.length!==0)return fd(rt.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:In(_.field),direction:g_(_.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Lo(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function hd(r){let t=ad(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){U(n===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(p){const _=dd(p);return _ instanceof rt&&da(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(p){return p.map(_=>function(C){return new zr(En(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(_))}(e.orderBy));let u=null;e.limit&&(u=function(p){let _;return _=typeof p=="object"?p.value:p,mi(_)?null:_}(e.limit));let l=null;e.startAt&&(l=function(p){const _=!!p.before,R=p.values||[];return new Nn(R,_)}(e.startAt));let d=null;return e.endAt&&(d=function(p){const _=!p.before,R=p.values||[];return new Nn(R,_)}(e.endAt)),jg(t,s,a,i,u,"F",l,d)}function p_(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function dd(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=En(e.unaryFilter.field);return X.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=En(e.unaryFilter.field);return X.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=En(e.unaryFilter.field);return X.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=En(e.unaryFilter.field);return X.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(r):r.fieldFilter!==void 0?function(e){return X.create(En(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return rt.create(e.compositeFilter.filters.map(n=>dd(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(e.compositeFilter.op))}(r):j(30097,{filter:r})}function g_(r){return a_[r]}function __(r){return u_[r]}function y_(r){return c_[r]}function In(r){return{fieldPath:r.canonicalString()}}function En(r){return ct.fromServerFormat(r.fieldPath)}function fd(r){return r instanceof X?function(e){if(e.op==="=="){if(Ac(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NAN"}};if(wc(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ac(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NOT_NAN"}};if(wc(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:In(e.field),op:__(e.op),value:e.value}}}(r):r instanceof rt?function(e){const n=e.getFilters().map(s=>fd(s));return n.length===1?n[0]:{compositeFilter:{op:y_(e.op),filters:n}}}(r):j(54877,{filter:r})}function I_(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function md(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class se{constructor(t,e,n,s,i=q.min(),a=q.min(),u=gt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new se(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class pd{constructor(t){this.yt=t}}function E_(r,t){let e;if(t.document)e=d_(r.yt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=O.fromSegments(t.noDocument.path),s=tn(t.noDocument.readTime);e=ht.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return j(56709);{const n=O.fromSegments(t.unknownDocument.path),s=tn(t.unknownDocument.version);e=ht.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new nt(s[0],s[1]);return q.fromTimestamp(i)}(t.readTime)),e}function Uc(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:ri(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:ei(i,a.key),fields:a.data.value.mapValue.fields,updateTime:Ln(i,a.version.toTimestamp()),createTime:Ln(i,a.createTime.toTimestamp())}}(r.yt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:Ze(t.version)};else{if(!t.isUnknownDocument())return j(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:Ze(t.version)}}return n}function ri(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function Ze(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function tn(r){const t=new nt(r.seconds,r.nanoseconds);return q.fromTimestamp(t)}function Ue(r,t){const e=(t.baseMutations||[]).map(i=>Bo(r.yt,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>Bo(r.yt,i)),s=nt.fromMillis(t.localWriteTimeMs);return new ma(t.batchId,s,e,n)}function _r(r){const t=tn(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?tn(r.lastLimboFreeSnapshotVersion):q.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const a=i.documents.length;return U(a===1,1966,{count:a}),$t(Ei(ad(i.documents[0])))}(r.query):function(i){return $t(hd(i))}(r.query),new se(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,gt.fromBase64String(r.resumeToken))}function gd(r,t){const e=Ze(t.snapshotVersion),n=Ze(t.lastLimboFreeSnapshotVersion);let s;s=Zs(t.target)?cd(r.yt,t.target):ld(r.yt,t.target).ft;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ye(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function _d(r){const t=hd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Oo(t,t.limit,"L"):t}function lo(r,t){return new ga(t.largestBatchId,Bo(r.yt,t.overlayMutation))}function qc(r,t){const e=t.path.lastSegment();return[r,Ct(t.path.popLast()),e]}function zc(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:Ze(n.readTime),documentKey:Ct(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class v_{getBundleMetadata(t,e){return $c(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:tn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return $c(t).put(function(s){return{bundleId:s.id,createTime:Ze(Mt(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return Gc(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:_d(i.bundledQuery),readTime:tn(i.readTime)}}(n)})}saveNamedQuery(t,e){return Gc(t).put(function(s){return{name:s.name,readTime:Ze(Mt(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function $c(r){return yt(r,pi)}function Gc(r){return yt(r,gi)}/**
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
 */class bi{constructor(t,e){this.serializer=t,this.userId=e}static wt(t,e){const n=e.uid||"";return new bi(t,n)}getOverlay(t,e){return ur(t).get(qc(this.userId,e)).next(n=>n?lo(this.serializer,n):null)}getOverlays(t,e){const n=Yt();return b.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const u=new ga(e,a);s.push(this.St(t,u))}),b.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(Ct(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(ur(t).Z(So,u))}),b.waitFor(i)}getOverlaysForCollection(t,e,n){const s=Yt(),i=Ct(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ur(t).J(So,a).next(u=>{for(const l of u){const d=lo(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=Yt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return ur(t).ee({index:Ih,range:u},(l,d,f)=>{const p=lo(this.serializer,d);i.size()<s||p.largestBatchId===a?(i.set(p.getKey(),p),a=p.largestBatchId):f.done()}).next(()=>i)}St(t,e){return ur(t).put(function(s,i,a){const[u,l,d]=qc(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:ni(s.yt,a.mutation)}}(this.serializer,this.userId,e))}}function ur(r){return yt(r,_i)}/**
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
 */class T_{bt(t){return yt(t,aa)}getSessionToken(t){return this.bt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?gt.fromUint8Array(n):gt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.bt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
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
 */class qe{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(at(t.integerValue));else if("doubleValue"in t){const n=at(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),kr(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),typeof n=="string"&&(n=oe(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(ae(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?Ch(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):Ii(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Qt(t.arrayValue,e),this.Nt(e)):j(19022,{$t:t})}Ot(t,e){this.Ft(e,25),this.Ut(t,e)}Ut(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const s of Object.keys(n))this.Ot(s,e),this.Ct(n[s],e)}kt(t,e){var a,u;const n=t.fields||{};this.Ft(e,53);const s=Cn,i=((u=(a=n[s].arrayValue)==null?void 0:a.values)==null?void 0:u.length)||0;this.Ft(e,15),e.Mt(at(i)),this.Ot(s,e),this.Ct(n[s],e)}Qt(t,e){const n=t.values||[];this.Ft(e,50);for(const s of n)this.Ct(s,e)}Lt(t,e){this.Ft(e,37),O.fromName(t).path.forEach(n=>{this.Ft(e,60),this.Ut(n,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}qe.Kt=new qe;/**
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
 */const fn=255;function w_(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function Kc(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=w_(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class A_{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Gt(n.value),n=e.next();this.zt()}jt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Jt(n.value),n=e.next();this.Ht()}Yt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=e.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=e.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(t){const e=this.en(t),n=Kc(e);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}nn(t){const e=this.en(t),n=Kc(e);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}rn(){this.sn(fn),this.sn(255)}_n(){this.an(fn),this.an(255)}reset(){this.position=0}seed(t){this.tn(t.length),this.buffer.set(t,this.position),this.position+=t.length}un(){return this.buffer.slice(0,this.position)}en(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Gt(t){const e=255&t;e===0?(this.sn(0),this.sn(255)):e===fn?(this.sn(fn),this.sn(0)):this.sn(e)}Jt(t){const e=255&t;e===0?(this.an(0),this.an(255)):e===fn?(this.an(fn),this.an(0)):this.an(t)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(t){this.tn(1),this.buffer[this.position++]=t}an(t){this.tn(1),this.buffer[this.position++]=~t}tn(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class b_{constructor(t){this.cn=t}Bt(t){this.cn.Wt(t)}xt(t){this.cn.Yt(t)}Mt(t){this.cn.Xt(t)}vt(){this.cn.rn()}}class x_{constructor(t){this.cn=t}Bt(t){this.cn.jt(t)}xt(t){this.cn.Zt(t)}Mt(t){this.cn.nn(t)}vt(){this.cn._n()}}class cr{constructor(){this.cn=new A_,this.ln=new b_(this.cn),this.hn=new x_(this.cn)}seed(t){this.cn.seed(t)}Pn(t){return t===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class ze{constructor(t,e,n,s){this.Tn=t,this.In=e,this.En=n,this.dn=s}An(){const t=this.dn.length,e=t===0||this.dn[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.dn,0),e!==t?n.set([0],this.dn.length):++n[n.length-1],new ze(this.Tn,this.In,this.En,n)}Rn(t,e,n){return{indexId:this.Tn,uid:t,arrayValue:qs(this.En),directionalValue:qs(this.dn),orderedDocumentKey:qs(e),documentKey:n.path.toArray()}}Vn(t,e,n){const s=this.Rn(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function me(r,t){let e=r.Tn-t.Tn;return e!==0?e:(e=Hc(r.En,t.En),e!==0?e:(e=Hc(r.dn,t.dn),e!==0?e:O.comparator(r.In,t.In)))}function Hc(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function qs(r){return zl()?function(e){let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n}(r):r}function Wc(r){return typeof r!="string"?r:function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(r)}class Qc{constructor(t){this.mn=new st((e,n)=>ct.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.fn=t.orderBy,this.gn=[];for(const e of t.filters){const n=e;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(t){if(U(t.collectionGroup===this.collectionId,49279),this.pn)return!1;const e=bo(t);if(e!==void 0&&!this.wn(e))return!1;const n=Fe(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.wn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.mn.size>0){const u=this.mn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const l=n[i];if(!this.Sn(u,l)||!this.bn(this.fn[a++],l))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.fn.length||!this.bn(this.fn[a++],u))return!1}return!0}Dn(){if(this.pn)return null;let t=new st(ct.comparator);const e=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new ks(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new ks(n.field,0))}for(const n of this.fn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new ks(n.field,n.dir==="asc"?0:1)));return new Qs(Qs.UNKNOWN_ID,this.collectionId,e,Nr.empty())}wn(t){for(const e of this.gn)if(this.Sn(e,t))return!0;return!1}Sn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}bn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
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
 */function yd(r){var e,n;if(U(r instanceof X||r instanceof rt,20012),r instanceof X){if(r instanceof Bh){const s=((n=(e=r.value.arrayValue)==null?void 0:e.values)==null?void 0:n.map(i=>X.create(r.field,"==",i)))||[];return rt.create(s,"or")}return r}const t=r.filters.map(s=>yd(s));return rt.create(t,r.op)}function R_(r){if(r.getFilters().length===0)return[];const t=zo(yd(r));return U(Id(t),7391),Uo(t)||qo(t)?[t]:t.getFilters()}function Uo(r){return r instanceof X}function qo(r){return r instanceof rt&&da(r)}function Id(r){return Uo(r)||qo(r)||function(e){if(e instanceof rt&&Do(e)){for(const n of e.getFilters())if(!Uo(n)&&!qo(n))return!1;return!0}return!1}(r)}function zo(r){if(U(r instanceof X||r instanceof rt,34018),r instanceof X)return r;if(r.filters.length===1)return zo(r.filters[0]);const t=r.filters.map(n=>zo(n));let e=rt.create(t,r.op);return e=si(e),Id(e)?e:(U(e instanceof rt,64498),U(kn(e),40251),U(e.filters.length>1,57927),e.filters.reduce((n,s)=>Ia(n,s)))}function Ia(r,t){let e;return U(r instanceof X||r instanceof rt,38388),U(t instanceof X||t instanceof rt,25473),e=r instanceof X?t instanceof X?function(s,i){return rt.create([s,i],"and")}(r,t):Xc(r,t):t instanceof X?Xc(t,r):function(s,i){if(U(s.filters.length>0&&i.filters.length>0,48005),kn(s)&&kn(i))return Lh(s,i.getFilters());const a=Do(s)?s:i,u=Do(s)?i:s,l=a.filters.map(d=>Ia(d,u));return rt.create(l,"or")}(r,t),si(e)}function Xc(r,t){if(kn(t))return Lh(t,r.getFilters());{const e=t.filters.map(n=>Ia(r,n));return rt.create(e,"or")}}function si(r){if(U(r instanceof X||r instanceof rt,11850),r instanceof X)return r;const t=r.getFilters();if(t.length===1)return si(t[0]);if(Mh(r))return r;const e=t.map(s=>si(s)),n=[];return e.forEach(s=>{s instanceof X?n.push(s):s instanceof rt&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:rt.create(n,r.op)}/**
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
 */class S_{constructor(){this.Cn=new Ea}addToCollectionParentIndex(t,e){return this.Cn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(Ut.min())}updateCollectionGroup(t,e,n){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class Ea{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new st(et.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new st(et.comparator)).toArray()}}/**
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
 */const Jc="IndexedDbIndexManager",Ps=new Uint8Array(0);class P_{constructor(t,e){this.databaseId=e,this.vn=new Ea,this.Fn=new ue(n=>Ye(n),(n,s)=>Qr(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.vn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.vn.add(e)});const i={collectionId:n,parent:Ct(s)};return Yc(t).put(i)}return b.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[ah(e),""],!1,!0);return Yc(t).J(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(Jt(a.parent))}return n})}addFieldIndex(t,e){const n=lr(t),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=pn(t);return i.next(u=>{a.put(zc(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=lr(t),s=pn(t),i=mn(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=lr(t),n=mn(t),s=pn(t);return e.Z().next(()=>n.Z()).next(()=>s.Z())}createTargetIndexes(t,e){return b.forEach(this.Mn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new Qc(n).Dn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=mn(t);let s=!0;const i=new Map;return b.forEach(this.Mn(e),a=>this.xn(t,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=Q();const u=[];return b.forEach(i,(l,d)=>{N(Jc,`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(z=>`${z.fieldPath}:${z.kind}`).join(",")}`}(l)} to execute ${Ye(e)}`);const f=function(F,z){const Z=bo(z);if(Z===void 0)return null;for(const W of ti(F,Z.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null}(d,l),p=function(F,z){const Z=new Map;for(const W of Fe(z))for(const w of ti(F,W.fieldPath))switch(w.op){case"==":case"in":Z.set(W.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return Z.set(W.fieldPath.canonicalString(),w.value),Array.from(Z.values())}return null}(d,l),_=function(F,z){const Z=[];let W=!0;for(const w of Fe(z)){const y=w.kind===0?Pc(F,w.fieldPath,F.startAt):Vc(F,w.fieldPath,F.startAt);Z.push(y.value),W&&(W=y.inclusive)}return new Nn(Z,W)}(d,l),R=function(F,z){const Z=[];let W=!0;for(const w of Fe(z)){const y=w.kind===0?Vc(F,w.fieldPath,F.endAt):Pc(F,w.fieldPath,F.endAt);Z.push(y.value),W&&(W=y.inclusive)}return new Nn(Z,W)}(d,l),C=this.On(l,d,_),D=this.On(l,d,R),V=this.Nn(l,d,p),B=this.Bn(l.indexId,f,C,_.inclusive,D,R.inclusive,V);return b.forEach(B,L=>n.Y(L,e.limit).next(F=>{F.forEach(z=>{const Z=O.fromSegments(z.documentKey);a.has(Z)||(a=a.add(Z),u.push(Z))})}))}).next(()=>u)}return b.resolve(null)})}Mn(t){let e=this.Fn.get(t);return e||(t.filters.length===0?e=[t]:e=R_(rt.create(t.filters,"and")).map(n=>ko(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.Fn.set(t,e),e)}Bn(t,e,n,s,i,a,u){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),f=[];for(let p=0;p<l;++p){const _=e?this.Ln(e[p/d]):Ps,R=this.kn(t,_,n[p%d],s),C=this.qn(t,_,i[p%d],a),D=u.map(V=>this.kn(t,_,V,!0));f.push(...this.createRange(R,C,D))}return f}kn(t,e,n,s){const i=new ze(t,O.empty(),e,n);return s?i:i.An()}qn(t,e,n,s){const i=new ze(t,O.empty(),e,n);return s?i.An():i}xn(t,e){const n=new Qc(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const u of i)n.yn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const s=this.Mn(e);return b.forEach(s,i=>this.xn(t,i).next(a=>{a?n!==0&&a.fields.length<function(l){let d=new st(ct.comparator),f=!1;for(const p of l.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:d=d.add(_.field));for(const p of l.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}Qn(t,e){const n=new cr;for(const s of Fe(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Pn(s.kind);qe.Kt.Dt(i,a)}return n.un()}Ln(t){const e=new cr;return qe.Kt.Dt(t,e.Pn(0)),e.un()}$n(t,e){const n=new cr;return qe.Kt.Dt(Ur(this.databaseId,e),n.Pn(function(i){const a=Fe(i);return a.length===0?0:a[a.length-1].kind}(t))),n.un()}Nn(t,e,n){if(n===null)return[];let s=[];s.push(new cr);let i=0;for(const a of Fe(t)){const u=n[i++];for(const l of s)if(this.Un(e,a.fieldPath)&&qr(u))s=this.Kn(s,a,u);else{const d=l.Pn(a.kind);qe.Kt.Dt(u,d)}}return this.Wn(s)}On(t,e,n){return this.Nn(t,e,n.position)}Wn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].un();return e}Kn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const l=new cr;l.seed(u.un()),qe.Kt.Dt(a,l.Pn(e.kind)),i.push(l)}return i}Un(t,e){return!!t.filters.find(n=>n instanceof X&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=lr(t),s=pn(t);return(e?n.J(Ro,IDBKeyRange.bound(e,e)):n.J()).next(i=>{const a=[];return b.forEach(i,u=>s.get([u.indexId,this.uid]).next(l=>{a.push(function(f,p){const _=p?new Nr(p.sequenceNumber,new Ut(tn(p.readTime),new O(Jt(p.documentKey)),p.largestBatchId)):Nr.empty(),R=f.fields.map(([C,D])=>new ks(ct.fromServerFormat(C),D));return new Qs(f.indexId,f.collectionGroup,R,_)}(u,l))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:$(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=lr(t),i=pn(t);return this.Gn(t).next(a=>s.J(Ro,IDBKeyRange.bound(e,e)).next(u=>b.forEach(u,l=>i.put(zc(l.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return b.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?b.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),b.forEach(u,l=>this.zn(t,s,l).next(d=>{const f=this.jn(i,l);return d.isEqual(f)?b.resolve():this.Jn(t,i,l,d,f)}))))})}Hn(t,e,n,s){return mn(t).put(s.Rn(this.uid,this.$n(n,e.key),e.key))}Yn(t,e,n,s){return mn(t).delete(s.Vn(this.uid,this.$n(n,e.key),e.key))}zn(t,e,n){const s=mn(t);let i=new st(me);return s.ee({index:yh,range:IDBKeyRange.only([n.indexId,this.uid,qs(this.$n(n,e))])},(a,u)=>{i=i.add(new ze(n.indexId,e,Wc(u.arrayValue),Wc(u.directionalValue)))}).next(()=>i)}jn(t,e){let n=new st(me);const s=this.Qn(e,t);if(s==null)return n;const i=bo(e);if(i!=null){const a=t.data.field(i.fieldPath);if(qr(a))for(const u of a.arrayValue.values||[])n=n.add(new ze(e.indexId,t.key,this.Ln(u),s))}else n=n.add(new ze(e.indexId,t.key,Ps,s));return n}Jn(t,e,n,s,i){N(Jc,"Updating index entries for document '%s'",e.key);const a=[];return function(l,d,f,p,_){const R=l.getIterator(),C=d.getIterator();let D=dn(R),V=dn(C);for(;D||V;){let B=!1,L=!1;if(D&&V){const F=f(D,V);F<0?L=!0:F>0&&(B=!0)}else D!=null?L=!0:B=!0;B?(p(V),V=dn(C)):L?(_(D),D=dn(R)):(D=dn(R),V=dn(C))}}(s,i,me,u=>{a.push(this.Hn(t,e,n,u))},u=>{a.push(this.Yn(t,e,n,u))}),b.waitFor(a)}Gn(t){let e=1;return pn(t).ee({index:_h,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>me(a,u)).filter((a,u,l)=>!u||me(a,l[u-1])!==0);const s=[];s.push(t);for(const a of n){const u=me(a,t),l=me(a,e);if(u===0)s[0]=t.An();else if(u>0&&l<0)s.push(a),s.push(a.An());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Zn(s[a],s[a+1]))return[];const u=s[a].Vn(this.uid,Ps,O.empty()),l=s[a+1].Vn(this.uid,Ps,O.empty());i.push(IDBKeyRange.bound(u,l))}return i}Zn(t,e){return me(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Zc)}getMinOffset(t,e){return b.mapArray(this.Mn(e),n=>this.xn(t,n).next(s=>s||j(44426))).next(Zc)}}function Yc(r){return yt(r,Lr)}function mn(r){return yt(r,wr)}function lr(r){return yt(r,oa)}function pn(r){return yt(r,Tr)}function Zc(r){U(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;ra(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Ut(t.readTime,t.documentKey,e)}/**
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
 */const tl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ed=41943040;class Pt{static withCacheSize(t){return new Pt(t,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function vd(r,t,e){const n=r.store(Ht),s=r.store(Rn),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const l=n.ee({range:a},(f,p,_)=>(u++,_.delete()));i.push(l.next(()=>{U(u===1,47070,{batchId:e.batchId})}));const d=[];for(const f of e.mutations){const p=mh(t,f.key.path,e.batchId);i.push(s.delete(p)),d.push(f.key)}return b.waitFor(i).next(()=>d)}function ii(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw j(14731);t=r.noDocument}return JSON.stringify(t).length}/**
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
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(Ed,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);class xi{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Xn={}}static wt(t,e,n,s){U(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new xi(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return pe(t).ee({index:$e,range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=vn(t),a=pe(t);return a.add({}).next(u=>{U(typeof u=="number",49019);const l=new ma(u,e,n,s),d=function(R,C,D){const V=D.baseMutations.map(L=>ni(R.yt,L)),B=D.mutations.map(L=>ni(R.yt,L));return{userId:C,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:V,mutations:B}}(this.serializer,this.userId,l),f=[];let p=new st((_,R)=>$(_.canonicalString(),R.canonicalString()));for(const _ of s){const R=mh(this.userId,_.key.path,u);p=p.add(_.key.path.popLast()),f.push(a.put(d)),f.push(i.put(R,rg))}return p.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(t,_))}),t.addOnCommittedListener(()=>{this.Xn[u]=l.keys()}),b.waitFor(f).next(()=>l)})}lookupMutationBatch(t,e){return pe(t).get(e).next(n=>n?(U(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),Ue(this.serializer,n)):null)}er(t,e){return this.Xn[e]?b.resolve(this.Xn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.Xn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return pe(t).ee({index:$e,range:s},(a,u,l)=>{u.userId===this.userId&&(U(u.batchId>=n,47524,{tr:n}),i=Ue(this.serializer,u)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Ge;return pe(t).ee({index:$e,range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,Ge],[this.userId,Number.POSITIVE_INFINITY]);return pe(t).J($e,e).next(n=>n.map(s=>Ue(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Ms(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return vn(t).ee({range:s},(a,u,l)=>{const[d,f,p]=a,_=Jt(f);if(d===this.userId&&e.path.isEqual(_))return pe(t).get(p).next(R=>{if(!R)throw j(61480,{nr:a,batchId:p});U(R.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:R.userId,batchId:p}),i.push(Ue(this.serializer,R))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st($);const s=[];return e.forEach(i=>{const a=Ms(this.userId,i.path),u=IDBKeyRange.lowerBound(a),l=vn(t).ee({range:u},(d,f,p)=>{const[_,R,C]=d,D=Jt(R);_===this.userId&&i.path.isEqual(D)?n=n.add(C):p.done()});s.push(l)}),b.waitFor(s).next(()=>this.rr(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=Ms(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new st($);return vn(t).ee({range:a},(l,d,f)=>{const[p,_,R]=l,C=Jt(_);p===this.userId&&n.isPrefixOf(C)?C.length===s&&(u=u.add(R)):f.done()}).next(()=>this.rr(t,u))}rr(t,e){const n=[],s=[];return e.forEach(i=>{s.push(pe(t).get(i).next(a=>{if(a===null)throw j(35274,{batchId:i});U(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(Ue(this.serializer,a))}))}),b.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return vd(t.le,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.ir(e.batchId)}),b.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}ir(t){delete this.Xn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return b.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return vn(t).ee({range:n},(i,a,u)=>{if(i[0]===this.userId){const l=Jt(i[1]);s.push(l)}else u.done()}).next(()=>{U(s.length===0,56720,{sr:s.map(i=>i.canonicalString())})})})}containsKey(t,e){return Td(t,this.userId,e)}_r(t){return wd(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Ge,lastStreamToken:""})}}function Td(r,t,e){const n=Ms(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return vn(r).ee({range:i,X:!0},(u,l,d)=>{const[f,p,_]=u;f===t&&p===s&&(a=!0),d.done()}).next(()=>a)}function pe(r){return yt(r,Ht)}function vn(r){return yt(r,Rn)}function wd(r){return yt(r,Mr)}/**
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
 */class V_{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.lr(t).next(e=>{const n=new en(e.highestTargetId);return e.highestTargetId=n.next(),this.hr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.lr(t).next(e=>q.fromTimestamp(new nt(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.lr(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.lr(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.hr(t,s)))}addTargetData(t,e){return this.Pr(t,e).next(()=>this.lr(t).next(n=>(n.targetCount+=1,this.Tr(e,n),this.hr(t,n))))}updateTargetData(t,e){return this.Pr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>gn(t).delete(e.targetId)).next(()=>this.lr(t)).next(n=>(U(n.targetCount>0,8065),n.targetCount-=1,this.hr(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return gn(t).ee((a,u)=>{const l=_r(u);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))}).next(()=>b.waitFor(i)).next(()=>s)}forEachTarget(t,e){return gn(t).ee((n,s)=>{const i=_r(s);e(i)})}lr(t){return el(t).get(Ys).next(e=>(U(e!==null,2888),e))}hr(t,e){return el(t).put(Ys,e)}Pr(t,e){return gn(t).put(gd(this.serializer,e))}Tr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.lr(t).next(e=>e.targetCount)}getTargetData(t,e){const n=Ye(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return gn(t).ee({range:s,index:gh},(a,u,l)=>{const d=_r(u);Qr(e,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=_e(t);return e.forEach(a=>{const u=Ct(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))}),b.waitFor(s)}removeMatchingKeys(t,e,n){const s=_e(t);return b.forEach(e,i=>{const a=Ct(i.path);return b.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=_e(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=_e(t);let i=Q();return s.ee({range:n,X:!0},(a,u,l)=>{const d=Jt(a[1]),f=new O(d);i=i.add(f)}).next(()=>i)}containsKey(t,e){const n=Ct(e.path),s=IDBKeyRange.bound([n],[ah(n)],!1,!0);let i=0;return _e(t).ee({index:ia,X:!0,range:s},([a,u],l,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}At(t,e){return gn(t).get(e).next(n=>n?_r(n):null)}}function gn(r){return yt(r,Sn)}function el(r){return yt(r,Ke)}function _e(r){return yt(r,Pn)}/**
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
 */const nl="LruGarbageCollector",Ad=1048576;function rl([r,t],[e,n]){const s=$(r,e);return s===0?$(t,n):s}class C_{constructor(t){this.Ir=t,this.buffer=new st(rl),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();rl(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class bd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){N(nl,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ve(e)?N(nl,"Ignoring IndexedDB error during garbage collection: ",e):await rn(e)}await this.Vr(3e5)})}}class D_{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return b.resolve(zt.ce);const n=new C_(e);return this.mr.forEachTarget(t,s=>n.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>n.Ar(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(tl)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tl):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,s,i,a,u,l,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(n=p,u=Date.now(),this.removeTargets(t,n,e))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(t,n))).next(p=>(d=Date.now(),_n()<=Y.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${p} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function xd(r,t){return new D_(r,t)}/**
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
 */class N_{constructor(t,e){this.db=t,this.garbageCollector=xd(this,e)}gr(t){const e=this.wr(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pr(t,e){return this.Sr(t,(n,s)=>e(s))}addReference(t,e,n){return Vs(t,n)}removeReference(t,e,n){return Vs(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Vs(t,e)}br(t,e){return function(s,i){let a=!1;return wd(s).te(u=>Td(s,u,i).next(l=>(l&&(a=!0),b.resolve(!l)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(t,(a,u)=>{if(u<=e){const l=this.br(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,q.min()),_e(t).delete(function(p){return[0,Ct(p.path)]}(a))))});s.push(l)}}).next(()=>b.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Vs(t,e)}Sr(t,e){const n=_e(t);let s,i=zt.ce;return n.ee({index:ia},([a,u],{path:l,sequenceNumber:d})=>{a===0?(i!==zt.ce&&e(new O(Jt(s)),i),i=d,s=l):i=zt.ce}).next(()=>{i!==zt.ce&&e(new O(Jt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Vs(r,t){return _e(r).put(function(n,s){return{targetId:0,path:Ct(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
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
 */class Rd{constructor(){this.changes=new ue(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ht.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?b.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class k_{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Oe(t).put(n)}removeEntry(t,e,n){return Oe(t).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],ri(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Dr(t,n)))}getEntry(t,e){let n=ht.newInvalidDocument(e);return Oe(t).ee({index:Os,range:IDBKeyRange.only(hr(e))},(s,i)=>{n=this.Cr(e,i)}).next(()=>n)}vr(t,e){let n={size:0,document:ht.newInvalidDocument(e)};return Oe(t).ee({index:Os,range:IDBKeyRange.only(hr(e))},(s,i)=>{n={document:this.Cr(e,i),size:ii(i)}}).next(()=>n)}getEntries(t,e){let n=Bt();return this.Fr(t,e,(s,i)=>{const a=this.Cr(s,i);n=n.insert(s,a)}).next(()=>n)}Mr(t,e){let n=Bt(),s=new ut(O.comparator);return this.Fr(t,e,(i,a)=>{const u=this.Cr(i,a);n=n.insert(i,u),s=s.insert(i,ii(a))}).next(()=>({documents:n,Or:s}))}Fr(t,e,n){if(e.isEmpty())return b.resolve();let s=new st(ol);e.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(hr(s.first()),hr(s.last())),a=s.getIterator();let u=a.getNext();return Oe(t).ee({index:Os,range:i},(l,d,f)=>{const p=O.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&ol(u,p)<0;)n(u,null),u=a.getNext();u&&u.isEqual(p)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?f.j(hr(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),ri(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Oe(t).J(IDBKeyRange.bound(u,l,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let f=Bt();for(const p of d){const _=this.Cr(O.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);_.isFoundDocument()&&(Xr(e,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(t,e,n,s){let i=Bt();const a=il(e,n),u=il(e,Ut.max());return Oe(t).ee({index:ph,range:IDBKeyRange.bound(a,u,!0)},(l,d,f)=>{const p=this.Cr(O.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(t){return new M_(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return sl(t).get(xo).next(e=>(U(!!e,20021),e))}Dr(t,e){return sl(t).put(xo,e)}Cr(t,e){if(e){const n=E_(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(q.min())))return n}return ht.newInvalidDocument(t)}}function Sd(r){return new k_(r)}class M_ extends Rd{constructor(t,e){super(),this.Nr=t,this.trackRemovals=e,this.Br=new ue(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new st((i,a)=>$(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.Br.get(i);if(e.push(this.Nr.removeEntry(t,i,u.readTime)),a.isValidDocument()){const l=Uc(this.Nr.serializer,a);s=s.add(i.path.popLast());const d=ii(l);n+=d-u.size,e.push(this.Nr.addEntry(t,i,l))}else if(n-=u.size,this.trackRemovals){const l=Uc(this.Nr.serializer,a.convertToNoDocument(q.min()));e.push(this.Nr.addEntry(t,i,l))}}),s.forEach(i=>{e.push(this.Nr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.Nr.updateMetadata(t,n)),b.waitFor(e)}getFromCache(t,e){return this.Nr.vr(t,e).next(n=>(this.Br.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.Nr.Mr(t,e).next(({documents:n,Or:s})=>(s.forEach((i,a)=>{this.Br.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function sl(r){return yt(r,Or)}function Oe(r){return yt(r,Js)}function hr(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function il(r,t){const e=t.documentKey.path.toArray();return[r,ri(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function ol(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=$(e[i],n[i]),s)return s;return s=$(e.length,n.length),s||(s=$(e[e.length-2],n[n.length-2]),s||$(e[e.length-1],n[n.length-1]))}/**
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
 */class O_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Pd{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&Rr(n.mutation,s,Ot.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,Q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=Q()){const s=Yt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=pr();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=Yt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Q()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,s){let i=Bt();const a=xr(),u=function(){return xr()}();return e.forEach((l,d)=>{const f=n.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof ce)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Rr(f.mutation,d,f.mutation.getFieldMask(),nt.now())):a.set(d.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>u.set(d,new O_(f,a.get(d)??null))),u))}recalculateAndSaveOverlays(t,e){const n=xr();let s=new ut((a,u)=>a-u),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=e.get(l);if(d===null)return;let f=n.get(l)||Ot.empty();f=u.applyToLocalView(d,f),n.set(l,f);const p=(s.get(u.batchId)||Q()).add(l);s=s.insert(u.batchId,p)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,f=l.value,p=Kh();f.forEach(_=>{if(!i.has(_)){const R=Yh(e.get(_),n.get(_));R!==null&&p.set(_,R),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,p))}return b.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Uh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):b.resolve(Yt());let u=Dr,l=i;return a.next(d=>b.forEach(d,(f,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),i.get(f)?b.resolve():this.remoteDocumentCache.getEntry(t,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,l,d,Q())).next(f=>({batchId:u,changes:Gh(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(n=>{let s=pr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=pr();return this.indexManager.getCollectionParents(t,i).next(u=>b.forEach(u,l=>{const d=function(p,_){return new Un(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(f=>{f.forEach((p,_)=>{a=a.insert(p,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,ht.newInvalidDocument(f)))});let u=pr();return a.forEach((l,d)=>{const f=i.get(l);f!==void 0&&Rr(f.mutation,d,Ot.empty(),nt.now()),Xr(e,d)&&(u=u.insert(l,d))}),u})}}/**
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
 */class L_{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return b.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Mt(s.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(s){return{name:s.name,query:_d(s.bundledQuery),readTime:Mt(s.readTime)}}(e)),b.resolve()}}/**
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
 */class F_{constructor(){this.overlays=new ut(O.comparator),this.qr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Yt();return b.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.St(t,e,i)}),b.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(n)),b.resolve()}getOverlaysForCollection(t,e,n){const s=Yt(),i=e.length+1,a=new O(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return b.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new ut((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let f=i.get(d.largestBatchId);f===null&&(f=Yt(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=Yt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>u.set(d,f)),!(u.size()>=s)););return b.resolve(u)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new ga(e,n));let i=this.qr.get(e);i===void 0&&(i=Q(),this.qr.set(e,i)),this.qr.set(e,i.add(n.key))}}/**
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
 */class j_{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
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
 */class va{constructor(){this.Qr=new st(Et.$r),this.Ur=new st(Et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new Et(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Gr(new Et(t,e))}zr(t,e){t.forEach(n=>this.removeReference(n,e))}jr(t){const e=new O(new et([])),n=new Et(e,t),s=new Et(e,t+1),i=[];return this.Ur.forEachInRange([n,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new O(new et([])),n=new Et(e,t),s=new Et(e,t+1);let i=Q();return this.Ur.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new Et(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class Et{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return O.comparator(t.key,e.key)||$(t.Yr,e.Yr)}static Kr(t,e){return $(t.Yr,e.Yr)||O.comparator(t.key,e.key)}}/**
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
 */class B_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new st(Et.$r)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ma(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Zr=this.Zr.add(new Et(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ei(n),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Ge:this.tr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Et(e,0),s=new Et(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,s],a=>{const u=this.Xr(a.Yr);i.push(u)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st($);return e.forEach(s=>{const i=new Et(s,0),a=new Et(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],u=>{n=n.add(u.Yr)})}),b.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;O.isDocumentKey(i)||(i=i.child(""));const a=new Et(new O(i),0);let u=new st($);return this.Zr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Yr)),!0)},a),b.resolve(this.ti(u))}ti(t){const e=[];return t.forEach(n=>{const s=this.Xr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){U(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return b.forEach(e.mutations,s=>{const i=new Et(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new Et(e,0),s=this.Zr.firstAfterOrEqual(n);return b.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class U_{constructor(t){this.ri=t,this.docs=function(){return new ut(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return b.resolve(n?n.document.mutableCopy():ht.newInvalidDocument(e))}getEntries(t,e){let n=Bt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),b.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Bt();const a=e.path,u=new O(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ra(lh(f),n)<=0||(s.has(f.key)||Xr(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(t,e,n,s){j(9500)}ii(t,e){return b.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new q_(this)}getSize(t){return b.resolve(this.size)}}class q_ extends Rd{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(n)}),b.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class z_{constructor(t){this.persistence=t,this.si=new ue(e=>Ye(e),Qr),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.oi=0,this._i=new va,this.targetCount=0,this.ai=en.ur()}forEachTarget(t,e){return this.si.forEach((n,s)=>e(s)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),b.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new en(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Pr(e),b.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.si.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return b.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),b.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),b.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return b.resolve(n)}containsKey(t,e){return b.resolve(this._i.containsKey(e))}}/**
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
 */class Ta{constructor(t,e){this.ui={},this.overlays={},this.ci=new zt(0),this.li=!1,this.li=!0,this.hi=new j_,this.referenceDelegate=t(this),this.Pi=new z_(this),this.indexManager=new S_,this.remoteDocumentCache=function(s){return new U_(s)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new pd(e),this.Ii=new L_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new F_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new B_(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const s=new $_(this.ci.next());return this.referenceDelegate.Ei(),n(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(t,e){return b.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class $_ extends dh{constructor(t){super(),this.currentSequenceNumber=t}}class Ri{constructor(t){this.persistence=t,this.Ri=new va,this.Vi=null}static mi(t){return new Ri(t)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),b.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),b.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,n=>{const s=O.fromPath(n);return this.gi(t,s).next(i=>{i||e.removeEntry(s,q.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return b.or([()=>b.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class oi{constructor(t,e){this.persistence=t,this.pi=new ue(n=>Ct(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=xd(this,e)}static mi(t,e){return new oi(t,e)}Ei(){}di(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}pr(t,e){return b.forEach(this.pi,(n,s)=>this.br(t,n,s).next(i=>i?b.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(u=>{u||(n++,i.removeEntry(a,q.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Fs(t.data.value)),e}br(t,e,n){return b.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return b.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class G_{constructor(t){this.serializer=t}k(t,e,n,s){const i=new fi("createOrUpgrade",e);n<1&&s>=1&&(function(l){l.createObjectStore(Wr)}(t),function(l){l.createObjectStore(Mr,{keyPath:ng}),l.createObjectStore(Ht,{keyPath:_c,autoIncrement:!0}).createIndex($e,yc,{unique:!0}),l.createObjectStore(Rn)}(t),al(t),function(l){l.createObjectStore(je)}(t));let a=b.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(Pn),l.deleteObjectStore(Sn),l.deleteObjectStore(Ke)}(t),al(t)),a=a.next(()=>function(l){const d=l.store(Ke),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return d.put(Ys,f)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(l,d){return d.store(Ht).J().next(p=>{l.deleteObjectStore(Ht),l.createObjectStore(Ht,{keyPath:_c,autoIncrement:!0}).createIndex($e,yc,{unique:!0});const _=d.store(Ht),R=p.map(C=>_.put(C));return b.waitFor(R)})}(t,i))),a=a.next(()=>{(function(l){l.createObjectStore(Vn,{keyPath:hg})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.yi(i))),n<6&&s>=6&&(a=a.next(()=>(function(l){l.createObjectStore(Or)}(t),this.wi(i)))),n<7&&s>=7&&(a=a.next(()=>this.Si(i))),n<8&&s>=8&&(a=a.next(()=>this.bi(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.Di(i))),n<11&&s>=11&&(a=a.next(()=>{(function(l){l.createObjectStore(pi,{keyPath:dg})})(t),function(l){l.createObjectStore(gi,{keyPath:fg})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(l){const d=l.createObjectStore(_i,{keyPath:Eg});d.createIndex(So,vg,{unique:!1}),d.createIndex(Ih,Tg,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(l){const d=l.createObjectStore(Js,{keyPath:sg});d.createIndex(Os,ig),d.createIndex(ph,og)}(t)).next(()=>this.Ci(t,i)).next(()=>t.deleteObjectStore(je))),n<14&&s>=14&&(a=a.next(()=>this.Fi(t,i))),n<15&&s>=15&&(a=a.next(()=>function(l){l.createObjectStore(oa,{keyPath:mg,autoIncrement:!0}).createIndex(Ro,pg,{unique:!1}),l.createObjectStore(Tr,{keyPath:gg}).createIndex(_h,_g,{unique:!1}),l.createObjectStore(wr,{keyPath:yg}).createIndex(yh,Ig,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore(Tr).clear()}).next(()=>{e.objectStore(wr).clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(l){l.createObjectStore(aa,{keyPath:wg})})(t)})),n<18&&s>=18&&zl()&&(a=a.next(()=>{e.objectStore(Tr).clear()}).next(()=>{e.objectStore(wr).clear()})),a}wi(t){let e=0;return t.store(je).ee((n,s)=>{e+=ii(s)}).next(()=>{const n={byteSize:e};return t.store(Or).put(xo,n)})}yi(t){const e=t.store(Mr),n=t.store(Ht);return e.J().next(s=>b.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,Ge],[i.userId,i.lastAcknowledgedBatchId]);return n.J($e,a).next(u=>b.forEach(u,l=>{U(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const d=Ue(this.serializer,l);return vd(t,i.userId,d).next(()=>{})}))}))}Si(t){const e=t.store(Pn),n=t.store(je);return t.store(Ke).get(Ys).next(s=>{const i=[];return n.ee((a,u)=>{const l=new et(a),d=function(p){return[0,Ct(p)]}(l);i.push(e.get(d).next(f=>f?b.resolve():(p=>e.put({targetId:0,path:Ct(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>b.waitFor(i))})}bi(t,e){t.createObjectStore(Lr,{keyPath:lg});const n=e.store(Lr),s=new Ea,i=a=>{if(s.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:Ct(l)})}};return e.store(je).ee({X:!0},(a,u)=>{const l=new et(a);return i(l.popLast())}).next(()=>e.store(Rn).ee({X:!0},([a,u,l],d)=>{const f=Jt(u);return i(f.popLast())}))}Di(t){const e=t.store(Sn);return e.ee((n,s)=>{const i=_r(s),a=gd(this.serializer,i);return e.put(a)})}Ci(t,e){const n=e.store(je),s=[];return n.ee((i,a)=>{const u=e.store(Js),l=function(p){return p.document?new O(et.fromString(p.document.name).popFirst(5)):p.noDocument?O.fromSegments(p.noDocument.path):p.unknownDocument?O.fromSegments(p.unknownDocument.path):j(36783)}(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))}).next(()=>b.waitFor(s))}Fi(t,e){const n=e.store(Ht),s=Sd(this.serializer),i=new Ta(Ri.mi,this.serializer.yt);return n.J().next(a=>{const u=new Map;return a.forEach(l=>{let d=u.get(l.userId)??Q();Ue(this.serializer,l).keys().forEach(f=>d=d.add(f)),u.set(l.userId,d)}),b.forEach(u,(l,d)=>{const f=new Tt(d),p=bi.wt(this.serializer,f),_=i.getIndexManager(f),R=xi.wt(f,this.serializer,_,i.referenceDelegate);return new Pd(s,R,p,_).recalculateAndSaveOverlaysForDocumentKeys(new Po(e,zt.ce),l).next()})})}}function al(r){r.createObjectStore(Pn,{keyPath:ug}).createIndex(ia,cg,{unique:!0}),r.createObjectStore(Sn,{keyPath:"targetId"}).createIndex(gh,ag,{unique:!0}),r.createObjectStore(Ke)}const ge="IndexedDbPersistence",ho=18e5,fo=5e3,mo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",K_="main";class wa{constructor(t,e,n,s,i,a,u,l,d,f,p=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Mi=i,this.window=a,this.document=u,this.xi=d,this.Oi=f,this.Ni=p,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=_=>Promise.resolve(),!wa.v())throw new k(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new N_(this,s),this.$i=e+K_,this.serializer=new pd(l),this.Ui=new we(this.$i,this.Ni,new G_(this.serializer)),this.hi=new T_,this.Pi=new V_(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Sd(this.serializer),this.Ii=new v_,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,f===!1&&kt(ge,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(P.FAILED_PRECONDITION,mo);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Pi.getHighestSequenceNumber(t))}).then(t=>{this.ci=new zt(t,this.xi)}).then(()=>{this.li=!0}).catch(t=>(this.Ui&&this.Ui.close(),Promise.reject(t)))}Ji(t){return this.Qi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ui.$(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Cs(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(t).next(e=>{e||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(t)).next(e=>this.isPrimary&&!e?this.Zi(t).next(()=>!1):!!e&&this.Xi(t).next(()=>!0))).catch(t=>{if(Ve(t))return N(ge,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return N(ge,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Mi.enqueueRetryable(()=>this.Qi(t)),this.isPrimary=t})}Hi(t){return dr(t).get(hn).next(e=>b.resolve(this.es(e)))}ts(t){return Cs(t).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,ho)){this.qi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=yt(e,Vn);return n.J().next(s=>{const i=this.ss(s,ho),a=s.filter(u=>i.indexOf(u)===-1);return b.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Ki)for(const e of t)this.Ki.removeItem(this._s(e.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(t){return!!t&&t.ownerId===this.clientId}Yi(t){return this.Oi?b.resolve(!0):dr(t).get(hn).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,fo)&&!this.us(e.ownerId)){if(this.es(e)&&this.networkEnabled)return!0;if(!this.es(e)){if(!e.allowTabSynchronization)throw new k(P.FAILED_PRECONDITION,mo);return!1}}return!(!this.networkEnabled||!this.inForeground)||Cs(t).J().next(n=>this.ss(n,fo).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&N(ge,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Wr,Vn],t=>{const e=new Po(t,zt.ce);return this.Zi(e).next(()=>this.ts(e))}),this.Ui.close(),this.Ps()}ss(t,e){return t.filter(n=>this.rs(n.updateTimeMs,e)&&!this.us(n.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",t=>Cs(t).J().next(e=>this.ss(e,ho).map(n=>n.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(t,e){return xi.wt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new P_(t,this.serializer.yt.databaseId)}getDocumentOverlayCache(t){return bi.wt(this.serializer,t)}getBundleCache(){return this.Ii}runTransaction(t,e,n){N(ge,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(l){return l===18?xg:l===17?wh:l===16?bg:l===15?ua:l===14?Th:l===13?vh:l===12?Ag:l===11?Eh:void j(60245)}(this.Ni);let a;return this.Ui.runTransaction(t,s,i,u=>(a=new Po(u,this.ci?this.ci.next():zt.ce),e==="readwrite-primary"?this.Hi(a).next(l=>!!l||this.Yi(a)).next(l=>{if(!l)throw kt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new k(P.FAILED_PRECONDITION,hh);return n(a)}).next(l=>this.Xi(a).next(()=>l)):this.Is(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Is(t){return dr(t).get(hn).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,fo)&&!this.us(e.ownerId)&&!this.es(e)&&!(this.Oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new k(P.FAILED_PRECONDITION,mo)})}Xi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return dr(t).put(hn,e)}static v(){return we.v()}Zi(t){const e=dr(t);return e.get(hn).next(n=>this.es(n)?(N(ge,"Releasing primary lease."),e.delete(hn)):b.resolve())}rs(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(kt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var t;typeof((t=this.window)==null?void 0:t.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;ql()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(t){var e;try{const n=((e=this.Ki)==null?void 0:e.getItem(this._s(t)))!==null;return N(ge,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return kt(ge,"Failed to get zombied client id.",n),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(t){kt("Failed to set zombie client id.",t)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function dr(r){return yt(r,Wr)}function Cs(r){return yt(r,Vn)}function H_(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
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
 */class Aa{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=s}static As(t,e){let n=Q(),s=Q();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Aa(t,e.fromCache,n,s)}}/**
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
 */class W_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Vd{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return ql()?8:fh(Ks())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ys(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new W_;return this.Ss(t,e,a).next(u=>{if(i.result=u,this.Vs)return this.bs(t,e,a,u.size)})}).next(()=>i.result)}bs(t,e,n,s){return n.documentReadCount<this.fs?(_n()<=Y.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",yn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(_n()<=Y.DEBUG&&N("QueryEngine","Query:",yn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(_n()<=Y.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",yn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,$t(e))):b.resolve())}ys(t,e){if(Cc(e))return b.resolve(null);let n=$t(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Oo(e,null,"F"),n=$t(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=Q(...i);return this.ps.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(l=>{const d=this.Ds(e,u);return this.Cs(e,d,a,l.readTime)?this.ys(t,Oo(e,null,"F")):this.vs(t,d,e,l)}))})))}ws(t,e,n,s){return Cc(e)||s.isEqual(q.min())?b.resolve(null):this.ps.getDocuments(t,n).next(i=>{const a=this.Ds(e,i);return this.Cs(e,a,n,s)?b.resolve(null):(_n()<=Y.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),yn(e)),this.vs(t,a,e,Qp(s,Dr)).next(u=>u))})}Ds(t,e){let n=new st(zh(t));return e.forEach((s,i)=>{Xr(t,i)&&(n=n.add(i))}),n}Cs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,n){return _n()<=Y.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",yn(e)),this.ps.getDocumentsMatchingQuery(t,e,Ut.min(),n)}vs(t,e,n,s){return this.ps.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ba="LocalStore",Q_=3e8;class X_{constructor(t,e,n,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new ut($),this.xs=new ue(i=>Ye(i),Qr),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Pd(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function Cd(r,t,e,n){return new X_(r,t,e,n)}async function Dd(r,t){const e=G(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let l=Q();for(const d of s){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){u.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return e.localDocuments.getDocuments(n,l).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:u}))})})}function J_(r,t){const e=G(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return function(u,l,d,f){const p=d.batch,_=p.keys();let R=b.resolve();return _.forEach(C=>{R=R.next(()=>f.getEntry(l,C)).next(D=>{const V=d.docVersions.get(C);U(V!==null,48541),D.version.compareTo(V)<0&&(p.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(l,p))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let l=Q();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Nd(r){const t=G(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function Y_(r,t){const e=G(r),n=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const u=[];t.targetChanges.forEach((f,p)=>{const _=s.get(p);if(!_)return;u.push(e.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>e.Pi.addMatchingKeys(i,f.addedDocuments,p)));let R=_.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?R=R.withResumeToken(gt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),s=s.insert(p,R),function(D,V,B){return D.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Q_?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(_,R,f)&&u.push(e.Pi.updateTargetData(i,R))});let l=Bt(),d=Q();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push(Z_(i,a,t.documentUpdates).next(f=>{l=f.ks,d=f.qs})),!n.isEqual(q.min())){const f=e.Pi.getLastRemoteSnapshotVersion(i).next(p=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(f)}return b.waitFor(u).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(e.Ms=s,i))}function Z_(r,t,e){let n=Q(),s=Q();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Bt();return e.forEach((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(q.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):N(ba,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{ks:a,qs:s}})}function ty(r,t){const e=G(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Ge),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function ey(r,t){const e=G(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Pi.getTargetData(n,t).next(i=>i?(s=i,b.resolve(s)):e.Pi.allocateTargetId(n).next(a=>(s=new se(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n})}async function $o(r,t,e){const n=G(r),s=n.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ve(a))throw a;N(ba,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ms=n.Ms.remove(t),n.xs.delete(s.target)}function ul(r,t,e){const n=G(r);let s=q.min(),i=Q();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){const p=G(l),_=p.xs.get(f);return _!==void 0?b.resolve(p.Ms.get(_)):p.Pi.getTargetData(d,f)}(n,a,$t(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>n.Fs.getDocumentsMatchingQuery(a,t,e?s:q.min(),e?i:Q())).next(u=>(ny(n,Ug(t),u),{documents:u,Qs:i})))}function ny(r,t,e){let n=r.Os.get(t)||q.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Os.set(t,n)}class cl{constructor(){this.activeTargetIds=Hg()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class kd{constructor(){this.Mo=new cl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new cl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ry{Oo(t){}shutdown(){}}/**
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
 */const ll="ConnectivityMonitor";class hl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){N(ll,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){N(ll,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ds=null;function Go(){return Ds===null?Ds=function(){return 268435456+Math.round(2147483648*Math.random())}():Ds++,"0x"+Ds.toString(16)}/**
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
 */const po="RestConnection",sy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iy{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===jr?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(t,e,n,s,i){const a=Go(),u=this.zo(t,e.toUriEncodedString());N(po,`Sending RPC '${t}' ${a}:`,u,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:d}=new URL(u),f=hi(d);return this.Jo(t,u,l,n,f).then(p=>(N(po,`Received RPC '${t}' ${a}: `,p),p),p=>{throw bn(po,`RPC '${t}' ${a} failed with error: `,p,"url: ",u,"request:",n),p})}Ho(t,e,n,s,i,a){return this.Go(t,e,n,s,i)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),n&&n.headers.forEach((s,i)=>t[i]=s)}zo(t,e){const n=sy[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
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
 */class oy{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const St="WebChannelConnection";class ay extends iy{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,s,i){const a=Go();return new Promise((u,l)=>{const d=new th;d.setWithCredentials(!0),d.listenOnce(eh.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ns.NO_ERROR:const p=d.getResponseJson();N(St,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),u(p);break;case Ns.TIMEOUT:N(St,`RPC '${t}' ${a} timed out`),l(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ns.HTTP_ERROR:const _=d.getStatus();if(N(St,`RPC '${t}' ${a} failed with status:`,_,"response text:",d.getResponseText()),_>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const D=function(B){const L=B.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(L)>=0?L:P.UNKNOWN}(C.status);l(new k(D,C.message))}else l(new k(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new k(P.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(St,`RPC '${t}' ${a} completed.`)}});const f=JSON.stringify(s);N(St,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",f,n,15)})}T_(t,e,n){const s=Go(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=sh(),u=rh(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const f=i.join("");N(St,`Creating RPC '${t}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);this.I_(p);let _=!1,R=!1;const C=new oy({Yo:V=>{R?N(St,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(_||(N(St,`Opening RPC '${t}' stream ${s} transport.`),p.open(),_=!0),N(St,`RPC '${t}' stream ${s} sending:`,V),p.send(V))},Zo:()=>p.close()}),D=(V,B,L)=>{V.listen(B,F=>{try{L(F)}catch(z){setTimeout(()=>{throw z},0)}})};return D(p,mr.EventType.OPEN,()=>{R||(N(St,`RPC '${t}' stream ${s} transport opened.`),C.o_())}),D(p,mr.EventType.CLOSE,()=>{R||(R=!0,N(St,`RPC '${t}' stream ${s} transport closed`),C.a_(),this.E_(p))}),D(p,mr.EventType.ERROR,V=>{R||(R=!0,bn(St,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),C.a_(new k(P.UNAVAILABLE,"The operation could not be completed")))}),D(p,mr.EventType.MESSAGE,V=>{var B;if(!R){const L=V.data[0];U(!!L,16349);const F=L,z=(F==null?void 0:F.error)||((B=F[0])==null?void 0:B.error);if(z){N(St,`RPC '${t}' stream ${s} received error:`,z);const Z=z.status;let W=function(E){const T=mt[E];if(T!==void 0)return ed(T)}(Z),w=z.message;W===void 0&&(W=P.INTERNAL,w="Unknown error status: "+Z+" with message "+z.message),R=!0,C.a_(new k(W,w)),p.close()}else N(St,`RPC '${t}' stream ${s} received:`,L),C.u_(L)}}),D(u,nh.STAT_EVENT,V=>{V.stat===wo.PROXY?N(St,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===wo.NOPROXY&&N(St,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}/**
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
 */function uy(){return typeof window<"u"?window:null}function zs(){return typeof document<"u"?document:null}/**
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
 */function Si(r){return new l_(r,!0)}/**
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
 */class Md{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const dl="PersistentStream";class Od{constructor(t,e,n,s,i,a,u,l){this.Mi=t,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Md(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(kt(e.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===e&&this.G_(n,s)},n=>{t(()=>{const s=new k(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return N(dl,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(N(dl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cy extends Od{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=f_(this.serializer,t),n=function(i){if(!("targetChange"in i))return q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Mt(a.readTime):q.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=jo(this.serializer),e.addTarget=function(i,a){let u;const l=a.target;if(u=Zs(l)?{documents:cd(i,l)}:{query:ld(i,l).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=sd(i,a.resumeToken);const d=Lo(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){u.readTime=Ln(i,a.snapshotVersion.toTimestamp());const d=Lo(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=p_(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=jo(this.serializer),e.removeTarget=t,this.q_(e)}}class ly extends Od{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return U(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,U(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){U(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=m_(t.writeResults,t.commitTime),n=Mt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=jo(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>ni(this.serializer,n))};this.q_(e)}}/**
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
 */class hy{}class dy extends hy{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(t,Fo(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(P.UNKNOWN,i.toString())})}Ho(t,e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Ho(t,Fo(e,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(P.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class fy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
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
 */const nn="RemoteStore";class my{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{n.enqueueAndForget(async()=>{sn(this)&&(N(nn,"Restarting streams for network reachability change."),await async function(l){const d=G(l);d.Ea.add(4),await Zr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Pi(d)}(this))})}),this.Ra=new fy(n,s)}}async function Pi(r){if(sn(r))for(const t of r.da)await t(!0)}async function Zr(r){for(const t of r.da)await t(!1)}function Ld(r,t){const e=G(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Pa(e)?Sa(e):zn(e).O_()&&Ra(e,t))}function xa(r,t){const e=G(r),n=zn(e);e.Ia.delete(t),n.O_()&&Fd(e,t),e.Ia.size===0&&(n.O_()?n.L_():sn(e)&&e.Ra.set("Unknown"))}function Ra(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}zn(r).Y_(t)}function Fd(r,t){r.Va.Ue(t),zn(r).Z_(t)}function Sa(r){r.Va=new o_({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),zn(r).start(),r.Ra.ua()}function Pa(r){return sn(r)&&!zn(r).x_()&&r.Ia.size>0}function sn(r){return G(r).Ea.size===0}function jd(r){r.Va=void 0}async function py(r){r.Ra.set("Online")}async function gy(r){r.Ia.forEach((t,e)=>{Ra(r,t)})}async function _y(r,t){jd(r),Pa(r)?(r.Ra.ha(t),Sa(r)):r.Ra.set("Unknown")}async function yy(r,t,e){if(r.Ra.set("Online"),t instanceof rd&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.Va.removeTarget(u))}(r,t)}catch(n){N(nn,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ai(r,n)}else if(t instanceof Us?r.Va.Ze(t):t instanceof nd?r.Va.st(t):r.Va.tt(t),!e.isEqual(q.min()))try{const n=await Nd(r.localStore);e.compareTo(n)>=0&&await function(i,a){const u=i.Va.Tt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(gt.EMPTY_BYTE_STRING,f.snapshotVersion)),Fd(i,l);const p=new se(f.target,l,d,f.sequenceNumber);Ra(i,p)}),i.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){N(nn,"Failed to raise snapshot:",n),await ai(r,n)}}async function ai(r,t,e){if(!Ve(t))throw t;r.Ea.add(1),await Zr(r),r.Ra.set("Offline"),e||(e=()=>Nd(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(nn,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await Pi(r)})}function Bd(r,t){return t().catch(e=>ai(r,e,t))}async function ts(r){const t=G(r),e=Re(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ge;for(;Iy(t);)try{const s=await ty(t.localStore,n);if(s===null){t.Ta.length===0&&e.L_();break}n=s.batchId,Ey(t,s)}catch(s){await ai(t,s)}Ud(t)&&qd(t)}function Iy(r){return sn(r)&&r.Ta.length<10}function Ey(r,t){r.Ta.push(t);const e=Re(r);e.O_()&&e.X_&&e.ea(t.mutations)}function Ud(r){return sn(r)&&!Re(r).x_()&&r.Ta.length>0}function qd(r){Re(r).start()}async function vy(r){Re(r).ra()}async function Ty(r){const t=Re(r);for(const e of r.Ta)t.ea(e.mutations)}async function wy(r,t,e){const n=r.Ta.shift(),s=pa.from(n,t,e);await Bd(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await ts(r)}async function Ay(r,t){t&&Re(r).X_&&await async function(n,s){if(function(a){return r_(a)&&a!==P.ABORTED}(s.code)){const i=n.Ta.shift();Re(n).B_(),await Bd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ts(n)}}(r,t),Ud(r)&&qd(r)}async function fl(r,t){const e=G(r);e.asyncQueue.verifyOperationInProgress(),N(nn,"RemoteStore received new credentials");const n=sn(e);e.Ea.add(3),await Zr(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Pi(e)}async function by(r,t){const e=G(r);t?(e.Ea.delete(2),await Pi(e)):t||(e.Ea.add(2),await Zr(e),e.Ra.set("Unknown"))}function zn(r){return r.ma||(r.ma=function(e,n,s){const i=G(e);return i.sa(),new cy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:py.bind(null,r),t_:gy.bind(null,r),r_:_y.bind(null,r),H_:yy.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),Pa(r)?Sa(r):r.Ra.set("Unknown")):(await r.ma.stop(),jd(r))})),r.ma}function Re(r){return r.fa||(r.fa=function(e,n,s){const i=G(e);return i.sa(),new ly(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:vy.bind(null,r),r_:Ay.bind(null,r),ta:Ty.bind(null,r),na:wy.bind(null,r)}),r.da.push(async t=>{t?(r.fa.B_(),await ts(r)):(await r.fa.stop(),r.Ta.length>0&&(N(nn,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class Va{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new Va(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ca(r,t){if(kt("AsyncQueue",`${t}: ${r}`),Ve(r))return new k(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class ml{constructor(){this.ga=new ut(O.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):j(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class Fn{constructor(t,e,n,s,i,a,u,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Fn(t,e,wn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class xy{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Ry{constructor(){this.queries=pl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=G(e),i=s.queries;s.queries=pl(),i.forEach((a,u)=>{for(const l of u.Sa)l.onError(n)})})(this,new k(P.ABORTED,"Firestore shutting down"))}}function pl(){return new ue(r=>qh(r),vi)}async function Sy(r,t){const e=G(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(n=2):(i=new xy,n=t.Da()?0:1);try{switch(n){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Ca(a,`Initialization of query '${yn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&Da(e)}async function Py(r,t){const e=G(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Vy(r,t){const e=G(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.Sa)u.Fa(s)&&(n=!0);a.wa=s}}n&&Da(e)}function Cy(r,t,e){const n=G(r),s=n.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);n.queries.delete(t)}function Da(r){r.Ca.forEach(t=>{t.next()})}var Ko,gl;(gl=Ko||(Ko={})).Ma="default",gl.Cache="cache";class Dy{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Fn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Fn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Ko.Cache}}/**
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
 */class zd{constructor(t){this.key=t}}class $d{constructor(t){this.key=t}}class Ny{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Q(),this.mutatedKeys=Q(),this.eu=zh(t),this.tu=new wn(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new ml,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,p)=>{const _=s.get(f),R=Xr(this.query,p)?p:null,C=!!_&&this.mutatedKeys.has(_.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;_&&R?_.data.isEqual(R.data)?C!==D&&(n.track({type:3,doc:R}),V=!0):this.su(_,R)||(n.track({type:2,doc:R}),V=!0,(l&&this.eu(R,l)>0||d&&this.eu(R,d)<0)&&(u=!0)):!_&&R?(n.track({type:0,doc:R}),V=!0):_&&!R&&(n.track({type:1,doc:_}),V=!0,(l||d)&&(u=!0)),V&&(R?(a=a.add(R),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{tu:a,iu:n,Cs:u,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((f,p)=>function(R,C){const D=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Rt:V})}};return D(R)-D(C)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(n),s=s??!1;const u=e&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,d=l!==this.Za;return this.Za=l,a.length!==0||d?{snapshot:new Fn(this.query,t.tu,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ml,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Q(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const e=[];return t.forEach(n=>{this.Xa.has(n)||e.push(new $d(n))}),this.Xa.forEach(n=>{t.has(n)||e.push(new zd(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=Q();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Fn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Na="SyncEngine";class ky{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class My{constructor(t){this.key=t,this.hu=!1}}class Oy{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new ue(u=>qh(u),vi),this.Iu=new Map,this.Eu=new Set,this.du=new ut(O.comparator),this.Au=new Map,this.Ru=new va,this.Vu={},this.mu=new Map,this.fu=en.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ly(r,t,e=!0){const n=Xd(r);let s;const i=n.Tu.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Gd(n,t,e,!0),s}async function Fy(r,t){const e=Xd(r);await Gd(e,t,!0,!1)}async function Gd(r,t,e,n){const s=await ey(r.localStore,$t(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await jy(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Ld(r.remoteStore,s),u}async function jy(r,t,e,n,s){r.pu=(p,_,R)=>async function(D,V,B,L){let F=V.view.ru(B);F.Cs&&(F=await ul(D.localStore,V.query,!1).then(({documents:w})=>V.view.ru(w,F)));const z=L&&L.targetChanges.get(V.targetId),Z=L&&L.targetMismatches.get(V.targetId)!=null,W=V.view.applyChanges(F,D.isPrimaryClient,z,Z);return yl(D,V.targetId,W.au),W.snapshot}(r,p,_,R);const i=await ul(r.localStore,t,!0),a=new Ny(t,i.Qs),u=a.ru(i.documents),l=Yr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);yl(r,e,d.au);const f=new ky(t,e,a);return r.Tu.set(t,f),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),d.snapshot}async function By(r,t,e){const n=G(r),s=n.Tu.get(t),i=n.Iu.get(s.targetId);if(i.length>1)return n.Iu.set(s.targetId,i.filter(a=>!vi(a,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await $o(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&xa(n.remoteStore,s.targetId),Ho(n,s.targetId)}).catch(rn)):(Ho(n,s.targetId),await $o(n.localStore,s.targetId,!0))}async function Uy(r,t){const e=G(r),n=e.Tu.get(t),s=e.Iu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),xa(e.remoteStore,n.targetId))}async function qy(r,t,e){const n=Jd(r);try{const s=await function(a,u){const l=G(a),d=nt.now(),f=u.reduce((R,C)=>R.add(C.key),Q());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=Bt(),D=Q();return l.Ns.getEntries(R,f).next(V=>{C=V,C.forEach((B,L)=>{L.isValidDocument()||(D=D.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,C)).next(V=>{p=V;const B=[];for(const L of u){const F=e_(L,p.get(L.key).overlayedDocument);F!=null&&B.push(new ce(L.key,F,Nh(F.value.mapValue),_t.exists(!0)))}return l.mutationQueue.addMutationBatch(R,d,B,u)}).next(V=>{_=V;const B=V.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(R,V.batchId,B)})}).then(()=>({batchId:_.batchId,changes:Gh(p)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.Vu[a.currentUser.toKey()];d||(d=new ut($)),d=d.insert(u,l),a.Vu[a.currentUser.toKey()]=d}(n,s.batchId,e),await es(n,s.changes),await ts(n.remoteStore)}catch(s){const i=Ca(s,"Failed to persist write");e.reject(i)}}async function Kd(r,t){const e=G(r);try{const n=await Y_(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Au.get(i);a&&(U(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?U(a.hu,14607):s.removedDocuments.size>0&&(U(a.hu,42227),a.hu=!1))}),await es(e,n,t)}catch(n){await rn(n)}}function _l(r,t,e){const n=G(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Tu.forEach((i,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=G(a);l.onlineState=u;let d=!1;l.queries.forEach((f,p)=>{for(const _ of p.Sa)_.va(u)&&(d=!0)}),d&&Da(l)}(n.eventManager,t),s.length&&n.Pu.H_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function zy(r,t,e){const n=G(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Au.get(t),i=s&&s.key;if(i){let a=new ut(O.comparator);a=a.insert(i,ht.newNoDocument(i,q.min()));const u=Q().add(i),l=new Ai(q.min(),new Map,new ut($),a,u);await Kd(n,l),n.du=n.du.remove(i),n.Au.delete(t),ka(n)}else await $o(n.localStore,t,!1).then(()=>Ho(n,t,e)).catch(rn)}async function $y(r,t){const e=G(r),n=t.batch.batchId;try{const s=await J_(e.localStore,t);Wd(e,n,null),Hd(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await es(e,s)}catch(s){await rn(s)}}async function Gy(r,t,e){const n=G(r);try{const s=await function(a,u){const l=G(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,u).next(p=>(U(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(d,p))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(n.localStore,t);Wd(n,t,e),Hd(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await es(n,s)}catch(s){await rn(s)}}function Hd(r,t){(r.mu.get(t)||[]).forEach(e=>{e.resolve()}),r.mu.delete(t)}function Wd(r,t,e){const n=G(r);let s=n.Vu[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Vu[n.currentUser.toKey()]=s}}function Ho(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(n=>{r.Ru.containsKey(n)||Qd(r,n)})}function Qd(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(xa(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),ka(r))}function yl(r,t,e){for(const n of e)n instanceof zd?(r.Ru.addReference(n.key,t),Ky(r,n)):n instanceof $d?(N(Na,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||Qd(r,n.key)):j(19791,{wu:n})}function Ky(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(N(Na,"New document in limbo: "+e),r.Eu.add(n),ka(r))}function ka(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new O(et.fromString(t)),n=r.fu.next();r.Au.set(n,new My(e)),r.du=r.du.insert(e,n),Ld(r.remoteStore,new se($t(Ei(e.path)),n,"TargetPurposeLimboResolution",zt.ce))}}async function es(r,t,e){const n=G(r),s=[],i=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((u,l)=>{a.push(n.pu(l,t,e).then(d=>{var f;if((d||e)&&n.isPrimaryClient){const p=d?!d.fromCache:(f=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){s.push(d);const p=Aa.As(l.targetId,d);i.push(p)}}))}),await Promise.all(a),n.Pu.H_(s),await async function(l,d){const f=G(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(d,_=>b.forEach(_.Es,R=>f.persistence.referenceDelegate.addReference(p,_.targetId,R)).next(()=>b.forEach(_.ds,R=>f.persistence.referenceDelegate.removeReference(p,_.targetId,R)))))}catch(p){if(!Ve(p))throw p;N(ba,"Failed to update sequence numbers: "+p)}for(const p of d){const _=p.targetId;if(!p.fromCache){const R=f.Ms.get(_),C=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(_,D)}}}(n.localStore,i))}async function Hy(r,t){const e=G(r);if(!e.currentUser.isEqual(t)){N(Na,"User change. New user:",t.toKey());const n=await Dd(e.localStore,t);e.currentUser=t,function(i,a){i.mu.forEach(u=>{u.forEach(l=>{l.reject(new k(P.CANCELLED,a))})}),i.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await es(e,n.Ls)}}function Wy(r,t){const e=G(r),n=e.Au.get(t);if(n&&n.hu)return Q().add(n.key);{let s=Q();const i=e.Iu.get(t);if(!i)return s;for(const a of i){const u=e.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function Xd(r){const t=G(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Kd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zy.bind(null,t),t.Pu.H_=Vy.bind(null,t.eventManager),t.Pu.yu=Cy.bind(null,t.eventManager),t}function Jd(r){const t=G(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$y.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Gy.bind(null,t),t}class Kr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Si(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Cd(this.persistence,new Vd,t.initialUser,this.serializer)}Cu(t){return new Ta(Ri.mi,this.serializer)}Du(t){return new kd}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Kr.provider={build:()=>new Kr};class Qy extends Kr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){U(this.persistence.referenceDelegate instanceof oi,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new bd(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new Ta(n=>oi.mi(n,e),this.serializer)}}class Xy extends Kr{constructor(t,e,n){super(),this.xu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xu.initialize(this,t),await Jd(this.xu.syncEngine),await ts(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(t){return Cd(this.persistence,new Vd,t.initialUser,this.serializer)}Fu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new bd(n,t.asyncQueue,e)}Mu(t,e){const n=new Zp(e,this.persistence);return new Yp(t.asyncQueue,n)}Cu(t){const e=H_(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new wa(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,uy(),zs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(t){return new kd}}class ui{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>_l(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hy.bind(null,this.syncEngine),await by(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ry}()}createDatastore(t){const e=Si(t.databaseInfo.databaseId),n=function(i){return new ay(i)}(t.databaseInfo);return function(i,a,u,l){return new dy(i,a,u,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,u){return new my(n,s,i,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>_l(this.syncEngine,e,0),function(){return hl.v()?new hl:new ry}())}createSyncEngine(t,e){return function(s,i,a,u,l,d,f){const p=new Oy(s,i,a,u,l,d);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=G(s);N(nn,"RemoteStore shutting down."),i.Ea.add(5),await Zr(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ui.provider={build:()=>new ui};/**
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
 */class Jy{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):kt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const Se="FirestoreClient";class Yy{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=na.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{N(Se,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(N(Se,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ca(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function go(r,t){r.asyncQueue.verifyOperationInProgress(),N(Se,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Dd(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Il(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Zy(r);N(Se,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>fl(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>fl(t.remoteStore,s)),r._onlineComponents=t}async function Zy(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(Se,"Using user provided OfflineComponentProvider");try{await go(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;bn("Error using user provided cache. Falling back to memory cache: "+e),await go(r,new Kr)}}else N(Se,"Using default OfflineComponentProvider"),await go(r,new Qy(void 0));return r._offlineComponents}async function Yd(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(Se,"Using user provided OnlineComponentProvider"),await Il(r,r._uninitializedComponentsProvider._online)):(N(Se,"Using default OnlineComponentProvider"),await Il(r,new ui))),r._onlineComponents}function tI(r){return Yd(r).then(t=>t.syncEngine)}async function El(r){const t=await Yd(r),e=t.eventManager;return e.onListen=Ly.bind(null,t.syncEngine),e.onUnlisten=By.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Fy.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Uy.bind(null,t.syncEngine),e}/**
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
 */function Zd(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const vl=new Map;/**
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
 */const tf="firestore.googleapis.com",Tl=!0;class wl{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tf,this.ssl=Tl}else this.host=t.host,this.ssl=t.ssl??Tl;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ed;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ad)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Wp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zd(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Vi{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wl(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Fp;switch(n.type){case"firstParty":return new qp(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vl.get(e);n&&(N("ComponentProvider","Removing Datastore"),vl.delete(e),n.terminate())}(this),Promise.resolve()}}function eI(r,t,e,n={}){var d;r=Qt(r,Vi);const s=hi(t),i=r._getSettings(),a={...i,emulatorOptions:r._getEmulatorOptions()},u=`${t}:${e}`;s&&(Bl(`https://${u}`),Em("Firestore",!0)),i.host!==tf&&i.host!==u&&bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:u,ssl:s,emulatorOptions:n};if(!Pr(l,a)&&(r._setSettings(l),n.mockUserToken)){let f,p;if(typeof n.mockUserToken=="string")f=n.mockUserToken,p=Tt.MOCK_USER;else{f=_m(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const _=n.mockUserToken.sub||n.mockUserToken.user_id;if(!_)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Tt(_)}r._authCredentials=new jp(new oh(f,p))}}/**
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
 */class on{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new on(this.firestore,t,this._query)}}class ft{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Hr(e,ft._jsonSchema))return new ft(t,n||null,new O(et.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:pt("string",ft._jsonSchemaVersion),referencePath:pt("string")};class Ae extends on{constructor(t,e,n){super(t,e,Ei(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new O(t))}withConverter(t){return new Ae(this.firestore,t,this._path)}}function Al(r,t,...e){if(r=Gt(r),uh("collection","path",t),r instanceof Vi){const n=et.fromString(t,...e);return dc(n),new Ae(r,null,n)}{if(!(r instanceof ft||r instanceof Ae))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(et.fromString(t,...e));return dc(n),new Ae(r.firestore,null,n)}}function We(r,t,...e){if(r=Gt(r),arguments.length===1&&(t=na.newId()),uh("doc","path",t),r instanceof Vi){const n=et.fromString(t,...e);return hc(n),new ft(r,null,new O(n))}{if(!(r instanceof ft||r instanceof Ae))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(et.fromString(t,...e));return hc(n),new ft(r.firestore,r instanceof Ae?r.converter:null,new O(n))}}/**
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
 */const bl="AsyncQueue";class xl{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Md(this,"async_queue_retry"),this._c=()=>{const n=zs();n&&N(bl,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=zs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=zs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Te;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Ve(t))throw t;N(bl,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,kt("INTERNAL UNHANDLED ERROR: ",Rl(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Va.createAndSchedule(this,t,e,n,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&j(47125,{Pc:Rl(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Rl(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function Sl(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class Pe extends Vi{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new xl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new xl(t),this._firestoreClient=void 0,await t}}}function nI(r,t,e){e||(e=jr);const n=Ql(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(Pr(i,t))return s;throw new k(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new k(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ad)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&hi(t.host)&&Bl(t.host),n.initialize({options:t,instanceIdentifier:e})}function rI(r,t){const e=typeof r=="object"?r:bp(),n=typeof r=="string"?r:jr,s=Ql(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=pm("firestore");i&&eI(s,...i)}return s}function Ma(r){if(r._terminated)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||sI(r),r._firestoreClient}function sI(r){var n,s,i;const t=r._freezeSettings(),e=function(u,l,d,f){return new Sg(u,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Zd(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((i=t.localCache)!=null&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new Yy(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(r._componentsProvider))}/**
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
 */class qt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qt(gt.fromBase64String(t))}catch(e){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new qt(gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Hr(t,qt._jsonSchema))return qt.fromBase64String(t.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:pt("string",qt._jsonSchemaVersion),bytes:pt("string")};/**
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
 */class ns{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Oa{constructor(t){this._methodName=t}}/**
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
 */class Zt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(t){if(Hr(t,Zt._jsonSchema))return new Zt(t.latitude,t.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:pt("string",Zt._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
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
 */class te{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:te._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Hr(t,te._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new te(t.vectorValues);throw new k(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}te._jsonSchemaVersion="firestore/vectorValue/1.0",te._jsonSchema={type:pt("string",te._jsonSchemaVersion),vectorValues:pt("object")};/**
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
 */const iI=/^__.*__$/;class oI{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new qn(t,this.data,e,this.fieldTransforms)}}class ef{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ce(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function nf(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:r})}}class La{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new La({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ci(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(nf(this.Ac)&&iI.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class aI{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Si(t)}Cc(t,e,n,s=!1){return new La({Ac:t,methodName:e,Dc:n,path:ct.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rs(r){const t=r._freezeSettings(),e=Si(r._databaseId);return new aI(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Fa(r,t,e,n,s,i={}){const a=r.Cc(i.merge||i.mergeFields?2:0,t,e,s);ja("Data must be an object, but it was:",a,n);const u=of(n,a);let l,d;if(i.merge)l=new Ot(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const _=Wo(t,p,e);if(!a.contains(_))throw new k(P.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);uf(f,_)||f.push(_)}l=new Ot(f),d=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,d=a.fieldTransforms;return new oI(new Vt(u),l,d)}class Ci extends Oa{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ci}}function rf(r,t,e,n){const s=r.Cc(1,t,e);ja("Data must be an object, but it was:",s,n);const i=[],a=Vt.empty();Ce(n,(l,d)=>{const f=Ba(t,l,e);d=Gt(d);const p=s.yc(f);if(d instanceof Ci)i.push(f);else{const _=ss(d,p);_!=null&&(i.push(f),a.set(f,_))}});const u=new Ot(i);return new ef(a,u,s.fieldTransforms)}function sf(r,t,e,n,s,i){const a=r.Cc(1,t,e),u=[Wo(t,n,e)],l=[s];if(i.length%2!=0)throw new k(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)u.push(Wo(t,i[_])),l.push(i[_+1]);const d=[],f=Vt.empty();for(let _=u.length-1;_>=0;--_)if(!uf(d,u[_])){const R=u[_];let C=l[_];C=Gt(C);const D=a.yc(R);if(C instanceof Ci)d.push(R);else{const V=ss(C,D);V!=null&&(d.push(R),f.set(R,V))}}const p=new Ot(d);return new ef(f,p,a.fieldTransforms)}function uI(r,t,e,n=!1){return ss(e,r.Cc(n?4:3,t))}function ss(r,t){if(af(r=Gt(r)))return ja("Unsupported field value:",t,r),of(r,t);if(r instanceof Oa)return function(n,s){if(!nf(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let l=ss(u,s.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Gt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Wg(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=nt.fromDate(n);return{timestampValue:Ln(s.serializer,i)}}if(n instanceof nt){const i=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ln(s.serializer,i)}}if(n instanceof Zt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qt)return{bytesValue:sd(s.serializer,n._byteString)};if(n instanceof ft){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ya(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof te)return function(a,u){return{mapValue:{fields:{[la]:{stringValue:ha},[Cn]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return fa(u.serializer,d)})}}}}}}(n,s);throw s.Sc(`Unsupported field value: ${di(n)}`)}(r,t)}function of(r,t){const e={};return Ah(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ce(r,(n,s)=>{const i=ss(s,t.mc(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function af(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof Zt||r instanceof qt||r instanceof ft||r instanceof Oa||r instanceof te)}function ja(r,t,e){if(!af(e)||!ch(e)){const n=di(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}function Wo(r,t,e){if((t=Gt(t))instanceof ns)return t._internalPath;if(typeof t=="string")return Ba(r,t);throw ci("Field path arguments must be of type string or ",r,!1,void 0,e)}const cI=new RegExp("[~\\*/\\[\\]]");function Ba(r,t,e){if(t.search(cI)>=0)throw ci(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new ns(...t.split("."))._internalPath}catch{throw ci(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ci(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new k(P.INVALID_ARGUMENT,u+r+l)}function uf(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class cf{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Di("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class lI extends cf{data(){return super.data()}}function Di(r,t){return typeof t=="string"?Ba(r,t):t instanceof ns?t._internalPath:t._delegate._internalPath}/**
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
 */function hI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ua{}class lf extends Ua{}function dI(r,t,...e){let n=[];t instanceof Ua&&n.push(t),n=n.concat(e),function(i){const a=i.filter(l=>l instanceof qa).length,u=i.filter(l=>l instanceof Ni).length;if(a>1||a>0&&u>0)throw new k(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Ni extends lf{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Ni(t,e,n)}_apply(t){const e=this._parse(t);return hf(t._query,e),new on(t.firestore,t.converter,Mo(t._query,e))}_parse(t){const e=rs(t.firestore);return function(i,a,u,l,d,f,p){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new k(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Vl(p,f);const C=[];for(const D of p)C.push(Pl(l,i,D));_={arrayValue:{values:C}}}else _=Pl(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Vl(p,f),_=uI(u,a,p,f==="in"||f==="not-in");return X.create(d,f,_)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function fI(r,t,e){const n=t,s=Di("where",r);return Ni._create(s,n,e)}class qa extends Ua{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new qa(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:rt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)hf(a,l),a=Mo(a,l)}(t._query,e),new on(t.firestore,t.converter,Mo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class za extends lf{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new za(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new k(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zr(i,a)}(t._query,this._field,this._direction);return new on(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Un(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function mI(r,t="asc"){const e=t,n=Di("orderBy",r);return za._create(n,e)}function Pl(r,t,e){if(typeof(e=Gt(e))=="string"){if(e==="")throw new k(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Uh(t)&&e.indexOf("/")!==-1)throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(et.fromString(e));if(!O.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Ur(r,new O(n))}if(e instanceof ft)return Ur(r,e._key);throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${di(e)}.`)}function Vl(r,t){if(!Array.isArray(r)||r.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function hf(r,t){const e=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class pI{convertValue(t,e="none"){switch(be(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ae(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw j(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ce(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var n,s,i;const e=(i=(s=(n=t.fields)==null?void 0:n[Cn].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>at(a.doubleValue));return new te(e)}convertGeoPoint(t){return new Zt(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=yi(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Fr(t));default:return null}}convertTimestamp(t){const e=oe(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=et.fromString(t);U(md(n),9688,{name:t});const s=new Je(n.get(1),n.get(3)),i=new O(n.popFirst(5));return s.isEqual(e)||kt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function $a(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class yr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qe extends cf{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Di("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Qe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Qe._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qe._jsonSchema={type:pt("string",Qe._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class $s extends Qe{data(t={}){return super.data(t)}}class An{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new yr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new $s(this._firestore,this._userDataWriter,n.key,n,new yr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new $s(s._firestore,s._userDataWriter,u.doc.key,u.doc,new yr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new $s(s._firestore,s._userDataWriter,u.doc.key,u.doc,new yr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:gI(u.type),doc:l,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=An._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=na.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(e.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function gI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:r})}}An._jsonSchemaVersion="firestore/querySnapshot/1.0",An._jsonSchema={type:pt("string",An._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class df extends pI{constructor(t){super(),this.firestore=t}convertBytes(t){return new qt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,e)}}function Cl(r,t,e){r=Qt(r,ft);const n=Qt(r.firestore,Pe),s=$a(r.converter,t,e);return is(n,[Fa(rs(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,_t.none())])}function ff(r,t,e,...n){r=Qt(r,ft);const s=Qt(r.firestore,Pe),i=rs(s);let a;return a=typeof(t=Gt(t))=="string"||t instanceof ns?sf(i,"updateDoc",r._key,t,e,n):rf(i,"updateDoc",r._key,t),is(s,[a.toMutation(r._key,_t.exists(!0))])}function _I(r){return is(Qt(r.firestore,Pe),[new Jr(r._key,_t.none())])}function yI(r,t){const e=Qt(r.firestore,Pe),n=We(r),s=$a(r.converter,t);return is(e,[Fa(rs(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,_t.exists(!1))]).then(()=>n)}function mf(r,...t){var l,d,f;r=Gt(r);let e={includeMetadataChanges:!1,source:"default"},n=0;typeof t[n]!="object"||Sl(t[n])||(e=t[n++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Sl(t[n])){const p=t[n];t[n]=(l=p.next)==null?void 0:l.bind(p),t[n+1]=(d=p.error)==null?void 0:d.bind(p),t[n+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,a,u;if(r instanceof ft)a=Qt(r.firestore,Pe),u=Ei(r._key.path),i={next:p=>{t[n]&&t[n](II(a,r,p))},error:t[n+1],complete:t[n+2]};else{const p=Qt(r,on);a=Qt(p.firestore,Pe),u=p._query;const _=new df(a);i={next:R=>{t[n]&&t[n](new An(a,_,p,R))},error:t[n+1],complete:t[n+2]},hI(r._query)}return function(_,R,C,D){const V=new Jy(D),B=new Dy(R,V,C);return _.asyncQueue.enqueueAndForget(async()=>Sy(await El(_),B)),()=>{V.Nu(),_.asyncQueue.enqueueAndForget(async()=>Py(await El(_),B))}}(Ma(a),u,s,i)}function is(r,t){return function(n,s){const i=new Te;return n.asyncQueue.enqueueAndForget(async()=>qy(await tI(n),s,i)),i.promise}(Ma(r),t)}function II(r,t,e){const n=e.docs.get(t._key),s=new df(r);return new Qe(r,s,t._key,n,new yr(e.hasPendingWrites,e.fromCache),t.converter)}class EI{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=wI(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function vI(r){return new EI(r)}class TI{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=ui.provider,this._offlineComponentProvider={build:e=>new Xy(e,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}}function wI(r){return new TI(r==null?void 0:r.forceOwnership)}/**
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
 */class AI{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=rs(t)}set(t,e,n){this._verifyNotCommitted();const s=_o(t,this._firestore),i=$a(s.converter,e,n),a=Fa(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,_t.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=_o(t,this._firestore);let a;return a=typeof(e=Gt(e))=="string"||e instanceof ns?sf(this._dataReader,"WriteBatch.update",i._key,e,n,s):rf(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,_t.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=_o(t,this._firestore);return this._mutations=this._mutations.concat(new Jr(e._key,_t.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _o(r,t){if((r=Gt(r)).firestore!==t)throw new k(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function bI(r){return Ma(r=Qt(r,Pe)),new AI(r,t=>is(r,t))}(function(t,e=!0){(function(s){Bn=s})(Ap),Ws(new Vr("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new Pe(new Bp(n.getProvider("auth-internal")),new zp(a,n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Je(d.options.projectId,f)}(a,s),a);return i={useFetchStreams:e,...i},u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),Tn(ac,uc,t),Tn(ac,uc,"esm2020")})();const xI={apiKey:"AIzaSyBFOBEGWvfdQ_-8TgBtpG1-ccViyTQevSc",authDomain:"olsc-agrifeeds-trading.firebaseapp.com",projectId:"olsc-agrifeeds-trading",storageBucket:"olsc-agrifeeds-trading.firebasestorage.app",messagingSenderId:"188615089972",appId:"1:188615089972:web:e1311c138055bbddfccf61",measurementId:"G-ESY5FJM316"},Dl=Xl(xI);let Wt;try{Wt=nI(Dl,{localCache:vI({})})}catch(r){r.code==="failed-precondition"?console.warn("Firebase persistence failed: This can happen if multiple tabs are open. Falling back to memory-only cache."):r.code==="unimplemented"?console.error("Firebase persistence is not supported in this browser. Falling back to memory-only cache."):console.error(`An error occurred while initializing Firestore with persistence: ${r.message}`),Wt=rI(Dl)}function Nl(r,t,e="asc",n=[]){const[s,i]=H.useState([]),[a,u]=H.useState(!0),[l,d]=H.useState(null),[f,p]=H.useState("syncing");H.useEffect(()=>{u(!0);const V=Al(Wt,r),B=n.map(z=>fI(z.field,z.operator,z.value));t&&B.push(mI(t,e));const L=dI(V,...B),F=mf(L,z=>{const Z=[];z.forEach(W=>{Z.push({id:W.id,...W.data()})}),i(Z),u(!1),z.metadata.hasPendingWrites?p("syncing"):z.metadata.fromCache?p("offline"):p("synced")},z=>{console.error(z),d(z),u(!1),p("offline")});return()=>F()},[r,t,e,JSON.stringify(n)]);const _=H.useCallback(async V=>{try{await yI(Al(Wt,r),V)}catch(B){throw console.error("Error adding document: ",B),B}},[r]),R=H.useCallback(async(V,B)=>{const L=We(Wt,r,V);try{await ff(L,B)}catch(F){throw console.error("Error updating document: ",F),F}},[r]),C=H.useCallback(async V=>{const B=We(Wt,r,V);try{await _I(B)}catch(L){throw console.error("Error deleting document: ",L),L}},[r]),D=H.useCallback(async V=>{const B=bI(Wt);V.forEach(L=>{const F=We(Wt,r,L.id);B.update(F,L.data)});try{await B.commit()}catch(L){throw console.error("Error batch updating documents: ",L),L}},[r]);return{data:s,loading:a,error:l,syncStatus:f,addItem:_,updateItem:R,deleteItem:C,updateMultipleItems:D}}function RI(r,t,e){const[n,s]=H.useState(e),[i,a]=H.useState(!0),[u,l]=H.useState(null),[d,f]=H.useState("syncing"),p=H.useRef(e);H.useEffect(()=>{p.current=e},[e]),H.useEffect(()=>{a(!0);const C=We(Wt,r,t),D=mf(C,V=>{V.exists()?s(V.data()):(console.log(`Document ${r}/${t} not found, creating with initial data.`),Cl(C,p.current).catch(B=>console.error("Error creating document:",B)),s(p.current)),a(!1),V.metadata.hasPendingWrites?f("syncing"):V.metadata.fromCache?f("offline"):f("synced")},V=>{console.error(V),l(V),a(!1),f("offline")});return()=>D()},[r,t]);const _=H.useCallback(async C=>{const D=We(Wt,r,t);try{await ff(D,C)}catch(V){throw console.error("Error updating document: ",V),V}},[r,t]),R=H.useCallback(async C=>{const D=We(Wt,r,t);try{await Cl(D,C)}catch(V){throw console.error("Error setting document: ",V),V}},[r,t]);return{data:n,loading:i,error:u,syncStatus:d,updateData:_,setData:R}}var dt=(r=>(r.Dashboard="DASHBOARD",r.Transactions="TRANSACTIONS",r.Inventory="INVENTORY",r.Settings="SETTINGS",r))(dt||{}),Ft=(r=>(r.Income="INCOME",r.Expense="EXPENSE",r))(Ft||{});const Qo=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),Xo=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5h2m-2 2h2m-2 2h2m-4-4h2m-2 2h2"})}),Jo=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})}),XI=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v16m8-8H4"})}),SI=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),JI=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z"})}),PI=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),YI=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),ZI=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"})}),tE=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 3V9M3 9a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 9v3m-9 6h2"})}),eE=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),VI=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),nE=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),CI=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 17h5l-5 5v-5zM9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})}),DI=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),rE=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),sE=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})}),iE=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),Yo=({className:r})=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:[v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),oE=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})}),aE=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 018.25 20.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"})}),uE=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 17.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})}),NI=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),cE=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),lE=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}),kI=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),kl=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})}),MI=({className:r})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"})}),OI=({isOpen:r,onClose:t,onAddTransaction:e,inventory:n})=>{const[s,i]=H.useState(Ft.Income),[a,u]=H.useState(""),[l,d]=H.useState(""),[f,p]=H.useState(""),[_,R]=H.useState([]),[C,D]=H.useState(null),[V,B]=H.useState(1);H.useEffect(()=>{r&&(i(Ft.Income),u(""),d(""),p(new Date().toISOString().split("T")[0]),R([]),D(null),B(1))},[r]);const{totalAmount:L,autoDescription:F}=H.useMemo(()=>{if(s!==Ft.Income)return{totalAmount:0,autoDescription:""};let I=0;const g=[];return _.forEach(K=>{const It=n.find($n=>$n.id===K.itemId);It&&(I+=It.price*K.quantity,g.push(`${It.name} (x${K.quantity})`))}),{totalAmount:I,autoDescription:g.join(", ")||"Point of Sale Transaction"}},[_,n,s]);if(!r)return null;const z=I=>{i(I)},Z=I=>{I.stock<=0||(C===I.id?D(null):(D(I.id),B(1)))},W=()=>{!C||V<=0||(R(I=>{const g=I.findIndex(K=>K.itemId===C);if(g>-1){const K=[...I];return K[g].quantity+=V,K}return[...I,{itemId:C,quantity:V}]}),D(null))},w=I=>{R(g=>g.filter(K=>K.itemId!==I))},y=I=>{I.preventDefault();const g=f?new Date(f).toISOString():new Date().toISOString();if(s===Ft.Income)_.length>0&&(e({type:s,amount:L,description:F,date:g,items:_.map(K=>({inventoryItemId:K.itemId,quantity:K.quantity}))}),t());else{const K=parseFloat(a);l&&!isNaN(K)&&K>0&&(e({type:s,amount:K,description:l,date:g}),t())}},E=I=>I.toLocaleString("en-PH",{style:"currency",currency:"PHP"}),T=()=>{const I=[];return n.forEach(g=>{const K=C===g.id,It=g.stock<=0&&!K;I.push(v.jsxs("button",{type:"button",onClick:()=>Z(g),disabled:It,className:`relative p-3 rounded-lg text-left transition-all duration-200 shadow-sm border ${K?"ring-2 ring-primary ring-offset-2 ring-offset-muted bg-accent":"bg-background hover:bg-accent"} ${It?"opacity-50 cursor-not-allowed":""}`,children:[v.jsx("p",{className:"font-bold text-foreground",children:g.name}),v.jsxs("p",{className:"text-xs text-muted-foreground",children:["(",g.unit,")"]}),v.jsx("p",{className:"text-lg font-semibold text-success mt-1",children:g.price.toLocaleString("en-PH",{style:"currency",currency:"PHP",maximumFractionDigits:0})}),g.stock<=0&&v.jsx("span",{className:"absolute top-1 right-1 text-xs bg-destructive text-destructive-foreground font-bold px-2 py-0.5 rounded-full",children:"Out"})]},g.id)),K&&I.push(v.jsx(LI,{item:g,quantity:V,setQuantity:B,onAddToCart:W},`${g.id}-editor`))}),v.jsx(v.Fragment,{children:v.jsxs("div",{className:"space-y-3",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-medium text-muted-foreground mb-2",children:"Select Products"}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-64 overflow-y-auto bg-muted p-3 rounded-lg",children:n.length>0?I:v.jsx("p",{className:"col-span-full text-center text-muted-foreground py-4",children:"Add items to inventory first."})})]}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg font-bold text-card-foreground mb-2",children:"Current Order"}),v.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto pr-2",children:_.length===0?v.jsx("p",{className:"text-center text-muted-foreground py-4",children:"Select a product to start."}):_.map(g=>{const K=n.find(It=>It.id===g.itemId);return K?v.jsxs("div",{className:"flex justify-between items-center bg-background border border-border p-2 rounded-md shadow-sm",children:[v.jsxs("div",{children:[v.jsx("p",{className:"font-semibold text-foreground",children:K.name}),v.jsxs("p",{className:"text-sm text-muted-foreground",children:[g.quantity," ",K.unit," x ",E(K.price)]})]}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("p",{className:"font-bold text-foreground",children:E(g.quantity*K.price)}),v.jsx("button",{type:"button",onClick:()=>w(g.itemId),className:"text-muted-foreground hover:text-destructive",children:v.jsx(PI,{className:"w-5 h-5"})})]})]},g.itemId):null})})]}),v.jsxs("div",{className:"p-3 bg-info/10 rounded-lg text-right",children:[v.jsx("span",{className:"text-sm text-info",children:"Total Amount"}),v.jsx("p",{className:"text-2xl font-bold text-info",children:E(L)})]})]})})},A=()=>v.jsxs(v.Fragment,{children:[v.jsxs("div",{children:[v.jsx("label",{htmlFor:"amount",className:"block text-sm font-medium text-muted-foreground mb-1",children:"Amount"}),v.jsx("input",{type:"number",id:"amount",value:a,onChange:I=>u(I.target.value),required:!0,min:"0.01",step:"0.01",placeholder:"0.00",className:"w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"expense_description",className:"block text-sm font-medium text-muted-foreground mb-1",children:"Description"}),v.jsx("input",{type:"text",id:"expense_description",value:l,onChange:I=>d(I.target.value),required:!0,placeholder:"e.g., Rent, Utilities",className:"w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"})]})]});return v.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in p-4",children:v.jsxs("div",{className:"bg-card border border-border rounded-lg shadow-xl w-full max-w-lg animate-slide-in-up max-h-[90vh] flex flex-col",role:"dialog","aria-modal":"true",children:[v.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-border",children:[v.jsx("h2",{className:"text-xl font-bold text-card-foreground",children:"Add Transaction"}),v.jsx("button",{onClick:t,className:"text-muted-foreground hover:text-foreground",children:v.jsx(SI,{className:"w-6 h-6"})})]}),v.jsxs("form",{onSubmit:y,className:"p-4 sm:p-6 space-y-4 overflow-y-auto",children:[v.jsxs("div",{className:"grid grid-cols-2 gap-2 rounded-lg p-1 bg-muted",children:[v.jsx("button",{type:"button",onClick:()=>z(Ft.Income),className:`py-2 rounded-md font-semibold transition-colors ${s===Ft.Income?"bg-success text-success-foreground shadow":"text-muted-foreground"}`,children:"Income"}),v.jsx("button",{type:"button",onClick:()=>z(Ft.Expense),className:`py-2 rounded-md font-semibold transition-colors ${s===Ft.Expense?"bg-error text-error-foreground shadow":"text-muted-foreground"}`,children:"Expense"})]}),s===Ft.Income?T():A(),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"date",className:"block text-sm font-medium text-muted-foreground mb-1",children:"Date"}),v.jsx("input",{type:"date",id:"date",value:f,onChange:I=>p(I.target.value),required:!0,className:"w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"})]})]}),v.jsx("div",{className:"p-4 sm:p-6 border-t border-border mt-auto",children:v.jsx("button",{type:"submit",form:"add-transaction-form",onClick:y,className:"w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-md disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed",disabled:s===Ft.Income&&_.length===0||s===Ft.Expense&&(!l||!a),children:"Add Transaction"})})]})})},LI=({item:r,quantity:t,setQuantity:e,onAddToCart:n})=>{const s=a=>{const u=Math.floor(t);e(u+a)},i=["Kilo","kg","L","Litre"].some(a=>r.unit.toLowerCase().includes(a.toLowerCase()));return v.jsxs("div",{className:"col-span-2 sm:col-span-3 p-3 bg-accent rounded-b-lg -mt-1 mb-2 animate-fade-in border-t-2 border-dashed border-border",children:[v.jsxs("p",{className:"font-semibold mb-2 text-sm text-center text-accent-foreground",children:["Enter Quantity (",r.unit,")"]}),i&&v.jsx("div",{className:"flex justify-center gap-2 mb-3",children:[.25,.5,.75].map(a=>v.jsx("button",{type:"button",onClick:()=>s(a),className:"w-10 h-8 text-sm font-bold bg-background border border-border rounded-md hover:bg-muted transition",children:a===.25?"¼":a===.5?"½":"¾"},a))}),v.jsxs("div",{className:"flex items-center gap-2 mb-3 justify-center",children:[v.jsx("button",{type:"button",onClick:()=>e(a=>Math.max(i?.25:1,a-1)),className:"w-10 h-10 text-2xl font-bold bg-background border border-border rounded-md hover:bg-muted transition",children:"-"}),v.jsx("input",{type:"number",value:t,onChange:a=>e(Number(a.target.value)),step:i?"0.01":"1",className:"w-20 h-10 text-center font-bold text-lg bg-background border border-input rounded-md focus:ring-ring focus:border-ring"}),v.jsx("button",{type:"button",onClick:()=>e(a=>a+1),className:"w-10 h-10 text-2xl font-bold bg-background border border-border rounded-md hover:bg-muted transition",children:"+"})]}),v.jsx("button",{onClick:n,className:"w-full bg-primary/80 text-primary-foreground font-bold py-2 px-4 rounded-lg hover:bg-primary transition-colors",children:"Add to Cart"})]})},FI=Sr.memo(({currentPage:r,setCurrentPage:t})=>{const e=[{page:dt.Dashboard,label:"Dashboard",icon:Qo,color:"from-blue-500 to-blue-600"},{page:dt.Transactions,label:"Transactions",icon:Xo,color:"from-green-500 to-green-600"},{page:dt.Inventory,label:"Inventory",icon:Jo,color:"from-purple-500 to-purple-600"},{page:dt.Settings,label:"Settings",icon:Yo,color:"from-gray-500 to-gray-600"}];return v.jsx("nav",{className:"md:hidden fixed bottom-0 left-0 right-0 z-50",children:v.jsx("div",{className:"glass border-t border-border/50 backdrop-blur-xl",children:v.jsx("div",{className:"flex items-center justify-around p-2",children:e.map(n=>{const s=n.icon,i=r===n.page;return v.jsxs("button",{onClick:()=>t(n.page),className:`group flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-200 focus-ring ${i?`bg-gradient-to-r ${n.color} text-white shadow-medium`:"text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`,children:[v.jsx("div",{className:`p-2 rounded-lg transition-all duration-200 ${i?"bg-white/20":"bg-secondary group-hover:bg-secondary/80"}`,children:v.jsx(s,{className:"w-5 h-5"})}),v.jsx("span",{className:`text-xs font-medium transition-all duration-200 ${i?"text-white":"text-muted-foreground group-hover:text-foreground"}`,children:n.label}),i&&v.jsx("div",{className:"absolute -top-1 w-2 h-2 bg-white rounded-full shadow-sm"})]},n.page)})})})})}),jI=Sr.memo(({status:r})=>{const e=(()=>{switch(r){case"synced":return{icon:kI,color:"text-success",bgColor:"bg-success/20",borderColor:"border-success/30",label:"Synced",pulse:!1};case"syncing":return{icon:kl,color:"text-warning",bgColor:"bg-warning/20",borderColor:"border-warning/30",label:"Syncing",pulse:!0};case"offline":return{icon:MI,color:"text-destructive",bgColor:"bg-destructive/20",borderColor:"border-destructive/30",label:"Offline",pulse:!1};default:return{icon:kl,color:"text-muted-foreground",bgColor:"bg-muted",borderColor:"border-border",label:"Unknown",pulse:!1}}})(),n=e.icon;return v.jsxs("div",{className:`group relative flex items-center gap-2 px-3 py-2 rounded-xl border ${e.borderColor} ${e.bgColor} transition-all duration-200 hover:shadow-soft cursor-pointer`,children:[v.jsxs("div",{className:`relative ${e.pulse?"animate-pulse-slow":""}`,children:[v.jsx(n,{className:`w-4 h-4 ${e.color}`}),e.pulse&&v.jsx("div",{className:"absolute inset-0 w-4 h-4 border-2 border-current rounded-full animate-ping opacity-20"})]}),v.jsx("div",{className:"hidden sm:block",children:v.jsx("span",{className:`text-xs font-medium ${e.color}`,children:e.label})}),v.jsxs("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-foreground rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50",children:[e.label,v.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"})]})]})});class BI extends H.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,e){console.error("Error caught by boundary:",t,e)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:v.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen p-4 bg-background",children:v.jsxs("div",{className:"text-center max-w-md",children:[v.jsx("div",{className:"mb-4 text-6xl",children:"⚠️"}),v.jsx("h1",{className:"text-2xl font-bold text-foreground mb-2",children:"Something went wrong"}),v.jsx("p",{className:"text-muted-foreground mb-4",children:"We encountered an unexpected error. Please try refreshing the page."}),v.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",children:"Refresh Page"}),!1]})}):this.props.children}}const Ml=H.lazy(()=>li(()=>import("./DashboardPage-NPgtiF5K.js"),__vite__mapDeps([0,1,2,3]))),UI=H.lazy(()=>li(()=>import("./TransactionsPage-CslZnfTT.js"),__vite__mapDeps([4,1,2]))),qI=H.lazy(()=>li(()=>import("./InventoryPage-BWNTIYAa.js"),__vite__mapDeps([5,1,2,3]))),zI=H.lazy(()=>li(()=>import("./SettingsPage-DzpoIiao.js"),__vite__mapDeps([6,1,2,3]))),fr=()=>v.jsx("div",{className:"flex items-center justify-center h-64",children:v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"}),v.jsx("div",{className:"absolute inset-0 w-12 h-12 border-4 border-transparent border-t-primary/60 rounded-full animate-pulse-slow"})]})}),$I=()=>{const[r,t]=H.useState(dt.Dashboard),[e,n]=H.useState(!1),{data:s,updateData:i,syncStatus:a}=RI("config","settings",{storeName:"Olesco Agrivet Trading",storeLogo:"",profitMarginDivisor:.83,theme:"dark"}),{data:u,addItem:l,deleteItem:d,syncStatus:f}=Nl("transactions","date","desc"),{data:p,addItem:_,updateItem:R,deleteItem:C,updateMultipleItems:D,syncStatus:V}=Nl("inventory","name","asc");H.useEffect(()=>{const I=window.document.documentElement;I.classList.remove("light","dark"),I.classList.add(s.theme)},[s.theme]);const B=async I=>{if(await l(I),I.type===Ft.Income&&I.items){const g=I.items.map(K=>{const It=p.find($n=>$n.id===K.inventoryItemId);return It?{id:It.id,data:{stock:Math.max(0,It.stock-K.quantity)}}:null}).filter(K=>K!==null);g.length>0&&await D(g)}},L=async I=>{window.confirm("Are you sure you want to delete this transaction? This action will not restock items.")&&await d(I.id)},F=async I=>{if("id"in I){const{id:g,...K}=I;await R(g,K)}else await _(I)},z=async I=>{window.confirm("Are you sure you want to delete this item? This cannot be undone.")&&await C(I)},Z=async I=>{await i(I)},W=I=>{i({theme:I})},w=H.useMemo(()=>{const I=[a,f,V];return I.includes("syncing")?"syncing":I.includes("offline")?"offline":"synced"},[a,f,V]),y={[dt.Dashboard]:{title:"Dashboard",subtitle:"Overview of your business performance",icon:v.jsx(Qo,{className:"w-6 h-6"})},[dt.Transactions]:{title:"Transactions",subtitle:"Manage your sales and expenses",icon:v.jsx(Xo,{className:"w-6 h-6"})},[dt.Inventory]:{title:"Inventory",subtitle:"Track your products and stock levels",icon:v.jsx(Jo,{className:"w-6 h-6"})},[dt.Settings]:{title:"Settings",subtitle:"Configure your store and preferences",icon:v.jsx(Yo,{className:"w-6 h-6"})}},E=()=>{switch(r){case dt.Dashboard:return v.jsx(H.Suspense,{fallback:v.jsx(fr,{}),children:v.jsx(Ml,{transactions:u,inventory:p,onNavigate:t})});case dt.Transactions:return v.jsx(H.Suspense,{fallback:v.jsx(fr,{}),children:v.jsx(UI,{transactions:u,inventory:p,onDeleteTransaction:L})});case dt.Inventory:return v.jsx(H.Suspense,{fallback:v.jsx(fr,{}),children:v.jsx(qI,{inventory:p,onSaveItem:F,onDeleteItem:z,profitMarginDivisor:s.profitMarginDivisor})});case dt.Settings:return v.jsx(H.Suspense,{fallback:v.jsx(fr,{}),children:v.jsx(zI,{settings:s,onSaveSettings:Z,transactions:u,inventory:p,theme:s.theme,setTheme:W})});default:return v.jsx(H.Suspense,{fallback:v.jsx(fr,{}),children:v.jsx(Ml,{transactions:u,inventory:p,onNavigate:t})})}},T=Sr.memo(()=>v.jsx("div",{className:"glass border-b border-border/50 backdrop-blur-xl",children:v.jsxs("div",{className:"flex items-center justify-between gap-4 p-4 md:p-6",children:[v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsxs("div",{className:"relative",children:[s.storeLogo?v.jsx("img",{src:s.storeLogo,alt:"Store Logo",className:"w-12 h-12 rounded-xl object-cover flex-shrink-0 bg-secondary shadow-soft"}):v.jsx("div",{className:"w-12 h-12 rounded-xl flex-shrink-0 bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-soft",children:v.jsx(NI,{className:"w-7 h-7"})}),v.jsx("div",{className:"absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background flex items-center justify-center",children:v.jsx("div",{className:"w-2 h-2 bg-success-foreground rounded-full animate-pulse"})})]}),v.jsxs("div",{className:"hidden sm:block",children:[v.jsx("p",{className:"text-xs text-muted-foreground font-medium uppercase tracking-wider",children:"Welcome to"}),v.jsx("h1",{className:"text-xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent",children:s.storeName})]})]}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[v.jsx("button",{className:"p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-ring",children:v.jsx(CI,{className:"w-5 h-5"})}),v.jsx("button",{className:"p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-ring",children:v.jsx(DI,{className:"w-5 h-5"})})]}),v.jsx("div",{className:"flex-shrink-0",children:v.jsx(jI,{status:w})})]})]})})),A=Sr.memo(()=>v.jsxs("aside",{className:"w-64 bg-card/50 backdrop-blur-xl border-r border-border/50 hidden md:flex flex-col shadow-soft",children:[v.jsx("div",{className:"border-b border-border/50",children:v.jsx(T,{})}),v.jsx("nav",{className:"flex flex-col gap-1 p-4",children:[{page:dt.Dashboard,label:"Dashboard",icon:v.jsx(Qo,{className:"w-5 h-5"}),color:"from-blue-500 to-blue-600"},{page:dt.Transactions,label:"Transactions",icon:v.jsx(Xo,{className:"w-5 h-5"}),color:"from-green-500 to-green-600"},{page:dt.Inventory,label:"Inventory",icon:v.jsx(Jo,{className:"w-5 h-5"}),color:"from-purple-500 to-purple-600"},{page:dt.Settings,label:"Settings",icon:v.jsx(Yo,{className:"w-5 h-5"}),color:"from-gray-500 to-gray-600"}].map(I=>v.jsxs("button",{onClick:()=>t(I.page),className:`group flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 focus-ring ${r===I.page?`bg-gradient-to-r ${I.color} text-white shadow-medium`:"text-muted-foreground hover:bg-secondary/50 hover:text-foreground"}`,children:[v.jsx("div",{className:`p-2 rounded-lg transition-all duration-200 ${r===I.page?"bg-white/20":"bg-secondary group-hover:bg-secondary/80"}`,children:I.icon}),v.jsx("span",{className:"font-semibold",children:I.label})]},I.page))})]}));return v.jsxs("div",{className:"flex min-h-screen bg-gradient-to-br from-background via-background to-secondary/20",children:[v.jsx(A,{}),v.jsxs("div",{className:"flex-1 flex flex-col max-w-full overflow-hidden",children:[v.jsx("div",{className:"md:hidden glass border-b border-border/50",children:v.jsx(T,{})}),v.jsx("main",{className:"flex-1 p-4 md:p-8 pb-20 md:pb-8 overflow-y-auto",children:v.jsxs("div",{className:"max-w-7xl mx-auto",children:[v.jsx("div",{className:"mb-8",children:v.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[v.jsx("div",{className:`p-2 rounded-lg ${r===dt.Dashboard?"bg-blue-500/20 text-blue-600":r===dt.Transactions?"bg-green-500/20 text-green-600":r===dt.Inventory?"bg-purple-500/20 text-purple-600":"bg-gray-500/20 text-gray-600"}`,children:y[r].icon}),v.jsxs("div",{children:[v.jsx("h2",{className:"text-3xl font-bold text-foreground",children:y[r].title}),y[r].subtitle&&v.jsx("p",{className:"text-muted-foreground mt-1",children:y[r].subtitle})]})]})}),E()]})})]}),v.jsx("button",{onClick:()=>n(!0),className:"fixed bottom-20 right-4 md:bottom-8 md:right-8 w-16 h-16 bg-gradient-primary rounded-full text-primary-foreground shadow-strong flex items-center justify-center hover:shadow-strong/80 transition-all duration-200 transform hover:scale-110 active:scale-95 z-40 btn-modern","aria-label":"Add Transaction",children:v.jsx(VI,{className:"w-8 h-8"})}),v.jsx(OI,{isOpen:e,onClose:()=>n(!1),onAddTransaction:B,inventory:p}),v.jsx(FI,{currentPage:r,setCurrentPage:t})]})},GI=()=>v.jsx(BI,{children:v.jsx($I,{})}),pf=document.getElementById("root");if(!pf)throw new Error("Could not find root element to mount to");const KI=rm.createRoot(pf);KI.render(v.jsx(Sr.StrictMode,{children:v.jsx(GI,{})}));export{oE as C,iE as D,JI as E,Jo as I,uE as L,lE as M,dt as P,nE as S,Ft as T,sE as U,tE as W,YI as a,ZI as b,eE as c,aE as d,PI as e,XI as f,cE as g,rE as h,v as j};
