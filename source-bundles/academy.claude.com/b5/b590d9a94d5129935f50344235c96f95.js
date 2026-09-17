import{Qp as e,em as t}from"../../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"haeslvB0zpg",title:"What are managed agents?",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Claude Managed Agents"}),` is a suite of APIs for building and deploying
agents at scale. You define agents with specific tools, personas, and
capabilities. You configure sandbox environments with the right packages and
network controls. Then you fire off sessions from your own application, and
Claude does the work inside an isolated container with full file system
access, bash execution, and web search.`]})}),`
`,(0,n.jsx)(r.h2,{id:"the-agent-loop-hosted-for-you",children:"The agent loop, hosted for you"}),`
`,(0,n.jsxs)(r.p,{children:["Under the hood, this is an ",(0,n.jsx)(r.strong,{children:"agent loop"}),": Claude reasons, calls a tool, reads the result, and repeats until the job is done. If you've built agents before, you've probably written this kind of loop yourself. Managed agents takes that same loop and hosts it on Anthropic's infrastructure, so you don't have to run it."]}),`
`,(0,n.jsx)(r.p,{children:"You'll find Managed Agents in its own section of the Claude Console."}),`
`,(0,n.jsx)(r.p,{children:"The best way to understand what this unlocks is to walk through a few examples."}),`
`,(0,n.jsx)(r.h2,{id:"example-1-a-kanban-board-that-does-the-work",children:"Example 1: A Kanban board that does the work"}),`
`,(0,n.jsxs)(r.p,{children:['Picture a Kanban board sitting on top of managed agents. You drag a ticket into the "in progress" column, and that fires off a ',(0,n.jsx)(r.strong,{children:"session"}),` automatically. Say the ticket reads "optimize website performance." Here's what happens:`]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Your back end creates a session."}),`
`,(0,n.jsxs)(r.li,{children:["The session points to an ",(0,n.jsx)(r.strong,{children:"environment"})," you configured with Lighthouse and Puppeteer pre-installed."]}),`
`,(0,n.jsx)(r.li,{children:"Your GitHub repo gets mounted into the container."}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Now Claude has the codebase, the tools, and a ",(0,n.jsx)(r.strong,{children:"rubric"})," that defines what done looks like:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Lighthouse score above 90"}),`
`,(0,n.jsx)(r.li,{children:"No render-blocking resources"}),`
`,(0,n.jsx)(r.li,{children:"All images lazy loaded"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Claude runs the audit, then starts compressing images, inlining CSS, and deferring scripts. Every tool call streams back to the board in real time through the ",(0,n.jsx)(r.strong,{children:"event stream"}),", so you can watch the work as it happens."]}),`
`,(0,n.jsxs)(r.p,{children:["Then the rubric kicks in. A separate ",(0,n.jsx)(r.strong,{children:"grader"}),", running in its own context window, evaluates the output against your criteria. Claude reads that feedback, goes back in, fixes what it missed, and resubmits. In the demo, that loop takes the Lighthouse score up to 96."]}),`
`,(0,n.jsx)(r.p,{children:"One more thing: you can drag a second ticket over while the first is still running. Two sessions, two containers, two separate tasks running in parallel."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8862c97ff7b5.png",alt:"A Kanban development board with two tickets in the In Progress column, each running its own agent session and streaming tool call events"})}),`
`,(0,n.jsx)(r.h2,{id:"example-2-a-recurring-research-agent-with-memory",children:"Example 2: A recurring research agent with memory"}),`
`,(0,n.jsx)(r.p,{children:"Here's a different shape of agent: one whose job is to track prices and plan changes across every SaaS tool your company pays for, with a report ready before stand-up."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./15cfb44130c8.png",alt:"The Pricing Research app with a Run Weekly Report button, an empty agent activity feed, a memory panel, and a deliverables list with an Excel report and executive summary"})}),`
`,(0,n.jsx)(r.p,{children:"On each run, the agent:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Searches the web for current pricing pages, checks for plan tier changes, and flags new features that might affect your contracts"}),`
`,(0,n.jsx)(r.li,{children:"Runs a cost analysis in Python inside the sandbox"}),`
`,(0,n.jsx)(r.li,{children:"Uses an Excel spreadsheet skill and writes an executive summary"}),`
`,(0,n.jsxs)(r.li,{children:["Posts a link to Slack and creates a review task in Asana, both through ",(0,n.jsx)(r.strong,{children:"MCP servers"})]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["The agent also reads from and writes to a ",(0,n.jsx)(r.strong,{children:"memory store"}),`. Before it starts, it checks what it found last week. After it finishes, it stores what changed. So next Monday's report can say "compute costs are 15% lower since last week" instead of listing the same static pricing data every time.`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1beca4dea4a2.png",alt:"The memory panel listing last week's findings, including vendor pricing changes and a total monthly spend estimate the agent stored for its next run"})}),`
`,(0,n.jsx)(r.h2,{id:"example-3-incident-response-with-multiple-agents",children:"Example 3: Incident response with multiple agents"}),`
`,(0,n.jsxs)(r.p,{children:["Now imagine an alert fires from your monitoring stack. A ",(0,n.jsx)(r.strong,{children:"custom tool"})," on your back end receives the alert payload and sends it into a new session as a tool result. This session uses ",(0,n.jsx)(r.strong,{children:"multi-agent coordination"}),":"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["A ",(0,n.jsx)(r.strong,{children:"coordinator agent"})," receives the alert and delegates to three specialists."]}),`
`,(0,n.jsx)(r.li,{children:"Each specialist runs in its own context window on the same shared file system."}),`
`,(0,n.jsx)(r.li,{children:"The specialists report back, and the coordinator synthesizes their findings into a single incident summary."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4f97ff52acb6.png",alt:"An incident response dashboard for an API latency spike alert, with Diagnostics, Log Analysis, and Communications specialist panels pending while a Past Incidents panel searches memory for patterns"})}),`
`,(0,n.jsxs)(r.p,{children:["Before the summary goes to Slack, the ",(0,n.jsx)(r.strong,{children:"permissions policy"})," fires. You see the draft on screen, approve it, and the message goes out. Sensitive actions wait for a human."]}),`
`,(0,n.jsx)(r.p,{children:'Memory ties all of this together. The coordinator checks past incidents in the memory store and flags a pattern: "this looks like the DNS resolution issue from two weeks ago that was caused by a misconfigured TTL." The next time a similar alert fires, the agent starts with that context instead of diagnosing from scratch.'}),`
`,(0,n.jsx)(r.h2,{id:"the-building-blocks",children:"The building blocks"}),`
`,(0,n.jsx)(r.p,{children:"Across these examples, managed agents gives developers the tools to deliver a fully managed, stateful agent experience built on:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Agents"})," — definitions with specific tools, personas, and capabilities"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Sessions"})," — individual runs you fire off from your own application"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Environments"})," — sandboxes with the right packages and network controls"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tools"})," — including custom tools on your back end"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"MCP"})," — connections to services like Slack and Asana"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Memory"})," — a store the agent reads before starting and writes to when done"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Outcomes"})," — rubrics and graders that define and check what done looks like"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Multi-agent coordination"})," — coordinators delegating to specialists"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude Managed Agents"})," is a suite of APIs for building and deploying agents at scale, hosted on Anthropic's infrastructure."]}),`
`,(0,n.jsx)(r.li,{children:"It runs the familiar agent loop — reason, call a tool, read the result, repeat — inside an isolated container with file system access, bash execution, and web search."}),`
`,(0,n.jsx)(r.li,{children:"Sessions run in environments you configure, work in parallel, and stream tool calls back to your app in real time."}),`
`,(0,n.jsx)(r.li,{children:"Rubrics and separate graders let you define success criteria; Claude iterates until it meets them."}),`
`,(0,n.jsx)(r.li,{children:"Memory, MCP servers, custom tools, permissions policies, and multi-agent coordination round out the stateful agent experience."}),`
`,(0,n.jsx)(r.li,{children:"You define what done looks like. Claude works until it gets there."}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};