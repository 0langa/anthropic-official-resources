import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{r as t}from"../../../../Icon-fw289bvz.js";import{Im as n,Nm as r}from"../../../../content-de-meta-ekk7gs5w.js";import{n as i}from"../../../../usePrefersReducedMotion-odej9ybh.js";import{o as a}from"../../../../ResourceWidget-inr45rev.js";import{u as o}from"../../../../WidgetCopy-h9nkp96o.js";import{qt as s}from"../../../../index-hsoga37k.js";import{r as c,t as ee}from"../../../../ClaudeDesignTutorialKit-ms53cw2f.js";import{a as te,i as ne,o as re,r as l,s as ie,t as u}from"../../../../_deck-hgpxsbs4.js";import{a as d,i as f,n as p,o as m,r as ae,s as h,t as g}from"../../../../_slides-djn20cuz.js";var _=e(n(),1),v=r(),y=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Cpath d='M 2 2 L 2 14 A 12 12 0 1 0 14 2 Z' fill='%23000' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E") 2 2, crosshair`,b={initial:"J",hue:"#7a6ba8"},oe=78,se=700,x=1400,S={1:{task:"task.hand",done:"caption.hand.done"},2:{task:"task.comment",done:"caption.comment.done"},3:{task:"task.ask",done:"caption.end"}},C=[1,2,3],ce=`
  ${h}
  ${f}

  /* ------------------------------------------------ page chrome */
  .cd .sd-task {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 16px;
    min-height: 78px;
    margin-bottom: 12px;
    padding: 14px 16px;
    border: 1px solid var(--cd-hair);
    border-radius: 12px;
    background: var(--cd-card);
  }
  .cd .sd-step {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    flex: none;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    color: var(--cd-ink);
  }
  .cd .sd-bars { display: inline-flex; gap: 4px; }
  .cd .sd-bars i {
    width: 18px;
    height: 4px;
    border-radius: 999px;
    background: var(--cd-hair-strong);
  }
  .cd .sd-bars i.is-on { background: var(--cd-ink); }
  .cd .sd-task p {
    flex: 1 1 300px;
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: var(--cd-ink-2);
  }
  .cd .sd-task p.is-done { color: var(--cd-ink); }
  .cd .sd-next { flex: none; margin-left: auto; }
  .cd .sd-next[aria-disabled="true"] { opacity: 0.45; cursor: default; }
  .cd .sd-next.is-ready {
    background: var(--cd-primary);
    border-color: transparent;
    color: var(--cd-on-primary);
  }

  /* ------------------------------------------------ conversation */
  .cd .sd-win { min-height: 548px; }
  .cd .sd-win .cw-chat { padding-top: 0; }
  /* The newest message stays in view. The opening request leaves when a new
     one is sent, and whatever else does not fit runs out under the top edge. */
  .cd .sd-thread {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1 1 0;
    min-height: 0;
    padding-top: 24px;
    overflow: hidden;
    mask-image: linear-gradient(transparent, #000 24px);
  }
  .cd .sd-thread.is-asked > :first-child { display: none; }
  .cd .sd-thread .cw-card { margin-bottom: 16px; }
  .cd .sd-thread .cw-card + .cw-user { margin-top: 8px; }
  .cd .sd-box {
    appearance: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: none;
    padding: 12px;
    border: 0;
    border-radius: 20px;
    background: var(--w-panel);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.035), 0 0 0 1px var(--w-hair);
    font-size: 15px;
    line-height: 20px;
    color: var(--w-fg-3);
    text-align: left;
  }
  .cd .sd-box > :first-child { min-height: 42px; padding: 2px 4px 0; }
  .cd .sd-box > :last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 6px;
    color: var(--w-fg);
  }
  /* Send, in the message box and smaller in the comment card. */
  .cd .sd-go {
    appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: var(--w-brand);
    color: #ffffff;
    opacity: 0.4;
  }
  .cd .sd-box:enabled {
    color: var(--w-fg);
    cursor: pointer;
    box-shadow: 0 0 0 2px var(--w-ground), 0 0 0 4px var(--w-blue);
  }
  .cd .sd-box:enabled .sd-go { opacity: 1; }
  .cd .sd-box:enabled:hover .sd-go { background: #d97757; }
  .cd .sd-box:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--w-ground), 0 0 0 4px var(--w-blue), 0 0 8px 3px var(--w-blue-tint);
  }

  /* ------------------------------------------------ pane and slide */
  .cd .sd-save {
    flex: none;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--w-fg-3);
    opacity: 0.55;
    animation: sd-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes sd-pulse { 50% { opacity: 0.25; } }
  .cd .sd-reflow .se-thumb { animation: sl-fade 320ms ${u} both; }
  /* Room over the slide for the strip on the selected title. */
  .cd .sd-win .se-stage { padding-top: 84px; }
  .cd .sd-sw {
    container-type: inline-size;
    position: relative;
  }
  /* Step 1. The title box at fixed slide units, so the selection chrome
     drawn over it lines up at every width. */
  .cd .sd-win textarea.sl-title {
    width: 81cqw;
    height: 10.8cqw;
    max-width: none;
    margin: -0.4cqw -0.6cqw 2cqw;
    padding: 0.4cqw 0.6cqw;
    cursor: text;
  }
  .cd .sd-win textarea.sl-title:read-only { cursor: default; }
  .cd .sd-win textarea.sl-title:focus-visible {
    box-shadow: 0 0 0 3px #fffdf8, 0 0 0 5px var(--w-plum);
  }
  /* While the text is being edited the selection chrome is hidden and the
     caret is the only mark; the strip above stays up. */
  .cd .sd-win .sd-sw.is-editing textarea.sl-title:focus-visible { box-shadow: none; }
  .cd .sd-sw.is-editing .sd-sel { display: none; }
  .cd .sd-sw .se-float { left: 5.4cqw; }
  .cd .sd-sel {
    position: absolute;
    z-index: 2;
    left: 5.4cqw;
    top: 7.55cqw;
    width: 81cqw;
    height: 10.8cqw;
    outline: 2px solid var(--w-plum);
    pointer-events: none;
  }
  .cd .sd-sel i {
    position: absolute;
    width: 12px;
    height: 12px;
    margin: -6px;
    border: 2px solid var(--w-plum);
    border-radius: 1px;
    background: #ffffff;
  }
  .cd .sd-sel i:nth-child(1) { left: 0; top: 0; }
  .cd .sd-sel i:nth-child(2) { left: 100%; top: 0; }
  .cd .sd-sel i:nth-child(3) { left: 0; top: 100%; }
  .cd .sd-sel i:nth-child(4) { left: 100%; top: 100%; }

  /* Step 2. Nothing is drawn on the chart at rest. Under the pointer, or
     with keyboard focus, it takes comment mode's hover ring. */
  .cd .sd-win button.sl-chart {
    border-radius: 4px;
    cursor: ${y};
  }
  .cd .sd-win button.sl-chart:hover,
  .cd .sd-win button.sl-chart:focus-visible {
    outline: 2px solid rgba(217, 119, 87, 0.6);
    outline-offset: 4px;
  }
  .cd .sd-win button.sl-chart:focus-visible { box-shadow: 0 0 0 4px var(--w-blue-tint); }
  /* The exercise's own marker for the one live target. Page chrome, so it
     does not pass for something the product draws. */
  .cd .sd-mark {
    position: absolute;
    z-index: 3;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 5px 12px;
    border-radius: 999px;
    background: var(--cd-page);
    color: var(--cd-ink);
    font: 500 15px/22px var(--cd-sans);
    white-space: nowrap;
    box-shadow: 0 0 0 2px var(--cd-accent), 0 6px 16px rgba(0, 0, 0, 0.22);
    pointer-events: none;
  }
  .cd .sd-pin {
    position: absolute;
    z-index: 5;
    left: 44cqw;
    top: 24cqw;
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border: 1px solid var(--w-hair);
    border-radius: 0 999px 999px 999px;
    background: var(--w-panel);
    box-shadow: var(--w-sh-sm);
  }
  .cd .sd-pin.is-unread { border-color: transparent; background: var(--w-blue); box-shadow: none; }
  /* Avatars: one white initial on a color, Claude on the brand disc. */
  .cd .sd-av {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 20px;
    height: 20px;
    border-radius: 999px;
    background: ${b.hue};
    color: #ffffff;
    font-size: 10px;
    line-height: 1;
    font-weight: 500;
  }
  .cd .sd-av.is-claude { background: var(--w-brand); }

  /* ------------------------------------------------ comment card */
  .cd .sd-cc {
    position: absolute;
    z-index: 6;
    inset: auto 4px 4px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 232px;
    padding: 12px;
    overflow: hidden;
    border: 1px solid var(--w-hair);
    border-radius: 10px;
    background: var(--w-panel);
    box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.16);
  }
  .cd .sd-cc textarea {
    display: block;
    width: 100%;
    min-height: 38px;
    padding: 0;
    border: 0;
    outline: none;
    resize: none;
    background: transparent;
    font: inherit;
    color: inherit;
    field-sizing: content;
    text-indent: var(--sd-tag-w, 60px);
  }
  /* The @Claude tag sits at the start of the field's first line, which is
     indented by the tag's width. */
  .cd .sd-tagrow { position: relative; }
  .cd .sd-tagrow > span {
    position: absolute;
    left: 0;
    top: 0;
    padding-right: 4px;
    pointer-events: none;
  }
  .cd .sd-acts {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4px -6px -6px 0;
    font-size: 12px;
    line-height: 17px;
  }
  .cd .sd-acts > span { display: inline-flex; align-items: center; gap: 6px; }
  .cd .sd-acts i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border-radius: 4px;
    background: var(--w-blue);
    color: #ffffff;
  }
  .cd .sd-cc .sd-go {
    width: 24px;
    height: 24px;
    border-radius: 6px;
    opacity: 1;
    cursor: pointer;
  }
  .cd .sd-cc .sd-go:hover { background: #d97757; }
  .cd .sd-cc .sd-go[aria-disabled="true"] { background: var(--w-fg); opacity: 0.4; cursor: default; }
  .cd .sd-go:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 1px var(--w-bg), 0 0 0 1px var(--w-blue), 0 0 6px 1px var(--w-blue-tint);
  }
  .cd .sd-by {
    display: flex;
    align-items: center;
    gap: 4px;
    min-height: 24px;
    font-size: 12px;
    line-height: 17px;
  }
  /* The bar that stands for the commenter's name. */
  .cd .sd-by i {
    width: 64px;
    height: 6px;
    margin: 0 2px;
    border-radius: 3px;
    background: var(--w-hair-2);
  }
  .cd .sd-by b { font-weight: 600; }
  .cd .sd-by small { font-size: 11px; color: var(--w-fg-3); }
  /* No title bar: resolve, more and close end the first comment's line. */
  .cd .sd-by small + span { display: inline-flex; margin-left: auto; }
  .cd .sd-cc p { margin: 2px 0 0; overflow-wrap: anywhere; }
  .cd .sd-cc p.is-status { font-size: 12px; color: var(--w-fg-3); }

  @container cd (max-width: 640px) {
    .cd .sd-task { min-height: 108px; }
    .cd .sd-next { min-height: 44px; }
    .cd .sd-win { min-height: 0; }
    .cd .sd-thread { flex: none; min-height: 148px; padding-top: 16px; mask-image: none; }
    .cd .sd-thread > :nth-child(-n + 2),
    .cd .sd-thread.is-asked .cw-card { display: none; }
    .cd .sd-thread .cw-card + .cw-user { margin-top: 0; }
  }
  @container cd (max-width: 420px) {
    .cd .sd-task { min-height: 162px; }
  }
