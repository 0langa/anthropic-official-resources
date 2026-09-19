import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we have our evaluation dataset ready, it's time to build the core evaluation pipeline. This involves taking each test case, merging it with our prompt, feeding it to Claude, and then grading the results."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./64d40e95dac4.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The evaluation process follows a clear workflow: we take our dataset of test cases, combine each one with our prompt template, send it to Claude for processing, and then evaluate the output using a grader system."}),`
`,(0,n.jsx)(r.h2,{id:"building-the-core-functions",children:"Building the Core Functions"}),`
`,(0,n.jsx)(r.p,{children:"The evaluation pipeline consists of three main functions, each with a specific responsibility. Let's start with the simplest one - the function that handles individual prompt execution."}),`
`,(0,n.jsx)(r.h2,{id:"the-runprompt-function",children:"The run_prompt Function"}),`
`,(0,n.jsx)(r.p,{children:"This function takes a test case and merges it with our prompt template:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_prompt(test_case):
    """Merges the prompt and test case input, then returns the result"""
    prompt = f"""
Please solve the following task:

{test_case["task"]}
"""
    
    messages = []
    add_user_message(messages, prompt)
    output = chat(messages)
    return output
`})}),`
`,(0,n.jsx)(r.p,{children:"Right now, we're keeping the prompt extremely simple. We're not including any formatting instructions, which means Claude will likely return more verbose output than we need. We'll refine this later as we iterate on our evaluation process."}),`
`,(0,n.jsx)(r.h2,{id:"the-runtestcase-function",children:"The run_test_case Function"}),`
`,(0,n.jsx)(r.p,{children:"This function orchestrates running a single test case and grading the result:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_test_case(test_case):
    """Calls run_prompt, then grades the result"""
    output = run_prompt(test_case)
    
    # TODO - Grading
    score = 10
    
    return {
        "output": output,
        "test_case": test_case,
        "score": score
    }
`})}),`
`,(0,n.jsx)(r.p,{children:"For now, we're using a hardcoded score of 10. The grading logic is where we'll spend significant time in upcoming sections, but this placeholder lets us test the overall pipeline structure."}),`
`,(0,n.jsx)(r.h2,{id:"the-runeval-function",children:"The run_eval Function"}),`
`,(0,n.jsx)(r.p,{children:"This is the main orchestrator that processes the entire dataset:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_eval(dataset):
    """Loads the dataset and calls run_test_case with each case"""
    results = []
    
    for test_case in dataset:
        result = run_test_case(test_case)
        results.append(result)
    
    return results
`})}),`
`,(0,n.jsx)(r.p,{children:"This function loops through every test case in our dataset, processes each one, and collects all the results into a single list."}),`
`,(0,n.jsx)(r.h2,{id:"running-the-evaluation",children:"Running the Evaluation"}),`
`,(0,n.jsx)(r.p,{children:"To execute our evaluation pipeline, we load the dataset and call our main function:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with open("dataset.json", "r") as f:
    dataset = json.load(f)

results = run_eval(dataset)
`})}),`
`,(0,n.jsx)(r.p,{children:"The first time you run this, expect it to take some time - even with Claude Haiku, processing a full dataset can take 30+ seconds. We'll cover optimization techniques later, but for now, patience is key."}),`
`,(0,n.jsx)(r.h2,{id:"examining-the-results",children:"Examining the Results"}),`
`,(0,n.jsx)(r.p,{children:"Once the evaluation completes, you can inspect the results with formatted JSON output:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`print(json.dumps(results, indent=2))
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./732c8965fcee.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The results structure contains an array of objects, where each object represents one test case execution. You'll see the Claude output (which tends to be quite verbose without formatting constraints), the original test case definition, and the score."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./540a756ccda5.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"what-weve-accomplished",children:"What We've Accomplished"}),`
`,(0,n.jsx)(r.p,{children:"At this point, we've successfully implemented the core evaluation pipeline. We can:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Take test cases from our dataset"}),`
`,(0,n.jsx)(r.li,{children:"Merge them with prompt templates"}),`
`,(0,n.jsx)(r.li,{children:"Get responses from Claude"}),`
`,(0,n.jsx)(r.li,{children:"Collect and organize all the results"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The missing piece is intelligent grading - right now we're just assigning a fixed score to every response. The next step is building graders that can actually evaluate whether Claude's outputs are correct, which is where the real sophistication of evaluation systems comes into play."}),`
`,(0,n.jsx)(r.p,{children:"This pipeline structure might seem simple, but it represents the foundation that most AI evaluation systems are built on. The complexity comes in the grading logic and prompt optimization, not in the basic orchestration of running tests."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};