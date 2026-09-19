import{$p as e,Zp as t}from"../../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"One engineer can drive several streams of work at once."}),`
`,(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.strong,{children:"parallel session"})," is another full Claude Code instance, working a separate task in its own Git worktree. Each independent session knows nothing about the others, and the engineer steering them is the only thing they share."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["A ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/sub-agents",children:"subagent"})]})," runs inside a single session as a scoped helper with its own context window and tool limits and suits jobs that recur in multiple tasks, such as verifying the app runs as expected."]}),`
`,(0,n.jsx)(r.p,{children:"Parallel sessions raise the number of tasks an engineer can have in flight, while subagents keep each session focused on its own task. The engineer's job is steering and reviewing all of them."}),`
`,(0,n.jsx)(r.h2,{id:"what-changes",children:"What changes"}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Traditional"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"AI-native"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"One engineer works one task at a time and spends a significant portion of their day/week on builds, tests, and reviews. Switching between tasks while waiting is possible, but the context switch is tiring enough that few people choose to."}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"One engineer runs several Claude sessions at once, each in its own worktree on its own task. Repeated jobs become subagents with their own context and tool limits. The engineer's job shifts to orchestrating and, eventually, to building and monitoring loops."})]})})]}),`
`,(0,n.jsx)(r.h2,{id:"getting-started",children:"Getting started"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prerequisites"}),": The ",(0,n.jsx)(r.code,{children:"CLAUDE.md"}),", since all sessions read the file. The feedback loop (",(0,n.jsx)(r.strong,{children:"Stage 4: Test"}),") also helps here, because less supervision from the engineer is needed when a session can verify its own work."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Infrastructure"}),": A Git repository, since isolation comes from worktrees, and permission settings tuned so sessions are not waiting on approval prompts for commands the organization considers safe."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-execute-it",children:"How to execute it"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["The engineer splits the work into tasks that touch different files, using the plan from the plan mode play (",(0,n.jsx)(r.strong,{children:"Stage 3: Build"}),") to see where the work is independent. Tasks that share files run in a single session, one after another."]}),`
`,(0,n.jsxs)(r.li,{children:["Each parallel task gets its own worktree, for example ",(0,n.jsx)(r.code,{children:"claude --worktree feature-auth"})," in one terminal and ",(0,n.jsx)(r.code,{children:"claude --worktree fix-rate-limit"})," in another. A worktree is a separate checkout on its own branch, which stops sessions colliding on files."]}),`
`,(0,n.jsx)(r.li,{children:"Two or three sessions is a sensible starting point. The practical ceiling is how many streams one person can review properly, so add sessions only while review is keeping up."}),`
`,(0,n.jsxs)(r.li,{children:["Turn repeated jobs into subagents, as defined in Markdown files in ",(0,n.jsx)(r.code,{children:".claude/agents/"}),", each with a name, a description of when to use it, and the tools it may touch. Examples include a code simplifier that strips needless complexity after the main agent finishes, a verifier that runs the app and checks behavior, and a researcher that explores the codebase and reports back without flooding the main context. Check the definitions into Git so the whole team shares them."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"what-it-looks-like",children:"What it looks like"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:".claude/agents/verifier.md"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-markdown",children:`---

name: verifier
description: Runs the app and checks the change works before the session reports done
tools: Bash, Read

---
Start the app with make run. Exercise the changed behavior and the two
nearest neighboring flows. Report what you ran, what you saw, and any
behavior that does not match plan.md. Do not fix anything; report only.
`})}),`
`,(0,n.jsx)(r.h2,{id:"governance-considerations",children:"Governance considerations"}),`
`,(0,n.jsx)(r.p,{children:"More sessions means more output, so the controls have to come from configuration in the repo. Hooks and permission settings there apply to all sessions, and what a session does is logged and attributed to the engineer who ran it."}),`
`,(0,n.jsx)(r.h2,{id:"how-to-measure-it",children:"How to measure it"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leading indicator"}),": Concurrent sessions per engineer while review quality holds, counted from the OpenTelemetry export, and the share of the day spent steering rather than waiting."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lagging indicator"}),": Changes merged per engineer per week read alongside the rework rate as determined per the PR history."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};