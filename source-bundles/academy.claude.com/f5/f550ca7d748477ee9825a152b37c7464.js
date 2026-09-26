import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# Tying it all together

Hey, I'm Corey. I'm one of the co-founders of Prospect Butcher Co. We're a whole animal butcher shop with two locations in Brooklyn. We love serving our customers locally sourced meats, sandwiches, and our world famous chocolate chip cookies. But I'm here to talk about the part of the business you do not see, the back office. And specifically paying the bills.

For a lot of small business owners, accounts payable is not even a task on the calendar. It's something that follows you home. You're checking your bank balance during dinner, trying to figure out if you can pay a vendor tonight, and still make payroll on Friday. That's the kind of thing that AI can bring real structure to, if you're intentional about how you set it up. I'm going to walk you through how I use the 4D Framework. Delegation, Description, Discernment, and Diligence. All on our accounts payable workflow. How I turned a reactive scramble into something I can actually count on without giving up judgment that keeps our vendor relationships intact.

Now, let's set the scene here. We buy from a handful of small family farms upstate, as well as many distributors. We run two locations with two separate billing systems, and every vendor has different payment terms. Oh, and on top of that, some of our biggest obligations, like rent and credit cards, don't even live on a billing platform at all.

There was no system for paying bills. I'd get an email from a vendor saying they hadn't been paid. If I had time that evening, I'd pull up invoices and realize I was behind on a few. Then I'd jump over to the bank account to see if making those payments would still leave us enough room to run payroll. Some weeks, I'd spend two or three hours across evenings trying to sort it out. Other weeks, it just didn't happen. And vendors just waited.

And here's what made that worse. The farms we work with are small family operations. They need to get paid reliably, same as we do. When you're inconsistent with those payments, you're putting relationships at risk that your whole business depends on.

First thing I had to do was get honest about what I was actually handing off. Not what can AI do, but what should it be doing, and where do I draw the line? I looked back through several months of paying bills and broke the work into pieces. AI could handle pulling invoices from both locations and organizing them by vendor. It could certainly read through our emails and flag which vendors have been following up about late payments. It could even check our sales data and see which products are moving fast. Because if something's flying off the shelf, I need to stay current with that supplier. It could look at our bank balance, factor in upcoming obligations, and figure out how much we can actually afford to send out. And then pull all of that into one, weekly recommendation.

And here's what I kept. The final call on every single payment. AI tells me what it thinks we should pay this week, I'm the one to decide what actually goes out. Any conversation with a vendor stays with me. If a farmer is having a tough month, or we need to work something out on terms, that's a relationship, not a line item. Same with anything that doesn't fit the pattern, like a disputed invoice or a one-time purchase.

That's Delegation. The monitoring, the aggregation, the math, AI handles that. The judgment calls, that needs someone who actually knows these vendors and knows what a weird week looks like. And those stay with me and the team. Importantly, our accounts payable data has vendor details and banking information in it. Before I built anything, I made sure I was using a tool that doesn't train on my data and has a privacy policy that I'm comfortable with.

Now the actual build. There's three things to pin down. What the system produces, how it works through the data, and how it behaves. Here's what it gives me. Every Monday morning, a payment run recommendation. At the top, a snapshot. Here are all the outstanding invoices across both locations. Here's your cash position. And then we got a vendor-by-vendor breakdown. What we owe, which invoices are most urgent, and a suggested payment amount for each. And here at the bottom, a cash flow forecast. Starting balance, expected deposits, this week's payroll, and where we'll be after the recommended payments go out.

And here's how it gets there. The system pulls from our billing platforms, our bank feeds, our email, and our sales data. Every Monday, it reads all of that, figures out which invoices are most pressing based on payment terms, how often the vendor's been following up, and our cash position, and it puts it all together.

Here's how it behaves. It never assumes a payment should go out. Everything is framed as a recommendation. And the reasoning is right there, so I can see why it's suggesting what it's suggesting. It accounts for obligations that don't live in the billing platform, like rent and credit cards, before telling me what's available for vendors. And it doesn't generalize from what most businesses do, because a two-location, worker-owned, whole-animal butcher shop is not most businesses.

