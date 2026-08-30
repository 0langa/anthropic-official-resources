import{Hf as e,Wf as t}from"../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{PromptExampleList:i}=r;return i||a("PromptExampleList",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Medidata is a leading provider of clinical trial solutions to the life sciences industry. This article explains how to set up and use the Medidata integration with Claude to streamline platform support and optimize site selection."}),`
`,(0,n.jsxs)(r.p,{children:["The Medidata integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:(0,n.jsx)(r.strong,{children:"What this integration provides"})}),`
`,(0,n.jsx)(r.p,{children:"This connector gives Medidata customers the ability to connect Claude to their Medidata platform data. Today, the connector supports two key use cases, and Medidata will continue to add more functionality regularly:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Site Ranking:"})," Allows Medidata's Intelligent Trials customers to predict which sites align with their enrollment goals during their protocol/study planning process. This service gives Claude access to aggregated historical operational enrollment data, population/country data, and standardized site data. This service takes various inputs on the planned phase, indication, etc., and ranks sites based on predicted enrollment rate to help inform the site selection strategy for a disease area of interest or a planned study. Users can then use the predicted sites to perform deeper analysis using Claude."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Platform Help:"})," This service gives Claude access to Medidata’s  Knowledge Hub documentation (i.e. documentation and FAQs on Medidata’s products)  around how to use the various products available in the Medidata platform. Claude users will be able to ask and query to find the answers to their questions about the platform, and integrate that information with their own internal documents/policies."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-medidata-integration",children:(0,n.jsx)(r.strong,{children:"Who should use the Medidata integration"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Clinical Feasibility Lead / Strategist:"})," Define global site criteria and analyze historical data to determine optimal patient access. Craft the initial feasibility survey instruments and validate that the proposed site list aligns with specific recruitment goals and protocol requirements."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Study Manager:"})," Review final site recommendations to ensure the geographic footprint remains balanced and cost-effective. Act as the final decision-maker for site approvals by weighing scientific prestige against potential regulatory startup delays to maintain the global enrollment timeline."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Site Selection Manager/Specialist:"})," Lead data-mining activities by synthesizing information from internal databases and public registries to build preliminary site and investigator lists. Manage the distribution and analysis of feasibility surveys to transform site responses into ranked selection packs for sponsor review."]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Country Manager:"})," Validate proposed site lists by leveraging local networks to vet investigator interest and current workload. Oversee local Site Qualification Visits  and confirm that facilities possess the physical infrastructure and staff capacity required for protocol execution."]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"who-can-access-the-medidata-integration",children:(0,n.jsx)(r.strong,{children:"Who can access the Medidata integration"})}),`
`,(0,n.jsx)(r.p,{children:"All Medidata platform users can access the Platform Help service. Access to Site Ranking service is limited to subscribed customers of Medidata’s Intelligent Trials/Study Feasibility application, and their subscription access must match any queries."}),`
`,(0,n.jsx)(r.p,{children:"More details on accessing the integration can be found in Medidata’s MCP Server Documentation [link]."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-medidata-integration",children:(0,n.jsx)(r.strong,{children:"Setting up the Medidata integration"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Click "Browse connectors"'}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"Medidata"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Settings > Connectors"}),`
`,(0,n.jsxs)(r.li,{children:["Find “",(0,n.jsx)(r.strong,{children:"Medidata"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Connect”"}),`
`,(0,n.jsx)(r.li,{children:"Follow the instructions to describe authentication process"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"})," in Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin marketplace add anthropics/life-sciences"})]}),`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin install medidata@life-sciences"})]}),`
`,(0,n.jsx)(r.li,{children:"Restart Claude Code"}),`
`,(0,n.jsx)(r.li,{children:"Verify that the server is connected with /mcp"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Technical details of the Medidata integration can be found in Medidata’s MCP Server Documentation [link]."}),`
`,(0,n.jsx)(r.h2,{id:"example-use-cases",children:(0,n.jsx)(r.strong,{children:"Example use cases"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Site Ranking use cases:"})}),`
`,(0,n.jsx)(i,{surface:"chat",prompts:["What are the top ‘n’ predicted high performing sites for my core criteria i.e. within phase & indication of interest?","What are the top ‘n’ predicted high performing sites based on more granular study criteria i.e. including age & eligibility, no. of study arms, etc.","Which sites rank in the top 25% for predicted performance based on my specified criteria?","What is the physical address of the top performing site(s) in indication X?","Which sites are located in the country (s) of interest?","What is the geographical distribution (no. of sites by countries or regions) of the top performing sites?","Can you research which sites have access to advanced neuroimaging equipment like tau PET and the capability to perform lumbar punctures?"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Platform Help use cases:"})}),`
`,(0,n.jsx)(i,{surface:"chat",prompts:["How do I create a derived dataset in Data Connect?","How do I configure edit checks for Rave EDC?","When is the last release of Clinical Data Studio and what features did it include?","We need to import external lab data into Data Connect. How do I do this and ensure alignment with our SOPs?"]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};