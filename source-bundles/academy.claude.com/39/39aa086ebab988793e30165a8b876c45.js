import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When you're building prompts that include a lot of content, Claude can sometimes struggle to understand which pieces of text belong together or what different sections are supposed to represent. XML tags provide a simple way to add structure and clarity to your prompts, especially when you're interpolating large amounts of data."}),`
`,(0,n.jsx)(r.h2,{id:"why-structure-matters",children:"Why Structure Matters"}),`
`,(0,n.jsx)(r.p,{children:"Consider a prompt where you need to analyze 20 pages of sales records. Without clear boundaries, Claude might have trouble distinguishing between your instructions and the actual data you want analyzed."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./31cfcf31ba1b.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The example above shows how unclear boundaries can make it difficult for Claude to parse your intent. By wrapping the sales records in XML tags like ",(0,n.jsx)(r.code,{children:"<sales_records>"})," and ",(0,n.jsx)(r.code,{children:"</sales_records>"}),", you create clear delimiters that help Claude understand the structure of your prompt."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./36d7ff6d8c95.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"practical-example-code-and-documentation",children:"Practical Example: Code and Documentation"}),`
`,(0,n.jsx)(r.p,{children:"Here's a more dramatic example of why XML tags matter. If you ask Claude to debug code using provided documentation, mixing everything together creates confusion:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./06552fb30df1.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:[`The "Not Great" version makes it nearly impossible to tell what's code versus documentation. The "Better" version uses `,(0,n.jsx)(r.code,{children:"<my_code>"})," and ",(0,n.jsx)(r.code,{children:"<docs>"})," tags to create clear boundaries."]}),`
`,(0,n.jsx)(r.h2,{id:"custom-tag-names",children:"Custom Tag Names"}),`
`,(0,n.jsx)(r.p,{children:"You don't need to use official XML tags. Create descriptive names that make sense for your content:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"<sales_records>"})," is better than ",(0,n.jsx)(r.code,{children:"<data>"})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"<athlete_information>"})," clearly identifies user details"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"<my_code>"})," and ",(0,n.jsx)(r.code,{children:"<docs>"})," separate different types of content"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The more specific and descriptive your tag names, the better Claude can understand the purpose of each section."}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-xml-tags",children:"When to Use XML Tags"}),`
`,(0,n.jsx)(r.p,{children:"XML tags are most useful when:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Including large amounts of context or data"}),`
`,(0,n.jsx)(r.li,{children:"Mixing different types of content (code, documentation, data)"}),`
`,(0,n.jsx)(r.li,{children:"You want to be extra clear about content boundaries"}),`
`,(0,n.jsx)(r.li,{children:"Working with complex prompts that interpolate multiple variables"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Even for shorter content, XML tags can help serve as delimiters that make your prompt structure more obvious to Claude."}),`
`,(0,n.jsx)(r.h2,{id:"real-world-application",children:"Real-World Application"}),`
`,(0,n.jsx)(r.p,{children:"In practice, you might structure a prompt like this:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`<athlete_information>
- Height: 6'2"
- Weight: 180 lbs
- Goal: Build muscle
- Dietary restrictions: Vegetarian
</athlete_information>

Generate a meal plan based on the athlete information above.
`})}),`
`,(0,n.jsx)(r.p,{children:"This makes it crystal clear that the height, weight, goal, and restrictions are all related athlete data that should be considered together when generating the meal plan."}),`
`,(0,n.jsx)(r.p,{children:"While you might not see dramatic improvements with simple prompts, XML tags become increasingly valuable as your prompts grow more complex and include larger amounts of varied content."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};