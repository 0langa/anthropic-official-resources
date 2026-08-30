var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Design system drift review” use case. Scene text
    is typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, folder and channel names, and the design-token and component
    identifiers it quotes — keep them where the sentence needs them. */}

<Copy k="title">Design system drift review</Copy>
<Copy k="subtitle">
  Reads your shipped screens and PRs against the design system, writes a
  drift report with the compliant fix for each.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the QA folder and name the checks you want it to run.
</Copy>
<Copy k="menu.category">Design</Copy>
<Copy k="prompt">
  Review the screens and PRs in this folder against our design system. List
  every drift from tokens, components, and spacing, rate severity, and
  suggest the compliant fix.
</Copy>

<Copy k="scene2.title">Cowork checks every screen</Copy>
<Copy k="scene2.sub">
  The skill diffs each one against your tokens and the Progress card tracks
  the plan as it runs.
</Copy>
<Copy k="work.heading">Working on design-system review</Copy>
<Copy k="step1">Reading Figma — published design library</Copy>
<Copy k="step2">Reading tokens.json</Copy>
<Copy k="step3">Reading prod-settings-screen.png</Copy>
<Copy k="step4">Reading GitHub — PR #4821 billing-panel</Copy>
<Copy k="step5">Checking each against the design system</Copy>
<Copy k="step6">Writing drift-report-sprint-42.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Load design-system source</Copy>
<Copy k="prog2">Read screens and open PRs</Copy>
<Copy k="prog3">Check tokens, components, spacing</Copy>
<Copy k="prog4">Rate severity, suggest the fix</Copy>
<Copy k="prog5">Write drift report to folder</Copy>

<Copy k="scene3.title">A drift report you’d post on the PR</Copy>
<Copy k="scene3.sub">
  Each finding names the rule it breaks, the severity, and the on-system
  swap.
</Copy>
<Copy k="result1">
  {lead} Corner radius is 6px; system token {token} is 8px. Medium
  severity. Swap to the library {component} component and the radius comes
  for free.
</Copy>
<Copy k="result1.lead">Settings screen — primary button.</Copy>
<Copy k="result2">
  {lead} Border color is hardcoded {value}; should reference {token}. Low.
  One-line change in the diff.
</Copy>
<Copy k="result2.lead">PR #4821 — panel border.</Copy>
<Copy k="result3">
  {lead} Inner padding 20px doesn’t match {token} (24px). Medium. Use the
  {component} wrapper or correct the padding token.
</Copy>
<Copy k="result3.lead">Settings screen — card spacing.</Copy>
<Copy k="chip.name">Sprint 42 drift report</Copy>
<Copy k="chip.meta">Document · DOCX · 22 KB</Copy>

<Copy k="scene4.title">Make it run on every PR</Copy>
<Copy k="scene4.sub">
  Customize the rules once, then schedule it — drift gets caught before
  merge, twice a day.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 10am and 4pm, run {cmd} on open UI PRs and the QA folder,
  post the drift report to {channel}.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Twice-daily drift check</Copy>
<Copy k="card.body">
  Runs {cmd} on open UI PRs and the {folder} folder, posts the drift report
  as a PR comment or to {channel}.
</Copy>
<Copy k="card.when">Weekdays at {time}</Copy>
<Copy k="card.when.time">10 am and 4 pm</Copy>

<Copy k="end">
  Every PR that touches UI gets a drift report before it merges.
</Copy>
`;export{e as default};