# Create meeting notes and tasks from a call transcript

With proactive replies on in the project channel, Claude Tag reads each transcript the call recorder posts, replies with the decisions and action items, files the tickets and publishes the notes as a page.

10 minOperationsClaude Tag

![](https://academy.claude.com/assets/v1/thumbnail.light-hd84bxm1.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-fxufp05i.png)

After a project or customer call, someone usually writes up the decisions and action items and copies them into the tracker.

With Claude Tag, connect the tracker to the project channel where your call recorder posts transcripts. Then give Claude Tag the job as a **[standing responsibility(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity)**. With **[proactive replies(opens in new tab)](https://claude.com/docs/claude-tag/users/when-claude-responds)** on for the channel, Claude picks up each transcript post that tags it, so no one on the team has to tag it, and posts the decisions and action items in its thread. It files the tickets and publishes **[the notes as a page(opens in new tab)](https://claude.com/docs/claude-tag/users/use-cases/create-artifacts)** there. From there, anyone in the thread can follow up to adjust Claude's output, like to correct an owner or date.

## Set up[](https://academy.claude.com/use-cases/meeting-notes-and-filed-tasks-from-a-call-transcript)

Checklist: what to set up before Claude Tag turns call transcripts into notes and tickets: the project channel the recorder posts to, a call recorder and a tracker, both required, and Respond automatically turned on.



**Ask in the right spot**

#

[The project channel(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)

The channel your call recorder posts transcripts into. Post the instruction in the channel itself rather than in a thread.



**Give Claude the right tools**



Zoom, Gong or FathomRequired

Posting each call's transcript to the channel. For Claude to open the transcript, your admin connects the recorder, or the document tool it saves to, to this channel.

Include `@Claude` in the recorder's message template so each transcript post reaches Claude without anyone tagging it.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%235E6AD2'%20d='M1.225%2061.523c-.222-.949.908-1.546%201.597-.857l36.512%2036.512c.689.689.092%201.819-.857%201.597a50.06%2050.06%200%200%201-37.252-37.252Zm-1.22-13.59a.98.98%200%200%200%20.283.724l50.055%2050.055a.98.98%200%200%200%20.724.283%2049.9%2049.9%200%200%200%208.636-1.518.976.976%200%200%200%20.462-1.647L2.17%2038.835a.976.976%200%200%200-1.647.462%2049.9%2049.9%200%200%200-1.518%208.636Zm4.194-17.443a.988.988%200%200%200%20.184%201.152l63.975%2063.975a.988.988%200%200%200%201.152.184%2050.4%2050.4%200%200%200%206.08-3.495.993.993%200%200%200%20.161-1.53L9.224%2024.249a.993.993%200%200%200-1.53.161%2050.4%2050.4%200%200%200-3.495%206.08Zm9.723-13.067a.99.99%200%200%201-.026-1.377C23.068%206.08%2036.765-.002%2051.888-.002c27.59%200%2049.957%2022.367%2049.957%2049.957%200%2015.123-6.082%2028.82-16.048%2038.013a.99.99%200%200%201-1.377-.026z'/%3e%3c/svg%3e)

Linear, Jira or AsanaRequired

Connected with write access, so Claude can file and reassign the tickets.



**Make sure Claude has the right settings**

[Respond automatically(opens in new tab)](https://claude.com/docs/claude-tag/users/when-claude-responds) is on

Claude then acts on transcript posts without an @-mention from a person.



**Make sure Claude is in the channel:** `/invite @Claude`.

**Check what tools are connected:** `@Claude what can you access from this channel?`

For help, ask your admin or visit our [troubleshooting docs(opens in new tab)](https://claude.com/docs/claude-tag/users/troubleshooting).

## What to ask Claude, and what it does[](https://academy.claude.com/use-cases/meeting-notes-and-filed-tasks-from-a-call-transcript)

Send this once in your project channel. From then on, each time the recorder posts a transcript, Claude reads it and replies in that post's thread. Ask Claude to file tickets only if its tracker connection in this channel can create them, and name the board if there is more than one.

The recorder posted the transcript below the following Wednesday, and nobody tagged Claude:

Film: a call-recorder post automatically tags Claude in a project channel, and Claude works through a visible plan before replying with decisions, owners, dates, and filed tickets. It shows how standing, proactive work triggers without anyone asking, cites its source, and produces correctable artifacts.

#alder-rolloutCYReplay

Y

Yousent once, last weekCopy

@Claude remember for this channel: when a transcript lands, post notes and action items, and file the tickets.

Wednesday 2:43 PM

C

Callnote2:43 PMTranscript · Alder rollout sync · Wed 2:00–2:40 PM · 40 min · Nora, Sam, Priya + Ines Duarte (Alder) · @Claude

👀1

ClaudeApp

✱Open the transcript Callnote posted

○Pull out the decisions, and the action items with owners and dates

○File a ticket per action item on the Alder rollout board

○Publish the notes as a page and post both here

todos as of just now

ClaudeApp2:46 PM

Here are the notes from the Alder sync, with the decisions and the action items, each with an owner and a date. the transcript The tickets are filed on the rollout board, and the notes are published as a page for the team.

**Decided**

- SSO at launch is SAML only.
- The export cap goes up to 50,000 rows.
- Go-live is Tuesday, October 6.

**Action items**

- Send the SSO setup guide to Ines. Sam, by Friday. FER-2231
- Raise the export cap in staging and test it. Sam, by Friday. FER-2232
- Send the seat-count quote for the expansion. Nora, by Thursday. FER-2233
- Draft the go-live note for Alder's finance team. Priya, by Monday. FER-2234

The notes list one open question, because nobody on the call said who signs off the go-live note.

Owners and dates are as stated on the call, and nothing has been sent to Ines. If an owner or a date is wrong, say so here and I'll fix the ticket and the notes.



Alder rollout sync · notes and actions

hosted on claude.ai · anyone in this channel can open it · updated when you ask in this thread

- Decided (3)
- Action items (4)
- Open questions (1)



4 tickets filed · Alder rollout boardCreated

Linear · created under Claude's name · write granted for this channel

This is an illustrative example of what Claude Tag can do.

The recorder includes @Claude in each transcript post. With Respond automatically on, Claude replied without a person tagging it. The tickets are under Claude's name, and nothing was sent to the customer.

Before anyone starts on a ticket, read the action items against the transcript, and correct an owner or a date in the thread.

## Follow ups[](https://academy.claude.com/use-cases/meeting-notes-and-filed-tasks-from-a-call-transcript)

### Correct an owner in the thread[](https://academy.claude.com/use-cases/meeting-notes-and-filed-tasks-from-a-call-transcript)

Anyone in the thread can correct Claude with a plain reply, and Claude updates the ticket and the page to match ([reply in the thread to steer(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)). Sam, who was on the call, replies under the notes:

Simulation: a single message to Claude after it turned a call into notes and tickets, sometimes with Claude's reply. It corrects an action item's owner, asks for a decision doc or another ticket, or limits Claude to replying when tagged.

#alder-rolloutSY

S

Sam

One fix: the staging export test is Priya's, she owns that environment. The guide is mine.

ClaudeApp2:53 PM

Reassigned FER-2232 to Priya, due Friday still, and updated the notes to match.



FER-2232 reassigned to Priya

in Linear · the notes page updated to match

### Ask for a decision doc instead[](https://academy.claude.com/use-cases/meeting-notes-and-filed-tasks-from-a-call-transcript)

Claude writes whichever document you name from the same thread, so when a call settled one question, ask for a decision doc instead of notes ([turn threads into docs(opens in new tab)](https://claude.com/docs/claude-tag/users/use-cases/create-artifacts)).

Simulation: a single message to Claude after it turned a call into notes and tickets, sometimes with Claude's reply. It corrects an action item's owner, asks for a decision doc or another ticket, or limits Claude to replying when tagged.

#alder-rolloutY

Y

YouCopy

Turn this thread into a one-page decision doc: what we decided, the options we rejected, and why.

### File one more ticket from the thread[](https://academy.claude.com/use-cases/meeting-notes-and-filed-tasks-from-a-call-transcript)

When someone in the thread raises a new task and names an owner, ask Claude to file it. Claude posts the ticket link in the thread.

Simulation: a single message to Claude after it turned a call into notes and tickets, sometimes with Claude's reply. It corrects an action item's owner, asks for a decision doc or another ticket, or limits Claude to replying when tagged.

#alder-rolloutY

Y

YouCopy

File this thread as a ticket, assign it to the owner we discussed above, and post the link here.

### Have Claude reply only when tagged[](https://academy.claude.com/use-cases/meeting-notes-and-filed-tasks-from-a-call-transcript)

With Respond automatically off, Claude replies only when a person tags it, and posts from the recorder are ignored until someone in the channel turns it back on ([quiet the whole channel(opens in new tab)](https://claude.com/docs/claude-tag/users/when-claude-responds)).

Simulation: a single message to Claude after it turned a call into notes and tickets, sometimes with Claude's reply. It corrects an action item's owner, asks for a decision doc or another ticket, or limits Claude to replying when tagged.

#alder-rolloutY

Y

YouCopy

@Claude only respond in this channel when someone @-mentions you directly.

## Related resources[](https://academy.claude.com/use-cases/meeting-notes-and-filed-tasks-from-a-call-transcript)

- Learn more in the [Introduction to Claude Tag(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag) course.
- [Get started with Claude Tag(opens in new tab)](https://claude.com/docs/claude-tag/users/getting-started): add @Claude to a channel and see what it can read there.
- [Turn threads into docs and tickets(opens in new tab)](https://claude.com/docs/claude-tag/users/use-cases/create-artifacts): the Claude Tag docs on documents, tickets and hosted pages from a thread.

Was this helpful?
