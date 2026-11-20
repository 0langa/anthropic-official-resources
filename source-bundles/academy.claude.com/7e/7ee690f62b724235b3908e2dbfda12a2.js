import{n as e,r as t}from"../../../react-ml7fx0sn.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...e(),...t.components},{Callout:i,Connectors:o,CoworkPrompt:s,CoworkScheduled:c,CoworkWorkingFolder:l,CoworkWrapUp:u,Mark:d,MarkHighlight:f,ResourceWidget:p,Tip:m}=r;return i||a("Callout",!0),o||a("Connectors",!0),s||a("CoworkPrompt",!0),c||a("CoworkScheduled",!0),l||a("CoworkWorkingFolder",!0),u||a("CoworkWrapUp",!0),d||a("Mark",!0),f||a("MarkHighlight",!0),p||a("ResourceWidget",!0),m||a("Tip",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{name:"Embed1"}),`
`,(0,n.jsx)(r.h2,{id:"1-set-up",children:"1. Set up"}),`
`,(0,n.jsx)(r.h3,{id:"connect-your-tools",children:"Connect your tools"}),`
`,(0,n.jsxs)(r.p,{children:["Claude is more powerful when it works directly with your systems. You control permissions and access. ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access",children:"Learn about tool access"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://claude.ai/desktop/customize/connectors",children:"Add a connector"})," for each tool you want Claude to use."]}),`
`,(0,n.jsx)(o,{items:[{slug:"salesforce"},{slug:"zendesk",note:"Read open and recently solved tickets so the health call reflects what support is actually seeing."},{slug:"google-drive"}]}),`
`,(0,n.jsx)(i,{type:"tip",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Want to try this task before setting anything up?"}),` Drag in your files, or
give Claude access to a folder in the Claude desktop app. Then start with the
prompt.`]})}),`
`,(0,n.jsx)(r.h3,{id:"set-your-working-folder",children:"Set your working folder"}),`
`,(0,n.jsxs)(r.p,{children:["Drag the files you'll use (the usage export, the success plan, the latest NPS responses) into one folder on your machine, then ",(0,n.jsx)(r.a,{href:"/tutorials/navigating-the-claude-desktop-app#folders",children:"give Claude access to it"})," in the Claude desktop app. Claude reads from the folder and writes the health summary back to it. If you track this account ongoing, ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork",children:"create a project"})," from that folder so your health criteria, instructions, and memory stay attached."]}),`
`,(0,n.jsx)(l,{name:"Accounts / Northwind / health",files:[{name:"usage-export-aug.csv",kind:"csv",date:"Aug 25, 2026",size:"64 KB"},{name:"success-plan.docx",kind:"doc",date:"Feb 3, 2026",size:"38 KB"},{name:"nps-responses-q3.csv",kind:"csv",date:"Aug 3, 2026",size:"12 KB"}]}),`
`,(0,n.jsx)(r.h2,{id:"2-the-prompt",children:"2. The prompt"}),`
`,(0,n.jsx)(r.h3,{id:"copy-this-into-claude",children:"Copy this into Claude"}),`
`,(0,n.jsx)(s,{folder:"Accounts / Northwind / health",children:(0,n.jsxs)(r.p,{children:["From the ",(0,n.jsxs)(d,{id:"b",children:[(0,n.jsx)(d,{id:"c",children:"usage data"}),", open Zendesk tickets, NPS responses, and ",(0,n.jsx)(d,{id:"c",children:"success plan"})]})," for Northwind, write the account health summary to the account folder: call it ",(0,n.jsx)(d,{id:"a",children:"red, yellow, or green with the reason"})," in one or two sentences, then the ",(0,n.jsx)(d,{id:"actions",children:"two actions to take this week"}),"."]})}),`
`,(0,n.jsx)(r.h3,{id:"why-this-works",children:"Why this works"}),`
`,(0,n.jsx)(f,{mark:"a",children:(0,n.jsx)(m,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Give a fixed set of answers."}),` "Red, yellow, or green" makes Claude commit
to one status instead of hedging, and "with the reason" means the call is
defensible when leadership asks.`]})})}),`
`,(0,n.jsx)(f,{mark:"actions",children:(0,n.jsx)(m,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Say how many items you want."}),` "Two actions I should take this week" keeps
the output to what you'll actually do before Friday, not a backlog of
everything that could help.`]})})}),`
`,(0,n.jsx)(f,{mark:"b",children:(0,n.jsx)(m,{tag:"source",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Name the sources to weigh together."}),` Naming usage, tickets, NPS, and the
success plan together means health is weighed across product, support,
sentiment, and goals, not just whichever dashboard you checked last.`]})})}),`
`,(0,n.jsx)(f,{mark:"c",children:(0,n.jsx)(m,{tag:"source",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Include the goals to measure against."}),` The success plan and usage export
sit in the working folder, so the health call is measured against the goals
you actually agreed with the customer.`]})})}),`
`,(0,n.jsx)(r.h3,{id:"get-a-better-draft",children:"Get a better draft"}),`
`,(0,n.jsx)(m,{tag:"practice",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Add an example to match."}),` Drop an example you like into the folder and
Claude matches your structure and voice.`]})}),`
`,(0,n.jsx)(m,{tag:"practice",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Ask it to flag uncertainty."}),` Add "flag anything you're not confident about"
so you know where to look first when you review the draft.`]})}),`
`,(0,n.jsx)(r.h2,{id:"3-make-claude-work-for-you",children:"3. Make Claude work for you"}),`
`,(0,n.jsx)(r.p,{children:"Tell Claude your own rules for this task, such as your usage thresholds and your risk rules, then save what you've done as a skill of your own. A few minutes of conversation and it runs with your standards from then on."}),`
`,(0,n.jsx)(s,{folder:"Accounts / Northwind / health",children:(0,n.jsx)(r.p,{children:"Make what we've done in this task so far into a skill called /account-health."})}),`
`,(0,n.jsx)(r.p,{children:"Review the skill, and save it if Claude hasn't already."}),`
`,(0,n.jsxs)(i,{type:"tip",children:[(0,n.jsx)(r.strong,{children:"Tip:"})," tell Claude to edit the skill for you."]}),`
`,(0,n.jsx)(r.h2,{id:"4-make-it-repeatable",children:"4. Make it repeatable"}),`
`,(0,n.jsx)(r.h3,{id:"run-it-across-your-book-every-week",children:"Run it across your book every week"}),`
`,(0,n.jsxs)(r.p,{children:["Health should be tracked, not checked when something breaks. Ask Claude to set up a scheduled task, or open ",(0,n.jsx)(r.strong,{children:"Scheduled"})," in the sidebar, and ",(0,n.jsx)(r.code,{children:"/account-health"})," writes a fresh summary for every account in your book each week."]}),`
`,(0,n.jsx)(s,{folder:"Accounts",children:(0,n.jsx)(r.p,{children:`Set up a scheduled task for every Monday at 7am: run /account-health for each account in my
book and write the summary to the matching health folder under Accounts. Put
the red accounts first in one digest.`})}),`
`,(0,n.jsx)(c,{name:"Weekly account health",cadence:"Monday at 7:00 AM",children:(0,n.jsxs)(r.p,{children:["Runs ",(0,n.jsx)(r.code,{children:"/account-health"}),` for every account in your book and writes the summary
to its health folder, with red accounts first in one digest for you to confirm.`]})}),`
`,(0,n.jsx)(r.p,{children:"To use a folder on your computer during a scheduled task, keep your computer on and awake with the Claude desktop app open so Claude can access it."}),`
`,(0,n.jsx)(r.h2,{id:"5-share-with-your-teammates",children:"5. Share with your teammates"}),`
`,(0,n.jsxs)(r.p,{children:["Your ",(0,n.jsx)(r.code,{children:"/account-health"})," skill now carries your usage thresholds, your risk rules, and your summary format. Share it so every CSM scores health the same way, and the red/yellow/green means the same thing across the whole book."]}),`
`,(0,n.jsx)(i,{type:"note",title:"Share the skill",children:(0,n.jsxs)(r.p,{children:["You can share a skill you created. In ",(0,n.jsx)(r.a,{href:"https://claude.ai/customize/skills/yours",children:"your skills"}),", open the ",(0,n.jsx)(r.strong,{children:"..."}),`
menu next to `,(0,n.jsx)(r.code,{children:"/account-health"}),", select ",(0,n.jsx)(r.strong,{children:"Share"}),`, and pick your teammates.
For your whole organization, open the skill and select `,(0,n.jsx)(r.strong,{children:"Publish to org"}),`, if
your admin allows. They get the skill with your thresholds and format baked
in, so they don't have to build it again.`]})}),`
`,(0,n.jsx)(r.h2,{id:"going-forward",children:"Going forward"}),`
`,(0,n.jsx)(u,{title:"Now set up in Claude",tools:[{slug:"salesforce"},{slug:"zendesk"},{slug:"google-drive"}],folder:"Accounts",next:{label:"Transcript theme extractor",slug:"transcript-themes"},children:(0,n.jsx)(r.p,{children:"Every account in your book has a current health summary — scored the same way, written to its folder, with the next actions already named."})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}i.uses=["Callout","Connectors","CoworkPrompt","CoworkScheduled","CoworkWorkingFolder","CoworkWrapUp","Mark","MarkHighlight","ResourceWidget","Tip"];export{i as default};