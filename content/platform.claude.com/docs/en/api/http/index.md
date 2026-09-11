---
title: HTTP API Reference
url: https://platform.claude.com/docs/en/api/http
---

# HTTP API Reference

## [Shared](/docs/en/api/http/$shared.md)

## [Completions](/docs/en/api/http/completions.md)

- [Create a Text Completion](/docs/en/api/http/completions/create.md)

## [Messages](/docs/en/api/http/messages.md)

- [Create a Message](/docs/en/api/http/messages/create.md)

- [Count tokens in a Message](/docs/en/api/http/messages/count_tokens.md)

- [Batches](/docs/en/api/http/messages/batches.md)

  - [Create a Message Batch](/docs/en/api/http/messages/batches/create.md)

  - [Retrieve a Message Batch](/docs/en/api/http/messages/batches/retrieve.md)

  - [List Message Batches](/docs/en/api/http/messages/batches/list.md)

  - [Cancel a Message Batch](/docs/en/api/http/messages/batches/cancel.md)

  - [Delete a Message Batch](/docs/en/api/http/messages/batches/delete.md)

  - [Retrieve Message Batch results](/docs/en/api/http/messages/batches/results.md)

## [Models](/docs/en/api/http/models.md)

- [List Models](/docs/en/api/http/models/list.md)

- [Get a Model](/docs/en/api/http/models/retrieve.md)

## [Files](/docs/en/api/http/files.md)

- [Upload File](/docs/en/api/http/files/upload.md)

- [List Files](/docs/en/api/http/files/list.md)

- [Download File](/docs/en/api/http/files/download.md)

- [Get File Metadata](/docs/en/api/http/files/retrieve_metadata.md)

- [Delete File](/docs/en/api/http/files/delete.md)

## [Skills](/docs/en/api/http/skills.md)

- [Create Skill](/docs/en/api/http/skills/create.md)

- [List Skills](/docs/en/api/http/skills/list.md)

- [Get Skill](/docs/en/api/http/skills/retrieve.md)

- [Delete Skill](/docs/en/api/http/skills/delete.md)

- [Versions](/docs/en/api/http/skills/versions.md)

  - [Create Skill Version](/docs/en/api/http/skills/versions/create.md)

  - [List Skill Versions](/docs/en/api/http/skills/versions/list.md)

  - [Get Skill Version](/docs/en/api/http/skills/versions/retrieve.md)

  - [Delete Skill Version](/docs/en/api/http/skills/versions/delete.md)

## [Beta](/docs/en/api/http/beta.md)

- [Models](/docs/en/api/http/beta/models.md)

  - [List Models](/docs/en/api/http/beta/models/list.md)

  - [Get a Model](/docs/en/api/http/beta/models/retrieve.md)

- [Messages](/docs/en/api/http/beta/messages.md)

  - [Create a Message](/docs/en/api/http/beta/messages/create.md)

  - [Count tokens in a Message](/docs/en/api/http/beta/messages/count_tokens.md)

  - [Batches](/docs/en/api/http/beta/messages/batches.md)

    - [Create a Message Batch](/docs/en/api/http/beta/messages/batches/create.md)

    - [Retrieve a Message Batch](/docs/en/api/http/beta/messages/batches/retrieve.md)

    - [List Message Batches](/docs/en/api/http/beta/messages/batches/list.md)

    - [Cancel a Message Batch](/docs/en/api/http/beta/messages/batches/cancel.md)

    - [Delete a Message Batch](/docs/en/api/http/beta/messages/batches/delete.md)

    - [Retrieve Message Batch results](/docs/en/api/http/beta/messages/batches/results.md)

- [Agents](/docs/en/api/http/beta/agents.md)

  - [Create Agent](/docs/en/api/http/beta/agents/create.md)

  - [List Agents](/docs/en/api/http/beta/agents/list.md)

  - [Get Agent](/docs/en/api/http/beta/agents/retrieve.md)

  - [Update Agent](/docs/en/api/http/beta/agents/update.md)

  - [Archive Agent](/docs/en/api/http/beta/agents/archive.md)

  - [Versions](/docs/en/api/http/beta/agents/versions.md)

    - [List Agent Versions](/docs/en/api/http/beta/agents/versions/list.md)

