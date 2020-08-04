---
title: Landmark Routing Assignment
course_id: 6-033-computer-system-engineering-spring-2018
type: course
layout: course_section
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: 88350e45d2abeb7d9d77bcfb2ecec721
    name: Landmark Routing Assignment
    weight: 270
    parent: a8eaa3de11de35a2f8d6b2d186c97fc6
---
Read ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)"[The Landmark Hierarchy: An New Hierarchy for Routing Very Large Networks (PDF)](http://www.cs.cornell.edu/people/francis/p35-tsuchiya.pdf)" by Paul Tsuchiya. This paper was written in 1988. In 1988, routing algorithms such as link-state and distance-vector (which you'll see in the preceding lecture) already existed. The Internet also existed, and was beginning to grow, but was not the network it is today.

To help you as you read:

*   Section 2.1 gives an overview of _Area Hierarchy_, an existing system. The paper will continue to contrast landmark routing with area hierarchy.
*   Section 2.2 gives an overview of _Landmark Hierarchy_, the system that this paper is proposing. You should understand how routing and addressing work in this system. A good quick check is to look at Figure 4 and figure out what entries should be in Router g's table (the text below Figure 4 will tell you the answer).
*   Section 3 gives a very brief overview of some of the other algorithms required for landmark routing.
*   Section 4 presents results on the performance of the landmark hierarchy, often in contrast to the area hierarchy. While reading this section, you should think about what aspects of their analysis are convincing (if any) and what aspects are not (if any).

As you read, think about the following:

*   How does the landmark hierarchy differ from the area hierarchy? Are there places where they perform similarly, or make similar tradeoffs?
*   The landmark hierarchy was not used on the Internet. Why do you think that is?

Questions for Recitation
------------------------

**Before you come to this recitation**, write up (on paper) a _brief_ answer to the following (really—we don't need more than a couple sentences for each question). 

Your answers to these questions should be **in your own words**, not direct quotations from the paper.

*   What problem(s) is the landmark hierarchy addressing?
*   How does it work?
*   Why do you think the landmark hierarchy wasn't used on the Internet? (There are many reasons, but it is not because the ideas presented in the paper are inherently bad)

As always, there are multiple correct answers for each of these questions.