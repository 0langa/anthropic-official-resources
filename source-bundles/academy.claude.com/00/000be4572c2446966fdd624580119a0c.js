var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DsReadOrder.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags. \`{name}\` is a runtime
    placeholder (the example company's name) and must survive verbatim.
    \`label\` describes the whole figure for screen readers. \`step1\` to \`step4\`
    are the four numbered steps, each a \`.title\` and a \`.body\`. The \`part\`
    keys name the parts of the system on the small shelf beside steps one and
    two; \`part.textInput\` is a component, named as it is in code. The
    \`pickers\` keys label what the editor lists beside step three, with the
    \`style\` keys the three text style names. The \`card\` keys are the small
    result beside step four. The Overview part, the Button and Badge parts and
    the result's button label come from _shared.copy.mdx. Color values are
    sample data in the .tsx. */}

<Copy k="label">
  Four steps. One: Claude reads your overview, every time. Two: it opens only
  the parts the task needs, here colors and type, the Button component and the
  logos, and leaves the rest closed. Three: the editor lists your colors and
  text styles. Four: it builds with them, here a small card in {name}'s colors
  with {name}'s button.
</Copy>

<Copy k="step1.title">Reads your overview first</Copy>
<Copy k="step1.body">
  The overview ends with a list of everything else in your design system.
</Copy>
<Copy k="step2.title">Opens only what the task needs</Copy>
<Copy k="step2.body">
  For example, it reads your colors and type for visual work, and a component’s
  notes before it uses that component in a design.
</Copy>
<Copy k="step3.title">Lists your styles in the editor</Copy>
<Copy k="step3.body">
  In the editor, the color pickers and the text style menu list your own colors
  and styles, so edits you make by hand stay in your brand.
</Copy>
<Copy k="step4.title">Builds, and says what’s missing</Copy>
<Copy k="step4.body">
  Claude builds with your exact values and real components in place of its own
  defaults. If your design system is missing a value or component, Claude is
  designed to say so, and its reply usually says what it assumed.
</Copy>

<Copy k="part.colorsType">Colors and type</Copy>
<Copy k="part.textInput">TextInput</Copy>
<Copy k="part.icons">Icons</Copy>
<Copy k="part.logos">Logos</Copy>

<Copy k="pickers.colors">Colors</Copy>
<Copy k="pickers.styles">Text styles</Copy>
<Copy k="style.display">Display</Copy>
<Copy k="style.heading">Heading</Copy>
<Copy k="style.body">Body</Copy>

<Copy k="card.title">Lisbon in May</Copy>
<Copy k="card.meta">14 travelers · 4 nights</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 331d5fb964bc1cee */}
<Copy k="widget.description">
  Diagram: four steps showing how Claude uses a design system when it builds.
  First, Claude reads the overview, which ends with a list of everything else
  in the design system. Second, it opens only what the task needs, such as
  colors and type for visual work, or a component's notes before it uses that
  component. Third, the editor's color pickers and text style menu list your
  own colors and styles, so edits you make by hand stay in your brand. Fourth,
  Claude builds with your exact values and real components in place of its own
  defaults. If a value or component is missing, Claude is designed to say so,
  and its reply usually says what it assumed.
</Copy>
<Copy k="widget.summary">
  Diagram: four steps in how Claude uses a design system. It reads the
  overview first, opens only what the task needs, lists your styles in the
  editor, then builds with your values and components.
</Copy>
`;export{e as default};