import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"A typical prompt evaluation workflow follows five key steps that help you systematically improve your prompts through objective measurement. While there are many different ways to assemble these workflows and various open source and paid tools available, understanding the core process helps you start small and scale up as needed."}),`
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
`,(0,n.jsx)(r.h2,{id:"step-2-create-an-evaluation-dataset",children:"Step 2: Create an Evaluation Dataset"}),`
`,(0,n.jsx)(r.p,{children:"Your evaluation dataset contains sample inputs that you'll feed into your prompt. Since our prompt only has one input (the user's question), we need a collection of different questions to test with."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./204aa7028112.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The dataset contains questions that we will merge with our prompt. You can assemble these datasets by hand or generate them using Claude. In real-world evaluations, you might have tens, hundreds, or even thousands of different records, but we'll start with just three questions for this example:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"What's 2+2?"}),`
`,(0,n.jsx)(r.li,{children:"How do I make oatmeal?"}),`
`,(0,n.jsx)(r.li,{children:"How far away is the Moon?"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"step-3-feed-through-claude",children:"Step 3: Feed Through Claude"}),`
`,(0,n.jsx)(r.p,{children:"Take each question from your dataset and merge it with your prompt template to create complete prompts. Then send each one to Claude and collect the responses."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cbbc8e6ec17e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'For example, the first question becomes a complete prompt that Claude processes and returns an answer like "2 + 2 = 4". You repeat this process for all questions in your dataset, building a collection of question-answer pairs.'}),`
`,(0,n.jsx)(r.h2,{id:"step-4-feed-through-a-grader",children:"Step 4: Feed Through a Grader"}),`
`,(0,n.jsx)(r.p,{children:"Now comes the crucial step of objectively measuring the quality of Claude's responses. You take each question-answer pair and feed them into a grader that scores the responses."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d78f04e3f229.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The grader assigns scores (typically 1-10) based on answer quality:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"10 = Perfect answer with no room for improvement"}),`
`,(0,n.jsx)(r.li,{children:"4 = Adequate but definitely room for improvement"}),`
`,(0,n.jsx)(r.li,{children:"Lower scores indicate poor responses"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"After scoring all responses, you average the scores together. In our example, scores of 10, 4, and 9 average to 7.66, giving you an objective measurement of your prompt's performance."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0e9f812d824c.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"step-5-change-prompt-and-repeat",children:"Step 5: Change Prompt and Repeat"}),`
`,(0,n.jsx)(r.p,{children:"With your baseline score established, you can now modify your prompt and run the entire process again to see if your changes improve performance."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8ea9ee875981.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For example, you might enhance the original prompt by adding more specific instructions:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`prompt = f"""
Please answer the user's question:

{question}

Answer the question with ample detail
"""
`})}),`
`,(0,n.jsx)(r.h2,{id:"prompt-scoring",children:"Prompt Scoring"}),`
`,(0,n.jsx)(r.p,{children:"The power of this workflow lies in getting objective measurements of prompt performance. You can compare scores between different prompt versions to determine which performs better."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b0a62f4f11b1.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In our example:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Prompt v1 scored 7.66"}),`
`,(0,n.jsx)(r.li,{children:"Prompt v2 scored 8.7"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`The higher score for v2 provides objective evidence that adding "Answer the question with ample detail" improved the prompt's performance. You can then use the better-performing version or continue iterating to achieve even higher scores.`}),`
`,(0,n.jsx)(r.p,{children:"This systematic approach removes guesswork from prompt improvement and gives you a reliable framework for optimization. While there's complexity in implementing effective graders, this workflow provides a solid foundation for building your own evaluation system."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};