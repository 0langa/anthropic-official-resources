var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ProductionLensAudit.tsx — the "Production Lens
    Audit" three-part exercise (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. \`{name}\` tokens are runtime
    placeholders and must survive verbatim. */}

<Copy k="project.label">The project</Copy>
<Copy k="project.placeholder">Name the project you are auditing</Copy>

<Copy k="tab.1">Part I</Copy>
<Copy k="tab.2">Part II</Copy>
<Copy k="tab.3">Part III</Copy>

<Copy k="p1.h">Part I: Map your stages</Copy>
<Copy k="p1.sub">
  Break the project into its real stages, using your own names. In each stage
  description, detail what it costs you: the {time} it takes, the kind of
  {effort} it draws on (skill, labor, cognitive, or emotional), and the
  {resources} it consumes. Do not skip emotional effort.
</Copy>
<Copy k="p1.sub.time">Time</Copy>
<Copy k="p1.sub.effort">Effort</Copy>
<Copy k="p1.sub.resources">Resources</Copy>

<Copy k="th.stage">Stage</Copy>
<Copy k="th.desc">Stage description (its constraints)</Copy>
<Copy k="row.stagePlaceholder">Stage name</Copy>
<Copy k="row.descPlaceholder">
  Time, Effort (which kind?), and Resources for this stage
</Copy>
<Copy k="row.remove">Remove this stage</Copy>
<Copy k="addStage">Add a stage</Copy>

<Copy k="binds.label">
  Which constraint binds hardest on this project, and where?
</Copy>
<Copy k="binds.placeholder">
  Name the constraint and the stage where it bites...
</Copy>

<Copy k="p2.h">Part II: Warm up on history</Copy>
<Copy k="p2.sub">
  Before analyzing AI, practice the pattern on a technology you can see
  clearly.
</Copy>
<Copy k="tech.label">A pre-AI technology that changed your field</Copy>
<Copy k="tech.placeholder">
  e.g. the digital camera, the synthesizer, desktop publishing
</Copy>
<Copy k="techEffect.label">
  What did it lower, what did it raise or create, and what did it shift?
</Copy>
<Copy k="techEffect.placeholder">Cover all three in a few lines...</Copy>

<Copy k="p3.h">Part III: Audit one tool</Copy>
<Copy k="p3.sub">
  Name one AI tool, then map how it changes the constraints at each stage
  above (what it lowers, raises, shifts, or introduces). If you have not used
  an AI tool enough to audit one, use the most recent technology you did
  adopt. Your stages from Part I appear here automatically.
</Copy>
<Copy k="tool.label">The tool</Copy>
<Copy k="tool.placeholder">Name the tool</Copy>
<Copy k="map.placeholder">
  What the tool lowers, raises, shifts, or introduces at this stage
</Copy>
<Copy k="map.empty">
  Add and name your stages in Part I, and they will appear here so you can map
  the tool against each one.
</Copy>
<Copy k="bottom.label">
  Bottom line: are the new and shifted costs smaller or larger than the
  savings?
</Copy>
<Copy k="bottom.placeholder">
  The honest verdict for this project and this tool...
</Copy>

<Copy k="copyBtn">Copy my answers</Copy>
<Copy k="copied">Copied</Copy>
<Copy k="dlBtn">Download as HTML</Copy>
<Copy k="downloaded">Downloaded</Copy>
<Copy k="saved">Saved</Copy>
<Copy k="saveUnavailable">Autosave unavailable</Copy>
<Copy k="note">
  Your answers save in this browser only. They are not stored in your Academy
  account and do not move to another device. Use Copy my answers, or Download
  as HTML to save a styled copy, to keep them in your own files.
</Copy>

<Copy k="txt.title">PRODUCTION LENS AUDIT</Copy>
<Copy k="txt.project">Project: {v}</Copy>
<Copy k="txt.p1">PART I: MAP YOUR STAGES</Copy>
<Copy k="txt.p2">PART II: WARM UP ON HISTORY</Copy>
<Copy k="txt.p3">PART III: AUDIT ONE TOOL</Copy>
<Copy k="txt.stage">Stage {n}: {v}</Copy>
<Copy k="txt.binds">Binds hardest: {v}</Copy>
<Copy k="txt.technology">Technology: {v}</Copy>
<Copy k="txt.techEffect">Lowered, raised, shifted: {v}</Copy>
<Copy k="txt.tool">Tool: {v}</Copy>
<Copy k="txt.stageMap">How the tool changes each stage:</Copy>
<Copy k="txt.mapLine">{stage}: {v}</Copy>
<Copy k="txt.bottom">Bottom line: {v}</Copy>
<Copy k="txt.unnamed">(unnamed)</Copy>
<Copy k="txt.noDesc">(no description)</Copy>
<Copy k="txt.noStages">(no stages added yet)</Copy>
<Copy k="txt.notAnswered">(not yet answered)</Copy>
<Copy k="txt.blank">(blank)</Copy>

<Copy k="export.title">Production Lens Audit</Copy>
<Copy k="export.kicker">AI Fluency for creative work</Copy>
<Copy k="export.stamp">Your responses, exported {date}</Copy>
<Copy k="export.footer">
  These are your own responses. They are not stored in Claude Academy.
</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 8c9747e7b96cfa02 */}
<Copy k="widget.description">
  Exercise: a three-part worksheet applies the Production Lens to a real
  project the learner names. Part I breaks the project into its own stages,
  describing the Time, Effort (skill, labor, cognitive, or emotional), and
  Resources each stage costs, then asks which constraint binds hardest and
  where. Part II has the learner practice the same analysis on a pre-AI
  technology that changed their field, noting what it lowered, raised or
  created, and shifted. Part III names one AI tool and maps, stage by stage
  using the Part I stages, what it lowers, raises, shifts, or introduces,
  ending in a judgment of whether new costs outweigh the savings. Answers
  autosave locally and can be copied or downloaded.
</Copy>
<Copy k="widget.summary">
  Exercise: a three-part worksheet applies the Production Lens to a real
  project, mapping its stages' Time, Effort, and Resources, then practicing
  the same analysis on a pre-AI technology before auditing how an AI tool
  changes those stage-by-stage constraints.
</Copy>
`;export{e as default};