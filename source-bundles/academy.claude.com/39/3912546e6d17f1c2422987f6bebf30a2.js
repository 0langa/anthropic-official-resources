var e=`---
kind: widget-copy
---

{/* Film for the “Redline a contract against your playbook” use case. \`line.*\`
    are the one sentence shown per chapter; a phrase in [[double brackets]] is
    the part the film underlines — keep the brackets around the equivalent
    words. \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the
    reply the film marks, in reading order: keep each one verbatim in
    \`reply.text\`. \`again.underline\` must be a word that appears in
    \`line.again\`. Company, people, file and channel names and the figures are
    simulated data: keep them as they are. */}

<Copy k="title">Redline a contract against your playbook</Copy>
<Copy k="sub">
  You need to review a long incoming agreement against your playbook.
</Copy>

<Copy k="line.ask">
  Using the Commercial Legal plugin’s [[review skill]], ask Claude to rate
  each clause and redline departures.
</Copy>
<Copy k="line.does">
  Claude reads your playbook first, then compares every clause in the
  agreement against it.
</Copy>
<Copy k="line.question">
  Wherever a decision is yours to make, Claude asks instead of guessing.
</Copy>
<Copy k="line.get">
  Claude tells you what it flagged, then gives you the [[redlined agreement]].
</Copy>
<Copy k="line.note1">
  Each proposed change has your playbook’s reason written beside it.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">reason</Copy>
<Copy k="line.note2">
  When your rules require sign-off, Claude names who must approve.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">who must approve</Copy>
<Copy k="line.again">
  Share the skill so every reviewer on the team checks contracts against the
  same positions.
</Copy>
<Copy k="line.close">
  Every risky clause comes with a suggested edit, and you decide each one.
</Copy>

<Copy k="attachment1.title">Halyard-MSA-v3-counterparty.docx</Copy>
<Copy k="attachment1.sub">Their paper, 41 pages</Copy>
<Copy k="attachment1.tag">DOCX</Copy>
<Copy k="attachment2.title">contract-playbook-2026.pdf</Copy>
<Copy k="attachment2.sub">Purchasing side, 16 positions</Copy>
<Copy k="attachment2.tag">PDF</Copy>
<Copy k="attachment3.title">Contracts / Halyard-MSA</Copy>
<Copy k="attachment3.sub">Working folder</Copy>
<Copy k="attachment3.tag">Folder</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Review this MSA clause by clause [[against our contract playbook]]. Mark
  each clause green, yellow or red with a one-line reason, and where it's
  yellow or red [[draft the redline as a tracked change]] with the rationale
  for opposing counsel.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">contract-playbook-2026.pdf, 16 positions</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">Halyard-MSA-v3-counterparty.docx, 41 pages</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">Exhibits A to C: DPA, SLA and SOW 1</Copy>
<Copy k="source4.verb">Checked</Copy>
<Copy k="source4.text">31 clauses against 16 positions</Copy>

<Copy k="verb1">Reading contract-playbook-2026.pdf</Copy>
<Copy k="verb2">Reading the agreement, titles first</Copy>
<Copy k="verb3">Reading the exhibits</Copy>
<Copy k="verb4">Comparing clauses to positions</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Comparing 31 clauses against 16 positions</Copy>
<Copy k="verb7">Writing tracked changes</Copy>

<Copy k="question.title">
  Are you the customer in this contract, buying from Halyard?
</Copy>
<Copy k="question.option1">Yes, Halyard is the vendor</Copy>
<Copy k="question.option2">No, we are the vendor</Copy>
<Copy k="question.answer">Yes, Halyard is the vendor.</Copy>

<Copy k="reply.did1">reviewed the 31 clauses</Copy>
<Copy k="reply.did2">against your 16 purchasing-side playbook positions</Copy>
<Copy k="reply.did3">Each redline is a tracked change</Copy>
<Copy k="reply.did4">the General Counsel signs off first</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="again.bubble">
  Edit the /review skill with what we did here and {when}.
</Copy>
<Copy k="again.bubble.when">share it with the legal team</Copy>
<Copy k="again.underline">skill</Copy>
<Copy k="again.card.line">
  Reviews an agreement clause by clause against the team playbook and drafts
  each redline as a tracked change with the position and fallback beside it.
</Copy>
<Copy k="again.card.shared">Your legal team can view</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 010ff340da116a77 */}
<Copy k="widget.description">
  Film: a use-case walkthrough showing how to redline an incoming contract
  against a company's purchasing playbook using Claude's Commercial Legal
  skills. The user asks Claude to review a long agreement clause by clause
  against the playbook, rating each green, yellow, or red with a one-line
  reason, and to draft tracked-change redlines with rationale for opposing
  counsel wherever terms depart from standard. Claude reads the playbook
  first, then the agreement and its exhibits, asking a clarifying question
  when a judgment call belongs to the user rather than Claude. The result is a
  scored clause-by-clause review with tracked-change edits, each carrying the
  playbook's stated reason, and a note naming who must approve when policy
  requires sign-off. The film closes by showing how the skill can be saved and
  shared so a whole legal team reviews contracts against the same standard.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to redline an incoming contract against a
  purchasing playbook, rating clauses green, yellow, or red and drafting
  tracked-change edits with rationale, then shares the skill with a legal
  team.
</Copy>
`;export{e as default};