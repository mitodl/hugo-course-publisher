---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: gJSPef9zC0c
    parent_uid: aa2654141506d32ecb8b30fa2f213345
    title: Video-YouTube-Stream
    type: Video
    uid: 3b74a691696c88fd793dc61b14a24ea6
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/gJSPef9zC0c/default.jpg'
    parent_uid: aa2654141506d32ecb8b30fa2f213345
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d6074c0867dd12a23e0964d9fba09604
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: gJSPef9zC0c
    parent_uid: aa2654141506d32ecb8b30fa2f213345
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 8db006a7406a1fd90739a32dcea06296
  - id: gJSPef9zC0c.srt
    parent_uid: aa2654141506d32ecb8b30fa2f213345
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/inferring-the-unknown-bias-of-a-coin2014point-estimates/gJSPef9zC0c.srt
    title: 3play caption file
    type: null
    uid: a9713721b5c4773c927d2eb254197cdd
  - id: gJSPef9zC0c.pdf
    parent_uid: aa2654141506d32ecb8b30fa2f213345
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/inferring-the-unknown-bias-of-a-coin2014point-estimates/gJSPef9zC0c.pdf
    title: 3play pdf file
    type: null
    uid: 43b027a18071f8200edee83daff46141
  - id: Caption-3Play YouTube id-SRT
    parent_uid: aa2654141506d32ecb8b30fa2f213345
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: e7b01eba3401fde95d5fae478e7f9373
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: aa2654141506d32ecb8b30fa2f213345
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: acfbe4ae857f635445484d1588701c6e
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L14-09_300k.mp4
    parent_uid: aa2654141506d32ecb8b30fa2f213345
    title: Video-Internet Archive-MP4
    type: Video
    uid: 0d9439af4cb7e76d60699c3cef9fcac6
