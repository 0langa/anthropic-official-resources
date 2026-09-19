import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Adding multiple tools to your Claude implementation becomes straightforward once you have the core tool-handling infrastructure in place. This tutorial shows how to integrate additional tools by following a simple pattern."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a717f46eec75.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-tools-were-adding",children:"The Tools We're Adding"}),`
`,(0,n.jsx)(r.p,{children:"We need three main capabilities for our reminder system:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Get current date time"})," - Claude needs to know the current date and time"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Add duration to date time"})," - Claude isn't perfect with date time addition"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Set a reminder"})," - Need a way to set a reminder"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["The good news is that most of the implementation work is already done. The ",(0,n.jsx)(r.code,{children:"add_duration_to_datetime"})," function and ",(0,n.jsx)(r.code,{children:"set_reminder"})," function are provided, along with their corresponding schemas."]}),`
`,(0,n.jsx)(r.h2,{id:"adding-tools-to-the-conversation",children:"Adding Tools to the Conversation"}),`
`,(0,n.jsxs)(r.p,{children:["First, update the ",(0,n.jsx)(r.code,{children:"run_conversation"})," function to include the new tool schemas in the tools list:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`response = chat(messages, tools=[
    get_current_datetime_schema,
    add_duration_to_datetime_schema,
    set_reminder_schema
])
`})}),`
`,(0,n.jsx)(r.p,{children:"This tells Claude about all three available tools it can use during the conversation."}),`
`,(0,n.jsx)(r.h2,{id:"updating-the-tool-router",children:"Updating the Tool Router"}),`
`,(0,n.jsxs)(r.p,{children:["Next, modify the ",(0,n.jsx)(r.code,{children:"run_tool"})," function to handle the new tool calls. Add elif cases for each new tool:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_tool(tool_name, tool_input):
    if tool_name == "get_current_datetime":
        return get_current_datetime(**tool_input)
    elif tool_name == "add_duration_to_datetime":
        return add_duration_to_datetime(**tool_input)
    elif tool_name == "set_reminder":
        return set_reminder(**tool_input)
`})}),`
`,(0,n.jsx)(r.p,{children:"The pattern is simple: check the tool name, call the corresponding function with the provided input, and return the result."}),`
`,(0,n.jsx)(r.h2,{id:"testing-multiple-tool-usage",children:"Testing Multiple Tool Usage"}),`
`,(0,n.jsx)(r.p,{children:'To test the system, try a request that requires multiple tools: "Set a reminder for my doctors appointment. Its 177 days after Jan 1st, 2050."'}),`
`,(0,n.jsx)(r.p,{children:"This request forces Claude to:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Calculate the date (using ",(0,n.jsx)(r.code,{children:"add_duration_to_datetime"}),")"]}),`
`,(0,n.jsxs)(r.li,{children:["Set the reminder (using ",(0,n.jsx)(r.code,{children:"set_reminder"}),")"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d1666c8c7d26.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude handles this by first explaining what it needs to do, then making the appropriate tool calls in sequence. The conversation shows Claude calculating June 27, 2050 as the target date, then setting the reminder for that date."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-message-flow",children:"Understanding the Message Flow"}),`
`,(0,n.jsx)(r.p,{children:"When you examine the conversation history, you'll see the complete message structure:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"User message with the request"}),`
`,(0,n.jsx)(r.li,{children:"Assistant message containing both text and tool use blocks"}),`
`,(0,n.jsx)(r.li,{children:"Tool result messages"}),`
`,(0,n.jsx)(r.li,{children:"Follow-up assistant messages"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8c76beac25f0.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This demonstrates how Claude can include multiple blocks in a single message - combining explanatory text with tool usage requests."}),`
`,(0,n.jsx)(r.h2,{id:"the-simple-pattern-for-adding-tools",children:"The Simple Pattern for Adding Tools"}),`
`,(0,n.jsx)(r.p,{children:"Once you have the core tool infrastructure, adding new tools follows this pattern:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Create the tool function implementation"}),`
`,(0,n.jsx)(r.li,{children:"Define the tool schema"}),`
`,(0,n.jsxs)(r.li,{children:["Add the schema to the tools list in ",(0,n.jsx)(r.code,{children:"run_conversation"})]}),`
`,(0,n.jsxs)(r.li,{children:["Add a case for the tool in ",(0,n.jsx)(r.code,{children:"run_tool"})]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This modular approach makes it easy to expand your AI assistant's capabilities without restructuring existing code. Each new tool integrates seamlessly with the existing conversation flow and tool-handling logic."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};