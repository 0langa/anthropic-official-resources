Copy page



cURL

# Analytics

##### [Get Activity Summaries](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/retrieve_summaries)

GET/v1/organizations/analytics/summaries

Get organization-wide activity summaries for a date range.

##### Models



BetaActivitySummary object{ summaries }

Response for GET /v1/organizations/analytics/summaries.



BetaAnalyticsUser object{ type, id, email\_address }

A user in the organization, identified by tagged id and email address.



type: "user"

Object type. Always `user`.

defaultuser

id: string

Tagged user identifier (e.g. `user_...`)

email\_address: string

Email address of the user



BetaAnalyticsUserActor object{ type, deleted, email, 2 more }

type: "user\_actor"

Actor type. Always `"user_actor"`.

deleted: boolean

True when the account has been deleted, or when the user is no longer a member of the organization or its associated organizations (for example, their membership was removed or they were deprovisioned via your identity provider). `email` stays populated for removed users and is null when the account has been deleted. `name` follows the rules described on that field. The `user_id` is still populated for reconciliation.

email: string or null

The user's email address, including for users who are no longer members of the organization or its associated organizations. Null when the account has been deleted (check `deleted`) and for system-minted service accounts, which have no person's mailbox behind them (check `name`).

name: string or null

The user's full name. Null when the user has not set a name. Returns `"Deleted User"` when the account itself has been deleted, or when the user is no longer a member of the organization or its associated organizations and the organization has chosen to hide the names of removed users. Otherwise, the name stays populated for removed users. Rows for system-minted service accounts render the service name (for example, `"Claude Security"` for usage by Anthropic's security-patching service) or null.

user\_id: string

Tagged user ID.



BetaConnectorOfficeProductMetrics object{ distinct\_session\_connector\_used\_count }

Office Agent activity metrics for a single connector on a given day within one Office product.

distinct\_session\_connector\_used\_count: number or null

Number of distinct Office Agent sessions in which the connector was used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



BetaOfficeProductMetrics object{ connectors\_used\_count, distinct\_connectors\_used\_count, distinct\_session\_count, 3 more }

Office Agent activity metrics for a single user on a given day within one Office product.

connectors\_used\_count: number

Number of MCP connector invocations

distinct\_connectors\_used\_count: number or null

Number of distinct MCP connectors used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

distinct\_session\_count: number or null

Number of distinct Office Agent sessions. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

distinct\_skills\_used\_count: number or null

Number of distinct skills used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

message\_count: number

Number of messages sent

skills\_used\_count: number

Number of skill invocations



BetaSkillOfficeProductMetrics object{ distinct\_session\_skill\_used\_count }

Office Agent activity metrics for a single skill on a given day within one Office product.

distinct\_session\_skill\_used\_count: number or null

Number of distinct Office Agent sessions in which the skill was used. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



BetaToolActionCounts object{ accepted\_count, rejected\_count }

Accepted/rejected counts for a single Claude Code tool type.

accepted\_count: number

Number of tool proposals accepted

rejected\_count: number

Number of tool proposals rejected

#### Analytics[Usage](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/usage)

##### [Get Token Usage Over Time](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/usage/list)

GET/v1/organizations/analytics/usage\_report

Get token usage over time across a date range.

##### [Get Per-User Token Usage](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/usage/list_by_user)

GET/v1/organizations/analytics/user\_usage\_report

Get per-user token usage across a date range.

#### Analytics[Cost](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/cost)

##### [Get Cost Over Time](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/cost/list)

GET/v1/organizations/analytics/cost\_report

Get cost in USD over time across a date range.

##### [Get Per-User Cost](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/cost/list_by_user)

GET/v1/organizations/analytics/user\_cost\_report

Get per-user cost in USD across a date range.

#### Analytics[Users](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/users)

##### [List User Activity](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/users/list)

GET/v1/organizations/analytics/users

Get per-user activity for a given day, with cursor-based pagination.

#### Analytics[Skills](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/skills)

##### [Get Skill Usage](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/skills/list)

GET/v1/organizations/analytics/skills

Get per-skill usage for a given day, with cursor-based pagination.

#### Analytics[Connectors](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/connectors)

##### [Get Connector Usage](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/connectors/list)

GET/v1/organizations/analytics/connectors

Get per-connector usage for a given day, with cursor-based pagination.

#### Analytics[Chat Projects](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/chat_projects)

##### [Get Chat Project Usage](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/chat_projects/list)

GET/v1/organizations/analytics/apps/chat/projects

Get per-project activity for a given day, with cursor-based pagination.

#### Analytics[Plugins](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/plugins)

##### [Get Plugin Usage](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/plugins/list)

GET/v1/organizations/analytics/plugins

Get per-plugin install + invocation usage for a given day, with pagination.

#### Analytics[Artifacts](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/artifacts)

##### [Get Artifact Activity](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/artifacts/list)

GET/v1/organizations/analytics/artifacts

Get artifact-creation activity for a given day, broken out by MIME type.
