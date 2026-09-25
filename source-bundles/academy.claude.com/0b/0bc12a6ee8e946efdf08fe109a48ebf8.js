import{Nm as e,jm as t}from"../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Callout:i,ChatPrompt:o}=r;return i||a("Callout",!0),o||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This article demonstrates how to use Claude for complete financial analysis workflows, from data retrieval through final deliverables. Each workflow follows a three-phase approach: retrieving data from integrated sources, analyzing the information to generate insights, and creating professional outputs for decision-making."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-workflow-approach",children:"Understanding the Workflow Approach"}),`
`,(0,n.jsx)(r.h3,{id:"the-three-phase-process",children:"The Three-Phase Process"}),`
`,(0,n.jsx)(r.p,{children:"Effective financial analysis with Claude follows a structured approach that mirrors traditional analytical workflows. The process begins with data retrieval from integrated sources, moves through systematic analysis of that data, and concludes with creation of professional deliverables. This structure ensures completeness while maintaining flexibility for different analytical objectives."}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Retrieve:"})," Pull data from integrated sources including Daloopa for SEC filings and fundamentals, and S&P Global for comprehensive market data. Using each provider's data may require a separate subscription or API key from that provider. The retrieval phase establishes the factual foundation for your analysis."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Analyze:"})," Process and interpret the retrieved data to identify trends, calculate metrics, and generate insights. This phase transforms raw data into actionable intelligence through calculations, comparisons, and pattern recognition."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Create:"})," Generate professional deliverables including investment memos, presentations, financial models, and interactive dashboards. The creation phase packages your analysis into formats suitable for decision-making and communication."]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"setting-up-your-workspace",children:"Setting Up Your Workspace"}),`
`,(0,n.jsx)(r.p,{children:"Before beginning your workflow, establish a proper workspace to maintain context and organization:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Create a project for your analysis"}),`
`,(0,n.jsx)(r.li,{children:"Upload any reference documents such as previous analyses or style guides"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For detailed project setup instructions, see What are projects? The examples that follow assume you have the necessary integrations enabled and have created a project workspace."}),`
`,(0,n.jsx)(r.h2,{id:"workflow-1-single-company-investment-memo",children:"Workflow 1: Single Company Investment Memo"}),`
`,(0,n.jsx)(r.h3,{id:"scenario-overview",children:"Scenario Overview"}),`
`,(0,n.jsx)(r.p,{children:"This workflow demonstrates creating an investment memo for a potential equity investment using publicly available data. The example uses Microsoft as the target company, but the approach applies to any public company with sufficient data coverage. The final output is a concise investment memo suitable for investment committee review or initial screening documentation."}),`
`,(0,n.jsx)(r.h3,{id:"phase-1-retrieve",children:"Phase 1: Retrieve"}),`
`,(0,n.jsx)(r.p,{children:"Begin by gathering comprehensive financial data from multiple sources. Start with fundamental data:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Using Daloopa, retrieve Microsoft's revenue, operating margins, and free cash flow for the last 12 quarters. Also pull segment revenue breakdowns for the same period."})}),`
`,(0,n.jsx)(r.p,{children:"This retrieval provides the core financial metrics needed to assess operational performance and cash generation. The segment data reveals which business units drive growth and profitability. After retrieving fundamental data, gather valuation perspectives:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Using S&P Global data, identify Microsoft's main competitors from SEC filings and retrieve their revenue growth and operating margins for comparison. Also pull Microsoft's key business relationships including major customers and strategic partners."})}),`
`,(0,n.jsx)(r.p,{children:"Combining data from multiple sources provides both quantitative metrics and competitive context. Daloopa supplies the raw financial data while S&P Global adds competitive positioning through peer comparisons and business relationship mapping."}),`
`,(0,n.jsx)(r.h3,{id:"phase-2-analyze",children:"Phase 2: Analyze"}),`
`,(0,n.jsx)(r.p,{children:"With data retrieved, move to analysis that transforms raw numbers into insights:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Analyze the trends in Microsoft's cloud segment growth versus overall company growth. Calculate the free cash flow conversion rate and compare margins to the prior year. Also compare Microsoft's revenue growth and margins against the competitors we identified to assess relative performance. Identify any notable changes in segment mix and flag any customer concentration risks from the business relationships data."})}),`
`,(0,n.jsx)(r.p,{children:"Claude processes the retrieved data to identify patterns and calculate key ratios. The analysis reveals whether cloud services are becoming a larger portion of the business, how efficiently the company converts earnings to cash, and whether profitability is improving or declining."}),`
`,(0,n.jsx)(r.p,{children:"Consider requesting additional analytical perspectives based on initial findings. If the cloud segment shows accelerating growth, you might ask Claude to analyze whether competitors are experiencing similar trends. If margins are expanding, request a comparison to peer margins to determine if this is company-specific or industry-wide."}),`
`,(0,n.jsx)(r.h3,{id:"phase-3-create",children:"Phase 3: Create"}),`
`,(0,n.jsx)(r.p,{children:"Transform your analysis into a professional investment memo:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Create a 2-page investment memo for Microsoft including: executive summary with investment recommendation, business overview with segment analysis, financial performance highlighting the trends we identified, valuation using fair value compared to current price, and key risks. Format as a Word document."})}),`
`,(0,n.jsx)(r.p,{children:"The resulting memo synthesizes all previous analysis into a structured document."}),`
`,(0,n.jsx)(r.p,{children:"This workflow produces a professional investment memo suitable for initial screening or committee review, created entirely from publicly available data through Claude's integrations."}),`
`,(0,n.jsx)(r.h2,{id:"workflow-2-competitive-analysis-presentation",children:"Workflow 2: Competitive Analysis Presentation"}),`
`,(0,n.jsx)(r.h3,{id:"scenario-overview-2",children:"Scenario Overview"}),`
`,(0,n.jsx)(r.p,{children:"This workflow creates a presentation comparing companies within a sector to identify the most attractive investment opportunity. The example analyzes SaaS companies, but the methodology applies to any sector where comparable metrics exist. The output is a presentation suitable for investment committee discussions or client meetings."}),`
`,(0,n.jsx)(r.h3,{id:"phase-1-retrieve-2",children:"Phase 1: Retrieve"}),`
`,(0,n.jsx)(r.p,{children:"Start by gathering comparable metrics across your peer group:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Using S&P Global, retrieve market cap, P/E ratios, revenue growth, and EBITDA margins for these 3 SaaS companies: CRM, NOW, and DOCU for the last fiscal year."})}),`
`,(0,n.jsx)(r.p,{children:"This establishes the baseline comparison metrics. Market cap provides size context, P/E ratios show relative valuation, revenue growth indicates momentum, and EBITDA margins reveal operational efficiency. After establishing the snapshot view, gather trend data:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Also get their quarterly revenue for the last 8 quarters to analyze growth consistency."})}),`
`,(0,n.jsx)(r.p,{children:"The quarterly data reveals whether growth is accelerating, decelerating, or remaining steady. This helps distinguish between companies with sustainable growth versus those experiencing temporary momentum."}),`
`,(0,n.jsx)(r.h3,{id:"phase-2-analyze-2",children:"Phase 2: Analyze"}),`
`,(0,n.jsx)(r.p,{children:"Process the data to identify relative attractiveness:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Rank these companies by revenue growth and margin expansion. Calculate the PEG ratio for each. Identify which companies are gaining market share based on relative growth rates. Flag any companies with declining margins."})}),`
`,(0,n.jsx)(r.h3,{id:"phase-3-create-2",children:"Phase 3: Create"}),`
`,(0,n.jsx)(r.p,{children:"Transform the comparative analysis into a presentation:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Create a PowerPoint presentation with 6 slides: title slide, market overview with sector growth, comparative metrics table ranking all the companies, growth trajectory charts showing quarterly revenue trends, valuation comparison with P/E and PEG ratios, and investment recommendation slide highlighting the most attractive opportunity."})}),`
`,(0,n.jsx)(i,{type:"note",title:"Note",children:(0,n.jsx)(r.p,{children:"PowerPoint creation currently has limitations with complex formatting and firm-specific templates. You may need to apply final formatting manually."})}),`
`,(0,n.jsx)(r.h2,{id:"workflow-3-portfolio-performance-review",children:"Workflow 3: Portfolio Performance Review"}),`
`,(0,n.jsx)(r.h3,{id:"scenario-overview-3",children:"Scenario Overview"}),`
`,(0,n.jsx)(r.p,{children:"This workflow analyzes an existing portfolio to create performance reporting for quarterly reviews. The example uses a concentrated technology portfolio, but the approach scales to any holdings where data is available. The output is an interactive dashboard suitable for internal review or client reporting."}),`
`,(0,n.jsx)(r.h3,{id:"phase-1-retrieve-3",children:"Phase 1: Retrieve"}),`
`,(0,n.jsx)(r.p,{children:"Gather performance and fundamental data for all holdings:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Using FactSet, retrieve the following for my technology holdings (MSFT, AAPL): total returns for 1-month, 3-month, YTD and 1-year periods, current price and 52-week high/low, latest quarterly revenue and earnings with year-over-year growth rates, forward P/E ratios and consensus analyst ratings, and any recent earnings surprises. These holdings represent 60% of my portfolio with initial investments made in Q1 2024."})}),`
`,(0,n.jsx)(r.p,{children:"This provides data spanning performance metrics, valuation multiples, fundamental growth indicators, and forward-looking analyst sentiment."}),`
`,(0,n.jsx)(r.h3,{id:"phase-2-analyze-3",children:"Phase 2: Analyze"}),`
`,(0,n.jsx)(r.p,{children:"Perform portfolio-level and position-level analysis:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Calculate the weighted average portfolio return based on position sizes for each time period. Compare each holding's total return against the NASDAQ-100 index returns. Rank holdings by YTD performance and identify any laggards. Calculate which positions have beaten or missed earnings expectations in the last quarter. Assess relative valuation by comparing each stock's forward P/E to its 5-year average."})}),`
`,(0,n.jsx)(r.p,{children:"This analysis provides multiple perspectives: weighted returns show overall portfolio performance across different time horizons, benchmark comparison reveals alpha generation, earnings surprise analysis indicates execution quality, and valuation assessment identifies potential rebalancing candidates."}),`
`,(0,n.jsx)(r.h3,{id:"phase-3-create-3",children:"Phase 3: Create"}),`
`,(0,n.jsx)(r.p,{children:"Generate an interactive dashboard for the portfolio review:"}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Create an interactive artifact showing: portfolio summary with weighted returns for each period and performance versus benchmark, individual position cards showing total return, consensus rating, forward P/E, and recent earnings surprise, a waterfall chart showing each position's contribution to total portfolio return, and a scatter plot comparing YTD returns against forward P/E ratios to identify value opportunities. Include drill-down capability for each holding to see detailed performance metrics."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9547008-discovering-publishing-customizing-and-sharing-artifacts#h_264285dcf3",children:"Artifacts can be shared"})," with other members of your organization. The interactive nature allows stakeholders to explore the data without requiring multiple static reports."]}),`
`,(0,n.jsx)(r.h2,{id:"next-steps",children:"Next Steps"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Review integration guides to understand data availability for your specific use cases."}),`
`,(0,n.jsxs)(r.li,{children:["See ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12220277-prompting-strategies-for-financial-analysis",children:"Prompting Strategies for Financial Analysis"})," for techniques to optimize your workflows."]}),`
`,(0,n.jsx)(r.li,{children:"Test workflows with smaller datasets before scaling to full analyses."}),`
`,(0,n.jsx)(r.li,{children:"Save successful prompt sequences as templates for recurring analyses."}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};