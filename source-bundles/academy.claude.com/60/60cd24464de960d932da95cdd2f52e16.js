import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{Pm as t,jm as n}from"../../../../content-de-meta-mdrrzgmt.js";import{c as r}from"../../../../router-eetg1z2h.js";import{l as i,u as a}from"../../../../WidgetCopy-cl16fj9d.js";import{a as o,c as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"../../../../_shared-ep5pof6i.js";var g=e(t(),1),_=n(),v=`
.gs-fp {
  ${d}
  ${s}
  --fp-400: #e8e6dc;
  --fp-sep: rgba(31, 30, 29, 0.10);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --t-fast: 90ms;
  --t-med: 180ms;
  width: 100%;
  container: gs-fp / inline-size;
  font-family: var(--gs-sans);
  color: var(--gs-ink);
  -webkit-font-smoothing: antialiased;
  margin: 8px auto;
  max-width: 680px;
}
.gs-fp *, .gs-fp *::before, .gs-fp *::after { box-sizing: border-box; }
.gs-fp button { -webkit-tap-highlight-color: transparent; }

/* frame: stage (product, ivory) + teaching bands (page) */
.gs-fp .fp-frame {
  position: relative;
  border: 0.5px solid var(--gs-hair);
  border-radius: 14px;
  overflow: visible;
  background: var(--gs-page);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05), 0 4px 24px rgba(0,0,0,0.02);
}
.gs-fp .fp-stage {
  position: relative; z-index: 2;
  padding: 22px 22px 18px;
  background: var(--rp-page);
  color: var(--rp-text-100);
  border-radius: 14px 14px 0 0;
}

/* composer (claude.ai light, literal) */
.gs-fp .composer {
  position: relative;
  background: var(--rp-000);
  color: var(--rp-text-100);
  border-radius: 20px;
  box-shadow: 0 0 0 0.5px var(--rp-hair-15), 0 2px 8px rgba(0,0,0,0.08);
  padding: 14px 14px 8px;
}
.gs-fp .files-row { display: flex; gap: 10px; padding: 2px 2px 12px; }
.gs-fp .file-card {
  position: relative;
  width: 120px; height: 120px;
  background: var(--rp-000);
  border-radius: 8px;
  border: 0.5px solid var(--rp-hair-25);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  padding: 8px 10px;
  display: flex; flex-direction: column; justify-content: space-between; gap: 10px;
  transition: border-color 140ms var(--rp-ease), box-shadow 160ms var(--rp-ease);
}
.gs-fp .file-name {
  font-size: 12px; line-height: 1.35; color: var(--rp-text-100);
  overflow: hidden; word-break: break-word;
  display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical;
}
.gs-fp .file-tag {
  align-self: flex-start;
  height: 18px;
  border: 0.5px solid var(--rp-hair-25);
  border-radius: 4px;
  padding: 0 4px;
  font-size: 11px; line-height: 17px;
  color: var(--rp-text-200); font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.01em;
}
.gs-fp .prompt-area {
  font-size: 15.5px;
  line-height: 1.8;
  color: var(--rp-text-100);
  padding: 4px 6px 14px;
  margin: 0;
}
/* highlighted phrases: soft sky tint + dashed sky underline (the walkthrough's cue language) */
.gs-fp .fp-part {
  border-bottom: 1.5px dashed rgba(106, 155, 204, 0.50);
  padding: 0 1px;
  transition: background 140ms var(--rp-ease), border-color 140ms var(--rp-ease);
}
.gs-fp .fp-part.hot { background: rgba(106, 155, 204, 0.14); border-bottom-color: var(--rp-cue); border-radius: 3px 3px 0 0; }
.gs-fp .file-card.hot { border-color: rgba(106, 155, 204, 0.60); box-shadow: 0 0 0 1px rgba(106, 155, 204, 0.14); }

/* bottom row of the box */
.gs-fp .composer-row { display: flex; align-items: center; gap: 2px; padding: 0 2px 4px; }
.gs-fp .grow { flex: 1; }
.gs-fp .btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 5px;
  height: 32px; border: 0; background: transparent; color: var(--rp-text-200);
  font: inherit; font-size: 13.5px; border-radius: 8px; padding: 0;
  transition: box-shadow 160ms var(--ease-out), background var(--t-fast) var(--ease-out);
}
.gs-fp button.btn { cursor: pointer; }
.gs-fp button.btn:hover { background: var(--rp-200); }
.gs-fp button.btn:focus-visible { outline: 2px solid var(--rp-text-000); outline-offset: 1px; }
.gs-fp .btn .ico { width: 18px; height: 18px; }
.gs-fp .btn-add { width: 32px; }
.gs-fp .btn-send { width: 32px; height: 32px; border-radius: 8px; background: var(--rp-brand); color: #fff; margin-left: 2px; }
.gs-fp .btn-send svg { width: 16px; height: 16px; transform: translateY(-0.5px); }

/* row under the box (project, Output, model): sits on the ivory stage, so literal */
.gs-fp .chin { display: flex; align-items: center; gap: 2px; padding: 6px 2px 0; }
.gs-fp .chin .grow { flex: 1; }
.gs-fp .btn-chin { height: 28px; padding: 0 9px; font-size: 13px; color: var(--rp-text-400); border-radius: 8px; cursor: default; }
.gs-fp .btn-model { height: 28px; padding: 0 8px; border-radius: 6px; color: var(--rp-text-200); white-space: nowrap; }
.gs-fp .btn-model .caret { width: 12px; height: 12px; opacity: 0.7; margin-left: 4px; transform: translateY(0.5px); }
.gs-fp .chin .btn-model { color: var(--rp-text-300); }
.gs-fp .chin button.btn:hover { background: var(--rp-300); }

/* spotlight ring on the mock control a pill points at */
.gs-fp .spot { box-shadow: 0 0 0 2px var(--rp-page), 0 0 0 4px var(--rp-cue); border-radius: 8px; }
.gs-fp .file-card.spot { border-radius: 8px; }

/* menus (task-setup replica; here they open upward from their control) */
.gs-fp .ico { width: 18px; height: 18px; display: inline-block; fill: currentColor; flex-shrink: 0; }
.gs-fp .ico-line { width: 18px; height: 18px; display: inline-block; flex-shrink: 0; fill: none; stroke: currentColor; }
.gs-fp .menu {
  position: absolute;
  background: var(--rp-000);
  color: var(--rp-text-200);
  border-radius: 12px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.02), 0 10px 32px rgba(0,0,0,0.10), 0 0 0 0.5px var(--rp-hair-15);
  padding: 6px;
  min-width: 13rem;
  z-index: 50;
  opacity: 0; transform: scale(0.96) translateY(2px);
  visibility: hidden;
  transition: opacity 110ms var(--ease-out), transform 130ms var(--ease-out), visibility 0s linear 130ms;
  pointer-events: none;
  transform-origin: bottom left;
  text-align: left;
}
.gs-fp .menu.open { opacity: 1; transform: scale(1) translateY(0); visibility: visible; transition: opacity 110ms var(--ease-out), transform 130ms var(--ease-out), visibility 0s; pointer-events: auto; }
.gs-fp .menu.anchor-right { transform-origin: bottom right; }
.gs-fp .menu-add { bottom: 50px; left: 12px; }
.gs-fp .menu-conn { bottom: 50px; left: min(226px, calc(100% - 13rem - 8px)); }
.gs-fp .menu-output { bottom: -6px; left: min(110px, calc(100% - 15.5rem)); min-width: 15.5rem; }
.gs-fp .menu-model { bottom: -6px; right: 0; min-width: 264px; }

.gs-fp .menu-row {
  display: grid; width: 100%; border: 0; background: transparent; font: inherit; text-align: left;
  grid-template-columns: 20px 1fr auto;
  align-items: center; gap: 10px;
  padding: 7px 9px 7px 8px;
  border-radius: 8px; min-height: 32px;
  cursor: pointer; color: var(--rp-text-200);
  font-size: 14px; white-space: nowrap; user-select: none;
  position: relative;
  transition: background var(--t-fast) var(--ease-out), color var(--t-fast) var(--ease-out);
}
.gs-fp .menu-row:hover, .gs-fp .menu-row[data-hl="true"] { background: var(--rp-300); color: var(--rp-text-000); }
.gs-fp .menu-row:focus-visible { outline: 2px solid var(--rp-text-000); outline-offset: -2px; background: var(--rp-200); }
.gs-fp .menu-row .label { overflow: hidden; text-overflow: ellipsis; }
.gs-fp .menu-row .suffix { display: inline-flex; align-items: center; gap: 4px; color: var(--rp-text-400); font-size: 12px; }
.gs-fp .menu-row .chev { width: 12px; height: 12px; opacity: 0.6; transition: transform var(--t-med) var(--ease-out); }
.gs-fp .menu-row .kbd { font-family: var(--gs-mono); font-size: 11px; color: var(--rp-text-400); background: var(--rp-200); border-radius: 4px; padding: 1px 5px; }
.gs-fp .menu-row.lit { background: rgba(106, 155, 204, 0.16); color: var(--rp-text-000); }
.gs-fp .menu-row.lit .label { font-weight: 500; }
.gs-fp .menu-sep { height: 0.5px; background: var(--fp-sep); margin: 6px 8px; }

.gs-fp .check { width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
.gs-fp .check svg { width: 14px; height: 14px; color: #2c84db; opacity: 0; transform: scale(0.6); transition: opacity var(--t-fast) var(--ease-out), transform var(--t-fast) var(--ease-spring); }
.gs-fp .menu-row[data-checked="true"] .check svg { opacity: 1; transform: scale(1); }
.gs-fp .toggle {
  width: 28px; height: 16px;
  background: var(--fp-400); border-radius: 999px;
  position: relative; flex-shrink: 0;
  transition: background var(--t-med) var(--ease-out);
}
.gs-fp .toggle::after {
  content: ""; position: absolute; top: 2px; left: 2px;
  width: 12px; height: 12px; border-radius: 999px;
  background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.18);
  transition: transform var(--t-med) var(--ease-spring);
}
.gs-fp .menu-row[data-on="true"] .toggle { background: var(--rp-text-100); }
.gs-fp .menu-row[data-on="true"] .toggle::after { transform: translateX(12px); }

.gs-fp .model-row { grid-template-columns: 20px 1fr; align-items: start; padding: 8px 9px 8px 8px; }
.gs-fp .model-row .meta { display: flex; flex-direction: column; gap: 2px; overflow: hidden; }
.gs-fp .model-row .meta .name { font-size: 14px; color: var(--rp-text-000); }
.gs-fp .model-row .meta .desc { font-size: 12.5px; color: var(--rp-text-400); white-space: normal; }
.gs-fp .model-row .check-mark { color: var(--rp-text-000); font-weight: 600; opacity: 0; transition: opacity var(--t-fast) var(--ease-out); }
.gs-fp .model-row[data-selected="true"] .check-mark { opacity: 1; }

.gs-fp .tico { width: 20px; height: 20px; border-radius: 5px; background: color-mix(in srgb, var(--k) 14%, #fff); display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
.gs-fp .tico svg { width: 13px; height: 13px; fill: none; stroke: var(--k); stroke-width: 1.2; stroke-linejoin: round; stroke-linecap: round; }
.gs-fp .tico.plain { background: transparent; }
.gs-fp .tico.plain svg { width: 16px; height: 16px; stroke: var(--rp-text-200); }

/* teaching bands (on the page: theme tokens) */
.gs-fp .fp-band { background: var(--gs-page); border-top: 0.5px solid var(--gs-hair); padding: 14px 20px 16px; }
.gs-fp .fp-band:last-child { border-radius: 0 0 14px 14px; }
.gs-fp .fp-band-h { font-size: 13.5px; font-weight: 600; color: var(--gs-ink); margin: 0 0 9px; }
.gs-fp .fp-legend { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 6px 22px; }
.gs-fp .fp-legend li {
  display: flex; gap: 10px; align-items: baseline;
  font-size: 14px; line-height: 1.5; color: var(--gs-ink-2);
  padding: 4px 8px; margin: 0 -8px; border-radius: 8px;
  transition: background 140ms var(--rp-ease); cursor: default;
}
.gs-fp .fp-legend li.hot { background: var(--rp-cue-soft); }
.gs-fp .fp-n {
  flex-shrink: 0; width: 18px; height: 18px; border-radius: 50%;
  background: rgba(106, 155, 204, 0.16);
  color: color-mix(in srgb, var(--rp-cue) 55%, var(--gs-ink));
  font-size: 11px; font-weight: 600;
  display: inline-flex; align-items: center; justify-content: center;
  transform: translateY(-1px);
}
.gs-fp .fp-legend strong { color: var(--gs-ink); font-weight: 600; }

/* controls band */
.gs-fp .fp-ctrls { display: flex; flex-wrap: wrap; gap: 6px; }
.gs-fp .fp-ctrl {
  font: inherit; font-size: 13.5px; color: var(--gs-ink-2);
  background: color-mix(in srgb, var(--gs-ink) 3%, var(--gs-chip));
  border: 0.5px solid var(--gs-hair); border-radius: 999px;
  padding: 5px 12px; cursor: pointer;
  transition: background 120ms, border-color 120ms, color 120ms;
}
.gs-fp .fp-ctrl:hover { border-color: var(--gs-hair-strong); color: var(--gs-ink); }
.gs-fp .fp-ctrl:focus-visible { outline: 2px solid var(--gs-ink); outline-offset: 1px; }
.gs-fp .fp-ctrl[aria-pressed="true"] { background: var(--gs-ink); color: var(--gs-page); border-color: var(--gs-ink); }
.gs-fp .fp-ctrl-txt { font-size: 14px; line-height: 1.5; color: var(--gs-ink-2); margin: 10px 0 0; min-height: 42px; }
.gs-fp .fp-ctrl-txt p { margin: 0; }
.gs-fp .fp-ctrl-list { margin: 0; padding: 0 0 0 18px; }
.gs-fp .fp-ctrl-list li { margin: 0 0 3px; padding-left: 2px; }
.gs-fp .fp-ctrl-list li::marker { color: var(--gs-ink-3); font-size: 0.85em; }
.gs-fp .fp-ctrl-txt .fp-ctrl-more { margin-top: 6px; }
.gs-fp .fp-ctrl-txt a {
  color: color-mix(in srgb, var(--gs-ink-2) 60%, var(--gs-ink-3));
  text-decoration: underline; text-decoration-color: var(--gs-hair-strong); text-underline-offset: 3px;
}
.gs-fp .fp-ctrl-txt a:hover { color: var(--gs-ink); text-decoration-color: var(--gs-ink-3); }
.gs-fp .fp-ctrl-txt strong { color: var(--gs-ink); font-weight: 600; }

@container gs-fp (max-width: 560px) {
  .gs-fp .fp-stage { padding: 16px 14px 14px; }
  .gs-fp .fp-band { padding: 12px 14px 14px; }
  .gs-fp .fp-legend { grid-template-columns: 1fr; }
  .gs-fp .prompt-area { font-size: 14.5px; }
  .gs-fp .menu-model { min-width: 240px; }
}
@media (prefers-reduced-motion: reduce) {
  .gs-fp *, .gs-fp *::before, .gs-fp *::after { animation: none !important; transition: none !important; }
}
`,y=[1,2,3],b=4,x=[...y,b],S=["files","tools","output","model"],C=new Set(S),w=e=>C.has(e),T={files:"/tutorials/navigating-the-claude-desktop-app",tools:"https://claude.com/connectors",output:"https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them",model:"/tutorials/choosing-the-right-claude-model"};function E({href:e,children:t}){return(0,_.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:t})}var D=[{kind:"docs",color:"#3f7fbf"},{kind:"slides",color:"#b7791f"},{kind:"design",color:"#7663b8"},{kind:"artifact",color:"#3d3d3a",plain:!0,suffix:!0}],O=[{id:"fable",short:"Fable",name:"Claude Fable"},{id:"opus",short:"Opus",name:"Claude Opus"},{id:"sonnet",short:"Sonnet",name:"Claude Sonnet"},{id:"haiku",short:"Haiku",name:"Claude Haiku"}],k=[{k:"drive",on:!0},{k:"email",on:!0},{k:"calendar",on:!0},{k:"messaging",on:!1},{k:"crm",on:!1}],A=e=>({"--k":e}),j={attach:"M6.068 2.161a2.72 2.72 0 0 1 3.524 1.533l3.206 8.14a1.61 1.61 0 0 1-.907 2.087l-.076.03a1.61 1.61 0 0 1-2.087-.908L8.027 8.726a.5.5 0 0 1 .93-.367l1.702 4.318a.61.61 0 0 0 .79.343l.076-.03a.61.61 0 0 0 .343-.79L8.662 4.06a1.72 1.72 0 0 0-2.227-.968l-.154.06a1.72 1.72 0 0 0-.97 2.228l3.87 9.821a2.826 2.826 0 0 0 3.665 1.594l.23-.09a2.83 2.83 0 0 0 1.595-3.666l-2.363-6a.5.5 0 1 1 .93-.366l2.363 6a3.826 3.826 0 0 1-2.158 4.962l-.23.09a3.827 3.827 0 0 1-4.963-2.157L4.382 5.747a2.72 2.72 0 0 1 1.532-3.525z",research:"M8.5 2a6.5 6.5 0 0 1 4.935 10.728l4.419 4.419.064.078a.5.5 0 0 1-.693.693l-.079-.064-4.419-4.42A6.5 6.5 0 1 1 8.5 2m0 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m3.1 3.51A.5.5 0 0 1 12 7v2a.5.5 0 0 1-1 0v-.793l-2.146 2.146a.5.5 0 0 1-.708 0L7 9.208l-1.146 1.146a.5.5 0 1 1-.708-.707l1.5-1.5.079-.064a.5.5 0 0 1 .629.064L8.5 9.293 10.293 7.5H9.5a.5.5 0 0 1 0-1h2z",web:"M7.27 3.05a7.467 7.467 0 1 1-.018.007l.01-.004zm1.372 11.478a8 8 0 0 0-1.464 1.362 6.53 6.53 0 0 0 3.373.62 6.2 6.2 0 0 1-.969-.835 10 10 0 0 1-.94-1.147m4.515-1.993c-.626.13-1.275.323-1.93.581-.654.258-1.26.56-1.808.892.276.386.555.73.835 1.02.45.468.88.788 1.258.958.376.17.665.178.881.093.218-.085.425-.289.584-.67.16-.383.257-.91.267-1.558a9 9 0 0 0-.087-1.316M3.637 8.52a6.5 6.5 0 0 0 .285 3.876 6.5 6.5 0 0 0 2.433 3.027 9 9 0 0 1 1.772-1.674 16.4 16.4 0 0 1-1.243-2.52 16.5 16.5 0 0 1-.81-2.693 9 9 0 0 1-2.436-.016m12.444 3.864a8 8 0 0 0-2 .003c.07.523.103 1.02.096 1.48a6.2 6.2 0 0 1-.14 1.272 6.53 6.53 0 0 0 2.044-2.755M11.095 6.77c-.607.37-1.271.701-1.98.981s-1.423.49-2.119.633c.165.79.417 1.638.757 2.5s.733 1.653 1.151 2.344c.607-.37 1.272-.701 1.982-.981s1.422-.49 2.117-.634a15.6 15.6 0 0 0-.756-2.499 15.6 15.6 0 0 0-1.152-2.344m2.548-2.194a9 9 0 0 1-1.77 1.674c.457.751.881 1.602 1.243 2.521.362.92.633 1.83.81 2.692a9 9 0 0 1 2.435.016 6.5 6.5 0 0 0-.282-3.875 6.5 6.5 0 0 0-2.436-3.028m-7.681.286a6.53 6.53 0 0 0-2.044 2.753c.603.08 1.279.082 1.999-.002-.07-.523-.1-1.02-.094-1.48a6.2 6.2 0 0 1 .139-1.27m2.526-.85c-.376-.17-.665-.177-.883-.091s-.423.288-.583.669c-.16.383-.256.91-.266 1.557a9 9 0 0 0 .086 1.316c.627-.13 1.276-.321 1.93-.58.655-.257 1.26-.561 1.807-.893a9 9 0 0 0-.833-1.02c-.45-.468-.88-.787-1.258-.957m4.334.096a6.53 6.53 0 0 0-3.372-.62c.328.224.654.506.969.834q.48.5.94 1.147a8 8 0 0 0 1.464-1.362"};function M({name:e}){return(0,_.jsx)("svg",{className:"ico",viewBox:"0 0 20 20","aria-hidden":"true",children:(0,_.jsx)("path",{fill:"currentColor",d:j[e]})})}function N({name:e}){let t={strokeLinecap:"round",strokeLinejoin:"round"},n={className:"ico-line",viewBox:"0 0 20 20","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.2"};switch(e){case"folder":return(0,_.jsxs)("svg",{...n,...t,children:[(0,_.jsx)("path",{d:"M3 6.5A1.5 1.5 0 0 1 4.5 5h3.6l1.5 1.8h6A1.5 1.5 0 0 1 17 8.3v6.2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5z"}),(0,_.jsx)("path",{d:"M10 9.5v4M8 11.5h4"})]});case"record-skill":return(0,_.jsxs)("svg",{...n,...t,children:[(0,_.jsx)("rect",{x:"3",y:"6",width:"10",height:"8",rx:"1.5"}),(0,_.jsx)("path",{d:"M13 9l4-2v6l-4-2z"})]});case"design-system":return(0,_.jsxs)("svg",{...n,children:[(0,_.jsx)("path",{d:"M10 3a7 7 0 1 0 0 14c1.1 0 1.5-.7 1.5-1.4 0-.9-.8-1.2-.8-2.1 0-.8.6-1.4 1.5-1.4H14a3 3 0 0 0 3-3C17 5.8 13.9 3 10 3Z"}),(0,_.jsx)("circle",{cx:"6.5",cy:"9",r:".9",fill:"currentColor"}),(0,_.jsx)("circle",{cx:"9",cy:"6",r:".9",fill:"currentColor"}),(0,_.jsx)("circle",{cx:"12.6",cy:"6.4",r:".9",fill:"currentColor"})]});case"plugins":return(0,_.jsx)("svg",{...n,...t,children:(0,_.jsx)("path",{d:"M8 3.5v3M12 3.5v3M6 6.5h8v3a4 4 0 0 1-8 0zM10 13.5v3"})});case"memory":return(0,_.jsx)("svg",{...n,...t,children:(0,_.jsx)("path",{d:"M4.5 10a5.5 5.5 0 1 1 1.6 3.9M4.5 10l-1.5-1.5M4.5 10l1.6-1.4M10 7v3.2l2 1.3"})});case"browse-connectors":return(0,_.jsx)("svg",{...n,...t,children:(0,_.jsx)("path",{d:"M4 4.5v11M7 4.5v11M10.5 5l3 10.5M15 4.5l2 11"})});case"manage-connectors":return(0,_.jsxs)("svg",{...n,...t,children:[(0,_.jsx)("rect",{x:"3",y:"6",width:"14",height:"9",rx:"1.5"}),(0,_.jsx)("path",{d:"M7 6V4.5h6V6M3 10h14"})]})}}function P({kind:e}){switch(e){case"docs":return(0,_.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,_.jsx)("path",{d:"M4 2.5h5.5l3 3v8H4z"}),(0,_.jsx)("path",{d:"M9.5 2.5v3h3M6 8.5h4.5M6 11h4.5"})]});case"slides":return(0,_.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,_.jsx)("rect",{x:"2.5",y:"3.5",width:"11",height:"7.5",rx:"1.2"}),(0,_.jsx)("path",{d:"M8 11v2M5.5 13.2h5"})]});case"design":return(0,_.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,_.jsx)("rect",{x:"2.5",y:"2.5",width:"5",height:"5",rx:"1"}),(0,_.jsx)("rect",{x:"8.5",y:"8.5",width:"5",height:"5",rx:"1"}),(0,_.jsx)("circle",{cx:"11",cy:"5",r:"2.3"}),(0,_.jsx)("rect",{x:"2.5",y:"8.5",width:"5",height:"5",rx:"1"})]});case"artifact":return(0,_.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,_.jsx)("circle",{cx:"5",cy:"5.5",r:"2.3"}),(0,_.jsx)("circle",{cx:"11",cy:"5.5",r:"2.3"}),(0,_.jsx)("path",{d:"M2.5 13.5c0-2 1.2-3.2 2.5-3.2s2.5 1.2 2.5 3.2M8.5 13.5c0-2 1.2-3.2 2.5-3.2s2.5 1.2 2.5 3.2"})]})}}function F(){return(0,_.jsxs)("svg",{className:"ico",viewBox:"0 0 20 20","aria-hidden":"true",fill:"currentColor",children:[(0,_.jsx)("path",{d:"M13.04 7.304a.5.5 0 0 1 .92.392C13.665 8.386 13.089 9 12.3 9c-.487 0-.892-.234-1.2-.574-.309.34-.713.574-1.2.574-.486 0-.892-.234-1.2-.574-.31.34-.714.574-1.2.574a.5.5 0 0 1 0-1c.212 0 .52-.18.74-.696a.5.5 0 0 1 .92 0c.221.516.528.696.74.696.213 0 .52-.18.74-.696l.035-.067a.5.5 0 0 1 .885.067c.22.516.527.696.74.696s.519-.18.74-.696"}),(0,_.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 3a2 2 0 0 1 2 2v8h1.5a.5.5 0 0 1 .5.5V15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4H4a1 1 0 0 0-.745 1.667.5.5 0 0 1-.745.666A2 2 0 0 1 4 3zM6 15a1 1 0 1 0 2 0v-1.5a.5.5 0 0 1 .5-.5H15V5a1 1 0 0 0-1-1H6zm3 0c0 .365-.1.706-.27 1H16a1 1 0 0 0 1-1v-1H9z"})]})}function I(){return(0,_.jsxs)("svg",{className:"ico",viewBox:"0 0 20 20","aria-hidden":"true",fill:"currentColor",children:[(0,_.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 6a1 1 0 0 1 1 .999V11h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 10h4v-4H9zm-5 0h4v-4H4zm0-5h4V7H4z"}),(0,_.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.103 3.005A1 1 0 0 1 17 4v4l-.005.103a1 1 0 0 1-.893.892L16 9h-4a1 1 0 0 1-.995-.897L11 8V4a1 1 0 0 1 1-1h4zM12 8h4V4h-4z"})]})}function L({conn:e}){let t={className:"ico-line",viewBox:"0 0 20 20","aria-hidden":!0,fill:"none",stroke:"currentColor"};switch(e){case"drive":return(0,_.jsx)("svg",{...t,strokeWidth:"1.5",strokeLinejoin:"round",children:(0,_.jsx)("path",{d:"M3 6.5A1.5 1.5 0 0 1 4.5 5h3.6l1.5 1.8h6A1.5 1.5 0 0 1 17 8.3v6.2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5z"})});case"email":return(0,_.jsxs)("svg",{...t,strokeWidth:"1.5",strokeLinejoin:"round",children:[(0,_.jsx)("rect",{x:"2.5",y:"4.5",width:"15",height:"11",rx:"1.5"}),(0,_.jsx)("path",{d:"M2.5 5.5L10 11.5L17.5 5.5"})]});case"calendar":return(0,_.jsxs)("svg",{...t,strokeWidth:"1.5",children:[(0,_.jsx)("rect",{x:"3",y:"4.5",width:"14",height:"12.5",rx:"2"}),(0,_.jsx)("path",{d:"M3 8.2h14M6.7 2.5v3.5M13.3 2.5v3.5"})]});case"messaging":return(0,_.jsxs)("svg",{...t,strokeWidth:"1.5",strokeLinejoin:"round",children:[(0,_.jsx)("path",{d:"M3 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H8.5L5 17.5v-3a2 2 0 0 1-2-2z"}),(0,_.jsx)("path",{d:"M6.5 8h7M6.5 11h4.5"})]});case"crm":return(0,_.jsxs)("svg",{...t,strokeWidth:"1.5",strokeLinejoin:"round",children:[(0,_.jsx)("rect",{x:"2.5",y:"4",width:"15",height:"12",rx:"2"}),(0,_.jsx)("circle",{cx:"7",cy:"9",r:"1.8"}),(0,_.jsx)("path",{d:"M4.5 13.5c.5-1.5 1.4-2.1 2.5-2.1s2 .6 2.5 2.1M12 8h3.5M12 11h3.5"})]})}}var R=[{sel:"files",icon:(0,_.jsx)(M,{name:"attach"}),tail:"kbd"},{sel:"folder",icon:(0,_.jsx)(N,{name:"folder"}),tail:"none"},{sel:"record-skill",icon:(0,_.jsx)(N,{name:"record-skill"}),tail:"none"},{sel:"skills",icon:(0,_.jsx)(F,{}),tail:"chev",sep:!0},{sel:"tools",icon:(0,_.jsx)(I,{}),tail:"chev",sub:!0},{sel:"design-system",icon:(0,_.jsx)(N,{name:"design-system"}),tail:"chev"},{sel:"plugins",icon:(0,_.jsx)(N,{name:"plugins"}),tail:"chev"},{sel:"research",icon:(0,_.jsx)(M,{name:"research"}),tail:"check",checked:!1,sep:!0},{sel:"web-search",icon:(0,_.jsx)(M,{name:"web"}),tail:"check",checked:!0},{sel:"memory",icon:(0,_.jsx)(N,{name:"memory"}),tail:"check",checked:!0}];function z(){let e=a(),[t,n]=(0,g.useState)(null),[s,d]=(0,g.useState)(null),C=(0,g.useRef)(null),j=e=>({onMouseEnter:()=>n(e),onMouseLeave:()=>n(null)}),M=s==="output",F=s==="model",I=s!==null&&!M&&!F,z=s==="tools";(0,g.useEffect)(()=>{let e=e=>{e&&C.current?.contains(e.target)||d(null)},t=t=>{t.key==="Escape"&&e()};return document.addEventListener("click",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("click",e),document.removeEventListener("keydown",t)}},[]);let B=e=>t=>{t.stopPropagation(),e()},V=e=>e.stopPropagation(),H=e=>{e.key!=="Escape"&&e.stopPropagation()},U=e=>d(t=>t===e?null:e),W=e=>d(e),G=r({href:T.files,target:"_blank"}).href,K=r({href:T.model,target:"_blank"}).href,q={...T,files:G??T.files,model:K??T.model},J=s?w(s)?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("ul",{className:"fp-ctrl-list",children:e.seq(`controls.${s}.b`).map(e=>(0,_.jsx)("li",{children:e},e))}),(0,_.jsx)("p",{className:"fp-ctrl-more",children:(0,_.jsx)(E,{href:q[s],children:e(`controls.${s}.link`)})})]}):(0,_.jsx)("p",{children:e.rich(`controls.txt.${s}`,{lead:i})}):(0,_.jsx)("p",{children:e("controls.default")});return(0,_.jsx)(o,{className:"gs-fp",css:v,children:(0,_.jsxs)("div",{className:"fp-frame",children:[(0,_.jsxs)("div",{className:"fp-stage",children:[(0,_.jsxs)("div",{className:"composer",children:[(0,_.jsx)("div",{className:"files-row",children:(0,_.jsxs)("div",{className:h("file-card",t===b&&"hot",s==="files"&&"spot"),...j(b),children:[(0,_.jsx)("div",{className:"file-name",children:"planning-meeting-transcript.docx"}),(0,_.jsx)("div",{className:"file-tag",children:"DOCX"})]})}),(0,_.jsx)("div",{className:"prompt-area",children:y.map((n,r)=>(0,_.jsxs)("span",{children:[r>0?" ":null,(0,_.jsx)("span",{className:h("fp-part",t===n&&"hot"),...j(n),children:e(`prompt.part${n}`)})]},n))}),(0,_.jsxs)("div",{className:"composer-row",children:[(0,_.jsx)("button",{type:"button",className:h("btn btn-add",I&&"spot"),"aria-label":e("add.aria"),"aria-haspopup":"menu","aria-expanded":I,onClick:B(()=>I?d(null):W("files")),children:(0,_.jsx)(p,{className:"ico"})}),(0,_.jsx)("span",{className:"grow"}),(0,_.jsx)("span",{className:"btn btn-send","aria-hidden":"true",children:(0,_.jsx)(l,{})})]}),(0,_.jsx)("div",{className:h("menu menu-add",I&&"open"),role:"menu","aria-label":e("add.aria"),tabIndex:-1,onClick:V,onKeyDown:H,children:R.map(t=>{let n=I&&s===t.sel,r=e(`addMenu.${t.sel}`),i={className:h("menu-row",n&&"lit"),tabIndex:I?0:-1,onMouseEnter:()=>{I&&s!==t.sel&&W(t.sel)},onFocus:()=>W(t.sel),onClick:B(()=>W(t.sel))};return(0,_.jsxs)(g.Fragment,{children:[t.sep?(0,_.jsx)("div",{className:"menu-sep"}):null,t.tail==="check"?(0,_.jsxs)("button",{type:"button",role:"menuitemcheckbox","aria-checked":t.checked===!0,"data-checked":t.checked?"true":"false",...i,children:[t.icon,(0,_.jsx)("span",{className:"label",children:r}),(0,_.jsx)("span",{className:"check","aria-hidden":"true",children:(0,_.jsx)(u,{})})]}):t.sub?(0,_.jsxs)("button",{type:"button",role:"menuitem","aria-haspopup":"menu","aria-expanded":z,"data-hl":z?"true":void 0,...i,children:[t.icon,(0,_.jsx)("span",{className:"label",children:r}),(0,_.jsx)(f,{className:"chev"})]}):(0,_.jsxs)("button",{type:"button",role:"menuitem",...i,children:[t.icon,(0,_.jsx)("span",{className:"label",children:r}),t.tail==="kbd"?(0,_.jsx)("span",{className:"suffix",children:(0,_.jsx)("span",{className:"kbd",children:"⌘U"})}):t.tail==="chev"?(0,_.jsx)(f,{className:"chev"}):(0,_.jsx)("span",{})]})]},t.sel)})}),(0,_.jsxs)("div",{className:h("menu menu-conn",z&&"open"),role:"menu","aria-label":e("addMenu.tools"),tabIndex:-1,onClick:V,onKeyDown:H,children:[(0,_.jsxs)("button",{type:"button",className:"menu-row",role:"menuitem",tabIndex:z?0:-1,onClick:V,children:[(0,_.jsx)(N,{name:"browse-connectors"}),(0,_.jsx)("span",{className:"label",children:e("conn.browse")}),(0,_.jsx)("span",{})]}),(0,_.jsxs)("button",{type:"button",className:"menu-row",role:"menuitem",tabIndex:z?0:-1,onClick:V,children:[(0,_.jsx)(N,{name:"manage-connectors"}),(0,_.jsx)("span",{className:"label",children:e("conn.manage")}),(0,_.jsx)("span",{})]}),(0,_.jsx)("div",{className:"menu-sep"}),k.map(t=>(0,_.jsxs)("button",{type:"button",className:"menu-row conn-toggle",role:"menuitemcheckbox","aria-checked":t.on,"data-on":t.on?"true":"false",tabIndex:z?0:-1,onClick:V,children:[(0,_.jsx)(L,{conn:t.k}),(0,_.jsx)("span",{className:"label",children:e(`conn.cat.${t.k}`)}),(0,_.jsx)("span",{className:"toggle","aria-hidden":"true"})]},t.k))]}),(0,_.jsx)("div",{className:h("menu menu-output",M&&"open"),role:"menu","aria-label":e("chin.output"),tabIndex:-1,onClick:V,onKeyDown:H,children:D.map(t=>(0,_.jsxs)(g.Fragment,{children:[t.plain?(0,_.jsx)("div",{className:"menu-sep"}):null,(0,_.jsxs)("button",{type:"button",className:"menu-row out-row",style:A(t.color),role:"menuitem",tabIndex:M?0:-1,onClick:V,children:[(0,_.jsx)("span",{className:h("tico",t.plain&&"plain"),"aria-hidden":"true",children:(0,_.jsx)(P,{kind:t.kind})}),(0,_.jsx)("span",{className:"label",children:e(`output.${t.kind}`)}),t.suffix?(0,_.jsx)("span",{className:"suffix",children:e(`output.${t.kind}.suffix`)}):(0,_.jsx)("span",{})]})]},t.kind))}),(0,_.jsxs)("div",{className:h("menu menu-model anchor-right",F&&"open"),role:"menu","aria-label":e("chin.model"),tabIndex:-1,onClick:V,onKeyDown:H,children:[O.map(t=>{let n=t.short===c;return(0,_.jsxs)("button",{type:"button",className:"menu-row model-row",role:"menuitemradio","aria-checked":n,"data-selected":n?"true":"false",tabIndex:F?0:-1,onClick:V,children:[(0,_.jsx)("span",{className:"check-mark","aria-hidden":"true",children:"✓"}),(0,_.jsxs)("span",{className:"meta",children:[(0,_.jsx)("span",{className:"name",children:t.name}),(0,_.jsx)("span",{className:"desc",children:e(`model.${t.id}.desc`)})]})]},t.short)}),(0,_.jsx)("div",{className:"menu-sep"}),(0,_.jsxs)("button",{type:"button",className:"menu-row effort-row",role:"menuitem",tabIndex:F?0:-1,onClick:V,children:[(0,_.jsx)("span",{}),(0,_.jsx)("span",{className:"label",children:e("model.effort")}),(0,_.jsx)(f,{className:"chev"})]})]})]}),(0,_.jsxs)("div",{className:"chin",children:[(0,_.jsx)("span",{className:"btn btn-chin",children:e("chin.project")}),(0,_.jsx)("button",{type:"button",className:h("btn btn-chin",M&&"spot"),"aria-haspopup":"menu","aria-expanded":M,onClick:B(()=>U("output")),children:e("chin.output")}),(0,_.jsx)("span",{className:"grow"}),(0,_.jsxs)("button",{type:"button",className:h("btn btn-model",F&&"spot"),"aria-haspopup":"menu","aria-expanded":F,"aria-label":e("chin.modelAria",{model:c}),onClick:B(()=>U("model")),children:[(0,_.jsx)("span",{children:c}),(0,_.jsx)(m,{className:"caret"})]})]})]}),(0,_.jsxs)("div",{className:"fp-band",children:[(0,_.jsx)("div",{className:"fp-band-h",children:e("legend.title")}),(0,_.jsx)("ul",{className:"fp-legend",children:x.map(n=>(0,_.jsxs)("li",{className:h(t===n&&"hot"),...j(n),children:[(0,_.jsx)("span",{className:"fp-n",children:n}),(0,_.jsx)("span",{children:e.rich(`legend.item${n}`,{lead:i})})]},n))})]}),(0,_.jsxs)("div",{className:"fp-band",children:[(0,_.jsx)("div",{className:"fp-band-h",children:e("controls.title")}),(0,_.jsx)("div",{className:"fp-ctrls",role:"group","aria-label":e("controls.title"),children:S.map(t=>(0,_.jsx)("button",{type:"button",className:"fp-ctrl","aria-pressed":s===t,onClick:B(()=>U(t)),children:e(`controls.pill.${t}`)},t))}),(0,_.jsx)("div",{className:"fp-ctrl-txt","aria-live":"polite",ref:C,children:J})]})]})})}export{z as default};