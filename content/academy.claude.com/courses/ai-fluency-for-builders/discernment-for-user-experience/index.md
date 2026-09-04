Lesson 7 of 9 · AI Fluency for BuildersDiscernment for user experience

# Discernment for user experience

Lesson 715 min

In this lessonBy the end, you’ll be able to

- Apply hierarchy, user flows, accessibility, and feedback patterns when specifying what AI should build
- Critique AI-generated designs using feedback specific enough to act on
- Make intentional tradeoff decisions between speed, polish, and user needs

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fai-fluency-for-builders%2Fdiscernment-for-user-experience)

## Discernment for user experience[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

Embedded media: https://www.youtube-nocookie.com/embed/jgcF2d0kW7U?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Discernment for user experience · 2 min

SummaryTranscript

As AI speeds up implementation, design becomes the differentiator. This
lesson covers the UX principles that matter most when working with AI, why
“make it look good” produces nothing useful, and how to close the gap
between a critique you’d give a colleague and a description AI can execute.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=jgcF2d0kW7U)

UX Lab: Apply the four principles

Each tab shows a food delivery screen with common UX problems AI generates by default. Hover over any element to discover what’s wrong — then click Show Fix to see how it should be built.

ClarityHierarchyAccessibilityFeedback

Principle 1 of 4

Clarity

Every element should instantly communicate its purpose. Users shouldn’t have to guess what a button does or what a field means.

Show Fix

←No destination label — users can’t tell where “back” goesAppGeneric title — what screen is this?⋮Unexplained icon — what does this open?

Burger12.00No currency symbol — is this dollars?

Fries4.50

Total16.50

SubmitVague action — submit what? For how much?

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

- **When implementation is fast, experience is the differentiator.** Design literacy is a core builder skill.
- **“Make it look good” is a wish, not a spec.** Describe experience with the same precision as a function.
- **AI does not get accessibility right by default.** Specify it, then audit what you get back.
- A good **critique** and an actionable **AI description** are different artifacts. Learn to translate between them.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

### The Clinic Wait Time Project, Part 3

Write a design spec for your clinic app — user flows, information hierarchy, interaction patterns — then rebuild it with AI against that spec. Critique the result: where did AI nail it, and where is it technically correct but experientially flat? Run a quick accessibility audit and document what AI missed.

- **Clarity & Mental Model** — Does the output use language and patterns a clinic admin would recognize?
- **Information Hierarchy** — Is the most important information the first thing users see?
- **Accessibility** — Does it pass color contrast, screen reader, and keyboard navigation checks?
- **Feedback & Error Handling** — Does the interface acknowledge user actions and explain what to do when something goes wrong?

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

- How much of your design spec describes what the interface does versus how it should feel to use?
- After running the accessibility check, did you build with accessibility in mind from the start, or add it at the end?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

You’ve looked at your Clinic Wait Time Checker through both a code lens and a UX lens. In the next lesson, you’ll tackle the hardest question: what does it mean to actually stand behind what you build?

Was this helpful?


## Transcript

As implementation gets faster, design and user experience become even more important. You don't need to become a designer, but you do need to recognize good experience, spec for it, and iterate towards it. A few principles here to guide you.

One is clarity. If users can't tell what your product does, or how to get started, they're gone. Clarity means unifying form and function while respecting people's mental models. Users arrive with expectations, shaped by other software and by the world. Keep it simple and map your interface to concepts they recognize. A patient checking wait times expects it to work like every other status checker.

Two is hierarchy and progressive disclosure. Make it easy for people to scan and find the information that is needed. Don't overwhelm them. Use text size and weight to create good headers. Minify the amount of unneeded elements, and allow people to find the information they need as they need it instead of cramming it all into one space.

Three, accessibility is a baseline, not a nice to have. Screen reader compatibility, color contrast, keyboard navigation, you should ask the AI for these explicitly every single time and build test cases to validate.

Four, feedback and responsiveness. When the user does something, the interface should acknowledge it, not lead the user to question if something might be broken. Loading states, confirmations, and error messages that explain what to do next, all in simple human language, help build trust.

