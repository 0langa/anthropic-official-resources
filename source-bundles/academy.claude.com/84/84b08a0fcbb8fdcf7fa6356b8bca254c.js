import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:`The code we've written so far simulates a very simple exchange with Claude. But what happens when you want to continue a conversation? When you ask a follow-up question like "And 3 more?" after asking "What's 1+1?", you might expect Claude to understand you're asking about adding 3 to the previous result of 2.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f29c60433e17.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"However, there's something critical you need to understand about the Bedrock API and Claude itself."}),`
`,(0,n.jsx)(r.h2,{id:"no-message-storage",children:"No Message Storage"}),`
`,(0,n.jsx)(r.p,{children:"Bedrock and Claude do not store any messages. None of the messages you send get stored, and none of the responses you receive are stored either. Each API call is completely independent."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e16ef969c212.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"To have a conversation with multiple messages that maintain context, you need to:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Manually maintain a list of all messages in your code"}),`
`,(0,n.jsx)(r.li,{children:"Provide that entire list of messages with each follow-up request"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"why-context-matters",children:"Why Context Matters"}),`
`,(0,n.jsx)(r.p,{children:`Let's see what happens without proper context. If you send just "And 3 more?" as a standalone message, Claude has no idea what you're referring to. It will do its best to respond, but the answer won't make sense because it lacks the context of your previous conversation.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e8cb9ad98933.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`When you send only the follow-up question, Claude sees just that isolated message and tries to respond without knowing about the previous "What's 1+1?" exchange.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6e2e0f684037.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"building-conversation-context",children:"Building Conversation Context"}),`
`,(0,n.jsx)(r.p,{children:"To maintain context, you need to include the full conversation history in each request. Here's how it works:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./513d4d190ef8.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Your message list should contain all previous exchanges - both user messages and assistant responses. When you send this complete context, Claude can understand that "And 3 more?" refers to adding 3 to the previous result of 2.'}),`
`,(0,n.jsx)(r.h2,{id:"helper-functions-for-message-management",children:"Helper Functions for Message Management"}),`
`,(0,n.jsx)(r.p,{children:"To make conversation management easier, you can create helper functions:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def add_user_message(messages, text):
    user_message = {
        "role": "user",
        "content": [
            {"text": text}
        ]
    }
    messages.append(user_message)

def add_assistant_message(messages, text):
    assistant_message = {
        "role": "assistant", 
        "content": [
            {"text": text}
        ]
    }
    messages.append(assistant_message)

def chat(messages):
    response = client.converse(
        modelId=model_id,
        messages=messages
    )
    return response["output"]["message"]["content"][0]["text"]
`})}),`
`,(0,n.jsx)(r.h2,{id:"implementing-multi-turn-conversations",children:"Implementing Multi-Turn Conversations"}),`
`,(0,n.jsx)(r.p,{children:"Here's how to build a conversation step by step:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`# Make a starting list of messages
messages = []

# Add in the initial user question of "What's 1+1?"
add_user_message(messages, "What's 1+1?")

# Pass the list of messages into chat to get an answer
answer = chat(messages)

# Take the answer and add it as an assistant message into our list
add_assistant_message(messages, answer)

# Add in the user's followup question
add_user_message(messages, "And 3 more added to that?")

# Call chat again with the list of messages to get a final answer
answer = chat(messages)
print(answer)
`})}),`
`,(0,n.jsx)(r.p,{children:'This approach ensures Claude has the full context and can respond appropriately: "Starting with the result of 1+1 = 2, if we add 3 more to that, we get: 2 + 3 = 5"'}),`
`,(0,n.jsx)(r.h2,{id:"message-role-alternation",children:"Message Role Alternation"}),`
`,(0,n.jsx)(r.p,{children:"When building your message list, always ensure that message roles alternate properly:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a6c3f43aa044.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Your conversation should follow the pattern: user → assistant → user → assistant. Never have two user messages in a row or two assistant messages in a row. This alternating pattern is required by the API and reflects natural conversation flow."}),`
`,(0,n.jsx)(r.p,{children:"While this manual message management might seem tedious at first, you'll quickly get used to it. This pattern is fundamental to building any application that needs to maintain conversational context with Claude."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};