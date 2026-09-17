import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When Claude answers questions based on documents you provide, users might assume it's just drawing from its training data. But what if Claude could show exactly where it found specific information? That's where citations come in - a powerful feature that lets Claude reference specific parts of your source documents and show users exactly where each piece of information comes from."}),`
`,(0,n.jsx)(r.h2,{id:"why-citations-matter",children:"Why Citations Matter"}),`
`,(0,n.jsx)(r.p,{children:"Imagine asking Claude about how Earth's atmosphere formed and getting a detailed answer. Without citations, users have no way to verify the information or understand that Claude is actually referencing a specific document you provided. Citations solve this transparency problem by creating a clear trail from Claude's response back to your source material."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./acd587075d92.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"enabling-citations",children:"Enabling Citations"}),`
`,(0,n.jsx)(r.p,{children:"To enable citations, you need to modify your document message structure. Add two new fields to your document block:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`{
    "type": "document",
    "source": {
        "type": "base64",
        "media_type": "application/pdf",
        "data": file_bytes,
    },
    "title": "earth.pdf",
    "citations": { "enabled": True }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"title"})," field gives your document a readable name, while ",(0,n.jsx)(r.code,{children:'citations: {"enabled": True}'})," tells Claude to track where it finds information."]}),`
`,(0,n.jsx)(r.h2,{id:"understanding-citation-structure",children:"Understanding Citation Structure"}),`
`,(0,n.jsx)(r.p,{children:"When citations are enabled, Claude's response becomes more complex. Instead of simple text, you get structured data that includes citation information for each claim."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./8c3469eb501a.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Each citation contains several key pieces of information:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"cited_text"})," - The exact text from your document that supports Claude's statement"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"document_index"})," - Which document Claude is referencing (useful when you provide multiple documents)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"document_title"})," - The title you assigned to the document"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"start_page_number"})," - Where the cited text begins"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"end_page_number"})," - Where the cited text ends"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2b7dd19d40b5.jpg",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"building-user-interfaces-with-citations",children:"Building User Interfaces with Citations"}),`
`,(0,n.jsx)(r.p,{children:"The real power of citations comes from building user interfaces that make this information accessible. You can create interactive elements where users can hover over citation markers to see exactly where information came from."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cf4ccf4c2940.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This creates a transparent experience where users can:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"See that Claude's answers are grounded in actual source material"}),`
`,(0,n.jsx)(r.li,{children:"Verify the information by checking the original document"}),`
`,(0,n.jsx)(r.li,{children:"Understand the context around each cited piece of information"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"citations-with-plain-text",children:"Citations with Plain Text"}),`
`,(0,n.jsx)(r.p,{children:"Citations aren't limited to PDF documents. You can also use them with plain text sources. When working with text, modify your document structure like this:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`{
    "type": "document", 
    "source": {
        "type": "text",
        "media_type": "text/plain",
        "data": article_text,
    },
    "title": "earth_article",
    "citations": { "enabled": True }
}
`})}),`
`,(0,n.jsx)(r.p,{children:"With plain text sources, instead of page numbers, you'll get character positions that pinpoint exactly where in the text Claude found each piece of information."}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-citations",children:"When to Use Citations"}),`
`,(0,n.jsx)(r.p,{children:"Citations are particularly valuable when:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Users need to verify information for accuracy"}),`
`,(0,n.jsx)(r.li,{children:"You're working with authoritative documents that users should be able to reference"}),`
`,(0,n.jsx)(r.li,{children:"Transparency about information sources is critical for your application"}),`
`,(0,n.jsx)(r.li,{children:"Users might want to explore the broader context around specific facts"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'By implementing citations, you transform Claude from a "black box" that provides answers into a transparent research assistant that shows its work. This builds user trust and enables them to dive deeper into your source materials when needed.'})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};