---
title: '1.3 Working with Data: An Introduction to R '
menu:
  15-071-the-analytics-edge-spring-2017:
    identifier: quick-question-40
    weight: 260
---
*   [<Video 6: Data Analysis - Plots and Summary Tables]({{< ref "video-6-data-analysis-plots-and-summary-tables" >}})
*   [1.3.1Download and Install R]({{< ref "working-with-data-an-introduction-to-r" >}})
*   [1.3.2Video 1: Why R?]({{< ref "video-1-why-r" >}})
*   [1.3.3Quick Question]({{< ref "quick-question" >}})
*   [1.3.4Video 2: Getting Started in R]({{< ref "video-2-getting-started-in-r" >}})
*   [1.3.5Quick Question]({{< ref "quick-question-4" >}})
*   [1.3.6Video 3: Vectors and Data Frames]({{< ref "video-3-vectors-and-data-frames" >}})
*   [1.3.7Quick Question]({{< ref "quick-question-9" >}})
*   [1.3.8Video 4: Loading Data Files]({{< ref "video-4-loading-data-files" >}})
*   [1.3.9Quick Question]({{< ref "quick-question-20" >}})
*   [1.3.10Video 5: Data Analysis - Summary Statistics and Scatterplots]({{< ref "video-5-data-analysis-summary-statistics-and-scatterplots" >}})
*   [1.3.11Quick Question]({{< ref "quick-question-28" >}})
*   [1.3.12Video 6: Data Analysis - Plots and Summary Tables]({{< ref "video-6-data-analysis-plots-and-summary-tables" >}})
*   [1.3.13Quick Question]({{< ref "quick-question-40" >}})
*   [1.3.14Video 7: Saving with Script Files]({{< ref "video-7-saving-with-script-files" >}})
*   [\\>Video 7: Saving with Script Files]({{< ref "video-7-saving-with-script-files" >}})

Quick Question
--------------

Use the tapply function to find the average child mortality rate of countries in each region.

Which region has the lowest average child mortality rate across all countries in that region?

Exercise 1

&nbsp;Africa&nbsp;

&nbsp;Americas&nbsp;

&nbsp;Eastern Mediterranean&nbsp;

&nbsp;Europe&nbsp;

&nbsp;South-East Asia&nbsp;

&nbsp;Western Pacific&nbsp;

Explanation

You can find the average child mortaility rate of countries in each region by using the following command:

tapply(WHO$ChildMortality, WHO$Region, mean)

The output tells us that Europe has the lowest average child mortality rate across all countries, with an average of 10.05.

CheckShow Answer

*   [BackVideo 6: Data Analysis - Plots and Summary Tables]({{< ref "video-6-data-analysis-plots-and-summary-tables" >}})
*   [ContinueVideo 7: Saving with Script Files]({{< ref "video-7-saving-with-script-files" >}})