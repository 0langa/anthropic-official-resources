---
title: Scheduled deployments
url: https://platform.claude.com/docs/en/managed-agents/scheduled-deployments
description: "Create and manage deployments with the Claude API: run an agent on a recurring cron schedule and inspect its run history."
featureMetadata:
  topic:
    title: Managed Agents
    url: https://platform.claude.com/docs/en/managed-agents/overview?sdk_languages=curl
  status: beta
  betaHeader: managed-agents-2026-04-01
---

A **scheduled deployment** allows an [agent](https://platform.claude.com/docs/en/managed-agents/agent-setup?sdk_languages=curl) to start [sessions](https://platform.claude.com/docs/en/managed-agents/sessions?sdk_languages=curl) autonomously, enabling task completion over a predictable cadence. You create and manage deployments with the Deployments API, part of the Claude API.

For the launch context and examples of what teams run on schedules, see [scheduled deployments and vaults in Claude Managed Agents](https://claude.com/blog/whats-new-in-claude-managed-agents) on the blog.

## Create a scheduled deployment

When creating a deployment, you pass the [session configurations](https://platform.claude.com/docs/en/managed-agents/sessions?sdk_languages=curl) required for execution, in addition to a `schedule`.

* Deployments require [agent configuration](https://platform.claude.com/docs/en/managed-agents/agent-setup?sdk_languages=curl) and [environment configuration](https://platform.claude.com/docs/en/managed-agents/environments?sdk_languages=curl), and optionally accept [files](https://platform.claude.com/docs/en/managed-agents/files?sdk_languages=curl), [GitHub](https://platform.claude.com/docs/en/managed-agents/github?sdk_languages=curl), [memory stores](https://platform.claude.com/docs/en/managed-agents/memory?sdk_languages=curl), and [vaults](https://platform.claude.com/docs/en/managed-agents/vaults?sdk_languages=curl). A deployment that targets a [self-hosted environment](https://platform.claude.com/docs/en/managed-agents/self-hosted-sandboxes-memory?sdk_languages=curl) can attach memory stores; `file` and `github_repository` resources require a cloud environment. The Claude Console deployment form does not currently offer memory stores for self-hosted environments; attach them through the API or an SDK instead.
* Deployments also require at least one initial event, a `user.message` or `user.define_outcome`, that starts each session's work. In a deployment file for `ant apply`, the text below the frontmatter becomes that `user.message`.
* In the `schedule`, you define a cron `expression` and a `timezone`. Maximum granularity supported is at the minute level.

<Note>
  On [Claude Platform on AWS](https://platform.claude.com/docs/en/build-with-claude/claude-platform-on-aws?sdk_languages=curl), each run creates its session as an IAM role in your AWS account. Before you create the deployment, set `execution_identity` on the agent to `{"type": "aws_role", "role_arn": "arn:aws:iam::123456789012:role/example-role"}`. Creating a deployment for an agent without this field returns a 400 error.

  * **Trust policy:** Allow the `aws-external-anthropic.amazonaws.com` service principal to call `sts:AssumeRole` and `sts:SetSourceIdentity`.
  * **Role permissions:** Allow `aws-external-anthropic:CreateSession`, `sts:GetWebIdentityToken`, and `sts:TagGetWebIdentityToken`.
  * **Caller permissions:** The IAM principal that sets the role on the agent needs `iam:PassRole` on that role. The role must be in the same AWS account. No [managed policy](https://platform.claude.com/docs/en/api/claude-platform-on-aws-iam-actions?sdk_languages=curl#managed-policies) grants `iam:PassRole`.
</Note>

<CodeGroup defaultLanguage="CLI">
  ```bash cURL
  curl --fail-with-body -sS "https://api.anthropic.com/v1/deployments?beta=true" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01" \
    -H "content-type: application/json" \
    -d '{
      "name": "Weekly compliance scan",
      "agent": "'"$AGENT_ID"'",
      "environment_id": "'"$ENVIRONMENT_ID"'",
      "initial_events": [
        {"type": "user.message", "content": [{"type": "text", "text": "Run the weekly compliance scan."}]}
      ],
      "schedule": {
        "type": "cron",
        "expression": "0 20 * * 5",
        "timezone": "America/New_York"
      }
    }'
  ```
</CodeGroup>

The response includes a deployment object with a populated `schedule.upcoming_runs_at` with the next upcoming fire times, to confirm your schedule was set correctly.

```json
{
  "id": "depl_01xyz",
  "status": "active",
  "paused_reason": null,
  "schedule": {
    "type": "cron",
    "expression": "0 20 * * 5",
    "timezone": "America/New_York",
    "last_run_at": null,
    "upcoming_runs_at": [
      "2026-05-09T00:00:00Z",
      "2026-05-16T00:00:00Z",
      "2026-05-23T00:00:00Z"
    ]
  }
}
```

The upcoming run timestamps reflect the exact schedule configured. However, to distribute load, actual execution applies jitter of up to 15% of the interval between runs, with a minimum of 5 seconds and a maximum of 9 minutes.

A maximum of **1,000 scheduled deployments** is supported per organization. Contact Anthropic support if you need more.

See the [Create Deployment reference](https://platform.claude.com/docs/en/api/beta/deployments/create?sdk_languages=curl) for full parameters and response schema.

### Cron and timezone semantics

* **Expression:** Standard POSIX cron (`minute hour day-of-month month day-of-week`). You can generate and validate these cron expressions in the [Claude Console](https://platform.claude.com/workspaces/default/deployments).
* **Timezone:** IANA timezone identifier (for example, `"America/Los_Angeles"`).
* **DST:** Cron schedules use literal wall-clock matching, so `"0 20 * * *"` in `America/New_York` fires at 8:00 PM local time regardless of whether EST or EDT is in effect.

<Note>
  Wall-clock times that do not exist on a spring-forward day (such as 2 AM) are not triggered. Wall-clock times that occur twice on a fall-back day fire twice. Schedule outside the 1–3 AM local window, or use UTC, when missed or duplicate executions are unacceptable.
</Note>

### Set a budget on each run

Pass the optional `budget` object when you create or update the deployment. It takes the same shape as a [session budget](https://platform.claude.com/docs/en/managed-agents/budgets?sdk_languages=curl). The deployment copies the cap onto each session it starts, so the budget bounds every run separately rather than acting as a cumulative ceiling across runs: a deployment with a `"2000"` cap can spend up to about $20 on every run.

A session started by the deployment behaves exactly like any other budgeted session: it pauses with `budget_reached` when its own list cost [reaches the cap](https://platform.claude.com/docs/en/managed-agents/budgets?sdk_languages=curl#when-a-session-reaches-its-budget). Changing the deployment's budget applies to runs started afterward; a session already running keeps the cap it started with, which you can [change through the session itself](https://platform.claude.com/docs/en/managed-agents/session-operations?sdk_languages=curl#updating-the-session-budget). Unlike a session budget, a deployment's budget can be removed with `"budget": null` and set again later.

The following example sets a budget on an existing deployment:

<CodeGroup defaultLanguage="CLI">
  ```bash cURL
  curl --fail-with-body -sS "https://api.anthropic.com/v1/deployments/$DEPLOYMENT_ID?beta=true" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01" \
    -H "content-type: application/json" \
    -d '{
      "budget": {
        "type": "limit",
        "max_list_cost": {"amount": "2000", "currency": "USD"}
      }
    }'
  ```
</CodeGroup>

## Deployment runs

Deployments can fail to trigger for a variety of reasons: for example, if the `environment` resource has been archived, or if session creation is rate-limited. Each attempt at executing a deployment generates a **deployment run** record, allowing you to track successes and failures independent of the session lifecycle.

Successful deployments generate active sessions, and a successful deployment run contains the associated `session_id`. To follow a session's lifecycle, track the session events through the [event stream](https://platform.claude.com/docs/en/managed-agents/events-and-streaming?sdk_languages=curl) or [webhooks](https://platform.claude.com/docs/en/managed-agents/webhooks?sdk_languages=curl). Deployment lifecycle changes and the outcome of each scheduled run are also delivered as webhook events, listed in the Deployment events and Deployment run events tabs of [Supported event types](https://platform.claude.com/docs/en/managed-agents/webhooks?sdk_languages=curl#supported-event-types).

List all deployment runs for a deployment as follows:

<CodeGroup>
  ```bash cURL
  curl --fail-with-body -sS "https://api.anthropic.com/v1/deployment_runs?beta=true&deployment_id=$DEPLOYMENT_ID" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01"
  ```
</CodeGroup>

You can additionally filter on deployment runs with errors:

<CodeGroup>
  ```bash cURL
  curl --fail-with-body -sS "https://api.anthropic.com/v1/deployment_runs?beta=true&deployment_id=$DEPLOYMENT_ID&has_error=true" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01"
  ```
</CodeGroup>

A failed run includes an `error` with a `type` describing why session creation was rejected (for example, `environment_archived_error`, `agent_archived_error`, or `session_rate_limited_error`). See the [List Deployment Runs reference](https://platform.claude.com/docs/en/api/beta/deployment_runs/list?sdk_languages=curl) for all filter parameters and the response schema.

```json
{
  "type": "deployment_run",
  "id": "drun_01abc124",
  "deployment_id": "depl_01xyz",
  "trigger_context": { "type": "schedule", "scheduled_at": "2026-05-09T00:00:00Z" },
  "session_id": null,
  "error": {
    "type": "environment_archived_error",
    "message": "environment `env_01abc` is archived"
  },
  "agent": { "type": "agent", "id": "agent_01ghi789", "version": 3 },
  "created_at": "2026-05-09T00:00:01Z"
}
```

To retrieve a single run by ID, call [`GET /v1/deployment_runs/{deployment_run_id}`](https://platform.claude.com/docs/en/api/beta/deployment_runs/retrieve?sdk_languages=curl). A [`deployment_run` webhook event](https://platform.claude.com/docs/en/managed-agents/webhooks?sdk_languages=curl#supported-event-types) carries the run ID as its `data.id`.

## Managing deployment lifecycle

Each lifecycle change emits a [webhook event](https://platform.claude.com/docs/en/managed-agents/webhooks?sdk_languages=curl#supported-event-types), so you can react to a paused, unpaused, or archived deployment without polling; see the Deployment events tab.

**Pause** suppresses scheduled triggers on a go-forward basis; running sessions from a prior deployment run continue to execute. Manual runs through the `run` endpoint are still allowed while paused. Pausing sets `paused_reason` to `{"type": "manual"}`; unpausing clears it.

<CodeGroup>
  ```bash cURL
  curl --fail-with-body -sS -X POST "https://api.anthropic.com/v1/deployments/$DEPLOYMENT_ID/pause?beta=true" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01"
  ```
</CodeGroup>

**Unpause** resumes the schedule from the next scheduled occurrence. Missed triggers are not backfilled.

<CodeGroup>
  ```bash cURL
  curl --fail-with-body -sS -X POST "https://api.anthropic.com/v1/deployments/$DEPLOYMENT_ID/unpause?beta=true" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01"
  ```
</CodeGroup>

**Archive**, unlike **pause**, is terminal: the schedule terminates and the deployment cannot be modified.

<CodeGroup>
  ```bash cURL
  curl --fail-with-body -sS -X POST "https://api.anthropic.com/v1/deployments/$DEPLOYMENT_ID/archive?beta=true" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01"
  ```
</CodeGroup>

### Failure behavior

Session creation rate-limit responses are recorded immediately as a `session_rate_limited_error` run without retry; the schedule attempts again at the next scheduled occurrence. Rate limits on underlying API calls within a session are handled by the session itself.

If a deployment's agent has been archived, the deployment is automatically archived in the same operation. If the agent has been deleted, the next scheduled trigger detects the missing agent and automatically archives the deployment. In both cases no deployment run is recorded. If a subagent referenced by the agent has been archived, the next trigger records a failed run with `error.type: "agent_archived_error"` and the deployment is automatically paused so you can update the agent and resume. Other unrecoverable session-creation errors, such as an archived environment or vault, behave the same way: the trigger records a failed run and the deployment is automatically paused. The deployment's `paused_reason.error.type` mirrors the failed run's `error.type`.

## Trigger a manual run

To run a deployment outside its schedule, call the [`run` endpoint](https://platform.claude.com/docs/en/api/beta/deployments/run?sdk_languages=curl). This creates a session immediately and writes a deployment run with `trigger_context.type: "manual"`. This allows you to test a deployment before committing to the schedule.

<CodeGroup>
  ```bash cURL
  curl --fail-with-body -sS -X POST "https://api.anthropic.com/v1/deployments/$DEPLOYMENT_ID/run?beta=true" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01"
  ```
</CodeGroup>
