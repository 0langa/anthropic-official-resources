# Make long-running agents faster with message threads

New in the Messages API, send your conversation once, and the API receives only what’s new with every turn.

- Category[Product updates](https://claude.com/resources/product-updates)
- ProductClaude Platform
- DateNovember 2, 2026
- Reading time3 min
- ShareCopy link

Message threads is now available in public beta on the Claude Platform. With message threads, agents no longer need to resend the full conversation history on every turn, reducing latency for long-running sessions.

### How message threads works

A coding agent might make hundreds of requests in one session, and each request resends every earlier message and tool result. Once a conversation reaches hundreds of thousands of tokens, resending all of it adds time before Claude starts responding. With message threads, agents send only what’s new since the last turn, which reduces time to first token (TTFT).

With message threads on by default for most Claude Code users, requests with 500k to 1M tokens see median TTFT drop by about 35%.

To use message threads, add the `thread` parameter to Messages API requests. The first request includes the full conversation and starts a thread. Each request after that includes only the new messages and the ID of the previous response. Between turns, we hold each thread in memory, where it’s encrypted and not written to disk. A thread expires 5 minutes after its last request and your client then resends the full conversation to start a new one. While each request is smaller with message threads, Claude still reads the full conversation on every turn, so token usage stays the same.

Message threads is best for active sessions where latency matters, including:

- **Long-running coding agents**,where each tool result or file edit adds to the conversation.
- **Computer use agents**,where screenshots stay with the thread instead of being re-uploaded on every turn.
- **Document and image-heavy workflows**, where requests are made smaller.

The more context an agent carries, the more message threads can reduce time to first token.

### Getting started

Message threads is available now in public beta on the native Claude Platform, and on Claude Platform on AWS, Claude in Microsoft Foundry, and on [Claude Models on Google Cloud (Anthropic managed)](https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed). Standard Claude token rates and existing rate limits apply. See the [documentation](https://platform.claude.com/docs/en/build-with-claude/message-threads) to get started.

## Related articles

Explore more product news and best practices for teams building with Claude.

[ArticleNov 24, 2026

### Turn artifacts into Mac and Windows apps

Open the artifacts you use every day like any other app, and let them do more on your computer

Claude apps](https://claude.com/resources/articles/install-as-app)[ArticleNov 24, 2026

### MCP servers can now ship skills, run tasks, and more with Claude

Claude appsClaude Platform](https://claude.com/resources/articles/skills-over-mcp-tasks-and-more)[ArticleNov 23, 2026

### Zero data retention with Enterprise Frontier Safeguards is now in beta

Claude Platform](https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards)[ArticleNov 23, 2026

### Introducing Claude Ship

Open a pull request and get back to building. Claude can now review pull requests, fix them, and approve the ones that a team's policy allows.

Claude Ship](https://claude.com/resources/articles/introducing-claude-ship)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
