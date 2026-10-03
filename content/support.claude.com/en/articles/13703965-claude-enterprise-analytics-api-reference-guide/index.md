Copy page



cURL

# Analytics

##### Models



BetaAnalyticsArtifactActivity object{ artifact\_type, artifacts\_created\_count, distinct\_user\_count, 6 more }

Artifact-creation activity for one (`artifact_type`, `is_shared`) bucket
on a given day.

Artifacts form a small finite cube — the canonical MIME type (8 values incl.
`other`) crossed with shared-vs-private — so the response is the full set of
non-empty buckets, not a ranked/paginated list. Claude Code and Cowork
artifacts report under `text/html` and are counted from 2026-08-17
onward; earlier days contain claude.ai chat artifacts only. With
`group_by[]=product` / `user_id` / `rbac_group_id` each row is further
split by the flat group keys and counts are scoped to that cut.



BetaAnalyticsChatMetrics object{ connectors\_used\_count, distinct\_artifacts\_created\_count, distinct\_connectors\_used\_count, 9 more }

Claude.ai activity metrics for a single user on a given day.



BetaAnalyticsClaudeCodeMetrics object{ core\_metrics, tool\_actions }

Claude Code activity metrics for a single user on a given day.



BetaAnalyticsClaudeTagCategory = "dm" or "engaged" or "monitoring" or 2 more

One of the following:

"dm"

"engaged"

"monitoring"

"proactive"

"scheduled"



BetaAnalyticsConnectorActivity object{ chat\_metrics, claude\_code\_metrics, connector\_name, 13 more }

Per-connector activity data for a given day.



BetaAnalyticsConnectorChatMetrics object{ distinct\_conversation\_connector\_used\_count }

Claude.ai activity metrics for a single connector on a given day.

distinct\_conversation\_connector\_used\_count: number or null

Number of distinct conversations in which the connector was used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



BetaAnalyticsConnectorClaudeCodeMetrics object{ distinct\_session\_connector\_used\_count }

Claude Code activity metrics for a single connector on a given day.

distinct\_session\_connector\_used\_count: number or null

Number of distinct Claude Code sessions in which the connector was used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



BetaAnalyticsConnectorCoworkMetrics object{ distinct\_session\_connector\_used\_count }

Cowork activity metrics for a single connector on a given day.

distinct\_session\_connector\_used\_count: number or null

Number of distinct Cowork sessions in which the connector was used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



BetaAnalyticsConnectorOfficeMetrics object{ excel, outlook, powerpoint, word }

Office Agent activity metrics for a single connector on a given day, broken out by Office product.



BetaAnalyticsConnectorOfficeProductMetrics object{ distinct\_session\_connector\_used\_count }

Office Agent activity metrics for a single connector on a given day within one Office product.

distinct\_session\_connector\_used\_count: number or null

Number of distinct Office Agent sessions in which the connector was used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



BetaAnalyticsContextWindow = "0-200k" or "200k-1M"

One of the following:

"0-200k"

"200k-1M"



BetaAnalyticsCoreCodeMetrics object{ artifacts\_created\_count, commit\_count, distinct\_session\_count, 2 more }

Core Claude Code activity metrics for a single user on a given day.

artifacts\_created\_count: number

Number of artifacts created in Claude Code sessions: an artifact counts once, on the day a session first saves it. Counted from 2026-08-17; 0 on earlier days. Exact in date-range mode: a creation belongs to exactly one day, so the per-day counts never overlap and their sum over the window is the exact count of distinct creations in it.

commit\_count: number

Number of commits made via Claude Code

distinct\_session\_count: number or null

Number of distinct Claude Code sessions. On aggregated rows and in date-range mode: summed per-day distinct counts. A session essentially never spans a UTC day, so the sum is in practice the true distinct count.



