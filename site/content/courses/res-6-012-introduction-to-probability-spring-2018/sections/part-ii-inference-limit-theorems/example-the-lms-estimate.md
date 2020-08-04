---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: O-dyKz5dpeY
    parent_uid: 31e00f44f1e8308cc2dac91034cc9184
    title: Video-YouTube-Stream
    type: Video
    uid: beec36340919742caa72ba5a0a954f0d
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/O-dyKz5dpeY/default.jpg'
    parent_uid: 31e00f44f1e8308cc2dac91034cc9184
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b5689efa8307fb34838c82fe8cf55fab
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: O-dyKz5dpeY
    parent_uid: 31e00f44f1e8308cc2dac91034cc9184
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 61617aedbf14e773543740760248f258
  - id: O-dyKz5dpeY.srt
    parent_uid: 31e00f44f1e8308cc2dac91034cc9184
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/example-the-lms-estimate/O-dyKz5dpeY.srt
    title: 3play caption file
    type: null
    uid: 0ed1ab85c53efd997728735ddaada755
  - id: O-dyKz5dpeY.pdf
    parent_uid: 31e00f44f1e8308cc2dac91034cc9184
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/example-the-lms-estimate/O-dyKz5dpeY.pdf
    title: 3play pdf file
    type: null
    uid: f5e5f7b7879972c7c1a9e4a4388e07b9
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 31e00f44f1e8308cc2dac91034cc9184
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b4ddca139f4133951abd8ab65af2fa43
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 31e00f44f1e8308cc2dac91034cc9184
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 49d235ec0f94d0f4894833c14783fcc3
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L16-05_300k.mp4
    parent_uid: 31e00f44f1e8308cc2dac91034cc9184
    title: Video-Internet Archive-MP4
    type: Video
    uid: 04a931656458ccfeeb94389cac76baec
