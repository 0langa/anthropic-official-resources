import{em as e,nm as t}from"../../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"CLAUDE.md"})," gives Claude the context a new joiner would need, covering conventions, commands, architecture, and the mistakes the team sees most often. Knowledge that used to sit in people's heads and on wikis becomes a file the agent reads at the start of every session, maintained by the whole team and iterated on whenever a mistake is made."]}),`
`,(0,n.jsx)(r.h2,{id:"getting-started",children:"Getting started"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prerequisites"}),": None."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Infrastructure"}),": A repo, Claude Code installed, and one engineer who knows the codebase well."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-execute-it",children:"How to execute it"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Run ",(0,n.jsx)(r.code,{children:"/init"})," in the repo. Claude generates a starting ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," from what it finds."]}),`
`,(0,n.jsx)(r.li,{children:"Cut the generated file down to what a new joiner would need on day one. Keep the build, test, and lint commands, the conventions that matter, and the things Claude keeps getting wrong."}),`
`,(0,n.jsxs)(r.li,{children:["Check ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," into Git at the repo root so the whole team shares one version and changes are reviewed like code."]}),`
`,(0,n.jsxs)(r.li,{children:["A working rule helps here. When Claude makes a mistake twice, the correction goes into ",(0,n.jsx)(r.code,{children:"CLAUDE.md"}),"."]}),`
`,(0,n.jsx)(r.li,{children:"Keep it under a page, because Claude reads all of it at the start of a session and anything stale is taking up context for no benefit."}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"what-it-looks-like",children:"What it looks like"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"CLAUDE.md"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-markdown",children:`# Payments service
## Commands
- Build: make build
- Test: make test (unit), make itest (integration, needs docker)
- Lint: make lint (runs in CI; fix before pushing)
## Conventions
- Java 21, Spring Boot 3. No new Lombok.
- Money is always BigDecimal, never double.
- Every endpoint needs an integration test in src/itest.
## Architecture
- api/ holds REST controllers, core/ holds domain logic,
  adapters/ talks to external systems.
- Kafka events are defined in schemas/; never edit generated classes.
## Things Claude gets wrong
- Do not bump dependency versions; the platform team owns them.
- The legacy v1/ package is frozen; changes go in v2/.
`})}),`
`,(0,n.jsx)(r.h2,{id:"governance-considerations",children:"Governance considerations"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"CLAUDE.md"})," is version controlled, so the instructions the agent works to are reviewable and auditable. Team conventions are applied through the file, changes to it are logged in Git history, and code owners approve those changes in PR review."]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-measure-it",children:"How to measure it"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leading indicator"}),": How often Claude repeats a mistake ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," should have caught. The corrections or changes to the ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," should be tracked within the Git history."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lagging indicator"}),": Time to first merged PR for a new member of the team from PR history."]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};