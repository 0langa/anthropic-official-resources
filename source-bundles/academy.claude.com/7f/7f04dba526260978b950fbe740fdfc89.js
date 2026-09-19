import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Text chunking is one of the most critical steps in building a RAG (Retrieval Augmented Generation) pipeline. How you break up your documents directly impacts the quality of your entire system. A poor chunking strategy can lead to irrelevant context being inserted into your prompts, causing your AI to give completely wrong answers."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./93d153d95565.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'Consider this example: you have a document with sections on medical research and software engineering. If you chunk poorly, a user asking "How many bugs did engineers fix this year?" might get information about medical research instead of software engineering, simply because the medical section happened to contain the word "bug" in a different context.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4e200d418f2f.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This is why choosing the right chunking strategy matters so much. Let's explore three main approaches."}),`
`,(0,n.jsx)(r.h2,{id:"size-based-chunking",children:"Size-Based Chunking"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8258b5b1db40.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Size-based chunking is the simplest approach - you divide your text into strings of equal length. If you have a 325-character document, you might split it into three chunks of roughly 108 characters each."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3e4549a9b1cb.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This method is easy to implement and works with any type of document, but it has clear downsides:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Words get cut off mid-sentence"}),`
`,(0,n.jsx)(r.li,{children:"Chunks lose important context from surrounding text"}),`
`,(0,n.jsx)(r.li,{children:"Section headers might be separated from their content"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ce9f3ba91e00.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"To address these issues, you can add overlap between chunks. This means each chunk includes some characters from the neighboring chunks, providing better context and ensuring complete words and sentences."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7aebd7018b93.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's a basic implementation:"}),`
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
`,(0,n.jsx)(r.p,{children:"Structure-based chunking divides text based on the document's natural structure - headers, paragraphs, and sections. This works great when you have well-formatted documents like Markdown files."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4fd57d1bcc54.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For a Markdown document, you can split on header markers:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def chunk_by_section(document_text):
    pattern = r"\\n## "
    return re.split(pattern, document_text)
`})}),`
`,(0,n.jsx)(r.p,{children:"This approach gives you the cleanest, most meaningful chunks because each one represents a complete section. However, it only works when you have guarantees about your document structure. Many real-world documents are plain text or PDFs without clear structural markers."}),`
`,(0,n.jsx)(r.h2,{id:"semantic-based-chunking",children:"Semantic-Based Chunking"}),`
`,(0,n.jsx)(r.p,{children:"Semantic-based chunking is the most sophisticated approach. You divide text into sentences, then use natural language processing to determine how related consecutive sentences are. You build chunks from groups of related sentences."}),`
`,(0,n.jsx)(r.p,{children:"This method is computationally expensive but produces the most relevant chunks. It requires understanding the meaning of individual sentences and is more complex to implement than the other strategies."}),`
`,(0,n.jsx)(r.h2,{id:"sentence-based-chunking",children:"Sentence-Based Chunking"}),`
`,(0,n.jsx)(r.p,{children:"A practical middle ground is chunking by sentences. You split the text into individual sentences using regular expressions, then group them into chunks with optional overlap:"}),`
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
`,(0,n.jsx)(r.h2,{id:"choosing-your-strategy",children:"Choosing Your Strategy"}),`
`,(0,n.jsx)(r.p,{children:"Your choice depends entirely on your use case and document guarantees:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Structure-based"}),": Best results when you control document formatting (like internal company reports)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Sentence-based"}),": Good middle ground for most text documents"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Size-based"}),": Most reliable fallback that works with any content type, including code"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Size-based chunking with overlap is often the go-to choice in production because it's simple, reliable, and works with any document type. While it may not give perfect results, it consistently produces reasonable chunks that won't break your pipeline."}),`
`,(0,n.jsx)(r.p,{children:`Remember: there's no single "best" chunking strategy. The right approach depends on your specific documents, use cases, and the trade-offs you're willing to make between implementation complexity and chunk quality.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};