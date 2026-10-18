---
title: Admin API
url: https://platform.claude.com/docs/en/manage-claude/admin-api
description: Manage organization members, workspaces, invites, and API keys programmatically with the Admin API, using an Admin API key, an `org:admin` OAuth token, or a personal or service account key.
---

<Tip>
  **The Admin API is unavailable for individual accounts.** To collaborate with teammates and add members, set up your organization on the [Organization](https://platform.claude.com/settings/organization) page (`platform.claude.com/settings/organization`) in the Claude Console.
</Tip>

The [Admin API](https://platform.claude.com/docs/en/api/organization?sdk_languages=curl) lets you manage your organization's members, workspaces, invites, and API keys programmatically instead of by hand in the [Claude Console](https://platform.claude.com/).

<Check>
  **The Admin API requires special access**

  The Admin API accepts three credentials:

  * An **Admin API key** (starting with `sk-ant-admin...`) sent in the `x-api-key` header. Only organization members with the admin role can provision one. See [Create an Admin API key](https://platform.claude.com/docs/en/manage-claude/admin-api-keys?sdk_languages=curl).
  * An **OAuth bearer token** with the `org:admin` scope sent in the `authorization: Bearer` header. Only members with the admin, owner, or primary owner role can obtain one. See [Obtain an OAuth bearer token](https://platform.claude.com/docs/en/manage-claude/admin-api?sdk_languages=curl#oauth-bearer-token).
  * A **personal key** or **service account key** that isn't scoped to a specific workspace, sent in the `x-api-key` header. The key has the same permissions as the linked account. See [Key types](https://platform.claude.com/docs/en/manage-claude/authentication?sdk_languages=curl#key-types).
</Check>

<Note>
  **Claude Enterprise:** Claude Enterprise (claude.ai) organizations call the Admin API with a scoped API key created in claude.ai. From this page, only the members and invites endpoints apply to them. They also get Enterprise-only endpoints: group and custom-role reads, and [spend limits](https://platform.claude.com/docs/en/manage-claude/spend-limits-api?sdk_languages=curl). See [User management](https://platform.claude.com/docs/en/manage-claude/user-management?sdk_languages=curl).
</Note>

<Note>
  **Claude Platform on AWS:** Only the workspace endpoints (create, get, list, update, and archive on `/v1/organizations/workspaces`), the external key endpoints (register, get, list, update, and delete on `/v1/organizations/external_keys`, for [CMEK](https://platform.claude.com/docs/en/manage-claude/cmek-claude-platform-on-aws?sdk_languages=curl); there is no validate endpoint, because keys are validated when attached to a workspace), and the [telemetry destination endpoints](https://platform.claude.com/docs/en/api/claude-platform-on-aws-iam-actions?sdk_languages=curl#telemetry-destinations) are available on Claude Platform on AWS. Organization members, workspace members, invites, API keys, and the usage, cost, and rate limit reports aren't. See [Claude Platform on AWS](https://platform.claude.com/docs/en/build-with-claude/claude-platform-on-aws?sdk_languages=curl).
</Note>

## Authentication

Authenticate with any of the three credentials. An Admin API key covers most endpoints. The service-account, federation-issuer, and federation-rule endpoints accept only an `org:admin` OAuth token. Send a personal key or service account key in the `x-api-key` header, as you would an Admin API key. The following examples call the [organization info endpoint](https://platform.claude.com/docs/en/manage-claude/admin-api?sdk_languages=curl#accessing-organization-info) with an OAuth token and with an Admin API key.

The Python, TypeScript, C#, Go, Java, PHP, and Ruby SDKs expose the endpoints on this page under `client.organization`, and the `ant` CLI under `ant organization`. The examples on this page use the default client, which reads an Admin API key from `ANTHROPIC_API_KEY` or an OAuth bearer token from `ANTHROPIC_AUTH_TOKEN`. SDK list methods in Python, TypeScript, C#, Go, and Java return an iterator that fetches more pages on demand, so `limit` sets the page size, not the total. The PHP, Ruby, and curl examples return one page. In the CLI, `--limit` caps the results on the member, invite, workspace, workspace-member, and API-key lists. For each endpoint's parameters and responses, see the [Admin API reference](https://platform.claude.com/docs/en/api/organization?sdk_languages=curl).

### OAuth bearer token

Log in with the [`ant` CLI](https://platform.claude.com/docs/en/cli-sdks-libraries/cli/quickstart?sdk_languages=curl) under a dedicated profile with the `org:admin` scope (see [Admin access](https://platform.claude.com/docs/en/cli-sdks-libraries/cli/authentication?sdk_languages=curl#admin-access)), then export the bearer token. `--profile admin` stores the `org:admin` credential under its own profile and makes it the CLI's active profile. The exported variable applies to every SDK and CLI call in that shell. Use a shell you reserve for administration, unset the variable when you're done, and switch the CLI back with `ant profile activate default`:

```bash CLI
ant auth login --profile admin --scope "org:admin"
export ANTHROPIC_AUTH_TOKEN=$(ant auth print-credentials --profile admin --access-token)
```

Interactive tokens are short-lived. If requests start returning 401, re-run the `export` command to refresh the token.

The SDKs and the `ant` CLI read `ANTHROPIC_AUTH_TOKEN` automatically. Leave `ANTHROPIC_API_KEY` unset in the same shell so they send the bearer token. Automated workloads skip the login: they authenticate through workload identity federation, and the SDKs and CLI perform the token exchange from the federation environment variables. See [Bootstrap a workload to manage WIF](https://platform.claude.com/docs/en/manage-claude/wif-admin-api?sdk_languages=curl#bootstrap-a-workload-to-manage-wif).

Call the Admin API with the exported token:

<CodeGroup>
  ```bash cURL
  curl --fail-with-body -sS "https://api.anthropic.com/v1/organizations/me" \
    -H "authorization: Bearer $ANTHROPIC_AUTH_TOKEN" \
    -H "anthropic-version: 2023-06-01"
  ```
</CodeGroup>

An `org:admin` token grants access to the whole organization, regardless of the workspace the underlying profile or [federation rule](https://platform.claude.com/docs/en/manage-claude/admin-api?sdk_languages=curl#federation-rules) is bound to.

For CI and other non-interactive workloads, mint the token with Workload Identity Federation instead of logging in interactively. See [Manage WIF with the Admin API](https://platform.claude.com/docs/en/manage-claude/wif-admin-api?sdk_languages=curl#workload-ci-and-automation).

### Admin API key

To create an Admin API key for your organization type, see [Create an Admin API key](https://platform.claude.com/docs/en/manage-claude/admin-api-keys?sdk_languages=curl).

<CodeGroup>
  ```bash cURL
  curl --fail-with-body -sS "https://api.anthropic.com/v1/organizations/me" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01"
  ```
</CodeGroup>

## How the Admin API works

Authenticate with any credential from [Authentication](https://platform.claude.com/docs/en/manage-claude/admin-api?sdk_languages=curl#authentication), then manage the following resources:

* Organization members and their roles
* Organization invites
* Workspaces and their members
* API keys
* Service accounts, federation issuers, and federation rules (`org:admin` OAuth token only)

Common uses include automating onboarding and offboarding, managing workspace access, and auditing API keys.

## Organization roles and permissions

There are five organization-level roles. For details, see [API Console roles and permissions](https://support.claude.com/en/articles/10186004-api-console-roles-and-permissions).

| Role               | Permissions                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| user               | Can use playground                                                             |
| claude\_code\_user | Can use playground and [Claude Code](https://code.claude.com/docs/en/overview) |
| developer          | Can use playground and manage API keys                                         |
| billing            | Can use playground and manage billing details                                  |
| admin              | Can do all of the preceding, plus manage users                                 |

Organization owners and primary owners have all admin permissions and can also manage admins. All references to the admin role on this page also apply to owners and primary owners.

## Key concepts

### Organization members

List [organization members](https://platform.claude.com/docs/en/api/organization/users/retrieve?sdk_languages=curl), update their roles, and remove them.

List the members of your organization:

<CodeGroup>
  ```bash cURL
  curl "https://api.anthropic.com/v1/organizations/users?limit=10" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01"
  ```
</CodeGroup>

Update a member's role:

<CodeGroup>
  ```bash cURL
  curl "https://api.anthropic.com/v1/organizations/users/user_01XyDMpzjS89pFZXqSFUBDr6" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "content-type: application/json" \
    -d '{"role": "developer"}'
  ```
</CodeGroup>

Remove a member from the organization:

<CodeGroup>
  ```bash cURL
  curl -X DELETE "https://api.anthropic.com/v1/organizations/users/user_01XyDMpzjS89pFZXqSFUBDr6" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01"
  ```
</CodeGroup>

### Organization invites

Invite users to your organization and manage pending [invites](https://platform.claude.com/docs/en/api/organization/invites/retrieve?sdk_languages=curl).

Invite a user to your organization:

<CodeGroup>
  ```bash cURL
  curl "https://api.anthropic.com/v1/organizations/invites" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "content-type: application/json" \
    -d '{
      "email": "user@example.com",
      "role": "developer"
    }'
  ```
</CodeGroup>

List pending invites:

<CodeGroup>
  ```bash cURL
  curl "https://api.anthropic.com/v1/organizations/invites?limit=10" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01"
  ```
</CodeGroup>

Delete an invite:

<CodeGroup>
  ```bash cURL
  curl -X DELETE "https://api.anthropic.com/v1/organizations/invites/invite_015gWxHNr6h6TdRPZTmuCGnn" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01"
  ```
</CodeGroup>

### Workspaces

See [Workspaces](https://platform.claude.com/docs/en/manage-claude/workspaces?sdk_languages=curl) for Console and API examples.

### Workspace members

Manage [user access to specific workspaces](https://platform.claude.com/docs/en/api/organization/workspaces/members/retrieve?sdk_languages=curl):

Add a member to a workspace:

<CodeGroup>
  ```bash cURL
  curl "https://api.anthropic.com/v1/organizations/workspaces/wrkspc_01JwQvzr7rXLA5AGx3HKfFUJ/members" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "content-type: application/json" \
    -d '{
      "user_id": "user_01XyDMpzjS89pFZXqSFUBDr6",
      "workspace_role": "workspace_developer"
    }'
  ```
</CodeGroup>

List the members of a workspace:

<CodeGroup>
  ```bash cURL
  curl "https://api.anthropic.com/v1/organizations/workspaces/wrkspc_01JwQvzr7rXLA5AGx3HKfFUJ/members?limit=10" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01"
  ```
</CodeGroup>

Update a workspace member's role:

<CodeGroup>
  ```bash cURL
  curl "https://api.anthropic.com/v1/organizations/workspaces/wrkspc_01JwQvzr7rXLA5AGx3HKfFUJ/members/user_01XyDMpzjS89pFZXqSFUBDr6" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "content-type: application/json" \
    -d '{"workspace_role": "workspace_admin"}'
  ```
</CodeGroup>

Remove a member from a workspace:

<CodeGroup>
  ```bash cURL
  curl -X DELETE "https://api.anthropic.com/v1/organizations/workspaces/wrkspc_01JwQvzr7rXLA5AGx3HKfFUJ/members/user_01XyDMpzjS89pFZXqSFUBDr6" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01"
  ```
</CodeGroup>

### API keys

Monitor and manage [API keys](https://platform.claude.com/docs/en/api/organization/api_keys/list?sdk_languages=curl). Each key in the response includes its `expires_at` timestamp (`null` for keys without an [expiration](https://platform.claude.com/docs/en/manage-claude/authentication?sdk_languages=curl#key-expiration)) and `principal`, the identity it acts as (see [Key types](https://platform.claude.com/docs/en/manage-claude/authentication?sdk_languages=curl#key-types)). For a personal key, `principal` is `{"type": "user_actor", "user_id": "user_..."}`; for a service account key, `{"type": "service_account_actor", "service_account_id": "svac_..."}`; and for a workspace key, `null`. Each key also has a `scope` object: `{"type": "workspace", "workspace_id": "wrkspc_..."}` for a key bound to one workspace, or `{"type": "organization"}` for a key that can work across any workspace the account has access to. The top-level `workspace_id` field is deprecated and is `null` both for keys bound to the Default Workspace and for keys without a workspace scope; use `scope` to tell them apart. Filtering the list by `workspace_id` with the Default Workspace's ID returns only keys bound to the Default Workspace; keys without a workspace scope aren't returned under any `workspace_id` filter.

List the active API keys in a workspace:

<CodeGroup>
  ```bash cURL
  curl "https://api.anthropic.com/v1/organizations/api_keys?limit=10&status=active&workspace_id=wrkspc_01JwQvzr7rXLA5AGx3HKfFUJ" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01"
  ```
</CodeGroup>

Rename or deactivate an API key:

<CodeGroup>
  ```bash cURL
  curl "https://api.anthropic.com/v1/organizations/api_keys/apikey_01Rj2N8SVvo6BePZj99NhmiT" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "content-type: application/json" \
    -d '{
      "status": "inactive",
      "name": "New Key Name"
    }'
  ```
</CodeGroup>

### Service accounts

Create and manage service accounts (`svac_...`), the non-human identities that [service account keys](https://platform.claude.com/docs/en/manage-claude/authentication?sdk_languages=curl#key-types) and [Workload Identity Federation](https://platform.claude.com/docs/en/manage-claude/workload-identity-federation?sdk_languages=curl) tokens act as. These endpoints, like the federation-issuer and federation-rule endpoints, require an `org:admin` OAuth token. See [Manage WIF with the Admin API](https://platform.claude.com/docs/en/manage-claude/wif-admin-api?sdk_languages=curl#service-accounts).

### Federation issuers

Register the OIDC identity providers (`fdis_...`) whose tokens may assert workload identity for your organization. See [Manage WIF with the Admin API](https://platform.claude.com/docs/en/manage-claude/wif-admin-api?sdk_languages=curl#federation-issuers).

### Federation rules

Manage the rules (`fdrl_...`) that map issuer tokens to service accounts and scopes. See [Manage WIF with the Admin API](https://platform.claude.com/docs/en/manage-claude/wif-admin-api?sdk_languages=curl#federation-rules).

## Accessing organization info

The `/v1/organizations/me` endpoint returns the organization that your credential belongs to:

<CodeGroup>
  ```bash cURL
  curl "https://api.anthropic.com/v1/organizations/me" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01"
  ```
</CodeGroup>

```json
{
  "id": "12345678-1234-5678-1234-567812345678",
  "type": "organization",
  "name": "Organization Name"
}
```

For parameter details and response schemas, see the [Organization Info API reference](https://platform.claude.com/docs/en/api/organization/retrieve?sdk_languages=curl).

## Usage and cost reports

Track your organization's usage and costs with the [Usage and Cost API](https://platform.claude.com/docs/en/manage-claude/usage-cost-api?sdk_languages=curl).

## Claude Code analytics

Monitor developer productivity and Claude Code adoption with the [Claude Code Analytics API](https://platform.claude.com/docs/en/manage-claude/claude-code-analytics-api?sdk_languages=curl).

## Rate limits

Read the rate limits configured for your organization and its workspaces with the [Rate Limits API](https://platform.claude.com/docs/en/manage-claude/rate-limits-api?sdk_languages=curl).

## Compliance API

Retrieve audit and activity data for your organization with the [Compliance API](https://platform.claude.com/docs/en/manage-claude/compliance-api?sdk_languages=curl). Admin API keys can read only the Activity Feed. For full access, see [Set up the Compliance API](https://platform.claude.com/docs/en/manage-claude/compliance-api-access?sdk_languages=curl).

## Best practices

* Use meaningful names and descriptions for workspaces and API keys
* Handle errors from failed operations
* Regularly audit member roles and permissions
* Clean up unused workspaces and expired invites
* Monitor API key usage, audit each key's [`expires_at`](https://platform.claude.com/docs/en/manage-claude/authentication?sdk_languages=curl#key-expiration), and rotate keys periodically

## FAQ

<AccordionGroup>
  <Accordion title="What permissions are needed to use the Admin API?">
    The Admin API accepts an Admin API key (starting with `sk-ant-admin`), an OAuth bearer token with the `org:admin` scope, or a personal key or service account key that isn't scoped to a specific workspace. Only organization members with the admin role can provision Admin API keys, and only members with the admin, owner, or primary owner role can obtain `org:admin` tokens. A personal key or service account key has the same permissions as the linked account. See [Authentication](https://platform.claude.com/docs/en/manage-claude/admin-api?sdk_languages=curl#authentication).
  </Accordion>

  <Accordion title="Can I create new API keys through the Admin API?">
    No. You create API keys in the Claude Console. The Admin API can only read, rename, and change the status of existing keys.
  </Accordion>

  <Accordion title="What happens to API keys when removing a user?">
    Behavior depends on the [key type](https://platform.claude.com/docs/en/manage-claude/authentication?sdk_languages=curl#key-types).

    Personal keys stop working when their user is removed from the organization. Service account keys stop working if their service account is archived, but continue to work even if the user that created them is removed. Workspace API keys continue to work. In the [Claude Code workspace](https://platform.claude.com/docs/en/manage-claude/workspaces?sdk_languages=curl#claude-code-workspace), each key is bound to the member who created it and stops working when that member is removed.
  </Accordion>

  <Accordion title="Can organization admins be removed through the API?">
    No. The API can't remove members with the admin role.
  </Accordion>

  <Accordion title="How long do organization invites last?">
    Invites expire after 21 days. The expiration period isn't configurable.
  </Accordion>
</AccordionGroup>

For workspace-specific questions, see the [Workspaces FAQ](https://platform.claude.com/docs/en/manage-claude/workspaces?sdk_languages=curl#faq).
