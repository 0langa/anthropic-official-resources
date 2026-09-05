import{$f as e,Zf as t}from"../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Benchling integration connects Claude to Benchling R&D platform data, enabling scientists to ask questions and receive clear summaries with links back to source experiments, notebooks, and structured records—all while maintaining existing access permissions. This article explains how to set up and use the Benchling integration with Claude to advance your R&D workflows."}),`
`,(0,n.jsxs)(r.p,{children:["The Benchling integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:(0,n.jsx)(r.strong,{children:"What this integration provides"})}),`
`,(0,n.jsx)(r.p,{children:"When Claude sends a query to Benchling, it can search across the full breadth of a customer’s Benchling environment. This covers experimental results and study data, notebook content such as text and attachments, and structured records like registry items, inventory, and templates. The Benchling integration brings these different data types together to provide a unified answer, saving scientists from having to manually piece information across entries or projects. You can also choose to pull in public literature sources, combining internal and external knowledge in one place. All results follow the same access permissions already set in Benchling, ensuring people only see the data they are meant to."}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-benchling-integration",children:(0,n.jsx)(r.strong,{children:"Who should use the Benchling integration"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Bench Scientists & Research Associates"})," - want to quickly find and summarize the right data, whether from Benchling or external sources, and use it to decide on next steps in their experiments."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Team Leads & Project Managers"})," - need concise summaries of ongoing work and alignment with external findings to guide project planning."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Computational Biologists & Informatics Teams"})," - want to ask governance questions and assemble curated datasets from Benchling that can be used for deeper analysis or shared across teams."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Program Leads"})," - need automatically generated reports that combine Benchling study results with external context or public data, giving them a clear view of progress and next steps."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"R&D Leaders & Executives"})," - require portfolio-level insights to spot trends across programs and benchmark against public industry data."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"who-can-access-the-benchling-integration",children:(0,n.jsx)(r.strong,{children:"Who can access the Benchling integration"})}),`
`,(0,n.jsx)(r.p,{children:"Benchling customers who meet the following criteria:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Benchling AI (Deep Research) enabled in your tenant"}),`
`,(0,n.jsx)(r.li,{children:"API access (V3 APIs, including AI Agents endpoint)"}),`
`,(0,n.jsx)(r.li,{children:"Benchling remote MCP enabled for your tenant"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"No additional setup is required beyond connecting Claude to the Benchling connector and authenticating with your Benchling login credentials."}),`
`,(0,n.jsxs)(r.p,{children:["More details on accessing the integration can be found in ",(0,n.jsx)(r.a,{href:"https://help.benchling.com/hc/en-us/articles/40342713479437-Benchling-MCP",children:"Benchling’s MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-benchling-integration",children:(0,n.jsx)(r.strong,{children:"Setting up the Benchling integration"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Click "Browse connectors"'}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"Benchling"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`,(0,n.jsx)(r.li,{children:"Get a Server URL from Benchling by clicking the link provided"}),`
`,(0,n.jsx)(r.li,{children:"Paste the Server URL into field provided"}),`
`,(0,n.jsx)(r.li,{children:"Click “Continue”"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:"Click “Connect”"}),`
`,(0,n.jsx)(r.li,{children:"Follow the instructions to authenticate with your Benchling account"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"})," in Claude."]}),`
`,(0,n.jsxs)(r.p,{children:["Technical details of the Benchling integration can be found in ",(0,n.jsx)(r.a,{href:"https://help.benchling.com/hc/en-us/articles/40342713479437-Benchling-MCP",children:"Benchling’s MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"example-use-cases",children:(0,n.jsx)(r.strong,{children:"Example use cases"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Cross-Source Comparison:"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Compare the IC50 results from my last two Benchling experiments with recent PubMed articles on AAV stability."})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Insight Summarization:"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Summarize the key findings from Benchling experiments and highlight how they align with external literature trends."})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Recommendations:"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Based on our last three in vivo results in Benchling and recent FDA guidance, what should we test next?"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Portfolio Insights:"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Aggregate results from our top five Benchling programs and highlight which ones are showing the strongest early efficacy signals compared with industry benchmarks."})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};