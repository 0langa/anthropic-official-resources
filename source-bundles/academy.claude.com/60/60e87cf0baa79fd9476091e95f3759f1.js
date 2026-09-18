import{$p as e,Zp as t}from"../../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["MCP clients and servers communicate by exchanging JSON messages, but how do these messages actually get transmitted? The communication channel used is called a ",(0,n.jsx)(r.strong,{children:"transport"}),", and there are several ways to implement this - from HTTP requests to WebSockets to even writing JSON on a postcard (though that last one isn't recommended for production use)."]}),`
`,(0,n.jsx)(r.h2,{id:"the-stdio-transport",children:"The Stdio Transport"}),`
`,(0,n.jsxs)(r.p,{children:["When you're first developing an MCP server or client, the most commonly used transport is the ",(0,n.jsx)(r.strong,{children:"stdio transport"}),". This approach is straightforward: the client launches the MCP server as a subprocess and communicates through standard input and output streams."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e5533b780e5c.png",alt:"Diagram of the stdio transport: an MCP client sends messages to an MCP server through the server's stdin, and the server sends messages back through stdout; either side can send a message at any time, and it only works when both run on the same machine"})}),`
`,(0,n.jsx)(r.p,{children:"Here's how it works:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Client sends messages to the server using the server's ",(0,n.jsx)(r.code,{children:"stdin"})]}),`
`,(0,n.jsxs)(r.li,{children:["Server responds by writing to ",(0,n.jsx)(r.code,{children:"stdout"})]}),`
`,(0,n.jsx)(r.li,{children:"Either the server or client can send a message at any time"}),`
`,(0,n.jsx)(r.li,{children:"Only works when client and server run on the same machine"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"seeing-stdio-in-action",children:"Seeing Stdio in Action"}),`
`,(0,n.jsxs)(r.p,{children:["You can actually test an MCP server directly from your terminal without writing a separate client. When you run a server with ",(0,n.jsx)(r.code,{children:"uv run server.py"}),", it listens to stdin and writes responses to stdout. This means you can paste JSON messages directly into your terminal and see the server's responses immediately."]}),`
`,(0,n.jsx)(r.p,{children:"The terminal output shows the complete message exchange, including example messages for initialization and tool calls."}),`
`,(0,n.jsx)(r.h2,{id:"mcp-connection-sequence",children:"MCP Connection Sequence"}),`
`,(0,n.jsx)(r.p,{children:"Every MCP connection must start with a specific three-message handshake:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./784e9ecbcbd5.png",alt:"Sequence diagram of the MCP handshake: the client sends an Initialize Request to the server, the server replies with an Initialize Result, then the client sends an Initialized Notification for which no result comes back"})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Initialize Request"})," - Client sends this first"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Initialize Result"})," - Server responds with capabilities"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Initialized Notification"})," - Client confirms (no response expected)"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Only after this handshake can you send other requests like tool calls or prompt listings."}),`
`,(0,n.jsx)(r.h2,{id:"message-types-and-flow",children:"Message Types and Flow"}),`
`,(0,n.jsx)(r.p,{children:"MCP supports various message types that flow in both directions:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ec6d64526e67.png",alt:"Chart of MCP message types between client and server: client-initiated request/result pairs like Call Tool Request → Call Tool Result, server-initiated pairs like Create Message Request and List Roots Request, plus one-way notifications from each side that don't require a response"})}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that some messages require responses (requests → results) while others don't (notifications). Both client and server can initiate communication at any time."}),`
`,(0,n.jsx)(r.h2,{id:"four-communication-scenarios",children:"Four Communication Scenarios"}),`
`,(0,n.jsx)(r.p,{children:"With any transport, you need to handle four different communication patterns:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d6a31cbd16c8.png",alt:`Diagram titled "How can we implement each of these with stdio?" listing four patterns - initial request from client to server, response from server to client, initial request from server to client, and response from client to server - next to an MCP client connected to an MCP server's stdin and stdout`})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Client → Server request"}),": Client writes to stdin"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Server → Client response"}),": Server writes to stdout"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Server → Client request"}),": Server writes to stdout"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Client → Server response"}),": Client writes to stdin"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The beauty of stdio transport is its simplicity - either party can initiate communication at any time using these two channels."}),`
`,(0,n.jsx)(r.h2,{id:"why-this-matters",children:"Why This Matters"}),`
`,(0,n.jsx)(r.p,{children:`Understanding stdio transport is crucial because it represents the "ideal" case where bidirectional communication is seamless. When we move to other transports like HTTP, we'll encounter limitations where the server cannot always initiate requests to the client. The stdio transport serves as our baseline for understanding what full MCP communication looks like before we tackle the constraints of other transport methods.`}),`
`,(0,n.jsx)(r.p,{children:"For development and testing, stdio transport is perfect. For production deployments where client and server need to run on different machines, you'll need to consider other transport options with their own trade-offs."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};