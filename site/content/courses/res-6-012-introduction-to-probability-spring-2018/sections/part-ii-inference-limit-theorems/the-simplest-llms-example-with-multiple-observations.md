---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: byGWKoOc6EM
    parent_uid: 1040f361c090cd12176f540549fcfbcf
    title: Video-YouTube-Stream
    type: Video
    uid: 4b114a2e6a472c5b96ff24153b18908f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/byGWKoOc6EM/default.jpg'
    parent_uid: 1040f361c090cd12176f540549fcfbcf
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 1d9b5c2d0c90e9c52dd89111550f7de0
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: byGWKoOc6EM
    parent_uid: 1040f361c090cd12176f540549fcfbcf
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: de104b06781ee5d95c3f3f2a0b81769a
  - id: byGWKoOc6EM.srt
    parent_uid: 1040f361c090cd12176f540549fcfbcf
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-simplest-llms-example-with-multiple-observations/byGWKoOc6EM.srt
    title: 3play caption file
    type: null
    uid: a46e5a97f87047d18b0a6af1c10db3ea
  - id: byGWKoOc6EM.pdf
    parent_uid: 1040f361c090cd12176f540549fcfbcf
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-simplest-llms-example-with-multiple-observations/byGWKoOc6EM.pdf
    title: 3play pdf file
    type: null
    uid: e5f8b465193e2b577f8b62501aac16d8
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1040f361c090cd12176f540549fcfbcf
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 31b631618605608988446c5b10e9aedc
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1040f361c090cd12176f540549fcfbcf
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 41c89e7c14fb1516c223bfafb9de9602
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L17-08_300k.mp4
    parent_uid: 1040f361c090cd12176f540549fcfbcf
    title: Video-Internet Archive-MP4
    type: Video
    uid: 10944416f0f017f20ae29a17570bdf17
