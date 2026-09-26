import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t();function r(t){let r={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Evals are the AI-native equivalent of stage-gate QA. In practice that means a suite that runs whenever the agent's configuration changes. When a new model is swapped in or a prompt is rewritten, the eval suite says whether the agent still does the work to the same standard."}),`
`,(0,n.jsx)(r.p,{children:"The evals should be seen as a live suite. As models improve, cases that once discriminated stop doing so, and new ones must be added that arise from ongoing monitoring."}),`
`,(0,n.jsx)(r.p,{children:"Depending on the use case, some teams may prefer to run these evals offline on a set cadence rather than on every change. The steps below are for continuous evaluations."}),`
`,(0,n.jsx)(r.h2,{id:"getting-started",children:"Getting started"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prerequisites"}),": The ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," and feedback loop (",(0,n.jsx)(r.strong,{children:"Stage 4: Test"}),")."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Infrastructure"}),": CI that can run Claude Code non-interactively, and an API key with budget for eval runs."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-execute-it",children:"How to execute it"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"The platform engineer collects 20 to 50 real tasks from recent work, each with its expected or accepted outcome."}),`
`,(0,n.jsx)(r.li,{children:"Write each task as an eval, meaning the prompt plus the checks that define acceptable (tests pass, lint clean, behavior unchanged, policy followed)."}),`
`,(0,n.jsxs)(r.li,{children:["The suite runs non-interactively in CI on a schedule and on any change to ",(0,n.jsx)(r.code,{children:"CLAUDE.md"}),", skills, or hooks, since that configuration steers the agent and deserves the regression testing that code gets."]}),`
`,(0,n.jsx)(r.li,{children:"Gate configuration changes on the results. A skill change that drops the pass rate gets reviewed before it merges."}),`
`,(0,n.jsx)(r.li,{children:"Each production incident gets an eval, written by the team that owned the incident, and stays in the suite as a regression test."}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"what-it-looks-like",children:"What it looks like"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:".github/workflows/agent-evals.yml"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:`name: Agent evals
on:
  pull_request:
    paths: ['CLAUDE.md', '.claude/**']
  schedule:
    - cron: '0 2 * * *'
jobs:
  evals:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install -g @anthropic-ai/claude-code
      - name: Run eval suite
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          for eval in evals/*.json; do
            claude -p "$(jq -r '.prompt' $eval)" \\
              --allowedTools "Read,Edit,Bash(make test)" \\
              --output-format json > result.json
            ./evals/check.sh "$eval" result.json
          done
`})}),`
`,(0,n.jsx)(r.h2,{id:"governance-considerations",children:"Governance considerations"}),`
`,(0,n.jsx)(r.p,{children:"Evals give QA a gate that keeps up with agent output. The pass-rate threshold is enforced as a merge check, runs are logged so results can be compared over time, and the team that owns the configuration change approves it."}),`
`,(0,n.jsx)(r.h2,{id:"how-to-measure-it",children:"How to measure it"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leading indicator"}),": The eval pass rate over time, reported by the suite on every run, and how long a production incident takes to become a permanent eval."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lagging indicator"}),": Regressions caught in CI compared with regressions found in production derived from the incident tracker."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}export{i as default};