The gap between making it look good and a good experience is enormous. Make it look good is a wish. Put the wait time in the largest text on the page, use a single color to indicate status, and make the refresh time visible so the patient knows how stale the number is, is an actionable, strong Description.

This is Description and Discernment working together. You describe the experience precisely, AI builds it. You evaluate what comes back against what you intended. You describe the gap, repeat.

One thing you'll notice in the exercises, the critique that you'd give a colleague and the description AI needs are not the same document. This feels cluttered is a fair critique, but it's useless instruction for AI. Part of design literacy is learning how to translate your own taste into something that is executable. Let's put it to work.


## CLARITY

Lesson 7 of 9 · AI Fluency for BuildersDiscernment for user experience

# Discernment for user experience

Lesson 715 min

In this lessonBy the end, you’ll be able to

- Apply hierarchy, user flows, accessibility, and feedback patterns when specifying what AI should build
- Critique AI-generated designs using feedback specific enough to act on
- Make intentional tradeoff decisions between speed, polish, and user needs

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fai-fluency-for-builders%2Fdiscernment-for-user-experience)

## Discernment for user experience[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

Embedded media: https://www.youtube-nocookie.com/embed/jgcF2d0kW7U?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Discernment for user experience · 2 min

SummaryTranscript

As implementation gets faster, design and user experience become even more important. You don't need to become a designer, but you do need to recognize good experience, spec for it, and iterate towards it. A few principles here to guide you.

One is clarity. If users can't tell what your product does, or how to get started, they're gone. Clarity means unifying form and function while respecting people's mental models. Users arrive with expectations, shaped by other software and by the world. Keep it simple and map your interface to concepts they recognize. A patient checking wait times expects it to work like every other status checker.

Two is hierarchy and progressive disclosure. Make it easy for people to scan and find the information that is needed. Don't overwhelm them. Use text size and weight to create good headers. Minify the amount of unneeded elements, and allow people to find the information they need as they need it instead of cramming it all into one space.

Three, accessibility is a baseline, not a nice to have. Screen reader compatibility, color contrast, keyboard navigation, you should ask the AI for these explicitly every single time and build test cases to validate.

Four, feedback and responsiveness. When the user does something, the interface should acknowledge it, not lead the user to question if something might be broken. Loading states, confirmations, and error messages that explain what to do next, all in simple human language, help build trust.

The gap between making it look good and a good experience is enormous. Make it look good is a wish. Put the wait time in the largest text on the page, use a single color to indicate status, and make the refresh time visible so the patient knows how stale the number is, is an actionable, strong Description.

This is Description and Discernment working together. You describe the experience precisely, AI builds it. You evaluate what comes back against what you intended. You describe the gap, repeat.

One thing you'll notice in the exercises, the critique that you'd give a colleague and the description AI needs are not the same document. This feels cluttered is a fair critique, but it's useless instruction for AI. Part of design literacy is learning how to translate your own taste into something that is executable. Let's put it to work.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=jgcF2d0kW7U)

UX Lab: Apply the four principles

Each tab shows a food delivery screen with common UX problems AI generates by default. Hover over any element to discover what’s wrong — then click Show Fix to see how it should be built.

ClarityHierarchyAccessibilityFeedback

Principle 1 of 4

Clarity

Every element should instantly communicate its purpose. Users shouldn’t have to guess what a button does or what a field means.

Show Fix

←No destination label — users can’t tell where “back” goesAppGeneric title — what screen is this?⋮Unexplained icon — what does this open?

Burger12.00No currency symbol — is this dollars?

Fries4.50

Total16.50

SubmitVague action — submit what? For how much?

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

- **When implementation is fast, experience is the differentiator.** Design literacy is a core builder skill.
- **“Make it look good” is a wish, not a spec.** Describe experience with the same precision as a function.
- **AI does not get accessibility right by default.** Specify it, then audit what you get back.
- A good **critique** and an actionable **AI description** are different artifacts. Learn to translate between them.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

