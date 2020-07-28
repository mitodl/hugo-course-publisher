---
title: Newton's Method
course_id: 18-s997-introduction-to-matlab-programming-fall-2011
menu:
  18-s997-introduction-to-matlab-programming-fall-2011:
    identifier: b66efdff770f0bea25c37377318de9c0
    type: section
    layout: section
    name: Newton's Method
    weight: 90
    parent: 33cb3bda3dc0895ff5de7bc1b91f60c2
---
\\(\\newcommand{\\sech}{\\mathop{\\rm sech}\\nolimits} \\newcommand{\\csch}{\\mathop{\\rm csch}\\nolimits}\\)

Many mathematical problems involve solving equations. And while linear equations can be solved rather easily, nonlinear ones cannot. A nonlinear equation can always be written as

\\begin{equation} \\label{eq:non-linear:function} f(x)=0 \\end{equation}

For a suitably chosen function \\(f\\). For example, if we want to find \\(x\\) so that \\(\\tanh(x)=x/3\\), we could instead chose \\(f(x)=\\tanh(x)-x/3\\) and solve equation (1). Finding solutions to (1) is called "root-finding" (a "root" being a value of \\(x\\) for which the equation is satisfied).

We almost have all the tools we need to build a basic and powerful root-finding algorithm, Newton's method\*. Newton's method is an _iterative_ method. This means that there is a basic mechanism for taking an approximation to the root, and finding a better one. After enough iterations of this, one is left with an approximation that can be as good as you like (you are also limited by the accuracy of the computation, in the case of MATLAB®, 16 digits).

Iterative methods entail doing the exact same thing over and over again. This is perfect for a computer.

The actual iteration starts from an approximation \\(x\_n\\) at the \\(n-\\)th step and defines the next one, \\(x\_{n+1}\\) : \\begin{equation} \\label{eq:2} x\_{n+1}=x\_n-\\frac{f(x\_n)}{f'(x\_n)} \\end{equation}

Notice that not only do we need to evaluate the function \\(f\\) at \\(x\_n\\), but also we need to evaluate the derivative, \\(f'(x\_n)\\). This could be a problem if the derivative is unknown, or complicated to compute (and there are other methods to use in that case).

For example, we look at a function for which there is no formula for the solution: \\(f(x)=\\tanh(x) - x/3\\) (we are looking for a non-zero solution). Since \\(\\tanh'(x)=\\frac{1}{\\cosh^2(x)}=\\sech^2(x)\\), the update rule becomes: \\begin{equation} \\label{eq:3} x\_{n+1}=x\_n-\\frac{\\tanh(x\_n)-x\_n/3}{\\sech^2(x\_n)-1/3}. \\end{equation}

We can do this manually by starting somewhere (not zero):

    >> x=2
    x =
         2

and doing one step of the iteration by _overwriting_ the old value with the new one:

    >> x=x – (tanh(x) - x/3) / (sech(x)^2 – 1/3)
    x =
         3.1320

To see what happens when we do this many times, we would need to tell MATLAB to do it many times. We could type in the line many times, but that would be very annoying and time-consuming. Instead, MATLAB keeps a "Command History" which you can both see (turn it on in the "Desktop" menu) and access by pressing the ⇑ and ⇓ keys on your keyboard.

**Exercise 4.** _How many iterations do you need until the solution seems to converge? What did it converge to? Tell MATLAB to show the full accuracy and find the 16-digit number that the iteration converges to._

While using the command history is faster than typing in the same command many times, there is an even better way: tell MATLAB to do it many times with either a `for` loop or a `while` loop.

Both types of loops tell MATLAB to perform a set of commands over and over again. The idea of a `for` loop is that you are telling MATLAB to perform a set of command _for_ every element of a list that you supply. For example:

    for

will _iterate_ over the values 3 to 10 and perform each of the expressions between the `for` and the `end`. At each iteration, the variable, k in this case (but can be whatever) will be assigned the appropriate value.

**Note 1.** _When you type code into_ MATLAB _you might make a mistake and want to start over. Press_CtrlC_to tell MATLAB to erase the current line and start a new one. Once you start writing a_ `for` _loop you will not get the command prompt (>>) when you press_Enter. _This is_MATLAB_'s way of telling you that you are in the middle of writing a command. Once you type_ `end` _and hit_Enter , MATLAB _will execute the loop and you'll  
  
get the prompt back. If you started a loop and want to stop in the middle and start over, press_ CtrlC _to get the prompt._

So we can write

`% notice how after a % one can write comments which can be used to
% explain the code inline.
% it will actually not bother Matlab if you copy the comments
% together with the code`
`x=2;                                   % This is our first guess
for k=1:10                             % we will iterate 30 times
     x=x–(tanh(x)–x/3)/(sech(x)^2–1/3) % we do not use k. That is OK.
end`

To see the functions we are working with, we can do a nice little plot:

    x=linspace(0,pi,100); % a list of 100 points equally spaced between 0
                          % and pi
    plot(x,tanh(x),x,x/3) 

You can read more about the functions we used today using the `help` command. For example:

    >> help tanh
         TANH Hyperbolic tangent.
              TANH(X) is the hyperbolic tangent of the elements of X.
    
              See also atanh.
    
              Overloaded methods:
                   codistributed/tanh
              Reference page in Help browser
                   doc 

Notice that in MATLAB help the commands and variables are always written in CAPITAL LETTERS, this is to make them stand out. In practice, the built-in MATLAB commands are all in lower-case. Your own variables (and functions) may use either, and MATLAB _is_ case-sensitive:

    >> a=1
    a =
         1
    >> A
    ??? Undefined function or variable 'A'.

**Exercise 5.** _Using root-finding calculate_ \\(\\sqrt{R}\\). _Of course,_ MATLAB _has the function_ `sqrt` _and also the power function as we saw in the previous lecture. But pretend that it did not. What is_ \\(\\sqrt{R}\\)? _Find a simple function_ \\(f\\) _(that doesn't use the square-root function) so that_ \\(f(\\sqrt{2})=0\\). _(There are several options, so if you don't manage with one option, try another!) Find_ \\(\\sqrt{2}\\) _like a Babylonian†. How many iterations do you need to get an answer that is 1e–15 from the answer given by_ MATLAB‡_? Note: this problem will require you to use a pencil and paper. You will need to differentiate, divide and simplify a fraction_ before _you type your code in_ MATLAB.

_Notice that the starting point is important. Find starting points that converge to each of_ \\(\\pm\\sqrt{2}\\).

**Exercise 6.** _As in the previous problem, write an iterative code that will find \\(\\frac{1}{R}\\). You might think that you will have to divide in your code, but that is not true; it depends on the function that you use. Again, if at first you do not succeed, try a different function. Simplify the formula so that it does not need division, and then implement the code to find 1/101. You will need to start close to the answer for the method to converge._

\*Also referred to as the Newton-Raphson Method.

†See [Methods of computing square roots](http://en.wikipedia.org/wiki/Methods_of_computing_square_roots) on Wikipedia for a reference.

‡The notation 1e–15 is legal notation in MATLAB and it means \\(1\\times10^{-15}\\). Also,with MATLAB 1e–16 is the smallest _precision_ (not number) possible i.e., 1+1e–16=1 (although 1+2e–16≠1)