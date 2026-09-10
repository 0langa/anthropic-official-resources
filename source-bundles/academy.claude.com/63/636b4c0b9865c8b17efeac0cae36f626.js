import{em as e,nm as t}from"../../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{CodeCommand:i}=r;return i||a("CodeCommand",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Resources in MCP servers allow you to expose data to clients, similar to GET request handlers in a typical HTTP server. They're perfect for scenarios where you need to fetch information rather than perform actions."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-resources-through-an-example",children:"Understanding Resources Through an Example"}),`
`,(0,n.jsxs)(r.p,{children:["Let's say you want to build a document mention feature where users can type ",(0,n.jsx)(r.code,{children:"@document_name"})," to reference files. This requires two operations:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Getting a list of all available documents (for autocomplete)"}),`
`,(0,n.jsx)(r.li,{children:"Fetching the contents of a specific document (when mentioned)"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./23bc7e478d6c.png",alt:"Feature slide: users can mention a document by writing out @doc_name; typing @ shows a list of all available documents in an autocomplete, and a mentioned document's contents are automatically injected into the prompt"})}),`
`,(0,n.jsx)(r.p,{children:"When a user mentions a document, your system automatically injects the document's contents into the prompt sent to Claude, eliminating the need for Claude to use tools to fetch the information."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./49dbdb150ca9.png",alt:`Diagram of a user asking "What's in the @report.pdf file?" — our code wraps the query in a prompt for Claude with the referenced document's contents injected inside a document tag`})}),`
`,(0,n.jsx)(r.h2,{id:"how-resources-work",children:"How Resources Work"}),`
`,(0,n.jsxs)(r.p,{children:["Resources follow a request-response pattern. When your client needs data, it sends a ",(0,n.jsx)(r.code,{children:"ReadResourceRequest"})," with a URI to identify which resource it wants. The MCP server processes this request and returns the data in a ",(0,n.jsx)(r.code,{children:"ReadResourceResult"}),"."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8530241c3b0e.png",alt:`Sequence diagram: the user types "What's in the @…", our code asks the MCP client for a list of document names for the autocomplete, and the client sends a ReadResourceRequest with the docs://documents URI to the MCP server`})}),`
`,(0,n.jsx)(r.p,{children:"The flow looks like this: your code requests a resource from the MCP client, which forwards the request to the MCP server. The server processes the URI, runs the appropriate function, and returns the result."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./90c43206eae4.png",alt:"Sequence diagram continued: the MCP server returns a ReadResourceResult containing the list of doc names, which the MCP client passes back to our code to put into the autocomplete"})}),`
`,(0,n.jsx)(r.h2,{id:"types-of-resources",children:"Types of Resources"}),`
`,(0,n.jsx)(r.p,{children:"There are two types of resources:"}),`
`,(0,n.jsx)(r.h3,{id:"direct-resources",children:"Direct Resources"}),`
`,(0,n.jsx)(r.p,{children:"Direct resources have static URIs that never change. They're perfect for operations that don't need parameters."}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.resource(
    "docs://documents",
    mime_type="application/json"
)
def list_docs() -> list[str]:
    return list(docs.keys())
`})}),`
`,(0,n.jsx)(r.h3,{id:"templated-resources",children:"Templated Resources"}),`
`,(0,n.jsx)(r.p,{children:"Templated resources include parameters in their URIs. The Python SDK automatically parses these parameters and passes them as keyword arguments to your function."}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.resource(
    "docs://documents/{doc_id}",
    mime_type="text/plain"
)
def fetch_doc(doc_id: str) -> str:
    if doc_id not in docs:
        raise ValueError(f"Doc with id {doc_id} not found")
    return docs[doc_id]
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7fa0c5f6bafc.png",alt:"Side-by-side comparison: a Direct Resource whose URI doesn't contain any params, and a Templated Resource whose URI contains one or more params that the Python SDK parses and passes as args to your function"})}),`
`,(0,n.jsx)(r.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,(0,n.jsxs)(r.p,{children:["Resources can return any type of data - strings, JSON, binary data, etc. Use the ",(0,n.jsx)(r.code,{children:"mime_type"})," parameter to give clients a hint about what kind of data you're returning:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'"application/json"'})," for structured data"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'"text/plain"'})," for plain text"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'"application/pdf"'})," for binary files"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The MCP Python SDK automatically serializes your return values. You don't need to manually convert objects to JSON strings - just return the data structure and let the SDK handle serialization."}),`
`,(0,n.jsx)(r.h2,{id:"testing-your-resources",children:"Testing Your Resources"}),`
`,(0,n.jsx)(r.p,{children:"You can test resources using the MCP Inspector. Start your server with:"}),`
`,(0,n.jsx)(i,{children:"uv run mcp dev mcp_server.py"}),`
`,(0,n.jsx)(r.p,{children:"Then connect to the inspector in your browser. You'll see two sections:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Resources"})," - Lists your direct/static resources"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Resource Templates"})," - Lists your templated resources"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./aaba6fbd4b95.png",alt:"MCP Inspector with the Resources tab open, showing the docs://documents direct resource under Resources, the fetch_doc template under Resource Templates, and the JSON response for docs://documents with its URI, mimeType, and serialized list of document names"})}),`
`,(0,n.jsx)(r.p,{children:"Click on any resource to test it. For templated resources, you'll need to provide values for the parameters. The inspector shows you the exact response structure your client will receive, including the MIME type and serialized data."}),`
`,(0,n.jsx)(r.p,{children:"Resources provide a clean way to expose read-only data from your MCP server, making it easy for clients to fetch information without the complexity of tool calls."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};