---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: k9f0N3ADvdM
    parent_uid: d762899ccad56318432d2a3c821c2e91
    title: Video-YouTube-Stream
    type: Video
    uid: 60c3e65501d562c507e7b0f9094b33af
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/k9f0N3ADvdM/default.jpg'
    parent_uid: d762899ccad56318432d2a3c821c2e91
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: fcb7d77d9d92c6cf00f78bfb1afd1fd3
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: k9f0N3ADvdM
    parent_uid: d762899ccad56318432d2a3c821c2e91
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 62c776589c8f152b259c4a91c3c6ffcd
  - id: k9f0N3ADvdM.srt
    parent_uid: d762899ccad56318432d2a3c821c2e91
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/solution-to-the-llms-problem/k9f0N3ADvdM.srt
    title: 3play caption file
    type: null
    uid: 134f87a1ab2fd1ae265a37769e78a327
  - id: k9f0N3ADvdM.pdf
    parent_uid: d762899ccad56318432d2a3c821c2e91
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/solution-to-the-llms-problem/k9f0N3ADvdM.pdf
    title: 3play pdf file
    type: null
    uid: 0aec2bbbaf1c0716b0ed2f720cb63be7
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d762899ccad56318432d2a3c821c2e91
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a497615d0485b0d6a2144666808b0317
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d762899ccad56318432d2a3c821c2e91
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b0f8882a4f1f3743d71a4c1f42971da6
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L17-03_300k.mp4
    parent_uid: d762899ccad56318432d2a3c821c2e91
    title: Video-Internet Archive-MP4
    type: Video
    uid: c840a3959ac52de3845ef9cff07271af
