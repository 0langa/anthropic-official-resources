var e=`---
kind: widget-copy
---

{/* Film for the “Repurpose content across channels” use case. \`line.*\` are
    the one sentence shown per chapter; a phrase in [[double brackets]] is the
    part the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Repurpose content across channels</Copy>
<Copy k="sub">
  You have one webinar talk and each channel needs its own version of it.
</Copy>

<Copy k="line.ask">
  Using the Marketing plugin’s [[draft content skill]], name each format and
  put the strongest point first.
</Copy>
<Copy k="line.does">
  Claude reads the transcript, slides and questions, then your voice guide and
  recent posts.
</Copy>
<Copy k="line.question">
  Claude asks you first wherever your judgment is needed.
</Copy>
<Copy k="line.get">
  Claude tells you what it wrote, then gives you the [[post and the social
  drafts]].
</Copy>
<Copy k="line.note1">
  The post leads with the point you chose and cites the chart’s source.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">source</Copy>
<Copy k="line.note2">
  The thread opens on the same line, with three short posts under it.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">same line</Copy>
<Copy k="line.again">
  Schedule it for Friday morning, and the drafts from that week’s webinar are
  in its folder.
</Copy>
<Copy k="line.close">
  One talk becomes a draft for every channel, in your voice.
</Copy>

<Copy k="attachment1.title">Webinars / aug-beyond-connector-count</Copy>
<Copy k="attachment1.sub">5 files</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">beyond-connector-count-transcript.txt</Copy>
<Copy k="attachment2.sub">58 minutes</Copy>
<Copy k="attachment2.tag">TXT</Copy>
<Copy k="attachment3.title">brand-voice-guide.pdf</Copy>
<Copy k="attachment3.sub">House voice</Copy>
<Copy k="attachment3.tag">PDF</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Draft a blog post, a LinkedIn thread and three short social posts from this
  webinar. [[Match the voice of our recent posts]] and [[lead each piece with
  the strongest point]] from the talk, not a recap of the agenda.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">beyond-connector-count-transcript.txt, 58 min</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">beyond-connector-count-slides.pdf, 24 slides</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">attendee-questions.txt, 47 questions</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">brand-voice-guide.pdf</Copy>
<Copy k="source5.verb">Read</Copy>
<Copy k="source5.text">recent-posts, three published posts</Copy>
<Copy k="source6.verb">Read</Copy>
<Copy k="source6.text">Content calendar, September</Copy>

<Copy k="verb1">Reading the transcript</Copy>
<Copy k="verb2">Reading the slides</Copy>
<Copy k="verb3">Reading attendee questions</Copy>
<Copy k="verb4">Reading the voice guide</Copy>
<Copy k="verb5">Reading recent posts</Copy>
<Copy k="verb6">Reading the content calendar</Copy>
<Copy k="verb7">Waiting for you</Copy>
<Copy k="verb8">Writing the drafts to the folder</Copy>

<Copy k="question.title">
  Which point from the talk should lead every piece?
</Copy>
<Copy k="question.option1">Six deep integrations outran forty</Copy>
<Copy k="question.option2">Rollouts stall in month two</Copy>
<Copy k="question.option3">Admins decide what survives renewal</Copy>
<Copy k="question.answer">Six deep integrations outran forty.</Copy>

<Copy k="reply.did1">read the 58-minute transcript</Copy>
<Copy k="reply.did2">and your voice guide</Copy>
<Copy k="reply.did3">opens on the point you picked</Copy>
<Copy k="reply.did4">needs his sign-off</Copy>
<Copy k="reply.text">
  I read the 58-minute transcript, the slides, the 47 attendee questions and
  your voice guide, and wrote the blog post, the LinkedIn thread and three
  short posts to the webinar folder. Each piece opens on the point you picked,
  and Jonas’s quote needs his sign-off before anything goes out.
</Copy>
<Copy k="file1.meta">Document</Copy>
<Copy k="file2.meta">Document</Copy>

<Copy k="again.bubble">
  Run this {when}: find the newest transcript in Webinars, follow the voice
  guide, and write the post and social drafts to that webinar’s folder. If the
  drafts are already there, skip the run and tell me.
</Copy>
<Copy k="again.bubble.when">every Friday at 9am</Copy>
<Copy k="again.underline">Schedule</Copy>
<Copy k="again.card.title">Webinar repurpose drafts</Copy>
<Copy k="again.card.cadence">Fridays at 9:00 AM</Copy>
<Copy k="again.out1">Finds the newest transcript in Webinars</Copy>
<Copy k="again.out2">Drafts each format with your voice guide</Copy>
<Copy k="again.out3">
  Writes the post and social drafts to that webinar’s folder
</Copy>
<Copy k="again.out3.em">for you to review</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 1051ac3500db7306 */}
<Copy k="widget.description">
  Film: a self-playing demonstration of using Claude to turn one webinar
  recording into a blog post, a LinkedIn thread, and short social posts, each
  matching the team's brand voice. The user names the formats and asks Claude
  to lead with the talk's strongest point rather than recapping the agenda.
  Claude reads the transcript, slides, attendee questions, the brand voice
  guide, and recent posts, asks the user which point should lead, then writes
  the drafts into a shared folder, flagging that one quote still needs
  sign-off before publishing. The film closes by showing how the same task can
  be scheduled to run automatically after future webinars. It teaches how to
  describe a repurposing task, point Claude at source and reference material,
  and get consistent multi-channel drafts from a single piece of content.
</Copy>
<Copy k="widget.summary">
  Film: the user asks Claude to turn a webinar transcript and slides into a
  blog post, LinkedIn thread, and short social posts in the team's voice.
  Claude reads the source material, checks which point should lead, and drafts
  all formats, showing how to schedule the task for future webinars.
</Copy>
`;export{e as default};