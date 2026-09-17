import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"After creating your tool function, the next step is writing a JSON schema to describe it. This schema tells Claude what arguments your function expects and how to use it properly. While the configuration might look intimidating at first, it's actually straightforward once you understand the process."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-json-schema",children:"Understanding JSON Schema"}),`
`,(0,n.jsx)(r.p,{children:"JSON Schema isn't something invented just for AI tools - it's been around for years as a standard way to validate data. The schema has two main parts: the name and description at the top (which help Claude understand when to use the tool), and the actual schema that describes the function's arguments."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4f9eb92ac92c.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The top section contains the tool's name and description, which helps Claude understand when to use it. The bottom section is the actual schema that describes your function's arguments in detail."}),`
`,(0,n.jsx)(r.h2,{id:"creating-a-json-schema-step-by-step",children:"Creating a JSON Schema: Step-by-Step"}),`
`,(0,n.jsx)(r.p,{children:"Here's the simplest way to create a JSON schema for any function:"}),`
`,(0,n.jsx)(r.h3,{id:"step-1-write-a-dictionary-with-sample-data",children:"Step 1: Write a Dictionary with Sample Data"}),`
`,(0,n.jsx)(r.p,{children:"Take your function and create a dictionary of all keyword arguments with sample data. For example, if you have a function like this:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def process_data(ids, profile, primary_id, value):
    pass
`})}),`
`,(0,n.jsx)(r.p,{children:"Create a dictionary with sample values:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./45dc10d709dd.png",alt:""})}),`
`,(0,n.jsx)(r.h3,{id:"step-2-convert-to-json",children:"Step 2: Convert to JSON"}),`
`,(0,n.jsxs)(r.p,{children:["Convert your Python dictionary to proper JSON format. The main difference is changing Python's ",(0,n.jsx)(r.code,{children:"True"})," to JSON's ",(0,n.jsx)(r.code,{children:"true"}),"."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d177a699af0f.png",alt:""})}),`
`,(0,n.jsx)(r.h3,{id:"step-3-use-an-online-converter",children:"Step 3: Use an Online Converter"}),`
`,(0,n.jsx)(r.p,{children:'Search for "JSON to JSON Schema converter" and use one of the many free online tools. Paste your JSON data and let it generate the schema automatically.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fac5eb551cc2.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The tool will analyze your sample data and create a proper schema structure. Remove any ",(0,n.jsx)(r.code,{children:"$schema"})," declarations from the output - you don't need them."]}),`
`,(0,n.jsx)(r.h3,{id:"step-4-add-descriptions",children:"Step 4: Add Descriptions"}),`
`,(0,n.jsx)(r.p,{children:"The most important step is adding detailed descriptions to each property. These descriptions help Claude understand exactly what each argument does and how to use it."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1e49419e1af6.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"writing-good-descriptions",children:"Writing Good Descriptions"}),`
`,(0,n.jsx)(r.p,{children:"When writing descriptions for your tools and properties, follow these best practices:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Explain what the tool does, when to use it, and what it returns"}),`
`,(0,n.jsx)(r.li,{children:"Aim for 3-4 sentences in your tool description"}),`
`,(0,n.jsx)(r.li,{children:"Provide super detailed descriptions for each property"}),`
`,(0,n.jsx)(r.li,{children:"If you're stuck, paste your function into Claude and ask it to write descriptions for you"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Here's an example of a well-described tool schema:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cf9af981071d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Notice how the description clearly explains what the weather tool does, when to use it, what data it returns, and provides specific examples of valid location formats."}),`
`,(0,n.jsx)(r.h2,{id:"putting-it-all-together",children:"Putting It All Together"}),`
`,(0,n.jsxs)(r.p,{children:["Your final JSON schema should look something like this structure, with the ",(0,n.jsx)(r.code,{children:"toolSpec"})," containing the name, description, and ",(0,n.jsx)(r.code,{children:"inputSchema"})," with the detailed argument specifications:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./62744d87fb2e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The schema acts as a contract between your code and Claude, ensuring that when Claude decides to use your tool, it knows exactly what information to provide and in what format. This clear communication is what makes tool use reliable and effective."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};