### The Clinic Wait Time Project, Part 3

Write a design spec for your clinic app — user flows, information hierarchy, interaction patterns — then rebuild it with AI against that spec. Critique the result: where did AI nail it, and where is it technically correct but experientially flat? Run a quick accessibility audit and document what AI missed.

- **Clarity & Mental Model** — Does the output use language and patterns a clinic admin would recognize?
- **Information Hierarchy** — Is the most important information the first thing users see?
- **Accessibility** — Does it pass color contrast, screen reader, and keyboard navigation checks?
- **Feedback & Error Handling** — Does the interface acknowledge user actions and explain what to do when something goes wrong?

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

- How much of your design spec describes what the interface does versus how it should feel to use?
- After running the accessibility check, did you build with accessibility in mind from the start, or add it at the end?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

You’ve looked at your Clinic Wait Time Checker through both a code lens and a UX lens. In the next lesson, you’ll tackle the hardest question: what does it mean to actually stand behind what you build?

Was this helpful?


## HIERARCHY

Lesson 7 of 9 · AI Fluency for BuildersDiscernment for user experience

# Discernment for user experience

Lesson 715 min

In this lessonBy the end, you’ll be able to

- Apply hierarchy, user flows, accessibility, and feedback patterns when specifying what AI should build
- Critique AI-generated designs using feedback specific enough to act on
- Make intentional tradeoff decisions between speed, polish, and user needs

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fai-fluency-for-builders%2Fdiscernment-for-user-experience)

## Discernment for user experience[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

Embedded media: https://www.youtube-nocookie.com/embed/jgcF2d0kW7U?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Discernment for user experience · 2 min

SummaryTranscript

As implementation gets faster, design and user experience become even more important. You don't need to become a designer, but you do need to recognize good experience, spec for it, and iterate towards it. A few principles here to guide you.

One is clarity. If users can't tell what your product does, or how to get started, they're gone. Clarity means unifying form and function while respecting people's mental models. Users arrive with expectations, shaped by other software and by the world. Keep it simple and map your interface to concepts they recognize. A patient checking wait times expects it to work like every other status checker.

Two is hierarchy and progressive disclosure. Make it easy for people to scan and find the information that is needed. Don't overwhelm them. Use text size and weight to create good headers. Minify the amount of unneeded elements, and allow people to find the information they need as they need it instead of cramming it all into one space.

Three, accessibility is a baseline, not a nice to have. Screen reader compatibility, color contrast, keyboard navigation, you should ask the AI for these explicitly every single time and build test cases to validate.

Four, feedback and responsiveness. When the user does something, the interface should acknowledge it, not lead the user to question if something might be broken. Loading states, confirmations, and error messages that explain what to do next, all in simple human language, help build trust.

The gap between making it look good and a good experience is enormous. Make it look good is a wish. Put the wait time in the largest text on the page, use a single color to indicate status, and make the refresh time visible so the patient knows how stale the number is, is an actionable, strong Description.

This is Description and Discernment working together. You describe the experience precisely, AI builds it. You evaluate what comes back against what you intended. You describe the gap, repeat.

One thing you'll notice in the exercises, the critique that you'd give a colleague and the description AI needs are not the same document. This feels cluttered is a fair critique, but it's useless instruction for AI. Part of design literacy is learning how to translate your own taste into something that is executable. Let's put it to work.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=jgcF2d0kW7U)

UX Lab: Apply the four principles

Each tab shows a food delivery screen with common UX problems AI generates by default. Hover over any element to discover what’s wrong — then click Show Fix to see how it should be built.

ClarityHierarchyAccessibilityFeedback

Principle 2 of 4

Hierarchy

Visual weight should match information priority. The most important thing should look the most important.

Show Fix

Order total: $16.50Most critical info buried in a flat list — nothing stands outArriving by 1:10 PMSame size as the order number — hard to find fast

Order #1284

123 Main St, Apt 4B

Subtotal $14.00 + Delivery $2.50

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

