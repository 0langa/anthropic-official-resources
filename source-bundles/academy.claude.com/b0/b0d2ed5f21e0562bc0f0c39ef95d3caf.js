var e=`---
kind: widget-copy
---

{/* Film for the “Log a decision from a thread” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Log a decision from a thread</Copy>
<Copy k="sub">
  A long thread reached a decision, and your team keeps a decision log.
</Copy>

<Copy k="line.ask">
  With the Productivity plugin’s [[task management skill]], paste the thread
  link and ask what was decided.
</Copy>
<Copy k="line.does">
  Claude reads the whole thread and the email chain, then matches your log’s
  format.
</Copy>
<Copy k="line.question">
  Claude reads the whole thread and the email chain, then matches your log’s
  format.
</Copy>
<Copy k="line.get">
  Claude tells you what it recorded, then gives you the [[log entry]].
</Copy>
<Copy k="line.note1">Every next step has an owner and a committed date.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">an owner</Copy>
<Copy k="line.note1.at2">committed date</Copy>
<Copy k="line.note2">
  Anything still undecided is listed with a link to its message.
</Copy>
<Copy k="line.again">
  You approve the thread reply first, and can schedule the same capture for
  each decided thread.
</Copy>
<Copy k="line.close">
  Decisions made in threads end up in one log, linked to the source.
</Copy>

<Copy k="attachment1.title">Marketing Ops / Decisions</Copy>
<Copy k="attachment1.sub">2 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">decision-log.md</Copy>
<Copy k="attachment2.sub">Running log, 31 KB</Copy>
<Copy k="attachment2.tag">MD</Copy>
<Copy k="attachment3.title">Castwell renewal quote 2027.pdf</Copy>
<Copy k="attachment3.sub">Vendor quote</Copy>
<Copy k="attachment3.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  From this thread and the email chain, record [[what was actually decided]],
  [[who owns each next step]] and by when, and what's still open or contested,
  linked to the source messages. Append to decision-log.md; draft [[a thread
  reply]] I can pin.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">the thread in #marketing-ops, 64 replies</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">Re: Venora annual proposal, 9 messages</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">Castwell renewal quote 2027.pdf</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">decision-log.md, to match your entry format</Copy>

<Copy k="verb1">Reading the thread in #marketing-ops</Copy>
<Copy k="verb2">Reading the email chain</Copy>
<Copy k="verb3">Reading the renewal quote</Copy>
<Copy k="verb4">Reading decision-log.md</Copy>
<Copy k="verb5">Writing the entry</Copy>
<Copy k="verb6">Drafting the thread reply</Copy>

<Copy k="reply.did1">read the 64 replies</Copy>
<Copy k="reply.did2">appended today’s entry</Copy>
<Copy k="reply.did3">five next steps with owners and dates</Copy>
<Copy k="reply.did4">three items open</Copy>
<Copy k="reply.text">
  I read the 64 replies, the email chain and the vendor quote, and appended
  today’s entry to decision-log.md: Venora from 1 October, five next steps
  with owners and dates, three items open. The unanswered SSO question is
  flagged, and the thread reply is drafted for you to pin.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="approval.tool">Send message draft</Copy>
<Copy k="approval.button1">Allow once</Copy>
<Copy k="approval.button2">Always allow</Copy>
<Copy k="approval.button3">Deny</Copy>
<Copy k="approval.granted">Draft saved in Slack for you to send and pin</Copy>

<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Decision-log capture</Copy>
<Copy k="again.card.cadence">Weekdays at 5:00 PM</Copy>
<Copy k="again.out1">
  Checks #marketing-ops and #leadership for threads marked decided since the
  last run
</Copy>
<Copy k="again.out2">Appends an entry per thread to decision-log.md</Copy>
<Copy k="again.out2.em">for you to review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: d18c7c22dde3c626 */}
<Copy k="widget.description">
  Film: a self-playing demonstration of using Claude's task-management skill
  to turn a long Slack thread and related email chain into a decision-log
  entry. The user pastes a thread link and asks what was decided; Claude reads
  the thread, the email chain, and a vendor document, then matches the format
  of an existing log file. Claude reports what it found and produces a log
  entry stating the decision, listing each next step with a named owner and
  committed date, and flagging unresolved questions with links back to their
  source messages. The user approves a drafted reply before it's posted, and
  the film shows this capture can be scheduled to run automatically for future
  decided threads. It teaches that thread discussions can be distilled into a
  structured, sourced, recurring record.
</Copy>
<Copy k="widget.summary">
  Film: a self-playing demonstration where the user asks Claude to turn a long
  Slack thread and email chain into a decision-log entry, with owners, dates,
  and open questions linked to sources. It teaches that thread discussions can
  become a structured, sourced, recurring record.
</Copy>
`;export{e as default};