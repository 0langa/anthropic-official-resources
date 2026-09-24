var e=`---
kind: widget-copy
---

{/* Learner-facing copy for FigUsage.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). The figure depicts the English admin
    console; its control labels are product syntax and live in
    _consoleLabels.ts. This file carries the figure's accessible description
    plus the generated widget description and summary. */}

<Copy k="aria">The Usage page: the organization-wide limit, the default per-channel spend limit, and one row per channel showing spend this month against its limit (a channel with no spend limit shows its spend alone, with no usage bar)</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 8f2551c9dde91788 */}
<Copy k="widget.description">
  Illustration: the Usage page of the admin console, where Claude Tag's
  spending controls live. It shows the organization-wide limit for the billing
  period with spend so far against it, the default spend limit applied to
  channels without their own, and a table with one row per channel giving its
  spend this month, its spend limit, and its usage. It teaches that channel
  spend counts toward two limits at once, the organization-wide limit and the
  channel's own, and that Claude Tag declines new work in a channel when
  either is reached.
</Copy>
<Copy k="widget.summary">
  Illustration: the Usage page for Claude Tag, showing the organization-wide
  spend limit, the default limit for channels, and each channel's spend this
  month with its spend limit where one is set.
</Copy>
`;export{e as default};