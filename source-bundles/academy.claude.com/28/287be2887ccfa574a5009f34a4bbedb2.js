import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{Im as t,Nm as n}from"../../../../content-de-meta-e1frxw34.js";import{o as r}from"../../../../ResourceWidget-i0dop3vw.js";import{u as i}from"../../../../WidgetCopy-h11airhs.js";import{i as a,n as ee,o,r as s}from"../../../../ArtifactsTutorialKit-icredlwg.js";import"../../../../_shared-gmf7bnak.js";import{a as c,i as l,n as te,r as u,t as d}from"../../../../_pane-b3n5lps3.js";import{a as f,i as p,n as m,r as h,t as g}from"../../../../_deck-dy55wqn2.js";var _=e(t(),1),v=n(),ne=["point","comment","whole"],y={off:0,on:1,card:2,working:3,done:4,note:5},b={idle:0,thinking:1,restyling:2,done:3},x="Y",S=[{line:"How the third quarter went",from:0,to:3},{line:"What could slow the fourth quarter, and what we will do",from:3,to:6}],C="cubic-bezier(0.16, 1, 0.3, 1)",w=".sx2-barrow { flex-wrap: wrap; } .sx2-tabs { display: flex; flex-wrap: wrap; width: 100%; } .sx2-tab { flex: 1 1 auto; justify-content: center; }",T=`
    .sx2-win { grid-template-columns: minmax(0, 1fr); }
    .sx2-pane { order: -1; margin: 8px; }
    .sx2-chat { contain: none; padding: 4px 12px 12px; }
    .sx2-chat .is-base { display: none; }
    .sx2-stagein { padding: 50px 10px 46px; }
    .sx2-ccard, .sx2-ccard.is-thread { position: relative; right: auto; top: auto; width: auto; margin-top: 8px; }
    .sx2-pin { left: 48%; }
    .sx2-tiles { grid-template-columns: repeat(2, minmax(0, 1fr)); }
`,E=`
  ${l}
  ${d}
  @keyframes sx2-fade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }

  /* ---------- on the page: the tabs, the sentence, the closing line ---------- */
  .sx2-top { padding: 0 0 20px; display: grid; gap: 20px; }
  .sx2-task { margin: 0; font-size: 16px; line-height: 26px; color: var(--saa-ink-2); text-wrap: pretty; }
  .sx2-result { padding: 16px 2px 0; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; animation: sx2-fade 320ms ${C} both; }
  .sx2-result p { flex: 1; min-width: 220px; max-width: 70ch; margin: 0; font-size: 15px; line-height: 22px; color: var(--saa-ink); }
  .sx2-link { appearance: none; border: 0; background: transparent; padding: 4px 0; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; color: var(--saa-ink); white-space: nowrap; text-decoration: underline; text-decoration-color: var(--saa-hair-strong); text-underline-offset: 3px; }
  .sx2-link:hover { text-decoration-color: currentColor; }
  /* the next button to press: a tight ring, two pulses, then still */
  .sx2-ringed { box-shadow: 0 0 0 3px rgba(42, 120, 214, 0.28); animation: sx2-pulse-ring 700ms ease-out 2; }
  @keyframes sx2-pulse-ring { 0% { box-shadow: 0 0 0 2px rgba(42, 120, 214, 0.55); } 100% { box-shadow: 0 0 0 3px rgba(42, 120, 214, 0.28); } }

  .sx2-barrow { display: flex; align-items: center; gap: 16px; min-width: 0; }
  .sx2-tabs { display: inline-flex; align-items: stretch; gap: 0; padding: 4px; border-radius: 16px; background: var(--saa-tint); max-width: 100%; }
  .sx2-tab { appearance: none; border: 0; background: transparent; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; height: 40px;
    padding: 0 16px 0 12px; border-radius: 12px; color: var(--saa-ink-2); white-space: nowrap; transition: color 160ms ease, background-color 160ms ease, box-shadow 160ms ease; }
  .sx2-tab .n { display: inline-grid; place-items: center; width: 18px; height: 18px; border-radius: 999px; font-size: 11.5px; font-weight: 600; background: var(--saa-tint-2); color: var(--saa-ink-2); }
  .sx2-tab:hover { color: var(--saa-ink); }
  .sx2-tab[aria-selected="true"] { background: var(--saa-raised); color: var(--saa-ink); box-shadow: 0 1px 2px rgba(0,0,0,0.06), 0 0 0 0.5px var(--saa-hair); }
  .sx2-tab[aria-selected="true"] .n { background: var(--saa-ink); color: var(--saa-raised); }
  .sx2-tab svg { flex: none; }
  @container saa (max-width: 560px) { ${w} }
  @media (max-width: 640px) { ${w} }
  @media (pointer: coarse) {
    .sx2-tab, .sx2-restart, .sx2-check, .sx2-link { min-height: 40px; }
    .sx2-send { width: 40px; height: 40px; }
    .sx2-csend { position: relative; } .sx2-csend::after { content: ""; position: absolute; inset: -8px; }
  }
  .sx2-restart { margin-left: auto; appearance: none; border: 0; background: transparent; cursor: pointer; color: var(--saa-ink-3); padding: 4px 2px; text-decoration: underline; text-decoration-color: var(--saa-hair-strong); text-underline-offset: 3px; }
  .sx2-restart:hover { color: var(--saa-ink); }

  /* ---------- the window: a light frame with a hairline and a soft shadow, the conversation beside the pane ---------- */
  .sx2-win { position: relative; display: grid; grid-template-columns: minmax(264px, 38%) minmax(0, 1fr); overflow: hidden; color: #0b0b0b;
    border: 0.5px solid rgba(31, 30, 29, 0.12); border-radius: 16px; background: #fcfcfb; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 24px rgba(0, 0, 0, 0.02); }
  .sx2-chat { contain: size; min-width: 0; padding: 14px 14px 12px 16px; display: flex; flex-direction: column; justify-content: flex-end; gap: 10px; overflow: hidden; }
  .sx2-pane { margin: 8px 8px 8px 0; }
  .sx2-you { align-self: flex-end; max-width: 92%; background: rgba(11, 11, 11, 0.05); border-radius: 12px; padding: 8px 12px; font-size: 13.5px; line-height: 19px; color: #0b0b0b; }
  .sx2-claude { font-family: var(--saa-serif); font-size: 14.5px; line-height: 21px; color: #0b0b0b; margin: 0; padding: 0 2px; animation: sx2-fade 260ms ${C} both; }
  .sx2-claude.is-base { animation: none; }
  .sx2-thinking { display: inline-flex; align-items: center; gap: 6px; font-family: var(--saa-sans); font-size: 13.5px; }
  .sx2-shimmer { color: #898781; background: linear-gradient(90deg, #898781 0%, #c9c8c4 50%, #898781 100%); background-size: 200% 100%; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: sx2-shim 1600ms linear infinite; }
  @keyframes sx2-shim { from { background-position: 200% 0; } to { background-position: -200% 0; } }
  .sx2-card { display: flex; align-items: center; gap: 10px; padding: 9px 10px; border-radius: 12px; background: #fff; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.10), 0 1px 2px rgba(0, 0, 0, 0.04); }
  .sx2-card i { width: 32px; height: 32px; border-radius: 8px; background: rgba(11, 11, 11, 0.05); display: inline-flex; align-items: center; justify-content: center; color: #52514e; flex: none; }
  .sx2-card b { display: block; font-size: 13.5px; line-height: 18px; font-weight: 550; color: #0b0b0b; }
  .sx2-card small { display: block; font-size: 12.5px; line-height: 17px; color: #898781; }
  .sx2-card span.t { min-width: 0; flex: 1; }
  .sx2-card span.h { font-size: 12.5px; color: rgba(11, 11, 11, 0.42); padding: 3px 8px; border-radius: 6px; box-shadow: inset 0 0 0 1px rgba(11, 11, 11, 0.10); flex: none; }
  .sx2-composer { background: #fff; border-radius: 14px; padding: 6px 6px 6px 8px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.035), 0 0 0 0.5px rgba(31, 31, 30, 0.15); display: flex; align-items: flex-end; gap: 6px; min-height: 46px; margin-top: 2px; flex: none; }
  .sx2-composer p { margin: 0; flex: 1; padding: 6px 2px 6px 4px; font-size: 14px; line-height: 20px; color: #0b0b0b; }
  .sx2-composer p.is-empty { color: #898781; }
  .sx2-send { appearance: none; border: 0; background: #c6613f; width: 32px; height: 32px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; color: #ffffff; opacity: 0.4; flex: none; cursor: default; }
  .sx2-send.is-live { opacity: 1; cursor: pointer; }
  .sx2-send.is-live:hover { background: #d97757; }

  .sx2-summon { align-self: flex-end; max-width: 94%; background: #fff; border-radius: 12px; padding: 8px 10px 9px 12px; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.10), 0 1px 2px rgba(0, 0, 0, 0.04); animation: sx2-fade 260ms ${C} both; }
  .sx2-summon .hd { display: flex; align-items: center; gap: 6px; font-size: 12.5px; line-height: 18px; color: #52514e; }
  .sx2-summon .hd svg { flex: none; color: #898781; }
  .sx2-summon .hd span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .sx2-summon p { margin: 4px 0 0; font-size: 13.5px; line-height: 19px; color: #0b0b0b; }
  .sx2-steprow { display: inline-flex; align-items: center; gap: 4px; font-size: 12.5px; line-height: 18px; color: #898781; padding: 0 2px; animation: sx2-fade 260ms ${C} both; }

  /* ---------- stage ---------- */
  .sx2-stagein { padding: 50px 16px 46px; }
  .sx2-stagein.is-canvas { padding: 50px 16px 6px; }
  .sx2-pin { position: absolute; z-index: 3; width: 28px; height: 28px; border-radius: 2px 50% 50% 50%; background: var(--saa-blue); color: #fff; font-size: 10px; font-weight: 600;
    display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 0 0 2px #fff, 0 2px 6px rgba(0, 0, 0, 0.2); left: 51%; top: 24%; }
  .sx2-ccard { position: absolute; right: -8px; top: 25%; width: 244px; z-index: 4; background: #fff; border: 1px solid rgba(11, 11, 11, 0.10); border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08); font-size: 13px; line-height: 19px; color: #0b0b0b; animation: sx2-fade 260ms ${C} both; }
  .sx2-ccard.is-thread { top: 8%; }
  .sx2-ccard-in { padding: 12px; display: grid; gap: 10px; }
  .sx2-ccard textarea { display: block; width: 100%; border: 0; padding: 0; resize: none; background: transparent; font: inherit; color: #0b0b0b; outline: none; }
  /* @Claude: the tinted tag a new comment opens with while Send to Claude is checked (the field's first line is indented by its width), and the mention a sent comment's text opens with */
  .sx2-tagrow { position: relative; }
  .sx2-tagrow.has-tag textarea { text-indent: var(--sx2-tag-w, 60px); }
  .sx2-tagrow > span { position: absolute; left: 0; top: 0; padding-right: 4px; pointer-events: none; }
  .sx2-ctag { display: inline-block; padding: 0 5px; border-radius: 5px; background: #cde2fb; color: #184f95; }
  .sx2-at { font-weight: 500; color: #184f95; }
  .sx2-crow { display: flex; align-items: center; gap: 8px; margin: 0 -6px -6px 0; }
  .sx2-check { appearance: none; border: 0; background: transparent; padding: 0; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; color: #0b0b0b; }
  .sx2-check i { width: 16px; height: 16px; border-radius: 4px; display: inline-flex; align-items: center; justify-content: center; color: #fff; background: var(--saa-blue); }
  .sx2-check.is-off i { background: #fff; box-shadow: inset 0 0 0 1px rgba(11, 11, 11, 0.3); }
  .sx2-csend { appearance: none; border: 0; margin-left: auto; width: 24px; height: 24px; border-radius: 6px; background: #c6613f; color: #fff; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; }
  .sx2-csend.is-plain { background: #0b0b0b; }
  /* the open thread has no title bar: resolve, more and close end the first comment's line */
  .sx2-thread { padding: 12px; display: grid; gap: 8px; }
  .sx2-by { display: flex; align-items: center; gap: 4px; min-height: 24px; font-size: 12px; line-height: 17px; }
  .sx2-by .sx-quiet { margin-left: auto; gap: 0; }
  .sx2-av { width: 20px; height: 20px; border-radius: 50%; flex: none; display: inline-flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 500; background: rgba(11, 11, 11, 0.10); color: #0b0b0b; }
  .sx2-av.is-claude { background: #c6613f; }
  .sx2-cmsg p { margin: 2px 0 0; color: #0b0b0b; }
  .sx2-cmsg b { font-weight: 600; }
  .sx2-cmsg time { color: #898781; font-size: 11px; }
  .sx2-wake { font-size: 12px; }

  /* Canvas view: every slide as a tile, one row per section */
  .sx2-canvas { display: grid; gap: 12px; }
  .sx2-sec { display: flex; align-items: center; gap: 8px; font-size: 12px; line-height: 20px; font-weight: 500; color: #0b0b0b; white-space: nowrap; overflow: hidden; }
  .sx2-sec span { overflow: hidden; text-overflow: ellipsis; }
  .sx2-sec::after { content: ""; flex: 1; min-width: 12px; height: 1px; background: rgba(11, 11, 11, 0.10); }
  .sx2-tiles { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
  .sx2-tile b { display: block; font-size: 12px; line-height: 18px; font-weight: 400; color: #898781; font-variant-numeric: tabular-nums; }
  .sx2-tile .sl { border-radius: 4px; box-shadow: 0 0 0 1px rgba(11, 11, 11, 0.10), 0 1px 2px rgba(0, 0, 0, 0.05); }
  .sx2-actions { flex: none; height: 40px; border-top: 1px solid rgba(11, 11, 11, 0.10); background: #fff; display: flex; align-items: center; padding: 0 10px; gap: 6px; color: rgba(11, 11, 11, 0.42); font-size: 13px; }
  .sx2-viewseg { margin-left: auto; height: 24px; border-radius: 6px; background: rgba(11, 11, 11, 0.05); padding: 1px; display: inline-flex; }
  .sx2-viewseg span { width: 22px; height: 22px; border-radius: 5px; display: inline-flex; align-items: center; justify-content: center; color: #898781; }
  .sx2-viewseg span.on { background: #fff; color: #0b0b0b; box-shadow: inset 0 0 0 1px rgba(11, 11, 11, 0.10), 0 1px 2px rgba(0, 0, 0, 0.05); }

  /* stacked: the pane above the exchange */
  @container saa (max-width: 560px) {${T}  }
  @media (max-width: 600px) {${T}  }
  ${g}
`;function D(){let e=i(),t=r(),n=(0,_.useId)(),[l,d]=(0,_.useState)("point"),[g,C]=(0,_.useState)({point:!1,comment:!1,whole:!1}),[w,T]=(0,_.useState)(h),[D,O]=(0,_.useState)(!1),[k,A]=(0,_.useState)(0),[re,j]=(0,_.useState)(!1),[M,N]=(0,_.useState)(y.off),[P,F]=(0,_.useState)(""),[I,L]=(0,_.useState)(!0),[R,z]=(0,_.useState)(b.idle),B=(0,_.useRef)([]),V=(e,t)=>{B.current.push(window.setTimeout(e,t))},H=()=>{B.current.forEach(e=>window.clearTimeout(e)),B.current=[]};(0,_.useEffect)(()=>H,[]);let U=w!=="Revenue finished Q3 at $48.2M, 4% above plan"||g.point||D||k>0||M!==y.off||R!==b.idle,W=e=>{t(),C(t=>({...t,[e]:!0}))},G=()=>{H(),M===y.working&&(O(!0),N(y.done),W("comment")),(R===b.thinking||R===b.restyling)&&(A(p.length),z(b.done),W("whole")),j(!1)},K=t=>{t!==l&&(G(),d(t),t==="comment"&&M<y.working&&(N(y.off),F(e("ui.commentDraft")),L(!0)))},ie=()=>{H(),d("point"),C({point:!1,comment:!1,whole:!1}),T(h),O(!1),A(0),j(!1),N(y.off),F(""),L(!0),z(b.idle)},ae=e=>{T(e),j(!0),H(),V(()=>j(!1),900),g.point||W("point")},oe=()=>{if(P.trim()!==""){if(!I){N(y.note);return}N(y.working),V(()=>{O(!0),N(y.done),W("comment")},1700)}},se=()=>{L(!0),N(y.card)},ce=()=>{R===b.idle&&(z(b.thinking),V(()=>{z(b.restyling),p.forEach((e,t)=>V(()=>A(t+1),t*90)),V(()=>{z(b.done),W("whole")},p.length*90+420)},1800))},q=e=>e<k?"northwind":"claude",J=l==="comment"&&M>=y.on,Y=l==="whole"&&R===b.idle?e("ui.restyleRequest"):"",X=Y!=="",Z=(0,v.jsx)("p",{className:"sx2-claude","aria-live":"polite",children:(0,v.jsxs)("span",{className:"sx2-thinking",children:[(0,v.jsx)(o,{size:14,color:"#d97757"}),(0,v.jsx)("span",{className:"sx2-shimmer",children:e("ui.thinking")})]})}),le=(0,v.jsxs)("div",{className:"sx2-chat",children:[(0,v.jsx)("div",{className:"sx2-you is-base",children:e("chat.origin")}),(0,v.jsx)("p",{className:"sx2-claude is-base",children:e("claude.built")}),(0,v.jsxs)("div",{className:"sx2-card is-base","aria-hidden":"true",children:[(0,v.jsx)("i",{children:(0,v.jsx)(a,{name:"Globe",size:18})}),(0,v.jsxs)("span",{className:"t",children:[(0,v.jsx)("b",{children:m}),(0,v.jsx)("small",{children:e("ui.card.meta")})]}),(0,v.jsx)("span",{className:"h",children:e("ui.card.hide")})]}),l==="comment"&&(M===y.working||M===y.done)&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"sx2-summon",children:[(0,v.jsxs)("div",{className:"hd",children:[(0,v.jsx)(a,{name:"Chat",size:14}),(0,v.jsx)("span",{children:e("ui.summon",{title:"Q3 business review"})}),(0,v.jsx)(a,{name:"CaretDown",size:12})]}),(0,v.jsx)("p",{children:P})]}),M===y.working?Z:(0,v.jsxs)("span",{className:"sx2-steprow","aria-live":"polite",children:[e("ui.step.replied"),(0,v.jsx)(a,{name:"CaretRight",size:12})]})]}),l==="whole"&&R>=b.thinking&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"sx2-you",children:e("ui.restyleRequest")}),R<b.done?Z:(0,v.jsx)("p",{className:"sx2-claude","aria-live":"polite",children:e("claude.restyleReply")})]}),(0,v.jsxs)("div",{className:"sx2-composer",children:[(0,v.jsx)("p",{className:s(!Y&&"is-empty"),children:Y||e("ui.replyPlaceholder")}),(0,v.jsx)("button",{type:"button",className:s("sx2-send",X&&"is-live sx2-ringed"),disabled:!X,"aria-label":e("ui.send"),onClick:ce,children:(0,v.jsx)(a,{name:"ArrowUp",size:20})})]})]}),ue=(0,v.jsxs)("div",{className:"sx-head",children:[(0,v.jsx)("span",{className:"sx-title",children:m}),(0,v.jsx)(a,{name:"CaretDown",size:12,className:"sx-caret"}),re&&(0,v.jsx)("span",{className:"sx-save",role:"img","aria-label":e("ui.saving"),title:e("ui.saving")}),(0,v.jsx)("span",{className:"sx-spacer"}),(0,v.jsx)("button",{type:"button",className:s("sx-ib",l==="comment"&&M<y.working&&"is-live",J&&M!==y.note&&"is-pressed",l==="comment"&&M===y.off&&"sx2-ringed"),"aria-label":e(J?"ui.doneCommenting":"ui.comment"),"aria-pressed":J,disabled:l!=="comment"||M>=y.working,onClick:()=>N(e=>e===y.off?y.on:e<=y.card?y.off:e),children:(0,v.jsx)(a,{name:J?"ChatFilled":"Chat"})}),(0,v.jsxs)("span",{className:"sx-sharebtn","aria-hidden":"true",children:[(0,v.jsx)(a,{name:"Share"}),e("ui.share")]}),(0,v.jsx)(u,{})]}),de=l==="comment"&&M>=y.card&&(0,v.jsx)("div",{className:s("sx2-ccard",M>=y.working&&"is-thread"),role:"dialog","aria-label":e("ui.comment"),children:M===y.card?(0,v.jsxs)("div",{className:"sx2-ccard-in",children:[(0,v.jsxs)("div",{className:s("sx2-tagrow",I&&"has-tag"),children:[I&&(0,v.jsx)("span",{id:`${n}-tag`,"aria-hidden":"true",ref:e=>{e?.parentElement?.style.setProperty("--sx2-tag-w",`${Math.ceil(e.getBoundingClientRect().width)}px`)},children:(0,v.jsx)("span",{className:"sx2-ctag",children:e("ui.claudeTag")})}),(0,v.jsx)("textarea",{rows:3,value:P,placeholder:I?void 0:e("ui.commentPlaceholder"),"aria-label":e("ui.commentPlaceholder"),"aria-describedby":I?`${n}-tag`:void 0,onChange:e=>F(e.target.value)})]}),(0,v.jsxs)("div",{className:"sx2-crow",children:[(0,v.jsxs)("button",{type:"button",className:s("sx2-check",!I&&"is-off"),role:"checkbox","aria-checked":I,onClick:()=>L(e=>!e),children:[(0,v.jsx)("i",{children:I&&(0,v.jsx)(a,{name:"Check",size:12})}),e("ui.sendToClaude")]}),(0,v.jsx)("button",{type:"button",className:s("sx2-csend",!I&&"is-plain","sx2-ringed"),"aria-label":e(I?"ui.sendToClaude":"ui.addComment"),onClick:oe,children:(0,v.jsx)(a,{name:"ArrowUp"})})]})]}):(0,v.jsxs)("div",{className:"sx2-thread","aria-live":"polite",children:[(0,v.jsxs)("div",{className:"sx2-cmsg",children:[(0,v.jsxs)("div",{className:"sx2-by",children:[(0,v.jsx)("span",{className:"sx2-av","aria-hidden":"true",children:x}),(0,v.jsx)("b",{children:e("ui.you")}),(0,v.jsx)("time",{children:e("ui.now")}),(0,v.jsxs)("span",{className:"sx-quiet","aria-hidden":"true",children:[(0,v.jsx)("span",{className:"sx-ib",children:(0,v.jsx)(a,{name:"Check"})}),(0,v.jsx)("span",{className:"sx-ib",children:(0,v.jsx)(a,{name:"DotsHorizontal"})}),(0,v.jsx)("span",{className:"sx-ib",children:(0,v.jsx)(a,{name:"X"})})]})]}),(0,v.jsxs)("p",{children:[M!==y.note&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{className:"sx2-at",children:e("ui.claudeTag")})," "]}),P]})]}),M===y.working&&(0,v.jsx)("div",{className:"sx2-wake",children:(0,v.jsx)("span",{className:"sx2-shimmer",children:e("ui.working")})}),M===y.done&&(0,v.jsxs)("div",{className:"sx2-cmsg",children:[(0,v.jsxs)("div",{className:"sx2-by",children:[(0,v.jsx)("span",{className:"sx2-av is-claude","aria-hidden":"true",children:(0,v.jsx)(o,{size:12,color:"#fff"})}),(0,v.jsx)("b",{children:e("ui.claude")}),(0,v.jsx)("time",{children:e("ui.now")})]}),(0,v.jsx)("p",{children:e("claude.commentReply")})]})]})}),fe=(0,v.jsxs)("div",{className:"sx2-stagein",children:[(0,v.jsxs)("div",{className:"sx-slidewrap",children:[(0,v.jsx)(f,{id:"revenue",page:2,theme:q(1),revenueTitle:w,revenueChanged:D,onRevenueTitle:l==="point"?ae:void 0,titleInputLabel:e("ui.slideTitleInput"),beacon:l==="point"&&!g.point?"title":l==="comment"&&M===y.on?"chart":void 0,onChartClick:l==="comment"&&M===y.on?()=>N(y.card):void 0,chartButtonLabel:e("ui.chartButton"),chartAnchored:l==="comment"&&M>=y.card}),l==="comment"&&M>=y.card&&(0,v.jsx)("span",{className:"sx2-pin","aria-hidden":"true",children:x}),de]}),(0,v.jsx)(te,{page:2,of:p.length})]}),pe=(0,v.jsx)("div",{className:"sx2-stagein is-canvas",children:(0,v.jsx)("div",{className:"sx2-canvas",children:S.map(e=>(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"sx2-sec",children:(0,v.jsx)("span",{children:e.line})}),(0,v.jsx)("div",{className:"sx2-tiles",children:p.slice(e.from,e.to).map((t,n)=>{let r=e.from+n;return(0,v.jsxs)("div",{className:"sx2-tile",children:[(0,v.jsx)("b",{children:r+1}),(0,v.jsx)(f,{id:t,page:r+1,thumb:!0,theme:q(r),revenueTitle:w,revenueChanged:D})]},t)})})]},e.line))})}),me=(0,v.jsxs)("div",{className:"sx-pane sx2-pane",children:[ue,(0,v.jsxs)("div",{className:"sx-stage",children:[(0,v.jsx)(c,{zoom:l==="whole"?"7%":"22%"}),l==="whole"?pe:fe]}),l==="whole"&&(0,v.jsxs)("div",{className:"sx2-actions","aria-hidden":"true",children:[(0,v.jsx)(a,{name:"Add"}),(0,v.jsxs)("span",{className:"sx2-viewseg",children:[(0,v.jsx)("span",{children:(0,v.jsx)(a,{name:"Stop"})}),(0,v.jsx)("span",{className:"on",children:(0,v.jsx)(a,{name:"Grid"})})]})]})]}),Q=(t,n)=>g[t]?null:(0,v.jsxs)("button",{type:"button",className:"sx2-link",onClick:()=>K(t),children:[e(n),(0,v.jsx)(a,{name:"CaretRight",size:14})]}),$=null;return l==="point"&&g.point?$={text:e("result.hand"),action:Q("comment","next.comment")}:l==="comment"&&M===y.note?$={text:e("result.comment.note"),action:(0,v.jsx)("button",{type:"button",className:"sx2-link",onClick:se,children:e("result.comment.retry")})}:l==="comment"&&M===y.done?$={text:e("result.comment.lead"),action:Q("whole","next.whole")}:l==="whole"&&R===b.done&&($={text:e("result.whole.lead")}),(0,v.jsxs)(ee,{css:E,label:e("aria.root"),children:[(0,v.jsxs)("div",{className:"sx2-top",children:[(0,v.jsxs)("div",{className:"sx2-barrow",children:[(0,v.jsx)("div",{className:"sx2-tabs",role:"tablist","aria-label":e("aria.tabs"),children:ne.map((t,r)=>(0,v.jsxs)("button",{type:"button",role:"tab",id:`${n}-tab-${t}`,"aria-selected":l===t,"aria-controls":`${n}-panel`,className:"sx2-tab",onClick:()=>K(t),children:[(0,v.jsx)("span",{className:"n","aria-hidden":"true",children:g[t]?(0,v.jsx)(a,{name:"Check",size:11}):r+1}),e(`tab.${t}`)]},t))}),U&&(0,v.jsx)("button",{type:"button",className:"sx2-restart",onClick:ie,children:e("turn.restart")})]}),(0,v.jsx)("p",{className:"sx2-task",children:e(`task.${l}`)})]}),(0,v.jsxs)("div",{className:"sx2-win",role:"tabpanel",id:`${n}-panel`,"aria-labelledby":`${n}-tab-${l}`,children:[le,me]}),$&&(0,v.jsxs)("div",{className:"sx2-result","aria-live":"polite",children:[(0,v.jsx)("p",{children:$.text}),$.action]})]})}export{D as default};