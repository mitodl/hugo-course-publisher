---
title: '7.3 The Analytical Policeman: Visualization for Law and Order'
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-550
    weight: 2470
---
*   [<Video 3: A Line Plot]({{< ref "video-3-a-line-plot" >}})
*   [7.3.1Video 1: Predictive Policing]({{< ref "the-analytical-policeman-visualization-for-law-and-order" >}})
*   [7.3.2Quick Question]({{< ref "quick-question-540" >}})
*   [7.3.3Video 2: Visualizing Crime Over Time]({{< ref "video-2-visualizing-crime-over-time" >}})
*   [7.3.4Quick Question]({{< ref "quick-question-545" >}})
*   [7.3.5Video 3: A Line Plot]({{< ref "video-3-a-line-plot" >}})
*   [7.3.6Quick Question]({{< ref "quick-question-550" >}})
*   [7.3.7Video 4: A Heatmap]({{< ref "video-4-a-heatmap" >}})
*   [7.3.8Quick Question]({{< ref "quick-question-559" >}})
*   [7.3.9Video 5: A Geographical Hot Spot Map]({{< ref "video-5-a-geographical-hot-spot-map" >}})
*   [7.3.10Quick Question]({{< ref "quick-question-567" >}})
*   [7.3.11Video 6: A Heatmap on the United States]({{< ref "video-6-a-heatmap-on-the-united-states" >}})
*   [7.3.12Quick Question]({{< ref "quick-question-575" >}})
*   [7.3.13Video 7: The Analytics Edge]({{< ref "video-7-the-analytics-edge" >}})
*   [\\>Video 4: A Heatmap]({{< ref "video-4-a-heatmap" >}})

Quick Question
--------------

Create a new line plot, like the one in Video 3, but add the argument "linetype=2". So the geom\_line part of the plotting command should look like:

geom\_line(aes(group=1), linetype=2)

What does this do?

Exercise 1

&nbsp;Makes the line thicker&nbsp;

&nbsp;Changes the color of the line to blue&nbsp;

&nbsp;Makes the line dashed&nbsp;

&nbsp;Makes the line lighter in color&nbsp;

Now, change the alpha parameter to 0.3 by replacing "linetype=2" with "alpha=0.3" in the plot command. What does this do?

Exercise 2

&nbsp;Makes the line thicker&nbsp;

&nbsp;Changes the color of the line to blue&nbsp;

&nbsp;Makes the line dashed&nbsp;

&nbsp;Makes the line lighter in color&nbsp;

Explanation

The linetype parameter makes the line dashed, and the alpha parameter makes the line lighter in color, or more transparent. The two plots can be generated with the following commands:

ggplot(WeekdayCounts, aes(x = Var1, y = Freq)) + geom\_line(aes(group=1), linetype=2) + xlab("Day of the Week") + ylab("Total Motor Vehicle Thefts")

ggplot(WeekdayCounts, aes(x = Var1, y = Freq)) + geom\_line(aes(group=1), alpha=0.3) + xlab("Day of the Week") + ylab("Total Motor Vehicle Thefts")

CheckShow Answer

*   [BackVideo 3: A Line Plot]({{< ref "video-3-a-line-plot" >}})
*   [ContinueVideo 4: A Heatmap]({{< ref "video-4-a-heatmap" >}})