---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: rFUb1nvh3CQ
    parent_uid: 97c7fa0fca569c70a9e3df9ce9f5572c
    title: Video-YouTube-Stream
    type: Video
    uid: 7d47a4473a501615ed0a77ec3415b4a8
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/rFUb1nvh3CQ/default.jpg'
    parent_uid: 97c7fa0fca569c70a9e3df9ce9f5572c
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 646fb8a55e645fa59ce64d1212252511
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: rFUb1nvh3CQ
    parent_uid: 97c7fa0fca569c70a9e3df9ce9f5572c
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 16e75a826d29eb1a43d2a401b0424d37
  - id: rFUb1nvh3CQ.srt
    parent_uid: 97c7fa0fca569c70a9e3df9ce9f5572c
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/multiple-parameters-trajectory-estimation/rFUb1nvh3CQ.srt
    title: 3play caption file
    type: null
    uid: e88e5f3658e8336ef2426be1c0d2023e
  - id: rFUb1nvh3CQ.pdf
    parent_uid: 97c7fa0fca569c70a9e3df9ce9f5572c
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/multiple-parameters-trajectory-estimation/rFUb1nvh3CQ.pdf
    title: 3play pdf file
    type: null
    uid: 1c3fbd61402efe8244527f8a35db3a40
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 97c7fa0fca569c70a9e3df9ce9f5572c
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a5af3789305e6eda5fe7578fbf7b39fb
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 97c7fa0fca569c70a9e3df9ce9f5572c
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: dfdbe5255538ee5ae5bfd496a18267d4
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L15-06_300k.mp4
    parent_uid: 97c7fa0fca569c70a9e3df9ce9f5572c
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5e1e42b3a638bc161f31fabe500dd9bf
inline_embed_id: 87827774multipleparameterstrajectoryestimation90648087
order_index: 1480
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: multiple-parameters-trajectory-estimation
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/multiple-parameters-trajectory-estimation
title: Multiple Parameters; Trajectory Estimation
transcript: >-
  <p><span m='910'>In this segment, we introduce a model</span> <span
  m='3000'>with multiple parameters and multiple observations.</span>
  </p><p><span m='7020'>It is a model that appears in countless
  real-world</span> <span m='9980'>applications.</span> </p><p><span
  m='11110'>But instead of giving you a general and abstract model,</span> <span
  m='13920'>we will talk about a specific context that</span> <span
  m='16160'>has all the elements of the general model,</span> <span
  m='18900'>but it has the advantage of being concrete.</span> </p><p><span
  m='21200'>And we can also visualize the results.</span> </p><p><span
  m='23930'>The model is as follows.</span> </p><p><span m='26040'>Somebody is
  holding a ball and throws it upwards.</span> </p><p><span m='30820'>This ball
  is going to follow a certain trajectory.</span> </p><p><span m='35290'>What
  kind of trajectory is it?</span> </p><p><span m='37520'>According to Newton's
  laws, we know</span> <span m='40240'>that it's going to be described by a
  quadratic function</span> <span m='43560'>of time.</span> </p><p><span
  m='44940'>So here's a plot of such a quadratic function,</span> <span
  m='48500'>where this is the time axis.</span> </p><p><span m='50700'>And this
  variable here, x, is the vertical displacement</span> <span m='55355'>of the
  ball.</span> </p><p><span m='56910'>The ball initially is it a certain
  location,</span> <span m='60000'>at a certain height-- theta 0.</span>
  </p><p><span m='62790'>It is thrown upwards.</span> </p><p><span m='64420'>And
  it starts moving with some initial velocity, theta 1.</span> </p><p><span
  m='69190'>But because of the gravitational force,</span> <span m='71260'>it
  will start eventually going down.</span> </p><p><span m='73640'>So this
  parameter theta 2, which would actually be negative,</span> <span
  m='77740'>reflects the gravitational constant.</span> </p><p><span
  m='81120'>Suppose now that you do not know these parameters.</span>
  </p><p><span m='85170'>You do not to know exactly where the ball was</span>
  <span m='87750'>when it was thrown.</span> </p><p><span m='88840'>You don't
  know the exact velocity.</span> </p><p><span m='91170'>And perhaps you also
  live in a strange gravitational</span> <span m='93870'>environment, and you do
  not know the gravitational constant.</span> </p><p><span m='97190'>And you
  would like to estimate those quantities</span> <span m='99330'>based on
  measurements.</span> </p><p><span m='101150'>If you are to follow the Bayesian
  Inference methodology,</span> <span m='104350'>what you need to do is to model
  those variables</span> <span m='107550'>as random variables, and think of the
  actual realized</span> <span m='111539'>values as realizations of these random
  variables.</span> </p><p><span m='115820'>And we also need some prior
  distributions</span> <span m='118890'>for these random variable.</span>
  </p><p><span m='120190'>We should specify the joint PDF of these three</span>
  <span m='123580'>random variables.</span> </p><p><span m='124890'>A common
  assumption here is to assume</span> <span m='127290'>that the random variables
  involved are</span> <span m='129620'>independent of each other.</span>
  </p><p><span m='131560'>And each one has a certain prior.</span> </p><p><span
  m='134210'>Where do these priors come from?</span> </p><p><span m='136590'>If
  for example you know where is the person that's</span> <span
  m='141520'>throwing the ball, if you know their location within let's
  say</span> <span m='147220'>a meter or so, you should have a distribution for
  Theta 0</span> <span m='151600'>that describes your state of knowledge</span>
  <span m='153850'>and which has a width or standard</span> <span
  m='156160'>deviation of maybe a couple of meters.</span> </p><p><span
  m='160060'>So the priors are chosen to reflect whatever</span> <span
  m='163280'>you know about the possible values of these parameters.</span>
  </p><p><span m='168710'>Then what is going to happen is that you're</span>
  <span m='171260'>going to observe the trajectory at certain points in
  time.</span> </p><p><span m='175110'>For example, at a certain time t1, you
  make a measurement.</span> </p><p><span m='179100'>But your measurement is not
  exact.</span> </p><p><span m='181440'>It is noisy, and you record a certain
  value.</span> </p><p><span m='184900'>At another time you make another
  measurement,</span> <span m='188020'>and you record another value.</span>
  </p><p><span m='190040'>At another time, you make another measurement,</span>
  <span m='192560'>and you record another value.</span> </p><p><span
  m='194550'>And similarly, you get multiple measurements.</span> </p><p><span
  m='197840'>On the basis of these measurements,</span> <span m='199430'>you
  would like to estimate the parameters.</span> </p><p><span m='202500'>Let us
  write down a model for these measurements.</span> </p><p><span m='205420'>We
  assume that the measurement is</span> <span m='207220'>equal to the true
  position of the ball</span> <span m='209840'>at the time of the measurement,
  which</span> <span m='211720'>is this quantity, plus some noise.</span>
  </p><p><span m='215300'>And we introduce a model for these noise random
  variables.</span> </p><p><span m='219170'>We assume that we have a
  probability</span> <span m='221370'>distribution for them.</span> </p><p><span
  m='223050'>And we also assume that they're independent of each other,</span>
  <span m='227079'>and independent from the Thetas.</span> </p><p><span
  m='229440'>It is quite often that measuring devices,</span> <span
  m='232550'>when they try to measure something multiple times,</span> <span
  m='235220'>the corresponding noises will be independent.</span> </p><p><span
  m='237740'>So this is often a realistic assumption.</span> </p><p><span
  m='240370'>And in addition, the noise in the measuring devices</span> <span
  m='244150'>is usually independent from whatever randomness there</span> <span
  m='248410'>is that determined the values of the phenomenon</span> <span
  m='252430'>that you are trying to measure.</span> </p><p><span m='254470'>So
  these are pretty common and realistic assumptions.</span> </p><p><span
  m='259120'>Let us take stock of what we have.</span> </p><p><span
  m='261220'>We have observations that are determined according</span> <span
  m='264670'>to this relation, where Wi are noise terms.</span> </p><p><span
  m='268160'>Now let us make some more concrete assumptions.</span> </p><p><span
  m='270700'>We will assume that the random variables, the Thetas,</span> <span
  m='273970'>are normal random variables.</span> </p><p><span m='276010'>And
  similarly, the W's are normal.</span> </p><p><span m='278320'>As we said
  before, they're all independent.</span> </p><p><span m='282020'>And to keep
  the formula simple, we</span> <span m='284470'>will assume that the means of
  those random variables</span> <span m='287270'>are 0, although the same
  procedure can</span> <span m='290640'>be followed if the means are
  non-0.</span> </p><p><span m='293900'>We would like to estimate the Theta
  parameters</span> <span m='296930'>on the basis of the observations.</span>
  </p><p><span m='299370'>We will use as usual, the appropriate form of the
  Bayes</span> <span m='303070'>rule, which is this one-- the Bayes</span> <span
  m='305320'>rule for continuous random variables.</span> </p><p><span
  m='308030'>The only thing to notice is that in this notation here,</span>
  <span m='312430'>x is an n-dimensional vector, because we have n
  observations.</span> </p><p><span m='318720'>And theta in this example is a
  three-dimensional vector,</span> <span m='322700'>because we have three
  unknown parameters.</span> </p><p><span m='325830'>So wherever you see a theta
  or an x without a subscript,</span> <span m='329850'>it should be interpreted
  as a vector.</span> </p><p><span m='334230'>Now, in order to calculate this
  posterior distribution,</span> <span m='337890'>we need to put our hands on
  the conditional density of X.</span> </p><p><span m='343060'>Actually, it's a
  joint density, because X</span> <span m='345650'>is a vector given the value
  of Theta.</span> </p><p><span m='349460'>The arguments are pretty much the
  same</span> <span m='351720'>as in our previous examples.</span> </p><p><span
  m='353950'>And it goes as follows.</span> </p><p><span m='356390'>Suppose that
  I tell you the value of the parameters,</span> <span m='359420'>as
  here.</span> </p><p><span m='360550'>Then we look at this equation.</span>
  </p><p><span m='362590'>This quantity is now a constant.</span> </p><p><span
  m='366560'>And we have a constant plus normal noise.</span> </p><p><span
  m='369090'>So Xi is this normal noise whose mean</span> <span m='373050'>is
  shifted by this constant.</span> </p><p><span m='375610'>So Xi is going to be
  a normal random variable,</span> <span m='379090'>with a mean of theta 0 plus
  theta 1ti,</span> <span m='384160'>plus theta 2ti squared.</span> </p><p><span
  m='389270'>And a variance equal to the variance of Wi.</span> </p><p><span
  m='394970'>We know what the normal PDF is.</span> </p><p><span m='397900'>So
  we can write it down.</span> </p><p><span m='399840'>It's the usual
  exponential of a quadratic.</span> </p><p><span m='402880'>And in this
  quadratic, we have Xi</span> <span m='405880'>minus the mean of the normal
  random variable</span> <span m='409710'>that we're dealing with.</span>
  </p><p><span m='412870'>Let us now continue and write down</span> <span
  m='415500'>a formula for the posterior.</span> </p><p><span m='417600'>We
  first have this denominator term,</span> <span m='420270'>which does not
  involve any thetas,</span> <span m='422760'>and as in previous examples, does
  not really concern us.</span> </p><p><span m='427580'>Here we have the joint
  PDF of the vector of Thetas.</span> </p><p><span m='431860'>There's three of
  them.</span> </p><p><span m='433450'>Because we assumed that the Thetas are
  independent,</span> <span m='437110'>the joint PDF factors as a product of
  individual PDFs.</span> </p><p><span m='450550'>And then, we have here the
  joint PDF of X, conditioned on Theta.</span> </p><p><span m='457120'>Now with
  the same argument is in our previous discussion</span> <span m='459960'>of the
  case of multiple observations,</span> <span m='462290'>once I tell you the
  values of Theta,</span> <span m='465310'>then the Xi's are just functions of
  the noises.</span> </p><p><span m='468960'>The noises are independent, so the
  Xi's are also independent.</span> </p><p><span m='473470'>So in the
  conditional universe, where the value of Theta is</span> <span
  m='477020'>known, the Xi's are independent and therefore,</span> <span
  m='480950'>the joint PDF of the Xi's is equal to the product</span> <span
  m='486270'>of the marginal PDFs of each one of the Xi's.</span> </p><p><span
  m='494330'>But this marginal PDF in the conditional universe</span> <span
  m='499950'>of the Xi's is something that we have already calculated.</span>
  </p><p><span m='504390'>And so we know what each one of these densities
  is.</span> </p><p><span m='507560'>We can write them down.</span> </p><p><span
  m='509300'>And we obtain an expression of this form.</span> </p><p><span
  m='512169'>We have a normalizing constant in the beginning.</span>
  </p><p><span m='515000'>We have here a term that comes from the prior for
  Theta 0,</span> <span m='519090'>a prior from Theta 1.</span> </p><p><span
  m='521789'>Here is a typical term that comes</span> <span m='524120'>from the
  density of Xi, which is this term up here.</span> </p><p><span m='530390'>So
  here is what we have so far.</span> </p><p><span m='533610'>How should we now
  estimate Theta if we</span> <span m='536840'>wish to derive a point
  estimate?</span> </p><p><span m='539330'>The natural process is to look for
  the maximum posteriori</span> <span m='542570'>probability estimate, which
  will maximize</span> <span m='545760'>this expression over theta.</span>
  </p><p><span m='549040'>Find a set of theta parameters.</span> </p><p><span
  m='552550'>It's a three-dimensional vector for which</span> <span
  m='555270'>is this quantity is largest.</span> </p><p><span
  m='557480'>Equivalently we can look at the exponent, get rid of the
  minus</span> <span m='561660'>signs, and minimize the quadratic
  function</span> <span m='564550'>that we obtain here.</span> </p><p><span
  m='566430'>How does one minimize a quadratic function?</span> </p><p><span
  m='569680'>We take the derivatives with respect</span> <span m='573080'>to
  each one of the parameters, and set the derivative to 0.</span> </p><p><span
  m='582000'>We will get this way three equations and three unknowns.</span>
  </p><p><span m='591490'>And because it's a quadratic function of theta,</span>
  <span m='594730'>these derivatives will be linear functions of theta.</span>
  </p><p><span m='598970'>So these equations that we're dealing with</span>
  <span m='601510'>will be linear equations.</span> </p><p><span m='603560'>So
  it's a system of three linear equations</span> <span m='606430'>which we can
  solve numerically.</span> </p><p><span m='608190'>And this is what is usually
  done in practice.</span> </p><p><span m='611570'>A this is exactly what it
  takes to calculate</span> <span m='614920'>the maximum a posteriori
  probability</span> <span m='616960'>estimate in this particular example that
  we have discussed.</span> </p><p><span m='621910'>It turns out as we will
  discuss later,</span> <span m='624680'>that there are many interesting
  properties for this estimate,</span> <span m='628600'>and which are quite
  general.</span> </p><p></p>
uid: 97c7fa0fca569c70a9e3df9ce9f5572c
type: course
layout: video
---
