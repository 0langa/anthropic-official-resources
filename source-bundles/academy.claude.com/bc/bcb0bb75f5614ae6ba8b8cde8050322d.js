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
    repository root. Run it again after you edit its copy or code. described-from: 724e8fa22714ca5b */}
<Copy k="widget.description">
  Explorer: a five-stop scale from low to max effort for Claude Code, letting
  the learner select a level to see how the model's work changes. Before any
  selection, it shows what happens moving toward low (less reading, fewer tool
  calls, less thinking, fewer turns, little double-checking) versus toward max
  (more of each, including more self-checking). Selecting a level shows a
  description of what that effort tends to look like alongside illustrative
  (not measured) meters for reading/tool calls, thinking/tokens, turns before
  handing back, and double-checking. A note clarifies that effort is set
  separately from model choice, and the same model runs at every effort level.
  The goal is understanding that effort controls how many resources the model
  spends, not what it knows.
</Copy>
<Copy k="widget.summary">
  Explorer: select a level on a five-stop effort scale, from low to max, to
  see how the model's reading, thinking, turns, and self-checking change, with
  the same model running at every level.
</Copy>
`;export{e as default};