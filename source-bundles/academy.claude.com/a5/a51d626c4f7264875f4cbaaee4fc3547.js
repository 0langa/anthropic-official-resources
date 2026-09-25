var e=`---
kind: widget-copy
---

{/* Learner-facing copy for RedirectRunning.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. \`@Claude\` is the literal mention
    typed in Slack and must survive verbatim too. */}

<Copy k="task">
  Claude is partway through the prep and you would rather get it as a linked
  doc than a long message. Pick where you would tell it.
</Copy>
<Copy k="channel">#call-prep</Copy>

<Copy k="request">
  prep me for the Acme renewal call at 2pm: open items, the last three calls,
  and support history. Post it in this thread.
</Copy>
<Copy k="requestEdited">
  prep me for the Acme renewal call at 2pm: open items, the last three calls,
  and support history. Post it here as a linked doc.
</Copy>
<Copy k="threadReply">
  Actually, put it in a doc and link it here instead of posting a long
  message.
</Copy>
<Copy k="threadAck">Got it, moving it into a doc. I’ll link it here when it’s ready.</Copy>
<Copy k="threadDone">
  Here’s the prep as a doc. Open items first, then the last three calls and
  support history.
</Copy>
<Copy k="docTitle">Acme renewal prep, 2pm</Copy>
<Copy k="topMsg">make that a doc instead.</Copy>
<Copy k="topReply">
  That prep is running in its own thread above, and this message didn’t reach
  it. I can pass the note along, but replying in that thread is the sure way
  to change it. I’ve left the prep as is.
</Copy>

<Copy k="check.pulled">Pulled open items from the CRM</Copy>
<Copy k="check.summarized">Summarized the last three calls</Copy>
<Copy k="check.adding">Adding support history</Copy>
<Copy k="check.doc">Put the prep in a doc and link it here</Copy>
<Copy k="check.thread">Post the prep in this thread</Copy>

<Copy k="placesAria">Where would you tell Claude?</Copy>
<Copy k="place.thread.label">Reply in the task’s thread</Copy>
<Copy k="place.thread.hint">under Claude’s checklist</Copy>
<Copy k="place.edit.label">Edit your original message</Copy>
<Copy k="place.edit.hint">change “in this thread” to “as a linked doc”</Copy>
<Copy k="place.top.label">Post a new message in the channel</Copy>
<Copy k="place.top.hint">@Claude make that a doc instead</Copy>

<Copy k="verdictYes">Yes.</Copy>
<Copy k="verdictNo">Not quite.</Copy>
<Copy k="verdict.thread">
  You replied in the task’s thread, no @mention needed. Claude read it while
  working and moved the prep to a doc. A colleague’s reply there works the
  same way.
</Copy>
<Copy k="verdict.edit">
  Claude can see the edit, but a task that is already running keeps working
  from the version it read. Reply in the thread to change it.
</Copy>
<Copy k="verdict.top">
  A new channel message goes to Claude separately from the thread already
  doing the prep, so the prep kept running unchanged. Claude may pass the
  note along, but replying in that thread is the reliable way to change work
  in progress.
</Copy>

<Copy k="again">Try another place</Copy>
<Copy k="close">To change a running task, reply in its thread. Anyone in the channel can.</Copy>

<Copy k="avatar.you">Y</Copy>
<Copy k="name.you">You</Copy>
<Copy k="name.claude">Claude</Copy>
<Copy k="edited">· edited</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: ed67ff24e77349f3 */}
<Copy k="widget.description">
  Exercise: the learner has asked Claude, in a channel, to prepare for a call,
  and Claude is partway through, with a checklist of finished and in-progress
  steps in the thread. The learner wants the result as a linked document
  instead, and picks one of three ways to say so: reply in the task's thread,
  edit the original request, or post a new message in the channel. Each choice
  shows what happens to the running task. It teaches that a running task keeps
  working from the request it read, so to change it, reply in its thread,
  which anyone in the channel can do.
</Copy>
<Copy k="widget.summary">
  Exercise: in a mock Slack channel, Claude is partway through a task and
  shows its checklist in the thread. The learner picks one of three ways to
  change the request, then sees whether that choice reaches the running task.
</Copy>
`;export{e as default};