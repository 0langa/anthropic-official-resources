import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Beyond crafting better prompts, there are two powerful techniques for controlling Claude's output: prefilled assistant messages and stop sequences. These methods give you precise control over how Claude responds and when it stops generating text."}),`
`,(0,n.jsx)(r.h2,{id:"prefilled-assistant-messages",children:"Prefilled Assistant Messages"}),`
`,(0,n.jsx)(r.p,{children:"Message prefilling lets you provide the beginning of Claude's response, which it will then continue from that starting point. This technique is incredibly useful for steering Claude in a specific direction."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b47e17ea1c9f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`Here's how it works: instead of just sending a user message, you add an assistant message at the end of your message list. Claude sees this assistant message and thinks "I've already started responding to this question, so I should continue from where I left off."`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8a4248de3e83.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'For example, if you ask "Is tea or coffee better at breakfast?" without prefilling, Claude typically gives a balanced response mentioning both options. But if you add an assistant message saying "Coffee is better because", Claude will continue from there and build a case for coffee.'}),`
`,(0,n.jsx)(r.p,{children:`The key thing to understand is that Claude continues from exactly where your prefilled text ends. If you write "Coffee is better because", Claude won't repeat that text - it will pick up right after "because" and complete the thought.`}),`
`,(0,n.jsx)(r.p,{children:"Here's the code structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`messages = []
add_user_message(messages, "Is tea or coffee better at breakfast?")
add_assistant_message(messages, "Coffee is better because")
answer = chat(messages)
`})}),`
`,(0,n.jsx)(r.p,{children:"You can steer Claude in any direction using this technique:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'Favor coffee: "Coffee is better because"'}),`
`,(0,n.jsx)(r.li,{children:'Favor tea: "Tea is better because"'}),`
`,(0,n.jsx)(r.li,{children:'Take a contrarian stance: "Neither is very good because"'}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"stop-sequences",children:"Stop Sequences"}),`
`,(0,n.jsx)(r.p,{children:"Stop sequences force Claude to end its response as soon as it generates a specific string of characters. This is perfect for controlling the length or endpoint of responses."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./10b88f1b5cca.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The concept is straightforward: you provide a list of strings, and when Claude generates any of those strings, it immediately stops and returns whatever it has generated up to that point."}),`
`,(0,n.jsx)(r.p,{children:`For example, if you ask Claude to "Count from 1 to 10" with a stop sequence of "5", you'll get:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`add_user_message(messages, "Count from 1 to 10")
answer = chat(messages, stop_sequences=["5"])
`})}),`
`,(0,n.jsx)(r.p,{children:'This returns: "1, 2, 3, 4, " - stopping right before the "5" is included in the output.'}),`
`,(0,n.jsxs)(r.p,{children:["You can be more precise with your stop sequences. If you want to avoid the trailing comma and space, use ",(0,n.jsx)(r.code,{children:'stop_sequences=[", 5"]'}),' instead. This will give you a cleaner result: "1, 2, 3, 4".']}),`
`,(0,n.jsx)(r.p,{children:"Stop sequences are particularly useful for:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Limiting list lengths"}),`
`,(0,n.jsx)(r.li,{children:"Stopping at specific markers or delimiters"}),`
`,(0,n.jsx)(r.li,{children:"Creating consistent output formats"}),`
`,(0,n.jsx)(r.li,{children:"Preventing overly long responses"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Both techniques give you fine-grained control over Claude's behavior, allowing you to create more predictable and targeted responses for your applications."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};