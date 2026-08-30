# Metrics deep-dive to narrative

What moved, why, and which ship caused it.

10 minProductClaude Cowork

Try in CoworkCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-gl4mvsbr.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-f2aunmbb.png)

# Metrics deep-dive to narrative

Reads your analytics data and the changelog, then writes the what-happened-and-why with charts.

## Ask in plain English

Point Cowork at the week’s metrics folder and describe the analysis you need.

/metrics-narrativeProduct Management

Product / metrics / wk17

## Cowork hunts the anomaly

Segments the funnel, checks what shipped in the same window, and the Progress card tracks the plan.

Working on metrics narrative

Reading amplitude-activation-funnel-wk17.csv

Result

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/690abdac9a60d37ccbb9f396_Amplitude.jpg)

Amplitude · segmented day-1 activation by plan × platform × source

Result

Comparing against wk16 — iOS × paid-social explains 86% of the drop

Result

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/690abff72b804fad37465165_Linear.jpg)

Linear · pulled 9 issues shipped Apr 20-24 in Growth

Result

Reading changelog-apr.md

Result

Created narrative-wk17.md + 2 charts

narrative-wk17.md

#### Progress

1

Read the funnel export

2

Segment to the driver

3

Compare to last week

4

Check what shipped

5

Write narrative + charts

#### Product / metrics / wk17

amplitude-activation-funnel-wk17.csv

looker-retention-by-plan.csv

changelog-apr.md

narrative-wk16.md

#### Context

Connectors

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/690abdac9a60d37ccbb9f396_Amplitude.jpg)Amplitude

![](https://www.google.com/s2/favicons?domain=looker.com&sz=64)Looker

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/690abff72b804fad37465165_Linear.jpg)Linear

## The what-happened-and-why

Anomaly found, driver isolated to one segment, tied to the ship — with the two charts that prove it.

**Day-1 activation fell 14% WoW** (38.2% → 32.9%). The drop is concentrated in iOS × paid-social signups — that cohort fell 31% while every other plan/platform/source cell stayed within ±2%.

**It lines up with GROW-1847**, the new tracking-permissions prompt that shipped Tue Apr 21. The prompt fires before first project creation, and 42% of paid-social iOS users bounce at it — they never reach the activation event.

**Recommended:** move the prompt behind first project. Charts: *activation-by-segment-wk17.png* shows the isolation; *ios-funnel-before-after.png* shows the new drop-off step.

iOS paid-social activation narrative

Document · MD · 6 KB · + 2 PNG charts

## Make it run every Monday

Schedule the customized skill — the narrative is written before standup.

Product / metrics

Scheduled

Weekly metrics narrative

Every Monday — runs `/metrics-narrative` against the prior week’s Amplitude + Linear data and writes the narrative and charts to Product/metrics/<week>.

Every **Monday** at 7:00am

Every Monday the “what happened and why” is already in the folder before standup.

## Set up[](https://academy.claude.com/use-cases/metrics-narrative)

### Try a plugin[](https://academy.claude.com/use-cases/metrics-narrative)

The Product Management plugin ships with `/metrics-review` and other analysis skills as a starting point, already structured to find the anomaly, segment to the driver, and write the story. If your admin manages plugins and it's not available yet, skip this; nothing below requires it.



Product ManagementWrite feature specs, plan roadmaps, and synthesize user research faster. Keep stakeholders updated and stay ahead of the competitive landscape.

