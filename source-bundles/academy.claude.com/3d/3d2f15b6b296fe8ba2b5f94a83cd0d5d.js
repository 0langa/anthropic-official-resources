var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Regulatory analysis” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, file and folder names, bold lead-ins, and deadline pills —
    keep them where the sentence needs them. */}

<Copy k="title">Regulatory analysis</Copy>
<Copy k="subtitle">
  Reads the regulation and your policies, writes what to act on and by when.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the regulation folder and describe the applicability call
  you need.
</Copy>
<Copy k="menu.category">Legal</Copy>
<Copy k="prompt">
  Read this regulation against our product descriptions and current policies
  in the folder. Tell me what changed from the prior rule, which provisions
  apply to us and why, and for each one what we need to do and by when.
  Write it as actionable guidance our product and compliance leads can work
  from directly.
</Copy>

<Copy k="scene2.title">Cowork reads it against your products</Copy>
<Copy k="scene2.sub">
  It pulls your product context and the prior rule, then maps each
  provision.
</Copy>
<Copy k="work.heading">Running {cmd}</Copy>
<Copy k="step1">Reading {regulation}</Copy>
<Copy k="step2">Google Drive · read product-descriptions and 3 policy docs</Copy>
<Copy k="step3">
  Microsoft 365 · pulled prior 2021 proposal from SharePoint
</Copy>
<Copy k="step4">Comparing 47 provisions against our three product lines</Copy>
<Copy k="step5">Created {brief}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the regulation text</Copy>
<Copy k="prog2">Pull product context and prior rule</Copy>
<Copy k="prog3">Map provisions to our products</Copy>
<Copy k="prog4">Write the applicability brief</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The applicability brief</Copy>
<Copy k="scene3.sub">
  What changed, which articles apply to your products, and what to do by
  when — ready to circulate.
</Copy>
<Copy k="para1">
  {lead} — Helios Match screens job applicants, which the final text now
  classifies high-risk. Conformity assessment, CE marking, and EU-database
  registration required before continued placement on market. {due}
</Copy>
<Copy k="para1.lead">Art. 6(2) + Annex III §4(a)</Copy>
<Copy k="para1.due">by 2 Aug 2027</Copy>
<Copy k="para2">
  {lead} — new since the 2021 draft. Studio’s generated images and audio
  must carry machine-readable provenance marks plus a user-facing AI
  disclosure. Earliest of our obligations. {due}
</Copy>
<Copy k="para2.lead">Art. 50(2)</Copy>
<Copy k="para2.due">by 2 Aug 2026</Copy>
<Copy k="para3">
  {lead} — both in-scope products need a maintained technical-documentation
  pack (training data, testing, risk management). Compile alongside the
  conformity work; it gates the Art. 6 filing. {due}
</Copy>
<Copy k="para3.lead">Art. 11 + Annex IV</Copy>
<Copy k="para3.due">with Art. 6</Copy>
<Copy k="para4">
  {lead} — Atlas Analytics matches no Annex III category and is not a GPAI
  model. No new obligations; current privacy policy holds.
</Copy>
<Copy k="para4.lead">Out of scope</Copy>
<Copy k="chip.name">EU AI Act applicability brief</Copy>
<Copy k="chip.meta">Document · DOCX · 24 KB · written to {folder}</Copy>

<Copy k="scene4.title">Run it on every new regulation</Copy>
<Copy k="scene4.sub">
  Schedule the skill on a watch folder and the brief drafts itself the
  moment a rule drops.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 9am, check {watch} for any new file and run {cmd} and write
  the brief to a subfolder named for the regulation.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">New-regulation applicability brief</Copy>
<Copy k="card.body">
  Runs {cmd} on every new file in {watch} and writes the brief and action
  table to a subfolder named for the regulation.
</Copy>
<Copy k="card.when">Weekdays at 9am</Copy>

<Copy k="end">
  Every regulation that drops, what applies to your products and what to do
  is written before anyone calls.
</Copy>
`;export{e as default};