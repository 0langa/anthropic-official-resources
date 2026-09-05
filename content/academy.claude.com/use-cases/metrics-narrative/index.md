# Metrics deep-dive to narrative

What moved, why, and which ship caused it.

10 minProductClaude Cowork

Try in CoworkCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-gl4mvsbr.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-f2aunmbb.png)

**Activation · weekly · Tanager metrics**×

+

←→↻

metrics.tanagerhq.com/d/activation-weekly?week=2026-W34

*ID*⋮

TanagerProduct analytics / Dashboards / **Activation, weekly**Search dashboards and events`/`ID

Dashboards

Activation, weeklySignups and campaignsWorkspace health

Funnels

Retention

Cohorts

Events

Settings

Activation, weeklyWeek 34 · Aug 17–23, 2026*▼*All signups*▼*Compare to prior weekTrendLast 8 weeks*▼*

Day-1 activation

**32.9%**▼ 5.3 pts vs last week

wk27wk34

First project created within 24 hours of signup

Signups

**18,400**▲ 8.9%

wk27wk34

Back-to-work campaign live from Mon 17

Workspace created, day 1

**72.4%**▼ 6.1 pts

wk27wk34

Step 1 of 2 in the activation funnel

First project from workspace

**46.5%**▬ 0.1 pts

wk27wk34

Step 2 of 2 in the activation funnel

Day-7 retention (wk33 cohort)

**61.8%**▲ 0.4 pts

Invites sent per new workspace

**2.3**▬ 0.0

**Activation funnel by step**% of signupsW31W32W33W34

0%25%50%75%100%Signed up78.5%72.4%Workspace created, day 138.2%32.9%First project, day 1

**Day-1 activation by platform**Week 34 vs 33

<table class="dseg"><thead><tr><th>Platform</th><th class="r">Signups</th><th class="r">Day-1 activation</th><th class="r">Δ vs W33, pts</th></tr></thead><tbody><tr class="hot" style="opacity: 1;"><td>iOS</td><td class="r">9,016</td><td class="r">30.3%</td><td class="r"><span class="d dn">−11.6</span></td></tr><tr class="" style="opacity: 1;"><td>Android</td><td class="r">3,680</td><td class="r">35.3%</td><td class="r"><span class="d">−0.7</span></td></tr><tr class="" style="opacity: 1;"><td>Web</td><td class="r">5,704</td><td class="r">35.5%</td><td class="r"><span class="d">+0.7</span></td></tr><tr class="tot" style="opacity: 1;"><td>All signups</td><td class="r">18,400</td><td class="r">32.9%</td><td class="r"><span class="d dn">−5.3</span></td></tr></tbody></table>

Plan tier and signup source: open in Funnels

Explain why a metric moved

A number on your dashboard fell and you need to explain why.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%235E6AD2'%20d='M1.225%2061.523c-.222-.949.908-1.546%201.597-.857l36.512%2036.512c.689.689.092%201.819-.857%201.597a50.06%2050.06%200%200%201-37.252-37.252Zm-1.22-13.59a.98.98%200%200%200%20.283.724l50.055%2050.055a.98.98%200%200%200%20.724.283%2049.9%2049.9%200%200%200%208.636-1.518.976.976%200%200%200%20.462-1.647L2.17%2038.835a.976.976%200%200%200-1.647.462%2049.9%2049.9%200%200%200-1.518%208.636Zm4.194-17.443a.988.988%200%200%200%20.184%201.152l63.975%2063.975a.988.988%200%200%200%201.152.184%2050.4%2050.4%200%200%200%206.08-3.495.993.993%200%200%200%20.161-1.53L9.224%2024.249a.993.993%200%200%200-1.53.161%2050.4%2050.4%200%200%200-3.495%206.08Zm9.723-13.067a.99.99%200%200%201-.026-1.377C23.068%206.08%2036.765-.002%2051.888-.002c27.59%200%2049.957%2022.367%2049.957%2049.957%200%2015.123-6.082%2028.82-16.048%2038.013a.99.99%200%200%201-1.377-.026z'/%3e%3c/svg%3e)

Linear

Product / metrics / wk34

Funnel export, changelog, last week’s narrative

Folder

amplitude-activation-funnel-wk34.csv

Export, all signups

CSV

narrative-wk33.md

Format to match

MD

Product Management

/metrics-review

/stakeholder-update

/write-spec

How can I help you today?

