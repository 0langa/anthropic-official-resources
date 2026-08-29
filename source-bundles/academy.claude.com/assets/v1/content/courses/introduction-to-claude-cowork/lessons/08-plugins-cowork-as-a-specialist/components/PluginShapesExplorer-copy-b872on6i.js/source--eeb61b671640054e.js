var e=`---
kind: widget-copy
---

{/* Learner-facing copy for PluginShapesExplorer.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The slash-command tags
    (/nda-review, …) and version numbers are simulated data and live in
    the widget. */}

<Copy k="kicker">Two plugins, two shapes</Copy>

<Copy k="plugin.legal.tabLabel">Legal</Copy>
<Copy k="plugin.legal.tabShape">function’s toolkit</Copy>
<Copy k="plugin.legal.name">Legal</Copy>
<Copy k="plugin.legal.desc">
  The contract and review work a legal team does most.
</Copy>
<Copy k="plugin.exp.tabLabel">Experiment Readout</Copy>
<Copy k="plugin.exp.tabShape">end-to-end pipeline</Copy>
<Copy k="plugin.exp.name">Experiment Readout</Copy>
<Copy k="plugin.exp.desc">
  Run an A/B test from raw results to shipped readout.
</Copy>

<Copy k="customize">Customize</Copy>
<Copy k="toggle.aria">Enabled toggle — what does this do?</Copy>
<Copy k="descLabel">Description</Copy>
<Copy k="skillsLabel">Skills</Copy>
<Copy k="skillsHint">Click any skill to see what it does.</Copy>
<Copy k="connectorsLabel">Connectors</Copy>

<Copy k="meta.source">Source</Copy>
<Copy k="meta.version">Version</Copy>
<Copy k="meta.author">Author</Copy>
<Copy k="meta.updated">Last updated</Copy>

<Copy k="meta.legal.source.value">Marketplace ({partners})</Copy>
<Copy k="meta.legal.source.value.partners">Anthropic & Partners</Copy>
<Copy k="meta.legal.author.value">Anthropic</Copy>
<Copy k="meta.legal.updated.value">9 hours ago</Copy>
<Copy k="meta.exp.source.value">Uploaded from file</Copy>
<Copy k="meta.exp.updated.value">3 days ago</Copy>

<Copy k="info.legal-source.term">Marketplace (Anthropic & Partners)</Copy>
<Copy k="info.legal-source.body">
  {term} — built and maintained by Anthropic. Updates ship to you
  automatically when a new version is published.
</Copy>
<Copy k="info.exp-source.term">Uploaded from file</Copy>
<Copy k="info.exp-source.body">
  {term} — built by someone in your organization and added to your private
  marketplace. Updates flow when the owner re-uploads or syncs from GitHub.
</Copy>
<Copy k="info.version.term">Version</Copy>
<Copy k="info.version.body">
  {term} — bumped each time the plugin is updated. A jump from 1.0 to 1.2
  means it’s been revised since you last looked.
</Copy>
<Copy k="info.author.term">Author</Copy>
<Copy k="info.author.body">
  {term} — who built and maintains it. For Marketplace plugins this is
  Anthropic or a partner; for uploaded ones it’s usually a teammate or your
  enablement team.
</Copy>
<Copy k="info.updated.term">Last updated</Copy>
<Copy k="info.updated.body">
  {term} — how recently it was touched. Hours or days = actively maintained.
  Months = check whether it still matches how your team works.
</Copy>
<Copy k="info.customize.term">Customize</Copy>
<Copy k="info.customize.body">
  {term} — lets you tailor this plugin to your work — either by entering the
  context yourself, or by letting Claude search your connectors to find what
  it needs to customize the plugin for you.
</Copy>
<Copy k="info.toggle.term">Enabled toggle</Copy>
<Copy k="info.toggle.body">
  {term} — turns the whole plugin on or off for you. When it’s on, every
  skill below is available; when it’s off, none of them are. (If your admin
  set it to {required}, this toggle is locked on.)
</Copy>
<Copy k="info.toggle.required">Required</Copy>
<Copy k="info.desc.term">Description</Copy>
<Copy k="info.desc.body">
  {term} — the plugin author’s one-line summary of what it’s for. Use it to
  decide whether to install before reading every skill.
</Copy>
<Copy k="info.conns-legal.term">Connectors</Copy>
<Copy k="info.conns-legal.body">
  {term} — the apps this plugin reaches into. Box and Egnyte for the
  contracts on file; Slack and M365 for where the requests come in; Atlassian
  for tracking what’s open. The skills above use these so you don’t paste
  data in by hand.
</Copy>
<Copy k="info.conns-exp.term">Connectors</Copy>
<Copy k="info.conns-exp.body">
  {term} — the apps this plugin reaches into. BigQuery for the experiment
  data; Hex for the visualizations; Slack for where the readout gets shared.
  The skills above use these so you don’t export and re-import.
</Copy>

<Copy k="skill.legal-1.desc">Redline an NDA against the house playbook.</Copy>
<Copy k="skill.legal-1.expand">
  Compares incoming language to the house position; flags deltas; produces a
  redline + a short rationale per change.
</Copy>
<Copy k="skill.legal-2.desc">
  Pull key terms, dates, and obligations from any contract.
</Copy>
<Copy k="skill.legal-2.expand">
  One-page summary: parties, term, fees, termination triggers, indemnity, key
  dates calendar.
</Copy>
<Copy k="skill.legal-3.desc">
  Find pre-approved fallback language for a given clause.
</Copy>
<Copy k="skill.legal-3.expand">
  Searches the team’s clause bank by topic; returns the approved alternatives
  in priority order.
</Copy>
<Copy k="skill.legal-4.desc">Flag jurisdiction-specific issues in a draft.</Copy>
<Copy k="skill.legal-4.expand">
  Checks the draft against the jurisdiction’s known requirements; flags
  missing notices or non-compliant clauses.
</Copy>
<Copy k="skill.legal-5.desc">Pull public filings and prior deal history.</Copy>
<Copy k="skill.legal-5.expand">
  Public filings, prior contracts on file, recent press. One-page brief on
  who you’re negotiating with.
</Copy>

<Copy k="skill.exp-1.desc">
  Pull experiment exposures and metrics from the warehouse.
</Copy>
<Copy k="skill.exp-1.expand">
  Joins exposures to event tables, dedupes by user, returns one row per user
  per metric for the experiment window.
</Copy>
<Copy k="skill.exp-2.desc">
  Break results down by the cuts that matter (platform, plan, geo).
</Copy>
<Copy k="skill.exp-2.expand">
  Computes lift per segment, flags any segment where the effect reverses sign
  or loses significance.
</Copy>
<Copy k="skill.exp-3.desc">
  Validate traffic balance, sample ratio, and metric definitions.
</Copy>
<Copy k="skill.exp-3.expand">
  Runs a chi-square SRM test, checks pre-period parity, confirms metric
  definitions match the spec.
</Copy>
<Copy k="skill.exp-4.desc">
  Build the lift charts and confidence-interval plots.
</Copy>
<Copy k="skill.exp-4.expand">
  Generates the team’s standard chart pack: lift over time, CI bars, segment
  heatmap.
</Copy>
<Copy k="skill.exp-5.desc">
  Draft the decision memo in the team’s readout format.
</Copy>
<Copy k="skill.exp-5.expand">
  Headline metric → segment cuts → risks → recommendation. Same shape every
  readout.
</Copy>
<Copy k="skill.exp-6.desc">Draft the TL;DR for the experiments channel.</Copy>
<Copy k="skill.exp-6.expand">
  Drafts a Slack-ready two-line summary with a link to the full readout —
  you post it.
</Copy>

<Copy k="connector.box">Box</Copy>
<Copy k="connector.egnyte">Egnyte</Copy>
<Copy k="connector.slack">Slack</Copy>
<Copy k="connector.m365">M365</Copy>
<Copy k="connector.atlassian">Atlassian</Copy>
<Copy k="connector.bigquery">BigQuery</Copy>
<Copy k="connector.hex">Hex</Copy>

<Copy k="outro">
  {lead} A plugin enables Claude to run your workflows, but the output is
  still yours to review.
</Copy>
<Copy k="outro.lead">Stay in the loop.</Copy>
`;export{e as default};