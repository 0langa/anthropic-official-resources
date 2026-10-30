var e=`---
kind: widget-copy
---

{/* Learner-facing copy for StrictSwitch.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The tool definition, field
    names, the pattern, the validator message, case numbers and the values
    sent are product syntax replayed from the demo run and stay in the
    widget. */}

<Copy k="note">This replays Meridian's two recorded runs. Nothing is sent to Claude.</Copy>
<Copy k="task">Send the requests with strict off. Then turn strict on and send them again.</Copy>
<Copy k="requestLabel">Request</Copy>
<Copy k="aria.request">Request to the Messages API</Copy>
<Copy k="messagesValue">One stamp request per tool call, 100 tool calls in the run</Copy>
<Copy k="aria.switch">Strict tool use</Copy>
<Copy k="switch.on">On</Copy>
<Copy k="switch.off">Off</Copy>
<Copy k="switch.hint">It adds {flag} and replaces the schema with the one generated from the Pydantic class.</Copy>
<Copy k="aria.definition">Tool definition for {name}</Copy>
<Copy k="changedLine">Changed:</Copy>
<Copy k="changedNote">The highlighted lines are what turning strict on changed.</Copy>
<Copy k="elided">Each "…" line stands for parts of the definition not shown.</Copy>
<Copy k="rule">The backend validator wants {field} to match {pattern}.</Copy>
<Copy k="send">Send 100 requests</Copy>
<Copy k="sending">Sending</Copy>
<Copy k="reset">Start over</Copy>
<Copy k="run.off">No strict</Copy>
<Copy k="notSent">Not sent yet</Copy>
<Copy k="rejected">{n} of {total} rejected by the validator</Copy>
<Copy k="examples">Three of the values Claude sent for {field}</Copy>
<Copy k="col.case">Case</Copy>
<Copy k="col.value">Value sent</Copy>
<Copy k="failedWith">Each one failed with {message}.</Copy>
<Copy k="oneField">Every rejection in this run was on this one field.</Copy>
<Copy k="noLicense">Requests with no license stated: {n}</Copy>
<Copy k="returnedNull">Came back null: {n}</Copy>
<Copy k="invented">Licenses invented: {n}</Copy>
<Copy k="nullNote">Null fits the schema, so the validator accepts it.</Copy>
<Copy k="announce.off">Without strict, the validator rejected {n} of {total} tool calls.</Copy>
<Copy k="announce.on">With strict, the validator rejected {n} of {total} tool calls.</Copy>
<Copy k="closing">With strict on, every tool call fit the format the validator wants. The 28 requests that never stated a license still have none, and each came back null.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 7303a5ab132e0e44 */}
<Copy k="widget.description">
  Simulation: this widget replays a recorded test of sending 100 stamp-request
  tool calls to Claude twice, once with a handwritten tool definition and
  strict tool use off, then with a schema generated from a validator class and
  strict turned on. A switch toggles strict on and off, showing the tool
  definition each run sent with the changes strict adds highlighted, including
  a pattern constraint on one field. Sending each run reveals how many of the
  100 tool calls were rejected by the validator, with example values and
  failure reasons for the off run, and counts of null versus invented values
  for the on run. It teaches that generating a schema from your validator and
  enabling strict tool use makes Claude's tool calls match the format your
  backend requires, though strict cannot supply missing facts the request
  never gave.
</Copy>
<Copy k="widget.summary">
  Simulation: replays a recorded test of sending 100 stamp-request tool calls
  with a handwritten definition and strict off, then a generated schema with
  strict on, revealing how many the validator rejected each time. It teaches
  that a schema generated from your validator plus strict tool use matches
  Claude's calls to your backend's format.
</Copy>
`;export{e as default};