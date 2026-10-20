var e=`---
kind: widget-copy
---

{/* Copy shared by the widgets in this folder that draw the Claude Design editor.
    It merges under each widget's own copy file, so these labels are translated
    once. Keys are machine identifiers: translate only the text between the
    tags. \`{title}\` is a runtime placeholder (an artboard's name) and must
    survive verbatim.
    \`show.label\` names the page's own artboard picker, which appears at phone
    width. Everything else is a label inside the simulated Claude window, in
    the product's own wording: the \`ui\` keys are the pane's header, the canvas
    toolbar, the row above an artboard and the Properties panel's frame; the
    \`layer\` keys are rows of the panel's outline; the \`panel\` keys are its
    sections, rows and values. \`ui.viewOnlyTip\` keeps the product's
    punctuation. */}

<Copy k="show.label">Artboard in view</Copy>

<Copy k="ui.comment">Comment</Copy>
<Copy k="ui.share">Share</Copy>
<Copy k="ui.expand">Expand</Copy>
<Copy k="ui.close">Close</Copy>
<Copy k="ui.readOnly">Viewer</Copy>

<Copy k="ui.canvas">Canvas</Copy>
<Copy k="ui.pageName">Page 1</Copy>
<Copy k="ui.select">Select</Copy>
<Copy k="ui.hand">Hand</Copy>
<Copy k="ui.text">Text</Copy>
<Copy k="ui.artboard">Artboard</Copy>
<Copy k="ui.note">Note</Copy>
<Copy k="ui.draw">Draw</Copy>
<Copy k="ui.shapes">Shapes and lines</Copy>
<Copy k="ui.tools">Tools</Copy>
<Copy k="ui.playAnArtboard">Play an artboard</Copy>
<Copy k="ui.properties">Properties</Copy>
<Copy k="ui.showProperties">Show the properties panel</Copy>
<Copy k="ui.hideProperties">Hide the properties panel</Copy>
<Copy k="ui.zoom">Zoom: ⌘0 fit, ⌘+ / ⌘− step</Copy>

<Copy k="ui.openFull">Open full window</Copy>
<Copy k="ui.exportArtboard">Export this artboard</Copy>
<Copy k="ui.playWord">Play</Copy>
<Copy k="ui.editWord">Edit</Copy>
<Copy k="ui.stopWord">Stop</Copy>
<Copy k="ui.playArtboard">Play prototype {title}</Copy>
<Copy k="ui.backToEditing">Edit {title}</Copy>
<Copy k="ui.stopPlaying">Stop playing {title}</Copy>
<Copy k="ui.playOnCanvas">Play on canvas</Copy>
<Copy k="ui.playFullScreen">Play full screen</Copy>

<Copy k="ui.panelView">Panel view</Copy>
<Copy k="ui.tabProperties">Properties</Copy>
<Copy k="ui.tabCode">Code</Copy>
<Copy k="ui.tabTweaks">Tweaks</Copy>
<Copy k="ui.closeProperties">Close properties</Copy>
<Copy k="ui.layers">Layers</Copy>
<Copy k="ui.viewOnlyTip">
  View only — you can inspect this design but not change it
</Copy>
<Copy k="ui.px">px</Copy>

<Copy k="layer.header">Header</Copy>
<Copy k="layer.button">Button</Copy>
<Copy k="layer.row">Row</Copy>
<Copy k="layer.list">List</Copy>

<Copy k="panel.emptyTitle">Nothing selected</Copy>
<Copy k="panel.emptyBody">
  Click any element in the design to edit it here.
</Copy>
<Copy k="panel.size">Size</Copy>
<Copy k="panel.width">Width</Copy>
<Copy k="panel.height">Height</Copy>
<Copy k="panel.hug">Hug</Copy>
<Copy k="panel.fixed">Fixed</Copy>
<Copy k="panel.fill">Fill</Copy>
<Copy k="panel.layout">Layout</Copy>
<Copy k="panel.stack">Stack</Copy>
<Copy k="panel.direction">Direction</Copy>
<Copy k="panel.gap">Gap</Copy>
<Copy k="panel.padding">Padding</Copy>
<Copy k="panel.perSide">Per side</Copy>
<Copy k="panel.appearance">Appearance</Copy>
<Copy k="panel.fillRow">Fill</Copy>
<Copy k="panel.radius">Radius</Copy>
`;export{e as default};