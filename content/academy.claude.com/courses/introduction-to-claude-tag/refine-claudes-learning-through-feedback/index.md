Lesson 6 of 11 · Introduction to Claude TagRefine Claude's work through memory and instructions

# Refine Claude's work through memory and instructions

Lesson 610 min

In this lessonBy the end, you’ll be able to

- Save corrections so Claude learns what matters to your team
- Choose between memory and instructions by how firmly a rule should hold
- Check and correct a channel's notes over time

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fintroduction-to-claude-tag%2Frefine-claudes-learning-through-feedback)

## How Claude learns, and how to give feedback[](https://academy.claude.com/courses/introduction-to-claude-tag/refine-claudes-learning-through-feedback)

As you work with Claude in a channel, it learns from your feedback, and most of the time giving feedback is as easy as telling Claude. What you tell Claude goes to one of two places: memory or channel instructions.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium"></th><th class="border-b border-strong p-sm text-left font-medium">Memory</th><th class="border-b border-strong p-sm text-left font-medium">Channel instructions</th></tr></thead><tbody><tr><td class="border-b p-sm"><strong>Who writes it</strong></td><td class="border-b p-sm">Claude, on its own or when asked</td><td class="border-b p-sm">A person, deliberately</td></tr><tr><td class="border-b p-sm"><strong>Where it is edited</strong></td><td class="border-b p-sm">By talking to Claude in the channel (Owners can also edit notes in admin settings)</td><td class="border-b p-sm">The channel’s settings (Configure, under any reply)</td></tr><tr><td class="border-b p-sm"><strong>Best for</strong></td><td class="border-b p-sm">Context Claude learns as it goes (preferences, conventions, owners, corrections), and rules you are trying out</td><td class="border-b p-sm">Rules that must hold in every thread: purpose, tone, when to reply, never do X, who to escalate to</td></tr><tr><td class="border-b p-sm"><strong>Precedence</strong></td><td class="border-b p-sm">Advisory; instructions outrank it</td><td class="border-b p-sm">Read in every new thread; outranks memory</td></tr></tbody></table>

