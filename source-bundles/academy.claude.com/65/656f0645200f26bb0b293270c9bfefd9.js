import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{i as t,r as n}from"../../../../react-n2kbymz5.js";import{A as r}from"../../../../ResourceWidget-fcv47qgx.js";import{a as i,i as a,r as o}from"../../../../ArtifactsTutorialKit-hzaawq1p.js";import{a as s,i as c,n as l,r as u,t as d}from"../../../../ArtifactPreviews-i3qc56g2.js";import"../../../../_shared-go3c9314.js";var f=e(t(),1),p=n(),m={docs:{hue:"var(--cds-blue-500, #256abf)",glyph:(0,p.jsx)(i,{name:"File"})},slides:{hue:"#b7791f",glyph:(0,p.jsx)(i,{name:"Slides"})},design:{hue:"#7663b8",glyph:(0,p.jsx)(i,{name:"Palette"})},sheets:{hue:"var(--cds-green-500, #008300)",glyph:(0,p.jsx)(i,{name:"Spreadsheet"})},dashboard:{hue:"var(--cds-red-500, #b93535)",glyph:(0,p.jsx)(i,{name:"Chart"})},motion:{hue:"var(--cds-aqua-500, #0f7e5c)",glyph:(0,p.jsx)(i,{name:"PlayCircle"})},custom:{hue:"var(--cds-text-muted, #73726c)",glyph:(0,p.jsx)(i,{name:"Artifacts"})}},h=`
  .kind-tile {
    display: flex; align-items: center; justify-content: center; flex: none;
    width: 36px; height: 36px; border-radius: 9px;
    color: var(--kind-hue);
    background: color-mix(in srgb, var(--kind-hue) 16%, transparent);
  }
`;function g({kind:e}){let t=m[e];return(0,p.jsx)("span",{className:"kind-tile","aria-hidden":"true",style:{"--kind-hue":t.hue},children:t.glyph})}var _=`
    .gs-rs .rs-stage { height: 400px; }
    .gs-rs .rs-sh-grid .row.spare, .gs-rs .rs-sh-bar { display: none; }
    .gs-rs .rs-db-body { position: relative; }
    .gs-rs .rs-db-side { position: absolute; inset: 0 0 0 auto; width: min(100%, 230px); max-width: none; box-shadow: -8px 0 24px -12px rgba(0,0,0,0.25); }
    .gs-rs .rs-mo-tw { position: absolute; z-index: 3; inset: 0 0 0 auto; width: min(100%, 210px); max-width: none; box-shadow: -8px 0 24px -12px rgba(0,0,0,0.25); }
`,v=`
.gs-rs {
  --gs-ink: var(--cds-text-primary, #141413);
  --gs-ink-2: var(--cds-text-secondary, #3d3d3a);
  --gs-ink-3: var(--cds-text-muted, #73726c);
  --gs-hair: var(--cds-border, rgba(31, 30, 29, 0.12));
  --gs-page: var(--cds-surface-0, #ffffff);
  --gs-sans: var(--cds-font-sans, "anthropic-sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  --gs-serif: var(--cds-font-voice, "anthropic-serif", Georgia, "Times New Roman", serif);
  --gs-mono: var(--cds-font-mono, "anthropic-mono", ui-monospace, "SF Mono", Menlo, monospace);
  --rs-ground: #fcfcfb;
  --rs-bg-000: #ffffff;
  --rs-bg-100: #f9f9f7;
  --rs-bg-200: #f5f4ed;
  --rs-bg-300: #f0eee6;
  --rs-text-000: #141413;
  --rs-text-100: #1f1e1d;
  --rs-text-200: #3d3d3a;
  --rs-text-300: #535350;
  --rs-text-400: #73726c;
  --rs-hair: rgba(31, 30, 29, 0.10);
  --rs-hair-soft: rgba(31, 30, 29, 0.06);
  --rs-brand: #c96442;
  --rs-ease: cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  container: gs-rs / inline-size;
  font-family: var(--gs-sans);
  color: var(--gs-ink);
  -webkit-font-smoothing: antialiased;
  padding: 4px 0;
}
.gs-rs *, .gs-rs *::before, .gs-rs *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ---- the picker ----
     One row at the article's full width: each kind's tile over its name, lit whether or not it is selected, so the row looks pressable at rest.
     What is selected is raised and white, and nothing else is filled. Color belongs to the seven tiles alone.
     The row clips what leaves it; the side room keeps the clip off the selected cell's shadow. */
  ${h}
  .gs-rs .rs-subtabs { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 4px; margin: 0 -4px; padding: 0 4px 4px; overflow: hidden; font-family: var(--gs-sans); }
  .gs-rs .rs-subtab {
    margin: 0; border: 0; background: transparent; font-family: inherit; font-weight: 500; color: var(--gs-ink-2); white-space: nowrap; cursor: pointer;
    transition: color 160ms ease, background-color 160ms ease, box-shadow 160ms ease;
    display: flex; flex-direction: column; align-items: center; gap: 8px; min-width: 0; padding: 12px 4px 10px; border-radius: 12px; font-size: 13.5px; line-height: 18px;
  }
  .gs-rs .rs-subtab:hover { color: var(--gs-ink); background: var(--cds-alpha-1, rgba(31, 30, 29, 0.05)); }
  .gs-rs .rs-subtab[aria-selected="true"] {
    color: var(--gs-ink); background: var(--cds-surface-2, var(--gs-page)); box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 0 0 0.5px var(--gs-hair);
  }
  .gs-rs .rs-subtab:focus-visible { outline: 2px solid #6a9bcc; outline-offset: -2px; }
  /* a name and its pill share a line where they fit the cell; where they don't, the pill goes under the name */
  .gs-rs .rs-subtab .klabel { display: inline-flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 2px 5px; max-width: 100%; }
  /* the gray "Beta" pill Claude sets after a kind's name, drawn a step smaller to sit in the row */
  .gs-rs .rs-subtab .kbeta { display: inline-flex; align-items: center; height: 15px; padding: 0 5px; border-radius: 4px; font-size: 10px; font-weight: 500; line-height: 1; color: var(--gs-ink-3); background: var(--cds-alpha-1, rgba(31, 30, 29, 0.06)); }

  /* ---- the two lines under the picker ----
     Two jobs, two looks. What you get is the article's body text. One way to ask sits a step under it: its lead-in is quieter, and the prompt is in italics
     like every other example prompt on the page. */
  .gs-rs .rs-texts { display: grid; margin: 20px 0; font-family: var(--gs-sans); font-size: 16px; line-height: 26px; font-weight: 400; }
  .gs-rs .rs-text { grid-area: 1 / 1; visibility: hidden; display: grid; gap: 6px; align-content: start; }
  .gs-rs .rs-text.is-on { visibility: visible; }
  .gs-rs .rs-get, .gs-rs .rs-eg { margin: 0; text-wrap: pretty; }
  .gs-rs .rs-get { color: var(--gs-ink-2); }
  .gs-rs .rs-get b { font-weight: 600; color: var(--gs-ink); }
  .gs-rs .rs-eg { color: var(--gs-ink-3); }
  .gs-rs .rs-eg em { font-style: italic; color: var(--gs-ink-2); }
  .gs-rs .rs-sr { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }

  /* ---- the pane: a light window with a hairline and a soft shadow ----
     No tinted ground: the picture is the only thing with color in it. SteerAnArtifact's window is drawn the same way. */
  .gs-rs .rs-frame { border: 0.5px solid rgba(31,30,29,0.12); border-radius: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.05), 0 4px 24px rgba(0,0,0,0.02); overflow: hidden; background: var(--rs-ground); }
  .gs-rs .rs-stage { position: relative; isolation: isolate; height: 460px; overflow: hidden; text-align: left; transition: height 300ms var(--rs-ease); }
  .gs-rs .rs-fbar-share:focus-visible, .gs-rs .rs-sl-tb button.tbtn:focus-visible, .gs-rs .rs-present-bar .x:focus-visible { outline: 2px solid var(--rs-text-000); outline-offset: 2px; }
  /* the panel's own focus ring is a layer over the pane: the pane fills the panel and would paint over an outline */
  .gs-rs .rs-stage:focus-visible { outline: none; }
  .gs-rs .rs-stage:focus-visible::after { content: ""; position: absolute; inset: 1px; z-index: 9; border: 2px solid var(--rs-text-000); border-radius: 15px; pointer-events: none; }
  .gs-rs .rs-panel { position: relative; display: flex; flex-direction: column; width: 100%; height: 100%; overflow: hidden; background: var(--rs-bg-000); }
  .gs-rs .rs-panel-body { flex: 1; width: 100%; min-width: 0; min-height: 0; overflow: hidden; position: relative; }
  .gs-rs .rs-kpane { display: none; }
  .gs-rs .rs-kpane.on { display: flex; flex-direction: column; width: 100%; height: 100%; }

  /* the pane's header: title, who else is here, Comment, Share */
  .gs-rs .rs-fbar { display: flex; align-items: center; justify-content: flex-start; width: 100%; gap: 6px; padding: 7px 8px 7px 12px; border-bottom: 0.5px solid var(--rs-hair-soft); flex-shrink: 0; font-family: var(--gs-sans); }
  .gs-rs .rs-fbar-title { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 500; color: var(--rs-text-100); min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .gs-rs .rs-fbar-title svg { width: 10px; height: 10px; color: var(--rs-text-400); flex-shrink: 0; }
  .gs-rs .rs-fbar-sp { flex: 1; }
  .gs-rs .rs-fbar-faces { display: inline-flex; align-items: center; margin-right: 2px; }
  .gs-rs .rs-face { width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid var(--rs-bg-000); margin-left: -5px; font-size: 7.5px; font-weight: 600; color: #fff; display: inline-flex; align-items: center; justify-content: center; letter-spacing: 0.02em; }
  .gs-rs .rs-face:first-child { margin-left: 0; }
  .gs-rs .rs-face.a { background: #5b7a9c; } .gs-rs .rs-face.b { background: #8a6d9e; }
  /* the save dot beside the title: there only while a save is in flight; its words are a tooltip */
  .gs-rs .rs-fbar-saving { width: 6px; height: 6px; border-radius: 50%; background: var(--rs-text-400); opacity: 0.55; flex-shrink: 0; animation: gsRsPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
  @keyframes gsRsPulse { 50% { opacity: 0.2; } }
  .gs-rs .rs-fbar-ic { width: 22px; height: 22px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; color: var(--rs-text-400); flex-shrink: 0; }
  .gs-rs .rs-fbar-ic svg { width: 13px; height: 13px; }
  .gs-rs .rs-fbar-share { display: inline-flex; align-items: center; gap: 3px; height: 22px; font-size: 10.5px; font-weight: 500; color: #fff; background: #0b0b0b; border: 0; border-radius: 5.5px; padding: 0 8px; flex-shrink: 0; cursor: pointer; margin: 0; font-family: inherit; position: relative; }
  .gs-rs .rs-fbar-share:hover, .gs-rs .rs-fbar-share[aria-expanded="true"] { background: #2c2c2a; }
  /* share sheet */
  .gs-rs .rs-share { position: absolute; top: 38px; right: 10px; width: 236px; background: var(--rs-bg-000); border: 0.5px solid rgba(31,30,29,0.14); border-radius: 12px; box-shadow: 0 10px 34px -8px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.06); padding: 12px 12px 10px; font-family: var(--gs-sans); z-index: 6; display: none; text-align: left; }
  .gs-rs .rs-share.on { display: block; }
  .gs-rs .rs-share-tabs { display: flex; gap: 12px; font-size: 11px; font-weight: 500; color: var(--rs-text-400); border-bottom: 0.5px solid var(--rs-hair-soft); padding-bottom: 7px; margin-bottom: 9px; }
  .gs-rs .rs-share-tabs span.on { color: var(--rs-text-000); box-shadow: 0 7.5px 0 -6.5px var(--rs-text-000); }
  .gs-rs .rs-share-h { font-size: 10px; font-weight: 600; color: var(--rs-text-300); margin-bottom: 6px; }
  .gs-rs .rs-share-opt { display: flex; align-items: center; gap: 8px; font-size: 11px; color: var(--rs-text-200); padding: 5px 6px; border-radius: 7px; }
  .gs-rs .rs-share-opt.on { color: var(--rs-text-000); }
  .gs-rs .rs-share-opt .chk { color: #184f95; flex-shrink: 0; margin-left: auto; margin-right: -2px; }
  .gs-rs .rs-share-opt.off { opacity: 0.4; }
  .gs-rs .rs-share-note { font-size: 9.5px; color: var(--rs-text-400); line-height: 1.4; margin: 6px 6px 8px; }
  .gs-rs .rs-share-foot { display: flex; justify-content: flex-end; border-top: 0.5px solid var(--rs-hair-soft); padding-top: 8px; }
  .gs-rs .rs-share-copy { display: inline-flex; align-items: center; gap: 3px; height: 25px; font-size: 10.5px; color: #0b0b0b; background: rgba(255,255,255,0.1); box-shadow: inset 0 0 0 1px rgba(11,11,11,0.10), 0 1px 2px rgba(0,0,0,0.05); border-radius: 6px; padding: 0 9px 0 7px; }

  /* --- Slides: the editor, with a deck in ivory, slate and clay under light serif headings --- */
  .gs-rs .rs-sl { flex: 1; min-height: 0; display: flex; flex-direction: column; background: #f5f4ed; font-family: var(--gs-sans); position: relative; }
  .gs-rs .rs-sl-tb { display: flex; align-items: center; gap: 4px; padding: 6px 8px; border-bottom: 0.5px solid var(--rs-hair-soft); background: var(--rs-bg-000); flex-shrink: 0; font-size: 10.5px; color: var(--rs-text-300); }
  .gs-rs .rs-sl-tb .tbtn { display: inline-flex; align-items: center; gap: 4px; padding: 3.5px 7px; border-radius: 6px; cursor: default; white-space: nowrap; position: relative; }
  .gs-rs .rs-sl-tb .tbtn.click { cursor: pointer; } .gs-rs .rs-sl-tb .tbtn.click:hover { background: var(--rs-bg-200); color: var(--rs-text-100); }
  .gs-rs .rs-sl-tb .tbtn svg { width: 11px; height: 11px; }
  .gs-rs .rs-sl-tb .tsep { width: 0.5px; height: 14px; background: var(--rs-hair); margin: 0 3px; }
  .gs-rs .rs-sl-tb .tgrow { flex: 1; }
  .gs-rs .rs-sl-tb .tbtn.primary { background: var(--rs-text-000); color: var(--rs-bg-000); padding: 4px 9px; } .gs-rs .rs-sl-tb .tbtn.primary:hover { background: #2c2c2a; color: #fff; }
  .gs-rs .rs-menu { position: absolute; top: 26px; right: 0; min-width: 190px; background: var(--rs-bg-000); border: 0.5px solid rgba(31,30,29,0.14); border-radius: 10px; box-shadow: 0 10px 30px -8px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.06); padding: 5px; z-index: 7; display: none; text-align: left; color: var(--rs-text-200); }
  .gs-rs .rs-menu.on { display: block; }
  .gs-rs .rs-menu .mi { padding: 5px 8px; border-radius: 6px; font-size: 11px; white-space: nowrap; } .gs-rs .rs-menu .mi:hover { background: var(--rs-bg-200); }
  .gs-rs .rs-menu .msep { height: 0.5px; background: var(--rs-hair-soft); margin: 4px 2px; }
  .gs-rs .rs-menu .mgrp { font-size: 9.5px; color: var(--rs-text-400); padding: 3px 8px 2px; }
  .gs-rs .rs-sl-body { flex: 1; min-height: 0; display: flex; }
  .gs-rs .rs-sl-rail { width: 58px; flex-shrink: 0; padding: 10px 8px; display: flex; flex-direction: column; gap: 7px; overflow: hidden; border-right: 0.5px solid var(--rs-hair-soft); background: #f7f6f0; }
  .gs-rs .rs-sl-th { display: flex; gap: 4px; align-items: flex-start; }
  .gs-rs .rs-sl-th .n { font-size: 8px; color: var(--rs-text-400); width: 8px; text-align: right; padding-top: 1px; font-variant-numeric: tabular-nums; }
  .gs-rs .rs-sl-th .p { flex: 1; aspect-ratio: 16 / 9; background: #faf9f5; border-radius: 2px; box-shadow: 0 0 0 0.5px rgba(31,30,29,0.16); padding: 3px 4px; display: flex; flex-direction: column; gap: 2px; overflow: hidden; }
  .gs-rs .rs-sl-th.on .p { box-shadow: 0 0 0 1.5px #2c84db; }
  .gs-rs .rs-sl-th .p i { display: block; height: 1.5px; border-radius: 1px; background: #3d3d3a; width: 80%; opacity: 0.55; }
  .gs-rs .rs-sl-th .p i.h { height: 2.5px; width: 92%; opacity: 0.9; } .gs-rs .rs-sl-th .p i.s { width: 55%; } .gs-rs .rs-sl-th .p i.c { background: #d97757; width: 30%; opacity: 0.9; }
  .gs-rs .rs-sl-th .p .bx { display: flex; gap: 2px; margin-top: 1px; } .gs-rs .rs-sl-th .p .bx b { flex: 1; height: 9px; background: #e3dacc; border-radius: 1px; }
  .gs-rs .rs-sl-th .p .big { font-family: var(--gs-serif); font-size: 7px; font-weight: 300; color: #141413; line-height: 1; margin-top: 2px; }
  .gs-rs .rs-sl-canvas { flex: 1; min-width: 0; padding: 10px 12px 8px; display: flex; flex-direction: column; align-items: stretch; justify-content: flex-start; gap: 7px; container: gs-rs-slc / inline-size; position: relative; }
  .gs-rs .rs-slide16 { width: 100%; aspect-ratio: 16 / 9; background: #faf9f5; box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 8px 26px -10px rgba(0,0,0,0.16); position: relative; color: #141413; padding: 5.2cqw 5.4cqw 4cqw; display: flex; flex-direction: column; text-align: left; }
  .gs-rs .rs-slide16 .kick { font-family: var(--gs-sans); font-size: 1.55cqw; color: #3d3d3a; letter-spacing: 0.01em; margin-bottom: 1.6cqw; display: flex; align-items: center; gap: 1cqw; }
  .gs-rs .rs-slide16 .kick::before { content: ""; width: 2.2cqw; height: 0.35cqw; background: #d97757; }
  .gs-rs .rs-slide16 .ttl { font-family: var(--gs-serif); font-weight: 300; font-size: 3.55cqw; line-height: 1.14; letter-spacing: -0.012em; color: #141413; max-width: 92%; position: relative; }
  .gs-rs .rs-slide16 .ttl.editing { outline: 0.25cqw solid #2c84db; outline-offset: 0.8cqw; }
  .gs-rs .rs-slide16 .ttl.editing::before, .gs-rs .rs-slide16 .ttl.editing::after { content: ""; position: absolute; width: 1cqw; height: 1cqw; background: #fff; border: 0.25cqw solid #2c84db; }
  .gs-rs .rs-slide16 .ttl.editing::before { left: -1.35cqw; top: -1.35cqw; } .gs-rs .rs-slide16 .ttl.editing::after { right: -1.35cqw; bottom: -1.35cqw; }
  .gs-rs .rs-caret { display: inline-block; width: 0.28cqw; height: 3.3cqw; background: #141413; vertical-align: -0.45cqw; margin-left: 0.2cqw; animation: gsRsBlink 1.05s steps(1) infinite; }
  @keyframes gsRsBlink { 50% { opacity: 0; } }
  .gs-rs .rs-slide16 .row { display: flex; gap: 4cqw; margin-top: 2.6cqw; flex: 1; min-height: 0; }
  .gs-rs .rs-slide16 .chart { flex: 1.05; display: flex; flex-direction: column; }
  .gs-rs .rs-slide16 .chart .cl { font-size: 1.35cqw; color: #3d3d3a; margin-bottom: 0.8cqw; }
  .gs-rs .rs-slide16 .chart svg { flex: 1; width: 100%; min-height: 0; }
  .gs-rs .rs-slide16 .pts { flex: 1; display: flex; flex-direction: column; gap: 1.7cqw; padding-top: 0.4cqw; }
  .gs-rs .rs-slide16 .pt { display: flex; gap: 1.3cqw; }
  .gs-rs .rs-slide16 .pt .n { font-family: var(--gs-serif); font-weight: 300; font-size: 2.6cqw; color: #d97757; line-height: 1; width: 2cqw; flex-shrink: 0; }
  .gs-rs .rs-slide16 .pt .h { font-size: 1.6cqw; font-weight: 600; color: #141413; line-height: 1.3; }
  .gs-rs .rs-slide16 .pt .t { font-size: 1.35cqw; color: #3d3d3a; line-height: 1.4; margin-top: 0.3cqw; }
  .gs-rs .rs-slide16 .ft { display: flex; justify-content: space-between; font-size: 1.15cqw; color: #73726c; margin-top: 1.6cqw; }
  /* the comment's pin, and its thread */
  .gs-rs .rs-cpin { position: absolute; width: 2.6cqw; height: 2.6cqw; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); background: #5b7a9c; border: 0.3cqw solid #fff; box-shadow: 0 1px 4px rgba(0,0,0,0.25); }
  .gs-rs .rs-cpin span { display: block; transform: rotate(45deg); font-size: 1.1cqw; font-weight: 600; color: #fff; text-align: center; line-height: 2.1cqw; }
  .gs-rs .rs-cthread { position: relative; min-width: 0; background: #fff; border: 0.5px solid rgba(31,30,29,0.14); border-radius: 9px; box-shadow: 0 8px 24px -8px rgba(0,0,0,0.22); font-family: var(--gs-sans); text-align: left; z-index: 3; }
  .gs-rs .rs-cthread .who { display: flex; align-items: center; gap: 5px; font-size: 9.5px; font-weight: 600; color: var(--rs-text-100); }
  .gs-rs .rs-cthread .who .rs-face { width: 14px; height: 14px; font-size: 6.5px; border: none; margin: 0; }
  /* a bar stands for the person's name; the row stays as tall as a line of its text */
  .gs-rs .rs-cthread .who { min-height: 1.5em; }
  .gs-rs .rs-cthread .who .nm { width: 44px; height: 5px; border-radius: 3px; background: rgba(31, 30, 29, 0.18); }
  .gs-rs .rs-cthread .who small { font-weight: 400; color: var(--rs-text-400); font-size: 9px; margin-left: auto; }
  .gs-rs .rs-cthread .say { font-size: 10px; color: var(--rs-text-200); line-height: 1.4; margin: 3px 0 0; }
  .gs-rs .rs-cthread .say .at { font-weight: 500; color: #184f95; }
  .gs-rs .rs-sl-under .rs-cthread { padding: 6px 8px; } .gs-rs .rs-sl-under .rs-cthread .st { margin-top: 4px; padding-top: 4px; }
  .gs-rs .rs-cthread .st { display: flex; align-items: center; gap: 5px; font-size: 9px; color: var(--rs-text-400); margin-top: 6px; padding-top: 6px; border-top: 0.5px solid var(--rs-hair-soft); }
  .gs-rs .rs-cthread .st::before { content: ""; width: 8px; height: 8px; border-radius: 50%; border: 1.3px solid var(--rs-brand); border-right-color: transparent; animation: gsRsSpin 0.9s linear infinite; }
  @keyframes gsRsSpin { to { transform: rotate(360deg); } }
  .gs-rs .rs-cthread .st.done::before { animation: none; border: none; background: #6b8f4e; width: 6px; height: 6px; }
  .gs-rs .rs-sl-under { display: flex; align-items: flex-start; gap: 10px; } .gs-rs .rs-sl-under .rs-cthread { flex: 1; }
  .gs-rs .rs-sl-pager { display: flex; align-items: center; gap: 8px; padding-top: 4px; flex-shrink: 0; font-size: 9.5px; color: var(--rs-text-400); font-variant-numeric: tabular-nums; }
  .gs-rs .rs-sl-pager i { font-style: normal; width: 16px; height: 16px; border-radius: 5px; display: inline-flex; align-items: center; justify-content: center; background: var(--rs-bg-000); box-shadow: 0 0 0 0.5px var(--rs-hair); }
  .gs-rs .rs-sl-pager svg { width: 9px; height: 9px; }
  /* present mode */
  .gs-rs .rs-present { position: absolute; inset: 0; background: #000; z-index: 8; display: none; flex-direction: column; align-items: center; justify-content: center; padding: 10px 14px 0; container: gs-rs-slp / inline-size; }
  .gs-rs .rs-present.on { display: flex; }
  .gs-rs .rs-present .rs-slide16 { box-shadow: none; }
  .gs-rs .rs-present-bar { display: flex; align-items: center; gap: 12px; padding: 8px 0 9px; font-family: var(--gs-sans); font-size: 10px; color: rgba(255,255,255,0.86); }
  .gs-rs .rs-present-bar .cnt b { font-weight: 500; color: #fff; } .gs-rs .rs-present-bar .cnt { color: rgba(255,255,255,0.5); font-variant-numeric: tabular-nums; }
  .gs-rs .rs-present-bar .x { margin-left: 18px; cursor: pointer; padding: 2px 7px; border-radius: 5px; background: rgba(255,255,255,0.12); }

  /* --- Docs: the page on its ground, with a comment to Claude beside it --- */
  .gs-rs .rs-dc { flex: 1; min-height: 0; display: flex; flex-direction: column; background: #f5f4ed; font-family: var(--gs-sans); }
  .gs-rs .rs-dc-tb { display: flex; align-items: center; gap: 3px; padding: 6px 8px; border-bottom: 0.5px solid var(--rs-hair-soft); background: var(--rs-bg-000); flex-shrink: 0; font-size: 10.5px; color: var(--rs-text-300); }
  .gs-rs .rs-dc-tb .tbtn { padding: 3px 6px; border-radius: 5px; display: inline-flex; align-items: center; gap: 3px; white-space: nowrap; }
  .gs-rs .rs-dc-tb .tbtn svg { width: 10px; height: 10px; }
  .gs-rs .rs-dc-tb .tbtn.b { font-weight: 700; font-family: var(--gs-serif); } .gs-rs .rs-dc-tb .tbtn.i { font-style: italic; font-family: var(--gs-serif); }
  .gs-rs .rs-dc-tb .tsep { width: 0.5px; height: 13px; background: var(--rs-hair); margin: 0 3px; } .gs-rs .rs-dc-tb .tgrow { flex: 1; }
  .gs-rs .rs-dc-scroll { flex: 1; min-height: 0; overflow-y: auto; padding: 14px 14px 18px; scrollbar-width: thin; }
  .gs-rs .rs-dc-wrap { position: relative; max-width: 470px; margin: 0 auto; display: grid; grid-template-columns: minmax(0,1fr) 128px; gap: 10px; align-items: start; }
  .gs-rs .rs-dc-page { background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.07), 0 10px 28px -12px rgba(0,0,0,0.14); border-radius: 3px; padding: 22px 22px 26px; color: var(--rs-text-100); text-align: left; }
  .gs-rs .rs-dc-page h6 { font-family: var(--gs-serif); font-size: 17px; font-weight: 500; letter-spacing: -0.01em; margin: 0 0 3px; color: var(--rs-text-000); line-height: 1.2; }
  .gs-rs .rs-dc-page .meta { font-size: 9px; color: var(--rs-text-400); margin-bottom: 12px; }
  .gs-rs .rs-dc-page .h { font-family: var(--gs-sans); font-size: 10.5px; font-weight: 600; color: var(--rs-text-000); margin: 12px 0 4px; }
  .gs-rs .rs-dc-page p, .gs-rs .rs-dc-page li { font-family: var(--gs-serif); font-size: 10.5px; line-height: 1.6; color: var(--rs-text-200); margin: 0 0 6px; }
  .gs-rs .rs-dc-page ul { margin: 0 0 6px 14px; padding: 0; }
  .gs-rs .rs-dc-page mark { background: rgba(91,122,156,0.16); box-shadow: 0 0 0 1.5px rgba(91,122,156,0.16); color: inherit; border-radius: 2px; }
  .gs-rs .rs-dc-page mark.new { background: rgba(217,119,87,0.14); box-shadow: 0 0 0 1.5px rgba(217,119,87,0.14); }
  .gs-rs .rs-dc-page table { width: 100%; border-collapse: collapse; font-family: var(--gs-sans); font-size: 9px; margin: 4px 0 8px; }
  .gs-rs .rs-dc-page th { text-align: left; font-weight: 600; color: var(--rs-text-300); border-bottom: 0.5px solid rgba(31,30,29,0.3); padding: 3px 8px 3px 0; }
  .gs-rs .rs-dc-page td { border-bottom: 0.5px solid var(--rs-hair-soft); padding: 3px 8px 3px 0; } .gs-rs .rs-dc-page .n { text-align: right; font-variant-numeric: tabular-nums; }
  .gs-rs .rs-dc-page .pos { color: #4d6e3b; } .gs-rs .rs-dc-page .neg { color: #a23a2e; }
  .gs-rs .rs-dc-wrap .rs-cthread { margin: 150px 0 0; padding: 7px 8px; }
  .gs-rs .rs-dc-wrap .rs-cthread::before { content: ""; position: absolute; left: -11px; top: 14px; width: 10px; border-top: 1px solid rgba(217,119,87,0.55); }

  /* --- Design: three screens on one canvas, the middle one selected --- */
  .gs-rs .rs-dz { flex: 1; min-height: 0; display: flex; flex-direction: column; background: #eceae2; font-family: var(--gs-sans); }
  .gs-rs .rs-dz-tb { display: flex; align-items: center; gap: 5px; padding: 6px 8px; border-bottom: 0.5px solid var(--rs-hair-soft); background: var(--rs-bg-000); flex-shrink: 0; font-size: 10.5px; color: var(--rs-text-300); }
  .gs-rs .rs-dz-tb .tbtn svg { width: 9px; height: 9px; }
  .gs-rs .rs-dz-tb .tbtn { padding: 3px 7px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; } .gs-rs .rs-dz-tb .tgrow { flex: 1; }
  /* the three screens scale with their own row, which stops at 640px: at the full width of the article they would outgrow the pane */
  .gs-rs .rs-dz-canvas { flex: 1; min-height: 0; overflow: hidden; position: relative; background-image: radial-gradient(rgba(31,30,29,0.10) 0.6px, transparent 0.6px); background-size: 10px 10px; display: flex; align-items: center; justify-content: center; padding: 10px 12px 14px; }
  .gs-rs .rs-boards { container: gs-rs-dzc / inline-size; display: flex; gap: min(27px, 3.5%); align-items: flex-start; width: 100%; max-width: 640px; justify-content: center; }
  .gs-rs .rs-board { width: 24cqw; position: relative; }
  .gs-rs .rs-board .lab { font-size: max(8px, 1.9cqw); color: var(--rs-text-400); margin-bottom: 1.1cqw; white-space: nowrap; display: flex; gap: 1cqw; } .gs-rs .rs-board .lab b { font-weight: 500; color: var(--rs-text-200); }
  .gs-rs .rs-phone { --ds: #1f5c4a; --ds2: #e8b44c; --ink: #17201c; width: 100%; aspect-ratio: 9 / 18.5; background: #fbfaf6; border-radius: 3.2cqw; box-shadow: 0 0.6cqw 2.4cqw -0.8cqw rgba(0,0,0,0.28), 0 0 0 0.5px rgba(31,30,29,0.16); padding: 3.4cqw 2.4cqw 2.6cqw; display: flex; flex-direction: column; gap: 1.5cqw; overflow: hidden; position: relative; text-align: left; color: var(--ink); }
  .gs-rs .rs-phone .sb { display: flex; justify-content: space-between; font-size: 1.3cqw; font-weight: 600; opacity: 0.7; }
  .gs-rs .rs-phone .logo { font-family: var(--gs-serif); font-size: 2.1cqw; font-weight: 500; color: var(--ds); letter-spacing: -0.01em; display: flex; align-items: center; gap: 0.8cqw; }
  .gs-rs .rs-phone .logo::before { content: ""; width: 1.8cqw; height: 1.8cqw; border-radius: 0.5cqw; background: linear-gradient(135deg, var(--ds) 50%, var(--ds2) 50%); }
  .gs-rs .rs-phone .hero { font-family: var(--gs-serif); font-size: 2.75cqw; line-height: 1.12; font-weight: 400; letter-spacing: -0.015em; margin-top: 1cqw; }
  .gs-rs .rs-phone .sub { font-size: 1.45cqw; line-height: 1.4; color: #55605a; }
  .gs-rs .rs-phone .img { flex: 1; min-height: 0; border-radius: 1.6cqw; background: linear-gradient(160deg, #cfe0d6, #f1e7c9); position: relative; overflow: hidden; }
  .gs-rs .rs-phone .img::after { content: ""; position: absolute; left: 12%; right: 12%; bottom: 14%; height: 34%; border-radius: 1cqw; background: rgba(255,255,255,0.72); box-shadow: 0 0.6cqw 1.6cqw rgba(0,0,0,0.10); }
  .gs-rs .rs-phone .btn { background: var(--ds); color: #fff; font-size: 1.55cqw; font-weight: 600; text-align: center; padding: 1.5cqw 0; border-radius: 1.3cqw; }
  .gs-rs .rs-phone .step { font-size: 1.3cqw; color: #55605a; display: flex; gap: 0.8cqw; align-items: center; } .gs-rs .rs-phone .step i { flex: 1; height: 0.5cqw; border-radius: 1cqw; background: #dfe4dc; } .gs-rs .rs-phone .step i.on { background: var(--ds); }
  .gs-rs .rs-phone .plan { border-radius: 1.4cqw; box-shadow: inset 0 0 0 0.5px rgba(31,30,29,0.18); padding: 1.5cqw 1.7cqw; display: flex; flex-direction: column; gap: 0.4cqw; background: #fff; }
  .gs-rs .rs-phone .plan.sel { box-shadow: inset 0 0 0 1.2px var(--ds); background: #f2f7f4; }
  .gs-rs .rs-phone .plan .pn { display: flex; justify-content: space-between; font-size: 1.55cqw; font-weight: 600; } .gs-rs .rs-phone .plan .pn em { font-style: normal; font-size: 1.2cqw; font-weight: 600; color: #7a5a00; background: #fbe9b7; border-radius: 0.6cqw; padding: 0.1cqw 0.7cqw; }
  .gs-rs .rs-phone .plan .pp { font-family: var(--gs-serif); font-size: 2.3cqw; } .gs-rs .rs-phone .plan .pp small { font-family: var(--gs-sans); font-size: 1.2cqw; color: #55605a; }
  .gs-rs .rs-phone .plan .pf { font-size: 1.2cqw; color: #55605a; }
  .gs-rs .rs-phone .tog { display: flex; align-self: center; background: #eef1ec; border-radius: 999px; padding: 0.4cqw; font-size: 1.25cqw; font-weight: 600; } .gs-rs .rs-phone .tog span { padding: 0.6cqw 1.6cqw; border-radius: 999px; color: #55605a; } .gs-rs .rs-phone .tog span.on { background: #fff; color: var(--ink); box-shadow: 0 0.3cqw 0.8cqw rgba(0,0,0,0.08); }
  .gs-rs .rs-phone .okmark { width: 6cqw; height: 6cqw; border-radius: 50%; background: var(--ds); margin: 1.4cqw auto 0.4cqw; position: relative; flex-shrink: 0; }
  .gs-rs .rs-phone .okmark::after { content: ""; position: absolute; left: 2.1cqw; top: 1.6cqw; width: 2.6cqw; height: 1.5cqw; border-left: 0.6cqw solid #fff; border-bottom: 0.6cqw solid #fff; transform: rotate(-45deg); }
  .gs-rs .rs-phone .rc { font-size: 1.35cqw; color: #55605a; display: flex; justify-content: space-between; padding: 0.9cqw 0; border-bottom: 0.5px solid #e6e8e3; } .gs-rs .rs-phone .rc b { color: var(--ink); font-weight: 600; }
  .gs-rs .rs-board.sel .rs-phone { box-shadow: 0 0 0 1.5px #2c84db, 0 0.6cqw 2.4cqw -0.8cqw rgba(0,0,0,0.28); }
  .gs-rs .rs-board.sel .hdl { position: absolute; width: 1.3cqw; height: 1.3cqw; background: #fff; border: 1.5px solid #2c84db; }
  .gs-rs .rs-board.sel .hdl.tl { left: -0.7cqw; top: calc(1.9cqw + 1.1cqw + 8px - 0.7cqw); } .gs-rs .rs-board.sel .hdl.tr { right: -0.7cqw; top: calc(1.9cqw + 1.1cqw + 8px - 0.7cqw); }
  .gs-rs .rs-board.sel .hdl.bl { left: -0.7cqw; bottom: -0.7cqw; } .gs-rs .rs-board.sel .hdl.br { right: -0.7cqw; bottom: -0.7cqw; }
  .gs-rs .rs-board.sel .dim { position: absolute; left: 50%; bottom: -3.4cqw; transform: translateX(-50%); font-size: max(7.5px, 1.5cqw); color: #fff; background: #2c84db; border-radius: 0.6cqw; padding: 0.2cqw 1cqw; white-space: nowrap; font-variant-numeric: tabular-nums; }

  /* --- Dashboard: the toolbar, the page, Data mode --- */
  .gs-rs .rs-db { --db-violet: #6250d6; flex: 1; min-height: 0; display: flex; flex-direction: column; background: #fcfcfb; font-family: var(--gs-sans); position: relative; color: var(--rs-text-100); text-align: left; }
  .gs-rs .rs-db-tb { display: flex; align-items: center; gap: 4px; padding: 5px 8px; border-bottom: 0.5px solid var(--rs-hair-soft); background: var(--rs-bg-000); flex-shrink: 0; }
  .gs-rs .rs-db-grow { flex: 1; }
  .gs-rs .rs-db-status { font-size: 10px; color: var(--rs-text-400); white-space: nowrap; margin-right: 2px; }
  .gs-rs .rs-db-ib { width: 22px; height: 22px; border-radius: 6px; border: 0; background: transparent; padding: 0; margin: 0; font: inherit; color: var(--rs-text-300); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; }
  .gs-rs .rs-db-ib:hover { background: var(--rs-bg-200); color: var(--rs-text-100); } .gs-rs .rs-db-ib:disabled { opacity: 0.45; cursor: default; }
  .gs-rs .rs-db-seg { display: inline-flex; padding: 2px; gap: 1px; border-radius: 7px; background: var(--rs-bg-200); }
  .gs-rs .rs-db-seg button { width: 24px; height: 20px; border-radius: 5px; border: 0; background: transparent; padding: 0; margin: 0; font: inherit; color: var(--rs-text-400); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; }
  .gs-rs .rs-db-seg button.on { background: var(--rs-bg-000); color: var(--rs-text-000); box-shadow: 0 0 0 0.5px var(--rs-hair), 0 1px 2px rgba(0,0,0,0.06); }
  .gs-rs .rs-db-ib:focus-visible, .gs-rs .rs-db-seg button:focus-visible, .gs-rs .rs-db-row:focus-visible, .gs-rs .rs-db[data-mode="data"] .rs-db-mark:focus-visible, .gs-rs .rs-mo-btn:focus-visible, .gs-rs .rs-mo-rail:focus-visible, .gs-rs .rs-mo-tw-pause:focus-visible, .gs-rs .rs-mo-words button:focus-visible { outline: 2px solid var(--rs-text-000); outline-offset: 2px; }
  .gs-rs .rs-db-body { flex: 1; min-height: 0; display: flex; }
  .gs-rs .rs-db-page { flex: 1; min-width: 0; overflow-y: auto; padding: 12px 14px 14px; scrollbar-width: thin; }
  .gs-rs .rs-db-h { font-family: var(--gs-serif); font-size: 15px; font-weight: 400; color: var(--rs-text-000); line-height: 1.2; margin: 0; letter-spacing: -0.01em; }
  .gs-rs .rs-db-take { font-size: 11px; line-height: 1.45; color: var(--rs-text-300); margin: 3px 0 10px; }
  .gs-rs .rs-db-figs { display: grid; grid-template-columns: repeat(auto-fit, minmax(92px, 1fr)); gap: 8px; padding: 6px 4px; margin: 0 -4px 10px; border-radius: 6px; }
  .gs-rs .rs-db-fig .l { font-size: 11px; color: var(--rs-text-400); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .gs-rs .rs-db-fig .v { font-family: var(--gs-serif); font-size: 19px; font-weight: 400; color: var(--rs-text-000); line-height: 1.15; font-variant-numeric: tabular-nums; margin-top: 1px; }
  .gs-rs .rs-db-fig .d { font-size: 11px; color: var(--rs-text-400); font-variant-numeric: tabular-nums; white-space: nowrap; }
  .gs-rs .rs-db-fig .d.good { color: #4d6e3b; }
  /* cards: hairline, radius, title at top; two share a row when there is room */
  .gs-rs .rs-db-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 8px; }
  .gs-rs .rs-db-card { background: var(--rs-bg-000); border: 0.5px solid var(--rs-hair); border-radius: 8px; padding: 8px 9px 6px; min-width: 0; }
  .gs-rs .rs-db-card .t { font-size: 11px; font-weight: 500; color: var(--rs-text-100); margin-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .gs-rs .rs-db-mark { border-radius: 5px; }
  .gs-rs .rs-db-svg { display: block; width: 100%; height: auto; }
  /* Data mode: everything with a source wears a faint violet tint, the pointer is a crosshair, hover rings at 75%, the pick at 100% */
  .gs-rs .rs-db[data-mode="data"] .rs-db-page { cursor: crosshair; }
  .gs-rs .rs-db[data-mode="data"] .rs-db-mark { background: rgba(98, 80, 214, 0.09); cursor: crosshair; transition: box-shadow 120ms ease, background 400ms ease; }
  .gs-rs .rs-db[data-mode="data"] .rs-db-mark:hover { box-shadow: 0 0 0 1.5px rgba(98, 80, 214, 0.75); }
  .gs-rs .rs-db[data-mode="data"] .rs-db-mark[data-picked] { box-shadow: 0 0 0 1.5px var(--db-violet); background: rgba(98, 80, 214, 0.13); }
  /* Sources: a right side panel titled "Sources", its rows, and one source's page */
  .gs-rs .rs-db-side { width: 44%; max-width: 210px; min-width: 150px; flex-shrink: 0; border-left: 0.5px solid var(--rs-hair); background: var(--rs-bg-000); display: flex; flex-direction: column; min-height: 0; }
  .gs-rs .rs-db-side-h { display: flex; align-items: center; gap: 4px; padding: 5px 6px 5px 10px; border-bottom: 0.5px solid var(--rs-hair-soft); flex-shrink: 0; }
  .gs-rs .rs-db-side-h .ttl { font-size: 11px; font-weight: 600; color: var(--rs-text-000); }
  .gs-rs .rs-db-list { list-style: none; margin: 0; padding: 4px; overflow-y: auto; }
  .gs-rs .rs-db-row { display: flex; align-items: center; gap: 6px; width: 100%; border: 0; background: transparent; margin: 0; padding: 6px 6px; border-radius: 6px; font: inherit; text-align: left; color: var(--rs-text-300); cursor: pointer; }
  .gs-rs .rs-db-row:hover { background: var(--rs-bg-100); }
  .gs-rs .rs-db-row .n { flex: 1; min-width: 0; font-size: 11px; color: var(--rs-text-100); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .gs-rs .rs-db-row .m { font-size: 10px; color: var(--rs-text-400); white-space: nowrap; opacity: 0; transition: opacity 120ms ease; }
  .gs-rs .rs-db-row:hover .m, .gs-rs .rs-db-row:focus-visible .m { opacity: 1; }
  .gs-rs .rs-db-detail { padding: 8px 10px 10px; overflow-y: auto; min-height: 0; }
  .gs-rs .rs-db-dh { display: flex; align-items: center; gap: 2px; }
  .gs-rs .rs-db-dh .n { flex: 1; min-width: 0; font-size: 12px; font-weight: 600; color: var(--rs-text-000); line-height: 1.25; }
  .gs-rs .rs-db-cap { display: flex; align-items: center; gap: 4px; font-size: 10px; color: var(--rs-text-400); margin: 8px 0 4px; }
  .gs-rs .rs-db-result { border: 0.5px solid var(--rs-hair); border-radius: 7px; overflow: hidden; }
  .gs-rs .rs-db-result table { width: 100%; border-collapse: collapse; font-family: var(--gs-mono); font-size: 9.5px; font-variant-numeric: tabular-nums; }
  .gs-rs .rs-db-result th { text-align: left; font-weight: 500; color: var(--rs-text-300); background: var(--rs-bg-100); padding: 3px 6px; border-bottom: 0.5px solid var(--rs-hair-soft); }
  .gs-rs .rs-db-result td { padding: 2.5px 6px; color: var(--rs-text-200); border-bottom: 0.5px solid var(--rs-hair-soft); white-space: nowrap; }
  .gs-rs .rs-db-result tr:last-child td { border-bottom: 0; }
  .gs-rs .rs-db-result .n { text-align: right; }
  .gs-rs .rs-db[data-mode="data"] .rs-db-result td { background: rgba(98, 80, 214, 0.06); }
  .gs-rs .rs-db-rows { font-size: 10px; color: var(--rs-text-400); margin-top: 4px; }
  /* the request behind a source: a dialog over the dashboard */
  .gs-rs .rs-db-scrim { position: absolute; inset: 0; background: rgba(20, 20, 19, 0.28); display: flex; align-items: center; justify-content: center; padding: 14px; z-index: 5; }
  .gs-rs .rs-db-dlg { width: min(100%, 300px); background: var(--rs-bg-000); border-radius: 12px; box-shadow: 0 14px 40px -10px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.08); padding: 12px 14px 14px; }
  .gs-rs .rs-db-dlg-h { display: flex; align-items: center; gap: 6px; }
  .gs-rs .rs-db-dlg-h .n { flex: 1; font-size: 12.5px; font-weight: 600; color: var(--rs-text-000); }
  .gs-rs .rs-db-fetched { font-size: 10.5px; color: var(--rs-text-300); margin: 4px 0 10px; } .gs-rs .rs-db-fetched b { font-weight: 500; color: var(--rs-text-100); }
  .gs-rs .rs-db-arg { font-family: var(--gs-mono); font-size: 9.5px; color: var(--rs-text-300); margin-bottom: 4px; }
  .gs-rs .rs-db-sql { margin: 0; font-family: var(--gs-mono); font-size: 9.5px; line-height: 1.55; color: var(--rs-text-100); background: var(--rs-bg-100); border: 0.5px solid var(--rs-hair); border-radius: 7px; padding: 8px 10px; white-space: pre; overflow-x: auto; }

  /* --- Motion --- */
  .gs-rs .rs-mo { flex: 1; min-height: 0; display: flex; flex-direction: column; background: #f3f1ea; font-family: var(--gs-sans); text-align: left; }
  .gs-rs .rs-mo-body { flex: 1; min-height: 0; display: flex; position: relative; }
  .gs-rs .rs-mo-main { flex: 1; min-width: 0; display: flex; flex-direction: column; container: gs-rs-mom / inline-size; }
  /* warm surround; the picture is a 16:9 frame with the player's two-layer shadow, inset from the pane */
  .gs-rs .rs-mo-stage { flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; padding: 10px 12px 4px; }
  .gs-rs .rs-mo-pic { position: relative; width: 100%; max-height: 100%; aspect-ratio: 16 / 9; container: gs-rs-mo / inline-size; box-shadow: 0 1px 2px rgba(20,20,19,.08), 0 8px 28px rgba(20,20,19,.14); background: #faf9f5; cursor: default; overflow: hidden; }
  .gs-rs .rs-mo-svg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
  .gs-rs .rs-mo-hit { position: absolute; inset: 0; z-index: 1; border: 0; background: transparent; padding: 0; margin: 0; cursor: default; }
  .gs-rs .rs-mo-hit:focus-visible { outline: 2px solid var(--rs-text-000); outline-offset: -3px; }
  .gs-rs .rs-mo-words { position: absolute; z-index: 2; left: 5cqw; top: 5.5cqw; right: 5cqw; display: flex; flex-direction: column; align-items: flex-start; gap: 1.2cqw; pointer-events: none; }
  .gs-rs .rs-mo-words button { font: inherit; border: 0; background: transparent; padding: 0.3cqw 0.8cqw; margin: 0 -0.8cqw; color: inherit; text-align: left; cursor: default; border-radius: 0.6cqw; max-width: 100%; pointer-events: none; }
  .gs-rs .rs-mo-words .rs-mo-kick { font-family: var(--gs-sans); font-size: max(7px, 2cqw); line-height: 1.2; color: #73726c; letter-spacing: 0.01em; display: inline-flex; align-items: center; gap: 1cqw; }
  .gs-rs .rs-mo-kick::before { content: ""; width: 2.4cqw; height: 0.4cqw; background: #d97757; }
  .gs-rs .rs-mo-words .rs-mo-ttl { font-family: var(--gs-serif); font-weight: 300; font-size: max(12px, 5cqw); line-height: 1.12; letter-spacing: -0.012em; color: #141413; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
  /* with Tweaks open and the film paused, each line is a button ringed in blue, faint until hover */
  .gs-rs .rs-mo-words button.ring { pointer-events: auto; cursor: pointer; box-shadow: 0 0 0 1.5px rgba(44, 132, 219, 0.28), 0 0 0 2.5px rgba(255,255,255,0.9); }
  .gs-rs .rs-mo-words button.ring:hover { box-shadow: 0 0 0 1.5px #2c84db, 0 0 0 2.5px #fff; }
  /* the playback bar floating under the picture: icon-only buttons but for Tweaks */
  .gs-rs .rs-mo-bar { align-self: center; display: flex; align-items: center; gap: 2px; width: calc(100% - 24px); max-width: 520px; margin: 4px 0 10px; padding: 3px 5px; background: var(--rs-bg-000); border-radius: 10px; box-shadow: 0 0 0 0.5px var(--rs-hair), 0 4px 14px -6px rgba(0,0,0,0.18); }
  .gs-rs .rs-mo-btn { width: 24px; height: 24px; border-radius: 6px; border: 0; background: transparent; padding: 0; margin: 0; font: inherit; color: var(--rs-text-200); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; }
  .gs-rs .rs-mo-btn:hover { background: var(--rs-bg-200); color: var(--rs-text-000); }
  .gs-rs .rs-mo-btn[aria-pressed="true"] { background: var(--rs-bg-300); color: var(--rs-text-000); }
  .gs-rs .rs-mo-btn.quiet { cursor: default; color: var(--rs-text-400); } .gs-rs .rs-mo-btn.quiet:hover { background: transparent; color: var(--rs-text-400); }
  /* Tweaks, last in the bar after a divider: the one control with its name on it, bordered */
  .gs-rs .rs-mo-sep { width: 0.5px; height: 14px; margin: 0 3px; background: var(--rs-hair); flex-shrink: 0; }
  .gs-rs .rs-mo-btn.named { width: auto; gap: 4px; padding: 0 8px 0 6px; font-size: 10.5px; font-weight: 500; white-space: nowrap; border: 0.5px solid rgba(31,30,29,0.15); }
  .gs-rs .rs-mo-time { font-size: 10px; color: var(--rs-text-400); font-variant-numeric: tabular-nums; white-space: nowrap; padding: 0 4px; } .gs-rs .rs-mo-time b { font-weight: 400; color: var(--rs-text-100); }
  /* rail: 4px line in wash, filled to the playhead in ink; 11px playhead ringed in the panel color */
  .gs-rs .rs-mo-rail { position: relative; flex: 1; min-width: 40px; height: 24px; margin: 0 6px; cursor: pointer; touch-action: none; border-radius: 4px; }
  .gs-rs .rs-mo-track { position: absolute; left: 0; right: 0; top: 10px; height: 4px; border-radius: 999px; background: var(--rs-bg-300); overflow: hidden; }
  .gs-rs .rs-mo-fill { display: block; height: 100%; background: var(--rs-text-000); }
  .gs-rs .rs-mo-head { position: absolute; top: 6.5px; width: 11px; height: 11px; margin-left: -5.5px; border-radius: 50%; background: var(--rs-text-000); box-shadow: 0 0 0 2px var(--rs-bg-000), 0 1px 3px rgba(0,0,0,0.25); }
  /* Tweaks and Style: a side panel docked beside the player, which gives it room; its header is two tabs */
  .gs-rs .rs-mo-tw { width: 42%; max-width: 200px; min-width: 140px; flex-shrink: 0; border-left: 0.5px solid var(--rs-hair); background: var(--rs-bg-000); display: flex; flex-direction: column; min-height: 0; }
  .gs-rs .rs-mo-tw-h { display: flex; align-items: center; justify-content: space-between; padding: 5px 6px; border-bottom: 0.5px solid var(--rs-hair-soft); }
  .gs-rs .rs-mo-tw-tabs { display: inline-flex; align-items: center; gap: 2px; min-width: 0; font-size: 10.5px; font-weight: 500; color: var(--rs-text-400); }
  .gs-rs .rs-mo-tw-tabs span { padding: 3px 7px; border-radius: 5px; white-space: nowrap; }
  .gs-rs .rs-mo-tw-tabs span.on { background: var(--rs-bg-200); color: var(--rs-text-000); }
  .gs-rs .rs-mo-tw-sub { font-size: 9.5px; color: var(--rs-text-400); padding: 7px 10px 5px; }
  .gs-rs .rs-mo-tw-fields { display: flex; flex-direction: column; gap: 6px; padding: 0 10px 10px; overflow-y: auto; }
  .gs-rs .rs-mo-tw-row { display: flex; align-items: flex-start; gap: 3px; }
  .gs-rs .rs-mo-tw-field { flex: 1; min-width: 0; resize: none; font-family: var(--gs-sans); font-size: 10.5px; line-height: 1.4; color: var(--rs-text-100); background: var(--rs-bg-000); border: 0.5px solid rgba(31,30,29,0.15); border-radius: 6px; padding: 5px 7px; margin: 0; }
  .gs-rs .rs-mo-tw-field:focus { outline: none; border-color: #2c84db; box-shadow: 0 0 0 2px rgba(44,132,219,0.18); }
  .gs-rs .rs-mo-tw-reset { width: 20px; height: 20px; margin-top: 3px; color: var(--rs-text-400); }
  .gs-rs .rs-mo-tw-pause { display: flex; align-items: center; justify-content: center; gap: 5px; margin: 2px 10px 10px; padding: 6px 8px; font: inherit; font-size: 10.5px; color: var(--rs-text-100); background: var(--rs-bg-000); border: 0.5px solid rgba(31,30,29,0.15); border-radius: 7px; cursor: pointer; }
  .gs-rs .rs-mo-tw-pause:hover { background: var(--rs-bg-100); }
  /* a narrow bar (Tweaks open, or a phone): Tweaks goes icon-only and the time readout is left out */
  @container gs-rs-mom (max-width: 380px) {
    .gs-rs .rs-mo-time, .gs-rs .rs-mo-btn.named .w { display: none; }
    .gs-rs .rs-mo-btn.named { padding: 0; aspect-ratio: 1; }
  }
  @media (pointer: coarse) {
    .gs-rs .rs-db-ib, .gs-rs .rs-mo-btn { width: 32px; height: 32px; }
    .gs-rs .rs-db-seg button { width: 32px; height: 28px; }
    .gs-rs .rs-mo-rail { height: 32px; } .gs-rs .rs-mo-track { top: 14px; } .gs-rs .rs-mo-head { top: 10.5px; }
    .gs-rs .rs-db-row { min-height: 40px; }
    .gs-rs .rs-db-row .m { opacity: 1; }
  }

  /* --- Sheets: the formula row, the grid, the floating toolbar over the grid's bottom rows, the tabs --- */
  .gs-rs .rs-sh { --sh-pick: #2a78d6; --sh-claude: #d97757; --sh-num: 34px; flex: 1; min-height: 0; display: flex; flex-direction: column; position: relative; background: var(--rs-bg-000); font-family: var(--gs-sans); font-size: 11px; line-height: 16px; color: var(--rs-text-100); font-variant-numeric: tabular-nums; }
  .gs-rs .rs-sh-fx { display: flex; align-items: center; height: 28px; padding-right: 8px; border-bottom: 0.5px solid var(--rs-hair); flex-shrink: 0; }
  .gs-rs .rs-sh-fx .fx { width: var(--sh-num); text-align: center; font-family: var(--gs-serif); font-style: italic; font-size: 12px; color: var(--rs-text-400); }
  .gs-rs .rs-sh-fx .f { flex: 1; min-width: 0; padding-left: 8px; font-family: var(--gs-mono); font-size: 10.5px; color: var(--rs-text-000); white-space: nowrap; overflow: hidden; }
  .gs-rs .rs-sh-fx .zoom { display: inline-flex; align-items: center; gap: 3px; font-size: 10.5px; color: var(--rs-text-300); }
  .gs-rs .rs-sh-fx .zoom svg { width: 10px; height: 10px; color: var(--rs-text-400); }
  /* the rows share the grid's height equally, so none is cut at the bottom */
  .gs-rs .rs-sh-grid { flex: 1; min-height: 0; overflow: hidden; display: grid; grid-template-columns: var(--sh-num) minmax(118px, 1.9fr) repeat(4, minmax(38px, 0.7fr)) minmax(46px, 0.8fr) minmax(84px, 1.3fr) minmax(0, 1fr); grid-auto-rows: minmax(0, 1fr); }
  .gs-rs .rs-sh-grid .row { display: contents; }
  .gs-rs .rs-sh-grid .row > span { display: flex; align-items: center; min-width: 0; padding: 0 8px; border-right: 0.5px solid var(--rs-hair); border-bottom: 0.5px solid var(--rs-hair); white-space: nowrap; overflow: hidden; }
  .gs-rs .rs-sh-grid .row > .hd { justify-content: center; padding: 0; background: var(--rs-bg-100); color: var(--rs-text-300); font-size: 10px; }
  .gs-rs .rs-sh-grid .row > .hd.on { background: color-mix(in srgb, var(--sh-pick) 20%, transparent); color: var(--rs-text-000); }
  .gs-rs .rs-sh-grid .row > .cell { cursor: cell; }
  .gs-rs .rs-sh-grid .row > .cell:focus-visible { outline: 2px solid var(--rs-text-000); outline-offset: -2px; }
  .gs-rs .rs-sh-grid .row > .n { justify-content: flex-end; }
  .gs-rs .rs-sh-grid .row > .th { font-weight: 500; color: var(--rs-text-300); background: rgba(11, 11, 11, 0.05); }
  .gs-rs .rs-sh-grid .row > .tot { font-weight: 600; color: var(--rs-text-000); }
  /* spill: a label wider than its cell, which runs into the empty cells to its left. crossed: an empty cell it runs into, without its right border. crossed-narrow: the same, once the widget is narrow and the label reaches one cell further. */
  .gs-rs .rs-sh-grid .row > .spill { overflow: visible; }
  .gs-rs .rs-sh-grid .row > .crossed { border-right-color: transparent; }
  /* the cell Claude has just changed wears a ring and a flag with Claude's name; the picked cell wears a ring and a round handle */
  .gs-rs .rs-sh-grid .row > .by, .gs-rs .rs-sh-grid .row > .pick { position: relative; overflow: visible; border-radius: 1px; }
  .gs-rs .rs-sh-grid .row > .by { box-shadow: inset 0 0 0 1.5px var(--sh-claude); }
  .gs-rs .rs-sh-grid .row > .by .flag { position: absolute; left: 0; bottom: 100%; height: 14px; padding: 0 5px; border-radius: 3px 3px 0 0; background: var(--sh-claude); color: #fff; font-size: 9px; line-height: 14px; font-weight: 500; }
  .gs-rs .rs-sh-grid .row > .pick { box-shadow: inset 0 0 0 1.5px var(--sh-pick); }
  .gs-rs .rs-sh-grid .row > .pick::after { content: ""; position: absolute; right: -3.5px; bottom: -3.5px; width: 7px; height: 7px; border-radius: 50%; background: var(--sh-pick); box-shadow: 0 0 0 1px #fff; }
  .gs-rs .rs-sh-bar { position: absolute; left: calc(50% + var(--sh-num) / 2); bottom: 40px; transform: translateX(-50%); display: flex; align-items: center; gap: 1px; padding: 4px; border-radius: 10px; background: var(--rs-bg-000); box-shadow: 0 0 0 0.5px rgba(31,30,29,0.14), 0 8px 24px -8px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.05); color: var(--rs-text-200); white-space: nowrap; }
  .gs-rs .rs-sh-bar .t { display: inline-flex; align-items: center; justify-content: center; gap: 2px; min-width: 22px; height: 22px; padding: 0 4px; border-radius: 6px; font-size: 11.5px; }
  .gs-rs .rs-sh-bar .t.b { font-weight: 700; } .gs-rs .rs-sh-bar .t.i { font-style: italic; } .gs-rs .rs-sh-bar .t .u { text-decoration: underline; text-underline-offset: 2px; }
  .gs-rs .rs-sh-bar .t svg { width: 13px; height: 13px; }
  .gs-rs .rs-sh-bar .t .car { width: 9px; height: 9px; color: var(--rs-text-400); }
  .gs-rs .rs-sh-bar .sep { width: 0.5px; height: 14px; margin: 0 3px; background: var(--rs-hair); }
  .gs-rs .rs-sh-bar .ask { display: inline-flex; align-items: center; height: 22px; margin-left: 3px; padding: 0 9px; border-radius: 6px; color: #0b0b0b; box-shadow: inset 0 0 0 1px rgba(11,11,11,0.10), 0 1px 2px rgba(0,0,0,0.05); font-size: 10.5px; font-weight: 500; }
  .gs-rs .rs-sh-tabs { display: flex; align-items: center; gap: 2px; height: 30px; padding-right: 8px; border-top: 0.5px solid var(--rs-hair); background: var(--rs-bg-000); flex-shrink: 0; color: var(--rs-text-300); }
  .gs-rs .rs-sh-tabs .add { display: inline-flex; align-items: center; justify-content: center; width: var(--sh-num); height: 22px; color: var(--rs-text-400); }
  .gs-rs .rs-sh-tabs .tab { display: inline-flex; align-items: center; height: 22px; padding: 0 9px; border-radius: 6px; white-space: nowrap; }
  .gs-rs .rs-sh-tabs .tab.on { background: rgba(11, 11, 11, 0.05); color: var(--rs-text-000); font-weight: 600; }

  /* --- Custom: "This week", a team's tracker. Task names are bars. --- */
  .gs-rs .rs-tk { flex: 1; min-height: 0; overflow: hidden; padding: 20px max(20px, calc((100% - 520px) / 2)) 0; background: #f7f3ec; color: #23262d; font-family: var(--gs-sans); }
  .gs-rs .rs-tk-top { display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; padding: 0 2px; }
  .gs-rs .rs-tk-h1 { font-size: 19px; line-height: 24px; font-weight: 700; letter-spacing: -0.02em; white-space: nowrap; }
  .gs-rs .rs-tk-prog { flex: 0 1 124px; min-width: 96px; text-align: right; }
  .gs-rs .rs-tk-count { display: block; font-size: 12px; line-height: 16px; font-weight: 500; color: #555b66; font-variant-numeric: tabular-nums; white-space: nowrap; }
  .gs-rs .rs-tk-count b { font-weight: 700; color: #23262d; }
  .gs-rs .rs-tk-bar { display: block; margin-top: 5px; height: 6px; border-radius: 3px; background: #e7e0d3; overflow: hidden; }
  .gs-rs .rs-tk-bar i { display: block; height: 100%; border-radius: 3px; background: #3d6fe0; }
  .gs-rs .rs-tk-card { margin-top: 12px; background: #ffffff; border-radius: 12px; box-shadow: 0 1px 0 rgba(60, 45, 20, 0.04), 0 14px 28px -24px rgba(60, 45, 20, 0.35), 0 0 0 1px rgba(60, 45, 20, 0.06); }
  .gs-rs .rs-tk-row { display: grid; grid-template-columns: 26px 18px minmax(0, 1fr) auto; align-items: center; gap: 10px; height: 36px; padding: 0 14px; border-top: 1px solid #f3eee5; }
  .gs-rs .rs-tk-row:first-child { border-top: 0; }
  .gs-rs .rs-tk-day { font-size: 12px; line-height: 16px; font-weight: 600; color: #858b95; }
  .gs-rs .rs-tk-day.is-today { color: #3d6fe0; }
  .gs-rs .rs-tk-cb { width: 18px; height: 18px; border-radius: 6px; border: 1.5px solid #cfc7b8; background: #ffffff; display: grid; place-items: center; }
  .gs-rs .rs-tk-cb svg { opacity: 0; }
  .gs-rs .rs-tk-cb.is-on { background: #3d6fe0; border-color: #3d6fe0; }
  .gs-rs .rs-tk-cb.is-on svg { opacity: 1; }
  .gs-rs .rs-tk-task { display: block; height: 6px; max-width: 100%; border-radius: 3px; background: rgba(35, 38, 45, 0.17); }
  .gs-rs .rs-tk-row.is-done .rs-tk-task { background: rgba(35, 38, 45, 0.08); }
  .gs-rs .rs-tk-who { display: inline-flex; align-items: center; font-size: 12px; line-height: 16px; color: #555b66; white-space: nowrap; }
  .gs-rs .rs-tk-av { flex: none; width: 20px; height: 20px; border-radius: 50%; display: grid; place-items: center; font-size: 11px; line-height: 1; font-weight: 600; color: #ffffff; }
  .gs-rs .rs-tk-row.is-done .rs-tk-av { opacity: 0.7; }

  /* controls that are real buttons */
  .gs-rs .rs-sl-tb button.tbtn { font: inherit; color: inherit; background: transparent; border: 0; margin: 0; }
  .gs-rs .rs-sl-tb .twrap { position: relative; display: inline-flex; }
  .gs-rs .rs-present-bar button.x { font: inherit; color: inherit; border: 0; }

  @container gs-rs (max-width: 540px) {${_}
    .gs-rs .rs-sl-rail { display: none; }
    .gs-rs .rs-dc-wrap { display: block; } .gs-rs .rs-dc-wrap .rs-cthread { margin: 10px 0 0; }
    /* the spreadsheet keeps every filled column in sight: smaller text, tighter cells, and only a sliver of column H */
    .gs-rs .rs-sh { --sh-num: 24px; font-size: 10px; }
    .gs-rs .rs-sh-grid { grid-template-columns: var(--sh-num) minmax(90px, 1.6fr) repeat(4, minmax(22px, 0.5fr)) minmax(36px, 0.7fr) minmax(68px, 1.2fr) 6px; }
    .gs-rs .rs-sh-grid .row > span { padding: 0 5px; }
    .gs-rs .rs-sh-grid .row > .hd { font-size: 9px; }
    .gs-rs .rs-sh-grid .row > .spare { padding: 0; font-size: 0; }
    .gs-rs .rs-sh-grid .row > .crossed-narrow { border-right-color: transparent; }
  }
  @container gs-rs (max-width: 700px) {
    .gs-rs .rs-subtab { font-size: 13px; }
    .gs-rs .rs-subtab .klabel { column-gap: 4px; }
  }
  /* once the longest translated name no longer fits a seventh of the row, all seven still stay in sight: four across, two down */
  @container gs-rs (max-width: 740px) {
    .gs-rs .rs-subtabs { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .gs-rs .rs-subtab { padding: 10px 4px 8px; gap: 6px; }
  }
  /* narrower still, a quarter of the row is too little for the longest translated names: three across, and a last one left alone sits in the middle of its row */
  @container gs-rs (max-width: 400px) {
    .gs-rs .rs-subtabs { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .gs-rs .rs-subtab:nth-child(3n + 1):last-child { grid-column: 2; }
  }
  /* narrower still, the spreadsheet's cells tighten once more */
  @container gs-rs (max-width: 320px) {
    .gs-rs .rs-sh { --sh-num: 20px; font-size: 9.5px; }
    .gs-rs .rs-sh-grid { grid-template-columns: var(--sh-num) minmax(70px, 1.6fr) repeat(4, minmax(17px, 0.5fr)) minmax(31px, 0.7fr) minmax(61px, 1.2fr) 6px; }
    .gs-rs .rs-sh-grid .row > span { padding: 0 3px; }
  }

  @media (max-width: 600px) {${_}  }
  @media (prefers-reduced-motion: reduce) {
    .gs-rs *, .gs-rs *::before, .gs-rs *::after { animation: none !important; transition: none !important; }
    .gs-rs .rs-fbar-saving { background: transparent; box-shadow: inset 0 0 0 1.5px var(--rs-text-400); }
  }
`,y="Halden",b=[{key:"docs",faces:!0},{key:"slides"},{key:"design",saving:!0},{key:"sheets",beta:!0,faces:!0},{key:"dashboard"},{key:"motion",beta:!0},{key:"custom"}],x={R:"#6f9a78",I:"#c98a55",C:"#8b7fc7",T:"#4f8fb8",M:"#cf6f7c"},S=4,C=[{day:1,who:"R",done:!0,w:82},{day:1,who:"I",w:94},{day:2,who:"T",done:!0,w:70},{day:2,who:"M",w:60},{day:3,who:"C",done:!0,w:88},{day:3,who:"R",w:74},{day:4,who:"I",w:96},{day:4,who:"C",w:58},{day:5,who:"T",w:68}];function w(){let e=r(),t=C.filter(e=>e.done).length;return(0,p.jsxs)("div",{className:"rs-tk",role:"img","aria-label":e("kind.custom.alt"),children:[(0,p.jsxs)("div",{className:"rs-tk-top",children:[(0,p.jsx)("span",{className:"rs-tk-h1",children:e("kind.custom.title")}),(0,p.jsxs)("span",{className:"rs-tk-prog",children:[(0,p.jsx)("span",{className:"rs-tk-count",children:e.rich("tracker.count",{done:(0,p.jsx)("b",{children:t}),total:C.length})}),(0,p.jsx)("span",{className:"rs-tk-bar",children:(0,p.jsx)("i",{style:{width:`${Math.round(t/C.length*100)}%`}})})]})]}),(0,p.jsx)("div",{className:"rs-tk-card",children:C.map((t,n)=>(0,p.jsxs)("div",{className:o("rs-tk-row",t.done&&"is-done"),children:[(0,p.jsx)("span",{className:o("rs-tk-day",t.day===S&&"is-today"),children:C[n-1]?.day===t.day?null:e(`tracker.day${t.day}`)}),(0,p.jsx)("span",{className:o("rs-tk-cb",t.done&&"is-on"),children:(0,p.jsx)("svg",{width:"11",height:"11",viewBox:"0 0 16 16","aria-hidden":"true",children:(0,p.jsx)("path",{d:"M3 8.5l3.2 3L13 4.5",fill:"none",stroke:"#fff",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,p.jsx)("span",{className:"rs-tk-task",style:{width:`${t.w}%`}}),(0,p.jsx)("span",{className:"rs-tk-who",children:(0,p.jsx)("span",{className:"rs-tk-av",style:{backgroundColor:x[t.who]},children:t.who})})]},`${t.day}-${t.who}`))})]})}var T=145e3,E=[{key:"sales",q:[3,2,2,1]},{key:"support",q:[1,1,1,0]},{key:"engineering",q:[2,2,1,1]},{key:"product",q:[1,0,1,0]},{key:"marketing",q:[1,1,0,0]},{key:"finance",q:[0,1,0,0]}],D=["A","B","C","D","E","F","G"],O=[1,2,3,4],k=E.length+1,A=k+1,j=A+2,M=j+1,N=2,P=e=>e.reduce((e,t)=>e+t,0),F=e=>`$${e.toLocaleString("en-US")}`;function I(){let e=r(),t=(0,f.useId)(),n=(0,f.useRef)(null),[i,s]=(0,f.useState)([A-1,D.length-1]),c=e=>`=SUM(${e}2:${e}${k})`,l=O.map(e=>P(E.map(t=>t.q[e-1]))),u=[[{t:e("sheet.col.team"),cls:"th"},...O.map(t=>({t:e(`sheet.col.q${t}`),cls:"th n"})),{t:e("sheet.col.hires"),cls:"th n"},{t:e("sheet.col.budget"),cls:"th n"}],...E.map((t,n)=>[{t:e(`sheet.team.${t.key}`)},...t.q.map(e=>({t:String(e),cls:"n"})),{t:String(P(t.q)),raw:`=SUM(B${n+2}:E${n+2})`,cls:"n"},{t:F(P(t.q)*T),raw:`=F${n+2}*$G$${j}`,cls:"n"}]),[{t:e("sheet.total"),cls:"tot"},...l.map((e,t)=>({t:String(e),raw:c(D[t+1]),cls:"tot n"})),{t:String(P(l)),raw:c("F"),cls:"tot n"},{t:F(P(l)*T),raw:c("G"),cls:"tot n"}],[],[...Array.from({length:3},()=>({t:""})),{t:"",cls:"crossed-narrow"},{t:"",cls:"crossed"},{t:e("sheet.salary"),cls:"n spill"},{t:F(T),raw:String(T),cls:"n",byClaude:!0}]],m=u[i[0]]?.[i[1]],h=e=>{if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;let[t,r]=i;if(e.key==="ArrowUp")t=Math.max(0,t-1);else if(e.key==="ArrowDown")t=Math.min(M-1,t+1);else if(e.key==="ArrowLeft")r=Math.max(0,r-1);else if(e.key==="ArrowRight")r=Math.min(D.length-1,r+1);else if(e.key==="Home")r=0;else if(e.key==="End")r=D.length-1;else return;e.preventDefault(),s([t,r]),n.current?.querySelector(`[data-at="${t}-${r}"]`)?.focus()};return(0,p.jsxs)("div",{className:"rs-sh",children:[(0,p.jsxs)("div",{className:"rs-sh-fx","aria-hidden":"true",children:[(0,p.jsx)("span",{className:"fx",children:"fx"}),(0,p.jsx)("span",{className:"f",children:m?.raw??m?.t}),(0,p.jsxs)("span",{className:"zoom",children:["100%",(0,p.jsx)(d,{})]})]}),(0,p.jsx)("p",{id:`${t}-about`,hidden:!0,children:e("kind.sheets.alt")}),(0,p.jsxs)("div",{ref:n,className:"rs-sh-grid",role:"grid","aria-label":e("kind.sheets.title"),"aria-describedby":`${t}-about`,"aria-readonly":"true","aria-colcount":D.length+1,children:[(0,p.jsxs)("div",{className:"row",role:"row",children:[(0,p.jsx)("span",{className:"hd","aria-hidden":"true"}),D.map((e,t)=>(0,p.jsx)("span",{className:o("hd",t===i[1]&&"on"),role:"columnheader","aria-colindex":t+2,children:e},e)),(0,p.jsx)("span",{className:"hd spare","aria-hidden":"true",children:"H"})]}),Array.from({length:M},(t,n)=>(0,p.jsxs)("div",{className:"row",role:"row",children:[(0,p.jsx)("span",{className:o("hd",n===i[0]&&"on"),role:"rowheader","aria-colindex":1,children:n+1}),D.map((t,r)=>{let a=u[n]?.[r],c=n===i[0]&&r===i[1];return(0,p.jsxs)("span",{className:o("cell",a?.cls,a?.byClaude&&"by",c&&"pick"),role:"gridcell","aria-colindex":r+2,"aria-selected":c,"aria-label":a?.raw?.startsWith("=")?e("sheet.cellFormula",{value:a.t,formula:a.raw}):void 0,tabIndex:c?0:-1,"data-at":`${n}-${r}`,onClick:()=>s([n,r]),onKeyDown:h,children:[a?.t,a?.byClaude&&(0,p.jsx)("span",{className:"flag","aria-hidden":"true",children:e("sheet.claude")})]},t)}),(0,p.jsx)("span",{className:"spare","aria-hidden":"true"})]},n)),Array.from({length:N},(e,t)=>(0,p.jsxs)("div",{className:"row spare","aria-hidden":"true",children:[(0,p.jsx)("span",{className:"hd",children:M+t+1}),D.map(e=>(0,p.jsx)("span",{},e)),(0,p.jsx)("span",{})]},t))]}),(0,p.jsxs)("div",{className:"rs-sh-bar","aria-hidden":"true",children:[(0,p.jsx)("span",{className:"t b",children:"B"}),(0,p.jsx)("span",{className:"t i",children:"I"}),(0,p.jsxs)("span",{className:"t",children:[(0,p.jsx)("span",{className:"u",children:"U"}),(0,p.jsx)(a,{name:"CaretDown",size:9,className:"car"})]}),(0,p.jsx)("span",{className:"sep"}),(0,p.jsxs)("span",{className:"t",children:["$",(0,p.jsx)(a,{name:"CaretDown",size:9,className:"car"})]}),(0,p.jsx)("span",{className:"t",children:(0,p.jsx)(a,{name:"DotsHorizontal",size:13})}),(0,p.jsx)("span",{className:"ask",children:e("sheet.askClaude")})]}),(0,p.jsxs)("div",{className:"rs-sh-tabs","aria-hidden":"true",children:[(0,p.jsx)("span",{className:"add",children:(0,p.jsx)(a,{name:"Add",size:12})}),(0,p.jsx)("span",{className:"tab on",children:e("sheet.tab.budget")}),(0,p.jsx)("span",{className:"tab",children:e("sheet.tab.roles")})]})]})}function L(){return(0,p.jsx)("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,p.jsx)("path",{d:"M10 3.5L5.5 8L10 12.5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}function R(){return(0,p.jsx)("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,p.jsx)("path",{d:"M6 3.5L10.5 8L6 12.5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}var z=[4.3,4.2,4.1,3.6,3.3,3.1],B=[1.18,1.21,1.25,1.3,1.36,1.41],V=["totals","revenue","churn"],H={totals:{conn:"warehouse",age:"12m",rows:4,sql:`SELECT metric,
  q2,
  q3
FROM finance.quarter_totals
WHERE fiscal_year = 2026
ORDER BY sort_order`},revenue:{conn:"warehouse",age:"12m",rows:6,sql:`SELECT month,
  SUM(amount) / 1e6 AS revenue_m
FROM finance.invoices
WHERE month BETWEEN '2026-04' AND '2026-09'
GROUP BY month
ORDER BY month`},churn:{conn:"crm",age:"5h",rows:6,sql:`SELECT month,
  churned / active_start AS churn
FROM accounts.monthly_health
WHERE month >= '2026-04'
ORDER BY month`}},U=[{key:"revenue",value:"$4.07M",delta:"+12%",good:!0},{key:"newTier",value:"$880K",delta:"+115%",good:!0},{key:"churn",value:"3.1%",delta:"−1.1 pt",good:!0},{key:"apac",value:"$542K",delta:"+0.4%",good:!1}];function W({months:e}){return(0,p.jsxs)("svg",{viewBox:"0 0 200 100",className:"rs-db-svg","aria-hidden":"true",children:[(0,p.jsxs)("g",{stroke:"#ebe9e1",strokeWidth:"0.6",children:[(0,p.jsx)("line",{x1:"2",x2:"198",y1:58,y2:58}),(0,p.jsx)("line",{x1:"2",x2:"198",y1:36,y2:36}),(0,p.jsx)("line",{x1:"2",x2:"198",y1:14,y2:14})]}),(0,p.jsx)("line",{x1:"2",x2:"198",y1:80,y2:80,stroke:"#b0aea5",strokeWidth:"0.6"}),B.map((t,n)=>(0,p.jsxs)("g",{children:[(0,p.jsx)("rect",{x:12+n*31,y:80-t*44,width:"20",height:t*44,rx:"2",fill:n>=3?"#141413":"#b0aea5"}),(0,p.jsx)("text",{x:22+n*31,y:93,textAnchor:"middle",fontFamily:"Helvetica Neue, Arial, sans-serif",fontSize:"9.5",fill:"#3d3d3a",children:e[n]})]},e[n]??n)),(0,p.jsx)("text",{x:177,y:13.96,textAnchor:"middle",fontFamily:"Georgia, serif",fontSize:"10",fill:"#141413",children:"1.41"})]})}function G({months:e}){let t=z.map((e,t)=>[18+t*33,80-e*13]),n=t.map(([e,t],n)=>`${n===0?"M":"L"}${e} ${t}`).join(" "),r=t[t.length-1]??[0,0];return(0,p.jsxs)("svg",{viewBox:"0 0 200 100",className:"rs-db-svg","aria-hidden":"true",children:[(0,p.jsxs)("g",{stroke:"#ebe9e1",strokeWidth:"0.6",children:[(0,p.jsx)("line",{x1:"2",x2:"198",y1:54,y2:54}),(0,p.jsx)("line",{x1:"2",x2:"198",y1:28,y2:28})]}),(0,p.jsx)("line",{x1:"2",x2:"198",y1:80,y2:80,stroke:"#b0aea5",strokeWidth:"0.6"}),(0,p.jsx)("path",{d:n,fill:"none",stroke:"#141413",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("circle",{cx:r[0],cy:r[1],r:"2.2",fill:"#fff",stroke:"#141413",strokeWidth:"1.2"}),(0,p.jsx)("text",{x:r[0],y:r[1]-6,textAnchor:"middle",fontFamily:"Georgia, serif",fontSize:"10",fill:"#141413",children:"3.1%"}),e.map((e,t)=>(0,p.jsx)("text",{x:18+t*33,y:93,textAnchor:"middle",fontFamily:"Helvetica Neue, Arial, sans-serif",fontSize:"9.5",fill:"#3d3d3a",children:e},e))]})}function K({active:e}){let t=r(),n=t.seq("month"),[i,s]=(0,f.useState)(!1),[c,l]=(0,f.useState)(null),[u,d]=(0,f.useState)(null),[m,h]=(0,f.useState)("aged");!e&&u!==null&&d(null),(0,f.useEffect)(()=>{if(m!=="busy")return;let e=window.setTimeout(()=>h("now"),1100);return()=>window.clearTimeout(e)},[m]);let g=e=>{s(e),e||(l(null),d(null))},_=e=>t(`db.src.${e}`),v=e=>i?{role:"button",tabIndex:0,"aria-label":t("db.mark.aria",{name:_(e)}),"data-picked":c===e?"":void 0,onClick:()=>l(e),onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),l(e))}}:{},y=m==="busy"?t("db.refreshing"):m==="now"?t("db.updatedNow"):t("db.updated",{age:"12m"}),b=e=>m==="now"?t("db.now"):H[e].age;return(0,p.jsxs)("div",{className:"rs-db","data-mode":i?"data":"pointer",children:[(0,p.jsxs)("div",{className:"rs-db-tb",children:[(0,p.jsx)("span",{className:"rs-db-grow"}),(0,p.jsx)("span",{className:"rs-db-status","aria-live":"polite",children:y}),(0,p.jsx)("button",{type:"button",className:"rs-db-ib","aria-label":t("db.refresh"),title:t("db.refreshTip"),disabled:m==="busy",onClick:()=>h("busy"),children:(0,p.jsx)(a,{name:"ArrowClockwise",size:12})}),(0,p.jsxs)("span",{className:"rs-db-seg",role:"radiogroup","aria-label":t("db.mode.aria"),children:[(0,p.jsx)("button",{type:"button",role:"radio","aria-checked":!i,"aria-label":t("db.mode.pointer"),title:t("db.mode.pointer"),className:o(!i&&"on"),onClick:()=>g(!1),children:(0,p.jsx)(a,{name:"Cursor",size:12})}),(0,p.jsx)("button",{type:"button",role:"radio","aria-checked":i,"aria-label":t("db.mode.data"),title:t("db.mode.data"),className:o(i&&"on"),onClick:()=>g(!0),children:(0,p.jsx)(a,{name:"Database",size:12})})]})]}),(0,p.jsxs)("div",{className:"rs-db-body",children:[(0,p.jsxs)("div",{className:"rs-db-page",children:[(0,p.jsx)("h6",{className:"rs-db-h",children:t("kind.dashboard.title")}),(0,p.jsx)("p",{className:"rs-db-take",children:t("db.takeaway")}),(0,p.jsx)("div",{className:"rs-db-figs rs-db-mark",...v("totals"),children:U.map(e=>(0,p.jsxs)("div",{className:"rs-db-fig",children:[(0,p.jsx)("div",{className:"l",children:t(`db.fig.${e.key}`)}),(0,p.jsx)("div",{className:"v",children:e.value}),(0,p.jsx)("div",{className:o("d",e.good&&"good"),children:t("db.vs",{delta:e.delta})})]},e.key))}),(0,p.jsxs)("div",{className:"rs-db-cards",children:[(0,p.jsxs)("div",{className:"rs-db-card",children:[(0,p.jsx)("div",{className:"t",children:_("revenue")}),(0,p.jsx)("div",{className:"rs-db-mark",...v("revenue"),children:(0,p.jsx)(W,{months:n})})]}),(0,p.jsxs)("div",{className:"rs-db-card",children:[(0,p.jsx)("div",{className:"t",children:_("churn")}),(0,p.jsx)("div",{className:"rs-db-mark",...v("churn"),children:(0,p.jsx)(G,{months:n})})]})]})]}),i&&(0,p.jsxs)("aside",{className:"rs-db-side","aria-label":t("db.sources"),children:[(0,p.jsxs)("div",{className:"rs-db-side-h",children:[c?(0,p.jsx)("button",{type:"button",className:"rs-db-ib","aria-label":t("db.back"),title:t("db.back"),onClick:()=>l(null),children:(0,p.jsx)(a,{name:"CaretLeft",size:12})}):(0,p.jsx)("span",{className:"ttl",children:t("db.sources")}),(0,p.jsx)("span",{className:"rs-db-grow"}),(0,p.jsx)("button",{type:"button",className:"rs-db-ib","aria-label":t("panel.close"),onClick:()=>g(!1),children:(0,p.jsx)(a,{name:"X",size:12})})]}),c?(0,p.jsxs)("div",{className:"rs-db-detail",children:[(0,p.jsxs)("div",{className:"rs-db-dh",children:[(0,p.jsx)("span",{className:"n",children:_(c)}),(0,p.jsx)("button",{type:"button",className:"rs-db-ib","aria-label":t("db.viewRequestOf",{name:_(c)}),title:t("db.viewRequest"),onClick:()=>d(c),children:(0,p.jsx)(a,{name:"Code",size:12})}),(0,p.jsx)("button",{type:"button",className:"rs-db-ib","aria-label":t("db.refreshOf",{name:_(c)}),title:t("db.refresh"),onClick:()=>h("busy"),children:(0,p.jsx)(a,{name:"ArrowClockwise",size:12})})]}),(0,p.jsxs)("div",{className:"rs-db-cap",children:[(0,p.jsx)(a,{name:"Database",size:11}),(0,p.jsxs)("span",{children:[t(`db.conn.${H[c].conn}`)," · ",b(c)]})]}),(0,p.jsx)("div",{className:"rs-db-result",children:c==="totals"?(0,p.jsxs)("table",{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"metric"}),(0,p.jsx)("th",{className:"n",children:"q2"}),(0,p.jsx)("th",{className:"n",children:"q3"})]})}),(0,p.jsxs)("tbody",{children:[(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:"revenue"}),(0,p.jsx)("td",{className:"n",children:"3.64"}),(0,p.jsx)("td",{className:"n",children:"4.07"})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:"new_tier"}),(0,p.jsx)("td",{className:"n",children:"0.41"}),(0,p.jsx)("td",{className:"n",children:"0.88"})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:"churn"}),(0,p.jsx)("td",{className:"n",children:"0.042"}),(0,p.jsx)("td",{className:"n",children:"0.031"})]}),(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:"apac"}),(0,p.jsx)("td",{className:"n",children:"0.540"}),(0,p.jsx)("td",{className:"n",children:"0.542"})]})]})]}):(0,p.jsxs)("table",{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"month"}),(0,p.jsx)("th",{className:"n",children:c==="revenue"?"revenue_m":"churn"})]})}),(0,p.jsx)("tbody",{children:n.map((e,t)=>(0,p.jsxs)("tr",{children:[(0,p.jsxs)("td",{children:["2026-",String(t+4).padStart(2,"0")]}),(0,p.jsx)("td",{className:"n",children:c==="revenue"?(B[t]??0).toFixed(2):((z[t]??0)/100).toFixed(3)})]},e))})]})}),(0,p.jsx)("div",{className:"rs-db-rows",children:t("db.rows",{n:H[c].rows})})]}):(0,p.jsx)("ul",{className:"rs-db-list",role:"list","aria-label":t("db.sources"),children:V.map(e=>(0,p.jsx)("li",{children:(0,p.jsxs)("button",{type:"button",className:"rs-db-row",onClick:()=>l(e),children:[(0,p.jsx)("span",{className:"n",children:_(e)}),(0,p.jsxs)("span",{className:"m",children:[t(`db.conn.${H[e].conn}`)," · ",b(e)]}),(0,p.jsx)(a,{name:"Database",size:11})]})},e))})]})]}),u&&(0,p.jsx)("div",{className:"rs-db-scrim",role:"presentation",onClick:e=>{e.target===e.currentTarget&&d(null)},onKeyDown:e=>{e.key==="Escape"&&(e.stopPropagation(),d(null))},children:(0,p.jsxs)("div",{className:"rs-db-dlg",role:"dialog","aria-modal":"true","aria-label":t("db.requestAria",{name:_(u)}),children:[(0,p.jsxs)("div",{className:"rs-db-dlg-h",children:[(0,p.jsx)("span",{className:"n",children:_(u)}),(0,p.jsx)("button",{type:"button",className:"rs-db-ib","aria-label":t("db.close"),onClick:()=>d(null),autoFocus:!0,children:(0,p.jsx)(a,{name:"X",size:12})})]}),(0,p.jsx)("p",{className:"rs-db-fetched",children:t.rich("db.fetched",{connector:(0,p.jsx)("b",{children:t(`db.conn.${H[u].conn}`)})})}),(0,p.jsx)("div",{className:"rs-db-arg",children:"sql"}),(0,p.jsx)("pre",{className:"rs-db-sql",children:H[u].sql})]})})]})}var q=9,J=e=>Math.min(1,Math.max(0,e)),Y=e=>1-(1-J(e))**3,X=e=>{let t=Math.floor(e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},Z=["title","kicker"];function Q(e,t){let n={...e};return delete n[t],n}function $({t:e,words:t,ring:n,onWord:i}){let a=r(),s=a.seq("month"),c=Y((e-6.2)/1),l=J((e-7.4)/.6),u=150-4.2*18;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("svg",{className:"rs-mo-svg",viewBox:"0 0 320 180",role:"img","aria-label":a("motion.film.aria",{title:t.title}),children:[(0,p.jsx)("rect",{width:"320",height:"180",fill:"#faf9f5"}),(0,p.jsxs)("g",{stroke:"#e3dacc",strokeWidth:"0.6",children:[(0,p.jsx)("line",{x1:24,x2:"302",y1:114,y2:114}),(0,p.jsx)("line",{x1:24,x2:"302",y1:78,y2:78})]}),(0,p.jsx)("line",{x1:24,x2:"302",y1:150,y2:150,stroke:"#3d3d3a",strokeWidth:"0.7"}),(0,p.jsxs)("g",{fontFamily:"Helvetica Neue, Arial, sans-serif",fontSize:"5.5",fill:"#73726c",textAnchor:"end",children:[(0,p.jsx)("text",{x:21,y:116,children:"2%"}),(0,p.jsx)("text",{x:21,y:80,children:"4%"})]}),z.map((t,n)=>{let r=Y((e-(.5+n*.9))/.75),i=t*18*r,a=30+n*45+6,o=n===z.length-1;return(0,p.jsxs)("g",{children:[(0,p.jsx)("rect",{x:a,y:150-i,width:"28",height:i,fill:"#141413"}),o&&l>0&&(0,p.jsx)("rect",{x:a,y:150-i,width:"28",height:i,fill:"#d97757",opacity:l}),(0,p.jsx)("text",{x:a+14,y:150-i-4,textAnchor:"middle",fontFamily:"Georgia, serif",fontSize:"7",fill:"#141413",opacity:J((r-.7)/.3),children:t.toFixed(1)}),(0,p.jsx)("text",{x:a+14,y:160,textAnchor:"middle",fontFamily:"Helvetica Neue, Arial, sans-serif",fontSize:"5.8",fill:"#3d3d3a",children:s[n]})]},s[n]??n)}),c>0&&(0,p.jsxs)("g",{children:[(0,p.jsx)("line",{x1:30,x2:30+272*c,y1:u,y2:u,stroke:"#73726c",strokeWidth:"0.7",strokeDasharray:"2.5 2"}),(0,p.jsx)("text",{x:"302",y:70.39999999999999,textAnchor:"end",fontFamily:"Helvetica Neue, Arial, sans-serif",fontSize:"5.8",fill:"#73726c",opacity:J((c-.6)/.4),children:a("motion.film.ref")})]})]}),(0,p.jsxs)("div",{className:"rs-mo-words",children:[(0,p.jsx)("button",{type:"button",className:o("rs-mo-kick",n&&"ring"),tabIndex:n?0:-1,"aria-disabled":!n,onClick:()=>n&&i("kicker"),children:t.kicker}),(0,p.jsx)("button",{type:"button",className:o("rs-mo-ttl",n&&"ring"),tabIndex:n?0:-1,"aria-disabled":!n,onClick:()=>n&&i("title"),children:t.title})]})]})}function ee({active:e}){let t=r(),n=(0,f.useId)(),i=(0,f.useRef)(!1),[o,s]=(0,f.useState)(0),c=(0,f.useRef)(0),l=(0,f.useCallback)(e=>{let t=typeof e=="function"?e(c.current):e;c.current=t,s(t)},[]),[u,d]=(0,f.useState)(!1),[m,h]=(0,f.useState)(!1),[g,_]=(0,f.useState)(!1),v={title:t("motion.film.title"),kicker:t("motion.film.kicker")},[y,b]=(0,f.useState)({}),[x,S]=(0,f.useState)({}),C={...v,...y},w=(0,f.useRef)({}),T=(0,f.useRef)(null),E=(0,f.useRef)(null);(0,f.useEffect)(()=>{i.current=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i.current&&l(q)},[l]),(0,f.useEffect)(()=>{if(!u){E.current=null;return}let e=0,t=n=>{let r=E.current??n;E.current=n;let i=c.current+(n-r)/1e3;if(i>=q&&!m){l(q),d(!1);return}l(i>=q?0:i),e=window.requestAnimationFrame(t)};return e=window.requestAnimationFrame(t),()=>window.cancelAnimationFrame(e)},[u,m,l]),!e&&u&&d(!1);let D=(0,f.useRef)(null),O=(0,f.useRef)(!1);(0,f.useEffect)(()=>{if(!e){O.current=!1;return}let t=D.current;if(!t||g||i.current||O.current||typeof IntersectionObserver>"u")return;let n=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&!O.current&&(O.current=!0,n.disconnect(),l(0),d(!0))},{threshold:.5});return n.observe(t),()=>n.disconnect()},[e,g,l]);let k=()=>{if(O.current=!0,i.current){l(q);return}!u&&o>=q&&l(0),d(e=>!e)},A=e=>{let t=T.current?.getBoundingClientRect();t&&(d(!1),l(J((e-t.left)/t.width)*q))},j=e=>{let t={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1};e.key in t?(e.preventDefault(),d(!1),l(n=>Math.min(q,Math.max(0,n+(t[e.key]??0))))):(e.key==="Home"||e.key==="End")&&(e.preventDefault(),d(!1),l(e.key==="Home"?0:q))},M=()=>{let e=!g;_(e),e&&d(!1)},N=e=>{let t=(x[e]??C[e]).trim();t!==""&&t!==C[e]&&b(n=>({...n,[e]:t})),S(t=>Q(t,e))},P=e=>{b(t=>Q(t,e)),S(t=>Q(t,e))},F=e=>{let t=w.current[e];t&&(t.focus(),t.select())},I=o/q*100;return(0,p.jsx)("div",{className:"rs-mo",ref:D,children:(0,p.jsxs)("div",{className:"rs-mo-body",children:[(0,p.jsxs)("div",{className:"rs-mo-main",children:[(0,p.jsx)("div",{className:"rs-mo-stage",children:(0,p.jsxs)("div",{className:"rs-mo-pic",children:[(0,p.jsx)($,{t:o,words:C,ring:g&&!u,onWord:F}),(0,p.jsx)("button",{type:"button",className:"rs-mo-hit",tabIndex:-1,"aria-label":t(u?"motion.pause":"motion.play"),onClick:k})]})}),(0,p.jsxs)("div",{className:"rs-mo-bar",role:"toolbar","aria-label":t("motion.bar.aria"),children:[(0,p.jsx)("button",{type:"button",className:"rs-mo-btn","aria-label":t(u?"motion.pause":"motion.play"),title:t(u?"motion.pause":"motion.play"),onClick:k,children:(0,p.jsx)(a,{name:u?"Pause":"Play",size:13})}),(0,p.jsx)("button",{type:"button",className:"rs-mo-btn","aria-label":t("motion.restart"),title:t("motion.restartTip"),onClick:()=>l(0),children:(0,p.jsx)(a,{name:"ArrowCounterClockwise",size:13})}),(0,p.jsx)("button",{type:"button",className:"rs-mo-btn","aria-label":t("motion.loop"),"aria-pressed":m,title:t("motion.loop"),onClick:()=>h(e=>!e),children:(0,p.jsx)(a,{name:"Loop",size:13})}),(0,p.jsxs)("span",{className:"rs-mo-time","aria-hidden":"true",children:[(0,p.jsx)("b",{children:X(o)})," / ",X(q)]}),(0,p.jsxs)("div",{ref:T,className:"rs-mo-rail",role:"slider",tabIndex:0,"aria-label":t("motion.playhead"),"aria-valuemin":0,"aria-valuemax":q,"aria-valuenow":Math.round(o*10)/10,"aria-valuetext":`${X(o)} / ${X(q)}`,onKeyDown:j,onPointerDown:e=>{e.currentTarget.setPointerCapture(e.pointerId),A(e.clientX)},onPointerMove:e=>{e.currentTarget.hasPointerCapture(e.pointerId)&&A(e.clientX)},children:[(0,p.jsx)("span",{className:"rs-mo-track",children:(0,p.jsx)("span",{className:"rs-mo-fill",style:{width:`${I}%`}})}),(0,p.jsx)("span",{className:"rs-mo-head",style:{left:`${I}%`}})]}),(0,p.jsx)("span",{className:"rs-mo-btn quiet",title:t("motion.comment"),"aria-hidden":"true",children:(0,p.jsx)(a,{name:"ChatAdd",size:13})}),(0,p.jsx)("span",{className:"rs-mo-btn quiet",title:t("motion.export"),"aria-hidden":"true",children:(0,p.jsx)(a,{name:"Download",size:13})}),(0,p.jsx)("span",{className:"rs-mo-sep","aria-hidden":"true"}),(0,p.jsxs)("button",{type:"button",className:"rs-mo-btn named","aria-label":t("motion.tweaks"),"aria-pressed":g,"aria-controls":n,title:t(g?"motion.tweaksHide":"motion.tweaksTip"),onClick:M,children:[(0,p.jsx)(a,{name:"Filter",size:13}),(0,p.jsx)("span",{className:"w",children:t("motion.tweaks")})]})]})]}),g&&(0,p.jsxs)("div",{className:"rs-mo-tw",id:n,role:"region","aria-label":t("motion.panel"),children:[(0,p.jsxs)("div",{className:"rs-mo-tw-h",children:[(0,p.jsxs)("span",{className:"rs-mo-tw-tabs",role:"group","aria-label":t("motion.panel"),children:[(0,p.jsx)("span",{className:"on","aria-current":"true",children:t("motion.tweaks")}),(0,p.jsx)("span",{children:t("motion.tab.style")})]}),(0,p.jsx)("button",{type:"button",className:"rs-mo-btn","aria-label":t("panel.close"),onClick:()=>_(!1),children:(0,p.jsx)(a,{name:"X",size:12})})]}),(0,p.jsx)("div",{className:"rs-mo-tw-sub",children:t("motion.tweaks.now")}),u?(0,p.jsxs)("button",{type:"button",className:"rs-mo-tw-pause",onClick:()=>d(!1),children:[(0,p.jsx)(a,{name:"Pause",size:11}),t("motion.tweaks.pausePrompt")]}):(0,p.jsx)("div",{className:"rs-mo-tw-fields",children:Z.map((e,n)=>(0,p.jsxs)("div",{className:"rs-mo-tw-row",children:[(0,p.jsx)("textarea",{ref:t=>{w.current[e]=t},className:"rs-mo-tw-field",rows:e==="title"?2:1,"aria-label":t("motion.tweaks.field",{n:n+1}),value:x[e]??C[e],onChange:t=>S(n=>({...n,[e]:t.target.value})),onFocus:e=>e.currentTarget.select(),onBlur:()=>N(e),onKeyDown:e=>{(e.key==="Enter"||e.key==="Escape")&&(e.preventDefault(),e.currentTarget.blur()),e.stopPropagation()}}),y[e]!==void 0&&y[e]!==v[e]&&(0,p.jsx)("button",{type:"button",className:"rs-mo-btn rs-mo-tw-reset","aria-label":t("motion.tweaks.reset",{n:n+1}),title:t("motion.tweaks.resetTip"),onClick:()=>P(e),children:(0,p.jsx)(a,{name:"ArrowCounterClockwise",size:11})})]},e))})]})]})})}function te(){let e=r(),t=(0,f.useId)(),[n,i]=(0,f.useState)(0),m=b[n],h=m.key,[_,x]=(0,f.useState)(!1),[S,C]=(0,f.useState)(!1),[T,E]=(0,f.useState)(!1),[D,O]=(0,f.useState)(0),[k,A]=(0,f.useState)(-1),j=k===D,M=(0,f.useRef)([]),N=(0,f.useRef)(null),P=(0,f.useRef)(null);(0,f.useEffect)(()=>{let e=window.setTimeout(()=>A(D),3800);return()=>window.clearTimeout(e)},[D]);let F=(0,f.useCallback)(()=>{x(!1),C(!1)},[]);(0,f.useEffect)(()=>{let e=e=>{let t=t=>e.target instanceof Node&&t!==null&&t.contains(e.target);!t(N.current)&&!t(P.current)&&F()},t=e=>{e.key==="Escape"&&(E(!1),F())};return document.addEventListener("click",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("click",e),document.removeEventListener("keydown",t)}},[F]);let z=e=>{i(e),F(),b[e].key==="slides"&&O(e=>e+1)};return(0,p.jsxs)("div",{className:"gs-rs not-prose",children:[(0,p.jsx)("style",{dangerouslySetInnerHTML:{__html:v}}),(0,p.jsx)("div",{className:"rs-subtabs",role:"tablist","aria-label":e("kinds.aria"),tabIndex:-1,onKeyDown:e=>{let t=b.length,r=n;if(e.key==="ArrowRight")r=(n+1)%t;else if(e.key==="ArrowLeft")r=(n-1+t)%t;else if(e.key==="Home")r=0;else if(e.key==="End")r=t-1;else return;e.preventDefault(),z(r),M.current[r]?.focus()},children:b.map((n,r)=>(0,p.jsxs)("button",{ref:e=>{M.current[r]=e},type:"button",role:"tab",id:`${t}-kind-${n.key}`,"aria-selected":n.key===h,"aria-controls":`${t}-panel`,tabIndex:n.key===h?0:-1,className:"rs-subtab",onClick:()=>z(r),children:[(0,p.jsx)(g,{kind:n.key}),(0,p.jsxs)("span",{className:"klabel",children:[e(`kind.${n.key}.label`),n.beta&&(0,p.jsx)("span",{className:"kbeta",children:e("kind.beta")})]})]},n.key))}),(0,p.jsx)("div",{className:"rs-texts","aria-hidden":"true",children:b.map(t=>(0,p.jsxs)("div",{className:o("rs-text",t.key===h&&"is-on"),children:[(0,p.jsx)("p",{className:"rs-get",children:e.rich("get.line",{name:(0,p.jsx)("b",{children:e(`kind.${t.key}.name`)}),what:e(`kind.${t.key}.get`)})}),(0,p.jsx)("p",{className:"rs-eg",children:e.rich("eg.line",{ask:(0,p.jsx)("em",{children:e(`kind.${t.key}.ask`)})})})]},t.key))}),(0,p.jsxs)("p",{className:"rs-sr","aria-live":"polite",children:[e("get.line",{name:e(`kind.${h}.name`),what:e(`kind.${h}.get`)})," ",e("eg.line",{ask:e(`kind.${h}.ask`)})]}),(0,p.jsx)("div",{className:"rs-frame",children:(0,p.jsx)("div",{className:"rs-stage",role:"tabpanel",id:`${t}-panel`,"aria-labelledby":`${t}-kind-${h}`,tabIndex:0,children:(0,p.jsxs)("div",{className:"rs-panel",children:[(0,p.jsxs)("div",{className:"rs-fbar",children:[(0,p.jsxs)("span",{className:"rs-fbar-title",children:[(0,p.jsx)("span",{children:e(`kind.${h}.title`)}),(0,p.jsx)(d,{})]}),m.saving&&(0,p.jsx)("span",{className:"rs-fbar-saving",role:"img","aria-label":e("drawer.saving"),title:e("drawer.saving")}),(0,p.jsx)("span",{className:"rs-fbar-sp"}),m.faces&&(0,p.jsxs)("span",{className:"rs-fbar-faces","aria-hidden":"true",children:[(0,p.jsx)("span",{className:"rs-face a",children:"M"}),(0,p.jsx)("span",{className:"rs-face b",children:"D"})]}),(0,p.jsx)("span",{className:"rs-fbar-ic",title:e("drawer.comment"),children:(0,p.jsx)("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,p.jsx)("path",{d:"M3 3.5h10v7H6.5L4 13v-2.5H3z",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"})})}),(0,p.jsxs)("button",{type:"button",className:"rs-fbar-share","aria-haspopup":"true","aria-expanded":_,onClick:e=>{e.stopPropagation();let t=!_;F(),x(t)},children:[(0,p.jsx)(a,{name:"Lock",size:12}),e("share.title")]})]}),(0,p.jsxs)("div",{ref:N,className:o("rs-share",_&&"on"),role:"dialog","aria-label":e("share.title"),children:[(0,p.jsxs)("div",{className:"rs-share-tabs",children:[(0,p.jsx)("span",{className:"on",children:e("share.title")}),(0,p.jsx)("span",{children:e("share.export")})]}),(0,p.jsx)("div",{className:"rs-share-h",children:e("share.access")}),(0,p.jsxs)("div",{className:"rs-share-opt on",children:[e("share.invited"),(0,p.jsx)(a,{name:"Check",size:14,className:"chk"})]}),(0,p.jsx)("div",{className:"rs-share-opt",children:e("share.org",{org:y})}),(0,p.jsx)("div",{className:"rs-share-opt off",children:e("share.link")}),(0,p.jsx)("div",{className:"rs-share-note",children:e("share.note")}),(0,p.jsx)("div",{className:"rs-share-foot",children:(0,p.jsxs)("span",{className:"rs-share-copy",children:[(0,p.jsx)(a,{name:"Link",size:14}),e("share.copyLink")]})})]}),(0,p.jsxs)("div",{className:"rs-panel-body",children:[(0,p.jsx)("div",{className:o("rs-kpane",h==="slides"&&"on"),children:(0,p.jsxs)("div",{className:"rs-sl",children:[(0,p.jsxs)("div",{className:"rs-sl-tb",children:[(0,p.jsxs)("span",{className:"tbtn",children:["46%",(0,p.jsx)(d,{})]}),(0,p.jsx)("span",{className:"tsep"}),(0,p.jsx)("span",{className:"tbtn",children:e("slides.tool.text")}),(0,p.jsx)("span",{className:"tbtn",children:e("slides.tool.image")}),(0,p.jsx)("span",{className:"tbtn",children:e("slides.tool.table")}),(0,p.jsx)("span",{className:"tbtn",children:e("slides.tool.shapes")}),(0,p.jsx)("span",{className:"tgrow"}),(0,p.jsxs)("span",{className:"twrap",children:[(0,p.jsxs)("button",{type:"button",className:"tbtn click","aria-haspopup":"true","aria-expanded":S,onClick:e=>{e.stopPropagation();let t=!S;F(),C(t)},children:[(0,p.jsx)("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,p.jsx)("path",{d:"M8 2.5v8M8 10.5L4.8 7.3M8 10.5l3.2-3.2M3 13h10",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})}),e("slides.download"),(0,p.jsx)(d,{})]}),(0,p.jsxs)("div",{ref:P,className:o("rs-menu",S&&"on"),children:[(0,p.jsx)("div",{className:"mi",children:e("slides.menu.pdf")}),(0,p.jsx)("div",{className:"mi",children:e("slides.menu.html")}),(0,p.jsx)("div",{className:"mi",children:e("slides.menu.png")}),(0,p.jsx)("div",{className:"msep"}),(0,p.jsx)("div",{className:"mi",children:e("slides.menu.pptx")}),(0,p.jsx)("div",{className:"mi",children:e("slides.menu.pptxBasic")}),(0,p.jsx)("div",{className:"mgrp",children:e("slides.menu.basicNote")})]})]}),(0,p.jsxs)("button",{type:"button",className:"tbtn click primary",onClick:e=>{e.stopPropagation(),F(),E(!0)},children:[(0,p.jsx)("svg",{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:(0,p.jsx)("path",{d:"M4.5 3l8.5 5-8.5 5z"})}),e("slides.present")]})]}),(0,p.jsxs)("div",{className:"rs-sl-body",children:[(0,p.jsx)(s,{keys:"preview"}),(0,p.jsxs)("div",{className:"rs-sl-canvas",children:[(0,p.jsx)(c,{keys:"preview",editing:!0}),(0,p.jsx)("div",{className:"rs-cpin",style:{left:"37.5%",top:"41%"},"aria-hidden":"true",children:(0,p.jsx)("span",{children:"M"})}),(0,p.jsxs)("div",{className:"rs-sl-under",children:[(0,p.jsxs)("div",{className:"rs-sl-pager",children:[(0,p.jsx)("i",{children:(0,p.jsx)(L,{})}),(0,p.jsx)("span",{children:e("slides.pager",{current:2,total:6})}),(0,p.jsx)("i",{children:(0,p.jsx)(R,{})})]}),(0,p.jsxs)("div",{className:"rs-cthread",children:[(0,p.jsxs)("div",{className:"who",children:[(0,p.jsx)("span",{className:"rs-face a",children:"M"}),(0,p.jsx)("i",{className:"nm"}),(0,p.jsx)("small",{children:e("comment.now")})]}),(0,p.jsxs)("div",{className:"say",children:[(0,p.jsx)("span",{className:"at",children:e("comment.claudeTag")})," ",e("comment.say")]}),(0,p.jsx)("div",{className:o("st",j&&"done"),"aria-live":"polite",children:e(j?"comment.done":"comment.working")})]})]})]})]}),(0,p.jsxs)("div",{className:o("rs-present",T&&"on"),children:[(0,p.jsx)(c,{keys:"preview",editing:!1}),(0,p.jsxs)("div",{className:"rs-present-bar",children:[(0,p.jsx)("span",{children:e("present.prev")}),(0,p.jsx)("span",{className:"cnt",children:e.rich("present.count",{current:(0,p.jsx)("b",{children:"2"}),total:"6"})}),(0,p.jsx)("span",{children:e("present.next")}),(0,p.jsx)("button",{type:"button",className:"x",onClick:()=>E(!1),children:e("present.exit")})]})]})]})}),(0,p.jsx)("div",{className:o("rs-kpane",h==="docs"&&"on"),children:(0,p.jsx)(u,{keys:"preview",commenter:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:"rs-face b",children:"D"}),(0,p.jsx)("i",{className:"nm"})]})})}),(0,p.jsx)("div",{className:o("rs-kpane",h==="design"&&"on"),children:(0,p.jsx)(l,{keys:"preview"})}),(0,p.jsx)("div",{className:o("rs-kpane",h==="sheets"&&"on"),children:(0,p.jsx)(I,{})}),(0,p.jsx)("div",{className:o("rs-kpane",h==="dashboard"&&"on"),children:(0,p.jsx)(K,{active:h==="dashboard"})}),(0,p.jsx)("div",{className:o("rs-kpane",h==="motion"&&"on"),children:(0,p.jsx)(ee,{active:h==="motion"})}),(0,p.jsx)("div",{className:o("rs-kpane",h==="custom"&&"on"),children:(0,p.jsx)(w,{})})]})]})})})]})}export{te as default};