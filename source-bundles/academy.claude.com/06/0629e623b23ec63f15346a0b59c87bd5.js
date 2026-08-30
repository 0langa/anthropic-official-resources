var e=`---
kind: widget-copy
---

{/* Learner-facing copy for OverUnder.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: {text} is the example string
    being tokenized, {line} the over/under line, {count} the true token
    count. Three rounds: the learner bets whether a string is over or under
    a token count, then sees the real count, a one-line note and the token
    chips. */}

<Copy k="label">Over / Under</Copy>
<Copy k="footer">
  These counts come from the same illustrative tokenizer as above. They
  don't perfectly represent any specific Claude tokenizer, but the concepts
  are similar for most production models.
</Copy>

<Copy k="prompt">Make your predictions ↓</Copy>
<Copy k="score">{correct} / {answered} correct</Copy>

<Copy k="quoted">“{text}”</Copy>
<Copy k="bet.aria">Over or under {line} tokens?</Copy>
<Copy k="bet.under">Under {line} tokens</Copy>
<Copy k="bet.over">Over {line} tokens</Copy>
<Copy k="verdict">{count} tokens ·</Copy>

<Copy k="round.fox.note">
  Short common words tend to be one token each in most tokenizers, and
  punctuation usually gets its own.
</Copy>
<Copy k="round.super.note">
  The word isn't common enough to have earned a token of its own, so it
  chunks into pieces that are.
</Copy>
<Copy k="round.url.note">
  URLs and code tend to use more tokens than a similar amount of English
  text. Punctuation-heavy text is typically token-heavy text.
</Copy>

<Copy k="takeaway.intro">Some patterns worth noticing:</Copy>
<Copy k="takeaway.tip1">Ordinary English text runs about {rate}.</Copy>
<Copy k="takeaway.tip1.rate">one or two tokens per word</Copy>
<Copy k="takeaway.tip2">
  {lead}: rarer words, typos, emoji, other languages, numbers.
</Copy>
<Copy k="takeaway.tip2.lead">Anything else costs more</Copy>
`;export{e as default};