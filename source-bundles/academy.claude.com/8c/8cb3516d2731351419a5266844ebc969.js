var e=`---
kind: widget-copy
---

{/* Learner-facing copy for DataSourceSwitches.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. Questions 3–5 are split into
    \`.pre\` / \`.bold\` / \`.post\` so the widget can bold the time phrase; the
    \`.post\` keys are the sentence-final punctuation and may be merged into
    the neighbouring fragment where a language requires it. \`{n}\` in
    \`chip.ret\` is a runtime placeholder (months) and must survive
    verbatim. The retention thresholds and day values behind the controls
    are data in the widget. */}

<Copy k="intro.lead">Switch a source off</Copy>
<Copy k="intro.rest">
  and watch which questions you can no longer answer.
</Copy>

<Copy k="tile.audit.name">Audit log</Copy>
<Copy k="tile.audit.holds">
  Who did what, when. Metadata only; its events also come through the
  Compliance API.
</Copy>
<Copy k="tile.comp.name">Compliance API</Copy>
<Copy k="tile.comp.holds">
  Chat, Cowork, and Claude Code session content. The Primary Owner enables
  it; access keys are scoped.
</Copy>
<Copy k="tile.otel.name">OpenTelemetry export</Copy>
<Copy k="tile.otel.holds">
  How Cowork and Claude Code are running. Cowork includes prompt content by
  default (filter it in your collector); Claude Code logs prompts only by
  opt-in.
</Copy>
<Copy k="tile.ret.name">Retention window</Copy>
<Copy k="tile.ret.holds">
  How far back content still exists. Default: no limit.
</Copy>
<Copy k="tile.alwaysOn">Always on</Copy>

<Copy k="ret.90">90 days</Copy>
<Copy k="ret.180">6 mo</Copy>
<Copy k="ret.nolimit">No limit</Copy>

<Copy k="chip.audit">Audit log</Copy>
<Copy k="chip.comp">Compliance API</Copy>
<Copy k="chip.otel">OpenTelemetry</Copy>
<Copy k="chip.ret">Retention ≥ {n} mo</Copy>

<Copy k="tag.yes">Answerable</Copy>
<Copy k="tag.no">Not answerable</Copy>

<Copy k="q.1">
  Who changed the retention setting last quarter, and when?
</Copy>
<Copy k="q.2">Was Cowork slow for one group last Tuesday?</Copy>
<Copy k="q.3.pre">What exactly did Claude say in a member’s chat</Copy>
<Copy k="q.3.bold">two days ago</Copy>
<Copy k="q.3.post">?</Copy>
<Copy k="q.4.pre">A regulator asks for a chat from</Copy>
<Copy k="q.4.bold">five months ago</Copy>
<Copy k="q.4.post">.</Copy>
<Copy k="q.5.pre">Legal needs a project file a member uploaded</Copy>
<Copy k="q.5.bold">ten months ago</Copy>
<Copy k="q.5.post">.</Copy>
<Copy k="q.6">
  What did an engineer type into Claude Code last month?
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 24ddde641e12865a */}
<Copy k="widget.description">
  Simulation: four data sources for monitoring a Claude deployment are
  shown—an always-on audit log, a Compliance API with an on/off switch, an
  OpenTelemetry export with an on/off switch, and a three-way retention window
  control (90 days, six months, or no limit). Below them sit administrative
  questions about past chat content, performance, file access, and
  configuration changes, each tagged with which source or retention horizon it
  depends on. Switching a source off, or shortening retention below a
  question's time horizon, breaks that dependency and flips the question from
  answerable to not answerable. The point is that after-the-fact visibility
  depends entirely on which sources are enabled and how long content is kept,
  so disabling a source or shortening retention has direct, traceable
  consequences for what can later be investigated or proven.
</Copy>
<Copy k="widget.summary">
  Simulation: toggle the Compliance API, OpenTelemetry export, and retention
  window to see which administrative questions about past activity become
  unanswerable, showing how data sources and retention affect later
  visibility.
</Copy>
`;export{e as default};