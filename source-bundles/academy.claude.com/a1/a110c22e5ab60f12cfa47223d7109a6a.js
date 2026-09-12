import{em as e,nm as t}from"../../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When you need Claude to generate structured data like JSON, Python code, or bulleted lists, you'll often run into a common problem: Claude wants to be helpful and add explanatory text around your content. While this is usually great, sometimes you need just the raw data with nothing else."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f9a2ebeaa891.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:`Consider building a web app that generates AWS EventBridge rules. Users enter a description, click generate, and expect to see clean JSON they can immediately copy and use. If Claude returns the JSON wrapped in markdown code blocks with explanatory headers and footers, users can't simply hit "copy all" - they'd have to manually select just the JSON portion.`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./c1412adabb48.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"This pattern shows up whenever you're generating structured data. Claude naturally wants to explain its work, but in many cases, you want only the content you're asking for and nothing else."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fe78ee5b2f1d.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"combining-stop-sequences-with-assistant-message-prefilling",children:"Combining Stop Sequences with Assistant Message Prefilling"}),`
`,(0,n.jsx)(r.p,{children:"The solution combines two techniques we've covered: stop sequences and assistant message prefilling. Here's how it works in practice:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'messages = []\n\nadd_user_message(messages, "Generate a very short event bridge rule as json")\nadd_assistant_message(messages, "```json")\n\ntext = chat(messages, stop_sequences=["```"])\n'})}),`
`,(0,n.jsx)(r.p,{children:"When you run this code, you get back just the JSON content without any markdown formatting or additional commentary."}),`
`,(0,n.jsx)(r.h2,{id:"how-it-works-behind-the-scenes",children:"How It Works Behind the Scenes"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d46178d7619b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Here's what happens when Claude processes your request:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:'Claude reads your user message and thinks "I need to write a full rule and probably describe it"'}),`
`,(0,n.jsx)(r.li,{children:"It sees the prefilled assistant message and assumes it already started writing the JSON markdown block"}),`
`,(0,n.jsx)(r.li,{children:`Claude thinks "Oh, I've already started the JSON part, so I just need to write the actual JSON content"`}),`
`,(0,n.jsx)(r.li,{children:"It generates the JSON content"}),`
`,(0,n.jsxs)(r.li,{children:["When Claude tries to close the markdown block with ",(0,n.jsx)(r.code,{children:"```"}),", it hits the stop sequence and generation stops immediately"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The result is that you get everything between the prefilled start and the stop sequence - exactly the content you wanted."}),`
`,(0,n.jsx)(r.h2,{id:"cleaning-up-the-output",children:"Cleaning Up the Output"}),`
`,(0,n.jsx)(r.p,{children:"The returned text might have some extra newlines, but you can easily clean this up:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import json

# Parse as JSON to validate and format
parsed_json = json.loads(text.strip())
`})}),`
`,(0,n.jsx)(r.p,{children:"This technique works for any structured data format, not just JSON. Whether you're generating Python code, bulleted lists, or any other specific content format, you can use assistant message prefilling to start the response and stop sequences to end it exactly where you want."}),`
`,(0,n.jsx)(r.p,{children:"This approach gives you precise control over Claude's output format, ensuring your applications get clean, usable data without extra formatting or commentary that might interfere with downstream processing."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};