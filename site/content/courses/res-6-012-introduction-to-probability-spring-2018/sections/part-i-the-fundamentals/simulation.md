---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: yvHu34mEXzk
    parent_uid: f353703a541c9e2e4c6eb69138ec59ee
    title: Video-YouTube-Stream
    type: Video
    uid: 00add7612898ef05948b0db23293cb4f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/yvHu34mEXzk/default.jpg'
    parent_uid: f353703a541c9e2e4c6eb69138ec59ee
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 800cdabda41d092a3dd6fe0d55733c52
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: yvHu34mEXzk
    parent_uid: f353703a541c9e2e4c6eb69138ec59ee
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: d14911055b6c507bc12d6b57ec80823f
  - id: yvHu34mEXzk.srt
    parent_uid: f353703a541c9e2e4c6eb69138ec59ee
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/simulation/yvHu34mEXzk.srt
    title: 3play caption file
    type: null
    uid: 3512f8fe0badbd61433c0ad082db6e0b
  - id: yvHu34mEXzk.pdf
    parent_uid: f353703a541c9e2e4c6eb69138ec59ee
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/simulation/yvHu34mEXzk.pdf
    title: 3play pdf file
    type: null
    uid: 63857c0c2d83d09f219a6f745beaa557
  - id: Caption-3Play YouTube id-SRT
    parent_uid: f353703a541c9e2e4c6eb69138ec59ee
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: eca3ab95218152946e7f061a4c157c59
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: f353703a541c9e2e4c6eb69138ec59ee
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 2e94a172ba500d2a33966947e9fdb324
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_S11-01_300k.mp4
    parent_uid: f353703a541c9e2e4c6eb69138ec59ee
    title: Video-Internet Archive-MP4
    type: Video
    uid: 8f7ea5fc286b3ad8a84cf9680f2e15ae
