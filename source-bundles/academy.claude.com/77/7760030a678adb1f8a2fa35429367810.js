import{Gp as e,qp as t}from"../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Contextual retrieval is a technique that improves RAG pipeline accuracy by solving a fundamental problem: when you split a document into chunks, each chunk loses its connection to the broader document context."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-standard-chunking",children:"The Problem with Standard Chunking"}),`
`,(0,n.jsx)(r.p,{children:"When you take a source document and break it into chunks for your vector database, each individual piece no longer knows where it came from or how it relates to the rest of the document. This can hurt retrieval accuracy because the chunks lack important contextual information."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e3b6f9ccb54e.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-contextual-retrieval-works",children:"How Contextual Retrieval Works"}),`
`,(0,n.jsx)(r.p,{children:"Contextual retrieval adds a preprocessing step before inserting chunks into your retriever database. Here's the process:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Take each individual chunk and the original source document"}),`
`,(0,n.jsx)(r.li,{children:"Send both to Claude with a specific prompt asking it to add context"}),`
`,(0,n.jsx)(r.li,{children:'Claude generates a short snippet that "situates" the chunk within the larger document'}),`
`,(0,n.jsx)(r.li,{children:'Combine this context with the original chunk to create a "contextualized chunk"'}),`
`,(0,n.jsx)(r.li,{children:"Use the contextualized chunk in your vector and BM25 indexes"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7f9504653058.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'For example, if you have a section about software engineering that mentions a 2023 incident, Claude might generate context like: "This section is from a larger report about a cross-discipline group. It includes mention of INC-2023-04-011, which is also mentioned in the Cybersecurity Analysis section."'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./49504d077fb3.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"handling-large-documents",children:"Handling Large Documents"}),`
`,(0,n.jsx)(r.p,{children:"A common problem is when your source document is too large to fit into Claude's context window. You can still use contextual retrieval by providing a reduced set of context:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ef029b4478a7.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Instead of including the entire document, provide:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A few chunks from the start of the document (often containing summaries or abstracts)"}),`
`,(0,n.jsx)(r.li,{children:"Chunks immediately before the chunk you're contextualizing"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This approach gives Claude enough information to understand the document structure and immediate context without overwhelming the prompt."}),`
`,(0,n.jsx)(r.h2,{id:"implementation-example",children:"Implementation Example"}),`
`,(0,n.jsx)(r.p,{children:"Here's a basic function for adding context to chunks:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def add_context(text_chunk, source_text):
    prompt = """
Write a short and succinct snippet of text to situate this chunk within the
overall source document for the purposes of improving search retrieval of the chunk.

Here is the original source document:
<document>
{source_text}
</document>

Here is the chunk we want to situate within the whole document:
<chunk>
{text_chunk}
</chunk>

Answer only with the succinct context and nothing else.
"""
    
    messages = []
    add_user_message(messages, prompt)
    result = chat(messages)
    
    return result["text"] + "\\n" + text_chunk
`})}),`
`,(0,n.jsx)(r.p,{children:"For large documents, you can implement a strategy that selects relevant context chunks:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`# Add context to each chunk, then add to the retriever
num_start_chunks = 2
num_prev_chunks = 2

for i, chunk in enumerate(chunks):
    context_parts = []
    
    # Initial set of chunks from the start of the doc
    context_parts.extend(chunks[: min(num_start_chunks, len(chunks))])
    
    # Additional chunks ahead of the current chunk we're contextualizing
    start_idx = max(0, i - num_prev_chunks)
    context_parts.extend(chunks[start_idx:i])
    
    context = "\\n".join(context_parts)
    
    contextualized_chunk = add_context(chunk, context)
    retriever.add_document({"content": contextualized_chunk})
`})}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-contextual-retrieval",children:"When to Use Contextual Retrieval"}),`
`,(0,n.jsx)(r.p,{children:"This technique is most valuable when:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Your documents have complex internal relationships between sections"}),`
`,(0,n.jsx)(r.li,{children:"Chunks reference concepts defined elsewhere in the document"}),`
`,(0,n.jsx)(r.li,{children:"Understanding the document structure is important for accurate retrieval"}),`
`,(0,n.jsx)(r.li,{children:"You're working with technical documents, reports, or academic papers"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"While contextual retrieval adds processing time and cost (since you're making additional API calls), it can significantly improve retrieval accuracy for complex documents where context matters."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};