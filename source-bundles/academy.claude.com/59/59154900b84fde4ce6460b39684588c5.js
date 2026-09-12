import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:`The hybrid retrieval approach we've built works well, but there are still some rough edges. When you search for specific terms or use abbreviations, the results might not be perfectly ordered. For example, asking "What did the eng team do with INC-2023-Q4-011?" might return the cybersecurity section first, even though the software engineering section is more relevant to that specific query.`}),`
`,(0,n.jsx)(r.h2,{id:"llm-based-re-ranking",children:"LLM-Based Re-ranking"}),`
`,(0,n.jsx)(r.p,{children:"Re-ranking adds another post-processing step after merging results from your vector index and BM25 index. The concept is straightforward: take your search results and ask Claude to reorder them based on relevance to the user's question."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b552a90bd170.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's how the process works:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Run your hybrid search (vector + BM25) as usual"}),`
`,(0,n.jsx)(r.li,{children:"Merge the results like before"}),`
`,(0,n.jsx)(r.li,{children:"Pass the merged results to a re-ranker function"}),`
`,(0,n.jsx)(r.li,{children:"The re-ranker sends everything to Claude with a specific prompt"}),`
`,(0,n.jsx)(r.li,{children:"Claude returns a reordered list of the most relevant documents"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"system-prompts",children:"System Prompts"}),`
`,(0,n.jsx)(r.p,{children:"The re-ranking prompt is designed to be clear and specific. You provide Claude with the user's question and all the documents that seem relevant, then ask for a simple task: return the most relevant documents in order of decreasing relevance."}),`
`,(0,n.jsx)(r.p,{children:"A typical prompt structure looks like this:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`You are tasked with finding the documents most relevant to a user's question.

<user_question>
What happened with INC-2023-Q4-011?
</user_question>

Here are documents that may be relevant:
<documents>
<document>Section 10...</document>
<document>Section 2...</document>
<document>Section 7...</document>
<document>Section 6...</document>
</documents>

Return the 3 most relevant docs, in order of decreasing relevance.
`})}),`
`,(0,n.jsx)(r.h2,{id:"efficiency-considerations",children:"Efficiency Considerations"}),`
`,(0,n.jsx)(r.p,{children:"Asking Claude to return full text chunks would be inefficient - you'd be waiting for Claude to copy large amounts of text. Instead, assign each text chunk a unique ID ahead of time. Then ask Claude to return just those IDs in the correct order."}),`
`,(0,n.jsxs)(r.p,{children:["This approach is much faster because Claude only needs to return a simple list like ",(0,n.jsx)(r.code,{children:'["1p5g", "51n3", "ab83"]'})," instead of copying entire document sections."]}),`
`,(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),`
`,(0,n.jsx)(r.p,{children:"The re-ranker function gets called automatically by your retriever after the initial hybrid search. Here's the basic structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`def reranker_fn(docs, query_text, k):
    # Format documents with IDs
    joined_docs = "\\n".join([
        f"<document><document_id>{doc['id']}</document_id>"
        f"<document_content>{doc['content']}</document_content></document>"
        for doc in docs
    ])
    
    # Create prompt with user question and documents
    prompt = f"""You are about to be given a set of documents...
    {query_text}
    {joined_docs}
    """
    
    # Get Claude's response and parse the document IDs
    result = chat(messages, stop_sequences=["\`\`\`"])
    return json.loads(result["text"])["document_ids"]
`})}),`
`,(0,n.jsx)(r.h2,{id:"results",children:"Results"}),`
`,(0,n.jsx)(r.p,{children:'When you test the re-ranker with queries like "What did the eng team do with INC-2023-Q4-011?", you should see more relevant results at the top. Claude understands the context and can identify that a query about the engineering team should prioritize the software engineering section over other sections that merely mention the incident.'}),`
`,(0,n.jsx)(r.p,{children:"The trade-off is clear: re-ranking increases latency because you need to wait for Claude's response, but it significantly improves search accuracy by leveraging Claude's understanding of context and relevance."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};