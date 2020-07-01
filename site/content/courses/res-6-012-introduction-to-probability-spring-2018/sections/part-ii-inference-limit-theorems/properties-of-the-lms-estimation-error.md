---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: BlO3xyeaZME
    parent_uid: b2a67a638e2868c3e8733484b7101cfd
    title: Video-YouTube-Stream
    type: Video
    uid: 5873e17dfc9466361b3024602a8f0c31
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/BlO3xyeaZME/default.jpg'
    parent_uid: b2a67a638e2868c3e8733484b7101cfd
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2e793e4bb9e190733dbad86576fdbc05
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: BlO3xyeaZME
    parent_uid: b2a67a638e2868c3e8733484b7101cfd
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4631c87af73fd9dbbabf9b90ba73b44e
  - id: BlO3xyeaZME.srt
    parent_uid: b2a67a638e2868c3e8733484b7101cfd
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/properties-of-the-lms-estimation-error/BlO3xyeaZME.srt
    title: 3play caption file
    type: null
    uid: 6c137079ff1aa9f4d08d8199f4b6876c
  - id: BlO3xyeaZME.pdf
    parent_uid: b2a67a638e2868c3e8733484b7101cfd
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/properties-of-the-lms-estimation-error/BlO3xyeaZME.pdf
    title: 3play pdf file
    type: null
    uid: 5352c32375ea11dd2b3df0dcfda4c1b8
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b2a67a638e2868c3e8733484b7101cfd
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 3d3c1f4ef4c2363eeb4c18720a9957f4
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b2a67a638e2868c3e8733484b7101cfd
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 27b078beddc7c82f5098673fd0cfd272
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L16-08_300k.mp4
    parent_uid: b2a67a638e2868c3e8733484b7101cfd
    title: Video-Internet Archive-MP4
    type: Video
    uid: febecab6f0fd685397121fa600fb4f64
