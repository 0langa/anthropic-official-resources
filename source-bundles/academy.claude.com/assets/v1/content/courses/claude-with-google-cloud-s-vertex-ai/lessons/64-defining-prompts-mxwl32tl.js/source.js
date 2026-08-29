import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompts in MCP servers let you define pre-built, high-quality instructions that clients can use instead of writing their own prompts from scratch. Think of them as carefully crafted templates that give better results than what users might come up with on their own."}),`
`,(0,n.jsx)(r.h2,{id:"why-use-prompts",children:"Why Use Prompts?"}),`
`,(0,n.jsx)(r.p,{children:`Let's say you want Claude to reformat a document into markdown. A user could just type "convert report.pdf to markdown" and get decent results. But they'd probably get much better output if they used a thoroughly tested, specialized prompt that you've designed specifically for document formatting.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6ab55d7162ce.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that while users can accomplish these tasks on their own, they'll get superior results when using prompts that have been carefully engineered and tested by the MCP server authors."}),`
`,(0,n.jsx)(r.h2,{id:"how-prompts-work",children:"How Prompts Work"}),`
`,(0,n.jsx)(r.p,{children:"Prompts define a set of user and assistant messages that clients can use directly. When a client requests a prompt, your server returns a list of messages that can be sent straight to Claude."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6fbf83bdc5e6.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The basic structure looks like this:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.prompt(
    name="format",
    description="Rewrites the contents of a document in Markdown format",
)
def format_document(
    doc_id: str = Field(description="Id of the document to format"),
) -> list[base.Message]:
    # Return a list of messages
`})}),`
`,(0,n.jsx)(r.h2,{id:"building-a-format-command",children:"Building a Format Command"}),`
`,(0,n.jsxs)(r.p,{children:["Here's a practical example. We'll create a format command that lets users type ",(0,n.jsx)(r.code,{children:"/format doc_id"})," to reformat any document into markdown syntax."]}),`
`,(0,n.jsx)(r.p,{children:"The prompt implementation includes detailed instructions for Claude:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def format_document(
    doc_id: str = Field(description="Id of the document to format"),
) -> list[base.Message]:
    prompt = f"""
Your goal is to reformat a document to be written with markdown syntax.

The id of the document you need to reformat is:

{doc_id}


Add in headers, bullet points, tables, etc as necessary. Feel free to add in structure.
Use the 'edit_document' tool to edit the document. After the document has been reformatted...
"""
    
    return [
        base.UserMessage(prompt)
    ]
`})}),`
`,(0,n.jsx)(r.h2,{id:"testing-your-prompts",children:"Testing Your Prompts"}),`
`,(0,n.jsx)(r.p,{children:"You can test prompts using the MCP Inspector. Navigate to the Prompts tab, select your prompt, and provide any required parameters."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fd582104701b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The inspector shows you exactly what messages will be sent to Claude, including how any parameters get interpolated into the prompt text."}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits",children:"Key Benefits"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Quality control"})," - You can test and refine prompts before users see them"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Consistency"})," - Users get reliable results every time"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Specialization"})," - Prompts can be tailored to your server's specific domain"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Reusability"})," - Multiple clients can use the same well-crafted prompts"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,(0,n.jsx)(r.p,{children:"Don't forget to import the base module for message types:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from mcp.server.fastmcp import FastMCP
from mcp.server.fastmcp.prompts import base
`})}),`
`,(0,n.jsx)(r.p,{children:"Prompts should be high quality, well-tested, and relevant to your MCP server's overall purpose. In our document management example, formatting prompts make perfect sense since the server specializes in document operations."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};