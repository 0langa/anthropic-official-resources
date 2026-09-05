var e=`---
kind: widget-copy
---

{/* Film for the “Prep for a sales call” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Prep for a sales call</Copy>
<Copy k="sub">
  You have a sales call tomorrow and need to know what to ask.
</Copy>

<Copy k="line.ask">
  Using the Sales plugin’s [[call prep skill]], give Claude the deal and ask
  what to raise.
</Copy>
<Copy k="line.does">
  Claude reads the opportunity first, then the plan you maintain and each
  recent transcript.
</Copy>
<Copy k="line.question">
  Wherever a decision is yours to make, Claude asks instead of guessing.
</Copy>
<Copy k="line.get">
  You get the [[prep sheet]], with what Claude read at the top.
</Copy>
<Copy k="line.note1">
  You see what the buyer keeps raising, and on which call.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">keeps raising</Copy>
<Copy k="line.note2">
  Each likely objection is paired with a response that already worked.
</Copy>
<Copy k="line.again">
  Schedule it each morning, and a sheet is ready for every external meeting
  that day.
</Copy>
<Copy k="line.close">
  You go into the call knowing what to ask for and what to say.
</Copy>

<Copy k="attachment1.title">Accounts / Northwind / calls</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">Northwind - mutual action plan.xlsx</Copy>
<Copy k="attachment2.sub">The plan you maintain</Copy>
<Copy k="attachment2.tag">XLSX</Copy>
<Copy k="attachment3.title">proposal-v2.pdf</Copy>
<Copy k="attachment3.sub">14-depot pricing</Copy>
<Copy k="attachment3.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  I'm meeting Northwind tomorrow. From Salesforce, the last three call
  transcripts, and the mutual action plan, write the prep sheet: where the
  deal is, what they care about, [[two or three asks to make]], and [[likely
  objections with our response]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">Northwind Logistics opportunity and contacts</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">Northwind - mutual action plan.xlsx, 12 milestones</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">Northwind Logistics, last 3 calls</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">proposal-v2.pdf</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">candidate asks and likely objections</Copy>

<Copy k="verb1">Reading the opportunity in Salesforce</Copy>
<Copy k="verb2">Reading the mutual action plan</Copy>
<Copy k="verb3">Reading three call transcripts</Copy>
<Copy k="verb4">Reading proposal-v2.pdf</Copy>
<Copy k="verb5">Drafting asks and objections</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Writing the prep sheet</Copy>

<Copy k="question.title">What do you want to ask for on tomorrow’s call?</Copy>
<Copy k="question.option1">Derek reviews the ROI model</Copy>
<Copy k="question.option2">Confirm the 19 Sep signature date</Copy>
<Copy k="question.option3">Legal returns MSA redlines by Friday</Copy>
<Copy k="question.option4">Priya names the two pilot depots</Copy>
<Copy k="question.answer">
  ROI walkthrough, signature date, redlines by Friday.
</Copy>

<Copy k="reply.did1">the last three transcripts</Copy>
<Copy k="reply.did2">built tomorrow’s sheet around three asks</Copy>
<Copy k="reply.did3">Each objection is paired with what worked</Copy>
<Copy k="reply.did4">confirm the finance-review date early</Copy>
<Copy k="reply.text">
  I read the opportunity, the plan’s 12 milestones, the last three transcripts
  and the proposal, and built tomorrow’s sheet around three asks; five
  milestones are done and the ROI review is overdue. Each objection is paired
  with what worked on the August calls; confirm the finance-review date early.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: for each external meeting on today’s calendar, run
  /call-prep for that account and write the sheet to its calls folder.
</Copy>
<Copy k="again.bubble.when">every weekday at 7:30am</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Morning call prep</Copy>
<Copy k="again.card.cadence">Weekdays at 7:30 AM</Copy>
<Copy k="again.out1">Finds today’s external meetings on your calendar</Copy>
<Copy k="again.out2">Runs /call-prep for each account</Copy>
<Copy k="again.out3">Writes each sheet to that account’s calls folder</Copy>
<Copy k="again.out3.em">for you to review</Copy>
`;export{e as default};