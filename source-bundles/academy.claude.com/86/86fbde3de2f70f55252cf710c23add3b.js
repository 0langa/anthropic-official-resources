import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When you have both semantic search (vector embeddings) and lexical search (BM25) working independently, the next step is combining them into a unified search pipeline. This hybrid approach leverages the strengths of both methods to deliver more accurate results."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./961cd9717345.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"building-a-unified-interface",children:"Building a Unified Interface"}),`
`,(0,n.jsxs)(r.p,{children:["Both search implementations share nearly identical APIs - they both have ",(0,n.jsx)(r.code,{children:"add_document()"})," and ",(0,n.jsx)(r.code,{children:"search()"})," methods. This consistency makes it straightforward to wrap them in a single ",(0,n.jsx)(r.code,{children:"Retriever"})," class that coordinates between the two approaches."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./3fbfcb27eda1.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The Retriever acts as a coordinator that:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Receives a user's question"}),`
`,(0,n.jsx)(r.li,{children:"Forwards it to both the VectorIndex and BM25Index"}),`
`,(0,n.jsx)(r.li,{children:"Collects results from both systems"}),`
`,(0,n.jsx)(r.li,{children:"Merges the results using a ranking algorithm"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1aae9ddbb178.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"reciprocal-rank-fusion",children:"Reciprocal Rank Fusion"}),`
`,(0,n.jsx)(r.p,{children:"The challenge lies in merging results from different search methods. Each system returns results with different scoring mechanisms, so you can't simply combine scores directly. Instead, we use a technique called Reciprocal Rank Fusion (RRF)."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./109886b19d3a.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how RRF works with a practical example. Suppose your VectorIndex returns results ranked as: Section 2, Section 7, Section 6. Meanwhile, your BM25Index returns: Section 6, Section 2, Section 7."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./938a17fa4ecc.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"To merge these results, you create a combined table showing each text chunk's rank from both systems:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./93f690ee13cd.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The RRF formula calculates a score for each document:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`RRF_score(d) = Σ(1 / (k + rank_i(d)))
`})}),`
`,(0,n.jsxs)(r.p,{children:["Where ",(0,n.jsx)(r.code,{children:"k"})," is a constant (typically 60, though 1 works well for clearer results) and ",(0,n.jsx)(r.code,{children:"rank_i(d)"})," is the rank of document ",(0,n.jsx)(r.code,{children:"d"})," in the i-th ranking system."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e032f4493403.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"For each text chunk, you calculate:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Section 2: 1.0/(1+1) + 1.0/(1+2) = 0.833"}),`
`,(0,n.jsx)(r.li,{children:"Section 7: 1.0/(1+2) + 1.0/(1+3) = 0.583"}),`
`,(0,n.jsx)(r.li,{children:"Section 6: 1.0/(1+3) + 1.0/(1+1) = 0.75"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"After sorting by score, the final ranking becomes: Section 2 (first), Section 6 (second), Section 7 (third)."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./ed4b19393443.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),`
`,(0,n.jsx)(r.p,{children:"The Retriever class implementation is straightforward:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`class Retriever:
    def __init__(self, *indexes):
        self._indexes = list(indexes)
    
    def add_document(self, document):
        for index in self._indexes:
            index.add_document(document)
    
    def search(self, query_text, k=1, k_rrf=60):
        # Get results from all indexes
        all_results = []
        for idx, results in enumerate(all_results):
            for rank, (doc, _) in enumerate(results):
                # Track document ranks across systems
                # Apply RRF formula
                # Return merged, sorted results
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./67939ad6d66d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The key insight is that the RRF algorithm creates a unified ranking by considering how well each document performs across all search systems, rather than relying on any single scoring method."}),`
`,(0,n.jsx)(r.h2,{id:"testing-the-hybrid-approach",children:"Testing the Hybrid Approach"}),`
`,(0,n.jsx)(r.p,{children:'When testing with a query like "what happened with INC-2023-Q4-011?", the hybrid approach delivers significantly better results than either method alone. Instead of getting unexpected results from pure vector search, you now get the most relevant cybersecurity incident report first, followed by related software engineering content.'}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./99e48f9eae84.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"extensibility",children:"Extensibility"}),`
`,(0,n.jsxs)(r.p,{children:["The beauty of this design is its modularity. Since each search index implements the same interface (",(0,n.jsx)(r.code,{children:"add_document()"})," and ",(0,n.jsx)(r.code,{children:"search()"}),"), you can easily add new search methodologies to the system. Whether it's a different embedding model, a specialized domain search, or any other retrieval technique, as long as it follows the established API, it integrates seamlessly into the hybrid pipeline."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0732ae059a29.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This hybrid search approach represents a significant improvement in retrieval accuracy by combining the semantic understanding of vector search with the precise keyword matching of lexical search, all unified through the mathematically sound RRF ranking algorithm."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};