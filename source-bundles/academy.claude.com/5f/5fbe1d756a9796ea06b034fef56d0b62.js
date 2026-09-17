import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we have our MCP server working, it's time to build the client side. The client is what allows our application to communicate with the MCP server and access its functionality."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-client-architecture",children:"Understanding the Client Architecture"}),`
`,(0,n.jsx)(r.p,{children:"Before diving into the code, let's clarify an important point about MCP projects. Normally, you'd implement either an MCP client or an MCP server - not both. We're building both in this project just so you can see how they work together."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e05ff8cc824d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The MCP client consists of two main components:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"MCP Client"})," - A custom class we create to make using the session easier"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Client Session"})," - The actual connection to the server (part of the MCP Python SDK)"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8496bb45df0f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The client session requires resource cleanup when we're done with it, which is why we wrap it in our custom class. This handles connection management and cleanup automatically."}),`
`,(0,n.jsx)(r.h2,{id:"how-the-client-fits-into-our-application",children:"How the Client Fits Into Our Application"}),`
`,(0,n.jsx)(r.p,{children:"Remember our application flow? Our CLI code needs to interact with Claude in two key ways:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./abd2d482edca.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The client enables both of these interactions by exposing the server's functionality to our codebase."}),`
`,(0,n.jsx)(r.h2,{id:"implementing-core-client-functions",children:"Implementing Core Client Functions"}),`
`,(0,n.jsxs)(r.p,{children:["We need to implement two essential functions: ",(0,n.jsx)(r.code,{children:"list_tools"})," and ",(0,n.jsx)(r.code,{children:"call_tool"}),"."]}),`
`,(0,n.jsx)(r.h3,{id:"list-tools-function",children:"List Tools Function"}),`
`,(0,n.jsx)(r.p,{children:"This function gets all available tools from the server:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def list_tools(self) -> list[types.Tool]:
    result = await self.session().list_tools()
    return result.tools
`})}),`
`,(0,n.jsxs)(r.p,{children:["It's straightforward - we access our session (the connection to the MCP server), call the built-in ",(0,n.jsx)(r.code,{children:"list_tools"})," function, and return the tools from the result."]}),`
`,(0,n.jsx)(r.h3,{id:"call-tool-function",children:"Call Tool Function"}),`
`,(0,n.jsx)(r.p,{children:"This function executes a specific tool on the server:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def call_tool(
    self, tool_name: str, tool_input: dict
) -> types.CallToolResult | None:
    return await self.session().call_tool(tool_name, tool_input)
`})}),`
`,(0,n.jsx)(r.p,{children:"We pass the tool name and input parameters (provided by Claude) to the server and return the result."}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-client",children:"Testing the Client"}),`
`,(0,n.jsx)(r.p,{children:"To verify our implementation works, we can test it directly. The client file includes a testing harness that connects to the MCP server and runs commands against it."}),`
`,(0,n.jsxs)(r.p,{children:["Running ",(0,n.jsx)(r.code,{children:"uv run mcp_client.py"})," should return a list of available tools with their descriptions and input schemas. You should see tools like ",(0,n.jsx)(r.code,{children:"read_doc_contents"})," and ",(0,n.jsx)(r.code,{children:"edit_document"})," that we defined in our server."]}),`
`,(0,n.jsx)(r.h2,{id:"end-to-end-testing",children:"End-to-End Testing"}),`
`,(0,n.jsx)(r.p,{children:'Now that both the client and server are working, we can test the complete flow. Running our main application and asking Claude "What is the contents of the report.pdf document?" should:'}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Send the list of available tools to Claude"}),`
`,(0,n.jsxs)(r.li,{children:["Claude decides to use the ",(0,n.jsx)(r.code,{children:"read_doc_contents"})," tool"]}),`
`,(0,n.jsx)(r.li,{children:"Our client calls the tool on the server"}),`
`,(0,n.jsx)(r.li,{children:"The server returns the document contents"}),`
`,(0,n.jsx)(r.li,{children:"Claude responds with the information"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The client acts as the bridge between your application code and the MCP server, making it easy to access server functionality without dealing with the low-level connection details directly."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};