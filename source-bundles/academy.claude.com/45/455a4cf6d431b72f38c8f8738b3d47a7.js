import{$f as e,Zf as t}from"../../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The build phase used hooks as guardrails, allowing or blocking actions with no human involved (",(0,n.jsx)(r.strong,{children:"Stage 3: Build"}),"). A hook can also ask, pausing the action until a specific person approves, which is what release gating needs."]}),`
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
`,(0,n.jsxs)(r.p,{children:["A standalone example in the project's ",(0,n.jsx)(r.code,{children:".claude/settings.json"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command",
            "command": "\${CLAUDE_PROJECT_DIR}/.claude/hooks/production-gate.sh" }
        ]
      }
    ]
  }
}
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.strong,{children:["And the gate itself (",(0,n.jsx)(r.code,{children:".claude/hooks/production-gate.sh"}),"):"]})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`#!/bin/bash
# Production deploys require a named release authorization
cmd=$(jq -r '.tool_input.command' < /dev/stdin)
if [[ "$cmd" == *"deploy"* && "$cmd" == *"production"* ]]; then
  if [ -z "$RELEASE_APPROVAL" ]; then
    echo "Production deploys need a release authorization." >&2
    exit 2   # exit 2 blocks the action; the message goes to Claude
  fi
fi
exit 0
`})}),`
`,(0,n.jsx)(r.h2,{id:"governance-considerations",children:"Governance considerations"}),`
`,(0,n.jsx)(r.p,{children:"Hooks are the approval gates. The gate condition is enforced every time, for everyone. Allow and block decisions are logged with a timestamp. The gate also defines what counts as approval, whether that's an approved change ticket or the release manager's sign-off."}),`
`,(0,n.jsx)(r.h2,{id:"managed-settings-for-a-regulated-enterprise",children:"Managed settings for a regulated enterprise"}),`
`,(0,n.jsx)(r.p,{children:"Managed settings for a regulated enterprise, deployed by the platform team via mobile device management (MDM) or the admin console. Engineers cannot edit or override any of the settings therein. See below:"}),`
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
  "sandbox": {
    "enabled": true,
    "failIfUnavailable": true,
    "allowUnsandboxedCommands": false,
    "network": { "allowedDomains": ["git.internal.example.com", "registry.npmjs.org"] },
    "credentials": {
      "files": [
        { "path": "~/.ssh", "mode": "deny" },
        { "path": "~/.aws/credentials", "mode": "deny" }
      ],
      "envVars": [ { "name": "GITHUB_TOKEN", "mode": "deny" } ]
    }
  },
  "allowManagedHooksOnly": true,
  "disableSideloadFlags": true,
  "allowManagedMcpServersOnly": true,
  "strictKnownMarketplaces": [
    { "source": "github", "repo": "example-corp/approved-plugins" }
  ],
  "requiredMinimumVersion": "2.1.193"
}
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What the settings do, in control terms:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"permissions.deny"})," keeps secrets out of the agent's context and blocks arbitrary network egress through tools. ",(0,n.jsx)(r.code,{children:"permissions.allow"})," pre-approves the safe inner loop so the deny list doesn't turn into prompt fatigue."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"disableBypassPermissionsMode"})," plus ",(0,n.jsx)(r.code,{children:"allowManagedPermissionRulesOnly"})," means no engineer, project file, or command-line flag can widen the rules."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"sandbox"})," covers what permissions cannot. A tool-level deny on WebFetch doesn't stop a shell command reaching the network, whereas the OS-level domain allowlist blocks egress outright, so the two enforce one objective at different layers. ",(0,n.jsx)(r.code,{children:"failIfUnavailable"})," and ",(0,n.jsx)(r.code,{children:"allowUnsandboxedCommands"})," turn the sandbox into a precondition, meaning Claude Code refuses to start when the sandbox cannot initialize and a command that fails inside the sandbox cannot be retried outside it."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"credentials"})," handles a case the deny rules miss. ",(0,n.jsx)(r.code,{children:"permissions.deny"})," governs Claude's file tools, but a sandboxed shell command could still read ",(0,n.jsx)(r.code,{children:"~/.ssh"})," or ",(0,n.jsx)(r.code,{children:"~/.aws/credentials"})," by default. This block denies those reads and strips the listed secrets from the environment of sandboxed commands."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"allowManagedHooksOnly"})," means only hooks defined in managed settings run; hooks in user, project, and local settings are blocked, including the standalone ",(0,n.jsx)(r.code,{children:".claude/settings.json"})," example above. To keep this play's approval gate enforced, define it in the managed file's own ",(0,n.jsx)(r.code,{children:"hooks"})," block."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"disableSideloadFlags"})," and ",(0,n.jsx)(r.code,{children:"strictKnownMarketplaces"})," mean that any skill, agent, hook, or MCP server on an engineer's machine came through the organization's approved plugin marketplace and not from a home directory. The marketplace allowlist controls what can be installed, and the flags that would sideload a plugin, agent, or MCP config for a single run are rejected at startup."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"allowManagedMcpServersOnly"})," makes the agent's tool surface an allowlist owned by the platform team."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"requiredMinimumVersion"})," refuses to start on a version below the approved floor, so the controls are enforced by a build the organization has actually assessed."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Treat the example as a starting point to customize to your own environment. Each deny rule removes some capability, and the right balance depends on the data classification of the repo. The ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/settings",children:"settings reference"})," documents all keys, including the managed-only ones."]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-measure-it",children:"How to measure it"}),`
`,(0,n.jsx)(r.p,{children:"For the hooks themselves:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leading indicator"}),": Time spent waiting on each approval gate. Every hook decision is written to the OpenTelemetry export with a timestamp and an allow or block verdict, so the wait is visible per gate."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lagging indicator"}),": Gate violations reaching production before and after hooks, from the incident tracker."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};