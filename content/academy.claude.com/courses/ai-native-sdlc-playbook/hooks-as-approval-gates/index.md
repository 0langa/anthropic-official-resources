Lesson 11 of 14 · The AI-native SDLC playbookHooks as approval gates

# Hooks as approval gates

Lesson 1115 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-native-sdlc-playbook%2Fhooks-as-approval-gates)

The build phase used hooks as guardrails, allowing or blocking actions with no human involved (**Stage 3: Build**). A hook can also ask, pausing the action until the person running the session confirms it. When the approver is someone else, such as a release manager, the hook looks for their recorded approval and blocks until it exists.

The play sits in **Stage 5: Deploy** because the release gate is the clearest case, but hooks are not deploy-specific: they run wherever Claude acts. For example, hooks can block edits to migrations and infra without a change ticket during **Stage 3: Build**, and stop the agent editing test files during a fix task in **Stage 4: Test**.

## Getting started[](https://academy.claude.com/courses/ai-native-sdlc-playbook/hooks-as-approval-gates)

- **Prerequisites**: None.
- **Infrastructure**: A written list of the approvals the change process requires.

## How to execute it[](https://academy.claude.com/courses/ai-native-sdlc-playbook/hooks-as-approval-gates)

1. Engineering leadership, with change management and compliance, lists the human approval gates that must survive, such as change management sign-off, release authorization, and edits to protected paths.
2. The platform engineer expresses each gate as a hook, a script that runs before Claude acts that can allow, ask, or block.
3. Team hooks go in `.claude/settings.json` in Git, and non-negotiable hooks go in managed settings owned by the platform or IT admin, where individual engineers cannot switch them off.
4. A block should explain itself, so when a hook stops an action, the reason and the route to approval appear in Claude's output.

## What it looks like[](https://academy.claude.com/courses/ai-native-sdlc-playbook/hooks-as-approval-gates)

This example is an insurer's customer portal, released to dev, staging, and production. Deployment runs through MCP tools, one server per environment, and each server has a `release` tool.

The entry below is a standalone example in the project's `.claude/settings.json`. Its matcher catches `release` on every server. The empty `args` list makes Claude Code run the script directly instead of through a shell:

json

```
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "^mcp__.*__release$",
        "hooks": [
          { "type": "command",
            "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/release-gate.sh",
            "args": [] }
        ]
      }
    ]
  }
}
```

The gate itself, `.claude/hooks/release-gate.sh`:

bash

```
#!/bin/bash
# Release gate. dev: allow. staging: ask. production: an approved change ticket for this version, or block.
jq=/usr/bin/jq   # absolute path, so a jq earlier on PATH is never used
fail() {   # exit code 2 blocks the call
  echo "Release gate: jq failed, so this release is blocked. Tell the platform team." >&2
  exit 2
}
input=$(cat)
tool=$("$jq" -r '.tool_name' <<<"$input") || fail
version=$("$jq" -r '.tool_input.version' <<<"$input") || fail
ticket=$("$jq" -r '.tool_input.ticket // empty' <<<"$input") || fail

decide() {   # decide <allow|ask|deny> <reason>
  "$jq" -n --arg decision "$1" --arg reason "$2" '{hookSpecificOutput: {
    hookEventName: "PreToolUse",
    permissionDecision: $decision,
    permissionDecisionReason: $reason}}' || fail
  exit 0
}

case "$tool" in
  mcp__deploy-dev__release)
    decide allow "dev needs no approval" ;;
  mcp__deploy-staging__release)
    [ "$GITHUB_REF" = "refs/heads/main" ] && decide allow "pipeline release from main"
    decide ask "This ships $version to staging. Approve only if you own this release." ;;
  mcp__deploy-prod__release)
    route="Open a change ticket at https://change.example.com/new for version $version, \
wait for the release manager to approve it, then call release again with that ticket number."
    [[ "$ticket" =~ ^CHG-[0-9]+$ && "$version" =~ ^[0-9a-f]{7,40}$ ]] ||
      decide deny "Production needs an approved change ticket. $route"
    if approver=$(/usr/local/bin/change-ticket show --ticket "$ticket" --format json |
        "$jq" -er --arg v "$version" 'select(.state == "approved" and .version == $v) | .approver' 2>/dev/null); then
      decide allow "$ticket approved by $approver"
    fi
    decide deny "$ticket is not approved for version $version. $route" ;;
  *)
    decide deny "No release rule for $tool. Add one to release-gate.sh first." ;;
esac
```

