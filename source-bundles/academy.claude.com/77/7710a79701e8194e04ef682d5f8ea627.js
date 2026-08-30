import{Hf as e,Wf as t}from"../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we understand the RAG flow conceptually, let's implement it step by step using a practical example. We'll work through all five stages of the RAG process, from chunking text to finding relevant documents for user queries."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-the-vector-database",children:"Setting Up the Vector Database"}),`
`,(0,n.jsx)(r.p,{children:"For this implementation, we'll use a custom VectorIndex class that provides the basic functionality we need for storing and searching embeddings. The class handles vector storage, distance calculations (using cosine similarity), and document retrieval."}),`
`,(0,n.jsx)(r.h2,{id:"the-five-step-rag-implementation",children:"The Five-Step RAG Implementation"}),`
`,(0,n.jsx)(r.p,{children:"Let's walk through each step of the RAG process:"}),`
`,(0,n.jsx)(r.h3,{id:"step-1-chunk-the-text-by-section",children:"Step 1: Chunk the Text by Section"}),`
`,(0,n.jsx)(r.p,{children:"First, we need to break our source document into manageable chunks. We'll use the same section-based chunking approach from earlier:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`chunks = chunk_by_section(text)
`})}),`
`,(0,n.jsx)(r.p,{children:"This splits our report.md file into logical sections that we can process individually."}),`
`,(0,n.jsx)(r.h3,{id:"step-2-generate-embeddings-for-each-chunk",children:"Step 2: Generate Embeddings for Each Chunk"}),`
`,(0,n.jsx)(r.p,{children:"Next, we convert each text chunk into a numerical embedding that captures its semantic meaning:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`embeddings = generate_embedding(chunks)
`})}),`
`,(0,n.jsx)(r.p,{children:"These embeddings allow us to perform mathematical comparisons between different pieces of text."}),`
`,(0,n.jsx)(r.h3,{id:"step-3-store-embeddings-in-the-vector-database",children:"Step 3: Store Embeddings in the Vector Database"}),`
`,(0,n.jsx)(r.p,{children:"Now we create our vector store and populate it with our embeddings and their associated text:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`store = VectorIndex()

for embedding, chunk in zip(embeddings, chunks):
    store.add_vector(embedding, {"content": chunk})
`})}),`
`,(0,n.jsx)(r.p,{children:"Notice that we store both the embedding and the original text content. This is crucial because when we retrieve similar embeddings later, we need access to the actual text, not just the numerical vectors. The embedding alone isn't useful to us as developers - we need the human-readable content it represents."}),`
`,(0,n.jsx)(r.h3,{id:"step-4-generate-an-embedding-for-the-user-query",children:"Step 4: Generate an Embedding for the User Query"}),`
`,(0,n.jsx)(r.p,{children:"When a user asks a question, we need to convert their query into the same embedding space as our stored documents:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`user_embedding = generate_embedding("What did the software engineering dept do last year?")
`})}),`
`,(0,n.jsx)(r.h3,{id:"step-5-search-for-relevant-documents",children:"Step 5: Search for Relevant Documents"}),`
`,(0,n.jsx)(r.p,{children:"Finally, we search our vector store to find the most relevant chunks:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`results = store.search(user_embedding, 2)

for doc, distance in results:
    print(distance, "\\n", doc["content"][0:200], "\\n")
`})}),`
`,(0,n.jsx)(r.p,{children:"This returns the two most similar chunks along with their cosine distance scores."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4bee5dc249e2.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'The diagram above illustrates how the vector database processes a user query. When we ask a question, it gets converted to an embedding vector, and the database finds the stored vectors that are "closest" to it in the high-dimensional space.'}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-results",children:"Understanding the Results"}),`
`,(0,n.jsx)(r.p,{children:"When we run this example with the query about the software engineering department, we get back two relevant sections:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Section 2: Software Engineering - Project Phoenix Stability Enhancements (distance: 0.71)"}),`
`,(0,n.jsx)(r.li,{children:"Methodology section (distance: 0.72)"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The lower the distance score, the more similar the content is to our query. Both results are relevant to our question about what the software engineering department accomplished."}),`
`,(0,n.jsx)(r.h2,{id:"why-store-content-with-embeddings",children:"Why Store Content with Embeddings"}),`
`,(0,n.jsx)(r.p,{children:"You might wonder why we store the original text alongside each embedding. The reason is practical: embeddings are just arrays of numbers that have no direct meaning to humans. When our search returns the most similar embeddings, we need the actual text content to understand what was found and to use it in generating responses."}),`
`,(0,n.jsx)(r.p,{children:"Some implementations store just an ID that points back to the original text, but for simplicity, we're storing the content directly with each vector."}),`
`,(0,n.jsx)(r.h2,{id:"whats-next",children:"What's Next"}),`
`,(0,n.jsx)(r.p,{children:"This implementation covers the core RAG workflow, but there are still improvements we can make. In real-world applications, you might encounter scenarios where this basic approach doesn't work as expected, and we'll explore those refinements in upcoming sections."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};