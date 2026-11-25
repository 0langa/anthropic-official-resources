import{n as e,r as t}from"../../../../../react-ml7fx0sn.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...t.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"1m0huCacWPs",title:"Hooks",children:(0,n.jsx)(r.p,{children:`A rule in CLAUDE.md is only a request, so Claude usually follows it but can
skip it. On a long run you're not watching, "usually" isn't good enough. A hook closes that
gap. It's code that runs at a fixed point in Claude's loop, so Claude
can't skip it.`})}),`
`,(0,n.jsx)(r.h2,{id:"how-a-hook-works",children:"How a hook works"}),`
`,(0,n.jsx)(r.p,{children:"Suppose you want to check Claude's shell commands for secrets before they run. A hook does that with three parts:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"An event"})," sets when the hook runs, here right before a tool call."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"A matcher"})," narrows the event, here to Bash and Monitor, two tools that run shell commands."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"A command"})," does the work, here a script that looks for secrets."]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["All three go in a settings file. Add this block to your project's ",(0,n.jsx)(r.code,{children:".claude/settings.json"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash|Monitor",
        "hooks": [
          {
            "type": "command",
            "command": "\${CLAUDE_PROJECT_DIR}/.claude/hooks/redact-secrets.sh",
            "args": []
          }
        ]
      }
    ]
  }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["Monitor runs commands in the background. The matcher names it because a hook that matches only ",(0,n.jsx)(r.code,{children:"Bash"})," can't rewrite ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/hooks#match-monitor-commands",children:"Monitor commands"}),"."]}),`
