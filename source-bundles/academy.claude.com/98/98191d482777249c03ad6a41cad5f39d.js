import{Qm as e,Xm as t}from"../../../../../content-de-meta-j2jjwhjm.js";var n=t(),r=`# Code execution: Claude runs the code it writes

Asking a model to eyeball 12 spreadsheets is a recipe for confident nonsense. Letting it write pandas and run it is arithmetic. Let's look at how code execution works. Code execution is a server-side tool. Sandboxed Python and Bash on Anthropic's infrastructure. The sandbox has no outbound network and comes with the usual analysis libraries pre-installed.

Adding it is one entry into your tools list. I'm grabbing the current type string from the tool reference, and you should too, because there are three current versions. Python state only carries between turns on code_execution_20260120 or later, and this demo relies on it.

Data goes in through the Files API. You upload it once and then reference the file with a container_upload content block in your message. The Files API is generally available, so there's no beta header to be sending here. Now, two lifecycle facts worth knowing here. The response includes a container.id that you can reuse across turns to keep that state alive. And containers go idle after a few minutes, but pass the container.id back and we restore it. Files included. Check the documentation for the current windows.

Now we have 12 CSVs here that are uploaded, one per pump station. And my prompt here is: find any month in which any station's peak flow exceeded its design capacity. Report the stations, month, and by how much.

So let's run it. So we are uploading to the Files API here, all these. And you can see that Claude is writing pandas code right here. It runs it in the sandbox. It sees the intermediate output, refines it, runs it again. And then we can see right here, it's going to emit a chart. We have matplotlib right there.

And look at this. We have a little chart made by matplotlib. Anything Claude writes to its output folder comes back as a file ID in the tool result. And my script downloads it with the Files API.

Now, the important part is that none of these intermediate dataframes even entered my prompt as JSON blobs. The model saw its own output inside of the sandbox, my context carries the question the code and what it printed, and not the raw CSV rows.

And so the answer comes back as station 7 twice, both in spring runoff months with the chart attached. As of this video, Haiku accepts the newer tool types, but that Python state doesn't carry between turns. So prefer Sonnet or Opus for this pattern and check the documentation for the current model list as things change really fast.

Code execution gives Claude a sandbox with Python, Bash, and your uploaded files. State lives in the container, so reuse the container ID across turns. Intermediate work stays in the sandbox instead of flooding your context, and pull the current type strings from the tool reference, not from this video.

Stop asking the model to be a calculator. Hand it one instead.
`;function i(t){let i={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:a,ResourceWidget:s}=i;return a||o("LessonVideo",!0),s||o("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{youtubeId:"PQ8jjGKfP5o",title:"Code execution: Claude runs the code it writes",transcript:r,children:(0,n.jsx)(i.p,{children:`Code execution lets Claude write Python, run it on Anthropic's side, and
answer from what it prints.`})}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["The demo in this video was recorded in September 2026. It ran on Claude Sonnet 5 (",(0,n.jsx)(i.code,{children:"claude-sonnet-5"}),"). Results may differ on newer models."]})}),`
`,(0,n.jsx)(i.p,{children:"Some questions need math across many files. That's a job for code."}),`
`,(0,n.jsx)(i.p,{children:"Take Meridian, a fictional engineering consultancy. It has 12 CSV files, one for each pump station, and each file holds a year of flow readings. It wants to know whether any station ever went over its design capacity, and if so, when."}),`
`,(0,n.jsxs)(i.p,{children:["Code execution is how Claude does that job. ",(0,n.jsx)(i.strong,{children:"Claude gets a container where it can run the Python it writes and answer from what the code prints."})]}),`
`,(0,n.jsx)(i.h2,{id:"add-the-tool-to-your-request",children:"Add the tool to your request"}),`
`,(0,n.jsxs)(i.p,{children:["Code execution is a server tool, a tool that runs on Anthropic's infrastructure. You write no handler for it, and your code sends back no ",(0,n.jsx)(i.code,{children:"tool_result"}),"."]}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsxs)(i.strong,{children:["Adding code execution takes one entry in your ",(0,n.jsx)(i.code,{children:"tools"})," list."]})," The date at the end of the entry's ",(0,n.jsx)(i.code,{children:"type"})," is the tool's version, and Meridian uses ",(0,n.jsx)(i.code,{children:"code_execution_20260120"}),". The current versions are ",(0,n.jsx)(i.a,{href:"https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-reference#anthropic-provided-tools",children:"listed in the Tool reference"}),", so copy the ",(0,n.jsx)(i.code,{children:"type"})," value from there."]}),`
`,(0,n.jsxs)(i.p,{children:["Meridian keeps the list in a constant named ",(0,n.jsx)(i.code,{children:"TOOLS"}),", and its request passes it as ",(0,n.jsx)(i.code,{children:"tools=TOOLS"}),":"]}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:`TOOLS = [{"type": "code_execution_20260120", "name": "code_execution"}]
`})}),`
`,(0,n.jsxs)(i.p,{children:["As of October 2026, ",(0,n.jsx)(i.a,{href:"https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool#availability-feature-support",children:"code execution"})," runs on the Claude API, Claude Platform on AWS, the Claude models on Google Cloud that Anthropic manages, and Microsoft Foundry deployments hosted on Anthropic."]}),`
`,(0,n.jsx)(i.h2,{id:"put-your-files-in-the-container",children:"Put your files in the container"}),`
`,(0,n.jsx)(i.p,{children:"Claude's code runs in a container on Anthropic's side. Your files are still on your machine, so the container doesn't have them yet. Meridian's program gets them into the container in two steps:"}),`
`,(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsxs)(i.li,{children:["Upload each file with the ",(0,n.jsx)(i.a,{href:"https://platform.claude.com/docs/en/build-with-claude/files",children:"Files API"}),", which gives you back a file ID."]}),`
`,(0,n.jsxs)(i.li,{children:["Put that file ID in your message, in a ",(0,n.jsx)(i.code,{children:"container_upload"})," block."]}),`
`]}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsxs)(i.strong,{children:["Meridian's program adds one ",(0,n.jsx)(i.code,{children:"container_upload"})," block for each file, in the same message as its question."]})," The files are then loaded onto the container, where Claude's code can open them."]}),`
`,(0,n.jsx)(i.h2,{id:"read-claudes-answer",children:"Read Claude's answer"}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Your code sends one request and usually gets back the finished answer."})}),`
`,(0,n.jsxs)(i.p,{children:["The API can pause a long-running turn and return a ",(0,n.jsx)(i.code,{children:"stop_reason"})," of ",(0,n.jsx)(i.code,{children:"pause_turn"}),". When it does, send the response's content back as an assistant message, with the same ",(0,n.jsx)(i.code,{children:"tools"}),", and Claude continues."]}),`
`,(0,n.jsx)(i.p,{children:"Claude's answer for Meridian is that Station 7 went over its design capacity of 600 L/s twice, in April and May 2025. In the response, the answer comes after the commands Claude ran."}),`
`,(0,n.jsx)(i.h2,{id:"put-the-program-together",children:"Put the program together"}),`
`,(0,n.jsxs)(i.p,{children:["Meridian's program below adds the tool, puts the files in the container, and reads the answer. In the program, ",(0,n.jsx)(i.code,{children:"paths"})," holds the 12 CSV files as ",(0,n.jsx)(i.code,{children:"pathlib.Path"})," objects, and ",(0,n.jsx)(i.code,{children:"QUESTION"})," holds Meridian's question."]}),`
`,(0,n.jsx)(s,{name:"CodeParts",title:"Code execution: find the line that does each job"}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:["Code execution is a server tool. You add one entry to ",(0,n.jsx)(i.code,{children:"tools"}),", and Claude's code runs in a container on Anthropic's side."]}),`
`,(0,n.jsxs)(i.li,{children:["You upload each file with the Files API, then put its file ID in a ",(0,n.jsx)(i.code,{children:"container_upload"})," block."]}),`
`]})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};