import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The MCP client serves as the communication bridge between your server and MCP servers. It's your access point to all the tools that an MCP server provides, handling the message exchange and protocol details so your application doesn't have to."}),`
`,(0,n.jsx)(r.h2,{id:"transport-agnostic-communication",children:"Transport Agnostic Communication"}),`
`,(0,n.jsx)(r.p,{children:"One of MCP's key strengths is being transport agnostic - a fancy way of saying the client and server can communicate over different protocols depending on your setup."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b393bf3821c3.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The most common setup runs both the MCP client and server on the same machine, communicating through standard input/output. But you can also connect them over:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"HTTP"}),`
`,(0,n.jsx)(r.li,{children:"WebSockets"}),`
`,(0,n.jsx)(r.li,{children:"Various other network protocols"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3a63d189484f.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"mcp-message-types",children:"MCP Message Types"}),`
`,(0,n.jsx)(r.p,{children:"Once connected, the client and server exchange specific message types defined in the MCP specification. The main ones you'll work with are:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4dbfe7029779.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"ListToolsRequest/ListToolsResult:"}),' The client asks the server "what tools do you provide?" and gets back a list of available tools.']}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b94c5c441b19.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"CallToolRequest/CallToolResult:"})," The client asks the server to run a specific tool with given arguments, then receives the results."]}),`
`,(0,n.jsx)(r.h2,{id:"how-it-all-works-together",children:"How It All Works Together"}),`
`,(0,n.jsx)(r.p,{children:"Here's a complete example showing how a user query flows through the entire system - from your server, through the MCP client, to external services like GitHub, and back to Claude."}),`
`,(0,n.jsx)(r.p,{children:`Let's say a user asks "What repositories do I have?" Here's the step-by-step flow:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"User Query:"})," The user submits their question to your server"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tool Discovery:"})," Your server needs to know what tools are available to send to Claude"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"List Tools Exchange:"})," Your server asks the MCP client for available tools"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"MCP Communication:"})," The MCP client sends a ",(0,n.jsx)(r.code,{children:"ListToolsRequest"})," to the MCP server and receives a ",(0,n.jsx)(r.code,{children:"ListToolsResult"})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Claude Request:"})," Your server sends the user's query plus the available tools to Claude"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tool Use Decision:"})," Claude decides it needs to call a tool to answer the question"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tool Execution Request:"})," Your server asks the MCP client to run the tool Claude specified"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"External API Call:"})," The MCP client sends a ",(0,n.jsx)(r.code,{children:"CallToolRequest"})," to the MCP server, which makes the actual GitHub API call"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Results Flow Back:"})," GitHub responds with repository data, which flows back through the MCP server as a ",(0,n.jsx)(r.code,{children:"CallToolResult"})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tool Result to Claude:"})," Your server sends the tool results back to Claude"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Final Response:"})," Claude formulates a final answer using the repository data"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"User Gets Answer:"})," Your server delivers Claude's response back to the user"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./92b5f03a879d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Yes, this flow involves many steps, but each component has a clear responsibility. The MCP client abstracts away the complexity of server communication, letting you focus on your application logic while still getting access to powerful external tools and data sources."}),`
`,(0,n.jsx)(r.p,{children:"Understanding this flow is crucial because you'll see all these pieces when building your own MCP clients and servers in the upcoming sections."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};