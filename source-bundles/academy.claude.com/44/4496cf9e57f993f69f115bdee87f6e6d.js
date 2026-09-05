var e=`---
kind: widget-copy
---

{/* Film for the “Build a clickable prototype” use case. \`line.*\` are the one
    sentence shown per chapter; a phrase in [[double brackets]] is the part
    the film underlines — keep the brackets around the equivalent words.
    \`prompt\` is typed on screen. \`reply.did*\` are the phrases of the reply the
    film marks, in reading order: keep each one verbatim in \`reply.text\`.
    \`again.underline\` must be a word that appears in \`line.again\`. Company,
    people, file and channel names and the figures are simulated data: keep
    them as they are. */}

<Copy k="title">Build a clickable prototype</Copy>
<Copy k="sub">
  You need a version of a new flow that people can actually click through.
</Copy>

<Copy k="line.ask">
  With the Design plugin’s [[handoff skill]], give the spec and tokens, and
  allow only library components.
</Copy>
<Copy k="line.does">
  Claude reads the spec, your tokens, the design frames and the component code
  first.
</Copy>
<Copy k="line.question">
  Wherever a decision is yours to make, Claude asks instead of guessing.
</Copy>
<Copy k="line.get">
  Claude tells you what it built, then gives you a [[page]] for the browser.
</Copy>
<Copy k="line.note1">
  Every control is a library component, and the navigation between screens
  works.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note1.at1">library component</Copy>
<Copy k="line.note2">
  Both options sit in one prototype, so a participant can try each.
</Copy>

{/* Anchors for the film's hand-drawn marks: keep each phrase
    word-for-word as it appears in the sentence above. */}
<Copy k="line.note2.at1">Both options</Copy>
<Copy k="line.again">
  You can schedule a rebuild each morning so the prototype follows the spec.
</Copy>
<Copy k="line.close">
  You can test a prototype that behaves like the real product.
</Copy>

<Copy k="attachment1.title">Prototypes / Invite-Flow</Copy>
<Copy k="attachment1.sub">Spec, tokens, stylesheet</Copy>
<Copy k="attachment1.tag">Folder</Copy>
<Copy k="attachment2.title">invite-flow-spec.docx</Copy>
<Copy k="attachment2.sub">Four screens, two role variants</Copy>
<Copy k="attachment2.tag">DOCX</Copy>
<Copy k="attachment3.title">tokens.json</Copy>
<Copy k="attachment3.sub">With design-system.css</Copy>
<Copy k="attachment3.tag">JSON</Copy>

<Copy k="placeholder">Type / for skills</Copy>
<Copy k="prompt">
  Build a clickable HTML prototype of the flow in this folder. [[Use only our
  design system library's components]]. [[Wire up the navigation]], use
  realistic placeholder data, and write it to prototype/index.html so I can
  click through in a browser.
</Copy>

<Copy k="source1.verb">Read</Copy>
<Copy k="source1.text">invite-flow-spec.docx, 4 screens</Copy>
<Copy k="source2.verb">Read</Copy>
<Copy k="source2.text">tokens.json and design-system.css</Copy>
<Copy k="source3.verb">Read</Copy>
<Copy k="source3.text">Invite flow frames in Cobalt — Web, 4 frames</Copy>
<Copy k="source4.verb">Read</Copy>
<Copy k="source4.text">cobalt/ui components, 7 used</Copy>

<Copy k="verb1">Reading invite-flow-spec.docx</Copy>
<Copy k="verb2">Reading tokens.json and design-system.css</Copy>
<Copy k="verb3">Reading the Invite frames in Figma</Copy>
<Copy k="verb4">Reading cobalt/ui components</Copy>
<Copy k="verb5">Building the screens</Copy>
<Copy k="verb6">Waiting for you</Copy>
<Copy k="verb7">Wiring the navigation</Copy>
<Copy k="verb8">Writing prototype/index.html</Copy>

<Copy k="question.title">
  Build the role dropdown, the separate step, or both?
</Copy>
<Copy k="question.option1">Both, with a switch to compare</Copy>
<Copy k="question.option2">Only the dropdown per row</Copy>
<Copy k="question.option3">Only the separate step</Copy>
<Copy k="question.answer">Both, with a switch to compare.</Copy>

<Copy k="reply.did1">from seven @cobalt/ui components</Copy>
<Copy k="reply.did2">wired all four screens</Copy>
<Copy k="reply.did3">Back keeps what you typed</Copy>
<Copy k="reply.did4">with realistic member data</Copy>
<Copy k="reply.text">
  I built prototype/index.html from seven @cobalt/ui components with
  tokens.json and design-system.css unchanged, and wired all four screens:
  Members → Invite → Roles → Sent work, and Back keeps what you typed. Both
  role variants are in it behind the A/B switch, as you chose, with realistic
  member data.
</Copy>
<Copy k="file1.meta">Interactive artifact</Copy>

<Copy k="again.bubble">
  {when}: if the spec or the Figma frames changed, rebuild
  prototype/index.html from library components only and bump the version
  stamp.
</Copy>
<Copy k="again.bubble.when">Weekdays at 7am</Copy>
<Copy k="again.underline">schedule</Copy>
<Copy k="again.card.title">Prototype rebuild</Copy>
<Copy k="again.card.cadence">Weekdays at 7:00 AM</Copy>
<Copy k="again.out1">
  Checks Prototypes / Invite-Flow and the Figma file for changes
</Copy>
<Copy k="again.out2">
  Rebuilds prototype/index.html from library components only
</Copy>
<Copy k="again.out3">Bumps the version stamp</Copy>
<Copy k="again.out3.em">so testers know which build they saw</Copy>
`;export{e as default};