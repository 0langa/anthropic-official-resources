AlignmentResearch

# Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training

Jan 14, 2024

[Read Paper](https://arxiv.org/abs/2401.05566)

Humans are capable of strategically deceptive behavior: behaving helpfully in most situations, but then behaving very differently in order to pursue alternative objectives when given the opportunity. If an AI system learned such a deceptive strategy, could we detect it and remove it using current state-of-the-art safety training techniques? To study this question, we construct proof-of-concept examples of deceptive behavior in large language models (LLMs). For example, we train models that write secure code when the prompt states that the year is 2023, but insert exploitable code when the stated year is 2024. We find that such backdoor behavior can be made persistent, so that it is not removed by standard safety training techniques, including supervised fine-tuning, reinforcement learning, and adversarial training (eliciting unsafe behavior and then training to remove it). The backdoor behavior is most persistent in the largest models and in models trained to produce chain-of-thought reasoning about deceiving the training process, with the persistence remaining even when the chain-of-thought is distilled away. Furthermore, rather than removing backdoors, we find that adversarial training can teach models to better recognize their backdoor triggers, effectively hiding the unsafe behavior. Our results suggest that, once a model exhibits deceptive behavior, standard techniques could fail to remove such deception and create a false impression of safety.

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
