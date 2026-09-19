import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Building an MCP server becomes much simpler when you use the official MCP Python SDK. Instead of manually writing complex JSON schemas for tools, you can define them with decorators and let the SDK handle the heavy lifting."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./dfb5af14ac36.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In this example, we're creating an MCP server that manages document operations. The server will have two main tools: one to read document contents and another to update them. All documents exist in memory as a simple dictionary where keys are document IDs and values are the content strings."}),`
`,(0,n.jsx)(r.h2,{id:"mcp-python-sdk-benefits",children:"MCP Python SDK Benefits"}),`
`,(0,n.jsx)(r.p,{children:"The MCP project provides official SDKs for building servers and clients across multiple programming languages. Using the Python SDK offers several advantages:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Creates MCP servers with minimal boilerplate code"}),`
`,(0,n.jsx)(r.li,{children:"Automatically generates JSON schemas from Python function signatures"}),`
`,(0,n.jsx)(r.li,{children:"Simplifies tool definition through decorators"}),`
`,(0,n.jsx)(r.li,{children:"Handles type validation and error handling"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6f3f040c71e2.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["Here's how easy it is to define a tool with the SDK. The ",(0,n.jsx)(r.code,{children:"@mcp.tool"})," decorator, combined with type hints and field descriptions, automatically creates the proper tool schema that Claude can understand and use."]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-server",children:"Setting Up the Server"}),`
`,(0,n.jsx)(r.p,{children:"The basic server setup requires just a few lines:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from mcp.server.fastmcp import FastMCP
from pydantic import Field

mcp = FastMCP("DocumentMCP", log_level="ERROR")

docs = {
    "deposition.md": "This deposition covers the testimony of Angela Smith, P.E.",
    "report.pdf": "The report details the state of a 20m condenser tower.",
    "financials.docx": "These financials outline the project's budget and expenditures",
    "outlook.pdf": "This document presents the projected future performance of the system",
    "plan.md": "The plan outlines the steps for the project's implementation.",
    "spec.txt": "These specifications define the technical requirements for the equipment"
}
`})}),`
`,(0,n.jsx)(r.h2,{id:"implementing-the-read-tool",children:"Implementing the Read Tool"}),`
`,(0,n.jsx)(r.p,{children:"The first tool allows Claude to read document contents by providing a document ID:"}),`
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
`,(0,n.jsx)(r.p,{children:"The tool definition includes:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A clear name that describes the action"}),`
`,(0,n.jsx)(r.li,{children:"A description explaining what the tool does"}),`
`,(0,n.jsx)(r.li,{children:"Typed parameters with field descriptions"}),`
`,(0,n.jsx)(r.li,{children:"Error handling for invalid document IDs"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"implementing-the-edit-tool",children:"Implementing the Edit Tool"}),`
`,(0,n.jsx)(r.p,{children:"The second tool performs simple find-and-replace operations on document content:"}),`
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
`,(0,n.jsx)(r.h2,{id:"key-implementation-details",children:"Key Implementation Details"}),`
`,(0,n.jsx)(r.p,{children:"When defining tools with the MCP SDK, remember these important points:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Import ",(0,n.jsx)(r.code,{children:"Field"})," from pydantic to add parameter descriptions"]}),`
`,(0,n.jsx)(r.li,{children:"Use type hints to specify parameter types"}),`
`,(0,n.jsx)(r.li,{children:"Include error handling for edge cases"}),`
`,(0,n.jsx)(r.li,{children:"Write clear, descriptive tool names and descriptions"}),`
`,(0,n.jsx)(r.li,{children:"The MCP Python SDK automatically converts your function signature into the proper JSON schema"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The MCP Python SDK dramatically reduces the complexity of creating tools compared to manually writing JSON schemas. What used to require dozens of lines of schema definition now takes just a few lines of decorated Python functions."}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"@mcp.tool"})," decorator and its signature-based schema generation come from the MCP Python SDK. The ",(0,n.jsxs)(r.a,{href:"https://code.claude.com/docs/en/agent-sdk/custom-tools",children:["Claude Agent SDK provides a separate ",(0,n.jsx)(r.code,{children:"@tool"})," decorator"]})," for defining custom tools, and it expects an explicit ",(0,n.jsx)(r.code,{children:"input_schema"})," argument rather than pydantic ",(0,n.jsx)(r.code,{children:"Field"})," annotations on the function signature. In Python that schema is a dict mapping parameter names to types, like ",(0,n.jsx)(r.code,{children:'{"latitude": float}'}),", which the Agent SDK converts to JSON Schema for you, or a full JSON Schema dict when you need enums, ranges, optional fields, or nested objects. When you read tool code elsewhere, check which SDK it imports, since the two decorators are easy to confuse."]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};