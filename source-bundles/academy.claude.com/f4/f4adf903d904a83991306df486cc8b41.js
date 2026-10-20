var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DsUsageNote.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags. \`{name}\` (the example company's
    name), \`{primary}\`, \`{secondary}\`, \`{ghost}\` and \`{danger}\` are runtime
    placeholders and must survive verbatim.
    \`label\` describes the picture for screen readers and reads the note out.
    \`note.title\` heads the open popover, in Claude's wording. \`note.line1\` and
    \`note.line2\` are the two lines of the usage note, where each placeholder
    is filled with the bold text of its sub-key (\`note.line1.primary\` and so
    on). \`caption\` is the line under the figure. The section title, column
    heads, component names and the button and badge labels come from
    _shared.copy.mdx. */}

<Copy k="label">
  The Components section of {name}'s design system page, with a Button row and a
  Badge row. The note mark at the end of the Button row is open. Its usage note
  reads: Use primary once per view. Secondary is the default. Ghost is for
  toolbars. Danger goes behind a confirmation.
</Copy>

<Copy k="note.title">Usage notes</Copy>
<Copy k="note.line1">
  {primary} {secondary} is the default.
</Copy>
<Copy k="note.line1.primary">Use primary once per view.</Copy>
<Copy k="note.line1.secondary">Secondary</Copy>
<Copy k="note.line2">
  {ghost} is for toolbars. {danger} goes behind a confirmation.
</Copy>
<Copy k="note.line2.ghost">Ghost</Copy>
<Copy k="note.line2.danger">Danger</Copy>

<Copy k="caption">
  Put the rule in the note’s first sentence. Claude reads that sentence before
  it uses the component.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: f16be3224d1f2943 */}
<Copy k="widget.description">
  Illustration: the Components section of a sample design system page, with
  the usage note on the Button component open as a model of a good note. The
  section lists a Button row and a Badge row, each with previews, and only
  Button has a note. The note gives its rule first, on how often to use the
  button's primary variant, then a few words on when to use each of the other
  variants. It teaches you to put the rule in the note's first sentence,
  because Claude reads that sentence before it uses the component.
</Copy>
<Copy k="widget.summary">
  Illustration: an open usage note on a Button component in a design system
  page. It models a good note, with the rule in the first sentence, which
  Claude reads before it uses the component.
</Copy>
`;export{e as default};