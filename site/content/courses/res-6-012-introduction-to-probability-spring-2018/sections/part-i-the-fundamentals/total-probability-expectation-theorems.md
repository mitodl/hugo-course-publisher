---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Mv8tuMBQk-g
    parent_uid: 90e289088a640496606bf9c1e6895ac6
    title: Video-YouTube-Stream
    type: Video
    uid: c12f2351fd9663650ea65ed967c16d40
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Mv8tuMBQk-g/default.jpg'
    parent_uid: 90e289088a640496606bf9c1e6895ac6
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ee62e6f5a83bbcaca3b1a5be9179a895
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Mv8tuMBQk-g
    parent_uid: 90e289088a640496606bf9c1e6895ac6
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: f7c0071fb6ef5a0d8ade7a9ac333de6f
  - id: Mv8tuMBQk-g.srt
    parent_uid: 90e289088a640496606bf9c1e6895ac6
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/total-probability-expectation-theorems/Mv8tuMBQk-g.srt
    title: 3play caption file
    type: null
    uid: 84a8fe4b702238b5e8859448c18653f0
  - id: Mv8tuMBQk-g.pdf
    parent_uid: 90e289088a640496606bf9c1e6895ac6
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/total-probability-expectation-theorems/Mv8tuMBQk-g.pdf
    title: 3play pdf file
    type: null
    uid: b981f743be12ac0a2fd8dcb9cb120a17
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 90e289088a640496606bf9c1e6895ac6
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 645ac0e4fcee23dbf8ce919868fa2db9
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 90e289088a640496606bf9c1e6895ac6
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 8801c28ff943655aed6f6bd7c69ed645
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L09-05_300k.mp4
    parent_uid: 90e289088a640496606bf9c1e6895ac6
    title: Video-Internet Archive-MP4
    type: Video
    uid: fd2cd546fa729452719fbea7d948ec6e
