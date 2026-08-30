var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Support incident postmortem” use case. Scene
    text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands, the deploy hash and bold lead-ins — keep them where
    the sentence needs them. */}

<Copy k="title">Support incident postmortem</Copy>
<Copy k="subtitle">
  Reads the war room, tickets, and deploys, writes the customer-facing
  review.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the incident folder and name the review you need.
</Copy>
<Copy k="menu.category">Operations</Copy>
<Copy k="prompt">
  Draft the customer-facing incident review for INC-4417. Pull the war-room
  thread, tickets, and deploys, reconstruct the timeline, and write the first
  cut in our template.
</Copy>

<Copy k="scene2.title">Cowork reads the whole incident</Copy>
<Copy k="scene2.sub">
  The skill walks Slack, Zendesk, and GitHub, and the Progress card tracks
  the plan as it runs.
</Copy>
<Copy k="work.heading">Working on incident review</Copy>
<Copy k="step1">Reading Slack — #inc-4417 war room</Copy>
<Copy k="step2">Reading Zendesk — tickets in impact window</Copy>
<Copy k="step3">Reading GitHub — deploys, prior 24h</Copy>
<Copy k="step4">Reading customer-postmortem-template.md</Copy>
<Copy k="step5">Reconstructing incident timeline</Copy>
<Copy k="step6">Writing INC-4417-customer-review.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the war-room thread</Copy>
<Copy k="prog2">Pull tickets and deploys</Copy>
<Copy k="prog3">Reconstruct the timeline</Copy>
<Copy k="prog4">Quantify customer impact</Copy>
<Copy k="prog5">Write review to folder</Copy>

<Copy k="scene3.title">Review-ready postmortem</Copy>
<Copy k="scene3.sub">
  Timeline reconstructed, impact quantified, customer voice quoted — written
  to the incident folder.
</Copy>
<Copy k="brief1">
  {lead} 47 customers saw failed exports between 14:02 and 15:38 PT on April
  24. Nine opened tickets during the window; one wrote, “every export we try
  is erroring — is this on your end?”
</Copy>
<Copy k="brief1.lead">Impact.</Copy>
<Copy k="brief2">
  {lead} Deploy {sha} at 13:47 removed a retry path in the export service. We
  rolled back at 15:31 and confirmed recovery at 15:38.
</Copy>
<Copy k="brief2.lead">Root cause.</Copy>
<Copy k="brief3">
  {lead} Add a pre-deploy check for retry coverage — Platform, due May 2.
  Direct outreach to the nine ticketed accounts — Support, this week.
</Copy>
<Copy k="brief3.lead">Remediation.</Copy>
<Copy k="chip.name">INC-4417 customer review</Copy>
<Copy k="chip.meta">Document · DOCX · 14 KB</Copy>

<Copy k="scene4.title">Make it run after every incident</Copy>
<Copy k="scene4.sub">
  Customize once, then schedule it — the draft is waiting before the first
  CSM asks.
</Copy>
<Copy k="sched.prompt">
  Every weekday at 9am, find #inc- channels resolved in the last 24h, run
  {cmd} on each, and write the draft to the incident folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Customer incident-review draft</Copy>
<Copy k="card.body">
  Runs {cmd} on each war room resolved in the last 24h and writes the
  customer-facing draft to the incident folder.
</Copy>
<Copy k="card.when">Weekdays at {time}</Copy>
<Copy k="card.when.time">9:00am</Copy>

<Copy k="end">
  After every incident, the customer-facing review is drafted before the
  first CSM asks.
</Copy>
`;export{e as default};