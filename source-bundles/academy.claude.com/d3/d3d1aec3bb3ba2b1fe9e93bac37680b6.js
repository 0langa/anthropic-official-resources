var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Prep call look-ahead” use case. Scene text is
    typed on screen character by character, so keep sentences natural at
    any length; {tokens} are filled by the widget with its simulated
    command, folder and file names, and bold lead-ins — keep them where the
    sentence needs them. Weekday and date abbreviations (Mon Apr 27, Thu
    2:00) are the briefing’s own shorthand and stay short. */}

<Copy k="title">Prep call look-ahead</Copy>
<Copy k="subtitle">
  Reads your calendar, Slack, and email, then writes a briefing for every
  meeting.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the Week-of folder and describe the briefing you want.
</Copy>
<Copy k="prompt">
  Look at my calendar for next week. For every meeting I’m in, pull the
  context: the last time we met, related Slack threads, any docs attached or
  mentioned, and open items I owe that person. Draft a one-paragraph agenda
  for each meeting and flag the three I most need to prep for. Write it all to
  a single week-ahead doc I can read Sunday night.
</Copy>

<Copy k="scene2.title">Cowork gathers the context</Copy>
<Copy k="scene2.sub">
  Calendar, Slack, Gmail, and Drive fill in the back-story for every meeting
  on the list.
</Copy>
<Copy k="work.heading">Running {cmd}</Copy>
<Copy k="step1">Google Calendar · read 11 meetings, Mon Apr 27 – Fri May 1</Copy>
<Copy k="step2">Slack · searched threads with 8 attendees across 5 channels</Copy>
<Copy k="step3">Gmail · pulled open-loop emails with Priya, Marcus, Dana</Copy>
<Copy k="step4">Google Drive · opened 6 docs attached to invites</Copy>
<Copy k="step5">Comparing against {carryover} to rank prep</Copy>
<Copy k="step6">Created {file}</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read next week’s calendar</Copy>
<Copy k="prog2">Pull Slack, email, docs per meeting</Copy>
<Copy k="prog3">Draft an agenda for each</Copy>
<Copy k="prog4">Flag the three to prep</Copy>
<Copy k="prog5">Write {file}</Copy>
<Copy k="context.title">Context</Copy>
<Copy k="context.connectors">Connectors</Copy>

<Copy k="scene3.title">Your week, briefed</Copy>
<Copy k="scene3.sub">
  Every meeting has an agenda. The three that need real prep are called out
  at the top.
</Copy>
<Copy k="doc.title">Week of Mon Apr 27</Copy>
<Copy k="doc.meta">11 meetings · 3 flagged</Copy>
<Copy k="flags.title">Prep first</Copy>
<Copy k="flag1">
  {lead} — Thu 2:00 · Priya Desai. Contract is 38% over last year’s seat
  count; her redlines from Friday are still unopened in your inbox.
</Copy>
<Copy k="flag1.lead">Northwind renewal</Copy>
<Copy k="flag2">
  {lead} — Mon 9:30 · your directs. Q2 headcount asks are due; Marcus and
  Elena both raised blockers in #team-leads on Thursday.
</Copy>
<Copy k="flag2.lead">Staff meeting</Copy>
<Copy k="flag3">
  {lead} — Wed 11:00 · Dana Kim. You owe her the copy feedback you promised
  on Apr 14.
</Copy>
<Copy k="flag3.lead">Onboarding v3 design review</Copy>
<Copy k="agenda.meta">Mon 3:00 — Roadmap sync · Platform (Tomás, Ana)</Copy>
<Copy k="agenda.body">
  Last met Apr 14; you agreed to bring the API rate-limit decision.
  The #platform-roadmap thread has their updated proposal (12 replies, last
  Wed) and they attached {doc} to the invite. Agenda: confirm the rate-limit
  tier, ask whether May 15 still holds, hand the SSO question back to Ana.
</Copy>
<Copy k="agenda.more">+ agendas for 8 more meetings below</Copy>
<Copy k="chip.name">Week-ahead brief with agendas</Copy>
<Copy k="chip.meta">Document · Markdown · 9 KB · {folder}</Copy>

<Copy k="scene4.title">Run it every Sunday</Copy>
<Copy k="scene4.sub">
  Schedule the skill once and the briefing is waiting before the week starts.
</Copy>
<Copy k="sched.prompt">
  Run {cmd} every Sunday at 5:00pm and write the briefing to a new Week-of
  folder under {folder}.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Week-ahead chief of staff</Copy>
<Copy k="card.body">
  Runs {cmd} against Calendar, Slack, Gmail, and Drive and writes the briefing
  and agendas to a new Week-of folder.
</Copy>
<Copy k="card.when">Every {day} at {time}</Copy>
<Copy k="card.when.day">Sunday</Copy>
<Copy k="card.when.time">5:00pm</Copy>

<Copy k="end">
  Every Sunday, the week-ahead brief{br}is in the folder before Monday starts.
</Copy>
`;export{e as default};