- [Environments](/docs/en/api/http/beta/environments.md)

  - [Create Environment](/docs/en/api/http/beta/environments/create.md)

  - [List Environments](/docs/en/api/http/beta/environments/list.md)

  - [Get Environment](/docs/en/api/http/beta/environments/retrieve.md)

  - [Update Environment](/docs/en/api/http/beta/environments/update.md)

  - [Delete Environment](/docs/en/api/http/beta/environments/delete.md)

  - [Archive Environment](/docs/en/api/http/beta/environments/archive.md)

  - [Work](/docs/en/api/http/beta/environments/work.md)

    - [Get Work Item](/docs/en/api/http/beta/environments/work/retrieve.md)

    - [Poll for Work](/docs/en/api/http/beta/environments/work/poll.md)

    - [Acknowledge Work](/docs/en/api/http/beta/environments/work/ack.md)

    - [Record Heartbeat](/docs/en/api/http/beta/environments/work/heartbeat.md)

    - [Stop Work](/docs/en/api/http/beta/environments/work/stop.md)

    - [List Work Items](/docs/en/api/http/beta/environments/work/list.md)

    - [Update Work Item](/docs/en/api/http/beta/environments/work/update.md)

    - [Get Queue Statistics](/docs/en/api/http/beta/environments/work/stats.md)

- [Sessions](/docs/en/api/http/beta/sessions.md)

  - [Create Session](/docs/en/api/http/beta/sessions/create.md)

  - [List Sessions](/docs/en/api/http/beta/sessions/list.md)

  - [Get Session](/docs/en/api/http/beta/sessions/retrieve.md)

  - [Update Session](/docs/en/api/http/beta/sessions/update.md)

  - [Delete Session](/docs/en/api/http/beta/sessions/delete.md)

  - [Archive Session](/docs/en/api/http/beta/sessions/archive.md)

  - [Events](/docs/en/api/http/beta/sessions/events.md)

    - [List Events](/docs/en/api/http/beta/sessions/events/list.md)

    - [Send Events](/docs/en/api/http/beta/sessions/events/send.md)

    - [Stream Events](/docs/en/api/http/beta/sessions/events/stream.md)

  - [Resources](/docs/en/api/http/beta/sessions/resources.md)

    - [Add Session Resource](/docs/en/api/http/beta/sessions/resources/add.md)

    - [List Session Resources](/docs/en/api/http/beta/sessions/resources/list.md)

    - [Get Session Resource](/docs/en/api/http/beta/sessions/resources/retrieve.md)

    - [Update Session Resource](/docs/en/api/http/beta/sessions/resources/update.md)

    - [Delete Session Resource](/docs/en/api/http/beta/sessions/resources/delete.md)

  - [Threads](/docs/en/api/http/beta/sessions/threads.md)

    - [List Session Threads](/docs/en/api/http/beta/sessions/threads/list.md)

    - [Get Session Thread](/docs/en/api/http/beta/sessions/threads/retrieve.md)

    - [Archive Session Thread](/docs/en/api/http/beta/sessions/threads/archive.md)

    - [Events](/docs/en/api/http/beta/sessions/threads/events.md)

      - [List Session Thread Events](/docs/en/api/http/beta/sessions/threads/events/list.md)

      - [Stream Session Thread Events](/docs/en/api/http/beta/sessions/threads/events/stream.md)

- [Deployments](/docs/en/api/http/beta/deployments.md)

  - [Create Deployment](/docs/en/api/http/beta/deployments/create.md)

  - [List Deployments](/docs/en/api/http/beta/deployments/list.md)

  - [Get Deployment](/docs/en/api/http/beta/deployments/retrieve.md)

  - [Update Deployment](/docs/en/api/http/beta/deployments/update.md)

  - [Archive Deployment](/docs/en/api/http/beta/deployments/archive.md)

  - [Run Deployment Now](/docs/en/api/http/beta/deployments/run.md)

  - [Pause Deployment](/docs/en/api/http/beta/deployments/pause.md)

  - [Unpause Deployment](/docs/en/api/http/beta/deployments/unpause.md)

- [Deployment Runs](/docs/en/api/http/beta/deployment_runs.md)

  - [List Deployment Runs](/docs/en/api/http/beta/deployment_runs/list.md)

  - [Get Deployment Run](/docs/en/api/http/beta/deployment_runs/retrieve.md)

