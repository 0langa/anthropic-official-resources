var e=`---
kind: widget-copy
---

{/* Learner-facing copy for FigAccounts.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). The figure depicts the English admin
    console; its control labels are product syntax and live in
    _consoleLabels.ts. This file carries the figure's accessible description
    plus the generated widget description and summary. */}

<Copy k="aria">The create-accounts screen in the setup flow: a suggested email address for Claude Tag, then the steps to invite Claude Tag to each tool and connect with its credentials</Copy>

{/* Written from this widget's copy or code by \`node apps/academy/scripts/describe-widgets.ts\`, run at the
    repository root. Run it again after you edit its copy or code. described-from: eaa889a6a7010b5b */}
<Copy k="widget.description">
  Illustration: the create-accounts screen, step four of the Claude Tag setup
  flow. It walks through giving Claude Tag its own identity in the tools it
  will use: create an email address for Claude Tag, invite that account to
  each tool, and connect each tool with the account's credentials, with each
  connection marked once it is made. It teaches that in channels Claude Tag
  acts in these tools as its own account, so its work is visible under that
  account and limited to what the account was granted. A skipped tool stays
  out of reach until it is connected.
</Copy>
<Copy k="widget.summary">
  Illustration: the create-accounts step of the Claude Tag setup flow, showing
  the email address to create for Claude Tag and the steps to invite it to
  each tool and connect each tool with its credentials.
</Copy>
`;export{e as default};