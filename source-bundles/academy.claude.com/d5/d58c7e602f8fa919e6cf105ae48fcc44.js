import{Gp as e,qp as t}from"../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The MCP client serves as the communication bridge between your server and MCP servers. Think of it as your access point to all the tools that an MCP server provides. When you need to use external tools or services, the client handles all the message passing and protocol details for you."}),`
`,(0,n.jsx)(r.h2,{id:"transport-agnostic-communication",children:"Transport Agnostic Communication"}),`
`,(0,n.jsx)(r.p,{children:"One of MCP's key strengths is being transport agnostic - a fancy way of saying the client and server can talk to each other using different communication methods. The most common setup runs both the MCP client and server on the same machine, where they communicate through standard input/output."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8bdb21c32a46.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"But you're not limited to that approach. MCP clients and servers can also connect over:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"HTTP"}),`
`,(0,n.jsx)(r.li,{children:"WebSockets"}),`
`,(0,n.jsx)(r.li,{children:"Various other network protocols"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4508517b2987.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"message-types",children:"Message Types"}),`
`,(0,n.jsx)(r.p,{children:"Once connected, the client and server exchange specific message types defined in the MCP specification. The main message types you'll work with are:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./17af17ed9ff3.jpg",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"ListToolsRequest/ListToolsResult:"}),' The client asks the server "what tools do you provide?" and gets back a list of available tools.']}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./73bd1e2204d0.jpg",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"CallToolRequest/CallToolResult:"})," The client asks the server to run a specific tool with certain arguments, then receives the results."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./44fde20f099c.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"complete-flow-example",children:"Complete Flow Example"}),`
`,(0,n.jsx)(r.p,{children:`Here's how all the pieces work together in a real scenario. Let's say a user asks "What repositories do I have?" - here's the complete communication flow:`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./61428a53b0f6.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The process starts when a user submits a query to your server. Your server realizes it needs to provide Claude with a list of available tools before making the request."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e96476845361.jpg",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["Your server asks the MCP client for tools, which sends a ",(0,n.jsx)(r.code,{children:"ListToolsRequest"})," to the MCP server and receives a ",(0,n.jsx)(r.code,{children:"ListToolsResult"})," back."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2e4cdc634443.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Now your server has everything needed to make the initial request to Claude - both the user's question and the available tools."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./461d8942bd83.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude examines the tools and decides it needs to call one to answer the question. It responds with a tool use request."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d35808ae9031.jpg",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["Your server asks the MCP client to execute the tool Claude requested. The MCP client sends a ",(0,n.jsx)(r.code,{children:"CallToolRequest"})," to the MCP server, which then makes the actual request to GitHub."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2acd9bb9a6ec.jpg",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["GitHub returns the repository data, which flows back through the MCP server as a ",(0,n.jsx)(r.code,{children:"CallToolResult"}),", then to the MCP client, and finally to your server."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./df5aca29f016.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Your server sends the tool results back to Claude in a follow-up message. Claude now has all the information it needs to formulate a complete response."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0ed2a940cf9d.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Finally, Claude responds with the formatted answer, which your server passes back to the user."}),`
`,(0,n.jsx)(r.p,{children:"Yes, this flow involves many steps, but each component has a clear responsibility. The MCP client abstracts away the complexity of server communication, letting you focus on building your application logic. As we implement our own MCP client and server, you'll see how each piece fits together in practice."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};