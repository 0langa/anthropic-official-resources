var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Engineering performance reviews” use case.
    Scene text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands and file names — keep them where the sentence needs
    them. */}

<Copy k="title">Draft your reports’ performance reviews</Copy>
<Copy k="subtitle">
  Reads each report’s shipped work and your career framework, writes a
  grounded draft with linked evidence.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the review folder and describe what each draft needs to
  cover.
</Copy>
<Copy k="menu.category">Engineering</Copy>
<Copy k="prompt">
  For each engineer on my team list, draft their quarterly review in our
  framework with evidence linked for every claim. Flag where I need to add
  my own judgment.
</Copy>

<Copy k="scene2.title">Cowork gathers the evidence</Copy>
<Copy k="scene2.sub">
  It pulls each report’s shipped work from your tools and lines it up
  against the career framework.
</Copy>
<Copy k="work.heading">Working on quarterly review drafts</Copy>
<Copy k="step1">Reading {roster}</Copy>
<Copy k="step2">Searching GitHub for merged PRs</Copy>
<Copy k="step3">Searching Linear for shipped projects</Copy>
<Copy k="step4">Searching Slack for leadership threads</Copy>
<Copy k="step5">Writing {draft}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read roster and framework</Copy>
<Copy k="prog2">Pull each report’s shipped work</Copy>
<Copy k="prog3">Find where they led or unblocked</Copy>
<Copy k="prog4">Map evidence to the framework</Copy>
<Copy k="prog5">Write a draft per report</Copy>

<Copy k="scene3.title">A grounded draft per report</Copy>
<Copy k="scene3.sub">
  Every claim links to a PR, ticket, or thread; judgment calls are flagged
  for you.
</Copy>
<Copy k="result1">
  {lead} Led the auth-service migration (#2847, #2913) that cut p95 latency
  38%. Reviewed 41 PRs this quarter, including the fix that unblocked mobile
  during the Feb 14 incident.
</Copy>
<Copy k="result1.lead">Technical execution.</Copy>
<Copy k="result2">
  {lead} Drove the API-versioning decision in #eng-platform (Slack, Mar 3)
  and onboarded two new hires. Shipped the rate-limiting epic two weeks
  ahead of plan (Linear).
</Copy>
<Copy k="result2.lead">Collaboration & leadership.</Copy>
<Copy k="result3">
  {lead} Last cycle’s growth area was system-design ownership. The migration
  is strong evidence — you decide whether it clears the L5 bar.
</Copy>
<Copy k="result3.lead">[Needs your judgment]</Copy>
<Copy k="chip.meta">Document · MD · 6 KB</Copy>

<Copy k="scene4.title">Run it at the start of every cycle</Copy>
<Copy k="scene4.sub">
  Schedule it once — the drafts are waiting in the folder before review
  season opens.
</Copy>
<Copy k="sched.prompt">
  On the first Monday of each quarter, run {cmd} for everyone in {roster}
  and write the drafts to the cycle folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Quarterly review drafts</Copy>
<Copy k="card.body">
  Runs {cmd} for each report against GitHub, Linear, and Slack and writes
  evidence-linked drafts to the cycle folder.
</Copy>
<Copy k="card.when">First {time} of each quarter</Copy>
<Copy k="card.when.time">Monday</Copy>

<Copy k="end">
  Every cycle, the review drafts are in your folder before season opens —
  evidence linked, judgment calls flagged.
</Copy>
`;export{e as default};