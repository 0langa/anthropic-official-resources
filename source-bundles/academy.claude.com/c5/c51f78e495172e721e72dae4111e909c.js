var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Open a new role” use case. Scene text is typed
    on screen character by character, so keep sentences natural at any
    length; {tokens} are filled by the widget with its simulated commands,
    folder and file names, and bold lead-ins — keep them where the sentence
    needs them. */}

<Copy k="title">Open a new role</Copy>
<Copy k="subtitle">
  Asks the hiring manager questions and writes a finished role spec to your
  folder.
</Copy>

<Copy k="scene1.title">Ask to be interviewed</Copy>
<Copy k="scene1.sub">
  Point Cowork at the role folder and tell it to run the recruiter intake
  with you.
</Copy>
<Copy k="menu.category">Human Resources</Copy>
<Copy k="prompt">
  I need to open a new role on my team. Walk me through the intake: ask me
  what this person will own, the must-have skills versus the nice-to-haves,
  the level and reporting line, and what good looks like at 90 days. Push
  back where I’m vague. When we’re done, write the role spec in our standard
  format and list what’s still open for the recruiter.
</Copy>

<Copy k="scene2.title">Cowork runs the intake against your standards</Copy>
<Copy k="scene2.sub">
  It reads your template and leveling guide, asks the recruiter’s questions,
  and opens the req in your ATS.
</Copy>
<Copy k="work.heading">Running {cmd} intake</Copy>
<Copy k="step1">Reading role-spec-template.docx</Copy>
<Copy k="step2">
  Google Drive · pulled leveling-guide-2026 from People shared drive
</Copy>
<Copy k="step3">Comparing intake answers against L5 product criteria</Copy>
<Copy k="step4">Google Drive · created draft JD in Hiring/Senior-PM-Growth</Copy>
<Copy k="step5">Created {file}</Copy>
<Copy k="step6">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the spec template</Copy>
<Copy k="prog2">Pull leveling guide from Drive</Copy>
<Copy k="prog3">Map answers to level criteria</Copy>
<Copy k="prog4">Save draft JD to Drive</Copy>
<Copy k="prog5">Write role spec to folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">A complete role spec, in your format</Copy>
<Copy k="scene3.sub">
  Scope, must-haves, level, success criteria — plus the open items for the
  recruiter sync.
</Copy>
<Copy k="brief1">
  {lead} · L5 · reports to VP Product · San Francisco or remote (US)
</Copy>
<Copy k="brief1.lead">Senior Product Manager, Growth</Copy>
<Copy k="brief2">
  {lead} the activation funnel, the referral program, and the self-serve →
  sales-assist handoff. Partners with Data and Lifecycle Marketing.
</Copy>
<Copy k="brief2.lead">Owns</Copy>
<Copy k="brief3">
  {lead} — 5+ years B2B PLG product work; has shipped an experimentation
  program end-to-end; fluent in SQL and a product-analytics tool. {nice} —
  pricing/packaging exposure, managed one IC.
</Copy>
<Copy k="brief3.lead">Must-haves</Copy>
<Copy k="brief3.nice">Nice-to-haves</Copy>
<Copy k="brief4">
  {lead} — activation rate up 2 points, experimentation cadence at 4
  tests/week, presents the H2 growth roadmap to the leadership review.
</Copy>
<Copy k="brief4.lead">Good at 90 days</Copy>
<Copy k="brief5">
  {lead} — comp band pending Finance sign-off; whether the role can be fully
  remote outside the US.
</Copy>
<Copy k="brief5.lead">Open for the recruiter</Copy>
<Copy k="chip.name">Senior PM, Growth — role spec</Copy>
<Copy k="chip.meta">Document · DOCX · 24 KB · saved to {folder}</Copy>

<Copy k="scene4.title">Runs whenever a headcount is approved</Copy>
<Copy k="scene4.sub">
  Customize the intake once, then schedule it — the spec is waiting before
  the kickoff would have been.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 9am, check {folder} for any new subfolder, run {cmd} in each
  one, and save the spec there.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">New role intake</Copy>
<Copy k="card.body">
  Runs {cmd} in every new subfolder under {folder} and writes the intake
  transcript and finished spec to that role’s folder.
</Copy>
<Copy k="card.when">Weekdays at 9am</Copy>

<Copy k="end">
  Every approved position, the job description is in the folder before the
  recruiter call.
</Copy>
`;export{e as default};