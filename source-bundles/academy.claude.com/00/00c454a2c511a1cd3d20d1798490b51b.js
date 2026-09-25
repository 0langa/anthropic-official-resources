var e=`---
kind: widget-copy
---

{/* Film for the “Explain an outage to customers” use case. \`line.*\` are the
    one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Explain an outage to customers</Copy>
<Copy k="sub">
  After an outage, your customers need a clear account of what happened.
</Copy>

<Copy k="line.ask">
  Ask the [[status report skill]] for a review written for customers, with the
  impact counted.
</Copy>
<Copy k="line.does">
  Claude reads the incident channel, the tickets opened during the outage and
  the recent deploys.
</Copy>
<Copy k="line.question">
  Claude checks with you before it decides anything that is your call.
</Copy>
<Copy k="line.get">
  Claude tells you what it counted, then gives you the [[review and sheet]].
</Copy>
<Copy k="line.note1">
  Affected accounts and duration are counted from the record.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">counted</Copy>
<Copy k="line.note2">
  Claude keeps internal detail apart from what the customer reads.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">internal detail</Copy>
<Copy k="line.again">
  On a weekday schedule, Claude drafts the review for each war room closed the
  day before.
</Copy>
<Copy k="line.close">
  Customers get a clear account of the outage, drafted from the tickets.
</Copy>

<Copy k="attachment1.title">Support / Incidents / INC-4417</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">customer-postmortem-template.md</Copy>
<Copy k="attachment2.sub">Team template</Copy>
<Copy k="attachment2.tag">MD</Copy>
<Copy k="attachment3.title">tickets-2026-04-24.csv</Copy>
<Copy k="attachment3.sub">Ticket export</Copy>
<Copy k="attachment3.tag">CSV</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Draft the [[customer-facing incident review]] for INC-4417 from #inc-4417,
  tickets in the impact window and the last day's deploys. [[Quantify
  customers impacted and for how long]], quote them directly, and use our
  template with remediation owners.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">#inc-4417-export-failures</Copy>
<Copy k="source2.verb">Searched</Copy>
<Copy k="source2.text">tickets tagged inc_4417</Copy>
<Copy k="source3.verb">Listed</Copy>
<Copy k="source3.text">export-service deploys since Thursday</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">customer-postmortem-template.md</Copy>

<Copy k="verb1">Reading #inc-4417-export-failures</Copy>
<Copy k="verb2">Searching tickets tagged inc_4417</Copy>
<Copy k="verb3">Listing export-service deploys</Copy>
<Copy k="verb4">Reading the template</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Counting affected accounts</Copy>
<Copy k="verb7">Writing the customer review</Copy>

<Copy k="question.title">
  How much should customers be told about the cause?
</Copy>
<Copy k="question.option1">Plain cause, no internal detail</Copy>
<Copy k="question.option2">Impact and fix only, no cause</Copy>
<Copy k="question.answer">
  State the cause plainly, without internal detail.
</Copy>

<Copy k="reply.did1">drafted the customer review</Copy>
<Copy k="reply.did2">in your template</Copy>
<Copy k="reply.did3">worded plainly, as you chose</Copy>
<Copy k="reply.did4">sit in an internal appendix</Copy>
<Copy k="reply.text">
  I read #inc-4417-export-failures, the 38 tickets tagged inc_4417 and the
  day’s deploys, and drafted the customer review in your template: 212
  accounts had failed exports for 96 minutes. The cause is worded plainly, as
  you chose, and the customer quotes sit in an internal appendix to delete
  before sending.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Spreadsheet</Copy>

<Copy k="again.bubble">
  Run this {when}: for each #inc- channel marked resolved in the last 24
  hours, run /incident-review and write the customer-facing draft to that
  incident’s folder.
</Copy>
<Copy k="again.bubble.when">every weekday at 9am</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Customer incident-review draft</Copy>
<Copy k="again.card.cadence">Weekdays at 9:00 AM</Copy>
<Copy k="again.out1">
  Checks for incident channels resolved in the last day
</Copy>
<Copy k="again.out2">Runs /incident-review on each</Copy>
<Copy k="again.out3">Writes the customer draft to that incident’s folder</Copy>
<Copy k="again.out3.em">for you to edit and send</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: f94f7a0fd6421411 */}
<Copy k="widget.description">
  Film: a walkthrough of using Claude Cowork to draft a customer-facing
  incident postmortem after an outage. The user asks a status-report skill to
  write a review with impact counted, pointing Claude to the incident's chat
  channel, the support tickets opened during the outage, and recent code
  deploys. Claude reads these sources, asks the user how much detail about the
  cause customers should see, then produces a draft review plus a spreadsheet
  of affected accounts, separating customer-facing wording from internal
  details like direct quotes and suspect changes. It closes by showing how
  this drafting can run automatically on a schedule whenever an incident
  channel is marked resolved. It teaches how Claude can reconstruct a
  timeline, quantify impact, and separate internal versus external information
  when writing incident communications.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to draft a customer-facing incident postmortem
  from a chat channel, support tickets, and recent deploys. Claude asks how
  much cause detail to share, then writes a review separating customer-facing
  wording from internal detail.
</Copy>
`;export{e as default};