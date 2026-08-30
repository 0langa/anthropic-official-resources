var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Interview debrief synthesis” use case. Scene text
    is typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, file and folder names, run-in labels, and highlighted
    competency names — keep them where the sentence needs them. */}

<Copy k="title">Interview debrief synthesis</Copy>
<Copy k="subtitle">
  Reads interviewer scorecards and writes the hiring brief before your
  meeting starts.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the role’s debrief folder and describe the brief you need.
</Copy>
<Copy k="prompt">
  Here are the interviewer scorecards for this candidate. Synthesize them
  into the debrief brief: where the panel converged, where they split, which
  signals are strong versus anecdotal, which competencies weren’t covered,
  and the three questions we need to resolve in the debrief. Do not recommend
  hire or no-hire; that decision belongs to the panel.
</Copy>

<Copy k="scene2.title">Cowork reads every scorecard</Copy>
<Copy k="scene2.sub">
  The skill pulls feedback from your ATS, checks it against the rubric, and
  tracks the plan as it runs.
</Copy>
<Copy k="work.heading">Working on debrief brief</Copy>
<Copy k="step1">Google Drive · read 5 scorecards for A. Rivera</Copy>
<Copy k="step2">Reading competency-rubric.pdf</Copy>
<Copy k="step3">Reading interview-plan.docx</Copy>
<Copy k="step4">Comparing scorecards against the role rubric</Copy>
<Copy k="step5">Google Drive · created {file}</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read scorecards from the role folder</Copy>
<Copy k="prog2">Read rubric and interview plan</Copy>
<Copy k="prog3">Map convergence and splits</Copy>
<Copy k="prog4">Flag gaps and open questions</Copy>
<Copy k="prog5">Write brief to role folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The brief the panel walks in reading</Copy>
<Copy k="scene3.sub">
  Convergence, splits, signal strength, gaps, and the questions to resolve —
  no hire call.
</Copy>
<Copy k="doc.title">Debrief brief — A. Rivera</Copy>
<Copy k="doc.meta">Senior PM, Growth · 5 interviewers</Copy>
<Copy k="brief1">
  {lead} All five rated {em1} and {em2} at 4. Four of five rated {em3} at 4.
</Copy>
<Copy k="brief1.lead">Converged</Copy>
<Copy k="brief1.em1">Product Sense</Copy>
<Copy k="brief1.em2">Customer Empathy</Copy>
<Copy k="brief1.em3">Execution</Copy>
<Copy k="brief2">
  {lead} {em1} — HM and peer PM scored 4; both cross-functional partners
  scored 2, each pointing to the platform-migration story.
</Copy>
<Copy k="brief2.lead">Split</Copy>
<Copy k="brief2.em1">Stakeholder Influence</Copy>
<Copy k="brief3">
  {lead} “Ships fast under ambiguity” appears in three scorecards — strong.
  “May trade quality for speed” is one interviewer’s aside — anecdotal.
</Copy>
<Copy k="brief3.lead">Signal strength</Copy>
<Copy k="brief4">
  {lead} No interviewer tested {em1} or {em2}; both are L5 must-haves on the
  rubric.
</Copy>
<Copy k="brief4.lead">Not covered</Copy>
<Copy k="brief4.em1">Data Fluency</Copy>
<Copy k="brief4.em2">Experimentation Design</Copy>
<Copy k="brief5">
  {lead} ① Is the stakeholder split about the candidate or the project? ②
  How do we weigh missing data-fluency signal at L5? ③ Does the speed concern
  warrant a reference check?
</Copy>
<Copy k="brief5.lead">For the room</Copy>
<Copy k="chip.name">Debrief brief — A. Rivera</Copy>
<Copy k="chip.meta">Document · DOCX · 21 KB · {folder}</Copy>

<Copy k="scene4.title">Runs when the last scorecard lands</Copy>
<Copy k="scene4.sub">
  Customize the rubric and convergence rule once, then schedule it — the
  brief is waiting before debrief starts.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 9am. Check the hiring folder for candidates with all scorecards
  in, run {cmd} on each, and write the brief to {folder}.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Debrief brief on scorecard complete</Copy>
<Copy k="card.body">
  Runs {cmd} each weekday morning against any candidate with all scorecards
  in the hiring folder and writes the brief to that role’s debrief folder in
  Drive.
</Copy>
<Copy k="card.when">
  Weekdays at {time} · checks the hiring folder for complete scorecard sets
</Copy>
<Copy k="card.when.time">9am</Copy>

<Copy k="end">
  Every candidate, the debrief brief is in the folder before the panel meets.
</Copy>
`;export{e as default};