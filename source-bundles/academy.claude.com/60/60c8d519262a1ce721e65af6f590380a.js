var e=`---
kind: widget-copy
---

{/* Learner-facing copy for HireAnalogy.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Each run's row marks (done /
    not done / extra) and bar values are data in the widget; the row text
    lives here as \`outcome.<model>.<effort>.row<n>\`. */}

<Copy k="kicker">One task, four runs</Copy>
<Copy k="title">
  Change the model or change the effort, and see what comes back.
</Copy>
<Copy k="task.label">Task</Copy>
<Copy k="task">
  A failing test in code that uses an uncommon date-and-time library. The
  right fix depends on that library’s time zone rules.
</Copy>

<Copy k="seg.model">Model</Copy>
<Copy k="seg.effort">Effort</Copy>
<Copy k="model.less">Less capable</Copy>
<Copy k="model.more">More capable</Copy>
<Copy k="effort.default">Default</Copy>
<Copy k="effort.max">Max</Copy>

<Copy k="cameBack.heading">What came back</Copy>
<Copy k="mark.done">Done</Copy>
<Copy k="mark.notDone">Not done</Copy>
<Copy k="mark.extra">Extra, not asked for</Copy>
<Copy k="mark.note">Note</Copy>
<Copy k="bar.tokens">Tokens used</Copy>
<Copy k="bar.turns">Turns before it handed back</Copy>
<Copy k="bar.aria">{label}: {value} of 5, relative</Copy>
<Copy k="bars.note">
  Relative across runs, not measured. Bars compare work, not price.
</Copy>
<Copy k="takeaway">{lead} {text}</Copy>
<Copy k="takeaway.lead">Takeaway:</Copy>

<Copy k="outcome.less.default.title">Not fixed: it did not know the library</Copy>
<Copy k="outcome.less.default.row1">Read the test and the code under it</Copy>
<Copy k="outcome.less.default.row2">A fix built on a guess at the rules</Copy>
<Copy k="outcome.less.default.row3">The test still fails</Copy>
<Copy k="outcome.less.default.takeaway">
  It did the work but guessed at time zone rules it did not know: a knowledge
  miss, not an effort miss. More effort might cover the gap by reading the
  library itself, at the price of a lot of reading.
</Copy>

<Copy k="outcome.less.max.title">Fixed, after a lot of reading</Copy>
<Copy k="outcome.less.max.row1">A working fix</Copy>
<Copy k="outcome.less.max.row2">Tests pass</Copy>
<Copy k="outcome.less.max.row3">
  Read deep into the library source, several attempts, a long wait
</Copy>
<Copy k="outcome.less.max.takeaway">
  This time it finished, and you paid for everything it read to get there. It
  also took more tokens and turns than the more capable model does at its
  default; when that happens, going up a model can be the cheaper move.
</Copy>

<Copy k="outcome.more.default.title">Fixed with little work</Copy>
<Copy k="outcome.more.default.row1">A working fix</Copy>
<Copy k="outcome.more.default.row2">Tests pass</Copy>
<Copy k="outcome.more.default.takeaway">
  It already knew the library’s rules, so the default was enough. Knowledge
  it already has does not need extra effort.
</Copy>

<Copy k="outcome.more.max.title">Fixed, plus work you did not ask for</Copy>
<Copy k="outcome.more.max.row1">A working fix</Copy>
<Copy k="outcome.more.max.row2">Tests pass</Copy>
<Copy k="outcome.more.max.row3">Refactored the date helpers around the fix</Copy>
<Copy k="outcome.more.max.row4">A write-up on time zone handling</Copy>
<Copy k="outcome.more.max.takeaway">
  Spare budget on a model that did not need it is how you end up with work
  you never asked for.
</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: d11c99ddafdb181c */}
<Copy k="widget.description">
  Explorer: the learner picks a model, less capable or more capable, and an
  effort level, default or max, for one task: fixing a failing test that
  depends on an uncommon date-and-time library's time zone rules. Each pair
  shows what came back, with relative bars for tokens and turns. The less
  capable model at its default fails because it doesn't know the library's
  rules, which is a knowledge miss rather than an effort miss. At max it
  succeeds after a lot of reading, and it uses more tokens and turns than the
  more capable model, which succeeds at its default with little work. At max,
  the more capable model also does work nobody asked for. The goal is to show
  that effort sets how hard a model works, the model sets what it knows, and
  going up a model can be the cheaper move.
</Copy>
<Copy k="widget.summary">
  Explorer: pick a model and an effort level for one debugging task and see
  what comes back. It shows that effort sets how hard a model works, while the
  model sets what it knows.
</Copy>
`;export{e as default};