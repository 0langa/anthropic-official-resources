import{em as e,nm as t}from"../../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"stateless_http"})," and ",(0,n.jsx)(r.code,{children:"json_response"})," flags in MCP servers control fundamental aspects of how your server behaves. Understanding when and why to use them is crucial, especially if you're planning to scale your server or deploy it in production."]}),`
`,(0,n.jsx)(r.h2,{id:"when-you-need-stateless-http",children:"When You Need Stateless HTTP"}),`
`,(0,n.jsx)(r.p,{children:"Imagine you build an MCP server that becomes popular. Initially, you might have just a few clients connecting to a single server instance:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d376b529089d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"As your server grows, you might have thousands of clients trying to connect. Running a single server instance won't scale to handle all that traffic:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./88f8b947de6b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The typical solution is horizontal scaling - running multiple server instances behind a load balancer:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./036078bb8958.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"But here's where things get complicated. Remember that MCP clients need two separate connections:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A GET SSE connection for receiving server-to-client requests"}),`
`,(0,n.jsx)(r.li,{children:"POST requests for calling tools and receiving responses"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8a2bab206dac.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"With a load balancer, these requests might get routed to different server instances. If your tool needs to use Claude (through sampling), the server handling the POST request would need to coordinate with the server handling the GET SSE connection. This creates a complex coordination problem between servers."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b92d21851ccf.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-stateless-http-solves-this",children:"How Stateless HTTP Solves This"}),`
`,(0,n.jsxs)(r.p,{children:["Setting ",(0,n.jsx)(r.code,{children:"stateless_http=True"})," eliminates this coordination problem, but with significant trade-offs:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./602d481b3eb2.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When stateless HTTP is enabled:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Clients don't get session IDs"})," - the server can't track individual clients"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"No server-to-client requests"})," - the GET SSE pathway becomes unavailable"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"No sampling"})," - can't use Claude or other AI models"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"No progress reports"})," - can't send progress updates during long operations"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"No subscriptions"})," - can't notify clients about resource updates"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["However, there's one benefit: ",(0,n.jsx)(r.strong,{children:"client initialization is no longer required"}),". Clients can make requests directly without the initial handshake process."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./685167d8dee5.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"understanding-json-response",children:"Understanding JSON Response"}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"json_response=True"})," flag is simpler - it just disables streaming for POST request responses. Instead of getting multiple SSE messages as a tool executes, you get only the final result as plain JSON."]}),`
`,(0,n.jsx)(r.p,{children:"With streaming disabled:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"No intermediate progress messages"}),`
`,(0,n.jsx)(r.li,{children:"No log statements during execution"}),`
`,(0,n.jsx)(r.li,{children:"Just the final tool result"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-these-flags",children:"When to Use These Flags"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Use stateless HTTP when:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You need horizontal scaling with load balancers"}),`
`,(0,n.jsx)(r.li,{children:"You don't need server-to-client communication"}),`
`,(0,n.jsx)(r.li,{children:"Your tools don't require AI model sampling"}),`
`,(0,n.jsx)(r.li,{children:"You want to minimize connection overhead"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Use JSON response when:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You don't need streaming responses"}),`
`,(0,n.jsx)(r.li,{children:"You prefer simpler, non-streaming HTTP responses"}),`
`,(0,n.jsx)(r.li,{children:"You're integrating with systems that expect plain JSON"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"development-vs-production",children:"Development vs Production"}),`
`,(0,n.jsx)(r.p,{children:"If you're developing locally with standard I/O transport but planning to deploy with HTTP transport, test with the same transport you'll use in production. The behavior differences between stateful and stateless modes can be significant, and it's better to catch any issues during development rather than after deployment."}),`
`,(0,n.jsx)(r.p,{children:"These flags fundamentally change how your MCP server operates, so choose them based on your specific scaling and functionality requirements."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};