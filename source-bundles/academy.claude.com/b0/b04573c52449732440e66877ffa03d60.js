import{r as e}from"../../../../react-n2kbymz5.js";import{A as t}from"../../../../ResourceWidget-fcv47qgx.js";import{i as n,n as r}from"../../../../ArtifactsTutorialKit-hzaawq1p.js";import"../../../../_shared-go3c9314.js";import{i,n as a,r as o}from"../../../../_kindDrawings-f9kuezlz.js";import{i as s}from"../../../../_pane-hza16tv9.js";var c=e(),l=`
  ${s}
  ${a}

  .eop { display: flex; align-items: center; gap: 18px; padding: 20px 24px; border-radius: 12px; background: #f0efec; color: #0b0b0b; }
  .eop-from { flex: 0 1 auto; min-width: 0; list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
  .eop-place { display: flex; align-items: center; gap: 7px; min-height: 26px; padding: 5px 11px 5px 8px; border-radius: 8px; background: #fff; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.08);
    font-size: 12.5px; line-height: 16px; font-weight: 500; color: #3d3d3a; }
  .eop-place svg { flex: none; color: #73726c; }
  .eop-arrow { flex: none; display: block; color: #898781; }
  .eop-page { flex: 1; min-width: 0; padding: 10px 12px 12px; border-radius: 10px; background: #fff; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.08), 0 2px 8px rgba(11, 11, 11, 0.04); }
  .eop-head { display: flex; align-items: center; gap: 6px; margin: 0 0 10px; font-size: 12.5px; line-height: 16px; font-weight: 500; }
  .eop-head svg { flex: none; }
  .eop-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px; }
  .eop-card { min-width: 0; border-radius: 6px; background: #fff; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.08); overflow: hidden; }
  .eop-media { position: relative; width: 100%; aspect-ratio: 16 / 10; overflow: hidden; border-bottom: 1px solid rgba(11, 11, 11, 0.06); }
  .eop-title { display: block; padding: 5px 6px 6px; }
  .eop-title i { display: block; height: 4px; border-radius: 2px; background: rgba(11, 11, 11, 0.13); }

  /* a side pane or a tablet: still one short strip, drawn tighter */
  @container saa (max-width: 659px) {
    .eop { padding: 18px; gap: 12px; }
    .eop-page { padding: 10px 10px 11px; }
    .eop-grid { gap: 6px; }
  }
  /* narrower than that, the five cards take two rows: three, then two in the middle */
  @container saa (max-width: 519px) {
    .eop-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }
    .eop-card { grid-column: span 2; }
    .eop-card:nth-child(4) { grid-column: 2 / span 2; }
  }
  /* a phone: the places across the top, the page under them */
  @container saa (max-width: 439px) {
    .eop { flex-direction: column; align-items: stretch; gap: 10px; padding: 16px; }
    .eop-from { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .eop-arrow { align-self: center; transform: rotate(90deg); }
  }
`,u=[{key:"web",glyph:"Globe"},{key:"desktop",glyph:"Laptop"},{key:"mobile",glyph:"MobilePhone"},{key:"code",glyph:"Code"}],d=[{kind:"doc",title:"72%"},{kind:"slides",title:"84%"},{kind:"sheets",title:"58%"},{kind:"dashboard",title:"76%"},{kind:"motion",title:"64%"}];function f(){let e=t();return(0,c.jsx)(r,{css:l,label:e("aria.root"),role:"img",children:(0,c.jsxs)("div",{className:"eop","aria-hidden":"true",children:[(0,c.jsx)("ul",{className:"eop-from",children:u.map(t=>(0,c.jsxs)("li",{className:"eop-place",children:[(0,c.jsx)(n,{name:t.glyph,size:14}),e(`from.${t.key}`)]},t.key))}),(0,c.jsx)(n,{name:"ArrowRight",size:20,className:"eop-arrow"}),(0,c.jsxs)("div",{className:"eop-page",children:[(0,c.jsxs)("p",{className:"eop-head",children:[(0,c.jsx)(n,{name:"Artifacts",size:14}),e("ui.artifacts")]}),(0,c.jsx)("div",{className:"eop-grid",children:d.map(e=>(0,c.jsxs)("div",{className:"eop-card",style:{background:i(e.kind)},children:[(0,c.jsx)("div",{className:"eop-media",children:(0,c.jsx)(o,{kind:e.kind})}),(0,c.jsx)("span",{className:"eop-title",children:(0,c.jsx)("i",{style:{width:e.title}})})]},e.kind))})]})]})})}export{f as default};