Lesson 6 of 9 · AI Fluency for buildersDiscernment for code

# Discernment for code

Lesson 630 min

In this lessonBy the end, you’ll be able to

- Evaluate AI-generated work across five lenses: correctness, quality, fit, experience, and responsibility
- Raise your quality bar beyond "it works" by learning failure modes specific to AI-built products
- Catch AI's predictable technical blind spots before they reach production

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-fluency-for-builders%2Fdiscernment-for-code)

## Discernment for code[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

Embedded media: https://www.youtube-nocookie.com/embed/7J2-HzHs4c8?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Discernment for code · 5 min

SummaryTranscript

When AI can spin up a working product in minutes, “working” stops being the
bar. You’ll learn where AI-built products typically fail, the technical
blind spots that surface in production but not in development, and how to
build the taste that AI doesn’t have.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=7J2-HzHs4c8)

The Five Lenses of Discernment

Lens 1 is easy to test — run it and see. By Lens 5, you’re making judgment calls AI can’t make for you.

Lens 1Functional IntegrityLens 2Production ReadinessLens 3Problem FitLens 4Experience QualityLens 5Responsible Impact

Lens 1

Functional Integrity

Does it work?

✓Produces correct output for real inputs, not just test data

Common AI failure

Code that passes unit tests but breaks on real data the prompt never covered

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

- **Code that runs can still fail.** The default AI output is technically complete but often misses the point.
- **AI has predictable blind spots** in concurrency, security, and anything that only breaks at scale.
- **Taste is a builder skill.** AI delivers functional. Making it worth using is on you.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

### User testing the Clinic project

Put your build in front of a partner playing a patient or clinic admin — don’t explain, don’t help. Watch where they get confused, what they ignore, and what they wanted that you never built. Write down three things you’d change and which lens each falls under.

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

- Which of the five lenses do you naturally apply, and which do you have to remind yourself to check?
- When AI produces something that isn’t good enough, what’s your instinct: fix it yourself, or describe it better?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

You’ve stress-tested the Clinic Wait Time Checker through the lenses you tend to skip. Next, you’ll look at the same tool through a different lens: how does it actually feel to use?

Was this helpful?


## Transcript

You've now built something with AI. It runs. The tests pass. But so what?

Think about the project we've been building. Did it handle a scenario where a patient's estimated wait time suddenly jumps from 10 minutes to 90? Did it account and solve for different patient needs? Did it build in historical biases from the existing data? A working product and a good product are not always the same thing. And when AI can produce a working product in minutes, your ability to tell the difference becomes the most valuable skill in the room.

This module gives you a structure for that judgment. Five lenses and five questions to ask of anything that AI builds.

The first lens is functional integrity. Does it actually work? Bugs, errors, security holes. This is where most code review stops. It's necessary, but it's not close to sufficient.

In our project example, AI built sound logic to display wait times, but did it account for patient priority? What about conflicting data points and determining which one to display? When building, consider the full gamut of functional tests: unit tests, integration tests, regression tests, edge cases, end-to-end.

And here's a habit that matters. AI should be building tests alongside the code, not after it. When you prompt, ask it to write test cases in the very same pass, then build in regular checkpoints. A test suite that hasn't been run is not a safety net. It's just a false sense of security.

The second lens is production readiness. Does it actually work well? Performance, scalability, reliability, what happens under load? What happens when hundreds of people try to refresh at the same time?

AI has specific blind spots here. So how do you verify this in your building process? A few concrete moves: ask AI to stress test its own output, have it generate production scenarios, and check how the code handles them. Ask it explicitly, "What production assumptions does this code make?" You'll surface things that were missed in the first pass.

In your project, did the code account for when the API call takes five seconds too long? Does the display freeze, show stale data, or fail gracefully? AI doesn't think about that. That's with you.

The third lens is problem fit. Is it the right thing? Does it solve the user's actual problem? Or the problem the user thinks they have? Those can diverge, as you saw in the last lesson.

