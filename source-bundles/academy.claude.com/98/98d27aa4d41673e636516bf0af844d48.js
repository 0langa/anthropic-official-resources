var e=`---
kind: widget-copy
---

{/* Film for the “Prep the vendor negotiation” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Prep the vendor negotiation</Copy>
<Copy k="sub">
  A vendor’s renewal proposal is in and you need to prepare the negotiation.
</Copy>

<Copy k="line.ask">
  With the Operations plugin’s [[vendor review skill]], compare both contracts
  and ask what to push for.
</Copy>
<Copy k="line.does">
  Claude reads both contract versions, the team’s channel, your usage and the
  competing quotes.
</Copy>
<Copy k="line.question">
  Claude asks you first wherever your judgment is needed.
</Copy>
<Copy k="line.get">
  Claude tells you what changed, then gives you the [[redline and the brief]].
</Copy>
<Copy k="line.note1">Every changed term has your position beside it.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">changed term</Copy>
<Copy k="line.note1.at2">your position</Copy>
<Copy k="line.note2">The brief ends with the walk-away you confirmed.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">walk-away</Copy>
<Copy k="line.again">
  You can schedule a weekly check so each upcoming renewal gets its brief
  early.
</Copy>
<Copy k="line.close">
  You go into the negotiation knowing what to ask for and when to walk away.
</Copy>

<Copy k="attachment1.title">Procurement / Northwind-renewal-2026</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">Northwind-MSA-2024-signed.pdf</Copy>
<Copy k="attachment2.sub">Signed terms</Copy>
<Copy k="attachment2.tag">PDF</Copy>
<Copy k="attachment3.title">usage-and-comparables.xlsx</Copy>
<Copy k="attachment3.sub">Usage, invoices, quotes</Copy>
<Copy k="attachment3.tag">XLSX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Compare the signed agreement to the renewal proposal and list every material
  change as a redline table: [[clause, current, proposed, our position]]. Then
  write [[a one-page negotiation brief]]: our leverage, their likely pushback,
  three asks ranked by value, and [[the walk-away line]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">Northwind-MSA-2024-signed.pdf</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">#vendor-northwind, 38 messages since May</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">Northwind-renewal-proposal-2026.pdf</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">usage-and-comparables.xlsx</Copy>
<Copy k="source5.verb">Checked</Copy>
<Copy k="source5.text">IT contracts register: notice due 1 Oct</Copy>
<Copy k="source6.verb">Checked</Copy>
<Copy k="source6.text">signed terms against the proposal</Copy>

<Copy k="verb1">Reading the signed agreement</Copy>
<Copy k="verb2">Reading #vendor-northwind</Copy>
<Copy k="verb3">Reading the renewal proposal</Copy>
<Copy k="verb4">Reading usage, invoices and quotes</Copy>
<Copy k="verb5">Checking the contracts register</Copy>
<Copy k="verb6">Comparing signed terms to the proposal</Copy>
<Copy k="verb7">Waiting for you</Copy>
<Copy k="verb8">Writing the redline table</Copy>
<Copy k="verb9">Writing the brief</Copy>

<Copy k="question.title">Could you actually switch to Contoso this year?</Copy>
<Copy k="question.option1">Realistic, the move is already scoped</Copy>
<Copy k="question.option2">No, it is only for leverage</Copy>
<Copy k="question.answer">Realistic; the migration is already scoped.</Copy>

<Copy k="reply.did1">compared the renewal proposal</Copy>
<Copy k="reply.did2">ten terms change</Copy>
<Copy k="reply.did3">The brief ranks three asks</Copy>
<Copy k="reply.did4">as you confirmed</Copy>
<Copy k="reply.text">
  I compared the renewal proposal to the signed agreement and your usage: ten
  terms change, year one goes from $252,000 to $315,000, and 42 of 250 seats
  sat idle. The brief ranks three asks worth $86,640 a year and sets the
  walk-away at $90 a seat, with the Contoso switch as the real alternative, as
  you confirmed.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: check the contracts register for renewals in the next 60
  days and write the redline and brief to each vendor’s folder.
</Copy>
<Copy k="again.bubble.when">every Monday</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Renewal negotiation briefs</Copy>
<Copy k="again.card.cadence">Mondays at 9:00 AM</Copy>
<Copy k="again.out1">Checks the register for renewals in the next 60 days</Copy>
<Copy k="again.out2">
  Writes the redline table and the brief to that vendor’s folder
</Copy>
<Copy k="again.out3">Sends nothing to the vendor</Copy>
<Copy k="again.out3.em">you run the call</Copy>
`;export{e as default};