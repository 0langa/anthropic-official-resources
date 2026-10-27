import{Vm as e,zm as t}from"../../../content-de-meta-oe42hj2y.js";var n=t();function r(t){let r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Callout:i,CoworkPrompt:o,ResourceWidget:s,Video:c}=r;return i||a("Callout",!0),o||a("CoworkPrompt",!0),s||a("ResourceWidget",!0),c||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{youtubeId:"uNXfAXK7e28",title:"From open call to award letter"}),`
`,(0,n.jsx)(r.p,{children:"The last few months of the year are a busy time for fundraising. You may have grant deadlines coming up, with your year-end appeal close behind. At many nonprofits, the person running the programs is also the one raising the money and writing every letter, proposal, and report. Claude can handle the first pass of that work:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Finding funders that give to your cause"}),`
`,(0,n.jsx)(r.li,{children:"Checking their eligibility requirements"}),`
`,(0,n.jsx)(r.li,{children:"Pulling figures from past proposals into a new draft"}),`
`,(0,n.jsx)(r.li,{children:"Choosing a story for your appeal"}),`
`,(0,n.jsx)(r.li,{children:"Comparing your outcomes and spending with your award letter"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"You describe the task and share your organization's documents. Claude prepares a draft, cites its sources, and tells you what's missing. Then you review the draft before you use it."}),`
`,(0,n.jsx)(i,{type:"note",title:"Getting the plugin",children:(0,n.jsxs)(r.p,{children:["The skills in the Claude for Nonprofits plugin help you do that and more. They're installed automatically on most nonprofit plans. If you don't see the plugin, ask your admin, who can ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/13837433-manage-plugins-for-your-organization",children:"add it for your organization"}),". If you're not on a nonprofit plan, ",(0,n.jsx)(r.a,{href:"https://claude.com/solutions/nonprofits",children:"check eligibility and sign up"}),"."]})}),`
`,(0,n.jsx)(r.p,{children:"The tutorial below covers what to set up first, then breaks down two of the fundraising skills: finding funders who fit, and showing funders what their grant made possible. The example follows Kofi Mensah, the development director at Maple Hollow After-School Project, a fictional nonprofit with a reading program. All people, data, documents, and figures are fictional."}),`
`,(0,n.jsx)(r.h2,{id:"set-up-once",children:"Set up once"}),`
`,(0,n.jsx)(r.p,{children:"Start by having Claude create a map of where your records are kept and a voice guide for your organization's writing style. Every other skill in the plugin uses both."}),`
`,(0,n.jsxs)(i,{type:"note",title:"Where Claude finds your documents",children:[(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Connected tools:"})," When you connect a tool, like your shared drive, Claude can open the documents you keep there. Claude's data access mirrors yours, so it can only see what you already have access to. ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"Learn more about connectors"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Memory:"})," Memory allows Claude to use what it has saved in earlier chats to inform future ones. Turn on memory in Settings so Claude can save a data map and voice guide and use them in later chats. Memory works in tasks that run in the cloud. ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/15811196-what-to-expect-with-claude-cowork-in-the-cloud",children:"Check where your tasks run"}),". ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context",children:"Learn more about memory"}),"."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Files you attach:"})," If you can't reach your data through a connector, download the files and attach them to your message."]}),`
`]}),(0,n.jsx)(r.p,{children:"If you don't see a tool, or can't turn on memory or run tasks in the cloud, ask your admin."})]}),`
`,(0,n.jsx)(r.h3,{id:"1-a-map-of-where-your-data-lives",children:"1. A map of where your data lives"}),`
`,(0,n.jsx)(r.p,{children:"Your records are probably kept in several places: donor and gift records in a donor database, grant files on a shared drive, budgets somewhere else. Claude creates a map that lists each kind of record and where you keep it, so Claude knows where to look for future tasks."}),`
`,(0,n.jsxs)(r.p,{children:["In this setup, Kofi asks Claude to map where Maple Hollow keeps its records, using the ",(0,n.jsx)("span",{className:"whitespace-nowrap",children:(0,n.jsx)(r.code,{children:"/where-things-live"})})," skill."]}),`
`,(0,n.jsx)(r.p,{children:"Here is what the skill is built to do:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude asks you where you keep each kind of record."}),`
`,(0,n.jsx)(r.li,{children:"Claude saves the name of the tool or place where each record is kept, without saving any details from your records."}),`
`,(0,n.jsx)(r.li,{children:"Claude shows you the whole map in the chat, then confirms it's saved to memory."}),`
`,(0,n.jsx)(r.li,{children:"From then on, the other skills check the map before they ask you where a record is kept."}),`
`]}),`
`,(0,n.jsx)(s,{name:"SetUpMap",title:"Watch Claude map where Maple Hollow keeps its records"}),`
`,(0,n.jsx)(r.p,{children:"Now Kofi has a map of where Maple Hollow keeps each kind of record."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Before you act:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Review the entire map when Claude shows it to you, and correct any location that's wrong."}),`
`,(0,n.jsx)(r.li,{children:"If you aren't sure where a record is kept, say so. Claude offers to look in your connected tools. You can come back and update the map once you find it."}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"Connect the tools on your map"})," wherever a connector is available. The map tells Claude where a record is kept, and the connector lets Claude open it."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What you need:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Memory turned on, and a task that runs in the cloud. The skill also runs without memory, but the map isn't saved for later chats."}),`
`,(0,n.jsx)(r.li,{children:"No documents required"}),`
`,(0,n.jsx)(r.li,{children:"A general sense of where your team keeps each kind of record"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Try it:"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"I want to stop explaining where our records are in every chat. Can you ask me about each kind of record and put my answers in a map? Show me the map before you save it."})}),`
`,(0,n.jsx)(r.h3,{id:"2-a-voice-guide",children:"2. A voice guide"}),`
`,(0,n.jsx)(r.p,{children:"Your organization has a unique voice: its writing style and tone, what it calls the people it serves, and how it asks for support. A voice guide codifies that voice in writing so every draft sounds like your organization, whoever writes it."}),`
`,(0,n.jsxs)(r.p,{children:["In this setup, Kofi asks Claude to make a voice guide for Maple Hollow from three of its past letters, using the ",(0,n.jsx)("span",{className:"whitespace-nowrap",children:(0,n.jsx)(r.code,{children:"/org-voice-guide"})})," skill."]}),`
`,(0,n.jsx)(r.p,{children:"Here is what the skill is built to do:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude looks for an existing voice guide first. If there isn't one, Claude builds a guide from your organization's existing materials and asks you questions to fill in the rest."}),`
`,(0,n.jsx)(r.li,{children:"Claude marks which guidelines are its own suggestions."}),`
`,(0,n.jsx)(r.li,{children:"Claude writes a short sample in your organization's voice and saves the guide once you confirm the sample sounds right."}),`
`,(0,n.jsx)(r.li,{children:"Claude offers to share the finished guide with your team and add it to your map, so the other skills can use your organization's voice for future drafts."}),`
`]}),`
`,(0,n.jsx)(s,{name:"SetUpVoice",title:"Watch Claude learn how Maple Hollow writes"}),`
`,(0,n.jsx)(r.p,{children:"Now Kofi has a short voice guide for Maple Hollow that Claude can use in later drafts."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Before you act:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Read the sample out loud. If part of it doesn't sound like your organization, tell Claude which part and give it feedback before you approve the guide."}),`
`,(0,n.jsx)(r.li,{children:"Check that your examples cover each audience you write to, such as donors, funders, and the people you serve. That's how Claude learns your organization's voice for each one."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What you need:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Your organization's voice or style guide, if it has one"}),`
`,(0,n.jsx)(r.li,{children:"Three to five examples of your organization's materials, like newsletters, website pages, grant applications, or donor letters. Claude can find them in your connected tools, or you can attach them to your message."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Try it:"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Can you learn how we write, so your drafts sound like us? Use [the materials you chose]. Show me the guide and a sample so I can check it sounds right."})}),`
`,(0,n.jsx)(r.h2,{id:"find-funders-who-fit",children:"Find funders who fit"}),`
`,(0,n.jsx)(r.p,{children:"One of the most time-consuming parts of applying for grants is figuring out which funders to approach. You're looking for funders that give to your cause, in your area, to organizations your size. You also have to keep track of who already funds you."}),`
`,(0,n.jsxs)(r.p,{children:["In this section, Kofi asks Claude to find funders for one of Maple Hollow's programs, using the ",(0,n.jsx)("span",{className:"whitespace-nowrap",children:(0,n.jsx)(r.code,{children:"/funder-and-grant-research"})})," skill."]}),`
`,(0,n.jsx)(r.p,{children:"Here is what the skill is built to do:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude reviews your documents before it asks you any questions."}),`
`,(0,n.jsx)(r.li,{children:"Claude finds foundations, companies, agencies, and individual donors that give to causes like yours."}),`
`,(0,n.jsx)(r.li,{children:"Claude finds open grants you can apply for, and cites each funder's website for its eligibility requirements and deadline."}),`
`,(0,n.jsx)(r.li,{children:"Claude tells you when it can't confirm a deadline or a grant amount."}),`
`]}),`
`,(0,n.jsx)(s,{name:"FindFunders",title:"Watch Claude find funders for a reading program"}),`
`,(0,n.jsx)(r.p,{children:"Now Kofi has a short list of prospective funders for Maple Hollow's reading program, with the strongest fit first."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Before you act:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Follow the source link for each funder and make sure Claude's summary matches the funder's website. Remove any funder that doesn't match."}),`
`,(0,n.jsx)(r.li,{children:"Confirm each deadline on the funder's website before you plan around it, because deadlines and priorities change."}),`
`,(0,n.jsx)(r.li,{children:"Review any details Claude couldn't confirm, and ask the funder about any that aren't on its website."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What you need:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"A description of the program you're raising money for"}),`
`,(0,n.jsx)(r.li,{children:"The types of funders or funding opportunities you're looking for"}),`
`,(0,n.jsx)(r.li,{children:"Your list of current funders"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Try it:"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Can you find funders that fit [program name], and skip anyone who already funds us? I want a short list so I can decide who to approach first."})}),`
`,(0,n.jsx)(r.h2,{id:"show-funders-what-their-grant-made-possible",children:"Show funders what their grant made possible"}),`
`,(0,n.jsx)(r.p,{children:"You've put a funder's grant to work in your programs. Now it's time to show the funder the results: how your outcomes and spending compare with the goals and budget in your award letter."}),`
`,(0,n.jsxs)(r.p,{children:["Maple Hollow has a report due to the Maple County Community Foundation, which funds its reading program. In this section, Kofi asks Claude to draft that report, using the ",(0,n.jsx)("span",{className:"whitespace-nowrap",children:(0,n.jsx)(r.code,{children:"/grant-reporting"})})," skill."]}),`
`,(0,n.jsx)(r.p,{children:"Here is what the skill is built to do:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Claude reports your outcomes against each goal in your award letter and your spending against each budget line."}),`
`,(0,n.jsx)(r.li,{children:"Claude takes each figure from your documents, cites the source, and shows its work for any figure it calculated."}),`
`,(0,n.jsx)(r.li,{children:"If the report needs a figure or an explanation that isn't in your documents, Claude adds a placeholder in brackets."}),`
`,(0,n.jsx)(r.li,{children:"Claude asks you for what your documents can't explain, like why a result came in under the goal."}),`
`]}),`
`,(0,n.jsx)(s,{name:"GrantReport",title:"Watch Claude draft a grant report using the funder's form"}),`
`,(0,n.jsx)(r.p,{children:"Now Kofi has a draft report that follows the Foundation's form, with a source for every figure. Next, Kofi will add the missing figure and the explanations, then submit the report."}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Before you act:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Make sure the figures in the draft match your program and financial records."}),`
`,(0,n.jsx)(r.li,{children:"Wherever the draft has a placeholder, add the missing figure or write the explanation yourself."}),`
`,(0,n.jsx)(r.li,{children:"If a result fell short or a budget line ran over, talk to your program officer before you submit the report."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"What you need:"})}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"The funder's report form or template"}),`
`,(0,n.jsx)(r.li,{children:"Your award letter or grant agreement"}),`
`,(0,n.jsx)(r.li,{children:"Your outcomes for the reporting period"}),`
`,(0,n.jsx)(r.li,{children:"Your spending by budget line"}),`
`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Try it:"})}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"We owe [funder] a report on our grant. Can you draft it using their form, show the source of every figure, and leave a placeholder where a number is missing? I'll write the reason for any line where we spent more than we planned."})}),`
`,(0,n.jsx)(r.h2,{id:"work-with-claude-on-other-fundraising-tasks",children:"Work with Claude on other fundraising tasks"}),`
`,(0,n.jsx)(r.p,{children:"The fundraising skills also cover these tasks. To start one, describe the task and share your documents."}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Check your fit for a grant"})," (",(0,n.jsx)("span",{className:"whitespace-nowrap",children:(0,n.jsx)(r.code,{children:"/funder-and-grant-research"})}),`). Before you put time into an application, it helps to know whether your organization meets the funder's requirements. Share the request for proposals and documents that describe your organization, and Claude rates each requirement "Met", "Not met", or "Can't tell yet". For each requirement rated "Can't tell yet", share what's missing and ask Claude to check again.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Write a letter of inquiry or a proposal"})," (",(0,n.jsx)("span",{className:"whitespace-nowrap",children:(0,n.jsx)(r.code,{children:"/grant-proposal-writing"})}),"). Share the funder's application guidelines, one or two past proposals, and your latest outcomes report, and Claude bases the draft on them. Make sure every figure matches the source Claude cites, because Claude can make mistakes."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Prepare for a funder call, then follow up"})," (",(0,n.jsx)("span",{className:"whitespace-nowrap",children:(0,n.jsx)(r.code,{children:"/donor-and-funder-relations"})}),"). Tell Claude who the call is with and what you want from it, and Claude prepares a brief from your records and public sources. Ask Claude to tell you what it couldn't find, and track down those details before the call. After the call, share your notes, and Claude writes them up and drafts the thank-you note."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Thank your donors"})," (",(0,n.jsx)("span",{className:"whitespace-nowrap",children:(0,n.jsx)(r.code,{children:"/donor-and-funder-relations"})}),"). Share this year's gift records, and Claude writes each thank-you letter with the amount, date, and purpose of the donor's gift, then lists the letters that need a closer look. Read those first."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Draft your year-end appeal"})," (",(0,n.jsx)("span",{className:"whitespace-nowrap",children:(0,n.jsx)(r.code,{children:"/donor-and-funder-relations"})}),"). Share your gift records and one story from your program that the person in it agreed to share, and Claude bases the appeal on them. Read the appeal for any figure or story you didn't give Claude. If Claude can't cite a source for it, cut it."]}),`
`]}),`
`,(0,n.jsx)(r.h2,{id:"keep-the-review-habit",children:"Keep the review habit"}),`
`,(0,n.jsx)(r.p,{children:"Claude can take a draft up to the point of sending. Before you send it, ask these three questions:"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Is each claim sourced?"})," Every figure and claim should have a source you can check."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Is each gap marked?"})," Look for a bracketed placeholder wherever a figure, name, or date is missing."]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Is any fact stated that you didn't provide?"})," If so, ask Claude for the source."]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"Then decide whether to use the draft, revise it, or start over."}),`
`,(0,n.jsx)(r.p,{children:"You can review a board update, a job posting, or any other draft the same way."}),`
`,(0,n.jsx)(r.h2,{id:"learn-more",children:"Learn more"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/tutorials/teach-claude-your-way-of-working-using-skills",children:"Teach Claude your way of working using skills"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",children:"Use connectors to extend Claude's capabilities"})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context",children:"Use Claude's chat search and memory to build on previous context"})}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://claude.com/solutions/nonprofits",children:"Nonprofit solutions page"}),": plans and pricing for nonprofits."]}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};