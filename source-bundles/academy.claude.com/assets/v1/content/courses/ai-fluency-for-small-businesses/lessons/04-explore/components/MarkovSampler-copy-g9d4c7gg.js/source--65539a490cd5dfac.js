var e=`---
kind: widget-copy
---

{/* Learner-facing copy for MarkovSampler.tsx — the "sample from the
    matrix" exercise (see academy-web src/components/mdx/WidgetCopy.tsx).
    Keys are machine identifiers — translate ONLY the text between the tags.
    \`{word}\` is the current context word from the English training corpus
    (model data in the widget) and must survive verbatim. */}

<Copy k="end">End of chain. No more predictions available.</Copy>
<Copy k="aria.choices">Next-word choices after “{word}”</Copy>
<Copy k="startOver">↻ start over</Copy>
`;export{e as default};