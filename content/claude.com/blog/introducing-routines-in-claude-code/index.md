# Introducing routines in Claude Code

Define repeatable routines that work your backlog, review your PRs, and respond to events in the cloud.

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Code
- DateApril 14, 2026
- Reading time5 min
- ShareCopy link

Today, we're introducing routines in Claude Code in research preview. A routine is a Claude Code automation you configure once — including a prompt, repo, and connectors — and then run on a schedule, from an API call, or in response to an event. Routines run on [Claude Code’s web infrastructure](https://code.claude.com/docs/en/claude-code-on-the-web), so nothing depends on your laptop being open.

Developers already use Claude Code to automate the software development cycle, but until now, they've managed cron jobs, infrastructure, and additional tooling like MCP servers themselves. Routines ship with access to your repos and your [connectors](https://claude.com/connectors), so you can package up automations and set them to run on a schedule or trigger.

## How it works

![](https://assets.claude.com/7dcf6205a44d0fe732a9697c294eed3e7f3e12a1.png)

### Scheduled routines

Give Claude Code a prompt and a cadence (hourly, nightly, or weekly) and it runs on that schedule:

Copy

```
Every night at 2am: pull the top bug from Linear, attempt a fix, and open a draft PR.
```

If you're using [/schedule](https://code.claude.com/docs/en/scheduled-tasks) in the CLI, those tasks are now scheduled routines.

### API routines

You can also configure routines to be triggered by API calls. Every routine gets its own endpoint and auth token. POST a message, get back a session URL. Wire Claude Code into your alerting, your deploy hooks, your internal tools—anywhere you can make an HTTP request:

Copy

```
Read the alert payload, find the owning service, and post a triage summary to #oncall with a proposed first step.
```

If you're building cloud-hosted agents on the Claude Platform rather than automating Claude Code, [scheduled deployments in Claude Managed Agents](https://claude.com/resources/articles/whats-new-in-claude-managed-agents) give your own agents the same run-on-a-schedule behavior.

### Webhook routines, starting with GitHub

Subscribe a routine to automatically kick off in response to GitHub repository events. Claude will create a new session for every PR matching your filters and run your routine.

Copy

```
Please flag PRs that touch the /auth-provider module. Any changes to this module need to be summarized and posted to #auth-changes.
```

Claude opens one session per PR and will continue to feed updates from that PR to the session, so it can address follow-ups like comments and CI failures.

We plan to expand webhook-based routines to trigger from more event sources in the future.

## What teams are building

A few common patterns have emerged for early users creating routines:

### Scheduled routines

- Backlog management: triage new issues nightly, label, assign, and post a summary to Slack
- Docs drift: scan merged PRs weekly, flag docs that reference changed APIs, and open update PRs

### API routines

- Deploy verification: your CD pipeline posts after each deploy, Claude runs smoke checks against the new build, scans error logs for regressions, and posts a go/no-go to the release channel
- Alert triage: point Datadog at the routine's endpoint, Claude pulls the trace, correlates it with recent deployments, and has a draft fix waiting before on-call opens the page
- Feedback resolution: a docs feedback widget or internal dashboard posts the report, Claude opens a session against the repo with the issue in context, and drafts the change

### GitHub routines

- Library port: every PR merged to a Python SDK triggers a routine that ports the change to the parallel Go SDK, and opens a matching PR
- Bespoke code review: on PR opened, run your team's own checklist across security and performance, leaving inline comments before a human reviewer looks

## Getting started

Routines are available today for Claude Code users on Pro, Max, Team, and Enterprise plans with [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) enabled. Head to [claude.ai/code](http://claude.ai/code) to create your first routine, or type /schedule in the CLI.

Routines draw down subscription usage limits in the same way as interactive sessions. In addition, routines have daily limits: Pro users can run up to 5 routines per day, Max users can run up to 15 routines per day, and Team and Enterprise users can run up to 25 routines per day. You can run extra routines beyond these limits with extra usage. [See the docs](http://code.claude.com/docs/en/routines) for more information.

## Related articles

Explore more product news and best practices for teams building with Claude.

[ArticleOct 21, 2026

### HCLTech joins the Claude Partner Network as a Global Premier partner

HCLTech will bring Claude into the solutions it provides for banks, hospitals, telecom companies, and manufacturers.](https://claude.com/resources/articles/hcltech-joins-claude-partner-network)[ArticleOct 21, 2026

### Introducing Claude Duet

A research preview is available by waitlist today, starting with US Pro and Max subscribers.](https://claude.com/resources/articles/claude-duet)[ArticleOct 21, 2026

### Claude Security now scans continuously and tracks fixes

Claude Security now keeps up with your repositories as code changes, tracks findings until they’re fixed, learns from the context your team adds, and connects to your tools through an API and MCP. Available in public beta for Claude Enterprise customers.

Claude Security](https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes)[ArticleOct 15, 2026

### Code Review is now generally available

Catch more bugs before they reach production.

Claude Code](https://claude.com/resources/articles/code-review-is-now-generally-available)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
