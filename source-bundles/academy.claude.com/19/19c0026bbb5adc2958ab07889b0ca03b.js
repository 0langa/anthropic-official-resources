import{$p as e,Zp as t}from"../../../content-de-meta-ictkjcaa.js";var n=t();function r(t){let r={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The PitchBook Premium integration gives Claude access to proprietary private capital market data and analytical metrics. This article outlines the steps to set up and use PitchBook data for financial research, including financial analysis, competitive benchmarking, network relationship mapping, and investor portfolio analysis."}),`
`,(0,n.jsxs)(r.p,{children:["The PitchBook integration relies on Claude’s ability to use ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp",children:"remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:"What This Integration Provides"}),`
`,(0,n.jsx)(r.p,{children:"The integrated dataset provided by this integration includes profiles for more than 8.5 million private companies, 2.8 million deals, 597k investors, and 154k funds. This integration excludes some proprietary 3rd-party data included in the PitchBook platform."}),`
`,(0,n.jsx)(r.h2,{id:"capabilities",children:"Capabilities"}),`
`,(0,n.jsx)(r.p,{children:"The PitchBook integration enables Claude to access private capital market data:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Entity Search and Identification:"})," Search PitchBook's database for companies, investors, funds, people, limited partners (LPs), and deals by name or ticker, retrieving unique PitchBook identifiers (PBIDs)."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Company Data Access:"})," Retrieve company profiles, including business descriptions, ownership status, complete financing history, financial statements (income statement, balance sheet, cash flow), team members, and current/former investors."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Investor and Fund Information:"})," Access investor profiles with AUM and investment focus, portfolio holdings showing current and exited investments, funds raised by each investor, and limited partner commitments to specific funds."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Deal and Transaction Details:"})," Pull complete deal information including participants, investment amounts, valuations, terms, lead investor status, and detailed cap tables showing ownership percentages and liquidation preferences across rounds."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Relationship and Network Data:"})," Find connections between entities, such as co-investors in deals, shared portfolio companies between investors, team member histories across companies, and LP participation across multiple funds."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-claude-uses-pitchbooks-data",children:"How Claude Uses PitchBook's Data"}),`
`,(0,n.jsx)(r.p,{children:"Claude accesses PitchBook data to help build your analyses. Here are several examples of tasks where Claude may decide to use data provided by PitchBook:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Funding Timeline Construction:"})," Claude retrieves a company's deal history to show how valuations changed, which investors participated in each round, and how ownership diluted over time."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Peer Group Benchmarking:"})," When comparing companies, Claude pulls financial metrics, valuation multiples, and funding amounts to identify which companies are valued higher or lower than similar ones."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Investor Portfolio Analysis:"})," Claude examines an investor's portfolio to identify their typical investment sizes, preferred sectors, and stage focus."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Connection Discovery:"})," Claude traces relationships between companies and investors to find warm introduction paths, like identifying mutual connections through board members or past deals."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Exit Pattern Recognition:"})," Claude analyzes past exits in your sector to show typical acquisition multiples, common buyers, and average holding periods for similar companies."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-pitchbook-integration",children:"Setting Up PitchBook Integration"}),`
`,(0,n.jsxs)(r.p,{children:["Technical details of the PitchBook Integration can be found in the ",(0,n.jsx)(r.a,{href:"https://help.pitchbook.com/s/article/PitchBook-Premium-for-Claude-by-Anthropic",children:"PitchBook Premium Integration MCP Service Documentation"}),". Users must possess Single Sign-On (SSO) credentials and a seat-based, unlimited, or trial PitchBook license."]}),`
`,(0,n.jsx)(r.p,{children:"If your account does not have access to the MCP service, please contact your account representative."}),`
`,(0,n.jsx)(r.h3,{id:"for-organization-owners",children:"For Organization Owners"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Navigate to ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/connectors",children:"Admin settings > Connectors"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Scroll down and click “Add custom connector" at the bottom of the list.'}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Access the MCP URL via SSO here: ",(0,n.jsx)(r.a,{href:"https://premium.mcp.pitchbook.com/mcp",children:"https://premium.mcp.pitchbook.com/mcp"})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Name the connector (e.g. "PitchBook Premium")'}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Click “Add”"}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"for-individual-users",children:"For Individual Users"}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,n.jsx)(r.h3,{id:"discover-company-info",children:"Discover Company Info"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Using PitchBook data, tell me about Plaid’s funding status, including the most recent investment date, round type, and use of proceeds. Include a list of lenders, active and former investors, and relevant news coverage about previous investment rounds."})}),`
`,(0,n.jsx)(r.p,{children:"Streamline the financial research journey from search to insight. Claude can retrieve comprehensive PitchBook data on a specific company, including an overview, financials, deal history, key personnel, and investors. When comparing multiple companies from a user- or Claude-generated list, Claude retrieves PitchBook data from each company before compiling results into a single list to spot deal opportunities."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Researching specific companies for deal sourcing, market intelligence gathering, benchmarking, asset allocation, and business development."]}),`
`,(0,n.jsx)(r.h2,{id:"competitive-analysis",children:"Competitive Analysis"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Using PitchBook data, help me identify investment opportunities by benchmarking companies in the healthtech wearables market. Provide details on each company’s recent investment history, profitability, liquidity, and growth rates."})}),`
`,(0,n.jsx)(r.p,{children:"Quickly compare targets to identify promising opportunities for investments, mergers and acquisitions, and partnerships. Claude performs this action using company and deal lists provided by users, or by generating company lists from the web and other sources. The LLM accesses PitchBook’s comprehensive company intelligence, including investment history, product details, financial performance, and more, to retrieve critical details for each company on the list. Users can accelerate deal flow by comparing these metrics in a convenient and readable output."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Comparing financial and performance metrics across multiple companies to find new opportunities, accelerate market mapping, identify acquisition targets, and streamline deal sourcing workflows."]}),`
`,(0,n.jsx)(r.h2,{id:"relationship-mapping",children:"Relationship Mapping"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Using PitchBook data, identify Instacart investors. Then, pull portfolios for each investor’s top 3 VCs to see other companies in this space, and analyze those VC companies’ investors to map the competitive landscape."})}),`
`,(0,n.jsx)(r.p,{children:"Discover unexpected connections between companies, investors, and professionals by using Claude to transform PitchBook’s comprehensive private capital market data into market maps that demonstrate complex relationships within the industry. Claude accesses PitchBook’s proprietary data to accelerate financial research by extracting these insights and producing easy-to-read competitive clusters."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Visualizing the business, investment, and product relationships between companies to inform deal sourcing, supply chain management, strategic partnerships, investor sourcing, and more."]}),`
`,(0,n.jsx)(r.h2,{id:"tips-for-using-pitchbooks-data",children:"Tips for Using PitchBook's Data"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Start prompts with “Use PitchBook data to...” to ensure that Claude returns results based on PitchBook’s comprehensive dataset of private capital market intelligence."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Ask detailed, multi-part questions to receive comprehensive answers to complex queries. For example, to build a market map you should (1) start with a company, (2) pick key investors, (3) analyze portfolio companies, and (4) ask to identify patterns across the network."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Use PitchBook’s data as a reference for deal sourcing, due diligence, and deal execution, rather than as the sole source of information."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Combine data retrieval with analysis from PitchBook researchers to build a complete view of the market and identify opportunities with full context."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"PitchBook's private capital market data is sourced directly from funds, companies, filings, and relationships."}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"contact",children:"Contact"}),`
`,(0,n.jsxs)(r.p,{children:["If you are having trouble completing the PitchBook Premium integration, you can contact ",(0,n.jsx)(r.a,{href:"mailto:support@pitchbook.com",children:"support@pitchbook.com"})," for help."]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};