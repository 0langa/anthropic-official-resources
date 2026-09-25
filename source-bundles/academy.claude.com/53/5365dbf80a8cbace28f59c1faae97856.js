var e=`---
kind: widget-copy
---

{/* Film for the “Review a deal’s data room” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Review a deal’s data room</Copy>
<Copy k="sub">
  You have hundreds of deal documents to review, and every finding must be
  cited.
</Copy>

<Copy k="line.ask">
  Using the Corporate Legal plugin’s [[diligence skill]], ask Claude to
  categorize first and cite every entry.
</Copy>
<Copy k="line.does">
  Claude reads your request list, indexes the room by category, then reads the
  material contracts.
</Copy>
<Copy k="line.question">
  Claude checks with you before it decides anything that is your call.
</Copy>
<Copy k="line.get">
  Claude tells you what it flagged, then gives you the [[index and summary]].
</Copy>
<Copy k="line.note1">
  Every document lands in one of your categories; gaps are listed.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">your categories</Copy>
<Copy k="line.note2">Each issue names its folder, document and section.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">folder, document and section</Copy>
<Copy k="line.again">
  You can schedule a daily refresh so late uploads land in the same index.
</Copy>
<Copy k="line.close">
  You get a first pass over the whole data room, every finding cited.
</Copy>

<Copy k="attachment1.title">Deals / Project-Silvern</Copy>
<Copy k="attachment1.sub">2 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">diligence-request-list.docx</Copy>
<Copy k="attachment2.sub">11 categories, $250,000 threshold</Copy>
<Copy k="attachment2.tag">DOCX</Copy>
<Copy k="attachment3.title">diligence-summary-template.docx</Copy>
<Copy k="attachment3.sub">House format</Copy>
<Copy k="attachment3.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Read every document in the connected data room. [[Categorize each by type]],
  then for the material contracts extract counterparty, term,
  change-of-control, assignment and consent provisions. Flag the material
  issues and draft [[the diligence summary]]; [[cite document and section for
  every entry]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">diligence-request-list.docx, 11 categories</Copy>
<Copy k="source2.verb">Listed</Copy>
<Copy k="source2.text">Project Silvern — Data Room, 614 documents</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">diligence-summary-template.docx</Copy>
<Copy k="source4.verb">Listed</Copy>
<Copy k="source4.text">614 documents into 11 categories, 1 empty</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">02 Material Contracts, 63 above threshold</Copy>
<Copy k="source6.verb">Read</Copy>
<Copy k="source6.text">23 more agreements with key terms</Copy>

<Copy k="verb1">Reading the request list</Copy>
<Copy k="verb2">Indexing the data room</Copy>
<Copy k="verb3">Reading the summary template</Copy>
<Copy k="verb4">Categorizing 614 documents</Copy>
<Copy k="verb5">Reading 63 material contracts</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Reading 23 further agreements</Copy>
<Copy k="verb8">Writing the index and the summary</Copy>

<Copy k="question.title">
  Read the small contracts with restrictive terms in full too?
</Copy>
<Copy k="question.option1">Yes, include them</Copy>
<Copy k="question.option2">No, just list them</Copy>
<Copy k="question.answer">Yes, include them.</Copy>

<Copy k="reply.did1">indexed all 614 documents</Copy>
<Copy k="reply.did2">listed seven gaps</Copy>
<Copy k="reply.did3">you asked me to include</Copy>
<Copy k="reply.did4">every entry cites the room folder</Copy>
<Copy k="reply.text">
  I indexed all 614 documents against your 11 request categories, listed seven
  gaps, and read 86 material contracts in full: 63 above your threshold plus
  the 23 you asked me to include. The summary flags 14 issues, 4 red, and
  every entry cites the room folder, document and section.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: re-read the Box room, update the index and the issues list,
  and note what is new since the last run.
</Copy>
<Copy k="again.bubble.when">every morning at 7</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Data-room diligence refresh</Copy>
<Copy k="again.card.cadence">Daily at 7:00 AM</Copy>
<Copy k="again.out1">Re-reads the connected data room</Copy>
<Copy k="again.out2">Updates the index and flags new documents</Copy>
<Copy k="again.out3">Adds new issues to the summary</Copy>
<Copy k="again.out3.em">for the deal team to review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 044a0d3c044f53ec */}
<Copy k="widget.description">
  Film: a self-playing walkthrough showing how to use Claude for M&A due
  diligence on a connected data room. The user asks Claude, via a Corporate
  Legal skill, to categorize every document against a request list, cite each
  entry, and flag material issues before drafting a diligence summary. Claude
  reads the request list and contract set, indexes the room by category,
  pauses to check with the user on a judgment call about which smaller
  contracts to review fully, then reports what it found and delivers a
  categorized index plus a cited issues summary. It closes by showing how the
  same review can be scheduled to re-run automatically, keeping the index and
  issues list current as new documents arrive. The goal is to show diligence
  review that's fully categorized, checked before judgment calls, and cited to
  source documents throughout.
</Copy>
<Copy k="widget.summary">
  Film: a self-playing walkthrough of Claude reviewing a connected data room
  for M&A diligence, categorizing documents, flagging material issues, and
  drafting a cited summary. It shows Claude pausing to check a judgment call
  with the user and scheduling the review to re-run automatically.
</Copy>
`;export{e as default};