import{r as e}from"../../../../../../rolldown-runtime-kx061hj1.js";import{em as t,rm as n}from"../../../../../../content-de-meta-ifw6afqc.js";import{d as r}from"../../../../../../WidgetCopy-c33g1t0g.js";var i=e(n(),1),a=t(),o=[{key:"mr",name:"meeting-recap",entries:[{key:"mr-skill",label:"SKILL.md",icon:"file"}]},{key:"bm",name:"board-memo",entries:[{key:"bm-skill",label:"SKILL.md",icon:"file"},{key:"bm-assets",label:"assets/",icon:"folder",leaves:["brand-template.pptx"]},{key:"bm-references",label:"references/",icon:"folder",leaves:["2025-Q4-board-memo.docx","2026-Q1-board-memo.docx"]}]},{key:"va",name:"variance-analysis",entries:[{key:"va-skill",label:"SKILL.md",icon:"file"},{key:"va-scripts",label:"scripts/",icon:"folder",leaves:["variance.py"]}]}],s={"mr-skill":{skill:"meeting-recap",name:"SKILL.md",preview:{type:"code",text:`---
name: meeting-recap
description: Write a recap after any meeting with action items
---
# Meeting recap
## When to use
After any meeting with action items.
## Format
- Decisions
- Action items (owner + date)
- Open questions
## Length
Under 150 words.`}},"bm-skill":{skill:"board-memo",name:"SKILL.md",preview:{type:"code",text:`---
name: board-memo
description: Draft the monthly board memo in our house format
---
# Board memo
## When to use
Monthly close. Quarterly board prep.
## Process
1. Pull variance from the close folder
2. Section order: Variance → Forecast → Risks → Asks
3. Lead with churn-adjusted ARR`}},"bm-assets":{skill:"board-memo",name:"assets/",preview:{type:"asset",fileName:"brand-template.pptx"}},"bm-references":{skill:"board-memo",name:"references/",preview:{type:"refs",files:["2025-Q4-board-memo.docx","2026-Q1-board-memo.docx"]}},"va-skill":{skill:"variance-analysis",name:"SKILL.md",preview:{type:"code",text:`---
name: variance-analysis
description: Compare actuals vs plan and write up material variances
---
# Variance analysis
## Sources
Actuals: Finance/close/{YYYY-MM}/
Plan: Finance/plan/{YYYY}-plan.xlsx
## What counts as material
>5% AND >$50K. Both, not either.
## Run
1. Call scripts/variance.py
2. One paragraph per material line`}},"va-scripts":{skill:"variance-analysis",name:"scripts/",preview:{type:"code",text:`# scripts/variance.py
# Same calculation every month, no rounding drift.
def variance(month):
    actuals  = read_close(month)
    plan     = read_plan(month)
    rows = []
    for line in actuals.lines:
        delta_pct = (line.actual - plan[line.id]) / plan[line.id]
        delta_abs = line.actual - plan[line.id]
        if abs(delta_pct) > 0.05 and abs(delta_abs) > 50_000:
            rows.append((line.name, delta_pct, delta_abs))
    return rows`}}};function c({className:e}){return(0,a.jsx)("svg",{viewBox:"0 0 13 11",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinejoin:"round",className:`w-[13px] shrink-0 ${e??""}`,"aria-hidden":"true",children:(0,a.jsx)("path",{d:"M0.5 2a.5.5 0 0 1 .5-.5h3l1 1h7.5a.5.5 0 0 1 .5.5v6.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"})})}function l({className:e}){return(0,a.jsxs)("svg",{viewBox:"0 0 11 13",fill:"none",stroke:"currentColor",strokeWidth:1.4,strokeLinejoin:"round",className:`w-[11px] shrink-0 ${e??""}`,"aria-hidden":"true",children:[(0,a.jsx)("path",{d:"M2 1h5l3 3v8H2z"}),(0,a.jsx)("path",{d:"M7 1v3h3"})]})}function u(){return(0,a.jsxs)("div",{className:"relative h-12 w-16 shrink-0 rounded",style:{background:"linear-gradient(135deg, #D97757 0%, #B85A3F 100%)"},"aria-hidden":"true",children:[(0,a.jsx)("div",{className:"absolute left-2 right-3.5 top-2 h-1.5 rounded-[1px]",style:{background:"rgba(255,255,255,0.65)"}}),(0,a.jsx)("div",{className:"absolute left-2 top-[18px] h-4 w-6 rounded-[1px]",style:{background:"rgba(255,255,255,0.4)"}})]})}function d({sectionKey:e}){let t=r(),n=s[e];return(0,a.jsxs)("div",{className:"flex flex-col gap-md",children:[(0,a.jsxs)("div",{className:"flex flex-wrap items-baseline gap-2",children:[(0,a.jsx)("span",{className:"mr-1 text-xs font-semibold uppercase tracking-widest text-accent",children:n.skill}),(0,a.jsx)("span",{className:"font-mono text-sm font-semibold text-primary",children:n.name}),(0,a.jsx)("span",{className:"text-xs font-semibold uppercase tracking-widest text-muted",children:t(`section.${e}.label`)})]}),(0,a.jsx)("p",{className:"m-0 text-sm leading-relaxed text-primary",children:t(`section.${e}.what`)}),n.preview.type==="code"&&(0,a.jsx)("pre",{className:"m-0 overflow-x-auto whitespace-pre rounded-lg border border-strong bg-surface-2 p-3 font-mono text-xs leading-relaxed text-secondary",children:n.preview.text}),n.preview.type==="asset"&&(0,a.jsxs)("div",{className:"flex items-center gap-3 rounded-lg border border-strong bg-surface-2 p-3",children:[(0,a.jsx)(u,{}),(0,a.jsx)("span",{className:"font-mono text-xs text-secondary",children:n.preview.fileName})]}),n.preview.type==="refs"&&(0,a.jsx)("div",{className:"flex flex-col gap-1.5",children:n.preview.files.map(e=>(0,a.jsxs)("div",{className:"flex items-center gap-2 rounded-md border border-strong bg-surface-2 px-3 py-2 font-mono text-xs text-secondary",children:[(0,a.jsx)(l,{className:"text-muted"}),(0,a.jsx)("span",{children:e})]},e))}),(0,a.jsxs)("div",{className:"rounded-lg border border-success bg-success p-3 text-sm leading-relaxed text-primary",children:[(0,a.jsx)("span",{className:"mb-1 block text-xs font-semibold uppercase tracking-widest text-success",children:t("useLabel")}),t(`section.${e}.use`)]})]})}function f(){let e=r(),[t,n]=(0,i.useState)("mr"),[s,u]=(0,i.useState)(null),[f,p]=(0,i.useState)(!1),m=o.find(e=>e.key===t)??o[0],h=e=>{n(e.key),u(null),p(!0)};return(0,a.jsxs)("div",{className:"text-primary",children:[(0,a.jsx)("p",{className:"m-0 mb-1 ml-1 text-xs font-semibold uppercase tracking-widest text-muted",children:e("kicker")}),(0,a.jsx)("p",{className:"m-0 mx-1 mb-3.5 text-sm leading-relaxed text-secondary",children:e.rich("intro",{lead:e=>(0,a.jsx)("strong",{className:"font-semibold text-primary",children:e})})}),(0,a.jsx)("div",{className:"mb-3 inline-flex rounded-full border border-strong bg-surface-2 p-[3px]",children:o.map(e=>(0,a.jsx)("button",{type:"button","aria-pressed":e.key===t,onClick:()=>h(e),className:`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${e.key===t?"bg-surface-0 text-primary shadow-sm":"text-muted hover:text-primary"}`,children:e.name},e.key))}),(0,a.jsxs)("div",{className:"grid gap-3.5 sm:grid-cols-[minmax(0,240px)_minmax(0,1fr)]",children:[(0,a.jsxs)("div",{className:"rounded-card border border-strong bg-surface-1 px-3 py-3.5",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 px-1.5 py-1 font-mono text-xs font-semibold text-primary",children:[(0,a.jsx)(c,{className:"text-accent"}),(0,a.jsxs)("span",{children:[m.name,"/"]})]}),(0,a.jsx)("div",{className:"ml-3 mt-1 border-l border-dashed border-strong pl-2.5",children:m.entries.map(e=>{let t=s===e.key;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("button",{type:"button","aria-pressed":t,onClick:()=>u(e.key),className:`my-px flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left font-mono text-xs transition-colors ${t?"bg-accent font-medium text-primary":"text-secondary hover:bg-surface-2 hover:text-primary"}`,children:[e.icon==="folder"?(0,a.jsx)(c,{className:"text-accent"}):(0,a.jsx)(l,{className:t?"text-accent":"text-muted"}),(0,a.jsx)("span",{children:e.label})]}),e.leaves&&(0,a.jsx)("div",{className:"ml-3 border-l border-dashed border-strong pl-2.5",children:e.leaves.map(e=>(0,a.jsxs)("div",{className:"flex items-center gap-2 px-2 py-1 font-mono text-xs text-muted",children:[(0,a.jsx)(l,{}),(0,a.jsx)("span",{children:e})]},e))})]},e.key)})})]}),(0,a.jsx)("div",{className:"flex min-h-[280px] flex-col rounded-card border border-strong bg-surface-1 p-md",children:s?(0,a.jsx)(d,{sectionKey:s}):(0,a.jsx)("div",{className:"flex flex-1 items-center justify-center px-5 py-8 text-center text-sm italic text-muted",children:f?e("empty.switch",{name:m.name}):e("empty.initial")})})]})]})}export{f as default};