*For a deeper dive on what Claude learns, see [what Claude remembers(opens in new tab)](https://claude.com/docs/claude-tag/users/memory).*

### Memory[](https://academy.claude.com/courses/introduction-to-claude-tag/refine-claudes-learning-through-feedback)

Claude's memory is a set of notes, called memory notes, that Claude can use in later threads. When Claude learns something that should still apply after the current thread, such as a preference, a convention, who owns what, or a correction, Claude writes a note on its own. Anyone in the channel can also ask Claude to add, correct, or remove a note. There are two kinds of memory notes, channel notes and workspace notes, described below.

- **How to use it:** `@Claude remember for this channel: …` for things that matter, such as corrections, preferences, and the reason behind a decision. Corrections are valuable feedback that helps Claude's work in this channel improve over time.
- **Channel notes:** notes for one channel. Claude uses them in later threads in that channel only. Every public and private channel has its own, and a DM has its own notes for you alone.
- **Workspace notes:** notes for the whole workspace, such as an organization-wide naming rule. Claude is designed to save there only what is useful in every channel and what no channel would mind everyone in the workspace reading. Claude adds them only from public channels and can use them in every channel, private ones included. See [what Claude remembers(opens in new tab)](https://claude.com/docs/claude-tag/users/memory).

Diagram: a DM, a private channel and a public channel each have their own memory notes, which Claude uses only there. From a public channel Claude can also add workspace notes, which it can use in both channels but not in the DM.

DM

NotesUsed only in this DM

Private channel

NotesUsed only in this channel

Public channel

NotesUsed only in this channel. Claude can add workspace notes from here.

available in

saves toavailable in

Workspace notes

DM

NotesUsed only in this DM

Private channel

NotesUsed only in this channel

Public channel

NotesUsed only in this channel. Claude can add workspace notes from here.

available in

saves toavailable in

Workspace notes

### How to keep memory useful over time[](https://academy.claude.com/courses/introduction-to-claude-tag/refine-claudes-learning-through-feedback)

Claude keeps adding notes as it works, so notes can go out of date as your organization changes. At any time, you can ask Claude to show, correct, or update them:

- To [see what it has picked up(opens in new tab)](https://claude.com/docs/claude-tag/users/memory): `@Claude what do you remember about this channel?`
- If something is wrong, correct it: `@Claude remember for this channel: [corrected version]`
- If something is stale, prune it: `@Claude that’s outdated, forget the entry about [topic].`

Owners of your Claude organization can also [view, edit, and delete(opens in new tab)](https://claude.com/docs/claude-tag/users/memory) a channel's notes and the workspace notes in Claude Tag's admin settings on claude.ai.

Film: in a public channel, a correction given in a thread fixes that thread, and asking Claude to remember it for the channel saves it to channel notes, which Claude reuses in a later thread.

#analyticsPublic channel

SPD

Replay

S

Sam@Claude how many active customers did we have last week?

Claude412 active customers, counting any account with a login last week.

P

PriyaActive means at least one paid seat used that week, not a login. That makes it 287.

ClaudeCorrected: 287 active customers.

A correction in the thread fixes this thread

P

Priya@Claude remember for this channel: an active customer has used at least one paid seat that week.

ClaudeSaved to this channel’s notes.

Channel notes · #analytics

- Active customer: at least one paid seat used that week.

Saved for the channel, for everyone here

Two weeks later · #analytics, a new thread

D

Dana@Claude active customers this month, by region?

ClaudeUsing the definition saved for #analytics (at least one paid seat used): 301 this month.

EMEA 118 · AMER 142 · APAC 41

Reused here: channel notes carry to every later thread

Replay

### Channel instructions[](https://academy.claude.com/courses/introduction-to-claude-tag/refine-claudes-learning-through-feedback)

Channel instructions are the rules a person writes for the channel. Claude reads them in every new thread, and they outrank memory. They are guidance Claude follows closely, not a hard lock: for anything that must never happen, use a setting or an access control rather than a sentence.

- **Good uses:** the channel's purpose; what to pick up without being tagged; tone and length; which sources to answer from; where to file things.
- **How to use them:** select the [Configure link(opens in new tab)](https://claude.com/docs/claude-tag/users/good-habits) under any Claude reply to open the channel's settings page. By default, anyone in the channel who is a member of your Claude organization can edit the instructions and the [**Respond automatically**(opens in new tab)](https://claude.com/docs/claude-tag/users/when-claude-responds) setting on that page. The Respond automatically setting controls whether Claude replies without being tagged. An admin can [make the page read-only for members(opens in new tab)](https://claude.com/docs/claude-tag/admins/attach-to-scope). Connections are listed on the page too, but only admins and [channel managers(opens in new tab)](https://claude.com/docs/claude-tag/admins/restrict-access) can add them. If something you need is locked, ask whoever manages Claude Tag for your channel. Instruction edits apply to new threads, so test in a fresh one.
- **For more:** see [how to set channel instructions(opens in new tab)](https://claude.com/docs/claude-tag/users/good-habits).

You will see the whole page, with what sits beside the instructions, in [lesson 10(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag/expand-what-claude-owns).

Example channel instructions for a bug triaging channel:

```
This channel triages customer bug reports for the billing service.
When a new message contains an error ID, start a thread:
- look the error up in the monitoring tool
- link the dashboard
- propose an owner
Otherwise stay quiet unless tagged.
Keep replies under six lines; link to logs rather than pasting them.
File confirmed bugs in the tracker with the label from-chat.
Investigation is read-only; never touch production.
```



**Memory can hold a rule too; it just [holds it more loosely(opens in new tab)](https://claude.com/docs/claude-tag/users/memory) than instructions do.** Some feedback, like formatting and voice rules, can live in either place. To try a rule out quickly, tell Claude "keep replies under six lines" in the channel: it saves it to memory and follows it.

### To recap[](https://academy.claude.com/courses/introduction-to-claude-tag/refine-claudes-learning-through-feedback)

**Memory** holds what Claude learns as it goes and the rules you are trying out. **Channel instructions** hold the rules that have proven themselves and must apply in every thread. When a rule you tried in memory has settled, move it to the channel's instructions. If you don't have edit access to the instructions, ask whoever manages Claude Tag for the channel to promote it.



Check your own setup

Asking `@Claude what do you remember here?` in the channel shows the memory. Opening the channel's settings shows whether you can edit the instructions.

## Improving Claude's results[](https://academy.claude.com/courses/introduction-to-claude-tag/refine-claudes-learning-through-feedback)

Now that you know how memory and instructions work, when Claude's results are not what you expected you can usually spot the cause, and each cause has a fix:

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">If you notice</th><th class="border-b border-strong p-sm text-left font-medium">Likely cause</th><th class="border-b border-strong p-sm text-left font-medium">What to do</th></tr></thead><tbody><tr><td class="border-b p-sm">Replies feel thin or generic</td><td class="border-b p-sm">Claude lacks access to the tools your work lives in</td><td class="border-b p-sm">Ask whoever manages Claude Tag for the channel to <a aria-describedby="_R_2pj76dj95kq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://claude.com/docs/claude-tag/admins/add-connections" rel="noopener" target="_blank">connect them to this channel<span class="sr-only" hidden="" id="_R_2pj76dj95kq_">(opens in new tab)</span></a>. Your own connectors can cover your requests, where it’s available to your organization.</td></tr><tr><td class="border-b p-sm">Claude answers things it should leave alone</td><td class="border-b p-sm">Claude lacks clarity on its job or role in this channel</td><td class="border-b p-sm">Give Claude a job in <a aria-describedby="_R_2qj76dj95kq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://claude.com/docs/claude-tag/users/good-habits" rel="noopener" target="_blank">channel instructions<span class="sr-only" hidden="" id="_R_2qj76dj95kq_">(opens in new tab)</span></a></td></tr><tr><td class="border-b p-sm">The same correction keeps coming up</td><td class="border-b p-sm">It was said once in a thread, without saying it was for the channel going forward</td><td class="border-b p-sm">Say “<a aria-describedby="_R_2rj76dj95kq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://claude.com/docs/claude-tag/users/memory" rel="noopener" target="_blank">remember for this channel<span class="sr-only" hidden="" id="_R_2rj76dj95kq_">(opens in new tab)</span></a>”</td></tr><tr><td class="border-b p-sm">Claude doesn’t respond in this channel</td><td class="border-b p-sm">It is not turned on for this channel</td><td class="border-b p-sm">Ask whoever manages Claude Tag to turn it on here (<a aria-describedby="_R_2sj76dj95kq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://claude.com/docs/claude-tag/users/when-claude-responds" rel="noopener" target="_blank">when Claude responds<span class="sr-only" hidden="" id="_R_2sj76dj95kq_">(opens in new tab)</span></a>)</td></tr></tbody></table>

## Practice[](https://academy.claude.com/courses/introduction-to-claude-tag/refine-claudes-learning-through-feedback)

Simulation: after Claude writes a call brief in a mock Slack channel, tell it what to do differently, then see the next morning what it saved to the channel's notes and what applied once. You can add the saved reply style to channel instructions.

Practice tailoring Claude’s response to a request by responding in the thread, and see how Claude uses memory to apply the improvements next time.

#call-prep

Today

M

Marcus1:10 PM

@Claude prep me for the Acme renewal call at 2

Claude1:11 PM

Here’s your prep for the Acme renewal call at 2:00.**Account.** Acme Logistics, customer since 2023, $84k ARR, renewal closes Sep 30. They expanded from 40 to 65 seats in March.**People.** Rosa Ortiz (RevOps) is the champion; a new CFO, Martin Hale, joined in July and has not met us.**Usage.** Up 22% quarter over quarter, strongest in the routing module. Two support escalations in August, both resolved within SLA.**History.** In June they floated a 2-year term for a discount; we sent pricing on the 18th and have not heard back.…5 more lines · talking points, history, open items (the blocker is last)

 Channel notes

- Nothing saved yet

What Claude saved for #call-prep. To see it in Slack, ask “what do you remember here?” To remove one, say “forget …”.

Pick something to tell Claude

@Claude shorter, please@Claude remember for responses in this channel, keep replies in a casual tone, under six lines, as bullets with the blocker in bold@Claude when you prep a brief here, also check #legal-review for open redlines@Claude no need to reply when someone just says thanks in here

Next morning 

## Try it[](https://academy.claude.com/courses/introduction-to-claude-tag/refine-claudes-learning-through-feedback)

### Save a pattern and see how it shapes Claude's work

In your workspace · 5 minutes

1. Ask `@Claude what do you remember about this channel?` to see what it has already learned.
2. Pick one task your team does regularly. Work with Claude on it and notice where its approach doesn't match how your team actually thinks.
3. Name the principle it missed: "We always check what we shipped before recommending something new." "We prioritize by impact to retention, not just effort."
4. Save it to memory: `@Claude remember for this channel: [pattern]`.
5. Give Claude similar work again in a new thread. If the change doesn't land right, update the memory or try a different way of stating it.

**Done when:** you've added something to memory and watched how Claude's next answers shift.

## Before you move on[](https://academy.claude.com/courses/introduction-to-claude-tag/refine-claudes-learning-through-feedback)

**Key takeaway:** say it in the channel; promote what must hold every time into instructions.

**After practicing:** You will have saved one correction to the channel's notes and seen it show up in Claude's next answer, and you will know whether you can edit this channel's instructions.

Was this helpful?
