import{Qp as e,em as t}from"../../../../content-de-meta-ll4flgq0.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When you need Claude to generate structured data like JSON, Python code, or bulleted lists, you'll often run into a common problem: Claude wants to be helpful and add explanatory text, headers, or markdown formatting around your content. This extra commentary breaks the user experience when you just need the raw data."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./fd7eada8e946.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"Consider building a web app that generates AWS EventBridge rules. Users enter a description, click generate, and expect to see clean JSON they can immediately copy and use. If Claude returns the JSON wrapped in markdown code blocks with explanatory text, users can't simply copy the entire response - they have to manually select just the JSON portion."}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-default-responses",children:"The Problem with Default Responses"}),`
`,(0,n.jsx)(r.p,{children:"By default, Claude tends to format structured output like this:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-markdown",children:`# EventBridge Rule
\`\`\`json
\\{
  "source": ["aws.ec2"],
  "detail-type": ["EC2 Instance State-change Notification"],
  "detail": \\{"state": ["running"]\\}
\\}
\`\`\`
This rule captures EC2 instance state changes when instances start running or stop.
`})}),`
`,(0,n.jsx)(r.p,{children:"While this is great for documentation, it's problematic when you need just the JSON for programmatic use."}),`
`,(0,n.jsx)(r.h2,{id:"the-solution-assistant-message-prefilling-stop-sequences",children:"The Solution: Assistant Message Prefilling + Stop Sequences"}),`
`,(0,n.jsx)(r.p,{children:"You can combine assistant message prefilling with stop sequences to get exactly the content you want. Here's how it works:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'messages = []\nadd_user_message(messages, "Generate a very short event bridge rule as json")\nadd_assistant_message(messages, "```json")\n\ntext = chat(messages, stop_sequences=["```"])\n'})}),`
`,(0,n.jsx)(r.p,{children:"This technique works by:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Prefilling the assistant message with the opening markdown delimiter"}),`
`,(0,n.jsx)(r.li,{children:"Setting a stop sequence to halt generation when Claude tries to close the code block"}),`
`,(0,n.jsx)(r.li,{children:"Capturing only the content between these delimiters"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f4aba84385c9.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"how-it-works-behind-the-scenes",children:"How It Works Behind the Scenes"}),`
`,(0,n.jsx)(r.p,{children:"When Claude receives your request, it sees the prefilled assistant message and assumes it already started writing the JSON code block. Instead of adding its own header and opening delimiter, Claude jumps straight to generating the actual JSON content."}),`
`,(0,n.jsxs)(r.p,{children:["When Claude finishes the JSON and naturally wants to close the markdown code block with ",(0,n.jsx)(r.code,{children:"```"}),", the stop sequence immediately halts generation and returns the response. You get just the JSON content with no extra formatting."]}),`
`,(0,n.jsx)(r.h2,{id:"processing-the-results",children:"Processing the Results"}),`
`,(0,n.jsx)(r.p,{children:"The returned text might contain some newline characters, but you can easily clean this up:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import json

# Parse as JSON to validate and format
parsed_data = json.loads(text.strip())

# Or just strip whitespace for other data types
clean_text = text.strip()
`})}),`
`,(0,n.jsx)(r.h2,{id:"beyond-json",children:"Beyond JSON"}),`
`,(0,n.jsx)(r.p,{children:"This technique isn't limited to JSON generation. You can use it for any structured data where you want just the content without Claude's natural tendency to add explanatory text:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Python code snippets"}),`
`,(0,n.jsx)(r.li,{children:"Bulleted lists"}),`
`,(0,n.jsx)(r.li,{children:"CSV data"}),`
`,(0,n.jsx)(r.li,{children:"Configuration files"}),`
`,(0,n.jsx)(r.li,{children:"Any format where clean, copyable output matters"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key is identifying what delimiters Claude would naturally use around your content type, then prefilling the opening delimiter and stopping at the closing one. This gives you precise control over the output format while leveraging Claude's natural formatting instincts."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}export{i as default};