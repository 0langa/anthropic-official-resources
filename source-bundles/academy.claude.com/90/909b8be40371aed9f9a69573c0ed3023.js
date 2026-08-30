var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Recap ad performance” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, channel, file and folder names and the demo figures in the
    Slack digest — keep them where the sentence needs them. */}

<Copy k="title">Recap ad performance</Copy>
<Copy k="subtitle">
  Reads your ad exports, builds a campaign summary, and posts the highlights
  to Slack.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the campaign folder and describe the recap you need.
</Copy>
<Copy k="prompt">
  Take the ad-platform exports for this campaign, run the performance
  analysis, and build the wrap deck: what worked, what didn’t, and what we
  change next time. Post a short digest to the team Slack with the top three
  movers, and create a live shared artifact that stays updated from the
  underlying data so the team can check it any time.
</Copy>

<Copy k="scene2.title">Cowork pulls the platforms together</Copy>
<Copy k="scene2.sub">
  Live numbers from each connector, joined to conversions, compared against
  last week.
</Copy>
<Copy k="work.heading">Running {cmd} on Spring-Launch</Copy>
<Copy k="step1">Google Ads · pulled spend & CTR for Spring-Launch</Copy>
<Copy k="step2">Meta Ads · pulled reach + CPC across 12 ad sets</Copy>
<Copy k="step3">Analytics · matched 1,840 conversions to campaign UTMs</Copy>
<Copy k="step4">Comparing CPA and ROAS against wk16</Copy>
<Copy k="step5">Created {file}</Copy>
<Copy k="step6">Slack · posted top-three digest to {channel}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Pull platform spend & reach</Copy>
<Copy k="prog2">Join conversions</Copy>
<Copy k="prog3">Compare against last week</Copy>
<Copy k="prog4">Build the wrap deck</Copy>
<Copy k="prog5">Post digest to Slack</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The digest lands in Slack</Copy>
<Copy k="scene3.sub">
  Top three movers with the numbers and the call — the wrap deck and live
  dashboard go in the thread.
</Copy>
<Copy k="slack.posted">Posted just now</Copy>
<Copy k="slack.postedAt">8:02 AM</Copy>
<Copy k="slack.title">Spring-Launch — week 17 movers</Copy>
<Copy k="slack.row1">
  {lead} — CPA down {drop} to {cpa}, now the most efficient set. Shift
  {shift} here.
</Copy>
<Copy k="slack.row1.lead">Carousel-v3 · Meta</Copy>
<Copy k="slack.row2">
  {lead} — ROAS up to {roas} after the negative-keyword cleanup. Hold
  budget.
</Copy>
<Copy k="slack.row2.lead">Brand search · Google</Copy>
<Copy k="slack.row3">
  {lead} — CTR fell to {ctr}, {spend} spend for {conversions} conversions.
  Pause and re-cut creative.
</Copy>
<Copy k="slack.row3.lead">Stories-broad · Meta</Copy>
<Copy k="slack.footer">Full wrap deck and the {link} in thread.</Copy>
<Copy k="slack.footer.link">live dashboard</Copy>
<Copy k="chip.name">Spring Launch wrap deck</Copy>
<Copy k="chip.meta">Presentation · PPTX · 1.6 MB · written to {folder}</Copy>

<Copy k="scene4.title">Make it run every Monday</Copy>
<Copy k="scene4.sub">
  Customize {cmd} with your KPIs once, then schedule it — the recap lands
  before standup.
</Copy>
<Copy k="sched.prompt">
  Every Monday at 8am, run {cmd} on the connected ad platforms and post the
  digest to {channel}.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Weekly ad performance recap</Copy>
<Copy k="card.body">
  Runs {cmd} against the connected ad platforms, refreshes the live
  artifact, writes the wrap deck to the performance folder, and posts the
  top-three digest to {channel}.
</Copy>
<Copy k="card.when">Every {time}, weekly</Copy>
<Copy k="card.when.time">Monday at 8am</Copy>

<Copy k="end">
  Every Monday, the wrap deck lands and the {br} top three movers hit Slack
  — in your format.
</Copy>
`;export{e as default};