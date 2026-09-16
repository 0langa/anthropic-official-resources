import{Gp as e,qp as t}from"../../../content-de-meta-jwql3rqc.js";var n=e();function r(e){let r={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{CoworkPrompt:i,CoworkResponse:o,TryIn:s,Video:c}=r;return i||a("CoworkPrompt",!0),o||a("CoworkResponse",!0),s||a("TryIn",!0),c||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{youtubeId:"UAmKyyZ-b9E",title:"Prep scattered documents for a compliance audit demo"}),`
`,(0,n.jsx)(r.h2,{id:"1-describe-the-task",children:"1. Describe the task"}),`
`,(0,n.jsx)(r.p,{children:"In Cowork, Claude processes an entire folder of audit documents at once: policies, procedures, contracts, evidence, scans. It reads each file to understand what it is, so there's no renaming or sorting beforehand."}),`
`,(0,n.jsx)(r.p,{children:"Your prompt just needs the audit framework and scope. Claude categorizes everything, renames files to match, and flags gaps in your documentation while you move on to something else."}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r.p,{children:`I have 100+ documents for our upcoming SOC 2 audit in this folder. Right now they're scattered with names like "policy_v2_final.docx" and "scan0042.pdf". I need to organize them before the auditors arrive:`}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Rename files with clear titles showing document type, effective date, and which control area they cover"}),`
`,(0,n.jsx)(r.li,{children:"Group by control category (Access Control, Change Management, Incident Response, etc.)"}),`
`,(0,n.jsx)(r.li,{children:"Flag any control areas where we seem to have gaps in documentation"}),`
`]}),(0,n.jsx)(r.p,{children:"Our audit scope covers security, availability, and confidentiality. The audit period is January through December 2024."})]}),`
`,(0,n.jsx)(r.h2,{id:"2-give-claude-context",children:"2. Give Claude context"}),`
`,(0,n.jsxs)(r.p,{children:["In ",(0,n.jsx)(r.a,{href:"https://claude.com/download",children:"Claude Desktop"}),", ",(0,n.jsx)(r.a,{href:"/tutorials/choosing-between-claude-cowork-or-chat",children:"Cowork"})," is a workspace that works directly with your local files. Point it at your audit folder and it reads everything inside, including PDFs, Word docs, spreadsheets, and scans."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"What to expect:"})," After your initial prompt in Cowork, Claude may ask you questions about your audit scope and requirements, then build a plan you can review in the sidebar. This helps it work more independently and produce results closer to finished."]}),`
`,(0,n.jsx)(r.h3,{id:"required-context",children:"Required context"}),`
`,(0,n.jsx)(r.p,{children:"To get started:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Download ",(0,n.jsx)(r.a,{href:"https://claude.com/download",children:"Claude Desktop"})," and start a Cowork session"]}),`
`,(0,n.jsxs)(r.li,{children:["Select ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.em,{children:"Work in a folder"})})," in the chat bar and choose the folder containing your audit documents, or use the ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.em,{children:"+"})})," button to add individual files"]}),`
`,(0,n.jsx)(r.li,{children:"Include your audit scope or control framework so Cowork can categorize documents against it"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"3-what-claude-creates",children:"3. What Claude creates"}),`
`,(0,n.jsx)(r.p,{children:"Cowork reviews the entire document folder, produces a rename mapping organized by control area, identifies coverage, and flags potential gaps."}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsx)(r.p,{children:"I've reviewed all 156 documents in your audit folder. Here's what I found:"}),(0,n.jsx)(r.h4,{children:"Document Inventory"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Policies: 24 documents"}),`
`,(0,n.jsx)(r.li,{children:"Procedures: 31 documents"}),`
`,(0,n.jsx)(r.li,{children:"Contracts and agreements: 18 documents"}),`
`,(0,n.jsx)(r.li,{children:"Evidence and logs: 67 documents"}),`
`,(0,n.jsx)(r.li,{children:"Training records: 16 documents"}),`
`]}),(0,n.jsx)(r.h4,{children:"Coverage by Control Area"}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Well covered:"})," Access Control (28), Change Management (22), Vendor Management (18)"]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"May need attention:"})," Incident Response (8), Data Backup & Recovery (6)"]}),(0,n.jsx)(r.h4,{children:"Gaps Identified"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Incident Response: No evidence of testing or tabletop exercises"}),`
`,(0,n.jsx)(r.li,{children:"Backup & Recovery: No restoration test evidence"}),`
`,(0,n.jsx)(r.li,{children:"Business Continuity: Not in inventory"}),`
`]}),(0,n.jsx)(r.p,{children:"Want me to proceed with the reorganization?"})]}),`
`,(0,n.jsx)(r.h2,{id:"4-follow-up-prompts",children:"4. Follow up prompts"}),`
`,(0,n.jsx)(r.p,{children:"Continue the conversation with Claude to refine, expand, or explore further."}),`
`,(0,n.jsx)(r.h3,{id:"create-the-control-matrix-as-a-spreadsheet",children:"Create the control matrix as a spreadsheet"}),`
`,(0,n.jsx)(r.p,{children:"Cowork writes files directly to your folder. Instead of copying output from chat, have it create the matrix as an Excel file you can share with auditors."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:'"Create a spreadsheet in this folder mapping each SOC 2 control to the documents that support it. Include columns for control ID, description, evidence documents, and coverage status."'})})}),`
`,(0,n.jsx)(r.h3,{id:"pull-evidence-from-your-ticketing-system",children:"Pull evidence from your ticketing system"}),`
`,(0,n.jsx)(r.p,{children:"Use Claude in Chrome for web-based tools. If your change management or incident response evidence lives in Jira, ServiceNow, or another web tool, Cowork can read it directly from the browser."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:'"I have Jira open with our change management tickets. Pull the last 6 months of change requests and create a summary document showing we follow our change management procedure."'})})}),`
`,(0,n.jsx)(r.h3,{id:"generate-policy-summaries-for-the-walkthrough",children:"Generate policy summaries for the walkthrough"}),`
`,(0,n.jsx)(r.p,{children:"Create a reference doc for your audit conversations. Cowork reads each policy and writes a cheat sheet you can use when auditors ask questions."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:'"Read our policies folder and create a one-page reference doc. For each policy: what it covers, last updated date, and the 2-3 key requirements I should be able to explain."'})})}),`
`,(0,n.jsx)(r.h2,{id:"5-tricks-tips-and-troubleshooting",children:"5. Tricks, tips, and troubleshooting"}),`
`,(0,n.jsx)(r.h3,{id:"for-sensitive-policies-contracts-and-evidence-files-run-your-session-locally",children:"For sensitive policies, contracts, and evidence files, run your session locally"}),`
`,(0,n.jsx)(r.p,{children:"Those documents stay stored in your own folders and Claude's work on them runs on your machine — what Claude reads is processed by Anthropic's servers to generate responses, as in any Claude conversation."}),`
`,(0,n.jsx)(r.h3,{id:"point-cowork-at-the-mess-not-just-the-polished-files",children:"Point Cowork at the mess, not just the polished files"}),`
`,(0,n.jsx)(r.p,{children:`If you have a "to be organized" folder with random scans and downloads, that's exactly where to start. Cowork can make sense of poorly named files from their content.`}),`
`,(0,n.jsx)(r.h3,{id:"use-your-existing-framework-as-a-guide",children:"Use your existing framework as a guide"}),`
`,(0,n.jsx)(r.p,{children:"If you have a control matrix, audit checklist, or framework mapping, include it in the folder. Cowork uses it to categorize documents more accurately."}),`
`,(0,n.jsx)(r.h2,{id:"6-ready-to-try-for-yourself",children:"6. Ready to try for yourself?"}),`
`,(0,n.jsx)(r.p,{children:"Give Cowork folder access and get organized documentation, identified gaps, and a clear picture of your audit readiness."}),`
`,(0,n.jsxs)(s,{surfaces:["cowork"],children:[(0,n.jsx)(r.p,{children:`I have 100+ documents for our upcoming SOC 2 audit in this folder. Right now they're scattered with names like "policy_v2_final.docx" and "scan0042.pdf". I need to organize them before the auditors arrive:`}),(0,n.jsx)(r.p,{children:`• Rename files with clear titles showing document type, effective date, and which control area they cover
• Group by control category (Access Control, Change Management, Incident Response, etc.)
• Flag any control areas where we seem to have gaps in documentation`}),(0,n.jsx)(r.p,{children:"Our audit scope covers security, availability, and confidentiality. The audit period is January through December 2024."})]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};