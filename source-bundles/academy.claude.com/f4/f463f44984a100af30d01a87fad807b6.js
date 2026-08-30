var e=`---
kind: widget-copy
---

{/* Learner-facing copy for MemoryWeek.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Five days (Mon–Fri) with the
    same assistant: each day is one exchange — the learner's turn
    (\`day.<id>.you\`) and Claude's reply (\`day.<id>.claude\`) — shown next
    to the memory file as it stands at the end of that day (the \`mem.*\`
    lines, a mock markdown file). Line counts are data in the widget. */}

<Copy k="label">A week of memory</Copy>
<Copy k="note">
  1 session = 1 day here for simplicity. In practice, sessions and days
  aren't 1:1.
</Copy>
<Copy k="days.aria">Day</Copy>
<Copy k="lines.one">{count} line</Copy>
<Copy k="lines.many">{count} lines</Copy>

<Copy k="session.aria">{day} session</Copy>
<Copy k="session.label">{day} · Session</Copy>
<Copy k="memory.aria">Memory file, end of {day}</Copy>
<Copy k="memory.label">memory file · end of {day}</Copy>
<Copy k="memory.heading"># Memory</Copy>
<Copy k="memory.empty">(empty)</Copy>
<Copy k="memory.new">+ new</Copy>
<Copy k="memory.noChange">
  No new memory today - nothing new and durable to save.
</Copy>

<Copy k="mem.summit">- Coordinating the November leadership summit (~250 attendees, working back from Nov 12)</Copy>
<Copy k="mem.updates">- Team updates: short and bulleted. Vendor emails: formal, full sentences.</Copy>
<Copy k="mem.dana">- Sends Dana a recap every Friday; voice: warm, direct, brief</Copy>

<Copy k="day.mon.name">Mon</Copy>
<Copy k="day.mon.you">
  I'm coordinating the November leadership summit - about 250 people,
  working back from a Nov 12 date. Help me get organized?
</Copy>
<Copy k="day.mon.claude">
  Happy to. I'll remember the summit is your main project right now, so you
  won't have to re-explain it tomorrow.
</Copy>

<Copy k="day.tue.name">Tue</Copy>
<Copy k="day.tue.you">
  Draft a status update for the team and an email to the caterer. Keep team
  updates short and bulleted; vendor emails should be formal, full
  sentences.
</Copy>
<Copy k="day.tue.claude">
  Both drafted. That split - bulleted for the team, formal for vendors -
  sounds like a standing preference, so I saved it.
</Copy>

<Copy k="day.wed.name">Wed</Copy>
<Copy k="day.wed.you">
  How many RSVPs so far? And what was the catering quote?
</Copy>
<Copy k="day.wed.claude">
  137 RSVPs - I checked the sheet just now - and yesterday's PDF quotes
  $8,450. Numbers like these change too often to memorize, so I look them up
  fresh each time.
</Copy>

<Copy k="day.thu.name">Thu</Copy>
<Copy k="day.thu.you">Draft my Friday recap for Dana.</Copy>
<Copy k="day.thu.claude">
  Drafted - warm, direct, and brief, like your last few. I'll remember the
  Friday recap to Dana is a weekly thing.
</Copy>

<Copy k="day.fri.name">Fri</Copy>
<Copy k="day.fri.you">Friday - you know what to do.</Copy>
<Copy k="day.fri.claude">
  Recap to Dana drafted, and a short, bulleted summit update ready for the
  team - all from memory. The RSVP count I pulled fresh: 152.
</Copy>

<Copy k="status.all">All five days seen.</Copy>
<Copy k="status.count">{seen} / {total} days seen</Copy>
<Copy k="next">Next day: {day}</Copy>
<Copy k="done">That's the week.</Copy>
`;export{e as default};