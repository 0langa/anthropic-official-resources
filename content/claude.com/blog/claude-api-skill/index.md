# Claude API skill now in CodeRabbit, JetBrains, Resolve AI, and Warp

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Enterprise, Claude Code
- DateApril 29, 2026
- Reading time2 min
- ShareCopy link

Today, CodeRabbit, JetBrains, Resolve AI, and Warp are bundling the [claude-api skill](https://github.com/anthropics/skills/tree/main/skills/claude-api), giving developers production-ready Claude API code wherever they build. First introduced in Claude Code in March, the skill is now in more of the tools developers already use.

## Building with the Claude API skill

The `claude-api` skill captures the details that make Claude API code work well, like which agent pattern fits a given job, what parameters change between model generations, and when to apply prompt caching. The result is fewer errors, better caching, cleaner agent patterns, and smoother model migrations.

It stays current as our SDKs change. When a new model is released or the API gains a feature, Claude already knows.

Anywhere the skill is available, ask Claude to:

- **"Improve my cache hit rate."** The skill applies prompt caching rules many developers miss.
- **"Add context compaction to my agent."** It walks you through the compaction primitives and agent patterns in our docs.
- **"Upgrade me to the latest Claude model."** Claude reviews your code and walks you through updating model names, prompts, and effort settings for a new model like [Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7). In Claude Code, you can also run this directly with `/claude-api migrate.`**‍**
- **"Build a deep research agent for my industry."** Claude walks you through configuring [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview), so long-running research is a few prompts, not a custom project. In Claude Code, you can also run this directly with `/claude-api managed-agents-onboard`.

![Jetbrains New](https://assets.claude.com/5886ece0979c014f7e1fb5119f62efdb9aba5b96.svg)

> “With the Claude API skill, developers on JetBrains IDEs and Junie can turn a Claude API upgrade into a guided IDE workflow. A good example is migrating to Claude Opus 4.7, where the skill can update model references, move manual thinking settings to adaptive thinking, clean up outdated parameters and beta headers, and suggest the right effort level inline. That gives teams a stronger first pass and helps avoid version-specific mistakes that normally show up in cleanup rounds.”

Denis Shiryaev, Head of AI Dev Tools Ecosystem

![Resolve AI](https://assets.claude.com/8b9254c4648042482204412c545e441fe728c810.svg)

> “The Claude API skill helps Resolve AI engineers adopt new model capabilities faster. Instead of manually parsing migration guides and chasing every small API change, our team can move from model release to implementation in a single guided pass.”

Mayank Agarwal, Founder & CTO

![Warp](https://assets.claude.com/399915ee2f0b3513a52ff63e61b1da17ed7eb078.svg)

> “Developers shouldn't have to leave Warp to look up Claude API parameters or caching rules. With the Claude API skill built in, that knowledge is already there, so engineers stay in flow and ship faster.”

Zach Lloyd, Founder and CEO

![CodeRabbit New](https://assets.claude.com/739777711f80e97a1e98612b6d55f9f8498c55a1.svg)

> “At CodeRabbit, we review millions of PRs a week and see how often stale API knowledge causes production issues. The Claude API skill keeps Claude current as our SDKs change, so developers building agents run into fewer review-time surprises.”

Erik Thorelli, Developer Experience Lead

![Jetbrains New](https://assets.claude.com/5886ece0979c014f7e1fb5119f62efdb9aba5b96.svg)

> “With the Claude API skill, developers on JetBrains IDEs and Junie can turn a Claude API upgrade into a guided IDE workflow. A good example is migrating to Claude Opus 4.7, where the skill can update model references, move manual thinking settings to adaptive thinking, clean up outdated parameters and beta headers, and suggest the right effort level inline. That gives teams a stronger first pass and helps avoid version-specific mistakes that normally show up in cleanup rounds.”

Denis Shiryaev, Head of AI Dev Tools Ecosystem

![Resolve AI](https://assets.claude.com/8b9254c4648042482204412c545e441fe728c810.svg)

> “The Claude API skill helps Resolve AI engineers adopt new model capabilities faster. Instead of manually parsing migration guides and chasing every small API change, our team can move from model release to implementation in a single guided pass.”

Mayank Agarwal, Founder & CTO

![Warp](https://assets.claude.com/399915ee2f0b3513a52ff63e61b1da17ed7eb078.svg)

> “Developers shouldn't have to leave Warp to look up Claude API parameters or caching rules. With the Claude API skill built in, that knowledge is already there, so engineers stay in flow and ship faster.”

Zach Lloyd, Founder and CEO

![CodeRabbit New](https://assets.claude.com/739777711f80e97a1e98612b6d55f9f8498c55a1.svg)

> “At CodeRabbit, we review millions of PRs a week and see how often stale API knowledge causes production issues. The Claude API skill keeps Claude current as our SDKs change, so developers building agents run into fewer review-time surprises.”

Erik Thorelli, Developer Experience Lead

![Jetbrains New](https://assets.claude.com/5886ece0979c014f7e1fb5119f62efdb9aba5b96.svg)

> “With the Claude API skill, developers on JetBrains IDEs and Junie can turn a Claude API upgrade into a guided IDE workflow. A good example is migrating to Claude Opus 4.7, where the skill can update model references, move manual thinking settings to adaptive thinking, clean up outdated parameters and beta headers, and suggest the right effort level inline. That gives teams a stronger first pass and helps avoid version-specific mistakes that normally show up in cleanup rounds.”

Denis Shiryaev, Head of AI Dev Tools Ecosystem

![Resolve AI](https://assets.claude.com/8b9254c4648042482204412c545e441fe728c810.svg)

> “The Claude API skill helps Resolve AI engineers adopt new model capabilities faster. Instead of manually parsing migration guides and chasing every small API change, our team can move from model release to implementation in a single guided pass.”

Mayank Agarwal, Founder & CTO

1/4

## For Claude-powered coding agents

Any coding agent can bundle the `claude-api` skill to give their users expertise around the Claude API. If you are building a tool where developers write Claude API code, the skill is open source at [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/claude-api). Our bundling guide walks through the setup in about 20 lines of CI, and the skill stays current automatically.

## Getting started

The skill is already in [Claude Code](https://claude.com/product/claude-code), [CodeRabbit](https://www.coderabbit.ai/), [JetBrains](https://www.jetbrains.com/), [Junie](https://www.jetbrains.com/junie/), [Resolve AI](https://resolve.ai/), and [Warp](https://www.warp.dev/). To learn more, see the [claude-api skill docs](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/claude-api-skill).

## Related articles

Explore more product news and best practices for teams building with Claude.

[ArticleOct 23, 2026

### Claude Cowork and chat come together for Enterprise

Claude Enterprise](https://claude.com/resources/articles/unified-claude-enterprise)[ArticleOct 23, 2026

### Claude Duet Safety, Privacy, and Security

Claude Duet is a proactive agent that works for you, even while you’re away. It builds on two layers of protection: safety training in the Claude model itself and the safeguards that exist in products like Claude Code and Claude Managed Agents. On top of those, we added new protections for working across your accounts and acting on your behalf.](https://claude.com/resources/articles/claude-duet-safety-privacy-and-security)[ArticleOct 22, 2026

### The full Claude Platform, available on Google Cloud

Use Claude Models on Google Cloud (Anthropic managed) to access Claude Platform features with Google Cloud authentication, billing, and commitment retirement.

Claude Platform](https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed)[ArticleOct 21, 2026

### HCLTech joins the Claude Partner Network as a Global Premier partner

HCLTech will bring Claude into the solutions it provides for banks, hospitals, telecom companies, and manufacturers.](https://claude.com/resources/articles/hcltech-joins-claude-partner-network)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