The patient asked about wait times, and at face value AI can build an estimated wait time display, but what the patient really needed to know was if there was a pediatrician available in the next 20 minutes, so they could assess if their child's fever is critical or not. AI solved the stated problem, but you need to check whether that's the real problem.

The fourth lens is experience quality. Is it actually good? Is the experience clear, intuitive, accessible?

AI doesn't have taste, it has patterns. It will give you a competent interface that no one enjoys using. For a clinical wait time tool, that's not just an aesthetic problem, it's a patient safety issue. It's your job as the builder to notice this, and translate it into something concrete and fixable. We'll talk more about Experience Discernment in the next lesson.

The fifth lens is responsible impact. Is it responsible? Bias? Privacy? Unintended consequences? Who could this harm? What does it assume about the user that might not be true?

Let's look back at the clinical wait time tool. Is the algorithm estimating wait times trained on historical data. If that data reflects existing bias, systemic inequities contributing to longer wait times for certain demographics, the model may reproduce that same pattern. It won't flag it, it will just display a number.

Build guardrails. Ask AI to name its bias as it builds. And most importantly, question all assumptions.

Most engineering education stops at the first two lenses, but builders need all five. And here's what you'll find when you start applying them. The biggest problems are almost never at lens 1. AI is good at producing code that runs. It needs your oversight to produce a product that matters.

One more thing, when you find something that isn't good enough, notice your own instinct. Do you reach in and fix it yourself, or do you go back and describe better what you needed? Neither is wrong, but the pattern tells you something about how you're working with AI, and whether you're building Discernment, or just building.

Alright, it's time to apply these lenses. Let's go.


## LENS 1
Functional Integrity

Lesson 6 of 9 · AI Fluency for buildersDiscernment for code

# Discernment for code

Lesson 630 min

In this lessonBy the end, you’ll be able to

- Evaluate AI-generated work across five lenses: correctness, quality, fit, experience, and responsibility
- Raise your quality bar beyond "it works" by learning failure modes specific to AI-built products
- Catch AI's predictable technical blind spots before they reach production

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-fluency-for-builders%2Fdiscernment-for-code)

## Discernment for code[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

Embedded media: https://www.youtube-nocookie.com/embed/7J2-HzHs4c8?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Discernment for code · 5 min

SummaryTranscript

You've now built something with AI. It runs. The tests pass. But so what?

Think about the project we've been building. Did it handle a scenario where a patient's estimated wait time suddenly jumps from 10 minutes to 90? Did it account and solve for different patient needs? Did it build in historical biases from the existing data? A working product and a good product are not always the same thing. And when AI can produce a working product in minutes, your ability to tell the difference becomes the most valuable skill in the room.

This module gives you a structure for that judgment. Five lenses and five questions to ask of anything that AI builds.

The first lens is functional integrity. Does it actually work? Bugs, errors, security holes. This is where most code review stops. It's necessary, but it's not close to sufficient.

In our project example, AI built sound logic to display wait times, but did it account for patient priority? What about conflicting data points and determining which one to display? When building, consider the full gamut of functional tests: unit tests, integration tests, regression tests, edge cases, end-to-end.

And here's a habit that matters. AI should be building tests alongside the code, not after it. When you prompt, ask it to write test cases in the very same pass, then build in regular checkpoints. A test suite that hasn't been run is not a safety net. It's just a false sense of security.

The second lens is production readiness. Does it actually work well? Performance, scalability, reliability, what happens under load? What happens when hundreds of people try to refresh at the same time?

AI has specific blind spots here. So how do you verify this in your building process? A few concrete moves: ask AI to stress test its own output, have it generate production scenarios, and check how the code handles them. Ask it explicitly, "What production assumptions does this code make?" You'll surface things that were missed in the first pass.

In your project, did the code account for when the API call takes five seconds too long? Does the display freeze, show stale data, or fail gracefully? AI doesn't think about that. That's with you.

The third lens is problem fit. Is it the right thing? Does it solve the user's actual problem? Or the problem the user thinks they have? Those can diverge, as you saw in the last lesson.

The patient asked about wait times, and at face value AI can build an estimated wait time display, but what the patient really needed to know was if there was a pediatrician available in the next 20 minutes, so they could assess if their child's fever is critical or not. AI solved the stated problem, but you need to check whether that's the real problem.

