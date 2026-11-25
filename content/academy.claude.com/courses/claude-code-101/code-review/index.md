Lesson 7 of 12 · Claude Code 101Code review

# Code review

Lesson 710 min

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fclaude-code-101%2Fcode-review)

Claude's summary of a task can be true and still leave out changes you'd want to know about. The session that wrote the code isn't the best judge of it either. **So check a change twice before you keep it.** Read the diff yourself, then have Claude review it from a clean context, without this session's history.

## Read the diff[](https://academy.claude.com/courses/claude-code-101/code-review)

Start with the diff, which shows every line removed and added, file by file. **Run `/diff` to see your uncommitted changes.** It can also show what each of Claude's turns changed.

`/diff`

If it opens above the prompt, use the up and down arrows to move between files and `Enter` to open one. If it opens as a panel beside the conversation, click a file to jump to it. The panel hides test files and generated files until you click their count line.

Read more Nothing shows up in /diff?

`/diff` and `/code-review` read from git, the version-control tool most projects use. So your project needs to be in a git repository. This course doesn't teach git itself.

If your project isn't in git yet, ask Claude to set it up and make a first commit before your next task. For the change in front of you, ask for a review in plain words.

If you use another version control system, read the change in your own tool. Then ask Claude in plain words to review the files it touched. `/rewind` still works because Claude tracks its own edits.

As you read, look for three things every time:

- Changes you didn't ask for, such as an edited config value or a rewritten helper.
- Tests that got weaker because they were skipped, deleted, or loosened until they passed.
- New packages and hard-coded values, such as a dependency added for one function or a key written into the code.

Try it on a small signup-form task, where three of the eight files deserve a second look. You don't need to follow every line. Start with the file names, then compare the removed and added lines.

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

## Undo a wrong change[](https://academy.claude.com/courses/claude-code-101/code-review)

**If the whole change is wrong, run `/rewind`.** You can also press `Esc` twice on an empty prompt. Pick the prompt that produced the change, then choose "Restore code and conversation."

Rewind rolls back the files Claude edited with its file editing tools in your conversation. It also undoes changes that shell commands made to those files afterward. It doesn't roll back files changed only by shell commands, such as a package install.

## Ask for a second opinion[](https://academy.claude.com/courses/claude-code-101/code-review)

Your own read is the first check. The second is the reviewer that the Explore → Plan → Code → Commit lesson asked for. A long session carries everything it has read and decided, which is history you don't want in a reviewer. **`/code-review` starts from a clean context, with none of that history.** It reports what it finds and edits nothing unless you ask.

`/code-review`

The review runs in the background for seconds to a few minutes, then its findings arrive in your conversation. It counts against your usage like any other task, so save it for changes that deserve it.

You can also ask in plain words. If Claude answers inline and doesn't start a review, run the command yourself.

Review the changes you just made. Report problems; don't fix anything yet.

Copy prompt

Read more Want a lighter or a deeper review?

Add an effort level to the command. `/code-review low` reports only the findings it's most sure of, so you see fewer false alarms. `/code-review high` casts a wider net, so it may include findings it's less sure of. Later reviews reuse the last level you typed.

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

Not every finding needs a fix, so sort each one into one of three piles:

1. **Fix now.** The problem is real and it matters.
2. **Ask why.** You can't confirm the finding, or it seems off. A reviewer reading the change cold can miss things too.
3. **Leave it.** The problem is real but small, so batch it with others for a later session.

Try sorting the four findings from the signup-form review:

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

To ask why, quote the finding back and have Claude check again:

You reported that isValidEmail doesn't trim spaces, but line 4 calls trim(). Check again and tell me whether the finding stands.

Copy prompt

When you ask for a fix, ask for evidence with it:

Fix the first finding: don't skip the empty-email test and restore the original assertion. Then run the tests and show me the output.

Copy prompt

If a fix grows into a large change of its own, run the review again.

## When to do both checks[](https://academy.claude.com/courses/claude-code-101/code-review)

A one-line change often needs only a glance at the diff. **Do both checks when a change is big, risky, or about to be shared:**

- It's too big to hold in your head.
- It touches something sensitive or does something destructive.
- You're about to hand the work to a teammate.

Read more Is this the same as Claude Code Review?

No. [Claude Code Review(opens in new tab)](https://code.claude.com/docs/en/code-review) is a separate product for teams. An Owner of your Claude organization turns it on for a GitHub repository, and it posts findings on pull requests. Nothing in this lesson needs it.

## Recap[](https://academy.claude.com/courses/claude-code-101/code-review)

- Read the diff with `/diff` before you trust the summary.
- Get a second opinion from a clean context with `/code-review`.
- Fix, ask why, or leave each finding, and ask for evidence with every fix.

If the reviewer keeps flagging the same issue, write a rule for Claude to read at the start of every session. That rule goes in `CLAUDE.md`, which is next.

Was this helpful?
