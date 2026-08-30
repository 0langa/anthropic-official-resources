var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Competitor comparison” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, file and folder names, and highlighted lead-ins — keep them
    where the sentence needs them. */}

<Copy k="title">The competitive comparison doc</Copy>
<Copy k="subtitle">
  Reads their materials against your positioning and outputs a sales deck
  and Excel matrix.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the competitive folder and ask for a verdict on every row,
  in both formats sales needs.
</Copy>
<Copy k="prompt">
  Here’s the competitor’s site, pricing page, and recent announcements, plus
  our positioning doc. Build a structured comparison: where we win, where
  they win, and where it’s a draw. Output a PowerPoint deck for sales and an
  Excel workbook with the feature-by-feature matrix.
</Copy>

<Copy k="scene2.title">Cowork reads both sides</Copy>
<Copy k="scene2.sub">
  Their pricing page and datasheet, your positioning and last quarter’s deck
  — every row gets a call.
</Copy>
<Copy k="work.heading">Running {cmd} for Acme</Copy>
<Copy k="step1">
  Read acme.com pricing page — three tiers, usage add-ons priced per seat
</Copy>
<Copy k="step2">
  Reading {datasheet} — feature claims, limits, fine print
</Copy>
<Copy k="step3">Google Drive · read {positioning} and {lastDeck}</Copy>
<Copy k="step4">
  Slack · read the #competitive thread that asked for the comparison
</Copy>
<Copy k="step5">Scoring 31 rows win / lose / draw against our positioning</Copy>
<Copy k="step6">Created acme-comparison-deck.pptx and {matrix}</Copy>
<Copy k="step7">Done</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the competitor’s materials</Copy>
<Copy k="prog2">Read positioning and last deck</Copy>
<Copy k="prog3">Call win / lose / draw per row</Copy>
<Copy k="prog4">Build the sales deck</Copy>
<Copy k="prog5">Write the matrix to folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">A verdict on every row</Copy>
<Copy k="scene3.sub">
  The deck and the matrix land in the folder — win, lose, or draw, argued in
  your language.
</Copy>
<Copy k="res1">{pill} Acme · Feature comparison · Apr 28</Copy>
<Copy k="res1.pill">WIN 14 · DRAW 9 · LOSE 8</Copy>
<Copy k="res2">
  We win on implementation time, admin controls, and everything governance —
  their own datasheet caps audit logs at 30 days. They win on entry price
  and prebuilt integrations. The middle nine rows are a draw that comes down
  to deployment model.
</Copy>
<Copy k="res3">
  {lead} twelve slides for sales — the win story up front, draw rows framed
  as questions to ask, and talk tracks for the eight rows where they beat
  us.
</Copy>
<Copy k="res3.lead">Deck:</Copy>
<Copy k="res4">
  {lead} all 31 rows in Excel with one verdict and the source per row —
  filter to “lose” before any deal where price comes up.
</Copy>
<Copy k="res4.lead">Matrix:</Copy>
<Copy k="chip1.name">Acme comparison deck</Copy>
<Copy k="chip1.meta">Presentation · PowerPoint · {folder}</Copy>
<Copy k="chip2.name">Acme feature matrix</Copy>
<Copy k="chip2.meta">Workbook · Excel · {folder}</Copy>

<Copy k="scene4.title">Keep it current every quarter</Copy>
<Copy k="scene4.sub">
  Schedule the rerun — the deck and matrix refresh whenever their pricing or
  datasheet moves.
</Copy>
<Copy k="sched.prompt">
  First Monday of the quarter, re-run {cmd} on the Acme folder and flag any
  rows whose verdict changed.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Quarterly competitive refresh</Copy>
<Copy k="card.body">
  Runs {cmd} against Acme’s latest public materials, rebuilds the deck and
  the matrix, and posts any changed verdicts to #competitive.
</Copy>
<Copy k="card.when">First {time}</Copy>
<Copy k="card.when.time">Monday of the quarter at 7:00 AM</Copy>

<Copy k="end">
  Sales walks in with a verdict on every row — and the matrix to back it up.
</Copy>
`;export{e as default};