**/**metrics-review Find the anomaly in this week's funnel. Segment by plan, platform, and signup source to isolate the driver, check it against what shipped that week, and write the “what happened and why” narrative with the two charts that prove it.

Reading the funnel export0s

Read4 sources

Readactivation-funnel-wk34.csv

Readchangelog-aug.md

![](data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%235E6AD2'%20d='M1.225%2061.523c-.222-.949.908-1.546%201.597-.857l36.512%2036.512c.689.689.092%201.819-.857%201.597a50.06%2050.06%200%200%201-37.252-37.252Zm-1.22-13.59a.98.98%200%200%200%20.283.724l50.055%2050.055a.98.98%200%200%200%20.724.283%2049.9%2049.9%200%200%200%208.636-1.518.976.976%200%200%200%20.462-1.647L2.17%2038.835a.976.976%200%200%200-1.647.462%2049.9%2049.9%200%200%200-1.518%208.636Zm4.194-17.443a.988.988%200%200%200%20.184%201.152l63.975%2063.975a.988.988%200%200%200%201.152.184%2050.4%2050.4%200%200%200%206.08-3.495.993.993%200%200%200%20.161-1.53L9.224%2024.249a.993.993%200%200%200-1.53.161%2050.4%2050.4%200%200%200-3.495%206.08Zm9.723-13.067a.99.99%200%200%201-.026-1.377C23.068%206.08%2036.765-.002%2051.888-.002c27.59%200%2049.957%2022.367%2049.957%2049.957%200%2015.123-6.082%2028.82-16.048%2038.013a.99.99%200%200%201-1.377-.026z'/%3e%3c/svg%3e)Searchedissues shipped to onboarding that week

Readnarrative-wk33.md, format to match

Used 4 sources34s

I segmented week 34’s funnel by plan, platform and source and checked it against what shipped: day-1 activation fell from 38.2% to 32.9%, all in one cell, iOS signups from paid social (41.0% → 25.6%).

Likely cause, medium confidence: GROW-1847 · Linear moved the tracking prompt ahead of workspace setup in iOS 6.12.0; signup-to-workspace fell from 88% to 55% while the next step held.

activation-by-segment

Interactive chart

Download

activation-narrative-wk34.md

Document

Download

Claude ties the drop to one release and says how sure it is.

**activation-by-segment**

*Copy*Publish

## Change in day-1 activation by platform and source, week 34 vs 33

In points. One cell moved; every other cell is within a point, and plan tier explains nothing on its own.

−20−16−12−8−40+4iOS, paid socialundefinediOS, organicundefinedAndroid, paid socialundefinedAndroid, organicundefinedWeb, organicundefinedWeb, referralundefinedno change

## iOS, paid social: step conversion, week 33 vs 34

6,624 signups. The first step broke; the second held.

0%25%50%75%100%Signup → workspace, wk3388%Signup → workspace, wk3455%Workspace → first project, wk3346.6%Workspace → first project, wk3446.5%

Claude checks each segment you named and shows the one that moved.

Run this every Monday at 7am: take last week’s funnel export in Product / metrics, run /metrics-review, check Linear for what shipped, and write the narrative and two charts to that week’s folder. Flag anything that moved more than 10%.

**Weekly metrics narrative**Mondays at 7:00 AM

Each run

Reads last week’s funnel export in Product / metrics

Runs /metrics-review and checks Linear for what shipped

Writes the narrative and two charts to that week’s folder*before your review*

Claude Academy



0:03 / 0:561×

Illustration. Product screens are simplified.

Explain why a metric moved

A number on your dashboard fell and you need to explain why.

Using the Product Management plugin’s metrics skill, name segments and ask what shipped near the drop.

Claude splits the funnel export by each segment, then checks your tracker for what shipped.

Claude splits the funnel export by each segment, then checks your tracker for what shipped.

Claude tells you what it found, then gives you the write-up with its charts.

Claude ties the drop to one release and says how sure it is.

Claude checks each segment you named and shows the one that moved.

Schedule it weekly, and the write-up and charts are in the folder before your review.

Your team knows what moved the number and why, every week.

Find the anomaly in this week's funnel. Segment by plan, platform, and signup source to isolate the driver, check it against what shipped that week, and write the “what happened and why” narrative with the two charts that prove it.

I segmented week 34’s funnel by plan, platform and source and checked it against what shipped: day-1 activation fell from 38.2% to 32.9%, all in one cell, iOS signups from paid social (41.0% → 25.6%).Likely cause, medium confidence: GROW-1847 · Linear moved the tracking prompt ahead of workspace setup in iOS 6.12.0; signup-to-workspace fell from 88% to 55% while the next step held.

activation-by-segment, activation-narrative-wk34.md

Skill: /metrics-review (Product Management)

Connectors: Linear

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