- [Vaults](/docs/en/api/http/beta/vaults.md)

  - [Create Vault](/docs/en/api/http/beta/vaults/create.md)

  - [List Vaults](/docs/en/api/http/beta/vaults/list.md)

  - [Get Vault](/docs/en/api/http/beta/vaults/retrieve.md)

  - [Update Vault](/docs/en/api/http/beta/vaults/update.md)

  - [Delete Vault](/docs/en/api/http/beta/vaults/delete.md)

  - [Archive Vault](/docs/en/api/http/beta/vaults/archive.md)

  - [Credentials](/docs/en/api/http/beta/vaults/credentials.md)

    - [Create Credential](/docs/en/api/http/beta/vaults/credentials/create.md)

    - [List Credentials](/docs/en/api/http/beta/vaults/credentials/list.md)

    - [Get Credential](/docs/en/api/http/beta/vaults/credentials/retrieve.md)

    - [Update Credential](/docs/en/api/http/beta/vaults/credentials/update.md)

    - [Delete Credential](/docs/en/api/http/beta/vaults/credentials/delete.md)

    - [Archive Credential](/docs/en/api/http/beta/vaults/credentials/archive.md)

    - [Validate Credential](/docs/en/api/http/beta/vaults/credentials/mcp_oauth_validate.md)

- [Memory Stores](/docs/en/api/http/beta/memory_stores.md)

  - [Create a memory store](/docs/en/api/http/beta/memory_stores/create.md)

  - [List memory stores](/docs/en/api/http/beta/memory_stores/list.md)

  - [Retrieve a memory store](/docs/en/api/http/beta/memory_stores/retrieve.md)

  - [Update a memory store](/docs/en/api/http/beta/memory_stores/update.md)

  - [Delete a memory store](/docs/en/api/http/beta/memory_stores/delete.md)

  - [Archive a memory store](/docs/en/api/http/beta/memory_stores/archive.md)

  - [Memories](/docs/en/api/http/beta/memory_stores/memories.md)

    - [Create a memory](/docs/en/api/http/beta/memory_stores/memories/create.md)

    - [List memories](/docs/en/api/http/beta/memory_stores/memories/list.md)

    - [Retrieve a memory](/docs/en/api/http/beta/memory_stores/memories/retrieve.md)

    - [Update a memory](/docs/en/api/http/beta/memory_stores/memories/update.md)

    - [Delete a memory](/docs/en/api/http/beta/memory_stores/memories/delete.md)

  - [Memory Versions](/docs/en/api/http/beta/memory_stores/memory_versions.md)

    - [List memory versions](/docs/en/api/http/beta/memory_stores/memory_versions/list.md)

    - [Retrieve a memory version](/docs/en/api/http/beta/memory_stores/memory_versions/retrieve.md)

    - [Redact a memory version](/docs/en/api/http/beta/memory_stores/memory_versions/redact.md)

- [Files](/docs/en/api/http/beta/files.md)

  - [Upload File](/docs/en/api/http/beta/files/upload.md)

  - [List Files](/docs/en/api/http/beta/files/list.md)

  - [Download File](/docs/en/api/http/beta/files/download.md)

  - [Get File Metadata](/docs/en/api/http/beta/files/retrieve_metadata.md)

  - [Delete File](/docs/en/api/http/beta/files/delete.md)

- [Skills](/docs/en/api/http/beta/skills.md)

  - [Create Skill](/docs/en/api/http/beta/skills/create.md)

  - [List Skills](/docs/en/api/http/beta/skills/list.md)

  - [Get Skill](/docs/en/api/http/beta/skills/retrieve.md)

  - [Delete Skill](/docs/en/api/http/beta/skills/delete.md)

  - [Versions](/docs/en/api/http/beta/skills/versions.md)

    - [Create Skill Version](/docs/en/api/http/beta/skills/versions/create.md)

    - [List Skill Versions](/docs/en/api/http/beta/skills/versions/list.md)

    - [Download Skill Version Content](/docs/en/api/http/beta/skills/versions/download.md)

    - [Get Skill Version](/docs/en/api/http/beta/skills/versions/retrieve.md)

    - [Delete Skill Version](/docs/en/api/http/beta/skills/versions/delete.md)

- [Webhooks](/docs/en/api/http/beta/webhooks.md)

  - [Unwrap](/docs/en/api/http/beta/webhooks/unwrap.md)

  - [Parse Unverified](/docs/en/api/http/beta/webhooks/parse_unverified.md)

