---
title: More Sub-Indexing
course_id: 18-s997-introduction-to-matlab-programming-fall-2011
type: course
layout: course_section
menu:
  18-s997-introduction-to-matlab-programming-fall-2011:
    identifier: 812910f01a913bddeb41585370bf7bef
    name: More Sub-Indexing
    weight: 110
    parent: 33cb3bda3dc0895ff5de7bc1b91f60c2
---
We have seen how one can access a subset of a list by providing a list of desired positions:

    >>  A=rand(1,5)
    A =
         0.6430    0.5461    0.5027    0.0478    0.2289
    >> A([2 3 1 1])
    ans =
         0.5461    0.5027    0.6430    0.6430

There are a few more extensions of this:

It can be used to modify part of a matrix:

`%with A as before:` 
>> A(\[1 2\])=3+A(\[3 4\])
A =
     3.5027    3.0478    0.5027    0.0478    0.2289
%or even:
>> A(\[3 4\])=1
A =
     3.5027    3.0478    1.0000    1.0000    0.2289 

Additionally, this works for matrices and submatrices as well:

    >> A=magic(4)
    A =
         16      2     3     13
          5     11    10      8
          9      7     6     12
          4     14    15      1
    >> A([2 3], [1 4])
    ans =
         5     8
         9    12
    >> A(1:2,3:4)=1
    A =
         16     2     1     1
          5    11     1     1
          9     7     6    12
          4    14    15     1

The keyword `end` will evaluate to the size of the dimension of the matrix in which it is located:

    >> A=magic(4);
    >> A(end,end)
    ans =
         1
    >> A([1 end],[1 end])
    ans =
         16    13
          4     1
    >> A([1 end/2], [2, end-1])
    ans =
          2     3
         11    10
    >> A(2,1:end)
    ans =
         5    11    10     8
    >> A(1:end,3)
    ans =
          3
         10
          6
         15
    %  1:end is so useful that it has an even shorter notation, :
    >> A(:,1)
    ans =
         16
          5
          9
          4
    >> A(4,:)
    ans =
         4    14    15     1

Finally, a matrix can be accessed with a single index (as opposed to with two) and this implies a specific ordering of the elements (rows first, then columns):

    >> A(5)
    ans =
         2
    >> A(4:10)
    ans =
         4     2    11     7    14     3    10
    >> A(:)
    ans =
         16
          5
          4
          2
         11
          7
         14
          3
         10
          6
         15
         13
          8
         12
          1

**Exercise 9:** _Practice some of these methods for accessing matrix elements with the following exercises:_

*   _Create a matrix of size_ \\(N\\times N\\) _that has ones in the border and zeros inside. For example if_ \\(N=3\\) _the matrix can be created with_

    >> A=ones(3,3); A(2,2)=0
    A =
         1     1     1
         1     0     1
         1     1     1

_Make this construction depend on_ \\(N\\) _and work for any positive integer_ \\(N\\ge2\\)

*   _Create a 5x5 matrix whose rows are (1:5)_
*   _Extract the diagonal of a given matrix without using_ `diag` _(you may use_ `size`_)_
*   _Flip a given matrix horiztonally. Vertically? Do not use_ `fliplr` _or_ `flipud`
*   _Extract the anti-diagonal of a given matrix_
*   _Extract the anti-diagonal, without first flipping it (Hint: use single index access)_