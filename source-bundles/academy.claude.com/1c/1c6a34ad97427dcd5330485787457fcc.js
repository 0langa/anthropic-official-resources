var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Prep the vendor negotiation” use case. Scene
    text is typed on screen character by character, so keep sentences
    natural at any length; {tokens} are filled by the widget with its
    simulated commands and bold lead-ins — keep them where the sentence
    needs them. */}

<Copy k="title">Prep the vendor negotiation</Copy>
<Copy k="subtitle">
  Reads both contract versions and your spend, writes the redline and the
  one-page brief.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the renewal folder and describe the brief you need for the
  call.
</Copy>
<Copy k="menu.category">Operations</Copy>
<Copy k="prompt">
  Compare the current agreement to the renewal proposal, build the redline
  table, and write the one-page negotiation brief: leverage, pushback, three
  ranked asks, walk-away line.
</Copy>

<Copy k="scene2.title">Cowork reads both contracts</Copy>
<Copy k="scene2.sub">
  The skill diffs current vs proposed and pulls your real spend so the
  leverage is grounded.
</Copy>
<Copy k="work.heading">Working on vendor review</Copy>
<Copy k="step1">Reading Northwind-MSA-2024-signed.pdf</Copy>
<Copy k="step2">Reading Northwind-renewal-proposal-2026.pdf</Copy>
<Copy k="step3">Reading usage-and-comparables.xlsx</Copy>
<Copy k="step4">Reading Brex — Northwind spend YTD</Copy>
<Copy k="step5">Comparing clauses</Copy>
<Copy k="step6">Writing northwind-negotiation-brief.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read both contract versions</Copy>
<Copy k="prog2">Pull spend and comparables</Copy>
<Copy k="prog3">Build redline table</Copy>
<Copy k="prog4">Draft negotiation brief</Copy>
<Copy k="prog5">Write brief to folder</Copy>

<Copy k="scene3.title">One page for the call</Copy>
<Copy k="scene3.sub">
  Ranked asks backed by your own usage and comparables, with the walk-away
  line agreed up front.
</Copy>
<Copy k="brief1">
  {lead} Proposal raises per-seat from $84 to $96 (+14%). Usage is up 22%
  year over year and we’re already above the volume tier; comparable quotes
  land at $82–88.
</Copy>
<Copy k="brief1.lead">Ask 1 — Hold the unit price.</Copy>
<Copy k="brief2">
  {lead} Current agreement is opt-in at term end; proposal flips to 90-day
  opt-out. We’ve held opt-in on every Tier-1 vendor and Legal won’t move on
  it.
</Copy>
<Copy k="brief2.lead">Ask 2 — Strike the auto-renew.</Copy>
<Copy k="brief3">
  {lead} — Any per-seat above $90 with auto-renewal intact. The Contoso quote
  at $86 is executable inside the notice window.
</Copy>
<Copy k="brief3.lead">Walk-away</Copy>
<Copy k="chip.name">Northwind negotiation brief</Copy>
<Copy k="chip.meta">Document · DOCX · 22 KB</Copy>

<Copy k="scene4.title">Run it before every renewal</Copy>
<Copy k="scene4.sub">
  Schedule it once — the brief lands 60 days ahead for every vendor in the
  contracts sheet.
</Copy>
<Copy k="sched.prompt">
  Every Monday, check the contracts sheet for vendors renewing in 60 days and
  run {cmd} on each.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Renewal negotiation briefs</Copy>
<Copy k="card.body">
  Runs {cmd} for any vendor renewing in the next 60 days and writes the
  redline and brief to that vendor’s folder.
</Copy>
<Copy k="card.when">Mondays at {time}</Copy>
<Copy k="card.when.time">9:00am</Copy>

<Copy k="end">
  Every renewal, the brief is in the folder before the vendor books the call.
</Copy>
`;export{e as default};