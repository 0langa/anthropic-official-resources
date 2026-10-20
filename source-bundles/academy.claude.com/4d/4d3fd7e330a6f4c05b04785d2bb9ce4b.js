var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DeckOnBrand.tsx. Keys are machine identifiers:
    translate only the text between the tags.
    The \`look\` keys are the one switch on the page. The \`ui\` keys are labels
    inside the simulated Claude Slides window, in the product's own wording.
    The design system's name, its group, color and text style names, and the
    deck are demo data and live in the code. */}

<Copy k="look.label">Which look the deck has</Copy>
<Copy k="look.own">Claude’s own look</Copy>
<Copy k="look.ds">Northwind design system</Copy>

<Copy k="ui.textColor">Text color</Copy>
<Copy k="ui.tabTheme">Theme</Copy>
<Copy k="ui.tabCustom">Custom</Copy>
<Copy k="ui.inThisSlide">In this slide</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 7b71cb2bf03d756f */}
<Copy k="widget.description">
  Comparison: one slide of a sample deck in the Claude Slides editor, switched
  between Claude's own look and a company's design system. With the design
  system, the slide and its thumbnails take the system's colors and heading
  font, the selected title carries the system's own text style name, and the
  text color menu lists the system's colors by name, starting with the ones
  this slide uses. In Claude's own look, the same menu lists only the color
  codes the deck already uses. It teaches what keeping a deck on brand means:
  Claude can build the deck in your brand's fonts and colors when you have a
  design system set up in Claude.
</Copy>
<Copy k="widget.summary">
  Comparison: one sample slide in Claude's own look and in a company's design
  system. It shows how a design system changes a deck's colors, fonts and
  color choices.
</Copy>
`;export{e as default};