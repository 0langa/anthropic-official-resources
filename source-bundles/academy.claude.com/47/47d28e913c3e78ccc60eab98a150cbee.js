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
`;export{e as default};