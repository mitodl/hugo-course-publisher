---
title: 'Part B: Flux and the Divergence Theorem'
course_id: 18-02sc-multivariable-calculus-fall-2010
menu:
  18-02sc-multivariable-calculus-fall-2010:
    identifier: 2afdabb0a4acff042357fe33b02c43c3
    name: 'Part B: Flux and the Divergence Theorem'
    weight: 1130
    parent: 80a7ff20650c3af9a002f822edced8a0
---
« [Previous]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-a-triple-integrals/problem-set-10/_index.md" %}}) | [Next]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-79-vector-fields-in-space/_index.md" %}}) »

Here we will extend Green's theorem in flux form to the divergence (or Gauss') theorem relating the flux of a vector field through a closed surface to a triple integral over the region it encloses. Before learning this theorem we will have to discuss the surface integrals, flux through a surface and the divergence of a vector field.

> » [Session 79: Vector Fields in Space]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-79-vector-fields-in-space/_index.md" %}})  
> » [Session 80: Flux Through a Surface]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-80-flux-through-a-surface/_index.md" %}})  
> » [Session 81: Calculating Flux; Finding ndS]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-81-calculating-flux-finding-nds/_index.md" %}})  
> » [Session 82: ndS for a Surface z = f(x, y)]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-82-nds-for-a-surface-z-f-x-y/_index.md" %}})  
> » [Session 83: Other Ways to Find ndS]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-83-other-ways-to-find-nds/_index.md" %}})  
> » [Session 84: Divergence Theorem]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-84-divergence-theorem/_index.md" %}})  
> » [Session 85: Physical Meaning of Flux; Del Notation]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-85-physical-meaning-of-flux-del-notation/_index.md" %}})  
> » [Session 86: Proof of the Divergence Theorem]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-86-proof-of-the-divergence-theorem/_index.md" %}})  
> » [Session 87: Diffusion Equation]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-87-diffusion-equation/_index.md" %}})  
> » [Problem Set 11]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/problem-set-11/_index.md" %}})

« [Previous]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-a-triple-integrals/problem-set-10/_index.md" %}}) | [Next]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-79-vector-fields-in-space/_index.md" %}}) »