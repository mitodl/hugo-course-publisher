---
title: Variables
course_id: 18-s997-introduction-to-matlab-programming-fall-2011
menu:
  18-s997-introduction-to-matlab-programming-fall-2011:
    identifier: a56e8e068426107ca093c76e207364bd
    name: Variables
    weight: 60
    parent: 71bd52f802118491207f722087127ab2
---
_Often, a result of some calculation is needed for later use, or perhaps a complicated expression can be examined more carefully if done in parts. Both can be done by the use of "variables". Variables hold whatever result you put in them by the use of the equal sign (`=`):_

*   `x=1` _creates a variable called "x" and stores the value "1" in it. If one then types "x" in an expression_, MATLAB® _will use the value stored in "x", i.e., "1"._
*   _Similarly one can define variables to hold anything that_ MATLAB _can calculate._
*   _You can easily overwrite a variable with a new assignment:_ `x=2` _now the variable x "contains" the value "2"._
*   _One can use `x` as part of an expression:_ `x^2+x-cos(x)`
*   _Or to create a new variable:_ `y= x^2+7`
*   _A variable can be a vector (or matrix):_ `A= [1 2 3 4]`
*   _One can change just a part of_ `A`: `A(3)= 0`

_In this last example, we are getting ahead of ourselves by referring to an element of a vector. We will touch on that more later._

Note that you can "hide" important MATLAB functions and constants by defining a variable with the same name: `pi=3` will give interesting results later (to remove `clear pi`). This is usually not a good idea, so take care before using a nice name like `sum`, `exp`, or `det`, as these are all built-in functions. You can check if a variable is already in use by using the `which` command:

    >> which pi built-in (/Applications/MATLAB_R2011b.app/toolbox/MATLAB/elmat/pi)

tells us that `pi` is a built-in function, while

    >> which Pi 'Pi' not found.

tells us that `Pi` is unused. The difference is in the capitalization. MATLAB-defined functions will always use lower-case names (even if the helpfile will show these as all CAPITAL), which implies that you can always avoid collision by capitalizing the fiirst letter of your variable and functions names.

Homework 1
----------

1.  _Let_ `x=1` _and_ `y=2`. _Exchange the values of these two variables without specif­ically using '1' or '2' i.e., the exchange should work regardless of the values held by the variables. Hint: You can invent a new variable. Another Hint: Imagine you have misplaced your kids' breakfast and now Tom's Cornflakes are in Sally's bowl and Sally's CocoPuffs are in Tom's bowl. You have already poured the milk, how can you fix the problem without throwing away and starting over?_
2.  _Repeat some of the previous exercises using variables._