Announcements

# Aligning on child safety principles

Apr 23, 2024

Alongside other leading AI companies, we are committed to implementing robust child safety measures in the development, deployment, and maintenance of generative AI technologies. This new initiative, led by [Thorn](https://thorn.org/), a nonprofit dedicated to defending children from sexual abuse, and [All Tech Is Human](https://alltechishuman.org/), an organization dedicated to collectively tackling tech and society's complex problems, aims to mitigate the risks generative AI poses to children.

The commitment marks a significant step forward in preventing the misuse of AI technologies to create or spread child sexual abuse material (AIG-CSAM) and other forms of sexual harm against children.

As a safety-focused organization, we have made it a priority to implement rigorous policies, conduct extensive red teaming, and collaborate with external experts to make sure our models are safe. Anthropic’s [policies strictly prohibit content](https://www.anthropic.com/legal/aup) that describes, encourages, supports or distributes any form of child sexual exploitation or abuse. If we detect this material, we will report it to the National Center for Missing & Exploited Children (NCMEC). It’s important to note that at this time, our models do not have multimodal outputs, even though they are able to ingest images.

As part of this Safety by Design effort, Anthropic is [committed to the Safety by Design principles](https://www.thorn.org/blog/generative-ai-principles/). To ensure tangible action, Anthropic is also committing to the following mitigations, stemming from the principles. We are working towards the following:

## Develop

- Responsibly source our training data: avoid ingesting data into training that has a known risk - as identified by relevant experts in the space - of containing CSAM and CSEM.
- Detect, remove, and report CSAM and CSEM from our training data at ingestion.
- Conduct red teaming, incorporating structured, scalable, and consistent stress testing of our models for AIG-CSAM and CSEM.
- Define specific training data and model development policies.
- Prohibit customer use of our models to further sexual harms against children.

## Deploy

- Detect abusive content (CSAM, AIG-CSAM, and CSEM) in inputs and outputs.
- Include user reporting, feedback, or flagging options.
- Include an enforcement mechanism.
- Include prevention messaging for CSAM solicitation using available tools.
- Incorporate phased deployment, monitoring for abuse in early stages before launching broadly.
- Incorporate a child safety section into our model cards.

## Maintain

- When reporting to NCMEC, use the Generative AI File Annotation.
- Detect, report, remove, and prevent CSAM, AIG-CSAM and CSEM.
- Invest in tools to protect content from AI-generated manipulation.
- Maintain the quality of our mitigations.
- Disallow the use of generative AI to deceive others for the purpose of sexually harming children.
- Leverage Open Source Intelligence (OSINT) capabilities to understand how our platforms, products and models are potentially being abused by bad actors.

More detailed information about the principles which we and other organizations have signed up to can be found in the white paper: [Safety by Design for Generative AI: Preventing Child Sexual Abuse](https://info.thorn.org/hubfs/thorn-safety-by-design-for-generative-AI.pdf).

## Related content

### Improving our alignment and security efforts

[Read more](https://www.anthropic.com/news/improving-alignment-security-efforts)

### Previewing the Model Hardware Standard

We’re opening a research preview of the Model Hardware Standard (MHS), a shared specification for AI agents to safely operate physical devices, to a first group of scientific research labs and advanced manufacturers.

[Read more](https://www.anthropic.com/news/model-hardware-standard-research-preview)

### Expanding our support for scientists

Starting today, 10,000 scientists around the world can get Claude at no cost to start. Verified principal investigators qualify for a Claude Team subscription plan and then add their research team to Standard seats for free, or Premium seats for $15 per month, for up to a year.

[Read more](https://www.anthropic.com/news/expanding-support-for-scientists)