inline_embed_id: 49097710examplethelmsestimate76254210
order_index: 1543
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: example-the-lms-estimate
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/example-the-lms-estimate
title: 'Example: The LMS Estimate'
transcript: >-
  <p><span m='760'>Let us now go through an example.</span> </p><p><span
  m='3420'>Suppose that we have an unknown random variable</span> <span
  m='5700'>Theta that has a uniform distribution between 4 and 10.</span>
  </p><p><span m='11240'>We observe some other random variable</span> <span
  m='13850'>X that's related to Theta according</span> <span m='16790'>to the
  following model.</span> </p><p><span m='18500'>This is the conditional
  distribution of X given Theta.</span> </p><p><span m='22120'>For any given
  value of theta, X is</span> <span m='25400'>going to take values between theta
  minus 1 and theta plus 1.</span> </p><p><span m='29960'>And the conditional
  distribution is uniform on that range.</span> </p><p><span m='34760'>One way
  of thinking about this particular observation model</span> <span m='38740'>is
  that what we observe is the true value</span> <span m='42220'>of Theta plus
  some noise term.</span> </p><p><span m='46120'>And this noise term is uniform
  on the range</span> <span m='51950'>from minus 1 to plus 1.</span>
  </p><p><span m='54770'>So given a value of Theta, we may</span> <span
  m='56960'>observe anything, because of noise, that's up to one</span> <span
  m='62460'>lower or one higher than the true value of Theta.</span>
  </p><p><span m='67260'>And if we take this description, actually, this random
  variable</span> <span m='71590'>U has this distribution no matter what Theta
  is.</span> </p><p><span m='75140'>And therefore, U is independent of
  Theta.</span> </p><p><span m='78810'>But in any case, this particular
  interpretation will not matter.</span> </p><p><span m='82970'>Let us see how
  do we proceed.</span> </p><p><span m='85640'>In Bayesian estimation, the first
  step</span> <span m='87610'>is always to put our hands on the posterior</span>
  <span m='90880'>distribution of Theta.</span> </p><p><span m='92710'>And to
  find the posterior, we can</span> <span m='94430'>start by first finding the
  joint.</span> </p><p><span m='97289'>So let us look at the x theta
  plane.</span> </p><p><span m='100160'>That's where the joint distribution is
  going to live.</span> </p><p><span m='103630'>And our first step will be to
  locate</span> <span m='106100'>those values of X and Theta that are
  possible,</span> <span m='109420'>given our description.</span> </p><p><span
  m='111020'>From this model here, we know that theta minus 1</span> <span
  m='115600'>is going to be less than or equal to x.</span> </p><p><span
  m='118270'>And x is going to be less than or equal to theta plus 1.</span>
  </p><p><span m='122270'>And we translate this into two inequalities,</span>
  <span m='125620'>namely that theta is less than or equal to x plus 1,</span>
  <span m='130350'>and from here, that theta is larger</span> <span
  m='132920'>than or equal to x minus 1.</span> </p><p><span m='135590'>So these
  are the constraints that we</span> <span m='138340'>have on the possible
  values of x and theta.</span> </p><p><span m='141760'>So here we plot the line
  where theta is equal to x plus one.</span> </p><p><span m='150340'>And here we
  plot the line on which</span> <span m='153079'>theta is equal to x minus
  1.</span> </p><p><span m='156030'>And these two inequalities that we've got
  here</span> <span m='158900'>tell us that we need to live somewhere in between
  those two</span> <span m='163410'>lines.</span> </p><p><span m='164910'>In
  addition, we have the fact that theta</span> <span m='167850'>lives between 4
  and 10.</span> </p><p><span m='170130'>And that places these two limits as
  well.</span> </p><p><span m='173300'>So to summarize, this shape here is the
  set</span> <span m='176680'>off all possible x's and thetas.</span>
  </p><p><span m='180750'>Outside this shape, the joint PDF is going to be
  zero.</span> </p><p><span m='185170'>What is it going to be inside
  here?</span> </p><p><span m='187930'>Well, because the prior is
  uniform,</span> <span m='190370'>that is, it is constant, and the model is
  also uniform,</span> <span m='195730'>to obtain the joint we multiply these
  two.</span> </p><p><span m='199260'>And since they are constant, we
  obtain</span> <span m='201360'>a joint that's also constant.</span>
  </p><p><span m='203829'>So the joint PDF is equal to a constant over that
  set.</span> </p><p><span m='211850'>We can easily calculate the area of this
  set.</span> </p><p><span m='214560'>It is 12.</span> </p><p><span
  m='215810'>So the joint is equal to 1 over 12 inside this set.</span>
  </p><p><span m='220960'>And of course, it's 0 elsewhere.</span> </p><p><span
  m='224140'>So we have a uniform joint PDF.</span> </p><p><span m='227960'>Now,
  let us look at the posterior.</span> </p><p><span m='230440'>If I tell you
  that X takes on this specific value,</span> <span m='234930'>this means that
  we now live in this universe.</span> </p><p><span m='239290'>And it means that
  all of those thetas are possible.</span> </p><p><span m='243810'>The posterior
  distribution is going</span> <span m='245950'>to be a distribution that tells
  us</span> <span m='247800'>the probabilities of these different thetas.</span>
  </p><p><span m='250700'>What kind of distribution is it?</span> </p><p><span
  m='253060'>Well, we know that the conditional is just</span> <span
  m='256649'>a section out of the joint but keeps, otherwise,</span> <span
  m='259870'>the same shape.</span> </p><p><span m='261190'>Since the joint is
  constant, it's uniform over that set,</span> <span m='266260'>it means that
  the posterior, or the conditional,</span> <span m='270260'>is also constant
  over that set.</span> </p><p><span m='273000'>So the conclusion is that the
  posterior distribution of Theta</span> <span m='276909'>is a uniform
  distribution on this set.</span> </p><p><span m='281230'>Given this knowledge,
  what is the conditional expectation?</span> </p><p><span m='285590'>The
  conditional expectation of a uniform</span> <span m='288110'>is just the
  midpoint of that uniform.</span> </p><p><span m='290930'>And so this is going
  to be our estimate of Theta,</span> <span m='296409'>the conditional
  expectation of Theta,</span> <span m='298720'>given the observation that we
  have obtained.</span> </p><p><span m='301610'>And then a similar argument
  applies no matter</span> <span m='304460'>what x we have obtained.</span>
  </p><p><span m='306890'>For any given x, our estimate is going</span> <span
  m='310130'>to be the midpoint of the corresponding interval.</span>
  </p><p><span m='317870'>So what kind of shape do we get by doing this,</span>
  <span m='322380'>by joining the mid-points?</span> </p><p><span
  m='325870'>It's going to be a straight line over this region.</span>
  </p><p><span m='330530'>It's also going to be a straight line over this
  region</span> <span m='333880'>except that, because of the change in
  shape,</span> <span m='336560'>it's going to be a straight line with a
  different slope.</span> </p><p><span m='339500'>And similarly, in this region,
  it's</span> <span m='341280'>also going to be a straight line with a different
  slope.</span> </p><p><span m='345740'>So what have we plotted here?</span>
  </p><p><span m='348350'>For any given value of X, we have</span> <span
  m='350810'>plotted the corresponding conditional expectation</span> <span
  m='354790'>of Theta given that value of X. And as a function of x, this</span>
  <span m='360960'>gives us a certain curve.</span> </p><p><span m='363050'>And
  this blue curve that we have calculated</span> <span m='368800'>is a
  particular function of x.</span> </p><p><span m='373000'>And we can think of
  this function g</span> <span m='375230'>as being our estimator.</span>
  </p><p><span m='377440'>So the way we're going to be processing</span> <span
  m='379310'>the data will be that whenever we obtain an x,</span> <span
  m='383620'>we apply this particular function g.</span> </p><p><span
  m='386650'>And we come up with an estimate.</span> </p><p></p>
uid: 31e00f44f1e8308cc2dac91034cc9184
type: course
layout: video
---
