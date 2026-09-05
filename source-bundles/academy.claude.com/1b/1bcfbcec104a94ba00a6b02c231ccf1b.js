var e=`---
kind: widget-copy
---

{/* Film for the “Answer the ad-hoc data question” use case. \`line.*\` are the
    one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`opener.mark\` is the phrase highlighted in
    the opening window and must match its text. \`reply.did*\` are the phrases
    of the reply the film marks, in reading order: keep each one verbatim in
    \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Answer the ad-hoc data question</Copy>
<Copy k="sub">Finance asks you to explain why a number fell this month.</Copy>

<Copy k="line.ask">
  With the Data plugin’s [[query skill]], paste their question and ask why,
  with a chart.
</Copy>
<Copy k="line.does">
  Claude reads your schema and metric definitions first, then queries the
  warehouse.
</Copy>
<Copy k="line.question">
  Claude reads your schema and metric definitions first, then queries the
  warehouse.
</Copy>
<Copy k="line.get">
  Claude says what it found and gives you the [[chart]] and the query.
</Copy>
<Copy k="line.note1">
  It runs on your tables and metric, so you can rerun it.
</Copy>
<Copy k="line.note2">
  The change is split into its parts; the biggest one stands out.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">its parts</Copy>
<Copy k="line.note2.at2">biggest one</Copy>
<Copy k="line.again">
  Schedule it hourly, and each new question has a draft answer waiting for
  your review.
</Copy>
<Copy k="line.close">
  The person who asked gets a checked answer and can rerun it later.
</Copy>

<Copy k="opener.mark">Why is gross margin down in EMEA this quarter?</Copy>
<Copy k="attachment1.title">Analytics / EMEA-margin-question</Copy>
<Copy k="attachment1.sub">Schema, metrics library, data dictionary</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">finance-schema.sql</Copy>
<Copy k="attachment2.sub">FINANCE tables</Copy>
<Copy k="attachment2.tag">SQL</Copy>
<Copy k="attachment3.title">metrics-library.md</Copy>
<Copy k="attachment3.sub">Certified definitions</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Here's the question from Finance: “Why is gross margin down in EMEA this
  quarter?” [[Write the SQL]] to answer it, run it against the warehouse,
  [[tell me what's driving the move]], and give me the [[chart spec for the
  dashboard]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">Rosa’s message in the requests thread</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">finance-schema.sql</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">metrics-library.md, gross margin (certified)</Copy>
<Copy k="source4.verb">Queried</Copy>
<Copy k="source4.text">margin by country and product, two quarters</Copy>
<Copy k="source5.verb">Queried</Copy>
<Copy k="source5.text">UK revenue mix by week since launch</Copy>

<Copy k="verb1">Reading Rosa’s message</Copy>
<Copy k="verb2">Reading finance-schema.sql</Copy>
<Copy k="verb3">Reading the gross margin definition</Copy>
<Copy k="verb4">Querying Snowflake</Copy>
<Copy k="verb5">Querying UK revenue mix by week</Copy>
<Copy k="verb6">Drawing the chart</Copy>
<Copy k="verb7">Writing the answer</Copy>

<Copy k="reply.did1">ran the certified margin query</Copy>
<Copy k="reply.did2">on your FINANCE tables</Copy>
<Copy k="reply.did3">explain the rest</Copy>
<Copy k="reply.did4">nothing has gone to Rosa</Copy>
<Copy k="file1.meta">Interactive chart</Copy>
<Copy k="file2.meta">Query</Copy>

<Copy k="chart.title">What moved EMEA gross margin, Q1 to Q2 FY26</Copy>
<Copy k="chart.sub">
  In percentage points, by country and cause. Six drivers sum to the
  {points}-point fall; the line is Q1.
</Copy>

<Copy k="again.bubble">
  Run this {when}: check Analytics requests for new questions, run
  /write-query against the warehouse, and save a draft answer to Analytics /
  Inbox for me to review before anything goes back.
</Copy>
<Copy k="again.bubble.when">every hour on weekdays</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Analytics requests inbox</Copy>
<Copy k="again.card.cadence">Every hour on weekdays</Copy>
<Copy k="again.out1">Checks Analytics requests for new questions</Copy>
<Copy k="again.out2">Runs /write-query on each against the warehouse</Copy>
<Copy k="again.out3">Writes a draft answer to Analytics / Inbox</Copy>
<Copy k="again.out3.em">for your review</Copy>
`;export{e as default};