var e=`---
kind: widget-copy
---

{/* Learner-facing copy for TaskPatternsExplorer.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The simulated file names and
    sizes in the Finder tell live in the widget as data; the dates
    (\`finder.date.*\`, \`finder.justNow\`) are copy and localize. */}

<Copy k="kicker">Three patterns of work that suit Cowork</Copy>
<Copy k="forExample">For example</Copy>

<Copy k="pattern.multistep.tab">Multi-step</Copy>
<Copy k="pattern.multistep.num">Pattern 1</Copy>
<Copy k="pattern.multistep.name">The task is multi-step</Copy>
<Copy k="pattern.multistep.def">
  If a task requires several steps — gather, compare, draft, format —
  {lead}, in one prompt.
</Copy>
<Copy k="pattern.multistep.def.lead">hand the whole arc to Claude</Copy>
<Copy k="pattern.multistep.example.1">
  Triage a week of customer-feedback emails into themes, with example quotes
  for each
</Copy>
<Copy k="pattern.multistep.example.2">
  Pull figures from three reports and a spreadsheet, then assemble them into
  a single dashboard
</Copy>
<Copy k="pattern.multistep.tellHeading">
  What you’ll see: the Progress panel
</Copy>
<Copy k="pattern.multistep.caption">
  Cowork breaks the work into steps and shows you each one as it runs. {lead}
</Copy>
<Copy k="pattern.multistep.caption.lead">
  You can watch it work, or come back when it’s done.
</Copy>

<Copy k="pattern.filebased.tab">File-based</Copy>
<Copy k="pattern.filebased.num">Pattern 2</Copy>
<Copy k="pattern.filebased.name">The task lives in real files</Copy>
<Copy k="pattern.filebased.def">
  The output is a real artifact — a Word doc, a spreadsheet, a deck — and
  the inputs are files you already have. {lead}
</Copy>
<Copy k="pattern.filebased.def.lead">
  Cowork works on your real files, not just creating new ones.
</Copy>
<Copy k="pattern.filebased.example.1">
  A formatted client proposal that pulls from your standard template and the
  meeting notes
</Copy>
<Copy k="pattern.filebased.example.2">
  A monthly metrics report assembled from raw spreadsheets, complete with
  charts
</Copy>
<Copy k="pattern.filebased.tellHeading">
  What you’ll see: a real file saved to your folder
</Copy>
<Copy k="pattern.filebased.caption">
  Point Cowork at a folder. It reads what’s there and saves a finished file
  back — right alongside the inputs. {lead}
</Copy>
<Copy k="pattern.filebased.caption.lead">
  It works on your real files, not just creating new ones.
</Copy>

<Copy k="pattern.multitool.tab">Multi-tool</Copy>
<Copy k="pattern.multitool.num">Pattern 3</Copy>
<Copy k="pattern.multitool.name">The task spans multiple tools</Copy>
<Copy k="pattern.multitool.def">
  The work touches Gmail, Slack, M365, your calendar, your CRM. Claude
  reaches them through your {lead} and runs the whole sequence as one
  delegation.
</Copy>
<Copy k="pattern.multitool.def.lead">connectors</Copy>
<Copy k="pattern.multitool.example.1">
  Drafting follow-up emails in Outlook based on the calendar invite,
  attendee list, and meeting notes
</Copy>
<Copy k="pattern.multitool.example.2">
  Searching Slack for everything the team has said about a launch and
  synthesizing it into an update
</Copy>
<Copy k="pattern.multitool.tellHeading">
  What you’ll see: connectors lighting up
</Copy>
<Copy k="pattern.multitool.caption">
  Each connector you turn on is a tool Cowork can reach into. {lead}
</Copy>
<Copy k="pattern.multitool.caption.lead">
  One prompt; Cowork moves between the tools so you don’t have to.
</Copy>

<Copy k="progress.title">Progress</Copy>
<Copy k="progress.step.1">Read the source files</Copy>
<Copy k="progress.step.2">Compare and group</Copy>
<Copy k="progress.step.3">Draft the deliverable</Copy>
<Copy k="progress.step.4">Format</Copy>
<Copy k="progress.step.5">Self-review</Copy>

<Copy k="finder.window">Q4-Earnings</Copy>
<Copy k="finder.colName">Name</Copy>
<Copy k="finder.colDate">Date Modified</Copy>
<Copy k="finder.colSize">Size</Copy>
<Copy k="finder.date.1">Feb 24, 2026</Copy>
<Copy k="finder.date.2">Feb 25, 2026</Copy>
<Copy k="finder.date.3">Feb 20, 2026</Copy>
<Copy k="finder.date.4">Nov 15, 2025</Copy>
<Copy k="finder.justNow">Just now</Copy>

<Copy k="connector.gmail">Gmail</Copy>
<Copy k="connector.slack">Slack</Copy>
<Copy k="connector.m365">Microsoft 365</Copy>
<Copy k="connector.on.aria">{name} connector on</Copy>
<Copy k="connector.off.aria">{name} connector off</Copy>
`;export{e as default};