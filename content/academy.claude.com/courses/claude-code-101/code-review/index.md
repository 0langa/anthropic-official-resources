Lesson 7 of 12 · Claude Code 101Code review

# Code review

Lesson 710 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fclaude-code-101%2Fcode-review)

When you give Claude Code a task to complete in your codebase, Claude will often report back in a succinct way. Underneath the description of what Claude changed, there can be a variety of files that were changed (from small to major changes). Oftentimes, the session that wrote the code changes themselves (and explained them) is not the highest-quality judge of those changes. It's a good practice to give every change a look yourself before you keep it, and then have Claude review it again from a clean context, without this session's history.

## Review the actual changes[](https://academy.claude.com/courses/claude-code-101/code-review)

A diff is the before-and-after of a change: the lines removed and the lines added, file by file. The `/diff` command opens an interactive viewer of your uncommitted changes in that form, and it can also show what each of Claude's turns changed. Use the up and down arrows to move between files and `Enter` to open one.

`/diff`

Read more Nothing shows up in /diff?

`/diff` and `/code-review` read git's record of what changed, so your project needs to be in a git repository. Git is the version-control tool most projects already use, and the Commit step in the Explore → Plan → Code → Commit lesson relies on it. This course doesn't teach git itself. If your project isn't in git yet, ask Claude to set it up and make a first commit before your next task. From that point on, every change shows up in both commands. For the change in front of you right now, ask for a review in plain words (below). On a different version control system, `/diff` and `/code-review` won't see your changes, but the rest still applies: read the change in your own tool, ask Claude in plain words to review the files Claude touched, and `/rewind` still works because Claude tracks its own edits.

The most important things that deserve a second look every time are:

- **Changes you didn't ask for.** A config value that was edited while Claude was in the file or a rewritten helper method that you didn't mention.
- **Tests that got weaker.** If the project you're working in contains tests, identify any that were skipped, deleted, or loosened until they passed.
- **New packages and hard-coded values.** A dependency that was added for only one function, a URL or a key written straight into the code.

If the whole change is wrong, run `/rewind` (or press `Esc` twice on an empty prompt), pick the prompt that produced it, and choose **Restore code and conversation**. One limit worth knowing: files changed by shell commands Claude ran, such as a package install, aren't rolled back.

The exercise below uses a small signup-form task: Claude's summary on top, the eight files Claude touched underneath.

Exercise: after reading Claude's summary of a completed coding task, expand each changed file's diff and flag the ones that deserve a second look, getting feedback on each attempt, to learn that a true summary can still omit changes worth scrutinizing.

Compare Claude's summary with the diff

0 of 3 found

Claude completed the task and provided the summary response. Everything in it is true. Now compare it with the files that changed.

1. 1Read Claude's summary
2. 2Expand each file diff to see what changed in it
3. 3Flag the three files that probably deserve a second look

Claude's summary

>Add input validation to the signup form: check the email format and require passwords of at least 8 characters, with inline error messages.

Added input validation to the signup form.

- -Email format and password length are checked before submit
- -Inline error messages appear under each field
- -All tests pass

File changes: 8 files

src/components/SignupForm.tsx+34−6Flag

src/lib/validate.tsnew file+14Flag

src/lib/validate.test.tsnew file+31Flag

src/components/SignupForm.test.tsx+2−8Flag

src/styles/form.css+9Flag

package.json+1Flag

package-lock.json+14Flag

src/config.ts+2−1Flag

## Ask for a second opinion[](https://academy.claude.com/courses/claude-code-101/code-review)

The Explore → Plan → Code → Commit lesson said to have a second reviewer on a change before you commit it. A long session carries everything it has read and decided. That's the context you learned to manage in the previous lesson, and it's exactly the history you don't want in a reviewer. `/code-review` is that second reviewer: it reviews the change in a clean context, with none of your session's history, and reports what it finds. It edits nothing unless you ask it to.

`/code-review`

The review runs in the background, anywhere from seconds to a few minutes, and counts against your usage like any other task, so save it for changes that deserve a second look. The findings arrive in your conversation when it finishes. You can also ask in plain words, and Claude can start the same review from the request. If Claude answers inline instead of starting a review, run the command yourself.

Review the changes you just made. Report problems; don't fix anything yet.

Copy prompt

Read more Want a lighter or a deeper review?

Add an effort level to the command. `/code-review low` reports only the findings it's most confident about, so you see fewer false alarms. `/code-review high` casts a wider net and may include findings it's less sure of. The level you type is remembered for later reviews until you type a different one.

For the signup-form change, the review came back with four findings:

