var e=`---
kind: widget-copy
---

{/* Film for the “Create on-brand content” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Create on-brand content</Copy>
<Copy k="sub">
  You have a campaign brief and need every piece drafted in the brand voice.
</Copy>

<Copy k="line.ask">
  Using the Marketing plugin’s [[draft content skill]], list each piece and
  make the brand guide binding.
</Copy>
<Copy k="line.does">
  Claude reads the brief, the brand guide, your best past pieces and the
  approved messaging.
</Copy>
<Copy k="line.question">
  Claude reads the brief, the brand guide, your best past pieces and the
  approved messaging.
</Copy>
<Copy k="line.get">
  You get the [[drafts]], with what Claude drafted and flagged at the top.
</Copy>
<Copy k="line.note1">Your guide’s approved lines show up word for word.</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">word for word</Copy>
<Copy k="line.note2">
  Claude marks a gap where the brief was thin, instead of inventing.
</Copy>
<Copy k="line.again">
  Schedule it, and every new brief in the folder gets a full set of drafts.
</Copy>
<Copy k="line.close">
  Every piece is drafted in the brand voice, with the gaps marked for you.
</Copy>

<Copy k="attachment1.title">Content / Spring-Launch</Copy>
<Copy k="attachment1.sub">3 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">brand-guidelines-2026.pdf</Copy>
<Copy k="attachment2.sub">Voice and messaging</Copy>
<Copy k="attachment2.tag">PDF</Copy>
<Copy k="attachment3.title">campaign-brief.docx</Copy>
<Copy k="attachment3.sub">The brief</Copy>
<Copy k="attachment3.tag">DOCX</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Draft the content set for this campaign: a blog post, landing page copy, a
  three-email sequence, and ad copy in three lengths. [[Hold our voice and
  approved messaging exactly]], and [[note anywhere the brief was thin]].
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">campaign-brief.docx</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">brand-guidelines-2026.pdf: voice, messaging, CTAs</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">top-performing-examples.docx, 3 pieces</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">Spring launch, approved messaging</Copy>

<Copy k="verb1">Reading the campaign brief</Copy>
<Copy k="verb2">Reading the brand guide</Copy>
<Copy k="verb3">Reading your best past pieces</Copy>
<Copy k="verb4">Reading the approved messaging</Copy>
<Copy k="verb5">Writing five files to drafts</Copy>

<Copy k="reply.did1">drafted the full set from the brief</Copy>
<Copy k="reply.did2">in the guide’s voice</Copy>
<Copy k="reply.did3">approved lines word for word</Copy>
<Copy k="reply.did4">thin in three places, marked in yellow</Copy>
<Copy k="reply.text">
  I drafted the full set from the brief in the guide’s voice, approved lines
  word for word: blog post, landing page, three emails and nine ad variants,
  five files in Spring-Launch/drafts. The brief was thin in three places,
  marked in yellow: the trial-end offer, which plan leads, and naming Calder.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: check Content for new briefs and run /draft-content on each
  against the brand guide, writing the set and a notes file of gaps to a
  campaign subfolder.
</Copy>
<Copy k="again.bubble.when">every weekday at 9am</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">On-brand content set</Copy>
<Copy k="again.card.cadence">Weekdays at 9:00 AM</Copy>
<Copy k="again.out1">Drafts a full set for each new brief in Content</Copy>
<Copy k="again.out2">Checks voice against the brand guide</Copy>
<Copy k="again.out3">Lists the gaps</Copy>
<Copy k="again.out3.em">for you to fill</Copy>
`;export{e as default};