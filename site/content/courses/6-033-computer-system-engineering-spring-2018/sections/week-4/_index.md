---
title: 'Week 4: Operating Systems Part IV'
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: 0466ee2b5ebb72d0ad4f7badf3b6c645
    type: section
    layout: section
    name: 'Week 4: Operating Systems IV'
    weight: 170
---
Lecture 6: Operating Systems Structure + Virtual Machines
---------------------------------------------------------

### Lecture 6 Outline

1.  Virtual Machines
2.  Virtual Machine Monitor (VMM) Implementation
3.  Virtualizing Memory
4.  Virtualizing U/K Bit
5.  Monolithic Kernels
6.  Microkernels: Alternative to Monolithic Kernels
7.  Summary

*   [Detailed Outline]({{% getpage "courses/6-033-computer-system-engineering-spring-2018/sections/week-4/lecture-6-outline" %}})

### Lecture Slides

*   [Lecture 6 Slides: Operating Systems Structure + Virtual Machines (PDF)]({{% getpage "courses/6-033-computer-system-engineering-spring-2018/sections/week-4/MIT6_033S18lec6" %}})

### Reading

*   Book section 5.8

Recitation 6: Eraser
--------------------

*   Before reading the Eraser paper, refresh your memory on what race conditions are and the troubles that they can cause by revisiting sections 5.2.2, 5.2.3, and 5.2.4 of the textbook.
*   Read "![This resource may not render correctly in a screen reader.](/images/inacessible.gif)[Eraser: A Dynamic Data Race Detector for Multithreaded Programs (PDF)](http://www.cs.ucsd.edu/~savage/papers/Tocs97.pdf)" by S. Savage, M. Burrows, G. Nelson, P. Sobalvarro & T. Anderson
*   [Eraser Assignment]({{% getpage "courses/6-033-computer-system-engineering-spring-2018/sections/week-4/eraser-assignment" %}})

Lecture 7: Performance
----------------------

### Lecture 7 Outline

1.  Previously
2.  What's Left? Performance
3.  Technique 1: Buy New Hardware
4.  General Approach
5.  Measurement
6.  How to Relax the Bottleneck
7.  Disk Throughput
8.  Caching
9.  Concurrency/Scheduling
10.  Parallelism
11.  Summary
12.  Useful Numbers for Your Day-to-Day Lives

*   [Detailed Outline]({{% getpage "courses/6-033-computer-system-engineering-spring-2018/sections/week-4/lecture-7-outline" %}})

### Lecture Slides

*   [Lecture 7 Slides: Performance (PDF)]({{% getpage "courses/6-033-computer-system-engineering-spring-2018/sections/week-4/MIT6_033S18lec7" %}})

### Reading

*   [Chapters 17-18 of the 6.02 notes](./resolveuid/43bcc3e8ea29e5d6f9ca9dfe5f636a71)

Recitation 7: MapReduce
-----------------------

*   Read ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)"[Map Reduce: Simplified Data Processing on Large Clusters (PDF)](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf)" by J. Dean & S. Ghemawat
*   [MapReduce Assignment]({{% getpage "courses/6-033-computer-system-engineering-spring-2018/sections/week-4/mapreduce-assignment" %}})

Hands-on Assignment 3: MapReduce
--------------------------------

(Not available to OCW users.)

Tutorial 4: Writing the Critiques & Introduction to Collaboration
-----------------------------------------------------------------

As you know, in 6.033 you'll complete a series of three critiques, designed to build analytical and communication skills. The first critique required you to understand and assess a distributed system based on an analytical framework presented in the critique worksheet. In this critique, you'll use your answers to a similar worksheet to write a 2–3 page critique of the system. The third critique will take the form of a peer review of another team's Design Project Report. You'll receive instruction about each of these critiques as the semester progresses.

System Critique Assignment 2: MapReduce
---------------------------------------

*   Assigned: [Critique Assignment 2]({{% getpage "courses/6-033-computer-system-engineering-spring-2018/sections/week-4/critique-assignment-2/_index.md" %}})