Before I went live with any of this, I fed the system data from months where I'd already made the decisions. I wasn't relying on it yet. I was testing it against weeks where I already knew what the right answers looked like. I ran it against several past months and compared the recommendations to what I had actually paid. Most of it was solid. The vendor totals were right. The urgency signals from emails were useful. The cash flow math tracked.

But two things were off. First, the system was counting invoices that had already been paid. Our billing platform's data wasn't filtering out closed invoices, so the system thought we owed around $18,000 more than we actually do. That's a big chunk of our total AP, just inflated out of nowhere. The kind of thing that only surfaces when you compare the output to what you know is true. If I had trusted that number, we'd have been double paying vendors.

Second, and this one's the bigger lesson, it was prioritizing the wrong people. The system wanted to pay the largest invoices first, which meant the farms. It makes sense on paper, but it's exactly wrong for us. Our farm vendors naturally have higher invoices because we buy whole animals from them, totaling thousands of dollars for a week's worth of beef. Our non-farm vendors tend to be the trickier ones, pushing hard for a $600 invoice. So I had to build in prioritization based on how our vendor relationships actually work, not just the dollar amounts. That insight only came from checking the output against what I already knew to be true.

So I went back in and fixed both, added filters so the system reads invoice statuses correctly, rewrote the prioritization logic to reflect our actual vendor dynamics, and I did two rounds of that. Describe, check, adjust. And it was giving me recommendations I'd actually use as a starting point.

Last part, and honestly it matters more than people think, this workflow touches our vendors and our cash, Both of those are relationships I cannot be careless with. First, AI recommends the payments. I am the one that submits them. I go into the billing platform, enter the invoices and pay. That line does not move.

Second, I don't skip the review. Even now that the recommendations are consistently solid, the cost of getting a payment run wrong is very real. Pay too aggressively, and you're short for payroll. Miss someone who's been waiting, and you put a relationship at risk. I trust the system more every week, but I'm earning that trust through the data, not just assuming it.

Third, transparency. We are worker-owned, so decisions about how we run the business are not just mine. I talked with my co-founder, Greg, about what I was building, and why. I was upfront with him. We're using AI to keep growing without adding back-office overhead. And the savings go back into staff and the customer experience.

The two or three hours I used to spend scattered across evenings and weekends is now a focused 45 minutes on Mondays. I review the recommendation, make my calls, submit the payments, and I'm done. But honestly, the bigger win is that our vendors are getting paid consistently now, every week, on time. For small family farms that depend on reliable cash flow the same way that we do, that consistency matters more than any time I get back.

