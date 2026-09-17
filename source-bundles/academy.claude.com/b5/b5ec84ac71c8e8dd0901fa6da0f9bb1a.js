import{Qp as e,em as t}from"../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When working with PDFs in Claude, one of the biggest challenges is trust. Users often have to take it on faith that the AI is correctly interpreting the document contents. Claude's citations feature directly addresses this problem by showing exactly where information comes from in your source documents."}),`
`,(0,n.jsx)(r.h2,{id:"enabling-citations",children:"Enabling Citations"}),`
`,(0,n.jsx)(r.p,{children:"To enable citations in your PDF processing, you need to add a single parameter to your document configuration:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with open("./earth.pdf", "rb") as f:
    file_bytes = f.read()

messages = []

add_user_message(
    messages,
    [
        {
            "document": {
                "format": "pdf",
                "name": "earth",
                "source": {"bytes": file_bytes},
                "citations": {"enabled": True}
            }
        },
        {"text": "How were Earth's atmosphere and oceans formed?"},
    ]
)

response = chat(messages)
`})}),`
`,(0,n.jsxs)(r.p,{children:["The key addition is ",(0,n.jsx)(r.code,{children:'"citations": {"enabled": True}'})," in the document dictionary. This tells Claude to track where it finds information and include citation data in its response."]}),`
`,(0,n.jsx)(r.h2,{id:"understanding-citation-responses",children:"Understanding Citation Responses"}),`
`,(0,n.jsx)(r.p,{children:"When citations are enabled, Claude's response structure changes significantly. Instead of just returning text, you get multiple parts:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Text parts"})," - The regular response content you're familiar with"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Citations content parts"})," - New structured data that maps statements back to source locations"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The citations content includes detailed information about where Claude found supporting evidence for each statement, including the specific document, page numbers, and even the exact text that influenced its response."}),`
`,(0,n.jsx)(r.h2,{id:"why-citations-matter",children:"Why Citations Matter"}),`
`,(0,n.jsx)(r.p,{children:"Citations provide several key benefits for PDF-based applications:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Verification"})," - Users can check Claude's work by going back to the source"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Confidence"})," - Knowing where information comes from builds trust in AI responses"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Transparency"})," - The AI's reasoning process becomes visible and auditable"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Accuracy"})," - Citations encourage more careful information extraction"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This feature is particularly valuable in professional, academic, or research contexts where accuracy and source attribution are critical. Instead of treating Claude as a black box, citations turn it into a transparent research assistant that shows its work."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};