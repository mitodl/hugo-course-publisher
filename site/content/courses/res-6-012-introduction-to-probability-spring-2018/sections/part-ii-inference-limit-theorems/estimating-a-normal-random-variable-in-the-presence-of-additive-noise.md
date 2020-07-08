---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: qgICsL7ybWc
    parent_uid: d5142655479f7721b3caabb4d71ba2a8
    title: Video-YouTube-Stream
    type: Video
    uid: d75fa4edaeb0bae208df63cf2c11477f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/qgICsL7ybWc/default.jpg'
    parent_uid: d5142655479f7721b3caabb4d71ba2a8
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b5e071505f5377b74e09ffd82bdc34d3
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: qgICsL7ybWc
    parent_uid: d5142655479f7721b3caabb4d71ba2a8
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 9a0a942e298d58ce3a342730cd7c82ee
  - id: qgICsL7ybWc.srt
    parent_uid: d5142655479f7721b3caabb4d71ba2a8
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/estimating-a-normal-random-variable-in-the-presence-of-additive-noise/qgICsL7ybWc.srt
    title: 3play caption file
    type: null
    uid: 59b004d1476e456b3d2f43bd275209e7
  - id: qgICsL7ybWc.pdf
    parent_uid: d5142655479f7721b3caabb4d71ba2a8
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/estimating-a-normal-random-variable-in-the-presence-of-additive-noise/qgICsL7ybWc.pdf
    title: 3play pdf file
    type: null
    uid: d236fd5cd1b913c3d456106ad772e670
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d5142655479f7721b3caabb4d71ba2a8
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: fbbebb96b4e98e45afd6e2641ac12fd2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d5142655479f7721b3caabb4d71ba2a8
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 55627983a15d45fff20a29690c3ede8d
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L15-03_300k.mp4
    parent_uid: d5142655479f7721b3caabb4d71ba2a8
    title: Video-Internet Archive-MP4
    type: Video
    uid: c384e58aea3d1d54b8142f84160694f2
