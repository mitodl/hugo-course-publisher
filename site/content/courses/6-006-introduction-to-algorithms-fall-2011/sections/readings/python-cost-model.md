---
title: Python Cost Model
course_id: 6-006-introduction-to-algorithms-fall-2011
menu:
  6-006-introduction-to-algorithms-fall-2011:
    identifier: 2e91de4c23a9f323866d265121e71f07
    type: section
    layout: section
    name: Python Cost Model
    weight: 50
    parent: aa632f8351fe4fa58aaf1513de806253
---
tt { font-size: 1.3em; } div.maintabletemplate table caption { font-size: 1em; font-family: Verdana, Arial, Helvetica, sans-serif; } div pre { margin: 10px 0px 10px 0px; padding: 15px 0px 15px 15px; background-color: #eeeeee; border: thin dotted #33CCFF; font-size: 1.1em; }

Python is a high-level programming language, with many powerful primitives. Analyzing the running time of a Python program requires an understanding of the cost of the various Python primitives.

For example, in Python, you can write:

    L = L1 + L2

where L, L1, and L2 are lists; the given statement computes L as the concatenation of the two input lists L1 and L2. The running time of this statement will depend on the lengths of lists L1 and L2. (The running time is more-or-less proportional to the sum of those two lengths.)

Our goal in this section is to review various Python primitive operations, and to determine bounds and/or estimates on their running times. Our approach will involve both a review of the relevant Python implementation code, and also some experimentation (analysis of actual running times and interpolating a nice curve through the resulting data points).

Python Running Time Experiments and Discussion
----------------------------------------------

The running times for various-sized inputs were measured, and then a least-squares fit was used to find the coefficient for the high-order term in the running time. (Which term is high-order was determined by some experimentation; it could have been automated...)

The least-squares fit was designed to minimize the sum of squares of relative error, using scipy.optimize.leastsq.

(Earlier version of this program worked with more than the high-order term; they also found coefficients for lower-order terms. But the interpolation routines tended to be poor at distinguishing _n_ and _n_ lg _n_. Also, it was judged to be more interesting to work with relative error than with absolute error. Finally, it seemed that looking at only the high-order term, and studying only the relative error, seemed simplest.)

The machine used was an IBM Thinkpad T43p with a 1.86GHz Pentium M processor and 1.5GB RAM.

*   [Timing code (PY)](https://open-learning-course-data-ci.s3.amazonaws.com/6-006-introduction-to-algorithms-fall-2011/e989d4e7b6bca1b747a51e1a14d07437_timing.py)
*   [Sample output (TXT)](./resolveuid/5b1e2569373c58a4e6bd0dd1112a9ba7)

\[This output may have results somewhat different than in the charts below, due to random run-time variations...\]

| **Convert string to integer** | int(s) | 84 \* (n/1000)^2 microseconds | n <= 8000 | 6% rms error |
| **Convert integer to string** | str(x) | 75 \* (n/1000)^2 microseconds | n <= 8000 | 3% rms error |
| **Convert integer to hex** | "%x"%x | 2.7 \* (n/1000) microseconds | n <= 64000 | 19% rms error |
| **Addition (or Subtraction)** | x+y | 0.75 \* (n/1000) microseconds | n <= 512000 | 8% rms error |
| **Multiplication** | x\*y | 13.73 \* (n/1000)^1.585 microseconds | n <= 64000 | 10% rms error |
| **Division (or Remainder)** | w/x | 47 \* (n/1000)^2 microseconds | n <= 32000 | 6% rms error |
| **Modular Exponentiation** | pow(x,y,z) | 60000 \* (n/1000)^3 microseconds | n <= 4000 | 8% rms error |
| **n-th power of two** | 2\*\*n | 0.06 microseconds | n <= 512000 | 10% rms error 

It is perhaps curious that multiplication is implemented using Karatsuba's algorithm, giving an Θ(_n_lg 3) running time, while division uses an Θ(_n_2) algorithm.

| **Extract a byte from a string** | s\[i\] | 0.13 microseconds | n <= 512000 | 29% rms error |
| **Concatenate** | s+t | 1 \* (n/1000) microseconds | n <= 256000 | 19% rms error |
| **Extract string of length n/2** | s\[0:n/2\] | 0.3 \* (n/1000) microseconds | n <= 256000 | 28% rms error |
| **Translate a string** | s.translate(s,T) | 3.2 \* (n/1000) microseconds | n <= 256000 | 11% rms error 

| **Create an empty list** | list() | 0.40 microseconds | (n=1) | .5% rms error |
| **Access** | L\[i\] | 0.10 microseconds | n <= 640000 | 3% rms error |
| **Append** | L.append(0) | 0.24 microseconds | n <= 640000 | 3% rms error |
| **Pop** | L.pop() | 0.25 microseconds | n <= 64000 | 0.5% rms error |
| **Concatenate** | L+M | 22 \* (n/1000) microseconds | n <= 64000 | 3% rms error |
| **Slice extraction** | L\[0:n/2\] | 5.4 \* (n/1000) microseconds | n <= 64000 | 4% rms error |
| **Copy** | L\[:\] | 11.5 \* (n/1000) microseconds | n <= 64000 | 10% rms error |
| **Slice assignment** | L\[0:n/2\] = P | 11 \* (n/1000) microseconds | n <= 64000 | 4% rms error |
| **Delete first** | del L\[0\] | 1.7 \* (n/1000) microseconds | n <= 64000 | 4% rms error |
| **Reverse** | L.reverse() | 1.3 \* (n/1000) microseconds | n <= 64000 | 10% rms error |
| **Sort** | L.sort() | 0.0039 \* n lg(n) microseconds | n <= 64000 | 12% rms error 

The **first** time one appends to a list, there is additional cost as the list is copied over and extra space, about 1/8 of the list size, is added to the end. Whenever the extra space is used up, the list is re-allocated into a new array with about 1.125 the length of the previous version.

| **Create an empty dictionary** | dict() | 0.36 microseconds | (n=1) | 0% rms error |
| **Access** | D\[i\] | 0.12 microseconds | n <= 64000 | 3% rms error |
| **Copy** | D.copy() | 57 \* (n/1000) microseconds | n <= 64000 | 27% rms error |
| **List items** | D.items() | 0.0096 \* n lg(n) microseconds | n <= 64000 | 14% rms error 

What should the right high-order term be for copy and list items? It seems these should be linear, but the data for both looks somewhat super-linear. We've modelled copy here as linear and list items as n lg(n), but these formulae need further work and exploration.