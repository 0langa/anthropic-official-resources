var e=`---
kind: widget-copy
---

{/* Learner-facing copy for MismatchSigns.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. Track positions and the
    low/max level names are data in the widget. */}

<Copy k="kicker">Signs of a mismatch</Copy>
<Copy k="title">
  Too low shows in a single reply. Too high shows only as a pattern.
</Copy>
<Copy k="aria.tabs">Effort you set compared with what the task needs</Copy>
<Copy k="notice.heading">What you notice</Copy>

<Copy k="case.low.tab">Too low</Copy>
<Copy k="case.low.heading">Effort set lower than the task needs</Copy>
<Copy k="case.low.notice1">
  It stops short and hands back with part of the task undone
</Copy>
<Copy k="case.low.notice2">
  It does less reading and checking than the task called for
</Copy>
<Copy k="case.low.notice3">You spend the next prompt getting it to finish</Copy>

<Copy k="case.ok.tab">About right</Copy>
<Copy k="case.ok.heading">Effort set to what the task needs</Copy>
<Copy k="case.ok.notice1">
  It finishes what you asked, and only that, in one go
</Copy>
<Copy k="case.ok.notice2">The wait fits the size of the change</Copy>
<Copy k="case.ok.notice3">One level lower and it tends to stop short</Copy>

<Copy k="case.high.tab">Too high</Copy>
<Copy k="case.high.heading">Effort set higher than the task needs</Copy>
<Copy k="case.high.notice1">It finishes, so no single reply looks wrong</Copy>
<Copy k="case.high.notice2">
  Small changes come back slower and use more tokens
</Copy>
<Copy k="case.high.notice3">It takes on work you did not ask for</Copy>

<Copy k="track.matched">
  On a low-to-max scale, the effort you set matches what the task needs
</Copy>
<Copy k="track.below">
  On a low-to-max scale, the effort you set sits below what the task needs
</Copy>
<Copy k="track.above">
  On a low-to-max scale, the effort you set sits above what the task needs
</Copy>
<Copy k="track.needs">what the task needs</Copy>
<Copy k="track.set">what you set</Copy>
`;export{e as default};