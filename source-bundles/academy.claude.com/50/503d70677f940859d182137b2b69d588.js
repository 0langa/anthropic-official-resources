import{Nm as e,jm as t}from"../../../../../content-de-meta-jksdfebu.js";var n=t();function r(t){let r={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Run Claude Code non-interactively inside the CI/CD pipeline, sandbox the execution so long-running agents run safely, expose deployment through MCP integrations, and rehearse the rollback paths before the agent ever needs them."}),`
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
`,(0,n.jsxs)(r.p,{children:["The rest of this example is an insurer's customer portal, with deployment exposed as tools and one MCP server per environment. A rule that allows an MCP tool names the server and the tool, not the tool's arguments. So a separate server per environment is what lets an allowlist tell staging from production. The servers are set up in the project's ",(0,n.jsx)(r.code,{children:".mcp.json"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "mcpServers": {
    "deploy-dev": {
      "type": "http",
      "url": "https://deploy.example.com/mcp/dev",
      "headers": { "Authorization": "Bearer \${DEPLOY_DEV_TOKEN}" }
    },
    "deploy-staging": {
      "type": "http",
      "url": "https://deploy.example.com/mcp/staging",
      "headers": { "Authorization": "Bearer \${DEPLOY_STAGING_TOKEN}" }
    },
    "deploy-prod": {
      "type": "http",
      "url": "https://deploy.example.com/mcp/prod",
      "headers": { "Authorization": "Bearer \${DEPLOY_PROD_TOKEN}" }
    }
  }
}
`})}),`
`,(0,n.jsx)(r.p,{children:"Every server offers the same three tools:"}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Tool"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Input"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Returns"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"release"})}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.code,{children:"version"}),", and in production a ",(0,n.jsx)(r.code,{children:"ticket"})]}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"The release ID, once the rollout finishes"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"status"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"None"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Waits until five minutes after the last release, then returns each endpoint's 5xx rate over that time"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"rollback"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"None"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"The version that is live again"})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:["The staging job runs on a push to ",(0,n.jsx)(r.code,{children:"main"})," and pre-approves the staging server's three tools and no others. It holds the staging token only, so the other two servers get no valid token and refuse the job. This is the pipeline step for the staging job:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:`- name: Release to staging and roll back if it is unhealthy
  env:
    ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
    DEPLOY_STAGING_TOKEN: \${{ secrets.DEPLOY_STAGING_TOKEN }}   # no other environment's token
  run: >
    claude -p "Release version \${{ github.sha }} of the claims portal to staging,
    then call status. If the 5xx rate on any endpoint is over 1%, roll back.
    Finish with three lines for the release notes: what you released, what status
    reported, and whether you rolled back."
    --allowedTools "mcp__deploy-staging__release,mcp__deploy-staging__status,mcp__deploy-staging__rollback"
    --permission-mode dontAsk >> release-notes.md
`})}),`
`,(0,n.jsxs)(r.p,{children:["In ",(0,n.jsx)(r.code,{children:"dontAsk"})," mode Claude Code denies any call that would otherwise prompt, so a deployment tool off the list is refused and the job never waits for an answer."]}),`
`,(0,n.jsxs)(r.p,{children:["One ",(0,n.jsx)(r.code,{children:"PreToolUse"})," hook on the ",(0,n.jsx)(r.code,{children:"release"})," tools decides per environment. It is written out in the hooks as approval gates play, and it gives three tiers:"]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Environment"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Tools on the allowlist"}),(0,n.jsxs)(r.th,{style:{textAlign:"left"},children:["What happens to ",(0,n.jsx)(r.code,{children:"release"})]}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Who approves"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Dev"}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.code,{children:"release"}),", ",(0,n.jsx)(r.code,{children:"status"}),", ",(0,n.jsx)(r.code,{children:"rollback"})]}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"The hook allows it"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Nobody"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Staging"}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.code,{children:"release"}),", ",(0,n.jsx)(r.code,{children:"status"}),", ",(0,n.jsx)(r.code,{children:"rollback"})]}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:["The hook asks, or allows it from the pipeline on ",(0,n.jsx)(r.code,{children:"main"})]}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"The engineer, or the approved merge"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Production"}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,n.jsx)(r.code,{children:"status"}),", ",(0,n.jsx)(r.code,{children:"rollback"})]}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Denied unless the hook allows it"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"The release manager, through the change ticket"})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:["In production, ",(0,n.jsx)(r.code,{children:"dontAsk"})," mode still runs a call that a ",(0,n.jsx)(r.code,{children:"PreToolUse"})," hook approves, so with ",(0,n.jsx)(r.code,{children:"release"})," off the allowlist the hook's ",(0,n.jsx)(r.code,{children:"allow"})," is the only way through. Production therefore fails closed, because a release is denied if the hook fails to run. ",(0,n.jsx)(r.code,{children:"rollback"})," stays on the allowlist because it is a runbook approved in advance."]}),`
`,(0,n.jsxs)(r.p,{children:["If the runner carries managed settings with ",(0,n.jsx)(r.code,{children:"allowManagedHooksOnly"}),", the hook has to be defined in the managed settings, and with ",(0,n.jsx)(r.code,{children:"allowManagedMcpServersOnly"})," the servers have to be on the managed allowlist."]}),`
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