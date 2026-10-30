import{Xm as e}from"../../../../content-de-meta-j2jjwhjm.js";import{u as t}from"../../../../WidgetCopy-lkias3g5.js";import{i as n,n as r,o as i}from"../../../../ArtifactsTutorialKit-cs5ggm95.js";import"../../../../_shared-i94gwrha.js";import{n as a,t as o}from"../../../../_kindDrawings-m4gj2fid.js";import{i as s}from"../../../../_pane-f09u23rg.js";import{n as c}from"../../../../_deck-osbepbiz.js";var l=e(),u="#7a6ba8",d="#3f7a75",f=`
  ${s}
  ${a}

  /* two rows, so the two labels share a line and the two cards share a top and a height, however either label wraps */
  .swt { display: grid; grid-template-columns: 240px auto minmax(0, 1fr); grid-template-rows: auto 1fr; gap: 8px 18px; padding: 16px 24px 20px; border-radius: 12px; background: #f0efec; color: #0b0b0b; }
  .swt-col { display: contents; }
  .swt-col.is-share .swt-lab { grid-area: 1 / 1; }
  .swt-col.is-share .swt-card { grid-area: 2 / 1; }
  .swt-col.is-together .swt-lab { grid-area: 1 / 3; }
  .swt-col.is-together .swt-card { grid-area: 2 / 3; }
  .swt-lab { margin: 0; min-height: 20px; align-self: end; display: flex; align-items: center; flex-wrap: wrap; gap: 2px 5px; font-size: 12.5px; line-height: 18px; font-weight: 500; color: #5e5d59; }
  .swt-arrow { grid-area: 2 / 2; display: block; align-self: center; color: #898781; }
  .swt-card { min-width: 0; border-radius: 10px; background: #fff; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.08), 0 2px 8px rgba(11, 11, 11, 0.04); }
  .swt-bar { display: block; flex: none; height: 4px; border-radius: 2px; background: rgba(11, 11, 11, 0.13); }

  /* Share, as the product draws it: filled while only you can open the artifact, outlined with the people glyph once it is shared */
  .swt-share { flex: none; display: inline-flex; align-items: center; gap: 3px; height: 20px; padding: 0 7px 0 5px; border-radius: 6px; font-size: 11.5px; line-height: 1; font-weight: 500; }
  .swt-share.is-filled { background: #0b0b0b; color: #fff; }
  .swt-share.is-outlined { background: #fff; color: #0b0b0b; box-shadow: inset 0 0 0 1px rgba(11, 11, 11, 0.2); }

  /* a face: a white initial on one of the product's set colors; Claude is the white mark on the brand fill */
  .swt-face { flex: none; width: 18px; height: 18px; border-radius: 50%; color: #fff; font-size: 9px; line-height: 1; font-weight: 500; display: inline-flex; align-items: center; justify-content: center; }
  .swt-face svg { display: block; width: 58%; height: 58%; }
  .swt-faces { flex: none; display: inline-flex; }
  .swt-faces .swt-face { position: relative; box-shadow: 0 0 0 1.5px #fff; }
  .swt-faces .swt-face + .swt-face { margin-left: -4.5px; padding-left: 2.5px; }
  .swt-faces .swt-face:nth-child(1) { z-index: 3; }
  .swt-faces .swt-face:nth-child(2) { z-index: 2; }
  .swt-faces .swt-face:nth-child(3) { z-index: 1; }

  /* left: the sheet */
  .swt-sheet { padding: 10px; display: grid; gap: 8px; align-content: center; }
  .swt-add { display: flex; gap: 6px; }
  .swt-field { flex: 1; min-width: 0; height: 26px; padding: 0 8px; border-radius: 7px; box-shadow: inset 0 0 0 1px rgba(11, 11, 11, 0.14); display: flex; align-items: center; font-size: 11.5px; color: #898781; white-space: nowrap; overflow: hidden; }
  .swt-invite { flex: none; height: 26px; padding: 0 10px; border-radius: 7px; background: rgba(11, 11, 11, 0.36); color: #fff; display: flex; align-items: center; font-size: 11.5px; font-weight: 500; }
  .swt-new { border-radius: 7px; background: rgba(42, 120, 214, 0.09); }
  .swt-who { height: 26px; padding: 0 7px 0 6px; display: flex; align-items: center; gap: 7px; }
  .swt-level { margin-left: auto; display: inline-flex; align-items: center; gap: 3px; color: #0b0b0b; }
  .swt-level .swt-bar { background: rgba(11, 11, 11, 0.42); }

  /* right: the shared page */
  .swt-page { display: flex; flex-direction: column; overflow: hidden; }
  .swt-head { flex: none; height: 32px; padding: 0 6px 0 12px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(11, 11, 11, 0.06); }
  .swt-name { flex: 1; min-width: 0; font-size: 12.5px; line-height: 16px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  /* The artifact and the comment have to read as two different things.
     The artifact is a sheet lying on the page's gray stage, the biggest thing in the card, drawn in the accent.
     The comment is a pop-up floating over the sheet's edge: smaller, rounder, under a real shadow, with a pointer toward its pin. */
  .swt-body { flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; padding: 12px 14px; background: #f2f2f0; }
  .swt-slide { position: relative; flex: 0 1 146px; min-width: 0; aspect-ratio: 16 / 9; border-radius: 3px; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.05), 0 2px 7px rgba(11, 11, 11, 0.08); }
  .swt-slide .s3p-pic { border-radius: inherit; }
  .swt-sel { position: absolute; left: 8%; top: 13.5%; width: 53%; height: 24%; border-radius: 2px; box-shadow: 0 0 0 1.5px ${d}; }
  .swt-flag { position: absolute; left: -1.5px; bottom: 100%; height: 11px; padding: 0 4px; border-radius: 3px 3px 3px 0; background: ${d}; color: #fff; font-size: 7.5px; line-height: 11px; font-weight: 600; }
  /* the product's comment pin: a drop with the commenter's initial, its point on the spot the comment is about */
  .swt-pin { position: absolute; right: 7%; top: 24%; width: 17px; height: 17px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); background: ${u}; border: 1.5px solid #fff; box-shadow: 0 1px 4px rgba(11, 11, 11, 0.28); display: grid; place-items: center; }
  .swt-pin span { transform: rotate(45deg); color: #fff; font-size: 7.5px; line-height: 1; font-weight: 600; }
  .swt-thread { position: relative; z-index: 1; flex: 0 1 172px; min-width: 0; margin-left: 2px; padding: 8px 10px 9px; border-radius: 10px; background: #fff;
    box-shadow: 0 0 0 0.5px rgba(11, 11, 11, 0.12), 0 6px 18px rgba(11, 11, 11, 0.16); display: grid; gap: 6px; }
  .swt-thread::before { content: ""; position: absolute; left: -4px; top: 15px; width: 9px; height: 9px; border-radius: 1px; background: #fff; transform: rotate(45deg); box-shadow: -0.5px 0.5px 0 0 rgba(11, 11, 11, 0.14); }
  .swt-say { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 6px; align-items: start; }
  .swt-say .swt-face { width: 16px; height: 16px; font-size: 8px; }
  .swt-lines { display: grid; gap: 4px; padding-top: 1px; }
  /* who and when, then what they wrote: thin lines, unlike the sheet's thick ones */
  .swt-by { display: flex; align-items: center; gap: 5px; height: 10px; font-size: 10px; line-height: 10px; font-weight: 600; color: #0b0b0b; }
  .swt-by .swt-bar { height: 4px; background: rgba(11, 11, 11, 0.5); }
  .swt-by .swt-bar + .swt-bar { background: rgba(11, 11, 11, 0.16); }
  .swt-text { display: flex; align-items: center; gap: 5px; }
  .swt-text .swt-bar, .swt-lines > .swt-bar { height: 3px; background: rgba(11, 11, 11, 0.16); }
  .swt-text .swt-bar { flex: 1; min-width: 0; }
  .swt-at { flex: none; padding: 2px 4px; border-radius: 4px; background: rgba(42, 102, 184, 0.1); font-size: 9.5px; line-height: 1; font-weight: 500; color: #2a66b8; }
  .swt-rule { height: 0; border-top: 1px solid rgba(11, 11, 11, 0.07); }

  @container saa (max-width: 659px) {
    .swt { grid-template-columns: 200px auto minmax(0, 1fr); padding: 14px 18px 18px; gap: 8px 12px; }
    .swt-body { padding: 12px 8px; }
    .swt-thread { padding: 7px 8px 8px; }
  }
  /* a phone: the sheet, then the page under it */
  @container saa (max-width: 519px) {
    .swt { grid-template-columns: minmax(0, 1fr); grid-template-rows: none; gap: 8px; padding: 14px 16px 16px; }
    .swt-col.is-share .swt-lab, .swt-col.is-share .swt-card, .swt-col.is-together .swt-lab, .swt-col.is-together .swt-card, .swt .swt-arrow { grid-area: auto; }
    .swt-arrow { justify-self: center; margin: 2px 0; transform: rotate(90deg); }
    .swt-body { padding: 16px 12px; }
  }
`;function p({w:e}){return(0,l.jsx)("span",{className:"swt-bar",style:{width:e}})}function m({hue:e,children:t}){return(0,l.jsx)("span",{className:"swt-face",style:{background:e},children:t})}function h(){return(0,l.jsx)(m,{hue:"#c6613f",children:(0,l.jsx)(i,{size:14,color:"#fff"})})}function g({hue:e,initial:t,name:r}){return(0,l.jsxs)("div",{className:"swt-who",children:[(0,l.jsx)(m,{hue:e,children:t}),(0,l.jsx)(p,{w:r}),(0,l.jsxs)("span",{className:"swt-level",children:[(0,l.jsx)(p,{w:"30px"}),(0,l.jsx)(n,{name:"CaretDown",size:10})]})]})}function _(){let e=t();return(0,l.jsx)(r,{css:f,label:e("aria.root"),role:"img",children:(0,l.jsxs)("div",{className:"swt","aria-hidden":"true",children:[(0,l.jsxs)("div",{className:"swt-col is-share",children:[(0,l.jsx)("p",{className:"swt-lab",children:e.rich("lab.share",{share:(0,l.jsxs)("span",{className:"swt-share is-filled",children:[(0,l.jsx)(n,{name:"Lock",size:12}),e("ui.share")]})})}),(0,l.jsxs)("div",{className:"swt-card swt-sheet",children:[(0,l.jsxs)("div",{className:"swt-add",children:[(0,l.jsx)("span",{className:"swt-field",children:e("ui.add")}),(0,l.jsx)("span",{className:"swt-invite",children:e("ui.invite")})]}),(0,l.jsxs)("div",{className:"swt-new",children:[(0,l.jsx)(g,{hue:u,initial:"J",name:"64px"}),(0,l.jsx)(g,{hue:d,initial:"M",name:"50px"})]})]})]}),(0,l.jsx)(n,{name:"ArrowRight",size:20,className:"swt-arrow"}),(0,l.jsxs)("div",{className:"swt-col is-together",children:[(0,l.jsx)("p",{className:"swt-lab",children:e("lab.together")}),(0,l.jsxs)("div",{className:"swt-card swt-page",children:[(0,l.jsxs)("div",{className:"swt-head",children:[(0,l.jsx)("span",{className:"swt-name",children:c}),(0,l.jsxs)("span",{className:"swt-faces",children:[(0,l.jsx)(h,{}),(0,l.jsx)(m,{hue:u,children:"J"}),(0,l.jsx)(m,{hue:d,children:"M"})]}),(0,l.jsxs)("span",{className:"swt-share is-outlined",children:[(0,l.jsx)(n,{name:"Users",size:12}),e("ui.share")]})]}),(0,l.jsxs)("div",{className:"swt-body",children:[(0,l.jsxs)("div",{className:"swt-slide",children:[(0,l.jsx)(o,{kind:"slides",ours:!0}),(0,l.jsx)("span",{className:"swt-sel",children:(0,l.jsx)("span",{className:"swt-flag",children:"M"})}),(0,l.jsx)("span",{className:"swt-pin",children:(0,l.jsx)("span",{children:"J"})})]}),(0,l.jsxs)("div",{className:"swt-thread",children:[(0,l.jsxs)("div",{className:"swt-say",children:[(0,l.jsx)(m,{hue:u,children:"J"}),(0,l.jsxs)("span",{className:"swt-lines",children:[(0,l.jsxs)("span",{className:"swt-by",children:[(0,l.jsx)(p,{w:"34px"}),(0,l.jsx)(p,{w:"14px"})]}),(0,l.jsxs)("span",{className:"swt-text",children:[(0,l.jsx)("span",{className:"swt-at",children:e("ui.atClaude")}),(0,l.jsx)(p,{w:"auto"})]}),(0,l.jsx)(p,{w:"70%"})]})]}),(0,l.jsx)("span",{className:"swt-rule"}),(0,l.jsxs)("div",{className:"swt-say",children:[(0,l.jsx)(h,{}),(0,l.jsxs)("span",{className:"swt-lines",children:[(0,l.jsx)("span",{className:"swt-by",children:e("ui.claude")}),(0,l.jsx)(p,{w:"88%"})]})]})]})]})]})]})]})})}export{_ as default};