The fourth lens is experience quality. Is it actually good? Is the experience clear, intuitive, accessible?

AI doesn't have taste, it has patterns. It will give you a competent interface that no one enjoys using. For a clinical wait time tool, that's not just an aesthetic problem, it's a patient safety issue. It's your job as the builder to notice this, and translate it into something concrete and fixable. We'll talk more about Experience Discernment in the next lesson.

The fifth lens is responsible impact. Is it responsible? Bias? Privacy? Unintended consequences? Who could this harm? What does it assume about the user that might not be true?

Let's look back at the clinical wait time tool. Is the algorithm estimating wait times trained on historical data. If that data reflects existing bias, systemic inequities contributing to longer wait times for certain demographics, the model may reproduce that same pattern. It won't flag it, it will just display a number.

Build guardrails. Ask AI to name its bias as it builds. And most importantly, question all assumptions.

Most engineering education stops at the first two lenses, but builders need all five. And here's what you'll find when you start applying them. The biggest problems are almost never at lens 1. AI is good at producing code that runs. It needs your oversight to produce a product that matters.

One more thing, when you find something that isn't good enough, notice your own instinct. Do you reach in and fix it yourself, or do you go back and describe better what you needed? Neither is wrong, but the pattern tells you something about how you're working with AI, and whether you're building Discernment, or just building.

Alright, it's time to apply these lenses. Let's go.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=7J2-HzHs4c8)

The Five Lenses of Discernment

Lens 1 is easy to test — run it and see. By Lens 5, you’re making judgment calls AI can’t make for you.

Lens 1Functional IntegrityLens 2Production ReadinessLens 3Problem FitLens 4Experience QualityLens 5Responsible Impact

Lens 1

Functional Integrity

Does it work?

✓Produces correct output for real inputs, not just test data

Common AI failure

Code that passes unit tests but breaks on real data the prompt never covered

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

- **Code that runs can still fail.** The default AI output is technically complete but often misses the point.
- **AI has predictable blind spots** in concurrency, security, and anything that only breaks at scale.
- **Taste is a builder skill.** AI delivers functional. Making it worth using is on you.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

### User testing the Clinic project

Put your build in front of a partner playing a patient or clinic admin — don’t explain, don’t help. Watch where they get confused, what they ignore, and what they wanted that you never built. Write down three things you’d change and which lens each falls under.

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

- Which of the five lenses do you naturally apply, and which do you have to remind yourself to check?
- When AI produces something that isn’t good enough, what’s your instinct: fix it yourself, or describe it better?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

You’ve stress-tested the Clinic Wait Time Checker through the lenses you tend to skip. Next, you’ll look at the same tool through a different lens: how does it actually feel to use?

Was this helpful?


## LENS 2
Production Readiness

Lesson 6 of 9 · AI Fluency for buildersDiscernment for code

# Discernment for code

Lesson 630 min

In this lessonBy the end, you’ll be able to

- Evaluate AI-generated work across five lenses: correctness, quality, fit, experience, and responsibility
- Raise your quality bar beyond "it works" by learning failure modes specific to AI-built products
- Catch AI's predictable technical blind spots before they reach production

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-fluency-for-builders%2Fdiscernment-for-code)

## Discernment for code[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

Embedded media: https://www.youtube-nocookie.com/embed/7J2-HzHs4c8?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Discernment for code · 5 min

SummaryTranscript

You've now built something with AI. It runs. The tests pass. But so what?

Think about the project we've been building. Did it handle a scenario where a patient's estimated wait time suddenly jumps from 10 minutes to 90? Did it account and solve for different patient needs? Did it build in historical biases from the existing data? A working product and a good product are not always the same thing. And when AI can produce a working product in minutes, your ability to tell the difference becomes the most valuable skill in the room.

This module gives you a structure for that judgment. Five lenses and five questions to ask of anything that AI builds.

The first lens is functional integrity. Does it actually work? Bugs, errors, security holes. This is where most code review stops. It's necessary, but it's not close to sufficient.