`;function w(){let e=o(),n=a(),r=i(),u=(0,_.useId)(),[f,h]=(0,_.useState)(1),[y,w]=(0,_.useState)(l),[T,E]=(0,_.useState)(!1),[D,O]=(0,_.useState)(!1),[k,A]=(0,_.useState)(!1),[j,M]=(0,_.useState)("target"),[N,P]=(0,_.useState)(""),[F,I]=(0,_.useState)("idle"),L=(0,_.useRef)(void 0),R=(0,_.useRef)(null),z=(0,_.useRef)(null),B=(0,_.useRef)(null),V=(0,_.useRef)(null),H=(0,_.useRef)(null),U=(e,t)=>{window.clearTimeout(L.current),L.current=window.setTimeout(e,t)};(0,_.useEffect)(()=>()=>window.clearTimeout(L.current),[]);let W=[D,j==="done",F==="done"][f-1],G=f===3&&W;(0,_.useEffect)(()=>{G&&n()},[G,n]),(0,_.useEffect)(()=>{let e=R.current;e!==null&&(R.current=null,(e==="chart"?z.current?.querySelector("button.sl-chart"):{draft:B,ask:V,next:H}[e].current)?.focus({preventScroll:!0}))},[f,j,F]);let K=()=>{window.clearTimeout(L.current),E(!1),O(!0)},le=e=>{let t=e.slice(0,oe);if(w(t),t.trim()===""||t==="Revenue finished Q3 at $48.2M, 4% above plan"){window.clearTimeout(L.current),E(!1),O(!1);return}E(!0),U(K,se)},ue=e=>{!k&&e.key==="Enter"?(e.preventDefault(),e.currentTarget.select(),A(!0)):k&&e.key==="Escape"&&(e.preventDefault(),A(!1))},q=e=>{R.current="next",e(r?"done":"working"),r||U(()=>e("done"),x)},de=()=>{P(e("ui.commentDraft")),M("compose"),R.current="draft"},J=()=>{N.trim()!==""&&q(M)},fe=e=>{e.key==="Escape"?(e.preventDefault(),M("target"),R.current="chart"):e.key==="Enter"&&!e.shiftKey&&!e.nativeEvent.isComposing&&(e.preventDefault(),J())},pe=()=>{f!==3&&!W||(window.clearTimeout(L.current),E(!1),A(!1),f===1?(h(2),R.current="chart"):f===2?(h(3),R.current="ask"):(h(1),w(l),O(!1),M("target"),I("idle")))},Y=j==="working"||j==="done",X=f===3&&F==="idle",Z=(0,v.jsx)("span",{className:"sd-av","aria-hidden":"true",children:b.initial}),Q=(0,v.jsx)("span",{className:"sd-av is-claude","aria-hidden":"true",children:(0,v.jsx)(s,{size:12,color:"#ffffff",state:j==="working"?"thinking":void 0})}),me=(t,n,r)=>{let i=!r&&t==="revenue",a=(0,v.jsx)(ie,{id:t,page:n,thumb:r,revenueTitle:y,revenueChanged:j==="done",onRevenueTitle:i&&f===1?le:void 0,titleInputLabel:e("aria.title"),titleField:{readOnly:!k,onDoubleClick:()=>A(!0),onPointerDown:e=>{e.pointerType!=="mouse"&&A(!0)},onKeyDown:ue,onBlur:()=>A(!1)},onChartClick:i&&f===2&&j==="target"?de:void 0,chartButtonLabel:e("aria.chart"),chartCallout:(0,v.jsx)("span",{className:"sd-mark","aria-hidden":"true",children:e("mark.chart")})});return r?a:(0,v.jsxs)("div",{className:c("sd-sw",k&&"is-editing"),ref:z,onBlur:T?K:void 0,children:[a,i&&f===1?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("span",{className:"sd-sel","aria-hidden":"true",children:[(0,v.jsx)("i",{}),(0,v.jsx)("i",{}),(0,v.jsx)("i",{}),(0,v.jsx)("i",{})]}),(0,v.jsx)(d,{})]}):null,i&&f===2&&j!=="target"?(0,v.jsx)("span",{className:c("sd-pin",j==="compose"&&"is-unread"),"aria-hidden":"true",children:j==="working"?Q:Z}):null]})},$=null;return f===2&&j==="compose"?$=(0,v.jsxs)("div",{className:"sd-cc",role:"group","aria-label":e("ui.commentAria"),children:[(0,v.jsxs)("div",{className:"sd-tagrow",children:[(0,v.jsx)("span",{id:u,"aria-hidden":"true",ref:e=>{e?.parentElement?.style.setProperty("--sd-tag-w",`${Math.ceil(e.getBoundingClientRect().width)}px`)},children:(0,v.jsx)("span",{className:"cd-ctag",children:e("ui.claudeTag")})}),(0,v.jsx)("textarea",{ref:B,rows:2,value:N,"aria-label":e("ui.commentAria"),"aria-describedby":u,onChange:e=>P(e.target.value),onKeyDown:fe})]}),(0,v.jsxs)("div",{className:"sd-acts",children:[(0,v.jsxs)("span",{children:[(0,v.jsx)("i",{"aria-hidden":"true",children:(0,v.jsx)(t,{name:"Check",size:"xs"})}),e("ui.sendToClaude")]}),(0,v.jsx)("button",{type:"button",className:"sd-go","aria-label":e("ui.sendToClaude"),"aria-disabled":N.trim()==="",onClick:J,children:(0,v.jsx)(t,{name:"ArrowUp",size:"sm"})})]})]}):f===2&&Y&&($=(0,v.jsxs)("div",{className:"sd-cc",role:"group","aria-label":e("ui.pin"),children:[(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"sd-by",children:[Z,(0,v.jsx)("i",{"aria-hidden":"true"}),(0,v.jsx)("small",{children:e("ui.now")}),(0,v.jsxs)("span",{"aria-hidden":"true",children:[(0,v.jsx)(g,{icon:(0,v.jsx)(t,{name:"Check",size:"sm"})}),(0,v.jsx)(g,{icon:(0,v.jsx)(t,{name:"DotsHorizontal",size:"sm"})}),(0,v.jsx)(g,{icon:(0,v.jsx)(t,{name:"X",size:"sm"})})]})]}),(0,v.jsxs)("p",{children:[(0,v.jsx)("span",{className:"cd-at",children:e("ui.claudeTag")})," ",N]})]}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"sd-by",children:[Q,(0,v.jsx)("b",{children:e("ui.claude")}),(0,v.jsx)("small",{children:e("ui.now")})]}),j==="done"?(0,v.jsx)("p",{children:e("claude.commentReply")}):(0,v.jsx)("p",{className:"is-status",children:e("ui.working")})]})]})),(0,v.jsxs)(ee,{css:ce,cssId:"academy-cd-steer",children:[(0,v.jsx)(ne,{}),(0,v.jsxs)("div",{className:"sd-task",children:[(0,v.jsxs)("span",{className:"sd-step",children:[e("step.progress",{n:f,total:C.length}),(0,v.jsx)("span",{className:"sd-bars","aria-hidden":"true",children:C.map(e=>(0,v.jsx)("i",{className:c(f>=e&&"is-on")},e))})]}),(0,v.jsx)("p",{"aria-live":"polite",className:c(W&&"is-done"),children:e(S[f][W?"done":"task"])}),(0,v.jsx)("button",{ref:H,type:"button",className:c("cd-btn sd-next",(W||f===3)&&"is-ready"),"aria-disabled":f!==3&&!W,onClick:pe,children:e(f===3?"action.restart":"action.next")})]}),(0,v.jsxs)("div",{className:"cd-win cw-win sd-win",children:[(0,v.jsxs)("div",{className:"cw-chat",children:[(0,v.jsxs)("div",{className:c("sd-thread",F!=="idle"&&"is-asked"),children:[(0,v.jsx)("div",{className:"cw-user",children:e("chat.request")}),(0,v.jsx)("p",{className:"cw-claude",children:e("chat.last")}),(0,v.jsx)(p,{}),F==="idle"?null:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"cw-user",children:e("chat.ask")}),F==="done"?(0,v.jsx)("p",{className:"cw-claude",children:e("chat.reply")}):(0,v.jsx)("div",{className:"cw-claude","aria-hidden":"true",children:(0,v.jsx)(s,{size:24,color:"#d97757",state:"thinking"})})]})]}),(0,v.jsxs)("button",{ref:V,type:"button",className:"sd-box",disabled:!X,onClick:()=>q(I),children:[(0,v.jsx)("span",{children:e(X?"chat.ask":"ui.composerPlaceholder")}),(0,v.jsxs)("span",{"aria-hidden":"true",children:[(0,v.jsx)(t,{name:"Add",size:"md"}),(0,v.jsx)("span",{className:"sd-go",children:(0,v.jsx)(t,{name:"ArrowUp",size:"md"})})]})]})]}),(0,v.jsxs)(ae,{className:c(F==="done"&&"sd-reflow"),afterTitle:T?(0,v.jsx)("span",{className:"sd-save",role:"img","aria-label":e("ui.saving")}):null,comment:(0,v.jsxs)("span",{className:c("cd-gb",f===2&&"is-pressed",Y&&"is-text"),"aria-hidden":"true",children:[(0,v.jsx)(t,{name:f===2?"ChatFilled":"Chat",size:"sm"}),Y?1:null]}),children:[(0,v.jsx)(m,{order:F==="done"?re:te,current:F==="done"?0:1,renderSlide:me,revenueTitle:y}),$]})]})]})}export{w as default};