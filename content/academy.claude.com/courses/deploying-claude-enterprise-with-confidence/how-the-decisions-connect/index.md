Lesson 13 of 14 · Deploying Claude Enterprise with confidence: The five decisions that shape your rolloutHow the decisions connect

# How the decisions connect

Lesson 137 min

In this lessonBy the end, you’ll be able to

- Review how your five decisions relate to your rollout objective
- Predict how a change to one setting cascades across the other decisions
- Turn your completed companion into the rollout plan you walk your stakeholders through at kickoff

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fdeploying-claude-enterprise-with-confidence%2Fhow-the-decisions-connect)

By now you should be well on your way to having concrete decisions for your Claude Enterprise deployment: they’ll either be made, or packaged and sitting with their owners. This lesson allows you to look at your decisions next to Pluto’s, consider what changing any one of them would set off, and reflect on how a regulated function’s answers hold together.

## Your five answers[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/how-the-decisions-connect)

If you recall, Pluto’s objective from Lesson 1 was to have every business unit using Claude in its daily work by the end of the quarter, measured as weekly active usage in each unit, without a single security escalation from Payments & Trust. The column on the right (“Tie to the objective”) reads each of Pluto’s answers against this objective.

Open your companion and review your entry for each decision as you go down the table. The table mirrors the companion’s decision record with Pluto’s answers filled in for comparison.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium"><strong>Decision</strong></th><th class="border-b border-strong p-sm text-left font-medium"><strong>Pluto’s answer</strong></th><th class="border-b border-strong p-sm text-left font-medium"><strong>Tie to the objective</strong></th></tr></thead><tbody><tr><td class="border-b p-sm"><strong>1 · Structure &amp; Identity</strong><br/>Lessons 4 and 5</td><td class="border-b p-sm">• One organization<br/>• Groups aligned with the org chart, plus a cross-unit Engineering group<br/>• A dedicated payments-eng group</td><td class="border-b p-sm">One organization keeps all five units in one rollout and one usage pool; the payments-eng group isolates the regulated function’s settings without a second organization.</td></tr><tr><td class="border-b p-sm"><strong>2 · Access</strong><br/>Lessons 6 and 7</td><td class="border-b p-sm">• Claude chat and Claude Cowork for every group<br/>• Claude Code for Engineering and Platform first (payments-eng waited until visibility reporting was in place)<br/>• Connectors scoped per group, read-only for payments-eng</td><td class="border-b p-sm">Chat and Cowork everywhere puts Claude in every unit’s daily work; holding Claude Code and write-access connectors back for payments-eng protects the no-escalation constraint without significantly impacting adoption.</td></tr><tr><td class="border-b p-sm"><strong>3 · Governance</strong><br/>Lesson 8</td><td class="border-b p-sm">• Open build, reviewed spread for most groups<br/>• Approve-first for Payments &amp; Trust</td><td class="border-b p-sm">Open building lets the four ordinary units spread what works; approve-first review keeps Payments &amp; Trust’s customizations from becoming the escalation.</td></tr><tr><td class="border-b p-sm"><strong>4 · Spend</strong><br/>Lessons 9 and 10</td><td class="border-b p-sm">• Organization ceiling<br/>• Group caps sized to typical usage<br/>• Per-member overrides for the handful of Platform engineers running well above the group, after the first usage review<br/>• A mid-range default model<br/>• Monthly review of spend caps and requests</td><td class="border-b p-sm">Spend caps sized to typical usage keep members working instead of paused, so adoption isn’t throttled; the monthly review moves the settings, not just the caps, when spend climbs.</td></tr><tr><td class="border-b p-sm"><strong>5 · Visibility</strong><br/>Lessons 11 and 12</td><td class="border-b p-sm">• Compliance API into the existing security review<br/>• Telemetry to the observability stack<br/>• Organization-wide retention set to the shorter window Payments &amp; Trust requires<br/>• Adoption read group by group</td><td class="border-b p-sm">The record is on before members are in, so a Payments &amp; Trust question gets evidence instead of an escalation; group-by-group reads show whether every unit is on track by quarter’s end.</td></tr></tbody></table>

Where your answer differs from Pluto’s, that’s your organization’s unique characteristics showing through: trace the difference back to the rollout objective you wrote in Lesson 1. If you find it challenging to explain the decision, it’s worth a second look before you share with your stakeholders.

