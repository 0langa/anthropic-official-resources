Lesson 12 of 14 · The AI-native SDLC playbookCI/CD integration and deployment

# CI/CD integration and deployment

Lesson 126 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-native-sdlc-playbook%2Fci-cd-integration-and-deployment)

Run Claude Code non-interactively inside the CI/CD pipeline, sandbox the execution so long-running agents run safely, expose deployment through MCP integrations, and rehearse the rollback paths before the agent ever needs them.

## What changes[](https://academy.claude.com/courses/ai-native-sdlc-playbook/ci-cd-integration-and-deployment)

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Traditional</th><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">AI-native</th></tr></thead><tbody><tr><td class="border-b p-sm" style="text-align:left">Pipelines run deterministic scripts, and anything that needs judgment waits for a human: for example, triaging the flaky test, writing the changelog, or working out why the build broke. Deployment and rollback are runbooks a human follows under pressure.</td><td class="border-b p-sm" style="text-align:left">Claude runs non-interactively inside the pipeline for the judgment steps, in a sandbox with scoped credentials. Deployment tooling is exposed to the agent through MCP, so the workflow that wrote and tested the change can also ship it and roll it back, inside gates the organization defines per environment.</td></tr></tbody></table>

## Getting started[](https://academy.claude.com/courses/ai-native-sdlc-playbook/ci-cd-integration-and-deployment)

- **Prerequisites**: AI in the PR review loop and hooks as approval gates, because the gates must exist before automation accelerates anything through them.
- **Infrastructure**: A CI platform with the claude-code-action installed, or any runner that can call `claude -p`; model access through the API, or Amazon Bedrock, Microsoft Foundry, or Vertex AI where traffic must stay on the organization's cloud agreement; MCP servers for the deployment targets; a sandbox profile for agent jobs with no standing production credentials.

## How to execute it[](https://academy.claude.com/courses/ai-native-sdlc-playbook/ci-cd-integration-and-deployment)

1. The platform engineer starts with read-only judgment steps. Use `claude -p` in a pipeline job to triage a failed build, summarize a flaky test, or draft the changelog.
2. Add write steps behind the existing gates for jobs like fixing lint, updating generated docs, or addressing review comments via the `@claude` mentions. Anything the agent writes arrives as a PR through branch protection, and the agent has no route to push to main.
3. Execution is sandboxed. Agent jobs run in containers under a network policy with short-lived scoped tokens, and hold no production credentials by default.
4. Expose deployment through MCP. Deploy, status, and rollback become tools, scoped per environment, so the agent's deployment powers are an allowlist rather than a shell script with credentials.
5. Tier the autonomy by environment. In development, the agent deploys freely. In production, the agent prepares the release and the release manager authorizes it, and a hook enforces the production gate. Staging sits somewhere in the middle.
6. Rollback should be the most rehearsed path in the pipeline, a single command that the agent can run and that is exercised regularly in staging. The closing the loop play (**Stage 6: Maintain**) calls this rollback when a control band is breached, so it has to be proven in advance.

## What it looks like[](https://academy.claude.com/courses/ai-native-sdlc-playbook/ci-cd-integration-and-deployment)

Pipeline step:

yaml

```
- name: Triage failed build
  if: failure()
  run: >
    claude -p "Read the build log at out/build.log. Identify the most
    likely cause, say whether the failure looks flaky or real, and write a
    three-line summary for the PR thread." >> triage.md
```

The rest of this example is an insurer's customer portal, with deployment exposed as tools and one MCP server per environment. A rule that allows an MCP tool names the server and the tool, not the tool's arguments. So a separate server per environment is what lets an allowlist tell staging from production. The servers are set up in the project's `.mcp.json`:

json

```
{
  "mcpServers": {
    "deploy-dev": {
      "type": "http",
      "url": "https://deploy.example.com/mcp/dev",
      "headers": { "Authorization": "Bearer ${DEPLOY_DEV_TOKEN}" }
    },
    "deploy-staging": {
      "type": "http",
      "url": "https://deploy.example.com/mcp/staging",
      "headers": { "Authorization": "Bearer ${DEPLOY_STAGING_TOKEN}" }
    },
    "deploy-prod": {
      "type": "http",
      "url": "https://deploy.example.com/mcp/prod",
      "headers": { "Authorization": "Bearer ${DEPLOY_PROD_TOKEN}" }
    }
  }
}
```

