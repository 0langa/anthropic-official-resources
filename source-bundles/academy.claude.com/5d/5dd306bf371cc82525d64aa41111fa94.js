import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Resources in MCP allow your server to expose data that can be directly included in prompts, rather than requiring tool calls to access information. This creates a more efficient way to provide context to AI models like Claude."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-resource-requests",children:"Understanding Resource Requests"}),`
`,(0,n.jsx)(r.p,{children:"When you've defined resources on your MCP server, your client needs a way to request and use them. The client acts as a bridge between your application and the MCP server, handling the communication and data parsing automatically."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4507294b3bff.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'The flow is straightforward: when a user wants to reference a document (like typing "@report.pdf"), your application uses the MCP client to fetch that resource from the server and include its contents directly in the prompt sent to Claude.'}),`
`,(0,n.jsx)(r.h2,{id:"implementing-resource-reading",children:"Implementing Resource Reading"}),`
`,(0,n.jsxs)(r.p,{children:["The core functionality requires a ",(0,n.jsx)(r.code,{children:"read_resource"})," function in your MCP client. This function takes a URI parameter identifying which resource to fetch:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def read_resource(self, uri: str) -> Any:
    result = await self.session().read_resource(AnyUrl(uri))
    resource = result.contents[0]
`})}),`
`,(0,n.jsxs)(r.p,{children:["The response from the MCP server contains a ",(0,n.jsx)(r.code,{children:"contents"})," list. You typically only need the first element, which contains the actual resource data along with metadata like the MIME type."]}),`
`,(0,n.jsx)(r.h2,{id:"handling-different-content-types",children:"Handling Different Content Types"}),`
`,(0,n.jsx)(r.p,{children:"Resources can return different types of content, so your client needs to parse them appropriately. The MIME type tells you how to handle the data:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`if isinstance(resource, types.TextResourceContents):
    if resource.mimeType == "application/json":
        return json.loads(resource.text)
    
    return resource.text
`})}),`
`,(0,n.jsx)(r.p,{children:"This approach ensures that JSON resources are properly parsed into Python objects, while plain text resources are returned as strings. The MIME type acts as your hint for determining the correct parsing strategy."}),`
`,(0,n.jsx)(r.h2,{id:"required-imports",children:"Required Imports"}),`
`,(0,n.jsx)(r.p,{children:"To make this work properly, you'll need these imports in your MCP client:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import json
from pydantic import AnyUrl
`})}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"json"})," module handles parsing JSON responses, while ",(0,n.jsx)(r.code,{children:"AnyUrl"})," ensures proper type handling for the URI parameter."]}),`
`,(0,n.jsx)(r.h2,{id:"testing-resource-access",children:"Testing Resource Access"}),`
`,(0,n.jsx)(r.p,{children:`Once implemented, you can test the functionality through your CLI application. When you type something like "What's in the @report.pdf document?", the system should:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Show available resources in an autocomplete list"}),`
`,(0,n.jsx)(r.li,{children:"Allow you to select a resource"}),`
`,(0,n.jsx)(r.li,{children:"Fetch the resource content automatically"}),`
`,(0,n.jsx)(r.li,{children:"Include that content in the prompt to Claude"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ea5414c511b1.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The key advantage is that Claude receives the document content directly in the prompt, eliminating the need for tool calls to access the information. This makes interactions faster and more efficient."}),`
`,(0,n.jsx)(r.h2,{id:"integration-with-your-application",children:"Integration with Your Application"}),`
`,(0,n.jsxs)(r.p,{children:["Remember that the MCP client code you write gets used by other parts of your application. The ",(0,n.jsx)(r.code,{children:"read_resource"})," function becomes a building block that other components can call to fetch document contents, list available resources, or integrate resource data into prompts."]}),`
`,(0,n.jsx)(r.p,{children:"This separation of concerns keeps your code clean: the MCP client handles communication with the server, while your application logic focuses on how to use that data effectively."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};