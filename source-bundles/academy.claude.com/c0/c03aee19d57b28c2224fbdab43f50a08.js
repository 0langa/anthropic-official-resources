import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When working with Claude's tool functionality, you'll encounter a new type of response structure that's different from the simple text responses you've seen before. Instead of just getting back a single text block, Claude can now return multi-block messages that contain both text and tool usage information."}),`
`,(0,n.jsx)(r.h2,{id:"making-tool-enabled-api-calls",children:"Making Tool-Enabled API Calls"}),`
`,(0,n.jsxs)(r.p,{children:["To enable Claude to use tools, you need to include a ",(0,n.jsx)(r.code,{children:"tools"})," parameter in your API call. Here's how to structure the request:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`messages = []
messages.append({
    "role": "user",
    "content": "What is the exact time, formatted as HH:MM:SS?"
})

response = client.messages.create(
    model=model,
    max_tokens=1000,
    messages=messages,
    tools=[get_current_datetime_schema],
)
`})}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"tools"})," parameter takes a list of JSON schemas that describe the available functions Claude can call."]}),`
`,(0,n.jsx)(r.h2,{id:"understanding-multi-block-messages",children:"Understanding Multi-Block Messages"}),`
`,(0,n.jsx)(r.p,{children:"When Claude decides to use a tool, it returns an assistant message with multiple blocks in the content list. This is a significant change from the simple text-only responses you've worked with before."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6214bef40306.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"A multi-block message typically contains:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Text Block"}),' - Human-readable text explaining what Claude is doing (like "I can help you find out the current time. Let me find that information for you")']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"ToolUse Block"})," - Instructions for your code about which tool to call and what parameters to use"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The ToolUse block includes:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"An ID for tracking the tool call"}),`
`,(0,n.jsx)(r.li,{children:'The name of the function to call (like "get_current_datetime")'}),`
`,(0,n.jsx)(r.li,{children:"Input parameters formatted according to your JSON schema"}),`
`,(0,n.jsx)(r.li,{children:'The type designation "tool_use"'}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"handling-message-history-with-multi-block-content",children:"Handling Message History with Multi-Block Content"}),`
`,(0,n.jsx)(r.p,{children:"Here's the critical part: Claude doesn't store conversation history, so you must manage it manually. When working with tool responses, you need to preserve the entire content structure, including all blocks."}),`
`,(0,n.jsx)(r.p,{children:"Instead of just extracting text, you need to append the complete response content:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`messages.append({
    "role": "assistant",
    "content": response.content
})
`})}),`
`,(0,n.jsx)(r.p,{children:"This preserves both the text block and the tool use block, maintaining the full conversation context for future API calls."}),`
`,(0,n.jsx)(r.h2,{id:"the-complete-flow",children:"The Complete Flow"}),`
`,(0,n.jsx)(r.p,{children:"The tool usage process follows this pattern:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9ec6ca3a38f9.png",alt:""})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Send user message with tool schema to Claude"}),`
`,(0,n.jsx)(r.li,{children:"Receive multi-block assistant message (text + tool use)"}),`
`,(0,n.jsx)(r.li,{children:"Extract tool call information and execute the function"}),`
`,(0,n.jsx)(r.li,{children:"Send tool result back to Claude with complete message history"}),`
`,(0,n.jsx)(r.li,{children:"Receive final response from Claude"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Each step requires careful handling of the message structure to maintain conversation continuity. The key insight is that tool-enabled conversations involve more complex message formats, but the fundamental principle of maintaining complete message history remains the same."}),`
`,(0,n.jsx)(r.h2,{id:"updating-helper-functions",children:"Updating Helper Functions"}),`
`,(0,n.jsxs)(r.p,{children:["If you've been using helper functions like ",(0,n.jsx)(r.code,{children:"add_user_message"})," and ",(0,n.jsx)(r.code,{children:"add_assistant_message"}),", you'll need to update them to handle multi-block content. The current versions likely only support single text blocks, but now they need to accommodate the more complex content structures that include tool use blocks."]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};