In our project example, AI built sound logic to display wait times, but did it account for patient priority? What about conflicting data points and determining which one to display? When building, consider the full gamut of functional tests: unit tests, integration tests, regression tests, edge cases, end-to-end.

And here's a habit that matters. AI should be building tests alongside the code, not after it. When you prompt, ask it to write test cases in the very same pass, then build in regular checkpoints. A test suite that hasn't been run is not a safety net. It's just a false sense of security.

The second lens is production readiness. Does it actually work well? Performance, scalability, reliability, what happens under load? What happens when hundreds of people try to refresh at the same time?

AI has specific blind spots here. So how do you verify this in your building process? A few concrete moves: ask AI to stress test its own output, have it generate production scenarios, and check how the code handles them. Ask it explicitly, "What production assumptions does this code make?" You'll surface things that were missed in the first pass.

In your project, did the code account for when the API call takes five seconds too long? Does the display freeze, show stale data, or fail gracefully? AI doesn't think about that. That's with you.

The third lens is problem fit. Is it the right thing? Does it solve the user's actual problem? Or the problem the user thinks they have? Those can diverge, as you saw in the last lesson.

The patient asked about wait times, and at face value AI can build an estimated wait time display, but what the patient really needed to know was if there was a pediatrician available in the next 20 minutes, so they could assess if their child's fever is critical or not. AI solved the stated problem, but you need to check whether that's the real problem.

The fourth lens is experience quality. Is it actually good? Is the experience clear, intuitive, accessible?

AI doesn't have taste, it has patterns. It will give you a competent interface that no one enjoys using. For a clinical wait time tool, that's not just an aesthetic problem, it's a patient safety issue. It's your job as the builder to notice this, and translate it into something concrete and fixable. We'll talk more about Experience Discernment in the next lesson.

The fifth lens is responsible impact. Is it responsible? Bias? Privacy? Unintended consequences? Who could this harm? What does it assume about the user that might not be true?

Let's look back at the clinical wait time tool. Is the algorithm estimating wait times trained on historical data. If that data reflects existing bias, systemic inequities contributing to longer wait times for certain demographics, the model may reproduce that same pattern. It won't flag it, it will just display a number.

Build guardrails. Ask AI to name its bias as it builds. And most importantly, question all assumptions.

Most engineering education stops at the first two lenses, but builders need all five. And here's what you'll find when you start applying them. The biggest problems are almost never at lens 1. AI is good at producing code that runs. It needs your oversight to produce a product that matters.

One more thing, when you find something that isn't good enough, notice your own instinct. Do you reach in and fix it yourself, or do you go back and describe better what you needed? Neither is wrong, but the pattern tells you something about how you're working with AI, and whether you're building Discernment, or just building.

Alright, it's time to apply these lenses. Let's go.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=7J2-HzHs4c8)

The Five Lenses of Discernment

Lens 1 is easy to test — run it and see. By Lens 5, you’re making judgment calls AI can’t make for you.

Lens 1Functional IntegrityLens 2Production ReadinessLens 3Problem FitLens 4Experience QualityLens 5Responsible Impact

Lens 2

Production Readiness

Does it work well?

✓Handles concurrent users without race conditions

Common AI failure

Smooth in dev, broken under load or behind a real infrastructure stack

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

- **Code that runs can still fail.** The default AI output is technically complete but often misses the point.
- **AI has predictable blind spots** in concurrency, security, and anything that only breaks at scale.
- **Taste is a builder skill.** AI delivers functional. Making it worth using is on you.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

### User testing the Clinic project

Put your build in front of a partner playing a patient or clinic admin — don’t explain, don’t help. Watch where they get confused, what they ignore, and what they wanted that you never built. Write down three things you’d change and which lens each falls under.

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

- Which of the five lenses do you naturally apply, and which do you have to remind yourself to check?
- When AI produces something that isn’t good enough, what’s your instinct: fix it yourself, or describe it better?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

You’ve stress-tested the Clinic Wait Time Checker through the lenses you tend to skip. Next, you’ll look at the same tool through a different lens: how does it actually feel to use?

