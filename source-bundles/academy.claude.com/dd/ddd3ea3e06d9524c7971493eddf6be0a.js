import{Gp as e,qp as t}from"../../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"3fGaS8mcD9Q",title:"Skills",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Skills"}),` are folders of instructions, scripts, and resources that Claude
loads dynamically to improve performance on specialized tasks. At the core
of every Skill is a `,(0,n.jsx)(r.code,{children:"SKILL.md"}),` file — a packaged set of instructions you
upload once and then attach to any `,(0,n.jsx)(r.code,{children:"messages.create"}),` call. You're teaching
Claude how `,(0,n.jsx)(r.em,{children:"you"}),` do something: your status report format, your review
checklist, your release notes. Claude reads the Skill, follows the
procedure, and produces output in your shape.`]})}),`
`,(0,n.jsx)(r.h2,{id:"skills-vs-tools",children:"Skills vs. tools"}),`
`,(0,n.jsx)(r.p,{children:"It's worth being clear on the difference, because the two solve different problems:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tools"}),' connect Claude to data and actions. "Look up this code section," "send this email" — Claude calls the tool, and something else runs.']}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Skills"}),` teach Claude a procedure. "Generate the daily status report following this template" — it's a playbook Claude reads and follows, which sometimes means running bundled scripts itself.`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["A simple way to remember it: tools are about ",(0,n.jsx)(r.strong,{children:"what"})," Claude can do, while Skills are about ",(0,n.jsx)(r.strong,{children:"how"})," you want it done."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./9920e549358c.png",alt:"Side-by-side comparison of tools and Skills: tools connect to data, take actions, and run code — what Claude can do; Skills teach a procedure with just instructions, no code runs — how you want it done"})}),`
`,(0,n.jsx)(r.p,{children:"One more thing worth knowing: Skills don't load fully into context on startup. Only the name and description load at first. When your agent decides a Skill is relevant, it then loads the full Skill into context. That keeps your context lean even when many Skills are available."}),`
`,(0,n.jsx)(r.h2,{id:"uploading-a-skill",children:"Uploading a Skill"}),`
`,(0,n.jsx)(r.p,{children:"Skills are uploaded once to your workspace, then referenced by ID. You can upload directly on the Claude Platform, or do it programmatically:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`skill = client.skills.create(
    display_name="Status Report Generator",
    files=files_from_dir("status-report-skill"),  # folder containing SKILL.md
)

print(skill.id)  # reference this ID in future requests
`})}),`
`,(0,n.jsxs)(r.p,{children:["For this example, I want a ",(0,n.jsx)(r.strong,{children:"status report generator"}),". All the rules for what makes a good status report — sections, tone, how to summarize, how to handle blockers — live in a Skill packaged ahead of time. The activity log itself is just a string passed in at request time."]}),`
`,(0,n.jsx)(r.h2,{id:"attaching-a-skill-to-a-request",children:"Attaching a Skill to a request"}),`
`,(0,n.jsxs)(r.p,{children:["Skills attach to a request through the container configuration — a ",(0,n.jsx)(r.code,{children:"skills"})," array inside the container, where each entry names a ",(0,n.jsx)(r.code,{children:"skill_id"})," and ",(0,n.jsx)(r.code,{children:"version"}),". Here's the full call for the status report generator:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`response = client.messages.create(
    model="claude-opus-5",
    max_tokens=4096,
    container={
        "skills": [
            {
                "type": "custom",
                "skill_id": skill.id,
                "version": "latest",
            }
        ]
    },
    tools=[
        {
            "type": "code_execution_20250825",
            "name": "code_execution",
        }
    ],
    messages=[
        {
            "role": "user",
            "content": f"Generate the daily status report from this activity log:\\n\\n{activity_log}",
        }
    ],
)
`})}),`
`,(0,n.jsx)(r.p,{children:"A few things worth pointing out:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["We're calling the standard ",(0,n.jsx)(r.code,{children:"client.messages.create"}),", with no beta header. Skills are generally available on the Claude API, so the ",(0,n.jsx)(r.code,{children:"skills-2025-10-02"})," ",(0,n.jsx)(r.strong,{children:"beta header"})," is no longer required; requests that still send it continue to work unchanged."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"container.skills"})," is where the Skill attaches. It's a ",(0,n.jsx)(r.strong,{children:"list"}),", so you can layer multiple Skills onto one call."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Code execution"})," is turned on here too. It's required: on the API, Skills run inside the code execution tool's container, which is what lets Skill procedures do real work — like running scripts in a terminal."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"running-it",children:"Running it"}),`
`,(0,n.jsxs)(r.p,{children:["The output is a status report formatted exactly the way the Skill says to format it. Sections, tone, blocker handling — all of it comes from the ",(0,n.jsx)(r.code,{children:"SKILL.md"})," file you uploaded. The user prompt is one line; the procedure lives in the Skill."]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./0981b1204ddf.png",alt:"Terminal output of the generated daily status report, with Done and Blockers sections and a summary formatted by the Skill"})}),`
`,(0,n.jsx)(r.p,{children:"In a production app, this is how a team standardizes output across an entire feature. With this daily status report endpoint, every PM gets the same structure, the same tone, the same sections, in the same order — without anyone copy-pasting a template into a prompt."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"./e2968b870e00.png",alt:"A project management app with a Daily reports page, where each project's activity log has a one-click Generate report button backed by the Skill"})}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Skills package your procedures."})," A ",(0,n.jsx)(r.code,{children:"SKILL.md"})," file (plus any scripts and resources) teaches Claude how you want something done."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Tools vs. Skills:"})," tools are about what Claude can do; Skills are about how you want it done."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Skills load progressively."})," Only the name and description load at startup; the full Skill loads into context when the agent decides to use it."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Upload once"})," with ",(0,n.jsx)(r.code,{children:"client.skills.create"}),", then ",(0,n.jsx)(r.strong,{children:"attach"})," with ",(0,n.jsx)(r.code,{children:"container.skills"})," on any ",(0,n.jsx)(r.code,{children:"messages.create"})," call — a list, so you can layer multiple Skills."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pair with code execution"})," when the Skill's procedure needs to do real work."]}),`
`,(0,n.jsxs)(r.li,{children:["Reach for a Skill when the ",(0,n.jsx)(r.strong,{children:"how"})," matters as much as the ",(0,n.jsx)(r.strong,{children:"what"}),"."]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};