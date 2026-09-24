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

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: f0762bd6ae676c27 */}
<Copy k="widget.description">
  Exercise: the learner walks a Markov chain built from a small trained
  transition matrix, starting from a single context word. Each possible next
  word is shown with its probability, displayed as a proportional bar and
  percentage, calculated by normalizing how often that word followed the
  current context in the training messages. Choosing a word extends the
  generated message and updates the context to that word, revealing a new set
  of next-word probabilities, until the chain reaches a dead end with no
  further predictions. The learner can restart the chain. The exercise
  demonstrates sampling: generating text by repeatedly picking a next token
  from a probability distribution conditioned on the current context, the same
  basic concept underlying next-word prediction in both simple frequency-based
  models and modern language models.
</Copy>
<Copy k="widget.summary">
  Exercise: the learner builds a message by repeatedly picking a next word
  from probabilities shown for the current context, continuing until the chain
  dead-ends. It demonstrates sampling, the process of generating text by
  choosing tokens from a probability distribution.
</Copy>
`;export{e as default};