Every server offers the same three tools:

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Tool</th><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Input</th><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Returns</th></tr></thead><tbody><tr><td class="border-b p-sm" style="text-align:left"><code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">release</code></td><td class="border-b p-sm" style="text-align:left"><code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">version</code>, and in production a <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">ticket</code></td><td class="border-b p-sm" style="text-align:left">The release ID, once the rollout finishes</td></tr><tr><td class="border-b p-sm" style="text-align:left"><code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">status</code></td><td class="border-b p-sm" style="text-align:left">None</td><td class="border-b p-sm" style="text-align:left">Waits until five minutes after the last release, then returns each endpoint's 5xx rate over that time</td></tr><tr><td class="border-b p-sm" style="text-align:left"><code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">rollback</code></td><td class="border-b p-sm" style="text-align:left">None</td><td class="border-b p-sm" style="text-align:left">The version that is live again</td></tr></tbody></table>

The staging job runs on a push to `main` and pre-approves the staging server's three tools and no others. It holds the staging token only, so the other two servers get no valid token and refuse the job. This is the pipeline step for the staging job:

yaml

```
- name: Release to staging and roll back if it is unhealthy
  env:
    ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
    DEPLOY_STAGING_TOKEN: ${{ secrets.DEPLOY_STAGING_TOKEN }}   # no other environment's token
  run: >
    claude -p "Release version ${{ github.sha }} of the claims portal to staging,
    then call status. If the 5xx rate on any endpoint is over 1%, roll back.
    Finish with three lines for the release notes: what you released, what status
    reported, and whether you rolled back."
    --allowedTools "mcp__deploy-staging__release,mcp__deploy-staging__status,mcp__deploy-staging__rollback"
    --permission-mode dontAsk >> release-notes.md
```

In `dontAsk` mode Claude Code denies any call that would otherwise prompt, so a deployment tool off the list is refused and the job never waits for an answer.

One `PreToolUse` hook on the `release` tools decides per environment. It is written out in the hooks as approval gates play, and it gives three tiers:

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Environment</th><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Tools on the allowlist</th><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">What happens to <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">release</code></th><th class="border-b border-strong p-sm text-left font-medium" style="text-align:left">Who approves</th></tr></thead><tbody><tr><td class="border-b p-sm" style="text-align:left">Dev</td><td class="border-b p-sm" style="text-align:left"><code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">release</code>, <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">status</code>, <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">rollback</code></td><td class="border-b p-sm" style="text-align:left">The hook allows it</td><td class="border-b p-sm" style="text-align:left">Nobody</td></tr><tr><td class="border-b p-sm" style="text-align:left">Staging</td><td class="border-b p-sm" style="text-align:left"><code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">release</code>, <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">status</code>, <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">rollback</code></td><td class="border-b p-sm" style="text-align:left">The hook asks, or allows it from the pipeline on <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">main</code></td><td class="border-b p-sm" style="text-align:left">The engineer, or the approved merge</td></tr><tr><td class="border-b p-sm" style="text-align:left">Production</td><td class="border-b p-sm" style="text-align:left"><code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">status</code>, <code class="rounded border bg-surface-2 px-1.5 py-px font-mono text-[0.875em]">rollback</code></td><td class="border-b p-sm" style="text-align:left">Denied unless the hook allows it</td><td class="border-b p-sm" style="text-align:left">The release manager, through the change ticket</td></tr></tbody></table>

In production, `dontAsk` mode still runs a call that a `PreToolUse` hook approves, so with `release` off the allowlist the hook's `allow` is the only way through. Production therefore fails closed, because a release is denied if the hook fails to run. `rollback` stays on the allowlist because it is a runbook approved in advance.

If the runner carries managed settings with `allowManagedHooksOnly`, the hook has to be defined in the managed settings, and with `allowManagedMcpServersOnly` the servers have to be on the managed allowlist.

## Governance considerations[](https://academy.claude.com/courses/ai-native-sdlc-playbook/ci-cd-integration-and-deployment)

The governing principle is that the agent may act up to the production gate and cannot pass it. The controls below enforce this principle.

- **Branch protection** turns anything the agent writes into a PR, with no direct path to main.
- **The production deploy hook** blocks the release until a named release manager authorizes it. Each non-interactive run acts under the agent's own identity, so the pipeline log separates what the agent did from what the engineer who triggered it did.
- **Per-environment permission tiers** set how much the agent may do on the way to the gate.

## How to measure it[](https://academy.claude.com/courses/ai-native-sdlc-playbook/ci-cd-integration-and-deployment)

- **Leading indicator**: The share of pipeline failures triaged without paging a human, taken from the CI/CD pipeline logs.
- **Lagging indicator**: DevOps Research and Assessment (DORA) measures, which the CI system and deployment tooling already emit.

Was this helpful?
