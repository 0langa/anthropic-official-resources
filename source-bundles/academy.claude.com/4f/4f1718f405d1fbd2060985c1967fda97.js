var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Tokenizer.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: {label} is one of the
    preset labels below, {count}, {done} and {total} are numbers. Ten
    preset strings sit behind a row of pills; the learner tokenizes one and
    sees its token chips, a character/token count and a note on what the
    split shows. The preset strings themselves are tokenizer input (data)
    and stay in the widget; backtick-quoted spans in a note render as
    inline code. */}

<Copy k="label">Text → tokens</Copy>
<Copy k="examples.aria">Examples</Copy>

<Copy k="go">Tokenize</Copy>
<Copy k="next">Next example: {label}</Copy>
<Copy k="idle">How will this one split?</Copy>
<Copy k="chars">{count} characters</Copy>
<Copy k="tokens">{count} tokens</Copy>
<Copy k="progress">{done} / {total}</Copy>
<Copy k="enough">
  That's the gist. Keep exploring, or move on when you're ready.
</Copy>
<Copy k="all">You're a completionist!</Copy>

<Copy k="preset.hello.label">Hello, are you there?</Copy>
<Copy k="preset.hello.note">
  Common English words are often one token each, and often include the space
  before the start of the word (shown here as _).
</Copy>

<Copy k="preset.numbers.label">numbers</Copy>
<Copy k="preset.numbers.note">
  A tokenizer may break 1969 into pieces like 196 + 9, so the model doesn't
  receive 'the number 1969' as one unit. Digit chunking like this is one
  reason mental arithmetic is harder for language models than it looks; it's
  also why many models will choose to write code when working with numerical
  inputs.
</Copy>

<Copy k="preset.longWord.label">a long word</Copy>
<Copy k="preset.longWord.note">
  Long, rare words get chopped into more recognizable pieces. The tokenizer
  has seen 'establishment' plenty, so it can still handle this 28-letter
  word by breaking the rest into smaller chunks.
</Copy>

<Copy k="preset.strawberry.label">strawberry</Copy>
<Copy k="preset.strawberry.note">
  The model receives two chunks, not ten letters. That's why letter-counting
  and spelling games are harder for language models than you'd expect from
  something that is otherwise so capable.
</Copy>

<Copy k="preset.emoji.label">emoji</Copy>
<Copy k="preset.emoji.note">
  Emoji aren't necessarily in the vocabulary as whole symbols. In this
  example, each llama falls apart into byte-sized pieces (shown here as
  their hex codes), so two llamas cost six tokens.
</Copy>

<Copy k="preset.name.label">a name</Copy>
<Copy k="preset.name.note">
  Names that appear often will likely earn a single token of their own.
  Rarer names get split into pieces like any other unfamiliar word.
</Copy>

<Copy k="preset.typo.label">a typo</Copy>
<Copy k="preset.typo.note">
  The misspelling isn't in the vocabulary, so the word is broken into two
  pieces. A model can usually figure out the intended meaning, but this has
  potential to cause confusion (especially in older, smaller models).
</Copy>

<Copy k="preset.japanese.label">Japanese</Copy>
<Copy k="preset.japanese.note">
  This thirteen-character greeting produced eight tokens, where the English
  equivalent ("Hi, how are you?") would be about five or six. Most tokenizer
  vocabularies are learned from text that skews toward English, so other
  languages - especially non-Latin scripts - often need more tokens to say
  the same thing.
</Copy>

<Copy k="preset.apostrophes.label">apostrophes</Copy>
<Copy k="preset.apostrophes.note">
  Contractions tend to split into pieces. The chunk \`'re\` appears twice and
  gets the same ID both times.
</Copy>

<Copy k="preset.python.label">Python</Copy>
<Copy k="preset.python.note">
  Punctuation, newlines, and indentation all consume tokens. Common
  sequences of punctuation marks used in code are sometimes merged into odd
  clumps like \`():\`.
</Copy>
`;export{e as default};