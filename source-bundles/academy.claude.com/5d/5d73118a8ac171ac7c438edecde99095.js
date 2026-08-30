var e=`---
kind: widget-copy
---

{/* Hero demo film for the “Daily bookends” use case. Scene text is typed
    on screen character by character, so keep sentences natural at any
    length; {tokens} are filled by the widget with its simulated commands,
    folder name and schedule times — keep them where the sentence needs
    them. */}

<Copy k="title">Daily bookends</Copy>
<Copy k="subtitle">
  Reads your calendar, inbox, and Slack, writes a one-page briefing every
  morning and a wrap every evening.
</Copy>

<Copy k="scene1.title">Ask in plain English</Copy>
<Copy k="scene1.sub">
  Point Cowork at the {folder} folder and describe the briefing you want.
</Copy>
<Copy k="menu.kind">Productivity</Copy>
<Copy k="prompt">
  Run my morning briefing. What’s on fire, what’s due, who’s waiting on me,
  and the three things to do first. Keep it under a page.
</Copy>

<Copy k="scene2.title">Cowork sweeps the morning</Copy>
<Copy k="scene2.sub">
  The skill reads each source plus yesterday’s wrap, and the Progress card
  tracks the plan as it runs.
</Copy>
<Copy k="work.heading">Working on morning briefing</Copy>
<Copy k="step1">Reading Google Calendar — today</Copy>
<Copy k="step2">Reading Gmail — overnight inbox</Copy>
<Copy k="step3">Reading Slack — unread mentions</Copy>
<Copy k="step4">Reading 2026-04-27.md</Copy>
<Copy k="step5">Writing 2026-04-28.md</Copy>
<Copy k="step.result">Result</Copy>
<Copy k="progress.title">Progress</Copy>
<Copy k="prog1">Read today’s calendar</Copy>
<Copy k="prog2">Sweep inbox and channels</Copy>
<Copy k="prog3">Check yesterday’s wrap</Copy>
<Copy k="prog4">Rank what’s urgent</Copy>
<Copy k="prog5">Write the briefing</Copy>

<Copy k="scene3.title">One page to start from</Copy>
<Copy k="scene3.sub">
  What’s burning, who’s waiting, the three things to do first — written from
  your tools, saved to the folder.
</Copy>
<Copy k="result1">
  {lead} The Northwind renewal call moved up to 11am and they sent a redline
  overnight — legal hasn’t seen it yet. Priya is blocked on your sign-off
  for the Q2 headcount sheet; she pinged twice in #planning yesterday.
</Copy>
<Copy k="result1.lead">On fire.</Copy>
<Copy k="result2">
  {lead} Read the Northwind redline before 10:30. Unblock Priya on
  headcount. Clear the design-review thread before standup so it doesn’t
  carry a third day.
</Copy>
<Copy k="result2.lead">Do first.</Copy>
<Copy k="result3">
  {lead} The vendor security questionnaire slipped again — now two days from
  due. You said you’d reply to Marcus about the offsite date.
</Copy>
<Copy k="result3.lead">Carried from yesterday.</Copy>
<Copy k="chip.name">Tuesday briefing</Copy>
<Copy k="chip.meta">Document · MD · 3 KB</Copy>

<Copy k="scene4.title">Make it run every workday</Copy>
<Copy k="scene4.sub">
  Schedule once and the briefing is waiting at 8am, the wrap writes itself
  at 6pm.
</Copy>
<Copy k="sched.prompt">
  Run {startCmd} every weekday at 8am and {updateCmd} at 6pm, writing both
  to the {folder} folder.
</Copy>
<Copy k="card.status">Scheduled</Copy>
<Copy k="card.title">Daily bookends</Copy>
<Copy k="card.body">
  Runs {startCmd} at 8am and {updateCmd} at 6pm against Calendar, Slack, and
  Gmail and appends both to today’s file in {folder}.
</Copy>
<Copy k="card.when">Weekdays at {am} and {pm}</Copy>
<Copy k="card.when.am">8:00am</Copy>
<Copy k="card.when.pm">6:00pm</Copy>

<Copy k="end">
  Every morning, the briefing is in your folder before you sit down.
</Copy>
`;export{e as default};