import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When evaluating AI models that generate code, you need more than just checking if the response makes sense. You also need to verify that the generated code actually has valid syntax and follows the correct format. This is where code-based grading comes in."}),`
`,(0,n.jsx)(r.h2,{id:"how-code-grading-works",children:"How Code Grading Works"}),`
`,(0,n.jsx)(r.p,{children:"Code grading validates two key aspects of AI-generated responses:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3c6bf7193334.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Format"})," - The response should return only the requested code type (Python, JSON, or Regex) without explanations"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Valid Syntax"})," - The generated code should actually parse correctly as the intended language"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Task Following"})," - The response should directly address what was asked and be accurate"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The first two criteria are handled by the code grader, while task following is evaluated by the model grader. Together, they provide a comprehensive evaluation."}),`
`,(0,n.jsx)(r.h2,{id:"syntax-validation-functions",children:"Syntax Validation Functions"}),`
`,(0,n.jsx)(r.p,{children:"To check if generated code has valid syntax, you can create three helper functions that attempt to parse the output:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e7c24c3b0c71.png",alt:""})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def validate_json(text):
    try:
        json.loads(text.strip())
        return 10
    except json.JSONDecodeError:
        return 0

def validate_python(text):
    try:
        ast.parse(text.strip())
        return 10
    except SyntaxError:
        return 0

def validate_regex(text):
    try:
        re.compile(text.strip())
        return 10
    except re.error:
        return 0
`})}),`
`,(0,n.jsx)(r.p,{children:"Each function tries to parse the text as its respective format. If parsing succeeds, it returns a perfect score of 10. If it fails with an error, the syntax is invalid and returns 0."}),`
`,(0,n.jsx)(r.h2,{id:"dataset-format-requirements",children:"Dataset Format Requirements"}),`
`,(0,n.jsx)(r.p,{children:"For the code grader to know which validator to use, your test cases need to specify the expected output format:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
    "task": "Create a Python function to validate an AWS IAM username",
    "format": "python"
}
`})}),`
`,(0,n.jsx)(r.p,{children:"You can update your dataset generation prompt to automatically include this format field by adding it to the example output structure."}),`
`,(0,n.jsx)(r.h2,{id:"improving-prompt-clarity",children:"Improving Prompt Clarity"}),`
`,(0,n.jsx)(r.p,{children:"To get better results from your AI model, make your prompt instructions more specific about the expected output format:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`* Respond only with Python, JSON, or a plain Regex
* Do not add any comments or commentary or explanation
`})}),`
`,(0,n.jsx)(r.p,{children:"You can also use a pre-filled assistant message with code blocks to encourage the model to return just the raw code:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'add_assistant_message(messages, "```code")\n'})}),`
`,(0,n.jsx)(r.p,{children:"This tells Claude to start generating code content without having to specify whether it's Python, JSON, or Regex ahead of time."}),`
`,(0,n.jsx)(r.h2,{id:"combining-scores",children:"Combining Scores"}),`
`,(0,n.jsx)(r.p,{children:"The final step is merging the model grader score with the code grader score. A simple approach is to take the average:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`model_grade = grade_by_model(test_case, output)
model_score = model_grade["score"]
syntax_score = grade_syntax(output, test_case)

score = (model_score + syntax_score) / 2
`})}),`
`,(0,n.jsx)(r.p,{children:"This gives equal weight to both content quality and technical correctness. You might adjust these weights based on what matters more for your specific use case."}),`
`,(0,n.jsx)(r.h2,{id:"testing-your-implementation",children:"Testing Your Implementation"}),`
`,(0,n.jsx)(r.p,{children:"Once you've implemented code grading, run your evaluation to get a baseline score. The score itself isn't inherently good or bad - what matters is whether you can improve it by refining your prompts. This gives you a quantitative way to measure prompt engineering progress rather than relying on subjective assessment."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};