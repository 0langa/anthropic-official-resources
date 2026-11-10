# One request, a workflow, or an agent

Before you build a feature on Claude, choose how much to build: one request, a workflow your code runs in a fixed order, or an agent that picks its own steps. Start from the simplest, see when to move to the next one, and practice the choice on a few feature ideas.

10 minClaude Platform

Say your product gets support tickets, and you want Claude to write a reply to each one. Before you build anything, choose how much to build. A bigger build often gets better results, but it also tends to cost more and keep your customers waiting longer.

**You can send a single request, run a workflow of several requests in an order your code sets, or use an agent that picks its own steps.** Start with the simplest, and move to the next one only when a test shows the simpler one falls short.

## Ask who decides the next step[](https://academy.claude.com/tutorials/one-request-a-workflow-or-an-agent)

The three options differ in who decides what happens after Claude answers.

- With a single request, nothing happens next, and Claude's answer is the result.
- In a workflow, your code decides. It sends the next request, in an order you wrote ahead of time.
- With an agent, Claude decides. It chooses each next step and which tools to use.

**To choose among the three options, first write down what a good result looks like.** For the support tickets, a good reply might be one that answers the customer's question, follows your refund policy, and needs only light edits before it goes out. With that written down, you can test the simplest option against it and see whether it falls short.

Quick check

You plan a feature that drafts release notes from merged pull requests. You haven't built anything yet. What do you write down before you choose how much to build?

The steps a workflow would run, in their orderThe tools an agent would need for the jobWhat a good release note looks like

## Start with a single request[](https://academy.claude.com/tutorials/one-request-a-workflow-or-an-agent)

A single request is one Messages API request, with one answer back. Along with the ticket, it can carry the help articles your code looks up for that ticket and a few past replies you liked, as examples to follow. **For many features, a single request built this way is usually enough.**

To see whether a single request is enough for your tickets, run it on real tickets from last month. Grade each reply against what you wrote down for a good one. Then read the replies that missed, and look at which kinds of tickets they answered. A test like this, with real inputs and a way to grade what comes back, is called an eval.

If the replies match what you wrote down, ship the single request and stop there. Where they miss, improve the request's instructions, articles, and examples before you move up.

One sign that a single request isn't enough is that a fix for one kind of ticket makes another kind worse. For example, you add your refund rules to the prompt, and the replies to technical questions get worse. When you keep trading one fix for another like this, try a workflow.

Quick check

A single request drafts release notes from merged pull requests. You run it on last month's releases and grade each note. What result tells you to try a workflow?

Each fix for one kind of release makes another worseA few notes miss the first time you run the testEvery note passes, but more steps might score higher

## Move to a workflow when you can list the steps[](https://academy.claude.com/tutorials/one-request-a-workflow-or-an-agent)

**Once a single request falls short, choose a workflow if you can write the steps down before the first ticket arrives.** A workflow fits a task that splits cleanly into fixed steps.

A workflow for the support tickets could run in two steps:

1. A first request sorts the ticket into one of three kinds: refund, technical question, or general question.
2. Your code sends the ticket in a second request, with the prompt and help articles for that kind of ticket.

Each kind of ticket now has its own prompt, so a change to the refund prompt doesn't touch the technical replies.

Splitting a task into requests also lets you see what comes out between steps. Each step is its own request, so you can log it, grade it, and check it before the next one runs. For example, your code can check that the first request returned one of the three kinds, and send any other answer to a person.

This workflow makes your customers wait longer, because the second request can't start until the first one finishes. You accept that wait to get more accurate replies, and your test has to show that you get them.

A workflow no longer fits when you can't write the steps down ahead of time. For example, a reply needs Claude to look up the customer's order, and what it checks next depends on what it finds there.

## Move to an agent only when you can't[](https://academy.claude.com/tutorials/one-request-a-workflow-or-an-agent)

Choose an agent only for an open-ended task, where Claude has to pick each next step with the tools you give it. Open-ended means it's hard or impossible to predict how many steps the task needs, and you can't write the steps down ahead of time.

For example, a customer writes that their parcel never arrived. Claude looks up their order history first and finds that the parcel went to an old address. So Claude reads your policy articles on wrong addresses next. Then it issues a refund or updates the ticket.

**An agent costs more, and its mistakes can build on each other.** The freedom to choose that makes an agent useful also makes it harder to test. It may run for many steps, so you need some trust in its decisions.

Before you choose an agent, answer these questions about the task:

- Is a better result worth the higher cost and the longer wait?
- Does Claude do this kind of task well?
- Can a wrong step be caught and recovered from, with tests, a review, or a rollback?

If the answer to any of them is no, stay with a workflow or a single request. For the support tickets, that means you keep the workflow for the kinds of tickets whose steps you can list, and send the rest to a person.

An agent fits only the tickets where the order of lookups and refunds changes from ticket to ticket. A person approves each refund, so the answer to the third question is yes.

Quick check

Your release-notes workflow handles routine releases, but some need steps you can't list ahead of time. An agent would publish straight to customers, with no review and no way to pull a note back. What do you do for those releases?

Move them to the agent, because you can't list the stepsKeep the workflow, and send those releases to a personMove them to the agent, and test it once it's live

## Try it on a few feature ideas[](https://academy.claude.com/tutorials/one-request-a-workflow-or-an-agent)

Try each feature idea on the three options to see what happens to it.

Try it: put four feature ideas on a single request, a workflow, or an agent, and watch what happens to each. Nothing is graded.

Idea 1 of 4

Start over



Turn an hour-long meeting transcript into five bullet points for people who missed it.

Single requestWorkflowAgent



1. Request
2. Result

One request turns the transcript into five bullet points.

Show the page's pickNext idea

## Where to go next[](https://academy.claude.com/tutorials/one-request-a-workflow-or-an-agent)

**Before you build any feature on Claude, write down what a good result looks like, start with a single request, and move up only when a test shows it falls short.** Make the same choice now for the feature you're planning. To check your choice, name who decides the next step in your feature and the test result that would move you up.

The test that tells you when to move up is an eval. Next, take [Introduction to evals(opens in new tab)](https://academy.claude.com/courses/introduction-to-evals) to build a small eval on your own data.

Two more pages help once you've chosen. If your feature gives Claude tools, [Tool use with the Messages API(opens in new tab)](https://academy.claude.com/courses/tool-use-with-the-messages-api) shows how to make tool use reliable, responsive, and cheaper to run. If you choose an agent, [What is Claude Managed Agents?(opens in new tab)](https://academy.claude.com/tutorials/what-is-claude-managed-agents) covers a managed environment that runs the agent and its tools, so you don't build that part yourself.

Was this helpful?
