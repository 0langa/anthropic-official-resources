import{Gp as e,qp as t}from"../../../content-de-meta-jwql3rqc.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Databricks connector provides Claude with access to your organization's internal data through Unity Catalog, enabling analysis of your databases, running custom business logic, and accessing unstructured documents. Databricks provides three separate connectors: one for functions, one for vector search, and one for Genie, each accessing different capabilities within your Databricks workspace."}),`
`,(0,n.jsx)(r.h2,{id:"reminder-on-databricks-components",children:"Reminder on Databricks Components"}),`
`,(0,n.jsx)(r.p,{children:"Before exploring what Claude can do with Databricks, it's important to understand three core components that exist within your Databricks workspace:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Unity Catalog Functions"}),": Custom Python or SQL functions your organization has created for specific calculations, data transformations, or API integrations. These might include proprietary scoring algorithms, normalized financial calculations, or business-specific data processing logic."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Vector Search"}),": Semantic search indexes built on your organization's documents and datasets. These allow searching conceptually similar content even when exact keywords don't match."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Genie"}),": A natural language interface that translates plain English questions into SQL queries against your data. Genie uses metadata about your tables and columns to understand business terminology and generate appropriate queries."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-connector-provides",children:"What This Connector Provides"}),`
`,(0,n.jsx)(r.h3,{id:"integration-capabilities",children:"Integration Capabilities"}),`
`,(0,n.jsx)(r.p,{children:"Through the Databricks integration, Claude can access resources in your workspace:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Execute Custom Functions"}),": Claude can run Unity Catalog functions defined by your organization. This includes executing complex business logic, applying calculations, or calling external APIs through functions your team has created. For example, if your organization has built a custom customer health score function, Claude can apply it consistently across analyses."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Semantic Search"}),": Using vector search indexes, Claude can find relevant documents and content based on meaning rather than just keywords. This is particularly useful for searching through contracts, research reports, customer feedback, or technical documentation where similar concepts might be expressed in different ways."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Natural Language Queries"}),': Through Genie, Claude can translate plain English questions into SQL queries. Instead of writing complex SQL, you can ask questions like "What was our revenue growth last quarter?" and Claude will use Genie to generate and execute the appropriate query.']}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Governed Access"}),": All data access through the connector respects your organization's Unity Catalog permissions and policies. Claude can only access data and execute functions that your user account has permission to use."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"how-claude-uses-databricks-data",children:"How Claude Uses Databricks Data"}),`
`,(0,n.jsx)(r.p,{children:"Claude applies Databricks capabilities in several ways to support comprehensive data analysis:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Multi-Source Analysis"}),": Claude combines results from database queries, vector searches, and custom functions to provide comprehensive insights. For example, when validating an investment thesis, Claude might query historical financial performance from your portfolio database, search through past due diligence reports for similar sector investments, and apply your proprietary IRR calculation function to model expected returns."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Iterative Exploration"}),": Claude can query data, analyze initial results, and refine searches based on findings. This allows for analysis where insights from one query inform the next."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Custom Logic Application"}),": By executing Unity Catalog functions, Claude applies your organization's specific rules and calculations. This ensures that proprietary metrics, adjusted calculations, and company-specific logic are applied uniformly across all analyses."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Contextual Query Building"}),": When you ask questions in plain English, Claude uses Genie to translate them into appropriate SQL queries. This translation considers your table structures, column names, and relationships to generate accurate queries that match your database structure."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Pattern Recognition"}),": Through vector search, Claude can find patterns and similarities across documents and data. This helps in finding related issues, similar transactions, or comparable situations that might not be obvious through traditional keyword searches."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-databricks-connector",children:"Setting up the Databricks Connector"}),`
`,(0,n.jsx)(r.p,{children:"The Databricks integration consists of three separate connectors, each requiring separate setup:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Functions Server:"})," Accesses Unity Catalog functions for calculations, business logic, and data transformations."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Vector Search Server:"})," Enables semantic search across indexed documents and datasets."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Genie Server:"})," Provides natural language to SQL query translation capabilities."]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Technical details of the Databricks connectors can be found in Databricks's ",(0,n.jsx)(r.a,{href:"https://docs.databricks.com/aws/en/generative-ai/mcp/managed-mcp",children:"MCP Server Documentation"}),". Authentication with Databrick's connectors is handled via ",(0,n.jsx)(r.a,{href:"https://docs.databricks.com/aws/en/generative-ai/mcp/connect-external-services#connect-claude-connectors-using-oauth",children:"OAuth"})," (for ",(0,n.jsx)(r.a,{href:"http://claude.ai/",children:"Claude.ai"})," and Claude Desktop) or via a ",(0,n.jsx)(r.a,{href:"https://docs.databricks.com/aws/en/generative-ai/mcp/connect-external-services#connect-claude-desktop-using-pat",children:"Databricks Personal Access Token"})," (for Claude Desktop only)."]}),`
`,(0,n.jsx)(r.h3,{id:"adding-the-connector-as-an-organization-owner",children:"Adding the Connector as an Organization Owner"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Navigate to ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/connectors",children:"Admin settings > Connectors"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Scroll down and click “Add custom connector" at the bottom of the list.'}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Enter integration URL for ",(0,n.jsx)(r.a,{href:"https://docs.databricks.com/aws/en/generative-ai/mcp/managed-mcp",children:"your Databricks workspace"})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Name the integration. Remember that there are three separate Databricks servers, so consider naming each uniquely (e.g., "Databricks UC", "Databricks Genie", "Databricks Search")'}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Click "Add"'}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"for-individual-users",children:"For Individual Users"}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,n.jsx)(r.h3,{id:"available-resources-example",children:"Available Resources Example"}),`
`,(0,n.jsx)(r.p,{children:"To illustrate how these capabilities work together, consider a private equity firm with the following Databricks resources configured:"}),`
`,(0,n.jsx)(r.h3,{id:"tables-in-this-scenario",children:"Tables in this scenario"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"portfolio_companies:"})," Company details, acquisition information, current valuations, and debt levels"]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"financial_statements:"})," Period financials including revenue, EBITDA with adjustments, and operational metrics like customer count and churn"]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"market_comparables:"})," Sector comparable companies with valuation multiples and growth rates"]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"due_diligence_docs:"})," Repository of due diligence reports, analysis documents, and deal memos"]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"unity-catalog-functions-in-this-scenario",children:"Unity Catalog Functions in this scenario"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"calculate_normalized_ebitda():"})," Applies standard private equity adjustments to reported EBITDA, removing one-time costs and normalizing owner compensation"]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"compute_portfolio_irr():"})," Calculates internal rate of return and money-on-invested-capital based on cash flows and holding periods"]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"estimate_debt_capacity():"})," Models maximum leverage capacity with covenant compliance stress testing under various scenarios"]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"vector-search-index-in-this-scenario",children:"Vector Search Index in this scenario"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"due_diligence_index:"})," Semantic search across all due diligence documents, deal memos, and analysis reports"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"portfolio-exit-readiness-analysis",children:"Portfolio Exit Readiness Analysis"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Which portfolio companies are ready for exit? Show valuation ranges and expected returns based on current market multiples."})}),`
`,(0,n.jsx)(r.p,{children:"For this analysis, Claude might use the different UC Functions and Genie in the following steps:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Genie"}),": Identify portfolio companies held >3 years and retrieve their latest financials."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"UC Function"}),": Call ",(0,n.jsx)(r.code,{children:"calculate_normalized_ebitda()"})," for each company to apply PE adjustments."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"UC Function"}),": Execute ",(0,n.jsx)(r.code,{children:"compute_portfolio_irr()"})," to calculate IRR and MOIC for each company."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Genie"}),": Query market comparables and apply sector multiples to normalized EBITDA for valuation ranges."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude might then report its results in a summary showing exit-ready companies with IRR, MOIC, and valuation ranges based on current market multiples."}),`
`,(0,n.jsx)(r.h2,{id:"new-deal-valuation",children:"New Deal Valuation"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"We're evaluating TechCorp acquisition (SaaS, $45M revenue, $12M EBITDA).What's a fair valuation and how much debt can we support? Include previous due diligence records in your analysis."})}),`
`,(0,n.jsx)(r.p,{children:"To complete this request, Claude might follow this workflow:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Genie"}),": Query market comparables for similar-sized companies in target's sector to establish valuation benchmarks."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"UC Function"}),": Call ",(0,n.jsx)(r.code,{children:"estimate_debt_capacity()"})," with target metrics to model leverage scenarios and stress-test covenant compliance."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Vector Search"}),": Search due diligence index for relevant value creation playbooks and precedent transactions."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Synthesis"}),": Combine results to generate valuation range, recommended capital structure, and relevant precedents."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Ideally, Claude would then respond with a report on the valuation range and a recommended offer price, while citing sources that lead to its recommendation."}),`
`,(0,n.jsx)(r.h2,{id:"covenant-breach-risk-assessment",children:"Covenant Breach Risk Assessment"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"If we see a 15-25% EBITDA decline across the portfolio, which companies risk covenant breaches? What actions should we take?"})}),`
`,(0,n.jsx)(r.p,{children:"For this task, Claude might use the following resources:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Genie"}),": Identify portfolio companies with debt, focusing on those with leverage >4x."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"UC Function"}),": Call calculate_normalized_ebitda() for each high-leverage company to establish baseline."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"UC Function"}),": Run estimate_debt_capacity() with 15%, 20%, and 25% decline scenarios for each company."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Genie"}),": Query historical financials to identify companies with deteriorating working capital trends."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Claude might then respond with a breach risk analysis, organized by company and scenario."}),`
`,(0,n.jsx)(r.h2,{id:"tips-for-using-databricks",children:"Tips for Using Databricks"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Be specific about what data you are looking for."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'Example: Instead of "Analyze customers", try "Show me our top 20 customers by…"'}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Use "find similar" language for pattern matching'}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'Example: "Find feedback that mentions issues like this complaint."'}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Remember that all data access permissions follow your Unity Catalog permissions. Claude can only access the data that you can access."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Custom functions provide consistent calculations. Consider adding UC Functions for calculating standardized metrics."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Complex analyses may require multiple steps. Ask for a plan first and review Claude's proposed approach."}),`
`]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};