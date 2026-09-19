import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Contextual retrieval is a technique that improves RAG pipeline accuracy by solving a fundamental problem: when you split a document into chunks, each chunk loses its connection to the broader document context."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e3b6f9ccb54e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'The basic idea is simple. After chunking your source document, you ask Claude to add context to each chunk before storing it in your retriever database. This pre-processing step helps "situate" each chunk within the larger document.'}),`
`,(0,n.jsx)(r.h2,{id:"how-it-works",children:"How It Works"}),`
`,(0,n.jsx)(r.p,{children:"For each text chunk, you send both the chunk and the original source document to Claude with a prompt like this:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Write a short and succinct snippet of text to situate this chunk within the 
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
`})}),`
`,(0,n.jsx)(r.p,{children:'Claude might generate context like: "This section is from a larger report about a cross-discipline group. It includes mention of INC-2023-04-011, which is also mentioned in the Cybersecurity Analysis section."'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7f9504653058.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'You then combine this generated context with the original chunk text to create a "contextualized chunk" that gets stored in your vector and BM25 indexes.'}),`
`,(0,n.jsx)(r.h2,{id:"handling-large-documents",children:"Handling Large Documents"}),`
`,(0,n.jsx)(r.p,{children:"If your source document is too large to fit in a single prompt, you can provide a reduced set of context instead of the entire document."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b49c017cccef.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For any given chunk you're contextualizing, include:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A few chunks from the start of the document (often containing summaries or abstracts)"}),`
`,(0,n.jsx)(r.li,{children:"Chunks immediately preceding the target chunk (providing local context)"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This approach gives Claude enough information to generate meaningful context without overwhelming the prompt with the entire document."}),`
`,(0,n.jsx)(r.h2,{id:"implementation-example",children:"Implementation Example"}),`
`,(0,n.jsx)(r.p,{children:"Here's a basic implementation of the contextual retrieval function:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def add_context(text_chunk, source_text):
    prompt = f"""
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
`,(0,n.jsx)(r.p,{children:"When processing your document chunks, you'd loop through each one and generate contextualized versions:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`# Add context to each chunk, then add to the retriever
for i, chunk in enumerate(chunks):
    # Build context from start chunks and preceding chunks
    context_parts = []
    context_parts.extend(chunks[:min(num_start_chunks, len(chunks))])
    
    start_idx = max(0, i - num_prev_chunks)
    context_parts.extend(chunks[start_idx:i])
    
    context = "\\n".join(context_parts)
    
    contextualized_chunk = add_context(chunk, context)
    retriever.add_document({"content": contextualized_chunk})
`})}),`
`,(0,n.jsx)(r.h2,{id:"expected-results",children:"Expected Results"}),`
`,(0,n.jsx)(r.p,{children:'The generated context provides valuable information about document structure and relationships. For example, Claude might describe a chunk as "Section 2 of an Annual Interdisciplinary Research Review, detailing software engineering efforts to resolve stability issues in Project Phoenix. It follows the Methodology section and precedes Financial Analysis, forming part of a comprehensive report that covers ten research domains across the organization."'}),`
`,(0,n.jsx)(r.p,{children:"This additional context helps the retrieval system better understand not just what each chunk contains, but how it fits into the larger document structure and relates to other sections. While you might not see dramatic improvements with simple documents, contextual retrieval becomes increasingly valuable as your documents become more complex with intricate cross-references and dependencies between sections."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};