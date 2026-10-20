var e=`---
kind: widget-copy
---

{/* Copy shared by the widgets in this folder. It merges under each widget's
    own .copy.mdx, and a widget's own key wins. Keys are machine identifiers:
    translate ONLY the text between the tags.
    The \`section\` keys are the eight sections of a design system page, each a
    \`.name\` as Claude's side rail names it and an \`.about\` line on what it
    holds. The \`col\` keys are the column heads of the page's tables. The
    \`component\` keys are the two example components, named as they are in
    code. The \`button\` and \`badge\` keys are the labels drawn on the example
    company's buttons and badges. The \`menu\` keys are two rows and a badge of
    the message box's Design system menu, in Claude's wording. */}

<Copy k="section.overview.name">Overview</Copy>
<Copy k="section.overview.about">
  Your brand book: what the system is for and the rules for using it.
</Copy>
<Copy k="section.colors.name">Colors</Copy>
<Copy k="section.colors.about">
  Color tokens in groups, with a column for each theme.
</Copy>
<Copy k="section.type.name">Typography</Copy>
<Copy k="section.type.about">Text styles and the font files behind them.</Copy>
<Copy k="section.spacing.name">Spacing</Copy>
<Copy k="section.spacing.about">The spacing steps your layouts use.</Copy>
<Copy k="section.corners.name">Corner radius</Copy>
<Copy k="section.corners.about">
  The corner radii, from sharp to fully round.
</Copy>
<Copy k="section.shadows.name">Shadows</Copy>
<Copy k="section.shadows.about">
  The shadows your surfaces use, set per theme.
</Copy>
<Copy k="section.components.name">Components</Copy>
<Copy k="section.components.about">
  Live previews of your components, each with its own notes.
</Copy>
<Copy k="section.assets.name">Assets</Copy>
<Copy k="section.assets.about">Logos, icons, images and reference files.</Copy>

<Copy k="col.name">Name</Copy>
<Copy k="col.value">Value</Copy>
<Copy k="col.preview">Preview</Copy>
<Copy k="col.type">Type</Copy>

<Copy k="component.button">Button</Copy>
<Copy k="component.badge">Badge</Copy>

<Copy k="button.plan">Plan a trip</Copy>
<Copy k="button.cancel">Cancel</Copy>
<Copy k="button.learn">Learn more</Copy>
<Copy k="button.delete">Delete</Copy>

<Copy k="badge.beta">Beta</Copy>
<Copy k="badge.synced">Synced</Copy>
<Copy k="badge.draft">Draft</Copy>

<Copy k="menu.manageDs">Manage design systems</Copy>
<Copy k="menu.newDs">New design system</Copy>
<Copy k="menu.default">Default</Copy>
`;export{e as default};