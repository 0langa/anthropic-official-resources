var e=`---
kind: widget-copy
---

{/* Learner-facing copy for TrackerSteps.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags.

    The widget is mounted in four pieces: \`save\`, \`tools\`, \`claude\` and
    \`share\`. Each has a \`.title\` (four words at most), one action and a
    \`.result\`. The action is a prompt to send (\`.ask\`) or something to press
    (\`.click\`). The result is the one line under the picture: it says what the
    artifact can do now, and names what the picture shows. \`aria\` names a piece for a screen
    reader; \`{title}\` is the piece's title and must survive verbatim.

    Bold words: a \`{bold}\` token in a prompt marks where they go, and their
    text is the key with \`.bold\` added.

    Only read aloud: \`share.click\`, which the picture shows instead; \`ui.you\`
    and \`ui.youDo\`, said before the action; \`ui.then\`, said before the result;
    and \`menu.sr\`, in place of the small menu drawn over the message box in the
    \`tools\` piece. \`ui.again\` names the button that replays the change, and is
    its tooltip.

    \`ui.share\`, \`box.hint\`, \`menu.connectors\`, \`pane.*\` and \`sheet.*\` follow
    Claude's own wording.

    \`demo.*\` is what the sample tracker itself says. \`{done}\` and \`{total}\` are
    numbers at runtime and must survive verbatim. The same tracker runs live,
    in English, in the first widget on the page, so "This week", "Write Friday
    update" and the day names stay as they are. Nobody is named. */}

<Copy k="aria">{title}: what you do, and the priorities tracker afterward</Copy>

<Copy k="save.title">Save what people enter</Copy>
<Copy k="save.ask">{bold} as people check off tasks, so the whole team sees what’s done the next time we open the tracker.</Copy>
<Copy k="save.ask.bold">Save the checkmarks</Copy>
<Copy k="save.result">You open the tracker the next day, and yesterday’s checkmarks are still there.</Copy>

<Copy k="tools.title">Use your connected tools</Copy>
<Copy k="tools.ask">{bold}, using our team’s Google Calendar.</Copy>
<Copy k="tools.ask.bold">Show who’s out of office this week</Copy>
<Copy k="tools.result">The artifact uses a connected tool, in this case Google Calendar, to show who’s out.</Copy>

<Copy k="claude.title">Add Claude to the tracker</Copy>
<Copy k="claude.ask">Add a “Write Friday update” button that {bold} from what’s done and what’s overdue.</Copy>
<Copy k="claude.ask.bold">uses Claude to write a short team update</Copy>
<Copy k="claude.result">Claude works inside the artifact, in this case to draft a Friday update.</Copy>

<Copy k="share.title">Share with your team</Copy>
<Copy k="share.click">Click Share at the top right, add your teammates, and give them access to change the shared entries.</Copy>
<Copy k="share.result">Your teammates open the tracker from its link and see the same checkmarks.</Copy>

<Copy k="ui.you">You ask Claude</Copy>
<Copy k="ui.youDo">You do this</Copy>
<Copy k="ui.then">What changes</Copy>
<Copy k="ui.again">Play again</Copy>
<Copy k="ui.share">Share</Copy>
<Copy k="box.hint">Write a message…</Copy>
<Copy k="menu.connectors">Connectors</Copy>
<Copy k="menu.calendar">Google Calendar</Copy>
<Copy k="menu.sr">In the message box’s + menu, under Connectors, Google Calendar is on.</Copy>
<Copy k="pane.name">This week</Copy>
<Copy k="sheet.add">Add people</Copy>
<Copy k="sheet.invite">Invite</Copy>
<Copy k="sheet.people">People with access</Copy>
<Copy k="sheet.you">(you)</Copy>
<Copy k="sheet.owner">Owner</Copy>
<Copy k="sheet.role">Contributor</Copy>

<Copy k="demo.title">This week</Copy>
<Copy k="demo.count">{done} of {total} done</Copy>
<Copy k="demo.day1">Mon</Copy>
<Copy k="demo.day2">Tue</Copy>
<Copy k="demo.day3">Wed</Copy>
<Copy k="demo.day4">Thu</Copy>
<Copy k="demo.day5">Fri</Copy>
<Copy k="demo.out">out Thu, Fri</Copy>
<Copy k="demo.write">Write Friday update</Copy>
<Copy k="demo.note">4 of 9 priorities are done this week. Two are overdue. One teammate is out Thursday and Friday, so someone needs to cover their Friday task.</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 77f223c02c0cf979 */}
<Copy k="widget.description.claude">
  Animation: the user asks Claude to add Claude to a sample team priorities
  tracker. The message asks for a button that uses Claude to write a short
  team update from what's done and what's overdue. Claude replies, the new
  button arrives on the tracker, a pointer presses it, and a short update
  about the week is written out inside the tracker. It teaches that you can
  ask in the conversation to add Claude to a custom artifact, and that people
  can then use Claude inside it, in this case to draft a weekly update.
</Copy>
<Copy k="widget.description.save">
  Animation: the user asks Claude to make a sample team priorities tracker
  save what people enter. The message asks Claude to save the checkmarks as
  people check off tasks, so the whole team sees what's done the next time the
  tracker is opened. Claude replies, the tracker opens again in the artifact
  pane, and the earlier checkmarks are marked as still in place. It teaches
  that to save entries in a custom artifact, you tell Claude what the artifact
  should keep, and that saved entries are still there the next time anyone
  opens it.
</Copy>
<Copy k="widget.description.share">
  Animation: the user shares a sample team priorities tracker with teammates.
  No message is sent. A pointer presses Share in the artifact pane, and
  Share's menu opens with a field for adding people and a list of people with
  access. Two teammates join the list, and then their initials appear in the
  pane's header to show they have opened the tracker. It teaches that you
  share a custom artifact by opening Share, adding your teammates, and giving
  them access to change the shared entries, and that they open it from its
  link and see the same checkmarks.
</Copy>
<Copy k="widget.description.tools">
  Animation: the user asks Claude to use a connected tool in a sample team
  priorities tracker. With Google Calendar turned on under Connectors in the
  message box's menu, the message asks Claude to show who's out of office this
  week, using the team's Google Calendar. Claude replies, and in the artifact
  pane a tag arrives on one teammate's tasks that says which days that
  teammate is out. It teaches that a custom artifact can read from tools
  you've connected to Claude, in this case a calendar, and show that
  information in the artifact.
</Copy>
<Copy k="widget.summary.claude">
  Animation: the user asks for a button on a team priorities tracker that uses
  Claude to write a team update. The button is pressed, and Claude drafts the
  update inside the artifact.
</Copy>
<Copy k="widget.summary.save">
  Animation: the user asks Claude to save the checkmarks on a team priorities
  tracker. When the tracker is opened the next day, yesterday's checkmarks are
  still there.
</Copy>
<Copy k="widget.summary.share">
  Animation: Share opens on a team priorities tracker, and two teammates are
  added. They open the tracker from its link and see the same checkmarks.
</Copy>
<Copy k="widget.summary.tools">
  Animation: the user asks Claude to show who's out of office on a team
  priorities tracker. The artifact uses a connected tool, Google Calendar, to
  tag a teammate who is out.
</Copy>
`;export{e as default};