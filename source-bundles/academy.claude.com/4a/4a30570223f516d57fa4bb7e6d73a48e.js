import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When working with Claude, one of the most effective ways to improve your results is to be specific about what you want. Instead of leaving everything up to the model's interpretation, you can provide clear guidelines or steps that direct Claude toward the kind of output you're looking for."}),`
`,(0,n.jsx)(r.p,{children:`Think about it this way: if you ask Claude to "write a short story about a character who discovers a hidden talent," Claude could go in countless directions. The story might be 200 words or 2,000 words. It might have one character or five. It might focus on comedy or drama. Without guidance, you're rolling the dice on what you'll get.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./369e6e634eb4.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"two-types-of-guidelines",children:"Two Types of Guidelines"}),`
`,(0,n.jsx)(r.p,{children:"There are two main approaches to being specific in your prompts, and you'll often see them used together in professional applications."}),`
`,(0,n.jsx)(r.h3,{id:"quality-guidelines",children:"Quality Guidelines"}),`
`,(0,n.jsx)(r.p,{children:"The first type focuses on listing qualities that your output should have. These guidelines control attributes like:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Length constraints (keep under 1,000 words)"}),`
`,(0,n.jsx)(r.li,{children:"Structural requirements (include a clear action that reveals the character's talent)"}),`
`,(0,n.jsx)(r.li,{children:"Content specifications (include at least one supporting character)"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"process-steps",children:"Process Steps"}),`
`,(0,n.jsx)(r.p,{children:"The second type provides specific steps for the model to follow. This approach makes Claude think through different options and considerations before generating the final response. For example:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Brainstorm 3 talents that would create dramatic tension"}),`
`,(0,n.jsx)(r.li,{children:"Pick the most interesting talent"}),`
`,(0,n.jsx)(r.li,{children:"Outline a pivotal scene that reveals the talent"}),`
`,(0,n.jsx)(r.li,{children:"Brainstorm 3 supporting character types that could increase the impact of this discovery"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./559eb8d6c697.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"real-world-results",children:"Real-World Results"}),`
`,(0,n.jsx)(r.p,{children:"The impact of being specific can be dramatic. In testing a meal planning prompt, adding guidelines improved the evaluation score from 3.92 to 7.86 - more than doubling the quality of the output. Here's what that looked like in practice:"}),`
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
`,(0,n.jsx)(r.h2,{id:"when-to-use-each-approach",children:"When to Use Each Approach"}),`
`,(0,n.jsx)(r.p,{children:"Quality guidelines work well for almost any prompt you write. They're your baseline for ensuring consistent, useful output."}),`
`,(0,n.jsx)(r.p,{children:"Process steps are particularly valuable when you're dealing with:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Troubleshooting complex problems"}),`
`,(0,n.jsx)(r.li,{children:"Decision making scenarios"}),`
`,(0,n.jsx)(r.li,{children:"Critical thinking tasks"}),`
`,(0,n.jsx)(r.li,{children:"Situations where you want Claude to consider multiple perspectives"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For example, if you're asking Claude to analyze why a sales team's performance dropped 30% last quarter, you might want to force it to consider market conditions, individual performance, organizational changes, and customer feedback - areas it might not naturally explore without specific direction."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b2d486f7abc2.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The key is recognizing that Claude, like any tool, works better when you give it clear instructions about both what you want and how to get there. Being specific isn't about micromanaging the AI - it's about setting up the conditions for success."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};