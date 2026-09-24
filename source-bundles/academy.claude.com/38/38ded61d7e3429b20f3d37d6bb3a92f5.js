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

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 1fa95b208bab04ab */}
<Copy k="widget.description">
  Exercise: the learner briefly views a list of words shown one at a time,
  then types as many as they can recall from memory. Results show which words
  were remembered, any wrongly recalled words not on the list, and a bar chart
  of recall by position in the sequence, with a gradient marking where
  attention is typically strongest and weakest. The exercise demonstrates the
  serial position effect, a memory pattern where items at the start and end of
  a list are recalled far more often than items in the middle. It then
  connects this to AI: language models show the same bias in long context
  windows, which is why important instructions should be placed at the
  beginning and end of a prompt rather than buried in the middle.
</Copy>
<Copy k="widget.summary">
  Exercise: the learner views a brief word sequence, then types as many as
  they can recall, and sees a bar chart of recall by position. It demonstrates
  the serial position effect, linking human memory limits to why language
  models also struggle with information placed mid-context.
</Copy>
`;export{e as default};