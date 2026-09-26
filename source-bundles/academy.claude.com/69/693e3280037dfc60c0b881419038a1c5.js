import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we've built our MCP server, let's recap the three core server primitives and understand when to use each one. The key insight is that each primitive is controlled by a different part of your application stack."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./bc7ee5fac91b.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"tools-model-controlled",children:"Tools: Model-Controlled"}),`
`,(0,n.jsx)(r.p,{children:"Tools are controlled entirely by Claude. The AI model decides when to call these functions, and the results are used directly by Claude to accomplish tasks."}),`
`,(0,n.jsx)(r.p,{children:"Use tools when you want to give Claude additional capabilities. For example, if you ask Claude to calculate the square root of 3 using JavaScript, Claude will automatically decide to use a JavaScript execution tool to provide the answer."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./776ea69dbffa.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The decision to use the tool was 100% model-controlled - Claude recognized it needed to execute code and chose the appropriate tool without any prompting from the application or user."}),`
`,(0,n.jsx)(r.h2,{id:"resources-app-controlled",children:"Resources: App-Controlled"}),`
`,(0,n.jsx)(r.p,{children:"Resources are controlled by your application code. Your app decides when to fetch resource data and how to use it, typically for UI purposes or to add context to conversations."}),`
`,(0,n.jsx)(r.p,{children:"Use resources when you need to get data into your app. Common examples include:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Populating autocomplete options in your UI"}),`
`,(0,n.jsx)(r.li,{children:"Fetching documents to display in a file picker"}),`
`,(0,n.jsx)(r.li,{children:"Adding context to messages before sending them to Claude"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`In Claude's web interface, the "Add from Google Drive" feature demonstrates this perfectly. The application fetches a list of available documents and displays them in the UI, then injects the selected document's content into the chat context.`}),`
`,(0,n.jsx)(r.h2,{id:"prompts-user-controlled",children:"Prompts: User-Controlled"}),`
`,(0,n.jsx)(r.p,{children:"Prompts are controlled by users. They decide when to trigger these predefined workflows through direct actions like clicking buttons, selecting menu options, or using slash commands."}),`
`,(0,n.jsx)(r.p,{children:"Use prompts when you want to implement predefined workflows that users can easily access. In Claude's interface, you'll see workflow buttons below the chat input that let users quickly start common tasks like writing, learning, or coding."}),`
`,(0,n.jsx)(r.h2,{id:"choosing-the-right-primitive",children:"Choosing the Right Primitive"}),`
`,(0,n.jsx)(r.p,{children:"When building your MCP server, think about who needs to control each piece of functionality:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Need to extend Claude's capabilities?"})," Use tools"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Need to get data into your app's UI?"})," Use resources"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Need to offer users predefined workflows?"})," Use prompts"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"These are high-level guidelines to help you choose the right primitive based on your specific use case. Each serves a different part of the application stack - tools serve the model, resources serve the app, and prompts serve the users."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};