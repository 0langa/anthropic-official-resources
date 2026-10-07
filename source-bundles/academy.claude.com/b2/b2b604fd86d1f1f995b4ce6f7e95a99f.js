import{Nm as e,jm as t}from"../../../../../content-de-meta-jksdfebu.js";var n=t();function r(t){let r={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"CLAUDE.md"})," gives Claude the context a new joiner would need, covering conventions, commands, architecture, and the mistakes the team sees most often. Knowledge that used to sit in people's heads and on wikis becomes a file the agent reads at the start of every session, maintained by the whole team and iterated on whenever a mistake is made."]}),`
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
`,(0,n.jsxs)(r.p,{children:["This ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," belongs to the repo for an insurer's customer portal. The older internal system that holds the claims is ",(0,n.jsx)(r.code,{children:"claims-core"}),", and ",(0,n.jsx)(r.code,{children:"intent/"})," keeps the planning files for each change."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"CLAUDE.md"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-markdown",children:`# Claims portal
## Commands
- Build: make build
- Test: make test (unit), make itest (integration, needs docker)
- Lint: make lint (runs in CI; fix before pushing)
- Run: make run (portal on :3000, claims-api on :8000)
## Conventions
- claims-api is Python 3.12 and FastAPI. portal is TypeScript and React.
- Every endpoint needs a test in claims-api/tests.
- Dates cross the API as ISO 8601, never as formatted text.
## Architecture
- portal/ is the customer site, claims-api/ is its backend, and
  intent/ holds the intent.md, spec.md and plan.md for each change.
- Only claims-api talks to claims-core. The portal never calls it.
- claims-core allows 50 requests a second. Cache reads; never poll it.
## Things Claude gets wrong
- Do not log request or response bodies in claims-api; they can hold PII.
- Do not bump dependency versions; the platform team owns them.
`})}),`
`,(0,n.jsx)(r.h2,{id:"governance-considerations",children:"Governance considerations"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"CLAUDE.md"})," is version controlled, so the instructions the agent works to are reviewable and auditable. Team conventions are applied through the file, changes to it are logged in Git history, and code owners approve those changes in PR review."]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-measure-it",children:"How to measure it"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leading indicator"}),": How often Claude repeats a mistake ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," should have caught. The corrections or changes to the ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," should be tracked within the Git history."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lagging indicator"}),": Time to first merged PR for a new member of the team from PR history."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};