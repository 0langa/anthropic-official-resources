var e=`---
kind: widget-copy
---

{/* Learner-facing copy for OwnershipFigures.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Keys are namespaced by the
    widget's \`variant\` prop: fleet, span. */}

{/* ── fleet (Fleet) ── */}

<Copy k="fleet.you">You</Copy>
<Copy k="fleet.srIn">in</Copy>
<Copy k="fleet.srYou">You:</Copy>

<Copy k="fleet.figureAria">
  You steering Claude in three channels, where it owns a different job in
  each
</Copy>

<Copy k="fleet.inst1.channel">#call-prep</Copy>
<Copy k="fleet.inst1.ask">prep me for the Acme renewal call at 2pm.</Copy>

<Copy k="fleet.inst2.channel">#proj-atlas</Copy>
<Copy k="fleet.inst2.ask">
  keep the project page current and flag anything that puts the launch at
  risk.
</Copy>

<Copy k="fleet.inst3.channel">#it-requests</Copy>
<Copy k="fleet.inst3.ask">
  every Friday, round up the requests nobody picked up and tell me what to
  prioritize.
</Copy>

<Copy k="fleet.foot">
  One person, one Claude, a different job in each of three channels.
</Copy>

{/* ── span (AutonomySpan) ── */}

<Copy k="span.figureAria">
  How long one instruction can run: minutes for an answer, hours for a task,
  days for a routine, weeks for a job Claude owns
</Copy>

<Copy k="span.row.minutes.span">Minutes</Copy>
<Copy k="span.row.minutes.runs">An answer from the channel’s history.</Copy>
<Copy k="span.row.minutes.where">Lesson 1</Copy>

<Copy k="span.row.hours.span">Hours</Copy>
<Copy k="span.row.hours.runs">
  A task with many steps that keeps going after you log off.
</Copy>
<Copy k="span.row.hours.where">Lesson 9</Copy>

<Copy k="span.row.days.span">Days</Copy>
<Copy k="span.row.days.runs">
  A routine that posts on schedule and adjusts to feedback.
</Copy>
<Copy k="span.row.days.where">Lesson 8</Copy>

<Copy k="span.row.weeks.span">Weeks</Copy>
<Copy k="span.row.weeks.runs">
  A job Claude owns: it checks in on itself, fixes what breaks, and reports
  back.
</Copy>
<Copy k="span.row.weeks.where">This lesson</Copy>

<Copy k="span.foot">
  On teams at Anthropic that work this way, each Claude owns a clear job on
  its own schedule; people set the goals and review the output.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 4122615ba14638ac */}
<Copy k="widget.description.fleet">
  Diagram: one person steers one Claude in three channels, with a different
  job in each: preparing for a call, keeping a project page current and
  flagging risks to a launch, and each Friday rounding up requests nobody
  picked up and recommending priorities. Lines fan out from the person to each
  channel. The figure shows that the same Claude can carry different jobs in
  different channels at once. The lesson's point is that with Claude in
  several channels, the learner's role shifts from prompting task by task to
  delegating and steering work at the level of a team.
</Copy>
<Copy k="widget.description.span">
  Diagram: a four-row scale of how long one instruction to Claude can run.
  Each row names a span, the work that fills it, and the lesson that covers
  it: minutes for an answer from the channel's history, hours for a task with
  many steps that keeps going after you log off, days for a routine that posts
  on schedule and adjusts to feedback, and weeks for a job Claude owns,
  checking in on itself, fixing what breaks, and reporting back. A note says
  that on teams at Anthropic that work this way, each Claude owns a clear job
  and people set the goals and review the output. The lesson adds that Claude
  can take on longer work as you come to trust it.
</Copy>
<Copy k="widget.summary.fleet">
  Diagram: one person steers one Claude in three channels, with a different
  job in each, showing that work can be delegated and steered at the level of
  a team rather than one task at a time.
</Copy>
<Copy k="widget.summary.span">
  Diagram: a four-row scale of how long one instruction to Claude can run,
  from minutes for an answer to weeks for a job Claude owns, showing that
  Claude can take on longer work as trust grows.
</Copy>
`;export{e as default};