var e=`---
kind: widget-copy
---

{/* Film for the “Track account health” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Track account health</Copy>
<Copy k="sub">You need to know how healthy a customer account really is.</Copy>

<Copy k="line.ask">
  Using the Sales plugin’s [[pipeline review skill]], name your sources and
  ask for a health rating.
</Copy>
<Copy k="line.does">
  Claude reads the account and its tickets, then checks usage and scores
  against the plan.
</Copy>
<Copy k="line.question">
  Claude checks with you before it decides anything that is your call.
</Copy>
<Copy k="line.get">
  Claude tells you what it weighed, then gives you the [[health summary]].
</Copy>
<Copy k="line.note1">
  You see each signal beside the goal agreed with the customer.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">each signal</Copy>
<Copy k="line.note1.at2">the goal</Copy>
<Copy k="line.note2">
  Claude keeps the actions to two, each tied to a signal.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">to two</Copy>
<Copy k="line.again">
  Schedule it weekly across your book, and red accounts come first in one
  digest.
</Copy>
<Copy k="line.close">
  You can see how an account is really doing before it surprises you.
</Copy>

<Copy k="attachment1.title">Accounts / Northwind Foods / health</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">success-plan.docx</Copy>
<Copy k="attachment2.sub">Three goals and dates</Copy>
<Copy k="attachment2.tag">DOCX</Copy>
<Copy k="attachment3.title">health-summary-example.docx</Copy>
<Copy k="attachment3.sub">Format to match</Copy>
<Copy k="attachment3.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  From the usage data, Zendesk tickets, NPS responses, and success plan for
  Northwind, write the account health summary: call it [[red, yellow, or green
  with the reason]] in one or two sentences, then the [[two actions to take
  this week]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">
  Northwind Foods: contract, renewal, last exec touch
</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">3 open tickets for Northwind Foods</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">usage-export-aug.csv, weekly active seats</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">NPS responses, Q3, the Northwind rows</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">success-plan.docx, three goals and dates</Copy>

<Copy k="verb1">Reading the account in Salesforce</Copy>
<Copy k="verb2">Reading open Zendesk tickets</Copy>
<Copy k="verb3">Reading the usage export</Copy>
<Copy k="verb4">Reading NPS responses</Copy>
<Copy k="verb5">Reading the success plan</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Writing the health summary</Copy>

<Copy k="question.title">Should I rate Northwind Foods yellow, or red?</Copy>
<Copy k="question.option1">Yellow, needs watching</Copy>
<Copy k="question.option2">Red, at risk</Copy>
<Copy k="question.answer">Yellow, it needs watching.</Copy>

<Copy k="reply.did1">weighed usage, three open tickets</Copy>
<Copy k="reply.did2">called it yellow, as you confirmed</Copy>
<Copy k="reply.did3">against a 60% goal</Copy>
<Copy k="reply.did4">this week’s two actions</Copy>
<Copy k="reply.text">
  I weighed usage, three open tickets, NPS and the success plan for Northwind
  Foods and called it yellow, as you confirmed: seats fell from 68% to 58%
  against a 60% goal. Two SSO tickets block the 15 September milestone, and
  this week’s two actions are in the summary.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when} for each account in my book with /pipeline-review, write the
  summary to each account’s health folder, and put the red accounts first in
  one digest.
</Copy>
<Copy k="again.bubble.when">every Monday at 7am</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Weekly account health</Copy>
<Copy k="again.card.cadence">Mondays at 7:00 AM</Copy>
<Copy k="again.out1">Runs /pipeline-review for each account in your book</Copy>
<Copy k="again.out2">Writes the summary to each account’s health folder</Copy>
<Copy k="again.out3">Puts red accounts first in one digest</Copy>
<Copy k="again.out3.em">for you to confirm</Copy>
`;export{e as default};