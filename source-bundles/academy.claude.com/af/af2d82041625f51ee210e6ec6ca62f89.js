import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Retrieval Augmented Generation (RAG) is a technique that helps you work with large documents by breaking them into smaller pieces and only feeding Claude the most relevant chunks for each question. Instead of overwhelming the model with an entire 800-page financial report, RAG lets you extract just the sections that matter for answering specific queries."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-large-documents",children:"The Problem with Large Documents"}),`
`,(0,n.jsx)(r.p,{children:"When you have a massive document and want to ask Claude specific questions about it, you face a fundamental challenge: how do you get the right information to Claude without hitting limits or degrading performance?"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./aa2d6dcef113.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Consider asking "What risk factors does this company have?" about a lengthy financial document. The document contains the answer, but Claude needs access to the relevant content to help you.'}),`
`,(0,n.jsx)(r.h2,{id:"option-1-include-everything-in-the-prompt",children:"Option 1: Include Everything in the Prompt"}),`
`,(0,n.jsx)(r.p,{children:"The straightforward approach is extracting all text from the document and stuffing it into a single prompt:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./38c79483e6c9.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This method has serious limitations:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Hard token limits mean very long documents simply won't fit"}),`
`,(0,n.jsx)(r.li,{children:"Claude becomes less effective with extremely long prompts"}),`
`,(0,n.jsx)(r.li,{children:"Larger prompts cost more money and take longer to process"}),`
`,(0,n.jsx)(r.li,{children:"Performance degrades when there's too much information to sift through"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"option-2-break-documents-into-chunks",children:"Option 2: Break Documents into Chunks"}),`
`,(0,n.jsx)(r.p,{children:"RAG takes a smarter approach by preprocessing documents into manageable pieces, then retrieving only the relevant chunks for each question."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1a6d91701aed.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how it works:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Split the document into smaller chunks (Strategy Outlook, Risk Factors, Balance Sheet, etc.)"}),`
`,(0,n.jsx)(r.li,{children:"When a user asks a question, analyze what they're looking for"}),`
`,(0,n.jsx)(r.li,{children:"Find the chunks most relevant to their question"}),`
`,(0,n.jsx)(r.li,{children:"Include only those relevant chunks in the prompt to Claude"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b28946e9396a.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'For a question about company risks, the system would identify and retrieve the "Risk Factors" chunk, giving Claude focused, relevant context instead of the entire document.'}),`
`,(0,n.jsx)(r.h2,{id:"benefits-of-rag",children:"Benefits of RAG"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude can focus on only the most relevant content"}),`
`,(0,n.jsx)(r.li,{children:"Scales to very large documents and multiple documents"}),`
`,(0,n.jsx)(r.li,{children:"Works across document collections, not just single files"}),`
`,(0,n.jsx)(r.li,{children:"Smaller prompts mean faster processing and lower costs"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"challenges-with-rag",children:"Challenges with RAG"}),`
`,(0,n.jsx)(r.p,{children:"RAG introduces complexity that you need to manage:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Requires a preprocessing step to chunk documents"}),`
`,(0,n.jsx)(r.li,{children:"Need a search mechanism to find relevant chunks"}),`
`,(0,n.jsx)(r.li,{children:"Retrieved chunks might not contain all necessary context"}),`
`,(0,n.jsx)(r.li,{children:"Many different ways to chunk text - which approach works best?"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"You can chunk documents by equal portions, by headers and sections, by semantic meaning, or other strategies. Each approach has tradeoffs you'll need to evaluate for your specific use case."}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-rag",children:"When to Use RAG"}),`
`,(0,n.jsx)(r.p,{children:"RAG shines when you're working with large documents or document collections where users ask specific questions that only require portions of the content. The preprocessing complexity pays off when you need to scale beyond what fits in a single prompt, when you want faster responses, or when you're managing costs across many queries."}),`
`,(0,n.jsx)(r.p,{children:'The key is analyzing whether the technical overhead of implementing chunking, search, and retrieval makes sense for your particular application. Sometimes the simple "dump everything in a prompt" approach works fine - other times, RAG becomes essential for making your system practical and performant.'})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};