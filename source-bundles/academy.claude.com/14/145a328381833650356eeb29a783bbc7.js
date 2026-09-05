import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Code-based grading adds an extra layer of validation to your prompt evaluations by checking whether the model's output follows the correct format and has valid syntax. This is especially useful when you're asking models to generate code, JSON, or regular expressions."}),`
`,(0,n.jsx)(r.h2,{id:"how-code-grading-works",children:"How Code Grading Works"}),`
`,(0,n.jsx)(r.p,{children:"The code grader evaluates two main criteria:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Format compliance"})," - Does the output contain only the requested format (Python, JSON, or regex) without explanations?"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Valid syntax"})," - Can the output actually be parsed or compiled successfully?"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e5e431429f3a.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The system uses separate validation functions for each format type. If the code parses successfully, it gets a perfect score of 10. If parsing fails with an error, it gets a score of 0."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-validation-functions",children:"Setting Up Validation Functions"}),`
`,(0,n.jsx)(r.p,{children:"You'll need three helper functions to validate different output types:"}),`
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
`,(0,n.jsxs)(r.p,{children:["These functions use Python's built-in parsing capabilities to check syntax validity. The ",(0,n.jsx)(r.code,{children:"json.loads()"})," function validates JSON, ",(0,n.jsx)(r.code,{children:"ast.parse()"})," creates a Python abstract syntax tree, and ",(0,n.jsx)(r.code,{children:"re.compile()"})," validates regular expressions."]}),`
`,(0,n.jsx)(r.h2,{id:"adding-format-information-to-test-cases",children:"Adding Format Information to Test Cases"}),`
`,(0,n.jsx)(r.p,{children:"Your test dataset needs to specify the expected output format for each task. Update your dataset generation prompt to include a format field:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
    "task": "Description of task",
    "format": "python"
}
`})}),`
`,(0,n.jsx)(r.p,{children:'The format field should contain "json", "python", or "regex" depending on what type of output you expect from that particular task.'}),`
`,(0,n.jsx)(r.h2,{id:"improving-your-prompt",children:"Improving Your Prompt"}),`
`,(0,n.jsx)(r.p,{children:"To get better results from the code grader, make your prompt instructions more specific:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`* Respond only with Python, JSON, or a plain Regex
* Do not add any comments or commentary or explanation
`})}),`
`,(0,n.jsx)(r.p,{children:"You can also use a pre-filled assistant message with code blocks and stop sequences to ensure clean output formatting."}),`
`,(0,n.jsx)(r.h2,{id:"combining-scores",children:"Combining Scores"}),`
`,(0,n.jsx)(r.p,{children:"The final step is merging your model grader score with the syntax grader score. A simple approach is to take the average of both scores:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`model_grade = grade_by_model(test_case, output)
model_score = model_grade["score"]
syntax_score = grade_syntax(output, test_case)

score = (model_score + syntax_score) / 2
`})}),`
`,(0,n.jsx)(r.p,{children:"This gives equal weight to both content quality (from the model grader) and technical correctness (from the code grader). You can adjust this weighting based on what matters more for your specific use case."}),`
`,(0,n.jsx)(r.h2,{id:"interpreting-results",children:"Interpreting Results"}),`
`,(0,n.jsx)(r.p,{children:"Once you run your evaluation, you'll get a combined score that reflects both the semantic quality and technical correctness of the generated code. Remember that a single score in isolation doesn't tell you much - the real value comes from comparing scores as you iterate on your prompt design."}),`
`,(0,n.jsx)(r.p,{children:"Use this baseline score to test prompt improvements and see if your changes actually lead to better, more reliable code generation."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};