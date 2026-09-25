var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ScoringScatter.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: {word} and {first}/{second}
    are filled with the \`word.*\` labels below, {axis} with \`axis.x\` or
    \`axis.y\`, and {value}, {max}, {scored}, {total} are numbers. The
    learner scores four words on two sliders (Cute, Big), watches them move
    on a scatter plot, then asks for the closest pair. \`plot.aria\` names
    the same four words and two axes — keep it in step with \`word.*\` and
    \`axis.*\`. */}

<Copy k="label">Score these words</Copy>
<Copy k="intro">
  Drag the sliders to score each word below on how {cute} it is and how
  {big} it is. When you've scored all four, hit Find closest pair to see how
  a system like this makes it possible to find related words.
</Copy>
<Copy k="intro.cute">cute</Copy>
<Copy k="intro.big">big</Copy>

<Copy k="word.cat">cat</Copy>
<Copy k="word.kitten">kitten</Copy>
<Copy k="word.tiger">tiger</Copy>
<Copy k="word.skyscraper">skyscraper</Copy>
<Copy k="axis.x">Cute</Copy>
<Copy k="axis.y">Big</Copy>

<Copy k="sliders.aria">Score each word</Copy>
<Copy k="slider.aria">{word}: {axis}</Copy>
<Copy k="slider.value">{value} out of {max}</Copy>
<Copy k="plot.aria">
  Scatter plot of cat, kitten, tiger, skyscraper by Cute and Big
</Copy>

<Copy k="find">Find closest pair</Copy>
<Copy k="progress">{scored} / {total} scored</Copy>
<Copy k="closest">Closest pair: {first} & {second} {distance}</Copy>
<Copy k="closest.distance">(distance {value})</Copy>

<Copy k="takeaway">
  {lead} When we turn things into points in space, similar words end up in
  the same region of that space. If "cat" and "kitten" were your closest
  pair, congratulations! You just built a very small {embedding} - a map of
  a token's meaning.
</Copy>
<Copy k="takeaway.lead">Similarity = closeness.</Copy>
<Copy k="takeaway.embedding">embedding</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 9d396be99e1f45a4 */}
<Copy k="widget.description">
  Exercise: the learner scores four words, cat, kitten, tiger, and skyscraper,
  on two sliders each, Cute and Big, watching each word plot as a point on a
  two-dimensional scatter plot with those axes. Once all four words are
  scored, the learner can reveal which two points land closest together, shown
  as a connecting line and a numeric distance. Moving any slider afterward
  hides the reveal until the learner re-scores and checks again. The exercise
  builds intuition for embeddings: turning words into points along meaningful
  dimensions makes similarity measurable as closeness in space, which is the
  same principle behind how language models represent token meaning, just with
  far more dimensions than two.
</Copy>
<Copy k="widget.summary">
  Exercise: score four words on two sliders, Cute and Big, watching each plot
  as a point on a scatter plot, then reveal which two land closest together.
  Shows how turning words into points makes similarity measurable as
  closeness, the principle behind embeddings.
</Copy>
`;export{e as default};