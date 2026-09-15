import{Gp as e,qp as t}from"../../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Skills are how an organization makes its institutional knowledge operational. The instructions are explicit, version controlled, applied broadly, and updated centrally when policy changes. The rule of thumb: write a skill for institutional knowledge that must be applied consistently; don't write a skill ",(0,n.jsx)(r.a,{href:"https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more",children:"for components that belong"})," in ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," or a prompt."]}),`
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
`,(0,n.jsx)(r.p,{children:"A skill is a control, though an advisory one. It makes Claude likely to apply the policy while the code is written, and nothing forces a session to comply with it. A policy that must always hold needs something deterministic behind the skill, such as a hook that blocks the action or a review pass that re-checks the policy at the PR. The skill makes violations rare and the hook makes them close to impossible. Skill invocations are logged in session traces, and the policy owner reviews skill changes like code."}),`
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
`,(0,n.jsxs)(r.p,{children:["A hook that asks a human for approval belongs with the gates in ",(0,n.jsx)(r.strong,{children:"Stage 5: Deploy"}),", because an approval prompt during the build puts a person back on the critical path of all the sessions running in parallel."]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};