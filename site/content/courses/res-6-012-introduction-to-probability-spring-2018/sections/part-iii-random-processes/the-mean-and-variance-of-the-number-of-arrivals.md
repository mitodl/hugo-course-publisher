---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 2JoRO8Cydtc
    parent_uid: cfdaad1bea6d07683238d12373ad73bd
    title: Video-YouTube-Stream
    type: Video
    uid: 42d1e16e6c9cd6f782b740d70128705c
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/2JoRO8Cydtc/default.jpg'
    parent_uid: cfdaad1bea6d07683238d12373ad73bd
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 0e2cf18f0e49ad042b74cd207491b58c
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 2JoRO8Cydtc
    parent_uid: cfdaad1bea6d07683238d12373ad73bd
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 986eacc6fd1e23da76345e4a826c6f04
  - id: 2JoRO8Cydtc.srt
    parent_uid: cfdaad1bea6d07683238d12373ad73bd
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-mean-and-variance-of-the-number-of-arrivals/2JoRO8Cydtc.srt
    title: 3play caption file
    type: null
    uid: c4c8edbb6fd5bc4214ec22fbfb4212cb
  - id: 2JoRO8Cydtc.pdf
    parent_uid: cfdaad1bea6d07683238d12373ad73bd
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-mean-and-variance-of-the-number-of-arrivals/2JoRO8Cydtc.pdf
    title: 3play pdf file
    type: null
    uid: 4beb3a2d16ffe2936d089da0596475d6
  - id: Caption-3Play YouTube id-SRT
    parent_uid: cfdaad1bea6d07683238d12373ad73bd
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0ea801fa19e67c3a8fe759d2013e1400
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: cfdaad1bea6d07683238d12373ad73bd
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 22927bc94991f2bace1b0037bfce08b3
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L22-05_300k.mp4
    parent_uid: cfdaad1bea6d07683238d12373ad73bd
    title: Video-Internet Archive-MP4
    type: Video
    uid: dd78c29435c53c516a15211a3f09a01d
inline_embed_id: 36388187themeanandvarianceofthenumberofarrivals39192989
order_index: 2051
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: the-mean-and-variance-of-the-number-of-arrivals
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-mean-and-variance-of-the-number-of-arrivals
title: The Mean and Variance of the Number of Arrivals
transcript: >-
  <p><span m='1420'>Now that we have in our hands the PMF</span> <span
  m='4135'>of the random variable N tau, which is the number of arrivals</span>
  <span m='8320'>during an interval of length tau,</span> <span m='10500'>we can
  go ahead and try to calculate</span> <span m='12700'>the mean and variance of
  this quantity.</span> </p><p><span m='15540'>Regarding the mean, we could use
  just the definition</span> <span m='18630'>of the expected value and then
  carry out</span> <span m='21300'>of this calculation, which is not too
  hard.</span> </p><p><span m='24470'>And in the end, we would obtain an answer
  equal to lambda times</span> <span m='28510'>tau.</span> </p><p><span
  m='29660'>This is indeed the correct formula for the expected value.</span>
  </p><p><span m='33250'>But let us understand why this formula should</span>
  <span m='36620'>be true without doing any calculation.</span> </p><p><span
  m='39900'>Remember that the random variable, the number</span> <span
  m='44010'>of arrivals in the Poisson process,</span> <span m='46790'>is well
  approximated by a binomial random variable</span> <span m='50850'>with those
  particular parameters n and p in the limit</span> <span m='55210'>when delta
  goes to zero.</span> </p><p><span m='57390'>And this works through a
  discretization argument.</span> </p><p><span m='60580'>Therefore, the expected
  value of N tau</span> <span m='64450'>should be approximately equal to the
  expected value of that we</span> <span m='67870'>get from the Bernoulli
  processes, that is the expected</span> <span m='70400'>value of the binomial
  random variable.</span> </p><p><span m='72550'>And the expected value of a
  binomial random variable</span> <span m='75130'>is n times p.</span>
  </p><p><span m='77120'>And n times p evaluates approximately to lambda
  times</span> <span m='82810'>tau.</span> </p><p><span m='83690'>The second
  equality here is approximate because we're</span> <span m='87560'>neglecting
  this order of delta squared term.</span> </p><p><span m='90610'>Now, these
  approximations are increasingly</span> <span m='92860'>exact as we let delta
  go to 0.</span> </p><p><span m='96310'>And when we take the limit as delta
  goes to 0,</span> <span m='99039'>we see that the expected value of the number
  of arrivals</span> <span m='102330'>in the Poisson process will be equal to
  lambda tau.</span> </p><p><span m='106200'>For the variance, we can follow a
  similar argument.</span> </p><p><span m='110200'>First do a binomial
  approximation</span> <span m='114009'>and use the formula for the
  variance</span> <span m='116870'>of a binomial random variable.</span>
  </p><p><span m='119600'>And then, when delta is small, this number p is
  small.</span> </p><p><span m='124390'>And it's negligible compared to
  1.</span> </p><p><span m='126610'>n times p is approximately lambda
  [tau].</span> </p><p><span m='129389'>And so we obtain this expression</span>
  <span m='133400'>This expression here is the correct one.</span> </p><p><span
  m='136240'>If we were to use the formal definition of the variance</span>
  <span m='139920'>and carry out the calculations using the PMF,</span> <span
  m='142920'>this is what we would obtain, except that it</span> <span
  m='145000'>would be somewhat tedious.</span> </p><p><span m='147600'>The
  formulas that we have derived,</span> <span m='149630'>at least the first one,
  is quite intuitive</span> <span m='152200'>and has a natural form.</span>
  </p><p><span m='154170'>The expected number of arrivals is proportional to
  tau.</span> </p><p><span m='158220'>If we double the length of the time
  interval for interest,</span> <span m='161940'>we expect to see twice as many
  arrivals.</span> </p><p><span m='165300'>This formula also reinforces the
  interpretation of lambda</span> <span m='169210'>as an arrival rate.</span>
  </p><p><span m='171140'>Since lambda is the expected number of arrivals
  divided</span> <span m='175590'>by the length of time, it is, really,</span>
  <span m='178870'>the expected number of arrivals per unit time.</span>
  </p><p><span m='183000'>So it's natural to call lambda the arrival
  rate,</span> <span m='186350'>or the intensity of the arrival process.</span>
  </p><p><span m='189750'>Finally, regarding the variance, it is a curious
  fact</span> <span m='193430'>that the variance turns out to be</span> <span
  m='195150'>exactly the same as the expected value.</span> </p><p><span
  m='197850'>And this is a special property of the Poisson PMF.</span> </p>
uid: cfdaad1bea6d07683238d12373ad73bd
type: course
layout: video
---
