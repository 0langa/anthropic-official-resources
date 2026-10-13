Societal Impacts

# Predictability and Surprise in Large Generative Models

Feb 15, 2022

[Read Paper](https://arxiv.org/abs/2202.07785)

## Abstract

Large-scale pre-training has recently emerged as a technique for creating capable, general purpose, generative models such as GPT-3, Megatron-Turing NLG, Gopher, and many others. In this paper, we highlight a counterintuitive property of such models and discuss the policy implications of this property. Namely, these generative models have an unusual combination of predictable loss on a broad training distribution (as embodied in their "scaling laws"), and unpredictable specific capabilities, inputs, and outputs. We believe that the high-level predictability and appearance of useful capabilities drives rapid development of such models, while the unpredictable qualities make it difficult to anticipate the consequences of model deployment. We go through examples of how this combination can lead to socially harmful behavior with examples from the literature and real world observations, and we also perform two novel experiments to illustrate our point about harms from unpredictability. Furthermore, we analyze how these conflicting properties combine to give model developers various motivations for deploying these models, and challenges that can hinder deployment. We conclude with a list of possible interventions the AI community may take to increase the chance of these models having a beneficial impact. We intend this paper to be useful to policymakers who want to understand and regulate AI systems, technologists who care about the potential policy impact of their work, and academics who want to analyze, critique, and potentially develop large generative models.

### Policy Memo

[Predictability and Surprise Memo](https://www-cdn.anthropic.com/4ff80d7f8a98bf096cd543ec61ddc50de3ad8b16/Anthropic_PredictabilityAndSurprise.pdf)

## Related content

### AI models may be capable of self-replicating without access to a datacenter

Our experiments suggest that small AI models may be only months away from being capable enough to self-replicate on commercial IoT devices, like Android TVs and smart ovens.

[Read more](https://www.anthropic.com/research/self-replicating-ai)

### Strengthening our defenses against distillation attacks

Illicit distillation allows model developers to copy frontier AI capabilities without creating proportionally robust safeguards. Here, we describe how we’ve reduced the rate of distillation by more than 90%.

[Read more](https://www.anthropic.com/research/distillation-defenses)

### Investigating unintended model actions in our evaluations and internal use

This report describes examples of unintended model actions we’ve observed during evaluations and internal use of Claude.

[Read more](https://www.anthropic.com/research/investigating-unintended-model-actions)
