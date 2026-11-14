import{r as e}from"../../../../react-n2kbymz5.js";import{A as t}from"../../../../ResourceWidget-fcv47qgx.js";import{i as n,n as r,o as i}from"../../../../ArtifactsTutorialKit-hzaawq1p.js";import"../../../../_shared-go3c9314.js";import{i as a,n as o,r as s,t as c}from"../../../../_kindDrawings-f9kuezlz.js";import{i as l}from"../../../../_pane-hza16tv9.js";import{n as u}from"../../../../_deck-dl841n0x.js";var d=e(),f=e=>`${(e/2.4).toFixed(3)}cqw`,p=`
  ${l}

  /* ---------- on the page: follows the reader's theme ---------- */
  .s3p-row { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
  .s3p-step { min-width: 0; display: flex; flex-direction: column; gap: 10px; }
  .s3p-cap { margin: 0; padding: 0 2px; font-size: 14px; line-height: 20px; color: var(--saa-ink-2); text-wrap: pretty; }
  .s3p-line { margin: 18px 0 0; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 15px; line-height: 22px; color: var(--saa-ink); }
  .s3p-line::before, .s3p-line::after { content: ""; flex: 1; min-width: 0; height: 0; border-top: 0.5px solid var(--saa-hair-strong); }
  .s3p-line::before { margin-right: 4px; }
  .s3p-line::after { margin-left: 4px; }
  .s3p-line svg { flex: none; color: var(--cds-fill-accent, var(--saa-blue)); }
  .s3p-line span { min-width: 0; text-align: center; text-wrap: balance; }

  /* ---------- a frame: Claude's interface in miniature (literal light) ---------- */
  /* a box with a ratio gets a stated width, and what fills it is pinned to its edges: no engine has to work out a percentage height */
  .s3p-frame { container: s3pf / inline-size; position: relative; flex: none; width: 100%; aspect-ratio: 4 / 3; border-radius: 12px; background: #f0efec; color: #0b0b0b; overflow: hidden; }
  .s3p-in { position: absolute; top: 0; right: 0; bottom: 0; left: 0; padding: ${f(10)}; display: flex; gap: ${f(8)}; }
  .s3p-i { display: block; flex: none; width: ${f(11)}; height: ${f(11)}; color: #898781; }
  .s3p-bar { display: block; height: ${f(4)}; border-radius: ${f(2)}; background: rgba(11, 11, 11, 0.13); }
  .s3p-name { font-size: ${f(10)}; line-height: 1.15; font-weight: 500; letter-spacing: -0.005em; color: #0b0b0b; }

  ${o}

  /* the artifact: the one thing outlined in blue in every frame */
  .s3p-art { background: #fff; box-shadow: 0 0 0 1.5px var(--saa-blue); overflow: hidden; min-width: 0; display: flex; flex-direction: column; }
  .s3p-head { flex: none; height: ${f(24)}; padding: 0 ${f(5)} 0 ${f(8)}; display: flex; align-items: center; gap: ${f(5)}; border-bottom: 1px solid rgba(11, 11, 11, 0.06); }
  .s3p-head .s3p-name { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .s3p-share { flex: none; width: ${f(20)}; height: ${f(14)}; border-radius: ${f(4.5)}; display: inline-flex; align-items: center; justify-content: center; }
  .s3p-share .s3p-i { width: ${f(9.5)}; height: ${f(9.5)}; color: inherit; }
  .s3p-share.is-filled { background: #0b0b0b; color: #fff; }
  .s3p-share.is-outlined { background: #fff; color: #0b0b0b; box-shadow: inset 0 0 0 1px rgba(11, 11, 11, 0.2); }
  .s3p-stage { flex: 1; min-height: 0; background: #f2f2f0; display: flex; align-items: center; justify-content: center; }
  .s3p-sheet { position: relative; width: 100%; aspect-ratio: 16 / 9; border-radius: ${f(3)}; overflow: hidden; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.05), 0 ${f(1.5)} ${f(5)} rgba(11, 11, 11, 0.07); }

  /* 1. beside the conversation */
  .s3p-chat { flex: 0 0 33%; min-width: 0; display: flex; flex-direction: column; gap: ${f(6)}; padding-top: ${f(2)}; }
  .s3p-you { align-self: flex-end; width: 88%; padding: ${f(6)}; border-radius: ${f(7)}; background: rgba(11, 11, 11, 0.06); display: grid; gap: ${f(4)}; margin-bottom: ${f(4)}; }
  .s3p-composer { margin-top: auto; height: ${f(24)}; border-radius: ${f(8)}; background: #fff; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.08); }
  .s3p-pane { flex: 1; border-radius: ${f(8)}; }
  .s3p-pane .s3p-stage { padding: ${f(8)}; }

  /* 2. the Artifacts page */
  .s3p-side { flex: 0 0 ${f(70)}; min-width: 0; display: flex; flex-direction: column; gap: ${f(2)}; }
  .s3p-nav { height: ${f(19)}; padding: 0 ${f(5)}; border-radius: ${f(5)}; display: flex; align-items: center; gap: ${f(5)}; }
  .s3p-nav .s3p-bar { flex: 1; max-width: ${f(34)}; }
  .s3p-nav.is-on { background: rgba(11, 11, 11, 0.08); }
  .s3p-nav.is-on .s3p-i { color: #0b0b0b; }
  .s3p-nav .s3p-name { min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .s3p-grid { flex: 1; min-width: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: auto 1fr 1fr; gap: ${f(5)}; }
  .s3p-card { border-radius: ${f(6)}; background: #fff; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.08); overflow: hidden; min-width: 0; display: flex; flex-direction: column; }
  .s3p-card.s3p-art { box-shadow: 0 0 0 1.5px var(--saa-blue); }
  .s3p-media { position: relative; flex: none; width: 100%; aspect-ratio: 68 / 30; min-height: 0; overflow: hidden; border-bottom: 1px solid rgba(11, 11, 11, 0.06); }
  .s3p-body { flex: 1; padding: ${f(3.5)} ${f(5)}; display: flex; flex-direction: column; justify-content: center; }
  .s3p-card:not(.s3p-art) .s3p-body { justify-content: flex-start; padding-top: ${f(4)}; }

  /* 3. its own page */
  .s3p-page { flex: 1; border-radius: ${f(8)}; }
  .s3p-page .s3p-head { padding-left: ${f(7)}; }
  .s3p-page .s3p-stage { padding: ${f(12)} ${f(16)}; }
  .s3p-faces { flex: none; display: inline-flex; margin-right: ${f(1)}; }
  .s3p-faces span { position: relative; width: ${f(15)}; height: ${f(15)}; border-radius: 50%; color: #fff; box-shadow: 0 0 0 ${f(1.25)} #fff;
    font-size: ${f(7)}; line-height: 1; font-weight: 500; display: inline-flex; align-items: center; justify-content: center; }
  .s3p-faces span + span { margin-left: -${f(3.75)}; padding-left: ${f(2.5)}; }
  .s3p-faces span:nth-child(1) { z-index: 3; }
  .s3p-faces span:nth-child(2) { z-index: 2; }
  .s3p-faces span:nth-child(3) { z-index: 1; }
  .s3p-faces svg { display: block; width: 58%; height: 58%; }

  /* a side pane or a tablet: one frame per row, its sentence beside it */
  @container saa (max-width: 699px) {
    .s3p-row { grid-template-columns: minmax(0, 1fr); gap: 14px; }
    .s3p-step { flex-direction: row; align-items: center; gap: 16px; }
    .s3p-frame { flex: 0 0 clamp(224px, 40%, 264px); }
    .s3p-cap { flex: 1; min-width: 0; padding: 0; }
    /* the closing line may wrap from here down, so its rule goes above it */
    .s3p-line::before, .s3p-line::after { display: none; }
    .s3p-line { justify-content: flex-start; align-items: flex-start; margin-top: 20px; padding: 14px 2px 0; border-top: 0.5px solid var(--saa-hair-strong); }
    .s3p-line svg { margin-top: 3px; }
    .s3p-line span { text-align: left; text-wrap: pretty; }
  }
  /* a phone: the sentence goes under its frame */
  @container saa (max-width: 439px) {
    .s3p-row { gap: 20px; }
    .s3p-step { flex-direction: column; align-items: stretch; gap: 8px; }
    .s3p-frame { flex: none; }
    .s3p-cap { flex: none; padding: 0 2px; }
  }
`,m={Home:(0,d.jsx)("path",{d:"M12.5 6.838L12.5 11.751C12.5 12.165 12.165 12.501 11.75 12.501C11.09 12.501 10.137 12.501 9.5 12.501L9.5 9.25C9.5 8.836 9.164 8.5 8.75 8.5L7.25 8.5C6.836 8.5 6.5 8.836 6.5 9.25L6.5 12.501L4.25 12.501C3.836 12.501 3.5 12.165 3.5 11.751L3.5 6.838C3.5 6.623 3.592 6.419 3.752 6.277L7.502 2.944C7.786 2.691 8.214 2.691 8.498 2.944L12.248 6.277C12.408 6.419 12.5 6.623 12.5 6.838Z"}),Projects:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("line",{x1:"4.5",y1:"2.5",x2:"11.5",y2:"2.5"}),(0,d.jsx)("path",{d:"M3.146 5.5L12.854 5.5C13.321 5.5 13.675 5.922 13.593 6.382L12.61 11.882C12.547 12.24 12.235 12.5 11.872 12.5L4.128 12.5C3.765 12.5 3.454 12.24 3.39 11.882L2.407 6.382C2.325 5.922 2.679 5.5 3.146 5.5Z"})]}),Clock:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("circle",{cx:"8",cy:"8",r:"5.5"}),(0,d.jsx)("line",{x1:"8",y1:"8",x2:"8",y2:"5.5"}),(0,d.jsx)("line",{x1:"8",y1:"8",x2:"10",y2:"9"})]}),Tool:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("path",{d:"M12.75 12.5L3.25 12.5C2.836 12.5 2.5 12.164 2.5 11.75L2.5 7C2.5 6.172 3.172 5.5 4 5.5L12 5.5C12.828 5.5 13.5 6.172 13.5 7L13.5 11.75C13.5 12.164 13.164 12.5 12.75 12.5Z"}),(0,d.jsx)("polyline",{points:"5.5,5.5 5.5,3.5 10.5,3.5 10.5,5.5"}),(0,d.jsx)("line",{x1:"2.5",y1:"8.5",x2:"13.5",y2:"8.5"})]})};function h({name:e}){let t=m[e];return t?(0,d.jsx)("svg",{className:"s3p-i",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t}):(0,d.jsx)(n,{name:e,size:20,className:"s3p-i"})}function g({w:e}){return(0,d.jsx)("span",{className:"s3p-bar",style:{width:e}})}function _({kind:e,title:t}){return(0,d.jsxs)("div",{className:"s3p-card",style:{background:a(e)},children:[(0,d.jsx)("div",{className:"s3p-media",children:(0,d.jsx)(s,{kind:e})}),(0,d.jsx)("div",{className:"s3p-body",children:(0,d.jsx)(g,{w:t})})]})}function v(){let e=t(),a=(0,d.jsxs)("div",{className:"s3p-in",children:[(0,d.jsxs)("div",{className:"s3p-chat",children:[(0,d.jsxs)("span",{className:"s3p-you",children:[(0,d.jsx)(g,{w:"100%"}),(0,d.jsx)(g,{w:"62%"})]}),(0,d.jsx)(g,{w:"92%"}),(0,d.jsx)(g,{w:"74%"}),(0,d.jsx)(g,{w:"84%"}),(0,d.jsx)("span",{className:"s3p-composer"})]}),(0,d.jsxs)("div",{className:"s3p-art s3p-pane",children:[(0,d.jsxs)("div",{className:"s3p-head",children:[(0,d.jsx)("span",{className:"s3p-name",children:u}),(0,d.jsx)("span",{className:"s3p-share is-filled",children:(0,d.jsx)(h,{name:"Lock"})})]}),(0,d.jsx)("div",{className:"s3p-stage",children:(0,d.jsx)("div",{className:"s3p-sheet",children:(0,d.jsx)(c,{})})})]})]}),o=(0,d.jsxs)("div",{className:"s3p-in",children:[(0,d.jsxs)("div",{className:"s3p-side",children:[(0,d.jsxs)("div",{className:"s3p-nav",children:[(0,d.jsx)(h,{name:"Projects"}),(0,d.jsx)(g,{w:"78%"})]}),(0,d.jsxs)("div",{className:"s3p-nav is-on",children:[(0,d.jsx)(h,{name:"Artifacts"}),(0,d.jsx)("span",{className:"s3p-name",children:e("ui.artifacts")})]}),(0,d.jsxs)("div",{className:"s3p-nav",children:[(0,d.jsx)(h,{name:"Clock"}),(0,d.jsx)(g,{w:"92%"})]}),(0,d.jsxs)("div",{className:"s3p-nav",children:[(0,d.jsx)(h,{name:"Tool"}),(0,d.jsx)(g,{w:"86%"})]})]}),(0,d.jsxs)("div",{className:"s3p-grid",children:[(0,d.jsxs)("div",{className:"s3p-card s3p-art",children:[(0,d.jsx)("div",{className:"s3p-media",children:(0,d.jsx)(c,{})}),(0,d.jsx)("div",{className:"s3p-body",children:(0,d.jsx)("span",{className:"s3p-name",children:u})})]}),(0,d.jsx)(_,{kind:"dashboard",title:"72%"}),(0,d.jsx)(_,{kind:"motion",title:"58%"}),(0,d.jsx)(_,{kind:"design",title:"76%"}),(0,d.jsx)(_,{kind:"whiteboard",title:"66%"}),(0,d.jsx)(_,{kind:"sheets",title:"54%"})]})]}),s=[{key:"beside",frame:a},{key:"saved",frame:o},{key:"shared",frame:(0,d.jsx)("div",{className:"s3p-in",children:(0,d.jsxs)("div",{className:"s3p-art s3p-page",children:[(0,d.jsxs)("div",{className:"s3p-head",children:[(0,d.jsx)(h,{name:"Home"}),(0,d.jsx)("span",{className:"s3p-name",children:u}),(0,d.jsxs)("span",{className:"s3p-faces",children:[(0,d.jsx)("span",{style:{background:"#c6613f"},children:(0,d.jsx)(i,{size:14,color:"#fff"})}),(0,d.jsx)("span",{style:{background:"#7a6ba8"},children:"J"}),(0,d.jsx)("span",{style:{background:"#3f7a75"},children:"M"})]}),(0,d.jsx)("span",{className:"s3p-share is-outlined",children:(0,d.jsx)(h,{name:"Users"})})]}),(0,d.jsx)("div",{className:"s3p-stage",children:(0,d.jsx)("div",{className:"s3p-sheet",children:(0,d.jsx)(c,{})})})]})})}];return(0,d.jsxs)(r,{css:p,label:e("aria.root"),children:[(0,d.jsx)("ol",{className:"s3p-row",role:"list",children:s.map(t=>(0,d.jsxs)("li",{className:"s3p-step",children:[(0,d.jsx)("div",{className:"s3p-frame","aria-hidden":"true",children:t.frame}),(0,d.jsx)("p",{className:"s3p-cap",children:e(`cap.${t.key}`)})]},t.key))}),(0,d.jsxs)("p",{className:"s3p-line",children:[(0,d.jsx)(n,{name:"Link",size:16}),(0,d.jsx)("span",{children:e("line")})]})]})}export{v as default};