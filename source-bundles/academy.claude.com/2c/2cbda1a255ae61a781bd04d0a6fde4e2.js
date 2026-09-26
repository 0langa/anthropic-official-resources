import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"pm8iwdSIs3M",title:"Built-in tools",children:(0,n.jsx)(r.p,{children:`You can build your own custom tools, but some capabilities are common enough
that Anthropic ships them pre-built. You don't write the code. You don't
host the sandbox. You just declare the tool, and Anthropic runs it.`})}),`
`,(0,n.jsx)(r.h2,{id:"server-tools-declared-by-you-run-by-anthropic",children:"Server tools: declared by you, run by Anthropic"}),`
`,(0,n.jsxs)(r.p,{children:["Anthropic provides ",(0,n.jsx)(r.strong,{children:"server tools"})," that run on their infrastructure. You don't execute these — Anthropic does. That means you don't need an agent loop for these calls. Claude calls the tools on its own, and the result comes back inside the same response."]}),`
`,(0,n.jsx)(r.p,{children:"The main ones are:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Web search"})," — searches the internet and returns results with citations"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Code execution"})," — writes and runs Python in a sandbox"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Web fetch"})," — retrieves full content from URLs"]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"two-server-tools-in-one-file",children:"Two server tools in one file"}),`
`,(0,n.jsxs)(r.p,{children:["Let's check out some of the big ones in one file: two ",(0,n.jsx)(r.code,{children:"messages.create"})," calls, one with web search and one with code execution."]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import anthropic

client = anthropic.Anthropic()

# Call 1: web search — Anthropic runs the search server-side
search_response = client.messages.create(
    model="claude-opus-5",
    max_tokens=1024,
    tools=[{"type": "web_search_20260209", "name": "web_search"}],
    messages=[
        {"role": "user", "content": "What is Anthropic's latest model release? Answer in one sentence."}
    ],
)

for block in search_response.content:
    if block.type == "server_tool_use":
        print(f"Tool call: {block.name} — {block.input}")
    elif block.type == "text":
        print(block.text)

# Call 2: code execution — Claude writes and runs Python in a sandbox
code_response = client.messages.create(
    model="claude-opus-5",
    max_tokens=1024,
    tools=[{"type": "code_execution_20260120", "name": "code_execution"}],
    messages=[
        {"role": "user", "content": "Calculate the mean and standard deviation of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"}
    ],
)

for block in code_response.content:
    if block.type == "server_tool_use":
        print(f"Tool call: {block.name} — {block.input}")
    elif block.type == "bash_code_execution_tool_result":
        print(f"stdout: {block.content.stdout}")
    elif block.type == "text":
        print(block.text)
`})}),`
`,(0,n.jsx)(r.p,{children:"Two things to notice:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"There's no agent loop here."})," We don't switch on ",(0,n.jsx)(r.code,{children:"stop_reason"}),". We don't push tool results back. Anthropic runs the tool server-side, and the response already contains the result."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"The response has new block types."})," A ",(0,n.jsx)(r.code,{children:"server_tool_use"})," block for the tool call, a code execution tool result block for the output, plus the regular ",(0,n.jsx)(r.code,{children:"text"})," blocks."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"running-it",children:"Running it"}),`
`,(0,n.jsx)(r.p,{children:"For web search, you'll see Claude's tool call printed, then a one-sentence answer about the latest model release with the search citations folded in."}),`
`,(0,n.jsx)(r.p,{children:"For code execution, you'll see the actual Python Claude wrote, the stdout from the sandbox running it, and a final text answer."}),`
`,(0,n.jsx)(r.p,{children:"We didn't have to spin up a search crawler. We didn't run a Python sandbox. We declared two tools and got both for free."}),`
`,(0,n.jsx)(r.h2,{id:"the-other-category-client-tools",children:"The other category: client tools"}),`
`,(0,n.jsxs)(r.p,{children:["Worth knowing the other category exists. ",(0,n.jsx)(r.strong,{children:"Client tools"})," run where your code runs. Anthropic publishes their schemas and trains Claude on them, so you don't have to define the schema yourself. Two examples:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Memory"})," — Claude reads and writes memory across sessions"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Bash"})," — a persistent bash shell so Claude can execute commands"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./dd88a5672413.png",alt:"The Anthropic docs table of built-in tools, with memory and bash listed as client tools alongside server tools like web fetch and code execution"})}),`
`,(0,n.jsx)(r.p,{children:"They have the same shape as a custom tool, but the schema is built into Claude. Your code still runs them: for memory, four of the SDKs ship a helper that handles Claude's memory calls against storage you provide, and for bash, your application runs the shell itself."}),`
`,(0,n.jsx)(r.h2,{id:"why-this-matters-in-production",children:"Why this matters in production"}),`
`,(0,n.jsx)(r.p,{children:"In a production app, this is the shortest path to features that would otherwise take weeks. Web search can power a fact-check endpoint that verifies every numeric and regulatory claim in a draft against the live web."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0266dad6aed6.png",alt:"A proposal review app using web search to fact-check the regulatory and numeric claims in a draft proposal"})}),`
`,(0,n.jsx)(r.p,{children:"One reminder, though: just because something is validated on the internet doesn't mean it's true. Always double-check Claude's work."}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Server tools"})," — web search, code execution, web fetch — are declared in your ",(0,n.jsx)(r.code,{children:"tools"})," array. Anthropic runs them."]}),`
`,(0,n.jsxs)(r.li,{children:["You get the result in the same response, with ",(0,n.jsx)(r.strong,{children:"no agent loop required"}),". Look for ",(0,n.jsx)(r.code,{children:"server_tool_use"})," and tool result blocks alongside the regular text blocks."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Client tools"})," like memory and bash run where your code runs. The schema is built into Claude, four of the SDKs ship a helper for memory, and for bash, your code runs the shell."]}),`
`,(0,n.jsxs)(r.li,{children:['The "hosted by Anthropic" idea scales all the way up: ',(0,n.jsx)(r.strong,{children:"managed agents"})," apply it to the entire agent, not just one tool."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};