---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: lET4uQLpmM0
    parent_uid: 4eda0ecf3c08877c0d035dd8ed8b3a82
    title: Video-YouTube-Stream
    type: Video
    uid: 0bc3aa1663404628965c071a18df227b
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/lET4uQLpmM0/default.jpg'
    parent_uid: 4eda0ecf3c08877c0d035dd8ed8b3a82
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 368a7df33b31f8dd9c885201445a6b53
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: lET4uQLpmM0
    parent_uid: 4eda0ecf3c08877c0d035dd8ed8b3a82
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4a6489a5829cbea5483dd97b1dfaa245
  - id: lET4uQLpmM0.srt
    parent_uid: 4eda0ecf3c08877c0d035dd8ed8b3a82
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/on-the-mean-squared-error-of-an-estimator/lET4uQLpmM0.srt
    title: 3play caption file
    type: null
    uid: f90191f38325e0d23ab4ee45834f529f
  - id: lET4uQLpmM0.pdf
    parent_uid: 4eda0ecf3c08877c0d035dd8ed8b3a82
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/on-the-mean-squared-error-of-an-estimator/lET4uQLpmM0.pdf
    title: 3play pdf file
    type: null
    uid: 0264080f154fe2519e1741853cd1b358
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 4eda0ecf3c08877c0d035dd8ed8b3a82
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b4c168e2b5953a2076296b0892adbd48
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 4eda0ecf3c08877c0d035dd8ed8b3a82
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 6b2cf6c17f4d56e501e54bcdd6248f54
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L20-04_300k.mp4
    parent_uid: 4eda0ecf3c08877c0d035dd8ed8b3a82
    title: Video-Internet Archive-MP4
    type: Video
    uid: d27686df35603987fc16b3877fed699c
