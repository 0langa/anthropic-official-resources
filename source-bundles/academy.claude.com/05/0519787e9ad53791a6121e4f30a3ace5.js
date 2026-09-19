import{$p as e,Zp as t}from"../../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Claude's vision capabilities allow you to include images in your messages and ask Claude to analyze, compare, count objects, or perform virtually any visual task you can imagine. This opens up powerful possibilities for applications ranging from document analysis to automated assessments."}),`
`,(0,n.jsx)(r.h2,{id:"image-handling-basics",children:"Image Handling Basics"}),`
`,(0,n.jsx)(r.p,{children:"When working with images in Claude, you need to understand a few key limitations:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Up to 20 images across all messages in a single request"}),`
`,(0,n.jsx)(r.li,{children:"Max size of 3.75MB"}),`
`,(0,n.jsx)(r.li,{children:"Max height/width of 8000px"}),`
`,(0,n.jsxs)(r.li,{children:["Each image counts as a certain number of tokens: ",(0,n.jsx)(r.code,{children:"tokens = (width px × height px) / 750"})]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./526d6a757d8d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"To include an image, you add it as another type of message part. For each image you want to send, you include one image part in your user message. The structure looks like this:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with open("image.png", "rb") as f:
    image_bytes = f.read()

add_user_message(messages, [
    {
        "image": {
            "format": "png",
            "source": {"bytes": image_bytes}
        }
    },
    {"text": "What do you see in this image?"}
])
`})}),`
`,(0,n.jsx)(r.h2,{id:"multiple-images",children:"Multiple Images"}),`
`,(0,n.jsx)(r.p,{children:"You can send multiple images in a single message by adding multiple image parts. Claude can then analyze relationships between images, compare them, or answer questions that require understanding multiple visual inputs."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./eb3d93da4c6e.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"prompting-techniques",children:"Prompting Techniques"}),`
`,(0,n.jsx)(r.p,{children:"The most important thing to understand about Claude's vision capabilities is that all the same prompting engineering techniques apply to images. You can dramatically increase Claude's vision accuracy by providing guidelines, analysis steps, or using one-shot/multi-shot examples."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./a44d1b913150.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:'For example, instead of simply asking "How many marbles are in this image?", you can provide a structured approach:'}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Analyze this image of marbles and determine the exact count using this methodology:
1. Begin by identifying each unique marble one at a time. Assign each a number as you identify it.
2. Verify your result by counting with a different method. Start from the bottom-left corner and work row by row, from left to right.
What is the exact, verified number of marbles in this image?
`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./6f2b0e93d9c9.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Another effective technique is one-shot prompting, where you provide an example image with the correct analysis before asking Claude to analyze your target image:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2c5f3cf4f134.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"real-world-example-fire-risk-assessments",children:"Real-World Example: Fire Risk Assessments"}),`
`,(0,n.jsx)(r.p,{children:"A practical application of Claude's vision capabilities is automated fire risk assessment for insurance companies. Instead of sending inspectors to each property, companies can use high-resolution satellite imagery and ask Claude to evaluate fire risks."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./80ed96dcab57.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The system can analyze several key factors:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Dense, close-packed trees near the residence"}),`
`,(0,n.jsx)(r.li,{children:"Difficult access routes for emergency vehicles"}),`
`,(0,n.jsx)(r.li,{children:"Branches overhanging the residence"}),`
`,(0,n.jsx)(r.li,{children:"Overall tree density and spacing"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Here's how you might structure such an analysis:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with open('./images/prop7.png', 'rb') as f:
    image_bytes = f.read()

messages = []

add_user_message(messages, [
    {"image": {"format": "png", "source": {"bytes": image_bytes}}},
    {"text": prompt}
])

response = chat(messages)
`})}),`
`,(0,n.jsx)(r.p,{children:"The key to success with this type of complex visual analysis is providing detailed, structured prompts that guide Claude through specific analysis steps rather than asking for a simple assessment."}),`
`,(0,n.jsx)(r.p,{children:"Remember: when working with images, don't fall into the trap of using simple prompts. Apply the same prompt engineering techniques you've learned for text-based interactions to dramatically improve Claude's visual analysis accuracy."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};