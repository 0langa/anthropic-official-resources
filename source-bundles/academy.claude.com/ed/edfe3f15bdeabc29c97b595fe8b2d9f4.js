var e=`---
kind: widget-copy
---

{/* Film for the “Turn customer feedback into ranked themes” use case.
    \`line.*\` are the one sentence shown per chapter; a phrase in [[double
    brackets]] is the part the film underlines — keep the brackets around the
    equivalent words. \`prompt\` is typed on screen. \`prompt\` ends with
    \`opener.question\`, word for word. \`reply.did*\` are the phrases of the
    reply the film marks, in reading order: keep each one verbatim in
    \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Turn customer feedback into ranked themes</Copy>
<Copy k="sub">
  You need the themes in your customer feedback before planning starts.
</Copy>

<Copy k="line.ask">
  Using the Product Management plugin’s [[synthesis skill]], name each source
  and ask for ranked themes.
</Copy>
<Copy k="line.does">
  Claude reads the survey comments, tickets, call notes and channel, and
  checks your roadmap.
</Copy>
<Copy k="line.question">
  Claude checks with you before it decides anything that is your call.
</Copy>
<Copy k="line.get">
  Claude says what it found and gives you the [[themes brief]] and the sheet.
</Copy>
<Copy k="line.note1">
  Each theme is counted across every source, with one quote.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">counted</Copy>
<Copy k="line.note1.at2">one quote</Copy>
<Copy k="line.note2">
  Each theme is marked planned or new against the roadmap.
</Copy>
<Copy k="line.again">
  You can schedule a fresh brief from the same sources before every roadmap
  review.
</Copy>
<Copy k="line.close">
  You go into planning knowing what customers ask for most, with counts.
</Copy>

<Copy k="opener.question">
  How many customers are asking for this, and is it planned?
</Copy>
<Copy k="attachment1.title">Product / voc-q2</Copy>
<Copy k="attachment1.sub">3 items</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">nps-verbatims-q2.csv</Copy>
<Copy k="attachment2.sub">Survey comments</Copy>
<Copy k="attachment2.tag">CSV</Copy>
<Copy k="attachment3.title">sales-call-snippets.md</Copy>
<Copy k="attachment3.sub">Call notes</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Read this folder, #product-feedback and open Zendesk tickets tagged
  feedback. Cluster into 5 to 7 themes [[ranked by frequency and severity]],
  best verbatim each; [[flag which map to a roadmap item]] in Linear versus
  net-new. VoC brief for roadmap review. How many customers are asking for
  this, and is it planned?
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">nps-verbatims-q2.csv, 486 comments</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">Q3 2026 roadmap, 14 items</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">112 open tickets tagged feedback</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">#product-feedback, last 90 days</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">call snippets and 6 interviews</Copy>

<Copy k="verb1">Reading nps-verbatims-q2.csv</Copy>
<Copy k="verb2">Reading the Q3 roadmap</Copy>
<Copy k="verb3">Reading tickets tagged feedback</Copy>
<Copy k="verb4">Reading #product-feedback</Copy>
<Copy k="verb5">Reading call notes and interviews</Copy>
<Copy k="verb6">Grouping 838 items into themes</Copy>
<Copy k="verb7">Waiting for you</Copy>
<Copy k="verb8">Checking themes against the roadmap</Copy>
<Copy k="verb9">Writing the brief</Copy>

<Copy k="question.title">Is bulk import already on the roadmap, or new?</Copy>
<Copy k="question.option1">New, note LIN-2331 as related</Copy>
<Copy k="question.option2">Already planned as LIN-2331</Copy>
<Copy k="question.answer">It is new; note LIN-2331 as related.</Copy>

<Copy k="reply.did1">from five sources into six themes</Copy>
<Copy k="reply.did2">ranked by frequency and severity</Copy>
<Copy k="reply.did3">three are net-new</Copy>
<Copy k="reply.did4">the coding sheet traces every item</Copy>
<Copy k="reply.text">
  I grouped 838 pieces of feedback from five sources into six themes, ranked
  by frequency and severity; permissions leads with 186 mentions. Three match
  the Q3 roadmap and three are net-new, bulk import among them with LIN-2331
  noted; the coding sheet traces every item.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Spreadsheet</Copy>

<Copy k="again.bubble">
  Run this {when} before roadmap review: same folder, channel and ticket tag,
  and write the brief and coding sheet to the quarter’s folder.
</Copy>
<Copy k="again.bubble.when">every Friday at 4pm</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Voice of Customer brief</Copy>
<Copy k="again.card.cadence">Fridays at 4:00 PM</Copy>
<Copy k="again.out1">
  Reads new survey comments, tickets, call notes and channel posts
</Copy>
<Copy k="again.out2">
  Re-counts the themes and checks them against the roadmap
</Copy>
<Copy k="again.out3">
  Writes the brief and coding sheet to the quarter’s folder
</Copy>
<Copy k="again.out3.em">for you to review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 0736a8453e2523fb */}
<Copy k="widget.description">
  Film: a walkthrough showing how Claude turns scattered customer feedback
  into a prioritized brief for a product roadmap review. The user points
  Claude at a folder of survey comments, support tickets, call notes, and a
  feedback Slack channel, asking it to cluster everything into several themes
  ranked by frequency and severity, pull a representative quote per theme, and
  flag whether each matches an existing roadmap item or is net-new. Claude
  reads all sources, pauses to check one judgment call with the user before
  deciding, then returns a one-page Voice of Customer brief plus a coding
  sheet tracing every feedback item. It teaches that synthesis tools can
  quantify and surface recurring customer requests, link them to existing
  plans, and be rerun on a schedule before future planning cycles.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to cluster scattered customer feedback into
  ranked themes with quotes, checked against the roadmap, producing a brief
  the user can rerun on a schedule before future planning reviews.
</Copy>
`;export{e as default};