# Auto mode for Claude Code

Auto mode provides a safer long-running alternative to --dangerously-skip-permissions.

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Code
- DateMarch 24, 2026
- Reading time4 min
- ShareCopy link

***Update**: Auto mode is generally available in Claude Code for all users. (July 10, 2026)*

Today, we're introducing auto mode, a new permissions mode in Claude Code where Claude makes permission decisions on your behalf, with safeguards monitoring actions before they run. It's available now as a research preview on the Team plan, and coming to the Enterprise plan and API users in the coming days.

## How it works

Claude Code's default permissions are purposefully conservative: every file write and bash command asks for approval. It’s a safe default, but it means you can't kick off a large task and walk away, since Claude will request frequent human approvals along the way. While some developers choose to bypass permission checks with --dangerously-skip-permissions, skipping permissions can result in dangerous and destructive outcomes and should not be used outside of isolated environments.

Auto mode is a middle path that lets you run longer tasks with fewer interruptions while introducing less risk than skipping all permissions. Before each tool call runs, a classifier reviews it to [check for potentially destructive actions](https://code.claude.com/docs/en/permission-modes) like mass deleting files, sensitive data exfiltration, or malicious code execution.

Actions that the classifier deems as safe proceed automatically, and risky ones get blocked, redirecting Claude to take a different approach. If Claude insists on taking actions that are continually blocked, it will eventually trigger a permission prompt to the user.

## What to expect

Auto mode reduces risk compared to --dangerously-skip-permissions but doesn't eliminate it entirely, and we continue to recommend using it in isolated environments. The classifier may still allow some risky actions: for example, if user intent is ambiguous, or if Claude doesn't have enough context about your environment to know an action might create additional risk. It may also occasionally block benign actions. We’ll continue to improve the experience over time.

Auto mode may have a small impact on token consumption, cost, and latency for tool calls.

## Getting started

Auto mode is available in Claude Code as a research preview for Claude Team users today, and will roll out to Enterprise and API users in the coming days. It works with both Claude Sonnet 4.6 and Opus 4.6.

- **For admins**: Auto mode will soon be available for all Claude Code users on Enterprise, Team, and Claude API plans. To disable it for the CLI and VS Code extension, set "disableAutoMode": "disable" in your managed settings. Auto mode is disabled by default on the Claude desktop app, and can be toggled on using Organization Settings -> Claude Code.
- **For developers**: Run `claude --enable-auto-mode` to enable auto mode, then cycle to it with Shift+Tab. On Desktop and in the VS Code extension, first toggle auto mode on in Settings -> Claude Code, then select it from the permission mode drop-down in a session.

[Explore the docs](https://code.claude.com/docs/en/permission-modes) for more information.

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
