---
title: Memory Corruption Assignment
course_id: 6-033-computer-system-engineering-spring-2018
type: course
layout: course_section
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: f16c7835ea5199312f17c5652cc47102
    name: Memory Corruption Assignment
    weight: 620
    parent: 87aba98430c8d18b3f717bdec998328f
---
For this recitation, you'll be reading ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)"[SoK: Eternal War in Memory (PDF)](https://people.eecs.berkeley.edu/~dawnsong/papers/Oakland13-SoK-CR.pdf)" by Lazlo Szekeres, Mathia Payer, Tao Wei, and Dawn Song. This paper describes a variety of memory corruption bugs, and potential solutions. Don't worry about memorizing every single type of attack described in this paper; aim to understand what makes these attacks possible, and the general ideas behind the solutions.

(We've also written a [quick guide (PDF)]({{% getpage "courses/6-033-computer-system-engineering-spring-2018/sections/week-13/memory-corruption-assignment/guide" %}}) to some of the memory corruption bugs described in the paper, which you might want to take a look at before you start reading.)

The paper is fairly well organized:

*   Section I gives you an introduction to the general problem, and a brief history of memory corruption attacks and defenses.
*   Section II details many different types of memory corruption attacks. Figure 1 is particularly helpful in organizing these attacks and their defenses. As stated above, don't worry about memorizing every single type of attack described in this section; aim to understand what makes the various attacks different from one another, as well as what makes each of these possible in the first place.
*   Section III describes two currently-deployed defenses, and their drawbacks.
*   Section IV outlines some properties and requirements for defenses against memory corruption bugs; those defenses are discussed in Sections V-VIII (each section is a different category of defense).
*   Sections IX and X conclude.

As you read, think about the following:

*   Stack canaries (or cookies) and ASLR are both widely-deployed. What is good about those solutions? What attacks do they prevent? What attacks _don't_ they prevent?
*   Many of the proposed solutions worsen performance. Are we at a point where these performance hits are outweighed by security concerns?

Questions for Recitation
------------------------

**Before you come to this recitation**, write up (on paper) a _brief_ answer to the following (really—we don't need more than a couple sentences for each question).  

Your answers to these questions should be **in your own words**, not direct quotations from the paper.

*   What do the authors mean by "the eternal war in memory"?
*   How has this war progressed over time? (i.e., how have attacks and solutions evolved)
*   Why hasn't the war ended?

As always, there are multiple correct answers for each of these questions.