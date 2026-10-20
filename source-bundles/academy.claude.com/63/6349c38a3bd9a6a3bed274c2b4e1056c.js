var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DeckBesideConversation.tsx. Keys are machine
    identifiers: translate only the text between the tags.
    \`task\` is the one instruction above the window. The \`chat\` keys are Claude's
    simulated reply. \`ui.expand\` is a label inside the simulated Claude window,
    in the product's own wording.
    The company and the figures in the deck are demo data and live in the
    code. */}

<Copy k="task">
  Click a thumbnail to see another slide, or expand the deck with the arrows at
  the top right.
</Copy>

<Copy k="chat.claude1">
  Here’s the Q3 review as a six-slide deck. The numbers are from your CRM as
  of the October 2 close, with one chart per slide and the source under each.
</Copy>
<Copy k="chat.claude2">
  I assumed this project’s FY26 plan is the one to compare against. The last
  slide is a draft of Q4 commitments for you to confirm.
</Copy>

<Copy k="ui.expand">Expand</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 5adb332a0011105f */}
<Copy k="widget.description">
  Simulation: a Claude conversation with a finished slide deck open beside it
  in the Claude Slides editor. The request asks Claude to pull figures from a
  connected CRM and make a quarterly review deck with one chart per slide.
  Claude's reply says where the numbers came from, names an assumption it
  made, and points to a draft slide for you to confirm. The learner can page
  through the sample slides from the thumbnails and expand the deck to fill
  the window. It teaches what asking for a deck gives you: a deck that opens
  beside the conversation, ready to edit, and a reply that tells you what
  Claude assumed.
</Copy>
<Copy k="widget.summary">
  Simulation: a Claude conversation with a sample quarterly review deck open
  beside it. Page through the slides to learn what asking for a deck gives
  you.
</Copy>
`;export{e as default};