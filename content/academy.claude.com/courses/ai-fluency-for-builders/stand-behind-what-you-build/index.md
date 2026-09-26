Lesson 8 of 9 · AI Fluency for buildersStand behind what you build

# Stand behind what you build

Lesson 815 min

In this lessonBy the end, you’ll be able to

- Articulate what you own when you ship something AI helped build
- Identify the technical realities that surface at ship time and build feedback loops that catch them
- Make the call: ship it, fix it, or stop it

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-fluency-for-builders%2Fstand-behind-what-you-build)

## Diligence & sharing your work[](https://academy.claude.com/courses/ai-fluency-for-builders/stand-behind-what-you-build)

Embedded media: https://www.youtube-nocookie.com/embed/wrgLtG-IHKk?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Diligence & sharing your work · 3 min

SummaryTranscript

Diligence in the builder model is full ownership: you’re responsible for
the product from whether it should exist to whether it’s serving users
after launch. This lesson covers what it means to ship, the technical
realities AI won’t warn you about, why tests become your safety net the
moment something is live, and the underrated skill of deprecating your own
work.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=wrgLtG-IHKk)

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/stand-behind-what-you-build)

- **You own the outcome, not the output.** “AI wrote it” explains nothing and excuses nothing.
- **Shipping has its own technical vocabulary** (migrations, versioning, rate limits, feature flags) that AI will not surface unless you ask.
- **Tests make post-launch iteration safe.** The test-first habit is why you can keep changing things confidently.
- **Prototype freely, ship selectively.** Cheap code creates value only when paired with honest evaluation.
- **Access is a design decision.** Check who your assumptions exclude before you call something shipped.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/stand-behind-what-you-build)

### Ship the Clinic app

Shipping is where diligence becomes real — before you deploy, answer each of these honestly.

Once you’ve worked through these, deploy your app or host it as a prototype, share it with three real users, and make one iteration based on what you learn, with tests that verify the change.

- **Understanding** — Can you explain what your code does, not just what it should do?
- **Testing** — Do your acceptance tests still pass? Have you tested edge cases — closed clinic, missing data, zero wait time?
- **Access** — Who does your build not serve well?
- **Responsibility** — Could this output be misread or misused? Have you been transparent about AI’s role?
- **Feedback loop** — How will you know if it’s working after it ships?

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/stand-behind-what-you-build)

- How has your thinking about AI integration changed from the beginning of this course?
- What’s one thing you’ll do differently in your work with AI based on what you’ve learned?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/stand-behind-what-you-build)

You’ve built, evaluated, and shipped the Clinic Wait Time Checker. In the final lesson, you’ll bring the full 4D Framework together and leave with a real task already in motion.

Was this helpful?


## Transcript

Hi there, my name is Martina, and I'm an engineer at Anthropic. Throughout this course, you've delegated, described, and discerned. You have a clinic app that works. It's almost time to ship it.

In the 4D Framework, Diligence means taking responsibility for what you build with AI. Essentially, making sure your use of AI is transparent, ethical, and accountable. This includes being transparent about your AI use and disclosing it, taking ownership of the outputs that AI creates, verifying work before you ship, considering the impact of what you built on others, and honoring policies, privacy, and professional standards that govern AI use in your organization or industry. Rather than tell you what to value, I'm going to show you what Diligence looks like in my day-to-day as an engineer.

With AI, you can end up being the owner of code you didn't write. Diligence is how you catch up to your own code. Understand it, stress it, test it, and put the systems in place that catch what you miss. For me, that comes down to three habits.

When you're writing code yourself, it becomes apparent as you go that there are things you hadn't thought of. Some edge case, some decision you hadn't realized needed to be made. With AI, sometimes those end up getting decided without ever being surfaced to you. So I try to recreate that step on purpose, get those questions out in the open where I can actually weigh in. When an edge case pops into my head, I'll just say to the model, like, "Can you double check that users can't view other users' files?" After Claude builds something substantial, I ask directly, "What assumptions and trade-offs did you make?" What security risks should I be aware of? That ensures that you're looped in on the important decisions.

