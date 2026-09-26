import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we have our evaluation dataset ready, it's time to build the core evaluation pipeline. This involves taking each test case, merging it with our prompt, feeding it to Claude, and then grading the results."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./64d40e95dac4.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The evaluation process follows a clear workflow: we take our dataset of test cases, combine each one with our prompt template, send it to Claude for processing, and then evaluate the output using a grader system."}),`
`,(0,n.jsx)(r.h2,{id:"building-the-core-functions",children:"Building the Core Functions"}),`
`,(0,n.jsx)(r.p,{children:"The evaluation pipeline consists of three main functions, each with a specific responsibility. Let's start with the simplest one - the function that handles individual prompts."}),`
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
`,(0,n.jsx)(r.p,{children:"Right now, we're keeping the prompt extremely simple. We're not including any formatting instructions, so Claude will likely return more verbose output than we need. We'll refine this later as we iterate on our prompt design."}),`
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
`,(0,n.jsx)(r.p,{children:"For now, we're using a hardcoded score of 10. The grading logic is where we'll spend significant time in upcoming sections, but this placeholder lets us test the overall pipeline."}),`
`,(0,n.jsx)(r.h2,{id:"the-runeval-function",children:"The run_eval Function"}),`
`,(0,n.jsx)(r.p,{children:"This function coordinates the entire evaluation process:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_eval(dataset):
    """Loads the dataset and calls run_test_case with each case"""
    results = []
    
    for test_case in dataset:
        result = run_test_case(test_case)
        results.append(result)
    
    return results
`})}),`
`,(0,n.jsx)(r.p,{children:"This function processes every test case in our dataset and collects all the results into a single list."}),`
`,(0,n.jsx)(r.h2,{id:"running-the-evaluation",children:"Running the Evaluation"}),`
`,(0,n.jsx)(r.p,{children:"To execute our evaluation pipeline, we load our dataset and run it through our functions:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with open("dataset.json", "r") as f:
    dataset = json.load(f)

results = run_eval(dataset)
`})}),`
`,(0,n.jsx)(r.p,{children:"The first time you run this, expect it to take some time - even with Claude Haiku, it can take around 30 seconds to process a full dataset. We'll cover optimization techniques later."}),`
`,(0,n.jsx)(r.h2,{id:"examining-the-results",children:"Examining the Results"}),`
`,(0,n.jsx)(r.p,{children:"The evaluation returns a structured JSON array where each object represents one test case result:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`print(json.dumps(results, indent=2))
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./732c8965fcee.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Each result contains three key pieces of information:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"output"}),": The complete response from Claude"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"test_case"}),": The original test case that was processed"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"score"}),": The evaluation score (currently hardcoded)"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"As you can see in the output, Claude generates quite verbose responses since we haven't provided specific formatting instructions yet. This is exactly the kind of issue we'll address as we refine our prompts."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./540a756ccda5.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"what-weve-accomplished",children:"What We've Accomplished"}),`
`,(0,n.jsx)(r.p,{children:"At this point, we've successfully built the core evaluation pipeline. We can take our dataset, process it through Claude, and collect structured results. The major missing piece is the grading system - that hardcoded score of 10 needs to be replaced with actual evaluation logic."}),`
`,(0,n.jsx)(r.p,{children:"This pipeline represents the foundation of most AI evaluation systems. While it may seem simple, you've just built the majority of what an eval pipeline actually does. The complexity comes in the details - better prompts, sophisticated grading, and performance optimizations."}),`
`,(0,n.jsx)(r.p,{children:"Next, we'll dive into the critical topic of graders, which will transform our hardcoded scores into meaningful evaluations of Claude's performance."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};