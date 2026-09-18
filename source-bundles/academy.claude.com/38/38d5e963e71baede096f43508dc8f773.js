import{$p as e,Zp as t}from"../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Chronograph integration provides Claude with access to a portfolio monitoring platform that enables investment analysis and tracking. This article explains how to set up and use Chronograph to access portfolio data and investment insights. The Chronograph integration relies upon Claude’s ability to use remote connectors."}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:"What This Integration Provides"}),`
`,(0,n.jsx)(r.h3,{id:"capabilities",children:"Capabilities"}),`
`,(0,n.jsx)(r.p,{children:"The Chronograph integration enables Claude to access comprehensive portfolio and investment data."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Entity Search and Discovery:"})," Search for companies, funds, groups, and general partners via substring similarity search. The search helps you quickly locate relevant investment entities across Chronograph’s database."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Core Entity Information:"})," Retrieve detailed information about entities including their identifiers, core details, and filter options. This provides fundamental data needed for investment analysis."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Portfolio Exposure Tracking:"})," List your top company exposures by investment status (Invested, Realized, or Unrealized), along with detailed company information for portfolio monitoring and risk assessment."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Commitment History Analysis:"})," Calculate aggregate values for key metrics including NAV, Called, Distributed, Unfunded, Net IRR, Net MOIC, and Commitment Amount across your portfolio’s commitment history."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Investment Metrics Calculator:"})," Calculate individual metrics across specific investments, useful for aggregating and tracking performance. The calculator helps enumerate available metric options before running detailed queries."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Help Center Integration:"})," Access Chronograph’s help documentation directly through Claude. Search for relevant articles or retrieve complete article content to answer platform-specific questions."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-claude-uses-chronograph-data",children:"How Claude Uses Chronograph Data"}),`
`,(0,n.jsx)(r.p,{children:"Claude applies Chronograph’s portfolio data to support your investment analysis."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Portfolio Performance Review: Retrieves commitment history data and calculates key metrics like IRR and MOIC to assess portfolio performance over time."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Exposure Analysis: Pulls top company exposures to identify concentration risks and diversification opportunities across your portfolio."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Entity Research: Searches for and retrieves detailed information about companies, funds, or partners to support due diligence and investment decisions."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Metric Calculations: Computes custom investment metrics across your holdings to create tailored performance reports matching your analytical needs."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Documentation Access: Searches Chronograph’s help center to answer questions about platform features, workflows, and best practices."}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-chronograph-integration",children:"Setting Up Chronograph Integration"}),`
`,(0,n.jsx)(r.p,{children:"You will need to contact Chronograph to get access to the MCP server."}),`
`,(0,n.jsx)(r.h3,{id:"for-organization-owners",children:"For Organization Owners"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Navigate to ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/connectors",children:"Admin settings > Connectors"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Scroll down and click “Add custom connector” at the bottom of the list."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Enter the integration details provided by Chronograph."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Name the integration (e.g., “Chronograph MCP”)"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Click “Add”"}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"for-individual-users",children:"For Individual Users"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Navigate to Settings > Connectors."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Find Chronograph in the list and click Connect."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"In the new browser tab that appears, log in to your Chronograph account."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"A confirmation will appear to indicate successful authentication, at which point you can close the tab and begin interacting with your Chronograph data via Claude."}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,n.jsx)(r.h3,{id:"portfolio-performance-summary",children:"Portfolio Performance Summary"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me my portfolio’s overall performance metrics including Net IRR, Net MOIC, and total commitments across all investments."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Regular portfolio reviews, investor reporting, or board presentations."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Tip:"})," Specify time periods or commitment types for more focused analysis."]}),`
`,(0,n.jsx)(r.h3,{id:"exposure-analysis",children:"Exposure Analysis"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What are my top 10 company exposures by unrealized value? Include company details and current investment amounts."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Risk management, concentration monitoring, or rebalancing decisions."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," Use different status filters (Invested, Realized, Unrealized) to analyze different portfolio segments."]}),`
`,(0,n.jsx)(r.h3,{id:"entity-due-diligence",children:"Entity Due Diligence"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Search for information about [Company/Fund Name] and provide all available details including identifiers and key metrics."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Initial research on potential investments or updating information on existing holdings."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Works well with:"})," Combining entity search with exposure tracking for comprehensive analysis."]}),`
`,(0,n.jsx)(r.h3,{id:"custom-metric-tracking",children:"Custom Metric Tracking"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Calculate [specific metric] across my active investments in the technology sector."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Sector-specific analysis, tracking specialized KPIs, or custom performance reporting."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Key benefit:"})," First use the calculator with query: {help: true} to see available options and required parameters."]}),`
`,(0,n.jsx)(r.h3,{id:"platform-guidance",children:"Platform Guidance"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Search Chronograph’s help center for articles about [topic] or How do I [perform specific task] in Chronograph?"})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Learning platform features, troubleshooting workflows, or discovering capabilities."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Tip:"})," Be specific with search terms to find the most relevant documentation."]}),`
`,(0,n.jsx)(r.h2,{id:"tips-for-using-chronograph",children:"Tips for Using Chronograph"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Use specific entity names or identifiers when possible for accurate results"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"For metric calculations, first call the Investment Metrics Calculator with query: {help: true} to see available options"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Specify investment status filters (Invested, Realized, Unrealized) to focus your analysis"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Search the help center for platform-specific guidance before asking general questions"}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," Claude currently cannot access documents, custom fields, or metrics that require a Primary Metric Type label."]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};