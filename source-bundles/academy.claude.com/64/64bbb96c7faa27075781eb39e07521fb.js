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
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5e3b30e6b215.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"ListToolsRequest/ListToolsResult:"}),' The client asks the server "what tools do you provide?" and gets back a complete list of available functionality.']}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4dbfe7029779.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"CallToolRequest/CallToolResult:"}),' The client tells the server "run this specific tool with these arguments" and receives the execution results.']}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./79f55bb4a816.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"real-world-example-flow",children:"Real-World Example Flow"}),`
`,(0,n.jsx)(r.p,{children:`Let's walk through a complete example to see how all these pieces work together. Imagine a user asks "What repositories do I have?" - here's the entire communication chain:`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a59d7b848aab.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The process starts when a user submits their question to your server. Your server realizes it needs to provide Claude with available tools before making the AI request."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1c07f5155e32.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["Your server asks the MCP client for a tool list, which triggers a ",(0,n.jsx)(r.code,{children:"ListToolsRequest"})," to the MCP server. The server responds with ",(0,n.jsx)(r.code,{children:"ListToolsResult"})," containing all available tools."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./75b325da2e24.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Now your server has everything needed to make the initial Claude request: the user's question plus the available tools. Claude analyzes the tools and decides it needs to call one to answer the question properly."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1518fad3b60e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude responds with a tool use request. Your server recognizes this and asks the MCP client to execute the tool with Claude's specified arguments."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1415a4318b55.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The MCP client sends a ",(0,n.jsx)(r.code,{children:"CallToolRequest"})," to the MCP server, which then makes the actual API call to GitHub to fetch the user's repositories."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./dd69a4ce1ab6.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["GitHub returns the repository data, which the MCP server wraps in a ",(0,n.jsx)(r.code,{children:"CallToolResult"})," and sends back through the chain. Your server receives this data and can now make a follow-up request to Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e567d86142d4.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The final step sends the tool results to Claude as part of a user message. Claude now has all the information needed to formulate a complete response about the user's repositories."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5cf8d2c9004d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Yes, this flow involves many steps, but understanding it prepares you for implementing your own MCP clients and servers. Each component has a specific role, and the standardized message types ensure everything works together smoothly regardless of the underlying transport mechanism."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};