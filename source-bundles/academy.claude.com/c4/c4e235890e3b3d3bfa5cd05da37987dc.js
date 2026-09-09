import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Building an MCP server becomes much simpler when you use the official Python SDK. Instead of manually writing complex JSON schemas for tools, the SDK handles all that complexity for you with decorators and type hints."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./082a7bf4d70a.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In this example, we're creating an MCP server that manages documents stored in memory. The server will provide two essential tools: one to read document contents and another to update them through find-and-replace operations."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-mcp-server",children:"Setting Up the MCP Server"}),`
`,(0,n.jsx)(r.p,{children:"The Python MCP SDK makes server creation incredibly straightforward. You can initialize a complete MCP server with just one line:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from mcp.server.fastmcp import FastMCP

mcp = FastMCP("DocumentMCP", log_level="ERROR")
`})}),`
`,(0,n.jsx)(r.p,{children:"For this implementation, documents are stored in a simple Python dictionary where keys are document IDs and values contain the document content:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`docs = {
    "deposition.md": "This deposition covers the testimony of Angela Smith, P.E.",
    "report.pdf": "The report details the state of a 20m condenser tower.",
    "financials.docx": "These financials outline the project's budget and expenditure",
    "outlook.pdf": "This document presents the projected future performance of the",
    "plan.md": "The plan outlines the steps for the project's implementation.",
    "spec.txt": "These specifications define the technical requirements for the equipment"
}
`})}),`
`,(0,n.jsx)(r.h2,{id:"tool-definition-with-decorators",children:"Tool Definition with Decorators"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./489447300492.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The SDK transforms tool creation from a verbose process into something clean and readable. Instead of writing lengthy JSON schemas, you use Python decorators and type hints."}),`
`,(0,n.jsx)(r.h2,{id:"creating-the-document-reader-tool",children:"Creating the Document Reader Tool"}),`
`,(0,n.jsx)(r.p,{children:"The first tool allows Claude to read any document by its ID. Here's the complete implementation:"}),`
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
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"@mcp.tool"})," decorator automatically generates the JSON schema that Claude needs. The ",(0,n.jsx)(r.code,{children:"Field"})," class from Pydantic provides parameter descriptions that help Claude understand what each argument expects."]}),`
`,(0,n.jsx)(r.h2,{id:"building-the-document-editor-tool",children:"Building the Document Editor Tool"}),`
`,(0,n.jsx)(r.p,{children:"The second tool performs simple find-and-replace operations on documents:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.tool(
    name="edit_document",
    description="Edit a document by replacing a string in the documents content with a new string."
)
def edit_document(
    doc_id: str = Field(description="Id of the document that will be edited"),
    old_str: str = Field(description="The text to replace. Must match exactly, including whitespace."),
    new_str: str = Field(description="The new text to insert in place of the old text.")
):
    if doc_id not in docs:
        raise ValueError(f"Doc with id {doc_id} not found")
    
    docs[doc_id] = docs[doc_id].replace(old_str, new_str)
`})}),`
`,(0,n.jsxs)(r.p,{children:["This tool takes three parameters: the document ID, the text to find, and the replacement text. The implementation uses Python's built-in string ",(0,n.jsx)(r.code,{children:"replace()"})," method for simplicity."]}),`
`,(0,n.jsx)(r.h2,{id:"error-handling",children:"Error Handling"}),`
`,(0,n.jsxs)(r.p,{children:["Both tools include basic error handling to manage cases where Claude requests a document that doesn't exist. When an invalid document ID is provided, the tools raise a ",(0,n.jsx)(r.code,{children:"ValueError"})," with a descriptive message that Claude can understand and potentially act upon."]}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits-of-the-sdk-approach",children:"Key Benefits of the SDK Approach"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Automatic JSON schema generation from Python type hints"}),`
`,(0,n.jsx)(r.li,{children:"Clean, readable code that's easy to maintain"}),`
`,(0,n.jsx)(r.li,{children:"Built-in parameter validation through Pydantic"}),`
`,(0,n.jsx)(r.li,{children:"Reduced boilerplate compared to manual schema writing"}),`
`,(0,n.jsx)(r.li,{children:"Type safety and IDE support for development"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The MCP Python SDK transforms what used to be a complex process of writing tool definitions into something that feels natural for Python developers. You focus on the business logic while the SDK handles the protocol details."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};