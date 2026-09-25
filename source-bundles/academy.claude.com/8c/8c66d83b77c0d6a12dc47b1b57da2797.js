var e=`---
kind: widget-copy
---

{/* Learner-facing copy for MessageBuilder.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Keys are namespaced by the
    widget's \`variant\` prop: brief, fetch, job. */}

{/* ── brief (BriefBuilder) ── */}

<Copy k="brief.head">
  {claude} every {days} at {time}, send me a morning brief here, {tone}.
</Copy>

<Copy k="brief.day.weekday">weekday</Copy>
<Copy k="brief.day.day">day</Copy>
<Copy k="brief.day.monday">Monday</Copy>
<Copy k="brief.day.monThu">Monday and Thursday</Copy>

<Copy k="brief.time.7am">7am</Copy>
<Copy k="brief.time.730am">7:30am</Copy>
<Copy k="brief.time.8am">8am</Copy>
<Copy k="brief.time.830am">8:30am</Copy>
<Copy k="brief.time.9am">9am</Copy>

<Copy k="brief.tone.plain">in a plain, neutral tone</Copy>
<Copy k="brief.tone.casual">in a casual tone</Copy>
<Copy k="brief.tone.formal">in a formal tone</Copy>

<Copy k="brief.inc.watch.short">channels to watch</Copy>
<Copy k="brief.inc.watch.text">
  Watch {channels} and tell me what I need to know from them.
</Copy>
<Copy k="brief.inc.watch.placeholder">#sales-requests, #launch-q4</Copy>
<Copy k="brief.inc.watch.fallback">the busy channels I follow</Copy>

<Copy k="brief.inc.todos.short">my to-dos</Copy>
<Copy k="brief.inc.todos.text">
  For the channels I’m active in, list what is waiting on me in order of
  urgency, and flag anything I’ve dropped.
</Copy>

<Copy k="brief.inc.decisions.short">decisions elsewhere</Copy>
<Copy k="brief.inc.decisions.text">
  From other channels, tell me about discussions and decisions that could
  affect my work.
</Copy>

<Copy k="brief.inc.drafts.short">draft replies</Copy>
<Copy k="brief.inc.drafts.text">
  Draft a reply for each message I owe an answer to, so I can post it in one
  step.
</Copy>

<Copy k="brief.inc.next.short">next steps</Copy>
<Copy k="brief.inc.next.text">
  List next steps for anything I’ve committed to this week.
</Copy>

<Copy k="brief.inc.skip.short">leave out channels</Copy>
<Copy k="brief.inc.skip.text">Leave out {channels}.</Copy>
<Copy k="brief.inc.skip.placeholder">#random, #social</Copy>
<Copy k="brief.inc.skip.fallback">social and announcement channels</Copy>

<Copy k="brief.inc.quiet.short">skip when empty</Copy>
<Copy k="brief.inc.quiet.text">
  If there is nothing worth my attention, skip the brief that day.
</Copy>

<Copy k="brief.format">{shape}, {order}. {detail}, and {mark}.</Copy>

<Copy k="brief.shape.summary">Start with a two-line summary, then bullets</Copy>
<Copy k="brief.shape.bullets">Bullets only, one line each</Copy>
<Copy k="brief.shape.paragraph">One short paragraph, no bullets</Copy>

<Copy k="brief.order.urgency">ordered by urgency</Copy>
<Copy k="brief.order.channel">grouped by channel</Copy>
<Copy k="brief.order.person">grouped by person</Copy>

<Copy k="brief.detail.link">Link to details rather than repeating them</Copy>
<Copy k="brief.detail.thread">Put details in a thread reply under the brief</Copy>
<Copy k="brief.detail.inline">Include the key details inline</Copy>

<Copy k="brief.mark.none">no special marking for urgent items</Copy>
<Copy k="brief.mark.words">start urgent lines with URGENT</Copy>
<Copy k="brief.mark.emoji">use one emoji per line to signal urgency</Copy>

<Copy k="brief.field.days">Days</Copy>
<Copy k="brief.field.time">Time</Copy>
<Copy k="brief.field.tone">Tone</Copy>
<Copy k="brief.field.shape">Shape</Copy>
<Copy k="brief.field.order">Order</Copy>
<Copy k="brief.field.detail">Details</Copy>
<Copy k="brief.field.mark">Urgent items</Copy>

<Copy k="brief.removeAria">Remove: {item}</Copy>
<Copy k="brief.add">Add:</Copy>
<Copy k="brief.hint">Underlined parts are yours to change.</Copy>
<Copy k="brief.copyButton">Copy message</Copy>
<Copy k="brief.copied">Copied</Copy>

{/* ── fetch (FetchBuilder) ── */}

<Copy k="fetch.sentence">
  {claude} using {tool}, pull {what}. Link each item to where it lives so I
  can check it.
</Copy>

<Copy k="fetch.tool.crm">the connected CRM</Copy>
<Copy k="fetch.tool.tickets">the connected ticketing tool</Copy>
<Copy k="fetch.tool.warehouse">the connected data warehouse</Copy>
<Copy k="fetch.tool.tracker">the connected project tracker</Copy>
<Copy k="fetch.tool.docs">the connected drive</Copy>

<Copy k="fetch.pull.crm.open.label">the open opportunities and next steps for</Copy>
<Copy k="fetch.pull.crm.open.text">{label} {value}</Copy>
<Copy k="fetch.pull.crm.open.placeholder">Acme Logistics</Copy>
<Copy k="fetch.pull.crm.open.fallback">[account]</Copy>
<Copy k="fetch.pull.crm.recent.label">the last five activities logged on</Copy>
<Copy k="fetch.pull.crm.recent.text">{label} {value}, and who logged them</Copy>
<Copy k="fetch.pull.crm.recent.placeholder">Acme Logistics</Copy>
<Copy k="fetch.pull.crm.recent.fallback">[account]</Copy>

<Copy k="fetch.pull.tickets.open.label">the open tickets for</Copy>
<Copy k="fetch.pull.tickets.open.text">
  {label} {value}, with status, age and assignee
</Copy>
<Copy k="fetch.pull.tickets.open.placeholder">Northwind</Copy>
<Copy k="fetch.pull.tickets.open.fallback">[customer]</Copy>
<Copy k="fetch.pull.tickets.old.label">tickets open longer than</Copy>
<Copy k="fetch.pull.tickets.old.text">{label} {value}, and who owns each</Copy>
<Copy k="fetch.pull.tickets.old.placeholder">48 hours</Copy>
<Copy k="fetch.pull.tickets.old.fallback">48 hours</Copy>

<Copy k="fetch.pull.warehouse.metric.label">yesterday’s</Copy>
<Copy k="fetch.pull.warehouse.metric.text">
  {label} {value}, and show the query you ran
</Copy>
<Copy k="fetch.pull.warehouse.metric.placeholder">signups by plan</Copy>
<Copy k="fetch.pull.warehouse.metric.fallback">signups by plan</Copy>
<Copy k="fetch.pull.warehouse.row.label">the current record for</Copy>
<Copy k="fetch.pull.warehouse.row.text">{label} {value} from the accounts table</Copy>
<Copy k="fetch.pull.warehouse.row.placeholder">Northwind</Copy>
<Copy k="fetch.pull.warehouse.row.fallback">[customer]</Copy>

<Copy k="fetch.pull.tracker.open.label">the open issues in</Copy>
<Copy k="fetch.pull.tracker.open.text">{label} {value}, with owner and due date</Copy>
<Copy k="fetch.pull.tracker.open.placeholder">Q4 launch</Copy>
<Copy k="fetch.pull.tracker.open.fallback">[project]</Copy>
<Copy k="fetch.pull.tracker.changed.label">
  the issues that changed status this week in
</Copy>
<Copy k="fetch.pull.tracker.changed.text">{label} {value}</Copy>
<Copy k="fetch.pull.tracker.changed.placeholder">Q4 launch</Copy>
<Copy k="fetch.pull.tracker.changed.fallback">[project]</Copy>

<Copy k="fetch.pull.docs.facts.label">the dates, owners and numbers stated in</Copy>
<Copy k="fetch.pull.docs.facts.text">{label} {value}</Copy>
<Copy k="fetch.pull.docs.facts.placeholder">Q4 launch plan</Copy>
<Copy k="fetch.pull.docs.facts.fallback">[document]</Copy>

<Copy k="fetch.field.tool">Tool in this channel</Copy>
<Copy k="fetch.field.pull">What to pull</Copy>
<Copy k="fetch.field.for">For</Copy>

<Copy k="fetch.hint">Underlined parts are yours to change.</Copy>
<Copy k="fetch.copyButton">Copy message</Copy>
<Copy k="fetch.copied">Copied</Copy>

{/* ── job (JobBuilder) ── */}

<Copy k="job.message">
  {claude} remember for this channel: from now on, you are responsible for
  {job} here. For each one: {each}, {owner}, and {record}. If something is
  unclear or you are not confident, {unsure} {who}.
</Copy>

<Copy k="job.kind.intake.label">triaging the engagement requests posted</Copy>
<Copy k="job.kind.intake.each">check it against the account record in the CRM</Copy>
<Copy k="job.kind.intake.record">
  record it in the request tracker with a link to the thread
</Copy>

<Copy k="job.kind.monitor.label">watching the alerts posted</Copy>
<Copy k="job.kind.monitor.each">
  check whether it matches an open incident or a known noisy source, and say
  which in one line
</Copy>
<Copy k="job.kind.monitor.record">
  log anything new in the incident tracker with a link to the thread
</Copy>

<Copy k="job.kind.review.label">the first pass on vendor submissions posted</Copy>
<Copy k="job.kind.review.each">
  check it against the security questionnaire and the approved-vendor list,
  and list what is missing
</Copy>
<Copy k="job.kind.review.record">
  record it in the procurement tracker with a link to the thread
</Copy>

<Copy k="job.kind.coord.label">
  running the launch checklist for each release announced
</Copy>
<Copy k="job.kind.coord.each">
  open the checklist, confirm docs, support and marketing have what they
  need, and post what is still outstanding
</Copy>
<Copy k="job.kind.coord.record">
  update the launch tracker with a link to the thread
</Copy>

<Copy k="job.owner.rota">tag whoever is on this week’s rotation</Copy>
<Copy k="job.owner.lead">tag the team lead</Copy>
<Copy k="job.owner.rules">tag the owner the routing rules name</Copy>

<Copy k="job.unsure.ask">ask one clarifying question in the thread, then tag</Copy>
<Copy k="job.unsure.tag">tag</Copy>

<Copy k="job.field.job">The job</Copy>
<Copy k="job.field.owner">Who owns it</Copy>
<Copy k="job.field.unsure">When unsure</Copy>
<Copy k="job.field.who">Who to tag</Copy>

<Copy k="job.hint">Underlined parts are yours to change.</Copy>
<Copy k="job.copyButton">Copy message</Copy>
<Copy k="job.copied">Copied</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 65622d2f95e2b77a */}
<Copy k="widget.description.brief">
  Exercise: a fill-in message builder in which the learner writes one message
  asking Claude for a morning brief, to copy into a direct message with
  Claude. The learner sets the days, the time, and the tone. They choose what
  the brief includes, such as channels to watch, what is waiting on them,
  decisions made in other channels, draft replies, next steps, channels to
  leave out, and skipping the brief when nothing needs attention. They also
  set the format: its shape, its order, where details go, and how urgent items
  are marked. It teaches that a request for a brief should say when it
  arrives, what to watch, and what to bring back.
</Copy>
<Copy k="widget.description.fetch">
  Exercise: a fill-in message builder for the practice step in which the
  learner has Claude fetch one real record from a tool connected to the
  channel. The learner picks the tool, such as a CRM, a ticketing tool, a data
  warehouse, a project tracker, or a drive. They pick what to pull from it and
  fill in the account, project, document, or other detail it applies to. The
  finished message also asks Claude to link each item to where it lives, and
  the learner copies it into the channel. It teaches that a request should
  name the tool and what to pull, and ask for links so the result can be
  checked against the source.
</Copy>
<Copy k="widget.description.job">
  Exercise: the learner builds a message handing Claude a standing job in a
  channel and asking Claude to remember it in the channel's notes. The learner
  picks the job, such as triaging requests, watching alerts, a first pass on
  vendor submissions, or running a launch checklist. Each job sets what Claude
  checks on every request, alert, submission, or release, and where it records
  the result. They also pick who Claude tags on each one (whoever is on the
  rotation, the team lead, or the owner the routing rules name), what Claude
  does when unsure (ask one clarifying question, then tag, or just tag), and
  who it tags in that case. It teaches how to hand Claude an ongoing
  responsibility.
</Copy>
<Copy k="widget.summary.brief">
  Exercise: the learner builds one message asking Claude for a morning brief,
  choosing the days, time, tone, contents, and format, then copies it into a
  DM. It teaches saying when the brief arrives, what to watch, and what to
  bring back.
</Copy>
<Copy k="widget.summary.fetch">
  Exercise: the learner builds a message asking Claude to pull one real record
  from a tool connected to the channel and link each item to its source. It
  teaches asking for links so the result can be checked.
</Copy>
<Copy k="widget.summary.job">
  Exercise: the learner builds a message handing Claude a standing job in a
  channel, choosing the job, who Claude tags on each item it handles, and what
  it does and who it tags when unsure. It teaches how to phrase an ongoing
  responsibility.
</Copy>
`;export{e as default};