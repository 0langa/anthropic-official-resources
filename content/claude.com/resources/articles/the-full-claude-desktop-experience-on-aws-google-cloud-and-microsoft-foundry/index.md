# The full Claude Desktop experience on AWS, Google Cloud, and Microsoft Foundry

- Category[Product updates](https://claude.com/resources/product-updates)
- ProductClaude Enterprise
- DateJune 22, 2026
- Reading time4 min
- ShareCopy link

Organizations that use Claude Desktop through AWS, Google Cloud, and Microsoft Foundry now get the full Desktop experience — chat, Claude Cowork, and Claude Code, all in one app.

Now IT teams can keep inference inside their own environment across products, and deploy Claude Desktop organization-wide with per-user SSO, MDM policy templates, an offline installer option, and an M365 connector that can run entirely on the device.

Inference runs on your cloud in the regions you configure and conversation history is stored locally. You control the endpoints data connectors reach and the aggregated telemetry Anthropic receives.

### One surface for the entire organization

Until today, customers using Claude Desktop through AWS, Google Cloud, and Microsoft Foundry only had access to Claude Cowork and Claude Code. Now, one deployment covers every role, and each surface has its own policy key, so you decide who gets what, and when.  
  
Chat for quick answers and thinking through a problem. Claude Cowork for the work your people would rather hand off: Claude researches across approved sources, works with the files already on the device and builds the deliverable, surfacing results when it’s done. Claude Code for engineers who want agentic coding without living in a terminal.

### Deployment controls

Deploying Claude Desktop organization-wide means working within the systems you already have.

**Sign in like any work app.** Employees use the same work account they use for everything else: IAM Identity Center, Workforce Identity Federation, Microsoft Entra ID, or any OIDC provider like Okta. No shared keys to rotate, no cloud credentials on end-user machines.

**Deploy like any app you already manage.** Export policy templates from the setup UI and push them through Intune, GPO, or Jamf. An offline installer covers air-gapped environments.

**Know it works before anyone sees it.** Test every connector, confirm which Claude models your provider serves, and verify the connection, all before rollout. A model guard keeps routing on Claude, including in GovCloud, even if a setting is misconfigured.

**Start small, expand as adoption grows.** Chat, Claude Cowork, and Claude Code each have their own policy key, so you can give non-technical teams chat and Claude Cowork, engineering Claude Code, and then broaden access as teams adopt each surface. Your hard-deny rules apply across every tab.

**Bring Claude to where the work lives.** A Microsoft 365 connector gives Claude access to mail and documents through your own Entra app, with tenant allowlisting and beta support for GCC High/DoD endpoints. For the strictest residency requirements, use our local connector, and the connection stays between the device and Microsoft.

> “"We rolled out Claude Desktop fast through our existing cloud environment — no separate vendor contract. Our own LLM Gateway let one team deploy it to hundreds of users worldwide, with no heavy infrastructure build-out." - Sarang Oh, Analytics/AI Team Leader, Hanwha Solutions”

### Getting started

For admins, the [deployment guide](http://claude.com/docs/third-party/claude-desktop/installation) walks through SSO, policy templates, and pre-rollout validation. Or contact your account team and we'll help you plan the rollout.

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
