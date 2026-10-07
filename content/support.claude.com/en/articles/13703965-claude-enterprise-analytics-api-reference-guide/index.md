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

artifact\_type: string

Canonical artifact MIME type (e.g. `text/markdown`, `application/vnd.ant.react`, `image/svg+xml`), or `other`. Claude Code and Cowork artifacts report as `text/html`.

artifacts\_created\_count: number

Number of artifacts created in this bucket on the requested day

distinct\_user\_count: number

Number of distinct users who created artifacts in this bucket on the requested day

is\_shared: boolean

Whether the artifacts in this bucket have ever been shared (a Claude Code / Cowork artifact is shared once anyone beyond its creator may open it: named members, the whole organization, or anyone with the link).

published\_artifacts\_created\_count: number

Number of those artifacts that have been published (for Claude Code / Cowork artifacts: open to anyone with the link); never exceeds `artifacts_created_count`

product: optional string or null

Product that produced this row's activity: one of `chat`, `claude_code`, `cowork`, or `office_agent` (the canonical Cost & Usage product naming; an `office_agent` row's per-surface breakdown is in its `office_metrics`). On `/plugins` only `cowork` and `claude_code` occur (the only surfaces with plugin attribution); on `/artifacts` only `chat`, `claude_code`, and `cowork` occur (the surfaces that create artifacts); `/apps/chat/projects` does not support the product dimension (a `product` entry in `group_by[]` or `filter[]` there is rejected). Present only when the request grouped by `product`.

rbac\_group\_id: optional string or null

Tagged RBAC group identifier (`rbac_group_...`), matching the spend-limits API spelling. Present only when the request grouped by `rbac_group_id`.

rbac\_group\_name: optional string or null

Resolved RBAC group display name, alongside `rbac_group_id` when name resolution is available. Null if the group has been deleted or its name could not be resolved; `rbac_group_id` remains the stable key.

user\_id: optional string or null

Tagged user identifier (e.g. `user_...`). Present only when the request grouped by `user_id`.



BetaAnalyticsChatMetrics object{ connectors\_used\_count, distinct\_artifacts\_created\_count, distinct\_connectors\_used\_count, 9 more }

Claude.ai activity metrics for a single user on a given day.

connectors\_used\_count: number

Number of MCP connector invocations.

distinct\_artifacts\_created\_count: number

Number of distinct artifacts created. Exact in date-range mode: a creation belongs to exactly one day, so the per-day counts never overlap and their sum over the window is the exact count of distinct creations in it.

distinct\_connectors\_used\_count: number or null

Distinct claude.ai connectors this user used. Excludes calls whose connector could not be identified and all calls from organizations with zero data retention. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

distinct\_conversation\_count: number or null

Number of distinct conversations the user participated in. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

distinct\_files\_uploaded\_count: number or null

Number of distinct files uploaded. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

distinct\_projects\_created\_count: number

Number of distinct projects created. Exact in date-range mode: a creation belongs to exactly one day, so the per-day counts never overlap and their sum over the window is the exact count of distinct creations in it.

distinct\_projects\_used\_count: number or null

Number of distinct projects used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

distinct\_shared\_artifacts\_viewed\_count: number or null

Number of distinct shared artifacts the user viewed. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

distinct\_skills\_used\_count: number or null

Number of distinct skills used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

message\_count: number

Number of messages sent

shared\_conversations\_viewed\_count: number

Number of times the user opened a shared conversation in a project

thinking\_message\_count: number

Number of messages that used extended thinking



BetaAnalyticsClaudeCodeMetrics object{ core\_metrics, tool\_actions }

Claude Code activity metrics for a single user on a given day.



