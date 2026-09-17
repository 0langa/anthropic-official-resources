import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Model Context Protocol (MCP) is a communication layer that provides Claude with context and tools without requiring you to write a bunch of tedious integration code. Instead of building every tool function yourself, MCP shifts that burden to specialized servers that handle the heavy lifting."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./756f4e95014a.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you first encounter MCP, you'll see diagrams showing the basic architecture: an MCP Client (your server) connects to MCP Servers that contain tools, prompts, and resources. Each MCP Server acts as an interface to outside services like GitHub, AWS, or databases."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-mcp-solves",children:"The Problem MCP Solves"}),`
`,(0,n.jsx)(r.p,{children:`Let's say you're building a chat interface where users can ask Claude about their GitHub data. A user might ask "What open pull requests are there across all my repositories?" To answer this, Claude needs tools that can access GitHub's API.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5148da8be952.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"GitHub has massive functionality - repositories, pull requests, issues, projects, and much more. To handle all of GitHub's features, you'd need to create an incredible number of tool schemas and functions:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8a56e2bfc086.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This means writing, testing, and maintaining a lot of code for functions like:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"get_repos()"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"list_repos()"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"create_repos()"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"search_issues()"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"update_issue()"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"create_issue()"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"get_issue()"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"create_file()"})}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-mcp-changes-this",children:"How MCP Changes This"}),`
`,(0,n.jsx)(r.p,{children:"MCP shifts the burden of tool definitions and execution from your server to MCP Servers. Instead of you writing all those GitHub integration tools, someone else creates an MCP Server for GitHub that contains all the necessary tools and functions."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4ae6049ccbd8.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The MCP Server acts as a wrapper around the outside service, providing pre-built tools that you can use immediately. Your server becomes an MCP Client that connects to these specialized servers."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6007c0bb43df.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"who-creates-mcp-servers",children:"Who Creates MCP Servers"}),`
`,(0,n.jsx)(r.p,{children:"Anyone can create an MCP Server implementation. Often, service providers themselves will create official MCP implementations. For example, AWS might release their own official MCP Server with tools for their various services."}),`
`,(0,n.jsx)(r.p,{children:"You can also create your own MCP Server to wrap access to any service you need to integrate with."}),`
`,(0,n.jsx)(r.h2,{id:"common-questions",children:"Common Questions"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./69d10ad78e4b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"How is using an MCP Server different from calling a service's API directly?"})}),`
`,(0,n.jsx)(r.p,{children:"MCP Servers provide tool schemas and functions already defined for you. If you call an API directly, you'll be writing those tool definitions yourself. MCP saves you that implementation work."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Aren't MCP Servers and tool use the same thing?"})}),`
`,(0,n.jsx)(r.p,{children:"This is a common misconception. MCP Servers and tool use are complementary but different concepts. MCP Servers provide pre-built tool schemas and functions, while tool use is about how Claude actually calls those tools. MCP is really about who does the work of creating and maintaining the tool implementations."}),`
`,(0,n.jsx)(r.p,{children:"The key benefit is that MCP Servers give you access to sophisticated integrations without having to build and maintain all that code yourself. You get the power of tool use with much less development overhead."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};