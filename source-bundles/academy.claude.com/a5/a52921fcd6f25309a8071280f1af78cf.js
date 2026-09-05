var e=`---
kind: widget-copy
---

{/* Film for the “Build the competitive comparison” use case. \`line.*\` are the
    one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Build the competitive comparison</Copy>
<Copy k="sub">Sales wants to know how you compare with a competitor.</Copy>

<Copy k="line.ask">
  Using the Marketing plugin’s [[competitive brief skill]], ask who wins
  where, as a deck and matrix.
</Copy>
<Copy k="line.does">
  Claude reads their public pages and your own documents.
</Copy>
<Copy k="line.question">
  Claude asks you first wherever your judgment is needed.
</Copy>
<Copy k="line.get">
  Claude tells you what it compared, then gives you the [[deck and matrix]].
</Copy>
<Copy k="line.note1">Each slide says where its claim came from.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">came from</Copy>
<Copy k="line.note2">Every row has a verdict and a source.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">verdict</Copy>
<Copy k="line.note2.at2">source</Copy>
<Copy k="line.again">
  You can put the same request on a schedule and review what Claude drafts.
</Copy>
<Copy k="line.close">
  Sales can answer how you compare, and the answer stays current.
</Copy>

<Copy k="attachment1.title">Competitive / Acme</Copy>
<Copy k="attachment1.sub">Folder on this Mac</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">acme-datasheet.pdf</Copy>
<Copy k="attachment2.sub">14 pages</Copy>
<Copy k="attachment2.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Acme vs us, from their site, pricing page and datasheet plus our positioning
  doc: [[where we win, where they win]], and where it's a draw. Give me [[a
  PowerPoint deck]] for sales and [[an Excel matrix]], feature by feature.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">acme-cloud.example/pricing</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">acme-datasheet.pdf</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">positioning-v7</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">comparison-Q1.pptx</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">#competitive</Copy>

<Copy k="verb1">Reading acme-cloud.example/pricing</Copy>
<Copy k="verb2">Reading acme-datasheet.pdf</Copy>
<Copy k="verb3">Reading positioning-v7</Copy>
<Copy k="verb4">Reading comparison-Q1.pptx</Copy>
<Copy k="verb5">Reading #competitive</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Scoring every feature</Copy>
<Copy k="verb8">Writing the deck and the matrix</Copy>

<Copy k="question.title">Who is this comparison deck for?</Copy>
<Copy k="question.option1">An enterprise security buyer</Copy>
<Copy k="question.option2">A mid-market operations lead</Copy>

<Copy k="reply.did1">compared Acme’s site, pricing page and datasheet</Copy>
<Copy k="reply.did2">scored for an enterprise security buyer</Copy>
<Copy k="reply.did3">as you chose</Copy>
<Copy k="reply.did4">every matrix row names its source page</Copy>
<Copy k="reply.text">
  I compared Acme’s site, pricing page and datasheet with positioning-v7
  across 31 features, scored for an enterprise security buyer as you chose,
  and built the 12-slide deck and the matrix. The deck leads with the
  strongest wins and gives sales a talk track for each loss; every matrix row
  names its source page.
</Copy>
<Copy k="file1.meta">Presentation</Copy>
<Copy k="file2.meta">Spreadsheet</Copy>

<Copy k="again.bubble">
  Run this again {when} and post what changed to #competitive.
</Copy>
<Copy k="again.bubble.when">on the first Monday of each month</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Competitive comparison</Copy>
<Copy k="again.card.cadence">First Monday of each month</Copy>
<Copy k="again.out1">Updates the deck and the matrix</Copy>
<Copy k="again.out2">Drafts a post to #competitive</Copy>
<Copy k="again.out2.em">for you to review</Copy>

<Copy k="again.post">
  This quarter’s comparison with Acme is updated in {folder}. Three rows
  changed: SSO moved to their Team tier, the entry price rose to $15, and
  the free tier was removed.
</Copy>
<Copy k="again.post.status">Draft for you to review</Copy>
`;export{e as default};