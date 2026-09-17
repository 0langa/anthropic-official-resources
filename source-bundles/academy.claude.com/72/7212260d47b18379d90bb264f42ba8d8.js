import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Building tools for Claude requires solving several challenges that aren't immediately obvious. When you want Claude to set reminders for future dates, you quickly discover that while Claude knows the current date, it doesn't always know the exact time, struggles with complex date arithmetic, and has no built-in way to actually set reminders."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./59f1421b35b9.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The solution is to create custom tools that handle these specific tasks. For a reminder system, you'll need three separate tools: one to get the current date and time, another to add durations to dates, and a third to actually set the reminder."}),`
`,(0,n.jsx)(r.h2,{id:"why-this-is-challenging",children:"Why This Is Challenging"}),`
`,(0,n.jsx)(r.p,{children:"Claude has some limitations when it comes to time-based tasks:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude might know the current date, but not the exact time"}),`
`,(0,n.jsx)(r.li,{children:"Claude doesn't always handle time-based addition well, especially when looking many days into the future"}),`
`,(0,n.jsx)(r.li,{children:"Claude doesn't know how to set a reminder"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a7c479969f35.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-tools-you-need",children:"The Tools You Need"}),`
`,(0,n.jsx)(r.p,{children:"To solve these problems, you'll create three dedicated tools:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Get the current date time"})," - Claude needs to know the current date and time"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Add duration to date time"})," - Claude isn't perfect with date time addition"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Set a reminder"})," - Need a way to set a reminder"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ab568fe7efa0.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-tool-functions-work",children:"How Tool Functions Work"}),`
`,(0,n.jsx)(r.p,{children:"The tool system follows a specific flow between your server and Claude. You write functions that Claude can call when it needs additional information, and Claude receives the results to help formulate its response."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5b0bb0502e2b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The process involves several steps: writing the tool function, creating a JSON schema specification, calling Claude with that schema, running the tool when Claude requests it, and providing the results back to Claude."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./493213de9630.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"writing-tool-functions",children:"Writing Tool Functions"}),`
`,(0,n.jsx)(r.p,{children:"Tool functions are plain Python functions that get executed when Claude decides it needs additional information to help the user. Here's how to write them effectively:"}),`
`,(0,n.jsx)(r.h3,{id:"best-practices",children:"Best Practices"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Use well-named, descriptive arguments (this becomes important later)"}),`
`,(0,n.jsx)(r.li,{children:"Validate the inputs, raising an error if they fail validation"}),`
`,(0,n.jsx)(r.li,{children:"Return meaningful errors - Claude will try to call your function a second time if it gets an error"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ab8e2ed3a5d1.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"creating-your-first-tool",children:"Creating Your First Tool"}),`
`,(0,n.jsx)(r.p,{children:"Let's start with the simplest tool - getting the current date and time. This function takes a date format parameter and returns the current timestamp:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from datetime import datetime, timedelta

def get_current_datetime(date_format="%Y-%m-%d %H:%M:%S"):
    return datetime.now().strftime(date_format)
`})}),`
`,(0,n.jsx)(r.p,{children:"This function is straightforward but follows the key principles: it has a descriptive name, takes a well-named parameter with a sensible default, and returns exactly what it promises."}),`
`,(0,n.jsx)(r.h2,{id:"json-schema-specification",children:"JSON Schema Specification"}),`
`,(0,n.jsx)(r.p,{children:"Once you have your function, you need to write a JSON Schema that describes it to Claude. This schema tells Claude what arguments the function requires and helps it understand when and how to use the tool."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6ea349aba9b6.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The JSON Schema serves two purposes: it helps Claude understand what arguments your function requires, and it's not just an LLM concept - JSON Schema is commonly used for data validation across many programming contexts. There are plenty of online tools to help you generate schemas."}),`
`,(0,n.jsx)(r.h3,{id:"schema-best-practices",children:"Schema Best Practices"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Explain what the tool does, when to use it, and what it returns"}),`
`,(0,n.jsx)(r.li,{children:"Aim for 3 to 4 sentences in your descriptions"}),`
`,(0,n.jsx)(r.li,{children:"Provide detailed descriptions for parameters"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"With your tool function written and schema defined, you're ready to integrate it with Claude and start building more sophisticated AI interactions that can handle real-world tasks like setting reminders."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};