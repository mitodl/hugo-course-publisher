---
title: Meltdown Assignment
course_id: 6-033-computer-system-engineering-spring-2018
menu:
  6-033-computer-system-engineering-spring-2018:
    identifier: 447da471034fb3474c11bbe7bfa9e6b3_meltdown-assignment
    weight: 650
    parent: a53ea92f4c3dbec43ffae7cf73d6eb29_week-14
---
For this recitation, you'll be reading ![This resource may not render correctly in a screen reader.](/images/inacessible.gif)"[Meltdown (PDF)](https://meltdownattack.com/meltdown.pdf)" by Moritz Lipp, Michael Schwarz, et al. Meltdown, along with Spectre, is a security vulnerability that was discovered early this year, which affects all modern Intel processors.

To help as you read:

*   Sections 2 and 3 give a very good overview of the necessary background and a toy example to help you understand the basic attack.
*   Sections 4 and 5 extend that toy example, explaining how Meltdown was actually implemented.
*   Section 6 evaluates the attack, explaining what systems are vulnerable and how well the attack performs.
*   Sections 7 and 8 discuss countermeasures and some of the consequences of Meltdown.

As you read, think about the following:

*   How does Meltdown differ from the other attacks we've seen? In particular, how does it compare to the memory corruption attacks in the previous recitation?
*   Think about Meltdown in the context of the guard model. Is there a guard in place here? If so, how is it being subverted?
*   The paper (Section 6.4) mentions that ARM and AMD CPUs do not appear susceptible to Meltdown, and posit that it could be that the current implementation of Meltdown is too slow. Why does the speed of the Meltdown code matter here?

Questions for Recitation
------------------------

Think about the following before recitation. You do not need to turn anything in since it's the last week of classes. (Participation **during** this recitation does still count towards your grade.)

*   What is the Meltdown attack?
*   How does it work?
*   Why is this attack possible? (Or an alternative question, why doesn't Intel simply disable out-of-order execution on its processors?)

As always, there are multiple correct answers for each of these questions.