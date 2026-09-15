import{Gp as e,qp as t}from"../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:'When building applications with multiple tools, you need to handle scenarios where Claude might need to call several tools in sequence to answer a single user question. For example, if a user asks "What day is 103 days from today?", Claude needs to first get the current date, then add 103 days to it.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b0e37c02f440.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This creates a multi-turn conversation pattern where Claude makes multiple tool requests before providing a final answer. Your application needs to handle this automatically."}),`
`,(0,n.jsx)(r.h2,{id:"the-multi-turn-tool-pattern",children:"The Multi-Turn Tool Pattern"}),`
`,(0,n.jsx)(r.p,{children:"Here's what happens behind the scenes when Claude needs multiple tools:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:'User asks: "What day is 103 days from today?"'}),`
`,(0,n.jsxs)(r.li,{children:["Claude responds with a tool use block requesting ",(0,n.jsx)(r.code,{children:"get_current_datetime"})]}),`
`,(0,n.jsx)(r.li,{children:"Your server calls the function and returns the result"}),`
`,(0,n.jsxs)(r.li,{children:["Claude realizes it needs more information and requests ",(0,n.jsx)(r.code,{children:"add_duration_to_datetime"})]}),`
`,(0,n.jsx)(r.li,{children:"Your server calls that function and returns the result"}),`
`,(0,n.jsx)(r.li,{children:"Claude now has enough information to provide the final answer"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1af13eec2b4e.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"building-a-conversation-loop",children:"Building a Conversation Loop"}),`
`,(0,n.jsx)(r.p,{children:"To handle this pattern, you need a conversation loop that continues until Claude stops requesting tools:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_conversation(messages):
    while True:
        response = chat(messages)

        add_assistant_message(messages, response)

        # Pseudo code
        if response isn't asking for a tool:
            break

        tool_result_blocks = run_tools(response)
        add_user_message(messages, tool_result_blocks)
        
    return messages
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f34e1f4fc8ab.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"refactoring-helper-functions",children:"Refactoring Helper Functions"}),`
`,(0,n.jsx)(r.p,{children:"Before implementing the conversation loop, you need to update your helper functions to handle multiple message blocks properly."}),`
`,(0,n.jsx)(r.h3,{id:"updating-message-handlers",children:"Updating Message Handlers"}),`
`,(0,n.jsxs)(r.p,{children:["Your ",(0,n.jsx)(r.code,{children:"add_user_message"})," and ",(0,n.jsx)(r.code,{children:"add_assistant_message"})," functions currently assume you're always working with plain text. Update them to handle full message objects:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from anthropic.types import Message

def add_user_message(messages, message):
    user_message = {
        "role": "user",
        "content": message.content if isinstance(message, Message) else message
    }
    messages.append(user_message)
`})}),`
`,(0,n.jsx)(r.p,{children:"This allows you to pass in either a string, a list of blocks, or a complete message object."}),`
`,(0,n.jsx)(r.h3,{id:"updating-the-chat-function",children:"Updating the Chat Function"}),`
`,(0,n.jsx)(r.p,{children:"Modify your chat function to accept a list of tools and return the full message instead of just text:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chat(messages, system=None, temperature=1.0, stop_sequences=[], tools=None):
    params = {
        "model": model,
        "max_tokens": 1000,
        "messages": messages,
        "temperature": temperature,
        "stop_sequences": stop_sequences,
    }
    
    if tools:
        params["tools"] = tools
        
    if system:
        params["system"] = system
        
    message = client.messages.create(**params)
    return message
`})}),`
`,(0,n.jsx)(r.h3,{id:"extracting-text-from-messages",children:"Extracting Text from Messages"}),`
`,(0,n.jsx)(r.p,{children:"Since you're now returning full message objects, create a helper to extract text when needed:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def text_from_message(message):
    return "\\n".join(
        [block.text for block in message.content if block.type == "text"]
    )
`})}),`
`,(0,n.jsx)(r.p,{children:"This function finds all text blocks in a message and joins them together, which is useful when you need to display the final response to users."}),`
`,(0,n.jsx)(r.h2,{id:"key-improvements",children:"Key Improvements"}),`
`,(0,n.jsx)(r.p,{children:"These refactoring steps prepare your code for robust tool handling:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Flexible message handling"})," - Your helper functions can now work with different message formats"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tool support in chat"})," - The chat function can receive and pass through tool schemas"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Full message returns"})," - You get complete message objects instead of just text, preserving all blocks"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Text extraction utility"})," - Easy way to get readable text from complex messages"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"With these foundations in place, you're ready to implement the conversation loop that handles multiple tool calls automatically, creating a seamless experience where Claude can use as many tools as needed to answer user questions."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};