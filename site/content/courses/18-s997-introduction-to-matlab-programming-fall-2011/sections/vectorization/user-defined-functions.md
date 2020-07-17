---
title: User-Defined Functions
course_id: 18-s997-introduction-to-matlab-programming-fall-2011
menu:
  18-s997-introduction-to-matlab-programming-fall-2011:
    identifier: 38dcb8d2635f7663efc8af4d44a9d9ea
    name: User-Defined Functions
    weight: 180
    parent: 18645230e50f3945e34d99f24f40ca3a
---
We have just seen—above, using the \\(@(x)\\) notation—an example of how to create simple user-defined functions. This notation can only have one line of code, and oftentimes that can be insufficient for the task at hand. We have also seen scripts files, in which we can put many lines of code and then "call" the script to have MATLAB® execute the lines in that script. So what's a function and how is it different from a script?

A function is also a file with lines of code, but there are several distinctions between a function and a script:

| SCRIPT | FUNCTION |
| --- | --- |
| Interacts with variables from the caller | Has very restricted interaction with the caller |
| Cannot accept input | Can accept input |
| Cannot return a value | Can return a value |
| Can overwrite variables by mistake | No need to worry, variables are "local" |
| Cannot have "sub-functions" in file | May define more functions in same file 

When we "call" a function we usually give it input and expect output. For example:

    
    >>a=sin(pi/2)
    a =
         1

We gave the input `pi/2` to the function `sin` and assigned the output to the variable `a`. The function `sin` is not written in MATLAB code, so we cannot see how it is implemented, though on occasion it can be useful to see how some MATLAB functions are implemented. For example the function `randperm(n)` returns a random ordering of the numbers `1:n`. It is implemented in MATLAB and can be viewed by writting `open randperm` (your copy of MATLAB might have a different implementation, but here's mine):

`function` `p = randperm(n)
%  RANDPERM Random permutation.
%    RANDPERM(n) is a random permutation of the integers from 1 to n.
%    For example, RANDPERM(6) might be [2 4 5 6 1 3].
%
%    Note that RANDPERM calls RAND and therefore changes the state of the
%    random number generator that underlies RAND, RANDI, and RANDN.  Control
%    that shared generator using RNG.
%
%    See also RNG, PERMUTE.

%    Copyright 1984-2010 The MathWorks, Inc.
%    $Revision: 1311 $  $Date: 2012-06-18 14:27:32 -0400 (Mon, 18 Jun 2012) $

[~,p] = sort(rand(1,n));`

Notice that the first line starts with the keyword `function`, which states that this file contains a function rather than a script. Next comes the declaration of the return value `p`. This means that the value of the variable, `p` when this function terminates, will be returned as the output of the function. Next comes the name of the function. This should match the name of the file. Now the list of input variables, only one in this case: `n`. So _whatever the input_ is when the function is called, internally it will be placed in a variable called `n`. Next there's a long comment block which becomes the help file text (type `help randsort` and see) and finally the actual body of the function. In this case it is one line of code, but it is slightly strange; it turns out that you can return more than one value from a function. The function `sort` normally returns the inputs vector sorted:

    >> sort(rand(1,4))
    ans =
         0.1822    0.3957    0.4644    0.6998 

But if you ask for two output variables, sort will also tell you the _permutation_ needed to get from the input to the output:

    
    >> A=rand(1,4)
    A =
         0.9473    0.1685    0.5514    0.2684
    >> [B,C]=sort(A)
    B =
         0.1685    0.2684    0.5514    0.9473
    C =
         2     4     3     1
    >> A(C) % Notice how we use the permutation C to PERMUTE the elements of A
    ans =
         0.1685    0.2684    0.5514    0.9473

As this code uses the random number generator 'rand', the results you get may be different from these.

As the original list of numbers is random, it implies that the permutation needed to sort it is a random, uniformly distributed permutation, and this is what MATLAB returns as the output of the function `randperm`. Notice the use of the tilde character to signify that the first return value isn't needed. This is a new expansion of the MATLAB language. If you have an old version, the code will have a "throw-away" variable (a variable that is not used).