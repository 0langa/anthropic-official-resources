import{$p as e,Zp as t}from"../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Connectors:i,CoworkPrompt:o,CoworkResponse:s,CoworkWorkingFolder:c,ExcelPrompt:l,Image:u,TryIn:d}=r;return i||a("Connectors",!0),o||a("CoworkPrompt",!0),s||a("CoworkResponse",!0),c||a("CoworkWorkingFolder",!0),l||a("ExcelPrompt",!0),u||a("Image",!0),d||a("TryIn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u,{src:"./draft-a-credit-memo-from-spreads-and-statements-with-claude-for-excel.png",alt:"Draft a credit memo from spreads and statements with Claude for Excel result",preview:!0}),`
`,(0,n.jsx)(r.h2,{id:"1-describe-the-task",children:"1. Describe the task"}),`
`,(0,n.jsx)(r.p,{children:"The deal goes to committee Thursday. You've got three years of statements in the deal folder, a half-built spread in Excel, a covenant package the relationship manager sent over Friday, and a borrower that doesn't quite look like the last one you underwrote."}),`
`,(0,n.jsx)(r.p,{children:"In Cowork, Claude pulls the borrower's filings and peer spreads through the S&P Global connector, reads your underwriting workbook from the deal folder, and tells you where the ratios trip your policy thresholds — and which assumptions in the model don't square with what's in the statements. You take that brief into Claude for Excel to update the spread and run the covenants, then open the memo template in Claude for Word. The Excel-to-Word handoff carries the conversation, so Claude already knows which ratios moved when you draft the writeup."}),`
`,(0,n.jsx)(r.p,{children:"Claude pulls the spreads and runs the ratios; you make the credit decision."}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsx)(r.p,{children:"Acme Manufacturing — $25M revolver renewal, committee Thursday. Walk me through the credit before I touch the spread."}),(0,n.jsx)(r.p,{children:"Steps:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Pull three years of financials and peer spreads from S&P Global"}),`
`,(0,n.jsx)(r.li,{children:"Read the underwriting workbook in the deal folder and flag where ratios trip policy"}),`
`,(0,n.jsx)(r.li,{children:"Tell me which assumptions in the model don't match what's in the statements"}),`
`,(0,n.jsx)(r.li,{children:"Give me a brief I can take into Excel — cell refs, what to change, why"}),`
`]}),(0,n.jsx)(r.p,{children:"Show me the exceptions before I touch anything."})]}),`
`,(0,n.jsx)(r.h2,{id:"2-give-claude-context",children:"2. Give Claude context"}),`
`,(0,n.jsx)(r.p,{children:"Cowork pulls borrower data through the S&P Global connector and reads your spread from the deal folder — that's where the ratio analysis and policy check happen. Cell edits happen in Claude for Excel with the workbook open, and the conversation carries into Claude for Word so the memo draft picks up where you left off."}),`
`,(0,n.jsx)(r.h3,{id:"required-context",children:"Required context"}),`
`,(0,n.jsx)(r.p,{children:"Attach the deal folder with the underwriting workbook. Enable the S&P Global connector. Have the Claude for Excel and Claude for Word add-ins installed — that's where the spread updates and memo drafts happen."}),`
`,(0,n.jsx)(i,{items:[{slug:"s-p-global"}]}),`
`,(0,n.jsx)(c,{name:"Deal folder",files:[{name:"Acme spread workbook",kind:"xlsx"},{name:"Credit memo template",kind:"doc"}]}),`
`,(0,n.jsx)(r.h2,{id:"3-what-claude-creates",children:"3. What Claude creates"}),`
`,(0,n.jsx)(r.p,{children:"A brief you can act on: where the borrower stands against policy, which ratios moved since last review, and the exact cells to look at when you open the spread."}),`
`,(0,n.jsxs)(s,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Acme Manufacturing — $25M revolver renewal, FY25 review"})}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Where it stands vs. policy"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"DSCR: 1.42x — passes 1.25x minimum, down from 1.68x last review"}),`
`,(0,n.jsx)(r.li,{children:"Funded debt / EBITDA: 3.1x — passes 3.5x ceiling, up from 2.4x"}),`
`,(0,n.jsxs)(r.li,{children:["Fixed charge coverage: 1.18x — ",(0,n.jsx)(r.strong,{children:"fails 1.20x minimum"})]}),`
`,(0,n.jsx)(r.li,{children:"Current ratio: 1.35x — passes 1.20x minimum"}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"2 exceptions to flag for committee"})}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"FCCR!D14 — Fixed charge coverage at 1.18x"})," Tripping the covenant by 2bp. Driver is the new equipment lease ($840K annual) that started in March; rent is now in fixed charges but the lease wasn't in the FY24 base. If you add back one quarter of pre-lease run-rate, FCCR comes to 1.23x. Your call on whether that warrants a waiver request or a covenant reset."]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Assumptions!B22 — FY26E revenue growth at 8%"}),` Borrower's own forward guidance in the Q4 commentary is "mid-single digits, 4-6%." Your 8% is above their own range. RM notes from the site visit mention a contract with their largest customer is up for rebid in Q2 — not in the model.`]})]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"In your Excel workbook"})}),`
`,(0,n.jsx)(r.p,{children:"With the Claude for Excel add-in installed, paste this into the sidebar with the spread open:"}),`
`,(0,n.jsxs)(l,{children:[(0,n.jsx)(r.p,{children:"FY25 spread done. FCCR at 1.18x fails 1.20x — driver is the equipment lease. Walk me through FCCR!D14, then build me a covenant cushion view at +/- 5% revenue and +/- 100bp on the lease assumption."}),(0,n.jsx)(r.p,{children:"Also flag Assumptions!B22 — my 8% growth is above the 4-6% the borrower guided to. Show me what base/downside looks like at their range."})]}),`
`,(0,n.jsx)(r.p,{children:"Once you've signed off on the spread, open the memo template in Claude for Word. The conversation carries from Excel, so the memo draft already knows which ratios flipped and which exceptions need committee narrative."}),`
`,(0,n.jsx)(r.h2,{id:"4-follow-up-prompts",children:"4. Follow up prompts"}),`
`,(0,n.jsx)(r.p,{children:"Continue the conversation with Claude to refine, expand, or explore further."}),`
`,(0,n.jsx)(r.h3,{id:"compare-to-last-review",children:"Compare to last review"}),`
`,(0,n.jsx)(r.p,{children:"In Cowork, ask what's moved since the last credit cycle."}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"what changed vs. the FY24 review — leverage, coverage, working capital"})}),`
`,(0,n.jsx)(r.h3,{id:"pressure-test-an-assumption-against-the-call",children:"Pressure-test an assumption against the call"}),`
`,(0,n.jsx)(r.p,{children:"See if anything in the borrower's own commentary should move a cell."}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"is my 8% FY26 growth too rich? what did the borrower actually say about the pipeline in their Q4 narrative"})}),`
`,(0,n.jsx)(r.h3,{id:"build-the-downside-case",children:"Build the downside case"}),`
`,(0,n.jsx)(r.p,{children:"In Claude for Excel, once you've signed off on the base."}),`
`,(0,n.jsx)(l,{children:(0,n.jsx)(r.p,{children:"build me a downside scenario in a new tab — revenue down 10%, gross margin down 200bp, hold opex flat. show me where covenants break"})}),`
`,(0,n.jsx)(r.h2,{id:"5-tricks-tips-and-troubleshooting",children:"5. Tricks, tips, and troubleshooting"}),`
`,(0,n.jsx)(r.h3,{id:"ask-cowork-for-the-excel-ready-brief",children:"Ask Cowork for the Excel-ready brief"}),`
`,(0,n.jsx)(r.p,{children:"End your Cowork session by asking for a one-paragraph brief with the cell refs and the policy exceptions — that's what you paste into the Claude for Excel sidebar. Tighter than scrolling back through the chat."}),`
`,(0,n.jsx)(r.h3,{id:"click-the-cell-reference",children:"Click the cell reference"}),`
`,(0,n.jsx)(r.p,{children:"When Claude flags FCCR!D14 in the Excel sidebar, click it and Excel jumps to that cell. Check the formula and the inputs before you agree to change anything."}),`
`,(0,n.jsx)(r.h3,{id:"excel-to-word-carries-the-conversation",children:"Excel to Word carries the conversation"}),`
`,(0,n.jsx)(r.p,{children:`When you open the memo template in Claude for Word, it already knows which ratios moved and which exceptions you decided to surface. You're not re-explaining the deal — just say "draft the credit summary and the exceptions section."`}),`
`,(0,n.jsx)(r.h3,{id:"save-it-as-a-skill",children:"Save it as a skill"}),`
`,(0,n.jsx)(r.p,{children:"Renewal underwriting is the same loop every cycle. Once the Cowork conversation works for one deal, save it as a skill so the next renewal in the portfolio starts one click in."}),`
`,(0,n.jsx)(r.h2,{id:"6-ready-to-try-for-yourself",children:"6. Ready to try for yourself?"}),`
`,(0,n.jsx)(r.p,{children:"Try it on your next renewal. Attach the deal folder in Cowork, ask where the borrower stands against policy, and review the exceptions before anything changes."}),`
`,(0,n.jsxs)(d,{surfaces:["cowork"],children:[(0,n.jsx)(r.p,{children:"Acme Manufacturing — $25M revolver renewal, committee Thursday. Walk me through the credit before I touch the spread."}),(0,n.jsx)(r.p,{children:"Steps:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Pull three years of financials and peer spreads from S&P Global"}),`
`,(0,n.jsx)(r.li,{children:"Read the underwriting workbook in the deal folder and flag where ratios trip policy"}),`
`,(0,n.jsx)(r.li,{children:"Tell me which assumptions in the model don't match what's in the statements"}),`
`,(0,n.jsx)(r.li,{children:"Give me a brief I can take into Excel — cell refs, what to change, why"}),`
`]}),(0,n.jsx)(r.p,{children:"Show me the exceptions before I touch anything."})]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};