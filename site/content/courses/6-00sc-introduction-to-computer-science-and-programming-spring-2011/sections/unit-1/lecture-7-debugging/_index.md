---
title: Debugging
course_id: 6-00sc-introduction-to-computer-science-and-programming-spring-2011
type: course
layout: videogallery
menu:
  6-00sc-introduction-to-computer-science-and-programming-spring-2011:
    identifier: ebde421e0808fd2831950f1a9a69cfb3
    name: Debugging
    weight: 110
    parent: 975ad7bfdd9c4ffe26b6710fa718d5e6
---
« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-6-recursion/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-8-efficiency-and-order-of-growth/_index.md" %}}) »

Session Overview
----------------

| ![Photograph of a moth taped into a lab notebook.](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/3a7a598d97e417586fed83ef1189049b_ses-07.jpg) | {{< br >}}{{< br >}}This lecture starts with a brief explanation of why floating point numbers are only an approximation of the real numbers. Most of the lecture is about a systematic approach to debugging.{{< br >}}{{< br >}}_Image courtesy of the [Naval Surface Warfare Center](https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Dahlgren/), Dahlgren, VA._{{< br >}}{{< br >}} 

Session Activities
------------------

### Lecture Videos

*   {{< youtube 5gt2WDBl8-0 >}}

> ### About this Video
> 
> Topics covered: Binary, float, floating point, approximations, debugging, runtime error.
> 
> ### Resources
> 
> *   [Lecture code handout (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-7-debugging/MIT6_00SCS11_lec07" %}})
> *   [Lecture code (PY)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/cecd2a55c17b36434831bcae4a7b0a05_lec07.py)
> *   [Lecture slides (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-7-debugging/MIT6_00SCS11_lec07_slides" %}})

### Recitation Videos

*   {{< youtube 7BpomdjZ\_Os >}}

> _About this Video_
> 
> Topics covered: Recursion, divide and conquer, base cases, iterative vs. recursive algorithms, Fibonacci numbers example, recursive bisection search, optional and default parameters, pseudo code, introduction to debugging, test cases and edge cases, and floating points.

Check Yourself
--------------

Why do computers use binary representations?

› _View/hide answer_

It's easy to build hardware with two states, on and off.

Why shouldn't we test for equality with floats?

› _View/hide answer_

Because computers use binary, floats are actually very close approximations of the actual values. Testing for equality can result in an unexpected error, so it's better to determine whether two numbers are close enough for our purposes rather than precisely equal.

When debugging, how can you ensure that the values in your program are the ones you think they are?

› _View/hide answer_

Use print statements.

Problem Sets
------------

### Problem Set 3: Wordgames (Due)

In this problem set, you'll implement _two_ versions of the 6.00 wordgame! Don't be intimidated by the length of this problem set. It's a lot of reading, but it is very doable.

Let's begin by describing the 6.00 wordgame: This game is a lot like Scrabble or Text Twist, if you've played those. Letters are dealt to players, who then construct one or more words out of their letters. Each **valid** word receives a score, based on the length of the word and the letters in that word.

*   [Instructions (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-7-debugging/MIT6_00SCS11_ps3" %}})
*   [Code files (ZIP)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/032952066efad9ea5528acaeacb4bf4a_ps3.zip) (This ZIP file contains: 1 .txt file and 4 .py files.)
*   [Solutions (ZIP)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/dd829e0616f7e3d934ee93e562b23da3_ps3_sol.zip) (This ZIP file contains: 2 .py files.)

### Problem Set 4 (Assigned)

Problem set 4 is assigned in this session. The instructions and solutions can be found on the session page where it is due, Lecture 10 [Hashing and Classes]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-2/lecture-10-hashing-and-classes/_index.md" %}}).

Further Study
-------------

These optional resources are provided for students that wish to explore this topic more fully.

### Readings

After watching the lecture, you may want to read some of the following resources:

*   [8\. Errors and Exceptions](http://docs.python.org/tutorial/errors.html). Python Tutorial.
*   [Appendix A: Debugging](http://www.greenteapress.com/thinkpython/thinkCSpy/html/app01.html). How to Think Like a Computer Scientist.

« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-6-recursion/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-1/lecture-8-efficiency-and-order-of-growth/_index.md" %}}) »