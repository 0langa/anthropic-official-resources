import{Qm as e,Xm as t}from"../../../../../content-de-meta-j2jjwhjm.js";var n=t(),r=`# Cut the cost of tool-heavy workflows

Your agent works, then traffic arrives and the bill becomes the bug. Here's how you can cut the cost of tool-heavy workflows. Answering the utilization question the normal way means dozens of model turns. Call get_employee_hours for one engineer, get a timesheet back into context, call again, again, again, again, again. Every intermediate result lands in the context window, and you pay for all of it on every subsequent turn.

The model reads kilobytes of timesheets to produce one short list. Programmatic tool calling flips it. Claude writes a Python script inside the code execution sandbox, and that script calls your tools in a loop. The intermediate results flow through the script, not the context window. So only the final output reaches the model.

The setup is your normal tool definition plus one field: allowed_callers, which points at the code execution tool. Current identifier in the tool reference. Make sure that you document each tool's output JSON shape in this description, because Claude's script is going to json.loads your result, and it can only parse what it knows the shape of.

So let's run this normal loop first, the classic way. 40 engineers, 40 tool calls, and 40 timesheets accumulating in context. Now watch the input token counter climb. On every turn as the conversation rereads itself.

Yeah, look at that. The classic run miscounts the roster, but both runs land on the same six names. Now, programmatically, Claude writes one script. It loops over the engineers. It calls a tool. It filters below the threshold and prints just that short list right here.

The script runs in the sandbox and 40 results flow through it. And the model sees six names. One, two, three, four, five, six. But the token counter barely moves. Now, while a programmatic call is paused waiting on one of your tool results, include the container ID on the follow-up request and know that a pending call times out after a few minutes.

Cool. So we got this token cost right here. Let's go ahead and open it. And you can see right here that our classic loop takes way more input tokens by an order of magnitude versus the programmatic one. The saving is this big because the 40 lookups don't depend on each other. When each call needs Claude to reason over the last result, programmatic calling helps a lot less.

Now prompt caching can work on your tools. Your tool definitions are re-sent on every request and a 14-tool agent re-pays for them every single time. So put cache_control on the last tool in the list and the whole tools prefix caches. One thing though is that the cache invalidates through the tools, system, messages prefix in that order. So rewriting any tool definition busts the hit. So we have one line of code here. Watch the before-and-after input cost across eight real queries.

Programmatic tool calling routes intermediate results through a sandbox script, so the model only sees the final answer. Document your output shapes, carry the container ID while paused, and cache your tool definitions with one cache_control line.

The bill was the bug, but these two knobs are the patch.
`;function i(t){let i={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...t.components},{LessonVideo:a,ResourceWidget:s}=i;return a||o("LessonVideo",!0),s||o("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{youtubeId:"gccCX7-qkvk",title:"Cut the cost of tool-heavy workflows",transcript:r,children:(0,n.jsx)(i.p,{children:`An agent that uses tools sends everything again on every request.
Programmatic tool calling and prompt caching each cut a different part of
its cost.`})}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["The demo in this video was recorded in September 2026. It ran on Claude Sonnet 5 (",(0,n.jsx)(i.code,{children:"claude-sonnet-5"}),"). Results may differ on newer models."]})}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"An agent that uses tools sends everything again on every request, so its cost grows with each tool call."})," Each request carries the tool definitions, the system prompt, the question, and every tool result so far. Those are its input tokens, and each one is billed."]}),`
`,(0,n.jsx)(i.p,{children:"Programmatic tool calling and prompt caching both cut that cost."}),`
`,(0,n.jsxs)(i.p,{children:["Meridian is a fictional engineering consultancy with 40 engineers. Its agent got one question: Which engineers were under 70% utilization in June 2026? The agent had two tools. ",(0,n.jsx)(i.code,{children:"list_employees"})," returns the roster, and ",(0,n.jsx)(i.code,{children:"get_employee_hours"})," returns one engineer's timesheet."]}),`
`,(0,n.jsx)(i.p,{children:"Answering that question took the agent 42 requests and 1,124,799 input tokens. The whole run cost $2.29 in tokens."}),`
`,(0,n.jsx)(i.h2,{id:"measure-the-input-tokens-in-each-request",children:"Measure the input tokens in each request"}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.strong,{children:["Print ",(0,n.jsx)(i.code,{children:"usage.input_tokens"})," each time a response comes back, because those counts show you where the cost is."]})}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:`resp = client.messages.create(...)
print(resp.usage.input_tokens, "input tokens")
`})}),`
`,(0,n.jsx)(i.p,{children:"Meridian's agent runs a classic loop, where each response asks for one tool call. Here are two of its counts."}),`
`,(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Request"}),(0,n.jsx)(i.th,{children:"What it carries"}),(0,n.jsx)(i.th,{children:"Input tokens"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Request 1"}),(0,n.jsx)(i.td,{children:"Tool definitions, system prompt, and question"}),(0,n.jsx)(i.td,{children:"606"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Request 37"}),(0,n.jsx)(i.td,{children:"The same, plus 36 earlier tool results"}),(0,n.jsx)(i.td,{children:"47,905"})]})]})]}),`
`,(0,n.jsx)(i.p,{children:"Request 1 carries only what every request sends. Later requests add tool calls and their results. Compare the two counts to see which part grew."}),`
`,(0,n.jsx)(i.h2,{id:"keep-tool-results-out-of-what-claude-reads",children:"Keep tool results out of what Claude reads"}),`
`,(0,n.jsxs)(i.p,{children:["With ",(0,n.jsx)(i.a,{href:"https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling#how-programmatic-tool-calling-works",children:"programmatic tool calling"}),", Claude writes a script that calls your tools, and the code execution tool runs it in a container. ",(0,n.jsx)(i.strong,{children:"Only what the script prints reaches Claude."})," Meridian's 40 timesheets stay with the script, and Claude gets its short printout."]}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Check your tools and your model first."})," As of October 2026, programmatic tool calling ",(0,n.jsxs)(i.a,{href:"https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling#feature-incompatibilities",children:["doesn't support tools marked ",(0,n.jsx)(i.code,{children:"strict: true"})]}),". It also doesn't support ",(0,n.jsx)(i.code,{children:"disable_parallel_tool_use"}),", the ",(0,n.jsx)(i.code,{children:"tool_choice"})," setting that limits Claude to one tool call in each response. ",(0,n.jsx)(i.code,{children:"tool_choice"})," can't force Claude to call a tool from the script."]}),`
`,(0,n.jsx)(i.p,{children:"Claude Haiku 4.5 doesn't support the feature. The feature runs on the Claude API, Claude Platform on AWS, and Microsoft Foundry deployments hosted on Anthropic."}),`
`,(0,n.jsx)(i.p,{children:"Turning on programmatic tool calling takes four changes."}),`
`,(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsx)(i.li,{children:(0,n.jsxs)(i.strong,{children:["Add the code execution tool to your ",(0,n.jsx)(i.code,{children:"tools"})," list."]})}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Mark the tools the script may call."})," Give each one an ",(0,n.jsx)(i.code,{children:"allowed_callers"})," field that names the code execution tool at ",(0,n.jsxs)(i.a,{href:"https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-reference",children:["version ",(0,n.jsx)(i.code,{children:"code_execution_20260120"})," or later"]}),"."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Send the container's ID back."})," Read it from each response that stops for a tool call, and send it with the request that returns your tool results."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Describe each tool's result."})," Say in the description what shape it takes, because the script has to parse it. Here's Meridian's description for ",(0,n.jsx)(i.code,{children:"get_employee_hours"}),"."]}),`
`]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:`Returns one engineer's hours for the month as JSON: {"name": str, "billable_hours": float, "utilization": float 0-1}`})}),`
`,(0,n.jsx)(i.p,{children:"Here's Meridian's loop after these changes."}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:`CODE_EXECUTION = "code_execution_20260120"
TOOLS = [
    {"type": CODE_EXECUTION, "name": "code_execution"},
    {**LIST_EMPLOYEES, "allowed_callers": [CODE_EXECUTION]},
    {**GET_EMPLOYEE_HOURS, "allowed_callers": [CODE_EXECUTION]},
]

messages = [{"role": "user", "content": QUESTION}]
container = None
while True:
    resp = client.messages.create(
        model="claude-sonnet-5", max_tokens=4096,
        tools=TOOLS, messages=messages, container=container,
    )
    print(resp.usage.input_tokens, "input tokens")
    if resp.stop_reason not in ("tool_use", "pause_turn"):
        break
    container = resp.container.id
    messages.append({"role": "assistant", "content": resp.content})
    if resp.stop_reason == "tool_use":
        messages.append({"role": "user", "content": run_tools(resp)})
print("".join(b.text for b in resp.content if b.type == "text"))
`})}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"LIST_EMPLOYEES"})," and ",(0,n.jsx)(i.code,{children:"GET_EMPLOYEE_HOURS"})," are Meridian's tool definitions."]}),`
`,(0,n.jsxs)(i.li,{children:["Your own ",(0,n.jsx)(i.code,{children:"run_tools"})," runs each tool call and returns the results."]}),`
`,(0,n.jsxs)(i.li,{children:["On ",(0,n.jsx)(i.code,{children:"pause_turn"}),", the loop sends the response back and continues."]}),`
`]}),`
`,(0,n.jsxs)(i.p,{children:["When the script calls a tool, the response's ",(0,n.jsx)(i.code,{children:"stop_reason"})," is ",(0,n.jsx)(i.code,{children:'"tool_use"'}),". Your code runs the tool, and the result goes to the script, not to Claude. The script can run tools in parallel, so one response can hold more than one tool call."]}),`
`,(0,n.jsx)(i.p,{children:"Here's the same question answered both ways."}),`
`,(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Run"}),(0,n.jsx)(i.th,{children:"Requests"}),(0,n.jsx)(i.th,{children:"Tool calls"}),(0,n.jsx)(i.th,{children:"Input tokens"}),(0,n.jsx)(i.th,{children:"Token cost"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Classic loop"}),(0,n.jsx)(i.td,{children:"42"}),(0,n.jsx)(i.td,{children:"41"}),(0,n.jsx)(i.td,{children:"1,124,799"}),(0,n.jsx)(i.td,{children:"$2.29"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Programmatic tool calling"}),(0,n.jsx)(i.td,{children:"3"}),(0,n.jsx)(i.td,{children:"41"}),(0,n.jsx)(i.td,{children:"28,486"}),(0,n.jsx)(i.td,{children:"$0.0667"})]})]})]}),`
`,(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.em,{children:["Both runs used the same question, the same tools, and ",(0,n.jsx)(i.code,{children:"claude-sonnet-5"}),". Costs use ",(0,n.jsx)(i.a,{href:"https://claude.com/pricing",children:"prices as of September 2026"}),", and code execution time is billed separately from tokens."]})}),`
`,(0,n.jsx)(i.p,{children:"Programmatic tool calling fits lookups that don't depend on each other. It helps little when Claude has to reason over each result before it makes the next tool call."}),`
`,(0,n.jsx)(i.h2,{id:"cache-tool-definitions-that-repeat",children:"Cache tool definitions that repeat"}),`
`,(0,n.jsx)(i.p,{children:"With prompt caching, the API stores the prefix of your request, the part up to a cache point you mark. Reading that prefix again costs far less."}),`
`,(0,n.jsx)(i.p,{children:"A second Meridian agent has 14 tools, and their definitions come to 3,305 tokens that every request sends again."}),`
`,(0,n.jsxs)(i.p,{children:[(0,n.jsxs)(i.strong,{children:["Mark the cache point by putting ",(0,n.jsx)(i.code,{children:"cache_control"})," on the last tool, and the whole list is cached."]})," That takes one line:"]}),`
`,(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:`TOOLS[-1]["cache_control"] = {"type": "ephemeral"}
`})}),`
`,(0,n.jsxs)(i.p,{children:["On Claude Sonnet 5, reading the prefix costs ",(0,n.jsx)(i.a,{href:"https://platform.claude.com/docs/en/build-with-claude/prompt-caching#pricing",children:"a tenth of the normal input price"}),". Writing it costs 1.25 times the normal input price."]}),`
`,(0,n.jsxs)(i.p,{children:["The cached prefix lasts five minutes by default, and each use renews it. For requests further apart, add ",(0,n.jsx)(i.code,{children:'"ttl": "1h"'})," to ",(0,n.jsx)(i.code,{children:"cache_control"})," to keep it for an hour. Writing a one-hour cache costs ",(0,n.jsx)(i.a,{href:"https://platform.claude.com/docs/en/build-with-claude/prompt-caching#pricing",children:"twice the normal input price"}),"."]}),`
`,(0,n.jsx)(i.p,{children:"Meridian ran the same eight questions with the cache and without it. Its total input cost fell from $0.0554 to $0.0154."}),`
`,(0,n.jsxs)(i.p,{children:["With ",(0,n.jsx)(i.a,{href:"https://platform.claude.com/docs/en/build-with-claude/prompt-caching#automatic-caching",children:"automatic caching"}),", you put one ",(0,n.jsx)(i.code,{children:"cache_control"})," field at the top level of the request, and the API places the cache point for you."]}),`
`,(0,n.jsx)(i.p,{children:"Watch for three things once caching is on:"}),`
`,(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsx)(i.li,{children:"Change any tool definition and you lose the whole cache."}),`
`,(0,n.jsx)(i.li,{children:"On Sonnet 5, a cached prefix has to be at least 1,024 tokens. When it's shorter, nothing is cached and no error says so."}),`
`,(0,n.jsxs)(i.li,{children:["With caching on, ",(0,n.jsx)(i.code,{children:"input_tokens"})," leaves out the cached prefix, so a request's true total is ",(0,n.jsx)(i.code,{children:"input_tokens"}),", ",(0,n.jsx)(i.code,{children:"cache_read_input_tokens"}),", and ",(0,n.jsx)(i.code,{children:"cache_creation_input_tokens"})," added together."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"combine-the-features-where-they-fit",children:"Combine the features where they fit"}),`
`,(0,n.jsx)(i.p,{children:"Add them in this order."}),`
`,(0,n.jsxs)(i.ol,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Start with caching."})," It takes one line."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Test programmatic tool calling."})," Run some of your usual traffic with and without ",(0,n.jsx)(i.code,{children:"allowed_callers"}),", then compare each run's billed input tokens."]}),`
`]}),`
`,(0,n.jsx)(i.p,{children:"For each of the two Meridian requests below, find the part that holds most of the input tokens, then pick the feature that cuts it."}),`
`,(0,n.jsx)(s,{name:"WhatFillsTheTurn",title:"Find which feature saves each request the most"}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Every request sends everything again, so you pay for old tool results over and over."}),`
`,(0,n.jsxs)(i.li,{children:["Print ",(0,n.jsx)(i.code,{children:"usage.input_tokens"})," each time a response comes back, so you know which part of the request costs the most."]}),`
`,(0,n.jsxs)(i.li,{children:["Start with caching. Add ",(0,n.jsx)(i.code,{children:"cache_control"})," to the last tool in your list."]}),`
`,(0,n.jsxs)(i.li,{children:["When your tool calls don't depend on each other, set up programmatic tool calling with the code execution tool and ",(0,n.jsx)(i.code,{children:"allowed_callers"}),". Send the container's ID with every later request."]}),`
`]})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};