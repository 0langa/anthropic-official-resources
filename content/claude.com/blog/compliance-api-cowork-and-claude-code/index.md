# Compliance API coverage extends to Claude Cowork and Claude Code

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Enterprise, Claude apps, Claude Code, Claude Cowork
- DateAugust 11, 2026
- Reading time3 min
- ShareCopy link

***Update: Compliance API: Cowork (desktop, web, and mobile) and Claude Code (CLI and desktop) coverage are now generally available; Microsoft 365 add-ins (Excel, Word, PowerPoint, and Outlook) and Claude Science coverage are in beta (August 26, 2026)***

Claude's Compliance API now covers Cowork across the desktop app, web, and mobile, as well as Claude Code in the CLI and desktop app. Coverage is in beta for Claude Enterprise customers. Compliance and security teams can pull session content and metadata from both products through the same Compliance API interface they already use for Claude chats.

The new endpoints are additive: nothing changes about the data you already pull from the Compliance API today.

Security and compliance teams rely on the Compliance API to see how Claude is used across their organization — for audits and eDiscovery — without deploying separate logging infrastructure for each surface. Extending coverage to Cowork and Claude Code closes a gap: those sessions now show up alongside Claude chats.

## How it works

The new session endpoints return a consolidated, server-hosted transcript for each Cowork and Claude Code session, so prompts, responses, and tool activity come back together in a single session record.

Each session record carries two kinds of data:

- **Session content:** prompts and responses, tool calls content (web and MCP), and skills and artifacts content captured as transcript text.
- **Session metadata:** verified user ID and email address, organization ID, session and per-message IDs, and timestamps.

This beta doesn't include Claude Code on the web, Claude Code accessed through the Claude Platform, or sessions run on Amazon Bedrock, Google Cloud's Vertex AI, or Microsoft Foundry.

Organizations already exporting OpenTelemetry data can keep it running: the Compliance API can work alongside it with no infrastructure required on your side.

## Getting started

Coverage for Cowork and Claude Code is available today and included with the Compliance API using your existing Compliance Access Key – there’s no separate integration to build. If it's already enabled for your organization, query the new session endpoints directly. If not, review the Compliance API [documentation](https://platform.claude.com/docs/en/manage-claude/compliance-api) to enable it.

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
