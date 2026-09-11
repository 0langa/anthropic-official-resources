Lesson 5 of 9 · AI Fluency for BuildersDescription & building great things

# Description & building great things

Lesson 515 min

In this lessonBy the end, you’ll be able to

- Translate a user need to precise AI instruction using the Description Chain
- Spot when a description failure cascades and trace it back to the link that broke
- Express intent through tests that tell AI exactly what success looks like

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fai-fluency-for-builders%2Fdescription-building-great-things)

## Describing what users need[](https://academy.claude.com/courses/ai-fluency-for-builders/description-building-great-things)

Embedded media: https://www.youtube-nocookie.com/embed/wotzFHTKQ9Q?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Describing what users need · 5 min

SummaryTranscript

Most AI training teaches you to write better prompts. That’s necessary but
not sufficient for building great products. This lesson maps the full
Description Chain: the path from a messy human need to a precise instruction
AI can act on, with the builder as the translator at every step.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=wotzFHTKQ9Q)

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/description-building-great-things)

- The **Description Chain** connects user voice to requirement to technical spec to AI instruction. Prompt engineering is only one link.
- **The builder is the translator** at every step. AI cannot hear what the user did not say.
- **Code that works but the product doesn’t** is a description failure. Find which link broke upstream.
- **Tests are the most precise form of description.** A passing test with an unhappy user means you described the wrong intent.
- Every step involves **judgment calls** the previous phase did not make for you.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/description-building-great-things)

### The Clinic Wait Time Project, Part 2

You're picking up exactly where the last lesson left off. Pull out your problem brief, your delegation plan, and your acceptance tests.

### Step 1: Write the product requirement

One paragraph. Take the user need from your problem brief and scope it into something measurable. Every adjective should be a decision you can defend. If you write “fast,” write how fast. If you write “simple,” describe what simple means for a patient checking from a phone in a parking lot.

### Step 2: Write the technical spec

Half a page. Describe what gets built and how it’s structured. Name the pieces. Name how they talk to each other. Use AI in augmentation mode here: share your product requirement, ask it to propose a technical approach, then push back on anything that doesn’t fit your constraints.

### Step 3: Tighten your tests

Revisit your acceptance tests from the previous lesson. Rewrite them so each one is something code could pass or fail. Add at least two edge cases: what happens when the clinic is closed, when there’s no data, when the wait time is zero.

### Step 4: Write your AI prompts and build

Write the instructions that turn your spec into working code. Include your constraints, your stack choices, and your tests. Build the first version.

### Step 5: Demo it

Find a partner. They play a clinic patient — they’ve got a sick kid and ten minutes. Hand them your build and watch them use it. Don’t explain anything. Don’t help.

Did the tests pass? Is the patient satisfied? If those answers don’t match, which link in the chain would you go back to?

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/description-building-great-things)

- Which translation in the Description Chain feels most natural? Which do you tend to rush through?
- In your Clinic demo, where was the biggest gap between what you intended and what your partner experienced?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/description-building-great-things)

In the next lesson, we move from description to discernment. You’ve built something and the code runs — now the question is whether it’s actually good.

Was this helpful?


## Transcript

So in the last module, you spent real time understanding the problem before touching any tools. You wrote the problem brief. You wrote acceptance tests. You decided what you keep, and then what you delegate to AI. But now, you have to turn all of that into something, something that AI can actually act on.

Most AI training treats 'Description' as prompt engineering. We're going to approach this task differently by considering all the aspects of Description that will help you solve the problem you've clearly defined. Description is a high-level competency that will remain relevant, outlasting tips and tricks that may change from model to model.

Recall the six capabilities in the builder's toolkit. Before implementation, we have to define the user need. Here's the full picture. Four steps directly tied to the capabilities in your toolkit, with the builder as the translator and the heart of each step. Let's use the project you're already working on.

The first step is user voice. This is what a real person actually says. For example, "I want to see wait times before I go to the clinic." Notice the tone, the emotion. It carries context the speaker didn't say out loud. That it's been two hours already. They have a kid in the car, and they're deciding between this clinic and urgent care across town. Use your own empathy to connect and observe with what goes unsaid by the user.

User voice is just raw material. It's true, and it's not yet buildable. So the second part is product requirement. This is where you take that raw user need, and you scope it into something measurable. Patients, for example, can view estimated wait times via a mobile-friendly webpage, perhaps updated every five minutes. You see what you did there? You've made decisions. Mobile-friendly, not an app. Estimated, not exact. Every five minutes, not real time. Each is a key judgment call that you made based on what you learned in your own empathy work. Ensuring that there are very clear, concrete criteria helps the AI do its job better when it gets to the implementation step.

The third piece is the technical spec. Now you're getting into the real building. A web app, for example, that pulls a clinic API for wait data and displays it with a responsive UI, refreshing on a five minute interval. That is implementable. An engineer could actually read that and start building. So could an AI. But notice it still leaves room. Which stack? How errors get handled? What happens when the API goes down?

The fourth step is AI instruction. Specific, contextualized with constraints, and edge cases clearly defined. The stack you're using and the shape of the data. What to do when there's no data. The test that it has to pass. It's critical that you give the AI specific things it can verify. This helps it work more effectively, and for longer.

So here's why this matters. Builders who think about carefully describing all aspects of the problem get the best results with AI. The more thoughtful the Description, the better the output. AI can't hear what the user didn't say. AI can't decide that estimated is the right requirement, because exact times would make the clinic staff anxious about being held to them. It can't know that responsiveness matters because patients are checking wait times while they're en route. You know those things. Your job is to carry them intact as you describe what you need to the AI.

Sometimes the translation breaks, and when it does, you get a specific type of failure. Code that works, but the product doesn't. The test might pass, but the user is still frustrated. That's not a bug, that's a Description failure, and it usually lives upstream of the prompt.

So a big part of your job as a builder is actually forensic. When the thing you built misses the mark, you trace it back. Was it a user understanding failure, where you never really heard what they needed in the first place? Was it a requirement failure, where you heard them, but then you scoped it wrong? Was it a spec failure, where the requirement was actually right, but the technical translation lost something? Or a prompt failure, where everything upstream was solid, and you just instructed the AI poorly?

So one more idea before we build. Your acceptance tests from the last module are a form of Description too, maybe the most powerful kind. A well-written test is a description of intent that can't be misread because it either passes, or it doesn't. When you hand AI a set of tests alongside your prompt, you're not just telling it what to build, you're telling it how you'll know if it succeeded. That changes what you get back.

So in this module, you're going to write detailed descriptions for AI with your clinic project. Product requirements, technical specs, tests, prompts, and then for the first time in this course, we're going to build. You'll demo what you build to someone playing a clinic patient, and you'll ask two questions. First, did the test pass? And second, is the user satisfied? If the answer to the first is yes and the second is no, that's not a failure. That's the most useful thing that can happen to you in this module. It means your test described the wrong thing, and now you know exactly where in the chain to look.

Let's get to it.
