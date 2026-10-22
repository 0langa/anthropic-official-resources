import{Nm as e}from"../../../../content-de-meta-e1frxw34.js";import{t}from"../../../../AppWindow-e62vhki9.js";import{u as n}from"../../../../WidgetCopy-h11airhs.js";import{n as r}from"../../../../ArtifactsTutorialKit-icredlwg.js";import{a as i,d as a,i as o,l as s,n as c,o as l,u}from"../../../../_window-ct5okki0.js";var d=e(),f=["review","content","decide"],p={review:0,content:0,decide:3},m=`
  ${a}
  ${i}
  ${l("ax",680,"minmax(276px, 39%)")}
  ${s}
  /* the window sits close under the line of the page that introduces it */
  .ax-up { margin-top: -16px; }
  /* the pane is as tall as its picture */
  .ax .la-pane { align-self: start; }
  /* the picture fills the pane under the header, edge to edge: the margin and round corners it has in running text go */
  .ax-shot p, .ax-shot :has(> img) { margin: 0; border-radius: 0; }
`,h=e=>f.includes(e);function g({variant:e=f[0],children:i}){let a=n(),s=h(e)?e:f[0],l=Array.from({length:p[s]},(e,t)=>({name:a(`${s}.file${t+1}`),tag:a(`${s}.fileTag`)}));return(0,d.jsx)(r,{css:m,label:a("aria"),children:(0,d.jsx)("div",{className:"ax-up",children:(0,d.jsx)(t,{children:(0,d.jsxs)("div",{className:"cw ax",children:[(0,d.jsxs)("div",{className:"cw-chat",children:[(0,d.jsx)(c,{label:a("ui.you"),files:l,attachedLabel:a("ui.attached"),children:a(`${s}.ask`)}),(0,d.jsx)(o,{})]}),(0,d.jsxs)("section",{className:"la-pane",children:[(0,d.jsx)(u,{name:a(`${s}.name`),shareLabel:a("ui.share")}),(0,d.jsx)("div",{className:"ax-shot",children:i})]})]})})})})}export{g as default};