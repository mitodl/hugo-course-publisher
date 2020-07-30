---
title: Reading Questions 13a
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: 77c5e33c1267b97780b7a3e4b16f8ced
    type: section
    layout: section
    name: Reading Questions 13a
    weight: 410
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

s = 'For these problems the geometric distribution geom$(&theta;)$ represents the number of successes until the first failure in a sequence of independent Bernoulli trials, where $&theta;$ is the probability of success for each trial.'; wl(s); wl(kp) s = "In all three problems let $X &#x223c;$ geom$(&theta;)$ where the parameter $&theta;$ is in the range $\[0,1\]$."; wl(s); wl(kbr); //whr(kdivcol,kdivwid); NO DIV LINE

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Suppose we don't know the value of $&theta;$", "but have good information that it is most likely to be near 0.5.", kp, "Which of the following possible priors most closely matches our information?"\]; wl(s.join(' ')); wl(kp); wl(kbr); wl('<img src="/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/readings/reading-questions-13a/figc13-rq1-1.png" width="200px">'); wl(ksp+ksp); wl('<img src="/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/readings/reading-questions-13a/figc13-rq1-2.png" width="200px">'); wl(ksp+ksp); wl('<img src="/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/readings/reading-questions-13a/figc13-rq1-3.png" width="200px">'); wl(kbr); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "C"; var answerArray = \["A","B","C"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \['Suppose we take one draw from the draw from the random variable $X$', 'and get the data $x=3$.', kp, 'For a fixed hypothesis $&theta;$ what is the likelihood function $p(x| &theta; )$?'\] wl(s.join(' ')); wl(kp); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "$&theta;^3(1-&theta;)$"; var answerArray = \[correct,"$(\\\\table 3; 1)$ $&theta;^3(1-&theta;)$","$p^3(1-p)$"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);

//Problem 3 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Assume your prior probability for $&theta;$ is", "$2&theta;$.", kp, "What is the prior predictive probability that $x = 3$?"\]; wl(s.join(' ')); wl(kp); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 0.0666667, buttonLabel, 0.001, kuseCorrectVal); wl(kp); whr(kdivcol,kdivwid);