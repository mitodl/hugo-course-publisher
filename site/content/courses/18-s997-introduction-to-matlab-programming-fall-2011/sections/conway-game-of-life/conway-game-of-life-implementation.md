---
title: Conway Game of Life Implementation
course_id: 18-s997-introduction-to-matlab-programming-fall-2011
type: course
layout: course_section
menu:
  18-s997-introduction-to-matlab-programming-fall-2011:
    identifier: 1d99d88a59e7ffd3c08267cb9d37d780
    name: Conway Game of Life Implementation
    weight: 280
    parent: 71d3260e1e774a0ead3b6b3411cacf8c
---
This project implements the Conway Game of Life. Idea: The world consists of a 2D grid. Each cell in the grid can be "alive" or "dead". At each step the cells are updated according to the following rules:

*   A dead cell will become alive if it has exactly 3 live neighbors (each non-boundary cell has 8 neighbors in this grid).
*   A live cell will die unless it has 2 or 3 live neighbors.

We use a matrix to hold the grid. A cell is "alive" if the relevant matrix element is 1 and "dead" if 0. Several steps are needed:

1.  Figure out how many live neighbors each cell has.
2.  Update the grid.
3.  Plot the grid.

**Homework 9.** _Implement the Conway Game of Life by iterating over all the grid cells and for each one counting the neighbors. You can either be careful not to access elements that are beyond the limits of the matrix, or make the matrix slightly larger and only iterate over the "middle" part of the matrix. Start with a small grid, as this is a very inefficient method upon which we will improve. To plot the grid use `pcolor`. Make sure you first calculate the number of neighbors and then update the grid, otherwise your update of early cells will interfere with the calculation of the later cells._

As you can easily see when trying to increase the size of the grid, this is a very inefficient method. We want to do all the tasks on a matrix-at-a-time basis, with no unneeded `for` loops.

The hardest part of the calculation is the neighbor-counting part. Here's one way to do this:

    Noff_r= [-1, -1, 0, 1, 1,  1,  0, -1];

**Exercise 20.** _It takes time and practice to understand code. Explain to a friend, or a classmate how this code works._

**Exercise 21.** _Here are various parts of the next step:_

*   _Given the matrix `count` find the logical expression that informs which elements of `A(2:end-1,2:end-1)` have 2 or 3 neighbors._
*   _Find the truth matrix specifiying the elements that need to "die" according to the_ `count.`
*   _Find the truth matrix specifiying the elements that need to be "born" according to the_ `count.`
*   _Find the elements that are alive and need to remain so._
*   _Update_ `A` _according to the rules._
*   _Show the grid using_ `pcolor`.

**Homework 10.** _(Bonus) Counting neighbors can be done as a single linear algebra multiplication of `A(:)` by a large, mostly empty matrix. Figure out how this is possible, and implement it. Since the matrix is so large, use a `sparse` matrix._

**Project 3.** _Now that we have all the parts (refer to Homework 9, Exercise 20, Exercise 21, and Homework 10), here's the project: Initialize the board using_ `rand`. _Put the counting, updating, plotting parts of the game into a loop. When busy calculating MATLAB® avoids updating the plots. To force MATLAB to update the plots, place a_ `pause(0.1)` _after_ `pcolor`.

_Once you have the basic dynamics working, there are various directions for further study:_

*   _You will find that a large grid still requires too much memory and computation time. Since the matrices_ `A` _and_ `count` _are mostly zeros, it can be beneficial to use a_ `sparse` _matrix for them. Figure out how to do it. To get a random sparse matrix use_ `sprand`.
*   _What happens if you change the rules? You can change the birth/life/death rules, or you can change the definition of neighborhood, or both. Find an alternative dynamic with nice results._
*   _A square grid is only one possibility. You could also consider a triangular or hexagonal grid. How would you implement them? Can you find nice game rules for them? How would you plot them? You cannot use_ `pcolor` _any more._