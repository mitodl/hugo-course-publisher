---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 8Zq9TKaCV-A
    parent_uid: ea04a527a8c1765048c92fe48a921934
    title: Video-YouTube-Stream
    type: Video
    uid: 4bff1cca915da9448d0c65e4da30b8e4
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/8Zq9TKaCV-A/default.jpg'
    parent_uid: ea04a527a8c1765048c92fe48a921934
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d481b0e3183cbe6990308062f890c4a3
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 8Zq9TKaCV-A
    parent_uid: ea04a527a8c1765048c92fe48a921934
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 77eabce97ee84e6c194a9df445d75f8a
  - id: 8Zq9TKaCV-A.srt
    parent_uid: ea04a527a8c1765048c92fe48a921934
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/other-natural-estimators/8Zq9TKaCV-A.srt
    title: 3play caption file
    type: null
    uid: c28129c24db964bb9c8e69681ed55b05
  - id: 8Zq9TKaCV-A.pdf
    parent_uid: ea04a527a8c1765048c92fe48a921934
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/other-natural-estimators/8Zq9TKaCV-A.pdf
    title: 3play pdf file
    type: null
    uid: 6a60e71e22730fdfab54568e5c5a74b6
  - id: Caption-3Play YouTube id-SRT
    parent_uid: ea04a527a8c1765048c92fe48a921934
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: dc7ad721fe0b9944fab000e853ac0dbd
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: ea04a527a8c1765048c92fe48a921934
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1c6195458de593356c22839a90aaff1c
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L20-08_300k.mp4
    parent_uid: ea04a527a8c1765048c92fe48a921934
    title: Video-Internet Archive-MP4
    type: Video
    uid: 3d74dc2ef1af5dbaf18780abb042bc04
