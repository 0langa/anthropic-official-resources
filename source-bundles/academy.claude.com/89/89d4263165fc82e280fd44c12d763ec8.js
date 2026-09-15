import{Gp as e,qp as t}from"../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Building a custom prompt evaluation workflow starts with creating a solid prompt and then generating test data to see how well it performs. Let's walk through setting up an evaluation system for a prompt that helps users write AWS-specific code."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-goal",children:"Setting Up the Goal"}),`
`,(0,n.jsx)(r.p,{children:"Our prompt needs to assist users in writing three specific types of output for AWS use cases:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Python code"}),`
`,(0,n.jsx)(r.li,{children:"JSON configuration files"}),`
`,(0,n.jsx)(r.li,{children:"Regular expressions"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key requirement is that when a user requests help with a task, we return clean output in one of these formats without any extra explanations, headers, or footers."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6d85c55bc852.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's our starting prompt (version 1):"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`prompt = f"""
Please provide a solution to the following task:
{task}
"""
`})}),`
`,(0,n.jsx)(r.h2,{id:"creating-an-evaluation-dataset",children:"Creating an Evaluation Dataset"}),`
`,(0,n.jsx)(r.p,{children:"An evaluation dataset contains inputs that we'll feed into our prompt. For each combination of prompt and input, we'll run the prompt and analyze the results."}),`
`,(0,n.jsx)(r.p,{children:'Our dataset will be an array of JSON objects, where each object contains a "task" property describing what we want Claude to accomplish. We can either create this dataset by hand or generate it automatically using Claude.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3cd11bc1bff4.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Since we're generating test data, this is a perfect opportunity to use a faster model like Haiku instead of the full Claude model."}),`
`,(0,n.jsx)(r.h2,{id:"generating-test-data-with-code",children:"Generating Test Data with Code"}),`
`,(0,n.jsx)(r.p,{children:"Let's create a function that automatically generates our test dataset. First, we'll need our helper functions for working with Claude:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def add_user_message(messages, text):
    user_message = {"role": "user", "content": text}
    messages.append(user_message)

def add_assistant_message(messages, text):
    assistant_message = {"role": "assistant", "content": text}
    messages.append(assistant_message)

def chat(messages, system=None, temperature=1.0, stop_sequences=[]):
    params = {
        "model": model,
        "max_tokens": 1000,
        "messages": messages,
        "temperature": temperature
    }
    if system:
        params["system"] = system
    if stop_sequences:
        params["stop_sequences"] = stop_sequences
    
    response = client.messages.create(**params)
    return response.content[0].text
`})}),`
`,(0,n.jsx)(r.p,{children:"Now we'll create our dataset generation function:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def generate_dataset():
    prompt = """
Generate an evaluation dataset for a prompt evaluation. The dataset will be used to evaluate prompts that generate Python, JSON, or Regex specifically for AWS-related tasks. Generate an array of JSON objects, each representing task that requires Python, JSON, or a Regex to complete.

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
`,(0,n.jsx)(r.p,{children:"To properly parse the JSON response, we'll use prefilling and stop sequences:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'    messages = []\n    add_user_message(messages, prompt)\n    add_assistant_message(messages, "```json")\n    text = chat(messages, stop_sequences=["```"])\n    return json.loads(text)\n'})}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-dataset-generation",children:"Testing the Dataset Generation"}),`
`,(0,n.jsx)(r.p,{children:"Let's run our function and see what kind of test cases we get:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`dataset = generate_dataset()
print(dataset)
`})}),`
`,(0,n.jsx)(r.p,{children:"This should return three different test cases covering our target outputs - Python functions, JSON configurations, and regular expressions for AWS-specific tasks."}),`
`,(0,n.jsx)(r.h2,{id:"saving-the-dataset",children:"Saving the Dataset"}),`
`,(0,n.jsx)(r.p,{children:"Once we have our dataset, we'll save it to a file so we can easily load it later during evaluation:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with open('dataset.json', 'w') as f:
    json.dump(dataset, f, indent=2)
`})}),`
`,(0,n.jsxs)(r.p,{children:["This creates a ",(0,n.jsx)(r.code,{children:"dataset.json"})," file in the same directory as your notebook, containing your list of tasks ready for prompt evaluation."]}),`
`,(0,n.jsx)(r.p,{children:"With this foundation in place, you now have a systematic way to generate test data for evaluating how well your prompts perform across different types of AWS-related coding tasks."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};