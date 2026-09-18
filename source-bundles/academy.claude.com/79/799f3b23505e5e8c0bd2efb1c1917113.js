import{$p as e,Zp as t}from"../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Kensho LLM-ready API integration provides Claude with access to S&P Global’s financial data, delivering comprehensive market and fundamental data for public companies. This article explains how to set up the Kensho integration and use S&P data for financial analysis, including price history, financial statements, segment data, and business relationships."}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:"What This Integration Provides"}),`
`,(0,n.jsx)(r.h3,{id:"capabilities",children:"Capabilities"}),`
`,(0,n.jsx)(r.p,{children:"The integration with Kensho’s LLM-ready API enables Claude to access multiple dimensions of S&P Global’s financial and market data:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Company Identification and Information:"})," Retrieve company profiles using tickers, ISINs, or CUSIPs, including industry classifications, employee counts, headquarters locations, and operating status."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Historical Price and Market Data:"})," Access OHLC prices, volumes, market cap, and enterprise value at daily, weekly, monthly, or yearly frequencies, with adjusted prices for accurate return calculations."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Financial Statement Access:"})," Pull complete balance sheets, income statements, and cash flow statements for annual, quarterly, LTM, or YTD periods with customizable date ranges."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Granular Financial Metrics:"})," Extract specific line items from 200+ available metrics including revenue, EBITDA, R&D expense, and calculated ratios like debt-to-equity."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Segment Performance Data:"})," Access business unit and geographic breakdowns showing how revenue and operating income distribute across divisions (availability varies by company)."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Business Relationship Mapping:"})," Identify supplier relationships, customer dependencies, and strategic partnerships from SEC filings to assess operational risks."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Competitor Intelligence:"})," Retrieve competitor lists from multiple sources including SEC filings, self-identification, and third-party analysis."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Time Period Management:"})," Determine latest reporting periods and calculate historical quarters for consistent comparisons across companies with different fiscal years."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"how-claude-uses-sp-global-data",children:"How Claude Uses S&P Global Data"}),`
`,(0,n.jsx)(r.p,{children:"Claude applies Kensho's capabilities to support comprehensive financial analysis leveraging S&P Global data:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Cross-Identifier Lookups:"})," Automatically handles tickers, ISINs, or CUSIPs, useful for international portfolios or fixed income securities."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Multi-Period Analysis:"})," Constructs time series by pulling data across periods, calculating growth rates and identifying trend changes."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Statement Reconciliation:"})," Combines data from different statements to calculate derived metrics and verify consistency."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Peer Group Construction:"})," Retrieves identical metrics across companies for true apples-to-apples comparisons."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Relationship Network Analysis:"})," Maps business ecosystems to reveal concentration risks and strategic positioning not apparent from financials alone."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-kensho-integration",children:"Setting Up the Kensho Integration"}),`
`,(0,n.jsxs)(r.p,{children:["Technical details of the Kensho Integration can be found in the ",(0,n.jsx)(r.a,{href:"https://docs.kensho.com/llmreadyapi/mcp",children:"Kensho Integration MCP Server Documentation"}),". You will need to contact S&P Global to get access to the MCP server."]}),`
`,(0,n.jsx)(r.h3,{id:"for-organization-owners",children:"For Organization Owners"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Navigate to ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/connectors",children:"Admin settings > Connectors"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Scroll down and click “Add custom connector" at the bottom of the list.'}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Enter the Kensho integration URL: ",(0,n.jsx)(r.a,{href:"https://kfinance.kensho.com/integrations/mcp",children:"https://kfinance.kensho.com/integrations/mcp"})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Name the integration (e.g., "Kensho S&P")'}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Click "Add"'}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"for-individual-users",children:"For Individual Users"}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,n.jsx)(r.h3,{id:"comprehensive-company-profile",children:"Comprehensive Company Profile"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Using the Kensho integration, create a complete profile for Microsoft (MSFT) including current market data, latest financial metrics, business segments, and key competitor data from S&P Global. Include market cap, enterprise value, trailing twelve-month revenue and margins, plus geographic revenue breakdown."})}),`
`,(0,n.jsx)(r.p,{children:"This type of comprehensive profile combines multiple data types into a single analytical view. Claude retrieves current market metrics, pulls recent financial performance, and identifies segment breakdowns to show how the business operates across different units and geographies. The competitor identification adds context about the competitive environment."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Initial company research or updating investment memos with current information."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Tip:"})," Request both market data and fundamentals together for a complete overview that includes valuation context alongside operational performance."]}),`
`,(0,n.jsx)(r.h3,{id:"historical-price-performance-analysis",children:"Historical Price Performance Analysis"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Pull five years of weekly price data for Tesla (TSLA) and calculate the volatility, maximum drawdown, and performance versus the S&P 500. Include adjusted prices to account for any stock splits and show periods of highest volatility."})}),`
`,(0,n.jsx)(r.p,{children:"Historical price analysis using S&P Global data goes beyond simple price charts. Claude can calculate risk metrics like volatility and maximum drawdown while comparing performance to benchmarks. Using adjusted prices ensures that return calculations properly account for corporate actions, providing accurate performance measurement over multi-year periods."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Evaluating historical risk-return profiles or backtesting investment strategies."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," Adjusted prices ensure accurate return calculations across corporate actions like splits and special dividends, which is essential for long-term performance analysis."]}),`
`,(0,n.jsx)(r.h3,{id:"financial-statement-deep-dive",children:"Financial Statement Deep Dive"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Retrieve Apple's last 12 quarters of income statements and calculate the trend in gross margins, operating margins, and R&D as percentage of revenue. Show both the quarterly values and the rolling four-quarter averages to smooth seasonality."})}),`
`,(0,n.jsx)(r.p,{children:"Financial statement analysis through Kensho allows examination of margin trends and cost structure evolution over time. Claude can pull specific line items from S&P Global datasets across multiple quarters, calculate relevant ratios, and apply smoothing techniques to identify underlying trends beyond seasonal fluctuations. This granular approach reveals operational changes that might be obscured in annual reports."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Analyzing margin trends, cost structure changes, or earnings quality."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Tip:"})," LTM calculations help normalize for seasonal businesses, providing clearer trend analysis for companies with significant quarterly variations."]}),`
`,(0,n.jsx)(r.h3,{id:"competitor-benchmarking",children:"Competitor Benchmarking"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Identify Netflix's competitors from their SEC filings and compare key metrics including subscriber growth, content costs, average revenue per user, and free cash flow margins. Focus on direct streaming competitors they specifically mention as competitive threats."})}),`
`,(0,n.jsx)(r.p,{children:"Competitor analysis combines Kensho's relationship mapping with financial metric comparisons. Claude first identifies competitors from various sources, then retrieves comparable metrics for each company. This approach provides both the competitive landscape view and quantitative performance comparisons, helping assess relative positioning and competitive advantages."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Industry analysis or relative valuation work."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," Different source filters provide varying perspectives on competition—SEC filings show who companies view as threats, while third-party sources may identify less obvious competitive dynamics."]}),`
`,(0,n.jsx)(r.h3,{id:"segment-performance-tracking",children:"Segment Performance Tracking"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show Amazon's segment breakdown for the last eight quarters, including revenue and operating income by segment. Calculate the growth rates for AWS, North America retail, and International retail, and identify which segments are driving overall margin expansion."})}),`
`,(0,n.jsx)(r.p,{children:"Segment analysis reveals the underlying drivers of consolidated performance. Claude retrieves segment-level financial data to show how different business units contribute to overall results. By tracking segment metrics over time, you can identify which divisions are accelerating or decelerating, understand margin mix shifts, and assess the quality of revenue growth."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Understanding business mix changes and identifying growth drivers."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Tip:"})," Segment data reveals trends not visible in consolidated statements, particularly for conglomerates or companies undergoing business model transitions."]}),`
`,(0,n.jsx)(r.h3,{id:"supply-chain-analysis",children:"Supply Chain Analysis"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Map NVIDIA's key business relationships including their primary chip manufacturers, major customers, and strategic technology partners. Focus on relationships mentioned in their latest 10-K filing to understand supply chain dependencies and customer concentration risks."})}),`
`,(0,n.jsx)(r.p,{children:"Business relationship mapping through Kensho provides insights into operational dependencies and strategic positioning. Claude identifies suppliers, customers, and partners from regulatory filings in S&P Global datasets, revealing concentration risks and potential vulnerabilities. This network view complements financial analysis by highlighting operational factors that could impact future performance."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Assessing operational risks or understanding industry value chains."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Key benefit:"})," Reveals dependencies not apparent from financial statements alone, such as single-source supplier risks or customer concentration that could impact revenue stability."]}),`
`,(0,n.jsx)(r.h2,{id:"tips-for-using-sp-global-data",children:"Tips for Using S&P Global Data"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Use any identifier format (ticker, ISIN, CUSIP) - Claude handles conversion automatically"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Request specific date ranges to manage data volume and focus analysis"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Combine market data with fundamentals for comprehensive analysis"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Check data availability periods using the latest reporting period function"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Note that segment data availability varies by company reporting practices"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Be specific about which financial statement items you need from the 200+ available metrics"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Consider using LTM periods for companies with significant seasonality"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Remember that business relationship data comes from disclosed sources and may not capture all partnerships"}),`
`]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};