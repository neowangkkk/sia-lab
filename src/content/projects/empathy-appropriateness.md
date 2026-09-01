---
title: 'Should Machines Be Empathic?'
cluster: empathy
area: Human–AI communication; empathic AI
stage: Conceptual paper · propositions developed
oneLine: Empathy is appropriate when it preserves the user's primary goal, and costly when it displaces it.
whyMatters: The debate over empathic LLMs has been stuck on capability — whether a model can produce empathy that reads as genuine. That question is now largely settled and the wrong one to keep asking. What designers actually need is a principle for when empathy helps and when it quietly redirects a user away from what they came to do.
idea: Shift the debate from whether LLMs can display empathy to when empathy is appropriate, using Multiple Goals Theory to explain how empathic recognition can support or displace the user's primary communicative goal.
researchQuestion: When is empathy appropriate in an LLM response, and what communicative principle should govern whether and how an LLM uses empathy?
keyProposition: Empathy is appropriate when it preserves and advances the user's primary communicative goal, and inappropriate when socioemotional engagement competes with, redirects, or substitutes for that goal. Emotional support is not displacing when support is itself the primary goal.
dataDescription: Conceptual synthesis of research on LLM empathy capability, perceived empathy, interaction context, human–AI differences, and the costs of excessive or misdirected empathy. The current paper architecture involves no new empirical dataset.
findings: This is a conceptual result rather than an empirical finding. The paper develops goal-hierarchy preservation, distinguishes goal-preserving empathy from goal displacement, and derives five propositions covering goal contingency, recognition need, facilitation of primary-goal pursuit, displacement costs, and emotional support as a legitimate primary goal.
lastActivity: 2026-08
collaborators: ['Chi-Ching Juan']
order: 1
---

An LLM that responds to a debugging question by first acknowledging how frustrating the bug must be
is doing something recognizably empathic and possibly counterproductive. This paper argues that
appropriateness is not a property of the empathic move itself but of its relationship to what the
user came to accomplish.

Using Multiple Goals Theory, we treat every message as carrying a hierarchy of goals and define
empathy as appropriate when it preserves that hierarchy — recognizing affect in service of the
primary goal rather than in competition with it. The framework yields five propositions and, more
usefully for design, a diagnostic: the question is never how much empathy to express, but whether
this expression advances or displaces the goal the user actually has. Emotional support escapes the
critique entirely when support is the primary goal, which is why blanket prescriptions in either
direction fail.
