Lesson 8 of 11 · Introduction to Claude TagPut recurring work on a schedule

# Put recurring work on a schedule

Lesson 810 min

In this lessonBy the end, you’ll be able to

- Set up a routine in one message with day, time, and format
- Shape a routine by replying to its first post
- List, change, pause, or stop the routines in a channel

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fintroduction-to-claude-tag%2Fput-recurring-work-on-a-schedule)

Some work should happen continuously, on a schedule you choose, without you having to ask each time. This may look like a weekly report built from your team's tools, or a daily check that posts only when something needs attention.

Claude can [run recurring work as routines(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity): tell it once what the work is and when to run it, and instead of waiting for a mention it runs on that schedule and posts the results in the channel.

Types of [routines(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity):

- **Weekly or daily reports:** A status digest, a summary of decisions made, a list of what's blocked or waiting.
- **Continuous monitoring:** [Watch a channel(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity) or repository for specific changes. When Claude finds something, it posts an alert or summary here.
- **Regular checks:** Review what's pending, flag anything overdue or at risk, surface patterns that matter.

Instead of needing to tag Claude for the same task every week, you set it up once and it runs without you. Claude can keep watch in the channels and tools no one on the team has time to check.

## How to set one up[](https://academy.claude.com/courses/introduction-to-claude-tag/put-recurring-work-on-a-schedule)

Write one message that says what Claude should read, what to look for, what to post, and when. A routine runs with the tools connected to the channel, so it can compare sources and post only what needs someone's attention:

@Claude every weekday at 9am, compare the onboarding tracker with what was said in this channel yesterday, and post only what needs attention: anything overdue, and anything the thread says has slipped that the tracker still shows on time. Name the owner, link the message, and suggest a next step. If nothing needs attention, post nothing.

Copy prompt

On a quiet day this routine posts nothing, so a post from it always means there is something to look at.

When the first result arrives, reply in that thread with what you want different. Claude reads your feedback, learns from it, and applies it to every run that follows. Treat that first post as a draft: a little shaping early keeps the routine useful and worth reading rather than one more message the channel scrolls past.

## Check or change what is scheduled[](https://academy.claude.com/courses/introduction-to-claude-tag/put-recurring-work-on-a-schedule)

Routines belong to the channel. Each one posts there for everyone to see, and anyone in the channel can list or change them:

- **List:** ask `@Claude what routines do you have set up in this channel?` or send [`@Claude !routines`(opens in new tab)](https://claude.com/docs/claude-tag/users/commands).
- **Change or pause:** describe the change, such as "pause the Monday digest until I say I'm back."
- **Stop:** name the routine, such as "stop the Friday status."

A routine [keeps running even if the person who set it up leaves(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity) the channel or the organization, and anyone still in the channel can pause or stop it.

## Practice[](https://academy.claude.com/courses/introduction-to-claude-tag/put-recurring-work-on-a-schedule)

Exercise: the learner marks which of five parts, such as when to run and what to do in edge cases, a sample scheduled-job request includes, then checks. A second step asks how to change a job that is already running.

Set up a scheduled job

Sam wrote this to set up a morning post for the team. Claude can fill gaps on its own, but a few things are worth spelling out so the job runs the team’s way rather than Claude’s best guess. Which of these does the message tell Claude, and which does it leave to Claude?

S

Sam@Claude every weekday at 8am, check the ticket queue and the on-call schedule, and post who should pick up what’s overdue, with links.

- Tell Claude when to run it

  IncludedNot included
- Tell Claude where to look

  IncludedNot included
- Tell Claude how to decide what counts

  IncludedNot included
- Tell Claude what to post

  IncludedNot included
- Tell Claude what to do in the edge cases

  IncludedNot included

Check

## Try it[](https://academy.claude.com/courses/introduction-to-claude-tag/put-recurring-work-on-a-schedule)

### Put one small task on a schedule

In your workspace · 5 minutes

1. Pick something small you ask for every week.
2. Send it in one message: what to read, what to post, when (day and time), the [format(opens in new tab)](https://claude.com/docs/claude-tag/users/good-habits), and what to do when there is nothing to report.
3. Ask `@Claude what routines do you have set up in this channel?` to confirm.
4. When the first post lands, reply in its thread with one change.

**Done when:** the routine list shows what you meant, and the first post's thread has your change.

## Before you move on[](https://academy.claude.com/courses/introduction-to-claude-tag/put-recurring-work-on-a-schedule)

**Key takeaway:** work that recurs can run without anyone asking.

**After practicing:** You will have one routine listed in a channel, with its first post adjusted from the thread.

Was this helpful?
