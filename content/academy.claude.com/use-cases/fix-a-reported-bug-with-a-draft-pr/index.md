# Fix a reported bug with a draft PR

Hand a bug report to Claude Tag in its thread. It reproduces the bug, fixes it and opens a draft pull request for an engineer to review.

10 minEngineeringClaude Tag

![](https://academy.claude.com/assets/v1/thumbnail.light-ckl2rk6s.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-mcz0r5p3.png)

A bug reported in an engineering channel often stays open until an engineer can set planned work aside, reproduce it and find the cause. That investigation is usually most of the work, and the change itself is small.

With Claude Tag in the channel and the repository connected, reply to a report. Claude reproduces the bug, finds the cause and opens **[a draft pull request(opens in new tab)](https://claude.com/docs/claude-tag/users/use-cases/work-with-github)**. It posts its progress in the thread, where **[anyone on the team can ask for a different approach(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)**. It works on its own copy of the code under its own GitHub account, so branch protection and review apply. An engineer decides whether it merges.

## Set up[](https://academy.claude.com/use-cases/fix-a-reported-bug-with-a-draft-pr)

Checklist: two setup items for having Claude Tag fix a reported bug, which are to ask in the bug report's thread and to connect GitHub with the bug's repository, with Datadog or Sentry as an optional way to read the error.



**Ask in the right spot**



[The bug report's thread(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)

In any channel that has the GitHub connection. Claude uses the report and its reproduction steps.



**Give Claude the right tools**

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHubRequired

Connected to the channel with the repository the bug is in.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23632CA6'%20d='m20.43%2017.56-1.86-1.24-1.6%202.63-1.85-.53-1.73%202.7.07.71%208.92-1.63-.52-6.45zm-6.33-3.64c.46-.06.86-.13%201.35-.42.08-.32.1-.83-.04-1.43-.21-.87-.5-1.4-1.1-1.31-.6.1-.63.84-.42%201.71.12.5.33.98.54%201.28zm-2.54.4c.45-.08.96-.43%201.12-.64-.12-.18-.33-.54-.42-1.04-.32-.05-.6-.01-.92.19-.43.26-.77.86-.67%201.28.24.24.53.28.89.21zm-1.87.92c.18-.32.13-.86-.14-1.28-.19.02-.38.07-.57.18-.42.24-.86.77-.73%201.24.35.19.98.2%201.44-.14zm12.63%206.24-1.06-13.1L1.68.13.07%2019.05l8.6%201.24%201.55-2.42c-.85-.56-1.38-1.4-1.62-2.06-.42-1.14-.07-2.45.86-3.13.24-.18.5-.3.77-.37-.07-.43-.01-.93.24-1.37.42-.73%201.2-1.12%202-1.06.06-.58.36-1.13.9-1.46.86-.53%201.98-.33%202.63.44.35-.06.73-.02%201.12.14%201.21.5%201.6%201.88%201.39%202.96.5.36.86.86%201.02%201.45.33%201.21-.24%202.5-1.32%203.07l-1.37%202.25%201.84.53%201.58-2.6%202.44%201.63.63-.07zm-14.2-9.95c.14-.65.86-1.02%201.14-1.18-.33-.56-.5-1.28-.42-1.84.14-.93.93-1.5%201.63-1.43-.14-.5-.14-1.07.06-1.6.36-.93%201.32-1.36%202.14-1%20.03-.5.24-1%20.65-1.36.77-.7%201.93-.6%202.6.2.38-.2.84-.24%201.28-.07.86.33%201.28%201.32.93%202.2.43.2.77.6.93%201.1.3.93-.2%201.93-1.1%202.27.1.45.04.93-.2%201.35-.18.32-.43.55-.71.7.28.59.37%201.27.2%201.93l.5.35c.31-.55.85-.93%201.5-.98a8.53%208.53%200%200%201-.06-2.24c.2-1.84%201.36-2.56%202.35-2.45.43.05.77.24%201.02.5l.23-2.85L3.07%201.7%201.73%2017.56l5.77.83c-.12-.5-.12-1.02.04-1.5-.86-.42-1.5-1.32-1.5-2.4a2.6%202.6%200%200%201%201.28-2.24c-.24-.43-.33-.93-.2-1.43z'/%3e%3c/svg%3e)

Datadog or SentryOptional

If connected, Claude can read the error behind the report.



**Make sure Claude is in the channel:** `/invite @Claude`.

**Check what tools are connected:** `@Claude what can you access from this channel?`

For help, ask your admin or visit our [troubleshooting docs(opens in new tab)](https://claude.com/docs/claude-tag/users/troubleshooting).

## What to ask Claude, and what it does[](https://academy.claude.com/use-cases/fix-a-reported-bug-with-a-draft-pr)

When a bug report comes in, reply in its thread and ask Claude to reproduce and fix it. Tell it which repository, and when to stop, such as once a draft PR is open and CI passes.

Claude's first reply is a checklist that it updates as it works, so you can check in and see Claude's progress. When it finishes, it posts the message below:

Film: in a bug report's thread, the user asks Claude Tag to reproduce and fix the bug, and Claude works through a plan, then posts the cause, the fix and a test, and a draft pull request for a person to review.

#eng-bugsMYReplay

M

Maya10:12Export bug: records created after March 1 come out of the JSON export without created\_at. Steps: create a record dated after March 1, run the export, open the file.

Y

YouCopy

@Claude in acme/data-pipeline, reproduce the bug in this thread, fix it, and open a draft PR.
Done means CI is green and the PR links back here.

👀1

ClaudeApp

✱Clone acme/data-pipeline and reproduce the bug from the steps in this thread

○Find the cause in the export schema

○Fix it and add a test

○Open a draft pull request and post it here

todos as of just now

ClaudeApp

I reproduced it on commit b4f8c2d. Exporting any record created after March 1 writes the JSON file without `created_at`. Maya's report

The cause is the export schema in `export/schema.py`, which has no mapping for `created_at`, so the writer skips it. The field was added to the model in #812 and the schema was not updated. export/schema.py

I added the mapping and a test. `test_export_fields` now fails without the fix and passes with it. CI is green on all suites, and draft PR #847 links back to this thread. #847

It stays a draft until a person marks it ready for review. Tell me here if you want the approach changed and I will update the same PR.



#847 · Add created\_at to the export schemaDraft

acme/data-pipeline · linked to this thread

This is an illustrative example of what Claude Tag can do.

Claude opened the pull request under its own GitHub account, so your branch protection and review rules apply to it.

Before anyone merges, read the changed code in the pull request and check that the new test covers the reported case.

## Follow ups[](https://academy.claude.com/use-cases/fix-a-reported-bug-with-a-draft-pr)

### Correct the approach in the thread[](https://academy.claude.com/use-cases/fix-a-reported-bug-with-a-draft-pr)

Anyone in the thread can ask for a change, without tagging Claude again, and Claude updates the same pull request ([reply in the thread to steer(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)). Leo, who owns the export code, replies in the thread:

Simulation: a single message to Claude in an engineering channel for bugs or a report's thread, sometimes with Claude's reply. It asks Claude to change its approach, follow a pull request's CI, try reproducing new reports, say what it remembers, or diagnose without fixing.

#eng-bugsMLY

L

Leo

One thing: read the field list from export/fields.py, not a constant. We centralized it last sprint.

ClaudeApp11:04

Switched the schema to read the field list from `export/fields.py`, updated the test to cover it, and pushed to the same branch, so #847 is refreshed. export/fields.py

### Have Claude follow a pull request[](https://academy.claude.com/use-cases/fix-a-reported-bug-with-a-draft-pr)

Claude can [follow a pull request(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity), whoever opened it, and post each CI result in the thread. Ask it to tag you only when a check fails.

Simulation: a single message to Claude in an engineering channel for bugs or a report's thread, sometimes with Claude's reply. It asks Claude to change its approach, follow a pull request's CI, try reproducing new reports, say what it remembers, or diagnose without fixing.

#eng-bugsY

Y

YouCopy

@Claude watch PR #482 in acme/data-pipeline. When CI finishes, post the result here, and tag me if anything failed.

ClaudeApp3:12 PM

CI finished on #482 at 3:12 and every check passed, so I am not tagging anyone. It is ready for review. #482



#482 · Retry exports on timeout

acme/data-pipeline · CI passed · ready for review

### Have Claude act on every new report[](https://academy.claude.com/use-cases/fix-a-reported-bug-with-a-draft-pr)

With Respond automatically on for the channel, Claude can act on new reports without a tag ([standing work(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity)). Send the message below once, and Claude tries to reproduce each new bug report. It posts a draft pull request, or what it tried.

Simulation: a single message to Claude in an engineering channel for bugs or a report's thread, sometimes with Claude's reply. It asks Claude to change its approach, follow a pull request's CI, try reproducing new reports, say what it remembers, or diagnose without fixing.

#eng-bugsMY

Y

YouCopy

@Claude remember for this channel: when a bug report is posted here, try to reproduce it. If you can, open a draft PR and tag the area owner; if you can't, reply with what you tried.

### See what standing instructions the channel has[](https://academy.claude.com/use-cases/fix-a-reported-bug-with-a-draft-pr)

Claude lists a channel's standing instructions when asked, so you can [change or stop one(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity).

Simulation: a single message to Claude in an engineering channel for bugs or a report's thread, sometimes with Claude's reply. It asks Claude to change its approach, follow a pull request's CI, try reproducing new reports, say what it remembers, or diagnose without fixing.

#eng-bugsMY

Y

YouCopy

@Claude what do you remember about this channel, and what routines do you have set up here?

### Ask for a diagnosis only[](https://academy.claude.com/use-cases/fix-a-reported-bug-with-a-draft-pr)

You decide how far Claude goes. Ask for the cause only, and Claude posts its findings in the thread without changing code or opening a pull request.

Simulation: a single message to Claude in an engineering channel for bugs or a report's thread, sometimes with Claude's reply. It asks Claude to change its approach, follow a pull request's CI, try reproducing new reports, say what it remembers, or diagnose without fixing.

#eng-bugsY

Y

YouCopy

Why is this failing? Trace it to a cause and post what you find. Diagnosis only, no fix.

## Tips[](https://academy.claude.com/use-cases/fix-a-reported-bug-with-a-draft-pr)

### Give Claude the repository and a clear stopping point[](https://academy.claude.com/use-cases/fix-a-reported-bug-with-a-draft-pr)

Prior to your first message, Claude has no copy of your code when a thread starts. Once you name the repository in your messages Claude clones it. Tell it when to stop, such as once CI passes, so it knows when the fix is finished.

### Teach Claude your repository's conventions once[](https://academy.claude.com/use-cases/fix-a-reported-bug-with-a-draft-pr)

Claude can follow conventions for a repository every time it works there, such as where files go or what a pull request must include ([make repo conventions stick(opens in new tab)](https://claude.com/docs/claude-tag/users/good-habits)).

## Related resources[](https://academy.claude.com/use-cases/fix-a-reported-bug-with-a-draft-pr)

- Learn more in the [Introduction to Claude Tag(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag) course.
- [Get started with Claude Tag(opens in new tab)](https://claude.com/docs/claude-tag/users/getting-started): add @Claude to a channel and see what it can read there.
- [Fix bugs(opens in new tab)](https://claude.com/docs/claude-tag/users/use-cases/fix-bugs): the Claude Tag docs page this use case is based on.

Was this helpful?
