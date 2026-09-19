import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"A typical prompt evaluation workflow follows five key steps that help you systematically improve your prompts through objective measurement. While there are many different ways to assemble these workflows and various open source and paid tools available, understanding the core process helps you start small and scale up as needed."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c7dc99eee230.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"step-1-draft-a-prompt",children:"Step 1: Draft a Prompt"}),`
`,(0,n.jsx)(r.p,{children:"Start by writing an initial prompt that you want to improve. For this example, we'll use a simple prompt:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`prompt = f"""
Please answer the user's question:

{question}
"""
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1d125564307d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This basic prompt will serve as our baseline for testing and improvement."}),`
`,(0,n.jsx)(r.h2,{id:"step-2-create-an-eval-dataset",children:"Step 2: Create an Eval Dataset"}),`
`,(0,n.jsx)(r.p,{children:"Your evaluation dataset contains sample inputs that represent the types of questions or requests your prompt will handle in production. The dataset should include questions that will be interpolated into your prompt template."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./204aa7028112.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For this example, our dataset includes three questions:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`"What's 2+2?"`}),`
`,(0,n.jsx)(r.li,{children:'"How do I make oatmeal?"'}),`
`,(0,n.jsx)(r.li,{children:'"How far away is the Moon?"'}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"In real-world evaluations, you might have tens, hundreds, or even thousands of records. You can assemble these datasets by hand or use Claude to generate them for you."}),`
`,(0,n.jsx)(r.h2,{id:"step-3-feed-through-claude",children:"Step 3: Feed Through Claude"}),`
`,(0,n.jsx)(r.p,{children:"Take each question from your dataset and merge it with your prompt template to create complete prompts. Then send each one to Claude to get responses."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cbbc8e6ec17e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For example, the first question becomes:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Please answer the user's question:
What's 2+2?
`})}),`
`,(0,n.jsx)(r.p,{children:'Claude might respond with "2 + 2 = 4" for the math question, provide oatmeal cooking instructions for the second question, and give the distance to the Moon for the third.'}),`
`,(0,n.jsx)(r.h2,{id:"step-4-feed-through-a-grader",children:"Step 4: Feed Through a Grader"}),`
`,(0,n.jsx)(r.p,{children:"The grader evaluates the quality of Claude's responses by examining both the original question and Claude's answer. This step provides objective scoring, typically on a scale from 1 to 10, where 10 represents a perfect answer and lower scores indicate room for improvement."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d78f04e3f229.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In our example, the grader might assign:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Math question: 10 (perfect answer)"}),`
`,(0,n.jsx)(r.li,{children:"Oatmeal question: 4 (needs improvement)"}),`
`,(0,n.jsx)(r.li,{children:"Moon question: 9 (very good answer)"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The average score across all questions gives you an objective measurement: (10 + 4 + 9) ÷ 3 = 7.66"}),`
`,(0,n.jsx)(r.h2,{id:"step-5-change-prompt-and-repeat",children:"Step 5: Change Prompt and Repeat"}),`
`,(0,n.jsx)(r.p,{children:"Now that you have a baseline score, you can modify your prompt and run the entire process again to see if your changes improve performance."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8ea9ee875981.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For example, you might add more guidance to your prompt:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`prompt = f"""
Please answer the user's question:

{question}

Answer the question with ample detail
"""
`})}),`
`,(0,n.jsx)(r.p,{children:"After running this improved prompt through the same evaluation process, you might get a higher average score of 8.7, indicating that the additional instruction helped Claude provide better responses."}),`
`,(0,n.jsx)(r.h2,{id:"prompt-scoring",children:"Prompt Scoring"}),`
`,(0,n.jsx)(r.p,{children:"The key benefit of this workflow is getting objective measurements of prompt performance. You can:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Compare different prompt versions numerically"}),`
`,(0,n.jsx)(r.li,{children:"Use the version with the best score"}),`
`,(0,n.jsx)(r.li,{children:"Continue iterating to find even better approaches"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b0a62f4f11b1.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This systematic approach removes guesswork from prompt engineering and gives you confidence that your changes are actually improvements rather than just different variations."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};