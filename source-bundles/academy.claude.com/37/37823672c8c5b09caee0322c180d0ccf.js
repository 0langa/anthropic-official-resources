var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Thread to decision doc” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    commands, file and folder names, the Slack emoji mark, dates, and
    highlighted terms — keep them where the sentence needs them. */}

<Copy k="title">Thread to decision doc</Copy>
<Copy k="subtitle">
  Reads a thread or email chain and writes a log entry with named owners.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the thread and the chain. Ask for the record, not the
  recap.
</Copy>
<Copy k="menu.category">Productivity</Copy>
<Copy k="prompt">
  Read this Slack thread and the email chain in the folder. Tell me what was
  actually decided, who owns each next step with the date they committed to,
  and what’s still open or contested. Write it as a single decision-log
  entry I can pin: decision, owners, open questions, links back to the
  source messages. No commentary, just the record.
</Copy>

<Copy k="scene2.title">Cowork reads the conversation where it happened</Copy>
<Copy k="scene2.sub">
  Slack thread, email chain, and the running log — separating decision from
  discussion.
</Copy>
<Copy k="work.heading">Running {cmd}</Copy>
<Copy k="step1">Slack · read 87 replies in #product-decisions</Copy>
<Copy k="step2">
  Gmail · pulled 12-message chain “Re: Pricing tiers — final?”
</Copy>
<Copy k="step3">Reading {pdf}</Copy>
<Copy k="step4">
  Comparing positions across both chains — Priya’s Apr 23 reply is the final
  call, Sam’s SSO question never got an answer.
</Copy>
<Copy k="step5">Google Docs · appended entry to decision-log</Copy>
<Copy k="step6">Created {file} (entry {date})</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read the Slack thread</Copy>
<Copy k="prog2">Read the email chain</Copy>
<Copy k="prog3">Separate decision from discussion</Copy>
<Copy k="prog4">Name owners and dates</Copy>
<Copy k="prog5">Append entry to the log</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">A pinnable decision-log entry</Copy>
<Copy k="scene3.sub">
  The decision, named owners with dates, what’s still open, links back to
  the source.
</Copy>
<Copy k="doc.title">Pricing tiers — launch plan</Copy>
<Copy k="doc.decision.label">Decision</Copy>
<Copy k="doc.decision">
  Ship the three-tier pricing (Starter $29 / Team $79 / Scale custom) on
  {when}. Legacy “Pro” customers grandfather at current rate for 12 months.
</Copy>
<Copy k="doc.decision.when">May 12</Copy>
<Copy k="doc.owners.label">Owners</Copy>
<Copy k="owner1">{who} — pricing page copy {due}</Copy>
<Copy k="owner1.who">Priya K</Copy>
<Copy k="owner1.due">Apr 30</Copy>
<Copy k="owner2">{who} — Stripe SKUs + migration script {due}</Copy>
<Copy k="owner2.who">Marcus T</Copy>
<Copy k="owner2.due">May 5</Copy>
<Copy k="owner3">{who} — email to legacy Pro customers {due}</Copy>
<Copy k="owner3.who">Dana L</Copy>
<Copy k="owner3.due">May 1</Copy>
<Copy k="doc.open.label">Open</Copy>
<Copy k="open1">Annual discount 15% vs 20% — Finance to confirm by Apr 29</Copy>
<Copy k="open2">
  Does “Scale” include SSO by default? (Sam raised, no answer in thread)
</Copy>
<Copy k="doc.sources.label">Sources</Copy>
<Copy k="doc.sources">{slack} · {gmail}</Copy>
<Copy k="doc.sources.slack">#product-decisions · Apr 23 thread</Copy>
<Copy k="doc.sources.gmail">Gmail “Re: Pricing tiers — final?”</Copy>
<Copy k="chip.name">Pricing tiers decision log</Copy>
<Copy k="chip.meta">Document · Appended · 31 KB · {folder}</Copy>

<Copy k="scene4.title">Make it run whenever a thread is decided</Copy>
<Copy k="scene4.sub">
  The skill watches your channels and writes the entry the moment {emoji}
  lands.
</Copy>
<Copy k="sched.prompt">
  Weekdays at 5pm, check #product-decisions and #leadership for threads
  marked decided since the last run, run {cmd} on each, and append to
  {file}.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Decision-log capture</Copy>
<Copy k="card.body">
  When a thread gets {emoji} — runs {cmd} against #product-decisions
  and #leadership, and appends the entry to {file} in {folder}.
</Copy>
<Copy k="card.when">When a thread gets {emoji} in watched channels</Copy>

<Copy k="end">
  Every decided thread, the log entry is in the folder before anyone asks
  what was decided.
</Copy>
`;export{e as default};