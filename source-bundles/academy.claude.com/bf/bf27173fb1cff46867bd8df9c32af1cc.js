import{em as e,nm as t}from"../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{ChatPrompt:i,PromptExample:o}=r;return i||a("ChatPrompt",!0),o||a("PromptExample",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Effective prompting helps you use Claude's financial analysis capabilities efficiently and accurately. This guide provides strategies for writing clear, specific prompts that produce the results you need while avoiding common issues that can lead to incomplete or overwhelming outputs."}),`
`,(0,n.jsx)(r.h2,{id:"discovering-what-data-claude-can-access",children:"Discovering What Data Claude Can Access"}),`
`,(0,n.jsx)(r.p,{children:"Before starting any financial analysis, it's essential to understand which data sources Claude has available. Different integrations provide different types of data—Daloopa focuses on SEC filings and fundamentals and Kensho offers comprehensive S&P Global market data and business relationships. Knowing what's accessible prevents wasted time requesting unavailable data."}),`
`,(0,n.jsx)(r.p,{children:"Start your analysis sessions by confirming data availability:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:['"',(0,n.jsx)(r.em,{children:"What S&P Global financial data can you access through Kensho?"}),'"']}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:['"',(0,n.jsx)(r.em,{children:"Can you retrieve segment data through Daloopa?"}),'"']}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This preliminary step prevents requesting analyses that require unavailable data and helps you understand which integration to specify for different types of analysis."}),`
`,(0,n.jsx)(r.h2,{id:"core-prompting-principles",children:"Core Prompting Principles"}),`
`,(0,n.jsx)(r.h3,{id:"be-specific-and-clear",children:"Be Specific and Clear"}),`
`,(0,n.jsx)(r.p,{children:"Claude has access to vast amounts of financial data through multiple sources. Without specific instructions, you may receive more data than needed or miss critical metrics. Clear specifications ensure you get exactly what your analysis requires, saving time and improving accuracy."}),`
`,(0,n.jsx)(r.p,{children:"Consider these contrasting examples:"}),`
`,(0,n.jsx)(o,{variant:"bad",children:(0,n.jsx)(r.p,{children:"Claude, please Analyze Microsoft"})}),`
`,(0,n.jsx)(r.p,{children:"This vague request could trigger retrieval of hundreds of data points across multiple years, making it difficult to identify relevant insights. Claude won't know whether you want valuation metrics, operational performance, or competitive positioning."}),`
`,(0,n.jsx)(o,{variant:"good",children:(0,n.jsx)(r.p,{children:"Using Daloopa, retrieve Microsoft's (MSFT) revenue, operating margin, and free cash flow for Q1 2023 through Q4 2024, then calculate year-over-year growth rates"})}),`
`,(0,n.jsx)(r.p,{children:"This specific request identifies the data source, company ticker, exact metrics, time period, and desired calculations. Claude knows precisely what to retrieve and how to process it. Your prompts should include company tickers, exact metric names, specific time periods, and the desired output format."}),`
`,(0,n.jsx)(r.h3,{id:"request-only-relevant-information",children:"Request Only Relevant Information"}),`
`,(0,n.jsx)(r.p,{children:"Financial integrations can pull extensive datasets covering hundreds of metrics across many years. Requesting everything available wastes time, increases processing complexity, and makes it harder to focus on what matters for your specific analysis. Targeted requests produce cleaner, more actionable results."}),`
`,(0,n.jsx)(o,{variant:"bad",children:(0,n.jsx)(r.p,{children:"Pull all financial data for Tesla, Ford, and GM"})}),`
`,(0,n.jsx)(r.p,{children:"This request could return thousands of data points including irrelevant metrics, making it difficult to conduct focused analysis."}),`
`,(0,n.jsx)(o,{variant:"good",children:(0,n.jsx)(r.p,{children:"For Tesla (TSLA), Ford (F), and GM, retrieve only automotive revenue and gross margins for the last 4 quarters to compare operational efficiency"})}),`
`,(0,n.jsx)(r.p,{children:"This focused request retrieves only the metrics needed for operational comparison. When crafting prompts, think about your analytical objective first, then request only the data that directly supports that analysis. This approach produces more manageable outputs and clearer insights."}),`
`,(0,n.jsx)(r.h3,{id:"control-data-volume",children:"Control Data Volume"}),`
`,(0,n.jsx)(r.p,{children:"Large data requests can slow down analysis and produce overwhelming outputs that are difficult to interpret. Managing scope ensures Claude can process requests efficiently and present results in digestible formats. This is particularly important when working with multiple companies or extended time periods."}),`
`,(0,n.jsx)(o,{variant:"bad",children:(0,n.jsx)(r.p,{children:"Get all available historical data for the entire S&P 500"})}),`
`,(0,n.jsx)(r.p,{children:"This request is likely to fail or produce unusable results due to the sheer volume of data involved."}),`
`,(0,n.jsx)(o,{variant:"good",children:(0,n.jsx)(r.p,{children:"Retrieve the last 8 quarters of revenue and EBITDA margin for these 5 software companies: CRM, NOW, WDAY, TEAM, and ZM"})}),`
`,(0,n.jsx)(r.p,{children:"This manageable request focuses on a specific peer group with defined metrics and a reasonable time frame. As a general guideline, limit requests to 3-5 companies for detailed analysis, request specific line items rather than entire financial statements, and use date ranges that match your analytical needs rather than requesting all available history."}),`
`,(0,n.jsx)(r.h2,{id:"structuring-complex-analyses",children:"Structuring Complex Analyses"}),`
`,(0,n.jsx)(r.h3,{id:"request-analysis-plans-first",children:"Request Analysis Plans First"}),`
`,(0,n.jsx)(r.p,{children:"Complex financial analyses involve multiple steps, data sources, and assumptions. Having Claude outline the approach first lets you catch potential issues before time is spent on calculations. This is especially valuable for valuations, modeling, or multi-company comparisons where methodology choices significantly impact results. A clear plan also ensures alignment between your expectations and Claude's intended approach."}),`
`,(0,n.jsx)(o,{variant:"bad",children:(0,n.jsx)(r.p,{children:"Do a complete valuation analysis of Netflix"})}),`
`,(0,n.jsx)(r.p,{children:"This open-ended request leaves too many decisions to Claude, potentially resulting in an analysis that doesn't match your requirements or uses inappropriate assumptions."}),`
`,(0,n.jsx)(o,{variant:"good",children:(0,n.jsx)(r.p,{children:"Create a plan for valuing Netflix (NFLX) using DCF methodology. List the data you'll need, calculations you'll perform, and assumptions you'll make. Let me review before you proceed."})}),`
`,(0,n.jsx)(r.p,{children:"This approach gives you visibility into the planned methodology before execution begins. You can review the data sources Claude intends to use, verify that key assumptions are reasonable, identify any missing components, and adjust the approach before investing time in detailed calculations. This preliminary review often catches issues that would be costly to fix after the analysis is complete."}),`
`,(0,n.jsx)(r.h3,{id:"use-step-by-step-approaches",children:"Use Step-by-Step Approaches"}),`
`,(0,n.jsx)(r.p,{children:"Breaking complex analyses into discrete steps provides transparency into Claude's process and allows for course correction. You can verify data accuracy, check calculations, and adjust methodology between steps rather than discovering issues only in final results. This approach is particularly valuable when working with multiple data sources or when calculations build upon each other."}),`
`,(0,n.jsx)(o,{variant:"bad",children:(0,n.jsx)(r.p,{children:"Compare these 5 companies and tell me which is best"})}),`
`,(0,n.jsx)(r.p,{children:"This request produces a black-box analysis where you can't verify the underlying data or logic."}),`
`,(0,n.jsx)(o,{variant:"good",children:(0,n.jsx)(r.p,{children:"Let's analyze these companies step by step. First, pull their P/E ratios. Show me the results before proceeding to the next metric."})}),`
`,(0,n.jsx)(r.p,{children:"This incremental approach allows you to catch errors early, adjust the analysis based on initial findings, understand Claude's reasoning at each stage, and verify data accuracy before it's used in calculations. Each step becomes a checkpoint where you can ensure the analysis remains on track."}),`
`,(0,n.jsx)(r.h3,{id:"build-incrementally",children:"Build Incrementally"}),`
`,(0,n.jsx)(r.p,{children:"Starting with data retrieval before moving to analysis ensures you're working with accurate, complete information. This approach prevents wasted effort on calculations using incomplete data and helps identify data gaps before they affect conclusions. It also allows you to adjust your analysis based on what data is actually available."}),`
`,(0,n.jsx)(r.p,{children:"A typical incremental workflow might look like this:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"First, retrieve Amazon's segment revenue for the last 8 quarters and show me what's available"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Now calculate the growth rate for AWS specifically"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Finally, compare AWS growth to Azure's growth over the same period"})}),`
`,(0,n.jsx)(r.p,{children:"Each step builds on the previous one, ensuring that you have the necessary foundation before proceeding. This method is particularly useful when exploring unfamiliar companies or sectors where you may not know exactly what data is available until you start the analysis."}),`
`,(0,n.jsx)(r.h2,{id:"common-issues-and-solutions",children:"Common Issues and Solutions"}),`
`,(0,n.jsx)(r.h3,{id:"data-availability-challenges",children:"Data Availability Challenges"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Issue:"})," Requesting data that doesn't exist or isn't available through current integrations can derail your analysis."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Solution:"}),` Start by asking what's available. For example: "`,(0,n.jsx)(r.em,{children:"What operational metrics does Daloopa have for Spotify?"}),'" This preliminary check prevents building analyses around unavailable data.']}),`
`,(0,n.jsx)(r.p,{children:"Different companies report different metrics, and not all historical data may be available. Confirming availability upfront saves time and allows you to adjust your analytical approach based on what data is actually accessible."}),`
`,(0,n.jsx)(r.h3,{id:"scope-management",children:"Scope Management"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Issue:"})," Requesting analysis of 50+ companies at once can produce overwhelming results or cause the analysis to fail entirely."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Solution:"})," Break large analyses into smaller groups of 5-10 companies, then combine the results."]}),`
`,(0,n.jsxs)(r.p,{children:['For example, instead of "',(0,n.jsx)(r.em,{children:"Analyze all REITs,"}),'" try being more specific: "',(0,n.jsx)(r.em,{children:"Analyze these 5 industrial REITs first: PLD, DRE, FR, TRNO, STAG."}),'" After reviewing the initial results, you can proceed with additional groups. This approach ensures each batch receives thorough analysis and allows you to refine your criteria based on initial findings.']}),`
`,(0,n.jsx)(r.h3,{id:"ambiguous-requests",children:"Ambiguous Requests"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Issue:"}),` Terms like "good companies" or "strong performance" mean different things to different analysts and can lead to results that don't match your criteria.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Solution:"})," Define your criteria explicitly using quantitative thresholds."]}),`
`,(0,n.jsx)(r.p,{children:"Here's an example:"}),`
`,(0,n.jsx)(o,{variant:"bad",children:(0,n.jsx)(r.p,{children:"Find me good value stocks"})}),`
`,(0,n.jsx)(o,{variant:"good",children:(0,n.jsx)(r.p,{children:"Find companies with P/E below 15, positive free cash flow, and revenue growth above 5%"})}),`
`,(0,n.jsx)(r.p,{children:"The specific criteria ensure Claude identifies companies that match your investment philosophy and screening parameters. This precision is particularly important when building screens or identifying investment candidates."}),`
`,(0,n.jsx)(r.h2,{id:"tips-for-efficient-prompting",children:"Tips for Efficient Prompting"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"State your end goal upfront so Claude can suggest appropriate approaches."}),`
`,(0,n.jsx)(r.li,{children:"Use consistent terminology throughout your analysis."}),`
`,(0,n.jsx)(r.li,{children:"Save successful prompt templates for recurring analyses."}),`
`,(0,n.jsx)(r.li,{children:"Start with smaller test requests before scaling up."}),`
`,(0,n.jsx)(r.li,{children:"Name the specific data source in your prompts (Daloopa, Kensho/S&P Global)."}),`
`,(0,n.jsx)(r.li,{children:"Consider data freshness - specify if you need latest available or specific historical data."}),`
`,(0,n.jsx)(r.li,{children:"Include output format preferences (table, bullet points, narrative)."}),`
`,(0,n.jsx)(r.li,{children:"Request source citations when accuracy is critical."}),`
`,(0,n.jsx)(r.li,{children:"For recurring analyses, establish a consistent prompt structure you can reuse."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"These strategies help you get the most value from Claude's financial analysis capabilities while avoiding common pitfalls. As you develop experience with the system, you'll identify prompt patterns that work well for your specific analytical needs."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};