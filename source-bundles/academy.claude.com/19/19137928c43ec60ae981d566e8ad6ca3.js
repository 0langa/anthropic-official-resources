import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Claude both gives and receives reviews. It reviews incoming PRs against the organization's policies and addresses review comments on its own PRs. This allows engineers to focus on behavior in their PR review, which boils down to judging intent and risk."}),`
`,(0,n.jsx)(r.h2,{id:"what-changes",children:"What changes"}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Traditional"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"AI-native"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Review capacity is planned around human output. A PR waits for a reviewer to read all of it, review quality varies with the reviewer's load, and the author chases while the backlog grows."}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"All PRs get an identical set of review passes, with findings ranked by severity. Human attention moves up a level, to whether the change does what the plan intended and whether the risk is acceptable."})]})})]}),`
`,(0,n.jsx)(r.h2,{id:"getting-started",children:"Getting started"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prerequisites"}),": An updated ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," file from ",(0,n.jsx)(r.strong,{children:"Stage 3: Build"}),", skills, if the review passes are to enforce written policies, and defined subagents."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Infrastructure"}),": A repo with the Claude integration installed, either the managed ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/code-review",children:"Code Review"})," (research preview) service enabled by an admin or the claude-code-action running in your own CI, with model calls through Amazon Bedrock, Google Cloud's Vertex AI, or Microsoft Foundry where needed (the CI/CD play covers the deployment options). Branch protection policies that require a code owner's approval are also worthwhile."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-execute-it",children:"How to execute it"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"The managed Code Review service is the fastest start. An admin enables it and selects repositories. Run the review in your own CI with the claude-code-action when you need control of the pipeline or want API calls routed through your own cloud agreement (the CI/CD play covers that plumbing)."}),`
`,(0,n.jsxs)(r.li,{children:["The tech lead writes the review policy as ",(0,n.jsx)(r.code,{children:"REVIEW.md"})," at the repo root, divided into the passes the organization cares about: bugs and logical errors; security and vulnerabilities; compliance against the spec (",(0,n.jsx)(r.code,{children:"spec.md"})," from the requirements play), the implementation plan (",(0,n.jsx)(r.code,{children:"plan.md"})," from the plan mode play), and design principles. ",(0,n.jsx)(r.code,{children:"REVIEW.md"})," also defines what counts as Important as opposed to a Nit, and what to skip."]}),`
`,(0,n.jsx)(r.li,{children:"The tech lead sets the human threshold. Findings do not approve or block a PR on their own, and branch protection still requires approval from a code owner. A platform engineer who wants to gate merges on findings can read the severity counts that the check run publishes as a machine-readable tally."}),`
`,(0,n.jsxs)(r.li,{children:["When a reviewer or the author tags ",(0,n.jsx)(r.code,{children:"@claude"})," on a review comment, Claude addresses the comment and pushes the fix. The PR thread records both the request and the change. This fix loop runs through the claude-code-action. In the managed service, commenting ",(0,n.jsx)(r.code,{children:"@claude review"})," requests a fresh review instead. For PRs Claude opened, go further and let Claude babysit the PR to merge. Teams wrap the loop in a custom slash command that sweeps the unresolved review comments and failing checks on the PR, addresses them, and pushes the fixes, until the PR is green and waiting only on code owner approval."]}),`
`,(0,n.jsxs)(r.li,{children:["Review findings feed back into ",(0,n.jsx)(r.code,{children:"CLAUDE.md"}),". When a review flags a mistake for the second time, the correction goes into ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," as part of that review, and because review reads ",(0,n.jsx)(r.code,{children:"CLAUDE.md"}),", the mistake is caught from the next PR onwards. Review also flags when a change has made ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," outdated."]}),`
`,(0,n.jsxs)(r.li,{children:["Once a month the tech lead tunes the setup by rating findings so the reviewer improves and by capping Nit volume in ",(0,n.jsx)(r.code,{children:"REVIEW.md"}),". Generated paths and anything CI already enforces are excluded."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"what-it-looks-like",children:"What it looks like"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"REVIEW.md"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-markdown",children:`# Review instructions
## Passes
Run three passes and tag each finding with its pass:
- Bugs: logic errors, broken edge cases, subtle regressions
- Security: injection risks, authentication gaps, PII in logs
- Compliance: the change matches spec.md, plan.md and our design principles
## What Important means here
Reserve Important for findings that would break behavior, leak data
or breach a policy. Style and naming are nits.
## Cap the nits
Report at most five nits per review; summarize the rest as a count.
## Do not report
Generated files under src/gen/ and anything CI already enforces.
`})}),`
`,(0,n.jsx)(r.h2,{id:"governance-considerations",children:"Governance considerations"}),`
`,(0,n.jsxs)(r.p,{children:["Separation of duties is preserved, because the agent that wrote the code has no way to approve it. The review policy in ",(0,n.jsx)(r.code,{children:"REVIEW.md"})," is applied to all PRs, and findings, fixes, ratings, and approvals are logged in the PR history, so the PR is the audit record. Approval comes from a human through branch protection, informed by the findings."]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-measure-it",children:"How to measure it"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leading indicator"}),": Time to first review, which should fall to minutes, and the share of review comments resolved without a human touching the branch, with data stored directly on Git."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lagging indicator"}),": Defects and vulnerabilities caught before merge set against those escaping to production, from the PR history and the incident tracker."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};