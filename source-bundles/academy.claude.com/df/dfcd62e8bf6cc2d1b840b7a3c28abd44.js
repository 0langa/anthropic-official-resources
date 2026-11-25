import{n as e,r as t}from"../../../../../react-ml7fx0sn.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The build phase used hooks as guardrails, allowing or blocking actions with no human involved (",(0,n.jsx)(r.strong,{children:"Stage 3: Build"}),"). A hook can also ask, pausing the action until the person running the session confirms it. When the approver is someone else, such as a release manager, the hook looks for their recorded approval and blocks until it exists."]}),`
`,(0,n.jsxs)(r.p,{children:["The play sits in ",(0,n.jsx)(r.strong,{children:"Stage 5: Deploy"})," because the release gate is the clearest case, but hooks are not deploy-specific: they run wherever Claude acts. For example, hooks can block edits to migrations and infra without a change ticket during ",(0,n.jsx)(r.strong,{children:"Stage 3: Build"}),", and stop the agent editing test files during a fix task in ",(0,n.jsx)(r.strong,{children:"Stage 4: Test"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"getting-started",children:"Getting started"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prerequisites"}),": None."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Infrastructure"}),": A written list of the approvals the change process requires."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-execute-it",children:"How to execute it"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Engineering leadership, with change management and compliance, lists the human approval gates that must survive, such as change management sign-off, release authorization, and edits to protected paths."}),`
`,(0,n.jsx)(r.li,{children:"The platform engineer expresses each gate as a hook, a script that runs before Claude acts that can allow, ask, or block."}),`
`,(0,n.jsxs)(r.li,{children:["Team hooks go in ",(0,n.jsx)(r.code,{children:".claude/settings.json"})," in Git, and non-negotiable hooks go in managed settings owned by the platform or IT admin, where individual engineers cannot switch them off."]}),`
`,(0,n.jsx)(r.li,{children:"A block should explain itself, so when a hook stops an action, the reason and the route to approval appear in Claude's output."}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"what-it-looks-like",children:"What it looks like"}),`
`,(0,n.jsxs)(r.p,{children:["This example is an insurer's customer portal, released to dev, staging, and production. Deployment runs through MCP tools, one server per environment, and each server has a ",(0,n.jsx)(r.code,{children:"release"})," tool."]}),`
`,(0,n.jsxs)(r.p,{children:["The entry below is a standalone example in the project's ",(0,n.jsx)(r.code,{children:".claude/settings.json"}),". Its matcher catches ",(0,n.jsx)(r.code,{children:"release"})," on every server. The empty ",(0,n.jsx)(r.code,{children:"args"})," list makes Claude Code run the script directly instead of through a shell. With ",(0,n.jsx)(r.code,{children:"onFailure"})," set to ",(0,n.jsx)(r.code,{children:"block"}),", Claude Code blocks the release if the script can't start or times out:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "^mcp__.*__release$",
        "hooks": [
          { "type": "command",
            "command": "\${CLAUDE_PROJECT_DIR}/.claude/hooks/release-gate.sh",
            "args": [],
            "onFailure": "block" }
        ]
      }
    ]
  }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"onFailure"})," needs Claude Code 2.1.295 or later. On Windows outside WSL, this script can't start, so every release is blocked."]}),`
`,(0,n.jsxs)(r.p,{children:["Save the gate itself as ",(0,n.jsx)(r.code,{children:".claude/hooks/release-gate.sh"})," and make it executable with ",(0,n.jsx)(r.code,{children:"chmod +x"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`#!/bin/bash
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
    route="Open a change ticket at https://change.example.com/new for version $version, \\
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
`})}),`
`,(0,n.jsxs)(r.p,{children:["In the script, ",(0,n.jsx)(r.code,{children:"version"})," and ",(0,n.jsx)(r.code,{children:"ticket"})," are the inputs Claude passes to the ",(0,n.jsx)(r.code,{children:"release"})," tool. ",(0,n.jsx)(r.code,{children:"change-ticket"})," stands for your change system's own command-line tool. The gate depends on the agent having no way to write to the records it reads."]}),`
`,(0,n.jsxs)(r.p,{children:["In a non-interactive run nobody can answer an ",(0,n.jsx)(r.code,{children:"ask"}),", so Claude Code denies the call. That is why the gate allows staging from the pipeline on ",(0,n.jsx)(r.code,{children:"main"}),", where the approved merge is the approval."]}),`
`,(0,n.jsx)(r.p,{children:"The gate has three limits:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["An engineer could set ",(0,n.jsx)(r.code,{children:"GITHUB_REF"})," by hand in their own session, although doing that skips only the prompt they would have answered themselves."]}),`
`,(0,n.jsxs)(r.li,{children:["The script tells the environments apart by server name, and a server's name is a label chosen by whoever adds the server. The managed settings below allow any server whose URL matches ",(0,n.jsx)(r.code,{children:"https://deploy.example.com/*"}),", whatever its name, so a server named ",(0,n.jsx)(r.code,{children:"deploy-dev"})," could point at production. Have the production deployment server also check the change ticket."]}),`
`,(0,n.jsxs)(r.li,{children:["The script runs with the environment of the session that starts it, so an engineer who changes that environment can still change its answer, even to allow a production release. It calls ",(0,n.jsx)(r.code,{children:"jq"})," by absolute path. If ",(0,n.jsx)(r.code,{children:"jq"})," is missing or exits with an error, the script blocks the call."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["The reason on an ",(0,n.jsx)(r.code,{children:"ask"})," is shown to the person. The reason on a ",(0,n.jsx)(r.code,{children:"deny"})," is shown to Claude, so the block message names the route to approval for Claude to pass on. The staging result comes first, then production with no ticket:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "ask",
    "permissionDecisionReason": "This ships 4f2c9e1 to staging. Approve only if you own this release."
  }
}
`})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Production needs an approved change ticket. Open a change ticket at https://change.example.com/new for version 4f2c9e1, wait for the release manager to approve it, then call release again with that ticket number."
  }
}
`})}),`
`,(0,n.jsx)(r.h2,{id:"governance-considerations",children:"Governance considerations"}),`
`,(0,n.jsxs)(r.p,{children:["Hooks are the approval gates. An engineer's own settings can't switch off a gate in managed settings, though the limits above and the delivery limits in the next section still apply. A gate in the project's ",(0,n.jsx)(r.code,{children:".claude/settings.json"})," is one an engineer can switch off, for example with ",(0,n.jsx)(r.code,{children:"disableAllHooks"})," in their local settings. Once OpenTelemetry events are exported, Claude Code can log allow and block decisions with a timestamp, though older builds leave no record when a managed hook refuses a direct tool call. The gate also defines what counts as approval, whether that's an approved change ticket or the release manager's sign-off."]}),`
`,(0,n.jsx)(r.h2,{id:"managed-settings-for-a-regulated-enterprise",children:"Managed settings for a regulated enterprise"}),`
`,(0,n.jsxs)(r.p,{children:["Managed settings for a regulated enterprise, deployed by the platform team via mobile device management (MDM) or the admin console. An engineer's own settings files, project files, and ",(0,n.jsx)(r.code,{children:"--settings"})," values can't override a value set here. How the settings are delivered matters too, and the end of this section covers it. Claude Code normally adds entries from an engineer's own settings to a managed list. The sample also sets the keys that stop those entries from widening the managed permission rules, network domains, readable paths, and MCP server list. See below:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
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
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What the settings do, in control terms:"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Permissions:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"permissions.deny"})," stops Claude's file tools, and by default sandboxed commands, from reading the project's ",(0,n.jsx)(r.code,{children:".env"})," files and its ",(0,n.jsx)(r.code,{children:"./secrets"})," folder. It also blocks the WebFetch tool and the usual ",(0,n.jsx)(r.code,{children:"curl"})," and ",(0,n.jsx)(r.code,{children:"wget"})," commands."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"permissions.allow"})," lets the listed ",(0,n.jsx)(r.code,{children:"git"})," and ",(0,n.jsx)(r.code,{children:"make"})," commands run without a prompt."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"allowManagedPermissionRulesOnly"})," makes managed settings the only settings source of permission rules. Claude Code ignores the allow, ask, and deny rules in an engineer's or a project's settings, and it ignores ",(0,n.jsx)(r.code,{children:"--allowedTools"}),". ",(0,n.jsx)(r.code,{children:"--disallowedTools"})," still applies, because it can only restrict."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"disableBypassPermissionsMode"})," stops anyone from entering ",(0,n.jsx)(r.code,{children:"bypassPermissions"})," mode."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"disableAutoMode"})," removes auto mode from the ",(0,n.jsx)(r.code,{children:"Shift+Tab"})," cycle. A session that would have started in auto mode starts in Manual mode (",(0,n.jsx)(r.code,{children:"default"}),") instead, whether ",(0,n.jsx)(r.code,{children:"--permission-mode auto"}),", a settings file, or the built-in default chose it. So under this policy, auto mode isn't available in the plan mode play from ",(0,n.jsx)(r.strong,{children:"Stage 3: Build"}),", and approving a plan offers auto-accept edits instead."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Sandbox:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"sandbox"})," covers what permissions cannot. A tool-level deny on WebFetch doesn't stop a shell command reaching the network. Inside the sandbox a shell command has no direct route out, and each connection is checked against ",(0,n.jsx)(r.code,{children:"allowedDomains"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"allowManagedDomainsOnly"})," closes a gap in that list. On its own, ",(0,n.jsx)(r.code,{children:"allowedDomains"})," only skips the approval prompt for the hosts on it, so an engineer could still approve another host or add one in their own settings. With ",(0,n.jsx)(r.code,{children:"allowManagedDomainsOnly"})," set, only the managed list counts, and any other host is refused without a prompt."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"failIfUnavailable"})," and ",(0,n.jsx)(r.code,{children:"allowUnsandboxedCommands"})," turn the sandbox into a precondition. On an engineer's machine, Claude Code refuses to start when the platform is unsupported or a sandbox dependency is missing, and refuses each sandboxed command if the sandbox fails later. A command that fails inside the sandbox can't be retried outside it."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"autoAllowBashIfSandboxed"})," set to ",(0,n.jsx)(r.code,{children:"false"})," sends sandboxed commands through the regular permission flow, so the allow rules and the permission mode decide whether Claude Code asks before it runs a command. The sample sets it because its default differs between Claude Code versions, and because a repository's settings could otherwise change it."]}),`
`,(0,n.jsx)(r.li,{children:"The sandbox has limits. It covers only the shell commands Claude runs. Hooks and local MCP servers run outside it, so the hook and MCP settings below restrict them."}),`
`,(0,n.jsxs)(r.li,{children:["An engineer can still type a command at the ",(0,n.jsx)(r.code,{children:"!"})," prompt and run it outside the sandbox, with the same access they have in any terminal outside Claude Code."]}),`
`,(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/sandboxing#keep-developers-from-widening-the-policy",children:"sandboxing docs"})," list the keys that an engineer's own settings could turn on to weaken the sandbox, such as ",(0,n.jsx)(r.code,{children:"sandbox.network.allowAllUnixSockets"}),". The sample sets each of them to ",(0,n.jsx)(r.code,{children:"false"}),", so an engineer's own settings can't turn any of them on."]}),`
`,(0,n.jsxs)(r.li,{children:["Most of the other settings that loosen the sandbox have no managed-only lock, so an engineer's own settings can still change them. For example, ",(0,n.jsx)(r.code,{children:"sandbox.excludedCommands"})," runs commands outside the sandbox, and ",(0,n.jsx)(r.code,{children:"sandbox.filesystem.allowWrite"})," lets sandboxed commands write to more paths."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"credentials"})," covers credential files the deny rules don't name. By default the sandbox also keeps sandboxed commands away from the paths in ",(0,n.jsx)(r.code,{children:"Read"})," deny rules. But the sample's deny rules name only ",(0,n.jsx)(r.code,{children:".env"})," files and ",(0,n.jsx)(r.code,{children:"./secrets"}),", and by default a sandboxed command can read most of the machine, ",(0,n.jsx)(r.code,{children:"~/.ssh"})," and ",(0,n.jsx)(r.code,{children:"~/.aws/credentials"})," included. This block denies those reads and strips the listed secrets from the environment of sandboxed commands."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"allowManagedReadPathsOnly"})," stops an ",(0,n.jsx)(r.code,{children:"allowRead"})," entry in an engineer's own settings from reopening the denied paths."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Hooks:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"allowManagedHooksOnly"})," means only hooks defined in managed settings run, along with Agent SDK hooks and hooks from plugins the managed settings force-enable."]}),`
`,(0,n.jsxs)(r.li,{children:["Hooks in user, project, and local settings don't run under ",(0,n.jsx)(r.code,{children:"allowManagedHooksOnly"}),". So the standalone ",(0,n.jsx)(r.code,{children:".claude/settings.json"})," example above and the team hooks from step 3 don't run. Nor do the ",(0,n.jsx)(r.code,{children:"api-policy.sh"})," hook from ",(0,n.jsx)(r.strong,{children:"Stage 3: Build"})," and the test-file and verification hooks from ",(0,n.jsx)(r.strong,{children:"Stage 4: Test"}),", while they sit in a repo's settings."]}),`
`,(0,n.jsxs)(r.li,{children:["The sample's own ",(0,n.jsx)(r.code,{children:"hooks"})," block defines this play's approval gate, so the gate stays enforced. The entry names the script by absolute path, in a folder only an administrator can write to. A path under ",(0,n.jsx)(r.code,{children:"${CLAUDE_PROJECT_DIR}"})," would point at the engineer's own checkout, where they could edit the script to allow every call."]}),`
`,(0,n.jsxs)(r.li,{children:["Settings delivered from the admin console can carry that ",(0,n.jsx)(r.code,{children:"hooks"})," entry, but not the script file itself, so MDM installs the script on each machine."]}),`
`,(0,n.jsxs)(r.li,{children:["With ",(0,n.jsx)(r.code,{children:"onFailure"})," set to ",(0,n.jsx)(r.code,{children:"block"}),", Claude Code blocks the call when the script can't start, times out, or exits with an unexpected code."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Plugins:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"strictKnownMarketplaces"}),", ",(0,n.jsx)(r.code,{children:"disableSideloadFlags"}),", ",(0,n.jsx)(r.code,{children:"strictPluginOnlyCustomization"}),", and ",(0,n.jsx)(r.code,{children:"syncClaudeAiPlugins"})," control where skills, agents, and plugins come from."]}),`
`,(0,n.jsxs)(r.li,{children:["The marketplace allowlist, ",(0,n.jsx)(r.code,{children:"strictKnownMarketplaces"}),", controls which plugins can be installed. It doesn't register anything. To put a plugin on every machine, and to keep its hooks running under ",(0,n.jsx)(r.code,{children:"allowManagedHooksOnly"}),", the managed file also needs ",(0,n.jsx)(r.code,{children:"extraKnownMarketplaces"}),", which registers the marketplace on each machine, and ",(0,n.jsx)(r.code,{children:"enabledPlugins"}),", which names the plugins to install and enable from it."]}),`
`,(0,n.jsxs)(r.li,{children:["At startup, ",(0,n.jsx)(r.code,{children:"disableSideloadFlags"})," rejects the flags that would sideload a plugin, agent, or MCP config for a single run."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"strictPluginOnlyCustomization"})," blocks the skills and agents kept in a home directory or in a repo's ",(0,n.jsx)(r.code,{children:".claude/"})," folder, which neither the marketplace allowlist nor the sideload block covers. Claude Code still loads bundled skills, built-in agents, and skills and agents from the managed policy directory or from plugins, except skills-directory plugins. So ",(0,n.jsx)(r.code,{children:"strictPluginOnlyCustomization"})," rules out the skills and subagents checked into a repo in ",(0,n.jsx)(r.strong,{children:"Stage 3: Build"}),", and under this policy teams share them through a plugin in the approved marketplace."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"strictPluginOnlyCustomization"})," also stops custom slash commands from loading from a repo's or an engineer's ",(0,n.jsx)(r.code,{children:".claude/commands/"})," or ",(0,n.jsx)(r.code,{children:".claude/skills/"})," folder. The commands in ",(0,n.jsx)(r.strong,{children:"Stage 2: Design"})," and the PR review play in ",(0,n.jsx)(r.strong,{children:"Stage 5: Deploy"})," are among them, if they're kept there."]}),`
`,(0,n.jsxs)(r.li,{children:["Setting ",(0,n.jsx)(r.code,{children:"syncClaudeAiPlugins"})," to ",(0,n.jsx)(r.code,{children:"false"})," stops Claude Code from downloading and loading the plugins enabled for an engineer's claude.ai account."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"MCP:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"allowedMcpServers"})," and ",(0,n.jsx)(r.code,{children:"allowManagedMcpServersOnly"})," together give the platform team an allowlist for the MCP servers that engineers, projects, and plugins add."]}),`
`,(0,n.jsx)(r.li,{children:"The list names the approved servers by URL, here the deployment servers. Because every entry is a URL, local servers that run as a command on the engineer's machine are blocked."}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"allowManagedMcpServersOnly"})," makes that managed list the only allowlist that applies. It restricts nothing on its own. If the managed settings don't also set ",(0,n.jsx)(r.code,{children:"allowedMcpServers"}),", every server that passes the denylist loads."]}),`
`,(0,n.jsxs)(r.li,{children:["A server listed in a ",(0,n.jsx)(r.code,{children:".mcp.json"})," file loads only if it matches the list, and ",(0,n.jsx)(r.code,{children:"claude mcp add"})," refuses one that doesn't. Servers built into Claude Code, such as Claude in Chrome, skip the allowlist, and a ",(0,n.jsx)(r.code,{children:"deniedMcpServers"})," entry blocks a built-in server."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Version:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["With ",(0,n.jsx)(r.code,{children:"requiredMinimumVersion"})," set, Claude Code refuses to start on a version below the floor, which keeps out older builds that lack some of these settings or enforce them less completely. The key itself arrived in a build from early June 2026, and it works only on that build and later ones."]}),`
`,(0,n.jsxs)(r.li,{children:["Later releases have fixed further gaps in how these settings are enforced, so raise the floor as the organization approves newer builds. Newer versions still start. To keep engineers on versions the organization has assessed, also set ",(0,n.jsx)(r.code,{children:"requiredMaximumVersion"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Treat the example as a starting point to customize to your own environment. Each deny rule removes some capability, and the right balance depends on the data classification of the repo. The ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/settings-reference",children:"settings reference"})," documents all keys, including the managed-only ones."]}),`
`,(0,n.jsxs)(r.p,{children:["Settings delivered from the admin console are a client-side control that an engineer can get around on a device the organization doesn't manage. They are also bypassed when Claude Code is set to use a third-party provider such as Amazon Bedrock or Google Cloud's Agent Platform. Claude Code can apply its local cache of console settings at startup, so an engineer's edit to that cache can apply until the next successful fetch. The ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/server-managed-settings#security-considerations",children:"security considerations"})," for admin console delivery list each case. For stronger enforcement, deliver the file through MDM to enrolled devices."]}),`
`,(0,n.jsxs)(r.p,{children:["By default Claude Code uses only the first managed source that delivers a policy key, and it checks the admin console first. So if the admin console sets even one policy key, Claude Code ignores the MDM copy without a warning, except for the ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/managed-settings#keys-read-from-every-admin-source",children:"keys read from every source"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-measure-it",children:"How to measure it"}),`
`,(0,n.jsx)(r.p,{children:"For the hooks themselves:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leading indicator"}),": Time spent waiting on each approval gate. Once OpenTelemetry events are exported, which takes ",(0,n.jsx)(r.code,{children:"CLAUDE_CODE_ENABLE_TELEMETRY"})," and ",(0,n.jsx)(r.code,{children:"OTEL_LOGS_EXPORTER"}),", a permission decision event records a timestamp, an allow or block verdict, and whether a hook made the decision. Builds released before mid-November 2026, the sample's floor among them, leave no such record when a managed hook refuses a direct tool call."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lagging indicator"}),": Gate violations reaching production before and after hooks, from the incident tracker."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};