## Predict a cascade[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/how-the-decisions-connect)

Structure comes first, the other decisions attach their settings to the groups it defines, and Visibility reads across all of it. Now that you know what each setting is, the map has a second use: predicting what changes below a setting when you change it.

Add a group at Pluto, for instance, and it needs a surface grant (Lesson 6), a connector scope (Lesson 7), a cap (Lesson 9), and a dashboard filter (Lesson 12) before anyone in it goes live.

The interactive widget below runs one change through the decision map and shows what changes downstream, from where it starts to what it reaches.

**Pick a change**, one per decision. The map marks where it starts and each decision it ripples to.

1Move a member from B2B into payments-eng2Add a connector with write tools for B2B3Loosen the posture: reviewed to fully open4Lower the Engineering group’s cap5Turn the Compliance API on

1Structure & Identity

Groups and who sits in them

Starts hereTheir group changes, and their role changes with it.

2Access

Surfaces and connectors

Ripples hereTheir surfaces and connectors switch to payments-eng’s: read-only connectors, Claude Code held back.

3Governance

Customization posture

Ripples hereThey now build under payments-eng’s approve-first posture.

4Spend

Caps and overrides

Ripples hereThey inherit payments-eng’s per-member cap, not B2B’s.

5Visibility

Reporting, audit, retention

Ripples hereAudit records the move and each setting that shifted with it.

Reaches**5** of 5 starts ripples toThe widest footprint: a root change carries every setting attached to the group.

## Regulated functions: one posture, not five exceptions[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/how-the-decisions-connect)

If you have a regulated function, this section is the check that its five answers form one posture rather than five separate exceptions; Pluto’s Payments & Trust is the worked example.

- **Structure**: its members sit in their own group, so the union rule gives them nothing broader than their own group’s role (Lesson 5).
- **Access**: the same surfaces as their neighbors, with Claude Code held until visibility reporting is in place (Lesson 6), and connectors read-only (Lesson 7).
- **Governance**: approve-first, while the rest of Pluto builds freely and shares within the group, with a reviewer for anything beyond it (Lesson 8).
- **Spend**: a group cap sized like any other group’s, with every increase request getting a look before it’s approved (Lesson 9).
- **Visibility**: they are the reason Pluto’s organization-wide retention window is the shorter one, with the Compliance API on and a named reader in the security review (Lesson 11).

Re-read those entries in your companion as a set. One group handled through the ordinary system, with no special machinery: that is why it holds. If your whole organization is regulated, that set is your baseline.

## Set up resources[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/how-the-decisions-connect)

When a decision needs a second look before the kickoff, the article behind every setting in this course lives in one of these two collections.

- **[Team and Enterprise plans(opens in new tab)](https://support.claude.com/en/collections/9387370-team-and-enterprise-plans)**: the full set of Team and Enterprise admin articles, for re-reading any one decision.
- **[Admin management(opens in new tab)](https://support.claude.com/en/collections/9811449-admin-management)**: the how-to articles behind the settings you now revisit.

## Lesson activity[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/how-the-decisions-connect)

Three more steps turn your companion into the rollout plan you bring to your stakeholder kickoff.

- **Review the hard-to-undo settings:** confirm each of the four (domain claiming, how many organizations, the group mapping, retention) on your companion’s Lesson 13 checklist is either decided, or on an owner’s desk with a decide-by date.
- **Close any open items:** for each decision still open, write what is blocking it, what it takes to unblock, and a decide-by date. An owner’s name alone is not a plan; an open item with none of these is where a rollout stalls.
- **Sequence the plan:** the companion lists the order (structure, then access, governance, spend, visibility on, then go-live by group); put an owner and a start date on each step.

→ Record this in the work-along companion, section Lesson 13.

## Downloads

- 

  ### Work-along companion (Word)

  The editable Word version of the rollout plan you fill in lesson by lesson.

  [Download](https://academy.claude.com/assets/v1/work-along-companion-bk4suxux.docx)
- 

  ### Work-along companion (PDF)

  The same rollout plan as a fillable PDF.

  [Download](https://academy.claude.com/assets/v1/work-along-companion-c5lkvz0n.pdf)

## What’s next[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/how-the-decisions-connect)

The final lesson covers what happens when a new surface arrives: which of your answers carry over as they are, and which decisions you’ll run again.

Was this helpful?
