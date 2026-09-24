var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ReviewOutput.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). The finding summaries and tag labels
    it shows live in this folder's _shared.copy.mdx. \`{name}\` tokens are
    runtime placeholders and must survive verbatim. */}

<Copy k="lead">Reviewed {files} changed files. {count} findings:</Copy>

{/* Written from this widget's copy by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy. described-from: 2f0b539359ed8852 */}
<Copy k="widget.description">
  Transcript: displays the output of running the /code-review command on a
  sample code change, shown as it would appear in a conversation. It reports a
  short list of findings, each naming a file location, a tag of either
  correctness or style, and a one-line summary of the issue found, such as a
  weakened test, a validation gap, a hard-coded configuration value, or a
  minor style inconsistency. The goal is to show what a second-opinion review
  surfaces when run in a clean context separate from the session that made the
  change, and to ground the next exercise, where the learner sorts these same
  findings into fix, ask, or leave categories.
</Copy>
<Copy k="widget.summary">
  Transcript: shows /code-review's findings on a sample code change, each with
  a file location, a correctness-or-style tag, and a one-line summary,
  illustrating what a clean-context second opinion surfaces before the learner
  sorts these findings next.
</Copy>
`;export{e as default};