`,(0,n.jsx)(r.p,{children:"When the event fires, Claude Code sends your script the details as JSON on standard input. The script answers with an exit code or by printing JSON, and that answer decides what happens next. You'll write this script once you've seen both kinds of answer."}),`
`,(0,n.jsxs)(r.p,{children:["Run ",(0,n.jsx)(r.code,{children:"/hooks"})," to check that the hook is registered. To narrow a tool hook to one command, add a field such as ",(0,n.jsx)(r.code,{children:'"if": "Bash(curl *)"'})," next to ",(0,n.jsx)(r.code,{children:"command"}),". Leave ",(0,n.jsx)(r.code,{children:"if"})," off this hook, or Monitor commands run with the secret still in them."]}),`
`,(0,n.jsx)(r.h2,{id:"pick-the-event",children:"Pick the event"}),`
`,(0,n.jsxs)(r.p,{children:["The event comes first because it decides what your hook can change. ",(0,n.jsx)(r.strong,{children:"Only a hook that runs before an action can stop it."})," Claude Code has around 30 events, and the ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/hooks",children:"hooks reference"})," lists them all. These are the ones you'll use most:"]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"To do this"}),(0,n.jsx)(r.th,{children:"Use"}),(0,n.jsx)(r.th,{children:"It fires"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Stop or change a tool call"}),(0,n.jsx)(r.td,{children:"PreToolUse"}),(0,n.jsx)(r.td,{children:"Before a tool call"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Format or lint after an edit"}),(0,n.jsx)(r.td,{children:"PostToolUse"}),(0,n.jsx)(r.td,{children:"After a tool call succeeds"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Keep Claude working until a check passes"}),(0,n.jsx)(r.td,{children:"Stop"}),(0,n.jsx)(r.td,{children:"When Claude wants to end its turn"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Do the same for a subagent"}),(0,n.jsx)(r.td,{children:"SubagentStop"}),(0,n.jsx)(r.td,{children:"When a subagent finishes"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Set up the environment or add context"}),(0,n.jsx)(r.td,{children:"SessionStart"}),(0,n.jsx)(r.td,{children:"When a session starts"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"See which instructions Claude loaded"}),(0,n.jsx)(r.td,{children:"InstructionsLoaded"}),(0,n.jsx)(r.td,{children:"When a CLAUDE.md or rule file loads"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Act around compaction"}),(0,n.jsx)(r.td,{children:"PreCompact, PostCompact"}),(0,n.jsx)(r.td,{children:"Before and after compaction"})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:["SessionStart also fires on other starts, such as after a compaction. Use the ",(0,n.jsx)(r.code,{children:"startup"})," matcher if you only want fresh ones."]}),`
`,(0,n.jsx)(r.h2,{id:"block-with-an-exit-code",children:"Block with an exit code"}),`
`,(0,n.jsxs)(r.p,{children:["The simplest answer a script can give is its exit code. ",(0,n.jsx)(r.strong,{children:"To block an action, exit 2."})," Exit 1 feels like an error, but it doesn't block, so Claude runs the command anyway."]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Exit code"}),(0,n.jsx)(r.th,{children:"What happens"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"Success, and Claude Code reads any JSON you printed"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"2"}),(0,n.jsx)(r.td,{children:"The action is blocked, on events that can block"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Anything else"}),(0,n.jsx)(r.td,{children:"The action goes ahead by default"})]})]})]}),`
`,(0,n.jsx)(r.p,{children:"What exit 2 does depends on when the event fires:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"On PreToolUse, the tool call doesn't run, and Claude reads your standard error as the reason."}),`
`,(0,n.jsx)(r.li,{children:"On Stop, Claude keeps working and reads your standard error, so use it to say what's left to do."}),`
`,(0,n.jsx)(r.li,{children:"On PostToolUse, the tool already ran, so nothing stops. Claude still reads your standard error."}),`
`,(0,n.jsx)(r.li,{children:"On SessionStart and Notification, nothing is blocked. SessionStart shows your standard error to you only, and Notification ignores it."}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"allow-deny-or-ask-with-json",children:"Allow, deny, or ask with JSON"}),`
`,(0,n.jsxs)(r.p,{children:["An exit code can only block or not block. For a finer answer, have a PreToolUse hook print JSON and exit 0. The ",(0,n.jsx)(r.code,{children:"permissionDecision"})," field carries your answer:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"allow"})," lets the call through."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"deny"})," stops the call."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"ask"})," hands the decision to you."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"This answer stops a push to main and tells Claude what to do instead:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Don't push to main. Open a pull request instead."
  }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:["JSON also lets you rewrite a call by adding ",(0,n.jsx)(r.code,{children:"updatedInput"}),". With ",(0,n.jsx)(r.code,{children:"ask"}),", you see the rewritten call and approve it. With ",(0,n.jsx)(r.code,{children:"allow"}),", it runs without a prompt:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "ask",
    "updatedInput": {
      "command": "..."
    }
  }
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.code,{children:"updatedInput"})," replaces the whole input object, so include the fields you aren't changing."]})," Any field you leave out is lost."]}),`
`,(0,n.jsx)(r.h2,{id:"build-the-guardrail",children:"Build the guardrail"}),`
`,(0,n.jsx)(r.p,{children:"Rewriting is what the secrets check needs. When Claude is about to run a command with a live key in it, you could deny the call. Or you can swap the key for a placeholder, so the command runs without the secret."}),`
`,(0,n.jsxs)(r.p,{children:["Save this as ",(0,n.jsx)(r.code,{children:".claude/hooks/redact-secrets.sh"}),", the script your settings file points to. It needs ",(0,n.jsx)(r.code,{children:"jq"}),", and you make it executable with ",(0,n.jsx)(r.code,{children:"chmod +x"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`#!/bin/bash
# Replaces live-looking keys before the command runs.
jq 'if (.tool_input.command // "" | test("sk_live_\\\\w+")) then {
  hookSpecificOutput: {
    hookEventName: "PreToolUse",
    permissionDecision: "ask",
    permissionDecisionReason: "Replaced a live key with a placeholder",
    updatedInput: (.tool_input | .command |= gsub("sk_live_\\\\w+"; "REDACTED"))
  }
} else empty end'
`})}),`
`,(0,n.jsxs)(r.p,{children:["The script reads the command from ",(0,n.jsx)(r.code,{children:"tool_input.command"})," in the JSON it receives. If it finds ",(0,n.jsx)(r.code,{children:"sk_live_"}),", it swaps the key for ",(0,n.jsx)(r.code,{children:"REDACTED"})," and keeps the other fields. If it finds nothing, it prints nothing, so the call goes on as usual."]}),`
`,(0,n.jsxs)(r.p,{children:["It returns ",(0,n.jsx)(r.code,{children:"ask"}),", so you approve each rewritten command. Returning ",(0,n.jsx)(r.code,{children:"allow"})," would skip that prompt for every command the pattern matches."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"A hook that fails usually doesn't block."})," If the path is wrong or ",(0,n.jsx)(r.code,{children:"jq"})," is missing, the call goes on with the key still in it. So test it by asking Claude to run ",(0,n.jsx)(r.code,{children:"echo sk_live_test123"}),", and check that the prompt shows ",(0,n.jsx)(r.code,{children:"REDACTED"}),". Then commit the script and the settings file together so your team gets both."]}),`
`,(0,n.jsxs)(r.p,{children:["You can make this hook ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/hooks#block-the-action-when-a-hook-fails",children:"block when it fails"}),". That blocks every Bash and Monitor call for anyone who can't run the script."]}),`
`,(0,n.jsx)(r.h2,{id:"keep-context-after-a-compact",children:"Keep context after a compact"}),`
`,(0,n.jsxs)(r.p,{children:["Hooks can also give Claude information. Compacting a long conversation drops a lot of detail, so Claude can lose track of your files. ",(0,n.jsxs)(r.strong,{children:["To put that back, use SessionStart with the ",(0,n.jsx)(r.code,{children:"compact"})," matcher."]})," The plain text it prints goes into Claude's context, while PostCompact's output doesn't. This hook lists your uncommitted changes:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "compact",
        "hooks": [{ "type": "command", "command": "git status --short" }]
      }
    ]
  }
}
`})}),`
`,(0,n.jsx)(r.p,{children:"UserPromptSubmit and UserPromptExpansion add plain text to context the same way. Most other events ignore it."}),`
`,(0,n.jsx)(r.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Put a rule in a hook when it must hold on a run you aren't watching."}),`
`,(0,n.jsx)(r.li,{children:"Guard tools with PreToolUse, gate the end of a turn with Stop, and restore context with SessionStart."}),`
`,(0,n.jsx)(r.li,{children:"Exit 2 to block, because exit 1 lets the action through."}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}i.uses=["LessonVideo"];export{i as default};