- [User Profiles](/docs/en/api/http/beta/user_profiles.md)

  - [Create User Profile](/docs/en/api/http/beta/user_profiles/create.md)

  - [List User Profiles](/docs/en/api/http/beta/user_profiles/list.md)

  - [Get User Profile](/docs/en/api/http/beta/user_profiles/retrieve.md)

  - [Update User Profile](/docs/en/api/http/beta/user_profiles/update.md)

  - [Create Enrollment URL](/docs/en/api/http/beta/user_profiles/create_enrollment_url.md)

- [Dreams](/docs/en/api/http/beta/dreams.md)

  - [Create a Dream](/docs/en/api/http/beta/dreams/create.md)

  - [List Dreams](/docs/en/api/http/beta/dreams/list.md)

  - [Get a Dream](/docs/en/api/http/beta/dreams/retrieve.md)

  - [Cancel a Dream](/docs/en/api/http/beta/dreams/cancel.md)

  - [Archive a Dream](/docs/en/api/http/beta/dreams/archive.md)

- [Tunnels](/docs/en/api/http/beta/tunnels.md)

  - [Create Tunnel](/docs/en/api/http/beta/tunnels/create.md)

  - [Get Tunnel](/docs/en/api/http/beta/tunnels/retrieve.md)

  - [List Tunnels](/docs/en/api/http/beta/tunnels/list.md)

  - [Archive Tunnel](/docs/en/api/http/beta/tunnels/archive.md)

  - [Reveal Tunnel Token](/docs/en/api/http/beta/tunnels/reveal_token.md)

  - [Rotate Tunnel Token](/docs/en/api/http/beta/tunnels/rotate_token.md)

  - [Certificates](/docs/en/api/http/beta/tunnels/certificates.md)

    - [Create Tunnel Certificate](/docs/en/api/http/beta/tunnels/certificates/create.md)

    - [Get Tunnel Certificate](/docs/en/api/http/beta/tunnels/certificates/retrieve.md)

    - [List Tunnel Certificates](/docs/en/api/http/beta/tunnels/certificates/list.md)

    - [Archive Tunnel Certificate](/docs/en/api/http/beta/tunnels/certificates/archive.md)

