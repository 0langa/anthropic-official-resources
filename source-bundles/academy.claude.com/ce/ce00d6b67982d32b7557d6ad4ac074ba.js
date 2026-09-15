import{Gp as e,qp as t}from"../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When you're building prompts that include a lot of content, Claude can sometimes struggle to understand which pieces of text belong together or what different sections are supposed to represent. XML tags provide a simple way to add structure and clarity to your prompts, especially when you're interpolating large amounts of data."}),`
`,(0,n.jsx)(r.h2,{id:"why-structure-matters",children:"Why Structure Matters"}),`
`,(0,n.jsx)(r.p,{children:"Consider a prompt where you need to analyze 20 pages of sales records. Without clear boundaries, Claude might have trouble distinguishing between your instructions and the actual data you want analyzed."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./31cfcf31ba1b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The example above shows how unclear boundaries can make it difficult for Claude to parse your intent. By wrapping the sales records in XML tags, you create clear separation between different parts of your prompt."}),`
`,(0,n.jsx)(r.h2,{id:"using-xml-tags-for-clarity",children:"Using XML Tags for Clarity"}),`
`,(0,n.jsx)(r.p,{children:"XML tags act as delimiters that help Claude understand the structure of your prompt. You can create custom tag names that describe the content they contain:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`<sales_records>
{sales_records}
</sales_records>
`})}),`
`,(0,n.jsxs)(r.p,{children:["The tag names don't need to follow any official XML specification - you're free to create descriptive names like ",(0,n.jsx)(r.code,{children:"sales_records"}),", ",(0,n.jsx)(r.code,{children:"data"}),", or ",(0,n.jsx)(r.code,{children:"records"}),". More specific names generally work better than generic ones."]}),`
`,(0,n.jsx)(r.h2,{id:"a-practical-example",children:"A Practical Example"}),`
`,(0,n.jsx)(r.p,{children:`Here's a clear example of why XML tags make a difference. In the "Not Great" version, it's unclear what content represents the buggy code versus the documentation:`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./06552fb30df1.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The improved version uses XML tags to clearly separate the different types of content:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`<my_code>
from datavortex import Pipeline, DataSource

def process_data(input_file, output_file):
    pipeline = Pipeline()
    source = DataSource.from_csv(input_file)
</my_code>

<docs>
# Creating a data source from data vortex
csv_source = DataSource.from_csv("data.csv")
</docs>
`})}),`
`,(0,n.jsx)(r.p,{children:"Now Claude can easily distinguish between the code that needs debugging and the documentation that should guide the debugging process."}),`
`,(0,n.jsx)(r.h2,{id:"applying-structure-to-your-prompts",children:"Applying Structure to Your Prompts"}),`
`,(0,n.jsx)(r.p,{children:"Even when your interpolated content isn't massive, XML tags can still improve clarity. For example, when generating meal plans, you can group athlete information together:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`<athlete_information>
- Height: {prompt_inputs["height"]}
- Weight: {prompt_inputs["weight"]}
- Goal: {prompt_inputs["goal"]}
- Dietary restrictions: {prompt_inputs["restrictions"]}
</athlete_information>
`})}),`
`,(0,n.jsx)(r.p,{children:"This makes it crystal clear to Claude that this block contains external input about the athlete that should inform the meal plan generation."}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-xml-tags",children:"When to Use XML Tags"}),`
`,(0,n.jsx)(r.p,{children:"XML tags are most useful when:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"You're including large amounts of context or data"}),`
`,(0,n.jsx)(r.li,{children:"Your prompt contains multiple distinct types of content"}),`
`,(0,n.jsx)(r.li,{children:"You want to make the boundaries between different sections obvious"}),`
`,(0,n.jsx)(r.li,{children:"You're interpolating content that might be confused with your instructions"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"While you might not see dramatic improvements with simple prompts, XML tags serve as delimiters that help Claude better understand your intent, leading to more consistent and accurate responses."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};