import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we have our MCP server working, it's time to build the client side. The client is what allows our application to communicate with the MCP server and access its functionality."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-client-architecture",children:"Understanding the Client Architecture"}),`
`,(0,n.jsx)(r.p,{children:"Before diving into the code, let's clarify an important point about MCP projects. Normally, you'd implement either an MCP client or an MCP server - not both. We're building both in this project just so you can see how they work together."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e94731a8dca4.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The MCP client consists of two main components working together:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cc4caa2d0617.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"MCP Client"})," - A custom class we create to make using the session easier"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Client Session"})," - The actual connection to the server (part of the MCP Python SDK)"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The client session handles the low-level communication but requires careful resource cleanup when your program shuts down. That's why we wrap it in our own class - to manage that cleanup automatically."}),`
`,(0,n.jsx)(r.h2,{id:"how-the-client-fits-into-our-application",children:"How the Client Fits Into Our Application"}),`
`,(0,n.jsx)(r.p,{children:"Remember our application flow diagram? The client plays a crucial role in two key moments:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a2e0ebe2d4d1.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Our CLI code uses the client to:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Get a list of available tools to send to Claude"}),`
`,(0,n.jsx)(r.li,{children:"Execute tools when Claude requests them"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"implementing-core-client-functions",children:"Implementing Core Client Functions"}),`
`,(0,n.jsxs)(r.p,{children:["Let's implement the two essential functions: ",(0,n.jsx)(r.code,{children:"list_tools"})," and ",(0,n.jsx)(r.code,{children:"call_tool"}),"."]}),`
`,(0,n.jsxs)(r.p,{children:["For ",(0,n.jsx)(r.code,{children:"list_tools"}),", we need to connect to our session and request the available tools:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def list_tools(self) -> list[types.Tool]:
    result = await self.session().list_tools()
    return result.tools
`})}),`
`,(0,n.jsxs)(r.p,{children:["For ",(0,n.jsx)(r.code,{children:"call_tool"}),", we pass the tool name and input parameters to the server:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def call_tool(
    self, tool_name: str, tool_input: dict
) -> types.CallToolResult | None:
    return await self.session().call_tool(tool_name, tool_input)
`})}),`
`,(0,n.jsx)(r.p,{children:"That's it! The session handles all the complex communication details for us."}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-client",children:"Testing the Client"}),`
`,(0,n.jsx)(r.p,{children:"The client file includes a simple test harness at the bottom. You can run it directly to verify everything works:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`uv run mcp_client.py
`})}),`
`,(0,n.jsx)(r.p,{children:"This will connect to your MCP server and print out the available tools. You should see output showing your tool definitions, including names, descriptions, and input schemas."}),`
`,(0,n.jsx)(r.h2,{id:"important-schema-differences",children:"Important Schema Differences"}),`
`,(0,n.jsx)(r.p,{children:"Here's a gotcha you need to know about: MCP tool definitions don't exactly match what Claude expects. The MCP spec has its own format for tool schemas, which is slightly different from what Bedrock requires."}),`
`,(0,n.jsxs)(r.p,{children:["Don't worry - there's already code in the project that handles this conversion automatically. The ",(0,n.jsx)(r.code,{children:"to_bedrock_tools"})," function in ",(0,n.jsx)(r.code,{children:"core/bedrock.py"})," translates MCP tool definitions into the format Claude understands."]}),`
`,(0,n.jsx)(r.h2,{id:"testing-with-claude",children:"Testing with Claude"}),`
`,(0,n.jsx)(r.p,{children:"Now that both the server and client are working, you can test the complete flow. Try running your main application and asking Claude to read a document:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`uv run main.py
`})}),`
`,(0,n.jsx)(r.p,{children:'Then ask: "What is the contents of the report.pdf document?"'}),`
`,(0,n.jsx)(r.p,{children:"Claude will:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Receive the list of available tools from your client"}),`
`,(0,n.jsx)(r.li,{children:"Decide to use the read_doc_contents tool"}),`
`,(0,n.jsx)(r.li,{children:"Your client will execute that tool on the MCP server"}),`
`,(0,n.jsx)(r.li,{children:"Claude will receive the document contents and respond"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The client acts as the bridge between your application code and the MCP server, making it easy to expose server functionality to Claude and other parts of your system."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};