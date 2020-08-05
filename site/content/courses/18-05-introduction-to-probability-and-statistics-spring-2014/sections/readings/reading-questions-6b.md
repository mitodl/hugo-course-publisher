---
title: Reading Questions 6b
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
type: course
layout: course_section
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: 949b8f4acfbfc9713a57c4b8f89ca821
    name: Reading Questions 6b
    weight: 330
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "True or False. A density histogram of 100000 values is always close to the graph of the underlying density." wl(s); wl(kbr); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "False"; var answerArray = \["True", correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "If $X$ has mean $&mu;=2$ and variance $&sigma;^2=4$ then which of the following is the standardization of $X$?"; wl(s); wl(kbr); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "$(X-2)\\/2$"; var answerArray = \[correct, "$(X-4)\\/4$","$(X-2)\\/4$","$(X-4)\\/2$"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);

//Problem 3 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "If $Y$ is a standard normal random variable and $W = 3Y + 4$ then what is the mean of $W$?"; wl(s); wl(kp); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 4, buttonLabel, 0.001, kuseCorrectVal); wl(kp); whr(kdivcol,kdivwid);

//Problem 4 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["A fair coin is tossed 64 times. Use the central limit theorem to estimate the probability of getting more that 40 heads.", kp, "Hint: you can do this without R using a rule of thumb to help find the appropriate tail probability.", "For this problem you only have to be within 0.004 of the exact answer to get a green check."\]; wl(s.join(' ')); wl(kp); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .025, buttonLabel, 0.004, "Exact: 0.0227, rule-of-thumb: 0.025"); wl(kp); whr(kdivcol,kdivwid);