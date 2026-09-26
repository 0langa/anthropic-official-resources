import{Nm as e,jm as t}from"../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...e(),...t.components},{Callout:i,Connectors:o,CoworkPluginCard:s,CoworkPrompt:c,CoworkScheduled:l,CoworkWorkingFolder:u,CoworkWrapUp:d,Mark:f,MarkHighlight:p,ResourceWidget:m,Tip:h}=r;return i||a("Callout",!0),o||a("Connectors",!0),s||a("CoworkPluginCard",!0),c||a("CoworkPrompt",!0),l||a("CoworkScheduled",!0),u||a("CoworkWorkingFolder",!0),d||a("CoworkWrapUp",!0),f||a("Mark",!0),p||a("MarkHighlight",!0),m||a("ResourceWidget",!0),h||a("Tip",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m,{name:"Embed1"}),`
`,(0,n.jsx)(r.h2,{id:"1-set-up",children:"1. Set up"}),`
`,(0,n.jsx)(r.h3,{id:"try-a-plugin",children:"Try a plugin"}),`
`,(0,n.jsxs)(r.p,{children:["The Sales plugin ships with ",(0,n.jsx)(r.code,{children:"/pipeline-review"})," and other customer success skills as a starting point, already structured to weigh usage, tickets, and sentiment into one call. If your admin manages plugins and it's not available yet, skip this; nothing below requires it."]}),`
`,(0,n.jsx)(s,{slug:"sales",subtitle:"8 skills for account research, call prep, pipeline review, and account health",featured:{"pipeline-review":"Score account health from usage, tickets, NPS, and the success plan","call-summary":"Cluster a folder of call transcripts into themes with counts and quotes"},showRun:!0}),`
`,(0,n.jsx)(r.h3,{id:"connect-your-tools",children:"Connect your tools"}),`
`,(0,n.jsxs)(r.p,{children:["Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access",children:"Learn about tool access"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["Navigate to ",(0,n.jsx)(r.strong,{children:"Customize → Connectors"})," in Cowork to set up."]}),`
`,(0,n.jsx)(o,{items:[{slug:"salesforce"},{slug:"zendesk",note:"Read open and recently solved tickets so the health call reflects what support is actually seeing."},{slug:"google-drive"}]}),`
`,(0,n.jsx)(i,{type:"tip",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Want to try this task before setting anything up?"}),` Add your files to a
working folder, point Cowork at the folder, and start with the prompt.`]})}),`
`,(0,n.jsx)(r.h3,{id:"set-your-working-folder",children:"Set your working folder"}),`
`,(0,n.jsxs)(r.p,{children:["Drag the files you'll use (the usage export, the success plan, the latest NPS responses) into one folder on your machine, then point Cowork at it. Cowork reads from it and writes the health summary back to it. If you track this account ongoing, ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork",children:"create a Cowork project"})," from that folder so your health criteria, instructions, and memory stay attached."]}),`
`,(0,n.jsx)(u,{name:"Accounts / Northwind / health",files:[{name:"usage-export-apr.csv",kind:"csv",date:"Apr 25, 2026",size:"64 KB"},{name:"success-plan.docx",kind:"doc",date:"Feb 3, 2026",size:"38 KB"},{name:"nps-responses-q1.csv",kind:"csv",date:"Apr 2, 2026",size:"12 KB"}]}),`
`,(0,n.jsx)(r.h2,{id:"2-the-prompt",children:"2. The prompt"}),`
`,(0,n.jsx)(r.h3,{id:"copy-this-into-claude-cowork",children:"Copy this into Claude Cowork"}),`
`,(0,n.jsx)(c,{folder:"Accounts / Northwind / health",children:(0,n.jsxs)(r.p,{children:["From the ",(0,n.jsxs)(f,{id:"b",children:[(0,n.jsx)(f,{id:"c",children:"usage data"}),", open Zendesk tickets, NPS responses, and ",(0,n.jsx)(f,{id:"c",children:"success plan"})]})," for Northwind, write the account health summary to the account folder: call it ",(0,n.jsx)(f,{id:"a",children:"red, yellow, or green with the reason"})," in one or two sentences, then the ",(0,n.jsx)(f,{id:"actions",children:"two actions to take this week"}),"."]})}),`
`,(0,n.jsx)(r.h3,{id:"why-this-works",children:"Why this works"}),`
`,(0,n.jsx)(p,{mark:"a",children:(0,n.jsx)(h,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Give a fixed set of answers."}),` "Red, yellow, or green" makes Cowork commit
to one status instead of hedging, and "with the reason" means the call is
defensible when leadership asks.`]})})}),`
`,(0,n.jsx)(p,{mark:"actions",children:(0,n.jsx)(h,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Say how many items you want."}),` "Two actions I should take this week" keeps
the output to what you'll actually do before Friday, not a backlog of
everything that could help.`]})})}),`
`,(0,n.jsx)(p,{mark:"b",children:(0,n.jsx)(h,{tag:"source",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Name the sources to weigh together."}),` Naming usage, tickets, NPS, and the
success plan together means health is weighed across product, support,
sentiment, and goals, not just whichever dashboard you checked last.`]})})}),`
`,(0,n.jsx)(p,{mark:"c",children:(0,n.jsx)(h,{tag:"source",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Include the goals to measure against."}),` The success plan and usage export
sit in the working folder, so the health call is measured against the goals
you actually agreed with the customer.`]})})}),`
`,(0,n.jsx)(r.h3,{id:"get-a-better-draft",children:"Get a better draft"}),`
`,(0,n.jsx)(h,{tag:"practice",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Add an example to match."}),` Drop an example you like into the folder and
Cowork matches your structure and voice.`]})}),`
`,(0,n.jsx)(h,{tag:"practice",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Ask it to flag uncertainty."}),` Add "flag anything you're not confident about"
so you know where to look first when you review the draft.`]})}),`
`,(0,n.jsx)(r.h2,{id:"3-make-cowork-work-for-you",children:"3. Make Cowork work for you"}),`
`,(0,n.jsx)(r.p,{children:"A plugin skill is a starting point — customize it with your own practices and expertise. A few minutes of conversation and it runs with your standards from then on."}),`
`,(0,n.jsx)(c,{folder:"Accounts",children:(0,n.jsx)(r.p,{children:`Make what we've done in this task so far into a skill, or edit the
/pipeline-review skill with my feedback.`})}),`
`,(0,n.jsxs)(i,{type:"tip",children:[(0,n.jsx)(r.strong,{children:"Tip:"})," tell Claude to edit the skill for you."]}),`
`,(0,n.jsx)(r.h2,{id:"4-make-it-repeatable",children:"4. Make it repeatable"}),`
`,(0,n.jsx)(r.h3,{id:"run-it-across-your-book-every-week",children:"Run it across your book every week"}),`
`,(0,n.jsxs)(r.p,{children:["Health should be tracked, not checked when something breaks. Type ",(0,n.jsx)(r.code,{children:"/schedule"})," in the prompt, or open ",(0,n.jsx)(r.strong,{children:"Scheduled"})," in the Cowork sidebar, and the customized skill writes a fresh summary for every account in your book each week."]}),`
`,(0,n.jsx)(c,{folder:"Accounts",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"/schedule"}),` Every Monday at 7am, run /pipeline-review for each account in my
book and write the summary to the matching health folder under Accounts. Roll
up anything red into one digest at the top.`]})}),`
`,(0,n.jsx)(l,{name:"Weekly account health",cadence:"Monday at 7:00 AM",children:(0,n.jsxs)(r.p,{children:["Runs ",(0,n.jsx)(r.code,{children:"/pipeline-review"}),` for every account in your book and writes the summary
to its health folder, with red accounts rolled up into one digest.`]})}),`
`,(0,n.jsx)(r.h2,{id:"5-share-with-your-teammates",children:"5. Share with your teammates"}),`
`,(0,n.jsxs)(r.p,{children:["Your customized ",(0,n.jsx)(r.code,{children:"/pipeline-review"})," now carries your usage thresholds, your risk rules, and your summary format. Share it so every CSM scores health the same way, and the red/yellow/green means the same thing across the whole book."]}),`
`,(0,n.jsx)(i,{type:"note",title:"Share the skill",children:(0,n.jsxs)(r.p,{children:["In Cowork, open ",(0,n.jsx)(r.strong,{children:"Skills"})," → ",(0,n.jsx)(r.code,{children:"/pipeline-review"})," → ",(0,n.jsx)(r.strong,{children:"Share"}),` and pick your
teammates (or your whole workspace, if your admin allows). They get the skill
with your thresholds and format baked in, so they don't repeat Steps 1-3.`]})}),`
`,(0,n.jsx)(r.h2,{id:"going-forward",children:"Going forward"}),`
`,(0,n.jsx)(d,{title:"Now in your Cowork",plugins:[{slug:"sales"}],tools:[{slug:"salesforce"},{slug:"zendesk"},{slug:"google-drive"}],folder:"Accounts",next:{label:"Transcript theme extractor",slug:"transcript-themes"},children:(0,n.jsx)(r.p,{children:"Every account in your book has a current health summary — scored the same way, written to its folder, with the next actions already named."})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};