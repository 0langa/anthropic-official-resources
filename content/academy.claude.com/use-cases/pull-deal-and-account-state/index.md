# Answer deal and account questions from the CRM

Ask where a deal stands and Claude Tag answers in the thread from the CRM record and from what the team has said in the channel.

10 minSalesClaude Tag

![](https://academy.claude.com/assets/v1/thumbnail.light-804tz7j0.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-lgieyu67.png)

A team working on a deal can ask for its status in their own channel and get an answer built from the CRM record and from what the team has said about the account there.

With the CRM connected to the channel, Claude Tag answers in the thread, so **[everyone on the account reads the same answer(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)**. The answer says which part came from the record and which from the conversation. With the same connection, Claude can brief you before a call, or post a pipeline review every Monday as a **[routine(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity)**.

## Set up[](https://academy.claude.com/use-cases/pull-deal-and-account-state)



**Ask in the right spot**

#

[The account or deal channel(opens in new tab)](https://claude.com/docs/claude-tag/concepts/how-it-works)

Public or private, with the CRM connection. Ask as a new message, or in the thread where the deal is being discussed.



**Give Claude the right tools**

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2300A1E0'%20d='M10.01%205.56a4.18%204.18%200%200%201%203.02-1.3c1.58%200%202.96.88%203.7%202.19a5.12%205.12%200%200%201%202.1-.45%205.18%205.18%200%200%201%200%2010.36c-.37%200-.73-.04-1.07-.11a3.77%203.77%200%200%201-4.94%201.55%204.3%204.3%200%200%201-7.99-.2%203.98%203.98%200%200%201-.82.09%203.97%203.97%200%200%201-1.96-7.43%204.57%204.57%200%200%201%207.96-4.7'/%3e%3c/svg%3e)

Salesforce or HubSpotRequired

Connected to the channel, read-only, so Claude can answer from the current record.



**Make sure Claude is in the channel:** `/invite @Claude`.

**Check what tools are connected:** `@Claude what can you access from this channel?`

For help, ask your admin or visit our [troubleshooting docs(opens in new tab)](https://claude.com/docs/claude-tag/users/troubleshooting).

## What to ask Claude, and what it does[](https://academy.claude.com/use-cases/pull-deal-and-account-state)

Ask in the account's channel, each time you have a question about that account or one of its deals. Name the information you want, such as recent activity, open items or where the deal stands.

#acme-accountPYReplay

P

PriyaWed 11:02Dana, can you approve the Acme discount? Once it is approved I will send Jordan the revised contract for final review.

Y

YouCopy

@Claude what's the state of the Acme renewal? Last activity, open items, and who owns the next step.

👀1

ClaudeApp

✱Read the Acme renewal record in Salesforce

○Read what this channel has said about Acme

○Sort it into last activity, open items and next step

○Post the answer in this thread

todos as of just now

ClaudeApp

Acme renewal Acme Corp FY27 renewal:

**Last activity:**

Priya met with Jordan, Acme's procurement lead, on Tuesday to go over the renewal timeline. Salesforce note, Tue Acme wants to sign by the end of the month, but its legal team is still reviewing the contract. same note

**Open items:**

- Acme's legal sign-off is pending. Salesforce
- Priya has asked Dana to approve the discount and has not heard back. Priya's message
- The team also owes Acme confirmation of the service levels for the add-on features they requested. Salesforce open task

**Next step:**

Dana needs to approve the discount this week. After she does, Priya will send the revised contract to Jordan for final review. Priya's message

Nothing is logged in Salesforce after Tuesday. A call or email since then is in this answer only if someone mentioned it in this channel.

This is an illustrative example of what Claude Tag can do.

A call from yesterday may not be logged yet, so check the last activity in the record before you pass the answer on.

## Follow ups[](https://academy.claude.com/use-cases/pull-deal-and-account-state)

Send the last three follow-ups below in your team's sales channel, which has the same CRM connection.

### Correct a detail in the answer, and have Claude remember it for the channel[](https://academy.claude.com/use-cases/pull-deal-and-account-state)

Claude revises its answer when someone corrects a detail in the thread, such as Jordan's role. If the same mistake could happen again, ask it to remember the correction for the channel ([channel memory(opens in new tab)](https://claude.com/docs/claude-tag/users/memory)):

#acme-accountPY

Y

YouCopy

@Claude update your memory for this channel so this doesn't happen again.

### Get a pipeline digest on a schedule[](https://academy.claude.com/use-cases/pull-deal-and-account-state)

Claude can post a digest from the CRM every week ([routine(opens in new tab)](https://claude.com/docs/claude-tag/users/proactivity)). Anyone in the channel can later list or disable it by name.

#sales-teamY

Y

YouCopy

@Claude every Monday at 9am Eastern, post a pipeline digest: deals that moved stage last week, deals stalled more than two weeks, and renewals due in the next 30 days.

### Ask which deals are stuck[](https://academy.claude.com/use-cases/pull-deal-and-account-state)

Claude can query the CRM for deals at a stage and how long each has been there.

#sales-teamY

Y

YouCopy

@Claude which deals are stuck in stage 3, and how long has each been there?

### Get a brief before a call[](https://academy.claude.com/use-cases/pull-deal-and-account-state)

Claude can combine the CRM record with what the team has said in the channel into one brief, posted in a thread where you can ask follow-up questions.

#sales-teamY

Y

YouCopy

@Claude brief me on Initech before my 2pm: account history, recent activity, and anything discussed in this channel lately.

## Tips[](https://academy.claude.com/use-cases/pull-deal-and-account-state)

### Use the same names your tools use[](https://academy.claude.com/use-cases/pull-deal-and-account-state)

Claude matches the stage and field names your CRM uses. If yours calls stage 3 "Proposal", write "Proposal".

### If Claude can't find a record, check if the tool is correctly connected to the channel[](https://academy.claude.com/use-cases/pull-deal-and-account-state)

Claude sees only the CRM data that the login your admin connected can see. If a customer you expect is missing, ask `@Claude what can you access from this channel?`, then ask your admin to check that [connection(opens in new tab)](https://claude.com/docs/claude-tag/admins/add-connections).

## Related resources[](https://academy.claude.com/use-cases/pull-deal-and-account-state)

- Learn more in the [Introduction to Claude Tag(opens in new tab)](https://academy.claude.com/courses/introduction-to-claude-tag) course.
- [Get started with Claude Tag(opens in new tab)](https://claude.com/docs/claude-tag/users/getting-started): add @Claude to a channel and see what it can read there.
- [Pull deal and account state(opens in new tab)](https://claude.com/docs/claude-tag/users/use-cases/pull-deal-state): the Claude Tag docs page this use case is based on.

Was this helpful?