inline_embed_id: 81873335onthemeansquarederrorofanestimator34331737
order_index: 1849
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: on-the-mean-squared-error-of-an-estimator
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/on-the-mean-squared-error-of-an-estimator
title: On the Mean Squared Error of an Estimator
transcript: >-
  <p><span m='475'>In this segment, we discuss a little more the</span> <span
  m='3050'>mean squared error.</span> </p><p><span m='4890'>Consider some
  estimator.</span> </p><p><span m='6660'>It can be any estimator, not just the
  sample mean.</span> </p><p><span m='10000'>We can decompose the mean squared
  error as</span> <span m='12670'>a sum of two terms.</span> </p><p><span
  m='15430'>Where does this formula come from?</span> </p><p><span
  m='17520'>Well, we know that for any random variable Z, this</span> <span
  m='20610'>formula is valid.</span> </p><p><span m='22490'>And if we let Z be
  equal to the difference between the</span> <span m='27060'>estimator and the
  value that we're trying to estimate, then</span> <span m='31230'>we obtain
  this formula here.</span> </p><p><span m='33120'>The expected value of our
  random variable Z squared is</span> <span m='37000'>equal to the variance of
  that random variable plus the</span> <span m='39460'>square of its
  mean.</span> </p><p><span m='42880'>Let us now rewrite these two terms in
  a</span> <span m='45280'>more suggestive way.</span> </p><p><span m='47120'>We
  first notice that theta is a constant.</span> </p><p><span m='49920'>When you
  add or subtract the constant from a random</span> <span m='52530'>variable,
  the variance does not change.</span> </p><p><span m='55030'>So this term is
  the same as the variance of theta hat.</span> </p><p><span m='59650'>This
  quantity here, we will call it</span> <span m='62710'>the bias of the
  estimator.</span> </p><p><span m='66120'>It tells us whether theta hat is
  systematically above or</span> <span m='70130'>below than the unknown
  parameter theta that we're</span> <span m='72870'>trying to estimate.</span>
  </p><p><span m='74340'>And using this terminology, this term here is just
  equal</span> <span m='78310'>to the square of the bias.</span> </p><p><span
  m='80660'>So the mean squared error consists of two components,</span> <span
  m='83890'>and these capture different aspects of an estimator's</span> <span
  m='87820'>performance.</span> </p><p><span m='89039'>Let us see what they are
  in a concrete setting.</span> </p><p><span m='92620'>Suppose that we're
  estimating the unknown mean of some</span> <span m='95780'>distribution, and
  that our estimator is the sample mean.</span> </p><p><span m='102130'>In this
  case, the mean squared error is the variance, which</span> <span m='106960'>we
  know to be sigma squared over n, plus the bias term.</span> </p><p><span
  m='112940'>But we know that the sample mean is unbiased.</span> </p><p><span
  m='115539'>The expected value of the sample mean is equal to the</span> <span
  m='118450'>unknown mean.</span> </p><p><span m='119500'>And so the bias
  contribution is equal to zero.</span> </p><p><span m='123160'>Now, for the
  sake of a comparison, let us consider a</span> <span m='125930'>somewhat silly
  estimator which ignores the data all together,</span> <span m='129960'>and
  always gives you an estimate of zero.</span> </p><p><span m='136000'>In this
  case, the mean squared error is as follows.</span> </p><p><span
  m='140210'>Since our estimator is just a constant, its variance is</span>
  <span m='144480'>going to be equal to zero.</span> </p><p><span m='146530'>On
  the other hand, since theta hat is zero, this term here is</span> <span
  m='153230'>just the constant, theta, squared.</span> </p><p><span
  m='156770'>And this gives us the corresponding</span> <span m='159260'>mean
  squared error.</span> </p><p><span m='160980'>Let us now compare the two
  estimators.</span> </p><p><span m='163829'>We will plot the mean squared error
  as a function of the</span> <span m='168490'>unknown parameter, theta.</span>
  </p><p><span m='171490'>For the sample mean estimator, the mean squared error
  is</span> <span m='175680'>constant, it does not depend on theta, and is equal
  to this</span> <span m='181400'>value, sigma squared over n.</span>
  </p><p><span m='183650'>On the other hand, for the zero estimator, the
  mean</span> <span m='188260'>squared error is equal to theta squared.</span>
  </p><p><span m='192130'>How do they compare?</span> </p><p><span
  m='193410'>Which one is better?</span> </p><p><span m='195280'>At this point,
  there's no way to say that one is</span> <span m='197630'>better than the
  other.</span> </p><p><span m='199130'>For some theta, the sample mean has a
  smaller mean</span> <span m='203260'>squared error.</span> </p><p><span
  m='205320'>But for other theta, the zero estimator has a smaller mean</span>
  <span m='211130'>squared error.</span> </p><p><span m='213190'>But we do not
  know where the true value of theta is.</span> </p><p><span m='216630'>It could
  be anything.</span> </p><p><span m='218030'>So we cannot say that one is
  better than the other.</span> </p><p><span m='221750'>Of course, we know that
  the sample mean is</span> <span m='224640'>a consistent estimator.</span>
  </p><p><span m='226720'>As n goes to infinity, it will give you the</span>
  <span m='229530'>true value of theta.</span> </p><p><span m='231160'>And this
  is a very desirable properties that the zero</span> <span m='234170'>estimator
  does not have.</span> </p><p><span m='236630'>But if n is moderate, the
  situation is less clear.</span> </p><p><span m='241610'>If we have some good
  reason to expect that the true value of</span> <span m='245810'>theta is
  somewhere in the vicinity of zero, then the</span> <span m='249460'>zero
  estimator might be a better one, because it then</span> <span m='253605'>will
  achieve a smaller mean squared error.</span> </p><p><span m='257180'>But in a
  classical statistical framework, there is no way to</span> <span
  m='261170'>express a belief of this kind.</span> </p><p><span m='264710'>In
  contrast, if we were following a Bayesian approach,</span> <span
  m='268530'>you could provide a prior distribution for theta that</span> <span
  m='271830'>would be highly concentrated around zero.</span> </p><p><span
  m='274560'>This would express your beliefs about theta, and would</span> <span
  m='277780'>provide you with the guidance to choose between the two</span>
  <span m='281190'>estimators, or maybe suggest an even better estimator.</span>
  </p><p><span m='286860'>In any case, going back to this formula, this
  quantity,</span> <span m='290370'>the variance of the estimator plays an
  important role in the</span> <span m='293770'>analysis of different
  estimators.</span> </p><p><span m='296580'>And the more intuitive variant of
  this quantity is its square</span> <span m='301000'>root, which is the
  standard deviation of the estimator,</span> <span m='306020'>and is usually
  called the standard</span> <span m='308320'>error of the estimator.</span>
  </p><p><span m='310720'>We can interpret the standard error as follows.</span>
  </p><p><span m='314280'>We have the true value of theta.</span> </p><p><span
  m='319300'>Then on day one, we collect some data, we perform the</span> <span
  m='323290'>estimation procedure, and we come up with an estimate.</span>
  </p><p><span m='327610'>On day two, we do the same thing, but
  independently.</span> </p><p><span m='332010'>We collect a new set of data,
  and we come up</span> <span m='335420'>with another estimate.</span>
  </p><p><span m='337590'>And so on.</span> </p><p><span m='338850'>We do this
  many times.</span> </p><p><span m='340970'>We use different data sets to come
  up</span> <span m='344210'>with different estimates.</span> </p><p><span
  m='346030'>And because of the randomness in the data, these estimates</span>
  <span m='349900'>may be all over the place.</span> </p><p><span
  m='352390'>Well, the standard error tells us how spread out all these</span>
  <span m='356710'>estimates will be.</span> </p><p><span m='358130'>It is the
  standard deviation of this</span> <span m='360910'>collection of
  estimates.</span> </p><p><span m='363240'>Having a large standard error means
  that our estimation</span> <span m='366820'>procedure is quite noisy, and that
  our estimates have some</span> <span m='371570'>inherent randomness.</span>
  </p><p><span m='373590'>And therefore, also have a lack of accuracy.</span>
  </p><p><span m='377560'>That is, they cannot be trusted too much.</span>
  </p><p><span m='380620'>That's the case of a large standard error.</span>
  </p><p><span m='383240'>Conversely, a small standard error would tell us that
  the</span> <span m='387240'>estimates would tend to be concentrated</span>
  <span m='390210'>close to each other.</span> </p><p><span m='392520'>As such,
  the standard error is a very useful piece of</span> <span
  m='396560'>information to have.</span> </p><p><span m='399180'>Besides
  designing and implementing an estimator, one</span> <span m='404210'>usually
  also tries to find a way to calculate and report</span> <span m='409260'>the
  associated standard error.</span> </p><p></p>
uid: 4eda0ecf3c08877c0d035dd8ed8b3a82
type: courses
layout: video
---
