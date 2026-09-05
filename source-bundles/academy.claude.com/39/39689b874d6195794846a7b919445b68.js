var e=`---
kind: widget-copy
---

{/* Film for the “Find the cloud cost anomaly” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Find the cloud cost anomaly</Copy>
<Copy k="sub">Your cloud bill jumped and you need to know where and why.</Copy>

<Copy k="line.ask">
  Set a baseline and a threshold, and ask for [[a cause and an owner]] each
  time.
</Copy>
<Copy k="line.does">
  Claude compares the export with past months in the warehouse, then checks
  monitoring for what changed.
</Copy>
<Copy k="line.question">
  When something is yours to decide, Claude stops and asks.
</Copy>
<Copy k="line.get">
  Claude says what jumped and why, and gives you the [[chart]] and ranked
  list.
</Copy>
<Copy k="line.note1">Each item names its owner and a next step.</Copy>
<Copy k="line.note2">The chart shows only what crossed your threshold.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">crossed</Copy>
<Copy k="line.note2.at2">your threshold</Copy>
<Copy k="line.again">
  Schedule it, and the report is in the folder when each month’s export
  arrives.
</Copy>
<Copy k="line.close">
  You know what drove the bill up and who is looking into each part.
</Copy>

<Copy k="attachment1.title">Infra / cloud-cost / 2026-04</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">tag-team-map.csv</Copy>
<Copy k="attachment2.sub">Tag to team</Copy>
<Copy k="attachment2.tag">CSV</Copy>
<Copy k="attachment3.title">2026-03-anomaly-report.md</Copy>
<Copy k="attachment3.sub">Last month’s report</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Compare this month's AWS costs to the trailing three-month average by
  service and tag:team. Flag any line [[more than 20% over trend]], trace each
  to the workload or change behind it, and give every item [[an owner and
  recommended action]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">aws-cur-2026-04.csv</Copy>
<Copy k="source2.verb">Queried</Copy>
<Copy k="source2.text">cost by service and team, Jan–Mar</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">tag-team-map.csv</Copy>
<Copy k="source4.verb">Checked</Copy>
<Copy k="source4.text">deploys and traffic around each spike</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">merges to payments-api in April</Copy>
<Copy k="source6.verb">Read</Copy>
<Copy k="source6.text">2026-03-anomaly-report.md</Copy>

<Copy k="verb1">Reading aws-cur-2026-04.csv</Copy>
<Copy k="verb2">Querying Snowflake</Copy>
<Copy k="verb3">Reading tag-team-map.csv</Copy>
<Copy k="verb4">Checking Datadog</Copy>
<Copy k="verb5">Reading merges to payments-api</Copy>
<Copy k="verb6">Reading last month’s report</Copy>
<Copy k="verb7">Waiting for you</Copy>
<Copy k="verb8">Drawing the chart</Copy>
<Copy k="verb9">Writing the report</Copy>

<Copy k="question.title">Was the jump in S3 backfill spend planned?</Copy>
<Copy k="question.option1">Yes, planned, mark it expected</Copy>
<Copy k="question.option2">No, count it as an anomaly</Copy>
<Copy k="question.answer">Yes, that was planned, mark it expected.</Copy>

<Copy k="reply.did1">compared April’s AWS bill to the three-month trend</Copy>
<Copy k="reply.did2">Each has a cause</Copy>
<Copy k="reply.did3">an owner and a next step</Copy>
<Copy k="table.item">Line item</Copy>
<Copy k="table.over">Over trend</Copy>
<Copy k="table.owner">Owner</Copy>
<Copy k="table.next">Next step</Copy>
<Copy k="row1.next">
  Terminate both and add an idle-stop rule to the training launch template.
</Copy>
<Copy k="row2.next">
  Pin indexer reads to same-zone replicas and add an S3 gateway endpoint.
</Copy>
<Copy k="row3.next">
  Revert the log level and set 14-day retention on the group.
</Copy>
<Copy k="row4.next">Downsize or remove it at the launch review.</Copy>

<Copy k="file1.meta">Interactive chart</Copy>

<Copy k="chart.title">April vs trailing three-month average</Copy>
<Copy k="chart.sub">
  By service and owning team. Dashed line is your 20% threshold; hatched bar
  is a planned spike.
</Copy>
<Copy k="chart.threshold">threshold</Copy>
<Copy k="chart.expected">expected</Copy>

<Copy k="again.bubble">
  Run this {when}: if a new month’s export is in Infra / cloud-cost, compare
  it to trend with /debug and write the report to that month’s folder.
</Copy>
<Copy k="again.bubble.when">every Monday</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Monthly cloud-cost anomaly report</Copy>
<Copy k="again.card.cadence">Mondays at 7:00 AM</Copy>
<Copy k="again.out1">Checks Infra / cloud-cost for a new month’s export</Copy>
<Copy k="again.out2">Compares it to trend with /debug</Copy>
<Copy k="again.out3">Writes the report to that month’s folder</Copy>
<Copy k="again.out3.em">for you to review</Copy>
`;export{e as default};