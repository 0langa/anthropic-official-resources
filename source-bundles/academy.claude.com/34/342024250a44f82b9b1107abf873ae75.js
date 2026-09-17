import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we've built our MCP server, let's review the three core primitives and understand when to use each one. The key insight is understanding who controls each primitive and what purpose they serve in your application."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./bc7ee5fac91b.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"tools-model-controlled",children:"Tools: Model-Controlled"}),`
`,(0,n.jsx)(r.p,{children:"Tools are controlled entirely by Claude. The AI model decides when to call these functions, and the results are used directly by Claude to accomplish tasks."}),`
`,(0,n.jsx)(r.p,{children:"Use tools when you want to give Claude additional capabilities. For example, if you ask Claude to calculate the square root of 3 using JavaScript, Claude will automatically decide to use a JavaScript execution tool to provide an accurate answer."}),`
`,(0,n.jsx)(r.h2,{id:"resources-app-controlled",children:"Resources: App-Controlled"}),`
`,(0,n.jsx)(r.p,{children:"Resources are controlled by your application code. Your app decides when to fetch resource data and how to use it, typically for UI purposes or to add context to conversations."}),`
`,(0,n.jsx)(r.p,{children:"Use resources when you need to get data into your app. Common examples include:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Populating autocomplete options in your UI"}),`
`,(0,n.jsx)(r.li,{children:"Adding context to messages before sending them to Claude"}),`
`,(0,n.jsx)(r.li,{children:"Displaying lists of available documents or files"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"In our project, we used resources to fetch autocomplete suggestions and to augment prompts with additional context."}),`
`,(0,n.jsx)(r.h2,{id:"prompts-user-controlled",children:"Prompts: User-Controlled"}),`
`,(0,n.jsx)(r.p,{children:"Prompts are triggered by user actions. Users decide when to run these predefined workflows through UI interactions like button clicks, menu selections, or slash commands."}),`
`,(0,n.jsx)(r.p,{children:"Use prompts for workflows that users should be able to trigger on demand. These are perfect for:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Predefined conversation starters"}),`
`,(0,n.jsx)(r.li,{children:"Common task templates"}),`
`,(0,n.jsx)(r.li,{children:"Specialized workflows optimized for specific use cases"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"real-world-examples",children:"Real-World Examples"}),`
`,(0,n.jsx)(r.p,{children:"You can see all three primitives in action on Claude's official interface. The conversation starter buttons below the chat input are examples of prompts - user-controlled workflows that begin predefined interactions."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f4ab47cd26e0.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'The "Add from Google Drive" option demonstrates resources in action. When you click this button, the application fetches a list of your documents and displays them in the UI. This is app-controlled behavior that serves the interface.'}),`
`,(0,n.jsx)(r.p,{children:"When you ask Claude to perform calculations or execute code, you're seeing tools at work. Claude automatically decides to use available tools like JavaScript execution to provide accurate results."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./776ea69dbffa.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"choosing-the-right-primitive",children:"Choosing the Right Primitive"}),`
`,(0,n.jsx)(r.p,{children:"Here's a quick decision guide:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Need to extend Claude's capabilities?"})," Use tools"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Need data for your app's UI or context?"})," Use resources"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Want to offer predefined workflows to users?"})," Use prompts"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Remember, these are high-level guidelines to help you choose the right approach for your specific needs. Each primitive serves a different part of your application ecosystem - tools serve the model, resources serve your app, and prompts serve your users."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};