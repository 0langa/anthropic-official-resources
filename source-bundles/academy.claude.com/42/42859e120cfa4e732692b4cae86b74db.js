var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SafetySpotTheRisk.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The simulated file name in the
    safe prompt lives in the widget as data. */}

<Copy k="framing">This Cowork task is about to run. {lead} Find them.</Copy>
<Copy k="framing.lead">
  Five things about it would make a careful colleague pause.
</Copy>

<Copy k="counter.label">Hazards found</Copy>
<Copy k="counter.count">{found} of {total}</Copy>
<Copy k="mode.risky">Risky</Copy>
<Copy k="mode.safe">Safe</Copy>

<Copy k="connectorsLabel">Connectors</Copy>
<Copy k="connector.m365">Microsoft 365</Copy>
<Copy k="connector.chrome.label">Claude in Chrome</Copy>
<Copy k="connector.chrome.desc">
  can act on pages in tabs you’ve allowed it to access
</Copy>
<Copy k="connector.asana">Asana</Copy>

<Copy k="prompt.risky">{bounds} — {verbs} and {send}.</Copy>
<Copy k="prompt.risky.quoted">“{bounds} — {verbs} and {send}.”</Copy>
<Copy k="prompt.bounds">Clean up last quarter’s client files</Copy>
<Copy k="prompt.verbs">archive the old stuff</Copy>
<Copy k="prompt.send">
  post a note in each client’s Slack channel that their folder’s been tidied
</Copy>

<Copy k="prompt.safe">
  “In {folder}, {move}. {noDelete} Then {draft} a short Slack note to the
  client summarizing what moved — save it as {file} for me to review.”
</Copy>
<Copy k="prompt.safe.folder">Northwind/</Copy>
<Copy k="prompt.safe.move">
  move files dated before 2026-01-01 into Northwind/Archive/
</Copy>
<Copy k="prompt.safe.noDelete">Don’t delete anything.</Copy>
<Copy k="prompt.safe.draft">draft (don’t post)</Copy>

<Copy k="schedule.risky">Scheduled · Every Friday 5pm</Copy>
<Copy k="schedule.safe">Run once now</Copy>

<Copy k="folderChip.risky">~/Documents/Work</Copy>
<Copy k="folderChip.safe">Clients/Northwind</Copy>
<Copy k="folderChip.workingCopy">working copy</Copy>
<Copy k="folderChip.files">· {count} files</Copy>
<Copy k="strip.ask">Ask</Copy>

<Copy k="callout.empty">Click anything in the window that looks risky.</Copy>

<Copy k="hotspot.chrome.label">Chrome can act on any open tab</Copy>
<Copy k="hotspot.chrome.text">
  “Claude in Chrome” lets Cowork click and type on whatever page you have
  open. Useful — but for an unattended run, narrow it: {em}, or turn it off
  for this task.
</Copy>
<Copy k="hotspot.chrome.em">only click on app.northwind.com</Copy>

<Copy k="hotspot.folder.label">Scope is too wide</Copy>
<Copy k="hotspot.folder.text">
  That’s every file you have — including {em} and every other client. Point
  Cowork at the one client folder this task is about, or a working copy of
  it.
</Copy>
<Copy k="hotspot.folder.em">Personal/</Copy>

<Copy k="hotspot.bounds.label">Bounds not named</Copy>
<Copy k="hotspot.bounds.text">
  Which clients? Which quarter? Name the bounds so you can spot drift: {em}
</Copy>
<Copy k="hotspot.bounds.em">
  “Only Northwind/ and Acme/, only files dated before 2026-01-01.”
</Copy>

<Copy k="hotspot.verbs.label">Destructive verb</Copy>
<Copy k="hotspot.verbs.text">
  “Clean up” and “archive” can mean {move} — or {del}. Cowork will still ask
  before deleting, but you don’t want to be denying deletions you didn’t
  intend. If the wrong reading can’t be undone, say which: {quote}
</Copy>
<Copy k="hotspot.verbs.move">move</Copy>
<Copy k="hotspot.verbs.del">delete</Copy>
<Copy k="hotspot.verbs.quote">
  “Move anything dated before Jan 1 into /Archive. Don’t delete anything.”
</Copy>

<Copy k="hotspot.send.label">Acts instead of drafts</Copy>
<Copy k="hotspot.send.text">
  Once it’s posted, it’s posted. Have Cowork draft the notes — you review and
  post. {em}
</Copy>
<Copy k="hotspot.send.em">Cowork prepares; you ship.</Copy>

<Copy k="hotspot.schedule.label">Scheduled action, not a draft</Copy>
<Copy k="hotspot.schedule.text">
  This runs while you’re not watching — and it posts to a customer-facing
  channel. Scheduled tasks are safe when they produce a draft for you to
  review. Scheduling an irrecoverable action delegates the part you should
  keep.
</Copy>

<Copy k="habits.title">Five habits, applied</Copy>
<Copy k="habits.text">
  Chrome scoped. Tight folder. Specific verbs. Named bounds. Drafts, not
  sends. A run-once, not a schedule. Toggle {toggle} above to compare.
</Copy>
<Copy k="habits.toggle">Risky / Safe</Copy>

<Copy k="payoff">All five found. {lead}</Copy>
<Copy k="payoff.lead">
  Now watch it become a task you’d run unattended.
</Copy>
<Copy k="payoff.button">Make it safe →</Copy>

<Copy k="sameJob">Same job. Nothing here can’t be undone.</Copy>
<Copy k="hint">
  Look at the connectors, the folder, the prompt wording, and what runs when.
  Click anything that gives you pause.
</Copy>
`;export{e as default};