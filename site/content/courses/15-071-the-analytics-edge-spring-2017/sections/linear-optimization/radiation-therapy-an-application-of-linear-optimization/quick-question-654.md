---
title: '8.3 Radiation Therapy: An Application of Linear Optimization '
course_id: 15-071-the-analytics-edge-spring-2017
---
*   [<Video 5: Sensitivity Analysis]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-5-sensitivity-analysis" %}})
*   [8.3.1Video 1: Introduction]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/_index.md" %}})
*   [8.3.2Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/quick-question-630" %}})
*   [8.3.3Video 2: An Optimization Problem]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-2-an-optimization-problem" %}})
*   [8.3.4Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/quick-question-635" %}})
*   [8.3.5Video 3: Solving the Problem]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-3-solving-the-problem/_index.md" %}})
*   [8.3.6Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/quick-question-643" %}})
*   [8.3.7Video 4: A Head and Neck Case]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-4-a-head-and-neck-case" %}})
*   [8.3.8Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/quick-question-648" %}})
*   [8.3.9Video 5: Sensitivity Analysis]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-5-sensitivity-analysis" %}})
*   [8.3.10Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/quick-question-654" %}})
*   [8.3.11Video 6: The Analytics Edge]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-6-the-analytics-edge" %}})
*   [\\>Video 6: The Analytics Edge]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-6-the-analytics-edge" %}})

Quick Question
--------------

In your spreadsheet from Video 3, make sure that you have solved the original small example problem (change the spinal cord limit back to 5 and re-solve if you have changed it, and make sure the objective value is 22.75).

Now, change the weight for the spinal cord term in the objective to 5.

Without re-solving, what does the objective value of the current solution change to?

Exercise 1

&nbsp;Numerical Response&nbsp;

Explanation

The term SUMPRODUCT(B14:B19;F5:F10) in the objective (corresponding to Voxel 5) should now be 5\*SUMPRODUCT(B14:B19;F5:F10). This changes the objective value to 42.75.

Now re-solve the model. What does the objective change to?

Exercise 2

&nbsp;Numerical Response&nbsp;

Explanation

You can resolve the model by going to Solver, and just hitting Solve. The new optimal objective function value is 25.666667.

Notice how we are now giving a smaller dose to the spinal cord!

CheckShow Answer

*   [BackVideo 5: Sensitivity Analysis]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-5-sensitivity-analysis" %}})
*   [ContinueVideo 6: The Analytics Edge]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-6-the-analytics-edge" %}})