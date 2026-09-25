import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompts in MCP servers let you define pre-built, high-quality instructions that clients can use instead of writing their own prompts from scratch. Think of them as carefully crafted templates that give better results than what users might come up with on their own."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2dfd2f9fcdfe.png",alt:"Diagram of an MCP client connecting to two MCP servers, each exposing Tools, Resources, and Prompts — with Prompts highlighted — in front of outside services"})}),`
`,(0,n.jsx)(r.h2,{id:"why-use-prompts",children:"Why Use Prompts?"}),`
`,(0,n.jsx)(r.p,{children:`Here's the key insight: users can already ask Claude to do most tasks directly. For example, a user could type "reformat the report.pdf in markdown" and get decent results. But they'll get much better results if you provide a thoroughly tested, specialized prompt that handles edge cases and follows best practices.`}),`
`,(0,n.jsx)(r.p,{children:"As the MCP server author, you can spend time crafting, testing, and evaluating prompts that work consistently across different scenarios. Users benefit from this expertise without having to become prompt engineering experts themselves."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6ab55d7162ce.png",alt:'Side-by-side comparison of the short prompt a user would write — "Convert report.pdf to markdown" — versus the much longer, thoroughly evaluated prompt an MCP server author can provide instead'})}),`
`,(0,n.jsx)(r.h2,{id:"building-a-format-command",children:"Building a Format Command"}),`
`,(0,n.jsxs)(r.p,{children:["Let's implement a practical example: a format command that converts documents to markdown. Users will type ",(0,n.jsx)(r.code,{children:"/format doc_id"})," and get back a professionally formatted markdown version of their document."]}),`
`,(0,n.jsx)(r.p,{children:"The workflow looks like this:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["User types ",(0,n.jsx)(r.code,{children:"/"})," to see available commands"]}),`
`,(0,n.jsxs)(r.li,{children:["They select ",(0,n.jsx)(r.code,{children:"format"})," and specify a document ID"]}),`
`,(0,n.jsx)(r.li,{children:"Claude uses your pre-built prompt to read and reformat the document"}),`
`,(0,n.jsx)(r.li,{children:"The result is clean markdown with proper headers, lists, and formatting"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"defining-prompts",children:"Defining Prompts"}),`
`,(0,n.jsx)(r.p,{children:"Prompts use a similar decorator pattern to tools and resources:"}),`
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
<document_id>
{doc_id}
</document_id>

Add in headers, bullet points, tables, etc as necessary. Feel free to add in structure.
Use the 'edit_document' tool to edit the document. After the document has been reformatted...
"""

    return [
        base.UserMessage(prompt)
    ]
`})}),`
`,(0,n.jsx)(r.p,{children:"The function returns a list of messages that get sent directly to Claude. You can include multiple user and assistant messages to create more complex conversation flows."}),`
`,(0,n.jsx)(r.h2,{id:"testing-your-prompts",children:"Testing Your Prompts"}),`
`,(0,n.jsx)(r.p,{children:"Use the MCP Inspector to test your prompts before deploying them:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fd582104701b.png",alt:"The MCP Inspector with the format prompt selected, showing the doc_id argument and the interpolated message that will be sent to Claude"})}),`
`,(0,n.jsx)(r.p,{children:"The inspector shows you exactly what messages will be sent to Claude, including how variables get interpolated into your prompt template. This lets you verify the prompt looks correct before users start relying on it."}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits",children:"Key Benefits"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Consistency"})," - Users get reliable results every time"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Expertise"})," - You can encode domain knowledge into prompts"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Reusability"})," - Multiple client applications can use the same prompts"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Maintenance"})," - Update prompts in one place to improve all clients"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Prompts work best when they're specialized for your MCP server's domain. A document management server might have prompts for formatting, summarizing, or analyzing documents. A data analysis server might have prompts for generating reports or visualizations."}),`
`,(0,n.jsx)(r.p,{children:"The goal is to provide prompts that are so well-crafted and tested that users prefer them over writing their own instructions from scratch."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};