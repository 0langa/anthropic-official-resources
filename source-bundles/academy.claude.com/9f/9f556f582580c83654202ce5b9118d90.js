import{em as e,nm as t}from"../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The 10x Genomics integration transforms single cell and spatial analysis into a simple, conversational workflow. Biologists can easily analyze their own sequencing data, while core labs can quickly perform batch processing. This article explains how to set up and use the 10x Genomics integration with Claude to advance your analysis workflows."}),`
`,(0,n.jsxs)(r.p,{children:["The 10x Genomics integration is available as a desktop extension in the Claude Desktop App (",(0,n.jsx)(r.a,{href:"https://claude.ai/download",children:"download here"}),"), and it relies upon Claude's ability to use ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop",children:"local connectors via a desktop extension"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"what-this-integration-provides",children:"What this integration provides"}),`
`,(0,n.jsx)(r.p,{children:"The 10x Genomics integration enables researchers to create and manage single cell genomics analysis workflows in conversation with Claude. Users can upload data, configure and launch Cell Ranger pipelines, monitor analysis status, and download results using natural language prompts instead of command-line tools or web interfaces. The integration translates conversational requests into actions on the 10x Cloud Analysis platform, streamlining workflows for gene expression, cell multiplexing, and CRISPR screening analyses."}),`
`,(0,n.jsx)(r.h2,{id:"who-should-use-the-10x-genomics-integration",children:"Who should use the 10x Genomics integration"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Computational Biologists:"})," Researchers who analyze single cell genomics data and want to streamline cloud-based analysis workflows"]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Bioinformaticians:"})," Scientists who process multiple samples and need efficient batch processing capabilities"]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Research Scientists:"})," Lab researchers who generate single cell data and want an intuitive interface for running standard pipelines"]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Core Facility Managers:"})," Staff who process samples for multiple research groups and need to manage numerous analyses"]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"who-can-access-the-10x-genomics-integration",children:"Who can access the 10x Genomics integration"}),`
`,(0,n.jsxs)(r.p,{children:["Any user with a 10x Cloud Analysis account (",(0,n.jsx)(r.a,{href:"https://www.10xgenomics.com/products/cloud-analysis",children:"create a free account here"}),")"]}),`
`,(0,n.jsxs)(r.p,{children:["More details on accessing the integration can be found in the ",(0,n.jsx)(r.a,{href:"https://www.10xgenomics.com/support/software/cloud-analysis/latest/tutorials/cloud-mcp-server",children:"10x Genomics MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-10x-genomics-integration",children:"Setting up the 10x Genomics integration"}),`
`,(0,n.jsxs)(r.p,{children:["The 10x Genomics integration is available as a desktop extension in the Claude Desktop App (",(0,n.jsx)(r.a,{href:"https://claude.ai/download",children:"download here"}),"). For Organization Owners (Team and Enterprise), setting up the integration involves making the extension available to your organization. For individual users, setting up the integration involves installing the extension from inside the Claude Desktop App."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Organization Owners (Team and Enterprise)"})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"If your organization uses the Desktop Extension Allowlist (i.e., restricts which Desktop Extensions users can access)…"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:"Click “Desktop” tab at the top"}),`
`,(0,n.jsxs)(r.li,{children:["Confirm that “Allowlist” it toggled ",(0,n.jsx)(r.strong,{children:"on"})]}),`
`,(0,n.jsx)(r.li,{children:"Click the “Browse” button"}),`
`,(0,n.jsxs)(r.li,{children:["In the search field, type “",(0,n.jsx)(r.strong,{children:"10x Genomics"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click on 10x Genomics"}),`
`,(0,n.jsx)(r.li,{children:"Click “Add to your team”"}),`
`,(0,n.jsxs)(r.li,{children:["Instruct your team to download the ",(0,n.jsx)(r.a,{href:"https://claude.ai/download",children:"Claude Desktop App"})," to access the integration by following the instructions below for Individual Claude Users"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"If your organization does not use the Desktop Extension Allowlist (i.e., does not restrict which Desktop Extensions users can access)…"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to Admin settings > Connectors"}),`
`,(0,n.jsx)(r.li,{children:"Click “Desktop” tab at the top"}),`
`,(0,n.jsxs)(r.li,{children:["Confirm that “Allowlist” it toggled ",(0,n.jsx)(r.strong,{children:"off"})]}),`
`,(0,n.jsx)(r.li,{children:"If the Allowlist is toggled off, all users in your organization will already be able to access the Desktop Extension directory using the instructions below for Individual Claude Users"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Individual Claude Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Download the ",(0,n.jsx)(r.a,{href:"https://claude.ai/download",children:"Claude Desktop App"})]}),`
`,(0,n.jsx)(r.li,{children:"In the Claude Desktop App, navigate to Settings > Extensions"}),`
`,(0,n.jsx)(r.li,{children:"Click “Browse extensions”"}),`
`,(0,n.jsxs)(r.li,{children:["Click “",(0,n.jsx)(r.strong,{children:"10x Genomics"}),"”"]}),`
`,(0,n.jsx)(r.li,{children:"Click “Install”"}),`
`,(0,n.jsx)(r.li,{children:"Follow the instructions to authenticate with your 10x Cloud Analysis account"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Learn about ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop",children:"installing desktop extensions from the directory"}),"."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For Claude Code Users"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin marketplace add anthropics/life-sciences"})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin install 10x-genomics@life-sciences"})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Restart Claude Code"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Command: ",(0,n.jsx)(r.code,{children:"/plugin"})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:'Navigate to “Manage and uninstall plugins" and configure the 10x Genomics MCP with your access token'}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Restart Claude Code one more time"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(r.p,{children:["Verify that the server is connected with ",(0,n.jsx)(r.code,{children:"/mcp"})]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"common-use-cases",children:"Common use cases"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Set up a Cell Ranger count analysis"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Set up a Cell Ranger multi analysis with multiplexing"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Batch process multiple samples"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Monitor and download analysis results"}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:"Interpret QC metrics and results"}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Sample prompts and prompting best practices can be found in the ",(0,n.jsx)(r.a,{href:"https://www.10xgenomics.com/support/software/cloud-analysis/latest/tutorials/cloud-mcp-server",children:"10x Genomics MCP Server Documentation"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"more-resources-from-10x-genomics",children:"More resources from 10x Genomics"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://www.10xgenomics.com/support/software/cloud-analysis/latest",children:"10x Cloud Analysis support"})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://www.10xgenomics.com/support/software/cell-ranger/latest",children:"Cell Ranger documentation"})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://www.10xgenomics.com/support/software/cloud-analysis/latest/tutorials/cloud-mcp-server",children:"10x Genomics MCP Server Documentation"})}),`
`]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};