---
title: ' 2. Partial Derivatives'
course_id: 18-02sc-multivariable-calculus-fall-2010
menu:
  18-02sc-multivariable-calculus-fall-2010:
    identifier: c4eb7979ba24327046e3f4d3be8fc654
    type: section
    layout: section
    name: ' 2. Partial Derivatives'
    weight: 350
---
« [Previous]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/1.-vectors-and-matrices/exam-1/exam/_index.md" %}}) | [Next]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-a-functions-of-two-variables-tangent-approximation-and-optimization/_index.md" %}}) »

In this unit we will learn about derivatives of functions of several variables. Conceptually these derivatives are similar to those for functions of a single variable.

1.  They measure rates of change.
2.  They are used in approximation formulas.
3.  They help identify local maxima and minima.

As you learn about partial derivatives you should keep the first point, that all derivatives measure rates of change, firmly in mind. Said differently, derivatives are limits of ratios. For example,

![](https://open-learning-course-data-ci.s3.amazonaws.com/18-02sc-multivariable-calculus-fall-2010/d2c4c6307955820e38ff7004326fe258_MIT18_02SC_limit.png)

Of course, we’ll explain what the pieces of each of these ratios represent.

Although conceptually similar to derivatives of a single variable, the uses, rules and equations for multivariable derivatives can be more complicated. To help us understand and organize everything our two main tools will be the tangent approximation formula and the gradient vector.

Our main application in this unit will be solving optimization problems, that is, solving problems about finding maxima and minima. We will do this in both unconstrained and constrained settings.

[\*\*Part A: Functions of Two Variables, Tangent Approximation and Optimization\*\*]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-a-functions-of-two-variables-tangent-approximation-and-optimization/_index.md" %}})

> » [Session 24: Functions of Two Variables: Graphs]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-a-functions-of-two-variables-tangent-approximation-and-optimization/session-24-functions-of-two-variables-graphs/_index.md" %}})  
> » [Session 25: Level Curves and Contour Plots]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-a-functions-of-two-variables-tangent-approximation-and-optimization/session-25-level-curves-and-contour-plots/_index.md" %}})  
> » [Session 26: Partial Derivatives]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-a-functions-of-two-variables-tangent-approximation-and-optimization/session-26-partial-derivatives/_index.md" %}})  
> » [Session 27: Approximation Formula]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-a-functions-of-two-variables-tangent-approximation-and-optimization/session-27-approximation-formula/_index.md" %}})  
> » [Session 28: Optimization Problems]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-a-functions-of-two-variables-tangent-approximation-and-optimization/session-28-optimization-problems/_index.md" %}})  
> » [Session 29: Least Squares]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-a-functions-of-two-variables-tangent-approximation-and-optimization/session-29-least-squares/_index.md" %}})  
> » [Session 30: Second Derivative Test]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-a-functions-of-two-variables-tangent-approximation-and-optimization/session-30-second-derivative-test/_index.md" %}})  
> » [Session 31: Example]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-a-functions-of-two-variables-tangent-approximation-and-optimization/session-31-example/_index.md" %}})  
> » [Problem Set 4]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-a-functions-of-two-variables-tangent-approximation-and-optimization/problem-set-4/_index.md" %}})

**[Part B: Chain Rule, Gradient and Directional Derivatives]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-b-chain-rule-gradient-and-directional-derivatives/_index.md" %}})**

> » [Session 32: Total Differentials and the Chain Rule]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-b-chain-rule-gradient-and-directional-derivatives/session-32-total-differentials-and-the-chain-rule/_index.md" %}})  
> » [Session 33: Examples]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-b-chain-rule-gradient-and-directional-derivatives/session-33-examples/_index.md" %}})  
> » [Session 34: The Chain Rule with More Variables]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-b-chain-rule-gradient-and-directional-derivatives/session-34-the-chain-rule-with-more-variables/_index.md" %}})  
> » [Session 35: Gradient: Definition, Perpendicular to Level Curves]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-b-chain-rule-gradient-and-directional-derivatives/session-35-gradient-definition-perpendicular-to-level-curves/_index.md" %}})  
> » [Session 36: Proof]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-b-chain-rule-gradient-and-directional-derivatives/session-36-proof/_index.md" %}})  
> » [Session 37: Example]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-b-chain-rule-gradient-and-directional-derivatives/session-37-example/_index.md" %}})  
> » [Session 38: Directional Derivatives]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-b-chain-rule-gradient-and-directional-derivatives/session-38-directional-derivatives/_index.md" %}})  
> » [Problem Set 5]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-b-chain-rule-gradient-and-directional-derivatives/problem-set-5/_index.md" %}})

**[Part C: Lagrange Multipliers and Constrained Differentials]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/_index.md" %}})**

> » [Session 39: Statement of Lagrange Multipliers and Example]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/session-39-statement-of-lagrange-multipliers-and-example/_index.md" %}})  
> » [Session 40: Proof of Lagrange Multipliers]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/session-40-proof-of-lagrange-multipliers/_index.md" %}})  
> » [Session 41: Advanced Example]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/session-41-advanced-example/_index.md" %}})  
> » [Session 42: Constrained Differentials]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/session-42-constrained-differentials/_index.md" %}})  
> » [Session 43: Clearer Notation]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/session-43-clearer-notation/_index.md" %}})  
> » [Session 44: Example]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/session-44-example/_index.md" %}})  
> » [Problem Set 6]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/problem-set-6/_index.md" %}})

**[Exam 2]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/exam-2/_index.md" %}})**

> » [Practice Exam]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/exam-2/practice-exam/_index.md" %}})  
> » [Session 45: Review of Topics]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/exam-2/session-45-review-of-topics/_index.md" %}})  
> » [Session 46: Review of Problems]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/exam-2/session-46-review-of-problems/_index.md" %}})  
> » [Exam Materials]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/exam-2/exam-materials/_index.md" %}})

« [Previous]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/1.-vectors-and-matrices/exam-1/exam/_index.md" %}}) | [Next]({{% getpage "courses/18-02sc-multivariable-calculus-fall-2010/sections/2.-partial-derivatives/part-a-functions-of-two-variables-tangent-approximation-and-optimization/_index.md" %}}) »