Was this helpful?


## LENS 3
Problem Fit

Lesson 6 of 9 · AI Fluency for buildersDiscernment for code

# Discernment for code

Lesson 630 min

In this lessonBy the end, you’ll be able to

- Evaluate AI-generated work across five lenses: correctness, quality, fit, experience, and responsibility
- Raise your quality bar beyond "it works" by learning failure modes specific to AI-built products
- Catch AI's predictable technical blind spots before they reach production

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-fluency-for-builders%2Fdiscernment-for-code)

## Discernment for code[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

Embedded media: https://www.youtube-nocookie.com/embed/7J2-HzHs4c8?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Discernment for code · 5 min

SummaryTranscript

You've now built something with AI. It runs. The tests pass. But so what?

Think about the project we've been building. Did it handle a scenario where a patient's estimated wait time suddenly jumps from 10 minutes to 90? Did it account and solve for different patient needs? Did it build in historical biases from the existing data? A working product and a good product are not always the same thing. And when AI can produce a working product in minutes, your ability to tell the difference becomes the most valuable skill in the room.

This module gives you a structure for that judgment. Five lenses and five questions to ask of anything that AI builds.

The first lens is functional integrity. Does it actually work? Bugs, errors, security holes. This is where most code review stops. It's necessary, but it's not close to sufficient.

In our project example, AI built sound logic to display wait times, but did it account for patient priority? What about conflicting data points and determining which one to display? When building, consider the full gamut of functional tests: unit tests, integration tests, regression tests, edge cases, end-to-end.

And here's a habit that matters. AI should be building tests alongside the code, not after it. When you prompt, ask it to write test cases in the very same pass, then build in regular checkpoints. A test suite that hasn't been run is not a safety net. It's just a false sense of security.

The second lens is production readiness. Does it actually work well? Performance, scalability, reliability, what happens under load? What happens when hundreds of people try to refresh at the same time?

AI has specific blind spots here. So how do you verify this in your building process? A few concrete moves: ask AI to stress test its own output, have it generate production scenarios, and check how the code handles them. Ask it explicitly, "What production assumptions does this code make?" You'll surface things that were missed in the first pass.

In your project, did the code account for when the API call takes five seconds too long? Does the display freeze, show stale data, or fail gracefully? AI doesn't think about that. That's with you.

The third lens is problem fit. Is it the right thing? Does it solve the user's actual problem? Or the problem the user thinks they have? Those can diverge, as you saw in the last lesson.

The patient asked about wait times, and at face value AI can build an estimated wait time display, but what the patient really needed to know was if there was a pediatrician available in the next 20 minutes, so they could assess if their child's fever is critical or not. AI solved the stated problem, but you need to check whether that's the real problem.

The fourth lens is experience quality. Is it actually good? Is the experience clear, intuitive, accessible?

AI doesn't have taste, it has patterns. It will give you a competent interface that no one enjoys using. For a clinical wait time tool, that's not just an aesthetic problem, it's a patient safety issue. It's your job as the builder to notice this, and translate it into something concrete and fixable. We'll talk more about Experience Discernment in the next lesson.

The fifth lens is responsible impact. Is it responsible? Bias? Privacy? Unintended consequences? Who could this harm? What does it assume about the user that might not be true?

Let's look back at the clinical wait time tool. Is the algorithm estimating wait times trained on historical data. If that data reflects existing bias, systemic inequities contributing to longer wait times for certain demographics, the model may reproduce that same pattern. It won't flag it, it will just display a number.

Build guardrails. Ask AI to name its bias as it builds. And most importantly, question all assumptions.

Most engineering education stops at the first two lenses, but builders need all five. And here's what you'll find when you start applying them. The biggest problems are almost never at lens 1. AI is good at producing code that runs. It needs your oversight to produce a product that matters.

One more thing, when you find something that isn't good enough, notice your own instinct. Do you reach in and fix it yourself, or do you go back and describe better what you needed? Neither is wrong, but the pattern tells you something about how you're working with AI, and whether you're building Discernment, or just building.

