import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building a RAG pipeline, you'll quickly discover that semantic search alone doesn't always return the best results. Sometimes you need exact term matches that semantic search might miss. The solution is to combine semantic search with lexical search using a technique called BM25."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-semantic-search-alone",children:"The Problem with Semantic Search Alone"}),`
`,(0,n.jsx)(r.p,{children:`Let's say you're searching for a specific incident ID like "INC-2023-Q4-011" in a document. While this exact term appears multiple times in relevant sections, semantic search might return unrelated sections that are semantically similar but don't actually contain the specific term you're looking for.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ae16f186b367.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This happens because semantic search focuses on meaning rather than exact matches. When you need precise term matching, you need a different approach."}),`
`,(0,n.jsx)(r.h2,{id:"hybrid-search-strategy",children:"Hybrid Search Strategy"}),`
`,(0,n.jsx)(r.p,{children:"The solution is to run two searches in parallel and merge the results:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./02a7c7cadb95.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Semantic Search"})," - Uses embeddings and vector databases for meaning-based matching"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lexical Search"})," - Uses classic text search for exact term matching"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Merge Results"})," - Combines both result sets for better coverage"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-bm25-works",children:"How BM25 Works"}),`
`,(0,n.jsx)(r.p,{children:"BM25 (Best Match 25) is a popular algorithm for lexical search in RAG pipelines. Here's how it processes a search query:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e24396bf85a1.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The algorithm follows these key steps:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tokenize the query"})," - Break the user's question into individual terms"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Count term frequency"})," - See how often each term appears across all documents"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Weight terms by rarity"})," - Terms used less frequently get higher importance scores"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Find best matches"})," - Return chunks that contain more instances of the higher-weighted terms"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'The key insight is that rare terms like "INC-2023-Q4-011" are much more important for search than common words like "a" or "the".'}),`
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
`,(0,n.jsxs)(r.p,{children:["The BM25 implementation provides the same API as your semantic search system - both have ",(0,n.jsx)(r.code,{children:"add_document()"})," and ",(0,n.jsx)(r.code,{children:"search()"})," methods, making them easy to use together."]}),`
`,(0,n.jsx)(r.h2,{id:"better-search-results",children:"Better Search Results"}),`
`,(0,n.jsx)(r.p,{children:"When you run the same query through BM25 that failed with semantic search alone, you get much better results. Instead of returning irrelevant sections, BM25 prioritizes the sections that actually contain your specific search terms."}),`
`,(0,n.jsx)(r.p,{children:'The algorithm correctly identifies that "INC-2023-Q4-011" is a rare, important term and ranks documents containing it much higher than documents with only common words from the query.'}),`
`,(0,n.jsx)(r.h2,{id:"next-steps",children:"Next Steps"}),`
`,(0,n.jsx)(r.p,{children:"Now that you have both semantic and lexical search systems working independently, the next step is merging their results. This hybrid approach gives you the best of both worlds - the contextual understanding of semantic search combined with the precision of exact term matching from lexical search."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d08ed8f62406.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Both search systems use similar APIs, making it straightforward to query both in parallel and combine their results into a single, more comprehensive result set."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};