# Built-in memory for Claude Managed Agents

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Platform
- DateApril 23, 2026
- Reading time4 min
- ShareCopy link

Memory on [Claude Managed Agents](https://claude.com/resources/articles/claude-managed-agents) is available today in public beta. Your agents can now learn from every session, using an intelligence-optimized memory layer that balances performance with flexibility. Because memories are stored as files, developers can export them, manage them via the API, and keep full control over what agents retain.

![](https://assets.claude.com/f55bb71c387d00c0604c391b77605382df1cfff6.png)

## How memory works in Claude Manged Agents

Memory for Claude Managed Agents is a built-in, intelligence-optimized memory layer that lets agents learn from every session. Memory is optimized against internal benchmarks for long-running agents that improve across sessions and share what they've learned with each other.

We've found that agents are most effective with memory when it builds on the tools they already use. Memory on Claude Managed Agents mounts directly onto a filesystem, so Claude can rely on the same bash and code execution capabilities that make it effective at agentic tasks. With filesystem-based memory, [our latest models](https://www.anthropic.com/news/claude-opus-4-7) save more comprehensive, well-organized memories and are more discerning about what to remember for a given task.

## Portable memories for production-grade agents

Memory is built for enterprise deployments, with scoped permissions, audit logs, and full programmatic control. Stores can be shared across multiple agents with different access scopes. For example, an org-wide store might be read-only, while per-user stores allow reads and writes. Multiple agents can work concurrently against the same store without overwriting each other.

Memories are files that can be exported and independently managed via the API, giving developers full control. All changes are tracked with a detailed audit log, so you can tell which agent and session a memory came from. You can roll back to an earlier version or redact content from history. Updates also surface in the [Claude Console](https://platform.claude.com/) as session events, so developers can trace what an agent learned and where it came from.

## **What teams are building**

Teams have been using memory to close feedback loops, speed up verification, and replace custom retrieval infrastructure:

- **Netflix** agents carry context across sessions, including insights that took multiple turns to uncover and corrections from a human mid-conversation, instead of manually updating prompts and skills.
- **Rakuten's** task-based long-running agents use memory to learn from every session and avoid repeating past mistakes, cutting first-pass errors by 97%, all within workspace-scoped, observable boundaries.
- **Wisedocs** built their document verification pipeline on Managed Agents, using cross-session memory to spot and remember recurring document issues, speeding up verification by 30%.**‍**
- **Ando** is building their workplace messaging platform on Managed Agents, capturing how each organization interacts instead of building memory infrastructure themselves.

![Rakuten](https://assets.claude.com/5463fa5a44d12868ceec5ae30bfc8c412cafdeae.svg)

> “Memory in Claude Managed Agents lets us put continuous learning into production at scale. Our agents distill lessons from every session, delivering 97% fewer first-pass errors at 27% lower cost and 34% lower latency, so users spend less time nudging agents to fix mistakes the system has already learned to avoid. And because memory is workspace-scoped and observable, continuous learning stays under our control.”

Yusuke Kaji, General Manager, AI for Business

![Ando](https://assets.claude.com/9d0ae4950cad063b171ca1e5a983f38f34493562.svg)

> “A lot of our work at Ando is making sense of fast-moving, messy conversations between teams and their agents. Memory lets us stop building memory infra and focus on the product itself.”

Sara Du, Founder

![Wisedocs](https://assets.claude.com/3af81b32b07b671a26e887260609c5b8747f2c3b.svg)

> “A good memory API gets rid of many infrastructure headaches, especially when building across agents and sessions. In our document verification pipeline on Claude Managed Agents, we used cross-session memory to let our agents identify and remember common issues — including ones we didn't think about. It's sped verification up 30%.”

Denys Linkov, Head of Machine Learning

## Getting started

Memory on Managed Agents is now available in public beta on the Claude Platform. Visit the [Claude Console](https://platform.claude.com/workspaces/default/memory-stores) or use our new CLI to deploy your first agent with memory. Explore the [documentation](https://platform.claude.com/docs/en/managed-agents/memory) to learn more.

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
