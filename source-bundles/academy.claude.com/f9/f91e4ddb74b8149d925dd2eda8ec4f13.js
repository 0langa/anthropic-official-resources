import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building prompt evaluation workflows, graders provide objective signals about output quality. A grader takes model output and returns some kind of measurable feedback - typically a number between 1-10, where 10 represents high quality and 1 represents poor quality."}),`
`,(0,n.jsx)(r.h2,{id:"types-of-graders",children:"Types of Graders"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c73deec1accc.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"There are three main approaches to grading model outputs:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Code graders"})," - Programmatically evaluate outputs using custom logic"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Model graders"})," - Use another AI model to assess quality"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Human graders"})," - Have people manually review and score outputs"]}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"code-graders",children:"Code Graders"}),`
`,(0,n.jsx)(r.p,{children:"Code graders let you implement any programmatic check you can imagine. Common uses include:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Checking output length"}),`
`,(0,n.jsx)(r.li,{children:"Verifying output does/doesn't have certain words"}),`
`,(0,n.jsx)(r.li,{children:"Syntax validation for JSON, Python, or regex"}),`
`,(0,n.jsx)(r.li,{children:"Readability scores"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The only requirement is that your code returns some measurable signal when it runs."}),`
`,(0,n.jsx)(r.h3,{id:"model-graders",children:"Model Graders"}),`
`,(0,n.jsx)(r.p,{children:"Model graders make an additional API request to evaluate the original output. This approach offers tremendous flexibility for assessing:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Response quality"}),`
`,(0,n.jsx)(r.li,{children:"Quality of instruction following"}),`
`,(0,n.jsx)(r.li,{children:"Completeness"}),`
`,(0,n.jsx)(r.li,{children:"Helpfulness"}),`
`,(0,n.jsx)(r.li,{children:"Safety"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"human-graders",children:"Human Graders"}),`
`,(0,n.jsx)(r.p,{children:"Human graders provide the most flexibility but are time-intensive and tedious. They're useful for evaluating:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"General response quality"}),`
`,(0,n.jsx)(r.li,{children:"Comprehensiveness"}),`
`,(0,n.jsx)(r.li,{children:"Depth"}),`
`,(0,n.jsx)(r.li,{children:"Conciseness"}),`
`,(0,n.jsx)(r.li,{children:"Relevance"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"defining-evaluation-criteria",children:"Defining Evaluation Criteria"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a5a7c1966139.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Before implementing any grader, you need clear evaluation criteria. For a code generation prompt, you might focus on:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Format"})," - Should return only Python, JSON, or Regex without explanation"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Valid Syntax"})," - Produced code should have valid syntax"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Task Following"})," - Response should directly address the user's task with accurate code"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e466cc7dac9e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The first two criteria work well with code graders, while task following is better suited for model graders due to their flexibility."}),`
`,(0,n.jsx)(r.h2,{id:"implementing-a-model-grader",children:"Implementing a Model Grader"}),`
`,(0,n.jsx)(r.p,{children:"Here's how to build a model grader function:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def grade_by_model(test_case, output):
    # Create evaluation prompt
    eval_prompt = """
    You are an expert code reviewer. Evaluate this AI-generated solution.
    
    Task: {task}
    Solution: {solution}
    
    Provide your evaluation as a structured JSON object with:
    - "strengths": An array of 1-3 key strengths
    - "weaknesses": An array of 1-3 key areas for improvement  
    - "reasoning": A concise explanation of your assessment
    - "score": A number between 1-10
    """
    
    messages = []
    add_user_message(messages, eval_prompt)
    add_assistant_message(messages, "\`\`\`json")

    eval_text = chat(messages, stop_sequences=["\`\`\`"])
    return json.loads(eval_text)
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:'  The key insight is asking for strengths, weaknesses, and reasoning alongside the score. Without this context, models tend to default to middling scores around 6.  ## Integrating the Grader  Update your test case function to use the model grader:  ``` def run_test_case(test_case):     output = run_prompt(test_case)          # Get model evaluation     model_grade = grade_by_model(test_case, output)     score = model_grade["score"]     reasoning = model_grade["reasoning"]          return \\{         "output": output,          "test_case": test_case,          "score": score,         "reasoning": reasoning     \\} ``` ``   ## Calculating Average Scores  To get an overall performance metric, calculate the average score across all test cases:  ``` from statistics import mean  def run_eval(dataset):     results = []          for test_case in dataset:         result = run_test_case(test_case)         results.append(result)          average_score = mean([result["score"] for result in results])     print(f"Average score: \\{average_score\\}")          return results ``` `   This gives you a concrete, objective metric to track prompt performance over time. While model graders can be somewhat inconsistent, they provide a starting point for measuring and improving your prompts systematically.   ` ``'})})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};