---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: MzvRQFYUEFU
    parent_uid: 7942309b2a999c792f676ff9818478da
    title: Video-YouTube-Stream
    type: Video
    uid: 4eed6cacdea785b3121cb18e40d6bc8a
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/MzvRQFYUEFU/default.jpg'
    parent_uid: 7942309b2a999c792f676ff9818478da
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 5cc5801e14ccdd42ad904962d8a0fed0
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: MzvRQFYUEFU
    parent_uid: 7942309b2a999c792f676ff9818478da
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: a34a138a32e8f9c768ecbdc910c24447
  - id: MzvRQFYUEFU.srt
    parent_uid: 7942309b2a999c792f676ff9818478da
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/confidence-intervals-for-the-mean-when-the-variance-is-unknown/MzvRQFYUEFU.srt
    title: 3play caption file
    type: null
    uid: 4556251d3d2a65a8b404f886464cf4dd
  - id: MzvRQFYUEFU.pdf
    parent_uid: 7942309b2a999c792f676ff9818478da
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/confidence-intervals-for-the-mean-when-the-variance-is-unknown/MzvRQFYUEFU.pdf
    title: 3play pdf file
    type: null
    uid: 4ca172b62411246c65f4100650b8f890
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 7942309b2a999c792f676ff9818478da
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0102c365c3c384ee580e220dacb96a5e
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 7942309b2a999c792f676ff9818478da
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0df95f4af06d5fe2de69b9cea4ce7134
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L20-07_300k.mp4
    parent_uid: 7942309b2a999c792f676ff9818478da
    title: Video-Internet Archive-MP4
    type: Video
    uid: 924c20ed2492c05c0aeee6ae05934b6a
