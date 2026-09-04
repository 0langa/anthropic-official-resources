Lesson 4 of 9 · AI Fluency for BuildersDelegation & the builder's toolkit

# Delegation & the builder's toolkit

Lesson 415 min

In this lessonBy the end, you’ll be able to

- Introduce the builder's toolkit and where AI adds value at each stage
- Explain why delegating implementation is safe and delegating judgment is not
- Write acceptance tests that define done before a single line of code exists

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fai-fluency-for-builders%2Fdelegation-the-builder-s-toolkit)

## Delegation & the builder's toolkit[](https://academy.claude.com/courses/ai-fluency-for-builders/delegation-the-builder-s-toolkit)

Embedded media: https://www.youtube-nocookie.com/embed/AWSZoy3w\_nE?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Delegation & the builder's toolkit · 5 min

SummaryTranscript

Before you write a single line of code, you make a dozen decisions that
shape whether what you build will matter. This lesson reframes delegation:
it’s not “should I use AI here?” but “I have a customer problem — how do I
break it down, and what role does AI play?”

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=AWSZoy3w_nE)

The Builder’s Toolkit

Click any capability to see where AI fits in your build process.

▼ AI is strongest here

EmpathyDesignArchitectureImplementationJudgmentShipping

Step 1 of 6

Empathy

AI weak

Understanding who you’re building for. AI can surface data and personas — it can’t feel the gap.

→

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/delegation-the-builder-s-toolkit)

- **Delegation** means decomposing the problem first, then deciding what AI handles at each step.
- **Write acceptance tests** before code. They give you and AI a shared definition of done.
- As AI accelerates implementation, your value shifts to **framing problems** and **raising the bar**.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/delegation-the-builder-s-toolkit)

### The Clinic Wait Time Project, Part 1

This project threads through the entire course. You'll return to it in every lesson, and by the end you'll have built something real. But in this lesson, you write zero code. That's intentional.

**The scenario:** A community health clinic needs a way for patients to check wait times before coming in. That’s all you’ve been told.

Your job this session is to do the work that comes before building. You’ll produce three deliverables.

### Deliverable 1: A Problem Brief (one page max)

Answer these questions in plain language:

- Who are the users? Be specific. Patients, yes — but which patients? What about staff? Who else touches this?
- What do they actually need? Not “a wait time checker.” What outcome are they hoping for?
- What does a great solution feel like to use? Describe the experience, not the features.
- What are the real constraints? Think budget, technical skill at the clinic, patient access to devices, privacy requirements.

### Deliverable 2: A Delegation Plan

Map the build to the six toolkit capabilities. For each one, decide which AI collaboration mode fits best: **Automation** (AI does it, you check), **Augmentation** (you and AI work it together), or **Agency** (AI operates with latitude inside boundaries you set). Make a simple table — six rows, one per capability.

### Deliverable 3: Acceptance Tests

Write five to seven statements that define “done.” Each must be concrete enough that a stranger could tell you whether the finished product passes or fails.

**Good:** “A patient with a basic smartphone can find the current wait time in under 30 seconds without creating an account.”
**Bad:** “The system is easy to use.”

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/delegation-the-builder-s-toolkit)

- Where did you spend most of your time across the six capabilities on a past project? Where should you have spent more?
- If implementation became effectively free tomorrow, where would your value as a builder come from?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/delegation-the-builder-s-toolkit)

In the next lesson, we move from delegation to description. You’ve decided what to build and who’s doing what — now you need to communicate that clearly enough that AI can actually execute it.

Was this helpful?


## Transcript

If you've spent any time building with AI, you've probably noticed something. The hard part isn't getting AI to write code, the hard part is knowing what code you want an AI to write. Many people think of delegating something to an AI as a simple yes or no question. But for builders, knowing exactly what and how to delegate is much more complex. Your customer comes to you with a problem. How do you decompose it into something that you can actually build? And what role does AI play at each stage of that work?

Here's a useful frame. Imagine yourself as the lead on a project and AI as your team. A great lead doesn't just assign tasks. They frame the problem so everyone understands what they're solving. They set goals so the team knows what good looks like. They decide what to tackle first. And critically, they know which decisions to make themselves, and which ones to hand off. That's Delegation in the builder sense. And it starts well before any code gets written.

Every builder carries a toolkit that they may not know that they have. You could boil it down to six capabilities you can reach for at any different moment in a build. AI can help with all six, but it's much stronger at some than others, and knowing the difference is a key part of AI fluency for builders.

The first capability is empathy. What does the person we're building for actually need? Not what they said that they want, but what will actually truly help their work. This is where you talk to users and observe what frustrates them. AI can help you organize what you learn here, but it can't sit with a clinic receptionist and notice that she checks her phone 40 times a day because patients keep calling to ask about wait times. That observation is all you.

The second is design. What should we build, and why? This is where you weigh trade-offs, make bets, and decide what matters. Should it be a text message or a web page? Should it show exact wait times or ranges? Those are judgment calls. All AI can do is generate options, but the judgment about which option fits is yours.

