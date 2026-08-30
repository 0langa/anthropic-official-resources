var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Call prep sheet” use case. Scene text is typed
    on screen character by character, so keep sentences natural at any
    length; {tokens} are filled by the widget with its simulated commands,
    file and folder names — keep them where the sentence needs them. */}

<Copy k="title">Call Prep</Copy>
<Copy k="subtitle">
  Reads account records and call history, builds a brief with your asks and
  objections.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the account folder and name what the sheet should cover.
</Copy>
<Copy k="prompt">
  I’m meeting Northwind tomorrow. Read the Salesforce record, the last three
  Gong transcripts, the open opportunities, and the mutual action plan, and
  write me the prep sheet: where the deal is, what they care about right
  now, the two or three asks I should make on this call, and the objections
  most likely to come up with our response.
</Copy>

<Copy k="scene2.title">Cowork reads the deal</Copy>
<Copy k="scene2.sub">
  The opp, the last three calls, and the plan — pulled live while the
  Progress card tracks each step.
</Copy>
<Copy k="work.heading">Working on call prep</Copy>
<Copy k="step1">Salesforce · pulled Northwind opp ($240K ARR, Stage 4)</Copy>
<Copy k="step2">Gong · read 3 transcripts (Apr 10, Mar 27, Mar 14)</Copy>
<Copy k="step3">Google Drive · read {plan}</Copy>
<Copy k="step4">
  Comparing against open MAP items and what Priya raised on all 3 calls
</Copy>
<Copy k="step5">Created {file}</Copy>
<Copy k="step6">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Pull the Salesforce record</Copy>
<Copy k="prog2">Read the last three transcripts</Copy>
<Copy k="prog3">Check the mutual action plan</Copy>
<Copy k="prog4">Draft asks and objections</Copy>
<Copy k="prog5">Write prep sheet to folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The one-page prep sheet</Copy>
<Copy k="scene3.sub">
  Where the deal is, what they care about, your asks, and the objection
  you’ll hear — written from the live record.
</Copy>
<Copy k="sheet1">
  {lead} $240K ARR, Stage 4 — Proposal. Security review cleared Apr 22;
  Legal has the MSA. Close target on the plan is May 15.
</Copy>
<Copy k="sheet1.lead">Where the deal is.</Copy>
<Copy k="sheet2">
  {lead} Priya brought up SSO rollout timing on all three calls. Derek Osei
  (new VP Ops, joined Mar 27 call) hasn’t seen the ROI model yet.
</Copy>
<Copy k="sheet2.lead">What they care about right now.</Copy>
<Copy k="sheet3">
  {lead} (1) Intro to Derek for a 20-minute ROI walkthrough this week. (2)
  Confirm May 15 still holds on their side. (3) Redlined MSA back by Friday.
</Copy>
<Copy k="sheet3.lead">Your asks.</Copy>
<Copy k="sheet4">
  {lead} “We’re mid-Okta migration — can this wait till June?” → SSO
  connector runs against both their current IdP and Okta; offer a two-team
  pilot in parallel so the migration doesn’t gate the start.
</Copy>
<Copy k="sheet4.lead">Likely objection.</Copy>
<Copy k="chip.name">Northwind call prep — Priya</Copy>
<Copy k="chip.meta">Document · DOCX · 14 KB · {folder}</Copy>

<Copy k="scene4.title">Run it before every external call</Copy>
<Copy k="scene4.sub">
  Schedule it once — the sheet is in the account folder before the meeting
  reminder fires.
</Copy>
<Copy k="sched.prompt">
  Every weekday at 7:30am, run {cmd} for each external meeting on my
  calendar.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Morning call prep</Copy>
<Copy k="card.body">
  Weekdays at 7:30 AM — runs {cmd} for each external meeting on today’s
  calendar and writes the sheet to the account’s calls folder.
</Copy>
<Copy k="card.when">Weekdays at {time}</Copy>
<Copy k="card.when.time">7:30 AM</Copy>

<Copy k="end">
  Every external call, the prep sheet is in the account folder before the
  meeting reminder fires.
</Copy>
`;export{e as default};