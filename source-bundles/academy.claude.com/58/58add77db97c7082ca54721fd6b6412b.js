import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Resources in MCP servers allow you to expose data to clients, similar to GET request handlers in a typical HTTP server. They're perfect for scenarios where you need to fetch information rather than perform actions."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-resources-through-an-example",children:"Understanding Resources Through an Example"}),`
`,(0,n.jsxs)(r.p,{children:["Let's say you want to build a document mention feature where users can type ",(0,n.jsx)(r.code,{children:"@document_name"})," to reference files. This requires two operations:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Getting a list of all available documents (for autocomplete)"}),`
`,(0,n.jsx)(r.li,{children:"Fetching the contents of a specific document (when mentioned)"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cd7019a12385.jpg",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["When a user types ",(0,n.jsx)(r.code,{children:"@"}),", you need to show available documents. When they submit a message with a mention, you automatically inject that document's content into the prompt sent to Claude."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a170bf8f9438.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-resources-work",children:"How Resources Work"}),`
`,(0,n.jsxs)(r.p,{children:["Resources follow a request-response pattern. Your client sends a ",(0,n.jsx)(r.code,{children:"ReadResourceRequest"})," with a URI, and the MCP server responds with the data. The URI acts like an address for the resource you want to access."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8bfda681993a.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"types-of-resources",children:"Types of Resources"}),`
`,(0,n.jsx)(r.p,{children:"There are two types of resources:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./74cf80a71ba5.jpg",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Direct Resources:"})," Static URIs that don't change, like ",(0,n.jsx)(r.code,{children:"docs://documents"})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Templated Resources:"})," URIs with parameters, like ",(0,n.jsx)(r.code,{children:"docs://documents/{doc_id}"})]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For templated resources, the Python SDK automatically parses parameters from the URI and passes them as keyword arguments to your function."}),`
`,(0,n.jsx)(r.h2,{id:"implementing-resources",children:"Implementing Resources"}),`
`,(0,n.jsxs)(r.p,{children:["Resources are defined using the ",(0,n.jsx)(r.code,{children:"@mcp.resource()"})," decorator. Here's how to create both types:"]}),`
`,(0,n.jsx)(r.h3,{id:"direct-resource-list-documents",children:"Direct Resource (List Documents)"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.resource(
    "docs://documents",
    mime_type="application/json"
)
def list_docs() -> list[str]:
    return list(docs.keys())
`})}),`
`,(0,n.jsx)(r.h3,{id:"templated-resource-fetch-document",children:"Templated Resource (Fetch Document)"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.resource(
    "docs://documents/{doc_id}",
    mime_type="text/plain"
)
def fetch_doc(doc_id: str) -> str:
    if doc_id not in docs:
        raise ValueError(f"Doc with id {doc_id} not found")
    return docs[doc_id]
`})}),`
`,(0,n.jsx)(r.h2,{id:"mime-types",children:"MIME Types"}),`
`,(0,n.jsxs)(r.p,{children:["Resources can return any type of data - strings, JSON, binary, etc. The ",(0,n.jsx)(r.code,{children:"mime_type"})," parameter gives clients a hint about what kind of data you're returning:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"application/json"})," - Structured JSON data"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"text/plain"})," - Plain text content"]}),`
`,(0,n.jsx)(r.li,{children:"Any other valid MIME type for different data formats"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The MCP Python SDK automatically serializes your return values. You don't need to manually convert to JSON strings."}),`
`,(0,n.jsx)(r.h2,{id:"testing-resources",children:"Testing Resources"}),`
`,(0,n.jsx)(r.p,{children:"You can test your resources using the MCP Inspector. Run your server with:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`uv run mcp dev mcp_server.py
`})}),`
`,(0,n.jsx)(r.p,{children:"Then connect to the inspector in your browser. You'll see:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b26f1ed0bfbe.jpg",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Resources:"})," Lists your direct/static resources"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Resource Templates:"})," Shows templated resources that accept parameters"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Click on any resource to test it and see the exact response structure your client will receive."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d0d0f67385c3.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"key-points",children:"Key Points"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Resources expose data, tools perform actions"}),`
`,(0,n.jsx)(r.li,{children:"Use direct resources for static data, templated resources for parameterized queries"}),`
`,(0,n.jsx)(r.li,{children:"MIME types help clients understand response format"}),`
`,(0,n.jsx)(r.li,{children:"The SDK handles serialization automatically"}),`
`,(0,n.jsx)(r.li,{children:"Parameter names in templated URIs become function arguments"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Resources provide a clean way to make data available to MCP clients, enabling features like document mentions, file browsing, or any scenario where you need to fetch information from your server."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};