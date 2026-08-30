import{Hf as e,Wf as t}from"../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...e.components},{ChatPrompt:i,ChatResponse:o,Connectors:s,Image:c,TryIn:l}=r;return i||a("ChatPrompt",!0),o||a("ChatResponse",!0),s||a("Connectors",!0),c||a("Image",!0),l||a("TryIn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{src:"./generate-project-status-reports.png",alt:"Generate project status reports result",preview:!0}),`
`,(0,n.jsx)(r.h2,{id:"1-describe-the-task",children:"1. Describe the task"}),`
`,(0,n.jsx)(r.p,{children:"Status reporting often means sifting through your various tools and messages to find updates and decisions. Claude simplifies this by querying multiple data sources at once, extracting information from different formats, and creating organized reports. This turns hours of manual work into minutes."}),`
`,(0,n.jsx)(r.p,{children:"Ask Claude to pull information from your connected tools and create a tracker that consolidates everything. The key is being specific about what you need tracked and where to look."}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r.p,{children:"I need to consolidate project status from multiple sources into a task tracker."}),(0,n.jsx)(r.p,{children:"Pull information from:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'Gmail (past 2 weeks, search "Project Hermes")'}),`
`,(0,n.jsx)(r.li,{children:"Slack #hermes-sprint channel"}),`
`,(0,n.jsx)(r.li,{children:'Google Drive "Project Hermes" folder'}),`
`,(0,n.jsx)(r.li,{children:"Recent calendar meetings"}),`
`]}),(0,n.jsx)(r.p,{children:"For each task, I need to see:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Who owns it and what they're working on"}),`
`,(0,n.jsx)(r.li,{children:"Current status (not started, in progress, blocked, done)"}),`
`,(0,n.jsx)(r.li,{children:"Any blockers and how long they've been stuck"}),`
`,(0,n.jsx)(r.li,{children:"Notes from their updates about plans and challenges"}),`
`]}),(0,n.jsx)(r.p,{children:"Create an Excel tracker and include these features: visual status indicators, cell comments with context from sources (so I can hover and see the details), dropdown menus for status and priority (to make updates easy), and data bars showing progress visually."}),(0,n.jsx)(r.p,{children:"The tracker should make it obvious at a glance where the problems are and who needs help."})]}),`
`,(0,n.jsx)(r.h2,{id:"2-give-claude-context",children:"2. Give Claude context"}),`
`,(0,n.jsxs)(r.p,{children:["Enable ",(0,n.jsx)(r.a,{href:"https://claude.com/blog/connectors-directory",children:"connectors"})," and ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"integrations"})," to give Claude direct access to your tools as live data sources, not just pasted snippets."]}),`
`,(0,n.jsx)(r.h3,{id:"required-context",children:"Required context"}),`
`,(0,n.jsxs)(r.p,{children:["Once you’ve connected your ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10166901-using-the-google-drive-integration",children:"Google Drive"}),", ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10166901-use-google-workspace-connectors",children:"Gmail, Google Calendar"}),", and ",(0,n.jsx)(r.a,{href:"https://www.claude.com/claude-and-slack",children:"Slack"})," tools, make sure they are toggled on in the chat bar settings."]}),`
`,(0,n.jsx)(r.p,{children:"Claude can then access your email threads, Drive file updates, calendar events, and Slack conversations to piece together what's actually happening with your project."}),`
`,(0,n.jsx)(s,{surface:"chat",items:[{slug:"google-drive"},{slug:"gmail"}]}),`
`,(0,n.jsx)(r.h2,{id:"3-what-claude-creates",children:"3. What Claude creates"}),`
`,(0,n.jsx)(r.p,{children:"Claude searches your connected tools, finds status updates from different sources, reconciles them into a single view, and creates an Excel tracker with visual indicators and context in cell comments."}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsx)(r.p,{children:"I've searched your connected tools for Project Hermes updates and created a consolidated tracker."}),(0,n.jsx)(r.p,{children:"Found across your tools:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"147 Gmail messages mentioning Project Hermes"}),`
`,(0,n.jsx)(r.li,{children:"312 Slack messages in #hermes-sprint"}),`
`,(0,n.jsx)(r.li,{children:"23 documents in Google Drive /Project Hermes folder"}),`
`,(0,n.jsx)(r.li,{children:'18 calendar meetings with "Hermes" in the title'}),`
`]}),(0,n.jsx)(r.p,{children:"Key insights from consolidation:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'Sarah said "80% done" in Slack but mentioned complexity in her 1-on-1 notes, so I adjusted to 45% in the tracker'}),`
`,(0,n.jsx)(r.li,{children:"Mike's been blocked on API spec for 4 days (mentioned in Slack Nov 1, still blocked Nov 4)"}),`
`,(0,n.jsx)(r.li,{children:"Lisa's approval escalated to VP Engineering (email thread shows 3 escalation attempts)"}),`
`,(0,n.jsx)(r.li,{children:"Team consensus from standup: data migration is highest risk item"}),`
`,(0,n.jsx)(r.li,{children:"I’ve created a spreadsheet file with 25 tasks, visual indicators, and cell comments with context from all sources."}),`
`]})]}),`
`,(0,n.jsx)(r.h2,{id:"4-follow-up-prompts",children:"4. Follow up prompts"}),`
`,(0,n.jsx)(r.p,{children:"Continue the conversation with Claude to refine, expand, or explore further."}),`
`,(0,n.jsx)(r.h3,{id:"deep-dive-blockers",children:"Deep dive blockers"}),`
`,(0,n.jsx)(r.p,{children:"Pull all related conversations about a blocker to understand the full context."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"The tracker shows Lisa's been blocked on approval for 4 days. Find every mention of this blocker across Slack, email, and meeting notes. I need to see the complete escalation history and current status."})}),`
`,(0,n.jsx)(r.h3,{id:"create-weekly-status-report",children:"Create weekly status report"}),`
`,(0,n.jsx)(r.p,{children:"Generate an executive summary from the tracker data."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Using the task tracker data, create a one-page status report for leadership. Include: overall progress percentage, number of blockers, which workstreams are at risk, and top 3 items that need executive attention."})}),`
`,(0,n.jsx)(r.h2,{id:"5-tricks-tips-and-troubleshooting",children:"5. Tricks, tips, and troubleshooting"}),`
`,(0,n.jsx)(r.h3,{id:"create-a-skill-for-recurring-reports",children:"Create a Skill for recurring reports"}),`
`,(0,n.jsxs)(r.p,{children:["Create a custom ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12512176-what-are-skills",children:"skill"})," for generating status reports to embed all the steps involved in the process. Once created, you can use the skill anywhere in Claude by referencing its name or description. This triggers Claude to run the workflow automatically."]}),`
`,(0,n.jsx)(r.h3,{id:"specify-how-to-handle-missing-information",children:"Specify how to handle missing information"}),`
`,(0,n.jsx)(r.p,{children:`If Claude can't find certain information—maybe there's no Slack discussion or Drive files haven't been updated—it's better to say "no progress documented" than to have gaps silently smoothed over. In your prompt, you can specify: "If you don't find information for a work stream, note that explicitly rather than omitting it."`}),`
`,(0,n.jsx)(r.h3,{id:"add-visual-polish",children:"Add visual polish"}),`
`,(0,n.jsx)(r.p,{children:`Claude can opt for certain default fonts, colors, and styles. For differentiated outputs, you can request changes: "Choose a color scheme that's unique and aesthetically beautiful—avoid standard blues and grays," or "Select typography that feels modern and confident, not generic corporate." Specificity drives better design.`}),`
`,(0,n.jsx)(r.h2,{id:"6-ready-to-try-for-yourself",children:"6. Ready to try for yourself?"}),`
`,(0,n.jsx)(r.p,{children:"Work with Claude to consolidate information between your project tools so you can focus on making decisions instead of copy and pasting into documents."}),`
`,(0,n.jsxs)(l,{surfaces:["chat"],children:[(0,n.jsx)(r.p,{children:"I need to consolidate project status from multiple sources into a task tracker."}),(0,n.jsx)(r.p,{children:"Pull information from:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'Gmail (past 2 weeks, search "Project Hermes")'}),`
`,(0,n.jsx)(r.li,{children:"Slack #hermes-sprint channel"}),`
`,(0,n.jsx)(r.li,{children:'Google Drive "Project Hermes" folder'}),`
`,(0,n.jsx)(r.li,{children:"Recent calendar meetings"}),`
`]}),(0,n.jsx)(r.p,{children:"For each task, I need to see:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Who owns it and what they're working on"}),`
`,(0,n.jsx)(r.li,{children:"Current status (not started, in progress, blocked, done)"}),`
`,(0,n.jsx)(r.li,{children:"Any blockers and how long they've been stuck"}),`
`,(0,n.jsx)(r.li,{children:"Notes from their updates about plans and challenges"}),`
`]}),(0,n.jsx)(r.p,{children:"Create an Excel tracker and include these features: visual status indicators, cell comments with context from sources (so I can hover and see the details), dropdown menus for status and priority (to make updates easy), and data bars showing progress visually."}),(0,n.jsx)(r.p,{children:"The tracker should make it obvious at a glance where the problems are and who needs help."})]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};