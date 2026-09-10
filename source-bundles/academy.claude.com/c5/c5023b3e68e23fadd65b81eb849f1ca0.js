import{em as e,nm as t}from"../../../../../content-de-meta-gd0d1kvq.js";var n=e();function r(e){let r={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...e.components},{LessonDownloads:i,ResourceWidget:o}=r;return i||a("LessonDownloads",!0),o||a("ResourceWidget",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This is still the first of the five decisions, Structure & Identity. You’ve set the organization boundary. Now you can move on to what goes into it: your groups and the roles they carry. Groups are the unit that nearly every later decision attaches to."}),`
`,(0,n.jsx)(r.h2,{id:"groups-are-the-unit-nearly-every-control-attaches-to",children:"Groups are the unit nearly every control attaches to"}),`
`,(0,n.jsx)(r.p,{children:"Everything else in this module follows from what a group is and what it carries."}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"A group is a named set of members."})}),`
`,(0,n.jsx)(r.p,{children:"Your identity provider already sorts your members into groups, and Claude reads them automatically from the SCIM sync. You may have anywhere from hundreds to tens of thousands of members, so configuring one member at a time doesn’t scale. Groups let you configure capabilities for many members at once instead of one at a time."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"One group structure spans every surface your contract covers."})}),`
`,(0,n.jsx)(r.p,{children:"You build a single group structure, not one per surface (e.g., Cowork or Claude Code). The role you attach to a group applies across each of Claude’s surfaces, so what that role grants in one product doesn’t have to be remade for the next."}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Almost every setting in the four decisions ahead attaches to a group:"})}),`
`,(0,n.jsx)(r.p,{children:"Nearly everything you configure, you configure for a group; a handful of settings are organization-wide ceilings instead, and the lessons flag those where they come up."}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"If you later find yourself wanting to scope a control to a specific subset (“just these three members,” “everyone except contractors”), that’s likely the structure telling you your organization needs another group."}),`
`,(0,n.jsx)(r.h2,{id:"how-rbac-works-members-groups-roles",children:"How RBAC works: members, groups, roles"}),`
`,(0,n.jsx)(r.p,{children:"Claude Enterprise uses role-based access control (RBAC). There are three parts to this:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Members:"})," your people."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Groups:"})," named sets of members, synced from your identity provider (IdP) over SCIM or, if you don’t sync, created by hand in Organization settings."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Roles:"})," sets of permissions you attach to a group. Every member on a custom role gets what the roles on their groups grant."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"You set access by role, not member by member. To see what a member can do, review the roles on their groups. Change a role, and every member of that group changes at once."}),`
`,(0,n.jsx)(r.p,{children:"There are three kinds of roles:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Admin roles (Primary Owner, Owner, Admin):"})," who can change settings, such as inviting members, editing caps, and viewing billing (the last two are Owner-and-above). An Admin can manage members but not billing; an Owner can take every admin action except granting or removing the Primary Owner role; the Primary Owner can take all of these actions."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"User roles (User):"})," what members can do in Claude, including capabilities, model access, and which tools Claude may use on their behalf. Most of this course scopes these through custom roles (see below)."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Custom roles:"})," a permission set you define when the built-in roles don’t fit. It can carry admin or user permissions."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"A custom role sets four kinds of access, each of which it can hold differently from the organization-wide default:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Capabilities:"})," which features are on, for example Claude Code and Cowork."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Model access:"})," which Claude models the group can use."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Connector permissions:"})," which connectors the group reaches, and whether it can write through them."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Admin permissions:"})," for a custom admin role, which admin actions it may perform."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"These take effect only for members on a custom role; members on a built-in role keep every surface, model, and connector enabled organization-wide. Setting the role to Custom, by hand or through your IdP role mapping, is part of this lesson’s hand-off."}),`
`,(0,n.jsx)(r.p,{children:"When a member belongs to more than one group, their permissions are the union of every group’s role. If any group grants a capability, the member has it, and a narrower group cannot remove what a broader one grants. To hold a tighter boundary, put those members in their own group with its own role, and keep them out of the broad group that carries the sensitive permission."}),`
`,(0,n.jsx)(r.h2,{id:"plutos-groups",children:"Pluto’s groups"}),`
`,(0,n.jsx)(r.p,{children:"Pluto’s group structure is the hybrid pattern: it mirrors its organization chart, one group per business unit plus a cross-unit Engineering group, everywhere except Payments & Trust, whose engineers would otherwise inherit Engineering’s broad connector access through the union. So Pluto added a dedicated payments-eng group with its own role, and its payments engineers sit there rather than in the broad Engineering group, ensuring they only obtain the permissions they need."}),`
`,(0,n.jsx)(r.p,{children:"The interactive widget below puts one member in two of Pluto’s groups and shows what she actually gets under the union rule."}),`
`,(0,n.jsx)(o,{name:"GroupsUnionExplorer",title:"Interactive exercise: Two groups, one union: what a member actually gets"}),`
`,(0,n.jsx)(r.h2,{id:"1-your-decision",children:"1 · Your decision"}),`
`,(0,n.jsx)(r.p,{children:"Which group pattern do your controls attach to: what are your groups, and which of the later controls (surfaces, connectors, governance, caps) does each carry?"}),`
`,(0,n.jsx)(r.h2,{id:"2-the-choices-you-can-make",children:"2 · The choices you can make"}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"The choice"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"When you’d choose it"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"What it means and the impact it has"})})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Mirror your company’s org chart"})}),(0,n.jsx)(r.td,{children:"Controls only need to vary by department rather than by risk. The shape typically already exists in your identity provider."}),(0,n.jsx)(r.td,{children:"One Claude group per department or team. All later controls land on department lines. A risk boundary that cuts across departments has no group to attach to until you add one."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Tier by risk"})}),(0,n.jsx)(r.td,{children:"A regulated function needs at least one control (usually connectors, governance, or visibility) tighter than its parent department — a boundary department groups alone can’t express."}),(0,n.jsx)(r.td,{children:"A small number of groups that cut across departments by how sensitive the work is. Controls attach by sensitivity rather than department, so an everyday control that varies by department has no group shaped for it."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Hybrid approach"})}),(0,n.jsx)(r.td,{children:"Everyday controls fit the department shape, but a boundary doesn’t fit inside any department. Companies that need a risk boundary typically end up here."}),(0,n.jsx)(r.td,{children:"Department groups for the everyday controls, plus a dedicated group carved out where the boundary sits. Each control lands on a group shaped for it — just keep the carved-out members out of the broad group, since the union rule can’t take a permission away."})]})]})]}),`
`,(0,n.jsx)(r.h2,{id:"3-if-you-change-this-later",children:"3 · If you change this later"}),`
`,(0,n.jsx)(r.p,{children:"The group structure itself is low stakes to change. You can add a group, rename one, or change the role attached to it. The mapping is what to treat with care: the rule that membership in an IdP group grants a role in Claude. Once a mapping is live, changing it changes access for every member it covers, and reversing it means a second mass change, not a simple undo."}),`
`,(0,n.jsx)(r.h2,{id:"set-up-resources",children:"Set up resources"}),`
`,(0,n.jsx)(r.p,{children:"When you’ve made the call, groups and their role assignments live in Organization settings, while membership itself syncs from your identity provider."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13799932-manage-groups-and-group-spend-limits-on-enterprise-plans",children:"Manage groups and group spend limits on Enterprise plans"})}),": creating groups and attaching roles."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13930452-manage-custom-roles-on-enterprise-plans",children:"Manage custom roles on Enterprise plans"})}),": defining a role when the built-in ones don’t fit."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/9267276-roles-and-permissions",children:"Roles and permissions"})}),": what each built-in role grants, so a group holds the role that matches the reach you intend."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13930458-set-up-role-based-permissions-on-enterprise-plans",children:"Set up role-based permissions on Enterprise plans"})}),": attaching a role’s permissions to a group."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/14499648-how-scim-sync-works-for-enterprise-organizations",children:"How SCIM sync works for Enterprise organizations"})}),": how synced directory groups keep membership current with no manual upkeep."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"lesson-activity",children:"Lesson activity"}),`
`,(0,n.jsx)(r.p,{children:"Sketch your groups against the union rule: list each group and what its role grants, then name the members or functions that must be tightly bounded and the dedicated group that bounds them. If you have a regulated function, confirm its members are correctly restricted."}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"What to bring your identity team:"})," the pattern you chose, the rule that turns your IdP groups into Claude groups (plus any exception), any group whose role differs from your standard custom role, and which IdP group maps to the Custom role. If provisioning isn’t yours to run, this is the brief you hand them."]}),`
`,(0,n.jsx)(r.p,{children:"→ Record this in the work-along companion, section Lesson 5."}),`
`,(0,n.jsx)(i,{}),`
`,(0,n.jsx)(r.h2,{id:"whats-next",children:"What’s next"}),`
`,(0,n.jsx)(r.p,{children:"The next lesson covers which Claude surfaces you’ll grant to each group, along with how to phase that access and how the model defaults, organization-wide and per role, decide what each group runs on."})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};