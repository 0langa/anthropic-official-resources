import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"A typical prompt evaluation workflow follows a systematic approach to objectively measure and improve your prompts. While there are many different ways to assemble these workflows and various open source and paid tools available, understanding the core process helps you start small and scale up as needed."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c7dc99eee230.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"step-1-draft-your-initial-prompt",children:"Step 1: Draft Your Initial Prompt"}),`
`,(0,n.jsx)(r.p,{children:"Start by writing out a basic prompt that you want to improve. For this example, we'll use a simple prompt structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`prompt = f"""
Please answer the user's question:

{question}
"""
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1d125564307d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This gives us a baseline to work from. We won't know if it's effective until we evaluate it with some objective methodology."}),`
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
`,(0,n.jsx)(r.p,{children:`For example, the first question becomes a complete prompt that Claude can respond to. You'll repeat this process for all records in your dataset, getting back responses like "2 + 2 = 4", detailed oatmeal instructions, and information about the Moon's distance.`}),`
`,(0,n.jsx)(r.h2,{id:"step-4-feed-through-a-grader",children:"Step 4: Feed Through a Grader"}),`
`,(0,n.jsx)(r.p,{children:"Now comes the crucial step: objectively scoring Claude's responses. Take each question-answer pair and feed them into a grader that will evaluate the quality of Claude's response."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d78f04e3f229.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The grader assigns scores (typically 1-10) based on response quality:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"10 = Perfect answer, no room for improvement"}),`
`,(0,n.jsx)(r.li,{children:"4 = Definitely room for improvement"}),`
`,(0,n.jsx)(r.li,{children:"1 = Poor or incorrect response"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"In our example, the responses might score 10, 4, and 9 respectively. Average these scores together to get an overall performance metric: 7.66."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0e9f812d824c.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"step-5-change-prompt-and-repeat",children:"Step 5: Change Prompt and Repeat"}),`
`,(0,n.jsx)(r.p,{children:"With your baseline score established, you can now iterate on your prompt. Try adding more specific instructions to guide Claude's responses:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8ea9ee875981.png",alt:""})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`prompt = f"""
Please answer the user's question:

{question}

Answer the question with ample detail
"""
`})}),`
`,(0,n.jsx)(r.p,{children:"Run this improved prompt through the entire evaluation pipeline again. Compare the scores to see which version performs better."}),`
`,(0,n.jsx)(r.h2,{id:"prompt-scoring-and-iteration",children:"Prompt Scoring and Iteration"}),`
`,(0,n.jsx)(r.p,{children:"The power of this workflow lies in getting objective measurements for each prompt version. You can compare scores across different iterations and use the version with the best performance, or continue iterating to find even better approaches."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b0a62f4f11b1.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In our example:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Prompt v1 scored 7.66"}),`
`,(0,n.jsx)(r.li,{children:"Prompt v2 scored 8.7"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`The higher score for v2 suggests that adding "Answer the question with ample detail" improved the prompt's performance across our test cases.`}),`
`,(0,n.jsx)(r.p,{children:"This systematic approach gives you an objective way to measure prompt improvements rather than relying on subjective judgment. You can start with a simple implementation and gradually add more sophisticated evaluation criteria as your needs grow."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};