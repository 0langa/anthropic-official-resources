var e=`---
kind: widget-copy
---

{/* Learner-facing copy for GrantReport.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. \`{count}\` is a number of files
    and must survive verbatim. Text in square brackets is a blank Claude
    left for the reader to fill: translate the words inside and keep the
    brackets. The \`caption.*\` texts are side notes about Kofi, in the
    third person. The \`activity.*\` and \`box.*\` texts are the product's own labels.
    The \`ask.text\` text is the person's message. Every other text is
    Claude's, from a recorded run of the grant reporting skill on fictional
    documents. Claude's words
    are shown in part, word for word: sentences, rows and sections of
    Claude's reply are left out, and none is reworded. Do not shorten or
    join Claude's sentences here. Every organization is fictional. */}

<Copy k="stageAlt">
  Kofi asks Claude to draft the report Maple Hollow owes the Maple County
  Community Foundation on their form, to show the source of every figure, and
  to leave a blank where a number is missing. Kofi says he will write the
  reason for any line where Maple Hollow spent more than it planned. Claude
  reads four of Kofi's documents: the funder's report form, the award letter,
  Maple Hollow's outcomes for the grant period, and its spending by line.
  Parts of Claude's answer are shown, and other parts are left out. Claude
  says the draft is on the Foundation's form. The draft has two headings at
  the top: the name of the Foundation, then the name of its interim report
  form for Community Needs Grants. A table under the headings gives the
  grantee, Maple Hollow After-School Project, the grant number, the grant
  amount of $15,000, the grant period, September 1, 2025 to August 31, 2026,
  and the date the report is due, October 31, 2026. The name of the person
  filling in the form is a blank in square brackets, marked BLANK 1. Under the
  form's first question, which is about progress on goals and has a limit of
  250 words, the draft answers each goal. Goal 1, serve 100 students: not met,
  88 students were enrolled, 12 fewer than the goal. Goal 2, average
  attendance of 80%: a blank, marked BLANK 2, for the average attendance, the
  months it covers, where the figure comes from, and whether the goal was met.
  Goal 3, 70% of students move up at least one reading level: not met, by a
  small margin, 61 of 88 students, which is 69%, moved up, on the school
  district's reading benchmark. Under the form's third question, which
  compares the budget with what was spent, a table gives each line's budget,
  actual, and difference. Reading coaches: $9,000 and $9,000. Books: $3,500
  and $4,400, which is $900 over, with a blank, marked BLANK 4, for Kofi's
  reason and a note that this line is over by 26%. Snacks: $1,500 and $1,200,
  which is $300 under. Assessment licences: $1,000 and $1,000. Total: $15,000
  and $15,600, which is $600 over. Under the table the draft says the budget
  figures are from the award letter and the actual figures are from Maple
  Hollow's accounting records. After the draft, a table gives each figure in
  the draft and its source. The three goals are from the award letter. 88
  students and 61 of 88 students are from Maple Hollow's outcomes for the
  grant period. The budget column is from the award letter. The actual and
  difference columns and the total row are from Maple Hollow's spending by
  line, and Claude says it copied them without changing them. Three figures
  have Claude's own arithmetic as their source: 12 fewer than the goal, 69%,
  and Books over by 26%. Last, Claude tells Kofi what it needs from him for
  four of the blanks, each with the number Claude gave it. BLANK 1: who is
  filling in the form. BLANK 2: the average attendance. BLANK 3: what Maple
  Hollow learned, with two questions from Claude to start from: what held
  enrollment back, and whether the reading nights changed how Maple Hollow
  runs the program. BLANK 4: Kofi's reason for the Books line.
</Copy>
<Copy k="caption.ask">Kofi asks for the source of every figure and placeholders for missing numbers</Copy>
<Copy k="caption.read">Claude reviews Kofi's documents before it writes</Copy>
<Copy k="caption.form">Claude follows the Foundation's form and fills in the grant's details</Copy>
<Copy k="caption.goals">Claude reports Maple Hollow's outcomes against each goal and adds a bracketed placeholder for attendance</Copy>
<Copy k="caption.budget">Claude reports spending against each budget line and adds a placeholder for Kofi's reason</Copy>
<Copy k="caption.source">Claude cites the source for each figure in the draft</Copy>
<Copy k="caption.worked">Claude shows its work for the percentages it calculated</Copy>
<Copy k="caption.blank">Claude lists the placeholders and asks Kofi for the missing name, figure, or reason</Copy>

<Copy k="box.placeholder">How can I help you today?</Copy>
<Copy k="box.add">Add files</Copy>
<Copy k="box.send">Send message</Copy>
<Copy k="actions.label">Message actions</Copy>
<Copy k="ask.text">
  We owe the Maple County Community Foundation a report on our grant. Can
  you draft it on their form, show the source of every figure, and leave a
  blank where a number is missing? I'll write the reason for any line where
  we spent more than we planned.
</Copy>
<Copy k="activity.reading">Reading files</Copy>
<Copy k="activity.read">Read {count} files</Copy>
<Copy k="activity.readOne">Read</Copy>

<Copy k="answer.intro">Here is the draft on the Foundation's form.</Copy>

<Copy k="form.funder">Maple County Community Foundation</Copy>
<Copy k="form.name">Community Needs Grants: interim report form</Copy>
<Copy k="form.grantee">Grantee</Copy>
<Copy k="form.grantee.value">Maple Hollow After-School Project</Copy>
<Copy k="form.number">Grant number</Copy>
<Copy k="form.amount">Grant amount</Copy>
<Copy k="form.period">Grant period</Copy>
<Copy k="form.period.value">September 1, 2025 to August 31, 2026</Copy>
<Copy k="form.due">Report due</Copy>
<Copy k="form.due.value">October 31, 2026</Copy>
<Copy k="form.person">Person filling in this form</Copy>
<Copy k="form.person.value">[BLANK 1: name of the person filling in the form]</Copy>

<Copy k="q1.title">Question 1. Progress on goals (250 words)</Copy>
<Copy k="q1.goal1.label">Goal 1: Serve 100 students.</Copy>
<Copy k="q1.goal1">
  Not met. 88 students were enrolled in the Reading Room in the 2025-26
  school year, 12 fewer than the goal.
</Copy>
<Copy k="q1.goal2.label">Goal 2: Average attendance of 80%.</Copy>
<Copy k="q1.goal2">
  [BLANK 2: average attendance as a percentage, the months it covers,
  where the figure comes from, and whether the goal was met]
</Copy>
<Copy k="q1.goal3.label">
  Goal 3: 70% of students move up at least one reading level.
</Copy>
<Copy k="q1.goal3">
  Not met, by a small margin. 61 of 88 students (69%) moved up at least
  one level from fall to spring. Levels come from the school district's
  fall-to-spring reading benchmark.
</Copy>

<Copy k="q3.title">Question 3. Budget versus actual</Copy>
<Copy k="budget.col.line">Line</Copy>
<Copy k="budget.col.budget">Budget</Copy>
<Copy k="budget.col.actual">Actual</Copy>
<Copy k="budget.col.difference">Difference</Copy>
<Copy k="budget.col.reason">Reason, for any line over by more than 10%</Copy>
<Copy k="budget.coaches">Reading coaches</Copy>
<Copy k="budget.books">Books</Copy>
<Copy k="budget.books.reason">[BLANK 4: your reason. This line is over by 26%.]</Copy>
<Copy k="budget.snacks">Snacks</Copy>
<Copy k="budget.licences">Assessment licences</Copy>
<Copy k="budget.total">Total</Copy>
<Copy k="budget.note">
  Budget figures are from the award letter. Actual figures are from our
  accounting records, September 2026. Difference is actual minus budget.
</Copy>

<Copy k="sources.title">Where each figure comes from</Copy>
<Copy k="sources.col.figure">Figure in the draft</Copy>
<Copy k="sources.col.source">Source</Copy>
<Copy k="source.goals.figure">
  The three goals (100 students, 80% attendance, 70% moving up)
</Copy>
<Copy k="source.goals.source">MCCF award letter, "Goals"</Copy>
<Copy k="source.enrolled.figure">
  88 students, 2025-26 school year, both sites
</Copy>
<Copy k="source.enrolled.source">
  Outcomes for the grant period, table and notes
</Copy>
<Copy k="source.fewer.figure">12 fewer than the goal</Copy>
<Copy k="source.fewer.source">My arithmetic: 100 minus 88</Copy>
<Copy k="source.moved.figure">
  61 of 88 students moved up, fall to spring
</Copy>
<Copy k="source.moved.source">Outcomes for the grant period, table</Copy>
<Copy k="source.percent.figure">69%</Copy>
<Copy k="source.percent.source">
  My arithmetic: 61 divided by 88 is 69.3%
</Copy>
<Copy k="source.budget.figure">Budget column</Copy>
<Copy k="source.budget.source">
  MCCF award letter, "Grant budget". Spending by line shows the same
  amounts.
</Copy>
<Copy k="source.actual.figure">
  Actual and Difference columns, and the Total row
</Copy>
<Copy k="source.actual.source">
  Spending by line - MCCF grant, which says it is from the accounting
  records, September 2026. I copied them as they are. The lines do add up
  to the totals.
</Copy>
<Copy k="source.books.figure">Books over by 26%</Copy>
<Copy k="source.books.source">
  My arithmetic: $900 divided by $3,500 is 25.7%
</Copy>

<Copy k="left.title">What's left for you</Copy>
<Copy k="left.blank1.label">BLANK 1.</Copy>
<Copy k="left.blank1">Who is filling in the form?</Copy>
<Copy k="left.blank2.label">BLANK 2.</Copy>
<Copy k="left.blank2">
  Average attendance: the percentage, the months it covers and where it
  comes from. If attendance wasn't tracked, tell me and I'll rewrite Goal 2
  to say so plainly. The goal has to stay in the report, because the
  Foundation will read the report against the award letter.
</Copy>
<Copy k="left.blank3.label">BLANK 3.</Copy>
<Copy k="left.blank3">
  What you learned. Two questions to start from: Enrollment was 88 against
  a goal of 100. What held it back? And 74 of 88 families came to a reading
  night. Did that change how you run the program?
</Copy>
<Copy k="left.blank4.label">BLANK 4.</Copy>
<Copy k="left.blank4">
  Your reason for the Books line. You may also want to say there what
  covered the extra $600.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: f02b1d066a75e5eb */}
<Copy k="widget.description">
  Walkthrough: Claude drafting a grant report on a funder's
  own form, after the user asks Claude to show the source of every figure and
  leave a blank where a number is missing. Claude first reviews the
  organization's documents, then fills in the funder's form fields, reports
  progress against each goal from the award letter, and compares budget to
  actual spending line by line. Claude then lists where every figure in the
  draft came from, including ones it calculated itself, showing its work.
  Finally Claude lists what's left for the user to supply: missing figures, an
  explanation for any overspent budget line, and open questions about what the
  documents can't explain. It teaches how Claude grounds a funder report in
  source documents, flags gaps instead of guessing, and shows its arithmetic
  for calculated figures.
</Copy>
<Copy k="widget.summary">
  Walkthrough: Claude drafting a grant report on a funder's
  form, citing the source for every figure and flagging gaps with bracketed
  placeholders instead of guessing. It teaches how Claude grounds reporting in
  source documents and shows its arithmetic for calculated figures.
</Copy>
`;export{e as default};