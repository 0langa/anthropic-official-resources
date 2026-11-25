# Claude Code now supports artifacts

*Preview your in-progress work as a live, interactive web page—built from your full session context and shareable with your team.*

- Category[Product updates](https://claude.com/resources/product-updates)
- ProductClaude Code
- DateJune 18, 2026
- Reading time6 min
- ShareCopy link

Starting today, Claude Code can capture work progress as an [artifact](https://claude.com/features/artifacts), which turn Claude Code's work into live, shareable visual pages— including PR walkthroughs, system explainers, dashboards, and release checklists—that update themselves as your session works.

A [Claude Code](https://claude.com/product/claude-code) session can range from investigating an incident to refactoring a service to analyzing months of data. Artifacts translate the work into a web page anyone can open and explore, like a pull request walkthrough, a dashboard you can filter and sort, or even a release checklist that fills itself out as work gets done. Artifacts make it easier to collaborate on shared work, so teams can spend more time building and less time communicating status updates.

Embedded media: https://www.youtube-nocookie.com/embed/m7TJqx8CYG8?enablejsapi=1&rel=0&playsinline=1&modestbranding=1

## **Built on the context from your session**

Claude Code builds an artifact using the full context of your session, including your codebase, your connectors, and the conversation itself. A single incident page can bring together the failing test and the function behind it from your code, the error spike from a connected monitoring tool, and the root-cause reasoning from the session you just ran. With artifacts, you don't need to wire up data sources or stand up infrastructure. You ask for a page, and Claude Code builds it from what already exists.

## **Live pages that update in place**

When Claude Code updates an artifact, the open page refreshes in place and teammates see the updates the moment they’re published. Every publish is a new version at the same link, with version history so you can restore at any time, and a gallery lets you browse and manage all artifacts you've made.

From our internal testing, one of our most common use cases has been debugging. These typically look something like: An engineer kicks off an incident investigation before standup. Claude Code works through the logs and publishes an artifact: a timeline, the suspect commits, and an error-rate chart. She shares the link with her team from the page header. By the time standup begins, Claude has republished it twice as the investigation progressed, incorporating the latest information. With artifacts, team members and stakeholders don’t have to "walk us through what the agent found" because they're all looking at the same view, with the same context.

## **Private to your organization**

Every artifact is private to its author by default. When you're ready, share it with your teammates and your organization directly from the page. Artifacts are viewable only by authenticated members of your org and cannot be made public. Admins manage access with an org-level toggle and role-based scoping, set retention policies, and get org-wide visibility through the [compliance API](https://claude.com/resources/articles/compliance-api-cowork-and-claude-code).

## **Getting started**

Ask your session for an artifact — or just ask for something visual, h*ere are some ideas by role:*

- **Legal / open source**: A license audit of every dependency, flagging copyleft, straight from the repo. *"Build an artifact listing every third-party dependency and its license, flagging anything copyleft."*
- **Privacy**: A data-flow map of where personal data is collected, stored, and logged across the code. *"Trace where we touch personal data across the codebase into an artifact for the privacy review."*
- **Security**: Findings that link to the exact line, so the fix is unambiguous. *"Build an artifact of the auth findings from this review, each linked to the code."*
- **FinOps / platform finance**: Cloud resources and cost drivers mapped from your infrastructure-as-code. *"Map our cloud resources from the Terraform into an artifact, grouped by service, with the big cost drivers."*
- **Software engineers**: A PR or bug walkthrough reviewers can actually follow, pulled from the diff and the code around it. "Make an artifact walking through this PR — the diff, the reasoning, and what I tested."
- **Designers & frontend engineers**: Several UX directions for a screen, each built from your real components so the one you pick is shippable. "Give me an artifact with 5 UX variations of this signup form, built from our component library."
- **Staff engineers & architects**: A map of how a service actually fits together, drawn from the real import graph instead of a whiteboard. "Map how the payments service fits together into an artifact, from the code."
- **SRE & on-call**: An incident page that grows as you investigate and becomes the postmortem. "Turn this incident into an artifact — timeline, suspect commits, error spike from our monitoring — and republish as I work through it."
- **Engineering managers**: A page of what actually shipped, built from the merged PRs. "Build an artifact of what merged on my team this week from the PRs, grouped by project."

Claude Code builds the page and gives you a link. Open it in your browser or the desktop app, share it from the header—updates publish to the same URL automatically.

## **Availability**

Artifacts is available in beta to Claude Team and Enterprise orgs, from the Claude Code CLI and desktop app, with pages viewable in any browser.

***[Get started today](http://code.claude.com/docs/en/artifacts) with Claude Code.***

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
