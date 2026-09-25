var e=`---
kind: widget-copy
---

{/* Film for the “Reconcile and draft the journal entries” use case. \`line.*\`
    are the one sentence shown per chapter; a phrase in [[double brackets]] is
    the part the film underlines — keep the brackets around the equivalent
    words. \`prompt\` is typed on screen. \`opener.cue*\` are each a word of
    \`sub\`: when that word appears, its window lifts. \`reply.did*\` are the
    phrases of the reply the film marks, in reading order: keep each one
    verbatim in \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Reconcile and draft the journal entries</Copy>
<Copy k="sub">
  Your two ledgers don’t agree and you need the entries that fix it.
</Copy>

<Copy k="line.ask">
  Tell the [[journal entry skill]] how to match and sort differences, and what
  each entry needs.
</Copy>
<Copy k="line.does">
  Claude reads both ledgers and your rate sheet, then matches line by line in
  one currency.
</Copy>
<Copy k="line.question">
  Claude checks with you before it decides anything that is your call.
</Copy>
<Copy k="line.get">
  Claude tells you what matched, then gives you the [[two workbooks]].
</Copy>
<Copy k="line.note1">Every difference is sorted into your categories.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">your categories</Copy>
<Copy k="line.note2">
  Each draft entry balances and waits for you to post it.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">balances</Copy>
<Copy k="line.again">
  Schedule it, and Claude runs the match again whenever new ledger exports
  arrive in the folder.
</Copy>
<Copy k="line.close">
  Your two ledgers agree, and you review each entry before it posts.
</Copy>

<Copy k="opener.cue1">ledgers</Copy>
<Copy k="opener.cue2">agree</Copy>
<Copy k="attachment1.title">FY26-Close / Intercompany / March</Copy>
<Copy k="attachment1.sub">4 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">fx-rates-mar-2026.xlsx</Copy>
<Copy k="attachment2.sub">Month-end and average</Copy>
<Copy k="attachment2.tag">XLSX</Copy>
<Copy k="attachment3.title">JE-template.xlsx</Copy>
<Copy k="attachment3.sub">Your columns</Copy>
<Copy k="attachment3.tag">XLSX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Reconcile March intercompany across both subledgers. Normalize FX to USD at
  the month-end rate, fuzzy-match by amount and reference, sort differences
  into [[timing, rounding and true breaks]]. [[Draft a JE]] per true break
  with [[Dr/Cr, memo and support reference]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">subledger-US-mar.xlsx</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">subledger-EMEA-mar.xlsx</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">fx-rates-mar-2026.xlsx</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">JE-template.xlsx</Copy>
<Copy k="source5.verb">Checked</Copy>
<Copy k="source5.text">both ledgers in USD at the month-end rate</Copy>

<Copy k="verb1">Reading subledger-US-mar.xlsx</Copy>
<Copy k="verb2">Reading subledger-EMEA-mar.xlsx</Copy>
<Copy k="verb3">Reading the rate sheet</Copy>
<Copy k="verb4">Reading the JE template</Copy>
<Copy k="verb5">Matching both ledgers</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Classifying the breaks</Copy>
<Copy k="verb8">Writing the workbook and JE draft</Copy>

<Copy k="question.title">Below what amount is a difference just rounding?</Copy>
<Copy k="question.option1">Under $25 is rounding, no entry</Copy>
<Copy k="question.option2">One clean-up entry for all</Copy>
<Copy k="question.answer">Under $25 is rounding; leave those out.</Copy>

<Copy k="reply.did1">matched 412 line pairs</Copy>
<Copy k="reply.did2">each with a draft entry</Copy>
<Copy k="reply.did3">Each entry balances</Copy>
<Copy k="reply.did4">nothing posts until you approve</Copy>
<Copy k="reply.text">
  I matched 412 line pairs at the 31 March rate and explained the full
  $124,054.49 difference: 18 timing items, 7 rounding under $25, and 3 true
  breaks, each with a draft entry. Each entry balances; I would post JE-0327
  and JE-0328, hold JE-0329, and nothing posts until you approve.
</Copy>
<Copy k="file1.meta">Spreadsheet</Copy>
<Copy k="file2.meta">Spreadsheet</Copy>

<Copy k="again.bubble">
  Run this {when}: if new subledger exports are in the Intercompany folder,
  run /journal-entry against them and write the recon workbook and JE draft
  there. Nothing posts without my review.
</Copy>
<Copy k="again.bubble.when">every Monday</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Intercompany recon and JE draft</Copy>
<Copy k="again.card.cadence">Mondays at 9:00 AM</Copy>
<Copy k="again.out1">Matches both ledgers at the month-end rate</Copy>
<Copy k="again.out2">Classifies the breaks in your categories</Copy>
<Copy k="again.out3">Writes the recon workbook and JE draft to the folder</Copy>
<Copy k="again.out3.em">nothing posts without your review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 86056a248ec18058 */}
<Copy k="widget.description">
  Film: a use-case walkthrough showing how Claude reconciles intercompany
  ledgers and drafts journal entries. The user points Claude at two subledger
  exports, an FX rate sheet, and a JE template, and asks it to normalize
  currency to USD at the month-end rate, fuzzy-match line items by amount and
  reference, and sort remaining differences into timing, rounding, and
  true-break categories. Claude pauses to confirm a materiality threshold
  before classifying rounding differences, then returns a reconciliation
  workbook with breaks explained and a balanced JE draft with debit, credit,
  memo, and supporting reference for each true break, all held for human
  review before posting. The film closes by showing the task scheduled to
  rerun automatically whenever new ledger exports arrive.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to reconcile two intercompany ledgers, normalize
  currency, and match line items, pausing to confirm a materiality threshold
  before drafting balanced journal entries for review and scheduling recurring
  runs.
</Copy>
`;export{e as default};