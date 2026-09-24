import{Qp as e,em as t}from"../../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Engineers start Claude Code sessions in plan mode, give Claude the approved ",(0,n.jsx)(r.code,{children:"spec.md"})," from ",(0,n.jsx)(r.strong,{children:"Stage 2: Design"}),", and let it interview them, iterating on the plan until they are happy with it."]}),`
`,(0,n.jsx)(r.h2,{id:"what-changes",children:"What changes"}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Traditional"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"AI-native"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"An engineer reads the design and starts writing code. How the change will be made, down to which files and which tests, stays in the engineer's head or at best in a ticket comment. Nobody else can review it. The first thing a reviewer sees is the finished diff, and by then rework is slow."}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:["Work starts with a written plan that Claude produces in plan mode, where it can read the codebase without changing anything. The engineer corrects the plan before code is written, and the approved version is committed as ",(0,n.jsx)(r.code,{children:"plan.md"})," for later stages to check against."]})]})})]}),`
`,(0,n.jsx)(r.h2,{id:"getting-started",children:"Getting started"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prerequisites"}),": The intent artifact (",(0,n.jsx)(r.code,{children:"intent.md"})," or ",(0,n.jsx)(r.code,{children:"spec.md"}),") if one exists, and the ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," file helps."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Infrastructure"}),": Claude Code with access to the repository."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-execute-it",children:"How to execute it"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"The engineer starts the session in plan mode with Claude."}),`
`,(0,n.jsxs)(r.li,{children:["The engineer gives Claude the ",(0,n.jsx)(r.code,{children:"intent.md"})," and the ",(0,n.jsx)(r.code,{children:"spec.md"})," and asks for an implementation plan that names the files that change, the order of the work, and the tests that prove it."]}),`
`,(0,n.jsx)(r.li,{children:"Interrogate the plan by asking what the change could break, which step is most risky, and what other options Claude chose not to do."}),`
`,(0,n.jsx)(r.li,{children:"Iterate until an engineer who has never seen the conversation could implement the change from the plan alone."}),`
`,(0,n.jsxs)(r.li,{children:["Commit the approved plan as ",(0,n.jsx)(r.code,{children:"plan.md"}),". The plan joins the audit trail, and the PR review play (",(0,n.jsx)(r.strong,{children:"Stage 5: Deploy"}),") checks the eventual diff against it."]}),`
`,(0,n.jsx)(r.li,{children:"Accept the plan and let Claude implement. With a solid plan, the implementation is often a single pass."}),`
`,(0,n.jsxs)(r.li,{children:["When implementation departs from the plan, update ",(0,n.jsx)(r.code,{children:"plan.md"})," in the same commit. Consider using a hook to enforce synchronization between the two."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"what-it-looks-like",children:"What it looks like"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"plan.md"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-markdown",children:`# Plan: claims status self-service (from intent.md 2026-06-02)

## Files that change

portal/src/claims/StatusPanel.tsx (new), claims-api/routes/status.py, claims-api/tests/test_status.py

## Order of work

1. Add the status endpoint behind existing auth.
2. Panel against the endpoint.
3. Wire into the portal nav.

## Risks

The claims-core API rate-limits at 50 rps; the panel must cache.

## Proof

test_status.py covers the four claim states; screenshot matches the approved mock.
`})}),`
`,(0,n.jsx)(r.h2,{id:"governance-considerations",children:"Governance considerations"}),`
`,(0,n.jsx)(r.p,{children:"Design review happens before any code is generated, when changing course is still a matter of editing a document. Plan mode enforces this itself, since Claude cannot edit files until the engineer accepts the plan. The plan and its revisions are logged along with who accepted it. Routine changes are approved by the engineer, and anything the organization classes as higher risk goes to a tech lead or architect."}),`
`,(0,n.jsx)(r.h2,{id:"how-to-measure-it",children:"How to measure it"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leading indicator"}),": Share of changes that merge from the first implementation pass, and time from plan approval to merged PR with the required data within the PR metadata."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lagging indicator"}),": Rework cycles per change, again from the PR metadata, and how often the merged diff still matches the committed ",(0,n.jsx)(r.code,{children:"plan.md"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"claude-code-in-auto-mode",children:"Claude Code in auto mode"}),`
`,(0,n.jsxs)(r.p,{children:["Claude Code can also run in ",(0,n.jsx)(r.a,{href:"https://www.anthropic.com/engineering/claude-code-auto-mode",children:"auto mode"}),", where the engineer iterates on and approves the plan, and Claude then applies each change without a per-edit prompt. As the guardrails from the later plays mature (a tuned ",(0,n.jsx)(r.code,{children:"CLAUDE.md"}),", skills that encode policy, hooks that block unsafe actions, and a test suite Claude can run), auto mode becomes the default for routine work: a tight ",(0,n.jsx)(r.code,{children:"spec.md"}),", a small blast radius, and code the tests already cover."]}),`
`,(0,n.jsxs)(r.p,{children:["The shift is now away from the user watching the agent make the edits and reviewing actions, toward the review of artifacts after longer autonomous sessions. Auto mode further enables parallelism across individuals and the team when used with worktrees and is fundamental to running the SDLC autonomously and closing the loop as described in ",(0,n.jsx)(r.strong,{children:"Stage 6: Maintain"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"legacy-systems-and-the-source-of-truth",children:"Legacy systems and the source of truth"}),`
`,(0,n.jsx)(r.p,{children:"Existing SDLC processes likely already track artifacts, just not in Markdown files. Work items may be in Jira, requirements in a tool with regulatory traceability built in, designs in Figma, and change approvals with a change board. Those systems are hard to displace because auditors and regulators already accept them and other teams depend on them, so the AI-native SDLC has to fit around what exists. For each artifact the process produces, one system should be named the source of truth and the others hold a copy or a link."}),`
`,(0,n.jsx)(r.p,{children:"The below configurations can be set up to have one source of truth with the choice differing per artifact:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"The repo as the source of truth."})," The Markdown artifacts are the authoritative record, and the legacy system references files within commits. This can be one of the cleanest configurations for engineering-led organizations as all records live in one tool with one timestamp authority."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"The legacy system is the truth."})," Jira, ServiceNow, or the requirements tool holds the authoritative record, and the Markdown artifacts are working copies. Claude reads the record at the start of the session and writes the outcome back through a Model Context Protocol (MCP) connector in the same session that produced the spec or the plan."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Linkage as the minimum bar."})," All artifacts note the record ID, and all legacy records contain the commit SHA of the Markdown file. The linkage option is a good place to start when transitioning to the AI-native SDLC as there are two sources of truth."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Both the legacy system and the AI-native Markdown-first system can coexist so long as there is a link between the two or one is declared the source of truth."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};