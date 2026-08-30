var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Outside counsel management” use case. Scene text
    is typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, file and folder names, and coloured pills — keep them where
    the sentence needs them. */}

<Copy k="title">Outside counsel management</Copy>
<Copy k="subtitle">
  Pulls billing and matter data, flags off-pattern entries, and drafts the
  partner-call talking points.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Connect your matter system, point at the billing guidelines, and describe
  the review.
</Copy>
<Copy k="prompt">
  Pull the billing and matter data for this firm from the connected matter
  system. Flag entries that are off-pattern against our billing guidelines,
  list every matter drifting against its budget with the variance and
  driver, and draft the talking points for the relationship-partner
  conversation.
</Copy>

<Copy k="scene2.title">Cowork scores every line item</Copy>
<Copy k="scene2.sub">
  Entries checked against your billing guidelines, every matter measured
  against its budget.
</Copy>
<Copy k="work.heading">Reviewing outside counsel spend</Copy>
<Copy k="step1">
  iManage · pulled 1,284 invoice line items across 9 matters
</Copy>
<Copy k="step2">Reading {guidelines} from folder</Copy>
<Copy k="step3">
  Scoring 1,284 entries against guideline rates and staffing rules
</Copy>
<Copy k="step4">
  NetDocuments · pulled matter budgets and engagement letters
</Copy>
<Copy k="step5">Computing budget variance and driver per matter</Copy>
<Copy k="step6">Microsoft 365 · wrote {file}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Pull billing and matter data</Copy>
<Copy k="prog2">Flag off-pattern entries</Copy>
<Copy k="prog3">Surface budget drift by matter</Copy>
<Copy k="prog4">Draft the talking points</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">Off-pattern entries and budget drift, surfaced</Copy>
<Copy k="scene3.sub">
  Each flag cited to the guideline rule and the invoice line that broke it.
</Copy>
<Copy k="res.summary">
  Reviewed {entries} · {matters} · {offPattern} · {overBudget}
</Copy>
<Copy k="res.summary.entries">1,284 entries</Copy>
<Copy k="res.summary.matters">9 matters</Copy>
<Copy k="res.summary.offPattern">23 entries off-pattern</Copy>
<Copy k="res.summary.overBudget">3 over budget</Copy>
<Copy k="pill.red">RED</Copy>
<Copy k="pill.yellow">YELLOW</Copy>
<Copy k="res.source">Source:</Copy>
<Copy k="flag1">
  {pill}{lead} — single 14.5-hr entry “review documents; prepare for and
  attend meetings.” Guideline §3.2 caps blocks at 4 hr. {source} Inv 11284 /
  line 7.
</Copy>
<Copy k="flag1.lead">Block billing — Matter 2024-0087</Copy>
<Copy k="flag2">
  {pill}{lead} — 6.2 hr of legal research billed at partner rate ($925/hr).
  Guideline §4.1 routes research to associates. {source} Inv 11301 / lines
  3-5.
</Copy>
<Copy k="flag2.lead">Partner-rate research — Matter 2024-0112</Copy>
<Copy k="flag3">
  {pill}{lead} — $284k spent vs $210k budget (+35%); driver: expert-witness
  fees not in original scope. {source} {budgets}.
</Copy>
<Copy k="flag3.lead">Budget drift — Matter 2024-0087</Copy>
<Copy k="chip.name">OC review — Q2 talking points</Copy>
<Copy k="chip.meta">Document · DOCX · 64 KB · written to {folder}</Copy>

<Copy k="scene4.title">Turn it into a skill and run it every month</Copy>
<Copy k="scene4.sub">
  Save as {cmd} and schedule it — talking points land before each partner
  call.
</Copy>
<Copy k="sched.prompt">
  First business day of each month, run {cmd} against the prior month’s
  invoices and post the talking points to {folder}.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Outside counsel spend review</Copy>
<Copy k="card.body">
  First business day of each month, runs {cmd} against the prior month’s
  invoices, flags off-pattern entries and budget drift, and posts the
  talking points to {folder}.
</Copy>
<Copy k="card.when">Monthly · {time}</Copy>
<Copy k="card.when.time">first business day</Copy>

<Copy k="end">
  Off-pattern entries and budget drift surfaced before the partner call {br}
  — with the talking points already drafted.
</Copy>
`;export{e as default};