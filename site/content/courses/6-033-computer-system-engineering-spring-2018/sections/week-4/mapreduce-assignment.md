---
title: MapReduce Assignment
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: 669830ffa14523d6dcee00927f0c1d39
    name: MapReduce Assignment
    weight: 210
    parent: 0466ee2b5ebb72d0ad4f7badf3b6c645
---
Preparation for MapReduce recitation

*   Read ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)"[MapReduce (PDF)](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf)" by J. Dean & S. Ghemawat.
*   Skip sections 4 and 7

This paper was published at the biennial Usenix Symposium on Operating Systems Design and Implementation (OSDI) in 2004, one of the premier conferences in computer systems. (OSDI alternates with the equally prestigious ACM Symposium on Operating Systems Principles (SOSP), at which appeared Eraser, the paper you already read in a previous recitation.)

After reading through Section 3, you should be able to understand and explain Figure 1 (the "Execution overview"). After reading Sections 5 and 6, you should understand the real-world performance of MapReduce. An example question that you should be able to answer: How do stragglers effect performance?

As you read, think about the following:

*   MapReduce has a constrained programming model. Are the benefits of using MapReduce worth that constraint?
*   What types of failures does MapReduce handle, and how does it handle them?

Question for Recitation
-----------------------

**Before you come to this recitation**, write up (on paper) a _brief_ answer to the following (really—we don't need more than a couple sentences for each question). 

Your answers to these questions should be **in your own words**, not direct quotations from the paper.

*   What are the performance goals of MapReduce (both the programming model + its implementation)?
*   How was MapReduce implemented at Google to meet those goals?
*   Why was MapReduce implemented in this way?

As always, there are multiple correct answers for each of these questions.