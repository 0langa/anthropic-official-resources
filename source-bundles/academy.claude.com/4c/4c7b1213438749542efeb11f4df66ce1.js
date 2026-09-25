var e=`---
kind: widget-copy
---

{/* Film for the “Build a campaign brief” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Build a campaign brief</Copy>
<Copy k="sub">
  You have rough notes from the planning call and need a campaign brief.
</Copy>

<Copy k="line.ask">
  With the Marketing plugin’s [[campaign plan skill]], name sections, and ask
  for a brief and deck.
</Copy>
<Copy k="line.does">
  Claude reads the notes first, then your template, brand guide and planning
  page.
</Copy>
<Copy k="line.question">
  Claude checks with you before it decides anything that is your call.
</Copy>
<Copy k="line.get">
  Claude tells you what it wrote, then gives you the [[brief and deck]].
</Copy>
<Copy k="line.note1">
  The brief follows your template and leads with your angle.
</Copy>
<Copy k="line.note2">
  The brief and the deck show the same budget and launch date.
</Copy>
<Copy k="line.again">
  You can schedule the same run for new notes files in your campaigns folder.
</Copy>
<Copy k="line.close">
  You get a brief and a matching deck built around the message you chose.
</Copy>

<Copy k="attachment1.title">Campaigns / Shifts-launch</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">brief-template.docx</Copy>
<Copy k="attachment2.sub">Your sections</Copy>
<Copy k="attachment2.tag">DOCX</Copy>
<Copy k="attachment3.title">brand-guidelines-2026.pdf</Copy>
<Copy k="attachment3.sub">Voice and marks</Copy>
<Copy k="attachment3.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Turn the strategy notes into [[a campaign brief]]: objective, audience, key
  message, channel plan, timeline, and success metrics. [[Offer three angles
  before you write.]] Then [[build a kickoff deck from the brief]]. Keep the
  voice consistent with our brand guidelines.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">strategy-notes.docx</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">brief-template.docx</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">brand-guidelines-2026.pdf</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">Shifts launch planning</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">last quarter’s campaign brief</Copy>

<Copy k="verb1">Reading strategy-notes.docx</Copy>
<Copy k="verb2">Reading brief-template.docx</Copy>
<Copy k="verb3">Reading brand-guidelines-2026.pdf</Copy>
<Copy k="verb4">Reading the Notion planning page</Copy>
<Copy k="verb5">Reading last quarter’s brief</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Writing the brief</Copy>
<Copy k="verb8">Building the kickoff deck</Copy>

<Copy k="question.title">Which message should the campaign lead with?</Copy>
<Copy k="question.option1">Hours go straight to payroll</Copy>
<Copy k="question.option2">Fair, predictable schedules</Copy>
<Copy k="question.answer">Lead with hours straight to payroll.</Copy>

<Copy k="reply.did1">turned your planning notes into the brief</Copy>
<Copy k="reply.did2">in your template’s six sections</Copy>
<Copy k="reply.did3">angle you picked</Copy>
<Copy k="reply.did4">read the same in both files</Copy>
<Copy k="reply.text">
  I turned your planning notes into the brief in your template’s six sections,
  led by the hours-to-payroll angle you picked, and built the eight-slide
  kickoff deck from it. The 6 October launch, the $240K budget and the
  1,500-workspace target read the same in both files.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Presentation</Copy>

<Copy k="again.bubble">
  Run this {when}: if there is a new notes file in Campaigns, run
  /campaign-plan on it and save a brief and kickoff deck to a subfolder named
  for the campaign.
</Copy>
<Copy k="again.bubble.when">every weekday morning</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Campaign brief from new notes</Copy>
<Copy k="again.card.cadence">Weekdays at 9:00 AM</Copy>
<Copy k="again.out1">Drafts the brief in your template</Copy>
<Copy k="again.out2">Builds the kickoff deck from it</Copy>
<Copy k="again.out3">Lists the lead angles</Copy>
<Copy k="again.out3.em">for you to choose</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 3b9106fcea5d5a29 */}
<Copy k="widget.description">
  Film: the user turns rough planning-call notes into a formatted campaign
  brief and matching kickoff deck using Cowork with a marketing skill. The
  user attaches a working folder with the notes, a brief template, and brand
  guidelines, then asks Claude to produce a brief covering objective,
  audience, key message, channel plan, timeline, and success metrics, and to
  offer several possible lead angles before writing. Claude reads the source
  documents, checks with the user on which messaging angle to lead with since
  that choice is the user's call, then writes the brief in the template's
  structure and builds a deck from it, keeping figures like budget and launch
  date consistent across both files. It closes by showing how the same
  workflow can be scheduled to run automatically whenever new notes appear.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to turn rough planning-call notes into a
  formatted campaign brief and matching kickoff deck, choosing a lead
  messaging angle and keeping figures consistent across both files.
</Copy>
`;export{e as default};