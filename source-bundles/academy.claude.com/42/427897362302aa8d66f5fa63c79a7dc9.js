import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now that we've covered the basics of RAG, text chunking, and embeddings, let's walk through the complete RAG pipeline step by step. This example will show you exactly how all these pieces work together to retrieve relevant information and generate responses."}),`
`,(0,n.jsx)(r.h2,{id:"step-1-chunk-your-source-text",children:"Step 1: Chunk Your Source Text"}),`
`,(0,n.jsx)(r.p,{children:"First, we take our source document and break it into manageable chunks. For this example, we'll use two simple text sections:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Section 1: Medical Research - "This year saw significant strides in our understanding of XDR-47, a 'bug' we have not seen before."`}),`
`,(0,n.jsx)(r.li,{children:'Section 2: Software Engineering - "This division dedicated significant effort to studying various infection vectors in our distributed systems"'}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"step-2-generate-embeddings",children:"Step 2: Generate Embeddings"}),`
`,(0,n.jsx)(r.p,{children:"Next, we convert each text chunk into numerical embeddings using an embedding model. To make this easier to understand, let's imagine we have a perfect embedding model that always returns exactly two numbers, and we know what each number represents."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1c6024225dad.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In our imaginary model:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The first number represents how much the text talks about the medical field"}),`
`,(0,n.jsx)(r.li,{children:"The second number represents how much the text talks about software engineering"}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["For the medical research section, we might get ",(0,n.jsx)(r.code,{children:"[0.97, 0.34]"}),' - very medical-focused but with some software elements due to the word "bug". For the software engineering section, we get ',(0,n.jsx)(r.code,{children:"[0.30, 0.97]"}),' - heavily software-focused but with medical undertones from "infection vectors".']}),`
`,(0,n.jsx)(r.h2,{id:"normalization",children:"Normalization"}),`
`,(0,n.jsxs)(r.p,{children:["The embedding API typically performs a normalization step that scales each vector to have a magnitude of 1.0. You don't need to worry about the math here - it's handled automatically. This gives us normalized vectors like ",(0,n.jsx)(r.code,{children:"[0.944, 0.331]"})," and ",(0,n.jsx)(r.code,{children:"[0.295, 0.955]"}),"."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b0b0f52420d1.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"We can visualize these embeddings on a unit circle, where each point represents one of our text chunks."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./960fec870718.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"step-3-store-in-vector-database",children:"Step 3: Store in Vector Database"}),`
`,(0,n.jsx)(r.p,{children:"We store these embeddings in a vector database - a specialized database optimized for storing, comparing, and searching through long lists of numbers like our embeddings."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ef6c3835ed29.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"At this point, we pause. All the work so far has been preprocessing that happens ahead of time. Now we wait for a user to submit a query."}),`
`,(0,n.jsx)(r.h2,{id:"step-4-process-user-query",children:"Step 4: Process User Query"}),`
`,(0,n.jsx)(r.p,{children:`When a user asks a question like "I'm curious about the company. In particular, what did the software engineering dept do this year?", we run their query through the same embedding model.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2a20e27d8167.jpg",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["This query gets embedded as something like ",(0,n.jsx)(r.code,{children:"[0.1, 0.89]"})," - low medical score, high software engineering score. After normalization, we get ",(0,n.jsx)(r.code,{children:"[0.112, 0.993]"}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"step-5-find-similar-embeddings",children:"Step 5: Find Similar Embeddings"}),`
`,(0,n.jsx)(r.p,{children:"We send the user's query embedding to our vector database and ask it to find the most similar stored embeddings."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a4804e2a776d.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The database returns the software engineering section because it's the closest match to what the user asked about."}),`
`,(0,n.jsx)(r.h2,{id:"how-similarity-works-cosine-similarity",children:"How Similarity Works: Cosine Similarity"}),`
`,(0,n.jsx)(r.p,{children:"The vector database uses cosine similarity to determine which embeddings are most similar. This measures the cosine of the angle between two vectors."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./dc431d596ad7.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Key points about cosine similarity:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Results range from -1 to 1"}),`
`,(0,n.jsx)(r.li,{children:"Values close to 1 mean high similarity"}),`
`,(0,n.jsx)(r.li,{children:"Values close to -1 mean very different"}),`
`,(0,n.jsx)(r.li,{children:"0 means perpendicular (no relationship)"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"In our example, the cosine similarity between the user query and the software engineering chunk is 0.983 - very high similarity. The similarity with the medical research chunk is only 0.398 - much lower."}),`
`,(0,n.jsx)(r.h2,{id:"cosine-distance",children:"Cosine Distance"}),`
`,(0,n.jsxs)(r.p,{children:[`You'll often see "cosine distance" in vector database documentation. This is simply calculated as `,(0,n.jsx)(r.code,{children:"(1 - cosine similarity)"}),". With cosine distance:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Values close to 0 mean high similarity"}),`
`,(0,n.jsx)(r.li,{children:"Larger values mean less similarity"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This adjustment makes the numbers easier to interpret in many contexts."}),`
`,(0,n.jsx)(r.h2,{id:"step-6-create-the-final-prompt",children:"Step 6: Create the Final Prompt"}),`
`,(0,n.jsx)(r.p,{children:"Finally, we take the user's question and the most relevant text chunk we found, combine them into a prompt, and send it to Claude for a response."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./002860bcc087.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The prompt might look like:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Answer the user's question about the financial document.

<user_question>
How many bugs did engineers fix this year?
</user_question>

<report>
## Section 2: Software Engineering
This division dedicated significant effort to studying various infection vectors in our distributed systems
</report>
`})}),`
`,(0,n.jsx)(r.p,{children:"And that's the complete RAG pipeline! The system successfully retrieved the most relevant information based on semantic similarity and provided it as context for generating an accurate response."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};