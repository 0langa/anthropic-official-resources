import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When working with Claude, one of the most effective ways to improve your results is to be specific about what you want. Instead of leaving everything up to the model's interpretation, you can provide clear guidelines or steps that direct Claude toward the kind of output you're looking for."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./369e6e634eb4.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Think about it this way: if you ask Claude to "write a short story about a character who discovers a hidden talent," the model could go in countless directions. It might write 200 words or 2,000 words. It could focus on one character or introduce five. The story structure could vary wildly.'}),`
`,(0,n.jsx)(r.p,{children:"But if you add specific guidelines, you can shape the output to match your needs much more closely."}),`
`,(0,n.jsx)(r.h2,{id:"two-types-of-guidelines",children:"Two Types of Guidelines"}),`
`,(0,n.jsx)(r.p,{children:"There are two main approaches to being specific in your prompts, and you'll often see both used together in professional applications."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./559eb8d6c697.png",alt:""})}),`
`,(0,n.jsx)(r.h3,{id:"quality-guidelines",children:"Quality Guidelines"}),`
`,(0,n.jsx)(r.p,{children:"The first type focuses on listing qualities that your output should have. These guidelines control attributes like:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Length constraints (keep under 1,000 words)"}),`
`,(0,n.jsx)(r.li,{children:"Structural requirements (include a clear action that reveals the character's talent)"}),`
`,(0,n.jsx)(r.li,{children:"Content specifications (include at least one supporting character)"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"process-steps",children:"Process Steps"}),`
`,(0,n.jsx)(r.p,{children:"The second type provides specific steps for the model to follow. This approach makes Claude think through the problem systematically:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Brainstorm 3 talents that would create dramatic tension"}),`
`,(0,n.jsx)(r.li,{children:"Pick the most interesting talent"}),`
`,(0,n.jsx)(r.li,{children:"Outline a pivotal scene that reveals the talent"}),`
`,(0,n.jsx)(r.li,{children:"Brainstorm 3 supporting character types that could increase the impact of this discovery"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Quality guidelines control what the output looks like, while process steps control how Claude arrives at that output."}),`
`,(0,n.jsx)(r.h2,{id:"real-world-testing",children:"Real-World Testing"}),`
`,(0,n.jsx)(r.p,{children:"Let's look at how this works in practice. Here's a prompt for generating meal plans that incorporates specific guidelines:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Generate a one-day meal plan for an athlete that meets their dietary restrictions.

- Height: {prompt_inputs["height"]}
- Weight: {prompt_inputs["weight"]}
- Goal: {prompt_inputs["goal"]}
- Dietary restrictions: {prompt_inputs["restrictions"]}

Guidelines:
1. Include accurate daily calorie amount
2. Show protein, fat, and carb amounts
3. Specify when to eat each meal
4. Use only foods that fit restrictions
5. List all portion sizes in grams
6. Keep budget-friendly if mentioned
`})}),`
`,(0,n.jsx)(r.p,{children:"When tested against a baseline prompt without guidelines, this approach improved the evaluation score from 3.92 to 7.86 - more than doubling the quality."}),`
`,(0,n.jsx)(r.p,{children:"Testing the process steps approach (telling Claude to calculate calories first, then figure out macros, then plan timing, etc.) also showed significant improvement, scoring 7.3."}),`
`,(0,n.jsx)(r.h2,{id:"when-to-provide-steps",children:"When to Provide Steps"}),`
`,(0,n.jsx)(r.p,{children:"While quality guidelines work well for most prompts, you should consider adding process steps when you're dealing with:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Troubleshooting hard problems"}),`
`,(0,n.jsx)(r.li,{children:"Decision making"}),`
`,(0,n.jsx)(r.li,{children:"Critical thinking"}),`
`,(0,n.jsx)(r.li,{children:'Anytime you want to force Claude to consider a "wider" view'}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b2d486f7abc2.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For example, if you're asking Claude to analyze why a sales team's numbers dropped 30% last quarter, you might want to provide steps that ensure it considers multiple angles - market conditions, individual performance, organizational changes, and customer feedback - rather than jumping to the first obvious explanation."}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that being specific helps you get consistent, high-quality results instead of leaving everything to chance. Whether you use quality guidelines, process steps, or both, you're giving Claude a clear framework to work within."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};