import{n as e,r as t}from"../../../../../react-ml7fx0sn.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{CodeCommand:i,Expandable:o,GenericPrompt:s,ResourceWidget:c}=r;return i||a("CodeCommand",!0),o||a("Expandable",!0),s||a("GenericPrompt",!0),c||a("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Claude's summary of a task can be true and still leave out changes you'd want to know about. The session that wrote the code isn't the best judge of it either. ",(0,n.jsx)(r.strong,{children:"So check a change twice before you keep it."})," Read the diff yourself, then have Claude review it from a clean context, without this session's history."]}),`
`,(0,n.jsx)(r.h2,{id:"read-the-diff",children:"Read the diff"}),`
`,(0,n.jsxs)(r.p,{children:["Start with the diff, which shows every line removed and added, file by file. ",(0,n.jsxs)(r.strong,{children:["Run ",(0,n.jsx)(r.code,{children:"/diff"})," to see your uncommitted changes."]})," It can also show what each of Claude's turns changed."]}),`
`,(0,n.jsx)(i,{children:"/diff"}),`
`,(0,n.jsxs)(r.p,{children:["If it opens above the prompt, use the up and down arrows to move between files and ",(0,n.jsx)(r.code,{children:"Enter"})," to open one. If it opens as a panel beside the conversation, click a file to jump to it. The panel hides test files and generated files until you click their count line."]}),`
`,(0,n.jsxs)(o,{title:"Nothing shows up in /diff?",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"/diff"})," and ",(0,n.jsx)(r.code,{children:"/code-review"})," read from git, the version-control tool most projects use. So your project needs to be in a git repository. This course doesn't teach git itself."]}),(0,n.jsx)(r.p,{children:"If your project isn't in git yet, ask Claude to set it up and make a first commit before your next task. For the change in front of you, ask for a review in plain words."}),(0,n.jsxs)(r.p,{children:["If you use another version control system, read the change in your own tool. Then ask Claude in plain words to review the files it touched. ",(0,n.jsx)(r.code,{children:"/rewind"})," still works because Claude tracks its own edits."]})]}),`
`,(0,n.jsx)(r.p,{children:"As you read, look for three things every time:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Changes you didn't ask for, such as an edited config value or a rewritten helper."}),`
`,(0,n.jsx)(r.li,{children:"Tests that got weaker because they were skipped, deleted, or loosened until they passed."}),`
`,(0,n.jsx)(r.li,{children:"New packages and hard-coded values, such as a dependency added for one function or a key written into the code."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Try it on a small signup-form task, where three of the eight files deserve a second look. You don't need to follow every line. Start with the file names, then compare the removed and added lines."}),`
`,(0,n.jsx)(c,{name:"SummaryOrDiff",title:"Code review: compare Claude's summary with the diff"}),`
`,(0,n.jsx)(r.h2,{id:"undo-a-wrong-change",children:"Undo a wrong change"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["If the whole change is wrong, run ",(0,n.jsx)(r.code,{children:"/rewind"}),"."]})," You can also press ",(0,n.jsx)(r.code,{children:"Esc"}),' twice on an empty prompt. Pick the prompt that produced the change, then choose "Restore code and conversation."']}),`
`,(0,n.jsx)(r.p,{children:"Rewind rolls back the files Claude edited with its file editing tools in your conversation. It also undoes changes that shell commands made to those files afterward. It doesn't roll back files changed only by shell commands, such as a package install."}),`
`,(0,n.jsx)(r.h2,{id:"ask-for-a-second-opinion",children:"Ask for a second opinion"}),`
`,(0,n.jsxs)(r.p,{children:["Your own read is the first check. The second is the reviewer that the Explore → Plan → Code → Commit lesson asked for. A long session carries everything it has read and decided, which is history you don't want in a reviewer. ",(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.code,{children:"/code-review"})," starts from a clean context, with none of that history."]})," It reports what it finds and edits nothing unless you ask."]}),`
`,(0,n.jsx)(i,{children:"/code-review"}),`
`,(0,n.jsx)(r.p,{children:"The review runs in the background for seconds to a few minutes, then its findings arrive in your conversation. It counts against your usage like any other task, so save it for changes that deserve it."}),`
`,(0,n.jsx)(r.p,{children:"You can also ask in plain words. If Claude answers inline and doesn't start a review, run the command yourself."}),`
`,(0,n.jsx)(s,{children:"Review the changes you just made. Report problems; don't fix anything yet."}),`
`,(0,n.jsx)(o,{title:"Want a lighter or a deeper review?",children:(0,n.jsxs)(r.p,{children:["Add an effort level to the command. ",(0,n.jsx)(r.code,{children:"/code-review low"})," reports only the findings it's most sure of, so you see fewer false alarms. ",(0,n.jsx)(r.code,{children:"/code-review high"})," casts a wider net, so it may include findings it's less sure of. Later reviews reuse the last level you typed."]})}),`
`,(0,n.jsx)(r.p,{children:"For the signup-form change, the review came back with four findings:"}),`
`,(0,n.jsx)(c,{name:"ReviewOutput",title:"Code review: what /code-review reported"}),`
`,(0,n.jsx)(r.h2,{id:"decide-what-to-do-with-each-finding",children:"Decide what to do with each finding"}),`
`,(0,n.jsx)(r.p,{children:"Not every finding needs a fix, so sort each one into one of three piles:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Fix now."})," The problem is real and it matters."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Ask why."})," You can't confirm the finding, or it seems off. A reviewer reading the change cold can miss things too."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leave it."})," The problem is real but small, so batch it with others for a later session."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Try sorting the four findings from the signup-form review:"}),`
`,(0,n.jsx)(c,{name:"TriageFindings",title:"Code review: decide what to do with each finding"}),`
`,(0,n.jsx)(r.p,{children:"To ask why, quote the finding back and have Claude check again:"}),`
`,(0,n.jsx)(s,{children:"You reported that isValidEmail doesn't trim spaces, but line 4 calls trim(). Check again and tell me whether the finding stands."}),`
`,(0,n.jsx)(r.p,{children:"When you ask for a fix, ask for evidence with it:"}),`
`,(0,n.jsx)(s,{children:"Fix the first finding: don't skip the empty-email test and restore the original assertion. Then run the tests and show me the output."}),`
`,(0,n.jsx)(r.p,{children:"If a fix grows into a large change of its own, run the review again."}),`
`,(0,n.jsx)(r.h2,{id:"when-to-do-both-checks",children:"When to do both checks"}),`
`,(0,n.jsxs)(r.p,{children:["A one-line change often needs only a glance at the diff. ",(0,n.jsx)(r.strong,{children:"Do both checks when a change is big, risky, or about to be shared:"})]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"It's too big to hold in your head."}),`
`,(0,n.jsx)(r.li,{children:"It touches something sensitive or does something destructive."}),`
`,(0,n.jsx)(r.li,{children:"You're about to hand the work to a teammate."}),`
`]}),`
`,(0,n.jsx)(o,{title:"Is this the same as Claude Code Review?",children:(0,n.jsxs)(r.p,{children:["No. ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/code-review",children:"Claude Code Review"})," is a separate product for teams. An Owner of your Claude organization turns it on for a GitHub repository, and it posts findings on pull requests. Nothing in this lesson needs it."]})}),`
`,(0,n.jsx)(r.h2,{id:"recap",children:"Recap"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["Read the diff with ",(0,n.jsx)(r.code,{children:"/diff"})," before you trust the summary."]}),`
`,(0,n.jsxs)(r.li,{children:["Get a second opinion from a clean context with ",(0,n.jsx)(r.code,{children:"/code-review"}),"."]}),`
`,(0,n.jsx)(r.li,{children:"Fix, ask why, or leave each finding, and ask for evidence with every fix."}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["If the reviewer keeps flagging the same issue, write a rule for Claude to read at the start of every session. That rule goes in ",(0,n.jsx)(r.code,{children:"CLAUDE.md"}),", which is next."]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}i.uses=["CodeCommand","Expandable","GenericPrompt","ResourceWidget"];export{i as default};