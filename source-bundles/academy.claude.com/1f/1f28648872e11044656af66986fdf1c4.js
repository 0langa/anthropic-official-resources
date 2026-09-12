import{em as e,nm as t}from"../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{ChatPrompt:i}=r;return i||a("ChatPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Synapse.org integration by Sage Bionetworks allows researchers to discover biomedical data across all of Synapse, see the structure of projects, and retrieve information on their data assets for authorized users. This article explains how to set up and use the Synapse.org integration with Claude to advance your research and analysis workflows."}),`
`,(0,n.jsxs)(r.p,{children:["The Synapse.org integration relies upon Claude's ability to ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"use remote connectors"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:"What this integration provides"}),`
`,(0,n.jsx)(r.p,{children:"Services include search and (meta)data retrieval services. Data access will be governed by the access controls defined for each project. Some data are publicly available, while others require approval from Synapse’s governance team prior to access."}),`
`,(0,n.jsx)(r.h2,{id:"who-can-access-the-synapseorg-integration",children:"Who can access the Synapse.org integration"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Individuals who have a registered Synapse account (",(0,n.jsx)(r.a,{href:"https://accounts.synapse.org/register1?appId=synapse.org",children:"register for free"}),")"]}),`
`,(0,n.jsx)(r.li,{children:"Data access may be subject to use restriction from contributors"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["More details on accessing the integration can be found in ",(0,n.jsx)(r.a,{href:"https://github.com/susheel/synapse-mcp?tab=readme-ov-file#synapse-mcp-server",children:"Synapse’s MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-synapseorg-integration",children:"Setting up the Synapse.org integration"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:'Click "Browse connectors"'}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"Synapse.org"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:"Click “Connect”"}),`
`,(0,n.jsx)(r.li,{children:"Follow the instructions to authenticate with your Synapse.org account"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",children:"finding and connecting tools"})," in Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin marketplace add anthropics/life-sciences"})]}),`
`,(0,n.jsxs)(r.li,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin install synapse@life-sciences"})]}),`
`,(0,n.jsx)(r.li,{children:"Restart Claude Code"}),`
`,(0,n.jsxs)(r.li,{children:["Verify that the server is connected with ",(0,n.jsx)(r.code,{children:"/mcp"})]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Technical details of the Synapse.org integration can be found in ",(0,n.jsx)(r.a,{href:"https://github.com/susheel/synapse-mcp?tab=readme-ov-file#synapse-mcp-server",children:"Synapse’s MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common use cases"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Search for reusable scientific data across all of the Synapse.org platform"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find RNA-seq datasets related to Alzheimer's disease in Synapse"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Search Synapse for single-cell transcriptomics datasets"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Find genomic sequencing data for plexiform neurofibromas in the NF Data Portal"})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Authorized users can see hierarchy of folders, files, tables, datasets within projects to help organize and monitor data assets"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Explain the files and folders in the public AACR Project GENIE project"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Give me a quick overview of the data assets in the SEA-AD challenge project with agentic track (syn66496696)?"})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Get custom metadata of entities in Synapse"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What are the annotations and metadata for file syn4553239?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me the custom metadata fields for dataset syn66364675"})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Get provenance information for entities in Synapse to help understand past data processing"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"What's the processing history for file syn51543273?"})}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Show me the data lineage and upstream dependencies for the dataset syn68719289"})}),`
`]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};