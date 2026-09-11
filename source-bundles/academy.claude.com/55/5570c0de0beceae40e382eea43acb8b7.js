import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When building RAG pipelines, you'll quickly discover that semantic search alone doesn't always return the best results. Sometimes you need exact term matches that semantic search might miss. The solution is to combine semantic search with lexical search using a technique called BM25."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-semantic-search-alone",children:"The Problem with Semantic Search Alone"}),`
`,(0,n.jsx)(r.p,{children:`Let's say you're searching for a specific incident ID like "INC-2023-Q4-011" in a document. While semantic search excels at understanding context and meaning, it might return sections that are semantically related but don't actually contain the exact term you're looking for.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./70c28e6ea41e.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"In the example above, semantic search returned the cybersecurity section (which does contain the incident ID) but also returned a financial analysis section that doesn't mention the incident at all. This happens because semantic search focuses on conceptual similarity rather than exact term matching."}),`
`,(0,n.jsx)(r.h2,{id:"hybrid-search-strategy",children:"Hybrid Search Strategy"}),`
`,(0,n.jsx)(r.p,{children:"The solution is to run both semantic and lexical searches in parallel, then merge the results. This gives you the best of both worlds:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0ec069929590.jpg",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Semantic search"})," finds conceptually related content using embeddings"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lexical search"})," finds exact term matches using classic text search"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Merged results"})," combine both approaches for better accuracy"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-bm25-works",children:"How BM25 Works"}),`
`,(0,n.jsx)(r.p,{children:"BM25 (Best Match 25) is a popular algorithm for lexical search in RAG systems. Here's how it processes a search query:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a9bade45bcf8.jpg",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Step 1: Tokenize the query"}),`
Break the user's question into individual terms. For example, "a INC-2023-Q4-011" becomes ["a", "INC-2023-Q4-011"].`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Step 2: Count term frequency"}),`
See how often each term appears across all your documents. Common words like "a" might appear 5 times, while specific terms like "INC-2023-Q4-011" might appear only once.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Step 3: Weight terms by importance"}),`
Terms that appear less frequently get higher importance scores. The word "a" gets low importance because it's common, while "INC-2023-Q4-011" gets high importance because it's rare.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Step 4: Find best matches"}),`
Return documents that contain more instances of the higher-weighted terms.`]}),`
`,(0,n.jsx)(r.h2,{id:"implementing-bm25-search",children:"Implementing BM25 Search"}),`
`,(0,n.jsx)(r.p,{children:"Here's how to set up a basic BM25 search system:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`# 1. Chunk your text by sections
chunks = chunk_by_section(text)

# 2. Create a BM25 store and add documents
store = BM25Index()
for chunk in chunks:
    store.add_document({"content": chunk})

# 3. Search the store
results = store.search("What happened with INC-2023-Q4-011?", 3)

# Print results
for doc, distance in results:
    print(distance, "\\n", doc["content"][:200], "\\n----\\n")
`})}),`
`,(0,n.jsx)(r.p,{children:"When you run this search, you'll get much better results than semantic search alone. The BM25 algorithm prioritizes sections that actually contain your specific search terms, especially rare terms like incident IDs."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./564b141a17bd.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Notice how the results now properly prioritize the Software Engineering section and Cybersecurity section - both of which actually contain the incident ID you're searching for."}),`
`,(0,n.jsx)(r.h2,{id:"why-this-works-better",children:"Why This Works Better"}),`
`,(0,n.jsx)(r.p,{children:"BM25 excels at finding exact matches because it:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Gives higher weight to rare, specific terms"}),`
`,(0,n.jsx)(r.li,{children:"Ignores common words that don't add search value"}),`
`,(0,n.jsx)(r.li,{children:"Focuses on term frequency rather than semantic meaning"}),`
`,(0,n.jsx)(r.li,{children:"Works especially well for technical terms, IDs, and specific phrases"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that both search methods have complementary strengths. Semantic search understands context and meaning, while lexical search ensures you don't miss exact term matches. By combining them, you create a more robust search system that handles both conceptual queries and specific lookups effectively."}),`
`,(0,n.jsx)(r.p,{children:"In the next step, you'll learn how to merge results from both search systems to create a unified hybrid search experience."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};