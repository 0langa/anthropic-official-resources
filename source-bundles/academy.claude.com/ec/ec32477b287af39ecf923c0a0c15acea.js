import{Nm as e,jm as t}from"../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"When you need Claude to generate structured data like JSON, Python code, or bulleted lists, you'll often run into a common problem: Claude wants to be helpful and add explanatory text around your content. While this is usually great, sometimes you need just the raw data with nothing else."}),`
`,(0,n.jsx)(r.p,{children:"Consider building a web app that generates AWS EventBridge rules. Users enter a description, click generate, and expect to see clean JSON they can immediately copy and use. If Claude returns the JSON wrapped in markdown code blocks with explanatory text, users can't simply copy the entire response - they have to manually select just the JSON portion."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./f9a2ebeaa891.png",alt:""})}),`
`,(0,n.jsx)(r.h2,{id:"the-problem-with-default-responses",children:"The Problem with Default Responses"}),`
`,(0,n.jsx)(r.p,{children:"By default, when you ask Claude to generate JSON, you might get something like this:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-markdown",children:`\`\`\`json
\\{
  "source": ["aws.ec2"],
  "detail-type": ["EC2 Instance State-change Notification"],
  "detail": \\{
    "state": ["running"]
  \\}
\\}
\`\`\`

This rule captures EC2 instance state changes when instances start running.
`})}),`
`,(0,n.jsx)(r.p,{children:"The JSON is correct, but it's wrapped in markdown formatting and includes explanatory text. For a web app where users need to copy the raw JSON, this creates friction in the user experience."}),`
`,(0,n.jsx)(r.h2,{id:"the-solution-assistant-message-prefilling-stop-sequences",children:"The Solution: Assistant Message Prefilling + Stop Sequences"}),`
`,(0,n.jsx)(r.p,{children:"You can combine assistant message prefilling with stop sequences to get exactly the content you want. Here's how it works:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'messages = []\n\nadd_user_message(messages, "Generate a very short event bridge rule as json")\nadd_assistant_message(messages, "```json")\n\ntext = chat(messages, stop_sequences=["```"])\n'})}),`
`,(0,n.jsx)(r.p,{children:"This technique works by:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"The user message tells Claude what to generate"}),`
`,(0,n.jsx)(r.li,{children:"The prefilled assistant message makes Claude think it already started a markdown code block"}),`
`,(0,n.jsx)(r.li,{children:"Claude continues by writing just the JSON content"}),`
`,(0,n.jsxs)(r.li,{children:["When Claude tries to close the code block with ",(0,n.jsx)(r.code,{children:"```"}),", the stop sequence immediately ends generation"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./d46178d7619b.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"The result is clean JSON with no extra formatting:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "source": ["aws.ec2"],
  "detail-type": ["EC2 Instance State-change Notification"],
  "detail": {
    "state": ["running"]
  }
}
`})}),`
`,(0,n.jsx)(r.h2,{id:"processing-the-response",children:"Processing the Response"}),`
`,(0,n.jsx)(r.p,{children:"You might notice some extra newline characters in the response. These are easy to handle:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import json

# Clean up and parse the JSON
clean_json = json.loads(text.strip())
`})}),`
`,(0,n.jsx)(r.h2,{id:"beyond-json",children:"Beyond JSON"}),`
`,(0,n.jsx)(r.p,{children:"This technique isn't limited to JSON generation. Use it anytime you need structured data without commentary:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Python code snippets"}),`
`,(0,n.jsx)(r.li,{children:"Bulleted lists"}),`
`,(0,n.jsx)(r.li,{children:"CSV data"}),`
`,(0,n.jsx)(r.li,{children:"Any formatted content where you want just the content, not explanations"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The key is identifying what Claude naturally wants to wrap your content in, then using that as your prefill and stop sequence. For code, it's usually markdown code blocks. For lists, it might be different formatting markers."}),`
`,(0,n.jsx)(r.p,{children:"This approach gives you precise control over Claude's output format, making it much easier to integrate AI-generated content into applications where clean, structured data is essential."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};