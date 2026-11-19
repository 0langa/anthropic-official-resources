import{n as e,r as t}from"../../../react-ml7fx0sn.js";var n=t();function r(t){let r={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{CoworkPrompt:i,CoworkResponse:o,TryIn:s,Video:c}=r;return i||a("CoworkPrompt",!0),o||a("CoworkResponse",!0),s||a("TryIn",!0),c||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{youtubeId:"UAmKyyZ-b9E",title:"Reconcile transactions across your accounts demo"}),`
`,(0,n.jsx)(r.h2,{id:"1-describe-the-task",children:"1. Describe the task"}),`
`,(0,n.jsx)(r.p,{children:"Claude reads your bank statements and chart of accounts, then cross-references every transaction against the source documents."}),`
`,(0,n.jsx)(r.p,{children:"Focus your prompt on what you need back: a reconciliation report, correcting journal entries, or both. Claude handles the matching while you work on something else."}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r.p,{children:"I need to reconcile my January 2024 bank statement. I've uploaded my checking account statement export and my current chart of accounts."}),(0,n.jsx)(r.p,{children:"Can you analyze the transactions, match them to the right accounts, and flag anything that doesn't line up? If there are discrepancies, I'd love journal entries to fix them."})]}),`
`,(0,n.jsx)(r.h2,{id:"2-give-claude-context",children:"2. Give Claude context"}),`
`,(0,n.jsx)(r.p,{children:"If you give Claude a folder in the desktop app, it reaches your files while the app is open. Claude cross-references transactions across your bank statements and chart of accounts and identifies what's off."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"What to expect:"})," After your initial prompt, Claude may ask you clarifying questions about your accounts, then list its steps and mark each one done as it works. Your answers help it reconcile more thoroughly and produce a more complete output. To review the approach first, ask Claude in your prompt to share its plan and wait for your OK."]}),`
`,(0,n.jsx)(r.h3,{id:"required-context",children:"Required context"}),`
`,(0,n.jsx)(r.p,{children:"To get started:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Start a new conversation in Claude"}),`
`,(0,n.jsxs)(r.li,{children:["Drag in your financial files, or give Claude access to their folder in the ",(0,n.jsx)(r.a,{href:"https://claude.com/download",children:"Claude desktop app"})]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"3-what-claude-creates",children:"3. What Claude creates"}),`
`,(0,n.jsx)(r.p,{children:"Claude analyzes both files, matches transactions to accounts, and surfaces exactly what needs fixing. The response shows the reconciliation logic, specific discrepancies found, and correctly-formatted journal entries ready for review."}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsx)(r.h4,{children:"Bank Statement Summary"}),(0,n.jsx)(r.p,{children:"I've analyzed your January 2024 checking account statement:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Total transactions: 147"}),`
`,(0,n.jsx)(r.li,{children:"Total deposits: $45,230.00"}),`
`,(0,n.jsx)(r.li,{children:"Total withdrawals: $38,892.45"}),`
`]}),(0,n.jsx)(r.h4,{children:"Transaction Matching Results"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"128 matched to existing categories (87%)"}),`
`,(0,n.jsx)(r.li,{children:"13 need new categorization"}),`
`,(0,n.jsx)(r.li,{children:"6 have discrepancies requiring journal entries"}),`
`]}),(0,n.jsx)(r.h4,{children:"Discrepancies Identified"}),(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Bank fee not recorded - $35.00"}),`
`,(0,n.jsx)(r.li,{children:"Interest income missing - $12.45"}),`
`,(0,n.jsx)(r.li,{children:"Duplicate payment - $234.00"}),`
`]}),(0,n.jsx)(r.h4,{children:"Journal Entries to Correct"}),(0,n.jsx)(r.p,{children:"I've prepared 13 journal entries totaling $2,563.23 in adjustments. All entries balance and use your chart of accounts IDs."})]}),`
`,(0,n.jsx)(r.h2,{id:"4-follow-up-prompts",children:"4. Follow up prompts"}),`
`,(0,n.jsx)(r.p,{children:"Continue the conversation with Claude to refine, expand, or explore further."}),`
`,(0,n.jsx)(r.h3,{id:"export-journal-entries-as-csv",children:"Export journal entries as CSV"}),`
`,(0,n.jsx)(r.p,{children:"Get a CSV file you can import into your accounting system."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:'"These entries look correct. Please export them as a CSV file I can import."'})})}),`
`,(0,n.jsx)(r.h3,{id:"create-a-reconciliation-summary",children:"Create a reconciliation summary"}),`
`,(0,n.jsx)(r.p,{children:"Generate a formal reconciliation report for your records or auditor."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:'"Create a reconciliation summary document I can save for my January records."'})})}),`
`,(0,n.jsx)(r.h3,{id:"analyze-adjustment-patterns",children:"Analyze adjustment patterns"}),`
`,(0,n.jsx)(r.p,{children:"Identify recurring issues in how transactions are recorded so you can fix the root cause."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:'"Which expense categories needed the most adjustments? Are there patterns I should address in how I record transactions?"'})})}),`
`,(0,n.jsx)(r.h2,{id:"5-tricks-tips-and-troubleshooting",children:"5. Tricks, tips, and troubleshooting"}),`
`,(0,n.jsx)(r.h3,{id:"follow-along-as-claude-works",children:"Follow along as Claude works"}),`
`,(0,n.jsx)(r.p,{children:"Alongside the conversation, you can see the steps Claude has finished, the files it creates (like your journal entries spreadsheet), and what it's working from (such as a connected folder or attached files)."}),`
`,(0,n.jsx)(r.h3,{id:"grant-folder-access-for-seamless-file-output",children:"Grant folder access for seamless file output"}),`
`,(0,n.jsx)(r.p,{children:"In the desktop app, point Claude to the folder where you want the final journal entries saved. Claude can write the reconciliation output directly there."}),`
`,(0,n.jsx)(r.h3,{id:"let-claude-work-through-multiple-months-in-parallel",children:"Let Claude work through multiple months in parallel"}),`
`,(0,n.jsx)(r.p,{children:"If you're catching up on several months of reconciliation, Claude can coordinate parallel workstreams, analyzing January while also working on February."}),`
`,(0,n.jsx)(r.h3,{id:"start-another-task-while-this-one-runs",children:"Start another task while this one runs"}),`
`,(0,n.jsx)(r.p,{children:"Start another task from the sidebar for other work while Claude reconciles. The dot or icon beside this task in the sidebar changes when it needs attention."}),`
`,(0,n.jsx)(r.h2,{id:"6-ready-to-try-for-yourself",children:"6. Ready to try for yourself?"}),`
`,(0,n.jsx)(r.p,{children:"Give Claude your source files and let it do the cross-referencing. Review the matches, refine as needed, and export the result when you're ready."}),`
`,(0,n.jsxs)(s,{surfaces:["cowork"],children:[(0,n.jsx)(r.p,{children:"I need to reconcile my January 2024 bank statement. I've uploaded my checking account statement export and my current chart of accounts."}),(0,n.jsx)(r.p,{children:"Can you analyze the transactions, match them to the right accounts, and flag anything that doesn't line up? If there are discrepancies, I'd love journal entries to fix them."})]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}i.uses=["CoworkPrompt","CoworkResponse","TryIn","Video"];export{i as default};