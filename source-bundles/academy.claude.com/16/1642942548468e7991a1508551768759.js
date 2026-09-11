import{em as e,nm as t}from"../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...t(),...e.components},{Callout:i,Connectors:o,CoworkPluginCard:s,CoworkPrompt:c,CoworkScheduled:l,CoworkWorkingFolder:u,CoworkWrapUp:d,Mark:f,MarkHighlight:p,ResourceWidget:m,Tip:h}=r;return i||a("Callout",!0),o||a("Connectors",!0),s||a("CoworkPluginCard",!0),c||a("CoworkPrompt",!0),l||a("CoworkScheduled",!0),u||a("CoworkWorkingFolder",!0),d||a("CoworkWrapUp",!0),f||a("Mark",!0),p||a("MarkHighlight",!0),m||a("ResourceWidget",!0),h||a("Tip",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m,{name:"Embed1"}),`
`,(0,n.jsx)(r.h2,{id:"1-set-up",children:"1. Set up"}),`
`,(0,n.jsx)(r.h3,{id:"try-a-plugin",children:"Try a plugin"}),`
`,(0,n.jsxs)(r.p,{children:["The Sales plugin ships with ",(0,n.jsx)(r.code,{children:"/pipeline-review"})," and other account-health skills as a starting point, already structured to score a book of business and flag what's at risk. If your admin manages plugins and it's not available yet, skip this; nothing below requires it."]}),`
`,(0,n.jsx)(s,{slug:"sales",featured:"pipeline-review call-prep",showRun:!0}),`
`,(0,n.jsx)(r.h3,{id:"connect-your-tools",children:"Connect your tools"}),`
`,(0,n.jsxs)(r.p,{children:["Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access",children:"Learn about tool access"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["Navigate to ",(0,n.jsx)(r.strong,{children:"Customize → Connectors"})," in Cowork to set up."]}),`
`,(0,n.jsx)(o,{items:[{slug:"salesforce",note:"Pull the renewal book, ARR, owner, and any logged exec commitments straight from CRM."},{slug:"gong",note:"Read the last QBR and recent call sentiment for each account."},{slug:"zendesk",optional:!0,note:"Factor open and recently escalated support tickets into the risk score."}]}),`
`,(0,n.jsx)(i,{type:"tip",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Want to try this task before setting anything up?"})," Add your files to a working folder, point Cowork at the folder, and start with the prompt."]})}),`
`,(0,n.jsx)(r.h3,{id:"set-your-working-folder",children:"Set your working folder"}),`
`,(0,n.jsxs)(r.p,{children:["Drag the files you'll use (a CRM export of the renewal book, a product-usage CSV, last quarter's QBR notes) into one folder and point Cowork at it. Cowork reads from it and writes the risk audit and the artifact link back to it. ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork",children:"Create a Cowork project"})," from your renewal folder so your scoring rubric and the exec-commitment tracker stay attached."]}),`
`,(0,n.jsx)(u,{name:"Renewals / FY26-Q3",files:[{name:"q3-renewal-book.csv",kind:"csv",date:"Apr 27, 2026",size:"48 KB"},{name:"usage-90d-by-account.csv",kind:"csv",date:"Apr 27, 2026",size:"112 KB"},{name:"exec-commitments-open.md",kind:"md",date:"Apr 20, 2026",size:"4 KB"}]}),`
`,(0,n.jsx)(r.h2,{id:"2-the-prompt",children:"2. The prompt"}),`
`,(0,n.jsx)(r.h3,{id:"copy-this-into-claude-cowork",children:"Copy this into Claude Cowork"}),`
`,(0,n.jsx)(c,{folder:"Renewals / FY26-Q3",children:(0,n.jsxs)(r.p,{children:["Audit ",(0,n.jsx)(f,{id:"crm",children:"my Q3 renewal book"}),`. For every account renewing in the next 90 days,
score renewal risk red/yellow/green based on `,(0,n.jsx)(f,{id:"a",children:`product-usage
trend, recent sentiment, and open exec commitments`}),". ",(0,n.jsx)(f,{id:"b",children:`Explain
the signal that drove each score`}),", and ",(0,n.jsx)(f,{id:"c",children:`publish it as a
live artifact`})," I can share with leadership."]})}),`
`,(0,n.jsx)(r.h3,{id:"why-this-works",children:"Why this works"}),`
`,(0,n.jsx)(p,{mark:"a",children:(0,n.jsx)(h,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Name the inputs to weigh."}),` Usage trend, last sentiment, open commitments
are the inputs that actually predict churn; saying so keeps the score
explainable.`]})})}),`
`,(0,n.jsx)(p,{mark:"b",children:(0,n.jsx)(h,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Ask for the reason behind each score."}),` Asking for the reason behind each
score so each red includes why it's at risk — something you can act on.`]})})}),`
`,(0,n.jsx)(p,{mark:"c",children:(0,n.jsx)(h,{tag:"prompt",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Say how you'll share the output."}),` A live artifact means leadership opens
one link and it's current, not last Tuesday's spreadsheet.`]})})}),`
`,(0,n.jsx)(p,{mark:"crm",children:(0,n.jsx)(h,{tag:"source",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Pull from the authoritative source."}),` The renewal date, ARR, and owner come
from Salesforce, so the audit and the forecast agree.`]})})}),`
`,(0,n.jsx)(r.h3,{id:"get-a-better-draft",children:"Get a better draft"}),`
`,(0,n.jsx)(h,{tag:"practice",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Add your scoring rubric."}),` Drop your team's red/yellow/green definitions in
the project and the scores match how your forecast call already talks.`]})}),`
`,(0,n.jsx)(h,{tag:"practice",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Ask for next actions."}),` Add "for every red, suggest the next action and who
runs it" so the audit is also the save plan.`]})}),`
`,(0,n.jsx)(r.h2,{id:"3-make-cowork-work-for-you",children:"3. Make Cowork work for you"}),`
`,(0,n.jsx)(r.p,{children:"A plugin skill is a starting point — customize it with your own practices and expertise. A few minutes of conversation and it runs with your standards from then on."}),`
`,(0,n.jsx)(c,{folder:"Renewals",children:(0,n.jsx)(r.p,{children:`Make what we've done in this task so far into a skill, or edit the
/pipeline-review skill with my feedback.`})}),`
`,(0,n.jsxs)(i,{type:"tip",children:[(0,n.jsx)(r.strong,{children:"Tip:"})," tell Claude to edit the skill for you."]}),`
`,(0,n.jsx)(r.h2,{id:"4-make-it-repeatable",children:"4. Make it repeatable"}),`
`,(0,n.jsx)(r.h3,{id:"make-it-a-live-artifact",children:"Make it a live artifact"}),`
`,(0,n.jsx)(r.p,{children:"A spreadsheet is a snapshot. Ask Cowork to publish the audit as a live artifact and leadership opens one link that refreshes from CRM, with filters for segment, owner, and risk."}),`
`,(0,n.jsx)(c,{folder:"Renewals / FY26-Q3",children:(0,n.jsx)(r.p,{children:`Publish that renewal-risk table as a live artifact for sales leadership,
filterable by segment and owner, and refresh it nightly from Salesforce.`})}),`
`,(0,n.jsx)(r.h3,{id:"run-it-on-a-schedule",children:"Run it on a schedule"}),`
`,(0,n.jsxs)(r.p,{children:["Risk moves week to week. Type ",(0,n.jsx)(r.code,{children:"/schedule"})," in the prompt, or open ",(0,n.jsx)(r.strong,{children:"Scheduled"})," in the Cowork sidebar, and the customized skill rescores the book and refreshes the artifact before your Monday forecast call."]}),`
`,(0,n.jsx)(c,{folder:"Renewals",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"/schedule"}),` Every Monday at 7am, rerun the renewal risk audit on the
current 90-day book, refresh the live artifact, and DM me any account that
moved to red since last week.`]})}),`
`,(0,n.jsx)(l,{name:"Weekly renewal risk audit",cadence:"Mondays at 7:00am",children:(0,n.jsx)(r.p,{children:`Rescores the 90-day renewal book on usage, sentiment, and open commitments,
refreshes the live artifact, and DMs new reds.`})}),`
`,(0,n.jsx)(r.h2,{id:"5-share-with-your-teammates",children:"5. Share with your teammates"}),`
`,(0,n.jsx)(r.p,{children:"Your customized skill now carries your scoring rubric, your usage thresholds, and your save-play library. Share it so every CSM and AE in the segment runs the same audit and the forecast call argues about action, not definitions."}),`
`,(0,n.jsx)(i,{type:"note",title:"Share the skill",children:(0,n.jsxs)(r.p,{children:["In Cowork, open ",(0,n.jsx)(r.strong,{children:"Skills"})," → your saved skill → ",(0,n.jsx)(r.strong,{children:"Share"}),` and pick your
teammates (or your whole workspace, if your admin allows). They get the skill
with your instructions baked in, they don't repeat Steps 1-3.`]})}),`
`,(0,n.jsx)(r.h2,{id:"what-changes-for-the-renewal-motion",children:"What changes for the renewal motion"}),`
`,(0,n.jsxs)(d,{next:{label:"Account tracking and health",slug:"account-tracking"},children:[(0,n.jsx)(r.p,{children:"Every account in your renewal window has a risk score, the signal behind it, and an owner, in one shared view that stays current. You work the at-risk list instead of building it."}),(0,n.jsx)(r.p,{children:"You did this for one renewal cycle. The same approach covers expansion reviews, forecast risk, and QBR prep — each one a skill in your team's plugin, run the same way every time."})]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};