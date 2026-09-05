import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Now it's time to get hands-on with the Anthropic Python SDK and make your first request to Claude through Vertex AI. We'll walk through three essential steps: installing the SDK, creating a client, and making your first API call."}),`
`,(0,n.jsx)(r.h2,{id:"installing-the-anthropic-python-sdk",children:"Installing the Anthropic Python SDK"}),`
`,(0,n.jsx)(r.p,{children:"First, you'll need to install the Anthropic SDK with Vertex AI support. In your Jupyter notebook, run this magic command:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`%pip install "anthropic[vertex]"
`})}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"[vertex]"})," part ensures you get the specific components needed to connect to Google Cloud's Vertex AI platform."]}),`
`,(0,n.jsx)(r.h2,{id:"creating-an-api-client",children:"Creating an API Client"}),`
`,(0,n.jsx)(r.p,{children:"Next, import and create a client instance specifically designed for Vertex AI:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from anthropic import AnthropicVertex

client = AnthropicVertex(region="global", project_id="your-project-id")
model = "claude-sonnet-4-5@20250929"
`})}),`
`,(0,n.jsxs)(r.p,{children:["You'll need to replace ",(0,n.jsx)(r.code,{children:'"your-project-id"'})," with your actual Google Cloud project ID, which you can find in the Google Cloud Console's project selector. Setting the model as a variable saves you from typing it repeatedly throughout your notebooks."]}),`
`,(0,n.jsx)(r.h2,{id:"understanding-the-create-function",children:"Understanding the Create Function"}),`
`,(0,n.jsxs)(r.p,{children:["The core of making requests to Claude is the ",(0,n.jsx)(r.code,{children:"create"})," function, which requires three key parameters:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2bb00b866f80.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"model"})," - The name of the Claude model you want to use"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"max_tokens"})," - A safety limit on response length (Claude won't try to hit this target, it just won't exceed it)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"messages"})," - The conversation history you're sending to Claude"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Think of ",(0,n.jsx)(r.code,{children:"max_tokens"})," as a budget rather than a goal. If you set it to 1000, Claude will write whatever response it thinks is appropriate, but stop if it would exceed 1000 tokens."]}),`
`,(0,n.jsx)(r.h2,{id:"understanding-messages",children:"Understanding Messages"}),`
`,(0,n.jsx)(r.p,{children:"Messages represent the back-and-forth conversation between you and Claude, just like in a chat application:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./7eb6f8c396ec.png",alt:""})}),`
`,(0,n.jsx)(r.p,{children:"There are two types of messages:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"User messages"})," - Content written by humans that you want to feed into Claude"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Assistant messages"})," - Content that Claude has generated and sent back to you"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"making-your-first-request",children:"Making Your First Request"}),`
`,(0,n.jsx)(r.p,{children:"Here's how to structure a basic request:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`message = client.messages.create(
    model=model,
    max_tokens=1000,
    messages=[
        {
            "role": "user",
            "content": "What is quantum computing? Answer in one sentence"
        }
    ]
)
`})}),`
`,(0,n.jsxs)(r.p,{children:["Each message is a dictionary with a ",(0,n.jsx)(r.code,{children:"role"}),' (either "user" or "assistant") and ',(0,n.jsx)(r.code,{children:"content"})," (the actual text)."]}),`
`,(0,n.jsx)(r.h2,{id:"extracting-the-response",children:"Extracting the Response"}),`
`,(0,n.jsx)(r.p,{children:"When you run the request, you'll get back a complex response object with lots of metadata. To get just the text that Claude generated, use:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`message.content[0].text
`})}),`
`,(0,n.jsx)(r.p,{children:"This gives you clean, readable output instead of the full response object with all its technical details. You'll use this pattern frequently when working with Claude's responses."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};