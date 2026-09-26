import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# MCP

Model Context Protocol is an open standard that lets Claude Code connect to external tools and data sources. When you ask a question, Claude will automatically understand when it should use those tools to better understand your query.

Context is one of the most important parts when working with Claude Code. A lot of your context lives elsewhere, like your databases, your productivity apps, or in public repositories. This is where MCP comes in.

First, it's important to understand the concept of tools when talking about agentic AI. Tools give agents like Claude Code the ability to perform actions in order for them to better complete their tasks. This is different from other AI where you just get an output back directly in text usually.

For example, if your team is using Linear as their project management software, you can add a Linear MCP server to bring in the details of your specific issues. If you want to get up-to-date documentation of a dependency that you're working with, then the Context7 MCP server will provide Claude Code with that. There are also hundreds of different connectors at claude.com/connectors.

You can add MCP servers with the Claude MCP add command. There are two main types. HTTP servers are for remote services. These are hosted by the service provider and connect over the network. STDIO servers are for local processes that run on your machine.

You can manage your servers with the /mcp inside a Claude Code session to see what's connected, the status, and disable servers that you don't want to use.

MCP servers can be scoped in three different ways. One, local means it's only available in the current project for you. Two, the user, which means it's available across all your projects. And three, project scope uses a .mcp.json file that you check into your version control, so anyone working on the code base gets the exact same servers automatically.

Now, one thing to be aware of is that MCP servers add tool definitions to your context window, even when you're not using them. So if you have a lot of servers configured, this eats into your available context. Run the /mcp command to see what's connected and disable anything that you're not actively using or don't think that you're going to use.

If a tool has a CLI equivalent like gh for GitHub or AWS for AWS, the CLI is more context efficient because it doesn't add persistent tool definitions. You also might benefit from using a skill in the scenario. A skill has a name and a description that is loaded into context. Similar to MCP, when Claude thinks it needs to use that skill, it then decides to load it into the context window, which is where you could put the command line interface tools.

If your MCP tools exceed 10% of your context window, Claude Code will automatically switch to tool search mode, which will discover the right tools on demand, but this might not work as well since it's just not in the context.

Now a quick recap. MCP connects Claude Code to your external tools and data sources. Add servers with Claude MCP add, scope them to your project with .mcp.json so that your team gets them automatically, and keep an eye on the context usage by disabling servers that you're not actively using.
`;function i(t){let i={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:a}=i;return a||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{youtubeId:"kkBFmwkDzdo",title:"MCP",transcript:r,children:(0,n.jsx)(i.p,{children:`Model Context Protocol (MCP) is an open standard that lets Claude Code
connect to external tools and data sources. When you ask a question, Claude
automatically understands when it should use those tools to better handle
your query.`})}),`
`,(0,n.jsx)(i.p,{children:"A lot of your context lives outside your codebase — in databases, productivity apps, or public repositories. MCP bridges that gap."}),`
`,(0,n.jsx)(i.h2,{id:"what-can-you-do-with-it",children:"What Can You Do With It?"}),`
`,(0,n.jsx)(i.p,{children:`First, it's important to understand the concept of "tools" in agentic AI. Tools give agents like Claude Code the ability to perform actions that help them complete tasks more effectively. This is different from typical AI, where you just get a text response back.`}),`
`,(0,n.jsx)(i.p,{children:"For example, if your team uses Linear for project management, you can add a Linear MCP server to bring in the details of your specific issues. If you need up-to-date documentation for a dependency, a docs MCP server like Context7 can provide that to Claude Code."}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./8b45d337d706.jpg",alt:"Claude Code querying a Linear MCP server to retrieve issue details for ticket MEN-12"})}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./d6d21d5d4f27.jpg",alt:"Claude Code using the Context7 MCP server to look up the latest shadcn/ui documentation"})}),`
`,(0,n.jsx)(i.h2,{id:"adding-an-mcp-server",children:"Adding an MCP Server"}),`
`,(0,n.jsxs)(i.p,{children:["You can add MCP servers with the ",(0,n.jsx)(i.code,{children:"claude mcp add"})," command. There are two main types:"]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./2e38357f8b36.jpg",alt:"Running claude mcp add to add an HTTP Linear MCP server from the terminal"})}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"HTTP servers"})," are for remote services. These are hosted by the service provider and connect over the network."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Stdio servers"})," are for local processes that run on your machine."]}),`
`]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./a19228083bd3.jpg",alt:"Running claude mcp add to add a local stdio MCP server with a Python script"})}),`
`,(0,n.jsxs)(i.p,{children:["You can manage your servers with ",(0,n.jsx)(i.code,{children:"/mcp"})," inside a Claude Code session to see what's connected, check status, and disable servers you don't need."]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./ad513f212c47.jpg",alt:"The /mcp command showing connected MCP servers and their status"})}),`
`,(0,n.jsx)(i.h2,{id:"scoping-servers",children:"Scoping Servers"}),`
`,(0,n.jsx)(i.p,{children:"MCP servers can be scoped in three ways:"}),`
`,(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Local"})," — only available in the current project, just for you."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"User"})," — available across all your projects."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Project"})," — uses a ",(0,n.jsx)(i.code,{children:".mcp.json"})," file that you check into version control so anyone on the codebase gets the exact same servers automatically."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"context-costs",children:"Context Costs"}),`
`,(0,n.jsxs)(i.p,{children:["MCP servers add tool definitions to your context window — even when you're not actively using them. If you have a lot of servers configured, this eats into your available context. Run ",(0,n.jsx)(i.code,{children:"/mcp"})," to see what's connected and disable anything you're not actively using."]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"./f536fa898019.jpg",alt:"The /mcp server detail view with options to view tools, reconnect, or disable a server"})}),`
`,(0,n.jsxs)(i.p,{children:["If a tool has a CLI equivalent (like ",(0,n.jsx)(i.code,{children:"gh"})," for GitHub or ",(0,n.jsx)(i.code,{children:"aws"})," for AWS), the CLI is more context-efficient because it doesn't add persistent tool definitions."]}),`
`,(0,n.jsxs)(i.p,{children:["You might also benefit from using a ",(0,n.jsx)(i.strong,{children:"Skill"})," instead. A Skill has a name and description loaded into context, and Claude only loads the full skill contents when it determines it needs to use it."]}),`
`,(0,n.jsx)(i.p,{children:"If your MCP tools exceed 10% of your context window, Claude Code automatically switches to tool search mode, which discovers the right tools on demand — though this may not work as reliably."}),`
`,(0,n.jsx)(i.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(i.p,{children:["MCP connects Claude Code to your external tools and data sources. Add servers with ",(0,n.jsx)(i.code,{children:"claude mcp add"}),". Scope them to your project with ",(0,n.jsx)(i.code,{children:".mcp.json"})," so your team gets them automatically. And keep an eye on context usage by disabling servers you're not actively using."]})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};