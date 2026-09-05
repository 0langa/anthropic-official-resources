import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Claude Code has an MCP client built right into it, which means you can connect MCP servers to dramatically expand its functionality. This opens up some really powerful possibilities for customizing your development workflow."}),`
`,(0,n.jsx)(r.h2,{id:"how-mcp-integration-works",children:"How MCP Integration Works"}),`
`,(0,n.jsx)(r.p,{children:"The Model Context Protocol allows Claude Code to connect to external services through MCP servers. Each server can provide tools, prompts, and resources that extend what Claude can do."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f6811880b277.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In this example, we'll connect Claude Code to a custom MCP server that provides a document conversion tool. This will let Claude read and convert PDF and Word documents to markdown format."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0a249b24a136.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"adding-an-mcp-server-to-claude-code",children:"Adding an MCP Server to Claude Code"}),`
`,(0,n.jsx)(r.p,{children:"Setting up an MCP server is straightforward. First, stop any running Claude Code session, then use the MCP add command:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`claude mcp add documents uv run main.py
`})}),`
`,(0,n.jsx)(r.p,{children:"This command takes two arguments:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'The server name (can be anything you want - "documents" in this case)'}),`
`,(0,n.jsx)(r.li,{children:"The command to start your MCP server"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"After adding the server, restart Claude Code and it will automatically connect to your MCP server."}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-integration",children:"Testing the Integration"}),`
`,(0,n.jsx)(r.p,{children:"Once connected, Claude can use the tools provided by your MCP server. In our example, we can ask Claude to convert document files to markdown format, and it will automatically use the document conversion tool we created."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./84fd59d8fe1f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The tool successfully converts the document content, showing how MCP servers can add entirely new capabilities to Claude Code."}),`
`,(0,n.jsx)(r.h2,{id:"popular-mcp-servers-for-development",children:"Popular MCP Servers for Development"}),`
`,(0,n.jsx)(r.p,{children:"There are many existing MCP servers that can enhance your development workflow:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e1fbfe9fdc01.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"sentry-mcp"})," - Automatically discover and fix bugs logged in Sentry"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"playwright-mcp"})," - Gives Claude browser automation capabilities for testing and troubleshooting"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"figma-context-mcp"})," - Exposes Figma designs to Claude"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"mcp-atlassian"})," - Allows Claude to access Confluence and Jira"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"firecrawl-mcp-server"})," - Adds web scraping capabilities to Claude"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"slack-mcp"})," - Allows Claude to post messages or reply to specific threads"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"building-your-custom-workflow",children:"Building Your Custom Workflow"}),`
`,(0,n.jsx)(r.p,{children:"The real power comes from combining multiple MCP servers that match your specific development needs. For example, you might set up:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A Sentry server to fetch production error details"}),`
`,(0,n.jsx)(r.li,{children:"A Jira server to read ticket requirements"}),`
`,(0,n.jsx)(r.li,{children:"A Slack server to notify your team when work is complete"}),`
`,(0,n.jsx)(r.li,{children:"Custom servers for your specific tools and processes"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This flexibility makes Claude Code incredibly adaptable to different development environments and workflows. Take some time to think about which external services and tools you use regularly - there's likely an MCP server that can integrate them with Claude Code."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};