---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: K2Tlj27nkjs
    parent_uid: 623f4b9ff9c569e189f19e00be7138ba
    title: Video-YouTube-Stream
    type: Video
    uid: 235c22bf43734f28299034814a86f6d2
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/K2Tlj27nkjs/default.jpg'
    parent_uid: 623f4b9ff9c569e189f19e00be7138ba
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 584aafb81ec1dd3cc49779c3bbbaf51f
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: K2Tlj27nkjs
    parent_uid: 623f4b9ff9c569e189f19e00be7138ba
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 895175077edd298f081c86acff182846
  - id: K2Tlj27nkjs.srt
    parent_uid: 623f4b9ff9c569e189f19e00be7138ba
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/covariance/K2Tlj27nkjs.srt
    title: 3play caption file
    type: null
    uid: 762a4882e6db02d13dd4d9c92afec4d8
  - id: K2Tlj27nkjs.pdf
    parent_uid: 623f4b9ff9c569e189f19e00be7138ba
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/covariance/K2Tlj27nkjs.pdf
    title: 3play pdf file
    type: null
    uid: f93968a4cc15ad91d90228ac8bb80d1d
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 623f4b9ff9c569e189f19e00be7138ba
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 92cbbd81a581a6c2ba29d9f569f994c2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 623f4b9ff9c569e189f19e00be7138ba
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 4bda8fa0cbb131db3e8ff77daded29f9
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L12-05_300k.mp4
    parent_uid: 623f4b9ff9c569e189f19e00be7138ba
    title: Video-Internet Archive-MP4
    type: Video
    uid: d6c41f2adf2ca04d902024f384ab34ea
