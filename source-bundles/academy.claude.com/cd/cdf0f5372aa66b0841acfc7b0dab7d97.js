import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Building an MCP server becomes much simpler when you use the official Python SDK. Instead of writing complex JSON schemas by hand, you can define tools with decorators and let the SDK handle the heavy lifting."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./19aefa6bde86.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In this example, we're creating a document management server with two core tools: one to read documents and another to update them. All documents exist in memory as a simple dictionary where keys are document IDs and values are the content."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-mcp-server",children:"Setting Up the MCP Server"}),`
`,(0,n.jsx)(r.p,{children:"The Python MCP SDK makes server creation straightforward. You can initialize a server with just one line:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from mcp.server.fastmcp import FastMCP

mcp = FastMCP("DocumentMCP", log_level="ERROR")
`})}),`
`,(0,n.jsx)(r.p,{children:"This creates a fully functional MCP server that can handle tool definitions, client connections, and message routing."}),`
`,(0,n.jsx)(r.h2,{id:"tool-definition-with-decorators",children:"Tool Definition with Decorators"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7cbfdec43d30.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The SDK's decorator approach eliminates the need for manual JSON schema writing. Here's how you define a simple tool:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.tool(
    name="add_ints",
    description="Add two integers together",
)
def tool_fn(
    a=Field(description="First number to add"),
    b=Field(description="Second number to add"),
) -> int:
    return a + b
`})}),`
`,(0,n.jsx)(r.p,{children:"Behind the scenes, MCP generates the complete tool schema that Claude needs to understand when and how to use your tool."}),`
`,(0,n.jsx)(r.h2,{id:"building-the-document-reader-tool",children:"Building the Document Reader Tool"}),`
`,(0,n.jsx)(r.p,{children:"The first tool reads document contents by ID. It takes a document identifier and returns the corresponding content from our in-memory dictionary:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.tool(
    name="read_doc_contents",
    description="Read the contents of a document and return it as a string."
)
def read_document(
    doc_id: str = Field(description="Id of the document to read")
):
    if doc_id not in docs:
        raise ValueError(f"Doc with id {doc_id} not found")
    
    return docs[doc_id]
`})}),`
`,(0,n.jsx)(r.p,{children:"The function includes basic error handling to catch requests for non-existent documents. When Claude calls this tool with a valid document ID, it receives the full document content as a string."}),`
`,(0,n.jsx)(r.h2,{id:"creating-the-document-editor-tool",children:"Creating the Document Editor Tool"}),`
`,(0,n.jsx)(r.p,{children:"The second tool performs simple find-and-replace operations on documents. It requires three parameters: the document ID, the text to find, and the replacement text:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.tool(
    name="edit_document",
    description="Edit a document by replacing a string in the documents content with a new string."
)
def edit_document(
    doc_id: str = Field(description="Id of the document that will be edited"),
    old_str: str = Field(description="The text to replace. Must match exactly, including white space."),
    new_str: str = Field(description="The new text to insert in place of the old text.")
):
    if doc_id not in docs:
        raise ValueError(f"Doc with id {doc_id} not found")
    
    docs[doc_id] = docs[doc_id].replace(old_str, new_str)
`})}),`
`,(0,n.jsx)(r.p,{children:"This implementation uses Python's built-in string replace method, which requires exact matches including whitespace. The tool modifies the document in place within our dictionary."}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits-of-the-sdk-approach",children:"Key Benefits of the SDK Approach"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"No manual JSON schema writing required"}),`
`,(0,n.jsx)(r.li,{children:"Type hints provide automatic parameter validation"}),`
`,(0,n.jsx)(r.li,{children:"Field descriptions help Claude understand tool usage"}),`
`,(0,n.jsx)(r.li,{children:"Error handling integrates naturally with Python exceptions"}),`
`,(0,n.jsx)(r.li,{children:"Tool registration happens automatically through decorators"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The MCP Python SDK transforms tool creation from a complex schema-writing exercise into straightforward Python function definitions. Your tools become more maintainable and easier to test, while Claude gets all the metadata it needs to use them effectively."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};