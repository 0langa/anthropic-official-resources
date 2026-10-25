import{Nm as e}from"../../../../content-de-meta-hica81ue.js";import{u as t}from"../../../../WidgetCopy-bc9oepjc.js";import{$t as n}from"../../../../index-k462235o.js";import{t as r}from"../../../../ClaudeDesignTutorialKit-hbg0mroe.js";import"../../../../_shared-l9w2gkjk.js";var i=e(),a=["pm","designer","team","claude","engineer"],o=[{n:1,turns:[{holder:"pm"}]},{n:2,turns:[{holder:"claude"},{holder:"designer",withClaude:!0}]},{n:3,turns:[{holder:"pm"},{holder:"team",withClaude:!0}]},{n:4,turns:[{holder:"engineer"},{holder:"claude"}]}],s=40,c=s*a.length,l=o.flatMap(e=>e.turns.map((t,n)=>{let r=e.turns.length===1?.5:.28+n*.44;return{...t,id:`${e.n}.${n}`,x:`${(e.n-1+r)/o.length*100}%`}})),u=l.slice(1).map((e,t)=>({from:l[t],to:e}));function d(e){return a.indexOf(e)*s+s/2}function f(e,t){return{left:e.x,top:d(t)}}var p=`
  .cd .ww {
    --ww-ground: var(--cd-card);
    position: relative;
    padding: 16px;
    border: 1px solid var(--cd-hair);
    border-radius: 14px;
    background: var(--ww-ground);
  }
  .cd .ww-top {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 6px 24px;
    margin: 0 0 14px;
  }
  .cd .ww-title {
    margin: 0;
    font: 500 20px/1.25 var(--cd-serif);
    color: var(--cd-ink);
  }
  .cd .ww-legend {
    display: none;
    align-items: center;
    gap: 18px;
    margin: 0;
    font-size: 15px;
    line-height: 1.4;
    color: var(--cd-ink);
  }
  .cd .ww-legend > span { display: inline-flex; align-items: center; gap: 8px; }
  .cd .ww-key-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--cd-ink);
  }
  .cd .ww-key-tie {
    width: 0;
    height: 16px;
    border-left: 1.5px dotted var(--cd-ink-2);
  }

  /* The strip: role names, then the plot; step labels under the plot. */
  .cd .ww-grid { display: none; }
  .cd .ww-roles { display: grid; grid-auto-rows: ${s}px; }
  .cd .ww-role {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 15px;
    line-height: 1.2;
    font-weight: 500;
    color: var(--cd-ink);
    white-space: nowrap;
  }
  .cd .ww-plot { position: relative; height: ${c}px; }
  .cd .ww-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .cd .ww-lane { stroke: var(--cd-hair-strong); stroke-width: 1; }
  .cd .ww-col { stroke: var(--cd-hair); stroke-width: 1; }
  .cd .ww-path {
    stroke: var(--cd-ink-2);
    stroke-width: 1.5;
    stroke-linecap: round;
  }
  .cd .ww-tie {
    stroke: var(--cd-ink-2);
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-dasharray: 0.1 5;
  }
  .cd .ww-mark {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: var(--ww-ground);
  }
  .cd .ww-mark.is-dot {
    width: 12px;
    height: 12px;
    background: var(--cd-ink);
    box-shadow: 0 0 0 3px var(--ww-ground);
  }
  .cd .ww-mark.is-claude { width: 28px; height: 28px; }
  .cd .ww-mark.is-assist { width: 20px; height: 20px; }

  .cd .ww-heads {
    display: grid;
    grid-template-columns: repeat(${o.length}, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .cd .ww-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 0 10px;
    text-align: center;
  }
  .cd .ww-n {
    font-size: 15px;
    line-height: 20px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: var(--cd-ink);
  }
  .cd .ww-l {
    font-size: 15px;
    line-height: 1.35;
    color: var(--cd-ink);
    text-wrap: balance;
  }

  /* The list: what a narrow column shows, and the text alternative. */
  .cd .ww-list { margin: 0; padding: 0; list-style: none; }
  .cd .ww-item {
    display: grid;
    grid-template-columns: 20px minmax(0, 1fr);
    column-gap: 8px;
    align-items: baseline;
    padding: 9px 0;
    border-top: 1px solid var(--cd-hair);
  }
  .cd .ww-item:first-child { border-top: 0; padding-top: 0; }
  .cd .ww-item:last-child { padding-bottom: 0; }
  .cd .ww-item .ww-n { line-height: 24px; }
  .cd .ww-line {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 15px;
    line-height: 24px;
    color: var(--cd-ink);
  }
  .cd .ww-who { display: flex; flex-wrap: wrap; gap: 6px; }
  .cd .ww-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    height: 24px;
    padding: 0 10px;
    border: 1px solid var(--cd-hair-strong);
    border-radius: 999px;
    background: var(--cd-page);
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    color: var(--cd-ink);
    white-space: nowrap;
  }

  @container cd (min-width: 700px) {
    .cd .ww { padding: 20px 24px 20px 20px; }
    .cd .ww-legend { display: flex; }
    .cd .ww-grid {
      display: grid;
      grid-template-columns: max-content minmax(0, 1fr);
      column-gap: 20px;
      row-gap: 8px;
    }
    .cd .ww-heads { grid-column: 2; }
    .cd .ww-listwrap {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
    }
  }
`;function m(){let e=t();return(0,i.jsxs)(r,{css:p,cssId:"academy-cd-who-does-what",children:[(0,i.jsxs)("div",{className:"ww",children:[(0,i.jsxs)("div",{className:"ww-top",children:[(0,i.jsx)("p",{className:"ww-title",children:e("title")}),(0,i.jsxs)("p",{className:"ww-legend","aria-hidden":"true",children:[(0,i.jsxs)("span",{children:[(0,i.jsx)("span",{className:"ww-key-dot"}),e("legend.holds")]}),(0,i.jsxs)("span",{children:[(0,i.jsx)("span",{className:"ww-key-tie"}),e("legend.tie")]})]})]}),(0,i.jsxs)("div",{className:"ww-grid","aria-hidden":"true",children:[(0,i.jsx)("div",{className:"ww-roles",children:a.map(t=>(0,i.jsxs)("div",{className:"ww-role",children:[t==="claude"?(0,i.jsx)(n,{size:15}):null,e(`role.${t}`)]},t))}),(0,i.jsxs)("div",{className:"ww-plot",children:[(0,i.jsxs)("svg",{className:"ww-svg",focusable:"false",children:[a.map(e=>(0,i.jsx)("line",{className:"ww-lane",x1:"0",x2:"100%",y1:d(e),y2:d(e)},e)),o.slice(1).map(e=>(0,i.jsx)("line",{className:"ww-col",x1:`${(e.n-1)/o.length*100}%`,x2:`${(e.n-1)/o.length*100}%`,y1:"0",y2:"100%"},e.n)),l.map(e=>e.withClaude?(0,i.jsx)("line",{className:"ww-tie",x1:e.x,x2:e.x,y1:d(e.holder),y2:d("claude")},e.id):null),u.map(({from:e,to:t})=>(0,i.jsx)("line",{className:"ww-path",x1:e.x,y1:d(e.holder),x2:t.x,y2:d(t.holder)},t.id))]}),l.map(e=>e.withClaude?(0,i.jsx)("span",{className:"ww-mark is-assist",style:f(e,"claude"),children:(0,i.jsx)(n,{size:13})},e.id):null),l.map(e=>e.holder==="claude"?(0,i.jsx)("span",{className:"ww-mark is-claude",style:f(e,"claude"),children:(0,i.jsx)(n,{size:20})},e.id):(0,i.jsx)("span",{className:"ww-mark is-dot",style:f(e,e.holder)},e.id))]}),(0,i.jsx)("ol",{className:"ww-heads",children:o.map(t=>(0,i.jsxs)("li",{className:"ww-head",children:[(0,i.jsx)("span",{className:"ww-n",children:t.n}),(0,i.jsx)("span",{className:"ww-l",children:e(`step.${t.n}`)})]},t.n))})]}),(0,i.jsxs)("div",{className:"ww-listwrap",children:[(0,i.jsx)("p",{className:"sr-only",children:e("alt.intro")}),(0,i.jsx)("ol",{className:"ww-list",children:o.map(t=>(0,i.jsxs)("li",{className:"ww-item",children:[(0,i.jsx)("span",{className:"ww-n",children:t.n}),(0,i.jsxs)("span",{className:"ww-line",children:[(0,i.jsx)("span",{children:e(`step.${t.n}`)}),(0,i.jsx)("span",{className:"ww-who",children:t.turns.map(t=>(0,i.jsxs)("span",{className:"ww-tag",children:[t.holder==="claude"?(0,i.jsx)(n,{size:13}):null,e(`role.${t.holder}`),t.withClaude?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)(n,{size:13}),e("role.withClaude")]}):null]},t.holder))})]})]},t.n))})]})]}),(0,i.jsx)("p",{className:"cd-cap",children:e("caption")})]})}export{m as default};