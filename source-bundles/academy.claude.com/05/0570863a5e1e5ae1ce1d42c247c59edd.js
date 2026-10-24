import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{Im as t,Nm as n}from"../../../../content-de-meta-hica81ue.js";import{n as r}from"../../../../usePrefersReducedMotion-dbk1v86c.js";import{t as i}from"../../../../AppWindow-lhkzw0vv.js";import{o as a}from"../../../../ResourceWidget-hoexlr8x.js";import{r as o,u as s}from"../../../../WidgetCopy-bc9oepjc.js";import{an as c,nn as l,on as u}from"../../../../index-k462235o.js";import{i as d,n as f,r as p}from"../../../../ArtifactsTutorialKit-wanh8o4e.js";import{a as m,d as h,i as g,l as _,n as v,o as y,r as b,t as x}from"../../../../_window-mjlpdoxi.js";var S=e(t(),1),C=n(),w=["save","tools","claude","share"],T={save:[400,1100,2e3],tools:[900,1600,2500],claude:[400,1100,2e3,2600,3500],share:[200,1200,1800,2900]},E=8,D=260,O={R:"#6f9a78",I:"#c98a55",C:"#8b7fc7",T:"#4f8fb8",M:"#cf6f7c"},k=4,A="T",j=[{day:1,who:"R",done:!0,w:82},{day:1,who:"I",later:!0,w:94},{day:2,who:"T",done:!0,w:70},{day:2,who:"M",w:60},{day:3,who:"C",done:!0,w:88},{day:3,who:"R",w:74},{day:4,who:"I",w:96},{day:4,who:"C",w:58},{day:5,who:"T",w:68}],M=[{key:"I",hue:"#a3651f",w:74},{key:"R",hue:"#62744c",w:58}],N="#5b7596",P=`
  ${h}

  .tks-shell { --tks-ease: cubic-bezier(0.165, 0.84, 0.44, 1); --tks-pop: cubic-bezier(0.3, 1.5, 0.5, 1); --tks-ring: var(--saa-blue); position: relative; }
  :root[data-mode="dark"] .saa .tks-shell { --tks-ring: #5598e7; }
  @media (prefers-color-scheme: dark) { :root:not([data-mode="light"]) .saa .tks-shell { --tks-ring: #5598e7; } }

  /* something that opens by sliding; its one child is what slides, with room at the sides so the slide does not clip a ring */
  .tks-fold { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 260ms var(--tks-ease); }
  .tks-fold > * { min-height: 0; margin: 0 -8px; padding: 0 8px; overflow: hidden; visibility: hidden; transition: visibility 0s linear 260ms; }
  .tks-fold.is-open { grid-template-rows: 1fr; }
  .tks-fold.is-open > * { visibility: visible; transition-delay: 0s; }

  /* ---------- Claude's window (follows the reader's theme) ---------- */
  ${m}
  ${y("tks",520,"minmax(228px, 39%)")}
  /* your message rises into place as it is sent, then the reply is drawn out */
  .tks .cw-msg { opacity: 0; transform: translateY(10px); transition: opacity 220ms ease, transform 320ms var(--tks-ease); }
  .tks .cw-msg.is-in { opacity: 1; transform: none; }
  .tks .cw-bars i { transform: scaleX(0); transform-origin: 0 50%; transition: transform 420ms var(--tks-ease); }
  .tks .cw-bars i + i { transition-delay: 140ms; }
  .tks .cw-bars svg { opacity: 0; transition: opacity 240ms ease 380ms; }
  .tks .cw-bars.is-in i { transform: none; }
  .tks .cw-bars.is-in svg { opacity: 1; }
  /* the "+" menu, over the box, cut down to the two rows that matter: Connectors, and in it the connector with its switch on. In Claude the second row is in a submenu beside the first */
  .tks-menu { display: block; width: min(244px, 100%); margin: 0 0 6px; padding: 4px; border-radius: 12px; background: var(--la-pane); font-size: 15px; line-height: 20px;
    box-shadow: 0 0 0 1px var(--la-hair-10), 0 8px 24px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.06); }
  .tks-mrow { display: flex; align-items: center; gap: 8px; height: 32px; padding: 0 10px; border-radius: 8px; white-space: nowrap; }
  .tks-mrow.is-open { background: var(--la-tint); }
  .tks-mrow > svg { flex: none; }
  .tks-mname { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
  .tks-mrow .tks-mcaret { color: var(--la-ink-5); margin-right: -3px; }
  .tks-switch { flex: none; width: 30px; height: 17px; padding: 2px; border-radius: 9px; background: var(--saa-blue); display: inline-flex; justify-content: flex-end; }
  .tks-switch i { width: 13px; height: 13px; border-radius: 50%; background: #ffffff; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); }

  /* ---------- under the window: what changes, which arrives with the change, and the button that replays it ---------- */
  .tks-foot { display: flex; gap: 10px; padding: 12px 52px 12px 16px; border-top: 1px solid var(--saa-hair); }
  .tks-foot > * { opacity: 0; transition: opacity 320ms ease; }
  .tks-foot.is-in > * { opacity: 1; }
  .tks-key { flex: none; width: 8px; height: 8px; margin-top: 8px; border-radius: 50%; background: var(--tks-ring); }
  .tks-then { margin: 0; color: var(--saa-ink); font-size: 15px; line-height: 23px; text-wrap: pretty; }
  /* outside the part that starts over, so it keeps the keyboard's focus. Two classes, so it outranks the reset on buttons */
  .tks-shell .tks-again { appearance: none; position: absolute; right: 8px; bottom: 8px; width: 32px; height: 32px; padding: 0; border: 0; border-radius: 8px; background: transparent; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;
    color: var(--saa-ink-2); transition: color 160ms ease, background-color 160ms ease; }
  .tks-shell .tks-again:hover { color: var(--saa-ink); background: var(--saa-tint); }

  /* ---------- the pane: Claude's chrome (follows the reader's theme) ---------- */
  ${_}
  /* the pointer hangs past the header, so the pane does not clip and its two halves round their own corners */
  .la-pane.tks-pane { overflow: visible; container: tkp / inline-size; }
  .tks-pane .la-head { position: relative; z-index: 2; border-radius: 10px 10px 0 0; }
  .tks-share { position: relative; transition: transform 140ms ease; }
  .tks-share.is-down { transform: scale(0.95); }
  /* the menu's arrow hangs from the button, so it stays under the button's middle whatever the label's length */
  .tks-share::after { content: ""; position: absolute; left: 50%; top: calc(100% + 7px); width: 10px; height: 10px; margin-left: -5px; border-radius: 2px 0 0 0; background: var(--la-pane); transform: rotate(45deg);
    box-shadow: -1px -1px 0 0 var(--la-hair-10); opacity: 0; transition: opacity 160ms ease; pointer-events: none; }
  .tks-share.has-menu::after { opacity: 1; }
  /* where Share is the point, the conversation and the controls around the button step back */
  .tks.is-share .cw-chat, .tks.is-share .cw-box, .tks.is-share .la-ptitle, .tks.is-share .tks-cmt, .tks.is-share .la-sq { opacity: 0.45; }

  /* the pointer that presses a button: it comes up from below and stays */
  .tks-pointer { position: absolute; z-index: 1; right: 2px; bottom: -11px; fill: #ffffff; stroke: #0b0b0b; filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3)); pointer-events: none;
    opacity: 0; transform: translate(-30px, 34px); transition: opacity 200ms ease, transform 760ms var(--tks-ease); }
  .tks-pointer.is-on { opacity: 1; transform: none; }

  /* the faces hold their place until the teammates arrive, so the header never shifts */
  .tks-pile { display: inline-flex; align-items: center; margin: 0 4px 0 2px; }
  .tks-face { position: relative; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex: none;
    font-size: 11px; line-height: 1; font-weight: 500; color: #ffffff; box-shadow: 0 0 0 2px var(--la-pane); opacity: 0; transform: scale(0.4); transition: opacity 180ms ease, transform 340ms var(--tks-pop); }
  /* a later face: its initial moves clear of the face above it */
  .tks-face + .tks-face { margin-left: -6px; padding-left: 3px; transition-delay: 140ms; }
  .tks-pile.is-in .tks-face { opacity: 1; transform: none; }

  /* enough of the tracker for the change and the rows around it */
  .tks-view { --tk-ink: #23262d; --tk-ink-2: #555b66; --tk-blue: #3d6fe0; --tk-line: #f3eee5;
    position: relative; isolation: isolate; flex: 1 1 auto; height: 256px; overflow: hidden; border-radius: 0 0 10px 10px; background: #f7f3ec; color: var(--tk-ink);
    font-family: "Avenir Next", Avenir, Montserrat, Corbel, "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif; }
  /* the list fades out at the foot, so no row is cut through its words */
  .tks-view::after { content: ""; position: absolute; inset: auto 0 0; height: 20px; border-radius: inherit; background: linear-gradient(rgba(247, 243, 236, 0), #f7f3ec); }

  /* ---------- Share's menu ---------- */
  .tks-sheet { position: absolute; z-index: 1; top: 6px; right: 12px; width: min(312px, calc(100% - 24px)); padding: 14px 16px 16px; border-radius: 12px; background: var(--la-pane); color: var(--la-ink);
    font-family: var(--saa-sans); font-size: 15px; line-height: 20px; box-shadow: 0 0 0 1px var(--la-hair-10), 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
    opacity: 0; visibility: hidden; transform: translateY(-4px) scale(0.98); transform-origin: calc(100% - 63px) 0; transition: opacity 160ms ease, transform 220ms var(--tks-ease), visibility 0s linear 220ms; }
  .tks-sheet.is-open { opacity: 1; visibility: visible; transform: none; transition-delay: 0s; }
  .tks-sh-top { display: flex; align-items: center; height: 20px; font-weight: 600; }
  .tks-sh-top b { flex: 1; min-width: 0; font-weight: inherit; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .tks-sh-top svg { flex: none; color: var(--la-ink-4); }
  .tks-sh-add { margin-top: 10px; display: flex; gap: 8px; }
  .tks-sh-field { flex: 1; min-width: 0; height: 32px; padding: 0 10px; border-radius: 8px; display: flex; align-items: center; color: var(--la-ink-5); background: var(--la-glass); box-shadow: inset 0 0 0 1px var(--la-hair-10);
    white-space: nowrap; overflow: hidden; }
  .tks-sh-invite { flex: none; height: 32px; padding: 0 12px; border-radius: 8px; display: flex; align-items: center; font-weight: 500; background: var(--la-primary); color: var(--la-on-primary); opacity: 0.4; }
  .tks-sh-head { margin-top: 12px; color: var(--la-ink-5); }
  .tks-sh-row { display: flex; align-items: center; gap: 10px; height: 26px; margin-top: 8px; }
  .tks-sh-av { flex: none; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; line-height: 1; font-weight: 500; color: #ffffff; }
  .tks-sh-name { flex: 1; min-width: 0; display: flex; align-items: center; gap: 5px; white-space: nowrap; overflow: hidden; }
  .tks-sh-name i { flex: none; width: 46px; height: 6px; border-radius: 3px; background: var(--la-hair-20); }
  .tks-sh-name em { font-style: normal; color: var(--la-ink-5); }
  .tks-sh-level { flex: none; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }
  .tks-sh-level svg { color: var(--la-ink-5); }
  .tks-sh-level.is-set { opacity: 0.4; }
  /* the two people you add arrive one after the other, then wear one ring between them */
  .tks-sh-two { position: relative; margin-top: 8px; padding-bottom: 6px; }
  .tks-sh-two .tks-sh-row { opacity: 0; transform: translateY(-3px); transition: opacity 220ms ease, transform 260ms var(--tks-ease); }
  .tks-sh-two .tks-sh-row:first-child { margin-top: 0; }
  .tks-sh-two.is-lit .tks-sh-row { opacity: 1; transform: none; }
  .tks-sh-two.is-lit .tks-sh-row + .tks-sh-row { transition-delay: 110ms; }

  /* ---------- the tracker: the page Claude made (light in both themes) ---------- */
  .tks-app { position: absolute; inset: 0; padding: 16px 16px 0; font-size: 15px; line-height: 20px; }
  /* opened again the next day: the page comes up afresh, then the rings land */
  .tks-app.is-reopened { animation: tks-reopen 520ms var(--tks-ease) both; }
  .tks-app.is-reopened .tks-hot.is-lit::after { transition-delay: calc(360ms + var(--i, 0) * 90ms); }
  @keyframes tks-reopen { from { opacity: 0; transform: translateY(8px); } }
  .tks-top { display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; padding: 0 2px; }
  .tks-h1 { font-size: 20px; line-height: 24px; font-weight: 700; letter-spacing: -0.02em; white-space: nowrap; }
  .tks-prog { flex: 0 1 132px; min-width: 104px; text-align: right; }
  .tks-count { display: block; font-weight: 500; color: var(--tk-ink-2); font-variant-numeric: tabular-nums; white-space: nowrap; }
  .tks-count b { font-weight: 700; color: var(--tk-ink); }
  .tks-bar { display: block; margin-top: 4px; height: 6px; border-radius: 3px; background: #e7e0d3; overflow: hidden; }
  .tks-bar i { display: block; height: 100%; border-radius: 3px; background: var(--tk-blue); }
  .tks-card { margin-top: 12px; background: #ffffff; border-radius: 12px; box-shadow: 0 1px 0 rgba(60, 45, 20, 0.04), 0 14px 28px -24px rgba(60, 45, 20, 0.35), 0 0 0 1px rgba(60, 45, 20, 0.06); }
  .tks-row { display: grid; grid-template-columns: 36px 18px minmax(0, 1fr) auto; align-items: center; gap: 12px; height: 38px; padding: 0 14px; border-top: 1px solid var(--tk-line); }
  .tks-row:first-child { border-top: 0; }
  .tks-day { font-weight: 600; color: var(--tk-ink-2); }
  .tks-day.is-today { color: var(--tk-blue); }
  .tks-cb { position: relative; width: 18px; height: 18px; border-radius: 6px; border: 1.5px solid #cfc7b8; background: #ffffff; display: grid; place-items: center; }
  .tks-cb.is-on { background: var(--tk-blue); border-color: var(--tk-blue); }
  .tks-task { display: block; height: 6px; max-width: 100%; border-radius: 3px; background: rgba(35, 38, 45, 0.17); }
  .tks-row.is-done .tks-task { background: rgba(35, 38, 45, 0.08); }
  .tks-who { display: inline-flex; align-items: center; white-space: nowrap; }
  .tks-av { flex: none; width: 20px; height: 20px; border-radius: 50%; display: grid; place-items: center; font-size: 11px; line-height: 1; font-weight: 600; color: #ffffff; }
  .tks-row.is-done .tks-av { opacity: 0.7; }
  /* who is out, from the calendar */
  .tks-out { position: relative; display: inline-block; max-width: 0; padding: 1px 0; border-radius: 5px; opacity: 0; transition: max-width 320ms var(--tks-ease), opacity 240ms ease 80ms, margin 320ms var(--tks-ease), padding 320ms var(--tks-ease); }
  .tks-out.is-in { max-width: 140px; margin: 0 2px 0 10px; padding: 1px 5px; opacity: 1; }
  /* the Friday update */
  .tks-write-in { padding: 13px 0 12px 2px; }
  .tks-write { position: relative; display: inline-flex; align-items: center; height: 32px; padding: 0 14px; border-radius: 9px; border: 1px solid #d9d1c3; background: #ffffff; font-weight: 500; white-space: nowrap;
    transition: transform 140ms ease; }
  .tks-write.is-down { transform: scale(0.96); }
  .tks-note-in { padding: 1px 0; }
  .tks-card.tks-note { margin: 0; padding: 10px 14px 12px; line-height: 22px; }
  /* the words still to come hold their place, so the card never changes size */
  .tks-note span { visibility: hidden; }

  /* the ring: whatever this piece added. It lands with a small bounce. */
  .tks-hot::after { content: ""; position: absolute; inset: -5px; border-radius: calc(var(--r, 6px) + 4px); border: 2px solid var(--saa-blue); opacity: 0; transform: scale(1.3); pointer-events: none; }
  .tks-hot.is-lit::after { opacity: 1; transform: none; transition: opacity 180ms ease, transform 340ms var(--tks-pop); transition-delay: calc(var(--i, 0) * 90ms); }
  .tks-sh-two.tks-hot::after { inset: -5px -7px 1px; border-color: var(--tks-ring); transform: scale(1.04); }
  .tks-sh-two.tks-hot.is-lit::after { transform: none; transition-delay: 320ms; }

  /* a narrow pane: the comment control makes room */
  @container tkp (max-width: 349px) {
    .tks-pane .tks-cmt { display: none; }
    .tks-app { padding: 14px 12px 0; }
    .tks-row { padding: 0 12px; gap: 8px; }
  }

  /* ---------- stacked: "share" is the pane alone. In "tools" the menu opens over the foot of a taller pane, clear of the rows around the tag ---------- */
  @container saa (width < 520px) {
    .tks.is-share .cw-chat { display: none; }
    .tks .cw-box { position: relative; padding-top: 0; }
    .tks-menu { position: absolute; z-index: 3; bottom: 100%; width: 244px; }
    .tks.is-tools .tks-view { height: 286px; }
  }
  /* ---------- side by side: the pane is as tall as the conversation ---------- */
  @container saa (width >= 520px) {
    .tks-view { height: auto; min-height: 256px; }
  }

  @media (pointer: coarse) { .tks-shell .tks-again { right: 4px; bottom: 4px; width: 40px; height: 40px; } }
`;function F(e,t){let n=(n,r)=>e===n&&t>=r;return{asked:t>=1,replied:t>=2,savedLit:n("save",3),moreDone:e!=="save",outShown:e==="claude"||n("tools",3),outLit:n("tools",3),writeShown:n("claude",3),atWrite:n("claude",4),noteShown:n("claude",5),atShare:n("share",1),shareDown:e==="share"&&t===2,menuOpen:n("share",2),shared:n("share",3),teamIn:n("share",4)}}function I(){return(0,C.jsx)("svg",{width:"11",height:"11",viewBox:"0 0 16 16","aria-hidden":"true",children:(0,C.jsx)("path",{d:"M3 8.5l3.2 3L13 4.5",fill:"none",stroke:"#fff",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"})})}function L({on:e}){return(0,C.jsx)(d,{name:"Cursor",size:20,className:p("tks-pointer",e&&"is-on")})}function R({piece:e,pic:t}){let n=s();return e==="share"?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("p",{className:"cw-sr",children:[n("ui.youDo"),": ",n("share.click")]}),(0,C.jsxs)("div",{className:"cw-chat","aria-hidden":"true",children:[(0,C.jsx)(v,{className:"is-in",children:(0,C.jsx)(x,{widths:[100,92,58],className:"is-in"})}),(0,C.jsx)(g,{className:"is-in"})]})]}):(0,C.jsxs)("div",{className:"cw-chat",children:[e==="tools"&&(0,C.jsx)("p",{className:"cw-sr",children:n("menu.sr")}),(0,C.jsx)(v,{label:n("ui.you"),className:p(t.asked&&"is-in"),children:n.rich(`${e}.ask`,{},()=>o)}),(0,C.jsx)(g,{className:p(t.replied&&"is-in")})]})}function z(){let e=s();return(0,C.jsxs)("span",{className:"tks-menu",children:[(0,C.jsxs)("span",{className:"tks-mrow is-open",children:[(0,C.jsx)(d,{name:"Connectors",size:16}),(0,C.jsx)("span",{className:"tks-mname",children:e("menu.connectors")}),(0,C.jsx)(d,{name:"CaretRight",size:12,className:"tks-mcaret"})]}),(0,C.jsxs)("span",{className:"tks-mrow",children:[(0,C.jsx)(d,{name:"Calendar",size:16}),(0,C.jsx)("span",{className:"tks-mname",children:e("menu.calendar")}),(0,C.jsx)("span",{className:"tks-switch",children:(0,C.jsx)("i",{})})]})]})}function B({pic:e}){let t=s();return(0,C.jsxs)("header",{className:"la-head",children:[(0,C.jsxs)("span",{className:"la-ptitle",children:[(0,C.jsx)("span",{className:"la-pname",children:t("pane.name")}),(0,C.jsx)(d,{name:"CaretDown",size:12})]}),(0,C.jsx)("span",{className:"la-spacer"}),(0,C.jsxs)("span",{className:"la-quiet",children:[(0,C.jsx)("span",{className:p("tks-pile",e.teamIn&&"is-in"),children:M.map((e,t)=>(0,C.jsx)("span",{className:"tks-face",style:{backgroundColor:e.hue,zIndex:M.length-t},children:e.key},e.key))}),(0,C.jsxs)("span",{className:"la-sm la-cmt tks-cmt",children:[(0,C.jsx)("span",{children:(0,C.jsx)(d,{name:"Chat",size:20})}),(0,C.jsx)("i",{}),(0,C.jsx)("span",{children:(0,C.jsx)(d,{name:"CaretDown",size:12})})]}),(0,C.jsxs)("span",{className:p("la-sm la-share tks-share",e.shareDown&&"is-down",e.menuOpen&&"has-menu"),children:[(0,C.jsx)(d,{name:e.shared?"Users":"Lock"}),t("ui.share"),(0,C.jsx)(L,{on:e.atShare})]}),(0,C.jsx)("span",{className:"la-sq",children:(0,C.jsx)(d,{name:"Expand"})})]})]})}function V({pic:e}){let t=s(),n=e.menuOpen&&e.shared;return(0,C.jsxs)("div",{className:p("tks-sheet",e.menuOpen&&"is-open"),children:[(0,C.jsxs)("div",{className:"tks-sh-top",children:[(0,C.jsx)("b",{children:t("pane.name")}),(0,C.jsx)(d,{name:"X"})]}),(0,C.jsxs)("div",{className:"tks-sh-add",children:[(0,C.jsx)("span",{className:"tks-sh-field",children:t("sheet.add")}),(0,C.jsx)("span",{className:"tks-sh-invite",children:t("sheet.invite")})]}),(0,C.jsx)("div",{className:"tks-sh-head",children:t("sheet.people")}),(0,C.jsxs)("div",{className:"tks-sh-row",children:[(0,C.jsx)("span",{className:"tks-sh-av",style:{backgroundColor:N}}),(0,C.jsxs)("span",{className:"tks-sh-name",children:[(0,C.jsx)("i",{}),(0,C.jsx)("em",{children:t("sheet.you")})]}),(0,C.jsxs)("span",{className:"tks-sh-level is-set",children:[t("sheet.owner"),(0,C.jsx)(d,{name:"CaretDown",size:14})]})]}),(0,C.jsx)("div",{className:p("tks-fold",n&&"is-open"),children:(0,C.jsx)("div",{children:(0,C.jsx)("div",{className:p("tks-sh-two tks-hot",n&&"is-lit"),children:M.map(e=>(0,C.jsxs)("div",{className:"tks-sh-row",children:[(0,C.jsx)("span",{className:"tks-sh-av",style:{backgroundColor:e.hue},children:e.key}),(0,C.jsx)("span",{className:"tks-sh-name",children:(0,C.jsx)("i",{style:{width:e.w}})}),(0,C.jsxs)("span",{className:"tks-sh-level",children:[t("sheet.role"),(0,C.jsx)(d,{name:"CaretDown",size:14})]})]},e.key))})})})]})}function H({pic:e}){let t=s(),n=t("demo.note"),{shown:r}=u({text:n,active:e.noteShown,msPerChar:E,startDelayMs:D}),i=t=>t.done===!0||t.later===!0&&e.moreDone,a=j.filter(i).length;return(0,C.jsxs)("div",{className:p("tks-app",e.savedLit&&"is-reopened"),children:[(0,C.jsxs)("div",{className:"tks-top",children:[(0,C.jsx)("span",{className:"tks-h1",children:t("demo.title")}),(0,C.jsxs)("span",{className:"tks-prog",children:[(0,C.jsx)("span",{className:"tks-count",children:t.rich("demo.count",{done:(0,C.jsx)("b",{children:a}),total:j.length})}),(0,C.jsx)("span",{className:"tks-bar",children:(0,C.jsx)("i",{style:{width:`${Math.round(a/j.length*100)}%`}})})]})]}),(0,C.jsx)("div",{className:p("tks-fold",e.writeShown&&"is-open"),children:(0,C.jsx)("div",{children:(0,C.jsx)("div",{className:"tks-write-in",children:(0,C.jsxs)("span",{className:p("tks-write tks-hot",e.writeShown&&"is-lit",e.noteShown&&r===""&&"is-down"),style:{"--r":"9px"},children:[t("demo.write"),(0,C.jsx)(L,{on:e.atWrite})]})})})}),(0,C.jsx)("div",{className:p("tks-fold",e.noteShown&&"is-open"),children:(0,C.jsx)("div",{children:(0,C.jsx)("div",{className:"tks-note-in",children:(0,C.jsxs)("p",{className:"tks-card tks-note",children:[r,(0,C.jsx)("span",{children:n.slice(r.length)})]})})})}),(0,C.jsx)("div",{className:"tks-card",children:j.map((n,r)=>(0,C.jsxs)("div",{className:p("tks-row",i(n)&&"is-done"),children:[(0,C.jsx)("span",{className:p("tks-day",n.day===k&&"is-today"),children:j[r-1]?.day===n.day?null:t(`demo.day${n.day}`)}),(0,C.jsx)("span",{className:p("tks-cb tks-hot",i(n)&&"is-on",n.done===!0&&e.savedLit&&"is-lit"),style:{"--i":Math.floor(r/2)},children:i(n)&&(0,C.jsx)(I,{})}),(0,C.jsx)("span",{className:"tks-task",style:{width:`${n.w}%`}}),(0,C.jsxs)("span",{className:"tks-who",children:[(0,C.jsx)("span",{className:"tks-av",style:{backgroundColor:O[n.who]},children:n.who}),n.who===A&&(0,C.jsx)("span",{className:p("tks-out tks-hot",e.outShown&&"is-in",e.outLit&&"is-lit"),style:{"--r":"5px"},children:t("demo.out")})]})]},`${n.day}-${n.who}`))})]})}function U({piece:e}){let t=s(),n=a(),{step:r}=c(T[e]),i=F(e,r),o=r>=T[e].length;return(0,S.useEffect)(()=>{o&&n()},[o,n]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{className:`cw tks is-${e}`,children:[(0,C.jsx)(R,{piece:e,pic:i}),(0,C.jsx)(b,{hint:t("box.hint"),children:e==="tools"&&(0,C.jsx)(z,{})}),(0,C.jsxs)("section",{className:"la-pane tks-pane","aria-hidden":"true",children:[(0,C.jsx)(B,{pic:i}),(0,C.jsxs)("div",{className:"tks-view",children:[(0,C.jsx)(H,{pic:i}),(0,C.jsx)(V,{pic:i})]})]})]}),(0,C.jsxs)("div",{className:p("tks-foot",o&&"is-in"),children:[(0,C.jsx)("span",{className:"tks-key","aria-hidden":"true"}),(0,C.jsxs)("p",{className:"tks-then",children:[(0,C.jsxs)("span",{className:"cw-sr",children:[t("ui.then"),": "]}),t(`${e}.result`)]})]})]})}var W=e=>w.includes(e);function G({variant:e=w[0]}){let t=s(),n=r(),[a,o]=(0,S.useState)(0),c=W(e)?e:w[0];return(0,C.jsx)(f,{css:P,label:t("aria",{title:t(`${c}.title`)}),children:(0,C.jsx)(i,{children:(0,C.jsxs)("div",{className:"tks-shell",children:[(0,C.jsx)(l,{threshold:.5,children:(0,C.jsx)(U,{piece:c})},a),!n&&(0,C.jsx)("button",{type:"button",className:"tks-again","aria-label":t("ui.again"),title:t("ui.again"),onClick:()=>o(e=>e+1),children:(0,C.jsx)(d,{name:"ArrowCounterClockwise",size:16})})]})})})}export{G as default};