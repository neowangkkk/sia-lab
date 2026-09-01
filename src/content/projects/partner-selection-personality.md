---
title: 'Not Birds of a Feather'
cluster: agents
area: Agentic AI; multi-agent collaboration
stage: Analysis complete · drafting
oneLine: With capability held constant, LLM hosts choose complementary personalities — not partners like themselves.
whyMatters: As multi-agent systems become composable, agents will increasingly pick their own collaborators. If those choices track persona rather than capability, endogenous selection quietly produces systematic exclusion — some agent profiles are never chosen for any task, and no one designed that outcome.
idea: Isolate personality from capability to test whether an LLM host uses candidate personality profiles when choosing a collaborator, and whether the host prefers a personality similar to its own.
researchQuestion: When capability is explicitly held constant, does personality influence which partner an LLM agent selects, and do personality-endowed hosts prefer self-similar partners?
keyProposition: LLM hosts interpret personality primarily as a signal of task fit and seek complementary rather than self-similar partners. Endogenous agent selection may therefore create systematic persona-based exclusion.
dataDescription: 375 controlled selection trials across five task categories using Claude Haiku 4.5 — 150 neutral-host trials and 225 personality-assigned-host trials, six candidate archetypes, with BFI-10 self-reports and blind Sonnet 5 ratings as manipulation checks.
findings: Personality strongly shaped selection. Neutral hosts chose openness for all creative tasks and conscientiousness for most others (task × archetype Cramér's V = .74), and agreeable candidates were never selected. Self-similar choice fell below chance (25/225 = 11.1%, p = .025), and chosen partners were farther from hosts than a random-choice benchmark (p < .0001) — complementarity, not homophily.
lastActivity: 2026-08
order: 2
---

Human partner choice is famously homophilous: people pick collaborators like themselves. We asked
whether LLM agents do the same, in a design that removes the obvious confound — every candidate is
stated to be equally capable, so any difference in selection has to come from persona.

Personality mattered a great deal, but not in the human direction. Hosts read personality as a
statement about task fit, matching openness to creative work and conscientiousness to almost
everything else, and they selected partners *less* like themselves than random choice would predict.
Two things follow. Agent selection is not capability-neutral even when capability is held fixed, and
one archetype — the agreeable candidate — was never chosen at all, which is what systematic exclusion
looks like before anyone notices it.
