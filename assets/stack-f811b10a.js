import{j as g,a as c}from"./jsx-runtime-b08f8875.js";import{r as e}from"./index-8ee6c85d.js";import{f as a}from"./forward-ref-cf7188bd.js";import{r as n,p as v,d as V,e as x}from"./factory-ab7c3580.js";const h=a(({direction:o="column",justify:t,align:m,wrap:d,gap:i="md",divider:l,className:k,children:f,...S},w)=>{const r=s=>s==="column"||s==="column-reverse",y=e.useMemo(()=>({w:n(o,s=>r(s)?"100%":"fix-content"),h:n(o,s=>r(s)?"fix-content":"100%"),borderLeftWidth:n(o,s=>r(s)?0:"1px"),borderBottomWidth:n(o,s=>r(s)?"1px":0)}),[o]),p=v(f),j=l?p.map((s,u)=>{const _=typeof s.key<"u"?s.key:u,b=e.cloneElement(l,{__css:y});return g(e.Fragment,{children:[u?b:null,s]},_)}):p,C=e.useMemo(()=>({display:"flex",flexDirection:o,justifyContent:t,alignItems:m,flexWrap:d,gap:i}),[m,o,d,i,t]);return c(V.div,{ref:w,className:x("ui-stack",k),__css:C,...S,children:j})}),F=a((o,t)=>c(h,{ref:t,direction:"row",align:"center",...o})),L=a((o,t)=>c(h,{ref:t,direction:"column",align:"stretch",w:"100%",...o}));export{F as H,h as S,L as V};
//# sourceMappingURL=stack-f811b10a.js.map