Third is architecture. How should the thing be structured? What are the pieces, and how do they fit together? AI knows patterns. It's seen a thousand systems like the one you're sketching, but it doesn't know your constraints, your team skills, or what you need to change six months from now. 'Human plus AI' works really, really well here.

Fourth is implementation, writing the actual code. This is where AI is the strongest. Once you know what you're building, and how it should be structured, AI can write working code effectively. This is the capability you should delegate most aggressively. If you've entered this stage without clearly defined tests and success checkpoints, you've probably skipped a step.

Fifth is judgment. Does it actually work? Is it actually good? Would you put your name on it? AI will tell you the code runs, but it won't tell you if the experience feels right, whether the edge cases matter, or whether you've solved a real problem at hand. Judgment requires your expertise, standards, and perspective.

Last is shipping. Getting it to real users and learning from what happens. This means communication, measurement, iteration. AI can draft release notes, but it can't read the room when your user hesitates before clicking.

Now look at the shape of that list. Implementation sits right in the middle, and that's where AI is the strongest. Empathy, judgment, and shipping sit at the edges, and that's where AI is the weakest. That's the key insight for this course. AI is the strongest in the middle of the toolkit, and weakest at the edges. The edges are where the human work lives. The edges are where the value is.

So what does good Delegation look like in practice? It looks like spending real time at the beginning of a project getting clear on who you're building for, and defining what success means. It looks like inspecting the results skeptically, and keeping judgment calls in your own hands.

There's a temptation, once you have a tool that can write code instantly, to skip straight to building, to treat empathy and design work as overhead. Resist that feeling. The faster AI makes implementation, the more your value shifts to everything around it.

The builders who thrive in this era won't be the ones who prompt the fastest. They will be the ones who frame problems clearly, who know what good looks like before they start, and who can tell the difference between code that runs and code that matters. The work starts now. Let's get into it.


## Video transcript

# Delegation & the builder's toolkit

If you've spent any time building with AI, you've probably noticed something. The hard part isn't getting AI to write code, the hard part is knowing what code you want an AI to write. Many people think of delegating something to an AI as a simple yes or no question. But for builders, knowing exactly what and how to delegate is much more complex. Your customer comes to you with a problem. How do you decompose it into something that you can actually build? And what role does AI play at each stage of that work?

Here's a useful frame. Imagine yourself as the lead on a project and AI as your team. A great lead doesn't just assign tasks. They frame the problem so everyone understands what they're solving. They set goals so the team knows what good looks like. They decide what to tackle first. And critically, they know which decisions to make themselves, and which ones to hand off. That's Delegation in the builder sense. And it starts well before any code gets written.

Every builder carries a toolkit that they may not know that they have. You could boil it down to six capabilities you can reach for at any different moment in a build. AI can help with all six, but it's much stronger at some than others, and knowing the difference is a key part of AI fluency for builders.

The first capability is empathy. What does the person we're building for actually need? Not what they said that they want, but what will actually truly help their work. This is where you talk to users and observe what frustrates them. AI can help you organize what you learn here, but it can't sit with a clinic receptionist and notice that she checks her phone 40 times a day because patients keep calling to ask about wait times. That observation is all you.

The second is design. What should we build, and why? This is where you weigh trade-offs, make bets, and decide what matters. Should it be a text message or a web page? Should it show exact wait times or ranges? Those are judgment calls. All AI can do is generate options, but the judgment about which option fits is yours.

Third is architecture. How should the thing be structured? What are the pieces, and how do they fit together? AI knows patterns. It's seen a thousand systems like the one you're sketching, but it doesn't know your constraints, your team skills, or what you need to change six months from now. 'Human plus AI' works really, really well here.

Fourth is implementation, writing the actual code. This is where AI is the strongest. Once you know what you're building, and how it should be structured, AI can write working code effectively. This is the capability you should delegate most aggressively. If you've entered this stage without clearly defined tests and success checkpoints, you've probably skipped a step.

Fifth is judgment. Does it actually work? Is it actually good? Would you put your name on it? AI will tell you the code runs, but it won't tell you if the experience feels right, whether the edge cases matter, or whether you've solved a real problem at hand. Judgment requires your expertise, standards, and perspective.

Last is shipping. Getting it to real users and learning from what happens. This means communication, measurement, iteration. AI can draft release notes, but it can't read the room when your user hesitates before clicking.

Now look at the shape of that list. Implementation sits right in the middle, and that's where AI is the strongest. Empathy, judgment, and shipping sit at the edges, and that's where AI is the weakest. That's the key insight for this course. AI is the strongest in the middle of the toolkit, and weakest at the edges. The edges are where the human work lives. The edges are where the value is.

So what does good Delegation look like in practice? It looks like spending real time at the beginning of a project getting clear on who you're building for, and defining what success means. It looks like inspecting the results skeptically, and keeping judgment calls in your own hands.

There's a temptation, once you have a tool that can write code instantly, to skip straight to building, to treat empathy and design work as overhead. Resist that feeling. The faster AI makes implementation, the more your value shifts to everything around it.

The builders who thrive in this era won't be the ones who prompt the fastest. They will be the ones who frame problems clearly, who know what good looks like before they start, and who can tell the difference between code that runs and code that matters. The work starts now. Let's get into it.