- **When implementation is fast, experience is the differentiator.** Design literacy is a core builder skill.
- **“Make it look good” is a wish, not a spec.** Describe experience with the same precision as a function.
- **AI does not get accessibility right by default.** Specify it, then audit what you get back.
- A good **critique** and an actionable **AI description** are different artifacts. Learn to translate between them.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

### The Clinic Wait Time Project, Part 3

Write a design spec for your clinic app — user flows, information hierarchy, interaction patterns — then rebuild it with AI against that spec. Critique the result: where did AI nail it, and where is it technically correct but experientially flat? Run a quick accessibility audit and document what AI missed.

- **Clarity & Mental Model** — Does the output use language and patterns a clinic admin would recognize?
- **Information Hierarchy** — Is the most important information the first thing users see?
- **Accessibility** — Does it pass color contrast, screen reader, and keyboard navigation checks?
- **Feedback & Error Handling** — Does the interface acknowledge user actions and explain what to do when something goes wrong?

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

- How much of your design spec describes what the interface does versus how it should feel to use?
- After running the accessibility check, did you build with accessibility in mind from the start, or add it at the end?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

You’ve looked at your Clinic Wait Time Checker through both a code lens and a UX lens. In the next lesson, you’ll tackle the hardest question: what does it mean to actually stand behind what you build?

Was this helpful?


## ACCESSIBILITY

Lesson 7 of 9 · AI Fluency for BuildersDiscernment for user experience

# Discernment for user experience

Lesson 715 min

In this lessonBy the end, you’ll be able to

- Apply hierarchy, user flows, accessibility, and feedback patterns when specifying what AI should build
- Critique AI-generated designs using feedback specific enough to act on
- Make intentional tradeoff decisions between speed, polish, and user needs

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fai-fluency-for-builders%2Fdiscernment-for-user-experience)

## Discernment for user experience[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

Embedded media: https://www.youtube-nocookie.com/embed/jgcF2d0kW7U?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Discernment for user experience · 2 min

SummaryTranscript

As implementation gets faster, design and user experience become even more important. You don't need to become a designer, but you do need to recognize good experience, spec for it, and iterate towards it. A few principles here to guide you.

One is clarity. If users can't tell what your product does, or how to get started, they're gone. Clarity means unifying form and function while respecting people's mental models. Users arrive with expectations, shaped by other software and by the world. Keep it simple and map your interface to concepts they recognize. A patient checking wait times expects it to work like every other status checker.

Two is hierarchy and progressive disclosure. Make it easy for people to scan and find the information that is needed. Don't overwhelm them. Use text size and weight to create good headers. Minify the amount of unneeded elements, and allow people to find the information they need as they need it instead of cramming it all into one space.

Three, accessibility is a baseline, not a nice to have. Screen reader compatibility, color contrast, keyboard navigation, you should ask the AI for these explicitly every single time and build test cases to validate.

Four, feedback and responsiveness. When the user does something, the interface should acknowledge it, not lead the user to question if something might be broken. Loading states, confirmations, and error messages that explain what to do next, all in simple human language, help build trust.

The gap between making it look good and a good experience is enormous. Make it look good is a wish. Put the wait time in the largest text on the page, use a single color to indicate status, and make the refresh time visible so the patient knows how stale the number is, is an actionable, strong Description.

This is Description and Discernment working together. You describe the experience precisely, AI builds it. You evaluate what comes back against what you intended. You describe the gap, repeat.

One thing you'll notice in the exercises, the critique that you'd give a colleague and the description AI needs are not the same document. This feels cluttered is a fair critique, but it's useless instruction for AI. Part of design literacy is learning how to translate your own taste into something that is executable. Let's put it to work.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=jgcF2d0kW7U)

UX Lab: Apply the four principles

Each tab shows a food delivery screen with common UX problems AI generates by default. Hover over any element to discover what’s wrong — then click Show Fix to see how it should be built.

ClarityHierarchyAccessibilityFeedback

Principle 3 of 4

Accessibility

About 1 in 5 people has a disability — visual, cognitive, or neurological. AI generates for the median user. Small text, color-only signals, and jargon quietly exclude everyone else.

