---
title: Consistency Guarantees Assignment
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: c109e0c5f4f69b527d96b0c911fcd579
    weight: 480
    parent: 62a94c78a5243c3060aa11c27ff81fc7
---
Read the ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)"[Replicated Data Consistency Explained Through Baseball (PDF)](https://www.microsoft.com/en-us/research/wp-content/uploads/2011/10/ConsistencyAndBaseballReport.pdf)" paper by Doug Terry.

This paper is relatively light on technical details, but should give you an understanding of different consistency guarantees and how a system chooses which guarantee to use. Section 2 explains some different guarantees, and Sections 3 and 4 walk through some examples that illustrate places where each guarantee might be used.

Pay close attention to Table 2, which rates each type of guarantee in terms of consistency, performance, and availability. Though the paper doesn't give the technical details that lead to these ratings, you should be able to reason about them based on what you've seen in lecture.

As you read, think about the following:

*   What are other systems where some of the weaker consistency guarantees are applicable?
*   What type of app-specific knowledge matters when determining the "right" consistency guarantee?

Questions for Recitation
------------------------

**Before you come to this recitation**, write up (on paper) a _brief_ answer to the following (really—we don't need more than a couple sentences for each question).  

Your answers to these questions should be **in your own words**, not direct quotations from the paper.

*   What is a consistency guarantee? What aspects of a system does it affect?
*   How does a system designer choose an appropriate consistency guarantee?
*   Why does the choice of consistency guarantee matter?

As always, there are multiple correct answers for each of these questions.