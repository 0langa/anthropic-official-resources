var e=`---
kind: widget-copy
---

{/* Film for the “Find the themes across sales calls” use case. \`line.*\` are
    the one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Find the themes across sales calls</Copy>
<Copy k="sub">
  You have a quarter of sales call transcripts and need the themes across
  them.
</Copy>

<Copy k="line.ask">
  Using the Sales plugin’s [[call summary skill]], give your theme list and
  ask for counts.
</Copy>
<Copy k="line.does">
  Claude reads every transcript against your taxonomy, then matches the
  accounts in your CRM.
</Copy>
<Copy k="line.question">
  Wherever a decision is yours to make, Claude asks instead of guessing.
</Copy>
<Copy k="line.get">
  Claude tells you what it counted, then gives you the [[brief and sheet]].
</Copy>
<Copy k="line.note1">
  Each theme shows how many calls raised it, with one quote.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">how many calls</Copy>
<Copy k="line.note1.at2">one quote</Copy>
<Copy k="line.note2">Each theme lists the accounts that raised it.</Copy>
<Copy k="line.again">
  You can schedule the same brief to run when a new quarter’s folder appears.
</Copy>
<Copy k="line.close">
  Product hears what customers said most, counted across every call.
</Copy>

<Copy k="attachment1.title">Calls / 2026-Q2</Copy>
<Copy k="attachment1.sub">40 transcripts</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">themes-taxonomy.docx</Copy>
<Copy k="attachment2.sub">9 themes</Copy>
<Copy k="attachment2.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Read every transcript in this folder and cluster what customers say into
  themes. For each theme give [[the count, the best one-line quote]] and which
  accounts said it. Write a [[one-page themes brief]] for product and
  marketing.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">themes-taxonomy.docx</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">40 transcripts in Calls / 2026-Q2</Copy>
<Copy k="source3.verb">Checked</Copy>
<Copy k="source3.text">31 accounts with segment and renewal</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">Q1 call themes brief</Copy>

<Copy k="verb1">Reading themes-taxonomy.docx</Copy>
<Copy k="verb2">Reading 40 transcripts</Copy>
<Copy k="verb3">Matching accounts in Salesforce</Copy>
<Copy k="verb4">Reading the Q1 brief</Copy>
<Copy k="verb5">Coding each call to your themes</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Counting calls and accounts</Copy>
<Copy k="verb8">Writing the themes brief</Copy>

<Copy k="question.title">
  Which customer requests should I pass to the product team?
</Copy>
<Copy k="question.option1">ERP sync drops custom fields</Copy>
<Copy k="question.option2">Report filters finance needs</Copy>
<Copy k="question.option3">Audit log export, new this quarter</Copy>
<Copy k="question.answer">ERP sync and audit log export.</Copy>

<Copy k="reply.did1">coded the 40 Q2 transcripts</Copy>
<Copy k="reply.did2">against your nine themes</Copy>
<Copy k="reply.did3">is a new theme</Copy>
<Copy k="reply.did4">the coding sheet traces every call</Copy>
<Copy k="reply.text">
  I coded the 40 Q2 transcripts against your nine themes: slow first import
  leads with 14 calls from 12 accounts, and audit log export is a new theme
  with 9 calls. The two product themes you picked carry their accounts, ARR
  and Q3 renewals, and the coding sheet traces every call.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Spreadsheet</Copy>

<Copy k="again.bubble">
  Run this {when}: if a new quarter folder is in Calls, write its themes brief
  and coding sheet the same way and add what is new since last quarter.
</Copy>
<Copy k="again.bubble.when">every Monday</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Quarterly call themes</Copy>
<Copy k="again.card.cadence">Mondays at 9:00 AM</Copy>
<Copy k="again.out1">Checks Calls for a new quarter folder</Copy>
<Copy k="again.out2">Codes its transcripts against your taxonomy</Copy>
<Copy k="again.out3">
  Writes the themes brief and coding sheet to that folder
</Copy>
<Copy k="again.out3.em">for you to review</Copy>
`;export{e as default};