- [Organization](/docs/en/api/http/beta/organization.md)

  - [Get Current Organization](/docs/en/api/http/beta/organization/retrieve.md)

  - [API Keys](/docs/en/api/http/beta/organization/api_keys.md)

    - [List API Keys](/docs/en/api/http/beta/organization/api_keys/list.md)

    - [Retrieve API Key (Admin API)](/docs/en/api/http/beta/organization/api_keys/retrieve.md)

    - [Update API Key](/docs/en/api/http/beta/organization/api_keys/update.md)

  - [External Keys](/docs/en/api/http/beta/organization/external_keys.md)

    - [Create External Key](/docs/en/api/http/beta/organization/external_keys/create.md)

    - [List External Keys](/docs/en/api/http/beta/organization/external_keys/list.md)

    - [Get External Key](/docs/en/api/http/beta/organization/external_keys/retrieve.md)

    - [Update External Key](/docs/en/api/http/beta/organization/external_keys/update.md)

    - [Delete External Key](/docs/en/api/http/beta/organization/external_keys/delete.md)

    - [Validate External Key](/docs/en/api/http/beta/organization/external_keys/validate.md)

  - [Federation](/docs/en/api/http/beta/organization/federation.md)

    - [Issuers](/docs/en/api/http/beta/organization/federation/issuers.md)

      - [Create Federation Issuer](/docs/en/api/http/beta/organization/federation/issuers/create.md)

      - [List Federation Issuers](/docs/en/api/http/beta/organization/federation/issuers/list.md)

      - [Get Federation Issuer](/docs/en/api/http/beta/organization/federation/issuers/retrieve.md)

      - [Update Federation Issuer](/docs/en/api/http/beta/organization/federation/issuers/update.md)

      - [Archive Federation Issuer](/docs/en/api/http/beta/organization/federation/issuers/archive.md)

    - [Rules](/docs/en/api/http/beta/organization/federation/rules.md)

      - [Create Federation Rule](/docs/en/api/http/beta/organization/federation/rules/create.md)

      - [List Federation Rules](/docs/en/api/http/beta/organization/federation/rules/list.md)

      - [Get Federation Rule](/docs/en/api/http/beta/organization/federation/rules/retrieve.md)

      - [Update Federation Rule](/docs/en/api/http/beta/organization/federation/rules/update.md)

      - [Archive Federation Rule](/docs/en/api/http/beta/organization/federation/rules/archive.md)

      - [Workspaces](/docs/en/api/http/beta/organization/federation/rules/workspaces.md)

        - [Add Federation Rule Workspace](/docs/en/api/http/beta/organization/federation/rules/workspaces/add.md)

        - [List Federation Rule Workspaces](/docs/en/api/http/beta/organization/federation/rules/workspaces/list.md)

        - [Remove Federation Rule Workspace](/docs/en/api/http/beta/organization/federation/rules/workspaces/remove.md)

  - [Invites](/docs/en/api/http/beta/organization/invites.md)

    - [Create Invite](/docs/en/api/http/beta/organization/invites/create.md)

    - [List Invites](/docs/en/api/http/beta/organization/invites/list.md)

    - [Get Invite](/docs/en/api/http/beta/organization/invites/retrieve.md)

    - [Delete Invite](/docs/en/api/http/beta/organization/invites/delete.md)

  - [Service Accounts](/docs/en/api/http/beta/organization/service_accounts.md)

    - [Create Service Account](/docs/en/api/http/beta/organization/service_accounts/create.md)

    - [List Service Accounts](/docs/en/api/http/beta/organization/service_accounts/list.md)

    - [Get Service Account](/docs/en/api/http/beta/organization/service_accounts/retrieve.md)

    - [Update Service Account](/docs/en/api/http/beta/organization/service_accounts/update.md)

    - [Archive Service Account](/docs/en/api/http/beta/organization/service_accounts/archive.md)

    - [Workspaces](/docs/en/api/http/beta/organization/service_accounts/workspaces.md)

      - [Add Workspace To Service Account](/docs/en/api/http/beta/organization/service_accounts/workspaces/add.md)

      - [List Workspaces For Service Account](/docs/en/api/http/beta/organization/service_accounts/workspaces/list.md)

      - [Remove Workspace From Service Account](/docs/en/api/http/beta/organization/service_accounts/workspaces/remove.md)

  - [Users](/docs/en/api/http/beta/organization/users.md)

    - [List Users](/docs/en/api/http/beta/organization/users/list.md)

    - [Get User](/docs/en/api/http/beta/organization/users/retrieve.md)

    - [Update User](/docs/en/api/http/beta/organization/users/update.md)

    - [Remove User](/docs/en/api/http/beta/organization/users/remove.md)

  - [Workspaces](/docs/en/api/http/beta/organization/workspaces.md)

    - [List Workspaces](/docs/en/api/http/beta/organization/workspaces/list.md)

    - [Create Workspace](/docs/en/api/http/beta/organization/workspaces/create.md)

    - [Get Workspace](/docs/en/api/http/beta/organization/workspaces/retrieve.md)

    - [Update Workspace](/docs/en/api/http/beta/organization/workspaces/update.md)

    - [Archive Workspace](/docs/en/api/http/beta/organization/workspaces/archive.md)

    - [Rate Limits](/docs/en/api/http/beta/organization/workspaces/rate_limits.md)

      - [List Workspace Rate Limits](/docs/en/api/http/beta/organization/workspaces/rate_limits/list.md)

    - [Members](/docs/en/api/http/beta/organization/workspaces/members.md)

      - [List Workspace Members](/docs/en/api/http/beta/organization/workspaces/members/list.md)

      - [Create Workspace Member](/docs/en/api/http/beta/organization/workspaces/members/add.md)

      - [Get Workspace Member](/docs/en/api/http/beta/organization/workspaces/members/retrieve.md)

      - [Update Workspace Member](/docs/en/api/http/beta/organization/workspaces/members/update.md)

      - [Delete Workspace Member](/docs/en/api/http/beta/organization/workspaces/members/remove.md)

    - [Service Accounts](/docs/en/api/http/beta/organization/workspaces/service_accounts.md)

      - [List Service Account Workspace Members](/docs/en/api/http/beta/organization/workspaces/service_accounts/list.md)

      - [Create Service Account Workspace Member](/docs/en/api/http/beta/organization/workspaces/service_accounts/add.md)

      - [Get Service Account Workspace Member](/docs/en/api/http/beta/organization/workspaces/service_accounts/retrieve.md)

      - [Update Service Account Workspace Member](/docs/en/api/http/beta/organization/workspaces/service_accounts/update.md)

      - [Delete Service Account Workspace Member](/docs/en/api/http/beta/organization/workspaces/service_accounts/remove.md)

  - [Rate Limits](/docs/en/api/http/beta/organization/rate_limits.md)

    - [List Organization Rate Limits](/docs/en/api/http/beta/organization/rate_limits/list.md)

  - [Compliance Settings](/docs/en/api/http/beta/organization/compliance_settings.md)

    - [Get Compliance Settings](/docs/en/api/http/beta/organization/compliance_settings/retrieve.md)

    - [Update Compliance Settings](/docs/en/api/http/beta/organization/compliance_settings/update.md)

  - [Usage Report](/docs/en/api/http/beta/organization/usage_report.md)

    - [Get Messages Usage Report](/docs/en/api/http/beta/organization/usage_report/retrieve_messages.md)

    - [Get Claude Code Usage Report](/docs/en/api/http/beta/organization/usage_report/retrieve_claude_code.md)

  - [Cost Report](/docs/en/api/http/beta/organization/cost_report.md)

    - [Get Cost Report](/docs/en/api/http/beta/organization/cost_report/retrieve.md)

  - [MCP Tunnels](/docs/en/api/http/beta/organization/mcp_tunnels.md)

    - [List Tunnels](/docs/en/api/http/beta/organization/mcp_tunnels/list.md)

    - [Get Tunnel](/docs/en/api/http/beta/organization/mcp_tunnels/retrieve.md)

    - [Archive Tunnel](/docs/en/api/http/beta/organization/mcp_tunnels/archive.md)

    - [Reveal Tunnel Token](/docs/en/api/http/beta/organization/mcp_tunnels/reveal_token.md)

    - [Rotate Tunnel Token](/docs/en/api/http/beta/organization/mcp_tunnels/rotate_token.md)

    - [Tunnel Certificates](/docs/en/api/http/beta/organization/mcp_tunnels/tunnel_certificates.md)

      - [Create Tunnel Certificate](/docs/en/api/http/beta/organization/mcp_tunnels/tunnel_certificates/create.md)

      - [List Tunnel Certificates](/docs/en/api/http/beta/organization/mcp_tunnels/tunnel_certificates/list.md)

      - [Get Tunnel Certificate](/docs/en/api/http/beta/organization/mcp_tunnels/tunnel_certificates/retrieve.md)

      - [Archive Tunnel Certificate](/docs/en/api/http/beta/organization/mcp_tunnels/tunnel_certificates/archive.md)

  - [Analytics](/docs/en/api/http/beta/organization/analytics.md)

    - [Get Activity Summaries](/docs/en/api/http/beta/organization/analytics/retrieve_summaries.md)

    - [Usage](/docs/en/api/http/beta/organization/analytics/usage.md)

      - [Get Token Usage Over Time](/docs/en/api/http/beta/organization/analytics/usage/list.md)

      - [Get Per-User Token Usage](/docs/en/api/http/beta/organization/analytics/usage/list_by_user.md)

    - [Cost](/docs/en/api/http/beta/organization/analytics/cost.md)

      - [Get Cost Over Time](/docs/en/api/http/beta/organization/analytics/cost/list.md)

      - [Get Per-User Cost](/docs/en/api/http/beta/organization/analytics/cost/list_by_user.md)

    - [Users](/docs/en/api/http/beta/organization/analytics/users.md)

      - [List User Activity](/docs/en/api/http/beta/organization/analytics/users/list.md)

    - [Skills](/docs/en/api/http/beta/organization/analytics/skills.md)

      - [Get Skill Usage](/docs/en/api/http/beta/organization/analytics/skills/list.md)

    - [Connectors](/docs/en/api/http/beta/organization/analytics/connectors.md)

      - [Get Connector Usage](/docs/en/api/http/beta/organization/analytics/connectors/list.md)

    - [Chat Projects](/docs/en/api/http/beta/organization/analytics/chat_projects.md)

      - [Get Chat Project Usage](/docs/en/api/http/beta/organization/analytics/chat_projects/list.md)

    - [Plugins](/docs/en/api/http/beta/organization/analytics/plugins.md)

      - [Get Plugin Usage](/docs/en/api/http/beta/organization/analytics/plugins/list.md)

    - [Artifacts](/docs/en/api/http/beta/organization/analytics/artifacts.md)

      - [Get Artifact Activity](/docs/en/api/http/beta/organization/analytics/artifacts/list.md)

  - [Spend Limits](/docs/en/api/http/beta/organization/spend_limits.md)

    - [Set Spend Limit](/docs/en/api/http/beta/organization/spend_limits/create.md)

    - [Get Spend Limit](/docs/en/api/http/beta/organization/spend_limits/retrieve.md)

    - [Delete Spend Limit](/docs/en/api/http/beta/organization/spend_limits/delete.md)

    - [List Effective Spend Limits](/docs/en/api/http/beta/organization/spend_limits/list_effective.md)

    - [Increase Requests](/docs/en/api/http/beta/organization/spend_limits/increase_requests.md)

      - [List Spend Limit Increase Requests](/docs/en/api/http/beta/organization/spend_limits/increase_requests/list.md)

      - [Get Spend Limit Increase Request](/docs/en/api/http/beta/organization/spend_limits/increase_requests/retrieve.md)

      - [Approve Spend Limit Increase Request](/docs/en/api/http/beta/organization/spend_limits/increase_requests/approve.md)

      - [Deny Spend Limit Increase Request](/docs/en/api/http/beta/organization/spend_limits/increase_requests/deny.md)

  - [RBAC Groups](/docs/en/api/http/beta/organization/rbac_groups.md)

    - [List RBAC Groups](/docs/en/api/http/beta/organization/rbac_groups/list.md)

    - [Get RBAC Group](/docs/en/api/http/beta/organization/rbac_groups/retrieve.md)

    - [Create RBAC Group](/docs/en/api/http/beta/organization/rbac_groups/create.md)

    - [Update RBAC Group](/docs/en/api/http/beta/organization/rbac_groups/update.md)

    - [Delete RBAC Group](/docs/en/api/http/beta/organization/rbac_groups/delete.md)

    - [Members](/docs/en/api/http/beta/organization/rbac_groups/members.md)

      - [List RBAC Group Members](/docs/en/api/http/beta/organization/rbac_groups/members/list.md)

      - [Add RBAC Group Member](/docs/en/api/http/beta/organization/rbac_groups/members/create.md)

      - [Remove RBAC Group Member](/docs/en/api/http/beta/organization/rbac_groups/members/delete.md)

  - [RBAC Roles](/docs/en/api/http/beta/organization/rbac_roles.md)

    - [List RBAC Roles](/docs/en/api/http/beta/organization/rbac_roles/list.md)

    - [Get RBAC Role](/docs/en/api/http/beta/organization/rbac_roles/retrieve.md)

    - [Permissions](/docs/en/api/http/beta/organization/rbac_roles/permissions.md)

      - [List RBAC Role Permissions](/docs/en/api/http/beta/organization/rbac_roles/permissions/list.md)

