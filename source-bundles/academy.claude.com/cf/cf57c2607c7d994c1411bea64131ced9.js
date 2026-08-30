var e=`---
kind: widget-copy
---

{/* Learner-facing copy for YouDecide.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The learner plays the model:
    for each of four user prompts (\`prompt<n>.text\`) they choose to answer
    directly or call one of the loaded tools, then \`prompt<n>.reveal\` says
    what Claude actually did (\`{strong}\` is a bolded closing sentence, its
    text under \`.strong\`). Tool ids (web_search, …) are data in the
    widget; their one-line descriptions live here under \`tool.<id>.desc\`. */}

<Copy k="label">You are the model</Copy>
<Copy k="status">{n} of {total} · {correct} / {answered} right</Copy>

<Copy k="tools.aria">Tools loaded in this session</Copy>
<Copy k="tools.heading">Tools</Copy>
<Copy k="tool.web_search.desc">Search the web and return result snippets.</Copy>
<Copy k="tool.calendar_list_events.desc">
  List events on the user's calendar.
</Copy>
<Copy k="tool.messages_read.desc">
  Read recent messages from a team channel.
</Copy>

<Copy k="prompt.heading">User prompt</Copy>

<Copy k="prompt1.text">What's on my calendar tomorrow?</Copy>
<Copy k="prompt1.reveal">
  Claude calls the calendar tool. The answer lives outside the model -
  Claude has to fetch it.
</Copy>

<Copy k="prompt2.text">Write me a haiku about sales.</Copy>
<Copy k="prompt2.reveal">
  Claude answers directly - pure generation, with nothing to fetch.
</Copy>

<Copy k="prompt3.text">Who won Best Picture at the Oscars this year?</Copy>
<Copy k="prompt3.reveal">
  Claude calls web_search because the answer may be newer than Claude's
  training data, and web search can fill that gap.
</Copy>

<Copy k="prompt4.text">What's 4,729 × 318?</Copy>
<Copy k="prompt4.reveal">
  This one's a bit of a trick question - there's no calculator tool loaded.
  Claude knows it should use one, but if there's no calculator tool
  available, it will do the math in its head. {strong}
</Copy>
<Copy k="prompt4.reveal.strong">
  Claude can only choose from what's loaded.
</Copy>

<Copy k="action.q">What do you do?</Copy>
<Copy k="action.direct">Answer directly</Copy>
<Copy k="action.tool">Call a tool</Copy>
<Copy k="which.q">Which tool?</Copy>
<Copy k="which.back">Change my mind</Copy>
<Copy k="which.commit">Commit</Copy>

<Copy k="verdict.right">That's what Claude did</Copy>
<Copy k="verdict.wrong">Claude went a different way</Copy>
<Copy k="next">Next prompt</Copy>
<Copy k="tally">All {total} answered · {correct} / {total} right</Copy>
<Copy k="again">Try again</Copy>
`;export{e as default};