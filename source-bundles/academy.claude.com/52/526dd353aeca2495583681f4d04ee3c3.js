var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ContextDegradationMemoryTest.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The \`word1…15\` run IS the memory
    test's word list: translate each into one common, concrete word. */}

<Copy k="title">Memory Test</Copy>
<Copy k="intro">
  You’ll see {total} words, one at a time. Each appears for about 1.5
  seconds. Try to remember as many as you can.
</Copy>
<Copy k="btn.show">Show the Words</Copy>
<Copy k="btn.check">Check My Memory</Copy>
<Copy k="btn.replay">Replay words (defeats the exercise)</Copy>
<Copy k="btn.continue">Continue</Copy>
<Copy k="btn.cancel">Cancel</Copy>

<Copy k="confirm.start">
  You’ve already seen the words. Replaying defeats the exercise. Continue
  anyway?
</Copy>
<Copy k="confirm.replay">
  This will reset the exercise and show the words again. The primacy–recency
  effect is strongest on first exposure. Continue?
</Copy>

<Copy k="word1">bridge</Copy>
<Copy k="word2">candle</Copy>
<Copy k="word3">marble</Copy>
<Copy k="word4">forest</Copy>
<Copy k="word5">hammer</Copy>
<Copy k="word6">silver</Copy>
<Copy k="word7">pencil</Copy>
<Copy k="word8">garden</Copy>
<Copy k="word9">thunder</Copy>
<Copy k="word10">mirror</Copy>
<Copy k="word11">copper</Copy>
<Copy k="word12">blanket</Copy>
<Copy k="word13">village</Copy>
<Copy k="word14">rocket</Copy>
<Copy k="word15">feather</Copy>

<Copy k="progress">{n} of {total}</Copy>
<Copy k="done">Done!</Copy>

<Copy k="recall.label">
  Type the words you remember, separated by commas or spaces.
</Copy>
<Copy k="recall.placeholder">Type the words you remember here...</Copy>

<Copy k="score">You recalled {n} of {total}</Copy>
<Copy k="hallucinated">Hallucinated</Copy>
<Copy k="chart.title">Serial position — your recall pattern</Copy>
<Copy k="bar.recalled">Position {n}: recalled</Copy>
<Copy k="bar.forgotten">Position {n}: forgotten</Copy>
<Copy k="legend.most">Most likely</Copy>
<Copy k="legend.least">Least likely</Copy>

<Copy k="explain1">
  The words you remembered likely cluster at the {beginning} and {end} of the
  list. The middle gets lost. This is the {effect} — and LLMs show the same
  bias.
</Copy>
<Copy k="explain1.beginning">beginning</Copy>
<Copy k="explain1.end">end</Copy>
<Copy k="explain1.effect">primacy–recency effect</Copy>
<Copy k="explain2">
  Instructions at the start and end of a context window get followed. The
  middle gets buried. This is why more context ≠ better results — and why
  “Lost in the Middle” (Liu et al., 2023) found accuracy drops of 30%+ when
  key facts land in the center of long contexts.
</Copy>
`;export{e as default};