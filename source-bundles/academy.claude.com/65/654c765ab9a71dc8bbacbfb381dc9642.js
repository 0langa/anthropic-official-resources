var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SetupConnectorToggles.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. */}

<Copy k="kicker">Connectors</Copy>
<Copy k="eyebrow">Try it</Copy>
<Copy k="title">Toggle the connectors Cowork can reach for this task.</Copy>
<Copy k="intro">
  Each task only uses the connectors you’ve toggled on. Flip them and watch
  what changes — both the reach and the kind of work Cowork can actually do.
</Copy>

<Copy k="customizeLabel">Customize</Copy>
<Copy k="panelTitle">Connectors for this task</Copy>
<Copy k="allOn">All on</Copy>
<Copy k="allOff">All off</Copy>
<Copy k="countOn">{on} of {total} on</Copy>
<Copy k="toggleAria">Toggle {label} connector</Copy>

<Copy k="connector.gmail.label">Gmail</Copy>
<Copy k="connector.gmail.verb">read your mail</Copy>
<Copy k="connector.gmail.desc">Read mail, draft replies, find past threads</Copy>
<Copy k="connector.gcal.label">Google Calendar</Copy>
<Copy k="connector.gcal.verb">see your meetings</Copy>
<Copy k="connector.gcal.desc">
  See meetings, create or update events, pull context from invites
</Copy>
<Copy k="connector.slack.label">Slack</Copy>
<Copy k="connector.slack.verb">summarize Slack threads</Copy>
<Copy k="connector.slack.desc">Search channels, summarize threads, send messages</Copy>
<Copy k="connector.gdrive.label">Google Drive</Copy>
<Copy k="connector.gdrive.verb">open documents and folders</Copy>
<Copy k="connector.gdrive.desc">Search documents, pull data, summarize folders</Copy>

<Copy k="reachLabel">What Cowork can reach</Copy>
<Copy k="head.none">Nothing connected yet.</Copy>
<Copy k="head.one">One tool connected.</Copy>
<Copy k="head.many">{count} tools connected.</Copy>
<Copy k="head.all">Every tool connected.</Copy>
<Copy k="noneNote">Cowork can still reason, but can’t access any of your tools.</Copy>

<Copy k="preset.empty">
  Flip a connector and Cowork can pull from that source for this task.
</Copy>
<Copy k="preset.gmail">
  Cowork can read your mail and draft replies. It won’t see your calendar,
  Slack, or files — those stay out of reach until you toggle them on.
</Copy>
<Copy k="preset.gcal">
  Cowork can see what’s on your calendar and pull context from invites. Mail,
  Slack, and files stay out of reach.
</Copy>
<Copy k="preset.slack">
  Cowork can search Slack channels and summarize threads. Mail, calendar, and
  files stay out of reach.
</Copy>
<Copy k="preset.gdrive">
  Cowork can open and search Google Drive. It won’t read mail, calendar, or
  Slack until those are on.
</Copy>
<Copy k="preset.gcal,gmail">
  Cowork sees what’s in your inbox and what’s on your calendar. Good for
  "draft a follow-up to yesterday’s meeting" or "what’s on for tomorrow."
</Copy>
<Copy k="preset.gmail,slack">
  Cowork sees what people emailed and what they said in Slack. Good for
  "summarize the conversation about the launch."
</Copy>
<Copy k="preset.gdrive,gmail">
  Cowork sees the documents and the email context around them. Good for
  "draft a follow-up using last week’s brief."
</Copy>
<Copy k="preset.gcal,gmail,slack">
  Cowork sees the conversations and what was scheduled. Good for "summarize
  the week" — but it can’t open documents.
</Copy>
<Copy k="preset.gcal,gdrive,gmail,slack">
  Full reach. Cowork can pull context from every connected tool — powerful,
  but assess how much you trust a connector before turning it on.
</Copy>

<Copy k="narration.one">Cowork can {verb}. Other sources stay out of reach.</Copy>
<Copy k="narration.many">Cowork can {verbs}. Other sources stay out of reach.</Copy>


<Copy k="workedExample">Worked example</Copy>
<Copy k="promptLead">Draft a Monday status update</Copy>
<Copy k="promptFrom">from</Copy>
<Copy k="seg.slack">this week’s Slack threads</Copy>
<Copy k="seg.gcal">the meetings on your calendar</Copy>
<Copy k="seg.gmail">open email threads</Copy>
<Copy k="seg.gdrive">the planning doc in Drive</Copy>

<Copy k="foot.none">
  With nothing connected, Cowork can still reason about what you upload or
  paste in — but it can’t see any of these sources.
</Copy>
<Copy k="foot.all">
  Cowork has everything it needs. It can pull all four sources without you
  uploading or pasting anything.
</Copy>
<Copy k="foot.some.one">
  Cowork will draft what it can reach and ask about the {count} source it
  can’t see — you’ll fill those in.
</Copy>
<Copy k="foot.some.many">
  Cowork will draft what it can reach and ask about the {count} sources it
  can’t see — you’ll fill those in.
</Copy>

<Copy k="reach.none">Reach: none</Copy>
<Copy k="reach.focused">Reach: focused</Copy>
<Copy k="reach.broad">Reach: broad</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 911c0ff665fe1561 */}
<Copy k="widget.description">
  Exercise: the learner toggles four connectors on or off — Gmail, Google
  Calendar, Slack, and Google Drive — and sees how each combination changes
  what Claude Cowork can reach for a task. As connectors are switched, a panel
  updates to show which sources are accessible, a plain-language note on what
  Claude can now do, and a sample status-update prompt showing which pieces of
  content Claude could pull in versus which would stay out of reach. It
  teaches that connectors are task-scoped and toggled per use, that reach
  directly determines what Claude can draft versus what the user must supply
  manually, and that broader connector access trades convenience for more
  exposure, reinforcing the lesson's point about choosing connectors
  deliberately for each task.
</Copy>
<Copy k="widget.summary">
  Exercise: the learner toggles connectors like Gmail, Calendar, Slack, and
  Drive on or off and watches a panel show what Claude Cowork can reach and
  draft, teaching that connector access is task-scoped and shapes what gets
  done automatically versus manually.
</Copy>
`;export{e as default};