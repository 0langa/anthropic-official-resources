import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"We've built separate implementations for semantic search (using vector embeddings) and lexical search (using BM25). Now it's time to combine them into a unified search pipeline that leverages the strengths of both approaches."}),`
`,(0,n.jsx)(r.h2,{id:"the-multi-index-architecture",children:"The Multi-Index Architecture"}),`
`,(0,n.jsxs)(r.p,{children:["Both our VectorIndex and BM25Index classes share nearly identical APIs - they both have ",(0,n.jsx)(r.code,{children:"add_document()"})," and ",(0,n.jsx)(r.code,{children:"search()"})," methods. This consistency makes it straightforward to wrap them together in a new class called Retriever."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./841de3dd2498.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The Retriever acts as a coordinator that forwards user queries to both indexes, collects their results, and merges them using a technique called reciprocal rank fusion."}),`
`,(0,n.jsx)(r.h2,{id:"understanding-reciprocal-rank-fusion",children:"Understanding Reciprocal Rank Fusion"}),`
`,(0,n.jsx)(r.p,{children:"Merging results from different search methods isn't as simple as just concatenating lists. Each method uses different scoring systems, so we need a way to normalize and combine their rankings fairly."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6a0de30359d5.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`Here's how reciprocal rank fusion works with an example. Let's say we search for information about "INC-2023-Q4-011" and get these results:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"VectorIndex returns: Section 2 (rank 1), Section 7 (rank 2), Section 6 (rank 3)"}),`
`,(0,n.jsx)(r.li,{children:"BM25Index returns: Section 6 (rank 1), Section 2 (rank 2), Section 7 (rank 3)"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0e763ee4ad98.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"We combine these into a single table showing each text chunk's rank from both indexes, then apply the RRF formula:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`RRF_score(d) = Σ(1 / (k + rank_i(d)))
`})}),`
`,(0,n.jsx)(r.p,{children:"Where k is a constant (often 60, but we'll use 1 for clearer results) and rank_i(d) is the rank of document d in the i-th ranking."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./391f12a30a1f.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For our example:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Section 2: 1.0/(1+1) + 1.0/(1+2) = 0.833"}),`
`,(0,n.jsx)(r.li,{children:"Section 7: 1.0/(1+2) + 1.0/(1+3) = 0.583"}),`
`,(0,n.jsx)(r.li,{children:"Section 6: 1.0/(1+3) + 1.0/(1+1) = 0.75"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d9bd5a562770.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The final ranking becomes: Section 2 (0.833), Section 6 (0.75), Section 7 (0.583). This makes intuitive sense - Section 2 performed well in both indexes, so it rises to the top."}),`
`,(0,n.jsx)(r.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,(0,n.jsx)(r.p,{children:"The Retriever class wraps multiple search indexes and provides a unified interface:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`class Retriever:
    def __init__(self, *indexes: SearchIndex):
        if len(indexes) == 0:
            raise ValueError("At least one index must be provided")
        self._indexes = list(indexes)
    
    def add_document(self, document: Dict[str, Any]):
        for index in self._indexes:
            index.add_document(document)
    
    def search(self, query_text: str, k: int = 1, k_rrf: int = 60):
        # Get results from all indexes
        all_results = []
        for idx, results in enumerate(all_results):
            for rank, (doc, _) in enumerate(results):
                # Track document ranks across indexes
                # Apply RRF scoring formula
        # Return merged and sorted results
`})}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that by maintaining consistent APIs across different search implementations, we can easily combine them without tight coupling."}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-hybrid-approach",children:"Testing the Hybrid Approach"}),`
`,(0,n.jsx)(r.p,{children:'Remember our earlier problem where searching for "what happened with INC-2023-Q4-011?" returned unexpected results from the vector-only approach? The cybersecurity incident (Section 10) came first, but financial analysis (Section 3) came second instead of the more relevant software engineering section.'}),`
`,(0,n.jsx)(r.p,{children:"With our hybrid retriever, we now get much better results:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Section 10: Cybersecurity Analysis - Incident Response Report (most relevant)"}),`
`,(0,n.jsx)(r.li,{children:"Section 2: Software Engineering - Project Phoenix Stability Enhancements (second most relevant)"}),`
`,(0,n.jsx)(r.li,{children:"Section 5: Legal Developments (third)"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This demonstrates how combining semantic and lexical search can overcome the limitations of either approach used alone."}),`
`,(0,n.jsx)(r.h2,{id:"extensibility",children:"Extensibility"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2dc7491d64f7.jpg",alt:""})}),`
`,(0,n.jsxs)(r.p,{children:["The beauty of this architecture is its extensibility. Since all indexes implement the same SearchIndex protocol with ",(0,n.jsx)(r.code,{children:"add_document()"})," and ",(0,n.jsx)(r.code,{children:"search()"})," methods, you can easily add new search methodologies:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b1af01051933.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Want to add a keyword-based index? A graph-based search? A specialized domain index? Just implement the same interface and the Retriever will automatically incorporate it into the fusion process."}),`
`,(0,n.jsx)(r.p,{children:"This modular approach keeps each search implementation focused and testable while providing a clean way to combine their strengths in the final system."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};