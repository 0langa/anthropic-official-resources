import{Gp as e,qp as t}from"../../../../../content-de-meta-e63dco2m.js";var n=e();function r(e){let r={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i,{youtubeId:"1m0huCacWPs",title:"Hooks",children:[(0,n.jsx)(r.p,{children:`Here's the problem with telling Claude to do something in a CLAUDE.md file:
it's a request, not a guarantee. You can write "always format after
editing" and Claude will usually listen. Usually. But on a long run you're
not watching, "usually" isn't good enough. A hook fixes that. A hook is
deterministic code that runs at a fixed point in the loop, so it can
guarantee behavior instead of hoping for it. It turns a rule from "Claude
usually listens" into "Claude can't skip it."`}),(0,n.jsx)(r.p,{children:"That's the whole pitch. Now let's look at how it actually works."})]}),`
`,(0,n.jsx)(r.h2,{id:"the-hook-events",children:"The hook events"}),`
`,(0,n.jsx)(r.p,{children:"Claude Code fires around 30 hook events over the course of a session. You don't need to know all of them. There's a small handful you'll reach for again and again, and they line up with points in the agentic loop where you'd want to step in."}),`
`,(0,n.jsx)(r.p,{children:"Here's how they sit in the loop. A session starts, prompts come in, tools get called, and the turn eventually ends. Each of those moments has a hook you can hang code on."}),`
`,(0,n.jsx)(r.p,{children:"The ones worth knowing:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"PreToolUse"})," fires before a tool call. This is your enforcement primitive. It's the one that can stop something before it happens."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"PostToolUse"})," fires after a successful tool call. This is usually where auto-formatting or an auto-lint goes."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Stop"}),` fires when Claude wants to end its turn. You can refuse and say "no, you're not done yet" if some condition isn't met. There's a matching `,(0,n.jsx)(r.strong,{children:"SubagentStop"})," for when a sub-agent finishes."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"PreCompact"})," and ",(0,n.jsx)(r.strong,{children:"PostCompact"})," fire before and after compaction."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"InstructionsLoaded"})," fires when a CLAUDE.md or rule file loads. Handy for auditing what actually made it into context."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"SessionStart"})," fires at the start and primes the environment. Use the ",(0,n.jsx)(r.code,{children:"startup"})," source if you only want it on fresh starts."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["One thing that trips people up: to re-inject context after compaction, don't use PostCompact. Use SessionStart with the ",(0,n.jsx)(r.code,{children:"compact"})," matcher. That's the one that actually gets its output back into the conversation."]}),`
`,(0,n.jsx)(r.h2,{id:"pretooluse-returning-a-decision-as-json",children:"PreToolUse: returning a decision as JSON"}),`
`,(0,n.jsxs)(r.p,{children:["PreToolUse is where the real power is, because it can block a tool call before it runs. The way you talk back to Claude is by printing JSON and exiting zero. The key field is ",(0,n.jsx)(r.code,{children:"permissionDecision"}),", and it takes one of three values:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"allow"})," — let the call through"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"deny"})," — stop the call"]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"ask"})," — hand it back to the user to decide"]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["There's technically a fourth value, ",(0,n.jsx)(r.code,{children:"defer"}),", but it only applies to non-interactive ",(0,n.jsx)(r.code,{children:"-p"})," runs where a calling process pauses the tool and resumes it later. You'll rarely reach for it."]}),`
`,(0,n.jsx)(r.p,{children:"The shape looks like this:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "...",
    "updatedInput": {
      "command": "..."
    }
  }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["Notice ",(0,n.jsx)(r.code,{children:"updatedInput"}),". Instead of blocking a call, you can rewrite it. That's how you'd redact a secret out of a bash command and still let it run. One catch: ",(0,n.jsx)(r.code,{children:"updatedInput"})," replaces the ",(0,n.jsx)(r.em,{children:"whole"})," input object, so you have to echo back the fields you aren't changing, or you'll lose them."]}),`
`,(0,n.jsx)(r.h2,{id:"exit-codes-for-hooks-that-dont-return-json",children:"Exit codes, for hooks that don't return JSON"}),`
`,(0,n.jsx)(r.p,{children:"Not every hook needs to speak JSON. For simpler hooks, exit codes do the job. There are three numbers that matter."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"0 is success."})," If standard out is JSON, Claude parses it. Plain text is ignored on most events, but on SessionStart, UserPromptSubmit, and UserPromptExpansion, plain text gets added to context. That's exactly what makes a state-preserver hook work."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"2 is a blocking error."})," Standard error gets fed back to Claude as context. This is the blocking exit code almost everywhere."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Anything else"})," is non-blocking. Standard error gets logged, and Claude carries on."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["The one that catches people out is exit code 1. It ",(0,n.jsx)(r.em,{children:"feels"})," like an error, but it does not block. Claude runs the command anyway. So if you meant to stop something, exit 2, not 1."]}),`
`,(0,n.jsx)(r.p,{children:"A couple more wrinkles. Exit 2 can even block Stop, which is how you tell Claude it's not done. But PostToolUse fires after the tool already ran, so blocking there is too late to stop the call, though it can still feed text back to Claude. And a few events ignore blocking entirely, like Notification and SessionStart. They'll show your standard error and carry on regardless."}),`
`,(0,n.jsx)(r.h2,{id:"a-real-guardrail-redact-instead-of-block",children:"A real guardrail: redact instead of block"}),`
`,(0,n.jsxs)(r.p,{children:["Let's tie it together with something practical. Say you want a PreToolUse guardrail on the Bash tool. The matcher picks the tool to watch, and an optional ",(0,n.jsx)(r.code,{children:"if"})," clause can narrow it to a specific command."]}),`
`,(0,n.jsxs)(r.p,{children:["The obvious move is to return ",(0,n.jsx)(r.code,{children:"deny"})," and stop a dangerous call. That's good. But the lesser-known and more interesting move is to return ",(0,n.jsx)(r.code,{children:"updatedInput"})," to rewrite the call. That's how you strip a secret out of a command and still let it run, instead of just refusing."]}),`
`,(0,n.jsxs)(r.p,{children:["Here's what that looks like in practice. Claude is asked to run a command that includes a live-looking secret. The hook intercepts it, spots the ",(0,n.jsx)(r.code,{children:"sk_live_"})," pattern, and swaps it for a placeholder before the command ever executes."]}),`
`,(0,n.jsx)(r.p,{children:"The command still ran. The work still got done. But the secret never made it through. That's the difference between blocking and redacting, and it's the kind of thing a hook can enforce every single time."}),`
`,(0,n.jsx)(r.h2,{id:"preserving-state-across-a-compact",children:"Preserving state across a compact"}),`
`,(0,n.jsxs)(r.p,{children:["One more pattern worth setting up. When Claude compacts a long conversation, it drops a lot of detail. A SessionStart hook with the ",(0,n.jsx)(r.code,{children:"compact"})," matcher runs right after compaction. Have it print a short summary of the files you've been working on. That summary goes back into context, so Claude picks up where it left off instead of starting cold."]}),`
`,(0,n.jsx)(r.h2,{id:"wrapping-up",children:"Wrapping up"}),`
`,(0,n.jsx)(r.p,{children:"Hooks turn a rule Claude usually follows into one it always follows. Reach past auto-formatting: guard tools with PreToolUse, gate the turn with Stop, and preserve state across a compact. The setup takes a little effort up front, but it pays back the first time it catches something on a run you weren't even watching."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};