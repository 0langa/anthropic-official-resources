var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SetUpVoice.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. \`{count}\` is a number of files
    and must survive verbatim. The \`caption.*\` texts are side notes about
    Kofi, in the third person. They also set how long each step holds on
    screen, so keep them caption-short. The \`activity.*\` and \`box.*\` texts
    are the product's own labels. \`ask.text\` and \`fix.text\` are the person's
    recorded messages, whole. Every other text (\`rules.*\`, \`sample.*\`,
    \`card.*\`, \`rule.*\`, \`changed.*\`, \`card2.*\`, \`saved.*\`) is Claude's,
    shown in part, word for word, from the recording, a run of the voice guide
    skill on fictional documents: whole sentences, bullets, questions and
    sections are left out, and none is reworded. Do not shorten or join
    Claude's sentences here. The sample post (\`sample.line*\`) is whole.
    Square brackets in the sample are blanks Claude left: translate the
    words inside and keep the brackets. The \`card.*\` and \`card2.*\` texts
    are the first question on each of Claude's two cards and its choices,
    as written. In the recording the person attached the three pieces to
    the message, and no tool was connected. The picture shows no file tiles
    on the message. Every organization and person is fictional. */}

<Copy k="stageAlt">
  Kofi asks Claude to learn how Maple Hollow writes from three pieces of Maple
  Hollow's writing: its spring appeal, its year-end appeal, and its welcome
  letter to families. Kofi asks it to show him the guide and a sample. Claude
  reads three of Maple Hollow's documents. Parts of Claude's replies are
  shown, and other parts are left out. First, Claude says it made a draft from
  the three pieces Kofi named, that nothing is saved yet, and that it will
  save the draft once Kofi tells it the draft sounds like Maple Hollow. Part
  of the draft guide follows. Its title is Organization voice guide: Maple
  Hollow After-School Project, and it names the three pieces it was made from.
  Under the heading What they call people and places, it says the word for
  people who give is neighbor, and the words for giving money or time are
  pitch in. Under How it sounds, it says sentences are short and most are
  under ten words. Under Sign-off, it says all three pieces end with See you
  in the Reading Room, then the signer's name and title. Each of these rules
  comes with words from Maple Hollow's own pieces. Second, a sample: a short
  post about the Reading Room, shown whole. It opens on Monday at 3:30 in Room
  12. It has a blank in square brackets for one true moment from this week,
  and a blank for the day of a visit. Its invitation ends with a line that
  says there is a small chair for the reader. Claude says the sample is in
  Maple Hollow's voice, that every fact in it comes from Maple Hollow's three
  pieces, and that the two brackets are for things it does not know. On a card
  Claude asks whether the sample sounds like Maple Hollow. Kofi picks the
  choice that says it is close and he has a few fixes. Kofi says that one line
  is off, the line about the small chair, because nobody does anything in it.
  Kofi says that when Maple Hollow invites someone in, a person does
  something, the way the spring appeal does. Claude says Kofi is right. It
  says it checked all three pieces and every invitation has a person doing
  something, and that it fixed the sample and added Kofi's rule to the draft
  guide. It says nothing is saved yet. Under the heading Three changes to the
  draft guide, it shows the first change, the new rule, before and after.
  Before, the guide had no rule for inviting someone in. After, a new line
  under How it sounds says that when Maple Hollow invites someone in, a person
  does something, with two lines from Maple Hollow's pieces as examples. Then
  Claude shows the paragraph of the sample with the line fixed: the reader
  pulls up a small chair, and a student reads them a page. Claude says the two
  new lines are its own, written to Kofi's rule, and that the spring appeal's
  lines fit there if Kofi would rather keep Maple Hollow's own words. On a
  second card Claude asks whether it sounds like Maple Hollow with that line
  fixed, and Kofi picks the choice to save it. Claude then says the guide is
  saved in memory, so later chats can find it and write in Maple Hollow's
  voice, and that it saved the guide because Kofi said it sounds like Maple
  Hollow.
</Copy>
<Copy k="caption.ask">Kofi asks Claude to learn Maple Hollow's voice from three past letters</Copy>
<Copy k="caption.rules">Claude drafts the guide, with quotes from the letters</Copy>
<Copy k="caption.sample">Claude writes a sample in Maple Hollow's voice</Copy>
<Copy k="caption.fix">Kofi tells Claude which line sounds off and why</Copy>
<Copy k="caption.rule">Claude adds Kofi's rule to the draft guide</Copy>
<Copy k="caption.changed">Claude rewrites the line that sounded off</Copy>
<Copy k="caption.saved">Claude saves the guide after Kofi confirms</Copy>

<Copy k="box.placeholder">How can I help you today?</Copy>
<Copy k="box.add">Add files</Copy>
<Copy k="box.send">Send message</Copy>
<Copy k="actions.label">Message actions</Copy>
<Copy k="ask.text">
  Can you learn how we write, so your drafts sound like us? Work from our spring appeal, our year-end appeal and our welcome
  letter to families. Show me the guide and a sample so I can check it
  sounds right.
</Copy>
<Copy k="activity.reading">Reading files</Copy>
<Copy k="activity.read">Read {count} files</Copy>
<Copy k="activity.readOne">Read</Copy>

<Copy k="rules.intro">
  I made a draft from the three pieces you named. Nothing is saved yet. I
  will save it once you tell me it sounds like you.
</Copy>
<Copy k="rules.heading">Draft guide</Copy>
<Copy k="rules.title">Organization voice guide: Maple Hollow After-School Project</Copy>
<Copy k="rules.from">
  Made from: Spring appeal 2026, Year-end appeal 2025, Welcome letter to
  families August 2026.
</Copy>
<Copy k="rules.names.title">What they call people and places</Copy>
<Copy k="rules.names.item1">
  People who give: "neighbor". Appeals open "Dear neighbor," and close by
  thanking the neighbor.
</Copy>
<Copy k="rules.names.item2">Giving money or time: "pitch in". Also "give" and "gift".</Copy>
<Copy k="rules.sound.title">How it sounds</Copy>
<Copy k="rules.sound.item1">
  Short sentences. Most are under ten words. Fragments are fine: "Out loud.
  One page at a time."
</Copy>
<Copy k="rules.signoff.title">Sign-off</Copy>
<Copy k="rules.signoff.text">
  "See you in the Reading Room," then the signer's name, then their title.
  All three pieces end this way.
</Copy>

<Copy k="sample.title">Sample: a short post about the Reading Room</Copy>
<Copy k="sample.line1">
  Monday at 3:30, Room 12. Students sign in. Snack comes first. Then the
  books come out.
</Copy>
<Copy k="sample.line2">
  [One true moment from this week. Two or three short lines. No student
  names.]
</Copy>
<Copy k="sample.line3">
  This is the Reading Room. Monday to Thursday, students in grades 1 to 5
  read with a reading coach in a small group. Then each student reads one to
  one with a volunteer tutor. We go until 5:30.
</Copy>
<Copy k="sample.line4">Families pay nothing. Every student takes home books to keep.</Copy>
<Copy k="sample.line5">
  Come and see it. [Day] at 3:30, the Community Room at the Hollow Branch
  library. There is a small chair for you.
</Copy>
<Copy k="sample.line6">See you in the Reading Room.</Copy>
<Copy k="sample.note">
  This sample is in Maple Hollow's voice, from the draft guide above. Every
  fact in it comes from your three pieces. The two brackets are for things I
  do not know: a true moment from this week, and the day you want visitors.
</Copy>

<Copy k="card.sample">Does the sample sound like Maple Hollow?</Copy>
<Copy k="card.sample.opt1">Yes, that is us</Copy>
<Copy k="card.sample.opt2">Close. I have a few fixes</Copy>
<Copy k="card.sample.opt3">Not yet</Copy>

<Copy k="fix.text">
  It is close. One line is off: "There is a small chair for you." Nobody
  does anything in that line. When we invite someone in, a person does
  something, the way the spring appeal does: "Pull up a chair. A student
  will be glad to read to you."
</Copy>

<Copy k="rule.intro">
  You are right. I checked all three pieces. Every invitation has a person
  doing something, and "There is" and "There are" never appear in them at
  all. I fixed the sample and added your rule to the draft guide.
</Copy>
<Copy k="rule.unsaved">
  Nothing is saved yet. I will save the guide when you say it sounds right.
</Copy>
<Copy k="rule.heading">Three changes to the draft guide</Copy>
<Copy k="rule.title">1. Inviting someone in (new rule, from you)</Copy>
<Copy k="rule.before">
  Before: the guide had no rule for this. It only said an appeal has "An
  invitation to visit, with the day, time and room."
</Copy>
<Copy k="rule.after">
  After, a new line under "How it sounds": "When we invite someone in, a
  person does something: the neighbor, a student, or we. 'Pull up a chair. A
  student will be glad to read to you.' 'We will save you a small chair.'
  Never a line where nobody does anything, such as 'There is a small chair
  for you.'"
</Copy>

<Copy k="changed.title">The sample, with the line fixed</Copy>
<Copy k="changed.line">
  Come and see it. [Day] at 3:30, the Community Room at the Hollow Branch
  library. Pull up a small chair. A student will read you a page.
</Copy>
<Copy k="changed.note">
  The two new lines at the end are mine, written to your rule: the neighbor
  pulls up the chair, and a student reads. If you would rather keep your own
  words, the spring appeal's lines fit here exactly as they are.
</Copy>

<Copy k="card2.sample">With that line fixed, does it sound like Maple Hollow?</Copy>
<Copy k="card2.sample.opt1">Yes, save it</Copy>
<Copy k="card2.sample.opt2">One more fix</Copy>
<Copy k="card2.sample.opt3">Not yet</Copy>

<Copy k="saved.text">
  Saved. The guide is in memory now, so later chats can find it and write in
  Maple Hollow's voice. I saved it because you said it sounds like you.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: c8360fcf5419f9a3 */}
<Copy k="widget.description">
  Walkthrough: a Claude chat where a nonprofit staff member
  asks Claude to learn their organization's writing voice from a few past
  pieces of writing, so future drafts sound consistent. Claude reads the
  documents, then produces a draft voice guide covering word choices for the
  people and places the organization mentions, sentence style, and how
  messages are signed off, each rule illustrated with examples pulled from the
  source writing. Claude then writes a short sample message in that voice and
  explains which facts in it come from the source documents. The user reviews
  the sample, flags a specific line that doesn't fit the organization's voice,
  and explains the underlying rule it violates; Claude revises both the guide
  and the sample accordingly before saving the finished guide. It illustrates
  how a voice guide is built collaboratively and refined through specific
  feedback rather than approved wholesale.
</Copy>
<Copy k="widget.summary">
  Walkthrough: the user steps through a Claude chat where Claude drafts a
  voice guide from past writing samples, proposes a sample message, then
  revises a line after the user flags it. Shows how feedback refines a saved
  voice guide.
</Copy>
`;export{e as default};