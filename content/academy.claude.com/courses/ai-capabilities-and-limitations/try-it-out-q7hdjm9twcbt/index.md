Lesson 9 of 13 · AI capabilities and limitationsTry It Out: Working Memory

# Try It Out: Working Memory

Lesson 910 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-capabilities-and-limitations%2Ftry-it-out-q7hdjm9twcbt)

## Context Degradation[](https://academy.claude.com/courses/ai-capabilities-and-limitations/try-it-out-q7hdjm9twcbt)

*When more context makes things worse*

A natural instinct when using AI is to give it **everything**. Paste in the whole document. Include every message. Add all the context you can find. More information means better answers, right?

Not always. There's a phenomenon that anyone who has crammed for an exam knows intuitively: **there's a limit to how much you can hold in mind at once**. And the things in the middle tend to disappear first.

Before we talk about how this affects AI models, let's see how it affects **you**.

## The Memory Test[](https://academy.claude.com/courses/ai-capabilities-and-limitations/try-it-out-q7hdjm9twcbt)

Memory Test

You’ll see 15 words, one at a time. Each appears for about 1.5 seconds. Try to remember as many as you can.

Show the Words

## The U-Shaped Curve[](https://academy.claude.com/courses/ai-capabilities-and-limitations/try-it-out-q7hdjm9twcbt)

What you just experienced has a name: the **serial position effect**. Psychologists have studied it for over a century. Items at the beginning of a list benefit from **primacy** (they get rehearsed more), and items at the end benefit from **recency** (they're still fresh). The middle gets neither advantage.

Position in list →Recall probability →PrimacyLost in the middleRecency

The fascinating part: **large language models exhibit the same pattern**. In 2023, researchers at Stanford tested what happens when you place a key fact at different positions within a long context window. Accuracy was highest when the fact appeared at the very beginning or very end — and dropped by more than 30% when it was buried in the middle.

This isn't a quirk. It's structural. Transformer attention patterns naturally weight the edges of the context window more heavily.

## What This Means for Prompting[](https://academy.claude.com/courses/ai-capabilities-and-limitations/try-it-out-q7hdjm9twcbt)

If you paste a 20-page document into a prompt and ask a question about something on page 11, the model is more likely to miss it than something on page 1 or page 20. This has real implications for how you structure context.

❌ Dangerous pattern

System prompt

Chat message 1

Chat message 2

...

⚠ Key instruction buried here

...

Chat message 18

Latest user message

✓ Safer pattern

System prompt

★ Key instruction (up front)

Chat message 1

Chat message 2

...

Chat message 18

Latest user message

★ Key instruction (repeated)

The practical advice is straightforward: **put your most important instructions at the beginning and end of the context**. If a constraint absolutely must be followed, state it early in the system prompt and restate it near the end. Don't rely on the model to give equal weight to everything in between.

This is the starting point, not the ceiling. As you get more fluent you'll discover increasingly sophisticated ways to structure context so the model reliably understands what matters — leveraging where in the window information sits, what to include versus cut, and how to keep critical instructions from sliding into the dead zone. The goal is always the same: make it obvious to Claude what you actually need.

## The Bigger Picture[](https://academy.claude.com/courses/ai-capabilities-and-limitations/try-it-out-q7hdjm9twcbt)

Context degradation is the reason that "just give it more context" is not always the answer. Every piece of context you add pushes other pieces further into the middle — the attention dead zone. This is the core tension of **context engineering**: not just what to include, but where to put it and what to leave out.



Key takeaway

More context ≠ better results. The model's attention is finite. Curate
ruthlessly, place strategically, and repeat what matters.

Your own memory test told you this already. The words in the middle vanished. The same thing happens inside every long conversation, every pasted document, every context window that's been filled to the brim. The fix isn't more — it's smarter.

Was this helpful?
