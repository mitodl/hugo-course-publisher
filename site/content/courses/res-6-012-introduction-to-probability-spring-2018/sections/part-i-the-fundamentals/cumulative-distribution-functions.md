---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 4QeL1ma_XJ0
    parent_uid: 7c508046b8734f1adda8a050bc61e403
    title: Video-YouTube-Stream
    type: Video
    uid: ca5c08fa603c7028bba05c158e99e4ea
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/4QeL1ma_XJ0/default.jpg'
    parent_uid: 7c508046b8734f1adda8a050bc61e403
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d2f3c63e48af6fd814ba095b29aa51c3
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 4QeL1ma_XJ0
    parent_uid: 7c508046b8734f1adda8a050bc61e403
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 9da83f8377a6c1d8be5b0cabcc128c48
  - id: 4QeL1ma_XJ0.srt
    parent_uid: 7c508046b8734f1adda8a050bc61e403
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/cumulative-distribution-functions/4QeL1ma_XJ0.srt
    title: 3play caption file
    type: null
    uid: d841302cd31f0fb36a8157b592f35aa6
  - id: 4QeL1ma_XJ0.pdf
    parent_uid: 7c508046b8734f1adda8a050bc61e403
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/cumulative-distribution-functions/4QeL1ma_XJ0.pdf
    title: 3play pdf file
    type: null
    uid: ee8d9aa45da93f390f69e89098aa2081
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 7c508046b8734f1adda8a050bc61e403
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 31bf47d05c84c3df7f6c49f81d6cf886
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 7c508046b8734f1adda8a050bc61e403
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: cdf24a5c1d13b73dfcc9ff9e2f3fae3b
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L08-07_300k.mp4
    parent_uid: 7c508046b8734f1adda8a050bc61e403
    title: Video-Internet Archive-MP4
    type: Video
    uid: 61ba5ba08ad999bd72ba3b2f28fce894
