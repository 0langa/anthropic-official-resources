import{$p as e,Zp as t}from"../../../content-de-meta-ictkjcaa.js";var n=t();function r(t){let r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ChatAttachments:i,ChatPrompt:o,ChatResponse:s,FeatureToggles:c,Image:l,TryIn:u}=r;return i||a("ChatAttachments",!0),o||a("ChatPrompt",!0),s||a("ChatResponse",!0),c||a("FeatureToggles",!0),l||a("Image",!0),u||a("TryIn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{src:"./understand-and-extend-an-inherited-spreadsheet.png",alt:"Understand and extend an inherited spreadsheet result",preview:!0}),`
`,(0,n.jsx)(r.h2,{id:"1-describe-the-task",children:"1. Describe the task"}),`
`,(0,n.jsx)(r.p,{children:"Inherited spreadsheets carry hidden complexity—formulas referencing other formulas, assumptions buried across tabs, calculations that cascade in undocumented ways. Before extending a model, you need to understand how it works."}),`
`,(0,n.jsx)(r.p,{children:"Claude reads your spreadsheet's formulas and any existing documentation, then explains what it finds. Claude can annotate the spreadsheet itself, adding cell comments that explain complex formulas, documenting assumptions, and flagging logic that wasn't clear before. You get both an explanation and a marked-up file you can reference later."}),`
`,(0,n.jsx)(r.p,{children:"Once you understand the structure, Claude extends the model following the original patterns and comments any new formulas it adds."}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsx)(r.p,{children:"I inherited this SaaS revenue model when Marcus left. Finance needs Q1-Q3 2026 projections by Thursday. There's a Legend tab with some basics, and a few cell comments on formulas. Can you read through those, then help me understand the rest? Specifically:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"How the four tabs connect to each other"}),`
`,(0,n.jsx)(r.li,{children:"What the seasonality adjustment and CAC Payback formulas are actually doing"}),`
`,(0,n.jsx)(r.li,{children:"Anything important that isn't documented"}),`
`]}),(0,n.jsx)(r.p,{children:"Add some visual elements so I can see the trends at a glance—data bars on the margins, or a column showing growth from baseline. And add comments explaining any complex formulas. Then extend the model through Q3 2026, following Marcus's patterns."})]}),`
`,(0,n.jsx)(r.h2,{id:"2-give-claude-context",children:"2. Give Claude context"}),`
`,(0,n.jsx)(r.p,{children:"Upload the spreadsheet so Claude can read formulas and trace cell references directly."}),`
`,(0,n.jsx)(r.h3,{id:"required-context",children:"Required context"}),`
`,(0,n.jsxs)(r.p,{children:["Make sure ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude",children:"file creation"})," is enabled in settings so Claude can produce an extended version with working formulas."]}),`
`,(0,n.jsx)(r.p,{children:"Click the (+) button in the chat bar to browse through your files or, alternatively, drag and drop the spreadsheet and any additional data files you want to analyze into the chat box area."}),`
`,(0,n.jsx)(i,{items:[{name:"Revenue Model",fileType:"XSLX"}]}),`
`,(0,n.jsx)(r.h3,{id:"optional-context",children:"Optional context"}),`
`,(0,n.jsxs)(r.p,{children:["Turn on ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10574485-using-extended-thinking",children:"Extended Thinking"})," for Claude to develop sophisticated layouts and logic during multi-step tasks."]}),`
`,(0,n.jsx)(c,{items:[{slug:"extended-thinking"}]}),`
`,(0,n.jsx)(r.h2,{id:"3-what-claude-creates",children:"3. What Claude creates"}),`
`,(0,n.jsx)(r.p,{children:"Claude explains the tab structure and hidden logic, adds sparklines to surface trends and comments to explain formulas, then extends the model. The new spreadsheet matches the original conventions so the file stays coherent."}),`
`,(0,n.jsxs)(s,{children:[(0,n.jsx)(r.p,{children:"I've read Marcus's Legend tab and cell comments. Here's the full picture."}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"The color coding (from Legend):"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Blue = hardcoded inputs you can edit"}),`
`,(0,n.jsx)(r.li,{children:"Black = formulas calculating within the same sheet"}),`
`,(0,n.jsx)(r.li,{children:"Green = formulas pulling from other tabs (change the source, these update)"}),`
`,(0,n.jsx)(r.li,{children:"Yellow highlight = key assumptions to review each quarter"}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What the cell comments explain:"})}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"Seasonality adjustment"}),` (Customer Metrics F4): Marcus's comment: "The division normalizes out last quarter's seasonality before applying this quarter's." The formula `,(0,n.jsx)(r.code,{children:"=E4*1.1*B$24/B$27"})," takes prior quarter × growth × (current season ÷ prior season). This prevents double-counting when moving from Q4's 1.15 factor to Q1's 0.88."]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"CAC Payback"}),' (P&L B26): The comment flags an important caveat: "Uses total S&M, not just direct acquisition costs." If S&M includes brand marketing, this metric looks worse than a pure CAC calculation.']}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What Marcus didn't document:"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Average customer revenue:"})," The formula (Beginning + Ending)/2 * ARPU averages customer count because customers acquired mid-quarter generate partial revenue. Not explained anywhere."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Headcount lag:"})," Actual headcount in 2025 references the prior quarter's required number, modeling hiring delay. The comment mentions the lag but not why it matters for forecasting."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tax edge case:"})," MAX(Operating Income, 0) prevents negative taxes on losses. Easy to miss."]}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What I preserved:"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"All 348 original formulas and cross-sheet references"}),`
`,(0,n.jsx)(r.li,{children:"Legend tab and existing cell comments"}),`
`,(0,n.jsx)(r.li,{children:"Color coding conventions throughout"}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What I added:"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Q1 2026 through Q3 2026 in columns J through L across all tabs"}),`
`,(0,n.jsx)(r.li,{children:'Sparklines in a "Trend" column showing patterns at a glance: Line sparklines for customer counts—you can see Q4 spikes and Q1 dips clearly; Column sparklines for revenue—the varying bar heights show seasonality; Line sparklines with high/low markers on margins—spots your best and worst quarters'}),`
`,(0,n.jsx)(r.li,{children:`"vs Q1'24" column showing growth from baseline (Total customers +100%, revenue +96%)`}),`
`,(0,n.jsx)(r.li,{children:"Cell comments explaining undocumented patterns (revenue averaging, Q1 slowdowns, CAC methodology)"}),`
`,(0,n.jsx)(r.li,{children:"Comments on complex formulas I extended"}),`
`]}),(0,n.jsx)(r.p,{children:"The sparklines show seasonality patterns—Q4 spikes, Q1 dips—without you scanning numbers. Hover over cells with red corners to see the comments. Test the model: change Enterprise churn in Assumptions and watch it cascade through all tabs."})]}),`
`,(0,n.jsx)(r.h2,{id:"4-follow-up-prompts",children:"4. Follow up prompts"}),`
`,(0,n.jsx)(r.p,{children:"Continue the conversation with Claude to refine, expand, or explore further."}),`
`,(0,n.jsx)(r.h3,{id:"create-a-changelog-for-what-you-modified",children:"Create a changelog for what you modified"}),`
`,(0,n.jsx)(r.p,{children:"When you extend or modify a model, documenting what changed makes future handoffs cleaner and protects you if questions arise."}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Can you create a summary of every change made to this file? List what was added, what formulas were extended, and what assumptions I should call out as new."})}),`
`,(0,n.jsx)(r.h3,{id:"update-with-actuals-and-analyze-variance",children:"Update with actuals and analyze variance"}),`
`,(0,n.jsx)(r.p,{children:"The quarter closed. Now you need to replace projections with actual results and understand where the forecast diverged from reality."}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Q4 2025 closed at $8.2M revenue versus the $8.5M forecast. Update the model with actuals and break down the variance—how much came from customer count versus ARPU versus churn? I need to explain the miss to leadership."})}),`
`,(0,n.jsx)(r.h2,{id:"5-tricks-tips-and-troubleshooting",children:"5. Tricks, tips, and troubleshooting"}),`
`,(0,n.jsx)(r.h3,{id:"choose-opus-for-complex-financial-models",children:"Choose Opus for complex financial models"}),`
`,(0,n.jsx)(r.p,{children:"Sonnet handles simple spreadsheets well. But inherited models with cross-sheet dependencies—where changing one assumption cascades through four tabs—benefit from Opus 4.5's deeper reasoning. The extra time per response pays off in fewer formula errors, better pattern recognition, and polished output files with working formulas, formatting, and annotations intact."}),`
`,(0,n.jsx)(r.h3,{id:"ask-claude-to-annotate-the-file",children:"Ask Claude to annotate the file"}),`
`,(0,n.jsx)(r.p,{children:"Cell comments travel with the spreadsheet—unlike external docs that get separated and lost. Ask Claude to add comments explaining complex formulas directly in the file, so the explanation lives where you need it."}),`
`,(0,n.jsx)(r.h3,{id:"add-features-to-visualize-patterns",children:"Add features to visualize patterns"}),`
`,(0,n.jsx)(r.p,{children:"Ask Claude to add sparklines or embed charts next to key metrics to show clear trends. You'll instantly see which quarters spike, where margins dip, how segments compare. When you present the model, stakeholders grasp the story without scanning rows."}),`
`,(0,n.jsx)(r.h2,{id:"6-ready-to-try-for-yourself",children:"6. Ready to try for yourself?"}),`
`,(0,n.jsx)(r.p,{children:"Work from previous financial models with clear understanding and logic. Upload inherited spreadsheets and ask Claude to show you how they work so you can extend with confidence."}),`
`,(0,n.jsxs)(u,{surfaces:["chat"],children:[(0,n.jsx)(r.p,{children:"I inherited this SaaS revenue model when Marcus left. Finance needs Q1-Q3 2026 projections by Thursday. There's a Legend tab with some basics, and a few cell comments on formulas. Can you read through those, then help me understand the rest? Specifically:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"How the four tabs connect to each other"}),`
`,(0,n.jsx)(r.li,{children:"What the seasonality adjustment and CAC Payback formulas are actually doing"}),`
`,(0,n.jsx)(r.li,{children:"Anything important that isn't documented"}),`
`]}),(0,n.jsx)(r.p,{children:"Add some visual elements so I can see the trends at a glance—data bars on the margins, or a column showing growth from baseline. And add comments explaining any complex formulas. Then extend the model through Q3 2026, following Marcus's patterns."})]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};