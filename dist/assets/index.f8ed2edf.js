import{_,X as f,$ as u,aa as m,au as s,aI as a,K as g,a1 as o,a2 as r,av as k,a7 as v,a8 as h}from"./index.f437f4e8.js";import{N as C}from"./index.7d6b5488.js";const I=t=>(v("data-v-82d54120"),t=t(),h(),t),S={class:"left-text"},N=I(()=>o("i",{class:"icon-right-menu"},null,-1)),$={__name:"index",props:{title:{type:String,default:"\u6807\u9898"},leftText:{type:String,default:""}},emits:["leftClick"],setup(t,{emit:n}){const i=f(),c=()=>{i.go(-1),n("leftClick")};return(e,l)=>{const d=C;return u(),m(d,g(e.$attrs,{onClickLeft:c}),{left:s(()=>[a(e.$slots,"left",{},()=>[o("i",{class:"icon-left-arrow",onClick:l[0]||(l[0]=(...p)=>e.leftIconClick&&e.leftIconClick(...p))}),o("span",S,r(t.leftText),1)],!0)]),title:s(()=>[a(e.$slots,"title",{},()=>[k(r(t.title),1)],!0)]),right:s(()=>[a(e.$slots,"right",{},()=>[N],!0)]),_:3},16)}}},B=_($,[["__scopeId","data-v-82d54120"]]);export{B as N};