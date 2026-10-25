import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{r as t}from"../../../../Icon-onl2ppoi.js";import{Im as n,Nm as r}from"../../../../content-de-meta-hica81ue.js";import{u as i}from"../../../../WidgetCopy-bc9oepjc.js";import{$t as a}from"../../../../index-k462235o.js";import{t as o}from"../../../../ClaudeDesignTutorialKit-hbg0mroe.js";import{a as s,c,i as l}from"../../../../_deck-i54m5psu.js";import{r as u,s as d}from"../../../../_slides-cvxtx87w.js";var f=e(n(),1),p=r(),m=`
  ${d}

  /* A fixed-height window: the conversation scrolls inside it, as it does
     in Claude, and the deck pane stays in view beside it. */
  .cd .bb-win {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    grid-template-areas: "conv pane";
    column-gap: 8px;
    height: 520px;
    padding: 8px 8px 8px 0;
    background: var(--w-ground);
  }
  .cd .bb-conv {
    grid-area: conv;
    min-width: 0;
    min-height: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
  }
  .cd .bb-conv:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--cd-accent);
  }
  .cd .bb-chat {
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: 20px 12px 0 30px;
  }
  .cd .bb-done {
    min-width: 0;
    padding: 22px 12px 16px 30px;
  }

  /* the request: attachment tile above the bubble, right-aligned */
  .cd .bb-turn {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }
  .cd .bb-file {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 120px;
    height: 120px;
    padding: 12px;
    border-radius: 12px;
    background: var(--w-ground);
    box-shadow: inset 0 0 0 1px var(--w-hair-2), 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  .cd .bb-file-name {
    font-size: 13px;
    line-height: 17px;
    color: var(--w-fg);
    overflow-wrap: anywhere;
  }
  .cd .bb-file-ext {
    align-self: flex-start;
    padding: 1px 6px;
    border-radius: 4px;
    background: var(--w-wash);
    font-size: 11px;
    line-height: 16px;
    font-weight: 500;
    color: var(--w-fg-2);
  }
  .cd .bb-turn .cw-user { max-width: 85%; }

  .cd .bb-conv .bb-reply { position: relative; margin: 30px 0 0; }
  .cd .bb-reply ol {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 0;
    padding-left: 28px;
    list-style: decimal;
  }
  .cd .bb-reply li { padding-left: 4px; }
  .cd .bb-conv .bb-done .bb-reply { margin-top: 0; }
  .cd .bb-spark { margin: 18px 0 0; }

  /* commentary: ink rings and number markers, not product UI */
  .cd .bb-ring {
    outline: 1.5px solid rgba(11, 11, 11, 0.45);
    outline-offset: 7px;
    border-radius: 6px;
  }
  .cd .bb-n {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 999px;
    background: var(--w-fg);
    color: #ffffff;
    font: 600 14px/1 var(--cd-sans);
    font-variant-numeric: tabular-nums;
    flex: none;
  }
  .cd .bb-n.is-at {
    position: absolute;
    top: -20px;
    left: -20px;
    box-shadow: 0 0 0 2px var(--w-ground);
  }
  .cd .bb-n.is-page {
    background: var(--cd-primary);
    color: var(--cd-on-primary);
  }

  /* the deck, open beside the conversation at slide 6. The pane runs the
     full height of the window, with the slide centered in it. */
  .cd .bb-pane { grid-area: pane; }
  .cd .bb-stage {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 28px 20px 16px;
    background: var(--w-warm);
  }
  .cd .bb-slide {
    width: 100%;
    box-shadow: var(--w-sh-lg);
  }
  .cd .bb-slide .sl { border-radius: 0; }
  .cd .bb-pill {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 8px;
    border: 1px solid var(--w-hair);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: var(--w-sh-sm);
  }
  .cd .bb-pill .cd-gb { border-radius: 999px; }
  .cd .bb-pill-n {
    padding: 0 4px;
    font-size: 11px;
    line-height: 24px;
    font-variant-numeric: tabular-nums;
    color: var(--w-fg-3);
  }
  .cd .bb-pill-div {
    width: 1px;
    height: 16px;
    margin: 0 2px;
    background: var(--w-hair);
  }

  /* slide 6, drawn larger than the deck's own scale */
  .cd .bb-sl .sl-title { font-size: 4.9cqw; margin-bottom: 2.6cqw; }
  .cd .bb-sl-body {
    flex: 1;
    min-height: 0;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 4.5cqw;
    align-items: center;
  }
  .cd .bb-sl-fig {
    font-family: var(--cd-serif);
    font-size: max(13px, 4.3cqw);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #1b1a17;
  }
  .cd .bb-ph {
    position: relative;
    display: inline-block;
    white-space: nowrap;
    outline: 1.5px solid rgba(11, 11, 11, 0.45);
    outline-offset: 5px;
    border-radius: 4px;
  }
  .cd .bb-ph .bb-n {
    position: absolute;
    top: -25px;
    left: -23px;
    box-shadow: 0 0 0 2px #fffdf8;
  }
  .cd .bb-sl-fig small {
    display: block;
    margin-top: 2.4cqw;
    font-family: var(--cd-sans);
    font-size: max(10px, 3cqw);
    line-height: 1.4;
    letter-spacing: 0;
    color: #5e5d59;
  }
  .cd .bb-sl-list {
    display: flex;
    flex-direction: column;
    gap: 2.2cqw;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: max(10px, 3.1cqw);
    line-height: 1.4;
    color: #3d3d3a;
  }
  .cd .bb-sl-list li {
    border-top: 0.4cqw solid #1b1a17;
    padding-top: 1.6cqw;
  }
  .cd .bb-sl-list b { display: block; font-weight: 600; color: #1b1a17; }
  .cd .bb-sl .sl-foot { font-size: max(9px, 2.2cqw); }
  /* On a phone the list needs the footer's room. */
  @container (max-width: 340px) {
    .cd .bb-sl .sl-foot { display: none; }
  }

  /* page chrome: what the two numbers mean */
  .cd .bb-legend {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 12px 24px;
    margin: 14px 0 0;
    padding: 0;
    list-style: none;
  }
  /* Each label is a button that scrolls the conversation to its marker. */
  .cd .bb-legend button {
    appearance: none;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    margin: 0;
    padding: 6px 8px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    font: inherit;
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
    color: var(--cd-ink);
    cursor: pointer;
  }
  .cd .bb-legend button:hover { background: var(--cd-card); }
  .cd .bb-legend button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--cd-accent);
  }

  @container cd (max-width: 700px) {
    .cd .bb-win {
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas: "conv" "pane";
      height: auto;
      padding: 0 8px 8px;
    }
    .cd .bb-conv { max-height: 360px; }
    .cd .bb-chat { padding: 20px 10px 24px 28px; }
    .cd .bb-done { padding: 26px 10px 8px 28px; }
    .cd .bb-stage { padding: 32px 14px 14px; }
    .cd .bb-legend { grid-template-columns: minmax(0, 1fr); }
  }
`,h="Q4 strategy memo.docx",g="DOCX",_=s.slice(1).map(e=>c(e)),v="[Q4 target: $__M]",y=s.length;function b(){return(0,p.jsx)("div",{className:"sl bb-sl",children:(0,p.jsxs)("div",{className:"sl-in",children:[(0,p.jsx)("div",{className:"sl-rule"}),(0,p.jsx)("h3",{className:"sl-title",children:c("commitments")}),(0,p.jsxs)("div",{className:"bb-sl-body",children:[(0,p.jsxs)("div",{className:"bb-sl-fig",children:[(0,p.jsxs)("span",{className:"bb-ph",children:[v,(0,p.jsx)("span",{className:"bb-n","aria-hidden":"true",children:"2"})]}),(0,p.jsx)("small",{children:"Q4 revenue, with mid-market at 55% of new revenue. Regional leads, by Dec 31."})]}),(0,p.jsxs)("ul",{className:"bb-sl-list",children:[(0,p.jsxs)("li",{children:[(0,p.jsx)("b",{children:"Close both enterprise renewals"}),"Sales lead, by Oct 31"]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("b",{children:"Support tickets under 200"}),"Support lead, by Nov 15"]})]})]}),(0,p.jsxs)("div",{className:"sl-foot",children:[(0,p.jsx)("span",{children:"Northwind Q3 business review"}),(0,p.jsxs)("span",{children:["Northwind, page ",y]})]})]})})}function x(){let e=i(),n=(0,f.useRef)(null),r=(0,f.useRef)(null),s=(0,f.useRef)(null),c=e=>{let t=n.current;if(t===null||e===null)return;let r=e.getBoundingClientRect().top-t.getBoundingClientRect().top;t.scrollTop=t.scrollTop+r-28};return(0,p.jsxs)(o,{css:m,cssId:"academy-cd-before",children:[(0,p.jsx)(l,{}),(0,p.jsxs)("div",{className:"cd-win bb-win",children:[(0,p.jsxs)("div",{ref:n,className:"bb-conv",role:"region","aria-label":e("aria.conversation"),tabIndex:0,children:[(0,p.jsxs)("div",{className:"bb-chat",children:[(0,p.jsxs)("div",{className:"bb-turn",children:[(0,p.jsxs)("div",{className:"bb-file",children:[(0,p.jsx)("span",{className:"bb-file-name",children:h}),(0,p.jsx)("span",{className:"bb-file-ext",children:g})]}),(0,p.jsx)("div",{className:"cw-user",children:e("chat.user")})]}),(0,p.jsxs)("div",{ref:r,className:"cw-claude bb-reply bb-ring",children:[(0,p.jsx)("span",{className:"bb-n is-at","aria-hidden":"true",children:"1"}),(0,p.jsx)("p",{children:e("claude.assume")}),(0,p.jsx)("p",{children:e("claude.idea")}),(0,p.jsx)("ol",{children:_.map(e=>(0,p.jsx)("li",{children:e},e))}),(0,p.jsx)("p",{children:e("claude.look")})]})]}),(0,p.jsxs)("div",{className:"bb-done",children:[(0,p.jsxs)("div",{ref:s,className:"cw-claude bb-reply bb-ring",children:[(0,p.jsx)("span",{className:"bb-n is-at","aria-hidden":"true",children:"2"}),(0,p.jsx)("p",{children:e("claude.done")})]}),(0,p.jsx)("div",{className:"bb-spark","aria-hidden":"true",children:(0,p.jsx)(a,{size:32})})]})]}),(0,p.jsx)(u,{className:"bb-pane",children:(0,p.jsxs)("div",{className:"bb-stage",children:[(0,p.jsx)("p",{className:"sr-only",children:e("aria.slide")}),(0,p.jsx)("div",{className:"bb-slide",children:(0,p.jsx)(b,{})}),(0,p.jsxs)("span",{className:"bb-pill","aria-hidden":"true",children:[(0,p.jsx)("span",{className:"cd-gb",children:(0,p.jsx)(t,{name:"CaretLeft",size:"xs"})}),(0,p.jsx)("span",{className:"bb-pill-n",children:e("ui.pager",{n:y,total:y})}),(0,p.jsx)("span",{className:"cd-gb",children:(0,p.jsx)(t,{name:"CaretRight",size:"xs"})}),(0,p.jsx)("span",{className:"bb-pill-div"}),(0,p.jsx)("span",{className:"cd-gb",children:(0,p.jsx)(t,{name:"BookText",size:"sm"})}),(0,p.jsx)("span",{className:"cd-gb",children:(0,p.jsx)(t,{name:"Slides",size:"sm"})})]})]})})]}),(0,p.jsxs)("ul",{className:"bb-legend",children:[(0,p.jsx)("li",{children:(0,p.jsxs)("button",{type:"button",onClick:()=>c(r.current),children:[(0,p.jsx)("span",{className:"bb-n is-page","aria-hidden":"true",children:"1"}),(0,p.jsx)("span",{children:e("callout.plan.lead")})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("button",{type:"button",onClick:()=>c(s.current),children:[(0,p.jsx)("span",{className:"bb-n is-page","aria-hidden":"true",children:"2"}),(0,p.jsx)("span",{children:e("callout.placeholder.lead")})]})})]})]})}export{x as default};