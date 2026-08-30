var e=`---
kind: widget-copy
---

{/* Hero demo film for the “PRD from a one-pager” use case. Scene text is
    typed on screen character by character, so keep sentences natural at any
    length; {tokens} are filled by the widget with its simulated command and
    file names, and bold lead-ins — keep them where the sentence needs
    them. */}

<Copy k="title">PRD from a one-pager</Copy>
<Copy k="subtitle">
  Interviews you on the problem, reads your folder, and writes the spec.
</Copy>

<Copy k="scene1.title">Describe the spec you need</Copy>
<Copy k="scene1.sub">
  Point at the one-pager and the prior PRD — Cowork picks the right skill from
  the plugin.
</Copy>
<Copy k="prompt">
  Turn the saved-views one-pager into a full PRD. Use our last PRD as the
  format reference — same sections, same depth per requirement. Call out every
  open question and decision that still needs an owner, and keep scope to what
  ships in one quarter.
</Copy>

<Copy k="scene2.title">Cowork reads the folder and drafts in your format</Copy>
<Copy k="scene2.sub">
  The Progress card tracks each step; the new file lands in the same specs
  folder.
</Copy>
<Copy k="work.heading">Reading folder and drafting PRD</Copy>
<Copy k="step1">Reading saved-views-onepager.md</Copy>
<Copy k="step2">Reading PRD-bulk-export.docx</Copy>
<Copy k="step3">Reading {template}</Copy>
<Copy k="step4">Mapping sections against bulk-export depth</Copy>
<Copy k="step5">Writing {file}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the one-pager</Copy>
<Copy k="prog2">Read prior PRD and template</Copy>
<Copy k="prog3">Map sections and depth</Copy>
<Copy k="prog4">Draft requirements and flag open questions</Copy>
<Copy k="prog5">Write PRD to folder</Copy>

<Copy k="scene3.title">A review-ready PRD, open questions flagged</Copy>
<Copy k="scene3.sub">
  Same section order as your last spec — the open-questions table is where the
  review starts.
</Copy>
<Copy k="res1">
  {lead} are lifted from the one-pager and tightened to a single quarter.
  Anything that read as a stretch — cross-workspace sharing, scheduled exports
  — moved to a phased-later section.
</Copy>
<Copy k="res1.lead">Goals and non-goals</Copy>
<Copy k="res2">
  {lead} follow the bulk-export PRD’s depth: each one has a user-facing
  behaviour, acceptance criteria, and edge cases inline. Nine requirements,
  grouped under Create, Manage, and Apply.
</Copy>
<Copy k="res2.lead">Requirements</Copy>
<Copy k="res3">
  {lead} got their own table with an owner column. Six items — the two that
  block kickoff are the permissions model and whether existing ad-hoc filters
  migrate automatically.
</Copy>
<Copy k="res3.lead">Open questions</Copy>
<Copy k="chip.name">Saved Views product requirements</Copy>
<Copy k="chip.meta">Document · DOCX · 18 KB</Copy>

<Copy k="scene4.title">Customize once, then it runs every time</Copy>
<Copy k="scene4.sub">
  Tell Cowork your section order and scoping rule — the skill drafts in your
  template from then on.
</Copy>
<Copy k="sched.prompt">
  Update the {cmd} skill with how we work: follow the section order in
  {template}, always include a Non-goals section and an Open Questions table
  with an owner column, and size scope against a single quarter unless I say
  otherwise.
</Copy>

<Copy k="end">
  Every one-pager lands back as a structured spec with open questions flagged
  for review
</Copy>
`;export{e as default};