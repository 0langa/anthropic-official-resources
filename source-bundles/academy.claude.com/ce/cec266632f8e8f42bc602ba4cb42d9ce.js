import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Text chunking is one of the most critical steps in building a RAG (Retrieval Augmented Generation) pipeline. How you break up your documents directly impacts the quality of your entire system. A poor chunking strategy can lead to irrelevant context being inserted into your prompts, causing your AI to give completely wrong answers."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./03ad074a9e3f.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Consider this example: you have a document with sections on medical research and software engineering. If you chunk poorly, a user asking "How many bugs did engineers fix this year?" might get information about medical research instead of software engineering, simply because the medical section happened to contain the word "bug" in a different context.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0a0f4bb26fa8.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This demonstrates why chunking strategy matters so much. The goal is to create chunks that maintain semantic coherence and provide meaningful context when retrieved."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a62744c2b485.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"three-main-chunking-strategies",children:"Three Main Chunking Strategies"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6bbe9453171b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"There are three primary approaches to chunking text, each with distinct advantages and trade-offs:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Size-based:"})," Divide text into strings of equal length"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Structure-based:"})," Split based on document structure (headers, paragraphs, sections)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Semantic-based:"})," Group related sentences or sections using NLP techniques"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"size-based-chunking",children:"Size-Based Chunking"}),`
`,(0,n.jsx)(r.p,{children:"Size-based chunking is the most straightforward approach. You simply divide your document into chunks of approximately equal character or word count. It's easy to implement and works reliably across different document types."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./351205586172.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"However, this approach has clear downsides. Words get cut off mid-sentence, and chunks lose important context. For example, a chunk might not include the section header that would explain what the content is actually about."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fecf35c6b775.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The solution is to add overlap between chunks. Each chunk includes some characters from neighboring chunks, ensuring better context preservation and avoiding abrupt cutoffs."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./46f5d3dc0aaa.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's a basic implementation of character-based chunking with overlap:"}),`
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
`,(0,n.jsx)(r.h2,{id:"structure-based-chunking",children:"Structure-Based Chunking"}),`
`,(0,n.jsx)(r.p,{children:"Structure-based chunking leverages the natural organization of your documents. If you're working with markdown files, you can split on headers. For other formats, you might split on paragraphs or other structural elements."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a07a9c97f7bd.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This approach works beautifully when you have guarantees about document structure. For markdown documents, you can split on section headers:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chunk_by_section(document_text):
    pattern = r'\\n## '
    return re.split(pattern, document_text)
`})}),`
`,(0,n.jsx)(r.p,{children:"The major limitation is that many documents don't have consistent structure. Plain text files, PDFs, or user-uploaded documents might not have clear structural markers to split on."}),`
`,(0,n.jsx)(r.h2,{id:"semantic-based-chunking",children:"Semantic-Based Chunking"}),`
`,(0,n.jsx)(r.p,{children:"Semantic-based chunking is the most sophisticated approach. It analyzes the meaning and relationships between sentences to group related content together. This typically involves:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Breaking text into sentences"}),`
`,(0,n.jsx)(r.li,{children:"Using NLP techniques to measure semantic similarity"}),`
`,(0,n.jsx)(r.li,{children:"Grouping related sentences into coherent chunks"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"While this can produce the highest quality chunks, it's computationally expensive and more complex to implement. For most applications, the simpler approaches work well enough."}),`
`,(0,n.jsx)(r.h2,{id:"practical-implementation",children:"Practical Implementation"}),`
`,(0,n.jsx)(r.p,{children:"Here's a sentence-based chunking function that offers a good middle ground:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chunk_by_sentence(text, max_sentences_per_chunk=5, overlap_sentences=1):
    sentences = re.split(r'(?<=[.!?])\\s+', text)
    chunks = []
    start_idx = 0
    
    while start_idx < len(sentences):
        end_idx = min(start_idx + max_sentences_per_chunk, len(sentences))
        current_chunk = sentences[start_idx:end_idx]
        chunks.append(' '.join(current_chunk))
        
        start_idx += max_sentences_per_chunk - overlap_sentences
        
        if start_idx < 0:
            start_idx = 0
    
    return chunks
`})}),`
`,(0,n.jsx)(r.h2,{id:"choosing-the-right-strategy",children:"Choosing the Right Strategy"}),`
`,(0,n.jsx)(r.p,{children:"Your choice of chunking strategy depends entirely on your specific use case:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Consistent document structure:"})," Use structure-based chunking for the cleanest results"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Mixed document types:"})," Sentence-based chunking often works well"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Code or technical content:"})," Character-based chunking is most reliable"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Unknown document formats:"})," Character-based chunking is your safest bet"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'Remember that chunking is often an iterative process. Start with a simple approach, test it with your specific documents and use cases, then refine based on the results. The "best" chunking strategy is the one that works reliably for your particular data and requirements.'})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};