var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed2.tsx — the "Next Token Prediction" property card (see
    academy-web src/components/mdx/WidgetCopy.tsx). Keys are machine
    identifiers — translate ONLY the text between the tags. \`{name}\` tokens
    are runtime placeholders and must survive verbatim. */}

<Copy k="video">Watch the lesson · 5 min</Copy>

<Copy k="enables1">Fluent, natural-sounding text in any style</Copy>
<Copy k="enables2">Rapid synthesis across large amounts of material</Copy>
<Copy k="enables3">Strong performance on tasks resembling its training data</Copy>

<Copy k="fails1">Hallucination — plausible isn't the same as true</Copy>
<Copy k="fails2">Confabulation concentrates in specifics: names, dates, citations, stats, URLs</Copy>
<Copy k="fails3">Misplaced confidence — smooth prose wraps a guess</Copy>

<Copy k="pill.citations">Citations & source grounding</Copy>
<Copy k="pill.constrained">Constrained generation</Copy>
<Copy k="pill.verifier">Generator–verifier loops</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: a6a6953e3fda2d80 */}
<Copy k="widget.description">
  Summary card: explains next token prediction, the property of generative AI
  that writes text by predicting likely word sequences rather than retrieving
  facts, like a highly sophisticated autocomplete rather than a search engine.
  It lists what this enables: fluent text in any style, fast synthesis across
  large material, and strong performance on tasks resembling training data. It
  lists where this characteristically fails: hallucination, since
  plausible-sounding output isn't necessarily true, with confabulation
  concentrated in specifics like names, dates, citations, and statistics, and
  misplaced confidence where smooth prose masks a guess. It also names Claude
  features that push this limitation's edge out: citations and source
  grounding, constrained generation, and generator-verifier loops. A linked
  video offers further explanation.
</Copy>
<Copy k="widget.summary">
  Summary card: outlines next token prediction, explaining what this
  text-prediction property enables and where it typically fails, plus Claude
  features that push those limits, with a linked video for more depth.
</Copy>
`;export{e as default};