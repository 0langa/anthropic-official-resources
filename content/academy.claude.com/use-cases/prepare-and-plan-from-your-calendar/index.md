# Prepare and plan from your calendar

Claude in Chrome reads your calendar, pulls context from email threads, flags which meetings need prep, and books rooms for the ones missing them. Run it every evening and start each day knowing what's coming.

10 minClaude in Chrome

Get Claude in ChromeCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-a8f13pls.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-ms6ban8i.png)

![Prepare and plan from your calendar result](https://academy.claude.com/assets/v1/prepare-and-plan-from-your-calendar-o4y1fyqa.png)

## 1. Describe the task[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

Claude in Chrome lets Claude interact directly with web pages—reading content, clicking, typing, and navigating sites on your behalf. For calendar prep, this means Claude can open your Google Calendar, check each meeting's attendee list, switch to Gmail to search for relevant threads with those people, and even book conference rooms.

Point Claude at your Google Calendar and tell it what to look for. It handles the cross-referencing between calendar and email, surfaces what needs your attention, and can fix the gaps.

Look at my calendar and help me get ready for tomorrow.

**For each meeting:**

- Tell me if it's internal or external (check the attendee domains)
- Find any recent email threads with those attendees about this topic
- Flag if the meeting is missing a room (for in-person) or a video link (for remote). If it is, assign one to the meeting.
- For external meetings, note anything I should review beforehand, like relevant docs attached to the meeting or related emails.

Give me a quick prep summary for the day, finding what needs my attention before I show up.

Copy prompt

## 2. Give Claude context[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

Claude reads your calendar and email directly in Chrome. It cross-references attendees, threads, and meeting details to build context.

### Required context[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

**Required:** Open Google Calendar showing tomorrow's date and Gmail in another tab. Claude navigates between them to gather context for each meeting. Make sure you're logged into both.

## 3. What Claude creates[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

Claude reviews each meeting and gives you a prep summary organized by what needs attention.

**Tomorrow: Wednesday, December 18**

You have **7 meetings**. Here's what I found:

**Needs Prep (External Meetings)**

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Meeting</th><th class="border-b border-strong p-sm text-left font-medium">Time</th><th class="border-b border-strong p-sm text-left font-medium">Context</th></tr></thead><tbody><tr><td class="border-b p-sm">Acme Corp quarterly review</td><td class="border-b p-sm">10:00 AM</td><td class="border-b p-sm">External (3 attendees from @acme.com). Found email thread from Dec 12 where they asked about API rate limits—might come up. No room booked.</td></tr><tr><td class="border-b p-sm">Vendor intro - DataFlow</td><td class="border-b p-sm">2:00 PM</td><td class="border-b p-sm">External (new contact). They sent a capabilities deck on Dec 15 you haven't opened. Zoom link is in the invite.</td></tr></tbody></table>

**Missing Logistics**

<table class="w-full text-body"><thead><tr><th class="border-b border-strong p-sm text-left font-medium">Meeting</th><th class="border-b border-strong p-sm text-left font-medium">Issue</th><th class="border-b border-strong p-sm text-left font-medium">Suggested Fix</th></tr></thead><tbody><tr><td class="border-b p-sm">Acme Corp quarterly review</td><td class="border-b p-sm">No room</td><td class="border-b p-sm">Book Sequoia (seats 6) — available</td></tr><tr><td class="border-b p-sm">Team planning sync</td><td class="border-b p-sm">No room</td><td class="border-b p-sm">Book Birch (seats 8) — available</td></tr><tr><td class="border-b p-sm">Design review</td><td class="border-b p-sm">No video link</td><td class="border-b p-sm">Found Meet link in thread with Sarah—add to invite?</td></tr></tbody></table>

**Ready to Go (No Action Needed)**

- **Standup** — 9:00 AM, has Zoom link, recurring
- **Marcus 1:1** — 11:30 AM, internal, has room (Aspen)
- **End of day sync** — 4:30 PM, internal, has Meet link

**Quick Prep Summary**

1. Review the API rate limits thread before Acme call (I can pull the key points if helpful)
2. Open the DataFlow deck before the 2pm—it's 12 slides
3. Book rooms for Acme and Team planning
4. Add Meet link to Design review

Want me to book those rooms and add the video link now?

## 4. Follow up prompts[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

Continue the conversation with Claude to refine, expand, or explore further.

### Fix the logistics[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

Claude can book rooms and add links directly to calendar events. Once you've reviewed what needs fixing, approve the changes.

Yes, book those rooms and add the Meet link. Use a room on the 6th floor if available—that's where I sit.

Copy prompt

### Get deeper prep for the external meeting[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

For important calls, Claude can summarize recent correspondence with those contacts. This surfaces what's been discussed and what might come up.

For the Acme meeting, can you summarize the last few email threads I've had with them? I want to know what's been discussed recently and what they might bring up.

Copy prompt

### Make this a nightly routine[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

Claude can run tasks on a schedule. Save this as a skill, and schedule the same prompt for every evening so you start each morning with prep done. The first tip below shows how.

Can you save this as a skill? Call it "prep-tomorrow" and have it review my calendar, flag external meetings, and check for missing rooms or links.

Copy prompt

## 5. Tricks, tips, and troubleshooting[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

### Save and automate your workflow as a skill[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

Ask Claude to save a successful prompt as a [skill(opens in new tab)](https://support.claude.com/en/articles/12512180-use-skills-in-claude). Trigger the workflow by typing "/" and selecting it.

To run it on a schedule, open Claude Desktop and set up a [scheduled task(opens in new tab)](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork) with the same prompt, plus a line asking Claude to use Claude in Chrome. Set the task to require your computer. It works only while your computer is awake, with Claude Desktop and Chrome open.

If you still have the classic side panel, click the shortcut icon below a successful prompt to save it as a shortcut instead, which you can also schedule.

### Navigating to new sites[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

Whether Claude asks for permission before visiting new sites depends on your [permission mode(opens in new tab)](https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide). You can grant site-level permissions for websites you trust, allowing Claude to work without repeated approvals on those specific domains.

### Permissions before taking actions[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

Whether Claude asks for approval before clicking "send," "publish," "post," "submit," or similar action buttons depends on your request and your [permission mode(opens in new tab)](https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide). These actions include sending emails, posting to social media, submitting forms, or messaging others on your behalf. To review them first, say so in your prompt and consider switching to **Manually approve** (**Ask before acting** in the classic side panel).

## 6. Ready to try for yourself?[](https://academy.claude.com/use-cases/prepare-and-plan-from-your-calendar)

Install the Claude in Chrome extension and watch Claude scan tomorrow's meetings, find what you need to know, and fix what's missing—prep done before tomorrow arrives.

[Try in Claude(opens in new tab)](https://claude.com/download)

Was this helpful?
