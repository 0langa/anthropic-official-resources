var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DesignOnArtboards.tsx. Keys are machine identifiers:
    translate only the text between the tags.
    \`task\` is the one instruction above the window. The \`viewAs\` keys are the
    switch between the owner's view and a teammate's. The \`chat\` keys are the
    request and Claude's simulated reply. The \`ui\`, \`panel\` and \`layer\` keys
    are labels inside the simulated Claude window, in the product's own
    wording; the four \`panel.border\` names are the accessible names of the
    Border row's segments, which show no words. The \`aria\` keys name the two
    elements a teammate can click to inspect. The \`caption\` keys are one line
    under the window per state, saying what to try next or what the state
    means.
    The editor's other labels are in the folder's shared copy file. The
    notification center and its figures are demo data and live in the code. */}

<Copy k="task">
  Press Play on the first artboard, then Play on canvas. Then switch to a
  teammate with view access.
</Copy>

<Copy k="viewAs.label">Who is looking at the design</Copy>
<Copy k="viewAs.owner">You</Copy>
<Copy k="viewAs.teammate">A teammate with view access</Copy>

<Copy k="chat.user">
  Prototype a notification center for the Northwind app. Show me three layouts
  on separate artboards. Make the first one clickable.
</Copy>
<Copy k="chat.claude">
  Here are three layouts, each on its own artboard. The first is clickable:
  press Play on it to try the filters and Mark all read.
</Copy>

<Copy k="ui.kindDesign">Claude Design</Copy>
<Copy k="ui.onlyYou">Only you</Copy>
<Copy k="ui.hide">Hide</Copy>

<Copy k="panel.border">Border</Copy>
<Copy k="panel.borderNone">None</Copy>
<Copy k="panel.borderSolid">Solid</Copy>
<Copy k="panel.borderDashed">Dashed</Copy>
<Copy k="panel.borderDotted">Dotted</Copy>

<Copy k="layer.heading">Heading</Copy>

<Copy k="aria.pick.filters">Inspect the row of filters</Copy>
<Copy k="aria.pick.markAll">Inspect the Mark all read button</Copy>

<Copy k="caption.owner">
  The Play button marks the artboard that is clickable.
</Copy>
<Copy k="caption.ownerPlaying">
  Try a filter or Mark all read. Esc or Edit goes back to editing.
</Copy>
<Copy k="caption.teammate">
  To read an element’s size, spacing and colors, press the Properties button at
  the top right of the canvas.
</Copy>
<Copy k="caption.teammatePanel">
  Click the row of filters or the Mark all read button to read its values.
</Copy>
<Copy k="caption.teammateInspect">The values can be read but not changed.</Copy>
<Copy k="caption.teammatePlaying">
  Nothing a viewer clicks changes the design for anyone else.
</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 19d0ef12da0ab7c5 */}
<Copy k="widget.description">
  Simulation: a Claude conversation with a prototype open beside it on the
  Claude Design canvas. The request asks for a notification center in
  alternative layouts on separate artboards, with the first one made
  clickable. The learner can play that artboard on the canvas, try its
  filters, and go back to editing. A switch shows the same design to a
  teammate with view access, who can open Properties, pick an element to read
  its size, spacing and colors, and play the prototype, but can't change the
  design. It teaches what asking for a prototype gives you, that a Play button
  marks a clickable artboard, and what view access allows.
</Copy>
<Copy k="widget.summary">
  Simulation: a prototype on artboards, open beside its conversation in Claude
  Design. Play the first artboard, then switch to a teammate with view access,
  who can inspect the design but not change it.
</Copy>
`;export{e as default};