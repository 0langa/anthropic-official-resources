var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DsLayers.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags. \`{name}\` (the example company's
    name) and \`{lead}\` are runtime placeholders and must survive verbatim.
    \`label\` describes the figure for screen readers. The \`overview\`, \`tokens\`,
    \`components\` and \`notes\` keys are one row each: its numbered \`.name\`, its
    short definition in \`.body\`, and the words inside the small example at the
    right. "Overview" and "Usage notes" are Claude's own names for those
    parts.
    \`overview.rule\` is the example rule, with \`overview.rule.lead\` set in bold
    in place of \`{lead}\`. Both repeat \`overview.rule2\` in DsPageTour.copy.mdx.
    \`notes.note\` repeats \`note.line1.primary\` in DsUsageNote.copy.mdx. Keep
    each pair the same.
    \`caption\` is the line under the figure. The example button's label and the
    name "Button" come from _shared.copy.mdx. The token name and the code line
    are sample data in the .tsx. */}

<Copy k="label">
  The main parts of a design system in Claude. Overview: the brand described in
  words, here two rules: sentence case always, and buttons start with a verb.
  Tokens: a named value, here color-accent. Components: a button labeled Plan a
  trip, whose background is color-accent. Usage notes: a note for Claude on a
  token or component, here the note on Button, use primary once per view.
</Copy>

<Copy k="overview.name">1. Overview</Copy>
<Copy k="overview.body">
  Your brand described in words, with the few rules that always apply. Claude
  reads the overview first, every time it uses your design system.
</Copy>
<Copy k="overview.rule">{lead} Buttons start with a verb.</Copy>
<Copy k="overview.rule.lead">Sentence case, always.</Copy>

<Copy k="tokens.name">2. Tokens</Copy>
<Copy k="tokens.body">
  A value saved under a name, such as a color, a type style or a spacing step.
</Copy>

<Copy k="components.name">3. Components</Copy>
<Copy k="components.body">
  Reusable pieces of interface, such as buttons and badges, each defined once in
  your design system. In a design or prototype, Claude can use the real
  component.
</Copy>

<Copy k="notes.name">4. Usage notes</Copy>
<Copy k="notes.body">
  A note you can add to any token or component, telling Claude how to use it and
  when not to.
</Copy>
<Copy k="notes.note">Use primary once per view.</Copy>

<Copy k="caption">{name} is the example company in this guide.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: bcf73f1e62a5a116 */}
<Copy k="widget.description">
  Diagram: the four main parts of a design system in Claude, each with a
  definition and a small example. The overview describes the brand in words,
  with the few rules that always apply, and Claude reads it first, every time.
  Tokens are values saved under a name, such as a color, a type style or a
  spacing step. Components are reusable pieces of interface, such as buttons
  and badges, and Claude can use the real one in a design or prototype. Usage
  notes tell Claude how to use a token or component, and when not to. The
  examples follow one button: an overview rule shapes its label, a token sets
  its color, and a note says how to use it.
</Copy>
<Copy k="widget.summary">
  Diagram: the four main parts of a design system in Claude, which are the
  overview, tokens, components and usage notes. Each has a short definition
  and an example built around one button.
</Copy>
`;export{e as default};