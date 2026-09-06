import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we have our MCP server working, it's time to build the client side. The client is what allows our application to communicate with the MCP server and access its functionality."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-client-architecture",children:"Understanding the Client Architecture"}),`
`,(0,n.jsx)(r.p,{children:"In most real-world projects, you'll either implement an MCP client OR an MCP server - not both. We're building both in this project just so you can see how they work together."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2cfccb3be653.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The MCP client consists of two main components:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"MCP Client"})," - A custom class we create to make using the session easier"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Client Session"})," - The actual connection to the server (part of the MCP Python SDK)"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4b895d6d4b84.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The client session requires proper resource cleanup when we're done with it. That's why we wrap it in our custom MCP Client class - to handle all that cleanup automatically."}),`
`,(0,n.jsx)(r.h2,{id:"how-the-client-fits-into-our-application",children:"How the Client Fits Into Our Application"}),`
`,(0,n.jsx)(r.p,{children:"Remember our application flow? Our CLI code needs to do two main things with the MCP server:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./158467ac1d84.jpg",alt:""})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Get a list of available tools to send to Claude"}),`
`,(0,n.jsx)(r.li,{children:"Execute tools when Claude requests them"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The MCP client provides these capabilities through simple method calls that our application code can use."}),`
`,(0,n.jsx)(r.h2,{id:"implementing-the-core-methods",children:"Implementing the Core Methods"}),`
`,(0,n.jsxs)(r.p,{children:["We need to implement two key methods in our client: ",(0,n.jsx)(r.code,{children:"list_tools()"})," and ",(0,n.jsx)(r.code,{children:"call_tool()"}),"."]}),`
`,(0,n.jsx)(r.h3,{id:"list-tools-method",children:"List Tools Method"}),`
`,(0,n.jsx)(r.p,{children:"This method gets all available tools from the server:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def list_tools(self) -> list[types.Tool]:
    result = await self.session().list_tools()
    return result.tools
`})}),`
`,(0,n.jsxs)(r.p,{children:["It's straightforward - we access our session (the connection to the server), call the built-in ",(0,n.jsx)(r.code,{children:"list_tools()"})," function, and return the tools from the result."]}),`
`,(0,n.jsx)(r.h3,{id:"call-tool-method",children:"Call Tool Method"}),`
`,(0,n.jsx)(r.p,{children:"This method executes a specific tool on the server:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def call_tool(
    self, tool_name: str, tool_input: dict
) -> types.CallToolResult | None:
    return await self.session().call_tool(tool_name, tool_input)
`})}),`
`,(0,n.jsx)(r.p,{children:"We pass the tool name and input parameters (provided by Claude) to the server and return the result."}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-client",children:"Testing the Client"}),`
`,(0,n.jsx)(r.p,{children:"To test our implementation, we can run the client directly. The file includes a testing harness that connects to our MCP server and calls our methods:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async with MCPClient(
    command="uv", args=["run", "mcp_server.py"]
) as client:
    result = await client.list_tools()
    print(result)
`})}),`
`,(0,n.jsxs)(r.p,{children:["When we run this test, we should see our tool definitions printed out, including the ",(0,n.jsx)(r.code,{children:"read_doc_contents"})," and ",(0,n.jsx)(r.code,{children:"edit_document"})," tools we created earlier."]}),`
`,(0,n.jsx)(r.h2,{id:"putting-it-all-together",children:"Putting It All Together"}),`
`,(0,n.jsx)(r.p,{children:"Now that our client can list tools and call them, we can test the complete flow. When we run our main application and ask Claude about a document:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Our code uses the client to get available tools"}),`
`,(0,n.jsx)(r.li,{children:"These tools are sent to Claude along with the user's question"}),`
`,(0,n.jsxs)(r.li,{children:["Claude decides to use the ",(0,n.jsx)(r.code,{children:"read_doc_contents"})," tool"]}),`
`,(0,n.jsx)(r.li,{children:"Our code uses the client to execute that tool"}),`
`,(0,n.jsx)(r.li,{children:"The result is sent back to Claude, who then responds to the user"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`For example, asking "What is the contents of the report.pdf document?" will trigger Claude to use our document reading tool, and we'll get back information about the 20m condenser tower document we set up in our server.`}),`
`,(0,n.jsx)(r.p,{children:"The client acts as the bridge between our application logic and the MCP server, making it easy to access server functionality without worrying about the underlying connection details."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};