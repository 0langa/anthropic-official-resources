import{em as e,nm as t}from"../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Claude can read and analyze PDF files directly, making it a powerful tool for document processing. This capability works similarly to image processing, but with a few key differences in how you structure your code."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-pdf-processing",children:"Setting Up PDF Processing"}),`
`,(0,n.jsx)(r.p,{children:"To process a PDF file with Claude, you'll use nearly identical code to what you'd use for images. The main differences are in the file type specifications and variable names for clarity."}),`
`,(0,n.jsx)(r.p,{children:"Here's how to modify your existing image processing code for PDFs:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with open("earth.pdf", "rb") as f:
    file_bytes = base64.standard_b64encode(f.read()).decode("utf-8")

messages = []

add_user_message(
    messages,
    [
        {
            "type": "document",
            "source": {
                "type": "base64",
                "media_type": "application/pdf",
                "data": file_bytes,
            },
        },
        {"type": "text", "text": "Summarize the document in one sentence"},
    ],
)

chat(messages)
`})}),`
`,(0,n.jsx)(r.h2,{id:"key-changes-from-image-processing",children:"Key Changes from Image Processing"}),`
`,(0,n.jsx)(r.p,{children:"When adapting your image processing code for PDFs, you need to update several elements:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Change the file extension from ",(0,n.jsx)(r.code,{children:".png"})," to ",(0,n.jsx)(r.code,{children:".pdf"})]}),`
`,(0,n.jsxs)(r.li,{children:["Update the variable name from ",(0,n.jsx)(r.code,{children:"image_bytes"})," to ",(0,n.jsx)(r.code,{children:"file_bytes"})," for clarity"]}),`
`,(0,n.jsxs)(r.li,{children:["Set the type to ",(0,n.jsx)(r.code,{children:'"document"'})," instead of ",(0,n.jsx)(r.code,{children:'"image"'})]}),`
`,(0,n.jsxs)(r.li,{children:["Change the media type to ",(0,n.jsx)(r.code,{children:'"application/pdf"'})," instead of ",(0,n.jsx)(r.code,{children:'"image/png"'})]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"what-claude-can-extract-from-pdfs",children:"What Claude Can Extract from PDFs"}),`
`,(0,n.jsx)(r.p,{children:"Claude's PDF processing capabilities go beyond simple text extraction. It can analyze and understand:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Text content throughout the document"}),`
`,(0,n.jsx)(r.li,{children:"Images and charts embedded in the PDF"}),`
`,(0,n.jsx)(r.li,{children:"Tables and their data relationships"}),`
`,(0,n.jsx)(r.li,{children:"Document structure and formatting"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This makes Claude essentially a one-stop solution for extracting any type of information from PDF documents, whether you need summaries, data analysis, or specific content extraction."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6cc28f96e5c7.jpg",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The example above shows Claude successfully processing a Wikipedia article about Earth that was saved as a PDF, demonstrating how it can understand and summarize complex document content in a single sentence."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};