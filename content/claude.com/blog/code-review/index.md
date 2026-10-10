# Bringing Code Review to Claude Code

Practical guidance on how to structure agent tasks using three common workflow patterns, with tradeoffs and benefits for each.

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Code
- DateMarch 9, 2026
- Reading time5 min
- ShareCopy link

Today we're introducing Code Review, which dispatches a team of agents on every PR to catch the bugs that skims miss, built for depth, not speed. It's the system we run on nearly every PR at Anthropic. Now in research preview for Team and Enterprise.

Embedded media: https://www.youtube-nocookie.com/embed/RKsADl0ZC3Y?enablejsapi=1&rel=0&playsinline=1&modestbranding=1

## **Managing the review bottleneck**

Code output per Anthropic engineer has grown 200% in the last year. Code review has become a bottleneck, and we hear the same from customers every week. They tell us developers are stretched thin, and many PRs get skims rather than deep reads.

We needed a reviewer we could trust on every PR. Code Review is the result: deep, multi-agent reviews that catch bugs human reviewers often miss themselves. It's a more thorough (and more expensive) option than our existing [Claude Code GitHub Action](https://code.claude.com/docs/en/github-actions), which remains open source and available.

We run Code Review on nearly every PR at Anthropic. Before, 16% of PRs got substantive review comments. Now 54% do. It won't approve PRs — that's still a human call — but it closes the gap so reviewers can actually cover what's shipping.

## **How it works**

When a PR is opened, Code Review dispatches a team of agents. The agents look for bugs in parallel, verify bugs to filter out false positives, and rank bugs by severity. The result lands on the PR as a single high-signal overview comment, plus in-line comments for specific bugs.

Reviews scale with the PR. Large or complex changes get more agents and a deeper read; trivial ones get a lightweight pass. Based on our testing, the average review takes around 20 minutes.

## **Code Review in action**

We've been running Code Review internally for months: on large PRs (over 1,000 lines changed), 84% get findings, averaging 7.5 issues. On small PRs under 50 lines, that drops to 31%, averaging 0.5 issues. Engineers largely agree with what it surfaces: less than 1% of findings are marked incorrect.

In one case, a one-line change to a production service looked routine and was the kind of diff that normally gets a quick approval. But Code Review flagged it as critical. The change would have broken authentication for the service, a failure mode that’s easy to read past in the diff but obvious once pointed out. It was fixed before merge, and the engineer shared afterwards that they wouldn't have caught it on their own.

Early access customers have seen similar patterns. On a [ZFS encryption refactor in TrueNAS's open-source middleware](https://github.com/truenas/middleware/pull/18291), Code Review surfaced a pre-existing bug in adjacent code: a type mismatch that was silently wiping the encryption key cache on every sync. It was a latent issue in code the PR happened to touch, the kind of thing a human reviewer scanning the changeset wouldn't immediately go looking for.

## **Cost and control**

Code Review optimizes for depth and is more expensive than lighter-weight solutions like the [Claude Code GitHub Action](https://code.claude.com/docs/en/github-actions). Reviews are billed on token usage and generally average $15–25, scaling with PR size and complexity.

Admins have many ways to control spend and usage:

- **Monthly organization caps**: Define total monthly spend across all reviews
- **Repository-level control**: Enable reviews only on the repositories you choose
- **Analytics dashboard**: Track PRs reviewed, acceptance rate, and total review costs

## **Getting started**

Code Review is available now as a research preview in beta for Team and Enterprise plans.

- **For admins**: Enable Code Review in your [Claude Code settings](http://claude.ai/admin-settings/claude-code), install the GitHub App, and select repositories you’d like to run reviews on.
- **For developers**: Once enabled, reviews run automatically on new PRs. No configuration needed.

[Explore the docs](http://code.claude.com/docs/en/code-review) for more information.

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
