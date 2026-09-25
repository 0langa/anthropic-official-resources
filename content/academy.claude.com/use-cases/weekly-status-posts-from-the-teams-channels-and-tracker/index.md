# Post weekly status updates from the team's channels and tracker

Set up a routine in the team's channel and Claude Tag posts the weekly status every Friday from the channel's threads and the connected tracker, for the team to correct and the lead to forward.

10 minOperationsClaude Tag

![](https://academy.claude.com/assets/v1/thumbnail.light-g3dnevga.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-n7t7cmmu.png)

When you need to assemble a weekly status, most of it is already written down somewhere. The decisions are in the week's threads, and the open items are in the tracker. The work is collecting them and checking the threads against the tracker.

With Claude Tag in the team's channel and the tracker connected, set up a **[routine(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity)**. Claude does that gathering on a schedule and posts the draft in the channel. There, **[anyone on the team can reply to correct it(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)** before the project lead forwards it on.

## Set up[](https://academy.claude.com/use-cases/weekly-status-posts-from-the-teams-channels-and-tracker)

Checklist: a two-item setup guide for a weekly status routine, covering where to send the setup message and which tools to connect, a required tracker and optional GitHub, before Claude posts a weekly digest.



**Ask in the right spot**

#

[The team's channel(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)

Send the message that sets up the routine as a new message in the channel, so the digest appears where the team already works.



**Give Claude the right tools**

![](data:image/svg+xml,%3csvg%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%235E6AD2'%20d='M1.225%2061.523c-.222-.949.908-1.546%201.597-.857l36.512%2036.512c.689.689.092%201.819-.857%201.597a50.06%2050.06%200%200%201-37.252-37.252Zm-1.22-13.59a.98.98%200%200%200%20.283.724l50.055%2050.055a.98.98%200%200%200%20.724.283%2049.9%2049.9%200%200%200%208.636-1.518.976.976%200%200%200%20.462-1.647L2.17%2038.835a.976.976%200%200%200-1.647.462%2049.9%2049.9%200%200%200-1.518%208.636Zm4.194-17.443a.988.988%200%200%200%20.184%201.152l63.975%2063.975a.988.988%200%200%200%201.152.184%2050.4%2050.4%200%200%200%206.08-3.495.993.993%200%200%200%20.161-1.53L9.224%2024.249a.993.993%200%200%200-1.53.161%2050.4%2050.4%200%200%200-3.495%206.08Zm9.723-13.067a.99.99%200%200%201-.026-1.377C23.068%206.08%2036.765-.002%2051.888-.002c27.59%200%2049.957%2022.367%2049.957%2049.957%200%2015.123-6.082%2028.82-16.048%2038.013a.99.99%200%200%201-1.377-.026z'/%3e%3c/svg%3e)

Linear or JiraRequired

Connected to the channel, so Claude can check the tickets linked in the channel's threads and the team's plan.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHubOptional

If connected, Claude can list the week's merged pull requests.



**Make sure Claude is in the channel:** `/invite @Claude`.

**Check what tools are connected:** `@Claude what can you access from this channel?`

For help, ask your admin or visit our [troubleshooting docs(opens in new tab)](https://claude.com/docs/claude-tag/users/troubleshooting).

## What to ask Claude, and what it does[](https://academy.claude.com/use-cases/weekly-status-posts-from-the-teams-channels-and-tracker)

Send this once in your team's channel. Every week after that, Claude posts a digest built from the channel's threads and the tickets and pull requests linked in them. Set the day, time zone and sections your team wants. You can add more sources later with another message, such as another channel or the week's merged pull requests.

Film: a mocked channel shows setting up a standing routine with Claude Tag, then Claude's plan ticking through gathering threads and tracker tickets before posting a sourced weekly digest anyone can correct by replying.

#eng-paymentsYReplay

Y

YouCopy

@Claude every Friday at 3pm Eastern, post a digest of this week in this channel: what got decided, what's still open, and anything waiting on someone.

👀1

ClaudeApp

✱Read this week's threads in this channel

○Check the tickets and pull requests linked in them

○Sort the week into decided, still open and waiting on someone

○Post the digest here

todos as of just now

ClaudeAppFriday 3:02 PM

Digest for the week ending Friday, July 17, from this channel's threads and the tickets and pull requests linked in them.

**Decided**

- The saved-card flow goes to 10% of checkouts on Monday behind its flag, as agreed in Tuesday's rollout thread. the rollout thread, Tue Its pull request merged on Thursday. #418
- The EU tax line fix is done. PR #412 merged and PAY-231 is closed. PAY-231
- Dunning emails switch to the new template only after legal review, per Wednesday's thread. Anika, Wed

**Still open**

- Retry-storm alerting, open 6 days. It needs a maintenance window, and none is scheduled yet. Owner: Maya. PAY-244
- Dunning email copy, open 4 days. Legal review has not started. Owner: Anika. PAY-248

**Waiting on someone**

- The load test is waiting on Deven to confirm Tuesday's slot with the infra team. the load-test thread
- The pricing page changes are waiting on Leo's review, requested on Thursday. the pricing page thread

Ticket states are as of 2:55 this afternoon.

This is an illustrative example of what Claude Tag can do.

Claude posts the digest every Friday until someone in the channel changes or pauses the routine.

Before you forward the post, open the ticket behind anything listed as still open and confirm its state.

## Follow ups[](https://academy.claude.com/use-cases/weekly-status-posts-from-the-teams-channels-and-tracker)

### Tailor Claude's response in any specific way you need[](https://academy.claude.com/use-cases/weekly-status-posts-from-the-teams-channels-and-tracker)

Anyone in the channel can reply under the post to correct it or to ask Claude to watch one item, and Claude includes that in the next digest ([reply in the thread to steer(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)). To learn more on effectively applying and managing agents like Claude Tag with your team, visit our [Introduction to Claude Tag(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag) course.

Simulation: a single message to Claude in a channel or thread, sometimes with Claude's reply. It teaches that a standing routine can be adjusted, checked or stopped by describing the change in plain language.

#eng-paymentsMY

M

Marta

Forwarding to Monday's all-hands. Infra gave us Wednesday night for the alerting work and it's on the tracker; @Claude flag it if it slips again.

ClaudeAppFriday 3:10 PM

Added the alerting work to the Friday digest, and set a Thursday check to post here if it hasn't moved by then.

### Add another channel or tool to what the digest reads[](https://academy.claude.com/use-cases/weekly-status-posts-from-the-teams-channels-and-tracker)

Anyone in the channel can change what a routine covers by describing the change, and Claude applies it from the next run ([manage standing work(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity)).

Simulation: a single message to Claude in a channel or thread, sometimes with Claude's reply. It teaches that a standing routine can be adjusted, checked or stopped by describing the change in plain language.

#eng-paymentsY

Y

YouCopy

@Claude for the Friday digest, also read #team-billing, this week's merged PRs in fernwood/payments and the launch tracker, and list what's stuck against the plan with how many days and the owner.

### See the channel's routines[](https://academy.claude.com/use-cases/weekly-status-posts-from-the-teams-channels-and-tracker)

Claude lists a channel's routines when asked, with the day and time it scheduled for each. Check those times to confirm the time zone.

Simulation: a single message to Claude in a channel or thread, sometimes with Claude's reply. It teaches that a standing routine can be adjusted, checked or stopped by describing the change in plain language.

#eng-paymentsY

Y

YouCopy

@Claude what routines do you have set up in this channel?

### Stop the weekly digest[](https://academy.claude.com/use-cases/weekly-status-posts-from-the-teams-channels-and-tracker)

Anyone in the channel can stop a routine by naming it, and one message sets it up again later.

Simulation: a single message to Claude in a channel or thread, sometimes with Claude's reply. It teaches that a standing routine can be adjusted, checked or stopped by describing the change in plain language.

#eng-paymentsY

Y

YouCopy

@Claude disable the Friday digest.

## Related resources[](https://academy.claude.com/use-cases/weekly-status-posts-from-the-teams-channels-and-tracker)

- Learn more in the [Introduction to Claude Tag(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag) course.
- [Get started with Claude Tag(opens in new tab)](https://claude.com/docs/claude-tag/users/getting-started): add @Claude to a channel and see what it can read there.
- [Set up routines(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity): the Claude Tag docs page this use case is based on.

Was this helpful?
