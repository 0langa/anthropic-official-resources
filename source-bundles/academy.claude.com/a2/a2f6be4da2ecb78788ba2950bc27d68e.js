import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Building a conversation system with tools requires implementing a loop that keeps calling Claude until it stops requesting tool usage. When Claude no longer asks for tools, that signals it has a final response ready for the user."}),`
`,(0,n.jsx)(r.h2,{id:"detecting-tool-requests",children:"Detecting Tool Requests"}),`
`,(0,n.jsxs)(r.p,{children:["The key to knowing whether Claude wants to use a tool lies in the ",(0,n.jsx)(r.code,{children:"stop_reason"})," field of the response message. When Claude decides it needs to call a tool, this field gets set to ",(0,n.jsx)(r.code,{children:'"tool_use"'}),". This gives us a clean way to check if we need to continue the conversation loop:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`if response.stop_reason != "tool_use":
    break  # Claude is done, no more tools needed
`})}),`
`,(0,n.jsx)(r.h2,{id:"the-conversation-loop",children:"The Conversation Loop"}),`
`,(0,n.jsx)(r.p,{children:"The main conversation function follows a simple pattern:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_conversation(messages):
    while True:
        response = chat(messages, tools=[get_current_datetime_schema])
        add_assistant_message(messages, response)
        print(text_from_message(response))
        
        if response.stop_reason != "tool_use":
            break
            
        tool_results = run_tools(response)
        add_user_message(messages, tool_results)
    
    return messages
`})}),`
`,(0,n.jsx)(r.p,{children:"This loop continues until Claude provides a final answer without requesting any tools."}),`
`,(0,n.jsx)(r.h2,{id:"handling-multiple-tool-calls",children:"Handling Multiple Tool Calls"}),`
`,(0,n.jsx)(r.p,{children:"Claude can request multiple tools in a single response. The message content contains a list of blocks, and we need to process each tool use block separately:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./619afcdd851e.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"run_tools"})," function handles this by filtering for tool use blocks and processing each one:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_tools(message):
    tool_requests = [
        block for block in message.content if block.type == "tool_use"
    ]
    tool_result_blocks = []
    
    for tool_request in tool_requests:
        # Process each tool request...
`})}),`
`,(0,n.jsx)(r.h2,{id:"tool-result-blocks",children:"Tool Result Blocks"}),`
`,(0,n.jsx)(r.p,{children:"For each tool use block, we need to create a corresponding tool result block. These blocks have specific required fields:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./20a806103af1.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The tool result block must include the same ID as the original tool use block, but in the ",(0,n.jsx)(r.code,{children:"tool_use_id"})," field:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`tool_result_block = {
    "type": "tool_result",
    "tool_use_id": tool_request.id,
    "content": json.dumps(tool_output),
    "is_error": False
}
`})}),`
`,(0,n.jsx)(r.h2,{id:"error-handling",children:"Error Handling"}),`
`,(0,n.jsx)(r.p,{children:"Robust tool execution requires handling potential errors. When a tool fails, we still need to return a tool result block, but with error information:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`try:
    tool_output = run_tool(tool_request.name, tool_request.input)
    tool_result_block = {
        "type": "tool_result",
        "tool_use_id": tool_request.id,
        "content": json.dumps(tool_output),
        "is_error": False
    }
except Exception as e:
    tool_result_block = {
        "type": "tool_result", 
        "tool_use_id": tool_request.id,
        "content": f"Error: {e}",
        "is_error": True
    }
`})}),`
`,(0,n.jsx)(r.h2,{id:"scalable-tool-routing",children:"Scalable Tool Routing"}),`
`,(0,n.jsx)(r.p,{children:"To support multiple tools, create a separate routing function instead of hardcoding tool names:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_tool(tool_name, tool_input):
    if tool_name == "get_current_datetime":
        return get_current_datetime(**tool_input)
    elif tool_name == "other_tool":
        return other_tool_function(**tool_input)
    # Add more tools as needed
`})}),`
`,(0,n.jsx)(r.p,{children:"This approach makes it easy to add new tools without modifying the core conversation logic."}),`
`,(0,n.jsx)(r.h2,{id:"complete-workflow",children:"Complete Workflow"}),`
`,(0,n.jsx)(r.p,{children:"The complete multi-turn conversation works like this:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Send user message to Claude with available tools"}),`
`,(0,n.jsx)(r.li,{children:"Claude responds with text and/or tool use blocks"}),`
`,(0,n.jsx)(r.li,{children:"Execute any requested tools and create tool result blocks"}),`
`,(0,n.jsx)(r.li,{children:"Send tool results back to Claude as a user message"}),`
`,(0,n.jsx)(r.li,{children:"Repeat until Claude provides a final response without tool requests"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This creates a seamless experience where Claude can make multiple tool calls across several conversation turns to gather all the information needed before providing a comprehensive final answer to the user."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};