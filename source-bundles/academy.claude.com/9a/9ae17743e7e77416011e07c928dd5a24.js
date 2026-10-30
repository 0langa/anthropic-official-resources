import{Qm as e,Xm as t}from"../../../../../content-de-meta-j2jjwhjm.js";var n=t(),r=`# Parallel tool calling: Cut the latency

Most agents accidentally switch off their biggest latency win. When tools don't depend on each other, how can we just run them all at the same time? Say our agent checks whether a job site is ready: project status, weather, and permit state. Three lookups that don't depend on one another.

Claude 4 and later can emit multiple tool_use blocks in a single turn by default. Three independent lookups become one model turn with three tool calls, and your handler runs them concurrently. But a couple things that people get wrong here. First, the off switch. disable_parallel_tool_use lives inside tool_choice, not at the top level. So passing it at the top level just errors out. Second, and this one quietly ruins agents, return all the tool results in a single user message. If you split them across messages, well, Claude learns from the conversation shape that tools come back one at a time, and it starts serializing calls that could have run together.

A system prompt nudge helps too. Something along the lines of: "For maximum efficiency, whenever you need multiple independent operations, invoke all relevant tools simultaneously." Okay, so why don't we race it? 3.4 seconds. 7.3 seconds. 11.8. We have the same site-readiness questions.

All right, there we go. So that's sequential where Claude calls project status. Wait, calls weather. Wait, calls permit. Wait. And you can see right here, we got like 20 seconds there.

It has to do one round trip per call. Then we have parallel. Let's see how fast that takes. Okay. So turn one is doing all three right here. And there you go. 10 seconds. So we halved our time right here.

So you can see here that we have three tool_use blocks that are happening right here. They're all happening at the exact same time. And all three results go back to the one message.

If you don't need any custom batching logic or anything like that, well, you can use the Tool Runner over here instead, which will handle this entire tool use loop for you.

Dependent side effects should run in sequence. And that's your call to make in your loop, not the model's. If step two only makes sense after step one succeeds, well, run them in order. And if you skip a call because an earlier one failed, well, still return a tool_result for it with is_error: true. Because Claude needs to know that the call just didn't happen.

Claude can call multiple tools per turn, and your job is to not accidentally train it out of the habit. Keep disable_parallel_tool_use inside tool_choice. Return all results in one message. Run dependent side effects sequentially by choice. And reach for the Tool Runner when you don't need a custom loop. One parameter, one message-shape rule, and a query that used to wait on three calls in a row now only waits on the slowest one.
`;function i(t){let i={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{ImageFigure:a,LessonVideo:s,ResourceWidget:c}=i;return a||o("ImageFigure",!0),s||o("LessonVideo",!0),c||o("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{youtubeId:"ZzI3hwXsnPA",title:"Parallel tool calling: Cut the latency",transcript:r,children:(0,n.jsx)(i.p,{children:"Claude can ask for several tools in one response, and your code can run them together. The video checks a job site for Meridian, a fictional engineering consultancy. One tool call at a time takes 19.9 seconds, while parallel tool calls take 10.8."})}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["The demo in this video was recorded in September 2026. It ran on Claude Sonnet 5 (",(0,n.jsx)(i.code,{children:"claude-sonnet-5"}),"). Results may differ on newer models."]})}),`
`,(0,n.jsx)(i.p,{children:"Running tool calls one at a time makes your user wait for each one in turn."}),`
`,(0,n.jsxs)(i.p,{children:["When the tools that Claude wants don't depend on each other, it can ask for them all in one response. ",(0,n.jsx)(i.strong,{children:"Claude does this by default, so your loop has to handle every tool call and send a result back for each one."})]}),`
`,(0,n.jsx)(i.h2,{id:"three-tool-calls-in-one-response",children:"Three tool calls in one response"}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.strong,{children:["Parallel tool use means one response holds several ",(0,n.jsx)(i.code,{children:"tool_use"})," blocks."]})}),`
`,(0,n.jsx)(i.p,{children:"Meridian has a Python script that checks whether a job site is ready for fieldwork. The site check needs three lookups that don't depend on each other: the project's status, the weather at the site, and the state of the permit."}),`
`,(0,n.jsxs)(i.p,{children:["Here is Claude's response to Meridian's site check, with one ",(0,n.jsx)(i.code,{children:"tool_use"})," block for each tool it wants."]}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:`{
  "role": "assistant",
  "stop_reason": "tool_use",
  "content": [
    {"type": "tool_use", "id": "toolu_01", "name": "get_project_status",
     "input": {"job_number": "MEG-2026-0142"}},
    {"type": "tool_use", "id": "toolu_02", "name": "get_site_weather",
     "input": {"site": "Riverside"}},
    {"type": "tool_use", "id": "toolu_03", "name": "get_permit_state",
     "input": {"permit_id": "P-88213"}}
  ]
}
`})}),`
`,(0,n.jsxs)(i.p,{children:["The response's ",(0,n.jsx)(i.code,{children:"stop_reason"})," is ",(0,n.jsx)(i.code,{children:"tool_use"}),", and each tool call has its own ",(0,n.jsx)(i.code,{children:"id"}),"."]}),`
`,(0,n.jsx)(i.h2,{id:"run-every-tool-call",children:"Run every tool call"}),`
`,(0,n.jsxs)(i.p,{children:["A loop written for one tool call reads only the first ",(0,n.jsx)(i.code,{children:"tool_use"})," block. It sends back one result, two tool calls never get theirs, and the API rejects the request. ",(0,n.jsxs)(i.strong,{children:["So collect every ",(0,n.jsx)(i.code,{children:"tool_use"})," block in the response."]})]}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:`calls = [b for b in resp.content if b.type == "tool_use"]
`})}),`
`,(0,n.jsx)(i.p,{children:"Next, run those tool calls at the same time. Each lookup spends most of its time waiting on another system. Give each one its own thread, and the three waits overlap instead of adding up."}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:`with ThreadPoolExecutor() as pool:
    results = list(pool.map(run_tool, calls))
`})}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"run_tool"})," runs one tool call and returns its result, and the next two sections build it."]}),`
`,(0,n.jsx)(i.p,{children:"Running tool calls at the same time is usually safe when they only read data and don't depend on each other, like Meridian's lookups. When tools change data, or must go in a set order, it might be better to run them one after another."}),`
`,(0,n.jsx)(i.h2,{id:"send-every-result-back-in-one-message",children:"Send every result back in one message"}),`
`,(0,n.jsxs)(i.p,{children:["Once the three tool calls have run, Claude is waiting for their results. Each result goes back in a ",(0,n.jsx)(i.code,{children:"tool_result"})," block, and its ",(0,n.jsx)(i.code,{children:"tool_use_id"})," holds the ",(0,n.jsx)(i.code,{children:"id"})," of the tool call it answers."]}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:`result = {"type": "tool_result", "tool_use_id": call.id}
`})}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.strong,{children:["Every ",(0,n.jsx)(i.code,{children:"tool_use"})," block gets one ",(0,n.jsx)(i.code,{children:"tool_result"}),", and they all go in the next user message."]})}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:`messages.append({"role": "assistant", "content": resp.content})
messages.append({"role": "user", "content": results})
`})}),`
`,(0,n.jsx)(a,{src:"./l3-one-user-message.png",alt:"A band at the top shows Claude's one response with three tool calls: toolu_01 get_project_status, toolu_02 get_site_weather, and toolu_03 get_permit_state. Below, the left panel, marked with a check, shows one user message holding all three tool results. The right panel, marked with a cross, shows three user messages holding one result each.",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"One user message with all three results keeps Claude calling tools in parallel."})})}),`
`,(0,n.jsx)(i.p,{children:"If your loop sends each result in its own message instead, the conversation reads as if Claude had asked for one tool at a time. That is a common reason Claude makes fewer parallel tool calls."}),`
`,(0,n.jsx)(i.h2,{id:"return-an-error-result-for-a-bad-tool-call",children:"Return an error result for a bad tool call"}),`
`,(0,n.jsx)(i.p,{children:"Running three tool calls at once means one can fail while the other two succeed. If your code raises an exception and nothing catches it, your loop stops, and the two good results are lost with it."}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"So send the failure back as a result."})," It's an ordinary ",(0,n.jsx)(i.code,{children:"tool_result"})," with the error message as its ",(0,n.jsx)(i.code,{children:"content"}),", plus ",(0,n.jsx)(i.code,{children:"is_error: true"}),". The message should say what went wrong and what Claude should try next."]}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:`try:
    result["content"] = HANDLERS[call.name](**call.input)
except Exception as exc:
    result["content"] = f"{call.name} failed: {exc}"
    result["is_error"] = True
`})}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"HANDLERS"})," is a dict from tool names to the Python functions that do each tool's work. Each function returns a string, because a ",(0,n.jsx)(i.code,{children:"tool_result"}),"'s ",(0,n.jsx)(i.code,{children:"content"})," is a string or a list of content blocks."]}),`
`,(0,n.jsx)(i.h2,{id:"put-the-loop-together",children:"Put the loop together"}),`
`,(0,n.jsxs)(i.p,{children:["The snippets above fit into Meridian's loop below. The script has already set up ",(0,n.jsx)(i.code,{children:"client"}),", ",(0,n.jsx)(i.code,{children:"tools"}),", ",(0,n.jsx)(i.code,{children:"prompt"}),", and ",(0,n.jsx)(i.code,{children:"HANDLERS"}),"."]}),`
`,(0,n.jsx)(c,{name:"CodeParts",title:"Parallel tool calling: find the line that does each job"}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Run every tool call in a response, and run them at the same time when they don't depend on each other."}),`
`,(0,n.jsxs)(i.li,{children:["Send back one ",(0,n.jsx)(i.code,{children:"tool_result"})," for each tool call, and put them all in one user message."]}),`
`,(0,n.jsx)(i.li,{children:"Don't send each result in its own message, because that reduces parallel tool use."}),`
`,(0,n.jsxs)(i.li,{children:["Send a failure back as a result with ",(0,n.jsx)(i.code,{children:"is_error: true"}),", so one bad tool call doesn't stop the loop."]}),`
`]})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};