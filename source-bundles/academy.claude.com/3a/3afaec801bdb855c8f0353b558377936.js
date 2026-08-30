var e=`---
kind: widget-copy
---

{/* Hero demo film for the “M&A diligence” use case. Scene text is typed on
    screen character by character, so keep sentences natural at any length;
    {tokens} are filled by the widget with its simulated commands, file and
    folder names, highlighted terms, and a line break — keep them where the
    sentence needs them. */}

<Copy k="title">M&A diligence</Copy>
<Copy k="subtitle">
  Reads the data room, flags the material issues, and drafts the diligence
  summary with citations.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Connect the data room and describe the diligence you need — the skill
  reads everything.
</Copy>
<Copy k="menu.category">Corporate Legal</Copy>
<Copy k="prompt">
  Read every document in the connected data room. Categorize each by type,
  then for the material contracts extract counterparty, term,
  change-of-control, assignment, and consent provisions. Flag the material
  issues and draft the diligence summary with a citation back to the source
  document and section for every entry.
</Copy>

<Copy k="scene2.title">Cowork reads and categorizes the room</Copy>
<Copy k="scene2.sub">
  Every document classified, the material contracts extracted, every issue
  cited to its source.
</Copy>
<Copy k="work.heading">Running {cmd}</Copy>
<Copy k="step1">Datasite · pulled 412 documents from Project Silvern VDR</Copy>
<Copy k="step2">
  Categorized 412 docs — 84 contracts · 128 corporate · 200 other
</Copy>
<Copy k="step3">
  Extracting CoC, assignment, and consent provisions from 84 contracts
</Copy>
<Copy k="step4">Box · cross-referenced {list}</Copy>
<Copy k="step5">Microsoft 365 · wrote {tracker} with citations</Copy>
<Copy k="step6">Created Project-Silvern-diligence-summary.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read and categorize the data room</Copy>
<Copy k="prog2">Extract key contract provisions</Copy>
<Copy k="prog3">Flag material issues with citations</Copy>
<Copy k="prog4">Draft the diligence summary</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">Material issues flagged, every line cited</Copy>
<Copy k="scene3.sub">
  Change-of-control, consent, and assignment risks called out with the
  source document and section.
</Copy>
<Copy k="result.summary">Reviewed {docs} · {contracts} · {issues} flagged</Copy>
<Copy k="result.summary.docs">412 documents</Copy>
<Copy k="result.summary.contracts">84 contracts</Copy>
<Copy k="result.summary.issues">11 material issues</Copy>
<Copy k="issue1">
  {sev}{title} — counterparty consent required on any transfer of more than
  50% equity; 90-day cure. {source} VDR 3.2.14 / p.18.
</Copy>
<Copy k="issue1.sev">RED</Copy>
<Copy k="issue1.title">Change of control — Acme Supply Agreement §12.3</Copy>
<Copy k="issue1.source">Source:</Copy>
<Copy k="issue2">
  {sev}{title} — exclusive distribution in EMEA through 2028; assignment
  barred without consent. {source} VDR 3.2.07 / p.6.
</Copy>
<Copy k="issue2.sev">RED</Copy>
<Copy k="issue2.title">
  Exclusivity — HeroCorp Distribution Agreement §4.1
</Copy>
<Copy k="issue2.source">Source:</Copy>
<Copy k="issue3">
  {sev}{title} — two of four founder IP-assignment agreements missing from
  VDR §5.1. {source} VDR 5.1 index vs cap-table.xlsx.
</Copy>
<Copy k="issue3.sev">YELLOW</Copy>
<Copy k="issue3.title">IP assignment — Founder agreements</Copy>
<Copy k="issue3.source">Source:</Copy>
<Copy k="chip.name">Project Silvern diligence summary</Copy>
<Copy k="chip.meta">Document · DOCX · 92 KB · written to {folder}</Copy>

<Copy k="scene4.title">Re-run on every new upload during the deal</Copy>
<Copy k="scene4.sub">
  New documents land in the VDR, the issues tracker updates before the next
  deal call.
</Copy>
<Copy k="sched.prompt">
  Daily at 7am during the deal, run {cmd} on new uploads to the Project
  Silvern VDR and append flagged issues to the tracker with citations.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Project Silvern diligence refresh</Copy>
<Copy k="card.body">
  Daily at 7am during the deal, runs {cmd} on new uploads to the Project
  Silvern VDR and appends flagged issues to the tracker with citations.
</Copy>
<Copy k="card.when">Daily at {time} — until deal close</Copy>
<Copy k="card.when.time">7 am</Copy>

<Copy k="end">
  Material issues flagged from the whole room{br}— every line cited to its
  source — before the deal call.
</Copy>
`;export{e as default};