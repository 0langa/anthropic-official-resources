import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Run Claude Code non-interactively inside the CI/CD pipeline, sandbox the execution so long-running agents run safely, expose deployment through MCP integrations, and rehearse the rollback paths before the agent ever needs them."}),`
`,(0,n.jsx)(r.h2,{id:"what-changes",children:"What changes"}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Traditional"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"AI-native"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Pipelines run deterministic scripts, and anything that needs judgment waits for a human: for example, triaging the flaky test, writing the changelog, or working out why the build broke. Deployment and rollback are runbooks a human follows under pressure."}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Claude runs non-interactively inside the pipeline for the judgment steps, in a sandbox with scoped credentials. Deployment tooling is exposed to the agent through MCP, so the workflow that wrote and tested the change can also ship it and roll it back, inside gates the organization defines per environment."})]})})]}),`
`,(0,n.jsx)(r.h2,{id:"getting-started",children:"Getting started"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prerequisites"}),": AI in the PR review loop and hooks as approval gates, because the gates must exist before automation accelerates anything through them."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Infrastructure"}),": A CI platform with the claude-code-action installed, or any runner that can call ",(0,n.jsx)(r.code,{children:"claude -p"}),"; model access through the API, or Amazon Bedrock, Microsoft Foundry, or Vertex AI where traffic must stay on the organization's cloud agreement; MCP servers for the deployment targets; a sandbox profile for agent jobs with no standing production credentials."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-execute-it",children:"How to execute it"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["The platform engineer starts with read-only judgment steps. Use ",(0,n.jsx)(r.code,{children:"claude -p"})," in a pipeline job to triage a failed build, summarize a flaky test, or draft the changelog."]}),`
`,(0,n.jsxs)(r.li,{children:["Add write steps behind the existing gates for jobs like fixing lint, updating generated docs, or addressing review comments via the ",(0,n.jsx)(r.code,{children:"@claude"})," mentions. Anything the agent writes arrives as a PR through branch protection, and the agent has no route to push to main."]}),`
`,(0,n.jsx)(r.li,{children:"Execution is sandboxed. Agent jobs run in containers under a network policy with short-lived scoped tokens, and hold no production credentials by default."}),`
`,(0,n.jsx)(r.li,{children:"Expose deployment through MCP. Deploy, status, and rollback become tools, scoped per environment, so the agent's deployment powers are an allowlist rather than a shell script with credentials."}),`
`,(0,n.jsx)(r.li,{children:"Tier the autonomy by environment. In development, the agent deploys freely. In production, the agent prepares the release and the release manager authorizes it, and a hook enforces the production gate. Staging sits somewhere in the middle."}),`
`,(0,n.jsxs)(r.li,{children:["Rollback should be the most rehearsed path in the pipeline, a single command that the agent can run and that is exercised regularly in staging. The closing the loop play (",(0,n.jsx)(r.strong,{children:"Stage 6: Maintain"}),") calls this rollback when a control band is breached, so it has to be proven in advance."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"what-it-looks-like",children:"What it looks like"}),`
`,(0,n.jsx)(r.p,{children:"Pipeline step:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:`- name: Triage failed build
  if: failure()
  run: >
    claude -p "Read the build log at out/build.log. Identify the most
    likely cause, say whether the failure looks flaky or real, and write a
    three-line summary for the PR thread." >> triage.md
`})}),`
`,(0,n.jsx)(r.h2,{id:"governance-considerations",children:"Governance considerations"}),`
`,(0,n.jsx)(r.p,{children:"The governing principle is that the agent may act up to the production gate and cannot pass it. The controls below enforce this principle."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Branch protection"})," turns anything the agent writes into a PR, with no direct path to main."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"The production deploy hook"})," blocks the release until a named release manager authorizes it. Each non-interactive run acts under the agent's own identity, so the pipeline log separates what the agent did from what the engineer who triggered it did."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Per-environment permission tiers"})," set how much the agent may do on the way to the gate."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-measure-it",children:"How to measure it"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leading indicator"}),": The share of pipeline failures triaged without paging a human, taken from the CI/CD pipeline logs."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lagging indicator"}),": DevOps Research and Assessment (DORA) measures, which the CI system and deployment tooling already emit."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};