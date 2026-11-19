# Answer the ad-hoc data question

The query, the chart, and the plain-English answer.

10 minDataClaude Cowork

Try in ClaudeCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-f72xos2e.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-j0qghno4.png)

Film: the user pastes a finance stakeholder's question into a query skill, and Claude reads the schema and certified metrics, queries the warehouse, then explains the drivers behind the change with a chart and rerunnable query, before showing the task scheduled to run automatically.

Search

New Mail

sam.okafor@corran.com

Inbox*7*

Drafts*3*

Archive

Sent

Deleted Items

Junk Email

Groups

Finance — Close

AP Approvals

**Inbox**FocusedOther

Today

*RL*

**Rosa Lindqvist**9:12 AM

EMEA gross margin: why down this quarter?

Why is gross margin down in EMEA this quarter? The flash has us at

*DP*

**Dev Patel**8:50 AM

Re: churn cohort cut for the QBR

Perfect, that’s the view I needed. One more ask: can we get it by

*S*

**Snowflake**6:02 AM

Task EMEA\_DAILY\_REFRESH succeeded

Task completed in 4m 12s. Rows loaded: 2,418,906

*MR*

**Marta Ruiz**Yesterday

Pricing test readout: which table?

Is FCT\_ORDER\_LINES the right grain for the bundle discount or should I

*FO*

**Finance Ops**Yesterday

Q2 flash pack v3 attached

Attaching v3 with the restated DACH freight line. Board pack locks

**Reply****Reply All****Forward****Archive****Delete****Flag**···

## EMEA gross margin: why down this quarter?

*RL*

**Rosa Lindqvist**<rosa.lindqvist@corran.com>

To: Sam Okafor; Analytics requests

Tue 9:12 AM

Hi Sam,

Why is gross margin down in EMEA this quarter? The flash has us at 58.2% against 61.4% last quarter and I need one line and a chart for Thursday’s board pack.

If it’s the UK bundles again, can you say how much of it that is versus everything else? Happy to take a rough split as long as the query is somewhere I can point the auditors at.

Thanks,  
Rosa

Rosa Lindqvist · Finance Director, EMEA · Corran

Answer the ad-hoc data question

Finance asks you to explain why a number fell this quarter.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23F25022'%20d='M1%201h10.5v10.5H1z'/%3e%3cpath%20fill='%237FBA00'%20d='M12.5%201H23v10.5H12.5z'/%3e%3cpath%20fill='%2300A4EF'%20d='M1%2012.5h10.5V23H1z'/%3e%3cpath%20fill='%23FFB900'%20d='M12.5%2012.5H23V23H12.5z'/%3e%3c/svg%3e)

Microsoft 365

