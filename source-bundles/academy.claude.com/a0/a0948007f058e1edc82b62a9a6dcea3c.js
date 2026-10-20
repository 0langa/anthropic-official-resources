var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DsTeammateMenu.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags. \`{name}\` is a runtime
    placeholder (the example company's name) and must survive verbatim.
    \`label\` describes the whole picture for screen readers. The \`box\` keys are
    the message box: what the teammate typed, the chip of the picked kind of
    artifact under it (a product name) and what the design system picker
    beside that chip reads. \`caption\` is the line under the figure. The menu's
    rows come from _shared.copy.mdx. The two system names are sample data in
    the .tsx. */}

<Copy k="label">
  A teammate's message box asking for a launch deck, with Claude Slides picked.
  The Design system menu lists {name}, marked Default and selected, and {name}
  Events, also selected. Under the message box, beside Claude Slides, the design
  system picker reads {name} plus one.
</Copy>

<Copy k="box.typed">Make the Q3 launch deck</Copy>
<Copy k="box.type">Claude Slides</Copy>
<Copy k="box.chip">{name} +1</Copy>

<Copy k="caption">
  With two design systems selected, the chip under the message box shows the
  first one’s name and “+1”.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 38ffe0190974277d */}
<Copy k="widget.description">
  Illustration: a teammate's message box in Claude once design systems are
  shared with the organization. The teammate has asked for a launch deck, with
  Claude Slides picked as the kind of artifact. The open Design system menu
  lists two design systems from a sample company, both selected, one carrying
  the Default badge, followed by Manage design systems and New design system.
  It teaches that a shared design system is in every teammate's menu, that the
  default is already selected, and that a teammate can select more than one.
  With two selected, the design system chip by the message box shows the first
  one's name and +1.
</Copy>
<Copy k="widget.summary">
  Illustration: a teammate's Design system menu with two shared design systems
  selected, one marked Default. It shows that the default comes already
  selected, and how the chip reads when two are picked.
</Copy>
`;export{e as default};