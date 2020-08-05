---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: mImHCY0A3a0
    parent_uid: b16a392ff20ffe2c46855618932ee6f4
    title: Video-YouTube-Stream
    type: Video
    uid: 62f7fd13c0669112668193f57de268cc
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/mImHCY0A3a0/default.jpg'
    parent_uid: b16a392ff20ffe2c46855618932ee6f4
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 430b5c77eecc112ac65adab6c5aff664
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: mImHCY0A3a0
    parent_uid: b16a392ff20ffe2c46855618932ee6f4
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4c1872b5639c6e2e20f6676c9eda8622
  - id: mImHCY0A3a0.srt
    parent_uid: b16a392ff20ffe2c46855618932ee6f4
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/confidence-intervals-for-the-estimation-of-the-mean/mImHCY0A3a0.srt
    title: 3play caption file
    type: null
    uid: dea4a33ff366feba2de27bb92182b1a2
  - id: mImHCY0A3a0.pdf
    parent_uid: b16a392ff20ffe2c46855618932ee6f4
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/confidence-intervals-for-the-estimation-of-the-mean/mImHCY0A3a0.pdf
    title: 3play pdf file
    type: null
    uid: 3ed464c52c45cc75436e013d4fd1bc90
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b16a392ff20ffe2c46855618932ee6f4
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 172fbfadeb1d3f56e9428cc3b5535ab8
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b16a392ff20ffe2c46855618932ee6f4
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 2e49dcd9585b9e0570cb831e1fbc6aea
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L20-06_300k.mp4
    parent_uid: b16a392ff20ffe2c46855618932ee6f4
    title: Video-Internet Archive-MP4
    type: Video
    uid: 55a7c5dd66aac8c332535a792197333f
inline_embed_id: 60997170confidenceintervalsfortheestimationofthemean13762466
order_index: 1867
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: confidence-intervals-for-the-estimation-of-the-mean
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/confidence-intervals-for-the-estimation-of-the-mean
title: Confidence Intervals for the Estimation of the Mean
transcript: >-
  <p><span m='690'>We now discuss how to come up with confidence intervals
  when</span> <span m='4270'>we try to estimate the unknown mean of some random
  variable,</span> <span m='8550'>or of some distribution, using the</span>
  <span m='10830'>sample mean as our estimator.</span> </p><p><span m='13170'>So
  here X1 up to Xn are independent, identically</span> <span
  m='17310'>distributed random variables that are drawn from a</span> <span
  m='20320'>distribution that has a certain mean theta, the</span> <span
  m='23320'>quantity that we want to estimate, and some variance</span> <span
  m='26410'>sigma squared.</span> </p><p><span m='28400'>Let us say that we want
  to construct a</span> <span m='30570'>95% confidence interval.</span>
  </p><p><span m='33320'>Our starting point will be the fact that the sample
  mean,</span> <span m='36790'>according to the central limit theorem, can be
  described</span> <span m='40050'>approximately using normal
  distributions.</span> </p><p><span m='43740'>And we look up at the normal
  table, and we observe the</span> <span m='48420'>following--</span> <span
  m='49450'>that if we take a standard normal random variable, then</span> <span
  m='55070'>there is probability, 97.5% of falling below this number,</span>
  <span m='62430'>1.96, which means that there is probability 2 1/2% of</span>
  <span m='67570'>falling above that number.</span> </p><p><span m='69910'>And
  by symmetry, the probability of falling below</span> <span m='72760'>minus
  1.96 is also 2 1/2%.</span> </p><p><span m='77990'>This means that this middle
  interval here has probability</span> <span m='81810'>95%, and we exploit this
  fact as follows.</span> </p><p><span m='88800'>If we take the sample mean,
  subtract the true mean, and</span> <span m='92860'>then divide by the standard
  deviation of the sample mean,</span> <span m='96250'>then we obtain a random
  variable, which is</span> <span m='99479'>approximately a standard
  normal.</span> </p><p><span m='102630'>Therefore, what we have here is the
  probability of an</span> <span m='106320'>approximately standard normal random
  variable.</span> </p><p><span m='109039'>Or actually, its absolute value
  falling below 1.96.</span> </p><p><span m='115420'>This is just the event that
  our standard normal falls</span> <span m='119710'>inside this middle interval
  here, according to this entry</span> <span m='124180'>from the normal tables
  and the previous discussion, this</span> <span m='127090'>probability is going
  to be approximately 95%.</span> </p><p><span m='132990'>And now we take this
  statement, send this term to</span> <span m='137470'>the other side of the
  inequality, and then interpret</span> <span m='140710'>what it means for an
  absolute value to</span> <span m='142910'>be less than something.</span>
  </p><p><span m='144540'>And we obtain an equivalent statement.</span>
  </p><p><span m='148130'>This event here is algebraically identical to
  the</span> <span m='152320'>event that we have up there, and this provides us
  with the</span> <span m='155370'>desired confidence interval.</span>
  </p><p><span m='157360'>We think of this quantity here as the lower end of
  the</span> <span m='160920'>confidence interval.</span> </p><p><span
  m='162320'>This quantity here is the upper end of</span> <span m='165310'>the
  confidence interval.</span> </p><p><span m='167010'>And this statement tells
  us that there is probability</span> <span m='170730'>approximately equal to
  95% that the confidence interval</span> <span m='175550'>constructed this way
  contains the true value</span> <span m='179560'>of the unknown
  parameter.</span> </p><p><span m='182320'>So this is how we obtain a 95%
  confidence interval.</span> </p><p><span m='186650'>If instead we wanted a 90%
  confidence interval, we would</span> <span m='191600'>proceed in more or less
  in the same way.</span> </p><p><span m='194210'>Here, we would want to have
  the number 0.95.</span> </p><p><span m='200070'>Why is that?</span>
  </p><p><span m='201290'>We want this middle interval to have probability 90%,
  which</span> <span m='206020'>means that we want to have probability 5%
  at</span> <span m='210890'>each one of the tails.</span> </p><p><span
  m='215550'>And then we look up at the normal tables, and we find</span> <span
  m='219510'>that the entry that gives us probability 95% of being below</span>
  <span m='224980'>that value is 1.645.</span> </p><p><span m='228950'>So if we
  use 1.645 in place of 1.96, we obtain a 90%</span> <span m='234910'>confidence
  interval, and similarly for other choices.</span> </p><p><span m='238310'>For
  example, if we want a 99% confidence interval.</span> </p><p><span
  m='243290'>There's only one issue that's left to discuss, and this is</span>
  <span m='246660'>the following.</span> </p><p><span m='247620'>In order to
  obtain numerical values for the endpoints of</span> <span m='251860'>the
  confidence interval, we need to know sigma, the</span> <span
  m='255890'>standard deviation of the random</span> <span m='257940'>variables
  that we are observing.</span> </p><p><span m='260010'>But if we do not know
  the value of sigma, then we may</span> <span m='263160'>have to do some
  additional work.</span> </p><p></p>
uid: b16a392ff20ffe2c46855618932ee6f4
type: course
layout: video
---
