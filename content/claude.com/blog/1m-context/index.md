# Claude Sonnet 4 now supports 1M tokens of context

Claude Sonnet 4 now supports up to 1 million tokens of context—a 5x increase that lets you process entire codebases, synthesize extensive document sets, and build agents that maintain coherence across hundreds of tool calls.

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude apps
- DateAugust 12, 2025
- Reading time4 min
- ShareCopy link

***Update:**Now available on Google Cloud's Vertex AI (Aug 26, 2025)*

Claude Sonnet 4 now supports up to 1 million tokens of context on the Anthropic API—a 5x increase that lets you process entire codebases with over 75,000 lines of code or dozens of research papers in a single request.

Long context support for Sonnet 4 is now in public beta on the Claude Developer Platform natively, and in Amazon Bedrock and Google Cloud’s Vertex AI.

### Longer context, more use cases

With longer context, developers can run more comprehensive and data-intensive use cases with Claude, including:

- **Large-scale code analysis:** Load entire codebases including source files, tests, and documentation. Claude can understand project architecture, identify cross-file dependencies, and suggest improvements that account for the complete system design.
- **Document synthesis:** Process extensive document sets like legal contracts, research papers, or technical specifications. Analyze relationships across hundreds of documents while maintaining full context.
- **Context-aware agents:** Build agents that maintain context across hundreds of tool calls and multi-step workflows. Include complete API documentation, tool definitions, and interaction histories without losing coherence.

### API pricing

To account for increased computational requirements, [pricing](https://www.anthropic.com/pricing) adjusts for prompts over 200K tokens:

<table class="DataTable-module-scss-module__1wNx5a__table"><caption class="sr-only">Claude Sonnet 4 pricing on the Anthropic API</caption><thead><tr><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"></th><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Input</span></th><th class="DataTable-module-scss-module__1wNx5a__cell DataTable-module-scss-module__1wNx5a__headerCell text-body-2-serif" scope="col"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Output</span></th></tr></thead><tbody><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Prompts ≤ 200K</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">$3 / MTok</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">$15 / MTok</span></td></tr><tr><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">Prompts &gt; 200K</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">$6 / MTok</span></td><td class="DataTable-module-scss-module__1wNx5a__cell text-body-3"><span class="DataTable-module-scss-module__1wNx5a__cellBlock">$22.50 / MTok</span></td></tr></tbody></table>

When combined with [prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching), users can reduce latency and costs for Claude Sonnet 4 with long context. The 1M context window can also be used with [batch processing](https://docs.anthropic.com/en/docs/build-with-claude/batch-processing) for an additional 50% cost savings.

### Customer spotlight: Bolt.new

Bolt.new transforms web development by integrating Claude into their browser-based development platform.

“Claude Sonnet 4 remains our go-to model for code generation workflows, consistently outperforming other leading models in production. With the 1M context window, developers can now work on significantly larger projects while maintaining the high accuracy we need for real-world coding," said Eric Simons, CEO and Co-founder of Bolt.new.

### Customer spotlight: iGent AI

London-based iGent AI is advancing the field of software development with Maestro, an AI partner that transforms conversations into executable code.

"What was once impossible is now reality: Claude Sonnet 4 with 1M token context has supercharged autonomous capabilities in Maestro, our software engineering agent at iGent AI. This leap unlocks true production-scale engineering—multi-day sessions on real-world codebases—establishing a new paradigm in agentic software engineering," said Sean Ward, CEO and Co-founder of iGent AI.

### Get started

Long context support for Sonnet 4 is now in public beta on the Claude Developer Platform for customers with Tier 4 and custom rate limits, with broader availability rolling out over the coming weeks. Long context is also available in Amazon Bedrock and on Google Cloud's Vertex AI. We’re also exploring how to bring long context to other Claude products.

To learn more about Sonnet 4 and the 1M context window, see our [documentation](https://docs.anthropic.com/en/docs/build-with-claude/context-windows) and [pricing page](https://www.anthropic.com/pricing).

## Related articles

Explore more product news and best practices for teams building with Claude.

[ArticleOct 8, 2026

### Build live dashboards and animate explainers with Claude

Claude Dashboards and Claude Motion are now in beta. Docs, Slides, and Design are out of beta and on every Claude plan, including Free.

Claude appsClaude Design2 more: Claude Cowork and Claude CodeClaude CoworkClaude Code](https://claude.com/resources/articles/dashboards-and-motion)[ArticleOct 7, 2026

### Claude Haiku 5.5

Introducing Claude Haiku 5.5: the cheapest, fastest, and most capable small model we’ve ever released.

(opens in new tab)](https://www.anthropic.com/claude-haiku-5-5)[ArticleOct 6, 2026

### Claude now works with Google Docs, Sheets, and Slides

Teams that run on Google Workspace can now bring Claude into their files or work on their files directly from Claude, with our new add-on and Google Docs, Sheets, and Slides connectors (in beta).

Claude Enterprise](https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides)[ArticleOct 6, 2026

### We’re expanding the Claude Startups program to help founders build](https://claude.com/resources/articles/were-expanding-the-claude-startups-program-to-help-founders-build)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
