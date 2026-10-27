import{Vm as e,zm as t}from"../../../../../content-de-meta-oe42hj2y.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components},{LessonDownloads:i}=r;return i||a("LessonDownloads",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Building an MCP server becomes much simpler when you use the official Python SDK. Instead of writing complex JSON schemas by hand, you can define tools with decorators and let the SDK handle the heavy lifting."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./19aefa6bde86.png",alt:"Our MCP server's read and update tools connected to four files: document.pdf, spreadsheet.xlsx, report.txt and spec.md."})}),`
`,(0,n.jsx)(r.p,{children:"In this example, we're creating a document management server with two core tools: one to read documents and another to update them. All documents exist in memory as a simple dictionary where keys are document IDs and values are the content."}),`
`,(0,n.jsx)(r.h2,{id:"getting-the-project",children:"Getting the Project"}),`
`,(0,n.jsxs)(r.p,{children:["The lessons in this course build on a small starter project, a command-line chatbot with an MCP client and an MCP server. Download ",(0,n.jsx)(r.code,{children:"cli_project.zip"})," from the Downloads section at the end of this lesson and extract it to your preferred development directory. Open your code editor in the project folder."]}),`
`,(0,n.jsxs)(r.p,{children:["The project includes a README file with setup instructions. Add your Anthropic API key to the ",(0,n.jsx)(r.code,{children:".env"})," file. Then install dependencies using either uv (recommended) or pip. The project uses version 1 of the MCP Python SDK, and its setup installs that version for you."]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-mcp-server",children:"Setting Up the MCP Server"}),`
`,(0,n.jsxs)(r.p,{children:["The MCP Python SDK makes server creation straightforward. Open ",(0,n.jsx)(r.code,{children:"mcp_server.py"}),". It already initializes a server with just one line. The tools below also need the ",(0,n.jsx)(r.code,{children:"Field"})," import:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from mcp.server.fastmcp import FastMCP
from pydantic import Field

mcp = FastMCP("DocumentMCP", log_level="ERROR")
`})}),`
`,(0,n.jsx)(r.p,{children:"Your documents can be stored in a simple dictionary structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`docs = {
    "deposition.md": "This deposition covers the testimony of Angela Smith, P.E.",
    "report.pdf": "The report details the state of a 20m condenser tower.",
    "financials.docx": "These financials outline the project's budget and expenditures",
    "outlook.pdf": "This document presents the projected future performance of the system",
    "plan.md": "The plan outlines the steps for the project's implementation.",
    "spec.txt": "These specifications define the technical requirements for the equipment"
}
`})}),`
`,(0,n.jsx)(r.h2,{id:"tool-definition-with-decorators",children:"Tool Definition with Decorators"}),`
`,(0,n.jsx)(r.p,{children:"The SDK uses decorators to define tools. Instead of writing JSON schemas manually, you can use Python type hints and field descriptions. The SDK automatically generates the proper schema that Claude can understand."}),`
`,(0,n.jsx)(r.h2,{id:"creating-a-document-reader-tool",children:"Creating a Document Reader Tool"}),`
`,(0,n.jsx)(r.p,{children:"The first tool reads document contents by ID. Here's the complete implementation:"}),`
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
`,(0,n.jsxs)(r.p,{children:["The decorator specifies the tool name and description, while the function parameters define the required arguments. The ",(0,n.jsx)(r.code,{children:"Field"})," class from Pydantic provides argument descriptions that help Claude understand what each parameter expects."]}),`
`,(0,n.jsx)(r.h2,{id:"building-a-document-editor-tool",children:"Building a Document Editor Tool"}),`
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
`,(0,n.jsx)(r.p,{children:"This tool takes three parameters: the document ID, the text to find, and the replacement text. The implementation includes error handling for missing documents and performs a straightforward string replacement."}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits-of-the-sdk-approach",children:"Key Benefits of the SDK Approach"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"No manual JSON schema writing required"}),`
`,(0,n.jsx)(r.li,{children:"Type hints provide automatic validation"}),`
`,(0,n.jsx)(r.li,{children:"Clear parameter descriptions help Claude understand tool usage"}),`
`,(0,n.jsx)(r.li,{children:"Error handling integrates naturally with Python exceptions"}),`
`,(0,n.jsx)(r.li,{children:"Tool registration happens automatically through decorators"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The MCP Python SDK transforms tool creation from a complex schema-writing exercise into simple Python function definitions. This approach makes it much easier to build and maintain MCP servers while ensuring Claude receives properly formatted tool specifications."}),`
`,(0,n.jsx)(i,{})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};