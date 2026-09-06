import{$f as e,Zf as t}from"../../../../content-es-meta-er8sy6l1.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Making your first request to the Anthropic API is straightforward once you understand the basic setup and structure. This guide walks through the essential steps to get Claude responding to your prompts using Python."}),`
`,(0,n.jsx)(r.h2,{id:"setting-up-your-environment",children:"Setting Up Your Environment"}),`
`,(0,n.jsx)(r.p,{children:"Before making any API calls, you need to install the required packages and configure your API key securely."}),`
`,(0,n.jsx)(r.p,{children:"First, install the necessary dependencies in your Jupyter notebook:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`%pip install anthropic python-dotenv
`})}),`
`,(0,n.jsxs)(r.p,{children:["Next, create a ",(0,n.jsx)(r.code,{children:".env"})," file in the same directory as your notebook to store your API key securely:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`ANTHROPIC_API_KEY="your-api-key-here"
`})}),`
`,(0,n.jsxs)(r.p,{children:["This approach keeps your API key out of your code and prevents accidentally committing it to version control. Always add ",(0,n.jsx)(r.code,{children:".env"})," to your ",(0,n.jsx)(r.code,{children:".gitignore"})," file."]}),`
`,(0,n.jsx)(r.p,{children:"Load the environment variables and create your API client:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`from dotenv import load_dotenv
load_dotenv()

from anthropic import Anthropic

client = Anthropic()
model = "claude-sonnet-4-5"
`})}),`
`,(0,n.jsx)(r.h2,{id:"the-create-function",children:"The Create Function"}),`
`,(0,n.jsxs)(r.p,{children:["The core of making API requests is the ",(0,n.jsx)(r.code,{children:"client.messages.create()"})," function. This function requires three key parameters:"]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./55f119c1083e.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"model"})," - The name of the Claude model you want to use"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"max_tokens"})," - A safety limit on response length (not a target)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"messages"})," - The conversation history you're sending to Claude"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"max_tokens"})," parameter acts as a safety mechanism. If you set it to 1000, Claude will stop generating after 1000 tokens even if it has more to say. Claude doesn't try to reach this limit - it just writes what it thinks is appropriate and stops if it hits the maximum."]}),`
`,(0,n.jsx)(r.h2,{id:"understanding-messages",children:"Understanding Messages"}),`
`,(0,n.jsx)(r.p,{children:"Messages represent the conversation between you and Claude, similar to a chat application. There are two types of messages:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2c405eb7735d.png",alt:""})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"User messages"})," - Content you want to send to Claude (written by humans)"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Assistant messages"})," - Responses that Claude has generated"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Each message is a dictionary with a ",(0,n.jsx)(r.code,{children:"role"}),' (either "user" or "assistant") and ',(0,n.jsx)(r.code,{children:"content"})," (the actual text)."]}),`
`,(0,n.jsx)(r.h2,{id:"making-your-first-request",children:"Making Your First Request"}),`
`,(0,n.jsx)(r.p,{children:"Here's a complete example of making a request to Claude:"}),`
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
`,(0,n.jsx)(r.p,{children:"When you run this code, Claude will process your request and return a response object containing the generated text along with metadata about the request."}),`
`,(0,n.jsx)(r.h2,{id:"extracting-the-response",children:"Extracting the Response"}),`
`,(0,n.jsx)(r.p,{children:"The response object contains a lot of information, but you usually just want the generated text. Access it using:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`message.content[0].text
`})}),`
`,(0,n.jsx)(r.p,{children:'This gives you clean, readable output like: "Quantum computing is a type of computation that leverages quantum mechanics principles like superposition and entanglement to process information using quantum bits (qubits), potentially solving certain complex problems exponentially faster than classical computers."'}),`
`,(0,n.jsx)(r.p,{children:"With these basics in place, you can start experimenting with different prompts and building more complex interactions with Claude."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};