var e=`---
kind: widget-copy
---

{/* Learner-facing copy for CloudTaskSurfaces.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The diagram is SVG with fixed
    line positions: \`thread.1\`/\`thread.2\` are the two lines of one label,
    and \`phone.prompt.1\`–\`phone.prompt.4\` are the four lines of one short
    prompt — keep each line short so it fits its slot. */}

<Copy k="kicker">One task, any surface</Copy>
<Copy k="diagram.aria">
  A single Claude Cowork task followed across three surfaces: started from
  the mobile app, checked from a browser, and picked up at the desk. One
  continuous line runs beneath all three because it is the same session
  throughout, running remotely rather than on any one device.
</Copy>

<Copy k="thread.1">one session,</Copy>
<Copy k="thread.2">any device</Copy>

<Copy k="phone.prompt.1">Summarize last</Copy>
<Copy k="phone.prompt.2">quarter’s support</Copy>
<Copy k="phone.prompt.3">tickets into</Copy>
<Copy k="phone.prompt.4">one page</Copy>
<Copy k="phone.started">started</Copy>

<Copy k="browser.working">Working: step {step} of {total}</Copy>
<Copy k="browser.detail">reading connected files</Copy>

<Copy k="desk.done">done</Copy>

<Copy k="cap.phone.title">Start from your phone</Copy>
<Copy k="cap.phone.sub">on your way in</Copy>
<Copy k="cap.browser.title">Check from any browser</Copy>
<Copy k="cap.browser.sub">later that day</Copy>
<Copy k="cap.desk.title">Pick up at your desk</Copy>
<Copy k="cap.desk.sub">the deliverable is waiting</Copy>
`;export{e as default};