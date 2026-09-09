import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Retrieval Augmented Generation (RAG) is a technique that helps you work with large documents that are too big to fit into a single prompt. Instead of cramming everything into one massive prompt, RAG breaks documents into chunks and only includes the most relevant pieces when answering questions."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-large-documents",children:"The Problem with Large Documents"}),`
`,(0,n.jsx)(r.p,{children:'Imagine you have an 800-page financial document and want to ask Claude specific questions about it, like "What risk factors does this company have?" You need to get the relevant information from the document to Claude somehow, but there are limits to how much text you can include in a prompt.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9336e1577fd9.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"option-1-include-everything-in-the-prompt",children:"Option 1: Include Everything in the Prompt"}),`
`,(0,n.jsx)(r.p,{children:"The first approach is straightforward - extract all text from the document and stuff it into your prompt along with the user's question. Your prompt might look like this:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Answer the user's question about the financial document.

<user_question>
{user_question}
</user_question>

<financial_document>
{financial_document}
</financial_document>
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0796a27b99d2.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This approach has serious limitations:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"There's a hard limit on prompt length - your document might be too long"}),`
`,(0,n.jsx)(r.li,{children:"Claude becomes less effective with very long prompts"}),`
`,(0,n.jsx)(r.li,{children:"Larger prompts cost more to process"}),`
`,(0,n.jsx)(r.li,{children:"Larger prompts take longer to process"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"option-2-break-documents-into-chunks",children:"Option 2: Break Documents into Chunks"}),`
`,(0,n.jsx)(r.p,{children:"RAG takes a smarter approach. First, you break the document into smaller chunks during a preprocessing step. Then, when a user asks a question, you find the chunks most relevant to their question and only include those in your prompt."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4d4ba3247078.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`Here's how it works: if someone asks "What risks does this company face?" you'd search through your chunks, find the "Risk Factors" section, and include just that relevant chunk in your prompt.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c853f036f94b.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"benefits-of-rag",children:"Benefits of RAG"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude can focus on only the most relevant content"}),`
`,(0,n.jsx)(r.li,{children:"Scales up to very large documents"}),`
`,(0,n.jsx)(r.li,{children:"Works with multiple documents"}),`
`,(0,n.jsx)(r.li,{children:"Smaller prompts cost less and run faster"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"challenges-with-rag",children:"Challenges with RAG"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Requires a preprocessing step to chunk documents"}),`
`,(0,n.jsx)(r.li,{children:'Need a search mechanism to find "relevant" chunks'}),`
`,(0,n.jsx)(r.li,{children:"Included chunks might not contain all the context Claude needs"}),`
`,(0,n.jsx)(r.li,{children:"Many ways to chunk text - which approach is best?"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For example, you could split documents into equal-sized portions, or you could create chunks based on document structure like headers and sections. Each approach has trade-offs you'll need to evaluate for your specific use case."}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-rag",children:"When to Use RAG"}),`
`,(0,n.jsx)(r.p,{children:"RAG involves many technical decisions and requires more work than simply including everything in a prompt. You'll need to analyze whether the benefits outweigh the complexity for your particular application. It's especially valuable when working with very large documents, multiple documents, or when you need to optimize for cost and performance."}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that RAG trades simplicity for scalability and efficiency. While it requires more upfront work to implement properly, it enables you to work with document collections that would be impossible to handle with simple prompt stuffing."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};