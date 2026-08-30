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
`;export{e as default};