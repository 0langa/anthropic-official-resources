import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Retrieval Augmented Generation (RAG) is a technique that helps you work with large documents when using Claude. Instead of cramming an entire 800-page financial report into a single prompt, RAG lets you intelligently find and include only the most relevant sections for each question."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-large-documents",children:"The Problem with Large Documents"}),`
`,(0,n.jsx)(r.p,{children:'Imagine you have a massive financial document and want to ask Claude specific questions about it, like "What risk factors does this company have?" You face a fundamental challenge: how do you get the right information from the document into Claude so it can answer your question effectively?'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./aa2d6dcef113.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"option-1-include-everything-in-the-prompt",children:"Option 1: Include Everything in the Prompt"}),`
`,(0,n.jsx)(r.p,{children:"The first approach seems straightforward - extract all the text from the document and stuff it directly into your prompt along with the user's question."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./38c79483e6c9.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This approach has several problems:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"There's a hard limit on how much text Claude can process - your document might be too long"}),`
`,(0,n.jsx)(r.li,{children:"Claude becomes less effective with very long prompts"}),`
`,(0,n.jsx)(r.li,{children:"Larger prompts cost more money and take longer to process"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"option-2-break-documents-into-chunks",children:"Option 2: Break Documents into Chunks"}),`
`,(0,n.jsx)(r.p,{children:"The second approach is more sophisticated. You break the document into smaller chunks during a preprocessing step, then find and include only the chunks relevant to each user question."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1a6d91701aed.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`Here's how it works: when a user asks "What risks does this company face?", you search through your chunks to find the one about "Risk Factors" and include only that section in your prompt to Claude.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b28946e9396a.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"benefits-of-the-chunking-approach",children:"Benefits of the Chunking Approach"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude can focus on only the most relevant content"}),`
`,(0,n.jsx)(r.li,{children:"Scales up to very large documents"}),`
`,(0,n.jsx)(r.li,{children:"Works with multiple documents"}),`
`,(0,n.jsx)(r.li,{children:"Smaller prompts cost less and run faster"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"challenges-with-chunking",children:"Challenges with Chunking"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Requires a preprocessing step to split documents"}),`
`,(0,n.jsx)(r.li,{children:'Need a searching mechanism to find "relevant" chunks'}),`
`,(0,n.jsx)(r.li,{children:"Included chunks might not contain all the context Claude needs"}),`
`,(0,n.jsx)(r.li,{children:"Many ways to chunk text - which approach is best?"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'For example, if you only include the "Risk Factors" section, you might miss important context from the "Strategy Outlook" section that addresses how the company plans to handle those risks.'}),`
`,(0,n.jsx)(r.h2,{id:"this-is-rag",children:"This is RAG"}),`
`,(0,n.jsx)(r.p,{children:"Option 2 is Retrieval Augmented Generation. Despite its complexity, RAG offers significant advantages for working with large documents, but it comes with technical challenges that require careful consideration."}),`
`,(0,n.jsx)(r.p,{children:"The key components of RAG are:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Document preprocessing and chunking"}),`
`,(0,n.jsx)(r.li,{children:"A search mechanism to find relevant chunks"}),`
`,(0,n.jsx)(r.li,{children:"Intelligent selection of which chunks to include in prompts"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"When considering RAG for your application, you need to evaluate whether the benefits outweigh the additional complexity for your specific use case. The technique shines when working with large document collections where you need precise, contextual answers, but it requires more upfront engineering work than simply including entire documents in prompts."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};