---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: wnts35dE1Sg
    parent_uid: c1221d1d31a5e301b53c426fcab86a6e
    title: Video-YouTube-Stream
    type: Video
    uid: 1bef0f70ae7149db18d60158f0de4f78
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/wnts35dE1Sg/default.jpg'
    parent_uid: c1221d1d31a5e301b53c426fcab86a6e
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ad3b4c321785ca2ce074e3606ed3e522
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: wnts35dE1Sg
    parent_uid: c1221d1d31a5e301b53c426fcab86a6e
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 76ee0b203d76b01cd36c446fb4a3b7ee
  - id: wnts35dE1Sg.srt
    parent_uid: c1221d1d31a5e301b53c426fcab86a6e
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/inference-of-the-bias-of-a-coin/wnts35dE1Sg.srt
    title: 3play caption file
    type: null
    uid: 1d047d54764a15ef35d6dac71e366aa8
  - id: wnts35dE1Sg.pdf
    parent_uid: c1221d1d31a5e301b53c426fcab86a6e
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/inference-of-the-bias-of-a-coin/wnts35dE1Sg.pdf
    title: 3play pdf file
    type: null
    uid: f1074bbe4e918632cae474e7c41ef45b
  - id: Caption-3Play YouTube id-SRT
    parent_uid: c1221d1d31a5e301b53c426fcab86a6e
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 135db2a1ba8bcb477391ae4f51e800c0
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: c1221d1d31a5e301b53c426fcab86a6e
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: aea8065045cab6364675b785972cd20d
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L10-11_300k.mp4
    parent_uid: c1221d1d31a5e301b53c426fcab86a6e
    title: Video-Internet Archive-MP4
    type: Video
    uid: a863962237b2114c36ea49b3e0e2fa41
