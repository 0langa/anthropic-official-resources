import{Xm as e}from"../../../../content-de-meta-j2jjwhjm.js";import{u as t}from"../../../../WidgetCopy-lkias3g5.js";import{i as n,n as r}from"../../../../ArtifactsTutorialKit-cs5ggm95.js";import"../../../../_shared-i94gwrha.js";import{n as i}from"../../../../_kindDrawings-m4gj2fid.js";import{i as a}from"../../../../_pane-f09u23rg.js";var o=e(),s=`
  ${a}
  ${i}

  /* two rows, so the labels share a line and the cards share a top and a height, however a label wraps */
  .syp { display: grid; grid-template-columns: 196px auto 200px auto minmax(0, 1fr); grid-template-rows: auto 1fr; gap: 8px 12px; padding: 16px 24px 20px; border-radius: 12px; background: #f0efec; color: #0b0b0b; }
  .syp-col { display: contents; }
  .syp-col.is-1 .syp-lab { grid-area: 1 / 1; }
  .syp-col.is-1 .syp-card { grid-area: 2 / 1; }
  .syp-col.is-2 .syp-lab { grid-area: 1 / 3; }
  .syp-col.is-2 .syp-card { grid-area: 2 / 3; }
  .syp-col.is-3 .syp-lab { grid-area: 1 / 5; }
  .syp-col.is-3 .syp-card { grid-area: 2 / 5; }
  .syp-arrow { display: block; align-self: center; color: #898781; }
  .syp-arrow.is-a { grid-area: 2 / 2; }
  .syp-arrow.is-b { grid-area: 2 / 4; }
  .syp-lab { margin: 0; align-self: end; font-size: 12.5px; line-height: 18px; font-weight: 500; color: #5e5d59; text-wrap: balance; }
  .syp-card { min-width: 0; border-radius: 10px; background: #fff; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.08), 0 2px 8px rgba(11, 11, 11, 0.04); }
  .syp-bar { display: block; height: 4px; border-radius: 2px; background: rgba(11, 11, 11, 0.16); }

  /* a conversation: your message as the product draws it */
  .syp-chat { padding: 12px; display: grid; gap: 7px; align-content: center; justify-items: end; }
  .syp-you { max-width: 100%; padding: 5px 9px 6px; border-radius: 9px; background: rgba(11, 11, 11, 0.055); font-size: 11px; line-height: 15px; color: #0b0b0b; }
  .syp-you.is-long { justify-self: stretch; padding: 8px 10px 10px; display: grid; gap: 6px; }

  /* the skill */
  .syp-skill { padding: 10px 12px 11px; display: grid; gap: 5px; align-content: center; }
  .syp-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 0 0 3px; }
  .syp-name { min-width: 0; font-size: 12.5px; line-height: 16px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .syp-tag { flex: none; padding: 1px 6px; border-radius: 999px; background: rgba(11, 11, 11, 0.06); font-size: 10.5px; line-height: 14px; font-weight: 500; color: #5e5d59; }
  .syp-row { display: flex; align-items: center; gap: 6px; font-size: 11.5px; line-height: 16px; color: #3d3d3a; }
  .syp-row svg { flex: none; color: var(--saa-blue); }

  /* this week's deck, on the pile of earlier weeks */
  .syp-pile { position: relative; width: 142px; max-width: calc(100% - 14px); margin: 0 14px 10px 0; }
  .syp-sheet { position: relative; z-index: 3; display: block; width: 100%; aspect-ratio: 16 / 9; border-radius: 6px; overflow: hidden; background: #fff; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.08), 0 2px 6px rgba(11, 11, 11, 0.05); }
  .syp-pile i { position: absolute; top: 0; right: 0; bottom: 0; left: 0; border-radius: 6px; background: #fff; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.08); }
  .syp-pile i:nth-of-type(1) { z-index: 2; transform: translate(7px, 5px); }
  .syp-pile i:nth-of-type(2) { z-index: 1; transform: translate(14px, 10px); opacity: 0.8; }

  @container saa (max-width: 719px) {
    .syp { grid-template-columns: 172px auto 192px auto minmax(0, 1fr); gap: 8px; padding: 14px 16px 18px; }
    .syp-chat { padding: 10px; }
    .syp-pile { width: 120px; }
  }
  /* a side pane or a phone: one step per row */
  @container saa (max-width: 639px) {
    .syp { grid-template-columns: minmax(0, 1fr); grid-template-rows: none; gap: 8px; padding: 14px 16px 16px; }
    .syp-col.is-1 .syp-lab, .syp-col.is-1 .syp-card, .syp-col.is-2 .syp-lab, .syp-col.is-2 .syp-card, .syp-col.is-3 .syp-lab, .syp-col.is-3 .syp-card, .syp .syp-arrow.is-a, .syp .syp-arrow.is-b { grid-area: auto; }
    .syp-arrow { justify-self: center; margin: 2px 0; transform: rotate(90deg); }
    .syp-chat { padding: 12px; }
    .syp-pile { width: 116px; }
    /* the four lines two by two, so the card stays short */
    .syp-skill { grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 12px; }
    .syp-head { grid-column: 1 / -1; }
  }
  @container saa (max-width: 379px) {
    .syp-skill { grid-template-columns: minmax(0, 1fr); }
  }
`,c=["line1","line2","line3","line4"];function l(){let e=t();return(0,o.jsx)(r,{css:s,label:e("aria.root"),role:"img",children:(0,o.jsxs)("div",{className:"syp","aria-hidden":"true",children:[(0,o.jsxs)("div",{className:"syp-col is-1",children:[(0,o.jsx)("p",{className:"syp-lab",children:e("lab.describe")}),(0,o.jsx)("div",{className:"syp-card syp-chat",children:(0,o.jsxs)("span",{className:"syp-you is-long",children:[e("ask.long"),(0,o.jsx)("span",{className:"syp-bar",style:{width:"100%"}}),(0,o.jsx)("span",{className:"syp-bar",style:{width:"90%"}}),(0,o.jsx)("span",{className:"syp-bar",style:{width:"62%"}})]})})]}),(0,o.jsx)(n,{name:"ArrowRight",size:20,className:"syp-arrow is-a"}),(0,o.jsxs)("div",{className:"syp-col is-2",children:[(0,o.jsx)("p",{className:"syp-lab",children:e("lab.writes")}),(0,o.jsxs)("div",{className:"syp-card syp-skill",children:[(0,o.jsxs)("p",{className:"syp-head",children:[(0,o.jsx)("span",{className:"syp-name",children:e("skill.name")}),(0,o.jsx)("span",{className:"syp-tag",children:e("skill.tag")})]}),c.map(t=>(0,o.jsxs)("span",{className:"syp-row",children:[(0,o.jsx)(n,{name:"Check",size:14}),e(`skill.${t}`)]},t))]})]}),(0,o.jsx)(n,{name:"ArrowRight",size:20,className:"syp-arrow is-b"}),(0,o.jsxs)("div",{className:"syp-col is-3",children:[(0,o.jsx)("p",{className:"syp-lab",children:e("lab.each")}),(0,o.jsxs)("div",{className:"syp-card syp-chat",children:[(0,o.jsx)("span",{className:"syp-you",children:e("ask.short")}),(0,o.jsxs)("div",{className:"syp-pile",children:[(0,o.jsx)("span",{className:"syp-sheet",children:(0,o.jsxs)("svg",{className:"s3p-pic is-ours",viewBox:"0 0 96 54",preserveAspectRatio:"xMidYMid slice",children:[(0,o.jsx)("rect",{className:"p",x:"0",y:"0",width:"96",height:"54"}),(0,o.jsx)("rect",{className:"a",x:"10",y:"9",width:"44",height:"7",rx:"3.5"}),(0,o.jsx)("rect",{className:"c",x:"10",y:"24",width:"36",height:"5",rx:"2.5"}),(0,o.jsx)("rect",{className:"c",x:"10",y:"34",width:"28",height:"5",rx:"2.5"}),(0,o.jsx)("rect",{className:"b",x:"56",y:"35",width:"6",height:"10",rx:"2"}),(0,o.jsx)("rect",{className:"b",x:"65",y:"29",width:"6",height:"16",rx:"2"}),(0,o.jsx)("rect",{className:"b",x:"74",y:"33",width:"6",height:"12",rx:"2"}),(0,o.jsx)("rect",{className:"a",x:"83",y:"23",width:"6",height:"22",rx:"2"})]})}),(0,o.jsx)("i",{}),(0,o.jsx)("i",{})]})]})]})]})})}export{l as default};