# Structured outputs on the Claude Developer Platform

Guarantee responses match your JSON schemas and tool definitions with structured outputs.

- Category[Product updates](https://claude.com/resources/product-updates)
- ProductClaude Platform
- DateNovember 14, 2025
- Reading time4 min
- ShareCopy link

***Update:** Now generally available (GA) natively on the Claude Developer Platform and in Amazon Bedrock for Claude Sonnet 4.5, Opus 4.5, and Haiku 4.5. GA adds support for more complex schemas. (Feb 4, 2026)*

***Update:** Now available on Claude Haiku 4.5—supported on the Claude Developer Platform, natively and in Microsoft Foundry. (Dec 4, 2025)*

The [Claude Developer Platform](https://claude.com/platform/api) now supports structured outputs for Claude Sonnet 4.5 and Opus 4.1. Available in public beta, this feature ensures API responses always match your specified JSON schemas or tool definitions.

With structured outputs, developers can eliminate schema-related parsing errors and failed tool calls by ensuring that Claude's responses conform to a defined schema—whether you're extracting data from images, orchestrating agents, or integrating with external APIs.

### Building reliable applications

For developers building applications and agents in production, a single error in data formatting can cause cascading failures. Structured outputs solves this by guaranteeing your response matches the exact structure you define, without any impact to model performance. This makes Claude dependable for applications and agents where accuracy is critical, including:

- **Data extraction** when downstream systems rely on error-free, consistent formats.
- **[Multi-agent architectures](https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop)** where consistent communication between agents is critical for a performant, stable experience.
- **Complex search tools** where multiple search fields must be filled in accurately and conform to specific patterns.

Structured outputs can be used two ways: with JSON or tools. When used with JSON, you provide your schema definition in the API request. For tools, you define your tool specifications, and Claude's output conforms to those tool definitions automatically.

The end result is a reliable output, reduced retries, and a simplified codebase that no longer needs failover logic or complex error handling.

### Customer Spotlight: OpenRouter

OpenRouter provides 4M+ developers access to all major AI models through a single, unified interface.

"Structured outputs have become a really valuable part of the agentic AI stack. Agents constantly ingest and produce structured data, so Anthropic’s structured outputs close a real gap for developers. Agent workflows run reliably, every time, and teams can focus on their customers rather than debugging tool calls,” said Chris Clark, COO, OpenRouter.

### Getting started

Structured outputs is now available in public beta for Sonnet 4.5 and Opus 4.1 on the Claude Developer Platform, with support for Haiku 4.5 coming soon. Explore our [documentation](https://docs.claude.com/en/docs/build-with-claude/structured-outputs) for supported JSON schema types, implementation examples, and best practices.

## Related articles

Explore more product news and best practices for teams building with Claude.

[ArticleNov 10, 2026

### Your apps can now open in Claude, and Claude can work in them

Our partners can now embed their apps directly in Claude, so you and Claude can work in the same tool, on the same screen, without switching tabs.

Claude appsMCP](https://claude.com/resources/articles/interactive-connectors-full-tool)[ArticleNov 10, 2026

### More ways to work with Claude: Sheets, Whiteboards, and Interactive Connectors

Work at the speed of thought

Claude apps](https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors)[ArticleNov 10, 2026

### Introducing Claude Whiteboards, Claude Sheets, and Claude Data

Now you can brainstorm on whiteboards, build sheets, and share data directly in Claude.

Claude apps](https://claude.com/resources/articles/sheets-whiteboards-data)[ArticleNov 9, 2026

### Claude Fable 5.2 and Mythos 5.2

Introducing Claude Fable 5.2 and Claude Mythos 5.2, our new models for the hardest technical challenges.

Claude appsClaude Code1 more: Claude PlatformClaude Platform

(opens in new tab)](https://www.anthropic.com/claude-fable-and-mythos-5-2)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
