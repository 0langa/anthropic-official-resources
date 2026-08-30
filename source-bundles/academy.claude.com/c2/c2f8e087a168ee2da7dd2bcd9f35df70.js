var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Competitive teardown” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, file and folder names, and highlighted lead-ins — keep them
    where the sentence needs them. */}

<Copy k="title">Competitive teardown and positioning gaps</Copy>
<Copy k="subtitle">
  Reads competitor sites and your docs, then writes a scored feature
  comparison.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the competitive folder and name the competitors you want
  torn down.
</Copy>
<Copy k="prompt">
  Build a competitive teardown of Acme and Northwind against us. Browse
  their product, docs, changelog, pricing page, and recent reviews, pull our
  side from our docs and Figma, and produce a feature and positioning
  matrix. Call out where we clearly win, where we’re exposed, and everything
  they shipped last quarter that we haven’t answered yet.
</Copy>

<Copy k="scene2.title">Cowork researches both sides</Copy>
<Copy k="scene2.sub">
  It browses competitor sites, pulls your side from docs and Figma, and
  checks gaps against Linear.
</Copy>
<Copy k="work.heading">Running {cmd} against Acme and Northwind</Copy>
<Copy k="step1">
  Browsing acme.com + northwind.io — changelog, pricing, G2 reviews
</Copy>
<Copy k="step1.badge">18 pages</Copy>
<Copy k="step2">
  Google Workspace · read our-product-overview + positioning-one-pager-q1
</Copy>
<Copy k="step3">Figma · pulled 14 frames from Product / Onboarding v3</Copy>
<Copy k="step4">Linear · checked 23 in-flight issues in Roadmap Q2</Copy>
<Copy k="step5">
  Comparing against our feature set and scoring win / parity / exposed
</Copy>
<Copy k="step6">Created {file}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Browse competitor product, docs, pricing</Copy>
<Copy k="prog2">Pull our side from docs and Figma</Copy>
<Copy k="prog3">Check gaps against Linear</Copy>
<Copy k="prog4">Build the feature matrix</Copy>
<Copy k="prog5">Write win / exposed / unanswered</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The matrix, with the calls made</Copy>
<Copy k="scene3.sub">
  Where you win, where you’re exposed, and what they shipped that you
  haven’t answered — written from real sources.
</Copy>
<Copy k="res1.tag">Where we win</Copy>
<Copy k="res1.body">
  Enterprise auth: we ship SSO + SCIM; Acme is SAML-only, Northwind has
  neither. API quota is 10× both. Audit log goes back 18 months to their 30
  days.
</Copy>
<Copy k="res2.tag">Where we’re exposed</Copy>
<Copy k="res2.body">
  Acme ships 47 starter templates to our 12. Northwind’s free tier seats 3
  users to our 1. Both beat us on time-to-first-project in G2 reviews.
</Copy>
<Copy k="res3.tag">Unanswered last quarter</Copy>
<Copy k="res3.body">
  Acme: AI onboarding assistant (Feb 11). Northwind: Slack-native approvals
  (Mar 3). Acme: usage-based pricing tier (Mar 28). None on our Q2 roadmap;
  PROD-1847 covers templates only.
</Copy>
<Copy k="chip.name">Feature matrix — Acme and Northwind</Copy>
<Copy k="chip.meta">
  Document · DOCX · 42 KB · 31 rows scored across Acme / Northwind / Us
</Copy>

<Copy k="scene4.title">Refresh it every quarter</Copy>
<Copy k="scene4.sub">
  Schedule the customized skill and the teardown rewrites itself on the
  first Monday.
</Copy>
<Copy k="sched.prompt">
  Run {cmd} on the first Monday of each quarter and write the matrix and gap
  brief to the quarter’s folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Quarterly competitive teardown</Copy>
<Copy k="card.body">
  Runs {cmd} against the standing competitor set and writes the refreshed
  matrix and unanswered-ships list to the quarter’s folder.
</Copy>
<Copy k="card.when">On the {day}, quarterly</Copy>
<Copy k="card.when.day">first Monday</Copy>

<Copy k="end">
  Every quarter, the updated competitor matrix is in the folder before your
  planning review.
</Copy>
`;export{e as default};