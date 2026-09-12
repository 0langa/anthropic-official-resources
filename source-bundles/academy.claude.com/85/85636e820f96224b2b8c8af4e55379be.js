import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:`Providing examples in your prompts is one of the most effective prompt engineering techniques you'll use. This approach, known as "one-shot" or "multi-shot" prompting, involves giving Claude sample input/output pairs to guide its responses.`}),`
`,(0,n.jsx)(r.h2,{id:"how-examples-work",children:"How Examples Work"}),`
`,(0,n.jsx)(r.p,{children:"Let's look at a sentiment analysis example. Say you want Claude to categorize whether a tweet is positive or negative:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./07550ea11708.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`The challenge here is sarcasm. A tweet like "Yeah, sure, that was the best movie I've seen since 'Plan 9 from Outer Space'" appears positive on the surface, but it's actually sarcastic and negative (Plan 9 is famously terrible).`}),`
`,(0,n.jsx)(r.h2,{id:"adding-examples-to-your-prompt",children:"Adding Examples to Your Prompt"}),`
`,(0,n.jsx)(r.p,{children:"To handle this, you can add examples that show Claude how to respond correctly:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d9149d7ef35a.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The key elements are:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'Clear introduction: "Here is a example input with an ideal response"'}),`
`,(0,n.jsxs)(r.li,{children:["XML tags for structure: ",(0,n.jsx)(r.code,{children:"<sample_input>"})," and ",(0,n.jsx)(r.code,{children:"<ideal_output>"})]}),`
`,(0,n.jsx)(r.li,{children:"Concrete examples that demonstrate the desired behavior"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"handling-corner-cases",children:"Handling Corner Cases"}),`
`,(0,n.jsx)(r.p,{children:"Multi-shot prompting shines when dealing with edge cases. For the sarcasm problem, you might add:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Be especially careful with tweets that contain sarcasm.
For example:
<sample_input>
Oh yeah, I really needed a flight delay tonight! Excellent!
</sample_input>
<ideal_output>
Negative
</ideal_output>
`})}),`
`,(0,n.jsx)(r.p,{children:"This gives Claude a clear pattern to recognize sarcastic content that might otherwise be misclassified."}),`
`,(0,n.jsx)(r.h2,{id:"complex-output-formats",children:"Complex Output Formats"}),`
`,(0,n.jsx)(r.p,{children:"Examples are especially valuable when you need Claude to produce structured output like JSON objects or detailed reports. Instead of just describing the format, you show exactly what good output looks like."}),`
`,(0,n.jsx)(r.h2,{id:"finding-good-examples-from-evaluations",children:"Finding Good Examples from Evaluations"}),`
`,(0,n.jsx)(r.p,{children:"When running prompt evaluations, look for your highest-scoring outputs in the HTML report:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fd159d6bcdc2.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Find examples that scored 10 (or your highest available score) and use those input/output pairs as examples in your prompt. This helps Claude understand what "perfect" looks like for your specific task.'}),`
`,(0,n.jsx)(r.h2,{id:"adding-context-to-examples",children:"Adding Context to Examples"}),`
`,(0,n.jsx)(r.p,{children:"For even better results, explain why an example is ideal. After showing the sample output, add a brief explanation:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`</ideal_output>
This meal plan is well-structured, provides detailed information on food choices and quantities, and aligns with the athlete's goals and restrictions.
`})}),`
`,(0,n.jsx)(r.p,{children:"This reinforces the specific qualities that make the output valuable."}),`
`,(0,n.jsx)(r.h2,{id:"best-practices",children:"Best Practices"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Use XML tags"})," to clearly structure your examples"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Start simple"})," with one-shot prompting, then add more examples as needed"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Focus on edge cases"})," that Claude might struggle with"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Include reasoning"})," about why examples are good when possible"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Test iteratively"})," - add examples based on evaluation results"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Examples are particularly powerful because they show rather than tell. Instead of trying to describe every nuance of what you want, you demonstrate it directly. This makes your prompts more reliable and helps Claude understand complex requirements that might be difficult to explain in words alone."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};