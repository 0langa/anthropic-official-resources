var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Synthesize user interviews into findings” use
    case. Scene text is typed on screen character by character, so keep
    sentences natural at any length; {tokens} are filled by the widget with
    its simulated commands, folder names, and bold lead-ins — keep them
    where the sentence needs them. */}

<Copy k="title">Synthesize user interviews into findings</Copy>
<Copy k="subtitle">
  Reads every transcript, writes the themed findings doc with attributed
  quotes.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the study folder and describe the synthesis you need.
</Copy>
<Copy k="menu.category">Design</Copy>
<Copy k="prompt">
  Synthesize the interview transcripts into a findings doc — 5 to 7 named
  themes, each backed by verbatim quotes with participant IDs, then list the
  open questions.
</Copy>

<Copy k="scene2.title">Cowork reads every transcript</Copy>
<Copy k="scene2.sub">
  The skill clusters what participants said and the Progress card tracks
  the plan as it runs.
</Copy>
<Copy k="work.heading">Working on research synthesis</Copy>
<Copy k="step1">Reading Airtable research tracker</Copy>
<Copy k="step2">Reading P01-transcript.txt</Copy>
<Copy k="step3">Reading P02-transcript.txt</Copy>
<Copy k="step4">Clustering observations into themes</Copy>
<Copy k="step5">Writing onboarding-findings.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read research tracker</Copy>
<Copy k="prog2">Read interview transcripts</Copy>
<Copy k="prog3">Cluster into named themes</Copy>
<Copy k="prog4">Pull supporting quotes</Copy>
<Copy k="prog5">Write findings to folder</Copy>

<Copy k="scene3.title">Review-ready findings</Copy>
<Copy k="scene3.sub">
  Named themes with verbatim quotes, attributed by participant, saved back
  to the study folder.
</Copy>
<Copy k="finding1">
  {lead} Six of eight participants stalled at the access-request step
  before reaching the product. “I just wanted to see the dashboard, not file
  a ticket to see the dashboard” (P03).
</Copy>
<Copy k="finding1.lead">Permissions feel like a wall.</Copy>
<Copy k="finding2">
  {lead} First-run users could not tell what to do next once they were in.
  “It said get started but there was literally nothing to click” (P07).
</Copy>
<Copy k="finding2.lead">The empty state doesn’t teach.</Copy>
<Copy k="finding3">
  {lead} Do returning users hit the same permissions wall, or is this
  first-session only? Two participants mentioned a workaround the guide
  didn’t probe.
</Copy>
<Copy k="finding3.lead">Open questions.</Copy>
<Copy k="chip.name">Onboarding study findings</Copy>
<Copy k="chip.meta">Document · DOCX · 24 KB</Copy>

<Copy k="scene4.title">Make it run every interview day</Copy>
<Copy k="scene4.sub">
  Customize the format once, then schedule it — the findings update each
  evening as new sessions land.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 6pm, re-run {cmd} on any new transcripts in the study folder
  and note which themes moved.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Rolling research synthesis</Copy>
<Copy k="card.body">
  Runs {cmd} on any new transcripts in {folder} and updates the findings doc
  with which themes moved.
</Copy>
<Copy k="card.when">Weekdays at {time}</Copy>
<Copy k="card.when.time">6 pm</Copy>

<Copy k="end">
  Close the last interview and the themed findings doc is already drafted.
</Copy>
`;export{e as default};