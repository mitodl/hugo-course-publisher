---
title: Reading Questions 17b
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: ec20ddb3b0170e828c1b339f650dc22f
    type: section
    layout: section
    name: Reading Questions 17b
    weight: 460
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Data is drawn from a normal distribution with unknown mean $&mu;$. We make the following hypotheses:", kp, "$H\_0$: $&mu; = 1$", ksp, "and", ksp, "$H\_A$: $&mu; > 1$."\]; wl(s.join(' ')); wl(kp); s = "(a) Is $H\_0$ a simple or composite hypothesis?"; wl(s); wl(kbr); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "Simple"; var answerArray = \[correct,"Composite"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); s = "(b) Is $H\_A$ a simple or composite hypothesis?"; wl(s); wl(kbr); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "Composite"; var answerArray = \["Simple", correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); s = "(c) Is $H\_A$ a one or two-sided?"; wl(s); wl(kbr); partName = problemNumber + " (c)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "One-sided"; var answerArray = \[correct,"Two-sided"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "We want to estimate the value of an unknown variance $&sigma;^2$. The null hypothesis $H\_0$ is that $&sigma;^2 =1 $. Of course we know that $&sigma;^2 > 0$. Other than that we only care whether or not $&sigma;^2$ is 1. Should we have a one or two-sided alternate hypothesis?"; wl(s); wl(kbr); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "Two-sided"; var answerArray = \["One-sided",correct\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);

//Problem 3 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = "Our data is normal with variance 25. The null hypothesis is that the data is drawn from N(10, 25). That is, the null distribution has $&mu; = 10$. We have 1 data point $x = 20$."; wl(s); wl(kp) s = "(a) If the alternative hypothesis is one-sided $&mu; > 10$. What is the $p$-value for this data?"; wl(s); wl(kbr); partName = problemNumber + " (a)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", .02275, buttonLabel, 0.003, kuseCorrectVal); wl(kp); s = "(b) Suppose our significance level is 0.05. Will we reject the null hypothesis?"; wl(s); wl(kbr); partName = problemNumber + " (b)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "Yes"; var answerArray = \[correct,"No"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);