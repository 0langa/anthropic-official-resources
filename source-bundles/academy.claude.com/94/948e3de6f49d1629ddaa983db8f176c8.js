import{r as e}from"../../../../Icon-onl2ppoi.js";import{Nm as t}from"../../../../content-de-meta-hica81ue.js";import{u as n}from"../../../../WidgetCopy-bc9oepjc.js";import{t as r}from"../../../../ClaudeDesignTutorialKit-hbg0mroe.js";import{a as i,c as a,i as o,s}from"../../../../_deck-i54m5psu.js";var c=t(),l=`
  .cd .pv {
    --pv-bg: #141413;
    --pv-fg: rgba(250, 249, 245, 0.9);
    --pv-muted: #a5a29b;
    --pv-dim: rgba(250, 249, 245, 0.38);
    --pv-hair: rgba(250, 249, 245, 0.14);
    background: var(--pv-bg);
    color: var(--pv-fg);
    font-family: system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif;
    font-size: 13px;
    line-height: 1.4;
  }
  .cd .pv-titlebar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    padding: 0 16px;
    background: #232321;
    border-bottom: 1px solid var(--pv-hair);
    font-size: 13px;
    color: rgba(250, 249, 245, 0.72);
    white-space: nowrap;
  }
  .cd .pv-grid {
    display: grid;
    grid-template-columns: minmax(0, 58fr) minmax(0, 42fr);
  }

  /* left column: bar, current slide, previous and next */
  .cd .pv-left {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 0;
    padding: 12px 16px 16px;
    border-right: 1px solid var(--pv-hair);
  }
  .cd .pv-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    min-height: 40px;
  }
  .cd .pv-clock {
    margin-right: 4px;
    font-size: 28px;
    line-height: 32px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: var(--pv-fg);
  }
  .cd .pv-pill {
    display: inline-flex;
    align-items: center;
    height: 32px;
    padding: 0 12px;
    border: 1px solid rgba(250, 249, 245, 0.2);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.04);
    font-size: 13px;
    color: var(--pv-fg);
    cursor: default;
  }
  .cd .pv-count {
    margin-left: auto;
    font-size: 14px;
    font-variant-numeric: tabular-nums;
    color: var(--pv-muted);
    white-space: nowrap;
  }
  .cd .pv-navs { display: inline-flex; }
  .cd .pv-nav {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    color: var(--pv-fg);
    cursor: default;
  }
  .cd .pv-frame {
    display: block;
    border: 1px solid var(--pv-hair);
    border-radius: 6px;
    background: #000;
    overflow: hidden;
  }
  .cd .pv-frame .sl { border-radius: 0; }
  .cd .pv-pn {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 12px;
  }
  .cd .pv-pn-label {
    display: block;
    margin: 0 0 6px;
    font-size: 11px;
    line-height: 15px;
    color: var(--pv-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cd .pv-dim { color: var(--pv-dim); }

  /* right column: head, then the notes in their own scroller */
  .cd .pv-right {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .cd .pv-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: none;
    height: 56px;
    padding: 0 8px 0 16px;
    border-bottom: 1px solid var(--pv-hair);
  }
  .cd .pv-head-t {
    font-size: 13px;
    font-weight: 600;
    color: var(--pv-muted);
  }
  .cd .pv-edit {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding-right: 8px;
    font-size: 13px;
    color: var(--pv-muted);
    cursor: default;
  }
  .cd .pv-track {
    position: relative;
    width: 30px;
    height: 17px;
    border-radius: 999px;
    background: rgba(250, 249, 245, 0.22);
  }
  .cd .pv-track::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 13px;
    height: 13px;
    border-radius: 999px;
    background: #faf9f5;
  }
  .cd .pv-scroll {
    position: absolute;
    inset: 56px 0 0 0;
  }
  .cd .pv-scroll::after {
    content: "";
    position: absolute;
    inset: auto 0 0 0;
    height: 40px;
    background: linear-gradient(to bottom, rgba(20, 20, 19, 0), var(--pv-bg));
    pointer-events: none;
  }
  .cd .pv-notes {
    height: 100%;
    overflow-y: auto;
    padding: 12px 16px 40px;
    font-size: 17px;
    line-height: 1.625;
    color: var(--pv-fg);
    scrollbar-width: thin;
    scrollbar-color: rgba(250, 249, 245, 0.25) transparent;
  }
  .cd .pv-notes p { margin: 0 0 0.85em; }
  .cd .pv-notes p:last-child { margin-bottom: 0; }
  .cd .pv-notes:focus-visible {
    outline: 2px solid #3987e5;
    outline-offset: -2px;
  }
  .cd .pv-foot {
    display: none;
    padding: 12px 16px 14px;
    border-top: 1px solid var(--pv-hair);
    font-size: 13px;
    line-height: 1.4;
    color: var(--pv-muted);
  }

  @container cd (max-width: 760px) {
    .cd .pv-nav { width: 32px; height: 32px; }
  }

  /* The compact window: bar, notes, "Next:" footer. */
  @container cd (max-width: 700px) {
    .cd .pv-grid { grid-template-columns: minmax(0, 1fr); }
    .cd .pv-left { border-right: 0; padding-bottom: 4px; }
    .cd .pv-cur,
    .cd .pv-pn,
    .cd .pv-head { display: none; }
    .cd .pv-scroll { position: relative; inset: auto; }
    .cd .pv-notes { height: auto; max-height: 360px; font-size: 16px; }
    .cd .pv-foot { display: block; }
  }
`,u="4:07",d=2,f=a("customers"),p=["Start with the number. We closed the quarter at $48.2 million against a plan of $46.3 million. That is $1.9 million over plan, about four percent.","Look at the shape of the quarter on the left. Every month beat plan, and the gap grew each month: half a million in July, six hundred thousand in August, eight hundred thousand in September. September, at $16.6 million, was our strongest month of the year.","Now the part I want you to hear from me. Some of September is October’s revenue. A group of mid-market renewals that were due in October closed early, because the account team opened those conversations a month ahead. That is good execution. It also means October starts with less in hand than it usually does, so expect a quieter first month in Q4.","So the headline holds. We are ahead of plan, and mid-market is the reason. The next slide shows where those customers came from.","Before I move on, are there questions on the total?"];function m(){let t=n(),m=i.length;return(0,c.jsxs)(r,{css:l,cssId:"academy-cd-presenter",children:[(0,c.jsx)(o,{}),(0,c.jsx)("p",{className:"sr-only",children:t("alt")}),(0,c.jsxs)("div",{className:"cd-win pv",children:[(0,c.jsx)("div",{className:"pv-titlebar",children:t("ui.windowTitle",{n:d,total:m})}),(0,c.jsxs)("div",{className:"pv-grid",children:[(0,c.jsxs)("div",{className:"pv-left",children:[(0,c.jsxs)("div",{className:"pv-bar",children:[(0,c.jsx)("span",{className:"pv-clock",children:u}),(0,c.jsx)("span",{className:"pv-pill","aria-hidden":"true",children:t("ui.pause")}),(0,c.jsx)("span",{className:"pv-pill","aria-hidden":"true",children:t("ui.reset")}),(0,c.jsx)("span",{className:"pv-count",children:t("ui.slideCount",{n:d,total:m})}),(0,c.jsxs)("span",{className:"pv-navs","aria-hidden":"true",children:[(0,c.jsx)("span",{className:"pv-nav",children:(0,c.jsx)(e,{name:"CaretLeft",size:"md"})}),(0,c.jsx)("span",{className:"pv-nav",children:(0,c.jsx)(e,{name:"CaretRight",size:"md"})})]})]}),(0,c.jsx)("div",{className:"pv-frame pv-cur",children:(0,c.jsx)(s,{id:"revenue",page:d})}),(0,c.jsxs)("div",{className:"pv-pn",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:"pv-pn-label",children:t.rich("ui.previousLabel",{title:(0,c.jsx)("span",{className:"pv-dim",children:a("cover")},"title")})}),(0,c.jsx)("div",{className:"pv-frame","aria-hidden":"true",children:(0,c.jsx)(s,{id:"cover",page:1,thumb:!0})})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:"pv-pn-label",children:t.rich("ui.nextLabel",{title:(0,c.jsx)("span",{className:"pv-dim",children:f},"title")})}),(0,c.jsx)("div",{className:"pv-frame","aria-hidden":"true",children:(0,c.jsx)(s,{id:"customers",page:3,thumb:!0})})]})]})]}),(0,c.jsxs)("div",{className:"pv-right",children:[(0,c.jsxs)("div",{className:"pv-head",children:[(0,c.jsx)("span",{className:"pv-head-t",children:t("ui.notesHead")}),(0,c.jsxs)("span",{className:"pv-edit","aria-hidden":"true",children:[t("ui.edit"),(0,c.jsx)("span",{className:"pv-track"})]})]}),(0,c.jsx)("div",{className:"pv-scroll",children:(0,c.jsx)("div",{className:"pv-notes",role:"region","aria-label":t("ui.notesHead"),tabIndex:0,children:p.map(e=>(0,c.jsx)("p",{children:e},e))})}),(0,c.jsx)("div",{className:"pv-foot",children:t("ui.nextCompact",{title:f})})]})]})]})]})}export{m as default};