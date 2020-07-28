---
title: Reading Questions 7a
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: 8e17011992abda81a3894df37df3a092
    type: section
    layout: section
    name: Reading Questions 7a
    weight: 340
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "$f(x,y) = cxy$ is a joint pdf on $\[0,1\]&times; \[0,1\]$. What is the value of $c$?"; wl(s); wl(kp); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 4, buttonLabel, 0.01, kuseCorrectVal); wl(kp); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "Consider the following joint probability table."; wl(s); wl(kp); wl('<img src="/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/readings/reading-questions-7a/figc7-15.png" width="300px">'); wl(kp); s = "(a) What is the probability that $X &le; 2$ and $Y &le; 2$?" wl(s); wl(kbr); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "1/4"; var answerArray = \[correct, "5/24","1/6","1/8"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); s = "(b) What is the marginal probability $X = 1$?" wl(s); wl(kbr); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "1/6"; var answerArray = \["1/4","5/24",correct,"1/8"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); s = "(c) Are $X$ and $Y$ independent?"; wl(s); wl(kbr); partName = problemNumber + " (c)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "Yes"; var answerArray = \[correct, "No"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);