Show Fix

Order #1284Color only — no text label. Colorblind users cannot tell if this means confirmed or failed.

Item9px header text — unreadable for low vision users without screen magnification.qty“qty” is an abbreviation — creates friction for users with cognitive disabilities or limited literacy.Price

Burger1$12.00

Fries1$4.50

Total$16.50

ETA: 35 min · Cancellation per T&C9px text. “ETA” and “T&C” are jargon — neurodivergent users often need plain language to process confidently.

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

- **When implementation is fast, experience is the differentiator.** Design literacy is a core builder skill.
- **“Make it look good” is a wish, not a spec.** Describe experience with the same precision as a function.
- **AI does not get accessibility right by default.** Specify it, then audit what you get back.
- A good **critique** and an actionable **AI description** are different artifacts. Learn to translate between them.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

### The Clinic Wait Time Project, Part 3

Write a design spec for your clinic app — user flows, information hierarchy, interaction patterns — then rebuild it with AI against that spec. Critique the result: where did AI nail it, and where is it technically correct but experientially flat? Run a quick accessibility audit and document what AI missed.

- **Clarity & Mental Model** — Does the output use language and patterns a clinic admin would recognize?
- **Information Hierarchy** — Is the most important information the first thing users see?
- **Accessibility** — Does it pass color contrast, screen reader, and keyboard navigation checks?
- **Feedback & Error Handling** — Does the interface acknowledge user actions and explain what to do when something goes wrong?

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

- How much of your design spec describes what the interface does versus how it should feel to use?
- After running the accessibility check, did you build with accessibility in mind from the start, or add it at the end?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

You’ve looked at your Clinic Wait Time Checker through both a code lens and a UX lens. In the next lesson, you’ll tackle the hardest question: what does it mean to actually stand behind what you build?

Was this helpful?


## FEEDBACK

Lesson 7 of 9 · AI Fluency for BuildersDiscernment for user experience

# Discernment for user experience

Lesson 715 min

In this lessonBy the end, you’ll be able to

- Apply hierarchy, user flows, accessibility, and feedback patterns when specifying what AI should build
- Critique AI-generated designs using feedback specific enough to act on
- Make intentional tradeoff decisions between speed, polish, and user needs

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=https%3A%2F%2Facademy.claude.com%2Fcourses%2Fai-fluency-for-builders%2Fdiscernment-for-user-experience)

## Discernment for user experience[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

Embedded media: https://www.youtube-nocookie.com/embed/jgcF2d0kW7U?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

Discernment for user experience · 2 min

SummaryTranscript

As implementation gets faster, design and user experience become even more important. You don't need to become a designer, but you do need to recognize good experience, spec for it, and iterate towards it. A few principles here to guide you.

One is clarity. If users can't tell what your product does, or how to get started, they're gone. Clarity means unifying form and function while respecting people's mental models. Users arrive with expectations, shaped by other software and by the world. Keep it simple and map your interface to concepts they recognize. A patient checking wait times expects it to work like every other status checker.

Two is hierarchy and progressive disclosure. Make it easy for people to scan and find the information that is needed. Don't overwhelm them. Use text size and weight to create good headers. Minify the amount of unneeded elements, and allow people to find the information they need as they need it instead of cramming it all into one space.

Three, accessibility is a baseline, not a nice to have. Screen reader compatibility, color contrast, keyboard navigation, you should ask the AI for these explicitly every single time and build test cases to validate.

Four, feedback and responsiveness. When the user does something, the interface should acknowledge it, not lead the user to question if something might be broken. Loading states, confirmations, and error messages that explain what to do next, all in simple human language, help build trust.

The gap between making it look good and a good experience is enormous. Make it look good is a wish. Put the wait time in the largest text on the page, use a single color to indicate status, and make the refresh time visible so the patient knows how stale the number is, is an actionable, strong Description.

This is Description and Discernment working together. You describe the experience precisely, AI builds it. You evaluate what comes back against what you intended. You describe the gap, repeat.

