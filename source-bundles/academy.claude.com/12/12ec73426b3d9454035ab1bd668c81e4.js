var e=`---
kind: widget-copy
---

{/* Film for the “Review your law firms’ invoices” use case. \`line.*\` are the
    one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Review your law firms’ invoices</Copy>
<Copy k="sub">
  Your law firms’ invoices are in and you need to review them.
</Copy>

<Copy k="line.ask">
  Ask Claude to check the invoices against your guidelines and give the
  [[reason behind each variance]].
</Copy>
<Copy k="line.does">
  Claude reads your guidelines and budgets first, then every invoice line the
  firm billed.
</Copy>
<Copy k="line.question">
  Claude asks you first wherever your judgment is needed.
</Copy>
<Copy k="line.get">
  Claude says what it found and gives you the [[variance table]] and talking
  points.
</Copy>
<Copy k="line.note1">Each line over budget shows the work that drove it.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">over budget</Copy>
<Copy k="line.note1.at2">work that drove</Copy>
<Copy k="line.note2">
  Every talking point names your rule and the entry behind it.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">your rule</Copy>
<Copy k="line.note2.at2">entry behind</Copy>
<Copy k="line.again">
  You can schedule the same review each month for every firm on your panel.
</Copy>
<Copy k="line.close">
  You know which invoices to question and exactly what to say.
</Copy>

<Copy k="attachment1.title">Legal-Ops / OC-Review-Q2</Copy>
<Copy k="attachment1.sub">Guidelines and budgets</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">outside-counsel-billing-guidelines.pdf</Copy>
<Copy k="attachment2.sub">14 rules</Copy>
<Copy k="attachment2.tag">PDF</Copy>
<Copy k="attachment3.title">matter-budgets-FY26.xlsx</Copy>
<Copy k="attachment3.sub">11 open matters</Copy>
<Copy k="attachment3.tag">XLSX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Review Hargreave & Lyle's Q2 invoices from the connected matter system. Flag
  entries that are [[off-pattern against our billing guidelines]], list every
  matter drifting against budget with [[the variance and driver]], and draft
  [[talking points]] for the partner call. Flag anything you're unsure of.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">outside-counsel-billing-guidelines.pdf, 14 rules</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">matter-budgets-FY26.xlsx, 11 open matters</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">Matter system: 14 invoices, 1,137 entries</Copy>
<Copy k="source4.verb">Checked</Copy>
<Copy k="source4.text">each entry against your rules and budgets</Copy>

<Copy k="verb1">Reading your billing guidelines</Copy>
<Copy k="verb2">Reading matter budgets</Copy>
<Copy k="verb3">Reading 14 invoices</Copy>
<Copy k="verb4">Checking 1,137 entries against 14 rules</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Comparing billed to budget per matter</Copy>
<Copy k="verb7">Writing the review and talking points</Copy>

<Copy k="question.title">How far over budget before I flag a matter?</Copy>
<Copy k="question.option1">Ten percent over, actual or forecast</Copy>
<Copy k="question.option2">Any amount over budget</Copy>
<Copy k="question.answer">Ten percent or more, actual or forecast.</Copy>

<Copy k="reply.did1">checked the 14 Q2 invoices</Copy>
<Copy k="reply.did2">against your 14 rules and each budget</Copy>
<Copy k="reply.did3">Each has the work that drove it</Copy>
<Copy k="reply.did4">listed separately</Copy>
<Copy k="reply.text">
  I checked the 14 Q2 invoices, 1,137 entries across 11 matters, against your
  14 rules and each budget: 26 entries worth $48,310 break a guideline, and
  three matters run ten percent over. Each has the work that drove it, and
  four entries I was unsure about are listed separately.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="again.bubble">
  Run this on the {when} for every firm on the panel: last month’s invoices
  against our guidelines and budgets, with the variance table and talking
  points in that firm’s folder.
</Copy>
<Copy k="again.bubble.when">1st of each month</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Outside counsel spend review</Copy>
<Copy k="again.card.cadence">1st of the month at 8:00 AM</Copy>
<Copy k="again.out1">Reads last month’s invoices for each panel firm</Copy>
<Copy k="again.out2">Applies your guidelines and your drift threshold</Copy>
<Copy k="again.out3">
  Writes the variance table and talking points to that firm’s folder
</Copy>
<Copy k="again.out3.em">for you to review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 2083464688c403b9 */}
<Copy k="widget.description">
  Film: a self-playing walkthrough showing how to have Claude review outside
  counsel invoices against a firm's billing guidelines and matter budgets. The
  user asks Claude to check invoices, flag entries that break billing rules,
  and identify matters drifting over budget with the reason behind each
  variance. Claude reads the guidelines, budgets, and invoice line items, asks
  the user to confirm the threshold for flagging budget overruns, then returns
  an off-pattern entry list, a matter-by-matter variance table showing budget
  versus billed amounts with drivers named, and draft talking points for a
  partner conversation. It closes by showing how the same review can be
  scheduled monthly across a panel of firms.
</Copy>
<Copy k="widget.summary">
  Film: The user asks Claude to check outside counsel invoices against billing
  guidelines and matter budgets, and Claude flags off-pattern entries,
  identifies budget drift with drivers, and drafts partner-call talking
  points.
</Copy>
`;export{e as default};