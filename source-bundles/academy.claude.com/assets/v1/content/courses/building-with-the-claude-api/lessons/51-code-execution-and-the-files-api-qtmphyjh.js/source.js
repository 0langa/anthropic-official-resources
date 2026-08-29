import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Anthropic API offers two powerful features that work exceptionally well together: the Files API and Code Execution. While they might seem separate at first, combining them opens up some really interesting possibilities for delegating complex tasks to Claude."}),`
`,(0,n.jsx)(r.h2,{id:"files-api",children:"Files API"}),`
`,(0,n.jsx)(r.p,{children:"The Files API provides an alternative way to handle file uploads. Instead of encoding images or PDFs directly in your messages as base64 data, you can upload files ahead of time and reference them later."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ee042cc9aaaa.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how it works:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Upload your file (image, PDF, text, etc.) to Claude using a separate API call"}),`
`,(0,n.jsx)(r.li,{children:"Receive a file metadata object containing a unique file ID"}),`
`,(0,n.jsx)(r.li,{children:"Reference that file ID in future messages instead of including raw file data"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./96059a1704f4.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This approach is particularly useful when you want to reference the same file multiple times or when working with larger files that would be cumbersome to include in every request."}),`
`,(0,n.jsx)(r.h2,{id:"code-execution-tool",children:"Code Execution Tool"}),`
`,(0,n.jsx)(r.p,{children:"Code execution is a server-based tool that doesn't require you to provide an implementation. You simply include a predefined tool schema in your request, and Claude can optionally execute Python code in an isolated Docker container."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1d10a3e11cdf.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Key characteristics of the code execution environment:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Runs in an isolated Docker container"}),`
`,(0,n.jsx)(r.li,{children:"No network access (can't make external API calls)"}),`
`,(0,n.jsx)(r.li,{children:"Claude can execute code multiple times during a single conversation"}),`
`,(0,n.jsx)(r.li,{children:"Results are captured and interpreted by Claude for the final response"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"combining-files-api-and-code-execution",children:"Combining Files API and Code Execution"}),`
`,(0,n.jsx)(r.p,{children:"The real power comes from using these features together. Since the Docker containers have no network access, the Files API becomes the primary way to get data in and out of the execution environment."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f680a4ba00bc.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's a typical workflow:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Upload your data file (like a CSV) using the Files API"}),`
`,(0,n.jsx)(r.li,{children:"Include a container upload block in your message with the file ID"}),`
`,(0,n.jsx)(r.li,{children:"Ask Claude to analyze the data"}),`
`,(0,n.jsx)(r.li,{children:"Claude writes and executes code to process your file"}),`
`,(0,n.jsx)(r.li,{children:"Claude can generate outputs (like plots) that you can download"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"practical-example",children:"Practical Example"}),`
`,(0,n.jsx)(r.p,{children:"Let's look at a real example using streaming service data. The CSV file contains user information including subscription tiers, viewing habits, and whether they've churned (canceled their subscription)."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./37896049b603.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"First, upload the file using a helper function:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`file_metadata = upload('streaming.csv')
`})}),`
`,(0,n.jsx)(r.p,{children:"Then create a message that includes both the uploaded file and a request for analysis:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`messages = []
add_user_message(
    messages,
    [
        {
            "type": "text",
            "text": """Run a detailed analysis to determine major drivers of churn.
            Your final output should include at least one detailed plot summarizing your findings."""
        },
        {"type": "container_upload", "file_id": file_metadata.id},
    ],
)

chat(
    messages,
    tools=[{"type": "code_execution_20250522", "name": "code_execution"}]
)
`})}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-response",children:"Understanding the Response"}),`
`,(0,n.jsx)(r.p,{children:"When Claude uses code execution, the response contains multiple types of blocks:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Text blocks"})," - Claude's analysis and explanations"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Server tool use blocks"})," - The actual code Claude decided to run"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Code execution tool result blocks"})," - Output from running the code"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./532b74fcf524.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Claude might execute code multiple times during a single response, iteratively building up its analysis. Each execution cycle includes the code and its results."}),`
`,(0,n.jsx)(r.h2,{id:"downloading-generated-files",children:"Downloading Generated Files"}),`
`,(0,n.jsx)(r.p,{children:"One of the most powerful features is Claude's ability to generate files (like plots or reports) and make them available for download. When Claude creates a visualization, it gets stored in the container and you can download it using the Files API."}),`
`,(0,n.jsxs)(r.p,{children:["Look for blocks with ",(0,n.jsx)(r.code,{children:'type: "code_execution_output"'})," in the response - these contain file IDs for generated content:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`download_file("file_id_from_response")
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8c86d9737bcc.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The result is a comprehensive analysis with professional visualizations that would have taken significant manual coding to produce."}),`
`,(0,n.jsx)(r.h2,{id:"beyond-data-analysis",children:"Beyond Data Analysis"}),`
`,(0,n.jsx)(r.p,{children:"While data analysis is a natural fit, the combination of Files API and code execution opens up many possibilities:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Image processing and manipulation"}),`
`,(0,n.jsx)(r.li,{children:"Document parsing and transformation"}),`
`,(0,n.jsx)(r.li,{children:"Mathematical computations and modeling"}),`
`,(0,n.jsx)(r.li,{children:"Report generation with custom formatting"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key is that you can delegate complex, computational tasks to Claude while maintaining control over the inputs and outputs through the Files API. This creates a powerful workflow where Claude becomes your coding assistant that can actually execute and iterate on solutions."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};