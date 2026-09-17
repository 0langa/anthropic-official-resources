import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building a RAG pipeline, you'll quickly discover that semantic search alone doesn't always return the best results. Sometimes you need exact keyword matches that semantic search might miss. The solution is to combine semantic search with lexical search using a technique called BM25."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-semantic-search-alone",children:"The Problem with Semantic Search Alone"}),`
`,(0,n.jsx)(r.p,{children:`Let's say you're searching for a specific incident ID like "INC-2023-Q4-011" in a document. While this exact term appears multiple times in relevant sections, semantic search might return unrelated sections that seem semantically similar but don't actually contain the specific information you need.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ae16f186b367.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This happens because semantic search focuses on meaning rather than exact text matches. When you need precise keyword matching, you need a different approach."}),`
`,(0,n.jsx)(r.h2,{id:"hybrid-search-strategy",children:"Hybrid Search Strategy"}),`
`,(0,n.jsx)(r.p,{children:"The solution is to run both semantic and lexical searches in parallel, then merge the results. This gives you the best of both worlds:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./02a7c7cadb95.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Semantic search"})," - Finds conceptually related content using embeddings"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lexical search"})," - Finds exact keyword matches using classic text search"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Merged results"})," - Combines both approaches for better overall relevance"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-bm25-works",children:"How BM25 Works"}),`
`,(0,n.jsx)(r.p,{children:"BM25 (Best Match 25) is a popular algorithm for lexical search in RAG pipelines. Here's how it processes a search query:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e24396bf85a1.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The algorithm follows these key steps:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tokenize the query"})," - Break the user's question into individual terms"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Count term frequency"})," - See how often each term appears across all documents"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Weight terms by rarity"})," - Terms used less frequently get higher importance scores"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Score documents"})," - Find text chunks that contain more instances of the higher-weighted terms"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'The key insight is that rare terms like "INC-2023-Q4-011" are much more important for search relevance than common words like "a" or "the".'}),`
`,(0,n.jsx)(r.h2,{id:"implementing-bm25-search",children:"Implementing BM25 Search"}),`
`,(0,n.jsx)(r.p,{children:"Here's how to set up a BM25 search system:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`# Create a BM25 store
store = BM25Index()

# Add documents to the store
for chunk in chunks:
    store.add_document({"content": chunk})

# Search the store
results = store.search("What happened with INC-2023-Q4-011?", 3)
`})}),`
`,(0,n.jsxs)(r.p,{children:["The BM25 implementation maintains a similar API to your vector store, with ",(0,n.jsx)(r.code,{children:"add_document()"})," and ",(0,n.jsx)(r.code,{children:"search()"})," methods. This consistency makes it easy to use both systems together."]}),`
`,(0,n.jsx)(r.h2,{id:"better-search-results",children:"Better Search Results"}),`
`,(0,n.jsx)(r.p,{children:"When you run the same query through BM25 that failed with semantic search alone, you get much better results. The algorithm correctly prioritizes sections that contain the exact incident ID, ranking them higher than sections that might be semantically related but don't contain the specific term you're looking for."}),`
`,(0,n.jsx)(r.p,{children:"The search results now properly surface the Software Engineering section and Cybersecurity section that actually discuss the incident, rather than returning unrelated content like Financial Analysis."}),`
`,(0,n.jsx)(r.h2,{id:"next-steps",children:"Next Steps"}),`
`,(0,n.jsx)(r.p,{children:"Now that you have both semantic and lexical search systems working independently, the next step is to merge their results. This hybrid approach will give you the semantic understanding of embeddings combined with the precision of keyword matching, creating a more robust search experience for your RAG pipeline."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};