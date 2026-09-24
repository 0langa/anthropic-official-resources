var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SerialPositionCurve.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. */}

<Copy k="aria">
  U-shaped serial position curve: recall probability is high at the start of
  a list (primacy), drops in the middle (lost in the middle), and rises again
  at the end (recency).
</Copy>
<Copy k="axis.x">Position in list →</Copy>
<Copy k="axis.y">Recall probability →</Copy>
<Copy k="zone.primacy">Primacy</Copy>
<Copy k="zone.middle">Lost in the middle</Copy>
<Copy k="zone.recency">Recency</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 5a18610a932643fc */}
<Copy k="widget.description">
  Diagram: a U-shaped curve plots recall probability (vertical axis) against
  position in a list (horizontal axis). Recall is high at the start of the
  list, labeled primacy, dips lowest in the middle, labeled "lost in the
  middle," and rises again at the end, labeled recency. The curve illustrates
  the serial position effect from psychology: items at the beginning and end
  of a sequence are remembered best, while middle items are most likely to be
  forgotten. The lesson connects this human memory pattern to large language
  models, which show the same tendency to attend more strongly to information
  placed at the start or end of a context window and to lose track of details
  buried in the middle, informing how context should be structured in prompts.
</Copy>
<Copy k="widget.summary">
  Diagram: a U-shaped curve shows recall probability by position in a list,
  high at the start (primacy) and end (recency), lowest in the middle. It
  illustrates why both human memory and AI models lose track of information
  buried in the middle of long context.
</Copy>
`;export{e as default};