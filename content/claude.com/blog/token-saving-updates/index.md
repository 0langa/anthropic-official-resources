# Token-saving updates on the Anthropic API

Claude now offers cache-aware rate limits, simplified prompt caching, and token-efficient tool use to help developers increase throughput and cut costs.

- Category[Product updates](https://claude.com/resources/product-updates)
- ProductClaude Platform
- DateMarch 13, 2025
- Reading time6 min
- ShareCopy link

We've made several updates to the Anthropic API that let developers significantly increase throughput and reduce token usage with Claude 3.7 Sonnet. These include: cache-aware rate limits, simpler prompt caching, and token-efficient tool use.

Together, these updates will help you process more requests within your existing rate limits and reduce costs with minimal code changes.

### Increase your throughput with prompt caching

[Prompt caching](https://www.anthropic.com/news/prompt-caching) allows developers to store and reuse frequently accessed context between API calls. This lets Claude maintain knowledge of large documents, instructions, or examples without sending the same information with each request—reducing costs by up to 90% and latency by up to 85% for long prompts. We’ve released two improvements to prompt caching for Claude 3.7 Sonnet that work together to help you scale more efficiently.

#### Cache-aware rate limits

Prompt cache read tokens no longer count against your Input Tokens Per Minute (ITPM) limit for Claude 3.7 Sonnet on the Anthropic API. This means you can now optimize your prompt caching usage to increase throughput and get more out of your existing ITPM rate limits. Your Output Tokens Per Minute (OTPM) rate limit remains the same.

![A bar chart showing additional throughput with cache-aware ITPM.](https://assets.claude.com/9e45c3e34838c6320ad076d606f7801ec0cb6eab.png)

This makes Claude 3.7 Sonnet particularly powerful for applications that benefit from extensive context while requiring high throughput, such as:

- Document analysis platforms that need to maintain large knowledge bases in context
- Coding assistants that reference extensive codebases
- Customer support systems that leverage detailed product documentation

[Cache-aware ITPM limits](https://docs.anthropic.com/en/api/rate-limits) are available for Claude 3.7 Sonnet on the Anthropic API.

#### Simpler cache management

We've updated prompt caching to be easier to use. Now, when you set a cache breakpoint, Claude automatically reads from your longest previously cached prefix.

You no longer need to manually track and specify which cached segments to use as we automatically identify and use the most relevant cached content. This not only reduces your workload, but also frees up more tokens.

![A comparison of prompt caching with and without automatic use of the largest cached prefix.](https://assets.claude.com/b7b77a35d6d9da007b70558062694d6db1a92eb9.png)

This feature is available on the Anthropic API and Google Cloud’s Vertex AI. Explore our [documentation](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) to learn more.

### Token-efficient tool use

Claude is already capable of interacting with external client-side tools and functions. This update lets you equip Claude with your own custom tools to perform tasks—like extracting structured data from unstructured text or automating simple tasks via APIs. Claude 3.7 Sonnet now supports [calling tools in a token-efficient manner](https://docs.anthropic.com/en/docs/build-with-claude/tool-use/token-efficient-tool-use), reducing output token consumption by up to 70%. On average, early users have seen a reduction of 14%.

To use this feature, simply add the beta header *token-efficient-tools-2025-02-19* to a tool use request with Claude 3.7 Sonnet. If you are using the SDK, ensure that you are using the beta SDK with *anthropic.beta.messages*.

Token-efficient tool use is currently available in beta on the Anthropic API, Amazon Bedrock, and Google Cloud’s Vertex AI.

#### Text\_editor tool

We also introduced a new *text\_editor* tool, designed for applications where users collaborate with Claude on documents. With the new tool, Claude can make targeted edits to specific portions of text within source code, documents, or research reports. This reduces token consumption and latency, all while increasing accuracy.

Developers can easily implement this tool in their applications by providing it in their API requests and handling the tool use responses.

The *text\_editor* tool is available on the Anthropic API, Amazon Bedrock, and Google Cloud's Vertex AI. See our [documentation](https://docs.anthropic.com/en/docs/build-with-claude/tool-use/text-editor-tool) to get started.

### Customer Spotlight: Cognition

Early users, like Cognition, are leveraging these updates to improve token efficiency and response quality. Cognition is an applied AI lab and the maker of Devin, a collaborative AI teammate that helps ambitious engineering teams achieve more.

“Prompt caching allows us to provide more context about the codebase to get higher quality results while reducing cost and latency. With cache-aware ITPM limits, we are further optimizing our prompt caching usage to increase our throughput and get more out of our existing rate limits,” said Scott Wu, Co-founder and CEO at Cognition.

### Get started now

These features are available today to all Anthropic API customers. You can implement them immediately with minimal code changes:

1. **Take advantage of cache-aware rate limits:** Use [prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) with Claude 3.7 Sonnet.
2. **Implement token-efficient tool use:** Add the beta header *token-efficient-tools-2025-02-19* to your requests and start saving tokens.
3. **Try the *text\_editor* tool:** Integrate it into your applications for more efficient document editing workflows.

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
