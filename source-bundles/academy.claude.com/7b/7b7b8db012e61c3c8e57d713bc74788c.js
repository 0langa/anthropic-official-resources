var e=`---
kind: widget-copy
---

{/* Film for the “Turn brand guidelines into a skill” use case. \`line.*\` are
    the one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Turn brand guidelines into a skill</Copy>
<Copy k="sub">
  You want every team’s drafts to follow the brand without your review.
</Copy>

<Copy k="line.ask">
  Point the Design plugin’s [[design system skill]] at your brand folder and
  ask for a skill.
</Copy>
<Copy k="line.does">
  Claude reads the guidelines, the tokens file and the library before it
  writes a rule.
</Copy>
<Copy k="line.question">
  Claude asks you first wherever your judgment is needed.
</Copy>
<Copy k="line.get">
  Claude tells you what it built the skill from, then shows [[one test run]].
</Copy>
<Copy k="line.note1">
  An off-brand request comes back corrected, with the rule named.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">the rule named</Copy>
<Copy k="line.note2">
  Every refusal gives a reason and where the rule is written.
</Copy>
<Copy k="line.again">
  Share the skill with the workspace so every team drafts from the same rules.
</Copy>
<Copy k="line.close">
  Anyone can draft on brand, and you update the rules in one place.
</Copy>

<Copy k="attachment1.title">Brand / System-Source</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">brand-guidelines-2026.pdf</Copy>
<Copy k="attachment2.sub">82 pages</Copy>
<Copy k="attachment2.tag">PDF</Copy>
<Copy k="attachment3.title">tokens.json</Copy>
<Copy k="attachment3.sub">24 tokens</Copy>
<Copy k="attachment3.tag">JSON</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Turn the brand docs in this folder into [[a shared skill called /on-brand]].
  The skill should enforce our color tokens, typography, spacing, and voice
  rules on any content or UI it generates, and [[refuse off-brand patterns
  with a short reason]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">brand-guidelines-2026.pdf, 82 pages</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">voice-and-tone.docx</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">tokens.json, 24 tokens</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">Marlow / Brand 2026, 64 variables</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">Brand hub — Do and don’t gallery</Copy>
<Copy k="source6.verb">Checked</Copy>
<Copy k="source6.text">guidelines against tokens and library</Copy>

<Copy k="verb1">Reading brand-guidelines-2026.pdf</Copy>
<Copy k="verb2">Reading voice-and-tone.docx</Copy>
<Copy k="verb3">Reading tokens.json</Copy>
<Copy k="verb4">Reading Figma variables</Copy>
<Copy k="verb5">Reading the Notion brand hub</Copy>
<Copy k="verb6">Checking guidelines against tokens</Copy>
<Copy k="verb7">Waiting for you</Copy>
<Copy k="verb8">Writing on-brand / SKILL.md</Copy>
<Copy k="verb9">Running it once on the banner request</Copy>

<Copy k="question.title">
  Which Ember color is right: tokens.json or the PDF?
</Copy>
<Copy k="question.option1">tokens.json and Figma, what ships</Copy>
<Copy k="question.option2">The value in the PDF</Copy>
<Copy k="question.answer">tokens.json and Figma, that is what ships.</Copy>

<Copy k="reply.did1">turned the 82-page guidelines</Copy>
<Copy k="reply.did2">into /on-brand</Copy>
<Copy k="reply.did3">as you chose</Copy>
<Copy k="reply.did4">Here it is run once</Copy>
<Copy k="file1.meta">Skill</Copy>

<Copy k="again.bubble">
  Save /on-brand and {when}, view only; Brand design keeps edit rights.
</Copy>
<Copy k="again.bubble.when">share it with everyone at Marlow Home</Copy>
<Copy k="again.underline">skill</Copy>
<Copy k="again.card.line">
  Applies Marlow Home color tokens, type, spacing and voice to anything Claude
  writes or lays out, and refuses off-brand requests with the rule.
</Copy>
<Copy k="again.card.shared">Everyone in your organization can view</Copy>
`;export{e as default};