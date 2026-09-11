import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Prompt engineering is about taking a prompt you've written and improving it to get more reliable, higher-quality outputs. This process involves iterative refinement - starting with a basic prompt, evaluating its performance, then systematically applying engineering techniques to improve it."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./135340165a55.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-iterative-improvement-process",children:"The Iterative Improvement Process"}),`
`,(0,n.jsx)(r.p,{children:"The approach follows a clear cycle that you can repeat until you achieve your desired results:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c932d83fda99.png",alt:""})}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Set a goal"})," - Define what you want your prompt to accomplish"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Write an initial prompt"})," - Create a basic first attempt"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Evaluate the prompt"})," - Test it against your criteria"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Apply prompt engineering techniques"})," - Use specific methods to improve performance"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Re-evaluate"})," - Verify that your changes actually improved the results"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"You repeat the last two steps until you're satisfied with the performance. Each iteration should show measurable improvement in your evaluation scores."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-your-evaluation-pipeline",children:"Setting Up Your Evaluation Pipeline"}),`
`,(0,n.jsx)(r.p,{children:"To demonstrate this process, we'll work with a practical example: creating a prompt that generates one-day meal plans for athletes. The prompt needs to take into account an athlete's height, weight, goals, and dietary restrictions, then produce a comprehensive meal plan."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./38a6bdc804f9.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The evaluation setup uses a ",(0,n.jsx)(r.code,{children:"PromptEvaluator"})," class that handles dataset generation and model grading. When creating your evaluator instance, you can control concurrency with the ",(0,n.jsx)(r.code,{children:"max_concurrent_tasks"})," parameter:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`evaluator = PromptEvaluator(max_concurrent_tasks=5)
`})}),`
`,(0,n.jsx)(r.p,{children:"Start with a low concurrency value (like 3) to avoid rate limit errors. You can increase it if your API quota allows for faster processing."}),`
`,(0,n.jsx)(r.h2,{id:"generating-test-data",children:"Generating Test Data"}),`
`,(0,n.jsx)(r.p,{children:"The evaluation system can automatically generate test cases based on your prompt requirements. You define what inputs your prompt needs:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`dataset = evaluator.generate_dataset(
    task_description="Write a compact, concise 1 day meal plan for a single athlete",
    prompt_inputs_spec={
        "height": "Athlete's height in cm",
        "weight": "Athlete's weight in kg", 
        "goal": "Goal of the athlete",
        "restrictions": "Dietary restrictions of the athlete"
    },
    output_file="dataset.json",
    num_cases=3
)
`})}),`
`,(0,n.jsx)(r.p,{children:"Keep the number of test cases low (2-3) during development to speed up your iteration cycle. You can increase this for final validation."}),`
`,(0,n.jsx)(r.h2,{id:"writing-your-initial-prompt",children:"Writing Your Initial Prompt"}),`
`,(0,n.jsx)(r.p,{children:"Start with a simple, naive prompt to establish a baseline. Here's an example of a deliberately basic first attempt:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def run_prompt(prompt_inputs):
    prompt = f"""
What should this person eat?

- Height: {prompt_inputs["height"]}
- Weight: {prompt_inputs["weight"]}
- Goal: {prompt_inputs["goal"]}
- Dietary restrictions: {prompt_inputs["restrictions"]}
"""
    
    messages = []
    add_user_message(messages, prompt)
    return chat(messages)
`})}),`
`,(0,n.jsx)(r.p,{children:"This basic prompt will likely produce poor results, but it gives you a starting point to measure improvement against."}),`
`,(0,n.jsx)(r.h2,{id:"adding-evaluation-criteria",children:"Adding Evaluation Criteria"}),`
`,(0,n.jsx)(r.p,{children:"When running your evaluation, you can specify additional criteria that the grading model should consider:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`results = evaluator.run_evaluation(
    run_prompt_function=run_prompt,
    dataset_file="dataset.json",
    extra_criteria="""
The output should include:
- Daily caloric total
- Macronutrient breakdown  
- Meals with exact foods, portions, and timing
"""
)
`})}),`
`,(0,n.jsx)(r.p,{children:"This helps ensure your prompt is evaluated against the specific requirements that matter for your use case."}),`
`,(0,n.jsx)(r.h2,{id:"analyzing-results",children:"Analyzing Results"}),`
`,(0,n.jsx)(r.p,{children:"After running an evaluation, you'll get both a numerical score and a detailed HTML report. The report shows you exactly how each test case performed, including the model's reasoning for each score."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2fd0f9ee259e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Don't be discouraged by low initial scores - a score of 2.3 out of 10 is typical for a first attempt. The goal is to see consistent improvement as you apply engineering techniques."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5c83046a90e6.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The detailed evaluation report helps you understand exactly where your prompt is failing and what improvements are needed. Use this feedback to guide your next iteration."}),`
`,(0,n.jsx)(r.h2,{id:"next-steps",children:"Next Steps"}),`
`,(0,n.jsx)(r.p,{children:"With your baseline established, you're ready to start applying specific prompt engineering techniques. Each technique you learn should result in measurable improvement in your evaluation scores, gradually transforming your basic prompt into a reliable, high-performing tool."}),`
`,(0,n.jsx)(r.p,{children:"Remember that prompt engineering is an iterative process. The key is to make one change at a time, evaluate the impact, and build on what works. This systematic approach ensures you understand which techniques provide the most value for your specific use case."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};