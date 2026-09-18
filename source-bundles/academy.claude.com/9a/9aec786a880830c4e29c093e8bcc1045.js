import{$p as e,Zp as t}from"../../../content-de-meta-ee5tgx76.js";var n=t();function r(t){let r={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{CoworkPrompt:i,CoworkResponse:o,Image:s,TryIn:c}=r;return i||a("CoworkPrompt",!0),o||a("CoworkResponse",!0),s||a("Image",!0),c||a("TryIn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{src:"./audit-a-folder-of-visual-assets-against-your-guidelines.png",alt:"Audit a folder of visual assets against your guidelines result",preview:!0}),`
`,(0,n.jsx)(r.h2,{id:"1-describe-the-task",children:"1. Describe the task"}),`
`,(0,n.jsx)(r.p,{children:"With Claude Opus 5, any folder of images can be checked against a written set of rules — brand guidelines for marketing assets, accessibility rules for UI screenshots, a style guide for a batch of design exports."}),`
`,(0,n.jsx)(r.p,{children:"Opus 5 reads images at high resolution (up to 2,576 pixels on the long edge), so the small details that decide a match — a hex value, a logo version, a line of legal text — come through clearly. It can hold the rules document and the images together and check one against the other across the whole folder."}),`
`,(0,n.jsx)(r.p,{children:"Here, a folder of live marketing assets gets checked against a brand-guidelines PDF and a legal-compliance sheet."}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsxs)(r.p,{children:["Audit every PNG and JPG in this folder against ",(0,n.jsx)(r.strong,{children:"brand-meridian-2025-q2.pdf"})," and ",(0,n.jsx)(r.strong,{children:"legal-required-copy.txt"}),"."]}),(0,n.jsx)(r.p,{children:"Flag:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:["the old ",(0,n.jsx)(r.strong,{children:"2024 logo"})]}),`
`,(0,n.jsxs)(r.li,{children:["off-brand hex codes (",(0,n.jsx)(r.strong,{children:"#0052B3"})," instead of #004B9F, ",(0,n.jsx)(r.strong,{children:"#D4AF37"})," instead of #C9A961)"]}),`
`,(0,n.jsxs)(r.li,{children:["missing or undersized ",(0,n.jsx)(r.strong,{children:"legal copy"})]}),`
`]}),(0,n.jsxs)(r.p,{children:["Group by violation type. For each one give me ",(0,n.jsx)(r.strong,{children:"filename, issue, guideline value, asset value, and confidence"}),". End with how many assets passed all checks."]})]}),`
`,(0,n.jsx)(r.h2,{id:"2-give-claude-context",children:"2. Give Claude context"}),`
`,(0,n.jsxs)(r.p,{children:["In Claude Cowork, ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13345190-get-started-with-cowork",children:"point your project at the folder"})," that holds the brand-guidelines PDF, the legal sheet, and the asset exports."]}),`
`,(0,n.jsx)(r.p,{children:"Opus 5's high-resolution vision helps while reading small text in the guide and matching it against the same detail across hundreds of images."}),`
`,(0,n.jsx)(r.h3,{id:"required-context",children:"Required context"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A Claude Cowork project pointed at the folder holding the brand-guidelines PDF, legal sheet, and asset exports (PNG/JPEG)"}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"3-what-claude-creates",children:"3. What Claude creates"}),`
`,(0,n.jsx)(r.p,{children:'Claude reads the guide and the legal sheet, then checks every asset in the folder against them. You get a grouped violation list (filename, issue, guideline vs asset value, confidence per item), a compliant count, and a short "less certain" block for the items worth opening yourself.'}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsxs)(r.p,{children:["Audited 200 PNG/JPG files against ",(0,n.jsx)(r.strong,{children:"brand-meridian-2025-q2.pdf"})," and ",(0,n.jsx)(r.strong,{children:"legal-required-copy.txt"}),"."]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Logo & lockup"})," — 3 violations"]}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"q1-social-tile-14.png · 2024 logo still in use · high"}),`
`,(0,n.jsx)(r.li,{children:"partner-onepager-emea.pdf · clear space 8px (min is 20px) · high"}),`
`,(0,n.jsx)(r.li,{children:'product-hero.png · tagline reads "Better Decisions" (approved: "Always On") · high'}),`
`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Color"})," — 2 violations"]}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"email-header-march.png · banner is #0052B3 (guide: #004B9F) · high"}),`
`,(0,n.jsx)(r.li,{children:"social-tile-feb.png · gold reads close to #D4AF37 (guide: #C9A961) · medium — estimated from tone, not a printed hex"}),`
`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Typography"})," — 2 violations"]}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"case-study-onepager.pdf · body is Helvetica (guide: Manrope) · high"}),`
`,(0,n.jsx)(r.li,{children:"q2-email-template.html · H1 at 16pt (guide: 18pt+) · high"}),`
`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Required legal copy"})," — 3 violations"]}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"partner-onepager-emea.pdf · footer at 7pt (min 8pt) · high"}),`
`,(0,n.jsx)(r.li,{children:'event-banner-sf.png · "© 2024" (should be 2025) · high'}),`
`,(0,n.jsx)(r.li,{children:"webinar-promo-9.png · footer missing · high"}),`
`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Unapproved claims"})," — 1 violation"]}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'product-comparison.png · "3× faster" not in approved-claims list · high'}),`
`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Compliant:"})," 189 assets pass all checks."]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Less certain:"})," the gold on social-tile-feb.png may be a JPG compression shift rather than the old hex; partner-deck-asia.pptx uses a green not in the guide, possibly an approved regional variant."]}),(0,n.jsx)(r.p,{children:"Want me to file the 10 high-confidence items as Asana tasks, or save the full report to the folder?"})]}),`
`,(0,n.jsx)(r.h2,{id:"4-follow-up-prompts",children:"4. Follow up prompts"}),`
`,(0,n.jsx)(r.p,{children:"Continue the conversation with Claude to refine, expand, or explore further."}),`
`,(0,n.jsx)(r.h3,{id:"check-the-live-pages-where-these-assets-appear",children:"Check the live pages where these assets appear"}),`
`,(0,n.jsxs)(r.p,{children:["The exports are one step removed from what customers see. With ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome",children:"Claude in Chrome"}),", Claude can open the live pages and run the same checks against what's rendering there — catching cases where the file was fixed but the page still shows the old version."]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"For each high-confidence violation, open the live page listed in asset-urls.csv in Chrome and tell me whether the published version has the same issue or has already been corrected."})}),`
`,(0,n.jsx)(r.h3,{id:"file-each-high-confidence-violation-as-a-task",children:"File each high-confidence violation as a task"}),`
`,(0,n.jsxs)(r.p,{children:["With ",(0,n.jsx)(r.a,{href:"https://claude.com/connectors/asana",children:"Asana"})," or ",(0,n.jsx)(r.a,{href:"https://claude.com/connectors/linear",children:"Linear"})," connected, Claude turns each finding into a task with the filename, the rule, and the fix, so the audit ends in your tracker instead of a chat."]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Create an Asana task in the Brand Compliance project for every high-confidence violation, assigned to the asset owner, with the filename, the guideline, and the corrected value in the description."})}),`
`,(0,n.jsx)(r.h3,{id:"save-the-audit-as-a-skill-and-put-it-on-a-schedule",children:"Save the audit as a skill and put it on a schedule"}),`
`,(0,n.jsxs)(r.p,{children:["When the rules and grouping are right, save them as a ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12512176-use-skills-in-cowork",children:"skill"})," so the check is one line. Then set that skill as a ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork",children:"scheduled task"})," in Claude Cowork — every Friday, Claude runs the same audit on whatever is new in the folder and posts the result to Slack, with the rules already written down."]}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Save this as a skill called brand-compliance-audit, then schedule it to run every Friday at 2pm and post the summary to #brand-ops."})}),`
`,(0,n.jsx)(r.h2,{id:"5-tricks-tips-and-troubleshooting",children:"5. Tricks, tips, and troubleshooting"}),`
`,(0,n.jsx)(r.h3,{id:"name-the-deliverable-and-the-grouping-in-your-prompt",children:"Name the deliverable and the grouping in your prompt"}),`
`,(0,n.jsx)(r.p,{children:"Tell Claude how to group the findings (Logo, Color, Legal, Claims) and what to return per item (filename, issue, guideline value, asset value, confidence). Opus 5 follows a format instruction like that closely, so you get a structured list you can act on rather than prose."}),`
`,(0,n.jsx)(r.h3,{id:"opus-5-reads-images-at-high-resolution-claude-cowork-is-what-lets-it-work-through-the-whole-folder",children:"Opus 5 reads images at high resolution; Claude Cowork is what lets it work through the whole folder"}),`
`,(0,n.jsxs)(r.p,{children:["The high-resolution reading is a property of the model. Claude Cowork is what gives the model the entire folder — assets and reference documents together — and the working context to process all 200 in one task. You'd get the same reading quality on a handful of uploads in a ",(0,n.jsx)(r.a,{href:"https://claude.ai",children:"claude.ai"})," chat with Opus 5 selected; Claude Cowork is what makes it practical at folder scale and lets you schedule it."]}),`
`,(0,n.jsx)(r.h3,{id:"tell-claude-which-rules-are-mandatory-and-which-are-tolerable",children:"Tell Claude which rules are mandatory and which are tolerable"}),`
`,(0,n.jsx)(r.p,{children:"If legal copy is non-negotiable but a hex within a few points is acceptable, say so in the prompt or the project instructions. Opus 5 will weight legal violations as high priority and near-miss colors as lower, and your output will already be sorted the way you'd triage it."}),`
`,(0,n.jsx)(r.h2,{id:"6-ready-to-try-for-yourself",children:"6. Ready to try for yourself?"}),`
`,(0,n.jsx)(r.p,{children:"Audit at the scale and pace your team can act on: high-confidence violations go to Asana, the items worth a second look stay in the folder, and the summary lands in Slack — from one prompt in Claude Cowork."}),`
`,(0,n.jsxs)(c,{surfaces:["cowork"],children:[(0,n.jsx)(r.p,{children:"Audit every PNG and JPG in this folder against brand-meridian-2025-q2.pdf and legal-required-copy.txt."}),(0,n.jsx)(r.p,{children:"Flag:"}),(0,n.jsx)(r.p,{children:`• the old 2024 logo
• off-brand hex codes (#0052B3 instead of #004B9F, #D4AF37 instead of #C9A961)
• missing or undersized legal copy`}),(0,n.jsx)(r.p,{children:"Group by violation type. For each one give me filename, issue, guideline value, asset value, and confidence. End with how many assets passed all checks."})]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};