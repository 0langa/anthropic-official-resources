import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building applications with AI models, you need to understand the flow of data from user input to AI-generated response. Let's walk through how this works with AWS Bedrock and see what happens behind the scenes of a typical chat application."}),`
`,(0,n.jsx)(r.h2,{id:"how-chat-applications-work",children:"How Chat Applications Work"}),`
`,(0,n.jsx)(r.p,{children:`Imagine you're building a web app with a simple chat interface. A user types "Define quantum computing" and clicks send. Here's what actually happens:`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a9c72daeb24f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The user sees a clean interface, but there's a whole system working behind the scenes to generate that response."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a284df9b084d.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-request-flow",children:"The Request Flow"}),`
`,(0,n.jsx)(r.p,{children:"When a user submits text, here's the journey that message takes:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b3679770256f.png",alt:""})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"User submits their message through your web interface"}),`
`,(0,n.jsx)(r.li,{children:"Your server receives the request containing that text"}),`
`,(0,n.jsx)(r.li,{children:"Your server uses the Bedrock client to make a request to AWS Bedrock"}),`
`,(0,n.jsx)(r.li,{children:"The request includes the user message and a model ID (like Claude Haiku or Claude Sonnet)"}),`
`,(0,n.jsx)(r.li,{children:"The chosen model processes the request and generates text"}),`
`,(0,n.jsx)(r.li,{children:"AWS Bedrock sends back an assistant message containing the generated response"}),`
`,(0,n.jsx)(r.li,{children:"Your server forwards this response back to the user's browser"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./690c3eacfdc8.png",alt:""})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};