inline_embed_id: 6144325confidenceintervalsforthemeanwhenthevarianceisunknown98164398
order_index: 1876
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: confidence-intervals-for-the-mean-when-the-variance-is-unknown
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/confidence-intervals-for-the-mean-when-the-variance-is-unknown
title: 'Confidence Intervals for the Mean, When the Variance is Unknown'
transcript: >-
  <p><span m='1210'>By this time, we know how to construct confidence
  intervals</span> <span m='5070'>when we try to estimate an unknown mean of a
  certain</span> <span m='8380'>distribution using the sample mean as our
  estimator.</span> </p><p><span m='12340'>Or actually, these are approximate
  confidence</span> <span m='14980'>intervals, because we are using the
  approximation</span> <span m='18850'>suggested by the central limit
  theorem.</span> </p><p><span m='21740'>But what if we do not know the value of
  sigma, the standard</span> <span m='25690'>deviation of the X's?</span>
  </p><p><span m='27790'>Then we have a few options.</span> </p><p><span
  m='29940'>One option is to use an upper bound on sigma.</span> </p><p><span
  m='33253'>So we will be using a value that's larger</span> <span
  m='36600'>than or equal to sigma.</span> </p><p><span m='38326'>And this is
  going to make our interval somewhat larger.</span> </p><p><span m='42180'>So
  this is a conservative choice, but it is</span> <span m='44670'>definitely an
  option.</span> </p><p><span m='45890'>For example, if we're dealing with
  Bernoulli random</span> <span m='48330'>variables, we know that the standard
  deviation is less</span> <span m='51320'>than or equal to 1/2, so we can just
  plug-in the value of</span> <span m='54480'>1/2 at this point.</span>
  </p><p><span m='56840'>Another option is to try to estimate sigma.</span>
  </p><p><span m='60220'>How do we estimate it?</span> </p><p><span m='62230'>We
  can perhaps use an ad hoc estimate of sigma that fits to</span> <span
  m='66740'>the particular situation at hand.</span> </p><p><span m='68980'>So
  for example, in the Bernoulli case, we know that</span> <span m='72800'>sigma
  is given by this formula, where theta is the</span> <span m='77900'>mean of
  the Bernoulli.</span> </p><p><span m='79830'>And using this, and since we do
  have an estimate of theta--</span> <span m='84490'>this is just the sample
  mean--</span> <span m='86810'>we can plug-in that particular estimate.</span>
  </p><p><span m='89990'>And that gives us an estimate of the standard
  deviation.</span> </p><p><span m='94320'>When n is large, this estimate is
  going to be very close to</span> <span m='98509'>the true value.</span>
  </p><p><span m='99770'>And so this estimate of the standard deviation will
  also</span> <span m='103229'>be very close to the true value.</span>
  </p><p><span m='107090'>Both of these options were discussed for special
  cases</span> <span m='111130'>where we have special structure and we can
  derive an</span> <span m='113780'>upper bound, or there is a natural
  estimate</span> <span m='116030'>that suggests itself.</span> </p><p><span
  m='117810'>More generally, what can we do?</span> </p><p><span m='120550'>One
  general option is to use a generic way of</span> <span m='124680'>estimating
  the variance.</span> </p><p><span m='127190'>And here's how it goes.</span>
  </p><p><span m='130419'>The variance is, by definition, the expected
  value</span> <span m='134060'>of something, of this expression.</span>
  </p><p><span m='137290'>And we can estimate expected values by taking
  several</span> <span m='141500'>samples of this quantity, and taking the
  average of them.</span> </p><p><span m='146150'>So if we have n pieces of
  data, for each piece of data,</span> <span m='150530'>we calculate this
  quantity, divide by n.</span> </p><p><span m='153900'>And by the weak law of
  large numbers, this is the sample</span> <span m='159290'>mean of this
  particular random variable.</span> </p><p><span m='162100'>And it converges to
  the expected value</span> <span m='165480'>of this random variable.</span>
  </p><p><span m='168250'>So that's how we could estimate the variance.</span>
  </p><p><span m='171590'>But there is a catch.</span> </p><p><span
  m='173470'>This expression here involves the mean</span> <span m='176760'>of
  the random variable.</span> </p><p><span m='178280'>And this is something that
  we do not know.</span> </p><p><span m='180640'>So what can we do?</span>
  </p><p><span m='182570'>Well, we have an estimate for the mean, so we could
  just</span> <span m='185630'>plug in that estimate instead of the true
  value.</span> </p><p><span m='189750'>And this gives us this alternative
  expression.</span> </p><p><span m='193440'>Now, when n is very large, as n
  increases, this sample mean</span> <span m='199590'>converges to the true
  mean.</span> </p><p><span m='201800'>So this expression here would become
  closer and closer to</span> <span m='206040'>this expression.</span>
  </p><p><span m='207500'>Now, this expression converges to sigma squared, and
  we</span> <span m='211700'>conclude from this that this expression will also
  converge</span> <span m='214960'>to sigma squared.</span> </p><p><span
  m='216460'>And so here we have a way of estimating sigma squared from</span>
  <span m='220360'>the data, and by taking the square root, we obtain an</span>
  <span m='223840'>estimate of sigma as well that we can plug in in this</span>
  <span m='227120'>expression.</span> </p><p><span m='229290'>And this gives us
  a complete way of coming up with</span> <span m='232420'>confidence intervals
  when we only have data available in</span> <span m='236880'>our hands, but do
  not know ahead of time what sigma is.</span> </p><p><span m='243460'>Some
  remarks.</span> </p><p><span m='245570'>This procedure of constructing
  confidence intervals involves</span> <span m='250040'>two separate
  approximations.</span> </p><p><span m='252330'>One approximation has to do
  with the fact that the sample</span> <span m='255620'>mean is approximately
  normal according to the</span> <span m='258810'>central limit theorem.</span>
  </p><p><span m='260540'>And then there is a second approximation that comes in
  in</span> <span m='264500'>using an estimate of sigma instead of the</span>
  <span m='266930'>true value of sigma.</span> </p><p><span m='269010'>Now, when
  we estimate sigma instead of using the true</span> <span m='272350'>value,
  we're introducing some additional</span> <span m='275550'>randomness in this
  procedure.</span> </p><p><span m='277890'>And because of this randomness, the
  confidence</span> <span m='280460'>intervals actually should be a little
  larger.</span> </p><p><span m='283900'>There is a systematic way of doing
  that, and it involves</span> <span m='288670'>using the so-called
  t-distribution tables.</span> </p><p><span m='292860'>And those tables are
  going to give us certain numbers that</span> <span m='296500'>are a little
  different from what we have here.</span> </p><p><span m='299310'>So instead of
  1.96, we might have a somewhat larger number.</span> </p><p><span
  m='304500'>This correction is relevant when n is a small number,</span> <span
  m='308300'>let's say n smaller than 30.</span> </p><p><span m='311050'>But for
  larger values of n, this correction, where we use</span> <span m='315130'>t
  tables instead of normal tables, is rather</span> <span
  m='317860'>insignificant and one doesn't bother with it.</span> </p><p><span
  m='321060'>In any case, we will not discuss any further this</span> <span
  m='323910'>additional correction, but it is useful to know that it is</span>
  <span m='327720'>something that the statisticians will often do.</span>
  </p><p><span m='331450'>Finally, one last remark.</span> </p><p><span
  m='333990'>One will often see an alternative way of estimating</span> <span
  m='338610'>the variance where instead of this factor of 1/n, one uses a</span>
  <span m='343870'>factor of 1 over n minus 1.</span> </p><p><span
  m='347840'>With this alternative form, it turns out that this is an</span>
  <span m='351190'>unbiased estimator of the variance.</span> </p><p><span
  m='354990'>And that could be a reason for preferring to use this</span> <span
  m='358650'>alternative form.</span> </p><p><span m='360110'>On the other hand,
  when n is large, whether we use n or n</span> <span m='364080'>minus 1 makes
  very little difference.</span> </p><p><span m='367410'>And this concludes our
  discussion</span> <span m='369490'>of confidence intervals.</span> </p><p></p>
uid: 7942309b2a999c792f676ff9818478da
type: courses
layout: video
---
