import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Now that we have one tool working, it's time to add the remaining two tools to complete our project: ",(0,n.jsx)(r.code,{children:"add_duration_to_datetime"})," and ",(0,n.jsx)(r.code,{children:"set_reminder"}),". The good news is that once you have the foundation in place, adding new tools is straightforward."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./91f4fc5203e3.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"pre-built-functions-and-schemas",children:"Pre-built Functions and Schemas"}),`
`,(0,n.jsx)(r.p,{children:"To save time, the implementations for both additional functions are already provided, along with their JSON schema specifications. You can find these in the earlier code cells:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"add_duration_to_datetime"})," - Handles date arithmetic for various time units"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"set_reminder"})," - Creates reminders (currently just prints output, but could be extended to integrate with actual reminder systems)"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ce5f610d33fa.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Each function comes with a corresponding JSON schema that defines the expected parameters and their types."}),`
`,(0,n.jsx)(r.h2,{id:"adding-tools-to-the-conversation",children:"Adding Tools to the Conversation"}),`
`,(0,n.jsxs)(r.p,{children:["The first step is to include the new tool schemas in your conversation function. In the ",(0,n.jsx)(r.code,{children:"run_conversation"})," function, add the additional schemas to the tools array:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`tools=[
    get_current_datetime_schema,
    add_duration_to_datetime_schema,
    set_reminder_schema
]
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./57194c1c8700.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"wiring-up-the-tool-functions",children:"Wiring Up the Tool Functions"}),`
`,(0,n.jsxs)(r.p,{children:["Next, you need to update the ",(0,n.jsx)(r.code,{children:"run_tool"})," function to handle the new tool names. Add two additional conditional branches:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_tool(tool_name, tool_input):
    if tool_name == "get_current_datetime":
        return get_current_datetime(**tool_input)
    elif tool_name == "set_reminder":
        return set_reminder(**tool_input)
    elif tool_name == "add_duration_to_datetime":
        return add_duration_to_datetime(**tool_input)
    else:
        raise Exception(f"Unknown tool name: {tool_name}")
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2ff12ab3be55.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-complete-system",children:"Testing the Complete System"}),`
`,(0,n.jsx)(r.p,{children:'With all tools connected, you can now test complex workflows that require multiple tool calls. For example, asking Claude to "Set a reminder to go to the doctor. The appointment is in 100 days" will trigger a sequence of operations:'}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["Get today's date using ",(0,n.jsx)(r.code,{children:"get_current_datetime"})]}),`
`,(0,n.jsxs)(r.li,{children:["Add 100 days to that date using ",(0,n.jsx)(r.code,{children:"add_duration_to_datetime"})]}),`
`,(0,n.jsxs)(r.li,{children:["Create the reminder using ",(0,n.jsx)(r.code,{children:"set_reminder"})]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./dcbabb51d3ac.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude automatically breaks down the request into logical steps and explains its plan before executing each tool call. The output shows the complete workflow, including the calculated future date and confirmation of the reminder being set."}),`
`,(0,n.jsx)(r.h2,{id:"key-takeaway",children:"Key Takeaway"}),`
`,(0,n.jsx)(r.p,{children:"Once you have the foundational tool use infrastructure in place, adding new tools requires just two simple steps: including the schema in your tools array and adding a case to handle the tool name in your routing function. The initial setup might feel complex, but scaling to multiple tools becomes very manageable."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};