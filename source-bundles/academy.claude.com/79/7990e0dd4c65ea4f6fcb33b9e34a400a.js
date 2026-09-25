var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ParametricMemory.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags; {name} tokens are runtime
    placeholders and must survive verbatim. Six domains (history, science,
    cinema, programming, policy, creative): the tab name, the user's
    prompt, the verdict badge and the model's first-person explanation are
    here; the model's streamed reply and its redacted answer tokens stay in
    the widget because they are rendered as English token chips. */}

<Copy k="label">Token prediction</Copy>
<Copy k="domains.aria">Domains</Copy>

<Copy k="tab.history">history</Copy>
<Copy k="tab.science">science</Copy>
<Copy k="tab.cinema">cinema</Copy>
<Copy k="tab.programming">programming</Copy>
<Copy k="tab.policy">policy</Copy>
<Copy k="tab.creative">creative</Copy>

<Copy k="prompt.history">Who was the first president of the United States?</Copy>
<Copy k="prompt.science">What element has atomic number 45?</Copy>
<Copy k="prompt.cinema">What won Best Picture at the Oscars this year?</Copy>
<Copy k="prompt.programming">
  What programming language should I use for my next project?
</Copy>
<Copy k="prompt.policy">Can I expense a monitor if I'm working from home?</Copy>
<Copy k="prompt.creative">Please write me a rhyming couplet about a Fox.</Copy>

<Copy k="label.history">correct</Copy>
<Copy k="label.science">correct</Copy>
<Copy k="label.cinema">hallucination</Copy>
<Copy k="label.programming">subjective</Copy>
<Copy k="label.policy">not sure</Copy>
<Copy k="label.creative">it rhymes</Copy>

<Copy k="explain.history">
  Correct, and I know it's correct without looking it up.
</Copy>
<Copy k="explain.science">
  Correct, but in all honesty not something I'd know off the top of my head.
</Copy>
<Copy k="explain.cinema">
  For a model whose training data ends before the ceremony, the most likely
  token feels reasonable but isn't.
</Copy>
<Copy k="explain.programming">
  Subjective, but probably the wrong answer if you're trying to design web
  interactions that only require JavaScript.
</Copy>
<Copy k="explain.policy">
  The model doesn't know where you work or what the policies are, so the
  most likely tokens hedge toward a generic answer.
</Copy>
<Copy k="explain.creative">
  Correct, in that it rhymes, which was the main requirement of the prompt.
</Copy>

<Copy k="hidden.aria">hidden token: reveal the next token</Copy>
<Copy k="reveal">reveal</Copy>

<Copy k="judge.prompt">Did the model get this right?</Copy>
<Copy k="choice.correct">correct</Copy>
<Copy k="choice.incorrect">incorrect</Copy>
<Copy k="choice.idk">not sure</Copy>

{/* {label} is the learner's own choice (one of choice.*), italicized. */}
<Copy k="result.right">You said {label}, and you were right.</Copy>
<Copy k="result.wrong">You said {label}. Not quite.</Copy>
<Copy k="result.neutral">You said {label}. This one's tricky.</Copy>

<Copy k="clear">clear</Copy>
<Copy k="next">Next: {tab}</Copy>
<Copy k="last">That's the last one.</Copy>
<Copy k="progress">{n} / {total} judged</Copy>

<Copy k="takeaway.li1">
  Older, more universally agreed, and more stable information is more likely
  to be stored accurately in parametric memory.
</Copy>
<Copy k="takeaway.li2">
  For subjective text, like completing a poem, the model picks {something}.
</Copy>
<Copy k="takeaway.li2.something">something</Copy>
<Copy k="takeaway.li3">
  Facts that could change at any time, like "the highest-grossing film of all
  time is ____," are more likely to be incorrect. At Anthropic, we spend a
  lot of time making sure Claude knows to explain its own limits rather than
  hallucinate, but Claude can still make occasional mistakes.
</Copy>
<Copy k="takeaway.p">
  But if the knowledge isn't in parametric memory, there's another way to
  make sure the model gets it right: adding more {context}.
</Copy>
<Copy k="takeaway.p.context">context</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: b3cacf88f98623f3 */}
<Copy k="widget.description">
  Exercise: the learner works through six sample questions spanning different
  domains, each showing a user prompt and a streamed reply from Claude with
  the answer tokens hidden. Clicking a hidden token reveals it one at a time,
  or the learner can reveal the rest at once, then judges whether Claude's
  completion was correct, incorrect, or unclear before seeing the actual
  verdict and a short explanation. The goal is to build intuition for
  parametric memory: knowledge baked into a model's weights during training,
  which it uses to predict likely next words. The takeaway is that older,
  stable, widely agreed-upon facts tend to be recalled accurately, while facts
  that can change over time are more prone to error, and when knowledge isn't
  reliably stored this way, supplying additional context is another way to
  help the model get things right.
</Copy>
<Copy k="widget.summary">
  Exercise: across six domains, reveal Claude's hidden reply tokens one at a
  time and judge whether its completion is correct, teaching how parametric
  memory predicts likely answers from training.
</Copy>
`;export{e as default};