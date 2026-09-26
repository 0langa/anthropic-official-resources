import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"1Rl3gZrlQJo",title:"Building your first managed agent",children:(0,n.jsxs)(r.p,{children:[`If you've built an agent loop by hand, you know the drill: while loops, stop
reason switches, tool executions. That works, and for a lot of features it's
actually the right shape. But sometimes that loop is going to run for a very
long time — minutes, maybe even hours — across many tools, with state to
keep, files to write, and work to resume after a network hiccup. At that
point, you don't want to run the loop on your server. You want to delegate
it. That's what `,(0,n.jsx)(r.strong,{children:"managed agents"})," are."]})}),`
`,(0,n.jsx)(r.h2,{id:"what-is-a-managed-agent",children:"What is a managed agent?"}),`
`,(0,n.jsx)(r.p,{children:"A managed agent is an agent loop that runs on Anthropic's infrastructure instead of yours. You describe the agent once, you give it an environment to work in, and you start a session. Anthropic runs the loop, and you just stream the events back out as it works."}),`
`,(0,n.jsx)(r.p,{children:"Managed agents are enabled by default for every API account — no special access needed."}),`
`,(0,n.jsx)(r.h2,{id:"the-four-primitives",children:"The four primitives"}),`
`,(0,n.jsx)(r.p,{children:"There are four primitives, and they come in order:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Agent"})," — the persona: model, system prompt, and toolset. This is reusable across many runs."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Environment"})," — where the agent runs: cloud or self-hosted, networking config, and so on."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Session"})," — a single run of an agent inside a certain environment. The session is the unit of work."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Events"})," — the messages flowing in and out: the agent's actions, the tool calls, the results, the replies."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Here's how the pieces fit together: your app talks to a session, the session drives work inside the environment, and everything that happens flows back out through the event stream:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./cbf6c1039721.png",alt:"Architecture diagram showing an agent connected to a Session, which drives an Environment, with results flowing back through an Event Stream to your app"})}),`
`,(0,n.jsx)(r.p,{children:"Notice the shift here: you're not running a while loop. You're sending events and reading events."}),`
`,(0,n.jsx)(r.h2,{id:"the-smallest-possible-managed-agent",children:"The smallest possible managed agent"}),`
`,(0,n.jsx)(r.p,{children:"Let's build the smallest managed agent that does something useful: create a file in the temp drive, count its lines, and report back."}),`
`,(0,n.jsxs)(r.p,{children:["For tools, we'll use the ",(0,n.jsx)(r.strong,{children:"agent toolset"})," — Anthropic's bundled file, bash, and web tools. They work fine for this task, so we don't have to define any tools ourselves."]}),`
`,(0,n.jsx)(r.h2,{id:"step-1-create-the-agent",children:"Step 1: Create the agent"}),`
`,(0,n.jsxs)(r.p,{children:["First, we create the agent. Note the agent toolset defined right in the ",(0,n.jsx)(r.code,{children:"tools"})," array — that's the bundled toolset:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`import anthropic

client = anthropic.Anthropic()

agent = client.beta.agents.create(
    name="Line Counter",
    model="claude-opus-5",
    system="You are a helpful agent that completes small file tasks.",
    tools=[
        {"type": "agent_toolset_20260401", "default_config": {"enabled": True}}
    ],
)
`})}),`
`,(0,n.jsx)(r.p,{children:"Remember: the agent is reusable. Create it once and run it across many sessions."}),`
`,(0,n.jsx)(r.h2,{id:"step-2-create-the-environment",children:"Step 2: Create the environment"}),`
`,(0,n.jsx)(r.p,{children:"Next, the environment. This spins up the container template — cloud, with unrestricted networking. This is the sandbox where the file actually gets written:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`environment = client.beta.environments.create(
    name="line-counter-env",
    config={
        "type": "cloud",
        "networking": {"type": "unrestricted"},
    },
)
`})}),`
`,(0,n.jsx)(r.h2,{id:"step-3-create-the-session",children:"Step 3: Create the session"}),`
`,(0,n.jsx)(r.p,{children:"Then we create a session with our agent and environment, plus an optional title. The session is the unit of work:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`session = client.beta.sessions.create(
    agent=agent.id,
    environment_id=environment.id,
    title="Count lines demo",
)
`})}),`
`,(0,n.jsx)(r.h2,{id:"step-4-open-the-stream-then-send-the-kickoff",children:"Step 4: Open the stream, then send the kickoff"}),`
`,(0,n.jsxs)(r.p,{children:["Now we open the event stream — and notice that we do this ",(0,n.jsx)(r.strong,{children:"first"}),". The stream only delivers events that occur after it opens, so always open it before sending the kickoff message. Then we send the user message into the live stream:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`with client.beta.sessions.events.stream(session_id=session.id) as stream:
    # Stream is open — now send the kickoff
    client.beta.sessions.events.send(
        session_id=session.id,
        events=[
            {
                "type": "user.message",
                "content": [
                    {
                        "type": "text",
                        "text": "Create a file in the temp directory, "
                                "count its lines, and report back.",
                    }
                ],
            }
        ],
    )
