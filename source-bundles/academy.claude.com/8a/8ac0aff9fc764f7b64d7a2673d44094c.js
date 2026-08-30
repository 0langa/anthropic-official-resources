var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Engagement survey to action plan” use case.
    Scene text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands, file and folder names, highlighted terms, and line
    breaks — keep them where the sentence needs them. */}

<Copy k="title">Engagement survey to action plan</Copy>
<Copy k="subtitle">
  Cowork reads the survey export and drafts a brief with themes and next
  steps.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the engagement folder and describe the brief you need.
</Copy>
<Copy k="menu.category">Human Resources</Copy>
<Copy k="prompt">
  Read the raw engagement survey export in this folder. Theme the open-text
  responses, segment by team and tenure where the data allows, and separate
  loud-minority comments from broad signal. Output a one-page People brief:
  the top three themes, two or three supporting quotes per theme, and a
  draft 30-day action plan for each. Never attribute a quote to an
  individual.
</Copy>

<Copy k="scene2.title">Cowork themes the responses</Copy>
<Copy k="scene2.sub">
  The skill clusters open-text comments, segments by team and tenure, and
  weights by distinct respondents.
</Copy>
<Copy k="work.heading">Running {cmd}</Copy>
<Copy k="step1">Reading {file}</Copy>
<Copy k="step2">
  Google Drive · read 487 open-text responses from the Q2 survey export
</Copy>
<Copy k="step3">Reading {roster} for team and tenure</Copy>
<Copy k="step4">
  Comparing against {prior}; weighting by distinct respondents
</Copy>
<Copy k="step5">Google Drive · created {brief} in engagement-Q2</Copy>
<Copy k="step.rows">487 rows</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read survey export and roster</Copy>
<Copy k="prog2">Theme open-text responses</Copy>
<Copy k="prog3">Segment by team and tenure</Copy>
<Copy k="prog4">Separate broad signal from loud minority</Copy>
<Copy k="prog5">Write People brief to folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">A one-page People brief</Copy>
<Copy k="scene3.sub">
  Top themes, anonymized quotes, and a 30-day action plan per theme — ready
  for the leadership readout.
</Copy>
<Copy k="result.meta">Q2 ENGAGEMENT · 487 RESPONSES · 84% PARTICIPATION</Copy>
<Copy k="theme1">
  {lead} — broad signal, 38% of respondents, strongest in Engineering and
  Support.{br}{quotes}{br}{action}
</Copy>
<Copy k="theme1.lead">1 · Manager 1:1 frequency</Copy>
<Copy k="theme1.quotes">
  “I go three or four weeks between real 1:1s.” · “My manager’s great but
  has eleven directs.”
</Copy>
<Copy k="theme1.action">
  → 30-day: audit spans over 8; managers calendar-block weekly 1:1s by May
  11; HRBP spot-check in the June pulse.
</Copy>
<Copy k="theme2">
  {lead} — 27%, concentrated in the 2-4 year tenure band.{br}{quotes}{br}{action}
</Copy>
<Copy k="theme2.lead">2 · Career-path clarity for senior ICs</Copy>
<Copy k="theme2.quotes">
  “I don’t know what L5 looks like here.” · “Promo criteria feel different
  team to team.”
</Copy>
<Copy k="theme2.action">
  → 30-day: publish the IC4→IC5 rubric by function; managers review it with
  every IC4 in their next 1:1.
</Copy>
<Copy k="theme3">
  {lead} — 19%, loudest in Design and Data but raised across
  functions.{br}{quotes}{br}{action}
</Copy>
<Copy k="theme3.lead">3 · Cross-team request load</Copy>
<Copy k="theme3.quotes">
  “Half my week is other teams’ asks with no intake.” · “I can’t tell which
  requests actually matter.”
</Copy>
<Copy k="theme3.action">
  → 30-day: stand up a shared intake form for Design and Data; leads triage
  Tuesdays.
</Copy>
<Copy k="chip.name">Q2 People Brief</Copy>
<Copy k="chip.meta">Document · DOCX · 24 KB · {folder}</Copy>

<Copy k="scene4.title">Run it every survey cycle</Copy>
<Copy k="scene4.sub">
  Customize the anonymization rules once, then schedule it — the brief is in
  the quarter’s folder when the survey closes.
</Copy>
<Copy k="sched.prompt">
  On the second Monday of each quarter, run {cmd} against the newest export
  and write the People brief to that quarter’s folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Quarterly engagement brief</Copy>
<Copy k="card.body">
  Runs {cmd} on the newest export in People/engagement and writes the
  one-page brief and 30-day action plans to that quarter’s folder.
</Copy>
<Copy k="card.when">On the {time}, quarterly</Copy>
<Copy k="card.when.time">second Monday</Copy>

<Copy k="end">
  Every survey cycle, the People brief — themes, quotes, and a 30-day plan —
  is in the folder.
</Copy>
`;export{e as default};