inline_embed_id: 2278863totalprobabilityexpectationtheorems49546915
order_index: 861
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: total-probability-expectation-theorems
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/total-probability-expectation-theorems
title: Total Probability & Expectation Theorems
transcript: >-
  <p><span m='510'>We now continue with the development of continuous</span>
  <span m='3170'>analogs of everything we know for the discrete case.</span>
  </p><p><span m='6470'>We have already seen a few versions of the total</span>
  <span m='8850'>probability theorem, one version for events and one</span>
  <span m='12890'>version for PMFs.</span> </p><p><span m='14260'>Let us now
  develop a continuous analog.</span> </p><p><span m='16970'>Suppose, as always,
  that we have a partition of the sample</span> <span m='20230'>space into a
  number of disjoint scenarios.</span> </p><p><span m='22740'>Three scenarios in
  this picture.</span> </p><p><span m='24680'>More generally, n scenarios in
  these formulas.</span> </p><p><span m='29180'>Let X be a continuous random
  variable and let us take B to</span> <span m='34640'>be the event that the
  random variable takes a value less</span> <span m='39150'>than or equal to
  some little x.</span> </p><p><span m='42380'>By the total probability theorem,
  this is the</span> <span m='44690'>probability of the first scenario times the
  conditional</span> <span m='48480'>probability of this event given that the
  first scenario</span> <span m='52970'>has materialized, and then we have
  similar terms for the</span> <span m='56640'>other scenarios.</span>
  </p><p><span m='58810'>Let us now turn this equation into CDF notation.</span>
  </p><p><span m='63970'>The left-hand side is what we have defined as the CDF
  of the</span> <span m='69170'>random variable x.</span> </p><p><span
  m='71370'>On the right-hand side, what we have is the probability of</span>
  <span m='75580'>the first scenario multiplied, again, by a CDF of the
  random</span> <span m='80560'>variable X. But it is a CDF that applies in a
  conditional</span> <span m='84789'>model where event A1 has occurred.</span>
  </p><p><span m='89000'>And so we use this notation to denote the conditional
  CDF,</span> <span m='93076'>the CDF that applies to the conditional
  universe.</span> </p><p><span m='96150'>And then we have similar terms for the
  other scenarios.</span> </p><p><span m='99860'>Now, we know that the
  derivative of a CDF is a PDF.</span> </p><p><span m='103800'>We also know that
  any general fact, such as this one that</span> <span m='107680'>applies to
  unconditional models will also apply without</span> <span m='110979'>change to
  a conditional model, because a conditional model is</span> <span
  m='113940'>just like any other ordinary probability model.</span> </p><p><span
  m='117990'>So let us now take derivatives of both</span> <span
  m='120150'>sides of this equation.</span> </p><p><span m='121990'>On the
  left-hand side, we have the derivative of a</span> <span m='124290'>CDF, which
  is a PDF.</span> </p><p><span m='127060'>And on the right-hand side, we have
  the probability of the</span> <span m='129570'>first scenario, and then the
  derivative of the conditional</span> <span m='132850'>CDF, which has to be the
  same as the conditional PDF.</span> </p><p><span m='138130'>So we use here the
  fact that derivatives of CDFs are PDFs,</span> <span m='142690'>and then we
  have similar terms under the different scenarios.</span> </p><p><span
  m='147120'>So we now have a relation between densities.</span> </p><p><span
  m='150430'>To interpret this relation, we think as follows.</span>
  </p><p><span m='153430'>The probability of falling inside the little
  interval</span> <span m='156630'>around x is determined by the probability of
  falling inside</span> <span m='161079'>that little interval under each one of
  the different</span> <span m='164670'>scenarios and where each scenario is
  weighted by the</span> <span m='169040'>corresponding probability.</span>
  </p><p><span m='172030'>Now, we multiply both sides of this equation by x, and
  then</span> <span m='178270'>integrate over all x's.</span> </p><p><span
  m='183930'>We do this on the left-hand side.</span> </p><p><span
  m='186050'>And similarly, on the right-hand side to obtain a</span> <span
  m='190340'>term of this form.</span> </p><p><span m='196420'>And we have
  similar terms corresponding</span> <span m='199520'>to the other
  scenarios.</span> </p><p><span m='201930'>What do we have here?</span>
  </p><p><span m='203470'>On the left-hand side, we have the expected value of
  x.</span> </p><p><span m='207300'>On the right-hand side, we have this
  probability</span> <span m='209770'>multiplied by the conditional expectation
  of X given that</span> <span m='215020'>scenario A1 has occurred.</span>
  </p><p><span m='217350'>And so we obtain a version of the total expectation
  theorem.</span> </p><p><span m='222880'>It's exactly the same formula as we
  had in the discrete</span> <span m='225750'>case, except that now X is a
  continuous random variable.</span> </p><p><span m='230650'>Let us now look at
  a simple example that involves a model</span> <span m='234300'>with different
  scenarios.</span> </p><p><span m='236530'>Bill wakes up in the morning and
  wants to go to the</span> <span m='238800'>supermarket.</span> </p><p><span
  m='240190'>There are two scenarios.</span> </p><p><span m='242000'>With
  probability one third, a first scenario occurs.</span> </p><p><span
  m='246540'>And under that scenario, Bill will go at a time that's</span> <span
  m='251650'>uniformly distributed between 0 and 2 hours from now.</span>
  </p><p><span m='256670'>So the conditional PDF of X, in this case, is uniform
  on</span> <span m='262710'>the interval from 0 to 2.</span> </p><p><span
  m='266160'>There's a second scenario that Bill will take long nap and</span>
  <span m='270890'>will go later in the day.</span> </p><p><span m='272820'>That
  scenario has a probability of 2/3.</span> </p><p><span m='277540'>And under
  that case, the conditional PDF of X is going</span> <span m='283340'>to be
  uniform on the range between 6 and 8.</span> </p><p><span m='290600'>By the
  total probability theorem for densities, the</span> <span m='293760'>density
  of X, of the random variable--</span> <span m='297250'>the time at which he
  goes to the supermarket--</span> <span m='299900'>consists of two
  pieces.</span> </p><p><span m='301840'>One piece is a uniform between 0 and
  2.</span> </p><p><span m='305490'>This uniform ordinarily would have a height
  or 1/2.</span> </p><p><span m='311230'>On the other hand, it gets weighted by
  the corresponding</span> <span m='314230'>probability, which is 1/3.</span>
  </p><p><span m='316670'>So we obtain a piece here that has a height of
  1/6.</span> </p><p><span m='321966'>Under the alternative scenario, the
  conditional</span> <span m='324740'>density is a uniform on the interval
  between 6 and 8.</span> </p><p><span m='328770'>This uniform has a height of
  1/2 again, but it gets</span> <span m='333870'>multiplied by a factor of
  2/3.</span> </p><p><span m='336480'>And this results in a height for this term
  that we have</span> <span m='340190'>here, which is 1/3.</span> </p><p><span
  m='343130'>And this is the form of the PDF of the time at which Bill</span>
  <span m='347810'>will go to the supermarket.</span> </p><p><span m='353810'>We
  can now finally use the total expectation theorem.</span> </p><p><span
  m='357790'>The conditional expectation under the two scenarios can be</span>
  <span m='360840'>found as follows.</span> </p><p><span m='361720'>Under one
  scenario, we have a uniform between 0 and 2.</span> </p><p><span
  m='365530'>And so the conditional expectation is 1, and it gets</span> <span
  m='368350'>weighted by the corresponding probability, which is 1/3.</span>
  </p><p><span m='371210'>Under the second scenario, which has probability 2/3,
  the</span> <span m='376690'>conditional expectation is the midpoint of this
  uniform,</span> <span m='381410'>which is 7.</span> </p><p><span
  m='383080'>And this gives us the expected value of the</span> <span
  m='386320'>time at which he goes.</span> </p><p><span m='388350'>So this is a
  simple example, but it illustrates nicely how</span> <span m='392010'>we can
  construct a model that involves a number</span> <span m='395380'>of different
  scenarios.</span> </p><p><span m='396870'>And by knowing the probability
  distribution under each one of</span> <span m='400180'>the scenarios, we can
  find the probability</span> <span m='403210'>distribution overall.</span>
  </p><p><span m='405600'>And we can also find the expected value for the
  overall</span> <span m='409140'>experiment.</span> </p><p></p>
uid: 90e289088a640496606bf9c1e6895ac6
type: course
layout: video
---
