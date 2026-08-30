import{Hf as e,Wf as t}from"../../../../../content-es-meta-mstc7yuz.js";var n=e();function r(e){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"tBIdyIoCQVU",title:"The agent loop explained",children:(0,n.jsxs)(r.p,{children:[`You've made API calls, but a single call only returns one response. If you
want to automate a workflow, Claude needs to act, look at the result, decide
what's next, and keep going. That pattern is what people mean when they talk
about `,(0,n.jsx)(r.strong,{children:"agentic workflows"}),"."]})}),`
`,(0,n.jsx)(r.h2,{id:"what-an-agent-actually-is",children:"What an agent actually is"}),`
`,(0,n.jsxs)(r.p,{children:["An ",(0,n.jsx)(r.strong,{children:"agent"})," is an autonomous version of Claude, running both sides of the messaging loop without a human in the middle. An agent receives a task, picks a tool, and executes code in a loop until Claude decides the task is done."]}),`
`,(0,n.jsx)(r.p,{children:"The easiest way to implement an agent loop looks like this:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Send a message to Claude with tools available."}),`
`,(0,n.jsx)(r.li,{children:"Claude responds with either a final answer or a request to use a tool you defined."}),`
`,(0,n.jsx)(r.li,{children:"Your code executes that tool."}),`
`,(0,n.jsx)(r.li,{children:"You send the result back to Claude."}),`
`,(0,n.jsxs)(r.li,{children:["Repeat until the ",(0,n.jsx)(r.strong,{children:"stop reason"})," is ",(0,n.jsx)(r.code,{children:"end_turn"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Think of it as a conversation where the turns alternate: the user kicks things off, the agent calls a tool, the tool returns a result, and the agent keeps going until it has an answer."}),`
`,(0,n.jsx)(r.h2,{id:"a-minimal-working-example",children:"A minimal working example"}),`
`,(0,n.jsxs)(r.p,{children:["To see this loop run end to end without dragging in a database or a UI, we'll wire up a fake tool called ",(0,n.jsx)(r.code,{children:"get_weather"})," and ask Claude what to wear in Austin today. Claude has no way to know the weather on its own, so it has to call the tool, read the result, and then give you an answer."]}),`
`,(0,n.jsx)(r.p,{children:"Here's the whole script:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import anthropic

client = anthropic.Anthropic()

# The tools array tells Claude what's available:
# a name, a description, and a JSON schema for the inputs.
tools = [
    {
        "name": "get_weather",
        "description": "Get the current weather for a city.",
        "input_schema": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string",
                    "description": "The city to get weather for",
                }
            },
            "required": ["city"],
        },
    }
]

# run_tool is just a hardcoded lookup.
# In a real app, this would hit your database, an API, whatever.
def run_tool(name, tool_input):
    if name == "get_weather":
        return f"Weather in {tool_input['city']}: 95F, sunny"
    raise ValueError(f"Unknown tool: {name}")

messages = [
    {"role": "user", "content": "What should I wear in Austin today?"}
]

# The agent loop. Each iteration sends messages to Claude
# and switches on the response's stop reason.
while True:
    response = client.messages.create(
        model="claude-sonnet-5",
        max_tokens=1024,
        tools=tools,
        messages=messages,
    )

    if response.stop_reason == "end_turn":
        # Claude is done. Print the final text and break.
        for block in response.content:
            if block.type == "text":
                print(block.text)
        break

    if response.stop_reason == "tool_use":
        # Find the tool use blocks in the response and run each one.
        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                result = run_tool(block.name, block.input)
                tool_results.append(
                    {
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": result,
                    }
                )

        # Push the assistant's response and our tool results
        # back into messages, then loop again so Claude can answer.
        messages.append({"role": "assistant", "content": response.content})
        messages.append({"role": "user", "content": tool_results})
`})}),`
`,(0,n.jsx)(r.p,{children:"Three pieces to notice:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.strong,{children:"tools array"})," tells Claude what's available: a name, a description, and a JSON schema for the inputs."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"run_tool"})})," is just a hardcoded lookup. In a real app, this would hit your database, an API, whatever."]}),`
`,(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.strong,{children:"loop"})," is the agent loop. Each iteration sends the messages to Claude and switches on the response's stop reason. On ",(0,n.jsx)(r.code,{children:"end_turn"}),", Claude is done — print the final text and break. On ",(0,n.jsx)(r.code,{children:"tool_use"}),", find the tool use blocks, run each one, push the assistant's response and your tool results back into ",(0,n.jsx)(r.code,{children:"messages"}),", and loop again so Claude can answer."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"running-it",children:"Running it"}),`
`,(0,n.jsx)(r.p,{children:"When you run the script, you'll see two turns:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Turn one:"})," the stop reason is ",(0,n.jsx)(r.code,{children:"tool_use"}),". Claude requests ",(0,n.jsx)(r.code,{children:"get_weather"})," for Austin, and your code returns the temperature and conditions."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Turn two:"})," the stop reason is ",(0,n.jsx)(r.code,{children:"end_turn"}),", and Claude tells you to wear something light and breathable."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./565642e5c3fa.png",alt:"Terminal output of the agent loop: turn 1 stops with tool_use and calls get_weather for Austin, then turn 2 stops with end_turn and Claude prints its final clothing recommendations"})}),`
`,(0,n.jsx)(r.p,{children:"Two API calls, one tool execution, one final answer. That's the entire loop. Everything you build with the Claude API is going to be similar to this."}),`
`,(0,n.jsx)(r.h2,{id:"the-same-loop-in-production",children:"The same loop in production"}),`
`,(0,n.jsx)(r.p,{children:"In a real environment, this same loop powers something like an auto-review endpoint: a compliance agent that reads a structural report, looks up the relevant building codes via a tool, and writes risk findings back to the database one by one as it works."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./2ac9b5b854f2.png",alt:"A compliance review dashboard listing uploaded structural reports, each with a Run auto-review button that kicks off the agent"})}),`
`,(0,n.jsx)(r.p,{children:"The shape of the loop is identical to what you just ran. The differences are:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Real tools instead of a mock weather lookup."}),`
`,(0,n.jsx)(r.li,{children:"Results stream back to the UI as server-sent events."}),`
`,(0,n.jsx)(r.li,{children:"Findings get persisted to a risk-finding table."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./1b53d6cebb3b.png",alt:"The review trace of a running compliance agent: dozens of tool calls searching the building-code library and looking up specific code sections as the loop iterates"})}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["An agent is ",(0,n.jsx)(r.strong,{children:"Claude in a loop"}),": observe, decide, act, repeat."]}),`
`,(0,n.jsxs)(r.li,{children:["The loop is simple: send messages with tools, run any tool Claude requests, feed the result back, and stop when the stop reason is ",(0,n.jsx)(r.code,{children:"end_turn"}),"."]}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"You own the loop and the tools. Claude owns the reasoning."})}),`
`,(0,n.jsx)(r.li,{children:"The same loop shape scales from a mock weather demo to a production compliance agent — only the tools and plumbing change."}),`
`,(0,n.jsx)(r.li,{children:"When you don't want to own the loop, managed agents run this exact loop for you on Anthropic's infrastructure."}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};