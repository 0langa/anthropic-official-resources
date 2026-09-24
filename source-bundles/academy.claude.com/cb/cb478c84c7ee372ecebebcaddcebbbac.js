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

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 21d0f82b9413653b */}
<Copy k="widget.description">
  Simulation: the learner adds sample training messages one at a time,
  watching a transition matrix rebuild after each addition to show how a
  Markov chain is "trained." The matrix lists every word seen so far along
  both axes, with cells filling in to tally how often one word is followed by
  another. Before any messages are added, the matrix is empty. The goal is to
  make visible how this simple frequency-counting process works: each added
  sentence increases the tallies of word-to-word connections, building what's
  called a frequency table. This table, once normalized by row, becomes a
  probability distribution used to predict the next word, illustrating the
  core mechanic behind old and modern next-word prediction systems.
</Copy>
<Copy k="widget.summary">
  Simulation: the learner adds sample training messages one at a time,
  watching a word-to-word transition matrix fill in as tallies grow, showing
  how a Markov chain builds the frequency table behind next-word prediction.
</Copy>
`;export{e as default};