![](https://academy.claude.com/assets/v1/snowflake-f7euzg40.svg)

Snowflake

Analytics / EMEA-margin-question

Schema, metrics library, data dictionary

Folder

finance-schema.sql

FINANCE tables

SQL

metrics-library.md

Certified definitions

MD

Data

/analyze

/explore-data

/write-query

How can I help you today?

**/**write-query Here's the question from Finance: “Why is gross margin down in EMEA this quarter?” Write the SQL to answer it, run it against the warehouse, tell me what's driving the move, and give me the chart spec for the dashboard.

Reading Rosa’s message0s

Read5 sources

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23F25022'%20d='M1%201h10.5v10.5H1z'/%3e%3cpath%20fill='%237FBA00'%20d='M12.5%201H23v10.5H12.5z'/%3e%3cpath%20fill='%2300A4EF'%20d='M1%2012.5h10.5V23H1z'/%3e%3cpath%20fill='%23FFB900'%20d='M12.5%2012.5H23V23H12.5z'/%3e%3c/svg%3e)ReadRosa’s message in the requests thread

Readfinance-schema.sql

Readmetrics-library.md, gross margin (certified)

![](https://academy.claude.com/assets/v1/snowflake-f7euzg40.svg)Queriedmargin by country and product, two quarters

![](https://academy.claude.com/assets/v1/snowflake-f7euzg40.svg)QueriedUK revenue mix by week since launch

Used 5 sources34s

EMEA gross margin fell from 61.4% to 58.2%, Q1 to Q2. I ran the certified margin query on your FINANCE tables for both quarters: 2.4 of the 3.2 points are the UK, where the bundle promotion took hardware from 18% to 31% of revenue and the launch discount added to it.

DACH freight and currency explain the rest, roughly 0.4 points each, and nothing has gone to Rosa yet.

<table class="mini md"><thead><tr><th>Driver</th><th class="num">Effect (pts)</th><th>How we know</th></tr></thead><tbody><tr class="uk"><td>UK hardware mix</td><td class="num">−2.1</td><td>Bundle promo from 30 Mar took hardware to 31% of UK revenue (18% in Q1) at 24% margin against 68% for software; UK margin 60.1% → 53.6%</td></tr><tr class=""><td>DACH freight surcharge</td><td class="num">−0.4</td><td>Carrier surcharge from 1 May added $0.19M to cost of goods on $46.4M revenue</td></tr><tr class=""><td>Currency, rest of EMEA</td><td class="num">−0.4</td><td>USD-priced components billed in weaker local currencies; a residual, so treat it as approximate</td></tr></tbody></table>

The chart splits the fall by driver for the board pack, and the query is saved as it ran so Rosa or the auditors can rerun it.

emea-margin-drivers

Interactive chart

Download

emea-margin-q2.sql

Query

Download

The query runs on your tables and metric definitions, so you can rerun it.

**emea-margin-drivers**

*Copy*Publish

## What moved EMEA gross margin, Q1 to Q2 FY26

In percentage points, by country and cause. Six drivers sum to the 3.2-point fall; the line is Q1.

−2.5−2−1.5−1−0.50+0.5UK, hardware mixundefinedDACH, freight surchargeundefinedRest of EMEA, currencyundefinedUK, bundle launch discountundefinedFrance, mixundefinedNordics, April price riseundefinedQ1 = 61.4%

The change is split into its parts; the biggest one stands out.

Run this every hour on weekdays: check Analytics requests for new questions, query the warehouse, and save a draft answer to Analytics / Inbox for me to review before anything goes back.

**Ad-hoc analytics inbox**Every hour on weekdays

Each run

Checks Analytics requests for new questions

Queries the warehouse for each one

Writes a draft answer to Analytics / Inbox*for your review*

Claude Academy

Why is gross margin down in EMEA this quarter?



0:03 / 0:561×

Illustration. Product screens are simplified.

Answer the ad-hoc data question

Finance asks you to explain why a number fell this quarter.

With the Data plugin’s query skill, paste their question and ask why, with a chart.

Claude reads your schema and metric definitions first, then queries the warehouse.

Claude reads your schema and metric definitions first, then queries the warehouse.

Claude says what it found and gives you the chart and the query.

The query runs on your tables and metric definitions, so you can rerun it.

The change is split into its parts; the biggest one stands out.

Schedule it hourly, and each new question has a draft answer waiting for your review.

The person who asked gets a checked answer and can rerun it later.

Here's the question from Finance: “Why is gross margin down in EMEA this quarter?” Write the SQL to answer it, run it against the warehouse, tell me what's driving the move, and give me the chart spec for the dashboard.

EMEA gross margin fell from 61.4% to 58.2%, Q1 to Q2. I ran the certified margin query on your FINANCE tables for both quarters: 2.4 of the 3.2 points are the UK, where the bundle promotion took hardware from 18% to 31% of revenue and the launch discount added to it.DACH freight and currency explain the rest, roughly 0.4 points each, and nothing has gone to Rosa yet.DriverEffect (pts)How we knowUK hardware mix−2.1Bundle promo from 30 Mar took hardware to 31% of UK revenue (18% in Q1) at 24% margin against 68% for software; UK margin 60.1% → 53.6%DACH freight surcharge−0.4Carrier surcharge from 1 May added $0.19M to cost of goods on $46.4M revenueCurrency, rest of EMEA−0.4USD-priced components billed in weaker local currencies; a residual, so treat it as approximateThe chart splits the fall by driver for the board pack, and the query is saved as it ran so Rosa or the auditors can rerun it.

emea-margin-drivers, emea-margin-q2.sql

Skill: /write-query (Data)

Connectors: Microsoft 365, Snowflake

## Set up[](https://academy.claude.com/use-cases/answer-the-adhoc)

### Try a plugin[](https://academy.claude.com/use-cases/answer-the-adhoc)

The Data plugin ships with `/write-query` and other warehouse-and-BI skills as a starting point, already structured to read a data model and write queries against it. If your admin manages plugins and it's not available yet, skip this step. The prompt below works without it.



DataSkills for SQL generation, table profiling, dashboards, and charts

[Add](https://claude.ai/desktop/customize/plugins/new?marketplace=github.com%2Fanthropics%2Fknowledge-work-plugins&plugin=data)

`/write-query`Write SQL for your warehouse's dialect from a plain-language question, then offer to run it

[Open in Claude](https://claude.ai/new?surface=cowork&q=%2Fwrite-query)

`/explore-data`Profile a table and summarize what's in it

[Open in Claude](https://claude.ai/new?surface=cowork&q=%2Fexplore-data)

Show all 9 skills

### Connect your tools[](https://academy.claude.com/use-cases/answer-the-adhoc)

Claude is more powerful when it works directly with your systems. You control permissions and access. [Learn about tool access(opens in new tab)](https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access).

[Add a connector(opens in new tab)](https://claude.ai/desktop/customize/connectors) for each tool you want Claude to use.



Databricks

Read the semantic layer and run SQL against the lakehouse so the answer comes with the query.

[Connect](https://claude.ai/desktop/directory/databricks)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23F25022'%20d='M1%201h10.5v10.5H1z'/%3e%3cpath%20fill='%237FBA00'%20d='M12.5%201H23v10.5H12.5z'/%3e%3cpath%20fill='%2300A4EF'%20d='M1%2012.5h10.5V23H1z'/%3e%3cpath%20fill='%23FFB900'%20d='M12.5%2012.5H23V23H12.5z'/%3e%3c/svg%3e)

Microsoft 365

Pull the stakeholder's question from Teams or email and write the answer back as a reply.

[Connect](https://claude.ai/desktop/directory/microsoft-365)

![](https://academy.claude.com/assets/v1/snowflake-f7euzg40.svg)

SnowflakeOptional

Query the warehouse directly when the answer isn't in the semantic model yet.

[Connect](https://claude.ai/desktop/directory/snowflake)

[Browse connectors in Claude](https://claude.ai/desktop/customize/connectors)



**Want to try this task before setting anything up?** Drag in your files, or give Claude access to a folder in the Claude desktop app. Then start with the prompt.

### Set your working folder[](https://academy.claude.com/use-cases/answer-the-adhoc)

Drag the files you'll use (your schema export or dbt models, your metrics library, your data dictionary) into one folder and [give Claude access to it(opens in new tab)](https://academy.claude.com/tutorials/navigating-the-claude-desktop-app) in the Claude desktop app. Claude reads the model from there and writes the SQL, the result table, and the answer memo back to it. If you field ad-hoc questions regularly, [create a project(opens in new tab)](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork) from that folder so your naming conventions and certified-metric list stay attached.

Analytics / EMEA-margin-question

finance-schema.sqlApr 22, 2026312 KB

metrics-library.mdMar 30, 202618 KB

data-dictionary.xlsxFeb 14, 202662 KB

In Cowork’s chat bar:Analytics / EMEA-margin-question

## The prompt[](https://academy.claude.com/use-cases/answer-the-adhoc)

### Copy this into Claude[](https://academy.claude.com/use-cases/answer-the-adhoc)

Here's the question from the business: "Why is gross margin down in EMEA this quarter?" Write the SQL to answer it, run it against the warehouse, and tell me what's driving the move. Then give me the chart spec to add to the dashboard so nobody has to ask again.



Analytics / EMEA-margin-questionOpen in Claude

### Why this works[](https://academy.claude.com/use-cases/answer-the-adhoc)

Prompt

**Paste the question verbatim.** Using their exact words keeps the answer aimed at what they asked, in the terms they used.

Prompt

**Ask for what's driving the number.** "What's driving the move" is asking for the breakdown behind the number: which segment, which change, which date.

Prompt

**Ask for a reusable output.** "Chart spec to add to the dashboard" is asking for something the asker can refresh themselves next time.

Source

**Let the working folder supply context.** SQL is written against your tables and your metric names, not invented ones.

### Get a better draft[](https://academy.claude.com/use-cases/answer-the-adhoc)

Practice

**Add an example to match.** Drop an example you like into the folder and Claude matches your structure and voice.

Practice

**Ask it to flag uncertainty.** Add "flag anything you're not confident about" so you know where to look first when you review the draft.

## Make Claude work for you[](https://academy.claude.com/use-cases/answer-the-adhoc)

Tell Claude your own preferences for this task, such as your naming rules and your answer format, then save what you've done as a skill of your own. A few minutes of conversation and it runs with your standards from then on.

Make what we've done in this task so far into a skill called /adhoc-answer.



AnalyticsOpen in Claude

Review the skill, and save it if Claude hasn't already.



**Tip:** tell Claude to edit the skill for you.

## Make it repeatable[](https://academy.claude.com/use-cases/answer-the-adhoc)

### Run it on every inbound question[](https://academy.claude.com/use-cases/answer-the-adhoc)

The ad-hoc queue never stops. Ask Claude to set up a scheduled task, or open **Scheduled** in the sidebar, and `/adhoc-answer` runs on new questions in your analytics-requests channel and drafts the query and answer before you've even read the message.

Set up a scheduled task that runs every hour on weekdays: check #analytics-requests in Teams for new questions, run /adhoc-answer on each one, and write the draft answer to Analytics/Inbox/<thread-id>.md for me to review before it goes back.



AnalyticsOpen in Claude

Scheduled taskActive

Ad-hoc analytics inbox

Hourly, reads new questions in #analytics-requests, runs `/adhoc-answer` against the warehouse, and writes a draft answer for review.

Every **hour on weekdays**[Open in Claude](https://claude.ai/desktop/scheduled-task)

To use a folder on your computer during a scheduled task, keep your computer on and awake with the Claude desktop app open so Claude can access it.

## Share with your teammates[](https://academy.claude.com/use-cases/answer-the-adhoc)

Your `/adhoc-answer` skill now carries your warehouse model, your certified metrics, and your answer format. Share it so every analyst writes SQL against the same definitions, and the business gets the same number no matter who they ask.



Share the skill

You can share a skill you created. In [your skills(opens in new tab)](https://claude.ai/customize/skills/yours), open the **...** menu next to `/adhoc-answer`, select **Share**, and pick your teammates. For your whole organization, open the skill and select **Publish to org**, if your admin allows. They get the skill with your model and naming rules baked in, so they don't have to build it again.

## What changes for the analytics queue[](https://academy.claude.com/use-cases/answer-the-adhoc)

Ad-hoc data questions are answered with a working query and explanation drafted together — you review and correct instead of writing SQL from scratch.

You did this for one margin question. The same approach covers cohort retention, funnel conversion, and anomaly checks — each one becomes a skill your team runs the same way.

### Finish it where the file lives

[![](https://academy.claude.com/surfaces/excel-icon.svg)

Claude for Excel

Validate the numbers in a workbook

Install](https://claude.com/claude-for-microsoft-365)

[Next: Metrics deep-dive → narrative](https://academy.claude.com/use-cases/metrics-narrative)

Was this helpful?
