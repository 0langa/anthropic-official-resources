var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx — the pK-12 train-the-trainer
    workshop deck (see academy-web src/components/mdx/WidgetCopy.tsx).
    Keys are machine identifiers — translate ONLY the text between the
    tags. \`{name}\` tokens are runtime placeholders and must survive
    verbatim. Slides read top to bottom as \`s<n>.*\` (n = slide position);
    each slide's speaker notes are the run \`s<n>.note1…\`, where a \`{lead}\`,
    \`{tip}\` or \`{activity}\` token is the bolded lead-in and any other token
    (\`{ferpa}\`) is link text, each held at the matching sub-key. Chrome,
    download-menu and exported-document strings come first. */}

<Copy k="toolbar.notes">Speaker notes</Copy>
<Copy k="toolbar.download">Download ▾</Copy>
<Copy k="dl.deck">Deck</Copy>
<Copy k="dl.deckPdf">Deck as PDF</Copy>
<Copy k="dl.deckHtml">Deck as HTML</Copy>
<Copy k="dl.guide">Facilitator guide (slides + key points)</Copy>
<Copy k="dl.guidePdf">Guide as PDF</Copy>
<Copy k="dl.guideHtml">Guide as HTML</Copy>

<Copy k="nav.back">Back</Copy>
<Copy k="nav.next">Next</Copy>
<Copy k="jump.aria">Jump to section</Copy>
<Copy k="jump.placeholder">Jump to section...</Copy>
<Copy k="jump.welcome">Welcome</Copy>
<Copy k="jump.inner">Inner loop</Copy>
<Copy k="jump.outer">Outer loop</Copy>
<Copy k="jump.close">Close</Copy>
<Copy k="count.aria">Go to slide number</Copy>
<Copy k="count.of">{current} / {total}</Copy>
<Copy k="foot">Anthropic x AFT</Copy>

<Copy k="pdf.slides">Download slides as PDF</Copy>
<Copy k="pdf.html">Download deck as HTML</Copy>
<Copy k="pdf.note">
  Opens your browser print dialog: choose “Save as PDF” to download all
  slides.
</Copy>

<Copy k="notes.heading">Speaker notes</Copy>

<Copy k="fac.name.placeholder">Your name, school or organization</Copy>
<Copy k="fac.bio.placeholder">
  Add a few sentences about yourself: your background, your experience with
  AI in education, and what brought you to this work.
</Copy>
<Copy k="fac.note.initial">
  Type here to personalize this slide. It saves in this browser so it is
  ready when you present.
</Copy>
<Copy k="fac.note.saved">Saved in this browser.</Copy>
<Copy k="fac.note.unavailable">
  Autosave unavailable; your text will not persist.
</Copy>

{/* exported documents (Download menu): page titles, the facilitator-guide
    header, and the strings the standalone deck's control script shows */}
<Copy k="doc.title">AI Fluency pK-12 Train the Trainer</Copy>
<Copy k="doc.print.title">Train the Trainer slides</Copy>
<Copy k="doc.print.popups">
  Please allow pop-ups to download the slides as a PDF.
</Copy>
<Copy k="doc.rehtml.title">AI Fluency pK-12 Train the Trainer deck</Copy>
<Copy k="guide.brand">AFT x Anthropic</Copy>
<Copy k="guide.title">AI Fluency for pK-12 · Train the Trainer</Copy>
<Copy k="guide.subtitle">Facilitator Guide: slides and key points</Copy>
<Copy k="guide.activity">Activity</Copy>

{/* section names (facilitator-guide fallback title for slides without one) */}
<Copy k="sec.title">Title</Copy>
<Copy k="sec.welcome">Welcome</Copy>
<Copy k="sec.opening">Opening exercise</Copy>
<Copy k="sec.guiding">Guiding principles</Copy>
<Copy k="sec.why">Why AI fluency</Copy>
<Copy k="sec.framework">The 4D Framework</Copy>
<Copy k="sec.inner">Inner loop</Copy>
<Copy k="sec.outer">Outer loop</Copy>
<Copy k="sec.close">Commit and close</Copy>
<Copy k="sec.thanks">Thank you</Copy>

{/* slide 1 — title */}
<Copy k="s1.pill">Anthropic x AFT</Copy>
<Copy k="s1.stitle">AI Fluency for pK-12 Educators</Copy>
<Copy k="s1.kicker">Train the Trainer</Copy>
<Copy k="s1.note1">
  Open warmly as people arrive and keep the energy low-key.
</Copy>
<Copy k="s1.note2">
  Introduce yourself in one line and name the goal: leave today able to use AI
  well and to teach others to.
</Copy>
<Copy k="s1.note3">
  {lead} this is hands-on and judgment-first, not a tech lecture.
</Copy>
<Copy k="s1.note3.lead">Set the tone:</Copy>

{/* slide 2 — outcomes */}
<Copy k="s2.eyebrow">Welcome</Copy>
<Copy k="s2.stitle">Outcomes</Copy>
<Copy k="s2.lead">Participants will be able to:</Copy>
<Copy k="s2.li1">Define AI fluency</Copy>
<Copy k="s2.li2">Apply the 4D Framework as a mental model for AI use</Copy>
<Copy k="s2.li3">Prompt AI and Check AI outputs effectively</Copy>
<Copy k="s2.li4">Connect AI fluency to existing professional skills</Copy>
<Copy k="s2.note1">
  Name the four out loud: define AI fluency, apply the 4Ds, prompt and check
  outputs, connect AI to skills teachers already have.
</Copy>
<Copy k="s2.note2">Frame them as a promise for the session, not a test.</Copy>
<Copy k="s2.note3">{lead} everything today ladders up to these four.</Copy>
<Copy k="s2.note3.lead">Point ahead:</Copy>

{/* slide 3 — meet your facilitator (editable) */}
<Copy k="s3.eyebrow">Welcome</Copy>
<Copy k="s3.stitle">Meet your facilitator</Copy>
<Copy k="s3.note1">
  This slide is editable; personalize your name and background before you
  present.
</Copy>
<Copy k="s3.note2">
  Share one real, relatable AI moment of your own to lower the stakes.
</Copy>
<Copy k="s3.note3">
  {tip} Type your details in ahead of time; they save in your browser.
</Copy>
<Copy k="s3.note3.tip">Tip:</Copy>

{/* slide 4 — built by educators */}
<Copy k="s4.eyebrow">Welcome</Copy>
<Copy k="s4.stitle">
  Built by educators, for educators, so you can lead this transition on your
  own terms.
</Copy>
<Copy k="s4.p">
  A free, openly-licensed course and train-the-trainer kit. Adapt it. Remix
  it. Bring it home with your name on it.
</Copy>
<Copy k="s4.note1">
  Everything here is free and openly licensed under CC BY-NC-SA.
</Copy>
<Copy k="s4.note2">
  Encourage teachers to adapt it, remix it, and run it in their own voice with
  their own examples.
</Copy>
<Copy k="s4.note3">{lead} you are not locked into a script.</Copy>
<Copy k="s4.note3.lead">Reassure:</Copy>

{/* slide 5 — learning norms */}
<Copy k="s5.eyebrow">Welcome</Copy>
<Copy k="s5.stitle">Learning norms</Copy>
<Copy k="s5.card1.h">Use your voice</Copy>
<Copy k="s5.card1.p">Speak up, ask questions, share your perspective.</Copy>
<Copy k="s5.card2.h">Honor collaboration</Copy>
<Copy k="s5.card2.p">Learn from and with your peers.</Copy>
<Copy k="s5.card3.h">Participate actively</Copy>
<Copy k="s5.card3.p">Engage fully in all activities.</Copy>
<Copy k="s5.card4.h">Be flexible</Copy>
<Copy k="s5.card4.p">Embrace new ideas and approaches.</Copy>
<Copy k="s5.card5.h">Respect differing opinions</Copy>
<Copy k="s5.card5.p">Value multiple perspectives in the room.</Copy>
<Copy k="s5.card6.h">Share your gift</Copy>
<Copy k="s5.card6.p">Bring your unique expertise to the group.</Copy>
<Copy k="s5.note1">
  Walk the norms quickly: use your voice, collaborate, participate, be
  flexible, respect other views, share your gift.
</Copy>
<Copy k="s5.note2">Invite the room to add one of their own.</Copy>
<Copy k="s5.note3">
  Keep it under a minute; the point is a safe, active space.
</Copy>

{/* slide 6 — agenda */}
<Copy k="s6.eyebrow">Welcome</Copy>
<Copy k="s6.stitle">Agenda</Copy>
<Copy k="s6.row1">
  {lead} The 4D Framework and Part A: the inner loop.
</Copy>
<Copy k="s6.row1.lead">Introduction to the 4Ds.</Copy>
<Copy k="s6.row2">{lead} 15 min: water, stretch, refill.</Copy>
<Copy k="s6.row2.lead">Break.</Copy>
<Copy k="s6.row3">
  {lead} Delegation and Diligence, plus four grade-band exercises. 75 min.
</Copy>
<Copy k="s6.row3.lead">Part B: the outer loop.</Copy>
<Copy k="s6.row4">
  {lead} One real task you will run the loop on this week. 15 min.
</Copy>
<Copy k="s6.row4.lead">Commit and close.</Copy>
<Copy k="s6.note1">
  Preview the shape: Part A is the inner loop, then a break, then Part B is
  the outer loop, with grade-band exercises throughout.
</Copy>
<Copy k="s6.note2">
  Flag the hands-on blocks so people know when they will practice.
</Copy>
<Copy k="s6.note3">Set expectations on total time.</Copy>

{/* slide 7 — warm up */}
<Copy k="s7.eyebrow">Opening exercise</Copy>
<Copy k="s7.stitle">Warm up</Copy>
<Copy k="s7.have">Have you ever...?</Copy>
<Copy k="s7.q1">Used an AI tool to write a quiz or lesson plan?</Copy>
<Copy k="s7.q2">Felt unsure if an AI-generated resource was accurate?</Copy>
<Copy k="s7.q3">Wondered if students are submitting AI-written work?</Copy>
<Copy k="s7.q4">Copy-pasted AI output without reviewing it?</Copy>
<Copy k="s7.q5">Wanted to use AI but didn’t know where to start?</Copy>
<Copy k="s7.turn">Your Turn</Copy>
<Copy k="s7.step1.b">Silently check off any that apply to you</Copy>
<Copy k="s7.step1.time">1 min</Copy>
<Copy k="s7.step2.b">Turn to a partner: share one that resonated</Copy>
<Copy k="s7.step2.time">2 min</Copy>
<Copy k="s7.step3.b">Table groups: What patterns do you notice?</Copy>
<Copy k="s7.step3.time">5 min</Copy>
<Copy k="s7.goal">The goal isn’t perfection: it’s awareness.</Copy>
<Copy k="s7.debrief">
  Debrief: The 4D Framework was designed to address exactly those moments.
</Copy>
<Copy k="s7.note1">
  Goal is awareness, not perfection; surface the AI moments teachers already
  have.
</Copy>
<Copy k="s7.note2">
  {activity} Silent check-in for 1 minute, then pair-share for 2, then a few
  voices to the room.
</Copy>
<Copy k="s7.note2.activity">ACTIVITY:</Copy>
<Copy k="s7.note3">
  Bridge into the framework: you are already doing pieces of this.
</Copy>

{/* slide 8 — three rules */}
<Copy k="s8.eyebrow">Guiding principles</Copy>
<Copy k="s8.stitle">Three rules before we start</Copy>
<Copy k="s8.card1.h">No prior knowledge assumed</Copy>
<Copy k="s8.card1.p">
  Whether you’ve never opened a chatbot or you use AI every day, you belong
  in this room. We’re building from wherever you are.
</Copy>
<Copy k="s8.card2.h">Use your district’s approved tool</Copy>
<Copy k="s8.card2.p">
  Use whichever AI tool your district has approved. The skills you practice
  today transfer across every tool: what you’re building is judgment, not
  just technique.
</Copy>
<Copy k="s8.card3.h">No identifying information</Copy>
<Copy k="s8.card3.p">
  No student names, IEP details, or anything that identifies a child goes
  into any AI tool: {stress}
</Copy>
<Copy k="s8.card3.p.stress">not today, not ever.</Copy>
<Copy k="s8.note1">
  {lead} no prior knowledge needed; use the district's approved tool; nothing
  identifying about kids, ever.
</Copy>
<Copy k="s8.note1.lead">Three rules:</Copy>
<Copy k="s8.note2">
  Rule 3 is the non-negotiable; say it plainly and pause.
</Copy>
<Copy k="s8.note3">
  {tip} Ask if anyone knows their district's approved tool and data policy.
</Copy>
<Copy k="s8.note3.tip">Tip:</Copy>

{/* slide 9 — the data */}
<Copy k="s9.eyebrow">Why AI fluency: the data</Copy>
<Copy k="s9.stitle">Why AI matters right now</Copy>
<Copy k="s9.stat1.n">87%</Copy>
<Copy k="s9.stat1.t">of K-12 students have used AI tools</Copy>
<Copy k="s9.stat2.n">60%</Copy>
<Copy k="s9.stat2.t">of teachers feel unprepared for AI</Copy>
<Copy k="s9.stat3.n">1 in 3</Copy>
<Copy k="s9.stat3.t">teachers use AI weekly for planning</Copy>
<Copy k="s9.stat4.n">2030</Copy>
<Copy k="s9.stat4.t">most jobs will require AI fluency</Copy>
<Copy k="s9.p">
  AI is not replacing teachers. But teachers who know AI will have an
  advantage.
</Copy>
<Copy k="s9.sources">Sources: {pew} · {rand} · {gallup}</Copy>
<Copy k="s9.sources.pew">Pew Research Center</Copy>
<Copy k="s9.sources.rand">RAND</Copy>
<Copy k="s9.sources.gallup">Gallup</Copy>
<Copy k="s9.note1">
  Students already use AI, and many teachers feel unprepared; sources from
  Gallup, Pew, and RAND are linked on the slide.
</Copy>
<Copy k="s9.note2">
  {lead} AI is not replacing teachers, but teachers who use it well will help
  those who do not.
</Copy>
<Copy k="s9.note2.lead">Land it:</Copy>
<Copy k="s9.note3">
  Keep it short; this is motivation, not a stats lecture.
</Copy>

{/* slide 10 — literacy vs. fluency */}
<Copy k="s10.eyebrow">Why AI fluency</Copy>
<Copy k="s10.stitle">Literacy vs. Fluency</Copy>
<Copy k="s10.stmt">
  You can know a lot about food without being a good cook.
</Copy>
<Copy k="s10.ask1.label">Digital literacy asks</Copy>
<Copy k="s10.ask1.q">“Can I use this technology?”</Copy>
<Copy k="s10.ask2.label">AI literacy asks</Copy>
<Copy k="s10.ask2.q">“Do I understand what this is?”</Copy>
<Copy k="s10.ask3.label">AI fluency asks</Copy>
<Copy k="s10.ask3.q">“Can I work with this well, on my own terms?”</Copy>
<Copy k="s10.note1">
  {lead} digital literacy asks can I use it, AI literacy asks do I understand
  it, AI fluency asks can I work with it well.
</Copy>
<Copy k="s10.note1.lead">Three levels:</Copy>
<Copy k="s10.note2">
  Use the food-and-cook analogy: knowing the ingredients is not the same as
  cooking.
</Copy>
<Copy k="s10.note3">Fluency is the goal today.</Copy>

{/* slide 11 — myths */}
<Copy k="s11.eyebrow">Why AI fluency</Copy>
<Copy k="s11.stitle">Demystifying AI fluency</Copy>
<Copy k="s11.tag.myth">Myth</Copy>
<Copy k="s11.tag.reality">Reality</Copy>
<Copy k="s11.myth1.m">
  Digital literacy and AI literacy are the same thing.
</Copy>
<Copy k="s11.myth1.r">
  Digital literacy is a broad understanding of technology. AI literacy goes
  further: understanding what AI is and how it works.
</Copy>
<Copy k="s11.myth2.m">AI fluency and AI literacy are the same thing.</Copy>
<Copy k="s11.myth2.r">
  AI literacy is understanding what AI is and how it works. AI fluency is
  translating that understanding into your own practice: using AI well in an
  ethical, efficient, and safe way.
</Copy>
<Copy k="s11.myth3.m">
  You need to be a tech expert to become AI fluent.
</Copy>
<Copy k="s11.myth3.r">
  AI fluency is built on professional judgement, critical thinking, domain
  knowledge, and your pedagogy, not technical expertise.
</Copy>
<Copy k="s11.myth4.m">
  Using AI well means using it as much as possible.
</Copy>
<Copy k="s11.myth4.r">
  Knowing when not to use AI is a core marker of fluency. More use does not
  equal more fluency.
</Copy>
<Copy k="s11.note1">Walk one myth and its reality.</Copy>
<Copy k="s11.note2">
  {lead} literacy is not the same as fluency; using a tool is not the same as
  working with it well.
</Copy>
<Copy k="s11.note2.lead">Key point:</Copy>
<Copy k="s11.note3">
  Invite a quick show of hands: which myth did you believe?
</Copy>

{/* slide 12 — 4D framework divider */}
<Copy k="s12.eyebrow">The 4D Framework</Copy>
<Copy k="s12.stitle">The 4D Framework for AI fluency</Copy>
<Copy k="s12.note1">Transition into the framework.</Copy>
<Copy k="s12.note2">
  {lead} the 4Ds are a repeatable way to work with AI, not a checklist to
  memorize.
</Copy>
<Copy k="s12.note2.lead">One line:</Copy>
<Copy k="s12.note3">Signal the shift from why to how.</Copy>

{/* slide 13 — you are the expert */}
<Copy k="s13.eyebrow">The 4D Framework</Copy>
<Copy k="s13.stitle">You are the expert in this room.</Copy>
<Copy k="s13.sub">
  You know your students, your standards, and your community in ways AI
  never will. AI can speed up the work, deciding what’s right for your
  students stays with you.
</Copy>
<Copy k="s13.note1">
  You know your students, standards, and community in ways AI never will.
</Copy>
<Copy k="s13.note2">
  Deciding what is right for your students always stays with you.
</Copy>
<Copy k="s13.note3">{lead} AI speeds the work; it does not make the call.</Copy>
<Copy k="s13.note3.lead">Reassure:</Copy>

{/* slide 14 — the four Ds (loop diagram + boxes) */}
<Copy k="s14.eyebrow">The 4D Framework</Copy>
<Copy k="s14.stitle">The 4D Framework for AI fluency</Copy>
<Copy k="s14.flow.aria">
  The 4D loop: Delegation and Diligence form the outer loop around the inner
  loop of Description and Discernment.
</Copy>
<Copy k="s14.d1.h">Delegation</Copy>
<Copy k="s14.d1.q">What tasks are right for AI?</Copy>
<Copy k="s14.d2.h">Description</Copy>
<Copy k="s14.d2.q">What do you need AI to do?</Copy>
<Copy k="s14.d3.h">Discernment</Copy>
<Copy k="s14.d3.q">Is AI’s output high quality?</Copy>
<Copy k="s14.d4.h">Diligence</Copy>
<Copy k="s14.d4.q">How do you take responsibility for AI outputs?</Copy>
<Copy k="s14.note1">
  {lead} the inner loop is Description and Discernment, the outer loop is
  Delegation and Diligence.
</Copy>
<Copy k="s14.note1.lead">Two loops:</Copy>
<Copy k="s14.note2">Walk all four Ds briefly, one sentence each.</Copy>
<Copy k="s14.note3">
  {lead} we practice the inner loop first, then the outer.
</Copy>
<Copy k="s14.note3.lead">Preview:</Copy>

{/* slide 15 — inner loop divider */}
<Copy k="s15.eyebrow">The inner loop</Copy>
<Copy k="s15.stitle">The inner loop</Copy>
<Copy k="s15.sub">
  Description and Discernment: tell AI what you need, then judge what it
  gives back.
</Copy>
<Copy k="s15.note1">
  Inner loop in a sentence: tell AI what you need with Description, then judge
  what it gives back with Discernment.
</Copy>
<Copy k="s15.note2">This is the everyday loop teachers will use most.</Copy>
<Copy k="s15.note3">Keep it concrete; examples come next.</Copy>

{/* slide 16 — grade-band prompt examples */}
<Copy k="s16.eyebrow">
  The 4D Framework: the inner loop - Description & Discernment
</Copy>
<Copy k="s16.stitle">What do you notice about these prompts?</Copy>
<Copy k="s16.col1.grade">PreK-2</Copy>
<Copy k="s16.col1.li1">Act as an early childhood educator.</Copy>
<Copy k="s16.col1.li2">
  Create circle time songs that are 4 lines each, use rhyme, and are
  appropriate for four-year-olds.
</Copy>
<Copy k="s16.col1.li3">Make the songs upbeat.</Copy>
<Copy k="s16.col2.grade">3-5</Copy>
<Copy k="s16.col2.li1">You are a fourth-grade science teacher.</Copy>
<Copy k="s16.col2.li2">
  Write a 2-paragraph informational text about photosynthesis at a Lexile
  level of 650.
</Copy>
<Copy k="s16.col2.li3">Include 5 bold vocabulary words with context clues.</Copy>
<Copy k="s16.col3.grade">6-8</Copy>
<Copy k="s16.col3.li1">Act as a middle school history teacher.</Copy>
<Copy k="s16.col3.li2">
  Create a Socratic seminar prompt about causes of WWI for 8th graders.
</Copy>
<Copy k="s16.col3.li3">
  Include 3 sub-questions and suggest relevant primary source types.
</Copy>
<Copy k="s16.col4.grade">9-12</Copy>
<Copy k="s16.col4.li1">You are an AP English teacher.</Copy>
<Copy k="s16.col4.li2">
  Design a rhetorical analysis essay prompt using the attached speech.
</Copy>
<Copy k="s16.col4.li3">
  Include scoring criteria aligned to AP rubric standards.
</Copy>
<Copy k="s16.note1">
  Compare the grade-band prompt examples and draw out how specificity changes
  the output.
</Copy>
<Copy k="s16.note2">{lead} what detail made the biggest difference?</Copy>
<Copy k="s16.note2.lead">Ask:</Copy>
<Copy k="s16.note3">
  Sets up the next slide on what great description looks like.
</Copy>

{/* slide 17 — a great prompt uses great description */}
<Copy k="s17.eyebrow">
  The 4D Framework: the inner loop - Description & Discernment
</Copy>
<Copy k="s17.title">A great prompt uses great description</Copy>
<Copy k="s17.sub">Writing a good prompt is like writing a good subplan!</Copy>
<Copy k="s17.row1.h">Role</Copy>
<Copy k="s17.row1.d">Tell AI who it should be</Copy>
<Copy k="s17.row2.h">Task</Copy>
<Copy k="s17.row2.d">State the specific action or goal clearly</Copy>
<Copy k="s17.row3.h">Context</Copy>
<Copy k="s17.row3.d">Give background info or upload examples</Copy>
<Copy k="s17.row4.h">Format</Copy>
<Copy k="s17.row4.d">Say the exact shape you want the output to take</Copy>
<Copy k="s17.row5.h">Constraint</Copy>
<Copy k="s17.row5.d">Add any limits or guardrails (length, lexiles, etc.)</Copy>
<Copy k="s17.note1">
  Great description is like writing a good subplan for a guest teacher.
</Copy>
<Copy k="s17.note2">
  The five elements: Role, Task, Context, Format, Constraint.
</Copy>
<Copy k="s17.note3">
  {tip} The subplan analogy lands; every teacher has written one.
</Copy>
<Copy k="s17.note3.tip">Tip:</Copy>

{/* slide 18 — the CHECK method */}
<Copy k="s18.eyebrow">Inner loop: discernment</Copy>
<Copy k="s18.stitle">Use the CHECK method</Copy>
<Copy k="s18.row1.letter">C</Copy>
<Copy k="s18.row1.t">
  {lead} Are the facts accurate? Verify claims with outside sources.
</Copy>
<Copy k="s18.row1.t.lead">Correct?</Copy>
<Copy k="s18.row2.letter">H</Copy>
<Copy k="s18.row2.t">{lead} Does this feel warm and authentic?</Copy>
<Copy k="s18.row2.t.lead">Human?</Copy>
<Copy k="s18.row3.letter">E</Copy>
<Copy k="s18.row3.t">
  {lead} Free of bias or cultural assumptions that could hurt students?
</Copy>
<Copy k="s18.row3.t.lead">Equitable?</Copy>
<Copy k="s18.row4.letter">C</Copy>
<Copy k="s18.row4.t">
  {lead} Does it match my standards, objectives, grade level?
</Copy>
<Copy k="s18.row4.t.lead">Curriculum-aligned?</Copy>
<Copy k="s18.row5.letter">K</Copy>
<Copy k="s18.row5.t">
  {lead} Appropriate and protective of student well-being?
</Copy>
<Copy k="s18.row5.t.lead">Kid-safe?</Copy>
<Copy k="s18.note1">
  CHECK stands for Correct, Human, Equitable, Curriculum-aligned, Kid-safe.
</Copy>
<Copy k="s18.note2">Walk each letter with a quick classroom example.</Copy>
<Copy k="s18.note3">
  {tip} Have the room say CHECK back to you once; spoken mnemonics stick.
</Copy>
<Copy k="s18.note3.tip">Tip:</Copy>

{/* slide 19 — limitations (video clips) */}
<Copy k="s19.eyebrow">
  The 4D Framework: the inner loop - Description & Discernment
</Copy>
<Copy k="s19.stitle">Discernment matters because AI has limitations</Copy>
<Copy k="s19.vid1.aria">Play: Why do AI models hallucinate?</Copy>
<Copy k="s19.vid1.cap">
  {lead} Hallucinations occur when AI follows a logical pattern that isn’t
  grounded in reality.
</Copy>
<Copy k="s19.vid1.cap.lead">Why do AI models hallucinate?</Copy>
<Copy k="s19.vid2.aria">Play: What is sycophancy in AI models?</Copy>
<Copy k="s19.vid2.cap">
  {lead} Sycophancy happens when AI’s training makes it too helpful and
  likely to agree.
</Copy>
<Copy k="s19.vid2.cap.lead">What is sycophancy?</Copy>
<Copy k="s19.vid3.aria">Play: Why does bias exist in AI models?</Copy>
<Copy k="s19.vid3.cap">
  {lead} Bias happens when AI reproduces inequalities present in its
  training data.
</Copy>
<Copy k="s19.vid3.cap.lead">Why does bias exist?</Copy>
<Copy k="s19.note1">
  AI has real limitations, which is exactly why discernment matters.
</Copy>
<Copy k="s19.note2">
  {activity} Play the two short clips, hallucination then sycophancy, and
  debrief what they noticed.
</Copy>
<Copy k="s19.note2.activity">ACTIVITY:</Copy>
<Copy k="s19.note3">
  Name it without fear: a powerful tool, not an authority.
</Copy>

{/* slide 20 — check every time */}
<Copy k="s20.eyebrow">
  The 4D Framework: the inner loop - Description & Discernment
</Copy>
<Copy k="s20.stitle">Check AI’s work every time.</Copy>
<Copy k="s20.li1">Check the facts</Copy>
<Copy k="s20.li2">Check the reading level</Copy>
<Copy k="s20.li3">Check assumptions</Copy>
<Copy k="s20.li4">Does it serve your kids?</Copy>
<Copy k="s20.note">
  Research shows that discernment behaviors are used least frequently when
  people engage with AI.
</Copy>
<Copy k="s20.bold">Discernment can be tempting to skip, but it matters.</Copy>
<Copy k="s20.note1">
  Check the facts, the reading level, the assumptions, and whether it actually
  serves your kids.
</Copy>
<Copy k="s20.note2">
  Discernment is the step people skip and the one that matters most.
</Copy>
<Copy k="s20.note3">Slow down here; this is the heart of the inner loop.</Copy>

{/* slide 21 — already skilled */}
<Copy k="s21.eyebrow">
  The 4D Framework: the inner loop - Description & Discernment
</Copy>
<Copy k="s21.stitle">
  And remember... you’re already skilled at the Description/Discernment
  loop.
</Copy>
<Copy k="s21.card1.h">Description is like lesson planning.</Copy>
<Copy k="s21.card1.p">
  Every time you make a sub plan or write out instructions for an
  assignment, you’re strengthening your description skills.
</Copy>
<Copy k="s21.card2.h">Discernment is like grading.</Copy>
<Copy k="s21.card2.p">
  Every assessment you grade uses the same thinking as discernment with AI!
</Copy>
<Copy k="s21.note1">
  Description is like lesson planning; discernment is like grading.
</Copy>
<Copy k="s21.note2">
  {lead} teachers already do this thinking every day, just not with AI yet.
</Copy>
<Copy k="s21.note2.lead">Reassure:</Copy>
<Copy k="s21.note3">Connect it back to CHECK.</Copy>

{/* slide 22 — try the loop */}
<Copy k="s22.eyebrow">Inner loop: try it</Copy>
<Copy k="s22.stitle">Try the description and discernment loop</Copy>
<Copy k="s22.row1">{lead} Quiz, worksheet, or writing prompt.</Copy>
<Copy k="s22.row1.lead">Pick a real task.</Copy>
<Copy k="s22.row2">{lead} Role, Task, Context, Format, Constraint.</Copy>
<Copy k="s22.row2.lead">Describe it well.</Copy>
<Copy k="s22.row3">{lead} Send one revision to improve it.</Copy>
<Copy k="s22.row3.lead">Iterate.</Copy>
<Copy k="s22.note1">The full inner loop in miniature.</Copy>
<Copy k="s22.note2">
  {activity} Pick a real task, describe it well using Role, Task, Context,
  Format, Constraint, send one revision, then run CHECK.
</Copy>
<Copy k="s22.note2.activity">ACTIVITY:</Copy>
<Copy k="s22.note3">Circulate and prompt anyone who stalls on Context.</Copy>

{/* slide 23 — grade-band exercises intro (inner loop) */}
<Copy k="s23.eyebrow">Grade-band exercises</Copy>
<Copy k="s23.stitle">Four grade bands with two exercises per band.</Copy>
<Copy k="s23.sub">
  Subject-agnostic. Run them with your own teachers tomorrow.
</Copy>
<Copy k="s23.note1">Four bands, two exercises each, subject-agnostic.</Copy>
<Copy k="s23.note2">
  Tell teachers they can run these with their own staff tomorrow.
</Copy>
<Copy k="s23.note3">Point them to the learner workbook for the full set.</Copy>

{/* slide 24 — PreK exercises (inner loop) */}
<Copy k="s24.eyebrow">
  The 4D Framework: the inner loop - Description & Discernment
</Copy>
<Copy k="s24.band">PreK · Early childhood</Copy>
<Copy k="s24.stitle">Two exercises you can run tomorrow.</Copy>
<Copy k="s24.ex1.label">Exercise 1 · ~10 min</Copy>
<Copy k="s24.ex1.name">The read-aloud retelling</Copy>
<Copy k="s24.ex1.body">
  Ask AI to retell a familiar picture book three ways: for an English
  newcomer, with rhyme & rhythm, focused on one big feeling.
</Copy>
<Copy k="s24.ex1.discern">
  {lead} which one would actually work in morning circle, and why?
</Copy>
<Copy k="s24.ex1.discern.lead">Discern:</Copy>
<Copy k="s24.ex2.label">Exercise 2 · ~10 min</Copy>
<Copy k="s24.ex2.name">The student note translator</Copy>
<Copy k="s24.ex2.body">
  Draft a student update. Ask AI to rewrite it at three reading levels and
  in two home languages.
</Copy>
<Copy k="s24.ex2.discern">
  {lead} which version would you actually send, and what would you change
  first?
</Copy>
<Copy k="s24.ex2.discern.lead">Discern:</Copy>
<Copy k="s24.note1">
  {lead} the read-aloud retelling, and the home-update translator.
</Copy>
<Copy k="s24.note1.lead">Two exercises:</Copy>
<Copy k="s24.note2">
  {activity} Pick one, try it, and jot the first thing you would change.
</Copy>
<Copy k="s24.note2.activity">ACTIVITY:</Copy>
<Copy k="s24.note3">Emphasize discernment on tone and reading level.</Copy>

{/* slide 25 — elementary exercises (inner loop) */}
<Copy k="s25.eyebrow">
  The 4D Framework: the inner loop - Description & Discernment
</Copy>
<Copy k="s25.band">Elementary</Copy>
<Copy k="s25.stitle">Two exercises you can run tomorrow.</Copy>
<Copy k="s25.ex1.label">Exercise 1 · ~10 min</Copy>
<Copy k="s25.ex1.name">The misconception hunter</Copy>
<Copy k="s25.ex1.body">
  Pick a topic you are teaching this week. Ask AI for the five most common
  misconceptions students have, with examples of how each shows up in
  student work.
</Copy>
<Copy k="s25.ex1.discern">
  {lead} which have you actually seen, and which feel made up?
</Copy>
<Copy k="s25.ex1.discern.lead">Discern:</Copy>
<Copy k="s25.ex2.label">Exercise 2 · ~10 min</Copy>
<Copy k="s25.ex2.name">The academic content decoder</Copy>
<Copy k="s25.ex2.body">
  Ask AI to put the content and standards into everyday language for a
  caregiver who has not been in a classroom for 20 years. Include one thing
  they can do at home.
</Copy>
<Copy k="s25.ex2.discern">{lead} would you actually use it?</Copy>
<Copy k="s25.ex2.discern.lead">Discern:</Copy>
<Copy k="s25.note1">
  {lead} the misconception hunter, and the academic content decoder.
</Copy>
<Copy k="s25.note1.lead">Two exercises:</Copy>
<Copy k="s25.note2">
  {activity} Pick one, try it, and jot what you would change first.
</Copy>
<Copy k="s25.note2.activity">ACTIVITY:</Copy>
<Copy k="s25.note3">Draw out how they judged the output.</Copy>

{/* slide 26 — middle school exercises (inner loop) */}
<Copy k="s26.eyebrow">
  The 4D Framework: the inner loop - Description & Discernment
</Copy>
<Copy k="s26.band">Middle school</Copy>
<Copy k="s26.stitle">Two exercises you can run tomorrow.</Copy>
<Copy k="s26.ex1.label">Exercise 1 · ~10 min</Copy>
<Copy k="s26.ex1.name">The discussion-starter generator</Copy>
<Copy k="s26.ex1.body">
  Pick a text from your unit. Ask AI for five discussion questions at five
  levels of cognitive demand, from recall to evaluation.
</Copy>
<Copy k="s26.ex1.discern">
  {lead} are both sides genuinely represented? What did AI miss?
</Copy>
<Copy k="s26.ex1.discern.lead">Discern:</Copy>
<Copy k="s26.ex2.label">Exercise 2 · ~10 min</Copy>
<Copy k="s26.ex2.name">The caregiver input generator</Copy>
<Copy k="s26.ex2.body">
  Ask AI for five open-ended, welcoming questions to send home at the start
  of the year, so caregivers can share their child’s strengths and
  interests.
</Copy>
<Copy k="s26.ex2.discern">
  {lead} are these welcoming to every home? What assumptions did AI make?
</Copy>
<Copy k="s26.ex2.discern.lead">Discern:</Copy>
<Copy k="s26.note1">
  {lead} the discussion-starter generator, and the caregiver input generator.
</Copy>
<Copy k="s26.note1.lead">Two exercises:</Copy>
<Copy k="s26.note2">
  {activity} Pick one, try it, and jot what you would change first.
</Copy>
<Copy k="s26.note2.activity">ACTIVITY:</Copy>
<Copy k="s26.note3">
  Watch for prompts that are too vague; push for Context.
</Copy>

{/* slide 27 — high school exercises (inner loop) */}
<Copy k="s27.eyebrow">
  The 4D Framework: the inner loop - Description & Discernment
</Copy>
<Copy k="s27.band">High school</Copy>
<Copy k="s27.stitle">Two exercises you can run tomorrow.</Copy>
<Copy k="s27.ex1.label">Exercise 1 · ~10 min</Copy>
<Copy k="s27.ex1.name">The debate builder</Copy>
<Copy k="s27.ex1.body">
  Pick a contested position from your unit. Ask AI to build the strongest
  case for both sides in language a sixteen-year-old would use in a debate.
</Copy>
<Copy k="s27.ex1.discern">
  {lead} is either side actually stronger, or did AI flatten the argument?
</Copy>
<Copy k="s27.ex1.discern.lead">Discern:</Copy>
<Copy k="s27.ex2.label">Exercise 2 · ~10 min</Copy>
<Copy k="s27.ex2.name">The conference prep assistant</Copy>
<Copy k="s27.ex2.body">
  Take notes from a student-led conference you use. Ask AI to write a brief
  follow-up email summarizing what you discussed and the next steps.
</Copy>
<Copy k="s27.ex2.discern">
  {lead} does that match what you actually see in your stack of papers?
</Copy>
<Copy k="s27.ex2.discern.lead">Discern:</Copy>
<Copy k="s27.note1">
  {lead} the debate builder, and the conference prep assistant.
</Copy>
<Copy k="s27.note1.lead">Two exercises:</Copy>
<Copy k="s27.note2">
  {activity} Pick one, try it, and jot what you would change first.
</Copy>
<Copy k="s27.note2.activity">ACTIVITY:</Copy>
<Copy k="s27.note3">Invite one group to share a before-and-after.</Copy>

{/* slide 28 — two questions before the break */}
<Copy k="s28.eyebrow">
  The 4D Framework: the inner loop - Description & Discernment
</Copy>
<Copy k="s28.band">Grade-band exercise reflection</Copy>
<Copy k="s28.stitle">Two questions before we break:</Copy>
<Copy k="s28.q1.n">1.</Copy>
<Copy k="s28.q1.q">What surprised you about the exercises, good or bad?</Copy>
<Copy k="s28.q2.n">2.</Copy>
<Copy k="s28.q2.q">
  Where did your discernment muscle catch something an AI-trusting teacher
  would have missed?
</Copy>
<Copy k="s28.note1">
  Debrief the inner loop: what surprised you, and where did your discernment
  kick in?
</Copy>
<Copy k="s28.note2">Take two or three voices, not everyone.</Copy>
<Copy k="s28.note3">Bridge to the break, then the outer loop.</Copy>

{/* slide 29 — break */}
<Copy k="s29.eyebrow">Break</Copy>
<Copy k="s29.stitle">Break</Copy>
<Copy k="s29.sub">15 minutes. Water, stretch, refill.</Copy>
<Copy k="s29.note1">Water, stretch, refill.</Copy>
<Copy k="s29.note2">State the exact return time and hold to it.</Copy>
<Copy k="s29.note3">Reset the room for the outer loop.</Copy>

{/* slide 30 — 2-minute warm-up */}
<Copy k="s30.eyebrow">Outer loop: delegation and diligence</Copy>
<Copy k="s30.stitle">2-minute warm-up</Copy>
<Copy k="s30.lead">
  Turn to someone you have not talked to yet. Tell them one thing you took
  out of Part A.
</Copy>
<Copy k="s30.note1">
  {activity} Turn to someone new and share one thing you took from Part A.
</Copy>
<Copy k="s30.note1.activity">ACTIVITY:</Copy>
<Copy k="s30.note2">Keep it to two minutes; it re-energizes the room.</Copy>
<Copy k="s30.note3">{lead} now we decide what to hand to AI at all.</Copy>
<Copy k="s30.note3.lead">Transition:</Copy>

{/* slide 31 — outer loop divider */}
<Copy k="s31.eyebrow">The outer loop</Copy>
<Copy k="s31.stitle">The outer loop</Copy>
<Copy k="s31.sub">
  Delegation is deciding what to hand to AI, and what to keep because doing
  the work is the point. Diligence is owning whatever comes out.
</Copy>
<Copy k="s31.note1">
  {lead} deciding what to hand to AI, and what to keep because doing the work
  is the point.
</Copy>
<Copy k="s31.note1.lead">Delegation:</Copy>
<Copy k="s31.note2">
  {lead} owning whatever comes out, no matter who drafted it.
</Copy>
<Copy k="s31.note2.lead">Diligence:</Copy>
<Copy k="s31.note3">
  These are decisions before and after the tool, not prompting.
</Copy>

{/* slide 32 — quote */}
<Copy k="s32.qmark">“</Copy>
<Copy k="s32.quote">
  Your judgment is not the obstacle to good AI use. Your judgment is the
  entire point of good AI use.
</Copy>
<Copy k="s32.note1">Your judgment is the entire point of good AI use.</Copy>
<Copy k="s32.note2">Let the quote land; pause before you speak.</Copy>
<Copy k="s32.note3">
  {lead} delegation and diligence are how judgment shows up.
</Copy>
<Copy k="s32.note3.lead">Tie it back:</Copy>

{/* slide 33 — competencies of the outer loop (loop diagram + boxes) */}
<Copy k="s33.eyebrow">The outer loop</Copy>
<Copy k="s33.stitle">The competencies of the outer loop</Copy>
<Copy k="s33.flow.aria">
  Outer loop highlighted: Delegation and Diligence around the greyed inner
  loop of Description and Discernment.
</Copy>
<Copy k="s33.d1.h">Delegation</Copy>
<Copy k="s33.d1.q">What tasks are right for AI?</Copy>
<Copy k="s33.d2.h">Description</Copy>
<Copy k="s33.d2.q">What do you need AI to do?</Copy>
<Copy k="s33.d3.h">Discernment</Copy>
<Copy k="s33.d3.q">Is AI’s output high quality?</Copy>
<Copy k="s33.d4.h">Diligence</Copy>
<Copy k="s33.d4.q">How do you take responsibility for AI outputs?</Copy>
<Copy k="s33.note1">Recap the four Ds with the outer loop highlighted.</Copy>
<Copy k="s33.note2">
  {lead} the inner loop is how you work with AI, the outer loop is whether and
  how much you should.
</Copy>
<Copy k="s33.note2.lead">One line:</Copy>
<Copy k="s33.note3">Keep the momentum.</Copy>

{/* slide 34 — the delegation matrix */}
<Copy k="s34.eyebrow">
  The 4D Framework: the outer loop - Delegation & Diligence
</Copy>
<Copy k="s34.stitle">Activity: The Delegation Matrix</Copy>
<Copy k="s34.lead">
  Delegation is deciding which tasks benefit from AI and which still need
  you. Sort each by {impact} and {risk}. {mins}
</Copy>
<Copy k="s34.lead.impact">impact</Copy>
<Copy k="s34.lead.risk">AI risk</Copy>
<Copy k="s34.lead.mins">12 min, small groups.</Copy>
<Copy k="s34.quad1.h">HIGH Impact + LOW AI Risk</Copy>
<Copy k="s34.quad1.label">→ Delegate Fully</Copy>
<Copy k="s34.quad2.h">HIGH Impact + HIGH AI Risk</Copy>
<Copy k="s34.quad2.label">→ Delegate with Review</Copy>
<Copy k="s34.quad3.h">LOW Impact + LOW AI Risk</Copy>
<Copy k="s34.quad3.label">→ Delegate Occasionally</Copy>
<Copy k="s34.quad4.h">LOW Impact + HIGH AI Risk</Copy>
<Copy k="s34.quad4.label">→ Keep Human</Copy>
<Copy k="s34.bank">Tasks to place:</Copy>
<Copy k="s34.task1">Writing a first-draft rubric</Copy>
<Copy k="s34.task2">Drafting a classroom newsletter</Copy>
<Copy k="s34.task3">Identifying students who need extra support</Copy>
<Copy k="s34.task4">Giving feedback on an essay draft</Copy>
<Copy k="s34.task5">Building relationships with students</Copy>
<Copy k="s34.task6">Planning a hard conversation</Copy>
<Copy k="s34.groupTask">
  As a group, place each task in a quadrant, then add a few of your own.
  Discuss.
</Copy>
<Copy k="s34.note1">
  Sort tasks by impact and AI risk into four quadrants: delegate fully,
  delegate with review, delegate occasionally, keep human.
</Copy>
<Copy k="s34.note2">
  {activity} In small groups, place three real tasks on the matrix and defend
  one.
</Copy>
<Copy k="s34.note2.activity">ACTIVITY:</Copy>
<Copy k="s34.note3">The disagreements are the learning.</Copy>

{/* slide 35 — one question before, one practice after */}
<Copy k="s35.eyebrow">
  The 4D Framework: the outer loop - Delegation & Diligence
</Copy>
<Copy k="s35.stitle">One question before. One practice after.</Copy>
<Copy k="s35.card1.h">Delegation</Copy>
<Copy k="s35.card1.p">
  The decision {stress} you open the tool. Should this work be done by a
  human, by AI, or by some combination?
</Copy>
<Copy k="s35.card1.p.stress">before</Copy>
<Copy k="s35.card2.h">Diligence</Copy>
<Copy k="s35.card2.p">
  The practice {stress}. Am I taking responsibility for what this tool
  helped me produce?
</Copy>
<Copy k="s35.card2.p.stress">after</Copy>
<Copy k="s35.note1">
  Delegation is the decision before you open the tool; diligence is the
  practice after.
</Copy>
<Copy k="s35.note2">
  Make the sequence explicit: decide, then do, then check.
</Copy>
<Copy k="s35.note3">Short bridge slide.</Copy>

{/* slide 36 — some work is the work */}
<Copy k="s36.eyebrow">Outer loop: delegation</Copy>
<Copy k="s36.stitle">Some work is the work because you do it.</Copy>
<Copy k="s36.sub">
  A reflective letter to a graduating senior. A hard conversation with a
  colleague. The thinking you do to understand why a kid is struggling. AI
  taking it from you does not save time: it removes the point.
</Copy>
<Copy k="s36.note1">
  Some things should not be delegated; the doing is the point: a reflective
  letter, a hard conversation, knowing a struggling kid.
</Copy>
<Copy k="s36.note2">Ask the room for one more example.</Copy>
<Copy k="s36.note3">Normalize keeping work human.</Copy>

{/* slide 37 — diligence in practice */}
<Copy k="s37.eyebrow">Outer loop: diligence</Copy>
<Copy k="s37.stitle">Diligence, in practice</Copy>
<Copy k="s37.lead">When your name is on it, you are accountable.</Copy>
<Copy k="s37.card1.h">Verify</Copy>
<Copy k="s37.card1.p">
  Check the facts, the reading level, anything that could mislead a student
  or caregiver.
</Copy>
<Copy k="s37.card2.h">Own</Copy>
<Copy k="s37.card2.p">
  Revise it until it sounds like you and reflects your judgment, not the
  AI’s defaults.
</Copy>
<Copy k="s37.card3.h">Disclose</Copy>
<Copy k="s37.card3.p">
  If AI helped produce it, say so. Transparency is part of the professional
  standard.
</Copy>
<Copy k="s37.note1">When your name is on it, you are accountable.</Copy>
<Copy k="s37.note2">
  {lead} verify it, own it, and disclose where it matters.
</Copy>
<Copy k="s37.note2.lead">Three moves:</Copy>
<Copy k="s37.note3">Tie disclosure to trust with families and colleagues.</Copy>

{/* slide 38 — FERPA, COPPA, HIPAA */}
<Copy k="s38.eyebrow">
  The 4D Framework: the outer loop - Delegation & Diligence
</Copy>
<Copy k="s38.stitle">Protect Student data: FERPA, COPPA, and HIPAA</Copy>
<Copy k="s38.card1.t">Use only district-approved tools.</Copy>
<Copy k="s38.card1.d">
  If your district has a list, that’s the list. If they don’t, ask before
  you start.
</Copy>
<Copy k="s38.card2.t">Never paste anything that identifies a student.</Copy>
<Copy k="s38.card2.d">
  Names, IEP details, demographics, behavioral notes. De-identify first:
  “Student 1, Student 2.”
</Copy>
<Copy k="s38.card3.t">Assume your inputs may be retained.</Copy>
<Copy k="s38.card3.d">
  Different tools and plans have very different policies. Read them, or ask
  someone in your district.
</Copy>
<Copy k="s38.note1">
  {ferpa} covers student education records, {coppa} governs data collected
  from children under 13, and {hipaa} protects health information.
</Copy>
<Copy k="s38.note1.ferpa">FERPA</Copy>
<Copy k="s38.note1.coppa">COPPA</Copy>
<Copy k="s38.note1.hipaa">HIPAA</Copy>
<Copy k="s38.note2">
  {lead} only district-approved tools, never paste anything that identifies a
  student, and assume inputs may be retained.
</Copy>
<Copy k="s38.note2.lead">Bottom line:</Copy>

{/* slide 39 — run the outer loop */}
<Copy k="s39.eyebrow">Hands on, 10 minutes</Copy>
<Copy k="s39.stitle">Run the outer loop</Copy>
<Copy k="s39.row1">Pick a real task this week.</Copy>
<Copy k="s39.row2">
  Write down what AI touches and what stays yours. Then check: approved
  tool? sensitive data?
</Copy>
<Copy k="s39.row3">Only then open the tool. Run it. We debrief.</Copy>
<Copy k="s39.note1">The full outer loop, hands on.</Copy>
<Copy k="s39.note2">
  {activity} Pick a real task, name what AI touches and what stays yours,
  check tool and data, then open the tool and verify.
</Copy>
<Copy k="s39.note2.activity">ACTIVITY:</Copy>
<Copy k="s39.note3">
  Circulate; watch that people run the gates, not just prompt.
</Copy>

{/* slide 40 — one-minute PII quiz */}
<Copy k="s40.eyebrow">Hands on · 5 minutes</Copy>
<Copy k="s40.t">One-minute quiz!</Copy>
<Copy k="s40.m">
  Make a list of all personally identifiable information that you can think
  of.
</Copy>
<Copy k="s40.go">Ready?{br}Set?{br}Go!</Copy>
<Copy k="s40.note1">
  A fast, high-energy recall of what never goes into AI.
</Copy>
<Copy k="s40.note2">
  {activity} Put 60 seconds on the clock and have everyone list on paper as
  many kinds of personally identifiable information (PII) as they can.
</Copy>
<Copy k="s40.note2.activity">ACTIVITY:</Copy>
<Copy k="s40.note3">
  {lead} Go rapid-fire and have the room call out the main pieces. Student
  names, ID numbers, dates of birth, addresses, photos or video, IEP or 504
  status, health records, grades, and caregiver contacts. Ask: did everyone
  get these? Any others they can think of? Did anyone miss something?
</Copy>
<Copy k="s40.note3.lead">Review:</Copy>
<Copy k="s40.note4">{lead} None of this belongs in an AI tool.</Copy>
<Copy k="s40.note4.lead">Land it:</Copy>

{/* slide 41 — grade-band exercises intro (outer loop) */}
<Copy k="s41.eyebrow">Grade-band exercises</Copy>
<Copy k="s41.stitle">Same four bands, with the gates on.</Copy>
<Copy k="s41.sub">
  Delegation and Diligence exercises, about 15 minutes each. The thinking
  happens before and after the tool, not just in it.
</Copy>
<Copy k="s41.note1">Same four bands, gates on, about 15 minutes each.</Copy>
<Copy k="s41.note2">
  The thinking happens before and after the tool, not in the prompt.
</Copy>
<Copy k="s41.note3">
  Remind them to run delegation first and diligence last.
</Copy>

{/* slide 42 — PreK exercises (outer loop) */}
<Copy k="s42.eyebrow">
  The 4D Framework: the outer loop - Delegation & Diligence
</Copy>
<Copy k="s42.band">PreK · Early childhood</Copy>
<Copy k="s42.stitle">Two exercises with the gates on.</Copy>
<Copy k="s42.ex1.label">Exercise 1 · ~15 min</Copy>
<Copy k="s42.ex1.name">The routine builder, with a delegation gate</Copy>
<Copy k="s42.ex1.body">
  Designing a new arrival routine. Before opening AI, list what AI can help
  with (visual schedule wording, a song) and what stays yours (which kid
  needs a soft landing).
</Copy>
<Copy k="s42.ex1.discern">
  {lead} would you actually use this with three- and four-year-olds?
</Copy>
<Copy k="s42.ex1.discern.lead">Diligence:</Copy>
<Copy k="s42.ex2.label">Exercise 2 · ~15 min</Copy>
<Copy k="s42.ex2.name">The home-communication audit</Copy>
<Copy k="s42.ex2.body">
  List the communication you send home in a month. Sort each into “AI can
  draft,” “AI structures, words stay mine,” and “AI does not touch.”
</Copy>
<Copy k="s42.ex2.discern">{lead} defend your sort to a partner.</Copy>
<Copy k="s42.ex2.discern.lead">Diligence:</Copy>
<Copy k="s42.note1">
  The routine builder with a delegation gate, and the home-communication
  audit.
</Copy>
<Copy k="s42.note2">
  {activity} Run the delegation and diligence gates before and after the tool.
</Copy>
<Copy k="s42.note2.activity">ACTIVITY:</Copy>
<Copy k="s42.note3">Watch for tasks that should stay human.</Copy>

{/* slide 43 — elementary exercises (outer loop) */}
<Copy k="s43.eyebrow">
  The 4D Framework: the outer loop - Delegation & Diligence
</Copy>
<Copy k="s43.band">Elementary</Copy>
<Copy k="s43.stitle">Two exercises with the gates on.</Copy>
<Copy k="s43.ex1.label">Exercise 1 · ~15 min</Copy>
<Copy k="s43.ex1.name">The accommodation language draft</Copy>
<Copy k="s43.ex1.body">
  Pick a regular accommodation type (extended time, chunked text, sensory
  breaks). Ask AI to draft generic, de-identified language you could adapt
  later. Write down what you will not put in.
</Copy>
<Copy k="s43.ex1.discern">
  {lead} does it match your district’s format? Would you sign your name to
  it?
</Copy>
<Copy k="s43.ex1.discern.lead">Diligence:</Copy>
<Copy k="s43.ex2.label">Exercise 2 · ~15 min</Copy>
<Copy k="s43.ex2.name">The conference prep, no names</Copy>
<Copy k="s43.ex2.body">
  Pick an upcoming conference. Ask AI to build a structure and open-ended
  questions, with no student name and no identifying details.
</Copy>
<Copy k="s43.ex2.discern">
  {lead} what did AI not know that only you do?
</Copy>
<Copy k="s43.ex2.discern.lead">Diligence:</Copy>
<Copy k="s43.note1">
  The accommodation language draft, and the conference prep with no names.
</Copy>
<Copy k="s43.note2">
  {activity} Run the delegation and diligence gates before and after the tool.
</Copy>
<Copy k="s43.note2.activity">ACTIVITY:</Copy>
<Copy k="s43.note3">{lead} no identifying details, ever.</Copy>
<Copy k="s43.note3.lead">Reinforce:</Copy>

{/* slide 44 — middle school exercises (outer loop) */}
<Copy k="s44.eyebrow">
  The 4D Framework: the outer loop - Delegation & Diligence
</Copy>
<Copy k="s44.band">Middle school</Copy>
<Copy k="s44.stitle">Two exercises with the gates on.</Copy>
<Copy k="s44.ex1.label">Exercise 1 · ~15 min</Copy>
<Copy k="s44.ex1.name">The policy stress test</Copy>
<Copy k="s44.ex1.body">
  Pick a classroom policy you are considering (phones, late work, AI use
  itself). Ask AI to argue against it from three perspectives: a student, a
  caregiver, a colleague.
</Copy>
<Copy k="s44.ex1.discern">
  {lead} are the arguments fair, or empty? Does it change what you would
  write?
</Copy>
<Copy k="s44.ex1.discern.lead">Diligence:</Copy>
<Copy k="s44.ex2.label">Exercise 2 · ~15 min</Copy>
<Copy k="s44.ex2.name">The attendance check-in</Copy>
<Copy k="s44.ex2.body">
  Ask AI to write a series of student outreach letters for students who have
  missed school: a warm check-in, then a direct note about grades, then a
  formal notice of concern.
</Copy>
<Copy k="s44.ex2.discern">
  {lead} what is AI missing? The log is the artifact.
</Copy>
<Copy k="s44.ex2.discern.lead">Diligence:</Copy>
<Copy k="s44.note1">The policy stress test, and the attendance check-in.</Copy>
<Copy k="s44.note2">
  {activity} Run the delegation and diligence gates before and after the tool.
</Copy>
<Copy k="s44.note2.activity">ACTIVITY:</Copy>
<Copy k="s44.note3">Draw out where diligence changed the output.</Copy>

{/* slide 45 — high school exercises (outer loop) */}
<Copy k="s45.eyebrow">
  The 4D Framework: the outer loop - Delegation & Diligence
</Copy>
<Copy k="s45.band">High school</Copy>
<Copy k="s45.stitle">Two exercises with the gates on.</Copy>
<Copy k="s45.ex1.label">Exercise 1 · ~15 min</Copy>
<Copy k="s45.ex1.name">The disclosure draft</Copy>
<Copy k="s45.ex1.body">
  Take a piece of communication you would actually send that AI helped
  produce. Write a one-sentence disclosure you would be comfortable
  including. Does it change how the message reads? Should it?
</Copy>
<Copy k="s45.ex1.discern">
  {lead} would you be comfortable signing your name to it?
</Copy>
<Copy k="s45.ex1.discern.lead">Diligence:</Copy>
<Copy k="s45.ex2.label">Exercise 2 · ~15 min</Copy>
<Copy k="s45.ex2.name">An at-home conversation starter</Copy>
<Copy k="s45.ex2.body">
  Pick a single topic from class. Ask AI for five curious, open-ended
  conversation starters a caregiver could use at home, not quizzes. Write
  down what you will not put in.
</Copy>
<Copy k="s45.ex2.discern">{lead} bring it back to share.</Copy>
<Copy k="s45.ex2.discern.lead">Diligence:</Copy>
<Copy k="s45.note1">
  The disclosure draft, and the at-home conversation starter.
</Copy>
<Copy k="s45.note2">
  {activity} Run the delegation and diligence gates before and after the tool.
</Copy>
<Copy k="s45.note2.activity">ACTIVITY:</Copy>
<Copy k="s45.note3">
  {lead} would you be comfortable signing your name to it?
</Copy>
<Copy k="s45.note3.lead">Ask:</Copy>

{/* slide 46 — real fluency */}
<Copy k="s46.eyebrow">Commit and close</Copy>
<Copy k="s46.stitle">
  Real fluency means moving between the loops without thinking about which
  one you’re in.
</Copy>
<Copy k="s46.sub">
  You’ll start in Delegation, drop into Description, hit something in the
  output that sends you back to Delegation, finish in Diligence. That’s not
  a failure of the framework. {stress}
</Copy>
<Copy k="s46.sub.stress">That is the framework working.</Copy>
<Copy k="s46.note1">
  Real fluency is moving between the loops without thinking about which one
  you are in.
</Copy>
<Copy k="s46.note2">
  Name it as a goal to grow toward, not a bar for today.
</Copy>
<Copy k="s46.note3">Begin landing the session.</Copy>

{/* slide 47 — commit */}
<Copy k="s47.eyebrow">Commit and close</Copy>
<Copy k="s47.stitle">
  Before you leave the room, commit to using AI with one real task in the
  next week.
</Copy>
<Copy k="s47.p">
  Not a hypothetical. A real thing on your plate. Write it down right now on
  the index card in front of you. We’ll collect them at the door.
</Copy>
<Copy k="s47.note1">Make it real, not hypothetical.</Copy>
<Copy k="s47.note2">
  {activity} Each person commits to one real task for the next week and writes
  it on an index card; collect them or have them keep it.
</Copy>
<Copy k="s47.note2.activity">ACTIVITY:</Copy>
<Copy k="s47.note3">A written commitment is far more likely to happen.</Copy>

{/* slide 48 — resources */}
<Copy k="s48.eyebrow">Commit and close</Copy>
<Copy k="s48.stitle">Free, openly licensed, and yours to remix.</Copy>
<Copy k="s48.card1.h">The full course</Copy>
<Copy k="s48.card1.p">
  Self-paced, ~3 hours. Built for K-12 educators. Free.
</Copy>
<Copy k="s48.card2.h">Train-the-trainer kit</Copy>
<Copy k="s48.card2.p">
  These slides, the facilitator guide, the exercises. Take them. Adapt them.
  Run your own.
</Copy>
<Copy k="s48.card3.h">Use-case library</Copy>
<Copy k="s48.card3.p">
  Step-by-step guides for common educator tasks across every subject area.
</Copy>
<Copy k="s48.note1">
  Point to the resources: the full course, the train-the-trainer kit, and the
  use-case library, all free and openly licensed.
</Copy>
<Copy k="s48.note2">Tell them where to find the links after today.</Copy>
<Copy k="s48.note3">Encourage sharing with colleagues.</Copy>

{/* slide 49 — goals review */}
<Copy k="s49.eyebrow">Commit and close</Copy>
<Copy k="s49.stitle">Look back at today’s goals.</Copy>
<Copy k="s49.mark1.t">{lead} explaining or teaching this</Copy>
<Copy k="s49.mark1.t.lead">I feel comfortable</Copy>
<Copy k="s49.mark2.t">{lead} or changed how I think about this</Copy>
<Copy k="s49.mark2.t.lead">I learned something new</Copy>
<Copy k="s49.mark3.t">{lead} and want to explore more</Copy>
<Copy k="s49.mark3.t.lead">I’m still unsure</Copy>
<Copy k="s49.goalsLabel">Today’s goals, review each one:</Copy>
<Copy k="s49.goal1">Define AI fluency</Copy>
<Copy k="s49.goal2">Apply the 4D Framework</Copy>
<Copy k="s49.goal3">Prompt AI and check outputs effectively</Copy>
<Copy k="s49.goal4">Connect AI fluency to existing skills</Copy>
<Copy k="s49.note1">
  {activity} For each goal, ask yourself: comfortable teaching it, learned
  something new, or still unsure?
</Copy>
<Copy k="s49.note1.activity">ACTIVITY:</Copy>
<Copy k="s49.note2">
  Normalize still unsure; it names where to keep practicing.
</Copy>
<Copy k="s49.note3">Use it as a quick pulse on the room.</Copy>

{/* slide 50 — thank you */}
<Copy k="s50.pill">Anthropic x AFT</Copy>
<Copy k="s50.stitle">Thank you.</Copy>
<Copy k="s50.sub">Bring it back to your buildings. We will see you soon.</Copy>
<Copy k="s50.note1">
  Close warm and specific: bring it back to your buildings.
</Copy>
<Copy k="s50.note2">Thank them and restate the one commitment they made.</Copy>
<Copy k="s50.note3">End on time and on a high note.</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 72de4e571f49859a */}
<Copy k="widget.description">
  Widget: A 50-slide, navigable workshop deck for training facilitators to run
  an AI fluency session for pK-12 educators. Each slide pairs with speaker
  notes (timing, talking points, activity instructions) that make up a
  facilitator guide, and one slide is editable so a facilitator can
  personalize their name and bio, which autosaves. The deck covers outcomes,
  guiding principles, why AI fluency matters, and the 4D Framework
  (Delegation, Description, Discernment, Diligence) as an inner loop and outer
  loop, with grade-band exercises, discussion prompts, a delegation matrix
  activity, student-data protection guidance, and a closing commitment step.
  The content can be downloaded as standalone slides or a printable
  facilitator guide.
</Copy>
<Copy k="widget.summary">
  Walkthrough: A navigable, downloadable 50-slide workshop deck with speaker
  notes for training facilitators to run an AI fluency session for pK-12
  educators, covering the 4D Framework's inner and outer loops through
  grade-band exercises and discussion prompts.
</Copy>
`;export{e as default};