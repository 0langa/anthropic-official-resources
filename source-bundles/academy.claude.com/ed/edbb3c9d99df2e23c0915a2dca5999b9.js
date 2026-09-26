import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{CodeCommand:i,LessonVideo:o}=r;return i||a("CodeCommand",!0),o||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o,{youtubeId:"7u366zBuUTM",title:"Routines and headless",children:[(0,n.jsx)(r.p,{children:`Once you trust Claude to do a task, the next move is to stop doing it by
hand. If it's the same prompt on a recurring trigger, you shouldn't have to
sit there and kick it off yourself every time. This lesson covers two ways
to hand that work off: routines, where you build nothing, and headless
mode, where you get full control from your own scripts.`}),(0,n.jsx)(r.p,{children:`Think of it as a spectrum. On one end you have routines that run on
Anthropic's managed infrastructure. On the other end you have headless mode
and the Agent SDK, which run Claude Code from your own code. Let's start
with the end where you build the least.`})]}),`
`,(0,n.jsx)(r.h2,{id:"routines-a-saved-prompt-that-runs-in-the-cloud",children:"Routines: a saved prompt that runs in the cloud"}),`
`,(0,n.jsx)(r.p,{children:"A routine is the most direct way to automate a task. There's no script and no server. It bundles three things: a prompt, the repository it works on, and any connectors it needs. Then it runs that bundle in the cloud whenever it's triggered."}),`
`,(0,n.jsx)(r.p,{children:"The key part is that the infrastructure is Anthropic's. There's no machine of yours staying on overnight, and there's no workflow file for you to maintain. You describe the job once and it just runs."}),`
`,(0,n.jsx)(r.p,{children:"A routine can fire on a few kinds of triggers:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A cron schedule, like every morning at 9am."}),`
`,(0,n.jsx)(r.li,{children:"An HTTP POST to its API endpoint, so your own code can kick it off."}),`
`,(0,n.jsx)(r.li,{children:"A GitHub event, like a new pull request landing."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Anything that's the same prompt on a recurring trigger is a good fit. A morning dependency audit. A PR triager that fires when a new pull request comes in. A daily scan of your Sentry tickets to figure out what's most urgent."}),`
`,(0,n.jsx)(r.p,{children:"Here's the mental model for what a routine ties together: a prompt, the repo, connectors, and a schedule."}),`
`,(0,n.jsx)(r.h2,{id:"two-ways-to-create-one",children:"Two ways to create one"}),`
`,(0,n.jsxs)(r.p,{children:["You can create a routine from the web at ",(0,n.jsx)(r.code,{children:"claude.ai/code/routines"}),". You give it a name, write the instructions describing what Claude should do in each session, pick a repository, and choose a trigger."]}),`
`,(0,n.jsxs)(r.p,{children:["You can also create one from inside Claude Code without leaving your terminal. Just run the ",(0,n.jsx)(r.code,{children:"/schedule"})," command and describe what you want in plain language, for example:"]}),`
`,(0,n.jsx)(i,{children:"/schedule daily dependency audit at 9am"}),`
`,(0,n.jsx)(r.p,{children:"Same idea, either entry point. Pick whichever fits your flow."}),`
`,(0,n.jsx)(r.h2,{id:"three-things-to-know-before-you-rely-on-routines",children:"Three things to know before you rely on routines"}),`
`,(0,n.jsx)(r.p,{children:"Before you lean on routines for anything important, keep these three limits in mind."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Routines are a research preview."})," Behavior and limits will keep moving, so don't be surprised if things change."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"A recurring schedule runs at most hourly."})," If you need something more frequent, routines aren't the tool."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:["Runs start from a fresh clone of your default branch, push to ",(0,n.jsx)(r.code,{children:"claude/"})," branches freely, and get checked before pushing anywhere else."]})," If your prompt names another branch, the check refuses the push when the branch is protected on GitHub, someone else has an open pull request from it, or it carries someone else's commits. Keep ",(0,n.jsx)(r.code,{children:"main"})," protected and an autonomous run can't rewrite it."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"headless-mode-when-you-need-your-own-environment",children:"Headless mode: when you need your own environment"}),`
`,(0,n.jsx)(r.p,{children:"Routines are great when the work fits in the cloud. But sometimes the job needs your environment, or logic wrapped around the run. That's when you drop to headless mode."}),`
`,(0,n.jsxs)(r.p,{children:["The core of headless mode is the ",(0,n.jsx)(r.code,{children:"-p"})," flag (short for ",(0,n.jsx)(r.code,{children:"--print"}),"). It runs Claude Code as a one-shot command with no interactive UI. It reads standard in and writes standard out, so it pipes like any other shell tool:"]}),`
`,(0,n.jsx)(i,{children:'claude -p "summarize the changes in this diff"'}),`
`,(0,n.jsxs)(r.p,{children:["One thing worth knowing: ",(0,n.jsx)(r.code,{children:"-p"})," skips auto-discovery of hooks, skills, plugins, MCP servers, and the CLAUDE.md file. You get Claude plus the tools you allow explicitly, and nothing the local environment happens to load. The upside is that startup is much faster this way."]}),`
`,(0,n.jsx)(r.h2,{id:"getting-structured-output-back",children:"Getting structured output back"}),`
`,(0,n.jsx)(r.p,{children:"Because headless mode pipes like any shell tool, you'll often want structured data back instead of prose. You can pair a JSON schema with the JSON output format, and Claude will constrain its output to match your schema."}),`
`,(0,n.jsxs)(r.p,{children:["The object that matches your schema lands in the ",(0,n.jsx)(r.code,{children:"structured_output"})," field of the JSON response. So you can pull it out with a ",(0,n.jsx)(r.code,{children:"jq"})," command and pipe it into a database or another script:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`claude -p "Extract the exported function names from src/core/style.js" \\
  --output-format json \\
  --json-schema '{"type":"object","properties":{"functions":{"type":"array","items":{"type":"string"}}},"required":["functions"]}' \\
  | jq '.structured_output.functions'
`})}),`
`,(0,n.jsx)(r.p,{children:"That gives you a clean array you can hand to whatever comes next."}),`
`,(0,n.jsx)(r.h2,{id:"multi-step-automation-with-sessions",children:"Multi-step automation with sessions"}),`
`,(0,n.jsx)(r.p,{children:"For work that happens across multiple steps, you don't have to cram everything into one command. Capture the session's ID from the JSON output and resume it later:"}),`
`,(0,n.jsx)(i,{children:'claude --resume "$(jq -r .session_id /tmp/plan.json)"'}),`
`,(0,n.jsx)(r.p,{children:"One script kicks off the work. Another resumes it later with full context. This is handy when the first pass produces a plan and a second pass carries it out."}),`
`,(0,n.jsx)(r.h2,{id:"deterministic-runs-for-ci",children:"Deterministic runs for CI"}),`
`,(0,n.jsx)(r.p,{children:"When CI needs the same results every single run, there's a mode built for that."}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"--bare"})," flag gives you deterministic mode. It's the right choice when you're running Claude Code inside a pipeline and you want repeatable, predictable output rather than anything that varies run to run."]}),`
`,(0,n.jsx)(r.h2,{id:"the-agent-sdk-claude-code-inside-your-own-app",children:"The Agent SDK: Claude Code inside your own app"}),`
`,(0,n.jsx)(r.p,{children:"The last step on the spectrum is the Agent SDK. This gets you a library that embeds Claude Code inside your own TypeScript or Python applications."}),`
`,(0,n.jsxs)(r.p,{children:["Both languages expose a ",(0,n.jsx)(r.code,{children:"query"})," function and the same primitives as the CLI. You pass a prompt plus options, like:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"allowedTools"})," to control what Claude can do,"]}),`
`,(0,n.jsx)(r.li,{children:"a system prompt,"}),`
`,(0,n.jsx)(r.li,{children:"and a permission mode."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Then you iterate over the messages Claude streams back and handle them however your app needs. It's the same engine as the CLI, just callable from inside your product."}),`
`,(0,n.jsx)(r.h2,{id:"which-one-should-you-reach-for",children:"Which one should you reach for?"}),`
`,(0,n.jsx)(r.p,{children:"Here's the quick decision guide:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Routines"})," are the default for repeat work. They run on Anthropic's infrastructure with nothing for you to host."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:["Headless mode with ",(0,n.jsx)(r.code,{children:"-p"})]})," is for when the job needs your pipeline and you want to pipe data through a script."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"--bare"})})," is for when CI needs the same results every single run."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"The Agent SDK"})," is for when the work belongs inside your own product."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Start with routines. Drop down the spectrum only when the job actually needs the extra control."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};