import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={h2:"h2",h3:"h3",img:"img",p:"p",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Model Context Protocol (MCP) is a communication layer that provides Claude with context and tools without requiring you to write a bunch of tedious integration code. Instead of building every tool function yourself, MCP shifts that burden to specialized servers that handle the heavy lifting."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./756f4e95014a.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you first encounter MCP, you'll see diagrams showing the basic architecture: an MCP Client (your server) connects to MCP Servers that contain tools, prompts, and resources. Each MCP Server acts as an interface to outside services like GitHub, AWS, or databases."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-mcp-solves",children:"The Problem MCP Solves"}),`
`,(0,n.jsx)(r.p,{children:`Let's say you're building a chat interface where users can ask Claude about their GitHub data - questions like "What open pull requests are there across all my repositories?" To handle this without MCP, you'd need to create tools for every GitHub operation you want to support.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5148da8be952.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"GitHub has massive functionality - repositories, pull requests, issues, projects, and much more. Building a complete GitHub integration means authoring an incredible number of tool schemas and functions:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8a56e2bfc086.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This creates a lot of code that you have to write, test, and maintain. That's where MCP comes in."}),`
`,(0,n.jsx)(r.h2,{id:"how-mcp-works",children:"How MCP Works"}),`
`,(0,n.jsx)(r.p,{children:"MCP shifts the burden of tool definitions and execution from your server to dedicated MCP Servers. Instead of writing all those GitHub tools yourself, you connect to a GitHub MCP Server that already has them implemented."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4ae6049ccbd8.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The MCP Server acts as a wrapper around the outside service, providing pre-built tools that Claude can use. You get access to all that GitHub functionality without writing any of the integration code yourself."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6007c0bb43df.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"common-questions",children:"Common Questions"}),`
`,(0,n.jsx)(r.h3,{id:"who-authors-mcp-servers",children:"Who authors MCP Servers?"}),`
`,(0,n.jsx)(r.p,{children:"Anyone can create an MCP Server implementation. Often, service providers themselves will make their own official implementations. For example, AWS might release an official MCP Server with tools for their various services."}),`
`,(0,n.jsx)(r.h3,{id:"how-is-this-different-from-calling-apis-directly",children:"How is this different from calling APIs directly?"}),`
`,(0,n.jsx)(r.p,{children:"When you call a service's API directly, you still have to write the tool schemas and function implementations yourself. MCP Servers provide those tool schemas and functions already defined for you, saving you development time."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./69d10ad78e4b.png",alt:""})}),`
`,(0,n.jsx)(r.h3,{id:"isnt-mcp-just-the-same-as-tool-use",children:"Isn't MCP just the same as tool use?"}),`
`,(0,n.jsx)(r.p,{children:"This is a common misconception. MCP Servers and tool use are complementary but different concepts. Tool use is about Claude calling functions to accomplish tasks. MCP is about who provides those functions - instead of you writing them, someone else has already implemented them in an MCP Server."}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that MCP Servers provide tool schemas and functions already defined for you, while direct tool use requires you to author everything yourself. Both involve Claude using tools, but MCP dramatically reduces the development work required on your end."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};