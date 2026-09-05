import{$f as e,Zf as t}from"../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Moody’s connector provides Claude with access to proprietary credit ratings, comprehensive entity intelligence, and analytical frameworks for risk assessment through the Model Context Protocol (MCP). This integration enables financial professionals to access Moody’s authoritative data directly within their AI workflows."}),`
`,(0,n.jsx)(r.h2,{id:"what-this-connector-provides",children:"What This Connector Provides"}),`
`,(0,n.jsx)(r.h3,{id:"integration-capabilities",children:"Integration Capabilities"}),`
`,(0,n.jsx)(r.p,{children:"Through the Moody’s integration, Claude can access the following resources:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Entity Discovery:"})," Claude can search for entities covered by Moody’s using identifiers, company names, or related metadata. This returns Moody’s unique entity IDs that unlock access to comprehensive datasets."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Credit Ratings and Outlooks:"})," Retrieve current credit ratings, rating dates, and outlooks for specific entities, providing critical information for credit risk assessment and investment decisions."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Research Library Access:"})," Claude can search Moody’s proprietary research documents related to specific entities or topics, giving you access to expert analysis and insights."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Rating Driver Analysis:"})," Access the primary factors behind credit rating upgrades or downgrades, providing context for rating movements and enabling deeper risk analysis."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Rating Scorecards:"})," View detailed rating scorecards including factor weights, scoring components, and overall rating rationale to understand how Moody’s evaluates entity creditworthiness."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-claude-uses-moodys-data",children:"How Claude Uses Moody’s Data"}),`
`,(0,n.jsx)(r.p,{children:"Claude applies Moody’s capabilities to support comprehensive financial analysis:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Integrated Risk Assessment:"})," Claude combines credit ratings, research insights, and rating drivers to provide holistic risk evaluations. For example, when analyzing a potential investment, Claude might retrieve the entity’s current rating, review recent research publications, and examine the factors that could trigger rating changes."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Contextual Analysis:"})," By accessing rating scorecards and upgrade/downgrade factors, Claude applies Moody’s analytical frameworks to understand credit quality. This ensures that risk assessments align with industry-standard methodologies."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Research-Backed Insights:"})," Claude can search through Moody’s extensive research library to find relevant analysis, sector trends, and comparable entity studies, providing evidence-based context for financial decisions."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Entity Intelligence:"})," Through entity mapping and discovery, Claude can identify relationships between entities, access comprehensive company intelligence, and retrieve relevant Moody’s data across different use cases."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-moodys-connector",children:"Setting up the Moody’s Connector"}),`
`,(0,n.jsx)(r.p,{children:"The Moody’s MCP server uses remote access via a simple URL endpoint and is compatible with any LLM that supports the MCP Standard Protocol."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Authentication: The Moody’s connector implements OAuth authentication. When connecting, you’ll be redirected to a Moody’s authentication page where you’ll enter your authorized credentials. After successful authentication, you’ll be redirected back to Claude."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Server URL: ",(0,n.jsx)(r.a,{href:"https://api.moodys.com/genai-ready-data/m1/mcp",children:"https://api.moodys.com/genai-ready-data/m1/mcp"})]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"adding-the-connector-as-an-organization-owner",children:"Adding the Connector as an Organization Owner"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Navigate to ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/connectors",children:"Admin settings > Connectors"})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Click “Add custom connector”"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Enter the Moody’s MCP server URL: ",(0,n.jsx)(r.a,{href:"https://api.moodys.com/genai-ready-data/m1/mcp",children:"https://api.moodys.com/genai-ready-data/m1/mcp"})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Name the integration (e.g., “Moody’s Credit Intelligence”)"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Click “Add”"}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"for-individual-users",children:"For Individual Users"}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,n.jsx)(r.h3,{id:"available-tools-example",children:"Available Tools Example"}),`
`,(0,n.jsx)(r.p,{children:"To illustrate how these tools work together, consider a financial services firm with access to the following Moody’s MCP tools:"}),`
`,(0,n.jsx)(r.p,{children:"Entity Tools:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"findEntity: Search for companies, financial institutions, or governmental entities covered by Moody’s"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"getEntityRatings: Retrieve current ratings and outlooks"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"getEntityRatingDrivers: Access upgrade/downgrade factors"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"getEntityScorecard: View detailed rating methodology and scoring"}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Research Tools:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"searchEntityDocuments: Access Moody’s proprietary research library"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"credit-analysis-for-portfolio-management",children:"Credit Analysis for Portfolio Management"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Analyze the credit profile of XYZ Corporation. What’s their current rating, what factors could trigger a downgrade, and are there any recent research reports I should review?"})}),`
`,(0,n.jsx)(r.p,{children:"For this analysis, Claude might use the following workflow:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Entity Discovery:"})," Use findEntity to locate XYZ Corporation and retrieve its unique Moody’s entity ID."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Rating Retrieval:"})," Call getEntityRatings to retrieve the current credit rating, outlook, and rating date."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Risk Factor Analysis:"})," Execute getEntityRatingDrivers to identify the key factors that could lead to rating upgrades or downgrades."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Rating Methodology:"})," Use getEntityScorecard to view the detailed scorecard showing how Moody’s evaluates this entity across different factors."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Research Review:"})," Call searchEntityDocuments to find recent research reports, sector analyses, or rating action commentaries."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude might then provide a comprehensive credit analysis including the current rating, key risk factors to monitor, and relevant insights from Moody’s research."}),`
`,(0,n.jsx)(r.h3,{id:"ma-due-diligence",children:"M&A Due Diligence"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"We’re evaluating an acquisition of ABC Manufacturing. What’s their credit standing, and how does it compare to their sector peers? Include relevant research on industry trends."})}),`
`,(0,n.jsx)(r.p,{children:"To complete this request, Claude might follow this workflow:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Target Analysis:"})," Use findEntity and getEntityRatings to establish the target’s creditworthiness."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Rating Factors:"})," Call getEntityScorecard and getEntityRatingDrivers to understand the underlying credit fundamentals and potential risks."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Sector Context:"})," Execute searchEntityDocuments with sector-specific queries to find research on industry trends, peer comparisons, and market outlook."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Synthesis:"})," Combine ratings, scorecard metrics, and research insights to provide a comprehensive view of the target’s credit profile and sector positioning."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude would then respond with a due diligence summary including credit ratings, key risk factors, sector positioning, and relevant research findings."}),`
`,(0,n.jsx)(r.h3,{id:"investment-portfolio-monitoring",children:"Investment Portfolio Monitoring"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Monitor my portfolio holdings for any rating changes or negative rating drivers. My holdings include: Company A, Company B, and Company C."})}),`
`,(0,n.jsx)(r.p,{children:"For this task, Claude might use the following approach:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Entity Identification:"})," Use findEntity to locate each portfolio company in Moody’s database."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Rating Status:"})," Call getEntityRatings for each holding to check current ratings and outlooks."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Risk Assessment:"})," Execute getEntityRatingDrivers for holdings with negative outlooks or recent rating changes to identify specific risk factors."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Research Updates:"})," Use searchEntityDocuments to find any recent research publications or rating action commentaries for companies showing credit stress."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude might then respond with a portfolio monitoring report highlighting any rating changes, companies on negative watch, and key risk factors requiring attention."}),`
`,(0,n.jsx)(r.h3,{id:"counterparty-risk-assessment",children:"Counterparty Risk Assessment"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"We’re entering a large trade with DEF Bank. Assess their credit quality and identify any factors that could impact their creditworthiness over the next 12 months."})}),`
`,(0,n.jsx)(r.p,{children:"For this assessment, Claude might follow these steps:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Entity Lookup:"})," Use findEntity to locate DEF Bank in Moody’s coverage universe."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Credit Profile:"})," Call getEntityRatings to retrieve current ratings and outlook."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Rating Analysis:"})," Execute getEntityScorecard to review the bank’s financial strength across key metrics like capital adequacy, asset quality, and liquidity."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Forward-Looking Factors:"})," Use getEntityRatingDrivers to identify specific factors that could trigger rating changes."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Research Context:"})," Call searchEntityDocuments to find sector research on banking industry trends and systemic risks."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude would then provide a counterparty risk assessment including current credit standing, key vulnerabilities, and forward-looking risk factors."}),`
`,(0,n.jsx)(r.h2,{id:"tips-for-using-moodys",children:"Tips for Using Moody’s"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Be specific about entities: When searching for entities, include relevant identifiers like ticker symbols, full legal names, or location information for more accurate results."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Example: Instead of “Apple”, try “Apple Inc. (AAPL)”"}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Leverage rating drivers for forward-looking analysis: The rating upgrade/downgrade factors provide valuable insights into what could change an entity’s credit profile."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Example: “What factors would lead to a downgrade of Company X’s rating?”"}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Combine tools for comprehensive analysis: Use multiple tools together to build complete credit profiles. Start with ratings, then examine scorecards and drivers, and supplement with research."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Access is governed by your Moody’s subscription: Claude can only access data and research that your Moody’s account has permission to view. The connector respects your subscription entitlements."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Use research search for sector insights: The document search isn’t limited to individual entities. Search by sector, theme, or risk type to find broader market analysis."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Example: “Find Moody’s research on renewable energy sector credit trends”"}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Rating scorecards provide methodology transparency: Review scorecards to understand how Moody’s weighs different factors in their rating assessment, which can inform your own credit analysis framework."}),`
`]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};