import{Qp as e,em as t}from"../../../../../content-de-meta-b64hm6c1.js";var n=e();function r(e){let r={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i,{youtubeId:"o9-NIQF9tNw",title:"A CLAUDE.md that follows",children:[(0,n.jsx)(r.p,{children:`Here's a trap that catches almost everyone: your CLAUDE.md file keeps
growing. You hit a problem, you add a rule. You hit another, you add another
rule. Before long you've got one giant file, and Claude starts ignoring
parts of it. That's not a bug in Claude. It's how the file works.`}),(0,n.jsx)(r.p,{children:`The key thing to understand is that CLAUDE.md is not enforced configuration.
It's guidance. Every line competes with every other line for Claude's
attention. The longer the file gets, the more it competes with itself, and
the less reliably Claude follows any single rule. So the goal isn't to write
down everything. The goal is to keep the file tight. The leaner the file,
the more of it Claude actually follows.`})]}),`
`,(0,n.jsx)(r.h2,{id:"first-ask-if-claudemd-is-even-the-right-tool",children:"First, ask if CLAUDE.md is even the right tool"}),`
`,(0,n.jsx)(r.p,{children:"Before you write a rule, ask whether it belongs in CLAUDE.md at all. Some rules are guidance, and some rules are hard lines that must never be crossed. Those are two different jobs."}),`
`,(0,n.jsx)(r.p,{children:`Take a rule like "never push to main." If you put that in CLAUDE.md, you're hoping Claude reads it and respects it. Most of the time it will. But "most of the time" isn't good enough for something that dangerous. A hard rule like that belongs in a pre-tool-use hook instead.`}),`
`,(0,n.jsx)(r.p,{children:"The difference matters. A hook is code that runs before Claude takes an action, and it can actually block the action. So even if Claude does try to push to main, the hook stops it. That's real enforcement, not a polite request. Move your hard rules to hooks and let CLAUDE.md handle the softer conventions."}),`
`,(0,n.jsx)(r.h2,{id:"the-four-locations",children:"The four locations"}),`
`,(0,n.jsx)(r.p,{children:"CLAUDE.md isn't just one file sitting in your project. There are four places it can live, and Claude loads all of them together at launch. Nothing gets dropped, and they stack."}),`
`,(0,n.jsx)(r.p,{children:"Here's what each one is for:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Managed policy"})," — the org-level file your platform team controls. You can't exclude it, so org policy is always in play."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"User"})," — your personal preferences that follow you across every project on your machine."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Project"})," — the file shared with your team, checked into the repo."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Local"})," — ignored by git. Your personal notes for this one repository only."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"That last one, local, is easy to overlook but really handy. Say you're refactoring off in your own branch and you want Claude to hold some architectural decisions in mind while you work. That doesn't belong in the shared project file where it'd affect your whole team. It goes in local, where it's just yours for this repo."}),`
`,(0,n.jsx)(r.h2,{id:"split-up-a-big-file-with-imports",children:"Split up a big file with imports"}),`
`,(0,n.jsx)(r.p,{children:"When your project file starts getting long, you can break it into pieces using the path-to-file import syntax. Instead of one wall of text, you point to other files:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`@.claude/conventions/code-style.md
@.claude/conventions/testing.md
@.claude/conventions/workflow.md
`})}),`
`,(0,n.jsx)(r.p,{children:"This is great for organizing. But know exactly what it buys you, because it's easy to get the wrong idea. When Claude launches, it expands those imported files inline, right where you referenced them. So imports help you keep things tidy, but everything still loads up front. They do not reduce the amount of context Claude has to read. Use imports to organize, not to shrink the load."}),`
`,(0,n.jsx)(r.h2,{id:"phrasing-is-what-makes-rules-stick",children:"Phrasing is what makes rules stick"}),`
`,(0,n.jsx)(r.p,{children:"Once you've decided a rule belongs in CLAUDE.md, whether Claude actually obeys it comes down to how you phrase it. Most rules fail because they're vague. Here's how to fix that."}),`
`,(0,n.jsx)(r.h3,{id:"be-specific-and-checkable",children:"Be specific and checkable"}),`
`,(0,n.jsx)(r.p,{children:`Don't write "follow best practices." Do you even know exactly what that means? If you can't check whether it was followed, neither can Claude. Compare these two:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Vague: ",(0,n.jsx)(r.em,{children:'"Follow best practices for API routes."'})]}),`
`,(0,n.jsxs)(r.li,{children:["Specific: ",(0,n.jsxs)(r.em,{children:['"Put new API routes in ',(0,n.jsx)(r.code,{children:"src/api/handlers"}),', one per file."']})]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The second one is explicit. You can look at the result and immediately tell if it was done right. That's the bar every rule should clear."}),`
`,(0,n.jsx)(r.h3,{id:"name-the-replacement-dont-just-ban-something",children:"Name the replacement, don't just ban something"}),`
`,(0,n.jsx)(r.p,{children:"When you tell Claude not to do something, say what to do instead. Otherwise you've left the door open."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Leaves it open: ",(0,n.jsx)(r.em,{children:`"Don't use default exports."`})," Okay, but then what?"]}),`
`,(0,n.jsxs)(r.li,{children:["Closes it: ",(0,n.jsx)(r.em,{children:'"Use named exports, not default exports."'})]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The second version names the replacement, so there's nothing left to misinterpret."}),`
`,(0,n.jsx)(r.h3,{id:"emphasis-is-a-budget",children:"Emphasis is a budget"}),`
`,(0,n.jsx)(r.p,{children:`Words like "IMPORTANT" and "YOU MUST" do raise a rule's priority. But only relative to everything quieter around it. If every rule shouts, then nothing stands out and the emphasis means nothing. So treat emphasis like a budget. Spend it on the two or three rules that really hurt when they get broken, and let the rest sit at normal volume.`}),`
`,(0,n.jsx)(r.h2,{id:"keep-the-file-under-revision",children:"Keep the file under revision"}),`
`,(0,n.jsx)(r.p,{children:"Your CLAUDE.md file is never finished. Treat it like living code that keeps getting edited."}),`
`,(0,n.jsx)(r.p,{children:`When Claude does the wrong thing, don't just sigh and fix it by hand. Treat it as a bug report against your CLAUDE.md file. You can even tell Claude directly: "add that to the CLAUDE.md file," and it'll write the rule for you. That way the file gets better every time something goes wrong.`}),`
`,(0,n.jsx)(r.h2,{id:"the-bottom-line",children:"The bottom line"}),`
`,(0,n.jsx)(r.p,{children:"Treat your CLAUDE.md like production code. If you can't justify a line, delete it. To keep the file lean and followable:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Move hard rules to hooks, where they're actually enforced."}),`
`,(0,n.jsx)(r.li,{children:"Organize long files with imports (just remember they don't reduce context)."}),`
`,(0,n.jsx)(r.li,{children:"Make every rule specific and checkable, and name the replacement."}),`
`,(0,n.jsx)(r.li,{children:"Spend your emphasis budget on the few rules that matter most."}),`
`,(0,n.jsx)(r.li,{children:"Keep revising the file whenever Claude gets something wrong."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"The whole idea is simple. The leaner the file, the more of it Claude follows."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};