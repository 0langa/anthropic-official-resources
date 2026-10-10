# Claude Tag now supports personal connectors in channels

Claude Tag can now use your connectors for requests you make in a channel. Nobody else can use them, and you're in control of how to present the output.

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Tag
- DateSeptember 24, 2026
- Reading time5 min
- ShareCopy link

[Claude Tag (beta)](https://claude.com/product/tag) lets you add Claude to a Slack channel, where it works alongside your team. Until now, Claude could only use the connectors an [admin attached to the channel](https://claude.com/resources/articles/agent-identity-access-model), and most organizations keep that list short on purpose: they want access to follow the person, not the channel.

Now Claude can use your own [connectors](https://claude.com/docs/claude-tag/concepts/settings-map) for a request you make in a channel. For example, your calendar, your drive, your assigned accounts on the CRM, or your staging deploys. If you have [connected it to your Claude account,](http://claude.ai/customize) you can access it in the channel.

You decide how information is surfaced from when you ask Claude to access your connectors. You can review each response before it posts. Alternatively, you can use auto mode to post automatically unless Claude determines there is sensitive content that needs your review. On Enterprise plans, admins will be able to require review for everyone.

Personal connectors provide admins more governance options. They can provide access to a shared set of tools under an agent identity, have channel members only use personal connectors to rely on existing role-based access, or decide tool by tool.

Personal connectors in Claude Tag are rolling out now on Team plans, with Enterprise to follow.

## **Using personal connectors**

Most of what people need in a channel sits behind their own login: a time that works on your calendar, your open deals, a plan only you can open. Now you can ask for those in the channel too.

For example, here's Priya in #checkout-migration, a channel connected to GitHub. She asks: "@Claude check my Google Drive doc 'Checkout migration, Q3' against what we've shipped. What's still open?"

![](https://assets.claude.com/de1942de3fd966774ee0a9d7293fd9bd3477e1c4.png)

Priya asks Claude in #checkout-migration to check her plan against what shipped. The channel reaches GitHub. Only Priya can open the doc.

Claude reads the merged pull requests through the channel's GitHub connector. The doc is one only Priya can open. Before, Claude would have stopped there.

Now Claude reads the doc through Priya's Google Drive connector, separately from the channel's work, and posts what shipped and what's left. Priya's plan isn't sensitive, so she uses auto mode and Claude screens the comparison before it posts. For a document she'd rather check first, she can switch to review mode and see the response before the channel does.

![](https://assets.claude.com/cff3d307d116b93a1370e70074c0102e3e2cfc97.png)

The same thread. Claude's reply with the comparison, and the review prompt showing what will post before it does.

Everything Claude does through your connector appears in that tool's own log under your account, the way your direct-message work does today. The channel's own work stays under its service account, the one your security team already follows.

You decide what Claude reaches and what the channel sees, the same as when you use your connectors in a direct message, and you can disconnect a connector at any time.

## **Where the channel's own connectors still matter**

Personal connectors don't run unattended. Scheduled routines, and anything Claude starts on its own, use the connectors an admin attached to the channel. Tools that are needed for unattended actions, or actions the entire channel relies on, should use shared connectors.

For example, you may want to add Claude to your [#on-call channel to help with CI triage and response](https://claude.com/resources/articles/ai-ci-cd-on-call). Claude can identify and help remediate issues (even after work hours) if you set up shared connectors to your runbook, monitoring tools, and deployment history.

A channel that solely relies on personal connectors suits closely supervised work. For example, collaboratively drafting an RFP response may require pulling data from pricing or other sensitive sources that are not provisioned to the entire channel. Anything Claude posts is visible to everyone in the channel.

## **What's next**

There's nothing to install. When a request of yours needs one of your connectors, Claude asks you the first time, then uses it in the thread.

Ask @Claude in a channel for what only you can reach. Learn more about [Claude Tag](https://claude.com/product/tag).

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
