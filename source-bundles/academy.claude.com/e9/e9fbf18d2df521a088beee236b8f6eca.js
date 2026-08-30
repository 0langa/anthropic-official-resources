var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Create on-brand content” use case. Scene text is
    typed on screen character by character, so keep sentences natural at any
    length; {tokens} are filled by the widget with its simulated commands,
    folder names, and bold lead-ins — keep them where the sentence needs
    them. */}

<Copy k="title">Create on-brand content</Copy>
<Copy k="subtitle">
  Reads the brief and brand guide, drafts blog, landing page, emails, and
  ads.
</Copy>

<Copy k="scene1.title">Order the whole content set</Copy>
<Copy k="scene1.sub">
  Point Cowork at the campaign folder and name every asset in one prompt.
</Copy>
<Copy k="menu.category">Marketing</Copy>
<Copy k="prompt">
  Using the campaign brief and our brand guidelines, draft the content set
  for this campaign: a blog post, the landing page copy, a three-email
  sequence, and ad copy in three lengths. Hold our voice and the approved
  messaging exactly, and note anywhere the brief was thin so I know what to
  fill.
</Copy>

<Copy k="scene2.title">Cowork writes from your brand sources</Copy>
<Copy k="scene2.sub">
  Reads the brief and guidelines, pulls the approved messaging, and drafts
  every asset against them.
</Copy>
<Copy k="work.heading">Running {cmd}</Copy>
<Copy k="step1">Reading campaign-brief.docx</Copy>
<Copy k="step2">Reading brand-guidelines-2026.pdf</Copy>
<Copy k="step3">Notion · pulled “Spring Launch — approved messaging”</Copy>
<Copy k="step4">Comparing against voice rules and top-performing examples</Copy>
<Copy k="step5">HubSpot · staged 3-email sequence in Spring-Launch campaign</Copy>
<Copy k="step6">Created spring-launch-content-set.docx</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read brief and guidelines</Copy>
<Copy k="prog2">Pull approved messaging</Copy>
<Copy k="prog3">Hold voice and patterns</Copy>
<Copy k="prog4">Stage emails in HubSpot</Copy>
<Copy k="prog5">Write content set to folder</Copy>
<Copy k="context.title">Context</Copy>

<Copy k="scene3.title">The full content set, in your voice</Copy>
<Copy k="scene3.sub">
  Blog, landing page, three emails, and ad copy — drafted from the brief,
  ready for review.
</Copy>
<Copy k="res.blog.label">Blog post</Copy>
<Copy k="res.blog.body">
  “The Spring Drop: Less Setup, More Shipped” — 1,180 words. Opens on a PM’s
  Tuesday morning, lands the three-step proof by paragraph four, closes on
  the approved line.
</Copy>
<Copy k="res.landing.label">Landing page</Copy>
<Copy k="res.landing.body">
  H1 “Built for the work between meetings.” Three benefit blocks,
  social-proof row, CTA “Start free — keep your setup.”
</Copy>
<Copy k="res.email.label">Email sequence</Copy>
{/* The numbered subject-line list; {a} {b} {c} are the subjects below. */}
<Copy k="res.email.subjects">1 “{a}” · 2 “{b}” · 3 “{c}”</Copy>
<Copy k="res.email.subjects.a">You asked for fewer tabs</Copy>
<Copy k="res.email.subjects.b">Three teams, one sprint, zero handoff docs</Copy>
<Copy k="res.email.subjects.c">Your trial ends Friday — here’s what to keep</Copy>
<Copy k="res.ads.label">Ad copy</Copy>
<Copy k="res.ads.body">
  30 / 90 / 150-character variants, each ending on “Make the busywork
  optional.”
</Copy>
<Copy k="res.gaps">
  {lead} which pricing tier the landing page leads with, and whether the
  comparison block names competitors directly.
</Copy>
<Copy k="res.gaps.lead">Brief was thin on:</Copy>
<Copy k="chip.name">Spring Launch content set</Copy>
<Copy k="chip.meta">
  Document · DOCX · blog · landing-page · 3 emails · ad-copy · 41 KB
</Copy>

<Copy k="scene4.title">Run it on every approved brief</Copy>
<Copy k="scene4.sub">
  A brief lands in the {folder} folder, the full set drafts itself into a
  campaign subfolder.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 9am -- check the {folder} folder for new campaign briefs added
  since the last run, run {cmd} on each, and write the full set to a
  campaign subfolder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">On-brand content set</Copy>
<Copy k="card.body">
  Every weekday at 9am, checks {folder} for new briefs and runs {cmd} on
  each, writing the blog, landing page, emails, and ad copy to a campaign
  subfolder.
</Copy>
<Copy k="card.when">Weekdays at 9am</Copy>

<Copy k="end">
  Every approved brief becomes a complete content set, in your voice, saved
  to the campaign folder.
</Copy>
`;export{e as default};