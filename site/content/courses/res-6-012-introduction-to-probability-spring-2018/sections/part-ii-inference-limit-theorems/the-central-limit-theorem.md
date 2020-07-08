---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: IrKUM3nNXJE
    parent_uid: abaf82966998b81205c131404a013fa7
    title: Video-YouTube-Stream
    type: Video
    uid: 19961c1becfb94ca8f141c2da2daaa41
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/IrKUM3nNXJE/default.jpg'
    parent_uid: abaf82966998b81205c131404a013fa7
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: bc5d76e409a248aa99a81f5b1d07314e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: IrKUM3nNXJE
    parent_uid: abaf82966998b81205c131404a013fa7
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 288d48e4de87871f275e9f747eed2606
  - id: IrKUM3nNXJE.srt
    parent_uid: abaf82966998b81205c131404a013fa7
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-central-limit-theorem/IrKUM3nNXJE.srt
    title: 3play caption file
    type: null
    uid: fd96e9a67efaa1c3d7c5ec5a1449c19a
  - id: IrKUM3nNXJE.pdf
    parent_uid: abaf82966998b81205c131404a013fa7
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-central-limit-theorem/IrKUM3nNXJE.pdf
    title: 3play pdf file
    type: null
    uid: 7f4bafaeaf3fc2b5e4f88afb273f7d3d
  - id: Caption-3Play YouTube id-SRT
    parent_uid: abaf82966998b81205c131404a013fa7
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 33902abf3d5b72d38599c9e8c1a3e941
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: abaf82966998b81205c131404a013fa7
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0e21bf9db66ac27733bb74f5fcdafa81
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L19-02_300k.mp4
    parent_uid: abaf82966998b81205c131404a013fa7
    title: Video-Internet Archive-MP4
    type: Video
    uid: 6f733262b9063ea83f86feed69474987