## [Compliance API](/docs/en/api/http/compliance.md)

- [Activities](/docs/en/api/http/compliance/activities.md)

  - [Query compliance activities](/docs/en/api/http/compliance/activities/list.md)

- [Organizations](/docs/en/api/http/compliance/organizations.md)

  - [List organizations](/docs/en/api/http/compliance/organizations/list.md)

  - [Users](/docs/en/api/http/compliance/organizations/users.md)

    - [List organization users](/docs/en/api/http/compliance/organizations/users/list.md)

  - [Roles](/docs/en/api/http/compliance/organizations/roles.md)

    - [List Compliance Roles](/docs/en/api/http/compliance/organizations/roles/list.md)

    - [Get Compliance Role](/docs/en/api/http/compliance/organizations/roles/retrieve.md)

    - [Permissions](/docs/en/api/http/compliance/organizations/roles/permissions.md)

      - [List Compliance Role Permissions](/docs/en/api/http/compliance/organizations/roles/permissions/list.md)

  - [Settings](/docs/en/api/http/compliance/organizations/settings.md)

    - [Get effective organization settings](/docs/en/api/http/compliance/organizations/settings/retrieve.md)

- [Groups](/docs/en/api/http/compliance/groups.md)

  - [List Compliance Groups](/docs/en/api/http/compliance/groups/list.md)

  - [Get Compliance Group](/docs/en/api/http/compliance/groups/retrieve.md)

  - [Members](/docs/en/api/http/compliance/groups/members.md)

    - [List Compliance Group Members](/docs/en/api/http/compliance/groups/members/list.md)

