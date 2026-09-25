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

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 73126682623597a3 */}
<Copy k="widget.description">
  Explorer: a scale of five effort levels in Claude Code, low, medium, high,
  xhigh, and max, lets the learner select a level and see how the model's
  behavior shifts along four dimensions: reading and tool calls, thinking and
  tokens used, turns before handing back, and double-checking its own work. A
  bracket over high and xhigh notes that the default is one of those two,
  depending on the model. Before a selection is made, it shows what changes
  toward each end of the scale. Selecting a level reveals a short description
  of that level's typical behavior and illustrative meter ratings for each
  dimension. The goal is to show that effort controls how much work the model
  does on a task, not its underlying capability, which is set separately by
  the chosen model.
</Copy>
<Copy k="widget.summary">
  Explorer: select one of five effort levels, from low to max, to see how the
  model's reading, thinking, turns, and double-checking shift, showing that
  effort controls resource use, not the model's underlying capability.
</Copy>
`;export{e as default};