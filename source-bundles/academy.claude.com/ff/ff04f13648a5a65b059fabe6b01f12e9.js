import{Gp as e,qp as t}from"../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building MCP servers, you need a way to test your functionality without connecting to a full application. The Python MCP SDK includes a built-in browser-based inspector that lets you debug and test your server in real-time."}),`
`,(0,n.jsx)(r.h2,{id:"starting-the-inspector",children:"Starting the Inspector"}),`
`,(0,n.jsx)(r.p,{children:"First, make sure your Python environment is activated (check your project's README for the exact command). Then run the inspector with:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`mcp dev mcp_server.py
`})}),`
`,(0,n.jsx)(r.p,{children:"This starts a development server and gives you a local URL (typically on port 6277) to access the inspector in your browser."}),`
`,(0,n.jsx)(r.h2,{id:"using-the-inspector-interface",children:"Using the Inspector Interface"}),`
`,(0,n.jsx)(r.p,{children:"The MCP inspector is actively being developed, so the interface may look different by the time you use it. However, the core functionality remains consistent."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b71855041936.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`When you first open the inspector, you'll see a "Connect" button on the left side. Click this to start your MCP server and load your tools.`}),`
`,(0,n.jsx)(r.h2,{id:"testing-your-tools",children:"Testing Your Tools"}),`
`,(0,n.jsx)(r.p,{children:"Once connected, look for a navigation bar with sections like Resources, Prompts, and Tools. Click on the Tools section to see your available tools."}),`
`,(0,n.jsx)(r.p,{children:'Click "List Tools" to see all the tools your server provides. When you select a specific tool, the right panel updates to show a form where you can test that tool.'}),`
`,(0,n.jsx)(r.h2,{id:"running-tool-tests",children:"Running Tool Tests"}),`
`,(0,n.jsx)(r.p,{children:"For example, to test a document reading tool:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Select the ",(0,n.jsx)(r.code,{children:"read_doc_contents"})," tool"]}),`
`,(0,n.jsx)(r.li,{children:'Enter a document ID (like "deposition.md")'}),`
`,(0,n.jsx)(r.li,{children:'Click "Run Tool"'}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The inspector will execute your tool and show the results, including success status and any returned data."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./14cce52c5277.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"testing-document-editing",children:"Testing Document Editing"}),`
`,(0,n.jsx)(r.p,{children:"You can also test more complex tools like document editing:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Switch to the ",(0,n.jsx)(r.code,{children:"edit_document"})," tool"]}),`
`,(0,n.jsx)(r.li,{children:"Fill in the document ID, old text to replace, and new text"}),`
`,(0,n.jsx)(r.li,{children:"Run the tool to see if it succeeds"}),`
`,(0,n.jsx)(r.li,{children:"Use the read tool again to verify the changes were applied"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./768ecb1a50bb.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"development-workflow",children:"Development Workflow"}),`
`,(0,n.jsx)(r.p,{children:"The inspector shows a history of your tool calls on the left side, making it easy to track what you've tested and repeat previous operations. This creates an efficient development loop where you can:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Make changes to your server code"}),`
`,(0,n.jsx)(r.li,{children:"Restart the inspector"}),`
`,(0,n.jsx)(r.li,{children:"Test your tools immediately"}),`
`,(0,n.jsx)(r.li,{children:"Verify the results"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This inspector tool becomes essential as you build more complex MCP servers. It eliminates the need to wire up your server to a full application just to test basic functionality, making development much faster and more reliable."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};