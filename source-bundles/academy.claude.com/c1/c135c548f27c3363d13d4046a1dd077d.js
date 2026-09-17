import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When you're building prompts that include a lot of content, Claude can sometimes struggle to understand which pieces of text belong together or what different sections are supposed to represent. XML tags provide a simple way to add structure and clarity to your prompts, especially when you're interpolating large amounts of data."}),`
`,(0,n.jsx)(r.h2,{id:"why-structure-matters",children:"Why Structure Matters"}),`
`,(0,n.jsx)(r.p,{children:"Consider a prompt where you need to analyze 20 pages of sales records. Without clear boundaries, Claude might have trouble distinguishing between your instructions and the actual data you want analyzed."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./31cfcf31ba1b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The example above shows how unclear boundaries can make it difficult for Claude to parse your intent. By wrapping different content sections in XML tags, you create clear delimiters that help Claude understand the structure of your prompt."}),`
`,(0,n.jsx)(r.h2,{id:"using-xml-tags-for-clarity",children:"Using XML Tags for Clarity"}),`
`,(0,n.jsx)(r.p,{children:"XML tags act as containers that separate distinct portions of your prompt. You can create custom tag names that describe the content they contain:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./36d7ff6d8c95.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["In this case, wrapping the sales data in ",(0,n.jsx)(r.code,{children:"<sales_records>"})," tags makes it immediately clear what that content represents. The tag name itself provides context about the data type."]}),`
`,(0,n.jsx)(r.h2,{id:"a-practical-example",children:"A Practical Example"}),`
`,(0,n.jsx)(r.p,{children:"Here's a more dramatic example that shows why structure matters. On the left, you have a debugging request with mixed code and documentation:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./06552fb30df1.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Without clear boundaries, Claude has to guess which parts are the buggy code and which parts are documentation. The improved version on the right uses XML tags to separate these concerns:"}),`
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
`,(0,n.jsx)(r.p,{children:"Now Claude can easily identify what needs debugging versus what serves as reference material."}),`
`,(0,n.jsx)(r.h2,{id:"applying-structure-to-your-prompts",children:"Applying Structure to Your Prompts"}),`
`,(0,n.jsx)(r.p,{children:"Even when your interpolated content isn't massive, XML tags can still improve clarity. For example, when generating meal plans, you might group athlete information together:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`<athlete_information>
- Height: {prompt_inputs["height"]}
- Weight: {prompt_inputs["weight"]}
- Goal: {prompt_inputs["goal"]}
- Dietary restrictions: {prompt_inputs["restrictions"]}
</athlete_information>
`})}),`
`,(0,n.jsx)(r.p,{children:"This makes it explicit that these values represent external input about the athlete, rather than part of your instructions."}),`
`,(0,n.jsx)(r.h2,{id:"key-benefits",children:"Key Benefits"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Most useful when including large amounts of context or data"}),`
`,(0,n.jsx)(r.li,{children:"Help serve as clear delimiters for Claude to parse different content types"}),`
`,(0,n.jsx)(r.li,{children:"Improve Claude's ability to understand the relationship between different parts of your prompt"}),`
`,(0,n.jsx)(r.li,{children:"Make your prompts more maintainable and easier to debug"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"XML tags are particularly valuable when you're working with complex prompts that mix instructions, data, examples, and other content types. The clearer you can make the structure, the better Claude can understand and respond to your specific needs."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};