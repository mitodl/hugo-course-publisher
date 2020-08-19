---
title: Reading Questions 2
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

//Problem 1 problemNumber++; wl(problemheader(problemNumber)); var s; s = "Which of the following represents a valid probability table?" wl(s); wl(kbr) wl('<table><tr><td style="padding:4ex";>'); wl('(i)' + kbr); writetable(\[\['outcomes', 1, 2, 3, 4, 5\], \['probability','1/5','1/5','1/5','1/5','1/5'\]\], "class='basicborder'", "class='basiccells'", "class='k'", 2); wl('</td><td>'); wl('(ii)' + kbr); writetable(\[\['outcomes', 1, 2, 3, 4, 5\], \['probability','1/2','1/5','1/10','1/10','1/10'\]\], "class='basicborder'", "class='basiccells'", "class='k'", 2); wl('</td></tr></table>'); var problemName = "prob" + problemNumber; var buttonLabel = "Check problem " + problemNumber; var correct = 'i and ii'; var answerArray = \['i','ii',correct, 'Not enough information'\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct,buttonLabel); whr(kdivcol,kdivwid);

//Problem 2 problemNumber++; wl(problemheader(problemNumber)); wl(kp) var s; s = \["A sample space has exactly two outcomes. The first has probability", ml('p'), " and the second has probability", ml('3p.'), " What is the value of", ml('p') + '?'\]; wl(s.join(' ')); wl(kp); var buttonLabel = "Check problem " + problemNumber; writeNumericBox(problemNumber+"id", .25, buttonLabel, 0.001, kuseCorrectVal); whr(kdivcol,kdivwid);

//Problem 3 problemNumber++; wl(problemheader(problemNumber)); wl(kp); var s; s = \["Let", ml('A'), "and", ml('B'), "be two events with", ml("P(A) = 0.4, P(B) = 0.5"), "and", ml("P(A &cap; B) = 0.3."), "What is", ml("P(A &cup; B)") + "?"\]; wl(s.join(' ')); wl(kbr + "(Hint: visualize with Venn diagrams.)"); wl(kbr); var problemName = "prob" + problemNumber; var buttonLabel = "Check problem " + problemNumber; var correct = 0.6 var answerArray = \[0.5, correct, 0.7, 0.8, 0.9\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct,buttonLabel); whr(kdivcol,kdivwid); //Problem 4 problemNumber++; wl(problemheader(problemNumber)); wl(kp); var s; s = \["Our experiment consists of tossing a coin 3 times. Take the sample space to be all sequences of 3 heads or tails.", mldisplay("S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}"), "For each of the following give the size of the event."\]; wl(s.join(" ")); wl(kp); var partName, problemName, buttonLabel, answerArray, correct; s = \["(i) The event 'there are more heads than tails'."\]; wl(s.join(" ")); wl(kp); partName = problemNumber + " (i)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = 4; answerArray = \[0,1,2,3,correct,5,6,7,8\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); wl(kp); s = \["(ii) The event 'the first heads occurs after the first tails.'"\]; wl(s.join(' ')); wl(kp); partName = problemNumber + "(ii)"; problemName = "prob" + partName; buttonLabel = "Check problem " + partName; correct = 3; answerArray = \[0,1,2,correct,4,5,6,7,8\]; writeMultipleChoiceRadioGroup(answerArray, problemName, correct, buttonLabel); whr(kdivcol,kdivwid);