That's the 4D Framework on accounts payable, start to finish. Delegation helped me figure out what to hand off and what to hold on to. Description built a system that actually understands how our business works. Two locations, two billing platforms, obligations that don't even fit into any tool. Discernment caught the spots where generic AI thinking broke down for our unique business. And Diligence made sure the efficiency gains didn't come at the cost of the relationships we've spent years building.
`;function i(t){let i={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"tying-it-all-together",children:"Tying it all together"}),`
`,(0,n.jsx)(c,{youtubeId:"Fpmd9Z7bpHs",title:"Tying it all together",duration:"10 min",transcript:r,children:(0,n.jsx)(i.p,{children:`This video brings together all four dimensions of the 4D Framework to build
a practical workflow automation for common small business tasks.`})}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Start with Problem Awareness:"})," analyze your actual workload — what are customers asking, and what patterns repeat?"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:'Task Delegation means asking "should AI do this?"'}),' not just "can it?" — documented FAQs are great candidates; complaints and judgment calls stay human.']}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Build with rich Description:"})," define what the system produces, the step-by-step logic, and the tone, boundaries, and behavior rules."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Test iteratively with real examples"})," to practice Discernment — real-world testing reveals gaps your descriptions miss."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Practice Diligence:"})," review outputs before they reach customers, be honest about AI's role, and provide a clear path to a human."]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"exercises",children:"Exercises"}),`
`,(0,n.jsxs)(s,{children:[(0,n.jsxs)(a,{title:"Mapping automation opportunities",note:"Identify which repetitive tasks in your business are good candidates for AI automation.",children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part I: Audit your repetitive tasks"})}),(0,n.jsx)(i.p,{children:"Think about your past week of work. List 5–10 tasks that felt repetitive or time-consuming — responding to customer inquiries, updating social media, generating invoices, following up with leads, compiling reports. For each task, note:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"How often does this task occur? (Daily, weekly, monthly)"}),`
`,(0,n.jsx)(i.li,{children:"How long does it take each time?"}),`
`,(0,n.jsx)(i.li,{children:"Is the response or process mostly standardized, or does it vary significantly case to case?"}),`
`,(0,n.jsx)(i.li,{children:"What's the consequence if this task is done imperfectly?"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part II: Categorize by AI-appropriateness"})}),(0,n.jsx)(i.p,{children:"Sort your tasks into three categories:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"AI can handle:"})," standardized responses, documented information, clear repeatable processes — e.g., answering FAQs about hours, return policy, or service offerings."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"AI can assist, human decides:"})," tasks where AI can draft, prepare, or organize, but a human reviews before anything is sent — e.g., drafting personalized follow-up emails or summarizing customer feedback."]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Human should handle:"})," high-stakes decisions, emotionally sensitive situations, or complex judgment — e.g., resolving a complaint, negotiating a contract, or handling a service failure."]}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part III: Prioritize"})}),(0,n.jsx)(i.p,{children:'Choose one task from your "AI can handle" or "AI can assist" categories that would save you the most time if automated. Write a brief sentence about why this task is your top priority — consider time saved, frequency, and how straightforward the automation would be.'}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Reflection:"})}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"What criteria helped you decide which category each task belongs in?"}),`
`,(0,n.jsx)(i.li,{children:"Were you surprised by how many (or how few) tasks felt appropriate for automation?"}),`
`,(0,n.jsx)(i.li,{children:"Did the potential consequences of errors influence your categorization? How?"}),`
`]})]}),(0,n.jsxs)(a,{title:"Building your automation Description",note:"Describe an automation system using the three types of Description from the 4D Framework.",children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part I: Define your Product"})}),(0,n.jsx)(i.p,{children:"For the task you prioritized in Exercise 1, write a clear description in 2–3 sentences:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:'What is the end result you want? (e.g., "A drafted email response to common customer questions about our services.")'}),`
`,(0,n.jsx)(i.li,{children:"What inputs will the system receive? (e.g., incoming emails, a customer inquiry form, a list of FAQs)"}),`
`,(0,n.jsx)(i.li,{children:"What outputs should it produce? (e.g., a categorized email with a draft response, a flagged item for human review)"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part II: Define your Process"})}),(0,n.jsx)(i.p,{children:"Outline the step-by-step logic — like writing instructions for a very capable but very literal new employee:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"What should the system do first when it receives an input?"}),`
`,(0,n.jsx)(i.li,{children:'What decision points exist? (e.g., "If the question is about pricing, use the attached price list. If it involves a custom request, flag for human review.")'}),`
`,(0,n.jsx)(i.li,{children:"When should it escalate to a human?"}),`
`,(0,n.jsx)(i.li,{children:"What information or documents does it need access to? (e.g., your FAQ page, price list, cancellation policy)"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part III: Define the Performance"})}),(0,n.jsx)(i.p,{children:"Define how the system should behave:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"What tone should it use? (friendly and professional, casual and warm, formal and concise)"}),`
`,(0,n.jsx)(i.li,{children:`How should it handle uncertainty? (e.g., "If you're not sure about the answer, say so and flag for review — never guess.")`}),`
`,(0,n.jsx)(i.li,{children:`What should it never do? (e.g., "Never promise a specific appointment time. Never share another customer's information. Never offer a discount without approval.")`}),`
`,(0,n.jsx)(i.li,{children:"How should it acknowledge the person's request before responding?"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part IV: Test with real examples"})}),(0,n.jsx)(i.p,{children:"Share your three descriptions with an AI tool along with 3–5 real examples from your business (past customer emails, inquiries, etc.). Evaluate the outputs:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Did it categorize correctly?"}),`
`,(0,n.jsx)(i.li,{children:"Are the responses accurate and appropriate in tone?"}),`
`,(0,n.jsx)(i.li,{children:"Did it fabricate any information it didn't actually have?"}),`
`,(0,n.jsx)(i.li,{children:"What adjustments do your descriptions need based on what you observed?"}),`
`]}),(0,n.jsx)(i.p,{children:"Iteration is normal and expected — plan to go through at least 2–3 rounds of refinement before the system feels reliable."})]}),(0,n.jsxs)(a,{title:"Planning for Diligence",note:"Think through the responsibility and safety aspects of your automation before you deploy it.",children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part I: Creation Diligence"})}),(0,n.jsx)(i.p,{children:"Answer honestly about your planned automation:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Why is this specific task appropriate for AI to handle? What characteristics make it a good fit?"}),`
`,(0,n.jsx)(i.li,{children:"What could go wrong? List at least three potential failure modes (e.g., AI gives incorrect pricing, responds to a complaint with a templated answer, shares information meant for a different customer). For each, how would you catch it? What safeguard can you put in place?"}),`
`,(0,n.jsx)(i.li,{children:"What's the real-world impact on your customers or business if AI makes a mistake on this task?"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part II: Deployment Diligence"})}),(0,n.jsx)(i.p,{children:"Plan your review process:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Will you review every output before it goes to a customer, or sample periodically? Why?"}),`
`,(0,n.jsx)(i.li,{children:"If you're reviewing everything initially, at what point would you feel comfortable reducing oversight? What evidence would you need?"}),`
`,(0,n.jsx)(i.li,{children:"How will you monitor for problems over time? (weekly spot-checks, customer feedback tracking, error logs)"}),`
`,(0,n.jsx)(i.li,{children:"What specific triggers would cause you to pause or shut down the automation entirely?"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part III: Transparency Diligence"})}),(0,n.jsx)(i.p,{children:"Decide on your transparency approach:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Who needs to know AI is involved? Consider customers, employees, and business partners."}),`
`,(0,n.jsx)(i.li,{children:"How will you disclose AI's role? Write the actual language you would use (e.g., a footer on emails, a note on your website, a mention in your terms of service)."}),`
`,(0,n.jsx)(i.li,{children:"What follow-up options will you provide if someone wants to speak with a real person?"}),`
`,(0,n.jsx)(i.li,{children:"Does your industry or local jurisdiction have any specific requirements around AI disclosure? If you're unsure, this is worth researching before deploying."}),`
`]}),(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Putting it all together:"}),` Write a brief "Automation Readiness Statement" — 3–5 sentences summarizing what you're automating, why it's appropriate, what safeguards you have in place, and how you'll be transparent about it. This can serve as a reference document for yourself and anyone else on your team.`]})]})]}),`
`,(0,n.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"How did using all four dimensions together change your approach compared to earlier lessons?"}),`
`,(0,n.jsx)(i.li,{children:"Was describing an automation precisely enough for AI to execute easier or harder than you expected?"}),`
`,(0,n.jsx)(i.li,{children:"After the Description and Diligence exercises, is your Exercise 1 task still the right one to automate first?"}),`
`,(0,n.jsx)(i.li,{children:"How has your thinking about efficiency versus personal customer relationships evolved?"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,n.jsx)(i.p,{children:"In the next lesson, we'll discuss strategies for integrating AI into your business thoughtfully and sustainably — including how to build an AI use policy for your team and how to manage concerns about AI dependency."})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};