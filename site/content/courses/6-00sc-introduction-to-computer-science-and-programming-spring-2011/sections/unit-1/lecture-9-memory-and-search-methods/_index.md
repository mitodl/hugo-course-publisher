---
title: Memory and Search Methods
course_id: 6-00sc-introduction-to-computer-science-and-programming-spring-2011
menu:
  6-00sc-introduction-to-computer-science-and-programming-spring-2011:
    identifier: 518bf74ec414e8ecf4d555616396f6d0
    name: Memory and Search Methods
    weight: 130
    parent: 975ad7bfdd9c4ffe26b6710fa718d5e6
type: courses
layout: videogallery
---
« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-8-efficiency-and-order-of-growth/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/quiz-i/_index.md" %}}) »

Session Overview
----------------

| ![Graphic representation of sorting a list for efficient search.](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/cd3922cc19268e6a89d04cd94670fbaa_ses-09.jpg) | {{< br >}}{{< br >}}This lecture discusses how indirection is used to provide an efficient implementation of Python lists and other data structures. It also presents and analyzes the efficiency of selection and merge sort.{{< br >}}{{< br >}} 

Session Activities
------------------

### Lecture Videos

*   {{< youtube 6wTuOMgTrU4 >}}

> ### About this Video
> 
> Topics covered: Memory, storage, indirection, sorting.
> 
> ### Resources
> 
> *   [Lecture code handout (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-9-memory-and-search-methods/MIT6_00SCS11_lec09" %}})
> *   [Lecture code (PY)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/022119d57a47311f471507f58666d667_lec09.py)

Check Yourself
--------------

What is indirection (in computing)?

› _View/hide answer_

Indirection is the ability to access something using a name or reference instead of the value itself.

We know that a linear search works on all lists and is O(len(L)). Can we sort a list in sub-linear time?

› _View/hide answer_

No, because we can't sort a list without looking at each element at least once.

Can we even do it in linear time?

› _View/hide answer_

The answer is probably, no. But we can do it in O(n log n), where n is the length of the list.

Further Study
-------------

These optional resources are provided for students that wish to explore this topic more fully.

### Readings

*   [8.7. Sets—Unordered collections of unique elements](https://web.archive.org/web/20120410204204/http://docs.python.org/library/sets.html). Python Standard Library.

### Related Lectures

*   [_6.01SC Introduction to Electrical Engineering and Computer Science I_](./resolveuid/57f8c4ea1c782702c63200a6a9810fd5).
    *   [Search Algorithms](./resolveuid/497582d868ca82e77ef76b997e187b13)
    *   [Optimizing a search](./resolveuid/da41172cd83b25719eaecaa5c1bcde32)
*   [_6.006 Introduction to Algorithms_](./resolveuid/9b977a8843b628dcdf25c62dd8c455e3). 6.006 lectures assume a greater level of mathematical sophistication than does 6.00SC. Read the lecture notes on:
    *   Binary search trees
    *   Sorting
    *   Searching

« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-8-efficiency-and-order-of-growth/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/quiz-i/_index.md" %}}) »