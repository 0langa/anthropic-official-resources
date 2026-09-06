var e=`---
kind: widget-copy
---

{/* Film for the “Open a new role” use case. \`line.*\` are the one sentence
    shown per chapter; a phrase in [[double brackets]] is the part the film
    underlines — keep the brackets around the equivalent words. \`prompt\` is
    typed on screen. \`reply.did*\` are the phrases of the reply the film marks,
    in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Open a new role</Copy>
<Copy k="sub">
  You are opening a new role and need a spec for the recruiter.
</Copy>

<Copy k="line.ask">
  With the Human Resources plugin’s [[recruiting skill]], ask Claude to
  interview you first and push back.
</Copy>
<Copy k="line.does">
  Claude reads your template, leveling guide and team charter, then asks its
  questions from them.
</Copy>
<Copy k="line.question">
  Claude asks you first wherever your judgment is needed.
</Copy>
<Copy k="line.get">
  Claude tells you what it wrote, then gives you the [[role spec]].
</Copy>
<Copy k="line.note1">
  Each must-have is written as something an interviewer can test.
</Copy>
<Copy k="line.note2">
  Anything you did not decide is listed for the recruiter, not guessed.
</Copy>
<Copy k="line.again">
  Share the intake as a skill so every hiring manager answers the same
  questions.
</Copy>
<Copy k="line.close">
  The recruiter gets a complete role spec in your own words.
</Copy>

<Copy k="attachment1.title">Hiring / Senior-PM-Growth</Copy>
<Copy k="attachment1.sub">Template, leveling guide, team charter</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">role-spec-template.docx</Copy>
<Copy k="attachment2.sub">People team v4</Copy>
<Copy k="attachment2.tag">DOCX</Copy>
<Copy k="attachment3.title">leveling-guide-2026.pdf</Copy>
<Copy k="attachment3.sub">Product levels P3–P7</Copy>
<Copy k="attachment3.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  [[Walk me through the intake]] for a Senior PM, Growth role: scope,
  must-haves versus nice-to-haves, level, and day-90 outcomes. [[Push back
  where I'm vague]], then write the spec in our format and list what's open
  for the recruiter.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">role-spec-template.docx, 8 sections</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">leveling-guide-2026.pdf</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">growth-team-charter.docx, 5 areas</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">two recent product role specs</Copy>

<Copy k="verb1">Reading role-spec-template.docx</Copy>
<Copy k="verb2">Reading the leveling guide</Copy>
<Copy k="verb3">Reading the team charter</Copy>
<Copy k="verb4">Reading two recent role specs</Copy>
<Copy k="verb5">Interviewing you</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Turning answers into requirements</Copy>
<Copy k="verb8">Writing senior-pm-growth-role-spec</Copy>

<Copy k="question.title">Which areas of Growth will this person own?</Copy>
<Copy k="question.option1">Activation and onboarding</Copy>
<Copy k="question.option2">Referral program</Copy>
<Copy k="question.option3">Pricing and packaging tests</Copy>
<Copy k="question.option4">Self-serve to sales-assist handoff</Copy>
<Copy k="question.option5">Lifecycle messaging</Copy>
<Copy k="question.answer">
  Activation and onboarding, referrals, self-serve to sales-assist.
</Copy>

<Copy k="reply.did1">asked you five questions</Copy>
<Copy k="reply.did2">then wrote the spec</Copy>
<Copy k="reply.did3">four testable must-haves</Copy>
<Copy k="reply.did4">listed for the recruiter, not filled in</Copy>
<Copy k="reply.text">
  I asked you five questions from the template, leveling guide and charter,
  then wrote the spec at P5: three ownership areas, four testable must-haves
  and day-90 outcomes. Four things you didn’t decide, including the comp band,
  are listed for the recruiter, not filled in.
</Copy>
<Copy k="file1.meta">Document</Copy>

<Copy k="again.bubble">
  Save this intake as a {when} so every hiring manager at Fernway gets the
  same questions before a req opens.
</Copy>
<Copy k="again.bubble.when">shared skill</Copy>
<Copy k="again.underline">skill</Copy>
<Copy k="again.card.line">
  Interviews the hiring manager on scope, must-haves, level and day-90
  outcomes, follows up on vague answers, and writes the spec in the People
  team’s template.
</Copy>
<Copy k="again.card.shared">Everyone in your organization can view</Copy>
`;export{e as default};