core\_metrics: [BetaAnalyticsCoreCodeMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { artifacts\_created\_count, commit\_count, distinct\_session\_count, 2 more }

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

tool\_actions: [BetaAnalyticsToolActions](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { edit\_tool, multi\_edit\_tool, notebook\_edit\_tool, write\_tool }

Per-tool accepted/rejected counts for Claude Code file modification tools.

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

chat\_metrics: [BetaAnalyticsConnectorChatMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_conversation\_connector\_used\_count }

Claude.ai activity metrics for a single connector on a given day.

distinct\_conversation\_connector\_used\_count: number or null

Number of distinct conversations in which the connector was used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



claude\_code\_metrics: [BetaAnalyticsConnectorClaudeCodeMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_connector\_used\_count }

Claude Code activity metrics for a single connector on a given day.

distinct\_session\_connector\_used\_count: number or null

Number of distinct Claude Code sessions in which the connector was used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

connector\_name: string

Name of the connector. Some rows carry an opaque connector id here instead of a readable name; `connector_display_name` holds the resolved name for those rows.



cowork\_metrics: [BetaAnalyticsConnectorCoworkMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_connector\_used\_count }

Cowork activity metrics for a single connector on a given day.

distinct\_session\_connector\_used\_count: number or null

Number of distinct Cowork sessions in which the connector was used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

distinct\_user\_count: number

Number of distinct users who used the connector on the requested day, or, in date-range mode, over the requested window — recomputed as an exact distinct count over the window's per-member daily rows, never a sum of per-day values.



office\_metrics: [BetaAnalyticsConnectorOfficeMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { excel, outlook, powerpoint, word }

Office Agent activity metrics for a single connector on a given day, broken out by Office product.

connector\_display\_name: optional string or null

Human-readable display name for rows whose `connector_name` is an opaque connector id rather than a readable name, resolved at request time from the organization's connectors (including connectors that have since been removed). `connector_name` remains the row's stable key for sorting and pagination, and `filter[]=connector_name:{value}` also matches these rows by display name. Display names are not unique, and the same connector's claude.ai usage can appear under a separate row with a readable `connector_name`. Null when `connector_name` is already a readable name, when the id cannot be resolved to one of the organization's connectors, or when display-name resolution is not enabled for this organization.

individual\_auth\_distinct\_user\_count: optional number or null

Number of distinct users whose use of this connector on the requested day ran on their own individual credential, connected through their own consent flow. Companion bucket to `managed_auth_distinct_user_count`, which carries the measurement, attribution, and null rules. Users whose requests used no stored credential count in neither bucket.

managed\_auth\_distinct\_user\_count: optional number or null

Number of distinct users whose use of this connector on the requested day ran on Enterprise Managed Auth (an organization-managed credential provisioned through the organization's identity provider), read from the token record each request used. Null, never 0, when managed-auth reporting is not enabled for the organization, the value cannot be attributed to the row, no credentialed requests and no managed-token mint events (a managed credential being provisioned for a user's use of the connector) were observed that day, or the day predates 2026-07-01, the first day the backing data exists (forward-only data, no backfill). When credentialed requests or mint events were observed and attributed, both managed-auth fields populate, reporting 0 for a bucket with no users; the two counts are independent, not a partition — a user whose requests that day used both kinds of credential counts in both. Mint events carry user but not surface attribution, so they count as observed auth activity on `user_id` and `rbac_group_id` cuts — attributed to the user the credential was provisioned for — but never on a cut that references `product` (group or filter). Date-range rollup mode (`starting_date`/`ending_date`) computes both fields exactly over the window — distinct users with at least one qualifying day — when the whole window starts on or after 2026-07-01, with the null-versus-0 and mint-event rules applying with the window in place of the day; a range starting earlier reports every managed-auth field as null, never a partial-window value.

product: optional string or null

Product that produced this row's activity: one of `chat`, `claude_code`, `cowork`, or `office_agent` (the canonical Cost & Usage product naming; an `office_agent` row's per-surface breakdown is in its `office_metrics`). On `/plugins` only `cowork` and `claude_code` occur (the only surfaces with plugin attribution); on `/artifacts` only `chat`, `claude_code`, and `cowork` occur (the surfaces that create artifacts); `/apps/chat/projects` does not support the product dimension (a `product` entry in `group_by[]` or `filter[]` there is rejected). Present only when the request grouped by `product`.

rbac\_group\_id: optional string or null

Tagged RBAC group identifier (`rbac_group_...`), matching the spend-limits API spelling. Present only when the request grouped by `rbac_group_id`.

rbac\_group\_name: optional string or null

Resolved RBAC group display name, alongside `rbac_group_id` when name resolution is available. Null if the group has been deleted or its name could not be resolved; `rbac_group_id` remains the stable key.

read\_call\_count: optional number or null

Number of connector tool calls on the requested day whose trusted read-only annotation marked them read-only. Call count, not distinct users. Every call recorded on a classified surface lands in exactly one of `read_call_count`, `write_call_count`, or `unclassified_call_count`, so the three sum to the day's classified calls. Classification is forward-only per surface: claude.ai from 2026-06-01, Claude Code from 2026-05-30, Claude in Office from 2026-05-29, Cowork from 2026-06-02 (Cowork clients predating annotation forwarding land in `unclassified_call_count`). Null, never 0, when the value cannot be stated: the read/write split is not enabled for this organization, or the day predates 2026-05-29. For a date-range total, sum the per-day values, but treat a window that extends before 2026-05-29 as null rather than summing only its covered days — date-range rollup mode (`starting_date`/`ending_date`) applies both rules server-side.

unclassified\_call\_count: optional number or null

Number of connector tool calls on the requested day with no trusted read-only annotation — the annotation is optional in the MCP spec and is discarded when connector access controls are active, so unclassified calls are common. This field shows how much of the day's classified activity the read/write split actually covers. Call count, not distinct users. One of the three call-classification buckets; see `read_call_count` for the per-surface data-start dates, null conditions, and date-range guidance.

user\_id: optional string or null

Tagged user identifier (e.g. `user_...`). Present only when the request grouped by `user_id`.

write\_call\_count: optional number or null

Number of connector tool calls on the requested day whose trusted read-only annotation marked them not read-only. Call count, not distinct users. One of the three call-classification buckets; see `read_call_count` for the per-surface data-start dates, null conditions, and date-range guidance.

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

excel: [BetaAnalyticsConnectorOfficeProductMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_connector\_used\_count }

Office Agent activity metrics for a single connector on a given day within one Office product.

distinct\_session\_connector\_used\_count: number or null

Number of distinct Office Agent sessions in which the connector was used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



outlook: [BetaAnalyticsConnectorOfficeProductMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_connector\_used\_count }

Office Agent activity metrics for a single connector on a given day within one Office product.

distinct\_session\_connector\_used\_count: number or null

Number of distinct Office Agent sessions in which the connector was used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



powerpoint: [BetaAnalyticsConnectorOfficeProductMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_connector\_used\_count }

Office Agent activity metrics for a single connector on a given day within one Office product.

distinct\_session\_connector\_used\_count: number or null

Number of distinct Office Agent sessions in which the connector was used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



word: [BetaAnalyticsConnectorOfficeProductMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_connector\_used\_count }

Office Agent activity metrics for a single connector on a given day within one Office product.

distinct\_session\_connector\_used\_count: number or null

Number of distinct Office Agent sessions in which the connector was used. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

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

amount: string

Amount (post-discount, pre-credit) in fractional cents.



claude\_tag\_category: [BetaAnalyticsClaudeTagCategory](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Claude Tag (Claude in Slack) spend category: `engaged` (a person addressed Claude in a channel or thread), `proactive` (Claude responded without being addressed), `scheduled` (a scheduled routine ran), `monitoring` (Claude watching a channel it was asked to monitor), or `dm` (direct messages with Claude). Populated only when `claude_tag_category` is in `group_by[]`; null for usage that is not Claude Tag. Direct-message usage is billed to the individual user and is reported under that user's product, not under `claude-tag`. New categories may be added over time.

One of the following:

"dm"

"engaged"

"monitoring"

"proactive"

"scheduled"

claude\_tag\_user\_id: string or null

Slack user ID (for example `U0123ABCDEF`) of the member the Claude Tag (Claude in Slack) usage is attributed to, not a claude.ai user ID. Populated only when `claude_tag_user_id` is in `group_by[]`; null for usage that is not Claude Tag and for Claude Tag usage that is not attributed to a single user (for example `monitoring`, and `proactive` usage Claude initiated), so per-user rows can sum to less than the Claude Tag total. Cannot be combined with `group_by[]=rbac_group_id` or the `rbac_group_ids[]` filter.



context\_window: [BetaAnalyticsContextWindow](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Context-window pricing tier of the usage or cost. Null unless `context_window` is in `group_by[]`; it can also be null on grouped rows with no context-window tier, such as code execution.

One of the following:

"0-200k"

"200k-1M"



cost\_type: [BetaAnalyticsCostType](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Cost component when `group_by[]=cost_type`; null otherwise (amount is the combined total).

One of the following:

"code\_execution"

"tokens"

"web\_search"



currency: string

Currency code for the cost amount. Currently always `"USD"`.

defaultUSD



inference\_geo: "global" or "us" or null

Inference region of the usage or cost. Null unless `inference_geo` is in `group_by[]`; it can also be null on grouped rows where the region is not set (the rows that `inference_geos[]=not_available` matches).

One of the following:

"global"

"us"

list\_amount: string

List-price amount (pre-discount) in fractional cents.

model: string or null

Model that produced the usage or cost, as a model name in the form the `models[]` filter accepts (for example, `claude-opus-5`). Null unless `model` is in `group_by[]`; it can also be null on grouped rows whose usage or cost is not attributed to a specific model, such as code execution.

product: string or null

Product surface that produced the usage or cost. Null unless product is in `group_by[]`; it can also be null on grouped rows whose usage cannot be attributed to a known surface. Values include `chat`, `claude_code`, `cowork`, `office_agent`, `claude_in_chrome`, `claude_design`, and `claude-tag`. `claude-tag` is Claude Tag, the Claude product in Slack. Some unattributed usage is reported as "other".

rbac\_group\_id: string or null

RBAC group (team) the usage is attributed to, in the public tagged `rbac_group_...` spelling — the same spelling the activity resources use for this key, so the same team has one id across resources and it round-trips as an `rbac_group_ids[]` filter value. Populated only when `rbac_group_id` is in `group_by[]`. Any-membership semantics: a user in several groups contributes their full usage to each of those groups' rows, so the named-group rows overlap and their sum can exceed the org total. A null value is the single unassigned row: users in no group on that (UTC) day. For the true org total, run the same query without `group_by[]`.

requests: number or null

Number of API requests in this row's scope. Null when `group_by` includes `cost_type` or `token_type` (the count has no per-component attribution; read it from the ungrouped response). For sandbox / code-execution events, this counts execution spans rather than HTTP requests (these rows surface with `product: null`).

slack\_channel\_id: string or null

Slack channel the usage originated from. Populated only when `slack_channel_id` is in `group_by[]`; null for usage outside Slack (and for rows recorded before channel attribution was enabled).



speed: "fast" or "standard" or null

Inference speed mode of the usage or cost: `fast` or `standard`. Null unless `speed` is in `group_by[]`.

One of the following:

"fast"

"standard"



token\_type: [BetaAnalyticsTokenType](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Token type when `group_by[]=token_type` and `cost_type=tokens`; null otherwise.

One of the following:

"cache\_creation.ephemeral\_1h\_input\_tokens"

"cache\_creation.ephemeral\_5m\_input\_tokens"

"cache\_read\_input\_tokens"

"output\_tokens"

"uncached\_input\_tokens"



BetaAnalyticsCostReportTimeBucket object{ ending\_at, results, starting\_at }



ending\_at: string

End of the time bucket (exclusive) in RFC 3339 format.

formatdate-time



results: array of [BetaAnalyticsCostBucketedResult](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { amount, claude\_tag\_category, claude\_tag\_user\_id, 12 more }

Rows for this time bucket. Empty when the bucket has no data; otherwise a single combined row when `group_by[]` is omitted, or one row per group (subject to the per-bucket group cap described on the `group_by[]` parameter).

amount: string

Amount (post-discount, pre-credit) in fractional cents.



claude\_tag\_category: [BetaAnalyticsClaudeTagCategory](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Claude Tag (Claude in Slack) spend category: `engaged` (a person addressed Claude in a channel or thread), `proactive` (Claude responded without being addressed), `scheduled` (a scheduled routine ran), `monitoring` (Claude watching a channel it was asked to monitor), or `dm` (direct messages with Claude). Populated only when `claude_tag_category` is in `group_by[]`; null for usage that is not Claude Tag. Direct-message usage is billed to the individual user and is reported under that user's product, not under `claude-tag`. New categories may be added over time.

One of the following:

"dm"

"engaged"

"monitoring"

"proactive"

"scheduled"

claude\_tag\_user\_id: string or null

Slack user ID (for example `U0123ABCDEF`) of the member the Claude Tag (Claude in Slack) usage is attributed to, not a claude.ai user ID. Populated only when `claude_tag_user_id` is in `group_by[]`; null for usage that is not Claude Tag and for Claude Tag usage that is not attributed to a single user (for example `monitoring`, and `proactive` usage Claude initiated), so per-user rows can sum to less than the Claude Tag total. Cannot be combined with `group_by[]=rbac_group_id` or the `rbac_group_ids[]` filter.



context\_window: [BetaAnalyticsContextWindow](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Context-window pricing tier of the usage or cost. Null unless `context_window` is in `group_by[]`; it can also be null on grouped rows with no context-window tier, such as code execution.

One of the following:

"0-200k"

"200k-1M"



cost\_type: [BetaAnalyticsCostType](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Cost component when `group_by[]=cost_type`; null otherwise (amount is the combined total).

One of the following:

"code\_execution"

"tokens"

"web\_search"



currency: string

Currency code for the cost amount. Currently always `"USD"`.

defaultUSD



inference\_geo: "global" or "us" or null

Inference region of the usage or cost. Null unless `inference_geo` is in `group_by[]`; it can also be null on grouped rows where the region is not set (the rows that `inference_geos[]=not_available` matches).

One of the following:

"global"

"us"

list\_amount: string

List-price amount (pre-discount) in fractional cents.

model: string or null

Model that produced the usage or cost, as a model name in the form the `models[]` filter accepts (for example, `claude-opus-5`). Null unless `model` is in `group_by[]`; it can also be null on grouped rows whose usage or cost is not attributed to a specific model, such as code execution.

product: string or null

Product surface that produced the usage or cost. Null unless product is in `group_by[]`; it can also be null on grouped rows whose usage cannot be attributed to a known surface. Values include `chat`, `claude_code`, `cowork`, `office_agent`, `claude_in_chrome`, `claude_design`, and `claude-tag`. `claude-tag` is Claude Tag, the Claude product in Slack. Some unattributed usage is reported as "other".

rbac\_group\_id: string or null

RBAC group (team) the usage is attributed to, in the public tagged `rbac_group_...` spelling — the same spelling the activity resources use for this key, so the same team has one id across resources and it round-trips as an `rbac_group_ids[]` filter value. Populated only when `rbac_group_id` is in `group_by[]`. Any-membership semantics: a user in several groups contributes their full usage to each of those groups' rows, so the named-group rows overlap and their sum can exceed the org total. A null value is the single unassigned row: users in no group on that (UTC) day. For the true org total, run the same query without `group_by[]`.

requests: number or null

Number of API requests in this row's scope. Null when `group_by` includes `cost_type` or `token_type` (the count has no per-component attribution; read it from the ungrouped response). For sandbox / code-execution events, this counts execution spans rather than HTTP requests (these rows surface with `product: null`).

slack\_channel\_id: string or null

Slack channel the usage originated from. Populated only when `slack_channel_id` is in `group_by[]`; null for usage outside Slack (and for rows recorded before channel attribution was enabled).



speed: "fast" or "standard" or null

Inference speed mode of the usage or cost: `fast` or `standard`. Null unless `speed` is in `group_by[]`.

One of the following:

"fast"

"standard"



token\_type: [BetaAnalyticsTokenType](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Token type when `group_by[]=token_type` and `cost_type=tokens`; null otherwise.

One of the following:

"cache\_creation.ephemeral\_1h\_input\_tokens"

"cache\_creation.ephemeral\_5m\_input\_tokens"

"cache\_read\_input\_tokens"

"output\_tokens"

"uncached\_input\_tokens"



starting\_at: string

Start of the time bucket (inclusive) in RFC 3339 format.

formatdate-time



BetaAnalyticsCostType = "code\_execution" or "tokens" or "web\_search"

One of the following:

"code\_execution"

"tokens"

"web\_search"



BetaAnalyticsCostUsersItem object{ actor, amount, claude\_tag\_category, 15 more }



actor: [BetaAnalyticsUserActor](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { type: "user\_actor", deleted, email, 3 more }

The user this row's usage or cost is attributed to. Always a `user_actor`.

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

amount: string

Amount (post-discount, pre-credit) in fractional cents (minor units).



claude\_tag\_category: [BetaAnalyticsClaudeTagCategory](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Claude Tag (Claude in Slack) spend category: `engaged` (a person addressed Claude in a channel or thread), `proactive` (Claude responded without being addressed), `scheduled` (a scheduled routine ran), `monitoring` (Claude watching a channel it was asked to monitor), or `dm` (direct messages with Claude). Populated only when `claude_tag_category` is in `group_by[]`; null for usage that is not Claude Tag. Direct-message usage is billed to the individual user and is reported under that user's product, not under `claude-tag`. New categories may be added over time.

One of the following:

"dm"

"engaged"

"monitoring"

"proactive"

"scheduled"

claude\_tag\_user\_id: string or null

Slack user ID (for example `U0123ABCDEF`) of the member the Claude Tag (Claude in Slack) usage is attributed to, not a claude.ai user ID. Populated only when `claude_tag_user_id` is in `group_by[]`; null for usage that is not Claude Tag and for Claude Tag usage that is not attributed to a single user (for example `monitoring`, and `proactive` usage Claude initiated), so per-user rows can sum to less than the Claude Tag total. Cannot be combined with `group_by[]=rbac_group_id` or the `rbac_group_ids[]` filter.



context\_window: [BetaAnalyticsContextWindow](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Context-window pricing tier of the usage or cost. Null unless `context_window` is in `group_by[]`; it can also be null on grouped rows with no context-window tier, such as code execution.

One of the following:

"0-200k"

"200k-1M"



cost\_type: [BetaAnalyticsCostType](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Cost component breakdown; null when returning the combined total.

One of the following:

"code\_execution"

"tokens"

"web\_search"



currency: string

Currency code for the cost amount. Currently always `"USD"`.

defaultUSD



ending\_at: string or null

End of the row's UTC time bucket (exclusive), as an RFC 3339 timestamp; equal to `starting_at` plus one `bucket_width`. Null unless `bucket_width` is set.

formatdate-time



inference\_geo: "global" or "us" or null

Inference region of the usage or cost. Null unless `inference_geo` is in `group_by[]`; it can also be null on grouped rows where the region is not set (the rows that `inference_geos[]=not_available` matches).

One of the following:

"global"

"us"

list\_amount: string

List-price amount (pre-discount) in fractional cents.

model: string or null

Model that produced the usage or cost, as a model name in the form the `models[]` filter accepts (for example, `claude-opus-5`). Null unless `model` is in `group_by[]`; it can also be null on grouped rows whose usage or cost is not attributed to a specific model, such as code execution.

product: string or null

Product surface that produced the usage or cost. Null unless product is in `group_by[]`; it can also be null on grouped rows whose usage cannot be attributed to a known surface. Values include `chat`, `claude_code`, `cowork`, `office_agent`, `claude_in_chrome`, `claude_design`, and `claude-tag`. `claude-tag` is Claude Tag, the Claude product in Slack. Some unattributed usage is reported as "other".

rbac\_group\_id: string or null

RBAC group (team) the usage is attributed to, in the public tagged `rbac_group_...` spelling — the same spelling the activity resources use for this key, so the same team has one id across resources and it round-trips as an `rbac_group_ids[]` filter value. Populated only when `rbac_group_id` is in `group_by[]`. Any-membership semantics: a user in several groups contributes their full usage to each of those groups' rows, so the named-group rows overlap and their sum can exceed the org total. A null value is the single unassigned row: users in no group on that (UTC) day. For the true org total, run the same query without `group_by[]`.

requests: number or null

Number of API requests in this row's scope. Null when `group_by` includes `cost_type` or `token_type` (the count has no per-component attribution; read it from the ungrouped response). For sandbox / code-execution events, this counts execution spans rather than HTTP requests (these rows surface with `product: null`).

slack\_channel\_id: string or null

Slack channel the usage originated from. Populated only when `slack_channel_id` is in `group_by[]`; null for usage outside Slack (and for rows recorded before channel attribution was enabled).



speed: "fast" or "standard" or null

Inference speed mode of the usage or cost: `fast` or `standard`. Null unless `speed` is in `group_by[]`.

One of the following:

"fast"

"standard"



starting\_at: string or null

Start of the row's UTC time bucket (inclusive), as an RFC 3339 timestamp. Null unless `bucket_width` is set; without `bucket_width`, each row aggregates the full requested range.

formatdate-time



token\_type: [BetaAnalyticsTokenType](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Token type when `cost_type` is `tokens`; null otherwise.

One of the following:

"cache\_creation.ephemeral\_1h\_input\_tokens"

"cache\_creation.ephemeral\_5m\_input\_tokens"

"cache\_read\_input\_tokens"

"output\_tokens"

"uncached\_input\_tokens"



BetaAnalyticsCoworkMetrics object{ action\_count, artifacts\_created\_count, connectors\_used\_count, 14 more }

Cowork activity metrics for a single user on a given day.

action\_count: number

Number of tool actions completed in Cowork sessions

artifacts\_created\_count: number

Number of artifacts created in Cowork sessions: an artifact counts once, on the day a session first saves it. Counted from 2026-08-17; 0 on earlier days. Exact in date-range mode: a creation belongs to exactly one day, so the per-day counts never overlap and their sum over the window is the exact count of distinct creations in it.

connectors\_used\_count: number

Total number of connector invocations in Cowork sessions

dispatch\_turn\_count: number

Number of Dispatch (background agent) turns completed

distinct\_connectors\_used\_count: number or null

Number of distinct connectors used in Cowork sessions. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

distinct\_session\_count: number or null

Number of distinct Cowork sessions. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

distinct\_skills\_used\_count: number or null

Number of distinct skills used in Cowork sessions. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

message\_count: number

Number of messages sent in Cowork sessions

skills\_used\_count: number

Total number of skill invocations in Cowork sessions

distinct\_plugins\_used\_count: optional number or null

Number of distinct plugins used in Cowork sessions. Null while Cowork plugin-use metrics are not enabled for this organization. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

edit\_tool\_count: optional number or null

Number of successful Edit tool calls in Cowork sessions. Null while the file-edit metrics are not enabled for this organization.

file\_edit\_count: optional number or null

Number of successful file-edit tool calls (Edit, MultiEdit, Write, NotebookEdit) in Cowork sessions. Null, never 0, while the file-edit metrics are not enabled for this organization.

multi\_edit\_tool\_count: optional number or null

Number of successful MultiEdit tool calls in Cowork sessions. Null while the file-edit metrics are not enabled for this organization.

notebook\_edit\_tool\_count: optional number or null

Number of successful NotebookEdit tool calls in Cowork sessions. Null while the file-edit metrics are not enabled for this organization.

plugins\_used\_count: optional number or null

Total number of plugin invocations in Cowork sessions. Null while Cowork plugin-use metrics are not enabled for this organization.

sessions\_with\_file\_edits\_count: optional number or null

Number of distinct Cowork sessions with at least one successful file-edit tool call. Null while the file-edit metrics are not enabled for this organization. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

write\_tool\_count: optional number or null

Number of successful Write tool calls in Cowork sessions. Null while the file-edit metrics are not enabled for this organization.

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

excel: [BetaAnalyticsOfficeProductMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { connectors\_used\_count, distinct\_connectors\_used\_count, distinct\_session\_count, 3 more }

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

outlook: [BetaAnalyticsOfficeProductMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { connectors\_used\_count, distinct\_connectors\_used\_count, distinct\_session\_count, 3 more }

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

powerpoint: [BetaAnalyticsOfficeProductMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { connectors\_used\_count, distinct\_connectors\_used\_count, distinct\_session\_count, 3 more }

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

word: [BetaAnalyticsOfficeProductMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { connectors\_used\_count, distinct\_connectors\_used\_count, distinct\_session\_count, 3 more }

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

claude\_code\_metrics: [BetaAnalyticsPluginClaudeCodeMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_plugin\_used\_count }

Claude Code activity metrics for a single plugin on a given day.

distinct\_session\_plugin\_used\_count: number or null

Number of distinct Claude Code sessions in which the plugin was invoked. Null on aggregated rows where a distinct count cannot be computed.



cowork\_metrics: [BetaAnalyticsPluginCoworkMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_plugin\_used\_count }

Cowork activity metrics for a single plugin on a given day.

distinct\_session\_plugin\_used\_count: number or null

Number of distinct Cowork sessions in which the plugin was invoked. Null on aggregated rows where a distinct count cannot be computed.

distinct\_user\_count: number

Number of distinct users with recorded install or invocation activity for the plugin on the requested day (install-only users count), or, in date-range mode, over the requested window — recomputed as an exact distinct count over the window's per-member daily rows, never a sum of per-day values.

install\_count: number or null

Number of distinct users who installed the plugin on the requested day, or, in date-range mode, over the requested window — recomputed as an exact distinct count over the window's per-member daily rows, never a sum of per-day values.

invocation\_count: number

Number of plugin invocations on the requested day

plugin\_name: string

Name of the plugin

plugin\_id: optional string or null

Stable plugin identifier when available (e.g. `serena@claude-plugins-official`). Null for third-party Claude Code plugins (redacted at the source) and Cowork slash commands that carry only a hashed id.

product: optional string or null

Product that produced this row's activity: one of `chat`, `claude_code`, `cowork`, or `office_agent` (the canonical Cost & Usage product naming; an `office_agent` row's per-surface breakdown is in its `office_metrics`). On `/plugins` only `cowork` and `claude_code` occur (the only surfaces with plugin attribution); on `/artifacts` only `chat`, `claude_code`, and `cowork` occur (the surfaces that create artifacts); `/apps/chat/projects` does not support the product dimension (a `product` entry in `group_by[]` or `filter[]` there is rejected). Present only when the request grouped by `product`.

rbac\_group\_id: optional string or null

Tagged RBAC group identifier (`rbac_group_...`), matching the spend-limits API spelling. Present only when the request grouped by `rbac_group_id`.

rbac\_group\_name: optional string or null

Resolved RBAC group display name, alongside `rbac_group_id` when name resolution is available. Null if the group has been deleted or its name could not be resolved; `rbac_group_id` remains the stable key.

user\_id: optional string or null

Tagged user identifier (e.g. `user_...`). Present only when the request grouped by `user_id`.

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

distinct\_user\_count: number

Number of distinct users who used the project on the requested day, or, in date-range mode, over the requested window — recomputed as an exact distinct count over the window's per-member daily rows, never a sum of per-day values.

message\_count: number

Number of messages sent in the project on the requested day

project\_id: string

Tagged project identifier (e.g. `claude_proj_...`)

project\_name: string

Name of the project



created\_at: optional string or null

Project creation timestamp in RFC 3339 format. Null if the project was deleted before attribution was recorded.

formatdate-time



created\_by: optional [BetaAnalyticsUser](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { type: "user", id, email\_address } or null

User who created the project. Null if the project was deleted before attribution was recorded, or if the creator's account no longer exists.



type: "user"

Object type. Always `user`.

defaultuser

id: string

Tagged user identifier (e.g. `user_...`)

email\_address: string

Email address of the user

distinct\_conversation\_count: optional number or null

Number of distinct conversations in the project. Null on aggregated rows where a distinct count cannot be computed.

product: optional string or null

Product that produced this row's activity: one of `chat`, `claude_code`, `cowork`, or `office_agent` (the canonical Cost & Usage product naming; an `office_agent` row's per-surface breakdown is in its `office_metrics`). On `/plugins` only `cowork` and `claude_code` occur (the only surfaces with plugin attribution); on `/artifacts` only `chat`, `claude_code`, and `cowork` occur (the surfaces that create artifacts); `/apps/chat/projects` does not support the product dimension (a `product` entry in `group_by[]` or `filter[]` there is rejected). Present only when the request grouped by `product`.

rbac\_group\_id: optional string or null

Tagged RBAC group identifier (`rbac_group_...`), matching the spend-limits API spelling. Present only when the request grouped by `rbac_group_id`.

rbac\_group\_name: optional string or null

Resolved RBAC group display name, alongside `rbac_group_id` when name resolution is available. Null if the group has been deleted or its name could not be resolved; `rbac_group_id` remains the stable key.

user\_id: optional string or null

Tagged user identifier (e.g. `user_...`). Present only when the request grouped by `user_id`.

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

assigned\_seat\_count: number or null

Number of seats currently assigned to members. Null when the response is scoped to an RBAC group — seat assignment is org-wide and has no per-group analogue.

cowork\_daily\_active\_user\_count: number

Number of users with Cowork activity on the requested day

cowork\_monthly\_active\_user\_count: number

Number of users with Cowork activity in the 30-day rolling window

cowork\_weekly\_active\_user\_count: number

Number of users with Cowork activity in the 7-day rolling window

daily\_active\_user\_count: number

Number of users with token consumption on the requested day

daily\_adoption\_rate: number or null

Percentage of assigned seats with activity on the requested day (`DAU / assigned_seat_count * 100`). Null when the response is scoped to an RBAC group.



ending\_at: string

End of the aggregation period (exclusive), UTC midnight in RFC 3339 format (e.g. `2026-01-16T00:00:00Z`).

formatdate-time

monthly\_active\_user\_count: number

Number of users with token consumption in the 30-day rolling window

monthly\_adoption\_rate: number or null

Percentage of assigned seats with activity in the 30-day rolling window (`MAU / assigned_seat_count * 100`). Null when the response is scoped to an RBAC group.

pending\_invite\_count: number or null

Number of pending invitations to join the organization. Null when the response is scoped to an RBAC group.



starting\_at: string

Start of the aggregation period (inclusive), UTC midnight in RFC 3339 format (e.g. `2026-01-15T00:00:00Z`).

formatdate-time

weekly\_active\_user\_count: number

Number of users with token consumption in the 7-day rolling window

weekly\_adoption\_rate: number or null

Percentage of assigned seats with activity in the 7-day rolling window (`WAU / assigned_seat_count * 100`). Null when the response is scoped to an RBAC group.

chat\_daily\_active\_user\_count: optional number or null

Number of users with claude.ai (chat) activity on the requested day. Omitted from the response while the per-product breakdown is not enabled for this organization.

chat\_monthly\_active\_user\_count: optional number or null

Number of users with claude.ai (chat) activity in the 30-day rolling window. Omitted from the response while the per-product breakdown is not enabled for this organization.

chat\_weekly\_active\_user\_count: optional number or null

Number of users with claude.ai (chat) activity in the 7-day rolling window. Omitted from the response while the per-product breakdown is not enabled for this organization.

claude\_code\_daily\_active\_user\_count: optional number or null

Number of users with Claude Code activity on the requested day. Omitted from the response while the per-product breakdown is not enabled for this organization.

claude\_code\_monthly\_active\_user\_count: optional number or null

Number of users with Claude Code activity in the 30-day rolling window. Omitted from the response while the per-product breakdown is not enabled for this organization.

claude\_code\_weekly\_active\_user\_count: optional number or null

Number of users with Claude Code activity in the 7-day rolling window. Omitted from the response while the per-product breakdown is not enabled for this organization.

claude\_design\_daily\_active\_user\_count: optional number or null

Number of users with Claude Design activity on the requested day. Omitted from the response while the per-product breakdown is not enabled for this organization.

claude\_design\_monthly\_active\_user\_count: optional number or null

Number of users with Claude Design activity in the 30-day rolling window. Omitted from the response while the per-product breakdown is not enabled for this organization.

claude\_design\_weekly\_active\_user\_count: optional number or null

Number of users with Claude Design activity in the 7-day rolling window. Omitted from the response while the per-product breakdown is not enabled for this organization.

office\_agent\_daily\_active\_user\_count: optional number or null

Number of users with Claude in Office activity on the requested day. Omitted from the response while the per-product breakdown is not enabled for this organization.

office\_agent\_monthly\_active\_user\_count: optional number or null

Number of users with Claude in Office activity in the 30-day rolling window. Omitted from the response while the per-product breakdown is not enabled for this organization.

office\_agent\_weekly\_active\_user\_count: optional number or null

Number of users with Claude in Office activity in the 7-day rolling window. Omitted from the response while the per-product breakdown is not enabled for this organization.

science\_daily\_active\_user\_count: optional number or null

Number of users with Claude Science activity on the requested day. Omitted from the response while the per-product breakdown is not enabled for this organization.

science\_entitled\_user\_count: optional number or null

Number of users with a Claude Science seat entitlement (per-seat RBAC) at the time of the daily snapshot. The funnel top; independent of the org-level Claude Science toggle. Null when the response is scoped to an RBAC group — entitlement is org-wide and has no per-group analogue. Omitted from the response while the per-product breakdown is not enabled for this organization.

science\_monthly\_active\_user\_count: optional number or null

Number of users with Claude Science activity in the 30-day rolling window. Omitted from the response while the per-product breakdown is not enabled for this organization.

science\_weekly\_active\_user\_count: optional number or null

Number of users with Claude Science activity in the 7-day rolling window. Omitted from the response while the per-product breakdown is not enabled for this organization.



BetaAnalyticsSkillActivity object{ chat\_metrics, claude\_code\_metrics, cowork\_metrics, 14 more }

Per-skill activity data for a given day.



chat\_metrics: [BetaAnalyticsSkillChatMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_conversation\_skill\_used\_count }

Claude.ai activity metrics for a single skill on a given day.

distinct\_conversation\_skill\_used\_count: number or null

Number of distinct conversations in which the skill was used. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



claude\_code\_metrics: [BetaAnalyticsSkillClaudeCodeMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_skill\_used\_count }

Claude Code activity metrics for a single skill on a given day.

distinct\_session\_skill\_used\_count: number or null

Number of distinct Claude Code sessions in which the skill was used. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



cowork\_metrics: [BetaAnalyticsSkillCoworkMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_skill\_used\_count }

Cowork activity metrics for a single skill on a given day.

distinct\_session\_skill\_used\_count: number or null

Number of distinct Cowork sessions in which the skill was used. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

distinct\_user\_count: number

Number of distinct users who used the skill on the requested day, or, in date-range mode, over the requested window — recomputed as an exact distinct count over the window's per-member daily rows, never a sum of per-day values. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted.



office\_metrics: [BetaAnalyticsSkillOfficeMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { excel, outlook, powerpoint, word }

Office Agent activity metrics for a single skill on a given day, broken out by Office product.

skill\_name: string

Name of the skill

attributed\_list\_price: optional string or null

List-price (rate-card) value of the member requests attributed to this skill, as a decimal string in the minor unit of `currency` (cents for USD), from Claude Code, Cowork, and Office Agent request-level attribution — the value of requests that involved the skill, not the skill's incremental cost. Unlike `estimated_overage_spend` this reflects usage value regardless of how it was funded — seat-covered usage counts — but it is undiscounted and does not tie to billed spend or the organization's spend reporting. claude.ai chat usage carries no request-level attribution and contributes nothing: the field is null on `chat` product rows and on `office_agent` product cuts dated before 2026-06-18 (the Office Agent attribution data-start), and on ungrouped rows it covers the Claude Code + Cowork + Office Agent share only (null when no attributable usage exists). Also null under the same conditions as `estimated_overage_spend` (spend reporting not enabled for this organization, `office_agent` product cuts before the 2026-06-18 data-start). "0" means attributable usage existed but none was attributed to this skill. Addable across days: date-range rollup mode returns the window's sum. On `group_by[]` and `filter[]` shapes both amounts can total below the ungrouped value for the same skill over the same date or range: spend attributed to a member–skill pair with no counted usage on that day is excluded from those cuts.

currency: optional string or null

Currency for this row's monetary fields (`estimated_overage_spend` and `attributed_list_price`), as an uppercase ISO-4217 code. Always "USD" when either amount is populated; null whenever both amounts are null.

enable\_count: optional number or null

Distinct accounts that enabled this skill on the requested day (claude.ai only — the skill analog of plugin `install_count`). The count is org-wide: null when enable reporting is not enabled for this organization, or when the request scopes to `user_id` / `rbac_group_id` / `product` via `group_by[]` or `filter[]` (an org-wide count would be misleading on per-cut rows). A distinct count, not an event count: summing across days double-counts members who enable the skill on more than one day, so it is also null in date-range rollup mode (`starting_date`/`ending_date`).

estimated\_overage\_spend: optional string or null

Estimated overage spend attributed to this skill, as a decimal string in the minor unit of `currency` (cents for USD; "1250" is $12.50, fractional cents possible) — an allocation of each member's daily post-discount, pre-credit metered overage spend (the same cost basis as the organization's spend reporting and the Cost & Usage API, so per-skill figures are directly comparable; spend with no skill attribution — including any member-day without skill invocations — is not represented, so skill rows sum to at most those totals) across the skills the member used. Overage only: usage covered by included seat allowances bills nothing and allocates $0 here — see `attributed_list_price` for the funding-independent usage-value companion. Claude Code, Cowork, and Office Agent spend use request-level skill attribution; claude.ai chat spend is approximated proportionally to skill-invoking messages. An estimate, not a billing number — and the cost of the requests/messages that involved the skill, not the skill's incremental cost (the same request would still have cost something without the skill active). "0" means no overage spend was attributed; null when spend reporting is not enabled for this organization, on `office_agent` product cuts dated before 2026-06-18 (the Office Agent attribution data-start). Addable across days: date-range rollup mode (`starting_date`/`ending_date`) returns the window's sum. With `group_by[]=user_id` each row carries the user's own attributed spend. On `group_by[]` and `filter[]` shapes both amounts can total below the ungrouped value for the same skill over the same date or range: spend attributed to a member–skill pair with no counted usage on that day is excluded from those cuts.

invocation\_count: optional number or null

Total number of times this skill was invoked on the requested day (the skill analog of plugin `invocation_count`). Unlike `distinct_user_count` — which answers '# of users' — this is the true '# of uses'. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Null when invocation reporting is not enabled for this organization. Sum across a date range for total uses in the window — date-range rollup mode (`starting_date`/`ending_date`) returns this sum directly.

product: optional string or null

Product that produced this row's activity: one of `chat`, `claude_code`, `cowork`, or `office_agent` (the canonical Cost & Usage product naming; an `office_agent` row's per-surface breakdown is in its `office_metrics`). On `/plugins` only `cowork` and `claude_code` occur (the only surfaces with plugin attribution); on `/artifacts` only `chat`, `claude_code`, and `cowork` occur (the surfaces that create artifacts); `/apps/chat/projects` does not support the product dimension (a `product` entry in `group_by[]` or `filter[]` there is rejected). Present only when the request grouped by `product`.

rbac\_group\_id: optional string or null

Tagged RBAC group identifier (`rbac_group_...`), matching the spend-limits API spelling. Present only when the request grouped by `rbac_group_id`.

rbac\_group\_name: optional string or null

Resolved RBAC group display name, alongside `rbac_group_id` when name resolution is available. Null if the group has been deleted or its name could not be resolved; `rbac_group_id` remains the stable key.



share\_status: optional "organization" or "private" or "public" or null

Skill share status (claude.ai only): one of `private`, `organization`, or `public`. Null for skills used only in Claude Code or Office (no per-skill share-status concept) and when share-status reporting is not yet available for the organization. Filterable via `filter[]=share_status:{value}`.

One of the following:

"organization"

"private"

"public"

skill\_display\_name: optional string or null

Human-readable display name for rows whose `skill_name` is an opaque skill id (user/organization skill types and plugin-delivered skills, whose user-defined names usage reports generally withhold). Organization-shared skills and skills delivered by the organization's own plugins (its plugin marketplaces and its library) resolve; plugin skill names are shown without their 'plugin:' prefix. The literal 'unknown' bucket row gets a fixed 'Unknown skill' label. For a member's own skill (private or personal-plugin) it is null, except when the skill's owner used it from Claude Code or Cowork in the requested period: then it shows the name that client reported at the time. Apart from that, the names of members' own skills are not disclosed to analytics-key holders. Also null for Anthropic-provided plugin skills (not resolved), for an organization skill or plugin whose name can no longer be found (for example, one since deleted), when `skill_name` is already a display name, or when display-name resolution is not enabled for this organization.

user\_id: optional string or null

Tagged user identifier (e.g. `user_...`). Present only when the request grouped by `user_id`.

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

excel: [BetaAnalyticsSkillOfficeProductMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_skill\_used\_count }

Office Agent activity metrics for a single skill on a given day within one Office product.

distinct\_session\_skill\_used\_count: number or null

Number of distinct Office Agent sessions in which the skill was used. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



outlook: [BetaAnalyticsSkillOfficeProductMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_skill\_used\_count }

Office Agent activity metrics for a single skill on a given day within one Office product.

distinct\_session\_skill\_used\_count: number or null

Number of distinct Office Agent sessions in which the skill was used. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



powerpoint: [BetaAnalyticsSkillOfficeProductMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_skill\_used\_count }

Office Agent activity metrics for a single skill on a given day within one Office product.

distinct\_session\_skill\_used\_count: number or null

Number of distinct Office Agent sessions in which the skill was used. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.



word: [BetaAnalyticsSkillOfficeProductMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_session\_skill\_used\_count }

Office Agent activity metrics for a single skill on a given day within one Office product.

distinct\_session\_skill\_used\_count: number or null

Number of distinct Office Agent sessions in which the skill was used. A skill counts as used only when it is explicitly activated — the model (or the user, via the skill's slash command) invokes it, reading its instructions into context as part of that activation. Skills that are merely installed or listed as available, or whose content reaches the context without an activation (preloaded, hook-injected, or read as a plain file), are not counted. Approximate (HLL, typical error <2%) in date-range mode. Null on aggregated rows where a distinct count cannot be computed.

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

edit\_tool: [BetaAnalyticsToolActionCounts](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { accepted\_count, rejected\_count }

Accepted/rejected counts for a single Claude Code tool type.

accepted\_count: number

Number of tool proposals accepted

rejected\_count: number

Number of tool proposals rejected



multi\_edit\_tool: [BetaAnalyticsToolActionCounts](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { accepted\_count, rejected\_count }

Accepted/rejected counts for a single Claude Code tool type.

accepted\_count: number

Number of tool proposals accepted

rejected\_count: number

Number of tool proposals rejected



notebook\_edit\_tool: [BetaAnalyticsToolActionCounts](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { accepted\_count, rejected\_count }

Accepted/rejected counts for a single Claude Code tool type.

accepted\_count: number

Number of tool proposals accepted

rejected\_count: number

Number of tool proposals rejected



write\_tool: [BetaAnalyticsToolActionCounts](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { accepted\_count, rejected\_count }

Accepted/rejected counts for a single Claude Code tool type.

accepted\_count: number

Number of tool proposals accepted

rejected\_count: number

Number of tool proposals rejected



BetaAnalyticsUsageBucketedResult object{ cache\_creation, cache\_read\_input\_tokens, claude\_tag\_category, 12 more }



cache\_creation: [BetaCacheCreation](https://platform.claude.com/docs/en/api/http/beta/messages) { ephemeral\_1h\_input\_tokens, ephemeral\_5m\_input\_tokens }

The number of input tokens for cache creation.



ephemeral\_1h\_input\_tokens: number

The number of input tokens used to create the 1 hour cache entry.

default0

minimum0



ephemeral\_5m\_input\_tokens: number

The number of input tokens used to create the 5 minute cache entry.

default0

minimum0

cache\_read\_input\_tokens: number

The number of input tokens read from the cache.



claude\_tag\_category: [BetaAnalyticsClaudeTagCategory](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Claude Tag (Claude in Slack) spend category: `engaged` (a person addressed Claude in a channel or thread), `proactive` (Claude responded without being addressed), `scheduled` (a scheduled routine ran), `monitoring` (Claude watching a channel it was asked to monitor), or `dm` (direct messages with Claude). Populated only when `claude_tag_category` is in `group_by[]`; null for usage that is not Claude Tag. Direct-message usage is billed to the individual user and is reported under that user's product, not under `claude-tag`. New categories may be added over time.

One of the following:

"dm"

"engaged"

"monitoring"

"proactive"

"scheduled"

claude\_tag\_user\_id: string or null

Slack user ID (for example `U0123ABCDEF`) of the member the Claude Tag (Claude in Slack) usage is attributed to, not a claude.ai user ID. Populated only when `claude_tag_user_id` is in `group_by[]`; null for usage that is not Claude Tag and for Claude Tag usage that is not attributed to a single user (for example `monitoring`, and `proactive` usage Claude initiated), so per-user rows can sum to less than the Claude Tag total. Cannot be combined with `group_by[]=rbac_group_id` or the `rbac_group_ids[]` filter.



context\_window: [BetaAnalyticsContextWindow](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Context-window pricing tier of the usage or cost. Null unless `context_window` is in `group_by[]`; it can also be null on grouped rows with no context-window tier, such as code execution.

One of the following:

"0-200k"

"200k-1M"



inference\_geo: "global" or "us" or null

Inference region of the usage or cost. Null unless `inference_geo` is in `group_by[]`; it can also be null on grouped rows where the region is not set (the rows that `inference_geos[]=not_available` matches).

One of the following:

"global"

"us"

model: string or null

Model that produced the usage or cost, as a model name in the form the `models[]` filter accepts (for example, `claude-opus-5`). Null unless `model` is in `group_by[]`; it can also be null on grouped rows whose usage or cost is not attributed to a specific model, such as code execution.

output\_tokens: number

The number of output tokens generated.

product: string or null

Product surface that produced the usage or cost. Null unless product is in `group_by[]`; it can also be null on grouped rows whose usage cannot be attributed to a known surface. Values include `chat`, `claude_code`, `cowork`, `office_agent`, `claude_in_chrome`, `claude_design`, and `claude-tag`. `claude-tag` is Claude Tag, the Claude product in Slack. Some unattributed usage is reported as "other".

rbac\_group\_id: string or null

RBAC group (team) the usage is attributed to, in the public tagged `rbac_group_...` spelling — the same spelling the activity resources use for this key, so the same team has one id across resources and it round-trips as an `rbac_group_ids[]` filter value. Populated only when `rbac_group_id` is in `group_by[]`. Any-membership semantics: a user in several groups contributes their full usage to each of those groups' rows, so the named-group rows overlap and their sum can exceed the org total. A null value is the single unassigned row: users in no group on that (UTC) day. For the true org total, run the same query without `group_by[]`.

requests: number or null

Number of API requests in this row's scope. For sandbox / code-execution events, this counts execution spans rather than HTTP requests (these rows surface with `product: null`).



server\_tool\_use: [BetaAnalyticsServerToolUse](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { web\_search\_requests }

Server-side tool usage metrics.

web\_search\_requests: number

The number of web search requests made.

slack\_channel\_id: string or null

Slack channel the usage originated from. Populated only when `slack_channel_id` is in `group_by[]`; null for usage outside Slack (and for rows recorded before channel attribution was enabled).



speed: "fast" or "standard" or null

Inference speed mode of the usage or cost: `fast` or `standard`. Null unless `speed` is in `group_by[]`.

One of the following:

"fast"

"standard"

uncached\_input\_tokens: number

The number of uncached input tokens processed.



BetaAnalyticsUsageReportTimeBucket object{ ending\_at, results, starting\_at }



ending\_at: string

End of the time bucket (exclusive) in RFC 3339 format.

formatdate-time



results: array of [BetaAnalyticsUsageBucketedResult](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { cache\_creation, cache\_read\_input\_tokens, claude\_tag\_category, 12 more }

Rows for this time bucket. Empty when the bucket has no data; otherwise a single combined row when `group_by[]` is omitted, or one row per group (subject to the per-bucket group cap described on the `group_by[]` parameter).



cache\_creation: [BetaCacheCreation](https://platform.claude.com/docs/en/api/http/beta/messages) { ephemeral\_1h\_input\_tokens, ephemeral\_5m\_input\_tokens }

The number of input tokens for cache creation.



ephemeral\_1h\_input\_tokens: number

The number of input tokens used to create the 1 hour cache entry.

default0

minimum0



ephemeral\_5m\_input\_tokens: number

The number of input tokens used to create the 5 minute cache entry.

default0

minimum0

cache\_read\_input\_tokens: number

The number of input tokens read from the cache.



claude\_tag\_category: [BetaAnalyticsClaudeTagCategory](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Claude Tag (Claude in Slack) spend category: `engaged` (a person addressed Claude in a channel or thread), `proactive` (Claude responded without being addressed), `scheduled` (a scheduled routine ran), `monitoring` (Claude watching a channel it was asked to monitor), or `dm` (direct messages with Claude). Populated only when `claude_tag_category` is in `group_by[]`; null for usage that is not Claude Tag. Direct-message usage is billed to the individual user and is reported under that user's product, not under `claude-tag`. New categories may be added over time.

One of the following:

"dm"

"engaged"

"monitoring"

"proactive"

"scheduled"

claude\_tag\_user\_id: string or null

Slack user ID (for example `U0123ABCDEF`) of the member the Claude Tag (Claude in Slack) usage is attributed to, not a claude.ai user ID. Populated only when `claude_tag_user_id` is in `group_by[]`; null for usage that is not Claude Tag and for Claude Tag usage that is not attributed to a single user (for example `monitoring`, and `proactive` usage Claude initiated), so per-user rows can sum to less than the Claude Tag total. Cannot be combined with `group_by[]=rbac_group_id` or the `rbac_group_ids[]` filter.



context\_window: [BetaAnalyticsContextWindow](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Context-window pricing tier of the usage or cost. Null unless `context_window` is in `group_by[]`; it can also be null on grouped rows with no context-window tier, such as code execution.

One of the following:

"0-200k"

"200k-1M"



inference\_geo: "global" or "us" or null

Inference region of the usage or cost. Null unless `inference_geo` is in `group_by[]`; it can also be null on grouped rows where the region is not set (the rows that `inference_geos[]=not_available` matches).

One of the following:

"global"

"us"

model: string or null

Model that produced the usage or cost, as a model name in the form the `models[]` filter accepts (for example, `claude-opus-5`). Null unless `model` is in `group_by[]`; it can also be null on grouped rows whose usage or cost is not attributed to a specific model, such as code execution.

output\_tokens: number

The number of output tokens generated.

product: string or null

Product surface that produced the usage or cost. Null unless product is in `group_by[]`; it can also be null on grouped rows whose usage cannot be attributed to a known surface. Values include `chat`, `claude_code`, `cowork`, `office_agent`, `claude_in_chrome`, `claude_design`, and `claude-tag`. `claude-tag` is Claude Tag, the Claude product in Slack. Some unattributed usage is reported as "other".

rbac\_group\_id: string or null

RBAC group (team) the usage is attributed to, in the public tagged `rbac_group_...` spelling — the same spelling the activity resources use for this key, so the same team has one id across resources and it round-trips as an `rbac_group_ids[]` filter value. Populated only when `rbac_group_id` is in `group_by[]`. Any-membership semantics: a user in several groups contributes their full usage to each of those groups' rows, so the named-group rows overlap and their sum can exceed the org total. A null value is the single unassigned row: users in no group on that (UTC) day. For the true org total, run the same query without `group_by[]`.

requests: number or null

Number of API requests in this row's scope. For sandbox / code-execution events, this counts execution spans rather than HTTP requests (these rows surface with `product: null`).



server\_tool\_use: [BetaAnalyticsServerToolUse](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { web\_search\_requests }

Server-side tool usage metrics.

web\_search\_requests: number

The number of web search requests made.

slack\_channel\_id: string or null

Slack channel the usage originated from. Populated only when `slack_channel_id` is in `group_by[]`; null for usage outside Slack (and for rows recorded before channel attribution was enabled).



speed: "fast" or "standard" or null

Inference speed mode of the usage or cost: `fast` or `standard`. Null unless `speed` is in `group_by[]`.

One of the following:

"fast"

"standard"

uncached\_input\_tokens: number

The number of uncached input tokens processed.



starting\_at: string

Start of the time bucket (inclusive) in RFC 3339 format.

formatdate-time



BetaAnalyticsUsageUsersItem object{ actor, cache\_creation, cache\_read\_input\_tokens, 16 more }



actor: [BetaAnalyticsUserActor](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { type: "user\_actor", deleted, email, 3 more }

The user this row's usage or cost is attributed to. Always a `user_actor`.

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



cache\_creation: [BetaCacheCreation](https://platform.claude.com/docs/en/api/http/beta/messages) { ephemeral\_1h\_input\_tokens, ephemeral\_5m\_input\_tokens }

The number of input tokens for cache creation.



ephemeral\_1h\_input\_tokens: number

The number of input tokens used to create the 1 hour cache entry.

default0

minimum0



ephemeral\_5m\_input\_tokens: number

The number of input tokens used to create the 5 minute cache entry.

default0

minimum0

cache\_read\_input\_tokens: number

The number of input tokens read from the cache.



claude\_tag\_category: [BetaAnalyticsClaudeTagCategory](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Claude Tag (Claude in Slack) spend category: `engaged` (a person addressed Claude in a channel or thread), `proactive` (Claude responded without being addressed), `scheduled` (a scheduled routine ran), `monitoring` (Claude watching a channel it was asked to monitor), or `dm` (direct messages with Claude). Populated only when `claude_tag_category` is in `group_by[]`; null for usage that is not Claude Tag. Direct-message usage is billed to the individual user and is reported under that user's product, not under `claude-tag`. New categories may be added over time.

One of the following:

"dm"

"engaged"

"monitoring"

"proactive"

"scheduled"

claude\_tag\_user\_id: string or null

Slack user ID (for example `U0123ABCDEF`) of the member the Claude Tag (Claude in Slack) usage is attributed to, not a claude.ai user ID. Populated only when `claude_tag_user_id` is in `group_by[]`; null for usage that is not Claude Tag and for Claude Tag usage that is not attributed to a single user (for example `monitoring`, and `proactive` usage Claude initiated), so per-user rows can sum to less than the Claude Tag total. Cannot be combined with `group_by[]=rbac_group_id` or the `rbac_group_ids[]` filter.



context\_window: [BetaAnalyticsContextWindow](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) or null

Context-window pricing tier of the usage or cost. Null unless `context_window` is in `group_by[]`; it can also be null on grouped rows with no context-window tier, such as code execution.

One of the following:

"0-200k"

"200k-1M"



ending\_at: string or null

End of the row's UTC time bucket (exclusive), as an RFC 3339 timestamp; equal to `starting_at` plus one `bucket_width`. Null unless `bucket_width` is set.

formatdate-time



inference\_geo: "global" or "us" or null

Inference region of the usage or cost. Null unless `inference_geo` is in `group_by[]`; it can also be null on grouped rows where the region is not set (the rows that `inference_geos[]=not_available` matches).

One of the following:

"global"

"us"

model: string or null

Model that produced the usage or cost, as a model name in the form the `models[]` filter accepts (for example, `claude-opus-5`). Null unless `model` is in `group_by[]`; it can also be null on grouped rows whose usage or cost is not attributed to a specific model, such as code execution.

output\_tokens: number

The number of output tokens generated.

product: string or null

Product surface that produced the usage or cost. Null unless product is in `group_by[]`; it can also be null on grouped rows whose usage cannot be attributed to a known surface. Values include `chat`, `claude_code`, `cowork`, `office_agent`, `claude_in_chrome`, `claude_design`, and `claude-tag`. `claude-tag` is Claude Tag, the Claude product in Slack. Some unattributed usage is reported as "other".

rbac\_group\_id: string or null

RBAC group (team) the usage is attributed to, in the public tagged `rbac_group_...` spelling — the same spelling the activity resources use for this key, so the same team has one id across resources and it round-trips as an `rbac_group_ids[]` filter value. Populated only when `rbac_group_id` is in `group_by[]`. Any-membership semantics: a user in several groups contributes their full usage to each of those groups' rows, so the named-group rows overlap and their sum can exceed the org total. A null value is the single unassigned row: users in no group on that (UTC) day. For the true org total, run the same query without `group_by[]`.

requests: number or null

Number of API requests in this row's scope. For sandbox / code-execution events, this counts execution spans rather than HTTP requests (these rows surface with `product: null`).



server\_tool\_use: [BetaAnalyticsServerToolUse](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { web\_search\_requests }

Server-side tool usage metrics.

web\_search\_requests: number

The number of web search requests made.

slack\_channel\_id: string or null

Slack channel the usage originated from. Populated only when `slack_channel_id` is in `group_by[]`; null for usage outside Slack (and for rows recorded before channel attribution was enabled).



speed: "fast" or "standard" or null

Inference speed mode of the usage or cost: `fast` or `standard`. Null unless `speed` is in `group_by[]`.

One of the following:

"fast"

"standard"



starting\_at: string or null

Start of the row's UTC time bucket (inclusive), as an RFC 3339 timestamp. Null unless `bucket_width` is set; without `bucket_width`, each row aggregates the full requested range.

formatdate-time

total\_tokens: number

Total token count across all token types. This is the value the default `order_by` (`total_tokens`) sorts on.

uncached\_input\_tokens: number

The number of uncached input tokens processed.

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

chat\_metrics: [BetaAnalyticsChatMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { connectors\_used\_count, distinct\_artifacts\_created\_count, distinct\_connectors\_used\_count, 9 more }

Claude.ai activity metrics for a single user on a given day.



claude\_code\_metrics: [BetaAnalyticsClaudeCodeMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { core\_metrics, tool\_actions }

Claude Code activity metrics for a single user on a given day.



cowork\_metrics: [BetaAnalyticsCoworkMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { action\_count, artifacts\_created\_count, connectors\_used\_count, 14 more }

Cowork activity metrics for a single user on a given day.



design\_metrics: [BetaAnalyticsDesignMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { distinct\_projects\_created\_count, distinct\_projects\_used\_count, distinct\_session\_count, message\_count }

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

office\_metrics: [BetaAnalyticsOfficeMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { excel, outlook, powerpoint, word }

Office Agent activity metrics for a single user on a given day, broken out by Office product.



science\_metrics: [BetaAnalyticsScienceMetrics](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { delegation\_count, distinct\_session\_count, message\_count, 2 more }

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

web\_search\_count: number

Number of web searches performed

distinct\_user\_count: optional number or null

Number of distinct active users represented by this row. Only set for grouped rollups (`group_by[]`); null for per-user rows. In date-range mode, recomputed as an exact distinct count of the group's active members over the requested window, never a sum of per-day values.



last\_activity\_date: optional string or null

Most recent UTC day (YYYY-MM-DD) on which the user had any counted activity, within the requested window: equal to the requested `date` in single-day mode, and to the latest active day from `starting_date` (inclusive) to `ending_date` (exclusive) in date-range rollup mode — never a day earlier than the window start. On filtered requests (`filter[]`) only days matching the filter count: with `filter[]=rbac_group_id:{id}` it is the last day the user was active while a member of that group, consistent with the row's other metrics. On grouped (`group_by[]`) rows it is the latest day any member of the group was active (the requested `date` in single-day mode). Omitted from the response while last-activity reporting is not enabled for this organization.

formatdate

rbac\_group\_id: optional string or null

Tagged RBAC group identifier (`rbac_group_...`), matching the spend-limits API spelling. Present only when the request grouped by `rbac_group_id`.

rbac\_group\_name: optional string or null

Resolved RBAC group display name, alongside `rbac_group_id` when name resolution is available. Null if the group has been deleted or its name could not be resolved; `rbac_group_id` remains the stable key.



user: optional [BetaAnalyticsUser](https://platform.claude.com/docs/en/api/http/beta/organization/analytics) { type: "user", id, email\_address } or null

The user this row describes. Null on rows aggregated across users.



type: "user"

Object type. Always `user`.

defaultuser

id: string

Tagged user identifier (e.g. `user_...`)

email\_address: string

Email address of the user

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
