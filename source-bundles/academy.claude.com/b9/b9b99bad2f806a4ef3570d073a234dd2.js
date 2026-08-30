var e=`---
kind: widget-copy
---

{/* Learner-facing copy for Embed1.tsx — the 4Ds behavioral-indicator
    matrix (see academy-web src/components/mdx/WidgetCopy.tsx). Keys are
    machine identifiers — translate ONLY the text between the tags.
    \`{name}\` tokens are runtime placeholders and must survive verbatim.
    Each dimension's indicators are the run \`<dim>.ind<n>\` with a title,
    a why, an example run \`.ex<n>\` and a things-to-try run \`.try<n>\`; the
    copy file is the inventory. The AI Fluency Index prompt the CTA opens
    in Claude is a marker-delimited program and stays in the widget. */}

<Copy k="kicker">The four dimensions of AI fluency</Copy>
<Copy k="tabs.aria">Filter by dimension</Copy>
<Copy k="tab.aria">Show the {count} {name} indicators</Copy>

<Copy k="dim.description.name">Description</Copy>
<Copy k="dim.description.desc">Communicate clearly with AI.</Copy>
<Copy k="dim.delegation.name">Delegation</Copy>
<Copy k="dim.delegation.desc">Decide what to do with AI vs. yourself.</Copy>
<Copy k="dim.discernment.name">Discernment</Copy>
<Copy k="dim.discernment.desc">Evaluate what AI gives you.</Copy>
<Copy k="dim.diligence.name">Diligence</Copy>
<Copy k="dim.diligence.desc">Use AI responsibly and accountably.</Copy>

<Copy k="scope.all">All {count} indicators across the four dimensions</Copy>
<Copy k="scope.dim">{name} — {desc}</Copy>
<Copy k="scope.reset">All {count} indicators</Copy>
<Copy k="group.count">{count} indicators</Copy>

<Copy k="row.hide">Hide</Copy>
<Copy k="row.details">Details</Copy>
<Copy k="ex.heading">What it sounds like</Copy>
<Copy k="ex.quoted">“{text}”</Copy>
<Copy k="ex.fewer">Show fewer</Copy>
<Copy k="ex.all">Show all {count} examples</Copy>
<Copy k="try.heading">Things to try</Copy>

<Copy k="cta.kicker">Try it on your own work</Copy>
<Copy k="cta.title">See your own AI fluency patterns</Copy>
<Copy k="cta.body">
  Use this prompt to analyze your recent Claude conversations through the
  lens of AI fluency. You’ll get a personalized scorecard. Treat it as
  exploratory, not a formal assessment.
</Copy>
<Copy k="cta.button">Open in Claude</Copy>
<Copy k="cta.foot">
  Opens a new Claude conversation with the prompt filled in. Works best with
  Claude’s {link} enabled.
</Copy>
<Copy k="cta.foot.link">memory tools</Copy>

<Copy k="description.ind1.title">
  You clearly define the audience for your output.
</Copy>
<Copy k="description.ind1.why">
  Building a clear understanding of your audience with AI helps ensure the
  outputs you get match what you and your audience are expecting.
</Copy>
<Copy k="description.ind1.ex1">
  I'm writing this for my manager who prefers bullet points.
</Copy>
<Copy k="description.ind1.ex2">
  The audience for this is college students new to the topic.
</Copy>
<Copy k="description.ind1.ex3">
  This needs to work for executives who only have 2 minutes to read it.
</Copy>
<Copy k="description.ind1.ex4">
  Keep in mind the readers are non-technical stakeholders.
</Copy>
<Copy k="description.ind1.ex5">
  My audience is skeptical investors who've heard a lot of pitches.
</Copy>
<Copy k="description.ind1.ex6">
  This is for my 10-year-old nephew who's curious about space.
</Copy>
<Copy k="description.ind1.ex7">
  The people reading this are doctors familiar with clinical terminology.
</Copy>
<Copy k="description.ind1.ex8">
  Write this for someone who's never used our product before.
</Copy>
<Copy k="description.ind1.ex9">
  My team already knows the background—focus on what's new.
</Copy>
<Copy k="description.ind1.ex10">
  This will be read by both technical and non-technical reviewers.
</Copy>
<Copy k="description.ind1.try1">
  Before your next request, tell Claude who will read the final output and
  what they care about most.
</Copy>
<Copy k="description.ind1.try2">
  Ask Claude to adjust the reading level or tone for a specific type of
  reader.
</Copy>

<Copy k="description.ind2.title">
  You specify the format and structure you need.
</Copy>
<Copy k="description.ind2.why">
  Telling AI exactly how you want information organized saves time and
  reduces back-and-forth revisions.
</Copy>
<Copy k="description.ind2.ex1">
  I need this as a numbered list with headers.
</Copy>
<Copy k="description.ind2.ex2">
  Can you format this as a two-column comparison table?
</Copy>
<Copy k="description.ind2.ex3">
  Give me this in an outline format I can expand later.
</Copy>
<Copy k="description.ind2.ex4">
  Structure this as: problem, solution, next steps.
</Copy>
<Copy k="description.ind2.ex5">I want exactly 5 bullet points, no more.</Copy>
<Copy k="description.ind2.ex6">
  Put this in a FAQ format with questions and answers.
</Copy>
<Copy k="description.ind2.ex7">
  Organize this chronologically with dates as headers.
</Copy>
<Copy k="description.ind2.ex8">
  Give me a one-paragraph executive summary followed by details.
</Copy>
<Copy k="description.ind2.ex9">Format this as a pros/cons list.</Copy>
<Copy k="description.ind2.ex10">
  I need this as a slide-by-slide outline with speaker notes.
</Copy>
<Copy k="description.ind2.try1">
  Request a specific format upfront: 'Give me this as a bulleted list with 5
  items max.'
</Copy>
<Copy k="description.ind2.try2">
  Ask Claude to restructure existing content into a different format like a
  table or outline.
</Copy>

<Copy k="description.ind3.title">
  You communicate the tone and style that fits your voice.
</Copy>
<Copy k="description.ind3.why">
  When you share your preferred style with AI, you're more likely to get
  outputs that feel authentic to you and require less editing.
</Copy>
<Copy k="description.ind3.ex1">
  Write this in a conversational tone like I'm explaining to a friend.
</Copy>
<Copy k="description.ind3.ex2">
  Match the formal academic style of my other work.
</Copy>
<Copy k="description.ind3.ex3">
  I tend to use short sentences and avoid jargon.
</Copy>
<Copy k="description.ind3.ex4">
  Make it punchy and energetic—I write like a startup founder.
</Copy>
<Copy k="description.ind3.ex5">Keep it dry and factual, no enthusiasm.</Copy>
<Copy k="description.ind3.ex6">
  Use a warm, encouraging tone—this is for new employees.
</Copy>
<Copy k="description.ind3.ex7">Write this the way The Economist would.</Copy>
<Copy k="description.ind3.ex8">
  I want it to sound authoritative but not arrogant.
</Copy>
<Copy k="description.ind3.ex9">
  Match the voice in this sample I'm pasting.
</Copy>
<Copy k="description.ind3.ex10">
  Make it sound like me—direct, a little irreverent, no fluff.
</Copy>
<Copy k="description.ind3.try1">
  Describe your writing style to Claude: 'I prefer short sentences and a
  casual tone.'
</Copy>
<Copy k="description.ind3.try2">
  Share a sample of your own writing and ask Claude to match that style.
</Copy>

<Copy k="description.ind4.title">
  You break complex tasks into smaller steps for the AI to follow.
</Copy>
<Copy k="description.ind4.why">
  Guiding AI through a process step by step helps you maintain control and
  catch issues early rather than at the end.
</Copy>
<Copy k="description.ind4.ex1">
  First analyze the data, then summarize the key findings.
</Copy>
<Copy k="description.ind4.ex2">
  Let's start with an outline before writing the full draft.
</Copy>
<Copy k="description.ind4.ex3">
  Walk me through your reasoning before giving me the final answer.
</Copy>
<Copy k="description.ind4.ex4">
  Step 1: identify the main arguments. Step 2: find counterarguments. Step
  3: synthesize.
</Copy>
<Copy k="description.ind4.ex5">
  Before you write anything, tell me what approach you're going to take.
</Copy>
<Copy k="description.ind4.ex6">
  Let's do this in phases—start with research, then we'll move to drafting.
</Copy>
<Copy k="description.ind4.ex7">
  First just give me the structure, then we'll fill in each section.
</Copy>
<Copy k="description.ind4.ex8">
  Can you break this into manageable chunks we can tackle one at a time?
</Copy>
<Copy k="description.ind4.ex9">
  Start by listing what information you'd need, then we'll gather it.
</Copy>
<Copy k="description.ind4.ex10">
  Let's build this iteratively—give me a rough version first.
</Copy>
<Copy k="description.ind4.try1">
  For your next complex task, ask Claude to start with an outline or plan
  before diving in.
</Copy>
<Copy k="description.ind4.try2">
  Tell Claude: 'Let's break this into steps. What should we tackle first?'
</Copy>

<Copy k="description.ind5.title">
  You build on previous exchanges to refine your work together.
</Copy>
<Copy k="description.ind5.why">
  Treating your AI conversation as an ongoing collaboration rather than
  one-off requests leads to progressively better results.
</Copy>
<Copy k="description.ind5.ex1">
  Based on what we discussed earlier, let's adjust the approach.
</Copy>
<Copy k="description.ind5.ex2">
  That's closer—can you make it more specific to healthcare?
</Copy>
<Copy k="description.ind5.ex3">
  Good start. Now let's incorporate the feedback I received.
</Copy>
<Copy k="description.ind5.ex4">
  Keep the structure from your last response but change the examples.
</Copy>
<Copy k="description.ind5.ex5">
  Building on that outline, let's flesh out section 2.
</Copy>
<Copy k="description.ind5.ex6">
  You're getting warmer—try making it less formal.
</Copy>
<Copy k="description.ind5.ex7">
  That version was too long. Can you tighten it while keeping the main
  points?
</Copy>
<Copy k="description.ind5.ex8">
  I like where this is going. Let's push further on the cost analysis.
</Copy>
<Copy k="description.ind5.ex9">
  Take what you just wrote and add the competitor angle we discussed.
</Copy>
<Copy k="description.ind5.ex10">
  Remember the constraints I mentioned earlier? Apply those here.
</Copy>
<Copy k="description.ind5.try1">
  Instead of starting over, tell Claude what to keep and what to change from
  its last response.
</Copy>
<Copy k="description.ind5.try2">
  Reference earlier parts of your conversation: 'Building on what you said
  about X, let's now...'
</Copy>

<Copy k="description.ind6.title">
  You provide examples of what good looks like.
</Copy>
<Copy k="description.ind6.why">
  Showing AI concrete examples of your expectations communicates more than
  abstract descriptions ever could.
</Copy>
<Copy k="description.ind6.ex1">
  Here's a sample email I wrote that has the right tone.
</Copy>
<Copy k="description.ind6.ex2">
  This report from last quarter is the format I want to follow.
</Copy>
<Copy k="description.ind6.ex3">
  I like how this article explains complex ideas simply—do something
  similar.
</Copy>
<Copy k="description.ind6.ex4">
  Here's an example of what I don't want—avoid this style.
</Copy>
<Copy k="description.ind6.ex5">
  This competitor's landing page nails the vibe I'm going for.
</Copy>
<Copy k="description.ind6.ex6">
  I'm pasting a template I like. Use this structure.
</Copy>
<Copy k="description.ind6.ex7">
  The way this author writes introductions is what I'm after.
</Copy>
<Copy k="description.ind6.ex8">
  Here are three headlines that worked well—give me more like these.
</Copy>
<Copy k="description.ind6.ex9">
  This is the level of detail I need—not more, not less.
</Copy>
<Copy k="description.ind6.ex10">
  Look at how this documentation handles code examples. Match that.
</Copy>
<Copy k="description.ind6.try1">
  Paste a sample of work you like and ask Claude to follow that pattern.
</Copy>
<Copy k="description.ind6.try2">
  Say: 'Here's an example of what I'm looking for...' before making your
  request.
</Copy>

<Copy k="description.ind7.title">
  You tell the AI how you want it to interact with you.
</Copy>
<Copy k="description.ind7.why">
  Setting expectations for how AI behaves during your conversation helps you
  get the kind of thinking partner you need.
</Copy>
<Copy k="description.ind7.ex1">
  Be direct and challenge my assumptions if you see gaps.
</Copy>
<Copy k="description.ind7.ex2">
  Ask me clarifying questions before you start writing.
</Copy>
<Copy k="description.ind7.ex3">
  Keep your responses brief so we can iterate quickly.
</Copy>
<Copy k="description.ind7.ex4">
  Don't hedge—give me your best recommendation even if you're uncertain.
</Copy>
<Copy k="description.ind7.ex5">
  Push back if you think I'm wrong about something.
</Copy>
<Copy k="description.ind7.ex6">
  Think out loud so I can follow your reasoning.
</Copy>
<Copy k="description.ind7.ex7">Be a devil's advocate on this proposal.</Copy>
<Copy k="description.ind7.ex8">
  Just give me the answer, no preamble or caveats.
</Copy>
<Copy k="description.ind7.ex9">
  Check in with me after each section before moving on.
</Copy>
<Copy k="description.ind7.ex10">
  I want you to act as a skeptical reviewer.
</Copy>
<Copy k="description.ind7.try1">
  Start a conversation by telling Claude how to interact: 'Keep responses
  under 3 paragraphs.'
</Copy>
<Copy k="description.ind7.try2">
  Ask Claude to check in with you: 'Ask me 2-3 questions before you start
  drafting.'
</Copy>

<Copy k="description.ind8.title">
  You set boundaries on what the AI should and shouldn't do.
</Copy>
<Copy k="description.ind8.why">
  Being clear about limits helps AI focus on what matters most to you and
  avoid wasted effort.
</Copy>
<Copy k="description.ind8.ex1">
  Don't suggest solutions yet. Just help me understand the problem.
</Copy>
<Copy k="description.ind8.ex2">
  Focus only on the marketing angle, not the technical details.
</Copy>
<Copy k="description.ind8.ex3">
  Stick to the information I've provided rather than adding assumptions.
</Copy>
<Copy k="description.ind8.ex4">
  Don't include anything about pricing—that's confidential.
</Copy>
<Copy k="description.ind8.ex5">Only use sources from the last 2 years.</Copy>
<Copy k="description.ind8.ex6">
  Skip the introduction—I'll write that myself.
</Copy>
<Copy k="description.ind8.ex7">Don't give me more than 3 options.</Copy>
<Copy k="description.ind8.ex8">Avoid mentioning competitors by name.</Copy>
<Copy k="description.ind8.ex9">
  Stay within the scope of US regulations only.
</Copy>
<Copy k="description.ind8.ex10">
  Don't make up statistics—only use what I've given you.
</Copy>
<Copy k="description.ind8.try1">
  Add constraints to your next request: 'Only use the information I've
  provided.'
</Copy>
<Copy k="description.ind8.try2">
  Tell Claude what NOT to do: 'Don't give me solutions yet—just help me
  explore the problem.'
</Copy>

<Copy k="delegation.ind1.title">
  You clarify your goal before asking AI for help.
</Copy>
<Copy k="delegation.ind1.why">
  Understanding what you're actually trying to accomplish helps you use AI
  more effectively and avoid getting distracted by tangents.
</Copy>
<Copy k="delegation.ind1.ex1">
  My goal is to persuade the committee to approve the budget.
</Copy>
<Copy k="delegation.ind1.ex2">
  I need to understand this concept well enough to teach it.
</Copy>
<Copy k="delegation.ind1.ex3">
  I want to identify the three strongest arguments against my position.
</Copy>
<Copy k="delegation.ind1.ex4">
  The outcome I need is a decision on which vendor to choose.
</Copy>
<Copy k="delegation.ind1.ex5">
  I'm trying to figure out if this idea is worth pursuing further.
</Copy>
<Copy k="delegation.ind1.ex6">
  My objective is to simplify this process without losing accuracy.
</Copy>
<Copy k="delegation.ind1.ex7">
  What I really need is to unblock my team on this issue.
</Copy>
<Copy k="delegation.ind1.ex8">
  I want to stress-test my reasoning before the presentation.
</Copy>
<Copy k="delegation.ind1.ex9">
  The end goal is a draft I can send to legal for review.
</Copy>
<Copy k="delegation.ind1.ex10">
  I'm trying to figure out why this approach isn't working.
</Copy>
<Copy k="delegation.ind1.try1">
  Start your next request by stating your goal: 'My goal is to... Can you
  help me...'
</Copy>
<Copy k="delegation.ind1.try2">
  Before asking for help, write down what success looks like for this task.
</Copy>

<Copy k="delegation.ind2.title">
  You consult AI about how to approach a problem before diving into
  execution.
</Copy>
<Copy k="delegation.ind2.why">
  Asking AI to help you think through your approach—before starting
  work—leverages its ability to suggest frameworks, surface considerations,
  and identify angles you might not have considered.
</Copy>
<Copy k="delegation.ind2.ex1">
  Before I start, what's the best way to approach this analysis?
</Copy>
<Copy k="delegation.ind2.ex2">
  What framework would you suggest for thinking through this decision?
</Copy>
<Copy k="delegation.ind2.ex3">
  Help me identify the key questions I should be asking here.
</Copy>
<Copy k="delegation.ind2.ex4">
  How would you structure tackling this problem?
</Copy>
<Copy k="delegation.ind2.ex5">
  What are the different ways I could approach this?
</Copy>
<Copy k="delegation.ind2.ex6">
  Before I dive in, what am I not thinking about?
</Copy>
<Copy k="delegation.ind2.ex7">
  What's the right mental model for this kind of situation?
</Copy>
<Copy k="delegation.ind2.ex8">
  Help me think through my options before I commit to a direction.
</Copy>
<Copy k="delegation.ind2.ex9">
  What would you recommend I consider before starting?
</Copy>
<Copy k="delegation.ind2.ex10">
  Is there a standard methodology for problems like this?
</Copy>
<Copy k="delegation.ind2.try1">
  Before your next AI task, start with: 'What's the best way to approach
  this problem?'
</Copy>
<Copy k="delegation.ind2.try2">
  Ask Claude to suggest 2-3 different approaches or frameworks before you
  pick one to pursue.
</Copy>

<Copy k="delegation.ind3.title">
  You recognize when a task isn't right for AI.
</Copy>
<Copy k="delegation.ind3.why">
  Knowing when to not use AI is just as important as knowing when to use it.
</Copy>
<Copy k="delegation.ind3.ex1">
  This is too personal. I should write this myself.
</Copy>
<Copy k="delegation.ind3.ex2">
  I need to think through this on my own first.
</Copy>
<Copy k="delegation.ind3.ex3">
  The stakes are too high to rely on AI for this decision.
</Copy>
<Copy k="delegation.ind3.ex4">
  Actually, this needs human judgment I can't outsource.
</Copy>
<Copy k="delegation.ind3.ex5">
  This is something I need to work through myself.
</Copy>
<Copy k="delegation.ind3.ex6">
  I don't think AI is the right tool for this particular thing.
</Copy>
<Copy k="delegation.ind3.ex7">
  Let me handle this one—it requires relationship context.
</Copy>
<Copy k="delegation.ind3.ex8">
  I should probably do this manually to make sure it's right.
</Copy>
<Copy k="delegation.ind3.ex9">
  This feels like something I shouldn't delegate.
</Copy>
<Copy k="delegation.ind3.ex10">
  On second thought, I need to be the one to write this.
</Copy>
<Copy k="delegation.ind3.try1">
  Next time you reach for AI, pause and ask: 'Is this something I should do
  myself?'
</Copy>
<Copy k="delegation.ind3.try2">
  Consider whether the task involves personal relationships or high-stakes
  decisions.
</Copy>

<Copy k="delegation.ind4.title">
  You consider what AI does well and where it struggles.
</Copy>
<Copy k="delegation.ind4.why">
  Understanding AI's strengths and limitations helps you set realistic
  expectations and plan for where you'll need to do extra verification.
</Copy>
<Copy k="delegation.ind4.ex1">
  AI is great at generating options, but I'll need to evaluate them myself.
</Copy>
<Copy k="delegation.ind4.ex2">
  This involves recent events, so the information might be outdated.
</Copy>
<Copy k="delegation.ind4.ex3">
  I know AI can miss nuance, so I'll review the tone carefully.
</Copy>
<Copy k="delegation.ind4.ex4">
  You're good at structure, but I'll need to fact-check the specifics.
</Copy>
<Copy k="delegation.ind4.ex5">
  This requires creativity you might not have—let's see.
</Copy>
<Copy k="delegation.ind4.ex6">
  I expect you might hallucinate details here, so I'll verify.
</Copy>
<Copy k="delegation.ind4.ex7">
  You tend to be verbose, so I'll need to trim this down.
</Copy>
<Copy k="delegation.ind4.ex8">
  AI usually does well with this kind of task.
</Copy>
<Copy k="delegation.ind4.ex9">
  You might not catch the sarcasm in this text.
</Copy>
<Copy k="delegation.ind4.ex10">
  I know you can't access real-time data, so I'll add the current numbers.
</Copy>
<Copy k="delegation.ind4.try1">
  Ask Claude directly: 'What should I verify or be careful about with this
  output?'
</Copy>
<Copy k="delegation.ind4.try2">
  Before starting, note where you'll need to apply your own judgment to the
  results.
</Copy>

<Copy k="delegation.ind5.title">
  You stay involved rather than just accepting what AI produces.
</Copy>
<Copy k="delegation.ind5.why">
  Treating AI as a collaborator rather than a vending machine leads to
  better outcomes and helps you learn.
</Copy>
<Copy k="delegation.ind5.ex1">
  Let's work on this section together before moving on.
</Copy>
<Copy k="delegation.ind5.ex2">
  I want to understand your reasoning, not just see the answer.
</Copy>
<Copy k="delegation.ind5.ex3">
  Show me a few different directions and I'll pick which to develop.
</Copy>
<Copy k="delegation.ind5.ex4">Walk me through how you got there.</Copy>
<Copy k="delegation.ind5.ex5">Let me review this before you continue.</Copy>
<Copy k="delegation.ind5.ex6">
  I want to be involved in shaping this, not just receive a finished
  product.
</Copy>
<Copy k="delegation.ind5.ex7">
  Pause here—I want to give input before you go further.
</Copy>
<Copy k="delegation.ind5.ex8">
  Give me options so I can choose the direction.
</Copy>
<Copy k="delegation.ind5.ex9">
  Explain your thinking so I can learn from this.
</Copy>
<Copy k="delegation.ind5.ex10">
  Let's iterate on this together rather than you just delivering something.
</Copy>
<Copy k="delegation.ind5.try1">
  Ask Claude to explain its reasoning: 'Walk me through how you approached
  this.'
</Copy>
<Copy k="delegation.ind5.try2">
  Request options instead of one answer: 'Give me three different directions
  to consider.'
</Copy>

<Copy k="delegation.ind6.title">
  You choose the right tool or approach for the job.
</Copy>
<Copy k="delegation.ind6.why">
  Different AI tools and techniques work better for different tasks and
  matching them thoughtfully improves your results.
</Copy>
<Copy k="delegation.ind6.ex1">
  Let me try a different approach since that prompt isn't working.
</Copy>
<Copy k="delegation.ind6.ex2">
  I'll use the longer context window for this research task.
</Copy>
<Copy k="delegation.ind6.ex3">
  This creative task might work better if I share some examples first.
</Copy>
<Copy k="delegation.ind6.ex4">
  Let me rephrase—I think I wasn't clear enough.
</Copy>
<Copy k="delegation.ind6.ex5">
  Maybe I should upload the document instead of pasting it.
</Copy>
<Copy k="delegation.ind6.ex6">Let me try asking this a different way.</Copy>
<Copy k="delegation.ind6.ex7">
  I'll break this into smaller requests instead of one big one.
</Copy>
<Copy k="delegation.ind6.ex8">
  This might work better as a back-and-forth conversation.
</Copy>
<Copy k="delegation.ind6.ex9">
  Let me give you more context—that might help.
</Copy>
<Copy k="delegation.ind6.ex10">
  I should probably use a different tool for this part.
</Copy>
<Copy k="delegation.ind6.try1">
  If you're not getting good results, try rephrasing your request or
  providing more context.
</Copy>
<Copy k="delegation.ind6.try2">
  Experiment with different approaches: examples, step-by-step, or
  role-playing.
</Copy>

<Copy k="delegation.ind7.title">
  You adjust who does what as the work evolves.
</Copy>
<Copy k="delegation.ind7.why">
  Being flexible about task division as you learn more helps you optimize
  the collaboration over time.
</Copy>
<Copy k="delegation.ind7.ex1">
  Actually, this is more complex than I thought. Let me take over this part.
</Copy>
<Copy k="delegation.ind7.ex2">
  You're doing well with the structure. Keep going while I review.
</Copy>
<Copy k="delegation.ind7.ex3">
  I have more context now, so let me guide this section more directly.
</Copy>
<Copy k="delegation.ind7.ex4">
  I'll handle this piece—you focus on the rest.
</Copy>
<Copy k="delegation.ind7.ex5">
  Let me take back the conclusion, but you can finish the analysis.
</Copy>
<Copy k="delegation.ind7.ex6">
  This part needs my direct input. I'll write it.
</Copy>
<Copy k="delegation.ind7.ex7">
  You keep going on that while I work on this other section.
</Copy>
<Copy k="delegation.ind7.ex8">
  I'm going to jump in here because I see where this needs to go.
</Copy>
<Copy k="delegation.ind7.ex9">
  Actually, you can handle more of this than I thought.
</Copy>
<Copy k="delegation.ind7.ex10">
  Let me redirect you—I should own this part.
</Copy>
<Copy k="delegation.ind7.try1">
  Mid-task, reassess: 'This part needs my direct input. Let me take over
  here.'
</Copy>
<Copy k="delegation.ind7.try2">
  Notice when Claude is doing well and delegate more: 'That's great—keep
  going with the next section.'
</Copy>

<Copy k="discernment.ind1.title">You check facts and claims that matter.</Copy>
<Copy k="discernment.ind1.why">
  Verifying important information AI provides protects you from confidently
  sharing something incorrect.
</Copy>
<Copy k="discernment.ind1.ex1">
  I need to verify these statistics before using them.
</Copy>
<Copy k="discernment.ind1.ex2">
  Let me confirm this is still current policy.
</Copy>
<Copy k="discernment.ind1.ex3">
  Can you show me where you got this information?
</Copy>
<Copy k="discernment.ind1.ex4">
  I should double-check this claim before I repeat it.
</Copy>
<Copy k="discernment.ind1.ex5">
  Is this actually accurate? I want to verify.
</Copy>
<Copy k="discernment.ind1.ex6">
  I'm going to look up this figure independently.
</Copy>
<Copy k="discernment.ind1.ex7">Let me fact-check the key claims here.</Copy>
<Copy k="discernment.ind1.ex8">
  I don't want to cite something that's wrong—let me verify.
</Copy>
<Copy k="discernment.ind1.ex9">Where does this number come from?</Copy>
<Copy k="discernment.ind1.ex10">
  I'll need to confirm this with a primary source.
</Copy>
<Copy k="discernment.ind1.try1">
  Ask Claude: 'What claims here should I verify before using this?'
</Copy>
<Copy k="discernment.ind1.try2">
  Pick one important fact from Claude's response and look it up
  independently.
</Copy>

<Copy k="discernment.ind2.title">
  You notice when AI's reasoning doesn't hold up.
</Copy>
<Copy k="discernment.ind2.why">
  Catching logical gaps or assumptions in how AI arrived at an answer helps
  you avoid building on a shaky foundation.
</Copy>
<Copy k="discernment.ind2.ex1">
  Wait, that conclusion doesn't follow from what you said earlier.
</Copy>
<Copy k="discernment.ind2.ex2">
  You skipped over the most important consideration.
</Copy>
<Copy k="discernment.ind2.ex3">
  That's a fair point in general but doesn't apply to our specific
  situation.
</Copy>
<Copy k="discernment.ind2.ex4">Hold on—there's a logical gap here.</Copy>
<Copy k="discernment.ind2.ex5">
  How did you get from A to B? That seems like a leap.
</Copy>
<Copy k="discernment.ind2.ex6">
  You're assuming something that isn't true in our case.
</Copy>
<Copy k="discernment.ind2.ex7">That reasoning is circular.</Copy>
<Copy k="discernment.ind2.ex8">I don't think that follows.</Copy>
<Copy k="discernment.ind2.ex9">
  You're conflating two different things here.
</Copy>
<Copy k="discernment.ind2.ex10">
  The premise is wrong, so the conclusion doesn't work.
</Copy>
<Copy k="discernment.ind2.try1">
  Ask Claude to show its reasoning: 'How did you arrive at that conclusion?'
</Copy>
<Copy k="discernment.ind2.try2">
  If something feels off, push back: 'Wait—explain the connection between X
  and Y.'
</Copy>

<Copy k="discernment.ind3.title">
  You recognize when AI might be missing important context.
</Copy>
<Copy k="discernment.ind3.why">
  AI can only work with what it knows and spotting blind spots helps you
  fill in gaps before they cause problems.
</Copy>
<Copy k="discernment.ind3.ex1">
  You don't know about the history between these teams.
</Copy>
<Copy k="discernment.ind3.ex2">
  This makes sense in theory but our budget constraints change things.
</Copy>
<Copy k="discernment.ind3.ex3">
  You're missing that we already tried this approach last year.
</Copy>
<Copy k="discernment.ind3.ex4">
  There's context here you don't have access to.
</Copy>
<Copy k="discernment.ind3.ex5">
  You wouldn't know this, but we have a constraint that matters.
</Copy>
<Copy k="discernment.ind3.ex6">
  Let me fill in some background you're missing.
</Copy>
<Copy k="discernment.ind3.ex7">
  Your suggestion assumes something that's not true for our org.
</Copy>
<Copy k="discernment.ind3.ex8">
  There's political context here that changes the picture.
</Copy>
<Copy k="discernment.ind3.ex9">
  You don't have visibility into why we made that choice.
</Copy>
<Copy k="discernment.ind3.ex10">
  I should mention something you couldn't know.
</Copy>
<Copy k="discernment.ind3.try1">
  After getting advice, ask: 'What context would change this
  recommendation?'
</Copy>
<Copy k="discernment.ind3.try2">
  Proactively share constraints: 'You should know that we've already tried X
  and it didn't work.'
</Copy>

<Copy k="discernment.ind4.title">
  You assess whether you and AI are making progress together.
</Copy>
<Copy k="discernment.ind4.why">
  Stepping back to evaluate whether your collaboration is working helps you
  adjust your approach when needed.
</Copy>
<Copy k="discernment.ind4.ex1">
  We keep going in circles. Let me reframe the problem.
</Copy>
<Copy k="discernment.ind4.ex2">
  This isn't getting us closer to what I need. Let's try something
  different.
</Copy>
<Copy k="discernment.ind4.ex3">
  I think we're overcomplicating this. What's the simplest version?
</Copy>
<Copy k="discernment.ind4.ex4">
  We've been at this for a while—are we making progress?
</Copy>
<Copy k="discernment.ind4.ex5">
  Let me step back and see if this approach is working.
</Copy>
<Copy k="discernment.ind4.ex6">I feel like we're stuck. Let's reset.</Copy>
<Copy k="discernment.ind4.ex7">
  We're not converging. Let me try a different angle.
</Copy>
<Copy k="discernment.ind4.ex8">
  This back-and-forth isn't productive. Let me rethink.
</Copy>
<Copy k="discernment.ind4.ex9">
  I don't think this is going anywhere. New approach.
</Copy>
<Copy k="discernment.ind4.ex10">
  Time to reassess whether we're on the right track.
</Copy>
<Copy k="discernment.ind4.try1">
  If you've gone back and forth 3+ times, stop and reframe: 'Let's try a
  different approach.'
</Copy>
<Copy k="discernment.ind4.try2">
  Ask Claude: 'Are we making progress? What should we try differently?'
</Copy>

<Copy k="discernment.ind5.title">
  You notice when AI's communication style isn't working for you.
</Copy>
<Copy k="discernment.ind5.why">
  Paying attention to whether how AI interacts helps or hinders your work
  lets you make adjustments that improve the collaboration.
</Copy>
<Copy k="discernment.ind5.ex1">
  These responses are too long for how I want to work right now.
</Copy>
<Copy k="discernment.ind5.ex2">
  I need you to push back more rather than just agreeing.
</Copy>
<Copy k="discernment.ind5.ex3">
  The formal tone is making this feel like more work than it should be.
</Copy>
<Copy k="discernment.ind5.ex4">Can you be more concise?</Copy>
<Copy k="discernment.ind5.ex5">
  You're being too cautious—just give me your take.
</Copy>
<Copy k="discernment.ind5.ex6">I don't need all the caveats.</Copy>
<Copy k="discernment.ind5.ex7">This is too verbose for what I need.</Copy>
<Copy k="discernment.ind5.ex8">You're hedging too much. Be more direct.</Copy>
<Copy k="discernment.ind5.ex9">
  The way you're explaining this isn't clicking for me.
</Copy>
<Copy k="discernment.ind5.ex10">
  I need a different style here—this isn't working.
</Copy>
<Copy k="discernment.ind5.try1">
  If responses feel off, adjust: 'Be more concise' or 'Use a more casual
  tone.'
</Copy>
<Copy k="discernment.ind5.try2">
  Tell Claude what's not working: 'You're being too agreeable—challenge my
  thinking more.'
</Copy>

<Copy k="diligence.ind1.title">
  You're mindful about what information you share with AI.
</Copy>
<Copy k="diligence.ind1.why">
  Being thoughtful about the data and context you provide protects privacy
  and helps you use AI responsibly.
</Copy>
<Copy k="diligence.ind1.ex1">
  I'll anonymize these details before sharing them.
</Copy>
<Copy k="diligence.ind1.ex2">
  Let me describe the situation without naming specific people.
</Copy>
<Copy k="diligence.ind1.ex3">
  I shouldn't paste this confidential document directly.
</Copy>
<Copy k="diligence.ind1.ex4">
  I'll remove the sensitive information before sharing.
</Copy>
<Copy k="diligence.ind1.ex5">Let me redact the identifying details.</Copy>
<Copy k="diligence.ind1.ex6">
  I'm going to describe this generally rather than share specifics.
</Copy>
<Copy k="diligence.ind1.ex7">I won't include the actual customer names.</Copy>
<Copy k="diligence.ind1.ex8">
  Let me strip out the proprietary information first.
</Copy>
<Copy k="diligence.ind1.ex9">I'll give you a sanitized version.</Copy>
<Copy k="diligence.ind1.ex10">
  I need to be careful about what I share here.
</Copy>
<Copy k="diligence.ind1.try1">
  Before pasting content, remove names, emails, and identifying details.
</Copy>
<Copy k="diligence.ind1.try2">
  Practice describing a situation without sharing the actual confidential
  document.
</Copy>

<Copy k="diligence.ind2.title">
  You're honest about AI's role in your work when it matters.
</Copy>
<Copy k="diligence.ind2.why">
  Being upfront about how AI contributed to your work builds trust and meets
  the expectations of those who rely on you.
</Copy>
<Copy k="diligence.ind2.ex1">
  I used AI to help draft this and then edited it substantially.
</Copy>
<Copy k="diligence.ind2.ex2">
  I want to note that AI assisted with the research for this.
</Copy>
<Copy k="diligence.ind2.ex3">
  Should I disclose that I used AI for this project?
</Copy>
<Copy k="diligence.ind2.ex4">
  I'll be transparent that this was AI-assisted.
</Copy>
<Copy k="diligence.ind2.ex5">
  I want to acknowledge AI's role in creating this.
</Copy>
<Copy k="diligence.ind2.ex6">Let me mention that I had AI help with this.</Copy>
<Copy k="diligence.ind2.ex7">
  I should probably tell them this was AI-assisted.
</Copy>
<Copy k="diligence.ind2.ex8">I'll note my use of AI when I share this.</Copy>
<Copy k="diligence.ind2.ex9">I think disclosure is appropriate here.</Copy>
<Copy k="diligence.ind2.ex10">Being honest, I used AI to help with this.</Copy>
<Copy k="diligence.ind2.try1">
  Practice saying: 'I used AI to help draft this, then edited it myself.'
</Copy>
<Copy k="diligence.ind2.try2">
  When in doubt, ask the recipient if they'd want to know about AI
  involvement.
</Copy>

<Copy k="diligence.ind3.title">
  You take responsibility for what you share or submit.
</Copy>
<Copy k="diligence.ind3.why">
  Standing behind AI-assisted work as your own means you've verified it
  meets your standards and you're accountable for it.
</Copy>
<Copy k="diligence.ind3.ex1">
  I've reviewed this thoroughly and I'm confident in it.
</Copy>
<Copy k="diligence.ind3.ex2">
  I take responsibility for any errors even though AI helped.
</Copy>
<Copy k="diligence.ind3.ex3">
  I wouldn't put my name on this until I verify the key claims.
</Copy>
<Copy k="diligence.ind3.ex4">
  Before I send this, I need to make sure I stand behind it.
</Copy>
<Copy k="diligence.ind3.ex5">I own this output—it has my name on it.</Copy>
<Copy k="diligence.ind3.ex6">
  I need to be comfortable being accountable for everything in here.
</Copy>
<Copy k="diligence.ind3.ex7">If this is wrong, that's on me.</Copy>
<Copy k="diligence.ind3.ex8">
  Let me make sure I can defend every part of this.
</Copy>
<Copy k="diligence.ind3.ex9">
  I'm responsible for what I submit, regardless of how it was created.
</Copy>
<Copy k="diligence.ind3.ex10">I need to fully own this before sharing it.</Copy>
<Copy k="diligence.ind3.try1">
  Before sending AI-assisted work, ask: 'Am I ready to stand behind this as
  my own?'
</Copy>
<Copy k="diligence.ind3.try2">
  Read through the entire output and verify you understand and agree with
  every point.
</Copy>

<Copy k="diligence.ind4.title">
  You consider the consequences of putting this work into the world.
</Copy>
<Copy k="diligence.ind4.why">
  Thinking through how your AI-assisted work might be received or used helps
  you catch issues before they cause problems.
</Copy>
<Copy k="diligence.ind4.ex1">
  How might this be misinterpreted if taken out of context?
</Copy>
<Copy k="diligence.ind4.ex2">
  What happens if someone relies on this and it's wrong?
</Copy>
<Copy k="diligence.ind4.ex3">
  I should think about how this might affect the people mentioned.
</Copy>
<Copy k="diligence.ind4.ex4">
  Let me consider the downstream effects of sharing this.
</Copy>
<Copy k="diligence.ind4.ex5">Who might be impacted if this is inaccurate?</Copy>
<Copy k="diligence.ind4.ex6">
  I should think about how this could be used or misused.
</Copy>
<Copy k="diligence.ind4.ex7">
  What are the implications of putting this out there?
</Copy>
<Copy k="diligence.ind4.ex8">
  Let me consider the consequences before I share.
</Copy>
<Copy k="diligence.ind4.ex9">
  Who could be affected by what I'm about to publish?
</Copy>
<Copy k="diligence.ind4.ex10">
  I need to think through the potential impact.
</Copy>
<Copy k="diligence.ind4.try1">
  Before sharing, ask: 'What could go wrong if this gets used or shared
  beyond my intent?'
</Copy>
<Copy k="diligence.ind4.try2">
  Consider how the output might affect people mentioned or involved in the
  topic.
</Copy>
`;export{e as default};