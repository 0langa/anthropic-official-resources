var e=`---
kind: widget-copy
---

{/* Film for the “Get signed contracts into the ledger” use case. \`line.*\` are
    the one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Get signed contracts into the ledger</Copy>
<Copy k="sub">
  This week’s signed contracts need to go into the ledger under your policy.
</Copy>

<Copy k="line.ask">
  Using the Finance plugin’s [[journal entry skill]], name your fields and ask
  for non-standard terms first.
</Copy>
<Copy k="line.does">
  Claude reads your policy and template first, then every contract in the
  folder.
</Copy>
<Copy k="line.question">
  When something is yours to decide, Claude stops and asks.
</Copy>
<Copy k="line.get">
  Claude tells you what it flagged, then gives you the [[intake sheet]].
</Copy>
<Copy k="line.note1">
  Each line is filled into your columns and points to its clause.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">your columns</Copy>
<Copy k="line.note1.at2">its clause</Copy>
<Copy k="line.note2">
  Standard ones go through; anything unusual waits for your decision.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">Standard ones</Copy>
<Copy k="line.note2.at2">anything unusual</Copy>
<Copy k="line.again">
  You can schedule the same extraction each weekday for contracts added to the
  folder.
</Copy>
<Copy k="line.close">
  Routine contracts are ready for the ledger, and you only review the unusual
  ones.
</Copy>

<Copy k="attachment1.title">Revenue / Intake / 2026-W35</Copy>
<Copy k="attachment1.sub">12 contracts</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">revrec-intake-template.xlsx</Copy>
<Copy k="attachment2.sub">Your columns</Copy>
<Copy k="attachment2.tag">XLSX</Copy>
<Copy k="attachment3.title">asc606-policy.md</Copy>
<Copy k="attachment3.sub">Standard patterns</Copy>
<Copy k="attachment3.tag">MD</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  [[Extract the ASC 606 fields]] (performance obligations, standalone selling
  price, contract term, billing schedule, variable consideration) from every
  executed contract into the rev-rec intake sheet, and [[flag any that don't
  match]] a standard pattern for my review before booking.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">asc606-policy.md</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">revrec-intake-template.xlsx</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">Revenue / Intake — 12 contracts</Copy>
<Copy k="source4.verb">Checked</Copy>
<Copy k="source4.text">each contract against the policy</Copy>
<Copy k="source5.verb">Checked</Copy>
<Copy k="source5.text">revrec-intake-2026-W35.xlsx</Copy>

<Copy k="verb1">Reading asc606-policy.md</Copy>
<Copy k="verb2">Reading the intake template</Copy>
<Copy k="verb3">Reading the Intake folder</Copy>
<Copy k="verb4">Checking each contract</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Allocating the transaction price</Copy>
<Copy k="verb7">Writing the intake sheet</Copy>

<Copy k="question.title">
  For contracts that auto-renew, which length do I record?
</Copy>
<Copy k="question.option1">Initial term, flag the renewal</Copy>
<Copy k="question.option2">Include the first renewal period</Copy>
<Copy k="question.answer">The initial term, and flag the renewal.</Copy>

<Copy k="reply.did1">read the 12 executed contracts</Copy>
<Copy k="reply.did2">checked each against the policy</Copy>
<Copy k="reply.did3">ready to book</Copy>
<Copy k="reply.did4">held for you</Copy>
<Copy k="reply.text">
  I read the 12 executed contracts into your intake sheet as 21 obligation
  lines and checked each against the policy: 8 are standard and ready to book,
  4 are held for you. The Exceptions tab lists each with its clause, policy
  section and the decision needed.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>

<Copy k="again.bubble">
  Run this {when}: check Revenue / Intake for contracts added since the last
  run, append their lines to the intake sheet and send the exception list to
  #revenue-ops.
</Copy>
<Copy k="again.bubble.when">every weekday at 5 pm</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Contract intake to rev-rec</Copy>
<Copy k="again.card.cadence">Weekdays at 5:00 PM</Copy>
<Copy k="again.out1">
  Extracts the fields from contracts added since the last run
</Copy>
<Copy k="again.out2">Appends their lines to the intake sheet</Copy>
<Copy k="again.out3">Drafts the exception list for #revenue-ops</Copy>
<Copy k="again.out3.em">for you to send</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 1331b2b1f610b068 */}
<Copy k="widget.description">
  Film: a self-playing walkthrough showing how to get signed contracts into a
  revenue ledger using Claude's journal entry skill. The user asks Claude to
  extract ASC 606 fields—performance obligations, standalone selling price,
  contract term, billing schedule, variable consideration—from executed
  contracts into a rev-rec intake sheet, flagging anything that doesn't match
  standard policy patterns. Claude reads the accounting policy, template, and
  contract folder, pauses to ask how to handle auto-renewing contract terms,
  then fills the intake sheet with clause references, marking lines as ready
  to book or held for review. It closes by showing how the same extraction can
  be scheduled to run automatically on new contracts, with exceptions routed
  for human review before booking.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to extract ASC 606 revenue-recognition fields
  from signed contracts into an intake sheet, flagging non-standard terms.
  Claude reads the policy, template, and contracts, asks a clarifying
  question, then shows results ready for booking or review, with scheduling
  for future runs.
</Copy>
`;export{e as default};