import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Building a custom prompt evaluation workflow starts with creating a solid prompt and then generating test data to see how well it performs. Let's walk through setting up an evaluation system for a prompt that helps users write AWS-specific code."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-goal",children:"Setting Up the Goal"}),`
`,(0,n.jsx)(r.p,{children:"Our prompt needs to assist users in writing three specific types of output for AWS use cases:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Python code"}),`
`,(0,n.jsx)(r.li,{children:"JSON configuration files"}),`
`,(0,n.jsx)(r.li,{children:"Regular expressions"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key requirement is that when a user requests help with a task, we return clean output in one of these formats without any extra explanations, headers, or footers."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6d85c55bc852.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's our initial prompt template:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`prompt = f"""
Please provide a solution to the following task:
{task}
"""
`})}),`
`,(0,n.jsx)(r.h2,{id:"creating-an-evaluation-dataset",children:"Creating an Evaluation Dataset"}),`
`,(0,n.jsx)(r.p,{children:`An evaluation dataset contains inputs that we'll feed into our prompt to test its performance. For our case, we need an array of JSON objects where each object has a "task" property describing what we want Claude to accomplish.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3cd11bc1bff4.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"You can create datasets in two ways:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Assemble them manually"}),`
`,(0,n.jsx)(r.li,{children:"Generate them automatically using Claude"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For automatic generation, using a faster model like Haiku makes sense since we're generating test data rather than production output."}),`
`,(0,n.jsx)(r.h2,{id:"generating-test-data-with-code",children:"Generating Test Data with Code"}),`
`,(0,n.jsx)(r.p,{children:"Let's build a function that asks Claude to generate test cases for us. The function will create a comprehensive prompt that requests specific types of AWS-related tasks."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./29c157757d3f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's the core function structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def generate_dataset():
    prompt = """
    Generate an evaluation dataset for a prompt evaluation. The dataset will be used to evaluate prompts 
    that generate Python, JSON, or Regex specifically for AWS-related tasks. Generate an array of objects, 
    each representing task that requires Python, JSON, or a Regex to complete.
    
    Example output:
    \`\`\`json
    [
        \\{
            "task": "Description of task",
        \\},
        ...additional
    ]
    \`\`\`
    
    * Focus on tasks that can be solved by writing a single Python function, a single JSON object, or a single regex
    * Focus on tasks that do not require writing much code
    
    Please generate 3 objects.
    """
`})}),`
`,(0,n.jsx)(r.h2,{id:"implementing-the-generation-logic",children:"Implementing the Generation Logic"}),`
`,(0,n.jsx)(r.p,{children:"To get clean JSON output from Claude, we'll use the pre-filling technique with stop sequences:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'messages = []\nadd_user_message(messages, prompt)\nadd_assistant_message(messages, "```json")\ntext = chat(messages, stop_sequences=["```"])\nreturn json.loads(text)\n'})}),`
`,(0,n.jsx)(r.p,{children:"This approach ensures Claude starts its response with properly formatted JSON and stops at the closing markdown fence."}),`
`,(0,n.jsx)(r.h2,{id:"testing-and-saving-the-dataset",children:"Testing and Saving the Dataset"}),`
`,(0,n.jsx)(r.p,{children:"After running the generation function, you should get back realistic test cases like:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Create a Python function to extract the AWS region from an ARN"}),`
`,(0,n.jsx)(r.li,{children:"Write a JSON configuration for an AWS Lambda function"}),`
`,(0,n.jsx)(r.li,{children:"Develop a regular expression to validate an AWS S3 bucket name"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./79ae8e4c4158.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Save your generated dataset to a file for easy reuse:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`dataset = generate_dataset()

with open('dataset.json', 'w') as f:
    json.dump(dataset, f, indent=2)
`})}),`
`,(0,n.jsxs)(r.p,{children:["This creates a ",(0,n.jsx)(r.code,{children:"dataset.json"})," file in your notebook directory containing all your test cases, ready to use for prompt evaluation in the next steps of your workflow."]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};