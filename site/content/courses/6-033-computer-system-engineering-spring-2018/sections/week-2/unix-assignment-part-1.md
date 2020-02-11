---
title: UNIX Assignment Part 1
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: 37760e09a6c509c9e969bcefe6230e7d_unix-assignment-part-1
    weight: 90
    parent: d23c09ff9de9dc9cb98905d72c54fd66_week-2
---
Read ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)"[The UNIX Time-Sharing System (PDF)](https://people.eecs.berkeley.edu/~brewer/cs262/unix.pdf)" by Dennis Ritchie and Ken Thompson. Recitation 4 will focus on the first four sections of the paper; Recitation 5 will focus on the rest.

To help you as you read:

*   By the end of section three, you should understand the differences between ordinary files, directories, and special files.
*   By the end of section four (along with section three), you should be able to explain what happens when a user opens a file. For instance, if a user opens `/home/example.txt`, what does the UNIX file system do in order to find the file's contents? You should understand this in detail (e.g., at the i-node level). 

As you read, you may also find it helpful to think about the following:

*   What things in UNIX are named?
*   How does naming in UNIX compare to naming in DNS? How do layering and hierarchy apply (if at all)? 

Questions for Recitation
------------------------

**Before you come to this recitation**, write up (on paper) a _brief_ answer to the following (really—we don't need more than a sentence or so for each question):

*   What is UNIX?
*   How is its filesystem designed?
*   Why was it designed to work that way?

As always, there are multiple correct answers for each of these questions.