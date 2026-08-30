var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Contract to ledger extraction” use case. Scene
    text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands, folder and channel names, and highlighted terms —
    keep them where the sentence needs them. */}

<Copy k="aria">
  Animated demo: asking Cowork to extract ASC 606 fields from executed
  contracts into the rev-rec intake sheet, watching it read each contract
  and flag non-standard deals, and scheduling the run for every weekday at
  5pm
</Copy>

<Copy k="title">Contract to ledger extraction</Copy>
<Copy k="subtitle">
  Reads executed contracts, fills the rev-rec intake sheet, flags
  non-standard deals for review.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the intake folder and name the fields and the exception
  rule.
</Copy>
<Copy k="menu.category">Finance</Copy>
<Copy k="prompt">
  Extract the ASC 606 fields from every executed contract into the rev-rec
  intake sheet, and flag any non-standard deals for my review before
  booking.
</Copy>

<Copy k="scene2.title">Cowork reads every contract</Copy>
<Copy k="scene2.sub">
  The skill extracts each ASC 606 field and the Progress card tracks the
  plan as it runs.
</Copy>
<Copy k="work.heading">Working on contract intake</Copy>
<Copy k="step1">Reading asc606-policy.md</Copy>
<Copy k="step2">Fetching Ironclad executed contracts</Copy>
<Copy k="step3">Reading Northwind-MSA-executed.pdf</Copy>
<Copy k="step4">Reading Helio-order-form-3.pdf</Copy>
<Copy k="step5">Checking NetSuite booked revenue</Copy>
<Copy k="step6">Writing revrec-intake-2026-W17.xlsx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read accounting policy</Copy>
<Copy k="prog2">Read each executed contract</Copy>
<Copy k="prog3">Extract ASC 606 fields</Copy>
<Copy k="prog4">Flag non-standard terms</Copy>
<Copy k="prog5">Write intake + exceptions</Copy>

<Copy k="scene3.title">Intake sheet, ready to review</Copy>
<Copy k="scene3.sub">
  Each contract’s fields populated, with the non-standard deals flagged
  before they reach the ledger.
</Copy>
<Copy k="result1">
  {lead} — three performance obligations (platform license, implementation,
  support), 36-month term, annual billing in advance. Matches the standard
  SaaS pattern; ready to book.
</Copy>
<Copy k="result1.lead">Northwind MSA</Copy>
<Copy k="result2">
  {lead} — usage-based pricing with a monthly floor and an uncapped overage
  tier. {flag} variable consideration needs an estimate method under policy
  §4.2 before booking.
</Copy>
<Copy k="result2.lead">Helio Order Form 3</Copy>
<Copy k="result2.flag">Flagged:</Copy>
<Copy k="result3">
  Two contracts processed, one exception held for review. Intake sheet and
  exception list written to the folder with clause references.
</Copy>
<Copy k="chip.name">Rev-rec intake — 2026 W17</Copy>
<Copy k="chip.meta">Spreadsheet · XLSX · 24 KB</Copy>

<Copy k="scene4.title">Make it run every day</Copy>
<Copy k="scene4.sub">
  Customize the field list once, then schedule it — new contracts are
  processed before close of business.
</Copy>
<Copy k="sched.prompt">
  Every weekday at 5pm, run {cmd} on new executed contracts and post
  exceptions to {channel}.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Contract intake to rev-rec</Copy>
<Copy k="card.body">
  Runs {cmd} on new executed contracts in {folder}, appends to the intake
  sheet, and posts exceptions to {channel}.
</Copy>
<Copy k="card.when">Weekdays at {time}</Copy>
<Copy k="card.when.time">5:00pm</Copy>

<Copy k="end">
  Every signed contract reaches the intake sheet the same day, exceptions
  flagged before they hit the ledger.
</Copy>
`;export{e as default};