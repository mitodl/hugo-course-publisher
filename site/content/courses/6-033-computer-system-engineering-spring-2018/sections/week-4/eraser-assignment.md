---
title: Eraser Assignment
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: 85894c2022fb054e580a61a43ed2648d_eraser-assignment
    weight: 90
---
Before reading the Eraser paper, refresh your memory on what race conditions are and the troubles that they can cause by revisiting sections 5.2.2, 5.2.3, and 5.2.4 of the textbook.

Then, read "![This resource may not render correctly in a screen reader.](/images/inacessible.gif)[Eraser: A Dynamic Data Race Detector for Multithreaded Programs (PDF")](http://www.cs.ucsd.edu/~savage/papers/Tocs97.pdf) by S. Savage, M. Burrows, G. Nelson, P. Sobalvarro & T. Anderson.

To help you as you read:

*   After Section 2, you should understand the lockset algorithm. For instance, you should know under what condition Eraser signals a data race, and why that condition was chosen.
*   After Section 3, you should understand Eraser's implementation details. For instance, you should know under what conditions it reports false positives.
*   Section 4 details the authors' evaluation of and experience with Eraser. This section is useful to convince yourself that Eraser is (or isn't!) useful, that it performs (or doesn't perform) well, etc.

As you read, think about the following:

*   Why can't the lockset algorithm catch every race condition?
*   Would you use Eraser? If so, in what situations?

Question for Recitation
-----------------------

**Before you come to this recitation**, write up (on paper) a _brief_ answer to the following (really—we don't need more than a couple sentences for each question).  

Your answers to these questions should be **in your own words**, not direct quotations from the paper.

*   What are the goals of Eraser?
*   How was it designed to meet those goals?
*   Why do we need a tool like Eraser? (Or why do the authors believe that we need such a tool?)

As always, there are multiple correct answers for each of these questions.