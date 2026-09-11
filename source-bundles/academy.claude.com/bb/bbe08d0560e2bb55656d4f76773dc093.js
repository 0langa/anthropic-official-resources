import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"MCP servers can define prompts - pre-written, high-quality instructions that clients can use instead of writing their own prompts from scratch. Think of prompts as carefully crafted templates that give better results than what users might write on their own."}),`
`,(0,n.jsx)(r.h2,{id:"why-use-prompts",children:"Why Use Prompts?"}),`
`,(0,n.jsx)(r.p,{children:`Let's say you want Claude to reformat a document into markdown. You could just ask "Convert report.pdf to markdown" and it would work fine. But you'd probably get much better results with a thoroughly tested, detailed prompt that covers edge cases and gives specific formatting instructions.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8a6e39140519.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The idea is simple: as MCP server developers, we can spend time crafting and testing really good prompts, then make them available to anyone using our server. Users get better results without having to become prompt engineering experts themselves."}),`
`,(0,n.jsx)(r.h2,{id:"defining-a-prompt",children:"Defining a Prompt"}),`
`,(0,n.jsx)(r.p,{children:"Prompts use a similar decorator pattern to tools and resources. Here's the basic structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.prompt(
    name="format",
    description="Rewrites the contents of the document in Markdown format."
)
def format_document(
    doc_id: str = Field(description="Id of the document to format")
) -> list[base.Message]:
    # Return a list of messages
`})}),`
`,(0,n.jsx)(r.p,{children:"The function returns a list of messages that can be sent directly to Claude. This lets you build complex prompts with multiple user and assistant messages if needed."}),`
`,(0,n.jsx)(r.h2,{id:"building-the-format-prompt",children:"Building the Format Prompt"}),`
`,(0,n.jsx)(r.p,{children:"For our document server, we'll create a prompt that reformats documents into markdown. The prompt needs to:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Take a document ID as input"}),`
`,(0,n.jsx)(r.li,{children:"Use the read_doc_contents tool to get the document"}),`
`,(0,n.jsx)(r.li,{children:"Reformat it with proper markdown syntax"}),`
`,(0,n.jsx)(r.li,{children:"Save the changes back to the document"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Here's how the implementation looks:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def format_document(
    doc_id: str = Field(description="Id of the document to format")
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
`,(0,n.jsx)(r.h2,{id:"testing-the-prompt",children:"Testing the Prompt"}),`
`,(0,n.jsx)(r.p,{children:"Once you've defined your prompt, you can test it using the MCP Inspector. Navigate to the Prompts tab, select your prompt, and provide the required parameters."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7d2a3d6ba119.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The inspector will show you the generated messages that would be sent to Claude. You can verify that parameter interpolation works correctly and that your prompt contains all the necessary instructions."}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits",children:"Key Benefits"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Quality Control"})," - Server authors can test and refine prompts before users see them"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Consistency"})," - Everyone gets the same high-quality prompt instead of improvising"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Specialization"})," - Prompts can be tailored to your server's specific domain and capabilities"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Reusability"})," - Multiple client applications can use the same well-crafted prompts"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Remember to import the base module for message types:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from mcp.server.fastmcp.prompts import base
`})}),`
`,(0,n.jsx)(r.p,{children:"Prompts are particularly valuable when your MCP server has a specific focus area - like document management, data analysis, or code generation. You can provide users with battle-tested prompts that leverage your server's tools effectively."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};