inline_embed_id: 6974413cumulativedistributionfunctions74785606
order_index: 798
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: cumulative-distribution-functions
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/cumulative-distribution-functions
title: Cumulative Distribution Functions
transcript: >-
  <p><span m='520'>We have seen that several properties, such as, for</span>
  <span m='3180'>example, linearity of expectations, are common for</span> <span
  m='6320'>discrete and continuous random variables.</span> </p><p><span
  m='8670'>For this reason, it would be nice to have a way of talking</span>
  <span m='11570'>about the distribution of all kinds of random variables</span>
  <span m='14890'>without having to keep making a distinction between the</span>
  <span m='17920'>different types--</span> <span m='19150'>discrete or
  continuous.</span> </p><p><span m='20865'>This leads us to describe the
  distribution of a random</span> <span m='23900'>variable in a new way, in
  terms of a so-called</span> <span m='27510'>cumulative distribution function
  or CDF for short.</span> </p><p><span m='31660'>A CDF is defined as
  follows.</span> </p><p><span m='35370'>The CDF is a function of a single
  argument, which we</span> <span m='38620'>denote by little x in this
  case.</span> </p><p><span m='41060'>And it gives us the probability that the
  random</span> <span m='43600'>variable takes a value less than or equal to
  this</span> <span m='46210'>particular little x.</span> </p><p><span
  m='47930'>We will always use uppercase Fs to indicate CDFs.</span>
  </p><p><span m='52880'>And we will always have some subscripts that indicate
  which</span> <span m='56760'>random variable we're talking about.</span>
  </p><p><span m='60090'>The beauty of the CDF is that it just involves a</span>
  <span m='62800'>probability--</span> <span m='63600'>a concept that is well
  defined, no matter what kind</span> <span m='66280'>of random variable we're
  dealing with.</span> </p><p><span m='68920'>So in particular, if X is a
  continuous random variable,</span> <span m='73710'>the probability that X is
  less than or equal</span> <span m='77289'>to a certain number--</span> <span
  m='78789'>this is just the integral of the PDF over that range from</span>
  <span m='84539'>minus infinity up to that number.</span> </p><p><span
  m='87670'>As a more concrete example, let us consider a uniform</span> <span
  m='91039'>random variable that ranges between a and b, and let us</span> <span
  m='95330'>just try to plot the corresponding CDF.</span> </p><p><span
  m='99030'>The CDF is a function of little x.</span> </p><p><span
  m='101630'>And the form that it takes depends on what kind of x</span> <span
  m='104780'>we're talking about.</span> </p><p><span m='106080'>If little x
  falls somewhere here to the left of a, and we</span> <span m='112009'>ask for
  the probability that our random variable takes</span> <span m='114440'>values
  in this interval, then this probability will be 0</span> <span
  m='118400'>because all of the probability of this uniform is</span> <span
  m='121150'>between a and b.</span> </p><p><span m='123010'>Therefore, the CDF
  is going to be 0 for values of x less than</span> <span m='129038'>or equal to
  a.</span> </p><p><span m='130990'>How about the case where x lies
  somewhere</span> <span m='134100'>between a and b?</span> </p><p><span
  m='136620'>In that case, the probability that our random variable falls</span>
  <span m='140710'>to the left of here--</span> <span m='143650'>this is
  whatever mass there is under the PDF when we consider</span> <span
  m='149680'>the integral up to this particular point.</span> </p><p><span
  m='152430'>So we're looking at the area under the PDF up to this</span> <span
  m='157310'>particular point x.</span> </p><p><span m='159030'>This area is of
  the form the base of the rectangle, which</span> <span m='163490'>is x minus
  a, times the height of the rectangle, which is 1</span> <span m='167360'>over
  b minus a.</span> </p><p><span m='169340'>This is a linear function in x that
  takes the value of 0 when</span> <span m='173500'>x is equal to a, grows
  linearly, and when x reaches a</span> <span m='180170'>value of b, it becomes
  equal to 1.</span> </p><p><span m='188060'>How about the case where x lies to
  the right of b?</span> </p><p><span m='192830'>We're talking about the
  probability that our random</span> <span m='194840'>variable takes values less
  than or equal to this</span> <span m='198050'>particular x.</span>
  </p><p><span m='199840'>But this includes the entire probability</span> <span
  m='202420'>mass of this uniform.</span> </p><p><span m='203900'>We have unit
  mass on this particular interval, so the</span> <span m='207090'>probability
  of falling to the left of here is equal to 1.</span> </p><p><span
  m='212030'>And this is the shape of the CDF for the case of a uniform</span>
  <span m='215210'>random variable.</span> </p><p><span m='216220'>It starts at
  0, eventually it rises, and eventually it</span> <span m='219880'>reaches a
  value of 1 and stays constant.</span> </p><p><span m='223290'>Coming back to
  the general case, CDFs are very useful,</span> <span m='227150'>because once
  we know the CDF of a random variable, we have</span> <span m='230900'>enough
  information to calculate anything we might</span> <span m='234140'>want to
  calculate.</span> </p><p><span m='235720'>For example, consider the following
  calculation.</span> </p><p><span m='240050'>Let us look at the range of
  numbers from minus infinity to</span> <span m='245160'>3 and then up to
  4.</span> </p><p><span m='248320'>If we want to calculate the probability that
  X is less</span> <span m='252750'>than or equal to 4, we can break it down as
  the</span> <span m='257329'>probability that X is less than or equal to
  3--</span> <span m='262130'>this is one term--</span> <span m='265040'>plus
  the probability that X falls between 3 and 4, which</span> <span
  m='275860'>would be this event here.</span> </p><p><span m='280340'>So this
  equality is true because of the additivity</span> <span m='283320'>property of
  probabilities.</span> </p><p><span m='285940'>This event is broken down into
  two possible events.</span> </p><p><span m='289409'>Either x is less than or
  equal to 3 or x is bigger than 3 but</span> <span m='293070'>less than or
  equal to 4.</span> </p><p><span m='295120'>But now we recognize that if we
  know the CDF of the random</span> <span m='299050'>variable, then we know this
  quantity.</span> </p><p><span m='301580'>We also know this quantity, and this
  allows us to</span> <span m='304820'>calculate this quantity.</span>
  </p><p><span m='306390'>So we can calculate the probability of a</span> <span
  m='308810'>more general interval.</span> </p><p><span m='310370'>So in
  general, the CDF contains all available</span> <span m='313140'>probabilistic
  information about a random variable.</span> </p><p><span m='315770'>It is just
  a different way of describing the probability</span> <span
  m='319170'>distribution.</span> </p><p><span m='320280'>From the CDF, we can
  recover any quantity we</span> <span m='322900'>might wish to know.</span>
  </p><p><span m='324530'>And for continuous random variables, the CDF
  actually</span> <span m='327430'>has enough information for us to be able to
  recover the PDF.</span> </p><p><span m='332680'>How can we do that?</span>
  </p><p><span m='334230'>Let's look at this relation here, and let's
  take</span> <span m='337050'>derivatives of both sides.</span> </p><p><span
  m='339510'>On the left, we obtain the derivative of the CDF.</span>
  </p><p><span m='344040'>And let's evaluate it at a particular point x.</span>
  </p><p><span m='347150'>What do we get on the right?</span> </p><p><span
  m='350250'>By basic calculus results, the derivative of an integral,</span>
  <span m='354850'>with respect to the upper limit of the integration, is</span>
  <span m='357820'>just the integrand itself.</span> </p><p><span m='360400'>So
  it is the density itself.</span> </p><p><span m='365690'>So this is a very
  useful formula, which tells us that</span> <span m='368830'>once we have the
  CDF, we can calculate the PDF.</span> </p><p><span m='372730'>And conversely,
  if we have the PDF, we can find the CDF by</span> <span
  m='376830'>integrating.</span> </p><p><span m='378120'>Of course, this formula
  can only be correct at those</span> <span m='381410'>places where the CDF has
  a derivative.</span> </p><p><span m='384920'>For example, at this corner here,
  the derivative of the</span> <span m='388480'>CDF is not well defined.</span>
  </p><p><span m='390370'>We would get a different value if we differentiate
  from the</span> <span m='393150'>left, a different value when we differentiate
  from the</span> <span m='395580'>right, so we cannot apply this
  formula.</span> </p><p><span m='398370'>But at those places where the CDF is
  differentiable, at</span> <span m='402760'>those places we can find the
  corresponding</span> <span m='404940'>value of the PDF.</span> </p><p><span
  m='407030'>For instance, in this diagram, at this point the CDF is</span>
  <span m='411159'>differentiable.</span> </p><p><span m='412590'>The derivative
  is equal to the slope, which is this quantity.</span> </p><p><span
  m='416850'>And this quantity happens to be exactly the same as the</span>
  <span m='421070'>value of the PDF.</span> </p><p><span m='423090'>So indeed,
  here, we see that the PDF can be found by taking</span> <span m='427430'>the
  derivative of the CDF.</span> </p><p><span m='431820'>Now, as we discussed
  earlier, CDFs are relevant to all types</span> <span m='435390'>of random
  variables.</span> </p><p><span m='436510'>So in particular, they are also
  relevant to discrete</span> <span m='439200'>random variables.</span>
  </p><p><span m='440580'>For a discrete random variable, the CDF is, of</span>
  <span m='443000'>course, defined the same way, except that we calculate
  this</span> <span m='447230'>probability by adding the probabilities of all
  possible</span> <span m='451460'>values of the random variable that are less
  than</span> <span m='455050'>[or equal to]</span> <span m='455115'>the
  particular little x that we're considering.</span> </p><p><span m='458650'>So
  we have a summation instead of an integral.</span> </p><p><span m='461720'>Let
  us look at an example.</span> </p><p><span m='463500'>This is an example of a
  discrete random variable</span> <span m='466030'>described by a PMF.</span>
  </p><p><span m='467940'>And let us try to calculate the corresponding
  CDF.</span> </p><p><span m='471530'>The probability of falling to the left of
  this number, for</span> <span m='475770'>example, is equal to 0.</span>
  </p><p><span m='478020'>And all the way up to 1, there is 0 probability of
  getting a</span> <span m='483160'>value for the random variable less than
  that.</span> </p><p><span m='486470'>But now, if we let x to be equal to 1,
  then we're talking</span> <span m='491380'>about the probability that the
  random variable takes a value</span> <span m='497210'>less than or equal to
  1.</span> </p><p><span m='499540'>And because this includes the value of 1,
  this probability</span> <span m='503670'>would be equal to 1/4.</span>
  </p><p><span m='505880'>This means that once we reach this point, the value of
  the</span> <span m='509810'>CDF becomes 1/4.</span> </p><p><span m='514320'>At
  this point, the CDF makes a jump.</span> </p><p><span m='518500'>At 1, the
  value of the CDF is equal to 1/4.</span> </p><p><span m='522440'>Just before
  1, the value of the CDF was equal to 0.</span> </p><p><span m='527340'>Now
  what's the probability of falling to the left</span> <span m='530080'>of,
  let's say, 2?</span> </p><p><span m='532320'>This probability is again
  1/4.</span> </p><p><span m='534880'>There's no change in the probability as we
  keep moving</span> <span m='538450'>inside this interval.</span> </p><p><span
  m='540280'>So the CDF stays constant, until at some point we reach</span>
  <span m='544590'>the value of 3.</span> </p><p><span m='547730'>And at that
  point, the probability that the random</span> <span m='551410'>variable takes
  a value less than or equal to 3 is going to</span> <span m='555750'>be the
  probability of a 3 plus the probability of a 1 which</span> <span
  m='560520'>becomes 3 over 4.</span> </p><p><span m='569040'>For any other x in
  this interval, the probability that</span> <span m='572940'>the random
  variable takes a value less than this number</span> <span m='576300'>will stay
  at 1/4 plus 1/2, so the CDF stays constant.</span> </p><p><span m='582730'>And
  at this point, the probability of being less than</span> <span m='587200'>or
  equal to 4, this probability becomes 1.</span> </p><p><span m='593160'>And so
  the CDF jumps once more to a value of 1.</span> </p><p><span m='599130'>Again,
  at the places where the CDF makes a jump, which one of</span> <span
  m='603800'>the two is the correct value?</span> </p><p><span m='605470'>The
  correct value is this one.</span> </p><p><span m='608060'>And this is because
  the CDF is defined by using a less than</span> <span m='613250'>or equal sign
  in the probability involved here.</span> </p><p><span m='618280'>So in the
  case of discrete random variables, the CDF</span> <span m='621630'>takes the
  form of a staircase function.</span> </p><p><span m='624310'>It starts at
  0.</span> </p><p><span m='625530'>It ends up at 1.</span> </p><p><span
  m='627290'>It has a jump at those points where the PMF assigns a</span> <span
  m='632390'>positive mass.</span> </p><p><span m='633810'>And the size of the
  jump is exactly equal to the</span> <span m='639630'>corresponding value of
  the PMF.</span> </p><p><span m='643870'>Similarly, the size of the PMF here is
  1/4, and so the size</span> <span m='649450'>of the corresponding jump at the
  CDF will</span> <span m='652190'>also be equal to 1/4.</span> </p><p><span
  m='655390'>CDFs have some general properties, and we have seen a</span> <span
  m='659140'>hint of those properties in what we have done so far.</span>
  </p><p><span m='663110'>So the CDF is, by definition, the probability of
  obtaining a</span> <span m='667060'>value less than or equal to a certain
  number little x.</span> </p><p><span m='671025'>It's the probability of this
  interval.</span> </p><p><span m='673810'>If I were to take a larger interval,
  and go up to some</span> <span m='678040'>larger number y, this would be
  the</span> <span m='680380'>probability of a bigger interval.</span>
  </p><p><span m='682100'>So that probability would only be bigger.</span>
  </p><p><span m='685770'>And this translates into the fact that the CDF is
  an</span> <span m='688990'>non-decreasing function.</span> </p><p><span
  m='691340'>If y is larger than or equal to x, as in this picture, then</span>
  <span m='696970'>the value of the CDF evaluated at that point y is going to
  be</span> <span m='701690'>larger than or equal to the CDF evaluated at
  that</span> <span m='705830'>point little x.</span> </p><p><span
  m='707700'>Other properties that the CDF has is that as x goes to</span> <span
  m='712270'>infinity, we're talking about the probability essentially of</span>
  <span m='716060'>the entire real line.</span> </p><p><span m='718200'>And so
  the CDF will converge to 1.</span> </p><p><span m='720900'>On the other hand,
  if x tends to minus infinity, so we're</span> <span m='726160'>talking about
  the probability of an interval to the left of</span> <span m='729740'>a point
  that's all the way out, further and further out.</span> </p><p><span
  m='734650'>That probability has to diminish, and eventually</span> <span
  m='737640'>converge to 0.</span> </p><p><span m='739070'>So in general, CDFs
  asymptotically start at 0.</span> </p><p><span m='744070'>They can never go
  down.</span> </p><p><span m='745500'>They can only go up.</span> </p><p><span
  m='747410'>And in the limit, as x goes to infinity, the CDF has to</span>
  <span m='752560'>approach 1.</span> </p><p><span m='754230'>Actually in the
  examples that we saw earlier, it reaches the</span> <span m='757800'>value of
  1 after a certain finite point.</span> </p><p><span m='761640'>But in general,
  for general random variables, it might</span> <span m='764420'>only reach the
  value 1 asymptotically</span> </p>
uid: 7c508046b8734f1adda8a050bc61e403
type: courses
layout: video
---