One thing you'll notice in the exercises, the critique that you'd give a colleague and the description AI needs are not the same document. This feels cluttered is a fair critique, but it's useless instruction for AI. Part of design literacy is learning how to translate your own taste into something that is executable. Let's put it to work.

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=jgcF2d0kW7U)

UX Lab: Apply the four principles

Each tab shows a food delivery screen with common UX problems AI generates by default. Hover over any element to discover what’s wrong — then click Show Fix to see how it should be built.

ClarityHierarchyAccessibilityFeedback

Principle 4 of 4

Feedback

When something breaks, users need to know what happened, what to do next, and how to get help. A raw error code answers none of those questions.

Show Fix

←Order Review⋮

⚠No explanation — users don’t know if their order went through, failed, or is still pending.Error 503“503 Service Unavailable” is a server code. It means nothing to a user trying to order lunch.

## Key takeaways[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

- **When implementation is fast, experience is the differentiator.** Design literacy is a core builder skill.
- **“Make it look good” is a wish, not a spec.** Describe experience with the same precision as a function.
- **AI does not get accessibility right by default.** Specify it, then audit what you get back.
- A good **critique** and an actionable **AI description** are different artifacts. Learn to translate between them.

## Exercise[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

### The Clinic Wait Time Project, Part 3

Write a design spec for your clinic app — user flows, information hierarchy, interaction patterns — then rebuild it with AI against that spec. Critique the result: where did AI nail it, and where is it technically correct but experientially flat? Run a quick accessibility audit and document what AI missed.

- **Clarity & Mental Model** — Does the output use language and patterns a clinic admin would recognize?
- **Information Hierarchy** — Is the most important information the first thing users see?
- **Accessibility** — Does it pass color contrast, screen reader, and keyboard navigation checks?
- **Feedback & Error Handling** — Does the interface acknowledge user actions and explain what to do when something goes wrong?

## Lesson reflection[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

- How much of your design spec describes what the interface does versus how it should feel to use?
- After running the accessibility check, did you build with accessibility in mind from the start, or add it at the end?

## What's next[](https://academy.claude.com/courses/ai-fluency-for-builders/discernment-for-user-experience)

You’ve looked at your Clinic Wait Time Checker through both a code lens and a UX lens. In the next lesson, you’ll tackle the hardest question: what does it mean to actually stand behind what you build?

Was this helpful?


## Video transcript

# Discernment for user experience

As implementation gets faster, design and user experience become even more important. You don't need to become a designer, but you do need to recognize good experience, spec for it, and iterate towards it. A few principles here to guide you.

One is clarity. If users can't tell what your product does, or how to get started, they're gone. Clarity means unifying form and function while respecting people's mental models. Users arrive with expectations, shaped by other software and by the world. Keep it simple and map your interface to concepts they recognize. A patient checking wait times expects it to work like every other status checker.

Two is hierarchy and progressive disclosure. Make it easy for people to scan and find the information that is needed. Don't overwhelm them. Use text size and weight to create good headers. Minify the amount of unneeded elements, and allow people to find the information they need as they need it instead of cramming it all into one space.

Three, accessibility is a baseline, not a nice to have. Screen reader compatibility, color contrast, keyboard navigation, you should ask the AI for these explicitly every single time and build test cases to validate.

Four, feedback and responsiveness. When the user does something, the interface should acknowledge it, not lead the user to question if something might be broken. Loading states, confirmations, and error messages that explain what to do next, all in simple human language, help build trust.

The gap between making it look good and a good experience is enormous. Make it look good is a wish. Put the wait time in the largest text on the page, use a single color to indicate status, and make the refresh time visible so the patient knows how stale the number is, is an actionable, strong Description.

This is Description and Discernment working together. You describe the experience precisely, AI builds it. You evaluate what comes back against what you intended. You describe the gap, repeat.

One thing you'll notice in the exercises, the critique that you'd give a colleague and the description AI needs are not the same document. This feels cluttered is a fair critique, but it's useless instruction for AI. Part of design literacy is learning how to translate your own taste into something that is executable. Let's put it to work.

