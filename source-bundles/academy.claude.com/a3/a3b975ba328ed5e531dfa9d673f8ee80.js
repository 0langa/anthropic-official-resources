import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we understand the RAG flow conceptually, let's implement it step by step. We'll walk through a complete example that demonstrates how to chunk text, generate embeddings, store them in a vector database, and perform similarity searches."}),`
`,(0,n.jsx)(r.h2,{id:"the-five-step-rag-implementation",children:"The Five-Step RAG Implementation"}),`
`,(0,n.jsx)(r.p,{children:"Our implementation follows the same five steps we discussed previously:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Chunk the text by section"}),`
`,(0,n.jsx)(r.li,{children:"Generate embeddings for each chunk"}),`
`,(0,n.jsx)(r.li,{children:"Create a vector store and add each embedding to it"}),`
`,(0,n.jsx)(r.li,{children:"Generate an embedding for the user's question"}),`
`,(0,n.jsx)(r.li,{children:"Search the store to find the most relevant chunks"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d01ad508108a.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This diagram shows how we transform user queries into embeddings and search our vector database to find the most relevant content."}),`
`,(0,n.jsx)(r.h2,{id:"step-1-chunking-the-text",children:"Step 1: Chunking the Text"}),`
`,(0,n.jsx)(r.p,{children:"First, we load our document and split it into manageable sections:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with open("./report.md", "r") as f:
    text = f.read()

chunks = chunk_by_section(text)
chunks[2]  # Test to see the table of contents
`})}),`
`,(0,n.jsxs)(r.p,{children:["We use the same ",(0,n.jsx)(r.code,{children:"chunk_by_section"})," function from earlier to split our document into logical sections."]}),`
`,(0,n.jsx)(r.h2,{id:"step-2-generate-embeddings",children:"Step 2: Generate Embeddings"}),`
`,(0,n.jsx)(r.p,{children:"Next, we create embeddings for all our chunks at once:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`embeddings = generate_embedding(chunks)
`})}),`
`,(0,n.jsx)(r.p,{children:"The embedding function has been updated to handle both single strings and lists of strings, making it more efficient for batch processing."}),`
`,(0,n.jsx)(r.h2,{id:"step-3-store-in-vector-database",children:"Step 3: Store in Vector Database"}),`
`,(0,n.jsx)(r.p,{children:"Now we create our vector store and populate it with embeddings and their associated text:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`store = VectorIndex()

for embedding, chunk in zip(embeddings, chunks):
    store.add_vector(embedding, {"content": chunk})
`})}),`
`,(0,n.jsx)(r.p,{children:"Notice that we store both the embedding and the original text content. This is crucial because when we search later, we need to return the actual text, not just the numerical embedding values."}),`
`,(0,n.jsx)(r.h2,{id:"why-store-the-original-text",children:"Why Store the Original Text?"}),`
`,(0,n.jsx)(r.p,{children:"When we query our vector database, getting back just the embedding numbers isn't useful. We need the actual text that was used to generate those embeddings. That's why we include the original chunk text (or at least a reference to it) alongside each embedding in our database."}),`
`,(0,n.jsx)(r.h2,{id:"step-4-process-user-queries",children:"Step 4: Process User Queries"}),`
`,(0,n.jsx)(r.p,{children:"When a user asks a question, we generate an embedding for their query:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`user_embedding = generate_embedding("What did the software engineering dept do last year?")
`})}),`
`,(0,n.jsx)(r.h2,{id:"step-5-find-relevant-content",children:"Step 5: Find Relevant Content"}),`
`,(0,n.jsx)(r.p,{children:"Finally, we search our vector store to find the most similar chunks:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`results = store.search(user_embedding, 2)

for doc, distance in results:
    print(distance, "\\n", doc["content"][0:200], "\\n")
`})}),`
`,(0,n.jsx)(r.p,{children:"This search returns the two most relevant chunks along with their similarity scores (cosine distances)."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3e38c77065e6.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The search results show us which sections of our document are most relevant to the user's question, along with similarity scores."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-results",children:"Understanding the Results"}),`
`,(0,n.jsx)(r.p,{children:"When we run our example query about the software engineering department, we get back:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Section 2: Software Engineering"})," with a distance of 0.71 (closest match)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Methodology section"})," with a distance of 0.72 (second closest)"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Lower distance values indicate higher similarity, so Section 2 is the most relevant to our query."}),`
`,(0,n.jsx)(r.h2,{id:"whats-next",children:"What's Next?"}),`
`,(0,n.jsx)(r.p,{children:"This implementation works well for basic cases, but there are scenarios where it doesn't perform as expected. In the next sections, we'll explore improvements to make our RAG system more robust and accurate."}),`
`,(0,n.jsx)(r.p,{children:"The key takeaway is that RAG is fundamentally about converting text to numbers (embeddings), storing those numbers efficiently, and then using mathematical similarity to find relevant content when users ask questions."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};