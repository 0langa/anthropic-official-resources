import{$p as e,Zp as t}from"../../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"StreamableHTTP is MCP's solution to a fundamental problem: some MCP functionality requires the server to make requests to the client, but HTTP makes this challenging. Let's explore how StreamableHTTP works around this limitation and when you might need to break that workaround."}),`
`,(0,n.jsx)(r.h2,{id:"the-core-problem",children:"The Core Problem"}),`
`,(0,n.jsx)(r.p,{children:"Some MCP features like sampling, notifications, and logging rely on the server initiating requests to the client. However, HTTP is designed for clients to make requests to servers, not the other way around. StreamableHTTP solves this with a clever workaround using Server-Sent Events (SSE)."}),`
`,(0,n.jsx)(r.h2,{id:"how-streamablehttp-works",children:"How StreamableHTTP Works"}),`
`,(0,n.jsx)(r.p,{children:"The magic happens through a multi-step process that establishes persistent connections between client and server."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./672d7ee890f7.png",alt:""})}),`
`,(0,n.jsx)(r.h3,{id:"initial-connection-setup",children:"Initial Connection Setup"}),`
`,(0,n.jsx)(r.p,{children:"The process starts like any MCP connection:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Client sends an ",(0,n.jsx)(r.code,{children:"Initialize Request"})," to the server"]}),`
`,(0,n.jsxs)(r.li,{children:["Server responds with an ",(0,n.jsx)(r.code,{children:"Initialize Result"})," that includes a special ",(0,n.jsx)(r.code,{children:"mcp-session-id"})," header"]}),`
`,(0,n.jsxs)(r.li,{children:["Client sends an ",(0,n.jsx)(r.code,{children:"Initialized Notification"})," with the session ID"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This session ID is crucial - it uniquely identifies the client and must be included in all future requests."}),`
`,(0,n.jsx)(r.h3,{id:"the-sse-workaround",children:"The SSE Workaround"}),`
`,(0,n.jsx)(r.p,{children:"After initialization, the client can make a GET request to establish a Server-Sent Events connection. This creates a long-lived HTTP response that the server can use to stream messages back to the client at any time."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1de391510a4e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This SSE connection is the key to allowing server-to-client communication. The server can now send requests, notifications, and other messages through this persistent channel."}),`
`,(0,n.jsx)(r.h2,{id:"tool-calls-and-dual-sse-connections",children:"Tool Calls and Dual SSE Connections"}),`
`,(0,n.jsx)(r.p,{children:"When the client makes a tool call, things get more complex. The system creates two separate SSE connections:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./bc825054ffd3.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Primary SSE Connection:"})," Used for server-initiated requests and stays open indefinitely"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tool-Specific SSE Connection:"})," Created for each tool call and closes automatically when the tool result is sent"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"message-routing",children:"Message Routing"}),`
`,(0,n.jsx)(r.p,{children:"Different types of messages get routed through different connections:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Progress notifications:"})," Sent through the primary SSE connection"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Logging messages and tool results:"})," Sent through the tool-specific SSE connection"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./857a3d847a1d.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"configuration-flags-that-break-the-workaround",children:"Configuration Flags That Break the Workaround"}),`
`,(0,n.jsx)(r.p,{children:"StreamableHTTP includes two important configuration options:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"stateless_http"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"json_response"})}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Setting these to ",(0,n.jsx)(r.code,{children:"True"})," can break the SSE workaround mechanism. You might want to enable these flags in certain scenarios, but doing so limits the full MCP functionality that depends on server-to-client communication."]}),`
`,(0,n.jsx)(r.h2,{id:"key-takeaways",children:"Key Takeaways"}),`
`,(0,n.jsx)(r.p,{children:"StreamableHTTP is more complex than other MCP transports because it has to work around HTTP's limitations. The SSE-based workaround enables full MCP functionality over HTTP, but understanding the dual-connection model is crucial for debugging and optimization."}),`
`,(0,n.jsx)(r.p,{children:"When building MCP applications with StreamableHTTP, remember that session IDs are required for all requests after initialization, and the system automatically manages multiple SSE connections to handle different types of server-to-client communication."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};