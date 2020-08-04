---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: nuXDb9B3y0M
    parent_uid: 3e2c784f1e08ceb8a18c4acb7261adff
    title: Video-YouTube-Stream
    type: Video
    uid: 6e53bb85caf75e0b730cd5d04e5c58ed
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/nuXDb9B3y0M/default.jpg'
    parent_uid: 3e2c784f1e08ceb8a18c4acb7261adff
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2f3cc2ee5de019f48fb48714d69e6142
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: nuXDb9B3y0M
    parent_uid: 3e2c784f1e08ceb8a18c4acb7261adff
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: be64c8a08e2924d127cdeea4d0d6e284
  - id: nuXDb9B3y0M.srt
    parent_uid: 3e2c784f1e08ceb8a18c4acb7261adff
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-sample-mean-and-some-terminology/nuXDb9B3y0M.srt
    title: 3play caption file
    type: null
    uid: 880ee9571a93f0bb62d5b97d7381fe5e
  - id: nuXDb9B3y0M.pdf
    parent_uid: 3e2c784f1e08ceb8a18c4acb7261adff
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-sample-mean-and-some-terminology/nuXDb9B3y0M.pdf
    title: 3play pdf file
    type: null
    uid: f402b495caae98a5742e0232c54ba139
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 3e2c784f1e08ceb8a18c4acb7261adff
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0e018751b7d3752f099c977a37e4b1a2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 3e2c784f1e08ceb8a18c4acb7261adff
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 7e2a57e80acfe7ff5d66d462ceb56581
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L20-03_300k.mp4
    parent_uid: 3e2c784f1e08ceb8a18c4acb7261adff
    title: Video-Internet Archive-MP4
    type: Video
    uid: 193f992de92df5a9de512fc4bdea95b7
