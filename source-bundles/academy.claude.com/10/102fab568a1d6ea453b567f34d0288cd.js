import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompts in MCP servers let you define pre-built, high-quality instructions that clients can use instead of writing their own prompts from scratch. Think of them as carefully crafted templates that give better results than what users might come up with on their own."}),`
`,(0,n.jsx)(r.h2,{id:"why-use-prompts",children:"Why Use Prompts?"}),`
`,(0,n.jsx)(r.p,{children:`Let's say you want Claude to reformat a document into markdown. A user could just type "convert report.pdf to markdown" and it would work fine. But they'd probably get much better results with a thoroughly tested prompt that includes specific instructions about formatting, structure, and output requirements.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5f7d69d480fa.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that while users can accomplish these tasks on their own, they'll get more consistent and higher-quality results when using prompts that have been carefully developed and tested by the MCP server authors."}),`
`,(0,n.jsx)(r.h2,{id:"how-prompts-work",children:"How Prompts Work"}),`
`,(0,n.jsx)(r.p,{children:"Prompts define a set of user and assistant messages that clients can use directly. When a client requests a prompt, your server returns a list of messages that can be sent straight to Claude."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./84a38d591693.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The basic structure looks like this:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Define prompts using the ",(0,n.jsx)(r.code,{children:"@mcp.prompt()"})," decorator"]}),`
`,(0,n.jsx)(r.li,{children:"Add a name and description for each prompt"}),`
`,(0,n.jsx)(r.li,{children:"Return a list of messages that form the complete prompt"}),`
`,(0,n.jsx)(r.li,{children:"These prompts should be high quality, well-tested, and relevant to your MCP server's purpose"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"building-a-format-command",children:"Building a Format Command"}),`
`,(0,n.jsx)(r.p,{children:"Here's how to implement a document formatting prompt. First, you'll need to import the base message types:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from mcp.server.fastmcp import base
`})}),`
`,(0,n.jsx)(r.p,{children:"Then define your prompt function:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`@mcp.prompt(
    name="format",
    description="Rewrites the contents of the document in Markdown format."
)
def format_document(
    doc_id: str = Field(description="Id of the document to format")
) -> list[base.Message]:
    prompt = f"""
Your goal is to reformat a document to be written with markdown syntax.

The id of the document you need to reformat is:

{doc_id}


Add in headers, bullet points, tables, etc as necessary. Feel free to add in extra formatting.
Use the 'edit_document' tool to edit the document. After the document has been reformatted...
"""
    
    return [
        base.UserMessage(prompt)
    ]
`})}),`
`,(0,n.jsx)(r.h2,{id:"testing-your-prompts",children:"Testing Your Prompts"}),`
`,(0,n.jsx)(r.p,{children:"You can test prompts using the MCP Inspector. Navigate to the Prompts section, select your prompt, and provide any required parameters. The inspector will show you the generated messages that would be sent to Claude."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f46550b4a90f.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This lets you verify that your prompt interpolates variables correctly and produces the expected message structure before using it in a real application."}),`
`,(0,n.jsx)(r.h2,{id:"best-practices",children:"Best Practices"}),`
`,(0,n.jsx)(r.p,{children:"When creating prompts for your MCP server:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Focus on tasks that are central to your server's purpose"}),`
`,(0,n.jsx)(r.li,{children:"Write detailed, specific instructions rather than vague requests"}),`
`,(0,n.jsx)(r.li,{children:"Test your prompts thoroughly with different inputs"}),`
`,(0,n.jsx)(r.li,{children:"Include clear descriptions so users understand what each prompt does"}),`
`,(0,n.jsx)(r.li,{children:"Consider how the prompt will work with your server's tools and resources"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Remember that prompts are meant to provide value that users couldn't easily get on their own - they should represent your expertise in the domain your MCP server covers."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};