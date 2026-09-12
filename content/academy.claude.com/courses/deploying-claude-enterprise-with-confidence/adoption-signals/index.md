Lesson 12 of 14 · Deploying Claude Enterprise with Confidence: The five decisions that shape your rolloutAdoption signals

# Adoption signals

Lesson 127 min

In this lessonBy the end, you’ll be able to

- Read and interpret adoption signals your dashboard shows, and determine what each can and can’t tell you
- Interpret each signal by asking how many members use Claude and how much they rely on it
- Set the pace goal you’ll measure your rollout against

Sign in to save your progressYou can keep reading without an account, but completed lessons won't be saved.

Not now[Sign in](https://academy.claude.com/login?returnTo=%2Fcourses%2Fdeploying-claude-enterprise-with-confidence%2Fadoption-signals)

This is still the fifth of the five decisions, Visibility. You’ve set up the record of what happened. This lesson covers the other question visibility can help to answer: Is the rollout meeting its objective? Your analytics (the dashboard, Analytics chat, and the Analytics API covered in Lesson 10) report what members actually do with Claude, and you read those numbers against your rollout objective to see whether adoption is spreading or stalling in a few groups.

Breadth and depth measure adoption: whether Claude usage is taking hold and how much members rely on it. They are leading indicators you act on that tell you Claude is being used, not what that use produced. To see what the usage is delivering, pair these signals with the outcomes of the work itself. A high count can be one enthusiastic team, and a low one can be a team that was never properly enabled. Read these as diagnostics rather than proofs — a low number tells you where to look, not what you’ll find.

## The common signals, and how to read them[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/adoption-signals)

The dashboard shows more numbers than any one lesson could list, so this lesson focuses on the signals you’ll meet most often and ways to consider interpreting them. Each signal here is one of two kinds: breadth or depth. When a number is low, ask which kind it is, then look where that kind of problem lives.

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium"><strong>Signal</strong></th><th class="border-b border-strong p-sm text-left font-medium"><strong>What it tells you</strong></th><th class="border-b border-strong p-sm text-left font-medium"><strong>When it’s low, look at</strong></th></tr></thead><tbody><tr><td class="border-b p-sm"><strong>Active members, by group (breadth)</strong></td><td class="border-b p-sm">Whether adoption is spread across your groups or concentrated in one</td><td class="border-b p-sm">Access and awareness: does that group have Claude, and has it been properly enabled?</td></tr><tr><td class="border-b p-sm"><strong>Members returning week over week (breadth)</strong></td><td class="border-b p-sm">Whether members come back or try Claude once and stop</td><td class="border-b p-sm">Onboarding and expectations: what did the first session promise?</td></tr><tr><td class="border-b p-sm"><strong>Chats per active member (depth)</strong></td><td class="border-b p-sm">How much each active member relies on Claude</td><td class="border-b p-sm">Fit: do this group’s surfaces and connectors match their workflows?</td></tr><tr><td class="border-b p-sm"><strong>Skills and/or projects in use (depth)</strong></td><td class="border-b p-sm">Whether work is compounding into workflows others reuse</td><td class="border-b p-sm">Your governance posture: is it letting transformative work spread?</td></tr><tr><td class="border-b p-sm"><strong>Connector use (depth)</strong></td><td class="border-b p-sm">Which of your tools matter and how much Claude acts inside them</td><td class="border-b p-sm">Your connector scope from Lesson 7: does it allow connectors to create value in members’ workflows?</td></tr></tbody></table>

For the group-by-group view this lesson relies on, use the group breakdowns from Lesson 10 (the Analytics API by group, or the spend CSV joined to your group mapping). None of these numbers are a target to manage; they’re diagnostics. The month you turn a diagnostic into a quota, members optimize for the number instead of the work.

The interactive widget below is a way to think a number through: it hands you a dashboard shape and traces it to every cause that could produce it — usually more than one — to see what it can tell you, and what it can’t.

**Pick a shape** a dashboard hands you — each is a breadth or a depth signal. The map draws it to every cause that could produce it — usually more than one.

The shape on the dashboardPick one

Flat and low from day oneBreadthSpike, then decayBreadthHigh total, one team carrying itBreadthMany first sessions, few secondBreadthHeavy use, but only in a few membersDepthSteady climb everywhereBreadth + depth

- Access

  they can’t reach it
- Awareness

  they were never told, or never enabled
- Fit

  the surfaces and connectors don’t match their work
- Trust

  unsure it works, or unsure it’s allowed
- Healthy

  nothing to chase

Illustrative, not comprehensive: shapes and causes are examples; yours depend on your own analyses and norms.

## Pluto’s adoption read[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/adoption-signals)

Pluto’s pace goal: every unit returning weekly by quarter’s end, read monthly on active members by group. Four weeks in, Pluto’s dashboard shows most groups active and climbing, but Ops flat at about ten percent of its members active. Flat Ops is a breadth signal, so Pluto looks at access and awareness rather than assuming the rollout failed, and asks the Ops lead. The cause is simple: most of Ops is field staff who haven’t had their team enablement session yet because of competing priorities. They either don’t know Claude exists or haven’t been trained to use it. The fix is usually enablement, not a settings change: a replay of the company workshop or a targeted session. Same count, and the interpretation would have been the opposite for a team that once had access and stopped coming back.

## Set up resources[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/adoption-signals)

The signals in this lesson live in three distinct locations; these articles cover reading each.

- **[View usage analytics for Team and Enterprise plans(opens in new tab)](https://support.claude.com/en/articles/12883420-view-usage-analytics-for-team-and-enterprise-plans)**: the adoption and usage read the admin dashboard gives you.
- **[Analytics APIs (Claude Platform Docs)(opens in new tab)](https://platform.claude.com/docs/en/manage-claude/analytics-api)**: pulling the same signals into your own reporting.
- **[Claude Enterprise consumption guide(opens in new tab)](https://support.claude.com/en/articles/14782391-claude-enterprise-consumption-guide)**: Analytics chat, and how to read the numbers behind the signals.

## Lesson activity[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/adoption-signals)

In Lesson 1 you wrote your rollout objective, which included what success looks like and any constraints. You may not be able to measure adoption yet if your members haven’t been given access to Claude, but this is the moment to decide *what* you’ll measure.

- Set the pace goal that will tell you, month by month, whether you’re on the way there: which groups should be active by when, and what breadth and depth would count as on track versus behind.
- Make the pace goal concrete against a signal you’ll actually be able to read. “Every granted group returning weekly within eight weeks” is a pace; “good adoption soon” is a wish.
- Choose one group you’d most expect to lag, and decide now what a flat number there would prompt you to do first.
- Finalize these checkpoints with your stakeholders rather than alone, since unit leaders own what their teams can absorb, and treat this as the draft you bring them.
- Once members are in and the dashboard has signal, come back and read it against this goal.

→ Record this in the work-along companion, section Lesson 12.

## Downloads

- 

  ### Work-along companion (Word)

  The editable Word version of the rollout plan you fill in lesson by lesson.

  [Download](https://academy.claude.com/assets/v1/work-along-companion-bk4suxux.docx)
- 

  ### Work-along companion (PDF)

  The same rollout plan as a fillable PDF.

  [Download](https://academy.claude.com/assets/v1/work-along-companion-c5lkvz0n.pdf)

## What’s next[](https://academy.claude.com/courses/deploying-claude-enterprise-with-confidence/adoption-signals)

The next module, Your rollout, pulls your five decisions together on one map: your five answers in a single table beside Pluto’s, the way one decision cascades into the others, and the four settings worth confirming in one place before you go live.

Was this helpful?
