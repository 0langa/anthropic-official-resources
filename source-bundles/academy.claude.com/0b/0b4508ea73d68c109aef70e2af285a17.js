var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SaveYourProcess.tsx. Keys are machine identifiers:
    translate ONLY the text between the tags.

    The widget is one small still picture: three cards with an arrow between
    each pair and a label over each. The picture is hidden from a screen reader,
    so \`aria.root\` has to say what it shows.

    1. \`lab.describe\` sits over a conversation holding one long message from
       you. \`ask.long\` is its first sentence, which is also the first sentence
       of the example prompt under the picture; the rest is drawn as lines.
    2. \`lab.writes\` sits over the skill. \`skill.name\` is the example the section
       uses, \`skill.tag\` is the product's word for a skill, and \`skill.line1\` to
       \`skill.line4\` are the four things that example prompt asks for, in its
       order and close to its words.
    3. \`lab.each\` sits over a second conversation: \`ask.short\`, a message of a
       few words, and the deck it gets, on a pile of earlier decks.

    Room: \`lab.describe\` and \`lab.writes\` hold about 28 characters on one line,
    \`lab.each\` about 38, \`ask.long\` about 50 in two lines, a skill line about
    26, \`ask.short\` about 24, \`skill.name\` about 20. */}

<Copy k="aria.root">Three steps. In a long message, you describe how you make the Monday status deck. Claude writes it down as a skill with four lines: pull last week’s updates, five slides, for the team leads, check each number. After that, a short message, "This week’s deck", gets the deck each time you ask</Copy>

<Copy k="lab.describe">Describe your process</Copy>
<Copy k="lab.writes">Claude writes the skill</Copy>
<Copy k="lab.each">Claude follows it each time you ask</Copy>

<Copy k="ask.long">Make a skill for my Monday status deck.</Copy>
<Copy k="ask.short">This week’s deck</Copy>

<Copy k="skill.name">Monday status deck</Copy>
<Copy k="skill.tag">Skill</Copy>
<Copy k="skill.line1">Pull last week’s updates</Copy>
<Copy k="skill.line2">Five slides</Copy>
<Copy k="skill.line3">For the team leads</Copy>
<Copy k="skill.line4">Check each number</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: de6d32144223e5f5 */}
<Copy k="widget.description">
  Diagram: three steps for saving your process as a skill, with a weekly
  status deck as the example. First, you describe your process to Claude in
  one long message. Next, Claude writes the skill, which lists where the
  updates come from, how long the deck is, who it is for, and what to check.
  After that, a message of a few words gets the deck, which rests on a pile of
  earlier decks. It teaches that a skill holds your format and your checks, so
  you explain them once and Claude follows them each time you ask for that
  work.
</Copy>
<Copy k="widget.summary">
  Diagram: you describe how you make a weekly status deck, Claude writes that
  down as a skill, and after that a short message gets the deck each time you
  ask.
</Copy>
`;export{e as default};