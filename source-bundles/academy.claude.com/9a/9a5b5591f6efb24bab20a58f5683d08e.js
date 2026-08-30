var e=`---
kind: widget-copy
---

{/* Learner-facing copy for MarkovPhoneDemo.tsx — the "send a text"
    next-word simulator (see academy-web src/components/mdx/WidgetCopy.tsx).
    Keys are machine identifiers — translate ONLY the text between the tags.
    The reply bubble and the suggestion buttons show words sampled from the
    lesson's English training corpus (model data in the widget), so
    \`incoming\` is the only chat text held here. */}

<Copy k="incoming">hey does anyone know how to fix the build</Copy>
<Copy k="aria.suggestions">Suggested next words</Copy>
<Copy k="end">No predictions. End of chain.</Copy>
<Copy k="startOver">↻ start over</Copy>
`;export{e as default};