- [Apps](/docs/en/api/http/compliance/apps.md)

  - [Chats](/docs/en/api/http/compliance/apps/chats.md)

    - [List chats](/docs/en/api/http/compliance/apps/chats/list.md)

    - [Delete chat](/docs/en/api/http/compliance/apps/chats/delete.md)

    - [Messages](/docs/en/api/http/compliance/apps/chats/messages.md)

      - [Get chat messages](/docs/en/api/http/compliance/apps/chats/messages/list.md)

    - [Files](/docs/en/api/http/compliance/apps/chats/files.md)

      - [Get file metadata](/docs/en/api/http/compliance/apps/chats/files/retrieve.md)

      - [Delete file](/docs/en/api/http/compliance/apps/chats/files/delete.md)

      - [Download file content](/docs/en/api/http/compliance/apps/chats/files/download.md)

    - [Generated Files](/docs/en/api/http/compliance/apps/chats/generated_files.md)

      - [Get Claude-generated file metadata](/docs/en/api/http/compliance/apps/chats/generated_files/retrieve.md)

      - [Download a Claude-generated file](/docs/en/api/http/compliance/apps/chats/generated_files/download.md)

  - [Projects](/docs/en/api/http/compliance/apps/projects.md)

    - [List projects](/docs/en/api/http/compliance/apps/projects/list.md)

    - [Get project details](/docs/en/api/http/compliance/apps/projects/retrieve.md)

    - [Delete project](/docs/en/api/http/compliance/apps/projects/delete.md)

    - [Attachments](/docs/en/api/http/compliance/apps/projects/attachments.md)

      - [List project attachments](/docs/en/api/http/compliance/apps/projects/attachments/list.md)

    - [Collaborators](/docs/en/api/http/compliance/apps/projects/collaborators.md)

      - [List project collaborators](/docs/en/api/http/compliance/apps/projects/collaborators/list.md)

    - [Documents](/docs/en/api/http/compliance/apps/projects/documents.md)

      - [Get project document content](/docs/en/api/http/compliance/apps/projects/documents/retrieve.md)

      - [Get project document metadata](/docs/en/api/http/compliance/apps/projects/documents/metadata.md)

      - [Delete project document](/docs/en/api/http/compliance/apps/projects/documents/delete.md)

  - [Artifacts](/docs/en/api/http/compliance/apps/artifacts.md)

    - [Get artifact metadata](/docs/en/api/http/compliance/apps/artifacts/retrieve.md)

    - [Download artifact content](/docs/en/api/http/compliance/apps/artifacts/download.md)

  - [Sessions](/docs/en/api/http/compliance/apps/sessions.md)

    - [Local](/docs/en/api/http/compliance/apps/sessions/local.md)

      - [List local sessions](/docs/en/api/http/compliance/apps/sessions/local/list.md)

      - [Retrieve a local session](/docs/en/api/http/compliance/apps/sessions/local/retrieve.md)

      - [Messages](/docs/en/api/http/compliance/apps/sessions/local/messages.md)

        - [Retrieve local session messages](/docs/en/api/http/compliance/apps/sessions/local/messages/list.md)

    - [Remote](/docs/en/api/http/compliance/apps/sessions/remote.md)

      - [List remote sessions](/docs/en/api/http/compliance/apps/sessions/remote/list.md)

      - [Messages](/docs/en/api/http/compliance/apps/sessions/remote/messages.md)

        - [Retrieve remote session messages](/docs/en/api/http/compliance/apps/sessions/remote/messages/list.md)

- [Code](/docs/en/api/http/compliance/code.md)

  - [Artifacts](/docs/en/api/http/compliance/code/artifacts.md)

    - [List Code Artifacts](/docs/en/api/http/compliance/code/artifacts/list.md)

    - [Download Code Artifact Version Content](/docs/en/api/http/compliance/code/artifacts/retrieve_version.md)

    - [Delete Code Artifact](/docs/en/api/http/compliance/code/artifacts/delete.md)
