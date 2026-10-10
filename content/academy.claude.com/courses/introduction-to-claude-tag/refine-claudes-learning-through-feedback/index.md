Lesson 6 of 11 · Introduction to Claude TagRefine Claude's work through memory and instructions

# Refine Claude's work through memory and instructions

Lesson 610 min

In this lessonBy the end, you’ll be able to

- Save corrections so Claude learns what matters to your team
- Choose between memory and instructions by how firmly a rule should hold
- Check and correct a channel's notes over time

Sign in to save your progressYou can keep reading without an account, but completed lessons won’t be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fintroduction-to-claude-tag%2Frefine-claudes-learning-through-feedback)

## How Claude learns, and how to give feedback[](https://academy.claude.com/courses/introduction-to-claude-tag/refine-claudes-learning-through-feedback)

When you correct Claude or tell it how your team works, you usually want that to apply next time too, not only in the thread you are in. Claude Tag has two places for things that should last:

- **Memory:** notes Claude writes down about the channel and your work. You can also add to them by telling Claude in a message.
- **Channel instructions:** rules a person types into the channel's settings page. Claude follows them in every thread.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium"></th><th class="border-b border-strong p-sm text-left font-medium">Memory</th><th class="border-b border-strong p-sm text-left font-medium">Channel instructions</th></tr></thead><tbody><tr><td class="border-b p-sm"><strong>What it is</strong></td><td class="border-b p-sm">Notes Claude keeps about the channel</td><td class="border-b p-sm">Rules a person writes for the channel</td></tr><tr><td class="border-b p-sm"><strong>How you change it</strong></td><td class="border-b p-sm">Tell Claude in a message</td><td class="border-b p-sm">Edit the channel’s settings page (Configure, under any Claude reply)</td></tr><tr><td class="border-b p-sm"><strong>Use it for</strong></td><td class="border-b p-sm">Things Claude picks up as it works: corrections, preferences, who owns what</td><td class="border-b p-sm">Rules for every thread: the channel’s purpose, tone, when to reply, what never to do</td></tr></tbody></table>

If a note and an instruction disagree, Claude follows the instruction.

*For a deeper dive on what Claude learns, see [what Claude remembers(opens in new tab)](https://claude.com/docs/claude-tag/users/memory).*

### Memory[](https://academy.claude.com/courses/introduction-to-claude-tag/refine-claudes-learning-through-feedback)

Memory is Claude's notes about your channel. When you tell Claude something that should apply next time too, like a correction, a preference, or who owns what, it saves a note. It also saves notes on its own as it works. In later threads, Claude reads these notes before it answers. Anyone in the channel can ask Claude to add, change, or delete a note. Each note is scoped either to one channel or to the whole workspace:

- **To add a note:** `@Claude remember for this channel: …`
- **Channel notes** apply in that channel only. Claude keeps a separate set of notes for each channel. In your DM, Claude also keeps notes, and those are scoped to you and only you can access them.
- **Workspace notes** apply in every channel. Claude saves one only from a public channel, and only for things everyone should know, like a company-wide naming rule. See [what Claude remembers(opens in new tab)](https://claude.com/docs/claude-tag/users/memory).

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
- If something is stale, remove it: `@Claude that’s outdated, forget the entry about [topic].`

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

Channel instructions are rules someone on your team types into the channel's settings page, for example: "This channel handles billing questions. Keep replies short. Never contact customers directly." Claude reads them at the start of every thread. They are guidance Claude follows closely, not a hard lock: for anything that must never happen, use a setting or an access control rather than a sentence.

- **Good uses:** the channel's purpose, what to reply to without being tagged, tone and length, which sources to answer from, where to file things.
- **Where to edit them:** click [Configure(opens in new tab)](https://claude.com/docs/claude-tag/users/good-habits) under any Claude reply. Usually anyone in the channel with a Claude account at your organization can edit them; an admin can [lock the page(opens in new tab)](https://academy.claude.com/tutorials/claude-tag-admin-guide). If it is locked, ask whoever manages Claude Tag for your channel.
- **Also on that page:** the [**Respond automatically**(opens in new tab)](https://claude.com/docs/claude-tag/users/when-claude-responds) setting, which controls whether Claude replies without being tagged ([lesson 7(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag/proactivity-let-claude-reply-without-being-tagged)), and the list of connected tools, which only admins and [channel managers(opens in new tab)](https://academy.claude.com/tutorials/claude-tag-admin-guide) can change.
- Changes apply to new threads, so test in a fresh one.
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

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">If you notice</th><th class="border-b border-strong p-sm text-left font-medium">Likely cause</th><th class="border-b border-strong p-sm text-left font-medium">What to do</th></tr></thead><tbody><tr><td class="border-b p-sm">Replies feel thin or generic</td><td class="border-b p-sm">Claude lacks access to the tools your work lives in</td><td class="border-b p-sm">Ask whoever manages Claude Tag for the channel to <a aria-describedby="_R_b6dspmd35kq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://academy.claude.com/tutorials/claude-tag-admin-guide" rel="noopener" target="_blank">connect them to this channel<span class="sr-only" hidden="" id="_R_b6dspmd35kq_">(opens in new tab)</span></a>. Your own connectors can cover your requests, where it’s available to your organization.</td></tr><tr><td class="border-b p-sm">Claude answers things it should leave alone</td><td class="border-b p-sm">Claude lacks clarity on its job or role in this channel</td><td class="border-b p-sm">Give Claude a job in <a aria-describedby="_R_badspmd35kq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://claude.com/docs/claude-tag/users/good-habits" rel="noopener" target="_blank">channel instructions<span class="sr-only" hidden="" id="_R_badspmd35kq_">(opens in new tab)</span></a></td></tr><tr><td class="border-b p-sm">The same correction keeps coming up</td><td class="border-b p-sm">It was said once in a thread, without saying it was for the channel going forward</td><td class="border-b p-sm">Say “<a aria-describedby="_R_bedspmd35kq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://claude.com/docs/claude-tag/users/memory" rel="noopener" target="_blank">remember for this channel<span class="sr-only" hidden="" id="_R_bedspmd35kq_">(opens in new tab)</span></a>”</td></tr><tr><td class="border-b p-sm">Claude doesn’t respond in this channel</td><td class="border-b p-sm">It is not turned on for this channel</td><td class="border-b p-sm">Ask whoever manages Claude Tag to turn it on here (<a aria-describedby="_R_bidspmd35kq_" class="cds-reset cds-text-link cds-text-link-underline inline cursor-pointer text-primary" data-cds="TextLink" href="https://claude.com/docs/claude-tag/users/when-claude-responds" rel="noopener" target="_blank">when Claude responds<span class="sr-only" hidden="" id="_R_bidspmd35kq_">(opens in new tab)</span></a>)</td></tr></tbody></table>

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
