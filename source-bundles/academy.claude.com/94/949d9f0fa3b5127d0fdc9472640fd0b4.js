import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:`Providing examples in your prompts is one of the most effective prompt engineering techniques you'll use. This approach, known as "one-shot" or "multi-shot" prompting, involves giving Claude sample input/output pairs to guide its responses.`}),`
`,(0,n.jsx)(r.h2,{id:"how-examples-work",children:"How Examples Work"}),`
`,(0,n.jsx)(r.p,{children:"Let's look at a sentiment analysis example. Say you want Claude to categorize whether a tweet is positive or negative:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./07550ea11708.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`The challenge here is sarcasm. A tweet like "Yeah, sure, that was the best movie I've seen since 'Plan 9 from Outer Space'" appears positive on the surface, but it's actually sarcastic and negative (Plan 9 is famously one of the worst movies ever made).`}),`
`,(0,n.jsx)(r.h2,{id:"adding-examples-to-handle-corner-cases",children:"Adding Examples to Handle Corner Cases"}),`
`,(0,n.jsx)(r.p,{children:"To solve this, you can add examples that show Claude how to handle tricky cases:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d9149d7ef35a.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The improved prompt includes:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'A clear positive example: "Great game tonight!" → "Positive"'}),`
`,(0,n.jsx)(r.li,{children:'A sarcastic example: "Oh yeah, I really needed a flight delay tonight! Excellent!" → "Negative"'}),`
`,(0,n.jsx)(r.li,{children:"Context explaining why sarcasm should be treated carefully"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Notice how the examples are wrapped in XML tags like ",(0,n.jsx)(r.code,{children:"<sample_input>"})," and ",(0,n.jsx)(r.code,{children:"<ideal_output>"}),". This structure makes it crystal clear to Claude what each part represents."]}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-examples",children:"When to Use Examples"}),`
`,(0,n.jsx)(r.p,{children:"Examples are particularly useful for:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Capturing corner cases or edge scenarios"}),`
`,(0,n.jsx)(r.li,{children:"Defining complex output formats (like specific JSON structures)"}),`
`,(0,n.jsx)(r.li,{children:"Showing the exact style or tone you want"}),`
`,(0,n.jsx)(r.li,{children:"Demonstrating how to handle ambiguous inputs"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"one-shot-vs-multi-shot",children:"One-Shot vs Multi-Shot"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"One-Shot"}),": Provide a single example to establish the pattern"]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Multi-Shot"}),": Provide multiple examples to cover different scenarios"]}),`
`,(0,n.jsx)(r.p,{children:"Use multi-shot when you need to handle various edge cases or want to show different types of valid responses."}),`
`,(0,n.jsx)(r.h2,{id:"finding-good-examples-from-evaluations",children:"Finding Good Examples from Evaluations"}),`
`,(0,n.jsx)(r.p,{children:"When running prompt evaluations, look for your highest-scoring outputs to use as examples:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fd159d6bcdc2.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Find responses that scored 10 (or your highest available score) and use those input/output pairs as examples in your prompt. This helps Claude understand what "perfect" output looks like for your specific use case.'}),`
`,(0,n.jsx)(r.h2,{id:"adding-context-to-examples",children:"Adding Context to Examples"}),`
`,(0,n.jsx)(r.p,{children:"Don't just provide the input/output pair - explain why the output is good:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`<ideal_output>
[Your example output here]
</ideal_output>

This example is well-structured, provides detailed information 
on food choices and quantities, and aligns with the athlete's 
goals and restrictions.
`})}),`
`,(0,n.jsx)(r.p,{children:"This additional context helps Claude understand the reasoning behind good responses, not just the format."}),`
`,(0,n.jsx)(r.h2,{id:"best-practices",children:"Best Practices"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Always use XML tags to structure your examples clearly"}),`
`,(0,n.jsx)(r.li,{children:`Be explicit about what you're showing: "Here is an example input with an ideal response"`}),`
`,(0,n.jsx)(r.li,{children:"Include examples that address your most common failure cases"}),`
`,(0,n.jsx)(r.li,{children:"Explain why your example outputs are considered ideal"}),`
`,(0,n.jsx)(r.li,{children:"Keep examples relevant to your specific task"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Examples are especially powerful because they show rather than tell. Instead of trying to describe exactly what you want in words, you demonstrate it directly. This makes your prompts much more reliable and helps Claude understand subtle requirements that might be hard to express in instructions alone."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};