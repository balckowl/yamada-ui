import{a as s,j as e}from"./jsx-runtime-b08f8875.js";import{r as c}from"./index-8ee6c85d.js";import{u as n}from"./index-39df2234.js";import{U as m}from"./ui-provider-88cfb06e.js";import{C as d}from"./container-72b57892.js";import{H as l,V as p}from"./stack-57e4b232.js";import{u as f,h}from"./factory-2d442159.js";import{B as C}from"./box-262adc2c.js";import{T as a}from"./text-c7eceae7.js";const P=({children:o})=>s(m,{children:s(g,{children:o})}),g=({children:o})=>{const{changeColorMode:t}=f(),r=n()?"dark":"light";return c.useEffect(()=>{t(r)},[r,t]),s(d,{children:o})},U=({name:o,colors:t})=>Object.entries(t[o]).map(([r,i])=>s(x,{name:o,hue:r,value:i},r)),x=({name:o,hue:t,value:r})=>{const i=n()?"dark":"light";return e(l,{children:[s(C,{bg:t?`${o}.${t}`:o,minW:"12",minH:"12",rounded:"md",boxShadow:"inner"}),e(p,{gap:"1",children:[e(a,{m:"0",fontWeight:"semibold",noOfLines:1,children:[o.charAt(0).toUpperCase()+o.slice(1)," ",t]}),s(a,{m:"0",noOfLines:1,children:h(r)?i==="light"?r[0]:r[1]:r})]})]},t)};export{x as C,P as J,U as a};
//# sourceMappingURL=components-aef01b65.js.map