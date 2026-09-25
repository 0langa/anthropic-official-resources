var e=`---
kind: widget-copy
---

{/* Film for the “Find the renewals at risk” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Find the renewals at risk</Copy>
<Copy k="sub">
  You need one current view of which renewals are at risk this quarter.
</Copy>

<Copy k="line.ask">
  Using the Sales plugin’s [[pipeline review skill]], set risk signals and ask
  what drove each score.
</Copy>
<Copy k="line.does">
  Claude reads the renewal book from the CRM, then checks usage, notes and
  tickets per account.
</Copy>
<Copy k="line.question">
  Claude reads the renewal book from the CRM, then checks usage, notes and
  tickets per account.
</Copy>
<Copy k="line.get">
  Claude tells you what it scored and found, then shows you the [[live
  board]].
</Copy>
<Copy k="line.note1">
  Each score names its signal, so a red is something to act on.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">score</Copy>
<Copy k="line.note1.at2">its signal</Copy>
<Copy k="line.note2">
  Leadership gets one link and can filter by segment, owner or risk.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">filter</Copy>
<Copy k="line.again">
  Schedule it weekly, and the board is rescored from the CRM before your
  forecast call.
</Copy>
<Copy k="line.close">
  Everyone sees the same list of renewals at risk, and why each one is.
</Copy>

<Copy k="attachment1.title">Renewals / FY26-Q3</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">qbr-and-call-notes-q2.md</Copy>
<Copy k="attachment2.sub">Last-touch sentiment</Copy>
<Copy k="attachment2.tag">MD</Copy>
<Copy k="attachment3.title">risk-rubric.md</Copy>
<Copy k="attachment3.sub">Your red, yellow and green</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  For every account renewing in the next 90 days, score renewal risk
  red/yellow/green based on product-usage trend, recent sentiment, and open
  exec commitments. [[Explain the signal that drove each score]], and
  [[publish it as a live artifact]] for leadership.
</Copy>

<Copy k="source1.verb">Queried</Copy>
<Copy k="source1.text">renewals closing by 29 Nov: 38 accounts</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">exec commitments and last activity</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">usage-90d-by-account.csv</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">qbr-and-call-notes-q2.md</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">open and escalated tickets by account</Copy>
<Copy k="source6.verb">Read</Copy>
<Copy k="source6.text">risk-rubric.md, your scoring rules</Copy>

<Copy k="verb1">Pulling the renewal book from Salesforce</Copy>
<Copy k="verb2">Reading executive commitments</Copy>
<Copy k="verb3">Reading the usage export</Copy>
<Copy k="verb4">Reading Q2 call notes</Copy>
<Copy k="verb5">Reading Zendesk tickets</Copy>
<Copy k="verb6">Reading risk-rubric.md</Copy>
<Copy k="verb7">Scoring 38 accounts</Copy>
<Copy k="verb8">Publishing the board</Copy>

<Copy k="reply.did1">scored the 38 accounts</Copy>
<Copy k="reply.did2">against your rubric</Copy>
<Copy k="reply.did3">each with its driving signal</Copy>
<Copy k="reply.did4">a next action per red</Copy>
<Copy k="reply.text">
  I scored the 38 accounts renewing by 29 November ($6.42M) against your
  rubric: six red ($1.31M), eleven yellow and twenty-one green, each with its
  driving signal. The board is published to filter and share, with a next
  action per red and two stale-notes accounts flagged.
</Copy>
<Copy k="file1.meta">Artifact</Copy>

<Copy k="again.bubble">
  Run this {when}: pull the current 90-day book from Salesforce, rescore it
  with /pipeline-review against risk-rubric.md, and refresh the board.
</Copy>
<Copy k="again.bubble.when">every Monday at 7am</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Weekly renewal risk audit</Copy>
<Copy k="again.card.cadence">Mondays at 7:00 AM</Copy>
<Copy k="again.out1">Pulls the current 90-day book from Salesforce</Copy>
<Copy k="again.out2">Rescores every account and refreshes the board</Copy>
<Copy k="again.out3">Marks accounts that turned red since last week</Copy>
<Copy k="again.out3.em">for you to work first</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 1ced709703f42a62 */}
<Copy k="widget.description">
  Film: a short use-case demo showing how to audit renewal risk with Claude
  Cowork. The user asks Claude, using a pipeline-review skill, to score every
  account renewing in the next 90 days as red, yellow, or green based on
  product-usage trend, recent sentiment, and open executive commitments.
  Claude pulls the renewal book from CRM, checks usage data, call notes, and
  support tickets per account, explains the signal behind each score, and
  publishes a live, filterable artifact for leadership showing risk, ARR,
  owner, and next action per red account. The film closes by showing how the
  same audit can be scheduled to run weekly, automatically rescoring from CRM
  and flagging newly at-risk accounts before forecast calls.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to score renewal accounts red, yellow, or green
  using CRM, usage, sentiment, and ticket data, then publishes a live,
  filterable risk board for leadership, which can be scheduled to refresh
  weekly.
</Copy>
`;export{e as default};