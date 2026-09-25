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

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: 7afb299dcf4991c8 */}
<Copy k="widget.description">
  Diagram: an animated illustration, titled One task, any surface, that
  follows a single Cowork task across three devices. One continuous line,
  labeled one session, any device, runs beneath all three. The task is started
  from a phone on the way in, checked from a browser later that day while it
  works through its steps and reads connected files, and picked up at a desk,
  where the finished deliverable is waiting. A marker travels the line from
  one device to the next. The goal is to show that a Cowork task is one
  session that runs remotely, so you can start it, check it, and collect the
  result from different devices.
</Copy>
<Copy k="widget.summary">
  Diagram: An animated timeline follows one Claude Cowork task across three
  surfaces, started from a phone, checked in a browser, and picked up finished
  at a desk, showing it's one continuous remote session, not separate ones.
</Copy>
`;export{e as default};