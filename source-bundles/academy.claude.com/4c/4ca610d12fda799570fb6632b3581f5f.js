import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Earlier in this course, we covered how to get structured output from Claude using message pre-fills and stop sequences. While that approach works well and is easy to set up, we can get more reliable output using tools. This method is more complex to implement, but it provides better consistency when extracting structured data like JSON."}),`
`,(0,n.jsx)(r.h2,{id:"why-learn-both-approaches",children:"Why Learn Both Approaches?"}),`
`,(0,n.jsx)(r.p,{children:"You might wonder why we didn't just start with tools if they're more reliable. The answer is simple: tools require significantly more setup and complexity. Having both techniques available gives you flexibility - sometimes you'll want the quick prompt-based approach, other times you'll need the reliability that tools provide."}),`
`,(0,n.jsx)(r.h2,{id:"how-tool-based-structured-output-works",children:"How Tool-Based Structured Output Works"}),`
`,(0,n.jsx)(r.p,{children:'The core concept is straightforward: instead of asking Claude to format its response as JSON, you create a tool whose input parameters match the exact structure of data you want to extract. Claude then "calls" this tool with the extracted data as arguments.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8e31fd40e0bf.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's the process:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Write a JSON schema that describes the structure of data you want"}),`
`,(0,n.jsx)(r.li,{children:"Create a tool with that schema as its input specification"}),`
`,(0,n.jsx)(r.li,{children:"Send your data and the tool schema to Claude"}),`
`,(0,n.jsxs)(r.li,{children:["Force Claude to use the tool with the ",(0,n.jsx)(r.code,{children:"toolChoice"})," parameter"]}),`
`,(0,n.jsx)(r.li,{children:"Extract the structured data from the tool call arguments"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./85045c0892b4.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The flow looks like this: your server sends a prompt asking Claude to analyze data and call a specific tool. Claude responds with a tool use message containing the extracted JSON data. At that point, you simply take the data and end the conversation - no follow-up needed."}),`
`,(0,n.jsx)(r.h2,{id:"controlling-tool-usage",children:"Controlling Tool Usage"}),`
`,(0,n.jsxs)(r.p,{children:["When using tools for structured output, you want to guarantee that Claude uses your extraction tool. The ",(0,n.jsx)(r.code,{children:"toolChoice"})," parameter gives you three options:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./99e064378a0c.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'{"toolChoice": {"auto": {}}}'})," - Model decides if it needs to use a tool (default)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'{"toolChoice": {"any": {}}}'})," - Model must use a tool, but can choose which one"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'{"toolChoice": {"tool": {"name": "tool-name"}}}'})," - Model must use the specified tool"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For structured output, you'll almost always want the third option to ensure Claude uses your extraction tool."}),`
`,(0,n.jsx)(r.h2,{id:"practical-example",children:"Practical Example"}),`
`,(0,n.jsx)(r.p,{children:"Let's say you want to extract the title, author, and key topics from an article. First, you'd create a tool schema:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`article_details_schema = {
    "toolSpec": {
        "name": "article_details",
        "description": "Extracts key information from an article",
        "inputSchema": {
            "json": {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string",
                        "description": "The title of the article"
                    },
                    "author": {
                        "type": "string", 
                        "description": "The author's name"
                    },
                    "topics": {
                        "type": "array",
                        "items": {"type": "string"},
                        "description": "List of key topics mentioned"
                    }
                },
                "required": ["title", "author", "topics"]
            }
        }
    }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["Then you'd call Claude with your data and force it to use the tool. Our ",(0,n.jsx)(r.code,{children:"chat"})," helper takes the tool name directly as its ",(0,n.jsx)(r.code,{children:"tool_choice"})," argument, so you don't have to build the nested ",(0,n.jsx)(r.code,{children:"toolChoice"})," object yourself:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`messages = []
add_user_message(messages, f"""
Analyze the article below and extract key data. Then call the article_details tool.

<article_text>
{article_text}
</article_text>
""")

result = chat(messages, tools=[article_details_schema], tool_choice="article_details")
`})}),`
`,(0,n.jsx)(r.p,{children:"Claude will respond with a tool use message containing the extracted data in the exact format you specified. The tool call arguments will contain your structured JSON data, ready to use in your application."}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits",children:"Key Benefits"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"More reliable than prompt-based extraction"}),`
`,(0,n.jsx)(r.li,{children:"Guaranteed structure matching your schema"}),`
`,(0,n.jsx)(r.li,{children:"No need for message pre-fills or stop sequences"}),`
`,(0,n.jsx)(r.li,{children:"Built-in validation through the tool schema"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The main tradeoff is complexity - you need to write detailed schemas and handle tool responses. But when you need consistent, reliable structured output, tools are the way to go."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};