Alright, it's time to apply these lenses. Let's go.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=7J2-HzHs4c8)

The Five Lenses of Discernment

Lens 1 is easy to test — run it and see. By Lens 5, you’re making judgment calls AI can’t make for you.

Lens 1Functional IntegrityLens 2Production ReadinessLens 3Problem FitLens 4Experience QualityLens 5Responsible Impact

Lens 3

Problem Fit

Is it the right thing?

✓Solves the user’s actual need, not just the literal spec you wrote

Common AI failure

Technically complete feature that addresses the prompt but misses the underlying need

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

- **Code that runs can still fail.** The default AI output is technically complete but often misses the point.
- **AI has predictable blind spots** in concurrency, security, and anything that only breaks at scale.
- **Taste is a builder skill.** AI delivers functional. Making it worth using is on you.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

### User testing the Clinic project

Put your build in front of a partner playing a patient or clinic admin — don’t explain, don’t help. Watch where they get confused, what they ignore, and what they wanted that you never built. Write down three things you’d change and which lens each falls under.

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

- Which of the five lenses do you naturally apply, and which do you have to remind yourself to check?
- When AI produces something that isn’t good enough, what’s your instinct: fix it yourself, or describe it better?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

You’ve stress-tested the Clinic Wait Time Checker through the lenses you tend to skip. Next, you’ll look at the same tool through a different lens: how does it actually feel to use?

Was this helpful?


## LENS 4
Experience Quality

Lesson 6 of 9 · AI Fluency for buildersDiscernment for code

# Discernment for code

Lesson 630 min

In this lessonBy the end, you’ll be able to

- Evaluate AI-generated work across five lenses: correctness, quality, fit, experience, and responsibility
- Raise your quality bar beyond "it works" by learning failure modes specific to AI-built products
- Catch AI's predictable technical blind spots before they reach production

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-fluency-for-builders%2Fdiscernment-for-code)

## Discernment for code[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

Embedded media: https://www.youtube-nocookie.com/embed/7J2-HzHs4c8?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Discernment for code · 5 min

SummaryTranscript

You've now built something with AI. It runs. The tests pass. But so what?

Think about the project we've been building. Did it handle a scenario where a patient's estimated wait time suddenly jumps from 10 minutes to 90? Did it account and solve for different patient needs? Did it build in historical biases from the existing data? A working product and a good product are not always the same thing. And when AI can produce a working product in minutes, your ability to tell the difference becomes the most valuable skill in the room.

This module gives you a structure for that judgment. Five lenses and five questions to ask of anything that AI builds.

The first lens is functional integrity. Does it actually work? Bugs, errors, security holes. This is where most code review stops. It's necessary, but it's not close to sufficient.

In our project example, AI built sound logic to display wait times, but did it account for patient priority? What about conflicting data points and determining which one to display? When building, consider the full gamut of functional tests: unit tests, integration tests, regression tests, edge cases, end-to-end.

And here's a habit that matters. AI should be building tests alongside the code, not after it. When you prompt, ask it to write test cases in the very same pass, then build in regular checkpoints. A test suite that hasn't been run is not a safety net. It's just a false sense of security.

The second lens is production readiness. Does it actually work well? Performance, scalability, reliability, what happens under load? What happens when hundreds of people try to refresh at the same time?

AI has specific blind spots here. So how do you verify this in your building process? A few concrete moves: ask AI to stress test its own output, have it generate production scenarios, and check how the code handles them. Ask it explicitly, "What production assumptions does this code make?" You'll surface things that were missed in the first pass.

In your project, did the code account for when the API call takes five seconds too long? Does the display freeze, show stale data, or fail gracefully? AI doesn't think about that. That's with you.

The third lens is problem fit. Is it the right thing? Does it solve the user's actual problem? Or the problem the user thinks they have? Those can diverge, as you saw in the last lesson.

The patient asked about wait times, and at face value AI can build an estimated wait time display, but what the patient really needed to know was if there was a pediatrician available in the next 20 minutes, so they could assess if their child's fever is critical or not. AI solved the stated problem, but you need to check whether that's the real problem.

