import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Resources in MCP servers allow you to expose data to clients, similar to GET request handlers in a typical HTTP server. They're perfect for scenarios where you need to fetch information rather than perform actions."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-resources",children:"Understanding Resources"}),`
`,(0,n.jsx)(r.p,{children:"Think of resources as read-only endpoints that can return any type of data - strings, JSON, binary files, etc. You set a 'mime_type' to give the client a hint about what kind of data you're returning."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./bef714547cc3.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Resources work by exposing data through URIs (essentially addresses). When a client needs data, it sends a ReadResourceRequest with the specific URI, and your server responds with the requested information."}),`
`,(0,n.jsx)(r.h2,{id:"two-types-of-resources",children:"Two Types of Resources"}),`
`,(0,n.jsx)(r.p,{children:"There are two main types of resources you can create:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Direct Resources"})," - Have static URIs that don't contain any parameters (like ",(0,n.jsx)(r.code,{children:"docs://documents"}),")"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Templated Resources"})," - Include parameters in their URIs (like ",(0,n.jsx)(r.code,{children:"docs://documents/{doc_id}"}),")"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7fa0c5f6bafc.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For templated resources, the Python SDK automatically parses parameters from the URI and passes them as keyword arguments to your function. The parameter name in the URI becomes the argument name in your function."}),`
`,(0,n.jsx)(r.h2,{id:"implementing-resources",children:"Implementing Resources"}),`
`,(0,n.jsxs)(r.p,{children:["Creating resources is straightforward using the ",(0,n.jsx)(r.code,{children:"@mcp.resource()"})," decorator. Here's how to implement both types:"]}),`
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
`,(0,n.jsx)(r.p,{children:"The MCP Python SDK automatically serializes whatever you return. You don't need to manually convert data to JSON strings - just return the appropriate Python data structure."}),`
`,(0,n.jsx)(r.h2,{id:"testing-your-resources",children:"Testing Your Resources"}),`
`,(0,n.jsxs)(r.p,{children:["You can test resources using the MCP Inspector tool. Start your server with ",(0,n.jsx)(r.code,{children:"uv run mcp dev mcp_server.py"})," and navigate to the web interface."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./aaba6fbd4b95.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'The inspector separates direct resources from templated ones. Direct resources appear in the main "Resources" section, while templated resources show up under "Resource Templates". You can click on any resource to test it and see the exact response structure your server returns.'}),`
`,(0,n.jsx)(r.h2,{id:"practical-use-cases",children:"Practical Use Cases"}),`
`,(0,n.jsx)(r.p,{children:"Resources are ideal for:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Providing autocomplete data (like document lists)"}),`
`,(0,n.jsx)(r.li,{children:"Fetching file contents or database records"}),`
`,(0,n.jsx)(r.li,{children:"Exposing configuration data"}),`
`,(0,n.jsx)(r.li,{children:"Serving any read-only information your client needs"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key advantage is that resources allow clients to proactively fetch data without relying on tools or complex interactions. This makes them perfect for features like document mentions, where you want to automatically inject content into prompts based on user references."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};