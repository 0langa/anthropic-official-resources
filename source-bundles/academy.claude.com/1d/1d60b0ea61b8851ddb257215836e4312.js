import{Mm as e,Pm as t}from"../../../../content-de-meta-nu71vghv.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When you have both semantic search (vector embeddings) and lexical search (BM25) working independently, the next step is combining them into a unified search pipeline. This hybrid approach leverages the strengths of both methods to deliver more accurate results."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./961cd9717345.png",alt:"The user question about INC-2023-Q4-011 runs through semantic and lexical search in parallel, then their results merge."})}),`
`,(0,n.jsx)(r.h2,{id:"creating-a-unified-interface",children:"Creating a Unified Interface"}),`
`,(0,n.jsxs)(r.p,{children:["Both search implementations share nearly identical APIs - they both have ",(0,n.jsx)(r.code,{children:"add_document()"})," and ",(0,n.jsx)(r.code,{children:"search()"})," methods that work the same way. This consistency makes it straightforward to wrap them in a single ",(0,n.jsx)(r.code,{children:"Retriever"})," class."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3fbfcb27eda1.png",alt:'VectorIndex and BM25Index each have add_document, which adds a text chunk, and "search", which returns chunks and scores.'})}),`
`,(0,n.jsx)(r.p,{children:"The Retriever acts as a coordinator that forwards user queries to both indexes, collects their results, and merges them into a single ranked list."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1aae9ddbb178.png",alt:"Diagram of the Retriever: a user question goes to both the VectorIndex and the BM25Index, whose results are merged."})}),`
`,(0,n.jsx)(r.h2,{id:"reciprocal-rank-fusion",children:"Reciprocal Rank Fusion"}),`
`,(0,n.jsx)(r.p,{children:"The challenge is merging results from different search methods that use different scoring systems. Vector search returns cosine similarity scores, while BM25 returns relevance scores - you can't simply combine these numbers directly."}),`
`,(0,n.jsx)(r.p,{children:"Instead, we use a technique called Reciprocal Rank Fusion (RRF). This method focuses on the rank position of results rather than their raw scores."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./109886b19d3a.png",alt:"VectorIndex and BM25Index result tables for the example below, each with a score column, such as 0.234 and 0.184 at rank 1."})}),`
`,(0,n.jsx)(r.p,{children:"Here's how it works with an example. Say your vector search returns sections 2, 7, and 6 in that order, while BM25 returns sections 6, 2, and 7. To merge these:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./938a17fa4ecc.png",alt:"The ranked results from VectorIndex and BM25Index combined into one table of each text chunk's rank from both indexes."})}),`
`,(0,n.jsx)(r.p,{children:"First, create a table showing each text chunk and its rank from both search methods:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Section 2: Rank 1 from vector, rank 2 from BM25"}),`
`,(0,n.jsx)(r.li,{children:"Section 7: Rank 2 from vector, rank 3 from BM25"}),`
`,(0,n.jsx)(r.li,{children:"Section 6: Rank 3 from vector, rank 1 from BM25"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./93f690ee13cd.png",alt:"Table of each section's ranks from vector and BM25 with its RRF score, noting a higher score means a more relevant chunk."})}),`
`,(0,n.jsx)(r.p,{children:"Then apply the RRF formula to calculate a combined score for each chunk:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`RRF_score(d) = Σ(1 / (k + rank_i(d)))
`})}),`
`,(0,n.jsxs)(r.p,{children:["Where ",(0,n.jsx)(r.code,{children:"k"})," is a constant (typically 60, but we'll use 1 for clearer results) and ",(0,n.jsx)(r.code,{children:"rank_i(d)"})," is the rank of document ",(0,n.jsx)(r.code,{children:"d"})," in the i-th search result."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e032f4493403.png",alt:"Reciprocal Rank Fusion formula and a table of three sections' vector and BM25 ranks and score, where higher is more relevant."})}),`
`,(0,n.jsx)(r.p,{children:"For our example:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Section 2: 1.0/(1+1) + 1.0/(1+2) = 0.833"}),`
`,(0,n.jsx)(r.li,{children:"Section 7: 1.0/(1+2) + 1.0/(1+3) = 0.583"}),`
`,(0,n.jsx)(r.li,{children:"Section 6: 1.0/(1+3) + 1.0/(1+1) = 0.75"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ed4b19393443.png",alt:"Table of each text chunk's rank from vector, rank from BM25, score and final rank, where a higher score is more relevant."})}),`
`,(0,n.jsx)(r.p,{children:"The final ranking becomes: Section 2 (0.833), Section 6 (0.75), Section 7 (0.583). This makes intuitive sense - Section 2 performed well in both searches, Section 6 had mixed results, and Section 7 ranked lower overall."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c17e3349fd61.png",alt:'The RRF table described above, adding a "Final Rank" column and the note that higher score means more relevant text chunk.'})}),`
`,(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),`
`,(0,n.jsx)(r.p,{children:"The Retriever class implementation is straightforward:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./67939ad6d66d.png",alt:"Retriever class in a notebook that raises errors for no indexes, non-string query text, non-positive k and negative k_rrf."})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`class Retriever:
    def __init__(self, *indexes):
        self._indexes = list(indexes)
    
    def add_document(self, document):
        for index in self._indexes:
            index.add_document(document)
    
    def search(self, query_text, k=1, k_rrf=60):
        # Get results from all indexes
        all_results = [index.search(query_text, k) for index in self._indexes]
        
        # Apply reciprocal rank fusion
        # ... merge logic here ...
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./4b4b00e88ea9.png",alt:"The merge logic left out of the code above: it builds doc_ranks, defines calc_rrf_score, then keeps docs scoring above 0."})}),`
`,(0,n.jsx)(r.p,{children:"The merge logic tracks document ranks across all search results, calculates RRF scores, and returns the top-k documents sorted by their combined scores."}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-hybrid-approach",children:"Testing the Hybrid Approach"}),`
`,(0,n.jsx)(r.p,{children:'When testing with the query "what happened with INC-2023-Q4-011?", the hybrid approach delivers much better results than vector search alone:'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1bf772a4caba.png",alt:"Vector search alone, returning Section 10: Cybersecurity Analysis at distance 0.634, Section 3: Financial Analysis at 0.809."})}),`
`,(0,n.jsx)(r.p,{children:"The results now correctly prioritize:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Section 10: Cybersecurity Analysis (the actual incident report)"}),`
`,(0,n.jsx)(r.li,{children:"Section 2: Software Engineering (relevant context)"}),`
`,(0,n.jsx)(r.li,{children:"Section 5: Legal Developments (less relevant but still related)"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./99e48f9eae84.png",alt:"Notebook output: Section 10 Cybersecurity Analysis scores about 0.0325, Section 2 about 0.0320, Section 5 about 0.0308."})}),`
`,(0,n.jsx)(r.h2,{id:"benefits-of-the-hybrid-architecture",children:"Benefits of the Hybrid Architecture"}),`
`,(0,n.jsx)(r.p,{children:"This design offers several advantages:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Modular design"}),": Each search index is implemented independently with the same API"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Easy extensibility"}),": You can add new search methods by implementing the same ",(0,n.jsx)(r.code,{children:"search()"})," and ",(0,n.jsx)(r.code,{children:"add_document()"})," interface"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Better accuracy"}),": Combines semantic understanding with exact keyword matching"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Flexible fusion"}),": The RRF algorithm works regardless of how many search indexes you combine"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0732ae059a29.png",alt:"Retriever sends the question to VectorIndex, BM25Index and a third box labeled ???Index, then merges the two result sets."})}),`
`,(0,n.jsx)(r.p,{children:"The consistent API means you could easily add a third search index - perhaps one that specializes in named entity recognition or handles specific document types - and the Retriever would automatically incorporate its results into the final ranking."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1ed3bf11f055.png",alt:"Diagram of the Retriever: a user question goes to both the VectorIndex and the BM25Index, whose results are merged."})}),`
`,(0,n.jsx)(r.p,{children:"This hybrid search foundation provides significantly more robust retrieval than either method alone, setting up your RAG pipeline for better performance across a wider range of query types."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};