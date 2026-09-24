import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When Claude responds with a tool use request, your server needs to actually run the requested tool and send the results back. This step involves extracting tool use parts from Claude's response, executing the appropriate functions, and formatting the results properly."}),`
`,(0,n.jsx)(r.h2,{id:"handling-multiple-tool-requests",children:"Handling Multiple Tool Requests"}),`
`,(0,n.jsx)(r.p,{children:"Claude can send multiple tool use parts in a single response. Your code needs to handle this possibility defensively. An assistant message might contain a text part followed by one, two, or even more tool use parts."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e9f8f672e550.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The flow works like this: Claude sends a request with JSON schema, receives a tool use part, then your server runs the tool and sends back a tool result part for Claude to provide a final response."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b14d578714a8.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"extracting-tool-use-parts",children:"Extracting Tool Use Parts"}),`
`,(0,n.jsx)(r.p,{children:"First, create a function to process all the parts returned from a chat request:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_tools(parts):
    tool_requests = [part for part in parts if "toolUse" in part]
    tool_result_parts = []
    
    for tool_request in tool_requests:
        tool_use_id = tool_request["toolUse"]["toolUseId"]
        tool_name = tool_request["toolUse"]["name"]
        tool_input = tool_request["toolUse"]["input"]
`})}),`
`,(0,n.jsx)(r.p,{children:'This comprehension filters the parts list to only include dictionaries that contain a "toolUse" key, ignoring text parts.'}),`
`,(0,n.jsx)(r.h2,{id:"running-the-actual-tools",children:"Running the Actual Tools"}),`
`,(0,n.jsx)(r.p,{children:"Create a helper function to execute the requested tool:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_tool(tool_name, tool_input):
    if tool_name == "get_current_datetime":
        return get_current_datetime(**tool_input)
    else:
        raise Exception(f"Unknown tool name: {tool_name}")
`})}),`
`,(0,n.jsxs)(r.p,{children:["The key detail here is using ",(0,n.jsx)(r.code,{children:"**tool_input"})," to splat the dictionary of arguments into your tool function. Claude always returns arguments as a dictionary object, so you need to unpack it properly."]}),`
`,(0,n.jsx)(r.h2,{id:"creating-tool-result-parts",children:"Creating Tool Result Parts"}),`
`,(0,n.jsx)(r.p,{children:"After running a tool, you need to format the response as a tool result part:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9786d7c8d5df.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Tool result parts require three key properties:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"toolUseId"})," - Must match the original tool use part's ID"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"content"})," - The output from your tool, serialized as a string"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"status"}),' - Either "success" or "error"']}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"understanding-tool-use-ids",children:"Understanding Tool Use IDs"}),`
`,(0,n.jsx)(r.p,{children:"The tool use ID system becomes important when Claude requests multiple tools in parallel. For example, if Claude wants to run a calculator tool twice:"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.img,{src:"./eabb90a73e77.png",alt:""})," ",(0,n.jsx)(r.img,{src:"./7bf844674b47.png",alt:""})]}),`
`,(0,n.jsx)(r.p,{children:'Each tool use gets a unique ID (like "ab3" and "po9"), and your tool results must include the matching IDs so Claude knows which result corresponds to which request.'}),`
`,(0,n.jsx)(r.h2,{id:"error-handling",children:"Error Handling"}),`
`,(0,n.jsx)(r.p,{children:"Wrap your tool execution in try-catch blocks. Claude is intelligent about tool errors and might adjust its approach if you return proper error information:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`try:
    tool_output = run_tool(tool_name, tool_input)
    tool_result_part = {
        "toolResult": {
            "toolUseId": tool_use_id,
            "content": [{"text": json.dumps(tool_output)}],
            "status": "success"
        }
    }
except Exception as e:
    tool_result_part = {
        "toolResult": {
            "toolUseId": tool_use_id,
            "content": [{"text": f"Error: {e}"}],
            "status": "error"
        }
    }
`})}),`
`,(0,n.jsx)(r.h2,{id:"complete-implementation",children:"Complete Implementation"}),`
`,(0,n.jsx)(r.p,{children:"Here's the full function that processes tool requests and returns formatted results:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_tools(parts):
    tool_requests = [part for part in parts if "toolUse" in part]
    tool_result_parts = []
    
    for tool_request in tool_requests:
        tool_use_id = tool_request["toolUse"]["toolUseId"]
        tool_name = tool_request["toolUse"]["name"]
        tool_input = tool_request["toolUse"]["input"]
        
        try:
            tool_output = run_tool(tool_name, tool_input)
            tool_result_part = {
                "toolResult": {
                    "toolUseId": tool_use_id,
                    "content": [{"text": json.dumps(tool_output)}],
                    "status": "success"
                }
            }
        except Exception as e:
            tool_result_part = {
                "toolResult": {
                    "toolUseId": tool_use_id,
                    "content": [{"text": f"Error: {e}"}],
                    "status": "error"
                }
            }
        
        tool_result_parts.append(tool_result_part)
    
    return tool_result_parts
`})}),`
`,(0,n.jsx)(r.p,{children:"Once you have the tool result parts, you can send them back to Claude in your next chat request, completing the tool use cycle."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};