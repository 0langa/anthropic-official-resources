var e=`---
kind: widget-copy
---

{/* Hero demo film for the “NDA review” use case. Scene text is typed on
    screen character by character, so keep sentences natural at any length;
    {tokens} are filled by the widget with its simulated commands and folder
    names — keep them where the sentence needs them. */}

<Copy k="title">NDA review</Copy>
<Copy k="subtitle">
  Reads incoming contract drafts and your playbook, writes which terms to
  accept or change.
</Copy>

<Copy k="scene1.title">Point Cowork at the inbound draft</Copy>
<Copy k="scene1.sub">
  The folder already holds the counterparty’s NDA, your playbook, and your
  standard template.
</Copy>
<Copy k="menu.kind">Commercial Legal</Copy>
<Copy k="prompt">
  Review this inbound NDA against our playbook and our standard mutual
  template. Flag every clause that departs from our positions — what the
  term is, what they’re asking for, what we’d accept or push back on.
</Copy>

<Copy k="scene2.title">Cowork reads each clause against your positions</Copy>
<Copy k="scene2.sub">
  The Progress card in the right rail tracks each step as it completes.
</Copy>
<Copy k="work.heading">Reviewing NDA against playbook</Copy>
<Copy k="step1">Reading mutual-nda-northwind.docx</Copy>
<Copy k="step2">Reading nda-playbook.pdf</Copy>
<Copy k="step3">Reading standard-mutual-nda.docx</Copy>
<Copy k="step4">Comparing clauses against playbook</Copy>
<Copy k="step5">Writing nda-review-2026-04.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the inbound draft</Copy>
<Copy k="prog2">Read playbook and template</Copy>
<Copy k="prog3">Compare each clause</Copy>
<Copy k="prog4">Write summary to folder</Copy>

<Copy k="scene3.title">The flagged terms, ready for your call</Copy>
<Copy k="scene3.sub">
  Each item names the clause, what they’re asking for, and your position.
</Copy>
<Copy k="term1">
  {lead} — five years with auto-renew, against our three-year mutual
  standard. Push back to three years with opt-in renewal only; this is a
  routine ask and our fallback position holds.
</Copy>
<Copy k="term1.lead">Term (3.2)</Copy>
<Copy k="term2">
  {lead} — broad catch-all with no marking requirement. Accept the catch-all
  but add our standard carve-outs for residuals and independently developed
  material.
</Copy>
<Copy k="term2.lead">Confidential Information (1.1)</Copy>
<Copy k="term3">
  {lead} — uncapped indirect damages. Cap at twelve months’ fees. Red-flag
  clause; escalate to counsel if they won’t move on the cap.
</Copy>
<Copy k="term3.lead">Limitation of liability (7.1)</Copy>
<Copy k="chip.name">Northwind NDA — flagged terms</Copy>
<Copy k="chip.meta">Document · DOCX · 18 KB</Copy>
<Copy k="saved">Saved to {folder}</Copy>

<Copy k="scene4.title">Make it run every weekday</Copy>
<Copy k="scene4.sub">
  Type {cmd} and the customized skill triages each morning’s new drafts
  before you open your inbox.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 9am -- check {inbox} for new files, run {cmd} on each, and
  write a flagged-terms summary to the folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Morning NDA triage</Copy>
<Copy k="card.body">
  Each weekday morning, checks {inbox} for new drafts, runs {cmd} on each,
  and writes a flagged-terms summary to the same folder.
</Copy>
<Copy k="card.when">Weekdays at {time} — checks {inbox} for new files</Copy>
<Copy k="card.when.time">9:00 AM</Copy>

<Copy k="end">
  Every new NDA is screened against your playbook — cleared ones route to
  signature, exceptions reach counsel.
</Copy>
`;export{e as default};