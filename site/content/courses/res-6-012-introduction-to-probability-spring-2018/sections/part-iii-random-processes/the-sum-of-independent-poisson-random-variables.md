---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: _IX_9ajyOxI
    parent_uid: 152257699cec59e82dea883d1e9da6dd
    title: Video-YouTube-Stream
    type: Video
    uid: 39b12b822d17833212de30fb50b6f6f2
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/_IX_9ajyOxI/default.jpg'
    parent_uid: 152257699cec59e82dea883d1e9da6dd
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: dfd0cb47efee119a56e4c6b8103ed8a6
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: _IX_9ajyOxI
    parent_uid: 152257699cec59e82dea883d1e9da6dd
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2860a9a29b4bf3166e58c554aec68040
  - id: IX9ajyOxI.srt
    parent_uid: 152257699cec59e82dea883d1e9da6dd
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-sum-of-independent-poisson-random-variables/IX9ajyOxI.srt
    title: 3play caption file
    type: null
    uid: c839a793878d5ff67161eb9b058d989c
  - id: IX9ajyOxI.pdf
    parent_uid: 152257699cec59e82dea883d1e9da6dd
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-sum-of-independent-poisson-random-variables/IX9ajyOxI.pdf
    title: 3play pdf file
    type: null
    uid: 6b4c398d93cb5fd3037962100d90c9bb
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 152257699cec59e82dea883d1e9da6dd
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 931dc40431c4e1dd95bc87b44e2504d3
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 152257699cec59e82dea883d1e9da6dd
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 517953759a2de0cb3e754a0a5b0755c6
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L23-02_300k.mp4
    parent_uid: 152257699cec59e82dea883d1e9da6dd
    title: Video-Internet Archive-MP4
    type: Video
    uid: cd05b8eaa42ac996909ede549da70418
inline_embed_id: 48396968thesumofindependentpoissonrandomvariables82229201
order_index: 2114
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: the-sum-of-independent-poisson-random-variables
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-sum-of-independent-poisson-random-variables
title: The Sum of Independent Poisson Random Variables
transcript: >-
  <p><span m='499'>In this segment, we consider the sum of independent
  Poisson</span> <span m='3380'>random variables, and we establish a remarkable
  fact,</span> <span m='7120'>namely that the sum is also Poisson.</span>
  </p><p><span m='10710'>This is a fact that we can establish</span> <span
  m='13120'>by using the convolution formula.</span> </p><p><span m='15630'>The
  PMF of the sum of independent random variables</span> <span m='19380'>is the
  convolution of their PMFs.</span> </p><p><span m='21980'>So we can take two
  Poisson PMFs, convolve them, carry out</span> <span m='25700'>the algebra, and
  find out that in the end,</span> <span m='28490'>you obtain again a Poisson
  PMF.</span> </p><p><span m='31130'>However, such a derivation is completely
  unintuitive,</span> <span m='34440'>and does not give you any insight.</span>
  </p><p><span m='36520'>Instead, we will derive this fact</span> <span
  m='39540'>by using our intuition about what</span> <span m='42500'>Poisson
  random variables really represent.</span> </p><p><span m='45660'>We will work
  with a Poisson process</span> <span m='48650'>of rate lambda equal to
  1.</span> </p><p><span m='51870'>But let us remind ourselves of the general
  Poisson PMF</span> <span m='56700'>if we have a more general rate
  lambda.</span> </p><p><span m='61060'>This is the PMF of the number of
  arrivals</span> <span m='64260'>in a Poisson process with rate lambda during a
  time</span> <span m='67790'>interval of length tau.</span> </p><p><span
  m='69840'>And this Poisson PMF has a mean equal to lambda tau.</span>
  </p><p><span m='74890'>And you can think of lambda tau as being</span> <span
  m='77510'>the parameter of this Poisson PMF.</span> </p><p><span m='80480'>So
  we say that this is a Poisson PMF with parameter</span> <span m='84550'>equal
  to lambda times tau.</span> </p><p><span m='87510'>Now, let us consider two
  consecutive time intervals</span> <span m='93400'>in this processes that have
  length mu and nu.</span> </p><p><span m='104070'>And let us consider the
  numbers of arrivals</span> <span m='107370'>during each one of these
  intervals.</span> </p><p><span m='109729'>So we have M arrivals here and N
  arrivals there.</span> </p><p><span m='113930'>Of course, M and N are random
  variables.</span> </p><p><span m='117289'>What kind of random variables are
  they?</span> </p><p><span m='119710'>Well, the number of arrivals in the
  Poisson process of rate 1,</span> <span m='124070'>over a period of duration
  mu is going</span> <span m='128330'>to have a Poisson PMF in which lambda is
  one, tau,</span> <span m='134050'>the time interval is equal to mu,</span>
  <span m='136480'>so it's going to be a Poisson random variable with
  parameter,</span> <span m='141270'>or mean, equal to mu.</span> </p><p><span
  m='145120'>Similarly for N, it's going to be a Poisson random variable</span>
  <span m='149560'>with parameter equal to nu.</span> </p><p><span
  m='153160'>Are these two random variables independent?</span> </p><p><span
  m='155940'>Of course they are.</span> </p><p><span m='157250'>In a Poisson
  process, the numbers</span> <span m='159550'>of arrivals in disjoint time
  intervals</span> <span m='162170'>are independent random variables.</span>
  </p><p><span m='166020'>What kind of random variable is their sum?</span>
  </p><p><span m='170200'>Their sum is the total number of arrivals</span> <span
  m='173650'>during an interval of length mu plus nu,</span> <span
  m='177680'>and therefore this is a Poisson random variable</span> <span
  m='181750'>with mean equal to mu plus nu.</span> </p><p><span m='186440'>So,
  what do we have here?</span> </p><p><span m='188340'>We have the sum of two
  independent Poisson random</span> <span m='191040'>variables, and that sum
  turns out also</span> <span m='193760'>to be a Poisson random variable.</span>
  </p><p><span m='196660'>More generally, if somebody gives you</span> <span
  m='199740'>two independent Poisson random variables,</span> <span
  m='202940'>you can always think of them as representing numbers</span> <span
  m='206680'>of arrivals in disjoint time intervals,</span> <span m='209480'>and
  therefore by following this argument,</span> <span m='212100'>their sum is
  going to be a Poisson random variable.</span> </p><p><span m='215980'>And this
  is the conclusion that we wanted to establish.</span> </p><p><span
  m='219130'>It's a remarkable fact.</span> </p><p><span m='221380'>It's similar
  to the fact that we had established</span> <span m='224550'>for normal random
  variables.</span> </p><p><span m='226420'>The sum of independent normal random
  variables</span> <span m='229100'>is also normal, so Poisson and normal
  distributions</span> <span m='233760'>are special in this respect.</span>
  </p><p><span m='236250'>This is a property that most other distributions do
  not</span> <span m='240100'>have, with very few exceptions.</span> </p>
uid: 152257699cec59e82dea883d1e9da6dd
type: course
layout: video
---
