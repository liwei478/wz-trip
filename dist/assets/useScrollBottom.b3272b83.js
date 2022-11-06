import{c as ut,d as it,q as L,b as lt,ag as at,x as ot,a as J,n as qn,m as Un,z as ft,A as ct,l as st,f as vt,I as Wn,Q as Xn,p as ht,w as gt,G as pt,ac as mt,J as dt,ah as yt}from"./index.b5f2d632.js";import{u as wt}from"./use-refs.d01481f9.js";import{u as _t}from"./index.7dad203a.js";const[At,Q]=ut("rate");function Et(n,r,t,e){return n>=r?{status:"full",value:1}:n+.5>=r&&t&&!e?{status:"half",value:.5}:n+1>=r&&t&&e?{status:"half",value:Math.round((n-r+1)*1e10)/1e10}:{status:"void",value:0}}const Mt={size:qn,icon:Un("star"),color:String,count:ft(5),gutter:qn,readonly:Boolean,disabled:Boolean,voidIcon:Un("star-o"),allowHalf:Boolean,voidColor:String,touchable:ct,iconPrefix:String,modelValue:st(0),disabledColor:String};var It=it({name:At,props:Mt,emits:["change","update:modelValue"],setup(n,{emit:r}){const t=_t(),[e,i]=wt(),u=L(),l=()=>n.readonly||n.disabled||!n.touchable,a=lt(()=>Array(+n.count).fill("").map((h,s)=>Et(n.modelValue,s+1,n.allowHalf,n.readonly)));let o,f,v=Number.MAX_SAFE_INTEGER,g=Number.MIN_SAFE_INTEGER;const D=()=>{f=Xn(u);const h=e.value.map(Xn);o=[],h.forEach((s,p)=>{v=Math.min(s.top,v),g=Math.max(s.top,g),n.allowHalf?o.push({score:p+.5,left:s.left,top:s.top,height:s.height},{score:p+1,left:s.left+s.width/2,top:s.top,height:s.height}):o.push({score:p+1,left:s.left,top:s.top,height:s.height})})},F=(h,s)=>{for(let p=o.length-1;p>0;p--)if(s>=f.top&&s<=f.bottom){if(h>o[p].left&&s>=o[p].top&&s<=o[p].top+o[p].height)return o[p].score}else{const G=s<f.top?v:g;if(h>o[p].left&&o[p].top===G)return o[p].score}return n.allowHalf?.5:1},Tn=h=>{!n.disabled&&!n.readonly&&h!==n.modelValue&&(r("update:modelValue",h),r("change",h))},jr=h=>{l()||(t.start(h),D())},nt=h=>{if(!l()&&(t.move(h),t.isHorizontal())){const{clientX:s,clientY:p}=h.touches[0];ht(h),Tn(F(s,p))}},rt=(h,s)=>{const{icon:p,size:G,color:Bn,count:Sn,gutter:Vn,voidIcon:Dn,disabled:z,voidColor:Fn,allowHalf:zn,iconPrefix:Ln,disabledColor:Hn}=n,nn=s+1,rn=h.status==="full",Y=h.status==="void",tt=zn&&h.value>0&&h.value<1;let $n;Vn&&nn!==+Sn&&($n={paddingRight:vt(Vn)});const et=Cn=>{D(),Tn(zn?F(Cn.clientX,Cn.clientY):nn)};return J("div",{key:s,ref:i(s),role:"radio",style:$n,class:Q("item"),tabindex:z?void 0:0,"aria-setsize":Sn,"aria-posinset":nn,"aria-checked":!Y,onClick:et},[J(Wn,{size:G,name:rn?p:Dn,class:Q("icon",{disabled:z,full:rn}),color:z?Hn:rn?Bn:Fn,classPrefix:Ln},null),tt&&J(Wn,{size:G,style:{width:h.value+"em"},name:Y?Dn:p,class:Q("icon",["half",{disabled:z,full:!Y}]),color:z?Hn:Y?Fn:Bn,classPrefix:Ln},null)])};return at(()=>n.modelValue),ot("touchmove",nt,{target:u}),()=>J("div",{ref:u,role:"radiogroup",class:Q({readonly:n.readonly,disabled:n.disabled}),tabindex:n.disabled?void 0:0,"aria-disabled":n.disabled,"aria-readonly":n.readonly,onTouchstartPassive:jr},[a.value.map(rt)])}});const iu=gt(It);var tr="1.13.6",Gn=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},b=Array.prototype,hn=Object.prototype,Yn=typeof Symbol<"u"?Symbol.prototype:null,Ot=b.push,q=b.slice,H=hn.toString,Pt=hn.hasOwnProperty,er=typeof ArrayBuffer<"u",Nt=typeof DataView<"u",Rt=Array.isArray,Jn=Object.keys,Qn=Object.create,Zn=er&&ArrayBuffer.isView,Tt=isNaN,Bt=isFinite,ur=!{toString:null}.propertyIsEnumerable("toString"),Kn=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],St=Math.pow(2,53)-1;function w(n,r){return r=r==null?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),i=0;i<t;i++)e[i]=arguments[i+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var u=Array(r+1);for(i=0;i<r;i++)u[i]=arguments[i];return u[r]=e,n.apply(this,u)}}function N(n){var r=typeof n;return r==="function"||r==="object"&&!!n}function Vt(n){return n===null}function ir(n){return n===void 0}function lr(n){return n===!0||n===!1||H.call(n)==="[object Boolean]"}function Dt(n){return!!(n&&n.nodeType===1)}function d(n){var r="[object "+n+"]";return function(t){return H.call(t)===r}}const gn=d("String"),ar=d("Number"),Ft=d("Date"),zt=d("RegExp"),Lt=d("Error"),or=d("Symbol"),fr=d("ArrayBuffer");var cr=d("Function"),Ht=Gn.document&&Gn.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof Ht!="function"&&(cr=function(n){return typeof n=="function"||!1});const y=cr,sr=d("Object");var vr=Nt&&sr(new DataView(new ArrayBuffer(8))),pn=typeof Map<"u"&&sr(new Map),$t=d("DataView");function Ct(n){return n!=null&&y(n.getInt8)&&fr(n.buffer)}const K=vr?Ct:$t,R=Rt||d("Array");function O(n,r){return n!=null&&Pt.call(n,r)}var ln=d("Arguments");(function(){ln(arguments)||(ln=function(n){return O(n,"callee")})})();const mn=ln;function qt(n){return!or(n)&&Bt(n)&&!isNaN(parseFloat(n))}function hr(n){return ar(n)&&Tt(n)}function gr(n){return function(){return n}}function pr(n){return function(r){var t=n(r);return typeof t=="number"&&t>=0&&t<=St}}function mr(n){return function(r){return r==null?void 0:r[n]}}const x=mr("byteLength"),Ut=pr(x);var Wt=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function Xt(n){return Zn?Zn(n)&&!K(n):Ut(n)&&Wt.test(H.call(n))}const dr=er?Xt:gr(!1),_=mr("length");function Gt(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(i){return r[i]===!0},push:function(i){return r[i]=!0,n.push(i)}}}function yr(n,r){r=Gt(r);var t=Kn.length,e=n.constructor,i=y(e)&&e.prototype||hn,u="constructor";for(O(n,u)&&!r.contains(u)&&r.push(u);t--;)u=Kn[t],u in n&&n[u]!==i[u]&&!r.contains(u)&&r.push(u)}function m(n){if(!N(n))return[];if(Jn)return Jn(n);var r=[];for(var t in n)O(n,t)&&r.push(t);return ur&&yr(n,r),r}function Yt(n){if(n==null)return!0;var r=_(n);return typeof r=="number"&&(R(n)||gn(n)||mn(n))?r===0:_(m(n))===0}function wr(n,r){var t=m(r),e=t.length;if(n==null)return!e;for(var i=Object(n),u=0;u<e;u++){var l=t[u];if(r[l]!==i[l]||!(l in i))return!1}return!0}function c(n){if(n instanceof c)return n;if(!(this instanceof c))return new c(n);this._wrapped=n}c.VERSION=tr;c.prototype.value=function(){return this._wrapped};c.prototype.valueOf=c.prototype.toJSON=c.prototype.value;c.prototype.toString=function(){return String(this._wrapped)};function xn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,x(n))}var kn="[object DataView]";function an(n,r,t,e){if(n===r)return n!==0||1/n===1/r;if(n==null||r==null)return!1;if(n!==n)return r!==r;var i=typeof n;return i!=="function"&&i!=="object"&&typeof r!="object"?!1:_r(n,r,t,e)}function _r(n,r,t,e){n instanceof c&&(n=n._wrapped),r instanceof c&&(r=r._wrapped);var i=H.call(n);if(i!==H.call(r))return!1;if(vr&&i=="[object Object]"&&K(n)){if(!K(r))return!1;i=kn}switch(i){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:+n==0?1/+n===1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return Yn.valueOf.call(n)===Yn.valueOf.call(r);case"[object ArrayBuffer]":case kn:return _r(xn(n),xn(r),t,e)}var u=i==="[object Array]";if(!u&&dr(n)){var l=x(n);if(l!==x(r))return!1;if(n.buffer===r.buffer&&n.byteOffset===r.byteOffset)return!0;u=!0}if(!u){if(typeof n!="object"||typeof r!="object")return!1;var a=n.constructor,o=r.constructor;if(a!==o&&!(y(a)&&a instanceof a&&y(o)&&o instanceof o)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var f=t.length;f--;)if(t[f]===n)return e[f]===r;if(t.push(n),e.push(r),u){if(f=n.length,f!==r.length)return!1;for(;f--;)if(!an(n[f],r[f],t,e))return!1}else{var v=m(n),g;if(f=v.length,m(r).length!==f)return!1;for(;f--;)if(g=v[f],!(O(r,g)&&an(n[g],r[g],t,e)))return!1}return t.pop(),e.pop(),!0}function Jt(n,r){return an(n,r)}function U(n){if(!N(n))return[];var r=[];for(var t in n)r.push(t);return ur&&yr(n,r),r}function dn(n){var r=_(n);return function(t){if(t==null)return!1;var e=U(t);if(_(e))return!1;for(var i=0;i<r;i++)if(!y(t[n[i]]))return!1;return n!==Mr||!y(t[yn])}}var yn="forEach",Ar="has",wn=["clear","delete"],Er=["get",Ar,"set"],Qt=wn.concat(yn,Er),Mr=wn.concat(Er),Zt=["add"].concat(wn,yn,Ar);const Kt=pn?dn(Qt):d("Map"),xt=pn?dn(Mr):d("WeakMap"),kt=pn?dn(Zt):d("Set"),bt=d("WeakSet");function S(n){for(var r=m(n),t=r.length,e=Array(t),i=0;i<t;i++)e[i]=n[r[i]];return e}function jt(n){for(var r=m(n),t=r.length,e=Array(t),i=0;i<t;i++)e[i]=[r[i],n[r[i]]];return e}function Ir(n){for(var r={},t=m(n),e=0,i=t.length;e<i;e++)r[n[t[e]]]=t[e];return r}function on(n){var r=[];for(var t in n)y(n[t])&&r.push(t);return r.sort()}function _n(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||t==null)return t;for(var i=1;i<e;i++)for(var u=arguments[i],l=n(u),a=l.length,o=0;o<a;o++){var f=l[o];(!r||t[f]===void 0)&&(t[f]=u[f])}return t}}const Or=_n(U),k=_n(m),Pr=_n(U,!0);function ne(){return function(){}}function Nr(n){if(!N(n))return{};if(Qn)return Qn(n);var r=ne();r.prototype=n;var t=new r;return r.prototype=null,t}function re(n,r){var t=Nr(n);return r&&k(t,r),t}function te(n){return N(n)?R(n)?n.slice():Or({},n):n}function ee(n,r){return r(n),n}function Rr(n){return R(n)?n:[n]}c.toPath=Rr;function W(n){return c.toPath(n)}function An(n,r){for(var t=r.length,e=0;e<t;e++){if(n==null)return;n=n[r[e]]}return t?n:void 0}function Tr(n,r,t){var e=An(n,W(r));return ir(e)?t:e}function ue(n,r){r=W(r);for(var t=r.length,e=0;e<t;e++){var i=r[e];if(!O(n,i))return!1;n=n[i]}return!!t}function En(n){return n}function $(n){return n=k({},n),function(r){return wr(r,n)}}function Mn(n){return n=W(n),function(r){return An(r,n)}}function X(n,r,t){if(r===void 0)return n;switch(t==null?3:t){case 1:return function(e){return n.call(r,e)};case 3:return function(e,i,u){return n.call(r,e,i,u)};case 4:return function(e,i,u,l){return n.call(r,e,i,u,l)}}return function(){return n.apply(r,arguments)}}function Br(n,r,t){return n==null?En:y(n)?X(n,r,t):N(n)&&!R(n)?$(n):Mn(n)}function In(n,r){return Br(n,r,1/0)}c.iteratee=In;function A(n,r,t){return c.iteratee!==In?c.iteratee(n,r):Br(n,r,t)}function ie(n,r,t){r=A(r,t);for(var e=m(n),i=e.length,u={},l=0;l<i;l++){var a=e[l];u[a]=r(n[a],a,n)}return u}function Sr(){}function le(n){return n==null?Sr:function(r){return Tr(n,r)}}function ae(n,r,t){var e=Array(Math.max(0,n));r=X(r,t,1);for(var i=0;i<n;i++)e[i]=r(i);return e}function fn(n,r){return r==null&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}const C=Date.now||function(){return new Date().getTime()};function Vr(n){var r=function(u){return n[u]},t="(?:"+m(n).join("|")+")",e=RegExp(t),i=RegExp(t,"g");return function(u){return u=u==null?"":""+u,e.test(u)?u.replace(i,r):u}}const Dr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},oe=Vr(Dr),fe=Ir(Dr),ce=Vr(fe),se=c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var tn=/(.)^/,ve={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},he=/\\|'|\r|\n|\u2028|\u2029/g;function ge(n){return"\\"+ve[n]}var pe=/^\s*(\w|\$)+\s*$/;function me(n,r,t){!r&&t&&(r=t),r=Pr({},r,c.templateSettings);var e=RegExp([(r.escape||tn).source,(r.interpolate||tn).source,(r.evaluate||tn).source].join("|")+"|$","g"),i=0,u="__p+='";n.replace(e,function(f,v,g,D,F){return u+=n.slice(i,F).replace(he,ge),i=F+f.length,v?u+=`'+
((__t=(`+v+`))==null?'':_.escape(__t))+
'`:g?u+=`'+
((__t=(`+g+`))==null?'':__t)+
'`:D&&(u+=`';
`+D+`
__p+='`),f}),u+=`';
`;var l=r.variable;if(l){if(!pe.test(l))throw new Error("variable is not a bare identifier: "+l)}else u=`with(obj||{}){
`+u+`}
`,l="obj";u=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+u+`return __p;
`;var a;try{a=new Function(l,"_",u)}catch(f){throw f.source=u,f}var o=function(f){return a.call(this,f,c)};return o.source="function("+l+`){
`+u+"}",o}function de(n,r,t){r=W(r);var e=r.length;if(!e)return y(t)?t.call(n):t;for(var i=0;i<e;i++){var u=n==null?void 0:n[r[i]];u===void 0&&(u=t,i=e),n=y(u)?u.call(n):u}return n}var ye=0;function we(n){var r=++ye+"";return n?n+r:r}function _e(n){var r=c(n);return r._chain=!0,r}function Fr(n,r,t,e,i){if(!(e instanceof r))return n.apply(t,i);var u=Nr(n.prototype),l=n.apply(u,i);return N(l)?l:u}var V=w(function(n,r){var t=V.placeholder,e=function(){for(var i=0,u=r.length,l=Array(u),a=0;a<u;a++)l[a]=r[a]===t?arguments[i++]:r[a];for(;i<arguments.length;)l.push(arguments[i++]);return Fr(n,e,this,this,l)};return e});V.placeholder=c;const zr=w(function(n,r,t){if(!y(n))throw new TypeError("Bind must be called on a function");var e=w(function(i){return Fr(n,e,r,this,t.concat(i))});return e}),E=pr(_);function T(n,r,t,e){if(e=e||[],!r&&r!==0)r=1/0;else if(r<=0)return e.concat(n);for(var i=e.length,u=0,l=_(n);u<l;u++){var a=n[u];if(E(a)&&(R(a)||mn(a)))if(r>1)T(a,r-1,t,e),i=e.length;else for(var o=0,f=a.length;o<f;)e[i++]=a[o++];else t||(e[i++]=a)}return e}const Ae=w(function(n,r){r=T(r,!1,!1);var t=r.length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=zr(n[e],n)}return n});function Ee(n,r){var t=function(e){var i=t.cache,u=""+(r?r.apply(this,arguments):e);return O(i,u)||(i[u]=n.apply(this,arguments)),i[u]};return t.cache={},t}const Lr=w(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),Me=V(Lr,c,1);function Hr(n,r,t){var e,i,u,l,a=0;t||(t={});var o=function(){a=t.leading===!1?0:C(),e=null,l=n.apply(i,u),e||(i=u=null)},f=function(){var v=C();!a&&t.leading===!1&&(a=v);var g=r-(v-a);return i=this,u=arguments,g<=0||g>r?(e&&(clearTimeout(e),e=null),a=v,l=n.apply(i,u),e||(i=u=null)):!e&&t.trailing!==!1&&(e=setTimeout(o,g)),l};return f.cancel=function(){clearTimeout(e),a=0,e=i=u=null},f}function Ie(n,r,t){var e,i,u,l,a,o=function(){var v=C()-i;r>v?e=setTimeout(o,r-v):(e=null,t||(l=n.apply(a,u)),e||(u=a=null))},f=w(function(v){return a=this,u=v,i=C(),e||(e=setTimeout(o,r),t&&(l=n.apply(a,u))),l});return f.cancel=function(){clearTimeout(e),e=u=a=null},f}function Oe(n,r){return V(r,n)}function On(n){return function(){return!n.apply(this,arguments)}}function Pe(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}}function Ne(n,r){return function(){if(--n<1)return r.apply(this,arguments)}}function $r(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}const Re=V($r,2);function Cr(n,r,t){r=A(r,t);for(var e=m(n),i,u=0,l=e.length;u<l;u++)if(i=e[u],r(n[i],i,n))return i}function qr(n){return function(r,t,e){t=A(t,e);for(var i=_(r),u=n>0?0:i-1;u>=0&&u<i;u+=n)if(t(r[u],u,r))return u;return-1}}const Pn=qr(1),Ur=qr(-1);function Wr(n,r,t,e){t=A(t,e,1);for(var i=t(r),u=0,l=_(n);u<l;){var a=Math.floor((u+l)/2);t(n[a])<i?u=a+1:l=a}return u}function Xr(n,r,t){return function(e,i,u){var l=0,a=_(e);if(typeof u=="number")n>0?l=u>=0?u:Math.max(u+a,l):a=u>=0?Math.min(u+1,a):u+a+1;else if(t&&u&&a)return u=t(e,i),e[u]===i?u:-1;if(i!==i)return u=r(q.call(e,l,a),hr),u>=0?u+l:-1;for(u=n>0?l:a-1;u>=0&&u<a;u+=n)if(e[u]===i)return u;return-1}}const Gr=Xr(1,Pn,Wr),Te=Xr(-1,Ur);function cn(n,r,t){var e=E(n)?Pn:Cr,i=e(n,r,t);if(i!==void 0&&i!==-1)return n[i]}function Be(n,r){return cn(n,$(r))}function I(n,r,t){r=X(r,t);var e,i;if(E(n))for(e=0,i=n.length;e<i;e++)r(n[e],e,n);else{var u=m(n);for(e=0,i=u.length;e<i;e++)r(n[u[e]],u[e],n)}return n}function P(n,r,t){r=A(r,t);for(var e=!E(n)&&m(n),i=(e||n).length,u=Array(i),l=0;l<i;l++){var a=e?e[l]:l;u[l]=r(n[a],a,n)}return u}function Yr(n){var r=function(t,e,i,u){var l=!E(t)&&m(t),a=(l||t).length,o=n>0?0:a-1;for(u||(i=t[l?l[o]:o],o+=n);o>=0&&o<a;o+=n){var f=l?l[o]:o;i=e(i,t[f],f,t)}return i};return function(t,e,i,u){var l=arguments.length>=3;return r(t,X(e,u,4),i,l)}}const en=Yr(1),bn=Yr(-1);function B(n,r,t){var e=[];return r=A(r,t),I(n,function(i,u,l){r(i,u,l)&&e.push(i)}),e}function Se(n,r,t){return B(n,On(A(r)),t)}function jn(n,r,t){r=A(r,t);for(var e=!E(n)&&m(n),i=(e||n).length,u=0;u<i;u++){var l=e?e[u]:u;if(!r(n[l],l,n))return!1}return!0}function nr(n,r,t){r=A(r,t);for(var e=!E(n)&&m(n),i=(e||n).length,u=0;u<i;u++){var l=e?e[u]:u;if(r(n[l],l,n))return!0}return!1}function M(n,r,t,e){return E(n)||(n=S(n)),(typeof t!="number"||e)&&(t=0),Gr(n,r,t)>=0}const Ve=w(function(n,r,t){var e,i;return y(r)?i=r:(r=W(r),e=r.slice(0,-1),r=r[r.length-1]),P(n,function(u){var l=i;if(!l){if(e&&e.length&&(u=An(u,e)),u==null)return;l=u[r]}return l==null?l:l.apply(u,t)})});function Nn(n,r){return P(n,Mn(r))}function De(n,r){return B(n,$(r))}function Jr(n,r,t){var e=-1/0,i=-1/0,u,l;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=E(n)?n:S(n);for(var a=0,o=n.length;a<o;a++)u=n[a],u!=null&&u>e&&(e=u)}else r=A(r,t),I(n,function(f,v,g){l=r(f,v,g),(l>i||l===-1/0&&e===-1/0)&&(e=f,i=l)});return e}function Fe(n,r,t){var e=1/0,i=1/0,u,l;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=E(n)?n:S(n);for(var a=0,o=n.length;a<o;a++)u=n[a],u!=null&&u<e&&(e=u)}else r=A(r,t),I(n,function(f,v,g){l=r(f,v,g),(l<i||l===1/0&&e===1/0)&&(e=f,i=l)});return e}var ze=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Qr(n){return n?R(n)?q.call(n):gn(n)?n.match(ze):E(n)?P(n,En):S(n):[]}function Zr(n,r,t){if(r==null||t)return E(n)||(n=S(n)),n[fn(n.length-1)];var e=Qr(n),i=_(e);r=Math.max(Math.min(r,i),0);for(var u=i-1,l=0;l<r;l++){var a=fn(l,u),o=e[l];e[l]=e[a],e[a]=o}return e.slice(0,r)}function Le(n){return Zr(n,1/0)}function He(n,r,t){var e=0;return r=A(r,t),Nn(P(n,function(i,u,l){return{value:i,index:e++,criteria:r(i,u,l)}}).sort(function(i,u){var l=i.criteria,a=u.criteria;if(l!==a){if(l>a||l===void 0)return 1;if(l<a||a===void 0)return-1}return i.index-u.index}),"value")}function j(n,r){return function(t,e,i){var u=r?[[],[]]:{};return e=A(e,i),I(t,function(l,a){var o=e(l,a,t);n(u,l,o)}),u}}const $e=j(function(n,r,t){O(n,t)?n[t].push(r):n[t]=[r]}),Ce=j(function(n,r,t){n[t]=r}),qe=j(function(n,r,t){O(n,t)?n[t]++:n[t]=1}),Ue=j(function(n,r,t){n[t?0:1].push(r)},!0);function We(n){return n==null?0:E(n)?n.length:m(n).length}function Xe(n,r,t){return r in t}const Kr=w(function(n,r){var t={},e=r[0];if(n==null)return t;y(e)?(r.length>1&&(e=X(e,r[1])),r=U(n)):(e=Xe,r=T(r,!1,!1),n=Object(n));for(var i=0,u=r.length;i<u;i++){var l=r[i],a=n[l];e(a,l,n)&&(t[l]=a)}return t}),Ge=w(function(n,r){var t=r[0],e;return y(t)?(t=On(t),r.length>1&&(e=r[1])):(r=P(T(r,!1,!1),String),t=function(i,u){return!M(r,u)}),Kr(n,t,e)});function xr(n,r,t){return q.call(n,0,Math.max(0,n.length-(r==null||t?1:r)))}function un(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[0]:xr(n,n.length-r)}function Z(n,r,t){return q.call(n,r==null||t?1:r)}function Ye(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[n.length-1]:Z(n,Math.max(0,n.length-r))}function Je(n){return B(n,Boolean)}function Qe(n,r){return T(n,r,!1)}const kr=w(function(n,r){return r=T(r,!0,!0),B(n,function(t){return!M(r,t)})}),Ze=w(function(n,r){return kr(n,r)});function sn(n,r,t,e){lr(r)||(e=t,t=r,r=!1),t!=null&&(t=A(t,e));for(var i=[],u=[],l=0,a=_(n);l<a;l++){var o=n[l],f=t?t(o,l,n):o;r&&!t?((!l||u!==f)&&i.push(o),u=f):t?M(u,f)||(u.push(f),i.push(o)):M(i,o)||i.push(o)}return i}const Ke=w(function(n){return sn(T(n,!0,!0))});function xe(n){for(var r=[],t=arguments.length,e=0,i=_(n);e<i;e++){var u=n[e];if(!M(r,u)){var l;for(l=1;l<t&&M(arguments[l],u);l++);l===t&&r.push(u)}}return r}function vn(n){for(var r=n&&Jr(n,_).length||0,t=Array(r),e=0;e<r;e++)t[e]=Nn(n,e);return t}const ke=w(vn);function be(n,r){for(var t={},e=0,i=_(n);e<i;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t}function je(n,r,t){r==null&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),i=Array(e),u=0;u<e;u++,n+=t)i[u]=n;return i}function nu(n,r){if(r==null||r<1)return[];for(var t=[],e=0,i=n.length;e<i;)t.push(q.call(n,e,e+=r));return t}function Rn(n,r){return n._chain?c(r).chain():r}function br(n){return I(on(n),function(r){var t=c[r]=n[r];c.prototype[r]=function(){var e=[this._wrapped];return Ot.apply(e,arguments),Rn(this,t.apply(c,e))}}),c}I(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=b[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(r.apply(t,arguments),(n==="shift"||n==="splice")&&t.length===0&&delete t[0]),Rn(this,t)}});I(["concat","join","slice"],function(n){var r=b[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(t=r.apply(t,arguments)),Rn(this,t)}});const ru=Object.freeze(Object.defineProperty({__proto__:null,VERSION:tr,restArguments:w,isObject:N,isNull:Vt,isUndefined:ir,isBoolean:lr,isElement:Dt,isString:gn,isNumber:ar,isDate:Ft,isRegExp:zt,isError:Lt,isSymbol:or,isArrayBuffer:fr,isDataView:K,isArray:R,isFunction:y,isArguments:mn,isFinite:qt,isNaN:hr,isTypedArray:dr,isEmpty:Yt,isMatch:wr,isEqual:Jt,isMap:Kt,isWeakMap:xt,isSet:kt,isWeakSet:bt,keys:m,allKeys:U,values:S,pairs:jt,invert:Ir,functions:on,methods:on,extend:Or,extendOwn:k,assign:k,defaults:Pr,create:re,clone:te,tap:ee,get:Tr,has:ue,mapObject:ie,identity:En,constant:gr,noop:Sr,toPath:Rr,property:Mn,propertyOf:le,matcher:$,matches:$,times:ae,random:fn,now:C,escape:oe,unescape:ce,templateSettings:se,template:me,result:de,uniqueId:we,chain:_e,iteratee:In,partial:V,bind:zr,bindAll:Ae,memoize:Ee,delay:Lr,defer:Me,throttle:Hr,debounce:Ie,wrap:Oe,negate:On,compose:Pe,after:Ne,before:$r,once:Re,findKey:Cr,findIndex:Pn,findLastIndex:Ur,sortedIndex:Wr,indexOf:Gr,lastIndexOf:Te,find:cn,detect:cn,findWhere:Be,each:I,forEach:I,map:P,collect:P,reduce:en,foldl:en,inject:en,reduceRight:bn,foldr:bn,filter:B,select:B,reject:Se,every:jn,all:jn,some:nr,any:nr,contains:M,includes:M,include:M,invoke:Ve,pluck:Nn,where:De,max:Jr,min:Fe,shuffle:Le,sample:Zr,sortBy:He,groupBy:$e,indexBy:Ce,countBy:qe,partition:Ue,toArray:Qr,size:We,pick:Kr,omit:Ge,first:un,head:un,take:un,initial:xr,last:Ye,rest:Z,tail:Z,drop:Z,compact:Je,flatten:Qe,without:Ze,uniq:sn,unique:sn,union:Ke,intersection:xe,difference:kr,unzip:vn,transpose:vn,zip:ke,object:be,range:je,chunk:nu,mixin:br,default:c},Symbol.toStringTag,{value:"Module"}));var rr=br(ru);rr._=rr;function lu(n){let r=window;const t=L(!1),e=L(0),i=L(0),u=L(0),l=Hr(()=>{r===window?(e.value=document.documentElement.scrollTop,i.value=document.documentElement.clientHeight,u.value=document.documentElement.scrollHeight):(i.value=r.clientHeight,e.value=r.scrollTop,u.value=r.scrollHeight),e.value+i.value>=u.value&&(t.value=!0)},1e3);return pt(()=>{n&&(r=n.value),r.addEventListener("scroll",l)}),mt(()=>{n&&(r=n.value),r.addEventListener("scroll",l)}),dt(()=>{r.removeEventListener("scroll",l)}),yt(()=>{r.removeEventListener("scroll",l)}),{scrollTop:e,clientHeight:i,scrollHeight:u,isReachBottom:t}}export{iu as R,lu as u};