[Add](https://claude.ai/desktop/customize/plugins/new?marketplace=github.com%2Fanthropics%2Fknowledge-work-plugins&plugin=product-management)

`/metrics-review`Review and analyze product metrics with trend analysis and actionable insights.

[Run](claude://cowork/new?q=%2Fmetrics-review)

`/stakeholder-update`Generate a stakeholder update tailored to audience and cadence.

[Run](claude://cowork/new?q=%2Fstakeholder-update)

Show all 8 skills

### Connect your tools[](https://academy.claude.com/use-cases/metrics-narrative)

Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. [Learn about tool access(opens in new tab)](https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access).

Navigate to **Customize → Connectors** in Cowork to set up.



Amplitude

[Connect](https://claude.ai/desktop/directory/amplitude)



Databricks

Query the metrics tables directly so the narrative cites the same numbers as the dashboards.

[Connect](https://claude.ai/desktop/directory/databricks)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%235E6AD2'%20d='M1.225%2061.523c-.222-.949.908-1.546%201.597-.857l36.512%2036.512c.689.689.092%201.819-.857%201.597a50.06%2050.06%200%200%201-37.252-37.252Zm-1.22-13.59a.98.98%200%200%200%20.283.724l50.055%2050.055a.98.98%200%200%200%20.724.283%2049.9%2049.9%200%200%200%208.636-1.518.976.976%200%200%200%20.462-1.647L2.17%2038.835a.976.976%200%200%200-1.647.462%2049.9%2049.9%200%200%200-1.518%208.636Zm4.194-17.443a.988.988%200%200%200%20.184%201.152l63.975%2063.975a.988.988%200%200%200%201.152.184%2050.4%2050.4%200%200%200%206.08-3.495.993.993%200%200%200%20.161-1.53L9.224%2024.249a.993.993%200%200%200-1.53.161%2050.4%2050.4%200%200%200-3.495%206.08Zm9.723-13.067a.99.99%200%200%201-.026-1.377C23.068%206.08%2036.765-.002%2051.888-.002c27.59%200%2049.957%2022.367%2049.957%2049.957%200%2015.123-6.082%2028.82-16.048%2038.013a.99.99%200%200%201-1.377-.026z'/%3e%3c/svg%3e)

Linear

[Connect](https://claude.ai/desktop/directory/linear)

Browse all connectors[Open in Cowork](https://claude.ai/desktop/customize/connectors)



**Want to try this task before setting anything up?** Add your files to a working folder, point Cowork at the folder, and start with the prompt.

### Set your working folder[](https://academy.claude.com/use-cases/metrics-narrative)

Drag the files you'll use (the Amplitude or Mixpanel CSV export, last week's narrative for comparison, the changelog if it's a flat file) into one folder on your machine, then point Cowork at it. Cowork reads from it and writes the narrative and chart images back to it. If you write this every week, [create a Cowork project(opens in new tab)](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork) from that folder so your metric definitions, instructions, and memory stay attached.

Product / metrics / wk17

amplitude-activation-funnel-wk17.csvApr 24, 20262.4 MB

looker-retention-by-plan.csvApr 24, 2026880 KB

changelog-apr.mdApr 23, 20269 KB

narrative-wk16.mdOptionalApr 17, 20266 KB

In Cowork’s chat bar:Product / metrics / wk17

## The prompt[](https://academy.claude.com/use-cases/metrics-narrative)

### Copy this into Claude Cowork[](https://academy.claude.com/use-cases/metrics-narrative)

Find the anomaly in this week's activation funnel. Segment by plan, platform, and signup source until you've isolated the driver, check it against what shipped in the same window, and write the "what happened and why" narrative with the two charts that prove it.



Product / metrics / wk17Open in Cowork

### Why this works[](https://academy.claude.com/use-cases/metrics-narrative)

Prompt

**Ask for the evidence behind each claim.** Starting with "find the anomaly" lets Cowork scan the whole funnel for the step that actually moved instead of anchoring on the metric you happened to notice first.

Prompt

**Name the segments to try.** "Plan, platform, and signup source" gives the isolation a search order, so the narrative points to the one segment that explains most of the move rather than a grid of every cut.

Source

**Check it against what changed.** Checking the changelog and Linear over the same window turns correlation into a causal hypothesis the team can act on, not just a chart that went down.

Prompt

**Set a chart limit.** "Two charts that prove it" keeps the output to the before/after and the segment split that carry the argument, instead of a dashboard dump.

### Get a better draft[](https://academy.claude.com/use-cases/metrics-narrative)

Practice

**Add an example to match.** Drop an example you like into the folder and Cowork matches your structure and voice.

Practice

**Ask it to flag uncertainty.** Add "flag anything you're not confident about" so you know where to look first when you review the draft.

## Make Cowork work for you[](https://academy.claude.com/use-cases/metrics-narrative)

A plugin skill is a starting point — customize it with your own practices and expertise. A few minutes of conversation and it runs with your standards from then on.

Make what we've done in this task so far into a skill, or edit the /metrics-review skill with my feedback.



Product / metricsOpen in Cowork



**Tip:** tell Claude to edit the skill for you.

## Make it repeatable[](https://academy.claude.com/use-cases/metrics-narrative)

### Run it every Monday morning[](https://academy.claude.com/use-cases/metrics-narrative)

The "why did the number move" question comes every week whether or not you've had time to dig. Type `/schedule` in the prompt, or open **Scheduled** in the Cowork sidebar, and the customized skill writes the narrative before standup.

**/schedule** Every Monday at 7am, run /metrics-review for the prior week, write the narrative and charts to Product/metrics/<week>, and flag anything that moved more than 10% week over week.



Product / metricsOpen in Cowork

Scheduled taskActive

Weekly metrics narrative

Runs `/metrics-review` against the prior week's data, isolates the driver, and writes the what-happened-and-why with charts to the week's folder.

Every **Monday at 7:00am**[Open in Cowork](https://claude.ai/desktop/scheduled-task)

## Share with your teammates[](https://academy.claude.com/use-cases/metrics-narrative)

Your customized `/metrics-review` now carries your metric definitions, your segment order, and your narrative format. Share it so any PM can answer "why did this move" in your structure, and the weekly readout stays consistent no matter whose number it is.



Share the skill

In Cowork, open **Skills** → `/metrics-review` → **Share** and pick your teammates (or your whole workspace, if your admin allows). They get the skill with your definitions and format baked in, so they don't repeat Steps 1-3.

## Going forward[](https://academy.claude.com/use-cases/metrics-narrative)

### Now in your Cowork

Your processes

Product Management plugin

Your tools

AmplitudeDatabricks![](data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%235E6AD2'%20d='M1.225%2061.523c-.222-.949.908-1.546%201.597-.857l36.512%2036.512c.689.689.092%201.819-.857%201.597a50.06%2050.06%200%200%201-37.252-37.252Zm-1.22-13.59a.98.98%200%200%200%20.283.724l50.055%2050.055a.98.98%200%200%200%20.724.283%2049.9%2049.9%200%200%200%208.636-1.518.976.976%200%200%200%20.462-1.647L2.17%2038.835a.976.976%200%200%200-1.647.462%2049.9%2049.9%200%200%200-1.518%208.636Zm4.194-17.443a.988.988%200%200%200%20.184%201.152l63.975%2063.975a.988.988%200%200%200%201.152.184%2050.4%2050.4%200%200%200%206.08-3.495.993.993%200%200%200%20.161-1.53L9.224%2024.249a.993.993%200%200%200-1.53.161%2050.4%2050.4%200%200%200-3.495%206.08Zm9.723-13.067a.99.99%200%200%201-.026-1.377C23.068%206.08%2036.765-.002%2051.888-.002c27.59%200%2049.957%2022.367%2049.957%2049.957%200%2015.123-6.082%2028.82-16.048%2038.013a.99.99%200%200%201-1.377-.026z'/%3e%3c/svg%3e)Linear

Your workspace

Product / metrics

The metric move is explained in writing with its driver and likely cause identified, plus the charts that support it — ready to act on rather than investigate.

[Next: Launch readiness sweep](https://academy.claude.com/use-cases/launch-readiness)

Was this helpful?
