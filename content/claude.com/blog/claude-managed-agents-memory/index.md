![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d225e31f7aa22c1f28cb_46e4aa7ea208ed440d5bd9e9e3a0ee66bc336ff1-1000x1000.svg)

# Built-in memory for Claude Managed Agents

- Category

  [Product announcements](https://claude.com/blog/category/announcements)
- Product

  [Claude Platform](https://claude.com/platform/api)
- Date

  April 23, 2026
- Reading time

  5

  min
- Share

  [Copy link](https://claude.com/blog/claude-managed-agents-memory)

  https://claude.com/blog/claude-managed-agents-memory

Memory on [Claude Managed Agents](https://claude.com/blog/claude-managed-agents) is available today in public beta. Your agents can now learn from every session, using an intelligence-optimized memory layer that balances performance with flexibility. Because memories are stored as files, developers can export them, manage them via the API, and keep full control over what agents retain.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69e911b25f02df256c8cba87_Claude-Blog-CMA-Memory.png)

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

![Logo](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/68d5faa6352b26bf7542cb9b_logo_rakuten-light.svg)![Logo](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/68d5fab610bf0d091b541153_logo_rakuten-dark.svg)

Memory in Claude Managed Agents lets us put continuous learning into production at scale. Our agents distill lessons from every session, delivering 97% fewer first-pass errors at 27% lower cost and 34% lower latency, so users spend less time nudging agents to fix mistakes the system has already learned to avoid. And because memory is workspace-scoped and observable, continuous learning stays under our control.

Yusuke Kaji, General Manager, AI for Business

![Logo](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6a1edcd77828fd211e8ca469_ando-light.svg)![Logo](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6a1edcdb9e60b6c1a29d80cb_ando-dark.svg)

A lot of our work at Ando is making sense of fast-moving, messy conversations between teams and their agents. Memory lets us stop building memory infra and focus on the product itself.

Sara Du, Founder

![Logo](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69ea2b010f3f3d0c408c6ec5_wisedocs-light.svg)![Logo](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69ea2afe43c6e63a42d7d5ce_wisedocs-dark.svg)

A good memory API gets rid of many infrastructure headaches, especially when building across agents and sessions. In our document verification pipeline on Claude Managed Agents, we used cross-session memory to let our agents identify and remember common issues — including ones we didn't think about. It's sped verification up 30%.

Denys Linkov, Head of Machine Learning

[Prev](https://claude.com/blog/claude-managed-agents-memory)Prev

0/5

[Next](https://claude.com/blog/claude-managed-agents-memory)Next

eBook

##

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)

Embedded media:

## Getting started

Memory on Managed Agents is now available in public beta on the Claude Platform. Visit the [Claude Console](https://platform.claude.com/workspaces/default/memory-stores) or use our new CLI to deploy your first agent with memory. Explore the [documentation](https://platform.claude.com/docs/en/managed-agents/memory) to learn more.

FAQ

No items found.

## Related posts

Explore more product news and best practices for teams building with Claude.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6aa82dfc4ca89952d04c3873_Object-Store.svg)

Sep 15, 2026

### Claude for Small Business launches new workflows, integrations, and training programs

Product announcements

[Claude for Small Business launches new workflows, integrations, and training programs](https://claude.com/blog/claude-managed-agents-memory)Claude for Small Business launches new workflows, integrations, and training programs

[Claude for Small Business launches new workflows, integrations, and training programs](https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs)Claude for Small Business launches new workflows, integrations, and training programs

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6a42c9bc20d2072552ef256a_Node-EnterpriseAgents.svg)

Sep 17, 2026

### Projects redesigned: from folder to conversation

Product announcements

[Projects redesigned: from folder to conversation](https://claude.com/blog/claude-managed-agents-memory)Projects redesigned: from folder to conversation

[Projects redesigned: from folder to conversation](https://claude.com/blog/projects-redesigned)Projects redesigned: from folder to conversation

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d22d0099a66d72e05699_33ddc751e21fb4b116b3f57dd553f0bc55ea09d1-1000x1000.svg)

Jun 18, 2026

### Claude Code now supports artifacts

Product announcements

[Claude Code now supports artifacts](https://claude.com/blog/claude-managed-agents-memory)Claude Code now supports artifacts

[Claude Code now supports artifacts](https://claude.com/blog/artifacts-in-claude-code)Claude Code now supports artifacts

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d229061abf091318fc81_6905c83d0735e1bc430025fdd1748d1406079036-1000x1000.svg)

Jun 25, 2025

### Turn ideas into interactive AI-powered apps

Product announcements

[Turn ideas into interactive AI-powered apps](https://claude.com/blog/claude-managed-agents-memory)Turn ideas into interactive AI-powered apps

[Turn ideas into interactive AI-powered apps](https://claude.com/blog/build-artifacts)Turn ideas into interactive AI-powered apps

## Transform how your organization operates with Claude

See pricing

[See pricing](https://claude.com/pricing)See pricing

Contact sales

[Contact sales](https://claude.com/contact-sales)Contact sales

Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

[Subscribe](https://claude.com/blog/claude-managed-agents-memory)Subscribe

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.

Thank you! You’re subscribed.

Sorry, there was a problem with your submission, please try again later.
