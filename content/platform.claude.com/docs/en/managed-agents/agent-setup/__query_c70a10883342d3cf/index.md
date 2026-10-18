---
title: Define your agent
url: https://platform.claude.com/docs/en/managed-agents/agent-setup
description: Create a reusable, versioned agent configuration.
featureMetadata:
  topic:
    title: Managed Agents
    url: https://platform.claude.com/docs/en/managed-agents/overview?sdk_languages=curl
  status: beta
  betaHeader: managed-agents-2026-04-01
---

An agent is a reusable, versioned configuration that defines persona and capabilities. It bundles the model, system prompt, tools, MCP servers, and skills that shape how Claude behaves during a session.

Create the agent once as a reusable resource and reference it by ID each time you [start a session](https://platform.claude.com/docs/en/managed-agents/sessions?sdk_languages=curl). Agents are versioned and easier to manage across many sessions.

## Agent configuration fields

| Field         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`        | Required. A human-readable name for the agent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `model`       | Required. The Claude [model](https://platform.claude.com/docs/en/models/overview?sdk_languages=curl) that powers the agent. Accepts a model ID string or an object, for example `{"id": "claude-opus-5-5"}`. Claude 4.5 and later models are supported. The object form also accepts `speed`, `effort`, and `inference_geo` fields; see the tips under [Create an agent](https://platform.claude.com/docs/en/managed-agents/agent-setup?sdk_languages=curl#create-an-agent), [Effort levels](https://platform.claude.com/docs/en/build-with-claude/effort?sdk_languages=curl#effort-levels), and [Pin the inference geo](https://platform.claude.com/docs/en/managed-agents/agent-setup?sdk_languages=curl#pin-the-inference-geo). |
| `system`      | A [system prompt](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices?sdk_languages=curl#give-claude-a-role) that defines the agent's behavior and persona. The system prompt is distinct from [user messages](https://platform.claude.com/docs/en/managed-agents/reference?sdk_languages=curl#event-types), which should describe the work to be done.                                                                                                                                                                                                                                                                                                                       |
| `tools`       | The tools available to the agent. Combines [pre-built agent tools](https://platform.claude.com/docs/en/managed-agents/tools?sdk_languages=curl), [MCP tools](https://platform.claude.com/docs/en/managed-agents/mcp-connector?sdk_languages=curl), and [custom tools](https://platform.claude.com/docs/en/managed-agents/tools?sdk_languages=curl#custom-tools).                                                                                                                                                                                                                                                                                                                                                                   |
| `mcp_servers` | [MCP servers](https://platform.claude.com/docs/en/managed-agents/mcp-connector?sdk_languages=curl) that provide standardized third-party capabilities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `skills`      | [Skills](https://platform.claude.com/docs/en/managed-agents/skills?sdk_languages=curl) that supply domain-specific context with progressive disclosure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `multiagent`  | Lets the agent hand work to other agents, as subagents or in [dynamic workflows](https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration?sdk_languages=curl#dynamic-workflows), and optionally consult an [advisor](https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration?sdk_languages=curl#give-the-session-an-advisor) model. With the `multiagent_20261001` type, dynamic workflows are on unless you disable them. See [Multiagent orchestration](https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration?sdk_languages=curl).                                                                                                                                  |
| `description` | A description of what the agent does.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `metadata`    | Arbitrary key-value pairs for your own tracking.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

You can also override `model`, `system`, `tools`, `mcp_servers`, and `skills` for a single session without changing the agent. A `model` override replaces the agent's `model` object in full, so the agent's own `effort` isn't carried over. To run the session at a specific effort level, set `effort` inside the override's `model` object. See [Override agent configuration for a session](https://platform.claude.com/docs/en/managed-agents/sessions?sdk_languages=curl#override-agent-configuration-for-a-session).

## Create an agent

The following example defines a coding agent that uses the newest Claude Opus model with access to the pre-built agent toolset. The toolset lets the agent write code, read files, search the web, and more. See the [agent tools reference](https://platform.claude.com/docs/en/managed-agents/tools?sdk_languages=curl) for the full list of supported tools.

The examples use curl, the `ant` CLI, or one of the SDKs. If you haven't set one up, the [quickstart](https://platform.claude.com/docs/en/managed-agents/quickstart?sdk_languages=curl#install-the-cli) covers installation and client setup.

<CodeGroup defaultLanguage="CLI">
  ```bash cURL
  agent=$(curl -fsSL https://api.anthropic.com/v1/agents \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01" \
    -H "content-type: application/json" \
    -d '{
      "name": "Coding Assistant",
      "model": "claude-opus-5-5",
      "system": "You are a helpful coding agent.",
      "tools": [{"type": "agent_toolset_20260401"}]
    }')

  AGENT_ID=$(jq -r '.id' <<< "$agent")
  AGENT_VERSION=$(jq -r '.version' <<< "$agent")
  ```
</CodeGroup>

The response echoes your configuration and adds `id`, `type`, `version`, `created_at`, `updated_at`, and `archived_at` fields, and fills in `model` fields you omit, such as `effort`, with their defaults. The `version` starts at 1 and increments each time an update changes the agent.

```json
{
  "id": "agent_01HqR2k7vXbZ9mNpL3wYcT8f",
  "type": "agent",
  "name": "Coding Assistant",
  "model": {
    "id": "claude-opus-5-5",
    "effort": { "type": "medium" },
    "speed": "standard"
  },
  "system": "You are a helpful coding agent.",
  "description": null,
  "tools": [
    {
      "type": "agent_toolset_20260401",
      "default_config": {
        "permission_policy": { "type": "always_allow" }
      }
    }
  ],
  "skills": [],
  "mcp_servers": [],
  "multiagent": null,
  "metadata": {},
  "version": 1,
  "created_at": "2026-04-03T18:24:10.412Z",
  "updated_at": "2026-04-03T18:24:10.412Z",
  "archived_at": null
}
```

The `default_config` on the toolset shows its default [permission policy](https://platform.claude.com/docs/en/managed-agents/permission-policies?sdk_languages=curl), `always_allow`, which applies unless you configure one.

<Tip>
  To use Claude Opus 5.5, Claude Opus 5, or Claude Opus 4.8 with [fast mode](https://platform.claude.com/docs/en/build-with-claude/fast-mode?sdk_languages=curl), pass `model` as an object, for example: `{"id": "claude-opus-5-5", "speed": "fast"}`. See the fast mode page's [supported models](https://platform.claude.com/docs/en/build-with-claude/fast-mode?sdk_languages=curl#supported-models).
</Tip>

<Tip>
  To set the model's effort level, pass `model` as an object, for example: `{"id": "claude-opus-5-5", "effort": "high"}`. The `effort` field accepts a level string (`low`, `medium`, `high`, `xhigh`, or `max`) or an object such as `{"type": "high"}`. See [Effort levels](https://platform.claude.com/docs/en/build-with-claude/effort?sdk_languages=curl#effort-levels) for what each level does.
</Tip>

### Pin the inference geo

Like `speed` and `effort`, `inference_geo` is set through the object form of `model`: pass `model` as an object and set `inference_geo` alongside `id`. The field accepts `"us"` or `"global"`. When it's unset, each model request follows the workspace's default inference geo at the time it's served. See [Data residency](https://platform.claude.com/docs/en/manage-claude/data-residency?sdk_languages=curl) for the workspace-level geo controls and pricing.

The following example pins an agent to US inference and prints the `inference_geo` value from the agent's `model` object:

<CodeGroup defaultLanguage="CLI">
  ```bash cURL
  agent=$(curl -fsSL https://api.anthropic.com/v1/agents \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01" \
    -H "content-type: application/json" \
    -d '{
      "name": "Geo-pinned assistant",
      "model": {"id": "claude-opus-5-5", "inference_geo": "us"},
      "system": "You are a helpful assistant."
    }')

  echo "Inference geo: $(jq -r '.model.inference_geo' <<< "$agent")"
  ```
</CodeGroup>

An `inference_geo` pin is validated against the workspace's [`allowed_inference_geos`](https://platform.claude.com/docs/en/manage-claude/data-residency?sdk_languages=curl#workspace-level-restrictions) when the agent is saved, when a session is created from it, and on every turn the session serves. If the workspace allowlist narrows so a pin is no longer allowed, new sessions can't be created from the agent and running sessions refuse further turns; pins are never exempted, because workspaces rely on them for compliance and data residency.

Setting `inference_geo` on a model that doesn't support geographic inference pinning returns a 400 error; see [Model availability](https://platform.claude.com/docs/en/manage-claude/data-residency?sdk_languages=curl#model-availability) for the models that do. In a `multiagent` configuration, the agent's pin and the pin of every agent listed in the `predefined_agents` list of `subagents` or `workflows` must all be set to the same value or all be unset; see [Multiagent orchestration](https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration?sdk_languages=curl). To change or clear the pin later, update the agent's `model` object; supplying `model` without `inference_geo` clears it, as described under [Update semantics](https://platform.claude.com/docs/en/managed-agents/agent-setup?sdk_languages=curl#update-semantics).

## Update an agent

Updating an agent generates a new version when the configuration changes. The `version` field is optional: supply it for optimistic concurrency (a mismatch returns a 409), or omit it to apply the update unconditionally (last write wins). Updates to archived agents are rejected.

With the CLI, edit the agent's file and run `ant apply` again; apply supplies `version` for you.

<CodeGroup defaultLanguage="CLI">
  ```bash cURL
  updated_agent=$(curl -fsSL "https://api.anthropic.com/v1/agents/$AGENT_ID" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01" \
    -H "content-type: application/json" \
    -d '{
      "version": '"$AGENT_VERSION"',
      "system": "You are a helpful coding agent. Always write tests."
    }'
  )

  echo "New version: $(jq -r '.version' <<< "$updated_agent")"
  ```
</CodeGroup>

The preceding example supplies `version` from the create response, so the update only applies if nothing else has changed the agent since you read it. To apply an update unconditionally, omit `version` from the request:

<CodeGroup>
  ```bash cURL
  updated_agent=$(curl -fsSL "https://api.anthropic.com/v1/agents/$AGENT_ID" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01" \
    -H "content-type: application/json" \
    -d '{
      "description": "Writes and reviews code."
    }')

  echo "New version: $(jq -r '.version' <<< "$updated_agent")"
  ```
</CodeGroup>

### Update semantics

* **`version`** is optional and must be at least 1 when supplied. When supplied, the request returns a 409 if it doesn't match the agent's current version, even when the fields you send already match the stored values; re-read the agent and retry. When omitted, the update applies unconditionally and the most recent update silently replaces any concurrent one, with no error to either caller. Supplying `version` is the recommended default for interactive callers, and omitting it fits declarative apply loops, such as a CI job that syncs checked-in agent definitions, where the loop owns the agent.

* **Omitted fields are preserved.** You only need to include the fields you want to change.

* **Scalar fields** (`model`, `system`, `name`, `description`) are replaced with the new value. `system` and `description` can be cleared by passing `null`. `model` and `name` are mandatory and cannot be cleared. Within a `model` object you supply, `effort` is the sole exception: if the model `id` is unchanged, omitting `effort` leaves the stored effort level unchanged. If you change the model `id`, an omitted `effort` resets to the new model's default. Other `model` fields are replaced along with the object: supplying `model` without `inference_geo` clears the agent's inference geo pin.

* **Array fields** (`tools`, `mcp_servers`, `skills`) are fully replaced by the new array. To clear an array field entirely, pass `null` or an empty array.

* **`multiagent`** is merged into the stored block level by level when the update keeps the `multiagent_20261001` type. A setting that you omit keeps its stored value, and a `predefined_agents` list that you send replaces the stored list. Any other update that sends `multiagent` replaces the stored block as a whole, and the settings that it omits take their defaults. Pass `"multiagent": null` to clear the whole block. Inside the block, `null` resets a setting to its default, so setting `workflows` to `null` turns dynamic workflows on. See [Turn on dynamic workflows](https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration?sdk_languages=curl#turn-on-dynamic-workflows).

* **Metadata** is merged at the key level. Keys you provide are added or updated. Keys you omit are preserved. To delete a specific key, set its value to `null`.

* **No-op detection.** If the update produces no change relative to the current version, no new version is created and the existing version is returned.

* **Other agents' `predefined_agents` lists are not updated.** Agents that list this agent in the `predefined_agents` list of `subagents` or `workflows` keep the version that was pinned when they were created or when an update last sent that list, even if the reference omits `version`. To delegate to the new version, [update the agent that lists it](https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration?sdk_languages=curl#list-the-subagents) so that the list references the new version.

The following update clears the description, deletes the `team` key from `metadata`, and sets `workflows` to `null`, which turns dynamic workflows on:

<CodeGroup defaultLanguage="CLI">
  ```bash cURL
  cleared_agent=$(curl -fsSL "https://api.anthropic.com/v1/agents/$AGENT_ID" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01" \
    -H "content-type: application/json" \
    -d '{
      "description": null,
      "metadata": {"team": null},
      "multiagent": {"type": "multiagent_20261001", "workflows": null}
    }')

  echo "Description: $(jq -r '.description' <<< "$cleared_agent")"
  ```
</CodeGroup>

## Agent lifecycle

| Operation         | Behavior                                                                                            |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| **Update**        | Generates a new agent version when the configuration changes.                                       |
| **List versions** | Returns the full version history so you can track changes over time.                                |
| **Archive**       | Makes the agent read-only. New sessions cannot reference it, but existing sessions continue to run. |

### List versions

Fetch the full version history to track how an agent has changed over time. Results are paginated, and the SDK examples fetch every page automatically.

<CodeGroup>
  ```bash cURL
  curl -fsSL "https://api.anthropic.com/v1/agents/$AGENT_ID/versions" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01" \
    | jq -r '.data[] | "Version \(.version): \(.updated_at)"'
  ```
</CodeGroup>

### Archive an agent

Archiving makes the agent read-only and cannot be undone. Existing sessions continue to run, but new sessions cannot reference the agent. The response sets `archived_at` to the archive timestamp.

<CodeGroup>
  ```bash cURL
  archived=$(curl -fsSL -X POST "https://api.anthropic.com/v1/agents/$AGENT_ID/archive" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01")

  echo "Archived at: $(jq -r '.archived_at' <<< "$archived")"
  ```
</CodeGroup>

## Next steps

<CardGroup cols={2}>
  <Card title="Tools" icon="tool" href="https://platform.claude.com/docs/en/managed-agents/tools?sdk_languages=curl">
    Configure tools available to your agent.
  </Card>

  <Card title="Skills" icon="graduation-cap" href="https://platform.claude.com/docs/en/managed-agents/skills?sdk_languages=curl">
    Attach reusable, filesystem-based expertise to your agent for domain-specific workflows.
  </Card>

  <Card title="Start a session" icon="play" href="https://platform.claude.com/docs/en/managed-agents/sessions?sdk_languages=curl">
    Create a session to run your agent and begin executing tasks.
  </Card>

  <Card title="Reference" icon="book" href="https://platform.claude.com/docs/en/managed-agents/reference?sdk_languages=curl">
    Event types, self-hosted worker CLI flags, supported MCP server types, rate limits, and branding guidelines for Claude Managed Agents.
  </Card>
</CardGroup>
