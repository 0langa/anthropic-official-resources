var e=`---
kind: widget-copy
---

{/* Learner-facing copy for MessageAnatomy.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim: {channel} is the #channel name,
    {tag} the @Claude mention the widget draws, {eyes} the 👀 reaction,
    {time} a clock time, {link} the linked phrase of the follow-up caption
    (its text is the \`.link\` sub-key). Person names (Dana, Sam) are
    simulated data: keep them as they are. The \`caption.*\` texts also set
    how long each beat holds on screen, so keep them caption-short. */}

<Copy k="stageAlt">
  A discussion in {channel} that Claude has already read: the vendor moved
  the SSO cutover and QA now runs into launch week. Your message tagging
  Claude
  hands it the whole job: rework the launch plan around the new date, update
  the QA tickets in the tracker, and post the new plan with who is affected.
  Claude's eyes reaction shows it has started. It replies in the thread,
  which everyone in the channel sees, and posts its plan, which it updates
  as it works: read the plan and this channel's threads, shift the dependent
  milestones, update the QA tickets in the tracker, post the new plan. The
  result is a document attached in the thread and six updated tickets. Your
  follow-up reply in the same thread changes course (keep Support's original
  date), and Claude updates the plan and the ticket without a new tag.
</Copy>

<Copy k="caption.context">Context Claude has already read</Copy>
<Copy k="caption.you">One message hands it the whole job</Copy>
<Copy k="caption.eyes">{eyes} means Claude has started</Copy>
<Copy k="caption.reply">Replies in the thread; everyone here sees it</Copy>
<Copy k="caption.plan">Its plan, which it updates as it works</Copy>
<Copy k="caption.result">The result: a document and the updated tickets</Copy>
<Copy k="caption.followUp">{link} to add context or change course</Copy>
<Copy k="caption.followUp.link">Reply in the thread</Copy>

<Copy k="msg.dana">Vendor pushed the SSO cutover to the 18th.</Copy>
<Copy k="msg.sam">
  That puts QA into launch week. The plan, the tickets and the status page
  all need to move.
</Copy>

<Copy k="you.text">
  {tag} rework the launch plan around the new SSO date: shift every
  milestone that depends on it, update the QA tickets in the tracker, and
  post the new plan here with who is affected.
</Copy>

<Copy k="planSr">Plan, updated as it works.</Copy>
<Copy k="plan.1">Read the launch plan and this channel’s threads</Copy>
<Copy k="plan.2">Shift the four milestones that depend on SSO</Copy>
<Copy k="plan.3">Update the QA tickets in the tracker</Copy>
<Copy k="plan.4">Post the new plan here</Copy>
<Copy k="todosAsOf">todos as of {time}</Copy>

<Copy k="msg.result">
  New plan attached. Four milestones move; launch holds on the 25th if QA
  starts the 19th. Six QA tickets updated with the new dates. Docs and
  Support are affected: their reviews now overlap, flagged in the plan.
</Copy>
<Copy k="output.plan.title">Launch plan, SSO on the 18th</Copy>
<Copy k="output.plan.meta">in this thread</Copy>
<Copy k="output.tickets.title">6 QA tickets updated</Copy>
<Copy k="output.tickets.meta">Tracker · linked to this thread</Copy>

<Copy k="you.followUp">
  Support confirmed they can hold their original date. Keep theirs.
</Copy>
<Copy k="msg.ack">
  Done. Support stays on the 20th; the plan and their ticket are updated.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: e61137dd06ff2056 */}
<Copy k="widget.description">
  Film: an animated mock of a Slack-style channel shows a team discussing a
  schedule problem that affects a launch. The user tags Claude once with a
  single message describing the whole job: rework the plan around a changed
  date, update related tracker tickets, and post the new plan naming who's
  affected. Claude reacts to show it has started, replies in the thread where
  everyone can see, and posts a plan that updates live as it works through the
  steps. It finishes by posting a result document and the updated tickets. The
  user then replies in the same thread to adjust course, and Claude picks up
  the change without needing to be tagged again. It illustrates that one
  message can hand Claude a multi-step job, its work is visible to the whole
  channel, and steering happens through ordinary thread replies.
</Copy>
<Copy k="widget.summary">
  Film: an animated Slack-style channel shows the user tagging Claude once
  with a multi-step job; Claude reacts, replies in the thread, posts a
  live-updating plan, then a result, and picks up a follow-up reply without a
  new tag.
</Copy>
`;export{e as default};