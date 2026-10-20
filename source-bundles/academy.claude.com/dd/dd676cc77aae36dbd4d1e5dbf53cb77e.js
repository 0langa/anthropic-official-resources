var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DsLookalike.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags. \`{name}\` (the example company's
    name) and \`{quote}\` are runtime placeholders and must survive verbatim.
    \`label\` describes the figure for screen readers. \`request\` is the line
    over the two screens, with \`request.quote\` the request itself. The
    \`side.without\` and \`side.with\` keys title each screen and give one line
    under it.
    The \`screen\` keys are the words drawn inside both screens. The two button
    labels differ per side: \`.without\` is the generic result, in capitals on
    purpose, and the branded primary button uses \`button.plan\` from
    _shared.copy.mdx.
    The \`head\` keys are the three column heads of the table under the screens.
    The \`change\` keys are its three rows, each a \`.layer\` name, a \`.without\`
    cell and a \`.with\` cell. The two cells of \`change.overview\` quote the
    primary buttons' labels, so keep them the same as those labels. */}

<Copy k="label">
  The same request, a sign-up screen for fall trips, made twice. Without a
  design system the screen uses a stock blue, a system typeface and a button
  labeled Get Started Now. With {name}'s design system it uses {name}'s sand
  page color, its serif display face, its teal, its own Button component
  labeled Plan a trip, and its logo.
</Copy>

<Copy k="request">The request: {quote}</Copy>
<Copy k="request.quote">“Make a sign-up screen for our fall trips.”</Copy>

<Copy k="side.without.title">Without a design system</Copy>
<Copy k="side.without.note">
  Claude uses its own defaults, so the screen could be any company’s.
</Copy>
<Copy k="side.with.title">With {name}’s design system</Copy>
<Copy k="side.with.note">
  Claude uses {name}’s colors, type, button and wording.
</Copy>

<Copy k="screen.trips">Trips</Copy>
<Copy k="screen.groups">Groups</Copy>
<Copy k="screen.headline">Fall trips, planned together.</Copy>
<Copy k="screen.body">
  Pick a place, invite your people, and book it in one go.
</Copy>
<Copy k="screen.field">Email address</Copy>
<Copy k="screen.cta.without">GET STARTED NOW</Copy>
<Copy k="screen.second.without">Learn More</Copy>
<Copy k="screen.second.with">See how it works</Copy>

<Copy k="head.layer">What changed</Copy>
<Copy k="head.without">Without</Copy>
<Copy k="head.with">With {name}’s</Copy>

<Copy k="change.overview.layer">Overview</Copy>
<Copy k="change.overview.without">“GET STARTED NOW”</Copy>
<Copy k="change.overview.with">
  “Plan a trip”: sentence case, a verb first
</Copy>
<Copy k="change.tokens.layer">Tokens</Copy>
<Copy k="change.tokens.without">A stock blue, a system font, 6 px corners</Copy>
<Copy k="change.tokens.with">{name}’s sand, teal and serif display face</Copy>
<Copy k="change.components.layer">Components</Copy>
<Copy k="change.components.without">
  A button restyled from scratch each time
</Copy>
<Copy k="change.components.with">
  {name}’s own Button, with its real variants
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 622a525501106018 */}
<Copy k="widget.description">
  Comparison: the same request, a sign-up screen for a sample travel company,
  made twice by Claude, once without a design system and once with the
  company's own. Both screens hold the same content in the same layout, so
  what differs is what a design system supplies. Without one, Claude uses its
  own defaults and the screen could be any company's: a stock color, a system
  font and a button label in capitals. With one, Claude uses the company's
  colors, display typeface, logo, wording and its own Button component. A
  table names what changed by part: the overview sets the wording, tokens set
  the colors and type, and components supply the real button with its
  variants.
</Copy>
<Copy k="widget.summary">
  Comparison: one request for a sign-up screen, made without a design system
  and with a sample company's. It shows how the overview, tokens and
  components replace Claude's defaults with the company's look and wording.
</Copy>
`;export{e as default};