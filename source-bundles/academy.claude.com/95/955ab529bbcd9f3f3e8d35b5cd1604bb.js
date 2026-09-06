var e=`---
kind: widget-copy
---

{/* Film for the “Turn the variance workbook into slides” use case. \`line.*\`
    are the one sentence shown per chapter; a phrase in [[double brackets]] is
    the part the film underlines — keep the brackets around the equivalent
    words. \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the
    reply the film marks, in reading order: keep each one verbatim in
    \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Turn the variance workbook into slides</Copy>
<Copy k="sub">
  Your variance workbook is done and leadership needs it as a few slides.
</Copy>

<Copy k="line.ask">
  Using the Finance plugin’s [[financial statements skill]], name your slides
  and the deck to match.
</Copy>
<Copy k="line.does">
  Claude reads the workbook, last quarter’s deck and your note on one-time
  items.
</Copy>
<Copy k="line.question">
  When something is yours to decide, Claude stops and asks.
</Copy>
<Copy k="line.get">
  Claude tells you where every figure came from, then gives you the
  [[slides]].
</Copy>
<Copy k="line.note1">
  Every figure on the slides comes from a cell in this workbook.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">a cell</Copy>
<Copy k="line.note2">
  One-off items are labeled the same way in the sheet and on the slide.
</Copy>
<Copy k="line.again">
  You can schedule the request so the slides rebuild when the next workbook
  arrives.
</Copy>
<Copy k="line.close">
  Leadership gets slides that match the workbook at every month end.
</Copy>

<Copy k="attachment1.title">Board-prep / March</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">Q4-board-finance.pptx</Copy>
<Copy k="attachment2.sub">Last quarter’s deck</Copy>
<Copy k="attachment2.tag">PPTX</Copy>
<Copy k="attachment3.title">known-one-timers.md</Copy>
<Copy k="attachment3.sub">2 items</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  March exec slides from the variance workbook: [[headline, drivers and
  outlook pages]], top movers above our materiality threshold with [[the known
  one-timers called out]]. Match last quarter's deck layout, waterfall on the
  drivers page.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">variance-mar-2026.xlsx</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">Q4-board-finance.pptx</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">known-one-timers.md</Copy>
<Copy k="source4.verb">Searched</Copy>
<Copy k="source4.text">Drive for the FP&A slide master</Copy>

<Copy k="verb1">Reading variance-mar-2026.xlsx</Copy>
<Copy k="verb2">Reading Q4-board-finance.pptx</Copy>
<Copy k="verb3">Reading known-one-timers.md</Copy>
<Copy k="verb4">Searching Drive</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Building the waterfall</Copy>
<Copy k="verb7">Writing the slides</Copy>

<Copy k="question.title">
  Show the two one-off items separately or leave them out?
</Copy>
<Copy k="question.option1">Own bars, labeled one-time</Copy>
<Copy k="question.option2">Leave out, show normalized result</Copy>
<Copy k="question.answer">Their own bars, and note the normalized figure.</Copy>

<Copy k="reply.did1">built the three March slides</Copy>
<Copy k="reply.did2">in last quarter’s layout</Copy>
<Copy k="reply.did3">their own labeled bars, as you chose</Copy>
<Copy k="reply.did4">every callout carries its cell reference</Copy>
<Copy k="reply.text">
  I built the three March slides from the P&L vs Plan sheet in last quarter’s
  layout, with the drivers page as a waterfall from $700K plan to $505K
  operating income. The two one-timers are their own labeled bars, as you
  chose, and every callout carries its cell reference.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>
<Copy k="file2.meta">Presentation</Copy>

<Copy k="again.bubble">
  Run this {when}: if a new variance workbook is in Board-prep, rebuild the
  slides and save them there.
</Copy>
<Copy k="again.bubble.when">every Monday</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Exec variance slides</Copy>
<Copy k="again.card.cadence">Mondays at 9:00 AM</Copy>
<Copy k="again.out1">Rebuilds the slides from the new workbook</Copy>
<Copy k="again.out2">Saves the deck to Board-prep</Copy>
<Copy k="again.out2.em">for you to review</Copy>
`;export{e as default};