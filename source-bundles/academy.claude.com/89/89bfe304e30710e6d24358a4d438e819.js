var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx — the dictation vs voice mode
    comparison table (see academy-web src/components/mdx/WidgetCopy.tsx).
    Keys are machine identifiers — translate ONLY the text between the
    tags. Rows are the run \`row<n>\` (label + one cell per column); the
    \`pill.*\` values are the product tooltips drawn in the composer
    vignette. */}

<Copy k="aspect">Aspect</Copy>
<Copy k="col.dictation">Dictation</Copy>
<Copy k="col.voice">Voice mode</Copy>
<Copy k="pill.dictation">Dictation</Copy>
<Copy k="pill.voice">Voice mode</Copy>

<Copy k="row1.label">Where to find it</Copy>
<Copy k="row1.dictation">
  The mic in the message box. Available across Chat, Cowork, and Code on all
  surfaces
</Copy>
<Copy k="row1.voice">
  Its own button, separate from the dictation mic. Available on Chat across
  all surfaces
</Copy>

<Copy k="row2.label">What your speech becomes</Copy>
<Copy k="row2.dictation">Text in your message to Claude</Copy>
<Copy k="row2.voice">A two-way spoken conversation</Copy>

<Copy k="row3.label">When to choose it</Copy>
<Copy k="row3.dictation">Anything you’d normally type, said faster</Copy>
<Copy k="row3.voice">
  Talking through a judgment call, rehearsing, learning, where you need a
  smart sounding board to engage with you
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: b267ff29f1ed7066 */}
<Copy k="widget.description">
  Comparison table: a side-by-side look at Claude's dictation and voice mode,
  each column headed by a small depiction of the chat composer's mic button
  (dictation) and voice button. Rows compare where each is found (dictation
  across Chat, Cowork, and Code on all surfaces; voice mode on Chat across all
  surfaces), what your speech becomes (typed text versus a two-way spoken
  conversation), and when to choose each (dictation for saying what you'd
  normally type, faster; voice mode for thinking through a judgment call,
  rehearsing, or learning with a responsive sounding board). It reinforces the
  lesson's core idea: pick the tool based on whether you already know what to
  say or need to work it out by talking.
</Copy>
<Copy k="widget.summary">
  Diagram: A comparison table showing dictation and voice mode side by side,
  covering where each is found, what your speech becomes, and when to choose
  one over the other.
</Copy>
`;export{e as default};