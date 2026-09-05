import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Chaining workflows might seem obvious at first, but they're actually one of the most useful patterns you'll encounter when working with Claude. This approach becomes especially valuable when dealing with complex tasks or when Claude isn't consistently following all your constraints."}),`
`,(0,n.jsx)(r.h2,{id:"what-is-chaining",children:"What is Chaining?"}),`
`,(0,n.jsx)(r.p,{children:"A chaining workflow breaks down one large task into smaller, sequential subtasks. Instead of asking Claude to handle everything at once, you split the work across multiple focused requests."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./960cab5fe28e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's a practical example: imagine building a social media marketing tool that creates and posts videos. Rather than one massive prompt, you could chain together these steps:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Find related trending topics on Twitter"}),`
`,(0,n.jsx)(r.li,{children:"Select the most interesting topic (using Claude)"}),`
`,(0,n.jsx)(r.li,{children:"Research the topic (using Claude)"}),`
`,(0,n.jsx)(r.li,{children:"Write a script for a short format video (using Claude)"}),`
`,(0,n.jsx)(r.li,{children:"Use an AI avatar and text-to-speech to create a video"}),`
`,(0,n.jsx)(r.li,{children:"Post the video to social media"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8ca072ea4c77.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The key benefits of this approach:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Split large tasks into smaller, non-parallelizable subtasks"}),`
`,(0,n.jsx)(r.li,{children:"Optionally do non-LLM processing between each task"}),`
`,(0,n.jsx)(r.li,{children:"Keep Claude focused on one aspect of the overall task"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0fb97ecea57e.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-real-world-problem-chaining-solves",children:"The Real-World Problem Chaining Solves"}),`
`,(0,n.jsx)(r.p,{children:"Here's where chaining becomes invaluable: dealing with constraint violations in complex prompts."}),`
`,(0,n.jsx)(r.p,{children:"Picture this scenario: you're using Claude to write technical articles. You start with a simple prompt, but the output isn't quite right. Claude might mention it's an AI, use too many emojis, or write in a cringey tone. So you add constraints to your prompt."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0f5e3145bbaf.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`Over time, your prompt grows into a long list of "DO NOT" instructions. But no matter how many constraints you add, Claude sometimes still violates them - using emojis, mentioning it's an AI, or maintaining that unprofessional tone.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0e81d5ce6ea3.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-chaining-solution",children:"The Chaining Solution"}),`
`,(0,n.jsx)(r.p,{children:"Instead of fighting this in one massive prompt, use a two-step chaining approach:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"First request:"})," Send your original prompt with all constraints, accepting that you'll get an imperfect article"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Second request:"})," Ask Claude to revise the article with specific, focused instructions"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./147398a37e72.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Your follow-up prompt might look like:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"Revise the article provided below. Follow these steps to rewrite the article: 1. Identify any location where the text identifies the author as an AI and remove them 2. Find and remove all emojis 3. Locate any cringey writing and replace it with text that would be written by a technical writer"})}),`
`,(0,n.jsx)(r.p,{children:"This approach works because it allows Claude to focus on one specific aspect at a time. Even if the initial response doesn't satisfy all your requirements, the follow-up prompt gives Claude a clear, focused task for improvement."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0fb97ecea57e.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-chaining",children:"When to Use Chaining"}),`
`,(0,n.jsx)(r.p,{children:"Chaining workflows are particularly useful when:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You have a complex task with many constraints"}),`
`,(0,n.jsx)(r.li,{children:"Claude isn't consistently following all your requirements"}),`
`,(0,n.jsx)(r.li,{children:"You want to process or validate outputs between steps"}),`
`,(0,n.jsx)(r.li,{children:"You need to maintain focus on specific aspects of a larger task"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"While it might seem like extra work, chaining often produces more reliable results than trying to cram everything into a single, complex prompt. It's a pattern you'll find yourself reaching for regularly as you build more sophisticated Claude-powered applications."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};