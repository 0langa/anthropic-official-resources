import{zm as e}from"../../../../content-de-meta-oe42hj2y.js";import{u as t}from"../../../../WidgetCopy-l17vzxyj.js";import{i as n,n as r}from"../../../../ArtifactsTutorialKit-oupznxpc.js";import"../../../../_shared-itxbwuao.js";import{n as i,t as a}from"../../../../_kindDrawings-ov0j3ckd.js";import{i as o}from"../../../../_pane-mw2uo4lm.js";var s=e(),c=`
  ${o}
  ${i}

  .eop { display: flex; align-items: center; gap: 18px; padding: 20px 24px; border-radius: 12px; background: #f0efec; color: #0b0b0b; }
  .eop-from { flex: 0 1 auto; min-width: 0; list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
  .eop-place { display: flex; align-items: center; gap: 7px; min-height: 26px; padding: 5px 11px 5px 8px; border-radius: 8px; background: #fff; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.08);
    font-size: 12.5px; line-height: 16px; font-weight: 500; color: #3d3d3a; }
  .eop-place svg { flex: none; color: #73726c; }
  .eop-arrow { flex: none; display: block; color: #898781; }
  .eop-page { flex: 1; min-width: 0; padding: 10px 12px 12px; border-radius: 10px; background: #fff; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.08), 0 2px 8px rgba(11, 11, 11, 0.04); }
  .eop-head { display: flex; align-items: center; gap: 6px; margin: 0 0 10px; font-size: 12.5px; line-height: 16px; font-weight: 500; }
  .eop-head svg { flex: none; }
  .eop-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 8px; }
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
  /* narrower than that, the six cards take two rows */
  @container saa (max-width: 519px) {
    .eop-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  /* a phone: the places across the top, the page under them */
  @container saa (max-width: 439px) {
    .eop { flex-direction: column; align-items: stretch; gap: 10px; padding: 16px; }
    .eop-from { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .eop-arrow { align-self: center; transform: rotate(90deg); }
  }
`,l=[{key:"web",glyph:"Globe"},{key:"desktop",glyph:"Laptop"},{key:"mobile",glyph:"MobilePhone"},{key:"code",glyph:"Code"}],u=[{kind:"doc",title:"72%"},{kind:"slides",title:"84%"},{kind:"design",title:"58%"},{kind:"dashboard",title:"76%"},{kind:"motion",title:"64%"},{kind:"custom",title:"54%"}];function d(){let e=t();return(0,s.jsx)(r,{css:c,label:e("aria.root"),role:"img",children:(0,s.jsxs)("div",{className:"eop","aria-hidden":"true",children:[(0,s.jsx)("ul",{className:"eop-from",children:l.map(t=>(0,s.jsxs)("li",{className:"eop-place",children:[(0,s.jsx)(n,{name:t.glyph,size:14}),e(`from.${t.key}`)]},t.key))}),(0,s.jsx)(n,{name:"ArrowRight",size:20,className:"eop-arrow"}),(0,s.jsxs)("div",{className:"eop-page",children:[(0,s.jsxs)("p",{className:"eop-head",children:[(0,s.jsx)(n,{name:"Artifacts",size:14}),e("ui.artifacts")]}),(0,s.jsx)("div",{className:"eop-grid",children:u.map(e=>(0,s.jsxs)("div",{className:"eop-card",children:[(0,s.jsx)("div",{className:"eop-media",children:(0,s.jsx)(a,{kind:e.kind,hue:!0})}),(0,s.jsx)("span",{className:"eop-title",children:(0,s.jsx)("i",{style:{width:e.title}})})]},e.kind))})]})]})})}export{d as default};