inline_embed_id: 70424777inferringtheunknownbiasofacoinpointestimates92523343
order_index: 1408
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: inferring-the-unknown-bias-of-a-coin2014point-estimates
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/inferring-the-unknown-bias-of-a-coin2014point-estimates
title: Inferring the Unknown Bias of a Coin—Point Estimates
transcript: >-
  <p><span m='680'>We will now continue with the problem</span> <span
  m='2550'>of inferring the unknown bias of a certain coin</span> <span
  m='6300'>for which we have a certain prior distribution</span> <span
  m='9130'>and of which we observe the number of heads</span> <span m='11980'>in
  n independent coin tosses.</span> </p><p><span m='15130'>We have already seen
  that if we assume a uniform prior,</span> <span m='19210'>the posterior takes
  this particular form, which</span> <span m='21810'>comes from the family of
  Beta distributions.</span> </p><p><span m='24830'>What we want to do now is to
  actually derive</span> <span m='28010'>point estimates.</span> </p><p><span
  m='29830'>That is, instead of just providing the posterior,</span> <span
  m='33620'>we would like to select a specific estimate</span> <span
  m='36120'>for the unknown bias.</span> </p><p><span m='38310'>Let us look at
  the maximum a posteriori probability</span> <span m='42040'>estimate.</span>
  </p><p><span m='43380'>How can we find it?</span> </p><p><span m='45030'>By
  definition, the MAP estimate is that value of theta</span> <span
  m='50340'>that maximizes the posterior, the value of theta</span> <span
  m='53750'>at which the posterior is largest.</span> </p><p><span
  m='56790'>Now, instead of maximizing the posterior,</span> <span m='59800'>it
  is more convenient in this example</span> <span m='62070'>to maximize the
  logarithm of the posterior.</span> </p><p><span m='66030'>And the logarithm is
  k times log theta,</span> <span m='71860'>plus n minus k times the log of 1
  minus theta.</span> </p><p><span m='79160'>To carry out the maximization over
  theta,</span> <span m='83100'>we form the derivative with respect to
  theta</span> <span m='86530'>and set that derivative to 0.</span> </p><p><span
  m='88970'>So the derivative of the first term is k over theta.</span>
  </p><p><span m='93300'>And the derivative of the second term</span> <span
  m='95550'>is n minus k over this quantity, 1 minus theta.</span> </p><p><span
  m='102550'>But because of the minus here when we apply the chain rule,</span>
  <span m='107520'>actually, this plus sign here is going to become a minus
  sign.</span> </p><p><span m='113130'>And now we set this derivative to
  0.</span> </p><p><span m='116580'>We carry out the algebra, which is rather
  simple.</span> </p><p><span m='120340'>And the end result that you will
  find</span> <span m='123460'>is that the estimate is equal to k over n.</span>
  </p><p><span m='128728'>Notice that this is lowercase k.</span> </p><p><span
  m='132080'>We are told the specific value of heads</span> <span
  m='135200'>that has been observed.</span> </p><p><span m='137170'>So little k
  is a number, and our estimate, accordingly,</span> <span m='141140'>is a
  number.</span> </p><p><span m='143360'>This answer makes perfect sense.</span>
  </p><p><span m='146370'>A very reasonable way of estimating</span> <span
  m='148980'>the probability of heads of a certain coin</span> <span
  m='152110'>is to look at the number of heads</span> <span m='154260'>obtained
  and divide by the total number of trials.</span> </p><p><span m='158270'>So we
  see that the MAP estimate turns out</span> <span m='160640'>to be a quite
  natural one.</span> </p><p><span m='163570'>How about the corresponding
  estimator?</span> </p><p><span m='166920'>Recall the distinction that the
  estimator</span> <span m='169390'>is a random variable that tells us what the
  estimate is going</span> <span m='172760'>to be as a function of the random
  variable that</span> <span m='177810'>is going to be observed.</span>
  </p><p><span m='180630'>The estimator is uppercase K divided by little
  n.</span> </p><p><span m='187690'>So it is a random variable whose
  value</span> <span m='191610'>is determined by the value of the random
  variable capital</span> <span m='195130'>K. If the random variable capital K
  happens</span> <span m='197620'>to take on this specific value, little k,
  then</span> <span m='200730'>our estimator, this random variable,</span> <span
  m='203329'>will be taking this specific value, which is the estimate.</span>
  </p><p><span m='208690'>And let us now compare with an alternative way</span>
  <span m='211390'>of estimating Theta.</span> </p><p><span m='212970'>We will
  consider estimating Theta</span> <span m='215270'>by forming the conditional
  expectation of Theta, given</span> <span m='219460'>the specific number of
  heads that we have observed.</span> </p><p><span m='223470'>This is what we
  call the LMS or least mean squares estimate.</span> </p><p><span m='229110'>To
  calculate this conditional expectation,</span> <span m='231620'>all that we
  need to do is to form the integral of theta</span> <span m='238650'>times the
  density of Theta.</span> </p><p><span m='242390'>But since it's a conditional
  expectation,</span> <span m='244330'>we need to take the conditional density
  of Theta.</span> </p><p><span m='251240'>And the integral ranges from 0 to
  1,</span> <span m='254200'>because this is the range of our random variable,
  Theta.</span> </p><p><span m='259880'>Now, what is this?</span> </p><p><span
  m='261200'>We have a formula for the posterior density.</span> </p><p><span
  m='264380'>So we need to just multiply this expression here by theta,</span>
  <span m='268160'>and then integrate.</span> </p><p><span m='269970'>This term
  here is a constant.</span> </p><p><span m='272440'>So it can be pulled outside
  the integral.</span> </p><p><span m='280030'>And inside the integral, we are
  left with this term times</span> <span m='287260'>theta, which changes the
  exponent of theta to k plus 1.</span> </p><p><span m='294520'>Then we have 1
  minus theta to the power n minus k, d theta.</span> </p><p><span m='302630'>At
  this point, we need to do some calculations.</span> </p><p><span
  m='306540'>What is d of n, k?</span> </p><p><span m='309020'>d of n, k is the
  normalizing constant of this PDF.</span> </p><p><span m='313860'>For this to
  be a PDF and to integrate to 1, d of n, k</span> <span m='318960'>has to be
  equal to the integral of this expression from 0 to 1.</span> </p><p><span
  m='325310'>So we need to somehow be able to evaluate this integral.</span>
  </p><p><span m='329490'>Here, we will be helped by the following very nice
  formula.</span> </p><p><span m='335300'>This formula tells us that the
  integral</span> <span m='337790'>of for such a function of theta from 0 to
  1</span> <span m='342710'>is equal to this very nice and simple
  expression.</span> </p><p><span m='347730'>Of course, this formula is only
  valid</span> <span m='349670'>when these factorials make sense.</span>
  </p><p><span m='352250'>So we assume that alpha is non-negative</span> <span
  m='354860'>and theta is non-negative.</span> </p><p><span m='358070'>How is
  this formula derived?</span> </p><p><span m='359960'>There's various algebraic
  or calculus style derivations.</span> </p><p><span m='365140'>One possibility
  is to use integration by parts.</span> </p><p><span m='367900'>And there are
  also other tricks for deriving it.</span> </p><p><span m='370830'>It turns out
  that there is also a very clever</span> <span m='373930'>probabilistic proof
  of this fact.</span> </p><p><span m='376780'>But in any case, we will not
  derive it.</span> </p><p><span m='379380'>We will just take it as a fact that
  comes to us from calculus.</span> </p><p><span m='384120'>And now, let us
  apply this formula.</span> </p><p><span m='388440'>d of n, k is equal to the
  integral of this expression,</span> <span m='393770'>which is of this form,
  with alpha equal to k and beta</span> <span m='398520'>equal to n minus
  k.</span> </p><p><span m='401390'>So d of n, k takes the form alpha is k, beta
  is n minus k.</span> </p><p><span m='417960'>And then in the denominator, we
  have</span> <span m='420760'>the sum of the two indices plus 1.</span>
  </p><p><span m='423630'>So it's going to be k plus n minus k.</span>
  </p><p><span m='425560'>That gives us n.</span> </p><p><span m='427030'>And
  then there's a plus 1.</span> </p><p><span m='432530'>And how about this
  integral?</span> </p><p><span m='435450'>Well, this integral is also of the
  form that we have up here.</span> </p><p><span m='440540'>But now, we have
  alpha equal to k plus 1,</span> <span m='450530'>beta is n minus k.</span>
  </p><p><span m='457940'>And in the denominator, we have the sum of the indices
  plus 1.</span> </p><p><span m='462710'>So when we add these indices, we get n
  plus 1.</span> </p><p><span m='465880'>And then we get another factor of
  1,</span> <span m='468880'>which gives us an n plus 2.</span> </p><p><span
  m='475510'>This looks formidable.</span> </p><p><span m='476960'>But actually,
  there's a lot of simplifications.</span> </p><p><span m='480590'>This term
  here cancels with that term.</span> </p><p><span m='485000'>k plus 1 factorial
  divided by k factorial, what is it?</span> </p><p><span m='490160'>It is just
  a factor of k plus 1.</span> </p><p><span m='498030'>And what do we have
  here?</span> </p><p><span m='500110'>This term is in the denominator of the
  denominator.</span> </p><p><span m='503380'>So it can be moved up to the
  numerator.</span> </p><p><span m='506430'>We have n plus 1 factorial divided
  by n plus 2 factorial.</span> </p><p><span m='510870'>This is just n plus
  2.</span> </p><p><span m='516039'>And this is the final form of the
  answer.</span> </p><p><span m='519640'>This is what the conditional
  expectation of theta is.</span> </p><p><span m='524810'>So now, we can compare
  the two estimates that we have,</span> <span m='528570'>the MAP estimate and
  the conditional expectation</span> <span m='531840'>estimate.</span>
  </p><p><span m='533230'>They're fairly similar, but not exactly the
  same.</span> </p><p><span m='537120'>This means that the mean of a Beta
  distribution</span> <span m='541640'>is not the same as the point at which the
  distribution is</span> <span m='545550'>highest.</span> </p><p><span
  m='546990'>On the other hand, if n is a very large number,</span> <span
  m='550830'>this expression is going to be approximately equal to k over
  n</span> <span m='557450'>when n is large.</span> </p><p><span m='558850'>And
  so in the limit of large n, the two estimators</span> <span m='564730'>will
  not be very different from each other.</span> </p><p></p>
uid: aa2654141506d32ecb8b30fa2f213345
type: courses
layout: video
---
