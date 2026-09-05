import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When Claude decides to use a tool, it returns a special response structure that requires careful handling. Understanding this response format and implementing proper conversation management is crucial for building robust tool-enabled applications."}),`
`,(0,n.jsx)(r.h2,{id:"tool-choice-configuration",children:"Tool Choice Configuration"}),`
`,(0,n.jsxs)(r.p,{children:["Before diving into responses, it's worth understanding how to control when Claude uses tools. The ",(0,n.jsx)(r.code,{children:"toolChoice"})," parameter gives you three options:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d5cc2db705eb.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"auto"})," - Claude decides whether to use a tool (default behavior)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"any"})," - Claude must use a tool but can choose which one"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"specific tool"})," - Force Claude to use a particular tool by name"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The third option is especially useful for testing when you want to ensure Claude calls a specific function."}),`
`,(0,n.jsx)(r.h2,{id:"multi-part-message-structure",children:"Multi-Part Message Structure"}),`
`,(0,n.jsx)(r.p,{children:"When Claude wants to use a tool, it returns an assistant message with multiple content parts instead of just text:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c8f7e8762402.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The response contains two parts:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Text Part"}),' - Human-readable explanation like "I can help you find out the current time. Let me find that information for you"']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"ToolUse Part"})," - Structured data telling you which tool to run and with what arguments"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-tooluse-part",children:"Understanding the ToolUse Part"}),`
`,(0,n.jsx)(r.p,{children:"The ToolUse part contains three key pieces of information:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0f51c3d73779.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"toolUseId"})," - A unique identifier you'll need when sending back the tool result"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"name"})," - The exact tool name from your JSON schema that Claude wants to call"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"input"})," - A dictionary of arguments Claude wants to pass to your tool function"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"conversation-flow-with-tools",children:"Conversation Flow with Tools"}),`
`,(0,n.jsx)(r.p,{children:"Tool usage follows a specific conversation pattern that requires maintaining complete message history:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9eccbcb4136e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When you receive a tool use request, you need to:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Extract the tool information from the ToolUse part"}),`
`,(0,n.jsx)(r.li,{children:"Run your actual tool function"}),`
`,(0,n.jsx)(r.li,{children:"Send back a ToolResult message along with the complete conversation history"}),`
`,(0,n.jsx)(r.li,{children:"Include the original user message and the assistant's tool use message in your next request"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"updating-helper-functions",children:"Updating Helper Functions"}),`
`,(0,n.jsx)(r.p,{children:"To handle multi-part messages properly, you'll need to update your message handling functions. Here's how to make your functions flexible enough to handle both simple text and complex multi-part content:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def add_user_message(messages, content):
    if isinstance(content, str):
        user_message = {"role": "user", "content": [{"text": content}]}
    else:
        user_message = {"role": "user", "content": content}
    messages.append(user_message)

def add_assistant_message(messages, content):
    if isinstance(content, str):
        assistant_message = {"role": "assistant", "content": [{"text": content}]}
    else:
        assistant_message = {"role": "assistant", "content": content}
    messages.append(assistant_message)
`})}),`
`,(0,n.jsx)(r.p,{children:"You'll also want to update your chat function to return both the text and the full parts list:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chat(messages, system=None, temperature=1.0, stop_sequences=[], tools=None):
    # ... existing setup code ...
    
    response = client.converse(**params)
    
    text = response["output"]["message"]["content"][0]["text"]
    parts = response["output"]["message"]["content"]
    
    return text, parts
`})}),`
`,(0,n.jsx)(r.h2,{id:"checking-the-stop-reason",children:"Checking the Stop Reason"}),`
`,(0,n.jsxs)(r.p,{children:["Claude's response also includes a top-level ",(0,n.jsx)(r.code,{children:"stopReason"})," field. When it equals ",(0,n.jsx)(r.code,{children:'"tool_use"'}),", Claude wants to call a tool rather than just providing a text response — that's your signal to extract the tool information and execute the requested function. The ",(0,n.jsx)(r.code,{children:"chat()"})," helper above doesn't surface this field yet, so for now you can detect tool use by checking the returned parts list for an entry with a ",(0,n.jsx)(r.code,{children:"toolUse"})," key. You'll extend ",(0,n.jsx)(r.code,{children:"chat()"})," to return ",(0,n.jsx)(r.code,{children:"stopReason"})," directly in a later lesson."]}),`
`,(0,n.jsx)(r.p,{children:"With these patterns in place, you're ready to handle Claude's tool use requests and maintain proper conversation flow throughout multi-turn tool interactions."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};