---
title: '6.2 Recommendations Worth a Million: An Introduction to Clustering '
course_id: 15-071-the-analytics-edge-spring-2017
type: course
layout: videogallery
---
*   [<Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-466" %}})
*   [6.2.1Video 1: Introduction to Netflix]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/_index.md" %}})
*   [6.2.2Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-433" %}})
*   [6.2.3Video 2: Recommendation Systems]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-2-recommendation-systems" %}})
*   [6.2.4Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-438" %}})
*   [6.2.5Video 3: Movie Data and Clustering]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-3-movie-data-and-clustering" %}})
*   [6.2.6Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-446" %}})
*   [6.2.7Video 4: Computing Distances]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-4-computing-distances" %}})
*   [6.2.8Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-451" %}})
*   [6.2.9Video 5: Hierarchical Clustering]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-5-hierarchical-clustering" %}})
*   [6.2.10Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-458" %}})
*   [6.2.11Video 6: Getting the Data]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-6-getting-the-data/_index.md" %}})
*   [6.2.12Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-466" %}})
*   [6.2.13Video 7: Hierarchical Clustering in R]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-7-hierarchical-clustering-in-r/_index.md" %}})
*   [6.2.14Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-476" %}})
*   [6.2.15Video 8: The Analytics Edge of Recommendation Systems]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-8-the-analytics-edge-of-recommendation-systems" %}})
*   [\\>Quick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-476" %}})

Video 7: Hierarchical Clustering in R
-------------------------------------

**Important Note:** In this video, we use the "ward" method to do hierarchical clustering. This method was recently renamed in R to "ward.D". If you are following along in R while watching the video, you will need to use the following command when doing the hierarchical clustering ("ward" is replaced with "ward.D"):

clusterMovies = hclust(distances, method = "ward.D")

{{< youtube GPOUGpF-Sno >}}

An Advanced Approach to Finding Cluster Centroids
-------------------------------------------------

In this video, we explain how you can find the cluster centroids by using the function "tapply" for each variable in the dataset. While this approach works and is familiar to us, it can be a little tedious when there are a lot of variables. An alternative approach is to use the colMeans function. With this approach, you only have one command for each cluster instead of one command for each variable. If you run the following command in your R console, you can get all of the column (variable) means for cluster 1:

colMeans(subset(movies\[2:20\], clusterGroups == 1))

You can repeat this for each cluster by changing the clusterGroups number. However, if you also have a lot of clusters, this approach is not that much more efficient than just using the tapply function.

A more advanced approach uses the "split" and "lapply" functions. The following command will split the data into subsets based on the clusters:

spl = split(movies\[2:20\], clusterGroups)

Then you can use spl to access the different clusters, because

spl\[\[1\]\]

is the same as

subset(movies\[2:20\], clusterGroups == 1)

so colMeans(spl\[\[1\]\]) will output the centroid of cluster 1. But an even easier approach uses the lapply function. The following command will output the cluster centroids for all clusters:

lapply(spl, colMeans)

The lapply function runs the second argument (colMeans) on each element of the first argument (each cluster subset in spl). So instead of using 19 tapply commands, or 10 colMeans commands, we can output our centroids with just two commands: one to define spl, and then the lapply command.

Note that if you have a variable called "split" in your current R session, you will need to remove it with rm(split) so that you can use the split function.

In this video, we use the spreadsheet [ClusterMeans (ODS](https://open-learning-course-data-ci.s3.amazonaws.com/15-071-the-analytics-edge-spring-2017/f5d06b43b7c6dffc27552d12924b69ee_ClusterMeans.ods)). This file can be opened in LibreOffice or OpenOffice. 

*   [BackQuick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-466" %}})
*   [ContinueQuick Question]({{% getpage "courses/15-071-the-analytics-edge-spring-2017/sections/clustering/recommendations-worth-a-million-an-introduction-to-clustering/quick-question-476" %}})