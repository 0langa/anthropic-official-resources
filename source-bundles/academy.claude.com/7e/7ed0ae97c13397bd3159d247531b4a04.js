import{$p as e,Zp as t}from"../../../content-de-meta-ictkjcaa.js";var n=t();function r(t){let r={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{CoworkPrompt:i,CoworkResponse:o,Image:s,TryIn:c}=r;return i||a("CoworkPrompt",!0),o||a("CoworkResponse",!0),s||a("Image",!0),c||a("TryIn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{src:"./process-batches-of-vendors-with-cowork.png",alt:"Process batches of vendors with Cowork result",preview:!0}),`
`,(0,n.jsx)(r.h2,{id:"1-describe-the-task",children:"1. Describe the task"}),`
`,(0,n.jsx)(r.p,{children:"In Cowork, Claude works across your local files and browser in a single session. It reads your vendor tracker, contract templates, and vendor documents from a folder, then fills intake forms in your procurement portal through Claude in Chrome."}),`
`,(0,n.jsx)(r.p,{children:"In your prompt, describe the end state you want. Claude plans the onboarding steps from there, and when parts of the workflow are independent, it runs them in parallel."}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r.p,{children:"I need to onboard several vendors. Their documents spread across my desktop."}),(0,n.jsx)(r.p,{children:"For each new vendor:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Create an NDAs and MSAs from the templates"}),`
`,(0,n.jsx)(r.li,{children:"Fill out an onboarding form"}),`
`,(0,n.jsx)(r.li,{children:"Afterwards, add all information to the vendor tracker spreadsheet"}),`
`]}),(0,n.jsx)(r.p,{children:"Organize all the new documents on my desktop."})]}),`
`,(0,n.jsx)(r.h2,{id:"2-give-claude-context",children:"2. Give Claude context"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/tutorials/choosing-between-claude-cowork-or-chat",children:"Cowork"})," is a workspace in Claude, available in the ",(0,n.jsx)(r.a,{href:"https://claude.com/download",children:"Claude Desktop"})," app and — with remote sessions (in beta) — on web and mobile. Run locally, Claude works directly with your local files, so there's no copying and pasting into the conversation. For browser work like filling portal forms, it uses ",(0,n.jsx)(r.a,{href:"https://claude.com/chrome",children:"Claude in Chrome"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"What to expect:"})," After your initial prompt in Cowork, Claude may ask you questions about how to handle the batch, then build a plan you can review in the sidebar. This front-loading helps it run end-to-end with fewer interruptions."]}),`
`,(0,n.jsx)(r.h3,{id:"required-context",children:"Required context"}),`
`,(0,n.jsx)(r.p,{children:"To get started:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Download ",(0,n.jsx)(r.a,{href:"https://claude.com/download",children:"Claude Desktop"})," and start a Cowork session"]}),`
`,(0,n.jsxs)(r.li,{children:["Select ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.em,{children:"Work in a folder"})})," in the chat bar and choose the folder with your vendor tracker, contract templates, and vendor details"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://claude.com/chrome",children:"Install Claude in Chrome"})," and turn on the Claude in Chrome connector (Settings > Connectors), then log into your procurement portal"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"3-what-claude-creates",children:"3. What Claude creates"}),`
`,(0,n.jsx)(r.p,{children:"Claude works through each step, moving between your local files and your browser to complete the full onboarding. Using the Claude in Chrome connector, Claude opens your procurement portal in a new browser tab and fills out intake forms directly, while reading vendor details and generating contracts from the files in your folder."}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsx)(r.p,{children:"I'll work through the onboarding in three parts — updating your spreadsheet, completing the portal form, and generating the MSA."}),(0,n.jsx)(r.h4,{children:"1. Vendor Tracker Updated"}),(0,n.jsx)(r.p,{children:"I've added Meridian Solutions to your vendor tracker:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Vendor Name: Meridian Solutions"}),`
`,(0,n.jsx)(r.li,{children:"Primary Contact: David Chen"}),`
`,(0,n.jsx)(r.li,{children:"Service Category: IT Consulting"}),`
`,(0,n.jsx)(r.li,{children:"Annual Value: $150,000"}),`
`,(0,n.jsx)(r.li,{children:"Status: Pending MSA"}),`
`]}),(0,n.jsx)(r.h4,{children:"2. Procurement Portal Form"}),(0,n.jsx)(r.p,{children:"I've completed the vendor intake form in your Chrome tab. The form is ready for you to review and submit."}),(0,n.jsx)(r.h4,{children:"3. Master Service Agreement Generated"}),(0,n.jsx)(r.p,{children:"I've created the MSA from your template and saved it to your Documents folder."}),(0,n.jsx)(r.p,{children:"I'll now continue with the remaining vendors…"})]}),`
`,(0,n.jsx)(r.h2,{id:"4-follow-up-prompts",children:"4. Follow up prompts"}),`
`,(0,n.jsx)(r.p,{children:"Continue the conversation with Claude to refine, expand, or explore further."}),`
`,(0,n.jsx)(r.h3,{id:"generate-additional-documents",children:"Generate additional documents"}),`
`,(0,n.jsx)(r.p,{children:"Create more contracts from your templates. NDAs, SOWs, or other vendor documents using the same vendor details."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:'"Also generate an NDA from our template at ~/Documents/Templates/NDA-Template.docx and save it in the same folder as the MSA."'})})}),`
`,(0,n.jsx)(r.h3,{id:"organize-vendor-files",children:"Organize vendor files"}),`
`,(0,n.jsx)(r.p,{children:"Create a vendor folder with everything in one place. Move or copy all onboarding documents to a dedicated folder."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:'"Create a folder called Meridian-Solutions in ~/Documents/Vendors and move the MSA there. Also save a copy of their contact details as a text file."'})})}),`
`,(0,n.jsx)(r.h2,{id:"5-tricks-tips-and-troubleshooting",children:"5. Tricks, tips, and troubleshooting"}),`
`,(0,n.jsx)(r.h3,{id:"subagents-can-handle-independent-tasks-at-the-same-time",children:"Subagents can handle independent tasks at the same time"}),`
`,(0,n.jsx)(r.p,{children:"Updating the vendor tracker and generating the contract don't depend on each other — so you can ask Claude to spin up subagents and run them in parallel."}),`
`,(0,n.jsx)(r.h3,{id:"turn-on-the-claude-in-chrome-connector-before-starting",children:"Turn on the Claude in Chrome connector before starting"}),`
`,(0,n.jsx)(r.p,{children:"Install Claude in Chrome and enable it under Settings > Connectors, then select it from the Connectors menu in your Cowork session. Log into your procurement portal before you start — Claude works within your authenticated session."}),`
`,(0,n.jsx)(r.h3,{id:"the-progress-panel-shows-what-claude-is-working-on",children:"The progress panel shows what Claude is working on"}),`
`,(0,n.jsx)(r.p,{children:"Cowork displays which files Claude is reading and what it's doing at each step. If something looks off, you can steer the work in progress."}),`
`,(0,n.jsx)(r.h2,{id:"6-ready-to-try-for-yourself",children:"6. Ready to try for yourself?"}),`
`,(0,n.jsx)(r.p,{children:"Use Cowork to handle vendor onboarding in one session — updating your tracker, generating contracts, and filling portal forms."}),`
`,(0,n.jsxs)(c,{surfaces:["cowork"],children:[(0,n.jsx)(r.p,{children:"I need to onboard several vendors. Their documents spread across my desktop."}),(0,n.jsx)(r.p,{children:"For each new vendor:"}),(0,n.jsx)(r.p,{children:`• Create an NDAs and MSAs from the templates
• Fill out an onboarding form
• Afterwards, add all information to the vendor tracker spreadsheet`}),(0,n.jsx)(r.p,{children:"Organize all the new documents on my desktop."})]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};