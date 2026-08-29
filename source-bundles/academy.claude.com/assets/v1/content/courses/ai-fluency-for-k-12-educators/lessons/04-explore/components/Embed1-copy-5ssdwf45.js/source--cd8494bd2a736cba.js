var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx — the "Explore!" 4D-indicator
    explorer (see academy-web src/components/mdx/WidgetCopy.tsx). Keys are
    machine identifiers — translate ONLY the text between the tags. \`{name}\`
    tokens are runtime placeholders and must survive verbatim. Indicators
    are per-competency runs: \`<comp>.ind<n>.t\` is the indicator, \`.ex<n>\`
    its "What it sounds like" examples and \`.try<n>\` its "Things to try"
    prompts — the widget enumerates whatever is here. */}

<Copy k="comp.description.name">Description</Copy>
<Copy k="comp.description.desc">Communicate clearly with AI.</Copy>
<Copy k="comp.delegation.name">Delegation</Copy>
<Copy k="comp.delegation.desc">Decide what to do with AI vs. yourself.</Copy>
<Copy k="comp.discernment.name">Discernment</Copy>
<Copy k="comp.discernment.desc">Evaluate what AI gives you.</Copy>
<Copy k="comp.diligence.name">Diligence</Copy>
<Copy k="comp.diligence.desc">Use AI responsibly and accountably.</Copy>
<Copy k="comp.count">{count} indicators</Copy>

<Copy k="tab.all">All</Copy>
<Copy k="section.all">All {count} indicators</Copy>
<Copy k="section.comp">{name} — {desc}</Copy>
<Copy k="soundsLike">What it sounds like</Copy>
<Copy k="thingsToTry">Things to try</Copy>

<Copy k="description.ind1.t">
  You clearly define the audience for your output.
</Copy>
<Copy k="description.ind1.ex1">
  This is for my 7th graders, and reading levels in the room range from 3rd to
  9th grade.
</Copy>
<Copy k="description.ind1.ex2">
  The audience is parents at back-to-school night who may not have a science
  background.
</Copy>
<Copy k="description.ind1.ex3">
  I'm writing this for my principal, who prefers a one-page summary with
  bullets.
</Copy>
<Copy k="description.ind1.try1">
  Before your next request, tell Claude exactly who will read the output
  (students, families, your principal) and what they need most.
</Copy>
<Copy k="description.ind1.try2">
  Ask Claude to adjust the reading level or tone for a specific grade band or
  group of learners.
</Copy>

<Copy k="description.ind2.t">
  You specify the format and structure you need.
</Copy>
<Copy k="description.ind2.ex1">
  I need this as a one-page handout with three sections and bolded vocabulary
  terms.
</Copy>
<Copy k="description.ind2.ex2">
  Format this as a 5-question exit ticket with an answer key at the bottom.
</Copy>
<Copy k="description.ind2.ex3">
  Give me a two-column table comparing the two main characters.
</Copy>
<Copy k="description.ind2.try1">
  Request a specific format upfront: "Give me this as a 5-item exit ticket
  with an answer key."
</Copy>
<Copy k="description.ind2.try2">
  Ask Claude to restructure existing content into a different format like a
  rubric, choice board, or anchor chart.
</Copy>

<Copy k="description.ind3.t">
  You communicate the tone and style that fits your voice.
</Copy>
<Copy k="description.ind3.ex1">
  Write this in the warm, encouraging tone I use in my weekly classroom
  newsletter.
</Copy>
<Copy k="description.ind3.ex2">
  Match the direct, no-fluff style my principal expects in data meeting
  summaries.
</Copy>
<Copy k="description.ind3.ex3">
  Keep it playful and age-appropriate for kindergartners.
</Copy>
<Copy k="description.ind3.try1">
  Describe your classroom voice to Claude: "I prefer warm, short sentences and
  no education jargon."
</Copy>
<Copy k="description.ind3.try2">
  Paste a past newsletter or parent email and ask Claude to match that style.
</Copy>

<Copy k="description.ind4.t">
  You break complex tasks into smaller steps for the AI to follow.
</Copy>
<Copy k="description.ind4.ex1">
  First give me an outline of the lesson, then we'll write each section
  together.
</Copy>
<Copy k="description.ind4.ex2">
  Let's start by listing the standards, then build the activities, then write
  the assessment.
</Copy>
<Copy k="description.ind4.ex3">
  Before drafting the parent letter, help me list the key points I need to
  hit.
</Copy>
<Copy k="description.ind4.try1">
  For your next lesson or unit plan, ask Claude to start with just an outline
  before writing any section in full.
</Copy>
<Copy k="description.ind4.try2">
  Tell Claude: "Let's break this into steps. What should we tackle first?"
</Copy>

<Copy k="description.ind5.t">
  You build on previous exchanges to refine your work together.
</Copy>
<Copy k="description.ind5.ex1">
  That reading passage is close. Now lower the level for my striving readers.
</Copy>
<Copy k="description.ind5.ex2">
  Based on the objective we wrote earlier, let's draft three formative checks.
</Copy>
<Copy k="description.ind5.ex3">
  Keep the delivery-truck analogy you used, but shorten the last paragraph.
</Copy>
<Copy k="description.ind5.try1">
  Instead of starting over, tell Claude exactly what to keep and what to
  change from its last draft.
</Copy>
<Copy k="description.ind5.try2">
  Reference earlier work: "Building on the rubric we made, now write the
  student-facing directions."
</Copy>

<Copy k="description.ind6.t">
  You provide examples of what good looks like.
</Copy>
<Copy k="description.ind6.ex1">
  Here's a parent email I sent last year that landed well. Match this tone.
</Copy>
<Copy k="description.ind6.ex2">
  This is the rubric format our school uses. Follow this structure exactly.
</Copy>
<Copy k="description.ind6.ex3">
  Here's an exemplar student response. Write two more at the same quality
  level.
</Copy>
<Copy k="description.ind6.try1">
  Paste a past lesson, rubric, exemplar, or parent email and ask Claude to
  follow that pattern.
</Copy>
<Copy k="description.ind6.try2">
  Say "Here's an example of what I'm looking for" before making your request.
</Copy>

<Copy k="description.ind7.t">
  You tell the AI how you want it to interact with you.
</Copy>
<Copy k="description.ind7.ex1">
  Act like an instructional coach and push back if my objective is fuzzy.
</Copy>
<Copy k="description.ind7.ex2">
  Ask me clarifying questions about my students before you draft anything.
</Copy>
<Copy k="description.ind7.ex3">
  Be a thought partner, not a yes-machine. Challenge weak spots in this lesson
  plan.
</Copy>
<Copy k="description.ind7.try1">
  Start by telling Claude how to behave: "Act as my instructional coach and
  ask me questions before drafting."
</Copy>
<Copy k="description.ind7.try2">
  Ask Claude to check in: "Ask me 2-3 questions about my students before you
  start."
</Copy>

<Copy k="description.ind8.t">
  You set boundaries on what the AI should and shouldn't do.
</Copy>
<Copy k="description.ind8.ex1">
  Don't write the lesson yet. Just help me unpack the standard first.
</Copy>
<Copy k="description.ind8.ex2">
  Only use the vocabulary from the word wall list I gave you.
</Copy>
<Copy k="description.ind8.ex3">
  Stay focused on the math content. Don't add classroom management advice.
</Copy>
<Copy k="description.ind8.try1">
  Add a constraint to your next request: "Only use the information in the
  curriculum excerpt I provided."
</Copy>
<Copy k="description.ind8.try2">
  Tell Claude what NOT to do: "Don't write the lesson yet. Just help me think
  through the objective."
</Copy>

<Copy k="delegation.ind1.t">
  You clarify your goal before asking AI for help.
</Copy>
<Copy k="delegation.ind1.ex1">
  My goal is for every student to leave with one sentence explaining
  photosynthesis in their own words.
</Copy>
<Copy k="delegation.ind1.ex2">
  I'm trying to cut the time I spend on sub plans, not make them fancier.
</Copy>
<Copy k="delegation.ind1.ex3">
  The point of this email is to get more families to sign up for conferences.
</Copy>
<Copy k="delegation.ind1.try1">
  Start your next request by stating the goal: "My goal is for students to...
  Can you help me..."
</Copy>
<Copy k="delegation.ind1.try2">
  Before asking for help, write one sentence describing what success looks
  like and share it with Claude.
</Copy>

<Copy k="delegation.ind2.t">
  You consult AI about how to approach a problem before diving into execution.
</Copy>
<Copy k="delegation.ind2.ex1">
  Before I start, what's a good way to differentiate this text for three
  reading levels?
</Copy>
<Copy k="delegation.ind2.ex2">
  What are a few different approaches I could take to reteach two-digit
  multiplication?
</Copy>
<Copy k="delegation.ind2.ex3">
  How should I structure a parent meeting about a sensitive behavior concern?
</Copy>
<Copy k="delegation.ind2.try1">
  Before your next planning task, ask: "What are two or three ways I could
  approach this?"
</Copy>
<Copy k="delegation.ind2.try2">
  Ask Claude to suggest a few frameworks or structures before you commit to
  one.
</Copy>

<Copy k="delegation.ind3.t">You recognize when a task isn't right for AI.</Copy>
<Copy k="delegation.ind3.ex1">
  This condolence note to a student's family needs to come entirely from me,
  not AI.
</Copy>
<Copy k="delegation.ind3.ex2">
  I should write my own narrative report card comments. I know these kids.
</Copy>
<Copy k="delegation.ind3.ex3">
  This is a college recommendation letter. I need to write it myself.
</Copy>
<Copy k="delegation.ind3.try1">
  Before reaching for AI, pause and ask: "Does this need my voice, my
  judgment, or my relationship with this person?"
</Copy>
<Copy k="delegation.ind3.try2">
  Consider whether the task involves student privacy, personal relationships,
  or your own professional growth.
</Copy>

<Copy k="delegation.ind4.t">
  You consider what AI does well and where it struggles.
</Copy>
<Copy k="delegation.ind4.ex1">
  AI is great at generating practice problems, but I'll check every answer
  myself before printing.
</Copy>
<Copy k="delegation.ind4.ex2">
  This involves this year's state testing window, so the info might be
  outdated.
</Copy>
<Copy k="delegation.ind4.ex3">
  AI doesn't know my kids, so I'll adjust anything that won't land with this
  group.
</Copy>
<Copy k="delegation.ind4.try1">
  Ask Claude directly: "What in this output should I double-check before using
  it with students?"
</Copy>
<Copy k="delegation.ind4.try2">
  Before starting, name one thing you'll verify yourself no matter what AI
  produces.
</Copy>

<Copy k="delegation.ind5.t">
  You stay involved rather than just accepting what AI produces.
</Copy>
<Copy k="delegation.ind5.ex1">
  Let's work on the learning objective together before you draft any
  activities.
</Copy>
<Copy k="delegation.ind5.ex2">
  Walk me through why you chose those five vocabulary words.
</Copy>
<Copy k="delegation.ind5.ex3">
  Give me three options for the hook so I can pick the one that fits my kids.
</Copy>
<Copy k="delegation.ind5.try1">
  Ask Claude to explain its reasoning: "Walk me through why you sequenced the
  lesson this way."
</Copy>
<Copy k="delegation.ind5.try2">
  Request options instead of a single answer: "Give me three different hooks
  to consider."
</Copy>

<Copy k="delegation.ind6.t">
  You choose the right tool or approach for the job.
</Copy>
<Copy k="delegation.ind6.ex1">
  That prompt isn't working. Let me try uploading the actual rubric instead of
  describing it.
</Copy>
<Copy k="delegation.ind6.ex2">
  I'll attach the full unit plan so you have real context instead of my
  summary.
</Copy>
<Copy k="delegation.ind6.ex3">
  Let me set this up as a Project so the context carries over between planning
  sessions.
</Copy>
<Copy k="delegation.ind6.try1">
  If results aren't landing, try uploading the actual rubric, unit plan, or
  exemplar instead of describing it.
</Copy>
<Copy k="delegation.ind6.try2">
  Experiment with a different approach: give an example, break it into smaller
  asks, or start a fresh chat.
</Copy>

<Copy k="delegation.ind7.t">You adjust who does what as the work evolves.</Copy>
<Copy k="delegation.ind7.ex1">
  Actually, I'll write the parent email myself. You take the newsletter blurb
  instead.
</Copy>
<Copy k="delegation.ind7.ex2">
  You're doing well with the practice problems. Keep generating while I check
  the first set.
</Copy>
<Copy k="delegation.ind7.ex3">
  This differentiation piece is trickier than I thought. Let me handle that
  part myself.
</Copy>
<Copy k="delegation.ind7.try1">
  Mid-task, reassess: "This part needs my judgment about my students. I'll
  take it from here."
</Copy>
<Copy k="delegation.ind7.try2">
  When Claude is doing well, delegate more: "That's working. Keep going with
  the next two sections."
</Copy>

<Copy k="discernment.ind1.t">You check facts and claims that matter.</Copy>
<Copy k="discernment.ind1.ex1">
  I need to verify that science explanation against our textbook before I use
  it.
</Copy>
<Copy k="discernment.ind1.ex2">
  Let me confirm that's actually the current state standard, not the old
  version.
</Copy>
<Copy k="discernment.ind1.ex3">
  I'll spot-check three of these math answers before I print the worksheet.
</Copy>
<Copy k="discernment.ind1.try1">
  Ask Claude: "Which facts in this should I verify before putting it in front
  of students?"
</Copy>
<Copy k="discernment.ind1.try2">
  Pick one important fact from the output and check it against your curriculum
  or a trusted source.
</Copy>

<Copy k="discernment.ind2.t">
  You notice when AI's reasoning doesn't hold up.
</Copy>
<Copy k="discernment.ind2.ex1">
  Wait, that doesn't follow. You said the data showed growth, then recommended
  reteaching everything.
</Copy>
<Copy k="discernment.ind2.ex2">
  You skipped the misconception students actually have about this concept.
</Copy>
<Copy k="discernment.ind2.ex3">
  That activity doesn't actually assess the standard we said we're targeting.
</Copy>
<Copy k="discernment.ind2.try1">
  Ask Claude: "Walk me through how you got from the data to that
  recommendation."
</Copy>
<Copy k="discernment.ind2.try2">
  If something feels off, push back: "Explain the connection between this
  activity and the standard."
</Copy>

<Copy k="discernment.ind3.t">
  You recognize when AI might be missing important context.
</Copy>
<Copy k="discernment.ind3.ex1">
  You don't know that Period 4 had a long-term sub for three weeks. That
  changes the data.
</Copy>
<Copy k="discernment.ind3.ex2">
  This makes sense in theory, but we don't have a device for every student.
</Copy>
<Copy k="discernment.ind3.ex3">
  You're missing that half this class has an accommodation for reduced reading
  load.
</Copy>
<Copy k="discernment.ind3.try1">
  After getting a draft, ask: "What context about my students or schedule
  would change this recommendation?"
</Copy>
<Copy k="discernment.ind3.try2">
  Proactively share constraints: "You should know we're on a block schedule
  and have no 1:1 devices."
</Copy>

<Copy k="discernment.ind4.t">
  You assess whether you and AI are making progress together.
</Copy>
<Copy k="discernment.ind4.ex1">
  We keep going in circles on this rubric. Let me reframe what I actually
  need.
</Copy>
<Copy k="discernment.ind4.ex2">
  This isn't getting closer to something I'd put in front of kids. Let's start
  the passage over.
</Copy>
<Copy k="discernment.ind4.ex3">
  We've revised this email four times. I think the problem is my original ask,
  not your drafts.
</Copy>
<Copy k="discernment.ind4.try1">
  If you've gone back and forth 3+ times without progress, stop and reframe:
  "Let me restate what I actually need."
</Copy>
<Copy k="discernment.ind4.try2">
  Ask Claude directly: "What information are you missing from me that would
  help here?"
</Copy>

<Copy k="discernment.ind5.t">
  You notice when AI's communication style isn't working for you.
</Copy>
<Copy k="discernment.ind5.ex1">
  These responses are way too long. I'm planning on a 20-minute prep. Be
  brief.
</Copy>
<Copy k="discernment.ind5.ex2">
  Stop agreeing with everything I say. Push back if my objective is weak.
</Copy>
<Copy k="discernment.ind5.ex3">
  You're being too formal. This is a note to a kindergarten family, not a
  legal memo.
</Copy>
<Copy k="discernment.ind5.try1">
  If responses feel off, name it: "Be more concise" or "Stop hedging and just
  give me the activity."
</Copy>
<Copy k="discernment.ind5.try2">
  Tell Claude what's not working: "You're being too agreeable. Challenge the
  weak spots in my lesson."
</Copy>

<Copy k="diligence.ind1.t">
  You're mindful about what information you share with AI.
</Copy>
<Copy k="diligence.ind1.ex1">
  I'll strip student names and replace them with Student 1, Student 2 before I
  upload this.
</Copy>
<Copy k="diligence.ind1.ex2">
  Let me describe the behavior situation without naming the student or the
  family.
</Copy>
<Copy k="diligence.ind1.ex3">
  I'm removing the IEP status column before I share this spreadsheet.
</Copy>
<Copy k="diligence.ind1.try1">
  Before pasting anything, remove names, ID numbers, IEP/504 status, and
  anything that could identify a student.
</Copy>
<Copy k="diligence.ind1.try2">
  Practice describing a student situation in general terms instead of pasting
  the actual record.
</Copy>

<Copy k="diligence.ind2.t">
  You're honest about AI's role in your work when it matters.
</Copy>
<Copy k="diligence.ind2.ex1">
  I used AI to draft this passage, then revised it for accuracy and reading
  level myself.
</Copy>
<Copy k="diligence.ind2.ex2">
  I want the team to know that AI helped me surface the pattern in this
  benchmark data.
</Copy>
<Copy k="diligence.ind2.ex3">
  If my principal asks, I'll be clear that AI generated the first draft of
  these materials.
</Copy>
<Copy k="diligence.ind2.try1">
  Practice saying: "I used AI to draft this, then I checked it for accuracy
  and fit with our students."
</Copy>
<Copy k="diligence.ind2.try2">
  When in doubt, ask yourself whether your principal, team, or students would
  want to know AI was involved.
</Copy>

<Copy k="diligence.ind3.t">
  You take responsibility for what you share or submit.
</Copy>
<Copy k="diligence.ind3.ex1">
  I've reviewed every problem on this worksheet and I stand behind it.
</Copy>
<Copy k="diligence.ind3.ex2">
  If there's an error in this passage, that's on me, not the tool.
</Copy>
<Copy k="diligence.ind3.ex3">
  I'm accountable for anything I bring to the data meeting, AI-assisted or
  not.
</Copy>
<Copy k="diligence.ind3.try1">
  Before using AI-assisted material with students, ask: "Am I ready to stand
  behind every part of this as my own?"
</Copy>
<Copy k="diligence.ind3.try2">
  Read the entire output as if a parent or your principal were reading it over
  your shoulder.
</Copy>

<Copy k="diligence.ind4.t">
  You consider the consequences of putting this work into the world.
</Copy>
<Copy k="diligence.ind4.ex1">
  How might this behavior email land with a family that's already frustrated
  with the school?
</Copy>
<Copy k="diligence.ind4.ex2">
  What happens if a student relies on this study guide and something in it is
  wrong?
</Copy>
<Copy k="diligence.ind4.ex3">
  Is there anything in this passage that could be confusing or upsetting for a
  student who recently lost a family member?
</Copy>
<Copy k="diligence.ind4.try1">
  Before sharing, ask: "How might a student, family, or colleague misread or
  be affected by this?"
</Copy>
<Copy k="diligence.ind4.try2">
  Consider who else might see this output and whether any student could be
  identified or singled out.
</Copy>
`;export{e as default};