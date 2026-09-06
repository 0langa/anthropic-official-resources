import{$f as e,Zf as t}from"../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Aiera integration provides Claude with access to earnings calls, SEC filings, company publications, and expert insights for real-time financial intelligence. Additionally, the connector can pull information from Third Bridge events. This article explains how to set up and use Aiera to access corporate event data and analyst commentary for your market analysis."}),`
`,(0,n.jsxs)(r.p,{children:["The Aiera integration relies upon Claude’s ability to use ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp",children:"remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:"What This Integration Provides"}),`
`,(0,n.jsx)(r.h3,{id:"capabilities",children:"Capabilities"}),`
`,(0,n.jsx)(r.p,{children:"The Aiera integration enables Claude to access comprehensive earnings intelligence and corporate communications in real-time."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Earnings Call Access:"})," Retrieve full transcripts from earnings calls with searchable content, including management presentations, Q&A sessions, and analyst questions. Access historical calls and monitor upcoming scheduled events across companies and sectors."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"SEC Filing Retrieval:"})," Search and analyze SEC filings including 10-K annual reports, 10-Q quarterly filings, and 8-K material event disclosures. Filter by company, filing type, and date ranges to track regulatory communications."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Company Document Discovery:"})," Access press releases, investor presentations, and other corporate publications. Search by keywords, categories, and date ranges to monitor company announcements and strategic communications."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Expert Insights Integration:"})," Leverage Third Bridge expert interview transcripts for qualitative market intelligence and industry perspectives that supplement quantitative earnings data."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Event Calendar Tracking:"})," Monitor upcoming earnings calls and corporate events across watchlists, market indexes, and sectors. Plan analysis around confirmed and estimated event dates."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Source-Linked Transcripts:"})," Every insight includes direct links to original source documents and transcripts, providing complete transparency and enabling verification of quoted material."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Flexible Search Parameters:"})," Query by company ticker, watchlist, market index, sector, or custom search terms. Paginate through large result sets and filter by event type for precise discovery."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-claude-uses-aiera-data",children:"How Claude Uses Aiera Data"}),`
`,(0,n.jsx)(r.p,{children:"Claude applies Aiera’s intelligence platform to support real-time market analysis and due diligence workflows."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Post-Earnings Analysis:"})," Immediately following earnings releases, retrieve full call transcripts to analyze management commentary, extract key metrics discussed, and identify forward-looking statements. Compare current quarter commentary to prior periods."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Analyst Question Analysis:"})," Extract and categorize questions from sell-side analysts during Q&A sessions to understand market concerns, identify emerging themes, and gauge sentiment on specific business drivers."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Management Tone Assessment:"})," Analyze management language across multiple quarters to detect shifts in confidence levels, strategic priorities, or responses to competitive pressures."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Cross-Company Theme Detection:"})," Search transcripts across multiple companies for mentions of specific topics like supply chain, pricing power, or regulatory changes to build sector-wide perspectives on emerging trends."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Filing Monitoring:"})," Track 8-K filings for material events like management changes, acquisitions, or contract wins. Monitor 10-Q/10-K filings for MD&A sections discussing business outlook and risk factors."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Event-Driven Research:"})," When news breaks or markets move, quickly pull relevant corporate communications to understand company positioning and official statements on developing situations."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-aiera-integration",children:"Setting Up Aiera Integration"}),`
`,(0,n.jsx)(r.p,{children:"Technical details of the Aiera Integration can be found in Aiera’s MCP Server Documentation. You will need to contact Aiera to obtain API access credentials for the MCP server."}),`
`,(0,n.jsx)(r.h3,{id:"for-organization-owners",children:"For Organization Owners"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Navigate to ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/connectors",children:"Admin settings > Connectors"}),"."]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add custom connector.”"}),`
`,(0,n.jsxs)(r.li,{children:["Enter integration URL: ",(0,n.jsx)(r.a,{href:"https://mcp-pub.aiera.com/?api_key=%7BYOUR_API_KEY",children:"https://mcp-pub.aiera.com/?api_key={YOUR_API_KEY"}),"}"]}),`
`,(0,n.jsx)(r.li,{children:"Name the integration (e.g., “Aiera MCP”)"}),`
`,(0,n.jsx)(r.li,{children:"Click “Add”"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"for-individual-users",children:"For Individual Users"}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," The Aiera connector also includes access to Third Bridge events. See ",(0,n.jsx)(r.a,{href:"https://rest.aiera.com/docs/mcp#third-bridge",children:"this section"})," of the Aiera MCP documentation for more information."]}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,(0,n.jsx)(r.h3,{id:"post-earnings-deep-dive",children:"Post-Earnings Deep Dive"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Pull the transcript from Netflix’s most recent earnings call and summarize: (1) revenue and subscriber growth discussed, (2) key themes from management presentation, (3) top analyst questions and concerns, and (4) any forward guidance provided."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Immediately after earnings releases to quickly digest management commentary and market reaction before research reports publish."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Typical timeframe:"})," Most valuable within 24-48 hours of earnings when transcripts are fresh and before consensus views form."]}),`
`,(0,n.jsx)(r.h3,{id:"analyst-question-tracking",children:"Analyst Question Tracking"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What were the main questions analysts asked on the last three Microsoft earnings calls? Identify recurring themes and any new topics of concern that emerged in recent quarters."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Understanding evolving market concerns and identifying which business segments or metrics are drawing increased scrutiny."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Tip:"})," Track 2-4 quarters to identify developing themes versus one-time questions."]}),`
`,(0,n.jsx)(r.h3,{id:"management-commentary-search",children:"Management Commentary Search"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Search the last four Amazon earnings calls for what management said about capital expenditure plans and AWS infrastructure investments. Has their tone or guidance changed?"})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Tracking specific strategic initiatives or business drivers across time to detect shifts in company priorities or investment thesis."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Works well with:"})," 3-6 quarters of transcripts to establish patterns and identify inflection points."]}),`
`,(0,n.jsx)(r.h3,{id:"cross-company-theme-analysis",children:"Cross-Company Theme Analysis"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Search earnings transcripts for S&P 500 companies in the last quarter for mentions of “artificial intelligence” or “AI.” Which sectors are discussing it most and what are they saying about implementation?"})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Identifying emerging trends across markets and understanding which industries are most affected by macro themes."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," Combine with sector filters to focus analysis on relevant industry groups."]}),`
`,(0,n.jsx)(r.h2,{id:"upcoming-events-planning",children:"Upcoming Events Planning"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me all confirmed earnings calls for companies in the technology sector over the next two weeks. I want to prepare analysis ahead of these events."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Planning research calendar and ensuring coverage of important corporate events for portfolio holdings or coverage universe."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Key benefit:"})," Get ahead of events rather than reacting after the fact."]}),`
`,(0,n.jsx)(r.h3,{id:"8-k-material-event-monitoring",children:"8-K Material Event Monitoring"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find all 8-K filings from companies in my watchlist over the past month. Focus on those related to management changes, acquisitions, or material contracts."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Monitoring portfolio holdings for material corporate developments between regular reporting periods."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Why it matters:"})," 8-Ks often contain market-moving information disclosed outside earnings cycles."]}),`
`,(0,n.jsx)(r.h3,{id:"expert-insight-supplementation",children:"Expert Insight Supplementation"}),`
`,(0,n.jsx)(r.p,{children:"Example input prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find Third Bridge expert interviews discussing the semiconductor industry from the past month. What are experts saying about demand trends and capacity utilization?"})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"When to use:"})," Supplementing quantitative company data with qualitative expert perspectives on industry dynamics."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Works well with:"})," Combining expert insights with company earnings commentary for comprehensive sector views."]}),`
`,(0,n.jsx)(r.h2,{id:"tips-for-using-aiera",children:"Tips for Using Aiera"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Use specific Bloomberg tickers (NFLX US, AAPL US) for precise company identification"}),`
`,(0,n.jsx)(r.li,{children:"Define clear date ranges to focus on relevant time periods"}),`
`,(0,n.jsx)(r.li,{children:"Request specific event types (earnings calls vs. conferences) to narrow results"}),`
`,(0,n.jsx)(r.li,{children:"Set include_transcripts=false when you only need event metadata to speed up responses"}),`
`,(0,n.jsx)(r.li,{children:"Leverage watchlist and index filters for portfolio-specific monitoring"}),`
`,(0,n.jsx)(r.li,{children:"Search strategically by combining keywords with date and company filters"}),`
`,(0,n.jsx)(r.li,{children:"Consider pagination for large result sets - start with smaller page sizes for testing"}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};