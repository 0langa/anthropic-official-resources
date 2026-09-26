Lesson 1 of 9 · AI Fluency for buildersWelcome to AI Fluency for builders

# Welcome to AI Fluency for builders

Lesson 115 min

In this lessonBy the end, you’ll be able to

- Define AI Fluency and explain how it applies to your role as a builder
- Build a reusable brief that gives AI your values, constraints, and context
- Decide if, when and where to delegate to AI in the builder process

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-fluency-for-builders%2Fai-fluency-for-builders)

## Introduction to AI Fluency for builders[](https://academy.claude.com/courses/ai-fluency-for-builders/ai-fluency-for-builders)

Embedded media: https://www.youtube-nocookie.com/embed/YWVDXsUf8NY?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Introduction to AI Fluency for builders · 4 min

SummaryTranscript

This video introduces builders — product people, designers, and makers — to
the course, explains what AI Fluency actually means in practice, and
previews the 4D Framework that will anchor every lesson that follows.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=YWVDXsUf8NY)

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/ai-fluency-for-builders)

- **Builders own the full arc** from customer problem to shipped solution.
- **AI Fluency** means working with AI effectively, efficiently, ethically, and safely.
- The **4D Framework** (Delegation, Description, Discernment, Diligence) anchors every lesson in this course.
- **Delegating implementation** is usually safe. Delegating judgment is usually not.
- **Most AI failures** trace back to description, discernment, or diligence failures made earlier.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/ai-fluency-for-builders)

### Build your builder brief

This exercise creates a reusable context document you'll give AI at the start of any project. Think of it as onboarding your AI collaborator — you'll reference it in exercises throughout the course.

### Part I: Self-Reflection

Before opening any AI tool, write down your answers to these four questions:

- What are you building right now, or planning to build? Name the product, the users, and the problem it solves.
- What’s your role — and what are you personally responsible for shipping?
- Where do you already use AI? Where have you avoided it, and why?
- Complete this sentence: “If AI could handle \_\_\_\_\_\_\_, I could spend more time on \_\_\_\_\_\_\_, which is where the most important decisions get made.”

### Part II: Build your brief with AI

Open Claude (or any AI assistant). Tell it you’re a builder and you want to create a reusable context document for future AI collaboration. Share your Part I answers and ask it to draft a brief you can paste into future sessions.

Key areas to cover: what you’re building and who it’s for, your role and what you own, your constraints (team size, stack, timelines, non-negotiables), and where you want AI involved — and where you don’t.

Review it together and add anything missing. Request a format that’s easy to copy and reuse. This is your builder brief for the course.

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/ai-fluency-for-builders)

- When you completed the sentence “If AI could handle \_\_\_, I could spend more time on \_\_\_” — what did that reveal about where your energy is going versus where it should be?
- In your builder brief, what constraints or values did you name that most AI interactions have been missing?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/ai-fluency-for-builders)

In the next lesson, we introduce the 4D Framework — four interconnected competencies that will shape every AI collaboration in this course: Delegation, Description, Discernment, and Diligence.

Was this helpful?


## Transcript

Hi, I'm Michael, the CEO of CodePath. And I'm Kristen from the education team at Anthropic. Welcome to the AI Fluency for builders course.

If you have ever shipped software, you already know that writing code is only a small part of the job. You have to figure out what problem was actually worth solving. You have to make hundreds of small decisions about how it should work, and then you have to get it into people's hands and learn from what happened next. That full process, from understanding a customer problem to shipping a solution that reaches them, is what we mean by being a builder. And AI is changing almost every part of that process right now.

Most of what gets called AI training focuses on one narrow slice, writing better prompts to get better code out of a language model. That's useful, but it's not enough to develop lasting AI Fluency. You need to know what to build in the first place. And you need to evaluate whether the thing AI produced is actually right, not just technically functional, but solving the real problem, working with real users, and not creating unexpected new problems.

AI Fluency is the ability to work with AI systems in ways that are effective, efficient, ethical, and safe. AI Fluency isn't a prompt library. It's a set of interconnected competencies that empower you to make great decisions regardless of the model or feature at your disposal.

At the center of this course is the 4D Framework, developed by professors Joseph Feller and Rick Dakan in collaboration with Anthropic. It consists of four competencies: Delegation, Description, Discernment, and Diligence. Think of them as the operating system underneath every collaboration you have with AI.

Delegation is about decomposing a problem into parts and deciding what role AI plays at each stage. Delegating implementation to AI is usually fine. Delegating judgment, the call about whether something is actually good and ready, is usually not advised. The best builders know the difference.

