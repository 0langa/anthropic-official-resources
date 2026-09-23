# Chart a metric from your data warehouse

Ask a data question in the thread where a number is being discussed, and Claude Tag queries the connected warehouse and replies with a chart and the query.

10 minResearchClaude Tag

![](https://academy.claude.com/assets/v1/thumbnail.light-mlmvli26.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-o1dom7ee.png)

A team discussing a metric in a channel can ask for the number in the thread and get it there, as a chart, while the discussion is still going. With Claude Tag connected to the data warehouse, anyone in the channel can ask, whether or not they write SQL. The query arrives with the chart, so the people who own the metric can see how it was counted.

Ask in the thread, and Claude runs the query and posts **[the chart and the query as artifacts(opens in new tab)](https://claude.com/docs/claude-tag/users/use-cases/create-artifacts)** there. In the thread, **[anyone on the team can reply to correct it(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)**. Claude can save a correction for the channel, and post a number the team checks every week as a **[routine(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity)**.

## Set up[](https://academy.claude.com/use-cases/chart-a-metric-from-your-data-warehouse)



**Ask in the right spot**



[The thread(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works) where the number is being discussed

In any channel, public or private, that has the warehouse connection.



**Give Claude the right tools**

![](https://academy.claude.com/assets/v1/snowflake-f7euzg40.svg)

BigQuery or SnowflakeRequired

Connected to the channel, read-only, so Claude can run the query.



**Make sure Claude is in the channel:** `/invite @Claude`.

**Check what tools are connected:** `@Claude what can you access from this channel?`

For help, ask your admin or visit our [troubleshooting docs(opens in new tab)](https://claude.com/docs/claude-tag/users/troubleshooting).

## What to ask Claude, and what it does[](https://academy.claude.com/use-cases/chart-a-metric-from-your-data-warehouse)

Ask in the thread where the discussion is happening, each time you need a number from the data warehouse. Name the metric and the time period. Claude reads the whole thread, so you can refer to something said earlier without describing it again.

#growth-metricsMJYReplay

M

MayaMonSignups dipped twice last quarter. Is growth actually slowing, or is that noise?

J

JordanMonOne of those was the outage week, I think. Incident write-up is here.

Y

YouCopy

@Claude show signup growth by week for the last quarter, and explain the two dips people were debating above.

👀1

ClaudeApp

✱Read this thread for the metric and the two dips people mentioned

○Query weekly signups for last quarter in the warehouse

○Draw the chart and match the dips to what the thread said

○Post the chart with the query attached

todos as of just now

ClaudeApp10:03 AM

The two dips are real, but signups are not trending down.

Outside the two dips, weekly signups stayed between about 1,150 and 1,430 and ended the quarter at 1,430. The dips people mentioned above are week 2 (1,240 to 890) and week 9 (1,180 to 1,020), and both recovered the following week.

Week 2 is the week of the outage linked earlier in this thread, and week 9 is the week the pricing change was announced. Jordan's message #announcements, pricing change

**Signups per week, last quarter** (bar chart attached, one bar per week)

The query is attached. It counts rows in `analytics.signups` by the week of `created_at`. If your team excludes reactivated accounts or test signups, tell me and I will rerun it that way.



Signups per week, last quarter

image in this thread · anyone in the channel can open it



signups\_by\_week.sql

the query behind the chart, attached in this thread · anyone in the channel can open it

This is an illustrative example of what Claude Tag can do.

Open the query to see what it counted and what it left out, and reply in the thread if your team counts the metric differently.

## Follow ups[](https://academy.claude.com/use-cases/chart-a-metric-from-your-data-warehouse)

### Correct how the metric is counted, and have Claude remember it for the channel[](https://academy.claude.com/use-cases/chart-a-metric-from-your-data-warehouse)

Claude redraws a chart from a correction in the thread. When the correction should apply from now on, for example that reactivated accounts should not count as signups, ask Claude to remember it for the channel ([channel memory(opens in new tab)](https://claude.com/docs/claude-tag/users/memory)):

#growth-metricsMJY

Y

YouCopy

@Claude update your memory for this channel so this doesn't happen again.

### Get key metrics posted on a schedule[](https://academy.claude.com/use-cases/chart-a-metric-from-your-data-warehouse)

Claude can run a query and post the chart every morning ([routine(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity)). Name the format so each post stays short, and name the time zone.

#growth-metricsMJY

Y

YouCopy

@Claude every weekday at 8am Pacific, post yesterday's key metrics as a chart with a two-line summary of anything unusual.

### Ask Claude which routines are set up in this channel[](https://academy.claude.com/use-cases/chart-a-metric-from-your-data-warehouse)

Claude lists a channel's routines when asked. Check before adding one, and stop one by naming it ([manage standing work(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity)).

#growth-metricsMJY

Y

YouCopy

@Claude what routines do you have set up in this channel?

### Chart numbers people posted in the channel, without a warehouse[](https://academy.claude.com/use-cases/chart-a-metric-from-your-data-warehouse)

Without a warehouse connection, Claude can chart numbers people posted in the channel, such as request volume in a triage channel.

#support-triageY

Y

YouCopy

@Claude chart the volume of requests in this channel by week, and how long each waited for a first reply.

## Tips[](https://academy.claude.com/use-cases/chart-a-metric-from-your-data-warehouse)

### Keep each task in its own thread[](https://academy.claude.com/use-cases/chart-a-metric-from-your-data-warehouse)

Claude treats a thread as one continuing conversation, so each reply builds on the last and follow-up questions can be short. A new message in the channel starts a fresh conversation, so include what Claude needs, such as the metric and the time period.

## Related resources[](https://academy.claude.com/use-cases/chart-a-metric-from-your-data-warehouse)

- Learn more in the [Introduction to Claude Tag(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag) course.
- [Get started with Claude Tag(opens in new tab)](https://claude.com/docs/claude-tag/users/getting-started): add @Claude to a channel and see what it can read there.
- [Answer data questions(opens in new tab)](https://claude.com/docs/claude-tag/users/use-cases/answer-data-questions): the Claude Tag docs page this use case is based on.

Was this helpful?
