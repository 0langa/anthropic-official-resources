var e=`---
kind: widget-copy
---

{/* Film for the “Explain why a metric moved” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Explain why a metric moved</Copy>
<Copy k="sub">
  A number on your dashboard fell and you need to explain why.
</Copy>

<Copy k="line.ask">
  Using the Product Management plugin’s [[metrics skill]], name segments and
  ask what shipped near the drop.
</Copy>
<Copy k="line.does">
  Claude splits the funnel export by each segment, then checks your tracker
  for what shipped.
</Copy>
<Copy k="line.question">
  Claude splits the funnel export by each segment, then checks your tracker
  for what shipped.
</Copy>
<Copy k="line.get">
  Claude tells you what it found, then gives you the [[write-up]] with its
  charts.
</Copy>
<Copy k="line.note1">
  Claude ties the drop to one release and says how sure it is.
</Copy>
<Copy k="line.note2">
  Claude checks each segment you named and shows the one that moved.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">the one that moved</Copy>
<Copy k="line.again">
  Schedule it weekly, and the write-up and charts are in the folder before
  your review.
</Copy>
<Copy k="line.close">
  Your team knows what moved the number and why, every week.
</Copy>

<Copy k="attachment1.title">Product / metrics / wk34</Copy>
<Copy k="attachment1.sub">Funnel export, changelog, last week’s narrative</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">amplitude-activation-funnel-wk34.csv</Copy>
<Copy k="attachment2.sub">Export, all signups</Copy>
<Copy k="attachment2.tag">CSV</Copy>
<Copy k="attachment3.title">narrative-wk33.md</Copy>
<Copy k="attachment3.sub">Format to match</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Find the anomaly in this week's funnel. Segment by plan, platform, and
  signup source to isolate the driver, [[check it against what shipped]] that
  week, and write the “what happened and why” narrative with the [[two charts
  that prove it]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">activation-funnel-wk34.csv</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">changelog-aug.md</Copy>
<Copy k="source3.verb">Searched</Copy>
<Copy k="source3.text">issues shipped to onboarding that week</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">narrative-wk33.md, format to match</Copy>

<Copy k="verb1">Reading the funnel export</Copy>
<Copy k="verb2">Segmenting by plan, platform, source</Copy>
<Copy k="verb3">Reading changelog-aug.md</Copy>
<Copy k="verb4">Searching Linear for what shipped</Copy>
<Copy k="verb5">Reading last week’s narrative</Copy>
<Copy k="verb6">Drawing two charts</Copy>
<Copy k="verb7">Writing activation-narrative-wk34.md</Copy>

<Copy k="reply.did1">by plan, platform and source</Copy>
<Copy k="reply.did2">checked it against what shipped</Copy>
<Copy k="reply.did3">all in one cell</Copy>
<Copy k="reply.did4">Likely cause, medium confidence</Copy>
<Copy k="file1.meta">Interactive chart</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="chart.titleA">
  Change in day-1 activation by platform and source, week 34 vs 33
</Copy>
<Copy k="chart.subA">
  In points. One cell moved; every other cell is within a point, and plan
  tier explains nothing on its own.
</Copy>
<Copy k="chart.rule">no change</Copy>
<Copy k="chart.titleB">iOS, paid social: step conversion, week 33 vs 34</Copy>
<Copy k="chart.subB">
  {signups} signups. The first step broke; the second held.
</Copy>

<Copy k="again.bubble">
  Run this {when}: take last week’s funnel export in Product / metrics, run
  /metrics-review, check Linear for what shipped, and write the narrative and
  two charts to that week’s folder. Flag anything that moved more than 10%.
</Copy>
<Copy k="again.bubble.when">every Monday at 7am</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Weekly metrics narrative</Copy>
<Copy k="again.card.cadence">Mondays at 7:00 AM</Copy>
<Copy k="again.out1">Reads last week’s funnel export in Product / metrics</Copy>
<Copy k="again.out2">
  Runs /metrics-review and checks Linear for what shipped
</Copy>
<Copy k="again.out3">
  Writes the narrative and two charts to that week’s folder
</Copy>
<Copy k="again.out3.em">before your review</Copy>
`;export{e as default};