lines\_of\_code: [BetaAnalyticsLinesOfCode](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { added\_count, removed\_count }

Lines of code added and removed via Claude Code.

added\_count: number

Lines of code added

removed\_count: number

Lines of code removed

pull\_request\_count: number

Number of pull requests created via Claude Code



BetaAnalyticsCostBucketedResult object{ amount, claude\_tag\_category, claude\_tag\_user\_id, 12 more }



BetaAnalyticsCostReportTimeBucket object{ ending\_at, results, starting\_at }



BetaAnalyticsCostType = "code\_execution" or "tokens" or "web\_search"

One of the following:

"code\_execution"

"tokens"

"web\_search"



BetaAnalyticsCostUsersItem object{ actor, amount, claude\_tag\_category, 15 more }



BetaAnalyticsCoworkMetrics object{ action\_count, artifacts\_created\_count, connectors\_used\_count, 14 more }

Cowork activity metrics for a single user on a given day.



BetaAnalyticsDesignMetrics object{ distinct\_projects\_created\_count, distinct\_projects\_used\_count, distinct\_session\_count, message\_count }

Claude Design activity metrics for a single user on a given day.

distinct\_projects\_created\_count: number

Number of distinct Claude Design projects created. Exact in date-range mode: a creation belongs to exactly one day, so the per-day counts never overlap and their sum over the window is the exact count of distinct creations in it.

distinct\_projects\_used\_count: number or null

Number of distinct Claude Design projects the user worked in. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

distinct\_session\_count: number or null

Number of distinct Claude Design sessions. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

message\_count: number

Number of messages sent in Claude Design sessions



BetaAnalyticsInferenceGeoFilter = "global" or "not\_available" or "us"

One of the following:

"global"

"not\_available"

"us"



BetaAnalyticsLinesOfCode object{ added\_count, removed\_count }

Lines of code added and removed via Claude Code.

added\_count: number

Lines of code added

removed\_count: number

Lines of code removed



BetaAnalyticsOfficeMetrics object{ excel, outlook, powerpoint, word }

Office Agent activity metrics for a single user on a given day, broken out by Office product.



BetaAnalyticsOfficeProductMetrics object{ connectors\_used\_count, distinct\_connectors\_used\_count, distinct\_session\_count, 3 more }

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

BetaAnalyticsPluginActivity object{ claude\_code\_metrics, cowork\_metrics, distinct\_user\_count, 8 more }

Per-plugin install + invocation activity for a given day.

With `group_by[]=user_id` / `rbac_group_id` / `product` (`cowork` /
`claude_code` only on this endpoint) each row is one (plugin, user),
(plugin, group), or (plugin, product) cut: the flat `user_id` /
`rbac_group_id` / `product` keys carry the cut and the counts are
scoped to it.



BetaAnalyticsPluginClaudeCodeMetrics object{ distinct\_session\_plugin\_used\_count }

Claude Code activity metrics for a single plugin on a given day.

distinct\_session\_plugin\_used\_count: number or null

Number of distinct Claude Code sessions in which the plugin was invoked. Null on aggregated rows where a distinct count cannot be computed.



BetaAnalyticsPluginCoworkMetrics object{ distinct\_session\_plugin\_used\_count }

Cowork activity metrics for a single plugin on a given day.

distinct\_session\_plugin\_used\_count: number or null

Number of distinct Cowork sessions in which the plugin was invoked. Null on aggregated rows where a distinct count cannot be computed.



BetaAnalyticsProductFilter = "chat" or "claude-tag" or "claude\_code" or 4 more

Publicly documented product surfaces. `claude-tag` is Claude Tag, the Claude product in Slack.

One of the following:

"chat"

"claude-tag"

"claude\_code"

"claude\_design"

"claude\_in\_chrome"

"cowork"

"office\_agent"



BetaAnalyticsProjectActivity object{ distinct\_user\_count, message\_count, project\_id, 8 more }

Per-project activity data for a given day.



BetaAnalyticsScienceMetrics object{ delegation\_count, distinct\_session\_count, message\_count, 2 more }

Claude Science activity metrics for a single user on a given day.

delegation\_count: number

Number of delegations (handoffs to a specialized agent) in Claude Science sessions

distinct\_session\_count: number or null

Number of distinct Claude Science sessions. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

message\_count: number

Number of messages sent in Claude Science sessions

remote\_compute\_job\_count: number

Number of remote compute jobs launched from Claude Science sessions

skills\_used\_count: number

Total number of skill invocations in Claude Science sessions



BetaAnalyticsServerToolUse object{ web\_search\_requests }

web\_search\_requests: number

The number of web search requests made.



BetaAnalyticsSingleDayActivitySummary object{ assigned\_seat\_count, cowork\_daily\_active\_user\_count, cowork\_monthly\_active\_user\_count, 26 more }

Per-day entry in the /summaries response.



BetaAnalyticsSkillActivity object{ chat\_metrics, claude\_code\_metrics, cowork\_metrics, 14 more }

Per-skill activity data for a given day.



BetaAnalyticsSkillChatMetrics object{ distinct\_conversation\_skill\_used\_count }

Claude.ai activity metrics for a single skill on a given day.

distinct\_conversation\_skill\_used\_count: number or null

Number of distinct conversations in which the skill was used. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



BetaAnalyticsSkillClaudeCodeMetrics object{ distinct\_session\_skill\_used\_count }

Claude Code activity metrics for a single skill on a given day.

distinct\_session\_skill\_used\_count: number or null

Number of distinct Claude Code sessions in which the skill was used. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



BetaAnalyticsSkillCoworkMetrics object{ distinct\_session\_skill\_used\_count }

Cowork activity metrics for a single skill on a given day.

distinct\_session\_skill\_used\_count: number or null

Number of distinct Cowork sessions in which the skill was used. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



BetaAnalyticsSkillOfficeMetrics object{ excel, outlook, powerpoint, word }

Office Agent activity metrics for a single skill on a given day, broken out by Office product.



BetaAnalyticsSkillOfficeProductMetrics object{ distinct\_session\_skill\_used\_count }

Office Agent activity metrics for a single skill on a given day within one Office product.

distinct\_session\_skill\_used\_count: number or null

Number of distinct Office Agent sessions in which the skill was used. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



BetaAnalyticsTokenType = "cache\_creation.ephemeral\_1h\_input\_tokens" or "cache\_creation.ephemeral\_5m\_input\_tokens" or "cache\_read\_input\_tokens" or 2 more

One of the following:

"cache\_creation.ephemeral\_1h\_input\_tokens"

"cache\_creation.ephemeral\_5m\_input\_tokens"

"cache\_read\_input\_tokens"

"output\_tokens"

"uncached\_input\_tokens"



BetaAnalyticsToolActionCounts object{ accepted\_count, rejected\_count }

Accepted/rejected counts for a single Claude Code tool type.

accepted\_count: number

Number of tool proposals accepted

rejected\_count: number

Number of tool proposals rejected



BetaAnalyticsToolActions object{ edit\_tool, multi\_edit\_tool, notebook\_edit\_tool, write\_tool }

Per-tool accepted/rejected counts for Claude Code file modification tools.



BetaAnalyticsUsageBucketedResult object{ cache\_creation, cache\_read\_input\_tokens, claude\_tag\_category, 12 more }



BetaAnalyticsUsageReportTimeBucket object{ ending\_at, results, starting\_at }



BetaAnalyticsUsageUsersItem object{ actor, cache\_creation, cache\_read\_input\_tokens, 16 more }



BetaAnalyticsUser object{ type: "user", id, email\_address }

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

BetaAnalyticsUserActivity object{ chat\_metrics, claude\_code\_metrics, cowork\_metrics, 9 more }

Per-user activity data for a given day.



BetaAnalyticsUserActor object{ type: "user\_actor", deleted, email, 3 more }

type: "user\_actor"

Actor type. Always `"user_actor"`.

deleted: boolean

True when the account has been deleted, or when the user is no longer a member of the organization or its associated organizations (for example, their membership was removed or they were deprovisioned via your identity provider). `email_address` stays populated for removed users and is null when the account has been deleted. `name` follows the rules described on that field. The `user_id` is still populated for reconciliation.

email\_address: string or null

The user's email address, including for users who are no longer members of the organization or its associated organizations. Null when the account has been deleted (check `deleted`) and for system-minted service accounts, which have no person's mailbox behind them (check `name`).

name: string or null

The user's full name. Null when the user has not set a name. Returns `"Deleted User"` when the account itself has been deleted, or when the user is no longer a member of the organization or its associated organizations and the organization has chosen to hide the names of removed users. Otherwise, the name stays populated for removed users. Rows for system-minted service accounts render the service name (for example, `"Claude Security"` for usage by Anthropic's security-patching service) or null.

