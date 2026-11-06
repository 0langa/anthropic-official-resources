import{r as e,t}from"../../../../../react-tdxv2e9w.js";var n=t();function r(t){let r={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...e(),...t.components},{ImageFigure:i,LessonVideo:o,ResourceWidget:s}=r;return i||a("ImageFigure",!0),o||a("LessonVideo",!0),s||a("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{youtubeId:"qpSyAg0_lHY",title:"Evals in production: CI, batch, and drift",children:(0,n.jsx)(r.p,{children:`An eval still has work to do after launch. On every pull request, it catches
a prompt change that breaks cases before a customer gets a wrong answer. It
also grades live traffic to catch drift, a slow drop in accuracy that comes
as real inputs change.`})}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"The demo in this video was recorded in August 2026. It ran on Claude Haiku 4.5, Claude Sonnet 5, and Claude Opus 5. Results will differ on newer models. Each lesson's demo is a separate eval run, so its scores and costs won't match those in other lessons."})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Your eval still runs after launch, because two things keep changing."})," Your team will edit the prompt, and an edit can break answers that were right. Real inputs change too, until they stop looking like the ones you tested. So the eval runs on every edit before it ships, and on live traffic after."]}),`
`,(0,n.jsx)(r.p,{children:"This lesson follows Meridian, a fictional engineering consultancy whose prompt reads each monthly project report and returns three fields: the project ID, the schedule status, and the top risk. Meridian's eval has 50 cases. Each case is a report plus the answer you expect for it, and all 50 together make up the full suite."}),`
`,(0,n.jsx)(r.p,{children:"These four steps keep Meridian's eval working after launch:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Run a few cases on every pull request."}),`
`,(0,n.jsx)(r.li,{children:"Keep a pull request from merging until it passes."}),`
`,(0,n.jsx)(r.li,{children:"Run the full suite as one batch."}),`
`,(0,n.jsx)(r.li,{children:"Grade a sample of live traffic every night."}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"run-a-few-cases-on-every-pull-request",children:"Run a few cases on every pull request"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Add a workflow to CI, short for continuous integration, and have it run on each pull request."})," The workflow runs a smoke eval, which takes few enough of the full suite's cases to finish while you wait. Its score passes or fails a check on the pull request. Meridian picks 10 of its 50 cases to cover every kind of report, and runs them on Claude Haiku 4.5 in about a minute."]}),`
`,(0,n.jsx)(r.p,{children:"The threshold is the lowest passing score, and Meridian's is 88%, so nine of the ten cases have to succeed. The workflow does four tasks, in this order:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Run the eval script and save what it returns as JSON."}),`
`,(0,n.jsx)(r.li,{children:"Score those results against the threshold."}),`
`,(0,n.jsx)(r.li,{children:"Comment on the pull request with the results."}),`
`,(0,n.jsx)(r.li,{children:"Fail the check if the score is below the threshold."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Meridian uses GitHub Actions for this, but any CI system able to run your eval script can do the same four tasks. The file itself is in the box below."}),`
`,(0,n.jsx)(s,{name:"CodeParts",title:"Meridian's workflow file for the eval check: find the line that does each job"}),`
`,(0,n.jsx)(r.h2,{id:"keep-a-pull-request-from-merging-until-it-passes",children:"Keep a pull request from merging until it passes"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["Turn on a branch protection rule that makes the smoke eval a ",(0,n.jsx)(r.a,{href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging",children:"required check"}),", one that must pass before a pull request can merge."]})," The rule belongs to the branch, not the workflow file, and without it a red X is just a warning."]}),`
`,(0,n.jsxs)(r.p,{children:['At Meridian, an engineer opens a pull request called "Simplify extraction prompt" that drops two rules. One told Claude to return ',(0,n.jsx)(r.code,{children:"null"})," when a report gives no top risk, and the other had Claude quote the line the risk comes from before answering."]}),`
`,(0,n.jsxs)(r.p,{children:["The run scores 80%, below the 88% threshold. Both failures are missing-risk cases, reports that have no risk section, so each should have come back ",(0,n.jsx)(r.code,{children:"null"}),", but Claude named a risk anyway."]}),`
`,(0,n.jsx)(i,{src:"./l4-check-fails.png",alt:"A github-actions comment on the pull request: Prompt eval at 80%, 8 of 10 cases passed, below the 88% threshold, with the two failing missing-risk cases listed",children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"The smoke eval scores 80% and falls short of the 88% threshold, because in two missing-risk cases Claude named a risk the report never gives."})})}),`
`,(0,n.jsx)(r.p,{children:"The red check keeps the merge button grey, and its comment shows the engineer which cases broke: r041 and r042. Once the prompt is fixed and pushed, the check goes green and the merge can go ahead, so no customer ever saw the broken prompt."}),`
`,(0,n.jsx)(i,{src:"./l4-check-passes.png",alt:"The same pull request after the fix: Prompt eval at 100%, all checks have passed, and the merge button is enabled",children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"After the fix every case passes at 100%, so the merge is no longer blocked."})})}),`
`,(0,n.jsx)(r.h2,{id:"run-the-full-suite-as-one-batch",children:"Run the full suite as one batch"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["Run the full suite ",(0,n.jsx)(r.a,{href:"https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents#how-evals-fit-with-other-methods-for-a-holistic-understanding-of-agents",children:"whenever you change the prompt or the model"}),", and send it through the ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/batch-processing",children:"Batch API"}),"."]})," Meridian's eval compares Haiku 4.5, Claude Sonnet 5, and Claude Opus 5, so its batch holds 150 requests, all 50 cases for each. The Batch API runs them all for ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/about-claude/pricing#batch-processing",children:"half the usual price for input and output tokens"}),", and you collect the answers later, ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/batch-processing#message-batches-api",children:"usually within the hour"}),"."]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Model"}),(0,n.jsx)(r.th,{children:"Standard price"}),(0,n.jsx)(r.th,{children:"Batch API price"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Haiku 4.5"}),(0,n.jsx)(r.td,{children:"$0.0468"}),(0,n.jsx)(r.td,{children:"$0.0234"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Sonnet 5"}),(0,n.jsx)(r.td,{children:"$0.1301"}),(0,n.jsx)(r.td,{children:"$0.0650"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Opus 5"}),(0,n.jsx)(r.td,{children:"$0.3432"}),(0,n.jsx)(r.td,{children:"$0.1716"})]})]})]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.em,{children:["Standard and Batch API prices for one pass through Meridian's 50 cases on each model, as of August 2026. ",(0,n.jsx)(r.a,{href:"https://claude.com/pricing",children:"Today's prices"}),"."]})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence#batch-work-that-can-wait",children:"Batch the requests no one waits on, and use standard ones where someone does"}),". Only the smoke eval, which a merge waits on, stays on ",(0,n.jsx)(r.code,{children:"client.messages.create(...)"}),"."]}),`
`,(0,n.jsx)(r.p,{children:"The eval script needs two changes."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["Label each request with a ",(0,n.jsx)(r.code,{children:"custom_id"}),"."]})," ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/batch-processing#best-practices-for-effective-batching",children:"Results can arrive in any order"}),", so you match them by this label, and it has to be unique in the batch. Each case goes to three models, so join the case ID to the model, as in ",(0,n.jsx)(r.code,{children:"r041_claude-haiku-4-5"}),"."]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`batch = client.messages.batches.create(
    requests=[
        {
            "custom_id": f"{case['id']}_{model}",
            "params": {
                "model": model,
                "max_tokens": 1024,
                "messages": [{"role": "user", "content": case["prompt"]}],
            },
        }
        for model in MODELS
        for case in CASES
    ]
)
`})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["Read ",(0,n.jsx)(r.code,{children:"request_counts"})," before you score."]})," It counts how many requests ended each way, which shows when a run came back short. ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/batch-processing#batch-limitations",children:"A batch not done within 24 hours expires"}),", and ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/build-with-claude/batch-processing#retrieving-batch-results",children:"an expired request costs nothing but has no answer"}),"."]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:`batch = client.messages.batches.retrieve(batch.id)
print(batch.request_counts)

answers = {}
for result in client.messages.batches.results(batch.id):
    if result.result.type == "succeeded":
        answers[result.custom_id] = result.result.message
`})}),`
`,(0,n.jsx)(r.h2,{id:"grade-a-sample-of-live-traffic-every-night",children:"Grade a sample of live traffic every night"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Grade a small sample of live traffic, the real requests your app handles, every night."})," The full suite only knows the reports you had when you built it, so if a new client starts sending reports in a format none of your cases covers, your CI stays green as the answers get worse. That slow loss of accuracy is drift."]}),`
`,(0,n.jsx)(r.p,{children:"Here's how:"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Sample."})," Pick out between 1 and 5% of live traffic."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:["Grade the sample with an ",(0,n.jsx)(r.a,{href:"https://platform.claude.com/docs/en/test-and-evaluate/develop-tests#grade-your-evaluations",children:"LLM judge"}),"."]})," That's a second model that scores each answer against a rubric of written rules, using only the report, Claude's answer, and the rubric, so it doesn't need expected answers, which live traffic lacks. Still, ",(0,n.jsx)(r.a,{href:"https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents#how-evals-fit-with-other-methods-for-a-holistic-understanding-of-agents",children:"read a few answers yourself now and then"}),", because a judge needs checking by a person too."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Alert only on a real drop."})," That's a night's score more than two standard deviations below the trailing baseline, the average of recent nights. Two standard deviations is a bigger change than a normal night brings."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Make a case of each answer the judge marks incorrect."})," Write its expected answer, then add the case to the full suite, because ",(0,n.jsx)(r.a,{href:"https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents#collect-tasks-for-the-initial-eval-dataset",children:"cases from real failures"})," keep the suite close to real use."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Live traffic shows you what the full suite misses, and each failure you add narrows that gap. Treat the 1 to 5% and the two standard deviations as starting points to tune for your own traffic."}),`
`,(0,n.jsx)(r.h2,{id:"the-bottom-line",children:"The bottom line"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Have a smoke eval run on each pull request, and let its score pass or fail the check."}),`
`,(0,n.jsx)(r.li,{children:"Make that check required, so a low score really does stop the merge."}),`
`,(0,n.jsx)(r.li,{children:"Run the full suite as a batch, which costs half as much, because no one is waiting for it."}),`
`,(0,n.jsx)(r.li,{children:"Grade a nightly sample of live traffic, alert when the score drops further than usual, and turn every failure into a new case in the full suite."}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};