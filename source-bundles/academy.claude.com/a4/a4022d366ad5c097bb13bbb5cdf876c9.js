import{$f as e,Zf as t}from"../../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{CodeCommand:i,GenericPrompt:o}=r;return i||a("CodeCommand",!0),o||a("GenericPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we have our MCP server working, it's time to build the client side. The client is what allows our application code to communicate with the MCP server and access its functionality."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-client-architecture",children:"Understanding the Client Architecture"}),`
`,(0,n.jsx)(r.p,{children:"In most real-world projects, you'll either implement an MCP client or an MCP server - not both. We're building both in this project just so you can see how they work together."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e05ff8cc824d.png",alt:"Diagram noting that a project normally implements either an MCP client or an MCP server; our project implements both, showing the MCP client inside our server connected to the MCP server"})}),`
`,(0,n.jsx)(r.p,{children:"The MCP client consists of two main components:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"MCP Client"})," - A custom class we create to make using the session easier"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Client Session"})," - The actual connection to the server (part of the MCP Python SDK)"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8496bb45df0f.png",alt:"Diagram of mcp_client.py containing the MCP Client, a custom class we author to make using the session easier, and the Client Session, the actual connection to the MCP server"})}),`
`,(0,n.jsx)(r.p,{children:"The client session requires careful resource management - we need to properly clean up connections when we're done. That's why we wrap it in our own class that handles all the cleanup automatically."}),`
`,(0,n.jsx)(r.h2,{id:"how-the-client-fits-into-our-application",children:"How the Client Fits Into Our Application"}),`
`,(0,n.jsx)(r.p,{children:"Remember our application flow diagram? The client is what enables our code to interact with the MCP server at two key points:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./abd2d482edca.png",alt:"Sequence diagram of the application flow with callouts highlighting where our CLI code uses the client to get a list of tools to pass to Claude and where it uses the client to call a tool"})}),`
`,(0,n.jsx)(r.p,{children:"Our CLI code uses the client to:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Get a list of available tools to send to Claude"}),`
`,(0,n.jsx)(r.li,{children:"Execute tools when Claude requests them"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"implementing-core-client-functions",children:"Implementing Core Client Functions"}),`
`,(0,n.jsxs)(r.p,{children:["We need to implement two essential functions: ",(0,n.jsx)(r.code,{children:"list_tools()"})," and ",(0,n.jsx)(r.code,{children:"call_tool()"}),"."]}),`
`,(0,n.jsx)(r.h3,{id:"list-tools-function",children:"List Tools Function"}),`
`,(0,n.jsx)(r.p,{children:"This function gets all available tools from the MCP server:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def list_tools(self) -> list[types.Tool]:
    result = await self.session().list_tools()
    return result.tools
`})}),`
`,(0,n.jsxs)(r.p,{children:["It's straightforward - we access our session (the connection to the server), call the built-in ",(0,n.jsx)(r.code,{children:"list_tools()"})," method, and return the tools from the result."]}),`
`,(0,n.jsx)(r.h3,{id:"call-tool-function",children:"Call Tool Function"}),`
`,(0,n.jsx)(r.p,{children:"This function executes a specific tool on the server:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def call_tool(
    self, tool_name: str, tool_input: dict
) -> types.CallToolResult | None:
    return await self.session().call_tool(tool_name, tool_input)
`})}),`
`,(0,n.jsx)(r.p,{children:"We pass the tool name and input parameters (provided by Claude) to the server and return the result."}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-client",children:"Testing the Client"}),`
`,(0,n.jsx)(r.p,{children:"The client file includes a simple test harness at the bottom. You can run it directly to verify everything works:"}),`
`,(0,n.jsx)(i,{children:"uv run mcp_client.py"}),`
`,(0,n.jsx)(r.p,{children:"This will connect to your MCP server and print out the available tools. You should see output showing your tool definitions, including descriptions and input schemas."}),`
`,(0,n.jsx)(r.h2,{id:"putting-it-all-together",children:"Putting It All Together"}),`
`,(0,n.jsx)(r.p,{children:"Once the client functions are implemented, you can test the complete flow by running your main application:"}),`
`,(0,n.jsx)(i,{children:"uv run main.py"}),`
`,(0,n.jsx)(r.p,{children:"Try asking:"}),`
`,(0,n.jsx)(o,{children:"What is the contents of the report.pdf document?"}),`
`,(0,n.jsx)(r.p,{children:"Here's what happens behind the scenes:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Your application uses the client to get available tools"}),`
`,(0,n.jsx)(r.li,{children:"These tools are sent to Claude along with your question"}),`
`,(0,n.jsx)(r.li,{children:"Claude decides to use the read_doc_contents tool"}),`
`,(0,n.jsx)(r.li,{children:"Your application uses the client to execute that tool"}),`
`,(0,n.jsx)(r.li,{children:"The result is returned to Claude, who then responds to you"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The client acts as the bridge between your application logic and the MCP server's functionality, making it easy to integrate powerful tools into your AI workflows."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};