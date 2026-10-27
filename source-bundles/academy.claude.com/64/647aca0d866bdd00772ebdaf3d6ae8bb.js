var e=`---
kind: widget-copy
---

{/* Learner-facing copy for SetUpMap.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. The \`caption.*\` texts are side
    notes about Kofi, in the third person. The \`box.*\` texts are the
    product's own labels. The \`ask.text\` text is the person's first message
    in the recorded run, whole. The \`asked.answer*\` texts are the answers
    the person typed on the cards in that run. Every other text is Claude's,
    word for word from a recorded run of the skill that maps where records
    are kept. Claude's words are
    shown in part: sentences, questions, choices and rows of the map are
    left out. None is reworded: do not shorten or join Claude's sentences
    here. In the run each answer was typed in the card's own-answer row, not
    picked, so the walkthrough shows it typed. The card is the run's first
    card: its three questions, in its order, each with the answer typed to
    it in the run. Do not put a question from another card on it. The
    \`asked.q<n>.opt*\` texts are the choices that question offered in the
    run, in its order, without the choices that name a product. The map is
    the map in Claude's third reply, and it shows the row for every answer
    on the card. This file names no product: do not add a product's name
    anywhere in it. */}

<Copy k="stageAlt">
  Kofi asks Claude to ask him about each kind of record, put his answers in a
  map, and show him the map before it saves it. Parts of Claude's replies are
  shown, with other parts left out. Claude agrees. It says that there are 11
  kinds of records and that it will ask about them three at a time. It says
  Kofi can pick a choice or type his own answer. It says it will show Kofi the
  whole map in the chat and save it only once he tells it the map is right,
  and that the map will hold the names of tools and places only, with no
  people's names, addresses, or dollar amounts. On a card, one question at a
  time, Claude asks where three kinds of record live. Each question comes with
  choices, and Kofi types his own answer to each: official written documents
  are in our shared drive; compliance, rules, and reference documents are in
  our shared drive; and donor and gift records are in our donor database.
  Claude then says that nothing is saved yet. Three rows of the map are shown
  as a table, in Kofi's words: official written documents are in our shared
  drive; compliance, rules, and reference documents are in our shared drive;
  and donor and gift records are in our donor database. On a card Claude asks
  whether the map is right and whether to save it. Kofi picks the choice to
  save it as it is. Claude says the map is saved, and that in later chats it
  will check this map first, so Kofi won't need to explain where Maple
  Hollow's records are.
</Copy>
<Copy k="caption.ask">Kofi asks to see the map before Claude saves it</Copy>
<Copy k="caption.asks">Claude asks where Maple Hollow keeps its records</Copy>
<Copy k="caption.map">Claude shows Kofi the map, in his words, before saving it</Copy>
<Copy k="caption.saved">Claude saves the map after Kofi confirms</Copy>

<Copy k="box.placeholder">How can I help you today?</Copy>
<Copy k="box.add">Add files</Copy>
<Copy k="box.send">Send message</Copy>
<Copy k="actions.label">Message actions</Copy>

<Copy k="ask.text">
  I want to stop explaining where our records are in every chat. Can you ask
  me about each kind of record and put my answers in a map? Show me the map
  before you save it.
</Copy>

<Copy k="plan.para1">
  Yes. There are 11 kinds of records to go through, and I'll ask about them
  three at a time. Pick a choice or type your own answer.
</Copy>
<Copy k="plan.para2">
  After the last question I'll show you the whole map here in the chat, and
  I'll save it only once you tell me it's right. The map will hold the names
  of tools and places only, with no people's names, addresses or dollar
  amounts.
</Copy>

<Copy k="asked.question1">Where do your official written documents live?</Copy>
<Copy k="asked.q1.opt1">On a computer</Copy>
<Copy k="asked.q1.opt2">We don't track this</Copy>
<Copy k="asked.answer1">Our shared drive</Copy>
<Copy k="asked.question2">
  Where do your compliance, rules and reference documents live?
</Copy>
<Copy k="asked.q2.opt1">On a computer</Copy>
<Copy k="asked.q2.opt2">We don't track this</Copy>
<Copy k="asked.answer2">Our shared drive</Copy>
<Copy k="asked.question3">Where do your donor and gift records live?</Copy>
<Copy k="asked.q3.opt1">We don't track this</Copy>
<Copy k="asked.answer3">Our donor database</Copy>

<Copy k="map.intro">Nothing is saved yet.</Copy>
<Copy k="map.head.kind">Kind of record</Copy>
<Copy k="map.head.place">Where it lives</Copy>
<Copy k="map.kind1">Official written documents</Copy>
<Copy k="map.place1">Our shared drive</Copy>
<Copy k="map.kind2">Compliance, rules and reference documents</Copy>
<Copy k="map.place2">Our shared drive</Copy>
<Copy k="map.kind3">Donor and gift records</Copy>
<Copy k="map.place3">Our donor database</Copy>

<Copy k="save.question">Is this map right, and should I save it?</Copy>
<Copy k="save.opt1">Yes, save it as it is</Copy>
<Copy k="save.opt2">Change something first</Copy>
<Copy k="save.opt3">Don't save it</Copy>

<Copy k="saved.text">
  Saved. In later chats I'll check this map first, so you won't need to
  explain where your records are.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 471fcf5b55f59144 */}
<Copy k="widget.description">
  Walkthrough: a Claude chat where a nonprofit staff
  member asks Claude to find out where each kind of organizational record is
  kept and build a map of it before saving anything. The user watches Claude
  explain that it will ask about each kind of record a few at a time, then ask
  its questions one by one on a card, accepting either a picked choice or a
  typed answer. Claude then displays the completed map as a table pairing each
  kind of record with where it lives, states that nothing is saved yet, and
  asks the user to confirm the map is correct before saving. Once confirmed,
  Claude saves the map and explains that future chats will check it first, so
  the location of records won't need to be re-explained. It teaches how this
  setup skill gathers and confirms recordkeeping information before committing
  it to memory.
</Copy>
<Copy k="widget.summary">
  Walkthrough: step through a Claude chat where the user has Claude ask where
  each kind of record is kept, then review a map of the answers before saving
  it to memory, so later chats can check the map first.
</Copy>
`;export{e as default};