`})}),`
`,(0,n.jsxs)(r.p,{children:["Notice it's ",(0,n.jsx)(r.code,{children:"events"})," — plural. Events are how everything flows in this API."]}),`
`,(0,n.jsx)(r.h2,{id:"step-5-consume-the-stream",children:"Step 5: Consume the stream"}),`
`,(0,n.jsx)(r.p,{children:"Finally, we consume the stream. There are three event types that matter for this demo:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"agent.message"})," — Claude's text"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"agent.tool_use"})," — what tool Claude picked"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"session.status_idle"})," — the agent is done"]}),`
`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`    for event in stream:
        if event.type == "agent.message":
            for block in event.content:
                if block.type == "text":
                    print(block.text, end="", flush=True)
        elif event.type == "agent.tool_use":
            print(f"\\n[tool] {event.name}")
        elif event.type == "session.status_idle":
            print("\\n--- Agent done ---")
            break
`})}),`
`,(0,n.jsx)(r.p,{children:"Run it, and the output is the agent reasoning out loud — actual text, the tools it picks, and a final answer. All of it running inside Anthropic's container, not yours:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./b1122624b3e8.png",alt:"Terminal output of the managed agent run: agent, environment, and session IDs are created, then the event stream shows the agent writing the file, running its tools, and reporting that the file contains 3 lines"})}),`
`,(0,n.jsx)(r.h2,{id:"the-trade",children:"The trade"}),`
`,(0,n.jsx)(r.p,{children:"Usually with agents, we have our own loop where we have to control everything. With managed agents, you delegate that loop, the sandbox, and the resumability — and just consume the event stream as it comes in."}),`
`,(0,n.jsx)(r.p,{children:`In a production app, this is the shape for long-running, file-touching, "go organize this for me" tasks. Picture a file share cleanup: a managed agent reads a target directory structure spec, walks the messy incoming folder, moves files into the right project folders, archives duplicates and zero-byte garbage, and flags anything it can't confidently place — all in a session that can run for minutes against thousands of files. Here's what that looks like in a real app — a fileshare cleanup dashboard streaming the agent's activity live as it sorts, archives, and flags files:`}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./893cdbfb832c.png",alt:"A fileshare cleanup web app powered by a managed agent, showing the folder tree being organized alongside a live activity feed of the agent's events as it moves and archives files"})}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Managed agents are the agent loop, run for you"})," — on Anthropic's infrastructure instead of your server."]}),`
`,(0,n.jsxs)(r.li,{children:["The flow is: ",(0,n.jsx)(r.strong,{children:"create an agent, create an environment, create a session, send events in, and stream events out"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.strong,{children:"agent"})," (model, system prompt, toolset) is reusable across runs; the ",(0,n.jsx)(r.strong,{children:"session"})," is a single run; ",(0,n.jsx)(r.strong,{children:"events"})," are how everything flows."]}),`
`,(0,n.jsxs)(r.li,{children:["Open the event stream ",(0,n.jsx)(r.strong,{children:"before"})," sending your kickoff message — it only delivers events that occur after it opens."]}),`
`,(0,n.jsxs)(r.li,{children:["Watch for three events: ",(0,n.jsx)(r.code,{children:"agent.message"})," (text), ",(0,n.jsx)(r.code,{children:"agent.tool_use"})," (tool picks), and ",(0,n.jsx)(r.code,{children:"session.status_idle"})," (done)."]}),`
`,(0,n.jsx)(r.li,{children:"Reach for managed agents when the loop would run too long, do too much, or need to survive a hiccup. Reach for a manual loop when you want full control."}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};