In the script, `version` and `ticket` are the inputs Claude passes to the `release` tool. `change-ticket` stands for your change system's own command-line tool. The gate depends on the agent having no way to write to the records it reads.

In a non-interactive run nobody can answer an `ask`, so Claude Code denies the call. That is why the gate allows staging from the pipeline on `main`, where the approved merge is the approval.

The gate has three limits:

- An engineer could set `GITHUB_REF` by hand in their own session, although doing that skips only the prompt they would have answered themselves.
- The script tells the environments apart by server name, and a server's name is a label chosen by whoever adds the server. The managed settings below allow any server whose URL matches `https://deploy.example.com/*`, whatever its name, so a server named `deploy-dev` could point at production. Have the production deployment server also check the change ticket.
- The script runs with the environment of the session that starts it, so an engineer who changes that environment can still change its answer, even to allow a production release. It calls `jq` by absolute path. If `jq` is missing or exits with an error, the script blocks the call.

The reason on an `ask` is shown to the person. The reason on a `deny` is shown to Claude, so the block message names the route to approval for Claude to pass on. The staging result comes first, then production with no ticket:

json

```
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "ask",
    "permissionDecisionReason": "This ships 4f2c9e1 to staging. Approve only if you own this release."
  }
}
```

json

```
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Production needs an approved change ticket. Open a change ticket at https://change.example.com/new for version 4f2c9e1, wait for the release manager to approve it, then call release again with that ticket number."
  }
}
```

## Governance considerations[](https://academy.claude.com/courses/ai-native-sdlc-playbook/hooks-as-approval-gates)

Hooks are the approval gates. The gate condition is enforced every time, for everyone. Once OpenTelemetry events are exported, Claude Code can log allow and block decisions with a timestamp, though older builds leave no record when a managed hook refuses a direct tool call. The gate also defines what counts as approval, whether that's an approved change ticket or the release manager's sign-off.

## Managed settings for a regulated enterprise[](https://academy.claude.com/courses/ai-native-sdlc-playbook/hooks-as-approval-gates)

Managed settings for a regulated enterprise, deployed by the platform team via mobile device management (MDM) or the admin console. An engineer's own settings files, project files, and `--settings` values can't override a value set here. How the settings are delivered matters too, and the end of this section covers it. Claude Code normally adds entries from an engineer's own settings to a managed list. The sample also sets the keys that stop those entries from widening the managed permission rules, network domains, readable paths, and MCP server list. See below:

json

```
{
  "permissions": {
    "deny": [
      "Read(.env*)", "Read(./secrets/**)",
      "WebFetch", "Bash(curl *)", "Bash(wget *)"
    ],
    "allow": [
      "Bash(git *)", "Bash(make build)",
      "Bash(make test)", "Bash(make lint)"
    ],
    "disableBypassPermissionsMode": "disable"
  },
  "allowManagedPermissionRulesOnly": true,
  "disableAutoMode": "disable",
  "sandbox": {
    "enabled": true,
    "failIfUnavailable": true,
    "allowUnsandboxedCommands": false,
    "autoAllowBashIfSandboxed": false,
    "enableWeakerNestedSandbox": false,
    "enableWeakerNetworkIsolation": false,
    "allowAppleEvents": false,
    "allowNestedUserNamespaces": false,
    "network": {
      "allowedDomains": ["git.internal.example.com", "registry.npmjs.org"],
      "allowManagedDomainsOnly": true,
      "allowAllUnixSockets": false,
      "allowLocalBinding": false
    },
    "filesystem": { "allowManagedReadPathsOnly": true },
    "credentials": {
      "files": [
        { "path": "~/.ssh", "mode": "deny" },
        { "path": "~/.aws/credentials", "mode": "deny" }
      ],
      "envVars": [ { "name": "GITHUB_TOKEN", "mode": "deny" } ]
    }
  },
  "allowManagedHooksOnly": true,
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "^mcp__.*__release$",
        "hooks": [
          { "type": "command",
            "command": "/opt/example-corp/claude-hooks/release-gate.sh",
            "args": [],
            "onFailure": "block" }
        ]
      }
    ]
  },
  "disableSideloadFlags": true,
  "strictPluginOnlyCustomization": ["skills", "agents"],
  "allowManagedMcpServersOnly": true,
  "allowedMcpServers": [
    { "serverUrl": "https://deploy.example.com/*" }
  ],
  "strictKnownMarketplaces": [
    { "source": "github", "repo": "example-corp/approved-plugins" }
  ],
  "syncClaudeAiPlugins": false,
  "requiredMinimumVersion": "2.1.309"
}
```

