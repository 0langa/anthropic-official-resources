import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When working with Claude's tool calling capabilities, you might notice that Claude can include multiple tool use blocks in a single assistant message. This allows Claude to run several tools in parallel rather than making separate requests for each one. However, getting Claude to actually do this consistently can be challenging in practice."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-multiple-tool-calls",children:"The Problem with Multiple Tool Calls"}),`
`,(0,n.jsx)(r.p,{children:"Let's say you ask Claude to set two reminders for the same date. Theoretically, Claude should be able to send back a single response containing two tool use blocks - one for each reminder. But in reality, Claude often sends separate responses instead."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1914514b777e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"What typically happens is Claude makes the first tool call, waits for the result, then makes the second tool call in a follow-up message. This creates unnecessary back-and-forth communication when the operations could have been done simultaneously."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./60d1ad0ae8be.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-batch-tool-solution",children:"The Batch Tool Solution"}),`
`,(0,n.jsx)(r.p,{children:'The solution is to implement a "batch tool" - a special tool that accepts a list of other tool calls to execute simultaneously. This is essentially a workaround that tricks Claude into making multiple tool calls at once.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f59259958953.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how it works:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You define a batch tool schema that tells Claude it can run multiple other tools in parallel"}),`
`,(0,n.jsx)(r.li,{children:"Instead of calling tools directly, Claude calls the batch tool with a list of tool invocations"}),`
`,(0,n.jsx)(r.li,{children:"Your code processes this list and executes each tool call"}),`
`,(0,n.jsx)(r.li,{children:"You return the combined results back to Claude"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"implementing-the-batch-tool-schema",children:"Implementing the Batch Tool Schema"}),`
`,(0,n.jsx)(r.p,{children:"The batch tool schema defines how Claude should structure its requests when it wants to run multiple tools:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`batch_tool_schema = {
    "name": "batch_tool",
    "description": "Invoke multiple other tool calls simultaneously",
    "input_schema": {
        "type": "object",
        "properties": {
            "invocations": {
                "type": "array",
                "description": "The tool calls to invoke",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "The name of the tool to invoke"
                        },
                        "arguments": {
                            "type": "object",
                            "description": "The arguments to pass to the tool"
                        }
                    }
                }
            }
        }
    }
}
`})}),`
`,(0,n.jsx)(r.h2,{id:"processing-batch-tool-calls",children:"Processing Batch Tool Calls"}),`
`,(0,n.jsx)(r.p,{children:"When Claude uses the batch tool, you need to process the list of invocations and execute each one. Here's the implementation:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_batch(invocations=[]):
    batch_output = []
    
    for invocation in invocations:
        name = invocation["name"]
        args = json.loads(invocation["arguments"])
        
        tool_output = run_tool(name, args)
        
        batch_output.append({
            "tool_name": name,
            "output": tool_output
        })
    
    return batch_output
`})}),`
`,(0,n.jsx)(r.p,{children:"You'll also need to update your main tool routing function to handle batch tool calls:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_tool(tool_name, tool_input):
    if tool_name == "get_current_datetime":
        return get_current_datetime(**tool_input)
    elif tool_name == "add_duration_to_datetime":
        return add_duration_to_datetime(**tool_input)
    elif tool_name == "set_reminder":
        return set_reminder(**tool_input)
    elif tool_name == "batch_tool":
        return run_batch(**tool_input)
`})}),`
`,(0,n.jsx)(r.h2,{id:"results",children:"Results"}),`
`,(0,n.jsx)(r.p,{children:"With the batch tool implemented, Claude is much more likely to group related operations together. Instead of making separate requests for each reminder, Claude will use the batch tool to set both reminders simultaneously."}),`
`,(0,n.jsx)(r.p,{children:"The conversation flow becomes much cleaner - one request from the user, one response from Claude with the batch tool call, and one follow-up with all the results. This reduces latency and makes your application more efficient."}),`
`,(0,n.jsx)(r.p,{children:"While it might seem like a workaround (and it is), the batch tool pattern is an effective way to encourage Claude to think about operations that can be parallelized and execute them more efficiently."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};