inline_embed_id: 17686170inferenceofthebiasofacoin33546346
order_index: 1005
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: inference-of-the-bias-of-a-coin
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/inference-of-the-bias-of-a-coin
title: Inference of the Bias of a Coin
transcript: >-
  <p><span m="1150">We now look at an application of the Bayes rule
  that's</span> <span m="3900">involves a continuous unknown random variable,
  which we try</span> <span m="8039">to estimate based on a discrete
  measurement.</span></p><p><span m="11730">Our model will be as
  follows.</span></p><p><span m="14120">We observe the discrete random variable
  K, which is</span> <span m="17790">Bernoulli, so it can take two values, 1 or
  0.</span></p><p><span m="22870">And it takes those values with probabilities y
  and 1 minus y,</span> <span m="27010">respectively.</span></p><p><span
  m="27740">This is our model of K. The catch is that the value of y</span>
  <span m="32750">is not known.</span></p><p><span m="34110">And it is modeled
  as a random variable by itself.</span></p><p><span m="38710">You can think of
  a situation where we are dealing with a</span> <span m="41970">single coin
  flip.</span></p><p><span m="43390">We observe the outcome of the coin
  flip,</span> <span m="46250">but the coin is biased.</span></p><p><span
  m="48260">The probability of heads is some unknown number,
  y.</span></p><p><span m="52090">And we try to infer or say something about the
  bias of</span> <span m="56290">the coin on the basis of the observation that
  we have made.</span></p><p><span m="60290">So what do we assume about this y
  or</span> <span m="63350">the bias of the coin?</span></p><p><span
  m="65950">If we know nothing about this random variable, we might as</span>
  <span m="68850">well model it as a uniform random</span> <span
  m="71300">variable on the unit interval.</span></p><p><span m="74350">And the
  question now is, given that we made one observation</span> <span m="78510">and
  the outcome was 1, what can we say about the</span> <span
  m="83400">probability distribution of Y given this particular</span> <span
  m="87010">information?</span></p><p><span m="89340">So the question that we're
  asking is, what we can tell</span> <span m="92350">about the density of Y
  given that the value</span> <span m="98180">of 1 has been
  observed.</span></p><p><span m="102170">The way to approach this problem is by
  using a version</span> <span m="105740">of the Bayes rule.</span></p><p><span
  m="107930">We want to calculate this quantity for the special case</span>
  <span m="112030">where k is equal to 1.</span></p><p><span m="116470">So let
  us calculate the various pieces on the right</span> <span m="120060">hand side
  of this equation.</span></p><p><span m="121990">The first piece is the density
  of Y. This is the prior</span> <span m="125570">density before we obtain any
  measurement.</span></p><p><span m="128389">And since the random variable is
  uniform, this is equal to 1</span> <span m="132750">for y in the unit
  interval.</span></p><p><span m="137760">And of course, it is 0
  otherwise.</span></p><p><span m="146329">The next piece that we need is the
  distribution of K given</span> <span m="151195">the value of Y. Well, given Y,
  K takes a value of 1, with</span> <span m="158550">probability equal to
  Y--</span> <span m="161350">so the probability of 1, if we're told the value
  of y is</span> <span m="165350">just a y itself.</span></p><p><span
  m="166890">y is the bias of the coin that we're dealing
  with.</span></p><p><span m="171770">The next term that we need is the
  denominator.</span></p><p><span m="176410">We will use this
  formula.</span></p><p><span m="178460">It is the integral of the density of
  Y,</span> <span m="183070">which is equal to 1.</span></p><p><span
  m="184910">And it is equal to 1 only on the range from 0 to 1, times</span>
  <span m="190330">this probability that K takes a value, a certain
  value.</span></p><p><span m="196430">In this case, we're dealing with a value
  of 1, so here</span> <span m="199770">we're going to put 1 instead of
  k.</span></p><p><span m="203640">And therefore, we're dealing with this
  expression here,</span> <span m="206310">which is just y.</span></p><p><span
  m="208180">And we integrated over y's.</span></p><p><span m="211200">So this
  is y squared over 2, evaluated at 0 and 1, which</span> <span m="217690">gives
  us 1/2.</span></p><p><span m="220220">So this is the unconditional probability
  that</span> <span m="222850">K is equal to 1.</span></p><p><span m="224140">If
  we know nothing about Y, by symmetry, higher biases are</span> <span
  m="228920">equally likely as lower biases.</span></p><p><span m="231230">So we
  should expect that it's equally likely to give us a 1</span> <span
  m="235760">as it is to give us a 0.</span></p><p><span m="238130">Now, we have
  in our hands all the pieces that go into this</span> <span
  m="241470">particular formula.</span></p><p><span m="242940">And we can go
  ahead with the final calculation.</span></p><p><span m="245920">So in the
  numerator, we have 1 times this term, evaluated at</span> <span m="253180">k
  equal to 1, which is equal to y.</span></p><p><span m="256890">And then in the
  denominator, we have a term that</span> <span m="259810">evaluates to
  1/2.</span></p><p><span m="261950">So the final answer is
  2y.</span></p><p><span m="265110">Over what range of y's is this
  correct?</span></p><p><span m="268520">Only for those y's that are
  possible.</span></p><p><span m="270800">So this is for y's in the unit
  interval.</span></p><p><span m="276409">If we are to plot this PDF, it has
  this shape.</span></p><p><span m="286620">This is a plot of the PDF of Y given
  that the random variable</span> <span m="292820">K takes on a value of
  1.</span></p><p><span m="295990">Initially, we started with a uniform for Y.
  So all values</span> <span m="301090">of Y were equally
  likely.</span></p><p><span m="305370">But once we observed an outcome of 1,
  this tells us</span> <span m="312920">that perhaps Y is on the higher
  end</span> <span m="318410">rather than lower end.</span></p><p><span
  m="320180">So after we obtain our observation, the random</span> <span
  m="323390">variable Y has this distribution, with higher</span> <span
  m="326840">values being more likely than lower values.</span></p><p><span
  m="330640">This example is a prototype of situations where we want to</span>
  <span m="333960">estimate a continuous random variable based on
  discrete</span> <span m="337210">measurements.</span></p><p><span
  m="338690">Essentially it is the same as trying to estimate the bias of</span>
  <span m="342020">a coin based on a single measurement of the</span> <span
  m="346820">result of a coin flip.</span></p><p><span m="348860">As you can
  imagine, there are generalizations in which we</span> <span m="352070">observe
  multiple coin flips.</span></p><p><span m="354950">And this is an example that
  we will see</span> <span m="357040">later on in this
  class.</span></p><p>&nbsp;</p>
uid: c1221d1d31a5e301b53c426fcab86a6e
type: courses
layout: video
---