inline_embed_id: 85293932solutiontothellmsproblem61652549
order_index: 1624
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: solution-to-the-llms-problem
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/solution-to-the-llms-problem
title: Solution to the LLMS Problem
transcript: >-
  <p><span m='820'>We will now develop the solution to the linear least</span>
  <span m='4100'>mean squares estimation problem.</span> </p><p><span
  m='6910'>We want to find coefficients a and b</span> <span m='9630'>that make
  this expression, this mean squared error,</span> <span m='12970'>as small as
  possible.</span> </p><p><span m='14640'>We will approach this problem by
  proceeding in two stages.</span> </p><p><span m='18200'>In the first stage, we
  assume that the choice of a</span> <span m='22290'>has already been found and
  concentrate</span> <span m='25080'>on the question of choosing b.</span>
  </p><p><span m='27470'>Now if a has been found and has been</span> <span
  m='30310'>fixed to a specific number, then this quantity</span> <span
  m='33520'>here is a specific random variable.</span> </p><p><span
  m='36400'>And what do we have?</span> </p><p><span m='38090'>We have a random
  variable minus a constant.</span> </p><p><span m='40930'>And we want to choose
  that constant,</span> <span m='42760'>so that this difference squared is as
  small as possible</span> <span m='47100'>in the expected value sense.</span>
  </p><p><span m='49180'>So essentially, we're trying to choose a constant b
  that</span> <span m='52750'>estimates this random variable in the best
  possible way.</span> </p><p><span m='56740'>But this is a problem that's
  familiar to us,</span> <span m='59040'>and we know that the best choice of
  b</span> <span m='61830'>is equal to the expected value of that random
  variable.</span> </p><p><span m='66020'>And using also linearity, this
  expected value</span> <span m='69630'>can be written in this form.</span>
  </p><p><span m='73070'>So if we know a, this is how b should be chosen.</span>
  </p><p><span m='78020'>Let us now move on to the choice of a.</span>
  </p><p><span m='82840'>Since we know what b should be equal to,</span> <span
  m='86930'>we can rewrite this expression that we're</span> <span
  m='90250'>trying to minimize by substituting our choice of b,</span> <span
  m='95130'>which is the expected value of Theta minus aX.</span> </p><p><span
  m='103229'>And this is the quantity we want to minimize.</span> </p><p><span
  m='105590'>What is it?</span> </p><p><span m='106660'>We have a random
  variable minus the expected value</span> <span m='109430'>of that random
  variable squared.</span> </p><p><span m='111259'>And then we take expected
  value.</span> </p><p><span m='113110'>This is just the variance of the random
  variable Theta minus aX.</span> </p><p><span m='120620'>This is the variance
  of the difference</span> <span m='122680'>of two random variables.</span>
  </p><p><span m='124660'>Because the two random variables are dependent,</span>
  <span m='127550'>this is not just the sum of the individual variances.</span>
  </p><p><span m='131640'>But we do have a formula, even for the general
  case.</span> </p><p><span m='135630'>And the formula tells us that the
  variance</span> <span m='138720'>of the difference of two random
  variables</span> <span m='140780'>is the variance of the first random
  variable</span> <span m='144010'>plus the variance of the second.</span>
  </p><p><span m='146420'>And when we pull a outside the variance,</span> <span
  m='149170'>that gives us a contribution of a squared.</span> </p><p><span
  m='153000'>And then we have a cross-term.</span> </p><p><span
  m='155400'>Because of the minus sign here, the cross-term</span> <span
  m='157680'>will have a minus sign.</span> </p><p><span m='159329'>We have a
  factor of 2.</span> </p><p><span m='161600'>And then we want the covariance of
  Theta with aX.</span> </p><p><span m='166120'>And because we have seen that
  covariances behave</span> <span m='169390'>in a linear manner, we can pull a
  outside the covariance.</span> </p><p><span m='173270'>And this is what we are
  left with.</span> </p><p><span m='175940'>This is the quantity we want to
  optimize with respect to a.</span> </p><p><span m='179710'>And to do this
  optimization, we just</span> <span m='182570'>set the derivative with respect
  to a to 0.</span> </p><p><span m='187320'>And that's going to give us 2a times
  the variance of X</span> <span m='193180'>minus twice the covariance of Theta
  with X, equal to 0.</span> </p><p><span m='199850'>From which it follows that
  a should</span> <span m='202460'>be equal to the covariance of Theta</span>
  <span m='205310'>with X divided by the variance of X.</span> </p><p><span
  m='211670'>So we have found what a should be.</span> </p><p><span
  m='214140'>Once we know what a is, we know what b should be equal to.</span>
  </p><p><span m='218110'>So we have solved the problem.</span> </p><p><span
  m='220079'>And here's the form of the solution.</span> </p><p><span
  m='223030'>This coefficient here is the coefficient a.</span> </p><p><span
  m='228050'>So we have here the term aX.</span> </p><p><span m='230990'>And
  then this term together with a times the expected value</span> <span
  m='235940'>of X, this corresponds to the coefficient b.</span> </p><p><span
  m='241290'>It's also instructive to rewrite this solution</span> <span
  m='244070'>in a slightly different form involving the correlation</span> <span
  m='247460'>coefficient.</span> </p><p><span m='248870'>Recall that the
  correlation coefficient between two</span> <span m='251930'>random variables
  is defined as the covariance between the two</span> <span m='256730'>random
  variables divided by the product</span> <span m='260350'>of their standard
  deviations.</span> </p><p><span m='263560'>Using this relation, we can now
  write the coefficient a</span> <span m='267340'>as the covariance which is who
  times sigma Theta sigma</span> <span m='274060'>X divided by the variance of
  X, which is sigma X squared.</span> </p><p><span m='281430'>And after we
  cancel a factor of sigma X from the numerator</span> <span m='284920'>and the
  denominator, we see that a is also</span> <span m='288640'>equal to rho times
  sigma Theta divided by sigma X.</span> </p><p><span m='292640'>And this gives
  us this alternative form</span> <span m='295190'>for the solution.</span>
  </p><p><span m='297470'>What we will be doing next will be to interpret this
  solution</span> <span m='301360'>and also to give a number of examples.</span>
  </p><p></p>
uid: d762899ccad56318432d2a3c821c2e91
type: courses
layout: video
---
