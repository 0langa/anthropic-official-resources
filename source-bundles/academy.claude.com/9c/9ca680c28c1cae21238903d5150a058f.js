import{em as e,nm as t}from"../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Daloopa integration provides Claude with access to a financial data extraction service that covers public company filings and metrics. This article explains how to set up and use Daloopa to retrieve financial data for your analysis."}),`
`,(0,n.jsxs)(r.p,{children:["The Daloopa integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:"What This Integration Provides"}),`
`,(0,n.jsx)(r.h3,{id:"capabilities",children:"Capabilities"}),`
`,(0,n.jsx)(r.p,{children:"The Daloopa integration enables Claude to access comprehensive financial data from public company filings."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Company Discovery and Identification:"})," Search for companies using ticker symbols or company names across Daloopa's database of 3,500+ public companies. The search handles name variations and automatically matches to the correct entity."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Financial Metric Discovery:"})," Explore all available data series for any company, including standard financial statements and company-specific KPIs like subscriber counts for streaming services or wafer shipments for semiconductors. This reveals unique operational metrics beyond standard line items."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Historical Data Retrieval:"})," Access specific financial fundamentals across custom time periods, with most companies having 10+ years of data. Request individual quarters, full years, or any combination for flexible analysis."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Source-Linked Data Points:"})," Every financial value includes a hyperlink to its exact location in SEC filings or investor materials, providing complete transparency and audit trails."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Flexible Period Selection:"})," Request data for any combination of quarters or years to enable quarter-over-quarter comparisons, year-over-year analyses, or custom period selections matching your analytical needs."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Granular Metric Access:"})," Access specific line items like segment revenue breakdowns or working capital components without retrieving entire financial statements."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-claude-uses-daloopa-data",children:"How Claude Uses Daloopa Data"}),`
`,(0,n.jsx)(r.p,{children:"Claude applies Daloopa's financial data to support your analysis."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Multi-Company Comparisons:"})," Retrieves metrics for multiple companies and builds comparative tables showing revenue growth, margins, and other KPIs side by side to identify relative performance."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Trend Analysis Construction:"})," Pulls data across multiple periods to calculate growth rates and identify patterns, highlighting periods of acceleration or deceleration in company performance."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Custom Metric Calculations:"})," Computes derived metrics like free cash flow conversion or return on invested capital using raw financial data, creating calculations tailored to your analytical framework."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Data Quality Verification:"})," Uses source links to reference specific filing locations, helping verify unusual figures or reconcile discrepancies with explanations from the original documents."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Earnings Analysis Automation:"})," Following releases, pulls latest results and compares to prior periods, calculating variances and presenting structured analysis of key changes."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Metric Discovery for Unfamiliar Companies:"})," First explores available metrics for new companies, then retrieves the most relevant KPIs, particularly useful when analyzing unfamiliar sectors with different performance indicators."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-daloopa-integration",children:"Setting Up Daloopa Integration"}),`
`,(0,n.jsxs)(r.p,{children:["Technical details of the Daloopa Integration can be found in Daloopa's ",(0,n.jsx)(r.a,{href:"https://docs.daloopa.com/docs/daloopa-mcp",children:"MCP Server Documentation"}),". You will need to contact Daloopa to get access to the MCP server."]}),`
`,(0,n.jsx)(r.h3,{id:"for-organization-owners",children:"For Organization Owners"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Navigate to ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/connectors",children:"Admin settings > Connectors"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Scroll down and click “Add custom connector" at the bottom of the list.'}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Enter integration URL: ",(0,n.jsx)(r.a,{href:"https://mcp.daloopa.com/server/mcp",children:"https://mcp.daloopa.com/server/mcp"})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Name the integration (e.g., "Daloopa MCP")'}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Click "Add"'}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"for-individual-users",children:"For Individual Users"}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,n.jsx)(r.h3,{id:"multi-company-benchmarking",children:"Multi-Company Benchmarking"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Using Daloopa, compare cash-on-cash returns for CAVA, SHAK, and CMG over the last 8 quarters. Include both the absolute values and quarter-over quarter growth rates to identify which company is improving operational efficiency fastest."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Evaluating relative performance across peer companies for investment decisions or competitive analysis."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Tip:"})," Specify 3-10 companies with clear metrics for manageable output that fits well in tables or charts."]}),`
`,(0,n.jsx)(r.h3,{id:"time-series-analysis",children:"Time Series Analysis"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Pull revenue and gross margin trends for MSFT from Q1 2023 to Q1 2025. Show both the quarterly values and calculate the year-over-year growth rates for each quarter."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Tracking company performance over time to identify trends, seasonality, or inflection points."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Typical timeframe:"})," 4-24 quarters provides good trend visibility without overwhelming detail."]}),`
`,(0,n.jsx)(r.h2,{id:"operational-kpi-analysis",children:"Operational KPI Analysis"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me non-GAAP gross margins for top analog semiconductor companies. Focus on AMD, NVDA, INTC, AVGO, and QCOM to understand margin profiles in the sector."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Comparing operational efficiency metrics across companies in the same industry."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," Focus on 2-5 specific KPIs at a time for clarity in analysis."]}),`
`,(0,n.jsx)(r.h2,{id:"quarter-over-quarter-analysis",children:"Quarter-over-Quarter Analysis"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What changed most materially in Apple's latest quarter versus prior quarter? Focus on revenue, operating margin, and free cash flow changes."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Understanding momentum and recent changes in company performance, particularly useful right after earnings releases."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Works well with:"})," Recent 2-4 reporting periods for focused analysis."]}),`
`,(0,n.jsx)(r.h2,{id:"post-earnings-analysis",children:"Post-Earnings Analysis"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Microsoft just reported earnings yesterday - pull their Q4 2024 results and compare them to both the prior quarter (Q3 2024) and year-ago quarter (Q4 2023). Include revenue by segment, operating margins, and any operational metrics like Azure growth or Office 365 subscribers that are available."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Immediately after a company reports earnings to quickly assess performance against multiple comparison periods."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Key benefit:"})," Rapidly generate earnings summaries with quantified deltas and growth rates while the market is still digesting the results."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," Request specific segments or metrics mentioned in the earnings call for deeper insight into business drivers."]}),`
`,(0,n.jsx)(r.h2,{id:"discovering-available-metrics",children:"Discovering Available Metrics"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"I'm analyzing Spotify (SPOT) and need to understand their key business metrics beyond standard financials. Search Daloopa for all available metrics related to subscribers, ARPU, content costs, and any other operational KPIs they report for the last 8 quarters."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Beginning analysis on an unfamiliar company or sector where you need to understand what unique metrics are tracked."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Why it matters:"})," Many companies report industry-specific KPIs (like Spotify's Premium subscribers or Netflix's content amortization) that aren't in standard financial statements."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Tip:"})," Start broad to discover available metrics, then narrow your request to the most relevant ones for detailed analysis."]}),`
`,(0,n.jsx)(r.h2,{id:"tips-for-using-daloopa",children:"Tips for Using Daloopa"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Use specific company tickers (MSFT, AAPL)"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Define clear time periods (Q1 2024, 2023FY)"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Request specific metrics rather than general categories"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Limit scope to reasonable number of companies for clear comparisons"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Consider data freshness - Daloopa updates after earnings releases but may not have real-time intraday data"}),`
`]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};