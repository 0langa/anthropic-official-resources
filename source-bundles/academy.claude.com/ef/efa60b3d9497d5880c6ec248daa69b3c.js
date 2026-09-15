import{Gp as e,qp as t}from"../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Text chunking is one of the most critical steps in building a RAG (Retrieval Augmented Generation) pipeline. How you break up your documents directly impacts the quality of your entire system. A poor chunking strategy can lead to irrelevant context being inserted into your prompts, causing your AI to give completely wrong answers."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./03ad074a9e3f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Consider this example: you have a document with sections on medical research and software engineering. If you chunk poorly, a user asking "How many bugs did engineers fix this year?" might get information about medical research instead of software engineering, simply because the medical section happened to contain the word "bug" in a different context.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0a0f4bb26fa8.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This demonstrates why chunking strategy matters so much. The goal is to create chunks that maintain semantic coherence and provide useful context when retrieved."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a62744c2b485.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"three-main-chunking-strategies",children:"Three Main Chunking Strategies"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6bbe9453171b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"There are three primary approaches to dividing text into chunks:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Size-based:"})," Divide text into strings of equal length"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Structure-based:"})," Split based on document structure (headers, paragraphs, sections)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Semantic-based:"})," Group related sentences or sections using NLP techniques"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"size-based-chunking",children:"Size-Based Chunking"}),`
`,(0,n.jsx)(r.p,{children:"Size-based chunking is the most straightforward approach. You simply divide your document into chunks of roughly equal character or word count. It's easy to implement and works reliably across different document types."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./351205586172.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"However, this approach has clear downsides:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Words get cut off mid-sentence"}),`
`,(0,n.jsx)(r.li,{children:"Chunks lose important context from surrounding text"}),`
`,(0,n.jsx)(r.li,{children:"Related content might be split across multiple chunks"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fecf35c6b775.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"adding-overlap",children:"Adding Overlap"}),`
`,(0,n.jsx)(r.p,{children:"To address the context problem, you can implement an overlap strategy. Each chunk includes some characters from neighboring chunks, providing additional context and ensuring important information isn't lost at chunk boundaries."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./46f5d3dc0aaa.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"While this creates some duplication, the trade-off is usually worth it for the improved context each chunk receives."}),`
`,(0,n.jsx)(r.h2,{id:"structure-based-chunking",children:"Structure-Based Chunking"}),`
`,(0,n.jsx)(r.p,{children:"When your documents have consistent formatting (like markdown with clear headers), structure-based chunking can produce excellent results. You split on structural elements like headers, creating chunks that align with the document's natural organization."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a07a9c97f7bd.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This works beautifully for well-formatted documents but requires guarantees about document structure. It won't work reliably with plain text files or inconsistently formatted documents."}),`
`,(0,n.jsx)(r.h2,{id:"implementation-examples",children:"Implementation Examples"}),`
`,(0,n.jsx)(r.p,{children:"Here are three practical chunking functions you can implement:"}),`
`,(0,n.jsx)(r.h3,{id:"character-based-chunking",children:"Character-Based Chunking"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chunk_by_char(text, chunk_size=150, chunk_overlap=20):
    chunks = []
    start_idx = 0
    
    while start_idx < len(text):
        end_idx = min(start_idx + chunk_size, len(text))
        chunk_text = text[start_idx:end_idx]
        chunks.append(chunk_text)
        
        start_idx = (
            end_idx - chunk_overlap if end_idx < len(text) else len(text)
        )
    
    return chunks
`})}),`
`,(0,n.jsx)(r.h3,{id:"sentence-based-chunking",children:"Sentence-Based Chunking"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chunk_by_sentence(text, max_sentences_per_chunk=5, overlap_sentences=1):
    sentences = re.split(r"(?<=[.!?])\\s+", text)
    chunks = []
    start_idx = 0
    
    while start_idx < len(sentences):
        end_idx = min(start_idx + max_sentences_per_chunk, len(sentences))
        current_chunk = sentences[start_idx:end_idx]
        chunks.append(" ".join(current_chunk))
        
        start_idx += max_sentences_per_chunk - overlap_sentences
        
        if start_idx < 0:
            start_idx = 0
    
    return chunks
`})}),`
`,(0,n.jsx)(r.h3,{id:"section-based-chunking",children:"Section-Based Chunking"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chunk_by_section(document_text):
    pattern = r"\\n## "
    return re.split(pattern, document_text)
`})}),`
`,(0,n.jsx)(r.h2,{id:"choosing-the-right-strategy",children:"Choosing the Right Strategy"}),`
`,(0,n.jsx)(r.p,{children:"Your choice of chunking strategy depends entirely on your specific use case:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Character-based:"})," Most reliable fallback, works with any document type"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Sentence-based:"})," Good balance of context and meaning for prose"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Section-based:"})," Excellent results when you have structured documents"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For user-uploaded documents with no formatting guarantees, character-based chunking is often your safest bet. For well-structured internal documents, section-based chunking can provide superior results. Sentence-based chunking works well for most prose but can struggle with code or technical documents that use periods in unexpected ways."}),`
`,(0,n.jsx)(r.p,{children:"Remember that chunking is often an iterative process. Start with a simple approach, test it with your specific documents and use cases, then refine based on the quality of results you're getting from your RAG system."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};