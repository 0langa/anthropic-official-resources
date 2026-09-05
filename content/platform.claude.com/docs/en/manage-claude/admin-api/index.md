---
title: Admin API
url: https://platform.claude.com/docs/en/manage-claude/admin-api
description: Manage organization members, workspaces, invites, and API keys programmatically with the Admin API, using an Admin API key, an `org:admin` OAuth token, or a personal or service account key.
---

<Tip>
  **The Admin API is unavailable for individual accounts.** To collaborate with teammates and add members, set up your organization in **Console → Settings → Organization**.
</Tip>

The [Admin API](https://platform.claude.com/docs/en/api/admin) lets you manage your organization's members, workspaces, invites, and API keys programmatically instead of by hand in the [Claude Console](https://platform.claude.com/).

<Check>
  **The Admin API requires special access**

  The Admin API accepts three credentials:

  * An **Admin API key** (starting with `sk-ant-admin...`) sent in the `x-api-key` header. Only organization members with the admin role can provision one. See [Create an Admin API key](https://platform.claude.com/docs/en/manage-claude/admin-api-keys).
  * An **OAuth bearer token** with the `org:admin` scope sent in the `authorization: Bearer` header. Only members with the admin, owner, or primary owner role can obtain one. See [Obtain an OAuth bearer token](https://platform.claude.com/docs/en/manage-claude/admin-api#oauth-bearer-token).
  * A **personal key** or **service account key** that isn't scoped to a specific workspace, sent in the `x-api-key` header. The key has the same permissions as the linked account. See [Key types](https://platform.claude.com/docs/en/manage-claude/authentication#key-types).
</Check>

<Note>
  **Claude Enterprise:** Claude Enterprise (claude.ai) organizations call the Admin API with a scoped API key created in claude.ai. From this page, only the members and invites endpoints apply to them. They also get Enterprise-only endpoints: group and custom-role reads, and [spend limits](https://platform.claude.com/docs/en/manage-claude/spend-limits-api). See [User management](https://platform.claude.com/docs/en/manage-claude/user-management).
</Note>

<Note>
  **Claude Platform on AWS:** Only the workspace endpoints (create, get, list, update, and archive on `/v1/organizations/workspaces`) and the external key endpoints (register, get, list, update, and delete on `/v1/organizations/external_keys`, for [CMEK](https://platform.claude.com/docs/en/manage-claude/cmek-aws-kms#claude-platform-on-aws); there is no validate endpoint, because keys are validated when attached to a workspace) are available on Claude Platform on AWS. Organization members, workspace members, invites, API keys, and the usage, cost, and rate limit reports aren't. See [Claude Platform on AWS](https://platform.claude.com/docs/en/build-with-claude/claude-platform-on-aws).
</Note>

## Authentication

Authenticate with any of the three credentials. An Admin API key covers most endpoints. The service-account, federation-issuer, and federation-rule endpoints accept only an `org:admin` OAuth token. Send a personal key or service account key in the `x-api-key` header, as you would an Admin API key. The following examples call the [organization info endpoint](https://platform.claude.com/docs/en/manage-claude/admin-api#accessing-organization-info) with an OAuth token and with an Admin API key.

### OAuth bearer token

Log in with the [`ant` CLI](https://platform.claude.com/docs/en/cli-sdks-libraries/cli/quickstart) under a dedicated profile, requesting the `org:admin` scope (see [Admin access](https://platform.claude.com/docs/en/cli-sdks-libraries/cli/authentication#admin-access)), then export the bearer token. A dedicated profile keeps your routine commands from running with elevated access:

```bash CLI
ant auth login --profile admin --scope "org:admin"
export ANTHROPIC_AUTH_TOKEN=$(ant auth print-credentials --profile admin --access-token)
```

Interactive tokens are short-lived. If requests start returning 401, re-run the `export` command to refresh the token.

Call the Admin API with the exported token:

```bash cURL
curl --fail-with-body -sS "https://api.anthropic.com/v1/organizations/me" \
  --header "anthropic-version: 2023-06-01" \
  --header "authorization: Bearer $ANTHROPIC_AUTH_TOKEN"
```

An `org:admin` token grants access to the whole organization, regardless of the workspace the underlying profile or [federation rule](https://platform.claude.com/docs/en/manage-claude/admin-api#federation-rules) is bound to.

For CI and other non-interactive workloads, mint the token with Workload Identity Federation instead of logging in interactively. See [Manage WIF with the Admin API](https://platform.claude.com/docs/en/manage-claude/wif-admin-api#workload-ci-and-automation).

### Admin API key

To create an Admin API key for your organization type, see [Create an Admin API key](https://platform.claude.com/docs/en/manage-claude/admin-api-keys).

```bash cURL
curl --fail-with-body -sS "https://api.anthropic.com/v1/organizations/me" \
  --header "anthropic-version: 2023-06-01" \
  --header "x-api-key: $ANTHROPIC_ADMIN_KEY"
```

## How the Admin API works

Authenticate with any credential from [Authentication](https://platform.claude.com/docs/en/manage-claude/admin-api#authentication), then manage the following resources:

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

List [organization members](https://platform.claude.com/docs/en/api/admin-api/users/get-user), update their roles, and remove them.

<CodeGroup>
  ```bash cURL
  # List organization members
  curl "https://api.anthropic.com/v1/organizations/users?limit=10" \
    --header "anthropic-version: 2023-06-01" \
    --header "x-api-key: $ANTHROPIC_ADMIN_KEY"

  # Update member role
  curl "https://api.anthropic.com/v1/organizations/users/{user_id}" \
    --header "anthropic-version: 2023-06-01" \
    --header "content-type: application/json" \
    --header "x-api-key: $ANTHROPIC_ADMIN_KEY" \
    --data '{"role": "developer"}'

  # Remove member
  curl --request DELETE "https://api.anthropic.com/v1/organizations/users/{user_id}" \
    --header "anthropic-version: 2023-06-01" \
    --header "x-api-key: $ANTHROPIC_ADMIN_KEY"
  ```
</CodeGroup>

### Organization invites

Invite users to your organization and manage pending [invites](https://platform.claude.com/docs/en/api/admin-api/invites/get-invite).

<CodeGroup>
  ```bash cURL
  # Create invite
  curl --request POST "https://api.anthropic.com/v1/organizations/invites" \
    --header "anthropic-version: 2023-06-01" \
    --header "content-type: application/json" \
    --header "x-api-key: $ANTHROPIC_ADMIN_KEY" \
    --data '{
      "email": "newuser@domain.com",
      "role": "developer"
    }'

  # List invites
  curl "https://api.anthropic.com/v1/organizations/invites?limit=10" \
    --header "anthropic-version: 2023-06-01" \
    --header "x-api-key: $ANTHROPIC_ADMIN_KEY"

  # Delete invite
  curl --request DELETE "https://api.anthropic.com/v1/organizations/invites/{invite_id}" \
    --header "anthropic-version: 2023-06-01" \
    --header "x-api-key: $ANTHROPIC_ADMIN_KEY"
  ```
</CodeGroup>

### Workspaces

See [Workspaces](https://platform.claude.com/docs/en/manage-claude/workspaces) for Console and API examples.

### Workspace members

Manage [user access to specific workspaces](https://platform.claude.com/docs/en/api/admin-api/workspace_members/get-workspace-member):

<CodeGroup>
  ```bash cURL
  # Add member to workspace
  curl --request POST "https://api.anthropic.com/v1/organizations/workspaces/{workspace_id}/members" \
    --header "anthropic-version: 2023-06-01" \
    --header "content-type: application/json" \
    --header "x-api-key: $ANTHROPIC_ADMIN_KEY" \
    --data '{
      "user_id": "user_xxx",
      "workspace_role": "workspace_developer"
    }'

  # List workspace members
  curl "https://api.anthropic.com/v1/organizations/workspaces/{workspace_id}/members?limit=10" \
    --header "anthropic-version: 2023-06-01" \
    --header "x-api-key: $ANTHROPIC_ADMIN_KEY"

  # Update member role
  curl --request POST "https://api.anthropic.com/v1/organizations/workspaces/{workspace_id}/members/{user_id}" \
    --header "anthropic-version: 2023-06-01" \
    --header "content-type: application/json" \
    --header "x-api-key: $ANTHROPIC_ADMIN_KEY" \
    --data '{
      "workspace_role": "workspace_admin"
    }'

  # Remove member from workspace
  curl --request DELETE "https://api.anthropic.com/v1/organizations/workspaces/{workspace_id}/members/{user_id}" \
    --header "anthropic-version: 2023-06-01" \
    --header "x-api-key: $ANTHROPIC_ADMIN_KEY"
  ```
</CodeGroup>

### API keys

Monitor and manage [API keys](https://platform.claude.com/docs/en/api/admin/api_keys/list). Each key in the response includes its `expires_at` timestamp (`null` for keys without an [expiration](https://platform.claude.com/docs/en/manage-claude/authentication#key-expiration)) and `principal`, the identity it acts as (see [Key types](https://platform.claude.com/docs/en/manage-claude/authentication#key-types)). For a personal key, `principal` is `{"type": "user_actor", "user_id": "user_..."}`; for a service account key, `{"type": "service_account_actor", "service_account_id": "svac_..."}`; and for a workspace key, `null`. Each key also has a `scope` object: `{"type": "workspace", "workspace_id": "wrkspc_..."}` for a key bound to one workspace, or `{"type": "organization"}` for a key that can work across any workspace the account has access to. The top-level `workspace_id` field is deprecated and is `null` both for keys bound to the Default Workspace and for keys without a workspace scope; use `scope` to tell them apart. Filtering the list by `workspace_id` with the Default Workspace's ID returns only keys bound to the Default Workspace; keys without a workspace scope aren't returned under any `workspace_id` filter.

<CodeGroup>
  ```bash cURL
  # List API keys
  curl "https://api.anthropic.com/v1/organizations/api_keys?limit=10&status=active&workspace_id=wrkspc_xxx" \
    --header "anthropic-version: 2023-06-01" \
    --header "x-api-key: $ANTHROPIC_ADMIN_KEY"

  # Update API key
  curl --request POST "https://api.anthropic.com/v1/organizations/api_keys/{api_key_id}" \
    --header "anthropic-version: 2023-06-01" \
    --header "content-type: application/json" \
    --header "x-api-key: $ANTHROPIC_ADMIN_KEY" \
    --data '{
      "status": "inactive",
      "name": "New Key Name"
    }'
  ```
</CodeGroup>

### Service accounts

Create and manage service accounts (`svac_...`), the non-human identities that [service account keys](https://platform.claude.com/docs/en/manage-claude/authentication#key-types) and [Workload Identity Federation](https://platform.claude.com/docs/en/manage-claude/workload-identity-federation) tokens act as. These endpoints, like the federation-issuer and federation-rule endpoints, require an `org:admin` OAuth token. See [Manage WIF with the Admin API](https://platform.claude.com/docs/en/manage-claude/wif-admin-api#service-accounts).

### Federation issuers

Register the OIDC identity providers (`fdis_...`) whose tokens may assert workload identity for your organization. See [Manage WIF with the Admin API](https://platform.claude.com/docs/en/manage-claude/wif-admin-api#federation-issuers).

### Federation rules

Manage the rules (`fdrl_...`) that map issuer tokens to service accounts and scopes. See [Manage WIF with the Admin API](https://platform.claude.com/docs/en/manage-claude/wif-admin-api#federation-rules).

## Accessing organization info

The `/v1/organizations/me` endpoint returns the organization that your credential belongs to:

```bash cURL
curl "https://api.anthropic.com/v1/organizations/me" \
  --header "anthropic-version: 2023-06-01" \
  --header "x-api-key: $ANTHROPIC_ADMIN_KEY"
```

```json
{
  "id": "12345678-1234-5678-1234-567812345678",
  "type": "organization",
  "name": "Organization Name"
}
```

For parameter details and response schemas, see the [Organization Info API reference](https://platform.claude.com/docs/en/api/admin-api/organization/get-me).

## Usage and cost reports

Track your organization's usage and costs with the [Usage and Cost API](https://platform.claude.com/docs/en/manage-claude/usage-cost-api).

## Claude Code analytics

Monitor developer productivity and Claude Code adoption with the [Claude Code Analytics API](https://platform.claude.com/docs/en/manage-claude/claude-code-analytics-api).

## Rate limits

Read the rate limits configured for your organization and its workspaces with the [Rate Limits API](https://platform.claude.com/docs/en/manage-claude/rate-limits-api).

## Compliance API

Retrieve audit and activity data for your organization with the [Compliance API](https://platform.claude.com/docs/en/manage-claude/compliance-api). Admin API keys can read only the Activity Feed. For full access, see [Set up the Compliance API](https://platform.claude.com/docs/en/manage-claude/compliance-api-access).

## Best practices

* Use meaningful names and descriptions for workspaces and API keys
* Handle errors from failed operations
* Regularly audit member roles and permissions
* Clean up unused workspaces and expired invites
* Monitor API key usage, audit each key's [`expires_at`](https://platform.claude.com/docs/en/manage-claude/authentication#key-expiration), and rotate keys periodically

## FAQ

<AccordionGroup>
  <Accordion title="What permissions are needed to use the Admin API?">
    The Admin API accepts an Admin API key (starting with `sk-ant-admin`), an OAuth bearer token with the `org:admin` scope, or a personal key or service account key that isn't scoped to a specific workspace. Only organization members with the admin role can provision Admin API keys, and only members with the admin, owner, or primary owner role can obtain `org:admin` tokens. A personal key or service account key has the same permissions as the linked account. See [Authentication](https://platform.claude.com/docs/en/manage-claude/admin-api#authentication).
  </Accordion>

  <Accordion title="Can I create new API keys through the Admin API?">
    No. You create API keys in the Claude Console. The Admin API can only read, rename, and change the status of existing keys.
  </Accordion>

  <Accordion title="What happens to API keys when removing a user?">
    Behavior depends on the [key type](https://platform.claude.com/docs/en/manage-claude/authentication#key-types).

    Personal keys stop working when their user is removed from the organization. Service account keys stop working if their service account is archived, but continue to work even if the user that created them is removed. Workspace API keys continue to work. In the [Claude Code workspace](https://platform.claude.com/docs/en/manage-claude/workspaces#claude-code-workspace), each key is bound to the member who created it and stops working when that member is removed.
  </Accordion>

  <Accordion title="Can organization admins be removed through the API?">
    No. The API can't remove members with the admin role.
  </Accordion>

  <Accordion title="How long do organization invites last?">
    Invites expire after 21 days. The expiration period isn't configurable.
  </Accordion>
</AccordionGroup>

For workspace-specific questions, see the [Workspaces FAQ](https://platform.claude.com/docs/en/manage-claude/workspaces#faq).
