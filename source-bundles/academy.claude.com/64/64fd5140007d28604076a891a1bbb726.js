var e=`---
kind: widget-copy
---

{/* Film for the “Prepare a job offer” use case. \`line.*\` are the one sentence
    shown per chapter; a phrase in [[double brackets]] is the part the film
    underlines — keep the brackets around the equivalent words. \`prompt\` is
    typed on screen. \`reply.did*\` are the phrases of the reply the film marks,
    in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Prepare a job offer</Copy>
<Copy k="sub">
  Your finalist’s pay is approved and you need the offer ready to send.
</Copy>

<Copy k="line.ask">
  Using the Human Resources plugin’s [[draft offer skill]], ask for the
  letter, email and deck together.
</Copy>
<Copy k="line.does">
  Claude reads the candidate summary, your template, the approved numbers and
  the benefits sheet.
</Copy>
<Copy k="line.question">
  Claude checks with you before it decides anything that is your call.
</Copy>
<Copy k="line.get">
  Claude tells you what it filled in, then gives you the [[letter and deck]].
</Copy>
<Copy k="line.note1">
  Every number in the letter comes from the approval you attached.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">Every number</Copy>
<Copy k="line.note2">
  Claude writes why you want this candidate from your own interview notes.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">why you want</Copy>
<Copy k="line.again">
  You approve the email draft first, and can schedule a package for each new
  finalist.
</Copy>
<Copy k="line.close">
  The offer letter goes out correct and consistent, after you review it.
</Copy>

<Copy k="attachment1.title">Hiring / Senior-PM-Growth / offers</Copy>
<Copy k="attachment1.sub">4 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">comp-approval.xlsx</Copy>
<Copy k="attachment2.sub">Approved terms</Copy>
<Copy k="attachment2.tag">XLSX</Copy>
<Copy k="attachment3.title">candidate-summary-ARivera.pdf</Copy>
<Copy k="attachment3.sub">Panel notes</Copy>
<Copy k="attachment3.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Prepare our finalist's offer package. [[Fill the offer fields for my
  review]], draft a warm email that sets up the call, and build [[a short
  deck]] for the call: the role, the numbers, and [[why we're excited about
  them]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">candidate-summary-ARivera.pdf</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">offer-letter-template.docx, 14 fields</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">comp-approval.xlsx, approved 23 Apr</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">benefits-overview-2026.pdf</Copy>

<Copy k="verb1">Reading the candidate summary</Copy>
<Copy k="verb2">Reading the offer template</Copy>
<Copy k="verb3">Reading the comp approval</Copy>
<Copy k="verb4">Reading the benefits overview</Copy>
<Copy k="verb5">Waiting for you</Copy>
<Copy k="verb6">Filling the offer letter</Copy>
<Copy k="verb7">Building the call deck</Copy>

<Copy k="question.title">Should the sign-on bonus be in the first offer?</Copy>
<Copy k="question.option1">Hold it back for the call</Copy>
<Copy k="question.option2">Include it now</Copy>
<Copy k="question.answer">Hold it for the call.</Copy>

<Copy k="reply.did1">filled your template’s 14 fields</Copy>
<Copy k="reply.did2">from the 23 April approval</Copy>
<Copy k="reply.did3">built the six-slide deck</Copy>
<Copy k="reply.did4">on the same figures</Copy>
<Copy k="reply.text">
  I filled your template’s 14 fields from the 23 April approval ($192,000
  base, 15% bonus, 4,800 RSUs, start 18 May) and built the six-slide deck on
  the same figures. The sign-on is held back for the call, as you said.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Presentation</Copy>

<Copy k="approval.tool">Create draft</Copy>
<Copy k="approval.button1">Allow once</Copy>
<Copy k="approval.button2">Always allow</Copy>
<Copy k="approval.button3">Deny</Copy>
<Copy k="approval.granted">Saved to Outlook drafts, not sent</Copy>

<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Offer package on stage change</Copy>
<Copy k="again.card.cadence">Weekdays at 9:00 AM</Copy>
<Copy k="again.out1">
  Checks the hiring folder for candidates moved to Offer
</Copy>
<Copy k="again.out2">
  Runs /draft-offer and writes the package to that role’s folder
</Copy>
<Copy k="again.out3">Sends nothing to the candidate</Copy>
<Copy k="again.out3.em">until you approve</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: c405f5acef3b3ec9 */}
<Copy k="widget.description">
  Film: this walkthrough shows how Claude's draft-offer skill assembles a job
  offer package once pay is approved. The user asks Claude, via a Human
  Resources plugin, to prepare the offer letter, a candidate email, and a call
  deck together. Claude reads the candidate summary, the offer template, the
  approved compensation figures, and the benefits sheet, then checks with the
  user on a judgment call—whether a sign-on bonus belongs in the initial offer
  or should wait for the call—before filling the letter and building the deck.
  It reports exactly what it filled in and from which sources, drafts the
  email for approval rather than sending it, and shows how the same package
  can be scheduled to run automatically for future finalists, always pausing
  for human approval before anything reaches a candidate.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to draft a job offer letter, candidate email, and
  call deck from approved figures and supporting documents, checking in on one
  judgment call before delivering drafts and showing how the package can be
  scheduled to run automatically for future finalists, always pausing for
  approval first.
</Copy>
`;export{e as default};