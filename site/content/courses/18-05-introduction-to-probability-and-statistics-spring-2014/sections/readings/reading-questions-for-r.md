---
title: Reading Questions for R
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
type: course
layout: course_section
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); wl(kp); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Using what you've learned about R, simulate rolling one die 100000 times and compute the average of the 100000 rolls.", kbr, "(You should use the sample() and mean() functions.)"\]; wl(s.join(' ')); wl(kp); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 3.5, buttonLabel, 0.05, "3.5 (anything close)"); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); wl(kp); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["In a sequence of numbers a run is a subsequence of the same number.", "For example ", kp, ksp,ksp,ksp,"(1,1,1,2,3,3,3,1,1)", kp, "has a run of 1's of length 3, a run of 2's of length 1, ", "a run of 3's of length 3 and a run of 1's of length 2.", kp, "The R function rle() helps compute the run lengths in a sequence. ", "Try running the following code"\]; wl(s.join(' ')); wl(kp); s = \[rcmdna("x = c(1,1,1,2,3,3,3,1,1)"), kbr, rcmdna("y = rle(x)"), kbr, rcmdna("y")\]; wl(s.join(' ')); wl(kp); s = \["You should see the following", kbr, rtext("Run Length Encoding"), kbr, ksp,ksp,ksp, rtext("lengths: int \[1:4\] 3 1 3 2"), kbr, ksp,ksp,ksp, rtext("values : num \[1:4\] 1 2 3 1")\]; wl(s.join(' ')); wl(kp) s = \["The lengths vector shows the runs in " + rtext("x"), " and the values vector shows the number used for each run. ", "To pick out just the lengths vector you use the command:", ksp, rtext("y&#36;lengths"), kp, "You should see: " + ksp + rtext("\[1\] 3 1 3 2")\]; wl(s.join(' ')); wl(kp) s = \["Run the code", kbr, rtext("set.seed(10)"), kbr, rtext("y = rbinom(20,1,.5)")\]; wl(s.join(' ')); wl(kp) s = \[rtext("y"), " is a vector of 0's and 1's of length 20. Use ", rtext("rle(y) "), " to find the length of the longest run in ", rtext("y.")\]; wl(s.join(' ')); wl(kp) partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 5, buttonLabel, 0.001, kuseCorrectVal); whr(kdivcol,kdivwid);