import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Resources in MCP allow your server to expose data that can be directly included in prompts, rather than requiring tool calls to access information. This creates a more efficient way to provide context to AI models like Claude."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f2baa6225bba.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-resource-flow",children:"Understanding the Resource Flow"}),`
`,(0,n.jsx)(r.p,{children:`When a user types something like "What's in the @..." in your application, the system needs to fetch a list of available resources for autocomplete. The MCP client sends a ReadResourceRequest to the server, which responds with a list of document names that can be referenced.`}),`
`,(0,n.jsx)(r.h2,{id:"implementing-resource-reading",children:"Implementing Resource Reading"}),`
`,(0,n.jsxs)(r.p,{children:["The core functionality happens in the ",(0,n.jsx)(r.code,{children:"read_resource"})," method of your MCP client. This method takes a URI parameter that identifies which resource to fetch from the server."]}),`
`,(0,n.jsx)(r.p,{children:"First, add the necessary imports to handle JSON parsing and URL validation:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import json
from pydantic import AnyUrl
`})}),`
`,(0,n.jsx)(r.p,{children:"The main implementation makes a request to the MCP server and processes the response:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def read_resource(self, uri: str) -> Any:
    result = await self.session().read_resource(AnyUrl(uri))
    resource = result.contents[0]
`})}),`
`,(0,n.jsx)(r.h2,{id:"handling-different-content-types",children:"Handling Different Content Types"}),`
`,(0,n.jsx)(r.p,{children:"Resources can return different types of content, so you need to check the MIME type to handle the response appropriately:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`if isinstance(resource, types.TextResourceContents):
    if resource.mimeType == "application/json":
        return json.loads(resource.text)
    
return resource.text
`})}),`
`,(0,n.jsx)(r.p,{children:"This approach ensures that JSON resources are properly parsed, while plain text resources are returned as-is."}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-implementation",children:"Testing the Implementation"}),`
`,(0,n.jsx)(r.p,{children:'Once implemented, you can test the resource functionality by running your CLI application. When you type "@" followed by a resource name, the system will:'}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Show available resources in an autocomplete list"}),`
`,(0,n.jsx)(r.li,{children:"Allow you to select a resource using arrow keys and space"}),`
`,(0,n.jsx)(r.li,{children:"Include the resource content directly in the prompt sent to Claude"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This means Claude receives the document content immediately without needing to make additional tool calls, making the interaction much more efficient."}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits",children:"Key Benefits"}),`
`,(0,n.jsx)(r.p,{children:"Resources provide several advantages over tools for accessing static information:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Content is included directly in prompts, reducing latency"}),`
`,(0,n.jsx)(r.li,{children:"No additional API calls needed during conversation"}),`
`,(0,n.jsx)(r.li,{children:"Better user experience with autocomplete functionality"}),`
`,(0,n.jsx)(r.li,{children:"Cleaner separation between static data and dynamic operations"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Resources work best for relatively static information that you want to make easily accessible to AI models, such as documentation, reports, or reference materials."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};