inline_embed_id: 57989632estimatinganormalrandomvariableinthepresenceofadditivenoise37597232
order_index: 1453
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: estimating-a-normal-random-variable-in-the-presence-of-additive-noise
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/estimating-a-normal-random-variable-in-the-presence-of-additive-noise
title: Estimating a Normal Random Variable in the Presence of Additive Noise
transcript: >-
  <p><span m='500'>As a preparation for more complex and more difficult</span>
  <span m='4240'>models, we will start by looking at the simplest model</span>
  <span m='8580'>that there is, that involves a linear relation</span> <span
  m='12330'>and normal random variables.</span> </p><p><span m='15060'>The
  specifics of the model are as follows.</span> </p><p><span m='17930'>There's
  an unknown parameter modeled as a random variable,</span> <span
  m='21490'>Theta, that we wish to estimate.</span> </p><p><span m='23730'>What
  we have in our hands is Theta plus some additive noise,</span> <span
  m='28250'>W. And this sum is our observation,</span> <span m='31790'>X. The
  assumptions that we make are</span> <span m='34390'>that Theta and W are
  normal random variables.</span> </p><p><span m='37470'>And to keep the
  calculations simple,</span> <span m='39520'>we assume that they're standard
  normal random variables.</span> </p><p><span m='42770'>Furthermore, we assume
  that Theta and W</span> <span m='45130'>are independent of each other.</span>
  </p><p><span m='48380'>According to the Bayesian program, inference about
  Theta</span> <span m='54090'>is essentially the calculation of the posterior
  distribution</span> <span m='58450'>of Theta if I tell you that the
  observation, capital</span> <span m='61710'>X takes on a specific value little
  x.</span> </p><p><span m='65209'>To calculate this posterior
  distribution,</span> <span m='67620'>we invoke the appropriate form of the
  Bayes rule.</span> </p><p><span m='71880'>We have the prior of Theta.</span>
  </p><p><span m='73539'>It's a standard normal.</span> </p><p><span
  m='75170'>Now we need to figure out the conditional distribution</span> <span
  m='78280'>of X given Theta.</span> </p><p><span m='81530'>What is it?</span>
  </p><p><span m='84010'>If I tell you that the random variable, capital
  Theta,</span> <span m='88060'>takes on a specific value, little theta,
  then</span> <span m='92190'>in that conditional universe, our
  observation</span> <span m='95650'>is going to be that specific value of
  Theta, which</span> <span m='100890'>is our little theta, plus the noise
  term,</span> <span m='105090'>capital W. This is the relation that's
  holds</span> <span m='108100'>in the conditional universe, where</span> <span
  m='109860'>we are told the value of Theta.</span> </p><p><span m='112970'>Now
  W is independent of Theta.</span> </p><p><span m='115710'>So even though I
  have told you the value of Theta,</span> <span m='119380'>the distribution of
  W does not change.</span> </p><p><span m='121780'>It is still a standard
  normal.</span> </p><p><span m='124160'>So X is a standard normal plus a
  constant theta.</span> </p><p><span m='129139'>What that does is that it
  changes</span> <span m='132110'>the mean of the normal distribution,</span>
  <span m='134920'>but it will still be a normal random variable.</span>
  </p><p><span m='138420'>So in this conditional universe, X</span> <span
  m='141030'>is going to be a normal random variable</span> <span
  m='143790'>with mean equal to theta, and with variance</span> <span
  m='146980'>equal to the variance of W, which is equal to 1.</span>
  </p><p><span m='151190'>So now, we know what this distribution is,</span>
  <span m='154550'>and we can move with the calculation of the posterior.</span>
  </p><p><span m='158530'>So we have the denominator term, which I'm writing
  here.</span> </p><p><span m='164690'>And then we have the density of
  Theta.</span> </p><p><span m='167860'>Since it is a standard normal, it</span>
  <span m='170079'>takes the form of a constant.</span> </p><p><span
  m='174300'>We do not really care about the value of that constant.</span>
  </p><p><span m='178430'>What we care really is the term on the
  exponent.</span> </p><p><span m='182710'>And then we have the conditional
  density of X</span> <span m='187010'>given Theta, which is a normal with these
  parameters.</span> </p><p><span m='191180'>And therefore, it takes the form c
  e to the minus 1/2.</span> </p><p><span m='197510'>It's a density in x.</span>
  </p><p><span m='200079'>And so, up here, we have x minus the mean of that
  density.</span> </p><p><span m='204100'>But the mean is equal to theta,
  squared.</span> </p><p><span m='209370'>And this is the final form.</span>
  </p><p><span m='211120'>Now what we notice here is that we have a few constant
  terms.</span> </p><p><span m='216440'>Another term that depends on x, and then
  a quadratic in theta.</span> </p><p><span m='221310'>So we can write all this
  as some function of x, and then</span> <span m='226360'>e to the negative of
  some quadratic in theta.</span> </p><p><span m='234640'>Now when we're doing
  inference, we are given the value of X.</span> </p><p><span m='239820'>So let
  us fix a particular value of little x</span> <span m='244980'>and concentrate
  on the dependence on theta.</span> </p><p><span m='248770'>So with x being
  fixed, this is just a constant.</span> </p><p><span m='252500'>And as a
  function of theta, it's e to the minus something</span> <span
  m='256000'>quadratic in theta.</span> </p><p><span m='257670'>And we recognize
  that this is a normal PDF.</span> </p><p><span m='263130'>So we conclude that
  the posterior distribution</span> <span m='265380'>of Theta, given our
  observation, is normal.</span> </p><p><span m='270690'>Since it is normal, the
  expected value of this conditional PDF</span> <span m='277260'>will be the
  same as the peak of that the PDF.</span> </p><p><span m='280620'>And this
  would be our point estimate of Theta</span> <span m='284110'>in
  particular.</span> </p><p><span m='285270'>If we use either of the MAP--
  Maximum A Posterior</span> <span m='288610'>Probability-- or the least mean
  squares estimator,</span> <span m='292090'>which is defined as the conditional
  expectation</span> <span m='294240'>of Theta, given the observation that we
  have made.</span> </p><p><span m='297130'>So this conditional expectation is
  just</span> <span m='299480'>the mean of this posterior distribution.</span>
  </p><p><span m='301680'>It is also the peak of that posterior
  distribution.</span> </p><p><span m='305490'>So let us find what the peak
  is.</span> </p><p><span m='308370'>To find the peak, we focus on the exponent
  term, which</span> <span m='312490'>is ignoring the minus sign, the exponent
  term is this one.</span> </p><p><span m='322750'>And to find the peak of the
  distribution,</span> <span m='325420'>we need to find the place where this
  exponent term is smallest.</span> </p><p><span m='331910'>To find out when
  this term is smallest,</span> <span m='333865'>we take its derivative with
  respect to theta</span> <span m='337840'>and set it equal to 0.</span>
  </p><p><span m='339390'>The derivative of this term is theta.</span>
  </p><p><span m='342640'>The derivative of this term is theta minus x.</span>
  </p><p><span m='348380'>We set this to 0.</span> </p><p><span m='351409'>And
  when we solve this equation, we find 2 theta equal to x.</span> </p><p><span
  m='356930'>Therefore, theta is equal to x/2.</span> </p><p><span
  m='360375'>And so, we conclude from here that the peak</span> <span
  m='362860'>of the distribution occurs when theta is equal to x/2.</span>
  </p><p><span m='367930'>And this is our estimate of theta.</span> </p><p><span
  m='373010'>So our estimate takes into account</span> <span m='376220'>that we
  believe that theta is 0 on the average.</span> </p><p><span m='380350'>But
  also takes into account the observation that we have made,</span> <span
  m='384280'>and comes up with a value that's in between our prior mean,</span>
  <span m='388890'>which was 0, and the observation, which is little x.</span>
  </p><p><span m='393870'>So this is what the estimates are.</span> </p><p><span
  m='396800'>If we want to talk about estimators, which are now</span> <span
  m='400750'>random variables, what would they be?</span> </p><p><span
  m='403520'>The estimator is a random variable</span> <span m='406030'>that
  takes this value whenever capital X takes</span> <span m='409420'>the value of
  little x.</span> </p><p><span m='411540'>Therefore, it's the random
  variable,</span> <span m='413530'>which is equal to capital X/2.</span>
  </p><p><span m='416940'>This is a relation between random variables.</span>
  </p><p><span m='419680'>This is a corresponding relation between
  numbers</span> <span m='422290'>if you're given a specific value for little
  x.</span> </p><p><span m='426590'>How special is this example?</span>
  </p><p><span m='430020'>It turns out that the same structure of the
  solution</span> <span m='434900'>shows up even if we assume that Theta and W
  are</span> <span m='439000'>independent normal random variables,</span> <span
  m='441300'>but with some general means and variances.</span> </p><p><span
  m='444330'>You should be able to verify on your own</span> <span m='446480'>by
  repeating the calculations that we just carried out</span> <span
  m='450150'>that the posterior distribution of Theta will still be
  normal.</span> </p><p><span m='455720'>And since it is normal, the peak of the
  distribution</span> <span m='459390'>is the same as the expected value.</span>
  </p><p><span m='461550'>So the expected value, or least mean squares
  estimator,</span> <span m='465320'>coincides with the maximum a-posteriori
  probability</span> <span m='468330'>estimator.</span> </p><p><span
  m='469550'>And finally, although this formula will not</span> <span
  m='472940'>be exactly true, there will be a similar formula</span> <span
  m='476760'>for the estimator, namely the estimator</span> <span
  m='479130'>will turn out to be a linear function of the measurements.</span>
  </p><p><span m='484200'>We will see that these conclusions are actually</span>
  <span m='486830'>even more general than that.</span> </p><p><span
  m='489230'>And this is what makes it very appealing</span> <span m='492730'>to
  work with normal random variables and linear relations.</span> </p>
uid: d5142655479f7721b3caabb4d71ba2a8
type: courses
layout: video
---
