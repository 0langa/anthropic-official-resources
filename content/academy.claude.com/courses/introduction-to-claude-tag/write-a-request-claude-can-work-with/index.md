Lesson 9 of 11 · Introduction to Claude TagWrite a request Claude can work with

# Write a request Claude can work with

Lesson 915 min

In this lessonBy the end, you’ll be able to

- Set Claude up for success before you send a request
- Write a request Claude can succeed with
- Verify Claude's output and give feedback that improves its future work

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fintroduction-to-claude-tag%2Fwrite-a-request-claude-can-work-with)

You have now seen Claude reply on its own, run work on a schedule, and keep going while you are away, which means you can hand it larger jobs than a single question. That kind of work benefits from a different kind of instruction than a one-off ask.

When you hand Claude a task or a responsibility rather than a question, think about what Claude would need to understand the work well enough to know when to step in, when it is done, and how to decide something when you are not around. This lesson walks through choosing the work, writing that request, and what to expect while Claude carries it out.

## Step 1: Pick the work[](https://academy.claude.com/courses/introduction-to-claude-tag/write-a-request-claude-can-work-with)

Before you write, think through what you want, what Claude can access, and how you'll know if it worked.

- **Shift from step-by-step thinking to outcome thinking:** Picture delegating to someone who understands your workspace completely. What would you ask them to pull together or figure out?
- **Consider the inputs your task needs and make sure Claude can reach them:** Does it have access to the tools, files, and threads the work depends on? If unsure, ask `@Claude what can you access from this channel?` If Claude doesn't have what it needs, either move the task to a channel that does or ask your admin to connect the tool ([lesson 5(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag/pick-the-right-place-for-the-work)).
- **Think about who can see the work:** Check if the channel is appropriate. Sensitive work belongs in a private channel ([lesson 4(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag/claude-in-a-private-channel)).

## Step 2: Write the request[](https://academy.claude.com/courses/introduction-to-claude-tag/write-a-request-claude-can-work-with)

- **State the goal, then the process that matters:** Say what you're trying to accomplish and why, and what a good result looks like and where it will go. Add the steps or constraints you care about; for the rest, knowing the intent lets Claude make good calls on the details you didn't spell out.
- **Point to the inputs you want Claude to use in the task:** It can read the channel, search the workspace, and use that channel's connections or attached files. If you have an example of a good result, link or paste it, or tell Claude where to find it.
- **Build in a way to check Claude's work:** Once you've thought about what success looks like, how will you be able to tell if Claude got it right? Think about ways you can ask Claude to verify the work, like giving it a rubric for what a good result looks like, linking its sources, or separating what it verified from what it inferred.
- **Tell Claude what to prioritize:** State what you care about in a good response. Consider things like the audience, the level of polish, what to avoid, or which decisions to bring back to you. When Claude faces a choice you didn't expect, these help steer its judgment.

For some tasks, you may want to write the request differently:

- **For big, complex tasks that need planning,** ask Claude to propose an outline of its plan so you can align on an approach before it starts.
- **When the work is exploratory or ambiguous,** say so. Give Claude the question and why it matters, then leave room for it to propose a few directions before deciding how to execute.
- **For proactive or scheduled work,** tell Claude what it owns and where you decide. One way to do this is to [set a north star(opens in new tab)](https://claude.com/blog/building-effective-human-agent-teams): a person posts one ambitious, measurable goal in a channel Claude reads and pins it there. Claude in that channel can then propose work toward the goal on its own.

To learn how to set up and run a human-agent team, see the [Building Effective Human-Agent Teams(opens in new tab)](https://academy.claude.com/courses/building-effective-human-agent-teams) course. For examples, see [use cases of what Claude can do(opens in new tab)](https://claude.com/docs/claude-tag/users/use-cases).

Exercise: across three workplace cases, the learner reviews a request to Claude, its reply, and where the result fell short, then picks which missing part of the brief would have fixed it.

What did the request leave out?

Each case shows a request, Claude’s reply, and where the result fell short. Pick the part of the brief that would have changed it.

Case 1 of 3

Y

@Claude compare the three status-page vendors in this thread. Use the pricing PDFs Sam posted and lay it out like last year’s CDN comparison. Link every figure to its source, and post it here for me to take into the review.

ClaudeHere’s the comparison in last year’s layout, every figure linked to its source. All three are solid options depending on your priorities.

status-page-vendors · comparison table

Where Claude fell shortThe table is accurate and well laid out, but it doesn’t recommend one. The team still has to work out which vendor to pick before Friday.

Missing:What it’s forWhere to look, and an exampleA way to check itWhat comes back to you

Next case 

## Step 3: Let Claude work[](https://academy.claude.com/courses/introduction-to-claude-tag/write-a-request-claude-can-work-with)

Claude reacts to your message and posts a short note that it's started. It keeps working without you, and if you're working in a channel, anyone in it can jump in to add context or adjust Claude's plan. Everything stays in the thread, so anyone can pick up where you left off.

You'll see:

- **A progress checklist, edited in place:** A longer task gets [one message that Claude updates as it works(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works). Those edits send no notification, so look for items ticked off since you last checked, or say in your request that you want a message at the bigger decision points and Claude will post one in the thread.
- **A new reply when Claude needs you or has a result:** A question, a problem it cannot solve alone, or the finished work. Claude waits for your answer to a question.
- **Quiet usually means working:** If the work gets blocked, Claude usually says so in a reply rather than going silent.

Editing a message you already sent has no effect; send a [new reply instead(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works). Each top-level message starts a new task for Claude. Keep separate tasks in different threads, but remember that Claude's channel notes apply to every thread in the channel.

Exercise: in a mock Slack channel, Claude is partway through a task and shows its checklist in the thread. The learner picks one of three ways to change the request, then sees whether that choice reaches the running task.

Claude is partway through the prep and you would rather get it as a linked doc than a long message. Pick where you would tell it.

#call-prep

Y

You9:12@Claude prep me for the Acme renewal call at 2pm: open items, the last three calls, and support history. Post it in this thread.

Claude9:13

- ✓Pulled open items from the CRM
- ✓Summarized the last three calls
- ✱Adding support history
- ○Post the prep in this thread

Reply in the task’s threadunder Claude’s checklistEdit your original messagechange “in this thread” to “as a linked doc”Post a new message in the channel@Claude make that a doc instead

## Step 4: Review the result[](https://academy.claude.com/courses/introduction-to-claude-tag/write-a-request-claude-can-work-with)

Review Claude's work before you use it, and look more closely when more is at stake. A result in a thread arrives without the dashboards or documents you would usually check it against. Because you built verification into the request, you can follow the links, files, or queries it cited to see how it reached its answer.

If a result needs adjusting, see what Claude actually did by reading its checklist. If you spot something that needs fixing:

- If Claude looked in the wrong place or couldn't reach the right one, move the task to a channel with that tool or ask your admin to connect it.
- If Claude's work is incomplete, ask which sources or channels it searched. It may have been blocked from some of the sources you would have wanted it to use, or stopped the task early.
- If your request wasn't clear, reply and rewrite it. Include what you want, the form, what to prioritize, and where to look.
- If Claude missed a pattern your team follows, including how you check work, save it to memory so everyone in the channel benefits going forward ([lesson 6(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag/refine-claudes-learning-through-feedback)).



If you run into other errors, visit the [troubleshooting page(opens in new tab)](https://claude.com/docs/claude-tag/users/troubleshooting) or contact your admin. [`@Claude !help`(opens in new tab)](https://claude.com/docs/claude-tag/users/commands) lists the commands you can send in a thread.

## Try it[](https://academy.claude.com/courses/introduction-to-claude-tag/write-a-request-claude-can-work-with)

### Run one real task through all four steps

In your workspace · 15 minutes

1. Pick a task and confirm Claude can reach what it needs: `@Claude what can you access from this channel?`
2. Write the request with the goal, where to look, a way to check, and what to prioritize, then send it in the channel where the material is.
3. While it runs, reply in the thread to add one thing.
4. Review the result against its links, then save one correction with `remember for this channel`.

**Done when:** you have checked the result, and the channel's notes hold your correction.

## Before you move on[](https://academy.claude.com/courses/introduction-to-claude-tag/write-a-request-claude-can-work-with)

**Key takeaway:** hand over a whole task with a goal, its inputs, and a way to check it; steer in the thread; check the result before you use it.

**After practicing:** You will have run one real task from request to reviewed result, and saved the correction it needed for next time.

Was this helpful?
