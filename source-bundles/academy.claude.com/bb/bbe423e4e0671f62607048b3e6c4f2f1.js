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
`;export{e as default};