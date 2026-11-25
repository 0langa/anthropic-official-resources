import{n as e,r as t}from"../../../../../react-ml7fx0sn.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...t.components},{LessonVideo:i}=r;return i||a("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{youtubeId:"nVGcWczH8fk",title:"GitHub Actions and Code Review",children:(0,n.jsx)(r.p,{children:`A lot of your busywork lives in the pull request, so it's a good place to
hand work to Claude. You can do that in two ways: turn on a managed review
service, or set up a GitHub Action yourself.`})}),`
`,(0,n.jsx)(r.h2,{id:"which-one-should-you-use",children:"Which one should you use?"}),`
`,(0,n.jsxs)(r.p,{children:["The two solve different problems. ",(0,n.jsx)(r.strong,{children:"Use Code Review for comments on pull requests, and the GitHub Action when Claude should do work in CI."})]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Code Review"}),(0,n.jsx)(r.th,{children:"GitHub Action"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"What it does"}),(0,n.jsx)(r.td,{children:"Posts findings on pull requests"}),(0,n.jsx)(r.td,{children:"Runs any job you'd write a workflow for"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Who sets it up"}),(0,n.jsx)(r.td,{children:"An Owner of your Claude organization"}),(0,n.jsx)(r.td,{children:"A repo admin"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"What you need"}),(0,n.jsx)(r.td,{children:"A Team or Enterprise plan"}),(0,n.jsx)(r.td,{children:"A way to sign in, such as an API key"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"What you maintain"}),(0,n.jsx)(r.td,{children:"Nothing"}),(0,n.jsx)(r.td,{children:"A workflow file"})]})]})]}),`
`,(0,n.jsx)(r.p,{children:"If you aren't on a Team or Enterprise plan, skip ahead to the GitHub Action."}),`
`,(0,n.jsx)(r.h2,{id:"turn-on-code-review",children:"Turn on Code Review"}),`
`,(0,n.jsx)(r.p,{children:"Code Review runs on Anthropic's infrastructure, so there's nothing to build or host. An Owner of your Claude organization sets it up once:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Start the setup."})," Open your organization's ",(0,n.jsx)(r.a,{href:"https://claude.ai/admin-settings/claude-code#code-review",children:"Code Review settings"})," and click the switch. The ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/code-review-setup",children:"setup guide"})," shows each click."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Pick the repos."})," Install the Claude GitHub app and choose which repos it watches. If you don't own the GitHub organization, an owner has to install and link the app first."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Confirm the setup."})," If the setup ends in a dialog, Code Review stays off until you confirm it. If you weren't asked to pick repos, add them from the Repositories table."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Set the timing."})," Each repo starts with a review on every push, which runs the most reviews and costs more. Click Edit on the repo's row to review once when a PR opens, or only when someone comments ",(0,n.jsx)(r.code,{children:"@claude review"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"what-code-review-does",children:"What Code Review does"}),`
`,(0,n.jsx)(r.p,{children:"A set of review agents checks each diff against your full codebase. They remove duplicates and rank what's left, so you read a handful of real issues. Each one lands as an inline comment with a severity, an explanation, and a suggested fix. The check run sums them up in a table."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"By itself, Code Review only comments, so the decision and the fix stay with you."})," It doesn't approve or block a PR, and it doesn't push fixes. Your repo's GitHub branch rules decide what merges."]}),`
`,(0,n.jsxs)(r.p,{children:["To check your fix before you push, run ",(0,n.jsx)(r.code,{children:"/code-review"})," in your own terminal. That starts a separate review of your diff, and ",(0,n.jsx)(r.code,{children:"--fix"})," applies that review's findings to your working tree."]}),`
`,(0,n.jsx)(r.h2,{id:"set-up-the-github-action",children:"Set up the GitHub Action"}),`
`,(0,n.jsxs)(r.p,{children:["When the job goes beyond review, use the action, ",(0,n.jsx)(r.code,{children:"anthropics/claude-code-action@v1"}),". Run ",(0,n.jsx)(r.code,{children:"/install-github-app"})," in Claude Code, which needs admin rights on the repo. It walks you through installing the GitHub app and saving your Anthropic API key as a repo secret. It can also add workflow files on a new branch, which turn on once you create and merge that pull request."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["The ",(0,n.jsx)(r.code,{children:"prompt"})," input decides when Claude runs."]})," Without one, the action waits for someone to mention ",(0,n.jsx)(r.code,{children:"@claude"}),". With one, Claude runs as soon as the event fires. The next two workflows show one of each."]}),`
`,(0,n.jsx)(r.h2,{id:"respond-to-claude",children:"Respond to @claude"}),`
`,(0,n.jsxs)(r.p,{children:["This workflow has no ",(0,n.jsx)(r.code,{children:"prompt"}),", so it waits for ",(0,n.jsx)(r.code,{children:"@claude"})," in PR and issue comments. ",(0,n.jsxs)(r.strong,{children:["If setup added a ",(0,n.jsx)(r.code,{children:"claude.yml"}),", merge that one and don't add a second."]})," Otherwise, save this one as ",(0,n.jsx)(r.code,{children:".github/workflows/claude.yml"}),". The ",(0,n.jsx)(r.code,{children:"id-token: write"})," permission lets the action sign in as the Claude GitHub app:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:`name: Claude Code
on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
jobs:
  claude:
    if: contains(github.event.comment.body, '@claude')
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
      issues: write
      id-token: write
      actions: read
    steps:
      - uses: actions/checkout@v6
        with:
          fetch-depth: 1
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          claude_args: "--model claude-sonnet-5"
`})}),`
`,(0,n.jsxs)(r.p,{children:["Suppose someone comments ",(0,n.jsx)(r.code,{children:"@claude implement the spec in the linked GitHub issue"})," on a pull request. The action picks it up, and Claude pushes commits and comments with what it did."]}),`
`,(0,n.jsx)(r.h2,{id:"run-on-a-schedule",children:"Run on a schedule"}),`
`,(0,n.jsxs)(r.p,{children:["This workflow has a ",(0,n.jsx)(r.code,{children:"prompt"}),", so it runs on its own at 9:00 UTC every day. The ",(0,n.jsx)(r.code,{children:"workflow_dispatch"})," line also lets you start it by hand from the Actions tab. The prompt names the repo, because this job has no checkout step:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:`name: Daily report
on:
  schedule:
    - cron: "0 9 * * *"
  workflow_dispatch:
jobs:
  report:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      issues: read
      id-token: write
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          prompt: "Generate a summary of yesterday's commits and open issues in \${{ github.repository }}"
          claude_args: |
            --permission-mode dontAsk
            --allowedTools "mcp__github__list_commits,mcp__github__list_issues"
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"A scheduled run doesn't post a comment on its own."})," You read the result in the run's log, in the Actions tab."]}),`
`,(0,n.jsx)(r.h2,{id:"limit-what-a-run-can-do",children:"Limit what a run can do"}),`
`,(0,n.jsxs)(r.p,{children:["No one is at the keyboard during a run, so ",(0,n.jsx)(r.strong,{children:"give each job only what it needs."})," The ",(0,n.jsx)(r.code,{children:"claude_args"})," input passes CLI arguments straight to Claude Code, and three of them set the limits:"]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"--max-turns"})," caps the agent loop, so it can't run forever. A run that goes over the cap fails. So leave room, because even a small ",(0,n.jsx)(r.code,{children:"@claude"})," code change can take more than five turns."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"--allowedTools"})," lists the tools Claude can use without asking. For a report, list only read-only tools."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"--permission-mode dontAsk"})," denies anything else that needs approval. Use it on a job like the report, because it would also deny file edits you haven't listed. Without it, the action defaults to auto mode, where a safety review can let unlisted tools through."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"adapt-it-to-your-setup",children:"Adapt it to your setup"}),`
`,(0,n.jsxs)(r.p,{children:["Both workflows sign in with an API key and act as the Claude GitHub app. ",(0,n.jsx)(r.strong,{children:"If your setup differs, start from these inputs:"})]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"If you want to"}),(0,n.jsx)(r.th,{children:"Use"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Sign in with a Claude subscription"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"claude_code_oauth_token"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Store no secret"}),(0,n.jsx)(r.td,{children:"Workload identity federation, set up through a Claude Console service account"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Run on Amazon Bedrock"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'use_bedrock: "true"'})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Run on Google Cloud's Agent Platform"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'use_vertex: "true"'})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Run on Microsoft Foundry"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'use_foundry: "true"'})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Act as something other than the app"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"github_token"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Listen for a different phrase"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"trigger_phrase"})})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:["With a subscription, point that input at the ",(0,n.jsx)(r.code,{children:"CLAUDE_CODE_OAUTH_TOKEN"})," secret and remove the API key line. With a cloud provider, you sign in with your cloud account, which takes a few ",(0,n.jsx)(r.a,{href:"https://code.claude.com/docs/en/github-actions-cloud-providers",children:"more setup steps"}),". If you change the trigger phrase, change the workflow's ",(0,n.jsx)(r.code,{children:"if"})," line to match."]}),`
`,(0,n.jsx)(r.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Turn on Code Review when you want findings on pull requests with nothing to maintain."}),`
`,(0,n.jsx)(r.li,{children:"Set up the action when Claude should make changes or run on a schedule."}),`
`,(0,n.jsxs)(r.li,{children:["Use ",(0,n.jsx)(r.code,{children:"claude_args"})," to limit what each run can do."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}i.uses=["LessonVideo"];export{i as default};