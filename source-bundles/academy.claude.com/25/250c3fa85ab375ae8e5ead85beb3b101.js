import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{r as t}from"../../../../Icon-onl2ppoi.js";import{Im as n,Nm as r}from"../../../../content-de-meta-hica81ue.js";import{u as i}from"../../../../WidgetCopy-bc9oepjc.js";import{$t as a}from"../../../../index-k462235o.js";import{r as o,t as s}from"../../../../ClaudeDesignTutorialKit-hbg0mroe.js";import"../../../../_shared-l9w2gkjk.js";import{_ as c,a as l,c as u,d,f,l as p,m,o as h,p as g,s as _,u as v}from"../../../../_northwind-hgc8tuvk.js";var y=e(n(),1),b=r(),x="Notification center",S="Inbox list",C="Grouped by day",w="Split view",T=[S,C,w],E=`
  ${_}
  ${d}
  .cd .da-win {
    /* the pane's height: 40px header, then the editor (see --de-h) */
    --da-h: calc(((100cqw - 16px - 24px - 32px) / 3) * 5 / 3 + 144px);
    display: grid;
    grid-template-columns: minmax(0, 0.66fr) minmax(0, 1.35fr);
    gap: 8px;
    padding: 8px 8px 8px 0;
    background: var(--w-ground);
  }
  .cd .da-win.is-max { grid-template-columns: minmax(0, 1fr); padding-left: 8px; }
  .cd .da-win.is-max .da-chat { display: none; }

  .cd .da-chat {
    display: flex;
    flex-direction: column;
    height: var(--da-h);
    overflow: hidden;
    padding: 20px 8px 16px 16px;
    min-width: 0;
  }
  .cd .da-user {
    align-self: flex-end;
    max-width: 96%;
    padding: 12px 16px;
    border-radius: 12px;
    background: var(--w-wash);
    font-size: 15px;
    line-height: 20px;
    color: var(--w-fg);
  }
  .cd .da-claude {
    margin: 24px 0 0;
    padding-left: 4px;
    font-family: var(--cd-serif);
    font-size: 16px;
    line-height: 24px;
    color: var(--w-fg);
  }
  .cd .da-claude p { margin: 0 0 12px; }
  .cd .da-card {
    container: da-card / inline-size;
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 4px;
    padding: 8px 10px 8px 68px;
    min-height: 70px;
    border-radius: 8px;
    border: 0.5px solid var(--w-hair);
    background: var(--w-panel);
    overflow: hidden;
  }
  .cd .da-page {
    position: absolute;
    left: 10px;
    bottom: -18px;
    width: 52px;
    height: 71px;
    border-radius: 5px;
    background: var(--w-panel);
    border: 0.5px solid var(--w-hair-2);
    box-shadow: 0 1px 2px rgba(11, 11, 11, 0.06);
    transform: rotate(-4deg);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 14px;
    color: var(--w-fg-3);
  }
  .cd .da-card-t { min-width: 0; flex: 1; }
  .cd .da-card-t b {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .cd .da-card-t > span {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    line-height: 17px;
    color: var(--w-fg-3);
    white-space: nowrap;
    overflow: hidden;
  }
  .cd .da-sec {
    flex: none;
    height: 32px;
    padding: 0 12px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 32px;
    color: var(--w-fg);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 0 0 1px var(--w-hair), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  /* Hide cannot be pressed here. In a narrow card it goes, and the sheet is
     drawn a size smaller, so the title and the line under it show whole. */
  @container da-card (max-width: 319px) {
    .cd .da-sec { display: none; }
    .cd .da-page { left: 6px; width: 40px; height: 56px; padding-top: 11px; }
    .cd .da-card-t { margin: 0 -4px 0 -14px; }
    .cd .da-card-t > span { gap: 3px; }
  }
  .cd .da-spark { margin-top: 16px; }
  /* Room for two lines, the longest caption, so switching moves nothing. */
  .cd .da-cap { min-height: 46px; }

  @container cd (max-width: 640px) {
    .cd .da-win { grid-template-columns: minmax(0, 1fr); padding-left: 8px; }
    .cd .da-chat { display: none; }
    .cd .da-cap { min-height: 68px; }
  }
`;function D(){let e=i(),n=c(),[r,d]=(0,y.useState)("owner"),[_,D]=(0,y.useState)(!1),[O,k]=(0,y.useState)(!1),[A,j]=(0,y.useState)(null),[M,N]=(0,y.useState)(!1),[P,F]=(0,y.useState)(0),I=r==="teammate";(0,y.useEffect)(()=>{if(!_)return;let e=e=>{e.key==="Escape"&&D(!1)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[_]);let L=e=>{d(e),D(!1),j(null),N(!1)},R=[n.size([360,"fill"],[50,"hug"]),n.stack({column:!1,gap:8,padding:12})],z=[n.size([98,"hug"],[28,"fixed"]),n.paddingPerSide,{title:e("panel.appearance"),rows:[n.fill("#fffefb"),n.radius(7),{label:e("panel.border"),controls:[{kind:"strokes",names:[e("panel.borderNone"),e("panel.borderSolid"),e("panel.borderDashed"),e("panel.borderDotted")],on:1}]}]}],B=[];A==="markAll"?B=z:A==="filters"&&(B=R);let V=[{id:"ab",level:0,name:S,glyph:"frame",caret:"open"},{id:"head",level:1,name:e("layer.header"),glyph:"row",caret:A==="markAll"?"open":"closed"},...A==="markAll"?[{id:"h1",level:2,name:e("layer.heading"),detail:"“Notifications”",glyph:"text"},{id:"btn",level:2,name:e("layer.button"),detail:"“Mark all read”",glyph:"dot",selected:!0}]:[],{id:"filters",level:1,name:e("layer.row"),glyph:"row",caret:"closed",selected:A==="filters"},{id:"list",level:1,name:e("layer.list"),glyph:"dot"}],H=I&&!_?{live:M?{filters:e("aria.pick.filters"),markAll:e("aria.pick.markAll")}:{},onPick:j,selected:A}:void 0,U=e("caption.owner");I?(U=e("caption.teammate"),_?U=e("caption.teammatePlaying"):M&&A?U=e("caption.teammateInspect"):M&&(U=e("caption.teammatePanel"))):_&&(U=e("caption.ownerPlaying"));let W=O||I;return(0,b.jsxs)(s,{css:E,cssId:"academy-cd-artboards",children:[(0,b.jsxs)("div",{className:"cd-top",children:[(0,b.jsx)("p",{className:"cd-task",children:e("task")}),(0,b.jsxs)("span",{className:"cd-seg",role:"group","aria-label":e("viewAs.label"),children:[(0,b.jsx)("button",{type:"button","aria-pressed":!I,onClick:()=>L("owner"),children:e("viewAs.owner")}),(0,b.jsx)("button",{type:"button","aria-pressed":I,onClick:()=>L("teammate"),children:e("viewAs.teammate")})]})]}),(0,b.jsxs)("div",{className:o("cd-win da-win",W&&"is-max"),children:[(0,b.jsxs)("div",{className:"da-chat",children:[(0,b.jsx)("div",{className:"da-user",children:e("chat.user")}),(0,b.jsx)("div",{className:"da-claude",children:(0,b.jsx)("p",{children:e("chat.claude")})}),(0,b.jsxs)("div",{className:"da-card",children:[(0,b.jsx)("span",{className:"da-page","aria-hidden":"true",children:(0,b.jsx)(t,{name:"Globe",size:"md"})}),(0,b.jsxs)("span",{className:"da-card-t",children:[(0,b.jsx)("b",{children:x}),(0,b.jsxs)("span",{children:[e("ui.kindDesign"),(0,b.jsx)("span",{"aria-hidden":"true",children:"·"}),(0,b.jsx)(t,{name:"Lock",size:"xs"}),e("ui.onlyYou")]})]}),(0,b.jsx)("span",{className:"da-sec is-inert","aria-hidden":"true",children:e("ui.hide")})]}),(0,b.jsx)("div",{className:"da-spark","aria-hidden":"true",children:(0,b.jsx)(a,{size:32})})]}),(0,b.jsxs)("div",{className:"dp-pane",children:[(0,b.jsx)(g,{title:x,expanded:O,onExpand:()=>k(e=>!e),viewer:I}),(0,b.jsxs)(f,{viewer:I,zoom:"fit3",zoomText:"60%",cam:P,onToggleProperties:I?()=>N(e=>!e):void 0,propertiesLive:I&&!M&&!_,panel:M?(0,b.jsx)(m,{viewer:!0,outline:V,sections:B,onClose:()=>N(!1)}):null,children:[(0,b.jsx)(p,{title:S,prototype:!0,playing:_,viewer:I,playLive:!_&&!I,onPlay:()=>{D(e=>!e),F(0)},children:(0,b.jsx)(h,{playing:_,editing:H},_?"play":"still")}),(0,b.jsx)(p,{title:C,children:(0,b.jsx)(l,{})}),(0,b.jsx)(p,{title:w,children:(0,b.jsx)(u,{})})]})]})]}),(0,b.jsx)(v,{titles:T,cam:P,onPick:F}),(0,b.jsx)("p",{className:"cd-cap da-cap","aria-live":"polite",children:U})]})}export{D as default};