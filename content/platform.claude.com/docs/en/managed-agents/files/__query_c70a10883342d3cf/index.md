---
title: Adding files
url: https://platform.claude.com/docs/en/managed-agents/files
description: Upload files and mount them in your sandbox for reading and processing.
featureMetadata:
  topic:
    title: Managed Agents
    url: https://platform.claude.com/docs/en/managed-agents/overview?sdk_languages=curl
  status: beta
  betaHeader: managed-agents-2026-04-01
---

You can provide files to your agent by uploading them through the Files API and mounting them in the session's sandbox.

## Uploading files

First, upload a file using the [Files API](https://platform.claude.com/docs/en/build-with-claude/files?sdk_languages=curl):

<CodeGroup>
  ```bash cURL
  file=$(curl --fail-with-body -sS "${auth[@]}" \
    "${base_url}/files" \
    -F file=@data.csv)
  FILE_ID=$(jq -er '.id' <<<"${file}")
  ```
</CodeGroup>

## Mounting files in a session

Mount uploaded files into the sandbox by adding them to the `resources` array when creating a session:

<Tip>
  The `mount_path` is optional, but make sure the uploaded file has a descriptive name so the agent can identify it.
</Tip>

<CodeGroup>
  ```bash cURL
  jq -n \
    --arg agent_id "${AGENT_ID}" \
    --arg environment_id "${ENVIRONMENT_ID}" \
    --arg file_id "${FILE_ID}" \
    '{
      agent: $agent_id,
      environment_id: $environment_id,
      resources: [
        {
          type: "file",
          file_id: $file_id,
          mount_path: "/data.csv"
        }
      ]
    }' | curl --fail-with-body -sS "${auth[@]}" "${base_url}/sessions" --json @-
  ```
</CodeGroup>

With the preceding `mount_path`, the agent reads the file at `/mnt/session/uploads/data.csv` (see [File paths](https://platform.claude.com/docs/en/managed-agents/files?sdk_languages=curl#file-paths)).

A new `file_id` is created that references the instance of the file in the session. These copies do not count against your [storage limits](https://platform.claude.com/docs/en/build-with-claude/files?sdk_languages=curl).

## Multiple files

Mount multiple files by adding entries to the `resources` array:

<CodeGroup>
  ```bash cURL
  curl -fsSL https://api.anthropic.com/v1/sessions \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01" \
    -H "content-type: application/json" \
    -d '{
      "agent": "agent_01J8XkN5uT3vHpLqRfWdY2",
      "environment_id": "env_01K2mPsT7hNwR4jXuLvCqD8",
      "resources": [
        {
          "type": "file",
          "file_id": "file_011CNha8iCJcU1wXNR6q4V8w",
          "mount_path": "/data.csv"
        },
        {
          "type": "file",
          "file_id": "file_011CPMxVD3fHLUhvTqtsQA5w",
          "mount_path": "/config.json"
        },
        {
          "type": "file",
          "file_id": "file_011CRb3kQ7tWx9ZsLmDe2Vh4",
          "mount_path": "/src/main.py"
        }
      ]
    }'
  ```
</CodeGroup>

A maximum of 500 files is supported per session.

## Managing files on a running session

You can add or remove files from a session after creation using the session resources API. Each resource has an `id` returned when it is added (or listed), which you use for deletes.

<CodeGroup>
  ```bash cURL
  jq -n --arg file_id "${FILE_ID}" '{type: "file", file_id: $file_id}' \
    | curl --fail-with-body -sS "${auth[@]}" \
        "${base_url}/sessions/${SESSION_ID}/resources" --json @-
  ```
</CodeGroup>

List all resources on a session with `GET /v1/sessions/{session_id}/resources`. To remove a file, call `DELETE /v1/sessions/{session_id}/resources/{resource_id}` with the resource ID:

<CodeGroup>
  ```bash cURL
  curl --fail-with-body -sS "${auth[@]}" \
    "${base_url}/sessions/${SESSION_ID}/resources"

  curl --fail-with-body -sS "${auth[@]}" -X DELETE \
    "${base_url}/sessions/${SESSION_ID}/resources/${RESOURCE_ID}" >/dev/null
  ```
</CodeGroup>

## Listing and downloading session files

Use the [Files API](https://platform.claude.com/docs/en/build-with-claude/files?sdk_languages=curl) to list files scoped to a session and download them. Files the agent writes to `/mnt/session/outputs/` appear in the list shortly after the agent finishes writing them, sometimes a few seconds after the session goes idle. If an output file you expect is missing, list again after a short delay; once it appears in the list, its upload has finished.

Filtering by `scope_id` requires the `managed-agents-2026-04-01` beta header, so the list examples call `GET /v1/files` and pass that header explicitly.

<CodeGroup>
  ```bash cURL
  # List files associated with a session
  curl -fsSL "https://api.anthropic.com/v1/files?scope_id=sesn_abc123" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -H "anthropic-beta: managed-agents-2026-04-01"

  # Download a file
  curl -fsSL "https://api.anthropic.com/v1/files/$FILE_ID/content" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -o output.txt
  ```
</CodeGroup>

## Supported file types

The agent can work with any file type, including:

* Source code (`.py`, `.js`, `.ts`, `.go`, `.rs`, and others)
* Data files (`.csv`, `.json`, `.xml`, `.yaml`)
* Documents (`.txt`, `.md`)
* Archives (`.zip`, `.tar.gz`) - the agent can extract these using bash
* Binary files - the agent can process these with appropriate tools

## File paths

<Note>
  Files mounted in the sandbox are read-only copies. The agent can read them but cannot modify the original uploaded file. To work with modified versions, the agent writes to new paths within the sandbox.
</Note>

* The path you specify is rooted under the session's uploads directory: a `mount_path` of `/data.csv` places the file at `/mnt/session/uploads/data.csv` in the sandbox
* If you omit `mount_path`, the file is placed at `/mnt/session/uploads/<file_id>`
* Parent directories are created automatically
* Paths should be absolute (starting with `/`)
* Files the agent writes to `/mnt/session/outputs/` become available through the Files API, scoped to the session; see [Listing and downloading session files](https://platform.claude.com/docs/en/managed-agents/files?sdk_languages=curl#listing-and-downloading-session-files)
