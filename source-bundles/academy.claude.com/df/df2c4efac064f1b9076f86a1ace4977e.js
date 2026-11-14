import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{Ot as t,xa as n}from"../../../../packages-c87dxphu.js";import{i as r,r as i}from"../../../../react-n2kbymz5.js";import{A as a}from"../../../../ResourceWidget-fcv47qgx.js";import{r as o,t as s}from"../../../../ClaudeDesignTutorialKit-ms66v0c6.js";import{a as c,i as l,s as u}from"../../../../_deck-k5szxxug.js";import{i as d,n as f,o as p,r as m,s as h}from"../../../../_slides-nvvpn3g6.js";var g=e(r(),1),_=i(),v=`
  ${h}
  ${d}
  .cd .dc-win.is-max { grid-template-columns: minmax(0, 1fr); padding-left: 8px; }
  .cd .dc-win.is-max .cw-chat { display: none; }
  .cd .dc-spark { margin-top: 20px; }

  @container cd (max-width: 640px) {
    .cd .dc-win .cw-claude, .cd .dc-spark, .cd .dc-expand { display: none; }
    .cd .dc-win .cw-card { margin-top: 12px; }
  }
`;function y(){let e=a(),[r,i]=(0,g.useState)(1),[d,h]=(0,g.useState)(!1);return(0,_.jsxs)(s,{css:v,cssId:"academy-cd-beside",children:[(0,_.jsx)(l,{}),(0,_.jsx)("div",{className:"cd-top",children:(0,_.jsx)("p",{className:"cd-task",children:e("task")})}),(0,_.jsxs)("div",{className:o("cd-win cw-win dc-win",d&&"is-max"),children:[(0,_.jsxs)("div",{className:"cw-chat",children:[(0,_.jsx)("div",{className:"cw-user",children:e("chat.request")}),(0,_.jsxs)("div",{className:"cw-claude",children:[(0,_.jsx)("p",{children:e("chat.claude1")}),(0,_.jsx)("p",{children:e("chat.claude2")})]}),(0,_.jsx)(f,{}),(0,_.jsx)("div",{className:"dc-spark","aria-hidden":"true",children:(0,_.jsx)(t,{size:32})})]}),(0,_.jsx)(m,{expand:(0,_.jsx)("button",{type:"button",className:"cd-gb dc-expand","aria-label":e("ui.expand"),"aria-expanded":d,onClick:()=>h(e=>!e),children:(0,_.jsx)(n,{name:d?"Collapse":"Expand",size:"sm"})}),children:(0,_.jsx)(p,{order:c,current:r,onSelect:i,renderSlide:(e,t,n)=>(0,_.jsx)(u,{id:e,page:t,thumb:n})})})]})]})}export{y as default};