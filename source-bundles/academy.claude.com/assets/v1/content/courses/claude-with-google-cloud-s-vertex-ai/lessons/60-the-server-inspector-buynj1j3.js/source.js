import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building MCP servers, you need a way to test your functionality without connecting to a full application. The Python MCP SDK includes a built-in browser-based inspector that lets you debug and test your server in real-time."}),`
`,(0,n.jsx)(r.h2,{id:"starting-the-inspector",children:"Starting the Inspector"}),`
`,(0,n.jsx)(r.p,{children:"First, make sure your Python environment is activated (check your project's README for the exact command). Then run the inspector with:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`mcp dev mcp_server.py
`})}),`
`,(0,n.jsx)(r.p,{children:"This starts a development server and gives you a local URL (typically on port 6277) to access the inspector in your browser."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./19b987b5529b.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"using-the-inspector-interface",children:"Using the Inspector Interface"}),`
`,(0,n.jsx)(r.p,{children:"The MCP inspector is actively being developed, so the interface may look different when you use it. However, the core functionality remains consistent."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b71855041936.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`After clicking "Connect" to start your MCP server, you'll see a navigation bar with sections for:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Resources"}),`
`,(0,n.jsx)(r.li,{children:"Prompts"}),`
`,(0,n.jsx)(r.li,{children:"Tools"}),`
`,(0,n.jsx)(r.li,{children:"Other server capabilities"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"testing-your-tools",children:"Testing Your Tools"}),`
`,(0,n.jsx)(r.p,{children:`The Tools section is where you'll spend most of your debugging time. Click "List Tools" to see all the tools your server provides.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f52575beb9b6.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["When you select a tool, the right panel shows its details and provides input fields for testing. For example, to test the ",(0,n.jsx)(r.code,{children:"read_doc_contents"})," tool:"]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Select the tool from the list"}),`
`,(0,n.jsx)(r.li,{children:'Enter a document ID (like "deposition.md")'}),`
`,(0,n.jsx)(r.li,{children:'Click "Run Tool"'}),`
`,(0,n.jsx)(r.li,{children:"Check the results for success and expected output"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cb9b3c821130.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"testing-tool-interactions",children:"Testing Tool Interactions"}),`
`,(0,n.jsxs)(r.p,{children:["You can test multiple tools in sequence to verify they work together correctly. For instance, after using the ",(0,n.jsx)(r.code,{children:"edit_document"})," tool to modify content:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./768ecb1a50bb.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["Run the ",(0,n.jsx)(r.code,{children:"read_doc_contents"})," tool again with the same document ID to confirm your changes were applied:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./14cce52c5277.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"development-workflow",children:"Development Workflow"}),`
`,(0,n.jsx)(r.p,{children:"The inspector creates an efficient development loop:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Make changes to your MCP server code"}),`
`,(0,n.jsx)(r.li,{children:"Test individual tools with various inputs"}),`
`,(0,n.jsx)(r.li,{children:"Verify tool interactions work as expected"}),`
`,(0,n.jsx)(r.li,{children:"Debug issues without needing a full application setup"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This browser-based testing environment is essential for MCP server development. It saves time by letting you catch issues early and verify functionality before integrating with Claude or other applications."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};