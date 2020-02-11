---
title: '8.3 Radiation Therapy: An Application of Linear Optimization '
course_id: 15-071-the-analytics-edge-spring-2017
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: 12e6da5699311c837bce67f78b499ef3_quick-question-630
    weight: 170
---
*   [<Radiation Therapy: An Application of Linear Optimization]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization" %}})
*   [8.3.1Video 1: Introduction]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization" %}})
*   [8.3.2Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/quick-question-630" %}})
*   [8.3.3Video 2: An Optimization Problem]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-2-an-optimization-problem" %}})
*   [8.3.4Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/quick-question-635" %}})
*   [8.3.5Video 3: Solving the Problem]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-3-solving-the-problem" %}})
*   [8.3.6Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/quick-question-643" %}})
*   [8.3.7Video 4: A Head and Neck Case]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-4-a-head-and-neck-case" %}})
*   [8.3.8Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/quick-question-648" %}})
*   [8.3.9Video 5: Sensitivity Analysis]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-5-sensitivity-analysis" %}})
*   [8.3.10Quick Question]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/quick-question-654" %}})
*   [8.3.11Video 6: The Analytics Edge]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-6-the-analytics-edge" %}})
*   [\\>Video 2: An Optimization Problem]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-2-an-optimization-problem" %}})

Quick Question
--------------

In the next video, we'll be formulating the IMRT problem as a linear optimization problem. What do you think the decision variables in our problem will be?

Exercise 1

&nbsp;The amount of radiation to deliver to the tumor&nbsp;

&nbsp;The intensities of the beams&nbsp;

&nbsp;The intensities of the beamlets&nbsp;

&nbsp;The shape of the tumor&nbsp;

Explanation

We get to decide the beamlet intensities - these will be the decision variables in our optimization problem. The amount of radiation to the tumor will be computed using the beamlet intensities, but we also want to make sure we know the amount of radiation to healthy tissue. The intensities of the beams would have been the decision variables in traditional radiation therapy, and the shape of the tumor is data.

CheckShow Answer

*   [BackRadiation Therapy: An Application of Linear Optimization]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization" %}})
*   [ContinueVideo 2: An Optimization Problem]({{% ref "courses/15-071-the-analytics-edge-spring-2017/sections/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-2-an-optimization-problem" %}})