# A new approach to agent security with Claude Managed Agents and NVIDIA

*Note: This blog has been updated from its original version to include additional technical details on Claude Managed Agents.*

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Platform
- DateSeptember 28, 2026
- Reading time4 min
- ShareCopy link

On September 28, NVIDIA announced the [Open Agent Safety Platform (opens in new tab)](https://nvidianews.nvidia.com/news/open-agent-safety-platform), an open software platform and reference system design for strengthening AI security. Anthropic and NVIDIA collaborated to bring additional layers of security and control to the agent stack.

Agents built with Managed Agents already do their work in secure sandboxes, and NVIDIA OpenShell adds extra protection inside that execution environment, controlling what the agent can access and do.

## Secure agents: architecture and sandboxing

### Split the brain from the hands

One risk with agents is that untrusted content can end up in the sandbox alongside the agent. Agents clone repos, read websites, parse tool output, and even install packages, and any of that can include text a model might follow as instructions (prompt injection) or code that runs. The architectural fix the industry is largely converging on is to [split the ‘brain’ from the ‘hands’ (opens in new tab)](https://www.anthropic.com/engineering/managed-agents).

That means the harness, session state, and credentials live outside the sandbox on durable infrastructure, and the sandbox becomes just a tool the agent uses for execution. For anyone building secure agents, this architecture choice is the easy first step. Claude Managed Agents follows these principles, with core capabilities built for secure agent development, and self-hosted sandboxes let you run that execution on infrastructure you control.

### Self-hosted sandboxes with Claude Managed Agents

Managed Agents is built to run in enterprise environments, with self-hosted sandboxes. With a self-hosted sandbox, the agent loop that handles orchestration, context management, and error recovery stays on Anthropic's infrastructure, while each session's tool calls run in an environment you control, either on your own infrastructure or with a managed sandbox provider. Code execution, sensitive files, packages, services, and data stay within your enterprise perimeter, under your own security and runtime controls.

![Image of Claude Managed Agents self-hosted sandboxes](https://assets.claude.com/10402619d2fe571f9ab4e44846896d667e7a6734.png)

Figure 1: Claude Managed Agents self-hosted sandboxes

### NVIDIA OpenShell sets what an agent can reach

NVIDIA [OpenShell (opens in new tab)](https://www.nvidia.com/en-us/ai/openshell/), open source software from NVIDIA, can serve as the runtime for that sandbox. It governs and monitors all AI agent behavior and enforces policies for every action. OpenShell blocks everything unless a rule allows it. It checks each tool an agent tries to use and applies rules to the files, network connections and data the agent accesses. The rules are enforced outside the agent, and OpenShell logs every decision it allows or blocks.

Teams can start with narrow permissions, review the log, and use Claude to tighten the rules toward the least access a task needs. OpenShell's policy prover then uses mathematical proof to confirm what the agent can reach under the rules the team wrote.

![Image of Claude Managed Agents + NVIDIA OpenShell](https://assets.claude.com/5fed8f359097a21aa893263a4b26d9a2ae908b41.png)

Figure 2: Claude Managed Agents + NVIDIA OpenShell

### What teams are building

Companies are already using Managed Agents with self-hosted sandboxes to enhance agent security. [Clay (opens in new tab)](https://claude.com/blog/claude-managed-agents-updates) runs Sculptor, its GTM engineering agent, in a sandbox that lets it mount external file stores and install packages on the fly. [Rogo (opens in new tab)](https://claude.com/blog/claude-managed-agents-updates) serves customers in highly regulated industries, so it runs its agents’ code in isolated microVMs and keeps code and data inside its own perimeter.

**Availability**

Claude Managed Agents is available today in public beta. NVIDIA OpenShell is open source under the Apache 2.0 license and available on [GitHub (opens in new tab)](https://github.com/NVIDIA/OpenShell) and NVIDIA's [developer resources page (opens in new tab)](https://docs.nvidia.com/openshell/latest/about/overview).

Explore our [docs (opens in new tab)](https://platform.claude.com/docs/en/managed-agents/self-hosted-sandboxes) to learn more and follow our [cookbooks (opens in new tab)](https://github.com/anthropics/claude-quickstarts/tree/main/managed-agents/self-hosted-sandboxes/openshell) to set up your sandbox provider.

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
