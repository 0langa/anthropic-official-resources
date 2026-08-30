var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Sprint retro and on-call handoff” use case.
    Scene text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands and bold lead-ins — keep them where the sentence
    needs them. */}

<Copy k="title">Write the sprint retro and on-call handoff</Copy>
<Copy k="subtitle">
  Reads the closed cycle and your team channels, writes the retro and the
  handoff for the next rotation.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the retros folder and describe what the meeting and the
  next rotation need.
</Copy>
<Copy k="menu.category">Engineering</Copy>
<Copy k="prompt">
  Read the just-closed Linear cycle and two weeks of #team-platform and
  #oncall-platform. Write the sprint retro and a separate on-call handoff for
  the next rotation.
</Copy>

<Copy k="scene2.title">Cowork reads the cycle and the channels</Copy>
<Copy k="scene2.sub">
  The skill pulls Linear, Slack, and PagerDuty side by side and the Progress
  card tracks the plan as it runs.
</Copy>
<Copy k="work.heading">Working on retro and handoff</Copy>
<Copy k="step1">Reading Linear — Sprint 08 cycle</Copy>
<Copy k="step2">Reading #team-platform in Slack</Copy>
<Copy k="step3">Reading #oncall-platform in Slack</Copy>
<Copy k="step4">Listing PagerDuty pages this rotation</Copy>
<Copy k="step5">Writing sprint-08-retro.md</Copy>
<Copy k="step6">Writing oncall-handoff.md</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the closed Linear cycle</Copy>
<Copy k="prog2">Read two weeks of team Slack</Copy>
<Copy k="prog3">Count pages from PagerDuty</Copy>
<Copy k="prog4">Draft retro: shipped, slipped, themes</Copy>
<Copy k="prog5">Write the on-call handoff</Copy>

<Copy k="scene3.title">Two docs, ready for the meeting</Copy>
<Copy k="scene3.sub">
  The retro leads with themes worth discussing; the handoff tells the next
  rotation what to watch.
</Copy>
<Copy k="brief1">
  {lead} — auth-service rate limiting, the new ingest worker, and 12 of 15
  planned issues. Three carried over; two were blocked on the infra migration
  that landed Thursday.
</Copy>
<Copy k="brief1.lead">Shipped</Copy>
<Copy k="brief2">
  {lead} — four of the slipped tickets trace back to the same staging-env
  flakiness. “Lost most of Tuesday to it” shows up in three threads. Worth
  deciding if it’s a sprint-09 priority.
</Copy>
<Copy k="brief2.lead">Theme to discuss</Copy>
<Copy k="brief3">
  {lead} — 7 pages this rotation, 5 from the disk-pressure alert that’s now
  tuned. Watch the queue-depth dashboard: it spiked twice without paging.
</Copy>
<Copy k="brief3.lead">On-call handoff</Copy>
<Copy k="chip.name">Sprint 08 retro</Copy>
<Copy k="chip.meta">Document · MD · 6 KB</Copy>

<Copy k="scene4.title">Make it run when the cycle closes</Copy>
<Copy k="scene4.sub">
  Schedule it once — the retro and the handoff land in the folder before
  Friday’s meeting, every sprint.
</Copy>
<Copy k="sched.prompt">
  Every other Friday at 3pm, run {cmd} on the just-closed cycle, write both
  docs to the retro folder, and post the handoff to #oncall-platform.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Sprint retro + on-call handoff</Copy>
<Copy k="card.body">
  Runs {cmd} on the closed cycle and the last two weeks of channels, writes
  both docs to the dated retro folder, and posts the handoff to
  #oncall-platform.
</Copy>
<Copy k="card.when">Every other {time}</Copy>
<Copy k="card.when.time">Friday at 3:00pm</Copy>

<Copy k="end">
  Every sprint, the retro and the handoff are in the folder before the
  meeting starts.
</Copy>
`;export{e as default};