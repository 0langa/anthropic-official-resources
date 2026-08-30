Announcements

# Introducing the Model Context Protocol

Nov 25, 2024

![An abstract illustration of critical context connecting to a central hub](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F3aabd8804251c0364cbde9d2e4be6dc8e8c2faec-2880x1620.png&w=3840&q=75)

Today, we're open-sourcing the [Model Context Protocol](https://modelcontextprotocol.io/) (MCP), a new standard for connecting AI assistants to the systems where data lives, including content repositories, business tools, and development environments. Its aim is to help frontier models produce better, more relevant responses.

As AI assistants gain mainstream adoption, the industry has invested heavily in model capabilities, achieving rapid advances in reasoning and quality. Yet even the most sophisticated models are constrained by their isolation from data—trapped behind information silos and legacy systems. Every new data source requires its own custom implementation, making truly connected systems difficult to scale.

MCP addresses this challenge. It provides a universal, open standard for connecting AI systems with data sources, replacing fragmented integrations with a single protocol. The result is a simpler, more reliable way to give AI systems access to the data they need.

## Model Context Protocol

The Model Context Protocol is an open standard that enables developers to build secure, two-way connections between their data sources and AI-powered tools. The architecture is straightforward: developers can either expose their data through MCP servers or build AI applications (MCP clients) that connect to these servers.

Today, we're introducing three major components of the Model Context Protocol for developers:

- The Model Context Protocol [specification and SDKs](https://github.com/modelcontextprotocol)
- Local MCP server support in the [Claude Desktop apps](https://claude.ai/redirect/website.v1.94e4e9ed-8565-4ae2-a7ab-978c068f3d66/download)
- An [open-source repository](https://github.com/modelcontextprotocol/servers) of MCP servers

Claude 3.5 Sonnet is adept at quickly building MCP server implementations, making it easy for organizations and individuals to rapidly connect their most important datasets with a range of AI-powered tools. To help developers start exploring, we’re sharing pre-built MCP servers for popular enterprise systems like Google Drive, Slack, GitHub, Git, Postgres, and Puppeteer.

Early adopters like Block and Apollo have integrated MCP into their systems, while development tools companies including Zed, Replit, Codeium, and Sourcegraph are working with MCP to enhance their platforms—enabling AI agents to better retrieve relevant information to further understand the context around a coding task and produce more nuanced and functional code with fewer attempts.

"At Block, open source is more than a development model—it’s the foundation of our work and a commitment to creating technology that drives meaningful change and serves as a public good for all,” said Dhanji R. Prasanna, Chief Technology Officer at Block. “Open technologies like the Model Context Protocol are the bridges that connect AI to real-world applications, ensuring innovation is accessible, transparent, and rooted in collaboration. We are excited to partner on a protocol and use it to build agentic systems, which remove the burden of the mechanical so people can focus on the creative.”

Instead of maintaining separate connectors for each data source, developers can now build against a standard protocol. As the ecosystem matures, AI systems will maintain context as they move between different tools and datasets, replacing today's fragmented integrations with a more sustainable architecture.

## Getting started

Developers can start building and testing MCP connectors today. All [Claude.ai](http://claude.ai/redirect/website.v1.94e4e9ed-8565-4ae2-a7ab-978c068f3d66) plans support connecting MCP servers to the Claude Desktop app.

Claude for Work customers can begin testing MCP servers locally, connecting Claude to internal systems and datasets. We'll soon provide developer toolkits for deploying remote production MCP servers that can serve your entire Claude for Work organization.

To start building:

- Install pre-built MCP servers through the [Claude Desktop app](https://claude.ai/redirect/website.v1.94e4e9ed-8565-4ae2-a7ab-978c068f3d66/download)
- Follow our [quickstart guide](https://modelcontextprotocol.io/quickstart) to build your first MCP server
- Contribute to our [open-source repositories](https://github.com/modelcontextprotocol) of connectors and implementations

## An open community

MCP was created at Anthropic by David Soria Parra and Justin Spahr-Summers. We’re committed to building MCP as a collaborative, open-source project and ecosystem, and we’re eager to hear your feedback. Whether you’re an AI tool developer, an enterprise looking to leverage existing data, or an early adopter exploring the frontier, we invite you to build the future of context-aware AI together.

## Related content

### Previewing the Model Hardware Standard

We’re opening a research preview of the Model Hardware Standard (MHS), a shared specification for AI agents to safely operate physical devices, to a first group of scientific research labs and advanced manufacturers.

[Read more](https://www.anthropic.com/news/model-hardware-standard-research-preview)

### Expanding our support for scientists

Starting today, 10,000 scientists around the world can get Claude at no cost to start. Verified principal investigators qualify for a Claude Team subscription plan and then add their research team to Standard seats for free, or Premium seats for $15 per month, for up to a year.

[Read more](https://www.anthropic.com/news/expanding-support-for-scientists)

### Funding better evaluations of AI’s impact on wellbeing

We’re launching a $5 million grant program to fund independent research into how AI impacts users’ wellbeing.

[Read more](https://www.anthropic.com/news/wellbeing-research-grants)
