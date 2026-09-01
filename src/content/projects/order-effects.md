---
title: 'Order Effects When Agents Choose Collaborators'
cluster: agents
area: Agentic AI; agent evaluation and partner selection
stage: Two studies complete · drafting
oneLine: Counterbalancing yields an unbiased average, yet each individual agent choice still moves with interview order.
whyMatters: Agent evaluation borrows its methods from human experiments, where counterbalancing is treated as a solved problem. If a balanced design produces a clean aggregate while every individual decision remains position-dependent, then deployments that make one choice at a time inherit a bias the study design was supposed to have removed.
idea: Study agent partner choice as an interactive evaluation process in which the host produces the interview evidence it later uses — distinguishing interview-sequence position from final-menu position, and aggregate balance from the defensibility of each individual choice.
researchQuestion: What does an agent's collaborator choice track when the agent conducts the interviews itself, and does full counterbalancing remove order dependence from individual selections?
keyProposition: Counterbalancing can yield an unbiased aggregate estimate without making individual agent choices position-independent. Order effects can also be host-specific and disappear entirely when results are pooled.
dataDescription: Study 1 — 80 comparative-selection runs with two host models, four candidates per run, 320 candidate observations, 85 capability-calibration runs, 1,431 parsed absolute judge records, and 1,913 parsed pairwise judge records. Study 2 — 480 isolated interviews with two hosts and eight candidates.
findings: Interview position remained associated with selection after full counterbalancing, but in opposite directions by host (Claude last-vs-first OR = 4.01, p = .019; GPT OR = 0.15, p = .013), so the pooled effect was null (p = .93). An interview-position interaction was detected (p = .029) while final-menu position was not (p = .286). In isolated evaluation, family preference did not reach the preregistered threshold.
lastActivity: 2026-08
order: 3
---

When an agent interviews candidates and then picks one, it is both the experimenter and the subject:
the evidence it later reasons over is evidence it generated itself. This project separates two things
that get conflated in that setting — where a candidate sat in the interview sequence, and where it sat
in the final menu the host reasoned over.

The result is a methodological warning. Full counterbalancing did what it is supposed to do at the
aggregate level: the pooled order effect was indistinguishable from zero. But that null was the sum of
two strong effects pointing in opposite directions, one per host model. Any single deployment running a
single host still makes position-dependent choices; the balance exists only in the average across
hosts, which is not where decisions actually get made.
