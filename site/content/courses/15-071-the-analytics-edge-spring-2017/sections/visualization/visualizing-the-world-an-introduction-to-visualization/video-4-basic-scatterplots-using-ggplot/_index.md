---
title: '7.2 Visualizing the World: An Introduction to Visualization'
course_id: 15-071-the-analytics-edge-spring-2017
type: courses
layout: videogallery
---
*   [<Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-515/_index.md" %}})
*   [7.2.1Video 1: The Power of Visualizations]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/_index.md" %}})
*   [7.2.2Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-505" %}})
*   [7.2.3Video 2: The World Health Organization (WHO)]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/video-2-the-world-health-organization-who" %}})
*   [7.2.4Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-510" %}})
*   [7.2.5Video 3: What is Data Visualization?]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/video-3-what-is-data-visualization" %}})
*   [7.2.6Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-515/_index.md" %}})
*   [7.2.7Video 4: Basic Scatterplots Using ggplot]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/video-4-basic-scatterplots-using-ggplot/_index.md" %}})
*   [7.2.8Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-526" %}})
*   [7.2.9Video 5: Advanced Scatterplots Using ggplot]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/video-5-advanced-scatterplots-using-ggplot" %}})
*   [7.2.10Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-531" %}})
*   [\\>Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-526" %}})

Video 4: Basic Scatterplots Using ggplot
----------------------------------------

In the rest of this lecture, we'll be using the data file [WHO (CSV)](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/00947740049716b36f8ba103a7fb03c4_WHO.csv). Please download this file to your computer, and save it to a location that you will remember. This data comes from the [Global Health Observatory Data Repository](http://apps.who.int/gho/data/node.main). 

An R script file with all of the commands used in this lecture can be downloaded here: [Resource Unit7\_WHO (R)](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/27fb60c95b9851db49831751f9ccf614_Unit7_WHO.R).

{{< youtube nqqYjtK1zIk >}}

Colors and shapes in R
----------------------

If you want to see all of the available colors in R, type in your R console:

colors()

All of the available shapes are described in the following image:

![Variety of colors and shapes available in R using ggplot.](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/6a88ce72b6c9709cc7bd95550e3cd349_Shapes.jpg)

This image comes from [Cookbook for R](http://www.cookbook-r.com/Graphs/Shapes_and_line_types/). License: CC BY-SA. This content is excluded from our Creative Commons license. For more information, see [https://ocw.mit.edu/help/faq-fair-use/](https://ocw.mit.edu/help/faq-fair-use/).

The number 0 corresponds to an empty square, the number 6 corresponds to an upside down triangle, etc.

*   [BackQuick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-515/_index.md" %}})
*   [ContinueQuick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/visualization/visualizing-the-world-an-introduction-to-visualization/quick-question-526" %}})