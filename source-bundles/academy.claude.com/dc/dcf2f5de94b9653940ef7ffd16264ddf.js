var e=`---
kind: widget-copy
---

{/* Learner-facing copy for RoutineParts.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The simulated ticket ids
    (#4821, …) live in the widget as data. */}

<Copy k="h1">Set up a scheduled job</Copy>
<Copy k="lead1">
  Sam wrote this to set up a morning post for the team. Claude can fill gaps
  on its own, but a few things are worth spelling out so the job runs the
  team’s way rather than Claude’s best guess. Which of these does the message
  tell Claude, and which does it leave to Claude?
</Copy>
<Copy k="check">Check</Copy>
<Copy k="h2">Adjust a scheduled job that’s already running</Copy>
<Copy k="lead2">
  After a week, the team wants the post to leave out items that are waiting on
  someone outside the team. What do you do?
</Copy>

<Copy k="name.sam">Sam</Copy>
<Copy k="name.sam.letter">S</Copy>
<Copy k="name.claude">Claude</Copy>
<Copy k="name.you">You</Copy>
<Copy k="name.you.letter">Y</Copy>

{/* Sam's message. \`msg.base\` is the message as written (before Check);
    \`msg.checked\` is the same sentence with the two missing parts written in,
    where each {token} is a highlighted clause (msg.checked.<token> below) —
    keep the two in step, and reorder clauses and separators freely per
    language. */}
<Copy k="msg.base">
  every weekday at 8am, check the ticket queue and the on-call schedule, and
  post who should pick up what’s overdue, with links.
</Copy>
<Copy k="msg.checked">
  {when}, {where}, and {post} what’s overdue {decide}{links}. {quiet}
</Copy>
<Copy k="msg.checked.when">every weekday at 8am</Copy>
<Copy k="msg.checked.where">
  check the ticket queue and the on-call schedule
</Copy>
<Copy k="msg.checked.post">post who should pick up</Copy>
<Copy k="msg.checked.decide">
  (anything open more than two days, or urgent from overnight)
</Copy>
<Copy k="msg.checked.links">, with links</Copy>
<Copy k="msg.checked.quiet">If nothing qualifies, post nothing.</Copy>

{/* The five parts of a scheduled-job request. */}
<Copy k="part.when.label">Tell Claude when to run it</Copy>
<Copy k="part.when.note">
  “Every weekday at 8am.” A day and a time put the post where the team’s
  morning starts.
</Copy>
<Copy k="part.where.label">Tell Claude where to look</Copy>
<Copy k="part.where.note">
  The ticket queue and the on-call schedule. Claude could find them, but
  naming them saves a guess in a channel with several tools connected.
</Copy>
<Copy k="part.decide.label">Tell Claude how to decide what counts</Copy>
<Copy k="part.decide.note">
  “What’s overdue” leaves the threshold to Claude. The team has one (open more
  than two days, or urgent from overnight); giving it means the post matches
  how the team already triages.
</Copy>
<Copy k="part.post.label">Tell Claude what to post</Copy>
<Copy k="part.post.note">
  Who should pick up what, with links: a shape the team can act on without
  opening anything.
</Copy>
<Copy k="part.quiet.label">Tell Claude what to do in the edge cases</Copy>
<Copy k="part.quiet.note">
  Some mornings there will be nothing to report, or the ticket queue won’t
  load, or there will be forty items instead of four. If the message doesn’t
  say what to do then, Claude picks something reasonable, which may not be
  what the team wants. You can add these to the request up front, or as you
  notice them.
</Copy>

<Copy k="toggle.included">Included</Copy>
<Copy k="toggle.notIncluded">Not included</Copy>
<Copy k="marked.included">You marked it included.</Copy>
<Copy k="marked.notIncluded">You marked it not included.</Copy>
<Copy k="answer.included">Included.</Copy>
<Copy k="answer.notIncluded">Not included; added now.</Copy>

<Copy k="result.all">Your answers match ours on all five.</Copy>
<Copy k="result.some">Your answers match ours on {score} of 5.</Copy>
<Copy k="result.look">
  Look at Sam’s message again: each part is underlined in the color of its
  card, and the two parts that were missing have been written in with a dashed
  underline. With those added, Claude’s first post would look like this:
</Copy>

{/* Claude's first post. In each ticket line, {id} is the simulated ticket
    number the widget fills in; the styled fragments are the sub-keys. */}
<Copy k="post.channel">#support-escalations</Copy>
<Copy k="post.time">Tue 8:00 AM</Copy>
<Copy k="post.intro">Three tickets to pick up this morning:</Copy>
<Copy k="post.ticket1">
  {id} Northwind SSO login loop · {meta} → {owner} {note}
</Copy>
<Copy k="post.ticket1.meta">P1, opened overnight</Copy>
<Copy k="post.ticket1.owner">Priya</Copy>
<Copy k="post.ticket1.note">(on call today)</Copy>
<Copy k="post.ticket2">{id} Acme export times out · {meta} → {owner}</Copy>
<Copy k="post.ticket2.meta">open 52h</Copy>
<Copy k="post.ticket2.owner">Marcus</Copy>
<Copy k="post.ticket3">
  {id} Halden invoice mismatch · {meta} → {owner} {note}
</Copy>
<Copy k="post.ticket3.meta">open 49h</Copy>
<Copy k="post.ticket3.owner">Dana</Copy>
<Copy k="post.ticket3.note">(Marcus already has five open)</Copy>
<Copy k="post.foot">
  Checked 14 open tickets against today’s on-call schedule. Nothing else is
  over two days.
</Copy>

{/* Adjusting the running job. */}
<Copy k="adjust.second.label">
  Set up a second scheduled job that has the new rule
</Copy>
<Copy k="adjust.second.why">
  Now two jobs post each morning, and the old one still includes those items.
</Copy>
<Copy k="adjust.thread.label">
  Reply in the job’s thread with the change you want
</Copy>
<Copy k="adjust.thread.why">
  The job keeps its schedule and follows the change from the next run. Anyone
  in the channel can do this.
</Copy>
<Copy k="adjust.source.label">
  Change the source data so those items stop appearing
</Copy>
<Copy k="adjust.source.why">
  That hides them from everyone, not just from the post, and Claude’s rule is
  unchanged.
</Copy>
<Copy k="adjust.off.label">
  Turn the job off and ask Claude each morning instead
</Copy>
<Copy k="adjust.off.why">
  That works, and it puts the job back on a person.
</Copy>

<Copy k="opt.yes">Yes.</Copy>
<Copy k="opt.no">Not this.</Copy>

{/* The reply in the job's thread; {mention} is the styled @Claude mention
    the widget renders. */}
<Copy k="thread.context">in the post’s thread ·</Copy>
<Copy k="thread.request">
  {mention} leave out anything that’s waiting on someone outside the team.
</Copy>
<Copy k="thread.reply">
  Updated. From tomorrow I’ll skip those. Anyone in this channel can change or
  stop this job.
</Copy>

<Copy k="startOver">Start over</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 591e9b6d753cb656 */}
<Copy k="widget.description">
  Exercise: the learner reads a sample message someone wrote to set up a
  scheduled routine with Claude, then marks whether each of five parts of a
  well-specified routine is present in that message or left for Claude to
  guess: when to run it, where to look, how to decide what counts, what to
  post, and what to do in edge cases. Checking reveals which parts were
  actually included, adds the missing ones back into the message, and shows
  what Claude's resulting post would look like. A second step presents several
  ways to adjust a routine already running and asks the learner to pick the
  best approach, then shows the effect of that choice. It teaches that a clear
  routine request should spell out timing, sources, decision criteria, output
  format, and edge-case handling, and that routines can be adjusted afterward
  by replying in their thread.
</Copy>
<Copy k="widget.summary">
  Exercise: the learner marks which of five parts, such as when to run and
  what to do in edge cases, a sample scheduled-job request includes, then
  checks. A second step asks how to change a job that is already running.
</Copy>
`;export{e as default};