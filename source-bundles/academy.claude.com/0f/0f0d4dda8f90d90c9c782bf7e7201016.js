var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DsNewMenu.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags.
    \`label\` describes the picture for screen readers. \`box.placeholder\` is the
    empty message box's placeholder. The \`plus\` keys are the rows of the menu
    the plus button opens, in Claude's order and wording. The \`way\` keys are
    the two choices New design system offers, each a title and one line, also
    in Claude's wording. The Manage design systems and New design system rows
    come from _shared.copy.mdx. The keyboard shortcut is sample data in the
    .tsx. */}

<Copy k="label">
  Claude's message box with its plus menu open. Step one, the plus button. Step
  two, Design system in the menu. Step three, New design system, the row under
  Manage design systems. It offers two choices: Using Claude, and Using Claude
  Code.
</Copy>

<Copy k="box.placeholder">Write a message…</Copy>

<Copy k="plus.files">Add files or photos</Copy>
<Copy k="plus.skills">Skills</Copy>
<Copy k="plus.connectors">Connectors</Copy>
<Copy k="plus.ds">Design system</Copy>
<Copy k="plus.plugins">Plugins</Copy>

<Copy k="way.claude.title">Using Claude</Copy>
<Copy k="way.claude.body">
  Upload brand files, pull from design connectors, or describe it
</Copy>
<Copy k="way.code.title">Using Claude Code</Copy>
<Copy k="way.code.body">
  Claude Code reads your repo’s tokens and components
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: ccaf14ac901ec336 */}
<Copy k="widget.description">
  Illustration: Claude's message box with its plus menu open, marking the
  three steps that start a new design system. Step one is the plus button.
  Step two is Design system, a row in the menu alongside Skills, Connectors
  and Plugins. Step three is New design system, listed with Manage design
  systems. New design system offers two choices. Using Claude is for uploading
  brand files, pulling from design connectors or describing the brand. Using
  Claude Code is for a design system that already exists in a code repository,
  and Claude Code reads the repo's tokens and components.
</Copy>
<Copy k="widget.summary">
  Illustration: Claude's message box with the path to a new design system
  marked, from the plus menu to Design system to New design system, which
  offers Using Claude or Using Claude Code.
</Copy>
`;export{e as default};