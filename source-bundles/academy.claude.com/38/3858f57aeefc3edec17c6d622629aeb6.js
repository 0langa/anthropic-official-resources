import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Claude Code has an MCP client built right into it, which means you can connect MCP servers to dramatically expand what Claude can do. This opens up some really powerful possibilities for customizing your development workflow."}),`
`,(0,n.jsx)(r.h2,{id:"how-mcp-extends-claude",children:"How MCP Extends Claude"}),`
`,(0,n.jsx)(r.p,{children:"The Model Context Protocol allows Claude Code to connect to external services and tools through MCP servers. Instead of being limited to Claude's built-in capabilities, you can add custom functionality by connecting servers that provide specific tools, resources, or integrations."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c7d903c092a6.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Each MCP server can expose different types of functionality to Claude through three main components: Tools (for taking actions), Prompts (for templates), and Resources (for accessing data)."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-an-mcp-server",children:"Setting Up an MCP Server"}),`
`,(0,n.jsx)(r.p,{children:"Adding an MCP server to Claude Code is straightforward. You use the command line to register your server:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`claude mcp add [server-name] [command-to-start-server]
`})}),`
`,(0,n.jsxs)(r.p,{children:["For example, if you have a document processing server that starts with ",(0,n.jsx)(r.code,{children:"uv run main.py"}),", you'd run:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`claude mcp add documents uv run main.py
`})}),`
`,(0,n.jsx)(r.p,{children:"Once registered, Claude Code will automatically connect to your server when it starts up."}),`
`,(0,n.jsx)(r.h2,{id:"example-document-processing",children:"Example: Document Processing"}),`
`,(0,n.jsx)(r.p,{children:'A practical example is creating a tool that lets Claude read PDF and Word documents. By building an MCP server with a "document_path_to_markdown" tool, you can ask Claude to convert document contents to markdown format.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5d7db0b4cc0f.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'When you ask Claude to "Convert the tests/fixtures/mcp_docs.docx file to markdown", it will automatically use your custom tool to read the document and return the converted content.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e24f0d96487a.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"popular-mcp-integrations",children:"Popular MCP Integrations"}),`
`,(0,n.jsx)(r.p,{children:"The MCP ecosystem includes servers for many common development tools and services:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2f33a85e6b87.jpg",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"sentry-mcp"})," - Automatically discover and fix bugs logged in Sentry"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"playwright-mcp"})," - Gives Claude browser automation capabilities for testing and troubleshooting"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"figma-context-mcp"})," - Exposes Figma designs to Claude"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"mcp-atlassian"})," - Allows Claude to access Confluence and Jira"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"firecrawl-mcp-server"})," - Adds web scraping capabilities to Claude"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"slack-mcp"})," - Allows Claude to post messages or reply to specific threads"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"building-your-development-workflow",children:"Building Your Development Workflow"}),`
`,(0,n.jsx)(r.p,{children:"The real power comes from combining multiple MCP servers that match your specific development process. You might set up:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A Sentry server to fetch production error details"}),`
`,(0,n.jsx)(r.li,{children:"A Jira server to read ticket requirements"}),`
`,(0,n.jsx)(r.li,{children:"A Slack server to notify your team when work is complete"}),`
`,(0,n.jsx)(r.li,{children:"Custom servers for your internal tools and APIs"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This creates a development environment where Claude can seamlessly work with all the tools and services you already use, making it a much more powerful coding assistant tailored to your specific workflow."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};