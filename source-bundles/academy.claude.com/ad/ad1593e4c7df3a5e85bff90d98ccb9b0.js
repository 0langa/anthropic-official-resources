import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Resources in MCP servers allow you to expose data to clients, similar to GET request handlers in a typical HTTP server. They're perfect for scenarios where you need to fetch information rather than perform actions."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-resources",children:"Understanding Resources"}),`
`,(0,n.jsx)(r.p,{children:"Think of resources as read-only endpoints that can return any type of data - strings, JSON, binary files, etc. You set a 'mime_type' to give the client a hint about what kind of data you're returning."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./bef714547cc3.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Resources work by defining a URI (like a URL) that clients can request. When a client needs data, it sends a ReadResourceRequest with the specific URI, and your server responds with a ReadResourceResult containing the data."}),`
`,(0,n.jsx)(r.h2,{id:"two-types-of-resources",children:"Two Types of Resources"}),`
`,(0,n.jsx)(r.p,{children:"There are two main types of resources you can create:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Direct Resources"}),` - Have static URIs that don't contain any parameters (like "docs://documents")`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Templated Resources"}),' - Include parameters in their URIs that get parsed and passed to your function (like "docs://documents/{doc_id}")']}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7fa0c5f6bafc.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For templated resources, the Python SDK automatically parses parameters from the URI and passes them as keyword arguments to your function. The parameter names in the URI must match your function's parameter names exactly."}),`
`,(0,n.jsx)(r.h2,{id:"creating-resources",children:"Creating Resources"}),`
`,(0,n.jsx)(r.p,{children:"Here's how to implement both types of resources:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.resource(
    "docs://documents",
    mime_type="application/json"
)
def list_docs() -> list[str]:
    return list(docs.keys())

@mcp.resource(
    "docs://documents/{doc_id}",
    mime_type="text/plain"
)
def fetch_doc(doc_id: str) -> str:
    if doc_id not in docs:
        raise ValueError(f"Doc with id {doc_id} not found")
    return docs[doc_id]
`})}),`
`,(0,n.jsx)(r.p,{children:"The MCP Python SDK automatically serializes whatever you return. You don't need to manually convert data to JSON strings - just return Python objects and the SDK handles the conversion."}),`
`,(0,n.jsx)(r.h2,{id:"testing-your-resources",children:"Testing Your Resources"}),`
`,(0,n.jsx)(r.p,{children:"You can test resources using the MCP Inspector. Start your server with:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"uv run mcp dev mcp_server.py"})}),`
`,(0,n.jsx)(r.p,{children:"Then connect to the inspector in your browser. You'll see two sections:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Resources"})," - Lists your direct/static resources"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Resource Templates"})," - Shows your templated resources"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./aaba6fbd4b95.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Click on any resource to test it. For templated resources, you'll need to provide values for the parameters. The inspector shows you the exact response structure your client will receive, including the mime type and serialized data."}),`
`,(0,n.jsx)(r.h2,{id:"practical-use-cases",children:"Practical Use Cases"}),`
`,(0,n.jsx)(r.p,{children:'Resources are ideal for implementing features like document mentions in chat applications. For example, when a user types "@" to mention a document, you could:'}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Use a direct resource to fetch a list of all available documents for autocomplete"}),`
`,(0,n.jsx)(r.li,{children:"Use a templated resource to fetch the contents of a specific document when mentioned"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This approach lets you preemptively inject document content into prompts without requiring the AI to use tools to fetch the information."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};