var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed2.tsx — the light-vs-paint color mixing
    chat (see academy-web src/components/mdx/WidgetCopy.tsx). Keys are
    machine identifiers — translate ONLY the text between the tags. \`{name}\`
    tokens are runtime placeholders and must survive verbatim. \`light.*\` /
    \`paint.*\` combo keys (r, g, b, gr, br, bg, bgr, none) name which sliders
    are up. */}

<Copy k="user">
  Wait — red + green light makes yellow on a screen, but red + green paint
  makes brown. Why does mixing colors work completely differently depending on
  whether it's light or paint?
</Copy>

<Copy k="p1">
  Short answer: {lead} A screen stacks light on light — more mixing means more
  energy hitting your eye, trending toward white. Paint is a {filter} — each
  pigment steals wavelengths, and stacking filters means {less} light
  surviving to reach your eye.
</Copy>
<Copy k="p1.lead">light adds, paint subtracts.</Copy>
<Copy k="p1.filter">filter</Copy>
<Copy k="p1.less">less</Copy>

<Copy k="p2">
  The key is {lead} A screen starts at black — every subpixel adds photons
  until you've got white. Paper starts at white — every pigment steals
  wavelengths until you're left with muddy brown, because real pigments aren't
  perfect filters.
</Copy>
<Copy k="p2.lead">what you're starting from.</Copy>

<Copy k="aria.visual">Additive versus subtractive color mixing</Copy>

<Copy k="light.title">Light (screen)</Copy>
<Copy k="light.sub">Starts black — each color adds</Copy>
<Copy k="light.foot">More light = brighter</Copy>
<Copy k="paint.title">Paint (pigment)</Copy>
<Copy k="paint.sub">Starts white — each color absorbs</Copy>
<Copy k="paint.foot">More filters = dimmer</Copy>

<Copy k="ch.r">Red</Copy>
<Copy k="ch.g">Green</Copy>
<Copy k="ch.b">Blue</Copy>

<Copy k="light.none">—</Copy>
<Copy k="light.r">Red</Copy>
<Copy k="light.g">Green</Copy>
<Copy k="light.b">Blue</Copy>
<Copy k="light.gr">Overlap → yellow</Copy>
<Copy k="light.br">Overlap → magenta</Copy>
<Copy k="light.bg">Overlap → cyan</Copy>
<Copy k="light.bgr">Overlap → white</Copy>
<Copy k="paint.none">—</Copy>
<Copy k="paint.r">Red</Copy>
<Copy k="paint.g">Green</Copy>
<Copy k="paint.b">Blue</Copy>
<Copy k="paint.gr">Overlap → olive-brown</Copy>
<Copy k="paint.br">Overlap → dark plum</Copy>
<Copy k="paint.bg">Overlap → dark teal</Copy>
<Copy k="paint.bgr">Overlap → near-black</Copy>

<Copy k="ask.brown.btn">Why brown, not black? →</Copy>
<Copy k="ask.brown.prompt">
  Why does mixing all paint colors make dark brown instead of perfect black?
</Copy>
<Copy k="ask.cmyk.btn">Why printers use CMYK →</Copy>
<Copy k="ask.cmyk.prompt">Why do printers use CMYK instead of RGB?</Copy>

`;export{e as default};