inline_embed_id: 75202677simulation38436211
order_index: 1194
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: simulation
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/simulation
title: Simulation
transcript: >-
  <p><span m='2220'>Simulation is an important tool in the analysis</span> <span
  m='5530'>of probabilistic phenomena.</span> </p><p><span m='8830'>For example,
  suppose that X, Y, and Z</span> <span m='12310'>are independent random
  variables,</span> <span m='14760'>and you're interested in the statistical
  properties</span> <span m='17580'>of this random variable.</span> </p><p><span
  m='20400'>Perhaps you can find the distribution</span> <span m='22660'>of this
  random variable by solving a derived distribution</span> <span
  m='26300'>problem, but sometimes this is impossible.</span> </p><p><span
  m='29210'>And in such cases, what you do is,</span> <span m='32049'>you
  generate random samples of these random variables</span> <span m='37230'>drawn
  according to their distributions,</span> <span m='39850'>and then evaluate the
  function g on that random sample.</span> </p><p><span m='45450'>And this gives
  you one sample value of this function.</span> </p><p><span m='49120'>And you
  can repeat that several times</span> <span m='51400'>to obtain some kind of
  histogram and from that,</span> <span m='54070'>get some understanding about
  the statistical properties</span> <span m='56690'>of this function.</span>
  </p><p><span m='58160'>So the question is, how can we generate a random
  sample</span> <span m='62330'>of a random variable whose distribution is
  known?</span> </p><p><span m='66300'>So what we want is to create some kind of
  box</span> <span m='70230'>that outputs numbers.</span> </p><p><span
  m='72789'>And these numbers are random variables</span> <span m='75300'>that
  are distributed according to a CDF that's given to us.</span> </p><p><span
  m='81580'>How can we do it?</span> </p><p><span m='83270'>Well, computers
  typically have a random number generator</span> <span m='88010'>in
  them.</span> </p><p><span m='89640'>And random number generators, typically
  what they do</span> <span m='93650'>is generate values that are drawn</span>
  <span m='97729'>from a uniform distribution.</span> </p><p><span m='102160'>So
  this gives us a starting point.</span> </p><p><span m='104580'>We can generate
  uniform random variables.</span> </p><p><span m='107640'>But what we want is
  to generate values of a random variable</span> <span m='111060'>according to
  some other distribution.</span> </p><p><span m='112940'>How are we going to do
  it?</span> </p><p><span m='114890'>What we want to do is to create some kind
  of box or function</span> <span m='120770'>that takes this uniform random
  variable and generates g of U.</span> </p><p><span m='127870'>And we want to
  find the right function to use.</span> </p><p><span m='133610'>Find a g so
  that the random variable, g of U,</span> <span m='140190'>is distributed
  according to the distribution that we want.</span> </p><p><span
  m='143860'>That is, we want the CDF of g of U</span> <span m='146520'>to be
  the CDF that's given to us.</span> </p><p><span m='149940'>So let's see how we
  can do this.</span> </p><p><span m='155130'>Let us look at the discrete case
  first, which is easier.</span> </p><p><span m='159310'>And let us look at an
  example.</span> </p><p><span m='161780'>So suppose that I want to generate
  samples</span> <span m='166700'>of a discrete random variable that has the
  following PMF.</span> </p><p><span m='171160'>It takes this value with
  probability 2/6,</span> <span m='173920'>this value with probability 3/6, and
  this value</span> <span m='178050'>with probability 1/6.</span> </p><p><span
  m='180800'>What I have is a uniform random variable</span> <span
  m='185930'>that's drawn from a uniform distribution.</span> </p><p><span
  m='190500'>What can I do?</span> </p><p><span m='193100'>I can do the
  following.</span> </p><p><span m='195090'>Let this number here be 2/6.</span>
  </p><p><span m='199579'>If my uniform random variable falls</span> <span
  m='202420'>in this range, which happens with probability 2/6,</span> <span
  m='207510'>I'm going to report this value for</span> <span m='210210'>my
  discrete random variable.</span> </p><p><span m='214390'>Then I take an
  interval of length 3/6,</span> <span m='218300'>which takes me to 5/6.</span>
  </p><p><span m='222860'>And if my uniform random variable falls in this
  range,</span> <span m='227500'>then I'm going to report that value</span>
  <span m='230470'>for my discrete random variable.</span> </p><p><span
  m='232700'>And finally, with probability 1/6,</span> <span m='236150'>my
  uniform random variable happens to fall in here.</span> </p><p><span
  m='239640'>And then I report that [value].</span> </p><p><span m='242810'>So
  clearly, the value that I'm reporting</span> <span m='245720'>has the correct
  probabilities.</span> </p><p><span m='247480'>I'm going to report this value
  with probability 2/6,</span> <span m='251180'>I'm going to report that value
  with probability 3/6,</span> <span m='255020'>and so on.</span> </p><p><span
  m='256190'>So this is how we can generate random samples</span> <span
  m='259100'>of a discrete distribution, starting</span> <span m='262010'>from a
  uniform random variable.</span> </p><p><span m='264460'>Let us now look at
  what we did in a somewhat different way.</span> </p><p><span m='270210'>This
  is the x-axis.</span> </p><p><span m='273650'>And let me plot the CDF of my
  discrete random variable.</span> </p><p><span m='279610'>So the CDF has a jump
  of 2/6, at a point which is equal to that.</span> </p><p><span m='288390'>Then
  it has another jump of size 3/6, which</span> <span m='292730'>takes us to 5/6
  at some other point.</span> </p><p><span m='297720'>And that point here
  corresponds to the location of that value.</span> </p><p><span m='301930'>And
  finally, it has another jump of 1/6</span> <span m='305600'>that takes us to
  1, at another point, that</span> <span m='308740'>corresponds to the third
  value.</span> </p><p><span m='313230'>And look now at this interval here from
  0 to 1.</span> </p><p><span m='318670'>And let us think as follows.</span>
  </p><p><span m='320630'>We have a uniform random variable</span> <span
  m='322910'>distributed between 0 to 1.</span> </p><p><span m='326140'>If my
  uniform random variable happens</span> <span m='328770'>to fall in this
  interval, I'm going to report that value.</span> </p><p><span m='334470'>If my
  uniform random variable happens</span> <span m='337930'>to fall in this
  interval, I'm going to report that value.</span> </p><p><span m='349320'>And
  finally, if my uniform falls in this interval,</span> <span m='354690'>I'm
  going to report that value.</span> </p><p><span m='358020'>We're doing exactly
  the same thing as before.</span> </p><p><span m='361030'>With probability 2/6,
  my uniform falls here.</span> </p><p><span m='365040'>And we report this value
  and so on.</span> </p><p><span m='368270'>So what's a graphical way of
  understanding</span> <span m='370840'>of what we're doing?</span> </p><p><span
  m='372480'>We're taking the CDF.</span> </p><p><span m='374430'>We generate a
  value of the uniform.</span> </p><p><span m='378120'>And then we move until we
  hit the CDF</span> <span m='382090'>and report the corresponding value of
  x.</span> </p><p><span m='385740'>It turns out that this recipe will
  also</span> <span m='388280'>work in the continuous case.</span> </p><p><span
  m='392860'>Let's see how this is done.</span> </p><p><span m='396830'>So let's
  assume that we have a CDF, which</span> <span m='400409'>is strictly
  monotonic.</span> </p><p><span m='404860'>So the picture would be as
  follows.</span> </p><p><span m='409540'>It's a CDF.</span> </p><p><span
  m='411300'>CDFs are monotonic, but here, we assume</span> <span
  m='413620'>that it is strictly monotonic.</span> </p><p><span m='416290'>And
  we also assume that it is continuous.</span> </p><p><span m='426060'>It
  doesn't have any jumps.</span> </p><p><span m='428690'>So this CDF starts at 0
  and rises, asymptotically, to 1.</span> </p><p><span m='436530'>What was the
  recipe that we were just discussing?</span> </p><p><span m='440480'>We
  generate a value for a uniform random variable.</span> </p><p><span
  m='448110'>We move until we hit the CDF, and then report this value
  here</span> <span m='456440'>for x.</span> </p><p><span m='458870'>So what is
  it that we're doing?</span> </p><p><span m='460480'>We're going from u's to
  x's.</span> </p><p><span m='463440'>So we're using the inverse
  function.</span> </p><p><span m='468100'>The cumulative takes as an input an
  x,</span> <span m='472100'>a value on this axis, and then reports, a value on
  that axis.</span> </p><p><span m='477400'>The inverse function is the
  function</span> <span m='479400'>that goes the opposite way.</span>
  </p><p><span m='481350'>We start from a value on the vertical axis</span>
  <span m='483850'>and takes us to the horizontal axis.</span> </p><p><span
  m='488030'>Now, the important thing is that because of our assumption</span>
  <span m='490620'>that f is continuous and strictly monotonic,</span> <span
  m='494450'>this inverse function is well-defined.</span> </p><p><span
  m='497920'>Given any point here, we can always</span> <span m='500020'>find
  one and only one corresponding x.</span> </p><p><span m='506720'>Now, what are
  the properties of this method</span> <span m='509480'>that we have been
  using?</span> </p><p><span m='511910'>If I take some number c and then take
  the corresponding number</span> <span m='519010'>up here, which is going to be
  F_X of c,</span> <span m='525620'>then we have the following property.</span>
  </p><p><span m='529020'>My random variable X is going to be</span> <span
  m='533120'>less than or equal to c if and only</span> <span m='536235'>if my
  random variable X falls into this interval.</span> </p><p><span m='541160'>But
  that's equivalent to saying that the uniform random</span> <span
  m='549680'>variable fell in that interval.</span> </p><p><span
  m='552760'>Values of the uniform in this interval-- these</span> <span
  m='556180'>are the values that give me x's that are</span> <span
  m='559600'>less than or equal to c.</span> </p><p><span m='562370'>So the
  event that X is less than or equal to c</span> <span m='566270'>is identical
  to the event that U is less than</span> <span m='570990'>or equal to F_X of
  c.</span> </p><p><span m='574410'>So this is how I am generating my x's based
  on u's.</span> </p><p><span m='579260'>We now need to verify that the x's that
  I'm generating</span> <span m='582400'>this way have the correct property,
  have the correct CDF.</span> </p><p><span m='587110'>So let's check it
  out.</span> </p><p><span m='589850'>The probability that X is less than or
  equal to c, this</span> <span m='595240'>is the probability that U is less
  than or equal to F_X of c.</span> </p><p><span m='603230'>But U is a uniform
  random variable.</span> </p><p><span m='605640'>The probability of being less
  than something</span> <span m='608050'>is just that something.</span>
  </p><p><span m='611250'>So we have verified that with this way of
  constructing</span> <span m='616530'>samples of X based on samples of
  U,</span> <span m='619650'>the random variable that we get has the desired
  CDF.</span> </p><p><span m='626950'>Let's look at an example now.</span>
  </p><p><span m='629340'>Suppose that we want to generate samples</span> <span
  m='632010'>of a random variable, which is an exponential random
  variable,</span> <span m='636710'>with parameter 1.</span> </p><p><span
  m='638720'>In this case, we know what the CDF is.</span> </p><p><span
  m='641770'>The CDF of an exponential with parameter 1 is given by this</span>
  <span m='647600'>formula, for non-negative x's.</span> </p><p><span
  m='654110'>Now, let us find the inverse function.</span> </p><p><span
  m='661080'>If a u corresponds to 1 minus e to the minus x--</span> <span
  m='668180'>so we started with some x here and we find the corresponding</span>
  <span m='672870'>u-- this is the formula that takes us from x's to u's.</span>
  </p><p><span m='677970'>Let's find the formula that takes us from u's to
  x's.</span> </p><p><span m='681990'>So we need to solve this equation.</span>
  </p><p><span m='684910'>Let's send u to the other side, and let's</span> <span
  m='687910'>send this term to the left hand side.</span> </p><p><span
  m='690610'>We obtain e to the minus x equals 1 minus u.</span> </p><p><span
  m='695750'>Let us take logarithms: minus x equals to the logarithm</span>
  <span m='701060'>of 1 minus u.</span> </p><p><span m='703530'>And finally, x
  is equal to minus the logarithm of 1 minus u.</span> </p><p><span
  m='711600'>So this is the inverse function.</span> </p><p><span m='714850'>And
  now, what we have discussed leads us</span> <span m='718510'>to the following
  procedure.</span> </p><p><span m='720590'>I generate a random variable, U,
  according</span> <span m='723870'>to the uniform distribution.</span>
  </p><p><span m='725920'>Then I form the random variable X</span> <span
  m='729420'>by taking the negative of the logarithm of 1 minus U.</span>
  </p><p><span m='735750'>And this gives me a random variable,</span> <span
  m='740010'>which has an exponential distribution.</span> </p><p><span
  m='742430'>And so we have found a way of simulating</span> <span
  m='745710'>exponential random variables, starting with a random number</span>
  <span m='749590'>generator that produces uniform random variables.</span>
  </p><p></p>
uid: f353703a541c9e2e4c6eb69138ec59ee
type: course
layout: video
---
