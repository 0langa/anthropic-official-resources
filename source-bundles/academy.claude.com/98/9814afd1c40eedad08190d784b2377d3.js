import{Nm as e,jm as t}from"../../../../../content-de-meta-jksdfebu.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Skills are how an organization makes its institutional knowledge operational. The instructions are explicit, version controlled, applied broadly, and updated centrally when policy changes. The rule of thumb: write a skill for institutional knowledge that must be applied consistently; don't write a skill ",(0,n.jsx)(r.a,{href:"https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more",children:"for components that belong"})," in ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," or a prompt."]}),`
`,(0,n.jsx)(r.h2,{id:"getting-started",children:"Getting started"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prerequisites"}),": None required. Having a ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," helps, because it keeps the agent's working knowledge in the repo, but a skill does not depend on it."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Infrastructure"}),": One policy with a named owner and a written source of truth."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-execute-it",children:"How to execute it"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Pick one piece of knowledge that is enforced inconsistently today. This could be a security standard, an API design convention, or a brand rule."}),`
`,(0,n.jsxs)(r.li,{children:["Write it as a skill, a folder containing a ",(0,n.jsx)(r.code,{children:"SKILL.md"})," whose frontmatter says when it triggers and whose body says what to do. An engineer writes it from the policy owner's source of truth, using Claude to help."]}),`
`,(0,n.jsxs)(r.li,{children:["Put the skill in the repo at ",(0,n.jsx)(r.code,{children:".claude/skills/<name>/"})," so it ships with the code, or distribute it organization-wide through a plugin."]}),`
`,(0,n.jsx)(r.li,{children:"Test that the skill triggers. Ask Claude to do the relevant task in different ways and confirm the skill loads each time."}),`
`,(0,n.jsx)(r.li,{children:"When the policy changes, change the skill and have the policy owner sign off on the change."}),`
`,(0,n.jsx)(r.li,{children:"Engineers pick up the new version automatically in their next session."}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"what-it-looks-like",children:"What it looks like"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:".claude/skills/secure-api-review/SKILL.md"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-markdown",children:`---
name: secure-api-review
description: Apply the API security standard. Use whenever creating or
  modifying an external-facing endpoint, reviewing API code, or
  generating an OpenAPI spec.
---
# Secure API review
When you create or change an API endpoint:
1. Authentication: every endpoint requires the gateway JWT;
   no anonymous routes outside /health.
2. Input validation: validate request bodies against the OpenAPI
   schema and reject unknown fields.
3. Audit: every state-changing endpoint emits an audit event with
   actor, action, entity and timestamp.
4. Data classification: fields tagged pii in the schema must never
   appear in logs or error messages.
Run scripts/check-endpoints.sh and include its output in your summary.
`})}),`
`,(0,n.jsx)(r.h2,{id:"governance-considerations",children:"Governance considerations"}),`
`,(0,n.jsx)(r.p,{children:"A skill is a control, though an advisory one. It makes Claude likely to apply the policy while the code is written, and nothing forces a session to comply with it. A policy that must always hold needs something deterministic behind the skill, such as a hook that blocks the action or a review pass that re-checks the policy at the PR. The skill makes violations rare and the hook makes them close to impossible. The hook catches a violation at the edit, and the same check on the pull request catches anything that reached the branch another way. Skill invocations are logged in session traces, and the policy owner reviews skill changes like code."}),`
`,(0,n.jsx)(r.h2,{id:"how-to-measure-it",children:"How to measure it"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leading indicator"}),": Time from the policy owner approving a policy change to the updated skill merging, taken from the PR on the skill folder."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lagging indicator"}),": PR review findings that cite the policy, which should fall toward zero once the skill is applying the policy while the code is written. Where the findings don't fall toward zero, either the skill isn't triggering or its text has drifted from the official policy."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"hooks-as-build-time-guardrails",children:"Hooks as build-time guardrails"}),`
`,(0,n.jsx)(r.p,{children:"A skill is an advisory control, while a hook is the deterministic layer behind it. Most of Claude's actions are file edits and shell commands during implementation, so the build phase is where hooks can end up firing most often."}),`
`,(0,n.jsx)(r.p,{children:"Build-phase hooks can:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Block edits to protected paths such as generated classes or a frozen package"}),`
`,(0,n.jsx)(r.li,{children:"Run the formatter and linter after file edits so drift never accumulates"}),`
`,(0,n.jsx)(r.li,{children:"Keep credentials out of the diff"}),`
`,(0,n.jsx)(r.li,{children:"Back any skill whose policy has to hold without exception"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"A hook runs on each action that matches it, so build-phase hooks should be fast and scoped to the file that changed. Heavier checks such as the full test suite belong at the commit or the PR."}),`
`,(0,n.jsxs)(r.p,{children:["This is the hook behind rule 4 of the ",(0,n.jsx)(r.code,{children:"secure-api-review"})," skill shown earlier on this page. The repo is an insurer's, and its endpoint files live in ",(0,n.jsx)(r.code,{children:"claims-api/routes/"}),". After each edit to one of those files, the hook runs ",(0,n.jsx)(r.code,{children:"scripts/check-endpoints.sh"}),", the script at the repo root that the skill already names. That script fails when a field tagged ",(0,n.jsx)(r.code,{children:"pii"})," in the OpenAPI schema reaches a log call or a raised error."]}),`
`,(0,n.jsxs)(r.p,{children:["The hook is registered in ",(0,n.jsx)(r.code,{children:".claude/settings.json"}),". The empty ",(0,n.jsx)(r.code,{children:"args"})," list makes Claude Code run the script directly instead of through a shell:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command",
            "command": "\${CLAUDE_PROJECT_DIR}/.claude/hooks/api-policy.sh",
            "args": [] }
        ]
      }
    ]
  }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["The hook script, ",(0,n.jsx)(r.code,{children:".claude/hooks/api-policy.sh"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`#!/bin/bash
# Backs rule 4 of the secure-api-review skill with the same script the skill runs.
file=$(jq -r '.tool_input.file_path')
case "$file" in
  "$CLAUDE_PROJECT_DIR"/claims-api/routes/*.py) ;;
  *) exit 0 ;;                                   # not an endpoint
esac
cd "$CLAUDE_PROJECT_DIR" || exit 2
if ! found=$(scripts/check-endpoints.sh "\${file#"$CLAUDE_PROJECT_DIR"/}"); then
  echo "secure-api-review rule 4: a pii field reaches a log or an error message." >&2
  echo "$found" >&2
  exit 2
fi
`})}),`
`,(0,n.jsx)(r.p,{children:"A hook that runs after an edit cannot undo it, so exit code 2 puts the script's message in front of Claude, which can then fix the line. After an edit that logs a customer's name, this is the message Claude sees from the script:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-text",children:`secure-api-review rule 4: a pii field reaches a log or an error message.
claims-api/routes/status.py:10: policy_holder_name
`})}),`
`,(0,n.jsxs)(r.p,{children:["An ",(0,n.jsx)(r.code,{children:"Edit|Write"})," hook does not fire when a shell command rewrites the file. For that reason, the same script also runs as a required check on every pull request:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:`name: API policy
on: pull_request
jobs:
  check-endpoints:          # a required check in branch protection
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: scripts/check-endpoints.sh claims-api/routes/*.py
`})}),`
`,(0,n.jsxs)(r.p,{children:["A hook that asks a human for approval belongs with the gates in ",(0,n.jsx)(r.strong,{children:"Stage 5: Deploy"}),", because an approval prompt during the build puts a person back on the critical path of all the sessions running in parallel."]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};