Transcript: shows /code-review's findings on a sample code change, each with a file location, a correctness-or-style tag, and a one-line summary, illustrating what a clean-context second opinion surfaces before the learner sorts these findings next.

>/code-review

Reviewed 8 changed files. 4 findings:

1. 1.

   src/components/SignupForm.test.tsx:18[correctness]

   A test was skipped and an assertion weakened; a form that submits empty values would still pass.
2. 2.

   src/lib/validate.ts:4[correctness]

   isValidEmail doesn't trim leading or trailing spaces, so an address pasted with a stray space is rejected.
3. 3.

   src/config.ts:1[correctness]

   API\_URL is hard-coded to localhost:3000; a production build would send signups to a development address.
4. 4.

   src/styles/form.css:1[style]

   Error text uses a hex color instead of the project's --color-danger variable.

## Decide what to do with each finding[](https://academy.claude.com/courses/claude-code-101/code-review)

Sort each finding into one of three piles:

1. **Fix now.** This is a real problem, it matters, and it must be fixed.
2. **Ask why.** This is the pile for findings you can't quite verify or that seem off. It's possible for reviewers that are reading code changes cold to also miss things.
3. **Leave it.** This is a real problem but small or inconsequential. These can often be batched into a group of fixes that you'll cover in one future session.

To ask why, quote the finding back to Claude and ask Claude to check again. For the second finding above, you would type:

You reported that isValidEmail doesn't trim spaces, but line 4 calls trim(). Check again and tell me whether the finding stands.

Copy prompt

Whenever you ask for a fix, it's good to ask for evidence with it:

Fix the first finding: don't skip the empty-email test and restore the original assertion. Then run the tests and show me the output.

Copy prompt

If a fix eventually grows into a large change of its own, run the review again.

## When it pays off to review things more closely[](https://academy.claude.com/courses/claude-code-101/code-review)

A simple, one-line change often needs a quick glance at the diff and nothing else. You should use a human review and a Claude review when a change is bigger than you could hold in your head, when it touches something sensitive or does something destructive, and before you hand the work to a teammate.

Read more Is this the same as Claude Code Review?

No. [Claude Code Review(opens in new tab)](https://code.claude.com/docs/en/code-review) is a separate product for teams: an admin turns it on for a GitHub repository, and it posts its findings on pull requests. Nothing in this lesson needs it.

## Try it: sort the four findings[](https://academy.claude.com/courses/claude-code-101/code-review)

Exercise: for each finding from a code review tool, the learner sorts it as fix now, ask why, or leave it, unlocking feedback on each choice. It teaches that not every finding needs an immediate fix, and reviewers can sometimes be wrong.

Which pile does each of these findings belong in?

1src/components/SignupForm.test.tsx:18correctness

A test was skipped and an assertion weakened; a form that submits empty values would still pass.

Hide code

−it("blocks submit when the email is empty", async () => {

+it.skip("blocks submit when the email is empty", async () => {

…

− expect(onSubmit).toHaveBeenCalledWith({ email: "sam@example.com", password: "correct-horse-battery" });

+ expect(onSubmit).toHaveBeenCalled();

Fix nowAsk whyLeave it

2src/lib/validate.ts:4correctness

isValidEmail doesn't trim leading or trailing spaces, so an address pasted with a stray space is rejected.

Hide code

3export function isValidEmail(value: string) {

4 return isEmail(value.trim());

5}

Fix nowAsk whyLeave it

3src/config.ts:1correctness

API\_URL is hard-coded to localhost:3000; a production build would send signups to a development address.

Hide code

−export const API\_URL = import.meta.env.VITE\_API\_URL;

+export const API\_URL = "http://localhost:3000"; // local testing

Fix nowAsk whyLeave it

4src/styles/form.css:1style

Error text uses a hex color instead of the project's --color-danger variable.

Hide code

1.field-error { color: #c0392b; font-size: 0.875rem; margin-top: 4px; }

Fix nowAsk whyLeave it

## Recap[](https://academy.claude.com/courses/claude-code-101/code-review)

- Read the actual diff of the file changes before you trust the summary alone. Run `/diff` and look for changes you didn't ask for, weaker tests, and new packages or hard-coded values.
- Get a second opinion from a clean context with `/code-review` (or ask in plain words and let Claude start it). The reviewer reports, and Claude doesn't edit unless you ask.
- Treat each finding as fix now, ask why, or leave it, and ask for evidence with every fix.

When the reviewer flags the same issue a few times, it might be a good idea to write a rule for Claude to read at the start of every session. That file is `CLAUDE.md`, and it's next.

Was this helpful?
