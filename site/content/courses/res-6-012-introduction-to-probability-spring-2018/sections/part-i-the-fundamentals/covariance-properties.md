---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: RQKJBpaCCeo
    parent_uid: ed5e1d99f29963faf21352d5e35fc995
    title: Video-YouTube-Stream
    type: Video
    uid: d2163792aba737b58cd0b5a69839a885
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/RQKJBpaCCeo/default.jpg'
    parent_uid: ed5e1d99f29963faf21352d5e35fc995
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 7b30e96308cd587d41ba7a47c48e199c
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: RQKJBpaCCeo
    parent_uid: ed5e1d99f29963faf21352d5e35fc995
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: edaaae3dc9d5f09161b958cd06c12c62
  - id: RQKJBpaCCeo.srt
    parent_uid: ed5e1d99f29963faf21352d5e35fc995
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/covariance-properties/RQKJBpaCCeo.srt
    title: 3play caption file
    type: null
    uid: a05cf7531e5dcb79f13467be6c65cbb5
  - id: RQKJBpaCCeo.pdf
    parent_uid: ed5e1d99f29963faf21352d5e35fc995
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/covariance-properties/RQKJBpaCCeo.pdf
    title: 3play pdf file
    type: null
    uid: 439c9d392614b0d9614ac8c22bee7b6d
  - id: Caption-3Play YouTube id-SRT
    parent_uid: ed5e1d99f29963faf21352d5e35fc995
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 5dd94e16e5dbc60afc7370a69ff026ca
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: ed5e1d99f29963faf21352d5e35fc995
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1f4285a3e81500145aced2e74380a45e
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L12-06_300k.mp4
    parent_uid: ed5e1d99f29963faf21352d5e35fc995
    title: Video-Internet Archive-MP4
    type: Video
    uid: 3c58978bc0f205bacd179544905a89f1
