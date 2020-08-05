---
title: Warm-up
course_id: 18-s997-introduction-to-matlab-programming-fall-2011
type: course
layout: course_section
menu:
  18-s997-introduction-to-matlab-programming-fall-2011:
    identifier: 63b7f21b14f978802f147e5eef949b23
    name: Warm-up
    weight: 270
    parent: 71d3260e1e774a0ead3b6b3411cacf8c
---
In all the following questions you are expected to have an "elegant" solution, not a brute force one. No `if` statements or loops. Unless where specifically noted, no MATLAB® functions are to be used.

1.  Find out what the command `diag` does. (We already learned about `ones`, `zeros`, and `sum`, but if you are unsure, look them up as well.) Using `sum` and `diag`, find the sum of the diagonal of a matrix. (For example, `A` in the next question.)
2.  Let `A=magic(6)`. What expression will give you the \\(2\\times2\\) submatrix of elements in the upper left corner? How about lower right? Can you write an expression that will also work for any other matrix `A`, for example `A=magic(10)`?
3.  Find the sub-matrix of elements of `A` whose both coordinates are odd.
4.  With no MATLAB functions, write the matrix `A` "flipped" right to left. Up to down.
5.  Get the sum of the "anti diagonal" of the magic square by a simple expression using `sum`, `diag` and the colon (`:`) notation.
6.  Let `x = [2 5 1 6]`. Add 3 to just the odd-positioned elements (resulting in a 2-vector). Now write the expression that adds 3 to the odd-positioned elements and puts the result in the even positions of the original `x` vector.
7.  Let `y = [4 2 1 3]`. Think of **y** as a specific reordering (permutation) of the numbers \\(\\{1, 2, 3, 4\\}\\). "4 goes to 1, 2 remains, 1 goes to 3 and 3 goes to 4." Use `y` to reorder the elements of `x` in the same manner. (The result should be `[6 5 2 1]`.)
8.  What is the vector that corresponds to the permutation of n elements that takes every element one position to the left, except for the first element, which goes to the end?
9.  (Bonus) The inverse of a permutation `y` is a permutation `z` that, when combined with `y` (in either order) gives the original (non-permuted) elements. Given a permutation vector (as `y` is in the previous question), find the vector `z` which corresponds to the inverse of `y`.
10.  Experiment with assignments such as `b(1:3,1:2:4)=1`. Make a "checkerboard" matrix: an 8-by-8 matrix whose cell \\(a(i,j)\\) equals 1 if \\(i+j\\) is odd and 0 if it is even. (Of course, do not use loops or `if` statements!) If you like, use the function `spy` or `pcolor` to "see" the checkerboard that you created. (Tricky. Do it in two commands, not one. If you want to do this with one command you may use `ones`. Also possible using `mod` and `reshape`.)
11.  Recall that a matrix (such as `A`) can also be referenced using a single coordinate: `A(3)`. Remind yourself how this coordinate is related to the original matrix.
12.  Use the single index reference to a matrix in order to extract the diagonal of a 5-by-5 matrix. (Do _not_ use the function `diag`.) Do the same to extract the "anti-diagonal".