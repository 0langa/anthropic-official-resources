var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Account research brief” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, file and folder names — keep them where the sentence needs
    them. */}

<Copy k="title">Account research brief</Copy>
<Copy k="subtitle">
  Cowork pulls Salesforce, recent news, and your call notes and writes a
  one-page brief.
</Copy>

<Copy k="scene1.title">Describe the brief you want</Copy>
<Copy k="scene1.sub">
  Point at the target list and name the sources — the Sales plugin
  recognizes the task.
</Copy>
<Copy k="prompt">
  Build a one-page brief on the next account in my Q2 target list. Pull
  recent news, leadership moves, and hiring signals from the web, our
  history from Salesforce, and any prior calls in Gong. End with the likely
  priorities they’re working through right now and the two or three people
  worth reaching first.
</Copy>

<Copy k="scene2.title">Cowork pulls the signals together</Copy>
<Copy k="scene2.sub">
  Target list, Salesforce history, Gong calls, public news —
  cross-referenced in one pass.
</Copy>
<Copy k="work.heading">Researching account from connected sources</Copy>
<Copy k="step1">Reading {file}</Copy>
<Copy k="step2">Searching Salesforce account history</Copy>
<Copy k="step3">Pulling prior calls from Gong</Copy>
<Copy k="step4">Researching news and hiring signals</Copy>
<Copy k="step5">Writing account-research-brief-2026-04.docx</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the target list</Copy>
<Copy k="prog2">Pull CRM and call history</Copy>
<Copy k="prog3">Research public signals</Copy>
<Copy k="prog4">Write brief to folder</Copy>

<Copy k="scene3.title">The brief, in your folder</Copy>
<Copy k="scene3.sub">
  What’s changed, where you left off, and who to reach first.
</Copy>
<Copy k="brief1">
  {lead} New CRO hired in February from a direct competitor; eleven RevOps
  roles posted since. Series C closed in March — press release leads with
  EMEA expansion.
</Copy>
<Copy k="brief1.lead">Recent signals.</Copy>
<Copy k="brief2">
  {lead} Two closed-lost in 2024, both stalled at security review. Last Gong
  call flagged SOC 2 as the blocker — that shipped on our side in Q4.
</Copy>
<Copy k="brief2.lead">Our history.</Copy>
<Copy k="brief3">
  {lead} Maya Chen (new CRO — warm intro via your Northwind champion), David
  Okafor (VP RevOps, owns the open roles), Priya Shah (security lead from
  the 2024 review).
</Copy>
<Copy k="brief3.lead">Reach first.</Copy>
<Copy k="chip.name">Account brief — Maya Chen</Copy>
<Copy k="chip.meta">Document · DOCX · 18 KB · {folder}</Copy>

<Copy k="scene4.title">Make it run every Monday</Copy>
<Copy k="scene4.sub">
  Type {cmd} and the customized skill works through your list before the
  prospecting block.
</Copy>
<Copy k="sched.prompt">
  Every Monday at 8am, run {cmd} on the next five untouched accounts in
  {file} and write each brief to the {folder} folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Weekly account briefs</Copy>
<Copy k="card.body">
  Runs {cmd} on the next five untouched accounts in your Q2 target list and
  writes each brief to the territory folder.
</Copy>
<Copy k="card.when">Every {time}</Copy>
<Copy k="card.when.time">Monday at 8:00 AM</Copy>

<Copy k="end">Five briefs in your folder before Monday’s call block.</Copy>
`;export{e as default};