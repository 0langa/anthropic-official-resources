# Agent view in Claude Code

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Code
- DateMay 11, 2026
- Reading time3 min
- ShareCopy link

Today we're introducing agent view in Claude Code: one place to manage all your Claude Code sessions.

When running agents in parallel before, you've probably had to manage multiple terminal tabs, a tmux grid, and an overloaded mental ledger of what you need to tackle next.

With agent view in Claude Code, you can kick off new agents, send them to the background, and jump in only when Claude needs you. See at a glance which agents are waiting on you, which are still working, and which are done, so you can easily steer many all at once.

Embedded media: https://www.youtube-nocookie.com/embed/-INveHwbRz4?enablejsapi=1&rel=0&playsinline=1&modestbranding=1

## How it works

Agent view improves visualizing and interacting with your Claude Code sessions in the CLI.

### See everything at once

Press the left arrow from any session or run `claude agents` from the terminal to open agent view. Each row shows the session, whether it needs your input, the contents of its last response, and when you last interacted with it.

![](https://assets.claude.com/ec0ce3b10fd3bd6bd4138252b1b42309b6ba78a7.png)

### Peek and reply without leaving

Select a session to peek at the last turn. If a session is waiting on a decision, answer inline and the session picks back up. Press enter to attach directly to sessions where you want to explore the full transcript.

![](https://assets.claude.com/33969f1ec8439ac118ad8c88b467f3d916483320.png)

### Background anything

Lastly, users can take any existing session and add it to agent view using `/bg` or skip the foreground entirely using `claude --bg [task]` to launch a fresh session.

## How developers are using agent view

A few patterns we have seen from early users:

- **Scaling the number of concurrent sessions:** Dispatch several ideas at once, each optionally paired with a skill, and return to a list of pull requests ready for review.
- **Manage long running agents:** PR babysitters, dashboard updaters, and other looping jobs show their next run time right in the list.
- **Navigate between separate sessions:** When you’re in the middle of a session, press the left arrow, start a related task or quick codebase question, then arrow right back into what you were doing. Peek shows the answer when it lands.
- **See what shipped:** Status indicators on each row plus the title in peek make it easy to scan which sessions produced a PR.

## Getting started

Agent view is available today as a Research Preview on Pro, Max, Team, Enterprise, and Claude API plans. Opt-in by running `claude agents`. Usual rate limits apply. See the [docs](https://code.claude.com/docs/en/agent-view) for more information.

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
