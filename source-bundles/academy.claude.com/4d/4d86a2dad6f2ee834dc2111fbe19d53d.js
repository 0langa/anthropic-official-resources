var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Transcript theme extractor” use case. Scene text
    is typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, file and folder names, and highlighted terms — keep them where
    the sentence needs them. */}

<Copy k="title">Transcript theme extractor</Copy>
<Copy k="subtitle">
  Reads call transcripts from a folder and writes a one-page themes brief.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the quarter’s call folder and describe the brief you need.
</Copy>
<Copy k="menu.category">Sales</Copy>
<Copy k="prompt">
  Read every transcript in this folder and cluster what customers are saying
  into themes. For each theme give me the count, the best one-line quote,
  and which accounts said it. Write the output as a one-page themes brief I
  can share with product and marketing.
</Copy>

<Copy k="scene2.title">Cowork reads the whole quarter</Copy>
<Copy k="scene2.sub">
  The skill pulls every transcript, clusters them against your taxonomy, and
  the rail tracks the plan.
</Copy>
<Copy k="work.heading">Running {cmd} on 28 transcripts</Copy>
<Copy k="step1">Gong · pulled 28 Q1 transcripts to {path}</Copy>
<Copy k="step2">Reading {taxonomy}</Copy>
<Copy k="step3">
  Comparing against taxonomy — clustering 28 calls into 7 named themes
</Copy>
<Copy k="step4">Google Drive · saved brief to {folder}</Copy>
<Copy k="step5">Created {brief}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="step.done">Done</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Pull the quarter’s transcripts</Copy>
<Copy k="prog2">Read the theme taxonomy</Copy>
<Copy k="prog3">Cluster calls into themes</Copy>
<Copy k="prog4">Count, quote, attribute</Copy>
<Copy k="prog5">Write the themes brief</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">The one-page themes brief</Copy>
<Copy k="scene3.sub">
  Each theme named, counted, quoted, and tied to the accounts that raised
  it.
</Copy>
<Copy k="theme1.title">Onboarding is the bottleneck</Copy>
<Copy k="theme1.count">11 of 28 calls</Copy>
<Copy k="theme1.quote">
  “We lost two weeks just getting our data connected before anyone saw
  value.”
</Copy>
<Copy k="theme1.accounts">Northwind · Acme · Globex · Initech · +7</Copy>
<Copy k="theme2.title">SSO & SCIM block expansion</Copy>
<Copy k="theme2.count">8 of 28 calls</Copy>
<Copy k="theme2.quote">
  “Security won’t approve a wider rollout until SCIM provisioning is in.”
</Copy>
<Copy k="theme2.accounts">Vandelay · Hooli · Stark Industries · +5</Copy>
<Copy k="theme3.title">Usage pricing is hard to forecast</Copy>
<Copy k="theme3.count">6 of 28 calls</Copy>
<Copy k="theme3.quote">
  “I can’t tell my CFO what next year costs us at this run rate.”
</Copy>
<Copy k="theme3.accounts">Massive Dynamic · Pied Piper · +4</Copy>
<Copy k="chip.name">Customer call themes brief</Copy>
<Copy k="chip.meta">Document · DOCX · 24 KB · {folder}</Copy>

<Copy k="scene4.title">Make it run every quarter</Copy>
<Copy k="scene4.sub">
  Customize the taxonomy once, then schedule it — the brief lands the day
  planning starts.
</Copy>
<Copy k="sched.prompt">
  On the first of every quarter, run {cmd} on the previous quarter’s folder
  under {folder} and write the brief there.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Quarterly call themes</Copy>
<Copy k="card.body">
  Runs {cmd} against the previous quarter’s transcript folder under {folder}
  and writes the one-page brief, with what’s new versus last quarter.
</Copy>
<Copy k="card.when">First of {time}</Copy>
<Copy k="card.when.time">every quarter</Copy>

<Copy k="end">
  Every quarter, the themes brief lands in the folder before planning
  starts.
</Copy>
`;export{e as default};