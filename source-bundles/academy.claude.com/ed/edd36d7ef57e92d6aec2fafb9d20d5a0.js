import{$p as e,Zp as t}from"../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Morningstar integration provides Claude with access to investment research services and proprietary analytical metrics. This article explains how to set up and use Morningstar data for investment analysis, including fair value estimates, economic moat ratings, and star ratings."}),`
`,(0,n.jsxs)(r.p,{children:["The Morningstar integration relies upon Claude's ability to use ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp",children:"remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:"What This Integration Provides"}),`
`,(0,n.jsx)(r.h3,{id:"capabilities",children:"Capabilities"}),`
`,(0,n.jsx)(r.p,{children:"The Morningstar integration enables Claude to access investment data and research:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Individual Security Metrics:"})," Retrieve specific data points for individual securities including fair value estimates, economic moat ratings, star ratings, market cap, EPS, and NAV. Data is accessed one security at a time for each stock, fund, or bond."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Analyst Research on Specific Securities:"})," Access Morningstar analyst opinions on stocks, ETFs, bonds, and mutual funds. Focus on specific aspects like risk factors, performance drivers, or competitive positioning based on fundamental analysis."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Thematic Investment Research:"})," Explore editorial content on broader investment themes including investment strategies, sustainable investing, retirement planning, and market trends for top-down approaches and asset allocation."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Multi-Asset Class Coverage:"})," Analyze equities, mutual funds, ETFs, and bonds through a unified interface with consistent metrics and research approaches across all asset types."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"how-claude-uses-morningstar-data",children:"How Claude Uses Morningstar Data"}),`
`,(0,n.jsx)(r.p,{children:"Claude applies Morningstar data to support your analysis:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Comparative Analysis:"})," Gathers data across multiple securities (one at a time) to build comparison tables and identify relative value, such as ranking portfolio holdings by discount to fair value."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Contextual Interpretation:"}),' Combines quantitative metrics with qualitative research to explain both what ratings mean and why, like detailing the competitive advantages behind a "wide moat" rating.']}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Risk-Reward Assessment:"})," Evaluates whether returns justify risks by comparing uncertainty ratings and return data across securities."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Narrative Synthesis:"})," Merges data points with analyst commentary to create comprehensive security overviews that tell the complete investment story."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Screening and Filtering:"})," Systematically checks multiple securities against your criteria, such as finding wide-moat healthcare companies trading below fair value."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-morningstar-integration",children:"Setting Up Morningstar Integration"}),`
`,(0,n.jsxs)(r.p,{children:["Technical details of the Morningstar Integration can be found in the ",(0,n.jsx)(r.a,{href:"https://developer.morningstar.com/direct-web-services/documentation/mcp-server/morningstar-mcp-server",children:"Morningstar Integration MCP Server Documentation"}),". If your account does not have access to the MCP server, you will need to contact Morningstar to get access to the MCP server."]}),`
`,(0,n.jsx)(r.h3,{id:"for-organization-owners",children:"For Organization Owners"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Navigate to ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/connectors",children:"Admin settings > Connectors"}),"."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Scroll down and click “Add custom connector" at the bottom of the list.'}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Enter integration URL: ",(0,n.jsx)(r.a,{href:"https://mcp.morningstar.com/mcp",children:"https://mcp.morningstar.com/mcp"})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Name the connector (e.g., "Morningstar")'}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Click "Add"'}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"for-individual-users",children:"For Individual Users"}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,n.jsx)(r.h3,{id:"valuation-analysis",children:"Valuation Analysis"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What is Microsoft's fair value estimate and economic moat rating compared to other mega-cap tech stocks? Include Apple, Google, and Amazon, showing their fair value ratios and whether they're trading above or below Morningstar's estimates."})}),`
`,(0,n.jsx)(r.p,{children:"This type of analysis helps identify potentially undervalued securities by comparing current market prices to Morningstar's fair value estimates. The fair value methodology incorporates competitive advantages, growth prospects, and long-term earnings potential. When comparing multiple companies, Claude retrieves data for each individually and then presents the compiled results, making it easy to spot relative value opportunities within a peer group."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Screening for potentially undervalued securities or validating your own valuation models against Morningstar's independent analysis."]}),`
`,(0,n.jsx)(r.h3,{id:"sector-research",children:"Sector Research"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Provide Morningstar's outlook on renewable energy investments and key valuation metrics for clean energy ETFs. Include their analysis on regulatory tailwinds and which subsectors they view most favorably."})}),`
`,(0,n.jsx)(r.p,{children:"Sector research combines thematic analysis with specific investment opportunities. Claude accesses Morningstar's editorial content on investment themes while also retrieving metrics for relevant funds and securities. This dual approach provides both the macro perspective on sector trends and specific vehicles for gaining exposure to those trends."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Understanding thematic investment opportunities, evaluating sector rotation strategies, or identifying funds that align with specific investment themes."]}),`
`,(0,n.jsx)(r.h3,{id:"company-analysis",children:"Company Analysis"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Get Morningstar analysis of Apple including fair value, moat rating, and uncertainty rating. Also provide their view on key risks and competitive positioning versus Android ecosystem players."})}),`
`,(0,n.jsx)(r.p,{children:"Individual company analysis combines Morningstar's quantitative metrics with qualitative analyst insights. Claude retrieves both the numerical ratings and the reasoning behind them, providing a complete picture of Morningstar's view on a security. This includes their assessment of competitive advantages, management quality, and industry dynamics."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Conducting deep dives on individual companies before making investment decisions or reviewing existing holdings."]}),`
`,(0,n.jsx)(r.h3,{id:"portfolio-analysis",children:"Portfolio Analysis"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show Morningstar ratings and fair value ratios for my technology holdings: MSFT, AAPL, NVDA, and GOOGL. Identify which are trading at the biggest discount to fair value and have the widest economic moats."})}),`
`,(0,n.jsx)(r.p,{children:"Portfolio analysis involves retrieving Morningstar data for each holding to identify rebalancing opportunities. Claude gathers metrics for each security individually, then synthesizes the information to highlight which positions might be overvalued or undervalued according to Morningstar's analysis. This systematic review helps maintain portfolio discipline and identify when market prices diverge significantly from fundamental values."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Tip:"})," Claude retrieves data for each holding individually to build the complete analysis. For large portfolios, consider focusing on core positions or those with recent price movements."]}),`
`,(0,n.jsx)(r.h3,{id:"risk-focused-security-analysis",children:"Risk-Focused Security Analysis"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Analyze Tesla from a risk perspective using Morningstar research. Focus on their assessment of execution risk, competition from traditional automakers, and regulatory challenges. Include their uncertainty rating and any concerns about valuation sustainability."})}),`
`,(0,n.jsx)(r.p,{children:"Risk-focused analysis uses Morningstar's research capabilities to understand potential downside scenarios and investment risks. By requesting analysis focused on specific risk factors, Claude can provide Morningstar's view on what could go wrong with an investment. This includes both systematic risks affecting the entire sector and idiosyncratic risks specific to the company. The uncertainty rating provides a quantitative measure of how confident Morningstar is in their fair value estimate."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Evaluating high-volatility stocks, understanding the bear case for a position, or assessing whether potential returns adequately compensate for risks."]}),`
`,(0,n.jsx)(r.h3,{id:"sustainable-investing-research",children:"Sustainable Investing Research"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What is Morningstar's perspective on ESG investing strategies and their performance versus traditional approaches? Include their recommendations for sustainable funds and whether they see ESG as a source of alpha or risk mitigation."})}),`
`,(0,n.jsx)(r.p,{children:"Sustainable investing research taps into Morningstar's thematic content on ESG strategies and sustainable investment approaches. Claude can access both Morningstar's philosophical framework for sustainable investing and their practical recommendations for specific funds and strategies. This includes performance comparisons between ESG-focused and traditional investments, helping you understand the potential trade-offs and benefits of sustainable investing approaches."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Why it matters:"})," Morningstar provides both conceptual frameworks and specific fund recommendations, helping bridge the gap between sustainable investing theory and practical implementation."]}),`
`,(0,n.jsx)(r.h2,{id:"tips-for-using-morningstar",children:"Tips for Using Morningstar"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Combine Morningstar's qualitative insights with quantitative data for comprehensive analysis."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Use fair value estimates as one input in your investment process, not the sole decision factor."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Consider economic moat ratings when evaluating long-term investment quality."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Request individual security data separately for accurate results."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Note that research content reflects Morningstar's analytical views, not real-time market consensus."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Be aware that data is retrieved one security at a time, so complex portfolio analyses may take multiple steps."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Remember that Morningstar's ratings and estimates are based on fundamental analysis and may differ from market sentiment."}),`
`]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};