import{em as e,nm as t}from"../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This connector provides access to the Open Targets Platform for identifying and prioritizing therapeutic drug targets based on disease associations. This article explains how to set up and use the Open Targets integration with Claude to more quickly explore supporting data and prioritize drug targets and assess disease associations."}),`
`,(0,n.jsxs)(r.p,{children:["The Open Targets integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:(0,n.jsx)(r.strong,{children:"What this integration provides"})}),`
`,(0,n.jsxs)(r.p,{children:["The Open Targets connector provides a purpose-built interface and instruction to access and interpret the data and analyses within the ",(0,n.jsx)(r.a,{href:"http://platform.opentargets.org",children:"Open Targets Platform"}),"."]}),`
`,(0,n.jsx)(r.p,{children:"The Open Targets Platform is a comprehensive tool that supports systematic identification and prioritization of potential therapeutic drug targets, integrating publicly available datasets to build and score target-disease associations. It also integrates relevant annotation information about targets, diseases/phenotypes, drugs, variants, GWAS and molecular QTL studies, and credible sets as well as their most relevant relationships."}),`
`,(0,n.jsxs)(r.p,{children:["This tool makes the Open Targets Platform GraphQL API accessible as read-only, and includes all sources listed in the ",(0,n.jsx)(r.a,{href:"http://platform-docs.opentargets.org",children:"Open Targets Platform documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-open-targets-integration",children:(0,n.jsx)(r.strong,{children:"Who should use the Open Targets integration"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Target Discovery Scientists:"})," Identifying novel therapeutic targets"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Research Directors/Team or Project Leads/Portfolio Managers:"})," Strategic decision-making and portfolio management"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Academic researchers at all levels:"})," contrasting their data against existing data, e.g. viewing associations evidence and prioritization analyses for a list of targets they have generated"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Bioinformaticians/Data Engineers/Machine Learning Engineers/R&D IT teams:"})," Integrating Open Targets data with proprietary datasets, building internal data platforms and solutions, training models on biological data"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"who-can-access-the-open-targets-integration",children:(0,n.jsx)(r.strong,{children:"Who can access the Open Targets integration"})}),`
`,(0,n.jsxs)(r.p,{children:["The Open Targets Platform data available through the connector is available for academic and commercial use. Open Targets Platform is marked with CC0 1.0; this dedicates the data to the public domain, allowing downstream users to consume the data without restriction. For more information, refer to the ",(0,n.jsx)(r.a,{href:"https://platform-docs.opentargets.org/licence",children:"Open Targets Platform licensing documentation."})]}),`
`,(0,n.jsx)(r.p,{children:"The connector code itself is licensed with Apache 2.0."}),`
`,(0,n.jsxs)(r.p,{children:["More details on accessing the integration can be found in ",(0,n.jsx)(r.a,{href:"https://github.com/opentargets/open-targets-platform-mcp",children:"Open Targets’ MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-open-targets-integration",children:(0,n.jsx)(r.strong,{children:"Setting up the Open Targets integration"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Click "Browse connectors"'}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"Open Targets"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Settings > Connectors"}),`
`,(0,n.jsxs)(r.li,{children:["Find “",(0,n.jsx)(r.strong,{children:"Open Targets"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Connect”"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"})," in Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin marketplace add anthropics/life-sciences"})]}),`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin install open-targets@life-sciences"})]}),`
`,(0,n.jsx)(r.li,{children:"Restart Claude Code"}),`
`,(0,n.jsx)(r.li,{children:"Verify that the server is connected with /mcp"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Technical details of the Open Targets integration can be found in ",(0,n.jsx)(r.a,{href:"https://github.com/opentargets/open-targets-platform-mcp",children:"Open Targets’ MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"example-use-cases",children:(0,n.jsx)(r.strong,{children:"Example use cases"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Target Discovery Researcher Studying a Disease"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A neuroscience researcher at a pharmaceutical company’s early discovery team, exploring novel therapeutic targets for Alzheimer’s disease. They need to assess which targets show the strongest evidence of association with the disease and understand the types of supporting evidence. They may then want to further prioritize targets based on the evidence."}),`
`,(0,n.jsx)(r.li,{children:"Example Prompt:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What are the top five targets associated with Alzheimer disease?"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The Platform provides a ranked list of targets based on overall association scores and a breakdown of the evidence across multiple data types. From there, they can ask further questions about the targets and the evidence."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Statistical Geneticist Browsing Studies"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A statistical geneticist at an academic research institute is investigating genetic variants associated with early onset Alzheimer’s disease. They are reviewing existing genetic evidence for PSEN1 and need to understand what genome wide association studies (GWAS) have been conducted and the most likely causal variants, which populations were studied, and how these findings compare across studies."}),`
`,(0,n.jsx)(r.li,{children:"Example Prompt:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Do you have any GWAS evidence for PSEN1? What studies are there?"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The Platform can provide a list of studies and credible sets containing PSEN1 with variant-level information and study metadata, and links to original publications. The user can further query the information in these studies and credible sets."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Target Prioritisation Using Safety Data"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A translational scientist on a target selection committee is evaluating potential drug targets for an anti-inflammatory programme. They need to understand the safety profile associated with targeting this protein to inform risk-benefit discussions, including known adverse events and safety issues, evidence from clinical trials, post-marketing surveillance, and genetic studies."}),`
`,(0,n.jsx)(r.li,{children:"Example Prompt:"}),`
`]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Are there known safety events associated with targeting PTGS2?"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The Platform provides comprehensive safety information from multiple sources, which the user can explore in more detail, and compare information for different targets."}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};