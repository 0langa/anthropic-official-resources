# Understand Claude Code’s impact with contribution metrics

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Code
- DateJanuary 29, 2026
- Reading time3 min
- ShareCopy link

Today, we're introducing contribution metrics in Claude Code, available in public beta. Engineering teams can now measure how Claude Code impacts their team’s velocity, tracking PRs shipped and code committed with Claude's help.

## **How we're shipping at Anthropic**

Engineering teams at Anthropic use Claude Code extensively, and contribution data has helped us quantify its impact. As Claude Code adoption has increased internally, we've seen a 67% increase in PRs merged per engineer per day. Across teams, 70–90% of code is now being written with Claude Code assistance.

While pull requests alone are an incomplete measure of developer velocity, we’ve found them to be a close proxy for what engineering teams care about: shipping features, fixing bugs, and delighting users faster.

The new contribution metrics in Claude Code help you measure this impact in your own organization.

## **Measure velocity with Claude Code**

By integrating with GitHub, contribution metrics surface the following data points:

- **Pull requests merged**: Track PRs created with and without Claude Code assistance
- **Code committed**: See lines of code committed to your repositories with and without Claude Code assistance
- **Per-user contribution data**: Identify adoption patterns across your team

Contribution data is calculated by matching Claude Code session activity with GitHub commits and PRs. We calculate this conservatively, and only code where we have high confidence in Claude Code's involvement is counted as assisted.

![](https://assets.claude.com/006b8b641d3888dd312c8bd9ff3aeb6cf8773323.png)![](https://assets.claude.com/b76efb0d26f9a49a9823e47bc9b4dd17284eaf87.png)

The metrics appear in your existing Claude Code analytics dashboard, accessible to workspace admins and owners. No external tools or data pipelines are required. Simply install our GitHub App and authenticate to your organization’s GitHub account, and metrics will automatically populate on the dashboard.

Contribution metrics are designed to complement your existing engineering KPIs. Use them alongside DORA metrics, sprint velocity, or other measures to understand directional changes from bringing Claude Code to your team.

## **Getting started**

Code contribution metrics are available now in beta for Claude Team and Enterprise customers. To enable them:

1. Install the [Claude GitHub App](https://github.com/apps/claude) for your organization
2. Navigate to [Admin settings > Claude Code](http://claude.ai/admin-settings/claude-code) and toggle on GitHub Analytics
3. Authenticate to your GitHub organization

Metrics begin populating automatically as your team uses Claude Code. View the [documentation](https://code.claude.com/docs/en/analytics) for detailed setup instructions and guidance on interpreting your metrics.

## Related articles

Explore more product news and best practices for teams building with Claude.

[ArticleOct 22, 2026

### The full Claude Platform, available on Google Cloud

Use Claude Models on Google Cloud (Anthropic managed) to access Claude Platform features with Google Cloud authentication, billing, and commitment retirement.

Claude Platform](https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed)[ArticleOct 21, 2026

### HCLTech joins the Claude Partner Network as a Global Premier partner

HCLTech will bring Claude into the solutions it provides for banks, hospitals, telecom companies, and manufacturers.](https://claude.com/resources/articles/hcltech-joins-claude-partner-network)[ArticleOct 21, 2026

### Introducing Claude Duet

A research preview is available by waitlist today, starting with US Pro and Max subscribers.](https://claude.com/resources/articles/claude-duet)[ArticleOct 21, 2026

### Claude Security now scans continuously and tracks fixes

Claude Security now keeps up with your repositories as code changes, tracks findings until they’re fixed, learns from the context your team adds, and connects to your tools through an API and MCP. Available in public beta for Claude Enterprise customers.

Claude Security](https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
