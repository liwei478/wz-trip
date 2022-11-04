import{c as j,n as P,A as te,k as O,e as z,r as Se,d as H,u as Ie,a as i,i as x,I as R,w as U,aJ as we,aC as Ve,h as Ee,aK as Pe,aL as Te,m as T,z as Le,s as Me,q as D,t as _e,aM as Ae,b as A,f as Be,ao as Re,v as $e,an as N,G as Ne,x as Oe,aN as X,aO as De,p as W,aP as ze,K as ne,av as Fe,aQ as qe,L as Z}from"./index.f437f4e8.js";import{u as ae}from"./use-id.256eb467.js";import{a as le}from"./index.ca1821e6.js";const[Ke,E]=j("cell"),ie={icon:String,size:String,title:P,value:P,label:P,center:Boolean,isLink:Boolean,border:te,required:Boolean,iconPrefix:String,valueClass:O,labelClass:O,titleClass:O,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},We=z({},ie,Se);var je=H({name:Ke,props:We,setup(e,{slots:n}){const a=Ie(),d=()=>{if(n.label||x(e.label))return i("div",{class:[E("label"),e.labelClass]},[n.label?n.label():e.label])},o=()=>{if(n.title||x(e.title))return i("div",{class:[E("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():i("span",null,[e.title]),d()])},f=()=>{const s=n.value||n.default;if(s||x(e.value)){const u=n.title||x(e.title);return i("div",{class:[E("value",{alone:!u}),e.valueClass]},[s?s():i("span",null,[e.value])])}},S=()=>{if(n.icon)return n.icon();if(e.icon)return i(R,{name:e.icon,class:E("left-icon"),classPrefix:e.iconPrefix},null)},y=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const s=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return i(R,{name:s,class:E("right-icon")},null)}};return()=>{var s,b;const{size:u,center:L,border:I,isLink:M,required:h}=e,v=(s=e.clickable)!=null?s:M,k={center:L,required:h,clickable:v,borderless:!I};return u&&(k[u]=!!u),i("div",{class:E(k),role:v?"button":void 0,tabindex:v?0:void 0,onClick:a},[S(),o(),f(),y(),(b=n.extra)==null?void 0:b.call(n)])}}});const He=U(je);function re(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Ue(e,n){if(re(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function Je(e,n){return new Promise(a=>{const d=n.validator(e,n);if(Pe(d)){d.then(a);return}a(d)})}function p(e,n){const{message:a}=n;return Te(a)?a(e,n):a||""}function Ye({target:e}){e.composing=!0}function ee({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function Ge(e,n){const a=we();e.style.height="auto";let d=e.scrollHeight;if(Ee(n)){const{maxHeight:o,minHeight:f}=n;o!==void 0&&(d=Math.min(d,o)),f!==void 0&&(d=Math.max(d,f))}d&&(e.style.height=`${d}px`,Ve(a))}function Qe(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function K(e){return[...e].length}function Xe(e,n){return[...e].slice(0,n).join("")}const[Ze,m]=j("field"),J={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:P,formatter:Function,clearIcon:T("clear"),modelValue:Le(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:T("focus"),formatTrigger:T("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},pe=z({},ie,J,{rows:P,type:T("text"),rules:Array,autosize:[Boolean,Object],labelWidth:P,labelClass:O,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var et=H({name:Ze,props:pe,emits:["blur","focus","clear","keypress","click-input","end-validate","start-validate","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:n,slots:a}){const d=ae(),o=Me({status:"unvalidated",focused:!1,validateMessage:""}),f=D(),S=D(),y=D(),{parent:s}=_e(Ae),b=()=>{var t;return String((t=e.modelValue)!=null?t:"")},u=t=>{if(x(e[t]))return e[t];if(s&&x(s.props[t]))return s.props[t]},L=A(()=>{const t=u("readonly");if(e.clearable&&!t){const r=b()!=="",c=e.clearTrigger==="always"||e.clearTrigger==="focus"&&o.focused;return r&&c}return!1}),I=A(()=>y.value&&a.input?y.value():e.modelValue),M=t=>t.reduce((r,c)=>r.then(()=>{if(o.status==="failed")return;let{value:g}=I;if(c.formatter&&(g=c.formatter(g,c)),!Ue(g,c)){o.status="failed",o.validateMessage=p(g,c);return}if(c.validator)return re(g)&&c.validateEmpty===!1?void 0:Je(g,c).then(C=>{C&&typeof C=="string"?(o.status="failed",o.validateMessage=C):C===!1&&(o.status="failed",o.validateMessage=p(g,c))})}),Promise.resolve()),h=()=>{o.status="unvalidated",o.validateMessage=""},v=()=>n("end-validate",{status:o.status}),k=(t=e.rules)=>new Promise(r=>{h(),t?(n("start-validate"),M(t).then(()=>{o.status==="failed"?(r({name:e.name,message:o.validateMessage}),v()):(o.status="passed",r(),v())})):r()}),_=t=>{if(s&&e.rules){const{validateTrigger:r}=s.props,c=X(r).includes(t),g=e.rules.filter(C=>C.trigger?X(C.trigger).includes(t):c);g.length&&k(g)}},F=t=>{const{maxlength:r}=e;if(x(r)&&K(t)>r){const c=b();return c&&K(c)===+r?c:Xe(t,+r)}return t},w=(t,r="onChange")=>{if(t=F(t),e.type==="number"||e.type==="digit"){const c=e.type==="number";t=De(t,c,c)}e.formatter&&r===e.formatTrigger&&(t=e.formatter(t)),f.value&&f.value.value!==t&&(f.value.value=t),t!==e.modelValue&&n("update:modelValue",t)},q=t=>{t.target.composing||w(t.target.value)},l=()=>{var t;return(t=f.value)==null?void 0:t.blur()},$=()=>{var t;return(t=f.value)==null?void 0:t.focus()},V=()=>{const t=f.value;e.type==="textarea"&&e.autosize&&t&&Ge(t,e.autosize)},oe=t=>{o.focused=!0,n("focus",t),N(V),u("readonly")&&l()},ce=t=>{u("readonly")||(o.focused=!1,w(b(),"onBlur"),n("blur",t),_("onBlur"),N(V),qe())},Y=t=>n("click-input",t),se=t=>n("click-left-icon",t),ue=t=>n("click-right-icon",t),de=t=>{W(t),n("update:modelValue",""),n("clear",t)},G=A(()=>{if(typeof e.error=="boolean")return e.error;if(s&&s.props.showError&&o.status==="failed")return!0}),fe=A(()=>{const t=u("labelWidth");if(t)return{width:Be(t)}}),ge=t=>{t.keyCode===13&&(!(s&&s.props.submitOnEnter)&&e.type!=="textarea"&&W(t),e.type==="search"&&l()),n("keypress",t)},Q=()=>e.id||`${d}-input`,be=()=>o.status,me=()=>{const t=m("control",[u("inputAlign"),{error:G.value,custom:!!a.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(a.input)return i("div",{class:t,onClick:Y},[a.input()]);const r={id:Q(),ref:f,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:u("disabled"),readonly:u("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${d}-label`:void 0,onBlur:ce,onFocus:oe,onInput:q,onClick:Y,onChange:ee,onKeypress:ge,onCompositionend:ee,onCompositionstart:Ye};return e.type==="textarea"?i("textarea",r,null):i("input",ne(Qe(e.type),r),null)},he=()=>{const t=a["left-icon"];if(e.leftIcon||t)return i("div",{class:m("left-icon"),onClick:se},[t?t():i(R,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},ve=()=>{const t=a["right-icon"];if(e.rightIcon||t)return i("div",{class:m("right-icon"),onClick:ue},[t?t():i(R,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},ye=()=>{if(e.showWordLimit&&e.maxlength){const t=K(b());return i("div",{class:m("word-limit")},[i("span",{class:m("word-num")},[t]),Fe("/"),e.maxlength])}},ke=()=>{if(s&&s.props.showErrorMessage===!1)return;const t=e.errorMessage||o.validateMessage;if(t){const r=a["error-message"],c=u("errorMessageAlign");return i("div",{class:m("error-message",c)},[r?r({message:t}):t])}},Ce=()=>{const t=u("colon")?":":"";if(a.label)return[a.label(),t];if(e.label)return i("label",{id:`${d}-label`,for:Q()},[e.label+t])},xe=()=>[i("div",{class:m("body")},[me(),L.value&&i(R,{ref:S,name:e.clearIcon,class:m("clear")},null),ve(),a.button&&i("div",{class:m("button")},[a.button()])]),ye(),ke()];return le({blur:l,focus:$,validate:k,formValue:I,resetValidation:h,getValidationStatus:be}),Re(ze,{customValue:y,resetValidation:h,validateWithTrigger:_}),$e(()=>e.modelValue,()=>{w(b()),h(),_("onChange"),N(V)}),Ne(()=>{w(b(),e.formatTrigger),N(V)}),Oe("touchstart",de,{target:A(()=>{var t;return(t=S.value)==null?void 0:t.$el})}),()=>{const t=u("disabled"),r=u("labelAlign"),c=Ce(),g=he();return i(He,{size:e.size,icon:e.leftIcon,class:m({error:G.value,disabled:t,[`label-${r}`]:r}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:fe.value,valueClass:m("value"),titleClass:[m("label",[r,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:g?()=>g:null,title:c?()=>c:null,value:xe,extra:a.extra})}}});const tt=U(et),[nt,B,at]=j("search"),lt=z({},J,{label:String,shape:T("square"),leftIcon:T("search"),clearable:te,actionText:String,background:String,showAction:Boolean});var it=H({name:nt,props:lt,emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:n,slots:a,attrs:d}){const o=ae(),f=D(),S=()=>{a.action||(n("update:modelValue",""),n("cancel"))},y=l=>{l.keyCode===13&&(W(l),n("search",e.modelValue))},s=()=>e.id||`${o}-input`,b=()=>{if(a.label||e.label)return i("label",{class:B("label"),for:s()},[a.label?a.label():e.label])},u=()=>{if(e.showAction){const l=e.actionText||at("cancel");return i("div",{class:B("action"),role:"button",tabindex:0,onClick:S},[a.action?a.action():l])}},L=()=>{var l;return(l=f.value)==null?void 0:l.blur()},I=()=>{var l;return(l=f.value)==null?void 0:l.focus()},M=l=>n("blur",l),h=l=>n("focus",l),v=l=>n("clear",l),k=l=>n("click-input",l),_=l=>n("click-left-icon",l),F=l=>n("click-right-icon",l),w=Object.keys(J),q=()=>{const l=z({},d,Z(e,w),{id:s()}),$=V=>n("update:modelValue",V);return i(tt,ne({ref:f,type:"search",class:B("field"),border:!1,onBlur:M,onFocus:h,onClear:v,onKeypress:y,"onClick-input":k,"onClick-left-icon":_,"onClick-right-icon":F,"onUpdate:modelValue":$},l),Z(a,["left-icon","right-icon"]))};return le({focus:I,blur:L}),()=>{var l;return i("div",{class:B({"show-action":e.showAction}),style:{background:e.background}},[(l=a.left)==null?void 0:l.call(a),i("div",{class:B("content",e.shape)},[b(),q()]),u()])}}});const st=U(it);export{He as C,st as S};
