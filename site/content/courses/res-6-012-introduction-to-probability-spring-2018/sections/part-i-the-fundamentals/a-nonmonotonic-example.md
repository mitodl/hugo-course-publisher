---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: uFx7fWujWsU
    parent_uid: 55876602aef5bdd8cb0a868d81de0174
    title: Video-YouTube-Stream
    type: Video
    uid: 7fad550e3c261c7001285f4d61a68e91
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/uFx7fWujWsU/default.jpg'
    parent_uid: 55876602aef5bdd8cb0a868d81de0174
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ffff93b513663146816f42ad59929573
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: uFx7fWujWsU
    parent_uid: 55876602aef5bdd8cb0a868d81de0174
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 667b6f0810e656ada78036f47b17e95f
  - id: uFx7fWujWsU.srt
    parent_uid: 55876602aef5bdd8cb0a868d81de0174
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-nonmonotonic-example/uFx7fWujWsU.srt
    title: 3play caption file
    type: null
    uid: ec27feebd46890c7487c469c895a7e2e
  - id: uFx7fWujWsU.pdf
    parent_uid: 55876602aef5bdd8cb0a868d81de0174
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-nonmonotonic-example/uFx7fWujWsU.pdf
    title: 3play pdf file
    type: null
    uid: 77887c3a72bd693ea6afc854e3af6c3c
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 55876602aef5bdd8cb0a868d81de0174
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 7f14bf2a011d0d9a90d95a849df894e4
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 55876602aef5bdd8cb0a868d81de0174
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f636ea0f7c363e3b9d57af140455e921
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L11-08_300k.mp4
    parent_uid: 55876602aef5bdd8cb0a868d81de0174
    title: Video-Internet Archive-MP4
    type: Video
    uid: 106d3b033f8d21f503164df0f9f3dfc3
