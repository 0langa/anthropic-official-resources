# Privileged bases in the transformer residual stream

[Read Paper](https://transformer-circuits.pub/2023/privileged-basis/index.html)

- Published

  Mar 16, 2023
- Team

  [Interpretability](https://www.anthropic.com/research/team/interpretability)
- Topics

  - [Interpretability](https://www.anthropic.com/search?topic=interpretability)
  - [Training](https://www.anthropic.com/search?topic=training)

Related articles

- Interpretability

  Sep 14, 2022

  [Toy models of superposition](https://www.anthropic.com/research/toy-models-of-superposition)

[View more](https://www.anthropic.com/search?topic=interpretability)

### Abstract

Our mathematical theories of the Transformer architecture suggest that individual coordinates in the residual stream should have no special significance (that is, the basis directions should be in some sense "arbitrary" and no more likely to encode information than random directions). Recent work has shown that this observation is false in practice. We investigate this phenomenon and provisionally conclude that the per-dimension normalizers in the Adam optimizer are to blame for the effect.  
  
We explore two other obvious sources of basis dependency in a Transformer: Layer normalization, and finite-precision floating-point calculations. We confidently rule these out as being the source of the observed basis-alignment.
