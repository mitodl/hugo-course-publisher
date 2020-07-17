---
title: Hashing and Classes
course_id: 6-00sc-introduction-to-computer-science-and-programming-spring-2011
menu:
  6-00sc-introduction-to-computer-science-and-programming-spring-2011:
    identifier: 174105568f302907b32746f2da54236f
    name: Hashing and Classes
    weight: 160
    parent: ddc5db7a5c64e3bda565b36f4ed76287
type: courses
layout: videogallery
---
« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-2/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-2/lecture-11-oop-and-inheritance/_index.md" %}}) »

Session Overview
----------------

| ![Photograph of a box of air mail envelopes.](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/103553ac9c6657230fa23c613a1fb04a_ses-10.jpg) | {{< br >}}{{< br >}}This lecture starts by showing how hashing can be used to achieve near constant time lookups and the concept of classes as understood by a computer. It then introduces exceptions.{{< br >}}{{< br >}}_Image courtesy of [donovanbeeson](http://www.flickr.com/photos/donovan_beeson/5792363110/) on Flickr._{{< br >}}{{< br >}} 

Session Activities
------------------

### Lecture Videos

*   {{< youtube pjLbxB9TXJs >}}

> ### About this Video
> 
> Topics covered: Hashing, bucket, collision, linear rehash, exceptions, classes, modules, built-in classes.
> 
> ### Resources
> 
> *   [Lecture code handout (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-2/lecture-10-hashing-and-classes/MIT6_00SCS11_lec10" %}})
> *   [Lecture code (PY)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/5d63ea15e55dd11c686aaa83356206b0_lec10.py)

Check Yourself
--------------

What does hashing do?

› _View/hide answer_

It converts the object to be hashed into an int that lies within a pre-defined range.

What is a bucket?

› _View/hide answer_

A list of items that have the same hash value.

What are try blocks for?

› _View/hide answer_

Try blocks are used when a piece of code may not work in all cases or for all inputs. It consists of a try statement and an except statement. First the try statement is executed; if it throws an exception, the program uses the except statement instead of terminating the program.

What does polymorphic mean?

› _View/hide answer_

Works with a variety of different types.

What is a module?

› _View/hide answer_

A collection of related functions.

What is an object?

› _View/hide answer_

A collection of data and functions that operate on that data.

Problem Sets
------------

### Problem Set 4: The Caesar Cipher (Due)

This assignment will deal with a well-known (though not very secure) encryption method called the Caesar cipher. In this problem set you will need to devise your own algorithms and will practice using recursion to solve a non-trivial problem.

*   [Instructions (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-2/lecture-10-hashing-and-classes/MIT6_00SCS11_ps4" %}})
*   [Pseudocode (PDF)]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-2/lecture-10-hashing-and-classes/MIT6_00SCS11_ps4-pseudo" %}})
*   [Code Files (ZIP)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/52f127bc633a8712af2e00487b1358ba_ps4.zip) (This ZIP file contains: 1 .py file and 3 .txt files.)
*   [Solutions (ZIP)](https://open-learning-course-data-ci.s3.amazonaws.com/6-00sc-introduction-to-computer-science-and-programming-spring-2011/ba96a4843a04b800654367757fe46d8c_ps4_sol.zip) (This ZIP file contains: 2 .py files.)

### Problem Set 5 (Assigned)

Problem set 5 is assigned in this session.  The instructions and solutions can be found on the session page where it is due, Lecture 12 [Introduction to Simulation and Random Walks]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-2/lecture-12-introduction-to-simulation-and-random-walks/_index.md" %}}).

Further Study
-------------

These optional resources are provided for students that wish to explore this topic more fully.

### Readings

After watching the lecture, you may want to read some of the following resources:

*   [12\. Classes and objects](http://www.greenteapress.com/thinkpython/thinkCSpy/html/chap12.html). How to Think Like a Computer Scientist.

### Related Lectures

*   [_6.006 Introduction to Algorithms_](./resolveuid/9b977a8843b628dcdf25c62dd8c455e3). 6.006 lectures assume a greater level of mathematical sophistication than does 6.00SC. Read the lecture notes on:
    *   Hashing I: Chaining, hash functions
    *   Hashing II: Table doubling, Karp-Rabin
    *   Hashing III: Open addressing

« [Previous]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-2/_index.md" %}}) | [Next]({{% getpage "courses/6-00sc-introduction-to-computer-science-and-programming-spring-2011/sections/unit-2/lecture-11-oop-and-inheritance/_index.md" %}}) »