# Build an 'Ask the Company' agent

Plain-English answers over your wiki, code, and warehouse.

10 minEngineeringClaude Cowork

Try in CoworkCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-mjmk2gjq.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-bpm7r9eg.png)

Film: the user asks Claude who owns a database table, and Claude searches connected reference files, a wiki, code, and a warehouse, answering with a named owner and linked citations. The user then saves the approach as a shared skill for the team.

Confluence

Order data model (v3)

Last edited 14 March. 21 columns, status values, soft-delete rule.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)GitHub

orders-service / CODEOWNERS

`/services/orders/ @meridian/commerce-platform`

![](https://academy.claude.com/assets/v1/snowflake-f7euzg40.svg)Snowflake

COMMERCE.PUBLIC.ORDERS

23 columns. 14 downstream views.

team-directory.md

Commerce Platform

Tech lead Priya Raman. #commerce-platform

Build an ‘Ask the company’ agent

Your team keeps asking who owns what, and the answers are scattered.

Confluence

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHub

![](https://academy.claude.com/assets/v1/snowflake-f7euzg40.svg)

Snowflake

Platform / ask-company

2 reference files

Folder

Engineering

/architecture

/code-review

/documentation

How can I help you today?

**/**documentation Search our wiki, code and warehouse, cite the source for each part, and if you're not sure, tell me who to ask. Who owns the orders table?

Reading service-catalog.yaml0s

Read5 sources

Readservice-catalog.yaml

SearchedConfluence for “orders table”

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)Readorders-service / CODEOWNERS

![](https://academy.claude.com/assets/v1/snowflake-f7euzg40.svg)ReadCOMMERCE.PUBLIC.ORDERS

Readteam-directory.md

Used 5 sources33s

I traced the orders table through your reference files, the wiki, the code and the warehouse, and the five sources agree. **Owner: Commerce Platform.** The `orders` table is written by `orders-service`; CODEOWNERS and the service catalog both name that team. CODEOWNERS · meridian/orders-service service-catalog.yaml

The Confluence schema page is two columns behind the warehouse. Order data model (v3) · Confluence COMMERCE.PUBLIC.ORDERS · Snowflake

For write access or a new column, ask Priya Raman in #commerce-platform, listed as data owner. team-directory.md

The answer names the owner and links every source it used.

**‹****›**

github.com/meridian/orders-service/blob/main/.github/CODEOWNERS

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)meridian/orders-servicePrivate

CodeIssues*14*Pull requests*3*ActionsSecurityInsights

mainorders-service/.github/**CODEOWNERS**

**priya-raman**Add data-platform as co-owner of order migrations8c41e7d · 3 weeks ago

**Code****Blame**CODEOWNERS · 7 lines · 412 Bytes**Raw**

<table class="code"><tbody><tr class="ln l1"><td class="n">1</td><td class="c cm"># Code owners for orders-service. Reviews are required from at least one owner.</td></tr><tr class="ln l2"><td class="n">2</td><td class="c">*                               <span class="at">@meridian/commerce-platform</span></td></tr><tr class="ln l3"><td class="n">3</td><td class="c">/services/orders/               <span class="at">@meridian/commerce-platform</span> <span class="at">@priya-raman</span></td></tr><tr class="ln l4"><td class="n">4</td><td class="c">/services/orders/migrations/    <span class="at">@meridian/commerce-platform</span> <span class="at">@meridian/data-platform</span></td></tr><tr class="ln l5"><td class="n">5</td><td class="c">/clients/inventory/             <span class="at">@meridian/inventory</span></td></tr><tr class="ln l6"><td class="n">6</td><td class="c">/infra/                         <span class="at">@meridian/platform</span></td></tr><tr class="ln l7"><td class="n">7</td><td class="c">/docs/                          <span class="at">@meridian/dev-docs</span></td></tr></tbody></table>

Any source opens to the exact line behind the answer.

Make what we’ve done here into a shared skill called ask-the-company.

**/ask-the-company**Answers engineering questions from the wiki, code and warehouse, and names an owner when unsure.

ReadsWorking folderConfluence![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)GitHub![](https://academy.claude.com/assets/v1/snowflake-f7euzg40.svg)Snowflake

Shared withEveryone in your organization can view

Claude Academy

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

![](https://academy.claude.com/assets/v1/snowflake-f7euzg40.svg)



0:03 / 0:561×

Illustration. Product screens are simplified.

Build an ‘Ask the company’ agent

Your team keeps asking who owns what, and the answers are scattered.

Ask the documentation skill one real question, with each source cited and an owner named.

Claude checks each place in turn: your reference files, the wiki, the code and the warehouse.

Claude checks each place in turn: your reference files, the wiki, the code and the warehouse.

You get the answer and the owner, with each source linked.

The answer names the owner and links every source it used.

Any source opens to the exact line behind the answer.

When the answer is right, ask Claude to save it as a skill the whole team can run.

Anyone on the team can ask who owns something and see the proof.

Search our wiki, code and warehouse, cite the source for each part, and if you're not sure, tell me who to ask. Who owns the orders table?

I traced the orders table through your reference files, the wiki, the code and the warehouse, and the five sources agree. Owner: Commerce Platform. The orders table is written by orders-service; CODEOWNERS and the service catalog both name that team. CODEOWNERS · meridian/orders-service service-catalog.yamlThe Confluence schema page is two columns behind the warehouse. Order data model (v3) · Confluence COMMERCE.PUBLIC.ORDERS · SnowflakeFor write access or a new column, ask Priya Raman in #commerce-platform, listed as data owner. team-directory.md

Skill: /documentation (Engineering)

Connectors: Confluence, GitHub, Snowflake

## Set up[](https://academy.claude.com/use-cases/ask-the-company)

### Try a plugin[](https://academy.claude.com/use-cases/ask-the-company)

The Engineering plugin ships with `/documentation` as a starting point, already structured to fan out across connected sources, cite what it finds, and name an owner when it's not sure. If your admin manages plugins and it's not available yet, skip this; nothing below requires it.



EngineeringStreamline engineering workflows — standups, code review, architecture decisions, incident response, and technical documentation. Works with your existing tools or standalone.

[Add](https://claude.ai/desktop/customize/plugins/new?marketplace=github.com%2Fanthropics%2Fknowledge-work-plugins&plugin=engineering)

`/documentation`Write and maintain technical documentation.

[Run](claude://cowork/new?q=%2Fdocumentation)

`/architecture`Create or evaluate an architecture decision record (ADR).

[Run](claude://cowork/new?q=%2Farchitecture)

Show all 10 skills

### Connect your tools[](https://academy.claude.com/use-cases/ask-the-company)

Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. [Learn about tool access(opens in new tab)](https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access).

Navigate to **Customize → Connectors** in Cowork to set up.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20id='cfA'%20x1='22.64'%20y1='24.36'%20x2='9.98'%20y2='17.07'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%230052CC'/%3e%3cstop%20offset='1'%20stop-color='%232684FF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='cfB'%20x1='1.36'%20y1='-.36'%20x2='14.02'%20y2='6.93'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%230052CC'/%3e%3cstop%20offset='1'%20stop-color='%232684FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23cfA)'%20d='M.87%2018.26c-.25.4-.52.87-.75%201.23a.75.75%200%200%200%20.25%201.02l4.96%203.05a.75.75%200%200%200%201.04-.25c.2-.33.45-.76.73-1.21%201.95-3.22%203.91-2.83%207.45-1.14l4.92%202.34a.75.75%200%200%200%201-.36l2.36-5.34a.75.75%200%200%200-.38-.98c-1.04-.49-3.1-1.46-4.96-2.36-6.68-3.24-12.36-3.03-16.62%204Z'/%3e%3cpath%20fill='url(%23cfB)'%20d='M23.13%205.74c.25-.4.52-.87.75-1.23a.75.75%200%200%200-.25-1.02L18.67.44a.75.75%200%200%200-1.04.25c-.2.33-.45.76-.73%201.21-1.95%203.22-3.91%202.83-7.45%201.14L4.53.7a.75.75%200%200%200-1%20.36L1.17%206.4a.75.75%200%200%200%20.38.98c1.04.49%203.1%201.46%204.96%202.36%206.68%203.24%2012.36%203.03%2016.62-4Z'/%3e%3c/svg%3e)

Confluence

Search the wiki and runbooks for the documented answer first. Confluence access comes through the Atlassian Rovo connector (Jira and Confluence).

[Connect](https://claude.ai/desktop/directory/atlassian)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHub

Read code, READMEs, and CODEOWNERS to answer "how does X work" and "who owns X."

[Connect](https://claude.ai/desktop/directory/github)

![](https://academy.claude.com/assets/v1/snowflake-f7euzg40.svg)

SnowflakeOptional

Query the warehouse for "how many" and "why did the metric move" questions.

[Connect](https://claude.ai/desktop/directory/snowflake)

Browse all connectors[Open in Cowork](https://claude.ai/desktop/customize/connectors)



**Want to try this task before setting anything up?** Add your files to a working folder, point Cowork at the folder, and start with the prompt.

### Set your working folder[](https://academy.claude.com/use-cases/ask-the-company)

Drag the files that anchor the agent (your service catalog export, the team directory, the glossary, the "where to find things" onboarding doc) into one folder and point Cowork at it. These become the routing table the agent consults before searching anywhere else. [Create a Cowork project(opens in new tab)](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork) from that folder so the catalog and ground rules stay attached as the agent evolves.

Platform / ask-company

service-catalog.yamlApr 18, 202694 KB

glossary.mdMar 2, 202611 KB

team-directory.mdApr 1, 20266 KB

In Cowork’s chat bar:Platform / ask-company

## The prompt[](https://academy.claude.com/use-cases/ask-the-company)

### Copy this into Claude Cowork[](https://academy.claude.com/use-cases/ask-the-company)

Build an internal "ask anything" agent for engineers. When someone asks "how do I get a staging API key," "what owns the orders table," or "why did deploys slow down last month," find the answer across our systems, cite the source, and tell them who to ask if you're not sure. Get one good answer first, then turn it into a shared skill.



Platform / ask-companyOpen in Cowork

### Why this works[](https://academy.claude.com/use-cases/ask-the-company)

Prompt

**Give an example for each question type.** A how-to, an ownership lookup, a metric why: covers the question types engineers actually ask.

Prompt

**Cite the source, every time.** Engineers trust the link, not the prose; citations make the answer verifiable.

Prompt

**Name an owner when unsure.** Asking for "the owning team or channel" gives Claude something to fall back on when it's not confident. You get a pointer to follow up on instead of a guess to verify.

Source

**Put reference docs in the working folder.** Service catalog and team directory tell Cowork where to look and who to point to.

### Get a better draft[](https://academy.claude.com/use-cases/ask-the-company)

Practice

**Add an example to match.** Drop an example you like into the folder and Cowork matches your structure and voice.

Practice

**Ask it to flag uncertainty.** Add "flag anything you're not confident about" so you know where to look first when you review the draft.

## Make Cowork work for you[](https://academy.claude.com/use-cases/ask-the-company)

The plugin's `/documentation` is a generic starting point. Once Step 2 answers your three questions well, tell Cowork to write your version of the skill. Layer in which spaces and repos to search first, the "I'm not sure" threshold, the tone, and the systems that are off-limits. A few minutes of conversation and the skill speaks your stack from then on.

Make what we've done in this task so far into a skill, or edit the /documentation skill with my feedback.



Platform / ask-companyOpen in Cowork



**Tip:** tell Claude to edit the skill for you.

## Make it repeatable[](https://academy.claude.com/use-cases/ask-the-company)

### Make it a live artifact[](https://academy.claude.com/use-cases/ask-the-company)

Once the agent answers your test questions well, publish it as a live artifact so anyone in the org has one link to ask. The artifact runs the shared skill behind the scenes; the platform team owns the skill and keeps tuning it.

### Log every question it couldn't answer[](https://academy.claude.com/use-cases/ask-the-company)

The agent gets better when you know where it falls short. Type `/schedule` or open **Scheduled** in the Cowork sidebar, and a weekly run writes the unanswered questions to your folder so the platform team can fill the gaps.

**/schedule** Every Friday at 4pm, list the questions /documentation couldn't confidently answer this week, group them by topic, and write them to Platform/ask-company/gaps-<week>.md with a suggested owner for each.



Platform / ask-companyOpen in Cowork

Scheduled taskActive

Ask-company gap report

Weekly, lists the questions the agent couldn't answer, groups them by topic, and writes a gap report with suggested owners.

Every **Friday at 4:00pm**[Open in Cowork](https://claude.ai/desktop/scheduled-task)

## Share with your teammates[](https://academy.claude.com/use-cases/ask-the-company)

Your customized `/documentation` now carries your sources, your routing table, and your confidence rules. Share it workspace-wide so every engineer asks the company the same way, and the answer to "how do I…" stops depending on who's in the channel.



Share the skill

In Cowork, open **Skills** → `/documentation` → **Share** and pick your whole workspace. Everyone gets the same front door to wiki, code, and warehouse, with the platform team keeping it tuned.

## What changes for the org[](https://academy.claude.com/use-cases/ask-the-company)

Internal questions get a sourced answer from across your wiki, code, and warehouse, with an owner named when the agent isn't certain. Engineers check one response instead of searching each system.

You did this for everyday engineering questions. The same approach covers on-call runbook lookup, data-catalog search, and new-hire onboarding — each one becomes a skill in your team's shared plugin.

[Next: Write the design doc or RFC](https://academy.claude.com/use-cases/design-doc)

Was this helpful?
