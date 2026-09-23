import{$p as e,Zp as t}from"../../../content-de-meta-ictkjcaa.js";var n=t();function r(t){let r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{CoworkPrompt:i,CoworkResponse:o,TryIn:s,Video:c}=r;return i||a("CoworkPrompt",!0),o||a("CoworkResponse",!0),s||a("TryIn",!0),c||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{youtubeId:"UAmKyyZ-b9E",title:"Build a daily briefing across your tools result"}),`
`,(0,n.jsx)(r.h2,{id:"1-describe-the-task",children:"1. Describe the task"}),`
`,(0,n.jsx)(r.p,{children:"In Cowork, Claude connects to your messaging, task tools, and dashboards at the same time, reading full conversation histories, surfacing discussions you weren't part of, and tying metrics to the threads behind them."}),`
`,(0,n.jsx)(r.p,{children:"In your prompt, describe how you want the briefing structured and what counts as urgent. Claude pulls together what matters into a single briefing."}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsxs)(r.p,{children:["I need my morning briefing. Pull from Slack and Notion, and visit my team dashboard: ",(0,n.jsx)(r.code,{children:"https://metrics.acme-corp.com/ops-team"})]}),(0,n.jsx)(r.p,{children:"Structure it as:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Urgent items from the dashboard (anything red or trending down)"}),`
`,(0,n.jsx)(r.li,{children:"Slack threads where I'm mentioned — read the full threads for context"}),`
`,(0,n.jsx)(r.li,{children:"Threads I'm not in but should probably know about based on my current tasks"}),`
`,(0,n.jsx)(r.li,{children:"Tasks due this week and anything blocking them"}),`
`]}),(0,n.jsx)(r.p,{children:"For urgent items, pull the deeper context: who's involved, what's been discussed, what's still unresolved."})]}),`
`,(0,n.jsx)(r.h2,{id:"2-give-claude-context",children:"2. Give Claude context"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/tutorials/choosing-between-claude-cowork-or-chat",children:"Cowork"})," is a workspace in Claude that connects to your tools via ",(0,n.jsx)(r.a,{href:"https://claude.com/connectors",children:"connectors"})," and reads from browser tabs via ",(0,n.jsx)(r.a,{href:"https://claude.com/chrome",children:"Claude in Chrome"}),". It lives in the ",(0,n.jsx)(r.a,{href:"https://claude.com/download",children:"Claude Desktop"})," app, and with remote sessions (in beta) your Cowork sessions are on web and mobile too. Add your messaging, tasks, and dashboard sources. Cowork queries them in parallel."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"What to expect:"})," After your initial prompt in Cowork, Claude may ask you questions, like which channels matter most, what timeframe to cover, or how to format the briefing. It then builds a plan you can review in the sidebar. This helps it run more independently and deliver something closer to finished."]}),`
`,(0,n.jsx)(r.h3,{id:"required-context",children:"Required context"}),`
`,(0,n.jsx)(r.p,{children:"To get started:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Download ",(0,n.jsx)(r.a,{href:"https://claude.com/download",children:"Claude Desktop"})," — or go to ",(0,n.jsx)(r.a,{href:"https://claude.ai",children:"Claude.ai"})," with remote sessions (in beta) — and start a Cowork session"]}),`
`,(0,n.jsxs)(r.li,{children:["Add ",(0,n.jsx)(r.a,{href:"https://claude.com/connectors",children:"connectors"})," for Slack, Notion, and any other tools you want in the briefing"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://claude.com/chrome",children:"Install Claude in Chrome"})," and add it as a connector for dashboard access"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"3-what-claude-creates",children:"3. What Claude creates"}),`
`,(0,n.jsx)(r.p,{children:"Cowork creates a structured briefing organized by priority, with cross-platform context synthesized into single items where relevant. Using the Claude in Chrome connector, Claude opens your dashboard in a new browser tab and reads it directly, pulling metrics and context alongside your Slack and Notion data."}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsx)(r.p,{children:"Here's your morning briefing for January 22:"}),(0,n.jsx)(r.h3,{children:"Dashboard alerts"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pipeline velocity is down 15% this week"})," — I found a related thread in #sales where Maria mentioned two deals slipping to next quarter."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Support ticket volume trending up"})," — 23% increase over the last 3 days."]}),`
`]}),(0,n.jsx)(r.h3,{children:"Threads where you're needed"}),(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"#ops-team — Lisa tagged you about the vendor contract renewal. Related to your Notion task due Friday."}),`
`,(0,n.jsx)(r.li,{children:"#leadership — Discussion about headcount planning. You weren't tagged but it relates to your hiring request."}),`
`]}),(0,n.jsx)(r.h3,{children:"Tasks due this week"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'"Finalize Q1 vendor agreements" — due Friday, blocked on budget confirmation'}),`
`,(0,n.jsx)(r.li,{children:'"Review marketing brief" — due tomorrow'}),`
`]})]}),`
`,(0,n.jsx)(r.h2,{id:"4-follow-up-prompts",children:"4. Follow up prompts"}),`
`,(0,n.jsx)(r.p,{children:"Continue the conversation with Claude to refine, expand, or explore further."}),`
`,(0,n.jsx)(r.h3,{id:"go-deeper-on-a-dashboard-alert",children:"Go deeper on a dashboard alert"}),`
`,(0,n.jsx)(r.p,{children:"Get the full context behind a metric. Cowork pulls the related threads, tasks, and history so you understand what's driving the number."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:`"Tell me more about the pipeline velocity drop. Pull the full thread from #sales, any related tasks, and what's been discussed about those slipping deals."`})})}),`
`,(0,n.jsx)(r.h3,{id:"draft-a-response-with-full-context",children:"Draft a response with full context"}),`
`,(0,n.jsx)(r.p,{children:"Move from briefing to action. Cowork drafts a reply using everything it knows about the topic — the thread history, related tasks, and your current priorities."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:`"Draft a response to Lisa's vendor contract thread. I want to confirm we're moving forward but need to flag the budget dependency."`})})}),`
`,(0,n.jsx)(r.h3,{id:"surface-everything-on-one-topic",children:"Surface everything on one topic"}),`
`,(0,n.jsx)(r.p,{children:"Pull together all mentions of a project, person, or issue across sources."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:'"What else has been said about headcount planning? Pull from Slack, Notion, and anything on the dashboard related to hiring or team size."'})})}),`
`,(0,n.jsx)(r.h2,{id:"5-tricks-tips-and-troubleshooting",children:"5. Tricks, tips, and troubleshooting"}),`
`,(0,n.jsx)(r.h3,{id:"watch-the-progress-panel",children:"Watch the progress panel"}),`
`,(0,n.jsx)(r.p,{children:"Cowork shows which connectors are being queried in real-time. If your briefing is taking longer than expected, you can see which platform is the bottleneck."}),`
`,(0,n.jsx)(r.h3,{id:"iterate-in-the-same-conversation",children:"Iterate in the same conversation"}),`
`,(0,n.jsx)(r.p,{children:"Your first briefing request establishes context. Follow-up prompts can refine without re-querying everything."}),`
`,(0,n.jsx)(r.h3,{id:"briefings-run-remotely-by-default",children:"Briefings run remotely by default"}),`
`,(0,n.jsx)(r.p,{children:"A scheduled briefing runs on Anthropic's servers (remote sessions, in beta), so it's ready even while your laptop is closed and follows you across desktop, web, and mobile. If you're compiling something sensitive interactively, you can run that session locally and keep those files on your machine."}),`
`,(0,n.jsx)(r.h2,{id:"6-ready-to-try-for-yourself",children:"6. Ready to try for yourself?"}),`
`,(0,n.jsx)(r.p,{children:"Connect your platforms to Cowork and start your day knowing where your attention is needed most."}),`
`,(0,n.jsxs)(s,{surfaces:["cowork"],children:[(0,n.jsxs)(r.p,{children:["I need my morning briefing. Pull from Slack and Notion, and visit my team dashboard: ",(0,n.jsx)(r.code,{children:"https://metrics.acme-corp.com/ops-team"})]}),(0,n.jsx)(r.p,{children:"Structure it as:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Urgent items from the dashboard (anything red or trending down)"}),`
`,(0,n.jsx)(r.li,{children:"Slack threads where I'm mentioned — read the full threads for context"}),`
`,(0,n.jsx)(r.li,{children:"Threads I'm not in but should probably know about based on my current tasks"}),`
`,(0,n.jsx)(r.li,{children:"Tasks due this week and anything blocking them"}),`
`]}),(0,n.jsx)(r.p,{children:"For urgent items, pull the deeper context: who's involved, what's been discussed, what's still unresolved."})]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};