When Claude writes most of a pull request, I make sure to say so in the Description, not as a disclaimer, as information. This is relevant because AI makes a different shape of mistake than humans do. Deprecated APIs used confidently, code that's locally clean but inconsistent with the codebase, invented behavior for cases you never specified. A reviewer who knows that can better tailor their review.

It's easy to feel out of your depth when AI does the building. You can end up with working code you don't understand, which wasn't really possible before. But it's not that you can't understand it, it's just a separate step now, and AI can help with that too. Claude is more than happy to sit with you and patiently explain. It takes a bit of time, but that's what puts you back in the loop.

Here's the thing, the engineering best practices that existed before AI still apply after, maybe even more so, because now you're shipping faster, and you understand a smaller fraction of what you shipped. Tests are still the easiest way to make sure you don't break something while moving this fast. A solid test suite pins down the behavior you care about, so you can keep iterating without fear.

Observability hasn't gone anywhere either. Some things only show up when real users have it: so you want logs, error tracking, dashboards. You find out from your own data, not from a user email. And feature flags remain useful for when something does slip through. Having these safety nets in place is what lets you move fast safely.

Verification, transparency, understanding. Tests on one end, observability on the other. None of this is new to engineering. AI is just a new tool under your belt to get there.


## Video transcript

# Diligence & sharing your work

Hi there, my name is Martina, and I'm an engineer at Anthropic. Throughout this course, you've delegated, described, and discerned. You have a clinic app that works. It's almost time to ship it.

In the 4D Framework, Diligence means taking responsibility for what you build with AI. Essentially, making sure your use of AI is transparent, ethical, and accountable. This includes being transparent about your AI use and disclosing it, taking ownership of the outputs that AI creates, verifying work before you ship, considering the impact of what you built on others, and honoring policies, privacy, and professional standards that govern AI use in your organization or industry. Rather than tell you what to value, I'm going to show you what Diligence looks like in my day-to-day as an engineer.

With AI, you can end up being the owner of code you didn't write. Diligence is how you catch up to your own code. Understand it, stress it, test it, and put the systems in place that catch what you miss. For me, that comes down to three habits.

When you're writing code yourself, it becomes apparent as you go that there are things you hadn't thought of. Some edge case, some decision you hadn't realized needed to be made. With AI, sometimes those end up getting decided without ever being surfaced to you. So I try to recreate that step on purpose, get those questions out in the open where I can actually weigh in. When an edge case pops into my head, I'll just say to the model, like, "Can you double check that users can't view other users' files?" After Claude builds something substantial, I ask directly, "What assumptions and trade-offs did you make?" What security risks should I be aware of? That ensures that you're looped in on the important decisions.

When Claude writes most of a pull request, I make sure to say so in the Description, not as a disclaimer, as information. This is relevant because AI makes a different shape of mistake than humans do. Deprecated APIs used confidently, code that's locally clean but inconsistent with the codebase, invented behavior for cases you never specified. A reviewer who knows that can better tailor their review.

It's easy to feel out of your depth when AI does the building. You can end up with working code you don't understand, which wasn't really possible before. But it's not that you can't understand it, it's just a separate step now, and AI can help with that too. Claude is more than happy to sit with you and patiently explain. It takes a bit of time, but that's what puts you back in the loop.

Here's the thing, the engineering best practices that existed before AI still apply after, maybe even more so, because now you're shipping faster, and you understand a smaller fraction of what you shipped. Tests are still the easiest way to make sure you don't break something while moving this fast. A solid test suite pins down the behavior you care about, so you can keep iterating without fear.

Observability hasn't gone anywhere either. Some things only show up when real users have it: so you want logs, error tracking, dashboards. You find out from your own data, not from a user email. And feature flags remain useful for when something does slip through. Having these safety nets in place is what lets you move fast safely.

Verification, transparency, understanding. Tests on one end, observability on the other. None of this is new to engineering. AI is just a new tool under your belt to get there.

