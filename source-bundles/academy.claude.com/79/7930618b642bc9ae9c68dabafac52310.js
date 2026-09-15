import{Gp as e,qp as t}from"../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={h2:"h2",h3:"h3",img:"img",p:"p",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Model Context Protocol (MCP) is a communication layer that provides Claude with context and tools without requiring you to write a bunch of tedious integration code. Think of it as a way to shift the burden of tool definitions and execution away from your server to specialized MCP servers."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./67a3dc4f3b47.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you first encounter MCP, you'll see diagrams showing the basic architecture: an MCP Client (your server) connecting to MCP Servers that contain tools, prompts, and resources. Each MCP server acts as an interface to some outside service."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-mcp-through-a-real-example",children:"Understanding MCP Through a Real Example"}),`
`,(0,n.jsx)(r.p,{children:`Let's say you're building a chat interface where users can ask Claude about their GitHub data. A user might ask "What open pull requests are there across all my repositories?" To answer this, Claude needs tools to access GitHub's API.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ec4cb615cb14.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Without MCP, you'd need to create all the GitHub integration tools yourself. This means writing schemas and functions for every piece of GitHub functionality you want to support."}),`
`,(0,n.jsx)(r.h2,{id:"the-tool-function-problem",children:"The Tool Function Problem"}),`
`,(0,n.jsx)(r.p,{children:"GitHub has massive functionality - repositories, pull requests, issues, projects, and much more. To build a complete GitHub chatbot, you'd need to author an incredible number of tools:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fb120ae3e674.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Each tool requires both a schema definition and a function implementation. This represents a lot of code that you have to write, test, and maintain as a developer."}),`
`,(0,n.jsx)(r.h2,{id:"how-mcp-solves-this",children:"How MCP Solves This"}),`
`,(0,n.jsx)(r.p,{children:"MCP shifts the burden of tool definitions and execution from your server to MCP servers. Instead of you writing all those GitHub tools, they're authored and executed inside a dedicated MCP server."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4575f8cefd76.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The MCP server acts as a wrapper around GitHub's functionality, providing pre-built tools that you can use without having to implement them yourself."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ed302c0ffd32.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"MCP servers provide access to data or functionality implemented by outside services. They package up complex integrations into reusable components that any application can connect to."}),`
`,(0,n.jsx)(r.h2,{id:"common-questions-about-mcp",children:"Common Questions About MCP"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8f732f327ed4.jpg",alt:""})}),`
`,(0,n.jsx)(r.h3,{id:"who-authors-mcp-servers",children:"Who Authors MCP Servers?"}),`
`,(0,n.jsx)(r.p,{children:"Anyone can create an MCP server implementation. Often, service providers themselves will make their own official MCP implementations. For example, AWS might release an official MCP server with tools for their various services."}),`
`,(0,n.jsx)(r.h3,{id:"how-is-mcp-different-from-direct-api-calls",children:"How is MCP Different from Direct API Calls?"}),`
`,(0,n.jsx)(r.p,{children:"MCP servers provide tool schemas and functions already defined for you. If you call an API directly, you're responsible for authoring those tool definitions yourself. MCP saves you that implementation work."}),`
`,(0,n.jsx)(r.h3,{id:"isnt-mcp-just-tool-use",children:"Isn't MCP Just Tool Use?"}),`
`,(0,n.jsx)(r.p,{children:"This is a common misconception. MCP servers and tool use are complementary but different concepts. MCP is about who does the work of creating and maintaining the tools. With MCP, someone else has already written the tool functions and schemas for you - they're packaged inside the MCP server."}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that MCP servers provide tool schemas and functions already defined for you, eliminating the need to build and maintain complex integrations yourself."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};