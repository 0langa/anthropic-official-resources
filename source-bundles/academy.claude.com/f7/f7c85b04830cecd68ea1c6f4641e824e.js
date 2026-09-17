import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"We're going to build our own CLI-based chatbot to better understand how MCP clients and servers work together. This hands-on project will give you practical experience with both sides of the MCP architecture."}),`
`,(0,n.jsx)(r.h2,{id:"what-were-building",children:"What We're Building"}),`
`,(0,n.jsx)(r.p,{children:"Our chatbot will be a command-line interface that allows users to chat with a set of documents. Here's what the system will include:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A CLI-based chatbot interface"}),`
`,(0,n.jsx)(r.li,{children:"Document reading and editing capabilities for Claude"}),`
`,(0,n.jsxs)(r.li,{children:['Document "mention" functionality using ',(0,n.jsx)(r.code,{children:"@doc_name"})," syntax"]}),`
`,(0,n.jsxs)(r.li,{children:["Command execution with ",(0,n.jsx)(r.code,{children:"/command_name"})," syntax"]}),`
`,(0,n.jsx)(r.li,{children:"A collection of fake documents stored in memory"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d46a61c16751.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"system-architecture",children:"System Architecture"}),`
`,(0,n.jsx)(r.p,{children:"The project consists of three main components working together:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Our MCP Client"})," - Handles user interaction and chat interface"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Our MCP Server"})," - Provides tools for document operations"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Document Storage"})," - In-memory collection of various file types"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1107d9787fc7.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The MCP server will implement two core tools:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Tool to read document contents"}),`
`,(0,n.jsx)(r.li,{children:"Tool to update document contents"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"All documents (PDFs, spreadsheets, text files, markdown files) will be stored in memory rather than on disk, keeping the project simple and focused on MCP concepts."}),`
`,(0,n.jsx)(r.h2,{id:"important-architecture-note",children:"Important Architecture Note"}),`
`,(0,n.jsx)(r.p,{children:"In real-world projects, you typically implement either an MCP client or an MCP server - not both. You might:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Build an MCP server to distribute a service to other developers"}),`
`,(0,n.jsx)(r.li,{children:"Build an MCP client that connects to existing third-party MCP servers"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./690971468320.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Our project implements both components in a single codebase purely for educational purposes, so you can see how clients and servers interact with each other."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};