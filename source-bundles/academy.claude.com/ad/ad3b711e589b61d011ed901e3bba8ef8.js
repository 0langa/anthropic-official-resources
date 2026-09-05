var e=`---
kind: widget-copy
---

{/* Film for the “Draft the incident postmortem” use case. \`line.*\` are the
    one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Draft the incident postmortem</Copy>
<Copy k="sub">The incident is over and you need to write the postmortem.</Copy>

<Copy k="line.ask">
  Using the Engineering plugin’s [[incident response skill]], ask for a
  timestamped sequence and owned action items.
</Copy>
<Copy k="line.does">
  Claude reads the channel, the alert timeline and your template.
</Copy>
<Copy k="line.question">
  When something is yours to decide, Claude stops and asks.
</Copy>
<Copy k="line.get">
  Claude says what it rebuilt and gives you the [[postmortem]] and a draft
  note.
</Copy>
<Copy k="line.note1">
  Every timeline entry comes from a message or an alert.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">message or an alert</Copy>
<Copy k="line.note2">Every action item already has an owner and a date.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">an owner</Copy>
<Copy k="line.again">
  You approve the channel note first, and can schedule a first draft after
  every incident.
</Copy>
<Copy k="line.close">
  The postmortem is written from what actually happened, ready to review.
</Copy>

<Copy k="attachment1.title">2026-04-22 checkout 5xx</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">postmortem-template.md</Copy>
<Copy k="attachment2.sub">Team template</Copy>
<Copy k="attachment2.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  From #inc-2026-04-22-checkout-5xx and the PagerDuty timeline, [[reconstruct
  what happened with timestamps]], then draft the postmortem in our template:
  impact, root cause, contributing factors, and [[action items with an owner
  on each]]. Be blameless. Draft [[a channel note]] linking it.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">#inc-2026-04-22-checkout-5xx</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">Incident #48213 timeline</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">postmortem-template.md</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">error-rate-graph.png</Copy>

<Copy k="verb1">Reading #inc-2026-04-22-checkout-5xx</Copy>
<Copy k="verb2">Reading the incident timeline</Copy>
<Copy k="verb3">Reading postmortem-template.md</Copy>
<Copy k="verb4">Reading error-rate-graph.png</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Rebuilding the timeline</Copy>
<Copy k="verb7">Writing the postmortem</Copy>

<Copy k="question.title">
  When did the incident start: first errors or the alert?
</Copy>
<Copy k="question.option1">14:04, first errors on the graph</Copy>
<Copy k="question.option2">14:07, when the alert fired</Copy>
<Copy k="question.answer">14:04, from the first errors.</Copy>

<Copy k="reply.did1">rebuilt the incident from the channel</Copy>
<Copy k="reply.did2">an owner and a date</Copy>
<Copy k="reply.did3">Two numbers I am unsure of</Copy>
<Copy k="reply.did4">waits for your approval</Copy>
<Copy k="reply.text">
  I rebuilt the incident from the channel and the PagerDuty timeline as 13
  timestamped entries, counted impact from 14:04, and gave all five action
  items an owner and a date. Two numbers I am unsure of are under Open
  questions, and the channel note waits for your approval.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Spreadsheet</Copy>

<Copy k="approval.tool">Send message draft</Copy>
<Copy k="approval.button1">Allow once</Copy>
<Copy k="approval.button2">Always allow</Copy>
<Copy k="approval.button3">Deny</Copy>
<Copy k="approval.granted">Draft saved in Slack for you to send</Copy>

<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Postmortem first draft</Copy>
<Copy k="again.card.cadence">Weekdays at 6:00 PM</Copy>
<Copy k="again.out1">Drafts a postmortem for each resolved incident</Copy>
<Copy k="again.out2">Saves it to the incident folder</Copy>
<Copy k="again.out2.em">for review</Copy>
`;export{e as default};