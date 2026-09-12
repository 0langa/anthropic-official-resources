import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Claude can read and analyze PDF documents just as easily as it handles images. This capability opens up powerful possibilities for document analysis, summarization, and question-answering workflows."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-pdf-processing",children:"Setting Up PDF Processing"}),`
`,(0,n.jsx)(r.p,{children:"To work with PDFs, you'll need to make a few key changes to the standard message structure. The process is similar to image handling, but with some important differences in the document specification."}),`
`,(0,n.jsx)(r.p,{children:"First, read your PDF file as binary data:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with open("./earth.pdf", "rb") as f:
    file_bytes = f.read()
`})}),`
`,(0,n.jsx)(r.h2,{id:"document-message-structure",children:"Document Message Structure"}),`
`,(0,n.jsx)(r.p,{children:`The message structure for PDFs differs from images in several ways. Instead of an "image" object, you'll use a "document" object with these required fields:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`add_user_message(
    messages,
    [
        {"document": {"format": "pdf", "name": "earth", "source": {"bytes": file_bytes}}},
        {"text": "Summarize this document in one sentence"},
    ],
)
`})}),`
`,(0,n.jsx)(r.p,{children:"Key points about the document structure:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Use ",(0,n.jsx)(r.code,{children:'"document"'})," instead of ",(0,n.jsx)(r.code,{children:'"image"'})]}),`
`,(0,n.jsxs)(r.li,{children:["Set ",(0,n.jsx)(r.code,{children:'"format": "pdf"'})]}),`
`,(0,n.jsxs)(r.li,{children:["Include a ",(0,n.jsx)(r.code,{children:'"name"'})," field with the filename without extension"]}),`
`,(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.code,{children:'"source"'})," contains the file bytes"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"When you run this code, Claude analyzes the entire PDF content and provides a comprehensive response. In this case, it successfully summarized the Earth Wikipedia article, demonstrating its ability to process multi-page documents with complex layouts, images, and structured information."}),`
`,(0,n.jsx)(r.h2,{id:"what-claude-can-do-with-pdfs",children:"What Claude Can Do with PDFs"}),`
`,(0,n.jsx)(r.p,{children:"Claude can handle various PDF processing tasks:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Extract and summarize key information"}),`
`,(0,n.jsx)(r.li,{children:"Answer specific questions about document content"}),`
`,(0,n.jsx)(r.li,{children:"Analyze document structure and formatting"}),`
`,(0,n.jsx)(r.li,{children:"Process multi-page documents efficiently"}),`
`,(0,n.jsx)(r.li,{children:"Work with PDFs containing both text and images"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The PDF processing capability becomes even more powerful when combined with other features like citations, which allow Claude to reference specific parts of the document in its responses. This makes it particularly useful for research, document analysis, and content extraction workflows."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};