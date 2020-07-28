---
title: Reading Questions 1b
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: caf3107510973b4ece1a70518e49f2e9
    type: section
    layout: section
    name: Reading Questions 1b
    weight: 210
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; s = "How many ways can you choose 4 kittens from a litter of 9?"; wl(s); wl(kp); var buttonLabel = "Check problem " + problemNumber; writeNumericBox(problemNumber+"id", 126, buttonLabel, 0.001, kuseCorrectVal); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s s = "How many sequences of 8 nucleotides can be made using any of the 4 nucleotides A, C, G, T at each place of the sequence?" wl(s); wl(kp); var buttonLabel = "Check problem " + problemNumber; writeNumericBox(problemNumber+"id", 65536, buttonLabel, 0.001, kuseCorrectVal); whr(kdivcol,kdivwid);

//Problem 3 problemNumber++; wl(problemheader(problemNumber)); s = \["Suppose a sequence of 8 nucleotides contains 2 each of A, C, G, T.", kp, "How many such sequences are there?"\]; wl(s.join(' ')); wl(kbr); var problemName = "prob" + problemNumber; var buttonLabel = "Check problem " + problemNumber; var correct = 2520 var answerArray = \[70,1120,correct,37800\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); whr(kdivcol,kdivwid);