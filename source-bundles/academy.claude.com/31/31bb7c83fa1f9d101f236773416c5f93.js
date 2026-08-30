var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Vendor risk review” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, folder and file names, bold lead-ins, citations and owners —
    keep them where the sentence needs them. */}

<Copy k="title">Vendor risk review</Copy>
<Copy k="subtitle">
  Reads vendor security and contract documents, writes a go/no-go decision
  memo.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the vendor folder and describe the review you need.
</Copy>
<Copy k="menu.category">Operations</Copy>
<Copy k="prompt">
  Read this vendor’s SOC 2, security questionnaire responses, DPA, and MSA in
  the folder. Score them against our risk framework, write the review memo
  with a clear go or no-go, and list the required mitigations with owners.
  Cite the source document and section for every finding.
</Copy>

<Copy k="scene2.title">Cowork reads the packet</Copy>
<Copy k="scene2.sub">
  SOC 2, questionnaire, DPA, and MSA scored against your framework while the
  rail tracks the plan.
</Copy>
<Copy k="work.heading">Running {cmd} on Northwind</Copy>
<Copy k="step1">
  Google Drive · pulled SOC 2 and questionnaire from Northwind folder
</Copy>
<Copy k="step2">Reading {dpa}</Copy>
<Copy k="step3">Ironclad · matched MSA to executed record IRN-2418</Copy>
<Copy k="step4">Reading {framework}</Copy>
<Copy k="step5">Comparing against Tier-2 data thresholds — 27 controls</Copy>
<Copy k="step6">Created {file}</Copy>
<Copy k="step.files">2 files</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the vendor packet</Copy>
<Copy k="prog2">Pull executed contracts</Copy>
<Copy k="prog3">Score against framework</Copy>
<Copy k="prog4">Draft go/no-go + mitigations</Copy>
<Copy k="prog5">Write memo to folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The scored memo</Copy>
<Copy k="scene3.sub">
  A go/no-go call, the mitigations to close it, and a citation for every
  finding.
</Copy>
<Copy k="memo.title">Northwind — Vendor Risk Review</Copy>
<Copy k="memo.verdict">GO · CONDITIONAL</Copy>
<Copy k="memo.summary">
  {tier} · 61 / 100 · Approve for production once the three mitigations below
  close.
</Copy>
<Copy k="memo.summary.tier">Tier 2 — Moderate</Copy>
<Copy k="find1">
  {lead} on the admin console — SAML is available but optional for tenant
  admins. {cite} → Require enforcement before go-live. {owner}
</Copy>
<Copy k="find1.lead">SSO not enforced</Copy>
<Copy k="find1.cite">SOC 2 §CC6.1 · Questionnaire Q14</Copy>
<Copy k="find1.owner">Owner: Security (D. Okafor)</Copy>
<Copy k="find2">
  {lead} defaults to indefinite; DPA §8.2 permits a 30-day delete on written
  request. {cite} → Add the 30-day term to the order form. {owner}
</Copy>
<Copy k="find2.lead">Data retention</Copy>
<Copy k="find2.cite">DPA §8.2 · Questionnaire Q31</Copy>
<Copy k="find2.owner">Owner: Legal (M. Chen)</Copy>
<Copy k="find3">
  {lead} — list last updated 11 months ago and MSA §12 has no change-notice
  SLA. {cite} → Add 30-day notice clause. {owner}
</Copy>
<Copy k="find3.lead">Subprocessor notice</Copy>
<Copy k="find3.cite">MSA §12 · SOC 2 §CC9.2</Copy>
<Copy k="find3.owner">Owner: Procurement (you)</Copy>
<Copy k="chip.name">Northwind vendor risk memo</Copy>
<Copy k="chip.meta">Document · DOCX · 24 KB · {folder}</Copy>

<Copy k="scene4.title">Run it on every new vendor</Copy>
<Copy k="scene4.sub">
  Schedule it once — the memo drafts itself the moment a packet lands.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 9am, check {folder} for any new risk-review folder and run {cmd}
  against the docs inside and write the scored memo to that folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Vendor risk first pass</Copy>
<Copy k="card.body">
  Runs {cmd} on every new risk-review folder under {folder} and writes the
  scored memo and mitigation list back to it.
</Copy>
<Copy k="card.when">Weekdays at 9am</Copy>

<Copy k="end">
  Every vendor packet gets a scored go/no-go memo in the folder before the
  review starts.
</Copy>
`;export{e as default};