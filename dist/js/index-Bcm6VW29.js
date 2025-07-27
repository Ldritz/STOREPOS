const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/DashboardPage-B8DpIGkP.js","js/charts-BYcMWlQw.js","js/vendor-CWc6w16D.js","js/Card-BtIxapcb.js","js/TransactionsPage-D7BPEkoA.js","js/InventoryPage-CFVbjMuJ.js","js/SettingsPage-CN22RFJk.js"])))=>i.map(i=>d[i]);
var tm=Object.defineProperty;var em=(r,t,e)=>t in r?tm(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var xs=(r,t,e)=>em(r,typeof t!="symbol"?t+"":t,e);import{r as nm,a as rm,g as sm}from"./vendor-CWc6w16D.js";import{r as W,R as kl}from"./charts-BYcMWlQw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();var oo={exports:{}},cr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c;function im(){if($c)return cr;$c=1;var r=nm(),t=Symbol.for("react.element"),e=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(c,l,d){var f,p={},g=null,R=null;d!==void 0&&(g=""+d),l.key!==void 0&&(g=""+l.key),l.ref!==void 0&&(R=l.ref);for(f in l)n.call(l,f)&&!i.hasOwnProperty(f)&&(p[f]=l[f]);if(c&&c.defaultProps)for(f in l=c.defaultProps,l)p[f]===void 0&&(p[f]=l[f]);return{$$typeof:t,type:c,key:g,ref:R,props:p,_owner:s.current}}return cr.Fragment=e,cr.jsx=a,cr.jsxs=a,cr}var Gc;function om(){return Gc||(Gc=1,oo.exports=im()),oo.exports}var w=om(),Rs={},Kc;function am(){if(Kc)return Rs;Kc=1;var r=rm();return Rs.createRoot=r.createRoot,Rs.hydrateRoot=r.hydrateRoot,Rs}var cm=am();const um=sm(cm),lm="modulepreload",hm=function(r){return"/"+r},Hc={},di=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(e.map(d=>{if(d=hm(d),d in Hc)return;Hc[d]=!0;const f=d.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":lm,f||(g.as="script"),g.crossOrigin="",g.href=d,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((R,V)=>{g.addEventListener("load",R),g.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})},dm=()=>{};var Wc={};/**
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
 */const Ml=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},fm=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],c=r[e++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Ol={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,c=a?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|d>>6,R=d&63;l||(R=64,a||(g=64)),n.push(e[f],e[p],e[g],e[R])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Ml(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):fm(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],c=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const p=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||c==null||d==null||p==null)throw new mm;const g=i<<2|c>>4;if(n.push(g),d!==64){const R=c<<4&240|d>>2;if(n.push(R),p!==64){const V=d<<6&192|p;n.push(V)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class mm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pm=function(r){const t=Ml(r);return Ol.encodeByteArray(t,!0)},Hs=function(r){return pm(r).replace(/\./g,"")},gm=function(r){try{return Ol.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ll(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _m=()=>Ll().__FIREBASE_DEFAULTS__,ym=()=>{if(typeof process>"u"||typeof Wc>"u")return;const r=Wc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Im=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&gm(r[1]);return t&&JSON.parse(t)},Yo=()=>{try{return dm()||_m()||ym()||Im()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Em=r=>{var t,e;return(e=(t=Yo())==null?void 0:t.emulatorHosts)==null?void 0:e[r]},Tm=r=>{const t=Em(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Fl=()=>{var r;return(r=Yo())==null?void 0:r.config};/**
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
 */class vm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function fi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jl(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function wm(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Hs(JSON.stringify(e)),Hs(JSON.stringify(a)),""].join(".")}const Tr={};function Am(){const r={prod:[],emulator:[]};for(const t of Object.keys(Tr))Tr[t]?r.emulator.push(t):r.prod.push(t);return r}function bm(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let Qc=!1;function xm(r,t){if(typeof window>"u"||typeof document>"u"||!fi(window.location.host)||Tr[r]===t||Tr[r]||Qc)return;Tr[r]=t;function e(g){return`__firebase__banner__${g}`}const n="__firebase__banner",i=Am().prod.length>0;function a(){const g=document.getElementById(n);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,R){g.setAttribute("width","24"),g.setAttribute("id",R),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Qc=!0,a()},g}function f(g,R){g.setAttribute("id",R),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=bm(n),R=e("text"),V=document.getElementById(R)||document.createElement("span"),D=e("learnmore"),C=document.getElementById(D)||document.createElement("a"),U=e("preprendIcon"),L=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const F=g.element;c(F),f(C,D);const H=d();l(L,U),F.append(L,V,C,H),document.body.appendChild(F)}i?(V.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Ws(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bl(){var t;const r=(t=Yo())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ul(){return!Bl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ql(){return!Bl()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function zl(){try{return typeof indexedDB=="object"}catch{return!1}}function Rm(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const Sm="FirebaseError";class zn extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Sm,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$l.prototype.create)}}class $l{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Pm(i,n):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new zn(s,c,n)}}function Pm(r,t){return r.replace(Vm,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Vm=/\{\$([^}]+)}/g;function Vr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(Xc(i)&&Xc(a)){if(!Vr(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function Xc(r){return r!==null&&typeof r=="object"}/**
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
 */function Gt(r){return r&&r._delegate?r._delegate:r}class Cr{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Be="[DEFAULT]";/**
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
 */class Cm{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new vm;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Nm(t))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=Be){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Be){return this.instances.has(t)}getOptions(t=Be){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&a.resolve(s)}return s}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&t(i,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Dm(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Be){return this.component?this.component.multipleInstances?t:Be:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dm(r){return r===Be?void 0:r}function Nm(r){return r.instantiationMode==="EAGER"}/**
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
 */class km{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Cm(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Y||(Y={}));const Mm={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Om=Y.INFO,Lm={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Fm=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Lm[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Gl{constructor(t){this.name=t,this._logLevel=Om,this._logHandler=Fm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Mm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const jm=(r,t)=>t.some(e=>r instanceof e);let Jc,Yc;function Bm(){return Jc||(Jc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Um(){return Yc||(Yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kl=new WeakMap,Eo=new WeakMap,Hl=new WeakMap,ao=new WeakMap,Zo=new WeakMap;function qm(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(Te(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Kl.set(e,r)}).catch(()=>{}),Zo.set(t,r),t}function zm(r){if(Eo.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Eo.set(r,t)}let To={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Eo.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Hl.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Te(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function $m(r){To=r(To)}function Gm(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(co(this),t,...e);return Hl.set(n,t.sort?t.sort():[t]),Te(n)}:Um().includes(r)?function(...t){return r.apply(co(this),t),Te(Kl.get(this))}:function(...t){return Te(r.apply(co(this),t))}}function Km(r){return typeof r=="function"?Gm(r):(r instanceof IDBTransaction&&zm(r),jm(r,Bm())?new Proxy(r,To):r)}function Te(r){if(r instanceof IDBRequest)return qm(r);if(ao.has(r))return ao.get(r);const t=Km(r);return t!==r&&(ao.set(r,t),Zo.set(t,r)),t}const co=r=>Zo.get(r);function Hm(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),c=Te(a);return n&&a.addEventListener("upgradeneeded",l=>{n(Te(a.result),l.oldVersion,l.newVersion,Te(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Wm=["get","getKey","getAll","getAllKeys","count"],Qm=["put","add","delete","clear"],uo=new Map;function Zc(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(uo.get(t))return uo.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=Qm.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Wm.includes(e)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&l.done]))[0]};return uo.set(t,i),i}$m(r=>({...r,get:(t,e,n)=>Zc(t,e)||r.get(t,e,n),has:(t,e)=>!!Zc(t,e)||r.has(t,e)}));/**
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
 */class Xm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Jm(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Jm(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const vo="@firebase/app",tu="0.14.0";/**
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
 */const ae=new Gl("@firebase/app"),Ym="@firebase/app-compat",Zm="@firebase/analytics-compat",tp="@firebase/analytics",ep="@firebase/app-check-compat",np="@firebase/app-check",rp="@firebase/auth",sp="@firebase/auth-compat",ip="@firebase/database",op="@firebase/data-connect",ap="@firebase/database-compat",cp="@firebase/functions",up="@firebase/functions-compat",lp="@firebase/installations",hp="@firebase/installations-compat",dp="@firebase/messaging",fp="@firebase/messaging-compat",mp="@firebase/performance",pp="@firebase/performance-compat",gp="@firebase/remote-config",_p="@firebase/remote-config-compat",yp="@firebase/storage",Ip="@firebase/storage-compat",Ep="@firebase/firestore",Tp="@firebase/ai",vp="@firebase/firestore-compat",wp="firebase",Ap="12.0.0";/**
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
 */const wo="[DEFAULT]",bp={[vo]:"fire-core",[Ym]:"fire-core-compat",[tp]:"fire-analytics",[Zm]:"fire-analytics-compat",[np]:"fire-app-check",[ep]:"fire-app-check-compat",[rp]:"fire-auth",[sp]:"fire-auth-compat",[ip]:"fire-rtdb",[op]:"fire-data-connect",[ap]:"fire-rtdb-compat",[cp]:"fire-fn",[up]:"fire-fn-compat",[lp]:"fire-iid",[hp]:"fire-iid-compat",[dp]:"fire-fcm",[fp]:"fire-fcm-compat",[mp]:"fire-perf",[pp]:"fire-perf-compat",[gp]:"fire-rc",[_p]:"fire-rc-compat",[yp]:"fire-gcs",[Ip]:"fire-gcs-compat",[Ep]:"fire-fst",[vp]:"fire-fst-compat",[Tp]:"fire-vertex","fire-js":"fire-js",[wp]:"fire-js-all"};/**
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
 */const Qs=new Map,xp=new Map,Ao=new Map;function eu(r,t){try{r.container.addComponent(t)}catch(e){ae.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Xs(r){const t=r.name;if(Ao.has(t))return ae.debug(`There were multiple attempts to register component ${t}.`),!1;Ao.set(t,r);for(const e of Qs.values())eu(e,r);for(const e of xp.values())eu(e,r);return!0}function Wl(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Rp(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Sp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ve=new $l("app","Firebase",Sp);/**
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
 */class Pp{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}/**
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
 */const Vp=Ap;function Ql(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:wo,automaticDataCollectionEnabled:!0,...t},s=n.name;if(typeof s!="string"||!s)throw ve.create("bad-app-name",{appName:String(s)});if(e||(e=Fl()),!e)throw ve.create("no-options");const i=Qs.get(s);if(i){if(Vr(e,i.options)&&Vr(n,i.config))return i;throw ve.create("duplicate-app",{appName:s})}const a=new km(s);for(const l of Ao.values())a.addComponent(l);const c=new Pp(e,n,a);return Qs.set(s,c),c}function Cp(r=wo){const t=Qs.get(r);if(!t&&r===wo&&Fl())return Ql();if(!t)throw ve.create("no-app",{appName:r});return t}function xn(r,t,e){let n=bp[r]??r;e&&(n+=`-${e}`);const s=n.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${n}" with version "${t}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ae.warn(a.join(" "));return}Xs(new Cr(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
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
 */const Dp="firebase-heartbeat-database",Np=1,Dr="firebase-heartbeat-store";let lo=null;function Xl(){return lo||(lo=Hm(Dp,Np,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Dr)}catch(e){console.warn(e)}}}}).catch(r=>{throw ve.create("idb-open",{originalErrorMessage:r.message})})),lo}async function kp(r){try{const e=(await Xl()).transaction(Dr),n=await e.objectStore(Dr).get(Jl(r));return await e.done,n}catch(t){if(t instanceof zn)ae.warn(t.message);else{const e=ve.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ae.warn(e.message)}}}async function nu(r,t){try{const n=(await Xl()).transaction(Dr,"readwrite");await n.objectStore(Dr).put(t,Jl(r)),await n.done}catch(e){if(e instanceof zn)ae.warn(e.message);else{const n=ve.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ae.warn(n.message)}}}function Jl(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Mp=1024,Op=30;class Lp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new jp(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ru();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Op){const a=Bp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ae.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ru(),{heartbeatsToSend:n,unsentEntries:s}=Fp(this._heartbeatsCache.heartbeats),i=Hs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ae.warn(e),""}}}function ru(){return new Date().toISOString().substring(0,10)}function Fp(r,t=Mp){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),su(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),su(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class jp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zl()?Rm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await kp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return nu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return nu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function su(r){return Hs(JSON.stringify({version:2,heartbeats:r})).length}function Bp(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
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
 */function Up(r){Xs(new Cr("platform-logger",t=>new Xm(t),"PRIVATE")),Xs(new Cr("heartbeat",t=>new Lp(t),"PRIVATE")),xn(vo,tu,r),xn(vo,tu,"esm2020"),xn("fire-js","")}Up("");var qp="firebase",zp="12.0.0";/**
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
 */xn(qp,zp,"app");var iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var we,Yl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,y){function I(){}I.prototype=y.prototype,E.D=y.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(T,A,v){for(var _=Array(arguments.length-2),j=2;j<arguments.length;j++)_[j-2]=arguments[j];return y.prototype[A].apply(T,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,I){I||(I=0);var T=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)T[A]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(A=0;16>A;++A)T[A]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=E.g[0],I=E.g[1],A=E.g[2];var v=E.g[3],_=y+(v^I&(A^v))+T[0]+3614090360&4294967295;y=I+(_<<7&4294967295|_>>>25),_=v+(A^y&(I^A))+T[1]+3905402710&4294967295,v=y+(_<<12&4294967295|_>>>20),_=A+(I^v&(y^I))+T[2]+606105819&4294967295,A=v+(_<<17&4294967295|_>>>15),_=I+(y^A&(v^y))+T[3]+3250441966&4294967295,I=A+(_<<22&4294967295|_>>>10),_=y+(v^I&(A^v))+T[4]+4118548399&4294967295,y=I+(_<<7&4294967295|_>>>25),_=v+(A^y&(I^A))+T[5]+1200080426&4294967295,v=y+(_<<12&4294967295|_>>>20),_=A+(I^v&(y^I))+T[6]+2821735955&4294967295,A=v+(_<<17&4294967295|_>>>15),_=I+(y^A&(v^y))+T[7]+4249261313&4294967295,I=A+(_<<22&4294967295|_>>>10),_=y+(v^I&(A^v))+T[8]+1770035416&4294967295,y=I+(_<<7&4294967295|_>>>25),_=v+(A^y&(I^A))+T[9]+2336552879&4294967295,v=y+(_<<12&4294967295|_>>>20),_=A+(I^v&(y^I))+T[10]+4294925233&4294967295,A=v+(_<<17&4294967295|_>>>15),_=I+(y^A&(v^y))+T[11]+2304563134&4294967295,I=A+(_<<22&4294967295|_>>>10),_=y+(v^I&(A^v))+T[12]+1804603682&4294967295,y=I+(_<<7&4294967295|_>>>25),_=v+(A^y&(I^A))+T[13]+4254626195&4294967295,v=y+(_<<12&4294967295|_>>>20),_=A+(I^v&(y^I))+T[14]+2792965006&4294967295,A=v+(_<<17&4294967295|_>>>15),_=I+(y^A&(v^y))+T[15]+1236535329&4294967295,I=A+(_<<22&4294967295|_>>>10),_=y+(A^v&(I^A))+T[1]+4129170786&4294967295,y=I+(_<<5&4294967295|_>>>27),_=v+(I^A&(y^I))+T[6]+3225465664&4294967295,v=y+(_<<9&4294967295|_>>>23),_=A+(y^I&(v^y))+T[11]+643717713&4294967295,A=v+(_<<14&4294967295|_>>>18),_=I+(v^y&(A^v))+T[0]+3921069994&4294967295,I=A+(_<<20&4294967295|_>>>12),_=y+(A^v&(I^A))+T[5]+3593408605&4294967295,y=I+(_<<5&4294967295|_>>>27),_=v+(I^A&(y^I))+T[10]+38016083&4294967295,v=y+(_<<9&4294967295|_>>>23),_=A+(y^I&(v^y))+T[15]+3634488961&4294967295,A=v+(_<<14&4294967295|_>>>18),_=I+(v^y&(A^v))+T[4]+3889429448&4294967295,I=A+(_<<20&4294967295|_>>>12),_=y+(A^v&(I^A))+T[9]+568446438&4294967295,y=I+(_<<5&4294967295|_>>>27),_=v+(I^A&(y^I))+T[14]+3275163606&4294967295,v=y+(_<<9&4294967295|_>>>23),_=A+(y^I&(v^y))+T[3]+4107603335&4294967295,A=v+(_<<14&4294967295|_>>>18),_=I+(v^y&(A^v))+T[8]+1163531501&4294967295,I=A+(_<<20&4294967295|_>>>12),_=y+(A^v&(I^A))+T[13]+2850285829&4294967295,y=I+(_<<5&4294967295|_>>>27),_=v+(I^A&(y^I))+T[2]+4243563512&4294967295,v=y+(_<<9&4294967295|_>>>23),_=A+(y^I&(v^y))+T[7]+1735328473&4294967295,A=v+(_<<14&4294967295|_>>>18),_=I+(v^y&(A^v))+T[12]+2368359562&4294967295,I=A+(_<<20&4294967295|_>>>12),_=y+(I^A^v)+T[5]+4294588738&4294967295,y=I+(_<<4&4294967295|_>>>28),_=v+(y^I^A)+T[8]+2272392833&4294967295,v=y+(_<<11&4294967295|_>>>21),_=A+(v^y^I)+T[11]+1839030562&4294967295,A=v+(_<<16&4294967295|_>>>16),_=I+(A^v^y)+T[14]+4259657740&4294967295,I=A+(_<<23&4294967295|_>>>9),_=y+(I^A^v)+T[1]+2763975236&4294967295,y=I+(_<<4&4294967295|_>>>28),_=v+(y^I^A)+T[4]+1272893353&4294967295,v=y+(_<<11&4294967295|_>>>21),_=A+(v^y^I)+T[7]+4139469664&4294967295,A=v+(_<<16&4294967295|_>>>16),_=I+(A^v^y)+T[10]+3200236656&4294967295,I=A+(_<<23&4294967295|_>>>9),_=y+(I^A^v)+T[13]+681279174&4294967295,y=I+(_<<4&4294967295|_>>>28),_=v+(y^I^A)+T[0]+3936430074&4294967295,v=y+(_<<11&4294967295|_>>>21),_=A+(v^y^I)+T[3]+3572445317&4294967295,A=v+(_<<16&4294967295|_>>>16),_=I+(A^v^y)+T[6]+76029189&4294967295,I=A+(_<<23&4294967295|_>>>9),_=y+(I^A^v)+T[9]+3654602809&4294967295,y=I+(_<<4&4294967295|_>>>28),_=v+(y^I^A)+T[12]+3873151461&4294967295,v=y+(_<<11&4294967295|_>>>21),_=A+(v^y^I)+T[15]+530742520&4294967295,A=v+(_<<16&4294967295|_>>>16),_=I+(A^v^y)+T[2]+3299628645&4294967295,I=A+(_<<23&4294967295|_>>>9),_=y+(A^(I|~v))+T[0]+4096336452&4294967295,y=I+(_<<6&4294967295|_>>>26),_=v+(I^(y|~A))+T[7]+1126891415&4294967295,v=y+(_<<10&4294967295|_>>>22),_=A+(y^(v|~I))+T[14]+2878612391&4294967295,A=v+(_<<15&4294967295|_>>>17),_=I+(v^(A|~y))+T[5]+4237533241&4294967295,I=A+(_<<21&4294967295|_>>>11),_=y+(A^(I|~v))+T[12]+1700485571&4294967295,y=I+(_<<6&4294967295|_>>>26),_=v+(I^(y|~A))+T[3]+2399980690&4294967295,v=y+(_<<10&4294967295|_>>>22),_=A+(y^(v|~I))+T[10]+4293915773&4294967295,A=v+(_<<15&4294967295|_>>>17),_=I+(v^(A|~y))+T[1]+2240044497&4294967295,I=A+(_<<21&4294967295|_>>>11),_=y+(A^(I|~v))+T[8]+1873313359&4294967295,y=I+(_<<6&4294967295|_>>>26),_=v+(I^(y|~A))+T[15]+4264355552&4294967295,v=y+(_<<10&4294967295|_>>>22),_=A+(y^(v|~I))+T[6]+2734768916&4294967295,A=v+(_<<15&4294967295|_>>>17),_=I+(v^(A|~y))+T[13]+1309151649&4294967295,I=A+(_<<21&4294967295|_>>>11),_=y+(A^(I|~v))+T[4]+4149444226&4294967295,y=I+(_<<6&4294967295|_>>>26),_=v+(I^(y|~A))+T[11]+3174756917&4294967295,v=y+(_<<10&4294967295|_>>>22),_=A+(y^(v|~I))+T[2]+718787259&4294967295,A=v+(_<<15&4294967295|_>>>17),_=I+(v^(A|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(A+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+v&4294967295}n.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var I=y-this.blockSize,T=this.B,A=this.h,v=0;v<y;){if(A==0)for(;v<=I;)s(this,E,v),v+=this.blockSize;if(typeof E=="string"){for(;v<y;)if(T[A++]=E.charCodeAt(v++),A==this.blockSize){s(this,T),A=0;break}}else for(;v<y;)if(T[A++]=E[v++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=y},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var I=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=I&255,I/=256;for(this.u(E),E=Array(16),y=I=0;4>y;++y)for(var T=0;32>T;T+=8)E[I++]=this.g[y]>>>T&255;return E};function i(E,y){var I=c;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=y(E)}function a(E,y){this.h=y;for(var I=[],T=!0,A=E.length-1;0<=A;A--){var v=E[A]|0;T&&v==y||(I[A]=v,T=!1)}this.g=I}var c={};function l(E){return-128<=E&&128>E?i(E,function(y){return new a([y|0],0>y?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return C(d(-E));for(var y=[],I=1,T=0;E>=I;T++)y[T]=E/I|0,I*=4294967296;return new a(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return C(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(y,8)),T=p,A=0;A<E.length;A+=8){var v=Math.min(8,E.length-A),_=parseInt(E.substring(A,A+v),y);8>v?(v=d(Math.pow(y,v)),T=T.j(v).add(d(_))):(T=T.j(I),T=T.add(d(_)))}return T}var p=l(0),g=l(1),R=l(16777216);r=a.prototype,r.m=function(){if(D(this))return-C(this).m();for(var E=0,y=1,I=0;I<this.g.length;I++){var T=this.i(I);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(D(this))return"-"+C(this).toString(E);for(var y=d(Math.pow(E,6)),I=this,T="";;){var A=H(I,y).g;I=U(I,A.j(y));var v=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=A,V(I))return v+T;for(;6>v.length;)v="0"+v;T=v+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function D(E){return E.h==-1}r.l=function(E){return E=U(this,E),D(E)?-1:V(E)?0:1};function C(E){for(var y=E.g.length,I=[],T=0;T<y;T++)I[T]=~E.g[T];return new a(I,~E.h).add(g)}r.abs=function(){return D(this)?C(this):this},r.add=function(E){for(var y=Math.max(this.g.length,E.g.length),I=[],T=0,A=0;A<=y;A++){var v=T+(this.i(A)&65535)+(E.i(A)&65535),_=(v>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);T=_>>>16,v&=65535,_&=65535,I[A]=_<<16|v}return new a(I,I[I.length-1]&-2147483648?-1:0)};function U(E,y){return E.add(C(y))}r.j=function(E){if(V(this)||V(E))return p;if(D(this))return D(E)?C(this).j(C(E)):C(C(this).j(E));if(D(E))return C(this.j(C(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var y=this.g.length+E.g.length,I=[],T=0;T<2*y;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<E.g.length;A++){var v=this.i(T)>>>16,_=this.i(T)&65535,j=E.i(A)>>>16,gt=E.i(A)&65535;I[2*T+2*A]+=_*gt,L(I,2*T+2*A),I[2*T+2*A+1]+=v*gt,L(I,2*T+2*A+1),I[2*T+2*A+1]+=_*j,L(I,2*T+2*A+1),I[2*T+2*A+2]+=v*j,L(I,2*T+2*A+2)}for(T=0;T<y;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=y;T<2*y;T++)I[T]=0;return new a(I,0)};function L(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function F(E,y){this.g=E,this.h=y}function H(E,y){if(V(y))throw Error("division by zero");if(V(E))return new F(p,p);if(D(E))return y=H(C(E),y),new F(C(y.g),C(y.h));if(D(y))return y=H(E,C(y)),new F(C(y.g),y.h);if(30<E.g.length){if(D(E)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var I=g,T=y;0>=T.l(E);)I=Z(I),T=Z(T);var A=$(I,1),v=$(T,1);for(T=$(T,2),I=$(I,2);!V(T);){var _=v.add(T);0>=_.l(E)&&(A=A.add(I),v=_),T=$(T,1),I=$(I,1)}return y=U(E,A.j(y)),new F(A,y)}for(A=p;0<=E.l(y);){for(I=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),v=d(I),_=v.j(y);D(_)||0<_.l(E);)I-=T,v=d(I),_=v.j(y);V(v)&&(v=g),A=A.add(v),E=U(E,_)}return new F(A,E)}r.A=function(E){return H(this,E).h},r.and=function(E){for(var y=Math.max(this.g.length,E.g.length),I=[],T=0;T<y;T++)I[T]=this.i(T)&E.i(T);return new a(I,this.h&E.h)},r.or=function(E){for(var y=Math.max(this.g.length,E.g.length),I=[],T=0;T<y;T++)I[T]=this.i(T)|E.i(T);return new a(I,this.h|E.h)},r.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),I=[],T=0;T<y;T++)I[T]=this.i(T)^E.i(T);return new a(I,this.h^E.h)};function Z(E){for(var y=E.g.length+1,I=[],T=0;T<y;T++)I[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(I,E.h)}function $(E,y){var I=y>>5;y%=32;for(var T=E.g.length-I,A=[],v=0;v<T;v++)A[v]=0<y?E.i(v+I)>>>y|E.i(v+I+1)<<32-y:E.i(v+I);return new a(A,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Yl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,we=a}).apply(typeof iu<"u"?iu:typeof self<"u"?self:typeof window<"u"?window:{});var Ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zl,gr,th,Ms,bo,eh,nh,rh;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ss=="object"&&Ss];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,u){if(u)t:{var h=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var x=o[m];if(!(x in h))break t;h=h[x]}o=o[o.length-1],m=h[o],u=u(m),u!=m&&u!=null&&t(h,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var h=0,m=!1,x={next:function(){if(!m&&h<o.length){var S=h++;return{value:u(S,o[S]),done:!1}}return m=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,h){return o.call.apply(o.bind,arguments)}function p(o,u,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,m),o.apply(u,x)}}return function(){return o.apply(u,arguments)}}function g(o,u,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function R(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function V(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,x,S){for(var M=Array(arguments.length-2),it=2;it<arguments.length;it++)M[it-2]=arguments[it];return u.prototype[x].apply(m,M)}}function D(o){const u=o.length;if(0<u){const h=Array(u);for(let m=0;m<u;m++)h[m]=o[m];return h}return[]}function C(o,u){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(l(m)){const x=o.length||0,S=m.length||0;o.length=x+S;for(let M=0;M<S;M++)o[x+M]=m[M]}else o.push(m)}}class U{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var Z=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function $(o,u,h){for(const m in o)u.call(h,o[m],m,o)}function E(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function y(o){const u={};for(const h in o)u[h]=o[h];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let h,m;for(let x=1;x<arguments.length;x++){m=arguments[x];for(h in m)o[h]=m[h];for(let S=0;S<I.length;S++)h=I[S],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function A(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function v(o){c.setTimeout(()=>{throw o},0)}function _(){var o=Oi;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class j{constructor(){this.h=this.g=null}add(u,h){const m=gt.get();m.set(u,h),this.h?this.h.next=m:this.g=m,this.h=m}}var gt=new U(()=>new Xt,o=>o.reset());class Xt{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let re,ke=!1,Oi=new j,$a=()=>{const o=c.Promise.resolve(void 0);re=()=>{o.then(Ef)}};var Ef=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){v(h)}var u=gt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ke=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function At(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};var Tf=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Wn(o,u){if(At.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Z){t:{try{H(u.nodeName);var x=!0;break t}catch{}x=!1}x||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:vf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Wn.aa.h.call(this)}}V(Wn,At);var vf={2:"touch",3:"pen",4:"mouse"};Wn.prototype.h=function(){Wn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var as="closure_listenable_"+(1e6*Math.random()|0),wf=0;function Af(o,u,h,m,x){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!m,this.ha=x,this.key=++wf,this.da=this.fa=!1}function cs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function us(o){this.src=o,this.g={},this.h=0}us.prototype.add=function(o,u,h,m,x){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var M=Fi(o,u,m,x);return-1<M?(u=o[M],h||(u.fa=!1)):(u=new Af(u,this.src,S,!!m,x),u.fa=h,o.push(u)),u};function Li(o,u){var h=u.type;if(h in o.g){var m=o.g[h],x=Array.prototype.indexOf.call(m,u,void 0),S;(S=0<=x)&&Array.prototype.splice.call(m,x,1),S&&(cs(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Fi(o,u,h,m){for(var x=0;x<o.length;++x){var S=o[x];if(!S.da&&S.listener==u&&S.capture==!!h&&S.ha==m)return x}return-1}var ji="closure_lm_"+(1e6*Math.random()|0),Bi={};function Ga(o,u,h,m,x){if(Array.isArray(u)){for(var S=0;S<u.length;S++)Ga(o,u[S],h,m,x);return null}return h=Wa(h),o&&o[as]?o.K(u,h,d(m)?!!m.capture:!1,x):bf(o,u,h,!1,m,x)}function bf(o,u,h,m,x,S){if(!u)throw Error("Invalid event type");var M=d(x)?!!x.capture:!!x,it=qi(o);if(it||(o[ji]=it=new us(o)),h=it.add(u,h,m,M,S),h.proxy)return h;if(m=xf(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)Tf||(x=M),x===void 0&&(x=!1),o.addEventListener(u.toString(),m,x);else if(o.attachEvent)o.attachEvent(Ha(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function xf(){function o(h){return u.call(o.src,o.listener,h)}const u=Rf;return o}function Ka(o,u,h,m,x){if(Array.isArray(u))for(var S=0;S<u.length;S++)Ka(o,u[S],h,m,x);else m=d(m)?!!m.capture:!!m,h=Wa(h),o&&o[as]?(o=o.i,u=String(u).toString(),u in o.g&&(S=o.g[u],h=Fi(S,h,m,x),-1<h&&(cs(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[u],o.h--)))):o&&(o=qi(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Fi(u,h,m,x)),(h=-1<o?u[o]:null)&&Ui(h))}function Ui(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[as])Li(u.i,o);else{var h=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(h,m,o.capture):u.detachEvent?u.detachEvent(Ha(h),m):u.addListener&&u.removeListener&&u.removeListener(m),(h=qi(u))?(Li(h,o),h.h==0&&(h.src=null,u[ji]=null)):cs(o)}}}function Ha(o){return o in Bi?Bi[o]:Bi[o]="on"+o}function Rf(o,u){if(o.da)o=!0;else{u=new Wn(u,this);var h=o.listener,m=o.ha||o.src;o.fa&&Ui(o),o=h.call(m,u)}return o}function qi(o){return o=o[ji],o instanceof us?o:null}var zi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wa(o){return typeof o=="function"?o:(o[zi]||(o[zi]=function(u){return o.handleEvent(u)}),o[zi])}function bt(){de.call(this),this.i=new us(this),this.M=this,this.F=null}V(bt,de),bt.prototype[as]=!0,bt.prototype.removeEventListener=function(o,u,h,m){Ka(this,o,u,h,m)};function Dt(o,u){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new At(u,o);else if(u instanceof At)u.target=u.target||o;else{var x=u;u=new At(m,o),T(u,x)}if(x=!0,h)for(var S=h.length-1;0<=S;S--){var M=u.g=h[S];x=ls(M,m,!0,u)&&x}if(M=u.g=o,x=ls(M,m,!0,u)&&x,x=ls(M,m,!1,u)&&x,h)for(S=0;S<h.length;S++)M=u.g=h[S],x=ls(M,m,!1,u)&&x}bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],m=0;m<h.length;m++)cs(h[m]);delete o.g[u],o.h--}}this.F=null},bt.prototype.K=function(o,u,h,m){return this.i.add(String(o),u,!1,h,m)},bt.prototype.L=function(o,u,h,m){return this.i.add(String(o),u,!0,h,m)};function ls(o,u,h,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var x=!0,S=0;S<u.length;++S){var M=u[S];if(M&&!M.da&&M.capture==h){var it=M.listener,Tt=M.ha||M.src;M.fa&&Li(o.i,M),x=it.call(Tt,m)!==!1&&x}}return x&&!m.defaultPrevented}function Qa(o,u,h){if(typeof o=="function")h&&(o=g(o,h));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Xa(o){o.g=Qa(()=>{o.g=null,o.i&&(o.i=!1,Xa(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Sf extends de{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Xa(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qn(o){de.call(this),this.h=o,this.g={}}V(Qn,de);var Ja=[];function Ya(o){$(o.g,function(u,h){this.g.hasOwnProperty(h)&&Ui(u)},o),o.g={}}Qn.prototype.N=function(){Qn.aa.N.call(this),Ya(this)},Qn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $i=c.JSON.stringify,Pf=c.JSON.parse,Vf=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Gi(){}Gi.prototype.h=null;function Za(o){return o.h||(o.h=o.i())}function tc(){}var Xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ki(){At.call(this,"d")}V(Ki,At);function Hi(){At.call(this,"c")}V(Hi,At);var Me={},ec=null;function hs(){return ec=ec||new bt}Me.La="serverreachability";function nc(o){At.call(this,Me.La,o)}V(nc,At);function Jn(o){const u=hs();Dt(u,new nc(u))}Me.STAT_EVENT="statevent";function rc(o,u){At.call(this,Me.STAT_EVENT,o),this.stat=u}V(rc,At);function Nt(o){const u=hs();Dt(u,new rc(u,o))}Me.Ma="timingevent";function sc(o,u){At.call(this,Me.Ma,o),this.size=u}V(sc,At);function Yn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Zn(){this.g=!0}Zn.prototype.xa=function(){this.g=!1};function Cf(o,u,h,m,x,S){o.info(function(){if(o.g)if(S)for(var M="",it=S.split("&"),Tt=0;Tt<it.length;Tt++){var tt=it[Tt].split("=");if(1<tt.length){var xt=tt[0];tt=tt[1];var Rt=xt.split("_");M=2<=Rt.length&&Rt[1]=="type"?M+(xt+"="+tt+"&"):M+(xt+"=redacted&")}}else M=null;else M=S;return"XMLHTTP REQ ("+m+") [attempt "+x+"]: "+u+`
`+h+`
`+M})}function Df(o,u,h,m,x,S,M){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+x+"]: "+u+`
`+h+`
`+S+" "+M})}function hn(o,u,h,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+kf(o,h)+(m?" "+m:"")})}function Nf(o,u){o.info(function(){return"TIMEOUT: "+u})}Zn.prototype.info=function(){};function kf(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var x=m[1];if(Array.isArray(x)&&!(1>x.length)){var S=x[0];if(S!="noop"&&S!="stop"&&S!="close")for(var M=1;M<x.length;M++)x[M]=""}}}}return $i(h)}catch{return u}}var ds={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ic={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wi;function fs(){}V(fs,Gi),fs.prototype.g=function(){return new XMLHttpRequest},fs.prototype.i=function(){return{}},Wi=new fs;function fe(o,u,h,m){this.j=o,this.i=u,this.l=h,this.R=m||1,this.U=new Qn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oc}function oc(){this.i=null,this.g="",this.h=!1}var ac={},Qi={};function Xi(o,u,h){o.L=1,o.v=_s(se(u)),o.m=h,o.P=!0,cc(o,null)}function cc(o,u){o.F=Date.now(),ms(o),o.A=se(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),vc(h.i,"t",m),o.C=0,h=o.j.J,o.h=new oc,o.g=Bc(o.j,h?u:null,!o.m),0<o.O&&(o.M=new Sf(g(o.Y,o,o.g),o.O)),u=o.U,h=o.g,m=o.ca;var x="readystatechange";Array.isArray(x)||(x&&(Ja[0]=x.toString()),x=Ja);for(var S=0;S<x.length;S++){var M=Ga(h,x[S],m||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Jn(),Cf(o.i,o.u,o.A,o.l,o.R,o.m)}fe.prototype.ca=function(o){o=o.target;const u=this.M;u&&ie(o)==3?u.j():this.Y(o)},fe.prototype.Y=function(o){try{if(o==this.g)t:{const Rt=ie(this.g);var u=this.g.Ba();const mn=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Pc(this.g)))){this.J||Rt!=4||u==7||(u==8||0>=mn?Jn(3):Jn(2)),Ji(this);var h=this.g.Z();this.X=h;e:if(uc(this)){var m=Pc(this.g);o="";var x=m.length,S=ie(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Oe(this),tr(this);var M="";break e}this.h.i=new c.TextDecoder}for(u=0;u<x;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(S&&u==x-1)});m.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,Df(this.i,this.u,this.A,this.l,this.R,Rt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var it,Tt=this.g;if((it=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(it)){var tt=it;break e}}tt=null}if(h=tt)hn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yi(this,h);else{this.o=!1,this.s=3,Nt(12),Oe(this),tr(this);break t}}if(this.P){h=!0;let Kt;for(;!this.J&&this.C<M.length;)if(Kt=Mf(this,M),Kt==Qi){Rt==4&&(this.s=4,Nt(14),h=!1),hn(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==ac){this.s=4,Nt(15),hn(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else hn(this.i,this.l,Kt,null),Yi(this,Kt);if(uc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||M.length!=0||this.h.h||(this.s=1,Nt(16),h=!1),this.o=this.o&&h,!h)hn(this.i,this.l,M,"[Invalid Chunked Response]"),Oe(this),tr(this);else if(0<M.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),so(xt),xt.M=!0,Nt(11))}}else hn(this.i,this.l,M,null),Yi(this,M);Rt==4&&Oe(this),this.o&&!this.J&&(Rt==4?Oc(this.j,this):(this.o=!1,ms(this)))}else Yf(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),Oe(this),tr(this)}}}catch{}finally{}};function uc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Mf(o,u){var h=o.C,m=u.indexOf(`
`,h);return m==-1?Qi:(h=Number(u.substring(h,m)),isNaN(h)?ac:(m+=1,m+h>u.length?Qi:(u=u.slice(m,m+h),o.C=m+h,u)))}fe.prototype.cancel=function(){this.J=!0,Oe(this)};function ms(o){o.S=Date.now()+o.I,lc(o,o.I)}function lc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Yn(g(o.ba,o),u)}function Ji(o){o.B&&(c.clearTimeout(o.B),o.B=null)}fe.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Nf(this.i,this.A),this.L!=2&&(Jn(),Nt(17)),Oe(this),this.s=2,tr(this)):lc(this,this.S-o)};function tr(o){o.j.G==0||o.J||Oc(o.j,o)}function Oe(o){Ji(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ya(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Yi(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Zi(h.h,o))){if(!o.K&&Zi(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var x=m;if(x[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ws(h),Ts(h);else break t;ro(h),Nt(18)}}else h.za=x[1],0<h.za-h.T&&37500>x[2]&&h.F&&h.v==0&&!h.C&&(h.C=Yn(g(h.Za,h),6e3));if(1>=fc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Fe(h,11)}else if((o.K||h.g==o)&&ws(h),!L(u))for(x=h.Da.g.parse(u),u=0;u<x.length;u++){let tt=x[u];if(h.T=tt[0],tt=tt[1],h.G==2)if(tt[0]=="c"){h.K=tt[1],h.ia=tt[2];const xt=tt[3];xt!=null&&(h.la=xt,h.j.info("VER="+h.la));const Rt=tt[4];Rt!=null&&(h.Aa=Rt,h.j.info("SVER="+h.Aa));const mn=tt[5];mn!=null&&typeof mn=="number"&&0<mn&&(m=1.5*mn,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Kt=o.g;if(Kt){const bs=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var S=m.h;S.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(to(S,S.h),S.h=null))}if(m.D){const io=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;io&&(m.ya=io,ot(m.I,m.D,io))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var M=o;if(m.qa=jc(m,m.J?m.ia:null,m.W),M.K){mc(m.h,M);var it=M,Tt=m.L;Tt&&(it.I=Tt),it.B&&(Ji(it),ms(it)),m.g=M}else kc(m);0<h.i.length&&vs(h)}else tt[0]!="stop"&&tt[0]!="close"||Fe(h,7);else h.G==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?Fe(h,7):no(h):tt[0]!="noop"&&h.l&&h.l.ta(tt),h.v=0)}}Jn(4)}catch{}}var Of=class{constructor(o,u){this.g=o,this.map=u}};function hc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function fc(o){return o.h?1:o.g?o.g.size:0}function Zi(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function to(o,u){o.g?o.g.add(u):o.h=u}function mc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}hc.prototype.cancel=function(){if(this.i=pc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function pc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return D(o.i)}function Lf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,m=0;m<h;m++)u.push(o[m]);return u}u=[],h=0;for(m in o)u[h++]=o[m];return u}function Ff(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const m in o)u[h++]=m;return u}}}function gc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=Ff(o),m=Lf(o),x=m.length,S=0;S<x;S++)u.call(void 0,m[S],h&&h[S],o)}var _c=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jf(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),x=null;if(0<=m){var S=o[h].substring(0,m);x=o[h].substring(m+1)}else S=o[h];u(S,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Le(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Le){this.h=o.h,ps(this,o.j),this.o=o.o,this.g=o.g,gs(this,o.s),this.l=o.l;var u=o.i,h=new rr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),yc(this,h),this.m=o.m}else o&&(u=String(o).match(_c))?(this.h=!1,ps(this,u[1]||"",!0),this.o=er(u[2]||""),this.g=er(u[3]||"",!0),gs(this,u[4]),this.l=er(u[5]||"",!0),yc(this,u[6]||"",!0),this.m=er(u[7]||"")):(this.h=!1,this.i=new rr(null,this.h))}Le.prototype.toString=function(){var o=[],u=this.j;u&&o.push(nr(u,Ic,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(nr(u,Ic,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(nr(h,h.charAt(0)=="/"?qf:Uf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",nr(h,$f)),o.join("")};function se(o){return new Le(o)}function ps(o,u,h){o.j=h?er(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function gs(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function yc(o,u,h){u instanceof rr?(o.i=u,Gf(o.i,o.h)):(h||(u=nr(u,zf)),o.i=new rr(u,o.h))}function ot(o,u,h){o.i.set(u,h)}function _s(o){return ot(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function er(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function nr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,Bf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Bf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ic=/[#\/\?@]/g,Uf=/[#\?:]/g,qf=/[#\?]/g,zf=/[#\?@]/g,$f=/#/g;function rr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function me(o){o.g||(o.g=new Map,o.h=0,o.i&&jf(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}r=rr.prototype,r.add=function(o,u){me(this),this.i=null,o=dn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Ec(o,u){me(o),u=dn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Tc(o,u){return me(o),u=dn(o,u),o.g.has(u)}r.forEach=function(o,u){me(this),this.g.forEach(function(h,m){h.forEach(function(x){o.call(u,x,m,this)},this)},this)},r.na=function(){me(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let m=0;m<u.length;m++){const x=o[m];for(let S=0;S<x.length;S++)h.push(u[m])}return h},r.V=function(o){me(this);let u=[];if(typeof o=="string")Tc(this,o)&&(u=u.concat(this.g.get(dn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},r.set=function(o,u){return me(this),this.i=null,o=dn(this,o),Tc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},r.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function vc(o,u,h){Ec(o,u),0<h.length&&(o.i=null,o.g.set(dn(o,u),D(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var m=u[h];const S=encodeURIComponent(String(m)),M=this.V(m);for(m=0;m<M.length;m++){var x=S;M[m]!==""&&(x+="="+encodeURIComponent(String(M[m]))),o.push(x)}}return this.i=o.join("&")};function dn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Gf(o,u){u&&!o.j&&(me(o),o.i=null,o.g.forEach(function(h,m){var x=m.toLowerCase();m!=x&&(Ec(this,m),vc(this,x,h))},o)),o.j=u}function Kf(o,u){const h=new Zn;if(c.Image){const m=new Image;m.onload=R(pe,h,"TestLoadImage: loaded",!0,u,m),m.onerror=R(pe,h,"TestLoadImage: error",!1,u,m),m.onabort=R(pe,h,"TestLoadImage: abort",!1,u,m),m.ontimeout=R(pe,h,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function Hf(o,u){const h=new Zn,m=new AbortController,x=setTimeout(()=>{m.abort(),pe(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(S=>{clearTimeout(x),S.ok?pe(h,"TestPingServer: ok",!0,u):pe(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(x),pe(h,"TestPingServer: error",!1,u)})}function pe(o,u,h,m,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),m(h)}catch{}}function Wf(){this.g=new Vf}function Qf(o,u,h){const m=h||"";try{gc(o,function(x,S){let M=x;d(x)&&(M=$i(x)),u.push(m+S+"="+encodeURIComponent(M))})}catch(x){throw u.push(m+"type="+encodeURIComponent("_badmap")),x}}function ys(o){this.l=o.Ub||null,this.j=o.eb||!1}V(ys,Gi),ys.prototype.g=function(){return new Is(this.l,this.j)},ys.prototype.i=function(o){return function(){return o}}({});function Is(o,u){bt.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Is,bt),r=Is.prototype,r.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ir(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ir(this)),this.g&&(this.readyState=3,ir(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function wc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?sr(this):ir(this),this.readyState==3&&wc(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,sr(this))},r.Qa=function(o){this.g&&(this.response=o,sr(this))},r.ga=function(){this.g&&sr(this)};function sr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ir(o)}r.setRequestHeader=function(o,u){this.u.append(o,u)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function ir(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ac(o){let u="";return $(o,function(h,m){u+=m,u+=":",u+=h,u+=`\r
`}),u}function eo(o,u,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=Ac(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ot(o,u,h))}function lt(o){bt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(lt,bt);var Xf=/^https?$/i,Jf=["POST","PUT"];r=lt.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,u,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wi.g(),this.v=this.o?Za(this.o):Za(Wi),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(S){bc(this,S);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var x in m)h.set(x,m[x]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())h.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),x=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Jf,u,void 0))||m||x||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of h)this.g.setRequestHeader(S,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sc(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){bc(this,S)}};function bc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,xc(o),Es(o)}function xc(o){o.A||(o.A=!0,Dt(o,"complete"),Dt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Dt(this,"complete"),Dt(this,"abort"),Es(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Es(this,!0)),lt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Rc(this):this.bb())},r.bb=function(){Rc(this)};function Rc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ie(o)!=4||o.Z()!=2)){if(o.u&&ie(o)==4)Qa(o.Ea,0,o);else if(Dt(o,"readystatechange"),ie(o)==4){o.h=!1;try{const M=o.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var h;if(!(h=u)){var m;if(m=M===0){var x=String(o.D).match(_c)[1]||null;!x&&c.self&&c.self.location&&(x=c.self.location.protocol.slice(0,-1)),m=!Xf.test(x?x.toLowerCase():"")}h=m}if(h)Dt(o,"complete"),Dt(o,"success");else{o.m=6;try{var S=2<ie(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",xc(o)}}finally{Es(o)}}}}function Es(o,u){if(o.g){Sc(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Dt(o,"ready");try{h.onreadystatechange=m}catch{}}}function Sc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function ie(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<ie(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Pf(u)}};function Pc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Yf(o){const u={};o=(o.g&&2<=ie(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(L(o[m]))continue;var h=A(o[m]);const x=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=u[x]||[];u[x]=S,S.push(h)}E(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function or(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Vc(o){this.Aa=0,this.i=[],this.j=new Zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=or("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=or("baseRetryDelayMs",5e3,o),this.cb=or("retryDelaySeedMs",1e4,o),this.Wa=or("forwardChannelMaxRetries",2,o),this.wa=or("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new hc(o&&o.concurrentRequestLimit),this.Da=new Wf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Vc.prototype,r.la=8,r.G=1,r.connect=function(o,u,h,m){Nt(0),this.W=o,this.H=u||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=jc(this,null,this.W),vs(this)};function no(o){if(Cc(o),o.G==3){var u=o.U++,h=se(o.I);if(ot(h,"SID",o.K),ot(h,"RID",u),ot(h,"TYPE","terminate"),ar(o,h),u=new fe(o,o.j,u),u.L=2,u.v=_s(se(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Bc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ms(u)}Fc(o)}function Ts(o){o.g&&(so(o),o.g.cancel(),o.g=null)}function Cc(o){Ts(o),o.u&&(c.clearTimeout(o.u),o.u=null),ws(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function vs(o){if(!dc(o.h)&&!o.s){o.s=!0;var u=o.Ga;re||$a(),ke||(re(),ke=!0),Oi.add(u,o),o.B=0}}function Zf(o,u){return fc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Yn(g(o.Ga,o,u),Lc(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const x=new fe(this,this.j,o);let S=this.o;if(this.S&&(S?(S=y(S),T(S,this.S)):S=this.S),this.m!==null||this.O||(x.H=S,S=null),this.P)t:{for(var u=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=h;break t}if(u===4096||h===this.i.length-1){u=h+1;break t}}u=1e3}else u=1e3;u=Nc(this,x,u),h=se(this.I),ot(h,"RID",o),ot(h,"CVER",22),this.D&&ot(h,"X-HTTP-Session-Id",this.D),ar(this,h),S&&(this.O?u="headers="+encodeURIComponent(String(Ac(S)))+"&"+u:this.m&&eo(h,this.m,S)),to(this.h,x),this.Ua&&ot(h,"TYPE","init"),this.P?(ot(h,"$req",u),ot(h,"SID","null"),x.T=!0,Xi(x,h,null)):Xi(x,h,u),this.G=2}}else this.G==3&&(o?Dc(this,o):this.i.length==0||dc(this.h)||Dc(this))};function Dc(o,u){var h;u?h=u.l:h=o.U++;const m=se(o.I);ot(m,"SID",o.K),ot(m,"RID",h),ot(m,"AID",o.T),ar(o,m),o.m&&o.o&&eo(m,o.m,o.o),h=new fe(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Nc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),to(o.h,h),Xi(h,m,u)}function ar(o,u){o.H&&$(o.H,function(h,m){ot(u,m,h)}),o.l&&gc({},function(h,m){ot(u,m,h)})}function Nc(o,u,h){h=Math.min(o.i.length,h);var m=o.l?g(o.l.Na,o.l,o):null;t:{var x=o.i;let S=-1;for(;;){const M=["count="+h];S==-1?0<h?(S=x[0].g,M.push("ofs="+S)):S=0:M.push("ofs="+S);let it=!0;for(let Tt=0;Tt<h;Tt++){let tt=x[Tt].g;const xt=x[Tt].map;if(tt-=S,0>tt)S=Math.max(0,x[Tt].g-100),it=!1;else try{Qf(xt,M,"req"+tt+"_")}catch{m&&m(xt)}}if(it){m=M.join("&");break t}}}return o=o.i.splice(0,h),u.D=o,m}function kc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;re||$a(),ke||(re(),ke=!0),Oi.add(u,o),o.v=0}}function ro(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Yn(g(o.Fa,o),Lc(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Mc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Yn(g(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),Ts(this),Mc(this))};function so(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Mc(o){o.g=new fe(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=se(o.qa);ot(u,"RID","rpc"),ot(u,"SID",o.K),ot(u,"AID",o.T),ot(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ot(u,"TO",o.ja),ot(u,"TYPE","xmlhttp"),ar(o,u),o.m&&o.o&&eo(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=_s(se(u)),h.m=null,h.P=!0,cc(h,o)}r.Za=function(){this.C!=null&&(this.C=null,Ts(this),ro(this),Nt(19))};function ws(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Oc(o,u){var h=null;if(o.g==u){ws(o),so(o),o.g=null;var m=2}else if(Zi(o.h,u))h=u.D,mc(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var x=o.B;m=hs(),Dt(m,new sc(m,h)),vs(o)}else kc(o);else if(x=u.s,x==3||x==0&&0<u.X||!(m==1&&Zf(o,u)||m==2&&ro(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),x){case 1:Fe(o,5);break;case 4:Fe(o,10);break;case 3:Fe(o,6);break;default:Fe(o,2)}}}function Lc(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Fe(o,u){if(o.j.info("Error code "+u),u==2){var h=g(o.fb,o),m=o.Xa;const x=!m;m=new Le(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ps(m,"https"),_s(m),x?Kf(m.toString(),h):Hf(m.toString(),h)}else Nt(2);o.G=0,o.l&&o.l.sa(u),Fc(o),Cc(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function Fc(o){if(o.G=0,o.ka=[],o.l){const u=pc(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ka,u),C(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function jc(o,u,h){var m=h instanceof Le?se(h):new Le(h);if(m.g!="")u&&(m.g=u+"."+m.g),gs(m,m.s);else{var x=c.location;m=x.protocol,u=u?u+"."+x.hostname:x.hostname,x=+x.port;var S=new Le(null);m&&ps(S,m),u&&(S.g=u),x&&gs(S,x),h&&(S.l=h),m=S}return h=o.D,u=o.ya,h&&u&&ot(m,h,u),ot(m,"VER",o.la),ar(o,m),m}function Bc(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new lt(new ys({eb:h})):new lt(o.pa),u.Ha(o.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uc(){}r=Uc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function As(){}As.prototype.g=function(o,u){return new Lt(o,u)};function Lt(o,u){bt.call(this),this.g=new Vc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!L(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!L(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new fn(this)}V(Lt,bt),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){no(this.g)},Lt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=$i(o),o=h);u.i.push(new Of(u.Ya++,o)),u.G==3&&vs(u)},Lt.prototype.N=function(){this.g.l=null,delete this.j,no(this.g),delete this.g,Lt.aa.N.call(this)};function qc(o){Ki.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const h in u){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(qc,Ki);function zc(){Hi.call(this),this.status=1}V(zc,Hi);function fn(o){this.g=o}V(fn,Uc),fn.prototype.ua=function(){Dt(this.g,"a")},fn.prototype.ta=function(o){Dt(this.g,new qc(o))},fn.prototype.sa=function(o){Dt(this.g,new zc)},fn.prototype.ra=function(){Dt(this.g,"b")},As.prototype.createWebChannel=As.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,rh=function(){return new As},nh=function(){return hs()},eh=Me,bo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ds.NO_ERROR=0,ds.TIMEOUT=8,ds.HTTP_ERROR=6,Ms=ds,ic.COMPLETE="complete",th=ic,tc.EventType=Xn,Xn.OPEN="a",Xn.CLOSE="b",Xn.ERROR="c",Xn.MESSAGE="d",bt.prototype.listen=bt.prototype.K,gr=tc,lt.prototype.listenOnce=lt.prototype.L,lt.prototype.getLastError=lt.prototype.Ka,lt.prototype.getLastErrorCode=lt.prototype.Ba,lt.prototype.getStatus=lt.prototype.Z,lt.prototype.getResponseJson=lt.prototype.Oa,lt.prototype.getResponseText=lt.prototype.oa,lt.prototype.send=lt.prototype.ea,lt.prototype.setWithCredentials=lt.prototype.Ha,Zl=lt}).apply(typeof Ss<"u"?Ss:typeof self<"u"?self:typeof window<"u"?window:{});const ou="@firebase/firestore",au="4.9.0";/**
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
 */let $n="12.0.0";/**
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
 */const tn=new Gl("@firebase/firestore");function Tn(){return tn.logLevel}function N(r,...t){if(tn.logLevel<=Y.DEBUG){const e=t.map(ta);tn.debug(`Firestore (${$n}): ${r}`,...e)}}function kt(r,...t){if(tn.logLevel<=Y.ERROR){const e=t.map(ta);tn.error(`Firestore (${$n}): ${r}`,...e)}}function Pn(r,...t){if(tn.logLevel<=Y.WARN){const e=t.map(ta);tn.warn(`Firestore (${$n}): ${r}`,...e)}}function ta(r){if(typeof r=="string")return r;try{/**
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
 */function B(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,sh(r,n,e)}function sh(r,t,e){let n=`FIRESTORE (${$n}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw kt(n),new Error(n)}function q(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||sh(t,s,n)}function K(r,t){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends zn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ae{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class ih{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $p{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(vt.UNAUTHENTICATED))}shutdown(){}}class Gp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Kp{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){q(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ae,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ae)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(q(typeof n.accessToken=="string",31837,{l:n}),new ih(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return q(t===null||typeof t=="string",2055,{h:t}),new vt(t)}}class Hp{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Wp{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Hp(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qp{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rp(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){q(this.o===void 0,3512);const n=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(q(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new cu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Xp(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class ea{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Xp(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function G(r,t){return r<t?-1:r>t?1:0}function xo(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),i=t.charAt(n);if(s!==i)return ho(s)===ho(i)?G(s,i):ho(s)?1:-1}return G(r.length,t.length)}const Jp=55296,Yp=57343;function ho(r){const t=r.charCodeAt(0);return t>=Jp&&t<=Yp}function Vn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function oh(r){return r+"\0"}/**
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
 */const uu="__name__";class Jt{constructor(t,e,n){e===void 0?e=0:e>t.length&&B(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&B(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Jt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Jt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=Jt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return G(t.length,e.length)}static compareSegments(t,e){const n=Jt.isNumericId(t),s=Jt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Jt.extractNumericId(t).compare(Jt.extractNumericId(e)):xo(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return we.fromString(t.substring(4,t.length-2))}}class et extends Jt{construct(t,e,n){return new et(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new et(e)}static emptyPath(){return new et([])}}const Zp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Jt{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return Zp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===uu}static keyField(){return new ut([uu])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(n+=c,s++):(i(),s++)}if(i(),a)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
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
 */function ah(r,t,e){if(!e)throw new k(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function tg(r,t,e,n){if(t===!0&&n===!0)throw new k(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function lu(r){if(!O.isDocumentKey(r))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function hu(r){if(O.isDocumentKey(r))throw new k(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ch(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function mi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":B(12329,{type:typeof r})}function Qt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=mi(r);throw new k(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */function mt(r,t){const e={typeString:r};return t&&(e.value=t),e}function Wr(r,t){if(!ch(r))throw new k(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new k(P.INVALID_ARGUMENT,e);return!0}/**
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
 */const du=-62135596800,fu=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*fu);return new nt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<du)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fu}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Wr(t,nt._jsonSchema))return new nt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-du;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:mt("string",nt._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
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
 */class z{static fromTimestamp(t){return new z(t)}static min(){return new z(new nt(0,0))}static max(){return new z(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Nr=-1;class Js{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function Ro(r){return r.fields.find(t=>t.kind===2)}function Ue(r){return r.fields.filter(t=>t.kind!==2)}Js.UNKNOWN_ID=-1;class Os{constructor(t,e){this.fieldPath=t,this.kind=e}}class kr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new kr(0,Ut.min())}}function eg(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=z.fromTimestamp(n===1e9?new nt(e+1,0):new nt(e,n));return new Ut(s,O.empty(),t)}function uh(r){return new Ut(r.readTime,r.key,Nr)}class Ut{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ut(z.min(),O.empty(),Nr)}static max(){return new Ut(z.max(),O.empty(),Nr)}}function na(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:G(r.largestBatchId,t.largestBatchId))}/**
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
 */const lh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function cn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==lh)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,n)=>{e(t)})}static reject(t){return new b((e,n)=>{n(t)})}static waitFor(t){return new b((e,n)=>{let s=0,i=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&e()},l=>n(l))}),a=!0,i===s&&e()})}static or(t){let e=b.resolve(!1);for(const n of t)e=e.next(s=>s?b.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new b((n,s)=>{const i=t.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next(f=>{a[d]=f,++c,c===i&&n(a)},f=>s(f))}})}static doWhile(t,e){return new b((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
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
 */const jt="SimpleDb";class pi{static open(t,e,n,s){try{return new pi(e,t.transaction(s,n))}catch(i){throw new vr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new Ae,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new vr(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=ra(n.target.error);this.S.reject(new vr(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(N(jt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new rg(e)}}class be{static delete(t){return N(jt,"Removing database:",t),ze(Ll().indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!zl())return!1;if(be.F())return!0;const t=Ws(),e=be.M(t),n=0<e&&e<10,s=dh(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)==null?void 0:t.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.N=n,this.B=null,be.M(Ws())===12.2&&kt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(t){return this.db||(N(jt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new vr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new k(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new k(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new vr(t,a))},s.onupgradeneeded=i=>{N(jt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.N.k(a,s.transaction,i.oldVersion,this.version).next(()=>{N(jt,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}$(t){this.q=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.L(t);const c=pi.open(this.db,t,i?"readonly":"readwrite",n),l=s(c).next(d=>(c.C(),d)).catch(d=>(c.abort(d),b.reject(d))).toPromise();return l.catch(()=>{}),await c.D,l}catch(c){const l=c,d=l.name!=="FirebaseError"&&a<3;if(N(jt,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function dh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class ng{constructor(t){this.U=t,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(t){this.U=t}done(){this.K=!0}j(t){this.W=t}delete(){return ze(this.U.delete())}}class vr extends k{constructor(t,e){super(P.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function De(r){return r.name==="IndexedDbTransactionError"}class rg{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(N(jt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(N(jt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),ze(n)}add(t){return N(jt,"ADD",this.store.name,t,t),ze(this.store.add(t))}get(t){return ze(this.store.get(t)).next(e=>(e===void 0&&(e=null),N(jt,"GET",this.store.name,t,e),e))}delete(t){return N(jt,"DELETE",this.store.name,t),ze(this.store.delete(t))}count(){return N(jt,"COUNT",this.store.name),ze(this.store.count())}J(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new b((a,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{a(l.target.result)}})}{const i=this.cursor(n),a=[];return this.H(i,(c,l)=>{a.push(l)}).next(()=>a)}}Y(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new b((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}Z(t,e){N(jt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.X=!1;const s=this.cursor(n);return this.H(s,(i,a,c)=>c.delete())}ee(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.H(s,e)}te(t){const e=this.cursor({});return new b((n,s)=>{e.onerror=i=>{const a=ra(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(c=>{c?a.continue():n()}):n()}})}H(t,e){const n=[];return new b((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const c=a.target.result;if(!c)return void s();const l=new ng(c),d=e(c.primaryKey,c.value,l);if(d instanceof b){const f=d.catch(p=>(l.done(),b.reject(p)));n.push(f)}l.isDone?s():l.G===null?c.continue():c.continue(l.G)}}).next(()=>b.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.X?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function ze(r){return new b((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=ra(n.target.error);e(s)}})}let mu=!1;function ra(r){const t=be.M(Ws());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mu||(mu=!0,setTimeout(()=>{throw n},0)),n}}return r}const wr="IndexBackfiller";class sg{constructor(t,e){this.asyncQueue=t,this.ne=e,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(t){N(wr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.ne.ie();N(wr,`Documents written: ${e}`)}catch(e){De(e)?N(wr,"Ignoring IndexedDB error during index backfill: ",e):await cn(e)}await this.re(6e4)})}}class ig{constructor(t,e){this.localStore=t,this.persistence=e}async ie(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.se(e,t))}se(t,e){const n=new Set;let s=e,i=!0;return b.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return N(wr,`Processing collection: ${a}`),this.oe(t,a,s).next(c=>{s-=c,n.add(a)});i=!1})).next(()=>e-s)}oe(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this._e(s,i)).next(c=>(N(wr,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(t,e,c))).next(()=>a.size)}))}_e(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=uh(i);na(a,n)>0&&(n=a)}),new Ut(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
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
 */const Qe=-1;function gi(r){return r==null}function Mr(r){return r===0&&1/r==-1/0}function og(r){return typeof r=="number"&&Number.isInteger(r)&&!Mr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ys="";function Ct(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=pu(t)),t=ag(r.get(e),t);return pu(t)}function ag(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case Ys:e+="";break;default:e+=i}}return e}function pu(r){return r+Ys+""}function Yt(r){const t=r.length;if(q(t>=2,64408,{path:r}),t===2)return q(r.charAt(0)===Ys&&r.charAt(1)==="",56145,{path:r}),et.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(Ys,i);switch((a<0||a>e)&&B(50515,{path:r}),r.charAt(a+1)){case"":const c=r.substring(i,a);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:B(61167,{path:r})}i=a+2}return new et(n)}/**
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
 */const qe="remoteDocuments",Qr="owner",pn="owner",Or="mutationQueues",cg="userId",Ht="mutations",gu="batchId",We="userMutationsIndex",_u=["userId","batchId"];/**
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
 */function Ls(r,t){return[r,Ct(t)]}function fh(r,t,e){return[r,Ct(t),e]}const ug={},Cn="documentMutations",Zs="remoteDocumentsV14",lg=["prefixPath","collectionGroup","readTime","documentId"],Fs="documentKeyIndex",hg=["prefixPath","collectionGroup","documentId"],mh="collectionGroupIndex",dg=["collectionGroup","readTime","prefixPath","documentId"],Lr="remoteDocumentGlobal",So="remoteDocumentGlobalKey",Dn="targets",ph="queryTargetsIndex",fg=["canonicalId","targetId"],Nn="targetDocuments",mg=["targetId","path"],sa="documentTargetsIndex",pg=["path","targetId"],ti="targetGlobalKey",Xe="targetGlobal",Fr="collectionParents",gg=["collectionId","parent"],kn="clientMetadata",_g="clientId",_i="bundles",yg="bundleId",yi="namedQueries",Ig="name",ia="indexConfiguration",Eg="indexId",Po="collectionGroupIndex",Tg="collectionGroup",Ar="indexState",vg=["indexId","uid"],gh="sequenceNumberIndex",wg=["uid","sequenceNumber"],br="indexEntries",Ag=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],_h="documentKeyIndex",bg=["indexId","uid","orderedDocumentKey"],Ii="documentOverlays",xg=["userId","collectionPath","documentId"],Vo="collectionPathOverlayIndex",Rg=["userId","collectionPath","largestBatchId"],yh="collectionGroupOverlayIndex",Sg=["userId","collectionGroup","largestBatchId"],oa="globals",Pg="name",Ih=[Or,Ht,Cn,qe,Dn,Qr,Xe,Nn,kn,Lr,Fr,_i,yi],Vg=[...Ih,Ii],Eh=[Or,Ht,Cn,Zs,Dn,Qr,Xe,Nn,kn,Lr,Fr,_i,yi,Ii],Th=Eh,aa=[...Th,ia,Ar,br],Cg=aa,vh=[...aa,oa],Dg=vh;/**
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
 */class Co extends hh{constructor(t,e){super(),this.le=t,this.currentSequenceNumber=e}}function yt(r,t){const e=K(r);return be.O(e.le,t)}/**
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
 */function yu(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Ne(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function wh(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ct{constructor(t,e){this.comparator=t,this.root=e||wt.EMPTY}insert(t,e){return new ct(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(t){return new ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,wt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ps(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ps(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ps(this.root,t,this.comparator,!0)}}class Ps{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class wt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??wt.RED,this.left=s??wt.EMPTY,this.right=i??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new wt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return wt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw B(27949);return t+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Iu(this.data.getIterator())}getIteratorFrom(t){return new Iu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class Iu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function gn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ot{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new st(ut.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Vn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class Ah extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ah("Invalid base64 string: "+i):i}}(t);return new pt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Ng=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ce(r){if(q(!!r,39018),typeof r=="string"){let t=0;const e=Ng.exec(r);if(q(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ue(r){return typeof r=="string"?pt.fromBase64String(r):pt.fromUint8Array(r)}/**
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
 */const bh="server_timestamp",xh="__type__",Rh="__previous_value__",Sh="__local_write_time__";function ca(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[xh])==null?void 0:n.stringValue)===bh}function Ei(r){const t=r.mapValue.fields[Rh];return ca(t)?Ei(t):t}function jr(r){const t=ce(r.mapValue.fields[Sh].timestampValue);return new nt(t.seconds,t.nanos)}/**
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
 */class kg{constructor(t,e,n,s,i,a,c,l,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=f}}const Br="(default)";class en{constructor(t,e){this.projectId=t,this.database=e||Br}static empty(){return new en("","")}get isDefaultDatabase(){return this.database===Br}isEqual(t){return t instanceof en&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ua="__type__",Ph="__max__",Ee={mapValue:{fields:{__type__:{stringValue:Ph}}}},la="__vector__",Mn="value",js={nullValue:"NULL_VALUE"};function Re(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ca(r)?4:Vh(r)?9007199254740991:Ti(r)?10:11:B(28295,{value:r})}function ne(r,t){if(r===t)return!0;const e=Re(r);if(e!==Re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return jr(r).isEqual(jr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=ce(s.timestampValue),c=ce(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ue(s.bytesValue).isEqual(ue(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return at(s.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return at(s.integerValue)===at(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=at(s.doubleValue),c=at(i.doubleValue);return a===c?Mr(a)===Mr(c):isNaN(a)&&isNaN(c)}return!1}(r,t);case 9:return Vn(r.arrayValue.values||[],t.arrayValue.values||[],ne);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(yu(a)!==yu(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!ne(a[l],c[l])))return!1;return!0}(r,t);default:return B(52216,{left:r})}}function Ur(r,t){return(r.values||[]).find(e=>ne(e,t))!==void 0}function Se(r,t){if(r===t)return 0;const e=Re(r),n=Re(t);if(e!==n)return G(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return G(r.booleanValue,t.booleanValue);case 2:return function(i,a){const c=at(i.integerValue||i.doubleValue),l=at(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,t);case 3:return Eu(r.timestampValue,t.timestampValue);case 4:return Eu(jr(r),jr(t));case 5:return xo(r.stringValue,t.stringValue);case 6:return function(i,a){const c=ue(i),l=ue(a);return c.compareTo(l)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const f=G(c[d],l[d]);if(f!==0)return f}return G(c.length,l.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const c=G(at(i.latitude),at(a.latitude));return c!==0?c:G(at(i.longitude),at(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Tu(r.arrayValue,t.arrayValue);case 10:return function(i,a){var g,R,V,D;const c=i.fields||{},l=a.fields||{},d=(g=c[Mn])==null?void 0:g.arrayValue,f=(R=l[Mn])==null?void 0:R.arrayValue,p=G(((V=d==null?void 0:d.values)==null?void 0:V.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return p!==0?p:Tu(d,f)}(r.mapValue,t.mapValue);case 11:return function(i,a){if(i===Ee.mapValue&&a===Ee.mapValue)return 0;if(i===Ee.mapValue)return 1;if(a===Ee.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=xo(l[p],f[p]);if(g!==0)return g;const R=Se(c[l[p]],d[f[p]]);if(R!==0)return R}return G(l.length,f.length)}(r.mapValue,t.mapValue);default:throw B(23264,{he:e})}}function Eu(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return G(r,t);const e=ce(r),n=ce(t),s=G(e.seconds,n.seconds);return s!==0?s:G(e.nanos,n.nanos)}function Tu(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=Se(e[s],n[s]);if(i)return i}return G(e.length,n.length)}function On(r){return Do(r)}function Do(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ce(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ue(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=Do(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${Do(e.fields[a])}`;return s+"}"}(r.mapValue):B(61005,{value:r})}function Bs(r){switch(Re(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ei(r);return t?16+Bs(t):16;case 5:return 2*r.stringValue.length;case 6:return ue(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Bs(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Ne(n.fields,(i,a)=>{s+=i.length+Bs(a)}),s}(r.mapValue);default:throw B(13486,{value:r})}}function qr(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function No(r){return!!r&&"integerValue"in r}function zr(r){return!!r&&"arrayValue"in r}function vu(r){return!!r&&"nullValue"in r}function wu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Us(r){return!!r&&"mapValue"in r}function Ti(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[ua])==null?void 0:n.stringValue)===la}function xr(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Ne(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=xr(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=xr(r.arrayValue.values[e]);return t}return{...r}}function Vh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Ph}const Ch={mapValue:{fields:{[ua]:{stringValue:la},[Mn]:{arrayValue:{}}}}};function Mg(r){return"nullValue"in r?js:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?qr(en.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Ti(r)?Ch:{mapValue:{}}:B(35942,{value:r})}function Og(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?qr(en.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Ch:"mapValue"in r?Ti(r)?{mapValue:{}}:Ee:B(61959,{value:r})}function Au(r,t){const e=Se(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function bu(r,t){const e=Se(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
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
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Us(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xr(e)}setAll(t){let e=ut.emptyPath(),n={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=c.popLast()}a?n[c.lastSegment()]=xr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Us(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ne(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Us(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ne(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new Vt(xr(this.value))}}function Dh(r){const t=[];return Ne(r.fields,(e,n)=>{const s=new ut([e]);if(Us(n)){const i=Dh(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ot(t)}/**
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
 */class ht{constructor(t,e,n,s,i,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(t){return new ht(t,0,z.min(),z.min(),z.min(),Vt.empty(),0)}static newFoundDocument(t,e,n,s){return new ht(t,1,e,z.min(),n,s,0)}static newNoDocument(t,e){return new ht(t,2,e,z.min(),z.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new ht(t,3,e,z.min(),z.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ln{constructor(t,e){this.position=t,this.inclusive=e}}function xu(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),e.key):n=Se(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ru(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!ne(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class $r{constructor(t,e="asc"){this.field=t,this.dir=e}}function Lg(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Nh{}class X extends Nh{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Fg(t,e,n):e==="array-contains"?new Ug(t,n):e==="in"?new jh(t,n):e==="not-in"?new qg(t,n):e==="array-contains-any"?new zg(t,n):new X(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new jg(t,n):new Bg(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Se(e,this.value)):e!==null&&Re(this.value)===Re(e)&&this.matchesComparison(Se(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rt extends Nh{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new rt(t,e)}matches(t){return Fn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Fn(r){return r.op==="and"}function ko(r){return r.op==="or"}function ha(r){return kh(r)&&Fn(r)}function kh(r){for(const t of r.filters)if(t instanceof rt)return!1;return!0}function Mo(r){if(r instanceof X)return r.field.canonicalString()+r.op.toString()+On(r.value);if(ha(r))return r.filters.map(t=>Mo(t)).join(",");{const t=r.filters.map(e=>Mo(e)).join(",");return`${r.op}(${t})`}}function Mh(r,t){return r instanceof X?function(n,s){return s instanceof X&&n.op===s.op&&n.field.isEqual(s.field)&&ne(n.value,s.value)}(r,t):r instanceof rt?function(n,s){return s instanceof rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,c)=>i&&Mh(a,s.filters[c]),!0):!1}(r,t):void B(19439)}function Oh(r,t){const e=r.filters.concat(t);return rt.create(e,r.op)}function Lh(r){return r instanceof X?function(e){return`${e.field.canonicalString()} ${e.op} ${On(e.value)}`}(r):r instanceof rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Lh).join(" ,")+"}"}(r):"Filter"}class Fg extends X{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class jg extends X{constructor(t,e){super(t,"in",e),this.keys=Fh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Bg extends X{constructor(t,e){super(t,"not-in",e),this.keys=Fh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Fh(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>O.fromName(n.referenceValue))}class Ug extends X{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return zr(e)&&Ur(e.arrayValue,this.value)}}class jh extends X{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ur(this.value.arrayValue,e)}}class qg extends X{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ur(this.value.arrayValue,e)}}class zg extends X{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!zr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Ur(this.value.arrayValue,n))}}/**
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
 */class $g{constructor(t,e=null,n=[],s=[],i=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Oo(r,t=null,e=[],n=[],s=null,i=null,a=null){return new $g(r,t,e,n,s,i,a)}function nn(r){const t=K(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Mo(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),gi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>On(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>On(n)).join(",")),t.Te=e}return t.Te}function Xr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Lg(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Mh(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ru(r.startAt,t.startAt)&&Ru(r.endAt,t.endAt)}function ei(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function ni(r,t){return r.filters.filter(e=>e instanceof X&&e.field.isEqual(t))}function Su(r,t,e){let n=js,s=!0;for(const i of ni(r,t)){let a=js,c=!0;switch(i.op){case"<":case"<=":a=Mg(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,c=!1;break;case"!=":case"not-in":a=js}Au({value:n,inclusive:s},{value:a,inclusive:c})<0&&(n=a,s=c)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Au({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function Pu(r,t,e){let n=Ee,s=!0;for(const i of ni(r,t)){let a=Ee,c=!0;switch(i.op){case">=":case">":a=Og(i.value),c=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,c=!1;break;case"!=":case"not-in":a=Ee}bu({value:n,inclusive:s},{value:a,inclusive:c})>0&&(n=a,s=c)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];bu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class Gn{constructor(t,e=null,n=[],s=[],i=null,a="F",c=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Gg(r,t,e,n,s,i,a,c){return new Gn(r,t,e,n,s,i,a,c)}function vi(r){return new Gn(r)}function Vu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Bh(r){return r.collectionGroup!==null}function Rr(r){const t=K(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new st(ut.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new $r(i,n))}),e.has(ut.keyField().canonicalString())||t.Ie.push(new $r(ut.keyField(),n))}return t.Ie}function $t(r){const t=K(r);return t.Ee||(t.Ee=Kg(t,Rr(r))),t.Ee}function Kg(r,t){if(r.limitType==="F")return Oo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $r(s.field,i)});const e=r.endAt?new Ln(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Ln(r.startAt.position,r.startAt.inclusive):null;return Oo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Lo(r,t){const e=r.filters.concat([t]);return new Gn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Fo(r,t,e){return new Gn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function wi(r,t){return Xr($t(r),$t(t))&&r.limitType===t.limitType}function Uh(r){return`${nn($t(r))}|lt:${r.limitType}`}function vn(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Lh(s)).join(", ")}]`),gi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>On(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>On(s)).join(",")),`Target(${n})`}($t(r))}; limitType=${r.limitType})`}function Jr(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of Rr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,c,l){const d=xu(a,c,l);return a.inclusive?d<=0:d<0}(n.startAt,Rr(n),s)||n.endAt&&!function(a,c,l){const d=xu(a,c,l);return a.inclusive?d>=0:d>0}(n.endAt,Rr(n),s))}(r,t)}function Hg(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function qh(r){return(t,e)=>{let n=!1;for(const s of Rr(r)){const i=Wg(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Wg(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):function(i,a,c){const l=a.data.field(i),d=c.data.field(i);return l!==null&&d!==null?Se(l,d):B(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return B(19790,{direction:r.dir})}}/**
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
 */class le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ne(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return wh(this.inner)}size(){return this.innerSize}}/**
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
 */const Qg=new ct(O.comparator);function Bt(){return Qg}const zh=new ct(O.comparator);function _r(...r){let t=zh;for(const e of r)t=t.insert(e.key,e);return t}function $h(r){let t=zh;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Zt(){return Sr()}function Gh(){return Sr()}function Sr(){return new le(r=>r.toString(),(r,t)=>r.isEqual(t))}const Xg=new ct(O.comparator),Jg=new st(O.comparator);function Q(...r){let t=Jg;for(const e of r)t=t.add(e);return t}const Yg=new st(G);function Zg(){return Yg}/**
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
 */function da(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mr(t)?"-0":t}}function Kh(r){return{integerValue:""+r}}function t_(r,t){return og(t)?Kh(t):da(r,t)}/**
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
 */class Ai{constructor(){this._=void 0}}function e_(r,t,e){return r instanceof Gr?function(s,i){const a={fields:{[xh]:{stringValue:bh},[Sh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ca(i)&&(i=Ei(i)),i&&(a.fields[Rh]=i),{mapValue:a}}(e,t):r instanceof jn?Wh(r,t):r instanceof Bn?Qh(r,t):function(s,i){const a=Hh(s,i),c=Cu(a)+Cu(s.Ae);return No(a)&&No(s.Ae)?Kh(c):da(s.serializer,c)}(r,t)}function n_(r,t,e){return r instanceof jn?Wh(r,t):r instanceof Bn?Qh(r,t):e}function Hh(r,t){return r instanceof Kr?function(n){return No(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class Gr extends Ai{}class jn extends Ai{constructor(t){super(),this.elements=t}}function Wh(r,t){const e=Xh(t);for(const n of r.elements)e.some(s=>ne(s,n))||e.push(n);return{arrayValue:{values:e}}}class Bn extends Ai{constructor(t){super(),this.elements=t}}function Qh(r,t){let e=Xh(t);for(const n of r.elements)e=e.filter(s=>!ne(s,n));return{arrayValue:{values:e}}}class Kr extends Ai{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Cu(r){return at(r.integerValue||r.doubleValue)}function Xh(r){return zr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class r_{constructor(t,e){this.field=t,this.transform=e}}function s_(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof jn&&s instanceof jn||n instanceof Bn&&s instanceof Bn?Vn(n.elements,s.elements,ne):n instanceof Kr&&s instanceof Kr?ne(n.Ae,s.Ae):n instanceof Gr&&s instanceof Gr}(r.transform,t.transform)}class i_{constructor(t,e){this.version=t,this.transformResults=e}}class _t{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new _t}static exists(t){return new _t(void 0,t)}static updateTime(t){return new _t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qs(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class bi{}function Jh(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Yr(r.key,_t.none()):new Kn(r.key,r.data,_t.none());{const e=r.data,n=Vt.empty();let s=new st(ut.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new he(r.key,n,new Ot(s.toArray()),_t.none())}}function o_(r,t,e){r instanceof Kn?function(s,i,a){const c=s.value.clone(),l=Nu(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):r instanceof he?function(s,i,a){if(!qs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Nu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Yh(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Pr(r,t,e,n){return r instanceof Kn?function(i,a,c,l){if(!qs(i.precondition,a))return c;const d=i.value.clone(),f=ku(i.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof he?function(i,a,c,l){if(!qs(i.precondition,a))return c;const d=ku(i.fieldTransforms,l,a),f=a.data;return f.setAll(Yh(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,t,e,n):function(i,a,c){return qs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,t,e)}function a_(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=Hh(n.transform,s||null);i!=null&&(e===null&&(e=Vt.empty()),e.set(n.field,i))}return e||null}function Du(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Vn(n,s,(i,a)=>s_(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Kn extends bi{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class he extends bi{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yh(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Nu(r,t,e){const n=new Map;q(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,c=t.data.field(i.field);n.set(i.field,n_(a,c,e[s]))}return n}function ku(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,e_(i,a,t))}return n}class Yr extends bi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zh extends bi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fa{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&o_(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Pr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Pr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Gh();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=e.has(s.key)?null:c;const l=Jh(a,c);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(z.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Q())}isEqual(t){return this.batchId===t.batchId&&Vn(this.mutations,t.mutations,(e,n)=>Du(e,n))&&Vn(this.baseMutations,t.baseMutations,(e,n)=>Du(e,n))}}class ma{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){q(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=function(){return Xg}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new ma(t,e,n,s)}}/**
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
 */class pa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class c_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var ft,J;function u_(r){switch(r){case P.OK:return B(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return B(15467,{code:r})}}function td(r){if(r===void 0)return kt("GRPC error has no .code"),P.UNKNOWN;switch(r){case ft.OK:return P.OK;case ft.CANCELLED:return P.CANCELLED;case ft.UNKNOWN:return P.UNKNOWN;case ft.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ft.INTERNAL:return P.INTERNAL;case ft.UNAVAILABLE:return P.UNAVAILABLE;case ft.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ft.NOT_FOUND:return P.NOT_FOUND;case ft.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ft.ABORTED:return P.ABORTED;case ft.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ft.DATA_LOSS:return P.DATA_LOSS;default:return B(39323,{code:r})}}(J=ft||(ft={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function l_(){return new TextEncoder}/**
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
 */const h_=new we([4294967295,4294967295],0);function Mu(r){const t=l_().encode(r),e=new Yl;return e.update(t),new Uint8Array(e.digest())}function Ou(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new we([e,n],0),new we([s,i],0)]}class ga{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new yr(`Invalid padding: ${e}`);if(n<0)throw new yr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new yr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new yr(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=we.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(we.fromNumber(n)));return s.compare(h_)===1&&(s=new we([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Mu(t),[n,s]=Ou(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);if(!this.we(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new ga(i,s,e);return n.forEach(c=>a.insert(c)),a}insert(t){if(this.ge===0)return;const e=Mu(t),[n,s]=Ou(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class yr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xi{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Zr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new xi(z.min(),s,new ct(G),Bt(),Q())}}class Zr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Zr(n,e,Q(),Q(),Q())}}/**
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
 */class zs{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class ed{constructor(t,e){this.targetId=t,this.Ce=e}}class nd{constructor(t,e,n=pt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Lu{constructor(){this.ve=0,this.Fe=Fu(),this.Me=pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Q(),e=Q(),n=Q();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:B(38017,{changeType:i})}}),new Zr(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=Fu()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,q(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class d_{constructor(t){this.Ge=t,this.ze=new Map,this.je=Bt(),this.Je=Vs(),this.He=Vs(),this.Ye=new ct(G)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:B(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(ei(i))if(n===0){const a=new O(i.path);this.et(e,a,ht.newNoDocument(a,z.min()))}else q(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const c=this.ut(t),l=c?this.ct(c,t,a):1;if(l!==0){this.it(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,c;try{a=ue(n).toUint8Array()}catch(l){if(l instanceof Ah)return Pn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ga(a,s,i)}catch(l){return Pn(l instanceof yr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.et(e,i,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&ei(c.target)){const l=new O(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ht.newNoDocument(l,t))}i.Be&&(e.set(a,i.ke()),i.qe())}});let n=Q();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.je.forEach((i,a)=>a.setReadTime(t));const s=new xi(t,e,this.Ye,this.je,n);return this.je=Bt(),this.Je=Vs(),this.He=Vs(),this.Ye=new ct(G),s}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Lu,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new st(G),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new st(G),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Lu),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Vs(){return new ct(O.comparator)}function Fu(){return new ct(O.comparator)}const f_={asc:"ASCENDING",desc:"DESCENDING"},m_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},p_={and:"AND",or:"OR"};class g_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function jo(r,t){return r.useProto3Json||gi(t)?t:{value:t}}function Un(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rd(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function __(r,t){return Un(r,t.toTimestamp())}function Mt(r){return q(!!r,49232),z.fromTimestamp(function(e){const n=ce(e);return new nt(n.seconds,n.nanos)}(r))}function _a(r,t){return Bo(r,t).canonicalString()}function Bo(r,t){const e=function(s){return new et(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function sd(r){const t=et.fromString(r);return q(fd(t),10190,{key:t.toString()}),t}function ri(r,t){return _a(r.databaseId,t.path)}function Je(r,t){const e=sd(t);if(e.get(1)!==r.databaseId.projectId)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(ad(e))}function id(r,t){return _a(r.databaseId,t)}function od(r){const t=sd(r);return t.length===4?et.emptyPath():ad(t)}function Uo(r){return new et(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ad(r){return q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function ju(r,t,e){return{name:ri(r,t),fields:e.value.mapValue.fields}}function y_(r,t,e){const n=Je(r,t.name),s=Mt(t.updateTime),i=t.createTime?Mt(t.createTime):z.min(),a=new Vt({mapValue:{fields:t.fields}}),c=ht.newFoundDocument(n,s,i,a);return e&&c.setHasCommittedMutations(),e?c.setHasCommittedMutations():c}function I_(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(q(f===void 0||typeof f=="string",58123),pt.fromBase64String(f||"")):(q(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),pt.fromUint8Array(f||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const f=d.code===void 0?P.UNKNOWN:td(d.code);return new k(f,d.message||"")}(a);e=new nd(n,s,i,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Je(r,n.document.name),i=Mt(n.document.updateTime),a=n.document.createTime?Mt(n.document.createTime):z.min(),c=new Vt({mapValue:{fields:n.document.fields}}),l=ht.newFoundDocument(s,i,a,c),d=n.targetIds||[],f=n.removedTargetIds||[];e=new zs(d,f,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Je(r,n.document),i=n.readTime?Mt(n.readTime):z.min(),a=ht.newNoDocument(s,i),c=n.removedTargetIds||[];e=new zs([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Je(r,n.document),i=n.removedTargetIds||[];e=new zs([],i,s,null)}else{if(!("filter"in t))return B(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new c_(s,i),c=n.targetId;e=new ed(c,a)}}return e}function si(r,t){let e;if(t instanceof Kn)e={update:ju(r,t.key,t.value)};else if(t instanceof Yr)e={delete:ri(r,t.key)};else if(t instanceof he)e={update:ju(r,t.key,t.data),updateMask:b_(t.fieldMask)};else{if(!(t instanceof Zh))return B(16599,{Vt:t.type});e={verify:ri(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const c=a.transform;if(c instanceof Gr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof jn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Bn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Kr)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw B(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:__(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)}(r,t.precondition)),e}function qo(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?_t.updateTime(Mt(i.updateTime)):i.exists!==void 0?_t.exists(i.exists):_t.none()}(t.currentDocument):_t.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,c){let l=null;if("setToServerValue"in c)q(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new Gr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new jn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new Bn(f)}else"increment"in c?l=new Kr(a,c.increment):B(16584,{proto:c});const d=ut.fromServerFormat(c.fieldPath);return new r_(d,l)}(r,s)):[];if(t.update){t.update.name;const s=Je(r,t.update.name),i=new Vt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(l){const d=l.fieldPaths||[];return new Ot(d.map(f=>ut.fromServerFormat(f)))}(t.updateMask);return new he(s,i,a,e,n)}return new Kn(s,i,e,n)}if(t.delete){const s=Je(r,t.delete);return new Yr(s,e)}if(t.verify){const s=Je(r,t.verify);return new Zh(s,e)}return B(1463,{proto:t})}function E_(r,t){return r&&r.length>0?(q(t!==void 0,14353),r.map(e=>function(s,i){let a=s.updateTime?Mt(s.updateTime):Mt(i);return a.isEqual(z.min())&&(a=Mt(i)),new i_(a,s.transformResults||[])}(e,t))):[]}function cd(r,t){return{documents:[id(r,t.path)]}}function ud(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=id(r,s);const i=function(d){if(d.length!==0)return dd(rt.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:wn(g.field),direction:v_(g.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=jo(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function ld(r){let t=od(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){q(n===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(p){const g=hd(p);return g instanceof rt&&ha(g)?g.getFilters():[g]}(e.where));let a=[];e.orderBy&&(a=function(p){return p.map(g=>function(V){return new $r(An(V.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(g))}(e.orderBy));let c=null;e.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,gi(g)?null:g}(e.limit));let l=null;e.startAt&&(l=function(p){const g=!!p.before,R=p.values||[];return new Ln(R,g)}(e.startAt));let d=null;return e.endAt&&(d=function(p){const g=!p.before,R=p.values||[];return new Ln(R,g)}(e.endAt)),Gg(t,s,a,i,c,"F",l,d)}function T_(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function hd(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=An(e.unaryFilter.field);return X.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=An(e.unaryFilter.field);return X.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=An(e.unaryFilter.field);return X.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=An(e.unaryFilter.field);return X.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}}(r):r.fieldFilter!==void 0?function(e){return X.create(An(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return rt.create(e.compositeFilter.filters.map(n=>hd(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}}(e.compositeFilter.op))}(r):B(30097,{filter:r})}function v_(r){return f_[r]}function w_(r){return m_[r]}function A_(r){return p_[r]}function wn(r){return{fieldPath:r.canonicalString()}}function An(r){return ut.fromServerFormat(r.fieldPath)}function dd(r){return r instanceof X?function(e){if(e.op==="=="){if(wu(e.value))return{unaryFilter:{field:wn(e.field),op:"IS_NAN"}};if(vu(e.value))return{unaryFilter:{field:wn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wu(e.value))return{unaryFilter:{field:wn(e.field),op:"IS_NOT_NAN"}};if(vu(e.value))return{unaryFilter:{field:wn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wn(e.field),op:w_(e.op),value:e.value}}}(r):r instanceof rt?function(e){const n=e.getFilters().map(s=>dd(s));return n.length===1?n[0]:{compositeFilter:{op:A_(e.op),filters:n}}}(r):B(54877,{filter:r})}function b_(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function fd(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class oe{constructor(t,e,n,s,i=z.min(),a=z.min(),c=pt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(t){return new oe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class md{constructor(t){this.yt=t}}function x_(r,t){let e;if(t.document)e=y_(r.yt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=O.fromSegments(t.noDocument.path),s=sn(t.noDocument.readTime);e=ht.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return B(56709);{const n=O.fromSegments(t.unknownDocument.path),s=sn(t.unknownDocument.version);e=ht.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new nt(s[0],s[1]);return z.fromTimestamp(i)}(t.readTime)),e}function Bu(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:ii(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:ri(i,a.key),fields:a.data.value.mapValue.fields,updateTime:Un(i,a.version.toTimestamp()),createTime:Un(i,a.createTime.toTimestamp())}}(r.yt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:rn(t.version)};else{if(!t.isUnknownDocument())return B(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:rn(t.version)}}return n}function ii(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function rn(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function sn(r){const t=new nt(r.seconds,r.nanoseconds);return z.fromTimestamp(t)}function $e(r,t){const e=(t.baseMutations||[]).map(i=>qo(r.yt,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const c=t.mutations[i+1];a.updateTransforms=c.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>qo(r.yt,i)),s=nt.fromMillis(t.localWriteTimeMs);return new fa(t.batchId,s,e,n)}function Ir(r){const t=sn(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?sn(r.lastLimboFreeSnapshotVersion):z.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const a=i.documents.length;return q(a===1,1966,{count:a}),$t(vi(od(i.documents[0])))}(r.query):function(i){return $t(ld(i))}(r.query),new oe(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,pt.fromBase64String(r.resumeToken))}function pd(r,t){const e=rn(t.snapshotVersion),n=rn(t.lastLimboFreeSnapshotVersion);let s;s=ei(t.target)?cd(r.yt,t.target):ud(r.yt,t.target).ft;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:nn(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function gd(r){const t=ld({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Fo(t,t.limit,"L"):t}function fo(r,t){return new pa(t.largestBatchId,qo(r.yt,t.overlayMutation))}function Uu(r,t){const e=t.path.lastSegment();return[r,Ct(t.path.popLast()),e]}function qu(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:rn(n.readTime),documentKey:Ct(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class R_{getBundleMetadata(t,e){return zu(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:sn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return zu(t).put(function(s){return{bundleId:s.id,createTime:rn(Mt(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return $u(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:gd(i.bundledQuery),readTime:sn(i.readTime)}}(n)})}saveNamedQuery(t,e){return $u(t).put(function(s){return{name:s.name,readTime:rn(Mt(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function zu(r){return yt(r,_i)}function $u(r){return yt(r,yi)}/**
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
 */class Ri{constructor(t,e){this.serializer=t,this.userId=e}static wt(t,e){const n=e.uid||"";return new Ri(t,n)}getOverlay(t,e){return ur(t).get(Uu(this.userId,e)).next(n=>n?fo(this.serializer,n):null)}getOverlays(t,e){const n=Zt();return b.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const c=new pa(e,a);s.push(this.St(t,c))}),b.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(Ct(a.getCollectionPath())));const i=[];return s.forEach(a=>{const c=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(ur(t).Z(Vo,c))}),b.waitFor(i)}getOverlaysForCollection(t,e,n){const s=Zt(),i=Ct(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ur(t).J(Vo,a).next(c=>{for(const l of c){const d=fo(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=Zt();let a;const c=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return ur(t).ee({index:yh,range:c},(l,d,f)=>{const p=fo(this.serializer,d);i.size()<s||p.largestBatchId===a?(i.set(p.getKey(),p),a=p.largestBatchId):f.done()}).next(()=>i)}St(t,e){return ur(t).put(function(s,i,a){const[c,l,d]=Uu(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:si(s.yt,a.mutation)}}(this.serializer,this.userId,e))}}function ur(r){return yt(r,Ii)}/**
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
 */class S_{bt(t){return yt(t,oa)}getSessionToken(t){return this.bt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?pt.fromUint8Array(n):pt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.bt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
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
 */class Ge{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(at(t.integerValue));else if("doubleValue"in t){const n=at(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),Mr(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),typeof n=="string"&&(n=ce(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(ue(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?Vh(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):Ti(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Qt(t.arrayValue,e),this.Nt(e)):B(19022,{$t:t})}Ot(t,e){this.Ft(e,25),this.Ut(t,e)}Ut(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const s of Object.keys(n))this.Ot(s,e),this.Ct(n[s],e)}kt(t,e){var a,c;const n=t.fields||{};this.Ft(e,53);const s=Mn,i=((c=(a=n[s].arrayValue)==null?void 0:a.values)==null?void 0:c.length)||0;this.Ft(e,15),e.Mt(at(i)),this.Ot(s,e),this.Ct(n[s],e)}Qt(t,e){const n=t.values||[];this.Ft(e,50);for(const s of n)this.Ct(s,e)}Lt(t,e){this.Ft(e,37),O.fromName(t).path.forEach(n=>{this.Ft(e,60),this.Ut(n,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}Ge.Kt=new Ge;/**
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
 */const _n=255;function P_(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function Gu(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=P_(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class V_{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Gt(n.value),n=e.next();this.zt()}jt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Jt(n.value),n=e.next();this.Ht()}Yt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=e.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=e.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(t){const e=this.en(t),n=Gu(e);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}nn(t){const e=this.en(t),n=Gu(e);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}rn(){this.sn(_n),this.sn(255)}_n(){this.an(_n),this.an(255)}reset(){this.position=0}seed(t){this.tn(t.length),this.buffer.set(t,this.position),this.position+=t.length}un(){return this.buffer.slice(0,this.position)}en(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Gt(t){const e=255&t;e===0?(this.sn(0),this.sn(255)):e===_n?(this.sn(_n),this.sn(0)):this.sn(e)}Jt(t){const e=255&t;e===0?(this.an(0),this.an(255)):e===_n?(this.an(_n),this.an(0)):this.an(t)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(t){this.tn(1),this.buffer[this.position++]=t}an(t){this.tn(1),this.buffer[this.position++]=~t}tn(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class C_{constructor(t){this.cn=t}Bt(t){this.cn.Wt(t)}xt(t){this.cn.Yt(t)}Mt(t){this.cn.Xt(t)}vt(){this.cn.rn()}}class D_{constructor(t){this.cn=t}Bt(t){this.cn.jt(t)}xt(t){this.cn.Zt(t)}Mt(t){this.cn.nn(t)}vt(){this.cn._n()}}class lr{constructor(){this.cn=new V_,this.ln=new C_(this.cn),this.hn=new D_(this.cn)}seed(t){this.cn.seed(t)}Pn(t){return t===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Ke{constructor(t,e,n,s){this.Tn=t,this.In=e,this.En=n,this.dn=s}An(){const t=this.dn.length,e=t===0||this.dn[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.dn,0),e!==t?n.set([0],this.dn.length):++n[n.length-1],new Ke(this.Tn,this.In,this.En,n)}Rn(t,e,n){return{indexId:this.Tn,uid:t,arrayValue:$s(this.En),directionalValue:$s(this.dn),orderedDocumentKey:$s(e),documentKey:n.path.toArray()}}Vn(t,e,n){const s=this.Rn(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function ge(r,t){let e=r.Tn-t.Tn;return e!==0?e:(e=Ku(r.En,t.En),e!==0?e:(e=Ku(r.dn,t.dn),e!==0?e:O.comparator(r.In,t.In)))}function Ku(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function $s(r){return ql()?function(e){let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n}(r):r}function Hu(r){return typeof r!="string"?r:function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(r)}class Wu{constructor(t){this.mn=new st((e,n)=>ut.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.fn=t.orderBy,this.gn=[];for(const e of t.filters){const n=e;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(t){if(q(t.collectionGroup===this.collectionId,49279),this.pn)return!1;const e=Ro(t);if(e!==void 0&&!this.wn(e))return!1;const n=Ue(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.wn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.mn.size>0){const c=this.mn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.Sn(c,l)||!this.bn(this.fn[a++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(a>=this.fn.length||!this.bn(this.fn[a++],c))return!1}return!0}Dn(){if(this.pn)return null;let t=new st(ut.comparator);const e=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new Os(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new Os(n.field,0))}for(const n of this.fn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new Os(n.field,n.dir==="asc"?0:1)));return new Js(Js.UNKNOWN_ID,this.collectionId,e,kr.empty())}wn(t){for(const e of this.gn)if(this.Sn(e,t))return!0;return!1}Sn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}bn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
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
 */function _d(r){var e,n;if(q(r instanceof X||r instanceof rt,20012),r instanceof X){if(r instanceof jh){const s=((n=(e=r.value.arrayValue)==null?void 0:e.values)==null?void 0:n.map(i=>X.create(r.field,"==",i)))||[];return rt.create(s,"or")}return r}const t=r.filters.map(s=>_d(s));return rt.create(t,r.op)}function N_(r){if(r.getFilters().length===0)return[];const t=Go(_d(r));return q(yd(t),7391),zo(t)||$o(t)?[t]:t.getFilters()}function zo(r){return r instanceof X}function $o(r){return r instanceof rt&&ha(r)}function yd(r){return zo(r)||$o(r)||function(e){if(e instanceof rt&&ko(e)){for(const n of e.getFilters())if(!zo(n)&&!$o(n))return!1;return!0}return!1}(r)}function Go(r){if(q(r instanceof X||r instanceof rt,34018),r instanceof X)return r;if(r.filters.length===1)return Go(r.filters[0]);const t=r.filters.map(n=>Go(n));let e=rt.create(t,r.op);return e=oi(e),yd(e)?e:(q(e instanceof rt,64498),q(Fn(e),40251),q(e.filters.length>1,57927),e.filters.reduce((n,s)=>ya(n,s)))}function ya(r,t){let e;return q(r instanceof X||r instanceof rt,38388),q(t instanceof X||t instanceof rt,25473),e=r instanceof X?t instanceof X?function(s,i){return rt.create([s,i],"and")}(r,t):Qu(r,t):t instanceof X?Qu(t,r):function(s,i){if(q(s.filters.length>0&&i.filters.length>0,48005),Fn(s)&&Fn(i))return Oh(s,i.getFilters());const a=ko(s)?s:i,c=ko(s)?i:s,l=a.filters.map(d=>ya(d,c));return rt.create(l,"or")}(r,t),oi(e)}function Qu(r,t){if(Fn(t))return Oh(t,r.getFilters());{const e=t.filters.map(n=>ya(r,n));return rt.create(e,"or")}}function oi(r){if(q(r instanceof X||r instanceof rt,11850),r instanceof X)return r;const t=r.getFilters();if(t.length===1)return oi(t[0]);if(kh(r))return r;const e=t.map(s=>oi(s)),n=[];return e.forEach(s=>{s instanceof X?n.push(s):s instanceof rt&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:rt.create(n,r.op)}/**
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
 */class k_{constructor(){this.Cn=new Ia}addToCollectionParentIndex(t,e){return this.Cn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(Ut.min())}updateCollectionGroup(t,e,n){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class Ia{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new st(et.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new st(et.comparator)).toArray()}}/**
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
 */const Xu="IndexedDbIndexManager",Cs=new Uint8Array(0);class M_{constructor(t,e){this.databaseId=e,this.vn=new Ia,this.Fn=new le(n=>nn(n),(n,s)=>Xr(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.vn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.vn.add(e)});const i={collectionId:n,parent:Ct(s)};return Ju(t).put(i)}return b.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[oh(e),""],!1,!0);return Ju(t).J(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(Yt(a.parent))}return n})}addFieldIndex(t,e){const n=hr(t),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=In(t);return i.next(c=>{a.put(qu(c,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=hr(t),s=In(t),i=yn(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=hr(t),n=yn(t),s=In(t);return e.Z().next(()=>n.Z()).next(()=>s.Z())}createTargetIndexes(t,e){return b.forEach(this.Mn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new Wu(n).Dn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=yn(t);let s=!0;const i=new Map;return b.forEach(this.Mn(e),a=>this.xn(t,a).next(c=>{s&&(s=!!c),i.set(a,c)})).next(()=>{if(s){let a=Q();const c=[];return b.forEach(i,(l,d)=>{N(Xu,`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(l)} to execute ${nn(e)}`);const f=function(F,H){const Z=Ro(H);if(Z===void 0)return null;for(const $ of ni(F,Z.fieldPath))switch($.op){case"array-contains-any":return $.value.arrayValue.values||[];case"array-contains":return[$.value]}return null}(d,l),p=function(F,H){const Z=new Map;for(const $ of Ue(H))for(const E of ni(F,$.fieldPath))switch(E.op){case"==":case"in":Z.set($.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return Z.set($.fieldPath.canonicalString(),E.value),Array.from(Z.values())}return null}(d,l),g=function(F,H){const Z=[];let $=!0;for(const E of Ue(H)){const y=E.kind===0?Su(F,E.fieldPath,F.startAt):Pu(F,E.fieldPath,F.startAt);Z.push(y.value),$&&($=y.inclusive)}return new Ln(Z,$)}(d,l),R=function(F,H){const Z=[];let $=!0;for(const E of Ue(H)){const y=E.kind===0?Pu(F,E.fieldPath,F.endAt):Su(F,E.fieldPath,F.endAt);Z.push(y.value),$&&($=y.inclusive)}return new Ln(Z,$)}(d,l),V=this.On(l,d,g),D=this.On(l,d,R),C=this.Nn(l,d,p),U=this.Bn(l.indexId,f,V,g.inclusive,D,R.inclusive,C);return b.forEach(U,L=>n.Y(L,e.limit).next(F=>{F.forEach(H=>{const Z=O.fromSegments(H.documentKey);a.has(Z)||(a=a.add(Z),c.push(Z))})}))}).next(()=>c)}return b.resolve(null)})}Mn(t){let e=this.Fn.get(t);return e||(t.filters.length===0?e=[t]:e=N_(rt.create(t.filters,"and")).map(n=>Oo(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.Fn.set(t,e),e)}Bn(t,e,n,s,i,a,c){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),f=[];for(let p=0;p<l;++p){const g=e?this.Ln(e[p/d]):Cs,R=this.kn(t,g,n[p%d],s),V=this.qn(t,g,i[p%d],a),D=c.map(C=>this.kn(t,g,C,!0));f.push(...this.createRange(R,V,D))}return f}kn(t,e,n,s){const i=new Ke(t,O.empty(),e,n);return s?i:i.An()}qn(t,e,n,s){const i=new Ke(t,O.empty(),e,n);return s?i.An():i}xn(t,e){const n=new Wu(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const c of i)n.yn(c)&&(!a||c.fields.length>a.fields.length)&&(a=c);return a})}getIndexType(t,e){let n=2;const s=this.Mn(e);return b.forEach(s,i=>this.xn(t,i).next(a=>{a?n!==0&&a.fields.length<function(l){let d=new st(ut.comparator),f=!1;for(const p of l.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:d=d.add(g.field));for(const p of l.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}Qn(t,e){const n=new lr;for(const s of Ue(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Pn(s.kind);Ge.Kt.Dt(i,a)}return n.un()}Ln(t){const e=new lr;return Ge.Kt.Dt(t,e.Pn(0)),e.un()}$n(t,e){const n=new lr;return Ge.Kt.Dt(qr(this.databaseId,e),n.Pn(function(i){const a=Ue(i);return a.length===0?0:a[a.length-1].kind}(t))),n.un()}Nn(t,e,n){if(n===null)return[];let s=[];s.push(new lr);let i=0;for(const a of Ue(t)){const c=n[i++];for(const l of s)if(this.Un(e,a.fieldPath)&&zr(c))s=this.Kn(s,a,c);else{const d=l.Pn(a.kind);Ge.Kt.Dt(c,d)}}return this.Wn(s)}On(t,e,n){return this.Nn(t,e,n.position)}Wn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].un();return e}Kn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const c of s){const l=new lr;l.seed(c.un()),Ge.Kt.Dt(a,l.Pn(e.kind)),i.push(l)}return i}Un(t,e){return!!t.filters.find(n=>n instanceof X&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=hr(t),s=In(t);return(e?n.J(Po,IDBKeyRange.bound(e,e)):n.J()).next(i=>{const a=[];return b.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{a.push(function(f,p){const g=p?new kr(p.sequenceNumber,new Ut(sn(p.readTime),new O(Yt(p.documentKey)),p.largestBatchId)):kr.empty(),R=f.fields.map(([V,D])=>new Os(ut.fromServerFormat(V),D));return new Js(f.indexId,f.collectionGroup,R,g)}(c,l))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:G(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=hr(t),i=In(t);return this.Gn(t).next(a=>s.J(Po,IDBKeyRange.bound(e,e)).next(c=>b.forEach(c,l=>i.put(qu(l.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return b.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?b.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),b.forEach(c,l=>this.zn(t,s,l).next(d=>{const f=this.jn(i,l);return d.isEqual(f)?b.resolve():this.Jn(t,i,l,d,f)}))))})}Hn(t,e,n,s){return yn(t).put(s.Rn(this.uid,this.$n(n,e.key),e.key))}Yn(t,e,n,s){return yn(t).delete(s.Vn(this.uid,this.$n(n,e.key),e.key))}zn(t,e,n){const s=yn(t);let i=new st(ge);return s.ee({index:_h,range:IDBKeyRange.only([n.indexId,this.uid,$s(this.$n(n,e))])},(a,c)=>{i=i.add(new Ke(n.indexId,e,Hu(c.arrayValue),Hu(c.directionalValue)))}).next(()=>i)}jn(t,e){let n=new st(ge);const s=this.Qn(e,t);if(s==null)return n;const i=Ro(e);if(i!=null){const a=t.data.field(i.fieldPath);if(zr(a))for(const c of a.arrayValue.values||[])n=n.add(new Ke(e.indexId,t.key,this.Ln(c),s))}else n=n.add(new Ke(e.indexId,t.key,Cs,s));return n}Jn(t,e,n,s,i){N(Xu,"Updating index entries for document '%s'",e.key);const a=[];return function(l,d,f,p,g){const R=l.getIterator(),V=d.getIterator();let D=gn(R),C=gn(V);for(;D||C;){let U=!1,L=!1;if(D&&C){const F=f(D,C);F<0?L=!0:F>0&&(U=!0)}else D!=null?L=!0:U=!0;U?(p(C),C=gn(V)):L?(g(D),D=gn(R)):(D=gn(R),C=gn(V))}}(s,i,ge,c=>{a.push(this.Hn(t,e,n,c))},c=>{a.push(this.Yn(t,e,n,c))}),b.waitFor(a)}Gn(t){let e=1;return In(t).ee({index:gh,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,c)=>ge(a,c)).filter((a,c,l)=>!c||ge(a,l[c-1])!==0);const s=[];s.push(t);for(const a of n){const c=ge(a,t),l=ge(a,e);if(c===0)s[0]=t.An();else if(c>0&&l<0)s.push(a),s.push(a.An());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Zn(s[a],s[a+1]))return[];const c=s[a].Vn(this.uid,Cs,O.empty()),l=s[a+1].Vn(this.uid,Cs,O.empty());i.push(IDBKeyRange.bound(c,l))}return i}Zn(t,e){return ge(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Yu)}getMinOffset(t,e){return b.mapArray(this.Mn(e),n=>this.xn(t,n).next(s=>s||B(44426))).next(Yu)}}function Ju(r){return yt(r,Fr)}function yn(r){return yt(r,br)}function hr(r){return yt(r,ia)}function In(r){return yt(r,Ar)}function Yu(r){q(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;na(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Ut(t.readTime,t.documentKey,e)}/**
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
 */const Zu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Id=41943040;class Pt{static withCacheSize(t){return new Pt(t,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function Ed(r,t,e){const n=r.store(Ht),s=r.store(Cn),i=[],a=IDBKeyRange.only(e.batchId);let c=0;const l=n.ee({range:a},(f,p,g)=>(c++,g.delete()));i.push(l.next(()=>{q(c===1,47070,{batchId:e.batchId})}));const d=[];for(const f of e.mutations){const p=fh(t,f.key.path,e.batchId);i.push(s.delete(p)),d.push(f.key)}return b.waitFor(i).next(()=>d)}function ai(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw B(14731);t=r.noDocument}return JSON.stringify(t).length}/**
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
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(Id,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);class Si{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Xn={}}static wt(t,e,n,s){q(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new Si(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return _e(t).ee({index:We,range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=bn(t),a=_e(t);return a.add({}).next(c=>{q(typeof c=="number",49019);const l=new fa(c,e,n,s),d=function(R,V,D){const C=D.baseMutations.map(L=>si(R.yt,L)),U=D.mutations.map(L=>si(R.yt,L));return{userId:V,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:C,mutations:U}}(this.serializer,this.userId,l),f=[];let p=new st((g,R)=>G(g.canonicalString(),R.canonicalString()));for(const g of s){const R=fh(this.userId,g.key.path,c);p=p.add(g.key.path.popLast()),f.push(a.put(d)),f.push(i.put(R,ug))}return p.forEach(g=>{f.push(this.indexManager.addToCollectionParentIndex(t,g))}),t.addOnCommittedListener(()=>{this.Xn[c]=l.keys()}),b.waitFor(f).next(()=>l)})}lookupMutationBatch(t,e){return _e(t).get(e).next(n=>n?(q(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),$e(this.serializer,n)):null)}er(t,e){return this.Xn[e]?b.resolve(this.Xn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.Xn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return _e(t).ee({index:We,range:s},(a,c,l)=>{c.userId===this.userId&&(q(c.batchId>=n,47524,{tr:n}),i=$e(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Qe;return _e(t).ee({index:We,range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,Qe],[this.userId,Number.POSITIVE_INFINITY]);return _e(t).J(We,e).next(n=>n.map(s=>$e(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Ls(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return bn(t).ee({range:s},(a,c,l)=>{const[d,f,p]=a,g=Yt(f);if(d===this.userId&&e.path.isEqual(g))return _e(t).get(p).next(R=>{if(!R)throw B(61480,{nr:a,batchId:p});q(R.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:R.userId,batchId:p}),i.push($e(this.serializer,R))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(G);const s=[];return e.forEach(i=>{const a=Ls(this.userId,i.path),c=IDBKeyRange.lowerBound(a),l=bn(t).ee({range:c},(d,f,p)=>{const[g,R,V]=d,D=Yt(R);g===this.userId&&i.path.isEqual(D)?n=n.add(V):p.done()});s.push(l)}),b.waitFor(s).next(()=>this.rr(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=Ls(this.userId,n),a=IDBKeyRange.lowerBound(i);let c=new st(G);return bn(t).ee({range:a},(l,d,f)=>{const[p,g,R]=l,V=Yt(g);p===this.userId&&n.isPrefixOf(V)?V.length===s&&(c=c.add(R)):f.done()}).next(()=>this.rr(t,c))}rr(t,e){const n=[],s=[];return e.forEach(i=>{s.push(_e(t).get(i).next(a=>{if(a===null)throw B(35274,{batchId:i});q(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push($e(this.serializer,a))}))}),b.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return Ed(t.le,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.ir(e.batchId)}),b.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}ir(t){delete this.Xn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return b.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return bn(t).ee({range:n},(i,a,c)=>{if(i[0]===this.userId){const l=Yt(i[1]);s.push(l)}else c.done()}).next(()=>{q(s.length===0,56720,{sr:s.map(i=>i.canonicalString())})})})}containsKey(t,e){return Td(t,this.userId,e)}_r(t){return vd(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Qe,lastStreamToken:""})}}function Td(r,t,e){const n=Ls(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return bn(r).ee({range:i,X:!0},(c,l,d)=>{const[f,p,g]=c;f===t&&p===s&&(a=!0),d.done()}).next(()=>a)}function _e(r){return yt(r,Ht)}function bn(r){return yt(r,Cn)}function vd(r){return yt(r,Or)}/**
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
 */class on{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new on(0)}static cr(){return new on(-1)}}/**
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
 */class O_{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.lr(t).next(e=>{const n=new on(e.highestTargetId);return e.highestTargetId=n.next(),this.hr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.lr(t).next(e=>z.fromTimestamp(new nt(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.lr(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.lr(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.hr(t,s)))}addTargetData(t,e){return this.Pr(t,e).next(()=>this.lr(t).next(n=>(n.targetCount+=1,this.Tr(e,n),this.hr(t,n))))}updateTargetData(t,e){return this.Pr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>En(t).delete(e.targetId)).next(()=>this.lr(t)).next(n=>(q(n.targetCount>0,8065),n.targetCount-=1,this.hr(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return En(t).ee((a,c)=>{const l=Ir(c);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))}).next(()=>b.waitFor(i)).next(()=>s)}forEachTarget(t,e){return En(t).ee((n,s)=>{const i=Ir(s);e(i)})}lr(t){return tl(t).get(ti).next(e=>(q(e!==null,2888),e))}hr(t,e){return tl(t).put(ti,e)}Pr(t,e){return En(t).put(pd(this.serializer,e))}Tr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.lr(t).next(e=>e.targetCount)}getTargetData(t,e){const n=nn(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return En(t).ee({range:s,index:ph},(a,c,l)=>{const d=Ir(c);Xr(e,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=Ie(t);return e.forEach(a=>{const c=Ct(a.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(t,n,a))}),b.waitFor(s)}removeMatchingKeys(t,e,n){const s=Ie(t);return b.forEach(e,i=>{const a=Ct(i.path);return b.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=Ie(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=Ie(t);let i=Q();return s.ee({range:n,X:!0},(a,c,l)=>{const d=Yt(a[1]),f=new O(d);i=i.add(f)}).next(()=>i)}containsKey(t,e){const n=Ct(e.path),s=IDBKeyRange.bound([n],[oh(n)],!1,!0);let i=0;return Ie(t).ee({index:sa,X:!0,range:s},([a,c],l,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}At(t,e){return En(t).get(e).next(n=>n?Ir(n):null)}}function En(r){return yt(r,Dn)}function tl(r){return yt(r,Xe)}function Ie(r){return yt(r,Nn)}/**
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
 */const el="LruGarbageCollector",wd=1048576;function nl([r,t],[e,n]){const s=G(r,e);return s===0?G(t,n):s}class L_{constructor(t){this.Ir=t,this.buffer=new st(nl),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();nl(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ad{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){N(el,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){De(e)?N(el,"Ignoring IndexedDB error during garbage collection: ",e):await cn(e)}await this.Vr(3e5)})}}class F_{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return b.resolve(zt.ce);const n=new L_(e);return this.mr.forEachTarget(t,s=>n.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>n.Ar(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Zu)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zu):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,s,i,a,c,l,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(n=p,c=Date.now(),this.removeTargets(t,n,e))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(t,n))).next(p=>(d=Date.now(),Tn()<=Y.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function bd(r,t){return new F_(r,t)}/**
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
 */class j_{constructor(t,e){this.db=t,this.garbageCollector=bd(this,e)}gr(t){const e=this.wr(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pr(t,e){return this.Sr(t,(n,s)=>e(s))}addReference(t,e,n){return Ds(t,n)}removeReference(t,e,n){return Ds(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Ds(t,e)}br(t,e){return function(s,i){let a=!1;return vd(s).te(c=>Td(s,c,i).next(l=>(l&&(a=!0),b.resolve(!l)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(t,(a,c)=>{if(c<=e){const l=this.br(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,z.min()),Ie(t).delete(function(p){return[0,Ct(p.path)]}(a))))});s.push(l)}}).next(()=>b.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Ds(t,e)}Sr(t,e){const n=Ie(t);let s,i=zt.ce;return n.ee({index:sa},([a,c],{path:l,sequenceNumber:d})=>{a===0?(i!==zt.ce&&e(new O(Yt(s)),i),i=d,s=l):i=zt.ce}).next(()=>{i!==zt.ce&&e(new O(Yt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Ds(r,t){return Ie(r).put(function(n,s){return{targetId:0,path:Ct(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
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
 */class xd{constructor(){this.changes=new le(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ht.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?b.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class B_{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return je(t).put(n)}removeEntry(t,e,n){return je(t).delete(function(i,a){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],ii(a),c[c.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Dr(t,n)))}getEntry(t,e){let n=ht.newInvalidDocument(e);return je(t).ee({index:Fs,range:IDBKeyRange.only(dr(e))},(s,i)=>{n=this.Cr(e,i)}).next(()=>n)}vr(t,e){let n={size:0,document:ht.newInvalidDocument(e)};return je(t).ee({index:Fs,range:IDBKeyRange.only(dr(e))},(s,i)=>{n={document:this.Cr(e,i),size:ai(i)}}).next(()=>n)}getEntries(t,e){let n=Bt();return this.Fr(t,e,(s,i)=>{const a=this.Cr(s,i);n=n.insert(s,a)}).next(()=>n)}Mr(t,e){let n=Bt(),s=new ct(O.comparator);return this.Fr(t,e,(i,a)=>{const c=this.Cr(i,a);n=n.insert(i,c),s=s.insert(i,ai(a))}).next(()=>({documents:n,Or:s}))}Fr(t,e,n){if(e.isEmpty())return b.resolve();let s=new st(il);e.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(dr(s.first()),dr(s.last())),a=s.getIterator();let c=a.getNext();return je(t).ee({index:Fs,range:i},(l,d,f)=>{const p=O.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&il(c,p)<0;)n(c,null),c=a.getNext();c&&c.isEqual(p)&&(n(c,d),c=a.hasNext()?a.getNext():null),c?f.j(dr(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,c=[a.popLast().toArray(),a.lastSegment(),ii(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return je(t).J(IDBKeyRange.bound(c,l,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let f=Bt();for(const p of d){const g=this.Cr(O.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(Jr(e,g)||s.has(g.key))&&(f=f.insert(g.key,g))}return f})}getAllFromCollectionGroup(t,e,n,s){let i=Bt();const a=sl(e,n),c=sl(e,Ut.max());return je(t).ee({index:mh,range:IDBKeyRange.bound(a,c,!0)},(l,d,f)=>{const p=this.Cr(O.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(t){return new U_(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return rl(t).get(So).next(e=>(q(!!e,20021),e))}Dr(t,e){return rl(t).put(So,e)}Cr(t,e){if(e){const n=x_(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(z.min())))return n}return ht.newInvalidDocument(t)}}function Rd(r){return new B_(r)}class U_ extends xd{constructor(t,e){super(),this.Nr=t,this.trackRemovals=e,this.Br=new le(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new st((i,a)=>G(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const c=this.Br.get(i);if(e.push(this.Nr.removeEntry(t,i,c.readTime)),a.isValidDocument()){const l=Bu(this.Nr.serializer,a);s=s.add(i.path.popLast());const d=ai(l);n+=d-c.size,e.push(this.Nr.addEntry(t,i,l))}else if(n-=c.size,this.trackRemovals){const l=Bu(this.Nr.serializer,a.convertToNoDocument(z.min()));e.push(this.Nr.addEntry(t,i,l))}}),s.forEach(i=>{e.push(this.Nr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.Nr.updateMetadata(t,n)),b.waitFor(e)}getFromCache(t,e){return this.Nr.vr(t,e).next(n=>(this.Br.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.Nr.Mr(t,e).next(({documents:n,Or:s})=>(s.forEach((i,a)=>{this.Br.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function rl(r){return yt(r,Lr)}function je(r){return yt(r,Zs)}function dr(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function sl(r,t){const e=t.documentKey.path.toArray();return[r,ii(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function il(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=G(e[i],n[i]),s)return s;return s=G(e.length,n.length),s||(s=G(e[e.length-2],n[n.length-2]),s||G(e[e.length-1],n[n.length-1]))}/**
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
 */class q_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Sd{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&Pr(n.mutation,s,Ot.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,Q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=Q()){const s=Zt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=_r();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=Zt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Q()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,n,s){let i=Bt();const a=Sr(),c=function(){return Sr()}();return e.forEach((l,d)=>{const f=n.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof he)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Pr(f.mutation,d,f.mutation.getFieldMask(),nt.now())):a.set(d.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>c.set(d,new q_(f,a.get(d)??null))),c))}recalculateAndSaveOverlays(t,e){const n=Sr();let s=new ct((a,c)=>a-c),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=e.get(l);if(d===null)return;let f=n.get(l)||Ot.empty();f=c.applyToLocalView(d,f),n.set(l,f);const p=(s.get(c.batchId)||Q()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,f=l.value,p=Gh();f.forEach(g=>{if(!i.has(g)){const R=Jh(e.get(g),n.get(g));R!==null&&p.set(g,R),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,p))}return b.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Bh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):b.resolve(Zt());let c=Nr,l=i;return a.next(d=>b.forEach(d,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?b.resolve():this.remoteDocumentCache.getEntry(t,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,l,d,Q())).next(f=>({batchId:c,changes:$h(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(n=>{let s=_r();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=_r();return this.indexManager.getCollectionParents(t,i).next(c=>b.forEach(c,l=>{const d=function(p,g){return new Gn(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,ht.newInvalidDocument(f)))});let c=_r();return a.forEach((l,d)=>{const f=i.get(l);f!==void 0&&Pr(f.mutation,d,Ot.empty(),nt.now()),Jr(e,d)&&(c=c.insert(l,d))}),c})}}/**
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
 */class z_{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return b.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Mt(s.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(s){return{name:s.name,query:gd(s.bundledQuery),readTime:Mt(s.readTime)}}(e)),b.resolve()}}/**
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
 */class $_{constructor(){this.overlays=new ct(O.comparator),this.qr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Zt();return b.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.St(t,e,i)}),b.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(n)),b.resolve()}getOverlaysForCollection(t,e,n){const s=Zt(),i=e.length+1,a=new O(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return b.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new ct((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let f=i.get(d.largestBatchId);f===null&&(f=Zt(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=Zt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return b.resolve(c)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new pa(e,n));let i=this.qr.get(e);i===void 0&&(i=Q(),this.qr.set(e,i)),this.qr.set(e,i.add(n.key))}}/**
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
 */class G_{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
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
 */class Ea{constructor(){this.Qr=new st(Et.$r),this.Ur=new st(Et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new Et(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Gr(new Et(t,e))}zr(t,e){t.forEach(n=>this.removeReference(n,e))}jr(t){const e=new O(new et([])),n=new Et(e,t),s=new Et(e,t+1),i=[];return this.Ur.forEachInRange([n,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new O(new et([])),n=new Et(e,t),s=new Et(e,t+1);let i=Q();return this.Ur.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new Et(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class Et{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return O.comparator(t.key,e.key)||G(t.Yr,e.Yr)}static Kr(t,e){return G(t.Yr,e.Yr)||O.comparator(t.key,e.key)}}/**
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
 */class K_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new st(Et.$r)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fa(i,e,n,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Et(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ei(n),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Qe:this.tr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Et(e,0),s=new Et(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(G);return e.forEach(s=>{const i=new Et(s,0),a=new Et(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{n=n.add(c.Yr)})}),b.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;O.isDocumentKey(i)||(i=i.child(""));const a=new Et(new O(i),0);let c=new st(G);return this.Zr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.Yr)),!0)},a),b.resolve(this.ti(c))}ti(t){const e=[];return t.forEach(n=>{const s=this.Xr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){q(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return b.forEach(e.mutations,s=>{const i=new Et(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new Et(e,0),s=this.Zr.firstAfterOrEqual(n);return b.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class H_{constructor(t){this.ri=t,this.docs=function(){return new ct(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return b.resolve(n?n.document.mutableCopy():ht.newInvalidDocument(e))}getEntries(t,e){let n=Bt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),b.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Bt();const a=e.path,c=new O(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||na(uh(f),n)<=0||(s.has(f.key)||Jr(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(t,e,n,s){B(9500)}ii(t,e){return b.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new W_(this)}getSize(t){return b.resolve(this.size)}}class W_ extends xd{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(n)}),b.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class Q_{constructor(t){this.persistence=t,this.si=new le(e=>nn(e),Xr),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.oi=0,this._i=new Ea,this.targetCount=0,this.ai=on.ur()}forEachTarget(t,e){return this.si.forEach((n,s)=>e(s)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),b.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new on(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Pr(e),b.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return b.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),b.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),b.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return b.resolve(n)}containsKey(t,e){return b.resolve(this._i.containsKey(e))}}/**
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
 */class Ta{constructor(t,e){this.ui={},this.overlays={},this.ci=new zt(0),this.li=!1,this.li=!0,this.hi=new G_,this.referenceDelegate=t(this),this.Pi=new Q_(this),this.indexManager=new k_,this.remoteDocumentCache=function(s){return new H_(s)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new md(e),this.Ii=new z_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new $_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new K_(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const s=new X_(this.ci.next());return this.referenceDelegate.Ei(),n(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(t,e){return b.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class X_ extends hh{constructor(t){super(),this.currentSequenceNumber=t}}class Pi{constructor(t){this.persistence=t,this.Ri=new Ea,this.Vi=null}static mi(t){return new Pi(t)}get fi(){if(this.Vi)return this.Vi;throw B(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),b.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),b.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,n=>{const s=O.fromPath(n);return this.gi(t,s).next(i=>{i||e.removeEntry(s,z.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return b.or([()=>b.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class ci{constructor(t,e){this.persistence=t,this.pi=new le(n=>Ct(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=bd(this,e)}static mi(t,e){return new ci(t,e)}Ei(){}di(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}pr(t,e){return b.forEach(this.pi,(n,s)=>this.br(t,n,s).next(i=>i?b.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(c=>{c||(n++,i.removeEntry(a,z.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),b.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Bs(t.data.value)),e}br(t,e,n){return b.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return b.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class J_{constructor(t){this.serializer=t}k(t,e,n,s){const i=new pi("createOrUpgrade",e);n<1&&s>=1&&(function(l){l.createObjectStore(Qr)}(t),function(l){l.createObjectStore(Or,{keyPath:cg}),l.createObjectStore(Ht,{keyPath:gu,autoIncrement:!0}).createIndex(We,_u,{unique:!0}),l.createObjectStore(Cn)}(t),ol(t),function(l){l.createObjectStore(qe)}(t));let a=b.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(Nn),l.deleteObjectStore(Dn),l.deleteObjectStore(Xe)}(t),ol(t)),a=a.next(()=>function(l){const d=l.store(Xe),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return d.put(ti,f)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(l,d){return d.store(Ht).J().next(p=>{l.deleteObjectStore(Ht),l.createObjectStore(Ht,{keyPath:gu,autoIncrement:!0}).createIndex(We,_u,{unique:!0});const g=d.store(Ht),R=p.map(V=>g.put(V));return b.waitFor(R)})}(t,i))),a=a.next(()=>{(function(l){l.createObjectStore(kn,{keyPath:_g})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.yi(i))),n<6&&s>=6&&(a=a.next(()=>(function(l){l.createObjectStore(Lr)}(t),this.wi(i)))),n<7&&s>=7&&(a=a.next(()=>this.Si(i))),n<8&&s>=8&&(a=a.next(()=>this.bi(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.Di(i))),n<11&&s>=11&&(a=a.next(()=>{(function(l){l.createObjectStore(_i,{keyPath:yg})})(t),function(l){l.createObjectStore(yi,{keyPath:Ig})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(l){const d=l.createObjectStore(Ii,{keyPath:xg});d.createIndex(Vo,Rg,{unique:!1}),d.createIndex(yh,Sg,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(l){const d=l.createObjectStore(Zs,{keyPath:lg});d.createIndex(Fs,hg),d.createIndex(mh,dg)}(t)).next(()=>this.Ci(t,i)).next(()=>t.deleteObjectStore(qe))),n<14&&s>=14&&(a=a.next(()=>this.Fi(t,i))),n<15&&s>=15&&(a=a.next(()=>function(l){l.createObjectStore(ia,{keyPath:Eg,autoIncrement:!0}).createIndex(Po,Tg,{unique:!1}),l.createObjectStore(Ar,{keyPath:vg}).createIndex(gh,wg,{unique:!1}),l.createObjectStore(br,{keyPath:Ag}).createIndex(_h,bg,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore(Ar).clear()}).next(()=>{e.objectStore(br).clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(l){l.createObjectStore(oa,{keyPath:Pg})})(t)})),n<18&&s>=18&&ql()&&(a=a.next(()=>{e.objectStore(Ar).clear()}).next(()=>{e.objectStore(br).clear()})),a}wi(t){let e=0;return t.store(qe).ee((n,s)=>{e+=ai(s)}).next(()=>{const n={byteSize:e};return t.store(Lr).put(So,n)})}yi(t){const e=t.store(Or),n=t.store(Ht);return e.J().next(s=>b.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,Qe],[i.userId,i.lastAcknowledgedBatchId]);return n.J(We,a).next(c=>b.forEach(c,l=>{q(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const d=$e(this.serializer,l);return Ed(t,i.userId,d).next(()=>{})}))}))}Si(t){const e=t.store(Nn),n=t.store(qe);return t.store(Xe).get(ti).next(s=>{const i=[];return n.ee((a,c)=>{const l=new et(a),d=function(p){return[0,Ct(p)]}(l);i.push(e.get(d).next(f=>f?b.resolve():(p=>e.put({targetId:0,path:Ct(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>b.waitFor(i))})}bi(t,e){t.createObjectStore(Fr,{keyPath:gg});const n=e.store(Fr),s=new Ia,i=a=>{if(s.add(a)){const c=a.lastSegment(),l=a.popLast();return n.put({collectionId:c,parent:Ct(l)})}};return e.store(qe).ee({X:!0},(a,c)=>{const l=new et(a);return i(l.popLast())}).next(()=>e.store(Cn).ee({X:!0},([a,c,l],d)=>{const f=Yt(c);return i(f.popLast())}))}Di(t){const e=t.store(Dn);return e.ee((n,s)=>{const i=Ir(s),a=pd(this.serializer,i);return e.put(a)})}Ci(t,e){const n=e.store(qe),s=[];return n.ee((i,a)=>{const c=e.store(Zs),l=function(p){return p.document?new O(et.fromString(p.document.name).popFirst(5)):p.noDocument?O.fromSegments(p.noDocument.path):p.unknownDocument?O.fromSegments(p.unknownDocument.path):B(36783)}(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(c.put(d))}).next(()=>b.waitFor(s))}Fi(t,e){const n=e.store(Ht),s=Rd(this.serializer),i=new Ta(Pi.mi,this.serializer.yt);return n.J().next(a=>{const c=new Map;return a.forEach(l=>{let d=c.get(l.userId)??Q();$e(this.serializer,l).keys().forEach(f=>d=d.add(f)),c.set(l.userId,d)}),b.forEach(c,(l,d)=>{const f=new vt(d),p=Ri.wt(this.serializer,f),g=i.getIndexManager(f),R=Si.wt(f,this.serializer,g,i.referenceDelegate);return new Sd(s,R,p,g).recalculateAndSaveOverlaysForDocumentKeys(new Co(e,zt.ce),l).next()})})}}function ol(r){r.createObjectStore(Nn,{keyPath:mg}).createIndex(sa,pg,{unique:!0}),r.createObjectStore(Dn,{keyPath:"targetId"}).createIndex(ph,fg,{unique:!0}),r.createObjectStore(Xe)}const ye="IndexedDbPersistence",mo=18e5,po=5e3,go="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Y_="main";class va{constructor(t,e,n,s,i,a,c,l,d,f,p=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Mi=i,this.window=a,this.document=c,this.xi=d,this.Oi=f,this.Ni=p,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=g=>Promise.resolve(),!va.v())throw new k(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new j_(this,s),this.$i=e+Y_,this.serializer=new md(l),this.Ui=new be(this.$i,this.Ni,new J_(this.serializer)),this.hi=new S_,this.Pi=new O_(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Rd(this.serializer),this.Ii=new R_,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,f===!1&&kt(ye,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(P.FAILED_PRECONDITION,go);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Pi.getHighestSequenceNumber(t))}).then(t=>{this.ci=new zt(t,this.xi)}).then(()=>{this.li=!0}).catch(t=>(this.Ui&&this.Ui.close(),Promise.reject(t)))}Ji(t){return this.Qi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ui.$(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Ns(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(t).next(e=>{e||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(t)).next(e=>this.isPrimary&&!e?this.Zi(t).next(()=>!1):!!e&&this.Xi(t).next(()=>!0))).catch(t=>{if(De(t))return N(ye,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return N(ye,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Mi.enqueueRetryable(()=>this.Qi(t)),this.isPrimary=t})}Hi(t){return fr(t).get(pn).next(e=>b.resolve(this.es(e)))}ts(t){return Ns(t).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,mo)){this.qi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=yt(e,kn);return n.J().next(s=>{const i=this.ss(s,mo),a=s.filter(c=>i.indexOf(c)===-1);return b.forEach(a,c=>n.delete(c.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Ki)for(const e of t)this.Ki.removeItem(this._s(e.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(t){return!!t&&t.ownerId===this.clientId}Yi(t){return this.Oi?b.resolve(!0):fr(t).get(pn).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,po)&&!this.us(e.ownerId)){if(this.es(e)&&this.networkEnabled)return!0;if(!this.es(e)){if(!e.allowTabSynchronization)throw new k(P.FAILED_PRECONDITION,go);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ns(t).J().next(n=>this.ss(n,po).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||a&&c)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&N(ye,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Qr,kn],t=>{const e=new Co(t,zt.ce);return this.Zi(e).next(()=>this.ts(e))}),this.Ui.close(),this.Ps()}ss(t,e){return t.filter(n=>this.rs(n.updateTimeMs,e)&&!this.us(n.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",t=>Ns(t).J().next(e=>this.ss(e,mo).map(n=>n.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(t,e){return Si.wt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new M_(t,this.serializer.yt.databaseId)}getDocumentOverlayCache(t){return Ri.wt(this.serializer,t)}getBundleCache(){return this.Ii}runTransaction(t,e,n){N(ye,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(l){return l===18?Dg:l===17?vh:l===16?Cg:l===15?aa:l===14?Th:l===13?Eh:l===12?Vg:l===11?Ih:void B(60245)}(this.Ni);let a;return this.Ui.runTransaction(t,s,i,c=>(a=new Co(c,this.ci?this.ci.next():zt.ce),e==="readwrite-primary"?this.Hi(a).next(l=>!!l||this.Yi(a)).next(l=>{if(!l)throw kt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new k(P.FAILED_PRECONDITION,lh);return n(a)}).next(l=>this.Xi(a).next(()=>l)):this.Is(a).next(()=>n(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Is(t){return fr(t).get(pn).next(e=>{if(e!==null&&this.rs(e.leaseTimestampMs,po)&&!this.us(e.ownerId)&&!this.es(e)&&!(this.Oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new k(P.FAILED_PRECONDITION,go)})}Xi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return fr(t).put(pn,e)}static v(){return be.v()}Zi(t){const e=fr(t);return e.get(pn).next(n=>this.es(n)?(N(ye,"Releasing primary lease."),e.delete(pn)):b.resolve())}rs(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(kt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var t;typeof((t=this.window)==null?void 0:t.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;Ul()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(t){var e;try{const n=((e=this.Ki)==null?void 0:e.getItem(this._s(t)))!==null;return N(ye,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return kt(ye,"Failed to get zombied client id.",n),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(t){kt("Failed to set zombie client id.",t)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function fr(r){return yt(r,Qr)}function Ns(r){return yt(r,kn)}function Z_(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
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
 */class wa{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=s}static As(t,e){let n=Q(),s=Q();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wa(t,e.fromCache,n,s)}}/**
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
 */class ty{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Pd{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Ul()?8:dh(Ws())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ys(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new ty;return this.Ss(t,e,a).next(c=>{if(i.result=c,this.Vs)return this.bs(t,e,a,c.size)})}).next(()=>i.result)}bs(t,e,n,s){return n.documentReadCount<this.fs?(Tn()<=Y.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",vn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(Tn()<=Y.DEBUG&&N("QueryEngine","Query:",vn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(Tn()<=Y.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",vn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,$t(e))):b.resolve())}ys(t,e){if(Vu(e))return b.resolve(null);let n=$t(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Fo(e,null,"F"),n=$t(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=Q(...i);return this.ps.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,n).next(l=>{const d=this.Ds(e,c);return this.Cs(e,d,a,l.readTime)?this.ys(t,Fo(e,null,"F")):this.vs(t,d,e,l)}))})))}ws(t,e,n,s){return Vu(e)||s.isEqual(z.min())?b.resolve(null):this.ps.getDocuments(t,n).next(i=>{const a=this.Ds(e,i);return this.Cs(e,a,n,s)?b.resolve(null):(Tn()<=Y.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vn(e)),this.vs(t,a,e,eg(s,Nr)).next(c=>c))})}Ds(t,e){let n=new st(qh(t));return e.forEach((s,i)=>{Jr(t,i)&&(n=n.add(i))}),n}Cs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,n){return Tn()<=Y.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",vn(e)),this.ps.getDocumentsMatchingQuery(t,e,Ut.min(),n)}vs(t,e,n,s){return this.ps.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Aa="LocalStore",ey=3e8;class ny{constructor(t,e,n,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new ct(G),this.xs=new le(i=>nn(i),Xr),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sd(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function Vd(r,t,e,n){return new ny(r,t,e,n)}async function Cd(r,t){const e=K(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],c=[];let l=Q();for(const d of s){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return e.localDocuments.getDocuments(n,l).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:c}))})})}function ry(r,t){const e=K(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){const p=d.batch,g=p.keys();let R=b.resolve();return g.forEach(V=>{R=R.next(()=>f.getEntry(l,V)).next(D=>{const C=d.docVersions.get(V);q(C!==null,48541),D.version.compareTo(C)<0&&(p.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=Q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Dd(r){const t=K(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function sy(r,t){const e=K(r),n=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const c=[];t.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(e.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>e.Pi.addMatchingKeys(i,f.addedDocuments,p)));let R=g.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?R=R.withResumeToken(pt.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),s=s.insert(p,R),function(D,C,U){return D.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=ey?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(g,R,f)&&c.push(e.Pi.updateTargetData(i,R))});let l=Bt(),d=Q();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(iy(i,a,t.documentUpdates).next(f=>{l=f.ks,d=f.qs})),!n.isEqual(z.min())){const f=e.Pi.getLastRemoteSnapshotVersion(i).next(p=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(f)}return b.waitFor(c).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(e.Ms=s,i))}function iy(r,t,e){let n=Q(),s=Q();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Bt();return e.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(z.min())?(t.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(c,l)):N(Aa,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{ks:a,qs:s}})}function oy(r,t){const e=K(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Qe),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function ay(r,t){const e=K(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Pi.getTargetData(n,t).next(i=>i?(s=i,b.resolve(s)):e.Pi.allocateTargetId(n).next(a=>(s=new oe(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n})}async function Ko(r,t,e){const n=K(r),s=n.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!De(a))throw a;N(Aa,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ms=n.Ms.remove(t),n.xs.delete(s.target)}function al(r,t,e){const n=K(r);let s=z.min(),i=Q();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){const p=K(l),g=p.xs.get(f);return g!==void 0?b.resolve(p.Ms.get(g)):p.Pi.getTargetData(d,f)}(n,a,$t(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>n.Fs.getDocumentsMatchingQuery(a,t,e?s:z.min(),e?i:Q())).next(c=>(cy(n,Hg(t),c),{documents:c,Qs:i})))}function cy(r,t,e){let n=r.Os.get(t)||z.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Os.set(t,n)}class cl{constructor(){this.activeTargetIds=Zg()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Nd{constructor(){this.Mo=new cl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new cl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class uy{Oo(t){}shutdown(){}}/**
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
 */const ul="ConnectivityMonitor";class ll{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){N(ul,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){N(ul,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ks=null;function Ho(){return ks===null?ks=function(){return 268435456+Math.round(2147483648*Math.random())}():ks++,"0x"+ks.toString(16)}/**
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
 */const _o="RestConnection",ly={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hy{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===Br?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(t,e,n,s,i){const a=Ho(),c=this.zo(t,e.toUriEncodedString());N(_o,`Sending RPC '${t}' ${a}:`,c,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:d}=new URL(c),f=fi(d);return this.Jo(t,c,l,n,f).then(p=>(N(_o,`Received RPC '${t}' ${a}: `,p),p),p=>{throw Pn(_o,`RPC '${t}' ${a} failed with error: `,p,"url: ",c,"request:",n),p})}Ho(t,e,n,s,i,a){return this.Go(t,e,n,s,i)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$n}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),n&&n.headers.forEach((s,i)=>t[i]=s)}zo(t,e){const n=ly[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
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
 */class dy{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const St="WebChannelConnection";class fy extends hy{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,s,i){const a=Ho();return new Promise((c,l)=>{const d=new Zl;d.setWithCredentials(!0),d.listenOnce(th.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ms.NO_ERROR:const p=d.getResponseJson();N(St,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),c(p);break;case Ms.TIMEOUT:N(St,`RPC '${t}' ${a} timed out`),l(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ms.HTTP_ERROR:const g=d.getStatus();if(N(St,`RPC '${t}' ${a} failed with status:`,g,"response text:",d.getResponseText()),g>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const D=function(U){const L=U.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(L)>=0?L:P.UNKNOWN}(V.status);l(new k(D,V.message))}else l(new k(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new k(P.UNAVAILABLE,"Connection failed."));break;default:B(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(St,`RPC '${t}' ${a} completed.`)}});const f=JSON.stringify(s);N(St,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",f,n,15)})}T_(t,e,n){const s=Ho(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=rh(),c=nh(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const f=i.join("");N(St,`Creating RPC '${t}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);this.I_(p);let g=!1,R=!1;const V=new dy({Yo:C=>{R?N(St,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(g||(N(St,`Opening RPC '${t}' stream ${s} transport.`),p.open(),g=!0),N(St,`RPC '${t}' stream ${s} sending:`,C),p.send(C))},Zo:()=>p.close()}),D=(C,U,L)=>{C.listen(U,F=>{try{L(F)}catch(H){setTimeout(()=>{throw H},0)}})};return D(p,gr.EventType.OPEN,()=>{R||(N(St,`RPC '${t}' stream ${s} transport opened.`),V.o_())}),D(p,gr.EventType.CLOSE,()=>{R||(R=!0,N(St,`RPC '${t}' stream ${s} transport closed`),V.a_(),this.E_(p))}),D(p,gr.EventType.ERROR,C=>{R||(R=!0,Pn(St,`RPC '${t}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),V.a_(new k(P.UNAVAILABLE,"The operation could not be completed")))}),D(p,gr.EventType.MESSAGE,C=>{var U;if(!R){const L=C.data[0];q(!!L,16349);const F=L,H=(F==null?void 0:F.error)||((U=F[0])==null?void 0:U.error);if(H){N(St,`RPC '${t}' stream ${s} received error:`,H);const Z=H.status;let $=function(I){const T=ft[I];if(T!==void 0)return td(T)}(Z),E=H.message;$===void 0&&($=P.INTERNAL,E="Unknown error status: "+Z+" with message "+H.message),R=!0,V.a_(new k($,E)),p.close()}else N(St,`RPC '${t}' stream ${s} received:`,L),V.u_(L)}}),D(c,eh.STAT_EVENT,C=>{C.stat===bo.PROXY?N(St,`RPC '${t}' stream ${s} detected buffering proxy`):C.stat===bo.NOPROXY&&N(St,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.__()},0),V}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}/**
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
 */function my(){return typeof window<"u"?window:null}function Gs(){return typeof document<"u"?document:null}/**
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
 */function Vi(r){return new g_(r,!0)}/**
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
 */class kd{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const hl="PersistentStream";class Md{constructor(t,e,n,s,i,a,c,l){this.Mi=t,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new kd(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(kt(e.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===e&&this.G_(n,s)},n=>{t(()=>{const s=new k(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return N(hl,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(N(hl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class py extends Md{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=I_(this.serializer,t),n=function(i){if(!("targetChange"in i))return z.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?Mt(a.readTime):z.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=Uo(this.serializer),e.addTarget=function(i,a){let c;const l=a.target;if(c=ei(l)?{documents:cd(i,l)}:{query:ud(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=rd(i,a.resumeToken);const d=jo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){c.readTime=Un(i,a.snapshotVersion.toTimestamp());const d=jo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const n=T_(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=Uo(this.serializer),e.removeTarget=t,this.q_(e)}}class gy extends Md{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return q(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,q(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){q(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=E_(t.writeResults,t.commitTime),n=Mt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=Uo(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>si(this.serializer,n))};this.q_(e)}}/**
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
 */class _y{}class yy extends _y{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(t,Bo(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(P.UNKNOWN,i.toString())})}Ho(t,e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(t,Bo(e,n),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(P.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Iy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
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
 */const an="RemoteStore";class Ey{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{n.enqueueAndForget(async()=>{un(this)&&(N(an,"Restarting streams for network reachability change."),await async function(l){const d=K(l);d.Ea.add(4),await ts(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Ci(d)}(this))})}),this.Ra=new Iy(n,s)}}async function Ci(r){if(un(r))for(const t of r.da)await t(!0)}async function ts(r){for(const t of r.da)await t(!1)}function Od(r,t){const e=K(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Sa(e)?Ra(e):Hn(e).O_()&&xa(e,t))}function ba(r,t){const e=K(r),n=Hn(e);e.Ia.delete(t),n.O_()&&Ld(e,t),e.Ia.size===0&&(n.O_()?n.L_():un(e)&&e.Ra.set("Unknown"))}function xa(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Hn(r).Y_(t)}function Ld(r,t){r.Va.Ue(t),Hn(r).Z_(t)}function Ra(r){r.Va=new d_({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),Hn(r).start(),r.Ra.ua()}function Sa(r){return un(r)&&!Hn(r).x_()&&r.Ia.size>0}function un(r){return K(r).Ea.size===0}function Fd(r){r.Va=void 0}async function Ty(r){r.Ra.set("Online")}async function vy(r){r.Ia.forEach((t,e)=>{xa(r,t)})}async function wy(r,t){Fd(r),Sa(r)?(r.Ra.ha(t),Ra(r)):r.Ra.set("Unknown")}async function Ay(r,t,e){if(r.Ra.set("Online"),t instanceof nd&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(r,t)}catch(n){N(an,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ui(r,n)}else if(t instanceof zs?r.Va.Ze(t):t instanceof ed?r.Va.st(t):r.Va.tt(t),!e.isEqual(z.min()))try{const n=await Dd(r.localStore);e.compareTo(n)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(pt.EMPTY_BYTE_STRING,f.snapshotVersion)),Ld(i,l);const p=new oe(f.target,l,d,f.sequenceNumber);xa(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){N(an,"Failed to raise snapshot:",n),await ui(r,n)}}async function ui(r,t,e){if(!De(t))throw t;r.Ea.add(1),await ts(r),r.Ra.set("Offline"),e||(e=()=>Dd(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(an,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await Ci(r)})}function jd(r,t){return t().catch(e=>ui(r,e,t))}async function es(r){const t=K(r),e=Pe(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Qe;for(;by(t);)try{const s=await oy(t.localStore,n);if(s===null){t.Ta.length===0&&e.L_();break}n=s.batchId,xy(t,s)}catch(s){await ui(t,s)}Bd(t)&&Ud(t)}function by(r){return un(r)&&r.Ta.length<10}function xy(r,t){r.Ta.push(t);const e=Pe(r);e.O_()&&e.X_&&e.ea(t.mutations)}function Bd(r){return un(r)&&!Pe(r).x_()&&r.Ta.length>0}function Ud(r){Pe(r).start()}async function Ry(r){Pe(r).ra()}async function Sy(r){const t=Pe(r);for(const e of r.Ta)t.ea(e.mutations)}async function Py(r,t,e){const n=r.Ta.shift(),s=ma.from(n,t,e);await jd(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await es(r)}async function Vy(r,t){t&&Pe(r).X_&&await async function(n,s){if(function(a){return u_(a)&&a!==P.ABORTED}(s.code)){const i=n.Ta.shift();Pe(n).B_(),await jd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await es(n)}}(r,t),Bd(r)&&Ud(r)}async function dl(r,t){const e=K(r);e.asyncQueue.verifyOperationInProgress(),N(an,"RemoteStore received new credentials");const n=un(e);e.Ea.add(3),await ts(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Ci(e)}async function Cy(r,t){const e=K(r);t?(e.Ea.delete(2),await Ci(e)):t||(e.Ea.add(2),await ts(e),e.Ra.set("Unknown"))}function Hn(r){return r.ma||(r.ma=function(e,n,s){const i=K(e);return i.sa(),new py(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:Ty.bind(null,r),t_:vy.bind(null,r),r_:wy.bind(null,r),H_:Ay.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),Sa(r)?Ra(r):r.Ra.set("Unknown")):(await r.ma.stop(),Fd(r))})),r.ma}function Pe(r){return r.fa||(r.fa=function(e,n,s){const i=K(e);return i.sa(),new gy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ry.bind(null,r),r_:Vy.bind(null,r),ta:Sy.bind(null,r),na:Py.bind(null,r)}),r.da.push(async t=>{t?(r.fa.B_(),await es(r)):(await r.fa.stop(),r.Ta.length>0&&(N(an,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class Pa{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,c=new Pa(t,e,a,s,i);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Va(r,t){if(kt("AsyncQueue",`${t}: ${r}`),De(r))return new k(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Rn{static emptySet(t){return new Rn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=_r(),this.sortedSet=new ct(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Rn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Rn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class fl{constructor(){this.ga=new ct(O.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):B(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class qn{constructor(t,e,n,s,i,a,c,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new qn(t,e,Rn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&wi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class Dy{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Ny{constructor(){this.queries=ml(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=K(e),i=s.queries;s.queries=ml(),i.forEach((a,c)=>{for(const l of c.Sa)l.onError(n)})})(this,new k(P.ABORTED,"Firestore shutting down"))}}function ml(){return new le(r=>Uh(r),wi)}async function ky(r,t){const e=K(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(n=2):(i=new Dy,n=t.Da()?0:1);try{switch(n){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Va(a,`Initialization of query '${vn(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&Ca(e)}async function My(r,t){const e=K(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Oy(r,t){const e=K(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(n=!0);a.wa=s}}n&&Ca(e)}function Ly(r,t,e){const n=K(r),s=n.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);n.queries.delete(t)}function Ca(r){r.Ca.forEach(t=>{t.next()})}var Wo,pl;(pl=Wo||(Wo={})).Ma="default",pl.Cache="cache";class Fy{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new qn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=qn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Wo.Cache}}/**
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
 */class qd{constructor(t){this.key=t}}class zd{constructor(t){this.key=t}}class jy{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Q(),this.mutatedKeys=Q(),this.eu=qh(t),this.tu=new Rn(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new fl,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,p)=>{const g=s.get(f),R=Jr(this.query,p)?p:null,V=!!g&&this.mutatedKeys.has(g.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let C=!1;g&&R?g.data.isEqual(R.data)?V!==D&&(n.track({type:3,doc:R}),C=!0):this.su(g,R)||(n.track({type:2,doc:R}),C=!0,(l&&this.eu(R,l)>0||d&&this.eu(R,d)<0)&&(c=!0)):!g&&R?(n.track({type:0,doc:R}),C=!0):g&&!R&&(n.track({type:1,doc:g}),C=!0,(l||d)&&(c=!0)),C&&(R?(a=a.add(R),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{tu:a,iu:n,Cs:c,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((f,p)=>function(R,V){const D=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{Rt:C})}};return D(R)-D(V)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(n),s=s??!1;const c=e&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,d=l!==this.Za;return this.Za=l,a.length!==0||d?{snapshot:new qn(this.query,t.tu,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new fl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Q(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const e=[];return t.forEach(n=>{this.Xa.has(n)||e.push(new zd(n))}),this.Xa.forEach(n=>{t.has(n)||e.push(new qd(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=Q();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return qn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Da="SyncEngine";class By{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Uy{constructor(t){this.key=t,this.hu=!1}}class qy{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new le(c=>Uh(c),wi),this.Iu=new Map,this.Eu=new Set,this.du=new ct(O.comparator),this.Au=new Map,this.Ru=new Ea,this.Vu={},this.mu=new Map,this.fu=on.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function zy(r,t,e=!0){const n=Qd(r);let s;const i=n.Tu.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await $d(n,t,e,!0),s}async function $y(r,t){const e=Qd(r);await $d(e,t,!0,!1)}async function $d(r,t,e,n){const s=await ay(r.localStore,$t(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let c;return n&&(c=await Gy(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Od(r.remoteStore,s),c}async function Gy(r,t,e,n,s){r.pu=(p,g,R)=>async function(D,C,U,L){let F=C.view.ru(U);F.Cs&&(F=await al(D.localStore,C.query,!1).then(({documents:E})=>C.view.ru(E,F)));const H=L&&L.targetChanges.get(C.targetId),Z=L&&L.targetMismatches.get(C.targetId)!=null,$=C.view.applyChanges(F,D.isPrimaryClient,H,Z);return _l(D,C.targetId,$.au),$.snapshot}(r,p,g,R);const i=await al(r.localStore,t,!0),a=new jy(t,i.Qs),c=a.ru(i.documents),l=Zr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(c,r.isPrimaryClient,l);_l(r,e,d.au);const f=new By(t,e,a);return r.Tu.set(t,f),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),d.snapshot}async function Ky(r,t,e){const n=K(r),s=n.Tu.get(t),i=n.Iu.get(s.targetId);if(i.length>1)return n.Iu.set(s.targetId,i.filter(a=>!wi(a,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ko(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&ba(n.remoteStore,s.targetId),Qo(n,s.targetId)}).catch(cn)):(Qo(n,s.targetId),await Ko(n.localStore,s.targetId,!0))}async function Hy(r,t){const e=K(r),n=e.Tu.get(t),s=e.Iu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ba(e.remoteStore,n.targetId))}async function Wy(r,t,e){const n=Xd(r);try{const s=await function(a,c){const l=K(a),d=nt.now(),f=c.reduce((R,V)=>R.add(V.key),Q());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let V=Bt(),D=Q();return l.Ns.getEntries(R,f).next(C=>{V=C,V.forEach((U,L)=>{L.isValidDocument()||(D=D.add(U))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,V)).next(C=>{p=C;const U=[];for(const L of c){const F=a_(L,p.get(L.key).overlayedDocument);F!=null&&U.push(new he(L.key,F,Dh(F.value.mapValue),_t.exists(!0)))}return l.mutationQueue.addMutationBatch(R,d,U,c)}).next(C=>{g=C;const U=C.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(R,C.batchId,U)})}).then(()=>({batchId:g.batchId,changes:$h(p)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let d=a.Vu[a.currentUser.toKey()];d||(d=new ct(G)),d=d.insert(c,l),a.Vu[a.currentUser.toKey()]=d}(n,s.batchId,e),await ns(n,s.changes),await es(n.remoteStore)}catch(s){const i=Va(s,"Failed to persist write");e.reject(i)}}async function Gd(r,t){const e=K(r);try{const n=await sy(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Au.get(i);a&&(q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?q(a.hu,14607):s.removedDocuments.size>0&&(q(a.hu,42227),a.hu=!1))}),await ns(e,n,t)}catch(n){await cn(n)}}function gl(r,t,e){const n=K(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Tu.forEach((i,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=K(a);l.onlineState=c;let d=!1;l.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(c)&&(d=!0)}),d&&Ca(l)}(n.eventManager,t),s.length&&n.Pu.H_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Qy(r,t,e){const n=K(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Au.get(t),i=s&&s.key;if(i){let a=new ct(O.comparator);a=a.insert(i,ht.newNoDocument(i,z.min()));const c=Q().add(i),l=new xi(z.min(),new Map,new ct(G),a,c);await Gd(n,l),n.du=n.du.remove(i),n.Au.delete(t),Na(n)}else await Ko(n.localStore,t,!1).then(()=>Qo(n,t,e)).catch(cn)}async function Xy(r,t){const e=K(r),n=t.batch.batchId;try{const s=await ry(e.localStore,t);Hd(e,n,null),Kd(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ns(e,s)}catch(s){await cn(s)}}async function Jy(r,t,e){const n=K(r);try{const s=await function(a,c){const l=K(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(p=>(q(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(d,p))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(n.localStore,t);Hd(n,t,e),Kd(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ns(n,s)}catch(s){await cn(s)}}function Kd(r,t){(r.mu.get(t)||[]).forEach(e=>{e.resolve()}),r.mu.delete(t)}function Hd(r,t,e){const n=K(r);let s=n.Vu[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Vu[n.currentUser.toKey()]=s}}function Qo(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(n=>{r.Ru.containsKey(n)||Wd(r,n)})}function Wd(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(ba(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),Na(r))}function _l(r,t,e){for(const n of e)n instanceof qd?(r.Ru.addReference(n.key,t),Yy(r,n)):n instanceof zd?(N(Da,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||Wd(r,n.key)):B(19791,{wu:n})}function Yy(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(N(Da,"New document in limbo: "+e),r.Eu.add(n),Na(r))}function Na(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new O(et.fromString(t)),n=r.fu.next();r.Au.set(n,new Uy(e)),r.du=r.du.insert(e,n),Od(r.remoteStore,new oe($t(vi(e.path)),n,"TargetPurposeLimboResolution",zt.ce))}}async function ns(r,t,e){const n=K(r),s=[],i=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((c,l)=>{a.push(n.pu(l,t,e).then(d=>{var f;if((d||e)&&n.isPrimaryClient){const p=d?!d.fromCache:(f=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){s.push(d);const p=wa.As(l.targetId,d);i.push(p)}}))}),await Promise.all(a),n.Pu.H_(s),await async function(l,d){const f=K(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(d,g=>b.forEach(g.Es,R=>f.persistence.referenceDelegate.addReference(p,g.targetId,R)).next(()=>b.forEach(g.ds,R=>f.persistence.referenceDelegate.removeReference(p,g.targetId,R)))))}catch(p){if(!De(p))throw p;N(Aa,"Failed to update sequence numbers: "+p)}for(const p of d){const g=p.targetId;if(!p.fromCache){const R=f.Ms.get(g),V=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(V);f.Ms=f.Ms.insert(g,D)}}}(n.localStore,i))}async function Zy(r,t){const e=K(r);if(!e.currentUser.isEqual(t)){N(Da,"User change. New user:",t.toKey());const n=await Cd(e.localStore,t);e.currentUser=t,function(i,a){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new k(P.CANCELLED,a))})}),i.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ns(e,n.Ls)}}function tI(r,t){const e=K(r),n=e.Au.get(t);if(n&&n.hu)return Q().add(n.key);{let s=Q();const i=e.Iu.get(t);if(!i)return s;for(const a of i){const c=e.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Qd(r){const t=K(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Gd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Qy.bind(null,t),t.Pu.H_=Oy.bind(null,t.eventManager),t.Pu.yu=Ly.bind(null,t.eventManager),t}function Xd(r){const t=K(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Jy.bind(null,t),t}class Hr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Vi(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Vd(this.persistence,new Pd,t.initialUser,this.serializer)}Cu(t){return new Ta(Pi.mi,this.serializer)}Du(t){return new Nd}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hr.provider={build:()=>new Hr};class eI extends Hr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){q(this.persistence.referenceDelegate instanceof ci,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ad(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new Ta(n=>ci.mi(n,e),this.serializer)}}class nI extends Hr{constructor(t,e,n){super(),this.xu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xu.initialize(this,t),await Xd(this.xu.syncEngine),await es(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(t){return Vd(this.persistence,new Pd,t.initialUser,this.serializer)}Fu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Ad(n,t.asyncQueue,e)}Mu(t,e){const n=new ig(e,this.persistence);return new sg(t.asyncQueue,n)}Cu(t){const e=Z_(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new va(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,my(),Gs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(t){return new Nd}}class li{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>gl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zy.bind(null,this.syncEngine),await Cy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ny}()}createDatastore(t){const e=Vi(t.databaseInfo.databaseId),n=function(i){return new fy(i)}(t.databaseInfo);return function(i,a,c,l){return new yy(i,a,c,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,c){return new Ey(n,s,i,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>gl(this.syncEngine,e,0),function(){return ll.v()?new ll:new uy}())}createSyncEngine(t,e){return function(s,i,a,c,l,d,f){const p=new qy(s,i,a,c,l,d);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=K(s);N(an,"RemoteStore shutting down."),i.Ea.add(5),await ts(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}li.provider={build:()=>new li};/**
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
 */class rI{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):kt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const Ve="FirestoreClient";class sI{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=ea.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{N(Ve,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(N(Ve,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Va(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function yo(r,t){r.asyncQueue.verifyOperationInProgress(),N(Ve,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Cd(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function yl(r,t){r.asyncQueue.verifyOperationInProgress();const e=await iI(r);N(Ve,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>dl(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>dl(t.remoteStore,s)),r._onlineComponents=t}async function iI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(Ve,"Using user provided OfflineComponentProvider");try{await yo(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Pn("Error using user provided cache. Falling back to memory cache: "+e),await yo(r,new Hr)}}else N(Ve,"Using default OfflineComponentProvider"),await yo(r,new eI(void 0));return r._offlineComponents}async function Jd(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(Ve,"Using user provided OnlineComponentProvider"),await yl(r,r._uninitializedComponentsProvider._online)):(N(Ve,"Using default OnlineComponentProvider"),await yl(r,new li))),r._onlineComponents}function oI(r){return Jd(r).then(t=>t.syncEngine)}async function Il(r){const t=await Jd(r),e=t.eventManager;return e.onListen=zy.bind(null,t.syncEngine),e.onUnlisten=Ky.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=$y.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Hy.bind(null,t.syncEngine),e}/**
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
 */function Yd(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const El=new Map;/**
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
 */const Zd="firestore.googleapis.com",Tl=!0;class vl{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zd,this.ssl=Tl}else this.host=t.host,this.ssl=t.ssl??Tl;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Id;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<wd)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yd(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Di{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vl(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $p;switch(n.type){case"firstParty":return new Wp(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=El.get(e);n&&(N("ComponentProvider","Removing Datastore"),El.delete(e),n.terminate())}(this),Promise.resolve()}}function aI(r,t,e,n={}){var d;r=Qt(r,Di);const s=fi(t),i=r._getSettings(),a={...i,emulatorOptions:r._getEmulatorOptions()},c=`${t}:${e}`;s&&(jl(`https://${c}`),xm("Firestore",!0)),i.host!==Zd&&i.host!==c&&Pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:n};if(!Vr(l,a)&&(r._setSettings(l),n.mockUserToken)){let f,p;if(typeof n.mockUserToken=="string")f=n.mockUserToken,p=vt.MOCK_USER;else{f=wm(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const g=n.mockUserToken.sub||n.mockUserToken.user_id;if(!g)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new vt(g)}r._authCredentials=new Gp(new ih(f,p))}}/**
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
 */class ln{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ln(this.firestore,t,this._query)}}class dt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dt(this.firestore,t,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Wr(e,dt._jsonSchema))return new dt(t,n||null,new O(et.fromString(e.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:mt("string",dt._jsonSchemaVersion),referencePath:mt("string")};class xe extends ln{constructor(t,e,n){super(t,e,vi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dt(this.firestore,null,new O(t))}withConverter(t){return new xe(this.firestore,t,this._path)}}function wl(r,t,...e){if(r=Gt(r),ah("collection","path",t),r instanceof Di){const n=et.fromString(t,...e);return hu(n),new xe(r,null,n)}{if(!(r instanceof dt||r instanceof xe))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(et.fromString(t,...e));return hu(n),new xe(r.firestore,null,n)}}function Ye(r,t,...e){if(r=Gt(r),arguments.length===1&&(t=ea.newId()),ah("doc","path",t),r instanceof Di){const n=et.fromString(t,...e);return lu(n),new dt(r,null,new O(n))}{if(!(r instanceof dt||r instanceof xe))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(et.fromString(t,...e));return lu(n),new dt(r.firestore,r instanceof xe?r.converter:null,new O(n))}}/**
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
 */const Al="AsyncQueue";class bl{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new kd(this,"async_queue_retry"),this._c=()=>{const n=Gs();n&&N(Al,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=Gs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Gs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Ae;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!De(t))throw t;N(Al,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,kt("INTERNAL UNHANDLED ERROR: ",xl(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Pa.createAndSchedule(this,t,e,n,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&B(47125,{Pc:xl(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function xl(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function Rl(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class Ce extends Di{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new bl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new bl(t),this._firestoreClient=void 0,await t}}}function cI(r,t,e){e||(e=Br);const n=Wl(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(Vr(i,t))return s;throw new k(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new k(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<wd)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&fi(t.host)&&jl(t.host),n.initialize({options:t,instanceIdentifier:e})}function uI(r,t){const e=typeof r=="object"?r:Cp(),n=typeof r=="string"?r:Br,s=Wl(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Tm("firestore");i&&aI(s,...i)}return s}function ka(r){if(r._terminated)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||lI(r),r._firestoreClient}function lI(r){var n,s,i;const t=r._freezeSettings(),e=function(c,l,d,f){return new kg(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Yd(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((i=t.localCache)!=null&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new sI(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}/**
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
 */class qt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qt(pt.fromBase64String(t))}catch(e){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new qt(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Wr(t,qt._jsonSchema))return qt.fromBase64String(t.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:mt("string",qt._jsonSchemaVersion),bytes:mt("string")};/**
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
 */class rs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ma{constructor(t){this._methodName=t}}/**
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
 */class te{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:te._jsonSchemaVersion}}static fromJSON(t){if(Wr(t,te._jsonSchema))return new te(t.latitude,t.longitude)}}te._jsonSchemaVersion="firestore/geoPoint/1.0",te._jsonSchema={type:mt("string",te._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
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
 */class ee{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:ee._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Wr(t,ee._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new ee(t.vectorValues);throw new k(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ee._jsonSchemaVersion="firestore/vectorValue/1.0",ee._jsonSchema={type:mt("string",ee._jsonSchemaVersion),vectorValues:mt("object")};/**
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
 */const hI=/^__.*__$/;class dI{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new he(t,this.data,this.fieldMask,e,this.fieldTransforms):new Kn(t,this.data,e,this.fieldTransforms)}}class tf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new he(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ef(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{Ac:r})}}class Oa{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Oa({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return hi(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(ef(this.Ac)&&hI.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class fI{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Vi(t)}Cc(t,e,n,s=!1){return new Oa({Ac:t,methodName:e,Dc:n,path:ut.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ss(r){const t=r._freezeSettings(),e=Vi(r._databaseId);return new fI(r._databaseId,!!t.ignoreUndefinedProperties,e)}function La(r,t,e,n,s,i={}){const a=r.Cc(i.merge||i.mergeFields?2:0,t,e,s);Fa("Data must be an object, but it was:",a,n);const c=sf(n,a);let l,d;if(i.merge)l=new Ot(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Xo(t,p,e);if(!a.contains(g))throw new k(P.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);af(f,g)||f.push(g)}l=new Ot(f),d=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,d=a.fieldTransforms;return new dI(new Vt(c),l,d)}class Ni extends Ma{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ni}}function nf(r,t,e,n){const s=r.Cc(1,t,e);Fa("Data must be an object, but it was:",s,n);const i=[],a=Vt.empty();Ne(n,(l,d)=>{const f=ja(t,l,e);d=Gt(d);const p=s.yc(f);if(d instanceof Ni)i.push(f);else{const g=is(d,p);g!=null&&(i.push(f),a.set(f,g))}});const c=new Ot(i);return new tf(a,c,s.fieldTransforms)}function rf(r,t,e,n,s,i){const a=r.Cc(1,t,e),c=[Xo(t,n,e)],l=[s];if(i.length%2!=0)throw new k(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Xo(t,i[g])),l.push(i[g+1]);const d=[],f=Vt.empty();for(let g=c.length-1;g>=0;--g)if(!af(d,c[g])){const R=c[g];let V=l[g];V=Gt(V);const D=a.yc(R);if(V instanceof Ni)d.push(R);else{const C=is(V,D);C!=null&&(d.push(R),f.set(R,C))}}const p=new Ot(d);return new tf(f,p,a.fieldTransforms)}function mI(r,t,e,n=!1){return is(e,r.Cc(n?4:3,t))}function is(r,t){if(of(r=Gt(r)))return Fa("Unsupported field value:",t,r),sf(r,t);if(r instanceof Ma)return function(n,s){if(!ef(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const c of n){let l=is(c,s.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Gt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return t_(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=nt.fromDate(n);return{timestampValue:Un(s.serializer,i)}}if(n instanceof nt){const i=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Un(s.serializer,i)}}if(n instanceof te)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qt)return{bytesValue:rd(s.serializer,n._byteString)};if(n instanceof dt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_a(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof ee)return function(a,c){return{mapValue:{fields:{[ua]:{stringValue:la},[Mn]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return da(c.serializer,d)})}}}}}}(n,s);throw s.Sc(`Unsupported field value: ${mi(n)}`)}(r,t)}function sf(r,t){const e={};return wh(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ne(r,(n,s)=>{const i=is(s,t.mc(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function of(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof nt||r instanceof te||r instanceof qt||r instanceof dt||r instanceof Ma||r instanceof ee)}function Fa(r,t,e){if(!of(e)||!ch(e)){const n=mi(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}function Xo(r,t,e){if((t=Gt(t))instanceof rs)return t._internalPath;if(typeof t=="string")return ja(r,t);throw hi("Field path arguments must be of type string or ",r,!1,void 0,e)}const pI=new RegExp("[~\\*/\\[\\]]");function ja(r,t,e){if(t.search(pI)>=0)throw hi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new rs(...t.split("."))._internalPath}catch{throw hi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function hi(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new k(P.INVALID_ARGUMENT,c+r+l)}function af(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class cf{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new gI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ki("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class gI extends cf{data(){return super.data()}}function ki(r,t){return typeof t=="string"?ja(r,t):t instanceof rs?t._internalPath:t._delegate._internalPath}/**
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
 */function _I(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ba{}class uf extends Ba{}function yI(r,t,...e){let n=[];t instanceof Ba&&n.push(t),n=n.concat(e),function(i){const a=i.filter(l=>l instanceof Ua).length,c=i.filter(l=>l instanceof Mi).length;if(a>1||a>0&&c>0)throw new k(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Mi extends uf{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Mi(t,e,n)}_apply(t){const e=this._parse(t);return lf(t._query,e),new ln(t.firestore,t.converter,Lo(t._query,e))}_parse(t){const e=ss(t.firestore);return function(i,a,c,l,d,f,p){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new k(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Pl(p,f);const V=[];for(const D of p)V.push(Sl(l,i,D));g={arrayValue:{values:V}}}else g=Sl(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Pl(p,f),g=mI(c,a,p,f==="in"||f==="not-in");return X.create(d,f,g)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function II(r,t,e){const n=t,s=ki("where",r);return Mi._create(s,n,e)}class Ua extends Ba{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ua(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:rt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)lf(a,l),a=Lo(a,l)}(t._query,e),new ln(t.firestore,t.converter,Lo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qa extends uf{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new qa(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new k(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $r(i,a)}(t._query,this._field,this._direction);return new ln(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Gn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function EI(r,t="asc"){const e=t,n=ki("orderBy",r);return qa._create(n,e)}function Sl(r,t,e){if(typeof(e=Gt(e))=="string"){if(e==="")throw new k(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bh(t)&&e.indexOf("/")!==-1)throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(et.fromString(e));if(!O.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return qr(r,new O(n))}if(e instanceof dt)return qr(r,e._key);throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mi(e)}.`)}function Pl(r,t){if(!Array.isArray(r)||r.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lf(r,t){const e=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class TI{convertValue(t,e="none"){switch(Re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ue(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw B(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ne(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var n,s,i;const e=(i=(s=(n=t.fields)==null?void 0:n[Mn].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>at(a.doubleValue));return new ee(e)}convertGeoPoint(t){return new te(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ei(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(jr(t));default:return null}}convertTimestamp(t){const e=ce(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=et.fromString(t);q(fd(n),9688,{name:t});const s=new en(n.get(1),n.get(3)),i=new O(n.popFirst(5));return s.isEqual(e)||kt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function za(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class Er{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ze extends cf{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ks(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ki("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ze._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ze._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ze._jsonSchema={type:mt("string",Ze._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class Ks extends Ze{data(t={}){return super.data(t)}}class Sn{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Er(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ks(this._firestore,this._userDataWriter,n.key,n,new Er(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Ks(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Er(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ks(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Er(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:vI(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Sn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ea.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(e.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function vI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:r})}}Sn._jsonSchemaVersion="firestore/querySnapshot/1.0",Sn._jsonSchema={type:mt("string",Sn._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class hf extends TI{constructor(t){super(),this.firestore=t}convertBytes(t){return new qt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new dt(this.firestore,null,e)}}function Vl(r,t,e){r=Qt(r,dt);const n=Qt(r.firestore,Ce),s=za(r.converter,t,e);return os(n,[La(ss(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,_t.none())])}function df(r,t,e,...n){r=Qt(r,dt);const s=Qt(r.firestore,Ce),i=ss(s);let a;return a=typeof(t=Gt(t))=="string"||t instanceof rs?rf(i,"updateDoc",r._key,t,e,n):nf(i,"updateDoc",r._key,t),os(s,[a.toMutation(r._key,_t.exists(!0))])}function wI(r){return os(Qt(r.firestore,Ce),[new Yr(r._key,_t.none())])}function AI(r,t){const e=Qt(r.firestore,Ce),n=Ye(r),s=za(r.converter,t);return os(e,[La(ss(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,_t.exists(!1))]).then(()=>n)}function ff(r,...t){var l,d,f;r=Gt(r);let e={includeMetadataChanges:!1,source:"default"},n=0;typeof t[n]!="object"||Rl(t[n])||(e=t[n++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Rl(t[n])){const p=t[n];t[n]=(l=p.next)==null?void 0:l.bind(p),t[n+1]=(d=p.error)==null?void 0:d.bind(p),t[n+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,a,c;if(r instanceof dt)a=Qt(r.firestore,Ce),c=vi(r._key.path),i={next:p=>{t[n]&&t[n](bI(a,r,p))},error:t[n+1],complete:t[n+2]};else{const p=Qt(r,ln);a=Qt(p.firestore,Ce),c=p._query;const g=new hf(a);i={next:R=>{t[n]&&t[n](new Sn(a,g,p,R))},error:t[n+1],complete:t[n+2]},_I(r._query)}return function(g,R,V,D){const C=new rI(D),U=new Fy(R,C,V);return g.asyncQueue.enqueueAndForget(async()=>ky(await Il(g),U)),()=>{C.Nu(),g.asyncQueue.enqueueAndForget(async()=>My(await Il(g),U))}}(ka(a),c,s,i)}function os(r,t){return function(n,s){const i=new Ae;return n.asyncQueue.enqueueAndForget(async()=>Wy(await oI(n),s,i)),i.promise}(ka(r),t)}function bI(r,t,e){const n=e.docs.get(t._key),s=new hf(r);return new Ze(r,s,t._key,n,new Er(e.hasPendingWrites,e.fromCache),t.converter)}class xI{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=PI(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function RI(r){return new xI(r)}class SI{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=li.provider,this._offlineComponentProvider={build:e=>new nI(e,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}}function PI(r){return new SI(r==null?void 0:r.forceOwnership)}/**
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
 */class VI{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=ss(t)}set(t,e,n){this._verifyNotCommitted();const s=Io(t,this._firestore),i=za(s.converter,e,n),a=La(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,_t.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=Io(t,this._firestore);let a;return a=typeof(e=Gt(e))=="string"||e instanceof rs?rf(this._dataReader,"WriteBatch.update",i._key,e,n,s):nf(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,_t.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Io(t,this._firestore);return this._mutations=this._mutations.concat(new Yr(e._key,_t.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Io(r,t){if((r=Gt(r)).firestore!==t)throw new k(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function CI(r){return ka(r=Qt(r,Ce)),new VI(r,t=>os(r,t))}(function(t,e=!0){(function(s){$n=s})(Vp),Xs(new Cr("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),c=new Ce(new Kp(n.getProvider("auth-internal")),new Qp(a,n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new en(d.options.projectId,f)}(a,s),a);return i={useFetchStreams:e,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),xn(ou,au,t),xn(ou,au,"esm2020")})();const DI={apiKey:"AIzaSyBFOBEGWvfdQ_-8TgBtpG1-ccViyTQevSc",authDomain:"olsc-agrifeeds-trading.firebaseapp.com",projectId:"olsc-agrifeeds-trading",storageBucket:"olsc-agrifeeds-trading.firebasestorage.app",messagingSenderId:"188615089972",appId:"1:188615089972:web:e1311c138055bbddfccf61",measurementId:"G-ESY5FJM316"},Cl=Ql(DI);let Wt;try{Wt=cI(Cl,{localCache:RI({})})}catch(r){r.code==="failed-precondition"?console.warn("Firebase persistence failed: This can happen if multiple tabs are open. Falling back to memory-only cache."):r.code==="unimplemented"?console.error("Firebase persistence is not supported in this browser. Falling back to memory-only cache."):console.error(`An error occurred while initializing Firestore with persistence: ${r.message}`),Wt=uI(Cl)}function Dl(r,t,e="asc",n=[]){const[s,i]=W.useState([]),[a,c]=W.useState(!0),[l,d]=W.useState(null),[f,p]=W.useState("syncing");W.useEffect(()=>{c(!0);const C=wl(Wt,r),U=n.map($=>II($.field,$.operator,$.value)),L=t?[EI(t,e)]:[],F=[...U,...L],H=yI(C,...F),Z=ff(H,$=>{const E=[];$.forEach(y=>{E.push({id:y.id,...y.data()})}),i(E),c(!1),$.metadata.hasPendingWrites?p("syncing"):$.metadata.fromCache?p("offline"):p("synced")},$=>{console.error($),d($),c(!1),p("offline")});return()=>Z()},[r,t,e,JSON.stringify(n)]);const g=W.useCallback(async C=>{try{await AI(wl(Wt,r),C)}catch(U){throw console.error("Error adding document: ",U),U}},[r]),R=W.useCallback(async(C,U)=>{const L=Ye(Wt,r,C);try{await df(L,U)}catch(F){throw console.error("Error updating document: ",F),F}},[r]),V=W.useCallback(async C=>{const U=Ye(Wt,r,C);try{await wI(U)}catch(L){throw console.error("Error deleting document: ",L),L}},[r]),D=W.useCallback(async C=>{const U=CI(Wt);C.forEach(L=>{const F=Ye(Wt,r,L.id);U.update(F,L.data)});try{await U.commit()}catch(L){throw console.error("Error batch updating documents: ",L),L}},[r]);return{data:s,loading:a,error:l,syncStatus:f,addItem:g,updateItem:R,deleteItem:V,updateMultipleItems:D}}function NI(r,t,e){const[n,s]=W.useState(e),[i,a]=W.useState(!0),[c,l]=W.useState(null),[d,f]=W.useState("syncing");W.useEffect(()=>{a(!0);const R=Ye(Wt,r,t),V=ff(R,D=>{D.exists()?s(D.data()):(console.log(`Document ${r}/${t} not found, creating with initial data.`),Vl(R,e).catch(C=>console.error("Error creating document:",C)),s(e)),a(!1),D.metadata.hasPendingWrites?f("syncing"):D.metadata.fromCache?f("offline"):f("synced")},D=>{console.error(D),l(D),a(!1),f("offline")});return()=>V()},[r,t,JSON.stringify(e)]);const p=W.useCallback(async R=>{const V=Ye(Wt,r,t);try{await df(V,R)}catch(D){throw console.error("Error updating document: ",D),D}},[r,t]),g=W.useCallback(async R=>{const V=Ye(Wt,r,t);try{await Vl(V,R)}catch(D){throw console.error("Error setting document: ",D),D}},[r,t]);return{data:n,loading:i,error:c,syncStatus:d,updateData:p,setData:g}}var It=(r=>(r.Dashboard="DASHBOARD",r.Transactions="TRANSACTIONS",r.Inventory="INVENTORY",r.Settings="SETTINGS",r))(It||{}),Ft=(r=>(r.Income="INCOME",r.Expense="EXPENSE",r))(Ft||{});const mf=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),pf=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5h2m-2 2h2m-2 2h2m-4-4h2m-2 2h2"})}),gf=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})}),tE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v16m8-8H4"})}),kI=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),eE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z"})}),MI=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),nE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),rE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"})}),sE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 3V9M3 9a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 9v3m-9 6h2"})}),OI=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),iE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),oE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})}),aE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),_f=({className:r})=>w.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:[w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),cE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})}),uE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zM3.75 12h16.5M9 3.75v16.5"})}),lE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm0 4.5h.007v.008H3.75v-4.5zm0 4.5h.007v.008H3.75v-4.5z"})}),LI=({className:r})=>w.jsxs("svg",{className:r,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:[w.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"currentColor"}),w.jsx("text",{x:"50",y:"55",fontFamily:"Arial, sans-serif",fontSize:"20",textAnchor:"middle",fill:"#fff",children:"OLESCO"}),w.jsx("text",{x:"50",y:"75",fontFamily:"Arial, sans-serif",fontSize:"14",textAnchor:"middle",fill:"#fff",children:"AGV"})]}),hE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}),dE=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}),FI=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),jI=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001a.75.75 0 01.75.75c0 .414-.336.75-.75.75h-4.992v.001a.75.75 0 01-.75-.75c0-.414.336-.75.75-.75zm-8.046 0h4.992v-.001a.75.75 0 01.75.75c0 .414-.336.75-.75.75H7.977v.001a.75.75 0 01-.75-.75c0-.414.336-.75.75-.75zm-4.498 4.5A8.25 8.25 0 0112 5.25a8.25 8.25 0 017.962 7.158.75.75 0 01-1.493.153A6.75 6.75 0 0012 6.75a6.75 6.75 0 00-6.463 4.842.75.75 0 01-1.494-.154z"})}),BI=({className:r})=>w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:w.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.412 15.655L9.75 21.75l3.745-4.012M9.255 9.755L7.5 15.75l3.745-4.012M12.27 12.27L15 21.75l3.75-4.012M14.73 9.755L12 15.75l3.75-4.012M21.75 12c0 .242-.015.482-.044.714M21 12a9 9 0 10-9 9m-9-9a9 9 0 0115.544-6.322"})}),UI=({isOpen:r,onClose:t,onAddTransaction:e,inventory:n})=>{const[s,i]=W.useState(Ft.Income),[a,c]=W.useState(""),[l,d]=W.useState(""),[f,p]=W.useState(""),[g,R]=W.useState([]),[V,D]=W.useState(null),[C,U]=W.useState(1);W.useEffect(()=>{r&&(i(Ft.Income),c(""),d(""),p(new Date().toISOString().split("T")[0]),R([]),D(null),U(1))},[r]);const{totalAmount:L,autoDescription:F}=W.useMemo(()=>{if(s!==Ft.Income)return{totalAmount:0,autoDescription:""};let v=0;const _=[];return g.forEach(j=>{const gt=n.find(Xt=>Xt.id===j.itemId);gt&&(v+=gt.price*j.quantity,_.push(`${gt.name} (x${j.quantity})`))}),{totalAmount:v,autoDescription:_.join(", ")||"Point of Sale Transaction"}},[g,n,s]);if(!r)return null;const H=v=>{i(v)},Z=v=>{v.stock<=0||(V===v.id?D(null):(D(v.id),U(1)))},$=()=>{!V||C<=0||(R(v=>{const _=v.findIndex(j=>j.itemId===V);if(_>-1){const j=[...v];return j[_].quantity+=C,j}return[...v,{itemId:V,quantity:C}]}),D(null))},E=v=>{R(_=>_.filter(j=>j.itemId!==v))},y=v=>{v.preventDefault();const _=f?new Date(f).toISOString():new Date().toISOString();if(s===Ft.Income)g.length>0&&(e({type:s,amount:L,description:F,date:_,items:g.map(j=>({inventoryItemId:j.itemId,quantity:j.quantity}))}),t());else{const j=parseFloat(a);l&&!isNaN(j)&&j>0&&(e({type:s,amount:j,description:l,date:_}),t())}},I=v=>v.toLocaleString("en-PH",{style:"currency",currency:"PHP"}),T=()=>{const v=[];return n.forEach(_=>{const j=V===_.id,gt=_.stock<=0&&!j;v.push(w.jsxs("button",{type:"button",onClick:()=>Z(_),disabled:gt,className:`relative p-3 rounded-lg text-left transition-all duration-200 shadow-sm border ${j?"ring-2 ring-primary ring-offset-2 ring-offset-muted bg-accent":"bg-background hover:bg-accent"} ${gt?"opacity-50 cursor-not-allowed":""}`,children:[w.jsx("p",{className:"font-bold text-foreground",children:_.name}),w.jsxs("p",{className:"text-xs text-muted-foreground",children:["(",_.unit,")"]}),w.jsx("p",{className:"text-lg font-semibold text-success mt-1",children:_.price.toLocaleString("en-PH",{style:"currency",currency:"PHP",maximumFractionDigits:0})}),_.stock<=0&&w.jsx("span",{className:"absolute top-1 right-1 text-xs bg-destructive text-destructive-foreground font-bold px-2 py-0.5 rounded-full",children:"Out"})]},_.id)),j&&v.push(w.jsx(qI,{item:_,quantity:C,setQuantity:U,onAddToCart:$},`${_.id}-editor`))}),w.jsx(w.Fragment,{children:w.jsxs("div",{className:"space-y-3",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-medium text-muted-foreground mb-2",children:"Select Products"}),w.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-64 overflow-y-auto bg-muted p-3 rounded-lg",children:n.length>0?v:w.jsx("p",{className:"col-span-full text-center text-muted-foreground py-4",children:"Add items to inventory first."})})]}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-lg font-bold text-card-foreground mb-2",children:"Current Order"}),w.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto pr-2",children:g.length===0?w.jsx("p",{className:"text-center text-muted-foreground py-4",children:"Select a product to start."}):g.map(_=>{const j=n.find(gt=>gt.id===_.itemId);return j?w.jsxs("div",{className:"flex justify-between items-center bg-background border border-border p-2 rounded-md shadow-sm",children:[w.jsxs("div",{children:[w.jsx("p",{className:"font-semibold text-foreground",children:j.name}),w.jsxs("p",{className:"text-sm text-muted-foreground",children:[_.quantity," ",j.unit," x ",I(j.price)]})]}),w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("p",{className:"font-bold text-foreground",children:I(_.quantity*j.price)}),w.jsx("button",{type:"button",onClick:()=>E(_.itemId),className:"text-muted-foreground hover:text-destructive",children:w.jsx(MI,{className:"w-5 h-5"})})]})]},_.itemId):null})})]}),w.jsxs("div",{className:"p-3 bg-info/10 rounded-lg text-right",children:[w.jsx("span",{className:"text-sm text-info",children:"Total Amount"}),w.jsx("p",{className:"text-2xl font-bold text-info",children:I(L)})]})]})})},A=()=>w.jsxs(w.Fragment,{children:[w.jsxs("div",{children:[w.jsx("label",{htmlFor:"amount",className:"block text-sm font-medium text-muted-foreground mb-1",children:"Amount"}),w.jsx("input",{type:"number",id:"amount",value:a,onChange:v=>c(v.target.value),required:!0,min:"0.01",step:"0.01",placeholder:"0.00",className:"w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"})]}),w.jsxs("div",{children:[w.jsx("label",{htmlFor:"expense_description",className:"block text-sm font-medium text-muted-foreground mb-1",children:"Description"}),w.jsx("input",{type:"text",id:"expense_description",value:l,onChange:v=>d(v.target.value),required:!0,placeholder:"e.g., Rent, Utilities",className:"w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"})]})]});return w.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in p-4",children:w.jsxs("div",{className:"bg-card border border-border rounded-lg shadow-xl w-full max-w-lg animate-slide-in-up max-h-[90vh] flex flex-col",role:"dialog","aria-modal":"true",children:[w.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-border",children:[w.jsx("h2",{className:"text-xl font-bold text-card-foreground",children:"Add Transaction"}),w.jsx("button",{onClick:t,className:"text-muted-foreground hover:text-foreground",children:w.jsx(kI,{className:"w-6 h-6"})})]}),w.jsxs("form",{onSubmit:y,className:"p-4 sm:p-6 space-y-4 overflow-y-auto",children:[w.jsxs("div",{className:"grid grid-cols-2 gap-2 rounded-lg p-1 bg-muted",children:[w.jsx("button",{type:"button",onClick:()=>H(Ft.Income),className:`py-2 rounded-md font-semibold transition-colors ${s===Ft.Income?"bg-success text-success-foreground shadow":"text-muted-foreground"}`,children:"Income"}),w.jsx("button",{type:"button",onClick:()=>H(Ft.Expense),className:`py-2 rounded-md font-semibold transition-colors ${s===Ft.Expense?"bg-error text-error-foreground shadow":"text-muted-foreground"}`,children:"Expense"})]}),s===Ft.Income?T():A(),w.jsxs("div",{children:[w.jsx("label",{htmlFor:"date",className:"block text-sm font-medium text-muted-foreground mb-1",children:"Date"}),w.jsx("input",{type:"date",id:"date",value:f,onChange:v=>p(v.target.value),required:!0,className:"w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"})]})]}),w.jsx("div",{className:"p-4 sm:p-6 border-t border-border mt-auto",children:w.jsx("button",{type:"submit",form:"add-transaction-form",onClick:y,className:"w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-md disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed",disabled:s===Ft.Income&&g.length===0||s===Ft.Expense&&(!l||!a),children:"Add Transaction"})})]})})},qI=({item:r,quantity:t,setQuantity:e,onAddToCart:n})=>{const s=a=>{const c=Math.floor(t);e(c+a)},i=["Kilo","kg","L","Litre"].some(a=>r.unit.toLowerCase().includes(a.toLowerCase()));return w.jsxs("div",{className:"col-span-2 sm:col-span-3 p-3 bg-accent rounded-b-lg -mt-1 mb-2 animate-fade-in border-t-2 border-dashed border-border",children:[w.jsxs("p",{className:"font-semibold mb-2 text-sm text-center text-accent-foreground",children:["Enter Quantity (",r.unit,")"]}),i&&w.jsx("div",{className:"flex justify-center gap-2 mb-3",children:[.25,.5,.75].map(a=>w.jsx("button",{type:"button",onClick:()=>s(a),className:"w-10 h-8 text-sm font-bold bg-background border border-border rounded-md hover:bg-muted transition",children:a===.25?"¼":a===.5?"½":"¾"},a))}),w.jsxs("div",{className:"flex items-center gap-2 mb-3 justify-center",children:[w.jsx("button",{type:"button",onClick:()=>e(a=>Math.max(i?.25:1,a-1)),className:"w-10 h-10 text-2xl font-bold bg-background border border-border rounded-md hover:bg-muted transition",children:"-"}),w.jsx("input",{type:"number",value:t,onChange:a=>e(Number(a.target.value)),step:i?"0.01":"1",className:"w-20 h-10 text-center font-bold text-lg bg-background border border-input rounded-md focus:ring-ring focus:border-ring"}),w.jsx("button",{type:"button",onClick:()=>e(a=>a+1),className:"w-10 h-10 text-2xl font-bold bg-background border border-border rounded-md hover:bg-muted transition",children:"+"})]}),w.jsx("button",{onClick:n,className:"w-full bg-primary/80 text-primary-foreground font-bold py-2 px-4 rounded-lg hover:bg-primary transition-colors",children:"Add to Cart"})]})},yf=W.memo(({currentPage:r,setCurrentPage:t})=>{const e=[{page:It.Dashboard,label:"Dashboard",icon:mf},{page:It.Transactions,label:"Transactions",icon:pf},{page:It.Inventory,label:"Inventory",icon:gf},{page:It.Settings,label:"Settings",icon:_f}];return w.jsxs("nav",{className:"fixed bottom-0 left-0 right-0 bg-card border-t border-border md:hidden z-50",children:[w.jsx("div",{className:"flex justify-around items-center h-16 px-2",children:e.map(({page:n,label:s,icon:i})=>{const a=r===n;return w.jsxs("button",{onClick:()=>t(n),className:`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ease-in-out relative group ${a?"text-primary":"text-muted-foreground hover:text-foreground"}`,"aria-label":s,children:[a&&w.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-b-full transition-all duration-200"}),w.jsx("div",{className:`transition-all duration-200 ${a?"scale-110":"scale-100 group-hover:scale-105"}`,children:w.jsx(i,{className:`w-6 h-6 transition-colors duration-200 ${a?"text-primary":"text-muted-foreground group-hover:text-foreground"}`})}),w.jsx("span",{className:`text-xs font-medium mt-1 transition-all duration-200 ${a?"text-primary opacity-100":"text-muted-foreground opacity-70 group-hover:opacity-100"}`,children:s}),w.jsx("div",{className:"absolute inset-0 rounded-lg transition-opacity duration-200 opacity-0 group-active:opacity-20 group-active:bg-primary/20"})]},n)})}),w.jsx("div",{className:"h-safe-area-inset-bottom bg-card"})]})});yf.displayName="BottomNav";const zI=({status:r})=>{const t={synced:{Icon:FI,text:"Synced",color:"text-success",animation:""},syncing:{Icon:jI,text:"Syncing...",color:"text-info",animation:"animate-spin"},offline:{Icon:BI,text:"Offline",color:"text-warning",animation:""}},{Icon:e,text:n,color:s,animation:i}=t[r];return w.jsxs("div",{className:`flex items-center gap-2 text-sm font-semibold ${s}`,children:[w.jsx(e,{className:`w-5 h-5 ${i}`}),w.jsx("span",{className:"hidden sm:inline",children:n})]})},He=class He{constructor(){xs(this,"metrics",new Map);xs(this,"observers",new Map);this.initObservers()}static getInstance(){return He.instance||(He.instance=new He),He.instance}initObservers(){if("PerformanceObserver"in window){try{const t=new PerformanceObserver(e=>{for(const n of e.getEntries())console.warn("Long task detected:",n.duration,"ms")});t.observe({entryTypes:["longtask"]}),this.observers.set("longtask",t)}catch{console.warn("Long task observer not supported")}try{const t=new PerformanceObserver(e=>{for(const n of e.getEntries()){const s=n;s.value>.1&&console.warn("Layout shift detected:",s.value)}});t.observe({entryTypes:["layout-shift"]}),this.observers.set("layout-shift",t)}catch{console.warn("Layout shift observer not supported")}}}startMeasure(t){"performance"in window&&performance.mark(`${t}-start`)}endMeasure(t){if("performance"in window){performance.mark(`${t}-end`),performance.measure(t,`${t}-start`,`${t}-end`);const n=performance.getEntriesByName(t)[0].duration;return this.metrics.set(t,n),console.log(`${t}: ${n.toFixed(2)}ms`),n}return 0}getMetrics(){return new Map(this.metrics)}clearMetrics(){this.metrics.clear()}measureComponentRender(t,e){this.startMeasure(`${t}-render`),e(),this.endMeasure(`${t}-render`)}async measureAsync(t,e){this.startMeasure(t);try{const n=await e();return this.endMeasure(t),n}catch(n){throw this.endMeasure(t),n}}getMemoryInfo(){if("memory"in performance){const t=performance.memory;return{used:t.usedJSHeapSize,total:t.totalJSHeapSize,limit:t.jsHeapSizeLimit}}return null}destroy(){this.observers.forEach(t=>t.disconnect()),this.observers.clear(),this.metrics.clear()}};xs(He,"instance");let Jo=He;function $I(){const r=Jo.getInstance();return{measureRender:(n,s)=>{r.measureComponentRender(n,s)},measureAsync:async(n,s)=>r.measureAsync(n,s),getMetrics:r.getMetrics.bind(r)}}const Nl=W.lazy(()=>di(()=>import("./DashboardPage-B8DpIGkP.js"),__vite__mapDeps([0,1,2,3]))),GI=W.lazy(()=>di(()=>import("./TransactionsPage-D7BPEkoA.js"),__vite__mapDeps([4,1,2]))),KI=W.lazy(()=>di(()=>import("./InventoryPage-CFVbjMuJ.js"),__vite__mapDeps([5,1,2,3]))),HI=W.lazy(()=>di(()=>import("./SettingsPage-CN22RFJk.js"),__vite__mapDeps([6,1,2,3])));class mr extends kl.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,e){console.error("Error caught by boundary:",t,e)}render(){return this.state.hasError?w.jsx("div",{className:"flex items-center justify-center min-h-[400px] p-8",children:w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:"text-6xl mb-4",children:"⚠️"}),w.jsx("h2",{className:"text-xl font-bold text-foreground mb-2",children:"Something went wrong"}),w.jsx("p",{className:"text-muted-foreground mb-4",children:"The page encountered an error while loading."}),w.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Reload Page"})]})}):this.props.children}}const pr=()=>w.jsx("div",{className:"flex items-center justify-center min-h-[400px] p-8",children:w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"}),w.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}),WI=()=>{const[r,t]=W.useState(It.Dashboard),[e,n]=W.useState(!1),{measureAsync:s}=$I(),{data:i,updateData:a,syncStatus:c}=NI("config","settings",{storeName:"Olesco Agrivet Trading",storeLogo:"",profitMarginDivisor:.83,theme:"dark"}),{data:l,addItem:d,deleteItem:f,syncStatus:p}=Dl("transactions","date","desc"),{data:g,addItem:R,updateItem:V,deleteItem:D,updateMultipleItems:C,syncStatus:U}=Dl("inventory","name","asc");W.useEffect(()=>{const j=window.document.documentElement;j.classList.remove("light","dark"),j.classList.add(i.theme)},[i.theme]);const L=W.useCallback(async j=>{await s("add-transaction",async()=>{if(await d(j),j.type===Ft.Income&&j.items){const gt=j.items.map(Xt=>{const re=g.find(ke=>ke.id===Xt.inventoryItemId);return re?{id:re.id,data:{stock:Math.max(0,re.stock-Xt.quantity)}}:null}).filter(Xt=>Xt!==null);gt.length>0&&await C(gt)}})},[d,g,C,s]),F=async j=>{window.confirm("Are you sure you want to delete this transaction? This action will not restock items.")&&await f(j.id)},H=async j=>{if("id"in j){const{id:gt,...Xt}=j;await V(gt,Xt)}else await R(j)},Z=async j=>{window.confirm("Are you sure you want to delete this item? This cannot be undone.")&&await D(j)},$=async j=>{await a(j)},E=j=>{a({theme:j})},y=W.useMemo(()=>{const j=[c,p,U];return j.includes("syncing")?"syncing":j.includes("offline")?"offline":"synced"},[c,p,U]),I=W.useMemo(()=>({transactions:l,inventory:g,onNavigate:t,onDeleteTransaction:F,onSaveItem:H,onDeleteItem:Z,profitMarginDivisor:i.profitMarginDivisor,settings:i,onSaveSettings:$,theme:i.theme,setTheme:E}),[l,g,i,F,H,Z,$]),T={[It.Dashboard]:{title:"Dashboard"},[It.Transactions]:{title:"Transaction History",subtitle:"Review past sales and expenses."},[It.Inventory]:{title:"Inventory Management"},[It.Settings]:{title:"Settings",subtitle:"Configure your application and store details."}},A=()=>{switch(r){case It.Dashboard:return w.jsx(mr,{children:w.jsx(W.Suspense,{fallback:w.jsx(pr,{}),children:w.jsx(Nl,{...I})})});case It.Transactions:return w.jsx(mr,{children:w.jsx(W.Suspense,{fallback:w.jsx(pr,{}),children:w.jsx(GI,{...I})})});case It.Inventory:return w.jsx(mr,{children:w.jsx(W.Suspense,{fallback:w.jsx(pr,{}),children:w.jsx(KI,{...I})})});case It.Settings:return w.jsx(mr,{children:w.jsx(W.Suspense,{fallback:w.jsx(pr,{}),children:w.jsx(HI,{...I})})});default:return w.jsx(mr,{children:w.jsx(W.Suspense,{fallback:w.jsx(pr,{}),children:w.jsx(Nl,{...I})})})}},v=()=>w.jsxs("div",{className:"flex items-center justify-between gap-4 p-4",children:[w.jsxs("div",{className:"flex items-center gap-4",children:[i.storeLogo?w.jsx("img",{src:i.storeLogo,alt:"Store Logo",className:"w-12 h-12 rounded-md object-cover flex-shrink-0 bg-secondary"}):w.jsx("div",{className:"w-12 h-12 rounded-md flex-shrink-0 bg-secondary flex items-center justify-center text-muted-foreground",children:w.jsx(LI,{className:"w-full h-full p-1 opacity-50"})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-sm text-muted-foreground",children:"Welcome to"}),w.jsx("h1",{className:"text-xl font-bold text-foreground",children:i.storeName})]})]}),w.jsx("div",{className:"flex-shrink-0",children:w.jsx(zI,{status:y})})]}),_=()=>w.jsxs("aside",{className:"w-64 bg-card shadow-lg hidden md:flex flex-col border-r border-border",children:[w.jsx("div",{className:"border-b border-border",children:w.jsx(v,{})}),w.jsx("nav",{className:"flex flex-col gap-2 p-4",children:[{page:It.Dashboard,label:"Dashboard",icon:w.jsx(mf,{className:"w-5 h-5"})},{page:It.Transactions,label:"Transactions",icon:w.jsx(pf,{className:"w-5 h-5"})},{page:It.Inventory,label:"Inventory",icon:w.jsx(gf,{className:"w-5 h-5"})},{page:It.Settings,label:"Settings",icon:w.jsx(_f,{className:"w-5 h-5"})}].map(j=>w.jsxs("button",{onClick:()=>t(j.page),className:`flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${r===j.page?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"}`,children:[j.icon,w.jsx("span",{className:"font-semibold",children:j.label})]},j.page))})]});return w.jsxs("div",{className:"flex min-h-screen bg-background",children:[w.jsx(_,{}),w.jsxs("div",{className:"flex-1 flex flex-col max-w-full overflow-hidden",children:[w.jsx("div",{className:"md:hidden border-b border-border bg-card",children:w.jsx(v,{})}),w.jsxs("main",{className:"flex-1 p-4 md:p-8 pb-20 md:pb-8 overflow-y-auto",children:[w.jsxs("div",{className:"mb-6",children:[w.jsx("h2",{className:"text-3xl font-bold text-foreground",children:T[r].title}),T[r].subtitle&&w.jsx("p",{className:"text-muted-foreground mt-1",children:T[r].subtitle})]}),A()]})]}),w.jsx("button",{onClick:()=>n(!0),className:"fixed bottom-20 right-4 md:bottom-8 md:right-8 w-16 h-16 bg-primary rounded-full text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-transform transform hover:scale-110 z-40","aria-label":"Add Transaction",children:w.jsx(OI,{className:"w-8 h-8"})}),w.jsx(UI,{isOpen:e,onClose:()=>n(!1),onAddTransaction:L,inventory:g}),w.jsx(yf,{currentPage:r,setCurrentPage:t})]})},If=document.getElementById("root");if(!If)throw new Error("Could not find root element to mount to");const QI=um.createRoot(If);QI.render(w.jsx(kl.StrictMode,{children:w.jsx(WI,{})}));export{cE as C,aE as D,eE as E,iE as I,lE as L,dE as M,It as P,hE as S,Ft as T,oE as U,sE as W,nE as a,rE as b,uE as c,MI as d,tE as e,kI as f,w as j};
