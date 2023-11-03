import{a as t,j as V}from"./jsx-runtime-b08f8875.js";import{u as D}from"./index-2cfd973b.js";import{r as g}from"./index-8ee6c85d.js";import{b as N}from"./icon-1c0bf186.js";import{u as W}from"./index-7c833fdd.js";import{k as O,d as _,e as z,v as j,t as y,A as q}from"./factory-ab7c3580.js";import{f as G}from"./forward-ref-cf7188bd.js";import{a as H}from"./use-component-style-07e84389.js";import{o as J}from"./theme-provider-1097130b.js";const K=s=>t(N,{viewBox:"0 0 16 16",...s,children:t("path",{fill:"currentColor",d:"M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"})}),Q=s=>t(N,{viewBox:"0 0 16 16",...s,children:t("path",{fill:"currentColor",d:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"})}),U=s=>t(N,{viewBox:"0 0 16 16",...s,children:t("path",{fill:"currentColor",d:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"})}),X=s=>t(N,{viewBox:"0 0 16 16",...s,children:t("path",{fill:"currentColor",d:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"})}),Y=s=>t(N,{viewBox:"0 0 16 16",...s,children:t("path",{fill:"currentColor",d:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"})}),[$,n1]=O({strict:!1,name:"PaginationContext"}),d=(s,f)=>Array.from({length:f-s+1},(n,m)=>m+s),t1=({page:s,defaultPage:f=1,total:n,siblings:m=1,boundaries:p=1,isDisabled:a=!1,...c})=>{const r=D(m),i=D(p),[h,e]=W({value:s,defaultValue:f,onChange:c.onChange}),x=g.useCallback(()=>e(1),[e]),b=g.useCallback(()=>e(n),[e,n]),l=g.useCallback(()=>e(o=>o===1?o:o-1),[e]),k=g.useCallback(()=>e(o=>o===n?o:o+1),[e,n]),L=g.useCallback(o=>e(o),[e]),P=g.useMemo(()=>{if(r*2+3+i*2>=n)return d(1,n);const v=Math.max(h-r,i),C=Math.min(h+r,n-i),M=v>i+2,u=C<n-(i+1);if(!M&&u){const I=r*2+i+2;return[...d(1,I),"dots",...d(n-(i-1),n)]}if(M&&!u){const I=i+1+2*r;return[...d(1,i),"dots",...d(n-I,n)]}return[...d(1,i),"dots",...d(v,C),"dots",...d(n-i+1,n)]},[i,r,h,n]);return{currentPage:h,total:n,isDisabled:a,onFirst:x,onLast:b,onPrev:l,onNext:k,onChange:L,range:P}},e1={dots:t(K,{}),next:t(Y,{}),prev:t(X,{}),first:t(Q,{}),last:t(U,{})},s1=({className:s,isActive:f,page:n,isDisabled:m,children:p,...a})=>{const c=n1();p??(p=e1[n]??n);const r={display:"flex",justifyContent:"center",alignItems:"center",...c.item,...c[n]};return t(_.button,{className:z("ui-pagination-item",s),type:"button",tabIndex:n!=="dots"?0:-1,disabled:m,"data-selected":j(f),"data-disabled":j(m),__css:r,...a,children:p})},d1=G((s,f)=>{const[n,m]=H("Pagination",s),{className:p,component:a=s1,itemProps:c,withControls:r=!0,withEdges:i=!1,innerProps:h,controlProps:e,controlPrevProps:x,controlNextProps:b,edgeProps:l,edgeFirstProps:k,edgeLastProps:L,...P}=J(m),o=D(r),v=D(i),{currentPage:C,total:M,isDisabled:u,onFirst:I,onLast:A,onPrev:Z,onNext:E,onChange:B,range:S}=t1(P),T=g.useMemo(()=>S.map((w,R)=>t(a,{page:w,isActive:C===w,isDisabled:u,...c,onClick:y(c==null?void 0:c.onClick,w!=="dots"?()=>B(w):void 0)},R)),[a,C,u,B,S,c]),F={display:"flex",alignItems:"center",...n.container};return t($,{value:n,children:V(_.div,{ref:f,className:z("ui-pagination",p),role:"navigation",__css:F,...q(P,["page","defaultPage","total","siblings","boundaries","isDisabled","onChange"]),"data-disabled":j(u),children:[v?t(a,{page:"first",className:"ui-pagination-item-first",isDisabled:u||C===1,...l,...k,onClick:y(l==null?void 0:l.onClick,k==null?void 0:k.onClick,I)}):null,o?t(a,{page:"prev",className:"ui-pagination-item-prev",isDisabled:u||C===1,...e,...x,onClick:y(e==null?void 0:e.onClick,x==null?void 0:x.onClick,Z)}):null,t(_.div,{className:"ui-pagination-inner",__css:{display:"flex",justifyContent:"center",alignItems:"center",...n.inner},...h,children:T}),o?t(a,{page:"next",className:"ui-pagination-item-next",isDisabled:u||C===M,...e,...b,onClick:y(e==null?void 0:e.onClick,b==null?void 0:b.onClick,E)}):null,v?t(a,{page:"last",className:"ui-pagination-item-last",isDisabled:u||C===M,...l,...L,onClick:y(l==null?void 0:l.onClick,L==null?void 0:L.onClick,A)}):null]})})});export{d1 as P};
//# sourceMappingURL=pagination-66bbba1b.js.map