inline_embed_id: 53313601othernaturalestimators74344599
order_index: 1885
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: other-natural-estimators
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/other-natural-estimators
title: Other Natural Estimators
transcript: >-
  <p><span m='890'>As we have already discussed, we can estimate an
  unknown</span> <span m='4710'>mean of a certain random variable by generating
  several</span> <span m='8710'>independent samples of that random variable and
  taking</span> <span m='11970'>their average.</span> </p><p><span m='13210'>And
  this procedure is well justified, because of the weak</span> <span
  m='16030'>law of large numbers, which tells us that this estimator</span>
  <span m='20320'>converges when n goes to infinity, in probability, to</span>
  <span m='24730'>the true mean.</span> </p><p><span m='26120'>Now we can apply
  this idea more generally.</span> </p><p><span m='28610'>Suppose we want to
  estimate the expected value of a</span> <span m='31550'>function of a random
  variable X. Now g of X is itself a</span> <span m='36830'>random
  variable.</span> </p><p><span m='37770'>So if we have samples of g of X, we
  can</span> <span m='40340'>use the same procedure.</span> </p><p><span
  m='41880'>How do we do that?</span> </p><p><span m='43130'>We generate
  independent samples of X, and these give</span> <span m='47000'>us independent
  samples of g of X. We use those independent</span> <span m='52250'>samples, we
  average them, and by the weak law of large</span> <span m='56260'>numbers,
  this quantity, as n goes to infinity, will</span> <span m='59730'>converge in
  probability to the expected value of g of X.</span> </p><p><span m='65200'>We
  already used an idea of this form when we tried to</span> <span
  m='68960'>estimate an unknown variance.</span> </p><p><span m='71810'>A
  variance is defined as an expectation.</span> </p><p><span m='74820'>And now
  we can generate samples of X, many independent</span> <span m='79550'>samples,
  calculate this quantity,</span> <span m='81990'>and take the average.</span>
  </p><p><span m='83520'>However, we might not know the mean of the
  distribution.</span> </p><p><span m='87150'>So instead of the true mean, we
  use an estimated mean,</span> <span m='91539'>which is estimated the usual way
  using a sample average.</span> </p><p><span m='95630'>So when n is large, this
  estimated mean is</span> <span m='99360'>close to the true mean.</span>
  </p><p><span m='101380'>So using the estimated mean here will not make
  a</span> <span m='104160'>substantial difference.</span> </p><p><span
  m='105940'>And then we have essentially independent</span> <span
  m='109840'>samples of this quantity.</span> </p><p><span m='113350'>And by
  averaging them, we obtain an estimate of the</span> <span m='118400'>variance,
  which asymptotically, as n goes to</span> <span m='121350'>infinity, will be
  equal to the true variance.</span> </p><p><span m='125080'>Now we can push
  this idea even further.</span> </p><p><span m='127780'>Suppose we wish to
  estimate a covariance.</span> </p><p><span m='130410'>What's a natural way of
  doing this?</span> </p><p><span m='133310'>We can generate independent samples
  of the pair of the</span> <span m='137870'>random variables X and Y, so this
  will be a typical</span> <span m='141680'>independent sample, and replace the
  expected value by</span> <span m='145900'>a sample average.</span>
  </p><p><span m='148540'>That is, we take our i-th sample, i-th pair,
  and</span> <span m='153290'>calculate this quantity, which looks very much
  like the</span> <span m='156660'>quantity in here except that we're using the
  estimated</span> <span m='160190'>means in place of the true means.</span>
  </p><p><span m='163050'>We obtain these quantities and average n of them,
  again using</span> <span m='167610'>the weak law of large numbers.</span>
  </p><p><span m='169320'>One can argue that this estimate will converge to
  the</span> <span m='172620'>true value of the covariance as n goes to
  infinity.</span> </p><p><span m='176220'>And once we have estimates of a
  covariance and of variance,</span> <span m='181050'>then we can use that to
  estimate correlation</span> <span m='183740'>coefficients.</span> </p><p><span
  m='184990'>Look at this formula, which is the definition of the</span> <span
  m='187960'>correlation coefficient.</span> </p><p><span m='189820'>If we just
  replace all quantities involved here by</span> <span m='193340'>corresponding
  estimates, this gives us an estimate of the</span> <span
  m='196700'>correlation coefficient.</span> </p><p><span m='198579'>All of
  these ways of forming estimates can be shown.</span> </p><p><span
  m='202550'>We are omitting the details of the argument, but hopefully</span>
  <span m='205750'>you get the idea by now.</span> </p><p><span m='208230'>All
  of these quantities are consistent estimators.</span> </p><p><span
  m='211510'>That is, when the sample size goes to infinity, they</span> <span
  m='215570'>approach the correct values of what we're trying to
  estimate.</span> </p><p><span m='220230'>So this is just an opening of what
  else a statistician might</span> <span m='224440'>be interested in.</span>
  </p><p><span m='225850'>And if you're wondering what's the further agenda
  after this</span> <span m='229350'>point, it would be something like the
  following.</span> </p><p><span m='232390'>Typically, a statistician might to
  want to say as much</span> <span m='236020'>as possible about the
  probability</span> <span m='237940'>distribution of an estimator.</span>
  </p><p><span m='240150'>For example, we have here an estimate of a
  covariance.</span> </p><p><span m='243540'>This estimate is going to be a
  random variable because it is</span> <span m='247660'>determined by random
  quantities.</span> </p><p><span m='249840'>What is the probability
  distribution of this quantity?</span> </p><p><span m='252580'>Can we describe
  it approximately?</span> </p><p><span m='255050'>What is the mean squared
  error</span> <span m='256760'>associated with this estimator?</span>
  </p><p><span m='259089'>And if you wish to construct confidence intervals
  how</span> <span m='262079'>would you do it?</span> </p><p><span
  m='263120'>These are all topics that statisticians have studied in</span>
  <span m='265910'>depth, and you could see more about these topics if you
  were</span> <span m='269510'>to take a further class on statistics and
  inference.</span> </p><p><span m='272860'>But we will not go any deeper in
  this course.</span> </p><p></p>
uid: ea04a527a8c1765048c92fe48a921934
type: course
layout: video
---
