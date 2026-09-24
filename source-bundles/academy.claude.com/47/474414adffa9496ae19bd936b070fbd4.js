import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{Qp as t,tm as n}from"../../../../content-de-meta-ll4flgq0.js";import{c as r}from"../../../../router-ept34030.js";import{u as i}from"../../../../WidgetCopy-pecb8num.js";import{o as a}from"../../../../ResourceWidget-gnntkd3m.js";import{a as o,c as s,l as c,n as l,o as u,r as d,s as ee,t as f,u as p}from"../../../../_shared-nbbka9ym.js";var m=e(n(),1),h=t(),te=`
.gs-cb {
  ${u}
  ${s}
  --cb-bg-000: #ffffff;
  --cb-bg-100: #faf9f5;
  --cb-bg-200: #f0eee6;
  --cb-bg-300: #ece9de;
  --cb-bg-400: #e3decf;
  --cb-text-000: #141413;
  --cb-text-100: #1f1e1d;
  --cb-text-200: #3d3d3a;
  --cb-text-400: #73726c;
  --cb-ink-mid: color-mix(in srgb, var(--gs-ink-2) 50%, var(--gs-ink-3));
  --cb-text-500: #73726c;
  --cb-hair: rgba(31, 30, 29, 0.15);
  --cb-hair-25: rgba(31, 30, 29, 0.25);
  --cb-hair-soft: rgba(31, 30, 29, 0.08);
  --cb-brand: #c6613f;
  --cb-brand-soft: #d97757;
  --cb-sep: rgba(31, 30, 29, 0.10);
  --cb-cue: #6a9bcc;
  --cb-cue-soft: rgba(106, 155, 204, 0.16);
  --cb-cue-bar: rgba(106, 155, 204, 0.55);
  --cb-cue-text: rgba(54, 99, 144, 0.95);
  --font-mono: var(--gs-mono);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.4, 0.64, 1);
  --t-fast: 90ms;
  --t-med: 160ms;
  --t-slow: 280ms;
  width: 100%;
  container: gs-cb / inline-size;
  font-family: var(--gs-sans);
  color: var(--gs-ink);
  -webkit-font-smoothing: antialiased;
  padding: 8px 0 4px;
}
.gs-cb *, .gs-cb *::before, .gs-cb *::after { box-sizing: border-box; }
.gs-cb button { -webkit-tap-highlight-color: transparent; }
  .gs-cb .wrap { max-width: 600px; margin: 0 auto; }

  .gs-cb .role-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    font-size: 13.5px;
    color: var(--gs-ink-3);
    position: relative;
  }
  .gs-cb .role-row > span:first-child { white-space: nowrap; }
  .gs-cb .role-trigger {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--gs-chip);
    color: var(--gs-ink);
    border: 0;
    border-radius: 10px;
    box-shadow: 0 0 0 0.5px var(--gs-hair);
    padding: 7px 11px 7px 13px;
    font: inherit;
    font-size: 14px;
    cursor: pointer;
    transition: box-shadow var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out);
    -webkit-tap-highlight-color: transparent;
  }
  .gs-cb .role-trigger:hover { box-shadow: 0 0 0 0.5px var(--gs-hair-strong); }
  .gs-cb .role-trigger:focus-visible { outline: 2px solid var(--gs-ink); outline-offset: 1px; }
  .gs-cb .role-trigger[aria-expanded="true"] { box-shadow: 0 0 0 0.5px var(--gs-hair-strong); }
  .gs-cb .role-trigger svg { width: 12px; height: 12px; opacity: 0.6; transform: translateY(0.5px); }
  .gs-cb .role-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 22px;
    background: var(--cb-bg-000);
    border-radius: 12px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.02), 0 10px 32px rgba(0,0,0,0.10), 0 0 0 0.5px var(--cb-hair);
    padding: 6px;
    min-width: 168px;
    z-index: 80;
    opacity: 0; transform: scale(0.96) translateY(-2px);
    visibility: hidden;
    transition: opacity 110ms var(--ease-out), transform 130ms var(--ease-out), visibility 0s linear 130ms;
    pointer-events: none;
    transform-origin: top left;
  }
  .gs-cb .role-menu.open { opacity: 1; transform: scale(1) translateY(0); visibility: visible; transition: opacity 110ms var(--ease-out), transform 130ms var(--ease-out), visibility 0s; pointer-events: auto; }
  .gs-cb .role-option {
    display: flex; align-items: center; gap: 10px; width: 100%; border: 0; background: transparent; font: inherit; text-align: left;
    padding: 8px 10px; border-radius: 8px;
    font-size: 14px; color: var(--cb-text-200);
    cursor: pointer; user-select: none;
    transition: background var(--t-fast) var(--ease-out), color var(--t-fast) var(--ease-out);
  }
  .gs-cb .role-option:hover { background: var(--cb-bg-300); color: var(--cb-text-000); }
  .gs-cb .role-option .check { width: 14px; height: 14px; color: var(--cb-text-000); opacity: 0; flex-shrink: 0; }
  .gs-cb .role-option[aria-selected="true"] .check { opacity: 1; }
  .gs-cb .role-option .role-ico { width: 16px; height: 16px; color: var(--cb-text-400); flex-shrink: 0; fill: currentColor; }
  .gs-cb .role-trigger .role-ico { width: 15px; height: 15px; color: var(--gs-ink-3); flex-shrink: 0; fill: currentColor; }

  .gs-cb .task-title {
    font-family: var(--gs-serif);
    font-weight: 500;
    font-size: 21px;
    color: var(--gs-ink);
    letter-spacing: -0.014em;
    line-height: 1.3;
    margin: 0 2px;
    padding-bottom: 18px;
    border-bottom: 0.5px solid var(--gs-hair);
  }
  .gs-cb .task-title.settle { animation: settle 240ms var(--ease-out) backwards; }

  .gs-cb .guide {
    margin: 18px 0 26px;
    padding: 0 2px;
  }
  .gs-cb .guide-label {
    font-family: var(--gs-sans);
    font-size: 13.5px;
    font-weight: 500;
    color: var(--cb-ink-mid);
    line-height: 1.5;
    margin-bottom: 10px;
    padding-left: 1px;
  }
  .gs-cb .guide.all-done .guide-label { display: none; }
  .gs-cb .guide-steps { display: flex; flex-direction: column; gap: 5px; }
  .gs-cb .step-row {
    display: grid;
    grid-template-columns: 22px 1fr;
    gap: 13px;
    align-items: start;
    padding: 7px 0;
    transition: opacity var(--t-slow) var(--ease-out), padding var(--t-slow) var(--ease-out);
  }
  .gs-cb .step-row[data-state="pending"], .gs-cb .step-row[data-state="done"] { padding: 5px 0; }
  .gs-cb .step-row .box {
    width: 19px; height: 19px;
    border-radius: 5px;
    border: 1.25px solid var(--gs-hair-strong);
    background: var(--gs-chip);
    margin-top: 1px;
    display: flex; align-items: center; justify-content: center;
    transition: background var(--t-med) var(--ease-out), border-color var(--t-med) var(--ease-out), box-shadow var(--t-med) var(--ease-out);
    box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.02);
    flex-shrink: 0;
  }
  .gs-cb .step-row .box svg { width: 11px; height: 11px; color: #fff; opacity: 0; transform: scale(0.5); transition: opacity var(--t-med) var(--ease-out), transform var(--t-med) var(--ease-spring); }
  .gs-cb .step-row .step-body { min-width: 0; }
  .gs-cb .step-row .step-label {
    font-family: var(--gs-sans);
    font-size: 15px;
    color: color-mix(in srgb, var(--gs-ink) 58%, transparent);
    line-height: 1.45;
    letter-spacing: -0.004em;
    transition: color var(--t-med) var(--ease-out), font-size var(--t-med) var(--ease-out);
  }
  .gs-cb .step-row[data-state="active"] .step-label { font-size: 16px; }
  .gs-cb .step-row .step-hint {
    font-size: 14px;
    color: var(--gs-ink-2);
    line-height: 1.5;
    max-height: 0;
    overflow: hidden;
    margin-top: 0;
    opacity: 0;
    transition: max-height var(--t-slow) var(--ease-out), opacity var(--t-slow) var(--ease-out), margin-top var(--t-slow) var(--ease-out);
  }
  .gs-cb .step-row .step-hint a {
    color: var(--cb-ink-mid);
    text-decoration: underline;
    text-decoration-color: var(--gs-hair-strong);
    text-underline-offset: 3px;
    white-space: nowrap;
    transition: color var(--t-fast) var(--ease-out), text-decoration-color var(--t-fast) var(--ease-out);
  }
  .gs-cb .step-row .step-hint a:hover { color: var(--gs-ink); text-decoration-color: var(--gs-ink); }

  .gs-cb .step-row[data-state="active"] .box { border-color: var(--cb-cue); animation: box-breathe 2.6s ease-in-out infinite; }
  .gs-cb .step-row[data-state="active"] .step-label { color: var(--gs-ink); font-weight: 500; }
  .gs-cb .step-row[data-state="active"] .step-hint { max-height: 120px; opacity: 1; margin-top: 5px; }
  .gs-cb .step-row[data-state="done"] .box { background: var(--gs-ink); border-color: var(--gs-ink); animation: none; }
  .gs-cb .step-row[data-state="done"] .box svg { color: var(--gs-page); }
  .gs-cb .step-row[data-state="done"] .box svg { opacity: 1; transform: scale(1); }
  .gs-cb .step-row[data-state="done"] .step-label { color: color-mix(in srgb, var(--gs-ink) 38%, transparent); text-decoration: line-through; text-decoration-color: var(--gs-hair-strong); text-decoration-thickness: 1px; }
  .gs-cb .step-row[data-state="done"] { opacity: 0.72; }
  @keyframes box-breathe {
    0%, 100% { box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.02), 0 0 0 0 rgba(106, 155, 204, 0); }
    50% { box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.02), 0 0 0 4px rgba(106, 155, 204, 0.22); }
  }

  .gs-cb .guide-ready {
    display: none;
    align-items: flex-start;
    gap: 11px;
    padding: 4px 0;
  }
  .gs-cb .guide.all-done .guide-ready { display: flex; animation: settle 420ms var(--ease-out) backwards; }
  .gs-cb .guide.all-done .guide-steps { display: none; }
  .gs-cb .guide-ready .box {
    width: 22px; height: 22px; border-radius: 999px;
    background: var(--cb-brand); color: #fff;
    display: flex; align-items: center; justify-content: center;
    margin-top: 1px; flex-shrink: 0;
    box-shadow: 0 1px 2px rgba(198, 97, 63, 0.25);
    animation: ready-pop 400ms var(--ease-spring) backwards, ready-halo 2.4s ease-in-out 400ms infinite;
  }
  @keyframes ready-pop {
    0% { transform: scale(0.6); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes ready-halo {
    0%, 100% { box-shadow: 0 1px 2px rgba(198, 97, 63, 0.25), 0 0 0 0 rgba(198, 97, 63, 0); }
    50% { box-shadow: 0 1px 2px rgba(198, 97, 63, 0.25), 0 0 0 5px rgba(198, 97, 63, 0.12); }
  }
  .gs-cb .guide-ready .box svg { width: 13px; height: 13px; transform: translateY(0.5px); }
  .gs-cb .guide-ready .text { font-family: var(--gs-serif); font-size: 16px; color: var(--gs-ink); line-height: 1.4; font-weight: 500; letter-spacing: -0.008em; }
  .gs-cb .guide-ready .text .sub { font-size: 14px; color: var(--gs-ink-2); margin-top: 4px; font-weight: 400; font-family: var(--gs-sans); letter-spacing: 0; }

  @keyframes settle { 0% { opacity: 0; transform: translateY(3px); } 40% { opacity: 0; transform: translateY(3px); } 100% { opacity: 1; transform: translateY(0); } }
  .gs-cb .guide.morph { overflow: hidden; transition: height 380ms cubic-bezier(0.22, 1, 0.36, 1); }
  .gs-cb .guide.morph .guide-steps, .gs-cb .guide.morph .guide-label { transition: opacity 160ms ease-out; }
  .gs-cb .guide.fading .guide-steps, .gs-cb .guide.fading .guide-label { opacity: 0; }
  @keyframes cue-fade { 0%, 100% { opacity: 0.30; } 50% { opacity: 1; } }
  @keyframes chip-in { 0% { opacity: 0; transform: scale(0.92) translateY(2px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }

  .gs-cb .composer {
    position: relative;
    background: var(--cb-bg-000);
    color: var(--cb-text-000);
    border-radius: 20px;
    box-shadow: 0 0 0 0.5px var(--cb-hair), 0 2px 8px rgba(0,0,0,0.08); 
    padding: 14px 14px 8px;
    transition: box-shadow var(--t-med) var(--ease-out);
  }
  .gs-cb .composer:focus-within { box-shadow: 0 0 0 0.5px rgba(31,30,29,0.24), 0 2px 8px rgba(0,0,0,0.08); }

  .gs-cb .files-row {
    display: flex; gap: 12px; flex-wrap: wrap;
    overflow: hidden;
    max-height: 0;
    padding: 0 4px;
    transition: max-height var(--t-slow) var(--ease-out), padding var(--t-slow) var(--ease-out);
  }
  .gs-cb .files-row.has-file { max-height: 140px; padding: 2px 4px 12px; }
  .gs-cb .file-card {
    position: relative;
    width: 120px; height: 120px;
    background: var(--cb-bg-000);
    border-radius: 8px;
    border: 0.5px solid var(--cb-hair-25);
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    padding: 8px 10px;
    display: flex; flex-direction: column; justify-content: space-between; gap: 10px;
    animation: chip-in 260ms var(--ease-spring) backwards;
  }
  .gs-cb .file-card .file-name {
    font-size: 12px; line-height: 1.35; color: var(--cb-text-000);
    overflow: hidden; word-break: break-word;
    display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical;
  }
  .gs-cb .file-card .file-tag {
    align-self: flex-start;
    height: 18px;
    border: 0.5px solid var(--cb-hair-25);
    border-radius: 4px;
    padding: 0 4px;
    font-size: 11px; line-height: 17px;
    color: var(--cb-text-200); font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.01em;
  }
  .gs-cb .file-card .file-x {
    position: absolute; top: -8px; left: -8px; padding: 0;
    width: 20px; height: 20px; border-radius: 999px;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(4px);
    border: 0.5px solid var(--cb-hair);
    color: var(--cb-text-200);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out);
  }
  .gs-cb .file-card:hover .file-x { opacity: 1; }
  .gs-cb .file-card .file-x:hover { background: #fff; color: var(--cb-text-000); }
  .gs-cb .file-card .file-x svg { width: 11px; height: 11px; }
  .gs-cb .file-card .file-x:focus-visible { outline: 2px solid var(--cb-text-000); outline-offset: 1px; opacity: 1; }

  .gs-cb .prompt-area {
    font-family: var(--gs-sans);
    font-size: 15.5px;
    line-height: 1.7;
    color: var(--cb-text-000);
    padding: 4px 6px 14px;
    min-height: 64px;
    outline: 0; cursor: text;
  }
  .gs-cb .prompt-area .static { color: var(--cb-text-200); }
  .gs-cb .fill {
    display: inline-block; min-width: 4em; max-width: 22em;
    border: 0; border-bottom: 1.5px dashed rgba(31, 30, 29, 0.30);
    color: var(--cb-text-000);
    padding: 0 2px; margin: 0 1px;
    outline: 0; cursor: text;
    transition: border-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out);
    vertical-align: baseline; word-break: break-word;
  }
  .gs-cb .fill:empty::before { content: attr(data-placeholder); color: var(--cb-text-400); }
  .gs-cb .fill:focus { border-bottom-style: solid; border-bottom-color: var(--cb-text-200); background: var(--cb-bg-200); border-radius: 3px 3px 0 0; }
  .gs-cb .fill:not(:empty) { border-bottom-style: solid; border-bottom-color: rgba(31, 30, 29, 0.20); }
  
  .gs-cb .fill:not(.cue):not(:focus):empty { border-bottom-color: rgba(106, 155, 204, 0.50); background: rgba(106, 155, 204, 0.07); border-radius: 3px 3px 0 0; }
  .gs-cb .fill:not(.cue):not(:focus):empty:hover { background: rgba(106, 155, 204, 0.12); border-bottom-color: rgba(106, 155, 204, 0.70); }
  
  .gs-cb .fill.cue {
    position: relative;
    clip-path: inset(0 round 3px);
    background: var(--cb-cue-soft);
    border-bottom-color: var(--cb-cue);
    border-radius: 3px;
    animation: chip-breathe 3.6s ease-in-out infinite;
  }
  .gs-cb .fill.cue::after {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background: linear-gradient(105deg, transparent 30%, rgba(253, 252, 249, 0.55) 50%, transparent 70%);
    transform: translateX(-110%);
    animation: shimmer-seq 3.6s ease-in-out infinite;
  }
  .gs-cb .fill.cue:empty::before { content: attr(data-placeholder); color: var(--cb-cue-text); }
  .gs-cb .fill.cue:focus { animation: none; background: var(--cb-bg-200); border-bottom-color: var(--cb-text-200); clip-path: none; }
  .gs-cb .fill.cue:focus:empty::before { color: var(--cb-text-400); }
  .gs-cb .fill.cue:focus::after { animation: none; opacity: 0; }

  .gs-cb .conn-chip-wrap { position: relative; display: inline-block; vertical-align: baseline; }
  .gs-cb .conn-chip {
    display: inline-flex; align-items: center; gap: 5px;
    background: transparent; border: 0;
    border-bottom: 1.5px dashed rgba(31, 30, 29, 0.30);
    color: var(--cb-text-400);
    padding: 0 2px; margin: 0 1px;
    font: inherit; cursor: pointer;
    transition: border-color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out), color var(--t-fast) var(--ease-out);
    border-radius: 3px 3px 0 0;
    position: relative;
  }
  .gs-cb .conn-chip:hover { background: var(--cb-bg-200); color: var(--cb-text-200); }
  .gs-cb .conn-chip:focus-visible { outline: 2px solid var(--cb-text-000); outline-offset: 2px; border-radius: 4px; }
  .gs-cb .conn-chip[data-empty="false"] { color: var(--cb-text-000); border-bottom-style: solid; border-bottom-color: rgba(31, 30, 29, 0.20); }
  .gs-cb .conn-chip:not(.cue):not([data-empty="false"]) { border-bottom-color: rgba(106, 155, 204, 0.50); background: rgba(106, 155, 204, 0.07); }
  .gs-cb .conn-chip:not(.cue):not([data-empty="false"]):hover { background: rgba(106, 155, 204, 0.12); border-bottom-color: rgba(106, 155, 204, 0.70); color: var(--cb-text-200); }
  .gs-cb .conn-chip .conn-ico { width: 15px; height: 15px; flex-shrink: 0; color: var(--cb-text-400); fill: none; stroke: currentColor; }
  .gs-cb .conn-chip .caret-ico { width: 11px; height: 11px; opacity: 0.55; flex-shrink: 0; transform: translateY(0.5px); }
  
  .gs-cb .conn-chip.cue {
    background: var(--cb-cue-soft);
    clip-path: inset(0 round 3px);
    border-bottom-color: var(--cb-cue);
    border-radius: 3px;
    animation: chip-breathe 3.6s ease-in-out infinite;
  }
  .gs-cb .conn-chip.cue::after {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background: linear-gradient(105deg, transparent 30%, rgba(253, 252, 249, 0.55) 50%, transparent 70%);
    transform: translateX(-110%);
    animation: shimmer-seq 3.6s ease-in-out infinite;
  }
  .gs-cb .conn-chip.cue { color: var(--cb-cue-text); }
  .gs-cb .conn-chip.cue .conn-ico { color: rgba(54, 99, 144, 0.75); }
  .gs-cb .conn-chip.cue:hover { animation: none; background: rgba(106, 155, 204, 0.24); }
  .gs-cb .conn-chip.cue:hover::after { animation: none; opacity: 0; }
  @keyframes chip-breathe {
    0%, 100% { background: rgba(106, 155, 204, 0.10); }
    8% { background: rgba(106, 155, 204, 0.26); }
    20% { background: rgba(106, 155, 204, 0.10); }
  }

  .gs-cb .toolbar { display: flex; align-items: center; gap: 4px; padding-top: 4px; }
  .gs-cb .toolbar .grow { flex: 1; }
  .gs-cb .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 5px;
    height: 32px; border: 0; background: transparent; color: var(--cb-text-200);
    font: inherit; font-size: 13.5px; cursor: pointer; border-radius: 8px;
    transition: background var(--t-fast) var(--ease-out), color var(--t-fast) var(--ease-out);
    -webkit-tap-highlight-color: transparent;
    position: relative;
  }
  .gs-cb .btn:hover { background: var(--cb-bg-200); }
  .gs-cb .btn:active { background: var(--cb-bg-300); }
  .gs-cb .btn:focus-visible { outline: 2px solid var(--cb-text-000); outline-offset: 1px; }
  .gs-cb .menu-row:focus-visible, .gs-cb .role-option:focus-visible, .gs-cb .picker-row:focus-visible { outline: 2px solid var(--cb-text-000); outline-offset: -2px; background: var(--cb-bg-200); }
  .gs-cb .btn[aria-expanded="true"] { background: var(--cb-bg-300); }

  .gs-cb .btn-add { width: 32px; }
  .gs-cb .btn-add svg { transition: transform 200ms var(--ease-out); }
  .gs-cb .btn-add[aria-expanded="true"] svg { transform: rotate(45deg); }
  .gs-cb .btn.cue {
    background: var(--cb-cue-soft);
    overflow: hidden;
    animation: btn-breathe 3.6s ease-in-out infinite;
  }
  .gs-cb .btn.cue::after {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background: linear-gradient(110deg, transparent 35%, rgba(253, 252, 249, 0.55) 50%, transparent 65%);
    transform: translateX(-110%);
    animation: shimmer-seq 3.6s ease-in-out 0.7s infinite;
  }
  @keyframes btn-breathe {
    0%, 100% { background: rgba(106, 155, 204, 0.10); box-shadow: 0 0 0 0 rgba(106, 155, 204, 0); }
    27% { background: rgba(106, 155, 204, 0.24); box-shadow: 0 0 0 4px rgba(106, 155, 204, 0.14); }
    44% { background: rgba(106, 155, 204, 0.10); box-shadow: 0 0 0 0 rgba(106, 155, 204, 0); }
  }
  @keyframes shimmer-seq {
    0% { transform: translateX(-110%); }
    18% { transform: translateX(110%); }
    100% { transform: translateX(110%); }
  }
  .gs-cb .btn-model { height: 28px; padding: 0 8px; border-radius: 6px; color: var(--cb-text-200); white-space: nowrap; }
  .gs-cb .btn-model .muted { color: var(--cb-text-500); margin-left: 2px; }
  .gs-cb .btn-model .think-tag { margin-left: 6px; font-size: 11px; color: var(--cb-text-200); background: var(--cb-bg-200); padding: 1px 7px; border-radius: 999px; display: none; }
  .gs-cb .btn-model .think-tag.visible { display: inline; animation: chip-in 200ms var(--ease-spring) backwards; }
  .gs-cb .btn-model .caret { width: 12px; height: 12px; opacity: 0.7; margin-left: 4px; transform: translateY(0.5px); }

  /* Row of controls under the box (project, Output, model). It sits on the
     page, so its resting text reads theme tokens; the picked Output chip is a
     product chip and stays literal light. */
  .gs-cb .chin { display: flex; align-items: center; gap: 2px; padding: 6px 2px 0; }
  .gs-cb .chin .grow { flex: 1; }
  .gs-cb .btn-chin { height: 28px; padding: 0 9px; font-size: 13px; color: var(--gs-ink-3); border-radius: 8px; }
  .gs-cb .chin .btn-model { color: var(--cb-ink-mid); }
  .gs-cb .chin .btn-model .muted { color: var(--gs-ink-3); }
  .gs-cb .chin .btn:not(.cue):not(.chip):hover { background: color-mix(in srgb, var(--gs-ink) 7%, transparent); color: var(--gs-ink-2); }
  .gs-cb .chin .btn:not(.cue):not(.chip):active,
  .gs-cb .chin .btn:not(.chip)[aria-expanded="true"] { background: color-mix(in srgb, var(--gs-ink) 10%, transparent); color: var(--gs-ink-2); }
  .gs-cb .chin .btn:focus-visible { outline-color: var(--gs-ink); }
  .gs-cb .tico { width: 20px; height: 20px; border-radius: 5px; background: color-mix(in srgb, var(--k) 14%, #fff); display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .gs-cb .tico svg { width: 13px; height: 13px; fill: none; stroke: var(--k); stroke-width: 1.2; stroke-linejoin: round; stroke-linecap: round; }
  .gs-cb .tico.plain { background: transparent; }
  .gs-cb .tico.plain svg { width: 16px; height: 16px; stroke: var(--cb-text-200); }
  /* Output picker (composer artifact-kind chip) */
  .gs-cb .btn-output { gap: 6px; }
  .gs-cb .btn-output .out-x { display: none; font-size: 14px; line-height: 1; color: var(--cb-text-400); margin-left: 2px; padding: 0 2px; }
  .gs-cb .btn-output.chip { background: var(--cb-bg-300); color: var(--cb-text-100); box-shadow: inset 0 0 0 0.5px color-mix(in srgb, var(--k) 45%, transparent); }
  .gs-cb .btn-output.chip:hover { background: var(--cb-bg-200); }
  .gs-cb .btn-output.chip .out-x { display: inline; }
  .gs-cb .btn-output.chip .tico { width: 16px; height: 16px; }
  .gs-cb .btn-output.chip .tico svg { width: 11px; height: 11px; }

  .gs-cb .btn-send {
    width: 32px; height: 32px; border-radius: 8px;
    background: var(--cb-brand); color: #fff; margin-left: 2px;
    cursor: default;
    transition: background var(--t-fast) var(--ease-out), transform 80ms var(--ease-out), box-shadow var(--t-med) var(--ease-out);
  }
  .gs-cb .btn-send:hover { background: var(--cb-brand-soft); }
  .gs-cb .btn-send:active { transform: scale(0.94); }
  .gs-cb .btn-send svg { width: 16px; height: 16px; transform: translateY(-0.5px); }

  .gs-cb .ico { width: 18px; height: 18px; display: inline-block; fill: currentColor; flex-shrink: 0; }
  .gs-cb .ico-line { width: 18px; height: 18px; display: inline-block; flex-shrink: 0; fill: none; stroke: currentColor; }

  .gs-cb .menu {
    position: absolute;
    background: var(--cb-bg-000);
    border-radius: 12px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.02), 0 10px 32px rgba(0,0,0,0.10), 0 0 0 0.5px var(--cb-hair);
    padding: 6px;
    min-width: 13rem;
    z-index: 50;
    opacity: 0; transform: scale(0.96) translateY(-2px);
    visibility: hidden;
    transition: opacity 110ms var(--ease-out), transform 130ms var(--ease-out), visibility 0s linear 130ms;
    pointer-events: none;
    transform-origin: top left;
  }
  .gs-cb .menu.open { opacity: 1; transform: scale(1) translateY(0); visibility: visible; transition: opacity 110ms var(--ease-out), transform 130ms var(--ease-out), visibility 0s; pointer-events: auto; }
  .gs-cb .menu.anchor-right { transform-origin: top right; }

  .gs-cb .menu-row {
    display: grid; width: 100%; border: 0; background: transparent; font: inherit; text-align: left;
    grid-template-columns: 20px 1fr auto;
    align-items: center; gap: 10px;
    padding: 7px 9px 7px 8px;
    border-radius: 8px; min-height: 32px;
    cursor: pointer; color: var(--cb-text-200);
    font-size: 14px; white-space: nowrap; user-select: none;
    position: relative;
    transition: background var(--t-fast) var(--ease-out), color var(--t-fast) var(--ease-out);
  }
  .gs-cb .menu-row:hover, .gs-cb .menu-row[data-hl="true"] { background: var(--cb-bg-300); color: var(--cb-text-000); }
  .gs-cb .menu-row .label { overflow: hidden; text-overflow: ellipsis; }
  .gs-cb .menu-row .suffix { display: inline-flex; align-items: center; gap: 4px; color: var(--cb-text-400); font-size: 12px; }
  .gs-cb .menu-row .chev { width: 12px; height: 12px; opacity: 0.6; }
  .gs-cb .menu-row .kbd { font-family: var(--font-mono); font-size: 11px; color: var(--cb-text-500); background: var(--cb-bg-200); border-radius: 4px; padding: 1px 5px; }

  .gs-cb .menu-row.cue {
    background: var(--cb-cue-soft);
    color: var(--cb-text-000);
    overflow: hidden;
    animation: row-breathe 3.6s ease-in-out infinite;
  }
  .gs-cb .menu-row.cue::after {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background: linear-gradient(105deg, transparent 30%, rgba(255, 251, 244, 0.52) 50%, transparent 70%);
    transform: translateX(-110%);
    animation: shimmer-seq 3.6s ease-in-out 1.4s infinite;
  }
  .gs-cb .menu-row.cue .label { font-weight: 500; position: relative; z-index: 1; }
  .gs-cb .menu-row.cue:hover { background: rgba(106, 155, 204, 0.24); animation: none; }
  .gs-cb .menu-row.cue:hover::after { animation: none; opacity: 0; }
  @keyframes row-breathe {
    0%, 100% { background: rgba(106, 155, 204, 0.10); }
    47% { background: rgba(106, 155, 204, 0.26); }
    64% { background: rgba(106, 155, 204, 0.10); }
  }

  .gs-cb .menu-sep { height: 0.5px; background: var(--cb-sep); margin: 6px 8px; }
  .gs-cb .menu-label { font-size: 12px; color: var(--cb-text-500); padding: 6px 8px 3px; letter-spacing: 0.01em; }

  .gs-cb .check { width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .gs-cb .check svg { width: 14px; height: 14px; color: #2c84db; opacity: 0; transform: scale(0.6); transition: opacity var(--t-fast) var(--ease-out), transform var(--t-fast) var(--ease-spring); }
  .gs-cb .menu-row[data-checked="true"] .check svg, .gs-cb .ds-row[aria-checked="true"] .check svg { opacity: 1; transform: scale(1); }

  .gs-cb .toggle {
    width: 28px; height: 16px;
    background: var(--cb-bg-400); border-radius: 999px;
    position: relative; flex-shrink: 0;
    transition: background var(--t-med) var(--ease-out);
  }
  .gs-cb .toggle::after {
    content: ""; position: absolute; top: 2px; left: 2px;
    width: 12px; height: 12px; border-radius: 999px;
    background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.18);
    transition: transform var(--t-med) var(--ease-spring);
  }
  .gs-cb .menu-row[data-on="true"] .toggle { background: var(--cb-text-000); }
  .gs-cb .menu-row[data-on="true"] .toggle::after { transform: translateX(12px); }
  
  .gs-cb .conn-toggle.cue::after {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    border-radius: 8px;
    background: linear-gradient(105deg, transparent 30%, rgba(255, 251, 244, 0.50) 50%, transparent 70%);
    background-size: 220% 100%;
    background-position: -120% 0;
    animation: shimmer-bg 3.6s ease-in-out 2.1s infinite;
  }
  
  .gs-cb .conn-toggle.cue[data-on="false"] .toggle {
    animation: toggle-needs-on 1.4s ease-in-out infinite;
    background: rgba(106, 155, 204, 0.45);
  }
  .gs-cb .conn-toggle.cue[data-on="true"] .toggle { animation: toggle-on-halo 3.6s ease-in-out 2.1s infinite; }
  @keyframes toggle-needs-on {
    0%, 100% { box-shadow: 0 0 0 1.5px rgba(106, 155, 204, 0.30); }
    50% { box-shadow: 0 0 0 4px rgba(106, 155, 204, 0.55); }
  }
  @keyframes toggle-on-halo {
    0%, 100% { box-shadow: 0 0 0 0 rgba(106, 155, 204, 0); }
    18% { box-shadow: 0 0 0 4px rgba(106, 155, 204, 0.32); }
    36% { box-shadow: 0 0 0 0 rgba(106, 155, 204, 0); }
  }
  @keyframes shimmer-bg {
    0% { background-position: -120% 0; }
    18% { background-position: 120% 0; }
    100% { background-position: 120% 0; }
  }

  .gs-cb .model-row { grid-template-columns: 20px 1fr; align-items: start; padding: 8px 9px 8px 8px; }
  .gs-cb .model-row.think-row { grid-template-columns: 20px 1fr auto; align-items: center; }
  .gs-cb .model-row .meta { display: flex; flex-direction: column; gap: 2px; overflow: hidden; }
  .gs-cb .model-row .meta .name { font-size: 14px; color: var(--cb-text-000); }
  .gs-cb .model-row .meta .desc { font-size: 12.5px; color: var(--cb-text-400); white-space: normal; }
  .gs-cb .model-row .check-mark { color: var(--cb-text-000); font-weight: 600; opacity: 0; transition: opacity var(--t-fast) var(--ease-out); }
  .gs-cb .model-row[data-selected="true"] .check-mark { opacity: 1; }

  .gs-cb .picker-menu {
    position: absolute; top: calc(100% + 6px); left: -4px;
    background: var(--cb-bg-000); border-radius: 12px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.02), 0 10px 32px rgba(0,0,0,0.10), 0 0 0 0.5px var(--cb-hair);
    padding: 6px; min-width: 176px; z-index: 60;
    opacity: 0; transform: scale(0.96) translateY(-2px);
    visibility: hidden;
    transition: opacity 110ms var(--ease-out), transform 130ms var(--ease-out), visibility 0s linear 130ms;
    pointer-events: none; transform-origin: top left;
  }
  .gs-cb .picker-menu.open { opacity: 1; transform: scale(1) translateY(0); visibility: visible; transition: opacity 110ms var(--ease-out), transform 130ms var(--ease-out), visibility 0s; pointer-events: auto; }
  .gs-cb .picker-row {
    display: grid; width: 100%; border: 0; background: transparent; text-align: left; grid-template-columns: 20px 1fr; align-items: center; gap: 10px;
    padding: 7px 9px 7px 8px; border-radius: 8px; cursor: pointer;
    color: var(--cb-text-200); font-family: var(--gs-sans); font-size: 14px;
    transition: background var(--t-fast) var(--ease-out), color var(--t-fast) var(--ease-out);
    user-select: none;
  }
  .gs-cb .picker-row:hover { background: var(--cb-bg-300); color: var(--cb-text-000); }
  .gs-cb .picker-row svg { width: 17px; height: 17px; color: var(--cb-text-400); fill: none; stroke: currentColor; }
  .gs-cb .picker-sep { height: 0.5px; background: var(--cb-sep); margin: 6px 8px; }
  .gs-cb .picker-label { font-size: 11.5px; color: var(--cb-text-500); padding: 4px 8px 2px; letter-spacing: 0.01em; font-family: var(--gs-sans); }

  .gs-cb .menu-add { top: calc(100% - 36px); left: 12px; }
  .gs-cb .menu-conn, .gs-cb .menu-ds { top: calc(100% - 36px); left: min(230px, calc(100% - 13rem - 8px)); }
  .gs-cb .menu-output { top: calc(100% + 40px); left: min(118px, calc(100% - 15.5rem)); min-width: 15.5rem; }
  .gs-cb .menu-model { top: calc(100% + 40px); right: 0; min-width: 264px; }
  .gs-cb .menu-row .chev { transition: transform var(--t-med) var(--ease-out); }
  .gs-cb .menu-row .chev.open { transform: rotate(90deg); }
  .gs-cb .effort-body { display: none; padding: 2px 0 2px 6px; }
  .gs-cb .effort-body.open { display: block; animation: settle 160ms var(--ease-out) backwards; }
  .gs-cb .menu-note { font-size: 11.5px; line-height: 1.45; color: var(--cb-text-500); padding: 4px 9px 6px 30px; white-space: normal; max-width: 250px; }
  .gs-cb .model-row .badge { margin-left: 7px; font-size: 10.5px; color: var(--cb-text-400); background: var(--cb-bg-200); border-radius: 999px; padding: 1px 7px; vertical-align: 1px; }
  .gs-cb .btn-model .muted { margin-left: 5px; }
  @container gs-cb (max-width: 520px) {
    .gs-cb .prompt-area { font-size: 14.5px; }
    .gs-cb .task-title { font-size: 19px; }
    .gs-cb .menu-model { min-width: 240px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .gs-cb *, .gs-cb *::before, .gs-cb *::after { animation: none !important; transition: none !important; }
  }
`,g={connectors:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",files:"https://support.claude.com/en/articles/8241126-upload-files-to-claude",models:"/tutorials/choosing-the-right-claude-model",effort:"https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings",artifacts:"https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them"},ne=["drive","email","calendar","messaging","crm"],_=e=>e.conn!==null||e.connOn.length>=1,v=e=>(e.fills[0]??"").length>1,y=e=>e.effort==="high"||e.effort==="max",re={general:{file:null,steps:[{id:"conn",done:_,cue:["addBtn","connectors"],learn:g.connectors},{id:"f1",done:v},{id:"output",done:e=>e.output==="slides",cue:["outputBtn","out-slides"],learn:g.artifacts}]},personal:{file:{name:"Trip photos (12)",ext:"JPG"},steps:[{id:"file",done:e=>e.fileAttached,cue:["addBtn","attach"],learn:g.files},{id:"f1",done:v},{id:"output",done:e=>e.output==="artifact",cue:["outputBtn","out-artifact"],learn:g.artifacts}]},sales:{file:null,steps:[{id:"conn",done:_,cue:["addBtn","connectors"],learn:g.connectors},{id:"f1",done:v},{id:"model-check",done:e=>e.openedModel,cue:["modelBtn"],learn:g.models}]},marketing:{file:null,steps:[{id:"conn",done:_,cue:["addBtn","connectors"],learn:g.connectors},{id:"f1",done:v},{id:"output",done:e=>e.output==="design",cue:["outputBtn","out-design"],learn:g.artifacts}]},legal:{file:{name:"vendor-agreement.pdf",ext:"PDF"},steps:[{id:"file",done:e=>e.fileAttached,cue:["addBtn","attach"],learn:g.files},{id:"f1",done:v},{id:"effort",done:y,cue:["modelBtn","effort"],learn:g.effort}]},finance:{file:null,steps:[{id:"conn",done:_,cue:["addBtn","connectors"],learn:g.connectors},{id:"f1",done:v},{id:"effort",done:y,cue:["modelBtn","effort"],learn:g.effort}]}},ie=Object.keys(re),b=[{key:"fable",feature:"model-fable"},{key:"opus",feature:"model-opus"},{key:"sonnet",feature:"model-sonnet"},{key:"haiku",feature:"model-haiku"}],ae=[{key:"low"},{key:"medium"},{key:"high",isDefault:!0},{key:"max"}],oe=[{kind:"docs",feature:"out-docs",color:"#3f7fbf"},{kind:"slides",feature:"out-slides",color:"#b7791f"},{kind:"design",feature:"out-design",color:"#7663b8"},{kind:"artifact",feature:"out-artifact",color:"#3d3d3a",plain:!0}],se="#73726c",ce=[{key:"halden",name:"Halden",isDefault:!0},{key:"none"}],le=e=>({"--k":e});function ue(e,t){let n=/\{(fill|conn)\}/g,r=[],i=0,a=0,o;for(;(o=n.exec(e))!==null;)o.index>i&&r.push({kind:"static",text:e.slice(i,o.index)}),o[1]==="fill"?(r.push({kind:"fill",idx:a,placeholder:t}),a+=1):r.push({kind:"conn"}),i=n.lastIndex;return i<e.length&&r.push({kind:"static",text:e.slice(i)}),r}var x={general:"M16.5 3A1.5 1.5 0 0 1 18 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 15.5v-9A1.5 1.5 0 0 1 3.5 5h7.293l1.56-1.56.11-.1a1.5 1.5 0 0 1 .951-.34zm-3.086 1a.5.5 0 0 0-.277.084l-.077.062-1.707 1.708A.5.5 0 0 1 11 6H3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5z",personal:"M10 3.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15M10 14c-1.949 0-3.438.43-4.103 1.657l-.122.256-.01.017A6.47 6.47 0 0 0 10 17.5a6.47 6.47 0 0 0 4.233-1.57l-.008-.017-.123-.256C13.439 14.43 11.95 14 10 14m0-9.5a6.5 6.5 0 0 0-4.98 10.676C5.962 13.428 8.006 13 10 13s4.037.429 4.98 2.176A6.5 6.5 0 0 0 10 4.5m0 2a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5",sales:"M16.5 16a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1zm-11-8A1.5 1.5 0 0 1 7 9.5v4A1.5 1.5 0 0 1 5.5 15h-1A1.5 1.5 0 0 1 3 13.5v-4A1.5 1.5 0 0 1 4.5 8zm5-5A1.5 1.5 0 0 1 12 4.5v9a1.5 1.5 0 0 1-1.347 1.492L10.5 15h-1A1.5 1.5 0 0 1 8 13.5v-9A1.5 1.5 0 0 1 9.5 3zm5 2A1.5 1.5 0 0 1 17 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 14.5 5zm-11 4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zm5-5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1l.1-.01a.5.5 0 0 0 .4-.49v-9a.5.5 0 0 0-.5-.5zm5 2a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5z",marketing:"M8.958 2.63c.973-1.311 3.042-.345 2.663 1.242L10.634 8h4.379c1.232 0 1.939 1.404 1.205 2.393l-5.176 6.977c-.973 1.311-3.043.345-2.663-1.242L9.366 12H4.987c-1.232 0-1.939-1.404-1.205-2.394zm1.69 1.01c.127-.53-.563-.851-.887-.415l-5.176 6.977a.5.5 0 0 0 .402.798H10a.5.5 0 0 1 .486.616L9.352 16.36c-.127.53.563.851.887.414l5.176-6.976A.5.5 0 0 0 15.013 9H10a.5.5 0 0 1-.486-.616z",legal:"M8 4c.82 0 1.544.396 2 1.005A2.5 2.5 0 0 1 12 4h4.5A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-4.559a1.5 1.5 0 0 0-1.422 1.025l-.044.133a.5.5 0 0 1-.056.111q-.011.019-.024.036-.012.016-.028.032a.5.5 0 0 1-.092.078.5.5 0 0 1-.152.067l-.036.01-.007.001-.028.002q-.025.004-.052.004t-.053-.004q-.014 0-.027-.002l-.008-.002-.036-.009a.5.5 0 0 1-.12-.046.5.5 0 0 1-.099-.074l-.025-.025q-.015-.015-.028-.032t-.024-.035l-.023-.04-.032-.072-.044-.133A1.5 1.5 0 0 0 8.06 16H3.5A1.5 1.5 0 0 1 2 14.5v-9A1.5 1.5 0 0 1 3.5 4zM3.5 5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h4.559c.529 0 1.029.167 1.441.458V6.5A1.5 1.5 0 0 0 8 5zM12 5a1.5 1.5 0 0 0-1.5 1.5v8.958c.412-.29.912-.458 1.441-.458H16.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-4.5 7a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm7.5 0a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1 0-1zM7.5 9.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm7.5 0a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1 0-1zM15 7a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1 0-1z",finance:"M16.5 4A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9A1.5 1.5 0 0 1 3.5 4zm-10 11h10a.5.5 0 0 0 .5-.5V12H6.5zM3 14.5a.5.5 0 0 0 .5.5h2v-3H3zM6.5 11H17V8.5H6.5zM3 11h2.5V8.5H3zm3.5-3.5H17v-2a.5.5 0 0 0-.5-.5h-10zM3.5 5a.5.5 0 0 0-.5.5v2h2.5V5z",attach:"M6.068 2.161a2.72 2.72 0 0 1 3.524 1.533l3.206 8.14a1.61 1.61 0 0 1-.907 2.087l-.076.03a1.61 1.61 0 0 1-2.087-.908L8.027 8.726a.5.5 0 0 1 .93-.367l1.702 4.318a.61.61 0 0 0 .79.343l.076-.03a.61.61 0 0 0 .343-.79L8.662 4.06a1.72 1.72 0 0 0-2.227-.968l-.154.06a1.72 1.72 0 0 0-.97 2.228l3.87 9.821a2.826 2.826 0 0 0 3.665 1.594l.23-.09a2.83 2.83 0 0 0 1.595-3.666l-2.363-6a.5.5 0 1 1 .93-.366l2.363 6a3.826 3.826 0 0 1-2.158 4.962l-.23.09a3.827 3.827 0 0 1-4.963-2.157L4.382 5.747a2.72 2.72 0 0 1 1.532-3.525z",research:"M8.5 2a6.5 6.5 0 0 1 4.935 10.728l4.419 4.419.064.078a.5.5 0 0 1-.693.693l-.079-.064-4.419-4.42A6.5 6.5 0 1 1 8.5 2m0 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m3.1 3.51A.5.5 0 0 1 12 7v2a.5.5 0 0 1-1 0v-.793l-2.146 2.146a.5.5 0 0 1-.708 0L7 9.208l-1.146 1.146a.5.5 0 1 1-.708-.707l1.5-1.5.079-.064a.5.5 0 0 1 .629.064L8.5 9.293 10.293 7.5H9.5a.5.5 0 0 1 0-1h2z",web:"M7.27 3.05a7.467 7.467 0 1 1-.018.007l.01-.004zm1.372 11.478a8 8 0 0 0-1.464 1.362 6.53 6.53 0 0 0 3.373.62 6.2 6.2 0 0 1-.969-.835 10 10 0 0 1-.94-1.147m4.515-1.993c-.626.13-1.275.323-1.93.581-.654.258-1.26.56-1.808.892.276.386.555.73.835 1.02.45.468.88.788 1.258.958.376.17.665.178.881.093.218-.085.425-.289.584-.67.16-.383.257-.91.267-1.558a9 9 0 0 0-.087-1.316M3.637 8.52a6.5 6.5 0 0 0 .285 3.876 6.5 6.5 0 0 0 2.433 3.027 9 9 0 0 1 1.772-1.674 16.4 16.4 0 0 1-1.243-2.52 16.5 16.5 0 0 1-.81-2.693 9 9 0 0 1-2.436-.016m12.444 3.864a8 8 0 0 0-2 .003c.07.523.103 1.02.096 1.48a6.2 6.2 0 0 1-.14 1.272 6.53 6.53 0 0 0 2.044-2.755M11.095 6.77c-.607.37-1.271.701-1.98.981s-1.423.49-2.119.633c.165.79.417 1.638.757 2.5s.733 1.653 1.151 2.344c.607-.37 1.272-.701 1.982-.981s1.422-.49 2.117-.634a15.6 15.6 0 0 0-.756-2.499 15.6 15.6 0 0 0-1.152-2.344m2.548-2.194a9 9 0 0 1-1.77 1.674c.457.751.881 1.602 1.243 2.521.362.92.633 1.83.81 2.692a9 9 0 0 1 2.435.016 6.5 6.5 0 0 0-.282-3.875 6.5 6.5 0 0 0-2.436-3.028m-7.681.286a6.53 6.53 0 0 0-2.044 2.753c.603.08 1.279.082 1.999-.002-.07-.523-.1-1.02-.094-1.48a6.2 6.2 0 0 1 .139-1.27m2.526-.85c-.376-.17-.665-.177-.883-.091s-.423.288-.583.669c-.16.383-.256.91-.266 1.557a9 9 0 0 0 .086 1.316c.627-.13 1.276-.321 1.93-.58.655-.257 1.26-.561 1.807-.893a9 9 0 0 0-.833-1.02c-.45-.468-.88-.787-1.258-.957m4.334.096a6.53 6.53 0 0 0-3.372-.62c.328.224.654.506.969.834q.48.5.94 1.147a8 8 0 0 0 1.464-1.362"};function S({name:e,className:t="ico"}){return(0,h.jsx)("svg",{className:t,viewBox:"0 0 20 20","aria-hidden":"true",children:(0,h.jsx)("path",{fill:"currentColor",d:x[e]})})}function C({name:e}){let t={strokeLinecap:"round",strokeLinejoin:"round"},n={className:"ico-line",viewBox:"0 0 20 20","aria-hidden":!0,fill:"none",stroke:"currentColor",strokeWidth:"1.2"};switch(e){case"folder":return(0,h.jsxs)("svg",{...n,...t,children:[(0,h.jsx)("path",{d:"M3 6.5A1.5 1.5 0 0 1 4.5 5h3.6l1.5 1.8h6A1.5 1.5 0 0 1 17 8.3v6.2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5z"}),(0,h.jsx)("path",{d:"M10 9.5v4M8 11.5h4"})]});case"record-skill":return(0,h.jsxs)("svg",{...n,...t,children:[(0,h.jsx)("rect",{x:"3",y:"6",width:"10",height:"8",rx:"1.5"}),(0,h.jsx)("path",{d:"M13 9l4-2v6l-4-2z"})]});case"design-system":return(0,h.jsxs)("svg",{...n,children:[(0,h.jsx)("path",{d:"M10 3a7 7 0 1 0 0 14c1.1 0 1.5-.7 1.5-1.4 0-.9-.8-1.2-.8-2.1 0-.8.6-1.4 1.5-1.4H14a3 3 0 0 0 3-3C17 5.8 13.9 3 10 3Z"}),(0,h.jsx)("circle",{cx:"6.5",cy:"9",r:".9",fill:"currentColor"}),(0,h.jsx)("circle",{cx:"9",cy:"6",r:".9",fill:"currentColor"}),(0,h.jsx)("circle",{cx:"12.6",cy:"6.4",r:".9",fill:"currentColor"})]});case"plugins":return(0,h.jsx)("svg",{...n,...t,children:(0,h.jsx)("path",{d:"M8 3.5v3M12 3.5v3M6 6.5h8v3a4 4 0 0 1-8 0zM10 13.5v3"})});case"memory":return(0,h.jsx)("svg",{...n,...t,children:(0,h.jsx)("path",{d:"M4.5 10a5.5 5.5 0 1 1 1.6 3.9M4.5 10l-1.5-1.5M4.5 10l1.6-1.4M10 7v3.2l2 1.3"})});case"browse-connectors":return(0,h.jsx)("svg",{...n,...t,children:(0,h.jsx)("path",{d:"M4 4.5v11M7 4.5v11M10.5 5l3 10.5M15 4.5l2 11"})});case"manage-connectors":return(0,h.jsxs)("svg",{...n,...t,children:[(0,h.jsx)("rect",{x:"3",y:"6",width:"14",height:"9",rx:"1.5"}),(0,h.jsx)("path",{d:"M7 6V4.5h6V6M3 10h14"})]})}}function de({kind:e}){switch(e){case"docs":return(0,h.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,h.jsx)("path",{d:"M4 2.5h5.5l3 3v8H4z"}),(0,h.jsx)("path",{d:"M9.5 2.5v3h3M6 8.5h4.5M6 11h4.5"})]});case"slides":return(0,h.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,h.jsx)("rect",{x:"2.5",y:"3.5",width:"11",height:"7.5",rx:"1.2"}),(0,h.jsx)("path",{d:"M8 11v2M5.5 13.2h5"})]});case"design":return(0,h.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,h.jsx)("rect",{x:"2.5",y:"2.5",width:"5",height:"5",rx:"1"}),(0,h.jsx)("rect",{x:"8.5",y:"8.5",width:"5",height:"5",rx:"1"}),(0,h.jsx)("circle",{cx:"11",cy:"5",r:"2.3"}),(0,h.jsx)("rect",{x:"2.5",y:"8.5",width:"5",height:"5",rx:"1"})]});case"artifact":return(0,h.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[(0,h.jsx)("circle",{cx:"5",cy:"5.5",r:"2.3"}),(0,h.jsx)("circle",{cx:"11",cy:"5.5",r:"2.3"}),(0,h.jsx)("path",{d:"M2.5 13.5c0-2 1.2-3.2 2.5-3.2s2.5 1.2 2.5 3.2M8.5 13.5c0-2 1.2-3.2 2.5-3.2s2.5 1.2 2.5 3.2"})]})}}function fe({out:e}){return(0,h.jsx)("span",{className:p("tico",e.plain&&"plain"),"aria-hidden":"true",children:(0,h.jsx)(de,{kind:e.kind})})}function pe(){return(0,h.jsxs)("svg",{className:"ico",viewBox:"0 0 20 20","aria-hidden":"true",fill:"currentColor",children:[(0,h.jsx)("path",{d:"M13.04 7.304a.5.5 0 0 1 .92.392C13.665 8.386 13.089 9 12.3 9c-.487 0-.892-.234-1.2-.574-.309.34-.713.574-1.2.574-.486 0-.892-.234-1.2-.574-.31.34-.714.574-1.2.574a.5.5 0 0 1 0-1c.212 0 .52-.18.74-.696a.5.5 0 0 1 .92 0c.221.516.528.696.74.696.213 0 .52-.18.74-.696l.035-.067a.5.5 0 0 1 .885.067c.22.516.527.696.74.696s.519-.18.74-.696"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 3a2 2 0 0 1 2 2v8h1.5a.5.5 0 0 1 .5.5V15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4H4a1 1 0 0 0-.745 1.667.5.5 0 0 1-.745.666A2 2 0 0 1 4 3zM6 15a1 1 0 1 0 2 0v-1.5a.5.5 0 0 1 .5-.5H15V5a1 1 0 0 0-1-1H6zm3 0c0 .365-.1.706-.27 1H16a1 1 0 0 0 1-1v-1H9z"})]})}function me(){return(0,h.jsxs)("svg",{className:"ico",viewBox:"0 0 20 20","aria-hidden":"true",fill:"currentColor",children:[(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 6a1 1 0 0 1 1 .999V11h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 10h4v-4H9zm-5 0h4v-4H4zm0-5h4V7H4z"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.103 3.005A1 1 0 0 1 17 4v4l-.005.103a1 1 0 0 1-.893.892L16 9h-4a1 1 0 0 1-.995-.897L11 8V4a1 1 0 0 1 1-1h4zM12 8h4V4h-4z"})]})}function w({conn:e,className:t="ico-line"}){let n={className:t,viewBox:"0 0 20 20","aria-hidden":!0,fill:"none",stroke:"currentColor"};switch(e){case"drive":return(0,h.jsx)("svg",{...n,strokeWidth:"1.5",strokeLinejoin:"round",children:(0,h.jsx)("path",{d:"M3 6.5A1.5 1.5 0 0 1 4.5 5h3.6l1.5 1.8h6A1.5 1.5 0 0 1 17 8.3v6.2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5z"})});case"email":return(0,h.jsxs)("svg",{...n,strokeWidth:"1.5",strokeLinejoin:"round",children:[(0,h.jsx)("rect",{x:"2.5",y:"4.5",width:"15",height:"11",rx:"1.5"}),(0,h.jsx)("path",{d:"M2.5 5.5L10 11.5L17.5 5.5"})]});case"calendar":return(0,h.jsxs)("svg",{...n,strokeWidth:"1.5",children:[(0,h.jsx)("rect",{x:"3",y:"4.5",width:"14",height:"12.5",rx:"2"}),(0,h.jsx)("path",{d:"M3 8.2h14M6.7 2.5v3.5M13.3 2.5v3.5"})]});case"messaging":return(0,h.jsxs)("svg",{...n,strokeWidth:"1.5",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M3 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H8.5L5 17.5v-3a2 2 0 0 1-2-2z"}),(0,h.jsx)("path",{d:"M6.5 8h7M6.5 11h4.5"})]});case"crm":return(0,h.jsxs)("svg",{...n,strokeWidth:"1.5",strokeLinejoin:"round",children:[(0,h.jsx)("rect",{x:"2.5",y:"4",width:"15",height:"12",rx:"2"}),(0,h.jsx)("circle",{cx:"7",cy:"9",r:"1.8"}),(0,h.jsx)("path",{d:"M4.5 13.5c.5-1.5 1.4-2.1 2.5-2.1s2 .6 2.5 2.1M12 8h3.5M12 11h3.5"})]});case"all":return(0,h.jsxs)("svg",{...n,strokeWidth:"1.5",strokeLinecap:"round",children:[(0,h.jsx)("path",{d:"M3 5.5h14M3 10h14M3 14.5h14"}),(0,h.jsx)("circle",{cx:"6",cy:"5.5",r:"1.4",fill:"currentColor",stroke:"none"}),(0,h.jsx)("circle",{cx:"13",cy:"10",r:"1.4",fill:"currentColor",stroke:"none"}),(0,h.jsx)("circle",{cx:"8.5",cy:"14.5",r:"1.4",fill:"currentColor",stroke:"none"})]})}}var he={fills:[],conn:null,connOn:[],fileAttached:!1,output:null,model:"sonnet",effort:null,thinking:!0,openedModel:!1},ge=()=>typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function T(){let e=(0,m.useRef)(null),t=(0,m.useRef)(null),n=(0,m.useRef)(null),s=(0,m.useRef)(null),u=(0,m.useRef)(null),_=(0,m.useRef)(null),v=(0,m.useRef)(null),[x,de]=(0,m.useState)("general"),[T,_e]=(0,m.useState)(he),[E,ve]=(0,m.useState)(!1),[D,ye]=(0,m.useState)(null),[O,k]=(0,m.useState)(null),[be,xe]=(0,m.useState)(!0),[Se,Ce]=(0,m.useState)(!1),[we,Te]=(0,m.useState)(!0),[Ee,De]=(0,m.useState)("halden"),A=(0,m.useRef)(void 0),j=i(),M=re[x],Oe=j.pattern(`role.${x}.template`),ke=j(`role.${x}.fill`),Ae=(0,m.useMemo)(()=>ue(Oe,ke),[Oe,ke]),N=(0,m.useCallback)(e=>_e(t=>({...t,...e})),[]),je=M.steps.map(e=>e.done(T)),P=je.indexOf(!1),F=P===-1,Me=a();(0,m.useEffect)(()=>{F&&Me()},[F,Me]);let Ne=r({href:g.models,target:"_blank"}).href??g.models,Pe=e=>e===g.models?Ne:e,I=F?null:M.steps[P]??null,L=I?.cue??null,Fe=L?.[0]==="addBtn",Ie=L?.[0]==="modelBtn",Le=L?.[0]==="outputBtn",R=L?.[1]??null,z=T.conn===null,Re=I?.id==="conn"&&z,ze=I?.id==="f1"&&!(T.fills[0]??"").trim(),B=oe.find(e=>e.kind===T.output)??null,V=(0,m.useCallback)(()=>{ye(null),k(null),ve(!1)},[]),[H,Be]=(0,m.useState)(!1),[U,W]=(0,m.useState)("idle"),G=(0,m.useRef)(0);(0,m.useEffect)(()=>{if(F===H)return;let e=t.current;if(!e||ge()){Be(F);return}G.current=e.offsetHeight,e.style.height=`${G.current}px`,W("fade");let n=!1,r=window.setTimeout(()=>{n=!0,Be(F),W("size")},F?150:0);return()=>{n||(window.clearTimeout(r),e.style.height="",W("idle"))}},[F,H]),(0,m.useLayoutEffect)(()=>{if(U!=="size")return;let e=t.current;if(!e)return;e.style.height="auto";let n=e.offsetHeight;e.style.height=`${G.current}px`;let r=window.requestAnimationFrame(()=>{e.style.height=`${n}px`}),i=window.setTimeout(()=>{e.style.height="",W("idle")},420);return()=>{window.cancelAnimationFrame(r),window.clearTimeout(i)}},[U]),(0,m.useEffect)(()=>{let t=t=>{let n=t.target;e.current?.contains(n)&&n?.closest(".menu.open, .role-menu.open, .picker-menu.open")||V()};return document.addEventListener("click",t),()=>document.removeEventListener("click",t)},[V]),(0,m.useEffect)(()=>()=>window.clearTimeout(A.current),[]);let Ve=e=>{e!==x&&(de(e),_e(he)),V()},K=e=>{let t=D!==e;V(),t&&(ye(e),e==="model"&&!T.openedModel&&N({openedModel:!0}))},He=e=>{N({output:e.kind}),V()},Ue=()=>N({output:null}),We=e=>{N(e!=="all"&&!T.connOn.includes(e)?{conn:e,connOn:[...T.connOn,e]}:{conn:e}),V()},Ge=e=>{let t=!T.connOn.includes(e),n=t?[...T.connOn,e]:T.connOn.filter(t=>t!==e);if(t)N(z?{connOn:n,conn:e}:{connOn:n});else{let t=T.conn===e||T.conn==="all"&&n.length===0;N(t?{connOn:n,conn:null}:{connOn:n})}},Ke=()=>{M.file&&!T.fileAttached&&N({fileAttached:!0}),V()},q=e=>{window.clearTimeout(A.current),k(e)},qe=()=>window.clearTimeout(A.current),J=()=>{window.clearTimeout(A.current),A.current=window.setTimeout(()=>k(null),160)},Y=(0,m.useCallback)(t=>{let r=e.current;if(!r)return;let i=r.contains(t.target);if(t.key==="Escape"){if(!D)return;let e=D==="add"?n.current:D==="model"?s.current:D==="output"?u.current:D==="role"?_.current:D==="picker"?v.current:null;V(),(i||t.target===document.body)&&e?.focus();return}if(!D||!i)return;let a=Array.from(r.querySelectorAll(".menu.open [role^='menuitem'], .role-menu.open [role='option'], .picker-menu.open [role='menuitem']")).filter(e=>e.getClientRects().length>0);if(!a.length)return;let o=a.indexOf(document.activeElement),c=-1;if(t.key==="ArrowDown")c=(o+1+a.length)%a.length;else if(t.key==="ArrowUp")c=o<0?a.length-1:(o-1+a.length)%a.length;else if(t.key==="Home")c=0;else if(t.key==="End")c=a.length-1;else return;t.preventDefault(),a[c]?.focus()},[D,V]);(0,m.useEffect)(()=>(document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)),[Y]);let X=e=>t=>{t.stopPropagation(),e()},Z=j(`model.${(b.find(e=>e.key===T.model)??b[0]).key}.short`),Je=T.conn?j(`conn.${T.conn}.prompt`):j("conn.empty.prompt"),Ye=ae.find(e=>e.key===T.effort)??null,Q=Ye?j(`effort.${Ye.key}.name`):null,$=B?j(`output.${B.kind}.label`):null;return(0,h.jsx)(o,{className:"gs-cb",css:te,children:(0,h.jsxs)("div",{className:"wrap",ref:e,children:[(0,h.jsxs)("div",{className:"role-row",children:[(0,h.jsx)("span",{children:j("rolePicker.lead")}),(0,h.jsxs)("button",{ref:_,type:"button",className:"role-trigger","aria-haspopup":"listbox","aria-expanded":D==="role",onClick:X(()=>K("role")),children:[(0,h.jsx)(S,{name:x,className:"role-ico"}),(0,h.jsx)("span",{children:j(`role.${x}.label`)}),(0,h.jsx)(f,{})]}),(0,h.jsx)("div",{className:p("role-menu",D==="role"&&"open"),role:"listbox","aria-label":j("rolePicker.aria"),children:ie.map(e=>(0,h.jsxs)("button",{type:"button",className:"role-option",role:"option","aria-selected":e===x,tabIndex:D==="role"?0:-1,onClick:X(()=>Ve(e)),children:[(0,h.jsx)(l,{className:"check"}),(0,h.jsx)(S,{name:e,className:"role-ico"}),j(`role.${e}.option`)]},e))})]}),(0,h.jsx)("h3",{className:"task-title settle",children:j(`role.${x}.title`)},x),(0,h.jsxs)("div",{ref:t,className:p("guide",H&&"all-done",U!=="idle"&&"morph",U==="fade"&&F&&"fading"),"aria-live":"polite",children:[(0,h.jsx)("div",{className:"guide-label",children:j("guide.label")}),(0,h.jsx)("div",{className:"guide-steps",children:M.steps.map((e,t)=>{let n=je[t]?"done":t===P?"active":"pending";return(0,h.jsxs)("div",{className:"step-row","data-state":n,children:[(0,h.jsx)("div",{className:"box","aria-hidden":"true",children:(0,h.jsx)(l,{})}),(0,h.jsxs)("div",{className:"step-body",children:[(0,h.jsx)("div",{className:"step-label",children:j(`role.${x}.step${t+1}.label`)}),(0,h.jsxs)("div",{className:"step-hint",children:[j(`role.${x}.step${t+1}.hint`),e.learn?(0,h.jsxs)(h.Fragment,{children:[" ",(0,h.jsx)("a",{href:Pe(e.learn),target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:j("learnMore")})]}):null]})]})]},e.id)})}),(0,h.jsxs)("div",{className:"guide-ready",children:[(0,h.jsx)("div",{className:"box","aria-hidden":"true",children:(0,h.jsx)(l,{})}),(0,h.jsxs)("div",{className:"text",children:[j("guide.ready.title"),(0,h.jsx)("div",{className:"sub",children:j("guide.ready.sub")})]})]})]}),(0,h.jsxs)("div",{className:"composer",children:[(0,h.jsx)("div",{className:p("files-row",T.fileAttached&&"has-file"),children:T.fileAttached&&M.file?(0,h.jsxs)("div",{className:"file-card",children:[(0,h.jsx)("div",{className:"file-name",children:M.file.name}),(0,h.jsx)("div",{className:"file-tag",children:M.file.ext}),(0,h.jsx)("button",{type:"button",className:"file-x","aria-label":j("composer.removeFile"),onClick:X(()=>N({fileAttached:!1})),children:(0,h.jsx)("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:(0,h.jsx)("path",{d:"M5 5l10 10M15 5L5 15",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",fill:"none"})})})]}):null}),(0,h.jsx)("div",{className:"prompt-area","aria-label":j("composer.promptAria"),children:Ae.map((e,t)=>e.kind==="static"?(0,h.jsx)("span",{className:"static",children:e.text},t):e.kind==="fill"?(0,h.jsx)("span",{className:p("fill",ze&&e.idx===0&&"cue"),contentEditable:!0,suppressContentEditableWarning:!0,spellCheck:!1,role:"textbox",tabIndex:0,"aria-label":e.placeholder,"data-placeholder":e.placeholder,onClick:e=>e.stopPropagation(),onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),e.currentTarget.blur()),e.stopPropagation()},onPaste:t=>{t.preventDefault();let n=t.clipboardData.getData("text/plain"),r=window.getSelection();r&&r.rangeCount&&(r.deleteFromDocument(),r.getRangeAt(0).insertNode(document.createTextNode(n)),r.collapseToEnd());let i=T.fills.slice();i[e.idx]=(t.currentTarget.textContent??"").trim(),N({fills:i})},onInput:t=>{let n=T.fills.slice();n[e.idx]=(t.currentTarget.textContent??"").trim(),N({fills:n})}},`${x}-fill-${e.idx}`):(0,h.jsxs)("span",{className:"conn-chip-wrap",children:[(0,h.jsxs)("button",{ref:v,type:"button",className:p("conn-chip",Re&&"cue"),"data-empty":z?"true":"false","aria-haspopup":"menu","aria-expanded":D==="picker","aria-label":z?j("conn.aria.empty"):j("conn.aria.picked",{tool:Je}),onClick:X(()=>K("picker")),children:[T.conn?(0,h.jsx)(w,{conn:T.conn,className:"conn-ico"}):null,(0,h.jsx)("span",{children:Je}),(0,h.jsx)(f,{className:"caret-ico"})]}),(0,h.jsxs)("div",{className:p("picker-menu",D==="picker"&&"open"),role:"menu",children:[ne.map(e=>(0,h.jsxs)("button",{type:"button",className:"picker-row",role:"menuitem",tabIndex:D==="picker"?0:-1,onClick:X(()=>We(e)),children:[(0,h.jsx)(w,{conn:e,className:""}),(0,h.jsx)("span",{children:j(`conn.${e}.label`)})]},e)),(0,h.jsx)("div",{className:"picker-sep"}),(0,h.jsxs)("button",{type:"button",className:"picker-row",role:"menuitem",tabIndex:D==="picker"?0:-1,onClick:X(()=>We("all")),children:[(0,h.jsx)(w,{conn:"all",className:""}),(0,h.jsx)("span",{children:j("conn.all.label")})]})]})]},t))}),(0,h.jsxs)("div",{className:"toolbar",children:[(0,h.jsx)("button",{ref:n,type:"button",className:p("btn btn-add",Fe&&"cue"),"aria-expanded":D==="add","aria-haspopup":"menu","aria-label":j("composer.addAria"),onClick:X(()=>K("add")),children:(0,h.jsx)(ee,{className:"ico"})}),(0,h.jsx)("div",{className:"grow"}),(0,h.jsx)("button",{type:"button",className:"btn btn-send","aria-label":j("composer.sendAria"),tabIndex:-1,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,h.jsx)(c,{})})]}),(0,h.jsx)("div",{className:p("menu menu-output",D==="output"&&"open"),role:"menu","aria-label":j("output.label"),tabIndex:-1,children:oe.map(e=>(0,h.jsxs)(m.Fragment,{children:[e.plain?(0,h.jsx)("div",{className:"menu-sep"}):null,(0,h.jsxs)("button",{type:"button",className:p("menu-row out-row",R===e.feature&&D==="output"&&"cue"),style:le(e.color),role:"menuitem",tabIndex:D==="output"?0:-1,onClick:X(()=>He(e)),children:[(0,h.jsx)(fe,{out:e}),(0,h.jsx)("span",{className:"label",children:j(`output.${e.kind}.label`)}),j.has(`output.${e.kind}.suffix`)?(0,h.jsx)("span",{className:"suffix",children:j(`output.${e.kind}.suffix`)}):(0,h.jsx)("span",{})]})]},e.kind))}),(0,h.jsxs)("div",{className:p("menu menu-add",D==="add"&&"open"),role:"menu",tabIndex:-1,onMouseLeave:J,children:[(0,h.jsxs)("button",{type:"button",className:p("menu-row",R==="attach"&&D==="add"&&"cue"),role:"menuitem",tabIndex:D==="add"?0:-1,onClick:X(Ke),children:[(0,h.jsx)(S,{name:"attach"}),(0,h.jsx)("span",{className:"label",children:j("add.attach")}),(0,h.jsx)("span",{className:"suffix",children:(0,h.jsx)("span",{className:"kbd",children:"⌘U"})})]}),(0,h.jsxs)("button",{type:"button",className:"menu-row",role:"menuitem",tabIndex:D==="add"?0:-1,"aria-disabled":"true",children:[(0,h.jsx)(C,{name:"folder"}),(0,h.jsx)("span",{className:"label",children:j("add.folder")}),(0,h.jsx)("span",{})]}),(0,h.jsxs)("button",{type:"button",className:"menu-row",role:"menuitem",tabIndex:D==="add"?0:-1,"aria-disabled":"true",children:[(0,h.jsx)(C,{name:"record-skill"}),(0,h.jsx)("span",{className:"label",children:j("add.recordSkill")}),(0,h.jsx)("span",{})]}),(0,h.jsx)("div",{className:"menu-sep"}),(0,h.jsxs)("button",{type:"button",className:"menu-row",role:"menuitem",tabIndex:D==="add"?0:-1,"aria-disabled":"true",children:[(0,h.jsx)(pe,{}),(0,h.jsx)("span",{className:"label",children:j("add.skills")}),(0,h.jsx)(d,{className:"chev"})]}),(0,h.jsxs)("button",{type:"button",className:p("menu-row",R==="connectors"&&D==="add"&&"cue"),role:"menuitem","aria-haspopup":"menu","aria-expanded":O==="conn","data-hl":O==="conn"?"true":void 0,tabIndex:D==="add"?0:-1,onMouseEnter:()=>q("conn"),onFocus:()=>q("conn"),onClick:X(()=>k("conn")),children:[(0,h.jsx)(me,{}),(0,h.jsx)("span",{className:"label",children:j("add.connectors")}),(0,h.jsx)(d,{className:"chev"})]}),(0,h.jsxs)("button",{type:"button",className:"menu-row",role:"menuitem","aria-haspopup":"menu","aria-expanded":O==="ds","data-hl":O==="ds"?"true":void 0,tabIndex:D==="add"?0:-1,onMouseEnter:()=>q("ds"),onFocus:()=>q("ds"),onClick:X(()=>k("ds")),children:[(0,h.jsx)(C,{name:"design-system"}),(0,h.jsx)("span",{className:"label",children:j("add.designSystem")}),(0,h.jsx)(d,{className:"chev"})]}),(0,h.jsxs)("button",{type:"button",className:"menu-row",role:"menuitem",tabIndex:D==="add"?0:-1,"aria-disabled":"true",children:[(0,h.jsx)(C,{name:"plugins"}),(0,h.jsx)("span",{className:"label",children:j("add.plugins")}),(0,h.jsx)(d,{className:"chev"})]}),(0,h.jsx)("div",{className:"menu-sep"}),(0,h.jsxs)("button",{type:"button",className:"menu-row",role:"menuitemcheckbox","aria-checked":Se,"data-checked":Se?"true":"false",tabIndex:D==="add"?0:-1,onClick:X(()=>Ce(e=>!e)),children:[(0,h.jsx)(S,{name:"research"}),(0,h.jsx)("span",{className:"label",children:j("add.research")}),(0,h.jsx)("span",{className:"check","aria-hidden":"true",children:(0,h.jsx)(l,{className:""})})]}),(0,h.jsxs)("button",{type:"button",className:"menu-row",role:"menuitemcheckbox","aria-checked":be,"data-checked":be?"true":"false",tabIndex:D==="add"?0:-1,onClick:X(()=>xe(e=>!e)),children:[(0,h.jsx)(S,{name:"web"}),(0,h.jsx)("span",{className:"label",children:j("add.webSearch")}),(0,h.jsx)("span",{className:"check","aria-hidden":"true",children:(0,h.jsx)(l,{className:""})})]}),(0,h.jsxs)("button",{type:"button",className:"menu-row",role:"menuitemcheckbox","aria-checked":we,"data-checked":we?"true":"false",tabIndex:D==="add"?0:-1,onClick:X(()=>Te(e=>!e)),children:[(0,h.jsx)(C,{name:"memory"}),(0,h.jsx)("span",{className:"label",children:j("add.memory")}),(0,h.jsx)("span",{className:"check","aria-hidden":"true",children:(0,h.jsx)(l,{className:""})})]})]}),(0,h.jsxs)("div",{className:p("menu menu-ds",D==="add"&&O==="ds"&&"open"),role:"menu","aria-label":j("ds.aria"),tabIndex:-1,onMouseEnter:qe,onMouseLeave:J,children:[ce.map(e=>(0,h.jsxs)("button",{type:"button",className:"menu-row ds-row",role:"menuitemradio","aria-checked":Ee===e.key,tabIndex:O==="ds"?0:-1,onClick:X(()=>De(e.key)),children:[(0,h.jsx)("span",{className:"check","aria-hidden":"true",children:(0,h.jsx)(l,{className:""})}),(0,h.jsx)("span",{className:"label",children:e.name??j(`ds.${e.key}.label`)}),e.isDefault?(0,h.jsx)("span",{className:"suffix",children:j("ds.defaultBadge")}):(0,h.jsx)("span",{})]},e.key)),(0,h.jsx)("div",{className:"menu-sep"}),(0,h.jsxs)("button",{type:"button",className:"menu-row",role:"menuitem",tabIndex:O==="ds"?0:-1,"aria-disabled":"true",children:[(0,h.jsx)("span",{}),(0,h.jsx)("span",{className:"label",children:j("ds.manage")}),(0,h.jsx)("span",{})]}),(0,h.jsxs)("button",{type:"button",className:"menu-row",role:"menuitem",tabIndex:O==="ds"?0:-1,"aria-disabled":"true",children:[(0,h.jsx)("span",{}),(0,h.jsx)("span",{className:"label",children:j("ds.new")}),(0,h.jsx)(d,{className:"chev"})]})]}),(0,h.jsxs)("div",{className:p("menu menu-conn",D==="add"&&O==="conn"&&"open"),role:"menu","aria-label":j("connMenu.aria"),tabIndex:-1,onMouseEnter:qe,onMouseLeave:J,children:[(0,h.jsxs)("button",{type:"button",className:"menu-row",role:"menuitem",tabIndex:O==="conn"?0:-1,"aria-disabled":"true",children:[(0,h.jsx)(C,{name:"browse-connectors"}),(0,h.jsx)("span",{className:"label",children:j("connMenu.browse")}),(0,h.jsx)("span",{})]}),(0,h.jsxs)("button",{type:"button",className:"menu-row",role:"menuitem",tabIndex:O==="conn"?0:-1,"aria-disabled":"true",children:[(0,h.jsx)(C,{name:"manage-connectors"}),(0,h.jsx)("span",{className:"label",children:j("connMenu.manage")}),(0,h.jsx)("span",{})]}),(0,h.jsx)("div",{className:"menu-sep"}),ne.map(e=>{let t=T.connOn.includes(e);return(0,h.jsxs)("button",{type:"button",className:"menu-row conn-toggle",role:"menuitemcheckbox","aria-checked":t,"data-on":t?"true":"false",tabIndex:O==="conn"?0:-1,onClick:X(()=>Ge(e)),children:[(0,h.jsx)(w,{conn:e}),(0,h.jsx)("span",{className:"label",children:j(`conn.${e}.label`)}),(0,h.jsx)("span",{className:"toggle","aria-hidden":"true"})]},e)})]}),(0,h.jsxs)("div",{className:p("menu menu-model anchor-right",D==="model"&&"open"),role:"menu",children:[b.map(e=>(0,h.jsxs)("button",{type:"button",className:p("menu-row model-row",R===e.feature&&D==="model"&&"cue"),role:"menuitemradio","aria-checked":T.model===e.key,"data-selected":T.model===e.key?"true":"false",tabIndex:D==="model"?0:-1,onClick:X(()=>N({model:e.key})),children:[(0,h.jsx)("span",{className:"check-mark","aria-hidden":"true",children:"✓"}),(0,h.jsxs)("span",{className:"meta",children:[(0,h.jsx)("span",{className:"name",children:j(`model.${e.key}.name`)}),(0,h.jsx)("span",{className:"desc",children:j(`model.${e.key}.desc`)})]})]},e.key)),(0,h.jsx)("div",{className:"menu-sep"}),(0,h.jsxs)("button",{type:"button",className:p("menu-row effort-row",R==="effort"&&D==="model"&&!E&&"cue"),role:"menuitem","aria-haspopup":"menu","aria-expanded":E,tabIndex:D==="model"?0:-1,onClick:X(()=>ve(e=>!e)),children:[(0,h.jsx)("span",{}),(0,h.jsx)("span",{className:"label",children:j("effort.label")}),(0,h.jsx)(d,{className:p("chev",E&&"open")})]}),(0,h.jsxs)("div",{className:p("effort-body",E&&"open"),role:"menu","aria-label":j("effort.label"),children:[(0,h.jsx)("p",{className:"menu-note",children:j("effort.note")}),ae.map(e=>(0,h.jsxs)("button",{type:"button",className:p("menu-row model-row",R==="effort"&&E&&(e.key==="high"||e.key==="max")&&!y(T)&&"cue"),role:"menuitemradio","aria-checked":T.effort===e.key,"data-selected":T.effort===e.key?"true":"false",tabIndex:E?0:-1,onClick:X(()=>N({effort:e.key})),children:[(0,h.jsx)("span",{className:"check-mark","aria-hidden":"true",children:"✓"}),(0,h.jsxs)("span",{className:"meta",children:[(0,h.jsxs)("span",{className:"name",children:[j(`effort.${e.key}.name`),e.isDefault?(0,h.jsx)("span",{className:"badge",children:j("effort.defaultBadge")}):null]}),(0,h.jsx)("span",{className:"desc",children:j(`effort.${e.key}.desc`)})]})]},e.key)),(0,h.jsxs)("button",{type:"button",className:"menu-row model-row think-row",role:"menuitemcheckbox","aria-label":j("thinking.aria"),"aria-checked":T.thinking,"data-on":T.thinking?"true":"false",tabIndex:E?0:-1,onClick:X(()=>N({thinking:!T.thinking})),children:[(0,h.jsx)("span",{}),(0,h.jsxs)("span",{className:"meta",children:[(0,h.jsx)("span",{className:"name",children:j("thinking.name")}),(0,h.jsx)("span",{className:"desc",children:j("thinking.desc")})]}),(0,h.jsx)("span",{className:"toggle","aria-hidden":"true"})]})]})]})]}),(0,h.jsxs)("div",{className:"chin",children:[(0,h.jsx)("button",{type:"button",className:"btn btn-chin",children:j("chin.project")}),(0,h.jsxs)("button",{ref:u,type:"button",className:p("btn btn-chin btn-output",B&&"chip",Le&&"cue"),style:le(B?B.color:se),"aria-expanded":D==="output","aria-haspopup":"menu","aria-label":$?j("output.aria.picked",{kind:$}):j("output.aria.empty"),onClick:e=>{if(e.stopPropagation(),e.target.closest(".out-x")){Ue();return}K("output")},onKeyDown:e=>{B&&(e.key==="Backspace"||e.key==="Delete")&&(e.preventDefault(),Ue())},children:[B?(0,h.jsx)(fe,{out:B}):null,(0,h.jsx)("span",{children:$??j("output.label")}),(0,h.jsx)("span",{className:"out-x","aria-hidden":"true",children:"×"})]}),(0,h.jsx)("div",{className:"grow"}),(0,h.jsxs)("button",{ref:s,type:"button",className:p("btn btn-model",Ie&&"cue"),"aria-expanded":D==="model","aria-haspopup":"menu","aria-label":Q?j("model.aria.withEffort",{model:Z,effort:Q}):j("model.aria",{model:Z}),onClick:X(()=>K("model")),children:[(0,h.jsx)("span",{children:Z}),Q?(0,h.jsx)("span",{className:"muted",children:j("model.effortSuffix",{effort:Q})}):null,(0,h.jsx)(f,{className:"caret"})]})]})]})})}export{T as default};