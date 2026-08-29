var e=`---
kind: widget-copy
---

{/* Learner-facing copy for ChromeDashboardHandoff.tsx (see academy-web
    src/components/mdx/WidgetCopy.tsx). Keys are machine identifiers —
    translate ONLY the text between the tags. The mock dashboard's account
    names, ARR figures, the address-bar URL, and the exported file name are
    simulated data and live in the widget. */}

<Copy k="promptLabel">Cowork prompt</Copy>
<Copy k="prompt">
  “Pull yellow and red accounts from the customer-health dashboard for the
  last 30 days, then build a one-page summary with the top three at-risk
  accounts.”
</Copy>

<Copy k="browser.aria">
  Claude operating a Chrome browser tab on a customer-health dashboard
</Copy>
<Copy k="tab.claude">Claude (MCP)</Copy>
<Copy k="tab.dashboard">Customer Health — Dashboard</Copy>
<Copy k="pageTitle">Customer health</Copy>

<Copy k="status.green">Green</Copy>
<Copy k="status.yellow">Yellow</Copy>
<Copy k="status.red">Red</Copy>
<Copy k="statusFilter.all">All statuses</Copy>
<Copy k="statusFilter.both">Yellow, Red</Copy>

<Copy k="range.7">Last 7 days</Copy>
<Copy k="range.30">Last 30 days</Copy>
<Copy k="range.90">Last 90 days</Copy>

<Copy k="export">Export</Copy>
<Copy k="toast">Exported · handed to Cowork</Copy>

<Copy k="th.account">Account</Copy>
<Copy k="th.arr">ARR</Copy>
<Copy k="th.status">Status</Copy>
<Copy k="th.last">Last activity</Copy>

<Copy k="row.northwind.last">2 hours ago</Copy>
<Copy k="row.acme.last">Yesterday</Copy>
<Copy k="row.globex.last">5 days ago</Copy>
<Copy k="row.initech.last">12 days ago</Copy>
<Copy k="row.hooli.last">3 hours ago</Copy>
<Copy k="row.massive.last">8 days ago</Copy>
<Copy k="row.soylent.last">Yesterday</Copy>

<Copy k="cursorLabel">Claude</Copy>
<Copy k="handoffLabel">Cowork takes it from here</Copy>
<Copy k="tileStatus">
  Pulling Drive context · building summary · 1 of 3 sections
</Copy>
`;export{e as default};