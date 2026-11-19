import{r as e}from"../../../../rolldown-runtime-kx061hj1.js";import{At as t,Nt as n,qa as r}from"../../../../packages-knahfq9p.js";import{i,r as a}from"../../../../react-ml7fx0sn.js";import{f as ee}from"../../../../ResourceWidget-mycgndnm.js";import{x as te}from"../../../../snap-ef9sqeaw.js";import{r as o,t as s}from"../../../../ClaudeDesignTutorialKit-kmg8ikph.js";import{a as ne,i as c,o as l,r as u,s as re,t as d}from"../../../../_deck-hxuc8k3a.js";import{a as f,i as p,n as ie,o as ae,r as oe,s as m,t as h}from"../../../../_slides-hg7r06aq.js";var g=e(i(),1),_=a(),v=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Cpath d='M 2 26 L 2 14 A 12 12 0 1 1 14 26 Z' fill='%23000' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E") 2 26, crosshair`,y={initial:"J",hue:"#7a6ba8"},se=78,ce=700,le=1400,b=700,ue={1:{task:"task.hand",done:"caption.hand.done"},2:{task:"task.comment",done:"caption.comment.done"},3:{task:"task.ask",done:"caption.end"}},x=[1,2,3],S=`
  ${m}
  ${p}

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
  .cd .sd-reflow .se-thumb { animation: sl-fade 320ms ${d} both; }
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
    cursor: ${v};
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
    background: ${y.hue};
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
`;function C(){let e=ee(),i=te(),a=n(),d=(0,g.useId)(),[p,m]=(0,g.useState)(1),[v,C]=(0,g.useState)(u),[w,T]=(0,g.useState)(!1),[E,D]=(0,g.useState)(!1),[O,k]=(0,g.useState)(!1),[A,j]=(0,g.useState)("target"),[M,N]=(0,g.useState)(""),[P,F]=(0,g.useState)("idle"),I=(0,g.useRef)(void 0),L=(0,g.useRef)(null),R=(0,g.useRef)(null),z=(0,g.useRef)(null),B=(0,g.useRef)(null),V=(0,g.useRef)(null),H=(e,t)=>{window.clearTimeout(I.current),I.current=window.setTimeout(e,t)};(0,g.useEffect)(()=>()=>window.clearTimeout(I.current),[]);let U=[E,A==="done",P==="done"][p-1],W=p===3&&U;(0,g.useEffect)(()=>{W&&i()},[W,i]),(0,g.useEffect)(()=>{let e=L.current;e!==null&&(L.current=null,(e==="chart"?R.current?.querySelector("button.sl-chart"):{draft:z,ask:B,next:V}[e].current)?.focus({preventScroll:!0}))},[p,A,P]);let G=()=>{window.clearTimeout(I.current),T(!1),D(!0)},de=e=>{let t=e.slice(0,se);if(C(t),t.trim()===""||t==="Revenue finished Q3 at $48.2M, 4% above plan"){window.clearTimeout(I.current),T(!1),D(!1);return}T(!0),H(G,ce)},fe=e=>{let t=new AbortController,{signal:n}=t,r=()=>t.abort();e.addEventListener("click",()=>{e.setSelectionRange(0,e.value.length),window.setTimeout(r,b)},{signal:n}),e.addEventListener("beforeinput",r,{signal:n}),e.addEventListener("blur",r,{signal:n})},pe=e=>{!O&&e.key==="Enter"?(e.preventDefault(),e.currentTarget.select(),k(!0)):O&&e.key==="Escape"&&(e.preventDefault(),k(!1))},K=e=>{L.current="next",e(a?"done":"working"),a||H(()=>e("done"),le)},me=()=>{N(e("ui.commentDraft")),j("compose"),L.current="draft"},q=()=>{M.trim()!==""&&K(j)},he=e=>{e.key==="Escape"?(e.preventDefault(),j("target"),L.current="chart"):e.key==="Enter"&&!e.shiftKey&&!e.nativeEvent.isComposing&&(e.preventDefault(),q())},J=()=>{U&&(window.clearTimeout(I.current),T(!1),k(!1),p===1?(m(2),L.current="chart"):p===2?(m(3),L.current="ask"):(m(1),C(u),D(!1),j("target"),F("idle")))},Y=A==="working"||A==="done",X=p===3&&P==="idle",Z=(0,_.jsx)("span",{className:"sd-av","aria-hidden":"true",children:y.initial}),Q=(0,_.jsx)("span",{className:"sd-av is-claude","aria-hidden":"true",children:(0,_.jsx)(t,{size:12,color:"#ffffff",state:A==="working"?"thinking":void 0})}),ge=(t,n,r)=>{let i=!r&&t==="revenue",a=(0,_.jsx)(re,{id:t,page:n,thumb:r,revenueTitle:v,revenueChanged:A==="done",onRevenueTitle:i&&p===1?de:void 0,titleInputLabel:e("aria.title"),titleField:{readOnly:!O,onDoubleClick:e=>{O||(e.currentTarget.select(),k(!0))},onPointerDown:e=>{e.pointerType!=="mouse"&&!O&&(fe(e.currentTarget),k(!0))},onKeyDown:pe,onBlur:()=>k(!1)},onChartClick:i&&p===2&&A==="target"?me:void 0,chartButtonLabel:e("aria.chart"),chartCallout:(0,_.jsx)("span",{className:"sd-mark","aria-hidden":"true",children:e("mark.chart")})});return r?a:(0,_.jsxs)("div",{className:o("sd-sw",O&&"is-editing"),ref:R,onBlur:w?G:void 0,children:[a,i&&p===1?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("span",{className:"sd-sel","aria-hidden":"true",children:[(0,_.jsx)("i",{}),(0,_.jsx)("i",{}),(0,_.jsx)("i",{}),(0,_.jsx)("i",{})]}),(0,_.jsx)(f,{})]}):null,i&&p===2&&A!=="target"?(0,_.jsx)("span",{className:o("sd-pin",A==="compose"&&"is-unread"),"aria-hidden":"true",children:A==="working"?Q:Z}):null]})},$=null;return p===2&&A==="compose"?$=(0,_.jsxs)("div",{className:"sd-cc",role:"group","aria-label":e("ui.commentAria"),children:[(0,_.jsxs)("div",{className:"sd-tagrow",children:[(0,_.jsx)("span",{id:d,"aria-hidden":"true",ref:e=>{e?.parentElement?.style.setProperty("--sd-tag-w",`${Math.ceil(e.getBoundingClientRect().width)}px`)},children:(0,_.jsx)("span",{className:"cd-ctag",children:e("ui.claudeTag")})}),(0,_.jsx)("textarea",{ref:z,rows:2,value:M,"aria-label":e("ui.commentAria"),"aria-describedby":d,onChange:e=>N(e.target.value),onKeyDown:he})]}),(0,_.jsxs)("div",{className:"sd-acts",children:[(0,_.jsxs)("span",{children:[(0,_.jsx)("i",{"aria-hidden":"true",children:(0,_.jsx)(r,{name:"Check",size:"xs"})}),e("ui.sendToClaude")]}),(0,_.jsx)("button",{type:"button",className:"sd-go","aria-label":e("ui.sendToClaude"),"aria-disabled":M.trim()==="",onClick:q,children:(0,_.jsx)(r,{name:"ArrowUp",size:"sm"})})]})]}):p===2&&Y&&($=(0,_.jsxs)("div",{className:"sd-cc",role:"group","aria-label":e("ui.pin"),children:[(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:"sd-by",children:[Z,(0,_.jsx)("i",{"aria-hidden":"true"}),(0,_.jsx)("small",{children:e("ui.now")}),(0,_.jsxs)("span",{"aria-hidden":"true",children:[(0,_.jsx)(h,{icon:(0,_.jsx)(r,{name:"Check",size:"sm"})}),(0,_.jsx)(h,{icon:(0,_.jsx)(r,{name:"DotsHorizontal",size:"sm"})}),(0,_.jsx)(h,{icon:(0,_.jsx)(r,{name:"X",size:"sm"})})]})]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("span",{className:"cd-at",children:e("ui.claudeTag")})," ",M]})]}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:"sd-by",children:[Q,(0,_.jsx)("b",{children:e("ui.claude")}),(0,_.jsx)("small",{children:e("ui.now")})]}),A==="done"?(0,_.jsx)("p",{children:e("claude.commentReply")}):(0,_.jsx)("p",{className:"is-status",children:e("ui.working")})]})]})),(0,_.jsxs)(s,{css:S,cssId:"academy-cd-steer",children:[(0,_.jsx)(c,{}),(0,_.jsxs)("div",{className:"sd-task",children:[(0,_.jsxs)("span",{className:"sd-step",children:[e("step.progress",{n:p,total:x.length}),(0,_.jsx)("span",{className:"sd-bars","aria-hidden":"true",children:x.map(e=>(0,_.jsx)("i",{className:o(p>=e&&"is-on")},e))})]}),(0,_.jsx)("p",{"aria-live":"polite",className:o(U&&"is-done"),children:e(ue[p][U?"done":"task"])}),(0,_.jsx)("button",{ref:V,type:"button",className:o("cd-btn sd-next",U&&"is-ready"),"aria-disabled":!U,onClick:J,children:e(p===3?"action.restart":"action.next")})]}),(0,_.jsxs)("div",{className:"cd-win cw-win sd-win",children:[(0,_.jsxs)("div",{className:"cw-chat",children:[(0,_.jsxs)("div",{className:o("sd-thread",P!=="idle"&&"is-asked"),children:[(0,_.jsx)("div",{className:"cw-user",children:e("chat.request")}),(0,_.jsx)("p",{className:"cw-claude",children:e("chat.last")}),(0,_.jsx)(ie,{}),P==="idle"?null:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"cw-user",children:e("chat.ask")}),P==="done"?(0,_.jsx)("p",{className:"cw-claude",children:e("chat.reply")}):(0,_.jsx)("div",{className:"cw-claude","aria-hidden":"true",children:(0,_.jsx)(t,{size:24,color:"#d97757",state:"thinking"})})]})]}),(0,_.jsxs)("button",{ref:B,type:"button",className:"sd-box",disabled:!X,onClick:()=>K(F),children:[(0,_.jsx)("span",{children:e(X?"chat.ask":"ui.composerPlaceholder")}),(0,_.jsxs)("span",{"aria-hidden":"true",children:[(0,_.jsx)(r,{name:"Add",size:"md"}),(0,_.jsx)("span",{className:"sd-go",children:(0,_.jsx)(r,{name:"ArrowUp",size:"md"})})]})]})]}),(0,_.jsxs)(oe,{className:o(P==="done"&&"sd-reflow"),afterTitle:w?(0,_.jsx)("span",{className:"sd-save",role:"img","aria-label":e("ui.saving")}):null,comment:(0,_.jsxs)("span",{className:o("cd-gb",p===2&&"is-pressed",Y&&"is-text"),"aria-hidden":"true",children:[(0,_.jsx)(r,{name:p===2?"ChatFilled":"Chat",size:"sm"}),Y?1:null]}),children:[(0,_.jsx)(ae,{order:P==="done"?l:ne,current:P==="done"?0:1,renderSlide:ge,revenueTitle:v}),$]})]})]})}export{C as default};