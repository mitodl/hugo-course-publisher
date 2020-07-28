---
title: Recursion
course_id: 6-00sc-introduction-to-computer-science-and-programming-spring-2011
menu:
  6-00sc-introduction-to-computer-science-and-programming-spring-2011:
    identifier: 99fb7e49022e2ef590b8a591159332ed
    type: section
    layout: section
    name: Recursion
    weight: 100
    parent: 975ad7bfdd9c4ffe26b6710fa718d5e6
type: courses
layout: videogallery
---
« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-5-objects-in-python/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-7-debugging/_index.md" %}}) »

Session Overview
----------------

| ![Photograph of a rabbit.](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/a036c17d569bbbf738e636b64f1457d3_ses-06.jpg) | {{< br >}}{{< br >}}This lecture finishes the discussion of dictionaries, then introduces inductive reasoning and recursion. Examples include generating the Fibonacci sequence and solving the Towers of Hanoi problem.{{< br >}}{{< br >}}_Image courtesy of [Stephen & Claire Farnsworth](http://www.flickr.com/photos/the_farnsworths/5808550435/in/photostream/) on Flickr._{{< br >}}{{< br >}} 

Session Activities
------------------

### Lecture Videos

*   {{< youtube WbWb0u8bJrU >}}

> ### About this Video
> 
> Topics covered: Dictionaries, modular abstraction, divide and conquer, recursion, tower of Hanoi, base case, Fibonacci sequence.
> 
> ### Resources
> 
> *   [Lecture code handout (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-6-recursion/MIT6_00SCS11_lec06" %}})
> *   [Lecture code (PY)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/47eb608478d8fb1ed999357c3b2fec8c_lec06.py)

### Recitation Videos

*   {{< youtube Fixc8hVo\_cY >}}

> ### About this Video
> 
> Topics covered: Tuples, lists, iteration, list elements, sorting lists, mutability, keys, dictionaries, chain method, recursion, base case, Tower of Hanoi.

Check Yourself
--------------

What is recursion?

› _View/hide answer_

Recursion, or "divide-and-conquer", allows us to define a function that calls itself to solve a problem by breaking it into simpler cases.

What is a recursive case?

› _View/hide answer_

A recursive case calls the recursive procedure on a simpler case (usually a part of the input).

What is a base case?

› _View/hide answer_

A base case is necessary in recursion; it determines when the procedure returns a value (or terminates), rather than continuing the recursive process.

Problem Sets
------------

### Problem Set 2: Successive Approximation and a Wordgame (Due)

Successive approximation is a problem-solving method where you try to guess the right answer to a problem and then check your guess. If the guess is good enough, you're done. Otherwise, you keep improving your guess in small increments and checking it, getting closer and closer to the right answer, until you determine that the guess is good enough. For the first 3 problems of this problem set, we will look at Newton's method, which uses successive approximation to find the roots of a function.

Secondly, we will have some fun with Python, and get some practice using strings and string operations. We would like you to implement the word game Hangman as a 1-player game against the computer.

*   [Instructions (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-6-recursion/MIT6_00SCS11_ps2" %}})
*   [Code Files (ZIP)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/4bafc5d1520e9d885e18766b1c4ef47d_ps2.zip) (This ZIP file contains: 1 .txt file and 2 .py files.)
*   [Solutions (ZIP)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/b390637671a60cd66e95644963b523fd_ps2_sol.zip) (This ZIP file contains: 3 .py files.)

### Problem Set 3 (Assigned)

Problem set 3 is assigned in this session. The instructions and solutions can be found on the session page where it is due, Lecture 7 [Debugging]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-7-debugging/_index.md" %}}).

Further Study
-------------

These optional resources are provided for students that wish to explore this topic more fully.

### Readings

After watching the lecture, you may want to read some of the following resources:

*   [4.9 Recursion](http://www.greenteapress.com/thinkpython/thinkCSpy/html/chap04.html). How to Think Like a Computer Scientist.
*   [Recursion](http://www.slideshare.net/dtinth/introduction-to-recursion-python). An Introduction to Python.
*   [Comparing Recursion and Looping](http://troll.cs.ua.edu/ACP-PY/index_18.html). An Introduction to Python.

### Related Lectures

*   [_6.006 Introduction to Algorithms_](./resolveuid/9b977a8843b628dcdf25c62dd8c455e3). 6.006 lectures assume a greater level of mathematical sophistication than does 6.00SC. Read the lecture notes on:
    *   Dynamic programming I: memoization, Fibonacci, Crazy Eights, guessing

« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-5-objects-in-python/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-7-debugging/_index.md" %}}) »