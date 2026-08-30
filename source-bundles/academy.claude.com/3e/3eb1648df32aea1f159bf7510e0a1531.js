var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Repurpose a webinar” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    command, skill, folder and file names — keep them where the sentence
    needs them. */}

<Copy k="title">Repurpose a webinar</Copy>
<Copy k="subtitle">
  Reads the transcript and slides, then drafts the blog post, thread, and
  social posts.
</Copy>

<Copy k="scene1.title">Describe the formats you need</Copy>
<Copy k="scene1.sub">
  Point at the transcript folder and name each channel — the skill writes
  for all of them.
</Copy>
<Copy k="prompt">
  Read the webinar transcript and slides in this folder and draft a blog
  post, a LinkedIn thread, and three short social posts. Match the voice of
  our recent posts on HubSpot, and lead each piece with the strongest point
  from the talk rather than a recap of the agenda.
</Copy>

<Copy k="scene2.title">Cowork reads, matches voice, drafts</Copy>
<Copy k="scene2.sub">
  The folder, the HubSpot connector, and {cmd} together.
</Copy>
<Copy k="work.heading">Working…</Copy>
<Copy k="work.done">Read 4 files, ran {cmd}</Copy>
<Copy k="step1">{transcript}</Copy>
<Copy k="step2">{slides}</Copy>
<Copy k="step3">
  Reading the three most recent HubSpot posts to match sentence length and
  structure.
</Copy>
<Copy k="step4">{skill}</Copy>
<Copy k="step5">Created {file}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read transcript and slides</Copy>
<Copy k="prog2">Match voice from HubSpot posts</Copy>
<Copy k="prog3">Draft blog, thread, and social</Copy>
<Copy k="prog4">Write drafts to the folder</Copy>

<Copy k="scene3.title">One transcript, every channel</Copy>
<Copy k="scene3.sub">
  Each piece leads with the strongest point — not a recap of the agenda.
</Copy>
<Copy k="result.intro">
  {lead} {file} — blog post, LinkedIn thread, and three social posts written
  to the folder.
</Copy>
<Copy k="result.intro.lead">Drafted from</Copy>
<Copy k="draft1.tag">Blog · 1,040 words</Copy>
<Copy k="draft1.line">
  The integration question nobody asks until month two
</Copy>
<Copy k="draft2.tag">LinkedIn thread · 7 parts</Copy>
<Copy k="draft2.line">
  1/ We ran the platform overview webinar last week. The question that kept
  coming up wasn’t about features.
</Copy>
<Copy k="draft3.tag">Social · 3 posts</Copy>
<Copy k="draft3.line">
  “Integration depth beats integration count.” Full session on demand →
</Copy>
<Copy k="chip.name">Platform overview content drafts</Copy>
<Copy k="chip.meta">Document · DOCX · 18 KB</Copy>

<Copy k="scene4.title">Make it run every other Friday</Copy>
<Copy k="scene4.sub">
  Webinars run on a calendar — schedule the skill and the drafts land the
  morning after.
</Copy>
<Copy k="sched.prompt">
  Run {cmd} every other Friday at 9am against the newest transcript in the
  {folder} folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Webinar repurpose drafts</Copy>
<Copy k="card.body">
  Runs {cmd} against the newest transcript in {folder} and writes the blog,
  thread, and social drafts to the same folder.
</Copy>
<Copy k="card.when">Every other {day} at 9am</Copy>
<Copy k="card.when.day">Friday</Copy>

<Copy k="end">
  Every webinar becomes a blog, a thread, and social — in your voice, the
  morning after.
</Copy>
`;export{e as default};