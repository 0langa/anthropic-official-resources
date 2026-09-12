import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we've covered the basics of RAG, text chunking, and embeddings, let's walk through the complete RAG pipeline step by step. This detailed example will show you exactly how all the pieces fit together in a real implementation."}),`
`,(0,n.jsx)(r.h2,{id:"step-1-chunk-your-source-text",children:"Step 1: Chunk Your Source Text"}),`
`,(0,n.jsx)(r.p,{children:"First, we take our source document and break it into manageable chunks. For this example, we'll use two simple text sections:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Section 1: Medical Research - "This year saw significant strides in our understanding of XDR-47, a 'bug' we have not seen before."`}),`
`,(0,n.jsx)(r.li,{children:'Section 2: Software Engineering - "This division dedicated significant effort to studying various infection vectors in our distributed systems"'}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"step-2-generate-embeddings",children:"Step 2: Generate Embeddings"}),`
`,(0,n.jsx)(r.p,{children:"Next, we convert each text chunk into numerical embeddings. To make this concept clear, let's imagine we have a perfect embedding model that always returns exactly two numbers, and we know what each number represents:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7167baedf645.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In our imaginary model:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"First number: How much the text talks about the medical field"}),`
`,(0,n.jsx)(r.li,{children:"Second number: How much the text talks about software engineering"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["So our medical research section gets an embedding of ",(0,n.jsx)(r.code,{children:"[0.97, 0.34]"}),' - very medical, somewhat software-related due to the word "bug". The software engineering section gets ',(0,n.jsx)(r.code,{children:"[0.30, 0.97]"}),' - very software-focused, but "infection vectors" has medical connotations.']}),`
`,(0,n.jsx)(r.h2,{id:"normalization",children:"Normalization"}),`
`,(0,n.jsx)(r.p,{children:"Before storing these embeddings, they go through a normalization process that scales each vector to have a magnitude of 1.0. This is typically handled automatically by your embedding API, but it's important to understand that it happens."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5694ebd1a8d7.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["After normalization, our embeddings become ",(0,n.jsx)(r.code,{children:"[0.944, 0.331]"})," and ",(0,n.jsx)(r.code,{children:"[0.295, 0.955]"}),". We can visualize these on a unit circle where each point lies exactly on the circle's edge."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f08995bf43ba.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"step-3-store-in-vector-database",children:"Step 3: Store in Vector Database"}),`
`,(0,n.jsx)(r.p,{children:"The normalized embeddings get stored in a vector database - a specialized database optimized for storing, comparing, and searching through long lists of numbers like our embeddings."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c0f5e517c426.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"At this point, we pause. All the work so far has been preprocessing that happens ahead of time. Now we wait for a user to submit a query."}),`
`,(0,n.jsx)(r.h2,{id:"step-4-process-user-query",children:"Step 4: Process User Query"}),`
`,(0,n.jsx)(r.p,{children:`When a user asks a question like "I'm curious about the company. In particular, what did the software engineering dept do this year?", we run their query through the same embedding model.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e182b15de5aa.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["This query gets embedded as ",(0,n.jsx)(r.code,{children:"[0.1, 0.89]"})," - low medical score, high software engineering score. After normalization, it becomes ",(0,n.jsx)(r.code,{children:"[0.112, 0.993]"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"step-5-find-similar-embeddings",children:"Step 5: Find Similar Embeddings"}),`
`,(0,n.jsx)(r.p,{children:`Now we ask the vector database: "Find the stored embedding that's closest to this user query embedding." The database returns the software engineering section because it's the most similar.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./02f8d982cfef.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-similarity-works-cosine-similarity",children:"How Similarity Works: Cosine Similarity"}),`
`,(0,n.jsx)(r.p,{children:"The vector database uses cosine similarity to determine which embeddings are most similar. This measures the cosine of the angle between two vectors."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e9e58d87d381.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Key points about cosine similarity:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Results range from -1 to 1"}),`
`,(0,n.jsx)(r.li,{children:"Values close to 1 mean very similar"}),`
`,(0,n.jsx)(r.li,{children:"Values close to 0 mean perpendicular (unrelated)"}),`
`,(0,n.jsx)(r.li,{children:"Values close to -1 mean completely opposite"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["The calculation uses the dot product formula: ",(0,n.jsx)(r.code,{children:"cos(a) = (A · B) / (||A|| · ||B||)"})]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1ead50fb7e5a.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In our example, the user query has a cosine similarity of 0.983 with the software engineering chunk and only 0.398 with the medical research chunk. The software engineering chunk is clearly the better match."}),`
`,(0,n.jsx)(r.h2,{id:"cosine-distance",children:"Cosine Distance"}),`
`,(0,n.jsxs)(r.p,{children:[`You'll often see "cosine distance" in vector database documentation. This is simply `,(0,n.jsx)(r.code,{children:"1 - cosine similarity"}),", which gives us an easier-to-interpret number where:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Values close to 0 mean high similarity"}),`
`,(0,n.jsx)(r.li,{children:"Larger values mean less similarity"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"step-6-build-the-final-prompt",children:"Step 6: Build the Final Prompt"}),`
`,(0,n.jsx)(r.p,{children:"Finally, we take the user's question and the most relevant text chunk we found, then combine them into a prompt for Claude:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0a7e460e7f0b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The prompt includes both the user's question and the relevant context from our document, allowing Claude to provide an informed answer based on the specific information in our knowledge base."}),`
`,(0,n.jsx)(r.h2,{id:"the-complete-flow",children:"The Complete Flow"}),`
`,(0,n.jsx)(r.p,{children:"That's the entire RAG pipeline from start to finish:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Chunk source documents"}),`
`,(0,n.jsx)(r.li,{children:"Generate embeddings for each chunk"}),`
`,(0,n.jsx)(r.li,{children:"Store embeddings in a vector database"}),`
`,(0,n.jsx)(r.li,{children:"When a user asks a question, embed their query"}),`
`,(0,n.jsx)(r.li,{children:"Find the most similar stored embeddings using cosine similarity"}),`
`,(0,n.jsx)(r.li,{children:"Add the relevant chunks to a prompt with the user's question"}),`
`,(0,n.jsx)(r.li,{children:"Send the enhanced prompt to Claude for a response"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Understanding this process and the math behind it will help you work effectively with vector databases and debug issues when your RAG system isn't returning the results you expect."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};