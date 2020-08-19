---
title: Warm-up
course_id: 18-s997-introduction-to-matlab-programming-fall-2011
type: course
layout: course_section
menu:
  18-s997-introduction-to-matlab-programming-fall-2011:
    identifier: cf798304e74231c25fa324cb0ee3ab0e
    name: Warm-up
    weight: 130
    parent: 81a610a835a9454d733fecd98304058c
---
*   What do `1:10`, `1:2:10` `100:-25:0` do? Think, then check.
*   Let `x = [2 5 1 6]`. What will `x(3)`, `x([1 2])`, `x([1:end])`, `x(end:-1:1)`, `x(:)`, `x([1 1 1 1])` do? Think, guess, discuss with a friend, and finally, verify.
*   When creating a matrix, a space or a comma (`,`) are the separator between _columns_, while a semicolon (`;`) separate between _rows_. Figure out how to create the following matrices: \\(\\begin{pmatrix} 1& 2& 3\\\\ 4&5&6 \\end{pmatrix}\\), \\(\\begin{pmatrix} 1& 0 &1 \\\\ 0& 1& 0 \\end{pmatrix}\\)
*   You can _nest_ matrix construction so that `[ 6 (1:5) 7 ]` makes sense (what does it result in?) Similarly you can create a matrix by stacking column vectors next to each other (using a space or a comma) or row vectors on top of each other (using a semicolon). Create the following matrix using a relatively short line of code:\\begin{equation} \\begin{pmatrix} 1 &2&3&4&5&6&7&8&9&10\\\\ 1&4&9&16&25&36&49&64&81&100\\\\ 2&4&8&16&32&64&128&256&512&1024 \\end{pmatrix} \\end{equation}
    
    Can you now easily make the first list go up to 100 (and the others follow suit)? If not, solve the problem again so that you can do it.
    

The `plot` command plots a list of points given as two vectors, \\(X\\) and \\(Y\\) of their x- and y- coordinates, respectively. The default behaviour is that no mark is placed on the points, and the points are joined by a straight line. So if we want to plot a parabola \\(y=x^2\\) for \\(x\\in\[-1,1\]\\) we can write:

| {{< br >}}{{< br >}}```{{< br >}}x=-1:.1:1;{{< br >}}y=x.^2;{{< br >}}plot(x,y){{< br >}}```{{< br >}}{{< br >}} | {{< br >}}{{< br >}}![Graph of an upward-facing parabola in blue.](https://open-learning-course-data-ci.s3.amazonaws.com/18-s997-introduction-to-matlab-programming-fall-2011/af01e8dbe2e8c5ff1ba72e8492b491f1_18-S997f11_unit3_img1.jpg){{< br >}}{{< br >}}Graphing a simple function, y=x^2.{{< br >}}{{< br >}} 

We could make that line green by adding a third input:

| {{< br >}}{{< br >}}```{{< br >}}x=-1:.1:1;{{< br >}}y=x.^2;{{< br >}}plot(x,y,'g.'){{< br >}}```{{< br >}}{{< br >}} | {{< br >}}{{< br >}}![Graph of an upward-facing parabola with discontinuous green line markers.](https://open-learning-course-data-ci.s3.amazonaws.com/18-s997-introduction-to-matlab-programming-fall-2011/a5af8ec44234d0ae2903a33a90cf1246_18-S997f11_unit3_img2.jpg){{< br >}}{{< br >}}Stylizing the graphs with colors and line markers.{{< br >}}{{< br >}} 

The resulting plot need not be a function in the mathematical sense of the word:

| {{< br >}}{{< br >}}```{{< br >}}t=-1:.01:2*pi;{{< br >}}x=sin(5*t);{{< br >}}y=cos(3*t);{{< br >}}plot(x,y,'r'){{< br >}}```{{< br >}}{{< br >}} | {{< br >}}{{< br >}}![Graph of a Lissajous figure in red.](https://open-learning-course-data-ci.s3.amazonaws.com/18-s997-introduction-to-matlab-programming-fall-2011/8cb777cdaee2a340c54359f60c3f387a_18-S997f11_unit3_img3.jpg){{< br >}}{{< br >}}Graphing a non-function in MATLAB®.{{< br >}}{{< br >}} 

**Exercise 10.** _Read the helpfile on_ `plot` _by typing_ `help plot` _and figure out how to do the following:_

*   _Plot_ only _the points and not the lines_
*   _Plot the parabola sideways (the result is not a function)_
*   _Plot using a red, dashed line and stars at each point_
*   _Make the plot with less points so that you can see that the lines between the points are straight_
*   _Plot the function \\(\\sin x\\) vs. \\(x\\), for \\(x\\in \[0,6\\pi\]\\)_
*   _Figure out how to plot two functions with the same_ `plot` _command, and plot \\(\\sin x\\) and \\(\\cos x\\) vs. \\(x\\)._