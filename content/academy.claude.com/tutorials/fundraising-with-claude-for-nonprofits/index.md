# Find funders and report on grants with Claude for Nonprofits

Create a map of where your records are kept and a voice guide, then follow a nonprofit as it finds funders and drafts a grant report. In each step you ask Claude for research or a first draft based on your organization's documents, then review it before you use it.

10 minClaude Cowork

[Open Cowork](https://claude.ai/new?surface=cowork)

![](https://academy.claude.com/assets/v1/thumbnail.light-b9l86rdi.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-kmg77r4y.png)

Embedded media: https://www.youtube-nocookie.com/embed/uNXfAXK7e28?enablejsapi=1&origin=https%3A%2F%2Facademy.claude.com&rel=0

[Watch on YouTube(opens in new tab)](https://www.youtube.com/watch?v=uNXfAXK7e28)

The last few months of the year are a busy time for fundraising. You may have grant deadlines coming up, with your year-end appeal close behind. At many nonprofits, the person running the programs is also the one raising the money and writing every letter, proposal, and report. Claude can handle the first pass of that work:

- Finding funders that give to your cause
- Checking their eligibility requirements
- Pulling figures from past proposals into a new draft
- Choosing a story for your appeal
- Comparing your outcomes and spending with your award letter

You describe the task and share your organization's documents. Claude prepares a draft, cites its sources, and tells you what's missing. Then you review the draft before you use it.



Getting the plugin

The skills in the Claude for Nonprofits plugin help you do that and more. They're installed automatically on most nonprofit plans. If you don't see the plugin, ask your admin, who can [add it for your organization(opens in new tab)](https://support.claude.com/en/articles/13837433-manage-plugins-for-your-organization). If you're not on a nonprofit plan, [check eligibility and sign up(opens in new tab)](https://claude.com/solutions/nonprofits).

The tutorial below covers what to set up first, then breaks down two of the fundraising skills: finding funders who fit, and showing funders what their grant made possible. The example follows Kofi Mensah, the development director at Maple Hollow After-School Project, a fictional nonprofit with a reading program. All people, data, documents, and figures are fictional.

## Set up once[](https://academy.claude.com/tutorials/fundraising-with-claude-for-nonprofits)

Start by having Claude create a map of where your records are kept and a voice guide for your organization's writing style. Every other skill in the plugin uses both.



Where Claude finds your documents

- **Connected tools:** When you connect a tool, like your shared drive, Claude can open the documents you keep there. Claude's data access mirrors yours, so it can only see what you already have access to. [Learn more about connectors(opens in new tab)](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities).
- **Memory:** Memory allows Claude to use what it has saved in earlier chats to inform future ones. Turn on memory in Settings so Claude can save a data map and voice guide and use them in later chats. Memory works in tasks that run in the cloud. [Check where your tasks run(opens in new tab)](https://support.claude.com/en/articles/15811196-what-to-expect-with-claude-cowork-in-the-cloud). [Learn more about memory(opens in new tab)](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context).
- **Files you attach:** If you can't reach your data through a connector, download the files and attach them to your message.

If you don't see a tool, or can't turn on memory or run tasks in the cloud, ask your admin.

### 1. A map of where your data lives[](https://academy.claude.com/tutorials/fundraising-with-claude-for-nonprofits)

Your records are probably kept in several places: donor and gift records in a donor database, grant files on a shared drive, budgets somewhere else. Claude creates a map that lists each kind of record and where you keep it, so Claude knows where to look for future tasks.

In this setup, Kofi asks Claude to map where Maple Hollow keeps its records, using the `/where-things-live` skill.

Here is what the skill is built to do:

- Claude asks you where you keep each kind of record.
- Claude saves the name of the tool or place where each record is kept, without saving any details from your records.
- Claude shows you the whole map in the chat, then confirms it's saved to memory.
- From then on, the other skills check the map before they ask you where a record is kept.

Walkthrough: step through a Claude chat where the user has Claude ask where each kind of record is kept, then review a map of the answers before saving it to memory, so later chats can check the map first.

Kofi asks to see the map before Claude saves it

I want to stop explaining where our records are in every chat. Can you ask me about each kind of record and put my answers in a map? Show me the map before you save it.

Kofi asks to see the map before Claude saves it

Yes. There are 11 kinds of records to go through, and I'll ask about them three at a time. Pick a choice or type your own answer.

After the last question I'll show you the whole map here in the chat, and I'll save it only once you tell me it's right. The map will hold the names of tools and places only, with no people's names, addresses or dollar amounts.

Where do your official written documents live?Choose one of 2 options.Question 1 of 3

1 of 3

1On a computer

2We don't track this

Skip

Claude asks where Maple Hollow keeps its records

Nothing is saved yet.

<table class="w-full border-collapse text-[13.5px] leading-5"><thead><tr><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold">Kind of record</th><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold">Where it lives</th></tr></thead><tbody><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Official written documents</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Our shared drive</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Compliance, rules and reference documents</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Our shared drive</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Donor and gift records</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Our donor database</td></tr></tbody></table>

Claude shows Kofi the map, in his words, before saving it

Is this map right, and should I save it?Choose one of 3 options.

1Yes, save it as it is

2Change something first

3Don't save it

Skip

Saved. In later chats I'll check this map first, so you won't need to explain where your records are.

Claude saves the map after Kofi confirms

Next

A simulated example. Every person and organization is fictional. Claude's answers come from test runs of the skills and are shown in part.

Now Kofi has a map of where Maple Hollow keeps each kind of record.

**Before you act:**

- Review the entire map when Claude shows it to you, and correct any location that's wrong.
- If you aren't sure where a record is kept, say so. Claude offers to look in your connected tools. You can come back and update the map once you find it.
- [Connect the tools on your map(opens in new tab)](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) wherever a connector is available. The map tells Claude where a record is kept, and the connector lets Claude open it.

**What you need:**

- Memory turned on, and a task that runs in the cloud. The skill also runs without memory, but the map isn't saved for later chats.
- No documents required
- A general sense of where your team keeps each kind of record

**Try it:**

I want to stop explaining where our records are in every chat. Can you ask me about each kind of record and put my answers in a map? Show me the map before you save it.



Open in Cowork

### 2. A voice guide[](https://academy.claude.com/tutorials/fundraising-with-claude-for-nonprofits)

Your organization has a unique voice: its writing style and tone, what it calls the people it serves, and how it asks for support. A voice guide codifies that voice in writing so every draft sounds like your organization, whoever writes it.

In this setup, Kofi asks Claude to make a voice guide for Maple Hollow from three of its past letters, using the `/org-voice-guide` skill.

Here is what the skill is built to do:

- Claude looks for an existing voice guide first. If there isn't one, Claude builds a guide from your organization's existing materials and asks you questions to fill in the rest.
- Claude marks which guidelines are its own suggestions.
- Claude writes a short sample in your organization's voice and saves the guide once you confirm the sample sounds right.
- Claude offers to share the finished guide with your team and add it to your map, so the other skills can use your organization's voice for future drafts.

Walkthrough: the user steps through a Claude chat where Claude drafts a voice guide from past writing samples, proposes a sample message, then revises a line after the user flags it. Shows how feedback refines a saved voice guide.

Kofi asks Claude to learn Maple Hollow's voice from three past letters

Can you learn how we write, so your drafts sound like us? Work from our spring appeal, our year-end appeal and our welcome letter to families. Show me the guide and a sample so I can check it sounds right.

Kofi asks Claude to learn Maple Hollow's voice from three past letters

Reading filesReading filesrunning

Reading files

I made a draft from the three pieces you named. Nothing is saved yet. I will save it once you tell me it sounds like you.

Draft guide

**Organization voice guide: Maple Hollow After-School Project**  
Made from: Spring appeal 2026, Year-end appeal 2025, Welcome letter to families August 2026.

**What they call people and places**

- People who give: "neighbor". Appeals open "Dear neighbor," and close by thanking the neighbor.
- Giving money or time: "pitch in". Also "give" and "gift".

**How it sounds**

- Short sentences. Most are under ten words. Fragments are fine: "Out loud. One page at a time."

**Sign-off**  
"See you in the Reading Room," then the signer's name, then their title. All three pieces end this way.

Claude drafts the guide, with quotes from the letters

Sample: a short post about the Reading Room

Monday at 3:30, Room 12. Students sign in. Snack comes first. Then the books come out.

[One true moment from this week. Two or three short lines. No student names.]

This is the Reading Room. Monday to Thursday, students in grades 1 to 5 read with a reading coach in a small group. Then each student reads one to one with a volunteer tutor. We go until 5:30.

Families pay nothing. Every student takes home books to keep.

Come and see it. [Day] at 3:30, the Community Room at the Hollow Branch library. There is a small chair for you.

See you in the Reading Room.

This sample is in Maple Hollow's voice, from the draft guide above. Every fact in it comes from your three pieces. The two brackets are for things I do not know: a true moment from this week, and the day you want visitors.

Claude writes a sample in Maple Hollow's voice

Does the sample sound like Maple Hollow?Choose one of 3 options.

1Yes, that is us

2Close. I have a few fixes

3Not yet

Skip

It is close. One line is off: "There is a small chair for you." Nobody does anything in that line. When we invite someone in, a person does something, the way the spring appeal does: "Pull up a chair. A student will be glad to read to you."

Kofi tells Claude which line sounds off and why

You are right. I checked all three pieces. Every invitation has a person doing something, and "There is" and "There are" never appear in them at all. I fixed the sample and added your rule to the draft guide.

Nothing is saved yet. I will save the guide when you say it sounds right.

Three changes to the draft guide

**1. Inviting someone in (new rule, from you)**

- Before: the guide had no rule for this. It only said an appeal has "An invitation to visit, with the day, time and room."
- After, a new line under "How it sounds": "When we invite someone in, a person does something: the neighbor, a student, or we. 'Pull up a chair. A student will be glad to read to you.' 'We will save you a small chair.' Never a line where nobody does anything, such as 'There is a small chair for you.'"

Claude adds Kofi's rule to the draft guide

The sample, with the line fixed

Come and see it. [Day] at 3:30, the Community Room at the Hollow Branch library. Pull up a small chair. A student will read you a page.

The two new lines at the end are mine, written to your rule: the neighbor pulls up the chair, and a student reads. If you would rather keep your own words, the spring appeal's lines fit here exactly as they are.

Claude rewrites the line that sounded off

With that line fixed, does it sound like Maple Hollow?Choose one of 3 options.

1Yes, save it

2One more fix

3Not yet

Skip

Saved. The guide is in memory now, so later chats can find it and write in Maple Hollow's voice. I saved it because you said it sounds like you.

Claude saves the guide after Kofi confirms

Next

A simulated example. Every person and organization is fictional. Claude's answers come from test runs of the skills and are shown in part.

Now Kofi has a short voice guide for Maple Hollow that Claude can use in later drafts.

**Before you act:**

- Read the sample out loud. If part of it doesn't sound like your organization, tell Claude which part and give it feedback before you approve the guide.
- Check that your examples cover each audience you write to, such as donors, funders, and the people you serve. That's how Claude learns your organization's voice for each one.

**What you need:**

- Your organization's voice or style guide, if it has one
- Three to five examples of your organization's materials, like newsletters, website pages, grant applications, or donor letters. Claude can find them in your connected tools, or you can attach them to your message.

**Try it:**

Can you learn how we write, so your drafts sound like us? Use [the materials you chose]. Show me the guide and a sample so I can check it sounds right.



Open in Cowork

## Find funders who fit[](https://academy.claude.com/tutorials/fundraising-with-claude-for-nonprofits)

One of the most time-consuming parts of applying for grants is figuring out which funders to approach. You're looking for funders that give to your cause, in your area, to organizations your size. You also have to keep track of who already funds you.

In this section, Kofi asks Claude to find funders for one of Maple Hollow's programs, using the `/funder-and-grant-research` skill.

Here is what the skill is built to do:

- Claude reviews your documents before it asks you any questions.
- Claude finds foundations, companies, agencies, and individual donors that give to causes like yours.
- Claude finds open grants you can apply for, and cites each funder's website for its eligibility requirements and deadline.
- Claude tells you when it can't confirm a deadline or a grant amount.

Walkthrough: the user asks Claude to find funders for a reading program, excluding current funders. Step through Claude reading documents, searching the web, ranking funders with eligibility details, and flagging unconfirmed information before asking follow-up questions.

Kofi tells Claude to skip anyone who already funds Maple Hollow

Can you find funders that fit the Reading Room, and skip anyone who already funds us? I want a short list so I can decide who to approach first.

Kofi tells Claude to skip anyone who already funds Maple Hollow

Reading filesReading filesrunning

Reading files

Searching the webSearching the webrunning

Searching the web

Claude reads Kofi's two documents, then searches the web

I found five funders for the Reading Room and left out the three that already fund you. **Approach the Wren and Alder Family Foundation first.** It funds reading programs for your grades in your county, and anyone may send it a letter of inquiry.

The funder decides who is eligible, so "fit" below is my reading, not a ruling.

Claude starts with a summary: who to approach first, and why

Short list, best fit first

<table class="w-full border-collapse text-[13.5px] leading-5"><thead><tr><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold"></th><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold">Funder</th><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold">Gives</th><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold">Next date</th></tr></thead><tbody><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">1</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Wren and Alder Family Foundation, 2027 Family Literacy Grant</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Up to $40,000 for one year</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Letter of inquiry due December 12, 2026, 5 p.m. Eastern</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">2</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Sycamore Region Community Foundation, Education Fund</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$5,000 to $25,000</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Opens January 5, 2027. Closes February 20, 2027</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">3</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Harvest Lane Grocers Community Fund</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$2,500 to $10,000</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Next quarterly review is January 15, 2027</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">4</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">City of Hollow Bend, 2027 Youth Partnership Grant</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Up to $60,000</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Due November 14, 2026, 4 p.m.</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">5</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Tri-County Fund for Children</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Typical grants $20,000 to $40,000</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">None. Invitation only</td></tr></tbody></table>

Claude lists the five funders in a table, with grant amounts and dates

What to check before you approach each one

**1. Wren and Alder Family Foundation** (source for all of this: https://wrenalder.example/grants/family-literacy-2027)

- It looks for fall-to-spring reading results, families brought into the reading, and more demand than places.
- It has four rules for who can apply: a 501(c)(3) based in Maple or Tamarack County, a program for kindergarten to grade 5, at least three years running, and an operating budget under $1 million. Your files don't give your tax status, how long you have run, or the organization's whole budget.

Claude cites the funder's website, lists its eligibility requirements, and tells Kofi what's missing

**3. Harvest Lane Grocers Community Fund** (source: https://harvestlane.example/community-fund)

- The page doesn't say when a request must arrive to make the January 15 review, or what the money can pay for.

**5. Tri-County Fund for Children** (source: https://tricountychildren.example/how-we-give)

- The page doesn't name its three counties, so I can't confirm Maple County is one. I searched for its grantees and found none listed.

Claude tells Kofi which details it couldn't confirm

Three answers would settle the open points above.

What is the organization's whole operating budget this year?Choose one of 4 options.Question 1 of 3

1 of 3

1About $126,000. The Reading Room is all we do

2More than $126,000 but under $1 million

3$1 million or more

4Not sure

Skip

Claude asks Kofi three questions that the documents don't answer

Next

A simulated example. Every person and organization is fictional. Claude's answers come from test runs of the skills and are shown in part.

Now Kofi has a short list of prospective funders for Maple Hollow's reading program, with the strongest fit first.

**Before you act:**

- Follow the source link for each funder and make sure Claude's summary matches the funder's website. Remove any funder that doesn't match.
- Confirm each deadline on the funder's website before you plan around it, because deadlines and priorities change.
- Review any details Claude couldn't confirm, and ask the funder about any that aren't on its website.

**What you need:**

- A description of the program you're raising money for
- The types of funders or funding opportunities you're looking for
- Your list of current funders

**Try it:**

Can you find funders that fit [program name], and skip anyone who already funds us? I want a short list so I can decide who to approach first.



Open in Cowork

## Show funders what their grant made possible[](https://academy.claude.com/tutorials/fundraising-with-claude-for-nonprofits)

You've put a funder's grant to work in your programs. Now it's time to show the funder the results: how your outcomes and spending compare with the goals and budget in your award letter.

Maple Hollow has a report due to the Maple County Community Foundation, which funds its reading program. In this section, Kofi asks Claude to draft that report, using the `/grant-reporting` skill.

Here is what the skill is built to do:

- Claude reports your outcomes against each goal in your award letter and your spending against each budget line.
- Claude takes each figure from your documents, cites the source, and shows its work for any figure it calculated.
- If the report needs a figure or an explanation that isn't in your documents, Claude adds a placeholder in brackets.
- Claude asks you for what your documents can't explain, like why a result came in under the goal.

Walkthrough: Claude drafting a grant report on a funder's form, citing the source for every figure and flagging gaps with bracketed placeholders instead of guessing. It teaches how Claude grounds reporting in source documents and shows its arithmetic for calculated figures.

Kofi asks for the source of every figure and placeholders for missing numbers

We owe the Maple County Community Foundation a report on our grant. Can you draft it on their form, show the source of every figure, and leave a blank where a number is missing? I'll write the reason for any line where we spent more than we planned.

Kofi asks for the source of every figure and placeholders for missing numbers

Reading filesReading filesrunning

Reading files

Claude reviews Kofi's documents before it writes

Here is the draft on the Foundation's form.

Maple County Community Foundation

Community Needs Grants: interim report form

<table class="w-full border-collapse border-t border-alpha-3 text-[13.5px] leading-5"><tbody><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Grantee</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Maple Hollow After-School Project</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Grant number</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">CN-2025-031</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Grant amount</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$15,000</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Grant period</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">September 1, 2025 to August 31, 2026</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Report due</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">October 31, 2026</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Person filling in this form</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">[BLANK 1: name of the person filling in the form]</td></tr></tbody></table>

Claude follows the Foundation's form and fills in the grant's details

Question 1. Progress on goals (250 words)

**Goal 1: Serve 100 students.** Not met. 88 students were enrolled in the Reading Room in the 2025-26 school year, 12 fewer than the goal.

**Goal 2: Average attendance of 80%.** [BLANK 2: average attendance as a percentage, the months it covers, where the figure comes from, and whether the goal was met]

**Goal 3: 70% of students move up at least one reading level.** Not met, by a small margin. 61 of 88 students (69%) moved up at least one level from fall to spring. Levels come from the school district's fall-to-spring reading benchmark.

Claude reports Maple Hollow's outcomes against each goal and adds a bracketed placeholder for attendance

Question 3. Budget versus actual

<table class="w-full border-collapse text-[13.5px] leading-5"><thead><tr><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold">Line</th><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold">Budget</th><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold">Actual</th><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold">Difference</th><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold">Reason, for any line over by more than 10%</th></tr></thead><tbody><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty"><span class="whitespace-nowrap">Reading coaches</span></td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$9,000</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$9,000</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$0</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty"></td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty"><span class="whitespace-nowrap">Books</span></td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$3,500</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$4,400</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">+$900</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">[BLANK 4: your reason. This line is over by 26%.]</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty"><span class="whitespace-nowrap">Snacks</span></td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$1,500</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$1,200</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">-$300</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty"></td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty"><span class="whitespace-nowrap">Assessment licences</span></td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$1,000</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$1,000</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$0</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty"></td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty"><span class="whitespace-nowrap">Total</span></td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$15,000</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">$15,600</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">+$600</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty"></td></tr></tbody></table>

Budget figures are from the award letter. Actual figures are from our accounting records, September 2026. Difference is actual minus budget.

Claude reports spending against each budget line and adds a placeholder for Kofi's reason

Where each figure comes from

<table class="w-full table-fixed border-collapse text-[13.5px] leading-5"><colgroup><col class="w-2/5"/><col/></colgroup><thead><tr><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold">Figure in the draft</th><th class="border-b border-alpha-3 py-1.5 pe-3 text-start align-bottom font-semibold">Source</th></tr></thead><tbody><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">The three goals (100 students, 80% attendance, 70% moving up)</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">MCCF award letter, "Goals"</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">88 students, 2025-26 school year, both sites</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Outcomes for the grant period, table and notes</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">12 fewer than the goal</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">My arithmetic: 100 minus 88</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">61 of 88 students moved up, fall to spring</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Outcomes for the grant period, table</td></tr></tbody></table>

Claude cites the source for each figure in the draft

<table class="w-full table-fixed border-collapse text-[13.5px] leading-5"><colgroup><col class="w-2/5"/><col/></colgroup><tbody><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">69%</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">My arithmetic: 61 divided by 88 is 69.3%</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Budget column</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">MCCF award letter, "Grant budget". Spending by line shows the same amounts.</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Actual and Difference columns, and the Total row</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Spending by line - MCCF grant, which says it is from the accounting records, September 2026. I copied them as they are. The lines do add up to the totals.</td></tr><tr class="align-top"><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">Books over by 26%</td><td class="border-b border-alpha-2 py-1.5 pe-3 text-pretty">My arithmetic: $900 divided by $3,500 is 25.7%</td></tr></tbody></table>

Claude shows its work for the percentages it calculated

What's left for you

1. **BLANK 1.** Who is filling in the form?

2. **BLANK 2.** Average attendance: the percentage, the months it covers and where it comes from. If attendance wasn't tracked, tell me and I'll rewrite Goal 2 to say so plainly. The goal has to stay in the report, because the Foundation will read the report against the award letter.

3. **BLANK 3.** What you learned. Two questions to start from: Enrollment was 88 against a goal of 100. What held it back? And 74 of 88 families came to a reading night. Did that change how you run the program?

4. **BLANK 4.** Your reason for the Books line. You may also want to say there what covered the extra $600.

Claude lists the placeholders and asks Kofi for the missing name, figure, or reason

Next

A simulated example. Every person and organization is fictional. Claude's answers come from test runs of the skills and are shown in part.

Now Kofi has a draft report that follows the Foundation's form, with a source for every figure. Next, Kofi will add the missing figure and the explanations, then submit the report.

**Before you act:**

- Make sure the figures in the draft match your program and financial records.
- Wherever the draft has a placeholder, add the missing figure or write the explanation yourself.
- If a result fell short or a budget line ran over, talk to your program officer before you submit the report.

**What you need:**

- The funder's report form or template
- Your award letter or grant agreement
- Your outcomes for the reporting period
- Your spending by budget line

**Try it:**

We owe [funder] a report on our grant. Can you draft it using their form, show the source of every figure, and leave a placeholder where a number is missing? I'll write the reason for any line where we spent more than we planned.



Open in Cowork

## Work with Claude on other fundraising tasks[](https://academy.claude.com/tutorials/fundraising-with-claude-for-nonprofits)

The fundraising skills also cover these tasks. To start one, describe the task and share your documents.

- **Check your fit for a grant** (`/funder-and-grant-research`). Before you put time into an application, it helps to know whether your organization meets the funder's requirements. Share the request for proposals and documents that describe your organization, and Claude rates each requirement "Met", "Not met", or "Can't tell yet". For each requirement rated "Can't tell yet", share what's missing and ask Claude to check again.
- **Write a letter of inquiry or a proposal** (`/grant-proposal-writing`). Share the funder's application guidelines, one or two past proposals, and your latest outcomes report, and Claude bases the draft on them. Make sure every figure matches the source Claude cites, because Claude can make mistakes.
- **Prepare for a funder call, then follow up** (`/donor-and-funder-relations`). Tell Claude who the call is with and what you want from it, and Claude prepares a brief from your records and public sources. Ask Claude to tell you what it couldn't find, and track down those details before the call. After the call, share your notes, and Claude writes them up and drafts the thank-you note.
- **Thank your donors** (`/donor-and-funder-relations`). Share this year's gift records, and Claude writes each thank-you letter with the amount, date, and purpose of the donor's gift, then lists the letters that need a closer look. Read those first.
- **Draft your year-end appeal** (`/donor-and-funder-relations`). Share your gift records and one story from your program that the person in it agreed to share, and Claude bases the appeal on them. Read the appeal for any figure or story you didn't give Claude. If Claude can't cite a source for it, cut it.

## Keep the review habit[](https://academy.claude.com/tutorials/fundraising-with-claude-for-nonprofits)

Claude can take a draft up to the point of sending. Before you send it, ask these three questions:

- **Is each claim sourced?** Every figure and claim should have a source you can check.
- **Is each gap marked?** Look for a bracketed placeholder wherever a figure, name, or date is missing.
- **Is any fact stated that you didn't provide?** If so, ask Claude for the source.

Then decide whether to use the draft, revise it, or start over.

You can review a board update, a job posting, or any other draft the same way.

## Learn more[](https://academy.claude.com/tutorials/fundraising-with-claude-for-nonprofits)

- [Teach Claude your way of working using skills(opens in new tab)](https://academy.claude.com/tutorials/teach-claude-your-way-of-working-using-skills)
- [Use connectors to extend Claude's capabilities(opens in new tab)](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities)
- [Use Claude's chat search and memory to build on previous context(opens in new tab)](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)
- [Nonprofit solutions page(opens in new tab)](https://claude.com/solutions/nonprofits): plans and pricing for nonprofits.

Was this helpful?
