var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DsPageTour.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags. \`{name}\` (the example company's
    name) and \`{lead}\` are runtime placeholders and must survive verbatim.
    \`label\` describes the figure for screen readers, and \`listLabel\` names the
    list of eight section tabs. The \`theme\` keys are the two theme names shown
    as column heads; the first is also on the Components section's theme
    picker. The \`action\` keys are the buttons at the top right of a section,
    in Claude's wording.
    The \`overview\` keys are the example company's own overview: its opening
    line, the Principles heading, and three rules, where \`{lead}\` is filled
    with the bold first sentence held in the rule's \`.lead\` sub-key.
    \`type.specimen\` is the sample sentence each text style is shown in.
    \`unit.px\` follows a spacing or radius value. \`asset.logos\` names the group
    of logo files. \`caption\` is the line under the figure.
    Section names and their one-line descriptions, column heads, component
    names and the button and badge labels come from _shared.copy.mdx. Token
    names, color values, font specs and file names are sample data in the
    .tsx. */}

<Copy k="label">
  The design system page for {name}. Eight sections are listed down the side:
  Overview, Colors, Typography, Spacing, Corner radius, Shadows, Components and
  Assets. Select a section to see what is in it.
</Copy>
<Copy k="listLabel">Sections of the design system page</Copy>

<Copy k="theme.light">{name} light</Copy>
<Copy k="theme.dark">{name} dark</Copy>

<Copy k="action.add">Add</Copy>
<Copy k="action.uploadFont">Upload font</Copy>
<Copy k="action.newSet">New set</Copy>

<Copy k="overview.lede">
  {name} helps people plan trips they’ll remember. This is the shared look for
  our app, our site and our decks.
</Copy>
<Copy k="overview.principles">Principles</Copy>
<Copy k="overview.rule1">
  {lead} Sand is the page color. Teal is for the one thing to do next.
</Copy>
<Copy k="overview.rule1.lead">Calm and clear.</Copy>
<Copy k="overview.rule2">{lead} Buttons start with a verb.</Copy>
<Copy k="overview.rule2.lead">Sentence case, always.</Copy>
<Copy k="overview.rule3">{lead} Real places, real light.</Copy>
<Copy k="overview.rule3.lead">Photos over illustration.</Copy>

<Copy k="type.specimen">The quick brown fox jumps over the lazy dog</Copy>
<Copy k="unit.px">px</Copy>
<Copy k="asset.logos">Logos</Copy>

<Copy k="caption">
  Select a section to see what’s in it.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: cfdb405d811d435d */}
<Copy k="widget.description">
  Explorer: a model of a design system page in Claude, filled in for a sample
  travel company, with eight sections to open one at a time. Overview is the
  brand book: what the system is for and the rules for using it. Colors holds
  color tokens in groups, with a column for each theme. Typography holds text
  styles and the font files behind them. Spacing, Corner radius and Shadows
  hold the steps, radii and shadows that layouts and surfaces use. Components
  shows live previews of components, each with its own notes. Assets holds
  logos, icons, images and reference files. It teaches what each section
  holds, so a team knows where to review and edit each part of its brand.
</Copy>
<Copy k="widget.summary">
  Explorer: a sample design system page with eight sections, from Overview and
  Colors to Components and Assets. Select a section to see what it holds.
</Copy>
`;export{e as default};