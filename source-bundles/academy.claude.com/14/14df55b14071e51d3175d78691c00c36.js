import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{Fm as t,Mm as n}from"../../../../content-de-meta-g6r0dgr3.js";import{u as r}from"../../../../WidgetCopy-gy7uae5v.js";import{r as i,t as a}from"../../../../ClaudeDesignTutorialKit-lkduhd6z.js";import{i as o,s}from"../../../../_deck-oie3syo7.js";var c=e(t(),1),l=n(),u=`
  .cd .wc-head {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding: 0 14px;
    border-bottom: 1px solid var(--w-hair);
    background: var(--w-panel);
    font-size: 13px;
    font-weight: 500;
    color: var(--w-fg);
  }
  .cd .wc-body {
    background: var(--w-warm);
    padding: 24px clamp(14px, 4cqw, 40px);
  }
  .cd .wc-slide { position: relative; box-shadow: var(--w-sh-lg); }
  .cd .wc-slide .sl { border-radius: 0; }
  .cd .wc-notes {
    margin-top: 14px;
    background: var(--w-panel);
    border: 1px solid var(--w-hair);
    padding: 10px 12px;
    font-size: 14px;
    line-height: 1.45;
    color: var(--w-fg);
    position: relative;
  }
  .cd .wc-notes b { display: block; font-size: 12px; font-weight: 500; color: var(--w-fg-3); margin-bottom: 2px; }

  /* File view: what is an editable object, what is a picture. */
  .cd .wc.is-file .sl-title,
  .cd .wc.is-file .sl-notes,
  .cd .wc.is-file .sl-foot,
  .cd .wc.is-file .wc-notes {
    outline: 1.5px dashed var(--w-blue);
    outline-offset: 3px;
    border-radius: 2px;
  }
  .cd .wc.is-file .sl-chart {
    outline: 2px solid var(--w-fg);
    outline-offset: 3px;
  }
  .cd .wc.is-file .sl-title::after,
  .cd .wc.is-file .sl-chart::after,
  .cd .wc.is-file .wc-notes::after {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(-50%);
    padding: 2px 8px;
    border-radius: 999px;
    font: 500 12px/16px var(--cd-sans);
    white-space: nowrap;
  }
  .cd .wc.is-file .sl-title { position: relative; }
  .cd .wc.is-file .sl-title::after,
  .cd .wc.is-file .wc-notes::after {
    content: var(--wc-tag-text);
    background: var(--w-blue);
    color: #fff;
  }
  .cd .wc.is-file .sl-chart::after {
    content: var(--wc-tag-picture);
    background: var(--w-fg);
    color: #fff;
    right: auto;
    left: 0;
  }
  .cd .wc.is-file .wc-notes::after { content: var(--wc-tag-notes); }

  /* Basic fonts: every face swapped for one that ships everywhere. */
  .cd .wc.is-basic .sl,
  .cd .wc.is-basic .wc-notes {
    --cd-serif: Georgia, "Times New Roman", serif;
    --cd-sans: Arial, Helvetica, sans-serif;
    font-family: Arial, Helvetica, sans-serif;
  }
  .cd .wc-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 20px;
    margin: 12px 0 0;
    padding: 0;
    list-style: none;
    font-size: 15px;
    line-height: 1.4;
    color: var(--cd-ink-2);
    min-height: 24px;
  }
  .cd .wc-legend li { display: flex; align-items: center; gap: 8px; }
  .cd .wc-key {
    display: inline-block;
    width: 22px;
    height: 14px;
    border-radius: 2px;
    flex: none;
  }
  .cd .wc-key.is-obj { outline: 1.5px dashed #2a78d6; outline-offset: -1px; }
  .cd .wc-key.is-pic { outline: 2px solid var(--cd-ink); outline-offset: -1px; }
  .cd .wc-switches { display: flex; flex-wrap: wrap; gap: 8px 12px; }
`,d="Lead with the total: $48.2M against a $46.3M plan. Then the driver, which is mid-market renewals that closed early. Say plainly that some of September is October's revenue.";function f(){let e=r(),[t,n]=(0,c.useState)("slides"),[f,p]=(0,c.useState)("current"),m=t==="file",h={"--wc-tag-text":JSON.stringify(e("tag.text")),"--wc-tag-picture":JSON.stringify(e("tag.picture")),"--wc-tag-notes":JSON.stringify(e("tag.notes"))},g=e("caption.slides");return m&&(g=e(f==="basic"?"caption.basic":"caption.current")),(0,l.jsxs)(a,{css:u,cssId:"academy-cd-carries",children:[(0,l.jsx)(o,{}),(0,l.jsx)("div",{className:"cd-top",children:(0,l.jsxs)("div",{className:"wc-switches",children:[(0,l.jsxs)("span",{className:"cd-seg",role:"group","aria-label":e("where.label"),children:[(0,l.jsx)("button",{type:"button","aria-pressed":!m,onClick:()=>n("slides"),children:e("where.slides")}),(0,l.jsx)("button",{type:"button","aria-pressed":m,onClick:()=>n("file"),children:e("where.file")})]}),(0,l.jsxs)("span",{className:"cd-seg",role:"group","aria-label":e("fonts.label"),style:{visibility:m?"visible":"hidden"},children:[(0,l.jsx)("button",{type:"button","aria-pressed":f==="current",onClick:()=>p("current"),disabled:!m,children:e("fonts.current")}),(0,l.jsx)("button",{type:"button","aria-pressed":f==="basic",onClick:()=>p("basic"),disabled:!m,children:e("fonts.basic")})]})]})}),(0,l.jsxs)("div",{className:i("cd-win wc",m&&"is-file",m&&f==="basic"&&"is-basic"),style:h,children:[(0,l.jsx)("div",{className:"wc-head",children:e(m?"head.file":"head.slides")}),(0,l.jsxs)("div",{className:"wc-body",children:[(0,l.jsx)("div",{className:"wc-slide",children:(0,l.jsx)(s,{id:"revenue",page:2})}),(0,l.jsxs)("div",{className:"wc-notes",children:[(0,l.jsx)("b",{children:e("notes.label")}),d]})]})]}),(0,l.jsx)("ul",{className:"wc-legend","aria-hidden":!m,children:m?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"wc-key is-obj"}),e("legend.object")]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"wc-key is-pic"}),e("legend.picture")]})]}):null}),(0,l.jsx)("p",{className:"cd-cap","aria-live":"polite",children:g})]})}export{f as default};