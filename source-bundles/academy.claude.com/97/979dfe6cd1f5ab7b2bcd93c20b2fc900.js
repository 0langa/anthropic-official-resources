var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Campaign brief” use case. Scene text is typed
    on screen character by character, so keep sentences natural at any
    length; {tokens} are filled by the widget with its simulated commands,
    file and folder names, and highlighted figures — keep them where the
    sentence needs them. */}

<Copy k="title">Build a campaign brief</Copy>
<Copy k="subtitle">
  Reads strategy notes and brand guidelines, then drafts the brief and
  kickoff slides.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the campaign folder and describe the brief and deck you
  need.
</Copy>
<Copy k="menu.category">Marketing</Copy>
<Copy k="prompt">
  Take these strategy notes and turn them into a formatted campaign brief:
  objective, audience, key message, channel plan, timeline, and success
  metrics. Then build a short themed deck from the brief that I can walk the
  team through in the kickoff. Keep the voice consistent with our brand
  guidelines.
</Copy>

<Copy k="scene2.title">Cowork reads the source where it sits</Copy>
<Copy k="scene2.sub">
  Notes, brand guide, and template come together — Progress tracks the plan
  as it runs.
</Copy>
<Copy k="work.heading">Working on {cmd}</Copy>
<Copy k="step1">Reading {file}</Copy>
<Copy k="step2">Google Drive · pulled {file}</Copy>
<Copy k="step3">Notion · read Spring Launch planning page</Copy>
<Copy k="step4">Comparing against {file} and brand voice</Copy>
<Copy k="step5">Created {file}</Copy>
<Copy k="step6">Created spring-launch-kickoff.pptx</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.slides">8 slides</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read strategy notes</Copy>
<Copy k="prog2">Pull brand guide and template</Copy>
<Copy k="prog3">Structure the brief</Copy>
<Copy k="prog4">Write brief to folder</Copy>
<Copy k="prog5">Build kickoff deck</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">Review-ready brief and kickoff deck</Copy>
<Copy k="scene3.sub">
  Structured to your template, written in your brand voice, saved back to
  the campaign folder.
</Copy>
<Copy k="doc.title">Spring Launch — Campaign Brief</Copy>
<Copy k="sec1.label">Objective</Copy>
<Copy k="sec1.text">
  Drive {signups} for the Horizon plan in the first six weeks, lifting
  self-serve revenue 18% QoQ.
</Copy>
<Copy k="sec1.text.signups">4,200 trial sign-ups</Copy>
<Copy k="sec2.label">Audience</Copy>
<Copy k="sec2.text">
  Mid-market ops leads (50–500 seats) currently on a competitor or
  spreadsheets; secondary: existing Free-tier admins.
</Copy>
<Copy k="sec3.label">Key message</Copy>
<Copy k="sec3.text">
  {tagline} One workspace, zero hand-offs — set up in an afternoon.
</Copy>
<Copy k="sec3.text.tagline">“The plan that runs itself.”</Copy>
<Copy k="sec4.label">Channel plan</Copy>
<Copy k="sec4.text">
  Paid LinkedIn + retargeting (40%), lifecycle email × 3 touches (30%),
  partner webinars × 2 (20%), organic social (10%).
</Copy>
<Copy k="sec5.label">Success metrics</Copy>
<Copy k="sec5.text">
  Trial sign-ups, trial→paid at {rate}, CAC under {cac}, webinar attendance
  600+.
</Copy>
<Copy k="sec5.text.rate">22%</Copy>
<Copy k="sec5.text.cac">$148</Copy>
<Copy k="chip1.name">Spring Launch campaign brief</Copy>
<Copy k="chip1.meta">Document · DOCX · 24 KB</Copy>
<Copy k="chip2.name">Spring Launch kickoff deck</Copy>
<Copy k="chip2.meta">Presentation · PPTX · 8 slides</Copy>

<Copy k="scene4.title">Make it run on every new campaign</Copy>
<Copy k="scene4.sub">
  Customize the skill once, then schedule it — the brief drafts itself the
  moment notes land.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 9 am, check {folder} for new strategy-notes files and run
  {cmd} on each, writing the brief and deck to a campaign subfolder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Campaign brief from strategy notes</Copy>
<Copy k="card.body">
  Checks {folder} each weekday morning for new strategy-notes files, runs
  {cmd} on each, and writes the brief and deck to a campaign subfolder.
</Copy>
<Copy k="card.when">Weekdays at {time} — {folder} folder</Copy>
<Copy k="card.when.time">9 am</Copy>

<Copy k="end">
  Every campaign, strategy notes become a formatted brief and kickoff deck
  before the first meeting.
</Copy>
`;export{e as default};