# Run Claude Code sessions on your own compute

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Code
- DateAugust 6, 2026
- Reading time2 min
- ShareCopy link

Now in public beta, self-hosted environments let you run Claude Code sessions on your own infrastructure. Start a session from the web, mobile, desktop, or a routine, and it runs inside your network, next to your internal services, toolchains, and security controls, rather than on Anthropic-hosted infrastructure.

For most enterprises, we strongly recommend our hosted offering for operational simplicity with no infrastructure to run or maintain. Self-hosted environments are for teams whose network, tooling, or compliance requirements call for keeping agent execution on infrastructure they control. If you go this route, plan to staff engineering to own setup and ongoing maintenance.

### **Why self-host**

We saw organizations in our preview program adopt self-hosted environments for a few key reasons:

- **Network access:** sessions run inside your network and can reach internal services, databases, and registries without exposing them to the public internet
- **Customizability:** pre-install compilers, SDKs, and internal CLIs in your environment so every session starts ready to build
- **Compliance:** source code and build artifacts stay on infrastructure you control

![Faire](https://assets.claude.com/1ae334c9f7d397f84da34c8aeff571d3b8bc89d9.svg)

> “Self-hosted environments let us integrate Claude Code into our existing development workflows while maintaining our security and operational controls. This setup means Claude can generate PRs, help fix CI issues, and respond to developer workflow events, with compute that can scale based on demand. Claude understands our codebase, making it a strong fit for how our engineering teams build.”

George Jacob, Senior Engineering Manager

### **Data stays on your infrastructure**

Repository checkouts, build artifacts, secrets, and any files a session creates or modifies all stay on infrastructure you provision.

The conversation itself, including prompts, responses, and tool results (which can include code that Claude reads), is sent to Anthropic for inference, and the session transcript is stored so a session can be picked up from any surface.

### **How it works**

When using self-hosted environments, you deploy a set of [runners](https://code.claude.com/docs/en/self-hosted-environments). These long-lived processes pick up sessions and start a Claude Code process for each [session](https://code.claude.com/docs/en/self-hosted-environments). Runners come in two modes.

1. **Fixed:** you keep a set number running and sessions are distributed across them.
2. **On-demand:** an orchestrator watches for queued sessions, starts a runner as sessions arrive, and stops them when work finishes so capacity tracks demand.

Runners can serve more than one session, but each session runs in its own checkout, so work stays isolated between developers and accounts. Sessions from every supported surface route to the same environment, so you set it up once and it works wherever your team starts a session.

**Note**: Self-hosted environments differ from [Remote Control](https://code.claude.com/docs/en/remote-control), which lets developers continue sessions running on their own machines from a phone or browser. Sessions using Remote Control end when that machine stops running the session and are tied to the user who ran `claude`, whereas self-hosted environments run sessions on shared infrastructure your platform team operates and can be used by any user.

### **Getting started**

Self-hosted environments are available in public beta to organizations on Claude Team and Enterprise plans. They are off by default and not available for organizations using ZDR.

Plan on a platform, developer experience, or developer productivity team owning setup and ongoing operation, including building and maintaining the runner image, updating runners, and running the orchestrator if you use on-demand mode.

See the [documentation](https://code.claude.com/docs/en/self-hosted-environments) to learn more. Share feedback via [GitHub](https://github.com/anthropics/claude-code/issues) or through your Anthropic account team.

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
