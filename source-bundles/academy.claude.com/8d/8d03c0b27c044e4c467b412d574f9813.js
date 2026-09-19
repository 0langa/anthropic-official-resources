import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Resources in MCP allow your server to expose data that can be directly included in prompts, rather than requiring tool calls to access information. This creates a more efficient way to provide context to AI models like Claude."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-resource-flow",children:"Understanding the Resource Flow"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f2baa6225bba.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When a user wants to access resource content, the flow works like this:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'User requests information about a resource (like "@report.pdf")'}),`
`,(0,n.jsx)(r.li,{children:"Your code needs a list of document names for autocomplete"}),`
`,(0,n.jsx)(r.li,{children:"MCP Client sends a ReadResourceRequest to the MCP Server"}),`
`,(0,n.jsx)(r.li,{children:"Server responds with a ReadResourceResult containing the resource data"}),`
`,(0,n.jsx)(r.li,{children:"Your code can then put this data directly into prompts"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"implementing-resource-reading",children:"Implementing Resource Reading"}),`
`,(0,n.jsxs)(r.p,{children:["To read resources from your MCP client, you'll need to implement a ",(0,n.jsx)(r.code,{children:"read_resource"})," function. First, add the necessary imports:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import json
from pydantic import AnyUrl
`})}),`
`,(0,n.jsx)(r.p,{children:"The core function makes a request to your MCP session and processes the response:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def read_resource(self, uri: str) -> Any:
    result = await self.session().read_resource(AnyUrl(uri))
    resource = result.contents[0]
`})}),`
`,(0,n.jsx)(r.h2,{id:"handling-different-resource-types",children:"Handling Different Resource Types"}),`
`,(0,n.jsx)(r.p,{children:"Resources can return different types of content, so you need to check the MIME type and parse accordingly:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`if isinstance(resource, types.TextResourceContents):
    if resource.mimeType == "application/json":
        return json.loads(resource.text)
    
    return resource.text
`})}),`
`,(0,n.jsx)(r.p,{children:"This approach handles two main scenarios:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"JSON resources that need parsing"}),`
`,(0,n.jsx)(r.li,{children:"Plain text resources that can be returned as-is"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"testing-resource-access",children:"Testing Resource Access"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f17435118f01.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'You can verify your resource implementation works by testing it in your application. When you type "@" followed by a resource name, you should see an autocomplete list of available resources. Selecting one will include its contents directly in your prompt.'}),`
`,(0,n.jsx)(r.p,{children:"The key advantage of this approach is efficiency - Claude receives the document content immediately without needing to make additional tool calls to access the information."}),`
`,(0,n.jsx)(r.h2,{id:"resource-vs-tool-usage",children:"Resource vs Tool Usage"}),`
`,(0,n.jsx)(r.p,{children:"Resources are particularly useful when:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You have static or semi-static content that's frequently referenced"}),`
`,(0,n.jsx)(r.li,{children:"You want to reduce the number of API calls"}),`
`,(0,n.jsx)(r.li,{children:"The content should be immediately available in the prompt context"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This differs from tools, which are better for dynamic operations or when you need the AI to decide whether to access certain information based on the conversation context."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};