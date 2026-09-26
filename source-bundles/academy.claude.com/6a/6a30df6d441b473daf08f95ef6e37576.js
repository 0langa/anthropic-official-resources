import{Nm as e,jm as t}from"../../../../../content-de-meta-mdrrzgmt.js";var n=t(),r=`# Data analysis with AI

In our last lesson, we dealt with data privacy and security—what you absolutely need to protect and how to do it. So now, let's talk about the question that's probably stopped you from using AI for data analysis in the first place: How can I trust the results?

Today's lesson is about the delegation diligence loop, specifically building confidence in AI's analytical capabilities for your specific work by systematically testing it against data you already understand. By doing this, you can better understand how AI will support your specific circumstances.

The process starts with delegation. Here's how this works. First, identify a specific analytical task you do regularly that you want to delegate to AI. Find past data where you already completed the analysis, and then work with AI to reproduce what you did, evaluating what works and what doesn't. Refine your approach and test again. If AI can match your known results, you know how to use it and trust it for similar future tasks. And if not, you've learned that this task is something you shouldn't delegate.

So let me show you what this looks like in practice, and then we'll talk through what to do if you're not that data savvy to begin with.

Meet Rio, the program director at Valley Veterans Services. Every quarter, he analyzes program attendance alongside employment outcomes, calculating participation rates, tracking monthly changes, and determining whether attendance correlates with job placement success. This analysis consistently takes him hours.

Considering delegation, Rio knows he wants to continue using the results of this analysis to improve his program. He wants to interpret the results himself, but he could do without the data cleaning and formula mayhem he usually finds himself in to do the actual analysis. So in order to test whether AI is appropriate in this scenario, he's going to evaluate it using last quarter's data. He knows exactly what this data showed after he analyzed it without AI, and he has the raw messy data from before he started. This is his test case.

Rio uploads the data and starts to work with AI, using description and discernment to perform his analysis. Only each time AI responds, Rio is going to check the results against what he knows to be true and jot down potential gaps in AI's reasoning. Sometimes additional description helps AI get the outcome he's looking for. In these cases, Rio knows he has to include that kind of information for future data analysis tasks. Other times, Rio might find legitimate capability gaps. This is the delegation diligence loop in action. Rio's diligence to evaluate the model's capabilities can change what he chooses to delegate to AI in the future.

His first attempt might look like: "I'm sharing attendance data and employment outcome data from our job training program last quarter. Please analyze the participation patterns across the three months and graph the correlations between attendance levels and employment success. I'm particularly interested in understanding whether consistent attendance predicts better job placement outcomes."

AI responds with a summary. But rather than assuming this is fact, Rio checks this against his records and notes what's good and what's not. AI correctly identified the correlation between program attendance and job placement, but it missed a critical insight around the combined housing assistance and job placement program. So Rio refines his description, asking AI to try again but pay special attention to the program type. This time AI catches its mistake. So Rio notes that for future quarters, he'll need to specifically request the AI to consider the program type when performing its analysis.

Then he does something harder: "Can you also look at this based on when participants enrolled?" AI responds as Rio observes that despite not knowing the enrollment data, AI could help extract it. He makes a note to cross-reference these results later on.

By going through this process, Rio has systematically validated what AI can and can't do for his quarterly reporting. He's learned that with the right description, AI can accurately reproduce the analysis he used to do manually. But he's also identified clear limitations and areas for follow-up. AI needs enrollment dates in the data to do cohort analysis; otherwise it'll try to infer them, which he doesn't want. And most importantly, Rio now has a tested approach that he can confidently use with this quarter's data and clear notes about what information he needs to include and what context he still needs to add himself.

When Rio uses this validated approach with new data, his diligence continues. He'll check whether numbers make sense based on what he knows about his programs. He'll take accountability for the final report, and he'll be transparent about AI's role if asked. But now he's working from validated confidence, not guesswork.

So here's the framework. Identify a specific analytical task that you want to delegate. Be precise about what you need. Then find past data where you already completed that analysis. You need the right answers to evaluate whether AI can arrive at them. Work with AI to reproduce your past analysis and systematically evaluate the results. What did AI produce? How did it approach the task? How did it communicate findings? Identify gaps, refine your delegation, and then test again. If you can validate that AI produces correct results, you've built an approach that you can confidently use on new data. But if you can't get there after several refinements, you've learned that this isn't a task you should delegate.

So this is all great, but what if you're not very comfortable with the data to begin with and wouldn't be able to spot those process gaps yourself? AI can also be a useful tool to brainstorm and implement solutions you might not have thought of on your own. Because AI models are uniquely good at coding, they can help with things like writing Excel formulas, reformatting messy data, and more. In these cases, you can simply bring your question or idea to AI and specifically ask for help understanding what a solution could look like, just like how you would work with a data analyst on your team. As you work with AI, just keep asking for clarifications and explanations so that you can follow the process and understand the final output.

Just remember, validation builds confidence, but it doesn't eliminate responsibility. You're still accountable for checking that these results make sense and being transparent about AI's role in your analysis process.

This testing works for any analytical task you're considering: donor analysis, budget forecasting, survey synthesis, outcome tracking. Test first, validate what works, then apply with more confidence, or learn what you shouldn't delegate at all.

In our next lesson, we'll look at workflow augmentation and how to apply these same principles when AI handles routine tasks on your behalf.
`;function i(t){let i={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components},{Exercise:a,ExerciseDeck:s,LessonVideo:c}=i;return a||o("Exercise",!0),s||o("ExerciseDeck",!0),c||o("LessonVideo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"data-analysis-with-ai",children:"Data analysis with AI"}),`
`,(0,n.jsx)(c,{youtubeId:"Zzn-g8lvLMA",title:"Data analysis with AI",duration:"7 min",transcript:r,children:(0,n.jsx)(i.p,{children:`This video addresses a critical question that nonprofit professionals face
when using AI for data analysis: How do I know I can trust the results?
You'll follow Rio, a program director at Valley Veterans Services, as he
uses the Delegation-Diligence loop to systematically validate AI's
analytical capabilities using past data where he already knows the answers.
The video demonstrates how to build confidence through testing, identify
capability gaps, and develop an approach you can apply to new data with
confidence.`})}),`
`,(0,n.jsx)(i.h2,{id:"key-takeaways",children:"Key takeaways"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Test AI against data you already understand"}),": Before trusting AI with new analysis, validate it using past data where you know the correct results. If AI can match your known results with the right guidance, you can confidently use it for similar future tasks"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Use Discernment to identify gaps in AI's reasoning"}),": As you test, note where AI misses important context and what additional Description you need to provide"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Build validated approaches, not blind trust"}),": Each testing round teaches you what AI does well and where it needs guidance. Document what works so you can replicate it"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"AI can help even if you're not data-savvy"}),": If you're not comfortable with data analysis yourself, AI can help brainstorm solutions, write Excel formulas, and reformat messy data—just keep asking for clarifications so you understand the process"]}),`
`,(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Validation builds confidence but doesn't eliminate responsibility"}),": You're still accountable for checking that results make sense and being transparent about AI's role"]}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"exercises",children:"Exercises"}),`
`,(0,n.jsxs)(s,{children:[(0,n.jsxs)(a,{title:"Messaging analysis",note:"This exercise uses lower-stakes data (your own public communications) to practice the Description-Discernment loop for data analysis.",children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part I: Gather your data"})}),(0,n.jsx)(i.p,{children:"Collect 10-20 examples of your organization's communications—social media posts, email subject lines, newsletter headlines, or event announcements. Include a mix of what you consider high-performing and lower-performing content."}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part II: Analyze with AI"})}),(0,n.jsx)(i.p,{children:"Share your dataset with AI and ask it to identify patterns:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"What themes or topics appear in your higher-performing content?"}),`
`,(0,n.jsx)(i.li,{children:"What language, tone, or formatting patterns emerge?"}),`
`,(0,n.jsx)(i.li,{children:"Are there any gaps between what you communicate and what resonates?"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part III: Apply Discernment"})}),(0,n.jsx)(i.p,{children:"Evaluate AI's analysis:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Do the identified patterns match your intuition about what works?"}),`
`,(0,n.jsx)(i.li,{children:"What context is AI missing about your audience or goals?"}),`
`,(0,n.jsx)(i.li,{children:"Are there patterns AI identified that surprise you?"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Reflection:"})}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"What are you trying to learn from your dataset?"}),`
`,(0,n.jsx)(i.li,{children:"How does higher-performing content align with your authentic voice and organizational values?"}),`
`,(0,n.jsx)(i.li,{children:"Are you reaching the right audience?"}),`
`]}),(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Stretch goal"}),": Use AI to audit how your messaging compares with your organization's stated mission and values, find discrepancies, and create a messaging guide from the analysis."]})]}),(0,n.jsxs)(a,{title:"Analyzing donor giving patterns",note:"This exercise applies data analysis skills to high-stakes fundraising data, building on the data hygiene practices from Lesson 5.",children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part I: Prepare your data"})}),(0,n.jsx)(i.p,{children:"Use the sanitized donor dataset from Lesson 5, or prepare a new one by removing personally identifiable information. Ensure you have historical giving data across multiple time periods."}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part II: Analyze with AI"})}),(0,n.jsx)(i.p,{children:"Ask AI to identify patterns in:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Donor retention rates over time"}),`
`,(0,n.jsx)(i.li,{children:"Recurring vs. one-time donation patterns"}),`
`,(0,n.jsx)(i.li,{children:"Campaign effectiveness comparisons"}),`
`,(0,n.jsx)(i.li,{children:"Giving trends by amount ranges"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part III: Apply Discernment"})}),(0,n.jsx)(i.p,{children:"Critically evaluate AI's findings:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Do the trends match what you know about your donor base?"}),`
`,(0,n.jsx)(i.li,{children:"Is AI only focusing on monetary value, missing relationship factors?"}),`
`,(0,n.jsx)(i.li,{children:"What patterns would help strengthen donor relationships, not just maximize revenue?"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Reflection:"})}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"What might the costs of implementing efficiency recommendations be? (e.g., If findings suggest focusing on major donors at the expense of small donors, what's the impact on community perception or long-term sustainability?)"}),`
`,(0,n.jsx)(i.li,{children:"What patterns would help strengthen relationships with donors beyond just giving amounts?"}),`
`]})]}),(0,n.jsxs)(a,{title:"Trend analysis to anticipate community needs (stretch goal)",note:"This advanced exercise combines multiple data sources to practice predictive analysis—a highly requested capability.",children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part I: Gather diverse sources"})}),(0,n.jsx)(i.p,{children:"Collect information you already use to understand community needs:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Your own program data and service requests"}),`
`,(0,n.jsx)(i.li,{children:"External reports or datasets about your community"}),`
`,(0,n.jsx)(i.li,{children:"News or policy developments affecting your constituents"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part II: Analyze for emerging patterns"})}),(0,n.jsx)(i.p,{children:"Ask AI to help you identify:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"Trends in the types of support people are requesting"}),`
`,(0,n.jsx)(i.li,{children:"External factors that might increase or change demand"}),`
`,(0,n.jsx)(i.li,{children:"Gaps between current services and emerging needs"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Part III: Apply rigorous Discernment"})}),(0,n.jsx)(i.p,{children:"This analysis requires the highest level of critical evaluation:"}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"How do AI's predictions compare with your direct community experience?"}),`
`,(0,n.jsx)(i.li,{children:"What systemic factors or local context might AI be missing?"}),`
`,(0,n.jsx)(i.li,{children:"What values do you need to keep in mind as you anticipate community needs with dignity and respect?"}),`
`]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Reflection:"})}),(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"How can you approach this process responsibly?"}),`
`,(0,n.jsx)(i.li,{children:"What factors and systemic issues can explain or contextualize what AI cannot?"}),`
`]})]})]}),`
`,(0,n.jsx)(i.h2,{id:"lesson-reflection",children:"Lesson reflection"}),`
`,(0,n.jsxs)(i.ul,{children:[`
`,(0,n.jsx)(i.li,{children:"How did testing AI against data you already understood change your confidence in using it for new analysis?"}),`
`,(0,n.jsx)(i.li,{children:"What gaps or limitations did you identify that will shape how you delegate data analysis tasks in the future?"}),`
`]}),`
`,(0,n.jsx)(i.h2,{id:"whats-next",children:"What's next"}),`
`,(0,n.jsx)(i.p,{children:"In the next lesson, we'll look at workflow automation—how to apply these same principles when AI handles routine tasks on your behalf, freeing up your time for higher-impact work."})]})}function a(t={}){let{wrapper:r}={...e(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(i,{...t})}):i(t)}function o(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};