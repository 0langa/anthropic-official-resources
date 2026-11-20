import{n as e,r as t}from"../../../../react-ml7fx0sn.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components},{LessonDownloads:i,Video:o}=r;return i||a("LessonDownloads",!0),o||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{youtubeId:"DneX8qtqO_I",title:"PDF support"}),`
`,(0,n.jsxs)(r.p,{children:["Download ",(0,n.jsx)(r.code,{children:"earth.zip"})," from the Downloads section at the end of this lesson, unzip it, and put ",(0,n.jsx)(r.code,{children:"earth.pdf"})," in the same folder as your code. The PDF is an excerpt from the Wikipedia article ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Earth",children:"Earth"}),", by Wikipedia contributors, shared under ",(0,n.jsx)(r.a,{href:"https://creativecommons.org/licenses/by-sa/4.0/",children:"CC BY-SA 4.0"}),"."]}),`
`,(0,n.jsx)(r.p,{children:"Claude can read and analyze PDF documents just as easily as it handles images. This capability opens up powerful possibilities for document analysis, summarization, and question-answering workflows."}),`
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
`,(0,n.jsx)(r.p,{children:"The PDF processing capability becomes even more powerful when combined with other features like citations, which allow Claude to reference specific parts of the document in its responses. This makes it particularly useful for research, document analysis, and content extraction workflows."}),`
`,(0,n.jsx)(i,{})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}i.uses=["LessonDownloads","Video"];export{i as default};