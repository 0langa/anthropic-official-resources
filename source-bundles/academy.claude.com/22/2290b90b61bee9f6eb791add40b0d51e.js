import{$f as e,Zf as t}from"../../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The streamable HTTP transport enables MCP clients to connect to remotely hosted servers over HTTP connections. Unlike the standard I/O transport that requires both client and server on the same machine, this transport opens up possibilities for public MCP servers that anyone can access."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b92b78cda593.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"However, there's an important caveat: some configuration settings can significantly limit your MCP server's functionality. If your application works perfectly with standard I/O transport locally but breaks when deployed with HTTP transport, this is likely the culprit."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./75cfbece553b.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"configuration-settings-that-matter",children:"Configuration Settings That Matter"}),`
`,(0,n.jsx)(r.p,{children:"Two key settings control how the streamable HTTP transport behaves:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"stateless_http"})," - Controls connection state management"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"json_response"})," - Controls response format handling"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["By default, both settings are ",(0,n.jsx)(r.code,{children:"false"}),", but certain deployment scenarios may force you to set them to ",(0,n.jsx)(r.code,{children:"true"}),". When enabled, these settings can break core functionality like progress notifications, logging, and server-initiated requests."]}),`
`,(0,n.jsx)(r.h2,{id:"the-http-communication-challenge",children:"The HTTP Communication Challenge"}),`
`,(0,n.jsx)(r.p,{children:"To understand why these limitations exist, we need to review how HTTP communication works. In standard HTTP:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c294c167879d.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Clients can easily initiate requests to servers (the server has a known URL)"}),`
`,(0,n.jsx)(r.li,{children:"Servers can easily respond to these requests"}),`
`,(0,n.jsx)(r.li,{children:"Servers cannot easily initiate requests to clients (clients don't have known URLs)"}),`
`,(0,n.jsx)(r.li,{children:"Response patterns from client back to server become problematic"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./453bc7c551e0.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"mcp-message-types-affected",children:"MCP Message Types Affected"}),`
`,(0,n.jsx)(r.p,{children:"This HTTP limitation impacts specific MCP communication patterns. The following message types become difficult to implement with plain HTTP:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Server-initiated requests:"})," Create Message requests, List Roots requests"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Notifications:"})," Progress notifications, Logging notifications, Initialized notifications, Cancelled notifications"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"These are exactly the features that break when you enable the restrictive HTTP settings. Progress bars disappear, logging stops working, and server-initiated sampling requests fail."}),`
`,(0,n.jsx)(r.h2,{id:"the-streamable-http-solution",children:"The Streamable HTTP Solution"}),`
`,(0,n.jsxs)(r.p,{children:["The streamable HTTP transport does provide a clever solution to work around HTTP's limitations, but it comes with trade-offs. When you're forced to use ",(0,n.jsx)(r.code,{children:"stateless_http=True"})," or ",(0,n.jsx)(r.code,{children:"json_response=True"}),", you're essentially telling the transport to operate within HTTP's constraints rather than working around them."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d2b9ff4ddcfc.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Understanding these limitations helps you make informed decisions about:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Which transport to use for different deployment scenarios"}),`
`,(0,n.jsx)(r.li,{children:"How to design your MCP server to gracefully handle HTTP constraints"}),`
`,(0,n.jsx)(r.li,{children:"When to accept reduced functionality for the benefits of remote hosting"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key is knowing that these restrictions exist and planning your MCP server architecture accordingly. If your application heavily relies on server-initiated requests or real-time notifications, you may need to reconsider your transport choice or implement alternative communication patterns."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};