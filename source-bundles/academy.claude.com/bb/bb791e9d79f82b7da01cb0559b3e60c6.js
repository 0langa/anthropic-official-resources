import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The MCP client serves as the communication bridge between your server and MCP servers. Think of it as your access point to all the tools that an MCP server provides. When you need to use external functionality, the client handles all the message passing and protocol details for you."}),`
`,(0,n.jsx)(r.h2,{id:"transport-agnostic-communication",children:"Transport Agnostic Communication"}),`
`,(0,n.jsx)(r.p,{children:"One of MCP's key strengths is being transport agnostic - a fancy way of saying the client and server can talk to each other using different communication methods. The most common setup runs both the MCP client and server on the same machine, where they communicate through standard input/output."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b393bf3821c3.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"But you're not limited to that approach. MCP clients and servers can also connect over:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"HTTP"}),`
`,(0,n.jsx)(r.li,{children:"WebSockets"}),`
`,(0,n.jsx)(r.li,{children:"Various other network protocols"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3a63d189484f.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"message-types",children:"Message Types"}),`
`,(0,n.jsx)(r.p,{children:"Once connected, the client and server exchange specific message types defined in the MCP specification. The main ones you'll work with are:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4dbfe7029779.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"ListToolsRequest/ListToolsResult:"}),' The client asks the server "what tools do you provide?" and gets back a complete list of available functionality.']}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b94c5c441b19.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"CallToolRequest/CallToolResult:"}),' The client tells the server "run this specific tool with these arguments" and receives the execution results.']}),`
`,(0,n.jsx)(r.h2,{id:"complete-flow-example",children:"Complete Flow Example"}),`
`,(0,n.jsx)(r.p,{children:`Here's how all the pieces work together in a real scenario. Let's say a user asks "What repositories do I have?" - here's the complete communication flow:`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1c07f5155e32.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The process starts when a user submits their question to your server. But before your server can ask Claude for help, it needs to know what tools are available."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./75b325da2e24.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["Your server asks the MCP client for a list of tools. The client sends a ",(0,n.jsx)(r.code,{children:"ListToolsRequest"})," to the MCP server and gets back a ",(0,n.jsx)(r.code,{children:"ListToolsResult"})," with all available tools."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1518fad3b60e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Now your server has everything needed to make the initial request to Claude: the user's question plus the list of available tools."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1415a4318b55.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude analyzes the tools and decides it needs to call one to answer the question. It responds with a tool use request."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./59781bd96669.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Your server recognizes that Claude wants to run a tool, but your server doesn't execute tools directly anymore - that's the MCP server's job. So it asks the MCP client to run the tool with Claude's specified arguments."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./dd69a4ce1ab6.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The MCP client sends a ",(0,n.jsx)(r.code,{children:"CallToolRequest"})," to the MCP server, which then makes the actual request to GitHub to fetch the user's repositories."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e567d86142d4.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["GitHub responds with the repository data, which the MCP server wraps in a ",(0,n.jsx)(r.code,{children:"CallToolResult"})," and sends back to the MCP client."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./97d8b2efc898.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The MCP client passes the tool result back to your server, which then sends it to Claude as part of a follow-up message."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5cf8d2c9004d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Finally, Claude has all the information it needs and formulates a response like "Your repositories are..." which gets sent back through your server to the user.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./92b5f03a879d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Yes, this flow involves many steps, but each component has a clear responsibility. The MCP client abstracts away the complexity of server communication, letting you focus on building your application logic while still having access to powerful external tools and services."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};