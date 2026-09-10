import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:`Providing examples in your prompts is one of the most effective prompt engineering techniques you'll use. This approach, known as "one-shot" or "multi-shot" prompting, involves giving Claude sample input/output pairs to guide its responses.`}),`
`,(0,n.jsx)(r.h2,{id:"how-examples-work",children:"How Examples Work"}),`
`,(0,n.jsx)(r.p,{children:"Let's look at a sentiment analysis example. Say you want Claude to categorize whether a tweet is positive or negative:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./07550ea11708.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`The challenge here is sarcasm. A tweet like "Yeah, sure, that was the best movie I've seen since 'Plan 9 from Outer Space'" appears positive on the surface, but it's actually sarcastic and negative (Plan 9 from Outer Space is famously terrible).`}),`
`,(0,n.jsx)(r.h2,{id:"adding-examples-to-your-prompt",children:"Adding Examples to Your Prompt"}),`
`,(0,n.jsx)(r.p,{children:"To handle this, you can add examples that show Claude exactly how to respond:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d9149d7ef35a.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The key elements are:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'Clear introduction: "Here is a example input with an ideal response"'}),`
`,(0,n.jsxs)(r.li,{children:["XML tags for structure: ",(0,n.jsx)(r.code,{children:"<sample_input>"})," and ",(0,n.jsx)(r.code,{children:"<ideal_output>"})]}),`
`,(0,n.jsx)(r.li,{children:"Concrete examples that demonstrate the desired behavior"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"handling-corner-cases",children:"Handling Corner Cases"}),`
`,(0,n.jsx)(r.p,{children:"For tricky scenarios like sarcasm, you can provide multiple examples (multi-shot prompting). Add context to highlight what Claude should watch for:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Be especially careful with tweets that contain sarcasm.
For example:
<sample_input>
Oh yeah, I really needed a flight delay tonight! Excellent!
</sample_input>
<ideal_output>
Negative
</ideal_output>
`})}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-examples",children:"When to Use Examples"}),`
`,(0,n.jsx)(r.p,{children:"Examples are particularly useful for:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Capturing corner cases or edge scenarios"}),`
`,(0,n.jsx)(r.li,{children:"Defining complex output formats (like specific JSON structures)"}),`
`,(0,n.jsx)(r.li,{children:'Showing Claude exactly what "good" output looks like'}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"finding-good-examples-from-evaluations",children:"Finding Good Examples from Evaluations"}),`
`,(0,n.jsx)(r.p,{children:"When running prompt evaluations, look for your highest-scoring outputs in the HTML report. These make excellent examples to include in your prompt."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fd159d6bcdc2.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Find a response that scored well (ideally a 10, or your highest score), then copy both the input and output to use as your example."}),`
`,(0,n.jsx)(r.h2,{id:"adding-context-to-examples",children:"Adding Context to Examples"}),`
`,(0,n.jsx)(r.p,{children:"You can make examples even more effective by explaining why they're good. After your example output, add a brief explanation:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`<ideal_output>
[Your example output here]
</ideal_output>

This example meal plan is well-structured, provides detailed information on food choices and quantities, and aligns with the athlete's goals and restrictions.
`})}),`
`,(0,n.jsx)(r.p,{children:"This helps Claude understand not just what to produce, but why that output is considered ideal."}),`
`,(0,n.jsx)(r.h2,{id:"best-practices",children:"Best Practices"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Use XML tags"})," to clearly structure your examples"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Be explicit"})," about what you're showing Claude"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Choose representative examples"})," that cover your most important use cases"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Include corner cases"})," that might trip up the model"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Explain why examples are good"})," when it's not obvious"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"One-shot and multi-shot prompting will quickly become essential tools in your prompt engineering toolkit, especially when you need consistent, well-formatted outputs or want to handle tricky edge cases reliably."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};