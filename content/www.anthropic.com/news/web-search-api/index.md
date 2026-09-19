![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d22e13864f88ea55c2d8_b5c98d26c46edc43193e7f7e28a00633a538bb9c-1000x1000.svg)

# Introducing web search on the Anthropic API

Claude can now search the web through the API, giving users access to real-time information with citations for building up-to-date AI applications.

- Category

  [Product announcements](https://claude.com/blog/category/announcements)
- Product

  [Claude Platform](https://claude.com/platform/api)
- Date

  May 7, 2025
- Reading time

  5

  min
- Share

  [Copy link](https://claude.com/blog/web-search-api)

  https://claude.com/blog/web-search-api

***Update:****You can now add the web fetch tool to your requests and Claude will fetch and analyze content from any webpage URL. September 10, 2025*

Today, we're introducing web search on the Anthropic API—a new tool that gives Claude access to current information from across the web. With web search enabled, developers can build Claude-powered applications and agents that deliver up-to-date insights.

### Power AI agents with the latest information from the web

Developers can now augment Claude’s comprehensive knowledge with current, real-world data by enabling the web search tool when making requests to the Messages API.

Embedded media: https://www.youtube.com/embed/2Qx4i3pV81M

When Claude receives a request that would benefit from up-to-date information or specialized knowledge, it uses its reasoning capabilities to determine whether the web search tool would help provide a more accurate response. If searching the web would be beneficial, Claude generates a targeted search query, retrieves relevant results, analyzes them for key information, and provides a comprehensive answer with citations back to the source material.

Claude can also operate agentically and conduct multiple progressive searches, using earlier results to inform subsequent queries in order to do light research and generate a more comprehensive answer. Developers can control this by adjusting the *max\_uses* parameter*.* Behind the scenes, Claude may also refine its queries to deliver a more accurate response.

With web search, developers can now build AI solutions that tap into current information without needing to manage their own web search infrastructure.

### Use cases

Web search enables Claude to power a wide range of use cases that benefit from real-time data and specialized knowledge across various industries. Use cases include:

- **Financial services:** Build AI agents that analyze real-time stock prices, market trends, and regulatory updates.
- **Legal research:** Create tools that access recent court decisions, regulatory changes, and legal news.
- **Developer tools:** Enable Claude to reference the latest API documentation, GitHub releases, and technology updates.
- **Productivity:** Build agents that incorporate the latest company reports, competitive intelligence, or industry research.

### Build with trust and control

Every web-sourced response includes citations to source materials, enabling users to verify information directly. This is particularly valuable for sensitive use cases that require accuracy and accountability.

![A screenshot of the UX showing blocked domains.](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/68e95d93039df37d2c2df52e_b57f878e8735a67a64c1463c8248f0f4b0797952-3840x2160.png)

Organizations can maintain additional control through the following admin settings:

- **Domain allow lists**: Specify which domains Claude can search and retrieve information from, ensuring that results only come from approved sources.
- **Domain block lists**: Prevent Claude from accessing certain domains that may contain sensitive, competitive, or inappropriate content for your organization.
- **Organization-level management**: Administrators can allow or prohibit web search use at the organization level.

### Enhance Claude Code with web search

Web search is also now available in Claude Code, adding the latest information from the web to development workflows.

With web search enabled, Claude Code can access current API documentation, technical articles, and other information on development tools and libraries. This is particularly valuable when working with new or rapidly evolving frameworks, troubleshooting obscure errors, or implementing features that require version-specific API references.

### Customer Spotlight: Poe

Quora is bringing web search to its AI platform, Poe.

“Anthropic's web search tool is a welcome addition to the Poe platform. It is cost effective and delivers search results with impressive speed, which will benefit people who need access to real-time information while using Claude models on Poe,” said Spencer Chan, Head of Poe Product, Quora.

### Customer Spotlight: Adaptive.ai

Adaptive is an AI tool for consumers to create end-to-end apps.

“Anthropic’s web search delivers consistently thorough results that have outperformed other tools we’ve tested. The depth and accuracy of Claude’s responses and its ability to function as a research agent will make a significant difference in how effectively we enable our customers to build web-enabled products,” said Dennis Xu, Co-founder, Adaptive.

### Getting started

Web search is now available on the Anthropic API for Claude 3.7 Sonnet, the upgraded Claude 3.5 Sonnet, and Claude 3.5 Haiku at $10 per 1,000 searches plus standard token costs.

To get started, enable the web search tool in your API requests. Explore our [documentation](https://docs.anthropic.com/en/docs/build-with-claude/tool-use/web-search-tool) and [pricing](https://www.anthropic.com/pricing) to learn more.

No items found.

[Prev](https://claude.com/blog/web-search-api)Prev

0/5

[Next](https://claude.com/blog/web-search-api)Next

eBook

##

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)

![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)![](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6889473610b50328dbb70b58_placeholder.svg)

Embedded media:

FAQ

No items found.

## Related posts

Explore more product news and best practices for teams building with Claude.

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6aa82dfc4ca89952d04c3873_Object-Store.svg)

Sep 15, 2026

### Claude for Small Business launches new workflows, integrations, and training programs

Product announcements

[Claude for Small Business launches new workflows, integrations, and training programs](https://claude.com/blog/web-search-api)Claude for Small Business launches new workflows, integrations, and training programs

[Claude for Small Business launches new workflows, integrations, and training programs](https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs)Claude for Small Business launches new workflows, integrations, and training programs

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6a42c9bc20d2072552ef256a_Node-EnterpriseAgents.svg)

Sep 17, 2026

### Projects redesigned: from folder to conversation

Product announcements

[Projects redesigned: from folder to conversation](https://claude.com/blog/web-search-api)Projects redesigned: from folder to conversation

[Projects redesigned: from folder to conversation](https://claude.com/blog/projects-redesigned)Projects redesigned: from folder to conversation

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d22d0099a66d72e05699_33ddc751e21fb4b116b3f57dd553f0bc55ea09d1-1000x1000.svg)

Jun 18, 2026

### Claude Code now supports artifacts

Product announcements

[Claude Code now supports artifacts](https://claude.com/blog/web-search-api)Claude Code now supports artifacts

[Claude Code now supports artifacts](https://claude.com/blog/artifacts-in-claude-code)Claude Code now supports artifacts

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6903d229061abf091318fc81_6905c83d0735e1bc430025fdd1748d1406079036-1000x1000.svg)

Jun 25, 2025

### Turn ideas into interactive AI-powered apps

Product announcements

[Turn ideas into interactive AI-powered apps](https://claude.com/blog/web-search-api)Turn ideas into interactive AI-powered apps

[Turn ideas into interactive AI-powered apps](https://claude.com/blog/build-artifacts)Turn ideas into interactive AI-powered apps

## Transform how your organization operates with Claude

See pricing

[See pricing](https://claude.com/pricing)See pricing

Contact sales

[Contact sales](https://claude.com/contact-sales)Contact sales

Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

[Subscribe](https://claude.com/blog/web-search-api)Subscribe

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.

Thank you! You’re subscribed.

Sorry, there was a problem with your submission, please try again later.
