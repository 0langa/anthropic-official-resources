import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Adding multiple tools to your Claude implementation becomes straightforward once you have the core tool-handling infrastructure in place. This tutorial shows how to integrate additional tools by following a simple pattern."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a717f46eec75.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-tools-were-adding",children:"The Tools We're Adding"}),`
`,(0,n.jsx)(r.p,{children:"We need three main capabilities for our reminder system:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Get current date time"})," - Claude needs to know the current date and time"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Add duration to date time"})," - Claude isn't perfect with date time addition"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Set a reminder"})," - Need a way to set a reminder"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["The good news is that most of the implementation work is already done. The ",(0,n.jsx)(r.code,{children:"add_duration_to_datetime"})," function handles various time units (seconds, minutes, hours, days, weeks, months) and returns properly formatted datetime strings."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f585eb66f25d.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"set_reminder"})," function is a simple placeholder that prints out confirmation details rather than actually setting system reminders."]}),`
`,(0,n.jsx)(r.h2,{id:"adding-tools-to-the-conversation",children:"Adding Tools to the Conversation"}),`
`,(0,n.jsxs)(r.p,{children:["The process follows the same pattern we established earlier. First, update the ",(0,n.jsx)(r.code,{children:"run_conversation"})," function to include the new tool schemas:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`response = chat(messages, tools=[
    get_current_datetime_schema,
    add_duration_to_datetime_schema,
    set_reminder_schema
])
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f321946e99ec.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This tells Claude about all available tools it can use during the conversation."}),`
`,(0,n.jsx)(r.h2,{id:"handling-tool-execution",children:"Handling Tool Execution"}),`
`,(0,n.jsxs)(r.p,{children:["Next, update the ",(0,n.jsx)(r.code,{children:"run_tool"})," function to handle the new tool calls:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_tool(tool_name, tool_input):
    if tool_name == "get_current_datetime":
        return get_current_datetime(**tool_input)
    elif tool_name == "add_duration_to_datetime":
        return add_duration_to_datetime(**tool_input)
    elif tool_name == "set_reminder":
        return set_reminder(**tool_input)
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./05708aae0b88.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The pattern is consistent: check the tool name, call the corresponding function with the provided input, and return the result."}),`
`,(0,n.jsx)(r.h2,{id:"testing-multiple-tool-usage",children:"Testing Multiple Tool Usage"}),`
`,(0,n.jsx)(r.p,{children:`Let's test with a complex request that requires multiple tools: "Set a reminder for my doctors appointment. Its 177 days after Jan 1st, 2050."`}),`
`,(0,n.jsx)(r.p,{children:"This request forces Claude to:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Calculate the date 177 days after January 1st, 2050"}),`
`,(0,n.jsx)(r.li,{children:"Set a reminder for that calculated date"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d1666c8c7d26.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["Claude handles this by first explaining what it needs to do, then using the ",(0,n.jsx)(r.code,{children:"add_duration_to_datetime"})," tool to calculate June 27, 2050, and finally calling ",(0,n.jsx)(r.code,{children:"set_reminder"})," with the correct date."]}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-message-flow",children:"Understanding the Message Flow"}),`
`,(0,n.jsx)(r.p,{children:"Looking at the conversation history reveals how Claude manages multiple tools in a single response. The assistant message contains both a text block explaining the process and a tool use block for the first calculation."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6df4844f7527.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"After receiving the tool result, Claude continues with another message containing both text and another tool use block for setting the reminder. This demonstrates how Claude can chain multiple tool calls together to complete complex tasks."}),`
`,(0,n.jsx)(r.h2,{id:"key-takeaways",children:"Key Takeaways"}),`
`,(0,n.jsx)(r.p,{children:"Once you have the basic tool infrastructure set up, adding new tools follows a simple three-step process:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Add the tool schema to the tools list in ",(0,n.jsx)(r.code,{children:"run_conversation"})]}),`
`,(0,n.jsxs)(r.li,{children:["Add a case for the new tool in the ",(0,n.jsx)(r.code,{children:"run_tool"})," function"]}),`
`,(0,n.jsx)(r.li,{children:"Implement the actual tool function"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The framework handles all the message passing, tool result formatting, and conversation flow automatically. This makes it easy to build sophisticated AI assistants that can perform multiple related tasks in sequence."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};