var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Contract playbook review” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, file and folder names, and coloured pills — keep them where
    the sentence needs them. */}

<Copy k="title">Contract review against your playbook</Copy>
<Copy k="subtitle">
  Reads your contract and playbook, scores each clause, and drafts fixes for
  the gaps.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the matter folder and describe the review you need.
</Copy>
<Copy k="menu.category">Legal</Copy>
<Copy k="prompt">
  Review this MSA clause by clause against our contract playbook. For each
  clause, mark it green, yellow, or red against our standard, explain why in
  one or two sentences, and where it’s yellow or red draft the redline and
  the rationale I can send back to opposing counsel.
</Copy>

<Copy k="scene2.title">Cowork walks every clause</Copy>
<Copy k="scene2.sub">
  Reads the incoming paper and your playbook side by side, scoring each
  clause as it goes.
</Copy>
<Copy k="work.heading">Running {cmd}</Copy>
<Copy k="step1">Ironclad · pulled Acme MSA v3 from matter #2041</Copy>
<Copy k="step2">Google Drive · read {playbook}</Copy>
<Copy k="step3">Reading {fallback}</Copy>
<Copy k="step4">Comparing 23 clauses against playbook standard</Copy>
<Copy k="step5">
  Microsoft 365 · wrote tracked-change redlines to Acme-MSA-v3.docx
</Copy>
<Copy k="step6">Created Acme-MSA-clause-review.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read playbook and incoming paper</Copy>
<Copy k="prog2">Walk every clause against standard</Copy>
<Copy k="prog3">Draft redlines and rationale</Copy>
<Copy k="prog4">Write review to matter folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">Clause-by-clause, scored against your standard</Copy>
<Copy k="scene3.sub">
  Every deviation called out with a redline and counsel-ready rationale.
</Copy>
<Copy k="res.summary">Reviewed {count} · {green} · {yellow} · {red}</Copy>
<Copy k="res.summary.count">23 clauses</Copy>
<Copy k="res.summary.green">14 green</Copy>
<Copy k="res.summary.yellow">6 yellow</Copy>
<Copy k="res.summary.red">3 red</Copy>
<Copy k="pill.red">RED</Copy>
<Copy k="pill.yellow">YELLOW</Copy>
<Copy k="res.redline">Redline:</Copy>
<Copy k="res1">
  {pill}{clause} — caps at 1× fees; playbook floor is 2× with carve-outs.
  {redline} raise cap to 2× annual fees and exclude breaches of §6
  (Confidentiality) and §11 (IP Indemnity).
</Copy>
<Copy k="res1.clause">§8.2 Limitation of Liability</Copy>
<Copy k="res2">
  {pill}{clause} — mutual, but no third-party IP carve-out. {redline} add
  “including third-party IP claims arising from Licensor materials.”
  Fallback: cap IP indemnity at 3× fees.
</Copy>
<Copy k="res2.clause">§11.4 Indemnification</Copy>
<Copy k="res3">
  {pill}{clause} — 60-day opt-out vs our 30-day standard. {redline} “either
  party may terminate on thirty (30) days’ written notice prior to the
  renewal date.”
</Copy>
<Copy k="res3.clause">§5.3 Auto-Renewal</Copy>
<Copy k="chip.name">Acme MSA clause review</Copy>
<Copy k="chip.meta">Document · DOCX · 34 KB · written to {folder}</Copy>

<Copy k="scene4.title">Run it on every new contract</Copy>
<Copy k="scene4.sub">
  Paper arrives, the first-pass review is already waiting in the
  counterparty folder.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 9am, check {folder}/Intake for new files and run {cmd} on
  each one, writing the clause table and redline to a counterparty
  subfolder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">First-pass contract review</Copy>
<Copy k="card.body">
  Each weekday at 9am, checks {folder}/Intake for new files, runs {cmd} on
  each one, and writes the clause table and redlined draft to a counterparty
  subfolder.
</Copy>
<Copy k="card.when">
  Weekdays at {time} — checks {folder}/Intake for new files
</Copy>
<Copy k="card.when.time">9 am</Copy>

<Copy k="end">
  Every incoming contract lands with a clause-by-clause review {br} and
  suggested changes ready before the first read.
</Copy>
`;export{e as default};