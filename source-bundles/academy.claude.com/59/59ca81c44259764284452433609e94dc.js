import{$f as e,Zf as t}from"../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ExcelPrompt:i,Video:o}=r;return i||a("ExcelPrompt",!0),o||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{youtubeId:"8ZRTSIRWLu4",title:"How to use Claude in Excel for HR: Headcount planning"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12650343-claude-in-excel",children:"Claude in Excel"})," brings Claude directly into your spreadsheet workflow. It appears as a sidebar that can read your entire workbook—every tab, every formula, every relationship between cells—and help you understand, fix, and extend what's there."]}),`
`,(0,n.jsx)(r.p,{children:"This tutorial walks through an HR headcount planning model: four tabs, formulas linking everywhere, and errors that need fixing. You'll see how to use plain language to get Claude to map a workbook you've inherited, trace and fix formula errors, run what-if scenarios, and build new calculations that reference data across sheets."}),`
`,(0,n.jsx)(r.h2,{id:"what-you-can-do",children:"What you can do"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Understand workbooks you didn't build"})}),`
`,(0,n.jsx)(r.p,{children:"Ask Claude to explain how tabs connect. It reads everything first, then maps the data flow—which cells feed into which sheets, where assumptions live, how totals roll up."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Find and fix formula errors"})}),`
`,(0,n.jsx)(r.p,{children:"Claude catches broken references and traces where they cascade. Instead of hunting through tabs, you see every affected cell at once—and choose how to fix it."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Run scenarios instantly"})}),`
`,(0,n.jsx)(r.p,{children:"Change an assumption and see the impact across departments, totals, and downstream calculations. Claude recalculates and summarizes what shifted."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Build formulas with business logic"})}),`
`,(0,n.jsx)(r.p,{children:"Describe what you want calculated. Claude writes formulas that reference the right cells, apply conditional logic based on job levels or departments, and stay connected to your assumptions—not static values you'd have to update manually."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Create visualizations from plain language"})}),`
`,(0,n.jsx)(r.p,{children:"Ask for a pivot table or chart. Claude builds it from your data and tells you what stands out."}),`
`,(0,n.jsx)(r.h2,{id:"in-this-video",children:"In this video"}),`
`,(0,n.jsx)(r.p,{children:"Follow along with the video, or copy these prompts to try in your own workbook."}),`
`,(0,n.jsx)(r.h3,{id:"051-get-oriented-in-an-inherited-model",children:"0:51 — Get oriented in an inherited model"}),`
`,(0,n.jsx)(r.p,{children:"The spreadsheet has four tabs—Assumptions, Headcount, Compensation, Summary—with formulas linking everywhere. Ask Claude to explain how it all connects before you start making changes."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Walk me through this workbook—what's on each tab and how do they connect?"})}),`
`,(0,n.jsx)(r.h3,{id:"118-claude-maps-data-flow-and-finds-errors",children:"1:18 — Claude maps data flow and finds errors"}),`
`,(0,n.jsx)(r.p,{children:"Claude reads all four sheets, then returns a visual diagram showing how data flows from Assumptions through to Summary. It also catches #REF! errors you didn't ask about—and maps every cell they affect across three sheets."}),`
`,(0,n.jsx)(r.h3,{id:"157-investigate-a-broken-formula",children:"1:57 — Investigate a broken formula"}),`
`,(0,n.jsx)(r.p,{children:"A #REF! error is cascading through the model. Claude traces it to a deleted cell reference, analyzes the pattern in nearby cells, and figures out what the value should be."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"There's a #REF! error in cell E15 on the Headcount tab. What's causing it and can you fix it?"})}),`
`,(0,n.jsx)(r.h3,{id:"233-choose-how-to-fix-it",children:"2:33 — Choose how to fix it"}),`
`,(0,n.jsx)(r.p,{children:"Claude doesn't just fix the error—it explains the root cause, shows you the options (0, 1, or a custom value), and lets you decide. You stay in control of what changes."}),`
`,(0,n.jsx)(r.h3,{id:"318-run-a-what-if-scenario",children:"3:18 — Run a what-if scenario"}),`
`,(0,n.jsx)(r.p,{children:"Change one assumption and see the impact everywhere. Claude updates the model, then returns a before/after comparison by department so you can see which teams are hit hardest."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Update the plan to assume 15% attrition instead of 10%. Show me what changes across departments."})}),`
`,(0,n.jsx)(r.h3,{id:"426-create-a-pivot-table-and-chart",children:"4:26 — Create a pivot table and chart"}),`
`,(0,n.jsx)(r.p,{children:"Describe the visualization you need. Claude builds a pivot table from your headcount data, adds a stacked bar chart, and surfaces insights—like which job level has the most people and where they're concentrated."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Create a pivot table showing headcount by department and level, then add a stacked bar chart to visualize it."})}),`
`,(0,n.jsx)(r.h3,{id:"533-build-a-calculated-column-with-business-logic",children:"5:33 — Build a calculated column with business logic"}),`
`,(0,n.jsx)(r.p,{children:"Ask for a new column and Claude writes actual formulas—not static values. Here, it pulls benefit rates from the Assumptions tab and applies different bonus percentages based on job level (10% for ICs, 15% for managers, 20% for directors)."}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Add a column that calculates the fully-loaded cost per employee using the rates on the Assumptions tab."})}),`
`,(0,n.jsx)(r.h2,{id:"what-to-notice",children:"What to notice"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Claude reads before it answers."})}),`
`,(0,n.jsx)(r.p,{children:"When you ask about the workbook, Claude doesn't guess—it reads all four sheets first, then explains how they connect. This prevents errors from incomplete context."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Errors surface with their full impact."})}),`
`,(0,n.jsx)(r.p,{children:"A single broken reference can cascade across multiple sheets. Claude shows you every affected cell so you understand the scope before you fix anything."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Claude values your input"})}),`
`,(0,n.jsx)(r.p,{children:"For deeper understanding, ask Claude to explain its reasoning before making changes. You can always request that Claude walk through its thinking, and if something doesn't look right, undo (Cmd+Z or Ctrl+Z) reverses most actions."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Formulas stay formulas."})}),`
`,(0,n.jsx)(r.p,{children:"When Claude builds a new calculated column, it writes actual Excel formulas that reference your Assumptions tab and apply conditional logic. If your assumptions change later, the calculations update automatically."}),`
`,(0,n.jsx)(r.h2,{id:"get-started",children:"Get started"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Install ",(0,n.jsx)(r.a,{href:"https://appsource.microsoft.com/en-us/product/office/WA200009404",children:"Claude in Excel"})," from the Microsoft AppSource"]}),`
`,(0,n.jsxs)(r.li,{children:["Open it with ",(0,n.jsx)(r.strong,{children:"Ctrl+Option+C"})," (Mac) or ",(0,n.jsx)(r.strong,{children:"Ctrl+Alt+C"})," (Windows)"]}),`
`,(0,n.jsx)(r.li,{children:`Start with "Walk me through this workbook" on any spreadsheet you've inherited`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude in Excel is available in beta on Max, Team, and Enterprise plans."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Learn more:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12650343-claude-in-excel",children:"Claude in Excel help article"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11049741-what-is-the-max-plan",children:"What is the Max plan?"})}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};