inline_embed_id: 14312333covarianceproperties553449
order_index: 1140
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: covariance-properties
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/covariance-properties
title: Covariance Properties
transcript: >-
  <p><span m='640'>In this segment, we discuss a few algebraic properties
  of</span> <span m='4260'>the covariance.</span> </p><p><span m='5770'>There is
  nothing deep here, only some observations that</span> <span m='8710'>can be
  useful if we want to carry out covariance</span> <span
  m='12060'>calculations.</span> </p><p><span m='13520'>We start by looking at
  this quantity, the covariance of a</span> <span m='16040'>random variable with
  itself.</span> </p><p><span m='17940'>So it's a special case of this
  definition but where Y is the</span> <span m='21150'>same as X. And therefore,
  this second term here is the same</span> <span m='25090'>as the first
  term.</span> </p><p><span m='26350'>And so what we're left with is the
  expected value of the</span> <span m='30620'>square deviation of the random
  variable from its mean.</span> </p><p><span m='35150'>And we recognize that
  this is the same as the variance of X.</span> </p><p><span m='39130'>So we
  conclude that the covariance of a random</span> <span m='41410'>variable with
  itself is the same as the variance.</span> </p><p><span m='44780'>Now, for the
  variance, we had an alternative formula, which</span> <span m='48560'>was
  often convenient in simplifying variance</span> <span
  m='51980'>calculations.</span> </p><p><span m='53370'>Is there a similar
  formula for the case of the covariance?</span> </p><p><span m='58260'>Let us
  start from the definition and use linearity.</span> </p><p><span m='61860'>We
  have a product here of two terms, and we expand that</span> <span
  m='65730'>product to obtain four different terms.</span> </p><p><span
  m='68800'>The expected value of the sum of these four terms is going</span>
  <span m='71850'>to be the sum of their expectations.</span> </p><p><span
  m='74770'>So let us go through the steps involved.</span> </p><p><span
  m='77520'>We have the expected value of the product of this</span> <span
  m='80780'>term with that term.</span> </p><p><span m='82260'>Gives us expected
  value of X times Y. Then we take the</span> <span m='86180'>expected value of
  the product of this term with that term.</span> </p><p><span m='90520'>And
  because we have a minus sign, we put it out here.</span> </p><p><span
  m='93930'>And we have the expected value of X times the expected value</span>
  <span m='98479'>of Y inside the expectation.</span> </p><p><span
  m='101770'>The next term is going to be the product of this expected</span>
  <span m='106530'>value with Y. And that gives us minus the expected value
  of</span> <span m='113610'>X times Y. And finally, the last term comes by
  multiplying</span> <span m='120320'>this quantity with that quantity.</span>
  </p><p><span m='127110'>And this is what we have by applying linearity to
  the</span> <span m='130940'>definition of the covariance.</span> </p><p><span
  m='133630'>Now, remember that the expected value of a random</span> <span
  m='136350'>variable is a number, it's a constant.</span> </p><p><span
  m='139090'>And constants can be pulled outside expectations.</span>
  </p><p><span m='142870'>So if we do that, what we obtain is the
  following.</span> </p><p><span m='148520'>We pull this constant outside the
  expectation, and we're</span> <span m='151310'>left with the expected value of
  X times the expected value</span> <span m='154405'>of Y. Similarly, for the
  next term, by pulling a constant</span> <span m='159770'>outside the
  expectation, we obtain this expression.</span> </p><p><span m='164000'>And
  finally, for the last term, we have the expected</span> <span m='166900'>value
  of a constant, and this is the same as</span> <span m='169900'>the constant
  itself.</span> </p><p><span m='172460'>We recognize here that the same term
  gets</span> <span m='174930'>repeated three times.</span> </p><p><span
  m='176640'>And because here we have a minus sign, we can cancel this</span>
  <span m='180120'>term with that term.</span> </p><p><span m='182000'>And what
  we're left with is just the difference of these</span> <span m='185670'>two
  terms, and this is an alternative form for the</span> <span
  m='188620'>covariance of two random variables.</span> </p><p><span
  m='190900'>And this form is often easier to work with to calculate</span>
  <span m='195630'>covariances compared with the original definition.</span>
  </p><p><span m='201160'>Let us now continue with some additional
  algebraic</span> <span m='203630'>properties.</span> </p><p><span
  m='205070'>Suppose that we know the covariance of X with Y, and</span> <span
  m='208550'>we're interested in the covariance of this linear</span> <span
  m='211570'>function of X with Y. What is the covariance going to be?</span>
  </p><p><span m='216490'>To simplify the calculations, let us just assume zero
  means.</span> </p><p><span m='222890'>Although, the final conclusion will be
  the same as in the</span> <span m='228710'>case of non-zero means.</span>
  </p><p><span m='231230'>So in the case of zero means, the covariance of two
  random</span> <span m='235340'>variables is just the same as the expected
  value of the</span> <span m='239000'>product of the two random
  variables.</span> </p><p><span m='245370'>And using linearity, this is the
  expected value times a of</span> <span m='251770'>X times Y plus b times the
  expected value of Y. Now, we</span> <span m='259300'>assumed zero means, so
  this term goes away.</span> </p><p><span m='262800'>And what we're left with
  is a times the covariance of X with</span> <span m='269790'>Y. So we see that
  multiplying X by a increases the</span> <span m='275280'>covariance by a
  factor of a.</span> </p><p><span m='277600'>But adding a constant has no
  effect.</span> </p><p><span m='280530'>The reason that it has no effect is
  that if we take a</span> <span m='283120'>random variable and add the constant
  to it, the same</span> <span m='286030'>constant gets added to its
  mean.</span> </p><p><span m='288270'>And so this difference is not
  affected.</span> </p><p><span m='294250'>As our final calculation, let us look
  at the covariance of a</span> <span m='297830'>random variable with the sum of
  two other random variables.</span> </p><p><span m='302370'>Again, we assume
  zero means.</span> </p><p><span m='304690'>And so the calculation is as
  follows.</span> </p><p><span m='308860'>The covariance is the product of the
  two</span> <span m='311130'>random variables involved.</span> </p><p><span
  m='313390'>And then we use linearity of expectations to write this as</span>
  <span m='317030'>the expected value of X times Y plus the expected value of
  X</span> <span m='322270'>times Z.</span> </p><p><span m='323790'>And we
  recognize that this is the same as the covariance of</span> <span m='327320'>X
  with Y plus the covariance of X with Z. So in this</span> <span
  m='337380'>respect, covariances behave linearly.</span> </p><p><span
  m='340800'>They behave linearly with respect to one of the</span> <span
  m='344490'>arguments involved.</span> </p><p></p>
uid: ed5e1d99f29963faf21352d5e35fc995
type: course
layout: video
---
