import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{r as t}from"../../../../Icon-fw289bvz.js";import{Im as n,Nm as r}from"../../../../content-de-meta-ekk7gs5w.js";import{o as ee}from"../../../../ResourceWidget-inr45rev.js";import{u as i}from"../../../../WidgetCopy-h9nkp96o.js";import{qt as a}from"../../../../index-hsoga37k.js";import{r as o,t as te}from"../../../../ClaudeDesignTutorialKit-ms53cw2f.js";import"../../../../_shared-d3hbewge.js";import{_ as ne,a as re,c as ie,d as s,f as ae,g as oe,h as se,i as ce,l as c,m as le,n as l,o as ue,p as de,r as fe,s as u,t as d,u as f}from"../../../../_northwind-b1ghs1xt.js";var p=e(n(),1),m=r(),pe="Notification center",h="Inbox list",g="Grouped by day",_="Split view",v="Empty state",y={initial:"D",hue:"#a3651f"},me="Unread count in the header updates as rows are marked read",he=3,ge=360,b=26,_e=82,ve={min:0,max:32};function ye(e){let t=d.length;return e.direction==="row"?b+2*e.padding:t*b+(t-1)*e.gap+2*e.padding}var be=`
  ${u}
  ${s}
  .cd .ra-win { padding: 8px; background: var(--w-ground); }

  /* task card (page chrome) */
  .cd .ra-top {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: start;
    gap: 6px 14px;
    margin-bottom: 12px;
    padding: 12px 14px;
    border: 1px solid var(--cd-hair);
    border-radius: 12px;
    background: var(--cd-card);
  }
  .cd .ra-count {
    margin: 0;
    padding-top: 1px;
    font-size: 15px;
    line-height: 1.5;
    font-weight: 600;
    color: var(--cd-ink);
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }
  .cd .ra-top .cd-task { min-height: 72px; flex: none; }
  .cd .ra-btns { display: flex; gap: 8px; }
  .cd .ra-btns .cd-btn[aria-disabled="true"] { opacity: 0.45; cursor: default; }
  .cd .ra-btns .cd-btn.is-ready {
    background: var(--cd-primary);
    border-color: transparent;
    color: var(--cd-on-primary);
  }

  /* The exercise's own pointers to the one thing to do next. Page chrome, so
     they do not pass for something the product draws. */
  .cd .ra-mark {
    position: absolute;
    z-index: 6;
    left: 50%;
    top: 0;
    transform: translate(-50%, -80%);
    padding: 5px 12px;
    border-radius: 999px;
    background: var(--cd-page);
    color: var(--cd-ink);
    font: 500 15px/22px var(--cd-sans);
    white-space: nowrap;
    box-shadow: 0 0 0 2px var(--cd-accent), 0 6px 16px rgba(0, 0, 0, 0.22);
    pointer-events: none;
  }
  .cd .ra-mark::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 10px;
    height: 10px;
    transform: translateX(-50%) rotate(45deg);
    background: var(--cd-page);
    box-shadow: 2px 2px 0 0 var(--cd-accent);
  }
  /* The row pointer sits over the empty end of the row, past the last chip,
     and the row carries the accent ring, so no single chip reads as the
     target. In this step a click anywhere on the row selects the row. */
  .cd .ra-mark.is-row { left: auto; right: 6px; transform: translateY(-80%); }
  .cd .ra-mark.is-row::after { left: auto; right: 14px; transform: rotate(45deg); }
  .cd .ra-win .nw-filters.is-marked {
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0 0 0 2px var(--cd-accent);
    animation: ra-pulse 1.6s ease-in-out infinite;
  }
  .cd .ra-mark.is-gap { left: 12px; transform: translateY(-80%); }
  .cd .ra-mark.is-gap::after { left: 104px; }
  /* While the pointer is up, the Gap field carries the same accent ring, so
     the control to type in stands out from the inert rows around it. */
  .cd .ra-win .de-prow.has-mark .de-plabel { color: var(--w-fg); font-weight: 580; }
  .cd .ra-win .de-prow.has-mark .de-field.is-live {
    background: #ffffff;
    box-shadow: 0 0 0 2px var(--cd-accent);
    animation: ra-pulse 1.6s ease-in-out infinite;
  }
  @keyframes ra-pulse {
    0%, 100% { box-shadow: 0 0 0 2px var(--cd-accent), 0 0 0 2px rgba(42, 120, 214, 0.35); }
    50% { box-shadow: 0 0 0 2px var(--cd-accent), 0 0 0 7px rgba(42, 120, 214, 0); }
  }

  /* Step 1: empty canvas deselects. The hit area lies under the artboards. */
  .cd .ra-win .de-world { z-index: 1; pointer-events: none; }
  .cd .ra-win .de-frame { pointer-events: auto; }
  .cd .ra-clear {
    appearance: none;
    position: absolute;
    inset: 0;
    z-index: 0;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: default;
  }
  .cd .ra-clear:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--w-blue), inset 0 0 0 5px var(--w-blue-tint);
  }

  /* the exercise's move control, floating over the selected chip */
  .cd .nw .ra-mover {
    position: absolute;
    z-index: 6;
    left: 50%;
    bottom: calc(100% + 7px);
    transform: translateX(-50%);
    display: inline-flex;
    gap: 2px;
    padding: 3px;
    border-radius: 999px;
    background: var(--cd-page);
    color: var(--cd-ink);
    box-shadow: 0 0 0 2px var(--cd-accent), 0 6px 16px rgba(0, 0, 0, 0.22);
  }
  .cd .nw .ra-mover button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 999px;
    color: var(--cd-ink);
    cursor: pointer;
  }
  .cd .nw .ra-mover.is-side {
    left: calc(100% + 7px);
    bottom: auto;
    top: 50%;
    transform: translateY(-50%);
  }
  .cd .nw .ra-mover button:hover { background: var(--cd-card); }
  .cd .nw .ra-mover button[aria-disabled="true"] { opacity: 0.35; cursor: default; }
  .cd .nw .ra-mover button:focus-visible {
    outline: 2px solid var(--cd-accent);
    outline-offset: 1px;
  }

  /* comment pin, card, thread and toast */
  .cd .ra-pin {
    position: absolute;
    z-index: 7;
    left: calc(12px + var(--ab-w) * 0.5);
    top: calc(84px + var(--ab-h) * 0.42);
    width: 32px;
    height: 32px;
  }
  .cd .ra-pin::before {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 0 50% 50% 50%;
    background: var(--w-blue);
  }
  /* A sent comment's pin is white with a hairline and a small shadow. Blue is
     only the draft that has not been posted yet. */
  .cd .ra-pin.is-read::before {
    border: 1px solid var(--w-hair);
    background: var(--w-panel);
    box-shadow: var(--w-sh-sm);
  }
  .cd .ra-pin::after {
    content: "";
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: #ffffff;
  }
  .cd .ra-pin > span {
    position: absolute;
    z-index: 1;
    inset: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${y.hue};
    font-size: 10px;
    font-weight: 500;
    color: #ffffff;
  }
  .cd .ra-pin > span.is-claude { background: var(--w-brand); }
  .cd .ra-card {
    position: absolute;
    z-index: 7;
    left: calc(12px + var(--ab-w) * 0.5 + 36px);
    top: calc(84px + var(--ab-h) * 0.3);
    width: 300px;
    max-height: 340px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid var(--w-hair);
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
    font-size: 11px;
    line-height: 17px;
    color: var(--w-fg);
  }
  .cd .ra-draft { display: flex; flex-direction: column; gap: 12px; padding: 12px; }
  .cd .ra-field { min-height: 38px; font-size: 13px; line-height: 19px; color: var(--w-fg); }
  .cd .ra-actions { display: flex; align-items: center; gap: 8px; margin: 0 -6px -6px 0; }
  .cd .ra-check { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; line-height: 17px; }
  .cd .ra-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border-radius: 4px;
    background: var(--w-blue);
    color: #ffffff;
  }
  .cd .ra-send {
    appearance: none;
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: 0;
    border-radius: 6px;
    background: var(--w-brand);
    color: #ffffff;
    cursor: pointer;
  }
  .cd .ra-send:hover { background: #d97757; }
  .cd .ra-send:focus-visible,
  .cd .ra-send.is-live { box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px var(--w-blue); outline: none; }
  /* No title bar: resolve, more and close end the first comment's line. */
  .cd .ra-tacts { display: inline-flex; flex: none; margin-left: auto; }
  .cd .ra-msgs { display: flex; flex-direction: column; gap: 8px; padding: 12px; }
  .cd .ra-msg { display: flex; flex-direction: column; gap: 2px; }
  .cd .ra-face {
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${y.hue};
    font-size: 10px;
    font-weight: 500;
    color: #ffffff;
  }
  .cd .ra-face.is-claude { background: var(--w-brand); }
  /* The bar that stands for the commenter's name. */
  .cd .ra-name {
    flex: none;
    width: 64px;
    height: 6px;
    margin: 0 2px;
    border-radius: 3px;
    background: var(--w-hair-2);
  }
  .cd .ra-by {
    display: flex;
    align-items: center;
    gap: 4px;
    min-height: 24px;
    font-size: 12px;
    line-height: 17px;
  }
  .cd .ra-by b { font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .cd .ra-when { flex: none; font-size: 11px; color: var(--w-fg-3); }
  .cd .ra-msg p { margin: 0; font-size: 13px; line-height: 19px; color: var(--w-fg); }
  .cd .ra-msg p.is-status { font-size: 12px; color: var(--w-fg-3); }
  .cd .ra-toast {
    position: absolute;
    z-index: 8;
    right: 12px;
    top: 8px;
    max-width: 280px;
    padding: 8px 12px;
    border-radius: 8px;
    background: var(--w-fg);
    color: #ffffff;
    font-size: 14px;
    line-height: 20px;
    box-shadow: var(--w-sh-lg);
  }
  .cd .ra-note {
    right: 12px;
    top: calc(84px + var(--ab-h) + 16px);
    width: 228px;
  }

  @container cd (max-width: 640px) {
    .cd .ra-top { grid-template-columns: auto minmax(0, 1fr); }
    .cd .ra-btns { grid-column: 1 / -1; }
    .cd .ra-btns .cd-btn { flex: 1; min-height: 44px; }
    .cd .ra-top .cd-task { min-height: 120px; }
    .cd .ra-pin { left: calc(50% - 4px); }
    .cd .ra-card {
      left: 50%;
      top: auto;
      bottom: 12px;
      transform: translateX(-50%);
      width: min(300px, calc(100% - 24px));
      max-height: 60%;
    }
    /* The comment belongs to the first artboard and leaves the view with it. */
    .cd .ra-pin.is-away, .cd .ra-card.is-away { display: none; }
    .cd .ra-note { display: none; }
    /* The sheet is short: drop the align strip and give it a little more
       height so Gap and Padding are in view without scrolling. */
    .cd .ra-win .de-dock { height: 52%; }
    .cd .ra-win .de-align { display: none; }
  }
`;function x(){let e=i(),n=ne(),r=ee(),[s,u]=(0,p.useState)(0),[x,S]=(0,p.useState)(null),[C,w]=(0,p.useState)(d),[T,E]=(0,p.useState)(l),[D,O]=(0,p.useState)(!1),[k,A]=(0,p.useState)(!1),[j,M]=(0,p.useState)("idle"),[N,P]=(0,p.useState)(0),F=(0,p.useRef)([]),I=(0,p.useRef)(null),L=(0,p.useRef)(null),R=(0,p.useCallback)(()=>{F.current.forEach(e=>window.clearTimeout(e)),F.current=[]},[]),z=(e,t)=>{F.current.push(window.setTimeout(e,t))};(0,p.useEffect)(()=>R,[R]),(0,p.useEffect)(()=>{j==="replied"&&r()},[j,r]);let B=C.indexOf("approvals"),V=B<C.indexOf("mentions"),H=s===0&&D||s===1&&V,xe=()=>{R(),u(0),S(null),w(d),E(l),O(!1),A(!1),M("idle"),P(0)},Se=()=>{H&&(P(0),s===0?(S("chip:approvals"),u(1)):(S(null),u(2)))},U=e=>{let t=B+e;if(t<1||t>=C.length)return;let n=[...C];n.splice(B,1),n.splice(t,0,"approvals"),w(n),A(!0),z(()=>A(!1),1100),z(()=>{(e===-1?I:L).current?.focus({preventScroll:!0})},0)},Ce=e=>{E(t=>({...t,...e})),O(!0)},we=()=>{M("working"),z(()=>{M("replied"),P(3)},1900)},W=T.direction==="column",G=[];x==="filters"?G=[n.size([ge,"fill"],[ye(T),"hug"]),n.stack({column:W,gap:T.gap,padding:T.padding,edit:{limit:ve,dirNames:[e("aria.dir.row"),e("aria.dir.column")],onChange:Ce},gapMark:D?void 0:(0,m.jsx)("span",{className:"ra-mark is-gap","aria-hidden":"true",children:e("mark.gap")})})]:x==="chip:approvals"&&(G=[n.size([_e,"hug"],[b,"fixed"]),n.paddingPerSide,{title:e("panel.text"),add:!0,rows:[{label:e("panel.textStyle"),controls:[{kind:"select",value:e("panel.styleButton")}]},{label:e("panel.color"),controls:[{kind:"color",chip:"#46534d",value:"#46534D"}]}]},{title:e("panel.appearance"),rows:[n.fill("#fffefb"),n.radius(99)]}]);let Te=C.map((t,n)=>({id:`chip-${t}`,level:2,name:e("layer.button"),detail:`“${ce[t]}”`,glyph:"dot",selected:x===`chip:${t}`,drop:k&&n===B})),Ee=[{id:"ab",level:0,name:h,glyph:"frame",caret:"open"},{id:"head",level:1,name:e("layer.header"),glyph:"row",caret:"closed"},{id:"filters",level:1,name:e("layer.row"),glyph:W?"column":"row",caret:"open",selected:x==="filters",onSelect:s===0?()=>S("filters"):void 0},...Te,{id:"list",level:1,name:e("layer.list"),glyph:"column",caret:"closed"}],K=(0,m.jsxs)("span",{className:o("ra-mover",W&&"is-side"),children:[(0,m.jsx)("button",{ref:I,type:"button","aria-label":e(W?"aria.moveUp":"aria.moveLeft"),"aria-disabled":B<=1,onClick:()=>U(-1),children:(0,m.jsx)(t,{name:W?"ArrowUp":"ArrowLeft",size:"sm"})}),(0,m.jsx)("button",{ref:L,type:"button","aria-label":e(W?"aria.moveDown":"aria.moveRight"),"aria-disabled":B>=C.length-1,onClick:()=>U(1),children:(0,m.jsx)(t,{name:W?"ArrowDown":"ArrowRight",size:"sm"})})]}),q;s===0?q={live:{filters:e("aria.pick.filters")},onPick:S,selected:x,grips:(0,m.jsx)(se,{}),filtersMark:x!=="filters"&&!D?(0,m.jsx)("span",{className:"ra-mark is-row","aria-hidden":"true",children:e("mark.row")}):void 0}:s===1?q={live:{},selected:x,showSlots:!V||k,liveSlot:k?null:B-1,chipTools:K}:j==="idle"&&(q={live:{list:e("aria.commentList")},onPick:()=>M("draft"),selected:null,commenting:!0});let J=e("step1.task");s===0&&D?J=e("step1.done"):s===0&&x==="filters"?J=e("step1.selected"):s===1?J=e(V?"step2.done":"step2.task"):s===2&&(J=e("step3.task"),j==="draft"?J=e("step3.draft"):j==="working"?J=e("step3.working"):j==="replied"&&(J=e("step3.done")));let Y="focus",X="76%";s===2&&(Y=j==="replied"?"fit4":"fit3",X=j==="replied"?"44%":"60%");let Z=s===2,Q=j==="working"||j==="replied",$=N!==0&&"is-away",De=j==="replied"?[h,g,_,v]:[h,g,_];return(0,m.jsxs)(te,{css:be,cssId:"academy-cd-refine",children:[(0,m.jsxs)("div",{className:"ra-top",children:[(0,m.jsx)("p",{className:"ra-count",children:e("progress",{n:s+1,total:he})}),(0,m.jsx)("p",{className:"cd-task","aria-live":"polite",children:J}),(0,m.jsxs)("div",{className:"ra-btns",children:[(0,m.jsx)("button",{type:"button",className:"cd-btn",onClick:xe,children:e("startOver")}),(0,m.jsx)("button",{type:"button",className:o("cd-btn",H&&"is-ready"),"aria-disabled":!H,onClick:Se,children:e("next")})]})]}),(0,m.jsx)("div",{className:"cd-win ra-win",children:(0,m.jsxs)("div",{className:"dp-pane",children:[(0,m.jsx)(de,{title:pe,expanded:!0,commenting:Z}),(0,m.jsxs)(ae,{zoom:Y,zoomText:X,tall:!0,cam:N,panel:s<2?(0,m.jsx)(le,{outline:Ee,sections:G}):null,overlay:(0,m.jsxs)(m.Fragment,{children:[s===0?(0,m.jsx)("button",{type:"button",className:"ra-clear","aria-label":e("aria.deselect"),onClick:()=>S(null)}):null,Z?(0,m.jsx)(oe,{className:"ra-note",children:me}):null,j==="draft"||Q?(0,m.jsx)("span",{className:o("ra-pin",Q&&"is-read",$),"aria-hidden":"true",children:j==="working"?(0,m.jsx)("span",{className:"is-claude",children:(0,m.jsx)(a,{size:12,color:"white"})}):(0,m.jsx)("span",{children:y.initial})}):null,j==="draft"?(0,m.jsx)("div",{className:o("ra-card",$),role:"group","aria-label":e("ui.addComment"),children:(0,m.jsxs)("div",{className:"ra-draft",children:[(0,m.jsxs)("div",{className:"ra-field",children:[(0,m.jsx)("span",{className:"cd-ctag",children:e("ui.claudeTag")})," ",e("comment.text")]}),(0,m.jsxs)("div",{className:"ra-actions",children:[(0,m.jsxs)("span",{className:"ra-check",children:[(0,m.jsx)("span",{className:"ra-box","aria-hidden":"true",children:(0,m.jsx)(t,{name:"Check",size:"xs"})}),e("ui.sendToClaude")]}),(0,m.jsx)("button",{type:"button",className:"ra-send is-live","aria-label":e("ui.sendToClaude"),onClick:we,children:(0,m.jsx)(t,{name:"ArrowUp",size:"sm"})})]})]})}):null,Q?(0,m.jsx)("div",{className:o("ra-card",$),role:"group","aria-label":e("ui.yourComment"),children:(0,m.jsxs)("div",{className:"ra-msgs",children:[(0,m.jsxs)("div",{className:"ra-msg",children:[(0,m.jsxs)("span",{className:"ra-by",children:[(0,m.jsx)("span",{className:"ra-face","aria-hidden":"true",children:y.initial}),(0,m.jsx)("i",{className:"ra-name","aria-hidden":"true"}),(0,m.jsx)("span",{className:"ra-when",children:e("ui.now")}),(0,m.jsxs)("span",{className:"ra-tacts","aria-hidden":"true",children:[(0,m.jsx)("span",{className:"cd-gb",children:(0,m.jsx)(t,{name:"Check",size:"sm"})}),(0,m.jsx)("span",{className:"cd-gb",children:(0,m.jsx)(t,{name:"DotsHorizontal",size:"sm"})}),(0,m.jsx)("span",{className:"cd-gb",children:(0,m.jsx)(t,{name:"X",size:"sm"})})]})]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{className:"cd-at",children:e("ui.claudeTag")})," ",e("comment.text")]})]}),(0,m.jsxs)("div",{className:"ra-msg",children:[(0,m.jsxs)("span",{className:"ra-by",children:[(0,m.jsx)("span",{className:"ra-face is-claude","aria-hidden":"true",children:(0,m.jsx)(a,{size:12,color:"white"})}),(0,m.jsx)("b",{children:e("ui.claude")}),(0,m.jsx)("span",{className:"ra-when",children:e("ui.now")})]}),j==="replied"?(0,m.jsx)("p",{children:e("claude.reply")}):(0,m.jsx)("p",{className:"is-status",children:e("ui.working")})]})]})}):null,j==="working"?(0,m.jsx)("div",{className:"ra-toast","aria-hidden":"true",children:e("ui.sentToast")}):null]}),children:[(0,m.jsx)(c,{title:h,prototype:!0,children:(0,m.jsx)(ue,{chips:C,editing:q,thumb:j==="replied",filterLayout:T})}),(0,m.jsx)(c,{title:g,children:(0,m.jsx)(re,{thumb:j==="replied"})}),(0,m.jsx)(c,{title:_,children:(0,m.jsx)(ie,{thumb:j==="replied"})}),j==="replied"?(0,m.jsx)(c,{title:v,fresh:!0,children:(0,m.jsx)(fe,{chips:C,thumb:!0,filterLayout:T})}):null]})]})}),(0,m.jsx)(f,{titles:De,cam:N,onPick:P,roomForFour:!0})]})}export{x as default};