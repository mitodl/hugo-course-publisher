---
title: Log-Structured File System (LFS) Assignment
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: cbb27708c82e11a7a3f9be7fc848063b
    name: Log-Structured File System (LFS) Assignment
    weight: 430
    parent: aa415ef7575219eea10afb9dc2dbef65
---
Read ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)"[Log-Structured File Systems (PDF)](http://pages.cs.wisc.edu/~remzi/OSTEP/file-lfs.pdf)" by R. & A. Arpaci-Dusseau

The Log-Structured File System departs dramatically from the UNIX File System and proposes, instead, a file system in which all of the data is stored in _an append-only log_, that is, a flat file that can be modified only by having data added to the end of it. In Chapter 9, we also hear about logs, specifically how they help achieve _reliability_. For today's reading, the purpose of the log is to achieve good _performance_.

The primary goal of a log-structured file system is to minimize seeks by treating the disk as an infinite append-only log. For example, the file system software simply appends new files to the end of the log.

As you read, think about the following:

*   The "infinite log" is actually on a finite disk; how does that constraint affect the designers' goals?
*   Are there certain file access patterns by applications might make it hard for a log-structured file system to avoid seeks?

Questions for Recitation
------------------------

**Before you come to this recitation**, write up (on paper) a _brief_ answer to the following (really—we don't need more than a couple sentences for each question). 

Your answers to these questions should be **in your own words**, not direct quotations from the paper.

*   What is one technique that the log-structure filesystem uses to achieve higher performance? _(There is more than one technique.)_
*   How does the log-structured file system implement this technique?
*   Why does this technique, along with minimizing seeks, lead to good performance?

As always, there are multiple correct answers for each of these questions.