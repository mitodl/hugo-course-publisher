---
title: Warm-up
course_id: 18-s997-introduction-to-matlab-programming-fall-2011
menu:
  18-s997-introduction-to-matlab-programming-fall-2011:
    identifier: 914a82acfa92cf915ecf24b1e2c6d1ce
    type: section
    layout: section
    name: Warm-up
    weight: 80
    parent: 33cb3bda3dc0895ff5de7bc1b91f60c2
---
Here are some warm-up problems:

*   Create the list of numbers from 3 to 10
*   Create the list of even numbers from –20 to 20
*   Create the decreasing list of numbers from 100 to 90

Remember variables? There's one variable that is special: The `ans` variable holds the last calculated value that was not placed into a variable. This is nice when a command you give MATLAB® returns a value that you realize is important, but forgot to assign into a variable:

    >> sin(pi/2)
    ans =
          1
    %%oops! I meant to save the "return value" in the variable x
    >> x=ans
    x =
          1
    >>

Now `x` holds the answer, 1. Of course you could also re-issue the command with an assignment, but commands can take long to run, and there may be other reasons why you do not want to re-issue the command.