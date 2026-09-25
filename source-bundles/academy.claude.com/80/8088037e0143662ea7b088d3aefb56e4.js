var e=`---
kind: widget-copy
---

{/* Film for the “Find where competitors pulled ahead” use case. \`line.*\` are
    the one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Find where competitors pulled ahead</Copy>
<Copy k="sub">
  You want to know what competitors shipped that your product does not have
  yet.
</Copy>

<Copy k="line.ask">
  Using the Product Management plugin’s [[competitive brief skill]], name
  competitors and ask what you haven’t answered.
</Copy>
<Copy k="line.does">
  Claude reads each competitor’s pages, and takes your column from your docs
  and roadmap.
</Copy>
<Copy k="line.question">
  Claude asks you first wherever your judgment is needed.
</Copy>
<Copy k="line.get">
  Claude tells you what it scored, then gives you the [[matrix and brief]].
</Copy>
<Copy k="line.note1">Every row takes a position and names its source.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">a position</Copy>
<Copy k="line.note1.at2">its source</Copy>
<Copy k="line.note2">
  What they shipped is checked against your roadmap, answered or not.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">answered or not</Copy>
<Copy k="line.again">
  You can schedule the same teardown to rerun when a new quarter’s folder
  appears.
</Copy>
<Copy k="line.close">
  You know what competitors shipped that you have not answered.
</Copy>

<Copy k="browse.step1.label">Reading trellis-app.example/pricing</Copy>
<Copy k="browse.step3.label">Checking what Business includes</Copy>

<Copy k="attachment1.title">Product / competitive / q3</Copy>
<Copy k="attachment1.sub">Product overview and Q2 positioning</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">our-product-overview.docx</Copy>
<Copy k="attachment2.sub">What we have built</Copy>
<Copy k="attachment2.tag">DOCX</Copy>
<Copy k="attachment3.title">positioning-one-pager-q2.pdf</Copy>
<Copy k="attachment3.sub">Last quarter’s claims</Copy>
<Copy k="attachment3.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Competitive teardown of Trellis and Holloway against us. Browse their
  product, docs, changelog, pricing page and recent reviews and build a
  feature and positioning matrix. Call out [[where we win, where we're
  exposed]], and [[what they shipped that we haven't answered]] last quarter.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">product overview and positioning docs</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">trellis-app.example: product, pricing, changelog</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">holloway-hq.example: product, pricing, changelog</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">40 recent reviews of both</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">shipped flows in Pace / Product, 12 frames</Copy>
<Copy k="source6.verb">Read</Copy>
<Copy k="source6.text">Q3 roadmap, in flight and backlog, 18 issues</Copy>

<Copy k="verb1">Reading your product overview</Copy>
<Copy k="verb2">Browsing trellis-app.example</Copy>
<Copy k="verb3">Browsing holloway-hq.example</Copy>
<Copy k="verb4">Reading recent reviews</Copy>
<Copy k="verb5">Reading shipped flows in Figma</Copy>
<Copy k="verb6">Reading the Q3 roadmap</Copy>
<Copy k="verb7">Waiting for you</Copy>
<Copy k="verb8">Scoring 28 capabilities</Copy>
<Copy k="verb9">Writing the matrix and gap brief</Copy>

<Copy k="question.title">
  Count Trellis’s single sign-on as shipped or only partial?
</Copy>
<Copy k="question.option1">Partial, and link their docs</Copy>
<Copy k="question.option2">Shipped, as their pricing page says</Copy>
<Copy k="question.answer">Partial, and link their docs.</Copy>

<Copy k="reply.did1">scored 28 capabilities against Trellis and Holloway</Copy>
<Copy k="reply.did2">each with its source</Copy>
<Copy k="reply.did3">scored against documentation as you decided</Copy>
<Copy k="reply.did4">five things they shipped since June</Copy>
<Copy k="reply.text">
  I scored 28 capabilities against Trellis and Holloway from their sites,
  reviews, your docs and roadmap: 9 wins, 12 parity, 7 exposed, each with its
  source. Claims are scored against documentation as you decided, and the gap
  brief lists five things they shipped since June, four unscheduled.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="again.bubble">
  {when}: if a new quarter folder exists in Product / competitive, rerun this
  teardown there and list any cell that changed to Exposed.
</Copy>
<Copy k="again.bubble.when">Every Monday at 9am</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Competitive teardown refresh</Copy>
<Copy k="again.card.cadence">Mondays at 9:00 AM</Copy>
<Copy k="again.out1">
  Checks Product / competitive for a new quarter folder
</Copy>
<Copy k="again.out2">
  Browses Trellis and Holloway again and rewrites the matrix and gap brief
</Copy>
<Copy k="again.out3">Lists cells that changed to Exposed</Copy>
<Copy k="again.out3.em">for you</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: e9400e4453a97bec */}
<Copy k="widget.description">
  Film: the user asks Claude, using a Product Management plugin's
  competitive-brief skill, to build a competitive teardown against two named
  competitors. Claude browses each competitor's product pages, docs,
  changelog, pricing, and recent reviews, plus the user's own product
  overview, roadmap, and design files, then checks in with the user wherever
  judgment calls arise, such as whether a competitor's marketing claim should
  count as shipped or only partial. Claude returns a scored
  feature-and-positioning matrix with sources per row, and a gap brief listing
  what competitors shipped recently that remains unanswered on the roadmap.
  The user can schedule the same teardown to rerun automatically when a new
  quarter's data arrives, flagging any cell that newly turns exposed. It
  teaches how Cowork turns scattered competitor research into a sourced,
  repeatable comparison.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude, using a competitive-brief skill, to build a
  teardown against named competitors, browsing their product, docs, and
  pricing, checking in on judgment calls, then returning a sourced matrix and
  gap brief, plus an option to schedule it to rerun.
</Copy>
`;export{e as default};