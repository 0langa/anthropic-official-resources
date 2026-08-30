# Legal research

A structured memo with citations, not a list of links.

10 minLegalClaude Cowork

Try in CoworkCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-finygjm8.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-gwhtyq3v.png)

## Legal research

Surfaces the relevant case law and regulatory guidance, then drafts a structured memo with citations.

### Ask in plain English

State the question and the format you need — the skill handles where to look.

/research-memoPersonal skill

Legal / Research-Memos

### Cowork surfaces and reads the authority

Thomson Reuters for primary sources, your prior memos for the format, every proposition cited.

Running /research-memo

Thomson Reuters · pulled 14 relevant authorities

Result

Thomson Reuters · pulled regulatory guidance and secondary sources

Result

iM

iManage · read 3 prior memos for house format

Result

Grouping discussion by authority and weight

Result

Microsoft 365 · wrote research-memo-draft.docx with citations

Result

Created research-memo-2026-05-15.docx

Done

#### Progress

1

Surface relevant authorities

2

Read prior memos for format

3

Draft memo grouped by authority

4

Write memo to folder

#### Legal / Research-Memos

DOCmemo-template-house.docx

DOCprior-memo-unfair-competition.docx

research-question.txt

#### Context

Connectors

Thomson Reuters

Microsoft 365

iMiManage

### A structured memo, every proposition cited

Question presented, short answer, the discussion grouped by authority — in your house format.

Question Presented

Whether a California court is likely to enforce the post-employment non-compete in §7.2 of the Acme employment agreement against a former engineer now resident in Texas.

Short Answer

**No.** California courts will refuse to enforce §7.2 under Bus. & Prof. Code §16600 regardless of the Texas choice-of-law clause. *Edwards v. Arthur Andersen LLP*, 44 Cal. 4th 937 (2008); *Application Grp., Inc. v. Hunter Grp., Inc.*, 61 Cal. App. 4th 881 (1998). The narrow trade-secret exception is unlikely to apply on these facts. See Discussion §II.

Research memo — non-compete enforceability

Document · DOCX · 28 KB · written to Legal / Research-Memos

### Clear the research queue every morning

Questions land in the queue folder; the cited memo is waiting before you open the matter.

Legal / Research-Queue

Scheduled

Research-queue memos

Weekday mornings, runs `/research-memo` on each new question in Legal/Research-Queue and writes the cited memo to the requesting matter folder.

Weekdays at **7 am** — checks Legal/Research-Queue for new questions

A structured memo with citations, not a list of links  
— drafted before the question reaches the matter.

## Set up[](https://academy.claude.com/use-cases/legal-research-memo)

### Try a plugin[](https://academy.claude.com/use-cases/legal-research-memo)

The Litigation Legal plugin is the starting point: its drafting skills, like `/brief-section-drafter`, tag every citation with the research source it came from and flag anything drawn from model knowledge alone as `[verify]`, so you know what to confirm before anyone relies on the memo. Later on this page you'll save the way you run this memo as your own `/research-memo` skill. It's one of twelve practice-area plugins for legal teams; if your admin manages plugins and it's not available yet, skip this, nothing below requires it.



Litigation LegalManages the litigation portfolio — matters, deadlines, holds, demands, outside counsel — and does the work: claim charts (patent and civil), chronologies, depo prep, privilege logs, brief drafting. Adapts to how you work litigation: in-house, firm, or solo.

