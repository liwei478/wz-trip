import{c as q,d as F,q as G,s as K,C as ue,b as f,v as S,az as re,aF as ve,aG as fe,G as U,ac as de,aA as he,ah as ge,ai as me,x as we,a as C,A as z,n as L,z as _,ax as V,an as j,aH as I,p as ye,y as D,w as J,t as pe}from"./index.f437f4e8.js";import{u as be,a as Q}from"./index.ca1821e6.js";const[Z,M]=q("swipe"),xe={loop:z,width:L,height:L,vertical:Boolean,autoplay:_(0),duration:_(500),touchable:z,lazyRender:Boolean,initialSwipe:_(0),indicatorColor:String,showIndicators:z,stopPropagation:z},ee=Symbol(Z);var Te=F({name:Z,props:xe,emits:["change"],setup(a,{emit:P,slots:h}){const u=G(),d=G(),e=K({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),r=be(),{children:g,linkChildren:k}=ue(ee),i=f(()=>g.length),l=f(()=>e[a.vertical?"height":"width"]),s=f(()=>a.vertical?r.deltaY.value:r.deltaX.value),m=f(()=>e.rect?(a.vertical?e.rect.height:e.rect.width)-l.value*i.value:0),E=f(()=>Math.ceil(Math.abs(m.value)/l.value)),p=f(()=>i.value*l.value),A=f(()=>(e.active+i.value)%i.value),R=f(()=>{const t=a.vertical?"vertical":"horizontal";return r.direction.value===t}),te=f(()=>{const t={transitionDuration:`${e.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${e.offset}px)`};if(l.value){const o=a.vertical?"height":"width",n=a.vertical?"width":"height";t[o]=`${p.value}px`,t[n]=a[n]?`${a[n]}px`:""}return t}),ae=t=>{const{active:o}=e;return t?a.loop?D(o+t,-1,i.value):D(o+t,0,E.value):o},B=(t,o=0)=>{let n=t*l.value;a.loop||(n=Math.min(n,-m.value));let v=o-n;return a.loop||(v=D(v,m.value,0)),v},w=({pace:t=0,offset:o=0,emitChange:n})=>{if(i.value<=1)return;const{active:v}=e,c=ae(t),T=B(c,o);if(a.loop){if(g[0]&&T!==m.value){const O=T<m.value;g[0].setOffset(O?p.value:0)}if(g[i.value-1]&&T!==0){const O=T>0;g[i.value-1].setOffset(O?-p.value:0)}}e.active=c,e.offset=T,n&&c!==v&&P("change",A.value)},$=()=>{e.swiping=!0,e.active<=-1?w({pace:i.value}):e.active>=i.value&&w({pace:-i.value})},ie=()=>{$(),r.reset(),I(()=>{e.swiping=!1,w({pace:-1,emitChange:!0})})},Y=()=>{$(),r.reset(),I(()=>{e.swiping=!1,w({pace:1,emitChange:!0})})};let H;const b=()=>clearTimeout(H),x=()=>{b(),a.autoplay>0&&i.value>1&&(H=setTimeout(()=>{Y(),x()},+a.autoplay))},y=(t=+a.initialSwipe)=>{if(!u.value)return;const o=()=>{var n,v;if(!V(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};e.rect=c,e.width=+((n=a.width)!=null?n:c.width),e.height=+((v=a.height)!=null?v:c.height)}i.value&&(t=Math.min(i.value-1,t)),e.active=t,e.swiping=!0,e.offset=B(t),g.forEach(c=>{c.setOffset(0)}),x()};V(u)?j().then(o):o()},X=()=>y(e.active);let N;const ne=t=>{!a.touchable||(r.start(t),N=Date.now(),b(),$())},oe=t=>{a.touchable&&e.swiping&&(r.move(t),R.value&&(!a.loop&&(e.active===0&&s.value>0||e.active===i.value-1&&s.value<0)||(ye(t,a.stopPropagation),w({offset:s.value}))))},W=()=>{if(!a.touchable||!e.swiping)return;const t=Date.now()-N,o=s.value/t;if((Math.abs(o)>.25||Math.abs(s.value)>l.value/2)&&R.value){const v=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=v>0?s.value>0?-1:1:0:c=-Math[s.value>0?"ceil":"floor"](s.value/l.value),w({pace:c,emitChange:!0})}else s.value&&w({pace:0});e.swiping=!1,x()},se=(t,o={})=>{$(),r.reset(),I(()=>{let n;a.loop&&t===i.value?n=e.active===0?0:t:n=t%i.value,o.immediate?I(()=>{e.swiping=!1}):e.swiping=!1,w({pace:n-e.active,emitChange:!0})})},le=(t,o)=>{const n=o===A.value,v=n?{backgroundColor:a.indicatorColor}:void 0;return C("i",{style:v,class:M("indicator",{active:n})},null)},ce=()=>{if(h.indicator)return h.indicator({active:A.value,total:i.value});if(a.showIndicators&&i.value>1)return C("div",{class:M("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(le)])};return Q({prev:ie,next:Y,state:e,resize:X,swipeTo:se}),k({size:l,props:a,count:i,activeIndicator:A}),S(()=>a.initialSwipe,t=>y(+t)),S(i,()=>y(e.active)),S(()=>a.autoplay,x),S([re,ve],X),S(fe(),t=>{t==="visible"?x():b()}),U(y),de(()=>y(e.active)),he(()=>y(e.active)),ge(b),me(b),we("touchmove",oe,{target:d}),()=>{var t;return C("div",{ref:u,class:M()},[C("div",{ref:d,style:te.value,class:M("track",{vertical:a.vertical}),onTouchstartPassive:ne,onTouchend:W,onTouchcancel:W},[(t=h.default)==null?void 0:t.call(h)]),ce()])}}});const ze=J(Te),[Se,Ce]=q("swipe-item");var Pe=F({name:Se,setup(a,{slots:P}){let h;const u=K({offset:0,inited:!1,mounted:!1}),{parent:d,index:e}=pe(ee);if(!d)return;const r=f(()=>{const i={},{vertical:l}=d.props;return d.size.value&&(i[l?"height":"width"]=`${d.size.value}px`),u.offset&&(i.transform=`translate${l?"Y":"X"}(${u.offset}px)`),i}),g=f(()=>{const{loop:i,lazyRender:l}=d.props;if(!l||h)return!0;if(!u.mounted)return!1;const s=d.activeIndicator.value,m=d.count.value-1,E=s===0&&i?m:s-1,p=s===m&&i?0:s+1;return h=e.value===s||e.value===E||e.value===p,h}),k=i=>{u.offset=i};return U(()=>{j(()=>{u.mounted=!0})}),Q({setOffset:k}),()=>{var i;return C("div",{class:Ce(),style:r.value},[g.value?(i=P.default)==null?void 0:i.call(P):null])}}});const Ie=J(Pe);export{ze as S,Ie as a};
