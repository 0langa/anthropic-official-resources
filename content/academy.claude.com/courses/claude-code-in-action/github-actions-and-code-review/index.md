Lesson 7 of 9 · Claude Code in actionGitHub Actions and Code Review

# GitHub Actions and Code Review

Lesson 76 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fclaude-code-in-action%2Fgithub-actions-and-code-review)

Embedded media: https://www.youtube-nocookie.com/embed/nVGcWczH8fk?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

GitHub Actions and Code Review

A lot of your busywork lives in the pull request, so it's a good place to
hand work to Claude. You can do that in two ways: turn on a managed review
service, or set up a GitHub Action yourself.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=nVGcWczH8fk)

## Which one should you use?[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

The two solve different problems. **Use Code Review for comments on pull requests, and the GitHub Action when Claude should do work in CI.**

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium"></th><th class="border-b border-strong p-sm text-left font-medium">Code Review</th><th class="border-b border-strong p-sm text-left font-medium">GitHub Action</th></tr></thead><tbody><tr><td class="border-b p-sm">What it does</td><td class="border-b p-sm">Posts findings on pull requests</td><td class="border-b p-sm">Runs any job you'd write a workflow for</td></tr><tr><td class="border-b p-sm">Who sets it up</td><td class="border-b p-sm">An Owner of your Claude organization</td><td class="border-b p-sm">A repo admin</td></tr><tr><td class="border-b p-sm">What you need</td><td class="border-b p-sm">A Team or Enterprise plan</td><td class="border-b p-sm">A way to sign in, such as an API key</td></tr><tr><td class="border-b p-sm">What you maintain</td><td class="border-b p-sm">Nothing</td><td class="border-b p-sm">A workflow file</td></tr></tbody></table>

If you aren't on a Team or Enterprise plan, skip ahead to the GitHub Action.

## Turn on Code Review[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

Code Review runs on Anthropic's infrastructure, so there's nothing to build or host. An Owner of your Claude organization sets it up once:

1. **Start the setup.** Open your organization's [Code Review settings(opens in new tab)](https://claude.ai/admin-settings/claude-code) and click the switch. The [setup guide(opens in new tab)](https://code.claude.com/docs/en/code-review-setup) shows each click.
2. **Pick the repos.** Install the Claude GitHub app and choose which repos it watches. If you don't own the GitHub organization, an owner has to install and link the app first.
3. **Confirm the setup.** If the setup ends in a dialog, Code Review stays off until you confirm it. If you weren't asked to pick repos, add them from the Repositories table.
4. **Set the timing.** Each repo starts with a review on every push, which runs the most reviews and costs more. Click Edit on the repo's row to review once when a PR opens, or only when someone comments `@claude review`.

## What Code Review does[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

A set of review agents checks each diff against your full codebase. They remove duplicates and rank what's left, so you read a handful of real issues. Each one lands as an inline comment with a severity, an explanation, and a suggested fix. The check run sums them up in a table.

**By itself, Code Review only comments, so the decision and the fix stay with you.** It doesn't approve or block a PR, and it doesn't push fixes. Your repo's GitHub branch rules decide what merges.

To check your fix before you push, run `/code-review` in your own terminal. That starts a separate review of your diff, and `--fix` applies that review's findings to your working tree.

## Set up the GitHub Action[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

When the job goes beyond review, use the action, `anthropics/claude-code-action@v1`. Run `/install-github-app` in Claude Code, which needs admin rights on the repo. It walks you through installing the GitHub app and saving your Anthropic API key as a repo secret. It can also add workflow files on a new branch, which turn on once you create and merge that pull request.

**The `prompt` input decides when Claude runs.** Without one, the action waits for someone to mention `@claude`. With one, Claude runs as soon as the event fires. The next two workflows show one of each.

## Respond to @claude[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

This workflow has no `prompt`, so it waits for `@claude` in PR and issue comments. **If setup added a `claude.yml`, merge that one and don't add a second.** Otherwise, save this one as `.github/workflows/claude.yml`. The `id-token: write` permission lets the action sign in as the Claude GitHub app:

