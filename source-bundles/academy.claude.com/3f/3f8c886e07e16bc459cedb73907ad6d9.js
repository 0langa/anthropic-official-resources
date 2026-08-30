var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Cloud cost anomalies” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands and highlighted lead-ins — keep them where the sentence needs
    them. */}

<Copy k="title">Find the cloud cost anomaly</Copy>
<Copy k="subtitle">
  Reads the billing export, writes the anomaly report with an owner for
  every spike.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the billing folder and describe the comparison you need.
</Copy>
<Copy k="menu.category">Engineering</Copy>
<Copy k="prompt">
  Compare this month’s AWS costs to the three-month trend by service and
  team. Flag anything 20% over, trace each spike to its cause, and write the
  anomaly report with an owner for every item.
</Copy>

<Copy k="scene2.title">Cowork traces every spike</Copy>
<Copy k="scene2.sub">
  The skill compares to trend, correlates with deploys, and the Progress
  card tracks the plan.
</Copy>
<Copy k="work.heading">Working on cost-anomaly analysis</Copy>
<Copy k="step1">Reading aws-cur-2026-04.csv</Copy>
<Copy k="step2">Querying Snowflake — three-month trend</Copy>
<Copy k="step3">Reading Datadog — deploys and traffic</Copy>
<Copy k="step4">Checking GitHub — recent merges</Copy>
<Copy k="step5">Reading tag-team-map.csv</Copy>
<Copy k="step6">Writing 2026-04-anomaly-report.md</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read this month’s billing export</Copy>
<Copy k="prog2">Compare to three-month trend</Copy>
<Copy k="prog3">Trace each spike to a cause</Copy>
<Copy k="prog4">Assign owners and actions</Copy>
<Copy k="prog5">Write report to folder</Copy>

<Copy k="scene3.title">The anomaly report, ranked</Copy>
<Copy k="scene3.sub">
  Every over-trend line traced to a cause, with an owner and a recommended
  fix.
</Copy>
<Copy k="res1">
  {lead} is $6.8K over trend. Three g5.12xlarge instances were left running
  after the Apr 9 fine-tune job completed. Owner: ML Platform. Terminate and
  add an idle-stop policy.
</Copy>
<Copy k="res1.lead">EC2 · ml-training</Copy>
<Copy k="res2">
  {lead} is $4.1K over trend (+38%). The search-indexer started cross-AZ
  reads on Apr 12 after the shard rebalance. Owner: Search. Route reads to
  same-AZ replicas.
</Copy>
<Copy k="res2.lead">NAT Gateway</Copy>
<Copy k="res3">
  {lead} is $1.2K over trend. Debug-level logging shipped to prod on
  payments-api on Apr 18. Owner: Payments. Revert the log level in the next
  deploy.
</Copy>
<Copy k="res3.lead">CloudWatch Logs</Copy>
<Copy k="chip.name">April cost-anomaly report</Copy>
<Copy k="chip.meta">Document · MD · 11 KB</Copy>

<Copy k="scene4.title">Make it run when the bill closes</Copy>
<Copy k="scene4.sub">
  Customize the threshold once, then schedule it — the report is waiting
  before anyone opens the console.
</Copy>
<Copy k="sched.prompt">
  On the 3rd of every month, run {cmd} on the new billing export and write
  the anomaly report to the dated folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Monthly cloud-cost anomaly report</Copy>
<Copy k="card.body">
  Runs {cmd} on the closed month, writes the ranked anomaly report to the
  dated folder, and posts the headline to #infra-cost.
</Copy>
<Copy k="card.when">Monthly on the {time}</Copy>
<Copy k="card.when.time">3rd at 7:00am</Copy>

<Copy k="end">
  Every month, the anomaly report is in your folder before anyone opens the
  console.
</Copy>
`;export{e as default};