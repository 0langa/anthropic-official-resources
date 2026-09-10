import{em as e,nm as t}from"../../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Model Context Protocol (MCP) is a communication layer that provides Claude with context and tools without requiring you to write a bunch of tedious integration code. Think of it as a way to shift the burden of tool definitions and execution away from your server to specialized MCP servers."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./756f4e95014a.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you first encounter MCP, you'll see diagrams showing the basic architecture: an MCP Client (your server) connecting to MCP Servers that contain tools, prompts, and resources. Each MCP Server acts as an interface to some outside service."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-mcp-solves",children:"The Problem MCP Solves"}),`
`,(0,n.jsx)(r.p,{children:`Let's say you're building a chat interface where users can ask Claude about their GitHub data. A user might ask "What open pull requests are there across all my repositories?" To handle this, Claude needs tools to access GitHub's API.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5148da8be952.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"GitHub has massive functionality - repositories, pull requests, issues, projects, and tons more. Without MCP, you'd need to create an incredible number of tool schemas and functions to handle all of GitHub's features."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8a56e2bfc086.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This means writing, testing, and maintaining all that integration code yourself. That's a lot of effort and ongoing maintenance burden."}),`
`,(0,n.jsx)(r.h2,{id:"how-mcp-works",children:"How MCP Works"}),`
`,(0,n.jsx)(r.p,{children:"MCP shifts this burden by moving tool definitions and execution from your server to dedicated MCP servers. Instead of you authoring all those GitHub tools, an MCP Server for GitHub handles it."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4ae6049ccbd8.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The MCP Server wraps up tons of functionality around GitHub and exposes it as a standardized set of tools. Your application connects to this MCP server instead of implementing everything from scratch."}),`
`,(0,n.jsx)(r.h2,{id:"mcp-servers-explained",children:"MCP Servers Explained"}),`
`,(0,n.jsx)(r.p,{children:"MCP Servers provide access to data or functionality implemented by outside services. They act as specialized interfaces that expose tools, prompts, and resources in a standardized way."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6007c0bb43df.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["In our GitHub example, the MCP Server for GitHub contains tools like ",(0,n.jsx)(r.code,{children:"get_repos()"})," and connects directly to GitHub's API. Your server communicates with the MCP server, which handles all the GitHub-specific implementation details."]}),`
`,(0,n.jsx)(r.h2,{id:"common-questions",children:"Common Questions"}),`
`,(0,n.jsx)(r.h3,{id:"who-authors-mcp-servers",children:"Who authors MCP Servers?"}),`
`,(0,n.jsx)(r.p,{children:"Anyone can create an MCP server implementation. Often, service providers themselves will make their own official MCP implementations. For example, AWS might release an official MCP server with tools for their various services."}),`
`,(0,n.jsx)(r.h3,{id:"how-is-this-different-from-calling-apis-directly",children:"How is this different from calling APIs directly?"}),`
`,(0,n.jsx)(r.p,{children:"MCP servers provide tool schemas and functions already defined for you. If you want to call an API directly, you'll be authoring those tool definitions on your own. MCP saves you that implementation work."}),`
`,(0,n.jsx)(r.h3,{id:"isnt-mcp-just-the-same-as-tool-use",children:"Isn't MCP just the same as tool use?"}),`
`,(0,n.jsx)(r.p,{children:"This is a common misconception. MCP servers and tool use are complementary but different concepts. MCP servers provide tool schemas and functions already defined for you, while tool use is about how Claude actually calls those tools. The key difference is who does the work - with MCP, someone else has already implemented the tools for you."}),`
`,(0,n.jsx)(r.p,{children:"The benefit is clear: instead of maintaining a complex set of integrations yourself, you can leverage MCP servers that handle the heavy lifting of connecting to external services."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};