The fourth lens is experience quality. Is it actually good? Is the experience clear, intuitive, accessible?

AI doesn't have taste, it has patterns. It will give you a competent interface that no one enjoys using. For a clinical wait time tool, that's not just an aesthetic problem, it's a patient safety issue. It's your job as the builder to notice this, and translate it into something concrete and fixable. We'll talk more about Experience Discernment in the next lesson.

The fifth lens is responsible impact. Is it responsible? Bias? Privacy? Unintended consequences? Who could this harm? What does it assume about the user that might not be true?

Let's look back at the clinical wait time tool. Is the algorithm estimating wait times trained on historical data. If that data reflects existing bias, systemic inequities contributing to longer wait times for certain demographics, the model may reproduce that same pattern. It won't flag it, it will just display a number.

Build guardrails. Ask AI to name its bias as it builds. And most importantly, question all assumptions.

Most engineering education stops at the first two lenses, but builders need all five. And here's what you'll find when you start applying them. The biggest problems are almost never at lens 1. AI is good at producing code that runs. It needs your oversight to produce a product that matters.

One more thing, when you find something that isn't good enough, notice your own instinct. Do you reach in and fix it yourself, or do you go back and describe better what you needed? Neither is wrong, but the pattern tells you something about how you're working with AI, and whether you're building Discernment, or just building.

Alright, it's time to apply these lenses. Let's go.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=7J2-HzHs4c8)

The Five Lenses of Discernment

Lens 1 is easy to test — run it and see. By Lens 5, you’re making judgment calls AI can’t make for you.

Lens 1Functional IntegrityLens 2Production ReadinessLens 3Problem FitLens 4Experience QualityLens 5Responsible Impact

Lens 4

Experience Quality

Is it good?

✓Users can complete the core task without help or instruction

Common AI failure

Generic UI patterns that technically work but feel uninvested — confused or frustrated users

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

- **Code that runs can still fail.** The default AI output is technically complete but often misses the point.
- **AI has predictable blind spots** in concurrency, security, and anything that only breaks at scale.
- **Taste is a builder skill.** AI delivers functional. Making it worth using is on you.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

### User testing the Clinic project

Put your build in front of a partner playing a patient or clinic admin — don’t explain, don’t help. Watch where they get confused, what they ignore, and what they wanted that you never built. Write down three things you’d change and which lens each falls under.

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

- Which of the five lenses do you naturally apply, and which do you have to remind yourself to check?
- When AI produces something that isn’t good enough, what’s your instinct: fix it yourself, or describe it better?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

You’ve stress-tested the Clinic Wait Time Checker through the lenses you tend to skip. Next, you’ll look at the same tool through a different lens: how does it actually feel to use?

Was this helpful?


## LENS 5
Responsible Impact

Lesson 6 of 9 · AI Fluency for buildersDiscernment for code

# Discernment for code

Lesson 630 min

In this lessonBy the end, you’ll be able to

- Evaluate AI-generated work across five lenses: correctness, quality, fit, experience, and responsibility
- Raise your quality bar beyond "it works" by learning failure modes specific to AI-built products
- Catch AI's predictable technical blind spots before they reach production

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-fluency-for-builders%2Fdiscernment-for-code)

## Discernment for code[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

Embedded media: https://www.youtube-nocookie.com/embed/7J2-HzHs4c8?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Discernment for code · 5 min

SummaryTranscript

You've now built something with AI. It runs. The tests pass. But so what?

Think about the project we've been building. Did it handle a scenario where a patient's estimated wait time suddenly jumps from 10 minutes to 90? Did it account and solve for different patient needs? Did it build in historical biases from the existing data? A working product and a good product are not always the same thing. And when AI can produce a working product in minutes, your ability to tell the difference becomes the most valuable skill in the room.

This module gives you a structure for that judgment. Five lenses and five questions to ask of anything that AI builds.

The first lens is functional integrity. Does it actually work? Bugs, errors, security holes. This is where most code review stops. It's necessary, but it's not close to sufficient.

