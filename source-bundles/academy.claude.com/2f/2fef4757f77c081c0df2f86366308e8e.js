var e=`---
kind: widget-copy
---

{/* Learner-facing copy for WhatCarriesOver.tsx. Keys are machine identifiers:
    translate only the text between the tags.
    The \`where\` and \`fonts\` keys are the two switches on the page; "Current
    fonts" and "Basic fonts" follow the product's Download menu. The \`head\`
    keys are the title bar of the framed window, \`notes.label\` heads the notes
    under the slide, and the \`tag\` keys are the short labels that sit on the
    slide in the file view. The \`legend\` and \`caption\` keys are the explanation
    under the window.
    The slide and the speaker notes are demo data and live in the code. */}

<Copy k="where.label">Where you are looking at the slide</Copy>
<Copy k="where.slides">In Claude Slides</Copy>
<Copy k="where.file">In the PowerPoint file</Copy>

<Copy k="fonts.label">Which PowerPoint download</Copy>
<Copy k="fonts.current">Current fonts</Copy>
<Copy k="fonts.basic">Basic fonts</Copy>

<Copy k="head.slides">Q3 business review</Copy>
<Copy k="head.file">Q3 business review.pptx</Copy>

<Copy k="notes.label">Speaker notes</Copy>

<Copy k="tag.text">Text box</Copy>
<Copy k="tag.picture">Picture</Copy>
<Copy k="tag.notes">Notes pane</Copy>

<Copy k="legend.object">You can keep editing it in PowerPoint</Copy>
<Copy k="legend.picture">Becomes a picture</Copy>

<Copy k="caption.slides">
  Switch to the PowerPoint file to see what each part of the slide becomes.
</Copy>
<Copy k="caption.current">
  Keeps the deck’s own fonts. A computer that doesn’t have them substitutes its own.
</Copy>
<Copy k="caption.basic">
  Replaces your fonts with ones every computer has.
</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 7012d30d146dd560 */}
<Copy k="widget.description">
  Comparison: one slide of a sample deck as it is in Claude Slides and as it
  arrives in the downloaded PowerPoint file. In the file view, labels mark
  what each part becomes: the title and other text are text boxes, the speaker
  notes land in the notes pane, and the chart becomes a picture. A second
  switch compares the two PowerPoint downloads. Current fonts keeps the deck's
  own fonts, and a computer that doesn't have them substitutes its own. Basic
  fonts replaces them with fonts every computer has. It teaches which parts
  you can keep editing in PowerPoint and how the two downloads differ.
</Copy>
<Copy k="widget.summary">
  Comparison: one slide in Claude Slides and in the downloaded PowerPoint
  file. Text and speaker notes stay editable, the chart becomes a picture, and
  two font options are compared.
</Copy>
`;export{e as default};