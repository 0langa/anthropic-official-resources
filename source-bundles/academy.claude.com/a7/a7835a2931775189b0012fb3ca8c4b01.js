import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building prompt evaluation workflows, grading systems provide objective signals about output quality. A grader takes model output and returns some kind of measurable feedback - typically a number between 1 and 10, where 10 represents high quality and 1 represents poor quality."}),`
`,(0,n.jsx)(r.h2,{id:"types-of-graders",children:"Types of Graders"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4ddd6988ba49.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"There are three main approaches to grading model outputs:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Code graders"})," - Programmatically evaluate outputs using custom code"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Model graders"})," - Use another AI model to assess the quality"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Human graders"})," - Have people manually review and score outputs"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"code-graders",children:"Code Graders"}),`
`,(0,n.jsx)(r.p,{children:"Code graders let you implement any programmatic check you can imagine. Common uses include:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Checking output length"}),`
`,(0,n.jsx)(r.li,{children:"Verifying output does or doesn't contain certain words"}),`
`,(0,n.jsx)(r.li,{children:"Syntax validation for JSON, Python, or regex"}),`
`,(0,n.jsx)(r.li,{children:"Readability scores to ensure appropriate reading levels"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"model-graders",children:"Model Graders"}),`
`,(0,n.jsx)(r.p,{children:"Model graders offer tremendous flexibility by using an additional API call to evaluate outputs. They're useful for assessing:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Response quality"}),`
`,(0,n.jsx)(r.li,{children:"Quality of instruction following"}),`
`,(0,n.jsx)(r.li,{children:"Completeness"}),`
`,(0,n.jsx)(r.li,{children:"Helpfulness"}),`
`,(0,n.jsx)(r.li,{children:"Safety"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"human-graders",children:"Human Graders"}),`
`,(0,n.jsx)(r.p,{children:"Human graders provide the most flexibility but come with significant downsides. While humans can evaluate responses for any criteria imaginable, the process is time-consuming and tedious."}),`
`,(0,n.jsx)(r.h2,{id:"defining-evaluation-criteria",children:"Defining Evaluation Criteria"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./73dbc7e22915.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Before implementing any grader, you need clear evaluation criteria. For a code generation prompt, you might focus on:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Format"})," - Should return only Python, JSON, or Regex without explanation"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Valid Syntax"})," - Produced code should have valid syntax"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Task Following"})," - Response should directly address the user's task with accurate code"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f105fac52c91.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The first two criteria work well with code graders, while task following is better suited for model graders due to their flexibility."}),`
`,(0,n.jsx)(r.h2,{id:"implementing-a-model-grader",children:"Implementing a Model Grader"}),`
`,(0,n.jsx)(r.p,{children:"Model graders are often the easiest to implement. Here's a basic structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'def grade_by_model(test_case, output):\n    messages = []\n    add_user_message(messages, eval_prompt)\n    add_assistant_message(messages, "```json")\n    eval_text = chat(messages, stop_sequences=["```"])\n    return json.loads(eval_text)\n'})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d155671c3ade.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The grading prompt should be comprehensive and include:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Clear role definition for the grader"}),`
`,(0,n.jsx)(r.li,{children:"The original task"}),`
`,(0,n.jsx)(r.li,{children:"The AI-generated solution to evaluate"}),`
`,(0,n.jsx)(r.li,{children:"Specific output format requirements"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Ask for more than just a score. Request strengths, weaknesses, and reasoning alongside the numerical score. This prevents the model from defaulting to middling scores like 6 and forces more thoughtful evaluation."}),`
`,(0,n.jsx)(r.h2,{id:"integrating-graders-into-your-workflow",children:"Integrating Graders into Your Workflow"}),`
`,(0,n.jsx)(r.p,{children:"Once you have a grader function, integrate it into your test case runner:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_test_case(test_case):
    output = run_prompt(test_case)
    
    # Call the model grader
    model_grade = grade_by_model(test_case, output)
    score = model_grade["score"]
    reasoning = model_grade["reasoning"]
    
    return {
        "output": output, 
        "test_case": test_case, 
        "score": score,
        "reasoning": reasoning
    }
`})}),`
`,(0,n.jsx)(r.p,{children:"After running all test cases, calculate an average score to get an objective metric for your prompt's performance:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from statistics import mean

def run_eval(dataset):
    results = []
    for test_case in dataset:
        result = run_test_case(test_case)
        results.append(result)
    
    average_score = mean([result["score"] for result in results])
    print(f"Average score: {average_score}")
    
    return results
`})}),`
`,(0,n.jsx)(r.p,{children:"This gives you a concrete number to focus on improving. While model graders can be somewhat capricious and might benefit from better guidance, they provide a starting point for objective evaluation that you can iterate on and improve."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};