In our project example, AI built sound logic to display wait times, but did it account for patient priority? What about conflicting data points and determining which one to display? When building, consider the full gamut of functional tests: unit tests, integration tests, regression tests, edge cases, end-to-end.

And here's a habit that matters. AI should be building tests alongside the code, not after it. When you prompt, ask it to write test cases in the very same pass, then build in regular checkpoints. A test suite that hasn't been run is not a safety net. It's just a false sense of security.

The second lens is production readiness. Does it actually work well? Performance, scalability, reliability, what happens under load? What happens when hundreds of people try to refresh at the same time?

AI has specific blind spots here. So how do you verify this in your building process? A few concrete moves: ask AI to stress test its own output, have it generate production scenarios, and check how the code handles them. Ask it explicitly, "What production assumptions does this code make?" You'll surface things that were missed in the first pass.

In your project, did the code account for when the API call takes five seconds too long? Does the display freeze, show stale data, or fail gracefully? AI doesn't think about that. That's with you.

The third lens is problem fit. Is it the right thing? Does it solve the user's actual problem? Or the problem the user thinks they have? Those can diverge, as you saw in the last lesson.

The patient asked about wait times, and at face value AI can build an estimated wait time display, but what the patient really needed to know was if there was a pediatrician available in the next 20 minutes, so they could assess if their child's fever is critical or not. AI solved the stated problem, but you need to check whether that's the real problem.

The fourth lens is experience quality. Is it actually good? Is the experience clear, intuitive, accessible?

AI doesn't have taste, it has patterns. It will give you a competent interface that no one enjoys using. For a clinical wait time tool, that's not just an aesthetic problem, it's a patient safety issue. It's your job as the builder to notice this, and translate it into something concrete and fixable. We'll talk more about Experience Discernment in the next lesson.

The fifth lens is responsible impact. Is it responsible? Bias? Privacy? Unintended consequences? Who could this harm? What does it assume about the user that might not be true?

Let's look back at the clinical wait time tool. Is the algorithm estimating wait times trained on historical data. If that data reflects existing bias, systemic inequities contributing to longer wait times for certain demographics, the model may reproduce that same pattern. It won't flag it, it will just display a number.

Build guardrails. Ask AI to name its bias as it builds. And most importantly, question all assumptions.

Most engineering education stops at the first two lenses, but builders need all five. And here's what you'll find when you start applying them. The biggest problems are almost never at lens 1. AI is good at producing code that runs. It needs your oversight to produce a product that matters.

One more thing, when you find something that isn't good enough, notice your own instinct. Do you reach in and fix it yourself, or do you go back and describe better what you needed? Neither is wrong, but the pattern tells you something about how you're working with AI, and whether you're building Discernment, or just building.

Alright, it's time to apply these lenses. Let's go.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=7J2-HzHs4c8)

The Five Lenses of Discernment

Lens 1 is easy to test — run it and see. By Lens 5, you’re making judgment calls AI can’t make for you.

Lens 1Functional IntegrityLens 2Production ReadinessLens 3Problem FitLens 4Experience QualityLens 5Responsible Impact

Lens 5

Responsible Impact

Is it responsible?

✓Transparent about AI’s role — doesn’t present generated content as verified fact

Common AI failure

AI-generated content presented as authoritative, or a demographic left out by default

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

- **Code that runs can still fail.** The default AI output is technically complete but often misses the point.
- **AI has predictable blind spots** in concurrency, security, and anything that only breaks at scale.
- **Taste is a builder skill.** AI delivers functional. Making it worth using is on you.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

### User testing the Clinic project

Put your build in front of a partner playing a patient or clinic admin — don’t explain, don’t help. Watch where they get confused, what they ignore, and what they wanted that you never built. Write down three things you’d change and which lens each falls under.

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

- Which of the five lenses do you naturally apply, and which do you have to remind yourself to check?
- When AI produces something that isn’t good enough, what’s your instinct: fix it yourself, or describe it better?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-code)

You’ve stress-tested the Clinic Wait Time Checker through the lenses you tend to skip. Next, you’ll look at the same tool through a different lens: how does it actually feel to use?

Was this helpful?
