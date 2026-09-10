import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When Claude answers questions based on documents you provide, users might assume it's just pulling information from its training data. But what if Claude is actually citing specific sources? The citations feature lets you show users exactly where Claude found its information, building trust and transparency into your AI applications."}),`
`,(0,n.jsx)(r.h2,{id:"why-citations-matter",children:"Why Citations Matter"}),`
`,(0,n.jsx)(r.p,{children:"Without citations, users see Claude's responses as coming from memory. They have no way to verify the information or understand that it's based on specific documents you provided. Citations solve this by showing users the exact source material Claude used to generate each part of its response."}),`
`,(0,n.jsx)(r.h2,{id:"enabling-citations",children:"Enabling Citations"}),`
`,(0,n.jsx)(r.p,{children:"To enable citations, add two fields to your document message:"}),`
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
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"title"})," field gives your document a name that appears in citations. The ",(0,n.jsx)(r.code,{children:"citations"})," field with ",(0,n.jsx)(r.code,{children:"enabled: True"})," tells Claude to track where it finds information."]}),`
`,(0,n.jsx)(r.h2,{id:"citation-structure",children:"Citation Structure"}),`
`,(0,n.jsx)(r.p,{children:"When citations are enabled, Claude's response becomes more complex. Instead of simple text, you get structured content with citation information:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./56c7c5b70fa8.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Each citation contains:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"cited_text"})," - The exact text Claude is referencing from your document"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"document_index"})," - Which document (if you provided multiple)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"document_title"})," - The title you assigned to the document"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"start_page_number"})," - Where the cited text begins"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"end_page_number"})," - Where the cited text ends"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"building-citation-interfaces",children:"Building Citation Interfaces"}),`
`,(0,n.jsx)(r.p,{children:"The real power of citations comes from building user interfaces that display them. You can create numbered references in the text that link to detailed citation information:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./af769f474a2d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When users hover over or click citation numbers, they see exactly which document and pages Claude referenced. This transparency helps users verify information and builds confidence in Claude's responses."}),`
`,(0,n.jsx)(r.h2,{id:"citations-with-plain-text",children:"Citations with Plain Text"}),`
`,(0,n.jsx)(r.p,{children:"Citations aren't limited to PDFs. You can also use them with plain text documents:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`{
  "type": "document", 
  "source": {
    "type": "text",
    "media_type": "text/plain",
    "data": article_text,
  },
  "title": "earth article",
  "citations": { "enabled": True }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["With plain text, you get ",(0,n.jsx)(r.code,{children:"CitationCharLocation"})," objects instead of page locations. These provide character positions within the text, allowing you to highlight the exact sentences or paragraphs Claude referenced."]}),`
`,(0,n.jsx)(r.h2,{id:"when-to-use-citations",children:"When to Use Citations"}),`
`,(0,n.jsx)(r.p,{children:"Citations are essential when:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Users need to verify information accuracy"}),`
`,(0,n.jsx)(r.li,{children:"You're working with sensitive or important documents"}),`
`,(0,n.jsx)(r.li,{children:"Transparency about sources builds trust in your application"}),`
`,(0,n.jsx)(r.li,{children:"Users might want to read the original source material"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'By implementing citations, you transform Claude from a "black box" that gives answers into a transparent system that shows its work, making your AI applications more trustworthy and verifiable.'})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};