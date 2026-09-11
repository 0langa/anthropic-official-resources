import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This walkthrough demonstrates the complete RAG (Retrieval-Augmented Generation) implementation using a practical example. We'll build a vector database from scratch and execute all five steps of the RAG workflow using a sample report document."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-vector-database",children:"Setting Up the Vector Database"}),`
`,(0,n.jsxs)(r.p,{children:["The implementation uses a custom ",(0,n.jsx)(r.code,{children:"VectorIndex"})," class that handles storing embeddings and performing similarity searches. This class provides the core functionality we need for our vector database operations."]}),`
`,(0,n.jsx)(r.h2,{id:"the-five-step-rag-implementation",children:"The Five-Step RAG Implementation"}),`
`,(0,n.jsx)(r.h3,{id:"step-1-chunk-the-text-by-section",children:"Step 1: Chunk the Text by Section"}),`
`,(0,n.jsx)(r.p,{children:"First, we load and chunk our source document using the same section-based chunking approach from earlier:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with open("./report.md", "r") as f:
    text = f.read()

chunks = chunk_by_section(text)
`})}),`
`,(0,n.jsx)(r.p,{children:"This breaks our report into logical sections that can be processed independently."}),`
`,(0,n.jsx)(r.h3,{id:"step-2-generate-embeddings-for-each-chunk",children:"Step 2: Generate Embeddings for Each Chunk"}),`
`,(0,n.jsx)(r.p,{children:"Next, we create embeddings for every chunk using a list comprehension:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`embeddings = [generate_embedding(chunk) for chunk in chunks]
`})}),`
`,(0,n.jsx)(r.p,{children:"This step involves multiple API calls, so it takes some time to complete. Each chunk gets converted into a numerical vector representation."}),`
`,(0,n.jsx)(r.h3,{id:"step-3-store-embeddings-in-the-vector-database",children:"Step 3: Store Embeddings in the Vector Database"}),`
`,(0,n.jsx)(r.p,{children:"Now we create our vector store and populate it with both embeddings and their associated text:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`store = VectorIndex()

for embedding, chunk in zip(embeddings, chunks):
    store.add_vector(embedding, {"content": chunk})
`})}),`
`,(0,n.jsx)(r.p,{children:"The key insight here is that we store both the embedding and the original text. Just getting back a list of numbers isn't useful - we need the actual text content that corresponds to those embeddings. This metadata allows us to retrieve meaningful results later."}),`
`,(0,n.jsx)(r.h3,{id:"step-4-generate-user-query-embedding",children:"Step 4: Generate User Query Embedding"}),`
`,(0,n.jsx)(r.p,{children:"When a user asks a question, we convert it to the same embedding format:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`user_embedding = generate_embedding("What did the software engineering dept do last year?")
`})}),`
`,(0,n.jsx)(r.p,{children:"This creates a vector representation of the user's question that can be compared against our stored embeddings."}),`
`,(0,n.jsx)(r.h3,{id:"step-5-search-and-retrieve-relevant-chunks",children:"Step 5: Search and Retrieve Relevant Chunks"}),`
`,(0,n.jsx)(r.p,{children:"Finally, we search our vector store to find the most similar content:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`results = store.search(user_embedding, 2)

for doc, distance in results:
    print(distance, "\\n", doc["content"][0:200], "\\n")
`})}),`
`,(0,n.jsx)(r.p,{children:"This returns the two most relevant chunks along with their cosine distance scores. Lower distances indicate higher similarity."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ab085290667b.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-results",children:"Understanding the Results"}),`
`,(0,n.jsx)(r.p,{children:"The search returns results ranked by relevance. In our example, the software engineering section had the lowest distance (0.71), making it the most relevant match. The methodology section came second with a distance of 0.72."}),`
`,(0,n.jsx)(r.p,{children:"The distance metric helps you understand how confident the system is about the relevance of each result. Closer distances mean better matches to the user's query."}),`
`,(0,n.jsx)(r.h2,{id:"why-store-text-with-embeddings",children:"Why Store Text with Embeddings"}),`
`,(0,n.jsx)(r.p,{children:"A crucial design decision is storing the original text alongside each embedding. Without this, you'd only get back arrays of numbers, which aren't useful for generating responses. By including the source text, you can immediately use the retrieved chunks to provide context for your language model."}),`
`,(0,n.jsx)(r.p,{children:"This completes the core RAG workflow, though there are additional optimizations and improvements that can enhance performance in real-world scenarios."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};