import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When you need structured data from Claude, you have two main approaches: prompt-based techniques using message prefills and stop sequences, or a more robust method using tools. While the prompt-based approach is simpler to set up, tools provide more reliable output at the cost of additional complexity."}),`
`,(0,n.jsx)(r.h2,{id:"tools-for-structured-data",children:"Tools for Structured Data"}),`
`,(0,n.jsx)(r.p,{children:"The tool-based approach works by creating a JSON schema that defines the exact structure of data you want to extract. Instead of hoping Claude formats its response correctly, you're essentially giving Claude a function to call with specific parameters that match your desired output structure."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5166b9bc46d0.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how the process works:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Write a schema that describes the structure of data you're looking for"}),`
`,(0,n.jsxs)(r.li,{children:["Force Claude to use a tool with the ",(0,n.jsx)(r.code,{children:"tool_choice"})," parameter"]}),`
`,(0,n.jsx)(r.li,{children:"Extract the structured data from the tool use response"}),`
`,(0,n.jsx)(r.li,{children:"No need to provide a follow-up response - you're done once you get the data"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For example, if you want to extract a financial balance and key insights from a statement, your schema would define those as an integer and array of strings respectively."}),`
`,(0,n.jsx)(r.h2,{id:"controlling-tool-use",children:"Controlling Tool Use"}),`
`,(0,n.jsxs)(r.p,{children:["A critical part of this technique is ensuring Claude actually calls your tool. You can control this behavior using the ",(0,n.jsx)(r.code,{children:"tool_choice"})," parameter:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3a49b253e89c.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'{"type": "auto"}'})," - Model decides if it needs to use a tool (default)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'{"type": "any"}'})," - Model must use a tool, but can choose which one"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'{"type": "tool", "name": "TOOL_NAME"}'})," - Model must use the specified tool"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For structured data extraction, you'll typically want the third option to guarantee Claude calls your specific schema tool."}),`
`,(0,n.jsx)(r.h2,{id:"implementation-example",children:"Implementation Example"}),`
`,(0,n.jsx)(r.p,{children:"Let's say you want to extract a title, author, and key insights from an article. First, you'd create a tool schema:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`article_summary_schema = {
    "name": "article_summary",
    "description": "Extracts structured data from articles",
    "input_schema": {
        "type": "object",
        "properties": {
            "title": {"type": "string"},
            "author": {"type": "string"},
            "key_insights": {
                "type": "array",
                "items": {"type": "string"}
            }
        }
    }
}
`})}),`
`,(0,n.jsx)(r.p,{children:"Then you'd call Claude with the tool and force its use:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`response = chat(
    messages,
    tools=[article_summary_schema],
    tool_choice={"type": "tool", "name": "article_summary"}
)
`})}),`
`,(0,n.jsxs)(r.p,{children:["The response will contain a tool use block with your structured data in the ",(0,n.jsx)(r.code,{children:"input"})," field. You can access it directly:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`structured_data = response.content[0].input
`})}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-each-approach",children:"When to Use Each Approach"}),`
`,(0,n.jsx)(r.p,{children:"Choose prompt-based structured output when you need something quick and simple. Use tools when you need guaranteed reliability and can handle the extra setup complexity. Both techniques are valuable depending on your specific use case and requirements."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};