inline_embed_id: 72703787propertiesofthelmsestimationerror35606779
order_index: 1570
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: properties-of-the-lms-estimation-error
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/properties-of-the-lms-estimation-error
title: Properties of the LMS Estimation Error
transcript: >-
  <p><span m='800'>In this segment, we're going to go over</span> <span
  m='3050'>a few theoretical properties of the estimation error in least</span>
  <span m='6800'>mean squares estimation.</span> </p><p><span m='9140'>Recall
  that our least mean squares estimator</span> <span m='13400'>is the
  conditional expectation of the unknown random variable,</span> <span
  m='16410'>given our observations.</span> </p><p><span m='18830'>Let us define
  the error, which is</span> <span m='20680'>the difference between the
  estimator</span> <span m='22620'>and the random variable that we are trying to
  estimate.</span> </p><p><span m='26160'>Let us start with some
  observations.</span> </p><p><span m='28710'>What is the expected value of our
  estimator?</span> </p><p><span m='32689'>Well, using the law of iterated
  expectations,</span> <span m='36100'>the expectation of a conditional
  expectation</span> <span m='38730'>is the same as the unconditional
  expectation.</span> </p><p><span m='44180'>And using this property, by moving
  this Theta</span> <span m='47650'>to the other side, what we obtain</span>
  <span m='50240'>is that the estimation error has an expectation of 0.</span>
  </p><p><span m='55950'>So this tells us that the estimation error,</span>
  <span m='58370'>on the average, is equal to 0, which is good news.</span>
  </p><p><span m='62570'>In fact, something stronger is true.</span>
  </p><p><span m='66590'>Not just the overall average of the estimation error is
  0,</span> <span m='71900'>but even if you condition on a particular
  measurement, still</span> <span m='76780'>the conditional expectation of your
  estimation error</span> <span m='79660'>is going to be equal to 0.</span>
  </p><p><span m='81610'>Let us derive this relation.</span> </p><p><span
  m='84180'>We're looking at the expected value of Theta tilde, which</span>
  <span m='88740'>is Theta hat minus Theta, conditional on a value of X.</span>
  </p><p><span m='96550'>Now, if I tell you the value of X,</span> <span
  m='99530'>then the estimator is completely determined--</span> <span
  m='102039'>there's no uncertainty about it--</span> <span m='104070'>so the
  expectation of Theta hat, in this conditional universe,</span> <span
  m='108030'>is just Theta hat itself.</span> </p><p><span m='111740'>And we're
  left with the second term,</span> <span m='114990'>but the second term is also
  Theta hat,</span> <span m='119280'>and therefore we obtain a difference of
  0.</span> </p><p><span m='124310'>Let us now move to a slightly more
  complicated question.</span> </p><p><span m='129180'>What is the covariance
  between the estimation</span> <span m='131610'>error and the estimate?</span>
  </p><p><span m='135570'>We will calculate the covariance as follows.</span>
  </p><p><span m='138690'>It is the expected value of the product</span> <span
  m='141740'>of the two random variables that we are interested in,</span> <span
  m='145829'>minus the product of their expectations.</span> </p><p><span
  m='155290'>Now, we already calculated that the expected value</span> <span
  m='158290'>of the estimation error is equal to 0,</span> <span m='162130'>and
  therefore, this term here disappears.</span> </p><p><span m='166760'>This term
  is equal to 0.</span> </p><p><span m='170329'>So we now need to calculate the
  first term.</span> </p><p><span m='174700'>This may seem difficult, but
  conditioning is always</span> <span m='178290'>a great trick, so let's do
  that.</span> </p><p><span m='181050'>Let us start by calculating the
  conditional expectation</span> <span m='185904'>of this product.</span>
  </p><p><span m='194450'>As before, in the conditional universe,</span> <span
  m='197180'>where we're told the value of X, the value of Theta hat</span>
  <span m='201710'>is known.</span> </p><p><span m='202960'>It is becoming a
  constant, so it can</span> <span m='205460'>be pulled outside the
  expectation.</span> </p><p><span m='214150'>But then we can apply the fact
  that we established earlier</span> <span m='218490'>that this term is 0, and
  therefore, we obtain a 0 here.</span> </p><p><span m='224240'>Now, the
  expected value of a random variable</span> <span m='229800'>is the same as the
  expected value</span> <span m='232200'>of the conditional expectation.</span>
  </p><p><span m='234320'>This is, again, the law of iterated
  expectations.</span> </p><p><span m='237700'>Since the conditional expectation
  is 0,</span> <span m='240870'>when we apply the law of iterated
  expectations</span> <span m='243610'>to this quantity, we also obtain a
  0.</span> </p><p><span m='247370'>Therefore, this term is 0 as well,</span>
  <span m='250790'>and we have established what we wanted to show.</span>
  </p><p><span m='256269'>Using this fact, now we can figure out</span> <span
  m='260620'>that the following is true.</span> </p><p><span m='263300'>We write
  the random variable Theta</span> <span m='266270'>as the sum of Theta hat
  minus Theta tilde.</span> </p><p><span m='273110'>This comes simply from this
  definition here,</span> <span m='276420'>by just moving Theta to this
  side,</span> <span m='278659'>and Theta tilde to the other side.</span>
  </p><p><span m='281080'>So Theta is the difference of two random
  variables,</span> <span m='285909'>and these two random variables have 0
  covariance.</span> </p><p><span m='289890'>When two random variables have 0
  covariance,</span> <span m='293310'>then the variance of their sum, or of
  their difference,</span> <span m='297159'>is the sum of the variances.</span>
  </p><p><span m='299270'>And this leads us to this relation--</span> <span
  m='301640'>that the variance of our random variable</span> <span
  m='303560'>can be decomposed into two pieces.</span> </p><p><span
  m='306180'>One of them is the variance of the estimator,</span> <span
  m='310100'>and the other is the variance of the estimation error.</span>
  </p><p><span m='315930'>This is an interesting fact.</span> </p><p><span
  m='318290'>It can actually be derived in a different way, as well.</span>
  </p><p><span m='321360'>It is just a manifestation of the law of total
  variances,</span> <span m='325240'>but hidden in somewhat different
  notation.</span> </p><p><span m='329480'>And this concludes our
  discussion</span> <span m='331060'>of theoretical properties of the estimation
  error.</span> </p><p><span m='334280'>Unfortunately we will not have the
  opportunity</span> <span m='337220'>to use them in any interesting
  ways.</span> </p><p><span m='340180'>On the other hand, they are a
  foundational piece</span> <span m='343120'>for the more general theory of
  least-squares estimation.</span> </p><p><span m='347000'>If you try to develop
  it in a more sophisticated and more</span> <span m='351050'>deep way, it turns
  out that these properties</span> <span m='354300'>are cornerstones of that
  theory.</span> </p><p></p>
uid: b2a67a638e2868c3e8733484b7101cfd
type: courses
layout: video
---
