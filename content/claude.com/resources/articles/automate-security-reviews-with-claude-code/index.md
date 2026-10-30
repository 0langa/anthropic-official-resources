# Automate security reviews with Claude Code

- Category[Announcements](https://claude.com/resources/product-announcements)
- ProductClaude Code
- DateAugust 6, 2025
- Reading time4 min
- ShareCopy link

Today we're introducing automated security reviews in Claude Code. Using our GitHub Actions integration and a new /security-review command, developers can easily ask Claude to identify security concerns—and then have it fix them.

Embedded media: https://www.youtube-nocookie.com/embed/YdiCjgYGKto?enablejsapi=1&rel=0&playsinline=1&modestbranding=1

As developers increasingly rely on AI to ship faster and build more complex systems, ensuring code security becomes even more critical. These new features let you integrate security reviews into your existing workflows, helping you catch vulnerabilities before they reach production.

### Review code for vulnerabilities from your terminal

The new /security-review command lets you run ad-hoc security analyses from your terminal before committing code. Run the command in Claude Code, and Claude will search your codebase for potential vulnerabilities and provide detailed explanations of any issues found.

This command uses a specialized security-focused prompt that checks for common vulnerability patterns including:

- SQL injection risks
- Cross-site scripting (XSS) vulnerabilities
- Authentication and authorization flaws
- Insecure data handling
- Dependency vulnerabilities

You can also ask Claude Code to implement fixes for each issue after they’re identified. This keeps security reviews in your inner development loop, catching issues early when they're easiest to fix.

### Automate security reviews for new pull requests

The new GitHub action for Claude Code takes security reviews a step further by automatically analyzing every pull request when it's opened. When configured, the action:

- Triggers automatically on new pull requests
- Reviews code changes for security vulnerabilities
- Applies customizable rules to filter out false-positives and known issues
- Posts comments inline on the PR with any concerns found, including recommendations for fixes

This creates a consistent security review process across your entire team, ensuring no code reaches production without a baseline security review. The action integrates with your existing CI/CD pipeline and can be customized to match your team's security policies.

![2 screenshots showing vulnerabilities that were caught by Claude Code, leaving comments in GitHub.](https://assets.claude.com/1ebef4ff829fa7823e1b95a589e3a2591efdda73.png)

### Improving product security at Anthropic

We're using these features ourselves to help secure the code our team ships to production, including Claude Code itself. Since setting up the GitHub action, this has already caught security vulnerabilities in our own code and prevented them from being shipped.

For example, last week, our team built a new feature for an internal tool that relied on starting a local HTTP server meant to accept local connections. The GitHub action identified a remote code execution vulnerability exploitable through DNS rebinding and it was fixed before the PR was ever merged.

![A GitHub comment showing a remote code execution vulnerability](https://assets.claude.com/1d0fc2da3b1c33de2a4829f92e7dc4a7a6d5b510.png)

In another case, an engineer built a proxy system to enable secure management of internal credentials. The GitHub action automatically flagged that this proxy was vulnerable to SSRF attacks, and we promptly fixed this issue.

![A GitHub comment showing a SSRF attack vulnerability](https://assets.claude.com/fc0402007fcc1308f30973e6ddcfbf909bae198b.png)

### Getting started

Both features are available now for all Claude Code users. To start using automated security reviews:

- **For the /security-review command**: Simply update Claude Code to the latest version and run /security-review in your project directory. [See the documentation](https://github.com/anthropics/claude-code-security-review/tree/main?tab=readme-ov-file) to customize your own version of the command
- **For the GitHub action**: [See the documentation](https://github.com/anthropics/claude-code-security-review) for step-by-step installation and configuration instructions

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

### Claude for Financial Advisors

Financial advisors can now connect Claude to the custodians, portfolio platforms, CRMs, and planning tools they depend on, along with new skills tailored to the daily work of a financial advisor.](https://claude.com/resources/articles/claude-for-financial-advisors)

## Transform how your organization operates with Claude

[See pricing](https://claude.com/pricing)[Contact sales](https://claude.com/contact-sales)

### Get the developer newsletter

Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.

Please provide your email address if you'd like to receive our monthly developer newsletter. You can unsubscribe at any time.
