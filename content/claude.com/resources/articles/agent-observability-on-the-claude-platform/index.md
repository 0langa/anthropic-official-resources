# Agent observability on the Claude Platform

Announcing OpenTelemetry traces from Claude Managed Agents, the Messages API, and Anthropic SDKs on the Claude Platform.

- DateOctober 14, 2026
- Reading time3 min
- ShareCopy link

You can now send OpenTelemetry (OTel) traces from Claude Managed Agents, the Messages API, and Anthropic SDKs to any OTel tool, and follow each step your agents take. If you already send Claude Code or Cowork traces to your observability tool, the agents you build on the Claude Platform can also show up in the same place.

## Trace agents with OpenTelemetry

Trusting an agent with more access starts with tracing its model calls, tool use, and MCP server calls. Review its traces, then widen its access as it proves reliable.

Add a destination in the Claude Console, and every agent turn, model call, and tool use arrives in your observability tool as a standard OpenTelemetry trace, with latency, tokens, and IDs.

![How OpenTelemetry traces work](https://assets.claude.com/28fe34519808d40faa51162351234a3790230860.png)

## Works with your observability tools

Claude traces follow the [OpenTelemetry GenAI semantic conventions](https://github.com/open-telemetry/semantic-conventions-genai/), so data from Claude and other providers works in the same tools and dashboards.

- **Debug agents next to the rest of your stack**. In [Grafana Cloud](https://grafana.com/docs/grafana-cloud/observe-and-act/agent-observability/guides/send-claude-platform-traces/), [Honeycomb](https://docs.honeycomb.io/send-data/use-cases/claude-platform), [Sentry](https://sentry.io/cookbook/trace-claude-platform-with-opentelemetry/), and [Splunk](https://agent-observability-docs.splunk.com/sdk-api/third-party-integrations/claude), agent traces sit beside your logs and metrics, so you can see which service a slow or failed step came from.
- **Improve agents with production data**. With [Arize AI](https://arize.com/docs/ax/integrations/platforms/claude-managed-agents/claude-managed-agents-tracing), [Braintrust](https://www.braintrust.dev/docs/integrations/ai-providers/anthropic), [Datadog](https://docs.datadoghq.com/llm_observability/instrument/otel_instrumentation/?tab=python), [Langfuse](https://langfuse.com/integrations/model-providers/claude-platform), [LangSmith by LangChain](https://docs.langchain.com/langsmith/trace-anthropic), [New Relic](https://newrelic.com/blog/news/anthropic-otel-ai-observability), and [PostHog](https://posthog.com/docs/ai-observability/installation/anthropic?tab=Claude+Platform), you can turn real traces into evals, catch quality issues, and measure whether a change helped.
- **Track usage across your organization**. Send traces to [Databricks Unity Gateway](https://docs.databricks.com/aws/en/ai-gateway/unified-trace-table) so platform and security teams can see token usage by team and flag unusual activity.

Claude traces also work with any other OpenTelemetry tool that accepts a standard OTLP endpoint.

Embedded media: https://www.youtube-nocookie.com/embed/tok8ncWJ7l4?enablejsapi=1&rel=0&playsinline=1&modestbranding=1

## Get started

OpenTelemetry traces on the Claude Platform is available in public beta. Managed Agents and the Messages API need a destination in the Claude Console, while Anthropic SDKs export traces automatically.

See the [docs](https://platform.claude.com/docs/en/manage-claude/opentelemetry) to get started.

![Foxglove](https://assets.claude.com/59150536fe838e40bd470d19ad4ab74ec3fa2d61.svg)

> “At Foxglove, we’re building agents that help robotics teams debug their robots. Native OpenTelemetry export from the Claude Platform lets us analyze agent interactions in PostHog alongside product usage data. That helps us evaluate how our agents perform in practice, identify where they fall short, and prioritize improvements for robotics teams.”

Roman Shtylman, Co-Founder and CTO

![Ramp](https://assets.claude.com/6db782273272dd89f11df7b54089328994fe718e.svg)

> “Claude powers some of Ramp’s most capable internal and customer-facing agents. We built Reflect, an agentic system that scores their Langfuse traces, finds recurring failures, and proposes fixes. On some agents, we’ve already cut token usage by 10–20% and made sessions 30% faster. But Reflect can only improve what it observes. Native OpenTelemetry export from the Claude API can feed high-fidelity instrumentation directly into that improvement loop, with no extra steps.”

David Traina, Senior Software Engineer

![Sterling Labs](https://assets.claude.com/0e7434aa92b7dbc6ea6bd4109a0b3602bcb2a22c.svg)

> “At Sterling Labs, we tune our systems like a race team tunes its engine. For agents analyzing live markets 24/7, Langfuse is our pit wall. Native OpenTelemetry export from the Claude Platform streams every trace straight in with no custom instrumentation, so my team can focus on the edge, not the wiring.”

Hyon Lee, CTO

![FloQast](https://assets.claude.com/37eab59899ee1b3f95d9bd8106e2708f2db42680.svg)

> “Agents that touch a company’s books have to show their work, the same way an accountant does. Our agents run on the Claude Platform and our telemetry lives in Grafana Cloud, and native OpenTelemetry export from Claude puts each model call in the same trace as the reconciliation or journal-entry workflow it ran inside. We see the prompt version, tool calls, latency, and token spend alongside the rest of our stack, so when an auditor asks what an agent did and why, we can answer from one timeline.”

Ankush Sharma, Head of Infrastructure

![Foxglove](https://assets.claude.com/59150536fe838e40bd470d19ad4ab74ec3fa2d61.svg)

> “At Foxglove, we’re building agents that help robotics teams debug their robots. Native OpenTelemetry export from the Claude Platform lets us analyze agent interactions in PostHog alongside product usage data. That helps us evaluate how our agents perform in practice, identify where they fall short, and prioritize improvements for robotics teams.”

Roman Shtylman, Co-Founder and CTO

![Ramp](https://assets.claude.com/6db782273272dd89f11df7b54089328994fe718e.svg)

> “Claude powers some of Ramp’s most capable internal and customer-facing agents. We built Reflect, an agentic system that scores their Langfuse traces, finds recurring failures, and proposes fixes. On some agents, we’ve already cut token usage by 10–20% and made sessions 30% faster. But Reflect can only improve what it observes. Native OpenTelemetry export from the Claude API can feed high-fidelity instrumentation directly into that improvement loop, with no extra steps.”

David Traina, Senior Software Engineer

![Sterling Labs](https://assets.claude.com/0e7434aa92b7dbc6ea6bd4109a0b3602bcb2a22c.svg)

> “At Sterling Labs, we tune our systems like a race team tunes its engine. For agents analyzing live markets 24/7, Langfuse is our pit wall. Native OpenTelemetry export from the Claude Platform streams every trace straight in with no custom instrumentation, so my team can focus on the edge, not the wiring.”

Hyon Lee, CTO

![FloQast](https://assets.claude.com/37eab59899ee1b3f95d9bd8106e2708f2db42680.svg)

> “Agents that touch a company’s books have to show their work, the same way an accountant does. Our agents run on the Claude Platform and our telemetry lives in Grafana Cloud, and native OpenTelemetry export from Claude puts each model call in the same trace as the reconciliation or journal-entry workflow it ran inside. We see the prompt version, tool calls, latency, and token spend alongside the rest of our stack, so when an auditor asks what an agent did and why, we can answer from one timeline.”

Ankush Sharma, Head of Infrastructure

![Foxglove](https://assets.claude.com/59150536fe838e40bd470d19ad4ab74ec3fa2d61.svg)

> “At Foxglove, we’re building agents that help robotics teams debug their robots. Native OpenTelemetry export from the Claude Platform lets us analyze agent interactions in PostHog alongside product usage data. That helps us evaluate how our agents perform in practice, identify where they fall short, and prioritize improvements for robotics teams.”

Roman Shtylman, Co-Founder and CTO

![Ramp](https://assets.claude.com/6db782273272dd89f11df7b54089328994fe718e.svg)

> “Claude powers some of Ramp’s most capable internal and customer-facing agents. We built Reflect, an agentic system that scores their Langfuse traces, finds recurring failures, and proposes fixes. On some agents, we’ve already cut token usage by 10–20% and made sessions 30% faster. But Reflect can only improve what it observes. Native OpenTelemetry export from the Claude API can feed high-fidelity instrumentation directly into that improvement loop, with no extra steps.”

David Traina, Senior Software Engineer

1/4

## Related articles

Explore more product news and best practices for teams building with Claude.

[ArticleOct 28, 2026

### Smart reports, surveys, and pooled group budgets for Claude Enterprise

In many organizations, members have identified the unique work that Claude can unlock. The next step is expanding that work to every team.

Claude Enterprise](https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets)[ArticleOct 28, 2026

### IDC brings Quanta into Claude and adopts Claude across the company

IDC integrated Claude as part of its Quanta platform, and it has rolled Claude out across its own business

Claude CoworkClaude Code1 more: Claude EnterpriseClaude Enterprise](https://claude.com/resources/articles/idc-brings-quanta-into-claude-and-adopts-claude-across-the-company)[ArticleOct 28, 2026

### Introducing artifacts for legal work

Claude for Legal now includes ready-to-use artifacts for legal work that teams can adapt with their own data and connectors, and share across the business.

Claude Enterprise](https://claude.com/resources/articles/introducing-artifacts-for-legal-work)[ArticleOct 27, 2026

### Manage costs and demonstrate ROI for Claude Code on Google Cloud

Best practices for managing costs and measuring return on investment for Claude Code on Google Cloud.

Claude Code](https://claude.com/resources/articles/how-to-manage-costs-and-demonstrate-roi-for-claude-code-on-google-cloud)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
