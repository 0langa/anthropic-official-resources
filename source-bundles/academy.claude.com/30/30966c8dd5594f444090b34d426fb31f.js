import{r as e}from"../../../../Icon-fw289bvz.js";import{Nm as t}from"../../../../content-de-meta-ekk7gs5w.js";import{u as n}from"../../../../WidgetCopy-h9nkp96o.js";import{qt as r}from"../../../../index-hsoga37k.js";import{t as i}from"../../../../ClaudeDesignTutorialKit-ms53cw2f.js";import"../../../../_shared-d3hbewge.js";var a=t(),o=`
  .cd .db { position: relative; }

  /* Lanes: stacked by default, side by side in a wide column. */
  .cd .db-lanes {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;
  }
  .cd .db-lane {
    padding: 16px;
    border: 1px solid var(--cd-hair);
    border-radius: 14px;
    background: var(--cd-card);
  }
  .cd .db-lane-h {
    margin: 0 0 14px;
    font: 600 16px/1.35 var(--cd-sans);
    color: var(--cd-ink);
  }
  .cd .db-or {
    margin: 0;
    text-align: center;
    font-size: 15px;
    line-height: 1.4;
    color: var(--cd-ink-2);
  }

  /* A thing: bordered card. An action: the same row without the box. */
  .cd .db-node,
  .cd .db-act {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    border: 1px solid transparent;
    border-radius: 10px;
    font-size: 15px;
    line-height: 1.4;
  }
  .cd .db-node {
    padding: 11px 14px;
    border-color: var(--cd-hair-strong);
    background: var(--cd-page);
    color: var(--cd-ink-2);
  }
  .cd .db-node b { font-weight: 600; color: var(--cd-ink); }
  .cd .db-act { padding: 3px 14px; color: var(--cd-ink); }
  .cd .db-ico {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 20px;
    height: 21px;
    color: var(--cd-ink-2);
  }

  /* Connectors: a 1.5px line with a small arrowhead made of two borders.
     The rail runs through the center of the 20px icon column
     (1px border + 14px padding + 10px). */
  .cd .db-down {
    position: relative;
    width: 1.5px;
    height: 22px;
    margin: 4px 0 4px 24.25px;
    background: var(--cd-ink-3);
  }
  .cd .db-down::after,
  .cd .db-stem::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 1.5px;
    width: 8px;
    height: 8px;
    border-right: 1.5px solid var(--cd-ink-3);
    border-bottom: 1.5px solid var(--cd-ink-3);
    transform: translateX(-50%) rotate(45deg);
  }
  .cd .db-join { position: relative; height: 40px; }
  .cd .db-bracket { display: none; }
  .cd .db-stem {
    position: absolute;
    left: 50%;
    top: 5px;
    bottom: 5px;
    width: 1.5px;
    margin-left: -0.75px;
    background: var(--cd-ink-3);
  }

  /* What Claude Code has in hand. */
  .cd .db-has {
    padding: 16px;
    border: 1px solid var(--cd-hair-strong);
    border-radius: 14px;
    background: var(--cd-page);
  }
  .cd .db-has-h {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 12px;
    font: 600 16px/1.35 var(--cd-sans);
    color: var(--cd-ink);
  }
  .cd .db-has-list {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;
  }
  .cd .db-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 10px;
    background: var(--cd-card);
    font-size: 15px;
    line-height: 1.4;
    color: var(--cd-ink);
  }

  .cd .db-result {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    padding: 12px 16px;
    border: 1.5px solid var(--cd-ink);
    border-radius: 10px;
    background: var(--cd-page);
    font: 600 15px/1.4 var(--cd-sans);
    color: var(--cd-ink);
  }
  .cd .db-result .db-ico { color: var(--cd-ink); }

  @container cd (min-width: 600px) {
    .cd .db-lanes {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 16px;
    }
    .cd .db-or { display: none; }
    .cd .db-has-list {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    /* The bracket drops from the center of each lane (the lanes share a
       16px gap, so each center is 25% in, less a quarter of the gap). */
    .cd .db-join.is-merge { height: 46px; }
    .cd .db-bracket {
      display: block;
      position: absolute;
      top: 5px;
      left: calc(25% - 4px);
      right: calc(25% - 4px);
      height: 16px;
      border: 1.5px solid var(--cd-ink-3);
      border-top: 0;
      border-radius: 0 0 10px 10px;
    }
    .cd .db-join.is-merge .db-stem { top: 19.5px; }
  }
`,s=[{id:"session",steps:[{key:"step1",icon:"Chat"}]},{id:"elsewhere",steps:[{key:"step1",icon:"Share"},{key:"step2",icon:"Link"}]}],c=[{key:"artboards",icon:"Frame"},{key:"components",icon:"Shapes"},{key:"repo",icon:"Folder"}];function l({name:t}){return(0,a.jsx)("span",{className:"db-ico",children:(0,a.jsx)(e,{name:t,size:"md"})})}function u(){let e=n();return(0,a.jsx)(i,{css:o,cssId:"academy-cd-design-to-build",children:(0,a.jsxs)("div",{className:"db",children:[(0,a.jsx)("div",{className:"sr-only",children:e.seq("alt").map(e=>(0,a.jsx)("p",{children:e},e))}),(0,a.jsxs)("div",{"aria-hidden":"true",children:[(0,a.jsx)("div",{className:"db-lanes",children:s.map((e,t)=>(0,a.jsx)(d,{lane:e,showOr:t>0},e.id))}),(0,a.jsxs)("div",{className:"db-join is-merge",children:[(0,a.jsx)("span",{className:"db-bracket"}),(0,a.jsx)("span",{className:"db-stem"})]}),(0,a.jsxs)("div",{className:"db-has",children:[(0,a.jsxs)("p",{className:"db-has-h",children:[(0,a.jsx)(r,{size:18}),e("has.title")]}),(0,a.jsx)("div",{className:"db-has-list",children:c.map(t=>(0,a.jsxs)("div",{className:"db-item",children:[(0,a.jsx)(l,{name:t.icon}),(0,a.jsx)("span",{children:e(`has.${t.key}`)})]},t.key))})]}),(0,a.jsx)("div",{className:"db-join",children:(0,a.jsx)("span",{className:"db-stem"})}),(0,a.jsxs)("div",{className:"db-result",children:[(0,a.jsx)(l,{name:"GitBranch"}),(0,a.jsx)("span",{children:e("result")})]})]})]})})}function d({lane:e,showOr:t}){let r=n();return(0,a.jsxs)(a.Fragment,{children:[t?(0,a.jsx)("p",{className:"db-or",children:r("or")}):null,(0,a.jsxs)("div",{className:"db-lane",children:[(0,a.jsx)("p",{className:"db-lane-h",children:r(`lane.${e.id}.title`)}),(0,a.jsxs)("div",{className:"db-node",children:[(0,a.jsx)(l,{name:"Artifacts"}),(0,a.jsx)("span",{children:r.rich(`lane.${e.id}.node`,{thing:e=>(0,a.jsx)("b",{children:e})})})]}),e.steps.map(t=>(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"db-down"}),(0,a.jsxs)("div",{className:"db-act",children:[(0,a.jsx)(l,{name:t.icon}),(0,a.jsx)("span",{children:r(`lane.${e.id}.${t.key}`)})]})]},t.key))]})]})}export{u as default};