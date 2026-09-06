import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"After Claude requests a tool call, you need to execute the function and send the results back. This completes the tool use workflow by providing Claude with the information it requested."}),`
`,(0,n.jsx)(r.h2,{id:"running-the-tool-function",children:"Running the Tool Function"}),`
`,(0,n.jsx)(r.p,{children:"When Claude responds with a tool use block, you extract the input parameters and call your function. Here's how to access the tool parameters:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`response.content[1].input
`})}),`
`,(0,n.jsx)(r.p,{children:"This gives you a dictionary of the arguments Claude wants to pass to your function. Since your function expects keyword arguments rather than a dictionary, you use Python's unpacking syntax:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`get_current_datetime(**response.content[1].input)
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e2516a817e8c.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"tool-result-block",children:"Tool Result Block"}),`
`,(0,n.jsx)(r.p,{children:"After running the tool function, you need to send the results back to Claude using a tool result block. This block goes inside a user message and tells Claude what happened when you executed the tool."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9035ae652bff.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The tool result block has several important properties:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"tool_use_id"})," - Must match the id of the ToolUse block that this ToolResult corresponds to"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"content"})," - Output from running your tool, serialized as a string"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"is_error"})," - True if an error occurred"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"handling-multiple-tool-calls",children:"Handling Multiple Tool Calls"}),`
`,(0,n.jsx)(r.p,{children:`Claude can request multiple tool calls in a single response. For example, if a user asks "What's 10 + 10 and what's 30 + 30?", Claude might respond with two separate ToolUse blocks.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./eec25fde47ed.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Each tool call gets a unique ID, and you must match these IDs when sending back results. This ensures Claude knows which result corresponds to which request, even if the results arrive in a different order."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./72993e2545b7.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"building-the-follow-up-request",children:"Building the Follow-up Request"}),`
`,(0,n.jsx)(r.p,{children:"Your follow-up request to Claude must include the complete conversation history plus the new tool result. Here's the structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`messages.append({
    "role": "user",
    "content": [{
        "type": "tool_result",
        "tool_use_id": response.content[1].id,
        "content": "15:04:22",
        "is_error": False
    }]
})
`})}),`
`,(0,n.jsx)(r.p,{children:"The complete message history now contains:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Original user message"}),`
`,(0,n.jsx)(r.li,{children:"Assistant message with tool use block"}),`
`,(0,n.jsx)(r.li,{children:"User message with tool result block"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"making-the-final-request",children:"Making the Final Request"}),`
`,(0,n.jsx)(r.p,{children:"When sending the follow-up request, you must still include the tool schema even though you're not expecting Claude to make another tool call. Claude needs the schema to understand the tool references in your conversation history."}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`client.messages.create(
    model=model,
    max_tokens=1000,
    messages=messages,
    tools=[get_current_datetime_schema]
)
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./38aff0f2b767.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude will then respond with a final message that incorporates the tool results into a natural response for the user. The tool use workflow is now complete - you've successfully enabled Claude to access real-time information through your custom function."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};