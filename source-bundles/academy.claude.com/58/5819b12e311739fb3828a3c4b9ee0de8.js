import{em as e,nm as t}from"../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{Connectors:i,CoworkPrompt:o,CoworkResponse:s,CoworkWorkingFolder:c,ExcelPrompt:l,TryIn:u,Video:d}=r;return i||a("Connectors",!0),o||a("CoworkPrompt",!0),s||a("CoworkResponse",!0),c||a("CoworkWorkingFolder",!0),l||a("ExcelPrompt",!0),u||a("TryIn",!0),d||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{youtubeId:"cIctgHKEeMA",title:"Update your financial model after earnings demo"}),`
`,(0,n.jsx)(r.h2,{id:"1-describe-the-task",children:"1. Describe the task"}),`
`,(0,n.jsx)(r.p,{children:"The print drops after hours and the stock is moving. You've got the model in a folder somewhere, the release open in one tab, the transcript in another, and a PM meeting in the morning."}),`
`,(0,n.jsx)(r.p,{children:"In Cowork, Claude pulls the earnings release and call transcript through the S&P Global connector, reads your model from the attached folder, and tells you where your forecast was off — and which assumptions the transcript doesn't back up. You take that brief into Claude for Excel to make the cell changes, then open the deck in Claude for PowerPoint. The Excel-to-PowerPoint handoff carries the conversation, so Claude already knows which cells you changed when you build the page."}),`
`,(0,n.jsx)(r.p,{children:"Claude handles the data pull and the cross-referencing; you make the call on what moves."}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsx)(r.p,{children:"ACME just jumped 8% after hours — what's driving this? I need to update my model and build a page for tomorrow's PM meeting."}),(0,n.jsx)(r.p,{children:"Steps:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Pull the earnings release and call transcript from S&P"}),`
`,(0,n.jsx)(r.li,{children:"Read my model in the folder and flag where my forecast was off"}),`
`,(0,n.jsx)(r.li,{children:"Tell me which assumptions the transcript doesn't support"}),`
`,(0,n.jsx)(r.li,{children:"Give me a brief I can take into Excel — cell refs, what to change, why"}),`
`]}),(0,n.jsx)(r.p,{children:"Show me the flags before I touch anything."})]}),`
`,(0,n.jsx)(r.h2,{id:"2-give-claude-context",children:"2. Give Claude context"}),`
`,(0,n.jsx)(r.p,{children:"Cowork pulls earnings data through the S&P Global connector and reads your model from the attached folder — that's where the cross-referencing happens. Cell edits happen in Claude for Excel with the workbook open, and the conversation carries into Claude for PowerPoint so the deck build picks up where you left off."}),`
`,(0,n.jsx)(r.h3,{id:"required-context",children:"Required context"}),`
`,(0,n.jsx)(r.p,{children:"Attach your portfolio folder with the model. Enable the S&P Global connector. Have Claude for Excel and PowerPoint add-in installed — that's where the cell edits and slide builds happen."}),`
`,(0,n.jsx)(i,{items:[{slug:"s-p-global"}]}),`
`,(0,n.jsx)(c,{name:"Portfolio folder",files:[{name:"ACME valuation model",kind:"xlsx"},{name:"Prior PM deck",kind:"pptx"},{name:"ACME valuation model",kind:"xlsx"}]}),`
`,(0,n.jsx)(r.h2,{id:"3-what-claude-creates",children:"3. What Claude creates"}),`
`,(0,n.jsx)(r.p,{children:"A brief you can act on: what moved the stock, where your forecast was off, and the exact cells to look at when you open the workbook."}),`
`,(0,n.jsxs)(s,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What moved the stock — Q4 FY26"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Revenue: $2.72B — beat $2.58B guide, $130M above your $2.61B forecast"}),`
`,(0,n.jsx)(r.li,{children:"Adj. EPS: $2.05 — beat $1.90 Street"}),`
`,(0,n.jsx)(r.li,{children:"Gross margin: 45.7% vs. your 42.4% implied — this is the driver"}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"1 assumption to review"})}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Assumptions!C7 — FY28E gross margin at 43.0%"})}),(0,n.jsx)(r.p,{children:`Management didn't guide FY28 on the call. Baird asked about out-year margin durability; CFO said "2026 is an investment year, benefits build into 2027" — nothing past that. Your 60bp expansion in FY28E is your call, not theirs.`})]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"In your Excel workbook"})}),`
`,(0,n.jsx)(r.p,{children:"With the Claude for Excel add-in installed, paste this into the sidebar with the workbook open:"}),`
`,(0,n.jsxs)(l,{children:[(0,n.jsx)(r.p,{children:"Q4 print: rev $2.72B (beat), GM 45.7% vs my 42.4%."}),(0,n.jsx)(r.p,{children:"Flag on Assumptions!C7 — FY28E GM at 43.0%, mgmt didn't guide past FY27. Walk me through C7, then build best/base/worst scenarios on the margin range."})]}),`
`,(0,n.jsx)(r.p,{children:"Once you've signed off on the cells, open the deck in Claude for PowerPoint. The conversation carries from Excel, so the page build already knows what changed."}),`
`,(0,n.jsx)(r.h2,{id:"4-follow-up-prompts",children:"4. Follow up prompts"}),`
`,(0,n.jsx)(r.p,{children:"Continue the conversation with Claude to refine, expand, or explore further."}),`
`,(0,n.jsx)(r.h3,{id:"compare-to-your-forecast",children:"Compare to your forecast"}),`
`,(0,n.jsx)(r.p,{children:"In Cowork, ask where the actual landed against what you had."}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"oh ok how does the actual number compare to what I had in my model?"})}),`
`,(0,n.jsx)(r.h3,{id:"check-an-assumption-against-the-call",children:"Check an assumption against the call"}),`
`,(0,n.jsx)(r.p,{children:"See if management said anything that should move a specific cell."}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"is my FY28 gross margin too aggressive? what did they actually say about out-year margins on the call"})}),`
`,(0,n.jsx)(r.h3,{id:"build-scenarios-in-the-workbook",children:"Build scenarios in the workbook"}),`
`,(0,n.jsx)(r.p,{children:"In Claude for Excel, once you've signed off on the assumptions."}),`
`,(0,n.jsx)(l,{children:(0,n.jsx)(r.p,{children:"ok keep the 43% — build me best/base/worst around the margin range in a new Scenarios tab"})}),`
`,(0,n.jsx)(r.h2,{id:"5-tricks-tips-and-troubleshooting",children:"5. Tricks, tips, and troubleshooting"}),`
`,(0,n.jsx)(r.h3,{id:"ask-cowork-for-the-excel-ready-brief",children:"Ask Cowork for the Excel-ready brief"}),`
`,(0,n.jsx)(r.p,{children:"End your Cowork session by asking for a one-paragraph brief with the cell refs — that's what you paste into the Claude for Excel sidebar. Tighter than scrolling back through the chat."}),`
`,(0,n.jsx)(r.h3,{id:"click-the-cell-reference",children:"Click the cell reference"}),`
`,(0,n.jsx)(r.p,{children:"When Claude flags Assumptions!C7 in the Excel sidebar, click it and Excel jumps to that cell. Check the number before you agree to change anything."}),`
`,(0,n.jsx)(r.h3,{id:"excel-to-powerpoint-carries-the-conversation",children:"Excel to PowerPoint carries the conversation"}),`
`,(0,n.jsx)(r.p,{children:`When you open the deck in Claude for PowerPoint, it already knows what you changed in Excel. You're not re-explaining the print or the thesis — just say "build me the page."`}),`
`,(0,n.jsx)(r.h3,{id:"save-it-as-a-skill",children:"Save it as a skill"}),`
`,(0,n.jsx)(r.p,{children:"Post-earnings is the same loop every quarter. Once the Cowork conversation works, save it as a skill so the next print starts one click in."}),`
`,(0,n.jsx)(r.h2,{id:"6-ready-to-try-for-yourself",children:"6. Ready to try for yourself?"}),`
`,(0,n.jsx)(r.p,{children:"Try it on your next earnings print. Attach your model folder in Cowork, ask what moved the stock, and review the flags before anything changes."}),`
`,(0,n.jsxs)(u,{surfaces:["cowork"],children:[(0,n.jsx)(r.p,{children:"ACME just jumped 8% after hours — what's driving this? I need to update my model and build a page for tomorrow's PM meeting."}),(0,n.jsx)(r.p,{children:"Steps:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Pull the earnings release and call transcript from S&P"}),`
`,(0,n.jsx)(r.li,{children:"Read my model in the folder and flag where my forecast was off"}),`
`,(0,n.jsx)(r.li,{children:"Tell me which assumptions the transcript doesn't support"}),`
`,(0,n.jsx)(r.li,{children:"Give me a brief I can take into Excel — cell refs, what to change, why"}),`
`]}),(0,n.jsx)(r.p,{children:"Show me the flags before I touch anything."})]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};