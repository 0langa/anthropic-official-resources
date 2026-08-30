var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ContextProjectSetups.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. Per-setup lists are numbered
    sequences (\`task<n>.*\`, \`folder<n>\`, \`link<n>\`) — the copy file is the
    sole inventory. The simulated memory FILE names live in the widget as
    data. */}

<Copy k="kicker">Three workstreams, three project setups</Copy>
<Copy k="tabsAria">Example project setups</Copy>

<Copy k="card.instructions">Instructions</Copy>
<Copy k="card.scheduled">Scheduled</Copy>
<Copy k="card.context">Context</Copy>
<Copy k="onYourComputer">On your computer</Copy>
<Copy k="memory">Memory</Copy>
<Copy k="links">Links</Copy>

<Copy k="setup.account.tab">A customer account</Copy>
<Copy k="setup.account.name">Northwind — account</Copy>
<Copy k="setup.account.instructions">
  Formal tone. Address the EB by name (Sarah Chen, VP Ops). Always end with
  “draft for review.”
</Copy>
<Copy k="setup.account.task1.when">Mon 8am</Copy>
<Copy k="setup.account.task1.what">
  Pull weekend Northwind activity from CRM and draft a 3-line account update
</Copy>
<Copy k="setup.account.task2.when">Renewal −30 days</Copy>
<Copy k="setup.account.task2.what">Draft the renewal-prep brief</Copy>
<Copy k="setup.account.folder1">Clients/Northwind/</Copy>
<Copy k="setup.account.folder2">QBR-prep/</Copy>
<Copy k="setup.account.link1">Salesforce / Northwind account</Copy>
<Copy k="setup.account.link2">Notion / Northwind customer profile</Copy>
<Copy k="setup.account.caption">
  A project for {focus} — one folder, one EB, one set of guardrails. Cowork
  stops asking “who’s this for?” every time.
</Copy>
<Copy k="setup.account.caption.focus">one customer account</Copy>

<Copy k="setup.recurring.tab">A recurring deliverable</Copy>
<Copy k="setup.recurring.name">Monthly board memo</Copy>
<Copy k="setup.recurring.instructions">
  Match prior memos: Variance → Forecast → Risks → Asks. Flag any
  variance >5%. Always show the calculation.
</Copy>
<Copy k="setup.recurring.task1.when">1st of month, 7am</Copy>
<Copy k="setup.recurring.task1.what">
  Pull the close data and draft the variance section
</Copy>
<Copy k="setup.recurring.task2.when">Fri before board</Copy>
<Copy k="setup.recurring.task2.what">
  Self-review the memo against last quarter’s
</Copy>
<Copy k="setup.recurring.folder1">Board-memos/</Copy>
<Copy k="setup.recurring.folder2">Monthly-close-data/</Copy>
<Copy k="setup.recurring.link1">Looker / Variance dashboard</Copy>
<Copy k="setup.recurring.link2">NetSuite / Monthly close</Copy>
<Copy k="setup.recurring.caption">
  A project for {focus} — the format and standards live in the project so
  each month’s memo isn’t a fresh negotiation.
</Copy>
<Copy k="setup.recurring.caption.focus">a recurring deliverable</Copy>

<Copy k="setup.launch.tab">A launch</Copy>
<Copy k="setup.launch.name">Pricing tier launch — Q3</Copy>
<Copy k="setup.launch.instructions">
  Audience is the exec team. Lead with the launch decision and date. Defer
  detail to the appendix.
</Copy>
<Copy k="setup.launch.task1.when">Daily 5pm</Copy>
<Copy k="setup.launch.task1.what">
  Summarize today’s launch-tracker changes in 5 lines
</Copy>
<Copy k="setup.launch.task2.when">T−7 days</Copy>
<Copy k="setup.launch.task2.what">
  Draft the go / no-go checklist from open Linear items
</Copy>
<Copy k="setup.launch.folder1">Analyst-call-transcripts/</Copy>
<Copy k="setup.launch.folder2">Pricing-research/</Copy>
<Copy k="setup.launch.folder3">Launch-plan/</Copy>
<Copy k="setup.launch.link1">Linear / Launch tracker</Copy>
<Copy k="setup.launch.link2">Notion / Launch roadmap</Copy>
<Copy k="setup.launch.caption">
  A project for {focus} — lives as long as the launch does. Holds the launch
  plan, the tracker, and context about the audience.
</Copy>
<Copy k="setup.launch.caption.focus">one launch</Copy>
`;export{e as default};