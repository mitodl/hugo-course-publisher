---
title: Reading Questions 15a
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: a607d2c86f1efecd43a2b498d5a488da
    weight: 440
    parent: 579c055accb4eb7ebb6bf294146b45a5
---
Reading Questions Answer Checker
--------------------------------

To check your answers put them in the appropriate box and click the 'Check' button. Every checker box can do arithmetic and calculate standard functions (see [calculator help]({{% getpage "courses/18-05-introduction-to-probability-and-statistics-spring-2014/sections/assignments/calculator-help" %}})). If you give decimal answers, give them to at least 3 decimal places.

As you work you should have pencil and paper handy for calculations and thinking!

Note: some questions ask for a formula. For the checker we ask you to plug a value into the formula. For your pset you still need to give the whole formula.

//DEBUG PARAMETERS //Because we don't show solutions for pset checkers we use //this to give a showanswer button during the debugging phase var debugans = undefined; //release //var debugans = kDebugAnswer; //debug problemNumber = 0; wl("<h3>Calculator</h3>"); writecalculator("psetcheckcalcid", "Calculate"); whr(kdivcol,kdivwid);

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Suppose our data $y &#x223c;$ N$(&theta;, 6)$", "where $&theta;$ is unknown.", "Suppose our prior for $&theta;$ is N(2, 10).", kp, "You run a five of experiments and collect the following data: ", "2, 2, 4, -1, 3.", kp, "Your posterior pdf for $&theta;$ is", "$\\\\text'N'(&mu;\_{\\\\text'post'}, &sigma;^2\_{\\\\text'post'})$.", kp, "What are $&mu;\_{\\\\text'post'}$ and $&sigma;^2\_{\\\\text'post'}$ ?"\]; wl(s.join(' ')); wl(kp); s = "(i) $&mu;\_{\\\\text'post'}$:"; wl(s); wl(kbr); partName = problemNumber + " (i)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 2, buttonLabel, 0.001, kuseCorrectVal); wl(kp); s = "(ii) $&sigma;^2\_{\\\\text'post'}$:"; wl(s); wl(kbr); partName = problemNumber + " (ii)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; writeNumericBox(partName+"id", 1.0714, buttonLabel, 0.001, kuseCorrectVal); wl(kp); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); var s; var partName, problemName, buttonLabel, answerArray, correct; s = \["Suppose we have a measurement $x &#x223c;$ N($&theta;$, $&sigma;^2$)", "where $&theta;$ is our parameter of interest and the variance", "$&sigma;^2$ is known. Suppose also that the prior pdf on $&theta;$ is normal.", kp, "If the prior pdf is shown in blue and the single data point is at the red line then what is the the posterior pdf?"\]; wl(s.join(' ')); wl(kp); wl("<img src="/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/readings/reading-questions-15a/class14-1-cq.png" width='400px'>"); wl(kbr); partName = problemNumber; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = "Cyan (plot 1)"; var answerArray = \[correct,"Magenta (plot 2)","Yellow (plot 3)", "Green (plot 4)"\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); whr(kdivcol,kdivwid);