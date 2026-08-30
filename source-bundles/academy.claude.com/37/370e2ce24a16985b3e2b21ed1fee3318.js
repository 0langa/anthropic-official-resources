var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Launch readiness sweep” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, channel, file and folder names — keep them where the sentence
    needs them. Status words (GREEN / YELLOW / RED) are the checklist’s
    readiness call and stay short. */}

<Copy k="title">Launch readiness sweep</Copy>
<Copy k="subtitle">
  Reads the PRD, Slack channel, and Linear epic then writes a go/no-go
  checklist.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the launch folder and name the four sources to sweep.
</Copy>
<Copy k="menu.category">Product Management</Copy>
<Copy k="prompt">
  Sweep launch readiness for the saved-views launch. Read the PRD, the Linear
  epic, the {channel} Slack channel, and the GTM brief. Produce the launch
  checklist with a status and owner per item, give a red/yellow/green
  readiness call overall, name the specific blockers, and note anything that
  matches what went well or wrong in our last two launches.
</Copy>

<Copy k="scene2.title">Cowork sweeps all four sources</Copy>
<Copy k="scene2.sub">
  PRD, Linear epic, Slack channel, GTM brief — read together, matched against
  prior retros.
</Copy>
<Copy k="work.heading">Running {cmd}</Copy>
<Copy k="step1">Google Docs · read PRD-saved-views and GTM brief</Copy>
<Copy k="step2">Linear · pulled epic SAV-42 — 18 issues, 4 open</Copy>
<Copy k="step3">Slack · read {channel} — 7 days, 86 messages</Copy>
<Copy k="step4">Comparing against {retro}</Copy>
<Copy k="step5">Created {file}</Copy>
<Copy k="step6">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read PRD and GTM brief</Copy>
<Copy k="prog2">Pull Linear epic status</Copy>
<Copy k="prog3">Read launch Slack channel</Copy>
<Copy k="prog4">Match against prior retros</Copy>
<Copy k="prog5">Write checklist to folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The go/no-go picture</Copy>
<Copy k="scene3.sub">
  Status and owner on every line, an overall color, and the blockers named.
</Copy>
<Copy k="doc.title">Saved-views launch readiness</Copy>
<Copy k="doc.meta">Mon Apr 27 · 8 days to launch</Copy>
<Copy k="status.green">GREEN</Copy>
<Copy k="status.yellow">YELLOW</Copy>
<Copy k="status.red">RED</Copy>
<Copy k="row1.item">Feature flag & rollout plan</Copy>
<Copy k="row1.sub">SAV-42 merged Apr 24, staged to 5%</Copy>
<Copy k="row1.owner">Maya K</Copy>
<Copy k="row2.item">Migration script for legacy filters</Copy>
<Copy k="row2.sub">Dry-run passed on 12k accounts</Copy>
<Copy k="row2.owner">Tomás R</Copy>
<Copy k="row3.item">Pricing page copy</Copy>
<Copy k="row3.sub">Still marked TBD in GTM brief</Copy>
<Copy k="row3.owner">Derek L</Copy>
<Copy k="row4.item">Support documentation</Copy>
<Copy k="row4.sub">0 of 3 articles drafted, no Intercom macros</Copy>
<Copy k="row4.owner">Priya N</Copy>
<Copy k="row5.item">Beta feedback close-out</Copy>
<Copy k="row5.sub">4 Linear tickets open, 2 are P1</Copy>
<Copy k="row5.owner">Sana O</Copy>
<Copy k="blockers.title">Blockers to clear yellow</Copy>
<Copy k="blockers.body">
  Support docs haven’t started with 8 days left. Pricing copy is the only TBD
  in the GTM brief — Derek needs the tier decision from the Apr 22 thread.
</Copy>
<Copy k="seen.title">Seen before</Copy>
<Copy k="seen.body">
  Support docs lagging matches the bulk-export retro — same bottleneck, same
  week-of scramble. The retro recommended drafting docs at PRD sign-off.
</Copy>
<Copy k="chip.name">Saved Views launch readiness</Copy>
<Copy k="chip.meta">Document · MD · 6 KB · {folder}</Copy>

<Copy k="scene4.title">Run it daily during launch week</Copy>
<Copy k="scene4.sub">
  Customize once, then schedule it — standup opens with the current picture
  every morning.
</Copy>
<Copy k="sched.prompt">
  Every weekday at 8am during launch week, run {cmd} for saved-views and
  write {file} to the launch folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Daily launch readiness sweep</Copy>
<Copy k="card.body">
  Runs {cmd} against the PRD, Linear epic, Slack channel, and GTM brief and
  writes the dated checklist to {folder}.
</Copy>
<Copy k="card.when">{time}, May 4 to May 8</Copy>
<Copy k="card.when.time">Daily at 8:00am</Copy>

<Copy k="end">
  Every morning of launch week, the readiness checklist is in the folder
  before standup.
</Copy>
`;export{e as default};