import{Gp as e,qp as t}from"../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building MCP servers, you need a way to test your functionality without connecting to a full application. The Python MCP SDK includes a built-in browser-based inspector that lets you debug and test your server in real-time."}),`
`,(0,n.jsx)(r.h2,{id:"starting-the-inspector",children:"Starting the Inspector"}),`
`,(0,n.jsx)(r.p,{children:"First, make sure your Python environment is activated (check your project's README for the exact command). Then run the inspector with:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`mcp dev mcp_server.py
`})}),`
`,(0,n.jsx)(r.p,{children:"This starts a development server on port 6277 and gives you a local URL to open in your browser. The inspector interface will load, showing the MCP Inspector dashboard."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d5c53f9c2155.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"important-note-about-the-interface",children:"Important Note About the Interface"}),`
`,(0,n.jsx)(r.p,{children:"The MCP inspector is actively being developed, so the interface you see might look different from current screenshots. However, the core functionality for testing tools, resources, and prompts should remain similar."}),`
`,(0,n.jsx)(r.h2,{id:"connecting-and-testing-tools",children:"Connecting and Testing Tools"}),`
`,(0,n.jsx)(r.p,{children:`Click the "Connect" button on the left side to start your MCP server. Once connected, you'll see a navigation bar with sections for Resources, Prompts, Tools, and other features.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2bd396b5d755.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"To test your tools:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Navigate to the Tools section"}),`
`,(0,n.jsx)(r.li,{children:'Click "List Tools" to see all available tools'}),`
`,(0,n.jsx)(r.li,{children:"Select a tool to open its testing interface"}),`
`,(0,n.jsx)(r.li,{children:"Fill in the required parameters"}),`
`,(0,n.jsx)(r.li,{children:'Click "Run Tool" to execute and see results'}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./48c68f10cf28.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"testing-document-operations",children:"Testing Document Operations"}),`
`,(0,n.jsx)(r.p,{children:`For example, to test a document reading tool, you'd enter a document ID (like "deposition.md") and run the tool. The inspector shows the result, including any returned content or success messages.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a0a63118f39b.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"You can chain operations to verify functionality. For instance, after editing a document by replacing text, you can immediately run the read tool again to confirm the changes were applied correctly."}),`
`,(0,n.jsx)(r.h2,{id:"development-workflow",children:"Development Workflow"}),`
`,(0,n.jsx)(r.p,{children:"The inspector creates an efficient development loop:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Make changes to your MCP server code"}),`
`,(0,n.jsx)(r.li,{children:"Test individual tools through the inspector"}),`
`,(0,n.jsx)(r.li,{children:"Verify results without needing a full application setup"}),`
`,(0,n.jsx)(r.li,{children:"Debug issues in isolation"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This tool becomes essential as you build more complex MCP servers. It eliminates the need to wire up your server to Claude or another application just to test basic functionality, making development much faster and more focused."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};