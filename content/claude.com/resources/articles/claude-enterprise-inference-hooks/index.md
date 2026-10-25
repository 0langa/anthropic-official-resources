# Inference hooks: inline data loss prevention for Claude Enterprise

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Enterprise, Claude apps, Claude Cowork, Claude Code
- DateAugust 5, 2026
- Reading time4 min
- ShareCopy link

![](https://assets.claude.com/ea1030817dc2ba53b41c8049ca9a707dfc09fcce.gif)

Inference hooks lets your compliance team inspect and enforce policy on every prompt and tool call response before they reach Claude — across Claude Enterprise surfaces including chat, Claude Code, Claude Cowork, and more. Your DLP server makes the call to block or allow, and Claude enforces that decision in real time, blocking unapproved content before it reaches Claude.

Security teams require every channel where employees can move sensitive data to pass through an inspection point their team controls. Until today, native inline enforcement was limited to Claude Code's client-side hooks. Inference hooks closes the gap with a single enforcement layer that covers every Claude Enterprise surface without separate integration work or agent per product.

## How inference hooks works

![](https://assets.claude.com/d4d917c41136cdd796632537b4ed39618b0bc62b.png)

When an organization turns on inference hooks, every inference request routes through a signed WebSocket connection to a security server. Before the model starts generating, Claude sends the prompt and its surrounding context to your server. Your server returns a verdict — allow or deny — and Claude only proceeds once it has one. The same check runs on tool calls: when Claude calls a tool — including tools connected through MCP, skills, and plugins — the tool's response is checked before it's sent back to the model.

Teams are already putting that real-time check to work. "Inference hooks add a checkpoint to inspect what's flowing to Claude in real time, before the model ever sees it," said Andrew Grimmett, Vice President of Information Security at Bandwidth. "This lets us safely move faster on AI without giving up control."

## Ways to use inference hooks

Extend your existing DLP program to Claude. Inference hooks uses an open, webhook-based protocol with a published schema. That makes deployment easy — just point it at the same server your other tools already report to including Netskope, Palo Alto Networks, Proofpoint, Zscaler or an AI security server you built in-house.

Cover chat, Claude Code, Cowork, and additional Claude Enterprise products with one configuration. Turn on inference hooks once at the organization level and it applies to Claude Enterprise surfaces, including tool calls made through MCP connectors, skills, and plugins.

Simplify rollout with shadow mode (always allow), role-based exclusions, and percentage-based rollouts. Customize failure-policy tolerance, timeouts, and other settings to match your organization's risk tolerance.

## Getting started

Inference hooks is available today in beta for Claude Enterprise customers. Read the [documentation](https://platform.claude.com/docs/en/manage-claude/inference-hooks) to configure your organization's DLP server and start enforcing policy across Claude Enterprise surfaces.

For security vendors, inference hooks is built on a webhook-based protocol with a documented schema, so you can build an integration, and Claude Enterprise customers can point their organization at your platform.

## Related articles

Explore more product news and best practices for teams building with Claude.

[ArticleOct 23, 2026

### Claude Cowork and chat come together for Enterprise

Claude Enterprise](https://claude.com/resources/articles/unified-claude-enterprise)[ArticleOct 23, 2026

### Claude Duet Safety, Privacy, and Security

Claude Duet is a proactive agent that works for you, even while you’re away. It builds on two layers of protection: safety training in the Claude model itself and the safeguards that exist in products like Claude Code and Claude Managed Agents. On top of those, we added new protections for working across your accounts and acting on your behalf.](https://claude.com/resources/articles/claude-duet-safety-privacy-and-security)[ArticleOct 22, 2026

### The full Claude Platform, available on Google Cloud

Use Claude Models on Google Cloud (Anthropic managed) to access Claude Platform features with Google Cloud authentication, billing, and commitment retirement.

Claude Platform](https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed)[ArticleOct 21, 2026

### HCLTech joins the Claude Partner Network as a Global Premier partner

HCLTech will bring Claude into the solutions it provides for banks, hospitals, telecom companies, and manufacturers.](https://claude.com/resources/articles/hcltech-joins-claude-partner-network)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
