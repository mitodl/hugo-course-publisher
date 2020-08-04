---
title: Command Prompt and Expressions
course_id: 18-s997-introduction-to-matlab-programming-fall-2011
type: course
layout: course_section
menu:
  18-s997-introduction-to-matlab-programming-fall-2011:
    identifier: a49b4dade8870239342874b2309ddbed
    name: Command Prompt and Expressions
    weight: 40
    parent: 71bd52f802118491207f722087127ab2
---
At its heart, MATLAB® is a big calculator. To calculate something simply type it in at the "command prompt" and press Enter. Thus, to calculate 1 + 1 we type it in and press Enter. The screen should show:

`>> 1+1
ans =
    2` 

meaning that the answer is 2.

**Exercise 1.** _Run MATLAB, find the command window and the blinking cursor. Find the answer to the following arithmetic problems:_

*   \\(1234+4321=?\\)
*   \\(104-765=?\\)
*   \\(47\*33=?\\)
*   \\(3^4=?\\) _(The operator for "power" is the circumflex ^, usually found by pressing_ Shift ⇑ 6
*   _How far is_ \\(19^2\\) _from its approximation_ \\(20^2-2\*20\\) _(Remember that_ \\((a-b)^2=a^2-2ab+b^2\\), _thus the answer should be_ ±1_)_
*   _Find an approximation to_ 1/73
*   _Find an approximation to_ \\(\\sqrt{31}\\) _(while you can of course use the fact that \\(\\sqrt{x}=x^{0.5}\\), you can also "look for" a dedicated function square root by learning how to use the_ `lookfor` _command....)_
*   _If you get 5% interest-rate (yearly) on a loan, compounded monthly, and you start with $1000, how much money will you have after 20 years? (don't be confused by an answer of the form_ `2.7e3` _which simply means_ \\(2.7\\times10^3\\)_)_
*   _If two sides of a right triangle have lengths 31 and 45, what is the length of the hypotenuse?_

You may have noticed in the exercises that the answer is only given with 5 digits of accuracy (at most). For example, we can ask MATLAB for the value of \\(\\pi\\) and get:

`>> pi
ans =
    3.1416`

_Internally_, MATLAB keeps a 16 (more-or-less) digit version of the number it shows us, but to keep things orderly, it only displays the answer rounded to show 5 digits (by default). We can change this by issuing a command:

`>> format long
>> pi 
ans =
    3.141592653589793`

We can see this, by subtracting part of \\(\\pi\\) from `ans`, which always holds the full, unrounded answer to the previous, unassigned expression:

`>> format short
>> pi 
ans =
    3.1416
>> ans-3.1415
ans =
    9.2654e-05
>> ans - 9.2653e-5
ans =
    5.8979e-10`

**Exercise 2.** _Remember the cosine rule?_ \\(c^2=a^2+b^2-2a b\\, \\cos(\\theta)\\). _Find the length of the hypotenuse of a triangle with angle 30ο, and sides with lengths 10 and 20. The_ MATLAB _trigono­metric functions_ (cos, sin, tan) _use radians, so you will need to convert using \\(\\pi\\)._

For guided practice and further exploration of how to use the command prompt, watch [Video Lecture 2: The Command Prompt](/courses/mathematics/18-s997-introduction-to-matlab-programming-fall-2011/library/videos/lecture-2-the-command-prompt).