inline_embed_id: 23565268thecentrallimittheorem96756708
order_index: 1768
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: the-central-limit-theorem
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-central-limit-theorem
title: The Central Limit Theorem
transcript: >-
  <p><span m='660'>In this segment, we will first discuss and compare
  different</span> <span m='4340'>views of the sum of independent
  identically</span> <span m='6890'>distributed random variables.</span>
  </p><p><span m='8870'>And then, we will conclude with a statement of
  the</span> <span m='11150'>central limit theorem.</span> </p><p><span
  m='12930'>So let X1 up to Xn be independent identically</span> <span
  m='16070'>distributed random variables that have a certain finite</span> <span
  m='19440'>mean and finite variance that we'll denote by</span> <span
  m='21520'>mu and sigma squared.</span> </p><p><span m='23440'>In order to have
  a concrete example in our hands, let us</span> <span m='27140'>assume that
  this random variable has a distribution,</span> <span m='30490'>let's say, a
  PDF, that ranges from minus 1 to plus 1 and has</span> <span m='35220'>a mean
  of 0.</span> </p><p><span m='38632'>Let us look at the sum of these random
  variables.</span> </p><p><span m='42080'>The sum has a variance of n times
  sigma squared, which</span> <span m='46040'>goes to infinity.</span>
  </p><p><span m='47420'>And correspondingly, the standard deviation of
  this</span> <span m='50490'>random variable also grows to infinity.</span>
  </p><p><span m='53740'>This random variable takes values between</span> <span
  m='56140'>minus n and plus n.</span> </p><p><span m='59820'>And because the
  variance and the standard deviation</span> <span m='62770'>increase, this
  means that for larger and larger n, the width</span> <span m='67460'>of this
  distribution is going to be larger and larger.</span> </p><p><span
  m='74080'>We can obtain a different view of this sum if we divided by n</span>
  <span m='78940'>in, which case, we obtain the sample mean.</span> </p><p><span
  m='82470'>In this case, the variance goes to 0</span> <span m='86039'>as n
  goes to infinity.</span> </p><p><span m='88060'>And as a consequence, the
  distribution is highly</span> <span m='92280'>concentrated around 0.</span>
  </p><p><span m='95360'>This is also what the weak law of large numbers tells
  us.</span> </p><p><span m='100729'>The bulk of the distribution is
  concentrated in an</span> <span m='104350'>arbitrarily small interval around
  0.</span> </p><p><span m='107320'>So this width becomes smaller and
  smaller</span> <span m='110690'>as n goes to infinity.</span> </p><p><span
  m='113710'>So in this case, we obtain a limiting distribution.</span>
  </p><p><span m='117770'>But this limiting distribution is trivial.</span>
  </p><p><span m='120560'>It's degenerate.</span> </p><p><span m='121530'>It's
  all concentrated on a single point.</span> </p><p><span m='124900'>How can we
  make it so that we obtain a limiting distribution</span> <span m='128250'>that
  is more interesting?</span> </p><p><span m='130038'>The key is to divide not
  by n, but to divide by the</span> <span m='134900'>square root of n.</span>
  </p><p><span m='136570'>This has the following effect.</span> </p><p><span
  m='138410'>The variance of this ratio is calculated as follows.</span>
  </p><p><span m='142390'>We take the variance of the numerator, which is n
  times</span> <span m='145930'>sigma squared.</span> </p><p><span
  m='147350'>And then we divide by the square of this</span> <span
  m='149800'>number, which is n.</span> </p><p><span m='151760'>And therefore,
  the variance is equal to sigma squared.</span> </p><p><span m='156440'>What's
  important here is that the variance stays constant.</span> </p><p><span
  m='162180'>No matter what n is, the width of this distribution is going</span>
  <span m='167110'>to be more or less the same.</span> </p><p><span
  m='170820'>The distribution itself might change as n changes.</span>
  </p><p><span m='174860'>But the distribution--</span> <span m='175990'>at
  least in this case, where we assume 0 mean, the</span> <span
  m='179240'>distribution stays in place.</span> </p><p><span m='180920'>It
  doesn't move to the right or to the left.</span> </p><p><span m='183640'>And
  its width stays the same.</span> </p><p><span m='186000'>So one can wonder, in
  the limit, as n goes to infinity,</span> <span m='189930'>does this shape
  start to approach a</span> <span m='192430'>certain limiting shape?</span>
  </p><p><span m='194400'>And if it does, what is the limiting shape that
  it</span> <span m='197720'>approaches?</span> </p><p><span m='198990'>The
  central limit theorem will give us the</span> <span m='201210'>answers to
  these questions.</span> </p><p><span m='205110'>The setting for the central
  limit theorem will be pretty</span> <span m='208270'>much the setting that we
  were just discussing.</span> </p><p><span m='211770'>So we will be looking
  into the case where we divide the sum</span> <span m='215300'>of the random
  variables by square root of n, except for a</span> <span m='218810'>few
  additional twists.</span> </p><p><span m='221880'>Since this ratio has a
  variance of sigma squared, it</span> <span m='227880'>would help to divide by
  a further factor of sigma here</span> <span m='232930'>so that the variance is
  going to become 1.</span> </p><p><span m='236579'>And there's another
  issue.</span> </p><p><span m='238829'>If the mean of the X's is non-zero, then
  the</span> <span m='243210'>distribution is centered at a quantity that
  keeps</span> <span m='247750'>changing with n.</span> </p><p><span
  m='249460'>So the distribution will be drifting away from 0.</span>
  </p><p><span m='253540'>It's not staying in place.</span> </p><p><span
  m='255060'>And so it wouldn't have any hope of</span> <span
  m='257050'>converging to something.</span> </p><p><span m='259180'>For this
  reason, instead of looking at this ratio in</span> <span
  m='262880'>particular, what we do is we first subtract the mean of the</span>
  <span m='268440'>sum, which is n times the mean.</span> </p><p><span
  m='271570'>And then we divide by a further factor of sigma.</span>
  </p><p><span m='277050'>This random variable that we obtain here has
  nice</span> <span m='281680'>properties.</span> </p><p><span m='283000'>The
  mean of this random variable is equal to 0,</span> <span m='286550'>because we
  did subtract the mean of the X's.</span> </p><p><span m='290520'>And the
  variance of this random variable is going to be</span> <span m='295409'>equal
  to 1.</span> </p><p><span m='297690'>The reason is that the variance is the
  variance of</span> <span m='301050'>the numerator, which is n times sigma
  squared, divided</span> <span m='305600'>by the square of the denominator,
  which is also n</span> <span m='308620'>times sigma squared.</span>
  </p><p><span m='310510'>So as n changes, the distribution of the random</span>
  <span m='314900'>variable Zn stays in place.</span> </p><p><span m='318360'>It
  has a mean of 0.</span> </p><p><span m='320066'>And its width, more or less,
  stays the same, because we</span> <span m='324230'>have a constant
  variance.</span> </p><p><span m='328620'>We will compare this random variable
  with a standard</span> <span m='333040'>normal random variable that has 0 mean
  and unit variance.</span> </p><p><span m='338460'>The central limit theorem
  states the amazing fact that</span> <span m='343100'>as n goes to infinity,
  the distribution of this random</span> <span m='347909'>variable converges to
  the standard normal distribution</span> <span m='351670'>in the following
  sense--</span> <span m='353440'>that this probability here converges to that
  probability</span> <span m='359350'>for any choice of little z.</span>
  </p><p><span m='362640'>Now, what we have here is just the CDF of this
  random</span> <span m='366670'>variable, Zn.</span> </p><p><span m='367930'>So
  it tells us that the CDF of the random variable Zn</span> <span
  m='371040'>converges to the CDF of a standard normal.</span> </p><p><span
  m='374020'>And fortunately, for the standard normal, the CDF is</span> <span
  m='377520'>available in tables.</span> </p><p><span m='379360'>So if we needed
  to calculate the numerical value here, we</span> <span m='382960'>can just
  look up the normal tables.</span> </p><p><span m='385640'>And this suggests an
  approximation to this</span> <span m='388980'>probability for the case where n
  is finite but large.</span> </p><p><span m='393230'>When n is large, we can
  approximate this probability</span> <span m='396900'>by this probability on
  the right, which we can find from</span> <span m='400140'>the normal
  tables.</span> </p><p><span m='402190'>The central limit theorem is a very
  important result.</span> </p><p><span m='405590'>For this reason, we will
  spend some time discussing how to</span> <span m='408909'>interpret it, what
  it means, how we use it, and we will go</span> <span m='413460'>through a few
  examples to see how we actually apply it.</span> </p><p></p>
uid: abaf82966998b81205c131404a013fa7
type: courses
layout: video
---