**What the settings do, in control terms:**

**Permissions:**

- `permissions.deny` stops Claude's file tools, and by default sandboxed commands, from reading the project's `.env` files and its `./secrets` folder. It also blocks the WebFetch tool and the usual `curl` and `wget` commands.
- `permissions.allow` lets the listed `git` and `make` commands run without a prompt.
- `allowManagedPermissionRulesOnly` makes managed settings the only settings source of permission rules. Claude Code ignores the allow, ask, and deny rules in an engineer's or a project's settings, and it ignores `--allowedTools`. `--disallowedTools` still applies, because it can only restrict.
- `disableBypassPermissionsMode` stops anyone from entering `bypassPermissions` mode.
- `disableAutoMode` removes auto mode from the `Shift+Tab` cycle. A session that would have started in auto mode starts in Manual mode (`default`) instead, whether `--permission-mode auto`, a settings file, or the built-in default chose it. So under this policy, auto mode isn't available in the plan mode play from **Stage 3: Build**, and approving a plan offers auto-accept edits instead.

**Sandbox:**

- `sandbox` covers what permissions cannot. A tool-level deny on WebFetch doesn't stop a shell command reaching the network. Inside the sandbox a shell command has no direct route out, and each connection is checked against `allowedDomains`.
- `allowManagedDomainsOnly` closes a gap in that list. On its own, `allowedDomains` only skips the approval prompt for the hosts on it, so an engineer could still approve another host or add one in their own settings. With `allowManagedDomainsOnly` set, only the managed list counts, and any other host is refused without a prompt.
- `failIfUnavailable` and `allowUnsandboxedCommands` turn the sandbox into a precondition. On an engineer's machine, Claude Code refuses to start when the platform is unsupported or a sandbox dependency is missing, and refuses each sandboxed command if the sandbox fails later. A command that fails inside the sandbox can't be retried outside it.
- `autoAllowBashIfSandboxed` set to `false` sends sandboxed commands through the regular permission flow, so the allow rules and the permission mode decide whether Claude Code asks before it runs a command. The sample sets it because its default differs between Claude Code versions, and because a repository's settings could otherwise change it.
- The sandbox has limits. It covers only the shell commands Claude runs. Hooks and local MCP servers run outside it, so the hook and MCP settings below restrict them.
- An engineer can still type a command at the `!` prompt and run it outside the sandbox, with the same access they have in any terminal outside Claude Code.
- The [sandboxing docs(opens in new tab)](https://code.claude.com/docs/en/sandboxing) list the keys that an engineer's own settings could turn on to weaken the sandbox, such as `sandbox.network.allowAllUnixSockets`. The sample sets each of them to `false`, so an engineer's own settings can't turn any of them on.
- Most of the other settings that loosen the sandbox have no managed-only lock, so an engineer's own settings can still change them. For example, `sandbox.excludedCommands` runs commands outside the sandbox, and `sandbox.filesystem.allowWrite` lets sandboxed commands write to more paths.
- `credentials` covers credential files the deny rules don't name. By default the sandbox also keeps sandboxed commands away from the paths in `Read` deny rules. But the sample's deny rules name only `.env` files and `./secrets`, and by default a sandboxed command can read most of the machine, `~/.ssh` and `~/.aws/credentials` included. This block denies those reads and strips the listed secrets from the environment of sandboxed commands.
- `allowManagedReadPathsOnly` stops an `allowRead` entry in an engineer's own settings from reopening the denied paths.

**Hooks:**

- `allowManagedHooksOnly` means only hooks defined in managed settings run, along with Agent SDK hooks and hooks from plugins the managed settings force-enable.
- Hooks in user, project, and local settings don't run under `allowManagedHooksOnly`. So the standalone `.claude/settings.json` example above and the team hooks from step 3 don't run. Nor do the `api-policy.sh` hook from **Stage 3: Build** and the test-file and verification hooks from **Stage 4: Test**, while they sit in a repo's settings.
- The sample's own `hooks` block defines this play's approval gate, so the gate stays enforced. The entry names the script by absolute path, in a folder only an administrator can write to. A path under `${CLAUDE_PROJECT_DIR}` would point at the engineer's own checkout, where they could edit the script to allow every call.
- Settings delivered from the admin console can carry that `hooks` entry, but not the script file itself, so MDM installs the script on each machine.
- With `onFailure` set to `block`, Claude Code blocks the call when the script can't start, times out, or exits with an unexpected code.

**Plugins:**

- `strictKnownMarketplaces`, `disableSideloadFlags`, `strictPluginOnlyCustomization`, and `syncClaudeAiPlugins` control where skills, agents, and plugins come from.
- The marketplace allowlist, `strictKnownMarketplaces`, controls which plugins can be installed. It doesn't register anything. To put a plugin on every machine, and to keep its hooks running under `allowManagedHooksOnly`, the managed file also needs `extraKnownMarketplaces`, which registers the marketplace on each machine, and `enabledPlugins`, which names the plugins to install and enable from it.
- At startup, `disableSideloadFlags` rejects the flags that would sideload a plugin, agent, or MCP config for a single run.
- `strictPluginOnlyCustomization` blocks the skills and agents kept in a home directory or in a repo's `.claude/` folder, which neither the marketplace allowlist nor the sideload block covers. Claude Code still loads bundled skills, built-in agents, and skills and agents from the managed policy directory or from plugins, except skills-directory plugins. So `strictPluginOnlyCustomization` rules out the skills and subagents checked into a repo in **Stage 3: Build**, and under this policy teams share them through a plugin in the approved marketplace.
- `strictPluginOnlyCustomization` also stops custom slash commands from loading from a repo's or an engineer's `.claude/commands/` or `.claude/skills/` folder. The commands in **Stage 2: Design** and the PR review play in **Stage 5: Deploy** are among them, if they're kept there.
- Setting `syncClaudeAiPlugins` to `false` stops Claude Code from downloading and loading the plugins enabled for an engineer's claude.ai account.

**MCP:**

- `allowedMcpServers` and `allowManagedMcpServersOnly` together give the platform team an allowlist for the MCP servers that engineers, projects, and plugins add.
- The list names the approved servers by URL, here the deployment servers. Because every entry is a URL, local servers that run as a command on the engineer's machine are blocked.
- `allowManagedMcpServersOnly` makes that managed list the only allowlist that applies. It restricts nothing on its own. If the managed settings don't also set `allowedMcpServers`, every server that passes the denylist loads.
- A server listed in a `.mcp.json` file loads only if it matches the list, and `claude mcp add` refuses one that doesn't. Servers built into Claude Code, such as Claude in Chrome, skip the allowlist, and a `deniedMcpServers` entry blocks a built-in server.

**Version:**

- With `requiredMinimumVersion` set, Claude Code refuses to start on a version below the floor, which keeps out older builds that lack some of these settings or enforce them less completely. The key itself arrived in a build from early June 2026, and it works only on that build and later ones.
- Later releases have fixed further gaps in how these settings are enforced, so raise the floor as the organization approves newer builds. Newer versions still start. To keep engineers on versions the organization has assessed, also set `requiredMaximumVersion`.

Treat the example as a starting point to customize to your own environment. Each deny rule removes some capability, and the right balance depends on the data classification of the repo. The [settings reference(opens in new tab)](https://code.claude.com/docs/en/settings-reference) documents all keys, including the managed-only ones.

Settings delivered from the admin console are a client-side control that an engineer can get around on a device the organization doesn't manage. They are also bypassed when Claude Code is set to use a third-party provider such as Amazon Bedrock or Google Cloud's Agent Platform. Claude Code can apply its local cache of console settings at startup, so an engineer's edit to that cache can apply until the next successful fetch. The [security considerations(opens in new tab)](https://code.claude.com/docs/en/server-managed-settings) for admin console delivery list each case. For stronger enforcement, deliver the file through MDM to enrolled devices.

By default Claude Code uses only the first managed source that delivers a policy key, and it checks the admin console first. So if the admin console sets even one policy key, Claude Code ignores the MDM copy without a warning, except for the [keys read from every source(opens in new tab)](https://code.claude.com/docs/en/managed-settings).

## How to measure it[](https://academy.claude.com/courses/ai-native-sdlc-playbook/hooks-as-approval-gates)

For the hooks themselves:

- **Leading indicator**: Time spent waiting on each approval gate. Once OpenTelemetry events are exported, which takes `CLAUDE_CODE_ENABLE_TELEMETRY` and `OTEL_LOGS_EXPORTER`, a permission decision event records a timestamp, an allow or block verdict, and whether a hook made the decision. Builds released before mid-November 2026, the sample's floor among them, leave no such record when a managed hook refuses a direct tool call.
- **Lagging indicator**: Gate violations reaching production before and after hooks, from the incident tracker.

Was this helpful?
