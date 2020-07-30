---
title: Reading Questions 22
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: f265cfd177f62963d0c51227c4e2dee5
    type: section
    layout: section
    name: Reading Questions 22
    weight: 490
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Suppose you have 9 data points drawn from N$(&mu;,1)$ with sample mean $\\\\ov{x} = 3$.", kbr, "What is the 95% confidence interval for the mean $&mu;$?", kp, "(Use the approximation 2 instead of 1.96 for $z\_{0.025}$.)"\]; wl(s.join(' ')); wl(kp); s = "(1.i) Give the lower limit:"; wl(s); wl(kbr); partName = problemNumber + ".i"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 2.3333, buttonLabel, 0.002, kuseCorrectVal); wl(kp); s = "(1.ii) Give the upper limit:"; wl(s); wl(kbr); partName = problemNumber + ".ii"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 3.6667, buttonLabel, 0.002, kuseCorrectVal); wl(kp); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "Suppose you have 9 data points drawn from $N(&mu;,&sigma;^2)$. Suppose that \[4.2, 6,8\] is a 95% confidence interval for $&mu;$."; wl(s); wl(kp); s = "What is the probability that $4.2 &le; &mu; &le; 6.8$?"; wl(s); wl(kbr); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "Frequentists do not compute probabilities of hypotheses"; var answerArray = \["0.95", "0.05", "0.95/3", correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);