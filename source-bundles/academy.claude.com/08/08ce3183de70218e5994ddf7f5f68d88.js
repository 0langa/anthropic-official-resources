var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DecodePuzzle.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: {text} is the decoded reply,
    {guess} whatever the learner typed, {solved} and {total} are counts.
    The puzzle: the learner asks Claude for a tiny poem, the reply arrives
    as token IDs, and they type words to fill one slot per token; a
    vocabulary table and a reveal-all button are the fallbacks. The poem's
    own words are puzzle data and stay in the widget. */}

<Copy k="label">Decode Claude's reply</Copy>
<Copy k="footer">IDs from the same illustrative tokenizer as above.</Copy>
<Copy k="ask">Write me a tiny poem about how you process text.</Copy>

<Copy k="slots.aria">Token slots, one per ID in the reply</Copy>
<Copy k="slot.space">(space)</Copy>

<Copy k="input.placeholder">Type a word or punctuation mark here…</Copy>
<Copy k="input.solved">Solved!</Copy>
<Copy k="input.aria">Type a token to decode it</Copy>

<Copy k="progress">{solved} / {total} decoded</Copy>
<Copy k="miss">“{guess}” isn't in this reply.</Copy>
<Copy k="miss.space">space</Copy>
<Copy k="decoded">Decoded:</Copy>
<Copy k="quoted">“{text}”</Copy>

<Copy k="hint">
  There are two ways to do this puzzle. You can guess what a tiny poem might
  say, or you can try to intuit which words correspond to which token IDs:
  punctuation and more common words are likely to have lower IDs, and bigger
  words higher ones. If you'd rather, you can show the vocabulary below to
  guide your work.
</Copy>

<Copy k="vocab.show">Show the vocabulary</Copy>
<Copy k="vocab.hide">Hide the vocabulary</Copy>
<Copy k="revealAll">Reveal the whole reply</Copy>
<Copy k="vocab.aria">Vocabulary: token ID and token text</Copy>
<Copy k="vocab.used">used</Copy>
`;export{e as default};