inline_embed_id: 15461429thesimplestllmsexamplewithmultipleobservations18319999
order_index: 1642
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: the-simplest-llms-example-with-multiple-observations
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-simplest-llms-example-with-multiple-observations
title: The Simplest LLMS Example with Multiple Observations
transcript: >-
  <p><span m='1560'>As we discussed earlier-- even if we</span> <span
  m='4260'>have multiple observations we can still</span> <span m='6390'>find
  the structure of the best linear estimator in a fairly</span> <span
  m='11050'>simple, computational way-- by solving</span> <span m='13650'>a
  system of linear equations.</span> </p><p><span m='15470'>But usually, we do
  not get nice and simple formulas.</span> </p><p><span m='19880'>But here is a
  nice example, in which</span> <span m='22010'>we will get a simple
  formula.</span> </p><p><span m='25430'>The example is something that we
  have</span> <span m='27550'>seen before-- in various guises.</span>
  </p><p><span m='30930'>We're trying to estimate a certain quantity--
  Theta.</span> </p><p><span m='34080'>And what we obtain is multiple, noisy
  observations of Theta.</span> </p><p><span m='39060'>That is-- at each
  observation we see Theta plus a noise term.</span> </p><p><span m='43800'>The
  assumptions that we make is that Theta</span> <span m='46340'>has a prior
  distribution with a certain mean</span> <span m='49290'>and a certain
  variance.</span> </p><p><span m='50820'>And the noise terms are zero
  mean--</span> <span m='53950'>but they have some variance.</span> </p><p><span
  m='56750'>And the additional assumption that we make</span> <span m='59060'>is
  that all of these random variables</span> <span m='61790'>are independent of
  each other.</span> </p><p><span m='63860'>So the noise terms are
  independent</span> <span m='66080'>between themselves-- and also, the noise
  terms are independent</span> <span m='69850'>of Theta.</span> </p><p><span
  m='71360'>This is the usual assumption-- but actually--</span> <span
  m='74060'>in the linear estimation problem,</span> <span m='75640'>we do not
  need to make an independence assumption.</span> </p><p><span m='79010'>It's
  enough for our purposes to just assume</span> <span m='81560'>that they are
  uncorrelated.</span> </p><p><span m='83890'>So we will assume that the
  correlation coefficient</span> <span m='86320'>between any two of these random
  variables is equal to zero.</span> </p><p><span m='92000'>Now we can write
  down the form of the mean squared estimation</span> <span m='97890'>error
  criterion that we have-- and try</span> <span m='100250'>to find good choices
  for the coefficients</span> <span m='102759'>to be attached to each one of the
  observations.</span> </p><p><span m='106590'>However-- we're going to find the
  solution</span> <span m='108940'>to this problem using a shortcut
  that's</span> <span m='111789'>going to bypass all kinds of
  computations.</span> </p><p><span m='115770'>Here's the trick.</span>
  </p><p><span m='118680'>Let us suppose-- in addition-- that these random
  variable were</span> <span m='123840'>not just uncorrelated, but
  independent.</span> </p><p><span m='126740'>And that they happen to be normal
  random variables.</span> </p><p><span m='132790'>This is a problem that we did
  study before--</span> <span m='136760'>and we did find the maximum a
  posteriori probability</span> <span m='140590'>estimate of Theta.</span>
  </p><p><span m='142990'>Because the posterior was normal,</span> <span
  m='145040'>and we found that this was also the conditional expectation</span>
  <span m='148560'>estimator of Theta.</span> </p><p><span m='150450'>And we did
  find a formula for it-- which took this form.</span> </p><p><span
  m='156730'>This was the form of the optimal estimate of Theta.</span>
  </p><p><span m='160670'>If you obtain values for the different
  observations--</span> <span m='164490'>little xi.</span> </p><p><span
  m='167120'>On the other hand-- if you want to translate this</span> <span
  m='169230'>into random variable notation-- then notice that this is
  going</span> <span m='174350'>to be a random variable, this is our
  estimator.</span> </p><p><span m='177620'>it's a conditional expectation of
  Theta given X--</span> <span m='180890'>and it's random because it
  depends</span> <span m='183580'>on the values of the data that we see-- which
  are themselves</span> <span m='187430'>random variables.</span> </p><p><span
  m='188920'>On the other hand-- this x0-- is actually</span> <span
  m='191950'>the prior mean of Theta.</span> </p><p><span m='194220'>So this is
  a constant-- it's not random,</span> <span m='196210'>and that's why we keep
  it with a lowercase notation.</span> </p><p><span m='200500'>Now-- what is
  interesting about this form?</span> </p><p><span m='203400'>It is a linear
  function of the observations.</span> </p><p><span m='207550'>And as we have
  discussed earlier-- if it turns out</span> <span m='211800'>that the
  conditional expectation is linear in the observations,</span> <span
  m='215530'>then this is also the best possible linear estimator.</span>
  </p><p><span m='221079'>So for the special case-- where our random variables
  are</span> <span m='224030'>independent and normal-- we have a formula</span>
  <span m='228060'>for the best linear estimator.</span> </p><p><span
  m='231600'>Now what if they are not normal?</span> </p><p><span
  m='235070'>Suppose that they're not normal.</span> </p><p><span m='237550'>But
  that they have the same means and variances as here--</span> <span
  m='243040'>as in the normal example.</span> </p><p><span m='245830'>Since
  these means and variances are the same--</span> <span m='248870'>and since
  these random variables are uncorrelated--</span> <span m='252330'>it follows
  that also all kinds of covariances</span> <span m='255190'>between the random
  variable is involved here--</span> <span m='257800'>are going to be the same
  as for the normal example.</span> </p><p><span m='262670'>Now, the optimal
  solution to the linear estimation problem--</span> <span m='267150'>as we
  discussed earlier-- only cares</span> <span m='271100'>about the means,
  variances, and covariances</span> <span m='274159'>of the random variables
  involved.</span> </p><p><span m='276380'>The details of the distribution do
  not matter.</span> </p><p><span m='279690'>So whether we have normal
  distributions--</span> <span m='282150'>or non-normal distributions-- as long
  as we're</span> <span m='285890'>making enough assumptions that fix all the
  means, variances,</span> <span m='290100'>and covariances of interest-- we
  should</span> <span m='292680'>be getting exactly the same solution.</span>
  </p><p><span m='296130'>Therefore-- this solution remains valid</span> <span
  m='299560'>for the case of general random variables, as well.</span>
  </p><p></p>
uid: 1040f361c090cd12176f540549fcfbcf
type: courses
layout: video
---
