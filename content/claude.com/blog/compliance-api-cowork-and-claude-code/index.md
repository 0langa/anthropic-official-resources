![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d2308749b4e883cc44b7_e029027e0b3beeb5b629bd4a26143597e7775b38-1000x1000.svg)

# Compliance API coverage extends to Claude Cowork and Claude Code

- Category

  [Enterprise AI](https://claude.com/blog/category/enterprise-ai)

  [Product announcements](https://claude.com/blog/category/announcements)
- Product

  [Claude Enterprise](https://claude.com/solutions/enterprise)

  Claude apps

  [Claude Code](https://claude.com/product/claude-code)

  [Claude Cowork](https://claude.com/product/cowork)
- Date

  August 11, 2026
- Reading time

  5

  min
- Share

  [Copy link](https://claude.com/blog/compliance-api-cowork-and-claude-code)

  https://claude.com/blog/compliance-api-cowork-and-claude-code

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

No items found.

[Prev](https://claude.com/blog/compliance-api-cowork-and-claude-code)Prev

0/5

[Next](https://claude.com/blog/compliance-api-cowork-and-claude-code)Next

eBook

##

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)

Embedded media:

FAQ

No items found.

## Related posts

Explore more product news and best practices for teams building with Claude.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d224d39f9b8e905d1823_b68cbb43d7c8f56f0b14cc867e8d4d74445f78b0-1000x1000.svg)

Sep 14, 2026

### Deploying AI from pilot to production

Enterprise AI

[Deploying AI from pilot to production](https://claude.com/blog/compliance-api-cowork-and-claude-code)Deploying AI from pilot to production

[Deploying AI from pilot to production](https://claude.com/blog/deploying-ai-from-pilot-to-production)Deploying AI from pilot to production

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d2222403b092e0358b0e_cd4fd51deacd067d4e30aee4f4b149f6cba1b97b-1000x1000.svg)

Sep 10, 2026

### What 1,000 small business owners taught us about AI

Enterprise AI

[What 1,000 small business owners taught us about AI](https://claude.com/blog/compliance-api-cowork-and-claude-code)What 1,000 small business owners taught us about AI

[What 1,000 small business owners taught us about AI](https://claude.com/blog/what-1-000-small-business-owners-taught-us-about-ai)What 1,000 small business owners taught us about AI

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d228e9c51800dde13958_6507d83d1197bb8630131d363fb8bea838d79ca7-1000x1000.svg)

Sep 14, 2026

### Agentic coding is straining CI. Here’s how we scaled test impact analysis at Anthropic

Claude Code

[Agentic coding is straining CI. Here’s how we scaled test impact analysis at Anthropic](https://claude.com/blog/compliance-api-cowork-and-claude-code)Agentic coding is straining CI. Here’s how we scaled test impact analysis at Anthropic

[Agentic coding is straining CI. Here’s how we scaled test impact analysis at Anthropic](https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic)Agentic coding is straining CI. Here’s how we scaled test impact analysis at Anthropic

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d2319ef2161fcf9ba649_ddad92700787ec1bf1d80359c0c5e6ca305682b0-1000x1000.svg)

Sep 14, 2026

### Claude for Financial Advisors

Product announcements

[Claude for Financial Advisors](https://claude.com/blog/compliance-api-cowork-and-claude-code)Claude for Financial Advisors

[Claude for Financial Advisors](https://claude.com/blog/claude-for-financial-advisors)Claude for Financial Advisors

## Transform how your organization operates with Claude

See pricing

[See pricing](https://claude.com/pricing)See pricing

Contact sales

[Contact sales](https://claude.com/contact-sales)Contact sales

Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

[Subscribe](https://claude.com/blog/compliance-api-cowork-and-claude-code)Subscribe

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.

Thank you! You’re subscribed.

Sorry, there was a problem with your submission, please try again later.
