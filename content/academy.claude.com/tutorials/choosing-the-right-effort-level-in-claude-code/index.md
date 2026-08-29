# Choosing the right effort level in Claude Code

Effort tells your model how many resources to spend on a task. When to turn it down, when to turn it up, and why the default is the right place to start.

15 minClaude Code

![](https://academy.claude.com/assets/v1/thumbnail.dark-i0lrj1mq.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-i0lrj1mq.png)

Developers working with Claude Code will eventually run into a cost or usage constraint. Still, developers want to work on the frontiers of model intelligence and often default to the most capable model available.

No matter which model you are using, another important dial for cost and token usage is the effort level. Match the effort to the complexity of the task; cost is what happens when you do not, in either direction.

## Effort does not change what the model knows[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

Effort tells your model how many resources to spend on the task in your prompt. If you set effort to the lowest level, the model will try to achieve the objectives of the prompt with as few resources as possible: fewer tool calls, fewer tokens, and less work overall. If you set effort to the maximum, you are signaling to the model that it can and should use as many resources as it needs to complete the objectives in the prompt.

Effort sets how hard the model works, not how much it knows. The model you choose determines the level of capability you are working with. Effort is a signal of how hard you want that model to work.

The effort scale

Select a level to see how the model’s work changes.

the default is one of these two, depending on the model

lowmediumhighxhighmax

use as little as possibleuse whatever it takes

What changes in each direction

Toward low

- Less reading, fewer tool calls
- Less thinking, fewer tokens
- Fewer turns before it hands back
- Little double-checking

Toward max

- More reading, more tool calls
- More thinking, more tokens
- More turns before it hands back
- More double-checking of its own work



Same model at every level. You choose the model with `/model` and the effort with `/effort`.

## When to change the effort[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

When the effort is too low for the task, the model will likely stop early and come back to you with unfinished work. That is a signal that what you asked is more complex than the effort you allowed for. Then you have to figure out where it left off and prompt again to get it to continue. In the end that can cost more than if you had set the effort level correctly.

When the effort is too high, you may not notice it on every prompt or every task: the model will use more tokens than necessary, the response times will be longer, and you will notice a pattern of overthinking, or of identifying more tasks than you actually assigned. You are sending the signal "what I am describing to you is really complex and difficult," and the model will match that signal and treat the work as that complex.

Signs of a mismatch

Too low shows in a single reply. Too high shows only as a pattern.

Too lowAbout rightToo high

Effort set to what the task needs

What you notice

- It finishes what you asked, and only that, in one go
- The wait fits the size of the change
- One level lower and it tends to stop short

what the task needswhat you set

lowmax

The default sits in the middle, and it is not arbitrary: it is tuned for each model to the level where most tasks finish without overspending. That is why it is the right place to start.

You adjust down for tasks that you know are simple and should not require a big spend of resources: time, turns, tool calls, or document reads. If you have already run this type of task at the default level, try running it one level lower and see if you notice any difference in quality. If not, keep going down one level at a time until you do.

You go up from the default when you know you are describing something that should take a long time and require a lot of turns and double-checking. The other time to turn the effort up is when the task is something you cannot quickly check yourself, and you want more self-checking from the model as it works. The same rule applies in this direction: go up one level, rerun, and stop when it starts finishing the things you think it should.

Three tasks · same model, each in a fresh session at the default effort

Before you press Enter: which way would you move the effort, and why?

The task1 of 3



claude · ~/work/your-project

✻ Claude Code ~/work/your-project

your model · default effort

❯ Write a docstring for this function.

1Effortrelative to the default

Turn it downLeave it at the defaultTurn it up

2Reason

You can describe it exactly and check the result in one read.A docstring needs the whole module read first, so give it more effort.It is quick, so the setting does not matter either way.

Check my answerPick an effort setting and a reason first.

## Which dial to turn: effort or model?[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

Change the model only if more effort did not fix the problem. Did the model not know enough, or did it not try hard enough? If it knew enough but did not try hard enough, change effort. If it knew enough but worked too hard, that is also an effort problem. If changing the effort is not fixing it and you are not on the most capable model, that is a sign the model you picked does not have the knowledge, or is not capable enough, for the task.

The two dials

Read what came back, then turn the dial you would reach for first.



What came back · 1 of 3

Fixed most of the failing tests you pointed it at, then stopped and handed back a summary of the ones still failing.



low

medium

high

xhigh

max

auto ↺

Effort dial`/effort`how hard it works

less capable

more capable

Model dial`/model`how much it knows

Tap a level on either dial, or use the buttons under it. Your first turn counts as your answer.

### When you change models, start again at the default[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

The level names are the same on every model, but the same level does not mean the same amount of work on a different model.

The same levels on three models

Hold one task still and see where each model finishes it.

The level names match across models, but each scale is tuned to its own model, so the level where this task gets done moves: a more capable model may finish it lower on the dial. Change models, and you find your level again from the default.

One task, fixed

same prompt, same bar for done, on every row

A less capable model

might not finish it until the top of its dial

low

medium

high

xhigh

max

A more capable model

might finish it partway up its dial

low

medium

high

xhigh

max

The most capable model

might finish it low on its dial, with levels to spare

low

medium

high

xhigh

max

← likelier to stop short · likelier to do more than asked →Illustrative, not measured

Whenever you choose a model, start the effort at the default and adjust up and down as you need to. Say you try a difficult task with the least capable model available, to see if it can do the job for less. After you dial the effort up as high as possible, the model is still not completing the task at the quality level you need, so you go up a model. Do not leave the effort on max; try again at the default. The more capable model may still complete the task with less effort.

One task, four runs

Change the model or change the effort, and see what comes back.

TaskA failing test in code that uses an uncommon date-and-time library. The right fix depends on that library’s time zone rules.

Model

Less capableMore capable

Effort

DefaultMax

Not fixed: it did not know the library

What came back

- Read the test and the code under it
- A fix built on a guess at the rules
- The test still fails

Tokens used

Turns before it handed back

Relative across runs, not measured. Bars compare work, not price.

Takeaway: It did the work but guessed at time zone rules it did not know: a knowledge miss, not an effort miss. More effort might cover the gap by reading the library itself, at the price of a lot of reading.

Whenever there is a new model, including a newer version of the one you already use, revisit the tasks you have been doing. See if you can get the same results with the more capable model at a lower effort, which might make those tasks cheaper.

## Setting the effort level[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

You can change effort through any of the following:

**For this session only:**

- **`--effort` flag:** pass a level name when launching Claude Code

**For this and future sessions:**

- **`/effort`:** run `/effort` with no arguments to open an interactive slider, `/effort` followed by a level name to set it directly, or `/effort auto` to reset to the model default
- **In `/model`:** while selecting a model, use the left/right arrow keys to adjust the effort slider
- **Settings:** set `effortLevel` to `low`, `medium`, `high`, or `xhigh` in your settings file
- **Environment variable:** set `CLAUDE_CODE_EFFORT_LEVEL` to a level name or `auto`

**For one skill or subagent:**

- **Skill and subagent frontmatter:** set `effort` in a skill or subagent markdown file to override the effort level while it runs

A level you set with `/effort` persists into your next session, so use the `--effort` flag when you want a level for one run only. Max uses enough resources that Claude Code makes it session-only unless you set it through the environment variable, so you cannot leave it on by accident.

Ultracode is not an effort level. It is a session-only Claude Code setting that runs the model at `xhigh` and, for substantive tasks, also has Claude orchestrate [dynamic workflows(opens in new tab)](https://code.claude.com/docs/en/workflows), fanning work out to multiple agents.

The /effort picker and the session header

Set the level with /effort, then confirm it in the session header.

claude · ~/work/your-project

❯ /effort

Effort how hard the model works on each turn

low medium high xhigh max

Fewer tokens and tool calls. Hands back sooner.

← → to adjust · Enter to confirm · Esc to cancel

1

The picker. The level you are on is highlighted, and the dim line under the scale describes it. That line changes as you move along the scale; Enter keeps the level you stop on.

claude · ~/work/your-project

✻ Welcome to Claude Code!

/help for help, /status for your current setup

your model with low effort

cwd: ~/work/your-project

❯

? for shortcutseffort: low

2

The session header. After you confirm, the level appears next to the model name at the top of the session, and the footer shows it briefly at startup and again whenever it changes.

Simplified. “your model” and the folder are placeholders; the levels offered and exact wording depend on your model and Claude Code version.

When more than one method sets the effort, the one nearest the top of the order below wins.

Which setting wins

Turn layers on and pick a level for each to see which one takes effect.

1

Environment variableNot set

lowmediumhighxhighmax

`off`

Wins over everything below, even a running skill or subagent that sets its own.

2

Skill or subagent frontmatterNot set

lowmediumhighxhighmax

`off`

Only while that skill or subagent is running.

3

Set during this sessionIn effect

lowmediumhighxhighmax

`/effort high`

What you last set in the session you are in. /effort and /model also save low through xhigh for next time; --effort and max end with the session.

4

effortLevel in settingsNot set

lowmediumhighxhigh

`off`

The level a new session starts at. Takes low through xhigh, not max.

5

Model defaultOverridden by layer 3

`/effort auto`

What you get when nothing above is set. /effort auto resets you to it.

always on

Effort in effect right now

highresolved from layer 3, set during this session

3

An organization cap, if you have one, trims the levels available at every layer. The order stays the same.

Whatever wins above, your organization may cap it. On Enterprise plans an admin can set a [maximum effort level per model(opens in new tab)](https://code.claude.com/docs/en/model-config). Levels above the cap do not appear in the `/effort` picker, and if you ask for one with `/effort` or `--effort`, Claude Code runs at the cap and tells you so.

## Worked example[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

The same prompt run three times on one model, at low, the default, and max: play each level and watch how much work goes into the same result. The prompt asks for a small CSV-to-JSON script tested on a sample file, boring on purpose so the effort levels have room to differ.

One prompt at three levels

Simulated replay

“Write a script that converts a CSV file to JSON. …”

lowwrites it, stopsdefaultwrites it, runs itmaxbuilds a whole tool

claude

> Write a script that converts a CSV file to JSON. …

Press Play this level to watch a simulated session. The 8× speed or Skip to end shortens the long one.

Elapsed (simulated)

0:00

Tool calls

0

Lines written

0

Modeled on a real session at each level; illustrative, not a benchmark, and your runs will differ. Bars scale to the max run.

Session timeline · each tick is a tool call0:00 / 0:27

Play this level

1×8×

playback speed

Runs so farPlay each level to fill this in. Every level ends with a working converter.

Tool calls

lownot played

defaultnot played

maxnot played

Lines written

lownot played

defaultnot played

maxnot played

Elapsed

lownot played

defaultnot played

maxnot played

## Try it in your own environment[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

Three separate sessions. Do the same four steps in each one. You assemble the comparison yourself, because `/usage` reports only the session you are in. Check it at the end of each run, write down the token count it reports for the session, then exit and start the next run fresh.

### 1. Launch a fresh session in its own empty folder, at that run's level[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

bash

```
# from an empty folder outside any repo
# run 1 · low
mkdir effort-low && cd effort-low && claude --effort low

# run 2 · default
cd .. && mkdir effort-default && cd effort-default && claude
# then run /effort auto

# run 3 · max
cd .. && mkdir effort-max && cd effort-max && claude --effort max
```

The flag (or `/effort auto`) makes each run start at its own level, because `low` through `xhigh` persist into your next session once set with `/effort`.

### 2. Paste the same prompt[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

Write a script that converts a CSV file to JSON. Save it as csv\_to\_json.py in this folder. Test it on this CSV, saved as sample.csv:

```
name,team,start_date
Priya,Payments,2024-03-18
Marcus,Platform,2023-11-02
Lena,Support,2025-01-27
```





Open in Claude Code

### 3. When Claude hands the work back, check what this session used[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

`/usage`

Look for the session's token total; the rest of the screen varies by plan.

### 4. Exit, then go back to step 1 for the next level[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

`/exit`

The three token counts should climb from low to max, and all three folders should hold a working converter. Open the three scripts side by side: the difference in how much got built is the difference you paid for.

## The habit to keep[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

Managing effort comes down to one habit: start at the default, watch what comes back, and adjust one level at a time. Keep that loop running and you will know what level a task needs, and be able to explain to a coworker or an admin why.

## Learn more[](https://academy.claude.com/tutorials/choosing-the-right-effort-level-in-claude-code)

- [**Choosing a Claude model and effort level in Claude Code**(opens in new tab)](https://claude.com/blog/claude-model-and-effort-level-in-claude-code): the concepts behind model choice and effort, from the Claude Code team.
- [**Model configuration**(opens in new tab)](https://code.claude.com/docs/en/model-config): the full reference for `/effort`, settings, precedence, and organization limits.

Was this helpful?


## Too low

Effort set lower than the task needs

What you notice

- It stops short and hands back with part of the task undone
- It does less reading and checking than the task called for
- You spend the next prompt getting it to finish

what the task needswhat you set

lowmax


## Too high

Effort set higher than the task needs

What you notice

- It finishes, so no single reply looks wrong
- Small changes come back slower and use more tokens
- It takes on work you did not ask for

what the task needswhat you set

lowmax