inline_embed_id: 69988908thesamplemeanandsometerminology55677549
order_index: 1840
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: the-sample-mean-and-some-terminology
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-sample-mean-and-some-terminology
title: The Sample Mean and Some Terminology
transcript: >-
  <p><span m='220'>Let us now discuss a little bit the simplest
  estimation</span> <span m='3420'>problem that there is, the problem of
  estimating the mean</span> <span m='6740'>of a certain probability
  distribution, and we will take</span> <span m='10130'>this occasion to
  introduce some additional terminology</span> <span m='13830'>and discuss some
  desirable properties of estimators.</span> </p><p><span m='17430'>So the
  context is as follows.</span> </p><p><span m='19620'>We have n random
  variables that are independent, and</span> <span m='23390'>they're identically
  distributed.</span> </p><p><span m='24880'>They are drawn from some
  distribution that has a</span> <span m='27090'>certain mean theta and some
  variance.</span> </p><p><span m='30560'>We assume that we do not know the
  value of the mean, and we</span> <span m='33970'>want to estimate it.</span>
  </p><p><span m='35490'>The most natural way of estimating the mean is to
  form</span> <span m='39090'>the sample mean, that is, we take the n
  observations and</span> <span m='42760'>take their average.</span>
  </p><p><span m='45530'>Notice, that this quantity, the sample mean or, in
  this</span> <span m='51040'>case, it is the estimator that we're using, is a
  random</span> <span m='54900'>variable because its value is determined by the
  values of</span> <span m='59370'>the random variables X1 up to Xn.</span>
  </p><p><span m='63500'>Let us discuss some properties of this
  estimator.</span> </p><p><span m='66880'>The first property is that the
  expected value of this</span> <span m='71070'>estimator is equal to the true
  mean.</span> </p><p><span m='73720'>This is because the expected value of each
  one of the Xs is</span> <span m='76870'>theta, and therefore, the expected
  value of this ratio</span> <span m='80140'>is theta as well.</span>
  </p><p><span m='82390'>Now, this is a relation that's true for all</span>
  <span m='86240'>possible values of theta.</span> </p><p><span m='91270'>Let us
  appreciate the content of this statement.</span> </p><p><span m='94800'>Let us
  think what this expectation actually is.</span> </p><p><span m='98509'>More
  generally, suppose that we're dealing with some</span> <span
  m='101390'>estimator, which is some function of the data.</span> </p><p><span
  m='106210'>Then, the expected value of this estimator is using the</span>
  <span m='113050'>expected value rule, and assuming that we're dealing</span>
  <span m='116340'>with a discrete random variable X, the expected value</span>
  <span m='121140'>of theta hat is determined as follows.</span> </p><p><span
  m='127940'>And so we see that the expected value for estimator</span> <span
  m='132050'>depends, or is affected, by what the true</span> <span
  m='135310'>value of theta is.</span> </p><p><span m='137210'>So this is a
  quantity that generally depends on theta.</span> </p><p><span m='140400'>And
  what we want in order to have a so-called unbiased</span> <span
  m='144660'>estimator is that no matter what theta is, this</span> <span
  m='149130'>expectation evaluates to the true unknown</span> <span
  m='153760'>value equal to theta.</span> </p><p><span m='157170'>In general,
  having this property, having an unbiased</span> <span m='160760'>estimator, is
  a desirable one.</span> </p><p><span m='163370'>We do not want our estimates
  to be systematically high or</span> <span m='167070'>systematically low, no
  matter what the true</span> <span m='169840'>value of theta is.</span>
  </p><p><span m='172740'>A second property of the sample mean</span> <span
  m='174510'>estimator is the following.</span> </p><p><span m='176630'>By the
  weak law of large numbers, we know that the</span> <span m='180010'>sample
  mean converges to the true mean in the sense of</span> <span
  m='184890'>convergence in probability.</span> </p><p><span m='187670'>Once
  more, this is a property that's true, no matter what</span> <span
  m='193450'>the underlying unknown value little theta is.</span> </p><p><span
  m='198570'>When this is true, this convergence is true, for all</span> <span
  m='203050'>values of little theta, then we say that our estimator is</span>
  <span m='207070'>consistent or that we have consistency.</span> </p><p><span
  m='210650'>Having a consistent estimator is definitely a</span> <span
  m='213320'>very desirable property.</span> </p><p><span m='215240'>We would
  like, when we obtain more and more data, that our</span> <span
  m='219220'>estimator will give us the correct value.</span> </p><p><span
  m='223350'>Finally, we would like to say something about the size of</span>
  <span m='226690'>the estimation error.</span> </p><p><span m='228670'>This is
  measured--</span> <span m='230290'>one way of measuring it, but which is the
  most common, it's</span> <span m='233920'>measured in terms of the mean
  squared error.</span> </p><p><span m='237460'>So theta is the unknown
  value.</span> </p><p><span m='239420'>This is our estimator.</span>
  </p><p><span m='240840'>This is the error.</span> </p><p><span m='242070'>We
  square the error, and we take the average.</span> </p><p><span m='245680'>What
  we've got here for this specific example of the sample</span> <span
  m='249810'>mean estimator is the following.</span> </p><p><span
  m='252670'>Since it is unbiased, we have a random variable minus the</span>
  <span m='257279'>mean of that random variable, so this is just the
  variance</span> <span m='261870'>of the estimator.</span> </p><p><span
  m='266240'>And for the sample mean, we know that its variance is</span> <span
  m='270770'>sigma squared over n.</span> </p><p><span m='273200'>So this gives
  us some very specific knowledge about how</span> <span m='277520'>the mean
  squared error behaves as we change n.</span> </p><p><span m='281320'>In this
  particular example, the mean squared error did not</span> <span
  m='285600'>depend on theta.</span> </p><p><span m='287540'>It's the same no
  matter what the true theta is.</span> </p><p><span m='291040'>But in other
  situations and with other estimators, you</span> <span m='294340'>might
  actually obtain here a function of theta.</span> </p><p></p>
uid: 3e2c784f1e08ceb8a18c4acb7261adff
type: course
layout: video
---
