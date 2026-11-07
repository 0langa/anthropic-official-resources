var e=`---
kind: widget-copy
---

{/* Learner-facing copy for PromptParts.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers:
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. The prompt, the patients' names
    and data, and the recorded replies live in the .tsx and are not
    translated. */}

<Copy k="aria">Switch parts of the prompt in or out and see the reply change</Copy>
<Copy k="ask">Switch parts in or out to see how the reply changes for each patient.</Copy>
<Copy k="startOver">Start over</Copy>
<Copy k="aria.prompt">The prompt</Copy>
<Copy k="aria.parts">Parts of the prompt</Copy>
<Copy k="aria.patient">Patient</Copy>
<Copy k="aria.in">in the prompt</Copy>
<Copy k="aria.out">left out</Copy>
<Copy k="aria.met">Met:</Copy>
<Copy k="aria.unmet">Not met:</Copy>
<Copy k="aria.ticks">{name}, {n} of {total} met</Copy>
<Copy k="announce">{name}'s reply: {n} of {total} met.</Copy>

<Copy k="part.C">Context</Copy>
<Copy k="part.F">Output format</Copy>
<Copy k="part.K">Constraints</Copy>

<Copy k="reply">Claude's reply</Copy>
<Copy k="need.who">Practice name and number</Copy>
<Copy k="need.shape">Two plain sentences, no more</Copy>
<Copy k="need.priv">Treatment private</Copy>

<Copy k="v.no">The app can't send this yet.</Copy>
<Copy k="v.yes">The app can send both replies.</Copy>
<Copy k="v.lucky">Three ticks for {name}, but not for {other}.</Copy>
<Copy k="v.proof">One good reply doesn't prove a prompt.</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: d68ab002eb426420 */}
<Copy k="widget.description">
  Explorer: this widget shows the finished prompt of a dentist's booking app:
  a one-line task, a paragraph each for the context, the output format, and
  the constraints, and one patient's appointment data. The learner switches
  any of the three paragraphs in or out, in any order, for either of two
  patients. Each time, it shows the reply recorded from Claude for that exact
  prompt, marks in red the words that don't belong in it, and checks three
  needs: the practice's name and number, two plain sentences and no more, and
  the treatment kept private. One line says whether the app can send the
  replies yet. The goal is to see what each part changes in the reply, and
  that a prompt that works for one input can fail for another.
</Copy>
<Copy k="widget.summary">
  Explorer: switch the context, the output format, and the constraints of a
  reminder prompt in or out, and read Claude's recorded reply to each version
  for two patients. Each part changes the reply.
</Copy>
`;export{e as default};