inline_embed_id: 36646299anonmonotonicexample54578354
order_index: 1077
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: a-nonmonotonic-example
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-nonmonotonic-example
title: A Nonmonotonic Example
transcript: >-
  <p><span m='3240'>All of our examples so far have involved functions, g
  of</span> <span m='7040'>x, that are monotonic in X, at least over the</span>
  <span m='11050'>range of x's of interest.</span> </p><p><span m='13690'>Let us
  now look at an example that involves a</span> <span m='16320'>non-monotonic
  function.</span> </p><p><span m='18760'>We're going to consider the square
  function, which has the</span> <span m='23800'>shape shown in this
  diagram.</span> </p><p><span m='29530'>And we'll assume that X has a general
  distribution so that</span> <span m='33610'>it can take both positive and
  negative values.</span> </p><p><span m='37760'>And so over the range of values
  of X, the function that</span> <span m='41280'>we're dealing with is
  decreasing and then</span> <span m='44970'>increasing.</span> </p><p><span
  m='46030'>So it is not monotonic.</span> </p><p><span m='48000'>How can we
  find the distribution of Y?</span> </p><p><span m='51040'>As a warm-up, let's
  look at the discrete case.</span> </p><p><span m='54600'>And as an example of
  the calculation, let us find the</span> <span m='58100'>formula for the
  probability that the random variable Y</span> <span m='61670'>takes a value of
  9.</span> </p><p><span m='63550'>This event can happen in two ways.</span>
  </p><p><span m='66070'>It can happen if X is equal to 3.</span> </p><p><span
  m='70530'>But it can also happen if x is equal to negative 3.</span>
  </p><p><span m='76210'>And these are the two and only two ways that y can take
  a</span> <span m='81150'>value of 9.</span> </p><p><span m='82680'>We can
  generalize this calculation.</span> </p><p><span m='84900'>The probability
  that the random variable y takes on a</span> <span m='88060'>specific value
  little y, this probability can be found by</span> <span m='92720'>adding the
  probabilities of all of the different x's that</span> <span m='96539'>lead to
  this particular value.</span> </p><p><span m='98729'>Now, for X squared to be
  equal to little y, we need to have X</span> <span m='104150'>to be equal
  either to the positive square root of y or</span> <span m='109610'>to be equal
  to the negative square root of y.</span> </p><p><span m='115560'>And this is
  the general formula for the PMF of the</span> <span m='119750'>random variable
  Y. And it involves two terms, because</span> <span m='124900'>any given value
  of little y can happen in two ways, either</span> <span m='131790'>by having X
  equal to the negative square root of y or</span> <span m='138270'>by having X
  be equal to the positive square root of y.</span> </p><p><span m='145020'>We
  have here a situation where the function that we're</span> <span
  m='147920'>dealing with is not invertible.</span> </p><p><span m='151100'>For
  a given value of y, we cannot find a single value of</span> <span m='157510'>x
  that will lead to that y.</span> </p><p><span m='159829'>But instead, we
  typically have two values of x that lead to</span> <span m='164910'>that
  particular y, namely the positive and the negative</span> <span
  m='168350'>square roots of y.</span> </p><p><span m='171430'>So we cannot use
  the tools that we used before in the</span> <span m='175000'>monotonic case,
  where we dealt with the inverse function.</span> </p><p><span m='178870'>What
  we can do instead is to proceed from first principles</span> <span
  m='183330'>and calculate the CDF of the random variable Y. The CDF of</span>
  <span m='191860'>Y is the probability that the random variable is less
  than</span> <span m='195320'>or equal to a certain number.</span> </p><p><span
  m='198050'>And we're going to focus only on the case where that certain</span>
  <span m='201690'>number is non-negative.</span> </p><p><span m='204079'>If
  little y is negative, then we know that this probability</span> <span
  m='207900'>is going to be 0, because the random variable Y cannot take</span>
  <span m='212170'>negative values.</span> </p><p><span m='214840'>Now, this is
  the probability that the random variable X</span> <span m='218790'>squared is
  less than or equal to y.</span> </p><p><span m='221980'>So what we did here is
  to express this event in terms of</span> <span m='225960'>the original random
  variable, capital X, whose PDF is</span> <span m='229900'>presumably
  available.</span> </p><p><span m='232050'>Now, this event is the same as
  requiring the absolute value</span> <span m='237190'>of X to be less than or
  equal to the square root of y.</span> </p><p><span m='242160'>And this event,
  again, is the same as having the random</span> <span m='246950'>variable X be
  between the negative and the positive</span> <span m='252620'>square root of
  y.</span> </p><p><span m='255980'>In terms of a picture, the random variable
  capital Y</span> <span m='261100'>takes a value less than or equal to this
  particular</span> <span m='265130'>little y if and only if the random variable
  x falls inside</span> <span m='270990'>this range.</span> </p><p><span
  m='273580'>Now, we want to express this probability in terms of the</span>
  <span m='276770'>CDF of X. The probability that we're looking at, the</span>
  <span m='281890'>probability of this interval, is equal to the
  probability</span> <span m='287690'>that x is less than or equal to the square
  root of y.</span> </p><p><span m='293659'>This is the probability from minus
  infinity up to the</span> <span m='297000'>square root of y.</span>
  </p><p><span m='298480'>But from this, we need to subtract the probability
  of</span> <span m='301540'>this interval.</span> </p><p><span m='303690'>And
  that would be the CDF of the random variable x up to</span> <span
  m='309910'>the point [negative]</span> <span m='310770'>square root of
  y.</span> </p><p><span m='313040'>So we now have an expression for the CDF of
  Y in terms of</span> <span m='317010'>the CDF of X. At this point, now we can
  take derivatives</span> <span m='322650'>and use the chain rule.</span>
  </p><p><span m='325300'>The PDF of Y is going to be equal to the derivative
  of</span> <span m='330570'>this expression.</span> </p><p><span m='332480'>The
  derivative of the first term, by the chain rule, is</span> <span
  m='336550'>the PDF of X, evaluated at the square root of y times the</span>
  <span m='343080'>derivative of this argument with respect to y, which is
  1</span> <span m='348120'>over 2 square root of y.</span> </p><p><span
  m='352280'>And then we need the derivative of the second term.</span>
  </p><p><span m='355770'>We have a minus sign, then the derivative of the
  CDF</span> <span m='362230'>which is the PDF.</span> </p><p><span
  m='364070'>Evaluate it at minus square root of y.</span> </p><p><span
  m='367150'>And then the derivative of this term with respect to y,</span>
  <span m='371230'>which is minus 1 over two square root of y.</span>
  </p><p><span m='382340'>Now, we have a minus sign here and a minus sign
  there.</span> </p><p><span m='386030'>So the two cancel out.</span>
  </p><p><span m='388880'>We can get rid of this minus 1 term and change this
  minus</span> <span m='393720'>into a plus.</span> </p><p><span m='395020'>And
  this is the final form of the answer.</span> </p><p><span m='398390'>So we see
  that the PDF of Y evaluated at a particular</span> <span m='402730'>point,
  which tells us something about the</span> <span m='404520'>probability that
  the random variable takes values around</span> <span m='408620'>this point,
  has to do with the probabilities that the random</span> <span
  m='412490'>variable X takes values around here or around there.</span>
  </p><p><span m='418796'>There are two contributions, and this is because there
  are</span> <span m='423080'>two different ways that a value of y may occur,
  either X</span> <span m='429340'>falling here or X falling there.</span>
  </p><p></p>
uid: 55876602aef5bdd8cb0a868d81de0174
type: course
layout: video
---
