import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...e(),...t.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"nVGcWczH8fk",title:"GitHub Actions and Code Review",children:(0,n.jsx)(r.p,{children:`The best place to hand off repetitive work is the pull request. It's where
review happens, where changes land, and where a lot of your busywork lives.
There are two ways to put Claude to work here, and they solve different
problems. One is a managed service you turn on. The other is a GitHub
Action you wire up yourself. Let's walk through both and figure out when to
reach for each.`})}),`
`,(0,n.jsx)(r.h2,{id:"the-managed-path-code-review",children:"The managed path: Code Review"}),`
`,(0,n.jsx)(r.p,{children:"The simplest option is Code Review. It's an Anthropic-hosted service that reviews your pull requests through the Claude GitHub app. There's nothing for you to build or host. You turn it on, and it starts posting findings as inline comments right on the lines that matter."}),`
`,(0,n.jsx)(r.p,{children:"An organization admin enables it from the Claude Code admin settings. You'll find a Code review section with a Configure button that hooks it up to your repositories."}),`
`,(0,n.jsx)(r.p,{children:"From there the admin installs the Claude GitHub app, picks which repos it watches, and decides when it runs. You have a few choices for timing:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Once when a PR opens"}),`
`,(0,n.jsx)(r.li,{children:"On every push to the PR"}),`
`,(0,n.jsxs)(r.li,{children:["Only when someone comments ",(0,n.jsx)(r.code,{children:"@claude review"})]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Once it's on, everything runs on Anthropic's infrastructure. A set of review agents analyzes the diff against your full codebase, not just the changed lines in isolation. Then it posts findings as inline comments on the specific lines, tagged by severity, with a summary table in the check run."}),`
`,(0,n.jsx)(r.p,{children:"Here's what one of those findings looks like. It lands as a comment from Claude, right on the line, with a clear explanation and a suggested fix."}),`
`,(0,n.jsx)(r.p,{children:"The nice part is it deduplicates and ranks the findings. So instead of a wall of nitpicks, you read a handful of real issues worth your attention."}),`
`,(0,n.jsx)(r.h2,{id:"what-code-review-will-and-wont-do",children:"What Code Review will and won't do"}),`
`,(0,n.jsx)(r.p,{children:"A couple of things to keep in mind about the boundaries here:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"It never approves or blocks the PR. The judgment call stays with a human. Claude flags things; you decide."}),`
`,(0,n.jsx)(r.li,{children:"There's no managed autofix. The service posts findings only."}),`
`,(0,n.jsx)(r.li,{children:"It's a research preview right now, available on team and enterprise plans, so expect the behavior to keep moving."}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:["Since there's no autofix in the service, applying a finding is a local move. From your own terminal, the ",(0,n.jsx)(r.code,{children:"/code-review"})," command reviews a diff, and its ",(0,n.jsx)(r.code,{children:"--fix"})," flag applies the findings to your working tree. So the flow is: Claude finds it in the PR, you pull it down and fix it locally."]}),`
`,(0,n.jsx)(r.h2,{id:"the-do-it-yourself-path-the-github-action",children:"The do-it-yourself path: the GitHub Action"}),`
`,(0,n.jsx)(r.p,{children:"Code Review handles review. When the job goes beyond review, you reach for the GitHub Action. This is for custom CI: implementing changes from a comment, running scheduled reports, anything you'd normally write a workflow for. It runs the agent on PR comments, scheduled jobs, and any GitHub event."}),`
`,(0,n.jsxs)(r.p,{children:["Setup starts inside Claude Code. Run the ",(0,n.jsx)(r.code,{children:"/install-github-app"})," command. You'll need repo admin to do this. The slash command walks you through installing the GitHub app and setting the Anthropic API key secret on the repo."]}),`
`,(0,n.jsxs)(r.p,{children:["The action itself is ",(0,n.jsx)(r.code,{children:"anthropics/claude-code-action@v1"}),". Here are the inputs you'll actually use:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"anthropic_api_key"})," — required when the run calls the Claude API, unless you authenticate with ",(0,n.jsx)(r.code,{children:"claude_code_oauth_token"})," (from a Claude subscription) or with workload identity federation (set up through a Claude Console service account, so no stored secret). Not used with the cloud providers below."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"github_token"})," — optional. Leave it out and the action authenticates as the Claude GitHub app you installed at setup. Pass a token only to override that."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"trigger_phrase"})," — what the action listens for in comments. Defaults to ",(0,n.jsx)(r.code,{children:"@claude"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"use_bedrock"})," / ",(0,n.jsx)(r.code,{children:"use_vertex"})," / ",(0,n.jsx)(r.code,{children:"use_foundry"})," — route the run through Amazon Bedrock, Google Cloud's Agent Platform, or Microsoft Foundry instead of the Claude API, signing in with your cloud account rather than an API key."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"prompt"})," — the instruction for an automated run. Set it and Claude runs on the event without waiting for a mention. Leave it out and the action waits for the trigger phrase."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"claude_args"})," — a string of CLI arguments passed straight through to Claude Code."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"a-workflow-that-responds-to-claude",children:"A workflow that responds to @claude"}),`
`,(0,n.jsxs)(r.p,{children:["Drop a workflow into ",(0,n.jsx)(r.code,{children:".github/workflows/claude.yaml"})," and it listens for ",(0,n.jsx)(r.code,{children:"@claude"})," on PR comments and issue comments. Under the job's ",(0,n.jsx)(r.code,{children:"permissions"}),", grant ",(0,n.jsx)(r.code,{children:"id-token: write"})," so the action can sign in as the Claude GitHub app. The core step looks like this:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:`- uses: anthropics/claude-code-action@v1
  with:
    anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
    trigger_phrase: "@claude"
    claude_args: "--max-turns 5 --model claude-sonnet-5"
`})}),`
`,(0,n.jsxs)(r.p,{children:["Now someone writes ",(0,n.jsx)(r.code,{children:"@claude implement the spec in the linked Linear issue"})," on a pull request, and the action picks it up. Claude pushes commits and posts comments describing what it did."]}),`
`,(0,n.jsx)(r.h2,{id:"a-workflow-that-runs-on-a-schedule",children:"A workflow that runs on a schedule"}),`
`,(0,n.jsxs)(r.p,{children:["The same action works for a daily rollup. A cron trigger fires at, say, 9:00 UTC, the action runs, and Claude posts the results. You can also add a ",(0,n.jsx)(r.code,{children:"workflow_dispatch"})," trigger so you can kick it off manually from the Actions tab."]}),`
`,(0,n.jsx)(r.p,{children:"When the action runs, you can watch it work through the steps in the Actions tab, just like any other GitHub workflow."}),`
`,(0,n.jsx)(r.h2,{id:"tuning-the-run-with-claudeargs",children:"Tuning the run with claude_args"}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"claude_args"})," line is where the fine-tuning happens. A few knobs worth knowing:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"--max-turns 5"})," puts a hard cap on the agent loop, so it can't run forever."]}),`
`,(0,n.jsx)(r.li,{children:"Permission mode. For an unattended job you'll want it to not stop and ask, since there's no one there to answer."}),`
`,(0,n.jsx)(r.li,{children:"Allowed tools. Give the job exactly what it needs and nothing more. For a report, that means read-only."}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"which-one-should-you-use",children:"Which one should you use?"}),`
`,(0,n.jsx)(r.p,{children:"Here's the short version:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["For PR reviews, take the managed path. Enable Code Review, let the GitHub app post inline findings, and apply fixes locally with ",(0,n.jsx)(r.code,{children:"/code-review --fix"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:["Reach for the action when the job is more than review. Use ",(0,n.jsx)(r.code,{children:"/install-github-app"})," for setup, one workflow for ",(0,n.jsx)(r.code,{children:"@claude"})," mentions, one for cron, and all the tuning lives in ",(0,n.jsx)(r.code,{children:"claude_args"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Start with the managed service. Move to the action the moment you need Claude to actually do something in CI, not just comment on it."})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};