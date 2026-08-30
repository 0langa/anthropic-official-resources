var e=`---
kind: widget-copy
---

{/* Learner-facing copy for EffortScale.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Level names (low … max) and
    slash commands are product syntax and stay in the widget. */}

<Copy k="kicker">The effort scale</Copy>
<Copy k="title">Select a level to see how the model’s work changes.</Copy>
<Copy k="bracket">the default is one of these two, depending on the model</Copy>
<Copy k="aria.levels">Effort level</Copy>
<Copy k="axis.low">use as little as possible</Copy>
<Copy k="axis.max">use whatever it takes</Copy>
<Copy k="note">
  Same model at every level. You choose the model with {model} and the effort
  with {effort}.
</Copy>

<Copy k="directions.title">What changes in each direction</Copy>
<Copy k="directions.low">Toward low</Copy>
<Copy k="directions.max">Toward max</Copy>
<Copy k="towardLow1">Less reading, fewer tool calls</Copy>
<Copy k="towardLow2">Less thinking, fewer tokens</Copy>
<Copy k="towardLow3">Fewer turns before it hands back</Copy>
<Copy k="towardLow4">Little double-checking</Copy>
<Copy k="towardMax1">More reading, more tool calls</Copy>
<Copy k="towardMax2">More thinking, more tokens</Copy>
<Copy k="towardMax3">More turns before it hands back</Copy>
<Copy k="towardMax4">More double-checking of its own work</Copy>

<Copy k="panel.what">What {level} tends to look like</Copy>
<Copy k="panel.note">Illustrative, not measured</Copy>
<Copy k="meter1">Reading and tool calls</Copy>
<Copy k="meter2">Thinking and tokens used</Copy>
<Copy k="meter3">Turns before it hands back</Copy>
<Copy k="meter4">Double-checking its own work</Copy>
<Copy k="aria.meter">{label}: {value} of 5</Copy>

<Copy k="level.low.line">
  Answers from what is at hand: skips extra reading, keeps the response short,
  and hands back quickly.
</Copy>
<Copy k="level.medium.line">
  Reads only what the task points at: does what was asked, then stops.
</Copy>
<Copy k="level.high.line">
  Reads around the task: takes in the surrounding code and checks the result
  before it hands back.
</Copy>
<Copy k="level.xhigh.line">
  Tests its own work: reads widely, runs what it can, and revises what does
  not hold up.
</Copy>
<Copy k="level.max.line">
  Keeps going until it is confident: explores alternatives, re-verifies, and
  does not scale down for a small task.
</Copy>
`;export{e as default};