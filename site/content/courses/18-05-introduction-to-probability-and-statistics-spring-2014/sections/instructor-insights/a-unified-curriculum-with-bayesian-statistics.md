---
title: A Unified Curriculum with Bayesian Statistics
course_id: 18-05-introduction-to-probability-and-statistics-spring-2014
menu:
  18-05-introduction-to-probability-and-statistics-spring-2014:
    identifier: e612a220f47d26cb1df41379920545d8
    weight: 110
    parent: 1b6858820e39dbc6ba03dc47858871bd
---
_In this section, Dr. Jeremy Orloff and Dr. Jonathan Bloom discuss how the unit on Bayesian statistics unifies the 18.05 curriculum._

18.05 formally consisted of a unit on probability and a unit on frequentist statistics, which included standard concepts such as confidence intervals and _p_\-values. We heard from previous instructors that students felt there was a disconnect between the units; in particular, they felt that in the statistics unit they were just learning computational procedures.

We revised the curriculum with several goals in mind. First, we wanted to unify the course by building a much stronger connection between the probability and statistics sections. Second, we wanted students to come away with a deeper understanding of the meaning of frequentist statistics, the focus of the traditional course. Third, we wanted to introduce students to Bayesian and computational statistics, central tools in modern statistical practice.

A Unique Syllabus
-----------------

As far as we can tell, our syllabus is unique. In brief, we start with the basics of probability with an emphasis on Bayes' Theorem. We then transition to statistics by analyzing data when all the pieces of Bayes' Theorem are known; this is still pure probability. Finally we teach both Bayesian and frequentist statistical inference as methods for dealing with the case when the prior is unknown: if you're a Bayesian, you use a subjective prior; if you're a frequentist, you do the best you can using only the likelihood.

The Bayesian unit specifically helped fix our treatment of the so-called "base-rate fallacy." Very briefly, if a highly accurate test is used to screen for an uncommon disease, then, despite the accuracy, a person who tests positive has a surprisingly small probability of truly having the disease. It is called the base-rate fallacy because many people ignore the low base-rate of the disease in the population and falsely conclude that the high accuracy of the test implies a high probability the patient has the disease.

When we taught Bayes Theorem as part of the probability unit, we would use it to compute the true probability that a person who tests positive has the disease. We would then gleefully suggest that our students quiz their doctors to see if they would commit the base-rate fallacy. However, when we taught significance testing, we would discreetly avoid this example. The problem is that significance testing is designed for cases where you don’t know the base-rate, and it reaches the opposite conclusion that a person testing positive was significantly likely to have the disease. We felt that this paradox was too much for students just learning significance testing to handle, so we avoided it. The Bayesian unit allowed us to deal directly with these issues.

Taught in this way, Bayesian and frequentist statistics are mutually reinforcing. First, by emphasizing that both are responses to the lack of a known prior, students see clearly that statistical inference is an art involving practical compromises rather than pure deductive mathematics. Second, students intuitively assign a Bayesian interpretation to frequentist constructs such as _p_\-values and confidence intervals. By first showing them Bayesian inference we give them a solid base to avoid such misinterpretations.

We also believe that Bayesian statistics is important because of its exploding role in applications; much of machine learning, big data, and cutting edge work on genetics and neuroscience is done with Bayesian methods.

More Material
-------------

With the new Bayesian statistics unit, we have one-third more material than the course used to have. In practice, we’ve had no problem covering all this material, and students are doing at least as well on exams as they did in the past.