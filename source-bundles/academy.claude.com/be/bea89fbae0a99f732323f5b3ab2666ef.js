import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Building a custom prompt evaluation workflow starts with creating a clear goal and generating test data. In this case, we're building a prompt that helps users write AWS-specific code - either Python functions, JSON configurations, or regular expressions - with no extra explanations or formatting."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-goal",children:"Setting Up the Goal"}),`
`,(0,n.jsx)(r.p,{children:"The prompt should take a user's task description and return one of three output types:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Python code"}),`
`,(0,n.jsx)(r.li,{children:"JSON configuration"}),`
`,(0,n.jsx)(r.li,{children:"Regular expressions"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key requirement is that responses should contain only the requested code without headers, footers, or explanations."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b90f92e3b63f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Starting with a simple first version keeps things manageable. The initial prompt template is straightforward: "Please provide a solution to the following task: {task}"'}),`
`,(0,n.jsx)(r.h2,{id:"creating-evaluation-datasets",children:"Creating Evaluation Datasets"}),`
`,(0,n.jsx)(r.p,{children:"An evaluation dataset contains input examples that you'll feed into your prompt. Each test case gets combined with your prompt and sent to Claude, letting you see how well the prompt performs across different scenarios."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c241835434eb.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"You can create datasets in two ways:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Manually write test cases by hand"}),`
`,(0,n.jsx)(r.li,{children:"Generate them automatically using Claude"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For automatic generation, using a faster model like Haiku makes sense since you're generating multiple test cases."}),`
`,(0,n.jsx)(r.h2,{id:"generating-test-data-with-code",children:"Generating Test Data with Code"}),`
`,(0,n.jsx)(r.p,{children:"The dataset generation function uses Claude to create realistic test scenarios. Here's the basic structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def generate_dataset():
    prompt = """
    Generate 3 AWS-related tasks that require Python, JSON, or Regex solutions.
    
    Focus on tasks that can be solved by writing a single Python function, 
    a single JSON object, or tasks that do not require writing much code.
    
    Example output:
    [
        {
            "task": "Description of task"
        },
        ...additional
    ]
    
    Please generate 3 objects.
    """
    
    messages = []
    add_user_message(messages, prompt)
    add_assistant_message(messages, "\`\`\`json")
    text = chat(messages, stop_sequences=["\`\`\`"])
    return json.loads(text)
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:'  This approach uses the pre-filled assistant message technique with stop sequences to extract clean JSON responses. The assistant message starts with "```json" and stops at the closing "```", ensuring you get properly formatted data.  ## Saving Your Dataset  Once generated, save the dataset to avoid regenerating it constantly:  ``` dataset = generate_dataset() with open("dataset.json", "w") as f:     json.dump(dataset, f, indent=2) ``` `   The generated dataset creates realistic AWS tasks like extracting account IDs from ARNs, writing JSON schemas for EC2 configurations, and creating regex patterns for S3 bucket names. While three test cases work for initial development, production evaluation would need significantly more examples with greater variety.  This foundation gives you a repeatable process for creating evaluation datasets that match your specific use case, setting up the next steps of running evaluations and measuring prompt performance.   `'})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};