yaml

```
name: Claude Code
on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
jobs:
  claude:
    if: contains(github.event.comment.body, '@claude')
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
      issues: write
      id-token: write
      actions: read
    steps:
      - uses: actions/checkout@v6
        with:
          fetch-depth: 1
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          claude_args: "--model claude-sonnet-5"
```

Suppose someone comments `@claude implement the spec in the linked GitHub issue` on a pull request. The action picks it up, and Claude pushes commits and comments with what it did.

## Run on a schedule[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

This workflow has a `prompt`, so it runs on its own at 9:00 UTC every day. The `workflow_dispatch` line also lets you start it by hand from the Actions tab. The prompt names the repo, because this job has no checkout step:

yaml

```
name: Daily report
on:
  schedule:
    - cron: "0 9 * * *"
  workflow_dispatch:
jobs:
  report:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      issues: read
      id-token: write
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          prompt: "Generate a summary of yesterday's commits and open issues in ${{ github.repository }}"
          claude_args: |
            --permission-mode dontAsk
            --allowedTools "mcp__github__list_commits,mcp__github__list_issues"
```

**A scheduled run doesn't post a comment on its own.** You read the result in the run's log, in the Actions tab.

## Limit what a run can do[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

No one is at the keyboard during a run, so **give each job only what it needs.** The `claude_args` input passes CLI arguments straight to Claude Code, and three of them set the limits:

- `--max-turns` caps the agent loop, so it can't run forever. A run that goes over the cap fails. So leave room, because even a small `@claude` code change can take more than five turns.
- `--allowedTools` lists the tools Claude can use without asking. For a report, list only read-only tools.
- `--permission-mode dontAsk` denies anything else that needs approval. Use it on a job like the report, because it would also deny file edits you haven't listed. Without it, the action defaults to auto mode, where a safety review can let unlisted tools through.

## Adapt it to your setup[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

Both workflows sign in with an API key and act as the Claude GitHub app. **If your setup differs, start from these inputs:**

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">If you want to</th><th class="border-b border-strong p-sm text-left font-medium">Use</th></tr></thead><tbody><tr><td class="border-b p-sm">Sign in with a Claude subscription</td><td class="border-b p-sm"><code class="cds-inline-code">claude_code_oauth_token</code></td></tr><tr><td class="border-b p-sm">Store no secret</td><td class="border-b p-sm">Workload identity federation, set up through a Claude Console service account</td></tr><tr><td class="border-b p-sm">Run on Amazon Bedrock</td><td class="border-b p-sm"><code class="cds-inline-code">use_bedrock: "true"</code></td></tr><tr><td class="border-b p-sm">Run on Google Cloud's Agent Platform</td><td class="border-b p-sm"><code class="cds-inline-code">use_vertex: "true"</code></td></tr><tr><td class="border-b p-sm">Run on Microsoft Foundry</td><td class="border-b p-sm"><code class="cds-inline-code">use_foundry: "true"</code></td></tr><tr><td class="border-b p-sm">Act as something other than the app</td><td class="border-b p-sm"><code class="cds-inline-code">github_token</code></td></tr><tr><td class="border-b p-sm">Listen for a different phrase</td><td class="border-b p-sm"><code class="cds-inline-code">trigger_phrase</code></td></tr></tbody></table>

With a subscription, point that input at the `CLAUDE_CODE_OAUTH_TOKEN` secret and remove the API key line. With a cloud provider, you sign in with your cloud account, which takes a few [more setup steps(opens in new tab)](https://code.claude.com/docs/en/github-actions-cloud-providers). If you change the trigger phrase, change the workflow's `if` line to match.

## Key takeaways[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

- Turn on Code Review when you want findings on pull requests with nothing to maintain.
- Set up the action when Claude should make changes or run on a schedule.
- Use `claude_args` to limit what each run can do.

Was this helpful?
