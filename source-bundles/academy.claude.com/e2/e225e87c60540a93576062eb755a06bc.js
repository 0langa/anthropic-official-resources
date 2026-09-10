import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we've covered the basics of RAG, text chunking, and embeddings, let's walk through the complete RAG pipeline step by step. This detailed example will show you exactly how all the pieces fit together in a real implementation."}),`
`,(0,n.jsx)(r.h2,{id:"step-1-chunk-your-source-text",children:"Step 1: Chunk Your Source Text"}),`
`,(0,n.jsx)(r.p,{children:"First, we take our source document and break it into manageable chunks. For this example, we'll use two simple text sections:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Section 1: Medical Research - "This year saw significant strides in our understanding of XDR-47, a 'bug' we have not seen before."`}),`
`,(0,n.jsx)(r.li,{children:'Section 2: Software Engineering - "This division dedicated significant effort to studying various infection vectors in our distributed systems"'}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"step-2-generate-embeddings",children:"Step 2: Generate Embeddings"}),`
`,(0,n.jsx)(r.p,{children:"Next, we convert each text chunk into numerical embeddings. To make this easier to understand, let's imagine we have a perfect embedding model that always returns exactly two numbers, and we know what each number represents:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7167baedf645.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In our imaginary model:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"First number: How much the text talks about medicine"}),`
`,(0,n.jsx)(r.li,{children:"Second number: How much the text talks about software engineering"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["So our medical research section gets ",(0,n.jsx)(r.code,{children:"[0.97, 0.34]"}),' - very medical, somewhat software-related due to the word "bug". The software engineering section gets ',(0,n.jsx)(r.code,{children:"[0.30, 0.97]"}),' - very software-focused, but "infection vectors" has medical connotations.']}),`
`,(0,n.jsx)(r.h2,{id:"normalization",children:"Normalization"}),`
`,(0,n.jsx)(r.p,{children:"Before storing these embeddings, they go through a normalization process that scales each vector to have a magnitude of 1.0. This is typically handled automatically by your embedding API, but it's important to understand it happens."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f08995bf43ba.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["After normalization, our embeddings become ",(0,n.jsx)(r.code,{children:"[0.944, 0.331]"})," and ",(0,n.jsx)(r.code,{children:"[0.295, 0.955]"}),". We can visualize these on a unit circle where both points lie exactly on the circle's edge."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c0f5e517c426.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"step-3-store-in-vector-database",children:"Step 3: Store in Vector Database"}),`
`,(0,n.jsx)(r.p,{children:"The normalized embeddings get stored in a vector database - a specialized database optimized for storing, comparing, and searching through long lists of numbers like our embeddings."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e182b15de5aa.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"At this point, we pause. All the work so far has been preprocessing that happens ahead of time. Now we wait for a user to submit a query."}),`
`,(0,n.jsx)(r.h2,{id:"step-4-process-user-query",children:"Step 4: Process User Query"}),`
`,(0,n.jsx)(r.p,{children:`When a user asks a question like "I'm curious about the company. In particular, what did the software engineering dept do this year?", we run their query through the same embedding model.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3aec8fd1b9f8.png",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["This query gets embedded as ",(0,n.jsx)(r.code,{children:"[0.1, 0.89]"})," - low medical score, high software engineering score. After normalization, it becomes ",(0,n.jsx)(r.code,{children:"[0.112, 0.993]"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"step-5-find-similar-embeddings",children:"Step 5: Find Similar Embeddings"}),`
`,(0,n.jsx)(r.p,{children:`Now we ask the vector database: "Find the stored embedding that's closest to this user query embedding." The database returns the software engineering section because it's the most similar.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c7941cfd4d35.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'But how does the database determine "closest"? It uses cosine similarity.'}),`
`,(0,n.jsx)(r.h2,{id:"cosine-similarity",children:"Cosine Similarity"}),`
`,(0,n.jsx)(r.p,{children:"The vector database calculates the cosine of the angle between vectors to measure similarity. This gives us a number between -1 and 1:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1ead50fb7e5a.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"1.0 = vectors point in exactly the same direction (very similar)"}),`
`,(0,n.jsx)(r.li,{children:"0.0 = vectors are perpendicular (unrelated)"}),`
`,(0,n.jsx)(r.li,{children:"-1.0 = vectors point in opposite directions (very different)"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"In our example:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"User query vs Software Engineering: cosine similarity = 0.983 (very similar!)"}),`
`,(0,n.jsx)(r.li,{children:"User query vs Medical Research: cosine similarity = 0.398 (less similar)"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"cosine-distance",children:"Cosine Distance"}),`
`,(0,n.jsxs)(r.p,{children:[`You'll often see "cosine distance" in vector database documentation. This is simply `,(0,n.jsx)(r.code,{children:"1 - cosine similarity"}),", which flips the scale so that smaller numbers mean more similar:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"0.0 = very similar"}),`
`,(0,n.jsx)(r.li,{children:"1.0 = perpendicular"}),`
`,(0,n.jsx)(r.li,{children:"2.0 = completely opposite"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"step-6-build-the-final-prompt",children:"Step 6: Build the Final Prompt"}),`
`,(0,n.jsx)(r.p,{children:"Finally, we take the user's question and the most relevant text chunk (software engineering section) and combine them into a prompt for Claude:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0a7e460e7f0b.png",alt:""})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Answer the user's question about the financial document.

<user_question>
How many bugs did engineers fix this year?
</user_question>

<report>
## Section 2: Software Engineering
This division dedicated significant effort to studying various infection vectors in our distributed systems
</report>
`})}),`
`,(0,n.jsx)(r.p,{children:"And that's the complete RAG pipeline! The system successfully found the most relevant context for the user's software engineering question and provided it to Claude for generating an informed response."}),`
`,(0,n.jsx)(r.p,{children:"This process happens automatically every time a user submits a query, allowing Claude to answer questions based on your specific documents rather than just its general training knowledge."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};