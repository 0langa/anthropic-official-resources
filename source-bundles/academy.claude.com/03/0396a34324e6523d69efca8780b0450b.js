import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"After Claude requests a tool call, you need to execute the function and send the results back. This completes the tool use workflow by providing Claude with the information it requested."}),`
`,(0,n.jsx)(r.h2,{id:"running-the-tool-function",children:"Running the Tool Function"}),`
`,(0,n.jsx)(r.p,{children:"When Claude responds with a tool use block, you extract the input parameters and call your function. Here's how to access the tool parameters:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`# Access the tool use block
tool_use_block = response.content[1]

# Get the input parameters
input_params = tool_use_block.input

# Call your function with the parameters
result = get_current_datetime(**input_params)
`})}),`
`,(0,n.jsxs)(r.p,{children:["The double asterisk (",(0,n.jsx)(r.code,{children:"**"}),") unpacks the dictionary into keyword arguments that your function expects."]}),`
`,(0,n.jsx)(r.h2,{id:"tool-result-block",children:"Tool Result Block"}),`
`,(0,n.jsx)(r.p,{children:"After running the tool, you send the results back to Claude using a tool result block. This block has several important properties:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9035ae652bff.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"tool_use_id"})," - Must match the ID from the original tool use block"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"content"})," - The output from your tool function, converted to a string"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"is_error"})," - Set to true if an error occurred during execution"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"handling-multiple-tool-calls",children:"Handling Multiple Tool Calls"}),`
`,(0,n.jsx)(r.p,{children:`Claude can request multiple tool calls in a single response. For example, if a user asks "What's 10 + 10 and what's 30 + 30?", Claude might send two separate tool use blocks:`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./eec25fde47ed.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Each tool use block gets a unique ID, and you must match these IDs when sending back results:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./72993e2545b7.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This ID system ensures Claude can correctly match each result with its corresponding request, even if the results arrive in a different order."}),`
`,(0,n.jsx)(r.h2,{id:"sending-the-follow-up-request",children:"Sending the Follow-up Request"}),`
`,(0,n.jsx)(r.p,{children:"Your follow-up request to Claude must include the complete conversation history plus the new tool result:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`messages.append({
    "role": "user",
    "content": [{
        "type": "tool_result",
        "tool_use_id": response.content[1].id,
        "content": result,
        "is_error": False
    }]
})
`})}),`
`,(0,n.jsx)(r.p,{children:"The conversation flow looks like this:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./38aff0f2b767.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Remember to include the tool schema in your follow-up request, even though Claude probably won't need to call tools again. Claude needs the schema to understand the tool references in the conversation history."}),`
`,(0,n.jsx)(r.h2,{id:"complete-workflow",children:"Complete Workflow"}),`
`,(0,n.jsx)(r.p,{children:"Here's the full process:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"User asks a question requiring tool use"}),`
`,(0,n.jsx)(r.li,{children:"Claude responds with a tool use block"}),`
`,(0,n.jsx)(r.li,{children:"You execute the requested tool function"}),`
`,(0,n.jsx)(r.li,{children:"You send a follow-up request with the tool result"}),`
`,(0,n.jsx)(r.li,{children:"Claude provides a final answer using the tool output"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The final request includes your complete message history, the tool result block, and the tool schema. Claude then responds with a regular text message that incorporates the information from your tool execution."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};