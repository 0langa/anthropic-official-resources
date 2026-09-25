import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"MCP (Model Context Protocol) uses JSON messages to handle communication between clients and servers. Understanding these message types is crucial for working with MCP, especially when dealing with different transport methods like the streamable HTTP transport."}),`
`,(0,n.jsx)(r.h2,{id:"message-format",children:"Message Format"}),`
`,(0,n.jsx)(r.p,{children:"All MCP communication happens through JSON messages. Each message type serves a specific purpose - whether it's calling a tool, listing available resources, or sending notifications about system events."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ebaf35d65cc2.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`Here's a typical example: when Claude needs to call a tool provided by an MCP server, the client sends a "Call Tool Request" message. The server processes this request, runs the tool, and responds with a "Call Tool Result" message containing the output.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3e75ce9b60eb.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"mcp-specification",children:"MCP Specification"}),`
`,(0,n.jsx)(r.p,{children:"The complete list of message types is defined in the official MCP specification repository on GitHub. This specification is separate from the various SDK repositories (like Python or TypeScript SDKs) and serves as the authoritative source for how MCP should work."}),`
`,(0,n.jsx)(r.p,{children:"The message types are written in TypeScript for convenience - not because they're executed as TypeScript code, but because TypeScript provides a clear way to describe data structures and types."}),`
`,(0,n.jsx)(r.h2,{id:"message-categories",children:"Message Categories"}),`
`,(0,n.jsx)(r.p,{children:"MCP messages fall into two main categories:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7cc6ab727a5d.png",alt:""})}),`
`,(0,n.jsx)(r.h3,{id:"request-result-messages",children:"Request-Result Messages"}),`
`,(0,n.jsx)(r.p,{children:"These messages always come in pairs. You send a request and expect to get a result back:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Call Tool Request"})," → ",(0,n.jsx)(r.strong,{children:"Call Tool Result"})]}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"List Prompts Request → List Prompts Result"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"Read Resource Request → Read Resource Result"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"Initialize Request → Initialize Result"})}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"notification-messages",children:"Notification Messages"}),`
`,(0,n.jsx)(r.p,{children:"These are one-way messages that inform about events but don't require a response:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Progress Notification"})," - Updates on long-running operations"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Logging Message Notification"})," - System log messages"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tool List Changed Notification"})," - When available tools change"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Resource Updated Notification"})," - When resources are modified"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"client-vs-server-messages",children:"Client vs Server Messages"}),`
`,(0,n.jsx)(r.p,{children:"The MCP specification organizes messages by who sends them:"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Client messages"})," include requests that clients send to servers (like tool calls) and notifications that clients might send."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Server messages"})," include requests that servers send to clients and notifications that servers broadcast."]}),`
`,(0,n.jsx)(r.h2,{id:"why-this-matters",children:"Why This Matters"}),`
`,(0,n.jsx)(r.p,{children:"Understanding that servers can send messages to clients is particularly important when working with different transport methods. Some transports, like the streamable HTTP transport, have limitations on which types of messages can flow in which directions."}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that MCP is designed as a bidirectional protocol - both clients and servers can initiate communication. This becomes crucial when you need to choose the right transport method for your specific use case."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};