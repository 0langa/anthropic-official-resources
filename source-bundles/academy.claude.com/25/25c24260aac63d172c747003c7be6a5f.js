import{Nm as e,jm as t}from"../../../../../content-de-meta-jksdfebu.js";var n=t();function r(t){let r={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components},{Expandable:i}=r;return i||a("Expandable",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Evals are the AI-native equivalent of stage-gate QA. In practice that means a suite that runs whenever the agent's configuration changes. When a new model is swapped in or a prompt is rewritten, the eval suite says whether the agent still does the work to the same standard."}),`
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
`,(0,n.jsxs)(r.p,{children:["This eval, ",(0,n.jsx)(r.code,{children:"evals/status-no-pii-in-logs.json"}),", comes from a merged pull request at an insurer whose customer portal shows claim status through a backend called ",(0,n.jsx)(r.code,{children:"claims-api"}),". That repo's ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," has one line saying not to log request or response bodies in ",(0,n.jsx)(r.code,{children:"claims-api"}),", because they can hold PII. The eval's ",(0,n.jsx)(r.code,{children:"from"})," field is the last commit before that pull request, so each run starts from the code as it stood then."]}),`
`,(0,n.jsxs)(r.p,{children:["Besides ",(0,n.jsx)(r.code,{children:"from"}),", the file holds the prompt, the folders a run may change, and the checks that define an acceptable result. Two checks call scripts, and ",(0,n.jsx)(r.code,{children:"scripts/check-endpoints.sh"})," is the repo's own policy script, which looks for fields tagged ",(0,n.jsx)(r.code,{children:"pii"}),". The other, ",(0,n.jsx)(r.code,{children:"log_bodies.py"}),", sits beside the eval files and is shown further down, after the eval itself:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:`{
  "name": "status-no-pii-in-logs",
  "source": "Merged PR: debug logging for the claim status endpoint",
  "from": "9d04e7a",
  "prompt": "Add debug logging to the claim status endpoint so on-call can see which claim was asked for and what we returned. Run the tests before you finish.",
  "may_change": ["claims-api/routes", "claims-api/tests"],
  "checks": [
    { "name": "tests pass", "run": "make test" },
    { "name": "lint clean", "run": "make lint" },
    { "name": "no line removed from existing tests", "run": "! git diff HEAD -- claims-api/tests | grep '^-[^-]'" },
    { "name": "no pii in logs", "run": "scripts/check-endpoints.sh claims-api/routes/status.py" },
    { "name": "no response body in logs", "run": "python3 $EVALS/log_bodies.py" }
  ]
}
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:".github/workflows/agent-evals.yml"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:`name: Agent evals
on:
  pull_request:
    paths: ['CLAUDE.md', '.claude/**', 'evals/**']
  schedule:
    - cron: '0 2 * * *'
jobs:
  evals:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0   # each eval starts from an older commit
      - run: npm install -g @anthropic-ai/claude-code
      - name: Run eval suite
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          git config --global user.name evals && git config --global user.email evals@example.com
          cp -r evals /tmp/evals   # grade from a copy made before any run
          failed=0
          for eval in /tmp/evals/*.json; do
            git worktree add -q --detach /tmp/run "$(jq -r '.from' $eval)"   # the code before the task
            rm -rf /tmp/run/evals /tmp/run/.claude                           # keep the checks out of the run's checkout
            cp -r CLAUDE.md .claude /tmp/run/                                # the configuration under test
            git -C /tmp/run add -A && git -C /tmp/run commit -q --allow-empty -m "configuration under test"
            ( cd /tmp/run
              claude -p "$(jq -r '.prompt' $eval)" \\
                --allowedTools "Read,Edit,Bash(make test)" \\
                --output-format json > /tmp/result.json
              /tmp/evals/check.sh "$eval" /tmp/result.json ) || failed=$((failed + 1))
            git worktree remove --force /tmp/run
          done
          echo "$failed eval(s) failed"
          [ "$failed" -eq 0 ]
`})}),`
`,(0,n.jsxs)(r.p,{children:["For each eval, the loop makes a scratch checkout at the eval's ",(0,n.jsx)(r.code,{children:"from"})," commit and deletes ",(0,n.jsx)(r.code,{children:"evals/"})," from it, so a run does not come across its own checks in the repo. It then copies in the ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," and ",(0,n.jsx)(r.code,{children:".claude/"})," of the branch being tested, so the old code is worked on under the new configuration."]}),`
`,(0,n.jsx)(r.p,{children:"The threshold here is every eval passing, and a suite of 20 to 50 evals may set a lower one."}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"--bare"})," flag makes a non-interactive run start faster. It does so by skipping ",(0,n.jsx)(r.code,{children:"CLAUDE.md"}),", skills, and hooks. Those are the files this suite is testing, so do not add the flag here."]}),`
`,(0,n.jsxs)(i,{title:"The checker script",children:[(0,n.jsxs)(r.p,{children:["This script, ",(0,n.jsx)(r.code,{children:"evals/check.sh"}),", runs each check on the files Claude left behind. It fails any run that changed something outside the folders and files the eval allows, except files Git ignores, such as test caches. That way an agent cannot pass by rewriting the ",(0,n.jsx)(r.code,{children:"Makefile"})," or the checks, and for the same reason the workflow runs the script from a copy made before any run."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:`#!/bin/bash
# Usage: check.sh <eval.json> <result.json>, from the root of the checkout the run worked in.
name=$(jq -r '.name' "$1")
export EVALS=$(cd "$(dirname "$1")" && pwd)   # a check can call a helper kept beside the eval files
total=$(jq '.checks | length' "$1")
passed=0
report=""

strays() {   # files changed outside the folders and files this eval allows
  git status --porcelain | cut -c4- | while read -r path; do
    jq -e --arg p "$path" 'any(.may_change[]; . as $ok | $p == $ok or ($p | startswith($ok + "/")))' "$1" >/dev/null ||
      echo "       $path"
  done
}

if [ "$(jq -r '.is_error' "$2" 2>/dev/null)" != "false" ]; then   # an empty or broken result file counts as an error
  report="     the run ended in an error: $(jq -r '.result // (.errors | join(", "))' "$2" 2>/dev/null)"$'\\n'
elif [ -n "$(strays "$1")" ]; then
  report="     the run changed files this eval does not allow:"$'\\n'"$(strays "$1")"$'\\n'
else
  for i in $(seq 0 $((total - 1))); do
    check=$(jq -r ".checks[$i].name" "$1")
    cmd=$(jq -r ".checks[$i].run" "$1")
    if out=$(bash -c "$cmd" 2>&1 </dev/null); then
      passed=$((passed + 1))
    else
      report+="     failed: $check"$'\\n'
      [ -n "$out" ] && report+="$(head -3 <<<"$out" | sed 's/^/       /')"$'\\n'
    fi
  done
  if [ -n "$(strays "$1")" ]; then   # code under test must not touch the Makefile or scripts either
    passed=0
    report+="     a check changed files this eval does not allow:"$'\\n'"$(strays "$1")"$'\\n'
  fi
fi

if [ "$passed" -eq "$total" ]; then
  echo "PASS $name ($passed/$total checks)"
else
  echo "FAIL $name ($passed/$total checks)"
  printf '%s' "$report"
  exit 1
fi
`})})]}),`
`,(0,n.jsxs)(i,{title:"The log check",children:[(0,n.jsxs)(r.p,{children:["This script, ",(0,n.jsx)(r.code,{children:"evals/log_bodies.py"}),", calls the endpoint with a made-up claim, keeps every log line, and fails if a line holds the whole response. It tests what the code does and not how it is written, so it does not matter what Claude names the variable. It catches the whole response only, so a line that logged ",(0,n.jsx)(r.code,{children:"next_step"})," alone would pass."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`"""Fails if the status endpoint writes a whole response body to the log. Run from the repo root."""
import importlib.util
import json
import logging
import sys

spec = importlib.util.spec_from_file_location("status", "claims-api/routes/status.py")
status = importlib.util.module_from_spec(spec)
spec.loader.exec_module(status)

lines = []


class Keep(logging.Handler):
    def emit(self, record):
        lines.append(record.getMessage())


logging.getLogger().addHandler(Keep())
logging.getLogger().setLevel(logging.DEBUG)

claim = {"id": "C-1001", "status": "in_review", "next_step": "Call A. Customer on 555 0100",
         "expected_date": "2026-07-01", "received_at": "2026-06-02", "policy_holder_name": "A. Customer",
         "date_of_birth": "1980-01-01", "bank_account": "00-00-00"}
body = status.get_status("C-1001", fetch=lambda claim_id: claim)
found = [line for line in lines if str(body) in line or json.dumps(body) in line]
for line in found:
    print(line)
sys.exit(1 if found else 0)
`})})]}),`
`,(0,n.jsx)(r.p,{children:"On a normal night, the suite prints a result for each eval, such as these two:"}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-text",children:`PASS portal-stays-off-claims-core (4/4 checks)
PASS status-no-pii-in-logs (5/5 checks)
0 eval(s) failed
`})}),`
`,(0,n.jsxs)(r.p,{children:["Suppose a pull request trims ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," to keep it under a page and drops the line about request and response bodies. The line looks safe to drop, because a skill and a hook already keep fields tagged ",(0,n.jsx)(r.code,{children:"pii"})," out of the logs. Because the pull request touches ",(0,n.jsx)(r.code,{children:"CLAUDE.md"}),", the suite runs."]}),`
`,(0,n.jsxs)(r.p,{children:["This time Claude logs the whole response, and the policy script still passes because none of the three fields in the response is tagged ",(0,n.jsx)(r.code,{children:"pii"}),". But ",(0,n.jsx)(r.code,{children:"next_step"})," is free text, and in the made-up claim it holds a customer's name and phone number. So one check fails, and this is what the suite prints:"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-text",children:`PASS portal-stays-off-claims-core (4/4 checks)
FAIL status-no-pii-in-logs (4/5 checks)
     failed: no response body in logs
       status for claim 'C-1001': returned {'status': 'in_review', 'next_step': 'Call A. Customer on 555 0100', 'expected_date': '2026-07-01'}
1 eval(s) failed
`})}),`
`,(0,n.jsxs)(r.p,{children:["The merge check fails, so the reviewer sees which eval broke and the log line that broke it. The line about request and response bodies goes back into ",(0,n.jsx)(r.code,{children:"CLAUDE.md"})," before the change merges."]}),`
`,(0,n.jsx)(r.h2,{id:"governance-considerations",children:"Governance considerations"}),`
`,(0,n.jsx)(r.p,{children:"Evals give QA a gate that keeps up with agent output. The pass-rate threshold is enforced as a merge check, runs are logged so results can be compared over time, and the team that owns the configuration change approves it."}),`
`,(0,n.jsx)(r.h2,{id:"how-to-measure-it",children:"How to measure it"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leading indicator"}),": The eval pass rate over time, reported by the suite on every run, and how long a production incident takes to become a permanent eval."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lagging indicator"}),": Regressions caught in CI compared with regressions found in production derived from the incident tracker."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};