inline_embed_id: 40902329covariance47425342
order_index: 1131
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: covariance
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/covariance
title: Covariance
transcript: >-
  <p><span m='740'>In this segment we start a new topic.</span> </p><p><span
  m='2770'>We will talk about the covariance of two random</span> <span
  m='5180'>variables, which gives us useful information about the</span> <span
  m='8430'>dependencies between these two random variables.</span> </p><p><span
  m='11720'>Let us motivate the concept by looking first</span> <span
  m='14110'>at a special case.</span> </p><p><span m='15600'>Suppose that X and
  Y have zero means and that they there are</span> <span m='18690'>discrete
  random variables.</span> </p><p><span m='20870'>If X and Y are independent,
  then the expectation of the</span> <span m='24690'>product is the product of
  the expectations.</span> </p><p><span m='28880'>And since we have assumed zero
  means, this is going to be</span> <span m='32100'>equal to zero.</span>
  </p><p><span m='33830'>But suppose instead that the joint PMF of X and Y is of
  the</span> <span m='39190'>following kind.</span> </p><p><span m='40990'>Each
  point in this diagram is equally likely, so we have</span> <span
  m='45080'>here a discrete uniform distribution on the discrete</span> <span
  m='49600'>set which consists of the points shown in this diagram.</span>
  </p><p><span m='55100'>What we have in this particular example is that
  at</span> <span m='58330'>most outcomes, positive values of X tend to go
  together with</span> <span m='62610'>positive values of Y. And negative values
  of X tend to</span> <span m='66970'>go together with negative values of Y. So
  most of the</span> <span m='71100'>time we have outcomes in this quadrant, in
  which x times y</span> <span m='75039'>is positive, or in this quadrant where
  x times y is,</span> <span m='78950'>again, positive.</span> </p><p><span
  m='80210'>But some of the time we fall in this quadrant where x times</span>
  <span m='84190'>y is negative, or in this quadrant where</span> <span
  m='86410'>x times y is negative.</span> </p><p><span m='88830'>Since we have
  many more points here and here, on the average,</span> <span m='92940'>the
  value of x times y is going to be positive.</span> </p><p><span m='101350'>On
  the other hand, if the diagram takes this form, then,</span> <span
  m='105990'>most of the time, the pair x, y lies in this quadrant or in</span>
  <span m='110140'>that quadrant where the product of</span> <span m='111870'>x
  times y is negative.</span> </p><p><span m='114280'>So the random variables X
  and Y typically have opposite</span> <span m='117300'>signs, and on the
  average, the expected value of X times Y is</span> <span m='122950'>going to
  be negative.</span> </p><p><span m='126170'>So here we have a positive
  expectation, here we have a</span> <span m='129530'>negative expectation of X
  times Y. This quantity, the</span> <span m='134110'>expected value of X times
  Y, tells us whether X and Y tend</span> <span m='138300'>to move in the same
  or in opposite directions.</span> </p><p><span m='142579'>And this quantity is
  what we call the covariance, in the</span> <span m='145860'>zero mean
  case.</span> </p><p><span m='148420'>Let us now generalize.</span>
  </p><p><span m='150329'>The random variables do not have to be
  discrete.</span> </p><p><span m='153260'>This quantity is well defined for
  any</span> <span m='155430'>kind of random variables.</span> </p><p><span
  m='157900'>And if we have non-zero means, the covariance is defined by</span>
  <span m='163040'>this expression.</span> </p><p><span m='166100'>What we have
  here is that we look at the deviation of X</span> <span m='170829'>from its
  mean value, and the deviation of Y from its mean</span> <span
  m='175240'>value, and we're asking whether these two deviations</span> <span
  m='179720'>tend to have the same sign or not, whether they move in the</span>
  <span m='183170'>same direction or not.</span> </p><p><span m='185370'>If the
  covariance is positive, what it tells us is that</span> <span
  m='188930'>whenever this quantity is positive so that X is above</span> <span
  m='192210'>its mean, then, typically or usually, the deviation of Y</span>
  <span m='198410'>from its mean will also tend to be positive.</span>
  </p><p><span m='202600'>To summarize, the covariance, in general, tells us
  whether</span> <span m='206160'>two random variables tend to move together,
  both being high</span> <span m='211470'>or both being low, in some average or
  typical sense.</span> </p><p><span m='217160'>Now, if the two random variables
  are independent, we</span> <span m='220140'>already saw that in the zero mean
  case, this quantity--</span> <span m='224160'>the covariance--</span> <span
  m='225100'>is going to be 0.</span> </p><p><span m='226550'>How about the case
  where we have non-zero means?</span> </p><p><span m='230570'>Well, if we have
  independence, then we have the expected</span> <span m='236620'>value of the
  product of two random variables.</span> </p><p><span m='238720'>X and Y are
  independent, so X minus the expected value,</span> <span m='243540'>which is a
  constant, is going to be independent from Y minus</span> <span m='246710'>its
  expected value.</span> </p><p><span m='248920'>And so, the covariance is going
  to be the product of two</span> <span m='252520'>expectations.</span>
  </p><p><span m='265220'>But the expected value of X minus this constant is 0,
  and</span> <span m='270590'>the same is true for this term as well.</span>
  </p><p><span m='274120'>So the covariance in this case is going to be equal to
  0.</span> </p><p><span m='280340'>So in the independent case, we have zero
  covariances.</span> </p><p><span m='284790'>On the other hand, the converse is
  not true.</span> </p><p><span m='288570'>There are examples in which we have
  dependence but zero</span> <span m='294085'>covariance.</span> </p><p><span
  m='295640'>Here is one example.</span> </p><p><span m='297140'>In this example
  there are four possible outcomes.</span> </p><p><span m='301580'>At any
  particular outcome, either X or Y</span> <span m='305800'>is going to be
  0.</span> </p><p><span m='307430'>So in this example the random variable X
  times Y is</span> <span m='311150'>identically equal to 0.</span> </p><p><span
  m='313200'>The mean of X is also 0, the mean of Y is also 0 by</span> <span
  m='316940'>symmetry, so the covariance is the expected</span> <span
  m='319230'>value of this quantity.</span> </p><p><span m='320780'>And so the
  covariance, in this example, is equal to 0.</span> </p><p><span m='325160'>On
  the other hand, the two random variables,</span> <span m='327810'>X and Y, are
  dependent.</span> </p><p><span m='330380'>If I tell you that X is equal to 1,
  then you know that this</span> <span m='335300'>outcome has occurred.</span>
  </p><p><span m='338460'>And in that case, you are certain that Y is equal to
  0.</span> </p><p><span m='344010'>So knowing the value of X tells you a lot
  about the</span> <span m='347070'>value of Y and, therefore, we have
  dependence between these</span> <span m='351440'>two random variables.</span>
  </p><p></p>
uid: 623f4b9ff9c569e189f19e00be7138ba
type: course
layout: video
---
