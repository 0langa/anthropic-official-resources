import{$f as e,Zf as t}from"../../../../../content-es-meta-er8sy6l1.js";import{t as n}from"../../../../../mcp-gj20tdi3.js";var r=t();function i(t){let i={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{youtubeId:"kkBFmwkDzdo",title:"MCP",transcript:n,children:(0,r.jsx)(i.p,{children:`Model Context Protocol (MCP) is an open standard that lets Claude Code
connect to external tools and data sources. When you ask a question, Claude
automatically understands when it should use those tools to better handle
your query.`})}),`
`,(0,r.jsx)(i.p,{children:"A lot of your context lives outside your codebase — in databases, productivity apps, or public repositories. MCP bridges that gap."}),`
`,(0,r.jsx)(i.h2,{id:"what-can-you-do-with-it",children:"What Can You Do With It?"}),`
`,(0,r.jsx)(i.p,{children:`First, it's important to understand the concept of "tools" in agentic AI. Tools give agents like Claude Code the ability to perform actions that help them complete tasks more effectively. This is different from typical AI, where you just get a text response back.`}),`
`,(0,r.jsx)(i.p,{children:"For example, if your team uses Linear for project management, you can add a Linear MCP server to bring in the details of your specific issues. If you need up-to-date documentation for a dependency, a docs MCP server like Context7 can provide that to Claude Code."}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./8b45d337d706.jpg",alt:"Claude Code querying a Linear MCP server to retrieve issue details for ticket MEN-12"})}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./d6d21d5d4f27.jpg",alt:"Claude Code using the Context7 MCP server to look up the latest shadcn/ui documentation"})}),`
`,(0,r.jsx)(i.h2,{id:"adding-an-mcp-server",children:"Adding an MCP Server"}),`
`,(0,r.jsxs)(i.p,{children:["You can add MCP servers with the ",(0,r.jsx)(i.code,{children:"claude mcp add"})," command. There are two main types:"]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./2e38357f8b36.jpg",alt:"Running claude mcp add to add an HTTP Linear MCP server from the terminal"})}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"HTTP servers"})," are for remote services. These are hosted by the service provider and connect over the network."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Stdio servers"})," are for local processes that run on your machine."]}),`
`]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./a19228083bd3.jpg",alt:"Running claude mcp add to add a local stdio MCP server with a Python script"})}),`
`,(0,r.jsxs)(i.p,{children:["You can manage your servers with ",(0,r.jsx)(i.code,{children:"/mcp"})," inside a Claude Code session to see what's connected, check status, and disable servers you don't need."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./ad513f212c47.jpg",alt:"The /mcp command showing connected MCP servers and their status"})}),`
`,(0,r.jsx)(i.h2,{id:"scoping-servers",children:"Scoping Servers"}),`
`,(0,r.jsx)(i.p,{children:"MCP servers can be scoped in three ways:"}),`
`,(0,r.jsxs)(i.ol,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Local"})," — only available in the current project, just for you."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"User"})," — available across all your projects."]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Project"})," — uses a ",(0,r.jsx)(i.code,{children:".mcp.json"})," file that you check into version control so anyone on the codebase gets the exact same servers automatically."]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:"context-costs",children:"Context Costs"}),`
`,(0,r.jsxs)(i.p,{children:["MCP servers add tool definitions to your context window — even when you're not actively using them. If you have a lot of servers configured, this eats into your available context. Run ",(0,r.jsx)(i.code,{children:"/mcp"})," to see what's connected and disable anything you're not actively using."]}),`
`,(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:"./f536fa898019.jpg",alt:"The /mcp server detail view with options to view tools, reconnect, or disable a server"})}),`
`,(0,r.jsxs)(i.p,{children:["If a tool has a CLI equivalent (like ",(0,r.jsx)(i.code,{children:"gh"})," for GitHub or ",(0,r.jsx)(i.code,{children:"aws"})," for AWS), the CLI is more context-efficient because it doesn't add persistent tool definitions."]}),`
`,(0,r.jsxs)(i.p,{children:["You might also benefit from using a ",(0,r.jsx)(i.strong,{children:"Skill"})," instead. A Skill has a name and description loaded into context, and Claude only loads the full skill contents when it determines it needs to use it."]}),`
`,(0,r.jsx)(i.p,{children:"If your MCP tools exceed 10% of your context window, Claude Code automatically switches to tool search mode, which discovers the right tools on demand — though this may not work as reliably."}),`
`,(0,r.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,r.jsxs)(i.p,{children:["MCP connects Claude Code to your external tools and data sources. Add servers with ",(0,r.jsx)(i.code,{children:"claude mcp add"}),". Scope them to your project with ",(0,r.jsx)(i.code,{children:".mcp.json"})," so your team gets them automatically. And keep an eye on context usage by disabling servers you're not actively using."]})]})}function a(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};