import{Gp as e,qp as t}from"../../../content-de-meta-jwql3rqc.js";var n=e();function r(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{CodeCommand:i,CodePrompt:o,ResourceWidget:s}=r;return i||a("CodeCommand",!0),o||a("CodePrompt",!0),s||a("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Developers working with Claude Code will eventually run into a cost or usage constraint. Still, developers want to work on the frontiers of model intelligence and often default to the most capable model available."}),`
`,(0,n.jsx)(r.p,{children:"No matter which model you are using, another important dial for cost and token usage is the effort level. Match the effort to the complexity of the task; cost is what happens when you do not, in either direction."}),`
`,(0,n.jsx)(r.h2,{id:"effort-does-not-change-what-the-model-knows",children:"Effort does not change what the model knows"}),`
`,(0,n.jsx)(r.p,{children:"Effort tells your model how many resources to spend on the task in your prompt. If you set effort to the lowest level, the model will try to achieve the objectives of the prompt with as few resources as possible: fewer tool calls, fewer tokens, and less work overall. If you set effort to the maximum, you are signaling to the model that it can and should use as many resources as it needs to complete the objectives in the prompt."}),`
`,(0,n.jsx)(r.p,{children:"Effort sets how hard the model works, not how much it knows. The model you choose determines the level of capability you are working with. Effort is a signal of how hard you want that model to work."}),`
`,(0,n.jsx)(s,{name:"EffortScale"}),`
`,(0,n.jsx)(r.h2,{id:"when-to-change-the-effort",children:"When to change the effort"}),`
`,(0,n.jsx)(r.p,{children:"When the effort is too low for the task, the model will likely stop early and come back to you with unfinished work. That is a signal that what you asked is more complex than the effort you allowed for. Then you have to figure out where it left off and prompt again to get it to continue. In the end that can cost more than if you had set the effort level correctly."}),`
`,(0,n.jsx)(r.p,{children:'When the effort is too high, you may not notice it on every prompt or every task: the model will use more tokens than necessary, the response times will be longer, and you will notice a pattern of overthinking, or of identifying more tasks than you actually assigned. You are sending the signal "what I am describing to you is really complex and difficult," and the model will match that signal and treat the work as that complex.'}),`
`,(0,n.jsx)(s,{name:"MismatchSigns"}),`
`,(0,n.jsx)(r.p,{children:"The default sits in the middle, and it is not arbitrary: it is tuned for each model to the level where most tasks finish without overspending. That is why it is the right place to start."}),`
`,(0,n.jsx)(r.p,{children:"You adjust down for tasks that you know are simple and should not require a big spend of resources: time, turns, tool calls, or document reads. If you have already run this type of task at the default level, try running it one level lower and see if you notice any difference in quality. If not, keep going down one level at a time until you do."}),`
`,(0,n.jsx)(r.p,{children:"You go up from the default when you know you are describing something that should take a long time and require a lot of turns and double-checking. The other time to turn the effort up is when the task is something you cannot quickly check yourself, and you want more self-checking from the model as it works. The same rule applies in this direction: go up one level, rerun, and stop when it starts finishing the things you think it should."}),`
`,(0,n.jsx)(s,{name:"ThreeTasks"}),`
`,(0,n.jsx)(r.h2,{id:"which-dial-to-turn-effort-or-model",children:"Which dial to turn: effort or model?"}),`
`,(0,n.jsx)(r.p,{children:"Change the model only if more effort did not fix the problem. Did the model not know enough, or did it not try hard enough? If it knew enough but did not try hard enough, change effort. If it knew enough but worked too hard, that is also an effort problem. If changing the effort is not fixing it and you are not on the most capable model, that is a sign the model you picked does not have the knowledge, or is not capable enough, for the task."}),`
`,(0,n.jsx)(s,{name:"TwoDials"}),`
`,(0,n.jsx)(r.h3,{id:"when-you-change-models-start-again-at-the-default",children:"When you change models, start again at the default"}),`
`,(0,n.jsx)(r.p,{children:"The level names are the same on every model, but the same level does not mean the same amount of work on a different model."}),`
`,(0,n.jsx)(s,{name:"PerModelScale"}),`
`,(0,n.jsx)(r.p,{children:"Whenever you choose a model, start the effort at the default and adjust up and down as you need to. Say you try a difficult task with the least capable model available, to see if it can do the job for less. After you dial the effort up as high as possible, the model is still not completing the task at the quality level you need, so you go up a model. Do not leave the effort on max; try again at the default. The more capable model may still complete the task with less effort."}),`
`,(0,n.jsx)(s,{name:"HireAnalogy"}),`
`,(0,n.jsx)(r.p,{children:"Whenever there is a new model, including a newer version of the one you already use, revisit the tasks you have been doing. See if you can get the same results with the more capable model at a lower effort, which might make those tasks cheaper."}),`
`,(0,n.jsx)(r.h2,{id:"setting-the-effort-level",children:"Setting the effort level"}),`
`,(0,n.jsx)(r.p,{children:"You can change effort through any of the following:"}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For this session only:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.code,{children:"--effort"})," flag:"]})," pass a level name when launching Claude Code"]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For this and future sessions:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.code,{children:"/effort"}),":"]})," run ",(0,n.jsx)(r.code,{children:"/effort"})," with no arguments to open an interactive slider, ",(0,n.jsx)(r.code,{children:"/effort"})," followed by a level name to set it directly, or ",(0,n.jsx)(r.code,{children:"/effort auto"})," to reset to the model default"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:["In ",(0,n.jsx)(r.code,{children:"/model"}),":"]})," while selecting a model, use the left/right arrow keys to adjust the effort slider"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Settings:"})," set ",(0,n.jsx)(r.code,{children:"effortLevel"})," to ",(0,n.jsx)(r.code,{children:"low"}),", ",(0,n.jsx)(r.code,{children:"medium"}),", ",(0,n.jsx)(r.code,{children:"high"}),", or ",(0,n.jsx)(r.code,{children:"xhigh"})," in your settings file"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Environment variable:"})," set ",(0,n.jsx)(r.code,{children:"CLAUDE_CODE_EFFORT_LEVEL"})," to a level name or ",(0,n.jsx)(r.code,{children:"auto"})]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"For one skill or subagent:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Skill and subagent frontmatter:"})," set ",(0,n.jsx)(r.code,{children:"effort"})," in a skill or subagent markdown file to override the effort level while it runs"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["A level you set with ",(0,n.jsx)(r.code,{children:"/effort"})," persists into your next session, so use the ",(0,n.jsx)(r.code,{children:"--effort"})," flag when you want a level for one run only. Max uses enough resources that Claude Code makes it session-only unless you set it through the environment variable, so you cannot leave it on by accident."]}),`
`,(0,n.jsxs)(r.p,{children:["Ultracode is not an effort level. It is a session-only Claude Code setting that runs the model at ",(0,n.jsx)(r.code,{children:"xhigh"})," and, for substantive tasks, also has Claude orchestrate ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/workflows",children:"dynamic workflows"}),", fanning work out to multiple agents."]}),`
`,(0,n.jsx)(s,{name:"EffortPickerDemo"}),`
`,(0,n.jsx)(r.p,{children:"When more than one method sets the effort, the one nearest the top of the order below wins."}),`
`,(0,n.jsx)(s,{name:"SettingPrecedence"}),`
`,(0,n.jsxs)(r.p,{children:["Whatever wins above, your organization may cap it. On Enterprise plans an admin can set a ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/model-config#organization-effort-limits",children:"maximum effort level per model"}),". Levels above the cap do not appear in the ",(0,n.jsx)(r.code,{children:"/effort"})," picker, and if you ask for one with ",(0,n.jsx)(r.code,{children:"/effort"})," or ",(0,n.jsx)(r.code,{children:"--effort"}),", Claude Code runs at the cap and tells you so."]}),`
`,(0,n.jsx)(r.h2,{id:"worked-example",children:"Worked example"}),`
`,(0,n.jsx)(r.p,{children:"The same prompt run three times on one model, at low, the default, and max: play each level and watch how much work goes into the same result. The prompt asks for a small CSV-to-JSON script tested on a sample file, boring on purpose so the effort levels have room to differ."}),`
`,(0,n.jsx)(s,{name:"WorkedExample"}),`
`,(0,n.jsx)(r.h2,{id:"try-it-in-your-own-environment",children:"Try it in your own environment"}),`
`,(0,n.jsxs)(r.p,{children:["Three separate sessions. Do the same four steps in each one. You assemble the comparison yourself, because ",(0,n.jsx)(r.code,{children:"/usage"})," reports only the session you are in. Check it at the end of each run, write down the token count it reports for the session, then exit and start the next run fresh."]}),`
`,(0,n.jsx)(r.h3,{id:"1-launch-a-fresh-session-in-its-own-empty-folder-at-that-runs-level",children:"1. Launch a fresh session in its own empty folder, at that run's level"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`# from an empty folder outside any repo
# run 1 · low
mkdir effort-low && cd effort-low && claude --effort low

# run 2 · default
cd .. && mkdir effort-default && cd effort-default && claude
# then run /effort auto

# run 3 · max
cd .. && mkdir effort-max && cd effort-max && claude --effort max
`})}),`
`,(0,n.jsxs)(r.p,{children:["The flag (or ",(0,n.jsx)(r.code,{children:"/effort auto"}),") makes each run start at its own level, because ",(0,n.jsx)(r.code,{children:"low"})," through ",(0,n.jsx)(r.code,{children:"xhigh"})," persist into your next session once set with ",(0,n.jsx)(r.code,{children:"/effort"}),"."]}),`
`,(0,n.jsx)(r.h3,{id:"2-paste-the-same-prompt",children:"2. Paste the same prompt"}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsx)(r.p,{children:"Write a script that converts a CSV file to JSON. Save it as csv_to_json.py in this folder. Test it on this CSV, saved as sample.csv:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`name,team,start_date
Priya,Payments,2024-03-18
Marcus,Platform,2023-11-02
Lena,Support,2025-01-27
`})})]}),`
`,(0,n.jsx)(r.h3,{id:"3-when-claude-hands-the-work-back-check-what-this-session-used",children:"3. When Claude hands the work back, check what this session used"}),`
`,(0,n.jsx)(i,{children:"/usage"}),`
`,(0,n.jsx)(r.p,{children:"Look for the session's token total; the rest of the screen varies by plan."}),`
`,(0,n.jsx)(r.h3,{id:"4-exit-then-go-back-to-step-1-for-the-next-level",children:"4. Exit, then go back to step 1 for the next level"}),`
`,(0,n.jsx)(i,{children:"/exit"}),`
`,(0,n.jsx)(r.p,{children:"The three token counts should climb from low to max, and all three folders should hold a working converter. Open the three scripts side by side: the difference in how much got built is the difference you paid for."}),`
`,(0,n.jsx)(r.h2,{id:"the-habit-to-keep",children:"The habit to keep"}),`
`,(0,n.jsx)(r.p,{children:"Managing effort comes down to one habit: start at the default, watch what comes back, and adjust one level at a time. Keep that loop running and you will know what level a task needs, and be able to explain to a coworker or an admin why."}),`
`,(0,n.jsx)(r.h2,{id:"learn-more",children:"Learn more"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://claude.com/blog/claude-model-and-effort-level-in-claude-code",children:(0,n.jsx)(r.strong,{children:"Choosing a Claude model and effort level in Claude Code"})}),": the concepts behind model choice and effort, from the Claude Code team."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/model-config",children:(0,n.jsx)(r.strong,{children:"Model configuration"})}),": the full reference for ",(0,n.jsx)(r.code,{children:"/effort"}),", settings, precedence, and organization limits."]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};