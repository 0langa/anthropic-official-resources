var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Legal research memo” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, folder paths, bold lead-ins, italic case names, and a line
    break — keep them where the sentence needs them. */}

<Copy k="title">Legal research</Copy>
<Copy k="subtitle">
  Surfaces the relevant case law and regulatory guidance, then drafts a
  structured memo with citations.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  State the question and the format you need — the skill handles where to
  look.
</Copy>
<Copy k="menu.category">Personal skill</Copy>
<Copy k="prompt">
  Research this question. Surface the relevant case law and regulatory
  guidance via Thomson Reuters and draft a research memo: question
  presented, short answer, the discussion grouped by authority, and a list
  of open issues. Cite every proposition to the source you relied on.
</Copy>

<Copy k="scene2.title">Cowork surfaces and reads the authority</Copy>
<Copy k="scene2.sub">
  Thomson Reuters for primary sources, your prior memos for the format,
  every proposition cited.
</Copy>
<Copy k="work.heading">Running {cmd}</Copy>
<Copy k="step1">Thomson Reuters · pulled 14 relevant authorities</Copy>
<Copy k="step2">
  Thomson Reuters · pulled regulatory guidance and secondary sources
</Copy>
<Copy k="step3">iManage · read 3 prior memos for house format</Copy>
<Copy k="step4">Grouping discussion by authority and weight</Copy>
<Copy k="step5">
  Microsoft 365 · wrote research-memo-draft.docx with citations
</Copy>
<Copy k="step6">Created research-memo-2026-05-15.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Surface relevant authorities</Copy>
<Copy k="prog2">Read prior memos for format</Copy>
<Copy k="prog3">Draft memo grouped by authority</Copy>
<Copy k="prog4">Write memo to folder</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">A structured memo, every proposition cited</Copy>
<Copy k="scene3.sub">
  Question presented, short answer, the discussion grouped by authority —
  in your house format.
</Copy>
<Copy k="memo.qp.label">Question Presented</Copy>
<Copy k="memo.qp">
  Whether a California court is likely to enforce the post-employment
  non-compete in §7.2 of the Acme employment agreement against a former
  engineer now resident in Texas.
</Copy>
<Copy k="memo.sa.label">Short Answer</Copy>
<Copy k="memo.sa">
  {lead} California courts will refuse to enforce §7.2 under Bus. & Prof.
  Code §16600 regardless of the Texas choice-of-law clause. {case1}, 44
  Cal. 4th 937 (2008); {case2}, 61 Cal. App. 4th 881 (1998). The narrow
  trade-secret exception is unlikely to apply on these facts. See
  Discussion §II.
</Copy>
<Copy k="memo.sa.lead">No.</Copy>
<Copy k="memo.sa.case1">Edwards v. Arthur Andersen LLP</Copy>
<Copy k="memo.sa.case2">Application Grp., Inc. v. Hunter Grp., Inc.</Copy>
<Copy k="chip.name">Research memo — non-compete enforceability</Copy>
<Copy k="chip.meta">Document · DOCX · 28 KB · written to {folder}</Copy>

<Copy k="scene4.title">Clear the research queue every morning</Copy>
<Copy k="scene4.sub">
  Questions land in the queue folder; the cited memo is waiting before you
  open the matter.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 7am, run {cmd} on each new question in {queue} and write the
  cited memo to the requesting matter folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Research-queue memos</Copy>
<Copy k="card.body">
  Weekday mornings, runs {cmd} on each new question in {queue} and writes
  the cited memo to the requesting matter folder.
</Copy>
<Copy k="card.when">Weekdays at {time} — checks {queue} for new questions</Copy>
<Copy k="card.when.time">7 am</Copy>

<Copy k="end">
  A structured memo with citations, not a list of links{br}— drafted before
  the question reaches the matter.
</Copy>
`;export{e as default};