import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Building multi-turn conversations with tool use requires handling different response types from Claude. When Claude responds, it might need to use a tool, or it might provide a direct answer. Your code needs to handle both scenarios gracefully."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-simple-tool-integration",children:"The Problem with Simple Tool Integration"}),`
`,(0,n.jsx)(r.p,{children:`If you just add tool results to every conversation, you'll run into issues. When Claude answers a simple question like "What is 1+1?", it doesn't need any tools. But if your code always tries to process tool results, you'll end up adding empty messages to your conversation history.`}),`
`,(0,n.jsxs)(r.p,{children:["The solution is to check the ",(0,n.jsx)(r.code,{children:"stop_reason"})," that comes back with every Claude response. This tells you why Claude stopped generating - whether it finished naturally or because it wants to use a tool."]}),`
`,(0,n.jsx)(r.h2,{id:"stop-reasons",children:"Stop Reasons"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a461bfa198f9.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude can stop for several reasons:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'"tool_use"'})," - The model wants to call a tool"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'"end_turn"'})," - Model finished generating its response"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'"max_tokens"'})," - Hit the output limit"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:'"stop_sequence"'})," - Encountered a stop sequence you provided"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"improving-the-chat-function",children:"Improving the Chat Function"}),`
`,(0,n.jsx)(r.p,{children:"First, update your chat function to return more information. Instead of just returning text and parts separately, return a dictionary with everything you need:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chat(messages, tools=None, system=None, **kwargs):
    # ... existing code ...
    
    return {
        "parts": parts,
        "stop_reason": response["stopReason"],
        "text": "\\n".join([p["text"] for p in parts if "text" in p])
    }
`})}),`
`,(0,n.jsx)(r.p,{children:"This approach extracts all text content from the response parts, which is more robust than assuming the first part is always text."}),`
`,(0,n.jsx)(r.h2,{id:"building-a-conversation-loop",children:"Building a Conversation Loop"}),`
`,(0,n.jsx)(r.p,{children:"Create a function that handles the full conversation flow:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_conversation(messages):
    while True:
        result = chat(messages, tools=[get_current_datetime_schema])
        
        add_assistant_message(messages, result["parts"])
        print(result["text"])
        
        if result["stop_reason"] != "tool_use":
            break
            
        tool_result_parts = run_tools(result["parts"])
        add_user_message(messages, tool_result_parts)
    
    return messages
`})}),`
`,(0,n.jsx)(r.p,{children:"This loop continues until Claude stops for a reason other than tool use. Each iteration:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Sends the current messages to Claude"}),`
`,(0,n.jsx)(r.li,{children:"Adds Claude's response to the message history"}),`
`,(0,n.jsx)(r.li,{children:"Checks if Claude wants to use a tool"}),`
`,(0,n.jsx)(r.li,{children:"If so, runs the tools and adds results back to the conversation"}),`
`,(0,n.jsx)(r.li,{children:"If not, exits the loop"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-implementation",children:"Testing the Implementation"}),`
`,(0,n.jsx)(r.p,{children:"This approach handles both tool-requiring and simple questions:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`# Tool-requiring question
messages = []
add_user_message(messages, "What time is it?")
run_conversation(messages)

# Simple question  
messages = []
add_user_message(messages, "What is 1+1?")
run_conversation(messages)
`})}),`
`,(0,n.jsx)(r.p,{children:"For time questions, Claude will use the datetime tool. For math questions, it responds directly without any tool calls. The conversation loop adapts automatically based on Claude's stop reason."}),`
`,(0,n.jsx)(r.p,{children:"This pattern scales well when you add more tools - the same loop handles any combination of tool use and direct responses, making your conversational AI more robust and natural."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};