Description is a builder's ability to ensure that every input, from user voice to product requirements to technical specs, make it into the implementation. Most AI training hyper-focuses on ensuring code is built where the test passes. That's important, but insufficient. Any missing input or context cascades downstream. A user complains that the tool doesn't work for them. You trace it back and discover the issue wasn't in the code. It was in how you understood and described the user problem. Builders must own every aspect of Description.

Discernment is how you evaluate what AI gives you. Not just does it run, but does it run well? Does it solve the right problem? Is it actually good to use and is it responsible? AI has real blind spots. It can produce code that's locally correct, but breaks under load. It can generate UX that's functional, but confusing. Discernment is the skill of catching those gaps before your users do.

Diligence is full ownership of the outcome, not just the output. Shipping is a skill with its own technical realities that AI rarely surfaces proactively. Migrations, rate limiting, monitoring. What happens when something breaks at 2 a.m. and you're the one who built it? Prototype freely, ship selectively. And be willing to veto something you built when the evidence says it isn't right.

Think of AI as a capable but very literal collaborator. It's fast, it's knowledgeable, it doesn't get tired, but it needs clear tasks, real context about why you're building something, and specific feedback when it gets something wrong. Managing that collaborator well, knowing when to step in, when to let it run, how to give it the right brief is the core skill this course develops.

By the end of this course, you'll approach AI with confidence and intentionality. You'll know how to leverage it to move faster without losing the judgment that makes what you build actually good. And you'll own the full building process, not just the coding slice in the middle. Let's get started.


## Video transcript

# Introduction to AI Fluency for builders

Hi, I'm Michael, the CEO of CodePath. And I'm Kristen from the education team at Anthropic. Welcome to the AI Fluency for builders course.

If you have ever shipped software, you already know that writing code is only a small part of the job. You have to figure out what problem was actually worth solving. You have to make hundreds of small decisions about how it should work, and then you have to get it into people's hands and learn from what happened next. That full process, from understanding a customer problem to shipping a solution that reaches them, is what we mean by being a builder. And AI is changing almost every part of that process right now.

Most of what gets called AI training focuses on one narrow slice, writing better prompts to get better code out of a language model. That's useful, but it's not enough to develop lasting AI Fluency. You need to know what to build in the first place. And you need to evaluate whether the thing AI produced is actually right, not just technically functional, but solving the real problem, working with real users, and not creating unexpected new problems.

AI Fluency is the ability to work with AI systems in ways that are effective, efficient, ethical, and safe. AI Fluency isn't a prompt library. It's a set of interconnected competencies that empower you to make great decisions regardless of the model or feature at your disposal.

At the center of this course is the 4D Framework, developed by professors Joseph Feller and Rick Dakan in collaboration with Anthropic. It consists of four competencies: Delegation, Description, Discernment, and Diligence. Think of them as the operating system underneath every collaboration you have with AI.

Delegation is about decomposing a problem into parts and deciding what role AI plays at each stage. Delegating implementation to AI is usually fine. Delegating judgment, the call about whether something is actually good and ready, is usually not advised. The best builders know the difference.

Description is a builder's ability to ensure that every input, from user voice to product requirements to technical specs, make it into the implementation. Most AI training hyper-focuses on ensuring code is built where the test passes. That's important, but insufficient. Any missing input or context cascades downstream. A user complains that the tool doesn't work for them. You trace it back and discover the issue wasn't in the code. It was in how you understood and described the user problem. Builders must own every aspect of Description.

Discernment is how you evaluate what AI gives you. Not just does it run, but does it run well? Does it solve the right problem? Is it actually good to use and is it responsible? AI has real blind spots. It can produce code that's locally correct, but breaks under load. It can generate UX that's functional, but confusing. Discernment is the skill of catching those gaps before your users do.

Diligence is full ownership of the outcome, not just the output. Shipping is a skill with its own technical realities that AI rarely surfaces proactively. Migrations, rate limiting, monitoring. What happens when something breaks at 2 a.m. and you're the one who built it? Prototype freely, ship selectively. And be willing to veto something you built when the evidence says it isn't right.

Think of AI as a capable but very literal collaborator. It's fast, it's knowledgeable, it doesn't get tired, but it needs clear tasks, real context about why you're building something, and specific feedback when it gets something wrong. Managing that collaborator well, knowing when to step in, when to let it run, how to give it the right brief is the core skill this course develops.

By the end of this course, you'll approach AI with confidence and intentionality. You'll know how to leverage it to move faster without losing the judgment that makes what you build actually good. And you'll own the full building process, not just the coding slice in the middle. Let's get started.

