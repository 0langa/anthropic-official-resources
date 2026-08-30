import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Writing detailed JSON schemas for structured data extraction can be a real pain point when working with AI tools. There's a clever workaround that lets you specify your desired data structure directly in your prompt instead of creating complex schemas."}),`
`,(0,n.jsx)(r.h2,{id:"the-flexible-schema-approach",children:"The Flexible Schema Approach"}),`
`,(0,n.jsxs)(r.p,{children:["Instead of writing a detailed schema for every data extraction task, you can create one generic tool called ",(0,n.jsx)(r.code,{children:"to_json"})," that accepts any object structure. The key is setting the input schema to allow additional properties, then specifying your exact requirements in the prompt itself."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ae6e50300afa.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This approach removes a major pain point - constantly writing and managing large JSON schemas. The results won't be quite as good as a dedicated schema, but you'll still get high-quality JSON output with much less setup work."}),`
`,(0,n.jsx)(r.h2,{id:"how-it-works",children:"How It Works"}),`
`,(0,n.jsx)(r.p,{children:"The process is straightforward:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Create a single flexible schema that accepts any object structure"}),`
`,(0,n.jsx)(r.li,{children:"In your prompt, specify exactly what data structure you want"}),`
`,(0,n.jsxs)(r.li,{children:["Tell Claude to call the ",(0,n.jsx)(r.code,{children:"to_json"})," tool with your specified structure"]}),`
`,(0,n.jsxs)(r.li,{children:["Use ",(0,n.jsx)(r.code,{children:"tool_choice"})," to force Claude to use your tool"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-prompt",children:"Setting Up the Prompt"}),`
`,(0,n.jsx)(r.p,{children:"When writing your prompt, be very explicit about the structure you want. Here's an example of how to structure your request:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Analyze the article below and extract key data. Then call the to_json tool.

<article_text>
{result["text"]}
</article_text>

When you call to_json, pass in the following structure:
{{
    "title": str # title of the article,
    "author": str # author of the article,
    "topics": List[str] # List of topics mentioned in the article
}}
`})}),`
`,(0,n.jsx)(r.h2,{id:"making-the-api-call",children:"Making the API Call"}),`
`,(0,n.jsx)(r.p,{children:"The API call uses the flexible schema and forces tool usage:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`flexible_result = chat(messages, tools=[to_json_schema], tool_choice="to_json")
`})}),`
`,(0,n.jsx)(r.h2,{id:"easy-structure-changes",children:"Easy Structure Changes"}),`
`,(0,n.jsx)(r.p,{children:"The real advantage becomes clear when you need to modify your data structure. Instead of rewriting an entire schema, you simply update your prompt. Want to add a field for the number of topics? Just add one line:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`"num_topics": int # Number of topics mentioned
`})}),`
`,(0,n.jsx)(r.p,{children:"That's it - no schema modifications needed."}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-each-approach",children:"When to Use Each Approach"}),`
`,(0,n.jsx)(r.p,{children:"The flexible schema approach works great for:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Rapid prototyping and experimentation"}),`
`,(0,n.jsx)(r.li,{children:"Simple data extraction tasks"}),`
`,(0,n.jsx)(r.li,{children:"Situations where you frequently change data requirements"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Stick with dedicated schemas for:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Critical production data extraction tasks"}),`
`,(0,n.jsx)(r.li,{children:"Complex nested data structures"}),`
`,(0,n.jsx)(r.li,{children:"When you need the highest possible accuracy"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The flexible approach gives you about 90% of the quality with 10% of the setup work, making it perfect for most use cases where you need structured data extraction without the schema management overhead."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};