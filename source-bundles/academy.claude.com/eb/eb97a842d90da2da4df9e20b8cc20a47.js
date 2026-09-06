var e=`---
kind: widget-copy
---

{/* Film for the “Review a new vendor’s risk” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Review a new vendor’s risk</Copy>
<Copy k="sub">
  You need a go or no-go on a new vendor against your risk framework.
</Copy>

<Copy k="line.ask">
  Using the Operations plugin’s [[risk assessment skill]], list documents and
  ask for a score and fixes.
</Copy>
<Copy k="line.does">
  Claude reads your framework first, then checks the evidence and the contract
  terms against each control.
</Copy>
<Copy k="line.question">
  Wherever a decision is yours to make, Claude asks instead of guessing.
</Copy>
<Copy k="line.get">
  You get the [[memo and scores]], with the score and call at the top.
</Copy>
<Copy k="line.note1">
  The memo opens with the score and what must close first.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">the score</Copy>
<Copy k="line.note1.at2">close first</Copy>
<Copy k="line.note2">Every finding names its page, row or clause.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">names its page</Copy>
<Copy k="line.note2.at2">row or clause</Copy>
<Copy k="line.again">
  Share the skill, and procurement, security and legal can score every vendor
  the same way.
</Copy>
<Copy k="line.close">
  You get a cited recommendation on the vendor and make the call.
</Copy>

<Copy k="attachment1.title">Vendors / Northwind / risk-review</Copy>
<Copy k="attachment1.sub">4 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">vendor-risk-framework.pdf</Copy>
<Copy k="attachment2.sub">24 controls, 3 data tiers</Copy>
<Copy k="attachment2.tag">PDF</Copy>
<Copy k="attachment3.title">northwind-soc2-type2.pdf</Copy>
<Copy k="attachment3.sub">86 pages</Copy>
<Copy k="attachment3.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Score this vendor's SOC 2, security questionnaire, DPA and MSA [[against our
  risk framework]]. Write the review memo with [[a clear go or no-go]] and the
  required mitigations with owners. Cite the source document and section for
  every finding.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">vendor-risk-framework.pdf, 24 controls</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">northwind-soc2-type2.pdf, 86 pages</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">security-questionnaire.xlsx, 312 answers</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">northwind-dpa-and-msa.docx</Copy>
<Copy k="source5.verb">Checked</Copy>
<Copy k="source5.text">Vendor register: no prior review</Copy>
<Copy k="source6.verb">Checked</Copy>
<Copy k="source6.text">24 controls at Tier 2</Copy>

<Copy k="verb1">Reading vendor-risk-framework.pdf</Copy>
<Copy k="verb2">Reading the SOC 2 report</Copy>
<Copy k="verb3">Reading 312 questionnaire answers</Copy>
<Copy k="verb4">Reading the DPA and MSA</Copy>
<Copy k="verb5">Checking the vendor register</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Scoring 24 controls at Tier 2</Copy>
<Copy k="verb8">Writing the memo</Copy>

<Copy k="question.title">What kind of data will Northwind handle for you?</Copy>
<Copy k="question.option1">Tier 2: customer personal data</Copy>
<Copy k="question.option2">Tier 3: internal business data only</Copy>
<Copy k="question.answer">Tier 2, customer personal data, no payments.</Copy>

<Copy k="reply.did1">scored the SOC 2 report</Copy>
<Copy k="reply.did2">a conditional go</Copy>
<Copy k="reply.did3">each with an owner</Copy>
<Copy k="reply.did4">every finding cites its page</Copy>
<Copy k="reply.text">
  I scored the SOC 2 report, the 312 questionnaire answers, the DPA and the
  MSA against your 24 controls at Tier 2: 68 of 100, a conditional go, 18
  controls met. Three gaps must close before customer data moves, each with an
  owner, and every finding cites its page, row or clause.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Spreadsheet</Copy>

<Copy k="again.bubble">
  Edit the /risk-assessment skill with what we did here and {when}.
</Copy>
<Copy k="again.bubble.when">share it with the review group</Copy>
<Copy k="again.underline">skill</Copy>
<Copy k="again.card.line">
  Scores a vendor’s audit report, questionnaire and contract terms against the
  team framework and drafts the decision memo with cited findings and owned
  mitigations.
</Copy>
<Copy k="again.card.shared">Procurement, Security and Legal can view</Copy>
`;export{e as default};