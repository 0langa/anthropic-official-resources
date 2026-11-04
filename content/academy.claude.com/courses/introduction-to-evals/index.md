# Introduction to evals

Build a small eval on your own data to choose a Claude model by accuracy first and cost second, fix the prompt before you upgrade, and keep checking after launch.

4 lessons1 hr1 quizCompletion badge

[Start course](https://academy.claude.com/courses/introduction-to-evals/when-to-use-what-model)[Sign in to save progress](https://academy.claude.com/login?returnTo=%2Fcourses%2Fintroduction-to-evals)

![](https://academy.claude.com/assets/v1/thumbnail.light-jhiolqbj.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-cjvt7zfw.png)

4 lessons · 1 quizIntroduction to evals

What you’ll learnBy the end of this course, you’ll be able to

- Set an accuracy floor from what one wrong answer would cost you
- Pick the lowest-cost model that clears your floor, by cost per completed task
- Build a small set of cases from your own data, with expected answers
- Grade exact fields with code and free text with an LLM judge and a rubric
- Fix the prompt from its failed cases before you upgrade the model
- Block a merge when the smoke eval on a pull request scores too low
- Run the full suite through the Batch API when no one is waiting
- Catch drift by grading a nightly sample of live traffic

No published model comparison has seen your prompt. An eval is a test on your own cases that gives you a number to decide from. Each of the four main lessons shows a short video, then how Meridian, a fictional engineering consultancy, built and ran an eval for one prompt. In three of those four, you find the line of its code, prompt, or workflow file that does each job. There's no script to download. Afterwards you build your own eval the same way. You leave able to choose a model and prompt from evidence and keep checking after launch. Pass the graded quiz to earn your completion badge.

## Who this course is for[](https://academy.claude.com/courses/introduction-to-evals)

This course is for you if you have a working prompt and no graded eval. The lessons stick to prompts that run as a single call to the Messages API. It doesn't cover evaluating agents or measure latency.

## Prerequisites[](https://academy.claude.com/courses/introduction-to-evals)

Take Claude Platform 101 first unless you can call the Messages API and read the response. The code is Python, plus one GitHub Actions workflow in YAML in the "Evals in production" lesson. Reading them is enough. That lesson assumes you know pull requests and CI checks. Your own eval needs a Claude Console account, an API key, and real inputs with expected answers.
