---
title: More on Loops
course_id: 18-s997-introduction-to-matlab-programming-fall-2011
menu:
  18-s997-introduction-to-matlab-programming-fall-2011:
    identifier: e3b06d2c1ab6413e6e033e6f881df396
    type: section
    layout: section
    name: More on Loops
    weight: 220
    parent: 1d7068b5ce8d3b56622ae79682a1dd43
---
The `for` loop is a very useful tool for doing things over and over again for a certain number of times already known _in advance_. There are two possibilities that we would like to consider:

*   What if we do not know in advance how many iterations we will need?
*   What if we would like to stop a loop before it is due to end?

An example for the first kind would be a Newton iteration that should run until the value of \\(f(x)\\) is "small" enough, for example \\(10^{-12}\\). Before actually performing the iterations we do not know how many steps it will take, so a `for` loop is not exactly the right type of loop. We could get around this limitation if we introduce a maximum number of allowed iterations and then use the (as-of-yet unknown) mechanism for terminating a loop prematurely once we find a good enough approximate root.

A `while` loop tells MATLAB® to continue iterating as long as a certain condition (which you specify) is satisfied. The syntax is:

`while` `<condition>
   <statements>` `end`

MATLAB evaluates the `<condition>` and if it is true (or a non-zero number) it performs the `<statements>`, if not, it continues after the `end`. After each time it evaluates `<statements>` MATLAB goes back and evaluates `<condition>` again, etc. Note that `<condition>` does _not_ get evaluated in the middle of evaluating `<statements>` but, rather, only before evaluating them. Here's a simple way of adding two positive integers (very silly):

    x=5;
    y=6;
    while y>0
        x=x+1;
        y=y-1;
    

Of course, this fails miserably if `y` is not a positive integer (doesn't do anything, do you understand why?)

**Exercise 16_._** _Solve the following problems using a_ `while` _loop:_

*   _Show the numbers from 1 to 10_
*   _Show the numbers from 10 to -10_
*   _Find out how many divisors 28 has (_`mod` _or_ `rem` _will be useful here)_
*   _Find out if a number is prime_
*   _Use an external_ `while` _and an internal_ `for` _loop to find the first 100 prime numbers._
*   _A_ perfect number _is a number_ \\(n\\) _whose divisors (including 1 but excluding itself) add up to_ \\(n\\) _itself. For example, 6 is a perfect number. Check if a number is perfect._
*   _Use two nested_ `while` _loops to find the first 3 perfect numbers._

**Homework 5.** _Consider the following sequence defined completely by the first element_ \\(S\_1\\)¶:

\\begin{equation} S\_{n+1}= \\begin{cases} S\_n/2 & \\text{ if } S\_n \\text{ is even}\\\\ 3 S\_n+1 & \\text{ if } S\_n \\text{ is odd} \\end{cases} \\end{equation}

_A still_|| _open question in mathematics is whether all such sequences always arrive at 1 for large enough_ \\(n\\) _(the alternatives being that some sequences may rise indefinitely, or that there may be a closed orbit that does not include 1). Compute the number of iterations it takes to arrive at_ \\(1\\) _given a starting value_ \\(s\\) _using a while loop. Since we do not know how long it will take to arrive at 1 (though you can assume that it will happen eventually) we might want to construct this sequence using a while-loop. What starting number smaller than 10,000 has the longest trajectory? What's the largest number on that trajectory?_

§This is the subject of the Collatz Conjecture.

||Despite a recent "near" solution.