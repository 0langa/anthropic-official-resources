Lesson 7 of 9 · Claude Code in actionGitHub Actions and Code Review

# GitHub Actions and Code Review

Lesson 76 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fclaude-code-in-action%2Fgithub-actions-and-code-review)

Embedded media: https://www.youtube-nocookie.com/embed/nVGcWczH8fk?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

GitHub Actions and Code Review

The best place to hand off repetitive work is the pull request. It's where
review happens, where changes land, and where a lot of your busywork lives.
There are two ways to put Claude to work here, and they solve different
problems. One is a managed service you turn on. The other is a GitHub
Action you wire up yourself. Let's walk through both and figure out when to
reach for each.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=nVGcWczH8fk)

## The managed path: Code Review[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

The simplest option is Code Review. It's an Anthropic-hosted service that reviews your pull requests through the Claude GitHub app. There's nothing for you to build or host. You turn it on, and it starts posting findings as inline comments right on the lines that matter.

An Owner of your Claude organization enables it from the Claude Code admin settings. You'll find a Code review section with an Allow code review switch that starts the setup.

From there the Owner installs the Claude GitHub app, picks which repos it watches, and decides when it runs. If the Owner isn't also an owner of the GitHub organization, one has to install and link the app first. You have a few choices for timing:

- Once when a PR opens
- On every push to the PR
- Only when someone comments `@claude review`

Once it's on, everything runs on Anthropic's infrastructure. A set of review agents analyzes the diff against your full codebase, not just the changed lines in isolation. Then it posts findings as inline comments on the specific lines, tagged by severity, with a summary table in the check run.

Here's what one of those findings looks like. It lands as a comment from Claude, right on the line, with a clear explanation and a suggested fix.

The nice part is it deduplicates and ranks the findings. So instead of a wall of nitpicks, you read a handful of real issues worth your attention.

## What Code Review will and won't do[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

A couple of things to keep in mind about the boundaries here:

- It never approves or blocks the PR. The judgment call stays with a human. Claude flags things; you decide.
- It doesn't push fixes. The service posts findings only.
- It's available on Team and Enterprise plans.

Since the service only posts findings, acting on one is your move: fix the code and push. To check your fix before you push, run `/code-review` from your own terminal. It runs its own review of your diff, and its `--fix` flag applies that review's findings to your working tree.

## The do-it-yourself path: the GitHub Action[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

Code Review handles review. When the job goes beyond review, you reach for the GitHub Action. This is for custom CI: implementing changes from a comment, running scheduled reports, anything you'd normally write a workflow for. It runs the agent on PR comments, scheduled jobs, and any GitHub event.

Setup starts inside Claude Code. Run the `/install-github-app` command. You'll need repo admin to do this. The slash command walks you through installing the GitHub app and setting the Anthropic API key secret on the repo.

The action itself is `anthropics/claude-code-action@v1`. Here are the inputs you'll actually use:

- `anthropic_api_key` — required when the run calls the Claude API, unless you authenticate with `claude_code_oauth_token` (from a Claude subscription) or with workload identity federation (set up through a Claude Console service account, so no stored secret). Not used with the cloud providers below.
- `github_token` — optional. Leave it out and the action authenticates as the Claude GitHub app you installed at setup. Pass a token only to override that.
- `trigger_phrase` — what the action listens for in comments. Defaults to `@claude`.
- `use_bedrock` / `use_vertex` / `use_foundry` — route the run through Amazon Bedrock, Google Cloud's Agent Platform, or Microsoft Foundry instead of the Claude API, signing in with your cloud account rather than an API key.
- `prompt` — the instruction for an automated run. Set it and Claude runs on the event without waiting for a mention. Leave it out and the action waits for the trigger phrase.
- `claude_args` — a string of CLI arguments passed straight through to Claude Code.

## A workflow that responds to @claude[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

Drop a workflow into `.github/workflows/claude.yaml` and it listens for `@claude` on PR comments and issue comments. Under the job's `permissions`, grant `id-token: write` so the action can sign in as the Claude GitHub app. The core step looks like this:

yaml

```
- uses: anthropics/claude-code-action@v1
  with:
    anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
    trigger_phrase: "@claude"
    claude_args: "--max-turns 5 --model claude-sonnet-5"
```

Now someone writes `@claude implement the spec in the linked Linear issue` on a pull request, and the action picks it up. Claude pushes commits and posts comments describing what it did.

## A workflow that runs on a schedule[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

The same action works for a daily rollup. A cron trigger fires at, say, 9:00 UTC, the action runs your `prompt`, and you read the rollup in that run's log. A scheduled run doesn't post a comment on its own. You can also add a `workflow_dispatch` trigger so you can kick it off manually from the Actions tab.

When the action runs, you can watch it work through the steps in the Actions tab, just like any other GitHub workflow.

## Tuning the run with claude\_args[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

The `claude_args` line is where the fine-tuning happens. A few knobs worth knowing:

- `--max-turns 5` puts a hard cap on the agent loop, so it can't run forever.
- Permission mode. For an unattended job you'll want it to not stop and ask, since there's no one there to answer.
- Allowed tools. Give the job exactly what it needs and nothing more. For a report, that means read-only.

## Which one should you use?[](https://academy.claude.com/courses/claude-code-in-action/github-actions-and-code-review)

Here's the short version:

- For PR reviews, take the managed path. Enable Code Review, let the GitHub app post inline findings, then fix the code and push.
- Reach for the action when the job is more than review. Use `/install-github-app` for setup, one workflow for `@claude` mentions, one for cron, and all the tuning lives in `claude_args`.

Start with the managed service. Move to the action the moment you need Claude to actually do something in CI, not just comment on it.

Was this helpful?