user\_id: string

Tagged user ID.

email: string or null⁠Deprecated

Deprecated: use `email_address`, which carries the same value.

#### Analytics[Summaries](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/summaries)

##### [Get Activity Summaries](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/summaries/list)

GET/v1/organizations/analytics/summaries

Get organization-wide activity summaries for a date range.

#### Analytics[Users](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/users)

##### [List User Activity](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/users/list)

GET/v1/organizations/analytics/users

Get per-user activity for a given day, with cursor-based pagination.

#### AnalyticsAppsChat[Projects](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/apps/chat/projects)

##### [Get Chat Project Usage](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/apps/chat/projects/list)

GET/v1/organizations/analytics/apps/chat/projects

Get per-project activity for a given day, with cursor-based pagination.

#### Analytics[Connectors](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/connectors)

##### [Get Connector Usage](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/connectors/list)

GET/v1/organizations/analytics/connectors

Get per-connector usage for a given day, with cursor-based pagination.

#### Analytics[Plugins](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/plugins)

##### [Get Plugin Usage](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/plugins/list)

GET/v1/organizations/analytics/plugins

Get per-plugin install + invocation usage for a given day, with pagination.

#### Analytics[Skills](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/skills)

##### [Get Skill Usage](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/skills/list)

GET/v1/organizations/analytics/skills

Get per-skill usage for a given day, with cursor-based pagination.

#### Analytics[Artifacts](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/artifacts)

##### [Get Artifact Activity](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/artifacts/list)

GET/v1/organizations/analytics/artifacts

Get artifact-creation activity for a given day, broken out by MIME type.

#### Analytics[Usage Report](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/usage_report)

##### [Get Token Usage Over Time](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/usage_report/list)

GET/v1/organizations/analytics/usage\_report

Get token usage over time across a date range.

#### Analytics[User Usage Report](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/user_usage_report)

##### [Get Per-User Token Usage](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/user_usage_report/list)

GET/v1/organizations/analytics/user\_usage\_report

Get per-user token usage across a date range.

#### Analytics[Cost Report](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/cost_report)

##### [Get Cost Over Time](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/cost_report/list)

GET/v1/organizations/analytics/cost\_report

Get cost in USD over time across a date range.

#### Analytics[User Cost Report](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/user_cost_report)

##### [Get Per-User Cost](https://platform.claude.com/docs/en/api/http/beta/organization/analytics/user_cost_report/list)

GET/v1/organizations/analytics/user\_cost\_report

Get per-user cost in USD across a date range.
