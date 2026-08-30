var e=`---
kind: widget-copy
---

{/* Learner-facing copy for MarkovTrainingMatrix.tsx — the "build the
    transition matrix" exercise (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: \`{text}\` is a training message
    from the English corpus (model data in the widget), \`{n}\` a number. */}

<Copy k="msg.num">{n}.</Copy>
<Copy k="msg.quoted">“{text}”</Copy>
<Copy k="btn.add">+ Add message {n}</Copy>
<Copy k="btn.allAdded">All messages added</Copy>

<Copy k="matrix.title">The transition matrix</Copy>
<Copy k="matrix.empty">Add messages above to start building the matrix.</Copy>
<Copy k="matrix.corner">Current word → next word</Copy>
`;export{e as default};