import{em as e,nm as t}from"../../../content-de-meta-ifw6afqc.js";var n=e();function r(e){let r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components},{ChatAttachments:i,ChatPrompt:o,ChatResponse:s,Connectors:c,TryIn:l,Video:u}=r;return i||a("ChatAttachments",!0),o||a("ChatPrompt",!0),s||a("ChatResponse",!0),c||a("Connectors",!0),l||a("TryIn",!0),u||a("Video",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u,{youtubeId:"kS1MJFZWMq4",title:"Package your brand guidelines in a skill demo"}),`
`,(0,n.jsx)(r.h2,{id:"1-describe-the-task",children:"1. Describe the task"}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12512176-what-are-skills",children:"Skills"})," let you package expertise, like your complete brand identity, for Claude to automatically apply across conversations. Upload your color palette, define your typography standards, and specify when to use which elements. Claude can then apply your brand guidelines automatically in any chat, whether it's for a quarterly report, client presentation, or internal spreadsheet."]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12599426-how-to-create-a-skill-with-claude-through-conversation",children:"Creating this skill"})," takes minutes. To start, walk through your brand fonts, colors, and other stylistic choices. Ask Claude to structure the information into a reusable skill that activates whenever you need brand-consistent outputs."]}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsx)(r.p,{children:"I want to create a skill that applies our company's brand styling to any presentation, document, or spreadsheet I create in Claude. Here's what I need to encode:"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Color Palette:"})}),(0,n.jsx)(r.p,{children:"Dark: #141413 (primary text, dark backgrounds)"}),(0,n.jsx)(r.p,{children:"Light: #faf9f5 (light backgrounds, text on dark)"}),(0,n.jsx)(r.p,{children:"Mid Gray: #b0aea5 (secondary elements)"}),(0,n.jsx)(r.p,{children:"Light Gray: #e8e6dc (subtle backgrounds)"}),(0,n.jsx)(r.p,{children:"Orange: #d97757 (primary accent for important elements)"}),(0,n.jsx)(r.p,{children:"Blue: #6a9bcc (secondary accent)"}),(0,n.jsx)(r.p,{children:"Green: #788c5d (tertiary accent)"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Typography:"})}),(0,n.jsx)(r.p,{children:"Headings (24pt and larger): Poppins font, bold weight"}),(0,n.jsx)(r.p,{children:"Body text: Lora font, regular weight"}),(0,n.jsx)(r.p,{children:"Fallbacks: Arial for headings if Poppins unavailable, Georgia for body if Lora unavailable"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Application Rules:"})}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Apply Poppins to all slide titles and document headings"}),`
`,(0,n.jsx)(r.li,{children:"Apply Lora to body text and paragraphs"}),`
`,(0,n.jsx)(r.li,{children:"Use accent colors (orange, blue, green) for shapes, charts, and visual elements"}),`
`,(0,n.jsx)(r.li,{children:"Cycle through accent colors to maintain visual interest"}),`
`,(0,n.jsx)(r.li,{children:"Use dark color for primary text on light backgrounds"}),`
`,(0,n.jsx)(r.li,{children:"Use light color for text on dark backgrounds"}),`
`]}),(0,n.jsx)(r.p,{children:"Create a complete skill with proper structure that I can use whenever I need brand-consistent presentations. Include the SKILL.md file with clear instructions for when to use it and how it applies the styling."})]}),`
`,(0,n.jsx)(r.h2,{id:"2-give-claude-context",children:"2. Give Claude context"}),`
`,(0,n.jsxs)(r.p,{children:["Upload any existing brand guidelines, style sheets, or design documentation to serve as examples that Claude can reference within the skill. Enable file creation and Skills in your ",(0,n.jsx)(r.a,{href:"https://claude.ai/settings/capabilities",children:"settings"})," so Claude can build the complete skill package with proper structure, code, and documentation."]}),`
`,(0,n.jsx)(r.h3,{id:"required-context",children:"Required context"}),`
`,(0,n.jsxs)(r.p,{children:["Enable the ",(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/10166901-using-the-google-drive-integration",children:"Google Drive"})," integration so Claude can access your brand reference file to further enhance your skill."]}),`
`,(0,n.jsx)(c,{surface:"chat",items:[{slug:"google-drive"}]}),`
`,(0,n.jsx)(i,{items:[{name:"brand-reference-file",fileType:"DOC"}]}),`
`,(0,n.jsx)(r.h2,{id:"3-what-claude-creates",children:"3. What Claude creates"}),`
`,(0,n.jsx)(r.p,{children:"Claude produces a complete, working skill package with clear instructions for when the skill applies, brand color specifications with hex values, typography guidelines with fallback fonts, and implementation details. The skill activates automatically when you request your brand styling."}),`
`,(0,n.jsxs)(s,{children:[(0,n.jsx)(r.p,{children:"I've created a comprehensive skill that will automatically apply your company's brand guidelines to every presentation, document, and spreadsheet you create in Claude."}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"View your brand-guidelines.skill"})}),(0,n.jsx)(r.p,{children:"The skill includes:"}),(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"SKILL.md - The core skill document with complete brand specifications"}),`
`,(0,n.jsx)(r.li,{children:"color-typography-specs.md - Detailed technical specifications with Python code examples"}),`
`,(0,n.jsx)(r.li,{children:"usage-examples.md - Practical examples showing how the skill works"}),`
`,(0,n.jsx)(r.li,{children:"brand_utils.py - Python utility module for easy implementation"}),`
`]}),(0,n.jsx)(r.h3,{children:"Your Brand System"}),(0,n.jsx)(r.p,{children:"Color Palette:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Dark (#141413) - primary text"}),`
`,(0,n.jsx)(r.li,{children:"Light (#faf9f5) - backgrounds"}),`
`,(0,n.jsx)(r.li,{children:"Orange (#d97757) - primary accent"}),`
`,(0,n.jsx)(r.li,{children:"Blue (#6a9bcc) - secondary accent"}),`
`,(0,n.jsx)(r.li,{children:"Green (#788c5d) - tertiary accent"}),`
`,(0,n.jsx)(r.li,{children:"Plus mid gray and light gray for supporting elements"}),`
`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"T"}),"ypography:"]}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Poppins Bold for all headings (fallback: Arial)"}),`
`,(0,n.jsx)(r.li,{children:"Lora Regular for all body text (fallback: Georgia)"}),`
`]}),(0,n.jsx)(r.h3,{children:"How It Works"}),(0,n.jsx)(r.p,{children:"The skill activates automatically whenever you:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Create a new presentation, document, or spreadsheet"}),`
`,(0,n.jsx)(r.li,{children:"Edit existing .pptx, .docx, or .xlsx files"}),`
`,(0,n.jsx)(r.li,{children:"Request any business document creation"}),`
`]}),(0,n.jsx)(r.p,{children:"You don't need to mention brand guidelines - it just works! Just ask for what you need:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:'"Create a 10-slide presentation about Q4 results"'}),`
`,(0,n.jsx)(r.li,{children:'"Write a project proposal document"'}),`
`,(0,n.jsx)(r.li,{children:'"Make a budget tracking spreadsheet"'}),`
`]}),(0,n.jsx)(r.p,{children:"And the brand guidelines are automatically applied with:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Correct fonts and sizes"}),`
`,(0,n.jsx)(r.li,{children:"Brand color palette"}),`
`,(0,n.jsx)(r.li,{children:"Proper contrast ratios"}),`
`,(0,n.jsx)(r.li,{children:"Professional spacing"}),`
`,(0,n.jsx)(r.li,{children:"Accent colors in sequence"}),`
`]}),(0,n.jsx)(r.h3,{children:"Additional Resources"}),(0,n.jsx)(r.p,{children:"I've also created helpful reference materials:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"View README - Complete package overview"}),`
`,(0,n.jsx)(r.li,{children:"View Quick Reference - Color and typography at a glance"}),`
`]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Key Features"})}),(0,n.jsx)(r.p,{children:"Smart & Automatic:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Triggers on document creation/editing without explicit commands"}),`
`,(0,n.jsx)(r.li,{children:"Applies brand standards seamlessly"}),`
`,(0,n.jsx)(r.li,{children:"Cycles through accent colors intelligently"}),`
`]}),(0,n.jsx)(r.p,{children:"Comprehensive:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Covers presentations, documents, and spreadsheets"}),`
`,(0,n.jsx)(r.li,{children:"Includes Python code utilities for advanced users"}),`
`,(0,n.jsx)(r.li,{children:"Provides fallback fonts when needed"}),`
`]}),(0,n.jsx)(r.p,{children:"Professional Quality:"}),(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"WCAG AA accessible color contrasts"}),`
`,(0,n.jsx)(r.li,{children:"Typography hierarchy that scales"}),`
`,(0,n.jsx)(r.li,{children:"Consistent visual identity across all outputs"}),`
`]}),(0,n.jsx)(r.h3,{children:"Next Steps"}),(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:"Install the skill - Upload brand-guidelines.skill to Claude"}),`
`,(0,n.jsx)(r.li,{children:"Start creating - Just ask for documents normally"}),`
`,(0,n.jsx)(r.li,{children:"Watch the magic - Brand guidelines apply automatically!"}),`
`]}),(0,n.jsx)(r.p,{children:"You can also upload the brand PDF you mentioned if you'd like me to cross-reference or enhance the skill with additional assets from it. But as it stands, the skill is fully functional and ready to use with all the specifications you provided!"})]}),`
`,(0,n.jsx)(r.h2,{id:"4-follow-up-prompts",children:"4. Follow up prompts"}),`
`,(0,n.jsx)(r.p,{children:"Continue the conversation with Claude to refine, expand, or explore further."}),`
`,(0,n.jsx)(r.h3,{id:"test-the-skill",children:"Test the skill"}),`
`,(0,n.jsx)(r.p,{children:"Create new content and watch your brand apply automatically without specifying colors or fonts. Claude handles all visual styling decisions based on your uploaded guidelines, letting you focus on content rather than formatting details."}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Create a quarterly business review presentation covering revenue growth, customer acquisition, and market expansion. Use our brand guidelines."})}),`
`,(0,n.jsx)(r.h3,{id:"update-the-skill",children:"Update the skill"}),`
`,(0,n.jsx)(r.p,{children:"Make changes or add additional visual standards to your skill as your brand evolves. Simply tell Claude your desired output, and it will edit your Skills as your needs evolve."}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Update my brand guidelines skill. Use the dark background with light text for all title slides, but keep content slides light. Make the heading font size 28pt instead of 24pt. Also, add our new product colors to the brand guidelines skill: Purple #8B7AB8 for premium features, Teal #4A9B9B for analytics content. These should be used in charts when presenting those specific topics."})}),`
`,(0,n.jsx)(r.h3,{id:"stack-your-skills",children:"Stack your skills"}),`
`,(0,n.jsxs)(r.p,{children:["Skills are ",(0,n.jsx)(r.a,{href:"https://www.anthropic.com/news/skills",children:"composable"}),", meaning they can reference each other for Claude to use them together. Your ‘brand-guidelines’ skill can work with other skills you've created—like product-research or writing-standards—to produce work that's both visually sophisticated and aligned with your other requirements"]}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(r.p,{children:"Create a pitch deck for our new product launch. Use my brand-guidelines skill for formatting and apply the product-research skill to find relevant information."})}),`
`,(0,n.jsx)(r.h2,{id:"5-tricks-tips-and-troubleshooting",children:"5. Tricks, tips, and troubleshooting"}),`
`,(0,n.jsx)(r.h3,{id:"understand-how-progressive-disclosure-works",children:"Understand how progressive disclosure works"}),`
`,(0,n.jsx)(r.p,{children:"When Claude evaluates a task, it first scans skill metadata (the description at the top) to see if the skill is relevant. Only if it matches does Claude load the full instructions. Reference files load only when actually needed. This means you can have many skills available without overwhelming Claude's context."}),`
`,(0,n.jsx)(r.h3,{id:"add-bundled-scripts-for-deterministic-execution",children:"Add bundled scripts for deterministic execution"}),`
`,(0,n.jsxs)(r.p,{children:['Instructions allow interpretation variance. Scripts execute identically every time. If your brand skill says "apply orange accent ',(0,n.jsx)(r.code,{children:"#d97757"}),'," Claude interprets how to apply it. If your skill includes ',(0,n.jsx)(r.code,{children:"scripts/apply_brand_colors.py"})," with exact RGB values and application logic, execution is deterministic. Use scripts for specific color application, file transformations, data formatting, or anything where consistency matters more than flexibility. Keep instructions for decision-making, creative choices, and context-dependent behavior."]}),`
`,(0,n.jsx)(r.h3,{id:"learn-more-about-skill-creation",children:"Learn more about skill creation"}),`
`,(0,n.jsxs)(r.p,{children:['When you ask Claude to create a skill, Claude is using a skill-creator skill under the hood. This skill teaches Claude how to package your workflow into proper SKILL.md format, organize your files correctly, and package everything into a ZIP file. You describe your process in conversation and Claude uses the skill-creator skill to handle the translation of "I want bullets here and prose there" into the proper structure. To learn more about creating skills in Claude.ai, see ',(0,n.jsx)(r.a,{href:"https://support.claude.com/en/articles/12599426-how-to-create-a-skill-with-claude-through-conversation",children:(0,n.jsx)(r.em,{children:"How to create a skill with Claude"})}),"."]}),`
`,(0,n.jsx)(r.h2,{id:"6-ready-to-try-for-yourself",children:"6. Ready to try for yourself?"}),`
`,(0,n.jsx)(r.p,{children:"Create a skill once, and Claude applies that expertise automatically. Start with something you explain often, like your brand colors or your preferred report format, and watch how the skill activates exactly when you need it."}),`
`,(0,n.jsxs)(l,{surfaces:["chat"],children:[(0,n.jsx)(r.p,{children:"I want to create a skill that applies our company's brand styling to any presentation, document, or spreadsheet I create in Claude. Here's what I need to encode:"}),(0,n.jsx)(r.p,{children:"Color Palette:"}),(0,n.jsx)(r.p,{children:`Dark: #141413 (primary text, dark backgrounds)
Light: #faf9f5 (light backgrounds, text on dark)
Mid Gray: #b0aea5 (secondary elements)
Light Gray: #e8e6dc (subtle backgrounds)
Orange: #d97757 (primary accent for important elements)
Blue: #6a9bcc (secondary accent)
Green: #788c5d (tertiary accent)`}),(0,n.jsx)(r.p,{children:"Typography:"}),(0,n.jsx)(r.p,{children:`Headings (24pt and larger): Poppins font, bold weight
Body text: Lora font, regular weight
Fallbacks: Arial for headings if Poppins unavailable, Georgia for body if Lora unavailable`}),(0,n.jsx)(r.p,{children:"Application Rules:"}),(0,n.jsx)(r.p,{children:`• Apply Poppins to all slide titles and document headings
• Apply Lora to body text and paragraphs
• Use accent colors (orange, blue, green) for shapes, charts, and visual elements
• Cycle through accent colors to maintain visual interest
• Use dark color for primary text on light backgrounds
• Use light color for text on dark backgrounds`}),(0,n.jsx)(r.p,{children:"Create a complete skill with proper structure that I can use whenever I need brand-consistent presentations. Include the SKILL.md file with clear instructions for when to use it and how it applies the styling."})]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};