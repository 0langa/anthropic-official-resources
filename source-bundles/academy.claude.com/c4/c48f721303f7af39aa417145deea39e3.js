import{Qp as e,em as t}from"../../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Resources in MCP allow your server to expose information that can be directly included in prompts, rather than requiring tool calls to access data. This creates a more efficient way to provide context to AI models."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f2baa6225bba.png",alt:`Sequence diagram of resource access: a user types "What's in the @..." in the CLI, our code sends a ReadResourceRequest to the MCP server, and the server returns a ReadResourceResult containing the resource content`})}),`
`,(0,n.jsx)(r.p,{children:`The diagram above shows how resources work: when a user types something like "What's in the @..." our code recognizes this as a resource request, sends a ReadResourceRequest to the MCP server, and gets back a ReadResourceResult with the actual content.`}),`
`,(0,n.jsx)(r.h2,{id:"implementing-resource-reading",children:"Implementing Resource Reading"}),`
`,(0,n.jsxs)(r.p,{children:["To enable resource access in your MCP client, you need to implement a ",(0,n.jsx)(r.code,{children:"read_resource"})," function. First, add the necessary imports:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import json
from pydantic import AnyUrl
`})}),`
`,(0,n.jsx)(r.p,{children:"The core function makes a request to the MCP server and processes the response based on its MIME type:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`async def read_resource(self, uri: str) -> Any:
    result = await self.session().read_resource(AnyUrl(uri))
    resource = result.contents[0]

    if isinstance(resource, types.TextResourceContents):
        if resource.mimeType == "application/json":
            return json.loads(resource.text)

    return resource.text
`})}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-response-structure",children:"Understanding the Response Structure"}),`
`,(0,n.jsxs)(r.p,{children:["When you request a resource, the server returns a result with a ",(0,n.jsx)(r.code,{children:"contents"})," list. We access the first element since we typically only need one resource at a time. The response includes:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The actual content (text or data)"}),`
`,(0,n.jsx)(r.li,{children:"A MIME type that tells us how to parse the content"}),`
`,(0,n.jsx)(r.li,{children:"Other metadata about the resource"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"content-type-handling",children:"Content Type Handling"}),`
`,(0,n.jsx)(r.p,{children:"The function checks the MIME type to determine how to process the content:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["If it's ",(0,n.jsx)(r.code,{children:"application/json"}),", parse the text as JSON and return the parsed object"]}),`
`,(0,n.jsx)(r.li,{children:"Otherwise, return the raw text content"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This approach handles both structured data (like JSON) and plain text documents seamlessly."}),`
`,(0,n.jsx)(r.h2,{id:"testing-resource-access",children:"Testing Resource Access"}),`
`,(0,n.jsx)(r.p,{children:'Once implemented, you can test the resource functionality through your CLI application. When you type "@" followed by a resource name, the system will:'}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Show available resources in an autocomplete list"}),`
`,(0,n.jsx)(r.li,{children:"Let you select a resource using arrow keys and space"}),`
`,(0,n.jsx)(r.li,{children:"Include the resource content directly in your prompt"}),`
`,(0,n.jsx)(r.li,{children:"Send everything to the AI model without requiring additional tool calls"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This creates a much smoother user experience compared to having the AI model make separate tool calls to access document contents. The resource content becomes part of the initial context, allowing for immediate responses about the data."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};