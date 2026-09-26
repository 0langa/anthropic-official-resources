import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Claude's vision capabilities let you include images in your messages and ask Claude to analyze them in sophisticated ways. You can ask Claude to describe image contents, compare multiple images, count objects, or perform complex visual analysis tasks."}),`
`,(0,n.jsx)(r.h2,{id:"image-handling-basics",children:"Image Handling Basics"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c7b1cb42c0c5.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"When working with images in Claude, you need to understand several key limitations:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Up to 100 images across all messages in a single request"}),`
`,(0,n.jsx)(r.li,{children:"Max size of 5MB per image"}),`
`,(0,n.jsx)(r.li,{children:"When sending one image: max height/width of 8000px"}),`
`,(0,n.jsx)(r.li,{children:"When sending multiple images: max height/width of 2000px"}),`
`,(0,n.jsx)(r.li,{children:"Images can be included as base64 encoding or a URL to the image"}),`
`,(0,n.jsxs)(r.li,{children:["Each image counts as tokens based on dimensions: ",(0,n.jsx)(r.code,{children:"tokens = (width px × height px) / 750"})]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"To include an image, you add an image block to your user message alongside text blocks. Here's the structure:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with open("image.png", "rb") as f:
    image_bytes = base64.standard_b64encode(
        f.read()
    ).decode("utf-8")

add_user_message(messages, [
    # Image Block
    {
        "type": "image",
        "source": {
            "type": "base64",
            "media_type": "image/png",
            "data": image_bytes,
        }
    },
    # Text Block
    {
        "type": "text",
        "text": "What do you see in this image?"
    }
])
`})}),`
`,(0,n.jsx)(r.h2,{id:"message-flow",children:"Message Flow"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./89621a94c5d8.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The conversation works just like text-only interactions. Your server sends a user message containing both image and text blocks to Claude, and Claude responds with a text message analyzing the image."}),`
`,(0,n.jsx)(r.h2,{id:"prompting-techniques",children:"Prompting Techniques"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7822fde09008.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The most important thing to understand about Claude's vision capabilities is that good prompting techniques are absolutely critical. Simple prompts often produce poor results, even with clear images."}),`
`,(0,n.jsx)(r.p,{children:`For example, asking "How many marbles are in this image?" with an image containing 12 marbles might return an incorrect count of 13. You can dramatically improve accuracy by applying the same prompting engineering techniques you'd use for text:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Providing detailed guidelines and analysis steps"}),`
`,(0,n.jsx)(r.li,{children:"Using one-shot or multi-shot examples"}),`
`,(0,n.jsx)(r.li,{children:"Breaking down complex tasks into smaller steps"}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:"step-by-step-analysis",children:"Step-by-Step Analysis"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./5cd168f34e55.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Instead of a simple question, provide Claude with a methodology:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Analyze this image of marbles and determine the exact count using this methodology:
1. Begin by identifying each unique marble one at a time. Assign each a number as you identify it.
2. Verify your result by counting with a different method. Start from the bottom-left corner and work row by row, from left to right.

What is the exact, verified number of marbles in this image?
`})}),`
`,(0,n.jsx)(r.p,{children:"This structured approach helps Claude get the correct count of 12 marbles."}),`
`,(0,n.jsx)(r.h3,{id:"one-shot-examples",children:"One-Shot Examples"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9b02f763819d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"You can also use one-shot prompting by including multiple image-text pairs in a single message:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`[Image of 11 marbles]
The image above has 11 marbles in it.

[Image of 12 marbles]  
How many marbles are in this image?
`})}),`
`,(0,n.jsx)(r.p,{children:"Providing an example significantly improves Claude's accuracy on the target image."}),`
`,(0,n.jsx)(r.h2,{id:"real-world-example-fire-risk-assessment",children:"Real-World Example: Fire Risk Assessment"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d71061d0c67d.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's a practical application: automating fire risk assessments for home insurance. Insurance companies often require homeowners to trim trees around their property to reduce wildfire risk. Instead of sending inspectors to each property, you can use satellite imagery with Claude."}),`
`,(0,n.jsx)(r.p,{children:"The system analyzes satellite images to identify:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Dense, close-packed trees near the residence"}),`
`,(0,n.jsx)(r.li,{children:"Difficult access routes for emergency services"}),`
`,(0,n.jsx)(r.li,{children:"Branches overhanging the residence"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:'Rather than a simple prompt like "provide a fire risk score," you create a detailed analysis framework:'}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Analyze the attached satellite image of a property with these specific steps:

1. Residence identification: Locate the primary residence on the property by looking for:
   - The largest roofed structure
   - Typical residential features (driveway connection, regular geometry)
   - Distinction from other structures (garages, sheds, pools)

2. Tree overhang analysis: Examine all trees near the primary residence:
   - Identify any trees whose canopy extends directly over any portion of the roof
   - Estimate the percentage of roof covered by overhanging branches (0-25%, 25-50%, 50-75%, 75%+)
   - Note particularly dense areas of overhang

3. Fire risk assessment: For any overhanging trees, evaluate:
   - Potential wildfire vulnerability (ember catch points, continuous fuel paths to structure)
   - Proximity to chimneys, vents, or other roof openings if visible
   - Areas where branches create a "bridge" between wildland vegetation and the structure

4. Defensible space identification: Assess the property's overall vegetative structure:
   - Identify if trees connect to form a continuous canopy over or near the home
   - Note any obvious fuel ladders (vegetation that can carry fire from ground to tree to roof)

5. Fire risk rating: Based on your analysis, assign a Fire Risk Rating from 1-4:
   - Rating 1 (Low Risk): No tree branches overhanging the roof, good defensible space around
   - Rating 2 (Moderate Risk): Minimal overhang (<25% of roof), some separation between tree canopies
   - Rating 3 (High Risk): Significant overhang (25-50% of roof), connected tree canopies, multiple points of vulnerability
   - Rating 4 (Severe Risk): Extensive overhang (>50% of roof), dense vegetation against structure

For each item above (1-5), write one sentence summarizing your findings, with your final response being the numerical rating.
`})}),`
`,(0,n.jsx)(r.p,{children:'This comprehensive prompt guides Claude through a systematic analysis, resulting in accurate and actionable fire risk assessments. When tested with a heavily tree-covered property, Claude correctly identified it as a "3 (High Risk)" due to significant tree overhang and connected canopies around the structure.'}),`
`,(0,n.jsx)(r.p,{children:"The key takeaway is that Claude's vision capabilities are powerful, but they require the same careful prompt engineering you'd use for any complex task. Invest time in creating detailed, structured prompts rather than relying on simple questions."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};