import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{r as t}from"../../../../Icon-onl2ppoi.js";import{Im as n,Nm as r}from"../../../../content-de-meta-hica81ue.js";import{u as i}from"../../../../WidgetCopy-bc9oepjc.js";import{r as a,t as o}from"../../../../ClaudeDesignTutorialKit-hbg0mroe.js";import{a as s,i as c,s as l}from"../../../../_deck-i54m5psu.js";import{a as u,i as d,o as f}from"../../../../_slides-cvxtx87w.js";var p=e(n(),1),m=r(),h=`
  ${d}

  /* The slide wrapper carries the overlay, so overlay sizes can be written
     in the slide's own container units. It sits above the thumbnail rail. */
  .cd .ob-wrap {
    position: relative;
    z-index: 2;
    container-type: inline-size;
  }

  /* Selected title: 2px Plum outline outside the box, four 12px grips. */
  .cd .ob .se-slide .sl-title {
    position: relative;
    outline: 2px solid var(--w-plum);
    outline-offset: 0;
  }
  .cd .ob .se-slide .sl-title::after {
    content: "";
    position: absolute;
    inset: -7px;
    pointer-events: none;
    background:
      linear-gradient(#fff, #fff) 2px 2px / 8px 8px no-repeat,
      linear-gradient(#fff, #fff) calc(100% - 2px) 2px / 8px 8px no-repeat,
      linear-gradient(#fff, #fff) 2px calc(100% - 2px) / 8px 8px no-repeat,
      linear-gradient(#fff, #fff) calc(100% - 2px) calc(100% - 2px) / 8px 8px no-repeat,
      linear-gradient(var(--w-plum), var(--w-plum)) 0 0 / 12px 12px no-repeat,
      linear-gradient(var(--w-plum), var(--w-plum)) 100% 0 / 12px 12px no-repeat,
      linear-gradient(var(--w-plum), var(--w-plum)) 0 100% / 12px 12px no-repeat,
      linear-gradient(var(--w-plum), var(--w-plum)) 100% 100% / 12px 12px no-repeat;
  }

  /* Color popover. It hangs under the strip's color dot and stays left of
     the slide's headline figure, so the figure's restyle is not covered. */
  .cd .ob-pop {
    position: absolute;
    top: 19.6cqw;
    left: calc(6cqw + 80px);
    z-index: 5;
    width: 256px;
    padding: 16px;
    background: var(--w-panel);
    border-radius: 10px;
    box-shadow: var(--w-sh-pop);
    font-family: var(--cd-sans);
    color: var(--w-fg);
  }
  .cd .ob-pop-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .cd .ob-tabs { display: inline-flex; }
  .cd .ob-tab {
    height: 24px;
    padding: 0 8px;
    border-radius: 6px;
    font-size: 13px;
    line-height: 24px;
    font-weight: 500;
    color: var(--w-fg-3);
  }
  .cd .ob-tab.is-on {
    color: var(--w-fg);
    background: var(--w-wash);
    box-shadow: inset 1px 0 0 var(--w-panel), inset -1px 0 0 var(--w-panel);
  }
  .cd .ob-pop-head .cd-gb { color: var(--w-fg-2); }
  /* In Claude the list scrolls past 288px. Here it is inert, so the rest is
     cut off where the scroll would start. */
  .cd .ob-rows {
    max-height: 288px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
  }
  .cd .ob-row,
  .cd .ob-cap {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 32px;
    padding: 0 8px;
    border-radius: 6px;
    font-size: 12px;
    line-height: 16px;
  }
  .cd .ob-cap.is-title { font-weight: 500; color: var(--w-fg); }
  .cd .ob-cap.is-sub { color: var(--w-fg-3); }
  .cd .ob-sw {
    flex: none;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid var(--w-hair-2);
  }
  .cd .ob-row.is-current .ob-sw {
    box-shadow: 0 0 0 1.5px var(--w-panel), 0 0 0 3px var(--w-fg);
  }
  .cd .ob-check { margin-left: auto; color: var(--w-blue); }

  /* ------------------------------------------------ the two looks */
  .cd .ob.is-ds { --se-ink: #f7f5ef; }

  /* Northwind: deep spruce ground, paper type, marigold accent. */
  .cd .ob.is-ds .sl {
    --cd-serif: var(--cd-sans);
    background: #0f2a23;
    color: #f7f5ef;
  }
  .cd .ob.is-ds .sl-title {
    font-weight: 800;
    letter-spacing: -0.025em;
    color: #f7f5ef;
  }
  .cd .ob.is-ds .sl-rule { background: #f2b23a; }
  .cd .ob.is-ds .sl-big { font-weight: 800; letter-spacing: -0.03em; color: #f7f5ef; }
  .cd .ob.is-ds .sl-big small { font-weight: 400; color: #b9c6bf; }
  .cd .ob.is-ds .sl-notes,
  .cd .ob.is-ds .sl-col,
  .cd .ob.is-ds .sl-cover p { color: #b9c6bf; }
  .cd .ob.is-ds .sl-foot { color: #8fa39b; }
  .cd .ob.is-ds .sl-mark,
  .cd .ob.is-ds .sl-col h4,
  .cd .ob.is-ds .sl-col b,
  .cd .ob.is-ds .sl-table td { color: #f7f5ef; }
  .cd .ob.is-ds .sl-col { border-top-color: #f2b23a; }
  .cd .ob.is-ds .sl-table th { color: #b9c6bf; border-bottom-color: #f7f5ef; }
  .cd .ob.is-ds .sl-table td { border-bottom-color: rgba(247, 245, 239, 0.16); }
  .cd .ob.is-ds .sl-cover {
    background:
      radial-gradient(120% 90% at 100% 0%, rgba(242, 178, 58, 0.28), transparent 60%),
      #0f2a23;
  }
  .cd .ob.is-ds .sl svg [fill="#c6613f"] { fill: #f2b23a; }
  .cd .ob.is-ds .sl svg [stroke="#c6613f"] { stroke: #f2b23a; }
  .cd .ob.is-ds .sl svg [fill="#d9d5c9"] { fill: #2f5e52; }
  .cd .ob.is-ds .sl svg [fill="#1b1a17"] { fill: #f7f5ef; }
  .cd .ob.is-ds .sl svg [fill="#5e5d59"] { fill: #b9c6bf; }
  .cd .ob.is-ds .sl svg [fill="#3b6ea8"] { fill: #7fd0b6; }
  .cd .ob.is-ds .sl svg [stroke="#3b6ea8"] { stroke: #7fd0b6; }
  .cd .ob.is-ds .sl svg [stroke="#8a8880"] { stroke: rgba(247, 245, 239, 0.5); }
  .cd .ob.is-ds .sl svg [stroke="rgba(31,30,29,0.08)"] { stroke: rgba(247, 245, 239, 0.12); }

  @container cd (max-width: 700px) {
    .cd .ob .se-float { display: none; }
    .cd .ob .se-slide { box-shadow: none; }
    .cd .ob .se-slide .sl { box-shadow: var(--w-sh-lg); }
    .cd .ob-pop {
      position: static;
      margin: 20px auto 0;
      min-height: 352px;
      max-width: 100%;
    }
  }
`,g=[{name:"#1B1A17",hex:"#1b1a17",current:!0},{name:"#3D3D3A",hex:"#3d3d3a"},{name:"#5E5D59",hex:"#5e5d59"},{name:"#FFFDF8",hex:"#fffdf8"},{name:"#C6613F",hex:"#c6613f"},{name:"#D9D5C9",hex:"#d9d5c9"}],_="Northwind",v=[{name:"paper-50",hex:"#f7f5ef",current:!0},{name:"spruce-950",hex:"#0f2a23"},{name:"marigold-400",hex:"#f2b23a"},{name:"mist-300",hex:"#b9c6bf"}],y=[{group:"Neutrals",colors:[{name:"spruce-950",hex:"#0f2a23"},{name:"spruce-600",hex:"#1f5c4d"},{name:"mist-300",hex:"#b9c6bf"},{name:"paper-50",hex:"#f7f5ef",current:!0}]},{group:"Accents",colors:[{name:"marigold-400",hex:"#f2b23a"},{name:"jade-300",hex:"#7fd0b6"}]}],b="Headline";function x({swatch:e}){return(0,m.jsxs)("li",{className:a("ob-row",e.current&&"is-current"),children:[(0,m.jsx)("span",{className:"ob-sw",style:{background:e.hex}}),e.name,e.current?(0,m.jsx)(t,{name:"Check",size:"sm",bold:!0,className:"ob-check"}):null]})}function S(){let e=i(),[n,r]=(0,p.useState)("own"),d=n==="ds",S=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{styleName:d?b:void 0,colorOpen:!0}),(0,m.jsxs)("div",{className:"ob-pop",role:"group","aria-label":e("ui.textColor"),children:[(0,m.jsxs)("div",{className:"ob-pop-head","aria-hidden":"true",children:[(0,m.jsxs)("span",{className:"ob-tabs",children:[(0,m.jsx)("span",{className:"ob-tab is-on",children:e("ui.tabTheme")}),(0,m.jsx)("span",{className:"ob-tab",children:e("ui.tabCustom")})]}),(0,m.jsx)("span",{className:"cd-gb",children:(0,m.jsx)(t,{name:"X",size:"sm"})})]}),d?(0,m.jsxs)("ul",{className:"ob-rows",children:[(0,m.jsx)("li",{className:"ob-cap is-sub",children:e("ui.inThisSlide")}),v.map(e=>(0,m.jsx)(x,{swatch:e},e.name)),(0,m.jsx)("li",{className:"ob-cap is-title",children:_}),y.map(e=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)("li",{className:"ob-cap is-sub",children:e.group}),e.colors.map(e=>(0,m.jsx)(x,{swatch:e},e.name))]},e.group))]}):(0,m.jsx)("ul",{className:"ob-rows",children:g.map(e=>(0,m.jsx)(x,{swatch:e},e.name))})]})]});return(0,m.jsxs)(o,{css:h,cssId:"academy-cd-onbrand",children:[(0,m.jsx)(c,{}),(0,m.jsx)("div",{className:"cd-top",children:(0,m.jsxs)("span",{className:"cd-seg",role:"group","aria-label":e("look.label"),children:[(0,m.jsx)("button",{type:"button","aria-pressed":!d,onClick:()=>r("own"),children:e("look.own")}),(0,m.jsx)("button",{type:"button","aria-pressed":d,onClick:()=>r("ds"),children:e("look.ds")})]})}),(0,m.jsx)("div",{className:a("cd-win ob",d&&"is-ds"),children:(0,m.jsx)(f,{order:s,current:1,renderSlide:(e,t,n)=>{let r=(0,m.jsx)(l,{id:e,page:t,thumb:n});return n?r:(0,m.jsxs)("div",{className:"ob-wrap",children:[r,S]})}})})]})}export{S as default};