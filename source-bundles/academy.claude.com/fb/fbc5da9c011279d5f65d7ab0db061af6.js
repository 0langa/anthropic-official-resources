import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"After writing your tool function, the next step is creating a JSON schema that tells Claude what arguments your function expects and how to use it. This schema acts as documentation that Claude reads to understand when and how to call your tools."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-json-schema",children:"Understanding JSON Schema"}),`
`,(0,n.jsx)(r.p,{children:"JSON Schema isn't specific to AI or tool calling - it's a widely-used data validation specification that's been around for years. The AI community adopted it because it's a convenient way to describe function parameters and validate data."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7b614d403e97.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The complete tool specification has three main parts:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"name"}),' - A clear, descriptive name for your tool (like "get_weather")']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"description"})," - What the tool does, when to use it, and what it returns"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"input_schema"})," - The actual JSON schema describing the function's arguments"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"writing-effective-descriptions",children:"Writing Effective Descriptions"}),`
`,(0,n.jsx)(r.p,{children:"Your tool description is crucial for helping Claude understand when to use your function. Best practices include:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Aim for 3-4 sentences explaining what the tool does"}),`
`,(0,n.jsx)(r.li,{children:"Describe when Claude should use it"}),`
`,(0,n.jsx)(r.li,{children:"Explain what kind of data it returns"}),`
`,(0,n.jsx)(r.li,{children:"Provide detailed descriptions for each argument"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./770cad2cbde3.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-easy-way-to-generate-schemas",children:"The Easy Way to Generate Schemas"}),`
`,(0,n.jsx)(r.p,{children:"Instead of writing JSON schemas from scratch, you can use Claude itself to generate them. Here's the process:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Copy your tool function code"}),`
`,(0,n.jsx)(r.li,{children:"Go to Claude and ask it to write a JSON schema for tool calling"}),`
`,(0,n.jsx)(r.li,{children:"Include the Anthropic documentation on tool use as context"}),`
`,(0,n.jsx)(r.li,{children:"Let Claude generate a properly formatted schema following best practices"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'The prompt should be something like: "Write a valid JSON schema spec for the purposes of tool calling for this function. Follow the best practices listed in the attached documentation."'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./99b70132340d.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"implementing-the-schema-in-code",children:"Implementing the Schema in Code"}),`
`,(0,n.jsx)(r.p,{children:"Once Claude generates your schema, copy it into your code file. Here's a good naming pattern to follow:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def get_current_datetime(date_format="%Y-%m-%d %H:%M:%S"):
    if not date_format:
        raise ValueError("date_format cannot be empty")
    return datetime.now().strftime(date_format)

get_current_datetime_schema = {
    "name": "get_current_datetime",
    "description": "Returns the current date and time formatted according to the specified format",
    "input_schema": {
        "type": "object",
        "properties": {
            "date_format": {
                "type": "string",
                "description": "A string specifying the format of the returned datetime. Uses Python's strftime format codes.",
                "default": "%Y-%m-%d %H:%M:%S"
            }
        },
        "required": []
    }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["Use the pattern of ",(0,n.jsx)(r.code,{children:"function_name"})," followed by ",(0,n.jsx)(r.code,{children:"function_name_schema"})," to keep your schemas organized and easy to match with their corresponding functions."]}),`
`,(0,n.jsx)(r.h2,{id:"adding-type-safety",children:"Adding Type Safety"}),`
`,(0,n.jsxs)(r.p,{children:["For better type checking, import and use the ",(0,n.jsx)(r.code,{children:"ToolParam"})," type from the Anthropic library:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from anthropic.types import ToolParam

get_current_datetime_schema = ToolParam({
    "name": "get_current_datetime",
    "description": "Returns the current date and time formatted according to the specified format",
    # ... rest of schema
})
`})}),`
`,(0,n.jsx)(r.p,{children:"While not strictly necessary for functionality, this prevents type errors when you use the schema with Claude's API and makes your code more robust."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};