[Add](https://claude.ai/desktop/customize/plugins/new?marketplace=github.com%2Fanthropics%2Fclaude-for-legal&plugin=litigation-legal)

`/brief-section-drafter`Draft a brief section in house style, consistent with the case theory — every fact cited, every case checked, every argument tied to the theory.

[Run](claude://cowork/new?q=%2Fbrief-section-drafter)

`/chronology`Build or update a chronology from declared document sources and uploads — dated events extracted, de-duped, and tagged by significance per the matter theory.

[Run](claude://cowork/new?q=%2Fchronology)

`/cold-start-interview`House cold-start for the litigation plugin — branches by role (in-house, firm associate, solo) and side (plaintiff, defense, both), captures risk calibration, landscape, and house style, and writes the practice profile.

[Run](claude://cowork/new?q=%2Fcold-start-interview)

Show all 19 skills



First run

Litigation Legal comes from Anthropic's **Claude for Legal** source, which a workspace has to enable once under **Browse Anthropic sources**. On a Team or Enterprise plan an admin does that from the organization's plugin settings (it then shows up for everyone); on an individual plan you can do it yourself. If **Add** doesn't take you straight to the plugin, that's usually the missing step. Once it's installed, run `/cold-start-interview` (a two-minute quick start on sensible defaults, or ten-plus minutes with your real documents) so the plugin learns how your practice works, and pair it with the research connector below.

### Connect your tools[](https://academy.claude.com/use-cases/legal-research-memo)

Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. [Learn about tool access(opens in new tab)](https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access).

Navigate to **Customize → Connectors** in Cowork to set up.



CoCounsel Legal (Thomson Reuters)

Surface relevant case law and regulatory guidance from authoritative content so every citation is verifiable.

[Connect](https://claude.ai/desktop/directory/cocounsel-legal)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23F25022'%20d='M1%201h10.5v10.5H1z'/%3e%3cpath%20fill='%237FBA00'%20d='M12.5%201H23v10.5H12.5z'/%3e%3cpath%20fill='%2300A4EF'%20d='M1%2012.5h10.5V23H1z'/%3e%3cpath%20fill='%23FFB900'%20d='M12.5%2012.5H23V23H12.5z'/%3e%3c/svg%3e)

Microsoft 365

The memo lands as a Word doc in your house format and saves to SharePoint, not a chat reply you reformat.

[Connect](https://claude.ai/desktop/directory/microsoft-365)



iManage

Pull prior memos on the same question from the matter workspace so the answer builds on what the team already knows.

[Connect](https://claude.ai/desktop/directory/imanage)

Browse all connectors[Open in Cowork](https://claude.ai/desktop/customize/connectors)

### Set the working folder[](https://academy.claude.com/use-cases/legal-research-memo)

Put the research request, the relevant facts, and a prior memo in your house format in one folder on your machine, then in Cowork click **+ Add folder** and select it. [Save it as a Cowork project(opens in new tab)](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork) so your memo format, instructions, and memory stay attached for the next question — Cowork reads from the folder and writes the memo back to it.

Files you add stay on your machine and aren't used to train Claude — Cowork reads them locally to do the work.



**Just want to try it once first?** Skip the project — click **+ Add folder** on a one-off folder and jump to the prompt below.

Research / Acme-Indemnification-Q

research-request-and-facts.docxMay 12, 202624 KB

memo-template-house-format.docxJan 8, 202638 KB

In Cowork’s chat bar:Research / Acme-Indemnification-Q

## The prompt[](https://academy.claude.com/use-cases/legal-research-memo)

### Copy this into Claude Cowork[](https://academy.claude.com/use-cases/legal-research-memo)

Research this question. Surface the relevant case law and regulatory guidance via Thomson Reuters and draft a research memo: question presented, short answer, the discussion grouped by authority, and a list of open issues. Cite every proposition to the source you relied on.



Research / Acme-Indemnification-QOpen in Cowork

### Why this works[](https://academy.claude.com/use-cases/legal-research-memo)

Prompt

**Name the source.** "Via Thomson Reuters" routes the search to authoritative content, so the citations are verifiable instead of plausible.

Prompt

**Dictate the structure.** Question presented, short answer, discussion, open issues is the format your readers expect, so the draft is editable rather than rewritable.

Prompt

**Require a citation for every proposition.** Forces the memo to show its work, and you can spot the unsupported sentence at a glance.

Source

**Let the working folder supply the facts.** The request and the relevant facts sit in the folder, so the memo applies the law to your situation rather than restating it in the abstract.

### Get a better draft[](https://academy.claude.com/use-cases/legal-research-memo)

Practice

**Add an example to match.** Drop a memo you like into the folder and Cowork matches your structure, citation style, and voice.

Practice

**Ask it to flag uncertainty.** Add "flag anything you're not confident about" so you know where to look first when you review the draft.

## Make Cowork work for you[](https://academy.claude.com/use-cases/legal-research-memo)

The plugin is a starting point — save the way you just ran this memo as a skill of your own, with your practices and expertise built in. A few minutes of conversation and it runs with your standards from then on.

Make what we've done in this task so far into a skill called /research-memo, with my house format, citation style, and jurisdictions built in.



ResearchOpen in Cowork



**Tip:** tell Claude to edit the skill for you.

## Make it repeatable[](https://academy.claude.com/use-cases/legal-research-memo)

### Run it on every new question[](https://academy.claude.com/use-cases/legal-research-memo)

A research request lands in the intake folder, the cited first draft should already be writing. Type `/schedule` in the prompt, or open **Scheduled** in the Cowork sidebar, and the customized skill runs whenever a new request is added.

**/schedule** Weekdays at 9am, check Research/Intake for new requests and run /research-memo on each one, saving the memo to a subfolder named for the question.



ResearchOpen in Cowork

Scheduled taskActive

First-draft research memo

Runs `/research-memo` on every new request in Research/Intake and saves the cited memo to a subfolder named for the question.

Every **weekday at 9am**[Open in Cowork](https://claude.ai/desktop/scheduled-task)

## Share with your teammates[](https://academy.claude.com/use-cases/legal-research-memo)

Your `/research-memo` skill now carries your house format, your citation style, and your jurisdictions. Share it so every memo the team produces reads the same way, and the requester gets a consistent first draft no matter who picks it up.



Share the skill

In Cowork, open **Skills** → `/research-memo` → **Share** and pick your teammates (or your whole workspace, if your admin allows). They get the skill with your house format and citation style baked in, so they don't repeat Steps 1-3.

## Going forward[](https://academy.claude.com/use-cases/legal-research-memo)

### Now in your Cowork

Your processes

Litigation Legal plugin

Your tools

CoCounsel Legal (Thomson Reuters)![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23F25022'%20d='M1%201h10.5v10.5H1z'/%3e%3cpath%20fill='%237FBA00'%20d='M12.5%201H23v10.5H12.5z'/%3e%3cpath%20fill='%2300A4EF'%20d='M1%2012.5h10.5V23H1z'/%3e%3cpath%20fill='%23FFB900'%20d='M12.5%2012.5H23V23H12.5z'/%3e%3c/svg%3e)Microsoft 365iManage

Your workspace

Research

Research questions come back as a structured, cited memo in your house format. Your review starts at checking the authorities, not finding them.

[Next: M&A diligence](https://academy.claude.com/use-cases/data-room-diligence)

Was this helpful?
