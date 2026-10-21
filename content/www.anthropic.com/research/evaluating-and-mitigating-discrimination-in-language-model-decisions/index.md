# Evaluating and mitigating discrimination in language model decisions

[Read Paper](http://arxiv.org/abs/2312.03689)

![Evaluating and mitigating discrimination in language model decisions](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Ffa64ac336bcfb29c9f37961758a0e9352c588818-2000x1125.jpg&w=1920&q=75)

- Published

  Dec 7, 2023
- Team

  [Societal Impacts](https://www.anthropic.com/research/team/societal-impacts)
- Topics

  - [Bias and fairness](https://www.anthropic.com/search?topic=bias-and-fairness)
  - [Measurement and mitigation](https://www.anthropic.com/search?topic=measurement-and-mitigation)
  - [Safety evaluations](https://www.anthropic.com/search?topic=safety-evaluations)
  - [Benchmarks](https://www.anthropic.com/search?topic=benchmarks)See more...

Related articles

- Societal Impacts

  Nov 13, 2025

  [Measuring political bias in Claude](https://www.anthropic.com/research/political-even-handedness)

[View more](https://www.anthropic.com/search?topic=bias-and-fairness)

### Abstract

As language models (LMs) advance, interest is growing in applying them to high-stakes societal decisions, such as determining financing or housing eligibility. However, their potential for discrimination in such contexts raises ethical concerns, motivating the need for better methods to evaluate these risks. We present a method for proactively evaluating the potential discriminatory impact of LMs in a wide range of use cases, including hypothetical use cases where they have not yet been deployed. Specifically, we use an LM to generate a wide array of potential prompts that decision-makers may input into an LM, spanning 70 diverse decision scenarios across society, and systematically vary the demographic information in each prompt. Applying this methodology reveals patterns of both positive and negative discrimination in the Claude 2.0 model in select settings when no interventions are applied. While we do not endorse or permit the use of language models to make automated decisions for the high-risk use cases we study, we demonstrate techniques to significantly decrease both positive and negative discrimination through careful prompt engineering, providing pathways toward safer deployment in use cases where they may be appropriate. Our work enables developers and policymakers to anticipate, measure, and address discrimination as language model capabilities and applications continue to expand. We release our dataset and prompts [here](https://huggingface.co/datasets/Anthropic/discrim-eval).

### Policy memo

[Evaluating and Mitigating Discrimination in Language Model Decisions Policy Memo](https://www-cdn.anthropic.com/f0dfb70b9b309d7c52845f73da8d964140669ff7/Anthropic_DiscriminationEval.pdf)
