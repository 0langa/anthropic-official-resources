import{Nm as e,jm as t}from"../../../../../content-de-meta-jksdfebu.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...t.components},{GenericPrompt:i}=r;return i||a("GenericPrompt",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Once the product owner approves the ",(0,n.jsx)(r.code,{children:"intent.md"}),", Claude takes it and produces a requirements and design spec. This is guided by the organization's ",(0,n.jsx)(r.a,{href:"https://claude.com/blog/complete-guide-to-building-skills-for-claude",children:"skills"})," for brand, security, compliance, and UX."]}),`
`,(0,n.jsx)(r.p,{children:"The product owner reviews that spec, but doesn't write it. The goal of this process is to create a spec the engineering team can plan against, with flagged areas of concern."}),`
`,(0,n.jsxs)(r.p,{children:["Front-end work is the clearest example. Once the ",(0,n.jsx)(r.code,{children:"intent.md"})," is accepted, the product owner mocks the design up in ",(0,n.jsx)(r.a,{href:"https://www.anthropic.com/news/claude-design-anthropic-labs",children:"Claude Design"})," (beta) from the ",(0,n.jsx)(r.code,{children:"intent.md"}),", iterates on the mock, and then exports it to Claude Code to build."]}),`
`,(0,n.jsx)(r.h2,{id:"what-changes",children:"What changes"}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Traditional"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"AI-native"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Requirements and design are separate phases run by separate teams. Analysts formalize the idea into requirements, and designers then parse those back into a design. The separation exists for accountability, but it is slow and lossy."}),(0,n.jsxs)(r.td,{style:{textAlign:"left"},children:["Both phases happen in a single prompted session. Claude takes ",(0,n.jsx)(r.code,{children:"intent.md"})," and produces a requirements and design spec, constrained by the organization's skills, with areas of concern flagged."]})]})})]}),`
`,(0,n.jsx)(r.h2,{id:"getting-started",children:"Getting started"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prerequisites"}),": Write an ",(0,n.jsx)(r.code,{children:"intent.md"})," file, with brand, security, compliance, and UX policies written as skills."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Infrastructure"}),": A product owner with Claude access. No engineering skill is required."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"how-to-execute-it",children:"How to execute it"}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:["The product owner opens a session with the organization's skills available and attaches the ",(0,n.jsx)(r.code,{children:"intent.md"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:["The product owner's prompt points at the intent, names the constraints, and demands flagged concerns. Run it by hand at first, then codify it as an organization-level slash command. From there make the acceptance of ",(0,n.jsx)(r.code,{children:"intent.md"})," in the intent home the trigger, with a non-interactive job that fires on the merge, runs the pass with the organization's skills loaded, and commits ",(0,n.jsx)(r.code,{children:"spec.md"})," as a pull request (the CI/CD play in ",(0,n.jsx)(r.strong,{children:"Stage 5: Deploy"})," covers the plumbing). From that point the product owner's first involvement is the review."]}),`
`,(0,n.jsxs)(r.li,{children:["The same product owner reviews the spec against the idea. Does the spec solve the stated problem, and are the open questions from ",(0,n.jsx)(r.code,{children:"intent.md"})," answered or carried forward?"]}),`
`,(0,n.jsx)(r.li,{children:"Work through the flagged concerns first as they are the points an analyst would have escalated. The product owner resolves each one with its policy owner before engineering sees the spec."}),`
`,(0,n.jsxs)(r.li,{children:["Commit ",(0,n.jsx)(r.code,{children:"spec.md"})," alongside ",(0,n.jsx)(r.code,{children:"intent.md"}),". The file pair records what was asked for and what was decided."]}),`
`,(0,n.jsxs)(r.li,{children:["The product owner decides whether the spec and intent progress to build, consulting a technical lead for anything the organization classes as higher risk. A human teammate always makes this call, and accepting the spec is what starts the plan mode play in ",(0,n.jsx)(r.strong,{children:"Stage 3: Build"}),"."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"what-it-looks-like",children:"What it looks like"}),`
`,(0,n.jsx)(r.p,{children:"The prompt:"}),`
`,(0,n.jsx)(i,{children:(0,n.jsx)(r.p,{children:"Read the attached intent.md and produce a requirements and design spec for integrating it into our existing codebase. Apply the skills available to you so the plan conforms to our brand guidelines, security policies and UX standards. Document the spec fully as spec.md, ready to hand to the engineering team. Describe clearly any areas of concern, especially where you cannot satisfy contradicting policies."})}),`
`,(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"intent.md"})," behind this example comes from an insurer that wants customers to see the status of a claim in its portal. In it, ",(0,n.jsx)(r.code,{children:"claims-api"})," is the portal's backend and ",(0,n.jsx)(r.code,{children:"claims-core"})," is the older internal system that holds the claims. The prompt above turns it into this ",(0,n.jsx)(r.code,{children:"spec.md"}),":"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-markdown",children:`# Spec: claims status self-service
From: intent.md (J. Ortiz, claims operations). Status: ready for product owner review.
Skills applied: secure-api-review, brand-voice, portal-ux.

## Requirements
- R1. A signed-in customer sees status, next step and expected date for each open claim.
- R2. Status is one of four states: received, in review, approved, paid.
- R3. The response carries those three fields and nothing else.
- R4. What the customer sees is at most 60 seconds old.

## Design
- New endpoint GET /claims/{id}/status in claims-api, behind the gateway JWT.
- claims-api reads the claim from claims-core. The portal never calls claims-core.
- New StatusPanel on the portal claims page. It caches each answer for 60 seconds.

## How each constraint in the intent is met
| Constraint | Met by |
| :---- | :---- |
| No new PII in the portal session | R3. None of the three fields is tagged pii in the schema. |
| Existing authentication only | The gateway JWT. No new login, token or role. |

## Open questions from the intent
- Do third-party loss adjusters need access too? Not answered. Carried forward as concern 1.

## Areas of concern
1. Loss adjusters have no portal account. Giving them access breaks "existing
   authentication only", so they are left out of this spec. Owner: security.
2. The portal-ux skill says every status shows a date. The brand-voice skill says
   never to state a payment date as a commitment. I cannot satisfy both as written.
   Proposed label: "Estimated date". Owner: compliance.
3. claims-core allows 50 requests a second. The 60-second cache should keep the
   portal under that, but nobody has load tested it. Owner: claims-core team.
`})}),`
`,(0,n.jsx)(r.p,{children:"The requirements are numbered so the plan and the review can cite them. Concern 2 sets two skills against each other, the kind of clash the prompt tells Claude to flag."}),`
`,(0,n.jsx)(r.h2,{id:"governance-considerations",children:"Governance considerations"}),`
`,(0,n.jsx)(r.p,{children:"Instead of policy conflicts being discovered in a review weeks later, the live policy is read and applied while the spec is written. The organization's skills are applied as constraints on the spec. The spec, the prompt that produced it, and the skill versions in force are all logged in version control. The product owner signs off on the spec, and routes flagged concerns to the named policy owners."}),`
`,(0,n.jsx)(r.h2,{id:"how-to-measure-it",children:"How to measure it"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Leading indicator"}),": Elapsed time between the ",(0,n.jsx)(r.code,{children:"intent.md"})," commit and the ",(0,n.jsx)(r.code,{children:"spec.md"})," commit for the same change (two Git timestamps), compared with the old requirements-plus-design cycle."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lagging indicator"}),": Requirements rework after build starts. Count ",(0,n.jsx)(r.code,{children:"spec.md"})," commits dated after the first ",(0,n.jsx)(r.code,{children:"plan.md"})," commit for the same change. Git log will give this directly."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};