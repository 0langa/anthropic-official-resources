var e=`---
kind: widget-copy
---

{/* Learner-facing copy for CapResponsePlaybook.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. The \`task.*\` entries split
    one sentence around its bold fragment and must read as a single
    sentence when joined with spaces. "Platform" is the name of the
    example group in this course's running scenario. \`status.*\` values
    render as-is in a small pill; the source shows them in capitals.
    \`axis\` ends with a literal up-arrow character that should survive
    translation. */}

<Copy k="task.pre">
  Platform’s members hit their cap in month two and new usage paused.
</Copy>
<Copy k="task.bold">Change one setting</Copy>
<Copy k="task.rest">
  — each applies to the whole role or group, not one member — and watch a
  member’s next month move against the cap.
</Copy>

<Copy k="plot.aria.start">
  One member’s monthly usage against their cap: usage has reached the cap,
  and the member is paused.
</Copy>
<Copy k="plot.aria.raise">
  One member’s monthly usage against their cap: the cap is raised, and
  usage now sits below it with headroom.
</Copy>
<Copy k="plot.aria.model">
  One member’s monthly usage against their cap: routine work moved to a
  cheaper model, and usage drops well below the cap.
</Copy>
<Copy k="plot.aria.effort">
  One member’s monthly usage against their cap: high-effort usage shrinks,
  and the total sits below the cap.
</Copy>
<Copy k="plot.aria.none">
  One member’s monthly usage against their cap: nothing changed; usage
  still sits at the cap, and the member stays paused.
</Copy>
<Copy k="cap.label">group cap · per member</Copy>
<Copy k="lbl.heavy">High-effort runs</Copy>
<Copy k="lbl.routine">Routine tasks</Copy>
<Copy k="status.paused">PAUSED AT CAP</Copy>
<Copy k="status.ok">HEADROOM</Copy>
<Copy k="axis">one member · monthly usage ↑</Copy>

<Copy k="levers.aria">Settings</Copy>

<Copy k="lever.raise.tag">Group cap</Copy>
<Copy k="lever.raise.title">Raise Platform’s cap</Copy>
<Copy k="lever.raise.desc">
  The line moves up for every Platform member, not just this one.
</Copy>

<Copy k="lever.model.tag">Role default</Copy>
<Copy k="lever.model.title">Lower the role’s default model</Copy>
<Copy k="lever.model.desc">
  Members start in a mid-range model unless they switch. Same volume, less
  usage.
</Copy>

<Copy k="lever.effort.tag">Role cap</Copy>
<Copy k="lever.effort.title">Cap the role’s effort level</Copy>
<Copy k="lever.effort.desc">
  Routine work can’t run at the highest effort. Trims the high-effort
  runs.
</Copy>

<Copy k="lever.none.tag">No change</Copy>
<Copy k="lever.none.title">Leave the settings alone</Copy>
<Copy k="lever.none.desc">
  Stays paused until the month resets or the increase request is approved.
</Copy>

<Copy k="fine">
  Illustrative direction only, not a forecast; these four levers are
  examples, not your only options.
</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 1800855a853450ce */}
<Copy k="widget.description">
  Exercise: a chart shows one organization member's monthly usage, split into
  routine and high-effort work, stacked against a dashed per-member group cap;
  the member begins paused because usage has reached the cap. The learner
  picks one setting to change — raise the group's cap, lower the role's
  default model, cap the role's effort level, or leave things as they are —
  and watches the bar, cap line, and paused/headroom status update for the
  next month. It teaches that responding to a cap breach means choosing
  between raising the limit itself versus reducing underlying usage through
  role-level settings, and that each option applies to the whole group or
  role, not just one member.
</Copy>
<Copy k="widget.summary">
  Exercise: a chart shows one member's monthly usage against a per-member
  group cap, starting paused. The learner changes one group or role setting
  and sees that fixing a cap breach means raising the limit or reducing usage.
</Copy>
`;export{e as default};