import{Gp as e,qp as t}from"../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:`The hybrid retrieval approach we've built works well, but it still has some rough edges. When we search for "what did the eng team do with INC-2023-Q4-011?", we'd expect the Software Engineering section to rank higher since it specifically mentions the engineering team and the incident. However, the Cybersecurity section still comes first.`}),`
`,(0,n.jsx)(r.p,{children:"This is where re-ranking comes in - a post-processing technique that can significantly improve retrieval accuracy."}),`
`,(0,n.jsx)(r.h2,{id:"how-re-ranking-works",children:"How Re-ranking Works"}),`
`,(0,n.jsx)(r.p,{children:"Re-ranking adds an extra step after your hybrid search process. Instead of just returning the merged results from your vector and BM25 indexes, you pass those results through an LLM for intelligent reordering."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b552a90bd170.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The process is straightforward:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Run your existing hybrid search (vector + BM25)"}),`
`,(0,n.jsx)(r.li,{children:"Merge the results as before"}),`
`,(0,n.jsx)(r.li,{children:"Send the merged results to Claude with a re-ranking prompt"}),`
`,(0,n.jsx)(r.li,{children:"Get back a reordered list of the most relevant documents"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"the-re-ranking-prompt",children:"The Re-ranking Prompt"}),`
`,(0,n.jsx)(r.p,{children:"The prompt structure is simple but effective. You provide Claude with the user's question and all the candidate documents, then ask it to return the most relevant ones in order of decreasing relevance."}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`You are about to be given a set of documents, along with an id of each.
Your task is to select the {k} most relevant documents to answer the user's question.

Here is the user's question:
<question>
{query_text}
</question>

Here are the documents to select from:
<documents>
{joined_docs}
</documents>

Respond in the following format:
\`\`\`json
\\{
  "document_ids": str[] # List document ids, \\{k\\} elements long, sorted in order of decreasing relevance
\\}
\`\`\`
`})}),`
`,(0,n.jsx)(r.h2,{id:"efficiency-considerations",children:"Efficiency Considerations"}),`
`,(0,n.jsx)(r.p,{children:"A key optimization is using document IDs instead of asking Claude to return full text chunks. If you asked Claude to return the complete text of each relevant document, you'd waste time waiting for it to copy large amounts of text."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./457382fdfe7e.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Instead, assign each text chunk a unique ID ahead of time, then ask Claude to return just those IDs in the preferred order. This makes the re-ranking process much faster while still giving you the reordered results you need."}),`
`,(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),`
`,(0,n.jsx)(r.p,{children:"The re-ranker function gets called automatically after your initial hybrid search completes. Here's the basic structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def reranker_fn(docs, query_text, k):
    joined_docs = "\\n".join([
        f"""
        <document>
        <document_id>{doc["id"]}</document_id>
        <document_content>{doc["content"]}</document_content>
        </document>
        """
        for doc in docs
    ])
    
    # Build prompt with user question and documents
    # Send to Claude with JSON response format
    # Parse and return reordered document IDs
`})}),`
`,(0,n.jsx)(r.p,{children:"You can integrate this into your retriever by passing the re-ranker function as a parameter:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`retriever = Retriever(bm25_index, vector_index, reranker_fn=reranker_fn)
`})}),`
`,(0,n.jsx)(r.h2,{id:"results",children:"Results"}),`
`,(0,n.jsx)(r.p,{children:`The re-ranking approach shows clear improvements. When testing the query "what did the eng team do with INC-2023-Q4-011?", the Software Engineering section now correctly appears first, ahead of the Cybersecurity section. Claude successfully identified that the user was specifically asking about the engineering team's involvement with the incident.`}),`
`,(0,n.jsx)(r.h2,{id:"trade-offs",children:"Trade-offs"}),`
`,(0,n.jsx)(r.p,{children:"Re-ranking comes with trade-offs to consider:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Increased latency:"})," You now need to wait for an additional LLM call to complete"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Improved accuracy:"})," The LLM can understand context and intent better than pure similarity scores"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Cost considerations:"})," Each search now requires an LLM API call"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"For many applications, the accuracy improvement justifies the additional latency and cost, especially when precise retrieval is critical for your use case."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};