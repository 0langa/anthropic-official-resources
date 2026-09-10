import{em as e,nm as t}from"../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The LSEG integration provides Claude with access to LSEG’s comprehensive financial market data ecosystem, spanning across asset classes and domains. This article explains how to set up and use LSEG to retrieve real-time market data, analytics, and perform complex financial calculations. The LSEG integration relies upon Claude’s ability to use remote connectors."}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:"What This Integration Provides"}),`
`,(0,n.jsx)(r.h3,{id:"capabilities",children:"Capabilities"}),`
`,(0,n.jsx)(r.p,{children:"The LSEG integration enables Claude to access institutional-grade market data, analytics, and valuation tools directly into conversational AI workflows."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"FX Spot Price Calculation:"})," Get the latest FX spot rates for currency pairs, enabling real-time foreign exchange analysis and multi-currency calculations."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"FX Forward Price Calculation:"})," Compute tenor FX forward rates for currency pairs and display FX forward points between currency pairs for different tenors, supporting hedging strategies and forward contract analysis."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Interest Rate Curve Analysis:"})," Calculate interest rate curves for specific curve references and access comprehensive lists of all interest rate curves maintained by LSEG for yield curve construction and rate projections."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"FX Forward Curve Points:"})," Calculate FX forward curve points using LSEG-defined forward curves with specific valuation dates, providing detailed term structure analysis for currency derivatives."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Bond Pricing:"})," Price bonds using ISIN codes to retrieve current market valuations, yield calculations, and spread measures for fixed income analysis."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Comprehensive Asset Class Coverage:"})," Access data and analytics across equities, fixed income, FX, commodities, and other asset classes through LSEG’s extensive database."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-claude-uses-lseg-data",children:"How Claude Uses LSEG Data"}),`
`,(0,n.jsx)(r.p,{children:"Claude applies LSEG’s market data to support your financial analysis."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Real-Time FX Analysis: Retrieves current spot rates and forward prices for currency pairs to analyze exchange rate movements, calculate cross-rates, and evaluate currency exposures."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Yield Curve Construction: Pulls interest rate curve data to build term structures, calculate forward rates, and analyze the shape of yield curves for interest rate forecasting."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Fixed Income Valuation: Uses bond pricing tools to value securities, compare yields across issuers, and assess credit spreads for portfolio management and trading decisions."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Cross-Asset Analysis: Combines data from multiple asset classes to identify relationships, correlations, and trading opportunities across markets."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Hedging Strategy Development: Leverages forward curve data to structure currency hedges, evaluate hedge effectiveness, and optimize hedging costs."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Market Data Validation: Provides authoritative pricing and reference data to verify quotes, reconcile positions, and ensure data accuracy."}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-lseg-integration",children:"Setting Up LSEG Integration"}),`
`,(0,n.jsx)(r.p,{children:"Technical details of the LSEG Integration can be found in LSEG’s MCP Server Documentation (available soon on LSEG portal). You will need to contact LSEG to get access to the MCP server."}),`
`,(0,n.jsx)(r.h3,{id:"for-organization-owners",children:"For Organization Owners"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Navigate to ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/connectors",children:"Admin settings > Connectors"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Scroll down and click “Add custom connector” at the bottom of the list."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Enter integration URL: ",(0,n.jsx)(r.a,{href:"https://api.analytics.lseg.com/lfa/mcp",children:"https://api.analytics.lseg.com/lfa/mcp"})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Name the integration (e.g., “LSEG MCP”)"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Click “Add”"}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"for-individual-users",children:"For Individual Users"}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,n.jsx)(r.h3,{id:"currency-exchange-rate-analysis",children:"Currency Exchange Rate Analysis"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What’s the current USD/EUR spot rate, and what are the 3-month and 6-month forward rates? Calculate the implied forward points for each tenor."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Evaluating currency positions, pricing FX forwards, or analyzing currency basis."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Tip:"})," Compare spot vs. forward rates to understand market expectations for currency movements."]}),`
`,(0,n.jsx)(r.h3,{id:"interest-rate-curve-comparison",children:"Interest Rate Curve Comparison"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me the USD SOFR swap curve. Plot the curve and identify any unusual shapes or inflection points."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Assessing interest rate risk, pricing swaps, or understanding monetary policy expectations."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Typical analysis:"})," Compare curves across different currencies or time periods to identify relative value opportunities."]}),`
`,(0,n.jsx)(r.h3,{id:"multi-currency-bond-analysis",children:"Multi-Currency Bond Analysis"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Price the following bonds using their ISIN codes: FR0014012I5 (French government bond) and US91282CNT44 (US Treasury). Compare their yields and calculate the spread."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Portfolio construction, relative value analysis, or credit assessment across sovereign issuers."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," Ensure proper currency conversion when comparing international bonds."]}),`
`,(0,n.jsx)(r.h3,{id:"fx-forward-curve-construction",children:"FX Forward Curve Construction"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"For AUD/USD, show me the complete forward curve using AONIA and SOFR conventions. Display the forward points and implied forward rates for standard tenors."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Structuring FX derivatives, pricing swaps, or analyzing currency carry strategies."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Works well with:"})," Custom valuation dates to assess forward pricing at specific points in time."]}),`
`,(0,n.jsx)(r.h3,{id:"cross-asset-correlation-analysis",children:"Cross-Asset Correlation Analysis"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Get the USD SOFR curve and EUR ESTR curve, then analyze how they’ve moved relative to each other. Are there any divergences that suggest trading opportunities?"})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Identifying cross-currency basis trades or understanding global rate relationships."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Key benefit:"})," LSEG provides consistent data across asset classes for reliable correlation analysis."]}),`
`,(0,n.jsx)(r.h3,{id:"real-time-market-data-for-trading",children:"Real-Time Market Data for Trading"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"I’m looking at pricing a currency swap. Get me the current EUR/USD spot rate and the EUR ESTR and USD SOFR curves for accurate valuation."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Pre-trade analysis, pricing verification, or mark-to-market calculations."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Why it matters:"})," Real-time access ensures your analysis reflects current market conditions."]}),`
`,(0,n.jsx)(r.h2,{id:"tips-for-using-lseg",children:"Tips for Using LSEG"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Use specific currency pair conventions (USD/EUR, GBP/USD)"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Specify tenors clearly for forward rates (3M, 6M, 1Y)"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Reference bonds by ISIN codes for accurate pricing"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Define valuation dates when working with forward curves"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Understand curve conventions (SOFR, ESTR, AONIA) for different currencies"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Cross-reference data across tools to validate analysis"}),`
`]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};