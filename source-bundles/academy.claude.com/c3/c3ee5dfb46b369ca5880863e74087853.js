import{n as e,r as t}from"../../../../../react-n2kbymz5.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{CodeCommand:i,Video:o}=r;return i||a("CodeCommand",!0),o||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{youtubeId:"rob9Wi4kyoQ",title:"The server inspector"}),`
`,(0,n.jsx)(r.p,{children:"When building MCP servers, you need a way to test your functionality without connecting to a full application. The Python MCP SDK includes a built-in browser-based inspector that lets you debug and test your server in real-time."}),`
`,(0,n.jsx)(r.h2,{id:"starting-the-inspector",children:"Starting the Inspector"}),`
`,(0,n.jsx)(r.p,{children:"First, make sure your Python environment is activated (check your project's README for the exact command). The inspector also needs Node.js 22.19 or later. Then run the inspector with:"}),`
`,(0,n.jsx)(i,{children:"mcp dev mcp_server.py"}),`
`,(0,n.jsxs)(r.p,{children:["This starts the MCP Inspector and prints a local URL that starts with ",(0,n.jsx)(r.code,{children:"http://127.0.0.1:6274"}),". If it doesn't open on its own, copy the full URL into your browser."]}),`
`,(0,n.jsx)(r.h2,{id:"using-the-inspector-interface",children:"Using the Inspector Interface"}),`
`,(0,n.jsx)(r.p,{children:"These steps follow version 2 of the inspector. The video and the picture below show version 1, which looks different. Look for these key elements:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A switch on your server's card, which connects to the server"}),`
`,(0,n.jsxs)(r.li,{children:["Tabs for ",(0,n.jsx)(r.strong,{children:"Tools"}),", ",(0,n.jsx)(r.strong,{children:"Prompts"}),", and ",(0,n.jsx)(r.strong,{children:"Resources"}),", which appear once you're connected"]}),`
`,(0,n.jsx)(r.li,{children:"A tools listing and testing panel"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Turn on the switch first to start your server. You'll see its status change from "Disconnected" to "Connected".`}),`
`,(0,n.jsx)(r.h2,{id:"testing-your-tools",children:"Testing Your Tools"}),`
`,(0,n.jsxs)(r.p,{children:["Open the ",(0,n.jsx)(r.strong,{children:"Tools"})," tab to see all available tools from your server. When you select a tool, you see its details and input fields."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cb9b3c821130.png",alt:"MCP Inspector with the Tools tab open, showing the read_doc_contents and edit_document tools listed and the read_doc_contents panel with a doc_id input field and Run Tool button"})}),`
`,(0,n.jsx)(r.p,{children:"For example, to test a document reading tool:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Select the ",(0,n.jsx)(r.code,{children:"read_doc_contents"})," tool"]}),`
`,(0,n.jsx)(r.li,{children:'Enter a document ID (like "deposition.md")'}),`
`,(0,n.jsxs)(r.li,{children:["Click ",(0,n.jsx)(r.strong,{children:"Execute Tool"})]}),`
`,(0,n.jsx)(r.li,{children:"Check the results for success and expected output"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The inspector shows both the success status and the actual returned data, making it easy to verify your tool works correctly."}),`
`,(0,n.jsx)(r.h2,{id:"testing-tool-interactions",children:"Testing Tool Interactions"}),`
`,(0,n.jsx)(r.p,{children:"You can test multiple tools in sequence to verify complex workflows. For instance, after using an edit tool to modify a document, immediately test the read tool to confirm the changes were applied correctly."}),`
`,(0,n.jsx)(r.p,{children:"The inspector maintains your server state between tool calls, so edits persist and you can verify the complete functionality of your MCP server."}),`
`,(0,n.jsx)(r.h2,{id:"development-workflow",children:"Development Workflow"}),`
`,(0,n.jsx)(r.p,{children:"The MCP Inspector becomes an essential part of your development process. Instead of writing separate test scripts or connecting to full applications, you can:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Quickly iterate on tool implementations"}),`
`,(0,n.jsx)(r.li,{children:"Test edge cases and error conditions"}),`
`,(0,n.jsx)(r.li,{children:"Verify tool interactions and state management"}),`
`,(0,n.jsx)(r.li,{children:"Debug issues in real-time"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This immediate feedback loop makes MCP server development much more efficient and helps catch issues early in the development process."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}i.uses=["CodeCommand","Video"];export{i as default};